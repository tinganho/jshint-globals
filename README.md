jshint-globals
==============
Use predefined jshint globals. 

## Problem
If you have many Javascript projects and need to define jshint globals and use them in a grunt task e.g. grunt-contrib-jshint. There should be a much easier way to reuse these globals between projects. And there should be option to download already predefined globals.

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

