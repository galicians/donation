angular.module('donation').controller('usersCtrl', function($scope,$http){
    
    var getUsers = function() {
        return $http.get('data/users.json').then(function(response) {
            $scope.users = response.data;
            return response;
        })
    }

    getUsers();
})