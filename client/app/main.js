// global strict
'use strict';

// utill

//import '../jspm_packages/github/PrismJS/prism@master/themes/prism.css!';
//import prism from 'prism';

import angular from 'angular';
import 'angular-new-router';


// component loader
import 'components/home/home';
import 'components/detail/detail';

angular.module('myApp', ['ngNewRouter','app.home'])
  .controller('AppController', ['$router', AppController]);

/**
* Angular newRouter遊び場
*
* + [new router site](http://angular.github.io/router/)
*
* @class AppController
* @module myApp
*/

// rooting config
AppController.$routeConfig = [
    { path: '/', component: 'home' },
    { path: '/detail/:id', component: 'detail' }
  ];

function AppController () {
}

