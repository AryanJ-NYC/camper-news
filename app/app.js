app = angular.module('camperApp', []);

app.controller('camperController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://www.freecodecamp.com/news/hot')
        .then(function (response) {
            $scope.newsStories = response.data;
        });
}]);
