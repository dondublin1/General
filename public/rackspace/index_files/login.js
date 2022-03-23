// vim:ts=4:sw=4:et:tw=100:fdm=marker:

function onFormSubmit(got_url) {
  $Login.submitForm(got_url);
}

Webmail = {};

$Login = Webmail.Login = {
  email_cookie: null,
  use_ssl_cookie: null,
  pass_cookie: null,
  old_pass_cookie: null,
  border_cookie: null,
  really_clear: null,
  apps_login_cookie: null,

  // New window created when using "hide browser toolbars" option.
  new_win: null,

  //Flag to allow password to only be cleared at certain times.
  hide_pass: true,

  // The last username entered, used to determine if
  // the password should be cleared.
  last_email_user: null,
  last_cp_user: null,

  //Used for exchange emails
  _login_form: null,

  // Cookie name constants.
  EMAIL_USER_COOKIE_NAME: "user_name",
  EMAIL_OLD_PASS_COOKIE_NAME: "password",
  EMAIL_PASS_COOKIE_NAME: "passwordenc",
  APPS_LOGIN_COOKIE_NAME: "apps_login",

  // Password retrieval URLs.
  EMAIL_LOST_PASS_URL: "p/popups/forgot_password.html",

  LOGIN_SERVER_URL: "https://iad.wm.emailsrvr.com/mail6/",
  LOGIN_SUBMIT_URI: "ext/login/submit.html",

  APPS_LOGIN_DOMAIN: "apps.rackspace.com",

  // private
  // ssl option functions
  // {{{ _displaySslOption
  /**
   * Displays the ssl option div.
   *
   * @return void
   */
  _displaySslOption: function () {
    var ssl = this._getSslDiv();

    if (ssl) {
      ssl.style.display = "";
    }
  },

  // }}}
  // {{{ _getSslCheckbox
  /**
   * Gets the ssl checkbox in the div.
   *
   * @return null|Element
   */
  _getSslCheckbox: function () {
    return document.getElementById("usessl");
  },

  // }}}
  // {{{ _getSslDisplayValue
  /**
   * Get ssl display value.
   *
   * @return null|string
   */
  _getSslDisplayValue: function () {
    var ssl = this._getSslDiv();
    var display = null;

    if (ssl) {
      display = ssl.style.display;
    }

    return display;
  },

  // }}}
  // {{{ _getSslDiv
  /**
   * Gets the ssl div.
   *
   * @return null|Element
   */
  _getSslDiv: function () {
    return document.getElementById("ssl");
  },

  // }}}
  // {{{ _hideSslOption
  /**
   * Hides ssl option div.
   *
   * @return void
   */
  _hideSslOption: function () {
    var ssl = this._getSslDiv();

    if (ssl) {
      ssl.style.display = "none";
    }
  },

  // }}}
  // {{{ _isSslChecked
  /**
   * Determines if the ssl checkbox is checked or not.
   * By default, it is not.
   *
   * @return bool
   */
  _isSslChecked: function () {
    var ssl = this._getSslCheckbox();
    var checked = false;

    if (ssl) {
      checked = ssl.checked;
    }

    return checked;
  },

  // }}}
  // {{{ _setSslCheckbox
  /**
   * Checks or unchecks the ssl checkbox.
   *
   * @param bool checked To check or not to check.
   *
   * @return void
   */
  _setSslCheckbox: function (checked) {
    var ssl = this._getSslCheckbox();
    if (ssl) {
      ssl.checked = checked;
    }
  },

  // }}}

  // options label functions
  // {{{ _displayOptionsLabel
  /**
   * Displays the optional label div.
   *
   * @return void
   */
  _displayOptionsLabel: function () {
    var option = this._getOptionsLabelDiv();

    if (option) {
      option.style.display = "";
    }
  },

  // }}}
  // {{{ _getOptionsLabelDiv
  /**
   * Gets the option label div.
   *
   * @return null|Element
   */
  _getOptionsLabelDiv: function () {
    return document.getElementById("options_label");
  },

  // }}}
  // {{{ _hideOptionsLabel
  /**
   * Hides option label div.
   *
   * @return void
   */
  _hideOptionsLabel: function () {
    var option = this._getOptionsLabelDiv();

    if (option) {
      option.style.display = "none";
    }
  },

  // }}}

  // force ssl icon functions
  // {{{ _displayFocreSslIcon
  /**
   * Displays the force ssl icon.
   *
   * @return void
   */
  _displayForceSslIcon: function () {
    var icon = this._getForceSslIcon();

    if (icon) {
      icon.style.display = "";
    }
  },

  // }}}
  // {{{ _getForceSslIcon
  /**
   * Gets the force ssl icon.
   *
   * @return null|Element
   */
  _getForceSslIcon: function () {
    return document.getElementById("forcessl_icon");
  },

  // }}}
  // {{{ _hideForceSslIcon
  /**
   * Hides the force ssl icon.
   *
   * @return void
   */
  _hideForceSslIcon: function () {
    var icon = this._getForceSslIcon();

    if (icon) {
      icon.style.display = "none";
    }
  },

  // }}}

  // hide toolbar functions
  // {{{ _displayHideToolbarOption
  /**
   * Displays the hide toolbar option div.
   *
   * @return void
   */
  _displayHideToolbarOption: function () {
    var toolbar = this._getHideToolbarDiv();

    if (toolbar) {
      toolbar.style.display = "";
    }
  },

  // }}}
  // {{{ _getHideToolbarCheckbox
  /**
   * Gets the hide toolbar checkbox in the div.
   *
   * @return null|Element
   */
  _getHideToolbarCheckbox: function () {
    return document.getElementById("hide_toolbars");
  },

  // }}}
  // {{{ _getHideToolbarDiv
  /**
   * Gets the hide toolbar div.
   *
   * @return null|Element
   */
  _getHideToolbarDiv: function () {
    return document.getElementById("toolbars");
  },

  // }}}
  // {{{ _hideToolbarOption
  /**
   * Hides the hide toolbar option div.
   *
   * @return void
   */
  _hideToolbarOption: function () {
    var toolbar = this._getHideToolbarDiv();

    if (toolbar) {
      toolbar.style.display = "none";
    }
  },

  // }}}
  // {{{ _isHideToolbarChecked
  /**
   * Determines if the hide toolbar checkbox is checked or not.
   * By default, it is not.
   *
   * @return bool
   */
  _isHideToolbarChecked: function () {
    var toolbar = this._getHideToolbarCheckbox();
    var checked = false;

    if (toolbar) {
      checked = toolbar.checked;
    }

    return checked;
  },

  // }}}
  // {{{ _setHideToolbarCheckbox
  /**
   * Checks or unchecks the hide toolbar checkbox.
   *
   * @param bool checked To check or not to check.
   *
   * @return void
   */
  _setHideToolbarCheckbox: function (checked) {
    var toolbar = this._getHideToolbarCheckbox();
    if (toolbar) {
      toolbar.checked = checked;
    }
  },

  // }}}

  // remember checkbox functions
  // {{{ _getRememberCheckbox
  /**
   * Gets the remember checkbox in the div.
   *
   * @return null|Element
   */
  _getRememberCheckbox: function () {
    return document.getElementById("remember");
  },

  // }}}
  // {{{ _isHideToolbarChecked
  /**
   * Determines if the remember checkbox is checked or not.
   * By default, it is not.
   *
   * @return bool
   */
  _isRememberChecked: function () {
    var remember = this._getRememberCheckbox();
    var checked = false;

    if (remember) {
      checked = remember.checked;
    }

    return checked;
  },

  // }}}
  // {{{ _setRememberCheckbox
  /**
   * Checks or unchecks the remember checkbox.
   *
   * @param bool checked To check or not to check.
   *
   * @return void
   */
  _setRememberCheckbox: function (checked) {
    var remember = this._getRememberCheckbox();
    if (remember) {
      remember.checked = checked;
    }
  },

  // }}}

  // {{{ addHiddenFieldToForm()
  /**
   * Adds a hidden field to the form if it does not exist.
   *
   * @param	string	$name	Field name
   * @param	string	$id		Field id
   * @param	string	$value	Field value
   */
  addHiddenFieldToForm: function (name, id, value) {
    if (!document.getElementById(id)) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.id = id;
      input.value = value;
      document.login.appendChild(input);
    }
  },
  // }}}
  // {{{ addHiddenFieldsToForm()
  /**
   * Adds hidden fields to the form to send remembered
   * data to the new login domain.
   */
  addHiddenFieldsToForm: function () {
    this.addHiddenFieldToForm(
      "passwordenc",
      "passwordenc",
      escape(
        $TEAEncrypt.encrypt(
          document.login.password.value,
          this.APPS_LOGIN_DOMAIN
        )
      )
    );
  },
  // }}}
  // {{{ changeLogin()
  /**
   * Change the login, based on the type of account that's trying to login.
   * This can receive its parameter from the selection box's onchange() event.
   */
  changeLogin: function () {
    var theform = document.login;
    var user_field = theform[this.getUserFieldName()];
    var pass_field = theform.password;

    pass_field.name = "password";
    if (document.login.fake_pwd) {
      document.login.fake_pwd.defaultValue = "Password";
    }

    if (user_field.value == "Email Address") {
      user_field.focus();
    }

    // Only run if in email mode
    if (
      this.new_win &&
      user_field.name == "user_name" &&
      !this.new_win.closed
    ) {
      // If logged in in new window (used with "hide browser toolbars" option),
      // focus on new window.
      this.new_win.focus();
    }
  },
  // }}}
  // {{{ checkDefault()
  // IE wanted them to be separate...odd but works BRL
  checkDefault: function (thisbox) {
    if (thisbox.value == thisbox.defaultValue && this.really_clear == 1) {
      thisbox.value = "";
      thisbox.style.color = "#000";
    }
  },
  // }}}
  // {{{ clearPassword()
  /**
   * Clears the password field only if the user has changed the contents of the
   * username field.
   *
   */
  clearPassword: function () {
    var field = this.getUserFieldName();
    var lastvar = this.getLastUserVarName();
    if (this[lastvar] != document.login[field].value) {
      document.login.password.value = "";
    }

    this[lastvar] = document.login[field].value;
  },
  // }}} clearPassword()
  // {{{ forgotPassword
  /**
   * Handles the "Forgot your password?" link.
   */
  forgotPassword: function () {
    var width = 400;
    var height = 250;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height - 60) / 2;
    window.open(
      this.EMAIL_LOST_PASS_URL,
      "pwd",
      "toolbar=0,height=" +
        height +
        ",width=" +
        width +
        ",left=" +
        left +
        ",top=" +
        top
    );
  },
  // }}}
  // {{{ getCookie()
  /**
   * Gets the cookie from the UA
   *
   * @param	string	$name	Name of the cookie to get from this domain
   */
  getCookie: function (name) {
    var cookie = " " + String(document.cookie);
    var pos = cookie.indexOf(" " + name + "=");

    if (pos != -1) {
      var end = cookie.indexOf(";", pos);
      return cookie.substring(
        pos + name.length + 2,
        end == -1 ? cookie.length : end
      );
    }

    return "";
  },
  // }}} getCookie()
  // {{{ getLastUserVarName
  /**
   * Gets the name of the variable that stores the last username
   * that was entered in email user inputs.
   *
   * @return string
   */
  getLastUserVarName: function () {
    return "last_email_user";
  },
  // }}}
  // {{{ getNextYearDate()
  /**
   * Returns a date one year from the current date.
   * @return	Date
   */
  getNextYearDate: function () {
    var today = new Date();
    return new Date(
      today.getFullYear() + 1,
      today.getMonth(),
      today.getDate(),
      today.getHours(),
      today.getMinutes(),
      today.getSeconds()
    );
  },
  // }}}
  // {{{ getPostUrl()
  getPostUrl: function () {
    if (document.login[this.getUserFieldName()].name == "username") {
      this.setupSession();
      document.login.submit();
      return;
    } else {
      // email login
      if (window._wm_redirect) {
        // If redirecting, change the form action to post to apps.rackspace.com.
        var action = "http";
        if (this._isSslChecked()) {
          action += "s";
        }
        action += "://" + this.APPS_LOGIN_DOMAIN + "/login.html";
        document.login.action = action;
      }
    }

    this._login_form = document.login;

    var s = document.createElement("script");
    if (window._ext_js_path) {
      s.src = window._ext_js_path;
    } else {
      s.src = this.LOGIN_SERVER_URL;
    }

    s.src +=
      this.LOGIN_SUBMIT_URI +
      "?e=" +
      encodeURIComponent(document.login[this.getUserFieldName()].value) +
      "&h=";

    if (document.login.hostname && document.login.hostname.value) {
      s.src += encodeURI(document.login.hostname.value);
    }

    document.body.appendChild(s);
  }, // }}}
  // {{{ getUserFieldName
  /**
   * Gets the name of the "username" field, which can be either "username"
   * or "user_name".  This function is needed because IE8 changes the name
   * of the field in document.login, while other browsers do not.
   *
   * @return string Name of the "username" field.
   */
  getUserFieldName: function () {
    var user = "user_name";
    if (!document.login.user_name) {
      user = "username";
    }
    return user;
  },
  // }}}
  // {{{ handlePassWatermark()
  /**
   * Clears the box of the watermark and changes the text color to black.
   * Only clears if the contents of the field are the watermark.
   */
  handlePassWatermark: function (field) {
    var real = document.login.password;
    var fake = document.login.fake_pwd;

    if (!this._isRememberChecked()) {
      // If not remembering the password, clear the field.
      real.value = "";
    }

    // If not remembering login info, clear password when displaying
    // password input.
    // hide_pass is a flag that prevents the code from hiding the field
    if (fake && fake.value == fake.defaultValue && this.hide_pass == true) {
      fake.style.display = "none";
      real.style.display = "";
      real.focus();
    }
  },

  // }}}
  // {{{ handleUserWatermark()
  // Clears the box of the watermark and changes the text color to black.
  // Only clears if the contents of the field are the watermark.
  handleUserWatermark: function () {
    var user = document.login[this.getUserFieldName()];
    if (user.value == user.defaultValue) {
      user.value = "";
      user.style.color = "#000";
    }
  },
  // }}}
  // {{{ hasRememberedEmailLogin()
  /**
   * Returns true if user has email username and password
   * cookies saved.
   */
  hasRememberedEmailLogin: function () {
    if (this.email_cookie && this.pass_cookie) {
      return true;
    }
    return false;
  },
  // }}}
  // {{{ hidePasswordInput()
  /**
   * Not sure what this does yet
   *
   */
  hidePasswordInput: function (input) {
    if (!input) {
      input = document.login.password;
    }
    if (document.login.fake_pwd && input.value == "") {
      input.style.display = "none";
      document.login.fake_pwd.style.display = "";
    }
  },
  // }}}
  // {{{ init()
  init: function () {
    //If cookie exists then read it  otherwise don't waste time.
    if (document.cookie != "") {
      this.readCookies();
    }

    if (
      window._wm_redirect &&
      (this.apps_login_cookie || !this.hasRememberedEmailLogin())
    ) {
      // If the user has already visited the apps login or they don't have
      // remembered info, redirect to apps login.

      if (!this.apps_login_cookie && !this.hasRememberedEmailLogin()) {
        // Set the cookie if it doesn't exist.
        var date = this.getNextYearDate();
        document.cookie =
          this.APPS_LOGIN_COOKIE_NAME +
          "=1; path=/; expires=" +
          date.toGMTString() +
          ";";
      }

      document.location.href =
        window.location.protocol + "//" + this.APPS_LOGIN_DOMAIN;
      return false;
    }

    // Reposition the body to its on screen default.
    // We are initially positioning the body off screen so that
    // users with slow connections can't enter data in the fields
    // before the Javascript executes on page load.
    document.body.style.position = "static";
    document.body.style.left = "0";

    document.login.onsubmit = function () {
      return false;
    };

    document.login[this.getUserFieldName()].value = "";
    document.login.password.value = "";

    this.changeLogin();

    if (this.hasRememberedEmailLogin()) {
      this._setRememberCheckbox(true);

      this.setValues(this.email_cookie, this.pass_cookie);
    }
  },
  // }}}
  // {{{ makeUrlSsl()
  makeUrlSsl: function (url) {
    var prot = url.substr(0, 6);
    if (prot == "http:/") {
      return "https" + url.substr(4);
    } else if (prot == "https:") {
      return url;
    } else if (url.substr(0, 1) == "/") {
      return "https://" + document.domain + url;
    } else {
      var loc = String(document.location);
      var lsl = loc.substr(8).lastIndexOf("/");
      if (lsl != -1) {
        loc = loc.substr(0, lsl + 9);
      }

      return "https://" + loc.substr(loc.indexOf("//") + 2) + url;
    }
  },

  // }}}
  // {{{ readCookies()
  /**
   * Check for "remember me" cookie and load the fields.
   */
  readCookies: function () {
    var bites = document.cookie.split("; ");

    this.email_cookie = this.getCookie(this.EMAIL_USER_COOKIE_NAME);
    this.last_email_user = this.email_cookie;

    this.old_pass_cookie = this.getCookie(this.EMAIL_OLD_PASS_COOKIE_NAME);
    this.pass_cookie = this.getCookie(this.EMAIL_PASS_COOKIE_NAME);
    this.use_ssl_cookie = this.getCookie("useSSL");
    if (this.old_pass_cookie != "") {
      this.pass_cookie = this.old_pass_cookie;
    } else {
      this.pass_cookie = unescape(this.pass_cookie);
      this.pass_cookie = $TEAEncrypt.decrypt(this.pass_cookie, document.domain);
    }

    this.border_cookie = this.getCookie("noborder");

    // This cookie will be set if user has hit webmail.mailtrust.com and
    // been redirected to apps.rackspace.com.
    this.apps_login_cookie = this.getCookie(this.APPS_LOGIN_COOKIE_NAME);
  },

  // }}}
  // {{{ resetPassword()
  /**
   * Resets the password field to the initial default state.
   */
  resetPassword: function () {
    var fake = document.login.fake_pwd;
    var password = document.login.password;

    password.value = "";

    if (fake) {
      password.style.display = "none";
      fake.style.display = "";
    }
  },
  // }}}
  // {{{ restorePassWatermark()
  /**
   * Restores the password watermark if the field is blank.
   */
  restorePassWatermark: function () {
    var real = document.login.password;
    var fake = document.login.fake_pwd;
    if (fake && real.value == "") {
      real.style.display = "none";
      fake.style.display = "";
    }
  },
  // }}}
  // {{{ restoreUserWatermark()
  /**
   * Restores the watermark to the user field if it is blank.
   */
  restoreUserWatermark: function () {
    var user = document.login[this.getUserFieldName()];
    if (document.login.fake_pwd && user.value == "") {
      user.value = "Email Address";
      user.style.color = "#888";
    }
  }, // }}}
  // {{{ showPasswordInput()
  /**
   * Not really sure what this does yet
   *
   */
  showPasswordInput: function (input) {
    var real = document.login.password;
    input.style.display = "none";
    real.style.display = "";
  },
  // }}}
  // {{{ setValues()
  /**
   * Sets the values of the password and username boxes and with the specified color.
   *
   * @param	String		$username	The text for the username field.
   * @param	String		$password	The text for the password field.
   * @param	HTML Color	$color		The color for the text in the fields.
   */
  setValues: function (username, password, color) {
    var user_field = document.login[this.getUserFieldName()];
    var pass_field = document.login.password;

    if (
      this._isRememberChecked() ||
      user_field.value == "" ||
      user_field.value == "Email Address"
    ) {
      user_field.value = username;
      pass_field.value = password;

      if (document.login.fake_pwd) {
        this.showPasswordInput(document.login.fake_pwd);
      }
      user_field.style.color = color;
      this[this.getLastUserVarName] = username;
    }
  },
  // }}} setValues()
  // {{{ setupCookie()
  /**
   * This handles the cookie based on what the user wants to remember and the type of login.
   *
   * @param	Date	$next_year_date	The date one year from the current date.
   */
  setupCookie: function (next_year_date) {
    //If "remember" checkbox is checked, drop cookie to remember user name and password
    //Else if not checked, delete any existing cookie
    var user = document.login[this.getUserFieldName()].name;
    var pass = document.login.password.name;

    var user_cookie_name = this.EMAIL_USER_COOKIE_NAME;
    var pass_cookie_name = this.EMAIL_PASS_COOKIE_NAME;
    var pass_enc_cookie_name = this.EMAIL_PASS_ENC_COOKIE_NAME;

    var passval = escape(
      $TEAEncrypt.encrypt(document.login.password.value, document.domain)
    );

    if (this._isRememberChecked()) {
      document.cookie =
        user_cookie_name +
        "=" +
        document.login[this.getUserFieldName()].value +
        "; path=/; expires=" +
        next_year_date.toGMTString() +
        ";";
      document.cookie =
        pass_cookie_name +
        "=" +
        passval +
        "; path=/; expires=" +
        next_year_date.toGMTString() +
        ";";

      //set cookies only if it was email
      document.cookie =
        "noborder=" +
        this._isHideToolbarChecked() +
        "; expires=" +
        next_year_date.toGMTString() +
        ";";
    } else {
      document.cookie =
        user_cookie_name + "=; path=/; expires=Sun, 01-Jan-1995 01:00:00 GMT;";
      document.cookie =
        pass_cookie_name + "=; path=/; expires=Sun, 01-Jan-1995 01:00:00 GMT;";
      document.cookie = "noborder=; expires=Sun, 01-Jan-1995 01:00:00 GMT;";
    }

    // Set the apps login cookie so user will be redirected to apps.mailtrust.com next time.
    if (window._wm_redirect) {
      document.cookie =
        this.APPS_LOGIN_COOKIE_NAME +
        "=1; path=/; expires=" +
        next_year_date.toGMTString() +
        ";";
    }
  },
  // }}} setupCookie()
  // {{{ setupEmailSession()
  /**
   * This does what is necessary to set up an email session.
   *
   * @param	Date	$next_year_date	The date it will be one year from the current date.
   */
  setupEmailSession: function (next_year_date) {
    document.login.target = "";
    var sslcookievalue = this._isSslChecked() ? "1" : "0";
    document.cookie =
      "useSSL=" +
      sslcookievalue +
      "; path=/; expires=" +
      next_year_date.toGMTString() +
      ";";

    // Backwards compat - instead the form action should be filled in on the html page
    if (window.post_url) {
      document.login.action = "http://" + window.post_url;
    }

    var is_ssl = this._isSslChecked() == true;
    var url = document.login.getAttribute("action");
    var prot = url.substr(0, 6);
    if (prot == "http:/") {
      var action = is_ssl ? "https://" : "http://";
      action += url.substr(7);
    } else if (prot == "https:" && !is_ssl) {
      var action = "http" + url.substr(5);
    } else if (prot == "https:" && is_ssl) {
      var action = url;
    } else if (url.substr(0, 1) == "/") {
      var action = is_ssl ? "https://" : "http://";
      action += document.domain + url;
    } else {
      var loc = String(document.location);
      var lsl = loc.substr(8).lastIndexOf("/");
      if (lsl != -1) {
        loc = loc.substr(0, lsl + 9);
      }

      var action = is_ssl ? "https://" : "http://";
      action += loc.substr(loc.indexOf("//") + 2) + url;
    }

    document.login.action = action;

    hidetoolbars = document.getElementById("hide_toolbars");

    var hide_toolbars_checked = this._isHideToolbarChecked();

    if (!hide_toolbars_checked) {
      document.login.target = window.name;
    } else {
      param =
        "toolbars=0, resizable=1, left=0, top=0," +
        ",width=" +
        screen.width * 0.95 +
        ",height=" +
        (screen.height - 100);

      // To log in with toolbars hidden, need to create a new window.
      this.new_win = window.open("", "new_win", param);
      document.login.target = "new_win";
    }
  }, // }}} setupEmailSession()
  // {{{ setupSession()
  /**
   * Sets up the session for the user, setting the cookies/hostnames/login cleanup/etc
   */
  setupSession: function () {
    var next_year_date = this.getNextYearDate();
    var ssl_display = this._getSslDisplayValue();

    // only used for email accounts
    if (ssl_display != null && ssl_display != "none") {
      this.setupEmailSession(next_year_date);
    } else {
      document.login.target = window.name;
    }

    this.setupCookie(next_year_date);
    if (window._wm_redirect && document.domain != this.APPS_LOGIN_DOMAIN) {
      this.addHiddenFieldsToForm();
    }
  },
  // }}} setupSession()
  // {{{ submitForm()
  /**
   * Called when form is submitted.
   */
  submitForm: function (got_url) {
    if (got_url) {
      this.setupSession();
    } else {
      // Need to set _login_form here because it is used by the
      // Javascript added by getPostUrl().
      _login_form = document.login;
      this.getPostUrl();
    }
    return false;
  },
  // }}} submitForm()
};

// TEA Encryption object
$TEAEncrypt = Webmail.TEAEncrypt = (function () {
  // Private functions
  /* Supporting functions for encryption*/
  // {{{ strToLong()
  /**
   * Converts a string to an array of longs, each containing 4 chars.
   *
   * Note that chars must be within ISO-8859-1 (with Unicode code-point < 256)
   * to fit 4/long.
   *
   * @param	String	$s	The string to convert to long array.
   */
  var strToLongs = function (s) {
    var l = new Array(Math.ceil(s.length / 4));
    for (var i = 0; i < l.length; i++) {
      // note little-endian encoding - endianness is irrelevant as long as
      // it is the same in longsToStr()
      l[i] =
        s.charCodeAt(i * 4) +
        (s.charCodeAt(i * 4 + 1) << 8) +
        (s.charCodeAt(i * 4 + 2) << 16) +
        (s.charCodeAt(i * 4 + 3) << 24);
    }
    return l; // note running off the end of the string generates nulls since
    // bitwise operators treat NaN as 0
  }; // }}}
  // {{{ longsToStr()
  /**
   * Converts an array of longs into a string.
   *
   * @param Long Array	$l	The long array to be converted.
   */
  var longsToStr = function (l) {
    var a = new Array(l.length);
    for (var i = 0; i < l.length; i++) {
      a[i] = String.fromCharCode(
        l[i] & 0xff,
        (l[i] >>> 8) & 0xff,
        (l[i] >>> 16) & 0xff,
        (l[i] >>> 24) & 0xff
      );
    }
    return a.join(""); // use Array.join() rather than repeated string appends for efficiency
  }; // }}}
  // {{{ escCtrlChr()
  /**
   * Escape control chars which might cause problems with encrypted texts.
   *
   * @param String	$str	The string needing escaping.
   */
  var escCtrlCh = function (str) {
    return str.replace(/[\0\t\n\v\f\r\xa0!]/g, function (c) {
      return "!" + c.charCodeAt(0) + "!";
    });
  }; // }}}
  // {{{ unescCtrlCh()
  /**
   * Unescape potentially problematic nulls and control characters.
   *
   * @param String	$str	The string to be unescaped.
   */
  var unescCtrlCh = function (str) {
    return str.replace(/!\d\d?\d?!/g, function (c) {
      return String.fromCharCode(c.slice(1, -1));
    });
  }; // }}}

  return {
    // {{{ encrypt()
    /**
     * encrypt: Use Corrected Block TEA to encrypt plaintext using password
     *             (note plaintext & password must be strings not string objects)
     *
     * Return encrypted text as string
     */
    encrypt: function (plaintext, passwd) {
      if (plaintext.length == 0) {
        return ""; // nothing to encrypt
      }
      // 'escape' plaintext so chars outside ISO-8859-1 work in single-byte packing, but
      // keep spaces as spaces (not '%20') so encrypted text doesn't grow too long, and
      // convert result to longs
      var v = strToLongs(escape(plaintext).replace(/%20/g, " "));
      if (v.length == 1) {
        v[1] = 0; // algorithm doesn't work for n<2 so fudge by adding nulls
      }
      var k = strToLongs(passwd.slice(0, 16)); // simply convert first 16 chars of password as key
      var n = v.length;

      var z = v[n - 1],
        y = v[0],
        delta = 0x9e3779b9;
      var mx,
        e,
        q = Math.floor(6 + 52 / n),
        sum = 0;

      while (q-- > 0) {
        // 6 + 52/n operations gives between 6 & 32 mixes on each word
        sum += delta;
        e = (sum >>> 2) & 3;
        for (var p = 0; p < n - 1; p++) {
          y = v[p + 1];
          mx =
            (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
            ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
          z = v[p] += mx;
        }
        y = v[0];
        mx =
          (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
          ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
        z = v[n - 1] += mx;
      }
      // note use of >>> in place of >> due to lack of 'unsigned' type in JavaScript

      var ciphertext = longsToStr(v);

      return escCtrlCh(ciphertext);
    }, // }}}
    // {{{ decrypt()
    /**
     * decrypt: Use Corrected Block TEA to decrypt ciphertext using password
     */
    decrypt: function (ciphertext, passwd) {
      if (ciphertext.length == 0) {
        return "";
      }
      var v = strToLongs(unescCtrlCh(ciphertext));
      var k = strToLongs(passwd.slice(0, 16));
      var n = v.length;

      var z = v[n - 1],
        y = v[0],
        delta = 0x9e3779b9;
      var mx,
        e,
        q = Math.floor(6 + 52 / n),
        sum = q * delta;

      while (sum != 0) {
        e = (sum >>> 2) & 3;
        for (var p = n - 1; p > 0; p--) {
          z = v[p - 1];
          mx =
            (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
            ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
          y = v[p] -= mx;
        }
        z = v[n - 1];
        mx =
          (((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
          ((sum ^ y) + (k[(p & 3) ^ e] ^ z));
        y = v[0] -= mx;
        sum -= delta;
      }

      var plaintext = longsToStr(v);

      // strip trailing null chars resulting from filling 4-char blocks:
      plaintext = plaintext.replace(/\0+$/, "");

      return unescape(plaintext);
    }, // }}}
  };
})();
