var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
    screenshotRoot: './ex-4-screenshots',
    failedComparisonsRoot: './ex-4-failures'
});

casper.options.viewportSize = {
    width: 1024,
    height: 1500
};

// Tests go here
casper.start('http://localhost:8080/add-ons.html');
casper.then(function () {
    this.click('a[href="#modal-content"]');
});
casper.waitForSelector('.fancybox-opened.fancybox-wrap', function () {
    phantomcss.screenshot('.fancybox-wrap', 'Modal Overlay');
});

casper.then(function(){
    // compare screenshots
    phantomcss.compareAll();
}).run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});