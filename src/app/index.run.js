(function() {
  'use strict';

  angular
    .module('formIo')
    .run(runBlock);

  /** @ngInject */
  function runBlock(FormioAuth) {
    FormioAuth.init();
  }

})();
