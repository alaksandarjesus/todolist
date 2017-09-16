(function() {
  'use strict';

  angular
    .module('day18')
    .service('CreateService', CreateService);

  /** @ngInject */
  function CreateService($http, AllService) {
    	
    	var tasks = {};
      var previousTasks;

      //actual
      	// tasks.create = function(data){

      	// return $http.post('mock/tasks.json', data).then(
      	// 		function(data){ //success
      	// 			return data.data.tasks;
      	// 	},
      	// 		function(error){ //error

      	// 			return error
      	// 	})
      	// }

      //demo purpose only
        tasks.create = function(data){
          previousTasks = AllService.getTempStorage(); // first time loaded data
          data.id = previousTasks.length+1;
          data.created_at = new Date();
          data.status = 0;
          previousTasks.push(data);
          AllService.setTempStorage(previousTasks); // update with new tasks list
          return;
        }

    	return tasks;


  }
})();
