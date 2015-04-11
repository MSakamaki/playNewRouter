/**
* 初期ページ(ルートページ)
*
* url`/`にあたる
*
* @class HomeController
* @module app.home
*/
angular.module('app.home', [])
  .controller('HomeController', [function () {
    this.name = 'Friend';
  }]);
