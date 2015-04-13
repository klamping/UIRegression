# PhantomCSS Basics

While Wraith is simple to set up, it can be limited in its functionality. Sure, you can write some functionality in your snap.js file, but that gets messy quickly. Should you have multiple snap files? That would mean multiple config files as well.

Man, that’s a lot of duplicate code…

PhantomCSS offers an alternative. Instead of separating your pages/selectors from your functionality, you mix them all together. It's a little more work, but can be very helpful in the long run.

## Resources
- http://tldr.huddle.com/blog/css-testing/
- http://www.phase2technology.com/blog/css-testing-with-phantomcss-phantomjs-casperjs-and-grunt/
- https://github.com/Huddle/PhantomCSS#getting-started-try-the-demo

## Assignment

1. Open the 'Style Guide' page in your browser for reference.
- In your editor, open the 'phantom-styleguide.js' file.
- In that file, directly after 'Tests go here' comment, add the line to start CasperJS by using `casper.start(‘http://localhost:8080/style-guide.html)`.
- In a new `.then` callback, add a call to the `phantomcss.screenshot` function to capture a screenshot of the page breadcrumbs. You'll want to pass in the selector used by the breadcrumb container.
- In another new `.then` callback, add another call to the `phantomcss.screenshot` function, this time passing in the selector for the primary navigation.
- In another new `.then` callback, run the `phantomcss.compareAll()` function to have phantom compare our screenshots.
- In the command line, create a baseline set of screenshots by running `casperjs test phantom-styleguide.js`. It should mention something about being your first time running the tests. Validate it captured the image correctly by viewing the captures in the 'ex-3-screenshots' folder.
- Run the same command again. This time PhantomCSS will compare against the previously created screenshots. It shouldn't report any failures.
- In the global styles (`main.css` or `_common.scss`), set the text-decoration for all links from 'underline' to 'none'.
- Run the command one more time. It should now report a failure.
- Open the image diff added to the newly created 'ex-3-failures/' folder. Validate that the difference is shown. (You can also see the new capture in the existing 'ex-3-screenshots' folder).
- To accept the changes, delete your 'ex-3-failures' and 'ex-3-screenshots' folder, and re-run the scan (note: there may be a better way to do this).

### Extra Credit

Using a CSS selector isn't the only way to tell PhantomCSS where to take a screenshot. You can also [use coordinates to give an area to capture](https://github.com/Huddle/PhantomCSS#there-are-different-ways-to-take-a-screenshot). Try taking a screenshot of the header and the breadcrumbs combined by passing in coordinates to the `screenshot` function.

## Conclusion

While it does take more effort to write the tests than Wraith, it provides you with a much finer-grain validation method. With PhantomCSS, changes to one component's size likely won't cause the type of cascading validation issues seen with full-page screenshots.

In the next exercise, we'll look at how we can script the browser to run certain actions before taking a screenshot, allowing us to get to "hidden" parts of the page for testing.

## Spoilers

### Step 4

```
casper.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
});
```

### Step 5

```
casper.then(function () {
    phantomcss.screenshot('.nav-primary', 'Page Primary Navigation');
});
```

### Step 6

```
casper.then(function(){
    phantomcss.compareAll();
});
```
