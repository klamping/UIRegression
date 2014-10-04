UI Regression Workshop
============

The exercises outlined in this repo are aimed at providing an introduction to UI regression testing. They're designed to provide a partially real-world codebase from which to demo three tools: Wraith, PhantomCSS and DiffUX.

## Getting Started

1. Clone this repo to your local dev environment
2. Install dependencies by running `npm install`
3. Get started with [the first exercise](./exercises/1-Wraith.md)

## Technical Skills Required

- Basic understanding of the command line
- Intermediate understanding of CSS/SASS
- Intermediate understanding of JavaScript

## Tool Installation

- [Wraith Install Guide](https://github.com/BBC-News/wraith/#installation)
 - [PhantomJS](http://phantomjs.org/download.html)
- [PhantomCSS](https://github.com/Huddle/PhantomCSS)
- [DiffUX](https://github.com/diffux/diffux#installing)

You'll also need Ruby and Node.js installed. I recommend using [NVM for Node](https://github.com/creationix/nvm) and [RVM for Ruby](http://rvm.io/rvm/install) to manage versions easily.

You'll also need ImageMagick `brew install ImageMagick`

### Having Installation Troubles?

### PG gem install issues?

Check out [this Stack Overflow question](http://stackoverflow.com/questions/19262312/installing-pg-gem-failure-to-build-native-extension/19620569#19620569).

#### Alternatives

Sometimes we customize our machines a little too much, or end up with an out of date dependency that just won't upgrade, causing installation frustration and dependency nightmares. If you're faced with a situation like this, here are a couple alternative ways to get things set up:

- Use [Cloud9IDE](http://c9.io), clone this repo and install the tools via its command line.
- Work off of a virtual machine using a tool like [Vagrant](https://www.vagrantup.com/).

# Contributions are Welcome!

While I've put a lot of effort trying to polish everything up, there will inevitably be mistakes or things that could be explained more clearly. I would love any help I can get to clean things up.

Also, if you see a tool that isn't covered here, feel free to open it up as an issue or, even better, submit a pull request!

# Re-Use Welcome

As outlined by the [license](https://github.com/klamping/UIRegression/blob/master/LICENSE), re-use/adaption of any of this content is welcome, whether for work, meetups or conferences.
