function isChrome(){
  var nav = navigator.appVersion;
  re = /Chrome/;
  if (nav.match(re)) {
    return true;
  }
  return false;
}

function isIE(){
  var nav = navigator.appVersion;
  re = /MSIE/;
  if (nav.match(re)) {
    return true;
  }
  return false;
}

function getScrollXY(){
  var x = 0, y = 0;
  if (typeof(window.pageYOffset) == 'number') {
    // Netscape
    x = window.pageXOffset;
    y = window.pageYOffset;
  } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
    // DOM
    x = document.body.scrollLeft;
    y = document.body.scrollTop;
  } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
    // IE6 standards compliant mode
    x = document.documentElement.scrollLeft;
    y = document.documentElement.scrollTop;
  }
  //alert("x:" + x +"; y:" + y);
  return [x, y];
}

function getMyWidth(){
  if (typeof(window.innerWidth) == 'number') {
    //Non-IE
    myWidth = window.innerWidth - 10;
    myHeight = window.innerHeight - 10;
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  return myWidth;
}

// Dynamically set left position of webmail login tab
function myResize(){
  spaces = 280;
  myWidth = getMyWidth();
  var flag = false;

  targetLeft = myWidth / 2 + 1440 / 2 - spaces - 160;
  if (targetLeft < 820) {
    targetLeft = 820;
    flag = true;
  }

  if (myWidth - 280 > targetLeft) {
    scollPos = myWidth - targetLeft - 270;
  } else if (myWidth > targetLeft) {
    scollPos = (280 - (myWidth - targetLeft)) + 10;
  } else {
    scollPos = targetLeft - 280 - 170 + (targetLeft - myWidth) - 70;
  }

  if (myWidth < 1120) {
    setScrollBar(scollPos);
  } else {
    setScrollBar(0);
  }
}

function setScrollBar(pos){
  if (typeof(window.innerWidth) == 'number') {
    //Non-IE
    window.scrollTo(pos, 0);
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    //IE 6+ in 'standards compliant mode'
    window.scrollTo(pos, 0);
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
    //IE 4 compatible
    window.scrollTo(pos, 0);
  }
}

Date.prototype.addDays = function(days) {
	this.setDate(this.getDate() + days);
	return this;
}

var notflickdate = "2018-11-15T00:00:00+0800";
var writtenEndFlickDate = new Date(notflickdate);
var endFlickDate = writtenEndFlickDate;
var maxid = 0;
var interval = 500;

function flicker() {
    var now = new Date();
    if (now < endFlickDate) { 
        $(".flicker").toggleClass('on');
    	setTimeout(flicker, interval);
    } else {
    	$(".flicker").removeClass('on');
    }

}		

function getMaxAnnouncementID() {
	$.ajax({
		type: 'GET',
		async: true,
		url: "//webmail.hinet.net/notify-id.htm",
//		url: "//lib.webmail.hinet.net/statement/notify.htm",
		success: function (data) {
			var ahtml = $.parseHTML( data );
			var aids = [];
			$(ahtml).find("div.page-content>h4").each(function () {
				var aid = parseInt($(this).attr('id'));
				aids.push(aid);
			});
			aids.sort(function(a, b) { return a - b });
			maxid = aids[aids.length-1];
		}
	});	  
}

function getEndFlickDate(maxid) {
	var maxidStr = maxid.toString();
	var newAnnounceDate = new Date(parseInt(maxidStr.substring(0, 3))+1911, parseInt(maxidStr.substring(3, 5))-1, maxidStr.substring(5, 7));
	if (newAnnounceDate > writtenEndFlickDate) {
		newAnnounceDate.addDays(7);
		return newAnnounceDate;
	} else {
		return writtenEndFlickDate;
	}
}

function isWeakBrowser() {
	return isCipherWeakBrowser(navigator.userAgent);
}

function getBrowserVersion(ua, browserName) {
    var browserVersion = 0;
    if (ua.indexOf(browserName) >= 0) {
        if (browserName == 'Safari') {
            browserName = 'Version';
        }
        var cidx = ua.indexOf(browserName);
        var browserVersion = ua.substring(cidx + (browserName.length + 1), cidx + (browserName.length + 3));
        console.log(browserName + '/' + browserVersion);
        if (browserVersion.indexOf('.') >= 0) {
            browserVersion = browserVersion.substring(0, 1);
        }
        console.log(browserName + '/' + browserVersion);
    }
    return browserVersion;
}

function isIOS(ua) {
    if (ua.indexOf('iPhone') >= 0 || ua.indexOf('iPad') >= 0 || ua.indexOf('iPod') >= 0) {
        return true;
    } else {
        return false;
    }
}

function isMac(ua) {
    if (ua.indexOf('Macintosh') >= 0) {
        return true;
    } else {
        return false;
    }
}

function isCipherWeakBrowser(ua) {
    if (ua.indexOf('Chrome') >= 0) {
        var chromeVersion = getBrowserVersion(ua, 'Chrome');
        if (chromeVersion < 22) {
            return true;
        } else {
            return false;
        }
    }

    if (ua.indexOf('Firefox') >= 0) {
        var firefoxVersion = getBrowserVersion(ua, 'Firefox');
        if (firefoxVersion < 27) {
            return true;
        } else {
            return false;
        }
    }

    if (isIOS(ua)) {
        var safariVersion = getBrowserVersion(ua, 'Safari');
        if (safariVersion < 5) {
            return true;
        } else {
            return false;
        }
    } else if (isMac(ua)) {
        var safariVersion = getBrowserVersion(ua, 'Safari');
        if (safariVersion < 7) {
            return true;
        } else {
            return false;
        }
    } else if (ua.indexOf('Windows NT 5') >= 0) {
        if (ua.indexOf('Trident/4') >= 0) {
            return true;
        }
        if (ua.indexOf('Trident') < 0 && ua.indexOf('MSIE') >= 0) {
            if (ua.indexOf('MSIE 5') >= 0 || ua.indexOf('MSIE 6') >= 0 || ua.indexOf('MSIE 7') >= 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
    return false;
}


$(document).ready(function(){
  // Handler for .ready() called.
  myResize();

  // add flicker class to System Announcements
  $("div.divTable>div:nth(2) span").addClass("flicker");
  $("div.divTable>div:nth(6) span").addClass("flicker");
  endFilckDate = getEndFlickDate(maxid);
  flicker();

  if (isWeakBrowser()) {
	  $(".modal-dialog").show(500);
  }
});

$(window).resize(function(){
  myResize();
});
