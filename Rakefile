# Jason Heppler
# Updated 2014-07-13

require "rake/clean"
require "stringex"

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
    sh "jekyll"
end

desc "Build the production version of the site"
task :build do
  puts "\nBuilding the production version of the site ..."
  ok_failed system "jekyll build"
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
task :write do |t|
  title = get_stdin("What is the title of the post? ")
  link_check = get_stdin("Is this a link post? (y/n) ")
  link_url = if link_check == "y" then get_stdin("Enter url: ") end

  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{title.gsub(/\s/, '-').downcase}.md"
  path = File.join("_posts", filename)
    if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}"
    if link_check == "y" then post.puts "external-url: #{link_url}" end
    if link_check == "n" then post.puts "image: \n    feature: \n    thumb: " end
    post.puts "categories: []"
    post.puts "tags: []"
    post.puts "---"
  end
  puts "Now opening #{path} in Sublime..."
  system "subl #{path}"
end

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
