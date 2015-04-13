# Before you start

Before getting started, there a few items to note.

## Expected technical skills

Not to scare you away, but the following skills are assumed:

- Basic understanding of the command line
- Intermediate understanding of CSS/SASS
- Intermediate understanding of JavaScript

You can complete the exercises without these skills, but you may need to do a little extra research to fill in the details.

## Computer setup

You will need to install some pre-requisites that the regression testing tools use. They are:

### The things the tools need to run:

#### Ruby

I recommend using [RVM](http://rvm.io/rvm/install) or [RBENV](https://github.com/sstephenson/rbenv#installation) to easily manage Ruby installs. This helps with differences between the require version of Ruby between Wraith and DiffUX.

To check your version, open a command line and enter `ruby -v`. This will output the current version of Ruby you have running.

If it doesn’t match what you want, never fear. If you’re using RVM, [you can install and use a different version fairly easily](http://cheat.errtheblog.com/s/rvm). [RBENV should manage this for you](https://github.com/sstephenson/rbenv#installing-ruby-versions).

#### Node

I recommend using [NVM for Node](https://github.com/creationix/nvm). You can [install Node manually](https://nodejs.org/), but [NVM makes managing different versions much simpler](https://github.com/creationix/nvm#usage).

#### Other Stuff

- [ImageMagick](http://www.imagemagick.org/). Install via Homebrew: `brew install imagemagick` or via NPM (`npm install -g imagemagick`)
- [PhantomJS](http://phantomjs.org/). Install via Homebrew (`brew install phantomjs`) or via NPM (`npm install -g phantomjs`)
- [CasperJS](http://docs.casperjs.org/en/latest/installation.html) Install via Homebrew `brew install casperjs` or via NPM (`npm install -g casperjs`)

## And the tools themselves:
- [Wraith](https://github.com/BBC-News/wraith/#installation)
- [PhantomCSS](https://github.com/Huddle/PhantomCSS) `npm install phantomcss`
- [Gemini](https://github.com/bem/gemini) `npm install -g gemini`
- [DiffUX](https://github.com/diffux/diffux#mac-os-x-using-homebrew)

### Having Installation Troubles?

You can use the [thoughtbot/laptop repo](https://github.com/thoughtbot/laptop) to help with dependency installation. It is an install script that takes care of everything you need besides  phantom/casper and the tools themselves.

#### PG gem install issues?

Check out [this Stack Overflow question](http://stackoverflow.com/questions/19262312/installing-pg-gem-failure-to-build-native-extension/19620569#19620569).

#### Try it on a virtual machine

Sometimes we customize our machines a little too much, or end up with an out of date dependency that just won't upgrade, causing installation frustration and dependency nightmares. If you're faced with a situation like this, you can try working off of a virtual machine using a tool like [Vagrant](https://www.vagrantup.com/). This tutorial doesn’t go in to detail on how to do that though.
