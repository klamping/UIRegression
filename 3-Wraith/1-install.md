# Wraith Intro

[Wraith is a responsive screenshot comparison tool](http://bbc-news.github.io/wraith/index.html). It requires Ruby, Node and PhantomJS.

It compares two versions of a website to check for visual regressions via an image diff, then outputs those image in a friendly HTML gallery for easy comparison.

## Resources

The following resources may be helpful as you complete these exercises:

- https://github.com/BBC-News/wraith
- http://bbc-news.github.io/wraith/index.html
- https://www.youtube.com/watch?v=gE_19L0l2q0

## Installation

### TL;DR

```
gem install wraith
```

### DW;NH (Didn’t work, need help)

#### Check the Ruby Version

As stated, make sure you the version of ruby you have running matches. Run `ruby -v` on the command line and make sure that outputs [the version defined in the Wraith repo](https://github.com/BBC-News/wraith/blob/master/.ruby-version). If it doesn’t match, refer to [the ‘before you begin’ guide](./../1-prereqs.html#the-things-the-tools-need-to-run:) for details on how to make it match.

#### Check your pre-reqs

If you skipped over [the pre-req install instructions](./../1-prereqs.html#the-things-the-tools-need-to-run:), be sure you’ve installed the following dependencies:

- [imagemagick](http://www.imagemagick.org/script/binary-releases.php)
- [phantomjs](http://phantomjs.org/download.html)

#### Is RubyGems installed?

This method only works if you have [rubygems](https://rubygems.org/) installed, 

If not, [Wraith has detailed instructions available](http://bbc-news.github.io/wraith/os-install.html) to help with installation on any system.