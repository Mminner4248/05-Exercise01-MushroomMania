"use strict";
console.log("MushroomCtrl");

app.controller("MushroomCtrl", function ($scope, MushroomFactory) {
    $scope.items = [];
    $scope.searchText = "";
    $scope.edibility = true;

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




