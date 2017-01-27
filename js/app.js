(function () {

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.displayMessage = function() {
      var list;

      if ($scope.input) {
        $scope.input = $scope.input.trim();
        list = $scope.input.split(",");
        list = list.filter(function(item) {
          return list.length > 0;
        });

      
        if (list.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      } else {
        $scope.message = "Please enter data first";
      }
    }
  }

})();
