"use strict";


app.factory("MushroomFactory", function($q, $http, FBCreds){

    const getAllMushrooms = function(){
        let items = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/mushrooms.json`)
        .then((itemObject) => {
            let itemCollection = itemObject.data;
            console.log("itemCollection", itemCollection);
            Object.keys(itemCollection).forEach((key) => {
                items.push(itemCollection[key]);
            });
            resolve(items);
            })
            .catch((error) => {
                reject(error);
            }); 
        });
    };
    return {getAllMushrooms};
});       