'use strict';!function(require,directRequire){function a(){let a=g.getCurrent(),b='tourist'==a.appid,c=a.setting.urlCheck,d=!0;return b?d=!1:!c&&(d=!1),d}const b=require('fs'),c=require('path'),d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),f=require('./233d77ecf0781f44985f684f70e316d0.js'),g=require('./3bfffbe88b3d923921f851c0697974fe.js'),h=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),i=require('./a1dd553cc059d528bb0ef56afed53968.js'),j=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),k=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),l={"text/plain":'txt',"application/vnd.android.package-archive":'apk',"video/3gpp":'3gp',"application/atom+xml":'atom',"video/x-msvideo":'avi',"application/x-bcpio":'bcpio',"image/bmp":'bmp',"image/cgm":'cgm',"application/x-cpio":'cpio',"application/mac-compactpro":'cpt',"application/x-csh":'csh',"text/css":'css',"application/xml-dtd":'dtd',"application/x-dvi":'dvi',"application/x-director":'dxr',"application/postscript":'eps',"text/x-setext":'etx',"application/andrew-inset":'ez',"video/x-flv":'flv',"image/gif":'gif',"application/srgs":'gram',"application/srgs+xml":'grxml',"application/x-gtar":'gtar',"application/x-gzip":'gz',"application/x-hdf":'hdf',"application/mac-binhex40":'hqx',"x-conference/x-cooltalk":'ice',"image/x-icon":'ico',"image/ief":'ief',"application/x-java-jnlp-file":'jnlp',"image/jp2":'jp2',"application/x-javascript":'js',"application/x-latex":'latex',"audio/x-mpegurl":'m3u',"video/x-m4v":'m4v',"application/x-troff-man":'man',"application/mathml+xml":'mathml',"application/x-troff-me":'me',"application/vnd.mif":'mif',"video/x-sgi-movie":'movie',"video/mp4":'mp4',"application/x-troff-ms":'ms',"application/oda":'oda',"application/ogg":'ogg',"video/ogv":'ogv',"image/x-portable-bitmap":'pbm',"chemical/x-pdb":'pdb',"application/pdf":'pdf',"image/x-portable-graymap":'pgm',"application/x-chess-pgn":'pgn',"image/png":'png',"image/x-portable-anymap":'pnm',"image/x-portable-pixmap":'ppm',"image/x-cmu-raster":'ras',"application/rdf+xml":'rdf',"image/x-rgb":'rgb',"application/vnd.rn-realmedia":'rm',"text/rtf":'rtf',"text/richtext":'rtx',"application/x-sh":'sh',"application/x-shar":'shar',"application/x-stuffit":'sit',"application/x-futuresplash":'spl',"application/x-wais-source":'src',"application/x-sv4cpio":'sv4cpio',"application/x-sv4crc":'sv4crc',"image/svg+xml":'svg',"application/x-shockwave-flash":'swf',"application/x-tar":'tar',"application/x-tcl":'tcl',"application/x-tex":'tex',"text/tab-separated-values":'tsv',"application/x-ustar":'ustar',"application/x-cdlink":'vcd',"application/voicexml+xml":'vxml',"audio/x-wav":'wav',"image/vnd.wap.wbmp":'wbmp',"application/vnd.wap.wbxml":'wbxml',"video/webm":'webm',"text/vnd.wap.wml":'wml',"application/vnd.wap.wmlc":'wmlc',"text/vnd.wap.wmlscript":'wmls',"application/vnd.wap.wmlscriptc":'wmlsc',"video/x-ms-wmv":'wmv',"image/x-xbitmap":'xbm',"image/x-xpixmap":'xpm',"application/xslt+xml":'xslt',"application/vnd.mozilla.xul+xml":'xul',"image/x-xwindowdump":'xwd',"chemical/x-xyz":'xyz',"application/zip":'zip'},m=/^(http|ws)s?:\/\/[\w-.]+(:\d+)?/i;let n=0,o=0,p={},q=1,r={},s=1;module.exports={downloadFile:async function(e,i){let n=i.args;if(h.isLocalId(n.url)){let a=h.getFileRealPath(n.url);return a&&b.existsSync(a.fileRealPath)?{errMsg:`${i.api}:ok`,statusCode:200,tempFilePath:n.url}:{errMsg:`${i.api}:ok`,statusCode:404}}const p=d.getState();let q=g.getCurrent();const r=p.toolbar.network.list[p.toolbar.network.current];if('none'==r)return{errMsg:`${i.api}:fail network is down`};const s=g.getCurrentConfig(),t=1024*(1024*s.setting.DownloadFileSizeLimit),u=p.simulator.appConfig||{},v=s.setting.MaxDownloadConcurrent;return o>=v?{errMsg:`${i.api}:fail exceed max download connection count ${v}`}:new Promise((d)=>{let e=!1;const p=(a)=>{e||(o--,d(a),e=!0)};try{o++;let d=0,e=200,r=c.extname(n.url.split('?')[0]),s=h.createTmpfileName(q,r),v=h.getFileRealPath(s),w=v.fileRealPath,x=n.header&&'object'==typeof n.header?n.header:{};x.Referer=`https://servicewechat.com/${g.getProjectAppID()}/devtools/page-frame.html`;let y=!1,z={method:'get',url:n.url,encoding:null,headers:x,timeout:u.networkTimeout&&u.networkTimeout.downloadFile||6e4,followRedirect:function(b){if(!a())return!0;let c=b.statusCode;if(300<=c&&400>c&&(302==c||301==c)){let a=b.caseless.get('location'),c=g.getCurrentDomains().download,d=m.exec(a.toLowerCase());d=d&&d[0]||'';for(let a=0;a<c.length;a++){let b=c[a],e=m.exec(b.toLowerCase());if(e=e&&e[0],e==d)return!0}let e=[];c.forEach((a)=>{e.push([a])}),j.display({command:k.DISPLAY_INFO,type:k.DISPLAY_TYPES.DOMAIN_ERROR,data:{type:'download',url:`302: ${a}`,domains:e}}),y=!0}return!1}};a()?z.agentOptions={secureProtocol:'TLSv1_2_method'}:z.tunnel=!1;let A=f(z),B=[];A.on('response',(a)=>{if(e=a.statusCode,200!=e&&206!=e)y?p({errMsg:`${i.api}:fail url not in domain list`}):p({errMsg:`${i.api}:ok`,statusCode:e});else{let b=parseInt(a.headers['content-length']);if(a.headers['content-type']){const b=a.headers['content-type'].replace(/;.*/g,''),c=l[b.toLowerCase()];if(c)r=`.${c}`;else{let a=b.split('/');a&&a[1]&&!/\-|\+/ig.test(a[1])&&(r=`.${a[1]}`)}}b>t&&(A.abort(),p({errMsg:`${i.api}:fail exceed max file size`}))}}).on('error',function(a){a&&'EPROTO'===a.code?p({errMsg:`${i.api}:fail 小程序要求的 TLS 版本必须大于等于 1.2`}):a&&'ETIMEDOUT'===a.code?p({errMsg:`${i.api}:fail timeout`}):p({errMsg:`${i.api}:fail ${a}`})}).on('data',(a)=>{d+=a.length,B.push(a),d>t&&(A.abort(),p({errMsg:`${i.api}:fail exceed max file size`}))}).on('end',()=>{let a=Buffer.concat(B),c=h.initTmpfileName(q,a,r),d=h.getFileRealPath(c),f=d.fileRealPath;b.writeFileSync(f,a),b.unlink(w,()=>{}),p({errMsg:`${i.api}:ok`,tempFilePath:c,statusCode:e})}).pipe(b.createWriteStream(w))}catch(a){p({errMsg:`${i.api}:fail ${a}`})}})},uploadFile:async function(c,i){let e=i.args;const j=g.getCurrentConfig(),k=j.setting.MaxUploadConcurrent,l=d.getState(),m=l.toolbar.network.list[l.toolbar.network.current];if('none'==m)return{errMsg:`${i.api}:fail network is down`};if(n>=k)return{errMsg:`${i.api}:fail exceed max upload connection count ${k}`};let o=e.filePath,p=h.getFileRealPath(o),q=p.fileRealPath;if(!b.existsSync(q))return{errMsg:`${i.api}:fail file not found`};const r=l.simulator.appConfig||{};return new Promise((c)=>{let d=!1;const h=(a)=>{d||(n--,d=!0,c(a))};try{n++;let c={url:e.url,headers:e.header||{},formData:e.formData||{},method:'post',timeout:r.networkTimeout&&r.networkTimeout.uploadFile||6e4};a()?c.agentOptions={secureProtocol:'TLSv1_2_method'}:c.tunnel=!1,c.formData[e.name]=b.createReadStream(q),c.headers.Referer=`https://servicewechat.com/${g.getProjectAppID()}/devtools/page-frame.html`;f(c,(a,b,c)=>{let d={};d=a?b&&b.statusCode?{errMsg:`${i.api}:ok`,statusCode:b.statusCode,data:c}:'EPROTO'===a.code?{errMsg:`${i.api}:fail 小程序要求的 TLS 版本必须大于等于 1.2`}:'ETIMEDOUT'===a.code?{errMsg:`${i.api}:fail timeout`}:{errMsg:`${i.api}:fail ${a}`}:{errMsg:`${i.api}:ok`,statusCode:b.statusCode,data:c},h(d)})}catch(a){h({errMsg:`${i.api}:fail ${a}`})}})},createUploadTask:async function(c,j){let e=j.args,k=g.getCurrentConfig();const l=k.setting.MaxUploadConcurrent,m=d.getState(),o=m.toolbar.network.list[m.toolbar.network.current];if('none'==o)return{errMsg:`${j.api}:fail network is down`};if(n>=l)return{errMsg:`${j.api}:fail exceed max upload connection count ${l}`};let r=e.filePath,s=h.getFileRealPath(r),t=s.fileRealPath;if(!b.existsSync(t))return{errMsg:`${j.api}:fail file not found`};const u=m.simulator.appConfig||{};try{n++;let c={url:e.url,headers:e.header||{},formData:e.formData||{},method:'post',timeout:u.networkTimeout&&u.networkTimeout.uploadFile||6e4};c.headers.Referer=`https://servicewechat.com/${g.getProjectAppID()}/devtools/page-frame.html`,a()&&(c.agentOptions={secureProtocol:'TLSv1_2_method'});let d=b.createReadStream(t);c.formData[e.name]=d;let h=q++,k=b.statSync(t),l=0;d.on('data',function(a){l+=a.length,i.triggerOnEvent({eventName:'onUploadTaskStateChange',data:{uploadTaskId:h,state:'progressUpdate',progress:Math.floor(100*(l/k.size)),totalBytesSent:l,totalBytesExpectedToSend:k.size}})});const m=(a)=>{p[h]&&(i.triggerOnEvent({eventName:'onUploadTaskStateChange',data:Object.assign({uploadTaskId:h},a)}),n--,delete p[h])};let o=f(c,(a,b,c)=>{let d={};d=a?b&&b.statusCode?{state:'success',statusCode:b.statusCode,data:c}:'EPROTO'===a.code?{state:'fail',errMsg:'\u5C0F\u7A0B\u5E8F\u8981\u6C42\u7684 TLS \u7248\u672C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1.2'}:'ETIMEDOUT'===a.code?{statSync:'fail',errMsg:'timeout'}:{state:'fail',errMsg:`${a}`}:{state:'success',statusCode:b.statusCode,data:c},m(d)});return o.on('abort',()=>{setTimeout(()=>{m({state:'fail',errMsg:'abort'})},0)}),p[h]={id:h,request:o},{errMsg:`${j.api}:ok`,uploadTaskId:h}}catch(a){return n--,{errMsg:`${j.api}:fail ${a}'`}}},operateUploadTask:async function(a,b){let c=b.args,d=c.uploadTaskId,e=c.operationType,f=p[d];return f?'abort'==e?(f.request&&f.request.abort(),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail illegal operationType`}:{errMsg:`${b.api}:fail task not found`}},createDownloadTask:async function(n,p){let q=p.args;const t=d.getState(),u=t.toolbar.network.list[t.toolbar.network.current];let v=g.getCurrent();if('none'==u)return{errMsg:`${p.api}:fail network is down`};if(q.url&&!/^https?:\/\//.test(q.url.toLowerCase()))return{errMsg:`${p.api}:fail invalid url`};const w=g.getCurrentConfig(),x=w.setting.MaxDownloadConcurrent;if(o>=x)return{errMsg:`${p.api}:fail exceed max download connection count ${x}`};const y=1024*(1024*w.setting.DownloadFileSizeLimit);let z=q.header&&'object'==typeof q.header?q.header:{};z.Referer=`https://servicewechat.com/${g.getProjectAppID()}/devtools/page-frame.html`;try{o++;let d=0,u=[],w=200,x=c.extname(q.url.split('?')[0]),A=h.createTmpfileName(v,x),B=h.getFileRealPath(A),C=B.fileRealPath,D=t.simulator.appConfig||{},E=!1,F={method:'get',url:q.url,encoding:null,headers:z,timeout:D.networkTimeout&&D.networkTimeout.downloadFile||6e4,followRedirect:function(b){if(!a())return!0;let c=b.statusCode;if(300<=c&&400>c&&(302==c||301==c)){let a=g.getCurrentDomains().download,c=b.caseless.get('location'),d=m.exec(c.toLowerCase());d=d&&d[0]||'';for(let b=0;b<a.length;b++){let c=a[b],e=m.exec(c.toLowerCase());if(e=e&&e[0],e==d)return!0}let e=[];a.forEach((a)=>{e.push([a])}),j.display({command:k.DISPLAY_INFO,type:k.DISPLAY_TYPES.DOMAIN_ERROR,data:{type:'download',url:`302: ${c}`,domains:e}}),E=!0}return!1}};a()?F.agentOptions={secureProtocol:'TLSv1_2_method'}:F.tunnel=!1;let G=s++;n({type:e.ASSDK_CALLBACK,res:{errMsg:`${p.api}:ok`,downloadTaskId:G},callbackID:p.callbackID});let H=f(F);r[G]={downloadTaskId:G,request:H};let I=y;const J=(a)=>{r[G]&&(delete r[G],o--,i.triggerOnEvent({eventName:'onDownloadTaskStateChange',data:Object.assign({downloadTaskId:G},a)}))},K=(a)=>{i.triggerOnEvent({eventName:'onDownloadTaskStateChange',data:{downloadTaskId:G,state:'progressUpdate',progress:a}})};if(h.isLocalId(q.url)){let a=h.getFileRealPath(q.url);return void(a&&b.existsSync(a.fileRealPath)?J({state:'success',tempFilePath:q.url,statusCode:200}):J({state:'success',statusCode:404}))}H.on('response',(a)=>{if(w=a.statusCode,200!=w&&206!=w)E?J({state:'fail',errMsg:'url not in domain list'}):J({state:'success',statusCode:w});else{let b=parseInt(a.headers['content-length']);if(b>y?(H.abort(),J({state:'fail',errMsg:'exceed max file size'})):I=b,a.headers['content-type']){const b=a.headers['content-type'].replace(/;.*/g,''),c=l[b.toLowerCase()];if(c)x=`.${c}`;else{let a=b.split('/');a&&a[1]&&!/\-|\+/ig.test(a[1])&&(x=`.${a[1]}`)}}}}).on('error',function(a){a&&'EPROTO'===a.code?J({state:fail,errMsg:'\u5C0F\u7A0B\u5E8F\u8981\u6C42\u7684 TLS \u7248\u672C\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E 1.2'}):a&&'ETIMEDOUT'===a.code?J({state:'fail',errMsg:`timeout`}):J({state:'fail',errMsg:`${a}`})}).on('data',(a)=>{d+=a.length,u.push(a),d>y?(J({state:'fail',errMsg:'exceed max file size'}),H.abort()):K(d/I)}).on('abort',()=>{setTimeout(()=>{J({state:'fail',errMsg:'abort'})},0)}).on('end',()=>{let a=Buffer.concat(u),c=h.initTmpfileName(v,a,x),d=h.getFileRealPath(c),e=d.fileRealPath;b.writeFileSync(e,a),b.unlink(C,()=>{}),J({state:'success',tempFilePath:c,statusCode:w})}).pipe(b.createWriteStream(C))}catch(a){return{errMsg:`${p.api}:fail ${a}`}}},operateDownloadTask:async function(a,b){let c=b.args,d=c.downloadTaskId,e=c.operationType,f=r[d];return f?'abort'==e?(f.request&&f.request.abort(),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail illegal operationType`}:{errMsg:`${b.api}:fail task not found`}},resetNetworkStatus:function(){for(var a in p)try{p[a].request.abort()}catch(a){}for(var a in r)try{r[a].request.abort()}catch(a){}n=0,o=0,p={},r={}}}}(require('lazyload'),require);