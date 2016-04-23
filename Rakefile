# Jason Heppler
# Updated 2016-01-23

require "rake/clean"
require "stringex"

# Set "rake watch" as default
task :default => :preview

# Get and parse the date
DATE = Time.now.strftime("%Y-%m-%d")

# Directories
POSTS = "source/_posts"
DRAFTS = "source/_drafts"

# Tasks

desc "New draft post"
task :draft do |t|
  title = get_stdin("What is the title of the post? ")
  link_check = get_stdin("Is this a link post? (y/n) ")
  link_url = if link_check == "y" then get_stdin("Enter url: ") end
  filename = "source/_drafts/#{title.to_url}.md"

  puts "Creating new draft: #{filename}" 
  open(filename, "w") do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    if link_check == "y" then post.puts "external-url: #{link_url}" end
    if link_check == "n" then post.puts "image: \n    feature: \n    thumb: " end
    post.puts "categories: "
    post.puts "tags: "
    post.puts "..."
  end
end

desc "Move a post from _drafts to _posts"
task :publish do
  extension = "md"
  files = Dir["#{DRAFTS}/*.#{extension}"]
  files.each_with_index do |file, index|
    puts "#{index + 1}: #{file}".sub("#{DRAFTS}/", "")
  end
  print "> "
  number = $stdin.gets
  if number =~ /\D/
    filename = files[number.to_i - 1].sub("#{DRAFTS}/", "")
    FileUtils.mv("#{DRAFTS}/#{filename}", "#{POSTS}/#{DATE}-#{filename}")
    puts "#{filename} was moved to '#{POSTS}'."
  else
    puts "Please choose a draft by the assigned number."
  end
end

desc "Build the production version of the site"
task :build do
  puts "\nBuilding the production version of the site ..."
  ok_failed system "jekyll build"
end


desc "Preview the site with Jekyll with POW"
task :preview do
  puts "Previewing the site locally with Jekyll."

  jekyllPid  = Process.spawn("jekyll build --watch --config, _config.yml")

  trap("INT") {
    [jekyllPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid].each { |pid| Process.wait(pid) }
end

task :build do
  puts "\nBuilding the production version of the site ..."
  system "jekyll build"
end

desc "rsync to server"
task :rsync do
	puts "\nDeploying the site via rsync..."

	ssh_port       = "22"
	ssh_user       = "jasonhep@jasonheppler.org"
	rsync_delete   = true
	rsync_options  = "--checksum --stats -avz -e"
	public_dir     = "_site/"
	document_root  = "~/public_html/jasonheppler/"

	exclude = ""
	if File.exists?('./rsync-exclude')
		exclude = "--exclude-from '#{File.expand_path('./rsync-exclude')}'"
	end

	ok_failed system("rsync #{rsync_options} 'ssh -p #{ssh_port}' #{exclude} #{"--delete" unless rsync_delete == false} #{public_dir}/ #{ssh_user}:#{document_root}")
end

desc "Build and deploy the production version of the site"
task :deploy => [:build, :rsync]

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def ok_failed(condition)
  if (condition)
    puts "OK"
  else
    puts "FAILED"
  end
end
