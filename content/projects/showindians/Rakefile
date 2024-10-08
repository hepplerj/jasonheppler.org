desc 'deploying via rsync'
task :deploy do
  # uploads ALL files b/c I often do site-wide changes and prefer overwriting all
  puts 'Currently turned off. Configure this first!'
  # remove --rsh piece if not using 22
  #sh "time jekyll && rsync -rtzh --progress _site/ jasonhep@jasonheppler.org:/home1/jasonhep/public_html/"
  #puts 'Done!'
end

desc "nuke and rebuild"
task :nuke do
    sh 'rm -rf _site'
    system "jekyll"
end

desc "rebuild"
task :rebuild do
  sh 'rm -rf _site'
  system 'time jekyll serve'
end

desc "preview site in browser with localhost:4000"
task :preview do
  puts "Starting site preview in http://localhost:4000."
  system "jekyll serve --watch"
end

desc "give title as argument and create new entry"
# usage rake write["Post Title Goes Here","date","category"]
# category is optional
# date should be in YYYY-MM-DD format
task :write, [:title, :sourcedate, :category] do |t, args|
  filename = "#{args.sourcedate}-#{args.title.gsub(/\s/, '-').downcase}.md"
  path = File.join("_posts", filename)
  if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS
---
layout: single
created: #{Time.now}
title: #{args.title}
author: 
date: #{args.sourcedate}
source: 
tags:
- 
category: #{args.category}
---

![#{args.title}](path/to/jpg.jpg "#{args.title}")

# #{args.title}

EOS
    end
    puts "Now opening #{path} in vim..."
    system "mvim #{path}"
end
