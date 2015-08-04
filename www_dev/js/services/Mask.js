'use strict';

// ******************
// Dependancies
// ******************

// ******************
// Mask Module
// ******************
var Mask = function() {


    this.showLoader = function(msg) {
        $('#mask').show();
        $('#loader').show();
        if(msg){
            $('#loader-msg').html(msg).show();
        }
    };

    this.hideAll = function(){
        $('#mask').hide();
        $('#loader').hide();
        $('#loader-msg').hide();
    };
};

module.exports = new Mask();
