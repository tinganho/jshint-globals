
/**
 * Check if array
 *
 * @param {*} arr
 * @return {Boolean}
 * @api private
 */

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

/**
 * Check if object
 *
 * @param {*} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * Because using nested jshint globals is not possible with
 * the current grunt-contrib-jshint. We need to format the
 * nested globals to reach top-level object properties. This
 * function formats your nested jshint globals.
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
  if(!isObject(opts)
  && !isArray(opts)) {
    return globals;
  }

  if(isObject(opts)) {
    for(var key in opts) {
      if(typeof opts[key] === 'boolean') {
        globals[key] = opts[key];
      }
      if(isObject(opts[key])) {
        for(var _key in opts[key]) {
          globals[_key] = opts[key][_key];
        }
      }
      if(isArray(opts[key])) {
        for(var _key in opts[key]) {
          globals[opts[key][_key]] = true;
        }
      }
    }
  }
  else {
    opts.forEach(function(opt) {
      if(typeof opt === 'string') {
        globals[opt] = true;
      }
      if(isObject(opt)) {
        for(var key in opt) {
          globals[key] = true;
        }
      }
      if(isArray(opt)) {
        for(var key in opt) {
          globals[opt[key]] = true;
        }
      }
    });
  }

  return globals;
};

/**
 * Export mocha globals
 */

module.exports.mocha = [
  'describe',
  'it',
  'before',
  'after'
];

/**
 * Export browser globals
 */

module.exports.browser = [
  'open',
  'document',
  'navigator',
  'confirm',
  'performance',
  'alert',
  'window',
  'Image',
  'FileReader',
  'localStorage',
  'sessionStorage',
  'cancelAnimationFrame',
  'requestAnimationFrame',
  'FormData',
  'atob',
  'Blob',
  'Uint8Array',
];

/**
 * Export requirejs globals
 */

module.exports.requirejs = [
  'require',
  'requirejs',
  'define'
];
