# Jason Heppler
# Modified from Jeff McFadden:
# http://jeffmcfadden.com/blog/2011/04/13/rsync-your-jekyll/

## -- Config -- ##
source_dir  = "_site"
draft_dir   = "_drafts"
posts_dir   = "_posts"
server_port = "4000"

## -- Working with Jekyll -- ##
desc 'default: list available rake tasks'
task :default do
	puts 'Try one of these specific tasks:'
	sh 'rake --tasks --silent'
end

desc 'deploy to jasonheppler.org via rsync'
task :deploy do
  # uploads ALL files b/c I often do site-wide changes and prefer overwriting all
  puts 'DEPLOYING TO JASONHEPPLER.ORG'
  # remove --rsh piece if not using 22
  sh "time jekyll && rsync -rtzh --progress _site/ jasonhep@jasonheppler.org:/home1/jasonhep/public_html/"
  puts 'Done!'
end

desc "nuke and rebuild"
task :nuke do
    sh 'rm -rf _site'
    system "jekyll"
end

desc "watch the site and regenerate when it changes"
task :watch do
  puts "Starting to watch source with Jekyll."
  system "jekyll --auto"
end

desc "preview site in browser with localhost:4000"
task :preview do
  puts "Starting site preview in http://localhost:4000."
  system "jekyll --server"
end

desc "give title as argument and create new post"
# usage rake write["Post Title Goes Here"]
# category is optional
task :write, [:title, :category] do |t, args|
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '-').downcase}.md"
  path = File.join("_posts", filename)
  if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS
---
layout: post
title: #{args.title}
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
tags:
- 
---
EOS
    end
    puts "Now opening #{path} in Sublime Text..."
    system "sublime #{path}"
end

desc "give title as argument and create new post"
# usage rake link["Post Title Goes Here", link]
# category is optional
task :link, [:title, :hreflink] do |t, args|
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '-').downcase}.md"
  path = File.join("_posts", filename)
  if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS
---
layout: post
title: #{args.title}
external-url: #{args.hreflink}
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
tags:
- 
---
EOS
    end
    puts "Now opening #{path} in Sublime Text..."
    system "sublime #{path}"
end

desc "give title as argument for draft post"
# usage rake draft["Post Title Goes Here"]
# category is optional
task :draft, [:title, :category] do |t, args|
  filename = "#{Time.now.strftime('%Y-%m-d')}-#{args.title.gsub(/\s/, '-').downcase}.md"
  path = File.join("_drafts", filename)
  if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS
---
layout: post
title: #{args.title}
date: #{Time.now.strftime('%Y-%m-d %k:%M:%S')}
tags:
- 
---
EOS
    end
    puts "Now opening #{path} in Sublime Text..."
    system "sublime #{path}"
end
