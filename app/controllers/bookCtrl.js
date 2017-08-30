'use strict';

console.log("bookCtrl");

app.controller("BookController", function($scope, $http, $q) {

    $scope.guides = '';

    (function() {
        $q((resolve, reject) => {
            $http.get('../../data/guides.json')
                .then((response) => {
                    console.log("data", response.data.guides);
                    $scope.guides = response.data.guides;
                })
                .catch((e) => {
                    console.log("error", e);
                });
        });
    })();
});