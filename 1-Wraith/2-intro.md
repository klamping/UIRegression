# Wraith Basics

Let’s look at how to configure and run Wraith to capture page screenshots. We won’t be doing any style editing yet. We want to validate that we can get Wraith running first.

## Assignment

1. In your responsive starter kit folder, initialize Wraith by running `wraith setup` from a terminal window.
2. Open ‘configs/config.yaml’ in your editor of choice.
3. Update the `domains` section to point to your local server and the live site: [http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro](http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro). (See [spoilers section](#spoilers) for hints).
4. Update the `paths` section to include each page. (Again, see the [spoilers section](#spoilers) below for all the paths).
5. Run Wraith via `wraith capture config`.
6. View gallery output by running `open shots/gallery.html` (or open via your browser of choice).
7. Find any differences between the two sites. There should only be one.

### Extra Credit

If you don’t want to see pages that didn’t have any differences, [you can change the `diff mode` via your config file](https://github.com/BBC-News/wraith/blob/master/configs/config.yaml#L37). 

Try this by adding `mode: diffs_only` to the bottom of your config.yaml file and running Wraith again. Your gallery should be much simpler now.

## Conclusion

Wraith’s biggest strength is its ease of setup and configuration for quick validation of changes. As you should have noticed, it caught one regression between the local and live site (the image on the style guide is randomized on our local setup).

In the next exercise, we’ll try making some changes to our styles and see how well Wraith works out.

## Spoilers

If you’re stuck trying to get the code working, here are some solutions:

Step 3:

```
domains:
    local: “http://localhost:8080”
    production: “http://mpgilbertusa.github.io/Responsive-Starter-Kit-Pro-Sass”
```

Step 4:

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
