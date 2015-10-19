// ionic app coded by sooraj v nair
// copyrighted to hazor consulting
// author email : info@hazorconsulting.com
// website : https://hazorconsulting.com


(function(){ 
  
  var app = angular.module('barcodeApp', ['ionic','ngCordova']);
 
  app
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })  
  
 })();

