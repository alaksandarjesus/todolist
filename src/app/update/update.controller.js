(function() {
  'use strict';

  angular
    .module('day18')
    .controller('UpdateController', UpdateController);

  /** @ngInject */
  function UpdateController($state, $stateParams, UpdateService) {
    var vm = this;
    vm.task = {};
    vm.test = "I am from update controller";

//Actual Code
    // UpdateService.getTaskById($stateParams.id).then(function(task){ //success
    //   console.log(task)
    // },function(error){ //error function
    //   console.log(error)
    // })

//Demo purpose
    vm.task = UpdateService.getTaskById($stateParams.id);
    vm.task.status = vm.task.status.toString();
    console.log(vm.task);
//Actual code
    // vm.update = function(){
    //   console.log("vm.task", vm.task);

    //   UpdateService.update(vm.task).then(function(){
    //     //success
    //   }, function(){
    //     //error
    //   })


    // }

// Demo purpose
     vm.update = function(){
      vm.task.status = parseInt(vm.task.status);
      UpdateService.update(vm.task);
      $state.go('all');
     }

  }
})();













