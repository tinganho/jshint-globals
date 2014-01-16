jshint-globals
==============
Use predefined jshint globals. 

## Problem
If you have many Javascript objects and need to define jshint globals all the time and use them in a grunt task e.g. grunt-contrib-jshint. There should be a much easier way to reuse these globals between object. And there should be option to download already predefined globals.

## Solution
With `jshint-globals` you can easily use predefined or reuse you old globals

Just require `jshint-globals`:
```javascript
var jshintGlobals = require('jshint-globals');
```
insert into the globals properties in your `grunt-contrib-jshint` task option:

```javascript
jshint : {
  options : {
    globals : 
  }
}
```
