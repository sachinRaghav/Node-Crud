angular.module('MyApp')
  .factory('Register', function($http,$alert,$resource,$location) {
    return {
       register: function(user) {
           
        return $http.post('/api/register', user)
          .success(function() {
              $location.path('/userlist');
          $alert({
              title: 'Congratulations!',
              content: 'Your account has been created.',
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          })
          .error(function(response) {
            $alert({
              title: 'Error!',
              content: response.data,
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
      },
      update: function(user) {
           
        return $http.post('/api/updateuser', user)
          .success(function() {
            $location.path('/userlist');
            $alert({
              title: 'Congratulations!',
              content: 'Your account has been created.',
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          })
          .error(function(response) {
            $alert({
              title: 'Error!',
              content: response.data,
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
      },
       getUsers: function(page,sortExpression,sortDirection,searchText) {
         
       //  var sortExpression='name';
         //var sortDirection='ascending';
        return  $http.get('/api/userslist/'+ page+'/'+sortExpression+'/'+sortDirection+'/'+searchText);
         
      },
     
   getUser : function(id) {
            return $http.get('/api/getuser/' + id);
        }


    };
  });