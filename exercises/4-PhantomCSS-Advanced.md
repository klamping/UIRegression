# PhantomCSS - Page Actions

Taking screenshots of specific sections of the page is a powerful feature, even if it requires a little more effort. But what happens the screenshot you need is hidden behind some sort of action (e.g. a mouse click to open a modal window)?

Lucky, PhantomCSS is tied directly in to CasperJS/PhantomJS, so all of the functionality of those two frameworks is available.

## Goal

Take a screenshot of a modal window using CasperJS page action scripting

## Resources
- http://docs.casperjs.org/en/latest/quickstart.html

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
