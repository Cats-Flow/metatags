function H6(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Gi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var fm = { exports: {} },
  Ms = {},
  pm = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ti = Symbol.for("react.element"),
  W6 = Symbol.for("react.portal"),
  U6 = Symbol.for("react.fragment"),
  Z6 = Symbol.for("react.strict_mode"),
  G6 = Symbol.for("react.profiler"),
  K6 = Symbol.for("react.provider"),
  Y6 = Symbol.for("react.context"),
  X6 = Symbol.for("react.forward_ref"),
  Q6 = Symbol.for("react.suspense"),
  q6 = Symbol.for("react.memo"),
  J6 = Symbol.for("react.lazy"),
  np = Symbol.iterator;
function e8(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (np && e[np]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mm = Object.assign,
  gm = {};
function ho(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gm),
    (this.updater = n || hm);
}
ho.prototype.isReactComponent = {};
ho.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ho.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vm() {}
vm.prototype = ho.prototype;
function qc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gm),
    (this.updater = n || hm);
}
var Jc = (qc.prototype = new vm());
Jc.constructor = qc;
mm(Jc, ho.prototype);
Jc.isPureReactComponent = !0;
var rp = Array.isArray,
  ym = Object.prototype.hasOwnProperty,
  ed = { current: null },
  Sm = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ym.call(t, r) && !Sm.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Ti,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: ed.current,
  };
}
function t8(e, t) {
  return {
    $$typeof: Ti,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function td(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ti;
}
function n8(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var op = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? n8("" + e.key)
    : t.toString(36);
}
function xa(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ti:
          case W6:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Ml(a, 0) : r),
      rp(o)
        ? ((n = ""),
          e != null && (n = e.replace(op, "$&/") + "/"),
          xa(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (td(o) &&
            (o = t8(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(op, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), rp(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + Ml(i, s);
      a += xa(i, t, n, l, o);
    }
  else if (((l = e8(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ml(i, s++)), (a += xa(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Ki(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    xa(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function r8(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ye = { current: null },
  ka = { transition: null },
  o8 = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: ka,
    ReactCurrentOwner: ed,
  };
H.Children = {
  map: Ki,
  forEach: function (e, t, n) {
    Ki(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ki(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ki(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!td(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = ho;
H.Fragment = U6;
H.Profiler = G6;
H.PureComponent = qc;
H.StrictMode = Z6;
H.Suspense = Q6;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o8;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = mm({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = ed.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      ym.call(t, l) &&
        !Sm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ti, type: e.type, key: o, ref: i, props: r, _owner: a };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: Y6,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: K6, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = wm;
H.createFactory = function (e) {
  var t = wm.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: X6, render: e };
};
H.isValidElement = td;
H.lazy = function (e) {
  return { $$typeof: J6, _payload: { _status: -1, _result: e }, _init: r8 };
};
H.memo = function (e, t) {
  return { $$typeof: q6, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = ka.transition;
  ka.transition = {};
  try {
    e();
  } finally {
    ka.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Ye.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
H.useId = function () {
  return Ye.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Ye.current.useRef(e);
};
H.useState = function (e) {
  return Ye.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Ye.current.useTransition();
};
H.version = "18.2.0";
pm.exports = H;
var w = pm.exports;
const x = Qc(w),
  ip = H6({ __proto__: null, default: x }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i8 = w,
  a8 = Symbol.for("react.element"),
  s8 = Symbol.for("react.fragment"),
  l8 = Object.prototype.hasOwnProperty,
  u8 = i8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  c8 = { key: !0, ref: !0, __self: !0, __source: !0 };
function xm(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) l8.call(t, r) && !c8.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: a8,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: u8.current,
  };
}
Ms.Fragment = s8;
Ms.jsx = xm;
Ms.jsxs = xm;
fm.exports = Ms;
var M = fm.exports,
  Tu = {},
  km = { exports: {} },
  ft = {},
  Cm = { exports: {} },
  Pm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(F, N) {
    var B = F.length;
    F.push(N);
    e: for (; 0 < B; ) {
      var D = (B - 1) >>> 1,
        te = F[D];
      if (0 < o(te, N)) (F[D] = N), (F[B] = te), (B = D);
      else break e;
    }
  }
  function n(F) {
    return F.length === 0 ? null : F[0];
  }
  function r(F) {
    if (F.length === 0) return null;
    var N = F[0],
      B = F.pop();
    if (B !== N) {
      F[0] = B;
      e: for (var D = 0, te = F.length, W = te >>> 1; D < W; ) {
        var Ne = 2 * (D + 1) - 1,
          Nt = F[Ne],
          Se = Ne + 1,
          be = F[Se];
        if (0 > o(Nt, B))
          Se < te && 0 > o(be, Nt)
            ? ((F[D] = be), (F[Se] = B), (D = Se))
            : ((F[D] = Nt), (F[Ne] = B), (D = Ne));
        else if (Se < te && 0 > o(be, B)) (F[D] = be), (F[Se] = B), (D = Se);
        else break e;
      }
    }
    return N;
  }
  function o(F, N) {
    var B = F.sortIndex - N.sortIndex;
    return B !== 0 ? B : F.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    S = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(F) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= F)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function E(F) {
    if (((v = !1), m(F), !S))
      if (n(l) !== null) (S = !0), ae(T);
      else {
        var N = n(u);
        N !== null && je(E, N.startTime - F);
      }
  }
  function T(F, N) {
    (S = !1), v && ((v = !1), g(_), (_ = -1)), (h = !0);
    var B = f;
    try {
      for (
        m(N), d = n(l);
        d !== null && (!(d.expirationTime > N) || (F && !q()));

      ) {
        var D = d.callback;
        if (typeof D == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var te = D(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(l) && r(l),
            m(N);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var W = !0;
      else {
        var Ne = n(u);
        Ne !== null && je(E, Ne.startTime - N), (W = !1);
      }
      return W;
    } finally {
      (d = null), (f = B), (h = !1);
    }
  }
  var R = !1,
    A = null,
    _ = -1,
    L = 5,
    j = -1;
  function q() {
    return !(e.unstable_now() - j < L);
  }
  function pe() {
    if (A !== null) {
      var F = e.unstable_now();
      j = F;
      var N = !0;
      try {
        N = A(!0, F);
      } finally {
        N ? z() : ((R = !1), (A = null));
      }
    } else R = !1;
  }
  var z;
  if (typeof p == "function")
    z = function () {
      p(pe);
    };
  else if (typeof MessageChannel < "u") {
    var re = new MessageChannel(),
      mt = re.port2;
    (re.port1.onmessage = pe),
      (z = function () {
        mt.postMessage(null);
      });
  } else
    z = function () {
      k(pe, 0);
    };
  function ae(F) {
    (A = F), R || ((R = !0), z());
  }
  function je(F, N) {
    _ = k(function () {
      F(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (F) {
      F.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || h || ((S = !0), ae(T));
    }),
    (e.unstable_forceFrameRate = function (F) {
      0 > F || 125 < F
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < F ? Math.floor(1e3 / F) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (F) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = f;
      }
      var B = f;
      f = N;
      try {
        return F();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (F, N) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var B = f;
      f = F;
      try {
        return N();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (F, N, B) {
      var D = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? D + B : D))
          : (B = D),
        F)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = B + te),
        (F = {
          id: c++,
          callback: N,
          priorityLevel: F,
          startTime: B,
          expirationTime: te,
          sortIndex: -1,
        }),
        B > D
          ? ((F.sortIndex = B),
            t(u, F),
            n(l) === null &&
              F === n(u) &&
              (v ? (g(_), (_ = -1)) : (v = !0), je(E, B - D)))
          : ((F.sortIndex = te), t(l, F), S || h || ((S = !0), ae(T))),
        F
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (F) {
      var N = f;
      return function () {
        var B = f;
        f = N;
        try {
          return F.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})(Pm);
Cm.exports = Pm;
var d8 = Cm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em = w,
  ct = d8;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tm = new Set(),
  Jo = {};
function gr(e, t) {
  to(e, t), to(e + "Capture", t);
}
function to(e, t) {
  for (Jo[e] = t, e = 0; e < t.length; e++) Tm.add(t[e]);
}
var fn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bu = Object.prototype.hasOwnProperty,
  f8 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ap = {},
  sp = {};
function p8(e) {
  return bu.call(sp, e)
    ? !0
    : bu.call(ap, e)
    ? !1
    : f8.test(e)
    ? (sp[e] = !0)
    : ((ap[e] = !0), !1);
}
function h8(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function m8(e, t, n, r) {
  if (t === null || typeof t > "u" || h8(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Xe(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nd = /[\-:]([a-z])/g;
function rd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nd, rd);
    Ie[t] = new Xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nd, rd);
    Ie[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(nd, rd);
  Ie[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function od(e, t, n, r) {
  var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (m8(t, n, o, r) && (n = null),
    r || o === null
      ? p8(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vn = Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yi = Symbol.for("react.element"),
  br = Symbol.for("react.portal"),
  Ar = Symbol.for("react.fragment"),
  id = Symbol.for("react.strict_mode"),
  Au = Symbol.for("react.profiler"),
  bm = Symbol.for("react.provider"),
  Am = Symbol.for("react.context"),
  ad = Symbol.for("react.forward_ref"),
  Mu = Symbol.for("react.suspense"),
  _u = Symbol.for("react.suspense_list"),
  sd = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  Mm = Symbol.for("react.offscreen"),
  lp = Symbol.iterator;
function xo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lp && e[lp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  _l;
function Lo(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _l = (t && t[1]) || "";
    }
  return (
    `
` +
    _l +
    e
  );
}
var Rl = !1;
function Ol(e, t) {
  if (!e || Rl) return "";
  Rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Rl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Lo(e) : "";
}
function g8(e) {
  switch (e.tag) {
    case 5:
      return Lo(e.type);
    case 16:
      return Lo("Lazy");
    case 13:
      return Lo("Suspense");
    case 19:
      return Lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ol(e.type, !1)), e;
    case 11:
      return (e = Ol(e.type.render, !1)), e;
    case 1:
      return (e = Ol(e.type, !0)), e;
    default:
      return "";
  }
}
function Ru(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ar:
      return "Fragment";
    case br:
      return "Portal";
    case Au:
      return "Profiler";
    case id:
      return "StrictMode";
    case Mu:
      return "Suspense";
    case _u:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Am:
        return (e.displayName || "Context") + ".Consumer";
      case bm:
        return (e._context.displayName || "Context") + ".Provider";
      case ad:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sd:
        return (
          (t = e.displayName || null), t !== null ? t : Ru(e.type) || "Memo"
        );
      case xn:
        (t = e._payload), (e = e._init);
        try {
          return Ru(e(t));
        } catch {}
    }
  return null;
}
function v8(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ru(t);
    case 8:
      return t === id ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function jn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function _m(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function y8(e) {
  var t = _m(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Xi(e) {
  e._valueTracker || (e._valueTracker = y8(e));
}
function Rm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _m(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ha(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ou(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function up(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = jn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Om(e, t) {
  (t = t.checked), t != null && od(e, "checked", t, !1);
}
function Lu(e, t) {
  Om(e, t);
  var n = jn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Fu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fu(e, t.type, jn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function cp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Fu(e, t, n) {
  (t !== "number" || Ha(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fo = Array.isArray;
function Ur(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function dp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Fo(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: jn(n) };
}
function Lm(e, t) {
  var n = jn(t.value),
    r = jn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function fp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Iu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Qi,
  Vm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qi = Qi || document.createElement("div"),
          Qi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Do = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  S8 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Do).forEach(function (e) {
  S8.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Do[t] = Do[e]);
  });
});
function Im(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Do.hasOwnProperty(e) && Do[e])
    ? ("" + t).trim()
    : t + "px";
}
function jm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Im(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var w8 = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ju(e, t) {
  if (t) {
    if (w8[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Nu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Du = null;
function ld(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $u = null,
  Zr = null,
  Gr = null;
function pp(e) {
  if ((e = Mi(e))) {
    if (typeof $u != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Fs(t)), $u(e.stateNode, e.type, t));
  }
}
function Nm(e) {
  Zr ? (Gr ? Gr.push(e) : (Gr = [e])) : (Zr = e);
}
function Dm() {
  if (Zr) {
    var e = Zr,
      t = Gr;
    if (((Gr = Zr = null), pp(e), t)) for (e = 0; e < t.length; e++) pp(t[e]);
  }
}
function $m(e, t) {
  return e(t);
}
function Bm() {}
var Ll = !1;
function zm(e, t, n) {
  if (Ll) return e(t, n);
  Ll = !0;
  try {
    return $m(e, t, n);
  } finally {
    (Ll = !1), (Zr !== null || Gr !== null) && (Bm(), Dm());
  }
}
function ti(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Bu = !1;
if (fn)
  try {
    var ko = {};
    Object.defineProperty(ko, "passive", {
      get: function () {
        Bu = !0;
      },
    }),
      window.addEventListener("test", ko, ko),
      window.removeEventListener("test", ko, ko);
  } catch {
    Bu = !1;
  }
function x8(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var $o = !1,
  Wa = null,
  Ua = !1,
  zu = null,
  k8 = {
    onError: function (e) {
      ($o = !0), (Wa = e);
    },
  };
function C8(e, t, n, r, o, i, a, s, l) {
  ($o = !1), (Wa = null), x8.apply(k8, arguments);
}
function P8(e, t, n, r, o, i, a, s, l) {
  if ((C8.apply(this, arguments), $o)) {
    if ($o) {
      var u = Wa;
      ($o = !1), (Wa = null);
    } else throw Error(O(198));
    Ua || ((Ua = !0), (zu = u));
  }
}
function vr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hp(e) {
  if (vr(e) !== e) throw Error(O(188));
}
function E8(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vr(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return hp(o), e;
        if (i === r) return hp(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Wm(e) {
  return (e = E8(e)), e !== null ? Um(e) : null;
}
function Um(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Um(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zm = ct.unstable_scheduleCallback,
  mp = ct.unstable_cancelCallback,
  T8 = ct.unstable_shouldYield,
  b8 = ct.unstable_requestPaint,
  we = ct.unstable_now,
  A8 = ct.unstable_getCurrentPriorityLevel,
  ud = ct.unstable_ImmediatePriority,
  Gm = ct.unstable_UserBlockingPriority,
  Za = ct.unstable_NormalPriority,
  M8 = ct.unstable_LowPriority,
  Km = ct.unstable_IdlePriority,
  _s = null,
  Kt = null;
function _8(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(_s, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ft = Math.clz32 ? Math.clz32 : L8,
  R8 = Math.log,
  O8 = Math.LN2;
function L8(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((R8(e) / O8) | 0)) | 0;
}
var qi = 64,
  Ji = 4194304;
function Vo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ga(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = Vo(s)) : ((i &= a), i !== 0 && (r = Vo(i)));
  } else (a = n & ~o), a !== 0 ? (r = Vo(a)) : i !== 0 && (r = Vo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ft(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function F8(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function V8(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ft(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = F8(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Hu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ym() {
  var e = qi;
  return (qi <<= 1), !(qi & 4194240) && (qi = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ft(t)),
    (e[t] = n);
}
function I8(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ft(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function cd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ft(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var J = 0;
function Xm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qm,
  dd,
  qm,
  Jm,
  e1,
  Wu = !1,
  ea = [],
  An = null,
  Mn = null,
  _n = null,
  ni = new Map(),
  ri = new Map(),
  Pn = [],
  j8 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      An = null;
      break;
    case "dragenter":
    case "dragleave":
      Mn = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      ni.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ri.delete(t.pointerId);
  }
}
function Co(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Mi(t)), t !== null && dd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function N8(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (An = Co(An, e, t, n, r, o)), !0;
    case "dragenter":
      return (Mn = Co(Mn, e, t, n, r, o)), !0;
    case "mouseover":
      return (_n = Co(_n, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ni.set(i, Co(ni.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ri.set(i, Co(ri.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function t1(e) {
  var t = er(e.target);
  if (t !== null) {
    var n = vr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hm(n)), t !== null)) {
          (e.blockedOn = t),
            e1(e.priority, function () {
              qm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ca(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Du = r), n.target.dispatchEvent(r), (Du = null);
    } else return (t = Mi(n)), t !== null && dd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vp(e, t, n) {
  Ca(e) && n.delete(t);
}
function D8() {
  (Wu = !1),
    An !== null && Ca(An) && (An = null),
    Mn !== null && Ca(Mn) && (Mn = null),
    _n !== null && Ca(_n) && (_n = null),
    ni.forEach(vp),
    ri.forEach(vp);
}
function Po(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wu ||
      ((Wu = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, D8)));
}
function oi(e) {
  function t(o) {
    return Po(o, e);
  }
  if (0 < ea.length) {
    Po(ea[0], e);
    for (var n = 1; n < ea.length; n++) {
      var r = ea[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    An !== null && Po(An, e),
      Mn !== null && Po(Mn, e),
      _n !== null && Po(_n, e),
      ni.forEach(t),
      ri.forEach(t),
      n = 0;
    n < Pn.length;
    n++
  )
    (r = Pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pn.length && ((n = Pn[0]), n.blockedOn === null); )
    t1(n), n.blockedOn === null && Pn.shift();
}
var Kr = vn.ReactCurrentBatchConfig,
  Ka = !0;
function $8(e, t, n, r) {
  var o = J,
    i = Kr.transition;
  Kr.transition = null;
  try {
    (J = 1), fd(e, t, n, r);
  } finally {
    (J = o), (Kr.transition = i);
  }
}
function B8(e, t, n, r) {
  var o = J,
    i = Kr.transition;
  Kr.transition = null;
  try {
    (J = 4), fd(e, t, n, r);
  } finally {
    (J = o), (Kr.transition = i);
  }
}
function fd(e, t, n, r) {
  if (Ka) {
    var o = Uu(e, t, n, r);
    if (o === null) Wl(e, t, r, Ya, n), gp(e, r);
    else if (N8(o, e, t, n, r)) r.stopPropagation();
    else if ((gp(e, r), t & 4 && -1 < j8.indexOf(e))) {
      for (; o !== null; ) {
        var i = Mi(o);
        if (
          (i !== null && Qm(i),
          (i = Uu(e, t, n, r)),
          i === null && Wl(e, t, r, Ya, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Ya = null;
function Uu(e, t, n, r) {
  if (((Ya = null), (e = ld(r)), (e = er(e)), e !== null))
    if (((t = vr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ya = e), null;
}
function n1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (A8()) {
        case ud:
          return 1;
        case Gm:
          return 4;
        case Za:
        case M8:
          return 16;
        case Km:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tn = null,
  pd = null,
  Pa = null;
function r1() {
  if (Pa) return Pa;
  var e,
    t = pd,
    n = t.length,
    r,
    o = "value" in Tn ? Tn.value : Tn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Pa = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ea(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ta() {
  return !0;
}
function yp() {
  return !1;
}
function pt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ta
        : yp),
      (this.isPropagationStopped = yp),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ta));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ta));
      },
      persist: function () {},
      isPersistent: ta,
    }),
    t
  );
}
var mo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hd = pt(mo),
  Ai = ve({}, mo, { view: 0, detail: 0 }),
  z8 = pt(Ai),
  Vl,
  Il,
  Eo,
  Rs = ve({}, Ai, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: md,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Eo &&
            (Eo && e.type === "mousemove"
              ? ((Vl = e.screenX - Eo.screenX), (Il = e.screenY - Eo.screenY))
              : (Il = Vl = 0),
            (Eo = e)),
          Vl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Il;
    },
  }),
  Sp = pt(Rs),
  H8 = ve({}, Rs, { dataTransfer: 0 }),
  W8 = pt(H8),
  U8 = ve({}, Ai, { relatedTarget: 0 }),
  jl = pt(U8),
  Z8 = ve({}, mo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  G8 = pt(Z8),
  K8 = ve({}, mo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Y8 = pt(K8),
  X8 = ve({}, mo, { data: 0 }),
  wp = pt(X8),
  Q8 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  q8 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  J8 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function e4(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = J8[e]) ? !!t[e] : !1;
}
function md() {
  return e4;
}
var t4 = ve({}, Ai, {
    key: function (e) {
      if (e.key) {
        var t = Q8[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ea(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? q8[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: md,
    charCode: function (e) {
      return e.type === "keypress" ? Ea(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ea(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  n4 = pt(t4),
  r4 = ve({}, Rs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xp = pt(r4),
  o4 = ve({}, Ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: md,
  }),
  i4 = pt(o4),
  a4 = ve({}, mo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  s4 = pt(a4),
  l4 = ve({}, Rs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  u4 = pt(l4),
  c4 = [9, 13, 27, 32],
  gd = fn && "CompositionEvent" in window,
  Bo = null;
fn && "documentMode" in document && (Bo = document.documentMode);
var d4 = fn && "TextEvent" in window && !Bo,
  o1 = fn && (!gd || (Bo && 8 < Bo && 11 >= Bo)),
  kp = " ",
  Cp = !1;
function i1(e, t) {
  switch (e) {
    case "keyup":
      return c4.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function a1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function f4(e, t) {
  switch (e) {
    case "compositionend":
      return a1(t);
    case "keypress":
      return t.which !== 32 ? null : ((Cp = !0), kp);
    case "textInput":
      return (e = t.data), e === kp && Cp ? null : e;
    default:
      return null;
  }
}
function p4(e, t) {
  if (Mr)
    return e === "compositionend" || (!gd && i1(e, t))
      ? ((e = r1()), (Pa = pd = Tn = null), (Mr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return o1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var h4 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!h4[e.type] : t === "textarea";
}
function s1(e, t, n, r) {
  Nm(r),
    (t = Xa(t, "onChange")),
    0 < t.length &&
      ((n = new hd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zo = null,
  ii = null;
function m4(e) {
  y1(e, 0);
}
function Os(e) {
  var t = Or(e);
  if (Rm(t)) return e;
}
function g4(e, t) {
  if (e === "change") return t;
}
var l1 = !1;
if (fn) {
  var Nl;
  if (fn) {
    var Dl = "oninput" in document;
    if (!Dl) {
      var Ep = document.createElement("div");
      Ep.setAttribute("oninput", "return;"),
        (Dl = typeof Ep.oninput == "function");
    }
    Nl = Dl;
  } else Nl = !1;
  l1 = Nl && (!document.documentMode || 9 < document.documentMode);
}
function Tp() {
  zo && (zo.detachEvent("onpropertychange", u1), (ii = zo = null));
}
function u1(e) {
  if (e.propertyName === "value" && Os(ii)) {
    var t = [];
    s1(t, ii, e, ld(e)), zm(m4, t);
  }
}
function v4(e, t, n) {
  e === "focusin"
    ? (Tp(), (zo = t), (ii = n), zo.attachEvent("onpropertychange", u1))
    : e === "focusout" && Tp();
}
function y4(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Os(ii);
}
function S4(e, t) {
  if (e === "click") return Os(t);
}
function w4(e, t) {
  if (e === "input" || e === "change") return Os(t);
}
function x4(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var It = typeof Object.is == "function" ? Object.is : x4;
function ai(e, t) {
  if (It(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!bu.call(t, o) || !It(e[o], t[o])) return !1;
  }
  return !0;
}
function bp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ap(e, t) {
  var n = bp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = bp(n);
  }
}
function c1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? c1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function d1() {
  for (var e = window, t = Ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ha(e.document);
  }
  return t;
}
function vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function k4(e) {
  var t = d1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    c1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ap(n, i));
        var a = Ap(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var C4 = fn && "documentMode" in document && 11 >= document.documentMode,
  _r = null,
  Zu = null,
  Ho = null,
  Gu = !1;
function Mp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gu ||
    _r == null ||
    _r !== Ha(r) ||
    ((r = _r),
    "selectionStart" in r && vd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ho && ai(Ho, r)) ||
      ((Ho = r),
      (r = Xa(Zu, "onSelect")),
      0 < r.length &&
        ((t = new hd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _r))));
}
function na(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rr = {
    animationend: na("Animation", "AnimationEnd"),
    animationiteration: na("Animation", "AnimationIteration"),
    animationstart: na("Animation", "AnimationStart"),
    transitionend: na("Transition", "TransitionEnd"),
  },
  $l = {},
  f1 = {};
fn &&
  ((f1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rr.animationend.animation,
    delete Rr.animationiteration.animation,
    delete Rr.animationstart.animation),
  "TransitionEvent" in window || delete Rr.transitionend.transition);
function Ls(e) {
  if ($l[e]) return $l[e];
  if (!Rr[e]) return e;
  var t = Rr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in f1) return ($l[e] = t[n]);
  return e;
}
var p1 = Ls("animationend"),
  h1 = Ls("animationiteration"),
  m1 = Ls("animationstart"),
  g1 = Ls("transitionend"),
  v1 = new Map(),
  _p =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bn(e, t) {
  v1.set(e, t), gr(t, [e]);
}
for (var Bl = 0; Bl < _p.length; Bl++) {
  var zl = _p[Bl],
    P4 = zl.toLowerCase(),
    E4 = zl[0].toUpperCase() + zl.slice(1);
  Bn(P4, "on" + E4);
}
Bn(p1, "onAnimationEnd");
Bn(h1, "onAnimationIteration");
Bn(m1, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(g1, "onTransitionEnd");
to("onMouseEnter", ["mouseout", "mouseover"]);
to("onMouseLeave", ["mouseout", "mouseover"]);
to("onPointerEnter", ["pointerout", "pointerover"]);
to("onPointerLeave", ["pointerout", "pointerover"]);
gr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
gr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
gr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
gr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Io =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  T4 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));
function Rp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), P8(r, t, void 0, e), (e.currentTarget = null);
}
function y1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          Rp(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Rp(o, s, u), (i = l);
        }
    }
  }
  if (Ua) throw ((e = zu), (Ua = !1), (zu = null), e);
}
function se(e, t) {
  var n = t[qu];
  n === void 0 && (n = t[qu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (S1(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), S1(n, e, r, t);
}
var ra = "_reactListening" + Math.random().toString(36).slice(2);
function si(e) {
  if (!e[ra]) {
    (e[ra] = !0),
      Tm.forEach(function (n) {
        n !== "selectionchange" && (T4.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ra] || ((t[ra] = !0), Hl("selectionchange", !1, t));
  }
}
function S1(e, t, n, r) {
  switch (n1(t)) {
    case 1:
      var o = $8;
      break;
    case 4:
      o = B8;
      break;
    default:
      o = fd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Bu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Wl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = er(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  zm(function () {
    var u = i,
      c = ld(n),
      d = [];
    e: {
      var f = v1.get(e);
      if (f !== void 0) {
        var h = hd,
          S = e;
        switch (e) {
          case "keypress":
            if (Ea(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = n4;
            break;
          case "focusin":
            (S = "focus"), (h = jl);
            break;
          case "focusout":
            (S = "blur"), (h = jl);
            break;
          case "beforeblur":
          case "afterblur":
            h = jl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Sp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = W8;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = i4;
            break;
          case p1:
          case h1:
          case m1:
            h = G8;
            break;
          case g1:
            h = s4;
            break;
          case "scroll":
            h = z8;
            break;
          case "wheel":
            h = u4;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Y8;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = xp;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          g = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              g !== null && ((E = ti(p, g)), E != null && v.push(li(p, E, m)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((f = new h(f, S, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Du &&
            (S = n.relatedTarget || n.fromElement) &&
            (er(S) || S[pn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((S = n.relatedTarget || n.toElement),
              (h = u),
              (S = S ? er(S) : null),
              S !== null &&
                ((k = vr(S)), S !== k || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((h = null), (S = u)),
          h !== S)
        ) {
          if (
            ((v = Sp),
            (E = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = xp),
              (E = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (k = h == null ? f : Or(h)),
            (m = S == null ? f : Or(S)),
            (f = new v(E, p + "leave", h, n, c)),
            (f.target = k),
            (f.relatedTarget = m),
            (E = null),
            er(c) === u &&
              ((v = new v(g, p + "enter", S, n, c)),
              (v.target = m),
              (v.relatedTarget = k),
              (E = v)),
            (k = E),
            h && S)
          )
            t: {
              for (v = h, g = S, p = 0, m = v; m; m = Cr(m)) p++;
              for (m = 0, E = g; E; E = Cr(E)) m++;
              for (; 0 < p - m; ) (v = Cr(v)), p--;
              for (; 0 < m - p; ) (g = Cr(g)), m--;
              for (; p--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = Cr(v)), (g = Cr(g));
              }
              v = null;
            }
          else v = null;
          h !== null && Op(d, f, h, v, !1),
            S !== null && k !== null && Op(d, k, S, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? Or(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var T = g4;
        else if (Pp(f))
          if (l1) T = w4;
          else {
            T = y4;
            var R = v4;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (T = S4);
        if (T && (T = T(e, u))) {
          s1(d, T, n, c);
          break e;
        }
        R && R(e, f, u),
          e === "focusout" &&
            (R = f._wrapperState) &&
            R.controlled &&
            f.type === "number" &&
            Fu(f, "number", f.value);
      }
      switch (((R = u ? Or(u) : window), e)) {
        case "focusin":
          (Pp(R) || R.contentEditable === "true") &&
            ((_r = R), (Zu = u), (Ho = null));
          break;
        case "focusout":
          Ho = Zu = _r = null;
          break;
        case "mousedown":
          Gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gu = !1), Mp(d, n, c);
          break;
        case "selectionchange":
          if (C4) break;
        case "keydown":
        case "keyup":
          Mp(d, n, c);
      }
      var A;
      if (gd)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Mr
          ? i1(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (o1 &&
          n.locale !== "ko" &&
          (Mr || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Mr && (A = r1())
            : ((Tn = c),
              (pd = "value" in Tn ? Tn.value : Tn.textContent),
              (Mr = !0))),
        (R = Xa(u, _)),
        0 < R.length &&
          ((_ = new wp(_, e, null, n, c)),
          d.push({ event: _, listeners: R }),
          A ? (_.data = A) : ((A = a1(n)), A !== null && (_.data = A)))),
        (A = d4 ? f4(e, n) : p4(e, n)) &&
          ((u = Xa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new wp("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = A)));
    }
    y1(d, t);
  });
}
function li(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ti(e, n)),
      i != null && r.unshift(li(e, i, o)),
      (i = ti(e, t)),
      i != null && r.push(li(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Cr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Op(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = ti(n, i)), l != null && a.unshift(li(n, l, s)))
        : o || ((l = ti(n, i)), l != null && a.push(li(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var b4 = /\r\n?/g,
  A4 = /\u0000|\uFFFD/g;
function Lp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      b4,
      `
`
    )
    .replace(A4, "");
}
function oa(e, t, n) {
  if (((t = Lp(t)), Lp(e) !== t && n)) throw Error(O(425));
}
function Qa() {}
var Ku = null,
  Yu = null;
function Xu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qu = typeof setTimeout == "function" ? setTimeout : void 0,
  M4 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fp = typeof Promise == "function" ? Promise : void 0,
  _4 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fp < "u"
      ? function (e) {
          return Fp.resolve(null).then(e).catch(R4);
        }
      : Qu;
function R4(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), oi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  oi(t);
}
function Rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var go = Math.random().toString(36).slice(2),
  Zt = "__reactFiber$" + go,
  ui = "__reactProps$" + go,
  pn = "__reactContainer$" + go,
  qu = "__reactEvents$" + go,
  O4 = "__reactListeners$" + go,
  L4 = "__reactHandles$" + go;
function er(e) {
  var t = e[Zt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pn] || n[Zt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vp(e); e !== null; ) {
          if ((n = e[Zt])) return n;
          e = Vp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Mi(e) {
  return (
    (e = e[Zt] || e[pn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Fs(e) {
  return e[ui] || null;
}
var Ju = [],
  Lr = -1;
function zn(e) {
  return { current: e };
}
function ue(e) {
  0 > Lr || ((e.current = Ju[Lr]), (Ju[Lr] = null), Lr--);
}
function oe(e, t) {
  Lr++, (Ju[Lr] = e.current), (e.current = t);
}
var Nn = {},
  We = zn(Nn),
  Je = zn(!1),
  dr = Nn;
function no(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function et(e) {
  return (e = e.childContextTypes), e != null;
}
function qa() {
  ue(Je), ue(We);
}
function Ip(e, t, n) {
  if (We.current !== Nn) throw Error(O(168));
  oe(We, t), oe(Je, n);
}
function w1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, v8(e) || "Unknown", o));
  return ve({}, n, r);
}
function Ja(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nn),
    (dr = We.current),
    oe(We, e),
    oe(Je, Je.current),
    !0
  );
}
function jp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = w1(e, t, dr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Je),
      ue(We),
      oe(We, e))
    : ue(Je),
    oe(Je, n);
}
var rn = null,
  Vs = !1,
  Zl = !1;
function x1(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function F4(e) {
  (Vs = !0), x1(e);
}
function Hn() {
  if (!Zl && rn !== null) {
    Zl = !0;
    var e = 0,
      t = J;
    try {
      var n = rn;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rn = null), (Vs = !1);
    } catch (o) {
      throw (rn !== null && (rn = rn.slice(e + 1)), Zm(ud, Hn), o);
    } finally {
      (J = t), (Zl = !1);
    }
  }
  return null;
}
var Fr = [],
  Vr = 0,
  es = null,
  ts = 0,
  xt = [],
  kt = 0,
  fr = null,
  on = 1,
  an = "";
function Yn(e, t) {
  (Fr[Vr++] = ts), (Fr[Vr++] = es), (es = e), (ts = t);
}
function k1(e, t, n) {
  (xt[kt++] = on), (xt[kt++] = an), (xt[kt++] = fr), (fr = e);
  var r = on;
  e = an;
  var o = 32 - Ft(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ft(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (on = (1 << (32 - Ft(t) + o)) | (n << o) | r),
      (an = i + e);
  } else (on = (1 << i) | (n << o) | r), (an = e);
}
function yd(e) {
  e.return !== null && (Yn(e, 1), k1(e, 1, 0));
}
function Sd(e) {
  for (; e === es; )
    (es = Fr[--Vr]), (Fr[Vr] = null), (ts = Fr[--Vr]), (Fr[Vr] = null);
  for (; e === fr; )
    (fr = xt[--kt]),
      (xt[kt] = null),
      (an = xt[--kt]),
      (xt[kt] = null),
      (on = xt[--kt]),
      (xt[kt] = null);
}
var lt = null,
  st = null,
  fe = !1,
  Lt = null;
function C1(e, t) {
  var n = Ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Np(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (st = Rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (st = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fr !== null ? { id: on, overflow: an } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (st = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ec(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tc(e) {
  if (fe) {
    var t = st;
    if (t) {
      var n = t;
      if (!Np(e, t)) {
        if (ec(e)) throw Error(O(418));
        t = Rn(n.nextSibling);
        var r = lt;
        t && Np(e, t)
          ? C1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (lt = e));
      }
    } else {
      if (ec(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (fe = !1), (lt = e);
    }
  }
}
function Dp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function ia(e) {
  if (e !== lt) return !1;
  if (!fe) return Dp(e), (fe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xu(e.type, e.memoizedProps))),
    t && (t = st))
  ) {
    if (ec(e)) throw (P1(), Error(O(418)));
    for (; t; ) C1(e, t), (t = Rn(t.nextSibling));
  }
  if ((Dp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = lt ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function P1() {
  for (var e = st; e; ) e = Rn(e.nextSibling);
}
function ro() {
  (st = lt = null), (fe = !1);
}
function wd(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
var V4 = vn.ReactCurrentBatchConfig;
function _t(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ns = zn(null),
  rs = null,
  Ir = null,
  xd = null;
function kd() {
  xd = Ir = rs = null;
}
function Cd(e) {
  var t = ns.current;
  ue(ns), (e._currentValue = t);
}
function nc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yr(e, t) {
  (rs = e),
    (xd = Ir = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qe = !0), (e.firstContext = null));
}
function Et(e) {
  var t = e._currentValue;
  if (xd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ir === null)) {
      if (rs === null) throw Error(O(308));
      (Ir = e), (rs.dependencies = { lanes: 0, firstContext: e });
    } else Ir = Ir.next = e;
  return t;
}
var tr = null;
function Pd(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
function E1(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Pd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    hn(e, r)
  );
}
function hn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kn = !1;
function Ed(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function T1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function un(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function On(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      hn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Pd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    hn(e, n)
  );
}
function Ta(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cd(e, n);
  }
}
function $p(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function os(e, t, n, r) {
  var o = e.updateQueue;
  kn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = e,
            v = s;
          switch (((f = t), (h = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                d = S.call(h, d, f);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (f = typeof S == "function" ? S.call(h, d, f) : S),
                f == null)
              )
                break e;
              d = ve({}, d, f);
              break e;
            case 2:
              kn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (hr |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Bp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var b1 = new Em.Component().refs;
function rc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Is = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = Fn(e),
      i = un(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = On(e, i, o)),
      t !== null && (Vt(t, e, o, r), Ta(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ke(),
      o = Fn(e),
      i = un(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = On(e, i, o)),
      t !== null && (Vt(t, e, o, r), Ta(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ke(),
      r = Fn(e),
      o = un(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = On(e, o, r)),
      t !== null && (Vt(t, e, r, n), Ta(t, e, r));
  },
};
function zp(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ai(n, r) || !ai(o, i)
      : !0
  );
}
function A1(e, t, n) {
  var r = !1,
    o = Nn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Et(i))
      : ((o = et(t) ? dr : We.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? no(e, o) : Nn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Is),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Hp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Is.enqueueReplaceState(t, t.state, null);
}
function oc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = b1), Ed(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Et(i))
    : ((i = et(t) ? dr : We.current), (o.context = no(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (rc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Is.enqueueReplaceState(o, o.state, null),
      os(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function To(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === b1 && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function aa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wp(e) {
  var t = e._init;
  return t(e._payload);
}
function M1(e) {
  function t(g, p) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [p]), (g.flags |= 16)) : m.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function o(g, p) {
    return (g = Vn(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, p, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((g.flags |= 2), p) : m)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, p, m, E) {
    return p === null || p.tag !== 6
      ? ((p = Jl(m, g.mode, E)), (p.return = g), p)
      : ((p = o(p, m)), (p.return = g), p);
  }
  function l(g, p, m, E) {
    var T = m.type;
    return T === Ar
      ? c(g, p, m.props.children, E, m.key)
      : p !== null &&
        (p.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === xn &&
            Wp(T) === p.type))
      ? ((E = o(p, m.props)), (E.ref = To(g, p, m)), (E.return = g), E)
      : ((E = Oa(m.type, m.key, m.props, null, g.mode, E)),
        (E.ref = To(g, p, m)),
        (E.return = g),
        E);
  }
  function u(g, p, m, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = eu(m, g.mode, E)), (p.return = g), p)
      : ((p = o(p, m.children || [])), (p.return = g), p);
  }
  function c(g, p, m, E, T) {
    return p === null || p.tag !== 7
      ? ((p = ar(m, g.mode, E, T)), (p.return = g), p)
      : ((p = o(p, m)), (p.return = g), p);
  }
  function d(g, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Jl("" + p, g.mode, m)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Yi:
          return (
            (m = Oa(p.type, p.key, p.props, null, g.mode, m)),
            (m.ref = To(g, null, p)),
            (m.return = g),
            m
          );
        case br:
          return (p = eu(p, g.mode, m)), (p.return = g), p;
        case xn:
          var E = p._init;
          return d(g, E(p._payload), m);
      }
      if (Fo(p) || xo(p))
        return (p = ar(p, g.mode, m, null)), (p.return = g), p;
      aa(g, p);
    }
    return null;
  }
  function f(g, p, m, E) {
    var T = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return T !== null ? null : s(g, p, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Yi:
          return m.key === T ? l(g, p, m, E) : null;
        case br:
          return m.key === T ? u(g, p, m, E) : null;
        case xn:
          return (T = m._init), f(g, p, T(m._payload), E);
      }
      if (Fo(m) || xo(m)) return T !== null ? null : c(g, p, m, E, null);
      aa(g, m);
    }
    return null;
  }
  function h(g, p, m, E, T) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (g = g.get(m) || null), s(p, g, "" + E, T);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Yi:
          return (g = g.get(E.key === null ? m : E.key) || null), l(p, g, E, T);
        case br:
          return (g = g.get(E.key === null ? m : E.key) || null), u(p, g, E, T);
        case xn:
          var R = E._init;
          return h(g, p, m, R(E._payload), T);
      }
      if (Fo(E) || xo(E)) return (g = g.get(m) || null), c(p, g, E, T, null);
      aa(p, E);
    }
    return null;
  }
  function S(g, p, m, E) {
    for (
      var T = null, R = null, A = p, _ = (p = 0), L = null;
      A !== null && _ < m.length;
      _++
    ) {
      A.index > _ ? ((L = A), (A = null)) : (L = A.sibling);
      var j = f(g, A, m[_], E);
      if (j === null) {
        A === null && (A = L);
        break;
      }
      e && A && j.alternate === null && t(g, A),
        (p = i(j, p, _)),
        R === null ? (T = j) : (R.sibling = j),
        (R = j),
        (A = L);
    }
    if (_ === m.length) return n(g, A), fe && Yn(g, _), T;
    if (A === null) {
      for (; _ < m.length; _++)
        (A = d(g, m[_], E)),
          A !== null &&
            ((p = i(A, p, _)), R === null ? (T = A) : (R.sibling = A), (R = A));
      return fe && Yn(g, _), T;
    }
    for (A = r(g, A); _ < m.length; _++)
      (L = h(A, g, _, m[_], E)),
        L !== null &&
          (e && L.alternate !== null && A.delete(L.key === null ? _ : L.key),
          (p = i(L, p, _)),
          R === null ? (T = L) : (R.sibling = L),
          (R = L));
    return (
      e &&
        A.forEach(function (q) {
          return t(g, q);
        }),
      fe && Yn(g, _),
      T
    );
  }
  function v(g, p, m, E) {
    var T = xo(m);
    if (typeof T != "function") throw Error(O(150));
    if (((m = T.call(m)), m == null)) throw Error(O(151));
    for (
      var R = (T = null), A = p, _ = (p = 0), L = null, j = m.next();
      A !== null && !j.done;
      _++, j = m.next()
    ) {
      A.index > _ ? ((L = A), (A = null)) : (L = A.sibling);
      var q = f(g, A, j.value, E);
      if (q === null) {
        A === null && (A = L);
        break;
      }
      e && A && q.alternate === null && t(g, A),
        (p = i(q, p, _)),
        R === null ? (T = q) : (R.sibling = q),
        (R = q),
        (A = L);
    }
    if (j.done) return n(g, A), fe && Yn(g, _), T;
    if (A === null) {
      for (; !j.done; _++, j = m.next())
        (j = d(g, j.value, E)),
          j !== null &&
            ((p = i(j, p, _)), R === null ? (T = j) : (R.sibling = j), (R = j));
      return fe && Yn(g, _), T;
    }
    for (A = r(g, A); !j.done; _++, j = m.next())
      (j = h(A, g, _, j.value, E)),
        j !== null &&
          (e && j.alternate !== null && A.delete(j.key === null ? _ : j.key),
          (p = i(j, p, _)),
          R === null ? (T = j) : (R.sibling = j),
          (R = j));
    return (
      e &&
        A.forEach(function (pe) {
          return t(g, pe);
        }),
      fe && Yn(g, _),
      T
    );
  }
  function k(g, p, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Ar &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Yi:
          e: {
            for (var T = m.key, R = p; R !== null; ) {
              if (R.key === T) {
                if (((T = m.type), T === Ar)) {
                  if (R.tag === 7) {
                    n(g, R.sibling),
                      (p = o(R, m.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  R.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === xn &&
                    Wp(T) === R.type)
                ) {
                  n(g, R.sibling),
                    (p = o(R, m.props)),
                    (p.ref = To(g, R, m)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, R);
                break;
              } else t(g, R);
              R = R.sibling;
            }
            m.type === Ar
              ? ((p = ar(m.props.children, g.mode, E, m.key)),
                (p.return = g),
                (g = p))
              : ((E = Oa(m.type, m.key, m.props, null, g.mode, E)),
                (E.ref = To(g, p, m)),
                (E.return = g),
                (g = E));
          }
          return a(g);
        case br:
          e: {
            for (R = m.key; p !== null; ) {
              if (p.key === R)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(g, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = eu(m, g.mode, E)), (p.return = g), (g = p);
          }
          return a(g);
        case xn:
          return (R = m._init), k(g, p, R(m._payload), E);
      }
      if (Fo(m)) return S(g, p, m, E);
      if (xo(m)) return v(g, p, m, E);
      aa(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = o(p, m)), (p.return = g), (g = p))
          : (n(g, p), (p = Jl(m, g.mode, E)), (p.return = g), (g = p)),
        a(g))
      : n(g, p);
  }
  return k;
}
var oo = M1(!0),
  _1 = M1(!1),
  _i = {},
  Yt = zn(_i),
  ci = zn(_i),
  di = zn(_i);
function nr(e) {
  if (e === _i) throw Error(O(174));
  return e;
}
function Td(e, t) {
  switch ((oe(di, t), oe(ci, e), oe(Yt, _i), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Iu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Iu(t, e));
  }
  ue(Yt), oe(Yt, t);
}
function io() {
  ue(Yt), ue(ci), ue(di);
}
function R1(e) {
  nr(di.current);
  var t = nr(Yt.current),
    n = Iu(t, e.type);
  t !== n && (oe(ci, e), oe(Yt, n));
}
function bd(e) {
  ci.current === e && (ue(Yt), ue(ci));
}
var he = zn(0);
function is(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gl = [];
function Ad() {
  for (var e = 0; e < Gl.length; e++)
    Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var ba = vn.ReactCurrentDispatcher,
  Kl = vn.ReactCurrentBatchConfig,
  pr = 0,
  ge = null,
  Ee = null,
  Ae = null,
  as = !1,
  Wo = !1,
  fi = 0,
  I4 = 0;
function De() {
  throw Error(O(321));
}
function Md(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!It(e[n], t[n])) return !1;
  return !0;
}
function _d(e, t, n, r, o, i) {
  if (
    ((pr = i),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ba.current = e === null || e.memoizedState === null ? $4 : B4),
    (e = n(r, o)),
    Wo)
  ) {
    i = 0;
    do {
      if (((Wo = !1), (fi = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (Ae = Ee = null),
        (t.updateQueue = null),
        (ba.current = z4),
        (e = n(r, o));
    } while (Wo);
  }
  if (
    ((ba.current = ss),
    (t = Ee !== null && Ee.next !== null),
    (pr = 0),
    (Ae = Ee = ge = null),
    (as = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Rd() {
  var e = fi !== 0;
  return (fi = 0), e;
}
function Ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (ge.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function Tt() {
  if (Ee === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Ae === null ? ge.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Ee = e);
  else {
    if (e === null) throw Error(O(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Ae === null ? (ge.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function pi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((pr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (ge.lanes |= c),
          (hr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      It(r, t.memoizedState) || (qe = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ge.lanes |= i), (hr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    It(i, t.memoizedState) || (qe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function O1() {}
function L1(e, t) {
  var n = ge,
    r = Tt(),
    o = t(),
    i = !It(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (qe = !0)),
    (r = r.queue),
    Od(I1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hi(9, V1.bind(null, n, r, o, t), void 0, null),
      Me === null)
    )
      throw Error(O(349));
    pr & 30 || F1(n, t, o);
  }
  return o;
}
function F1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function V1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), j1(t) && N1(e);
}
function I1(e, t, n) {
  return n(function () {
    j1(t) && N1(e);
  });
}
function j1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !It(e, n);
  } catch {
    return !0;
  }
}
function N1(e) {
  var t = hn(e, 1);
  t !== null && Vt(t, e, 1, -1);
}
function Up(e) {
  var t = Ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = D4.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function hi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function D1() {
  return Tt().memoizedState;
}
function Aa(e, t, n, r) {
  var o = Ht();
  (ge.flags |= e),
    (o.memoizedState = hi(1 | t, n, void 0, r === void 0 ? null : r));
}
function js(e, t, n, r) {
  var o = Tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ee !== null) {
    var a = Ee.memoizedState;
    if (((i = a.destroy), r !== null && Md(r, a.deps))) {
      o.memoizedState = hi(t, n, i, r);
      return;
    }
  }
  (ge.flags |= e), (o.memoizedState = hi(1 | t, n, i, r));
}
function Zp(e, t) {
  return Aa(8390656, 8, e, t);
}
function Od(e, t) {
  return js(2048, 8, e, t);
}
function $1(e, t) {
  return js(4, 2, e, t);
}
function B1(e, t) {
  return js(4, 4, e, t);
}
function z1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function H1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), js(4, 4, z1.bind(null, t, e), n)
  );
}
function Ld() {}
function W1(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Md(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function U1(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Md(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Z1(e, t, n) {
  return pr & 21
    ? (It(n, t) || ((n = Ym()), (ge.lanes |= n), (hr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function j4(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (Kl.transition = r);
  }
}
function G1() {
  return Tt().memoizedState;
}
function N4(e, t, n) {
  var r = Fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    K1(e))
  )
    Y1(t, n);
  else if (((n = E1(e, t, n, r)), n !== null)) {
    var o = Ke();
    Vt(n, e, r, o), X1(n, t, r);
  }
}
function D4(e, t, n) {
  var r = Fn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (K1(e)) Y1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), It(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Pd(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = E1(e, t, o, r)),
      n !== null && ((o = Ke()), Vt(n, e, r, o), X1(n, t, r));
  }
}
function K1(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function Y1(e, t) {
  Wo = as = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function X1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cd(e, n);
  }
}
var ss = {
    readContext: Et,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  $4 = {
    readContext: Et,
    useCallback: function (e, t) {
      return (Ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Et,
    useEffect: Zp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Aa(4194308, 4, z1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Aa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Aa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ht();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ht();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = N4.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ht();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Up,
    useDebugValue: Ld,
    useDeferredValue: function (e) {
      return (Ht().memoizedState = e);
    },
    useTransition: function () {
      var e = Up(!1),
        t = e[0];
      return (e = j4.bind(null, e[1])), (Ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        o = Ht();
      if (fe) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Me === null)) throw Error(O(349));
        pr & 30 || F1(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Zp(I1.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        hi(9, V1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ht(),
        t = Me.identifierPrefix;
      if (fe) {
        var n = an,
          r = on;
        (n = (r & ~(1 << (32 - Ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = fi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = I4++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  B4 = {
    readContext: Et,
    useCallback: W1,
    useContext: Et,
    useEffect: Od,
    useImperativeHandle: H1,
    useInsertionEffect: $1,
    useLayoutEffect: B1,
    useMemo: U1,
    useReducer: Yl,
    useRef: D1,
    useState: function () {
      return Yl(pi);
    },
    useDebugValue: Ld,
    useDeferredValue: function (e) {
      var t = Tt();
      return Z1(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(pi)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: O1,
    useSyncExternalStore: L1,
    useId: G1,
    unstable_isNewReconciler: !1,
  },
  z4 = {
    readContext: Et,
    useCallback: W1,
    useContext: Et,
    useEffect: Od,
    useImperativeHandle: H1,
    useInsertionEffect: $1,
    useLayoutEffect: B1,
    useMemo: U1,
    useReducer: Xl,
    useRef: D1,
    useState: function () {
      return Xl(pi);
    },
    useDebugValue: Ld,
    useDeferredValue: function (e) {
      var t = Tt();
      return Ee === null ? (t.memoizedState = e) : Z1(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(pi)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: O1,
    useSyncExternalStore: L1,
    useId: G1,
    unstable_isNewReconciler: !1,
  };
function ao(e, t) {
  try {
    var n = "",
      r = t;
    do (n += g8(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ic(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var H4 = typeof WeakMap == "function" ? WeakMap : Map;
function Q1(e, t, n) {
  (n = un(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      us || ((us = !0), (mc = r)), ic(e, t);
    }),
    n
  );
}
function q1(e, t, n) {
  (n = un(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ic(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ic(e, t),
          typeof r != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Gp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new H4();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = rS.bind(null, e, t, n)), t.then(e, e));
}
function Kp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = un(-1, 1)), (t.tag = 2), On(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var W4 = vn.ReactCurrentOwner,
  qe = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? _1(t, null, n, r) : oo(t, e.child, n, r);
}
function Xp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Yr(t, o),
    (r = _d(e, t, n, r, i, o)),
    (n = Rd()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mn(e, t, o))
      : (fe && n && yd(t), (t.flags |= 1), Ge(e, t, r, o), t.child)
  );
}
function Qp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Bd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), J1(e, t, i, r, o))
      : ((e = Oa(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ai), n(a, r) && e.ref === t.ref)
    )
      return mn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Vn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function J1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ai(i, r) && e.ref === t.ref)
      if (((qe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (qe = !0);
      else return (t.lanes = e.lanes), mn(e, t, o);
  }
  return ac(e, t, n, r, o);
}
function eg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(Nr, at),
        (at |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(Nr, at),
          (at |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        oe(Nr, at),
        (at |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(Nr, at),
      (at |= r);
  return Ge(e, t, o, n), t.child;
}
function tg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ac(e, t, n, r, o) {
  var i = et(n) ? dr : We.current;
  return (
    (i = no(t, i)),
    Yr(t, o),
    (n = _d(e, t, n, r, i, o)),
    (r = Rd()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mn(e, t, o))
      : (fe && r && yd(t), (t.flags |= 1), Ge(e, t, n, o), t.child)
  );
}
function qp(e, t, n, r, o) {
  if (et(n)) {
    var i = !0;
    Ja(t);
  } else i = !1;
  if ((Yr(t, o), t.stateNode === null))
    Ma(e, t), A1(t, n, r), oc(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Et(u))
      : ((u = et(n) ? dr : We.current), (u = no(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && Hp(t, a, r, u)),
      (kn = !1);
    var f = t.memoizedState;
    (a.state = f),
      os(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || Je.current || kn
        ? (typeof c == "function" && (rc(t, n, c, r), (l = t.memoizedState)),
          (s = kn || zp(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      T1(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : _t(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Et(l))
        : ((l = et(n) ? dr : We.current), (l = no(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && Hp(t, a, r, l)),
      (kn = !1),
      (f = t.memoizedState),
      (a.state = f),
      os(t, r, a, o);
    var S = t.memoizedState;
    s !== d || f !== S || Je.current || kn
      ? (typeof h == "function" && (rc(t, n, h, r), (S = t.memoizedState)),
        (u = kn || zp(t, n, u, r, f, S, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, S, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, S, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (a.props = r),
        (a.state = S),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return sc(e, t, n, r, i, o);
}
function sc(e, t, n, r, o, i) {
  tg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && jp(t, n, !1), mn(e, t, i);
  (r = t.stateNode), (W4.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = oo(t, e.child, null, i)), (t.child = oo(t, null, s, i)))
      : Ge(e, t, s, i),
    (t.memoizedState = r.state),
    o && jp(t, n, !0),
    t.child
  );
}
function ng(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ip(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ip(e, t.context, !1),
    Td(e, t.containerInfo);
}
function Jp(e, t, n, r, o) {
  return ro(), wd(o), (t.flags |= 256), Ge(e, t, n, r), t.child;
}
var lc = { dehydrated: null, treeContext: null, retryLane: 0 };
function uc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rg(e, t, n) {
  var r = t.pendingProps,
    o = he.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(he, o & 1),
    e === null)
  )
    return (
      tc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = $s(a, r, 0, null)),
              (e = ar(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = uc(n)),
              (t.memoizedState = lc),
              e)
            : Fd(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return U4(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Vn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Vn(s, i)) : ((i = ar(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? uc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = lc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fd(e, t) {
  return (
    (t = $s({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function sa(e, t, n, r) {
  return (
    r !== null && wd(r),
    oo(t, e.child, null, n),
    (e = Fd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function U4(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(O(422)))), sa(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = $s({ mode: "visible", children: r.children }, o, 0, null)),
        (i = ar(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && oo(t, e.child, null, a),
        (t.child.memoizedState = uc(a)),
        (t.memoizedState = lc),
        i);
  if (!(t.mode & 1)) return sa(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(O(419))), (r = Ql(i, r, void 0)), sa(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), qe || s)) {
    if (((r = Me), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), hn(e, o), Vt(r, e, o, -1));
    }
    return $d(), (r = Ql(Error(O(421)))), sa(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = oS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (st = Rn(o.nextSibling)),
      (lt = t),
      (fe = !0),
      (Lt = null),
      e !== null &&
        ((xt[kt++] = on),
        (xt[kt++] = an),
        (xt[kt++] = fr),
        (on = e.id),
        (an = e.overflow),
        (fr = t)),
      (t = Fd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function e0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nc(e.return, t, n);
}
function ql(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function og(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ge(e, t, r.children, n), (r = he.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && e0(e, n, t);
        else if (e.tag === 19) e0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(he, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && is(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ql(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && is(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ql(t, !0, n, null, i);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ma(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Z4(e, t, n) {
  switch (t.tag) {
    case 3:
      ng(t), ro();
      break;
    case 5:
      R1(t);
      break;
    case 1:
      et(t.type) && Ja(t);
      break;
    case 4:
      Td(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      oe(ns, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(he, he.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rg(e, t, n)
          : (oe(he, he.current & 1),
            (e = mn(e, t, n)),
            e !== null ? e.sibling : null);
      oe(he, he.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return og(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        oe(he, he.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), eg(e, t, n);
  }
  return mn(e, t, n);
}
var ig, cc, ag, sg;
ig = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
cc = function () {};
ag = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), nr(Yt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ou(e, o)), (r = Ou(e, r)), (i = []);
        break;
      case "select":
        (o = ve({}, o, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Vu(e, o)), (r = Vu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Qa);
    }
    ju(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Jo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && se("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
sg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bo(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function G4(e, t, n) {
  var r = t.pendingProps;
  switch ((Sd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return et(t.type) && qa(), $e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        io(),
        ue(Je),
        ue(We),
        Ad(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ia(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lt !== null && (yc(Lt), (Lt = null)))),
        cc(e, t),
        $e(t),
        null
      );
    case 5:
      bd(t);
      var o = nr(di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ag(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return $e(t), null;
        }
        if (((e = nr(Yt.current)), ia(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Zt] = t), (r[ui] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Io.length; o++) se(Io[o], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              up(r, i), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              dp(r, i), se("invalid", r);
          }
          ju(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      oa(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      oa(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Jo.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              Xi(r), cp(r, i, !0);
              break;
            case "textarea":
              Xi(r), fp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Qa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Zt] = t),
            (e[ui] = r),
            ig(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Nu(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Io.length; o++) se(Io[o], e);
                o = r;
                break;
              case "source":
                se("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (o = r);
                break;
              case "details":
                se("toggle", e), (o = r);
                break;
              case "input":
                up(e, r), (o = Ou(e, r)), se("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ve({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                dp(e, r), (o = Vu(e, r)), se("invalid", e);
                break;
              default:
                o = r;
            }
            ju(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? jm(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Vm(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ei(e, l)
                    : typeof l == "number" && ei(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Jo.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && se("scroll", e)
                      : l != null && od(e, i, l, a));
              }
            switch (n) {
              case "input":
                Xi(e), cp(e, r, !1);
                break;
              case "textarea":
                Xi(e), fp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ur(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ur(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Qa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) sg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = nr(di.current)), nr(Yt.current), ia(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Zt] = t),
            (i = r.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                oa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  oa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Zt] = t),
            (t.stateNode = r);
      }
      return $e(t), null;
    case 13:
      if (
        (ue(he),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && st !== null && t.mode & 1 && !(t.flags & 128))
          P1(), ro(), (t.flags |= 98560), (i = !1);
        else if (((i = ia(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[Zt] = t;
          } else
            ro(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (i = !1);
        } else Lt !== null && (yc(Lt), (Lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? Te === 0 && (Te = 3) : $d())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        io(), cc(e, t), e === null && si(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return Cd(t.type._context), $e(t), null;
    case 17:
      return et(t.type) && qa(), $e(t), null;
    case 19:
      if ((ue(he), (i = t.memoizedState), i === null)) return $e(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) bo(i, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = is(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    bo(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            we() > so &&
            ((t.flags |= 128), (r = !0), bo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = is(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              bo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !fe)
            )
              return $e(t), null;
          } else
            2 * we() - i.renderingStartTime > so &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), bo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = we()),
          (t.sibling = null),
          (n = he.current),
          oe(he, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        Dd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function K4(e, t) {
  switch ((Sd(t), t.tag)) {
    case 1:
      return (
        et(t.type) && qa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        io(),
        ue(Je),
        ue(We),
        Ad(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bd(t), null;
    case 13:
      if (
        (ue(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        ro();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(he), null;
    case 4:
      return io(), null;
    case 10:
      return Cd(t.type._context), null;
    case 22:
    case 23:
      return Dd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var la = !1,
  He = !1,
  Y4 = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function jr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function dc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var t0 = !1;
function X4(e, t) {
  if (((Ku = Ka), (e = d1()), vd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yu = { focusedElem: e, selectionRange: n }, Ka = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    k = S.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : _t(t.type, v),
                      k
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (E) {
          ye(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (S = t0), (t0 = !1), S;
}
function Uo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && dc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ns(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Zt], delete t[ui], delete t[qu], delete t[O4], delete t[L4])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ug(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function n0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ug(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Qa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pc(e, t, n), e = e.sibling; e !== null; ) pc(e, t, n), (e = e.sibling);
}
function hc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hc(e, t, n), e = e.sibling; e !== null; ) hc(e, t, n), (e = e.sibling);
}
var Le = null,
  Ot = !1;
function yn(e, t, n) {
  for (n = n.child; n !== null; ) cg(e, t, n), (n = n.sibling);
}
function cg(e, t, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function")
    try {
      Kt.onCommitFiberUnmount(_s, n);
    } catch {}
  switch (n.tag) {
    case 5:
      He || jr(n, t);
    case 6:
      var r = Le,
        o = Ot;
      (Le = null),
        yn(e, t, n),
        (Le = r),
        (Ot = o),
        Le !== null &&
          (Ot
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null &&
        (Ot
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, n)
              : e.nodeType === 1 && Ul(e, n),
            oi(e))
          : Ul(Le, n.stateNode));
      break;
    case 4:
      (r = Le),
        (o = Ot),
        (Le = n.stateNode.containerInfo),
        (Ot = !0),
        yn(e, t, n),
        (Le = r),
        (Ot = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !He &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && dc(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      yn(e, t, n);
      break;
    case 1:
      if (
        !He &&
        (jr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ye(n, t, s);
        }
      yn(e, t, n);
      break;
    case 21:
      yn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((He = (r = He) || n.memoizedState !== null), yn(e, t, n), (He = r))
        : yn(e, t, n);
      break;
    default:
      yn(e, t, n);
  }
}
function r0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Y4()),
      t.forEach(function (r) {
        var o = iS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Le = s.stateNode), (Ot = !1);
              break e;
            case 3:
              (Le = s.stateNode.containerInfo), (Ot = !0);
              break e;
            case 4:
              (Le = s.stateNode.containerInfo), (Ot = !0);
              break e;
          }
          s = s.return;
        }
        if (Le === null) throw Error(O(160));
        cg(i, a, o), (Le = null), (Ot = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        ye(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dg(t, e), (t = t.sibling);
}
function dg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mt(t, e), Bt(e), r & 4)) {
        try {
          Uo(3, e, e.return), Ns(3, e);
        } catch (v) {
          ye(e, e.return, v);
        }
        try {
          Uo(5, e, e.return);
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 1:
      Mt(t, e), Bt(e), r & 512 && n !== null && jr(n, n.return);
      break;
    case 5:
      if (
        (Mt(t, e),
        Bt(e),
        r & 512 && n !== null && jr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ei(o, "");
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Om(o, i),
              Nu(s, a);
            var u = Nu(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? jm(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Vm(o, d)
                : c === "children"
                ? ei(o, d)
                : od(o, c, d, u);
            }
            switch (s) {
              case "input":
                Lu(o, i);
                break;
              case "textarea":
                Lm(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Ur(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ur(o, !!i.multiple, i.defaultValue, !0)
                      : Ur(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ui] = i;
          } catch (v) {
            ye(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Mt(t, e), Bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          ye(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Mt(t, e), Bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          oi(t.containerInfo);
        } catch (v) {
          ye(e, e.return, v);
        }
      break;
    case 4:
      Mt(t, e), Bt(e);
      break;
    case 13:
      Mt(t, e),
        Bt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (jd = we())),
        r & 4 && r0(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((He = (u = He) || c), Mt(t, e), (He = u)) : Mt(t, e),
        Bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (d = I = c; I !== null; ) {
              switch (((f = I), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Uo(4, f, f.return);
                  break;
                case 1:
                  jr(f, f.return);
                  var S = f.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      ye(r, n, v);
                    }
                  }
                  break;
                case 5:
                  jr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    i0(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (I = h)) : i0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = Im("display", a)));
              } catch (v) {
                ye(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                ye(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Mt(t, e), Bt(e), r & 4 && r0(e);
      break;
    case 21:
      break;
    default:
      Mt(t, e), Bt(e);
  }
}
function Bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ug(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ei(o, ""), (r.flags &= -33));
          var i = n0(e);
          hc(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = n0(e);
          pc(e, s, a);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Q4(e, t, n) {
  (I = e), fg(e);
}
function fg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || la;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || He;
        s = la;
        var u = He;
        if (((la = a), (He = l) && !u))
          for (I = o; I !== null; )
            (a = I),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? a0(o)
                : l !== null
                ? ((l.return = a), (I = l))
                : a0(o);
        for (; i !== null; ) (I = i), fg(i), (i = i.sibling);
        (I = o), (la = s), (He = u);
      }
      o0(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : o0(e);
  }
}
function o0(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Ns(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _t(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Bp(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bp(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && oi(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        He || (t.flags & 512 && fc(t));
      } catch (f) {
        ye(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function i0(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function a0(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ns(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, o, l);
            }
          }
          var i = t.return;
          try {
            fc(t);
          } catch (l) {
            ye(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            fc(t);
          } catch (l) {
            ye(t, a, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (I = s);
      break;
    }
    I = t.return;
  }
}
var q4 = Math.ceil,
  ls = vn.ReactCurrentDispatcher,
  Vd = vn.ReactCurrentOwner,
  Pt = vn.ReactCurrentBatchConfig,
  K = 0,
  Me = null,
  Pe = null,
  Ve = 0,
  at = 0,
  Nr = zn(0),
  Te = 0,
  mi = null,
  hr = 0,
  Ds = 0,
  Id = 0,
  Zo = null,
  Qe = null,
  jd = 0,
  so = 1 / 0,
  nn = null,
  us = !1,
  mc = null,
  Ln = null,
  ua = !1,
  bn = null,
  cs = 0,
  Go = 0,
  gc = null,
  _a = -1,
  Ra = 0;
function Ke() {
  return K & 6 ? we() : _a !== -1 ? _a : (_a = we());
}
function Fn(e) {
  return e.mode & 1
    ? K & 2 && Ve !== 0
      ? Ve & -Ve
      : V4.transition !== null
      ? (Ra === 0 && (Ra = Ym()), Ra)
      : ((e = J),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : n1(e.type))),
        e)
    : 1;
}
function Vt(e, t, n, r) {
  if (50 < Go) throw ((Go = 0), (gc = null), Error(O(185)));
  bi(e, n, r),
    (!(K & 2) || e !== Me) &&
      (e === Me && (!(K & 2) && (Ds |= n), Te === 4 && En(e, Ve)),
      tt(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((so = we() + 500), Vs && Hn()));
}
function tt(e, t) {
  var n = e.callbackNode;
  V8(e, t);
  var r = Ga(e, e === Me ? Ve : 0);
  if (r === 0)
    n !== null && mp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && mp(n), t === 1))
      e.tag === 0 ? F4(s0.bind(null, e)) : x1(s0.bind(null, e)),
        _4(function () {
          !(K & 6) && Hn();
        }),
        (n = null);
    else {
      switch (Xm(r)) {
        case 1:
          n = ud;
          break;
        case 4:
          n = Gm;
          break;
        case 16:
          n = Za;
          break;
        case 536870912:
          n = Km;
          break;
        default:
          n = Za;
      }
      n = wg(n, pg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function pg(e, t) {
  if (((_a = -1), (Ra = 0), K & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Xr() && e.callbackNode !== n) return null;
  var r = Ga(e, e === Me ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ds(e, r);
  else {
    t = r;
    var o = K;
    K |= 2;
    var i = mg();
    (Me !== e || Ve !== t) && ((nn = null), (so = we() + 500), ir(e, t));
    do
      try {
        tS();
        break;
      } catch (s) {
        hg(e, s);
      }
    while (!0);
    kd(),
      (ls.current = i),
      (K = o),
      Pe !== null ? (t = 0) : ((Me = null), (Ve = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Hu(e)), o !== 0 && ((r = o), (t = vc(e, o)))), t === 1)
    )
      throw ((n = mi), ir(e, 0), En(e, r), tt(e, we()), n);
    if (t === 6) En(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !J4(o) &&
          ((t = ds(e, r)),
          t === 2 && ((i = Hu(e)), i !== 0 && ((r = i), (t = vc(e, i)))),
          t === 1))
      )
        throw ((n = mi), ir(e, 0), En(e, r), tt(e, we()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Xn(e, Qe, nn);
          break;
        case 3:
          if (
            (En(e, r), (r & 130023424) === r && ((t = jd + 500 - we()), 10 < t))
          ) {
            if (Ga(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ke(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Qu(Xn.bind(null, e, Qe, nn), t);
            break;
          }
          Xn(e, Qe, nn);
          break;
        case 4:
          if ((En(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Ft(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * q4(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qu(Xn.bind(null, e, Qe, nn), r);
            break;
          }
          Xn(e, Qe, nn);
          break;
        case 5:
          Xn(e, Qe, nn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return tt(e, we()), e.callbackNode === n ? pg.bind(null, e) : null;
}
function vc(e, t) {
  var n = Zo;
  return (
    e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
    (e = ds(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && yc(t)),
    e
  );
}
function yc(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function J4(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!It(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function En(e, t) {
  for (
    t &= ~Id,
      t &= ~Ds,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function s0(e) {
  if (K & 6) throw Error(O(327));
  Xr();
  var t = Ga(e, 0);
  if (!(t & 1)) return tt(e, we()), null;
  var n = ds(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hu(e);
    r !== 0 && ((t = r), (n = vc(e, r)));
  }
  if (n === 1) throw ((n = mi), ir(e, 0), En(e, t), tt(e, we()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xn(e, Qe, nn),
    tt(e, we()),
    null
  );
}
function Nd(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((so = we() + 500), Vs && Hn());
  }
}
function mr(e) {
  bn !== null && bn.tag === 0 && !(K & 6) && Xr();
  var t = K;
  K |= 1;
  var n = Pt.transition,
    r = J;
  try {
    if (((Pt.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (Pt.transition = n), (K = t), !(K & 6) && Hn();
  }
}
function Dd() {
  (at = Nr.current), ue(Nr);
}
function ir(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), M4(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((Sd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qa();
          break;
        case 3:
          io(), ue(Je), ue(We), Ad();
          break;
        case 5:
          bd(r);
          break;
        case 4:
          io();
          break;
        case 13:
          ue(he);
          break;
        case 19:
          ue(he);
          break;
        case 10:
          Cd(r.type._context);
          break;
        case 22:
        case 23:
          Dd();
      }
      n = n.return;
    }
  if (
    ((Me = e),
    (Pe = e = Vn(e.current, null)),
    (Ve = at = t),
    (Te = 0),
    (mi = null),
    (Id = Ds = hr = 0),
    (Qe = Zo = null),
    tr !== null)
  ) {
    for (t = 0; t < tr.length; t++)
      if (((n = tr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    tr = null;
  }
  return e;
}
function hg(e, t) {
  do {
    var n = Pe;
    try {
      if ((kd(), (ba.current = ss), as)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        as = !1;
      }
      if (
        ((pr = 0),
        (Ae = Ee = ge = null),
        (Wo = !1),
        (fi = 0),
        (Vd.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (mi = t), (Pe = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = Ve),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Kp(a);
          if (h !== null) {
            (h.flags &= -257),
              Yp(h, a, s, i, t),
              h.mode & 1 && Gp(i, u, t),
              (t = h),
              (l = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Gp(i, u, t), $d();
              break e;
            }
            l = Error(O(426));
          }
        } else if (fe && s.mode & 1) {
          var k = Kp(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Yp(k, a, s, i, t),
              wd(ao(l, s));
            break e;
          }
        }
        (i = l = ao(l, s)),
          Te !== 4 && (Te = 2),
          Zo === null ? (Zo = [i]) : Zo.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Q1(i, l, t);
              $p(i, g);
              break e;
            case 1:
              s = l;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = q1(i, s, t);
                $p(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vg(n);
    } catch (T) {
      (t = T), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mg() {
  var e = ls.current;
  return (ls.current = ss), e === null ? ss : e;
}
function $d() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Me === null || (!(hr & 268435455) && !(Ds & 268435455)) || En(Me, Ve);
}
function ds(e, t) {
  var n = K;
  K |= 2;
  var r = mg();
  (Me !== e || Ve !== t) && ((nn = null), ir(e, t));
  do
    try {
      eS();
      break;
    } catch (o) {
      hg(e, o);
    }
  while (!0);
  if ((kd(), (K = n), (ls.current = r), Pe !== null)) throw Error(O(261));
  return (Me = null), (Ve = 0), Te;
}
function eS() {
  for (; Pe !== null; ) gg(Pe);
}
function tS() {
  for (; Pe !== null && !T8(); ) gg(Pe);
}
function gg(e) {
  var t = Sg(e.alternate, e, at);
  (e.memoizedProps = e.pendingProps),
    t === null ? vg(e) : (Pe = t),
    (Vd.current = null);
}
function vg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = K4(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (Pe = null);
        return;
      }
    } else if (((n = G4(n, t, at)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function Xn(e, t, n) {
  var r = J,
    o = Pt.transition;
  try {
    (Pt.transition = null), (J = 1), nS(e, t, n, r);
  } finally {
    (Pt.transition = o), (J = r);
  }
  return null;
}
function nS(e, t, n, r) {
  do Xr();
  while (bn !== null);
  if (K & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (I8(e, i),
    e === Me && ((Pe = Me = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ua ||
      ((ua = !0),
      wg(Za, function () {
        return Xr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Pt.transition), (Pt.transition = null);
    var a = J;
    J = 1;
    var s = K;
    (K |= 4),
      (Vd.current = null),
      X4(e, n),
      dg(n, e),
      k4(Yu),
      (Ka = !!Ku),
      (Yu = Ku = null),
      (e.current = n),
      Q4(n),
      b8(),
      (K = s),
      (J = a),
      (Pt.transition = i);
  } else e.current = n;
  if (
    (ua && ((ua = !1), (bn = e), (cs = o)),
    (i = e.pendingLanes),
    i === 0 && (Ln = null),
    _8(n.stateNode),
    tt(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (us) throw ((us = !1), (e = mc), (mc = null), e);
  return (
    cs & 1 && e.tag !== 0 && Xr(),
    (i = e.pendingLanes),
    i & 1 ? (e === gc ? Go++ : ((Go = 0), (gc = e))) : (Go = 0),
    Hn(),
    null
  );
}
function Xr() {
  if (bn !== null) {
    var e = Xm(cs),
      t = Pt.transition,
      n = J;
    try {
      if (((Pt.transition = null), (J = 16 > e ? 16 : e), bn === null))
        var r = !1;
      else {
        if (((e = bn), (bn = null), (cs = 0), K & 6)) throw Error(O(331));
        var o = K;
        for (K |= 4, I = e.current; I !== null; ) {
          var i = I,
            a = i.child;
          if (I.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (I = d);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var f = c.sibling,
                        h = c.return;
                      if ((lg(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (I = f);
                        break;
                      }
                      I = h;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (I = a);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Uo(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (I = g);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          a = I;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (I = m);
          else
            e: for (a = p; I !== null; ) {
              if (((s = I), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ns(9, s);
                  }
                } catch (T) {
                  ye(s, s.return, T);
                }
              if (s === a) {
                I = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (I = E);
                break e;
              }
              I = s.return;
            }
        }
        if (
          ((K = o), Hn(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(_s, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (Pt.transition = t);
    }
  }
  return !1;
}
function l0(e, t, n) {
  (t = ao(n, t)),
    (t = Q1(e, t, 1)),
    (e = On(e, t, 1)),
    (t = Ke()),
    e !== null && (bi(e, 1, t), tt(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) l0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        l0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(r)))
        ) {
          (e = ao(n, e)),
            (e = q1(t, e, 1)),
            (t = On(t, e, 1)),
            (e = Ke()),
            t !== null && (bi(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function rS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Me === e &&
      (Ve & n) === n &&
      (Te === 4 || (Te === 3 && (Ve & 130023424) === Ve && 500 > we() - jd)
        ? ir(e, 0)
        : (Id |= n)),
    tt(e, t);
}
function yg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ji), (Ji <<= 1), !(Ji & 130023424) && (Ji = 4194304))
      : (t = 1));
  var n = Ke();
  (e = hn(e, t)), e !== null && (bi(e, t, n), tt(e, n));
}
function oS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yg(e, n);
}
function iS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), yg(e, n);
}
var Sg;
Sg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), Z4(e, t, n);
      qe = !!(e.flags & 131072);
    }
  else (qe = !1), fe && t.flags & 1048576 && k1(t, ts, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ma(e, t), (e = t.pendingProps);
      var o = no(t, We.current);
      Yr(t, n), (o = _d(null, t, r, e, o, n));
      var i = Rd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            et(r) ? ((i = !0), Ja(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ed(t),
            (o.updater = Is),
            (t.stateNode = o),
            (o._reactInternals = t),
            oc(t, r, e, n),
            (t = sc(null, t, r, !0, i, n)))
          : ((t.tag = 0), fe && i && yd(t), Ge(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ma(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = sS(r)),
          (e = _t(r, e)),
          o)
        ) {
          case 0:
            t = ac(null, t, r, e, n);
            break e;
          case 1:
            t = qp(null, t, r, e, n);
            break e;
          case 11:
            t = Xp(null, t, r, e, n);
            break e;
          case 14:
            t = Qp(null, t, r, _t(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        ac(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        qp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((ng(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          T1(e, t),
          os(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ao(Error(O(423)), t)), (t = Jp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ao(Error(O(424)), t)), (t = Jp(e, t, r, n, o));
            break e;
          } else
            for (
              st = Rn(t.stateNode.containerInfo.firstChild),
                lt = t,
                fe = !0,
                Lt = null,
                n = _1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ro(), r === o)) {
            t = mn(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        R1(t),
        e === null && tc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Xu(r, o) ? (a = null) : i !== null && Xu(r, i) && (t.flags |= 32),
        tg(e, t),
        Ge(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && tc(t), null;
    case 13:
      return rg(e, t, n);
    case 4:
      return (
        Td(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = oo(t, null, r, n)) : Ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Xp(e, t, r, o, n)
      );
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          oe(ns, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (It(i.value, a)) {
            if (i.children === o.children && !Je.current) {
              t = mn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = un(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      nc(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(O(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  nc(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Ge(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Yr(t, n),
        (o = Et(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = _t(r, t.pendingProps)),
        (o = _t(r.type, o)),
        Qp(e, t, r, o, n)
      );
    case 15:
      return J1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Ma(e, t),
        (t.tag = 1),
        et(r) ? ((e = !0), Ja(t)) : (e = !1),
        Yr(t, n),
        A1(t, r, o),
        oc(t, r, o, n),
        sc(null, t, r, !0, e, n)
      );
    case 19:
      return og(e, t, n);
    case 22:
      return eg(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function wg(e, t) {
  return Zm(e, t);
}
function aS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, n, r) {
  return new aS(e, t, n, r);
}
function Bd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sS(e) {
  if (typeof e == "function") return Bd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ad)) return 11;
    if (e === sd) return 14;
  }
  return 2;
}
function Vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Oa(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Bd(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ar:
        return ar(n.children, o, i, t);
      case id:
        (a = 8), (o |= 8);
        break;
      case Au:
        return (
          (e = Ct(12, n, t, o | 2)), (e.elementType = Au), (e.lanes = i), e
        );
      case Mu:
        return (e = Ct(13, n, t, o)), (e.elementType = Mu), (e.lanes = i), e;
      case _u:
        return (e = Ct(19, n, t, o)), (e.elementType = _u), (e.lanes = i), e;
      case Mm:
        return $s(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bm:
              a = 10;
              break e;
            case Am:
              a = 9;
              break e;
            case ad:
              a = 11;
              break e;
            case sd:
              a = 14;
              break e;
            case xn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ct(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function ar(e, t, n, r) {
  return (e = Ct(7, e, r, t)), (e.lanes = n), e;
}
function $s(e, t, n, r) {
  return (
    (e = Ct(22, e, r, t)),
    (e.elementType = Mm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jl(e, t, n) {
  return (e = Ct(6, e, null, t)), (e.lanes = n), e;
}
function eu(e, t, n) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function zd(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new lS(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ct(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ed(i),
    e
  );
}
function uS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: br,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xg(e) {
  if (!e) return Nn;
  e = e._reactInternals;
  e: {
    if (vr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (et(n)) return w1(e, n, t);
  }
  return t;
}
function kg(e, t, n, r, o, i, a, s, l) {
  return (
    (e = zd(n, r, !0, e, o, i, a, s, l)),
    (e.context = xg(null)),
    (n = e.current),
    (r = Ke()),
    (o = Fn(n)),
    (i = un(r, o)),
    (i.callback = t ?? null),
    On(n, i, o),
    (e.current.lanes = o),
    bi(e, o, r),
    tt(e, r),
    e
  );
}
function Bs(e, t, n, r) {
  var o = t.current,
    i = Ke(),
    a = Fn(o);
  return (
    (n = xg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = un(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = On(o, t, a)),
    e !== null && (Vt(e, o, a, i), Ta(e, o, a)),
    a
  );
}
function fs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function u0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hd(e, t) {
  u0(e, t), (e = e.alternate) && u0(e, t);
}
function cS() {
  return null;
}
var Cg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wd(e) {
  this._internalRoot = e;
}
zs.prototype.render = Wd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Bs(e, t, null, null);
};
zs.prototype.unmount = Wd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mr(function () {
      Bs(null, e, null, null);
    }),
      (t[pn] = null);
  }
};
function zs(e) {
  this._internalRoot = e;
}
zs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++);
    Pn.splice(n, 0, e), n === 0 && t1(e);
  }
};
function Ud(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function c0() {}
function dS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = fs(a);
        i.call(u);
      };
    }
    var a = kg(t, r, e, 0, null, !1, !1, "", c0);
    return (
      (e._reactRootContainer = a),
      (e[pn] = a.current),
      si(e.nodeType === 8 ? e.parentNode : e),
      mr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = fs(l);
      s.call(u);
    };
  }
  var l = zd(e, 0, !1, null, null, !1, !1, "", c0);
  return (
    (e._reactRootContainer = l),
    (e[pn] = l.current),
    si(e.nodeType === 8 ? e.parentNode : e),
    mr(function () {
      Bs(t, l, n, r);
    }),
    l
  );
}
function Ws(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = fs(a);
        s.call(l);
      };
    }
    Bs(t, a, e, o);
  } else a = dS(n, t, e, o, r);
  return fs(a);
}
Qm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vo(t.pendingLanes);
        n !== 0 &&
          (cd(t, n | 1), tt(t, we()), !(K & 6) && ((so = we() + 500), Hn()));
      }
      break;
    case 13:
      mr(function () {
        var r = hn(e, 1);
        if (r !== null) {
          var o = Ke();
          Vt(r, e, 1, o);
        }
      }),
        Hd(e, 1);
  }
};
dd = function (e) {
  if (e.tag === 13) {
    var t = hn(e, 134217728);
    if (t !== null) {
      var n = Ke();
      Vt(t, e, 134217728, n);
    }
    Hd(e, 134217728);
  }
};
qm = function (e) {
  if (e.tag === 13) {
    var t = Fn(e),
      n = hn(e, t);
    if (n !== null) {
      var r = Ke();
      Vt(n, e, t, r);
    }
    Hd(e, t);
  }
};
Jm = function () {
  return J;
};
e1 = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
$u = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Lu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fs(r);
            if (!o) throw Error(O(90));
            Rm(r), Lu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Lm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ur(e, !!n.multiple, t, !1);
  }
};
$m = Nd;
Bm = mr;
var fS = { usingClientEntryPoint: !1, Events: [Mi, Or, Fs, Nm, Dm, Nd] },
  Ao = {
    findFiberByHostInstance: er,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  pS = {
    bundleType: Ao.bundleType,
    version: Ao.version,
    rendererPackageName: Ao.rendererPackageName,
    rendererConfig: Ao.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ao.findFiberByHostInstance || cS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ca.isDisabled && ca.supportsFiber)
    try {
      (_s = ca.inject(pS)), (Kt = ca);
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fS;
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ud(t)) throw Error(O(200));
  return uS(e, t, null, n);
};
ft.createRoot = function (e, t) {
  if (!Ud(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = Cg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = zd(e, 1, !1, null, null, n, !1, r, o)),
    (e[pn] = t.current),
    si(e.nodeType === 8 ? e.parentNode : e),
    new Wd(t)
  );
};
ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Wm(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
  return mr(e);
};
ft.hydrate = function (e, t, n) {
  if (!Hs(t)) throw Error(O(200));
  return Ws(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
  if (!Ud(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = Cg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = kg(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[pn] = t.current),
    si(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zs(t);
};
ft.render = function (e, t, n) {
  if (!Hs(t)) throw Error(O(200));
  return Ws(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
  if (!Hs(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (mr(function () {
        Ws(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pn] = null);
        });
      }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = Nd;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hs(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ws(e, t, n, !1, r);
};
ft.version = "18.2.0-next-9e3b772b8-20220608";
function Pg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pg);
    } catch (e) {
      console.error(e);
    }
}
Pg(), (km.exports = ft);
var Zd = km.exports,
  d0 = Zd;
(Tu.createRoot = d0.createRoot), (Tu.hydrateRoot = d0.hydrateRoot);
function hS(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function mS(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var gS = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(mS(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = hS(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Be = "-ms-",
  ps = "-moz-",
  X = "-webkit-",
  Eg = "comm",
  Gd = "rule",
  Kd = "decl",
  vS = "@import",
  Tg = "@keyframes",
  yS = "@layer",
  SS = Math.abs,
  Us = String.fromCharCode,
  wS = Object.assign;
function xS(e, t) {
  return Fe(e, 0) ^ 45
    ? (((((((t << 2) ^ Fe(e, 0)) << 2) ^ Fe(e, 1)) << 2) ^ Fe(e, 2)) << 2) ^
        Fe(e, 3)
    : 0;
}
function bg(e) {
  return e.trim();
}
function kS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function Sc(e, t) {
  return e.indexOf(t);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function gi(e, t, n) {
  return e.slice(t, n);
}
function Wt(e) {
  return e.length;
}
function Yd(e) {
  return e.length;
}
function da(e, t) {
  return t.push(e), e;
}
function CS(e, t) {
  return e.map(t).join("");
}
var Zs = 1,
  lo = 1,
  Ag = 0,
  nt = 0,
  Ce = 0,
  vo = "";
function Gs(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Zs,
    column: lo,
    length: a,
    return: "",
  };
}
function Mo(e, t) {
  return wS(Gs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function PS() {
  return Ce;
}
function ES() {
  return (
    (Ce = nt > 0 ? Fe(vo, --nt) : 0), lo--, Ce === 10 && ((lo = 1), Zs--), Ce
  );
}
function ut() {
  return (
    (Ce = nt < Ag ? Fe(vo, nt++) : 0), lo++, Ce === 10 && ((lo = 1), Zs++), Ce
  );
}
function Xt() {
  return Fe(vo, nt);
}
function La() {
  return nt;
}
function Ri(e, t) {
  return gi(vo, e, t);
}
function vi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Mg(e) {
  return (Zs = lo = 1), (Ag = Wt((vo = e))), (nt = 0), [];
}
function _g(e) {
  return (vo = ""), e;
}
function Fa(e) {
  return bg(Ri(nt - 1, wc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function TS(e) {
  for (; (Ce = Xt()) && Ce < 33; ) ut();
  return vi(e) > 2 || vi(Ce) > 3 ? "" : " ";
}
function bS(e, t) {
  for (
    ;
    --t &&
    ut() &&
    !(Ce < 48 || Ce > 102 || (Ce > 57 && Ce < 65) || (Ce > 70 && Ce < 97));

  );
  return Ri(e, La() + (t < 6 && Xt() == 32 && ut() == 32));
}
function wc(e) {
  for (; ut(); )
    switch (Ce) {
      case e:
        return nt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wc(Ce);
        break;
      case 40:
        e === 41 && wc(e);
        break;
      case 92:
        ut();
        break;
    }
  return nt;
}
function AS(e, t) {
  for (; ut() && e + Ce !== 57; ) if (e + Ce === 84 && Xt() === 47) break;
  return "/*" + Ri(t, nt - 1) + "*" + Us(e === 47 ? e : ut());
}
function MS(e) {
  for (; !vi(Xt()); ) ut();
  return Ri(e, nt);
}
function _S(e) {
  return _g(Va("", null, null, null, [""], (e = Mg(e)), 0, [0], e));
}
function Va(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      S = 0,
      v = 1,
      k = 1,
      g = 1,
      p = 0,
      m = "",
      E = o,
      T = i,
      R = r,
      A = m;
    k;

  )
    switch (((S = p), (p = ut()))) {
      case 40:
        if (S != 108 && Fe(A, d - 1) == 58) {
          Sc((A += Q(Fa(p), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Fa(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += TS(S);
        break;
      case 92:
        A += bS(La() - 1, 7);
        continue;
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            da(RS(AS(ut(), La()), t, n), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * v:
        s[u++] = Wt(A) * g;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            k = 0;
          case 59 + c:
            g == -1 && (A = Q(A, /\f/g, "")),
              h > 0 &&
                Wt(A) - d &&
                da(
                  h > 32
                    ? p0(A + ";", r, n, d - 1)
                    : p0(Q(A, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            A += ";";
          default:
            if (
              (da((R = f0(A, t, n, u, c, o, s, m, (E = []), (T = []), d)), i),
              p === 123)
            )
              if (c === 0) Va(A, t, R, R, E, i, d, s, T);
              else
                switch (f === 99 && Fe(A, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Va(
                      e,
                      R,
                      R,
                      r && da(f0(e, R, R, 0, 0, o, s, m, o, (E = []), d), T),
                      o,
                      T,
                      d,
                      s,
                      r ? E : T
                    );
                    break;
                  default:
                    Va(A, R, R, R, [""], T, 0, s, T);
                }
        }
        (u = c = h = 0), (v = g = 1), (m = A = ""), (d = a);
        break;
      case 58:
        (d = 1 + Wt(A)), (h = S);
      default:
        if (v < 1) {
          if (p == 123) --v;
          else if (p == 125 && v++ == 0 && ES() == 125) continue;
        }
        switch (((A += Us(p)), p * v)) {
          case 38:
            g = c > 0 ? 1 : ((A += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Wt(A) - 1) * g), (g = 1);
            break;
          case 64:
            Xt() === 45 && (A += Fa(ut())),
              (f = Xt()),
              (c = d = Wt((m = A += MS(La())))),
              p++;
            break;
          case 45:
            S === 45 && Wt(A) == 2 && (v = 0);
        }
    }
  return i;
}
function f0(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], h = Yd(f), S = 0, v = 0, k = 0;
    S < r;
    ++S
  )
    for (var g = 0, p = gi(e, d + 1, (d = SS((v = a[S])))), m = e; g < h; ++g)
      (m = bg(v > 0 ? f[g] + " " + p : Q(p, /&\f/g, f[g]))) && (l[k++] = m);
  return Gs(e, t, n, o === 0 ? Gd : s, l, u, c);
}
function RS(e, t, n) {
  return Gs(e, t, n, Eg, Us(PS()), gi(e, 2, -2), 0);
}
function p0(e, t, n, r) {
  return Gs(e, t, n, Kd, gi(e, 0, r), gi(e, r + 1, -1), r);
}
function Qr(e, t) {
  for (var n = "", r = Yd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function OS(e, t, n, r) {
  switch (e.type) {
    case yS:
      if (e.children.length) break;
    case vS:
    case Kd:
      return (e.return = e.return || e.value);
    case Eg:
      return "";
    case Tg:
      return (e.return = e.value + "{" + Qr(e.children, r) + "}");
    case Gd:
      e.value = e.props.join(",");
  }
  return Wt((n = Qr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function LS(e) {
  var t = Yd(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function FS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Rg(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var VS = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Xt()), o === 38 && i === 12 && (n[r] = 1), !vi(i);

    )
      ut();
    return Ri(t, nt);
  },
  IS = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (vi(o)) {
        case 0:
          o === 38 && Xt() === 12 && (n[r] = 1), (t[r] += VS(nt - 1, n, r));
          break;
        case 2:
          t[r] += Fa(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Xt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Us(o);
      }
    while ((o = ut()));
    return t;
  },
  jS = function (t, n) {
    return _g(IS(Mg(t), n));
  },
  h0 = new WeakMap(),
  NS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !h0.get(r)) &&
        !o
      ) {
        h0.set(t, !0);
        for (
          var i = [], a = jS(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  DS = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Og(e, t) {
  switch (xS(e, t)) {
    case 5103:
      return X + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + ps + e + Be + e + e;
    case 6828:
    case 4268:
      return X + e + Be + e + e;
    case 6165:
      return X + e + Be + "flex-" + e + e;
    case 5187:
      return (
        X + e + Q(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + Be + "flex-$1$2") + e
      );
    case 5443:
      return X + e + Be + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        X +
        e +
        Be +
        "flex-line-pack" +
        Q(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return X + e + Be + Q(e, "shrink", "negative") + e;
    case 5292:
      return X + e + Be + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        X +
        "box-" +
        Q(e, "-grow", "") +
        X +
        e +
        Be +
        Q(e, "grow", "positive") +
        e
      );
    case 4554:
      return X + Q(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
      return (
        Q(Q(Q(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return (
        Q(
          Q(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + Be + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        X +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Wt(e) - 1 - t > 6)
        switch (Fe(e, t + 1)) {
          case 109:
            if (Fe(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  X +
                  "$2-$3$1" +
                  ps +
                  (Fe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Sc(e, "stretch")
              ? Og(Q(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Fe(e, t + 1) !== 115) break;
    case 6444:
      switch (Fe(e, Wt(e) - 3 - (~Sc(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + X) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                X +
                (Fe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                X +
                "$2$3$1" +
                Be +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Fe(e, t + 11)) {
        case 114:
          return X + e + Be + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return X + e + Be + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return X + e + Be + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return X + e + Be + e + e;
  }
  return e;
}
var $S = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Kd:
          t.return = Og(t.value, t.length);
          break;
        case Tg:
          return Qr([Mo(t, { value: Q(t.value, "@", "@" + X) })], o);
        case Gd:
          if (t.length)
            return CS(t.props, function (i) {
              switch (kS(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Qr(
                    [Mo(t, { props: [Q(i, /:(read-\w+)/, ":" + ps + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Qr(
                    [
                      Mo(t, {
                        props: [Q(i, /:(plac\w+)/, ":" + X + "input-$1")],
                      }),
                      Mo(t, { props: [Q(i, /:(plac\w+)/, ":" + ps + "$1")] }),
                      Mo(t, { props: [Q(i, /:(plac\w+)/, Be + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  BS = [$S],
  zS = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var k = v.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || BS,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var k = v.getAttribute("data-emotion").split(" "), g = 1;
            g < k.length;
            g++
          )
            i[k[g]] = !0;
          s.push(v);
        }
      );
    var l,
      u = [NS, DS];
    {
      var c,
        d = [
          OS,
          FS(function (v) {
            c.insert(v);
          }),
        ],
        f = LS(u.concat(o, d)),
        h = function (k) {
          return Qr(_S(k), f);
        };
      l = function (k, g, p, m) {
        (c = p),
          h(k ? k + "{" + g.styles + "}" : g.styles),
          m && (S.inserted[g.name] = !0);
      };
    }
    var S = {
      key: n,
      sheet: new gS({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return S.sheet.hydrate(s), S;
  };
function uo() {
  return (
    (uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uo.apply(this, arguments)
  );
}
var Lg = { exports: {} },
  ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Re = typeof Symbol == "function" && Symbol.for,
  Xd = Re ? Symbol.for("react.element") : 60103,
  Qd = Re ? Symbol.for("react.portal") : 60106,
  Ks = Re ? Symbol.for("react.fragment") : 60107,
  Ys = Re ? Symbol.for("react.strict_mode") : 60108,
  Xs = Re ? Symbol.for("react.profiler") : 60114,
  Qs = Re ? Symbol.for("react.provider") : 60109,
  qs = Re ? Symbol.for("react.context") : 60110,
  qd = Re ? Symbol.for("react.async_mode") : 60111,
  Js = Re ? Symbol.for("react.concurrent_mode") : 60111,
  el = Re ? Symbol.for("react.forward_ref") : 60112,
  tl = Re ? Symbol.for("react.suspense") : 60113,
  HS = Re ? Symbol.for("react.suspense_list") : 60120,
  nl = Re ? Symbol.for("react.memo") : 60115,
  rl = Re ? Symbol.for("react.lazy") : 60116,
  WS = Re ? Symbol.for("react.block") : 60121,
  US = Re ? Symbol.for("react.fundamental") : 60117,
  ZS = Re ? Symbol.for("react.responder") : 60118,
  GS = Re ? Symbol.for("react.scope") : 60119;
function ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xd:
        switch (((e = e.type), e)) {
          case qd:
          case Js:
          case Ks:
          case Xs:
          case Ys:
          case tl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case qs:
              case el:
              case rl:
              case nl:
              case Qs:
                return e;
              default:
                return t;
            }
        }
      case Qd:
        return t;
    }
  }
}
function Fg(e) {
  return ht(e) === Js;
}
ee.AsyncMode = qd;
ee.ConcurrentMode = Js;
ee.ContextConsumer = qs;
ee.ContextProvider = Qs;
ee.Element = Xd;
ee.ForwardRef = el;
ee.Fragment = Ks;
ee.Lazy = rl;
ee.Memo = nl;
ee.Portal = Qd;
ee.Profiler = Xs;
ee.StrictMode = Ys;
ee.Suspense = tl;
ee.isAsyncMode = function (e) {
  return Fg(e) || ht(e) === qd;
};
ee.isConcurrentMode = Fg;
ee.isContextConsumer = function (e) {
  return ht(e) === qs;
};
ee.isContextProvider = function (e) {
  return ht(e) === Qs;
};
ee.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xd;
};
ee.isForwardRef = function (e) {
  return ht(e) === el;
};
ee.isFragment = function (e) {
  return ht(e) === Ks;
};
ee.isLazy = function (e) {
  return ht(e) === rl;
};
ee.isMemo = function (e) {
  return ht(e) === nl;
};
ee.isPortal = function (e) {
  return ht(e) === Qd;
};
ee.isProfiler = function (e) {
  return ht(e) === Xs;
};
ee.isStrictMode = function (e) {
  return ht(e) === Ys;
};
ee.isSuspense = function (e) {
  return ht(e) === tl;
};
ee.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ks ||
    e === Js ||
    e === Xs ||
    e === Ys ||
    e === tl ||
    e === HS ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === rl ||
        e.$$typeof === nl ||
        e.$$typeof === Qs ||
        e.$$typeof === qs ||
        e.$$typeof === el ||
        e.$$typeof === US ||
        e.$$typeof === ZS ||
        e.$$typeof === GS ||
        e.$$typeof === WS))
  );
};
ee.typeOf = ht;
Lg.exports = ee;
var KS = Lg.exports,
  Vg = KS,
  YS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  XS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ig = {};
Ig[Vg.ForwardRef] = YS;
Ig[Vg.Memo] = XS;
var QS = !0;
function qS(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var jg = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || QS === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  JS = function (t, n, r) {
    jg(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function ew(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var tw = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  nw = /[A-Z]|^ms/g,
  rw = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ng = function (t) {
    return t.charCodeAt(1) === 45;
  },
  m0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  tu = Rg(function (e) {
    return Ng(e) ? e : e.replace(nw, "-$&").toLowerCase();
  }),
  g0 = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(rw, function (r, o, i) {
            return (Ut = { name: o, styles: i, next: Ut }), o;
          });
    }
    return tw[t] !== 1 && !Ng(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function yi(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Ut = { name: n.name, styles: n.styles, next: Ut }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Ut = { name: r.name, styles: r.styles, next: Ut }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return ow(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ut,
          a = n(e);
        return (Ut = i), yi(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function ow(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += yi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : m0(a) && (r += tu(i) + ":" + g0(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          m0(a[s]) && (r += tu(i) + ":" + g0(i, a[s]) + ";");
      else {
        var l = yi(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += tu(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var v0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ut,
  Dg = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Ut = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += yi(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += yi(r, n, t[s])), o && (i += a[s]);
    v0.lastIndex = 0;
    for (var l = "", u; (u = v0.exec(i)) !== null; ) l += "-" + u[1];
    var c = ew(i) + l;
    return { name: c, styles: i, next: Ut };
  },
  iw = function (t) {
    return t();
  },
  aw = ip.useInsertionEffect ? ip.useInsertionEffect : !1,
  sw = aw || iw,
  $g = w.createContext(typeof HTMLElement < "u" ? zS({ key: "css" }) : null);
$g.Provider;
var lw = function (t) {
    return w.forwardRef(function (n, r) {
      var o = w.useContext($g);
      return t(n, o, r);
    });
  },
  Bg = w.createContext({});
function uw() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Dg(t);
}
var cw = function () {
  var t = uw.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function dw(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function yr(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = w.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = w.useContext(s);
    if (!c && n) {
      const d = new Error(i ?? dw(r, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [PA, fw] = yr({ strict: !1, name: "PortalManagerContext" }),
  xc =
    globalThis != null && globalThis.document ? w.useLayoutEffect : w.useEffect,
  [zg, pw] = yr({ strict: !1, name: "PortalContext" }),
  Jd = "chakra-portal",
  hw = ".chakra-portal",
  mw = (e) =>
    M.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  gw = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = w.useState(null),
      i = w.useRef(null),
      [, a] = w.useState({});
    w.useEffect(() => a({}), []);
    const s = pw(),
      l = fw();
    xc(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = Jd),
        d.appendChild(i.current),
        a({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? M.jsx(mw, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? Zd.createPortal(M.jsx(zg, { value: i.current, children: u }), i.current)
      : M.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  vw = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      a = w.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = Jd), l;
      }, [o]),
      [, s] = w.useState({});
    return (
      xc(() => s({}), []),
      xc(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a);
            }
          );
      }, [a, i]),
      i && a
        ? Zd.createPortal(M.jsx(zg, { value: r ? a : null, children: t }), a)
        : null
    );
  };
function ol(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? M.jsx(vw, { containerRef: n, ...r }) : M.jsx(gw, { ...r });
}
ol.className = Jd;
ol.selector = hw;
ol.displayName = "Portal";
function yw() {
  const e = w.useContext(Bg);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Hg = w.createContext({});
Hg.displayName = "ColorModeContext";
function Wg() {
  const e = w.useContext(Hg);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Sw() {
  const e = Wg(),
    t = yw();
  return { ...e, theme: t };
}
var Ue = (...e) => e.filter(Boolean).join(" ");
function sr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function rr(e, ...t) {
  return ww(e) ? e(...t) : e;
}
var ww = (e) => typeof e == "function",
  Rt = (e) => (e ? "" : void 0),
  nu = (e) => (e ? !0 : void 0);
function Dr(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var hs = { exports: {} };
hs.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    h = "[object Function]",
    S = "[object GeneratorFunction]",
    v = "[object Map]",
    k = "[object Number]",
    g = "[object Null]",
    p = "[object Object]",
    m = "[object Proxy]",
    E = "[object RegExp]",
    T = "[object Set]",
    R = "[object String]",
    A = "[object Undefined]",
    _ = "[object WeakMap]",
    L = "[object ArrayBuffer]",
    j = "[object DataView]",
    q = "[object Float32Array]",
    pe = "[object Float64Array]",
    z = "[object Int8Array]",
    re = "[object Int16Array]",
    mt = "[object Int32Array]",
    ae = "[object Uint8Array]",
    je = "[object Uint8ClampedArray]",
    F = "[object Uint16Array]",
    N = "[object Uint32Array]",
    B = /[\\^$.*+?()[\]{}|]/g,
    D = /^\[object .+?Constructor\]$/,
    te = /^(?:0|[1-9]\d*)$/,
    W = {};
  (W[q] = W[pe] = W[z] = W[re] = W[mt] = W[ae] = W[je] = W[F] = W[N] = !0),
    (W[s] =
      W[l] =
      W[L] =
      W[c] =
      W[j] =
      W[d] =
      W[f] =
      W[h] =
      W[v] =
      W[k] =
      W[p] =
      W[E] =
      W[T] =
      W[R] =
      W[_] =
        !1);
  var Ne = typeof Gi == "object" && Gi && Gi.Object === Object && Gi,
    Nt = typeof self == "object" && self && self.Object === Object && self,
    Se = Ne || Nt || Function("return this")(),
    be = t && !t.nodeType && t,
    ot = be && !0 && e && !e.nodeType && e,
    Dt = ot && ot.exports === be,
    At = Dt && Ne.process,
    $t = (function () {
      try {
        var y = ot && ot.require && ot.require("util").types;
        return y || (At && At.binding && At.binding("util"));
      } catch {}
    })(),
    vl = $t && $t.isTypedArray;
  function _2(y, C, b) {
    switch (b.length) {
      case 0:
        return y.call(C);
      case 1:
        return y.call(C, b[0]);
      case 2:
        return y.call(C, b[0], b[1]);
      case 3:
        return y.call(C, b[0], b[1], b[2]);
    }
    return y.apply(C, b);
  }
  function R2(y, C) {
    for (var b = -1, V = Array(y); ++b < y; ) V[b] = C(b);
    return V;
  }
  function O2(y) {
    return function (C) {
      return y(C);
    };
  }
  function L2(y, C) {
    return y == null ? void 0 : y[C];
  }
  function F2(y, C) {
    return function (b) {
      return y(C(b));
    };
  }
  var V2 = Array.prototype,
    I2 = Function.prototype,
    Di = Object.prototype,
    yl = Se["__core-js_shared__"],
    $i = I2.toString,
    Jt = Di.hasOwnProperty,
    jf = (function () {
      var y = /[^.]+$/.exec((yl && yl.keys && yl.keys.IE_PROTO) || "");
      return y ? "Symbol(src)_1." + y : "";
    })(),
    Nf = Di.toString,
    j2 = $i.call(Object),
    N2 = RegExp(
      "^" +
        $i
          .call(Jt)
          .replace(B, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Bi = Dt ? Se.Buffer : void 0,
    Df = Se.Symbol,
    $f = Se.Uint8Array,
    Bf = Bi ? Bi.allocUnsafe : void 0,
    zf = F2(Object.getPrototypeOf, Object),
    Hf = Object.create,
    D2 = Di.propertyIsEnumerable,
    $2 = V2.splice,
    Un = Df ? Df.toStringTag : void 0,
    zi = (function () {
      try {
        var y = xl(Object, "defineProperty");
        return y({}, "", {}), y;
      } catch {}
    })(),
    B2 = Bi ? Bi.isBuffer : void 0,
    Wf = Math.max,
    z2 = Date.now,
    Uf = xl(Se, "Map"),
    yo = xl(Object, "create"),
    H2 = (function () {
      function y() {}
      return function (C) {
        if (!Gn(C)) return {};
        if (Hf) return Hf(C);
        y.prototype = C;
        var b = new y();
        return (y.prototype = void 0), b;
      };
    })();
  function Zn(y) {
    var C = -1,
      b = y == null ? 0 : y.length;
    for (this.clear(); ++C < b; ) {
      var V = y[C];
      this.set(V[0], V[1]);
    }
  }
  function W2() {
    (this.__data__ = yo ? yo(null) : {}), (this.size = 0);
  }
  function U2(y) {
    var C = this.has(y) && delete this.__data__[y];
    return (this.size -= C ? 1 : 0), C;
  }
  function Z2(y) {
    var C = this.__data__;
    if (yo) {
      var b = C[y];
      return b === r ? void 0 : b;
    }
    return Jt.call(C, y) ? C[y] : void 0;
  }
  function G2(y) {
    var C = this.__data__;
    return yo ? C[y] !== void 0 : Jt.call(C, y);
  }
  function K2(y, C) {
    var b = this.__data__;
    return (
      (this.size += this.has(y) ? 0 : 1),
      (b[y] = yo && C === void 0 ? r : C),
      this
    );
  }
  (Zn.prototype.clear = W2),
    (Zn.prototype.delete = U2),
    (Zn.prototype.get = Z2),
    (Zn.prototype.has = G2),
    (Zn.prototype.set = K2);
  function en(y) {
    var C = -1,
      b = y == null ? 0 : y.length;
    for (this.clear(); ++C < b; ) {
      var V = y[C];
      this.set(V[0], V[1]);
    }
  }
  function Y2() {
    (this.__data__ = []), (this.size = 0);
  }
  function X2(y) {
    var C = this.__data__,
      b = Hi(C, y);
    if (b < 0) return !1;
    var V = C.length - 1;
    return b == V ? C.pop() : $2.call(C, b, 1), --this.size, !0;
  }
  function Q2(y) {
    var C = this.__data__,
      b = Hi(C, y);
    return b < 0 ? void 0 : C[b][1];
  }
  function q2(y) {
    return Hi(this.__data__, y) > -1;
  }
  function J2(y, C) {
    var b = this.__data__,
      V = Hi(b, y);
    return V < 0 ? (++this.size, b.push([y, C])) : (b[V][1] = C), this;
  }
  (en.prototype.clear = Y2),
    (en.prototype.delete = X2),
    (en.prototype.get = Q2),
    (en.prototype.has = q2),
    (en.prototype.set = J2);
  function xr(y) {
    var C = -1,
      b = y == null ? 0 : y.length;
    for (this.clear(); ++C < b; ) {
      var V = y[C];
      this.set(V[0], V[1]);
    }
  }
  function e6() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Zn(),
        map: new (Uf || en)(),
        string: new Zn(),
      });
  }
  function t6(y) {
    var C = Ui(this, y).delete(y);
    return (this.size -= C ? 1 : 0), C;
  }
  function n6(y) {
    return Ui(this, y).get(y);
  }
  function r6(y) {
    return Ui(this, y).has(y);
  }
  function o6(y, C) {
    var b = Ui(this, y),
      V = b.size;
    return b.set(y, C), (this.size += b.size == V ? 0 : 1), this;
  }
  (xr.prototype.clear = e6),
    (xr.prototype.delete = t6),
    (xr.prototype.get = n6),
    (xr.prototype.has = r6),
    (xr.prototype.set = o6);
  function kr(y) {
    var C = (this.__data__ = new en(y));
    this.size = C.size;
  }
  function i6() {
    (this.__data__ = new en()), (this.size = 0);
  }
  function a6(y) {
    var C = this.__data__,
      b = C.delete(y);
    return (this.size = C.size), b;
  }
  function s6(y) {
    return this.__data__.get(y);
  }
  function l6(y) {
    return this.__data__.has(y);
  }
  function u6(y, C) {
    var b = this.__data__;
    if (b instanceof en) {
      var V = b.__data__;
      if (!Uf || V.length < n - 1)
        return V.push([y, C]), (this.size = ++b.size), this;
      b = this.__data__ = new xr(V);
    }
    return b.set(y, C), (this.size = b.size), this;
  }
  (kr.prototype.clear = i6),
    (kr.prototype.delete = a6),
    (kr.prototype.get = s6),
    (kr.prototype.has = l6),
    (kr.prototype.set = u6);
  function c6(y, C) {
    var b = Pl(y),
      V = !b && Cl(y),
      G = !b && !V && Xf(y),
      ne = !b && !V && !G && qf(y),
      ce = b || V || G || ne,
      U = ce ? R2(y.length, String) : [],
      de = U.length;
    for (var gt in y)
      (C || Jt.call(y, gt)) &&
        !(
          ce &&
          (gt == "length" ||
            (G && (gt == "offset" || gt == "parent")) ||
            (ne &&
              (gt == "buffer" || gt == "byteLength" || gt == "byteOffset")) ||
            Kf(gt, de))
        ) &&
        U.push(gt);
    return U;
  }
  function Sl(y, C, b) {
    ((b !== void 0 && !Zi(y[C], b)) || (b === void 0 && !(C in y))) &&
      wl(y, C, b);
  }
  function d6(y, C, b) {
    var V = y[C];
    (!(Jt.call(y, C) && Zi(V, b)) || (b === void 0 && !(C in y))) &&
      wl(y, C, b);
  }
  function Hi(y, C) {
    for (var b = y.length; b--; ) if (Zi(y[b][0], C)) return b;
    return -1;
  }
  function wl(y, C, b) {
    C == "__proto__" && zi
      ? zi(y, C, { configurable: !0, enumerable: !0, value: b, writable: !0 })
      : (y[C] = b);
  }
  var f6 = E6();
  function Wi(y) {
    return y == null
      ? y === void 0
        ? A
        : g
      : Un && Un in Object(y)
      ? T6(y)
      : O6(y);
  }
  function Zf(y) {
    return So(y) && Wi(y) == s;
  }
  function p6(y) {
    if (!Gn(y) || _6(y)) return !1;
    var C = Tl(y) ? N2 : D;
    return C.test(I6(y));
  }
  function h6(y) {
    return So(y) && Qf(y.length) && !!W[Wi(y)];
  }
  function m6(y) {
    if (!Gn(y)) return R6(y);
    var C = Yf(y),
      b = [];
    for (var V in y) (V == "constructor" && (C || !Jt.call(y, V))) || b.push(V);
    return b;
  }
  function Gf(y, C, b, V, G) {
    y !== C &&
      f6(
        C,
        function (ne, ce) {
          if ((G || (G = new kr()), Gn(ne))) g6(y, C, ce, b, Gf, V, G);
          else {
            var U = V ? V(kl(y, ce), ne, ce + "", y, C, G) : void 0;
            U === void 0 && (U = ne), Sl(y, ce, U);
          }
        },
        Jf
      );
  }
  function g6(y, C, b, V, G, ne, ce) {
    var U = kl(y, b),
      de = kl(C, b),
      gt = ce.get(de);
    if (gt) {
      Sl(y, b, gt);
      return;
    }
    var it = ne ? ne(U, de, b + "", y, C, ce) : void 0,
      wo = it === void 0;
    if (wo) {
      var bl = Pl(de),
        Al = !bl && Xf(de),
        tp = !bl && !Al && qf(de);
      (it = de),
        bl || Al || tp
          ? Pl(U)
            ? (it = U)
            : j6(U)
            ? (it = k6(U))
            : Al
            ? ((wo = !1), (it = S6(de, !0)))
            : tp
            ? ((wo = !1), (it = x6(de, !0)))
            : (it = [])
          : N6(de) || Cl(de)
          ? ((it = U),
            Cl(U) ? (it = D6(U)) : (!Gn(U) || Tl(U)) && (it = b6(de)))
          : (wo = !1);
    }
    wo && (ce.set(de, it), G(it, de, V, ne, ce), ce.delete(de)), Sl(y, b, it);
  }
  function v6(y, C) {
    return F6(L6(y, C, ep), y + "");
  }
  var y6 = zi
    ? function (y, C) {
        return zi(y, "toString", {
          configurable: !0,
          enumerable: !1,
          value: B6(C),
          writable: !0,
        });
      }
    : ep;
  function S6(y, C) {
    if (C) return y.slice();
    var b = y.length,
      V = Bf ? Bf(b) : new y.constructor(b);
    return y.copy(V), V;
  }
  function w6(y) {
    var C = new y.constructor(y.byteLength);
    return new $f(C).set(new $f(y)), C;
  }
  function x6(y, C) {
    var b = C ? w6(y.buffer) : y.buffer;
    return new y.constructor(b, y.byteOffset, y.length);
  }
  function k6(y, C) {
    var b = -1,
      V = y.length;
    for (C || (C = Array(V)); ++b < V; ) C[b] = y[b];
    return C;
  }
  function C6(y, C, b, V) {
    var G = !b;
    b || (b = {});
    for (var ne = -1, ce = C.length; ++ne < ce; ) {
      var U = C[ne],
        de = V ? V(b[U], y[U], U, b, y) : void 0;
      de === void 0 && (de = y[U]), G ? wl(b, U, de) : d6(b, U, de);
    }
    return b;
  }
  function P6(y) {
    return v6(function (C, b) {
      var V = -1,
        G = b.length,
        ne = G > 1 ? b[G - 1] : void 0,
        ce = G > 2 ? b[2] : void 0;
      for (
        ne = y.length > 3 && typeof ne == "function" ? (G--, ne) : void 0,
          ce && A6(b[0], b[1], ce) && ((ne = G < 3 ? void 0 : ne), (G = 1)),
          C = Object(C);
        ++V < G;

      ) {
        var U = b[V];
        U && y(C, U, V, ne);
      }
      return C;
    });
  }
  function E6(y) {
    return function (C, b, V) {
      for (var G = -1, ne = Object(C), ce = V(C), U = ce.length; U--; ) {
        var de = ce[y ? U : ++G];
        if (b(ne[de], de, ne) === !1) break;
      }
      return C;
    };
  }
  function Ui(y, C) {
    var b = y.__data__;
    return M6(C) ? b[typeof C == "string" ? "string" : "hash"] : b.map;
  }
  function xl(y, C) {
    var b = L2(y, C);
    return p6(b) ? b : void 0;
  }
  function T6(y) {
    var C = Jt.call(y, Un),
      b = y[Un];
    try {
      y[Un] = void 0;
      var V = !0;
    } catch {}
    var G = Nf.call(y);
    return V && (C ? (y[Un] = b) : delete y[Un]), G;
  }
  function b6(y) {
    return typeof y.constructor == "function" && !Yf(y) ? H2(zf(y)) : {};
  }
  function Kf(y, C) {
    var b = typeof y;
    return (
      (C = C ?? a),
      !!C &&
        (b == "number" || (b != "symbol" && te.test(y))) &&
        y > -1 &&
        y % 1 == 0 &&
        y < C
    );
  }
  function A6(y, C, b) {
    if (!Gn(b)) return !1;
    var V = typeof C;
    return (V == "number" ? El(b) && Kf(C, b.length) : V == "string" && C in b)
      ? Zi(b[C], y)
      : !1;
  }
  function M6(y) {
    var C = typeof y;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean"
      ? y !== "__proto__"
      : y === null;
  }
  function _6(y) {
    return !!jf && jf in y;
  }
  function Yf(y) {
    var C = y && y.constructor,
      b = (typeof C == "function" && C.prototype) || Di;
    return y === b;
  }
  function R6(y) {
    var C = [];
    if (y != null) for (var b in Object(y)) C.push(b);
    return C;
  }
  function O6(y) {
    return Nf.call(y);
  }
  function L6(y, C, b) {
    return (
      (C = Wf(C === void 0 ? y.length - 1 : C, 0)),
      function () {
        for (
          var V = arguments, G = -1, ne = Wf(V.length - C, 0), ce = Array(ne);
          ++G < ne;

        )
          ce[G] = V[C + G];
        G = -1;
        for (var U = Array(C + 1); ++G < C; ) U[G] = V[G];
        return (U[C] = b(ce)), _2(y, this, U);
      }
    );
  }
  function kl(y, C) {
    if (!(C === "constructor" && typeof y[C] == "function") && C != "__proto__")
      return y[C];
  }
  var F6 = V6(y6);
  function V6(y) {
    var C = 0,
      b = 0;
    return function () {
      var V = z2(),
        G = i - (V - b);
      if (((b = V), G > 0)) {
        if (++C >= o) return arguments[0];
      } else C = 0;
      return y.apply(void 0, arguments);
    };
  }
  function I6(y) {
    if (y != null) {
      try {
        return $i.call(y);
      } catch {}
      try {
        return y + "";
      } catch {}
    }
    return "";
  }
  function Zi(y, C) {
    return y === C || (y !== y && C !== C);
  }
  var Cl = Zf(
      (function () {
        return arguments;
      })()
    )
      ? Zf
      : function (y) {
          return So(y) && Jt.call(y, "callee") && !D2.call(y, "callee");
        },
    Pl = Array.isArray;
  function El(y) {
    return y != null && Qf(y.length) && !Tl(y);
  }
  function j6(y) {
    return So(y) && El(y);
  }
  var Xf = B2 || z6;
  function Tl(y) {
    if (!Gn(y)) return !1;
    var C = Wi(y);
    return C == h || C == S || C == u || C == m;
  }
  function Qf(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= a;
  }
  function Gn(y) {
    var C = typeof y;
    return y != null && (C == "object" || C == "function");
  }
  function So(y) {
    return y != null && typeof y == "object";
  }
  function N6(y) {
    if (!So(y) || Wi(y) != p) return !1;
    var C = zf(y);
    if (C === null) return !0;
    var b = Jt.call(C, "constructor") && C.constructor;
    return typeof b == "function" && b instanceof b && $i.call(b) == j2;
  }
  var qf = vl ? O2(vl) : h6;
  function D6(y) {
    return C6(y, Jf(y));
  }
  function Jf(y) {
    return El(y) ? c6(y, !0) : m6(y);
  }
  var $6 = P6(function (y, C, b, V) {
    Gf(y, C, b, V);
  });
  function B6(y) {
    return function () {
      return y;
    };
  }
  function ep(y) {
    return y;
  }
  function z6() {
    return !1;
  }
  e.exports = $6;
})(hs, hs.exports);
var xw = hs.exports;
const sn = Qc(xw);
var kw = (e) => /!(important)?$/.test(e),
  y0 = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  Cw = (e, t) => (n) => {
    const r = String(t),
      o = kw(r),
      i = y0(r),
      a = e ? `${e}.${i}` : i;
    let s = sr(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
    return (s = y0(s)), o ? `${s} !important` : s;
  };
function ef(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = Cw(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var fa =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function vt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = ef({ scale: e, transform: t })), r;
  };
}
var Pw =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function Ew(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: Pw(t),
    transform: n ? ef({ scale: n, compose: r }) : r,
  };
}
var Ug = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function Tw() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Ug,
  ].join(" ");
}
function bw() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Ug,
  ].join(" ");
}
var Aw = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  Mw = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function _w(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var Rw = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  kc = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  Ow = new Set(Object.values(kc)),
  Cc = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  Lw = (e) => e.trim();
function Fw(e, t) {
  if (e == null || Cc.has(e)) return e;
  if (!(Pc(e) || Cc.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2];
  if (!i || !a) return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = a.split(",").map(Lw).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in kc ? kc[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (Ow.has(f)) return f;
    const h = f.indexOf(" "),
      [S, v] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      k = Pc(v) ? v : v && v.split(" "),
      g = `colors.${S}`,
      p = g in t.__cssMap ? t.__cssMap[g].varRef : S;
    return k ? [p, ...(Array.isArray(k) ? k : [k])].join(" ") : p;
  });
  return `${s}(${d.join(", ")})`;
}
var Pc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  Vw = (e, t) => Fw(e, t ?? {});
function Iw(e) {
  return /^var\(--.+\)$/.test(e);
}
var jw = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  zt = (e) => (t) => `${e}(${t})`,
  Z = {
    filter(e) {
      return e !== "auto" ? e : Aw;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : Mw;
    },
    ring(e) {
      return _w(Z.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? Tw() : e === "auto-gpu" ? bw() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = jw(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (Iw(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: Vw,
    blur: zt("blur"),
    opacity: zt("opacity"),
    brightness: zt("brightness"),
    contrast: zt("contrast"),
    dropShadow: zt("drop-shadow"),
    grayscale: zt("grayscale"),
    hueRotate: (e) => zt("hue-rotate")(Z.degree(e)),
    invert: zt("invert"),
    saturate: zt("saturate"),
    sepia: zt("sepia"),
    bgImage(e) {
      return e == null || Pc(e) || Cc.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = Rw[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  P = {
    borderWidths: vt("borderWidths"),
    borderStyles: vt("borderStyles"),
    colors: vt("colors"),
    borders: vt("borders"),
    gradients: vt("gradients", Z.gradient),
    radii: vt("radii", Z.px),
    space: vt("space", fa(Z.vh, Z.px)),
    spaceT: vt("space", fa(Z.vh, Z.px)),
    degreeT(e) {
      return { property: e, transform: Z.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: ef({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: vt("sizes", fa(Z.vh, Z.px)),
    sizesT: vt("sizes", fa(Z.vh, Z.fraction)),
    shadows: vt("shadows"),
    logical: Ew,
    blur: vt("blur", Z.blur),
  },
  Ia = {
    background: P.colors("background"),
    backgroundColor: P.colors("backgroundColor"),
    backgroundImage: P.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Z.bgClip },
    bgSize: P.prop("backgroundSize"),
    bgPosition: P.prop("backgroundPosition"),
    bg: P.colors("background"),
    bgColor: P.colors("backgroundColor"),
    bgPos: P.prop("backgroundPosition"),
    bgRepeat: P.prop("backgroundRepeat"),
    bgAttachment: P.prop("backgroundAttachment"),
    bgGradient: P.gradients("backgroundImage"),
    bgClip: { transform: Z.bgClip },
  };
Object.assign(Ia, { bgImage: Ia.backgroundImage, bgImg: Ia.backgroundImage });
var Y = {
  border: P.borders("border"),
  borderWidth: P.borderWidths("borderWidth"),
  borderStyle: P.borderStyles("borderStyle"),
  borderColor: P.colors("borderColor"),
  borderRadius: P.radii("borderRadius"),
  borderTop: P.borders("borderTop"),
  borderBlockStart: P.borders("borderBlockStart"),
  borderTopLeftRadius: P.radii("borderTopLeftRadius"),
  borderStartStartRadius: P.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: P.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: P.radii("borderTopRightRadius"),
  borderStartEndRadius: P.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: P.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: P.borders("borderRight"),
  borderInlineEnd: P.borders("borderInlineEnd"),
  borderBottom: P.borders("borderBottom"),
  borderBlockEnd: P.borders("borderBlockEnd"),
  borderBottomLeftRadius: P.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: P.radii("borderBottomRightRadius"),
  borderLeft: P.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: P.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: P.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: P.borders(["borderLeft", "borderRight"]),
  borderInline: P.borders("borderInline"),
  borderY: P.borders(["borderTop", "borderBottom"]),
  borderBlock: P.borders("borderBlock"),
  borderTopWidth: P.borderWidths("borderTopWidth"),
  borderBlockStartWidth: P.borderWidths("borderBlockStartWidth"),
  borderTopColor: P.colors("borderTopColor"),
  borderBlockStartColor: P.colors("borderBlockStartColor"),
  borderTopStyle: P.borderStyles("borderTopStyle"),
  borderBlockStartStyle: P.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: P.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: P.borderWidths("borderBlockEndWidth"),
  borderBottomColor: P.colors("borderBottomColor"),
  borderBlockEndColor: P.colors("borderBlockEndColor"),
  borderBottomStyle: P.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: P.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: P.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: P.borderWidths("borderInlineStartWidth"),
  borderLeftColor: P.colors("borderLeftColor"),
  borderInlineStartColor: P.colors("borderInlineStartColor"),
  borderLeftStyle: P.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: P.borderStyles("borderInlineStartStyle"),
  borderRightWidth: P.borderWidths("borderRightWidth"),
  borderInlineEndWidth: P.borderWidths("borderInlineEndWidth"),
  borderRightColor: P.colors("borderRightColor"),
  borderInlineEndColor: P.colors("borderInlineEndColor"),
  borderRightStyle: P.borderStyles("borderRightStyle"),
  borderInlineEndStyle: P.borderStyles("borderInlineEndStyle"),
  borderTopRadius: P.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: P.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: P.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: P.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(Y, {
  rounded: Y.borderRadius,
  roundedTop: Y.borderTopRadius,
  roundedTopLeft: Y.borderTopLeftRadius,
  roundedTopRight: Y.borderTopRightRadius,
  roundedTopStart: Y.borderStartStartRadius,
  roundedTopEnd: Y.borderStartEndRadius,
  roundedBottom: Y.borderBottomRadius,
  roundedBottomLeft: Y.borderBottomLeftRadius,
  roundedBottomRight: Y.borderBottomRightRadius,
  roundedBottomStart: Y.borderEndStartRadius,
  roundedBottomEnd: Y.borderEndEndRadius,
  roundedLeft: Y.borderLeftRadius,
  roundedRight: Y.borderRightRadius,
  roundedStart: Y.borderInlineStartRadius,
  roundedEnd: Y.borderInlineEndRadius,
  borderStart: Y.borderInlineStart,
  borderEnd: Y.borderInlineEnd,
  borderTopStartRadius: Y.borderStartStartRadius,
  borderTopEndRadius: Y.borderStartEndRadius,
  borderBottomStartRadius: Y.borderEndStartRadius,
  borderBottomEndRadius: Y.borderEndEndRadius,
  borderStartRadius: Y.borderInlineStartRadius,
  borderEndRadius: Y.borderInlineEndRadius,
  borderStartWidth: Y.borderInlineStartWidth,
  borderEndWidth: Y.borderInlineEndWidth,
  borderStartColor: Y.borderInlineStartColor,
  borderEndColor: Y.borderInlineEndColor,
  borderStartStyle: Y.borderInlineStartStyle,
  borderEndStyle: Y.borderInlineEndStyle,
});
var Nw = {
    color: P.colors("color"),
    textColor: P.colors("color"),
    fill: P.colors("fill"),
    stroke: P.colors("stroke"),
  },
  Ec = {
    boxShadow: P.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: P.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: P.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Ec, { shadow: Ec.boxShadow });
var Dw = {
    filter: { transform: Z.filter },
    blur: P.blur("--chakra-blur"),
    brightness: P.propT("--chakra-brightness", Z.brightness),
    contrast: P.propT("--chakra-contrast", Z.contrast),
    hueRotate: P.propT("--chakra-hue-rotate", Z.hueRotate),
    invert: P.propT("--chakra-invert", Z.invert),
    saturate: P.propT("--chakra-saturate", Z.saturate),
    dropShadow: P.propT("--chakra-drop-shadow", Z.dropShadow),
    backdropFilter: { transform: Z.backdropFilter },
    backdropBlur: P.blur("--chakra-backdrop-blur"),
    backdropBrightness: P.propT("--chakra-backdrop-brightness", Z.brightness),
    backdropContrast: P.propT("--chakra-backdrop-contrast", Z.contrast),
    backdropHueRotate: P.propT("--chakra-backdrop-hue-rotate", Z.hueRotate),
    backdropInvert: P.propT("--chakra-backdrop-invert", Z.invert),
    backdropSaturate: P.propT("--chakra-backdrop-saturate", Z.saturate),
  },
  ms = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Z.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: P.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: P.space("gap"),
    rowGap: P.space("rowGap"),
    columnGap: P.space("columnGap"),
  };
Object.assign(ms, { flexDir: ms.flexDirection });
var Zg = {
    gridGap: P.space("gridGap"),
    gridColumnGap: P.space("gridColumnGap"),
    gridRowGap: P.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  $w = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Z.outline },
    outlineOffset: !0,
    outlineColor: P.colors("outlineColor"),
  },
  St = {
    width: P.sizesT("width"),
    inlineSize: P.sizesT("inlineSize"),
    height: P.sizes("height"),
    blockSize: P.sizes("blockSize"),
    boxSize: P.sizes(["width", "height"]),
    minWidth: P.sizes("minWidth"),
    minInlineSize: P.sizes("minInlineSize"),
    minHeight: P.sizes("minHeight"),
    minBlockSize: P.sizes("minBlockSize"),
    maxWidth: P.sizes("maxWidth"),
    maxInlineSize: P.sizes("maxInlineSize"),
    maxHeight: P.sizes("maxHeight"),
    maxBlockSize: P.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: P.propT("float", Z.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(St, {
  w: St.width,
  h: St.height,
  minW: St.minWidth,
  maxW: St.maxWidth,
  minH: St.minHeight,
  maxH: St.maxHeight,
  overscroll: St.overscrollBehavior,
  overscrollX: St.overscrollBehaviorX,
  overscrollY: St.overscrollBehaviorY,
});
var Bw = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: P.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: P.prop("listStyleImage"),
};
function zw(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var Hw = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  Ww = Hw(zw),
  Uw = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  Zw = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  ru = (e, t, n) => {
    const r = {},
      o = Ww(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  Gw = {
    srOnly: {
      transform(e) {
        return e === !0 ? Uw : e === "focusable" ? Zw : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => ru(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => ru(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => ru(t, e, n) },
  },
  Ko = {
    position: !0,
    pos: P.prop("position"),
    zIndex: P.prop("zIndex", "zIndices"),
    inset: P.spaceT("inset"),
    insetX: P.spaceT(["left", "right"]),
    insetInline: P.spaceT("insetInline"),
    insetY: P.spaceT(["top", "bottom"]),
    insetBlock: P.spaceT("insetBlock"),
    top: P.spaceT("top"),
    insetBlockStart: P.spaceT("insetBlockStart"),
    bottom: P.spaceT("bottom"),
    insetBlockEnd: P.spaceT("insetBlockEnd"),
    left: P.spaceT("left"),
    insetInlineStart: P.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: P.spaceT("right"),
    insetInlineEnd: P.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Ko, {
  insetStart: Ko.insetInlineStart,
  insetEnd: Ko.insetInlineEnd,
});
var Kw = {
    ring: { transform: Z.ring },
    ringColor: P.colors("--chakra-ring-color"),
    ringOffset: P.prop("--chakra-ring-offset-width"),
    ringOffsetColor: P.colors("--chakra-ring-offset-color"),
    ringInset: P.prop("--chakra-ring-inset"),
  },
  le = {
    margin: P.spaceT("margin"),
    marginTop: P.spaceT("marginTop"),
    marginBlockStart: P.spaceT("marginBlockStart"),
    marginRight: P.spaceT("marginRight"),
    marginInlineEnd: P.spaceT("marginInlineEnd"),
    marginBottom: P.spaceT("marginBottom"),
    marginBlockEnd: P.spaceT("marginBlockEnd"),
    marginLeft: P.spaceT("marginLeft"),
    marginInlineStart: P.spaceT("marginInlineStart"),
    marginX: P.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: P.spaceT("marginInline"),
    marginY: P.spaceT(["marginTop", "marginBottom"]),
    marginBlock: P.spaceT("marginBlock"),
    padding: P.space("padding"),
    paddingTop: P.space("paddingTop"),
    paddingBlockStart: P.space("paddingBlockStart"),
    paddingRight: P.space("paddingRight"),
    paddingBottom: P.space("paddingBottom"),
    paddingBlockEnd: P.space("paddingBlockEnd"),
    paddingLeft: P.space("paddingLeft"),
    paddingInlineStart: P.space("paddingInlineStart"),
    paddingInlineEnd: P.space("paddingInlineEnd"),
    paddingX: P.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: P.space("paddingInline"),
    paddingY: P.space(["paddingTop", "paddingBottom"]),
    paddingBlock: P.space("paddingBlock"),
  };
Object.assign(le, {
  m: le.margin,
  mt: le.marginTop,
  mr: le.marginRight,
  me: le.marginInlineEnd,
  marginEnd: le.marginInlineEnd,
  mb: le.marginBottom,
  ml: le.marginLeft,
  ms: le.marginInlineStart,
  marginStart: le.marginInlineStart,
  mx: le.marginX,
  my: le.marginY,
  p: le.padding,
  pt: le.paddingTop,
  py: le.paddingY,
  px: le.paddingX,
  pb: le.paddingBottom,
  pl: le.paddingLeft,
  ps: le.paddingInlineStart,
  paddingStart: le.paddingInlineStart,
  pr: le.paddingRight,
  pe: le.paddingInlineEnd,
  paddingEnd: le.paddingInlineEnd,
});
var Yw = {
    textDecorationColor: P.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: P.shadows("textShadow"),
  },
  Xw = {
    clipPath: !0,
    transform: P.propT("transform", Z.transform),
    transformOrigin: !0,
    translateX: P.spaceT("--chakra-translate-x"),
    translateY: P.spaceT("--chakra-translate-y"),
    skewX: P.degreeT("--chakra-skew-x"),
    skewY: P.degreeT("--chakra-skew-y"),
    scaleX: P.prop("--chakra-scale-x"),
    scaleY: P.prop("--chakra-scale-y"),
    scale: P.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: P.degreeT("--chakra-rotate"),
  },
  Qw = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: P.prop("transitionDuration", "transition.duration"),
    transitionProperty: P.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: P.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  qw = {
    fontFamily: P.prop("fontFamily", "fonts"),
    fontSize: P.prop("fontSize", "fontSizes", Z.px),
    fontWeight: P.prop("fontWeight", "fontWeights"),
    lineHeight: P.prop("lineHeight", "lineHeights"),
    letterSpacing: P.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  Jw = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: P.spaceT("scrollMargin"),
    scrollMarginTop: P.spaceT("scrollMarginTop"),
    scrollMarginBottom: P.spaceT("scrollMarginBottom"),
    scrollMarginLeft: P.spaceT("scrollMarginLeft"),
    scrollMarginRight: P.spaceT("scrollMarginRight"),
    scrollMarginX: P.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: P.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: P.spaceT("scrollPadding"),
    scrollPaddingTop: P.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: P.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: P.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: P.spaceT("scrollPaddingRight"),
    scrollPaddingX: P.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: P.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function Gg(e) {
  return sr(e) && e.reference ? e.reference : String(e);
}
var il = (e, ...t) => t.map(Gg).join(` ${e} `).replace(/calc/g, ""),
  S0 = (...e) => `calc(${il("+", ...e)})`,
  w0 = (...e) => `calc(${il("-", ...e)})`,
  Tc = (...e) => `calc(${il("*", ...e)})`,
  x0 = (...e) => `calc(${il("/", ...e)})`,
  k0 = (e) => {
    const t = Gg(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Tc(t, -1);
  },
  _o = Object.assign(
    (e) => ({
      add: (...t) => _o(S0(e, ...t)),
      subtract: (...t) => _o(w0(e, ...t)),
      multiply: (...t) => _o(Tc(e, ...t)),
      divide: (...t) => _o(x0(e, ...t)),
      negate: () => _o(k0(e)),
      toString: () => e.toString(),
    }),
    { add: S0, subtract: w0, multiply: Tc, divide: x0, negate: k0 }
  );
function ex(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function C0(e) {
  if (e == null) return e;
  const { unitless: t } = ex(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
function tx(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${C0(e)})`),
    t && n.push("and", `(max-width: ${C0(t)})`),
    n.join(" ")
  );
}
var Oe = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Sn = (e) => Kg((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  tn = (e) => Kg((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  Kg = (e, ...t) => t.map(e).join(", "),
  tf = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Sn(Oe.hover),
    _peerHover: tn(Oe.hover),
    _groupFocus: Sn(Oe.focus),
    _peerFocus: tn(Oe.focus),
    _groupFocusVisible: Sn(Oe.focusVisible),
    _peerFocusVisible: tn(Oe.focusVisible),
    _groupActive: Sn(Oe.active),
    _peerActive: tn(Oe.active),
    _groupDisabled: Sn(Oe.disabled),
    _peerDisabled: tn(Oe.disabled),
    _groupInvalid: Sn(Oe.invalid),
    _peerInvalid: tn(Oe.invalid),
    _groupChecked: Sn(Oe.checked),
    _peerChecked: tn(Oe.checked),
    _groupFocusWithin: Sn(Oe.focusWithin),
    _peerFocusWithin: tn(Oe.focusWithin),
    _peerPlaceholderShown: tn(Oe.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  nx = Object.keys(tf);
function rx(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var nf = sn(
    {},
    Ia,
    Y,
    Nw,
    ms,
    St,
    Dw,
    Kw,
    $w,
    Zg,
    Gw,
    Ko,
    Ec,
    le,
    Jw,
    qw,
    Yw,
    Xw,
    Bw,
    Qw
  ),
  ox = Object.assign({}, le, St, ms, Zg, Ko),
  ix = Object.keys(ox),
  ax = [...Object.keys(nf), ...nx],
  sx = { ...nf, ...tf },
  lx = (e) => e in sx,
  ux = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = rr(e[a], t);
      if (s == null) continue;
      if (((s = sr(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function cx(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function dx(e) {
  return /^var\(--.+\)$/.test(e);
}
var fx = (e, t) => e.startsWith("--") && typeof t == "string" && !dx(t),
  px = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = cx(t);
    return (t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t)), t;
  };
function hx(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = rr(i, r),
        d = ux(c)(r);
      let f = {};
      for (let h in d) {
        const S = d[h];
        let v = rr(S, r);
        h in n && (h = n[h]), fx(h, v) && (v = px(r, v));
        let k = t[h];
        if ((k === !0 && (k = { property: h }), sr(v))) {
          (f[h] = (s = f[h]) != null ? s : {}), (f[h] = sn({}, f[h], o(v, !0)));
          continue;
        }
        let g =
          (u =
            (l = k == null ? void 0 : k.transform) == null
              ? void 0
              : l.call(k, v, r, c)) != null
            ? u
            : v;
        g = k != null && k.processResult ? o(g, !0) : g;
        const p = rr(k == null ? void 0 : k.property, r);
        if (!a && k != null && k.static) {
          const m = rr(k.static, r);
          f = sn({}, f, m);
        }
        if (p && Array.isArray(p)) {
          for (const m of p) f[m] = g;
          continue;
        }
        if (p) {
          p === "&" && sr(g) ? (f = sn({}, f, g)) : (f[p] = g);
          continue;
        }
        if (sr(g)) {
          f = sn({}, f, g);
          continue;
        }
        f[h] = g;
      }
      return f;
    };
  return o;
}
var mx = (e) => (t) => hx({ theme: t, pseudos: tf, configs: nf })(e);
function gx(e, t) {
  if (Array.isArray(e)) return e;
  if (sr(e)) return t(e);
  if (e != null) return [e];
}
function vx(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function yx(e) {
  const t = e.__breakpoints;
  return function (r, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = gx(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      h = !!r.parts;
    for (let S = 0; S < d; S++) {
      const v = t.details[S],
        k = t.details[vx(c, S)],
        g = tx(v.minW, k == null ? void 0 : k._minW),
        p = rr((s = r[o]) == null ? void 0 : s[c[S]], a);
      if (p) {
        if (h) {
          (l = r.parts) == null ||
            l.forEach((m) => {
              sn(u, { [m]: f ? p[m] : { [g]: p[m] } });
            });
          continue;
        }
        if (!h) {
          f ? sn(u, p) : (u[g] = p);
          continue;
        }
        u[g] = p;
      }
    }
    return u;
  };
}
function Sx(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      a = yx(i);
    return sn(
      {},
      rr((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Oi(e) {
  return rx(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function wx() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var xx = wx();
function kx(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function Cx(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var Px = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  Ex = Px(Cx);
function Yg(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var Xg = (e) => Yg(e, (t) => t != null);
function Tx(e) {
  return typeof e == "function";
}
function bx(e, ...t) {
  return Tx(e) ? e(...t) : e;
}
function Ax(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var Mx = typeof Element < "u",
  _x = typeof Map == "function",
  Rx = typeof Set == "function",
  Ox = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ja(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ja(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (_x && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!ja(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (Rx && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (Ox && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (Mx && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !ja(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Lx = function (t, n) {
  try {
    return ja(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Fx = Qc(Lx);
function Qg(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: a } = Sw(),
    s = e ? Ex(i, `components.${e}`) : void 0,
    l = r || s,
    u = sn(
      { theme: i, colorMode: a },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      Xg(kx(o, ["children"]))
    ),
    c = w.useRef({});
  if (l) {
    const f = Sx(l)(u);
    Fx(c.current, f) || (c.current = f);
  }
  return c.current;
}
function rf(e, t = {}) {
  return Qg(e, t);
}
function of(e, t = {}) {
  return Qg(e, t);
}
var Vx = new Set([
    ...ax,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  Ix = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function jx(e) {
  return Ix.has(e) || !Vx.has(e);
}
function Nx(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
var Dx =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  $x = Rg(function (e) {
    return (
      Dx.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  Bx = $x,
  zx = function (t) {
    return t !== "theme";
  },
  P0 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Bx : zx;
  },
  E0 = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  Hx = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      jg(n, r, o),
      sw(function () {
        return JS(n, r, o);
      }),
      null
    );
  },
  Wx = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = E0(t, n, r),
      l = s || P0(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var S = lw(function (v, k, g) {
        var p = (u && v.as) || o,
          m = "",
          E = [],
          T = v;
        if (v.theme == null) {
          T = {};
          for (var R in v) T[R] = v[R];
          T.theme = w.useContext(Bg);
        }
        typeof v.className == "string"
          ? (m = qS(k.registered, E, v.className))
          : v.className != null && (m = v.className + " ");
        var A = Dg(d.concat(E), k.registered, T);
        (m += k.key + "-" + A.name), a !== void 0 && (m += " " + a);
        var _ = u && s === void 0 ? P0(p) : l,
          L = {};
        for (var j in v) (u && j === "as") || (_(j) && (L[j] = v[j]));
        return (
          (L.className = m),
          (L.ref = g),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(Hx, {
              cache: k,
              serialized: A,
              isStringTag: typeof p == "string",
            }),
            w.createElement(p, L)
          )
        );
      });
      return (
        (S.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (S.defaultProps = t.defaultProps),
        (S.__emotion_real = S),
        (S.__emotion_base = o),
        (S.__emotion_styles = d),
        (S.__emotion_forwardProp = s),
        Object.defineProperty(S, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (S.withComponent = function (v, k) {
          return e(v, uo({}, n, k, { shouldForwardProp: E0(S, k, !0) })).apply(
            void 0,
            d
          );
        }),
        S
      );
    };
  },
  Ux = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  gs = Wx.bind();
Ux.forEach(function (e) {
  gs[e] = gs(e);
});
var T0,
  Zx = (T0 = gs.default) != null ? T0 : gs,
  Gx =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...a } = t,
        s = Yg(a, (d, f) => lx(f)),
        l = bx(e, t),
        u = Nx({}, o, l, Xg(s), i),
        c = mx(u)(t.theme);
      return r ? [c, r] : c;
    };
function ou(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = jx);
  const o = Gx({ baseStyle: n }),
    i = Zx(e, r)(o);
  return x.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = Wg();
    return x.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function Kx() {
  const e = new Map();
  return new Proxy(ou, {
    apply(t, n, r) {
      return ou(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, ou(n)), e.get(n);
    },
  });
}
var _e = Kx();
function bt(e) {
  return w.forwardRef(e);
}
const qg = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  al = w.createContext({}),
  sl = w.createContext(null),
  ll = typeof document < "u",
  af = ll ? w.useLayoutEffect : w.useEffect,
  Jg = w.createContext({ strict: !1 }),
  sf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  Yx = "framerAppearId",
  ev = "data-" + sf(Yx);
function Xx(e, t, n, r) {
  const { visualElement: o } = w.useContext(al),
    i = w.useContext(Jg),
    a = w.useContext(sl),
    s = w.useContext(qg).reducedMotion,
    l = w.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  w.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = w.useRef(!!(n[ev] && !window.HandoffComplete));
  return (
    af(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function $r(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Qx(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : $r(n) && (n.current = r));
    },
    [t]
  );
}
function Si(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ul(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const lf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  uf = ["initial", ...lf];
function cl(e) {
  return ul(e.animate) || uf.some((t) => Si(e[t]));
}
function tv(e) {
  return !!(cl(e) || e.variants);
}
function qx(e, t) {
  if (cl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Si(n) ? n : void 0,
      animate: Si(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Jx(e) {
  const { initial: t, animate: n } = qx(e, w.useContext(al));
  return w.useMemo(() => ({ initial: t, animate: n }), [b0(t), b0(n)]);
}
function b0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const A0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  wi = {};
for (const e in A0) wi[e] = { isEnabled: (t) => A0[e].some((n) => !!t[n]) };
function e3(e) {
  for (const t in e) wi[t] = { ...wi[t], ...e[t] };
}
const cf = w.createContext({}),
  nv = w.createContext({}),
  t3 = Symbol.for("motionComponentSymbol");
function n3({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && e3(e);
  function i(s, l) {
    let u;
    const c = { ...w.useContext(qg), ...s, layoutId: r3(s) },
      { isStatic: d } = c,
      f = Jx(s),
      h = r(s, d);
    if (!d && ll) {
      f.visualElement = Xx(o, h, c, t);
      const S = w.useContext(nv),
        v = w.useContext(Jg).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, v, e, S));
    }
    return w.createElement(
      al.Provider,
      { value: f },
      u && f.visualElement
        ? w.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, s, Qx(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const a = w.forwardRef(i);
  return (a[t3] = o), a;
}
function r3({ layoutId: e }) {
  const t = w.useContext(cf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function o3(e) {
  function t(r, o = {}) {
    return n3(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const i3 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function df(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(i3.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const vs = {};
function a3(e) {
  Object.assign(vs, e);
}
const Li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Sr = new Set(Li);
function rv(e, { layout: t, layoutId: n }) {
  return (
    Sr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!vs[e] || e === "opacity"))
  );
}
const rt = (e) => !!(e && e.getVelocity),
  s3 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  l3 = Li.length;
function u3(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let a = 0; a < l3; a++) {
    const s = Li[a];
    if (e[s] !== void 0) {
      const l = s3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const ov = (e) => (t) => typeof t == "string" && t.startsWith(e),
  iv = ov("--"),
  bc = ov("var(--"),
  c3 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  d3 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Dn = (e, t, n) => Math.min(Math.max(n, e), t),
  wr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Yo = { ...wr, transform: (e) => Dn(0, 1, e) },
  pa = { ...wr, default: 1 },
  Xo = (e) => Math.round(e * 1e5) / 1e5,
  dl = /(-)?([\d]*\.?[\d])+/g,
  av =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  f3 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Fi(e) {
  return typeof e == "string";
}
const Vi = (e) => ({
    test: (t) => Fi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wn = Vi("deg"),
  Qt = Vi("%"),
  $ = Vi("px"),
  p3 = Vi("vh"),
  h3 = Vi("vw"),
  M0 = {
    ...Qt,
    parse: (e) => Qt.parse(e) / 100,
    transform: (e) => Qt.transform(e * 100),
  },
  _0 = { ...wr, transform: Math.round },
  sv = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    size: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    rotate: wn,
    rotateX: wn,
    rotateY: wn,
    rotateZ: wn,
    scale: pa,
    scaleX: pa,
    scaleY: pa,
    scaleZ: pa,
    skew: wn,
    skewX: wn,
    skewY: wn,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: Yo,
    originX: M0,
    originY: M0,
    originZ: $,
    zIndex: _0,
    fillOpacity: Yo,
    strokeOpacity: Yo,
    numOctaves: _0,
  };
function ff(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (iv(d)) {
      i[d] = f;
      continue;
    }
    const h = sv[d],
      S = d3(f, h);
    if (Sr.has(d)) {
      if (((l = !0), (a[d] = S), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = S)) : (o[d] = S);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = u3(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = s;
    o.transformOrigin = `${d} ${f} ${h}`;
  }
}
const pf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function lv(e, t, n) {
  for (const r in t) !rt(t[r]) && !rv(r, n) && (e[r] = t[r]);
}
function m3({ transformTemplate: e }, t, n) {
  return w.useMemo(() => {
    const r = pf();
    return (
      ff(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function g3(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    lv(o, r, e),
    Object.assign(o, m3(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function v3(e, t, n) {
  const r = {},
    o = g3(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const y3 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function ys(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    y3.has(e)
  );
}
let uv = (e) => !ys(e);
function S3(e) {
  e && (uv = (t) => (t.startsWith("on") ? !ys(t) : e(t)));
}
try {
  S3(require("@emotion/is-prop-valid").default);
} catch {}
function w3(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((uv(o) ||
        (n === !0 && ys(o)) ||
        (!t && !ys(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function R0(e, t, n) {
  return typeof e == "string" ? e : $.transform(t + n * e);
}
function x3(e, t, n) {
  const r = R0(t, e.x, e.width),
    o = R0(n, e.y, e.height);
  return `${r} ${o}`;
}
const k3 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  C3 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function P3(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? k3 : C3;
  e[i.offset] = $.transform(-r);
  const a = $.transform(t),
    s = $.transform(n);
  e[i.array] = `${a} ${s}`;
}
function hf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((ff(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: S, dimensions: v } = e;
  h.transform && (v && (S.transform = h.transform), delete h.transform),
    v &&
      (o !== void 0 || i !== void 0 || S.transform) &&
      (S.transformOrigin = x3(
        v,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    a !== void 0 && P3(h, a, s, l, !1);
}
const cv = () => ({ ...pf(), attrs: {} }),
  mf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function E3(e, t, n, r) {
  const o = w.useMemo(() => {
    const i = cv();
    return (
      hf(i, t, { enableHardwareAcceleration: !1 }, mf(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    lv(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function T3(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (df(n) ? E3 : v3)(r, i, a, n),
      c = { ...w3(r, typeof n == "string", e), ...l, ref: o },
      { children: d } = r,
      f = w.useMemo(() => (rt(d) ? d.get() : d), [d]);
    return w.createElement(n, { ...c, children: f });
  };
}
function dv(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const fv = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function pv(e, t, n, r) {
  dv(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(fv.has(o) ? o : sf(o), t.attrs[o]);
}
function gf(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (rt(n[o]) || (t.style && rt(t.style[o])) || rv(o, e)) && (r[o] = n[o]);
  return r;
}
function hv(e, t) {
  const n = gf(e, t);
  for (const r in e)
    if (rt(e[r]) || rt(t[r])) {
      const o =
        Li.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function vf(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function mv(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ss = (e) => Array.isArray(e),
  b3 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  A3 = (e) => (Ss(e) ? e[e.length - 1] || 0 : e);
function Na(e) {
  const t = rt(e) ? e.get() : e;
  return b3(t) ? t.toValue() : t;
}
function M3(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const a = { latestValues: _3(r, o, i, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const gv = (e) => (t, n) => {
  const r = w.useContext(al),
    o = w.useContext(sl),
    i = () => M3(e, t, r, o);
  return n ? i() : mv(i);
};
function _3(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Na(i[f]);
  let { initial: a, animate: s } = e;
  const l = cl(e),
    u = tv(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !ul(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const S = vf(e, h);
        if (!S) return;
        const { transitionEnd: v, transition: k, ...g } = S;
        for (const p in g) {
          let m = g[p];
          if (Array.isArray(m)) {
            const E = c ? m.length - 1 : 0;
            m = m[E];
          }
          m !== null && (o[p] = m);
        }
        for (const p in v) o[p] = v[p];
      }),
    o
  );
}
const xe = (e) => e;
class O0 {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function R3(e) {
  let t = new O0(),
    n = new O0(),
    r = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return u && a.add(l), f.add(l) && d && o && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const ha = ["prepare", "read", "update", "preRender", "render", "postRender"],
  O3 = 40;
function L3(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = ha.reduce((d, f) => ((d[f] = R3(() => (n = !0))), d), {}),
    a = (d) => i[d].process(o),
    s = () => {
      const d = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, O3), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        ha.forEach(a),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(s);
    };
  return {
    schedule: ha.reduce((d, f) => {
      const h = i[f];
      return (d[f] = (S, v = !1, k = !1) => (n || l(), h.schedule(S, v, k))), d;
    }, {}),
    cancel: (d) => ha.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const {
    schedule: ie,
    cancel: gn,
    state: ze,
    steps: iu,
  } = L3(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xe, !0),
  F3 = {
    useVisualState: gv({
      scrapeMotionValuesFromProps: hv,
      createRenderState: cv,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ie.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ie.render(() => {
            hf(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              mf(t.tagName),
              e.transformTemplate
            ),
              pv(t, n);
          });
      },
    }),
  },
  V3 = {
    useVisualState: gv({
      scrapeMotionValuesFromProps: gf,
      createRenderState: pf,
    }),
  };
function I3(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(df(e) ? F3 : V3),
    preloadedFeatures: n,
    useRender: T3(t),
    createVisualElement: r,
    Component: e,
  };
}
function ln(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const vv = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function fl(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const j3 = (e) => (t) => vv(t) && e(t, fl(t));
function cn(e, t, n, r) {
  return ln(e, t, j3(n), r);
}
const N3 = (e, t) => (n) => t(e(n)),
  In = (...e) => e.reduce(N3);
function yv(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const L0 = yv("dragHorizontal"),
  F0 = yv("dragVertical");
function Sv(e) {
  let t = !1;
  if (e === "y") t = F0();
  else if (e === "x") t = L0();
  else {
    const n = L0(),
      r = F0();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function wv() {
  const e = Sv(!0);
  return e ? (e(), !1) : !0;
}
class Wn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function V0(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, a) => {
      if (i.pointerType === "touch" || wv()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && ie.update(() => s[r](i, a));
    };
  return cn(e.current, n, o, { passive: !e.getProps()[r] });
}
class D3 extends Wn {
  mount() {
    this.unmount = In(V0(this.node, !0), V0(this.node, !1));
  }
  unmount() {}
}
class $3 extends Wn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = In(
      ln(this.node.current, "focus", () => this.onFocus()),
      ln(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const xv = (e, t) => (t ? (e === t ? !0 : xv(e, t.parentElement)) : !1);
function au(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, fl(n));
}
class B3 extends Wn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = xe),
      (this.removeEndListeners = xe),
      (this.removeAccessibleListeners = xe),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = cn(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ie.update(() => {
                xv(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = cn(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = In(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                au("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ie.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ln(this.node.current, "keyup", a)),
              au("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = ln(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && au("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = ln(this.node.current, "blur", r);
        this.removeAccessibleListeners = In(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ie.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !wv()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ie.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = cn(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = ln(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = In(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ac = new WeakMap(),
  su = new WeakMap(),
  z3 = (e) => {
    const t = Ac.get(e.target);
    t && t(e);
  },
  H3 = (e) => {
    e.forEach(z3);
  };
function W3({ root: e, ...t }) {
  const n = e || document;
  su.has(n) || su.set(n, {});
  const r = su.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(H3, { root: e, ...t })), r[o];
}
function U3(e, t, n) {
  const r = W3(t);
  return (
    Ac.set(e, n),
    r.observe(e),
    () => {
      Ac.delete(e), r.unobserve(e);
    }
  );
}
const Z3 = { some: 0, all: 1 };
class G3 extends Wn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : Z3[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return U3(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(K3(t, n)) && this.startObserver();
  }
  unmount() {}
}
function K3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Y3 = {
  inView: { Feature: G3 },
  tap: { Feature: B3 },
  focus: { Feature: $3 },
  hover: { Feature: D3 },
};
function kv(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function X3(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Q3(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function pl(e, t, n) {
  const r = e.getProps();
  return vf(r, t, n !== void 0 ? n : r.custom, X3(e), Q3(e));
}
let yf = xe;
const lr = (e) => e * 1e3,
  dn = (e) => e / 1e3,
  q3 = { current: !1 },
  Cv = (e) => Array.isArray(e) && typeof e[0] == "number";
function Pv(e) {
  return !!(
    !e ||
    (typeof e == "string" && Ev[e]) ||
    Cv(e) ||
    (Array.isArray(e) && e.every(Pv))
  );
}
const jo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ev = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: jo([0, 0.65, 0.55, 1]),
    circOut: jo([0.55, 0, 1, 0.45]),
    backIn: jo([0.31, 0.01, 0.66, -0.59]),
    backOut: jo([0.33, 1.53, 0.69, 0.99]),
  };
function Tv(e) {
  if (e) return Cv(e) ? jo(e) : Array.isArray(e) ? e.map(Tv) : Ev[e];
}
function J3(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Tv(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function ek(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const bv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  tk = 1e-7,
  nk = 12;
function rk(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = bv(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > tk && ++s < nk);
  return a;
}
function Ii(e, t, n, r) {
  if (e === t && n === r) return xe;
  const o = (i) => rk(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : bv(o(i), t, r));
}
const ok = Ii(0.42, 0, 1, 1),
  ik = Ii(0, 0, 0.58, 1),
  Av = Ii(0.42, 0, 0.58, 1),
  ak = (e) => Array.isArray(e) && typeof e[0] != "number",
  Mv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  _v = (e) => (t) => 1 - e(1 - t),
  Sf = (e) => 1 - Math.sin(Math.acos(e)),
  Rv = _v(Sf),
  sk = Mv(Sf),
  Ov = Ii(0.33, 1.53, 0.69, 0.99),
  wf = _v(Ov),
  lk = Mv(wf),
  uk = (e) =>
    (e *= 2) < 1 ? 0.5 * wf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ck = {
    linear: xe,
    easeIn: ok,
    easeInOut: Av,
    easeOut: ik,
    circIn: Sf,
    circInOut: sk,
    circOut: Rv,
    backIn: wf,
    backInOut: lk,
    backOut: Ov,
    anticipate: uk,
  },
  I0 = (e) => {
    if (Array.isArray(e)) {
      yf(e.length === 4);
      const [t, n, r, o] = e;
      return Ii(t, n, r, o);
    } else if (typeof e == "string") return ck[e];
    return e;
  },
  xf = (e, t) => (n) =>
    !!(
      (Fi(n) && f3.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Lv = (e, t, n) => (r) => {
    if (!Fi(r)) return r;
    const [o, i, a, s] = r.match(dl);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  dk = (e) => Dn(0, 255, e),
  lu = { ...wr, transform: (e) => Math.round(dk(e)) },
  or = {
    test: xf("rgb", "red"),
    parse: Lv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      lu.transform(e) +
      ", " +
      lu.transform(t) +
      ", " +
      lu.transform(n) +
      ", " +
      Xo(Yo.transform(r)) +
      ")",
  };
function fk(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Mc = { test: xf("#"), parse: fk, transform: or.transform },
  Br = {
    test: xf("hsl", "hue"),
    parse: Lv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Qt.transform(Xo(t)) +
      ", " +
      Qt.transform(Xo(n)) +
      ", " +
      Xo(Yo.transform(r)) +
      ")",
  },
  Ze = {
    test: (e) => or.test(e) || Mc.test(e) || Br.test(e),
    parse: (e) =>
      or.test(e) ? or.parse(e) : Br.test(e) ? Br.parse(e) : Mc.parse(e),
    transform: (e) =>
      Fi(e) ? e : e.hasOwnProperty("red") ? or.transform(e) : Br.transform(e),
  },
  me = (e, t, n) => -n * e + n * t + e;
function uu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function pk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = uu(l, s, e + 1 / 3)), (i = uu(l, s, e)), (a = uu(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const cu = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  hk = [Mc, or, Br],
  mk = (e) => hk.find((t) => t.test(e));
function j0(e) {
  const t = mk(e);
  let n = t.parse(e);
  return t === Br && (n = pk(n)), n;
}
const Fv = (e, t) => {
  const n = j0(e),
    r = j0(t),
    o = { ...n };
  return (i) => (
    (o.red = cu(n.red, r.red, i)),
    (o.green = cu(n.green, r.green, i)),
    (o.blue = cu(n.blue, r.blue, i)),
    (o.alpha = me(n.alpha, r.alpha, i)),
    or.transform(o)
  );
};
function gk(e) {
  var t, n;
  return (
    isNaN(e) &&
    Fi(e) &&
    (((t = e.match(dl)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(av)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Vv = { regex: c3, countKey: "Vars", token: "${v}", parse: xe },
  Iv = { regex: av, countKey: "Colors", token: "${c}", parse: Ze.parse },
  jv = { regex: dl, countKey: "Numbers", token: "${n}", parse: wr.parse };
function du(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function ws(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && du(n, Vv), du(n, Iv), du(n, jv), n;
}
function Nv(e) {
  return ws(e).values;
}
function Dv(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = ws(e),
    i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (s = s.replace(Vv.token, a[l]))
        : l < r + n
        ? (s = s.replace(Iv.token, Ze.transform(a[l])))
        : (s = s.replace(jv.token, Xo(a[l])));
    return s;
  };
}
const vk = (e) => (typeof e == "number" ? 0 : e);
function yk(e) {
  const t = Nv(e);
  return Dv(e)(t.map(vk));
}
const $n = {
    test: gk,
    parse: Nv,
    createTransformer: Dv,
    getAnimatableNone: yk,
  },
  $v = (e, t) => (n) => `${n > 0 ? t : e}`;
function Bv(e, t) {
  return typeof e == "number"
    ? (n) => me(e, t, n)
    : Ze.test(e)
    ? Fv(e, t)
    : e.startsWith("var(")
    ? $v(e, t)
    : Hv(e, t);
}
const zv = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, a) => Bv(i, t[a]));
    return (i) => {
      for (let a = 0; a < r; a++) n[a] = o[a](i);
      return n;
    };
  },
  Sk = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = Bv(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  Hv = (e, t) => {
    const n = $n.createTransformer(t),
      r = ws(e),
      o = ws(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? In(zv(r.values, o.values), n)
      : $v(e, t);
  },
  xi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  N0 = (e, t) => (n) => me(e, t, n);
function wk(e) {
  return typeof e == "number"
    ? N0
    : typeof e == "string"
    ? Ze.test(e)
      ? Fv
      : Hv
    : Array.isArray(e)
    ? zv
    : typeof e == "object"
    ? Sk
    : N0;
}
function xk(e, t, n) {
  const r = [],
    o = n || wk(e[0]),
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || xe : t;
      s = In(l, s);
    }
    r.push(s);
  }
  return r;
}
function Wv(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((yf(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = xk(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = xi(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(Dn(e[0], e[i - 1], u)) : l;
}
function kk(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = xi(0, t, r);
    e.push(me(n, 1, o));
  }
}
function Ck(e) {
  const t = [0];
  return kk(t, e.length - 1), t;
}
function Pk(e, t) {
  return e.map((n) => n * t);
}
function Ek(e, t) {
  return e.map(() => t || Av).splice(0, e.length - 1);
}
function xs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = ak(r) ? r.map(I0) : I0(r),
    i = { done: !1, value: t[0] },
    a = Pk(n && n.length === t.length ? n : Ck(t), e),
    s = Wv(a, t, { ease: Array.isArray(o) ? o : Ek(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function Uv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Tk = 5;
function Zv(e, t, n) {
  const r = Math.max(t - Tk, 0);
  return Uv(n - e(r), t - r);
}
const fu = 0.001,
  bk = 0.01,
  Ak = 10,
  Mk = 0.05,
  _k = 1;
function Rk({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    a = 1 - t;
  (a = Dn(Mk, _k, a)),
    (e = Dn(bk, Ak, dn(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            h = _c(u, a),
            S = Math.exp(-d);
          return fu - (f / h) * S;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * n + n,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            S = Math.exp(-d),
            v = _c(Math.pow(u, 2), a);
          return ((-o(u) + fu > 0 ? -1 : 1) * ((f - h) * S)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -fu + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = Lk(o, i, s);
  if (((e = lr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Ok = 12;
function Lk(e, t, n) {
  let r = n;
  for (let o = 1; o < Ok; o++) r = r - e(r) / t(r);
  return r;
}
function _c(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Fk = ["duration", "bounce"],
  Vk = ["stiffness", "damping", "mass"];
function D0(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Ik(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!D0(e, Vk) && D0(e, Fk)) {
    const n = Rk(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Gv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = Ik({ ...r, velocity: -dn(r.velocity || 0) }),
    h = d || 0,
    S = l / (2 * Math.sqrt(s * u)),
    v = i - o,
    k = dn(Math.sqrt(s / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let p;
  if (S < 1) {
    const m = _c(k, S);
    p = (E) => {
      const T = Math.exp(-S * k * E);
      return (
        i - T * (((h + S * k * v) / m) * Math.sin(m * E) + v * Math.cos(m * E))
      );
    };
  } else if (S === 1) p = (m) => i - Math.exp(-k * m) * (v + (h + k * v) * m);
  else {
    const m = k * Math.sqrt(S * S - 1);
    p = (E) => {
      const T = Math.exp(-S * k * E),
        R = Math.min(m * E, 300);
      return (
        i - (T * ((h + S * k * v) * Math.sinh(R) + m * v * Math.cosh(R))) / m
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (m) => {
      const E = p(m);
      if (f) a.done = m >= c;
      else {
        let T = h;
        m !== 0 && (S < 1 ? (T = Zv(p, m, E)) : (T = 0));
        const R = Math.abs(T) <= n,
          A = Math.abs(i - E) <= t;
        a.done = R && A;
      }
      return (a.value = a.done ? i : E), a;
    },
  };
}
function $0({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (_) => (s !== void 0 && _ < s) || (l !== void 0 && _ > l),
    S = (_) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - _) < Math.abs(l - _)
        ? s
        : l;
  let v = n * t;
  const k = d + v,
    g = a === void 0 ? k : a(k);
  g !== k && (v = g - d);
  const p = (_) => -v * Math.exp(-_ / r),
    m = (_) => g + p(_),
    E = (_) => {
      const L = p(_),
        j = m(_);
      (f.done = Math.abs(L) <= u), (f.value = f.done ? g : j);
    };
  let T, R;
  const A = (_) => {
    h(f.value) &&
      ((T = _),
      (R = Gv({
        keyframes: [f.value, S(f.value)],
        velocity: Zv(m, _, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    A(0),
    {
      calculatedDuration: null,
      next: (_) => {
        let L = !1;
        return (
          !R && T === void 0 && ((L = !0), E(_), A(_)),
          T !== void 0 && _ > T ? R.next(_ - T) : (!L && E(_), f)
        );
      },
    }
  );
}
const jk = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ie.update(t, !0),
      stop: () => gn(t),
      now: () => (ze.isProcessing ? ze.timestamp : performance.now()),
    };
  },
  B0 = 2e4;
function z0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < B0; ) (t += n), (r = e.next(t));
  return t >= B0 ? 1 / 0 : t;
}
const Nk = { decay: $0, inertia: $0, tween: xs, keyframes: xs, spring: Gv };
function ks({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = jk,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    S = !1,
    v,
    k;
  const g = () => {
    k = new Promise((D) => {
      v = D;
    });
  };
  g();
  let p;
  const m = Nk[o] || xs;
  let E;
  m !== xs &&
    typeof r[0] != "number" &&
    ((E = Wv([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const T = m({ ...f, keyframes: r });
  let R;
  s === "mirror" &&
    (R = m({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let A = "idle",
    _ = null,
    L = null,
    j = null;
  T.calculatedDuration === null && i && (T.calculatedDuration = z0(T));
  const { calculatedDuration: q } = T;
  let pe = 1 / 0,
    z = 1 / 0;
  q !== null && ((pe = q + a), (z = pe * (i + 1) - a));
  let re = 0;
  const mt = (D) => {
      if (L === null) return;
      h > 0 && (L = Math.min(L, D)),
        h < 0 && (L = Math.min(D - z / h, L)),
        _ !== null ? (re = _) : (re = Math.round(D - L) * h);
      const te = re - t * (h >= 0 ? 1 : -1),
        W = h >= 0 ? te < 0 : te > z;
      (re = Math.max(te, 0)), A === "finished" && _ === null && (re = z);
      let Ne = re,
        Nt = T;
      if (i) {
        const Dt = Math.min(re, z) / pe;
        let At = Math.floor(Dt),
          $t = Dt % 1;
        !$t && Dt >= 1 && ($t = 1),
          $t === 1 && At--,
          (At = Math.min(At, i + 1)),
          !!(At % 2) &&
            (s === "reverse"
              ? (($t = 1 - $t), a && ($t -= a / pe))
              : s === "mirror" && (Nt = R)),
          (Ne = Dn(0, 1, $t) * pe);
      }
      const Se = W ? { done: !1, value: r[0] } : Nt.next(Ne);
      E && (Se.value = E(Se.value));
      let { done: be } = Se;
      !W && q !== null && (be = h >= 0 ? re >= z : re <= 0);
      const ot = _ === null && (A === "finished" || (A === "running" && be));
      return d && d(Se.value), ot && F(), Se;
    },
    ae = () => {
      p && p.stop(), (p = void 0);
    },
    je = () => {
      (A = "idle"), ae(), v(), g(), (L = j = null);
    },
    F = () => {
      (A = "finished"), c && c(), ae(), v();
    },
    N = () => {
      if (S) return;
      p || (p = n(mt));
      const D = p.now();
      l && l(),
        _ !== null ? (L = D - _) : (!L || A === "finished") && (L = D),
        A === "finished" && g(),
        (j = L),
        (_ = null),
        (A = "running"),
        p.start();
    };
  e && N();
  const B = {
    then(D, te) {
      return k.then(D, te);
    },
    get time() {
      return dn(re);
    },
    set time(D) {
      (D = lr(D)),
        (re = D),
        _ !== null || !p || h === 0 ? (_ = D) : (L = p.now() - D / h);
    },
    get duration() {
      const D = T.calculatedDuration === null ? z0(T) : T.calculatedDuration;
      return dn(D);
    },
    get speed() {
      return h;
    },
    set speed(D) {
      D === h || !p || ((h = D), (B.time = dn(re)));
    },
    get state() {
      return A;
    },
    play: N,
    pause: () => {
      (A = "paused"), (_ = re);
    },
    stop: () => {
      (S = !0), A !== "idle" && ((A = "idle"), u && u(), je());
    },
    cancel: () => {
      j !== null && mt(j), je();
    },
    complete: () => {
      A = "finished";
    },
    sample: (D) => ((L = 0), mt(D)),
  };
  return B;
}
function Dk(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $k = Dk(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Bk = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  ma = 10,
  zk = 2e4,
  Hk = (e, t) => t.type === "spring" || e === "backgroundColor" || !Pv(t.ease);
function Wk(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      $k() &&
      Bk.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l,
    u = !1;
  const c = () => {
    l = new Promise((m) => {
      s = m;
    });
  };
  c();
  let { keyframes: d, duration: f = 300, ease: h, times: S } = o;
  if (Hk(t, o)) {
    const m = ks({ ...o, repeat: 0, delay: 0 });
    let E = { done: !1, value: d[0] };
    const T = [];
    let R = 0;
    for (; !E.done && R < zk; ) (E = m.sample(R)), T.push(E.value), (R += ma);
    (S = void 0), (d = T), (f = R - ma), (h = "linear");
  }
  const v = J3(e.owner.current, t, d, { ...o, duration: f, ease: h, times: S }),
    k = () => {
      (u = !1), v.cancel();
    },
    g = () => {
      (u = !0), ie.update(k), s(), c();
    };
  return (
    (v.onfinish = () => {
      u || (e.set(ek(d, o)), r && r(), g());
    }),
    {
      then(m, E) {
        return l.then(m, E);
      },
      attachTimeline(m) {
        return (v.timeline = m), (v.onfinish = null), xe;
      },
      get time() {
        return dn(v.currentTime || 0);
      },
      set time(m) {
        v.currentTime = lr(m);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(m) {
        v.playbackRate = m;
      },
      get duration() {
        return dn(f);
      },
      play: () => {
        a || (v.play(), gn(k));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((a = !0), v.playState === "idle")) return;
        const { currentTime: m } = v;
        if (m) {
          const E = ks({ ...o, autoplay: !1 });
          e.setWithVelocity(E.sample(m - ma).value, E.sample(m).value, ma);
        }
        g();
      },
      complete: () => {
        u || v.finish();
      },
      cancel: g,
    }
  );
}
function Uk({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: xe,
      pause: xe,
      stop: xe,
      then: (i) => (i(), Promise.resolve()),
      cancel: xe,
      complete: xe,
    }
  );
  return t
    ? ks({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const Zk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Gk = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Kk = { type: "keyframes", duration: 0.8 },
  Yk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Xk = (e, { keyframes: t }) =>
    t.length > 2
      ? Kk
      : Sr.has(e)
      ? e.startsWith("scale")
        ? Gk(t[1])
        : Zk
      : Yk,
  Rc = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            ($n.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Qk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function qk(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(dl) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = Qk.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Jk = /([a-z-]*)\(.*?\)/g,
  Oc = {
    ...$n,
    getAnimatableNone: (e) => {
      const t = e.match(Jk);
      return t ? t.map(qk).join(" ") : e;
    },
  },
  eC = {
    ...sv,
    color: Ze,
    backgroundColor: Ze,
    outlineColor: Ze,
    fill: Ze,
    stroke: Ze,
    borderColor: Ze,
    borderTopColor: Ze,
    borderRightColor: Ze,
    borderBottomColor: Ze,
    borderLeftColor: Ze,
    filter: Oc,
    WebkitFilter: Oc,
  },
  kf = (e) => eC[e];
function Kv(e, t) {
  let n = kf(e);
  return (
    n !== Oc && (n = $n), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Yv = (e) => /^0[^.\s]+$/.test(e);
function tC(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Yv(e);
}
function nC(e, t, n, r) {
  const o = Rc(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      tC(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Kv(t, s);
    }
  return i;
}
function rC({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Cf(e, t) {
  return e[t] || e.default || e;
}
const oC = { skipAnimations: !1 },
  Pf =
    (e, t, n, r = {}) =>
    (o) => {
      const i = Cf(r, e) || {},
        a = i.delay || r.delay || 0;
      let { elapsed: s = 0 } = r;
      s = s - lr(a);
      const l = nC(t, e, n, i),
        u = l[0],
        c = l[l.length - 1],
        d = Rc(e, u),
        f = Rc(e, c);
      let h = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...i,
        delay: -s,
        onUpdate: (S) => {
          t.set(S), i.onUpdate && i.onUpdate(S);
        },
        onComplete: () => {
          o(), i.onComplete && i.onComplete();
        },
      };
      if (
        (rC(i) || (h = { ...h, ...Xk(e, h) }),
        h.duration && (h.duration = lr(h.duration)),
        h.repeatDelay && (h.repeatDelay = lr(h.repeatDelay)),
        !d || !f || q3.current || i.type === !1 || oC.skipAnimations)
      )
        return Uk(h);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const S = Wk(t, e, h);
        if (S) return S;
      }
      return ks(h);
    };
function Cs(e) {
  return !!(rt(e) && e.add);
}
const Xv = (e) => /^\-?\d*\.?\d+$/.test(e);
function Ef(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Tf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class bf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ef(this.subscriptions, t), () => Tf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const iC = (e) => !isNaN(parseFloat(e));
class aC {
  constructor(t, n = {}) {
    (this.version = "10.17.9"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: a } = ze;
        this.lastUpdated !== a &&
          ((this.timeDelta = i),
          (this.lastUpdated = a),
          ie.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ie.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = iC(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new bf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ie.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Uv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function co(e, t) {
  return new aC(e, t);
}
const Qv = (e) => (t) => t.test(e),
  sC = { test: (e) => e === "auto", parse: (e) => e },
  qv = [wr, $, Qt, wn, h3, p3, sC],
  Ro = (e) => qv.find(Qv(e)),
  lC = [...qv, Ze, $n],
  uC = (e) => lC.find(Qv(e));
function cC(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, co(n));
}
function dC(e, t) {
  const n = pl(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = A3(i[a]);
    cC(e, a, s);
  }
}
function fC(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (Xv(c) || Yv(c))
            ? (c = parseFloat(c))
            : !uC(c) && $n.test(u) && (c = Kv(l, u)),
          e.addValue(l, co(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function pC(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function hC(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = pC(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function mC({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function gC(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function Jv(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d),
      h = s[d];
    if (!f || h === void 0 || (c && mC(c, d))) continue;
    const S = { delay: n, elapsed: 0, ...Cf(i || {}, d) };
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[ev];
      if (g) {
        const p = window.HandoffAppearAnimations(g, d, f, ie);
        p !== null && ((S.elapsed = p), (S.isHandoff = !0));
      }
    }
    let v = !S.isHandoff && !gC(f, h);
    if (
      (S.type === "spring" && (f.getVelocity() || S.velocity) && (v = !1),
      f.animation && (v = !1),
      v)
    )
      continue;
    f.start(Pf(d, f, h, e.shouldReduceMotion && Sr.has(d) ? { type: !1 } : S));
    const k = f.animation;
    Cs(l) && (l.add(d), k.then(() => l.remove(d))), u.push(k);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && dC(e, a);
      }),
    u
  );
}
function Lc(e, t, n = {}) {
  const r = pl(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Jv(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return vC(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(n.delay)]);
}
function vC(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(yC)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            Lc(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function yC(e, t) {
  return e.sortNodePosition(t);
}
function SC(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Lc(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Lc(e, t, n);
  else {
    const o = typeof t == "function" ? pl(e, t, n.custom) : t;
    r = Promise.all(Jv(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const wC = [...lf].reverse(),
  xC = lf.length;
function kC(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => SC(e, n, r)));
}
function CC(e) {
  let t = kC(e);
  const n = EC();
  let r = !0;
  const o = (l, u) => {
    const c = pl(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let S = {},
      v = 1 / 0;
    for (let g = 0; g < xC; g++) {
      const p = wC[g],
        m = n[p],
        E = c[p] !== void 0 ? c[p] : d[p],
        T = Si(E),
        R = p === u ? m.isActive : null;
      R === !1 && (v = g);
      let A = E === d[p] && E !== c[p] && T;
      if (
        (A && r && e.manuallyAnimateOnMount && (A = !1),
        (m.protectedKeys = { ...S }),
        (!m.isActive && R === null) ||
          (!E && !m.prevProp) ||
          ul(E) ||
          typeof E == "boolean")
      )
        continue;
      let L =
          PC(m.prevProp, E) ||
          (p === u && m.isActive && !A && T) ||
          (g > v && T),
        j = !1;
      const q = Array.isArray(E) ? E : [E];
      let pe = q.reduce(o, {});
      R === !1 && (pe = {});
      const { prevResolvedValues: z = {} } = m,
        re = { ...z, ...pe },
        mt = (ae) => {
          (L = !0),
            h.has(ae) && ((j = !0), h.delete(ae)),
            (m.needsAnimating[ae] = !0);
        };
      for (const ae in re) {
        const je = pe[ae],
          F = z[ae];
        if (S.hasOwnProperty(ae)) continue;
        let N = !1;
        Ss(je) && Ss(F) ? (N = !kv(je, F)) : (N = je !== F),
          N
            ? je !== void 0
              ? mt(ae)
              : h.add(ae)
            : je !== void 0 && h.has(ae)
            ? mt(ae)
            : (m.protectedKeys[ae] = !0);
      }
      (m.prevProp = E),
        (m.prevResolvedValues = pe),
        m.isActive && (S = { ...S, ...pe }),
        r && e.blockInitialAnimation && (L = !1),
        L &&
          (!A || j) &&
          f.push(
            ...q.map((ae) => ({ animation: ae, options: { type: p, ...l } }))
          );
    }
    if (h.size) {
      const g = {};
      h.forEach((p) => {
        const m = e.getBaseTarget(p);
        m !== void 0 && (g[p] = m);
      }),
        f.push({ animation: g });
    }
    let k = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (k = !1),
      (r = !1),
      k ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var S;
        return (S = h.animationState) === null || S === void 0
          ? void 0
          : S.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = a(c, l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function PC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kv(t, e) : !1;
}
function Kn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function EC() {
  return {
    animate: Kn(!0),
    whileInView: Kn(),
    whileHover: Kn(),
    whileTap: Kn(),
    whileDrag: Kn(),
    whileFocus: Kn(),
    exit: Kn(),
  };
}
class TC extends Wn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = CC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ul(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let bC = 0;
class AC extends Wn {
  constructor() {
    super(...arguments), (this.id = bC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const MC = { animation: { Feature: TC }, exit: { Feature: AC } },
  H0 = (e, t) => Math.abs(e - t);
function _C(e, t) {
  const n = H0(e.x, t.x),
    r = H0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ey {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = hu(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          h = _C(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !h) return;
        const { point: S } = d,
          { timestamp: v } = ze;
        this.history.push({ ...S, timestamp: v });
        const { onStart: k, onMove: g } = this.handlers;
        f ||
          (k && k(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = pu(f, this.transformPagePoint)),
          ie.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: h, onSessionEnd: S, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = hu(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : pu(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(d, k), S && S(d, k);
      }),
      !vv(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const a = fl(t),
      s = pu(a, this.transformPagePoint),
      { point: l } = s,
      { timestamp: u } = ze;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, hu(s, this.history)),
      (this.removeListeners = In(
        cn(this.contextWindow, "pointermove", this.handlePointerMove),
        cn(this.contextWindow, "pointerup", this.handlePointerUp),
        cn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), gn(this.updatePoint);
  }
}
function pu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function W0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function hu({ point: e }, t) {
  return {
    point: e,
    delta: W0(e, ty(t)),
    offset: W0(e, RC(t)),
    velocity: OC(t, 0.1),
  };
}
function RC(e) {
  return e[0];
}
function ty(e) {
  return e[e.length - 1];
}
function OC(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = ty(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > lr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = dn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function dt(e) {
  return e.max - e.min;
}
function Fc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function U0(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = me(t.min, t.max, e.origin)),
    (e.scale = dt(n) / dt(t)),
    (Fc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = me(n.min, n.max, e.origin) - e.originPoint),
    (Fc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Qo(e, t, n, r) {
  U0(e.x, t.x, n.x, r ? r.originX : void 0),
    U0(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Z0(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + dt(t));
}
function LC(e, t, n) {
  Z0(e.x, t.x, n.x), Z0(e.y, t.y, n.y);
}
function G0(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + dt(t));
}
function qo(e, t, n) {
  G0(e.x, t.x, n.x), G0(e.y, t.y, n.y);
}
function FC(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? me(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? me(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function K0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function VC(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: K0(e.x, n, o), y: K0(e.y, t, r) };
}
function Y0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function IC(e, t) {
  return { x: Y0(e.x, t.x), y: Y0(e.y, t.y) };
}
function jC(e, t) {
  let n = 0.5;
  const r = dt(e),
    o = dt(t);
  return (
    o > r
      ? (n = xi(t.min, t.max - r, e.min))
      : r > o && (n = xi(e.min, e.max - o, t.min)),
    Dn(0, 1, n)
  );
}
function NC(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Vc = 0.35;
function DC(e = Vc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Vc),
    { x: X0(e, "left", "right"), y: X0(e, "top", "bottom") }
  );
}
function X0(e, t, n) {
  return { min: Q0(e, t), max: Q0(e, n) };
}
function Q0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const q0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  zr = () => ({ x: q0(), y: q0() }),
  J0 = () => ({ min: 0, max: 0 }),
  ke = () => ({ x: J0(), y: J0() });
function wt(e) {
  return [e("x"), e("y")];
}
function ny({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function $C({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function BC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function mu(e) {
  return e === void 0 || e === 1;
}
function Ic({ scale: e, scaleX: t, scaleY: n }) {
  return !mu(e) || !mu(t) || !mu(n);
}
function Qn(e) {
  return Ic(e) || ry(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function ry(e) {
  return eh(e.x) || eh(e.y);
}
function eh(e) {
  return e && e !== "0%";
}
function Ps(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function th(e, t, n, r, o) {
  return o !== void 0 && (e = Ps(e, o, r)), Ps(e, n, r) + t;
}
function jc(e, t = 0, n = 1, r, o) {
  (e.min = th(e.min, t, n, r, o)), (e.max = th(e.max, t, n, r, o));
}
function oy(e, { x: t, y: n }) {
  jc(e.x, t.translate, t.scale, t.originPoint),
    jc(e.y, n.translate, n.scale, n.originPoint);
}
function zC(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Hr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), oy(e, a)),
      r && Qn(i.latestValues) && Hr(e, i.latestValues));
  }
  (t.x = nh(t.x)), (t.y = nh(t.y));
}
function nh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Cn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function rh(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = me(e.min, e.max, i);
  jc(e, t[n], t[r], a, t.scale);
}
const HC = ["x", "scaleX", "originX"],
  WC = ["y", "scaleY", "originY"];
function Hr(e, t) {
  rh(e.x, t, HC), rh(e.y, t, WC);
}
function iy(e, t) {
  return ny(BC(e.getBoundingClientRect(), t));
}
function UC(e, t, n) {
  const r = iy(e, n),
    { scroll: o } = t;
  return o && (Cn(r.x, o.offset.x), Cn(r.y, o.offset.y)), r;
}
const ay = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ZC = new WeakMap();
class GC {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ke()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(fl(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: h, onDragStart: S } = this.getProps();
        if (
          f &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Sv(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          wt((k) => {
            let g = this.getAxisMotionValue(k).get() || 0;
            if (Qt.test(g)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const m = p.layout.layoutBox[k];
                m && (g = dt(m) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[k] = g;
          }),
          S && ie.update(() => S(c, d), !1, !0);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: h,
          onDirectionLock: S,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: k } = d;
        if (h && this.currentDirection === null) {
          (this.currentDirection = KC(k)),
            this.currentDirection !== null && S && S(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, k),
          this.updateAxis("y", d.point, k),
          this.visualElement.render(),
          v && v(c, d);
      },
      s = (c, d) => this.stop(c, d),
      l = () =>
        wt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ey(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: a,
        onSessionEnd: s,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: ay(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ie.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ga(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = FC(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && $r(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = VC(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = DC(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        wt((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = NC(o.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !$r(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = UC(r, o.root, this.visualElement.getTransformPagePoint());
    let a = IC(o.layout.layoutBox, i);
    if (n) {
      const s = n($C(a));
      (this.hasMutatedConstraints = !!s), s && (a = ny(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = wt((c) => {
        if (!ga(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          S = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, S);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Pf(t, r, 0, n));
  }
  stopAnimation() {
    wt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    wt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    wt((n) => {
      const { drag: r } = this.getProps();
      if (!ga(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - me(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!$r(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    wt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = jC({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      wt((a) => {
        if (!ga(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(me(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ZC.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = cn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        $r(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = ln(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (wt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Vc,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function ga(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function KC(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class YC extends Wn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = xe),
      (this.removeListeners = xe),
      (this.controls = new GC(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || xe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const oh = (e) => (t, n) => {
  e && ie.update(() => e(t, n));
};
class XC extends Wn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = xe);
  }
  onPointerDown(t) {
    this.session = new ey(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ay(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: oh(t),
      onStart: oh(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && ie.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = cn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function sy() {
  const e = w.useContext(sl);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = w.useId();
  return w.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const Da = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ih(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Oo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if ($.test(e)) e = parseFloat(e);
        else return e;
      const n = ih(e, t.target.x),
        r = ih(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  QC = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = $n.parse(e);
      if (o.length > 5) return r;
      const i = $n.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = me(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class qC extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    a3(JC),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Da.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              ie.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ly(e) {
  const [t, n] = sy(),
    r = w.useContext(cf);
  return x.createElement(qC, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(nv),
    isPresent: t,
    safeToRemove: n,
  });
}
const JC = {
    borderRadius: {
      ...Oo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Oo,
    borderTopRightRadius: Oo,
    borderBottomLeftRadius: Oo,
    borderBottomRightRadius: Oo,
    boxShadow: QC,
  },
  uy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  eP = uy.length,
  ah = (e) => (typeof e == "string" ? parseFloat(e) : e),
  sh = (e) => typeof e == "number" || $.test(e);
function tP(e, t, n, r, o, i) {
  o
    ? ((e.opacity = me(0, n.opacity !== void 0 ? n.opacity : 1, nP(r))),
      (e.opacityExit = me(t.opacity !== void 0 ? t.opacity : 1, 0, rP(r))))
    : i &&
      (e.opacity = me(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < eP; a++) {
    const s = `border${uy[a]}Radius`;
    let l = lh(t, s),
      u = lh(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || sh(l) === sh(u)
        ? ((e[s] = Math.max(me(ah(l), ah(u), r), 0)),
          (Qt.test(u) || Qt.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = me(t.rotate || 0, n.rotate || 0, r));
}
function lh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const nP = cy(0, 0.5, Rv),
  rP = cy(0.5, 0.95, xe);
function cy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(xi(e, t, r)));
}
function uh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function yt(e, t) {
  uh(e.x, t.x), uh(e.y, t.y);
}
function ch(e, t, n, r, o) {
  return (
    (e -= t), (e = Ps(e, 1 / n, r)), o !== void 0 && (e = Ps(e, 1 / o, r)), e
  );
}
function oP(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (Qt.test(t) &&
      ((t = parseFloat(t)), (t = me(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = me(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = ch(e.min, t, n, s, o)),
    (e.max = ch(e.max, t, n, s, o));
}
function dh(e, t, [n, r, o], i, a) {
  oP(e, t[n], t[r], t[o], t.scale, i, a);
}
const iP = ["x", "scaleX", "originX"],
  aP = ["y", "scaleY", "originY"];
function fh(e, t, n, r) {
  dh(e.x, t, iP, n ? n.x : void 0, r ? r.x : void 0),
    dh(e.y, t, aP, n ? n.y : void 0, r ? r.y : void 0);
}
function ph(e) {
  return e.translate === 0 && e.scale === 1;
}
function dy(e) {
  return ph(e.x) && ph(e.y);
}
function sP(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function fy(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function hh(e) {
  return dt(e.x) / dt(e.y);
}
class lP {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ef(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Tf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function mh(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const uP = (e, t) => e.depth - t.depth;
class cP {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ef(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Tf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(uP),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function dP(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (gn(r), e(i - t));
    };
  return ie.read(r, !0), () => gn(r);
}
function fP(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function pP(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function hP(e, t, n) {
  const r = rt(e) ? e : co(e);
  return r.start(Pf("", r, t, n)), r.animation;
}
const gh = ["", "X", "Y", "Z"],
  mP = { visibility: "hidden" },
  vh = 1e3;
let gP = 0;
const qn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function py({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = gP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (qn.totalNodes =
              qn.resolvedTargetDeltas =
              qn.recalculatedProjection =
                0),
            this.nodes.forEach(SP),
            this.nodes.forEach(PP),
            this.nodes.forEach(EP),
            this.nodes.forEach(wP),
            fP(qn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cP());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new bf()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = pP(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = dP(f, 250)),
            Da.hasAnimatedSinceResize &&
              ((Da.hasAnimatedSinceResize = !1), this.nodes.forEach(Sh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: h,
              layout: S,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || _P,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: g } =
                  c.getProps(),
                p = !this.targetLayout || !fy(this.targetLayout, S) || h,
                m = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m);
                const E = { ...Cf(v, "layout"), onPlay: k, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E);
              } else
                f || Sh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = S;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        gn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(TP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(yh);
        return;
      }
      this.isUpdating || this.nodes.forEach(kP),
        (this.isUpdating = !1),
        this.nodes.forEach(CP),
        this.nodes.forEach(vP),
        this.nodes.forEach(yP),
        this.clearAllSnapshots();
      const s = performance.now();
      (ze.delta = Dn(0, 1e3 / 60, s - ze.timestamp)),
        (ze.timestamp = s),
        (ze.isProcessing = !0),
        iu.update.process(ze),
        iu.preRender.process(ze),
        iu.render.process(ze),
        (ze.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(xP), this.sharedNodes.forEach(bP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ke()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !dy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || Qn(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        RP(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return ke();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Cn(s.x, l.offset.x), Cn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = ke();
      yt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            yt(s, a);
            const { scroll: f } = this.root;
            f && (Cn(s.x, -f.offset.x), Cn(s.y, -f.offset.y));
          }
          Cn(s.x, c.offset.x), Cn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = ke();
      yt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Hr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Qn(c.latestValues) && Hr(l, c.latestValues);
      }
      return Qn(this.latestValues) && Hr(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = ke();
      yt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Qn(u.latestValues)) continue;
        Ic(u.latestValues) && u.updateSnapshot();
        const c = ke(),
          d = u.measurePageBox();
        yt(c, d),
          fh(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qn(this.latestValues) && fh(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ze.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = ze.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ke()),
              (this.relativeTargetOrigin = ke()),
              qo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ke()), (this.targetWithTransforms = ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                LC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : yt(this.target, this.layout.layoutBox),
                oy(this.target, this.targetDelta))
              : yt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ke()),
                (this.relativeTargetOrigin = ke()),
                qo(this.relativeTargetOrigin, this.target, h.target),
                yt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          qn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ic(this.parent.latestValues) ||
          ry(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ze.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      yt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      zC(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: S } = s;
      if (!S) {
        this.projectionTransform &&
          ((this.projectionDelta = zr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = zr()),
        (this.projectionDeltaWithTransform = zr()));
      const v = this.projectionTransform;
      Qo(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
        (this.projectionTransform = mh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== f ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", S)),
        qn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = zr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = ke(),
        h = l ? l.source : void 0,
        S = this.layout ? this.layout.source : void 0,
        v = h !== S,
        k = this.getStack(),
        g = !k || k.members.length <= 1,
        p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(MP));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (E) => {
        const T = E / 1e3;
        wh(d.x, a.x, T),
          wh(d.y, a.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            AP(this.relativeTarget, this.relativeTargetOrigin, f, T),
            m && sP(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = ke()),
            yt(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), tP(c, u, this.latestValues, T, p, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (gn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ie.update(() => {
          (Da.hasAnimatedSinceResize = !0),
            (this.currentAnimation = hP(0, vh, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(vh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          hy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ke();
          const d = dt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = dt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        yt(s, l),
          Hr(s, c),
          Qo(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new lP()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < gh.length; c++) {
        const d = "rotate" + gh[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return mP;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Na(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Na(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !Qn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = mh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y: S } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${S.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const v in vs) {
        if (f[v] === void 0) continue;
        const { correct: k, applyTo: g } = vs[v],
          p = u.transform === "none" ? f[v] : k(f[v], d);
        if (g) {
          const m = g.length;
          for (let E = 0; E < m; E++) u[g[E]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Na(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(yh),
        this.root.sharedNodes.clear();
    }
  };
}
function vP(e) {
  e.updateLayout();
}
function yP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === "size"
      ? wt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            h = dt(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : hy(i, n.layoutBox, r) &&
        wt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            h = dt(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const s = zr();
    Qo(s, r, n.layoutBox);
    const l = zr();
    a ? Qo(l, e.applyTransform(o, !0), n.measuredBox) : Qo(l, r, n.layoutBox);
    const u = !dy(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const S = ke();
          qo(S, n.layoutBox, f.layoutBox);
          const v = ke();
          qo(v, r, h.layoutBox),
            fy(S, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = S),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function SP(e) {
  qn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function wP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xP(e) {
  e.clearSnapshot();
}
function yh(e) {
  e.clearMeasurements();
}
function kP(e) {
  e.isLayoutDirty = !1;
}
function CP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Sh(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function PP(e) {
  e.resolveTargetDelta();
}
function EP(e) {
  e.calcProjection();
}
function TP(e) {
  e.resetRotation();
}
function bP(e) {
  e.removeLeadSnapshot();
}
function wh(e, t, n) {
  (e.translate = me(t.translate, 0, n)),
    (e.scale = me(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function xh(e, t, n, r) {
  (e.min = me(t.min, n.min, r)), (e.max = me(t.max, n.max, r));
}
function AP(e, t, n, r) {
  xh(e.x, t.x, n.x, r), xh(e.y, t.y, n.y, r);
}
function MP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const _P = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  kh = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Ch = kh("applewebkit/") && !kh("chrome/") ? Math.round : xe;
function Ph(e) {
  (e.min = Ch(e.min)), (e.max = Ch(e.max));
}
function RP(e) {
  Ph(e.x), Ph(e.y);
}
function hy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Fc(hh(t), hh(n), 0.2))
  );
}
const OP = py({
    attachResizeListener: (e, t) => ln(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  gu = { current: void 0 },
  my = py({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!gu.current) {
        const e = new OP({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (gu.current = e);
      }
      return gu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  LP = {
    pan: { Feature: XC },
    drag: { Feature: YC, ProjectionNode: my, MeasureLayout: ly },
  },
  FP = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function VP(e) {
  const t = FP.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Nc(e, t, n = 1) {
  const [r, o] = VP(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Xv(a) ? parseFloat(a) : a;
  } else return bc(o) ? Nc(o, t, n + 1) : o;
}
function IP(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!bc(i)) return;
      const a = Nc(i, r);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!bc(i)) continue;
    const a = Nc(i, r);
    a && ((t[o] = a), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const jP = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  gy = (e) => jP.has(e),
  NP = (e) => Object.keys(e).some(gy),
  Eh = (e) => e === wr || e === $,
  Th = (e, t) => parseFloat(e.split(", ")[t]),
  bh =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return Th(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? Th(i[1], e) : 0;
      }
    },
  DP = new Set(["x", "y", "z"]),
  $P = Li.filter((e) => !DP.has(e));
function BP(e) {
  const t = [];
  return (
    $P.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const fo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: bh(4, 13),
  y: bh(5, 14),
};
fo.translateX = fo.x;
fo.translateY = fo.y;
const zP = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = fo[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = fo[u](l, i));
      }),
      e
    );
  },
  HP = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(gy);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = Ro(c);
        const f = t[l];
        let h;
        if (Ss(f)) {
          const S = f.length,
            v = f[0] === null ? 1 : 0;
          (c = f[v]), (d = Ro(c));
          for (let k = v; k < S && f[k] !== null; k++)
            h ? yf(Ro(f[k]) === h) : (h = Ro(f[k]));
        } else h = Ro(f);
        if (d !== h)
          if (Eh(d) && Eh(h)) {
            const S = u.get();
            typeof S == "string" && u.set(parseFloat(S)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === $ && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            h != null &&
            h.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = BP(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = zP(t, e, s);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        ll && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function WP(e, t, n, r) {
  return NP(t) ? HP(e, t, n, r) : { target: t, transitionEnd: r };
}
const UP = (e, t, n, r) => {
    const o = IP(e, t, r);
    return (t = o.target), (r = o.transitionEnd), WP(e, t, n, r);
  },
  Dc = { current: null },
  vy = { current: !1 };
function ZP() {
  if (((vy.current = !0), !!ll))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Dc.current = e.matches);
      e.addListener(t), t();
    } else Dc.current = !1;
}
function GP(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      a = n[o];
    if (rt(i)) e.addValue(o, i), Cs(r) && r.add(o);
    else if (rt(a)) e.addValue(o, co(i, { owner: e })), Cs(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, co(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Ah = new WeakMap(),
  yy = Object.keys(wi),
  KP = yy.length,
  Mh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  YP = uf.length;
class XP {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ie.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = cl(n)),
      (this.isVariantNode = tv(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && rt(f) && (f.set(s[d], !1), Cs(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Ah.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      vy.current || ZP(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Dc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ah.delete(this.current),
      this.projection && this.projection.unmount(),
      gn(this.notifyUpdate),
      gn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Sr.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ie.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < KP; l++) {
      const u = yy[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: h,
        } = wi[u];
      f && (a = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          h && (s = h));
    }
    if (!this.projection && a) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && $r(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: h,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ke();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Mh.length; r++) {
      const o = Mh[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = GP(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < YP; r++) {
      const o = uf[r],
        i = this.props[o];
      (Si(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = co(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = vf(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !rt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new bf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Sy extends XP {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let a = hC(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i)) {
      fC(this, r, a);
      const s = UP(this, r, a, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function QP(e) {
  return window.getComputedStyle(e);
}
class qP extends Sy {
  readValueFromInstance(t, n) {
    if (Sr.has(n)) {
      const r = kf(n);
      return (r && r.default) || 0;
    } else {
      const r = QP(t),
        o = (iv(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return iy(t, n);
  }
  build(t, n, r, o) {
    ff(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return gf(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    rt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    dv(t, n, r, o);
  }
}
class JP extends Sy {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Sr.has(n)) {
      const r = kf(n);
      return (r && r.default) || 0;
    }
    return (n = fv.has(n) ? n : sf(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ke();
  }
  scrapeMotionValuesFromProps(t, n) {
    return hv(t, n);
  }
  build(t, n, r, o) {
    hf(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    pv(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = mf(t.tagName)), super.mount(t);
  }
}
const eE = (e, t) =>
    df(e)
      ? new JP(t, { enableHardwareAcceleration: !1 })
      : new qP(t, { enableHardwareAcceleration: !0 }),
  tE = { layout: { ProjectionNode: my, MeasureLayout: ly } },
  nE = { ...MC, ...Y3, ...LP, ...tE },
  ji = o3((e, t) => I3(e, t, nE, eE));
function wy() {
  const e = w.useRef(!1);
  return (
    af(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function rE() {
  const e = wy(),
    [t, n] = w.useState(0),
    r = w.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [w.useCallback(() => ie.postRender(r), [r]), t];
}
class oE extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function iE({ children: e, isPresent: t }) {
  const n = w.useId(),
    r = w.useRef(null),
    o = w.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    w.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current;
      if (t || !r.current || !i || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    w.createElement(
      oE,
      { isPresent: t, childRef: r, sizeRef: o },
      w.cloneElement(e, { ref: r })
    )
  );
}
const vu = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = mv(aE),
    l = w.useId(),
    u = w.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [n]
    );
  return (
    w.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = w.createElement(iE, { isPresent: n }, e)),
    w.createElement(sl.Provider, { value: u }, e)
  );
};
function aE() {
  return new Map();
}
function sE(e) {
  return w.useEffect(() => () => e(), []);
}
const Jn = (e) => e.key || "";
function lE(e, t) {
  e.forEach((n) => {
    const r = Jn(n);
    t.set(r, n);
  });
}
function uE(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const hl = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = "sync",
}) => {
  const s = w.useContext(cf).forceRender || rE()[0],
    l = wy(),
    u = uE(e);
  let c = u;
  const d = w.useRef(new Map()).current,
    f = w.useRef(c),
    h = w.useRef(new Map()).current,
    S = w.useRef(!0);
  if (
    (af(() => {
      (S.current = !1), lE(u, h), (f.current = c);
    }),
    sE(() => {
      (S.current = !0), h.clear(), d.clear();
    }),
    S.current)
  )
    return w.createElement(
      w.Fragment,
      null,
      c.map((p) =>
        w.createElement(
          vu,
          {
            key: Jn(p),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          p
        )
      )
    );
  c = [...c];
  const v = f.current.map(Jn),
    k = u.map(Jn),
    g = v.length;
  for (let p = 0; p < g; p++) {
    const m = v[p];
    k.indexOf(m) === -1 && !d.has(m) && d.set(m, void 0);
  }
  return (
    a === "wait" && d.size && (c = []),
    d.forEach((p, m) => {
      if (k.indexOf(m) !== -1) return;
      const E = h.get(m);
      if (!E) return;
      const T = v.indexOf(m);
      let R = p;
      if (!R) {
        const A = () => {
          d.delete(m);
          const _ = Array.from(h.keys()).filter((L) => !k.includes(L));
          if (
            (_.forEach((L) => h.delete(L)),
            (f.current = u.filter((L) => {
              const j = Jn(L);
              return j === m || _.includes(j);
            })),
            !d.size)
          ) {
            if (l.current === !1) return;
            s(), r && r();
          }
        };
        (R = w.createElement(
          vu,
          {
            key: Jn(E),
            isPresent: !1,
            onExitComplete: A,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
          },
          E
        )),
          d.set(m, R);
      }
      c.splice(T, 0, R);
    }),
    (c = c.map((p) => {
      const m = p.key;
      return d.has(m)
        ? p
        : w.createElement(
            vu,
            { key: Jn(p), isPresent: !0, presenceAffectsLayout: i, mode: a },
            p
          );
    })),
    w.createElement(
      w.Fragment,
      null,
      d.size ? c : c.map((p) => w.cloneElement(p))
    )
  );
};
var cE = cw({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  xy = bt((e, t) => {
    const n = rf("Spinner", e),
      {
        label: r = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = Oi(e),
      u = Ue("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${cE} ${i} linear infinite`,
        ...n,
      };
    return M.jsx(_e.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && M.jsx(_e.span, { srOnly: !0, children: r }),
    });
  });
xy.displayName = "Spinner";
function dE(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function ki(...e) {
  return (t) => {
    e.forEach((n) => {
      dE(n, t);
    });
  };
}
function fE(...e) {
  return w.useMemo(() => ki(...e), e);
}
var _h = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  ur = {
    enter: { duration: 0.2, ease: _h.easeOut },
    exit: { duration: 0.1, ease: _h.easeIn },
  },
  cr = {
    enter: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
    }),
    exit: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
    }),
  },
  pE = {
    enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 1,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : cr.enter(ur.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 0,
        transition:
          (r = e == null ? void 0 : e.exit) != null ? r : cr.exit(ur.exit, n),
        transitionEnd: t == null ? void 0 : t.exit,
      };
    },
  },
  ky = { initial: "exit", animate: "enter", exit: "exit", variants: pE },
  hE = w.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        className: i,
        transition: a,
        transitionEnd: s,
        delay: l,
        ...u
      } = t,
      c = o || r ? "enter" : "exit",
      d = r ? o && r : !0,
      f = { transition: a, transitionEnd: s, delay: l };
    return M.jsx(hl, {
      custom: f,
      children:
        d &&
        M.jsx(ji.div, {
          ref: n,
          className: Ue("chakra-fade", i),
          custom: f,
          ...ky,
          animate: c,
          ...u,
        }),
    });
  });
hE.displayName = "Fade";
var mE = {
    exit: ({
      reverse: e,
      initialScale: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => {
      var i;
      return {
        opacity: 0,
        ...(e
          ? { scale: t, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { scale: t, ...(r == null ? void 0 : r.exit) } }),
        transition:
          (i = n == null ? void 0 : n.exit) != null ? i : cr.exit(ur.exit, o),
      };
    },
    enter: ({ transitionEnd: e, transition: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        scale: 1,
        transition:
          (r = t == null ? void 0 : t.enter) != null
            ? r
            : cr.enter(ur.enter, n),
        transitionEnd: e == null ? void 0 : e.enter,
      };
    },
  },
  Cy = { initial: "exit", animate: "enter", exit: "exit", variants: mE },
  gE = w.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        initialScale: a = 0.95,
        className: s,
        transition: l,
        transitionEnd: u,
        delay: c,
        ...d
      } = t,
      f = r ? o && r : !0,
      h = o || r ? "enter" : "exit",
      S = {
        initialScale: a,
        reverse: i,
        transition: l,
        transitionEnd: u,
        delay: c,
      };
    return M.jsx(hl, {
      custom: S,
      children:
        f &&
        M.jsx(ji.div, {
          ref: n,
          className: Ue("chakra-offset-slide", s),
          ...Cy,
          animate: h,
          custom: S,
          ...d,
        }),
    });
  });
gE.displayName = "ScaleFade";
var vE = {
    initial: ({
      offsetX: e,
      offsetY: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => {
      var i;
      return {
        opacity: 0,
        x: e,
        y: t,
        transition:
          (i = n == null ? void 0 : n.exit) != null ? i : cr.exit(ur.exit, o),
        transitionEnd: r == null ? void 0 : r.exit,
      };
    },
    enter: ({ transition: e, transitionEnd: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        x: 0,
        y: 0,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : cr.enter(ur.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({
      offsetY: e,
      offsetX: t,
      transition: n,
      transitionEnd: r,
      reverse: o,
      delay: i,
    }) => {
      var a;
      const s = { x: t, y: e };
      return {
        opacity: 0,
        transition:
          (a = n == null ? void 0 : n.exit) != null ? a : cr.exit(ur.exit, i),
        ...(o
          ? { ...s, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { ...s, ...(r == null ? void 0 : r.exit) } }),
      };
    },
  },
  No = { initial: "initial", animate: "enter", exit: "exit", variants: vE },
  yE = w.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        className: a,
        offsetX: s = 0,
        offsetY: l = 8,
        transition: u,
        transitionEnd: c,
        delay: d,
        ...f
      } = t,
      h = r ? o && r : !0,
      S = o || r ? "enter" : "exit",
      v = {
        offsetX: s,
        offsetY: l,
        reverse: i,
        transition: u,
        transitionEnd: c,
        delay: d,
      };
    return M.jsx(hl, {
      custom: v,
      children:
        h &&
        M.jsx(ji.div, {
          ref: n,
          className: Ue("chakra-offset-slide", a),
          custom: v,
          ...No,
          animate: S,
          ...f,
        }),
    });
  });
yE.displayName = "SlideFade";
var [TA, SE] = yr({ strict: !1, name: "ButtonGroupContext" });
function wE(e) {
  const [t, n] = w.useState(!e);
  return {
    ref: w.useCallback((i) => {
      i && n(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function $c(e) {
  const { children: t, className: n, ...r } = e,
    o = w.isValidElement(t)
      ? w.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = Ue("chakra-button__icon", n);
  return M.jsx(_e.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
$c.displayName = "ButtonIcon";
function Bc(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: o = M.jsx(xy, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = Ue("chakra-button__spinner", i),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = w.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, r]
    );
  return M.jsx(_e.div, { className: l, ...s, __css: c, children: o });
}
Bc.displayName = "ButtonSpinner";
var zc = bt((e, t) => {
  const n = SE(),
    r = rf("Button", { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: h,
      spinnerPlacement: S = "start",
      className: v,
      as: k,
      ...g
    } = Oi(e),
    p = w.useMemo(() => {
      const R = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...r,
        ...(!!n && { _focus: R }),
      };
    }, [r, n]),
    { ref: m, type: E } = wE(k),
    T = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return M.jsxs(_e.button, {
    ref: fE(t, m),
    as: k,
    type: f ?? E,
    "data-active": Rt(a),
    "data-loading": Rt(i),
    __css: p,
    className: Ue("chakra-button", v),
    ...g,
    disabled: o || i,
    children: [
      i &&
        S === "start" &&
        M.jsx(Bc, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: h,
        }),
      i
        ? c || M.jsx(_e.span, { opacity: 0, children: M.jsx(Rh, { ...T }) })
        : M.jsx(Rh, { ...T }),
      i &&
        S === "end" &&
        M.jsx(Bc, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: h,
        }),
    ],
  });
});
zc.displayName = "Button";
function Rh(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return M.jsxs(M.Fragment, {
    children: [
      t && M.jsx($c, { marginEnd: o, children: t }),
      r,
      n && M.jsx($c, { marginStart: o, children: n }),
    ],
  });
}
var [xE, kE] = yr({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [CE, Py] = yr({ strict: !1, name: "FormControlContext" });
function PE(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: o,
      isReadOnly: i,
      ...a
    } = e,
    s = w.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, h] = w.useState(!1),
    [S, v] = w.useState(!1),
    [k, g] = w.useState(!1),
    p = w.useCallback(
      (A = {}, _ = null) => ({
        id: d,
        ...A,
        ref: ki(_, (L) => {
          L && v(!0);
        }),
      }),
      [d]
    ),
    m = w.useCallback(
      (A = {}, _ = null) => ({
        ...A,
        ref: _,
        "data-focus": Rt(k),
        "data-disabled": Rt(o),
        "data-invalid": Rt(r),
        "data-readonly": Rt(i),
        id: A.id !== void 0 ? A.id : u,
        htmlFor: A.htmlFor !== void 0 ? A.htmlFor : l,
      }),
      [l, o, k, r, i, u]
    ),
    E = w.useCallback(
      (A = {}, _ = null) => ({
        id: c,
        ...A,
        ref: ki(_, (L) => {
          L && h(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    T = w.useCallback(
      (A = {}, _ = null) => ({
        ...A,
        ...a,
        ref: _,
        role: "group",
        "data-focus": Rt(k),
        "data-disabled": Rt(o),
        "data-invalid": Rt(r),
        "data-readonly": Rt(i),
      }),
      [a, o, k, r, i]
    ),
    R = w.useCallback(
      (A = {}, _ = null) => ({
        ...A,
        ref: _,
        role: "presentation",
        "aria-hidden": !0,
        children: A.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!k,
    onFocus: () => g(!0),
    onBlur: () => g(!1),
    hasFeedbackText: f,
    setHasFeedbackText: h,
    hasHelpText: S,
    setHasHelpText: v,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: p,
    getErrorMessageProps: E,
    getRootProps: T,
    getLabelProps: m,
    getRequiredIndicatorProps: R,
  };
}
var EE = bt(function (t, n) {
  const r = of("Form", t),
    o = Oi(t),
    { getRootProps: i, htmlProps: a, ...s } = PE(o),
    l = Ue("chakra-form-control", t.className);
  return M.jsx(CE, {
    value: s,
    children: M.jsx(xE, {
      value: r,
      children: M.jsx(_e.div, {
        ...i({}, n),
        className: l,
        __css: r.container,
      }),
    }),
  });
});
EE.displayName = "FormControl";
var TE = bt(function (t, n) {
  const r = Py(),
    o = kE(),
    i = Ue("chakra-form__helper-text", t.className);
  return M.jsx(_e.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
TE.displayName = "FormHelperText";
function bE(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: o,
    ...i
  } = AE(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": nu(n),
    "aria-required": nu(o),
    "aria-readonly": nu(r),
  };
}
function AE(e) {
  var t, n, r;
  const o = Py(),
    {
      id: i,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: h,
      onBlur: S,
      ...v
    } = e,
    k = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    o != null &&
      o.hasFeedbackText &&
      o != null &&
      o.isInvalid &&
      k.push(o.feedbackId),
    o != null && o.hasHelpText && k.push(o.helpTextId),
    {
      ...v,
      "aria-describedby": k.join(" ") || void 0,
      id: i ?? (o == null ? void 0 : o.id),
      isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
      isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
      isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
      onFocus: Dr(o == null ? void 0 : o.onFocus, h),
      onBlur: Dr(o == null ? void 0 : o.onBlur, S),
    }
  );
}
function ME(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Hc = "data-focus-lock",
  Ey = "data-focus-lock-disabled",
  _E = "data-no-focus-lock",
  RE = "data-autofocus-inside",
  OE = "data-no-autofocus";
function yu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function LE(e, t) {
  var n = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Oh = new WeakMap();
function Ty(e, t) {
  var n = LE(t || null, function (r) {
    return e.forEach(function (o) {
      return yu(o, r);
    });
  });
  return (
    w.useLayoutEffect(
      function () {
        var r = Oh.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            a = n.current;
          o.forEach(function (s) {
            i.has(s) || yu(s, null);
          }),
            i.forEach(function (s) {
              o.has(s) || yu(s, a);
            });
        }
        Oh.set(n, e);
      },
      [e]
    ),
    n
  );
}
var Su = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px",
  },
  Gt = function () {
    return (
      (Gt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Gt.apply(this, arguments)
    );
  };
function by(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function FE(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ay(e) {
  return e;
}
function My(e, t) {
  t === void 0 && (t = Ay);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var a = t(i, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (s) {
              return s !== a;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(i);
        }
        n = {
          push: function (s) {
            return i(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var a = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(i), (a = n);
        }
        var l = function () {
            var c = a;
            (a = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              a.push(c), u();
            },
            filter: function (c) {
              return (a = a.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function Af(e, t) {
  return t === void 0 && (t = Ay), My(e, t);
}
function _y(e) {
  e === void 0 && (e = {});
  var t = My(null);
  return (t.options = Gt({ async: !0, ssr: !1 }, e)), t;
}
var Ry = function (e) {
  var t = e.sideCar,
    n = by(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, Gt({}, n));
};
Ry.isSideCarExport = !0;
function VE(e, t) {
  return e.useMedium(t), Ry;
}
var Oy = Af({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  Ly = Af(),
  IE = Af(),
  jE = _y({ async: !0 }),
  NE = [],
  Mf = w.forwardRef(function (t, n) {
    var r,
      o = w.useState(),
      i = o[0],
      a = o[1],
      s = w.useRef(),
      l = w.useRef(!1),
      u = w.useRef(null),
      c = t.children,
      d = t.disabled,
      f = t.noFocusGuards,
      h = t.persistentFocus,
      S = t.crossFrame,
      v = t.autoFocus;
    t.allowTextSelection;
    var k = t.group,
      g = t.className,
      p = t.whiteList,
      m = t.hasPositiveIndices,
      E = t.shards,
      T = E === void 0 ? NE : E,
      R = t.as,
      A = R === void 0 ? "div" : R,
      _ = t.lockProps,
      L = _ === void 0 ? {} : _,
      j = t.sideCar,
      q = t.returnFocus,
      pe = t.focusOptions,
      z = t.onActivation,
      re = t.onDeactivation,
      mt = w.useState({}),
      ae = mt[0],
      je = w.useCallback(
        function () {
          (u.current = u.current || (document && document.activeElement)),
            s.current && z && z(s.current),
            (l.current = !0);
        },
        [z]
      ),
      F = w.useCallback(
        function () {
          (l.current = !1), re && re(s.current);
        },
        [re]
      );
    w.useEffect(function () {
      d || (u.current = null);
    }, []);
    var N = w.useCallback(
        function (be) {
          var ot = u.current;
          if (ot && ot.focus) {
            var Dt = typeof q == "function" ? q(ot) : q;
            if (Dt) {
              var At = typeof Dt == "object" ? Dt : void 0;
              (u.current = null),
                be
                  ? Promise.resolve().then(function () {
                      return ot.focus(At);
                    })
                  : ot.focus(At);
            }
          }
        },
        [q]
      ),
      B = w.useCallback(function (be) {
        l.current && Oy.useMedium(be);
      }, []),
      D = Ly.useMedium,
      te = w.useCallback(function (be) {
        s.current !== be && ((s.current = be), a(be));
      }, []),
      W = uo(((r = {}), (r[Ey] = d && "disabled"), (r[Hc] = k), r), L),
      Ne = f !== !0,
      Nt = Ne && f !== "tail",
      Se = Ty([n, te]);
    return w.createElement(
      w.Fragment,
      null,
      Ne && [
        w.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: d ? -1 : 0,
          style: Su,
        }),
        m
          ? w.createElement("div", {
              key: "guard-nearest",
              "data-focus-guard": !0,
              tabIndex: d ? -1 : 1,
              style: Su,
            })
          : null,
      ],
      !d &&
        w.createElement(j, {
          id: ae,
          sideCar: jE,
          observed: i,
          disabled: d,
          persistentFocus: h,
          crossFrame: S,
          autoFocus: v,
          whiteList: p,
          shards: T,
          onActivation: je,
          onDeactivation: F,
          returnFocus: N,
          focusOptions: pe,
        }),
      w.createElement(
        A,
        uo({ ref: Se }, W, { className: g, onBlur: D, onFocus: B }),
        c
      ),
      Nt &&
        w.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: d ? -1 : 0,
          style: Su,
        })
    );
  });
Mf.propTypes = {};
Mf.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
};
const Fy = Mf;
function Wc(e, t) {
  return (
    (Wc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Wc(e, t)
  );
}
function DE(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Wc(e, t);
}
function Ci(e) {
  "@babel/helpers - typeof";
  return (
    (Ci =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ci(e)
  );
}
function $E(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ci(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BE(e) {
  var t = $E(e, "string");
  return Ci(t) == "symbol" ? t : String(t);
}
function zE(e, t, n) {
  return (
    (t = BE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function HE(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (o) {
    var i = [],
      a;
    function s() {
      (a = e(
        i.map(function (u) {
          return u.props;
        })
      )),
        t(a);
    }
    var l = (function (u) {
      DE(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function () {
        return a;
      };
      var d = c.prototype;
      return (
        (d.componentDidMount = function () {
          i.push(this), s();
        }),
        (d.componentDidUpdate = function () {
          s();
        }),
        (d.componentWillUnmount = function () {
          var h = i.indexOf(this);
          i.splice(h, 1), s();
        }),
        (d.render = function () {
          return x.createElement(o, this.props);
        }),
        c
      );
    })(w.PureComponent);
    return zE(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var qt = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  Es = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  Vy = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  WE = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue("display") === "none" ||
          t.getPropertyValue("visibility") === "hidden";
  },
  Iy = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  jy = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  UE = function (e, t) {
    return !e || jy(e) || (!WE(e) && t(Iy(e)));
  },
  Ny = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = UE(t, Ny.bind(void 0, e));
    return e.set(t, r), r;
  },
  ZE = function (e, t) {
    return e && !jy(e) ? (YE(e) ? t(Iy(e)) : !1) : !0;
  },
  Dy = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = ZE(t, Dy.bind(void 0, e));
    return e.set(t, r), r;
  },
  $y = function (e) {
    return e.dataset;
  },
  GE = function (e) {
    return e.tagName === "BUTTON";
  },
  By = function (e) {
    return e.tagName === "INPUT";
  },
  zy = function (e) {
    return By(e) && e.type === "radio";
  },
  KE = function (e) {
    return !((By(e) || GE(e)) && (e.type === "hidden" || e.disabled));
  },
  YE = function (e) {
    var t = e.getAttribute(OE);
    return ![!0, "true", ""].includes(t);
  },
  _f = function (e) {
    var t;
    return !!(e && !((t = $y(e)) === null || t === void 0) && t.focusGuard);
  },
  Ts = function (e) {
    return !_f(e);
  },
  XE = function (e) {
    return !!e;
  },
  QE = function (e, t) {
    var n = e.tabIndex - t.tabIndex,
      r = e.index - t.index;
    if (n) {
      if (!e.tabIndex) return 1;
      if (!t.tabIndex) return -1;
    }
    return n || r;
  },
  Hy = function (e, t, n) {
    return qt(e)
      .map(function (r, o) {
        return {
          node: r,
          index: o,
          tabIndex:
            n && r.tabIndex === -1
              ? (r.dataset || {}).focusGuard
                ? 0
                : -1
              : r.tabIndex,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(QE);
  },
  qE = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  Rf = qE.join(","),
  JE = "".concat(Rf, ", [data-focus-guard]"),
  Wy = function (e, t) {
    return qt((e.shadowRoot || e).children).reduce(function (n, r) {
      return n.concat(r.matches(t ? JE : Rf) ? [r] : [], Wy(r));
    }, []);
  },
  eT = function (e, t) {
    var n;
    return e instanceof HTMLIFrameElement &&
      !((n = e.contentDocument) === null || n === void 0) &&
      n.body
      ? ml([e.contentDocument.body], t)
      : [e];
  },
  ml = function (e, t) {
    return e.reduce(function (n, r) {
      var o,
        i = Wy(r, t),
        a = (o = []).concat.apply(
          o,
          i.map(function (s) {
            return eT(s, t);
          })
        );
      return n.concat(
        a,
        r.parentNode
          ? qt(r.parentNode.querySelectorAll(Rf)).filter(function (s) {
              return s === r;
            })
          : []
      );
    }, []);
  },
  tT = function (e) {
    var t = e.querySelectorAll("[".concat(RE, "]"));
    return qt(t)
      .map(function (n) {
        return ml([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  Of = function (e, t) {
    return qt(e)
      .filter(function (n) {
        return Ny(t, n);
      })
      .filter(function (n) {
        return KE(n);
      });
  },
  Lh = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      qt(e).filter(function (n) {
        return Dy(t, n);
      })
    );
  },
  Uc = function (e, t, n) {
    return Hy(Of(ml(e, n), t), !0, n);
  },
  Fh = function (e, t) {
    return Hy(Of(ml(e), t), !1);
  },
  nT = function (e, t) {
    return Of(tT(e), t);
  },
  qr = function (e, t) {
    return e.shadowRoot
      ? qr(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 &&
        Object.getPrototypeOf(e).contains.call(e, t)
      ? !0
      : qt(e.children).some(function (n) {
          var r;
          if (n instanceof HTMLIFrameElement) {
            var o =
              (r = n.contentDocument) === null || r === void 0
                ? void 0
                : r.body;
            return o ? qr(o, t) : !1;
          }
          return qr(n, t);
        });
  },
  rT = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var o = r + 1; o < n; o += 1) {
        var i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (a, s) {
      return !t.has(s);
    });
  },
  Uy = function (e) {
    return e.parentNode ? Uy(e.parentNode) : e;
  },
  Lf = function (e) {
    var t = Es(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var o = r.getAttribute(Hc);
      return (
        n.push.apply(
          n,
          o
            ? rT(
                qt(
                  Uy(r).querySelectorAll(
                    "["
                      .concat(Hc, '="')
                      .concat(o, '"]:not([')
                      .concat(Ey, '="disabled"])')
                  )
                )
              )
            : [r]
        ),
        n
      );
    }, []);
  },
  oT = function (e) {
    try {
      return e();
    } catch {
      return;
    }
  },
  Pi = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement;
      return t.shadowRoot
        ? Pi(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
          oT(function () {
            return t.contentWindow.document;
          })
        ? Pi(t.contentWindow.document)
        : t;
    }
  },
  iT = function (e, t) {
    return e === t;
  },
  aT = function (e, t) {
    return !!qt(e.querySelectorAll("iframe")).some(function (n) {
      return iT(n, t);
    });
  },
  Zy = function (e, t) {
    return (
      t === void 0 && (t = Pi(Vy(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : Lf(e).some(function (n) {
            return qr(n, t) || aT(n, t);
          })
    );
  },
  sT = function (e) {
    e === void 0 && (e = document);
    var t = Pi(e);
    return t
      ? qt(e.querySelectorAll("[".concat(_E, "]"))).some(function (n) {
          return qr(n, t);
        })
      : !1;
  },
  lT = function (e, t) {
    return (
      t
        .filter(zy)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  Ff = function (e, t) {
    return zy(e) && e.name ? lT(e, t) : e;
  },
  uT = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(Ff(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  Vh = function (e) {
    return e[0] && e.length > 1 ? Ff(e[0], e) : e[0];
  },
  Ih = function (e, t) {
    return e.length > 1 ? e.indexOf(Ff(e[t], e)) : t;
  },
  Gy = "NEW_FOCUS",
  cT = function (e, t, n, r) {
    var o = e.length,
      i = e[0],
      a = e[o - 1],
      s = _f(n);
    if (!(n && e.indexOf(n) >= 0)) {
      var l = n !== void 0 ? t.indexOf(n) : -1,
        u = r ? t.indexOf(r) : l,
        c = r ? e.indexOf(r) : -1,
        d = l - u,
        f = t.indexOf(i),
        h = t.indexOf(a),
        S = uT(t),
        v = n !== void 0 ? S.indexOf(n) : -1,
        k = v - (r ? S.indexOf(r) : l),
        g = Ih(e, 0),
        p = Ih(e, o - 1);
      if (l === -1 || c === -1) return Gy;
      if (!d && c >= 0) return c;
      if (l <= f && s && Math.abs(d) > 1) return p;
      if (l >= h && s && Math.abs(d) > 1) return g;
      if (d && Math.abs(k) > 1) return c;
      if (l <= f) return p;
      if (l > h) return g;
      if (d) return Math.abs(d) > 1 ? c : (o + c + d) % o;
    }
  },
  dT = function (e) {
    return function (t) {
      var n,
        r = (n = $y(t)) === null || n === void 0 ? void 0 : n.autofocus;
      return (
        t.autofocus || (r !== void 0 && r !== "false") || e.indexOf(t) >= 0
      );
    };
  },
  fT = function (e, t, n) {
    var r = e.map(function (i) {
        var a = i.node;
        return a;
      }),
      o = Lh(r.filter(dT(n)));
    return o && o.length ? Vh(o) : Vh(Lh(t));
  },
  Zc = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && Zc(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  wu = function (e, t) {
    for (var n = Zc(e), r = Zc(t), o = 0; o < n.length; o += 1) {
      var i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  Ky = function (e, t, n) {
    var r = Es(e),
      o = Es(t),
      i = r[0],
      a = !1;
    return (
      o.filter(Boolean).forEach(function (s) {
        (a = wu(a || s, s) || a),
          n.filter(Boolean).forEach(function (l) {
            var u = wu(i, l);
            u && (!a || qr(u, a) ? (a = u) : (a = wu(u, a)));
          });
      }),
      a
    );
  },
  pT = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(nT(r, t));
    }, []);
  },
  hT = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(XE)
    );
  },
  mT = function (e, t) {
    var n = Pi(Es(e).length > 0 ? document : Vy(e).ownerDocument),
      r = Lf(e).filter(Ts),
      o = Ky(n || e, e, r),
      i = new Map(),
      a = Fh(r, i),
      s = Uc(r, i).filter(function (h) {
        var S = h.node;
        return Ts(S);
      });
    if (!(!s[0] && ((s = a), !s[0]))) {
      var l = Fh([o], i).map(function (h) {
          var S = h.node;
          return S;
        }),
        u = hT(l, s),
        c = u.map(function (h) {
          var S = h.node;
          return S;
        }),
        d = cT(c, l, n, t);
      if (d === Gy) {
        var f = fT(a, c, pT(r, i));
        if (f) return { node: f };
        console.warn("focus-lock: cannot find any node to move focus into");
        return;
      }
      return d === void 0 ? d : u[d];
    }
  },
  gT = function (e) {
    var t = Lf(e).filter(Ts),
      n = Ky(e, e, t),
      r = new Map(),
      o = Uc([n], r, !0),
      i = Uc(t, r)
        .filter(function (a) {
          var s = a.node;
          return Ts(s);
        })
        .map(function (a) {
          var s = a.node;
          return s;
        });
    return o.map(function (a) {
      var s = a.node,
        l = a.index;
      return { node: s, index: l, lockItem: i.indexOf(s) >= 0, guard: _f(s) };
    });
  },
  vT = function (e, t) {
    "focus" in e && e.focus(t),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
  },
  xu = 0,
  ku = !1,
  Yy = function (e, t, n) {
    n === void 0 && (n = {});
    var r = mT(e, t);
    if (!ku && r) {
      if (xu > 2) {
        console.error(
          "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
        ),
          (ku = !0),
          setTimeout(function () {
            ku = !1;
          }, 1);
        return;
      }
      xu++, vT(r.node, n.focusOptions), xu--;
    }
  };
function Vf(e) {
  setTimeout(e, 1);
}
var yT = function () {
    return document && document.activeElement === document.body;
  },
  ST = function () {
    return yT() || sT();
  },
  Jr = null,
  Wr = null,
  eo = null,
  Ei = !1,
  wT = function () {
    return !0;
  },
  xT = function (t) {
    return (Jr.whiteList || wT)(t);
  },
  kT = function (t, n) {
    eo = { observerNode: t, portaledElement: n };
  },
  CT = function (t) {
    return eo && eo.portaledElement === t;
  };
function jh(e, t, n, r) {
  var o = null,
    i = e;
  do {
    var a = r[i];
    if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var PT = function (t) {
    return t && "current" in t ? t.current : t;
  },
  ET = function (t) {
    return t ? !!Ei : Ei === "meanwhile";
  },
  TT = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  bT = function (t, n) {
    return n.some(function (r) {
      return TT(t, r, r);
    });
  },
  bs = function () {
    var t = !1;
    if (Jr) {
      var n = Jr,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        a = n.shards,
        s = n.crossFrame,
        l = n.focusOptions,
        u = r || (eo && eo.portaledElement),
        c = document && document.activeElement;
      if (u) {
        var d = [u].concat(a.map(PT).filter(Boolean));
        if (
          ((!c || xT(c)) &&
            (o || ET(s) || !ST() || (!Wr && i)) &&
            (u &&
              !(Zy(d) || (c && bT(c, d)) || CT(c)) &&
              (document && !Wr && c && !i
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = Yy(d, Wr, { focusOptions: l })), (eo = {}))),
            (Ei = !1),
            (Wr = document && document.activeElement)),
          document)
        ) {
          var f = document && document.activeElement,
            h = gT(d),
            S = h
              .map(function (v) {
                var k = v.node;
                return k;
              })
              .indexOf(f);
          S > -1 &&
            (h
              .filter(function (v) {
                var k = v.guard,
                  g = v.node;
                return k && g.dataset.focusAutoGuard;
              })
              .forEach(function (v) {
                var k = v.node;
                return k.removeAttribute("tabIndex");
              }),
            jh(S, h.length, 1, h),
            jh(S, -1, -1, h));
        }
      }
    }
    return t;
  },
  Xy = function (t) {
    bs() && t && (t.stopPropagation(), t.preventDefault());
  },
  If = function () {
    return Vf(bs);
  },
  AT = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || kT(r, n);
  },
  MT = function () {
    return null;
  },
  Qy = function () {
    (Ei = "just"),
      Vf(function () {
        Ei = "meanwhile";
      });
  },
  _T = function () {
    document.addEventListener("focusin", Xy),
      document.addEventListener("focusout", If),
      window.addEventListener("blur", Qy);
  },
  RT = function () {
    document.removeEventListener("focusin", Xy),
      document.removeEventListener("focusout", If),
      window.removeEventListener("blur", Qy);
  };
function OT(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
function LT(e) {
  var t = e.slice(-1)[0];
  t && !Jr && _T();
  var n = Jr,
    r = n && t && t.id === n.id;
  (Jr = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        var i = o.id;
        return i === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((Wr = null),
        (!r || n.observed !== t.observed) && t.onActivation(),
        bs(),
        Vf(bs))
      : (RT(), (Wr = null));
}
Oy.assignSyncMedium(AT);
Ly.assignMedium(If);
IE.assignMedium(function (e) {
  return e({ moveFocusInside: Yy, focusInside: Zy });
});
const FT = HE(OT, LT)(MT);
var Gc = w.forwardRef(function (t, n) {
    return w.createElement(Fy, uo({ sideCar: FT, ref: n }, t));
  }),
  qy = Fy.propTypes || {};
qy.sideCar;
ME(qy, ["sideCar"]);
Gc.propTypes = {};
function VT(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function IT(e) {
  var t;
  if (!VT(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
var jT = (e) => e.hasAttribute("tabindex");
function NT(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Jy(e) {
  return e.parentElement && Jy(e.parentElement) ? !0 : e.hidden;
}
function DT(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function $T(e) {
  if (!IT(e) || Jy(e) || NT(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : DT(e) ? !0 : jT(e);
}
var BT = [
    "input:not(:disabled):not([disabled])",
    "select:not(:disabled):not([disabled])",
    "textarea:not(:disabled):not([disabled])",
    "embed",
    "iframe",
    "object",
    "a[href]",
    "area[href]",
    "button:not(:disabled):not([disabled])",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    "*[tabindex]:not([aria-disabled])",
    "*[contenteditable]",
  ],
  zT = BT.join(),
  HT = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function WT(e) {
  const t = Array.from(e.querySelectorAll(zT));
  return t.unshift(e), t.filter((n) => $T(n) && HT(n));
}
var Nh,
  UT = (Nh = Gc.default) != null ? Nh : Gc,
  e2 = (e) => {
    const {
        initialFocusRef: t,
        finalFocusRef: n,
        contentRef: r,
        restoreFocus: o,
        children: i,
        isDisabled: a,
        autoFocus: s,
        persistentFocus: l,
        lockFocusAcrossFrames: u,
      } = e,
      c = w.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : r != null &&
            r.current &&
            WT(r.current).length === 0 &&
            requestAnimationFrame(() => {
              var S;
              (S = r.current) == null || S.focus();
            });
      }, [t, r]),
      d = w.useCallback(() => {
        var h;
        (h = n == null ? void 0 : n.current) == null || h.focus();
      }, [n]),
      f = o && !n;
    return M.jsx(UT, {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i,
    });
  };
e2.displayName = "FocusLock";
var ZT = xx ? w.useLayoutEffect : w.useEffect;
function Dh(e, t = []) {
  const n = w.useRef(e);
  return (
    ZT(() => {
      n.current = e;
    }),
    w.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function GT(e, t) {
  const n = w.useId();
  return w.useMemo(() => e || [t, n].filter(Boolean).join("-"), [e, t, n]);
}
function KT(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function YT(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = Dh(n),
    a = Dh(t),
    [s, l] = w.useState(e.defaultIsOpen || !1),
    [u, c] = KT(r, s),
    d = GT(o, "disclosure"),
    f = w.useCallback(() => {
      u || l(!1), a == null || a();
    }, [u, a]),
    h = w.useCallback(() => {
      u || l(!0), i == null || i();
    }, [u, i]),
    S = w.useCallback(() => {
      (c ? f : h)();
    }, [c, h, f]);
  return {
    isOpen: !!c,
    onOpen: h,
    onClose: f,
    onToggle: S,
    isControlled: u,
    getButtonProps: (v = {}) => ({
      ...v,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: Ax(v.onClick, S),
    }),
    getDisclosureProps: (v = {}) => ({ ...v, hidden: !c, id: d }),
  };
}
var t2 = bt(function (t, n) {
  const {
      borderLeftWidth: r,
      borderBottomWidth: o,
      borderTopWidth: i,
      borderRightWidth: a,
      borderWidth: s,
      borderStyle: l,
      borderColor: u,
      ...c
    } = rf("Divider", t),
    { className: d, orientation: f = "horizontal", __css: h, ...S } = Oi(t),
    v = {
      vertical: { borderLeftWidth: r || a || s || "1px", height: "100%" },
      horizontal: { borderBottomWidth: o || i || s || "1px", width: "100%" },
    };
  return M.jsx(_e.hr, {
    ref: n,
    "aria-orientation": f,
    ...S,
    __css: { ...c, border: "0", borderColor: u, borderStyle: l, ...v[f], ...h },
    className: Ue("chakra-divider", d),
  });
});
t2.displayName = "Divider";
var XT = {
    slideInBottom: { ...No, custom: { offsetY: 16, reverse: !0 } },
    slideInRight: { ...No, custom: { offsetX: 16, reverse: !0 } },
    slideInTop: { ...No, custom: { offsetY: -16, reverse: !0 } },
    slideInLeft: { ...No, custom: { offsetX: -16, reverse: !0 } },
    scale: { ...Cy, custom: { initialScale: 0.95, reverse: !0 } },
    none: {},
  },
  QT = _e(ji.section),
  qT = (e) => XT[e || "none"],
  n2 = w.forwardRef((e, t) => {
    const { preset: n, motionProps: r = qT(n), ...o } = e;
    return M.jsx(QT, { ref: t, ...r, ...o });
  });
n2.displayName = "ModalTransition";
var JT = Object.defineProperty,
  eb = (e, t, n) =>
    t in e
      ? JT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  tb = (e, t, n) => (eb(e, typeof t != "symbol" ? t + "" : t, n), n),
  nb = class {
    constructor() {
      tb(this, "modals"), (this.modals = new Map());
    }
    add(e) {
      return this.modals.set(e, this.modals.size + 1), this.modals.size;
    }
    remove(e) {
      this.modals.delete(e);
    }
    isTopModal(e) {
      return e ? this.modals.get(e) === this.modals.size : !1;
    }
  },
  Kc = new nb();
function r2(e, t) {
  const [n, r] = w.useState(0);
  return (
    w.useEffect(() => {
      const o = e.current;
      if (o) {
        if (t) {
          const i = Kc.add(o);
          r(i);
        }
        return () => {
          Kc.remove(o), r(0);
        };
      }
    }, [t, e]),
    n
  );
}
var rb = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Pr = new WeakMap(),
  va = new WeakMap(),
  ya = {},
  Cu = 0,
  o2 = function (e) {
    return e && (e.host || o2(e.parentNode));
  },
  ob = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = o2(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  ib = function (e, t, n, r) {
    var o = ob(t, Array.isArray(e) ? e : [e]);
    ya[n] || (ya[n] = new WeakMap());
    var i = ya[n],
      a = [],
      s = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || s.has(d) || (s.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (s.has(f)) c(f);
          else {
            var h = f.getAttribute(r),
              S = h !== null && h !== "false",
              v = (Pr.get(f) || 0) + 1,
              k = (i.get(f) || 0) + 1;
            Pr.set(f, v),
              i.set(f, k),
              a.push(f),
              v === 1 && S && va.set(f, !0),
              k === 1 && f.setAttribute(n, "true"),
              S || f.setAttribute(r, "true");
          }
        });
    };
    return (
      c(t),
      s.clear(),
      Cu++,
      function () {
        a.forEach(function (d) {
          var f = Pr.get(d) - 1,
            h = i.get(d) - 1;
          Pr.set(d, f),
            i.set(d, h),
            f || (va.has(d) || d.removeAttribute(r), va.delete(d)),
            h || d.removeAttribute(n);
        }),
          Cu--,
          Cu ||
            ((Pr = new WeakMap()),
            (Pr = new WeakMap()),
            (va = new WeakMap()),
            (ya = {}));
      }
    );
  },
  ab = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || rb(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        ib(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
function sb(e) {
  const {
      isOpen: t,
      onClose: n,
      id: r,
      closeOnOverlayClick: o = !0,
      closeOnEsc: i = !0,
      useInert: a = !0,
      onOverlayClick: s,
      onEsc: l,
    } = e,
    u = w.useRef(null),
    c = w.useRef(null),
    [d, f, h] = ub(
      r,
      "chakra-modal",
      "chakra-modal--header",
      "chakra-modal--body"
    );
  lb(u, t && a);
  const S = r2(u, t),
    v = w.useRef(null),
    k = w.useCallback((L) => {
      v.current = L.target;
    }, []),
    g = w.useCallback(
      (L) => {
        L.key === "Escape" &&
          (L.stopPropagation(), i && (n == null || n()), l == null || l());
      },
      [i, n, l]
    ),
    [p, m] = w.useState(!1),
    [E, T] = w.useState(!1),
    R = w.useCallback(
      (L = {}, j = null) => ({
        role: "dialog",
        ...L,
        ref: ki(j, u),
        id: d,
        tabIndex: -1,
        "aria-modal": !0,
        "aria-labelledby": p ? f : void 0,
        "aria-describedby": E ? h : void 0,
        onClick: Dr(L.onClick, (q) => q.stopPropagation()),
      }),
      [h, E, d, f, p]
    ),
    A = w.useCallback(
      (L) => {
        L.stopPropagation(),
          v.current === L.target &&
            Kc.isTopModal(u.current) &&
            (o && (n == null || n()), s == null || s());
      },
      [n, o, s]
    ),
    _ = w.useCallback(
      (L = {}, j = null) => ({
        ...L,
        ref: ki(j, c),
        onClick: Dr(L.onClick, A),
        onKeyDown: Dr(L.onKeyDown, g),
        onMouseDown: Dr(L.onMouseDown, k),
      }),
      [g, k, A]
    );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: h,
    setBodyMounted: T,
    setHeaderMounted: m,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: R,
    getDialogContainerProps: _,
    index: S,
  };
}
function lb(e, t) {
  const n = e.current;
  w.useEffect(() => {
    if (!(!e.current || !t)) return ab(e.current);
  }, [t, e, n]);
}
function ub(e, ...t) {
  const n = w.useId(),
    r = e || n;
  return w.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [cb, Ni] = yr({
    name: "ModalStylesContext",
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [db, po] = yr({
    strict: !0,
    name: "ModalContext",
    errorMessage:
      "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
  }),
  i2 = (e) => {
    const t = {
        scrollBehavior: "outside",
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: "scale",
        lockFocusAcrossFrames: !0,
        ...e,
      },
      {
        portalProps: n,
        children: r,
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: h,
        onCloseComplete: S,
      } = t,
      v = of("Modal", t),
      g = {
        ...sb(t),
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: a,
        finalFocusRef: s,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: h,
      };
    return M.jsx(db, {
      value: g,
      children: M.jsx(cb, {
        value: v,
        children: M.jsx(hl, {
          onExitComplete: S,
          children: g.isOpen && M.jsx(ol, { ...n, children: r }),
        }),
      }),
    });
  };
i2.displayName = "Modal";
var $a = "right-scroll-bar-position",
  Ba = "width-before-scroll-bar",
  fb = "with-scroll-bars-hidden",
  pb = "--removed-body-scroll-bar-size",
  a2 = _y(),
  Pu = function () {},
  gl = w.forwardRef(function (e, t) {
    var n = w.useRef(null),
      r = w.useState({
        onScrollCapture: Pu,
        onWheelCapture: Pu,
        onTouchMoveCapture: Pu,
      }),
      o = r[0],
      i = r[1],
      a = e.forwardProps,
      s = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      h = e.noIsolation,
      S = e.inert,
      v = e.allowPinchZoom,
      k = e.as,
      g = k === void 0 ? "div" : k,
      p = e.gapMode,
      m = by(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      E = f,
      T = Ty([n, t]),
      R = Gt(Gt({}, m), o);
    return w.createElement(
      w.Fragment,
      null,
      c &&
        w.createElement(E, {
          sideCar: a2,
          removeScrollBar: u,
          shards: d,
          noIsolation: h,
          inert: S,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: p,
        }),
      a
        ? w.cloneElement(w.Children.only(s), Gt(Gt({}, R), { ref: T }))
        : w.createElement(g, Gt({}, R, { className: l, ref: T }), s)
    );
  });
gl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
gl.classNames = { fullWidth: Ba, zeroRight: $a };
var hb = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function mb() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = hb();
  return t && e.setAttribute("nonce", t), e;
}
function gb(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function vb(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yb = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = mb()) && (gb(t, n), vb(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Sb = function () {
    var e = yb();
    return function (t, n) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  s2 = function () {
    var e = Sb(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  wb = { left: 0, top: 0, right: 0, gap: 0 },
  Eu = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  xb = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Eu(n), Eu(r), Eu(o)];
  },
  kb = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return wb;
    var t = xb(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Cb = s2(),
  Pb = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      a = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          fb,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          $a,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Ba,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat($a, " .")
        .concat(
          $a,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ba, " .")
        .concat(
          Ba,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(pb, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  Eb = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      i = w.useMemo(
        function () {
          return kb(o);
        },
        [o]
      );
    return w.createElement(Cb, { styles: Pb(i, !t, o, n ? "" : "!important") });
  },
  Yc = !1;
if (typeof window < "u")
  try {
    var Sa = Object.defineProperty({}, "passive", {
      get: function () {
        return (Yc = !0), !0;
      },
    });
    window.addEventListener("test", Sa, Sa),
      window.removeEventListener("test", Sa, Sa);
  } catch {
    Yc = !1;
  }
var Er = Yc ? { passive: !1 } : !1,
  Tb = function (e) {
    return e.tagName === "TEXTAREA";
  },
  l2 = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Tb(e) && n[t] === "visible")
    );
  },
  bb = function (e) {
    return l2(e, "overflowY");
  },
  Ab = function (e) {
    return l2(e, "overflowX");
  },
  $h = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = u2(e, r);
      if (o) {
        var i = c2(e, r),
          a = i[1],
          s = i[2];
        if (a > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Mb = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  _b = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  u2 = function (e, t) {
    return e === "v" ? bb(t) : Ab(t);
  },
  c2 = function (e, t) {
    return e === "v" ? Mb(t) : _b(t);
  },
  Rb = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Ob = function (e, t, n, r, o) {
    var i = Rb(e, window.getComputedStyle(t).direction),
      a = i * r,
      s = n.target,
      l = t.contains(s),
      u = !1,
      c = a > 0,
      d = 0,
      f = 0;
    do {
      var h = c2(e, s),
        S = h[0],
        v = h[1],
        k = h[2],
        g = v - k - i * S;
      (S || g) && u2(e, s) && ((d += g), (f += S)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
    } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
    return (
      ((c && ((o && Math.abs(d) < 1) || (!o && a > d))) ||
        (!c && ((o && Math.abs(f) < 1) || (!o && -a > f)))) &&
        (u = !0),
      u
    );
  },
  wa = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Bh = function (e) {
    return [e.deltaX, e.deltaY];
  },
  zh = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Lb = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Fb = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Vb = 0,
  Tr = [];
function Ib(e) {
  var t = w.useRef([]),
    n = w.useRef([0, 0]),
    r = w.useRef(),
    o = w.useState(Vb++)[0],
    i = w.useState(s2)[0],
    a = w.useRef(e);
  w.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = FE([e.lockRef.current], (e.shards || []).map(zh), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (k) {
              return k.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (k) {
                  return k.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = w.useCallback(function (v, k) {
      if ("touches" in v && v.touches.length === 2)
        return !a.current.allowPinchZoom;
      var g = wa(v),
        p = n.current,
        m = "deltaX" in v ? v.deltaX : p[0] - g[0],
        E = "deltaY" in v ? v.deltaY : p[1] - g[1],
        T,
        R = v.target,
        A = Math.abs(m) > Math.abs(E) ? "h" : "v";
      if ("touches" in v && A === "h" && R.type === "range") return !1;
      var _ = $h(A, R);
      if (!_) return !0;
      if ((_ ? (T = A) : ((T = A === "v" ? "h" : "v"), (_ = $h(A, R))), !_))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (m || E) && (r.current = T), !T)
      )
        return !0;
      var L = r.current || T;
      return Ob(L, k, v, L === "h" ? m : E, !0);
    }, []),
    l = w.useCallback(function (v) {
      var k = v;
      if (!(!Tr.length || Tr[Tr.length - 1] !== i)) {
        var g = "deltaY" in k ? Bh(k) : wa(k),
          p = t.current.filter(function (T) {
            return (
              T.name === k.type &&
              (T.target === k.target || k.target === T.shadowParent) &&
              Lb(T.delta, g)
            );
          })[0];
        if (p && p.should) {
          k.cancelable && k.preventDefault();
          return;
        }
        if (!p) {
          var m = (a.current.shards || [])
              .map(zh)
              .filter(Boolean)
              .filter(function (T) {
                return T.contains(k.target);
              }),
            E = m.length > 0 ? s(k, m[0]) : !a.current.noIsolation;
          E && k.cancelable && k.preventDefault();
        }
      }
    }, []),
    u = w.useCallback(function (v, k, g, p) {
      var m = { name: v, delta: k, target: g, should: p, shadowParent: jb(g) };
      t.current.push(m),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== m;
          });
        }, 1);
    }, []),
    c = w.useCallback(function (v) {
      (n.current = wa(v)), (r.current = void 0);
    }, []),
    d = w.useCallback(function (v) {
      u(v.type, Bh(v), v.target, s(v, e.lockRef.current));
    }, []),
    f = w.useCallback(function (v) {
      u(v.type, wa(v), v.target, s(v, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      Tr.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, Er),
      document.addEventListener("touchmove", l, Er),
      document.addEventListener("touchstart", c, Er),
      function () {
        (Tr = Tr.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", l, Er),
          document.removeEventListener("touchmove", l, Er),
          document.removeEventListener("touchstart", c, Er);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    S = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    S ? w.createElement(i, { styles: Fb(o) }) : null,
    h ? w.createElement(Eb, { gapMode: e.gapMode }) : null
  );
}
function jb(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Nb = VE(a2, Ib);
var d2 = w.forwardRef(function (e, t) {
  return w.createElement(gl, Gt({}, e, { ref: t, sideCar: Nb }));
});
d2.classNames = gl.classNames;
const Db = d2;
function $b(e) {
  const {
      autoFocus: t,
      trapFocus: n,
      dialogRef: r,
      initialFocusRef: o,
      blockScrollOnMount: i,
      allowPinchZoom: a,
      finalFocusRef: s,
      returnFocusOnClose: l,
      preserveScrollBarGap: u,
      lockFocusAcrossFrames: c,
      isOpen: d,
    } = po(),
    [f, h] = sy();
  w.useEffect(() => {
    !f && h && setTimeout(h);
  }, [f, h]);
  const S = r2(r, d);
  return M.jsx(e2, {
    autoFocus: t,
    isDisabled: !n,
    initialFocusRef: o,
    finalFocusRef: s,
    restoreFocus: l,
    contentRef: r,
    lockFocusAcrossFrames: c,
    children: M.jsx(Db, {
      removeScrollBar: !u,
      allowPinchZoom: a,
      enabled: S === 1 && i,
      forwardProps: !0,
      children: e.children,
    }),
  });
}
var f2 = bt((e, t) => {
  const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e,
    { getDialogProps: s, getDialogContainerProps: l } = po(),
    u = s(a, t),
    c = l(o),
    d = Ue("chakra-modal__content", n),
    f = Ni(),
    h = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog,
    },
    S = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer,
    },
    { motionPreset: v } = po();
  return M.jsx($b, {
    children: M.jsx(_e.div, {
      ...c,
      className: "chakra-modal__content-container",
      tabIndex: -1,
      __css: S,
      children: M.jsx(n2, {
        preset: v,
        motionProps: i,
        className: d,
        ...u,
        __css: h,
        children: r,
      }),
    }),
  });
});
f2.displayName = "ModalContent";
var p2 = bt((e, t) => {
  const { className: n, ...r } = e,
    o = Ue("chakra-modal__footer", n),
    a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Ni().footer,
    };
  return M.jsx(_e.footer, { ref: t, ...r, __css: a, className: o });
});
p2.displayName = "ModalFooter";
var h2 = bt((e, t) => {
  const { className: n, ...r } = e,
    { headerId: o, setHeaderMounted: i } = po();
  w.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = Ue("chakra-modal__header", n),
    l = { flex: 0, ...Ni().header };
  return M.jsx(_e.header, { ref: t, className: a, id: o, ...r, __css: l });
});
h2.displayName = "ModalHeader";
var Bb = _e(ji.div),
  m2 = bt((e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e,
      a = Ue("chakra-modal__overlay", n),
      l = {
        pos: "fixed",
        left: "0",
        top: "0",
        w: "100vw",
        h: "100vh",
        ...Ni().overlay,
      },
      { motionPreset: u } = po(),
      d = o || (u === "none" ? {} : ky);
    return M.jsx(Bb, { ...d, __css: l, ref: t, className: a, ...i });
  });
m2.displayName = "ModalOverlay";
var g2 = bt((e, t) => {
  const { className: n, ...r } = e,
    { bodyId: o, setBodyMounted: i } = po();
  w.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = Ue("chakra-modal__body", n),
    s = Ni();
  return M.jsx(_e.div, { ref: t, className: a, id: o, ...r, __css: s.body });
});
g2.displayName = "ModalBody";
var v2 = bt(function (t, n) {
  const { children: r, placeholder: o, className: i, ...a } = t;
  return M.jsxs(_e.select, {
    ...a,
    ref: n,
    className: Ue("chakra-select", i),
    children: [o && M.jsx("option", { value: "", children: o }), r],
  });
});
v2.displayName = "SelectField";
function zb(e, t) {
  const n = {},
    r = {};
  for (const [o, i] of Object.entries(e))
    t.includes(o) ? (n[o] = i) : (r[o] = i);
  return [n, r];
}
var Xc = bt((e, t) => {
  var n;
  const r = of("Select", e),
    {
      rootProps: o,
      placeholder: i,
      icon: a,
      color: s,
      height: l,
      h: u,
      minH: c,
      minHeight: d,
      iconColor: f,
      iconSize: h,
      ...S
    } = Oi(e),
    [v, k] = zb(S, ix),
    g = bE(k),
    p = {
      width: "100%",
      height: "fit-content",
      position: "relative",
      color: s,
    },
    m = {
      paddingEnd: "2rem",
      ...r.field,
      _focus: {
        zIndex: "unset",
        ...((n = r.field) == null ? void 0 : n._focus),
      },
    };
  return M.jsxs(_e.div, {
    className: "chakra-select__wrapper",
    __css: p,
    ...v,
    ...o,
    children: [
      M.jsx(v2, {
        ref: t,
        height: u ?? l,
        minH: c ?? d,
        placeholder: i,
        ...g,
        __css: m,
        children: e.children,
      }),
      M.jsx(y2, {
        "data-disabled": Rt(g.disabled),
        ...((f || s) && { color: f || s }),
        __css: r.icon,
        ...(h && { fontSize: h }),
        children: a,
      }),
    ],
  });
});
Xc.displayName = "Select";
var Hb = (e) =>
    M.jsx("svg", {
      viewBox: "0 0 24 24",
      ...e,
      children: M.jsx("path", {
        fill: "currentColor",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      }),
    }),
  Wb = _e("div", {
    baseStyle: {
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }),
  y2 = (e) => {
    const { children: t = M.jsx(Hb, {}), ...n } = e,
      r = w.cloneElement(t, {
        role: "presentation",
        className: "chakra-select__icon",
        focusable: !1,
        "aria-hidden": !0,
        style: { width: "1em", height: "1em", color: "currentColor" },
      });
    return M.jsx(Wb, {
      ...n,
      className: "chakra-select__icon-wrapper",
      children: w.isValidElement(t) ? r : null,
    });
  };
y2.displayName = "SelectIcon";
function Ub() {
  return M.jsxs("header", {
    className: "_header",
    children: [
      M.jsx("a", {
        href: "https://catsflow.com/?target=toolkit-metatags",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Cat's Flow",
        children: M.jsx("img", {
          src: "/config/assets/logo.svg",
          alt: "Logo da Cat's Flow",
        }),
      }),
      M.jsx(t2, { orientation: "vertical" }),
      M.jsx("h1", { children: "MetaTags ToolKit" }),
    ],
  });
}
const Zb = w.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1,
});
var Gb = Object.defineProperty,
  As = Object.getOwnPropertySymbols,
  S2 = Object.prototype.hasOwnProperty,
  w2 = Object.prototype.propertyIsEnumerable,
  Hh = (e, t, n) =>
    t in e
      ? Gb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Wh = (e, t) => {
    for (var n in t || (t = {})) S2.call(t, n) && Hh(e, n, t[n]);
    if (As) for (var n of As(t)) w2.call(t, n) && Hh(e, n, t[n]);
    return e;
  },
  Uh = (e, t) => {
    var n = {};
    for (var r in e) S2.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && As)
      for (var r of As(e)) t.indexOf(r) < 0 && w2.call(e, r) && (n[r] = e[r]);
    return n;
  };
const jt = w.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: o,
      size: i,
      weight: a,
      mirrored: s,
      children: l,
      weights: u,
    } = n,
    c = Uh(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    d = w.useContext(Zb),
    {
      color: f = "currentColor",
      size: h,
      weight: S = "regular",
      mirrored: v = !1,
    } = d,
    k = Uh(d, ["color", "size", "weight", "mirrored"]);
  return x.createElement(
    "svg",
    Wh(
      Wh(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: i ?? h,
          height: i ?? h,
          fill: o ?? f,
          viewBox: "0 0 256 256",
          transform: s || v ? "scale(-1, 1)" : void 0,
        },
        k
      ),
      c
    ),
    !!r && x.createElement("title", null, r),
    l,
    u.get(a ?? S)
  );
});
jt.displayName = "IconBase";
const Kb = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M240,128l-48,40H64L16,128,64,88H192Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z",
        })
      ),
    ],
  ]),
  Yb = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M228,64a36,36,0,1,0-48,33.94V104a12,12,0,0,1-12,12H96a35.88,35.88,0,0,0-12,2.06V97.94a36,36,0,1,0-24,0v60.12a36,36,0,1,0,24,0V152a12,12,0,0,1,12-12h72a36,36,0,0,0,36-36V97.94A36.07,36.07,0,0,0,228,64ZM72,52A12,12,0,1,1,60,64,12,12,0,0,1,72,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,72,204ZM192,76a12,12,0,1,1,12-12A12,12,0,0,1,192,76Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M216,64a24,24,0,1,1-24-24A24,24,0,0,1,216,64Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M222,64a30,30,0,1,0-36,29.4V104a18,18,0,0,1-18,18H96a29.82,29.82,0,0,0-18,6V93.4a30,30,0,1,0-12,0v69.2a30,30,0,1,0,12,0V152a18,18,0,0,1,18-18h72a30,30,0,0,0,30-30V93.4A30.05,30.05,0,0,0,222,64ZM54,64A18,18,0,1,1,72,82,18,18,0,0,1,54,64ZM90,192a18,18,0,1,1-18-18A18,18,0,0,1,90,192ZM192,82a18,18,0,1,1,18-18A18,18,0,0,1,192,82Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M220,64a28,28,0,1,0-32,27.71V104a20,20,0,0,1-20,20H96a27.9,27.9,0,0,0-20,8.43V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V152a20,20,0,0,1,20-20h72a28,28,0,0,0,28-28V91.71A28,28,0,0,0,220,64ZM52,64A20,20,0,1,1,72,84,20,20,0,0,1,52,64ZM92,192a20,20,0,1,1-20-20A20,20,0,0,1,92,192ZM192,84a20,20,0,1,1,20-20A20,20,0,0,1,192,84Z",
        })
      ),
    ],
  ]),
  Xb = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M160,12A84.05,84.05,0,0,0,79.38,119.65L23.51,175.51A12,12,0,0,0,20,184v40a12,12,0,0,0,12,12H72a12,12,0,0,0,12-12V212H96a12,12,0,0,0,12-12V188h12a12,12,0,0,0,8.49-3.51l7.86-7.87A84,84,0,1,0,160,12Zm0,144a59.58,59.58,0,0,1-22.1-4.2,12,12,0,0,0-13.22,2.55L115,164H96a12,12,0,0,0-12,12v12H72a12,12,0,0,0-12,12v12H44V189l57.65-57.65a12,12,0,0,0,2.55-13.21A60,60,0,1,1,160,156Zm36-80a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M232,96a72,72,0,0,1-98.83,66.83h0L120,176H96v24H72v24H32V184l61.17-61.17h0A72,72,0,1,1,232,96Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M160,18A78.05,78.05,0,0,0,86.2,121.31L27.76,179.76A6,6,0,0,0,26,184v40a6,6,0,0,0,6,6H72a6,6,0,0,0,6-6V206H96a6,6,0,0,0,6-6V182h18a6,6,0,0,0,4.24-1.76l10.45-10.44A78,78,0,1,0,160,18Zm0,144a65.63,65.63,0,0,1-24.43-4.67,6,6,0,0,0-6.64,1.26L117.51,170H96a6,6,0,0,0-6,6v18H72a6,6,0,0,0-6,6v18H38V186.49l59.41-59.42a6,6,0,0,0,1.26-6.64A66,66,0,1,1,160,162Zm30-86a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M160,20A76,76,0,0,0,88.51,121.84L29.17,181.17A4,4,0,0,0,28,184v40a4,4,0,0,0,4,4H72a4,4,0,0,0,4-4V204H96a4,4,0,0,0,4-4V180h20a4,4,0,0,0,2.83-1.17l11.33-11.34A76,76,0,1,0,160,20Zm0,144a67.52,67.52,0,0,1-25.21-4.83,4,4,0,0,0-4.45.83l-12,12H96a4,4,0,0,0-4,4v20H72a4,4,0,0,0-4,4v20H36V185.66l60-60a4,4,0,0,0,.83-4.45A68,68,0,1,1,160,164Zm28-88a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z",
        })
      ),
    ],
  ]),
  Qb = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M87.5,151.52l64-64a12,12,0,0,1,17,17l-64,64a12,12,0,0,1-17-17Zm131-114a60.08,60.08,0,0,0-84.87,0L103.51,67.61a12,12,0,0,0,17,17l30.07-30.06a36,36,0,0,1,50.93,50.92L171.4,135.52a12,12,0,1,0,17,17l30.08-30.06A60.09,60.09,0,0,0,218.45,37.55ZM135.52,171.4l-30.07,30.08a36,36,0,0,1-50.92-50.93l30.06-30.07a12,12,0,0,0-17-17L37.55,133.58a60,60,0,0,0,84.88,84.87l30.06-30.07a12,12,0,0,0-17-17Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M209.94,113.94l-96,96a48,48,0,0,1-67.88-67.88l96-96a48,48,0,0,1,67.88,67.88Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM144.56,173.66l-21.45,21.45a44,44,0,0,1-62.22-62.22l21.45-21.46a8,8,0,0,1,11.32,11.31L72.2,144.2a28,28,0,0,0,39.6,39.6l21.45-21.46a8,8,0,0,1,11.31,11.32Zm-34.9-16a8,8,0,0,1-11.32-11.32l48-48a8,8,0,0,1,11.32,11.32Zm85.45-34.55-21.45,21.45a8,8,0,0,1-11.32-11.31L183.8,111.8a28,28,0,0,0-39.6-39.6L122.74,93.66a8,8,0,0,1-11.31-11.32l21.46-21.45a44,44,0,0,1,62.22,62.22Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M164.25,91.75a6,6,0,0,1,0,8.49l-64,64a6,6,0,0,1-8.49-8.48l64-64A6,6,0,0,1,164.25,91.75ZM214.2,41.8a54.07,54.07,0,0,0-76.38,0L107.75,71.85a6,6,0,0,0,8.49,8.49l30.07-30.06a42,42,0,0,1,59.41,59.41l-30.08,30.07a6,6,0,1,0,8.49,8.49l30.07-30.07A54,54,0,0,0,214.2,41.8ZM139.76,175.64l-30.07,30.08a42,42,0,0,1-59.41-59.41l30.06-30.07a6,6,0,0,0-8.49-8.49l-30,30.07a54,54,0,0,0,76.38,76.39l30.07-30.08a6,6,0,0,0-8.49-8.49Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M162.84,93.16a4,4,0,0,1,0,5.66l-64,64a4,4,0,0,1-5.66-5.66l64-64A4,4,0,0,1,162.84,93.16Zm49.95-49.95a52.07,52.07,0,0,0-73.56,0L109.17,73.27a4,4,0,0,0,5.65,5.66l30.07-30.06a44,44,0,0,1,62.24,62.24l-30.07,30.06a4,4,0,0,0,5.66,5.66l30.07-30.06A52.07,52.07,0,0,0,212.79,43.21ZM141.17,177.06l-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z",
        })
      ),
    ],
  ]),
  qb = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M200,44H140V16a12,12,0,0,0-24,0V44H56A36,36,0,0,0,20,80V192a36,36,0,0,0,36,36H200a36,36,0,0,0,36-36V80A36,36,0,0,0,200,44Zm12,148a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V80A12,12,0,0,1,56,68H200a12,12,0,0,1,12,12Zm-48-64H92a32,32,0,0,0,0,64h72a32,32,0,0,0,0-64Zm-28,24v16H120V152Zm-52,8a8,8,0,0,1,8-8h4v16H92A8,8,0,0,1,84,160Zm80,8h-4V152h4a8,8,0,0,1,0,16ZM68,100a16,16,0,1,1,16,16A16,16,0,0,1,68,100Zm88,0a16,16,0,1,1,16,16A16,16,0,0,1,156,100Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M200,56H56A24,24,0,0,0,32,80V192a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56ZM164,184H92a20,20,0,0,1,0-40h72a20,20,0,0,1,0,40Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M200,50H134V16a6,6,0,0,0-12,0V50H56A30,30,0,0,0,26,80V192a30,30,0,0,0,30,30H200a30,30,0,0,0,30-30V80A30,30,0,0,0,200,50Zm18,142a18,18,0,0,1-18,18H56a18,18,0,0,1-18-18V80A18,18,0,0,1,56,62H200a18,18,0,0,1,18,18Zm-54-54H92a26,26,0,0,0,0,52h72a26,26,0,0,0,0-52Zm-26,12v28H118V150ZM78,164a14,14,0,0,1,14-14h14v28H92A14,14,0,0,1,78,164Zm86,14H150V150h14a14,14,0,0,1,0,28ZM74,108a10,10,0,1,1,10,10A10,10,0,0,1,74,108Zm88,0a10,10,0,1,1,10,10A10,10,0,0,1,162,108Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M200,52H132V16a4,4,0,0,0-8,0V52H56A28,28,0,0,0,28,80V192a28,28,0,0,0,28,28H200a28,28,0,0,0,28-28V80A28,28,0,0,0,200,52Zm20,140a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V80A20,20,0,0,1,56,60H200a20,20,0,0,1,20,20Zm-56-52H92a24,24,0,0,0,0,48h72a24,24,0,0,0,0-48Zm-24,8v32H116V148ZM76,164a16,16,0,0,1,16-16h16v32H92A16,16,0,0,1,76,164Zm88,16H148V148h16a16,16,0,0,1,0,32ZM76,108a8,8,0,1,1,8,8A8,8,0,0,1,76,108Zm88,0a8,8,0,1,1,8,8A8,8,0,0,1,164,108Z",
        })
      ),
    ],
  ]),
  Jb = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M216,64V176a8,8,0,0,1-8,8H40V64Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M224,64v8a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64ZM40,120H168a8,8,0,0,0,8-8v-8a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8v8A8,8,0,0,0,40,120Zm176,16H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,136Zm-48,40H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8v-8A8,8,0,0,0,168,176Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z",
        })
      ),
    ],
  ]),
  e5 = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M212,56V88a12,12,0,0,1-24,0V68H140V188h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V68H68V88a12,12,0,0,1-24,0V56A12,12,0,0,1,56,44H200A12,12,0,0,1,212,56Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M200,56V192a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,96a8,8,0,0,1-16,0V88H136v88h16a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16h16V88H88v8a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M206,56V88a6,6,0,0,1-12,0V62H134V194h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V62H62V88a6,6,0,0,1-12,0V56a6,6,0,0,1,6-6H200A6,6,0,0,1,206,56Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M204,56V88a4,4,0,0,1-8,0V60H132V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,4-4H200A4,4,0,0,1,204,56Z",
        })
      ),
    ],
  ]),
  t5 = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M242.73,210.63l-56-112a12,12,0,0,0-21.46,0l-20.52,41A84.2,84.2,0,0,1,106,126.22,107.48,107.48,0,0,0,131.33,68H152a12,12,0,0,0,0-24H100V32a12,12,0,0,0-24,0V44H24a12,12,0,0,0,0,24h83.13A83.69,83.69,0,0,1,88,110.35,84,84,0,0,1,75.6,91a12,12,0,1,0-21.81,10A107.55,107.55,0,0,0,70,126.24,83.54,83.54,0,0,1,24,140a12,12,0,0,0,0,24,107.47,107.47,0,0,0,64-21.07,108.4,108.4,0,0,0,45.39,19.44l-24.13,48.26a12,12,0,1,0,21.46,10.73L143.41,196h65.17l12.68,25.36a12,12,0,1,0,21.47-10.73ZM155.41,172,176,130.83,196.58,172Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M216,184H136l40-80ZM88,127.56h0A95.78,95.78,0,0,0,120,56H56A95.78,95.78,0,0,0,88,127.56Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M239.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,100,126.93,103.65,103.65,0,0,0,127.69,64H152a8,8,0,0,0,0-16H96V32a8,8,0,0,0-16,0V48H24a8,8,0,0,0,0,16h87.63A87.7,87.7,0,0,1,88,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,76,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L140.94,192h70.11l13.79,27.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM148.94,176,176,121.89,203.05,176Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M160,129.89,175.06,160H144.94l6.36-12.7v0ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM207.16,188.42l-40-80a8,8,0,0,0-14.32,0L139.66,134.8a62.31,62.31,0,0,1-23.61-10A79.61,79.61,0,0,0,135.6,80H152a8,8,0,0,0,0-16H112V56a8,8,0,0,0-16,0v8H56a8,8,0,0,0,0,16h63.48a63.73,63.73,0,0,1-15.3,34.05,65.93,65.93,0,0,1-9-13.61,8,8,0,0,0-14.32,7.12,81.75,81.75,0,0,0,11.4,17.15A63.62,63.62,0,0,1,56,136a8,8,0,0,0,0,16,79.56,79.56,0,0,0,48.11-16.13,78.33,78.33,0,0,0,28.18,13.66l-19.45,38.89a8,8,0,0,0,14.32,7.16L136.94,176h46.12l9.78,19.58a8,8,0,1,0,14.32-7.16Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M237.37,213.32l-56-112a6,6,0,0,0-10.74,0l-22.3,44.6A90,90,0,0,1,97,127.19,101.73,101.73,0,0,0,125.82,62H152a6,6,0,0,0,0-12H94V32a6,6,0,0,0-12,0V50H24a6,6,0,0,0,0,12h89.79A89.71,89.71,0,0,1,88,119.23,89.81,89.81,0,0,1,67.11,86,6,6,0,1,0,55.8,90,101.66,101.66,0,0,0,79,127.2,89.56,89.56,0,0,1,24,146a6,6,0,0,0,0,12,101.55,101.55,0,0,0,64-22.63,102.11,102.11,0,0,0,54.53,22.17l-27.89,55.78a6,6,0,0,0,10.74,5.36L139.71,190h72.58l14.34,28.68A6,6,0,0,0,232,222a5.87,5.87,0,0,0,2.68-.64A6,6,0,0,0,237.37,213.32ZM145.71,178,176,117.42,206.29,178Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M239.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,100,126.93,103.65,103.65,0,0,0,127.69,64H152a8,8,0,0,0,0-16H96V32a8,8,0,0,0-16,0V48H24a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,88,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,76,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L140.94,192h70.11l13.79,27.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM148.94,176,176,121.89,203.05,176Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M235.58,214.21l-56-112a4,4,0,0,0-7.16,0L149.55,148A92.05,92.05,0,0,1,94,127.36,99.68,99.68,0,0,0,123.91,60H152a4,4,0,0,0,0-8H92V32a4,4,0,0,0-8,0V52H24a4,4,0,0,0,0,8h91.91A91.8,91.8,0,0,1,88,122.05,92,92,0,0,1,65.23,86.67a4,4,0,1,0-7.54,2.66,99.59,99.59,0,0,0,24.3,38A91.59,91.59,0,0,1,24,148a4,4,0,0,0,0,8,99.54,99.54,0,0,0,64-23.21,100.09,100.09,0,0,0,57.66,23l-29.22,58.43a4,4,0,0,0,7.16,3.58L138.47,188h75.06l14.89,29.79A4,4,0,0,0,232,220a4.12,4.12,0,0,0,1.79-.42A4,4,0,0,0,235.58,214.21ZM142.47,180,176,112.94,209.53,180Z",
        })
      ),
    ],
  ]),
  n5 = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z",
        })
      ),
    ],
  ]),
  r5 = new Map([
    [
      "bold",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
        })
      ),
    ],
    [
      "duotone",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
          opacity: "0.2",
        }),
        x.createElement("path", {
          d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "fill",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "light",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
        })
      ),
    ],
    [
      "regular",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "thin",
      x.createElement(
        x.Fragment,
        null,
        x.createElement("path", {
          d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
        })
      ),
    ],
  ]);
var o5 = Object.defineProperty,
  i5 = Object.defineProperties,
  a5 = Object.getOwnPropertyDescriptors,
  Zh = Object.getOwnPropertySymbols,
  s5 = Object.prototype.hasOwnProperty,
  l5 = Object.prototype.propertyIsEnumerable,
  Gh = (e, t, n) =>
    t in e
      ? o5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  u5 = (e, t) => {
    for (var n in t || (t = {})) s5.call(t, n) && Gh(e, n, t[n]);
    if (Zh) for (var n of Zh(t)) l5.call(t, n) && Gh(e, n, t[n]);
    return e;
  },
  c5 = (e, t) => i5(e, a5(t));
const x2 = w.forwardRef((e, t) =>
  x.createElement(jt, c5(u5({ ref: t }, e), { weights: Kb }))
);
x2.displayName = "Code";
var d5 = Object.defineProperty,
  f5 = Object.defineProperties,
  p5 = Object.getOwnPropertyDescriptors,
  Kh = Object.getOwnPropertySymbols,
  h5 = Object.prototype.hasOwnProperty,
  m5 = Object.prototype.propertyIsEnumerable,
  Yh = (e, t, n) =>
    t in e
      ? d5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  g5 = (e, t) => {
    for (var n in t || (t = {})) h5.call(t, n) && Yh(e, n, t[n]);
    if (Kh) for (var n of Kh(t)) m5.call(t, n) && Yh(e, n, t[n]);
    return e;
  },
  v5 = (e, t) => f5(e, p5(t));
const k2 = w.forwardRef((e, t) =>
  x.createElement(jt, v5(g5({ ref: t }, e), { weights: Yb }))
);
k2.displayName = "GitBranch";
var y5 = Object.defineProperty,
  S5 = Object.defineProperties,
  w5 = Object.getOwnPropertyDescriptors,
  Xh = Object.getOwnPropertySymbols,
  x5 = Object.prototype.hasOwnProperty,
  k5 = Object.prototype.propertyIsEnumerable,
  Qh = (e, t, n) =>
    t in e
      ? y5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  C5 = (e, t) => {
    for (var n in t || (t = {})) x5.call(t, n) && Qh(e, n, t[n]);
    if (Xh) for (var n of Xh(t)) k5.call(t, n) && Qh(e, n, t[n]);
    return e;
  },
  P5 = (e, t) => S5(e, w5(t));
const C2 = w.forwardRef((e, t) =>
  x.createElement(jt, P5(C5({ ref: t }, e), { weights: Xb }))
);
C2.displayName = "Key";
var E5 = Object.defineProperty,
  T5 = Object.defineProperties,
  b5 = Object.getOwnPropertyDescriptors,
  qh = Object.getOwnPropertySymbols,
  A5 = Object.prototype.hasOwnProperty,
  M5 = Object.prototype.propertyIsEnumerable,
  Jh = (e, t, n) =>
    t in e
      ? E5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _5 = (e, t) => {
    for (var n in t || (t = {})) A5.call(t, n) && Jh(e, n, t[n]);
    if (qh) for (var n of qh(t)) M5.call(t, n) && Jh(e, n, t[n]);
    return e;
  },
  R5 = (e, t) => T5(e, b5(t));
const za = w.forwardRef((e, t) =>
  x.createElement(jt, R5(_5({ ref: t }, e), { weights: Qb }))
);
za.displayName = "LinkSimple";
var O5 = Object.defineProperty,
  L5 = Object.defineProperties,
  F5 = Object.getOwnPropertyDescriptors,
  em = Object.getOwnPropertySymbols,
  V5 = Object.prototype.hasOwnProperty,
  I5 = Object.prototype.propertyIsEnumerable,
  tm = (e, t, n) =>
    t in e
      ? O5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  j5 = (e, t) => {
    for (var n in t || (t = {})) V5.call(t, n) && tm(e, n, t[n]);
    if (em) for (var n of em(t)) I5.call(t, n) && tm(e, n, t[n]);
    return e;
  },
  N5 = (e, t) => L5(e, F5(t));
const P2 = w.forwardRef((e, t) =>
  x.createElement(jt, N5(j5({ ref: t }, e), { weights: qb }))
);
P2.displayName = "Robot";
var D5 = Object.defineProperty,
  $5 = Object.defineProperties,
  B5 = Object.getOwnPropertyDescriptors,
  nm = Object.getOwnPropertySymbols,
  z5 = Object.prototype.hasOwnProperty,
  H5 = Object.prototype.propertyIsEnumerable,
  rm = (e, t, n) =>
    t in e
      ? D5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  W5 = (e, t) => {
    for (var n in t || (t = {})) z5.call(t, n) && rm(e, n, t[n]);
    if (nm) for (var n of nm(t)) H5.call(t, n) && rm(e, n, t[n]);
    return e;
  },
  U5 = (e, t) => $5(e, B5(t));
const E2 = w.forwardRef((e, t) =>
  x.createElement(jt, U5(W5({ ref: t }, e), { weights: Jb }))
);
E2.displayName = "TextAlignLeft";
var Z5 = Object.defineProperty,
  G5 = Object.defineProperties,
  K5 = Object.getOwnPropertyDescriptors,
  om = Object.getOwnPropertySymbols,
  Y5 = Object.prototype.hasOwnProperty,
  X5 = Object.prototype.propertyIsEnumerable,
  im = (e, t, n) =>
    t in e
      ? Z5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Q5 = (e, t) => {
    for (var n in t || (t = {})) Y5.call(t, n) && im(e, n, t[n]);
    if (om) for (var n of om(t)) X5.call(t, n) && im(e, n, t[n]);
    return e;
  },
  q5 = (e, t) => G5(e, K5(t));
const T2 = w.forwardRef((e, t) =>
  x.createElement(jt, q5(Q5({ ref: t }, e), { weights: e5 }))
);
T2.displayName = "TextT";
var J5 = Object.defineProperty,
  eA = Object.defineProperties,
  tA = Object.getOwnPropertyDescriptors,
  am = Object.getOwnPropertySymbols,
  nA = Object.prototype.hasOwnProperty,
  rA = Object.prototype.propertyIsEnumerable,
  sm = (e, t, n) =>
    t in e
      ? J5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  oA = (e, t) => {
    for (var n in t || (t = {})) nA.call(t, n) && sm(e, n, t[n]);
    if (am) for (var n of am(t)) rA.call(t, n) && sm(e, n, t[n]);
    return e;
  },
  iA = (e, t) => eA(e, tA(t));
const b2 = w.forwardRef((e, t) =>
  x.createElement(jt, iA(oA({ ref: t }, e), { weights: t5 }))
);
b2.displayName = "Translate";
var aA = Object.defineProperty,
  sA = Object.defineProperties,
  lA = Object.getOwnPropertyDescriptors,
  lm = Object.getOwnPropertySymbols,
  uA = Object.prototype.hasOwnProperty,
  cA = Object.prototype.propertyIsEnumerable,
  um = (e, t, n) =>
    t in e
      ? aA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  dA = (e, t) => {
    for (var n in t || (t = {})) uA.call(t, n) && um(e, n, t[n]);
    if (lm) for (var n of lm(t)) cA.call(t, n) && um(e, n, t[n]);
    return e;
  },
  fA = (e, t) => sA(e, lA(t));
const A2 = w.forwardRef((e, t) =>
  x.createElement(jt, fA(dA({ ref: t }, e), { weights: n5 }))
);
A2.displayName = "User";
var pA = Object.defineProperty,
  hA = Object.defineProperties,
  mA = Object.getOwnPropertyDescriptors,
  cm = Object.getOwnPropertySymbols,
  gA = Object.prototype.hasOwnProperty,
  vA = Object.prototype.propertyIsEnumerable,
  dm = (e, t, n) =>
    t in e
      ? pA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  yA = (e, t) => {
    for (var n in t || (t = {})) gA.call(t, n) && dm(e, n, t[n]);
    if (cm) for (var n of cm(t)) vA.call(t, n) && dm(e, n, t[n]);
    return e;
  },
  SA = (e, t) => hA(e, mA(t));
const M2 = w.forwardRef((e, t) =>
  x.createElement(jt, SA(yA({ ref: t }, e), { weights: r5 }))
);
M2.displayName = "X";
function wA() {
  return M.jsxs("footer", {
    className: "_footer",
    children: [
      M.jsx("p", { children: "© 2024 Cat's Flow" }),
      M.jsxs("p", { className: "_git", children: [M.jsx(k2, {}), "B1.0.4"] }),
    ],
  });
}
function xA({ title: e, description: t, link: n }) {
  return M.jsxs(M.Fragment, {
    children: [
      M.jsx("h2", { children: "Veja em ação" }),
      M.jsxs("div", {
        className: "_cnt",
        children: [
          M.jsx("img", {
            src: "/config/assets/open-graph.png",
            alt: "Banner da Cat's Flow",
          }),
          M.jsxs("span", {
            className: "_text",
            children: [
              M.jsx("p", {
                className: "_href",
                children: n || "https://toolkit.catsflow.com/metatags/",
              }),
              M.jsx("h4", {
                children: e || "Cat's Flow - Seu gerador de Meta Tags",
              }),
              M.jsx("p", {
                className: "_dt",
                children:
                  t ||
                  "Otimize seu site para o sucesso online com nosso inovador Gerador de Meta Tags! Aumente a visibilidade, relevância e classificação nos motores de busca com facilidade. Crie meta tags personalizadas, títulos envolventes e descrições impactantes para atrair mais tráfego orgânico.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function kA() {
  const [e, t] = w.useState(""),
    [n, r] = w.useState(""),
    [o, i] = w.useState(""),
    [a, s] = w.useState(""),
    [l, u] = w.useState(""),
    [c, d] = w.useState(""),
    [f, h] = w.useState([]),
    [S, v] = w.useState(""),
    [k, g] = w.useState(""),
    [p, m] = w.useState(""),
    E = () => {
      const z = `
    <!-- Primary Meta Tags -->
    <meta charset="UTF-8">
    <meta name="language" content="${c}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>${n}</title>
    <meta name="title" content="${n}" />
    <meta name="description" content="${o}" />
    <meta name="robots" content="${f}" />
    <meta name="author" content="${a}" />
    <meta name="keywords" content="${l}" />
    
    <meta property="article:author" content="${a}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${e}" />
    <meta property="og:title" content="${n}" />
    <meta property="og:description" content="${o}" />
    <meta property="og:image" content="${e}/config/assets/open-graph.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${e}" />
    <meta name="twitter:site" content="${S}">
    <meta property="twitter:title" content="${n}" />
    <meta property="twitter:description" content="${o}" />
    <meta property="twitter:image" content="${e}/config/assets/open-graph.png" />
    
    <!-- Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${k}"><\/script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${k}');
    <\/script>
    
    <!-- Gerado por MetaTags ToolKit by Cat's Flow - https://cats-flow.github.io/metatags/ -->`;
      m(z);
    },
    T = () => {
      navigator.clipboard.writeText(p), console.log("Código copiado"), _();
    },
    { isOpen: R, onOpen: A, onClose: _ } = YT(),
    [L, j] = w.useState(""),
    q = () =>
      !e || !n || !o || !a || !l
        ? (j("Todos os campos obrigatórios devem ser preenchidos."), !1)
        : (j(""), !0),
    pe = () => {
      q() && (E(), A());
    };
  return M.jsxs("main", {
    className: "_main",
    children: [
      M.jsxs("section", {
        className: "_gerador",
        children: [
          M.jsxs("form", {
            className: "_data",
            onSubmit: (z) => {
              z.preventDefault(), E(), pe();
            },
            children: [
              M.jsx("h2", { children: "Informações da página" }),
              M.jsxs("section", {
                children: [
                  M.jsxs("label", {
                    htmlFor: "link",
                    className: "camp",
                    children: [
                      M.jsx(za, {}),
                      M.jsx("input", {
                        type: "url",
                        id: "link",
                        placeholder: "Link da página",
                        value: e,
                        onChange: (z) => t(z.target.value),
                        maxLength: 64,
                        size: 64,
                        required: !0,
                      }),
                    ],
                  }),
                  M.jsxs("label", {
                    htmlFor: "title",
                    className: "camp",
                    children: [
                      M.jsx(T2, {}),
                      M.jsx("input", {
                        type: "text",
                        id: "title",
                        placeholder: "Título da página",
                        value: n,
                        onChange: (z) => r(z.target.value),
                        maxLength: 64,
                        size: 64,
                        required: !0,
                      }),
                    ],
                  }),
                  M.jsxs("label", {
                    htmlFor: "description",
                    className: "camp textarea",
                    children: [
                      M.jsx(E2, {}),
                      M.jsx("textarea", {
                        id: "description",
                        placeholder: "Descrição da página",
                        value: o,
                        onChange: (z) => i(z.target.value),
                        maxLength: 300,
                        required: !0,
                      }),
                    ],
                  }),
                  M.jsxs("label", {
                    htmlFor: "autor",
                    className: "camp",
                    children: [
                      M.jsx(A2, {}),
                      M.jsx("input", {
                        type: "text",
                        id: "autor",
                        placeholder: "Autor da página",
                        value: a,
                        onChange: (z) => s(z.target.value),
                        maxLength: 32,
                        size: 32,
                        required: !0,
                      }),
                    ],
                  }),
                  M.jsxs("label", {
                    htmlFor: "keys",
                    className: "camp",
                    children: [
                      M.jsx(C2, {}),
                      M.jsx("input", {
                        type: "text",
                        id: "keys",
                        placeholder: "Palavras chaves",
                        value: l,
                        onChange: (z) => u(z.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                  M.jsxs("label", {
                    htmlFor: "idioma",
                    className: "camp",
                    children: [
                      M.jsx(b2, {}),
                      M.jsxs(Xc, {
                        className: "select",
                        id: "idioma",
                        placeholder: "Idioma da página",
                        value: c,
                        onChange: (z) => d(z.target.value),
                        required: !0,
                        children: [
                          M.jsx("option", {
                            value: "pt-BR",
                            children: "Português - Brasil",
                          }),
                          M.jsx("option", {
                            value: "en",
                            children: "Inglês - Americano",
                          }),
                        ],
                      }),
                    ],
                  }),
                  M.jsxs("label", {
                    htmlFor: "robts",
                    className: "camp",
                    children: [
                      M.jsx(P2, {}),
                      M.jsxs(Xc, {
                        className: "select",
                        id: "robts",
                        placeholder: "Robôs de navegação",
                        onChange: (z) =>
                          h(
                            Array.from(
                              z.target.selectedOptions,
                              (re) => re.value
                            )
                          ),
                        required: !0,
                        children: [
                          M.jsx("option", {
                            value: "all",
                            children: "Seguir e fixar páginas",
                          }),
                          M.jsx("option", {
                            value: "index",
                            children: "Fixar página",
                          }),
                          M.jsx("option", {
                            value: "follow",
                            children: "Seguir páginas",
                          }),
                          M.jsx("option", {
                            value: "none",
                            children: "Não seguir e fixar páginas",
                          }),
                          M.jsx("option", {
                            value: "no-index",
                            children: "Não fixar páginas",
                          }),
                          M.jsx("option", {
                            value: "no-follow",
                            children: "Não seguir páginas",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              M.jsx("h2", { children: "Open Graph" }),
              M.jsx("section", {
                children: M.jsxs("label", {
                  htmlFor: "twitter",
                  className: "camp",
                  children: [
                    M.jsx(za, {}),
                    M.jsx("input", {
                      type: "text",
                      id: "twitter",
                      placeholder: "Usúario do Twitter",
                      value: S,
                      onChange: (z) => v(z.target.value),
                      maxLength: 64,
                      size: 64,
                    }),
                  ],
                }),
              }),
              M.jsx("h2", { children: "Analíticos" }),
              M.jsx("section", {
                children: M.jsxs("label", {
                  htmlFor: "googleid",
                  className: "camp",
                  children: [
                    M.jsx(za, {}),
                    M.jsx("input", {
                      type: "text",
                      id: "googleid",
                      placeholder: "Google Analytics",
                      value: k,
                      onChange: (z) => g(z.target.value),
                      maxLength: 64,
                      size: 64,
                    }),
                  ],
                }),
              }),
              M.jsxs(zc, {
                type: "submit",
                className: "_btn",
                title: "Gerar MetaTags",
                children: [M.jsx(x2, {}), " Gerar MetaTags"],
              }),
            ],
          }),
          M.jsxs(i2, {
            isOpen: R,
            onClose: _,
            children: [
              M.jsx(m2, {}),
              M.jsxs(f2, {
                className: "modal",
                children: [
                  M.jsxs(h2, {
                    as: "header",
                    children: [
                      M.jsx("h3", { children: "MetaTags geradas!" }),
                      M.jsx(zc, { onClick: _, children: M.jsx(M2, {}) }),
                    ],
                  }),
                  M.jsx(g2, {
                    children: M.jsx("textarea", { value: p, readOnly: !0 }),
                  }),
                  M.jsx(p2, {
                    children: M.jsx("button", {
                      className: "_btn",
                      onClick: T,
                      children: "Copiar MetaTags",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      M.jsx("section", {
        className: "_preview",
        children: M.jsx(xA, { title: n, description: o, link: e }),
      }),
    ],
  });
}
function CA() {
  return M.jsxs(M.Fragment, {
    children: [M.jsx(Ub, {}), M.jsx(kA, {}), M.jsx(wA, {})],
  });
}
Tu.createRoot(document.getElementById("flow")).render(
  M.jsx(x.StrictMode, { children: M.jsx(CA, {}) })
);