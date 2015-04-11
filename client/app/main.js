import angular from 'angular';
import 'angular-new-router';

// component loader
import 'components/home/home';
import 'components/detail/detail';

angular.module('myApp', ['ngNewRouter','app.home'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {
  $router.config([
    {path: '/', component: 'home' },
    { path: '/detail/:id', component: 'detail' }
  ]);
}