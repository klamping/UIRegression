# PhantomCSS

While Wraith is simple to set up, it can be limited in its functionality. Since screenshots are taken of the entire page, this can render diffs 

## Goal
Write a PhantomCSS script to validate individual components on the style guide.

## Resources
- https://github.com/Huddle/PhantomCSS#getting-started-try-the-demo

### Pre-reqs

You must have the following installed:

- [CasperJS 1.1 Beta](http://docs.casperjs.org/en/latest/installation.html)
- [PhantomCSS](https://github.com/Huddle/PhantomCSS#download): `npm install phantomcss`

## Assignment

1. Open 'style-guide.html' in your browser. Keep it open for reference.
2. In your editor, open the 'phantom-styleguide.js' file.
3. In that file, directly after 'Tests go here', add the line to start CasperJS by using `casper.start(MY_URL)` (replacing MY_URL with the URL to the styleguide page on your local server).
4. In a new `.then` callback, add a call to the `phantomcss.screenshot` function to capture a screenshot of the page breadcrumbs. You'll want to pass in the selector used by the breadcrumb container.
5. In another new `.then` callback, run the `phantomcss.compareAll()` function to have phantom compare our screenshots.
6. In the command line, create a baseline set of screenshots by running `casperjs test phantom-styleguide.js`. It should mention something about being your first time running the tests.
7. Run the same command again. This time PhantomCSS will compare against the previously created screenshots. Ensuring it doesn't report any failures.
8. In the global styles (`main.css` or `_common.scss`), set the text-underline for all links to 'none'.
9. Run phantomcss again, this time checking that it caught the change to the breadcrumbs.
10. Open the image diff added to the newly created 'failures/' folder. Validate that the difference is marked in fuschia.

## Conclusion 

Something here.

## Spoilers

### Part 1 - Step 3

```
casper.start('http://localhost:8080/style-guide.html')
```

### Part 1 - Step 4

```
casper.start('http://localhost:8080/style-guide.html')
.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
})
```

### Part 1 - Step 5

```
casper.start('http://localhost:8080/style-guide.html')
.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
})
.then(function(){
    phantomcss.compareAll();
});
```