'use strict';

ptvlKodi.factory('moviesList', ['$http', '$location', function($http, $location) {

    var ip = $location.host();

    var port = 9000;

    var url = 'http://'+ip+':'+port+'/jsonrpc?request=';

    var movieListReq = JSON.stringify({
        "jsonrpc":"2.0",
        "method":"VideoLibrary.GetMovies",
        "params":{
            "properties":[
                "title",
                "year",
                "playcount",
                "set"
            ],
            "sort":{
                "order":"ascending",
                "ignorearticle":false,
                "method":"sorttitle"
            }},
        "id":"WIMM"
    });


    var moviesList = {
        async: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get(url + movieListReq).then(function (response) {

                // The return value gets picked up by the then in the controller.
                return response.data.result.movies;
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return moviesList;
}]);