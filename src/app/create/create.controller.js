(function() {
  'use strict';

  angular
    .module('day18')
    .controller('CreateController', CreateController);

  /** @ngInject */
  function CreateController($state,CreateService) {
    var vm = this;
    var data;
    vm.test = "I am from create controller";
    
    vm.task = '';

    vm.onCreate = function(){
      data = {
        task:vm.task
      }
      // CreateService.create(data).then(function(data){ // success // actual
      //   console.log(data)
      // },function(error){//error
      //   console.log(error)
      // })
        CreateService.create(data); // only for demo purpose
          $state.go("all");
          }
  }
})();
