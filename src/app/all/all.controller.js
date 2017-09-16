(function() {
  'use strict';

  angular
    .module('day18')
    .controller('AllController', AllController);

  /** @ngInject */
  function AllController($state,AllService) {
    var vm = this;
    vm.test = "I am from all controller";
    vm.tasks = [];
    vm.search = '';
    getAllTasks();

    vm.create = function(){ //method 2
      $state.go("create");
    }



    function getAllTasks(){
      if(!AllService.getTempStorage().length){
        AllService.all().then(function(data){
        vm.tasks = data;
        AllService.setTempStorage(data); //set the tasks list temporarily to hold in service
        console.log(vm.tasks)
      }, function(error){
        console.log(error)
      })

      }else{
        vm.tasks = AllService.getTempStorage(); // retrieve the data from the temp storage
      }
      

    }

    vm.remove = function(data){
      console.log(data);
      _.remove(vm.tasks, function(task){
        return data.id == task.id;
      })
      AllService.setTempStorage(vm.tasks); // demo purpose
    }

  }
})();
