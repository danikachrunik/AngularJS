(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foods = "";
  $scope.message = "";
  $scope.hide = "hidden";
  $scope.textColor = "";

  $scope.dispalyMessage = function () {
    //reset textColor and hide info box
    $scope.hide = "hidden";
    $scope.textColor = "";

    //make an array of foods from user input
    var foodsList = $scope.foods.split(',');

    //check the length of items in array
    function isEmpty(elem, index, array) {
      return elem.trim().length == 0;
    }

    //check for an empty input
    if(foodsList.every(isEmpty)) {
      $scope.textColor = "text-danger";
      $scope.message = "Please enter a list of foods you like to eat for lunch.";
    } else {
      //if input was not empty
      //check for empty list items
      if(foodsList.some(isEmpty)) {
        $scope.hide = "";

        for(var i = 0, len = foodsList.length; i < len; i++) {
          console.log(foodsList[i]);
          if(foodsList[i] == undefined || foodsList[i].length < 1) {
            foodsList = foodsList.splice(foodsList[i], 1);
          }
        }

      }
      //check the number of items if the foodsList array
      if(foodsList.length <= 3) {
        $scope.textColor = "text-success";
        $scope.message = "Enjoy!";
      } else {
        $scope.textColor = "text-success";
        $scope.message = "Too much!";
      }

    } // end of else
  } // end of dispalyMessage function
} // end of LunchCheckController

})();
