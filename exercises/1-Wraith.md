# Wraith

## Goal
Learn how to install, configure and run Wraith to capture page screenshots.

## Introduction

Wraith is a responsive screenshot comparison tool. It requires Ruby and Node, and is used to compare two versions of a website to check for visual regressions.

## Resources
- https://github.com/BBC-News/wraith
- http://bbc-news.github.io/wraith/index.html
- https://www.youtube.com/watch?v=gE_19L0l2q0

## Assignment

### Part 1 - Wraith Sanity Check

1. In the main directory of this repo, initialize Wraith by running `wraith setup` from a terminal window
2. Open 'wraith/configs/config.yaml' in your editor of choice
3. Update the `domains` section to point to your local server and the live GitHub pages repo: [http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass](http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass). (See Spoilers section for hints)
4. Update the `paths` section to include each page. (Again, see Spoilers section below for all the paths)
5. In a separate terminal window, start your local server by running `node index.js`
6. Run Wraith via `wraith capture config`
7. View gallery output by running `open shots/gallery.html` (or open via your browser of choice)
8. Validate that there are no unexpected changes between the GH Pages site and your local instance.

> Tip: To hide pages that didn't change, add `mode: diffs_only` to the bottom of your config.yaml file

### Part 2 - Validating Changes

Make the following changes to the design (run Wraith after each change, noting any unexpected results):

1. Reduce left/right padding of the `.btn` class to `15px`
2. Add the following ruleset to change the default color of page links:
    ```
    .page-content a {
        color: #639;
    }
    ```
3. Change the bottom margin of `.nav-breadcrumb` to `2.5em`

### Extra Credit

As an alternative to comparing two different URLs, you can set up Wraith to run in ['History' mode](https://github.com/BBC-News/wraith#history-usage), where a single URL is compared against itself over multiple runs. Try running the previous changes in history mode on your local server.

## Conclusion

As you saw with the last change, there are weaknesses to capturing a screenshot of the entire page. PhantomCSS offers an alternative that helps mitigate the problem, but is a little trickier to set up. Overall, Wraith's biggest strength is its ease of setup and configuration for quick validation of a prod vs. local/staging type dev environment.

## Spoilers

If you're stuck trying to get the code working, here are some solutions:

Part 1, Step 3:

```
domains:
    local: "http://localhost:8080"
    production: "http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass"
```

Part 1, Step 4:

```
paths:
  home: /
  sidebar_left: /layout-sidebar-left.html
  sidebar_right: /layout-sidebar-right.html
  three_col: /layout-two-sidebars.html
  full_width: /layout-full-width.html
  audio_video: /layout-transcript.html
  sample_form: /layout-form.html
  styleguide: /style-guide.html
  addons: /add-ons.html
```
