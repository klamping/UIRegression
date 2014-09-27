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
- [Resemble.js](https://github.com/Huddle/Resemble.js#get-it): `npm install resemblejs`
    1. Create a `resemblejscontainer.html` file and add [the contents from the official repo](https://raw.githubusercontent.com/Huddle/PhantomCSS/master/ResembleJs/resemblejscontainer.html).


## Assignment

### Part 1 - Selector based screenshots

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

### Part 2 - Page Actions

Taking screenshots of specific sections of the page is a powerful feature, even if it requires a little more effort. But what happens the screenshot you need is hidden behind some sort of action (e.g. a mouse click to open a modal window)?

Lucky, PhantomCSS is tied directly in to CasperJS/PhantomJS, so all of the functionality of those two frameworks is available.

1. Switch over to 'add-ons.html' in your browser.
2. In your editor, open the 'phantom-addons.js' file.
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

### Part 2 - Step 3

```
casper.start('http://localhost:8080/add-ons.html')
```
