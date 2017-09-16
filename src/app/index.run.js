(function() {
  'use strict';

  angular
    .module('day18')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
