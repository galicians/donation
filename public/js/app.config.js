angular.module('donation').config(["$routeProvider", function($routeProvider) {
    
    $routeProvider.
    when('/chat', {
        templateUrl: 'partials/chat.html'
    }).otherwise({
        redirectTo: '/'
    })

}]);