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

1. Open the 'Addons' page in your browser for reference.
2. In your editor, open the 'phantom-addons.js' file.
3. Again, add the function to start CasperJS immediatly after the 'Tests go here' comment. Be sure to have it load the 'addons.html' page.
4. Since we need to first open the modal, we'll use CasperJS to trigger the click. In a new `then` callback, use [the click function](http://docs.casperjs.org/en/latest/modules/casper.html#click) to click the link inside the "Here's a simple modal dialog" sentence.
5. The modal animates open, so we need to wait for the animation to finish before capturing a screenshot. We could set a timeout, but there's a better way. Using [Casper's 'waitForSelector' function](http://docs.casperjs.org/en/latest/modules/casper.html#waitforselector), add a wait for the `fancybox-opened` class to appear on the `fancybox-wrap` class/container.
6. Inside of the 'waitForSelector' callback function, add you PhantomCSS screenshot command for the `.fancybox-wrap` class.
7. Now you're ready to run your tests. Use `casperjs test phantom-addons.js` to try out your script.
8. Add a bottom margin of `1em` on the `.page-title` class in your CSS (in the `main.css` or `_common.scss` file).
9. Run your tests again and see if it catches the difference.

## Conclusion

There's a wealth of functionality that PhantomJS/CasperJS provide. By having our UI regression testing tool tied in to it, we can create very complex scenarios to validate our UI. 

### Further Reading

- https://github.com/chrisgladd/grunt-phantomcss

## Spoilers

### Step 3

```
casper.start('http://localhost:8080/add-ons.html');
```

### Step 4

```
casper.then(function () {
    this.click('a[href="#modal-content"]');
});
```

### Step 5

```
casper.waitForSelector('.fancybox-opened.fancybox-wrap', function () {
    
});
```

### Step 6

```
casper.waitForSelector('.fancybox-opened.fancybox-wrap', function () {
    phantomcss.screenshot('.fancybox-wrap', 'Modal Overlay');
});
```
