jshint-globals
==============
Use predefined jshint globals. 

## Problem
If you have many Javascript projects and need to define jshint globals and use them in a grunt task e.g. [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint). There should be a much easier way to reuse these globals between projects. And there should be an option to download already pre-defined globals.

## Solution
With `jshint-globals` you can easily use predefined or reuse you old globals.

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
### Download pre-defined globals

