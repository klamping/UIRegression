# Testing Sites That Require Authentication in Wraith

## Goal
Understand how to send headers and cookies in Wraith in order to test sites that require authentication.

## Resources
- [https://github.com/BBC-News/wraith/blob/master/templates/javascript/snap.js](https://github.com/BBC-News/wraith/blob/master/templates/javascript/snap.js)
- [http://phantomjs.org/page-automation.html](http://phantomjs.org/page-automation.html)
- [https://github.com/andrewccadman/wraith-selenium](https://github.com/andrewccadman/wraith-selenium)
- [Integrating Wraith and TravisCI](http://blog.kevinlamping.com/easy-ui-regression-testing-with-wraith-and-travisci/)

## Assignment

1. If the server from exercise 1 is still running, stop it (`ctrl+c` should do it)
2. Start the "secure" local server by running `node index.js secure`
3. Validate you are no longer able to use the site (message of 'Please authenticate' should display on load)
4. In your favorite editor, open `javascript/snap.js`
5. Review the comments starting on line 24
6. Add the following code to provide the correct authentication details for your site

  ```
  page.customHeaders = {
      'x-auth-token': 'AUTHENTICATE!'
  };
  ```

7. Run `wraith capture config` and validate it was able to access the site as normal

### Extra Credit

The `snap.js` file is run by [PhantomJS](http://phantomjs.org/), a browser that allows you to easily script commands. In fact, `page.render` ([the command that captures the screenshot](http://phantomjs.org/screen-capture.html)) is built-in to PhantomJS.

With PhantomJS, you can do all sorts of [page automation](http://phantomjs.org/page-automation.html). Try adding code to change the '.page-title' element text to 'UI Regression Testing' before every snapshot. When run, both sites should show the updated text in the screenshot.

## Conclusion

What header details you send will depend on the authentication setting of the site your testing. You may not even need to send a header, but instead a cookie with an authentication token. Wraith also allows for this (as you've probably read in the comments).

Aside from setting up authentication, you can also automate some browser functionality. For example, if your page requires a JavaScript framework to load, you can wait for an event to fire before running the tests. If there are certain page actions to take (e.g. clicking a tab) before snapping a screenshot, you can also program that in.

The `snap.js` file is a script that's run through PhantomJS, so anything you can do via PhantomJS, you can do in the `snap.js` file. [Read the docs](http://phantomjs.org/page-automation.html) for more information.

While technically this is all possible in Wraith, if you're needing some sort of browser control, PhantomCSS is likely a better bet. For that reason, we'll cover page automation in exercise #3.
