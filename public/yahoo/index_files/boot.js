var DARLA, $sf, $yac;
!(function () {
  function t(t, e, r) {
    var n = t || "",
      o = /\-min\.js$/gi,
      i = /\.html$/gi;
    return (
      n &&
        (e && -1 != n[nt](xt) && (n = n[rt](xt, e)),
        r &&
          (-1 != n[nt](o)
            ? (n = n[rt](o, "-debug.js"))
            : -1 != n[nt](i) && (n = n[rt](i, "-debug.html")))),
      n
    );
  }
  function e(e) {
    var r,
      n = U;
    if (e) {
      e[ft] || (e[ft] = Y),
        e[ut] || (e[ut] = H),
        e[ht] || (e[ht] = G),
        (n = e.debug),
        (r = e.lib_ver || "");
      try {
        r = r.match(xt)[0];
      } catch (o) {
        r = "";
      }
      (e[ft] = t(e[ft], r, n)),
        (e[ht] = t(e[ht], r, n)),
        (e[ut] = t(e[ut], r, n));
    }
  }
  function r(t) {
    var e,
      r = X;
    try {
      if (t && typeof t == V)
        for (e in t) {
          r = U;
          break;
        }
    } catch (n) {
      r = X;
    }
    return r;
  }
  function n() {
    (qt[ct] = {}),
      (qt.firstPos = z),
      (qt.meta = {}),
      (qt[W] = {}),
      (Ft = {}),
      (Nt = {});
  }
  function o() {
    var t,
      e,
      r,
      n,
      o,
      i,
      a,
      c,
      s,
      h,
      u = 0;
    for (t = g(); (e = t[u++]); )
      if (
        ((r = e.id || ""),
        r ||
          ((r =
            "sf_tag_" +
            new Date().getTime() +
            "_" +
            Math.round(100 * Math.random())),
          (e.id = r)),
        !Ft[r])
      ) {
        try {
          e.setAttribute("type", K + "-processed");
        } catch (d) {}
        if (((Ft[r] = r), (o = e.text || e.innerHTML || e.innerText || ""))) {
          try {
            o = o[rt](Dt, "")[rt](Tt, "");
            try {
              o = JSON.parse(o);
            } catch (l) {
              (i = new Ct("return " + o)), (o = i()), (i = z);
            }
          } catch (l) {
            i = o = z;
            continue;
          }
          if (o)
            if ((c = o[ct])) {
              for (n = 0; (a = c[n++]); )
                (s = a.id),
                  s &&
                    (Nt[s] ||
                      ((Nt[s] = 1),
                      (qt[ct][s] = a),
                      (qt[ct][s].dataTagID = r),
                      qt.firstPos || (qt.firstPos = a)));
              o[W] && (qt[W] = f(qt[W], o[W])),
                o.meta && (qt.meta = f(qt.meta, o.meta));
            } else {
              if (((s = o.id), !s)) continue;
              if (Nt[s]) continue;
              (h = o.html || o.src || ""),
                h &&
                  "string" == typeof h &&
                  ((Nt[s] = 1),
                  (qt[ct][s] = o),
                  (qt[ct][s].dataTagID = r),
                  qt.firstPos || (qt.firstPos = o),
                  o.baseConf && (qt[W] = f(qt[W], o.baseConf)));
            }
        }
      }
  }
  function i() {
    var t;
    try {
      Mt && !Et && $sf.host.boot(Gt);
    } catch (t) {
      s(531, t[dt]);
    }
  }
  function a() {
    try {
      $sf.host.onReady();
    } catch (t) {}
  }
  function c() {
    var t,
      e,
      r = z;
    try {
      (Pt = window),
        (r = j && j.host),
        (t = r && r.boot),
        (j = Pt && Pt.$sf),
        j && ((D = j.lib), (r = Mt ? (r ? r : j.host) : z)),
        D &&
          ((T = D.lang),
          (x = D.dom),
          T && ((P = T.cstr), (R = T.cnum), (C = T.cbool))),
        Mt &&
          r &&
          ((F = r.Config),
          (N = r.PosConfig),
          (q = r.PosMeta),
          (I = r.Position));
    } catch (n) {
      e = U;
    }
    return (
      e !== U && j && D && r && T && x && P && R && F && N && q && I
        ? r && t && !r.boot && (r.boot = _)
        : (F = N = q = I = z),
      r
    );
  }
  function s(t, e) {
    try {
      D && D.log && D.logger.note(t, e);
    } catch (r) {}
  }
  function f(t, e, r) {
    var n, o, i;
    if ((t || (t = {}), !e || typeof e != V || e instanceof Lt == U)) return t;
    if (e.nodeType) return t;
    for (o in e)
      try {
        if (
          ((n = e[o]),
          (i = typeof n),
          i == V &&
            n &&
            (n = typeof t[o] == V && t[o] ? f(t[o], n, r) : f({}, n, r)),
          r && o in t)
        )
          continue;
        t[o] = n;
      } catch (a) {
        continue;
      }
    return t;
  }
  function h() {
    var t,
      e,
      n,
      i,
      a,
      s = {};
    c();
    try {
      t = j && j.host;
    } catch (h) {
      t = z;
    }
    try {
      i = t && t[W];
    } catch (h) {
      i = z;
    }
    try {
      a = t && F();
    } catch (h) {
      a = z;
    }
    try {
      e = Pt.DARLA_CONFIG;
    } catch (h) {
      e = z;
    }
    try {
      n = Pt.$YAC_CONF;
    } catch (h) {
      n = z;
    }
    return (
      (s = i ? f(s, i, X) : s),
      (s = e ? f(s, e, X) : s),
      (s = n ? f(s, n, X) : s),
      (s = a ? f(s, a, X) : s),
      o(),
      (s = f(s, qt[W], X)),
      r(s) && (s = z),
      s
    );
  }
  function u(t, e) {
    var r = [
      "<",
      $t,
      " type='text/java",
      $t,
      "' src='",
      t,
      "'",
      "",
      "",
      "",
      "></",
      $t,
      ">",
    ];
    return e && ((r[7] = "id='"), (r[8] = e), (r[9] = "'")), r.join("");
  }
  function d() {}
  function l(t, e) {
    var r = document;
    (t = t || 0),
      t && s(t),
      Mt ||
        (r.open("text/html", "replace"),
        r.write("<!-- sf err (", t || 0, ") ", e || "", " -->"),
        r.close()),
      (r = z);
  }
  function y(t) {
    return (t && t.tagName && t.tagName.toLowerCase()) || "";
  }
  function m(t) {
    return (t && Rt && Rt.getElementById(t)) || z;
  }
  function p(t) {
    return (t && Rt && Rt.getElementsByTagName(t)) || [];
  }
  function g() {
    var t,
      e,
      r = z,
      n = "querySelectorAll",
      o = 0;
    if (kt === z)
      try {
        kt = n in document;
      } catch (i) {
        kt = U;
      }
    if (kt)
      try {
        r = Rt[n]($t + "[type='" + K + "']");
      } catch (i) {
        r = z;
      }
    if (!r) for (t = p($t), r = []; (e = t[o++]); ) e.type == K && r.push(e);
    return r || [];
  }
  function v() {
    var t,
      e = m(jt);
    if (e)
      try {
        b.call(e);
      } catch (t) {
        s(532, t[dt]);
      }
    else s(533);
  }
  function b() {
    var t,
      e = this,
      r = U;
    y(e) != $t && (e = m(jt)),
      e &&
        ((t = e.readyState),
        e[Q]
          ? ("loaded" != t && "complete" != t) || ((r = X), (e[Q] = z))
          : ((r = X), (e.onload = z)),
        r && ((e = z), c(), j && D && T && x ? ((b = d), a(), _(Gt)) : s(534)));
  }
  function w() {
    var t, r, n, o, a, f, u;
    if (!Et && Mt)
      if (
        ((r = c()),
        (u = !!F),
        j || (Pt.$sf = j = {}),
        r || ($sf.host = r = {}),
        r.boot)
      ) {
        if (x && !St)
          try {
            (St = X), x.wait(i);
          } catch (d) {
            s(539, d[dt]);
          }
      } else if (((r.boot = _), (t = h() || {}), e(t), (n = t[ft]), u)) _(Gt);
      else if (
        ((f = (ot in t && t[ot] === U) || (it in t && t[it] === U) ? U : X),
        (f = f && !!n && !Bt),
        f &&
          ((a = m(jt)), a && y(a) == $t && a.src == n && ((f = U), (Bt = X))),
        f && !Bt)
      )
        try {
          (o = p("head")[0]),
            (a = Rt.createElement($t)),
            (a.id = jt),
            (a.type = "text/java" + $t),
            (a.className = "sf_lib"),
            Pt.ActiveXObject ? (a[Q] = b) : (a.onload = b),
            (a.src = n),
            (Bt = X),
            setTimeout(v, pt),
            o.appendChild(a);
        } catch (d) {
          s(535, d[dt]);
        }
  }
  function A(t, e) {
    var r,
      n,
      o = U,
      i = ["hasError", "hasErr", "err", "error"],
      a = 0;
    if (t && C) {
      for (; (r = i[a++]); )
        if (r in t && C(t[r])) {
          o = X;
          break;
        }
      o || e || ((n = t.meta), n && (o = A(n, X)));
    }
    return o;
  }
  function $(t) {
    var e,
      n,
      o,
      i,
      a,
      c,
      h,
      d,
      y,
      p,
      g = z,
      v = j && j.ext;
    if (t)
      if (Mt) {
        if ((o = t.id)) {
          if (
            ((i = N.item(o)),
            (i.id = o),
            (i.pos = o),
            (a = t[W]),
            r(a) ||
              ((i = f(i, a, X)),
              i.dest || (i.dest = a.dest || ""),
              i.w || (i.w = a.w || 0),
              i.h || (i.h = a.h || 0),
              (i = N(i))),
            i &&
              ((d = P(i.dest)),
              d || ((d = qt[ct][o].dataTagID), d && (i = N(i, d)))),
            r(i))
          )
            return void s(429, o);
          if (!d) return void s(430, o);
          if (((c = m(d)), !c)) return void s(431, o);
          (h = t.meta),
            (h = r(h) ? z : new q(h)),
            (n = new I(t, z, h, i)),
            (g = n);
        }
      } else {
        try {
          y = top.document;
        } catch (b) {
          y = z;
        }
        if (((e = t[st] || ""), (e = e || u(t.src)), y || (e && !A(t))))
          if (y || !Ot || It)
            y
              ? setTimeout(function () {
                  l(514);
                }, 100)
              : setTimeout(function () {
                  l(537);
                }, 100);
          else {
            It = X;
            try {
              ($sf.host = z), delete $sf.host, (I = N = F = q = z);
            } catch (b) {}
            try {
              Rt.write(e);
            } catch (b) {}
          }
        else {
          if (v && v.msg)
            try {
              v.msg("noad");
            } catch (b) {}
          else
            try {
              (y = document.referrer),
                y && -1 != y[tt]("http")
                  ? ((p = y[tt]("/", 9)),
                    (p = -1 == p ? y.length : p),
                    (y = y.substring(0, p)))
                  : (y = ""),
                y.length > 8 &&
                  top[yt]("noad=1&id=" + (t.id || t.pos || "unknown"), y);
            } catch (b) {}
          setTimeout(function () {
            l(539);
          }, 100);
        }
      }
    else s(432);
    return g;
  }
  function _(t) {
    var n, a, c, f, u, d, l, y, p;
    if (Mt && (!j || !T || !x)) return s(542), U;
    if (Et) return s(538), U;
    if (Mt) {
      if (((d = h()), r(qt[ct]) && !St)) {
        St = X;
        try {
          x.wait(i);
        } catch (p) {
          s(542, p[dt]);
        }
        return;
      }
      d || (d = {}), e(d), (Et = X);
      try {
        d && (d[lt] || d[mt] || (d[mt] = J), (d = F(d)));
      } catch (g) {
        d = z;
      }
      if (r(d) || !d[ft]) return (d = z), (Et = U), s(543), U;
      if (t === Gt && d && (d[at] === U || d[ot] === U)) return void (Et = U);
      try {
        u = new DARLA.Response("prefetched", qt.meta);
      } catch (p) {
        return s(545, p[dt]), void (Et = U);
      }
      f = qt[ct];
      for (a in f)
        if (
          ((n = f[a]), (c = $(n)), c && t === Gt && d[at] !== U && d[ot] !== U)
        ) {
          try {
            u.add(c), (n.r = 1);
          } catch (p) {}
          if ((y = m(n.dataTagID)))
            try {
              y.setAttribute("type", K + "-booted");
            } catch (p) {}
        }
      try {
        l = u.length();
      } catch (p) {
        (l = 0), s(433, p[dt]);
      }
      if (l) {
        try {
          (DARLA._callingRenderFromBoot = !0), j.host[Z](u);
        } catch (p) {
          s(540, p[dt]);
        }
        return X;
      }
      if (Yt) return;
      if (((Yt = d.init), Yt && Pt.DARLA && (d[lt] || d[mt])))
        try {
          DARLA.event("sf_init", Yt);
        } catch (p) {
          s(541, p[dt]);
        }
    } else o(), (Et = X), $(qt.firstPos);
    return X;
  }
  var j,
    D,
    T,
    x,
    P,
    R,
    C,
    L,
    F,
    N,
    q,
    I,
    M,
    O,
    E,
    k,
    B,
    S,
    Y,
    G,
    H,
    J,
    U = !1,
    X = !0,
    z = null,
    K = "text/x-safeframe",
    Q = "onreadystatechange",
    V = "object",
    W = "conf",
    Z = "render",
    tt = "indexOf",
    et = "position",
    rt = "replace",
    nt = "search",
    ot = "auto",
    it = ot + "_lib",
    at = ot + "_" + Z,
    ct = et + "s",
    st = "html",
    ft = "hostFile",
    ht = Z + "File",
    ut = "msgFile",
    dt = "message",
    lt = "servicePath",
    yt = "postMessage",
    mt = "x" + lt,
    pt = 3e4,
    gt = "http://l.yimg.com/rq/darla",
    vt = "https://s.yimg.com/rq/darla",
    bt = "3-26-0",
    wt = "http://l.yimg.com/rq/darla/3-26-0/js/g-r-min.js",
    At = "http://fc.yahoo.com/sdarla/php/fc.html",
    $t = "script",
    _t =
      "sf_auto_" +
      (function () {
        var t = new Date();
        return [
          t.getDay(),
          "-",
          t.getDate(),
          "-",
          t.getMonth(),
          "-",
          t.getFullYear(),
        ].join("");
      })(),
    jt = "sf_host_lib_" + _t,
    Dt = /^\s\s*/,
    Tt = /\s\s*$/,
    xt = /(\d+\-\d+\-\d+)|(9999)/,
    Pt = window,
    Rt = Pt && Pt.document,
    Ct = Function,
    Lt = Object,
    Ft = {},
    Nt = {},
    qt = {},
    It = U,
    Mt = U,
    Ot = U,
    Et = U,
    kt = z,
    Bt = U,
    St = U,
    Yt = z,
    Gt = {};
  try {
    if (
      ((M = (Pt.$sf && $sf.host && $sf.host.boot) || z),
      M && "function" == typeof M && M != _)
    )
      return void (Pt[_t] = X);
    if (_t in Pt) return;
    Pt[_t] = X;
  } catch (Ht) {
    return void s(541);
  }
  (O = gt),
    (E = vt),
    (S = bt),
    (Y = wt),
    (J = At),
    (O && 0 == O[tt]("http:")) || (O = "http://l.yimg.com/rq/darla/"),
    (E && 0 == E[tt]("https:")) || (E = "https://s.yimg.com/rq/darla/"),
    (S && -1 != S[nt](xt)) || (S = "2-8-4"),
    (J && -1 != J[tt]("http")) ||
      (J = "http://fc.yahoo.com/sdarla/php/fc.html");
  try {
    L = Rt.URL || location.href;
  } catch (Ht) {
    L = "";
  }
  0 == L[tt]("https:") && ((O = E), (J = J[rt](/^http\:/i, "https:"))),
    (k = O + "/" + S),
    (B = k + "/" + st),
    (Y && -1 != Y[tt](".js")) || (Y = k + "/js/g-r-min.js");
  try {
    Mt = !(Pt != top);
  } catch (Ht) {
    Mt = U;
  }
  if (((G = B + "/r-sf." + st), (H = B + "/msg." + st), Mt === U))
    try {
      Ot = !(Pt.parent != top);
    } catch (Ht) {
      Ot = U;
    }
  n(), Mt ? (c(), w()) : Ot ? (c(), _()) : s(541);
})();
