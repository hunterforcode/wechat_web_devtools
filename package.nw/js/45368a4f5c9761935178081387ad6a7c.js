'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('path'),b=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),c=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),d=require('./37be435102276ea9cf47609ff6535cd4.js');var e={USER_DATA_PATH:d.USER_DATA_PATH};module.exports=async function(d){let f=await b(d),g=d.attr&&d.attr.setting||{};g=_extends({},c.setting,g);let h=_extends({},f,{wxAppInfo:{maxRequestConcurrent:g.MaxRequestConcurrent,maxUploadConcurrent:g.MaxUploadConcurrent,maxDownloadConcurrent:g.MaxDownloadConcurrent}});if(h.subPackages){let b=[];h.subPackages.forEach((c)=>{b=b.concat(c.pages.map((b)=>{return a.posix.join(c.root,b)}))}),h.pages=h.pages.concat(b)}let i,j={path:h.pages[0],scene:c.SCENE_DEFAULT,query:{}};try{let a=d.compileType,b=d.condiction[a];if(i=b.list[b.current],i){let a=i.query&&i.query.split('&')||[];a.forEach((a)=>{if(a){let b=a.split('=');j.query[b[0]]=b[1]}}),i.pathName&&(j.path=i.pathName);let b=i.scene;b&&(j.scene=b,b==c.SCENE_SHARE_TICKET&&(j.shareInfo=i.shareInfo),(b==c.SCENE_MINI_PROGRAM||b==c.SCENE_MINI_PROGRAM_BACK||b==c.SCENE_PROFILE||b==c.SCENE_CUSTOM_MENU||b==c.SCENE_APP_SHARE_MESSAGE||b==c.SCENE_TEMPLETE_MESSAGE)&&(j.referrerInfo=i.referrerInfo))}}catch(a){}return h=_extends({},h,{platform:'devtools',appLaunchInfo:j,env:e}),h}}(require('lazyload'),require);