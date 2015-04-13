# Narrowing Down Your Selections

I love recommending Wraith as a starting tool for regression testing as it’s so easy to set up and use. The config file layout is simple to understand and the output of the gallery helps visualize differences.

That said, one of the drawbacks with the simplicity of Wraith is the fact that it takes screenshots of the entire page. Thankfully, there’s a configuration option to avoid this.

Let’s try out adding some selectors to our config file.

## Assignment

Make the following alterations to your config.yaml file.

1. Change your `phantoms` setting at the top of the file to:
	```
	browser:
	  phantomjs: 'casperjs'
  ```
2. Update your paths to include a selector for content on the page (you must include this new format for all of your paths). For example, the style guide can test multiple elements:
	```
	paths:
	  styleguide_nav:
	    path: /style-guide.html
	    selector: '.nav-primary'
	  styleguide_footer:
	    path: /style-guide.html
	    selector: '.site-footer'
	```
3. Run your tests the same way as you have in the past. The output will be confined to a single 

## Conclusion

Being able to capture only certain sections of the screen allows your tests to be much more granular, and you run less risk of tiny changes up top invalidating all the tests below.