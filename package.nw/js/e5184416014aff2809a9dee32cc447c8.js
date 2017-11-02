'use strict';!function(require,directRequire){function a(){return new Promise((a)=>{k('*',{cwd:u},(b,c)=>{c.forEach((a)=>{let b=j.join(u,a);try{i.unlinkSync(b)}catch(a){}}),a()})})}async function b(a){C=!0,p({title:`回退版本`,message:`非常抱歉，上次版本更新存在非常大的问题，是否回退版本？`,buttons:[{title:'\u5B89\u88C5'}],callback:(b)=>{if(0===b){let b=v?'open':a,c=v?[a]:[];try{spawn(b,c,{detached:!0,cwd:u})}catch(b){nw.Shell.openItem(j.join(u,a))}q.quit()}}})}async function c(a,b){C=!0,p({title:`有新版本`,message:`新版本 ${a} 已经准备好，立刻重启安装？`,buttons:[{title:'\u5B89\u88C5\u65B0\u7248\u672C'}],callback:(a)=>{if(0===a){let a=v?'open':b,c=v?[b]:[];try{spawn(a,c,{detached:!0,cwd:u})}catch(a){nw.Shell.openItem(j.join(u,b))}q.quit()}}}),await z.open(),await z.insert('noticecenter',[{type:s.DBType.tools,title:'\u7248\u672C\u66F4\u65B0',content:`最新的开发工具版本 ${a}`,link:b,timestamp:Date.now()/1e3}]),await z.close()}async function d(b){const{version:c,versionType:d}=b;let e=`${w}_${c}.${v?'ndmg':'nexe'}`,f=j.join(u,e),g=`${w}_${c}.${v?'dmg':'exe'}`,h=j.join(u,g);return i.existsSync(h)?h:(await a(),new Promise((a,b)=>{let e='',g={url:`${y}&type=${w}&download_version=${c}&version_type=${d}`,followRedirect:function(a){return e=a.caseless.get('md5'),e}};B=!0,n(g,(a)=>{return B=!1,a?b(a):void process.nextTick(()=>{j()})}).pipe(i.createWriteStream(f,{mode:511}));const j=()=>{try{let c=Buffer.from(e,'base64'),d=i.readFileSync(f),g=l.createHash('md5');g.update(d);let j=g.digest('hex');const k=l.createVerify('RSA-SHA1');if(k.update(j),!k.verify(A,c))return b('signature not match');i.rename(f,h,(c)=>{return c?b(c):void a(h)})}catch(a){b(a)}}}))}async function e(){return new Promise((a,b)=>{let c={url:`${m.checkUpdate}?clientversion=${x}&type=${w}`};n(c,(c,d,e)=>{if(c)return b(c);try{let c=JSON.parse(e),d=c.baseresponse||{},f=d.errcode;0==f?a({version:c.update_version,forceUpdate:2==c.update_type,versionType:c.version_type}):b(f)}catch(a){b(a)}})})}function f(a){if(a){let b=a.version;if(b>x||a.forceUpdate)return!0}return!1}function g(a){return a+='',a.replace(/^(\d)(\d\d)(\d+)$/,function(a,b,c,d){return`${b}.${c}.${d}`})}async function h(a){try{if(a){let e=a.version,h=g(e),i=e<x&&a.forceUpdate;if(f(a)&&!B){let e=await d(a);C||(i?b():c(h,e)),a.forceUpdate&&(r.forceUpdateVersion=h)}}}catch(a){}}const i=require('fs'),j=require('path'),k=require('glob'),l=require('crypto'),m=require('./f171257bbcaef547a3cf27266ccb0db2.js'),n=require('./233d77ecf0781f44985f684f70e316d0.js'),o=require('./72653d4b93cdd7443296229431a7aa9a.js'),p=require('./d3ce001ab1e75959382f6a7e0156dd17.js'),q=require('./84b183688a46c9e2626d3e6f83365e13.js'),r=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),s=require('./bcb48ae14d243711d3b31cb0f602d209.js'),t=require('./92320c1386e6db6a6f2556736a9bc280.js'),u=t.WeappApplication,v='darwin'===process.platform,w=v?'darwin':'x64'===process.arch?'x64':'ia32',x=parseInt(global.appVersion.replace(/\./g,'')),y=`${m.downloadRedirectURL}?os=${v?'darwin':'win'}`,z=require('./4102b43ad51182743111f5d5e1fc5b46.js'),A=`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZm2cFP/uF81V5KH/B9dn/g7WA
CM3yu0P7n9sm/O6c58HTYI0+xugCfwMuoX7hyU4jkWbZ/BYK7IgWhmVfiRtgomJe
wuZlxfGUpmrr1PA2KbYVpPW0V6e/2uZu1Ev3xU7PkHKYf4AKgPO8w98hvKlUJRbk
H4AYMxX6eL9j9qCBGQIDAQAB
-----END PUBLIC KEY-----`;var B=!1,C=!1;module.exports={loop:function(){e().then((a)=>{h(a)}),setInterval(()=>{e().then((a)=>{h(a)})},600000)},checkNeedUpdate:async function(){try{let a=await e();if(h(a),f(a))return g(a.version)}catch(a){}}}}(require('lazyload'),require);