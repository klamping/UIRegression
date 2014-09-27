var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
});

/// TESTS GO HERE
casper.start('http://localhost:8080/style-guide.html')
.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
})
.then(function(){
    // compare screenshots
    phantomcss.compareAll();
});

casper.run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});