angular.module('MyApp')
  .controller('MainCtrl', function($scope,$rootScope,$location ,Show) {
    
   if($rootScope.currentUser == null)
   {
   $location.path('/login');
        

   }
          
  });