angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, Auth,$rootScope) {
    
 if($rootScope.currentUser == null)
   {
            
 Auth.logout();
   }
  

    $scope.logout = function() {
      Auth.logout();
    };
  });