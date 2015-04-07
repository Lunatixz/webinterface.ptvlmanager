define([
    'angular',
    'uiRouter',
    'uiBootstrap',
    'uiTemplates',
    'ngAria',
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    './components/movies/services/index',
    './components/television/services/index',
    './components/movies/controllers/index',
    './components/television/controllers/index'

], function (ng) {
    'use strict';

    return ng.module('ptvlKodi', [
        'ptvlKodi.moviesServices',
        'ptvlKodi.moviesControllers',
        'ptvlKodi.televisionServices',
        'ptvlKodi.televisionControllers',
        'ui.router',
        'ui.bootstrap',
        'ngAria',
        'ngAnimate',
        'ngSanitize',
        'ngTouch'
    ]);
});



