/**
* 初期ページ(ルートページ)
*
* url`/`にあたる
*
* @class HomeController
* @module app.home
*/
//import esprima from 'esprima';
import 'angular-sanitize';

var homeModule = angular.module('app.home', ['app.detail','ngSanitize']);
homeModule.controller('HomeController', [function () {
    this.name = 'Friend';
    this.routers =[];
    this.show=(r)=>{
      console.log(r)
      r.show!=r.show;
    }
    var addRoute = (type,name,code)=>{
      try{
        this.routers.push({
          type: type,
          name: name,
          code: code,
          show: false
        });
      }catch(e){console.log(e)}
    };
    var modules = angular.module('ngNewRouter');
    modules._invokeQueue.forEach(function(v){
      switch (v[1]){
        case 'factory':
          addRoute(v[1], v[2][0], v[2][1]);
          break;
        case 'directive':
          addRoute(v[1], v[2][0], v[2][1]);
          break;
        case 'provider':
          addRoute(v[1], v[2][0], v[2][1]);
          break;
        default:
          console.log(v[1], v[2][0]);
          break;
      }
    });
    setTimeout(()=>{
      Prism.highlightAll();
    },1000)
  }]);
