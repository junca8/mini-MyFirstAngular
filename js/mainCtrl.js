angular.module('friendsList').controller('mainCtrl', ['$scope', function(scope) {

  scope.friendsArray = ["Ben", "Derek", "Ross", "James", "John", "Joel"];

  scope.addFriend = function(friend) {
    scope.friendsArray.push(friend);
  };

}]);
