# Project workflows with DiffUX

Almost all of us work on teams at some point in time. Having a good workflow is crucial to keeping production going.

DiffUX provides a way to create an approval process for style changes. For example, if you have another developer making a small style tweak to the site, you can approve or reject the difference from DiffUX.

## Goal

Understand how UI regression testing can work as part of a project workflow.

## Resources
- https://github.com/diffux/diffux
- http://causes.github.io/blog/2014/02/19/visual-diffs-with-diffux/

## Exercise

1. If you haven't already, start the local node server with `node index.js`
2. [Install DiffUX using their guide](https://github.com/diffux/diffux#mac-os-x-using-homebrew)
3. Start the DiffUX server (take each action in a separate command line window/tab)
 - Start redis - `redis-server`
 - Start the Ruby server - `bundle exec rails s`
 - Start sidekiq - `bundle exec sidekiq`
4. In a browser, open up DiffUX at [http://localhost:3000](http://localhost:3000)
5. Click the 'Add New Project' button
 - Name it
 - Leave dimensions as is
 - Add in URLs for the pages
 - Create the project
6. Start a sweep
7. Grab something to drink while the sweep runs
8. After the sweep has been completed, validate all images are as expected and accept them

### Part 2 - Validating Changes

1. In the theme styles, change the default color of 'strong' tags to be `#036`
2. Trigger a second sweep with your changes
3. After the sweep completes, see if DiffUX caught your changes.
 - Notice how DiffUX automatically approves any pages without changes on them
 - Where there any unwanted color changes? (Hint: the alert box colors shouldn't have changed)

## Extra Credit

DiffUX allows you to [trigger sweeps via an API call](https://github.com/diffux/diffux#triggering-sweeps), allowing you to integrate sweeps with a tool like [Jenkins](http://jenkins-ci.org/) or [TravisCI](https://travis-ci.org/) (or even [git hooks](http://githooks.com/)). You can also make this call via the command line. Using the command line, or a tool like [Postman](http://www.getpostman.com/), trigger a sweep of the site.


## Spoilers

### Part 1 - Step 5

```
http://localhost:8080/
http://localhost:8080/add-ons.html
http://localhost:8080/layout-form.html
http://localhost:8080/layout-full-width.html
http://localhost:8080/layout-sidebar-left.html
http://localhost:8080/layout-sidebar-right.html
http://localhost:8080/layout-transcript.html
http://localhost:8080/layout-two-sidebars.html
http://localhost:8080/style-guide.html
```


### Part 2 - Step 1

```
strong {
    color: #036;
}
```