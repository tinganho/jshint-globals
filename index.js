
/**
 *
 */

module.exports = function(opts) {
  var globals = {};

  if(typeof opts === 'undefined') {
    return globals;
  }
  if(typeof opts !== 'object') {
    return globals;
  }

  for(var key in opts) {
    if(typeof opts[key] === 'object') {
      for(var _key in opts[key]) {
        globals[_key] = opts[key][_key];
      }
    }
    if(typeof opts[key] === 'boolean') {
      globals[key] = opts[key];
    }
  }

  return globals;
};