(function(b,h,a,e,o,u,t){if(h.__no_sec_entry){return}var r=e.userAgent;var i=t("%58%75%65%58%69");var n=i.toLowerCase();if(r.indexOf(i)>=0||o.host.indexOf(n)>=0||top!==self&&h.referrer.indexOf(n)>=0){return}var m=h.getElementsByTagName("head")[0];function g(a){var e=h.createElement("script");e.src=a;return m.appendChild(e)}var c="//g.alicdn.com";var l=self.goldlog;if(l&&l.getCdnPath){c=l.getCdnPath()}c+="/secdev/";var s=r.match(/Chrome\/(\d*)/);if(s){s=+s[1]}if(!h._sufei_data2){var f="3.9.0";var d=g(c+"sufei_data/"+f+"/index.js");d.async=h.cookie.indexOf("isg=")<0;d.id="aplus-sufei"}var v=.001;if(a()<v){h._linkstat_sample=v;g(c+"linkstat/index.js?v=1201")}b.nsrprtrt=1e-4;var p=0;var _=["taobao.com","alibaba.com","alipay.com","tmall.com","lazada","aliexpress.com","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz.lk","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode.cn","mp.dfkhgj.com","mp.bcvbw.com","m.dfkhgj.com","pailitao.com"];for(var y=0;y<_.length;y++){if(~o.host.indexOf(_[y])){p=1;if(/Mobile/.test(r)){p=a()<.1}break}}if(p){var x=["1.0.76","e",86];var j=["1.0.78","e",88];var k=1e4;var M=x;if((a()*1e4|0)<k){M=j}if(!M){return}var C=c;if(/buyertrade\.taobao\.com$/.test(o.hostname)||o.hostname=="sycm.taobao.com"&&o.pathname=="/mc/mq/search_analyze"||/refund2\.taobao\.com$|refund2\.tmall\.com$/.test(o.hostname)&&o.pathname==="/dispute/apply.htm"){C=C.replace("/secdev/","??xlly/spl/index.js,secdev/")}var w=C+"nsv/"+M[0]+"/";var E=w+"ns_"+M[1]+"_"+M[2]+"_3_f.js";var S=w+"ns_"+M[1]+"_"+M[2]+"_3_n.js";function I(){var a="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";if("WebkitAppearance"in h.documentElement.style){if(escape(e.javaEnabled.toString())===a){return true}}return false}var L=r.match(/Edge\/([\d]*)/);var A=r.match(/Safari\/([\d]*)/);var O=r.match(/Firefox\/([\d]*)/);var B=r.match(/MSIE|Trident/);if(L){g(E)}else if(s){g(E)}else if(A||O||B){g(S)}else{if(I()){g(E)}else{g(S)}}}function D(){var a=b.atob;if(!a){return}function o(a,e){var o=[];for(var t in a){o.push(t+"="+u(a[t]))}(new Image).src=e+o.join("&")}var e=0;var t="";function r(){if(++e==3){clearInterval(s)}m()}var i;var n=Math.random()*1e8|0;function m(){var a=i.getUA({MaxMTLog:500,MTInterval:7});a=n+"|"+a;var e={token:a,cna:t,ext:7};o(e,"https://fourier.taobao.com/ts?")}var c=+localStorage._xlly;if(!c&&/xlly=/.test(h.cookie)){c=+new Date;localStorage._xlly=c}if(c){var l=new Date-c;if(l>1e3*3600*24){l=0;delete localStorage._xlly}if(l<1e3*60*20){var s=setInterval(r,1e3*60);if(b.addEventListener){b.addEventListener("unload",m)}var f=h.cookie.match(/cna=([^;]+)/);if(f){t=f[1]}var d=g(a("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));var v=unescape("%75%61%62");d.onload=function(){b.AWSC&&AWSC.use(v,function(a,e){if(a==="loaded"){i=e}})}}}}try{D()}catch(a){}try{b.etrprtrt=.01;var T=0;var W=["login.taobao.com/member/login.jhtml","passport.alibaba.com/mini_login.htm","login.taobao.com/member/loginByIm.do","login.taobao.com/member/login_by_safe.htm","login.taobao.com/member/vst.htm","login.taobao.com/member/facebookLogin.do","buy.taobao.com/auction/buy_now.jhtml","buy.taobao.com/auction/order/confirm_order.html","buy.tmall.com/order/confirm_order.html","buyertrade.taobao.com/trade/itemlist/list_bought_items.htm","member1.taobao.com/member/fresh/account_security.htm","member1.taobao.com/member/fresh/account_management.htm","member1.taobao.com/member/fresh/weibo_bind_management.htm","member1.taobao.com/member/fresh/deliver_address.htm","liveplatform.taobao.com/live/home/live-Analysis","databot.taobao.com/tb/tblive","databot.taobao.com/tb/tblive-m"];var z=[];var F=o.host+o.pathname;if(~W.join().indexOf(F)){T=1}else if(~z.join().indexOf(F)){var N=0;if(Math.random()<N){T=1}}if(T){var R="1.61.1";var U="1.62.1";var $=1;var H=R;if(Math.random()<$){H=U}if(!H){return}var P="//g.alicdn.com/AWSC/et/"+H+"/";var Q=P+"et_f.js";var V=P+"et_n.js";if(L){g(Q)}else if(s){g(Q)}else if(A||O||B){g(V)}else{if(I()){g(Q)}else{g(V)}}}}catch(a){}})(window,document,Math.random,navigator,location,encodeURIComponent,decodeURIComponent);