var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
});

casper.options.viewportSize = {
    width: 1024,
    height: 1500
};

// Tests go here
casper.start('http://localhost:8080/style-guide.html');
casper.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
});
casper.then(function () {
    phantomcss.screenshot('.nav-primary', 'Page Primary Navigation');
});
casper.then(function(){
    phantomcss.compareAll();
});


casper.run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});