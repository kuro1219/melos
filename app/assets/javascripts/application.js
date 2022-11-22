// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
// Bootstrap
//= require bootstrap-sprockets

@media (min-width: 1000px) {
    .navbar-expand-custom {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .navbar-expand-custom .navbar-nav {
        flex-direction: row;
    }
    .navbar-expand-custom .navbar-nav .nav-link {
        padding-right: .2rem;
        padding-left: .2rem;
    }
    .navbar-expand-custom .navbar-collapse {
        display: flex!important;
    }
    .navbar-expand-custom .navbar-toggler {
        display: none;
    }
}