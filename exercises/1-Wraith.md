# Wraith
Wraith is a responsive screenshot comparison tool. It requires Ruby and Node, and is used to compare two versions of a website to check for visual regressions.

## Goal
Learn how to install, configure and run Wraith to capture page screenshots.

## Resources
- https://github.com/BBC-News/wraith
- http://bbc-news.github.io/wraith/index.html
- https://www.youtube.com/watch?v=gE_19L0l2q0

## Assignment 

### Part 1 - Wraith Sanity Check 

1. Install Wraith via http://bbc-news.github.io/wraith/index.html#Installation
2. In the main directory of this repo, initialize Wraith by running `wraith setup` from a terminal window
3. Open 'wraith/configs/config.yaml' in your editor of choice
4. Update the `domains` section to match:

    ```
    domains:
        local: "http://localhost:8080"
        production: "http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass"
    ```

5. Update the `paths` section to match: 

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

6. In a separate terminal window, start your local server by running `node index.js`
7. Run Wraith via `wraith capture config`
8. View gallery output by running `open shots/gallery.html` (or open via your browser of choice)
9. Validate that there are no unexpected changes between the GH Pages site and your local instance. 

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
