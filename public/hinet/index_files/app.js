(window.ssp = function() {
    window.hinetworkpop = window.hinetworkpop || false;
    var noAd;
    var adbertConfig = {
        adTag: "adbert,hinetwork",
        apiUrl: '//ssp.hinet.net/api/web/request',
        timestamp: new Date().getTime(),
        site:window.location.href,
		guid:'7aafaeca-1ef7-93f8-f368-80faa773db65',
		thirddocument:'["2017003:201702000008","2017004:201702000042","2017004:201702000010","2017004:201702000071","2017005:201702000055","2017005:201702000022","2017005:201702000059","2017005:201911000004","2017037:201703000010","2017059:201802000001","2017059:202005000001","2019014:202003000024","2019014:202003000025","2020003:201711000001","2020003:202003000006"]',
    };


    function getQuery(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
    }

    if (getQuery('sspreview') == 'true') {
        window.sspreview = true
        adbertConfig.apiUrl = adbertConfig.apiUrl.replace("web/", "review/");
    }else{
        window.sspreview = false
    }

    var getADTag = function(){
        var tags = document.querySelectorAll(adbertConfig.adTag)
        Array.prototype.forEach.call(tags, function(el, i){
			var adbert = ADTag(el,false);
            if (el.getAttribute("rendering") != 'script' && el.getAttribute("status") != 'ready') {
				prepareFrame(el, i);
            }
        });
    }

    function third_Documents(adbert) {
        var tags = document.querySelectorAll(adbertConfig.adTag)
		var thirddocument = adbertConfig.thirddocument;
        if (!adbert) {
            var adbert = ADTag(tags.item(0),true);
        }
        var channel = adbert.c;
		var slot = adbert.s;
        var arr = slot.split('/');
		var openTrue = 0 ;
        if (arr.length > 1) {
            Array.prototype.forEach.call(arr, function(el, i){
				var queryThirddocument = channel + ':' + el;
                if (thirddocument.indexOf(queryThirddocument) != '-1') {
                    openTrue = 1;
                }
			});
			if (openTrue) {
				return true;
			}
        } else {
            var queryThirddocument = channel + ':' + slot;
            if (thirddocument.indexOf(queryThirddocument) != '-1') {
                return true;
            }
        }
        return false;
    }


    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    function toParameter(obj){
        var str = "";
        for (var key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
    }

	function setCookie(name,value,hour) {
        var expires = "";
        if (hour) {
            var date = new Date();
            date.setTime(date.getTime() + (hour*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function delCookie(name) {
        setCookie(name,"",-1);
    }

    var adid = getCookie('adid')

    if(!adid){
        adid = adbertConfig.guid
        setCookie('adid',adid,365*2*24)
    }

    var ADTag = function(a,isJson) {
        attr = {};
        attr.c = a.getAttribute("channel");
        attr.s = a.getAttribute("slot");
        attr.u = adbertConfig.guid;
        attr.ad = adid;
        attr.t = adbertConfig.timestamp;
        attr.oi = makeid();
        if (a.hasAttribute("link")) {
            attr.r = 'l';
        }
        if (a.hasAttribute("category")) {
            attr.ca = a.getAttribute("category");
        }
        if (a.hasAttribute("keyword")) {
            attr.k = a.getAttribute("keyword");
        }
        if (a.hasAttribute("category-black")) {
            attr.cab = a.getAttribute("category-black");
        }
        if (a.hasAttribute("keyword-black")) {
            attr.kb = a.getAttribute("keyword-black");
        }
        if (window.sspreview) {
            attr.rm = getQuery('mat');
            attr.re = getQuery('ent');
        }
        attr.site = adbertConfig.site;
		attr.requeryurl = adbertConfig.apiUrl+'?'+toParameter(attr);
		if (isJson) {
            attr.url = adbertConfig.apiUrl+'/json?'+toParameter(attr);
        }else{
            attr.url = adbertConfig.apiUrl+'?'+toParameter(attr);
        }
        return attr;
    }

    var prepareFrame = function(target,i) {
        var oi = makeid();
        var adbert = ADTag(target,false);
        var size = target.getAttribute("format").split("x");
		var third = third_Documents(adbert)
        target.setAttribute("width" , size[0]);
        target.setAttribute("height" , size[1]);
        target.setAttribute("id" , 'adtag'+oi);
        var adDiv = document.createElement("div");
        var iframe = document.createElement("iframe");
		console.log(adbert.url);
        iframe.setAttribute("width" , size[0]);
        iframe.setAttribute("height" , size[1]);
        iframe.setAttribute("scrolling" , "no");
        iframe.setAttribute("cellspacing" , 0);
        iframe.setAttribute("marginheight" , 0);
        iframe.setAttribute("marginwidth" , 0);
		iframe.setAttribute("frameborder" , "0");
		if (!third) {
	        iframe.setAttribute("src", adbert.url+'&o='+oi);
		} else {
			var adTagJson = ADTag(target, true);
			readAd(adTagJson.url, target, true);
			exposureThird = document.createElement('img');                                                                                                                                                                                 
			exposureThird.setAttribute("src", this.jsonXml.exposureUrl);
            exposureThird.setAttribute("style", 'display:none;');
			adDiv.appendChild(exposureThird);
		}
        iframe.className = "adchild"
        adDiv.className = "addiv"
        adDiv.style.display = "inline-block";
        adDiv.appendChild(iframe);
        target.setAttribute("status","ready");
		target.appendChild(adDiv);
		if (third) {
           var adsIframeDoc = iframe.contentDocument || iframe.contentWindow.document;
           adsIframeDoc.open();
           adsIframeDoc.location.replace(adbert.requeryurl+'&o='+oi)
           adsIframeDoc.close();		
		}
        if (target.getAttribute("show") == 'scroll') {
            parallax(target);
        }
    }
    window.ssp.prepareFrame = prepareFrame;

    function receiveMessage(event)
    {
        if (event.origin == 'https://ssp.hinet.net' || event.origin == 'http://ssp.hinet.net' ) {
            var data = event.data;
            switch(data.type) {
                case 'thirdshow':
                    break;
                case 'hide':
                    document.getElementById(data.target).style.display = 'none';
                    break;
                case 'popup':
                    if (!window.hinetworkpop) {
                        document.getElementById(data.target).style.display = 'block';
                        var popupDiv = document.getElementById(data.target).getElementsByClassName('addiv')[0];
                        popupDiv.style.display = 'none';
                        popup(popupDiv,data.close);
                        setTimeout(function(){ popupDiv.style.display = 'flex'; }, 1000);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    window.addEventListener("message", receiveMessage, false);
	window.onload = function(e){
        getADTag();
    }
    var NavigateUrl;
    var TrueViewUrl;
    var returnImg;
    var VastUrl;
    var TrackingUrl;
    var WebCode;
    function trueviewReturn() {
        returnImg = document.createElement('img');
        returnImg.src = TrueViewUrl;
        alert('Send TrueView!');
    }
    function adText(text,exposure){
        var adDiv = document.createElement('div');
        var textDiv = document.createElement('span');
        adDiv.style.textAlign = "center";
        textDiv.innerHTML = text;
        var urlA = document.createElement('a');
        urlA.href = NavigateUrl;
        urlA.setAttribute('target','_blank');
        var exposureImg = document.createElement('img');
        exposureImg.style.display = 'none';
        exposureImg.src = exposure;
        urlA.appendChild(textDiv);
        adDiv.appendChild(urlA);
        adDiv.appendChild(exposureImg);
        return adDiv;
    }
    function adImage(url){
        var adDiv = document.createElement('div');
        var urlA = document.createElement('a');
        urlA.href = NavigateUrl;
        urlA.setAttribute('target','_blank');
        var adImg = document.createElement('img');
        adImg.src = url;
        adImg.style.width = '100%';
        urlA.appendChild(adImg);
		adDiv.appendChild(urlA);
        return adDiv;
    }

    function adVideo(url){
        var adDiv = document.createElement('div');
        var adVideo = document.createElement('video');
        var adSource = document.createElement('source');
        adSource.setAttribute('type','video/mp4');
        adVideo.setAttribute('id',adId);
        adVideo.appendChild(adSource);
        adDiv.appendChild(adVideo);
        return adDiv;
    }

    function adH5(url){
        var adDiv = document.createElement('div');
        var adiframe = document.createElement('iframe');
        adiframe.setAttribute("width" , adWidth);
        adiframe.setAttribute("height" , adHeight);
        adiframe.setAttribute("scrolling" , "no");
        adiframe.setAttribute("marginheight" , 0);
        adiframe.setAttribute("marginwidth" , 0);
        adiframe.setAttribute("frameborder" , "0");
        adiframe.setAttribute("src", url);
        adDiv.appendChild(adiframe);
        return adDiv;
    }

    function adTag(tag,exposure,papa){
        var adId = makeid();
        var sArr = [];
        sArr[sArr.length] = '<div>';
        sArr[sArr.length] = '<img src="'+exposure+'" style="display:none;">';
        sArr[sArr.length] = tag;
        sArr[sArr.length] = '</div>';
        var node = document.createElement('div');
        node.id = 'th' + adId;
        node.innerHTML = sArr.join('');
        papa.appendChild(node);
        var scr = node.getElementsByTagName('script');

        Array.prototype.forEach.call(scr, function(ele){
            if (ele.innerText !== ""){
                window.eval(ele.innerText);
            }
            if (ele.src) {
                var newscr = document.createElement('script');
                newscr.src = ele.src;
                if (ele.parentNode) {
                    ele.parentNode.insertBefore(newscr, ele);
                } else {
                    document.head.appendChild(newscr);
                }
            }
        });
    return false;
    }

    /** Run Script Webcode of Third Party */
    function insertScript ($script, callback) {
      var s = document.createElement('script')
      s.type = 'text/javascript'
      if ($script.src) {
        s.onload = callback
        s.onerror = callback
        s.src = $script.src
      } else {
        s.textContent = $script.innerText
      }

      document.head.appendChild(s)

      $script.parentNode.removeChild($script)

      if (!$script.src) {
        callback()
      }
    }
    function scriptsDone () {
      var DOMContentLoadedEvent = document.createEvent('Event')
      DOMContentLoadedEvent.initEvent('DOMContentLoaded', true, true)
      document.dispatchEvent(DOMContentLoadedEvent)
    }
    function seq (arr, callback, index) {
      if (typeof index === 'undefined') {
        index = 0
      }

      arr[index](function () {
        index++
        if (index === arr.length) {
          callback()
        } else {
          seq(arr, callback, index)
        }
      })
    }

    function runScripts($webcode){
        var $scripts = $webcode.querySelectorAll('script');
        var runList = [];

        [].forEach.call($scripts, function ($script) {
            runList.push(function (callback) {
                insertScript($script, callback)
            });
        });
        seq(runList, scriptsDone);
    }
    /** End of Runing Script Webcode of Third Party */

    var ad = false;
    function runJson(jsonResponse, papa) {
        NavigateUrl = jsonResponse.NavigateUrl;
        adWidth = jsonResponse.Width;
        adHeight = jsonResponse.Height;
        TrackingUrl = jsonResponse.TrackingUrl;
        var TextContent = jsonResponse.TextContent;
        if (TextContent != null) {
            exposure = jsonResponse.ExposureUrl;
            if (jsonResponse.IsScript) {
                var tag = TextContent;
                ad = adTag(tag,exposure, papa);
            }else{
                var txt = TextContent;
                ad = adText(txt,exposure);
            }

        }
        var ImageUrl = jsonResponse.ImageUrl;
        if (ImageUrl != null) {
			ad = adImage(ImageUrl);
        }
        var VideoUrl = jsonResponse.VideoUrl;
        VastUrl = jsonResponse.VastUrl;
        if (VastUrl != null) {
            ad = adVideo(VastUrl);
            TrueViewUrl = jsonResponse.DurationUrl;
        }
        var Html5Url = jsonResponse.Html5Url;
        if (Html5Url != null) {
            ad = adH5(Html5Url);
        }
		WebCode = jsonResponse.WebCode;
		if (WebCode != null) {
            if (typeof jsonResponse.document === 'undefined') {
                jsonResponse.document = false;
			}

			var adbert = ADTag(papa, true);
            if(jsonResponse.document) {
				var size = papa.getAttribute("format").split("x");
                var adId = makeid();
                divThird = document.createElement('div');
                divThird.setAttribute("id", "th"+adId);
                exposureThird = document.createElement('img');
                exposureThird.setAttribute("src", jsonResponse.exposureUrl);
                exposureThird.setAttribute("style", 'display:none;');
                var adsIframe = document.createElement('iframe');
                adsIframe.setAttribute('width', size[0]);
                adsIframe.setAttribute('height', size[1]);
                adsIframe.setAttribute('scrolling', 'no');
                adsIframe.setAttribute('marginheight', 0);
                adsIframe.setAttribute('marginwidth', 0);
                adsIframe.setAttribute('frameborder', '0');
                papa.appendChild(divThird);
                papa.appendChild(exposureThird);
                divThird.appendChild(adsIframe);
				var adsIframeDoc = adsIframe.contentDocument || adsIframe.contentWindow.document;
				adsIframeDoc.open();
				adsIframeDoc.write(WebCode);
				adsIframeDoc.close();
			}else{
                document.write('<div id="th'+adId+'">');
                document.write('<div>');
                document.write('<img src="'+jsonResponse.exposureUrl+'" style="display:none;">');
                document.write(WebCode);
                document.write('</div>');
                document.write('</div>');
            }
			

            if (jsonResponse.show == 'popup' && jsonResponse.thirdpop == '0') {
                if (!window.hinetworkpop) {
                    //window.hinetworkpop = true;
                    var popupDiv = document.getElementById('th'+adId+'');
                    popup(popupDiv,jsonResponse.CloseUrl);
                }
            }
			noAd = function(){
				document.getElementById('th'+adId+'').style.display = 'none';
            }
        }
		ad.className = 'adchild';
        return ad;
    }
	window.noAd =  function(slot){
        var target = document.querySelector('[slot="'+slot+'"]');
        if (!target) {
            return;
        }
        var third = target.querySelector('[id^="th"]')
        target.removeChild(third)
		readAd(target.passUrl, target);
		if (!WebCode && ad) {
			var size = target.getAttribute("format").split("x");
			var adDiv = document.createElement('div');
			adDiv.className = 'addiv';
			adDiv.style.width = size[0]+'px';
			adDiv.style.height = size[1]+'px';
			adDiv.style.display = 'inline-block';
			adDiv.appendChild(ad);
			if (adJson.Show == 'popup' ) {
				if (!window.hinetworkpop) {
					var popupDiv = adDiv;
					popup(adDiv,adJson.CloseUrl);
				}
				var showtime=1000;
			}else{
				var showtime=0;
			}
			setTimeout(function(){
				target.appendChild(adDiv);
				if (target.getAttribute("show") == 'scroll') {
					parallax(target);
				}
			}, showtime);
		}

			if (VastUrl) {
				var script = document.createElement('script');
				script.src = '//ssp.hinet.net/api/html5vast.js';
				script.onload = function () {
					html5vast(adId,VastUrl,{});
					document.getElementById(adId).play();
				};
			}
			if (TrackingUrl) {
				var TrackingImg = new Image();
				TrackingImg.src = TrackingUrl;
			}
	}
    var adJson;
    function readAd(xmlUrl, papa, json){
        var xmlHttpReq;
        var xmlDoc;
        if (window.XMLHttpRequest){
            xmlHttpReq=new XMLHttpRequest();
        } else {
            xmlHttpReq=new ActiveXObject("Microsoft.XMLHTTP");
        }
		xmlHttpReq.open("GET",xmlUrl,false);
		xmlHttpReq.onload = function(e){
            if(xmlHttpReq.readyState === 4){
                if(xmlHttpReq.status === 200){
                    var jsonResponse = JSON.parse(xmlHttpReq.responseText);
					if (jsonResponse != null) {
						if (json) {
							jsonXml = jsonResponse;	
						} else {
                        	adJson = jsonResponse
							return runJson(jsonResponse, papa);
						}
                    }
                }
            }
        }
        xmlHttpReq.send();
    }

    function parallax(target) {
        var size = target.getAttribute('format').split('x');
        parent = target.querySelector('.addiv')
        child = parent.querySelector('.adchild')
        child.setAttribute('style', 'width: '+parseInt(size[0], 10)+'px;height: '+parseInt(size[1], 10)+'px;margin: 0 auto; position: fixed; left: 50%; transform: translate(-50%, -50%); top: 50%;');
        parent.style.width = '100%';
        parent.style.height = parseInt(size[1], 10)+'px';
        parent.style.margin = '0 auto';
        parent.style.position = 'absolute';
        parent.style.clip = 'rect(0, auto, auto, 0)';
        parent.style.top = '0';
        parent.style.right = '0';
        parent.style.right = '0';
        target.style.width = '100%';
        target.style.height = parseInt(size[1], 10)+'px';
        target.style.position = 'relative';
        target.style.display = 'inline-block';
    }


    function popup(popupDiv,closeUrl) {
        popupDiv.style.display='none';
        var closeDiv = document.createElement("div");
        closeDiv.onclick=function(){
            if (closeUrl) {
                var TrackingImg = new Image();
                TrackingImg.src = closeUrl;
            }
            this.parentNode.style.display='none';
        }
        popupDiv.style.cssText='position: fixed;top: 0;left: 0;right: 0;height: 100vh;display: flex;align-items: center;z-index: 65533;background: rgba(0, 0, 0, .3);will-change: transform;';
        if (window.screen.availWidth > 640) {
            popupDiv.firstChild.style.cssText='position: relative;display: inline-block;top: 0;right: 0;left: 0;bottom:0;margin:auto;';
            popupDiv.firstChild.style.width = '640px';
            popupDiv.firstChild.style.height = '960px';
            closeDiv.style.cssText = 'display: block; position: fixed; cursor: pointer;  width: 70px; height: 100px; left: 50%; top: 50%; background: transparent url("https://ssp.hinet.net/api/close.png") no-repeat scroll center / 70px 70px;;z-index:65536';
            closeDiv.style.marginTop = '-488px';
            closeDiv.style.marginLeft = '218px';
            closeDiv.style.padding = '20px';
        }else{
            popupDiv.firstChild.style.cssText='position: relative;display: inline-block;top: -20px;right: 0;left: 0;bottom:0;margin:auto;';
            popupDiv.firstChild.style.width = '320px';
            popupDiv.firstChild.style.height = '480px';
            closeDiv.style.cssText = 'display: block; position: fixed; cursor: pointer;  width: 35px; height: 35px; left: 50%; top: 50%; background: transparent url("https://ssp.hinet.net/api/close.png") no-repeat scroll center / 35px 35px;;z-index:65536';
            closeDiv.style.marginTop = '-264px';
            closeDiv.style.marginLeft = '109px';
            closeDiv.style.padding = '10px';
        }
        popupDiv.appendChild(closeDiv);
    }
    var tags = document.querySelectorAll(adbertConfig.adTag)
    window.tags = window.tags || [];
    var process = []
    Array.prototype.forEach.call(tags, function(el, i){
        if (window.tags.indexOf(el) === -1) {
            window.tags[window.tags.length] = el;
            process[process.length] = el;
        }
    });

    Array.prototype.forEach.call(process, function(el, i){
		var adbert = ADTag(el, true);
        if (el.getAttribute("rendering") == 'script') {
            var adId = makeid();
            adbert.url = adbert.url+'&o='+adId;
            el.passUrl = adbert.url
            el.adId = adId
			readAd(adbert.url, el);

			if (!WebCode && ad) {
                var size = el.getAttribute("format").split("x");
                var adDiv = document.createElement('div');
                adDiv.className = 'addiv'
                adDiv.style.width = size[0]+'px';
                adDiv.style.height = size[1]+'px';
                adDiv.style.display = 'inline-block';
				adDiv.appendChild(ad)
                if (adJson.Show == 'popup' ) {
                    if (!window.hinetworkpop) {
                        var popupDiv = adDiv
                        popup(adDiv,adJson.CloseUrl);
                    }
                    var showtime=1000;
                }else{
                    var showtime=0;
                }
                setTimeout(function(){
                    el.appendChild(adDiv);
                    if (el.getAttribute("show") == 'scroll') {
                        parallax(el);
                    }
                }, showtime);
            }

            if (VastUrl) {
                var script = document.createElement('script');
                script.src = '//ssp.hinet.net/api/html5vast.js';
                script.onload = function () {
                    html5vast(adId,VastUrl,{});
                    document.getElementById(adId).play();
                };
            }
            if (TrackingUrl) {
                var TrackingImg = new Image();
                TrackingImg.src = TrackingUrl;
			}
		}
    });
}).call(this);
