'use strict';

console.log("bookCtrl");

app.controller("BookController", function($scope, GuideFactory) {

    $scope.guides = '';
    GuideFactory.getGuides()
    .then((response) => {
        console.log("response", response);
        $scope.guides = response.guides;
    });
});