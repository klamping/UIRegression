# PhantomCSS - Page Actions

## Goal

Take a screenshot of a modal window using CasperJS page action scripting

## Introduction

Taking screenshots of specific sections of the page is a powerful feature, even if it requires a little more effort. But what happens when the screenshot you need is hidden behind some sort of action (e.g. a mouse click to open a modal window)?

Lucky, PhantomCSS is tied directly in to CasperJS/PhantomJS, so all of the functionality of those two frameworks is available for use. 

### What are PhantomJS and CasperJS?

Officialy, [PhantomJS](http://phantomjs.org/) is a "headless WebKit engine". In simpler terms, PhantomJS is a browser that's built for testing and automation. It does almost everything a regular browser does, but behind the scenes. "Headless" comes from the fact that it doesn't have a visual interface. All interaction takes place via scripts.

CasperJS comes in to help with scripting. [According to its website](http://casperjs.org/):

> It eases the process of defining a full navigation scenario and provides useful high-level functions, methods & syntactic sugar for doing common tasks.

In other words, it makes working with PhantomJS easier.

PhantomCSS ties in to both of these to provide a very functional suite of tools.

## Resources
- http://docs.casperjs.org/en/latest/quickstart.html
- http://helloanselm.com/2014/testing-css-states-with-phantomcss/

### Pre-reqs

See previous PhantomCSS exercise for Pre-reqs

## Assignment

1. Open 'add-ons.html' in your browser for reference.
2. In your editor, open the 'phantom-addons.js' file.
3. Again, add the function to start CasperJS.
4. Since we're trying 

## Conclusion 

### Further Reading

- https://github.com/chrisgladd/grunt-phantomcss

## Spoilers

### Part 1 - Step 3

```
casper.start('http://localhost:8080/add-ons.html')
```
