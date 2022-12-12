var variable = angular.module('module',[]);

variable.controller('myController', ['$scope', function($scope){
    
    
    $scope.removeBoy = function(boy){
      var removedBoy = $scope.boys.indexOf(boy);
      $scope.boys.splice(removedBoy, 1);
    }

    $scope.addBoy = function(){
      const belt = $scope.newBoy.belt.charAt(0).toUpperCase() + $scope.newBoy.belt.slice(1);
      const name = $scope.newBoy.name.charAt(0).toUpperCase() + $scope.newBoy.name.slice(1);
      $scope.boys.push({
        name:name,
        belt:belt,
        rate:parseInt($scope.newBoy.rate),
        available:true
      });
        console.log($scope.boys);
      $scope.newBoy.name="";
      $scope.newBoy.belt="";
      $scope.newBoy.rate="";
    }

    $scope.boys=[

        {
            name: "Fade",
            belt:"Blue",
            rate:345,
            available:true
          },
          {
            name: "Breach",
            belt:"Red",
            rate:376,
            available:true
          },
          {
            name: "Raze",
            belt:"Green",
            rate:987,
            available:true
          },
          {
            name: "Chamber",
            belt:"Purple",
            rate:320,
            available:true
          },
          {
            name: "KAY/O",
            belt:"Orange",
            rate:987,
            available:true
          },
          {
            name: "Skye",
            belt:"Black",
            rate:786,
            available:false
          }

    ];
}]);