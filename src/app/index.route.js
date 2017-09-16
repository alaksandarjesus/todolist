(function() {
  'use strict';

  angular
    .module('day18')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('all', {
        url: '/',
        templateUrl: 'app/all/all.html',
        controller: 'AllController',
        controllerAs: 'all'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'app/create/create.html',
        controller: 'CreateController',
        controllerAs: 'create'
      }).state('update', {
        url: '/update/:id',
        templateUrl: 'app/update/update.html',
        controller: 'UpdateController',
        controllerAs: 'update'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
