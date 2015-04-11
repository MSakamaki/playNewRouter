/**
* 明細ページ
*
*
* @class DetailController
* @module app.detail
*/

angular.module('app.detail', ['ngNewRouter'])
  .controller('DetailController', ['$routeParams', DetailController]);

function DetailController ($routeParams) {
  this.id = $routeParams.id;
}
