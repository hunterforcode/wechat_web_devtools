'use strict';!function(require,directRequire){const a=require('path'),b=require('./d28a711224425b00101635efe1034c99.js'),c=require('babel-code-frame'),d=require('babel-core'),e=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),f=require('./45368a4f5c9761935178081387ad6a7c.js'),g=require('./be8599cf60139a20dca47b3e43647454.js'),h=require('./87c0ac209c25d8bb448550638bb17663.js'),i=require('./d91180fcab2f484fb84a83a404a2b678.js'),j=require('./201ace05546fc16e3d5cf71cb558f2c4.js'),{devtoolsConfigPlaceholder:k,wxConfigPlaceholder:l}=require('./ebfcad0a5e72b6e693634486564b1394.js');module.exports={generate:async function(a,b){let c=await j(a,b),d=await f(a),e=g();return c=c.split(l).join(`<script>var __wxConfig=${JSON.stringify(d)}</script>`),c=c.split(k).join(`<script>var __devtoolsConfig=${JSON.stringify(e)}</script>`),c},getJSFile:h,getJSMapFile:i}}(require('lazyload'),require);