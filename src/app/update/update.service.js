(function() {
  'use strict';

  angular
    .module('day18')
    .service('UpdateService', UpdateService);

  /** @ngInject */
  function UpdateService(AllService) {
    var task = {};
    var tasks;
// Actual code
    // task.getTaskById = function(taskId){
    // 	//if rest url/tasks/id
    // 	//if url/tasks?id=1
    // 	return $http.get('url').then(function(){
    // 		//success
    // 	}, function(){
    // 		//error
    // 	})
    // }

    // task.update = function(task){
    // 	return $http.put('url', task).then(function(){
    // 		//success
    // 	}, function(){
    // 		//error
    // 	})
    // }

  //Demo purpose only
  	task.getTaskById = function(taskId){
  		tasks = AllService.getTempStorage();
  		// core javascript - forloop
  		// for(var i =0 ; i < tasks.length; i++){ //stop this loop once answer found
  		// 	if(taskId == tasks[i].id) return tasks[i];
  		// }

  		// angular foreach
  		// var temp;
  		// angular.forEach(tasks, function(task){ // cannot stop the code
  		// 	if(task.id == taskId) temp = task;
  		// })
  		//return temp;
  		// using lodash
  		// var temp;
  		// _.each(tasks, function(task){ // cannot stop the code
  		// 	if(task.id == taskId) temp = task;
  		// })
  		// return temp;

  		return _.find(tasks, function(task){ // returns only one object //preferred
  			return task.id == taskId
  		});
  		// var temp;
  		// temp = _.filter(tasks, function(task){ // returns matching objects in an array
  		// 	return task.id == taskId
  		// });
  		// return temp[0];
  	}


  	task.update = function(task){
  		task.updated_at = new Date();
  		tasks = AllService.getTempStorage();
  		for(var i =0 ; i < tasks.length; i++){
  			if(task.id == tasks[i].id) {
  				tasks[i] = task;
  			};
  		}
  		AllService.setTempStorage(tasks);
  		return;

  	}


    return task;

  }
})();













