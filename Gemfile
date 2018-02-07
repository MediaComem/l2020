source "https://rubygems.org"
ruby "2.3.3"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem 'dotenv', :groups => [:development, :test]

gem "jekyll"
gem 'wdm', '~> 0.1.0' if Gem.win_platform?

gem "koala", "~> 2.2"

gem "twitter", "~> 6.0.0"

gem "hashie"

gem "sinatra"

gem "instagram", :git => 'https://github.com/gunnertech/instagram-ruby-gem.git'

gem "mini_magick"

gem 'nokogiri'

gem 'metainspector'

gem 'packr'

gem "jekyll-with-prismic" , :path => "../jekyll-with-prismic"
#gem "jekyll-with-prismic" , :git => 'https://github.com/MediaComem/jekyll-with-prismic.git', :branch => 'multiple-languages'
#gem "jekyll-with-prismic" , :git => "git://github.com/MediaComem/jekyll-with-prismic.git"

group :development do
    require 'resolv'
    require 'resolv-replace'
end