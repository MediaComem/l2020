source "https://rubygems.org"
ruby "2.4.3"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem 'dotenv', :groups => [:development, :test]

gem "jekyll", "3.8.5"
gem 'wdm', '~> 0.1.0' if Gem.win_platform?

gem "koala", "~> 2.2"

gem "twitter", "~> 6.0.0"

gem "hashie"

gem "sinatra"

gem "instagram", :git => 'git://github.com/gunnertech/instagram-ruby-gem.git'

gem "mini_magick"

gem 'nokogiri'

gem 'metainspector'

gem 'packr'

group :jekyll_plugins do
  gem "jekyll-contentful-data-import"
  gem "jekyll-multiple-languages-plugin"
end

group :development do
    require 'resolv'
    require 'resolv-replace'
end

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
end
