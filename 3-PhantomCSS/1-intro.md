# PhantomCSS

## Goal
Write a PhantomCSS script to validate individual components on the style guide.

## Introduction

While Wraith is simple to set up, it can be limited in its functionality. Since screenshots are taken of the entire page, this can render diffs useless if a small sizing change at the top of the page pushes the content below down (as seen in the first Wraith exercise).

PhantomCSS offers an alternative. Instead of full-page screenshots, you're able to select certain elements based on CSS selectors. This provides more granularity in your testing. It's a little more work, but can be very helpful in the long run.

## Resources
- http://tldr.huddle.com/blog/css-testing/
- https://github.com/Huddle/PhantomCSS#getting-started-try-the-demo

## Assignment

1. If you're still running the server from exercise 2, stop it (`ctrl+c` should do it). Start the regular sever back up with `node index.js`.
2. Open the 'Style Guide' page in your browser for reference.
3. In your editor, open the 'phantom-styleguide.js' file.
4. In that file, directly after 'Tests go here' comment, add the line to start CasperJS by using `casper.start(MY_URL)` (replacing MY_URL with the URL to the styleguide page on your local server).
5. In a new `.then` callback, add a call to the `phantomcss.screenshot` function to capture a screenshot of the page breadcrumbs. You'll want to pass in the selector used by the breadcrumb container.
6. In another new `.then` callback, add another call to the `phantomcss.screenshot` function, this time passing in the selector for the primary navigation.
7. In another new `.then` callback, run the `phantomcss.compareAll()` function to have phantom compare our screenshots.
8. In the command line, create a baseline set of screenshots by running `casperjs test phantom-styleguide.js`. It should mention something about being your first time running the tests. Validate it captured the image correctly by viewing the captures in the 'ex-3-screenshots' folder.
9. Run the same command again. This time PhantomCSS will compare against the previously created screenshots. It shouldn't report any failures.
10. In the global styles (`main.css` or `_common.scss`), set the text-decoration for all links from 'underline' to 'none'.
11. Run the command one more time. It should now report a failure.
12. Open the image diff added to the newly created 'ex-3-failures/' folder. Validate that the difference is shown. (You can also see the new capture in the existing 'ex-3-screenshots' folder).
13. To accept the changes, delete your 'ex-3-failures' and 'ex-3-screenshots' folder, and re-run the scan (note: there may be a better way to do this).

### Extra Credit

Using a CSS selector isn't the only way to tell PhantomCSS where to take a screenshot. You can also [use coordinates to give an area to capture](https://github.com/Huddle/PhantomCSS#there-are-different-ways-to-take-a-screenshot). Try taking a screenshot of the header and the breadcrumbs combined by passing in coordinates to the `screenshot` function.

## Conclusion

While it does take more effort to write the tests than Wraith, it provides you with a much finer-grain validation method. With PhantomCSS, changes to one component's size likely won't cause the type of cascading validation issues seen with full-page screenshots.

In the next exercise, we'll look at how we can script the browser to run certain actions before taking a screenshot, allowing us to get to "hidden" parts of the page for testing.

## Spoilers

### Step 4

```
casper.start('http://localhost:8080/style-guide.html');
```

### Step 5

```
casper.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
});
```

### Step 6

```
casper.then(function () {
    phantomcss.screenshot('.nav-primary', 'Page Primary Navigation');
});
```

### Step 7

```
casper.then(function(){
    phantomcss.compareAll();
});
```
