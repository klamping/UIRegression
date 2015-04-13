# Testing Sites That Require Authentication in Wraith

Many websites secure their content behind login/authentication mechanisms. Nothing bursts your bubble like discovering that your favorite new visual regression testing tool is useless due to a simple login screen.

Well there’s hope. Wraith allows you to send headers and cookies in order to test sites that require authentication. You can also get in to the weeds with browser automation using PhantomJS. How exciting.

## Resources
- [https://github.com/BBC-News/wraith/blob/master/templates/javascript/snap.js](https://github.com/BBC-News/wraith/blob/master/templates/javascript/snap.js)
- [http://phantomjs.org/page-automation.html](http://phantomjs.org/page-automation.html)

## Assignment

1. Add a ‘security’ flag to all of your urls by appending `?secure=true` to each of them.
2. Validate you are no longer able to use the site by trying to load one of these urls (message of ‘Please authenticate’ should display on load).
3. In your favorite editor, open `javascript/snap.js`.
4. Review the comments starting on line 24.
5. Add the following code to provide the correct authentication details for your site:

  ```
  page.customHeaders = {
      ‘x-auth-token’: ‘AUTHENTICATE!’
  };
  ```

6. Run `wraith capture config` and validate it was able to access the site as normal.

### Extra Credit

The `snap.js` file is run by [PhantomJS](http://phantomjs.org/), a browser that allows you to easily script commands. In fact, `page.render` ([the command that captures the screenshot](http://phantomjs.org/screen-capture.html)) is built-in to PhantomJS.

With PhantomJS, you can do all sorts of [page automation](http://phantomjs.org/page-automation.html). Try adding code to hide the styleguide’s randomized image before every snapshot. This will help weed out false positives (especially applicable when serving ads on a site). When you run Wraith now, both sites should ignore the image in their screenshot.

If that’s not enough, check out the following integrations that can help take Wraith usage even further:

- [https://github.com/andrewccadman/wraith-selenium](https://github.com/andrewccadman/wraith-selenium)
- [Integrating Wraith and TravisCI](http://blog.kevinlamping.com/easy-ui-regression-testing-with-wraith-and-travisci/)

## Conclusion

What header details you send will depend on the authentication setting of the site your testing. You may not even need to send a header, but instead a cookie with an authentication token. Wraith also allows for this (as you make have read in the comments).

The `snap.js` file is a script that’s run through PhantomJS, so anything you can do via PhantomJS, you can do in the `snap.js` file. [Read the docs](http://phantomjs.org/page-automation.html) for more information.

Aside from setting up authentication, you can also automate some browser functionality. For example, if your page requires a JavaScript framework to load, you can wait for an event to fire before running the tests. If there are certain page actions to take (e.g. clicking a tab) before snapping a screenshot, you can also program that in.

While technically this is all possible in Wraith, if you’re needing some sort of browser control, other tools are likely a better bet (e.g. PhantomCSS and Gemini).
