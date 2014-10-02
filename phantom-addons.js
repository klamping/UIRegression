var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
    screenshotRoot: './ex-3-screenshots',
    failedComparisonsRoot: './ex-3-failures'
});

// Set the page width
casper.options.viewportSize = {
    width: 1024,
    height: 1500
};

// Tests go here

casper.then(function(){
    // compare screenshots
    phantomcss.compareAll();
}).run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});