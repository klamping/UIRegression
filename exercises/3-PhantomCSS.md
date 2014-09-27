# PhantomCSS

While Wraith is simple to set up, it can be limited in its functionality. Since screenshots are taken of the entire page, this can render diffs 

## Goal
Write a PhantomCSS script to validate individual components on the style guide.

## Resources
- https://github.com/Huddle/PhantomCSS/blob/master/demo/testsuite.js

### Pre-reqs

You must have the following installed:

- [CasperJS 1.1 Beta](http://docs.casperjs.org/en/latest/installation.html)
- [PhantomCSS](https://github.com/Huddle/PhantomCSS#download)

## Assignment

### Part 1 - Selector based screenshots

1. Open 'style-guide.html' in your browser. Keep it open for reference.
2. In your editor of choice, create a new file titled 'phantom-styleguide.js'
3. In that file, start CasperJS by using `casper.start`, passing in the URL to the styleguide page on your local server
4. Use the `phantomcss.screenshot` function to capture a screenshot of the page breadcrumbs (this requires loading and initializing PhantomCSS in your file).
5. In a new `.then` command, run the `phantomcss.compareAll` function.
6. Create a baseline screenshot by running `casperjs test phantom-styleguide.js` on the command line.
7. Validate the scenario by running the same command again, ensuring it doesn't report a difference.
8. In the global styles, remove the text-underline from all links.
9. Run phantomcss again, this time checking that it caught the change to the breadcrumbs.

### Part 2 - Page Actions

Taking screenshots of specific sections of the page is a powerful feature, even if it requires a little more effort. But what happens the screenshot you need is hidden behind some sort of action (e.g. a mouse click to open a modal window)?

Lucky, PhantomCSS is tied directly in to CasperJS/PhantomJS, so all of the functionality of those two frameworks is available.

1. Switch over to 'add-ons.html' in your browser.
2. Create a new file titled 'phantom-addons.js'
3. Again, load PhantomCSS and start CasperJS.
4. Since we're trying 

## Conclusion 

### Further Reading
- https://github.com/chrisgladd/grunt-phantomcss
- 

## Spoilers

### Part 1 - Step 3
```
casper.start('http://localhost:8080/style-guide.html')
```

### Part 1 - Step 4
```
var phantomcss = require('phantomcss');

phantomcss.init();

casper.start('http://localhost:8080/style-guide.html')
.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
})
```

### Part 2 - Step 3
```
var phantomcss = require('phantomcss');

phantomcss.init();

casper.start('http://localhost:8080/add-ons.html')
```
