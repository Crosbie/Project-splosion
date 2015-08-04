'use strict';

// ******************
// Dependancies
// ******************

//require views
var Views = require('./views/index');


// ******************
// Router Module
// ******************
var Router = Backbone.Router.extend({
    routes: {
        '': 'defaultRoute'
    },

    $container: $('#body-container'),

    initialize: function() {
        if (!Backbone.History.started) {
            Backbone.history.start();
        }
    },

    defaultRoute: function() {
        this.mainView = new Views.MainView();
        var html = this.mainView.render();
        this.$container.html(html);
    }
});

module.exports = Router;
