'use strict';

app.factory("GuideFactory", function($q, $http){
    let getGuides = () => {
        return $q((resolve, reject) => {
            $http.get('../../data/guides.json')
            .then((response) => {
                resolve(response.data);
            })
            .catch((e) => {
                console.log("error", e);
            });
        });
    };
    return {getGuides};
}); 