// global strict
'use strict';

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
function AppController ($router) {
  $router.config([
    {path: '/', component: 'home' },
    { path: '/detail/:id', component: 'detail' }
  ]);
}