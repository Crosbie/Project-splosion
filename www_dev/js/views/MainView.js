'use strict';

// ******************
// Dependancies
// ******************
var fs = require('fs');

// ******************
// Main View Module
// ******************
var View = Backbone.View.extend({
    tagName: 'div',
    id: 'mainView',
    tplString: fs.readFileSync(__dirname +
        '/../../templates/Main.html', 'utf8'),
    events: {
    },

    initialize: function() {
        this.template = _.template(this.tplString);
    },

    render: function() {
        this.$el.html(this.template({}));
        return this.$el;
    }

});

module.exports = View;
