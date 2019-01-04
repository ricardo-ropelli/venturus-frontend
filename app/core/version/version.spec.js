'use strict';

describe('venturusApp.version module', function() {
  beforeEach(module('venturusApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
