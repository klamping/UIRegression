# Validating Changes with Wraith

Now that you know Wraith runs and captures the page correctly, let’s try out some real changes.

Make the following alterations to the design (run Wraith after each change, noting any unexpected results):

1. Reduce left/right padding of the `.btn` class to `15px`
2. Add the following ruleset to change the default color of page links:
    ```
    .page-content a {
        color: #639;
    }
    ```
3. Change the bottom margin of `.nav-breadcrumb` to `2.5em`

## Extra Credit

As an alternative to comparing two different URLs, you can set up Wraith to run in [‘History’ mode](https://github.com/BBC-News/wraith#history-usage), where a single URL is compared against itself over multiple runs. Try running the previous changes in history mode on your local server.

## Conclusion

As you saw with the last change, there are weaknesses to capturing a screenshot of the entire page. PhantomCSS offers an alternative that helps mitigate the problem, but is a little trickier to set up. Overall, Wraith’s biggest strength is its ease of setup and configuration for quick validation of a prod vs. local/staging type dev environment.