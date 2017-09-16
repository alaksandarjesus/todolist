(function() {
  'use strict';

  angular
    .module('day18')
    .service('AllService', AllService);

  /** @ngInject */
  function AllService($http) {
      var tempStorage = [];
    	var tasks = {};

    	tasks.all = function(){

    	return $http.get('mock/tasks.json').then(
    			function(data){ //success
            
    				return data.data.tasks;
    		},
    			function(error){ //error

    				return error
    		})
    	}

      tasks.setTempStorage = function(data){
        tempStorage = data;
        return true;
      }

      tasks.getTempStorage = function(){
        return tempStorage;
      }


    	return tasks;


  }
})();
