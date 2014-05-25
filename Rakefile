# Jason Heppler

require "rake/clean"

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

desc "Nuke and rebuild"
task :nuke do
    sh 'rm -rf _site'
    system "jekyll"
end

desc "Preview the site with Jekyll"
task :preview do
  puts "Previewing the site locally with Jekyll."
  jekyllPid  = Process.spawn("jekyll serve --watch")
  trap("INT") {
    [jekyllPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }
  [jekyllPid].each { |pid| Process.wait(pid) }
end

desc "Give title as argument and create new post"
# usage rake write["Post Title Goes Here",category]
# category is optional
task :write, [:title, :category] do |t, args|
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '-').downcase}.md"
  path = File.join("_posts", filename)
  if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS
---
layout: post
title: "#{args.title}"
description:
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
image:
  feature:
  thumb:
categories: []
tags: [#{args.category}]
---
EOS
    end
    puts "Now opening #{path} in vim..."
    system "vim #{path}"
end
