(function() {
  'use strict';

  angular
    .module('day18')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($uibModal, $log) {
    var vm = this;
    vm.test = "I am from home controller";
    vm.animationsEnabled = false;
     vm.rate = 7;
    vm.max = 10;

    vm.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size || 'md',
      appendTo: parentElem,
      // resolve: { //get the datas ready before
      //   items: function () {
      //     return $ctrl.items;
      //   }
      // }
    });

    modalInstance.result.then(function (selectedItem) { //ok click -> success
      $log.log(" I am on click of ok button")

          }, function () { // cancel click -> error
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  }



angular.module('day18').controller('ModalInstanceCtrl', function ($uibModalInstance) {
  var $ctrl = this;
  $ctrl.items = [];
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () { //success
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {//error
    $uibModalInstance.dismiss('cancel');
  };
});






})();
