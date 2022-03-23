PLOVR_MODULE_INFO = {
  core: [],
  video2: ["core"],
  cookielayer: ["core"],
  slideshow: ["core"],
  mig: ["core"],
  video: ["core"],
};
PLOVR_MODULE_URIS = {
  core: "/assets/potec.core.min.js",
  video2: "/assets/potec.video2.min.js",
  cookielayer: "/assets/potec.cookielayer.min.js",
  slideshow: "/assets/potec.slideshow.min.js",
  mig: "/assets/potec.mig.min.js",
  video: "/assets/potec.video.min.js",
};
PLOVR_MODULE_USE_DEBUG_MODE = false;
var __potec__ = {};
(function (z) {
  var g,
    l,
    aa,
    ba,
    ca,
    da,
    n,
    p,
    q,
    r,
    t,
    ea,
    fa,
    ga,
    u,
    ha,
    ka,
    y,
    sa,
    va,
    ua,
    wa,
    xa,
    za,
    ya,
    A,
    Ba,
    B,
    Ca,
    Da,
    Ea,
    Ha,
    Ia,
    C,
    Ka,
    La,
    Ma,
    Oa,
    Pa,
    Qa,
    Sa,
    Ta,
    Ua,
    Va,
    Ya,
    Wa,
    bb,
    cb,
    E,
    gb,
    hb,
    jb,
    kb,
    mb,
    F,
    nb,
    ob,
    qb,
    rb,
    tb,
    vb,
    wb,
    xb,
    yb,
    zb,
    Cb,
    Db,
    ub,
    Fb,
    Eb,
    sb,
    Ib,
    Jb,
    Kb,
    Lb,
    J,
    Ob,
    Pb,
    Qb,
    K,
    Rb,
    Sb,
    Ub,
    Wb,
    Xb,
    Yb,
    Zb,
    $b,
    L,
    bc,
    ec,
    jc,
    kc,
    lc,
    fc,
    oc,
    nc,
    hc,
    cc,
    ac,
    qc,
    rc,
    uc,
    vc,
    wc,
    xc,
    yc,
    Bc,
    Cc,
    Dc,
    Ec,
    Fc,
    Gc,
    Hc,
    Ic,
    Jc,
    Oc,
    Lc,
    Pc,
    N,
    Vc,
    Xc,
    Yc,
    bd,
    dd,
    Tc,
    ed,
    ad,
    Zc,
    $c,
    gd,
    fd,
    cd,
    O,
    id,
    jd,
    kd,
    ld,
    md,
    nd,
    pd,
    qd,
    rd,
    td,
    sd,
    ud,
    vd,
    wd,
    xd,
    yd,
    Ad,
    zd,
    Bd,
    Fd,
    Dd,
    Hd,
    Id,
    Jd,
    Cd,
    Md,
    Nd,
    Od,
    Pd,
    Qd,
    Rd,
    Sd,
    Td,
    Ud,
    Vd,
    Wd,
    Zd,
    $d,
    ae,
    be,
    ce,
    de,
    ee,
    fe,
    he,
    ie,
    je,
    ge,
    le,
    ne,
    oe,
    pe,
    qe,
    we,
    xe,
    ve,
    ye,
    ue,
    se,
    te,
    Be,
    Ce,
    De,
    W,
    Fe,
    He,
    Ie,
    Ke,
    Ee,
    Ge,
    Ne,
    Me,
    Qe,
    Pe,
    We,
    Re,
    Se,
    Te,
    Xe,
    bf,
    $e,
    Ye,
    af,
    ff,
    gf,
    hf,
    lf,
    kf,
    jf,
    of,
    mf,
    nf,
    pf,
    qf,
    rf,
    sf,
    uf,
    vf,
    tf,
    zf,
    Af,
    yf,
    Df,
    Ef,
    Hf,
    Ff,
    Bf,
    Kf,
    Cf,
    Lf,
    wf,
    If,
    Mf,
    Of,
    Nf,
    Pf,
    Rf,
    Tf,
    Uf,
    Vf,
    Wf,
    Xf,
    Yf,
    Zf,
    $f,
    ag,
    cg,
    dg,
    eg,
    fg,
    gg,
    hg,
    ig,
    jg,
    kg,
    mg,
    lg,
    ng,
    og,
    pg,
    qg,
    sg,
    rg,
    tg,
    ug,
    vg,
    wg,
    xg,
    yg,
    zg,
    Ag,
    Bg,
    Dg,
    Ig,
    Lg,
    Og,
    Qg,
    Hg,
    Kg,
    Tg,
    Ug,
    Vg,
    Wg,
    Xg,
    Zg,
    $g,
    Yg,
    ah,
    bh,
    ch,
    dh,
    eh,
    fh,
    hh,
    ih,
    gh,
    jh,
    kh,
    lh,
    mh,
    nh,
    qh,
    oh,
    ph,
    rh,
    sh,
    th,
    vh,
    wh,
    xh,
    yh,
    zh,
    Ah,
    Bh,
    Dh,
    Eh,
    Ch,
    Fh,
    Gh,
    Hh,
    Ih,
    Jh,
    Kh,
    Lh,
    Mh,
    Nh,
    Oh,
    Ph,
    Qh,
    Rh,
    Sh,
    Th,
    re,
    m,
    Fa,
    Ga,
    Qf,
    ia;
  l = function (a) {
    return void 0 !== a;
  };
  aa = function (a) {
    a = a.split(".");
    for (var b = m, c; (c = a.shift()); )
      if (null != b[c]) b = b[c];
      else return null;
    return b;
  };
  ba = function () {};
  ca = function (a) {
    a.W = function () {
      return a.Cd ? a.Cd : (a.Cd = new a());
    };
  };
  da = function (a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  };
  n = function (a) {
    return "array" == da(a);
  };
  p = function (a) {
    var b = da(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  };
  q = function (a) {
    return "string" == typeof a;
  };
  r = function (a) {
    return "number" == typeof a;
  };
  t = function (a) {
    return "function" == da(a);
  };
  ea = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  };
  fa = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  };
  ga = function (a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  };
  u = function (a, b, c) {
    u =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? fa
        : ga;
    return u.apply(null, arguments);
  };
  ha = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  };
  ka = function (a) {
    if (m.execScript) m.execScript(a, "JavaScript");
    else if (m.eval) {
      if (null == ia)
        if (
          (m.eval("var _evalTest_ \x3d 1;"), "undefined" != typeof m._evalTest_)
        ) {
          try {
            delete m._evalTest_;
          } catch (d) {}
          ia = !0;
        } else ia = !1;
      if (ia) m.eval(a);
      else {
        var b = m.document,
          c = b.createElement("SCRIPT");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c);
      }
    } else throw Error("goog.globalEval not available");
  };
  z.v = function (a, b) {
    var c = a.split("."),
      d = m;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift()); )
      !c.length && l(b) ? (d[e] = b) : (d = d[e] ? d[e] : (d[e] = {}));
  };
  z.w = function (a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.D = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.uf = function (a, c, f) {
      for (
        var h = Array(arguments.length - 2), k = 2;
        k < arguments.length;
        k++
      )
        h[k - 2] = arguments[k];
      return b.prototype[c].apply(a, h);
    };
  };
  y = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, y);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };
  sa = function (a) {
    if (!la.test(a)) return a;
    -1 != a.indexOf("\x26") && (a = a.replace(ma, "\x26amp;"));
    -1 != a.indexOf("\x3c") && (a = a.replace(na, "\x26lt;"));
    -1 != a.indexOf("\x3e") && (a = a.replace(oa, "\x26gt;"));
    -1 != a.indexOf('"') && (a = a.replace(pa, "\x26quot;"));
    -1 != a.indexOf("'") && (a = a.replace(qa, "\x26#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(ra, "\x26#0;"));
    return a;
  };
  va = function (a, b) {
    for (
      var c = 0,
        d = ta(String(a)).split("."),
        e = ta(String(b)).split("."),
        f = Math.max(d.length, e.length),
        h = 0;
      0 == c && h < f;
      h++
    ) {
      var k = d[h] || "",
        x = e[h] || "",
        H = RegExp("(\\d*)(\\D*)", "g"),
        ja = RegExp("(\\d*)(\\D*)", "g");
      do {
        var I = H.exec(k) || ["", "", ""],
          Na = ja.exec(x) || ["", "", ""];
        if (0 == I[0].length && 0 == Na[0].length) break;
        c =
          ua(
            0 == I[1].length ? 0 : (0, window.parseInt)(I[1], 10),
            0 == Na[1].length ? 0 : (0, window.parseInt)(Na[1], 10)
          ) ||
          ua(0 == I[2].length, 0 == Na[2].length) ||
          ua(I[2], Na[2]);
      } while (0 == c);
    }
    return c;
  };
  ua = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  wa = function (a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase();
    });
  };
  xa = function (a) {
    var b = q(void 0)
      ? "undefined"
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
          .replace(/\x08/g, "\\x08")
      : "\\s";
    return a.replace(
      new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"),
      function (a, b, e) {
        return b + e.toUpperCase();
      }
    );
  };
  za = function (a, b, c) {
    b = ya(a, b, c);
    return 0 > b ? null : q(a) ? a.charAt(b) : a[b];
  };
  ya = function (a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return f;
    return -1;
  };
  A = function (a, b) {
    return 0 <= Aa(a, b);
  };
  Ba = function (a, b) {
    A(a, b) || a.push(b);
  };
  B = function (a, b) {
    var c = Aa(a, b),
      d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d;
  };
  Ca = function (a) {
    return Array.prototype.concat.apply(Array.prototype, arguments);
  };
  Da = function (a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  };
  Ea = function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (p(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var h = 0; h < f; h++) a[e + h] = d[h];
      } else a.push(d);
    }
  };
  Ha = function (a, b) {
    for (var c = b || a, d = {}, e = 0, f = 0; f < a.length; ) {
      var h = a[f++],
        k;
      k = h;
      k = ea(k) ? "o" + (k[Fa] || (k[Fa] = ++Ga)) : (typeof k).charAt(0) + k;
      Object.prototype.hasOwnProperty.call(d, k) || ((d[k] = !0), (c[e++] = h));
    }
    c.length = e;
  };
  Ia = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  };
  C = function (a) {
    return -1 != Ja.indexOf(a);
  };
  Ka = function (a) {
    for (
      var b = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"),
        c = [],
        d;
      (d = b.exec(a));

    )
      c.push([d[1], d[2], d[3] || void 0]);
    return c;
  };
  La = function (a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  };
  Ma = function (a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  };
  Oa = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  };
  Pa = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  };
  Qa = function (a, b) {
    return null !== a && b in a;
  };
  Sa = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Ra.length; f++)
        (c = Ra[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  };
  Ta = function () {
    return C("Opera") || C("OPR");
  };
  Ua = function () {
    return C("Trident") || C("MSIE");
  };
  Va = function () {
    return (C("Chrome") || C("CriOS")) && !Ta() && !C("Edge");
  };
  Ya = function () {
    function a(a) {
      a = za(a, d);
      return c[a] || "";
    }
    var b = Ja;
    if (Ua()) return Wa(b);
    var b = Ka(b),
      c = {};
    Xa(b, function (a) {
      c[a[0]] = a[1];
    });
    var d = ha(Qa, c);
    return Ta()
      ? a(["Version", "Opera", "OPR"])
      : C("Edge")
      ? a(["Edge"])
      : Va()
      ? a(["Chrome", "CriOS"])
      : ((b = b[2]) && b[1]) || "";
  };
  Wa = function (a) {
    var b = /rv: *([\d\.]*)/.exec(a);
    if (b && b[1]) return b[1];
    var b = "",
      c = /MSIE +([\d\.]+)/.exec(a);
    if (c && c[1])
      if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
        if (a && a[1])
          switch (a[1]) {
            case "4.0":
              b = "8.0";
              break;
            case "5.0":
              b = "9.0";
              break;
            case "6.0":
              b = "10.0";
              break;
            case "7.0":
              b = "11.0";
          }
        else b = "7.0";
      else b = c[1];
    return b;
  };
  bb = function () {
    var a = Ja;
    if (Za) return /rv\:([^\);]+)(\)|;)/.exec(a);
    if ($a) return /Edge\/([\d\.]+)/.exec(a);
    if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (ab) return /WebKit\/(\S+)/.exec(a);
  };
  cb = function () {
    var a = m.document;
    return a ? a.documentMode : void 0;
  };
  E = function (a) {
    return db[a] || (db[a] = 0 <= va(eb, a));
  };
  gb = function () {
    this.Pc = "";
    this.qe = fb;
  };
  hb = function (a) {
    return a instanceof gb && a.constructor === gb && a.qe === fb
      ? a.Pc
      : "type_error:SafeUrl";
  };
  jb = function () {
    this.$e = "";
    this.re = ib;
  };
  kb = function (a) {
    return a instanceof jb && a.constructor === jb && a.re === ib
      ? a.$e
      : "type_error:TrustedResourceUrl";
  };
  mb = function () {
    this.Pc = "";
    this.pe = lb;
    this.Ce = null;
  };
  F = function (a, b) {
    this.x = l(a) ? a : 0;
    this.y = l(b) ? b : 0;
  };
  nb = function (a, b) {
    this.width = a;
    this.height = b;
  };
  ob = function (a, b, c) {
    var d = window.document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b))
      return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
      c = c.getElementsByClassName(b);
      if (a) {
        for (var d = {}, e = 0, f = 0, h; (h = c[f]); f++)
          a == h.nodeName && (d[e++] = h);
        d.length = e;
        return d;
      }
      return c;
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
      d = {};
      for (f = e = 0; (h = c[f]); f++)
        (a = h.className),
          "function" == typeof a.split && A(a.split(/\s+/), b) && (d[e++] = h);
      d.length = e;
      return d;
    }
    return c;
  };
  qb = function (a, b) {
    La(b, function (b, d) {
      "style" == d
        ? (a.style.cssText = b)
        : "class" == d
        ? (a.className = b)
        : "for" == d
        ? (a.htmlFor = b)
        : pb.hasOwnProperty(d)
        ? a.setAttribute(pb[d], b)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, b)
        : (a[d] = b);
    });
  };
  rb = function (a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new nb(a.clientWidth, a.clientHeight);
  };
  tb = function (a, b, c) {
    function d(c) {
      c && b.appendChild(q(c) ? a.createTextNode(c) : c);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      !p(f) || (ea(f) && 0 < f.nodeType) ? d(f) : Xa(sb(f) ? Da(f) : f, d);
    }
  };
  vb = function (a, b) {
    tb(ub(a), a, arguments);
  };
  wb = function (a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b);
  };
  xb = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b);
  };
  yb = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
  };
  zb = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  Cb = function (a) {
    return Ab && void 0 != a.children
      ? a.children
      : Bb(a.childNodes, function (a) {
          return 1 == a.nodeType;
        });
  };
  Db = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  ub = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  };
  Fb = function (a) {
    var b = [];
    Eb(a, b, !1);
    return b.join("");
  };
  Eb = function (a, b, c) {
    if (!(a.nodeName in Gb))
      if (3 == a.nodeType)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : b.push(a.nodeValue);
      else if (a.nodeName in Hb) b.push(Hb[a.nodeName]);
      else for (a = a.firstChild; a; ) Eb(a, b, c), (a = a.nextSibling);
  };
  sb = function (a) {
    if (a && "number" == typeof a.length) {
      if (ea(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if (t(a)) return "function" == typeof a.item;
    }
    return !1;
  };
  Ib = function (a) {
    this.O = a || m.document || window.document;
  };
  Jb = function (a) {
    if (a.classList) return a.classList;
    a = a.className;
    return (q(a) && a.match(/\S+/g)) || [];
  };
  z.G = function (a, b) {
    return a.classList ? a.classList.contains(b) : A(Jb(a), b);
  };
  Kb = function (a, b) {
    a.classList
      ? a.classList.add(b)
      : z.G(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
  };
  Lb = function (a, b) {
    a.classList
      ? a.classList.remove(b)
      : z.G(a, b) &&
        (a.className = Bb(Jb(a), function (a) {
          return a != b;
        }).join(" "));
  };
  J = function () {
    0 != Mb && (Nb[this[Fa] || (this[Fa] = ++Ga)] = this);
    this.fa = this.fa;
    this.ua = this.ua;
  };
  Ob = function (a) {
    a && "function" == typeof a.G && a.G();
  };
  Pb = function (a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      p(d) ? Pb.apply(null, d) : Ob(d);
    }
  };
  Qb = function (a) {
    this.id = a;
  };
  K = function (a, b) {
    this.type = a instanceof Qb ? String(a) : a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.wa = !1;
    this.Xd = !0;
  };
  Rb = function (a) {
    Rb[" "](a);
    return a;
  };
  Sb = function (a, b) {
    K.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode =
      this.keyCode =
      this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.Ja = this.state = null;
    if (a) {
      var c = (this.type = a.type),
        d = a.changedTouches ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      var e = a.relatedTarget;
      if (e) {
        if (Za) {
          var f;
          a: {
            try {
              Rb(e.nodeName);
              f = !0;
              break a;
            } catch (h) {}
            f = !1;
          }
          f || (e = null);
        }
      } else
        "mouseover" == c
          ? (e = a.fromElement)
          : "mouseout" == c && (e = a.toElement);
      this.relatedTarget = e;
      null === d
        ? ((this.offsetX = ab || void 0 !== a.offsetX ? a.offsetX : a.layerX),
          (this.offsetY = ab || void 0 !== a.offsetY ? a.offsetY : a.layerY),
          (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0))
        : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.state = a.state;
      this.Ja = a;
      a.defaultPrevented && this.preventDefault();
    }
  };
  Ub = function (a) {
    return !(!a || !a[Tb]);
  };
  Wb = function (a, b, c, d, e) {
    this.listener = a;
    this.Kb = null;
    this.src = b;
    this.type = c;
    this.Ia = !!d;
    this.Cb = e;
    this.key = ++Vb;
    this.Ea = this.qb = !1;
  };
  Xb = function (a) {
    a.Ea = !0;
    a.listener = null;
    a.Kb = null;
    a.src = null;
    a.Cb = null;
  };
  Yb = function (a) {
    this.src = a;
    this.w = {};
    this.ib = 0;
  };
  Zb = function (a, b) {
    var c = b.type;
    if (!(c in a.w)) return !1;
    var d = B(a.w[c], b);
    d && (Xb(b), 0 == a.w[c].length && (delete a.w[c], a.ib--));
    return d;
  };
  $b = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ea && f.listener == b && f.Ia == !!c && f.Cb == d) return e;
    }
    return -1;
  };
  L = function (a, b, c, d, e) {
    if (n(b)) {
      for (var f = 0; f < b.length; f++) L(a, b[f], c, d, e);
      return null;
    }
    c = ac(c);
    return Ub(a) ? a.sa(b, c, d, e) : bc(a, b, c, !1, d, e);
  };
  bc = function (a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var h = !!e,
      k = cc(a);
    k || (a[dc] = k = new Yb(a));
    c = k.add(b, c, d, e, f);
    if (c.Kb) return c;
    d = ec();
    c.Kb = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) a.addEventListener(b.toString(), d, h);
    else if (a.attachEvent) a.attachEvent(fc(b.toString()), d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    gc++;
    return c;
  };
  ec = function () {
    var a = hc,
      b = ic
        ? function (c) {
            return a.call(b.src, b.listener, c);
          }
        : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
    return b;
  };
  jc = function (a, b, c, d, e) {
    if (n(b)) {
      for (var f = 0; f < b.length; f++) jc(a, b[f], c, d, e);
      return null;
    }
    c = ac(c);
    return Ub(a) ? a.Hc(b, c, d, e) : bc(a, b, c, !0, d, e);
  };
  kc = function (a, b, c, d, e) {
    if (n(b)) for (var f = 0; f < b.length; f++) kc(a, b[f], c, d, e);
    else
      (c = ac(c)),
        Ub(a)
          ? a.Wc(b, c, d, e)
          : a && (a = cc(a)) && (b = a.Oa(b, c, !!d, e)) && lc(b);
  };
  lc = function (a) {
    if (r(a) || !a || a.Ea) return !1;
    var b = a.src;
    if (Ub(b)) return Zb(b.P, a);
    var c = a.type,
      d = a.Kb;
    b.removeEventListener
      ? b.removeEventListener(c, d, a.Ia)
      : b.detachEvent && b.detachEvent(fc(c), d);
    gc--;
    (c = cc(b))
      ? (Zb(c, a), 0 == c.ib && ((c.src = null), (b[dc] = null)))
      : Xb(a);
    return !0;
  };
  fc = function (a) {
    return a in mc ? mc[a] : (mc[a] = "on" + a);
  };
  oc = function (a, b, c, d) {
    var e = !0;
    if ((a = cc(a)))
      if ((b = a.w[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.Ia == c && !f.Ea && ((f = nc(f, d)), (e = e && !1 !== f));
        }
    return e;
  };
  nc = function (a, b) {
    var c = a.listener,
      d = a.Cb || a.src;
    a.qb && lc(a);
    return c.call(d, b);
  };
  hc = function (a, b) {
    if (a.Ea) return !0;
    if (!ic) {
      var c = b || aa("window.event"),
        d = new Sb(c, this),
        e = !0;
      if (!(0 > c.keyCode || void 0 != c.returnValue)) {
        a: {
          var f = !1;
          if (0 == c.keyCode)
            try {
              c.keyCode = -1;
              break a;
            } catch (x) {
              f = !0;
            }
          if (f || void 0 == c.returnValue) c.returnValue = !0;
        }
        c = [];
        for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
        for (var f = a.type, h = c.length - 1; !d.wa && 0 <= h; h--) {
          d.currentTarget = c[h];
          var k = oc(c[h], f, !0, d),
            e = e && k;
        }
        for (h = 0; !d.wa && h < c.length; h++)
          (d.currentTarget = c[h]), (k = oc(c[h], f, !1, d)), (e = e && k);
      }
      return e;
    }
    return nc(a, new Sb(b, this));
  };
  cc = function (a) {
    a = a[dc];
    return a instanceof Yb ? a : null;
  };
  ac = function (a) {
    if (t(a)) return a;
    a[pc] ||
      (a[pc] = function (b) {
        return a.handleEvent(b);
      });
    return a[pc];
  };
  qc = function (a) {
    a = String(a);
    if (
      /^\s*$/.test(a)
        ? 0
        : /^[\],:{}\s\u2028\u2029]*$/.test(
            a
              .replace(/\\["\\\/bfnrtu]/g, "@")
              .replace(
                /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                "]"
              )
              .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
          )
    )
      try {
        return eval("(" + a + ")");
      } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  };
  rc = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  };
  uc = function (a, b, c) {
    var d = sc[c];
    if (!d) {
      var e = wa(c),
        d = e;
      void 0 === a.style[e] &&
        ((e =
          (ab ? "Webkit" : Za ? "Moz" : D ? "ms" : tc ? "O" : null) + xa(e)),
        void 0 !== a.style[e] && (d = e));
      sc[c] = d;
    }
    (c = d) && (a.style[c] = b);
  };
  vc = function (a, b) {
    var c = ub(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (c = c.defaultView.getComputedStyle(a, null))
      ? c[b] || c.getPropertyValue(b) || ""
      : "";
  };
  wc = function (a) {
    var b;
    try {
      b = a.getBoundingClientRect();
    } catch (c) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
    D &&
      a.ownerDocument.body &&
      ((a = a.ownerDocument),
      (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
      (b.top -= a.documentElement.clientTop + a.body.clientTop));
    return b;
  };
  xc = function (a) {
    if (1 == a.nodeType) return (a = wc(a)), new F(a.left, a.top);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new F(a.clientX, a.clientY);
  };
  yc = function (a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = ab && !b && !c;
    return (l(b) && !d) || !a.getBoundingClientRect
      ? new nb(b, c)
      : ((a = wc(a)), new nb(a.right - a.left, a.bottom - a.top));
  };
  Bc = function (a) {
    var b = ub(a),
      c = new F(0, 0),
      d;
    d = b ? ub(b) : window.document;
    var e;
    (e = !D || 9 <= Number(zc)) ||
      (e =
        "CSS1Compat" ==
        (d ? new Ib(ub(d)) : Ac || (Ac = new Ib())).O.compatMode);
    a != (e ? d.documentElement : d.body) &&
      ((d = wc(a)),
      (e = (b ? new Ib(ub(b)) : Ac || (Ac = new Ib())).O),
      (b = e.scrollingElement
        ? e.scrollingElement
        : ab || "CSS1Compat" != e.compatMode
        ? e.body || e.documentElement
        : e.documentElement),
      (e = e.parentWindow || e.defaultView),
      (b =
        D && E("10") && e.pageYOffset != b.scrollTop
          ? new F(b.scrollLeft, b.scrollTop)
          : new F(e.pageXOffset || b.scrollLeft, e.pageYOffset || b.scrollTop)),
      (c.x = d.left + b.x),
      (c.y = d.top + b.y));
    (d = vc(a, "display")) ||
      (d = a.currentStyle ? a.currentStyle.display : null);
    if ("none" != (d || (a.style && a.style.display))) a = yc(a);
    else {
      d = a.style;
      b = d.display;
      e = d.visibility;
      var f = d.position;
      d.visibility = "hidden";
      d.position = "absolute";
      d.display = "inline";
      a = yc(a);
      d.display = b;
      d.position = f;
      d.visibility = e;
    }
    return new rc(c.x, c.y, a.width, a.height);
  };
  Cc = function (a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0;
  };
  Dc = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  Ec = function (a, b, c) {
    this.Qe = c;
    this.Be = a;
    this.df = b;
    this.Hb = 0;
    this.Db = null;
  };
  Fc = function () {
    this.$b = this.Ha = null;
  };
  Gc = function () {
    this.next = this.scope = this.yb = null;
  };
  Hc = function (a) {
    return function () {
      throw Error(a);
    };
  };
  Ic = function (a) {
    m.setTimeout(function () {
      throw a;
    }, 0);
  };
  Jc = function () {
    var a = m.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !C("Presto") &&
      (a = function () {
        var a = window.document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        window.document.documentElement.appendChild(a);
        var b = a.contentWindow,
          a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(),
          d =
            "file:" == b.location.protocol
              ? "*"
              : b.location.protocol + "//" + b.location.host,
          a = u(function (a) {
            if (("*" == d || a.origin == d) && a.data == c)
              this.port1.onmessage();
          }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            b.postMessage(c, d);
          },
        };
      });
    if ("undefined" !== typeof a && !Ua()) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (l(c.next)) {
          c = c.next;
          var a = c.kd;
          c.kd = null;
          a();
        }
      };
      return function (a) {
        d.next = { kd: a };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof window.document &&
      "onreadystatechange" in window.document.createElement("SCRIPT")
      ? function (a) {
          var b = window.document.createElement("SCRIPT");
          b.onreadystatechange = function () {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null;
          };
          window.document.documentElement.appendChild(b);
        }
      : function (a) {
          m.setTimeout(a, 0);
        };
  };
  Oc = function (a, b) {
    Kc || Lc();
    Mc || (Kc(), (Mc = !0));
    Nc.add(a, b);
  };
  Lc = function () {
    if (m.Promise && m.Promise.resolve) {
      var a = m.Promise.resolve(void 0);
      Kc = function () {
        a.then(Pc);
      };
    } else
      Kc = function () {
        var a = Pc;
        !t(m.setImmediate) ||
        (m.Window &&
          m.Window.prototype &&
          !C("Edge") &&
          m.Window.prototype.setImmediate == m.setImmediate)
          ? (Qc || (Qc = Jc()), Qc(a))
          : m.setImmediate(a);
      };
  };
  Pc = function () {
    for (var a = null; (a = Nc.remove()); ) {
      try {
        a.yb.call(a.scope);
      } catch (b) {
        Ic(b);
      }
      Rc.put(a);
    }
    Mc = !1;
  };
  N = function (a, b) {
    this.N = Sc;
    this.aa = void 0;
    this.za = this.ea = this.v = null;
    this.Bb = this.sc = !1;
    if (a != ba)
      try {
        var c = this;
        a.call(
          b,
          function (a) {
            Tc(c, Uc, a);
          },
          function (a) {
            Tc(c, M, a);
          }
        );
      } catch (d) {
        Tc(this, M, d);
      }
  };
  Vc = function () {
    this.next = this.context = this.Ca = this.Xa = this.la = null;
    this.mb = !1;
  };
  Xc = function (a, b, c) {
    var d = Wc.get();
    d.Xa = a;
    d.Ca = b;
    d.context = c;
    return d;
  };
  Yc = function (a, b) {
    if (a.N == Sc)
      if (a.v) {
        var c = a.v;
        if (c.ea) {
          for (
            var d = 0, e = null, f = null, h = c.ea;
            h && (h.mb || (d++, h.la == a && (e = h), !(e && 1 < d)));
            h = h.next
          )
            e || (f = h);
          e &&
            (c.N == Sc && 1 == d
              ? Yc(c, b)
              : (f
                  ? ((d = f),
                    d.next == c.za && (c.za = d),
                    (d.next = d.next.next))
                  : Zc(c),
                $c(c, e, M, b)));
        }
        a.v = null;
      } else Tc(a, M, b);
  };
  bd = function (a, b) {
    a.ea || (a.N != Uc && a.N != M) || ad(a);
    a.za ? (a.za.next = b) : (a.ea = b);
    a.za = b;
  };
  dd = function (a, b, c, d) {
    var e = Xc(null, null, null);
    e.la = new N(function (a, h) {
      e.Xa = b
        ? function (c) {
            try {
              var e = b.call(d, c);
              a(e);
            } catch (H) {
              h(H);
            }
          }
        : a;
      e.Ca = c
        ? function (b) {
            try {
              var e = c.call(d, b);
              !l(e) && b instanceof cd ? h(b) : a(e);
            } catch (H) {
              h(H);
            }
          }
        : h;
    });
    e.la.v = a;
    bd(a, e);
    return e.la;
  };
  Tc = function (a, b, c) {
    if (a.N == Sc) {
      a == c &&
        ((b = M), (c = new TypeError("Promise cannot resolve to itself")));
      a.N = 1;
      var d;
      a: {
        var e = c,
          f = a.pf,
          h = a.qf;
        if (e instanceof N) bd(e, Xc(f || ba, h || null, a)), (d = !0);
        else if (Dc(e)) e.then(f, h, a), (d = !0);
        else {
          if (ea(e))
            try {
              var k = e.then;
              if (t(k)) {
                ed(e, k, f, h, a);
                d = !0;
                break a;
              }
            } catch (x) {
              h.call(a, x);
              d = !0;
              break a;
            }
          d = !1;
        }
      }
      d ||
        ((a.aa = c),
        (a.N = b),
        (a.v = null),
        ad(a),
        b != M || c instanceof cd || fd(a, c));
    }
  };
  ed = function (a, b, c, d, e) {
    function f(a) {
      k || ((k = !0), d.call(e, a));
    }
    function h(a) {
      k || ((k = !0), c.call(e, a));
    }
    var k = !1;
    try {
      b.call(a, h, f);
    } catch (x) {
      f(x);
    }
  };
  ad = function (a) {
    a.sc || ((a.sc = !0), Oc(a.xb, a));
  };
  Zc = function (a) {
    var b = null;
    a.ea && ((b = a.ea), (a.ea = b.next), (b.next = null));
    a.ea || (a.za = null);
    return b;
  };
  $c = function (a, b, c, d) {
    if (c == M && b.Ca && !b.mb) for (; a && a.Bb; a = a.v) a.Bb = !1;
    if (b.la) (b.la.v = null), gd(b, c, d);
    else
      try {
        b.mb ? b.Xa.call(b.context) : gd(b, c, d);
      } catch (e) {
        hd.call(null, e);
      }
    Wc.put(b);
  };
  gd = function (a, b, c) {
    b == Uc ? a.Xa.call(a.context, c) : a.Ca && a.Ca.call(a.context, c);
  };
  fd = function (a, b) {
    a.Bb = !0;
    Oc(function () {
      a.Bb && hd.call(null, b);
    });
  };
  cd = function (a) {
    y.call(this, a);
  };
  O = function () {
    J.call(this);
    this.P = new Yb(this);
    this.se = this;
    this.Nc = null;
  };
  id = function (a, b, c, d) {
    b = a.P.w[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var h = b[f];
      if (h && !h.Ea && h.Ia == c) {
        var k = h.listener,
          x = h.Cb || h.src;
        h.qb && Zb(a.P, h);
        e = !1 !== k.call(x, d) && e;
      }
    }
    return e && 0 != d.Xd;
  };
  jd = function (a, b, c) {
    if (t(a)) c && (a = u(a, c));
    else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : m.setTimeout(a, b || 0);
  };
  kd = function (a) {
    if (a.J && "function" == typeof a.J) return a.J();
    if (q(a)) return a.split("");
    if (p(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return Oa(a);
  };
  ld = function (a) {
    if (a.I && "function" == typeof a.I) return a.I();
    if (!a.J || "function" != typeof a.J) {
      if (p(a) || q(a)) {
        var b = [];
        a = a.length;
        for (var c = 0; c < a; c++) b.push(c);
        return b;
      }
      return Pa(a);
    }
  };
  md = function (a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (p(a) || q(a)) Xa(a, b, c);
    else
      for (var d = ld(a), e = kd(a), f = e.length, h = 0; h < f; h++)
        b.call(c, e[h], d && d[h], a);
  };
  nd = function () {};
  pd = function (a) {
    if (a instanceof nd) return a;
    if ("function" == typeof a.cc) return a.cc(!1);
    if (p(a)) {
      var b = 0,
        c = new nd();
      c.next = function () {
        for (;;) {
          if (b >= a.length) throw od;
          if (b in a) return a[b++];
          b++;
        }
      };
      return c;
    }
    throw Error("Not implemented");
  };
  qd = function (a, b) {
    if (p(a))
      try {
        Xa(a, b, void 0);
      } catch (c) {
        if (c !== od) throw c;
      }
    else {
      a = pd(a);
      try {
        for (;;) b.call(void 0, a.next(), void 0, a);
      } catch (c) {
        if (c !== od) throw c;
      }
    }
  };
  rd = function (a, b) {
    this.L = {};
    this.i = [];
    this.jb = this.j = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else a && this.addAll(a);
  };
  td = function (a) {
    if (a.j != a.i.length) {
      for (var b = 0, c = 0; b < a.i.length; ) {
        var d = a.i[b];
        sd(a.L, d) && (a.i[c++] = d);
        b++;
      }
      a.i.length = c;
    }
    if (a.j != a.i.length) {
      for (var e = {}, c = (b = 0); b < a.i.length; )
        (d = a.i[b]), sd(e, d) || ((a.i[c++] = d), (e[d] = 1)), b++;
      a.i.length = c;
    }
  };
  sd = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  ud = function (a, b) {
    if (a)
      for (var c = a.split("\x26"), d = 0; d < c.length; d++) {
        var e = c[d].indexOf("\x3d"),
          f = null,
          h = null;
        0 <= e
          ? ((f = c[d].substring(0, e)), (h = c[d].substring(e + 1)))
          : (f = c[d]);
        b(f, h ? (0, window.decodeURIComponent)(h.replace(/\+/g, " ")) : "");
      }
  };
  vd = function (a, b, c) {
    if (n(b)) for (var d = 0; d < b.length; d++) vd(a, String(b[d]), c);
    else
      null != b &&
        c.push(
          "\x26",
          a,
          "" === b ? "" : "\x3d",
          (0, window.encodeURIComponent)(String(b))
        );
  };
  wd = function (a) {
    var b = [],
      c;
    for (c in a) vd(c, a[c], b);
    b[0] = "";
    return b.join("");
  };
  xd = function (a, b, c) {
    this.j = this.l = null;
    this.H = a || null;
    this.Ne = !!c;
  };
  yd = function (a) {
    a.l ||
      ((a.l = new rd()),
      (a.j = 0),
      a.H &&
        ud(a.H, function (b, c) {
          a.add((0, window.decodeURIComponent)(b.replace(/\+/g, " ")), c);
        }));
  };
  Ad = function (a) {
    var b = ld(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    var c = new xd(null, 0, void 0);
    a = kd(a);
    for (var d = 0; d < b.length; d++) {
      var e = b[d],
        f = a[d];
      if (n(f)) {
        var h = c;
        h.remove(e);
        0 < f.length &&
          ((h.H = null), h.l.set(zd(h, e), Da(f)), (h.j += f.length));
      } else c.add(e, f);
    }
    return c;
  };
  zd = function (a, b) {
    var c = String(b);
    a.Ne && (c = c.toLowerCase());
    return c;
  };
  z.P = function (a, b) {
    null != a || (a = []);
    if (a.constructor == z.P) return new Bd(Cd(a));
    q(b) && (b = Dd(b)[0]);
    a.constructor == window.document.createDocumentFragment().constructor &&
      a.childNodes.length &&
      (a = Da(a.childNodes));
    if (a.nodeType) a = [a];
    else {
      if (q(a))
        if ("\x3c" == a.replace(/^[\s\xa0]+/, "").charAt(0)) {
          var c = a,
            d = window.document,
            e = d.createElement("DIV");
          D
            ? ((e.innerHTML = "\x3cbr\x3e" + c), e.removeChild(e.firstChild))
            : (e.innerHTML = c);
          if (1 == e.childNodes.length) e = e.removeChild(e.firstChild);
          else {
            for (c = d.createDocumentFragment(); e.firstChild; )
              c.appendChild(e.firstChild);
            e = c;
          }
          a = e;
          a =
            a.constructor ==
              window.document.createDocumentFragment().constructor &&
            a.childNodes.length
              ? Da(a.childNodes)
              : [a];
        } else a = Dd(a, b);
      a || (a = []);
    }
    "object" === typeof a && "setInterval" in a ? (a = [a]) : p(a) || (a = [a]);
    return new Bd(a);
  };
  Bd = function (a) {
    for (var b = 0; b < a.length; b++) this[b] = a[b];
    this.length = a.length;
    return this;
  };
  Fd = function (a) {
    Ed = a;
  };
  Dd = function (a, b) {
    "-" == a.charAt(0) && (a = "." + a.substring(1));
    b && b.constructor === z.P && (b = b[0]);
    if (Ed) return Ed(a, b);
    var c;
    b = b || window.document;
    if (b.querySelectorAll)
      c = b.querySelectorAll(0 <= a.indexOf(":") ? a.replace(/\:.*/, "") : a);
    else if ("." == a.charAt(0)) {
      c = a.substring(1).replace(/[\:\s].*/, "");
      var d = b || window.document;
      c =
        (d.querySelectorAll && d.querySelector
          ? d.querySelectorAll("." + c)
          : ob("*", c, b)) || [];
    } else
      "#" == a.charAt(0)
        ? ((c = window.document), (c = [q(a) ? c.getElementById(a) : a]))
        : ((c = a.replace(/\s.*/, "")),
          (d = a.replace(/.*\./, "").replace(/[\:\s].*/, "") || null),
          (c = ob(c, d, b)));
    return 0 <= a.indexOf(":") ? Bb(c, Gd[a.substring(a.indexOf(":") + 1)]) : c;
  };
  Hd = function (a, b) {
    b && "-" == b.charAt(0) && (b = "." + b.substring(1));
    if (!l(b)) return !0;
    if (t(b)) return b(a);
    var c =
      a.webkitMatchesSelector ||
      a.mozMatchesSelector ||
      a.oMatchesSelector ||
      a.matchesSelector;
    if (c) return c.call(a, b);
    c = Dd(b, a.parentNode);
    return A(c, a);
  };
  Id = function (a, b) {
    return Bb(a, b);
  };
  Jd = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      p(d) ? b.push.apply(b, Jd.apply(null, d)) : b.push(d);
    }
    return b;
  };
  z.Q = function (a, b, c) {
    Xa(a, function (a, e) {
      b.call(c || a, a, e);
    });
    return a;
  };
  Cd = function (a) {
    var b = [];
    z.Q(a, function (a) {
      b.push(a);
    });
    return b;
  };
  z.R = function (a, b, c) {
    q(b) && !l(c)
      ? D
        ? a[0].currentStyle && wa(b)
        : vc(a[0], b)
      : z.Q(a, function (a) {
          if (q(b)) uc(a, c, b);
          else for (var e in b) uc(a, b[e], e);
        });
  };
  z.S = function (a, b, c) {
    if (q(b) && !l(c)) return a[0].getAttribute(b);
    if (q(b)) {
      var d = {};
      d[b] = c;
      b = d;
    }
    ea(b) &&
      z.Q(a, function (a) {
        qb(a, b);
      });
    return a;
  };
  z.Kd = function (a, b) {
    return l(b)
      ? z.Q(a, function (a) {
          a.value = b;
        })
      : a[0].value;
  };
  z.T = function (a, b) {
    if (q(b)) {
      var c = b;
      b = function () {
        return c;
      };
    }
    var d = b;
    z.Q(a, function (a) {
      Kb(a, d(a));
    });
  };
  z.U = function (a, b) {
    if (q(b)) {
      var c = b;
      b = function () {
        return c;
      };
    }
    var d = b;
    z.Q(a, function (a) {
      Lb(a, d(a));
    });
  };
  z.Ld = function (a, b) {
    var c;
    if (l(c) && !t(c)) {
      var d = c;
      c = function () {
        return d;
      };
    }
    var e = c;
    z.Q(a, function (a) {
      l(c) ? (e(a) ? Kb(a, b) : Lb(a, b)) : z.G(a, b) ? Lb(a, b) : Kb(a, b);
    });
  };
  Md = function (a) {
    var b = z.P(
      V('\x3cdiv class\x3d"headerslider-padding"\x3e\x3c/div\x3e').toString()
    );
    if (a.size()) {
      var b = z.P(b),
        c = window.document.createDocumentFragment();
      z.Q(b, function (a) {
        vb(c, a);
      });
      1 == a.size()
        ? yb(c, a[0])
        : z.Q(a, function (a) {
            yb(c.cloneNode(!0), a);
          });
    }
  };
  Nd = function (a, b) {
    if (a.size()) {
      b = z.P(b);
      var c = window.document.createDocumentFragment();
      z.Q(b, function (a) {
        vb(c, a);
      });
      1 == a.size()
        ? xb(c, a[0])
        : z.Q(a, function (a) {
            xb(c.cloneNode(!0), a);
          });
    }
  };
  Od = function (a, b) {
    if (b)
      if (
        (t(b) &&
          z.Q(a, function (a) {
            vb(a, b(a));
          }),
        b.nodeType)
      )
        a.empty(),
          z.Q(a, function (a) {
            vb(a, b.cloneNode(!0));
          });
      else if (q(b))
        z.Q(a, function (a) {
          a.innerHTML = b;
        });
      else {
        var c = z.P(b).outerHTML();
        z.Q(a, function (a) {
          a.innerHTML = c;
        });
      }
    else a.get(0);
  };
  Pd = function (a) {
    var b = !1;
    z.Q(z.P(Jd(a)), function (a) {
      b = lc(a) || b;
    });
  };
  Qd = function (a) {
    var b;
    z.Q(a, function (a) {
      b ||
        ((b = window.document.createEvent("UIEvents")),
        b.initUIEvent("click", !0, !0, window, 1));
      a.dispatchEvent(b);
    });
  };
  Rd = function (a, b) {
    z.Q(a, function (a) {
      a.removeAttribute(b);
    });
  };
  Sd = function (a, b, c) {
    J.call(this);
    this.Ic = a;
    this.Pe = b || 0;
    this.R = c;
    this.we = u(this.De, this);
  };
  Td = function (a, b) {
    O.call(this);
    this.$c = a;
    this.vb = this.$c.Pa();
    this.ef = b || 100;
    this.Ua = L(a, "resize", this.xc, !1, this);
  };
  Ud = function (a) {
    O.call(this);
    this.Zb = a || window;
    this.Ua = L(this.Zb, "resize", this.xc, !1, this);
    this.eb = rb(this.Zb || window);
  };
  Vd = function (a) {
    this.Ue = a;
    this.ic = this.v = null;
  };
  Wd = function (a, b) {
    this.name = a;
    this.value = b;
  };
  Zd = function () {
    Xd || ((Xd = new Vd("")), (Yd[""] = Xd));
  };
  $d = function (a) {
    Zd();
    var b;
    if (!(b = Yd[a])) {
      b = new Vd(a);
      var c = a.lastIndexOf("."),
        d = a.substr(c + 1),
        c = $d(a.substr(0, c));
      c.yd()[d] = b;
      b.v = c;
      Yd[a] = b;
    }
    return b;
  };
  ae = function (a) {
    J.call(this);
    this.Fd = 1;
    this.Jb = [];
    this.Lb = 0;
    this.F = [];
    this.T = {};
    this.ue = Boolean(a);
  };
  be = function (a, b, c) {
    Oc(function () {
      a.apply(b, c);
    });
  };
  ce = function (a) {
    J.call(this);
    this.R = a;
    this.i = {};
  };
  de = function (a, b, c, d, e, f) {
    if (n(c)) for (var h = 0; h < c.length; h++) de(a, b, c[h], d, e, f);
    else {
      b = jc(b, c, d || a.handleEvent, e, f || a.R || a);
      if (!b) return a;
      a.i[b.key] = b;
    }
    return a;
  };
  ee = function (a) {
    J.call(this);
    this.Fa = a;
    this.Ob = [];
  };
  fe = function () {};
  he = function (a) {
    var b;
    (b = a.jd) ||
      ((b = {}), ge(a) && ((b[0] = !0), (b[1] = !0)), (b = a.jd = b));
    return b;
  };
  ie = function () {};
  je = function (a) {
    return (a = ge(a))
      ? new window.ActiveXObject(a)
      : new window.XMLHttpRequest();
  };
  ge = function (a) {
    if (
      !a.Bd &&
      "undefined" == typeof window.XMLHttpRequest &&
      "undefined" != typeof window.ActiveXObject
    ) {
      for (
        var b = [
            "MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP",
            "Microsoft.XMLHTTP",
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c];
        try {
          return new window.ActiveXObject(d), (a.Bd = d);
        } catch (e) {}
      }
      throw Error(
        "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
      );
    }
    return a.Bd;
  };
  le = function (a) {
    O.call(this);
    this.headers = new rd();
    this.bc = a || null;
    this.da = !1;
    this.ac = this.c = null;
    this.ra = this.Gc = "";
    this.pa = this.Bc = this.Eb = this.oc = !1;
    this.Vb = 0;
    this.Ub = null;
    this.Wd = ke;
    this.Xc = this.af = this.ad = !1;
  };
  ne = function (a, b) {
    var c = new le();
    me.push(c);
    b && c.sa("complete", b);
    c.Hc("ready", c.xe);
    c.ad = !0;
    c.send(a, "GET", null, null);
  };
  oe = function (a) {
    return D && E(9) && r(a.timeout) && l(a.ontimeout);
  };
  pe = function (a) {
    return "content-type" == a.toLowerCase();
  };
  qe = function (a) {
    a.oc ||
      ((a.oc = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
  };
  we = function (a) {
    if (
      a.da &&
      "undefined" != typeof re &&
      (!a.ac[1] || 4 != se(a) || 2 != te(a))
    )
      if (a.Eb && 4 == se(a)) jd(a.Sd, 0, a);
      else if ((a.dispatchEvent("readystatechange"), 4 == se(a))) {
        a.da = !1;
        try {
          if (ue(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            var b;
            try {
              b = 2 < se(a) ? a.c.statusText : "";
            } catch (c) {
              b = "";
            }
            a.ra = b + " [" + te(a) + "]";
            qe(a);
          }
        } finally {
          ve(a);
        }
      }
  };
  xe = function (a, b) {
    return {
      type: b,
      lengthComputable: a.lengthComputable,
      loaded: a.loaded,
      total: a.total,
    };
  };
  ve = function (a, b) {
    if (a.c) {
      ye(a);
      var c = a.c,
        d = a.ac[0] ? ba : null;
      a.c = null;
      a.ac = null;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {}
    }
  };
  ye = function (a) {
    a.c && a.Xc && (a.c.ontimeout = null);
    r(a.Ub) && (m.clearTimeout(a.Ub), (a.Ub = null));
  };
  ue = function (a) {
    var b = te(a),
      c;
    a: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        c = !0;
        break a;
      default:
        c = !1;
    }
    if (!c) {
      if ((b = 0 === b))
        (a = String(a.Gc).match(ze)[1] || null),
          !a &&
            m.self &&
            m.self.location &&
            ((a = m.self.location.protocol), (a = a.substr(0, a.length - 1))),
          (b = !Ae.test(a ? a.toLowerCase() : ""));
      c = b;
    }
    return c;
  };
  se = function (a) {
    return a.c ? a.c.readyState : 0;
  };
  te = function (a) {
    try {
      return 2 < se(a) ? a.c.status : -1;
    } catch (b) {
      return -1;
    }
  };
  Be = function (a) {
    try {
      return a.c ? a.c.responseText : "";
    } catch (b) {
      return "";
    }
  };
  Ce = function (a) {
    if (a.c) return qc(a.c.responseText);
  };
  De = function (a) {
    O.call(this);
    this.Aa = new ee(a);
    this.oa = new ce(this);
  };
  W = function (a, b) {
    this.Pb = [];
    this.Qd = a;
    this.pd = b || null;
    this.Qa = this.ga = !1;
    this.aa = void 0;
    this.Tc = this.ve = this.ec = !1;
    this.Wb = 0;
    this.v = null;
    this.fc = 0;
  };
  Fe = function (a, b, c) {
    a.ga = !0;
    a.aa = c;
    a.Qa = !b;
    Ee(a);
  };
  He = function (a) {
    if (a.ga) {
      if (!a.Tc) throw new Ge();
      a.Tc = !1;
    }
  };
  Ie = function (a, b, c, d) {
    a.Pb.push([b, c, d]);
    a.ga && Ee(a);
  };
  Ke = function (a) {
    return Je(a.Pb, function (a) {
      return t(a[1]);
    });
  };
  Ee = function (a) {
    if (a.Wb && a.ga && Ke(a)) {
      var b = a.Wb,
        c = Le[b];
      c && (m.clearTimeout(c.K), delete Le[b]);
      a.Wb = 0;
    }
    a.v && (a.v.fc--, delete a.v);
    for (var b = a.aa, d = (c = !1); a.Pb.length && !a.ec; ) {
      var e = a.Pb.shift(),
        f = e[0],
        h = e[1],
        e = e[2];
      if ((f = a.Qa ? h : f))
        try {
          var k = f.call(e || a.pd, b);
          l(k) &&
            ((a.Qa = a.Qa && (k == b || k instanceof Error)), (a.aa = b = k));
          if (
            Dc(b) ||
            ("function" === typeof m.Promise && b instanceof m.Promise)
          )
            (d = !0), (a.ec = !0);
        } catch (x) {
          (b = x), (a.Qa = !0), Ke(a) || (c = !0);
        }
    }
    a.aa = b;
    d &&
      ((k = u(a.md, a, !0)),
      (d = u(a.md, a, !1)),
      b instanceof W ? (Ie(b, k, d), (b.ve = !0)) : b.then(k, d));
    c && ((b = new Me(b)), (Le[b.K] = b), (a.Wb = b.K));
  };
  Ge = function () {
    y.call(this);
  };
  Ne = function () {
    y.call(this);
  };
  Me = function (a) {
    this.K = m.setTimeout(u(this.mf, this), 0);
    this.wb = a;
  };
  Qe = function (a) {
    if (a.length) {
      var b = Oe.length;
      Ea(Oe, a);
      if (!b) {
        a = Oe;
        var c = function () {
          var b = a.shift(),
            b = Pe(b);
          a.length && Ie(b, c, c, void 0);
          return b;
        };
        c();
      }
    } else new W().ya(null);
  };
  Pe = function (a) {
    var b = {},
      c = b.document || window.document,
      d = window.document.createElement("SCRIPT"),
      e = { Yd: d, hb: void 0 },
      f = new W(Re, e),
      h = null,
      k = null != b.timeout ? b.timeout : 5e3;
    0 < k &&
      ((h = window.setTimeout(function () {
        Se(d, !0);
        var b = new Te(Ue, "Timeout reached for loading script " + a);
        He(f);
        Fe(f, !1, b);
      }, k)),
      (e.hb = h));
    d.onload = d.onreadystatechange = function () {
      (d.readyState &&
        "loaded" != d.readyState &&
        "complete" != d.readyState) ||
        (Se(d, b.vf || !1, h), f.ya(null));
    };
    d.onerror = function () {
      Se(d, !0, h);
      var b = new Te(Ve, "Error while loading script " + a);
      He(f);
      Fe(f, !1, b);
    };
    e = b.attributes || {};
    Sa(e, { type: "text/javascript", charset: "UTF-8", src: a });
    qb(d, e);
    We(c).appendChild(d);
    return f;
  };
  We = function (a) {
    var b = a.getElementsByTagName("HEAD");
    return b && 0 != b.length ? b[0] : a.documentElement;
  };
  Re = function () {
    if (this && this.Yd) {
      var a = this.Yd;
      a && "SCRIPT" == a.tagName && Se(a, !0, this.hb);
    }
  };
  Se = function (a, b, c) {
    null != c && m.clearTimeout(c);
    a.onload = ba;
    a.onerror = ba;
    a.onreadystatechange = ba;
    b &&
      window.setTimeout(function () {
        zb(a);
      }, 0);
  };
  Te = function (a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    y.call(this, c);
    this.code = a;
  };
  Xe = function () {
    O.call(this);
    this.oa = new ce(this);
    this.Z = {};
  };
  bf = function (a, b) {
    a.dispatchEvent(new Ye());
    var c = a.Z[b],
      d = c.Vd,
      e = c.Sc,
      f = null;
    try {
      if (a.de || (a.mc && (Ze || (C("Firefox") && 0 <= va(Ya(), "36")))))
        for (var h = 0; h < d.length; h++)
          ka(e[h] + " //@ sourceURL\x3d" + d[h]);
      else ka(e.join("\n"));
    } catch (k) {
      f = k;
    }
    a.dispatchEvent(new $e());
    f
      ? ((c = c.pc), a.dispatchEvent(new af(0, f)), c && c(null))
      : c.Uc && c.Uc();
    delete a.Z[b];
  };
  $e = function () {
    K.call(this, cf);
  };
  Ye = function () {
    K.call(this, df);
  };
  af = function (a, b) {
    K.call(this, ef);
    this.error = b || null;
  };
  ff = function () {
    this.Sc = this.Vd = null;
    this.Kd = !1;
    this.pc = this.Uc = null;
  };
  gf = function (a, b) {
    J.call(this);
    this.rd = this.nd = null;
    this.Nd = b;
    this.Ma = [];
    if (a > this.Nd)
      throw Error(
        "[goog.structs.SimplePool] Initial cannot be greater than max"
      );
    for (var c = 0; c < a; c++) this.Ma.push(this.ub());
  };
  hf = function (a, b) {
    a.Ma.length < a.Nd ? a.Ma.push(b) : a.nc(b);
  };
  lf = function () {
    this.Ka = [];
    this.Mc = new rd();
    this.je = this.ke = this.le = this.ee = 0;
    this.gb = new rd();
    this.ld = this.ie = 0;
    this.Ve = 1;
    this.qc = new gf(0, 4e3);
    this.qc.ub = function () {
      return new jf();
    };
    this.fe = new gf(0, 50);
    this.fe.ub = function () {
      return new kf();
    };
    var a = this;
    this.Ac = new gf(0, 2e3);
    this.Ac.ub = function () {
      return String(a.Ve++);
    };
    this.Ac.nc = function () {};
  };
  kf = function () {
    this.Yc = this.time = this.count = 0;
  };
  jf = function () {};
  of = function (a, b, c, d) {
    var e = [];
    -1 == c ? e.push("    ") : e.push(mf(a.vd - c));
    e.push(" ", nf(a.vd - b));
    0 == a.rc
      ? e.push(" Start        ")
      : 1 == a.rc
      ? (e.push(" Done "), e.push(mf(a.zf - a.startTime), " ms "))
      : e.push(" Comment      ");
    e.push(d, a);
    0 < a.nf && e.push("[VarAlloc ", a.nf, "] ");
    return e.join("");
  };
  mf = function (a) {
    a = Math.round(a);
    var b = "";
    1e3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a;
  };
  nf = function (a) {
    a = Math.round(a);
    return (
      String(100 + ((a / 1e3) % 60)).substring(1, 3) +
      "." +
      String(1e3 + (a % 1e3)).substring(1, 4)
    );
  };
  pf = function () {
    J.call(this);
  };
  qf = function (a, b) {
    this.zb = a;
    this.R = b;
  };
  rf = function (a, b) {
    J.call(this);
    this.qd = a;
    this.K = b;
    this.Lc = [];
    this.Kc = [];
    this.td = [];
  };
  sf = function (a, b) {
    a.Nb(a.Kc, b, void 0);
  };
  uf = function (a, b) {
    var c = new a.Se();
    b();
    a.ta = c;
    c = (c = !!tf(a.td, b())) || !!tf(a.Lc, b());
    c || (a.Kc.length = 0);
    return c;
  };
  vf = function (a, b) {
    var c = tf(a.Kc, b);
    c && window.setTimeout(Hc("Module errback failures: " + c), 0);
    a.td.length = 0;
    a.Lc.length = 0;
  };
  tf = function (a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      try {
        a[d].wd(b);
      } catch (e) {
        Ic(e), c.push(e);
      }
    a.length = 0;
    return c.length ? c : null;
  };
  z.X = function () {
    J.call(this);
    this.A = {};
    this.ha = [];
    this.$ = [];
    this.$a = [];
    this.C = [];
    this.Ga = [];
    this.rb = {};
    this.od = this.ob = new rf([], "");
    this.Id = null;
    this.Ta = new W();
    this.ze = this.hd = !1;
    this.Jc = null;
    this.sb = 0;
    this.me = this.Gd = !1;
    this.Od = null;
  };
  zf = function (a) {
    var b = m.PLOVR_MODULE_INFO,
      c;
    for (c in b) a.A[c] = new rf(b[c], c);
    a.Ta.ga || a.Ta.ya();
    a.od == a.ob && ((a.od = null), uf(a.ob, u(a.zd, a)) && wf(a, xf), yf(a));
  };
  Af = function (a) {
    var b = m.PLOVR_MODULE_URIS,
      c;
    for (c in b) a.A[c].Fa = b[c];
  };
  yf = function (a) {
    var b = a.Fb();
    b != a.Gd && (a.xb(b ? "active" : "idle"), (a.Gd = b));
    b = 0 < a.Ga.length;
    b != a.me && (a.xb(b ? "userActive" : "userIdle"), (a.me = b));
  };
  Df = function (a, b, c, d, e) {
    c.Mb(e.ya, e);
    sf(c, function (a) {
      a = Error(a);
      He(e);
      Fe(e, !1, a);
    });
    Bf(a, b) ? d && (Cf(a, b), yf(a)) : d && Cf(a, b);
  };
  Ef = function (a, b) {
    if (a.ze) {
      var c = u(a.Gb, a, b);
      Ie(a.Ta, c, null, void 0);
    } else 0 == a.ha.length ? a.Gb(b) : (a.C.push(b), yf(a));
  };
  Hf = function (a, b) {
    for (var c = 0; c < b.length; c++)
      if (a.A[b[c]].ta) throw Error("Module already loaded: " + b[c]);
    for (var d = [], c = 0; c < b.length; c++) d = d.concat(Ff(a, b[c]));
    Ha(d);
    return !a.hd && 1 < d.length
      ? ((c = d.shift()),
        (a.C = Gf(d, function (a) {
          return [a];
        }).concat(a.C)),
        [c])
      : d;
  };
  Ff = function (a, b) {
    var c = [];
    A(a.$a, b) || c.push(b);
    for (var d = Da(a.A[b].qd); d.length; ) {
      var e = d.pop();
      a.A[e].ta ||
        A(a.$a, e) ||
        (c.unshift(e), Array.prototype.unshift.apply(d, a.A[e].qd));
    }
    Ha(c);
    return c;
  };
  z.Jf = function (a, b) {
    a.fa ||
      (uf(a.A[b], u(a.zd, a)) && wf(a, xf),
      B(a.Ga, b),
      B(a.ha, b),
      0 == a.ha.length && If(a),
      a.Id && b == a.Id && (a.Ta.ga || a.Ta.ya()),
      yf(a));
  };
  Bf = function (a, b) {
    if (A(a.ha, b)) return !0;
    for (var c = 0; c < a.C.length; c++) if (A(a.C[c], b)) return !0;
    return !1;
  };
  Kf = function (a, b, c) {
    var d = a.A[b];
    d.ta
      ? ((a = new qf(c, void 0)), window.setTimeout(u(a.wd, a), 0))
      : Bf(a, b)
      ? d.Mb(c, void 0)
      : (d.Mb(c, void 0), Ef(a, [b]));
  };
  Cf = function (a, b) {
    A(a.Ga, b) || a.Ga.push(b);
  };
  Lf = function (a, b) {
    1 < a.$.length
      ? (a.C = Gf(a.$, function (a) {
          return [a];
        }).concat(a.C))
      : wf(a, b);
  };
  wf = function (a, b) {
    var c = a.$;
    a.ha.length = 0;
    for (var d = [], e = 0; e < a.C.length; e++) {
      var f = Bb(
        a.C[e],
        function (a) {
          var b = Ff(this, a);
          return Je(c, function (a) {
            return A(b, a);
          });
        },
        a
      );
      Ea(d, f);
    }
    for (e = 0; e < c.length; e++) Ba(d, c[e]);
    for (e = 0; e < d.length; e++) {
      for (f = 0; f < a.C.length; f++) B(a.C[f], d[e]);
      B(a.Ga, d[e]);
    }
    var h = a.rb.error;
    if (h)
      for (e = 0; e < h.length; e++)
        for (var k = h[e], f = 0; f < d.length; f++) k("error", d[f], b);
    for (e = 0; e < c.length; e++) a.A[c[e]] && vf(a.A[c[e]], b);
    a.$.length = 0;
    yf(a);
  };
  If = function (a) {
    for (; a.C.length; ) {
      var b = Bb(
        a.C.shift(),
        function (a) {
          return !this.A[a].ta;
        },
        a
      );
      if (0 < b.length) {
        a.Gb(b);
        return;
      }
    }
    yf(a);
  };
  Mf = function () {
    var a = this;
    this.id = 0;
    this.Ba = [];
    this.Pd = function () {
      return ++a.id;
    };
    this.ia = new ae();
    this.Va = $d("application");
    this.Wa = z.X.W();
    this.Te = new Xe();
    this.Wa.Jc = this.Te;
    zf(this.Wa);
    Af(this.Wa);
    z.Jf(this.Wa, "core");
  };
  Of = function (a) {
    var b = [];
    z.Q(z.P(".mod:not([data-ignore])"), function (a) {
      a = a.className.split(" ");
      for (var c = 0, d = a.length; c < d; c++) {
        var k = a[c].toLowerCase();
        "mod-" === k.substr(0, 4) &&
          ((k = k.substring(4)), -1 === Aa(k, b, void 0) && b.push(k));
      }
    });
    for (var c = 0, d = b.length; c < d; c++) Nf(a, b[c], null);
  };
  Nf = function (a, b, c) {
    var d = aa("potec.modules." + b);
    if (d) {
      var e = !1,
        f = "";
      c && c.contextSelector && (f = c.contextSelector + " ");
      z.Q(z.P(f + ".mod.mod-" + b + ":not([data-ignore])"), function (b) {
        if (!b.hasAttribute("data-init")) {
          var f = new d(z.P(b), a.Pd(), a.ia, c);
          b.setAttribute("data-init", "true");
          a.Ba.push(f);
        }
        e || (e = !0);
      });
      e || ((f = new d(null, a.Pd(), a.ia, c)), a.Ba.push(f));
    } else
      switch (b) {
        case "slideshow":
        case "video":
        case "video2":
        case "mig":
        case "cookielayer":
          Kf(a.Wa, b, function () {
            Pf(Nf(a, b, null), b);
          });
      }
    return a;
  };
  Pf = function (a, b) {
    for (var c = 0, d = a.Ba.length; c < d; c++) {
      var e = a.Ba[c];
      e.getName() === b && e.start();
    }
  };
  Rf = function () {
    this.Ud = Qf();
  };
  Tf = function (a) {
    this.Ze = a || "";
    this.lf = Sf;
  };
  Uf = function (a) {
    return 10 > a ? "0" + a : String(a);
  };
  Vf = function (a, b) {
    var c = (a.He() - b) / 1e3,
      d = c.toFixed(3),
      e = 0;
    if (1 > c) e = 2;
    else for (; 100 > c; ) e++, (c *= 10);
    for (; 0 < e--; ) d = " " + d;
    return d;
  };
  Wf = function (a) {
    Tf.call(this, a);
  };
  Xf = function () {
    u(this.te, this);
    this.Ab = new Wf();
    this.Ab.$d = !1;
    this.Ab.ae = !1;
    this.Dd = this.Ab.ed = !1;
    this.Md = "";
    this.Fe = {};
  };
  Yf = function (a, b, c) {
    if (a[b]) a[b](c);
    else a.log(c);
  };
  Zf = function (a) {
    var b = new Xf();
    1 != b.Dd && (Zd(), (b.Dd = !0));
    $d("start");
    window.MCOM_ASSETS_HOST = "";
    if (
      a &&
      0 < a.length &&
      ((window.MCOM_ASSETS_HOST = a), (b = window.PLOVR_MODULE_URIS))
    )
      for (var c in b) b.hasOwnProperty(c) && (b[c] = a + b[c]);
    try {
      var d = Mf.W();
      Nf(d, "trackingpixel");
      Nf(d, "ad");
      Nf(d, "lazyimg");
      Of(d);
      Nf(d, "konami");
      Nf(d, "promocookiehandler");
      Nf(d, "taboola");
      d.start();
    } catch (e) {}
  };
  $f = function (a, b) {
    Mf.W().sendMessage(a, b);
  };
  ag = function (a) {
    this.O = a;
  };
  cg = function (a) {
    a = (a.O.cookie || "").split(bg);
    for (var b = [], c = [], d, e, f = 0; (e = a[f]); f++)
      (d = e.indexOf("\x3d")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return { keys: b, values: c };
  };
  z.Y = function (a, b, c) {
    this.a = a;
    this.m = null !== a ? a[0] : a;
    this.id = b;
    this.ia = c;
    this.name = "module";
    this.Va = null;
  };
  dg = function (a, b, c, d) {
    var e = new le(),
      f = Ad(new rd(c));
    L(e, "complete", function () {
      if (ue(e)) {
        if (
          (a.log("Ajax request successfully completed."),
          d && "function" === typeof d)
        ) {
          var b = null;
          switch ((void 0).toUpperCase()) {
            case "JSON":
              b = Ce(e);
              break;
            case "XML":
              try {
                b = e.c ? e.c.responseXML : null;
              } catch (c) {
                b = null;
              }
              break;
            default:
              b = Be(e);
          }
          d(b, !0);
        }
      } else a.log("Ajax request error: " + (q(e.ra) ? e.ra : String(e.ra))), d && "function" === typeof d && d(null, !1);
    });
    c && (b = b + "?" + wd(c).replace("%20", "+"));
    e.ad = !0;
    e.send((0, window.encodeURI)(b), "GET", f.toString());
  };
  eg = function (a, b, c) {
    ne(b, function (b) {
      var e = b.target;
      ue(e) && a.Ec(c)
        ? c(e)
        : (a.Ec(null) && null(b), a.log("external REST-Call error!"));
    });
  };
  fg = function (a, b, c) {
    eg(a, b, c);
  };
  z.Z = function (a) {
    var b = !0;
    if ("function" !== typeof window.matchMedia)
      b = "desktop" === a || "large" === a;
    else
      switch (a) {
        case "tablet":
          b = window.matchMedia("(min-width:48em)").matches;
          break;
        case "desktop":
          b = window.matchMedia("(min-width:64em)").matches;
          break;
        case "large":
          b = window.matchMedia("(min-width:80em)").matches;
      }
    return b;
  };
  gg = function (a, b) {
    for (var c in b)
      if (b.hasOwnProperty(c) && ((a[c] = a.a.find(b[c])), 1 > a[c].length))
        return a.log('Required DOM element "' + b[c] + '" was not found!'), !1;
    return !0;
  };
  hg = function (a) {
    a &&
      !window.Modernizr.placeholder &&
      z.Q(a.find(".js-hide-label"), function (b) {
        var c = z.P(b),
          d = a.find('label[for\x3d"' + z.S(c, "id") + '"]');
        0 < d.length &&
          (c.b("focus", function () {
            z.R(d, "visibility", "hidden");
          }),
          c.b("blur", function () {
            0 >= z.Kd(c).length && z.R(d, "visibility", "visible");
          }),
          (0, window.setTimeout)(function () {
            0 < z.Kd(c).length && z.R(d, "visibility", "hidden");
          }, 1e3));
      });
  };
  ig = function (a) {
    a = a.getBoundingClientRect();
    return !(
      0 > a.bottom ||
      0 > a.right ||
      a.left > window.innerWidth ||
      a.top > window.innerHeight
    );
  };
  jg = function (a) {
    window.ui.taboola ||
      (window.ui.taboola = {
        components: [],
        sourceId: a.taboolaSourceId,
        sourceType: a.taboolaSourceType,
        baseUrl: a.taboolaBaseUrl,
      });
    window.ui.taboola.components.push({
      taboolaPlacementName: a.taboolaPlacementName,
      taboolaCount: a.taboolaCount,
    });
  };
  kg = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "ad";
    this.fb = null;
    this.Dc = -1;
  };
  mg = function (a) {
    z.Q(z.P(".ad-container"), function (b) {
      b.hasAttribute("data-adcalled") || lg(a, b);
    });
  };
  lg = function (a, b) {
    if (!b.hasAttribute("data-adcalled")) {
      var c = b.id;
      a.log("Ad-container " + c + " to be filled.");
      window.googletag.cmd.push(function () {
        window.googletag.display(c);
      });
      b.setAttribute("data-adcalled", "true");
    }
  };
  ng = function (a) {
    a.fb = window.document.getElementById("gpt-sky");
    a.fb && (a.Dc = z.P(".content-wrapper")[0].offsetTop + 20);
  };
  og = function (a) {
    a.log("Refreshing ads...");
    var b = window.ui.refreshableAdSlots;
    b &&
      0 < b.length &&
      window.googletag.cmd.push(function () {
        window.googletag.pubads().refresh(b);
      });
  };
  pg = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "article";
    this.Sb = this.he = 0;
    this.tc = this.La = this.zc = this.Za = !1;
  };
  qg = function (a) {
    z.Z("desktop") ? (a.Sb = a.zc ? 90 : 60) : (a.Sb = 0);
    a.he = a.a[0].getBoundingClientRect().height;
    var b = a.a[0].getBoundingClientRect().top;
    b < a.Sb && !a.Za && (a.g("toggleSocialbar", !0), (a.Za = !0));
    b >= a.Sb && a.Za && (a.g("toggleSocialbar", !1), (a.Za = !1));
    a.Za &&
      ((b = Math.abs(b)),
      a.g(
        "readingProgressUpdated",
        (b + window.document.documentElement.clientHeight) / a.he
      ));
  };
  sg = function (a) {
    var b = z.P(".cols .secondary-col"),
      c = a.a.find(".js-expandable");
    a.a.find(".exp-toggle").b("click", function () {
      a.La || rg(a, c, b);
    });
  };
  rg = function (a, b, c) {
    if (a.tc) {
      a.La = !0;
      var d, e;
      d = b.b("transitionend", function () {
        e = c.b("transitionend", function () {
          a.La = !1;
          a.tc = !1;
          a.g("galleryExpanded");
          a.log("Restore finishes...");
          Pd(e);
        });
        a.log("Sidebar goes up...");
        z.R(c, { "padding-top": 0 });
        Pd(d);
      });
      a.log("Gallery restores...");
      z.U(b, "expanded");
    } else {
      a.La = !0;
      var f, h, k;
      f = c.b("transitionend", function () {
        h = b.b("transitionend", function () {
          k = c.b("transitionend", function () {
            a.La = !1;
            a.tc = !0;
            a.g("galleryExpanded");
            a.log("Expading finishes...");
            Pd(k);
          });
          a.log("Sidebar adjusts position...");
          (0, window.setTimeout)(function () {
            z.R(c, {
              "padding-top":
                (b.get().getBoundingClientRect().height + 20).toString() + "px",
            });
          }, 100);
          Pd(h);
        });
        a.log("Gallery expands...");
        z.T(b, "expanded");
        Pd(f);
      });
      a.log("Sidebar goes down...");
      z.R(c, { "padding-top": "900px" });
    }
  };
  tg = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "cookiepolicy";
    this.Ae = "cookieHintShown";
    this.na = ["mail.com", "gmx.com", "gmx.co.uk", "gmx.fr", "gmx.es"];
  };
  ug = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "footer";
  };
  vg = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "gallery";
    this.ab = {
      view: ".gallery-view",
      ka: ".gallery-slides",
      S: ".gallery-slides .slide",
      B: ".gallery-nav.prev",
      u: ".gallery-nav.next",
      jf: ".slide-text p",
    };
    this.X = !1;
    this.o = this.M = 0;
    this.ce = [];
    this.cd = 0;
    this.jc = !1;
  };
  wg = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "header";
    this.Ib = "offcanvas-open";
  };
  xg = function (a) {
    var b = a.a.find(".header"),
      c = z.P("#content"),
      d = a.a.find(".header .nav-menu");
    0 < b.length &&
      0 < c.length &&
      0 < d.length &&
      (d.b("click", function (d) {
        d.preventDefault();
        z.Ld(b, a.Ib);
        z.Ld(c, a.Ib);
        return !1;
      }),
      a.subscribe("viewportChanged", function () {
        z.Z("desktop") && (z.U(b, a.Ib), z.U(c, a.Ib));
      }));
  };
  yg = function (a) {
    var b = a.a.find(".button-login, .nav-login"),
      c = a.a.find(".login-layer");
    0 < b.length &&
      0 < c.length &&
      (b.b("click", function (b) {
        b.preventDefault();
        z.G(c[0], "open") || a.g("loginLayerOpen");
        z.Ld(c, "open");
        return !1;
      }),
      (b = c.find(".close")),
      0 < b.length &&
        b.b("click", function (a) {
          a.preventDefault();
          z.U(c, "open");
          return !1;
        }),
      a.subscribe("navMoreLayerOpen", function () {
        z.U(c, "open");
      }),
      a.subscribe("bodyClicked", function () {
        z.U(c, "open");
      }),
      (b = window.location.hash.split("#")[1]) &&
        0 <= b.indexOf("login") &&
        (a.g("loginLayerOpen"), z.T(c, "open")));
  };
  zg = function () {
    throw Error("Do not instantiate directly");
  };
  Ag = function (a) {
    if (null != a)
      switch (a.kc) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  };
  Bg = function () {
    zg.call(this);
  };
  Dg = function (a) {
    return null != a && a.tb === Cg
      ? a
      : a instanceof mb
      ? V(
          a instanceof mb && a.constructor === mb && a.pe === lb
            ? a.Pc
            : "type_error:SafeHtml",
          a.uc()
        )
      : V(sa(String(String(a))), Ag(a));
  };
  Ig = function (a) {
    null != a && a.tb === Cg
      ? ((a = String(a.content).replace(Eg, "").replace(Fg, "\x26lt;")),
        (a = String(a).replace(Gg, Hg)))
      : (a = sa(String(a)));
    return a;
  };
  Lg = function (a) {
    return String(a).replace(Jg, Kg);
  };
  Og = function (a) {
    null != a && a.tb === Mg
      ? (a = String(a).replace(Jg, Kg))
      : a instanceof gb
      ? (a = Lg(hb(a)))
      : a instanceof jb
      ? (a = Lg(kb(a)))
      : ((a = String(a)), (a = Ng.test(a) ? a.replace(Jg, Kg) : "#zSoyz"));
    return a;
  };
  Qg = function (a) {
    null != a && a.tb === Mg
      ? (a = String(a).replace(Jg, Kg))
      : a instanceof gb
      ? (a = Lg(hb(a)))
      : a instanceof jb
      ? (a = Lg(kb(a)))
      : ((a = String(a)),
        (a = Pg.test(a) ? a.replace(Jg, Kg) : "about:invalid#zSoyz"));
    return a;
  };
  Hg = function (a) {
    return Rg[a];
  };
  Kg = function (a) {
    return Sg[a];
  };
  Tg = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "headerslider";
    this.ab = {
      view: ".hs-view",
      ka: ".hs-slides",
      S: ".hs-slides .header-slide",
      B: ".hs-nav.prev",
      u: ".hs-nav.next",
    };
    this.X = !1;
    this.Qb = this.Yb = 0;
    this.M = 240;
    this.U = 0;
    this.Rb = 1;
    this.be = 0;
    this.gc = !1;
  };
  Ug = function (a, b) {
    a.U = Math.max(0, Math.min(b, a.Rb - 1));
    var c = a.Qb - a.Yb;
    0 > c && (c = 0);
    a.bb(-Math.min(a.be * a.U * a.M, c), a.ka);
    1 < a.Rb &&
      (0 === a.U
        ? (z.T(a.B, "is-hidden"), z.U(a.u, "is-hidden"))
        : a.U === a.Rb - 1
        ? (z.U(a.B, "is-hidden"), z.T(a.u, "is-hidden"))
        : (z.U(a.B, "is-hidden"), z.U(a.u, "is-hidden")));
  };
  Vg = function (a, b, c) {
    z.Z("desktop") &&
      (b
        ? 0 !== c
          ? (z.T(a.a, "reveal"), a.a.top(), z.T(a.a, "anim"))
          : (z.U(a.a, "anim"), z.U(a.a, "reveal"))
        : z.U(a.a, "anim"));
  };
  Wg = function (a) {
    return V(
      '\x3ca href\x3d"' +
        Ig(Og(a.url)) +
        '" target\x3d"_blank"\x3e\x3cimg class\x3d"taboola-slide-img" src\x3d"' +
        Ig(Qg(a.Tb)) +
        '"/\x3e\x3cdiv class\x3d"slide-headline taboola-source"\x3e\x3cp class\x3d"taboola-text"\x3e\x3cspan class\x3d"taboola-brand"\x3e' +
        Dg(a.pb) +
        '\x3c/span\x3e\x3cspan class\x3d"taboola-sponsored"\x3e\x26nbsp ' +
        Dg(a.kf) +
        '\x3c/span\x3e\x3c/p\x3e\x3cdiv class\x3d"text"\x3e' +
        Dg(a.name) +
        "\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e"
    );
  };
  Xg = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "hero";
    this.ab = {
      view: ".hero-view",
      ka: ".hero-slides",
      S: ".hero-slides .slide",
      B: ".hero-nav.prev",
      u: ".hero-nav.next",
      Oe: ".hero-view .indicator",
    };
    this.X = !1;
    this.o = this.M = 0;
    this.fd = 3e3;
    this.nb = null;
    this.Fc = !1;
  };
  Zg = function (a, b) {
    b ||
      (a.view.b("mouseenter", function () {
        window.clearInterval(a.nb);
        a.nb = null;
      }),
      a.view.b("mouseleave", function () {
        Yg(a);
      }));
    Yg(a);
  };
  $g = function (a, b) {
    if (b) {
      var c = new window.Hammer(a.view[0]);
      c.get("swipe").set({ threshold: 5 });
      c.on("swipeleft swiperight", function (b) {
        a.Ra(b);
      });
    }
  };
  Yg = function (a) {
    a.nb ||
      (a.nb = window.setInterval(function () {
        a.o === a.s - 1 ? a.ja(0) : a.next();
      }, a.fd));
  };
  ah = function (a, b) {
    var c = a.m.dataset;
    a.Fc = a.m.dataset && "true" === a.m.dataset.taboolaEnabled;
    a.subscribe("taboolaSet:" + c.taboolaPlacementName, function (b) {
      for (var e, f, h = b.list, k = a.S.length, x = 0; x < k; x++)
        0 === (x + 1) % 2 &&
          ((e = a.S[x]), (f = h.shift())) &&
          (e.innerHTML = Wg({
            pb: f.branding,
            url: f.url,
            Tb: f.thumbnail[0].url,
            name: f.name,
            kf:
              "es" === window.document.documentElement.lang
                ? "PATROCINADO POR TABOOLA"
                : "fr" === window.document.documentElement.lang
                ? "FOURNI PAR TABOOLA"
                : "SPONSORED BY TABOOLA",
          }).content);
      $g(a, a.X);
      a.g("taboolaOpenPopup");
      a.subscribe("windowScrolling", function () {
        ig(a.m) && a.g("taboola:IsVisible" + c.taboolaPlacementName, b);
      });
      Zg(a, "undefined" !== typeof window.Hammer);
    });
    b && a.g("taboolaRepublish", c.taboolaPlacementName);
  };
  bh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "image";
  };
  ch = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "inviewcheck";
    this.ud = a[0];
    this.Hd = !1;
  };
  dh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "konami";
  };
  eh = function () {
    var a = z.P(
      V(
        '\x3cdiv class\x3d"mod-konami"\x3e\x3cdiv class\x3d"vd"\x3e\x3ciframe width\x3d"640" height\x3d"360" src\x3d"https://www.youtube.com/embed/SrLZgP-OR6s" frameborder\x3d"0" allowfullscreen\x3e\x3c/iframe\x3e\x3cdiv class\x3d"close"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
      ).toString()
    );
    z.P("body").append(a);
    var b = z.P(".mod-konami");
    b.width();
    b.find(".close").b("click", function () {
      function a() {
        b.removeNode();
      }
      z.U(b, "show");
      window.Modernizr.csstransitions || a();
      b.b("transitionend", a);
      b.b("webkitTransitionend", a);
    });
    z.T(b, "show");
  };
  fh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "lazyimg";
  };
  hh = function (a) {
    for (
      var b,
        c,
        d = window.document.querySelectorAll(".lazyImg"),
        e = new window.IntersectionObserver(
          function (d) {
            for (var f = 0; f < d.length; f++)
              if (
                ((b = d[f]), b.isIntersecting || 0.001 <= b.intersectionRatio)
              )
                (c = b.target), e.unobserve(c), gh(a, c);
          },
          { rootMargin: "200px  0px 200px 0px" }
        ),
        f = 0;
      f < d.length;
      f++
    )
      e.observe(d[f]);
    a.subscribe("lazyload:intersectionObserve", function (a) {
      e.observe(a);
    });
  };
  ih = function (a, b, c) {
    var d = b.getBoundingClientRect();
    0 <= d.top &&
      0 <= d.left &&
      d.bottom <=
        (window.innerHeight || window.document.documentElement.clientHeight) &&
      d.right <=
        (window.innerWidth || window.document.documentElement.clientWidth) &&
      gh(a, b, c);
  };
  gh = function (a, b, c) {
    b.setAttribute("srcset", b.dataset.srcset || "");
    b.setAttribute("sizes", b.dataset.sizes || "");
    b.src = b.dataset.src;
    c && delete a.images[c];
  };
  jh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "loginform";
  };
  kh = function (a) {
    var b = a.a.find(".login-submit");
    0 < b.length &&
      b.b("click", function () {
        var b = a.a.find("#login-email");
        if (0 < b.length) {
          var d = z.Kd(b);
          "" !== d &&
            -1 === d.indexOf("@") &&
            ((d +=
              "@" +
              window.location.hostname.match(/(mail|gmx)\.[a-z\.]+/gi)[0]),
            z.Kd(b, d));
        }
      });
  };
  lh = function (a) {
    a.a.b("submit", function () {
      a.cb("ushallpass", "true", 30);
    });
  };
  mh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "messagebar";
  };
  nh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "navigation";
  };
  qh = function (a) {
    var b = a.a.find(".more-nav-layer");
    if (!(1 > b.length)) {
      a.subscribe("viewportChanged", function () {
        oh(b);
      });
      var c = a.a.find(".js-more");
      if (0 < c.length) {
        c.b("click", function (d) {
          d.preventDefault();
          z.G(b[0], "open") || (oh(b), a.g("navMoreLayerOpen"));
          z.Ld(b, "open");
          z.Ld(c, "open");
          return !1;
        });
        var d = function () {
          z.U(b, "open");
          z.U(c, "open");
        };
        a.subscribe("loginLayerOpen", d);
        a.subscribe("bodyClicked", d);
      } else
        ph(a, b),
          a.subscribe("viewportChanged", function () {
            z.Z("desktop")
              ? z.G(b[0], "lesser") || ph(a, b)
              : (z.U(b, "lesser"), Rd(b.find(".nav-item"), "style"));
          });
    }
  };
  oh = function (a) {
    var b = a.height();
    z.R(a, "top", "-" + b.toString() + "px");
  };
  ph = function (a, b) {
    if (z.Z("desktop")) {
      z.T(b, "lesser");
      var c = a.a.find(".nav-bar-desktop li a");
      if (!(1 > c.length)) {
        var d = 0;
        z.Q(c, function () {
          var a = z.P(this).parent();
          z.S(a, "data-leftpos", d.toString());
          d += a.width();
        });
        c.b("mouseover", function () {
          var c = z.S(z.P(this).parent(), "data-navgroup");
          if (!c) return !1;
          z.G(b[0], "open") || (oh(b), a.g("navMoreLayerOpen"), z.T(b, "open"));
          var d = z.S(z.P(this).parent(), "data-leftpos");
          z.R(b, "margin-left", d.toString() + "px");
          z.R(b.find(".nav-item"), "display", "none");
          z.R(b.find('[data-navgroup\x3d"' + c + '"]'), "display", "block");
        });
        c.b("mouseout", function () {
          z.U(b, "open");
        });
        b.b("mouseover", function () {
          z.G(b[0], "open") || z.T(b, "open");
        });
        b.b("mouseout", function () {
          z.U(b, "open");
        });
      }
    }
  };
  rh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "premiumlogin";
  };
  sh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "promocookiehandler";
    this.lb = "shownPromos";
    this.ca = [];
    this.kb = { path: "/", xd: 7 };
  };
  th = function (a) {
    var b = [];
    if (0 < a.ca.length) {
      for (var c = 0, d = a.ca.length; c < d; c++) {
        var e = a.ca[c];
        b.push(
          e.id.toString() +
            "#" +
            e.timestamp.toString() +
            "|" +
            e.count.toString() +
            "|" +
            e.disabled.toString()
        );
      }
      return b.join("\x26");
    }
    return "";
  };
  vh = function (a, b, c) {
    if (b) {
      a.ca = [];
      if (void 0 !== z.uh.get(a.lb))
        for (
          var d = z.uh.get(a.lb).split("\x26"), e = 0, f = d.length;
          e < f;
          e++
        ) {
          var h = d[e].split("|"),
            k = h[0].split("#");
          a.ca.push({
            id: k[0],
            timestamp: k[1],
            count: h[1],
            disabled: h[2] || !1,
          });
        }
      d = null;
      e = 0;
      for (f = a.ca.length; e < f; e++) (h = a.ca[e]), h.id === b && (d = h);
      null === d &&
        ((d = {
          id: b,
          timestamp: Date.now
            ? Date.now().toString()
            : new Date().valueOf().toString(),
          count: 1,
          disabled: !0,
        }),
        a.ca.push(d));
      d.timestamp = Date.now
        ? Date.now().toString()
        : new Date().valueOf().toString();
      d.disabled = !0;
      z.uh.set(a.lb, th(a), 86400 * a.kb.xd, a.kb.path, c);
    }
  };
  wh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "scaffolding";
  };
  xh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "seobox";
  };
  yh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "socialbar";
  };
  zh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "socialbuttons";
    this.url = "";
  };
  Ah = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "taboola";
    this.bf = "recommendations.notify-visible";
    this.dd = "?app.apikey\x3d5c59a26de4617f5f8a5d93b01540559edc1a9fe2";
  };
  Bh = function (a) {
    return a.Zd && window.sessionStorage.getItem("taboola-session")
      ? window.sessionStorage.getItem("taboola-session")
      : "init";
  };
  Dh = function (a) {
    function b(a) {
      c.ba("taboola:IsVisible" + a.taboolaPlacementName, function (a) {
        a = "\x26response.id\x3d" + a.id;
        var b = "\x26response.session\x3d" + Bh(c);
        c.cf = c.gd + c.bf + c.dd + Ch() + b + a;
        eg(c, c.cf, null);
      });
    }
    var c = a;
    a = window.ui.taboola.components;
    for (var d = 0; d < a.length; d++) b(a[d]);
  };
  Eh = function (a) {
    var b = window.ui.taboola,
      c = "\x26user.session\x3d" + Bh(a),
      d = "\x26source.id\x3d" + (0, window.encodeURIComponent)(b.sourceId),
      e = "\x26source.type\x3d" + b.sourceType,
      f =
        "\x26source.url\x3d" +
        (0, window.encodeURIComponent)(window.location.href);
    a.gd = b.baseUrl;
    for (var b = b.components, h, k, x = "", H = 0; H < b.length; H++)
      (k = "placement" + (H + 1)),
        (h = b[H]),
        (x += (
          "\x26placementX.name\x3d" +
          h.taboolaPlacementName +
          "\x26placementX.rec-count\x3d" +
          h.taboolaCount +
          "\x26placementX.organic-type\x3dmix\x26placementX.visible\x3dfalse\x26placementX.thumbnail.height\x3d420\x26placementX.thumbnail.width\x3d620"
        )
          .split("placementX")
          .join(k));
    return (
      a.gd + "recommendations.multiple-get" + a.dd + Ch() + d + e + c + f + x
    );
  };
  Ch = function () {
    return "\x26app.type\x3d" + (z.Z("desktop") ? "desktop" : "mobile");
  };
  Fh = function () {
    function a(a) {
      a.onclick = function (a) {
        a.preventDefault();
        window.open(
          "https://popup.taboola.com/" + window.document.documentElement.lang ||
            "",
          "",
          " toolbar\x3dno, location\x3dno, directories\x3dno, status\x3dno, menubar\x3dno, scrollbars\x3dno, resizable\x3dno, copyhistory\x3dno," +
            c
        );
      };
    }
    for (
      var b = window.document.getElementsByClassName("taboola-sponsored"),
        c =
          " width\x3d750, height\x3d510, top\x3d" +
          (window.screen.height / 2 - 255) +
          ", left\x3d" +
          (window.screen.width / 2 - 375),
        d = 0;
      d < b.length;
      d++
    )
      a(b[d]);
  };
  Gh = function (a) {
    return V(
      '\x3cdiv class\x3d"mod mod-teaser teaser-' +
        Ig(a.type) +
        '" data-theme\x3d"news"\x3e\x3ca href\x3d"' +
        Ig(Og(a.url)) +
        '" target\x3d"_blank" \x3e\x3cdiv class\x3d"teaser-wrapper"\x3e\x3cdiv class\x3d"teaser-image"\x3e\x3cimg src\x3d"' +
        Ig(Qg(a.Tb)) +
        '"/\x3e\x3cdiv class\x3d"stripe"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"teaser-text"\x3e\x3cspan class\x3d"teaser-label"\x3e' +
        Dg(a.pb) +
        '\x3c/span\x3e\x3cdiv class\x3d"teaser-headline"\x3e' +
        Dg(a.Ad) +
        "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e"
    );
  };
  Hh = function (a) {
    var b = '\x3cdiv class\x3d"block"\x3e';
    a = a.Vc;
    for (var c = a.length, d = 0; d < c; d++)
      var e = a[d],
        b =
          b +
          Gh({
            type: "list",
            url: e.url,
            Ad: e.name,
            Tb: e.thumbnail["0"].url,
            pb: e.branding,
          });
    return V(b + "\x3c/div\x3e");
  };
  Ih = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "taboolateasers";
  };
  Jh = function (a, b) {
    a.subscribe("windowScrolling", function () {
      ig(a.m) && a.g("taboola:IsVisible" + a.m.dataset.taboolaPlacementName, b);
    });
  };
  Kh = function (a) {
    return a
      ? V(
          '\x3cdiv class\x3d"block"\x3e' +
            Gh({
              type: "card",
              url: a.url,
              Ad: a.name,
              Tb: a.thumbnail[0].url,
              pb: a.branding,
            }) +
            "\x3c/div\x3e"
        ).content
      : "";
  };
  Lh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "teaser";
  };
  Mh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "tool";
  };
  Nh = function (a) {
    var b = a.a.parent();
    a = a.a.find(".services");
    620 <= b.width()
      ? z.T(a, "wide")
      : (z.U(a, "wide"), 0 < a.length && Rd(a, "style"));
  };
  Oh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "topper";
  };
  Ph = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "trackingpixel";
  };
  Qh = function (a, b, c) {
    var d = window.screen;
    d && (a += "\x26wa_p_sr\x3d" + d.width + "x" + d.height);
    a +=
      "\x26wa_p_vp\x3d" +
      window.document.documentElement.clientWidth +
      "x" +
      window.document.documentElement.clientHeight;
    a += "\x26wa_output\x3d" + window.ui.viewportSize;
    var e = new Date(),
      d = e.getYear();
    1e3 > d && (d += 1900);
    var f = e.getMonth() + 1;
    10 > f && (f = "0" + f.toString());
    var h = e.getDate();
    10 > h && (h = "0" + h.toString());
    var k = e.getHours();
    10 > k && (k = "0" + k.toString());
    e = e.getMinutes();
    10 > e && (e = "0" + e.toString());
    a += "\x26wa_t\x3d" + d + f + h + k + e;
    d = "";
    d = window.location.hash;
    if (c && -1 < d.indexOf("#.")) {
      c = "";
      d = d.replace("#.", "");
      d = d.split("-");
      for (f = 0; 4 > f; f++)
        c +=
          "\x26c_id_" +
          (f + 1).toString() +
          "\x3d" +
          ("undefined" !== typeof d[f] ? d[f] : "undef");
      a += c;
    }
    a += "\x26adblock\x3d" + (window.ui._noadblocker ? "0" : "1");
    c = window.document;
    a =
      a +
      "\x26ns__t\x3d" +
      new Date().getTime() +
      "\x26ns_c\x3d" +
      (c.characterSet ? c.characterSet : c.defaultCharset) +
      "\x26ns_ti\x3d" +
      (0, window.encodeURIComponent)(c.title) +
      "\x26ns_jspageurl\x3d" +
      (0, window.encodeURIComponent)(c.URL);
    b &&
      (a += "\x26ns_referrer\x3d" + (0, window.encodeURIComponent)(c.referrer));
    new window.Image().src = a;
  };
  Rh = function () {
    if (window.ui) {
      var a = window.ui.brainOptOutTransferUrl;
      a && (new window.Image().src = a);
    }
  };
  Sh = function (a, b, c) {
    z.Y.call(this, a, b, c);
    this.name = "welcome";
  };
  Th = function (a) {
    z.R(a.a, "height", window.document.documentElement.clientHeight + "px");
    window.scrollTo(0, 0);
  };
  re = re || {};
  m = this;
  Fa = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
  Ga = 0;
  Qf =
    Date.now ||
    function () {
      return +new Date();
    };
  ia = null;
  z.w(y, Error);
  y.prototype.name = "CustomError";
  var Ac;
  var ta = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        },
    ma = /&/g,
    na = /</g,
    oa = />/g,
    pa = /"/g,
    qa = /'/g,
    ra = /\x00/g,
    la = /[\x00&<>"']/;
  var Uh = {},
    Aa = Array.prototype.indexOf
      ? function (a, b, c) {
          return Array.prototype.indexOf.call(a, b, c);
        }
      : function (a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Xa = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    Bb = Array.prototype.filter
      ? function (a, b, c) {
          return Array.prototype.filter.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length, e = [], f = 0, h = q(a) ? a.split("") : a, k = 0;
            k < d;
            k++
          )
            if (k in h) {
              var x = h[k];
              b.call(c, x, k, a) && (e[f++] = x);
            }
          return e;
        },
    Gf = Array.prototype.map
      ? function (a, b, c) {
          return Array.prototype.map.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, h = 0;
            h < d;
            h++
          )
            h in f && (e[h] = b.call(c, f[h], h, a));
          return e;
        },
    Je = Array.prototype.some
      ? function (a, b, c) {
          return Array.prototype.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        };
  var Ja;
  a: {
    var Vh = m.navigator;
    if (Vh) {
      var Wh = Vh.userAgent;
      if (Wh) {
        Ja = Wh;
        break a;
      }
    }
    Ja = "";
  }
  var Ra =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  var tc = Ta(),
    D = Ua(),
    $a = C("Edge"),
    Za =
      C("Gecko") &&
      !(-1 != Ja.toLowerCase().indexOf("webkit") && !C("Edge")) &&
      !(C("Trident") || C("MSIE")) &&
      !C("Edge"),
    ab = -1 != Ja.toLowerCase().indexOf("webkit") && !C("Edge"),
    eb = (function () {
      if (tc && m.opera) {
        var a;
        var b = m.opera.version;
        try {
          a = b();
        } catch (c) {
          a = b;
        }
        return a;
      }
      a = "";
      (b = bb()) && (a = b ? b[1] : "");
      return D && ((b = cb()), b > (0, window.parseFloat)(a)) ? String(b) : a;
    })(),
    db = {},
    Xh = m.document,
    zc =
      Xh && D
        ? cb() ||
          ("CSS1Compat" == Xh.compatMode ? (0, window.parseInt)(eb, 10) : 5)
        : void 0;
  var Ab = (!Za && !D) || (D && 9 <= Number(zc)) || (Za && E("1.9.1"));
  D && E("9");
  gb.prototype.uc = function () {
    return 1;
  };
  var fb = {};
  jb.prototype.uc = function () {
    return 1;
  };
  var ib = {};
  mb.prototype.uc = function () {
    return this.Ce;
  };
  var lb = {};
  g = F.prototype;
  g.clone = function () {
    return new F(this.x, this.y);
  };
  g.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  g.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  g.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  g.translate = function (a, b) {
    a instanceof F
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), r(b) && (this.y += b));
    return this;
  };
  g.scale = function (a, b) {
    var c = r(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this;
  };
  g = nb.prototype;
  g.clone = function () {
    return new nb(this.width, this.height);
  };
  g.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  g.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  g.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  g.scale = function (a, b) {
    var c = r(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this;
  };
  var pb = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    },
    Gb = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    Hb = { IMG: " ", BR: "\n" };
  g = Ib.prototype;
  g.createElement = function (a) {
    return this.O.createElement(a);
  };
  g.createTextNode = function (a) {
    return this.O.createTextNode(String(a));
  };
  g.appendChild = function (a, b) {
    a.appendChild(b);
  };
  g.append = vb;
  g.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  g.removeNode = zb;
  g.yd = Cb;
  g.contains = Db;
  var ic = !D || 9 <= Number(zc),
    Yh = D && !E("9");
  !ab || E("528");
  (Za && E("1.9b")) || (D && E("8")) || (tc && E("9.5")) || (ab && E("528"));
  (Za && !E("8")) || (D && E("9"));
  var Mb = 0,
    Nb = {};
  J.prototype.fa = !1;
  J.prototype.G = function () {
    if (!this.fa && ((this.fa = !0), this.h(), 0 != Mb)) {
      var a = this[Fa] || (this[Fa] = ++Ga);
      delete Nb[a];
    }
  };
  J.prototype.h = function () {
    if (this.ua) for (; this.ua.length; ) this.ua.shift()();
  };
  Qb.prototype.toString = function () {
    return this.id;
  };
  K.prototype.stopPropagation = function () {
    this.wa = !0;
  };
  K.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Xd = !1;
  };
  var Zh = D ? "focusin" : "DOMFocusIn",
    $h = D ? "focusout" : "DOMFocusOut";
  Rb[" "] = ba;
  z.w(Sb, K);
  Sb.prototype.stopPropagation = function () {
    Sb.D.stopPropagation.call(this);
    this.Ja.stopPropagation
      ? this.Ja.stopPropagation()
      : (this.Ja.cancelBubble = !0);
  };
  Sb.prototype.preventDefault = function () {
    Sb.D.preventDefault.call(this);
    var a = this.Ja;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), Yh))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var Tb = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    Vb = 0;
  g = Yb.prototype;
  g.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.w[f];
    a || ((a = this.w[f] = []), this.ib++);
    var h = $b(a, b, d, e);
    -1 < h
      ? ((b = a[h]), c || (b.qb = !1))
      : ((b = new Wb(b, this.src, f, !!d, e)), (b.qb = c), a.push(b));
    return b;
  };
  g.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.w)) return !1;
    var e = this.w[a];
    b = $b(e, b, c, d);
    return -1 < b
      ? (Xb(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.w[a], this.ib--),
        !0)
      : !1;
  };
  g.Qc = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.w)
      if (!a || c == a) {
        for (var d = this.w[c], e = 0; e < d.length; e++) ++b, Xb(d[e]);
        delete this.w[c];
        this.ib--;
      }
    return b;
  };
  g.Oa = function (a, b, c, d) {
    a = this.w[a.toString()];
    var e = -1;
    a && (e = $b(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  g.hasListener = function (a, b) {
    var c = l(a),
      d = c ? a.toString() : "",
      e = l(b);
    return Ma(this.w, function (a) {
      for (var h = 0; h < a.length; ++h)
        if (!((c && a[h].type != d) || (e && a[h].Ia != b))) return !0;
      return !1;
    });
  };
  var dc = "closure_lm_" + ((1e6 * Math.random()) | 0),
    mc = {},
    gc = 0,
    pc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  g = rc.prototype;
  g.clone = function () {
    return new rc(this.left, this.top, this.width, this.height);
  };
  g.contains = function (a) {
    return a instanceof rc
      ? this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height
      : a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height;
  };
  g.Pa = function () {
    return new nb(this.width, this.height);
  };
  g.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  g.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  g.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  g.translate = function (a, b) {
    a instanceof F
      ? ((this.left += a.x), (this.top += a.y))
      : ((this.left += a), r(b) && (this.top += b));
    return this;
  };
  g.scale = function (a, b) {
    var c = r(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this;
  };
  var sc = {};
  Ec.prototype.get = function () {
    var a;
    0 < this.Hb
      ? (this.Hb--, (a = this.Db), (this.Db = a.next), (a.next = null))
      : (a = this.Be());
    return a;
  };
  Ec.prototype.put = function (a) {
    this.df(a);
    this.Hb < this.Qe && (this.Hb++, (a.next = this.Db), (this.Db = a));
  };
  var Rc = new Ec(
    function () {
      return new Gc();
    },
    function (a) {
      a.reset();
    },
    100
  );
  Fc.prototype.add = function (a, b) {
    var c = Rc.get();
    c.set(a, b);
    this.$b ? (this.$b.next = c) : (this.Ha = c);
    this.$b = c;
  };
  Fc.prototype.remove = function () {
    var a = null;
    this.Ha &&
      ((a = this.Ha),
      (this.Ha = this.Ha.next),
      this.Ha || (this.$b = null),
      (a.next = null));
    return a;
  };
  Gc.prototype.set = function (a, b) {
    this.yb = a;
    this.scope = b;
    this.next = null;
  };
  Gc.prototype.reset = function () {
    this.next = this.scope = this.yb = null;
  };
  var Qc;
  var Kc,
    Mc = !1,
    Nc = new Fc();
  var Sc = 0,
    Uc = 2,
    M = 3;
  Vc.prototype.reset = function () {
    this.context = this.Ca = this.Xa = this.la = null;
    this.mb = !1;
  };
  var Wc = new Ec(
    function () {
      return new Vc();
    },
    function (a) {
      a.reset();
    },
    100
  );
  N.prototype.then = function (a, b, c) {
    return dd(this, t(a) ? a : null, t(b) ? b : null, c);
  };
  Cc(N);
  N.prototype.cancel = function (a) {
    this.N == Sc &&
      Oc(function () {
        var b = new cd(a);
        Yc(this, b);
      }, this);
  };
  N.prototype.pf = function (a) {
    this.N = Sc;
    Tc(this, Uc, a);
  };
  N.prototype.qf = function (a) {
    this.N = Sc;
    Tc(this, M, a);
  };
  N.prototype.xb = function () {
    for (var a = null; (a = Zc(this)); ) $c(this, a, this.N, this.aa);
    this.sc = !1;
  };
  var hd = Ic;
  z.w(cd, y);
  cd.prototype.name = "cancel";
  z.w(O, J);
  O.prototype[Tb] = !0;
  g = O.prototype;
  g.addEventListener = function (a, b, c, d) {
    L(this, a, b, c, d);
  };
  g.removeEventListener = function (a, b, c, d) {
    kc(this, a, b, c, d);
  };
  g.dispatchEvent = function (a) {
    var b,
      c = this.Nc;
    if (c) for (b = []; c; c = c.Nc) b.push(c);
    var c = this.se,
      d = a.type || a;
    if (q(a)) a = new K(a, c);
    else if (a instanceof K) a.target = a.target || c;
    else {
      var e = a;
      a = new K(d, c);
      Sa(a, e);
    }
    var e = !0,
      f;
    if (b)
      for (var h = b.length - 1; !a.wa && 0 <= h; h--)
        (f = a.currentTarget = b[h]), (e = id(f, d, !0, a) && e);
    a.wa ||
      ((f = a.currentTarget = c),
      (e = id(f, d, !0, a) && e),
      a.wa || (e = id(f, d, !1, a) && e));
    if (b)
      for (h = 0; !a.wa && h < b.length; h++)
        (f = a.currentTarget = b[h]), (e = id(f, d, !1, a) && e);
    return e;
  };
  g.h = function () {
    O.D.h.call(this);
    this.P && this.P.Qc(void 0);
    this.Nc = null;
  };
  g.sa = function (a, b, c, d) {
    return this.P.add(String(a), b, !1, c, d);
  };
  g.Hc = function (a, b, c, d) {
    return this.P.add(String(a), b, !0, c, d);
  };
  g.Wc = function (a, b, c, d) {
    return this.P.remove(String(a), b, c, d);
  };
  g.Oa = function (a, b, c, d) {
    return this.P.Oa(String(a), b, c, d);
  };
  g.hasListener = function (a, b) {
    return this.P.hasListener(l(a) ? String(a) : void 0, b);
  };
  var od =
    "StopIteration" in m
      ? m.StopIteration
      : { message: "StopIteration", stack: "" };
  nd.prototype.next = function () {
    throw od;
  };
  nd.prototype.cc = function () {
    return this;
  };
  g = rd.prototype;
  g.Na = function () {
    return this.j;
  };
  g.J = function () {
    td(this);
    for (var a = [], b = 0; b < this.i.length; b++) a.push(this.L[this.i[b]]);
    return a;
  };
  g.I = function () {
    td(this);
    return this.i.concat();
  };
  g.ma = function (a) {
    return sd(this.L, a);
  };
  g.clear = function () {
    this.L = {};
    this.jb = this.j = this.i.length = 0;
  };
  g.remove = function (a) {
    return sd(this.L, a)
      ? (delete this.L[a],
        this.j--,
        this.jb++,
        this.i.length > 2 * this.j && td(this),
        !0)
      : !1;
  };
  g.get = function (a, b) {
    return sd(this.L, a) ? this.L[a] : b;
  };
  g.set = function (a, b) {
    sd(this.L, a) || (this.j++, this.i.push(a), this.jb++);
    this.L[a] = b;
  };
  g.addAll = function (a) {
    var b;
    a instanceof rd ? ((b = a.I()), (a = a.J())) : ((b = Pa(a)), (a = Oa(a)));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
  };
  g.forEach = function (a, b) {
    for (var c = this.I(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  g.clone = function () {
    return new rd(this);
  };
  g.cc = function (a) {
    td(this);
    var b = 0,
      c = this.jb,
      d = this,
      e = new nd();
    e.next = function () {
      if (c != d.jb)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.i.length) throw od;
      var e = d.i[b++];
      return a ? e : d.L[e];
    };
    return e;
  };
  var ze =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
  g = xd.prototype;
  g.Na = function () {
    yd(this);
    return this.j;
  };
  g.add = function (a, b) {
    yd(this);
    this.H = null;
    a = zd(this, a);
    var c = this.l.get(a);
    c || this.l.set(a, (c = []));
    c.push(b);
    this.j += 1;
    return this;
  };
  g.remove = function (a) {
    yd(this);
    a = zd(this, a);
    return this.l.ma(a)
      ? ((this.H = null), (this.j -= this.l.get(a).length), this.l.remove(a))
      : !1;
  };
  g.clear = function () {
    this.l = this.H = null;
    this.j = 0;
  };
  g.ma = function (a) {
    yd(this);
    a = zd(this, a);
    return this.l.ma(a);
  };
  g.I = function () {
    yd(this);
    for (var a = this.l.J(), b = this.l.I(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  g.J = function (a) {
    yd(this);
    var b = [];
    if (q(a)) this.ma(a) && (b = Ca(b, this.l.get(zd(this, a))));
    else {
      a = this.l.J();
      for (var c = 0; c < a.length; c++) b = Ca(b, a[c]);
    }
    return b;
  };
  g.set = function (a, b) {
    yd(this);
    this.H = null;
    a = zd(this, a);
    this.ma(a) && (this.j -= this.l.get(a).length);
    this.l.set(a, [b]);
    this.j += 1;
    return this;
  };
  g.get = function (a, b) {
    var c = a ? this.J(a) : [];
    return 0 < c.length ? String(c[0]) : b;
  };
  g.toString = function () {
    if (this.H) return this.H;
    if (!this.l) return "";
    for (var a = [], b = this.l.I(), c = 0; c < b.length; c++)
      for (
        var d = b[c],
          e = (0, window.encodeURIComponent)(String(d)),
          d = this.J(d),
          f = 0;
        f < d.length;
        f++
      ) {
        var h = e;
        "" !== d[f] &&
          (h += "\x3d" + (0, window.encodeURIComponent)(String(d[f])));
        a.push(h);
      }
    return (this.H = a.join("\x26"));
  };
  g.clone = function () {
    var a = new xd();
    a.H = this.H;
    this.l && ((a.l = this.l.clone()), (a.j = this.j));
    return a;
  };
  g.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)
      md(
        arguments[b],
        function (a, b) {
          this.add(b, a);
        },
        this
      );
  };
  z.P.prototype.length = 0;
  Bd.prototype = z.P.prototype;
  z.P.prototype.constructor = z.P;
  var Ed = null,
    Gd = {
      visible: function (a) {
        return z.P(a).visible();
      },
      hidden: function (a) {
        return !z.P(a).visible();
      },
      selected: function (a) {
        return a.selected;
      },
      checked: function (a) {
        return a.checked;
      },
      first: function (a) {
        return a == a.parentNode.firstChild;
      },
      last: function (a) {
        return a == a.parentNode.lastChild;
      },
      even: function (a) {
        return 0 === z.P(a.parentNode).children().index(a) % 2;
      },
      odd: function (a) {
        return 1 === z.P(a.parentNode).children().index(a) % 2;
      },
    };
  g = z.P.prototype;
  g.sort = function (a, b) {
    u(a || Ia, b || this).sort(Ia);
    return this;
  };
  g.reverse = function () {
    Uh.sf.reverse.call(this);
    return this;
  };
  g.filter = function (a, b, c) {
    if (q(a)) {
      var d = a;
      this.size();
      a = {
        ":odd": function (a, b) {
          return 1 === b % 2;
        },
        ":even": function (a, b) {
          return 0 === b % 2;
        },
        ":first": function (a, b) {
          return 0 === b;
        },
        ":last": function (a, b) {
          return b === this.length - 1;
        },
      }[d];
      b = this;
    }
    return z.P(
      Bb(this, function (d, f) {
        return Boolean(c) != Boolean(a.call(b || this, d, f));
      })
    );
  };
  g.map = function (a, b) {
    return z.P(Gf(this, a, b));
  };
  g.contains = function (a) {
    return A(this, a);
  };
  g.get = function (a, b) {
    if (t(a)) return za(this, a, b);
    0 > a && (a = this.length + a);
    return this[a || 0];
  };
  g.first = function () {
    return z.P(this.get(0));
  };
  g.size = function () {
    return this.length;
  };
  g.add = function (a) {
    a = z.P(a);
    for (var b = a.length, c = this.length, d = 0; d < b; d++)
      this[d + c] = a[d];
    this.length = b + c;
    return this;
  };
  g.remove = function (a) {
    if (p(a))
      return z.Q(
        z.P(a),
        function (a) {
          this.remove(a);
        },
        this
      );
    var b = Cd(this);
    B(b, a);
    return z.P(b);
  };
  g.top = function (a) {
    return l(a)
      ? (r(a) && (a += "px"),
        z.Q(this, function (b) {
          b.style.top = a;
        }),
        this)
      : Bc(this.get(0)).top;
  };
  g.position = function () {
    return Bc(this[0]);
  };
  g.offset = function (a) {
    if (a) {
      var b = z.P(a)[0];
      a = xc(this[0]);
      b = xc(b);
      a = new F(a.x - b.x, a.y - b.y);
    } else (a = this[0]), (a = new F(a.offsetLeft, a.offsetTop));
    return { top: a.y, left: a.x };
  };
  g.left = function (a) {
    return l(a)
      ? (r(a) && (a += "px"),
        z.Q(this, function (b) {
          b.style.left = a;
        }),
        this)
      : Bc(this.get(0)).left;
  };
  g.width = function (a) {
    return l(a)
      ? (r(a) && (a += "px"),
        z.Q(this, function (b) {
          b.style.width = a;
        }),
        this)
      : Bc(this.get(0)).width;
  };
  g.index = function (a) {
    return ya(Cd(this), function (b) {
      return a.nodeType ? b == a : Hd(b, a);
    });
  };
  g.height = function (a) {
    return l(a)
      ? (r(a) && (a += "px"),
        z.Q(this, function (b) {
          b.style.height = a;
        }),
        this)
      : Bc(this.get(0)).height;
  };
  g.find = function (a) {
    var b = [];
    z.Q(this, function (c) {
      Xa(Dd(a, c) || [], function (a) {
        Ba(b, a);
      });
    });
    return z.P(b);
  };
  g.visible = function (a) {
    if (!l(a)) return "none" != this[0].style.display;
    if ("boolean" == typeof a) {
      var b = a;
      a = function () {
        return b;
      };
    }
    var c = a;
    return z.Q(this, function (a) {
      var b = c(a);
      a.style.display = b ? "" : "none";
    });
  };
  g.show = function () {
    return this.visible(!0);
  };
  g.data = function (a, b) {
    return z.S(this, "data-" + (a || "id"), b);
  };
  g.removeNode = function () {
    return z.Q(this, function (a) {
      zb(a);
    });
  };
  g.replace = function (a) {
    p(a) && (a = a[0]);
    var b = this[0],
      c = b.parentNode;
    c && c.replaceChild(a, b);
    return z.P(a);
  };
  g.empty = function () {
    return z.Q(this, wb);
  };
  g.next = function () {
    return this.map(function (a) {
      return a.nextSibling;
    });
  };
  g.va = function () {
    return this.map(function (a) {
      return a.previousSibling;
    });
  };
  g.children = function (a) {
    var b = [];
    z.Q(this, function (a) {
      b = Ca(b, [].slice.call(Cb(a)));
    });
    Ha(b);
    return l(a)
      ? z.P(b).filter(function (b) {
          return Hd(b, a);
        })
      : z.P(b);
  };
  g.parent = function () {
    var a = Cd(
      this.map(function (a) {
        return a.parentNode;
      })
    );
    Ha(a);
    return z.P(
      Id(a, function (a) {
        return a;
      })
    );
  };
  g.detach = function (a) {
    z.Q(
      this.filter(function (b) {
        return Hd(b, a);
      }),
      function (a) {
        zb(a);
      }
    );
    return this;
  };
  g.has = function (a) {
    return a
      ? a.nodeType
        ? this.filter(function (b) {
            return Db(b, a);
          })
        : this.filter(function (b) {
            return Hd(b, a);
          })
      : this;
  };
  g.append = function (a) {
    var b = z.P(arguments);
    z.Q(
      this,
      function (a) {
        if (!b.size()) return this;
        1 < this.size() && (b = b.clone(!0));
        var d = window.document.createDocumentFragment();
        vb.apply(this, Ca([d], Cd(b)));
        vb(a, d);
      },
      this
    );
    return this;
  };
  g.insertBefore = function (a) {
    Nd(z.P(a), this);
    return this;
  };
  g.clone = function (a) {
    return this.map(function (b) {
      return b.cloneNode(a);
    });
  };
  g.outerHTML = function () {
    return Cd(
      this.map(function (a) {
        var b;
        (b = a.outerHTML) ||
          ((b = window.document.createElement("div")),
          b.appendChild(a.cloneNode(!0)),
          (b = b.innerHTML));
        return b;
      })
    ).join("");
  };
  g.text = function (a) {
    if (!l(a)) return Fb(this.get(0));
    if (!t(a)) {
      var b = a;
      a = function () {
        return b;
      };
    }
    var c = a;
    return z.Q(this, function (a) {
      var b = c(a);
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = b;
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = b;
      } else wb(a), a.appendChild(ub(a).createTextNode(String(b)));
    });
  };
  g.b = function (a, b, c, d, e, f, h) {
    function k(a) {
      a.data || (a.data = c);
      (!q(b) || (a.target.nodeType && Hd(a.target, b))) && d.call(this, a);
    }
    t(b)
      ? ((h = e), (f = d), (e = c), (d = b), (b = null), (c = void 0))
      : t(c) &&
        ((h = f),
        (e = d),
        (d = c),
        (c = void 0),
        ea(b) && ((c = b), (b = null)));
    k.yb = d;
    return this.map(function (b) {
      return f
        ? ((b = f.sa(b, a, k, !!h, e || b)), b.i[b.i.length - 1])
        : L(b, a, k, !!h, e || b);
    });
  };
  g.bind = z.P.prototype.b;
  g.click = function (a, b, c) {
    return a ? this.b("click", a, b, c) : (Qd(this), this);
  };
  g.focus = function (a, b, c) {
    return a
      ? D
        ? this.b(Zh, a, b, c)
        : this.b("focus", a, b, c, !0)
      : (this[0].focus(), this);
  };
  g.blur = function (a, b, c) {
    return a
      ? D
        ? this.b($h, a, b, c)
        : this.b("blur", a, b, c, !0)
      : (this[0].blur(), this);
  };
  z.w(Sd, J);
  g = Sd.prototype;
  g.K = 0;
  g.h = function () {
    Sd.D.h.call(this);
    this.stop();
    delete this.Ic;
    delete this.R;
  };
  g.start = function (a) {
    this.stop();
    this.K = jd(this.we, l(a) ? a : this.Pe);
  };
  g.stop = function () {
    this.Fb() && m.clearTimeout(this.K);
    this.K = 0;
  };
  g.Fb = function () {
    return 0 != this.K;
  };
  g.De = function () {
    this.K = 0;
    this.Ic && this.Ic.call(this.R);
  };
  z.w(Td, O);
  Td.prototype.h = function () {
    lc(this.Ua);
    Td.D.h.call(this);
  };
  Td.prototype.xc = function () {
    if (!this.Rc) {
      this.Rc = new Sd(this.Xe, this.ef, this);
      var a = ha(Ob, this.Rc);
      this.fa
        ? a.call(void 0)
        : (this.ua || (this.ua = []),
          this.ua.push(l(void 0) ? u(a, void 0) : a));
    }
    this.Rc.start();
  };
  Td.prototype.Xe = function () {
    if (!this.$c.fa) {
      var a = this.vb,
        b = this.$c.Pa();
      this.vb = b;
      if (a) {
        var c = !1;
        a.width != b.width && (this.dispatchEvent("b"), (c = !0));
        a.height != b.height && (this.dispatchEvent("a"), (c = !0));
        c && this.dispatchEvent("resize");
      } else
        this.dispatchEvent("a"),
          this.dispatchEvent("b"),
          this.dispatchEvent("resize");
    }
  };
  Td.prototype.Pa = function () {
    return this.vb ? this.vb.clone() : null;
  };
  z.w(Ud, O);
  Ud.prototype.Pa = function () {
    return this.eb ? this.eb.clone() : null;
  };
  Ud.prototype.h = function () {
    Ud.D.h.call(this);
    this.Ua && (lc(this.Ua), (this.Ua = null));
    this.eb = this.Zb = null;
  };
  Ud.prototype.xc = function () {
    var a = rb(this.Zb || window),
      b = this.eb;
    a == b ||
      (a && b && a.width == b.width && a.height == b.height) ||
      ((this.eb = a), this.dispatchEvent("resize"));
  };
  Wd.prototype.toString = function () {
    return this.name;
  };
  var ai = new Wd("OFF", window.Infinity),
    bi = new Wd("SHOUT", 1200),
    ci = new Wd("SEVERE", 1e3),
    di = new Wd("WARNING", 900);
  g = Vd.prototype;
  g.getName = function () {
    return this.Ue;
  };
  g.getParent = function () {
    return this.v;
  };
  g.yd = function () {
    this.ic || (this.ic = {});
    return this.ic;
  };
  g.log = function () {};
  g.info = function () {};
  var Yd = {},
    Xd = null;
  z.w(ae, J);
  g = ae.prototype;
  g.subscribe = function (a, b, c) {
    var d = this.T[a];
    d || (d = this.T[a] = []);
    var e = this.Fd;
    this.F[e] = a;
    this.F[e + 1] = b;
    this.F[e + 2] = c;
    this.Fd = e + 3;
    d.push(e);
    return e;
  };
  g.ba = function (a, b, c) {
    var d = !1,
      e = this.subscribe(
        a,
        function (a) {
          d || ((d = !0), this.Xb(e), b.apply(c, arguments));
        },
        this
      );
    return e;
  };
  g.unsubscribe = function (a, b, c) {
    if ((a = this.T[a])) {
      var d = this.F;
      if (
        (a = za(a, function (a) {
          return d[a + 1] == b && d[a + 2] == c;
        }))
      )
        return this.Xb(a);
    }
    return !1;
  };
  g.Xb = function (a) {
    var b = this.F[a];
    if (b) {
      var c = this.T[b];
      0 != this.Lb
        ? (this.Jb.push(a), (this.F[a + 1] = ba))
        : (c && B(c, a),
          delete this.F[a],
          delete this.F[a + 1],
          delete this.F[a + 2]);
    }
    return !!b;
  };
  g.g = function (a, b) {
    var c = this.T[a];
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e];
      if (this.ue)
        for (e = 0; e < c.length; e++) {
          var h = c[e];
          be(this.F[h + 1], this.F[h + 2], d);
        }
      else {
        this.Lb++;
        try {
          for (e = 0, f = c.length; e < f; e++)
            (h = c[e]), this.F[h + 1].apply(this.F[h + 2], d);
        } finally {
          if ((this.Lb--, 0 < this.Jb.length && 0 == this.Lb))
            for (; (c = this.Jb.pop()); ) this.Xb(c);
        }
      }
      return 0 != e;
    }
    return !1;
  };
  g.clear = function (a) {
    if (a) {
      var b = this.T[a];
      b && (Xa(b, this.Xb, this), delete this.T[a]);
    } else (this.F.length = 0), (this.T = {});
  };
  g.Na = function (a) {
    if (a) {
      var b = this.T[a];
      return b ? b.length : 0;
    }
    a = 0;
    for (b in this.T) a += this.Na(b);
    return a;
  };
  g.h = function () {
    ae.D.h.call(this);
    this.clear();
    this.Jb.length = 0;
  };
  z.w(ce, J);
  var ei = [];
  g = ce.prototype;
  g.sa = function (a, b, c, d) {
    n(b) || (b && (ei[0] = b.toString()), (b = ei));
    for (var e = 0; e < b.length; e++) {
      var f = L(a, b[e], c || this.handleEvent, d || !1, this.R || this);
      if (!f) break;
      this.i[f.key] = f;
    }
    return this;
  };
  g.Hc = function (a, b, c, d) {
    return de(this, a, b, c, d);
  };
  g.Wc = function (a, b, c, d, e) {
    if (n(b)) for (var f = 0; f < b.length; f++) this.Wc(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (e = e || this.R || this),
        (c = ac(c)),
        (d = !!d),
        (b = Ub(a)
          ? a.Oa(b, c, d, e)
          : a
          ? (a = cc(a))
            ? a.Oa(b, c, d, e)
            : null
          : null),
        b && (lc(b), delete this.i[b.key]);
    return this;
  };
  g.Qc = function () {
    La(
      this.i,
      function (a, b) {
        this.i.hasOwnProperty(b) && lc(a);
      },
      this
    );
    this.i = {};
  };
  g.h = function () {
    ce.D.h.call(this);
    this.Qc();
  };
  g.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  z.w(ee, J);
  ee.prototype.vc = function () {
    return this.Ob;
  };
  ee.prototype.h = function () {
    ee.D.h.call(this);
    this.Ob = this.Fa = null;
  };
  fe.prototype.jd = null;
  var fi;
  z.w(ie, fe);
  fi = new ie();
  z.w(le, O);
  var ke = "",
    Ae = /^https?$/i,
    gi = ["POST", "PUT"],
    me = [];
  g = le.prototype;
  g.xe = function () {
    this.G();
    B(me, this);
  };
  g.send = function (a, b, c, d) {
    if (this.c)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request\x3d" +
          this.Gc +
          "; newUri\x3d" +
          a
      );
    b = b ? b.toUpperCase() : "GET";
    this.Gc = a;
    this.ra = "";
    this.oc = !1;
    this.da = !0;
    this.c = this.bc ? je(this.bc) : je(fi);
    this.ac = this.bc ? he(this.bc) : he(fi);
    this.c.onreadystatechange = u(this.Sd, this);
    this.af &&
      "onprogress" in this.c &&
      ((this.c.onprogress = u(function (a) {
        this.Rd(a, !0);
      }, this)),
      this.c.upload && (this.c.upload.onprogress = u(this.Rd, this)));
    try {
      (this.Bc = !0), this.c.open(b, String(a), !0), (this.Bc = !1);
    } catch (f) {
      this.wb(5, f);
      return;
    }
    a = c || "";
    var e = this.headers.clone();
    d &&
      md(d, function (a, b) {
        e.set(b, a);
      });
    d = za(e.I(), pe);
    c = m.FormData && a instanceof m.FormData;
    !A(gi, b) ||
      d ||
      c ||
      e.set(
        "Content-Type",
        "application/x-www-form-urlencoded;charset\x3dutf-8"
      );
    e.forEach(function (a, b) {
      this.c.setRequestHeader(b, a);
    }, this);
    this.Wd && (this.c.responseType = this.Wd);
    Qa(this.c, "withCredentials") && (this.c.withCredentials = this.ad);
    try {
      ye(this),
        0 < this.Vb &&
          ((this.Xc = oe(this.c))
            ? ((this.c.timeout = this.Vb),
              (this.c.ontimeout = u(this.hb, this)))
            : (this.Ub = jd(this.hb, this.Vb, this))),
        (this.Eb = !0),
        this.c.send(a),
        (this.Eb = !1);
    } catch (f) {
      this.wb(5, f);
    }
  };
  g.hb = function () {
    "undefined" != typeof re &&
      this.c &&
      ((this.ra = "Timed out after " + this.Vb + "ms, aborting"),
      this.dispatchEvent("timeout"),
      this.abort(8));
  };
  g.wb = function (a, b) {
    this.da = !1;
    this.c && ((this.pa = !0), this.c.abort(), (this.pa = !1));
    this.ra = b;
    qe(this);
    ve(this);
  };
  g.abort = function () {
    this.c &&
      this.da &&
      ((this.da = !1),
      (this.pa = !0),
      this.c.abort(),
      (this.pa = !1),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      ve(this));
  };
  g.h = function () {
    this.c &&
      (this.da &&
        ((this.da = !1), (this.pa = !0), this.c.abort(), (this.pa = !1)),
      ve(this, !0));
    le.D.h.call(this);
  };
  g.Sd = function () {
    this.fa || (this.Bc || this.Eb || this.pa ? we(this) : this.We());
  };
  g.We = function () {
    we(this);
  };
  g.Rd = function (a, b) {
    this.dispatchEvent(xe(a, "progress"));
    this.dispatchEvent(xe(a, b ? "downloadprogress" : "uploadprogress"));
  };
  g.Fb = function () {
    return !!this.c;
  };
  g.getResponseHeader = function (a) {
    return this.c && 4 == se(this) ? this.c.getResponseHeader(a) : void 0;
  };
  g.getAllResponseHeaders = function () {
    return this.c && 4 == se(this) ? this.c.getAllResponseHeaders() : "";
  };
  z.w(De, O);
  g = De.prototype;
  g.vc = function () {
    return this.Aa.vc();
  };
  g.load = function () {
    for (var a = this.oa, b = this.Aa.Fa, c = 0; c < b.length; c++) {
      var d = new le();
      a.sa(d, "complete", u(this.Ke, this, c));
      d.send(b[c]);
    }
  };
  g.Ke = function (a, b) {
    var c = b.target;
    ue(c) ? this.yc(a, c) : this.wc(a, c);
  };
  g.yc = function (a, b) {
    var c = Be(b);
    this.Aa.Ob[a] = c;
    a: {
      var d = this.Aa,
        c = d.Ob;
      if (c.length == d.Fa.length) {
        for (d = 0; d < c.length; d++)
          if (null == c[d]) {
            c = !1;
            break a;
          }
        c = !0;
      } else c = !1;
    }
    c && this.dispatchEvent("success");
    b.G();
  };
  g.wc = function (a, b) {
    this.dispatchEvent("error");
    b.G();
  };
  g.h = function () {
    De.D.h.call(this);
    this.oa.G();
    this.oa = null;
    this.Aa.G();
    this.Aa = null;
  }; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  W.prototype.cancel = function (a) {
    if (this.ga) this.aa instanceof W && this.aa.cancel();
    else {
      if (this.v) {
        var b = this.v;
        delete this.v;
        a ? b.cancel(a) : (b.fc--, 0 >= b.fc && b.cancel());
      }
      this.Qd ? this.Qd.call(this.pd, this) : (this.Tc = !0);
      this.ga || ((a = new Ne()), He(this), Fe(this, !1, a));
    }
  };
  W.prototype.md = function (a, b) {
    this.ec = !1;
    Fe(this, a, b);
  };
  W.prototype.ya = function (a) {
    He(this);
    Fe(this, !0, a);
  };
  W.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new N(function (a, b) {
        d = a;
        e = b;
      });
    Ie(this, d, function (a) {
      a instanceof Ne ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };
  Cc(W);
  z.w(Ge, y);
  Ge.prototype.message = "Deferred has already fired";
  Ge.prototype.name = "AlreadyCalledError";
  z.w(Ne, y);
  Ne.prototype.message = "Deferred was canceled";
  Ne.prototype.name = "CanceledError";
  Me.prototype.mf = function () {
    delete Le[this.K];
    throw this.wb;
  };
  var Le = {};
  var Oe = [],
    Ve = 0,
    Ue = 1;
  z.w(Te, y);
  var Ze = Va();
  z.w(Xe, O);
  g = Xe.prototype;
  g.Va = null;
  g.mc = !1;
  g.de = !1;
  g.Re = function (a, b, c, d) {
    var e = this.Z[a] || new ff();
    e.Kd = !0;
    e.Uc = c || null;
    e.pc = d || null;
    if (this.Z[a]) null != e.Sc && bf(this, a);
    else {
      this.Z[a] = e;
      c = [];
      for (d = 0; d < a.length; d++) Ea(c, b[a[d]].Fa);
      !this.mc ||
      this.de ||
      (this.mc && (Ze || (C("Firefox") && 0 <= va(Ya(), "36"))))
        ? ((this.Z[a].Vd = c),
          (b = new De(c)),
          (c = this.oa),
          c.sa(b, "success", u(this.yc, this, b, a)),
          c.sa(b, "error", u(this.wc, this, b, a)),
          b.load())
        : Qe(c);
    }
  };
  g.yc = function (a, b) {
    var c = this.Z[b];
    c.Sc = a.vc();
    c.Kd && bf(this, b);
    jd(a.G, 5, a);
  };
  g.wc = function (a, b, c) {
    var d = this.Z[b];
    d &&
      (delete this.Z[b],
      (b = d.pc),
      this.dispatchEvent(new af(0, void 0)),
      b && b(c));
    jd(a.G, 5, a);
  };
  g.h = function () {
    Xe.D.h.call(this);
    this.oa.G();
    this.oa = null;
  };
  var cf = new Qb("c"),
    df = new Qb("d"),
    ef = new Qb("e");
  z.w($e, K);
  z.w(Ye, K);
  z.w(af, K);
  z.w(gf, J);
  gf.prototype.ub = function () {
    return this.nd ? this.nd() : {};
  };
  gf.prototype.nc = function (a) {
    if (this.rd) this.rd(a);
    else if (ea(a))
      if (t(a.G)) a.G();
      else for (var b in a) delete a[b];
  };
  gf.prototype.h = function () {
    gf.D.h.call(this);
    for (var a = this.Ma; a.length; ) this.nc(a.pop());
    delete this.Ma;
  };
  kf.prototype.toString = function () {
    var a = [];
    a.push(
      this.type,
      " ",
      this.count,
      " (",
      Math.round(10 * this.time) / 10,
      " ms)"
    );
    this.Yc && a.push(" [VarAlloc \x3d ", this.Yc, "]");
    return a.join("");
  };
  jf.prototype.toString = function () {
    return null == this.type ? this.ye : "[" + this.type + "] " + this.ye;
  };
  lf.prototype.reset = function () {
    for (var a = 0; a < this.Ka.length; a++) {
      var b = this.qc.id;
      b && hf(this.Ac, b);
      hf(this.qc, this.Ka[a]);
    }
    this.Ka.length = 0;
    this.Mc.clear();
    this.ee = Qf();
    this.ld = this.ie = this.je = this.ke = this.le = 0;
    b = this.gb.I();
    for (a = 0; a < b.length; a++) {
      var c = this.gb.get(b[a]);
      c.count = 0;
      c.time = 0;
      c.Yc = 0;
      hf(this.fe, c);
    }
    this.gb.clear();
  };
  lf.prototype.toString = function () {
    for (var a = [], b = -1, c = [], d = 0; d < this.Ka.length; d++) {
      var e = this.Ka[d];
      1 == e.rc && c.pop();
      a.push(" ", of(e, this.ee, b, c.join("")));
      b = e.vd;
      a.push("\n");
      0 == e.rc && c.push("|  ");
    }
    if (0 != this.Mc.Na()) {
      var f = Qf();
      a.push(" Unstopped timers:\n");
      qd(this.Mc, function (b) {
        a.push(
          "  ",
          b,
          " (",
          f - b.startTime,
          " ms, started at ",
          nf(b.startTime),
          ")\n"
        );
      });
    }
    b = this.gb.I();
    for (d = 0; d < b.length; d++)
      (c = this.gb.get(b[d])), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push(
      "Total tracers created ",
      this.ie,
      "\n",
      "Total comments created ",
      this.ld,
      "\n",
      "Overhead start: ",
      this.le,
      " ms\n",
      "Overhead end: ",
      this.ke,
      " ms\n",
      "Overhead comment: ",
      this.je,
      " ms\n"
    );
    return a.join("");
  };
  new lf();
  z.w(pf, J);
  qf.prototype.wd = function (a) {
    this.zb && (this.zb.call(this.R || null, a), (this.zb = this.R = null));
  };
  qf.prototype.abort = function () {
    this.R = this.zb = null;
  };
  z.w(rf, J);
  g = rf.prototype;
  g.Fa = null;
  g.Se = pf;
  g.ta = null;
  g.Mb = function (a, b) {
    return this.Nb(this.Lc, a, b);
  };
  g.Nb = function (a, b, c) {
    b = new qf(b, c);
    a.push(b);
    return b;
  };
  g.h = function () {
    rf.D.h.call(this);
    Ob(this.ta);
  };
  z.w(z.X, J);
  ca(z.X);
  z.X.prototype.zd = function () {
    return this.Od;
  };
  z.X.prototype.Fb = function () {
    return 0 < this.ha.length;
  };
  z.X.prototype.Gb = function (a, b, c) {
    b || (this.sb = 0);
    this.ha = b = Hf(this, a);
    this.$ = this.hd ? a : Da(b);
    yf(this);
    0 != b.length &&
      (this.$a.push.apply(this.$a, b),
      (a = u(
        this.Jc.Re,
        this.Jc,
        Da(b),
        this.A,
        null,
        u(this.Le, this, this.$, b),
        u(this.Me, this),
        !!c
      )),
      (c = 5e3 * Math.pow(this.sb, 2)) ? window.setTimeout(a, c) : a());
  };
  z.X.prototype.load = function (a, b) {
    var c = [];
    Ha([a], c);
    for (var d = [], e = {}, f = 0; f < c.length; f++) {
      var h = c[f],
        k = this.A[h];
      if (!k) throw Error("Unknown module: " + h);
      var x = new W();
      e[h] = x;
      k.ta ? x.ya(this.Od) : (Df(this, h, k, !!b, x), Bf(this, h) || d.push(h));
    }
    0 < d.length && Ef(this, d);
    return e[a];
  };
  var xf = 4;
  g = z.X.prototype;
  g.Le = function (a, b, c) {
    this.sb++;
    this.$ = a;
    Xa(b, ha(B, this.$a), this);
    401 == c
      ? (wf(this, 0), (this.C.length = 0))
      : 410 == c
      ? (Lf(this, 3), If(this))
      : 3 <= this.sb
      ? (Lf(this, 1), If(this))
      : this.Gb(this.$, !0, 8001 == c);
  };
  g.Me = function () {
    Lf(this, 2);
    If(this);
  };
  g.Mb = function (a, b) {
    n(a) || (a = [a]);
    for (var c = 0; c < a.length; c++) this.Nb(a[c], b);
  };
  g.Nb = function (a, b) {
    var c = this.rb;
    c[a] || (c[a] = []);
    c[a].push(b);
  };
  g.xb = function (a) {
    for (var b = this.rb[a], c = 0; b && c < b.length; c++) b[c](a);
  };
  g.h = function () {
    z.X.D.h.call(this);
    Pb(Oa(this.A), this.ob);
    this.rb = this.C = this.Ga = this.$ = this.ha = this.A = null;
  };
  ca(Mf);
  z.v("potec.application", Mf);
  Mf.prototype.start = function () {
    function a() {
      var a = "CSS1Compat" === (window.document.compatMode || "");
      return void 0 !== window.pageXOffset
        ? window.pageYOffset
        : a
        ? window.document.documentElement.scrollTop
        : window.document.body.scrollTop;
    }
    var b = this,
      c = new Ud(),
      d = new Td(c);
    L(d, "resize", function () {
      b.sendMessage("viewportChanged", c.Pa());
    });
    L(window, "load", function () {
      b.sendMessage("windowLoaded", null);
    });
    var e,
      f = a(),
      h;
    L(window, "scroll", function () {
      e && window.clearTimeout(e);
      e = (0, window.setTimeout)(function () {
        b.sendMessage("windowScrolling", null);
        h = a();
        h > f
          ? b.sendMessage("windowScrollingDown", h)
          : h < f && b.sendMessage("windowScrollingUp", h);
        f = h;
      }, 50);
    });
    L(window.document.getElementById("outermost"), "click", function (a) {
      a.target === window.document.getElementById("outermost") &&
        b.sendMessage("bodyClicked");
    });
    for (var d = 0, k = this.Ba.length; d < k; d++) this.Ba[d].start();
  };
  Mf.prototype.sendMessage = function (a, b) {
    this.ia.g(a, b);
  };
  var Sf = new Rf();
  Rf.prototype.set = function (a) {
    this.Ud = a;
  };
  Rf.prototype.reset = function () {
    this.set(Qf());
  };
  Rf.prototype.get = function () {
    return this.Ud;
  };
  g = Tf.prototype;
  g.ed = !0;
  g.$d = !0;
  g.gf = !0;
  g.ff = !0;
  g.ae = !1;
  g.hf = !1;
  z.w(Wf, Tf);
  Xf.prototype.te = function (a) {
    if (!this.Fe[a.Ge()]) {
      var b;
      b = this.Ab;
      var c = [];
      c.push(b.Ze, " ");
      if (b.$d) {
        var d = new Date(a.He());
        c.push(
          "[",
          Uf(d.getFullYear() - 2e3) +
            Uf(d.getMonth() + 1) +
            Uf(d.getDate()) +
            " " +
            Uf(d.getHours()) +
            ":" +
            Uf(d.getMinutes()) +
            ":" +
            Uf(d.getSeconds()) +
            "." +
            Uf(Math.floor(d.getMilliseconds() / 10)),
          "] "
        );
      }
      b.gf && c.push("[", Vf(a, b.lf.get()), "s] ");
      b.ff && c.push("[", a.Ge(), "] ");
      b.hf && c.push("[", ai.name, "] ");
      c.push(a.xf());
      b.ae &&
        (a = a.wf()) &&
        c.push("\n", a instanceof Error ? a.message : a.toString());
      b.ed && c.push("\n");
      b = c.join("");
      if ((c = hi))
        switch (ai) {
          case bi:
            Yf(c, "info", b);
            break;
          case ci:
            Yf(c, "error", b);
            break;
          case di:
            Yf(c, "warn", b);
            break;
          default:
            Yf(c, "debug", b);
        }
      else this.Md += b;
    }
  };
  var hi = m.console;
  z.v("potec.init", function (a) {
    Fd(function (a, c) {
      return c ? c.querySelectorAll(a) : window.document.querySelectorAll(a);
    });
    z.P("#nojsWarning").removeNode();
    Zf(a);
    "undefined" !== typeof window.ui.jsCountUrl &&
      $f("mcomSitestat", window.ui.jsCountUrl);
  });
  z.v("potec.startModule", function (a, b) {
    Fd(function (a, b) {
      return b ? b.querySelectorAll(a) : window.document.querySelectorAll(a);
    });
    var c = Mf.W();
    Nf(c, a, null);
    b || Pf(c, a);
  });
  z.v("potec.sendMessage", $f);
  var bg = /\s*;\s*/;
  g = ag.prototype;
  g.isEnabled = function () {
    return window.navigator.cookieEnabled;
  };
  g.set = function (a, b, c, d, e, f) {
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    l(c) || (c = -1);
    e = e ? ";domain\x3d" + e : "";
    d = d ? ";path\x3d" + d : "";
    f = f ? ";secure" : "";
    c =
      0 > c
        ? ""
        : 0 == c
        ? ";expires\x3d" + new Date(1970, 1, 1).toUTCString()
        : ";expires\x3d" + new Date(Qf() + 1e3 * c).toUTCString();
    this.O.cookie = a + "\x3d" + b + e + d + c + f;
  };
  g.get = function (a, b) {
    for (
      var c = a + "\x3d", d = (this.O.cookie || "").split(bg), e = 0, f;
      (f = d[e]);
      e++
    ) {
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return "";
    }
    return b;
  };
  g.remove = function (a, b, c) {
    var d = this.ma(a);
    this.set(a, "", 0, b, c);
    return d;
  };
  g.I = function () {
    return cg(this).keys;
  };
  g.J = function () {
    return cg(this).values;
  };
  g.Na = function () {
    return this.O.cookie ? (this.O.cookie || "").split(bg).length : 0;
  };
  g.ma = function (a) {
    return l(this.get(a));
  };
  g.clear = function () {
    for (var a = cg(this).keys, b = a.length - 1; 0 <= b; b--)
      this.remove(a[b]);
  };
  z.uh = new ag(window.document);
  z.uh.tf = 3950;
  g = z.Y.prototype;
  g.start = function () {
    "function" === typeof this.f && ((this.Va = $d(this.name)), this.f());
  };
  g.getName = function () {
    return this.name;
  };
  g.log = function () {};
  g.g = function (a, b) {
    this.ia.g(a, b);
  };
  g.subscribe = function (a, b) {
    this.ia.subscribe(a, b);
  };
  g.ba = function (a, b) {
    this.ia.ba(a, b);
  };
  g.unsubscribe = function (a, b) {
    this.ia.unsubscribe(a, b);
  };
  g.Ec = function (a) {
    return a && "function" === typeof a;
  };
  g.get = function (a, b, c) {
    dg(this, a, b, c);
  };
  g.Y = function (a, b) {
    "function" === typeof b ? window.toast(a, b) : window.toast(a);
  };
  g.Ld = z.Y.prototype.Y;
  g.cb = function (a, b, c, d, e) {
    z.uh.set(a, b, 86400 * c, d || "/", e || ".mail.com");
  };
  g.Ec = function (a) {
    return a && "function" === typeof a;
  };
  z.w(kg, z.Y);
  z.v("potec.modules.ad", kg);
  kg.prototype.f = function () {
    var a = this;
    this.ba("welcomeLayerClosed", function () {
      ng(a);
    });
    this.ba("windowLoaded", function () {
      ng(a);
    });
    z.Z("desktop") ||
      this.subscribe("viewStateChanged", function (b) {
        lg(a, b.element);
      });
    z.Z("desktop") && mg(a);
    this.subscribe("windowScrolling", function () {
      a.fb &&
        (0 <= a.Dc
          ? Math.abs(
              window.document
                .getElementById("container")
                .getBoundingClientRect().top
            ) > a.Dc
            ? Kb(a.fb, "sticky")
            : Lb(a.fb, "sticky")
          : ng(a));
    });
    this.subscribe("gallery:AdRefresh", function () {
      og(a);
    });
  };
  z.w(pg, z.Y);
  z.v("potec.modules.article", pg);
  pg.prototype.f = function () {
    var a = this;
    this.zc = 0 < z.P(".mod-topper").length;
    this.subscribe("windowScrolling", function () {
      qg(a);
    });
    this.subscribe("viewportChanged", function () {
      qg(a);
    });
    this.ba("windowLoaded", function () {
      qg(a);
    });
    this.subscribe("topperClosed", function () {
      a.zc = !1;
    });
    z.Z("desktop") && sg(this);
    qg(this);
  };
  z.w(tg, z.Y);
  z.v("potec.modules.cookiepolicy", tg);
  tg.prototype.f = function () {
    for (
      var a = this, b = window.location.hostname, c = "", d = 0;
      d < this.na.length;
      d++
    )
      0 < b.indexOf(this.na[d]) && (c = this.na[d]);
    c = "." + c;
    b = this.a.find(".js-close");
    0 < b.length &&
      b.b("click", function (b) {
        b.stopPropagation();
        a.a.removeNode();
        a.cb(a.Ae, "true", 30, "/", c);
      });
  };
  z.w(ug, z.Y);
  z.v("potec.modules.footer", ug);
  ug.prototype.f = function () {
    var a = this,
      b = this.a.find(".nav \x3e li"),
      c = this.a.find(".nav \x3e li \x3e a, .nav \x3e li \x3e span");
    0 < b.length &&
      0 < c.length &&
      c.b("click", function (a) {
        a.preventDefault();
        z.U(b, "open");
        z.T(z.P(this).parent(), "open");
        return !1;
      });
    c = this.a.find("a[data-localepreference]");
    0 < c.length &&
      c.b("click", function () {
        var b = this.getAttribute("data-localepreference");
        a.cb("localePreference", b, 365);
      });
  };
  z.w(vg, z.Y);
  z.v("potec.modules.gallery", vg);
  g = vg.prototype;
  g.f = function () {
    var a = this;
    if (!gg(this, this.ab)) return !1;
    this.s = this.S.length;
    1 === this.s &&
      (z.R(this.B, { display: "none" }), z.R(this.u, { display: "none" }));
    this.X = "ontouchstart" in window;
    var b = "undefined" !== typeof window.Hammer;
    this.X
      ? b
        ? this.qa(!0)
        : this.Y(
            [
              window.MCOM_ASSETS_HOST + "/assets/hero/hammer.min.js",
              function () {
                return "undefined" !== typeof window.Hammer;
              },
            ],
            function () {
              a.qa(!0);
            }
          )
      : this.qa(!1);
  };
  g.V = function () {
    this.M = this.view.width();
  };
  g.qa = function (a) {
    var b = this,
      c = 1;
    z.Q(this.S, function (a) {
      (a = a.querySelector("figcaption")) &&
        b.ce.push(
          "\x3cb\x3e(" +
            c.toString() +
            " of " +
            b.s.toString() +
            ")\x3c/b\x3e " +
            a.innerHTML
        );
      c++;
    });
    this.V();
    z.R(this.ka, "width", (100 * this.s).toString() + "%");
    z.R(this.S, "width", (100 / this.s).toString() + "%");
    this.ja(this.o);
    this.subscribe("viewportChanged", function () {
      b.V();
    });
    this.subscribe("galleryExpanded", function () {
      b.V();
    });
    1 < this.s &&
      (z.R(this.u, { opacity: "1" }),
      (0, window.setTimeout)(function () {
        Rd(b.u, "style");
      }, 3e3));
    a &&
      ((a = new window.Hammer(this.view[0])),
      a.get("swipe").set({ threshold: 5 }),
      a.on("swipeleft swiperight", function (a) {
        b.Ra(a);
      }));
    this.B.b("click", function () {
      b.va();
    });
    this.u.b("click", function () {
      b.next();
    });
    window.document.addEventListener("keydown", function (a) {
      switch (a.keyCode) {
        case 37:
          b.va();
          break;
        case 39:
          b.next();
      }
    });
  };
  g.bb = function (a, b) {
    var c = window.Modernizr,
      d = "";
    c && c.csstransforms3d
      ? ((d = "translate3d(" + a + "%,0,0)"),
        z.R(b, { "-webkit-transform": d, transform: d }))
      : c && c.csstransforms
      ? ((d = "translate(" + a + "%,0)"),
        z.R(b, { "-webkit-transform": d, transform: d }))
      : z.R(b, "left", ((a * this.s) / 100) * this.M + "px");
  };
  g.va = function () {
    this.ja(this.o - 1);
  };
  g.next = function () {
    this.jc || (this.jc = !0);
    this.ja(this.o + 1);
  };
  g.ja = function (a) {
    this.o = Math.max(0, Math.min(a, this.s - 1));
    this.bb(-((100 / this.s) * this.o), this.ka);
    Od(this.jf, this.ce[this.o]);
    0 === this.o
      ? (z.T(this.B, "is-hidden"), z.U(this.u, "is-hidden"))
      : this.o === this.s - 1
      ? (z.U(this.B, "is-hidden"), z.T(this.u, "is-hidden"))
      : (z.U(this.B, "is-hidden"), z.U(this.u, "is-hidden"));
    this.cd++;
    0 === this.cd % 4 && this.g("gallery:AdRefresh");
    this.jc &&
      (this.g("gallery:brain"),
      this.g("gallery:gtmEvent", {
        Ee: "galleryClick",
        Ye: "g_" + this.o.toString(),
      }));
  };
  g.Ra = function (a) {
    switch (a.type) {
      case "swipeleft":
        this.next();
        break;
      case "swiperight":
        this.va();
    }
  };
  z.w(wg, z.Y);
  z.v("potec.modules.header", wg);
  wg.prototype.f = function () {
    xg(this);
    yg(this);
    var a = this.a.find(".searchbar");
    0 < a.length &&
      (hg(a),
      z.Z("desktop") ||
        ((a = a.find("form")), 0 < a.length && Rd(a, "target")));
    var b = this.a.find(".button-bookmark");
    0 < b.length &&
      b.b("click", function (a) {
        a.preventDefault();
        window.external && "AddFavorite" in window.external
          ? window.external.AddFavorite(
              window.location.href,
              window.document.title
            )
          : ((a =
              "Press " +
              (0 <= window.navigator.userAgent.toLowerCase().indexOf("mac")
                ? "Cmd"
                : "Ctrl") +
              " + D to bookmark this page."),
            b.find("span").text(a));
      });
  };
  D && E(8);
  var Cg = {},
    Mg = {};
  zg.prototype.kc = null;
  zg.prototype.toString = function () {
    return this.content;
  };
  z.w(Bg, zg);
  Bg.prototype.tb = Cg;
  var V = (function (a) {
    function b(a) {
      this.content = a;
    }
    b.prototype = a.prototype;
    return function (a, d) {
      var e = new b(String(a));
      void 0 !== d && (e.kc = d);
      return e;
    };
  })(Bg);
  (function (a) {
    function b(a) {
      this.content = a;
    }
    b.prototype = a.prototype;
    return function (a, d) {
      var e = String(a);
      if (!e) return "";
      e = new b(e);
      void 0 !== d && (e.kc = d);
      return e;
    };
  })(Bg);
  var Rg = {
      "\x00": "\x26#0;",
      "\t": "\x26#9;",
      "\n": "\x26#10;",
      "\x0B": "\x26#11;",
      "\f": "\x26#12;",
      "\r": "\x26#13;",
      " ": "\x26#32;",
      '"': "\x26quot;",
      "\x26": "\x26amp;",
      "'": "\x26#39;",
      "-": "\x26#45;",
      "/": "\x26#47;",
      "\x3c": "\x26lt;",
      "\x3d": "\x26#61;",
      "\x3e": "\x26gt;",
      "`": "\x26#96;",
      "\u0085": "\x26#133;",
      "\u00a0": "\x26#160;",
      "\u2028": "\x26#8232;",
      "\u2029": "\x26#8233;",
    },
    Sg = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "\x3c": "%3C",
      "\x3e": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    Gg = /[\x00\x22\x27\x3c\x3e]/g,
    Jg =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Ng =
      /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    Pg =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
    Eg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Fg = /</g;
  z.w(Tg, z.Y);
  z.v("potec.modules.headerslider", Tg);
  g = Tg.prototype;
  g.f = function () {
    var a = this;
    if (!gg(this, this.ab)) return !1;
    this.s = this.S.length;
    this.X = "ontouchstart" in window;
    var b = "undefined" !== typeof window.Hammer;
    this.X
      ? b
        ? this.Sa(!0)
        : this.Y(
            [
              window.MCOM_ASSETS_HOST + "/assets/hero/hammer.min.js",
              function () {
                return "undefined" !== typeof window.Hammer;
              },
            ],
            function () {
              a.Sa(!0);
            }
          )
      : this.Sa(!1);
  };
  g.V = function () {
    this.Yb = this.view.width() - 20;
    this.Qb = this.s * this.M;
    z.R(this.ka, "width", this.Qb.toString() + "px");
    this.Rb = Math.ceil(this.Qb / this.Yb);
    this.be = Math.floor(this.Yb / this.M);
    Ug(this, this.U);
  };
  g.Sa = function (a) {
    var b = this;
    this.V();
    this.subscribe("viewportChanged", function () {
      b.V();
    });
    this.subscribe("windowScrollingUp", function (a) {
      b.gc && Vg(b, !0, a);
    });
    this.subscribe("windowScrollingDown", function (a) {
      b.gc ? Vg(b, !1, a) : (Md(b.a), (b.gc = !0));
    });
    a &&
      ((a = new window.Hammer(this.view.get(0))),
      a.get("swipe").set({ threshold: 5 }),
      a.on("swipeleft swiperight", function (a) {
        b.Ra(a);
      }));
    this.B.b("click", function () {
      Ug(b, b.U - 1);
    });
    this.u.b("click", function () {
      Ug(b, b.U + 1);
    });
  };
  g.bb = function (a, b) {
    var c = window.Modernizr,
      d = "";
    c && c.csstransforms3d
      ? ((d = "translate3d(" + a + "px,0,0)"),
        z.R(b, { "-webkit-transform": d, transform: d }))
      : c && c.csstransforms
      ? ((d = "translate(" + a + "px,0)"),
        z.R(b, { "-webkit-transform": d, transform: d }))
      : z.R(b, "left", a + "px");
  };
  g.Ra = function (a) {
    switch (a.type) {
      case "swipeleft":
        Ug(this, this.U + 1);
        break;
      case "swiperight":
        Ug(this, this.U - 1);
    }
  };
  z.w(Xg, z.Y);
  z.v("potec.modules.hero", Xg);
  g = Xg.prototype;
  g.f = function () {
    var a = this;
    if (!gg(this, this.ab)) return !1;
    var b = this.m.dataset,
      c = b.interval;
    c && (this.fd = 1e3 * (0, window.parseInt)(c));
    this.s = this.S.length;
    b.taboolaCount = Math.floor(this.s / 2);
    b.componentType = "carousel";
    jg(b);
    this.X = "ontouchstart" in window;
    b = "undefined" !== typeof window.Hammer;
    this.X
      ? b
        ? (ah(a), this.qa(!0))
        : this.Y(
            [
              window.MCOM_ASSETS_HOST + "/assets/hero/hammer.min.js",
              function () {
                return "undefined" !== typeof window.Hammer;
              },
            ],
            function () {
              ah(a, !0);
              a.qa(!0);
            }
          )
      : (ah(a), this.qa(!1));
  };
  g.qa = function (a) {
    var b = this;
    b.Fc || $g(b, a);
    this.V();
    this.subscribe("viewportChanged", function () {
      b.V();
    });
    this.B.b("click", function () {
      b.va();
    });
    this.u.b("click", function () {
      b.next();
    });
    b.Fc || Zg(b, a);
  };
  g.V = function () {
    this.M = this.view.width();
    z.R(this.ka, "width", (this.s * this.M).toString() + "px");
    z.R(this.S, "width", this.M.toString() + "px");
    this.ja(this.o);
  };
  g.bb = function (a, b) {
    var c = window.Modernizr,
      d = "";
    c && c.csstransforms3d
      ? ((d = "translate3d(" + a + "px,0,0)"),
        z.R(b, { "-webkit-transform": d, transform: d }))
      : c && c.csstransforms
      ? ((d = "translate(" + a + "px,0)"),
        z.R(b, { "-webkit-transform": d, transform: d }))
      : z.R(b, "left", a + "px");
  };
  g.va = function () {
    this.ja(this.o - 1);
  };
  g.next = function () {
    this.ja(this.o + 1);
  };
  g.ja = function (a) {
    this.o = Math.max(0, Math.min(a, this.s - 1));
    this.bb(-(this.M * this.o), this.ka);
    Od(this.Oe, this.o + 1 + "\x26thinsp;/\x26thinsp;" + this.s);
    0 === this.o
      ? (z.T(this.B, "is-hidden"), z.U(this.u, "is-hidden"))
      : this.o === this.s - 1
      ? (z.U(this.B, "is-hidden"), z.T(this.u, "is-hidden"))
      : (z.U(this.B, "is-hidden"), z.U(this.u, "is-hidden"));
  };
  g.Ra = function (a) {
    switch (a.type) {
      case "swipeleft":
        this.next();
        break;
      case "swiperight":
        this.va();
    }
  };
  z.w(bh, z.Y);
  z.v("potec.modules.image", bh);
  bh.prototype.f = function () {
    var a = this.m.querySelector("span[data-picture]"),
      b = window.document.createElement("img");
    b.alt = a.dataset.alt;
    b.crossOrigin = "anonymous";
    b.dataset.src = a.dataset.src;
    b.dataset.srcset = a.dataset.srcset;
    b.dataset.sizes = a.dataset.sizes;
    b.classList.add("lazyImg");
    a.appendChild(b);
    this.g("lazyload:intersectionObserve", b);
  };
  z.w(ch, z.Y);
  z.v("potec.modules.inviewcheck", ch);
  ch.prototype.f = function () {
    function a() {
      var a;
      a = b.ud.getBoundingClientRect();
      a =
        a.top <
          (window.innerHeight ||
            window.document.documentElement.clientHeight) && 0 < a.bottom;
      a !== b.Hd &&
        ((b.Hd = a),
        b.log("Element " + b.ud.id + " viewStateChanged: " + a),
        b.g("viewStateChanged", { element: b.a[0], yf: a }));
    }
    var b = this;
    this.ba("welcomeLayerClosed", a);
    this.subscribe("viewportChanged", a);
    this.subscribe("windowScrolling", a);
    a();
  };
  z.w(dh, z.Y);
  z.v("potec.modules.konami", dh);
  dh.prototype.f = function () {
    var a = this;
    z.Z("desktop") &&
      this.Y(
        [
          window.MCOM_ASSETS_HOST + "/assets/konami/cheet.min.js",
          function () {
            return "undefined" !== typeof window.cheet;
          },
        ],
        function () {
          window.cheet("U U D D L R L R b a", function () {
            a.show();
          });
          window.cheet("s w a n s o n", function () {
            eh();
          });
        }
      );
  };
  dh.prototype.show = function () {
    var a = z.P(
      V(
        '\x3cdiv class\x3d"mod-konami"\x3e\x3cp class\x3d"above"\x3e\x26quot;Never half a** two things.\x26quot; \x26ndash; Ron Swanson\x3c/p\x3e\x3cp class\x3d"below"\x3eMail.com responsive relaunch presented by Tomislav Jerkovi\u0107, Martin Mortensen, Michael Klein, Michael Hoffmann, Tarek Hamed, Teodor Filipov, Ke Chang, Thomas Weiler and many more.\x3c/p\x3e\x3c/div\x3e'
      ).toString()
    );
    z.P("body").append(a);
    var b = z.P(".mod-konami");
    b.width();
    b.b("click", function () {
      function a() {
        b.removeNode();
      }
      z.U(b, "show");
      window.Modernizr.csstransitions || a();
      b.b("transitionend", a);
      b.b("webkitTransitionend", a);
    });
    z.T(b, "show");
  };
  z.w(fh, z.Y);
  z.v("potec.modules.lazyimg", fh);
  fh.prototype.f = function () {
    var a = this;
    if (
      "IntersectionObserver" in window &&
      "function" === typeof window.IntersectionObserver.prototype.observe
    )
      hh(a);
    else {
      this.images = Array.prototype.slice.call(
        window.document.getElementsByClassName("lazyImg")
      );
      for (var b = 0; b < a.images.length; b++) ih(a, a.images[b], b);
      a.subscribe("windowScrolling", function () {
        for (var b = a.images.length, c, f = 0; f < b; f++)
          (c = a.images[f]) && "" === c.src && gh(a, c, f);
      });
    }
    for (
      var b = window.document.querySelectorAll("[data-style]"), c = 0;
      c < b.length;
      c++
    )
      b[c].style = b[c].dataset.style;
  };
  z.w(jh, z.Y);
  z.v("potec.modules.loginform", jh);
  jh.prototype.f = function () {
    var a = this;
    hg(this.a);
    kh(this);
    lh(this);
    this.ba("loginLayerOpen", function () {
      a.hc();
    });
  };
  jh.prototype.hc = function () {
    var a = this.a.find("#login-password");
    if (a && 0 < a.length) {
      var b = !1;
      0 < z.Kd(a).length && (b = !0);
      this.g("trackPasswordStored", { ge: b, Ed: !1 });
    }
  };
  z.w(mh, z.Y);
  z.v("potec.modules.messagebar", mh);
  mh.prototype.f = function () {
    z.G(this.a[0], "error") &&
      (this.log("Removing user cookie..."),
      z.uh.remove("ushallpass", "/", ".mail.com"));
    this.a[0].dataset.maintenanceNotification &&
      (window.console.log("foobar", this.a[0].dataset),
      window.console.log("foobar", this.a[0].dataset.maintenanceNotification));
  };
  z.w(nh, z.Y);
  z.v("potec.modules.navigation", nh);
  nh.prototype.f = function () {
    try {
      qh(this);
    } catch (a) {
      this.log("init error");
    }
  };
  z.w(rh, z.Y);
  z.v("potec.modules.premiumlogin", rh);
  rh.prototype.f = function () {
    var a = this;
    this.log('Module "premiumlogin" runs!');
    this.subscribe("windowLoaded", function () {
      a.hc();
    });
  };
  rh.prototype.hc = function () {
    var a = this.a.find("#login-password");
    if (a && 0 < a.length) {
      var b = !1;
      0 < z.Kd(a).length && (b = !0);
      this.g("trackPasswordStored", { ge: b, Ed: !0 });
    }
  };
  z.w(sh, z.Y);
  z.v("potec.modules.promocookiehandler", sh);
  sh.prototype.f = function () {
    var a = this;
    if ("object" === typeof window.promoCookieHandler) {
      var b = window.promoCookieHandler.setCookieToString;
      b &&
        (this.log("Initial cookie value found."),
        z.uh.set(
          this.lb,
          b,
          86400 * this.kb.xd,
          this.kb.path,
          "." + (window.promoCookieHandler.domain || "mail.com")
        ));
    }
    this.subscribe("welcomeLayerClosed", function (b) {
      vh(a, b.lc, b.domain);
    });
    this.subscribe("topperClosed", function (b) {
      vh(a, b.lc, b.domain);
    });
  };
  z.w(wh, z.Y);
  z.v("potec.modules.scaffolding", wh);
  wh.prototype.f = function () {
    var a = this;
    this.log('Module "scaffolding" runs!');
    this.subscribe("windowScrolling", function () {
      a.log("Window scrolling.");
    });
    this.a.append(
      z.P(
        V('\x3cp class\x3d"soy"\x3eHello, ' + Dg("world") + "!\x3c/p\x3e")
          .content
      )
    );
  };
  z.w(xh, z.Y);
  z.v("potec.modules.seobox", xh);
  xh.prototype.f = function () {
    if (z.Z("desktop")) {
      var a = this.m.querySelector(".keywords");
      a &&
        a.addEventListener("click", function (a) {
          a.preventDefault();
          a = a.target;
          "SPAN" === a.nodeName.toUpperCase() && (a = a.parentNode);
          if (!a || !a.getAttribute("href")) return !1;
          (a = a.getAttribute("href").replace("#", "")) &&
            0 < a.length &&
            ((a =
              window.document.getElementById(a).offsetTop +
              window.document.getElementsByClassName("ad-banner")[0]
                .offsetHeight),
            "scrollBehavior" in window.document.documentElement.style
              ? window.scrollBy({ behavior: "smooth", left: 0, top: a })
              : window.scrollBy(0, a));
          return !1;
        });
    }
  };
  z.w(yh, z.Y);
  z.v("potec.modules.socialbar", yh);
  yh.prototype.f = function () {
    var a = this;
    this.subscribe("toggleSocialbar", function (b) {
      b ? z.T(a.a, "shown") : z.U(a.a, "shown");
    });
    this.subscribe("readingProgressUpdated", function (b) {
      b *= 100;
      100 < b && (b = 100);
      z.R(a.a.find(".progress"), "width", b.toString() + "%");
    });
  };
  z.w(zh, z.Y);
  z.v("potec.modules.socialbuttons", zh);
  zh.prototype.f = function () {
    var a = this;
    this.url = z.S(this.a, "data-url") || window.location.href;
    this.Td =
      "menubar\x3dno,toolbar\x3dno,resizable\x3dyes,scrollbars\x3dyes,height\x3d500,width\x3d500";
    this.a.find("[data-social]").b("click", function (b) {
      b.preventDefault();
      switch (this.getAttribute("data-social")) {
        case "facebook":
          window.open(
            "https://www.facebook.com/sharer/sharer.html?u\x3d" +
              (0, window.encodeURIComponent)(a.url),
            "",
            a.Td
          );
          break;
        case "twitter":
          window.open(
            "https://twitter.com/intent/tweet?text\x3d" +
              (0, window.encodeURIComponent)(window.document.title) +
              "\x26url\x3d" +
              a.url,
            a.Td
          );
      }
      return !1;
    });
  };
  z.w(Ah, z.Y);
  z.v("potec.modules.taboola", Ah);
  Ah.prototype.f = function () {
    if (window.ui && window.ui.taboola) {
      var a = this;
      this.Zd =
        window.sessionStorage &&
        "function" === typeof window.sessionStorage.getItem;
      fg(a, Eh(a), function (b) {
        var c = Ce(b);
        if (c) {
          a.Zd && window.sessionStorage.setItem("taboola-session", c.session);
          for (var d in c)
            "session" !== d &&
              c.hasOwnProperty(d) &&
              a.g("taboolaSet:" + d, c[d]);
        }
        Dh(a);
        a.subscribe("taboolaRepublish", function (b) {
          a.g("taboolaSet:" + b, c[b]);
        });
      });
      a.subscribe("taboolaOpenPopup", function () {
        Fh();
      });
    }
  };
  z.w(Ih, z.Y);
  z.v("potec.modules.taboolateasers", Ih);
  Ih.prototype.f = function () {
    var a = this,
      b = this.m.dataset;
    b && "true" === b.taboolaEnabled
      ? (jg(b),
        a.subscribe("taboolaSet:" + b.taboolaPlacementName, function (b) {
          if (
            5 === b.list.length ||
            4 === b.list.length ||
            3 === b.list.length
          ) {
            a.m.style.visibility = "visible";
            var d = a.m.getElementsByClassName("taboola-teasers")[0],
              e;
            e = b.list;
            var f;
            if (5 === e.length) {
              f = [e[1], e[2]];
              var h = [e[3], e[4]];
              e = Kh(e[0]) + Hh({ Vc: f }).content + Hh({ Vc: h }).content;
            } else
              4 === e.length
                ? ((f = [e[2], e[3]]),
                  (e = Kh(e[0]) + Kh(e[1]) + Hh({ Vc: f }).content))
                : (e =
                    3 === e.length ? Kh(e[0]) + Kh(e[1]) + Kh(e[2]) : void 0);
            d.innerHTML = e;
            d = a.m.getElementsByClassName("container-headline")[0];
            e = window.document.createElement("a");
            e.className = "taboola-sponsored";
            f = "SPONSORED BY TABOOLA";
            "es" === window.document.documentElement.lang
              ? (f = "PATROCINADO POR TABOOLA")
              : "fr" === window.document.documentElement.lang &&
                (f = "FOURNI PAR TABOOLA");
            e.innerText = f;
            d.appendChild(e);
            a.g("taboolaOpenPopup");
            Jh(a, b);
          } else a.m.style.display = "none";
        }))
      : (a.m.style.display = "none");
  };
  z.w(Lh, z.Y);
  z.v("potec.modules.teaser", Lh);
  Lh.prototype.f = function () {};
  z.w(Mh, z.Y);
  z.v("potec.modules.tool", Mh);
  Mh.prototype.f = function () {
    var a = this;
    Nh(this);
    this.subscribe("viewportChanged", function () {
      Nh(a);
    });
  };
  z.w(Oh, z.Y);
  z.v("potec.modules.topper", Oh);
  Oh.prototype.f = function () {
    var a = this;
    if (z.Z("desktop")) {
      var b = z.S(this.a, "data-coremid"),
        c = "mail.com";
      window.promoCookieHandler &&
        (c = window.promoCookieHandler.domain || "mail.com");
      var d = this.a.find(".js-close-topper");
      0 < d.length &&
        d.b("click", function (d) {
          d.stopPropagation();
          a.a.removeNode();
          b && a.g("topperClosed", { lc: b, domain: "." + c });
        });
    } else a.a.removeNode();
  };
  z.w(Ph, z.Y);
  z.v("potec.modules.trackingpixel", Ph);
  Ph.prototype.f = function () {
    var a = this;
    this.subscribe("mcomSitestat", function (a) {
      Qh(a, !0, !0);
    });
    this.ba("trackPasswordStored", function (b) {
      var c;
      c = (c = window.clickCounterParams)
        ? c.baseUrl +
          "?type\x3dhidden\x26country\x3d" +
          c.country +
          "\x26ts\x3d" +
          Date.now()
        : "";
      0 < c.length &&
        ((c +=
          "\x26name\x3dhomepage.startseite.event.stored." +
          (b.Ed ? "premium." : "free.") +
          b.ge.toString()),
        a.Va.info(c),
        (window.document.createElement("img").src = c));
    });
    this.subscribe("gallery:brain", function () {
      "undefined" !== typeof window.ui.jsCountUrl &&
        Qh(window.ui.jsCountUrl + "", !1, !1);
    });
    this.subscribe("gallery:gtmEvent", function (a) {
      "object" === typeof window.dataLayer &&
        window.dataLayer.push({ event: a.Ee, galleryPageUrl: a.Ye });
    });
    Rh();
  };
  z.w(Sh, z.Y);
  z.v("potec.modules.welcome", Sh);
  Sh.prototype.f = function () {
    function a() {
      Rd(z.P("body"), "style");
      c.a.removeNode();
      c.unsubscribe("viewportChanged", b);
      var a = z.S(c.a, "data-coremid"),
        d = "mail.com";
      window.promoCookieHandler &&
        (d = window.promoCookieHandler.domain || "mail.com");
      a && c.g("welcomeLayerClosed", { lc: a, domain: "." + d });
    }
    function b() {
      Th(c);
    }
    var c = this;
    if (window.isIE8) return this.a.removeNode(), !1;
    Th(this);
    z.R(z.P("body"), "overflow", "hidden");
    this.subscribe("viewportChanged", b);
    var d = this.a.find(".js-close");
    0 < d.length &&
      d.b("click", function () {
        z.R(
          c.a,
          "margin-top",
          "-" + window.document.documentElement.clientHeight + "px"
        );
        window.Modernizr.csstransitions || a();
      });
    this.a.b("transitionend", a);
    this.a.b("webkitTransitionEnd", a);
  };
}.call(this, __potec__));
