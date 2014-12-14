angular.module('donation').controller('usersCtrl', function($scope,$http){

     var getUsers = function() {
        return $http.get("http://localhost:5000/allusers").then(function(response) {
            $scope.users = response.data;
            console.log($scope.users)
            return response;
        })
    }

    getUsers();
})