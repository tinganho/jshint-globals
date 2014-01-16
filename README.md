jshint-globals
==============
Use predefined jshint globals. 

## Problem
If you have many Javascript projects and need to define jshint globals and use them in a grunt task e.g. [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint). There should be a much easier way to reuse these globals between projects. And there should be an option to download already pre-defined globals.

## Solution
With `jshint-globals` you can easily use predefined or reuse you old globals.
Install `jshint-globals`:
```
npm install jshint-globals --save-dev
```
Just require `jshint-globals`:
```javascript
var jshintGlobals = require('jshint-globals');
```
insert into the globals properties in your `grunt-contrib-jshint` task option:
```javascript
jshint : {
  options : {
    globals : jshintGlobals({
      variable1 : true,
      variable2 : true,
      nestedVariables : {
        nestedVariable1 : true,
        nestedVariable2 : true
      }
    })
  }
}
```
the above equals:
```javascript
jshint : {
  options : {
    globals : {
      variable1 : true,
      variable2 : true,
      nestedVariable1 : true,
      nestedVariable2 : true
    }
  }
}
```
Use array instead of object:
```javascript
jshint : {
  options : {
    globals : jshintGlobals([
      'variable1',
      'variable2',
      {
        nestedObjectVariable1 : true,
        nestedObjectVariable2 : true
      },
      ['nestedArrayVariable1', 'nestedArrayVariable1']
    })
  }
}
```
the above equals:
```javascript
jshint : {
  options : {
    globals : {
      variable1 : true,
      variable2 : true,
      nestedObjectVariable1 : true,
      nestedObjectVariable2 : true,
      nestedArrayVariable1 : true,
      nestedArrayVariable2 : true
    }
  }
}
```
### Use pre-defined globals

```javascript
var jshintGlobals = require('jshint-globals');
var browser = jshintGlobals.browser;

...

jshint : {
  options : {
    globals : jshintGlobals({
      variable1 : true,
      variable2 : true,
      browser : browser
    })
  }
}
```
the above equals:
```javascript
jshint : {
  options : {
    globals : {
      variable1 : true,
      variable2 : true,
      open : true,
      document : true,
      navigator : true,
      ...
    }
  }
}
```

### Available globals
```javascript
var browser = require('jshint-globals').browser;
var _requirejs = require('jshint-globals').requirejs;
var mocha = require('jshint-globals').mocha
```
[Please check the source for all globals defined in each category](https://github.com/tinganho/jshint-globals/blob/master/index.js)

