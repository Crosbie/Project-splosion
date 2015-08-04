'use strict';

var services = require('./services'),
    models = require('./models'),
    collections = require('./collections'),
    views = require('./views'),
    router = require('./router.js');

window.App = {
    services: services,
    views: views,
    models: models,
    collections: collections
};


function run() {
    $(document).ready(function() {
        console.log('App ready');
        // start backbone router
        App.router = new router(); // jshint ignore:line
    });
}
run();
