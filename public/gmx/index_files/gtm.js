
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"18",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var g=[{name:\"EMAIL\",regex:\/([A-z0-9!#\\$%\u0026'*\\\/=\\?\\^_+\\-`{|}~]{1,4}@[A-z0-9!#\\$%\u0026'*\\\/=\\?\\^_+\\-`{|}~]{1,4})(?=[A-z0-9!#\\$%\u0026'*\\\/=\\?\\^_+\\-`{|}~]*\\.[A-z0-9!#\\$%\u0026'*\\\/=\\?\\^_+\\-`{|}~]+)\/g}],f=\"_\"+a.get(\"trackingId\")+\"_sendHitTask\",h=window[f]=window[f]||a.get(\"sendHitTask\"),b,c,d,e;a.set(\"sendHitTask\",function(a){c=a.get(\"hitPayload\").split(\"\\x26\");for(b=0;b\u003Cc.length;b++){d=c[b].split(\"\\x3d\");try{e=decodeURIComponent(decodeURIComponent(d[1]))}catch(k){e=decodeURIComponent(d[1])}g.forEach(function(a){e=\ne.replace(a.regex,\"[REDACTED \"+a.name+\"]\")});d[1]=encodeURIComponent(e);c[b]=d.join(\"\\x3d\")}a.set(\"hitPayload\",c.join(\"\\x26\"),!0);h(a)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.hash})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-60259872-2"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","customTask","value",["macro",4]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",5]],["map","index","2","dimension",["macro",6]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_customUrlSource":["macro",9],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"kid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    }],
  "tags":[{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1057501978",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",2],
      "vtp_enableRdpCheckbox":true,
      "tag_id":11
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",8],
      "vtp_eventAction":"signup-click",
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1",
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",8],
      "vtp_eventAction":"login",
      "vtp_eventLabel":["macro",13],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"gclidw",
      "tag_id":16
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":true,
      "vtp_cookiePrefix":"_gcl_s",
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":17
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":18
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl_s",
      "vtp_conversionId":"1057501978",
      "vtp_conversionLabel":"z46OCIKar4gBEJrmoPgD",
      "vtp_url":["macro",2],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":19
    },{
      "function":"__cl",
      "tag_id":20
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"841787_27",
      "tag_id":21
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_css",
      "arg0":["macro",3],
      "arg1":"*[href^=\"https:\/\/service.gmx.com\/registration.html\"],*[href^=\"https:\/\/service.gmx.com\/registration.html\"] *"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_sw",
      "arg0":["macro",11],
      "arg1":"https:\/\/login.gmx.com\/login"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)841787_27($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"@dsp@bn"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"@src@txt|@cnt@txt|cnt@bn|mbsrc@txt"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"gmx.com\/registrationConfirm.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"RegistrationWelcomeInterception"
    }],
  "rules":[
    [["if",0,1],["add",0,1]],
    [["if",2,3],["add",2]],
    [["if",4,5,6],["add",3]],
    [["if",7],["add",4]],
    [["if",1,8],["add",5]],
    [["if",1,9],["add",6]],
    [["if",1,10],["add",7,8]],
    [["if",1,11],["add",7,8]],
    [["if",1],["add",9,10]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Nf:!0},ha={};try{ha.__proto__=fa;ea=ha.Nf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=da,ja=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ka=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},sa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ta=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ua=function(a,b){if(a&&sa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},va=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new wa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Aa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ca=function(a){return Math.round(Number(a))||0},Da=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ea=function(a){var b=[];if(sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},wa=function(){this.prefix="gtm.";this.values={}};wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};wa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Na=function(a){var b=
[];Aa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},n=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=n(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=n(e,c[d])):c[d]=e}return c};var rb;
var sb=[],tb=[],ub=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):rb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=
xb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=sb[f];if(!h||b.$c(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);Ab&&(d=Ab.lg(d,k))}catch(y){b.He&&b.He(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=
[];for(var m=!1,r=1;r<a.length;r++){var q=Cb(a[r],b,c);zb&&(m=m||q===zb.Kb);d.push(q)}return zb&&m?zb.og(d):d.join("");case "escape":d=Cb(a[1],b,c);if(zb&&sa(a[1])&&"macro"===a[1][0]&&zb.Mg(a))return zb.dh(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!vb[p])throw Error("Unable to resolve tag reference "+p+".");return d={te:a[2],index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||
2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),Hh:a("debug_mode_metadata"),Ha:a("function"),lf:a("instance_name"),rf:a("live_only"),tf:a("malware_disabled"),uf:a("metadata"),Ih:a("original_vendor_template_id"),yf:a("once_per_event"),Nd:a("once_per_load"),Vd:a("setup_tags"),Xd:a("tag_id"),Yd:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<tb.length;e++){var f=tb[e],h=Kb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],r=0;r<vb.length;r++)c[r]&&!d[r]&&(m[r]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ib(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(ub[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={ab:"_ee",Mc:"_syn",Lh:"_uei",Jh:"_pci",Ac:"event_callback",Jb:"event_timeout",V:"gtag.config",fa:"allow_ad_personalization_signals",Bc:"restricted_data_processing",Za:"allow_google_signals",ia:"cookie_expires",Ib:"cookie_update",$a:"session_duration",la:"user_properties",xa:"transport_url",M:"ads_data_redaction"};C.Fe=[C.fa,C.Za,C.Ib];C.Je=[C.ia,C.Jb,C.$a];C.m="ad_storage",C.I="analytics_storage",C.uh="region",C.xh="wait_for_update";var fc={},gc=function(a,b){fc[a]=fc[a]||[];fc[a][b]=!0},hc=function(a){for(var b=[],c=fc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var D=function(a){gc("GTM",a)};var F=window,H=document,ic=navigator,jc=H.currentScript&&H.currentScript.src,kc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},lc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},mc=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;lc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},nc=function(){if(jc){var a=jc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},oc=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);lc(c,b);void 0!==a&&(c.src=a);return c},pc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},qc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},rc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},sc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},tc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},uc=function(a){var b=H.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},vc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},wc=function(a){ic.sendBeacon&&ic.sendBeacon(a)||pc(a)},xc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var zc={},Ac=function(a){return void 0==zc[a]?!1:zc[a]};var Bc=[];function Cc(){var a=kc("google_tag_data",{});a.ics||(a.ics={entries:{},set:Dc,update:Ec,addListener:Fc,notifyListeners:Gc,active:!1});return a.ics}
function Dc(a,b,c,d,e,f){var h=Cc();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,r=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(r===e||(r===d?m!==e:!r&&!m)){var q=!!(f&&0<f&&void 0===l.update),u={region:r,initial:"granted"===b,update:l.update,quiet:q};k[a]=u;q&&F.setTimeout(function(){k[a]===u&&u.quiet&&(u.quiet=!1,Hc(a),Gc(),gc("TAGGING",2))},f)}}}
function Ec(a,b){var c=Cc();c.active=!0;if(void 0!=b){var d=Ic(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Ic(a);f.quiet?(f.quiet=!1,Hc(a)):h!==d&&Hc(a)}}function Fc(a,b){Bc.push({ne:a,yg:b})}function Hc(a){for(var b=0;b<Bc.length;++b){var c=Bc[b];sa(c.ne)&&-1!==c.ne.indexOf(a)&&(c.Pe=!0)}}function Gc(){for(var a=0;a<Bc.length;++a){var b=Bc[a];if(b.Pe){b.Pe=!1;try{b.yg.call()}catch(c){}}}}
var Ic=function(a){var b=Cc().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Jc=function(a){return!(Cc().entries[a]||{}).quiet},Kc=function(){return Ac("gtag_cs_api")?Cc().active:!1},Lc=function(a,b){Cc().addListener(a,b)},Mc=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Jc(b[e]))return!0;return!1}if(c()){var d=!1;Lc(b,function(){d||c()||(d=!0,a())})}else a()},Nc=function(a,b){if(!1===Ic(b)){var c=!1;Lc([b],function(){!c&&Ic(b)&&(a(),c=!0)})}};var Oc=[C.m,C.I],Pc=function(a){var b=a[C.uh];b&&D(40);var c=a[C.xh];c&&D(41);for(var d=sa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Oc.length;f++){var h=Oc[f],k=a[Oc[f]],l=d[e];Cc().set(h,k,l,"US","US-IL",c)}},Qc=function(a){for(var b=0;b<Oc.length;b++){var c=Oc[b],d=a[Oc[b]];Cc().update(c,d)}Cc().notifyListeners()},Rc=function(a){var b=Ic(a);return void 0!=b?b:!0},Sc=function(){for(var a=[],b=0;b<Oc.length;b++){var c=Ic(Oc[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
Tc=function(a,b){Mc(a,b)};var Vc=function(a){return Uc?H.querySelectorAll(a):null},Wc=function(a,b){if(!Uc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Xc=!1;if(H.querySelectorAll)try{var Yc=H.querySelectorAll(":root");Yc&&1==Yc.length&&Yc[0]==H.documentElement&&(Xc=!0)}catch(a){}var Uc=Xc;var md={},K=null,nd=Math.random();md.s="GTM-58QWRT";md.Ob="7f0";md.Md="";var od={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},pd="www.googletagmanager.com/gtm.js";
var qd=pd,rd=null,sd=null,td="//www.googletagmanager.com/a?id="+md.s+"&cv=18",ud={},vd={},wd=function(){var a=K.sequence||1;K.sequence=a+1;return a};
var xd=function(){return"&tc="+vb.filter(function(a){return a}).length},Ad=function(){yd||(yd=F.setTimeout(zd,500))},zd=function(){yd&&(F.clearTimeout(yd),yd=void 0);void 0===Bd||Cd[Bd]&&!Dd&&!Ed||(Fd[Bd]||Gd.Og()||0>=Hd--?(D(1),Fd[Bd]=!0):(Gd.kh(),pc(Id()),Cd[Bd]=!0,Jd=Kd=Ed=Dd=""))},Id=function(){var a=Bd;if(void 0===a)return"";var b=hc("GTM"),c=hc("TAGGING");return[Ld,Cd[a]?"":"&es=1",Md[a],b?"&u="+b:"",c?"&ut="+c:"",xd(),Dd,Ed,Kd,Jd,"&z=0"].join("")},Nd=function(){return[td,"&v=3&t=t","&pid="+
va(),"&rv="+md.Ob].join("")},Od="0.005000">Math.random(),Ld=Nd(),Pd=function(){Ld=Nd()},Cd={},Dd="",Ed="",Jd="",Kd="",Bd=void 0,Md={},Fd={},yd=void 0,Gd=function(a,b){var c=0,d=0;return{Og:function(){if(c<a)return!1;Ga()-d>=b&&(c=0);return c>=a},kh:function(){Ga()-d>=b&&(c=0);c++;d=Ga()}}}(2,1E3),Hd=1E3,Qd=function(a,b){if(Od&&!Fd[a]&&Bd!==a){zd();Bd=a;Jd=Dd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Md[a]="&e="+c+"&eid="+a;Ad()}},Rd=function(a,b,c){if(Od&&!Fd[a]&&
b){a!==Bd&&(zd(),Bd=a);var d,e=String(b[Hb.Ha]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Dd=Dd?Dd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(xb[h]?"1":"2")+d;Jd=Jd?Jd+"."+k:"&ti="+k;Ad();2022<=Id().length&&zd()}},Sd=function(a,b,c){if(Od&&!Fd[a]){a!==Bd&&(zd(),Bd=a);var d=c+b;Ed=Ed?Ed+
"."+d:"&epr="+d;Ad();2022<=Id().length&&zd()}};var Td={},Ud=new wa,Vd={},Wd={},Zd={name:"dataLayer",set:function(a,b){n(Ma(a,b),Vd);Xd()},get:function(a){return Yd(a,2)},reset:function(){Ud=new wa;Vd={};Xd()}},Yd=function(a,b){if(2!=b){var c=Ud.get(a);Od&&c!==$d(a.split("."))&&D(5);return c}return $d(a.split("."))},$d=function(a){for(var b=Vd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},ae=function(a,b){Wd.hasOwnProperty(a)||(Ud.set(a,b),n(Ma(a,b),Vd),Xd())},Xd=function(a){Aa(Wd,function(b,c){Ud.set(b,c);
n(Ma(b,void 0),Vd);n(Ma(b,c),Vd);a&&delete Wd[b]})},be=function(a,b,c){Td[a]=Td[a]||{};var d=1!==c?$d(b.split(".")):Ud.get(b);"array"===Pa(d)||"object"===Pa(d)?Td[a][b]=n(d):Td[a][b]=d},ce=function(a,b){if(Td[a])return Td[a][b]},de=function(a,b){Td[a]&&delete Td[a][b]};var ge=/:[0-9]+$/,he=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ke=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ie(a.protocol)||ie(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(ge,"").toLowerCase());return je(a,b,c,d,e)},je=function(a,b,c,d,e){var f,h=ie(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=le(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ge,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||gc("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ta(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=he(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ie=function(a){return a?a.replace(":","").toLowerCase():""},le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},me=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||gc("TAGGING",1),c="/"+c);var d=b.hostname.replace(ge,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},ne=function(a){function b(m){var r=m.split("=")[0];return 0>d.indexOf(r)?m:r+"=0"}function c(m){return m.split("&").map(b).filter(function(r){return void 0!=r}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=me(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function oe(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var qe=function(a,b,c,d){return pe(d)?oe(a,String(b||document.cookie),c):[]},te=function(a,b,c,d,e){if(pe(e)){var f=re(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=se(f,function(h){return h.Tb},b);if(1===f.length)return f[0].id;f=se(f,function(h){return h.yb},c);return f[0]?f[0].id:void 0}}};function ue(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=qe(b,f,!1,d).indexOf(c)}
var ye=function(a,b,c){function d(p,t,v){if(null==v)return delete h[t],p;h[t]=v;return p+"; "+t+"="+v}function e(p,t){if(null==t)return delete h[t],p;h[t]=!0;return p+"; "+t}if(!pe(c.Ca))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ve(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Vh);f=d(f,"samesite",
c.$h);c.ai&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var m=we(),r=0;r<m.length;++r){var q="none"!==m[r]?m[r]:void 0,u=d(f,"domain",q);u=e(u,c.flags);if(!xe(q,c.path)&&ue(u,a,b,c.Ca))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return xe(l,c.path)?1:ue(f,a,b,c.Ca)?0:1},ze=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ye(a,b,c)};
function se(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function re(a,b,c){for(var d=[],e=qe(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Tb:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var ve=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ae=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Be=/(^|\.)doubleclick\.net$/i,xe=function(a,b){return Be.test(document.location.hostname)||"/"===b&&Ae.test(a)},we=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Be.test(e)||Ae.test(e)||a.push("none");
return a},pe=function(a){if(!Ac("gtag_cs_api")||!a||!Kc())return!0;if(!Jc(a))return!1;var b=Ic(a);return null==b?!0:!!b};var Ce=function(){for(var a=ic.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},Fe=function(a,b,c,d,e){var f=De(b);return te(a,f,Ee(c),d,e)},Ge=function(a,b,c,d){var e=""+De(c),f=Ee(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},De=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ee=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function He(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ga())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ie=["1"],Je={},Ne=function(a){var b=Ke(a.prefix);Je[b]||Le(b,a.path,a.domain)||(Me(b,Ce(),a),Le(b,a.path,a.domain))};function Me(a,b,c){var d=Ge(b,"1",c.domain,c.path),e=He(c);e.Ca="ad_storage";ze(a,d,e)}function Le(a,b,c){var d=Fe(a,b,c,Ie,"ad_storage");d&&(Je[a]=d);return d}function Ke(a){return(a||"_gcl")+"_au"};var Oe=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Pe(){for(var a=Qe,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Re(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Qe,Se;function Te(a){Qe=Qe||Re();Se=Se||Pe();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,r=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(r=64));b.push(Qe[l],Qe[m],Qe[r],Qe[q])}return b.join("")}
function Ue(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),r=Se[m];if(null!=r)return r;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Qe=Qe||Re();Se=Se||Pe();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ve;var Ze=function(){var a=We,b=Xe,c=Ye(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){qc(H,"mousedown",d);qc(H,"keyup",d);qc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},$e=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ye().decorators.push(f)},af=function(a,b,c){for(var d=Ye().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a,r=!!h.sameHost;if(l&&(r||m!==H.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])||r&&0<=l[q].indexOf(m)){k=!0;break a}k=!1}if(k){var u=h.placement;void 0==u&&(u=h.fragment?2:1);u===b&&Ja(e,h.callback())}}return e},Ye=function(){var a=kc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bf=/(.*?)\*(.*?)\*(.*)/,cf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,df=/^(?:www\.|m\.|amp\.)+/,ef=/([^?#]+)(\?[^#]*)?(#.*)?/;function ff(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var hf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Te(String(d))))}var e=b.join("*");return["1",gf(e),e].join("*")},gf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ve)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ve=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ve[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},kf=function(){return function(a){var b=me(F.location.href),c=b.search.replace("?",""),d=he(c,"_gl",!0)||"";a.query=jf(d)||{};var e=ke(b,"fragment").match(ff("_gl"));a.fragment=jf(e&&e[3]||"")||{}}},lf=function(a){var b=kf(),c=Ye();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ja(d,e.query),a&&Ja(d,e.fragment));return d},jf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=bf.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],r=0;r<b;++r)if(m===gf(k,r)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=Ue(u[p+1]);return q}}}}catch(t){}};
function mf(a,b,c,d){function e(r){var q=r,u=ff(a).exec(q),p=q;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}r=p;var w=r.charAt(r.length-1);r&&"&"!==w&&(r+="&");return r+m}d=void 0===d?!1:d;var f=ef.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function nf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=af(b,1,c),e=af(b,2,c),f=af(b,3,c);if(Ka(d)){var h=hf(d);c?of("_gl",h,a):pf("_gl",h,a,!1)}if(!c&&Ka(e)){var k=hf(e);pf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,r=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){pf(m,r,q,void 0);break a}if("form"===q.tagName.toLowerCase()){of(m,r,q);break a}}"string"==typeof q&&mf(m,r,q,void 0)}}
function pf(a,b,c,d){if(c.href){var e=mf(a,b,c.href,void 0===d?!1:d);Oe.test(e)&&(c.href=e)}}
function of(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=mf(a,b,c.action);Oe.test(m)&&(c.action=m)}}}
var We=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||nf(e,e.hostname)}}catch(h){}},Xe=function(a){try{if(a.action){var b=ke(me(a.action),"host");nf(a,b)}}catch(c){}},qf=function(a,b,c,d){Ze();$e(a,b,"fragment"===c?2:1,!!d,!1)},rf=function(a,b){Ze();$e(a,[je(F.location,"host",!0)],b,!0,!0)},sf=function(){var a=H.location.hostname,b=cf.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(df,""),l=e.replace(df,""),m;if(!(m=k===l)){var r="."+l;m=k.substring(k.length-r.length,k.length)===r}return m},tf=function(a,b){return!1===a?!1:a||b||sf()};var uf=/^\w+$/,vf=/^[\w-]+$/,wf=/^~?[\w-]+$/,xf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},yf=function(){if(!Ac("gtag_cs_api")||!Kc())return!0;var a=Ic("ad_storage");return null==a?!0:!!a},zf=function(a,b){Jc("ad_storage")?yf()?a():Nc(a,"ad_storage"):b?gc("TAGGING",3):Mc(function(){zf(a,!0)},["ad_storage"])},Cf=function(a){var b=[];if(!H.cookie)return b;var c=qe(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Af(c[d]);e&&-1===ta(b,e)&&b.push(e)}return Bf(b)};
function Df(a){return a&&"string"==typeof a&&a.match(uf)?a:"_gcl"}
var Ff=function(){var a=me(F.location.href),b=ke(a,"query",!1,void 0,"gclid"),c=ke(a,"query",!1,void 0,"gclsrc"),d=ke(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||he(e,"gclid",void 0);c=c||he(e,"gclsrc",void 0)}return Ef(b,c,d)},Ef=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(vf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Ac("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Hf=function(a){var b=Ff();zf(function(){return Gf(b,a)})};
function Gf(a,b,c){function d(m,r){var q=If(m,e);q&&(ze(q,r,f),h=!0)}b=b||{};var e=Df(b.prefix);c=c||Ga();var f=He(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.ei?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var Kf=function(a,b){var c=lf(!0);zf(function(){for(var d=Df(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==xf[f]){var h=If(f,d),k=c[h];if(k){var l=Math.min(Jf(k),Ga()),m;b:{for(var r=l,q=qe(h,H.cookie,void 0,"ad_storage"),u=0;u<q.length;++u)if(Jf(q[u])>r){m=!0;break b}m=!1}if(!m){var p=He(b,l,!0);p.Ca="ad_storage";ze(h,k,p)}}}}Gf(Ef(c.gclid,c.gclsrc),b)})},If=function(a,b){var c=xf[a];if(void 0!==c)return b+c},Jf=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Af(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Lf=function(a,b,c,d,e){if(sa(b)){var f=Df(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=If(a[l],f);if(m){var r=qe(m,H.cookie,void 0,"ad_storage");r.length&&(k[m]=r.sort()[r.length-1])}}return k};zf(function(){qf(h,b,c,d)})}},Bf=function(a){return a.filter(function(b){return wf.test(b)})},Mf=function(a,b){for(var c=Df(b.prefix),d={},e=0;e<a.length;e++)xf[a[e]]&&(d[a[e]]=xf[a[e]]);zf(function(){Aa(d,function(f,h){var k=qe(c+h,H.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Jf(l),
r={};r[f]=[Af(l)];Gf(r,b,m)}})})};function Nf(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Of=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Kc()){var c=Ff();if(Nf(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);rf(function(){return d},3);rf(function(){var e={};return e._up="1",e},1)}}},Pf=function(){var a;if(yf()){for(var b=[],c=H.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ud:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].ud]||(h[b[k].ud]=[]),h[b[k].ud].push({timestamp:l[1],Ag:l[2]}))}a=h}else a={};return a};var Qf=/^\d+\.fls\.doubleclick\.net$/;function Rf(a,b){Jc(C.m)?Rc(C.m)?a():Nc(a,C.m):b?D(42):Tc(function(){Rf(a,!0)},[C.m])}function Sf(a){var b=me(F.location.href),c=ke(b,"host",!1);if(c&&c.match(Qf)){var d=ke(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Tf(a,b,c){if("aw"==a||"dc"==a){var d=Sf("gcl"+a);if(d)return d.split(".")}var e=Df(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Rc(C.m)&&c,h;h=Ff()[a]||[];if(0<h.length)return f?["0"]:h}var k=If(a,e);return k?Cf(k):[]}
var Uf=function(a){var b=Sf("gac");if(b)return!Rc(C.m)&&a?"0":decodeURIComponent(b);var c=Pf(),d=[];Aa(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].Ag);h=Bf(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Vf=function(a,b){var c=Ff().dc||[];Rf(function(){Ne(b);var d=Je[Ke(b.prefix)],e=!1;if(d&&0<c.length){var f=K.joined_au=K.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;wc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=Ke(b.prefix),r=Je[m];r&&Me(m,r,b)}})};var Wf=/[A-Z]+/,Xf=/\s/,Yf=function(a){if(g(a)&&(a=Fa(a),!Xf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Wf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},$f=function(a){for(var b={},c=0;c<a.length;++c){var d=Yf(a[c]);d&&(b[d.id]=d)}Zf(b);var e=[];Aa(b,function(f,h){e.push(h)});return e};
function Zf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var ag=function(){var a=!1;return a};var cg=function(a,b,c,d){return(2===bg()||d||"http:"!=F.location.protocol?a:b)+c},bg=function(){var a=nc(),b;if(1===a)a:{var c=qd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var rg=function(a){return Rc(C.m)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=ne(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var sg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),tg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ug={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},vg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var xg=function(a){var b;b||(b=Yd("gtm.whitelist"));b&&D(9);
var c=b&&La(Ea(b),tg),d;d||(d=Yd("gtm.blacklist"));d||(d=Yd("tagTypeBlacklist"))&&D(3);d?D(8):d=[];wg()&&(d=Ea(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=ta(Ea(d),"google")&&D(2);var e=d&&La(Ea(d),ug),f={};return function(h){var k=
h&&h[Hb.Ha];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=vd[k]||[],m=a(k,l);if(b){var r;if(r=m)a:{if(0>ta(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>ta(c,l[q])){D(11);r=!1;break a}}else{r=!1;break a}r=!0}m=r}var u=!1;if(d){var p=0<=ta(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&D(10);u=t}}var v=!m||u;v||!(0<=ta(l,"sandboxedScripts"))||c&&-1!==ta(c,"sandboxedScripts")||(v=ya(e,vg));return f[k]=v}},wg=function(){return sg.test(F.location&&F.location.hostname)};var yg={lg:function(a,b){b[Hb.Ed]&&"string"===typeof a&&(a=1==b[Hb.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Gd)&&null===a&&(a=b[Hb.Gd]);b.hasOwnProperty(Hb.Id)&&void 0===a&&(a=b[Hb.Id]);b.hasOwnProperty(Hb.Hd)&&!0===a&&(a=b[Hb.Hd]);b.hasOwnProperty(Hb.Fd)&&!1===a&&(a=b[Hb.Fd]);return a}};var zg={active:!0,isAllowed:function(){return!0},isWhitelisted:function(){return!0}},Ag=function(a){var b=K.zones;!b&&a&&(b=K.zones=a());return b};var Bg=function(){};var Cg=!1,Dg=0,Eg=[];function Fg(a){if(!Cg){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Cg=!0;for(var e=0;e<Eg.length;e++)I(Eg[e])}Eg.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function Gg(){if(!Cg&&140>Dg){Dg++;try{H.documentElement.doScroll("left"),Fg()}catch(a){F.setTimeout(Gg,50)}}}var Hg=function(a){Cg?a():Eg.push(a)};var Ig={},Jg={},Kg=function(a,b,c,d){if(!Jg[a]||od[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=n(d,e));e.id=c;e.status="timeout";return Jg[a].tags.push(e)-1},Lg=function(a,b,c,d){if(Jg[a]){var e=Jg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Mg(a){for(var b=Ig[a]||[],c=0;c<b.length;c++)b[c]();Ig[a]={push:function(d){d(md.s,Jg[a])}}}
var Pg=function(a,b,c){Jg[a]={tags:[]};qa(b)&&Ng(a,b);c&&F.setTimeout(function(){return Mg(a)},Number(c));return Og(a)},Ng=function(a,b){Ig[a]=Ig[a]||[];Ig[a].push(Ia(function(){return I(function(){b(md.s,Jg[a])})}))};function Og(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Mg(a)})},Zf:function(){d=!0;b>=c&&Mg(a)}}};var Qg=function(){function a(d){return!ra(d)||0>d?0:d}if(!K._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=ra(Zd.get("gtm.start"))?Zd.get("gtm.start"):0;K._li={cst:a(c-b),cbt:a(sd-b)}}};var Ug={},Vg=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Wg=!1;
var Xg=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||D(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Qg();return F[b]},Yg=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Vg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var $g=function(a){},Zg=function(){return F.GoogleAnalyticsObject||"ga"};
var ah=function(a,b){return function(){var c=Vg(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};function fh(a,b,c,d){var e=vb[a],f=gh(a,b,c,d);if(!f)return null;var h=Cb(e[Hb.Vd],c,[]);if(h&&h.length){var k=h[0];f=fh(k.index,{D:f,C:1===k.te?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gh(a,b,c,d){function e(){if(f[Hb.tf])k();else{var w=Eb(f,c,[]),y=Kg(c.id,String(f[Hb.Ha]),Number(f[Hb.Xd]),w[Hb.uf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ga()-B;Rd(c.id,vb[a],"5");Lg(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ga()-B;Rd(c.id,vb[a],"6");Lg(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Rd(c.id,f,"1");var A=function(){var z=Ga()-B;Rd(c.id,f,"7");Lg(c.id,y,"exception",z);x||(x=!0,k())};var B=Ga();try{Bb(w,c)}catch(z){A(z)}}}var f=vb[a],h=b.D,k=b.C,l=b.terminate;if(c.$c(f))return null;var m=Cb(f[Hb.Yd],c,[]);if(m&&m.length){var r=m[0],q=fh(r.index,{D:h,C:k,terminate:l},c,d);if(!q)return null;h=q;k=2===r.te?l:q}if(f[Hb.Nd]||f[Hb.yf]){var u=f[Hb.Nd]?wb:c.sh,p=h,t=k;if(!u[a]){e=Ia(e);var v=hh(a,u,e);h=v.D;k=v.C}return function(){u[a](p,t)}}return e}
function hh(a,b,c){var d=[],e=[];b[a]=ih(d,e,c);return{D:function(){b[a]=jh;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=kh;for(var f=0;f<e.length;f++)e[f]()}}}function ih(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function jh(a){a()}function kh(a,b){b()};var nh=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.xb[d]){var e=vb[d];var f=b.add();try{var h=fh(d,{D:f,C:f,terminate:f},a,d);h?c.push({Ye:d,Qe:Fb(e),wg:h}):(lh(d,a),f())}catch(l){f()}}b.Zf();c.sort(mh);for(var k=0;k<c.length;k++)c[k].wg();return 0<c.length};function mh(a,b){var c,d=b.Qe,e=a.Qe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ye,k=b.Ye;f=h>k?1:h<k?-1:0}return f}
function lh(a,b){if(!Od)return;var c=function(d){var e=b.$c(vb[d])?"3":"4",f=Cb(vb[d][Hb.Vd],b,[]);f&&f.length&&c(f[0].index);Rd(b.id,vb[d],e);var h=Cb(vb[d][Hb.Yd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var oh=!1,ph=function(a,b,c,d,e){if("gtm.js"==b){if(oh)return!1;oh=!0}Qd(a,b);var f=Pg(a,d,e);be(a,"event",1);be(a,"ecommerce",1);be(a,"gtm");var h={id:a,name:b,$c:xg(c),xb:[],sh:[],He:function(){D(6)}};h.xb=Lb(h);
var k=nh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||$g(md.s);if(!k)return k;for(var l=0;l<h.xb.length;l++)if(h.xb[l]){var m=vb[l];if(m&&!od[String(m[Hb.Ha])])return!0}return!1};function qh(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return me(""+c+b).href}}function rh(a,b){return sh()?qh(a,b):void 0}
function sh(){var a=!1;return a};var th=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},uh=function(a){var b=new th;b.eventModel=a;return b},vh=function(a,b){a.targetConfig=b;return a},wh=function(a,b){a.containerConfig=b;return a},xh=function(a,b){a.h=b;return a},yh=function(a,b){a.globalConfig=b;return a},zh=function(a,b){a.D=b;return a},Ah=function(a,b){a.C=b;return a};
th.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Bh=function(a){function b(e){Aa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Aa(c,function(e){d.push(e)});return d};var Ch;if(3===md.Ob.length)Ch="g";else{var Dh="G";Ch=Dh}
var Eh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ch,OPT:"o"},Fh=function(a){var b=md.s.split("-"),c=b[0].toUpperCase(),d=Eh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===md.Ob.length){var h="w";f="2"+h}else f="";return f+d+md.Ob+e};function Gh(){var a=!1;a=Kc();return a}
function Hh(a,b,c){function d(q){var u;K.reported_gclid||(K.reported_gclid={});u=K.reported_gclid;var p=f+(q?"gcu":"gcs");if(!u[p]){u[p]=!0;var t=[],v=function(B,z){z&&t.push(B+"="+encodeURIComponent(z))},w="https://www.google.com";if(Kc()){var y=Rc(C.m);v("gcs",Sc());q&&v("gcu","1");v("rnd",r);if((!f||h&&"aw.ds"!==h)&&Rc(C.m)){var x=Cf("_gcl_aw");v("gclaw",x.join("."))}v("url",String(F.location).split(/[?#]/)[0]);v("dclid",Ih(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}
"1"===lf(!1)._up&&v("gtm_up","1");v("gclid",Ih(b,f));v("gclsrc",h);v("gtm",Fh(!c));var A=w+"/pagead/landing?"+t.join("&");wc(A)}}var e=Ff(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=Gh();if(l||m){var r=""+Ce();m?Tc(function(){d();Rc(C.m)||Nc(function(){return d(!0)},C.m)},[C.m]):d()}}function Ih(a,b){var c=a&&!Rc(C.m);if(b&&c)return"0";return b}var Jh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Kh=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var Lh;a:{var Mh=ka.navigator;if(Mh){var Nh=Mh.userAgent;if(Nh){Lh=Nh;break a}}Lh=""}var Oh=function(a){return-1!=Lh.indexOf(a)};var Ph=function(){return Oh("iPhone")&&!Oh("iPod")&&!Oh("iPad")};Oh("Opera");Oh("Trident")||Oh("MSIE");Oh("Edge");!Oh("Gecko")||-1!=Lh.toLowerCase().indexOf("webkit")&&!Oh("Edge")||Oh("Trident")||Oh("MSIE")||Oh("Edge");-1!=Lh.toLowerCase().indexOf("webkit")&&!Oh("Edge")&&Oh("Mobile");Oh("Macintosh");Oh("Windows");Oh("Linux")||Oh("CrOS");var Qh=ka.navigator||null;Qh&&(Qh.appVersion||"").indexOf("X11");Oh("Android");Ph();Oh("iPad");Oh("iPod");Ph()||Oh("iPad")||Oh("iPod");Lh.toLowerCase().indexOf("kaios");var Rh=function(){};var Sh=function(a,b){this.i=a;this.h=null;this.F={};this.ja=0;this.na=void 0===b?500:b;this.o=null};ja(Sh,Rh);
var Uh=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable"})},a.na);Th(a,"addEventListener",function(d){if(d&&(!1===d.gdprApplies||"error"===d.cmpStatus||"loaded"===d.cmpStatus&&("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus))){if(void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent||!d.cmpStatus||
"error"===d.cmpStatus)d.tcString="tcunavailable";Th(a,"removeEventListener",null,d.listenerId);c&&(clearTimeout(c),c=0,b(d))}})},Th=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Vh(a)){Wh(a);var f=++a.ja;a.F[f]=c;if(a.h){var h={};a.h.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Vh=function(a){if(a.h)return a.h;var b;a:{for(var c=a.i,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(k){e=
!1}if(e){b=c;break a}var f;b:{try{var h=c.parent;if(h&&h!=c){f=h;break b}}catch(k){}f=null}if(!(c=f))break}b=null}a.h=b;return a.h},Wh=function(a){a.o||(a.o=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(e){}},Kh(a.i,a.o))};function Xh(){var a=K.tcf||{};return K.tcf=a}var Yh=function(){var a=Xh();if(!a.active){a.active=!0;var b=new Sh(F),c;"function"===typeof F.__tcfapi?c="s":("function"===typeof b.i.__tcfapi||null!=Vh(b))&&(c="i");a.Ge=Ga();try{var d=!1;Uh(b,function(){d=!0;a.dd=Ga()});d&&(a.dd=a.Ge)}catch(e){c="e"}a.type=c}},Zh=function(){var a=Xh();if(a.active&&void 0!==a.dd)return Number(a.dd-a.Ge)};function cj(){var a=K;return a.gcq=a.gcq||new dj}
var ej=function(a,b,c){cj().register(a,b,c)},fj=function(a,b,c,d){cj().push("event",[b,a],c,d)},gj=function(a,b){cj().push("config",[a],b)},hj={},ij=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},jj=function(a,b,c,d,e){this.type=a;this.o=b;this.ba=c||"";this.h=d;this.i=e},dj=function(){this.o={};this.i={};this.h=[]},kj=function(a,b){var c=Yf(b);return a.o[c.containerId]=a.o[c.containerId]||new ij},lj=function(a,b,c){if(b){var d=Yf(b);if(d&&1===
kj(a,b).status){kj(a,b).status=2;var e={};Od&&(e.timeoutId=F.setTimeout(function(){D(38);Ad()},3E3));a.push("require",[e],d.containerId);hj[d.containerId]=Ga();if(ag()){
}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=rh(c,h)||k;mc(l)}}}},mj=function(a,b,c,d){if(d.ba){var e=kj(a,d.ba),f=e.o;if(f){var h=n(c),k=n(e.targetConfig[d.ba]),l=n(e.containerConfig),m=n(e.i),r=n(a.i),q=Yd("gtm.uniqueEventId"),u=Yf(d.ba).prefix,p=Ah(zh(yh(xh(wh(vh(uh(h),k),l),m),r),function(){
Sd(q,u,"2");}),function(){Sd(q,u,"3");});try{Sd(q,u,"1");f(d.ba,b,d.o,p)}catch(t){Sd(q,u,"4");}}}};
dj.prototype.register=function(a,b,c){if(3!==kj(this,a).status){kj(this,a).o=b;kj(this,a).status=3;c&&(kj(this,a).i=c);var d=Yf(a),e=hj[d.containerId];if(void 0!==e){var f=K[d.containerId].bootstrap,h=d.prefix.toUpperCase();K[d.containerId]._spx&&(h=h.toLowerCase());var k=Yd("gtm.uniqueEventId"),l=h,m=Ga()-f;if(Od&&!Fd[k]){k!==Bd&&(zd(),Bd=k);var r=l+"."+Math.floor(f-e)+"."+Math.floor(m);Kd=Kd?Kd+","+r:"&cl="+r}delete hj[d.containerId]}this.flush()}};
dj.prototype.push=function(a,b,c,d){var e=Math.floor(Ga()/1E3);lj(this,c,b[0][C.xa]||this.i[C.xa]);this.h.push(new jj(a,e,c,b,d));d||this.flush()};
dj.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==kj(this,c.ba).status&&!a)return;Od&&F.clearTimeout(c.h[0].timeoutId);break;case "set":Aa(c.h[0],function(l,m){n(Ma(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[C.jc];delete d[C.jc];var f=kj(this,c.ba),h=Yf(c.ba),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.h&&e||mj(this,C.V,d,c);f.h=!0;delete d[C.ab];k?n(d,f.containerConfig):
n(d,f.targetConfig[c.ba]);break;case "event":mj(this,c.h[1],c.h[0],c)}this.h.shift()}};var nj="HA GF GP G UA AW DC".split(" "),oj=!1,pj={},qj=!1;function rj(a,b){var c={event:a};b&&(c.eventModel=n(b),b[C.Ac]&&(c.eventCallback=b[C.Ac]),b[C.Jb]&&(c.eventTimeout=b[C.Jb]));return c}var tj=function(){return oj};
var vj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&
void 0!=a[2])return;c=a[2]}var d=rj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return qj=!0,tj(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=n(a[1]):3==a.length&&g(a[1])&&(b={},Ra(a[2])||sa(a[2])?b[a[1]]=n(a[2]):b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}};vj.consent=function(a){if(3===a.length){var b=function(){tj()&&n(a[2],{subcommand:a[1]})};D(39);var c=a[1];if("default"===c){b();Pc(a[2]);return}if("update"===c){b();Qc(a[2]);return}}};var wj={policy:!0};var xj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},zj=function(a){var b=yj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Aj=!1,Bj=[];function Cj(){if(!Aj){Aj=!0;for(var a=0;a<Bj.length;a++)I(Bj[a])}}var Dj=function(a){Aj?I(a):Bj.push(a)};var Vj=function(a){if(Uj(a))return a;this.h=a};Vj.prototype.Eg=function(){return this.h};var Uj=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};Vj.prototype.getUntrustedUpdateValue=Vj.prototype.Eg;var Wj=[],Xj=!1,Yj=function(a){return F["dataLayer"].push(a)},Zj=function(a){var b=K["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function ak(a){var b=a._clear;Aa(a,function(f,h){"_clear"!==f&&(b&&ae(f,void 0),ae(f,h))});rd||(rd=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=wd(),a["gtm.uniqueEventId"]=d,ae("gtm.uniqueEventId",d));var e=bk(a);switch(c){case "gtm.init":D(19),e&&D(20)}return e}
function bk(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=K.zones;d=e?e.checkState(md.s,c):zg;return d.active?ph(c,b,d.isAllowed||d.isWhitelist,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function ck(){for(var a=!1;!Xj&&0<Wj.length;){Xj=!0;delete Vd.eventModel;Xd();var b=Wj.shift();if(null!=b){var c=Uj(b);if(c){var d=b;b=Uj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Yd(h,1);if(sa(k)||Ra(k))k=n(k);Wd[h]=k}}try{if(qa(b))try{b.call(Zd)}catch(w){}else if(sa(b)){var l=
b;if(g(l[0])){var m=l[0].split("."),r=m.pop(),q=l.slice(1),u=Yd(m.join("."),2);if(void 0!==u&&null!==u)try{u[r].apply(u,q)}catch(w){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{var t=b;if(t.length&&g(t[0])){var v=vj[t[0]];if(v&&(!c||!wj[t[0]])){b=v(t);break a}}b=void 0}if(!b){Xj=!1;continue}}a=ak(b)||a}}finally{c&&Xd(!0)}}Xj=!1}
return!a}function dk(){var a=ck();try{xj(F["dataLayer"],md.s)}catch(b){}return a}
var fk=function(){var a=kc("dataLayer",[]),b=kc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Hg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Dj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<K.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Vj(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Wj.push.apply(Wj,e);if(300<
this.length)for(D(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return ck()&&k};var d=a.slice(0);Wj.push.apply(Wj,d);ek()&&I(dk)},ek=function(){var a=!0;return a};var gk={};gk.Kb=new String("undefined");
var hk=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gk.Kb?b:a[d]);return c.join("")}};hk.prototype.toString=function(){return this.h("undefined")};hk.prototype.valueOf=hk.prototype.toString;gk.Hf=hk;gk.Lc={};gk.og=function(a){return new hk(a)};var ik={};gk.lh=function(a,b){var c=wd();ik[c]=[a,b];return c};gk.oe=function(a){var b=a?0:1;return function(c){var d=ik[c];if(d&&"function"===typeof d[b])d[b]();ik[c]=void 0}};gk.Mg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};gk.dh=function(a){if(a===gk.Kb)return a;var b=wd();gk.Lc[b]=a;return'google_tag_manager["'+md.s+'"].macro('+b+")"};gk.Wg=function(a,b,c){a instanceof gk.Hf&&(a=a.h(gk.lh(b,c)),b=pa);return{Yc:a,D:b}};var jk=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||sc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},kk=function(a){K.hasOwnProperty("autoEventsSettings")||(K.autoEventsSettings={});var b=K.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},lk=function(a,b,c){kk(a)[b]=c},mk=function(a,b,c,d){var e=kk(a),f=Ha(e,b,d);e[b]=c(f)},nk=function(a,b,c){var d=kk(a);return Ha(d,b,c)};var ok=["input","select","textarea"],pk=["button","hidden","image","reset","submit"],qk=function(a){var b=a.tagName.toLowerCase();return!ua(ok,function(c){return c===b})||"input"===b&&ua(pk,function(c){return c===a.type.toLowerCase()})?!1:!0},rk=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):vc(a,["form"],100)},sk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(qk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var tk=!!F.MutationObserver,uk=void 0,vk=function(a){if(!uk){var b=function(){var c=H.body;if(c)if(tk)(new MutationObserver(function(){for(var e=0;e<uk.length;e++)I(uk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;qc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<uk.length;e++)I(uk[e])}))})}};uk=[];H.body?b():I(b)}uk.push(a)};var Qk=F.clearTimeout,Rk=F.setTimeout,R=function(a,b,c){if(ag()){b&&I(b)}else return mc(a,b,c)},Sk=function(){return F.location.href},Tk=function(a){return ke(me(a),"fragment")},Uk=function(a){return le(me(a))},Vk=function(a,b){return Yd(a,b||2)},Wk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Yj(a)):d=Yj(a);return d},Xk=function(a,b){F[a]=b},U=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},Yk=function(a,b,c){return qe(a,b,void 0===c?!0:!!c)},Zk=function(a,b){if(ag()){b&&I(b)}else oc(a,b)},$k=function(a){return!!nk(a,"init",!1)},al=function(a){lk(a,"init",!0)},bl=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":qd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(cg("https://","http://",c))},cl=function(a,b){var c=a[b];return c};
var dl=gk.Wg;function Al(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Bl=new wa;function Cl(a,b){function c(h){var k=me(h),l=ke(k,"protocol"),m=ke(k,"host",!0),r=ke(k,"port"),q=ke(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==r||"https"==l&&"443"==r)l="web",r="default";return[l,m,r,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Dl(a){return El(a)?1:0}
function El(a){var b=a.arg0,c=a.arg1;if(a.any_of&&sa(c)){for(var d=0;d<c.length;d++)if(Dl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(u){}}e=!1}return e;case "_ew":return Al(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=ta(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var r=String(c)+m,q=Bl.get(r);q||(q=new RegExp(c,m),Bl.set(r,q));l=q.test(b)}catch(u){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Cl(b,c)}return!1};var Fl={},Gl=encodeURI,Y=encodeURIComponent,Hl=pc;var Il=function(a,b){if(!a)return!1;var c=ke(me(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Jl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Fl.Ng=function(){var a=!1;return a};function bn(){return F.gaGlobal=F.gaGlobal||{}}var cn=function(){var a=bn();a.hid=a.hid||va();return a.hid};var mn=window,nn=document,on=function(a){var b=mn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mn["ga-disable-"+a])return!0;try{var c=mn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=oe("AMP_TOKEN",String(nn.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nn.getElementById("__gaOptOutExtension")?!0:!1};function rn(a,b){delete b.eventModel[C.ab];if(a!==C.V){var c=b.getWithConfig(C.bc);if(sa(c)){D(26);for(var d={},e=0;e<c.length;e++){var f=c[e],h=b.getWithConfig(f);void 0!==h&&(d[f]=h)}b.eventModel=d}}tn(b.eventModel)}var tn=function(a){Aa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.la]||{};Aa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var wn=function(a,b,c){fj(b,c,a)},xn=function(a,b,c){fj(b,c,a,!0)},zn=function(a,b){};
function yn(a,b){}var Z={a:{}};

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=U("google_trackConversion");if(qa(f)){var h={};"DATA_LAYER"==a.vtp_customParamsFormat?h=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(h=Jl(a.vtp_customParams,
"key","value"));var k={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(h.event=a.vtp_eventName),a.vtp_eventValue&&(k.value=a.vtp_eventValue),a.vtp_eventItems&&(k.items=a.vtp_eventItems));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:h,google_gtag_event_data:k,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Fh()};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);
f(l)||c()}else c()},e=function(){R(b,d,c)};if(Kc()){Tc(function(){Rc(C.m)?e():Nc(e,C.m)},[C.m]);return}Qg();e()})}();
Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ce(a.vtp_gtmEventId,"event"))})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=jk(c,"gtm.click");Wk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!$k("cl")){var c=U("document");qc(c,"click",a,!0);al("cl")}I(b.vtp_gtmOnSuccess)})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Vk("gtm.url",1);c=c||Sk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Uk(String(c));var e=me(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?sa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var r=0;r<m.length;r++){var q=ke(e,"QUERY",void 0,void 0,m[r]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ke(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Vk(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(e){Tc(function(){d(e)},[C.I,C.m])},d=function(e){var f={},h={},k={},l={},m={};if(e.vtp_gaSettings){var r=e.vtp_gaSettings;n(Jl(r.vtp_fieldsToSet,"fieldName","value"),h);n(Jl(r.vtp_contentGroup,"index","group"),k);n(Jl(r.vtp_dimension,"index","dimension"),l);n(Jl(r.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;r.vtp_fieldsToSet=void 0;r.vtp_contentGroup=void 0;r.vtp_dimension=void 0;r.vtp_metric=void 0;var q=n(r);e=n(e,q)}n(Jl(e.vtp_fieldsToSet,
"fieldName","value"),h);n(Jl(e.vtp_contentGroup,"index","group"),k);n(Jl(e.vtp_dimension,"index","dimension"),l);n(Jl(e.vtp_metric,"index","metric"),m);Rc(C.I)||(h.storage="none"),Rc(C.m)||(h.allowAdFeatures=!1,h.storeGac=!1);var u=Xg(e.vtp_functionName);if(qa(u)){var p="",t="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(t=e.vtp_trackerName,p=t+"."):(t="gtm"+wd(),
p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(N){var P=[].slice.call(arguments,0);P[0]=p+P[0];u.apply(window,P)},x=function(N,P){return void 0===P?P:N(P)},A=function(N,P){if(P)for(var Ba in P)P.hasOwnProperty(Ba)&&y("set",N+Ba,P[Ba])},B=function(){},
z=function(N,P,Ba){var db=0;if(N)for(var za in N)if(N.hasOwnProperty(za)&&(Ba&&v[za]||!Ba&&void 0===v[za])){var Va=w[za]?Da(N[za]):N[za];"anonymizeIp"!=za||Va||(Va=void 0);P[za]=Va;db++}return db},E={name:t};e.vtp_transportUrl&&(h._x_19=e.vtp_transportUrl);z(h,E,!0);u("create",
e.vtp_trackingId||f.trackingId,E);y("set","&gtm",Fh(!0));Kc()&&y("set","&gcs",Sc());h._x_19&&(null==jc&&delete h._x_19,h._x_20&&!b[t]&&(b[t]=!0,u(ah(t,h._x_20))));e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(N,P){void 0!==e[P]&&y("set",N,e[P])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var G={};z(h,G,!1)&&y("set",G);var L;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var N=h&&h.hitCallback;qa(N)&&N();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&
(y("require","ec","ec.js"),B());var Q={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Ca,e.vtp_eventValue||f.value)};z(L,Q,!1);y("send",Q);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var xa="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");y("require","adfeatures",{cookieName:xa})}L?y("send","pageview",L):y("send","pageview");}if(!a){var na=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(na="internal/"+na);a=!0;var cb=rh(h._x_19,"/analytics.js"),
la=cg("https:","http:","//www.google-analytics.com/"+na,h&&h.forceSSL);R("analytics.js"===na&&cb?cb:la,function(){var N=Vg();N&&N.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else I(e.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();





Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var h=null;b.vtp_enableCookieUpdateFeature&&(h=!0,void 0!==b.vtp_cookieUpdate&&(h=!!b.vtp_cookieUpdate));var k={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||sf())&&Kf(a,k));Hf(k);Mf(["aw","dc"],k);Vf(h,k);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Lf(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var r=Vk(C.M);Hh(!1,void 0!=r&&!1!==r);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&Of()})}();

Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=n(a),c=b;c[Hb.Ha]=null;c[Hb.lf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){function l(v){var w=!0;w&&b.push(m)}Qg();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Fh()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=Vk(C.M)&&!1!==Vk(C.M)&&(m.google_gtm_url_processor=
function(v){return v=rg(v)});var r=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Vk(x):k[y];A&&(m[w]=A)}},q=r("JSON");q("google_conversion_currency","vtp_currencyCode");q("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(q=r(k.vtp_productReportingDataSource),q("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),q("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),q("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),
q("google_basket_discount","vtp_discount","discount"),q("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var u=function(v,w){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=w},p=function(v){return function(w,y,x,A){var B="DATA_LAYER"==v?Vk(x):k[y];A(B)&&u(w,B)}};
k.vtp_transportUrl&&(m.google_transport_url=k.vtp_transportUrl);var t=rh(k.vtp_transportUrl,"/pagead/conversion_async.js");t||(t=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(q=p(k.vtp_newCustomerReportingDataSource),q("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),q("vdltv",
"vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=!1):m.google_read_gcl_cookie_opt_out=!0;"1"===lf(!1)._up&&u("gtm_up","1");(function(){var v=!1;v=!0;v&&Kc()?Tc(function(){var w=
Rc(C.m),y=!w&&void 0!=Vk(C.M)&&!1!==Vk(C.M);!k.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",Sc());l(w);w||Nc(function(){m=n(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;u("gcs",Sc());u("gcu","1");l(!0)},C.m)},[C.m]):l(!0)})();a||(a=!0,R(t,f(),e(t)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=
0}();
Z.a.fsl=[],function(){function a(){var e=U("document"),f=c(),h=HTMLFormElement.prototype.submit;qc(e,"click",function(k){var l=k.target;if(l&&(l=vc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&sc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=H.getElementById(l.form):m=vc(l,["form"],100);m&&f.store(m,l)}},!1);qc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,r=b(l)&&!m,q=f.get(l),u=!0;if(d(l,function(){if(u){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,r,q))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return ua(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=nk("fsl",h?"nv.mwt":"mwt",0),r;r=h?nk("fsl","nv.ids",[]):nk("fsl","ids",[]);if(!r.length)return!0;var q=jk(e,"gtm.formSubmit",r),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);q["gtm.elementUrl"]=u;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!Wk(q,Zj(f),m))return!1}else Wk(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(k,q)};mk("fsl","mwt",m,0);h||mk("fsl","nv.mwt",m,0)}var r=function(q){q.push(l);return q};mk("fsl","ids",r,[]);h||mk("fsl","nv.ids",r,[]);$k("fsl")||(a(),al("fsl"));I(e.vtp_gtmOnSuccess)})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();









var An={};An.macro=function(a){if(gk.Lc.hasOwnProperty(a))return gk.Lc[a]},An.onHtmlSuccess=gk.oe(!0),An.onHtmlFailure=gk.oe(!1);An.dataLayer=Zd;An.callback=function(a){ud.hasOwnProperty(a)&&qa(ud[a])&&ud[a]();delete ud[a]};function Bn(){K[md.s]=An;Ja(vd,Z.a);zb=zb||gk;Ab=yg}
function Cn(){zc.gtm_3pds=!0;zc.gtag_cs_api=!0;K=F.google_tag_manager=F.google_tag_manager||{};if(K[md.s]){var a=K.zones;a&&a.unregisterChild(md.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)sb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)ub.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var r=l[m],q={},u=0;u<r.length;u++)q[r[u][0]]=Array.prototype.slice.call(r[u],1);tb.push(q)}xb=Z;yb=Dl;Bn();fk();Cg=!1;Dg=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Fg();
else{qc(H,"DOMContentLoaded",Fg);qc(H,"readystatechange",Fg);if(H.createEventObject&&H.documentElement.doScroll){var p=!0;try{p=!F.frameElement}catch(y){}p&&Gg()}qc(F,"load",Fg)}Aj=!1;"complete"===H.readyState?Cj():qc(F,"load",Cj);a:{if(!Od)break a;F.setInterval(Pd,
864E5);}sd=(new Date).getTime();}}
(function(a){a()})(Cn);

})()
