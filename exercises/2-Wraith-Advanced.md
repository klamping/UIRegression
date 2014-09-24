# Advanced Usage of Wraith

## Goal
Understand how to validate sites behind logins and slow-loading sites using Wraith.

## Resources
- https://github.com/BBC-News/wraith/blob/master/templates/javascript/snap.js
- https://github.com/andrewccadman/wraith-selenium

## Assignment
1. If not already started, start your local server by running `node index.js`
2. In your favorite editor, open `javascript/snap.js`
3. Review the comments starting on line 24
4. Add the following code

  ```
  page.customHeaders = {
      'X-Auth-Token': 'https://api.live.bbc.co.uk/'
  };
  ```
