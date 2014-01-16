
var jshintGlobals = require('../')
  , expect = require('chai').expect;

describe('jshintGlobals', function() {
  it('should return an empty object if the parameter is not of type object', function() {
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
});