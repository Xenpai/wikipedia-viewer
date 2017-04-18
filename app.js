//jshint esversion: 6


// Webpack Reqs
let handlebars = require( "handlebars" );
let cssLoader = require( 'style-loader!css-loader?modules!./style.css' );



// Actually writing the code now.

let conts = {
    myReq: new XMLHttpRequest(),
    container: document.querySelector( ".container" ),
    randomArticle: document.querySelector( ".random-article" ),
    searchButton: document.querySelector( ".search-button" ),
    searchBar: document.querySelector( ".search-bar" ),

};

conts.myReq.open( "GET", "" );

conts.myReq.onload = function() {
    if ( conts.myReq.status >= 200 && conts.myReq.status < 400 ) {

    }
};
