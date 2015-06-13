angular.module('shortly.links', [])
.controller('LinksController', function($scope, Links, $http) {
  $scope.data = {};
  $scope.data.links = [];
  $scope.getLinks = function() {
    console.log("___________________________________________running getLinks");

  $http.get('/api/links').
  success(function(data, status, headers, config) {  
    $scope.data.links = data;
    
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
   });
  };
  $scope.getLinks();
});



// $scope.data = {};
//   $scope.data.links = [];
//   $scope.getLinks = function() {
//     console.log("___________________________________________running getLinks");

//   $http.get('/api/links').
//   success(function(data, status, headers, config) {  
//     $scope.data.links = data;
    
//     // this callback will be called asynchronously
//     // when the response is available
//   }).
//   error(function(data, status, headers, config) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//    });
//   };
//   $scope.getLinks();
// });