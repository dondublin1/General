
function AnalyticsPageTrack() {

  var s=window.s||s;
  //_satellite.track('clear-Vars');
  //s.manageVars('clearVars');
  s.events="";
  s.clearVars();

  if(_satellite.getVar('AA : businessType')=== "resi"){
   

  s.pageName=_satellite.getVar('DataLayer : pageName final');
  s.channel=_satellite.getVar('DataLayer : primaryCategory final');
  s.eVar1=s.prop45=_satellite.getVar('DataLayer : customerType final');
  s.prop35=_satellite.getVar('DataLayer : subCategory1 final');
  s.eVar44=s.prop44=_satellite.getVar('DataLayer : siteVersion final');
  s.eVar86=_satellite.getVar('DataLayer : authenticationStatus final');
  s.prop60=_satellite.getVar('DataLayer : language final');
  s.eVar99=_satellite.getVar('AA : affiliateNameChannel');
  s.prop55=_satellite.getVar('AA : businessSiteType');
  s.prop69=_satellite.getVar('DataLayer : referrerID final');

  /* Performance Tracking event */
  
if(_satellite.getVar('DataLayer : performanceTime final')){
  var pageLoadTime="event125="+Math.round(_satellite.getVar('DataLayer : performanceTime final')/ 100);
 s.events = s.apl(s.events, pageLoadTime, ",", 2);
}
   
  s.t();
  _satellite.notify("Analytics Call Fired from Rule AA & AT: Login Custom Page Load");
  s.clearVars();

}



if(_satellite.getVar('AA : businessType')=== "busn")
{ 
    var screenName = "sign in"
    s.pageName=_satellite.getVar('DataLayer : pageName final');; 
    s.channel = _satellite.getVar('DataLayer : primaryCategory final');
    s.prop12 = screenName; 
		s.prop69 = _satellite.getVar('DataLayer : referrerID final');

s.t();
  _satellite.notify("Analytics Call Fired from Rule AA & AT: Login Page Load");
  s.clearVars();  
}
}

(function initAATracking() {

  var s=window.s||s;
  if(typeof s == "undefined" || s == null || typeof s !== "object") {
      AdobeTeamUtils.checkAnalyticsAgain(arguments);
  } else {
		AnalyticsPageTrack();  
  }

})();