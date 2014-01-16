
var jshintGlobals = require('../')
  , expect = require('chai').expect;

describe('jshintGlobals', function() {
  describe('object parameter', function() {
    it('should return an empty object if the parameter is not of type object or array', function() {
      var res = jshintGlobals();
      expect(res).to.eql({});
      var res = jshintGlobals(1);
      expect(res).to.eql({});
      var res = jshintGlobals('');
      expect(res).to.eql({});
    });

    it('should be able to define unnested globals', function() {
      var globals = { test : true };
      var res = jshintGlobals(globals);
      expect(res).to.eql(globals);
    });

    it('should be able to define mutiple unnested globals', function() {
      var globals = { test1 : true, test2 : true };
      var res = jshintGlobals(globals);
      expect(res).to.eql(globals);
    });

    it('should be able to define nested globals', function() {
      var globals = {
        nested : {
          nested1 : true,
          nested2 : true
        }
      };
      var res = jshintGlobals(globals);
      expect(res).to.eql({
        nested1 : true,
        nested2 : true
      });
    });

    it('should be able to define nested globals and unnested globals', function() {
      var globals = {
        unnested : true,
        nested : {
          nested1 : true,
          nested2 : true
        }
      };
      var res = jshintGlobals(globals);
      expect(res).to.eql({
        unnested : true,
        nested1 : true,
        nested2 : true
      });
    });
  })
  
  describe('array parameter', function() {
    it('should be able to define unnested globals', function() {
      var globals = ['test'];
      var res = jshintGlobals(globals);
      expect(res).to.eql({ test : true });
    });

    it('should be able to define mutiple unnested globals', function() {
      var globals = ['test1', 'test2'];
      var res = jshintGlobals(globals);
      expect(res).to.eql({ test1 : true, test2 : true });
    });

    it('should be able to define nested array globals', function() {
      var globals = ['unnested', ['nested']];
      var res = jshintGlobals(globals);
      expect(res).to.eql({ unnested : true, nested : true });
    });

    it('should be able to define multi-nested-array globals', function() {
      var globals = ['unnested', ['nested1', 'nested2']];
      var res = jshintGlobals(globals);
      expect(res).to.eql({ unnested : true, nested1 : true, nested2 : true });
    });

    it('should be able to define multiple multi-nested-array globals', function() {
      var globals = ['unnested', ['nested1', 'nested2'], ['nested3', 'nested4']];
      var res = jshintGlobals(globals);
      expect(res).to.eql({ unnested : true, nested1 : true, nested2 : true, nested3 : true, nested4 : true });
    });
  });
});