# PhantomCSS

## Goal
Write a PhantomCSS script to validate individual components on the style guide.

## Introduction

While Wraith is simple to set up, it can be limited in its functionality. Since screenshots are taken of the entire page, this can render diffs useless if a small sizing change at the top of the page pushes the content below down (as seen in the first Wraith exercise).

PhantomCSS offers an alternative. Instead of full-page screenshots, you're able to select certain elements based on CSS selectors. This provides more granularity in your testing. It's a little more work, but can be very helpful in the long run. 

## Resources
- http://tldr.huddle.com/blog/css-testing/
- https://github.com/Huddle/PhantomCSS#getting-started-try-the-demo

### Pre-reqs

You must have the following installed:

- [CasperJS 1.1 Beta](http://docs.casperjs.org/en/latest/installation.html)
- [PhantomCSS](https://github.com/Huddle/PhantomCSS#download): `npm install phantomcss`

## Assignment

1. Open 'style-guide.html' in your browser. Keep it open for reference.
2. In your editor, open the 'phantom-styleguide.js' file.
3. In that file, directly after 'Tests go here' comment, add the line to start CasperJS by using `casper.start(MY_URL)` (replacing MY_URL with the URL to the styleguide page on your local server).
4. In a new `.then` callback, add a call to the `phantomcss.screenshot` function to capture a screenshot of the page breadcrumbs. You'll want to pass in the selector used by the breadcrumb container.
5. In another new `.then` callback, add another call to the `phantomcss.screenshot` function, this time passing in the selector for the primary navigation.
6. In another new `.then` callback, run the `phantomcss.compareAll()` function to have phantom compare our screenshots.
7. In the command line, create a baseline set of screenshots by running `casperjs test phantom-styleguide.js`. It should mention something about being your first time running the tests.
8. Run the same command again. This time PhantomCSS will compare against the previously created screenshots. It shouldn't report any failures.
9. In the global styles (`main.css` or `_common.scss`), set the text-underline for all links to 'none'.
10. Run the command one more time. It should now report a failure.
11. Open the image diff added to the newly created 'failures/' folder. Validate that the difference is shown.

## Conclusion 

While it does take more effort to write the tests than Wraith, it provides you with a much finer-grain validation method. With PhantomCSS, changes to one component's size likely won't cause the type of cascading validation issues seen with full-page screenshots.

In the next exercise, we'll look at how we can script the browser to run certain actions before taking a screenshot, allowing us to get to "hidden" parts of the page for testing.

## Spoilers

### Part 1 - Step 3

```
casper.start('http://localhost:8080/style-guide.html')
```

### Part 1 - Step 4

```
.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
})
```

### Part 1 - Step 5

```
.then(function () {
    phantomcss.screenshot('.nav-primary', 'Page Primary Navigation');
})
```

### Part 1 - Step 6

```
.then(function(){
    phantomcss.compareAll();
});
```