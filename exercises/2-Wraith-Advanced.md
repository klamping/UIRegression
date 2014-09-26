# Advanced Usage of Wraith

## Goal
Understand how to validate sites behind logins and slow-loading sites using Wraith.

## Resources
- https://github.com/BBC-News/wraith/blob/master/templates/javascript/snap.js
- https://github.com/andrewccadman/wraith-selenium

## Assignment

### Part 1 - Authentication

1. If still running, stop the server from exercise 1 (`ctrl+c` should do it)
2. Start a "secure" local server by running `node index.js secure`
3. Validate you are no longer able to use the site (message of 'Please authenticate' should display on load)
4. In your favorite editor, open `javascript/snap.js`
5. Review the comments starting on line 24
6. Add the following code

  ```
  page.customHeaders = {
      'X-Auth-Token': 'AUTHENTICATE!'
  };
  ```

7. Run `wraith capture config` and validate it was able to access the site as normal

### Part 2 - Automation

With the snap.js file, you can automate some browser functionality. For example, if your page requires a JavaScript framework to load, you can wait for an event 