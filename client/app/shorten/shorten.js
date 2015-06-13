angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function(){
        $scope.loading = false;
        $location.path('/');
      });
      .catch(function(error) {
        console.log(error)
      });
  };
});

// .controller('ShortenController', function ($scope, $location, Links, $http) {
//   $scope.link = {};
//   $scope.addLink = function(inp) {    
//     $scope.link.url = inp;

// // Simple POST request example (passing data) :

//   $http.post('/api/links', $scope.link).
//   success(function(data, status, headers, config) {
//     console.log(data);
//     console.log("good");
//     // this callback will be called asynchronously
//     // when the response is available
//   }).
//   error(function(data, status, headers, config) {
//     console.log(data);
//     console.log("bad");
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });
//  }
// });