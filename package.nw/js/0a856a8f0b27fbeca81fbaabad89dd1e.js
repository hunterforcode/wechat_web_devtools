'use strict';!function(require,directRequire){function a(){m={}}function b(b,c){let e=d.extname(c);('.json'===e||'.wxss'===e)&&a()}async function c(c){if(l){let b=l.setting&&l.setting.newFeature,d=c.setting&&c.setting.newFeature;b!=d&&a()}l=c;let d=await e(c);k&&k.srcPath==d.srcPath||(a(),k&&k.unWatch(b),k=d,k.watch(b))}const d=require('path'),e=require('./162bf2ee28b76d3b3d95b685cede4146.js'),f=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),g=require('./d260ebf687a29f24aed49f66b233ab7d.js'),h=require('./709f7f8328edb932b1169de8b7e694dd.js'),i=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js');var k,l,m={};module.exports=async function(a,b={}){await c(a);const{app:d,page:e}=b;let k,l=await f(a),n='main',o='$gwx';if(!d){if(k=j.checkIsInSubPackage(l,e),!k)return[];n=`sub_${k.root}`,o=`$${k.root.replace(/\//g,'_')}`}if(!m[n]){let b=await i.getFileList(a,l,k),c=[];for(let d=0,e=b.length;d<e;d++){let e=b[d],f=await g(a,e);c.push(`__wxAppCode__["${e}.json"]=${JSON.stringify(f)}`),c.push(`__wxAppCode__["${e}.wxml"]=${o}("./${e}.wxml")`);let i=await h(a,{page:e});c.push(`__wxAppCode__["${e}.wxss"]=${i.page}`)}m[n]=c}return m[n]}}(require('lazyload'),require);