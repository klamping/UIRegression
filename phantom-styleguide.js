var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
});

// Set the page width
casper.options.viewportSize = {
    width: 1024,
    height: 1500
};

// Tests go here

casper.run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});