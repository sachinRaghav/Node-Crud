angular.module('MyApp')
  .controller('UserlistCtrl', function($scope,$http,Register) {
       
 $scope.customerLink = "/register/";

$scope.txtSearch="";
  $scope.pageSize = 5;
  $scope.currentPage = 1;
     $scope.sortExpression = 'name';
        $scope.sortDirection = 'ascending';
    
  
$scope.bindUsers=function(Page,sortExpression,sortDirection,txtSearch)
{
   Register.getUsers(Page,sortExpression,sortDirection,txtSearch)
      .success(function(data) {
              $scope.users=data.documents;
           
              $scope.total =5*data.totalPages;
      
          })
          .error(function(response) {
           
          });

};

 $scope.bindUsers(1, $scope.sortExpression, $scope.sortDirection,null);
  
$scope.searchUser = function() {
     var txtSearch=$scope.txtSearch;
     if(txtSearch=='')
     {
txtSearch=null;
     }
     $scope.bindUsers(1, $scope.sortExpression, $scope.sortDirection,txtSearch);
  };


   $scope.DoCtrlPagingAct=function(page){
         $scope.bindUsers(page,$scope.sortExpression,$scope.sortDirection,null);

   };

 $scope.column = 'Name';
 
 // sort ordering (Ascending or Descending). Set true for desending
 $scope.reverse = false; 
 
 // called on header click
 $scope.sortColumn = function(col){
   var txtSearch=$scope.txtSearch;
     if(txtSearch=='')
     {
txtSearch=null;
     }

 $scope.column = col;
 if($scope.reverse){
 $scope.reverse = false;
 $scope.reverseclass = 'arrow-up';
   $scope.sortExpression = col;
        $scope.sortDirection = 'ascending';
   
  
$scope.bindUsers(1,col,'ascending',txtSearch);


 }else{
 $scope.reverse = true;
 $scope.reverseclass = 'arrow-down';

 $scope.sortExpression = col;
        $scope.sortDirection = 'descending';
  
 $scope.bindUsers(1,col,'descending',txtSearch);


 }
 };
 
 // remove and change class
 $scope.sortClass = function(col){
 if($scope.column == col ){
 if($scope.reverse){
 return 'arrow-down'; 
 }else{
 return 'arrow-up';
 }
 }else{
 return '';
 }

 };
   $scope.pageClass = 'fadeZoom'
  });