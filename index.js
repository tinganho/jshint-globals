
/**
 * Because using nested jshint globals is not possible with
 * the current grunt-contrib-jshint. We need to format the
 * nested globals to reach top-level object properties. This
 * formats your nested jshint globals.
 *
 * @param {Object} opts
 * @return {Object}
 * @api public
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