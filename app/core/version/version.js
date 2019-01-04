'use strict';

angular.module('venturusApp.version', [
  'venturusApp.version.interpolate-filter',
  'venturusApp.version.version-directive'
])

.value('version', '0.1');
