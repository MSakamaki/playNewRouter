/**
* 明細ページ
*
*
* @class DetailController
* @module app.detail
*/

// import 'components/detail/a/a';
// import 'components/detail/b/b';


angular.module('app.detail', ['ngNewRouter'/*, 'app.detail.a','app.detail.b'*/])
  .controller('DetailController', ['$routeParams', DetailController]);

function DetailController ($routeParams) {
  this.id = $routeParams.id;
}

DetailController.$routeConfig = [
    { path: '/', component:
      {
        as: 'a',
        controllerName: 'aController',
        controllerAs: 'a',
        template: './components/detail/a/a.html'
     } },
    { path: '/b', component: {
        as: 'b',
        controllerName: 'bController',
        controllerAs: 'b',
        template: 'detail/b'
      } }
  ];
