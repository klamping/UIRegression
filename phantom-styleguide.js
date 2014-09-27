var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
});

/// TESTS GO HERE

casper.run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});