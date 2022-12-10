var variable = angular.module('module',[]);

variable.controller('myController', ['$scope', function($scope){
    $scope.meas="hello this is a variable....";
    $scope.list=[

        {
            "uuid": "dade69b4-4f5a-8528-247b-219e5a1facd6",
            "displayName": "Fade",
            "rate":345,
            "description": "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark."
          },
          {
            "uuid": "5f8d3a7f-467b-97f3-062c-13acf203c006",
            "displayName": "Breach",
            "rate":376,
            "description": "The bionic Swede Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair."
          },
          {
            "uuid": "f94c3b30-42be-e959-889c-5aa313dba261",
            "displayName": "Raze",
            "rate":987,
            "description": "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of \"boom\"."
          },
          {
            "uuid": "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
            "displayName": "Chamber",
            "rate":320,
            "description": "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan."
          },
          {
            "uuid": "601dbbe7-43ce-be57-2a40-4abd24953621",
            "displayName": "KAY/O",
            "rate":987,
            "description": "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge."
          },
          {
            "uuid": "6f2a04ca-43e0-be17-7f36-b3908627744d",
            "displayName": "Skye",
            "rate":786,
            "description": "Hailing from Australia, Skye and her band of beasts trailblaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
          }

    ];
}]);