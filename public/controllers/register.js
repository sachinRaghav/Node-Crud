angular.module('MyApp')
  .controller('RegisterCtrl', function($http,$scope,$routeParams,Register) {
       
$scope.img_url="";
$scope.profileimg="";
      $scope.ShowAddButton=true;
$scope.ShowUpdateButton=false;

 var userId = ($routeParams.id || "");
 $scope.UserId = userId;       
if($scope.UserId!="")
{

 $scope.ShowAddButton=false;
$scope.ShowUpdateButton=true;

Register.getUser($scope.UserId).success(function(data) {
//    alert(data.profileImage);
             $scope.displayName=data.name;
              $scope.email=data.email;
              $scope.password=data.password;
              $scope.mobile=data.mobile;
               $scope.img_url = "images/" + data.profileImage;
              $scope.profileimg=data.profileImage;
           })
           .error(function(response) {
           
           });

}

   
  
   $scope.pageClass = 'fadeZoom'

  $scope.selectFileforUpload = function (files) {
    if (files.length > 0){
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
     $scope.attachment=files[i];
            var reader = new FileReader();
                      reader.onload = $scope.imageIsLoaded;
                      reader.readAsDataURL(file);
                     
    }
      
  }

  }
 $scope.imageIsLoaded = function (e) {
              $scope.$apply(function () {
                  $scope.img_url = e.target.result;
                 
              });
          }

//Register user

 $scope.registeruser = function() {
      var formData = new FormData();
  var file = $scope.attachment;
   
 formData.append('uploads', file);
    
if(file==undefined)
{
        Register.register({
         name: $scope.displayName,
         email: $scope.email,
         password: $scope.password,
         mobile: $scope.mobile,
        profileImage:$scope.profileimg,
      
      });

}
else
{
    $http.post('/api/upload', formData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
        
 Register.register({
         name: $scope.displayName,
         email: $scope.email,
         password: $scope.password,
         mobile: $scope.mobile,
     profileImage:data,
      
      });

        })
        .error(function(){
        });
    
}


    };


//
//Update user
  $scope.updateuser=function()
 {
  var formData = new FormData();
  var file = $scope.attachment;
   
 formData.append('uploads', file);
    
if(file==undefined)
{
        Register.update({
        _id:$scope.UserId,
         name: $scope.displayName,
         email: $scope.email,
         password: $scope.password,
         mobile: $scope.mobile,
         profileImage:$scope.profileimg,
      });
   
}
else
{
    $http.post('/api/upload', formData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data){
            
             Register.update({
        _id:$scope.UserId,
         name: $scope.displayName,
         email: $scope.email,
         password: $scope.password,
         mobile: $scope.mobile,
         profileImage:data,
      });
   
        })
        .error(function(){
        });
    
}
    };

  });