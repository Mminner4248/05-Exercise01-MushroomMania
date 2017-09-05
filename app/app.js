"use strict";

const app = angular.module("MushroomApp", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/mushroomlist.html',
        controller: 'MushroomCtrl'
    });
});

 app.run(($location, FBCreds) => {
     let creds = FBCreds;
     let authConfig = { 
         apiKey: creds.apiKey, 
         authDomain: creds.authDomain,
         databaseURL: creds.databaseURL
     };

     firebase.initializeApp(authConfig);
 }); 
