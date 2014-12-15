angular.module('donation').controller('usersCtrl', function($scope,$http){

     var getUsers = function() {
        return $http.get("https://donationapp.herokuapp.com/allusers").then(function(response) {
            $scope.users = response.data;
            console.log($scope.users)
            return response;
        })
    }

     var getFriends = function() {
        return $http.get("https://donationapp.herokuapp.com/friends").then(function(response) {
            $scope.relationships = response.data;
            console.log('relationships', $scope.relationships)
            $scope.relationships.forEach( function(element) {
               $scope.users[element.userid-1].friends = []
                $scope.users[element.userid-1].friends.push($scope.users[element.friendid-1])
            });
            return response;
        })
    }

    getUsers().then( function() {
        getFriends();
    });
    
})