"use strict";
console.log("MushroomCtrl");

app.controller("MushroomCtrl", function ($scope, MushroomFactory) {
    $scope.items = [];

    const showAllMushrooms = function(){
        MushroomFactory.getAllMushrooms()
        .then((items) => {
            console.log("showAllMushrooms from promise");
            $scope.items = items;
            console.log("scope", $scope.items);
        });

    };

    showAllMushrooms();
}); 




