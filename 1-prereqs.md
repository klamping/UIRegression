# Before you start

Before getting started, you will need to install some pre-requisites that the regression testing tools use. 

### The things the tools need to run:

- Ruby. I recommend [RVM](http://rvm.io/) or [RBENV](http://rbenv.org/) to easily install Ruby. A Ruby version of ruby-2.0.0-p247 or higher is required.
- Node. I recommend using [NVM for Node](https://github.com/creationix/nvm)
- [PhantomJS](http://phantomjs.org/). Install via Homebrew (`brew install phantomjs`) or via NPM (`npm install -g phantomjs`)
- [ImageMagick](http://www.imagemagick.org/). Install via Homebrew: `brew install imagemagick`
- Alternatively, you can use the [thoughtbot/laptop repo](https://github.com/thoughtbot/laptop) to help with dependency installation.
- [CasperJS 1.1 Beta](http://docs.casperjs.org/en/latest/installation.html) Install via Homebrew `brew install casperjs`

## And the tools themselves:
- [Wraith](https://github.com/BBC-News/wraith/#installation)
- [PhantomCSS](https://github.com/Huddle/PhantomCSS) `npm install phantomcss`
- [DiffUX](https://github.com/diffux/diffux#mac-os-x-using-homebrew)

## Also some technical skills

- Basic understanding of the command line
- Intermediate understanding of CSS/SASS
- Intermediate understanding of JavaScript


### Having Installation Troubles?

### PG gem install issues?

Check out [this Stack Overflow question](http://stackoverflow.com/questions/19262312/installing-pg-gem-failure-to-build-native-extension/19620569#19620569).

### Config file not found?

Wraith is a little picky about 

#### Alternatives

Sometimes we customize our machines a little too much, or end up with an out of date dependency that just won't upgrade, causing installation frustration and dependency nightmares. If you're faced with a situation like this, here are a couple alternative ways to get things set up:

- Use [Cloud9IDE](http://c9.io), clone this repo and install the tools via its command line.
- Work off of a virtual machine using a tool like [Vagrant](https://www.vagrantup.com/).
