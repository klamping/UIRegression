var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
});

// Tests go here

casper.then(function(){
    // compare screenshots
    phantomcss.compareAll();
}).run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});