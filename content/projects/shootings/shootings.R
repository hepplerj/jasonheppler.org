library(tidyverse)
library(jahMisc)
library(plotly)

shootings_2013 <- read_csv("shootings_2013.csv")
shootings_2014 <- read_csv("shootings_2014.csv")
shootings_2015 <- read_csv("shootings_2015.csv")
shootings_2016 <- read_csv("shootings_2016.csv")
shootings_2017 <- read_csv("shootings_2017.csv")

shootings_2013_filtered <- 
  shootings_2013 %>% select(date, killed, wounded, location)
names(shootings_2013_filtered) <- c("date","killed","injured","location")

shootings_2014_filtered <- shootings_2014 %>%
  select(Date, Dead, Injured, Location)
names(shootings_2014_filtered) <- c("date","killed","injured","location")

shootings_2015_filtered <- shootings_2015 %>% 
  select(Date, Dead, Injured, Location)
names(shootings_2015_filtered) <- c("date","killed","injured","location")

shootings_2016_filtered <- shootings_2016 %>%
  select("Incident Date", "State", "City Or County", "# Killed", "# Injured")
shootings_2016_filtered$location <- paste(shootings_2016_filtered$`City Or County`, ", ", shootings_2016_filtered$State)
shootings_2016_filtered$`City Or County` <- NULL
shootings_2016_filtered$State <- NULL
names(shootings_2016_filtered) <- c("date","killed","injured","location")

shootings_2018_filtered <- shootings_2017 %>% 
  select("Incident Date", "State", "City Or County", "# Killed", "# Injured")
shootings_2018_filtered$location <- paste(shootings_2018_filtered$`City Or County`, ", ", shootings_2018_filtered$State)
shootings_2018_filtered$`City Or County` <- NULL
shootings_2018_filtered$State <- NULL
names(shootings_2018_filtered) <- c("date","killed","injured","location")

all_data <- bind_rows(shootings_2013_filtered, shootings_2014_filtered, shootings_2015_filtered, shootings_2016_filtered, shootings_2018_filtered)

all_data_tidy <- all_data %>% 
  gather(injured_killed, count, 2:3)

# Clean up inconsistent dates
library(lubridate)
all_data_tidy$date <- parse_date_time(x = all_data_tidy$date, 
                                      orders = c("d/m/y", "m d, y"))

all_data_tidy$count <- as.numeric(all_data_tidy$count)

write_csv(all_data_tidy, "tidy_data.csv")
write_csv(all_data, "all_data.csv")

plot <- ggplot(all_data_tidy, aes(date, count, fill = injured_killed)) + geom_bar(stat="identity") +
  theme_jah() +
  scale_fill_manual(values=c("#6b486b", "#ff8c00")) +
  theme(axis.text.x = element_blank()) +
  ggtitle("U.S. Mass Shootings, 2013-2018") +
  labs(fill="")
plot

## Map of shootings


## Calendar Plot

ggplot(all_data_tidy, aes(date, count, fill = injured_killed)) +
  geom_tile() + facet_grid(date~.) +
  ggtitle("Mass Shootings")
