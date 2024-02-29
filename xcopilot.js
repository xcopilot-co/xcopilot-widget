var uc =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ld = { exports: {} },
  ol = {},
  Nd = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zi = Symbol.for("react.element"),
  ig = Symbol.for("react.portal"),
  og = Symbol.for("react.fragment"),
  lg = Symbol.for("react.strict_mode"),
  ag = Symbol.for("react.profiler"),
  sg = Symbol.for("react.provider"),
  ug = Symbol.for("react.context"),
  cg = Symbol.for("react.forward_ref"),
  fg = Symbol.for("react.suspense"),
  dg = Symbol.for("react.memo"),
  pg = Symbol.for("react.lazy"),
  cc = Symbol.iterator;
function hg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cc && e[cc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Od = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Id = Object.assign,
  Md = {};
function _r(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Md),
    (this.updater = n || Od);
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dd() {}
Dd.prototype = _r.prototype;
function Ds(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Md),
    (this.updater = n || Od);
}
var Fs = (Ds.prototype = new Dd());
Fs.constructor = Ds;
Id(Fs, _r.prototype);
Fs.isPureReactComponent = !0;
var fc = Array.isArray,
  Fd = Object.prototype.hasOwnProperty,
  $s = { current: null },
  $d = { key: !0, ref: !0, __self: !0, __source: !0 };
function jd(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Fd.call(t, r) && !$d.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: zi,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: $s.current,
  };
}
function mg(e, t) {
  return {
    $$typeof: zi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function js(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zi;
}
function gg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var dc = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gg("" + e.key)
    : t.toString(36);
}
function co(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case zi:
          case ig:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Ol(l, 0) : r),
      fc(i)
        ? ((n = ""),
          e != null && (n = e.replace(dc, "$&/") + "/"),
          co(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (js(i) &&
            (i = mg(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(dc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), fc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + Ol(o, a);
      l += co(o, t, n, s, i);
    }
  else if (((s = hg(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ol(o, a++)), (l += co(o, t, n, s, i));
  else if (o === "object")
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
  return l;
}
function Bi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    co(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function yg(e) {
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
var Be = { current: null },
  fo = { transition: null },
  wg = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: fo,
    ReactCurrentOwner: $s,
  };
K.Children = {
  map: Bi,
  forEach: function (e, t, n) {
    Bi(
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
      Bi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Bi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!js(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = _r;
K.Fragment = og;
K.Profiler = ag;
K.PureComponent = Ds;
K.StrictMode = lg;
K.Suspense = fg;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wg;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Id({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = $s.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Fd.call(t, s) &&
        !$d.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: zi, type: e.type, key: i, ref: o, props: r, _owner: l };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: ug,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sg, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = jd;
K.createFactory = function (e) {
  var t = jd.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: cg, render: e };
};
K.isValidElement = js;
K.lazy = function (e) {
  return { $$typeof: pg, _payload: { _status: -1, _result: e }, _init: yg };
};
K.memo = function (e, t) {
  return { $$typeof: dg, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = fo.transition;
  fo.transition = {};
  try {
    e();
  } finally {
    fo.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Be.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
K.useId = function () {
  return Be.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Be.current.useRef(e);
};
K.useState = function (e) {
  return Be.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Be.current.useTransition();
};
K.version = "18.2.0";
Nd.exports = K;
var C = Nd.exports;
const vg = Rd(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xg = C,
  kg = Symbol.for("react.element"),
  Sg = Symbol.for("react.fragment"),
  bg = Object.prototype.hasOwnProperty,
  Cg = xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Eg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bd(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) bg.call(t, r) && !Eg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: kg,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Cg.current,
  };
}
ol.Fragment = Sg;
ol.jsx = Bd;
ol.jsxs = Bd;
Ld.exports = ol;
var $ = Ld.exports,
  Ea = {},
  Ud = { exports: {} },
  rt = {},
  Hd = { exports: {} },
  Vd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, j) {
    var v = M.length;
    M.push(j);
    e: for (; 0 < v; ) {
      var W = (v - 1) >>> 1,
        J = M[W];
      if (0 < i(J, j)) (M[W] = j), (M[v] = J), (v = W);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var j = M[0],
      v = M.pop();
    if (v !== j) {
      M[0] = v;
      e: for (var W = 0, J = M.length, x = J >>> 1; W < x; ) {
        var Ce = 2 * (W + 1) - 1,
          mt = M[Ce],
          ue = Ce + 1,
          Et = M[ue];
        if (0 > i(mt, v))
          ue < J && 0 > i(Et, mt)
            ? ((M[W] = Et), (M[ue] = v), (W = ue))
            : ((M[W] = mt), (M[Ce] = v), (W = Ce));
        else if (ue < J && 0 > i(Et, v)) (M[W] = Et), (M[ue] = v), (W = ue);
        else break e;
      }
    }
    return j;
  }
  function i(M, j) {
    var v = M.sortIndex - j.sortIndex;
    return v !== 0 ? v : M.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    d = 3,
    p = !1,
    h = !1,
    y = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(M) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= M)
        r(u), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(u);
    }
  }
  function E(M) {
    if (((y = !1), w(M), !h))
      if (n(s) !== null) (h = !0), se(P);
      else {
        var j = n(u);
        j !== null && he(E, j.startTime - M);
      }
  }
  function P(M, j) {
    (h = !1), y && ((y = !1), m(z), (z = -1)), (p = !0);
    var v = d;
    try {
      for (
        w(j), c = n(s);
        c !== null && (!(c.expirationTime > j) || (M && !I()));

      ) {
        var W = c.callback;
        if (typeof W == "function") {
          (c.callback = null), (d = c.priorityLevel);
          var J = W(c.expirationTime <= j);
          (j = e.unstable_now()),
            typeof J == "function" ? (c.callback = J) : c === n(s) && r(s),
            w(j);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var x = !0;
      else {
        var Ce = n(u);
        Ce !== null && he(E, Ce.startTime - j), (x = !1);
      }
      return x;
    } finally {
      (c = null), (d = v), (p = !1);
    }
  }
  var k = !1,
    _ = null,
    z = -1,
    N = 5,
    S = -1;
  function I() {
    return !(e.unstable_now() - S < N);
  }
  function O() {
    if (_ !== null) {
      var M = e.unstable_now();
      S = M;
      var j = !0;
      try {
        j = _(!0, M);
      } finally {
        j ? X() : ((k = !1), (_ = null));
      }
    } else k = !1;
  }
  var X;
  if (typeof g == "function")
    X = function () {
      g(O);
    };
  else if (typeof MessageChannel < "u") {
    var te = new MessageChannel(),
      q = te.port2;
    (te.port1.onmessage = O),
      (X = function () {
        q.postMessage(null);
      });
  } else
    X = function () {
      b(O, 0);
    };
  function se(M) {
    (_ = M), k || ((k = !0), X());
  }
  function he(M, j) {
    z = b(function () {
      M(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || p || ((h = !0), se(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var v = d;
      d = j;
      try {
        return M();
      } finally {
        d = v;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, j) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var v = d;
      d = M;
      try {
        return j();
      } finally {
        d = v;
      }
    }),
    (e.unstable_scheduleCallback = function (M, j, v) {
      var W = e.unstable_now();
      switch (
        (typeof v == "object" && v !== null
          ? ((v = v.delay), (v = typeof v == "number" && 0 < v ? W + v : W))
          : (v = W),
        M)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = v + J),
        (M = {
          id: f++,
          callback: j,
          priorityLevel: M,
          startTime: v,
          expirationTime: J,
          sortIndex: -1,
        }),
        v > W
          ? ((M.sortIndex = v),
            t(u, M),
            n(s) === null &&
              M === n(u) &&
              (y ? (m(z), (z = -1)) : (y = !0), he(E, v - W)))
          : ((M.sortIndex = J), t(s, M), h || p || ((h = !0), se(P))),
        M
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (M) {
      var j = d;
      return function () {
        var v = d;
        d = j;
        try {
          return M.apply(this, arguments);
        } finally {
          d = v;
        }
      };
    });
})(Vd);
Hd.exports = Vd;
var Pg = Hd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd = C,
  nt = Pg;
function R(e) {
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
var qd = new Set(),
  ci = {};
function Wn(e, t) {
  vr(e, t), vr(e + "Capture", t);
}
function vr(e, t) {
  for (ci[e] = t, e = 0; e < t.length; e++) qd.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pa = Object.prototype.hasOwnProperty,
  Tg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pc = {},
  hc = {};
function _g(e) {
  return Pa.call(hc, e)
    ? !0
    : Pa.call(pc, e)
    ? !1
    : Tg.test(e)
    ? (hc[e] = !0)
    : ((pc[e] = !0), !1);
}
function Ag(e, t, n, r) {
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
function zg(e, t, n, r) {
  if (t === null || typeof t > "u" || Ag(e, t, n, r)) return !0;
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
function Ue(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ue(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bs = /[\-:]([a-z])/g;
function Us(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bs, Us);
    Re[t] = new Ue(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bs, Us);
    Re[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bs, Us);
  Re[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Ue(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hs(e, t, n, r) {
  var i = Re.hasOwnProperty(t) ? Re[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zg(t, n, i, r) && (n = null),
    r || i === null
      ? _g(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ui = Symbol.for("react.element"),
  er = Symbol.for("react.portal"),
  tr = Symbol.for("react.fragment"),
  Vs = Symbol.for("react.strict_mode"),
  Ta = Symbol.for("react.profiler"),
  Qd = Symbol.for("react.provider"),
  Xd = Symbol.for("react.context"),
  Ws = Symbol.for("react.forward_ref"),
  _a = Symbol.for("react.suspense"),
  Aa = Symbol.for("react.suspense_list"),
  qs = Symbol.for("react.memo"),
  rn = Symbol.for("react.lazy"),
  Kd = Symbol.for("react.offscreen"),
  mc = Symbol.iterator;
function Dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mc && e[mc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var we = Object.assign,
  Il;
function Kr(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Ml = !1;
function Dl(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
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
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Ml = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Kr(e) : "";
}
function Rg(e) {
  switch (e.tag) {
    case 5:
      return Kr(e.type);
    case 16:
      return Kr("Lazy");
    case 13:
      return Kr("Suspense");
    case 19:
      return Kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Dl(e.type, !1)), e;
    case 11:
      return (e = Dl(e.type.render, !1)), e;
    case 1:
      return (e = Dl(e.type, !0)), e;
    default:
      return "";
  }
}
function za(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tr:
      return "Fragment";
    case er:
      return "Portal";
    case Ta:
      return "Profiler";
    case Vs:
      return "StrictMode";
    case _a:
      return "Suspense";
    case Aa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xd:
        return (e.displayName || "Context") + ".Consumer";
      case Qd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ws:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qs:
        return (
          (t = e.displayName || null), t !== null ? t : za(e.type) || "Memo"
        );
      case rn:
        (t = e._payload), (e = e._init);
        try {
          return za(e(t));
        } catch {}
    }
  return null;
}
function Lg(e) {
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
      return za(t);
    case 8:
      return t === Vs ? "StrictMode" : "Mode";
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
function vn(e) {
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
function Yd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ng(e) {
  var t = Yd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hi(e) {
  e._valueTracker || (e._valueTracker = Ng(e));
}
function Gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function _o(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ra(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zd(e, t) {
  (t = t.checked), t != null && Hs(e, "checked", t, !1);
}
function La(e, t) {
  Zd(e, t);
  var n = vn(t.value),
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
    ? Na(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Na(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yc(e, t, n) {
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
function Na(e, t, n) {
  (t !== "number" || _o(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yr = Array.isArray;
function dr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Oa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Yr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function Jd(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ep(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ep(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Vi,
  tp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Vi = Vi || document.createElement("div"),
          Vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Vi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jr = {
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
  Og = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jr).forEach(function (e) {
  Og.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jr[t] = Jr[e]);
  });
});
function np(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jr.hasOwnProperty(e) && Jr[e])
    ? ("" + t).trim()
    : t + "px";
}
function rp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = np(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Ig = we(
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
function Ma(e, t) {
  if (t) {
    if (Ig[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Da(e, t) {
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
var Fa = null;
function Qs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $a = null,
  pr = null,
  hr = null;
function xc(e) {
  if ((e = Ni(e))) {
    if (typeof $a != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = cl(t)), $a(e.stateNode, e.type, t));
  }
}
function ip(e) {
  pr ? (hr ? hr.push(e) : (hr = [e])) : (pr = e);
}
function op() {
  if (pr) {
    var e = pr,
      t = hr;
    if (((hr = pr = null), xc(e), t)) for (e = 0; e < t.length; e++) xc(t[e]);
  }
}
function lp(e, t) {
  return e(t);
}
function ap() {}
var Fl = !1;
function sp(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return lp(e, t, n);
  } finally {
    (Fl = !1), (pr !== null || hr !== null) && (ap(), op());
  }
}
function di(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var ja = !1;
if (Vt)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        ja = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    ja = !1;
  }
function Mg(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var ei = !1,
  Ao = null,
  zo = !1,
  Ba = null,
  Dg = {
    onError: function (e) {
      (ei = !0), (Ao = e);
    },
  };
function Fg(e, t, n, r, i, o, l, a, s) {
  (ei = !1), (Ao = null), Mg.apply(Dg, arguments);
}
function $g(e, t, n, r, i, o, l, a, s) {
  if ((Fg.apply(this, arguments), ei)) {
    if (ei) {
      var u = Ao;
      (ei = !1), (Ao = null);
    } else throw Error(R(198));
    zo || ((zo = !0), (Ba = u));
  }
}
function qn(e) {
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
function up(e) {
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
function kc(e) {
  if (qn(e) !== e) throw Error(R(188));
}
function jg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return kc(i), e;
        if (o === r) return kc(i), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function cp(e) {
  return (e = jg(e)), e !== null ? fp(e) : null;
}
function fp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dp = nt.unstable_scheduleCallback,
  Sc = nt.unstable_cancelCallback,
  Bg = nt.unstable_shouldYield,
  Ug = nt.unstable_requestPaint,
  xe = nt.unstable_now,
  Hg = nt.unstable_getCurrentPriorityLevel,
  Xs = nt.unstable_ImmediatePriority,
  pp = nt.unstable_UserBlockingPriority,
  Ro = nt.unstable_NormalPriority,
  Vg = nt.unstable_LowPriority,
  hp = nt.unstable_IdlePriority,
  ll = null,
  Rt = null;
function Wg(e) {
  if (Rt && typeof Rt.onCommitFiberRoot == "function")
    try {
      Rt.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : Xg,
  qg = Math.log,
  Qg = Math.LN2;
function Xg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qg(e) / Qg) | 0)) | 0;
}
var Wi = 64,
  qi = 4194304;
function Gr(e) {
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
function Lo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Gr(a)) : ((o &= l), o !== 0 && (r = Gr(o)));
  } else (l = n & ~i), l !== 0 ? (r = Gr(l)) : o !== 0 && (r = Gr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Kg(e, t) {
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
function Yg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - kt(o),
      a = 1 << l,
      s = i[l];
    s === -1
      ? (!(a & n) || a & r) && (i[l] = Kg(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ua(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function mp() {
  var e = Wi;
  return (Wi <<= 1), !(Wi & 4194240) && (Wi = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function Gg(e, t) {
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
    var i = 31 - kt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ks(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ne = 0;
function gp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yp,
  Ys,
  wp,
  vp,
  xp,
  Ha = !1,
  Qi = [],
  fn = null,
  dn = null,
  pn = null,
  pi = new Map(),
  hi = new Map(),
  ln = [],
  Zg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      dn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      pi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hi.delete(t.pointerId);
  }
}
function $r(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ni(t)), t !== null && Ys(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Jg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (fn = $r(fn, e, t, n, r, i)), !0;
    case "dragenter":
      return (dn = $r(dn, e, t, n, r, i)), !0;
    case "mouseover":
      return (pn = $r(pn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return pi.set(o, $r(pi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), hi.set(o, $r(hi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function kp(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = up(n)), t !== null)) {
          (e.blockedOn = t),
            xp(e.priority, function () {
              wp(n);
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
function po(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Fa = r), n.target.dispatchEvent(r), (Fa = null);
    } else return (t = Ni(n)), t !== null && Ys(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cc(e, t, n) {
  po(e) && n.delete(t);
}
function e1() {
  (Ha = !1),
    fn !== null && po(fn) && (fn = null),
    dn !== null && po(dn) && (dn = null),
    pn !== null && po(pn) && (pn = null),
    pi.forEach(Cc),
    hi.forEach(Cc);
}
function jr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ha ||
      ((Ha = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, e1)));
}
function mi(e) {
  function t(i) {
    return jr(i, e);
  }
  if (0 < Qi.length) {
    jr(Qi[0], e);
    for (var n = 1; n < Qi.length; n++) {
      var r = Qi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fn !== null && jr(fn, e),
      dn !== null && jr(dn, e),
      pn !== null && jr(pn, e),
      pi.forEach(t),
      hi.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    kp(n), n.blockedOn === null && ln.shift();
}
var mr = Xt.ReactCurrentBatchConfig,
  No = !0;
function t1(e, t, n, r) {
  var i = ne,
    o = mr.transition;
  mr.transition = null;
  try {
    (ne = 1), Gs(e, t, n, r);
  } finally {
    (ne = i), (mr.transition = o);
  }
}
function n1(e, t, n, r) {
  var i = ne,
    o = mr.transition;
  mr.transition = null;
  try {
    (ne = 4), Gs(e, t, n, r);
  } finally {
    (ne = i), (mr.transition = o);
  }
}
function Gs(e, t, n, r) {
  if (No) {
    var i = Va(e, t, n, r);
    if (i === null) Kl(e, t, r, Oo, n), bc(e, r);
    else if (Jg(i, e, t, n, r)) r.stopPropagation();
    else if ((bc(e, r), t & 4 && -1 < Zg.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ni(i);
        if (
          (o !== null && yp(o),
          (o = Va(e, t, n, r)),
          o === null && Kl(e, t, r, Oo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Kl(e, t, r, null, n);
  }
}
var Oo = null;
function Va(e, t, n, r) {
  if (((Oo = null), (e = Qs(r)), (e = Ln(e)), e !== null))
    if (((t = qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = up(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Oo = e), null;
}
function Sp(e) {
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
      switch (Hg()) {
        case Xs:
          return 1;
        case pp:
          return 4;
        case Ro:
        case Vg:
          return 16;
        case hp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var un = null,
  Zs = null,
  ho = null;
function bp() {
  if (ho) return ho;
  var e,
    t = Zs,
    n = t.length,
    r,
    i = "value" in un ? un.value : un.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (ho = i.slice(e, 1 < r ? 1 - r : void 0));
}
function mo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xi() {
  return !0;
}
function Ec() {
  return !1;
}
function it(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Xi
        : Ec),
      (this.isPropagationStopped = Ec),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xi));
      },
      persist: function () {},
      isPersistent: Xi,
    }),
    t
  );
}
var Ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Js = it(Ar),
  Li = we({}, Ar, { view: 0, detail: 0 }),
  r1 = it(Li),
  jl,
  Bl,
  Br,
  al = we({}, Li, {
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
    getModifierState: eu,
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
        : (e !== Br &&
            (Br && e.type === "mousemove"
              ? ((jl = e.screenX - Br.screenX), (Bl = e.screenY - Br.screenY))
              : (Bl = jl = 0),
            (Br = e)),
          jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  Pc = it(al),
  i1 = we({}, al, { dataTransfer: 0 }),
  o1 = it(i1),
  l1 = we({}, Li, { relatedTarget: 0 }),
  Ul = it(l1),
  a1 = we({}, Ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  s1 = it(a1),
  u1 = we({}, Ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  c1 = it(u1),
  f1 = we({}, Ar, { data: 0 }),
  Tc = it(f1),
  d1 = {
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
  p1 = {
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
  h1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function m1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = h1[e]) ? !!t[e] : !1;
}
function eu() {
  return m1;
}
var g1 = we({}, Li, {
    key: function (e) {
      if (e.key) {
        var t = d1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = mo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? p1[e.keyCode] || "Unidentified"
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
    getModifierState: eu,
    charCode: function (e) {
      return e.type === "keypress" ? mo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  y1 = it(g1),
  w1 = we({}, al, {
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
  _c = it(w1),
  v1 = we({}, Li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: eu,
  }),
  x1 = it(v1),
  k1 = we({}, Ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  S1 = it(k1),
  b1 = we({}, al, {
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
  C1 = it(b1),
  E1 = [9, 13, 27, 32],
  tu = Vt && "CompositionEvent" in window,
  ti = null;
Vt && "documentMode" in document && (ti = document.documentMode);
var P1 = Vt && "TextEvent" in window && !ti,
  Cp = Vt && (!tu || (ti && 8 < ti && 11 >= ti)),
  Ac = " ",
  zc = !1;
function Ep(e, t) {
  switch (e) {
    case "keyup":
      return E1.indexOf(t.keyCode) !== -1;
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
function Pp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nr = !1;
function T1(e, t) {
  switch (e) {
    case "compositionend":
      return Pp(t);
    case "keypress":
      return t.which !== 32 ? null : ((zc = !0), Ac);
    case "textInput":
      return (e = t.data), e === Ac && zc ? null : e;
    default:
      return null;
  }
}
function _1(e, t) {
  if (nr)
    return e === "compositionend" || (!tu && Ep(e, t))
      ? ((e = bp()), (ho = Zs = un = null), (nr = !1), e)
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
      return Cp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var A1 = {
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
function Rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!A1[e.type] : t === "textarea";
}
function Tp(e, t, n, r) {
  ip(r),
    (t = Io(t, "onChange")),
    0 < t.length &&
      ((n = new Js("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ni = null,
  gi = null;
function z1(e) {
  Fp(e, 0);
}
function sl(e) {
  var t = or(e);
  if (Gd(t)) return e;
}
function R1(e, t) {
  if (e === "change") return t;
}
var _p = !1;
if (Vt) {
  var Hl;
  if (Vt) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var Lc = document.createElement("div");
      Lc.setAttribute("oninput", "return;"),
        (Vl = typeof Lc.oninput == "function");
    }
    Hl = Vl;
  } else Hl = !1;
  _p = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Nc() {
  ni && (ni.detachEvent("onpropertychange", Ap), (gi = ni = null));
}
function Ap(e) {
  if (e.propertyName === "value" && sl(gi)) {
    var t = [];
    Tp(t, gi, e, Qs(e)), sp(z1, t);
  }
}
function L1(e, t, n) {
  e === "focusin"
    ? (Nc(), (ni = t), (gi = n), ni.attachEvent("onpropertychange", Ap))
    : e === "focusout" && Nc();
}
function N1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sl(gi);
}
function O1(e, t) {
  if (e === "click") return sl(t);
}
function I1(e, t) {
  if (e === "input" || e === "change") return sl(t);
}
function M1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == "function" ? Object.is : M1;
function yi(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Pa.call(t, i) || !Ct(e[i], t[i])) return !1;
  }
  return !0;
}
function Oc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ic(e, t) {
  var n = Oc(e);
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
    n = Oc(n);
  }
}
function zp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rp() {
  for (var e = window, t = _o(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _o(e.document);
  }
  return t;
}
function nu(e) {
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
function D1(e) {
  var t = Rp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nu(n)) {
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
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ic(n, o));
        var l = Ic(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var F1 = Vt && "documentMode" in document && 11 >= document.documentMode,
  rr = null,
  Wa = null,
  ri = null,
  qa = !1;
function Mc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qa ||
    rr == null ||
    rr !== _o(r) ||
    ((r = rr),
    "selectionStart" in r && nu(r)
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
    (ri && yi(ri, r)) ||
      ((ri = r),
      (r = Io(Wa, "onSelect")),
      0 < r.length &&
        ((t = new Js("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rr))));
}
function Ki(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ir = {
    animationend: Ki("Animation", "AnimationEnd"),
    animationiteration: Ki("Animation", "AnimationIteration"),
    animationstart: Ki("Animation", "AnimationStart"),
    transitionend: Ki("Transition", "TransitionEnd"),
  },
  Wl = {},
  Lp = {};
Vt &&
  ((Lp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ir.animationend.animation,
    delete ir.animationiteration.animation,
    delete ir.animationstart.animation),
  "TransitionEvent" in window || delete ir.transitionend.transition);
function ul(e) {
  if (Wl[e]) return Wl[e];
  if (!ir[e]) return e;
  var t = ir[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lp) return (Wl[e] = t[n]);
  return e;
}
var Np = ul("animationend"),
  Op = ul("animationiteration"),
  Ip = ul("animationstart"),
  Mp = ul("transitionend"),
  Dp = new Map(),
  Dc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kn(e, t) {
  Dp.set(e, t), Wn(t, [e]);
}
for (var ql = 0; ql < Dc.length; ql++) {
  var Ql = Dc[ql],
    $1 = Ql.toLowerCase(),
    j1 = Ql[0].toUpperCase() + Ql.slice(1);
  kn($1, "on" + j1);
}
kn(Np, "onAnimationEnd");
kn(Op, "onAnimationIteration");
kn(Ip, "onAnimationStart");
kn("dblclick", "onDoubleClick");
kn("focusin", "onFocus");
kn("focusout", "onBlur");
kn(Mp, "onTransitionEnd");
vr("onMouseEnter", ["mouseout", "mouseover"]);
vr("onMouseLeave", ["mouseout", "mouseover"]);
vr("onPointerEnter", ["pointerout", "pointerover"]);
vr("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Zr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  B1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));
function Fc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $g(r, t, void 0, e), (e.currentTarget = null);
}
function Fp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          Fc(i, a, u), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          Fc(i, a, u), (o = s);
        }
    }
  }
  if (zo) throw ((e = Ba), (zo = !1), (Ba = null), e);
}
function fe(e, t) {
  var n = t[Ga];
  n === void 0 && (n = t[Ga] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($p(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), $p(n, e, r, t);
}
var Yi = "_reactListening" + Math.random().toString(36).slice(2);
function wi(e) {
  if (!e[Yi]) {
    (e[Yi] = !0),
      qd.forEach(function (n) {
        n !== "selectionchange" && (B1.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yi] || ((t[Yi] = !0), Xl("selectionchange", !1, t));
  }
}
function $p(e, t, n, r) {
  switch (Sp(t)) {
    case 1:
      var i = t1;
      break;
    case 4:
      i = n1;
      break;
    default:
      i = Gs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ja ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Kl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Ln(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sp(function () {
    var u = o,
      f = Qs(n),
      c = [];
    e: {
      var d = Dp.get(e);
      if (d !== void 0) {
        var p = Js,
          h = e;
        switch (e) {
          case "keypress":
            if (mo(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = y1;
            break;
          case "focusin":
            (h = "focus"), (p = Ul);
            break;
          case "focusout":
            (h = "blur"), (p = Ul);
            break;
          case "beforeblur":
          case "afterblur":
            p = Ul;
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
            p = Pc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = o1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = x1;
            break;
          case Np:
          case Op:
          case Ip:
            p = s1;
            break;
          case Mp:
            p = S1;
            break;
          case "scroll":
            p = r1;
            break;
          case "wheel":
            p = C1;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = c1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = _c;
        }
        var y = (t & 4) !== 0,
          b = !y && e === "scroll",
          m = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var g = u, w; g !== null; ) {
          w = g;
          var E = w.stateNode;
          if (
            (w.tag === 5 &&
              E !== null &&
              ((w = E),
              m !== null && ((E = di(g, m)), E != null && y.push(vi(g, E, w)))),
            b)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((d = new p(d, h, null, n, f)), c.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Fa &&
            (h = n.relatedTarget || n.fromElement) &&
            (Ln(h) || h[Wt]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((h = n.relatedTarget || n.toElement),
              (p = u),
              (h = h ? Ln(h) : null),
              h !== null &&
                ((b = qn(h)), h !== b || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((p = null), (h = u)),
          p !== h)
        ) {
          if (
            ((y = Pc),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = _c),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (b = p == null ? d : or(p)),
            (w = h == null ? d : or(h)),
            (d = new y(E, g + "leave", p, n, f)),
            (d.target = b),
            (d.relatedTarget = w),
            (E = null),
            Ln(f) === u &&
              ((y = new y(m, g + "enter", h, n, f)),
              (y.target = w),
              (y.relatedTarget = b),
              (E = y)),
            (b = E),
            p && h)
          )
            t: {
              for (y = p, m = h, g = 0, w = y; w; w = Gn(w)) g++;
              for (w = 0, E = m; E; E = Gn(E)) w++;
              for (; 0 < g - w; ) (y = Gn(y)), g--;
              for (; 0 < w - g; ) (m = Gn(m)), w--;
              for (; g--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Gn(y)), (m = Gn(m));
              }
              y = null;
            }
          else y = null;
          p !== null && $c(c, d, p, y, !1),
            h !== null && b !== null && $c(c, b, h, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? or(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var P = R1;
        else if (Rc(d))
          if (_p) P = I1;
          else {
            P = N1;
            var k = L1;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (P = O1);
        if (P && (P = P(e, u))) {
          Tp(c, P, n, f);
          break e;
        }
        k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            Na(d, "number", d.value);
      }
      switch (((k = u ? or(u) : window), e)) {
        case "focusin":
          (Rc(k) || k.contentEditable === "true") &&
            ((rr = k), (Wa = u), (ri = null));
          break;
        case "focusout":
          ri = Wa = rr = null;
          break;
        case "mousedown":
          qa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qa = !1), Mc(c, n, f);
          break;
        case "selectionchange":
          if (F1) break;
        case "keydown":
        case "keyup":
          Mc(c, n, f);
      }
      var _;
      if (tu)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        nr
          ? Ep(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (Cp &&
          n.locale !== "ko" &&
          (nr || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && nr && (_ = bp())
            : ((un = f),
              (Zs = "value" in un ? un.value : un.textContent),
              (nr = !0))),
        (k = Io(u, z)),
        0 < k.length &&
          ((z = new Tc(z, e, null, n, f)),
          c.push({ event: z, listeners: k }),
          _ ? (z.data = _) : ((_ = Pp(n)), _ !== null && (z.data = _)))),
        (_ = P1 ? T1(e, n) : _1(e, n)) &&
          ((u = Io(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Tc("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = _)));
    }
    Fp(c, t);
  });
}
function vi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Io(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = di(e, n)),
      o != null && r.unshift(vi(e, o, i)),
      (o = di(e, t)),
      o != null && r.push(vi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $c(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = di(n, o)), s != null && l.unshift(vi(n, s, a)))
        : i || ((s = di(n, o)), s != null && l.push(vi(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var U1 = /\r\n?/g,
  H1 = /\u0000|\uFFFD/g;
function jc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      U1,
      `
`
    )
    .replace(H1, "");
}
function Gi(e, t, n) {
  if (((t = jc(t)), jc(e) !== t && n)) throw Error(R(425));
}
function Mo() {}
var Qa = null,
  Xa = null;
function Ka(e, t) {
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
var Ya = typeof setTimeout == "function" ? setTimeout : void 0,
  V1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bc = typeof Promise == "function" ? Promise : void 0,
  W1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bc < "u"
      ? function (e) {
          return Bc.resolve(null).then(e).catch(q1);
        }
      : Ya;
function q1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), mi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  mi(t);
}
function hn(e) {
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
function Uc(e) {
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
var zr = Math.random().toString(36).slice(2),
  At = "__reactFiber$" + zr,
  xi = "__reactProps$" + zr,
  Wt = "__reactContainer$" + zr,
  Ga = "__reactEvents$" + zr,
  Q1 = "__reactListeners$" + zr,
  X1 = "__reactHandles$" + zr;
function Ln(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[At])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uc(e); e !== null; ) {
          if ((n = e[At])) return n;
          e = Uc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ni(e) {
  return (
    (e = e[At] || e[Wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function or(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function cl(e) {
  return e[xi] || null;
}
var Za = [],
  lr = -1;
function Sn(e) {
  return { current: e };
}
function de(e) {
  0 > lr || ((e.current = Za[lr]), (Za[lr] = null), lr--);
}
function le(e, t) {
  lr++, (Za[lr] = e.current), (e.current = t);
}
var xn = {},
  Me = Sn(xn),
  qe = Sn(!1),
  $n = xn;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Qe(e) {
  return (e = e.childContextTypes), e != null;
}
function Do() {
  de(qe), de(Me);
}
function Hc(e, t, n) {
  if (Me.current !== xn) throw Error(R(168));
  le(Me, t), le(qe, n);
}
function jp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, Lg(e) || "Unknown", i));
  return we({}, n, r);
}
function Fo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xn),
    ($n = Me.current),
    le(Me, e),
    le(qe, qe.current),
    !0
  );
}
function Vc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = jp(e, t, $n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(qe),
      de(Me),
      le(Me, e))
    : de(qe),
    le(qe, n);
}
var $t = null,
  fl = !1,
  Gl = !1;
function Bp(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function K1(e) {
  (fl = !0), Bp(e);
}
function bn() {
  if (!Gl && $t !== null) {
    Gl = !0;
    var e = 0,
      t = ne;
    try {
      var n = $t;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($t = null), (fl = !1);
    } catch (i) {
      throw ($t !== null && ($t = $t.slice(e + 1)), dp(Xs, bn), i);
    } finally {
      (ne = t), (Gl = !1);
    }
  }
  return null;
}
var ar = [],
  sr = 0,
  $o = null,
  jo = 0,
  ot = [],
  lt = 0,
  jn = null,
  jt = 1,
  Bt = "";
function An(e, t) {
  (ar[sr++] = jo), (ar[sr++] = $o), ($o = e), (jo = t);
}
function Up(e, t, n) {
  (ot[lt++] = jt), (ot[lt++] = Bt), (ot[lt++] = jn), (jn = e);
  var r = jt;
  e = Bt;
  var i = 32 - kt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - kt(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (jt = (1 << (32 - kt(t) + i)) | (n << i) | r),
      (Bt = o + e);
  } else (jt = (1 << o) | (n << i) | r), (Bt = e);
}
function ru(e) {
  e.return !== null && (An(e, 1), Up(e, 1, 0));
}
function iu(e) {
  for (; e === $o; )
    ($o = ar[--sr]), (ar[sr] = null), (jo = ar[--sr]), (ar[sr] = null);
  for (; e === jn; )
    (jn = ot[--lt]),
      (ot[lt] = null),
      (Bt = ot[--lt]),
      (ot[lt] = null),
      (jt = ot[--lt]),
      (ot[lt] = null);
}
var et = null,
  Je = null,
  me = !1,
  xt = null;
function Hp(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (Je = hn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (et = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jn !== null ? { id: jt, overflow: Bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (et = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ja(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function es(e) {
  if (me) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Wc(e, t)) {
        if (Ja(e)) throw Error(R(418));
        t = hn(n.nextSibling);
        var r = et;
        t && Wc(e, t)
          ? Hp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (me = !1), (et = e));
      }
    } else {
      if (Ja(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (et = e);
    }
  }
}
function qc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function Zi(e) {
  if (e !== et) return !1;
  if (!me) return qc(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ka(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (Ja(e)) throw (Vp(), Error(R(418)));
    for (; t; ) Hp(e, t), (t = hn(t.nextSibling));
  }
  if ((qc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = hn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = et ? hn(e.stateNode.nextSibling) : null;
  return !0;
}
function Vp() {
  for (var e = Je; e; ) e = hn(e.nextSibling);
}
function kr() {
  (Je = et = null), (me = !1);
}
function ou(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var Y1 = Xt.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Bo = Sn(null),
  Uo = null,
  ur = null,
  lu = null;
function au() {
  lu = ur = Uo = null;
}
function su(e) {
  var t = Bo.current;
  de(Bo), (e._currentValue = t);
}
function ts(e, t, n) {
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
function gr(e, t) {
  (Uo = e),
    (lu = ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (lu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
      if (Uo === null) throw Error(R(308));
      (ur = e), (Uo.dependencies = { lanes: 0, firstContext: e });
    } else ur = ur.next = e;
  return t;
}
var Nn = null;
function uu(e) {
  Nn === null ? (Nn = [e]) : Nn.push(e);
}
function Wp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), uu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    qt(e, r)
  );
}
function qt(e, t) {
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
var on = !1;
function cu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qp(e, t) {
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
function Ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      qt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), uu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    qt(e, n)
  );
}
function go(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ks(e, n);
  }
}
function Qc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
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
function Ho(e, t, n, r) {
  var i = e.updateQueue;
  on = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var c = i.baseState;
    (l = 0), (f = u = s = null), (a = o);
    do {
      var d = a.lane,
        p = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var h = e,
            y = a;
          switch (((d = t), (p = n), y.tag)) {
            case 1:
              if (((h = y.payload), typeof h == "function")) {
                c = h.call(p, c, d);
                break e;
              }
              c = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = y.payload),
                (d = typeof h == "function" ? h.call(p, c, d) : h),
                d == null)
              )
                break e;
              c = we({}, c, d);
              break e;
            case 2:
              on = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = p), (s = c)) : (f = f.next = p),
          (l |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = c),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Un |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function Xc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var Qp = new Wd.Component().refs;
function ns(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      i = yn(e),
      o = Ut(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (St(t, e, i, r), go(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      i = yn(e),
      o = Ut(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = mn(e, o, i)),
      t !== null && (St(t, e, i, r), go(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = yn(e),
      i = Ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = mn(e, i, r)),
      t !== null && (St(t, e, r, n), go(t, e, r));
  },
};
function Kc(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !yi(n, r) || !yi(i, o)
      : !0
  );
}
function Xp(e, t, n) {
  var r = !1,
    i = xn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ft(o))
      : ((i = Qe(t) ? $n : Me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xr(e, i) : xn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Yc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function rs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Qp), cu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ft(o))
    : ((o = Qe(t) ? $n : Me.current), (i.context = xr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ns(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && dl.enqueueReplaceState(i, i.state, null),
      Ho(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === Qp && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Ji(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gc(e) {
  var t = e._init;
  return t(e._payload);
}
function Kp(e) {
  function t(m, g) {
    if (e) {
      var w = m.deletions;
      w === null ? ((m.deletions = [g]), (m.flags |= 16)) : w.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), (g = g.sibling);
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling);
    return m;
  }
  function i(m, g) {
    return (m = wn(m, g)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, g, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null
            ? ((w = w.index), w < g ? ((m.flags |= 2), g) : w)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, g, w, E) {
    return g === null || g.tag !== 6
      ? ((g = ia(w, m.mode, E)), (g.return = m), g)
      : ((g = i(g, w)), (g.return = m), g);
  }
  function s(m, g, w, E) {
    var P = w.type;
    return P === tr
      ? f(m, g, w.props.children, E, w.key)
      : g !== null &&
        (g.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === rn &&
            Gc(P) === g.type))
      ? ((E = i(g, w.props)), (E.ref = Ur(m, g, w)), (E.return = m), E)
      : ((E = So(w.type, w.key, w.props, null, m.mode, E)),
        (E.ref = Ur(m, g, w)),
        (E.return = m),
        E);
  }
  function u(m, g, w, E) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== w.containerInfo ||
      g.stateNode.implementation !== w.implementation
      ? ((g = oa(w, m.mode, E)), (g.return = m), g)
      : ((g = i(g, w.children || [])), (g.return = m), g);
  }
  function f(m, g, w, E, P) {
    return g === null || g.tag !== 7
      ? ((g = Dn(w, m.mode, E, P)), (g.return = m), g)
      : ((g = i(g, w)), (g.return = m), g);
  }
  function c(m, g, w) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = ia("" + g, m.mode, w)), (g.return = m), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ui:
          return (
            (w = So(g.type, g.key, g.props, null, m.mode, w)),
            (w.ref = Ur(m, null, g)),
            (w.return = m),
            w
          );
        case er:
          return (g = oa(g, m.mode, w)), (g.return = m), g;
        case rn:
          var E = g._init;
          return c(m, E(g._payload), w);
      }
      if (Yr(g) || Dr(g))
        return (g = Dn(g, m.mode, w, null)), (g.return = m), g;
      Ji(m, g);
    }
    return null;
  }
  function d(m, g, w, E) {
    var P = g !== null ? g.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return P !== null ? null : a(m, g, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ui:
          return w.key === P ? s(m, g, w, E) : null;
        case er:
          return w.key === P ? u(m, g, w, E) : null;
        case rn:
          return (P = w._init), d(m, g, P(w._payload), E);
      }
      if (Yr(w) || Dr(w)) return P !== null ? null : f(m, g, w, E, null);
      Ji(m, w);
    }
    return null;
  }
  function p(m, g, w, E, P) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(w) || null), a(g, m, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ui:
          return (m = m.get(E.key === null ? w : E.key) || null), s(g, m, E, P);
        case er:
          return (m = m.get(E.key === null ? w : E.key) || null), u(g, m, E, P);
        case rn:
          var k = E._init;
          return p(m, g, w, k(E._payload), P);
      }
      if (Yr(E) || Dr(E)) return (m = m.get(w) || null), f(g, m, E, P, null);
      Ji(g, E);
    }
    return null;
  }
  function h(m, g, w, E) {
    for (
      var P = null, k = null, _ = g, z = (g = 0), N = null;
      _ !== null && z < w.length;
      z++
    ) {
      _.index > z ? ((N = _), (_ = null)) : (N = _.sibling);
      var S = d(m, _, w[z], E);
      if (S === null) {
        _ === null && (_ = N);
        break;
      }
      e && _ && S.alternate === null && t(m, _),
        (g = o(S, g, z)),
        k === null ? (P = S) : (k.sibling = S),
        (k = S),
        (_ = N);
    }
    if (z === w.length) return n(m, _), me && An(m, z), P;
    if (_ === null) {
      for (; z < w.length; z++)
        (_ = c(m, w[z], E)),
          _ !== null &&
            ((g = o(_, g, z)), k === null ? (P = _) : (k.sibling = _), (k = _));
      return me && An(m, z), P;
    }
    for (_ = r(m, _); z < w.length; z++)
      (N = p(_, m, z, w[z], E)),
        N !== null &&
          (e && N.alternate !== null && _.delete(N.key === null ? z : N.key),
          (g = o(N, g, z)),
          k === null ? (P = N) : (k.sibling = N),
          (k = N));
    return (
      e &&
        _.forEach(function (I) {
          return t(m, I);
        }),
      me && An(m, z),
      P
    );
  }
  function y(m, g, w, E) {
    var P = Dr(w);
    if (typeof P != "function") throw Error(R(150));
    if (((w = P.call(w)), w == null)) throw Error(R(151));
    for (
      var k = (P = null), _ = g, z = (g = 0), N = null, S = w.next();
      _ !== null && !S.done;
      z++, S = w.next()
    ) {
      _.index > z ? ((N = _), (_ = null)) : (N = _.sibling);
      var I = d(m, _, S.value, E);
      if (I === null) {
        _ === null && (_ = N);
        break;
      }
      e && _ && I.alternate === null && t(m, _),
        (g = o(I, g, z)),
        k === null ? (P = I) : (k.sibling = I),
        (k = I),
        (_ = N);
    }
    if (S.done) return n(m, _), me && An(m, z), P;
    if (_ === null) {
      for (; !S.done; z++, S = w.next())
        (S = c(m, S.value, E)),
          S !== null &&
            ((g = o(S, g, z)), k === null ? (P = S) : (k.sibling = S), (k = S));
      return me && An(m, z), P;
    }
    for (_ = r(m, _); !S.done; z++, S = w.next())
      (S = p(_, m, z, S.value, E)),
        S !== null &&
          (e && S.alternate !== null && _.delete(S.key === null ? z : S.key),
          (g = o(S, g, z)),
          k === null ? (P = S) : (k.sibling = S),
          (k = S));
    return (
      e &&
        _.forEach(function (O) {
          return t(m, O);
        }),
      me && An(m, z),
      P
    );
  }
  function b(m, g, w, E) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === tr &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Ui:
          e: {
            for (var P = w.key, k = g; k !== null; ) {
              if (k.key === P) {
                if (((P = w.type), P === tr)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (g = i(k, w.props.children)),
                      (g.return = m),
                      (m = g);
                    break e;
                  }
                } else if (
                  k.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === rn &&
                    Gc(P) === k.type)
                ) {
                  n(m, k.sibling),
                    (g = i(k, w.props)),
                    (g.ref = Ur(m, k, w)),
                    (g.return = m),
                    (m = g);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            w.type === tr
              ? ((g = Dn(w.props.children, m.mode, E, w.key)),
                (g.return = m),
                (m = g))
              : ((E = So(w.type, w.key, w.props, null, m.mode, E)),
                (E.ref = Ur(m, g, w)),
                (E.return = m),
                (m = E));
          }
          return l(m);
        case er:
          e: {
            for (k = w.key; g !== null; ) {
              if (g.key === k)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === w.containerInfo &&
                  g.stateNode.implementation === w.implementation
                ) {
                  n(m, g.sibling),
                    (g = i(g, w.children || [])),
                    (g.return = m),
                    (m = g);
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            (g = oa(w, m.mode, E)), (g.return = m), (m = g);
          }
          return l(m);
        case rn:
          return (k = w._init), b(m, g, k(w._payload), E);
      }
      if (Yr(w)) return h(m, g, w, E);
      if (Dr(w)) return y(m, g, w, E);
      Ji(m, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = i(g, w)), (g.return = m), (m = g))
          : (n(m, g), (g = ia(w, m.mode, E)), (g.return = m), (m = g)),
        l(m))
      : n(m, g);
  }
  return b;
}
var Sr = Kp(!0),
  Yp = Kp(!1),
  Oi = {},
  Lt = Sn(Oi),
  ki = Sn(Oi),
  Si = Sn(Oi);
function On(e) {
  if (e === Oi) throw Error(R(174));
  return e;
}
function fu(e, t) {
  switch ((le(Si, t), le(ki, e), le(Lt, Oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ia(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ia(t, e));
  }
  de(Lt), le(Lt, t);
}
function br() {
  de(Lt), de(ki), de(Si);
}
function Gp(e) {
  On(Si.current);
  var t = On(Lt.current),
    n = Ia(t, e.type);
  t !== n && (le(ki, e), le(Lt, n));
}
function du(e) {
  ki.current === e && (de(Lt), de(ki));
}
var ge = Sn(0);
function Vo(e) {
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
var Zl = [];
function pu() {
  for (var e = 0; e < Zl.length; e++)
    Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var yo = Xt.ReactCurrentDispatcher,
  Jl = Xt.ReactCurrentBatchConfig,
  Bn = 0,
  ye = null,
  Ee = null,
  Te = null,
  Wo = !1,
  ii = !1,
  bi = 0,
  G1 = 0;
function Le() {
  throw Error(R(321));
}
function hu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function mu(e, t, n, r, i, o) {
  if (
    ((Bn = o),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (yo.current = e === null || e.memoizedState === null ? ty : ny),
    (e = n(r, i)),
    ii)
  ) {
    o = 0;
    do {
      if (((ii = !1), (bi = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (Te = Ee = null),
        (t.updateQueue = null),
        (yo.current = ry),
        (e = n(r, i));
    } while (ii);
  }
  if (
    ((yo.current = qo),
    (t = Ee !== null && Ee.next !== null),
    (Bn = 0),
    (Te = Ee = ye = null),
    (Wo = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function gu() {
  var e = bi !== 0;
  return (bi = 0), e;
}
function Tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function dt() {
  if (Ee === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Te === null ? ye.memoizedState : Te.next;
  if (t !== null) (Te = t), (Ee = e);
  else {
    if (e === null) throw Error(R(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function Ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ea(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = o;
    do {
      var f = u.lane;
      if ((Bn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (l = r)) : (s = s.next = c),
          (ye.lanes |= f),
          (Un |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      Ct(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ye.lanes |= o), (Un |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ta(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Ct(o, t.memoizedState) || (We = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Zp() {}
function Jp(e, t) {
  var n = ye,
    r = dt(),
    i = t(),
    o = !Ct(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (We = !0)),
    (r = r.queue),
    yu(nh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ei(9, th.bind(null, n, r, i, t), void 0, null),
      _e === null)
    )
      throw Error(R(349));
    Bn & 30 || eh(n, t, i);
  }
  return i;
}
function eh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function th(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rh(t) && ih(e);
}
function nh(e, t, n) {
  return n(function () {
    rh(t) && ih(e);
  });
}
function rh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function ih(e) {
  var t = qt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Zc(e) {
  var t = Tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ci,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ey.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Ei(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function oh() {
  return dt().memoizedState;
}
function wo(e, t, n, r) {
  var i = Tt();
  (ye.flags |= e),
    (i.memoizedState = Ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function pl(e, t, n, r) {
  var i = dt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ee !== null) {
    var l = Ee.memoizedState;
    if (((o = l.destroy), r !== null && hu(r, l.deps))) {
      i.memoizedState = Ei(t, n, o, r);
      return;
    }
  }
  (ye.flags |= e), (i.memoizedState = Ei(1 | t, n, o, r));
}
function Jc(e, t) {
  return wo(8390656, 8, e, t);
}
function yu(e, t) {
  return pl(2048, 8, e, t);
}
function lh(e, t) {
  return pl(4, 2, e, t);
}
function ah(e, t) {
  return pl(4, 4, e, t);
}
function sh(e, t) {
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
function uh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, sh.bind(null, t, e), n)
  );
}
function wu() {}
function ch(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fh(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dh(e, t, n) {
  return Bn & 21
    ? (Ct(n, t) || ((n = mp()), (ye.lanes |= n), (Un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function Z1(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Jl.transition;
  Jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Jl.transition = r);
  }
}
function ph() {
  return dt().memoizedState;
}
function J1(e, t, n) {
  var r = yn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hh(e))
  )
    mh(t, n);
  else if (((n = Wp(e, t, n, r)), n !== null)) {
    var i = je();
    St(n, e, r, i), gh(n, t, r);
  }
}
function ey(e, t, n) {
  var r = yn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hh(e)) mh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ct(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), uu(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wp(e, t, i, r)),
      n !== null && ((i = je()), St(n, e, r, i), gh(n, t, r));
  }
}
function hh(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function mh(e, t) {
  ii = Wo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ks(e, n);
  }
}
var qo = {
    readContext: ft,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  ty = {
    readContext: ft,
    useCallback: function (e, t) {
      return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: Jc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        wo(4194308, 4, sh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return wo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return wo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Tt();
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
        (e = e.dispatch = J1.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zc,
    useDebugValue: wu,
    useDeferredValue: function (e) {
      return (Tt().memoizedState = e);
    },
    useTransition: function () {
      var e = Zc(!1),
        t = e[0];
      return (e = Z1.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        i = Tt();
      if (me) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), _e === null)) throw Error(R(349));
        Bn & 30 || eh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Jc(nh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ei(9, th.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tt(),
        t = _e.identifierPrefix;
      if (me) {
        var n = Bt,
          r = jt;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = bi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = G1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ny = {
    readContext: ft,
    useCallback: ch,
    useContext: ft,
    useEffect: yu,
    useImperativeHandle: uh,
    useInsertionEffect: lh,
    useLayoutEffect: ah,
    useMemo: fh,
    useReducer: ea,
    useRef: oh,
    useState: function () {
      return ea(Ci);
    },
    useDebugValue: wu,
    useDeferredValue: function (e) {
      var t = dt();
      return dh(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = ea(Ci)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: Jp,
    useId: ph,
    unstable_isNewReconciler: !1,
  },
  ry = {
    readContext: ft,
    useCallback: ch,
    useContext: ft,
    useEffect: yu,
    useImperativeHandle: uh,
    useInsertionEffect: lh,
    useLayoutEffect: ah,
    useMemo: fh,
    useReducer: ta,
    useRef: oh,
    useState: function () {
      return ta(Ci);
    },
    useDebugValue: wu,
    useDeferredValue: function (e) {
      var t = dt();
      return Ee === null ? (t.memoizedState = e) : dh(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = ta(Ci)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: Jp,
    useId: ph,
    unstable_isNewReconciler: !1,
  };
function Cr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function na(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var iy = typeof WeakMap == "function" ? WeakMap : Map;
function yh(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xo || ((Xo = !0), (hs = r)), is(e, t);
    }),
    n
  );
}
function wh(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        is(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        is(e, t),
          typeof r != "function" &&
            (gn === null ? (gn = new Set([this])) : gn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function ef(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new iy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = wy.bind(null, e, t, n)), t.then(e, e));
}
function tf(e) {
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
function nf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ut(-1, 1)), (t.tag = 2), mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var oy = Xt.ReactCurrentOwner,
  We = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? Yp(t, null, n, r) : Sr(t, e.child, n, r);
}
function rf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    gr(t, i),
    (r = mu(e, t, n, r, o, i)),
    (n = gu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qt(e, t, i))
      : (me && n && ru(t), (t.flags |= 1), Fe(e, t, r, i), t.child)
  );
}
function of(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Pu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vh(e, t, o, r, i))
      : ((e = So(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : yi), n(l, r) && e.ref === t.ref)
    )
      return Qt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = wn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (yi(o, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), Qt(e, t, i);
  }
  return os(e, t, n, r, i);
}
function xh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(fr, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(fr, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(fr, Ze),
        (Ze |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(fr, Ze),
      (Ze |= r);
  return Fe(e, t, i, n), t.child;
}
function kh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function os(e, t, n, r, i) {
  var o = Qe(n) ? $n : Me.current;
  return (
    (o = xr(t, o)),
    gr(t, i),
    (n = mu(e, t, n, r, o, i)),
    (r = gu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Qt(e, t, i))
      : (me && r && ru(t), (t.flags |= 1), Fe(e, t, n, i), t.child)
  );
}
function lf(e, t, n, r, i) {
  if (Qe(n)) {
    var o = !0;
    Fo(t);
  } else o = !1;
  if ((gr(t, i), t.stateNode === null))
    vo(e, t), Xp(t, n, r), rs(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ft(u))
      : ((u = Qe(n) ? $n : Me.current), (u = xr(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Yc(t, l, r, u)),
      (on = !1);
    var d = t.memoizedState;
    (l.state = d),
      Ho(t, r, l, i),
      (s = t.memoizedState),
      a !== r || d !== s || qe.current || on
        ? (typeof f == "function" && (ns(t, n, f, r), (s = t.memoizedState)),
          (a = on || Kc(t, n, a, r, d, s, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      qp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wt(t.type, a)),
      (l.props = u),
      (c = t.pendingProps),
      (d = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ft(s))
        : ((s = Qe(n) ? $n : Me.current), (s = xr(t, s)));
    var p = n.getDerivedStateFromProps;
    (f =
      typeof p == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== c || d !== s) && Yc(t, l, r, s)),
      (on = !1),
      (d = t.memoizedState),
      (l.state = d),
      Ho(t, r, l, i);
    var h = t.memoizedState;
    a !== c || d !== h || qe.current || on
      ? (typeof p == "function" && (ns(t, n, p, r), (h = t.memoizedState)),
        (u = on || Kc(t, n, u, r, d, h, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, h, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, h, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (l.props = r),
        (l.state = h),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ls(e, t, n, r, o, i);
}
function ls(e, t, n, r, i, o) {
  kh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Vc(t, n, !1), Qt(e, t, o);
  (r = t.stateNode), (oy.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Sr(t, e.child, null, o)), (t.child = Sr(t, null, a, o)))
      : Fe(e, t, a, o),
    (t.memoizedState = r.state),
    i && Vc(t, n, !0),
    t.child
  );
}
function Sh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hc(e, t.context, !1),
    fu(e, t.containerInfo);
}
function af(e, t, n, r, i) {
  return kr(), ou(i), (t.flags |= 256), Fe(e, t, n, r), t.child;
}
var as = { dehydrated: null, treeContext: null, retryLane: 0 };
function ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bh(e, t, n) {
  var r = t.pendingProps,
    i = ge.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    le(ge, i & 1),
    e === null)
  )
    return (
      es(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = gl(l, r, 0, null)),
              (e = Dn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ss(n)),
              (t.memoizedState = as),
              e)
            : vu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return ly(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = wn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = wn(a, o)) : ((o = Dn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ss(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = as),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wn(o, { mode: "visible", children: r.children })),
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
function vu(e, t) {
  return (
    (t = gl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function eo(e, t, n, r) {
  return (
    r !== null && ou(r),
    Sr(t, e.child, null, n),
    (e = vu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ly(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = na(Error(R(422)))), eo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = gl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Dn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Sr(t, e.child, null, l),
        (t.child.memoizedState = ss(l)),
        (t.memoizedState = as),
        o);
  if (!(t.mode & 1)) return eo(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(R(419))), (r = na(o, r, void 0)), eo(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), We || a)) {
    if (((r = _e), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), qt(e, i), St(r, e, i, -1));
    }
    return Eu(), (r = na(Error(R(421)))), eo(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Je = hn(i.nextSibling)),
      (et = t),
      (me = !0),
      (xt = null),
      e !== null &&
        ((ot[lt++] = jt),
        (ot[lt++] = Bt),
        (ot[lt++] = jn),
        (jt = e.id),
        (Bt = e.overflow),
        (jn = t)),
      (t = vu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ts(e.return, t, n);
}
function ra(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ch(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Fe(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sf(e, n, t);
        else if (e.tag === 19) sf(e, n, t);
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
  if ((le(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Vo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ra(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Vo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ra(t, !0, n, null, o);
        break;
      case "together":
        ra(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ay(e, t, n) {
  switch (t.tag) {
    case 3:
      Sh(t), kr();
      break;
    case 5:
      Gp(t);
      break;
    case 1:
      Qe(t.type) && Fo(t);
      break;
    case 4:
      fu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      le(Bo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bh(e, t, n)
          : (le(ge, ge.current & 1),
            (e = Qt(e, t, n)),
            e !== null ? e.sibling : null);
      le(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ch(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        le(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xh(e, t, n);
  }
  return Qt(e, t, n);
}
var Eh, us, Ph, Th;
Eh = function (e, t) {
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
us = function () {};
Ph = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), On(Lt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ra(e, i)), (r = Ra(e, r)), (o = []);
        break;
      case "select":
        (i = we({}, i, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Oa(e, i)), (r = Oa(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mo);
    }
    Ma(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ci.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ci.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && fe("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Th = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hr(e, t) {
  if (!me)
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
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sy(e, t, n) {
  var r = t.pendingProps;
  switch ((iu(t), t.tag)) {
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
      return Ne(t), null;
    case 1:
      return Qe(t.type) && Do(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        br(),
        de(qe),
        de(Me),
        pu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (ys(xt), (xt = null)))),
        us(e, t),
        Ne(t),
        null
      );
    case 5:
      du(t);
      var i = On(Si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ph(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ne(t), null;
        }
        if (((e = On(Lt.current)), Zi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[At] = t), (r[xi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Zr.length; i++) fe(Zr[i], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              gc(r, o), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              wc(r, o), fe("invalid", r);
          }
          Ma(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Gi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ci.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Hi(r), yc(r, o, !0);
              break;
            case "textarea":
              Hi(r), vc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Mo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ep(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[At] = t),
            (e[xi] = r),
            Eh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Da(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Zr.length; i++) fe(Zr[i], e);
                i = r;
                break;
              case "source":
                fe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (i = r);
                break;
              case "details":
                fe("toggle", e), (i = r);
                break;
              case "input":
                gc(e, r), (i = Ra(e, r)), fe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = we({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                wc(e, r), (i = Oa(e, r)), fe("invalid", e);
                break;
              default:
                i = r;
            }
            Ma(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? rp(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && tp(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && fi(e, s)
                    : typeof s == "number" && fi(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ci.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && fe("scroll", e)
                      : s != null && Hs(e, o, s, l));
              }
            switch (n) {
              case "input":
                Hi(e), yc(e, r, !1);
                break;
              case "textarea":
                Hi(e), vc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? dr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      dr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mo);
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
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Th(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = On(Si.current)), On(Lt.current), Zi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[At] = t),
            (o = r.nodeValue !== n) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[At] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (de(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && Je !== null && t.mode & 1 && !(t.flags & 128))
          Vp(), kr(), (t.flags |= 98560), (o = !1);
        else if (((o = Zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[At] = t;
          } else
            kr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (o = !1);
        } else xt !== null && (ys(xt), (xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Pe === 0 && (Pe = 3) : Eu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        br(), us(e, t), e === null && wi(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return su(t.type._context), Ne(t), null;
    case 17:
      return Qe(t.type) && Do(), Ne(t), null;
    case 19:
      if ((de(ge), (o = t.memoizedState), o === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Hr(o, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Vo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Hr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            xe() > Er &&
            ((t.flags |= 128), (r = !0), Hr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !me)
            )
              return Ne(t), null;
          } else
            2 * xe() - o.renderingStartTime > Er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = xe()),
          (t.sibling = null),
          (n = ge.current),
          le(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function uy(e, t) {
  switch ((iu(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && Do(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        br(),
        de(qe),
        de(Me),
        pu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return du(t), null;
    case 13:
      if (
        (de(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        kr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(ge), null;
    case 4:
      return br(), null;
    case 10:
      return su(t.type._context), null;
    case 22:
    case 23:
      return Cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var to = !1,
  Oe = !1,
  cy = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function cs(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var uf = !1;
function fy(e, t) {
  if (((Qa = No), (e = Rp()), nu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              c !== n || (i !== 0 && c.nodeType !== 3) || (a = l + i),
                c !== o || (r !== 0 && c.nodeType !== 3) || (s = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (p = c.firstChild) !== null;

            )
              (d = c), (c = p);
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++u === i && (a = l),
                d === o && ++f === r && (s = l),
                (p = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = p;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xa = { focusedElem: e, selectionRange: n }, No = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var y = h.memoizedProps,
                    b = h.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : wt(t.type, y),
                      b
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (E) {
          ve(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (h = uf), (uf = !1), h;
}
function oi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && cs(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function hl(e, t) {
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
function fs(e) {
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
function _h(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _h(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[At], delete t[xi], delete t[Ga], delete t[Q1], delete t[X1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ah(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ah(e.return)) return null;
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
function ds(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Mo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), (e = e.sibling);
}
function ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ps(e, t, n), e = e.sibling; e !== null; ) ps(e, t, n), (e = e.sibling);
}
var Ae = null,
  vt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) zh(e, t, n), (n = n.sibling);
}
function zh(e, t, n) {
  if (Rt && typeof Rt.onCommitFiberUnmount == "function")
    try {
      Rt.onCommitFiberUnmount(ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || cr(n, t);
    case 6:
      var r = Ae,
        i = vt;
      (Ae = null),
        Zt(e, t, n),
        (Ae = r),
        (vt = i),
        Ae !== null &&
          (vt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (vt
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            mi(e))
          : Yl(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (i = vt),
        (Ae = n.stateNode.containerInfo),
        (vt = !0),
        Zt(e, t, n),
        (Ae = r),
        (vt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && cs(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (cr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Zt(e, t, n), (Oe = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function ff(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cy()),
      t.forEach(function (r) {
        var i = xy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (vt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(R(160));
        zh(o, l, i), (Ae = null), (vt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        ve(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rh(t, e), (t = t.sibling);
}
function Rh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Pt(e), r & 4)) {
        try {
          oi(3, e, e.return), hl(3, e);
        } catch (y) {
          ve(e, e.return, y);
        }
        try {
          oi(5, e, e.return);
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 1:
      yt(t, e), Pt(e), r & 512 && n !== null && cr(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Pt(e),
        r & 512 && n !== null && cr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          fi(i, "");
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Zd(i, o),
              Da(a, l);
            var u = Da(a, o);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                c = s[l + 1];
              f === "style"
                ? rp(i, c)
                : f === "dangerouslySetInnerHTML"
                ? tp(i, c)
                : f === "children"
                ? fi(i, c)
                : Hs(i, f, c, u);
            }
            switch (a) {
              case "input":
                La(i, o);
                break;
              case "textarea":
                Jd(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? dr(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? dr(i, !!o.multiple, o.defaultValue, !0)
                      : dr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[xi] = o;
          } catch (y) {
            ve(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          mi(t.containerInfo);
        } catch (y) {
          ve(e, e.return, y);
        }
      break;
    case 4:
      yt(t, e), Pt(e);
      break;
    case 13:
      yt(t, e),
        Pt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Su = xe())),
        r & 4 && ff(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || f), yt(t, e), (Oe = u)) : yt(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (F = e, f = e.child; f !== null; ) {
            for (c = F = f; F !== null; ) {
              switch (((d = F), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  oi(4, d, d.return);
                  break;
                case 1:
                  cr(d, d.return);
                  var h = d.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (y) {
                      ve(r, n, y);
                    }
                  }
                  break;
                case 5:
                  cr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    pf(c);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (F = p)) : pf(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = np("display", l)));
              } catch (y) {
                ve(e, e.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (y) {
                ve(e, e.return, y);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Pt(e), r & 4 && ff(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ah(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (fi(i, ""), (r.flags &= -33));
          var o = cf(e);
          ps(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = cf(e);
          ds(e, a, l);
          break;
        default:
          throw Error(R(161));
      }
    } catch (s) {
      ve(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dy(e, t, n) {
  (F = e), Lh(e);
}
function Lh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || to;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || Oe;
        a = to;
        var u = Oe;
        if (((to = l), (Oe = s) && !u))
          for (F = i; F !== null; )
            (l = F),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? hf(i)
                : s !== null
                ? ((s.return = l), (F = s))
                : hf(i);
        for (; o !== null; ) (F = o), Lh(o), (o = o.sibling);
        (F = i), (to = a), (Oe = u);
      }
      df(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (F = o)) : df(e);
  }
}
function df(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xc(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && mi(c);
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
              throw Error(R(163));
          }
        Oe || (t.flags & 512 && fs(t));
      } catch (d) {
        ve(t, t.return, d);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function pf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function hf(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (s) {
            ve(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ve(t, i, s);
            }
          }
          var o = t.return;
          try {
            fs(t);
          } catch (s) {
            ve(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            fs(t);
          } catch (s) {
            ve(t, l, s);
          }
      }
    } catch (s) {
      ve(t, t.return, s);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var py = Math.ceil,
  Qo = Xt.ReactCurrentDispatcher,
  xu = Xt.ReactCurrentOwner,
  ut = Xt.ReactCurrentBatchConfig,
  ee = 0,
  _e = null,
  be = null,
  ze = 0,
  Ze = 0,
  fr = Sn(0),
  Pe = 0,
  Pi = null,
  Un = 0,
  ml = 0,
  ku = 0,
  li = null,
  Ve = null,
  Su = 0,
  Er = 1 / 0,
  Ft = null,
  Xo = !1,
  hs = null,
  gn = null,
  no = !1,
  cn = null,
  Ko = 0,
  ai = 0,
  ms = null,
  xo = -1,
  ko = 0;
function je() {
  return ee & 6 ? xe() : xo !== -1 ? xo : (xo = xe());
}
function yn(e) {
  return e.mode & 1
    ? ee & 2 && ze !== 0
      ? ze & -ze
      : Y1.transition !== null
      ? (ko === 0 && (ko = mp()), ko)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sp(e.type))),
        e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < ai) throw ((ai = 0), (ms = null), Error(R(185)));
  Ri(e, n, r),
    (!(ee & 2) || e !== _e) &&
      (e === _e && (!(ee & 2) && (ml |= n), Pe === 4 && an(e, ze)),
      Xe(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((Er = xe() + 500), fl && bn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  Yg(e, t);
  var r = Lo(e, e === _e ? ze : 0);
  if (r === 0)
    n !== null && Sc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sc(n), t === 1))
      e.tag === 0 ? K1(mf.bind(null, e)) : Bp(mf.bind(null, e)),
        W1(function () {
          !(ee & 6) && bn();
        }),
        (n = null);
    else {
      switch (gp(r)) {
        case 1:
          n = Xs;
          break;
        case 4:
          n = pp;
          break;
        case 16:
          n = Ro;
          break;
        case 536870912:
          n = hp;
          break;
        default:
          n = Ro;
      }
      n = jh(n, Nh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nh(e, t) {
  if (((xo = -1), (ko = 0), ee & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = Lo(e, e === _e ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Yo(e, r);
  else {
    t = r;
    var i = ee;
    ee |= 2;
    var o = Ih();
    (_e !== e || ze !== t) && ((Ft = null), (Er = xe() + 500), Mn(e, t));
    do
      try {
        gy();
        break;
      } catch (a) {
        Oh(e, a);
      }
    while (!0);
    au(),
      (Qo.current = o),
      (ee = i),
      be !== null ? (t = 0) : ((_e = null), (ze = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ua(e)), i !== 0 && ((r = i), (t = gs(e, i)))), t === 1)
    )
      throw ((n = Pi), Mn(e, 0), an(e, r), Xe(e, xe()), n);
    if (t === 6) an(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !hy(i) &&
          ((t = Yo(e, r)),
          t === 2 && ((o = Ua(e)), o !== 0 && ((r = o), (t = gs(e, o)))),
          t === 1))
      )
        throw ((n = Pi), Mn(e, 0), an(e, r), Xe(e, xe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          zn(e, Ve, Ft);
          break;
        case 3:
          if (
            (an(e, r), (r & 130023424) === r && ((t = Su + 500 - xe()), 10 < t))
          ) {
            if (Lo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ya(zn.bind(null, e, Ve, Ft), t);
            break;
          }
          zn(e, Ve, Ft);
          break;
        case 4:
          if ((an(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - kt(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = xe() - r),
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
                : 1960 * py(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ya(zn.bind(null, e, Ve, Ft), r);
            break;
          }
          zn(e, Ve, Ft);
          break;
        case 5:
          zn(e, Ve, Ft);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Xe(e, xe()), e.callbackNode === n ? Nh.bind(null, e) : null;
}
function gs(e, t) {
  var n = li;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = Yo(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && ys(t)),
    e
  );
}
function ys(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function hy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ct(o(), i)) return !1;
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
function an(e, t) {
  for (
    t &= ~ku,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function mf(e) {
  if (ee & 6) throw Error(R(327));
  yr();
  var t = Lo(e, 0);
  if (!(t & 1)) return Xe(e, xe()), null;
  var n = Yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ua(e);
    r !== 0 && ((t = r), (n = gs(e, r)));
  }
  if (n === 1) throw ((n = Pi), Mn(e, 0), an(e, t), Xe(e, xe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zn(e, Ve, Ft),
    Xe(e, xe()),
    null
  );
}
function bu(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((Er = xe() + 500), fl && bn());
  }
}
function Hn(e) {
  cn !== null && cn.tag === 0 && !(ee & 6) && yr();
  var t = ee;
  ee |= 1;
  var n = ut.transition,
    r = ne;
  try {
    if (((ut.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (ut.transition = n), (ee = t), !(ee & 6) && bn();
  }
}
function Cu() {
  (Ze = fr.current), de(fr);
}
function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), V1(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((iu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Do();
          break;
        case 3:
          br(), de(qe), de(Me), pu();
          break;
        case 5:
          du(r);
          break;
        case 4:
          br();
          break;
        case 13:
          de(ge);
          break;
        case 19:
          de(ge);
          break;
        case 10:
          su(r.type._context);
          break;
        case 22:
        case 23:
          Cu();
      }
      n = n.return;
    }
  if (
    ((_e = e),
    (be = e = wn(e.current, null)),
    (ze = Ze = t),
    (Pe = 0),
    (Pi = null),
    (ku = ml = Un = 0),
    (Ve = li = null),
    Nn !== null)
  ) {
    for (t = 0; t < Nn.length; t++)
      if (((n = Nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Nn = null;
  }
  return e;
}
function Oh(e, t) {
  do {
    var n = be;
    try {
      if ((au(), (yo.current = qo), Wo)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Wo = !1;
      }
      if (
        ((Bn = 0),
        (Te = Ee = ye = null),
        (ii = !1),
        (bi = 0),
        (xu.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (Pi = t), (be = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = ze),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var p = tf(l);
          if (p !== null) {
            (p.flags &= -257),
              nf(p, l, a, o, t),
              p.mode & 1 && ef(o, u, t),
              (t = p),
              (s = u);
            var h = t.updateQueue;
            if (h === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else h.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ef(o, u, t), Eu();
              break e;
            }
            s = Error(R(426));
          }
        } else if (me && a.mode & 1) {
          var b = tf(l);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              nf(b, l, a, o, t),
              ou(Cr(s, a));
            break e;
          }
        }
        (o = s = Cr(s, a)),
          Pe !== 4 && (Pe = 2),
          li === null ? (li = [o]) : li.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = yh(o, s, t);
              Qc(o, m);
              break e;
            case 1:
              a = s;
              var g = o.type,
                w = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (gn === null || !gn.has(w))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = wh(o, a, t);
                Qc(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Dh(n);
    } catch (P) {
      (t = P), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ih() {
  var e = Qo.current;
  return (Qo.current = qo), e === null ? qo : e;
}
function Eu() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    _e === null || (!(Un & 268435455) && !(ml & 268435455)) || an(_e, ze);
}
function Yo(e, t) {
  var n = ee;
  ee |= 2;
  var r = Ih();
  (_e !== e || ze !== t) && ((Ft = null), Mn(e, t));
  do
    try {
      my();
      break;
    } catch (i) {
      Oh(e, i);
    }
  while (!0);
  if ((au(), (ee = n), (Qo.current = r), be !== null)) throw Error(R(261));
  return (_e = null), (ze = 0), Pe;
}
function my() {
  for (; be !== null; ) Mh(be);
}
function gy() {
  for (; be !== null && !Bg(); ) Mh(be);
}
function Mh(e) {
  var t = $h(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dh(e) : (be = t),
    (xu.current = null);
}
function Dh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uy(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (be = null);
        return;
      }
    } else if (((n = sy(n, t, Ze)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function zn(e, t, n) {
  var r = ne,
    i = ut.transition;
  try {
    (ut.transition = null), (ne = 1), yy(e, t, n, r);
  } finally {
    (ut.transition = i), (ne = r);
  }
  return null;
}
function yy(e, t, n, r) {
  do yr();
  while (cn !== null);
  if (ee & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Gg(e, o),
    e === _e && ((be = _e = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      no ||
      ((no = !0),
      jh(Ro, function () {
        return yr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ut.transition), (ut.transition = null);
    var l = ne;
    ne = 1;
    var a = ee;
    (ee |= 4),
      (xu.current = null),
      fy(e, n),
      Rh(n, e),
      D1(Xa),
      (No = !!Qa),
      (Xa = Qa = null),
      (e.current = n),
      dy(n),
      Ug(),
      (ee = a),
      (ne = l),
      (ut.transition = o);
  } else e.current = n;
  if (
    (no && ((no = !1), (cn = e), (Ko = i)),
    (o = e.pendingLanes),
    o === 0 && (gn = null),
    Wg(n.stateNode),
    Xe(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Xo) throw ((Xo = !1), (e = hs), (hs = null), e);
  return (
    Ko & 1 && e.tag !== 0 && yr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ms ? ai++ : ((ai = 0), (ms = e))) : (ai = 0),
    bn(),
    null
  );
}
function yr() {
  if (cn !== null) {
    var e = gp(Ko),
      t = ut.transition,
      n = ne;
    try {
      if (((ut.transition = null), (ne = 16 > e ? 16 : e), cn === null))
        var r = !1;
      else {
        if (((e = cn), (cn = null), (Ko = 0), ee & 6)) throw Error(R(331));
        var i = ee;
        for (ee |= 4, F = e.current; F !== null; ) {
          var o = F,
            l = o.child;
          if (F.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (F = u; F !== null; ) {
                  var f = F;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oi(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (F = c);
                  else
                    for (; F !== null; ) {
                      f = F;
                      var d = f.sibling,
                        p = f.return;
                      if ((_h(f), f === u)) {
                        F = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (F = d);
                        break;
                      }
                      F = p;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var b = y.sibling;
                    (y.sibling = null), (y = b);
                  } while (y !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (F = l);
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    oi(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (F = m);
                break e;
              }
              F = o.return;
            }
        }
        var g = e.current;
        for (F = g; F !== null; ) {
          l = F;
          var w = l.child;
          if (l.subtreeFlags & 2064 && w !== null) (w.return = l), (F = w);
          else
            e: for (l = g; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hl(9, a);
                  }
                } catch (P) {
                  ve(a, a.return, P);
                }
              if (a === l) {
                F = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (F = E);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((ee = i), bn(), Rt && typeof Rt.onPostCommitFiberRoot == "function")
        )
          try {
            Rt.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (ut.transition = t);
    }
  }
  return !1;
}
function gf(e, t, n) {
  (t = Cr(n, t)),
    (t = yh(e, t, 1)),
    (e = mn(e, t, 1)),
    (t = je()),
    e !== null && (Ri(e, 1, t), Xe(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) gf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gn === null || !gn.has(r)))
        ) {
          (e = Cr(n, e)),
            (e = wh(t, e, 1)),
            (t = mn(t, e, 1)),
            (e = je()),
            t !== null && (Ri(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (ze & n) === n &&
      (Pe === 4 || (Pe === 3 && (ze & 130023424) === ze && 500 > xe() - Su)
        ? Mn(e, 0)
        : (ku |= n)),
    Xe(e, t);
}
function Fh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qi), (qi <<= 1), !(qi & 130023424) && (qi = 4194304))
      : (t = 1));
  var n = je();
  (e = qt(e, t)), e !== null && (Ri(e, t, n), Xe(e, n));
}
function vy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fh(e, n);
}
function xy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Fh(e, n);
}
var $h;
$h = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), ay(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), me && t.flags & 1048576 && Up(t, jo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      vo(e, t), (e = t.pendingProps);
      var i = xr(t, Me.current);
      gr(t, n), (i = mu(null, t, r, e, i, n));
      var o = gu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((o = !0), Fo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            cu(t),
            (i.updater = dl),
            (t.stateNode = i),
            (i._reactInternals = t),
            rs(t, r, e, n),
            (t = ls(null, t, r, !0, o, n)))
          : ((t.tag = 0), me && o && ru(t), Fe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (vo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Sy(r)),
          (e = wt(r, e)),
          i)
        ) {
          case 0:
            t = os(null, t, r, e, n);
            break e;
          case 1:
            t = lf(null, t, r, e, n);
            break e;
          case 11:
            t = rf(null, t, r, e, n);
            break e;
          case 14:
            t = of(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        os(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        lf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Sh(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          qp(e, t),
          Ho(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Cr(Error(R(423)), t)), (t = af(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Cr(Error(R(424)), t)), (t = af(e, t, r, n, i));
            break e;
          } else
            for (
              Je = hn(t.stateNode.containerInfo.firstChild),
                et = t,
                me = !0,
                xt = null,
                n = Yp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((kr(), r === i)) {
            t = Qt(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gp(t),
        e === null && es(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ka(r, i) ? (l = null) : o !== null && Ka(r, o) && (t.flags |= 32),
        kh(e, t),
        Fe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && es(t), null;
    case 13:
      return bh(e, t, n);
    case 4:
      return (
        fu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sr(t, null, r, n)) : Fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        rf(e, t, r, i, n)
      );
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          le(Bo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Ct(o.value, l)) {
            if (o.children === i.children && !qe.current) {
              t = Qt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ut(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ts(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(R(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  ts(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Fe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        gr(t, n),
        (i = ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = wt(r, t.pendingProps)),
        (i = wt(r.type, i)),
        of(e, t, r, i, n)
      );
    case 15:
      return vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wt(r, i)),
        vo(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), Fo(t)) : (e = !1),
        gr(t, n),
        Xp(t, r, i),
        rs(t, r, i, n),
        ls(null, t, r, !0, e, n)
      );
    case 19:
      return Ch(e, t, n);
    case 22:
      return xh(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function jh(e, t) {
  return dp(e, t);
}
function ky(e, t, n, r) {
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
function st(e, t, n, r) {
  return new ky(e, t, n, r);
}
function Pu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sy(e) {
  if (typeof e == "function") return Pu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ws)) return 11;
    if (e === qs) return 14;
  }
  return 2;
}
function wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
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
function So(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Pu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case tr:
        return Dn(n.children, i, o, t);
      case Vs:
        (l = 8), (i |= 8);
        break;
      case Ta:
        return (
          (e = st(12, n, t, i | 2)), (e.elementType = Ta), (e.lanes = o), e
        );
      case _a:
        return (e = st(13, n, t, i)), (e.elementType = _a), (e.lanes = o), e;
      case Aa:
        return (e = st(19, n, t, i)), (e.elementType = Aa), (e.lanes = o), e;
      case Kd:
        return gl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qd:
              l = 10;
              break e;
            case Xd:
              l = 9;
              break e;
            case Ws:
              l = 11;
              break e;
            case qs:
              l = 14;
              break e;
            case rn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Dn(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function gl(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Kd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ia(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function oa(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function by(e, t, n, r, i) {
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
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Tu(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new by(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = st(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    cu(o),
    e
  );
}
function Cy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: er,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bh(e) {
  if (!e) return xn;
  e = e._reactInternals;
  e: {
    if (qn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return jp(e, n, t);
  }
  return t;
}
function Uh(e, t, n, r, i, o, l, a, s) {
  return (
    (e = Tu(n, r, !0, e, i, o, l, a, s)),
    (e.context = Bh(null)),
    (n = e.current),
    (r = je()),
    (i = yn(n)),
    (o = Ut(r, i)),
    (o.callback = t ?? null),
    mn(n, o, i),
    (e.current.lanes = i),
    Ri(e, i, r),
    Xe(e, r),
    e
  );
}
function yl(e, t, n, r) {
  var i = t.current,
    o = je(),
    l = yn(i);
  return (
    (n = Bh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mn(i, t, l)),
    e !== null && (St(e, i, l, o), go(e, i, l)),
    l
  );
}
function Go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _u(e, t) {
  yf(e, t), (e = e.alternate) && yf(e, t);
}
function Ey() {
  return null;
}
var Hh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Au(e) {
  this._internalRoot = e;
}
wl.prototype.render = Au.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  yl(e, t, null, null);
};
wl.prototype.unmount = Au.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function () {
      yl(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && kp(e);
  }
};
function zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wf() {}
function Py(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Go(l);
        o.call(u);
      };
    }
    var l = Uh(t, r, e, 0, null, !1, !1, "", wf);
    return (
      (e._reactRootContainer = l),
      (e[Wt] = l.current),
      wi(e.nodeType === 8 ? e.parentNode : e),
      Hn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Go(s);
      a.call(u);
    };
  }
  var s = Tu(e, 0, !1, null, null, !1, !1, "", wf);
  return (
    (e._reactRootContainer = s),
    (e[Wt] = s.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    Hn(function () {
      yl(t, s, n, r);
    }),
    s
  );
}
function xl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = Go(l);
        a.call(s);
      };
    }
    yl(t, l, e, i);
  } else l = Py(n, t, e, i, r);
  return Go(l);
}
yp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gr(t.pendingLanes);
        n !== 0 &&
          (Ks(t, n | 1), Xe(t, xe()), !(ee & 6) && ((Er = xe() + 500), bn()));
      }
      break;
    case 13:
      Hn(function () {
        var r = qt(e, 1);
        if (r !== null) {
          var i = je();
          St(r, e, 1, i);
        }
      }),
        _u(e, 1);
  }
};
Ys = function (e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = je();
      St(t, e, 134217728, n);
    }
    _u(e, 134217728);
  }
};
wp = function (e) {
  if (e.tag === 13) {
    var t = yn(e),
      n = qt(e, t);
    if (n !== null) {
      var r = je();
      St(n, e, t, r);
    }
    _u(e, t);
  }
};
vp = function () {
  return ne;
};
xp = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
$a = function (e, t, n) {
  switch (t) {
    case "input":
      if ((La(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = cl(r);
            if (!i) throw Error(R(90));
            Gd(r), La(r, i);
          }
        }
      }
      break;
    case "textarea":
      Jd(e, n);
      break;
    case "select":
      (t = n.value), t != null && dr(e, !!n.multiple, t, !1);
  }
};
lp = bu;
ap = Hn;
var Ty = { usingClientEntryPoint: !1, Events: [Ni, or, cl, ip, op, bu] },
  Vr = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  _y = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Ey,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ro.isDisabled && ro.supportsFiber)
    try {
      (ll = ro.inject(_y)), (Rt = ro);
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ty;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zu(t)) throw Error(R(200));
  return Cy(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!zu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = Hh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Tu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Wt] = t.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    new Au(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = cp(t)), (e = e === null ? null : e.stateNode), e;
};
rt.flushSync = function (e) {
  return Hn(e);
};
rt.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(R(200));
  return xl(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!zu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Hh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Uh(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Wt] = t.current),
    wi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new wl(t);
};
rt.render = function (e, t, n) {
  if (!vl(t)) throw Error(R(200));
  return xl(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Hn(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = bu;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return xl(e, t, n, !1, r);
};
rt.version = "18.2.0-next-9e3b772b8-20220608";
function Vh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh);
    } catch (e) {
      console.error(e);
    }
}
Vh(), (Ud.exports = rt);
var Wh = Ud.exports,
  vf = Wh;
(Ea.createRoot = vf.createRoot), (Ea.hydrateRoot = vf.hydrateRoot);
const Ay =
  '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:root{--background: 0 0% 100%;--foreground: 0 0% 3.9%;--card: 0 0% 100%;--card-foreground: 0 0% 3.9%;--popover: 0 0% 100%;--popover-foreground: 0 0% 3.9%;--primary: 0 0% 9%;--primary-foreground: 0 0% 98%;--secondary: 0 0% 96.1%;--secondary-foreground: 0 0% 9%;--muted: 0 0% 96.1%;--muted-foreground: 0 0% 45.1%;--accent: 0 0% 96.1%;--accent-foreground: 0 0% 9%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 0 0% 98%;--border: 0 0% 89.8%;--input: 0 0% 89.8%;--ring: 0 0% 3.9%;--radius: 1rem}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.relative{position:relative}.m-0{margin:0}.m-2{margin:.5rem}.ml-auto{margin-left:auto}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1 / 1}.h-10{height:2.5rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-full{height:100%}.w-10{width:2.5rem}.w-2{width:.5rem}.w-2\\.5{width:.625rem}.w-5{width:1.25rem}.w-9{width:2.25rem}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.max-w-\\[75\\%\\]{max-width:75%}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.touch-none{touch-action:none}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-2{gap:.5rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.text-wrap{text-wrap:wrap}.break-words{overflow-wrap:break-word}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-l{border-left-width:1px}.border-t{border-top-width:1px}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-input{border-color:hsl(var(--input))}.border-l-transparent{border-left-color:transparent}.border-t-transparent{border-top-color:transparent}.bg-background{background-color:hsl(var(--background))}.bg-border{background-color:hsl(var(--border))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-muted{background-color:hsl(var(--muted))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-0{padding:0}.p-2{padding:.5rem}.p-6{padding:1.5rem}.p-\\[1px\\]{padding:1px}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.pt-0{padding-top:0}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.text-card-foreground{color:hsl(var(--card-foreground))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.markdown_prose h1{font-size:2.5rem;font-weight:700;margin:1.5rem 0}.markdown_prose li{margin:.5rem 0}.markdown_prose ul{list-style:disc;margin:.5rem 0;padding-left:1rem}.markdown_prose a{margin:.5rem 0;-webkit-text-decoration:hsl(var(--primary)) underline;text-decoration:hsl(var(--primary)) underline;color:hsl(var(--primary));font-weight:500}.frame{z-index:2147483000;position:fixed;bottom:84px;right:20px;transform-origin:right bottom;height:min(704px,100% - 104px);min-height:80px;max-width:400px;max-height:704px;width:min(400px,100% - 40px);box-shadow:#00000029 0 5px 40px;border-radius:16px;display:flex;flex-direction:column;overflow:hidden;background-color:hsl(var(--background))}.frame .frame_header{border-bottom:none;display:flex;align-items:center;justify-content:flex-start;gap:16px;padding:16px;background-color:hsl(var(--primary));color:hsl(var(--secondary))}.frame .frame_content{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;justify-content:flex-end;gap:16px;height:100%;max-width:400px}.chat_popup_in{animation-name:chat_popup_in_animation;animation-duration:.2s;animation-timing-function:cubic-bezier(0,1.2,1,1)}@keyframes chat_popup_in_animation{0%{scale:0}to{scale:1}}.chat_popup_out{animation-name:chat_popup_out_animation;animation-duration:.2s;animation-timing-function:cubic-bezier(0,1.2,1,1)}@keyframes chat_popup_out_animation{0%{scale:1}to{scale:0}}.chat_text_field{border:none;outline:none;width:100%;height:60px;resize:none;padding:16px;border-radius:0}.trigger_button{-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:2147483000;position:fixed;bottom:20px;right:20px;width:55px;height:55px;border-radius:50%}.typingIndicatorContainer{display:flex;flex:none;align-items:flex-end}.typingIndicatorBubble{display:flex;align-items:center;justify-content:center;width:52px;height:40px;margin:0;background-color:#f0f1f1;border-radius:12px}.typingIndicatorBubbleDot{width:4px;height:4px;margin-right:4px;background-color:#57585a;border-radius:50%;animation-name:bounce;animation-duration:1.3s;animation-timing-function:linear;animation-iteration-count:infinite}.typingIndicatorBubbleDot:first-of-type{margin:0 4px}.typingIndicatorBubbleDot:nth-of-type(2){animation-delay:.15s}.typingIndicatorBubbleDot:nth-of-type(3){animation-delay:.3s}@keyframes bounce{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-4px)}}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-0:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}:is(.dark .dark\\:bg-white){--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}';
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ry = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  pe = (e, t) => {
    const n = C.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: l,
          className: a = "",
          children: s,
          ...u
        },
        f
      ) =>
        C.createElement(
          "svg",
          {
            ref: f,
            ...zy,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: l ? (Number(o) * 24) / Number(i) : o,
            className: ["lucide", `lucide-${Ry(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([c, d]) => C.createElement(c, d)),
            ...(Array.isArray(s) ? s : [s]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ly = pe("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ny = pe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oy = pe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iy = pe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const My = pe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dy = pe("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fy = pe("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4",
    },
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej",
    },
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $y = pe("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = pe("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const By = pe("File", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uy = pe("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hy = pe("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vy = pe("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll",
    },
  ],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wy = pe("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qy = pe("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qy = pe("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xy = pe("Pizza", [
  ["path", { d: "M15 11h.01", key: "rns66s" }],
  ["path", { d: "M11 15h.01", key: "k85uqc" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
  ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ky = pe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yy = pe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gy = pe("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zy = pe("SunMedium", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jy = pe("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ew = pe("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = pe("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nw = pe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ws = {
    logo: ({ ...e }) =>
      $.jsxs("svg", {
        width: "85",
        height: "81",
        viewBox: "0 0 85 81",
        fill: "#ffffff",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          $.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.0003 53.0003C28.1049 53.0003 29.0003 52.1049 29.0003 51.0003C29.0003 49.8958 28.1049 49.0003 27.0003 49.0003C25.8958 49.0003 25.0003 49.8958 25.0003 51.0003C25.0003 52.1049 25.8958 53.0003 27.0003 53.0003ZM27.0003 57.0003C23.6866 57.0003 21.0003 54.314 21.0003 51.0003C21.0003 47.6866 23.6866 45.0003 27.0003 45.0003C30.314 45.0003 33.0003 47.6866 33.0003 51.0003C33.0003 54.314 30.314 57.0003 27.0003 57.0003ZM57.0003 53.0003C58.1049 53.0003 59.0003 52.1049 59.0003 51.0003C59.0003 49.8958 58.1049 49.0003 57.0003 49.0003C55.8958 49.0003 55.0003 49.8958 55.0003 51.0003C55.0003 52.1049 55.8958 53.0003 57.0003 53.0003ZM57.0003 57.0003C53.6866 57.0003 51.0003 54.314 51.0003 51.0003C51.0003 47.6866 53.6866 45.0003 57.0003 45.0003C60.314 45.0003 63.0003 47.6866 63.0003 51.0003C63.0003 54.314 60.314 57.0003 57.0003 57.0003Z",
            fill: "#ffffff",
          }),
          $.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M70.0441 18.7002L80.2926 0.998259C80.846 0.0423355 82.0696 -0.28395 83.0255 0.269479C83.9815 0.822909 84.3077 2.04648 83.7543 3.0024L73.1377 21.3401C82.0003 30.0156 82.0003 41.0003 82.0003 41.0003V61.0003C82.0003 61.0003 82.0003 81.0003 42.0003 81.0003C2.00033 81.0003 2.00033 61.0003 2.00033 61.0003V41.0003C2.00033 41.0003 2.00033 30.0048 10.8761 21.3272L0.269417 3.0024C-0.283885 2.04648 0.0423265 0.822909 0.99803 0.269479C1.95373 -0.28395 3.17702 0.0423355 3.73032 0.998259L13.9705 18.6898C19.8962 14.2896 28.7554 11.0003 42.0003 11.0003C55.2556 11.0003 64.1184 14.2948 70.0441 18.7002ZM12.0003 51.0003C12.0003 42.7161 18.7084 36.0003 27.0054 36.0003H56.9953C65.2823 36.0003 72.0003 42.7142 72.0003 51.0003C72.0003 59.2846 65.2922 66.0003 56.9953 66.0003H27.0054C18.7183 66.0003 12.0003 59.2864 12.0003 51.0003Z",
            fill: "#ffffff",
          }),
        ],
      }),
    logoDark: ({ ...e }) =>
      $.jsxs("svg", {
        width: "85",
        height: "81",
        viewBox: "0 0 85 81",
        fill: "#00000",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          $.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.0003 53.0003C28.1049 53.0003 29.0003 52.1049 29.0003 51.0003C29.0003 49.8958 28.1049 49.0003 27.0003 49.0003C25.8958 49.0003 25.0003 49.8958 25.0003 51.0003C25.0003 52.1049 25.8958 53.0003 27.0003 53.0003ZM27.0003 57.0003C23.6866 57.0003 21.0003 54.314 21.0003 51.0003C21.0003 47.6866 23.6866 45.0003 27.0003 45.0003C30.314 45.0003 33.0003 47.6866 33.0003 51.0003C33.0003 54.314 30.314 57.0003 27.0003 57.0003ZM57.0003 53.0003C58.1049 53.0003 59.0003 52.1049 59.0003 51.0003C59.0003 49.8958 58.1049 49.0003 57.0003 49.0003C55.8958 49.0003 55.0003 49.8958 55.0003 51.0003C55.0003 52.1049 55.8958 53.0003 57.0003 53.0003ZM57.0003 57.0003C53.6866 57.0003 51.0003 54.314 51.0003 51.0003C51.0003 47.6866 53.6866 45.0003 57.0003 45.0003C60.314 45.0003 63.0003 47.6866 63.0003 51.0003C63.0003 54.314 60.314 57.0003 57.0003 57.0003Z",
            fill: "#00000",
          }),
          $.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M70.0441 18.7002L80.2926 0.998259C80.846 0.0423355 82.0696 -0.28395 83.0255 0.269479C83.9815 0.822909 84.3077 2.04648 83.7543 3.0024L73.1377 21.3401C82.0003 30.0156 82.0003 41.0003 82.0003 41.0003V61.0003C82.0003 61.0003 82.0003 81.0003 42.0003 81.0003C2.00033 81.0003 2.00033 61.0003 2.00033 61.0003V41.0003C2.00033 41.0003 2.00033 30.0048 10.8761 21.3272L0.269417 3.0024C-0.283885 2.04648 0.0423265 0.822909 0.99803 0.269479C1.95373 -0.28395 3.17702 0.0423355 3.73032 0.998259L13.9705 18.6898C19.8962 14.2896 28.7554 11.0003 42.0003 11.0003C55.2556 11.0003 64.1184 14.2948 70.0441 18.7002ZM12.0003 51.0003C12.0003 42.7161 18.7084 36.0003 27.0054 36.0003H56.9953C65.2823 36.0003 72.0003 42.7142 72.0003 51.0003C72.0003 59.2846 65.2922 66.0003 56.9953 66.0003H27.0054C18.7183 66.0003 12.0003 59.2864 12.0003 51.0003Z",
            fill: "#00000",
          }),
        ],
      }),
    close: nw,
    spinner: Wy,
    chevronLeft: Iy,
    chevronRight: My,
    trash: Jy,
    post: jy,
    page: By,
    media: Hy,
    settings: Gy,
    billing: Dy,
    ellipsis: Qy,
    add: Ky,
    warning: Ly,
    user: tw,
    arrowRight: Ny,
    help: Uy,
    pizza: Xy,
    sun: Zy,
    moon: qy,
    laptop: Vy,
    search: Yy,
    eye: $y,
    eyeOff: Fy,
    gitHub: ({ ...e }) =>
      $.jsx("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fab",
        "data-icon": "github",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 496 512",
        ...e,
        children: $.jsx("path", {
          fill: "currentColor",
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        }),
      }),
    twitter: ew,
    check: Oy,
    logoLoading: ({ ...e }) =>
      $.jsxs("svg", {
        width: "85",
        height: "81",
        viewBox: "0 0 85 81",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          $.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M27.0003 53.0003C28.1049 53.0003 29.0003 52.1049 29.0003 51.0003C29.0003 49.8958 28.1049 49.0003 27.0003 49.0003C25.8958 49.0003 25.0003 49.8958 25.0003 51.0003C25.0003 52.1049 25.8958 53.0003 27.0003 53.0003ZM27.0003 57.0003C23.6866 57.0003 21.0003 54.314 21.0003 51.0003C21.0003 47.6866 23.6866 45.0003 27.0003 45.0003C30.314 45.0003 33.0003 47.6866 33.0003 51.0003C33.0003 54.314 30.314 57.0003 27.0003 57.0003ZM57.0003 53.0003C58.1049 53.0003 59.0003 52.1049 59.0003 51.0003C59.0003 49.8958 58.1049 49.0003 57.0003 49.0003C55.8958 49.0003 55.0003 49.8958 55.0003 51.0003C55.0003 52.1049 55.8958 53.0003 57.0003 53.0003ZM57.0003 57.0003C53.6866 57.0003 51.0003 54.314 51.0003 51.0003C51.0003 47.6866 53.6866 45.0003 57.0003 45.0003C60.314 45.0003 63.0003 47.6866 63.0003 51.0003C63.0003 54.314 60.314 57.0003 57.0003 57.0003Z",
            fill: "#bac4ce",
          }),
          $.jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M70.0441 18.7002L80.2926 0.998259C80.846 0.0423355 82.0696 -0.28395 83.0255 0.269479C83.9815 0.822909 84.3077 2.04648 83.7543 3.0024L73.1377 21.3401C82.0003 30.0156 82.0003 41.0003 82.0003 41.0003V61.0003C82.0003 61.0003 82.0003 81.0003 42.0003 81.0003C2.00033 81.0003 2.00033 61.0003 2.00033 61.0003V41.0003C2.00033 41.0003 2.00033 30.0048 10.8761 21.3272L0.269417 3.0024C-0.283885 2.04648 0.0423265 0.822909 0.99803 0.269479C1.95373 -0.28395 3.17702 0.0423355 3.73032 0.998259L13.9705 18.6898C19.8962 14.2896 28.7554 11.0003 42.0003 11.0003C55.2556 11.0003 64.1184 14.2948 70.0441 18.7002ZM12.0003 51.0003C12.0003 42.7161 18.7084 36.0003 27.0054 36.0003H56.9953C65.2823 36.0003 72.0003 42.7142 72.0003 51.0003C72.0003 59.2846 65.2922 66.0003 56.9953 66.0003H27.0054C18.7183 66.0003 12.0003 59.2864 12.0003 51.0003Z",
            fill: "#bac4ce",
          }),
        ],
      }),
  };
function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ae.apply(this, arguments)
  );
}
function rw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function qh(...e) {
  return (t) => e.forEach((n) => rw(n, t));
}
function Qn(...e) {
  return C.useCallback(qh(...e), e);
}
const Ru = C.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    i = C.Children.toArray(n),
    o = i.find(ow);
  if (o) {
    const l = o.props.children,
      a = i.map((s) =>
        s === o
          ? C.Children.count(l) > 1
            ? C.Children.only(null)
            : C.isValidElement(l)
            ? l.props.children
            : null
          : s
      );
    return C.createElement(
      vs,
      ae({}, r, { ref: t }),
      C.isValidElement(l) ? C.cloneElement(l, void 0, a) : null
    );
  }
  return C.createElement(vs, ae({}, r, { ref: t }), n);
});
Ru.displayName = "Slot";
const vs = C.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return C.isValidElement(n)
    ? C.cloneElement(n, { ...lw(r, n.props), ref: t ? qh(t, n.ref) : n.ref })
    : C.Children.count(n) > 1
    ? C.Children.only(null)
    : null;
});
vs.displayName = "SlotClone";
const iw = ({ children: e }) => C.createElement(C.Fragment, null, e);
function ow(e) {
  return C.isValidElement(e) && e.type === iw;
}
function lw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            o(...a), i(...a);
          })
        : i && (n[r] = i)
      : r === "style"
      ? (n[r] = { ...i, ...o })
      : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Qh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Qh(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function aw() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Qh(e)) && (r && (r += " "), (r += t));
  return r;
}
const xf = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  kf = aw,
  sw = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return kf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: i, defaultVariants: o } = t,
      l = Object.keys(i).map((u) => {
        const f = n == null ? void 0 : n[u],
          c = o == null ? void 0 : o[u];
        if (f === null) return null;
        const d = xf(f) || xf(c);
        return i[u][d];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [c, d] = f;
          return d === void 0 || (u[c] = d), u;
        }, {}),
      s =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let { class: c, className: d, ...p } = f;
              return Object.entries(p).every((h) => {
                let [y, b] = h;
                return Array.isArray(b)
                  ? b.includes({ ...o, ...a }[y])
                  : { ...o, ...a }[y] === b;
              })
                ? [...u, c, d]
                : u;
            }, []);
    return kf(
      e,
      l,
      s,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
function Xh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Xh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function uw() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Xh(e)) && (r && (r += " "), (r += t));
  return r;
}
const Lu = "-";
function cw(e) {
  const t = dw(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function i(l) {
    const a = l.split(Lu);
    return a[0] === "" && a.length !== 1 && a.shift(), Kh(a, t) || fw(l);
  }
  function o(l, a) {
    const s = n[l] || [];
    return a && r[l] ? [...s, ...r[l]] : s;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: o };
}
function Kh(e, t) {
  var l;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    i = r ? Kh(e.slice(1), r) : void 0;
  if (i) return i;
  if (t.validators.length === 0) return;
  const o = e.join(Lu);
  return (l = t.validators.find(({ validator: a }) => a(o))) == null
    ? void 0
    : l.classGroupId;
}
const Sf = /^\[(.+)\]$/;
function fw(e) {
  if (Sf.test(e)) {
    const t = Sf.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function dw(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    hw(Object.entries(e.classGroups), n).forEach(([o, l]) => {
      xs(l, r, o, t);
    }),
    r
  );
}
function xs(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : bf(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (pw(i)) {
        xs(i(r), t, n, r);
        return;
      }
      t.validators.push({ validator: i, classGroupId: n });
      return;
    }
    Object.entries(i).forEach(([o, l]) => {
      xs(l, bf(t, o), n, r);
    });
  });
}
function bf(e, t) {
  let n = e;
  return (
    t.split(Lu).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function pw(e) {
  return e.isThemeGetter;
}
function hw(e, t) {
  return t
    ? e.map(([n, r]) => {
        const i = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
            ? Object.fromEntries(Object.entries(o).map(([l, a]) => [t + l, a]))
            : o
        );
        return [n, i];
      })
    : e;
}
function mw(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function i(o, l) {
    n.set(o, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(o) {
      let l = n.get(o);
      if (l !== void 0) return l;
      if ((l = r.get(o)) !== void 0) return i(o, l), l;
    },
    set(o, l) {
      n.has(o) ? n.set(o, l) : i(o, l);
    },
  };
}
const Yh = "!";
function gw(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    i = t.length;
  return function (l) {
    const a = [];
    let s = 0,
      u = 0,
      f;
    for (let y = 0; y < l.length; y++) {
      let b = l[y];
      if (s === 0) {
        if (b === r && (n || l.slice(y, y + i) === t)) {
          a.push(l.slice(u, y)), (u = y + i);
          continue;
        }
        if (b === "/") {
          f = y;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" && s--;
    }
    const c = a.length === 0 ? l : l.substring(u),
      d = c.startsWith(Yh),
      p = d ? c.substring(1) : c,
      h = f && f > u ? f - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: d,
      baseClassName: p,
      maybePostfixModifierPosition: h,
    };
  };
}
function yw(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function ww(e) {
  return { cache: mw(e.cacheSize), splitModifiers: gw(e), ...cw(e) };
}
const vw = /\s+/;
function xw(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
    } = t,
    o = new Set();
  return e
    .trim()
    .split(vw)
    .map((l) => {
      const {
        modifiers: a,
        hasImportantModifier: s,
        baseClassName: u,
        maybePostfixModifierPosition: f,
      } = n(l);
      let c = r(f ? u.substring(0, f) : u),
        d = !!f;
      if (!c) {
        if (!f) return { isTailwindClass: !1, originalClassName: l };
        if (((c = r(u)), !c))
          return { isTailwindClass: !1, originalClassName: l };
        d = !1;
      }
      const p = yw(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: s ? p + Yh : p,
        classGroupId: c,
        originalClassName: l,
        hasPostfixModifier: d,
      };
    })
    .reverse()
    .filter((l) => {
      if (!l.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: s, hasPostfixModifier: u } = l,
        f = a + s;
      return o.has(f)
        ? !1
        : (o.add(f), i(s, u).forEach((c) => o.add(a + c)), !0);
    })
    .reverse()
    .map((l) => l.originalClassName)
    .join(" ");
}
function kw() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Gh(t)) && (r && (r += " "), (r += n));
  return r;
}
function Gh(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Gh(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function Sw(e, ...t) {
  let n,
    r,
    i,
    o = l;
  function l(s) {
    const u = t.reduce((f, c) => c(f), e());
    return (n = ww(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(s);
  }
  function a(s) {
    const u = r(s);
    if (u) return u;
    const f = xw(s, n);
    return i(s, f), f;
  }
  return function () {
    return o(kw.apply(null, arguments));
  };
}
function ce(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Zh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  bw = /^\d+\/\d+$/,
  Cw = new Set(["px", "full", "screen"]),
  Ew = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Pw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Tw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  _w = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Aw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Dt(e) {
  return In(e) || Cw.has(e) || bw.test(e);
}
function Jt(e) {
  return Rr(e, "length", Dw);
}
function In(e) {
  return !!e && !Number.isNaN(Number(e));
}
function io(e) {
  return Rr(e, "number", In);
}
function Wr(e) {
  return !!e && Number.isInteger(Number(e));
}
function zw(e) {
  return e.endsWith("%") && In(e.slice(0, -1));
}
function H(e) {
  return Zh.test(e);
}
function en(e) {
  return Ew.test(e);
}
const Rw = new Set(["length", "size", "percentage"]);
function Lw(e) {
  return Rr(e, Rw, Jh);
}
function Nw(e) {
  return Rr(e, "position", Jh);
}
const Ow = new Set(["image", "url"]);
function Iw(e) {
  return Rr(e, Ow, $w);
}
function Mw(e) {
  return Rr(e, "", Fw);
}
function qr() {
  return !0;
}
function Rr(e, t, n) {
  const r = Zh.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function Dw(e) {
  return Pw.test(e) && !Tw.test(e);
}
function Jh() {
  return !1;
}
function Fw(e) {
  return _w.test(e);
}
function $w(e) {
  return Aw.test(e);
}
function jw() {
  const e = ce("colors"),
    t = ce("spacing"),
    n = ce("blur"),
    r = ce("brightness"),
    i = ce("borderColor"),
    o = ce("borderRadius"),
    l = ce("borderSpacing"),
    a = ce("borderWidth"),
    s = ce("contrast"),
    u = ce("grayscale"),
    f = ce("hueRotate"),
    c = ce("invert"),
    d = ce("gap"),
    p = ce("gradientColorStops"),
    h = ce("gradientColorStopPositions"),
    y = ce("inset"),
    b = ce("margin"),
    m = ce("opacity"),
    g = ce("padding"),
    w = ce("saturate"),
    E = ce("scale"),
    P = ce("sepia"),
    k = ce("skew"),
    _ = ce("space"),
    z = ce("translate"),
    N = () => ["auto", "contain", "none"],
    S = () => ["auto", "hidden", "clip", "visible", "scroll"],
    I = () => ["auto", H, t],
    O = () => [H, t],
    X = () => ["", Dt, Jt],
    te = () => ["auto", In, H],
    q = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    se = () => ["solid", "dashed", "dotted", "double", "none"],
    he = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    M = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    j = () => ["", "0", H],
    v = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    W = () => [In, io],
    J = () => [In, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [qr],
      spacing: [Dt, Jt],
      blur: ["none", "", en, H],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", en, H],
      borderSpacing: O(),
      borderWidth: X(),
      contrast: W(),
      grayscale: j(),
      hueRotate: J(),
      invert: j(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [zw, Jt],
      inset: I(),
      margin: I(),
      opacity: W(),
      padding: O(),
      saturate: W(),
      scale: W(),
      sepia: j(),
      skew: J(),
      space: O(),
      translate: O(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", H] }],
      container: ["container"],
      columns: [{ columns: [en] }],
      "break-after": [{ "break-after": v() }],
      "break-before": [{ "break-before": v() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...q(), H] }],
      overflow: [{ overflow: S() }],
      "overflow-x": [{ "overflow-x": S() }],
      "overflow-y": [{ "overflow-y": S() }],
      overscroll: [{ overscroll: N() }],
      "overscroll-x": [{ "overscroll-x": N() }],
      "overscroll-y": [{ "overscroll-y": N() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Wr, H] }],
      basis: [{ basis: I() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", H] }],
      grow: [{ grow: j() }],
      shrink: [{ shrink: j() }],
      order: [{ order: ["first", "last", "none", Wr, H] }],
      "grid-cols": [{ "grid-cols": [qr] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Wr, H] }, H] }],
      "col-start": [{ "col-start": te() }],
      "col-end": [{ "col-end": te() }],
      "grid-rows": [{ "grid-rows": [qr] }],
      "row-start-end": [{ row: ["auto", { span: [Wr, H] }, H] }],
      "row-start": [{ "row-start": te() }],
      "row-end": [{ "row-end": te() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
      gap: [{ gap: [d] }],
      "gap-x": [{ "gap-x": [d] }],
      "gap-y": [{ "gap-y": [d] }],
      "justify-content": [{ justify: ["normal", ...M()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...M(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...M(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [g] }],
      px: [{ px: [g] }],
      py: [{ py: [g] }],
      ps: [{ ps: [g] }],
      pe: [{ pe: [g] }],
      pt: [{ pt: [g] }],
      pr: [{ pr: [g] }],
      pb: [{ pb: [g] }],
      pl: [{ pl: [g] }],
      m: [{ m: [b] }],
      mx: [{ mx: [b] }],
      my: [{ my: [b] }],
      ms: [{ ms: [b] }],
      me: [{ me: [b] }],
      mt: [{ mt: [b] }],
      mr: [{ mr: [b] }],
      mb: [{ mb: [b] }],
      ml: [{ ml: [b] }],
      "space-x": [{ "space-x": [_] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [_] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t] }],
      "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            H,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [en] },
            en,
          ],
        },
      ],
      h: [{ h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", en, Jt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            io,
          ],
        },
      ],
      "font-family": [{ font: [qr] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            H,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", In, io] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Dt,
            H,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", H] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [m] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [m] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...se(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Dt, Jt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Dt, H] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: O() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            H,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", H] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [m] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...q(), Nw] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Lw] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Iw,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [h] }],
      "gradient-via-pos": [{ via: [h] }],
      "gradient-to-pos": [{ to: [h] }],
      "gradient-from": [{ from: [p] }],
      "gradient-via": [{ via: [p] }],
      "gradient-to": [{ to: [p] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [m] }],
      "border-style": [{ border: [...se(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [m] }],
      "divide-style": [{ divide: se() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: ["", ...se()] }],
      "outline-offset": [{ "outline-offset": [Dt, H] }],
      "outline-w": [{ outline: [Dt, Jt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: X() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [m] }],
      "ring-offset-w": [{ "ring-offset": [Dt, Jt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", en, Mw] }],
      "shadow-color": [{ shadow: [qr] }],
      opacity: [{ opacity: [m] }],
      "mix-blend": [{ "mix-blend": he() }],
      "bg-blend": [{ "bg-blend": he() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [s] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", en, H] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [f] }],
      invert: [{ invert: [c] }],
      saturate: [{ saturate: [w] }],
      sepia: [{ sepia: [P] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [s] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
      "backdrop-invert": [{ "backdrop-invert": [c] }],
      "backdrop-opacity": [{ "backdrop-opacity": [m] }],
      "backdrop-saturate": [{ "backdrop-saturate": [w] }],
      "backdrop-sepia": [{ "backdrop-sepia": [P] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [l] }],
      "border-spacing-x": [{ "border-spacing-x": [l] }],
      "border-spacing-y": [{ "border-spacing-y": [l] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            H,
          ],
        },
      ],
      duration: [{ duration: J() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
      delay: [{ delay: J() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", H] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [E] }],
      "scale-x": [{ "scale-x": [E] }],
      "scale-y": [{ "scale-y": [E] }],
      rotate: [{ rotate: [Wr, H] }],
      "translate-x": [{ "translate-x": [z] }],
      "translate-y": [{ "translate-y": [z] }],
      "skew-x": [{ "skew-x": [k] }],
      "skew-y": [{ "skew-y": [k] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            H,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            H,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": O() }],
      "scroll-mx": [{ "scroll-mx": O() }],
      "scroll-my": [{ "scroll-my": O() }],
      "scroll-ms": [{ "scroll-ms": O() }],
      "scroll-me": [{ "scroll-me": O() }],
      "scroll-mt": [{ "scroll-mt": O() }],
      "scroll-mr": [{ "scroll-mr": O() }],
      "scroll-mb": [{ "scroll-mb": O() }],
      "scroll-ml": [{ "scroll-ml": O() }],
      "scroll-p": [{ "scroll-p": O() }],
      "scroll-px": [{ "scroll-px": O() }],
      "scroll-py": [{ "scroll-py": O() }],
      "scroll-ps": [{ "scroll-ps": O() }],
      "scroll-pe": [{ "scroll-pe": O() }],
      "scroll-pt": [{ "scroll-pt": O() }],
      "scroll-pr": [{ "scroll-pr": O() }],
      "scroll-pb": [{ "scroll-pb": O() }],
      "scroll-pl": [{ "scroll-pl": O() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", H] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Dt, Jt, io] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const Bw = Sw(jw);
function Ke(...e) {
  return Bw(uw(e));
}
function Uw(e = "xcopilot-root") {
  let t = document.getElementById(e);
  return (
    t ||
      ((t = document.createElement("div")),
      (t.id = e),
      document.body.appendChild(t)),
    t
  );
}
const Hw = sw(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  em = C.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
      const l = r ? Ru : "button";
      return $.jsx(l, {
        className: Ke(Hw({ variant: t, size: n, className: e })),
        ref: o,
        ...i,
      });
    }
  );
em.displayName = "Button";
const tm = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx("div", {
    ref: n,
    className: Ke("rounded-xl border bg-card text-card-foreground shadow", e),
    ...t,
  })
);
tm.displayName = "Card";
const Vw = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx("div", {
    ref: n,
    className: Ke("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
Vw.displayName = "CardHeader";
const Ww = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx("h3", {
    ref: n,
    className: Ke("font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Ww.displayName = "CardTitle";
const qw = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx("p", {
    ref: n,
    className: Ke("text-sm text-muted-foreground", e),
    ...t,
  })
);
qw.displayName = "CardDescription";
const Qw = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx("div", { ref: n, className: Ke("p-6 pt-0", e), ...t })
);
Qw.displayName = "CardContent";
const Xw = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx("div", { ref: n, className: Ke("flex items-center p-6 pt-0", e), ...t })
);
Xw.displayName = "CardFooter";
const nm = C.forwardRef(({ className: e, type: t, ...n }, r) =>
  $.jsx("input", {
    type: t,
    className: Ke(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: r,
    ...n,
  })
);
nm.displayName = "Input";
const Kw = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Cn = Kw.reduce((e, t) => {
    const n = C.forwardRef((r, i) => {
      const { asChild: o, ...l } = r,
        a = o ? Ru : t;
      return (
        C.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        C.createElement(a, ae({}, l, { ref: i }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {}),
  Ti = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {};
function Yw(e, t) {
  return C.useReducer((n, r) => {
    const i = t[n][r];
    return i ?? n;
  }, e);
}
const Ii = (e) => {
  const { present: t, children: n } = e,
    r = Gw(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : C.Children.only(n),
    o = Qn(r.ref, i.ref);
  return typeof n == "function" || r.isPresent
    ? C.cloneElement(i, { ref: o })
    : null;
};
Ii.displayName = "Presence";
function Gw(e) {
  const [t, n] = C.useState(),
    r = C.useRef({}),
    i = C.useRef(e),
    o = C.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [a, s] = Yw(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    C.useEffect(() => {
      const u = oo(r.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    Ti(() => {
      const u = r.current,
        f = i.current;
      if (f !== e) {
        const d = o.current,
          p = oo(u);
        e
          ? s("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
          ? s("UNMOUNT")
          : s(f && d !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, s]),
    Ti(() => {
      if (t) {
        const u = (c) => {
            const p = oo(r.current).includes(c.animationName);
            c.target === t && p && Wh.flushSync(() => s("ANIMATION_END"));
          },
          f = (c) => {
            c.target === t && (o.current = oo(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: C.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function oo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function rm(e, t = []) {
  let n = [];
  function r(o, l) {
    const a = C.createContext(l),
      s = n.length;
    n = [...n, l];
    function u(c) {
      const { scope: d, children: p, ...h } = c,
        y = (d == null ? void 0 : d[e][s]) || a,
        b = C.useMemo(() => h, Object.values(h));
      return C.createElement(y.Provider, { value: b }, p);
    }
    function f(c, d) {
      const p = (d == null ? void 0 : d[e][s]) || a,
        h = C.useContext(p);
      if (h) return h;
      if (l !== void 0) return l;
      throw new Error(`\`${c}\` must be used within \`${o}\``);
    }
    return (u.displayName = o + "Provider"), [u, f];
  }
  const i = () => {
    const o = n.map((l) => C.createContext(l));
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || o;
      return C.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
    };
  };
  return (i.scopeName = e), [r, Zw(i, ...t)];
}
function Zw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const l = r.reduce((a, { useScope: s, scopeName: u }) => {
        const c = s(o)[`__scope${u}`];
        return { ...a, ...c };
      }, {});
      return C.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function sn(e) {
  const t = C.useRef(e);
  return (
    C.useEffect(() => {
      t.current = e;
    }),
    C.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
const Jw = C.createContext(void 0);
function ev(e) {
  const t = C.useContext(Jw);
  return e || t || "ltr";
}
function tv(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Fn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function nv(e, t) {
  return C.useReducer((n, r) => {
    const i = t[n][r];
    return i ?? n;
  }, e);
}
const im = "ScrollArea",
  [om, RE] = rm(im),
  [rv, pt] = om(im),
  iv = C.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: r = "hover",
        dir: i,
        scrollHideDelay: o = 600,
        ...l
      } = e,
      [a, s] = C.useState(null),
      [u, f] = C.useState(null),
      [c, d] = C.useState(null),
      [p, h] = C.useState(null),
      [y, b] = C.useState(null),
      [m, g] = C.useState(0),
      [w, E] = C.useState(0),
      [P, k] = C.useState(!1),
      [_, z] = C.useState(!1),
      N = Qn(t, (I) => s(I)),
      S = ev(i);
    return C.createElement(
      rv,
      {
        scope: n,
        type: r,
        dir: S,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: u,
        onViewportChange: f,
        content: c,
        onContentChange: d,
        scrollbarX: p,
        onScrollbarXChange: h,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: k,
        scrollbarY: y,
        onScrollbarYChange: b,
        scrollbarYEnabled: _,
        onScrollbarYEnabledChange: z,
        onCornerWidthChange: g,
        onCornerHeightChange: E,
      },
      C.createElement(
        Cn.div,
        ae({ dir: S }, l, {
          ref: N,
          style: {
            position: "relative",
            "--radix-scroll-area-corner-width": m + "px",
            "--radix-scroll-area-corner-height": w + "px",
            ...e.style,
          },
        })
      )
    );
  }),
  ov = "ScrollAreaViewport",
  lv = C.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: r, ...i } = e,
      o = pt(ov, n),
      l = C.useRef(null),
      a = Qn(t, l, o.onViewportChange);
    return C.createElement(
      C.Fragment,
      null,
      C.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      C.createElement(
        Cn.div,
        ae({ "data-radix-scroll-area-viewport": "" }, i, {
          ref: a,
          style: {
            overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
        }),
        C.createElement(
          "div",
          {
            ref: o.onContentChange,
            style: { minWidth: "100%", display: "table" },
          },
          r
        )
      )
    );
  }),
  Kt = "ScrollAreaScrollbar",
  lm = C.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = pt(Kt, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: l } = i,
      a = e.orientation === "horizontal";
    return (
      C.useEffect(
        () => (
          a ? o(!0) : l(!0),
          () => {
            a ? o(!1) : l(!1);
          }
        ),
        [a, o, l]
      ),
      i.type === "hover"
        ? C.createElement(av, ae({}, r, { ref: t, forceMount: n }))
        : i.type === "scroll"
        ? C.createElement(sv, ae({}, r, { ref: t, forceMount: n }))
        : i.type === "auto"
        ? C.createElement(am, ae({}, r, { ref: t, forceMount: n }))
        : i.type === "always"
        ? C.createElement(Nu, ae({}, r, { ref: t }))
        : null
    );
  }),
  av = C.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = pt(Kt, e.__scopeScrollArea),
      [o, l] = C.useState(!1);
    return (
      C.useEffect(() => {
        const a = i.scrollArea;
        let s = 0;
        if (a) {
          const u = () => {
              window.clearTimeout(s), l(!0);
            },
            f = () => {
              s = window.setTimeout(() => l(!1), i.scrollHideDelay);
            };
          return (
            a.addEventListener("pointerenter", u),
            a.addEventListener("pointerleave", f),
            () => {
              window.clearTimeout(s),
                a.removeEventListener("pointerenter", u),
                a.removeEventListener("pointerleave", f);
            }
          );
        }
      }, [i.scrollArea, i.scrollHideDelay]),
      C.createElement(
        Ii,
        { present: n || o },
        C.createElement(
          am,
          ae({ "data-state": o ? "visible" : "hidden" }, r, { ref: t })
        )
      )
    );
  }),
  sv = C.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = pt(Kt, e.__scopeScrollArea),
      o = e.orientation === "horizontal",
      l = Sl(() => s("SCROLL_END"), 100),
      [a, s] = nv("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      C.useEffect(() => {
        if (a === "idle") {
          const u = window.setTimeout(() => s("HIDE"), i.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [a, i.scrollHideDelay, s]),
      C.useEffect(() => {
        const u = i.viewport,
          f = o ? "scrollLeft" : "scrollTop";
        if (u) {
          let c = u[f];
          const d = () => {
            const p = u[f];
            c !== p && (s("SCROLL"), l()), (c = p);
          };
          return (
            u.addEventListener("scroll", d),
            () => u.removeEventListener("scroll", d)
          );
        }
      }, [i.viewport, o, s, l]),
      C.createElement(
        Ii,
        { present: n || a !== "hidden" },
        C.createElement(
          Nu,
          ae({ "data-state": a === "hidden" ? "hidden" : "visible" }, r, {
            ref: t,
            onPointerEnter: Fn(e.onPointerEnter, () => s("POINTER_ENTER")),
            onPointerLeave: Fn(e.onPointerLeave, () => s("POINTER_LEAVE")),
          })
        )
      )
    );
  }),
  am = C.forwardRef((e, t) => {
    const n = pt(Kt, e.__scopeScrollArea),
      { forceMount: r, ...i } = e,
      [o, l] = C.useState(!1),
      a = e.orientation === "horizontal",
      s = Sl(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            f = n.viewport.offsetHeight < n.viewport.scrollHeight;
          l(a ? u : f);
        }
      }, 10);
    return (
      Pr(n.viewport, s),
      Pr(n.content, s),
      C.createElement(
        Ii,
        { present: r || o },
        C.createElement(
          Nu,
          ae({ "data-state": o ? "visible" : "hidden" }, i, { ref: t })
        )
      )
    );
  }),
  Nu = C.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      i = pt(Kt, e.__scopeScrollArea),
      o = C.useRef(null),
      l = C.useRef(0),
      [a, s] = C.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = fm(a.viewport, a.content),
      f = {
        ...r,
        sizes: a,
        onSizesChange: s,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (d) => (o.current = d),
        onThumbPointerUp: () => (l.current = 0),
        onThumbPointerDown: (d) => (l.current = d),
      };
    function c(d, p) {
      return gv(d, l.current, a, p);
    }
    return n === "horizontal"
      ? C.createElement(
          uv,
          ae({}, f, {
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && o.current) {
                const d = i.viewport.scrollLeft,
                  p = Cf(d, a, i.dir);
                o.current.style.transform = `translate3d(${p}px, 0, 0)`;
              }
            },
            onWheelScroll: (d) => {
              i.viewport && (i.viewport.scrollLeft = d);
            },
            onDragScroll: (d) => {
              i.viewport && (i.viewport.scrollLeft = c(d, i.dir));
            },
          })
        )
      : n === "vertical"
      ? C.createElement(
          cv,
          ae({}, f, {
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && o.current) {
                const d = i.viewport.scrollTop,
                  p = Cf(d, a);
                o.current.style.transform = `translate3d(0, ${p}px, 0)`;
              }
            },
            onWheelScroll: (d) => {
              i.viewport && (i.viewport.scrollTop = d);
            },
            onDragScroll: (d) => {
              i.viewport && (i.viewport.scrollTop = c(d));
            },
          })
        )
      : null;
  }),
  uv = C.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...i } = e,
      o = pt(Kt, e.__scopeScrollArea),
      [l, a] = C.useState(),
      s = C.useRef(null),
      u = Qn(t, s, o.onScrollbarXChange);
    return (
      C.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      C.createElement(
        um,
        ae({ "data-orientation": "horizontal" }, i, {
          ref: u,
          sizes: n,
          style: {
            bottom: 0,
            left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right:
              o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            "--radix-scroll-area-thumb-width": kl(n) + "px",
            ...e.style,
          },
          onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
          onDragScroll: (f) => e.onDragScroll(f.x),
          onWheelScroll: (f, c) => {
            if (o.viewport) {
              const d = o.viewport.scrollLeft + f.deltaX;
              e.onWheelScroll(d), pm(d, c) && f.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              o.viewport &&
              l &&
              r({
                content: o.viewport.scrollWidth,
                viewport: o.viewport.offsetWidth,
                scrollbar: {
                  size: s.current.clientWidth,
                  paddingStart: Zo(l.paddingLeft),
                  paddingEnd: Zo(l.paddingRight),
                },
              });
          },
        })
      )
    );
  }),
  cv = C.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...i } = e,
      o = pt(Kt, e.__scopeScrollArea),
      [l, a] = C.useState(),
      s = C.useRef(null),
      u = Qn(t, s, o.onScrollbarYChange);
    return (
      C.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      C.createElement(
        um,
        ae({ "data-orientation": "vertical" }, i, {
          ref: u,
          sizes: n,
          style: {
            top: 0,
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            "--radix-scroll-area-thumb-height": kl(n) + "px",
            ...e.style,
          },
          onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
          onDragScroll: (f) => e.onDragScroll(f.y),
          onWheelScroll: (f, c) => {
            if (o.viewport) {
              const d = o.viewport.scrollTop + f.deltaY;
              e.onWheelScroll(d), pm(d, c) && f.preventDefault();
            }
          },
          onResize: () => {
            s.current &&
              o.viewport &&
              l &&
              r({
                content: o.viewport.scrollHeight,
                viewport: o.viewport.offsetHeight,
                scrollbar: {
                  size: s.current.clientHeight,
                  paddingStart: Zo(l.paddingTop),
                  paddingEnd: Zo(l.paddingBottom),
                },
              });
          },
        })
      )
    );
  }),
  [fv, sm] = om(Kt),
  um = C.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: r,
        hasThumb: i,
        onThumbChange: o,
        onThumbPointerUp: l,
        onThumbPointerDown: a,
        onThumbPositionChange: s,
        onDragScroll: u,
        onWheelScroll: f,
        onResize: c,
        ...d
      } = e,
      p = pt(Kt, n),
      [h, y] = C.useState(null),
      b = Qn(t, (N) => y(N)),
      m = C.useRef(null),
      g = C.useRef(""),
      w = p.viewport,
      E = r.content - r.viewport,
      P = sn(f),
      k = sn(s),
      _ = Sl(c, 10);
    function z(N) {
      if (m.current) {
        const S = N.clientX - m.current.left,
          I = N.clientY - m.current.top;
        u({ x: S, y: I });
      }
    }
    return (
      C.useEffect(() => {
        const N = (S) => {
          const I = S.target;
          (h == null ? void 0 : h.contains(I)) && P(S, E);
        };
        return (
          document.addEventListener("wheel", N, { passive: !1 }),
          () => document.removeEventListener("wheel", N, { passive: !1 })
        );
      }, [w, h, E, P]),
      C.useEffect(k, [r, k]),
      Pr(h, _),
      Pr(p.content, _),
      C.createElement(
        fv,
        {
          scope: n,
          scrollbar: h,
          hasThumb: i,
          onThumbChange: sn(o),
          onThumbPointerUp: sn(l),
          onThumbPositionChange: k,
          onThumbPointerDown: sn(a),
        },
        C.createElement(
          Cn.div,
          ae({}, d, {
            ref: b,
            style: { position: "absolute", ...d.style },
            onPointerDown: Fn(e.onPointerDown, (N) => {
              N.button === 0 &&
                (N.target.setPointerCapture(N.pointerId),
                (m.current = h.getBoundingClientRect()),
                (g.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                p.viewport && (p.viewport.style.scrollBehavior = "auto"),
                z(N));
            }),
            onPointerMove: Fn(e.onPointerMove, z),
            onPointerUp: Fn(e.onPointerUp, (N) => {
              const S = N.target;
              S.hasPointerCapture(N.pointerId) &&
                S.releasePointerCapture(N.pointerId),
                (document.body.style.webkitUserSelect = g.current),
                p.viewport && (p.viewport.style.scrollBehavior = ""),
                (m.current = null);
            }),
          })
        )
      )
    );
  }),
  ks = "ScrollAreaThumb",
  dv = C.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      i = sm(ks, e.__scopeScrollArea);
    return C.createElement(
      Ii,
      { present: n || i.hasThumb },
      C.createElement(pv, ae({ ref: t }, r))
    );
  }),
  pv = C.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: r, ...i } = e,
      o = pt(ks, n),
      l = sm(ks, n),
      { onThumbPositionChange: a } = l,
      s = Qn(t, (c) => l.onThumbChange(c)),
      u = C.useRef(),
      f = Sl(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      C.useEffect(() => {
        const c = o.viewport;
        if (c) {
          const d = () => {
            if ((f(), !u.current)) {
              const p = yv(c, a);
              (u.current = p), a();
            }
          };
          return (
            a(),
            c.addEventListener("scroll", d),
            () => c.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, f, a]),
      C.createElement(
        Cn.div,
        ae({ "data-state": l.hasThumb ? "visible" : "hidden" }, i, {
          ref: s,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...r,
          },
          onPointerDownCapture: Fn(e.onPointerDownCapture, (c) => {
            const p = c.target.getBoundingClientRect(),
              h = c.clientX - p.left,
              y = c.clientY - p.top;
            l.onThumbPointerDown({ x: h, y });
          }),
          onPointerUp: Fn(e.onPointerUp, l.onThumbPointerUp),
        })
      )
    );
  }),
  cm = "ScrollAreaCorner",
  hv = C.forwardRef((e, t) => {
    const n = pt(cm, e.__scopeScrollArea),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r
      ? C.createElement(mv, ae({}, e, { ref: t }))
      : null;
  }),
  mv = C.forwardRef((e, t) => {
    const { __scopeScrollArea: n, ...r } = e,
      i = pt(cm, n),
      [o, l] = C.useState(0),
      [a, s] = C.useState(0),
      u = !!(o && a);
    return (
      Pr(i.scrollbarX, () => {
        var f;
        const c =
          ((f = i.scrollbarX) === null || f === void 0
            ? void 0
            : f.offsetHeight) || 0;
        i.onCornerHeightChange(c), s(c);
      }),
      Pr(i.scrollbarY, () => {
        var f;
        const c =
          ((f = i.scrollbarY) === null || f === void 0
            ? void 0
            : f.offsetWidth) || 0;
        i.onCornerWidthChange(c), l(c);
      }),
      u
        ? C.createElement(
            Cn.div,
            ae({}, r, {
              ref: t,
              style: {
                width: o,
                height: a,
                position: "absolute",
                right: i.dir === "ltr" ? 0 : void 0,
                left: i.dir === "rtl" ? 0 : void 0,
                bottom: 0,
                ...e.style,
              },
            })
          )
        : null
    );
  });
function Zo(e) {
  return e ? parseInt(e, 10) : 0;
}
function fm(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function kl(e) {
  const t = fm(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function gv(e, t, n, r = "ltr") {
  const i = kl(n),
    o = i / 2,
    l = t || o,
    a = i - l,
    s = n.scrollbar.paddingStart + l,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - a,
    f = n.content - n.viewport,
    c = r === "ltr" ? [0, f] : [f * -1, 0];
  return dm([s, u], c)(e);
}
function Cf(e, t, n = "ltr") {
  const r = kl(t),
    i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    o = t.scrollbar.size - i,
    l = t.content - t.viewport,
    a = o - r,
    s = n === "ltr" ? [0, l] : [l * -1, 0],
    u = tv(e, s);
  return dm([0, l], [0, a])(u);
}
function dm(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function pm(e, t) {
  return e > 0 && e < t;
}
const yv = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function i() {
      const o = { left: e.scrollLeft, top: e.scrollTop },
        l = n.left !== o.left,
        a = n.top !== o.top;
      (l || a) && t(), (n = o), (r = window.requestAnimationFrame(i));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function Sl(e, t) {
  const n = sn(e),
    r = C.useRef(0);
  return (
    C.useEffect(() => () => window.clearTimeout(r.current), []),
    C.useCallback(() => {
      window.clearTimeout(r.current), (r.current = window.setTimeout(n, t));
    }, [n, t])
  );
}
function Pr(e, t) {
  const n = sn(t);
  Ti(() => {
    let r = 0;
    if (e) {
      const i = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        i.observe(e),
        () => {
          window.cancelAnimationFrame(r), i.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
const hm = iv,
  wv = lv,
  vv = hv,
  mm = C.forwardRef(({ className: e, children: t, ...n }, r) =>
    $.jsxs(hm, {
      ref: r,
      className: Ke("relative overflow-hidden", e),
      ...n,
      children: [
        $.jsx(wv, {
          className: "h-full w-full rounded-[inherit]",
          children: t,
        }),
        $.jsx(gm, {}),
        $.jsx(vv, {}),
      ],
    })
  );
mm.displayName = hm.displayName;
const gm = C.forwardRef(
  ({ className: e, orientation: t = "vertical", ...n }, r) =>
    $.jsx(lm, {
      ref: r,
      orientation: t,
      className: Ke(
        "flex touch-none select-none transition-colors",
        t === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        t === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        e
      ),
      ...n,
      children: $.jsx(dv, {
        className: "relative flex-1 rounded-full bg-border",
      }),
    })
);
gm.displayName = lm.displayName;
function ym(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: xv } = Object.prototype,
  { getPrototypeOf: Ou } = Object,
  bl = ((e) => (t) => {
    const n = xv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Nt = (e) => ((e = e.toLowerCase()), (t) => bl(t) === e),
  Cl = (e) => (t) => typeof t === e,
  { isArray: Lr } = Array,
  _i = Cl("undefined");
function kv(e) {
  return (
    e !== null &&
    !_i(e) &&
    e.constructor !== null &&
    !_i(e.constructor) &&
    ct(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const wm = Nt("ArrayBuffer");
function Sv(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && wm(e.buffer)),
    t
  );
}
const bv = Cl("string"),
  ct = Cl("function"),
  vm = Cl("number"),
  El = (e) => e !== null && typeof e == "object",
  Cv = (e) => e === !0 || e === !1,
  bo = (e) => {
    if (bl(e) !== "object") return !1;
    const t = Ou(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ev = Nt("Date"),
  Pv = Nt("File"),
  Tv = Nt("Blob"),
  _v = Nt("FileList"),
  Av = (e) => El(e) && ct(e.pipe),
  zv = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ct(e.append) &&
          ((t = bl(e)) === "formdata" ||
            (t === "object" &&
              ct(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Rv = Nt("URLSearchParams"),
  Lv = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Lr(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = o.length;
    let a;
    for (r = 0; r < l; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function xm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const km =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Sm = (e) => !_i(e) && e !== km;
function Ss() {
  const { caseless: e } = (Sm(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && xm(t, i)) || i;
      bo(t[o]) && bo(r)
        ? (t[o] = Ss(t[o], r))
        : bo(r)
        ? (t[o] = Ss({}, r))
        : Lr(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Mi(arguments[r], n);
  return t;
}
const Nv = (e, t, n, { allOwnKeys: r } = {}) => (
    Mi(
      t,
      (i, o) => {
        n && ct(i) ? (e[o] = ym(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Ov = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Iv = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Mv = (e, t, n, r) => {
    let i, o, l;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (l = i[o]), (!r || r(l, e, t)) && !a[l] && ((t[l] = e[l]), (a[l] = !0));
      e = n !== !1 && Ou(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Dv = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Fv = (e) => {
    if (!e) return null;
    if (Lr(e)) return e;
    let t = e.length;
    if (!vm(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  $v = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ou(Uint8Array)),
  jv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  Bv = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Uv = Nt("HTMLFormElement"),
  Hv = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Ef = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Vv = Nt("RegExp"),
  bm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Mi(n, (i, o) => {
      let l;
      (l = t(i, o, e)) !== !1 && (r[o] = l || i);
    }),
      Object.defineProperties(e, r);
  },
  Wv = (e) => {
    bm(e, (t, n) => {
      if (ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ct(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  qv = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Lr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Qv = () => {},
  Xv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  la = "abcdefghijklmnopqrstuvwxyz",
  Pf = "0123456789",
  Cm = { DIGIT: Pf, ALPHA: la, ALPHA_DIGIT: la + la.toUpperCase() + Pf },
  Kv = (e = 16, t = Cm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Yv(e) {
  return !!(
    e &&
    ct(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Gv = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (El(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Lr(r) ? [] : {};
            return (
              Mi(r, (l, a) => {
                const s = n(l, i + 1);
                !_i(s) && (o[a] = s);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Zv = Nt("AsyncFunction"),
  Jv = (e) => e && (El(e) || ct(e)) && ct(e.then) && ct(e.catch),
  A = {
    isArray: Lr,
    isArrayBuffer: wm,
    isBuffer: kv,
    isFormData: zv,
    isArrayBufferView: Sv,
    isString: bv,
    isNumber: vm,
    isBoolean: Cv,
    isObject: El,
    isPlainObject: bo,
    isUndefined: _i,
    isDate: Ev,
    isFile: Pv,
    isBlob: Tv,
    isRegExp: Vv,
    isFunction: ct,
    isStream: Av,
    isURLSearchParams: Rv,
    isTypedArray: $v,
    isFileList: _v,
    forEach: Mi,
    merge: Ss,
    extend: Nv,
    trim: Lv,
    stripBOM: Ov,
    inherits: Iv,
    toFlatObject: Mv,
    kindOf: bl,
    kindOfTest: Nt,
    endsWith: Dv,
    toArray: Fv,
    forEachEntry: jv,
    matchAll: Bv,
    isHTMLForm: Uv,
    hasOwnProperty: Ef,
    hasOwnProp: Ef,
    reduceDescriptors: bm,
    freezeMethods: Wv,
    toObjectSet: qv,
    toCamelCase: Hv,
    noop: Qv,
    toFiniteNumber: Xv,
    findKey: xm,
    global: km,
    isContextDefined: Sm,
    ALPHABET: Cm,
    generateString: Kv,
    isSpecCompliantForm: Yv,
    toJSONObject: Gv,
    isAsyncFn: Zv,
    isThenable: Jv,
  };
function G(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
A.inherits(G, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: A.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Em = G.prototype,
  Pm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Pm[e] = { value: e };
});
Object.defineProperties(G, Pm);
Object.defineProperty(Em, "isAxiosError", { value: !0 });
G.from = (e, t, n, r, i, o) => {
  const l = Object.create(Em);
  return (
    A.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    G.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    o && Object.assign(l, o),
    l
  );
};
const ex = null;
function bs(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Tm(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Tm(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function tx(e) {
  return A.isArray(e) && !e.some(bs);
}
const nx = A.toFlatObject(A, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Pl(e, t, n) {
  if (!A.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = A.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, b) {
        return !A.isUndefined(b[y]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || f,
    o = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && A.isSpecCompliantForm(t);
  if (!A.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (A.isDate(h)) return h.toISOString();
    if (!s && A.isBlob(h))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(h) || A.isTypedArray(h)
      ? s && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function f(h, y, b) {
    let m = h;
    if (h && !b && typeof h == "object") {
      if (A.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (A.isArray(h) && tx(h)) ||
        ((A.isFileList(h) || A.endsWith(y, "[]")) && (m = A.toArray(h)))
      )
        return (
          (y = Tm(y)),
          m.forEach(function (w, E) {
            !(A.isUndefined(w) || w === null) &&
              t.append(
                l === !0 ? Tf([y], E, o) : l === null ? y : y + "[]",
                u(w)
              );
          }),
          !1
        );
    }
    return bs(h) ? !0 : (t.append(Tf(b, y, o), u(h)), !1);
  }
  const c = [],
    d = Object.assign(nx, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: bs,
    });
  function p(h, y) {
    if (!A.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      c.push(h),
        A.forEach(h, function (m, g) {
          (!(A.isUndefined(m) || m === null) &&
            i.call(t, m, A.isString(g) ? g.trim() : g, y, d)) === !0 &&
            p(m, y ? y.concat(g) : [g]);
        }),
        c.pop();
    }
  }
  if (!A.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function _f(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Iu(e, t) {
  (this._pairs = []), e && Pl(e, this, t);
}
const _m = Iu.prototype;
_m.append = function (t, n) {
  this._pairs.push([t, n]);
};
_m.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, _f);
      }
    : _f;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function rx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Am(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || rx,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = A.isURLSearchParams(t) ? t.toString() : new Iu(t, n).toString(r)),
    o)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Af {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    A.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const zm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ix = typeof URLSearchParams < "u" ? URLSearchParams : Iu,
  ox = typeof FormData < "u" ? FormData : null,
  lx = typeof Blob < "u" ? Blob : null,
  ax = {
    isBrowser: !0,
    classes: { URLSearchParams: ix, FormData: ox, Blob: lx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Rm = typeof window < "u" && typeof document < "u",
  sx = ((e) => Rm && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  ux =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  cx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Rm,
        hasStandardBrowserEnv: sx,
        hasStandardBrowserWebWorkerEnv: ux,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zt = { ...cx, ...ax };
function fx(e, t) {
  return Pl(
    e,
    new zt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return zt.isNode && A.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function dx(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function px(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Lm(e) {
  function t(n, r, i, o) {
    let l = n[o++];
    if (l === "__proto__") return !0;
    const a = Number.isFinite(+l),
      s = o >= n.length;
    return (
      (l = !l && A.isArray(i) ? i.length : l),
      s
        ? (A.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !a)
        : ((!i[l] || !A.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], o) && A.isArray(i[l]) && (i[l] = px(i[l])),
          !a)
    );
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return (
      A.forEachEntry(e, (r, i) => {
        t(dx(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function hx(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Mu = {
  transitional: zm,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = A.isObject(t);
      if ((o && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t)))
        return i ? JSON.stringify(Lm(t)) : t;
      if (
        A.isArrayBuffer(t) ||
        A.isBuffer(t) ||
        A.isStream(t) ||
        A.isFile(t) ||
        A.isBlob(t)
      )
        return t;
      if (A.isArrayBufferView(t)) return t.buffer;
      if (A.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return fx(t, this.formSerializer).toString();
        if ((a = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return Pl(
            a ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), hx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Mu.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && A.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (l)
            throw a.name === "SyntaxError"
              ? G.from(a, G.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: zt.classes.FormData, Blob: zt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Mu.headers[e] = {};
});
const Du = Mu,
  mx = A.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  gx = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (i = l.indexOf(":")),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && mx[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  zf = Symbol("internals");
function Qr(e) {
  return e && String(e).trim().toLowerCase();
}
function Co(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(Co) : String(e);
}
function yx(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const wx = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function aa(e, t, n, r, i) {
  if (A.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!A.isString(t))) {
    if (A.isString(r)) return t.indexOf(r) !== -1;
    if (A.isRegExp(r)) return r.test(t);
  }
}
function vx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xx(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, l) {
        return this[r].call(this, t, i, o, l);
      },
      configurable: !0,
    });
  });
}
class Tl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(a, s, u) {
      const f = Qr(s);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = A.findKey(i, f);
      (!c || i[c] === void 0 || u === !0 || (u === void 0 && i[c] !== !1)) &&
        (i[c || s] = Co(a));
    }
    const l = (a, s) => A.forEach(a, (u, f) => o(u, f, s));
    return (
      A.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : A.isString(t) && (t = t.trim()) && !wx(t)
        ? l(gx(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Qr(t)), t)) {
      const r = A.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return yx(i);
        if (A.isFunction(n)) return n.call(this, i, r);
        if (A.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Qr(t)), t)) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || aa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(l) {
      if (((l = Qr(l)), l)) {
        const a = A.findKey(r, l);
        a && (!n || aa(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return A.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || aa(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      A.forEach(this, (i, o) => {
        const l = A.findKey(r, o);
        if (l) {
          (n[l] = Co(i)), delete n[o];
          return;
        }
        const a = t ? vx(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = Co(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      A.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && A.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[zf] = this[zf] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(l) {
      const a = Qr(l);
      r[a] || (xx(i, l), (r[a] = !0));
    }
    return A.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Tl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
A.reduceDescriptors(Tl.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
A.freezeMethods(Tl);
const Ht = Tl;
function sa(e, t) {
  const n = this || Du,
    r = t || n,
    i = Ht.from(r.headers);
  let o = r.data;
  return (
    A.forEach(e, function (a) {
      o = a.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Nm(e) {
  return !!(e && e.__CANCEL__);
}
function Di(e, t, n) {
  G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
A.inherits(Di, G, { __CANCEL__: !0 });
function kx(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new G(
          "Request failed with status code " + n.status,
          [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Sx = zt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, o) {
        const l = [e + "=" + encodeURIComponent(t)];
        A.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
          A.isString(r) && l.push("path=" + r),
          A.isString(i) && l.push("domain=" + i),
          o === !0 && l.push("secure"),
          (document.cookie = l.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function bx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Cx(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Om(e, t) {
  return e && !bx(t) ? Cx(e, t) : t;
}
const Ex = zt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let l = o;
        return (
          t && (n.setAttribute("href", l), (l = n.href)),
          n.setAttribute("href", l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (l) {
          const a = A.isString(l) ? i(l) : l;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Px(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Tx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        f = r[o];
      l || (l = u), (n[i] = s), (r[i] = u);
      let c = o,
        d = 0;
      for (; c !== i; ) (d += n[c++]), (c = c % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - l < t)) return;
      const p = f && u - f;
      return p ? Math.round((d * 1e3) / p) : void 0;
    }
  );
}
function Rf(e, t) {
  let n = 0;
  const r = Tx(50, 250);
  return (i) => {
    const o = i.loaded,
      l = i.lengthComputable ? i.total : void 0,
      a = o - n,
      s = r(a),
      u = o <= l;
    n = o;
    const f = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: a,
      rate: s || void 0,
      estimated: s && l && u ? (l - o) / s : void 0,
      event: i,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const _x = typeof XMLHttpRequest < "u",
  Ax =
    _x &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = Ht.from(e.headers).normalize();
        let { responseType: l, withXSRFToken: a } = e,
          s;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener("abort", s);
        }
        let f;
        if (A.isFormData(i)) {
          if (zt.hasStandardBrowserEnv || zt.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((f = o.getContentType()) !== !1) {
            const [y, ...b] = f
              ? f
                  .split(";")
                  .map((m) => m.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([y || "multipart/form-data", ...b].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            b = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(y + ":" + b));
        }
        const d = Om(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Am(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function p() {
          if (!c) return;
          const y = Ht.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            m = {
              data:
                !l || l === "text" || l === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          kx(
            function (w) {
              n(w), u();
            },
            function (w) {
              r(w), u();
            },
            m
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = p)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (c.onabort = function () {
            c &&
              (r(new G("Request aborted", G.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new G("Network Error", G.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let b = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || zm;
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              r(
                new G(
                  b,
                  m.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          zt.hasStandardBrowserEnv &&
            (a && A.isFunction(a) && (a = a(e)), a || (a !== !1 && Ex(d))))
        ) {
          const y =
            e.xsrfHeaderName && e.xsrfCookieName && Sx.read(e.xsrfCookieName);
          y && o.set(e.xsrfHeaderName, y);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            A.forEach(o.toJSON(), function (b, m) {
              c.setRequestHeader(m, b);
            }),
          A.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          l && l !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Rf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Rf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (y) => {
              c &&
                (r(!y || y.type ? new Di(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const h = Px(d);
        if (h && zt.protocols.indexOf(h) === -1) {
          r(new G("Unsupported protocol " + h + ":", G.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  Cs = { http: ex, xhr: Ax };
A.forEach(Cs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Lf = (e) => `- ${e}`,
  zx = (e) => A.isFunction(e) || e === null || e === !1,
  Im = {
    getAdapter: (e) => {
      e = A.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let l;
        if (
          ((r = n),
          !zx(n) && ((r = Cs[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new G(`Unknown adapter '${l}'`);
        if (r) break;
        i[l || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([a, s]) =>
            `adapter ${a} ` +
            (s === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? o.length > 1
            ? `since :
` +
              o.map(Lf).join(`
`)
            : " " + Lf(o[0])
          : "as no adapter specified";
        throw new G(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Cs,
  };
function ua(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Di(null, e);
}
function Nf(e) {
  return (
    ua(e),
    (e.headers = Ht.from(e.headers)),
    (e.data = sa.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Im.getAdapter(e.adapter || Du.adapter)(e).then(
      function (r) {
        return (
          ua(e),
          (r.data = sa.call(e, e.transformResponse, r)),
          (r.headers = Ht.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Nm(r) ||
            (ua(e),
            r &&
              r.response &&
              ((r.response.data = sa.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ht.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Of = (e) => (e instanceof Ht ? e.toJSON() : e);
function Tr(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, c) {
    return A.isPlainObject(u) && A.isPlainObject(f)
      ? A.merge.call({ caseless: c }, u, f)
      : A.isPlainObject(f)
      ? A.merge({}, f)
      : A.isArray(f)
      ? f.slice()
      : f;
  }
  function i(u, f, c) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(u)) return r(void 0, u, c);
    } else return r(u, f, c);
  }
  function o(u, f) {
    if (!A.isUndefined(f)) return r(void 0, f);
  }
  function l(u, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, c) {
    if (c in t) return r(u, f);
    if (c in e) return r(void 0, u);
  }
  const s = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: a,
    headers: (u, f) => i(Of(u), Of(f), !0),
  };
  return (
    A.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const c = s[f] || i,
        d = c(e[f], t[f], f);
      (A.isUndefined(d) && c !== a) || (n[f] = d);
    }),
    n
  );
}
const Mm = "1.6.7",
  Fu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Fu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const If = {};
Fu.transitional = function (t, n, r) {
  function i(o, l) {
    return (
      "[Axios v" +
      Mm +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (o, l, a) => {
    if (t === !1)
      throw new G(
        i(l, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return (
      n &&
        !If[l] &&
        ((If[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, l, a) : !0
    );
  };
};
function Rx(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      l = t[o];
    if (l) {
      const a = e[o],
        s = a === void 0 || l(a, o, e);
      if (s !== !0)
        throw new G("option " + o + " must be " + s, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const Es = { assertOptions: Rx, validators: Fu },
  tn = Es.validators;
class Jo {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Af(), response: new Af() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Tr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Es.assertOptions(
        r,
        {
          silentJSONParsing: tn.transitional(tn.boolean),
          forcedJSONParsing: tn.transitional(tn.boolean),
          clarifyTimeoutError: tn.transitional(tn.boolean),
        },
        !1
      ),
      i != null &&
        (A.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Es.assertOptions(
              i,
              { encode: tn.function, serialize: tn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = o && A.merge(o.common, o[n.method]);
    o &&
      A.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete o[h];
        }
      ),
      (n.headers = Ht.concat(l, o));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((s = s && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let f,
      c = 0,
      d;
    if (!s) {
      const h = [Nf.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, u),
          d = h.length,
          f = Promise.resolve(n);
        c < d;

      )
        f = f.then(h[c++], h[c++]);
      return f;
    }
    d = a.length;
    let p = n;
    for (c = 0; c < d; ) {
      const h = a[c++],
        y = a[c++];
      try {
        p = h(p);
      } catch (b) {
        y.call(this, b);
        break;
      }
    }
    try {
      f = Nf.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, d = u.length; c < d; ) f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = Tr(this.defaults, t);
    const n = Om(t.baseURL, t.url);
    return Am(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function (t) {
  Jo.prototype[t] = function (n, r) {
    return this.request(
      Tr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
A.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, l, a) {
      return this.request(
        Tr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: l,
        })
      );
    };
  }
  (Jo.prototype[t] = n()), (Jo.prototype[t + "Form"] = n(!0));
});
const Eo = Jo;
class $u {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const l = new Promise((a) => {
          r.subscribe(a), (o = a);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(o);
          }),
          l
        );
      }),
      t(function (o, l, a) {
        r.reason || ((r.reason = new Di(o, l, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new $u(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const Lx = $u;
function Nx(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Ox(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Ps = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ps).forEach(([e, t]) => {
  Ps[t] = e;
});
const Ix = Ps;
function Dm(e) {
  const t = new Eo(e),
    n = ym(Eo.prototype.request, t);
  return (
    A.extend(n, Eo.prototype, t, { allOwnKeys: !0 }),
    A.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Dm(Tr(e, i));
    }),
    n
  );
}
const ke = Dm(Du);
ke.Axios = Eo;
ke.CanceledError = Di;
ke.CancelToken = Lx;
ke.isCancel = Nm;
ke.VERSION = Mm;
ke.toFormData = Pl;
ke.AxiosError = G;
ke.Cancel = ke.CanceledError;
ke.all = function (t) {
  return Promise.all(t);
};
ke.spread = Nx;
ke.isAxiosError = Ox;
ke.mergeConfig = Tr;
ke.AxiosHeaders = Ht;
ke.formToJSON = (e) => Lm(A.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = Im.getAdapter;
ke.HttpStatusCode = Ix;
ke.default = ke;
function Mx(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
    .trim();
}
const Dx = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Fx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  $x = {};
function Mf(e, t) {
  return ((t || $x).jsx ? Fx : Dx).test(e);
}
const jx = /[ \t\n\f\r]/g;
function Bx(e) {
  return typeof e == "object" ? (e.type === "text" ? Df(e.value) : !1) : Df(e);
}
function Df(e) {
  return e.replace(jx, "") === "";
}
class Fi {
  constructor(t, n, r) {
    (this.property = t), (this.normal = n), r && (this.space = r);
  }
}
Fi.prototype.property = {};
Fi.prototype.normal = {};
Fi.prototype.space = null;
function Fm(e, t) {
  const n = {},
    r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new Fi(n, r, t);
}
function Ts(e) {
  return e.toLowerCase();
}
class ht {
  constructor(t, n) {
    (this.property = t), (this.attribute = n);
  }
}
ht.prototype.space = null;
ht.prototype.boolean = !1;
ht.prototype.booleanish = !1;
ht.prototype.overloadedBoolean = !1;
ht.prototype.number = !1;
ht.prototype.commaSeparated = !1;
ht.prototype.spaceSeparated = !1;
ht.prototype.commaOrSpaceSeparated = !1;
ht.prototype.mustUseProperty = !1;
ht.prototype.defined = !1;
let Ux = 0;
const V = Xn(),
  Se = Xn(),
  $m = Xn(),
  L = Xn(),
  oe = Xn(),
  wr = Xn(),
  Ge = Xn();
function Xn() {
  return 2 ** ++Ux;
}
const _s = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: V,
        booleanish: Se,
        commaOrSpaceSeparated: Ge,
        commaSeparated: wr,
        number: L,
        overloadedBoolean: $m,
        spaceSeparated: oe,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ca = Object.keys(_s);
class ju extends ht {
  constructor(t, n, r, i) {
    let o = -1;
    if ((super(t, n), Ff(this, "space", i), typeof r == "number"))
      for (; ++o < ca.length; ) {
        const l = ca[o];
        Ff(this, ca[o], (r & _s[l]) === _s[l]);
      }
  }
}
ju.prototype.defined = !0;
function Ff(e, t, n) {
  n && (e[t] = n);
}
const Hx = {}.hasOwnProperty;
function Nr(e) {
  const t = {},
    n = {};
  let r;
  for (r in e.properties)
    if (Hx.call(e.properties, r)) {
      const i = e.properties[r],
        o = new ju(r, e.transform(e.attributes || {}, r), i, e.space);
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (o.mustUseProperty = !0),
        (t[r] = o),
        (n[Ts(r)] = r),
        (n[Ts(o.attribute)] = r);
    }
  return new Fi(t, n, e.space);
}
const jm = Nr({
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  Bm = Nr({
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function Um(e, t) {
  return t in e ? e[t] : t;
}
function Hm(e, t) {
  return Um(e, t.toLowerCase());
}
const Vm = Nr({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: Hm,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  Wm = Nr({
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Se,
      ariaAutoComplete: null,
      ariaBusy: Se,
      ariaChecked: Se,
      ariaColCount: L,
      ariaColIndex: L,
      ariaColSpan: L,
      ariaControls: oe,
      ariaCurrent: null,
      ariaDescribedBy: oe,
      ariaDetails: null,
      ariaDisabled: Se,
      ariaDropEffect: oe,
      ariaErrorMessage: null,
      ariaExpanded: Se,
      ariaFlowTo: oe,
      ariaGrabbed: Se,
      ariaHasPopup: null,
      ariaHidden: Se,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: oe,
      ariaLevel: L,
      ariaLive: null,
      ariaModal: Se,
      ariaMultiLine: Se,
      ariaMultiSelectable: Se,
      ariaOrientation: null,
      ariaOwns: oe,
      ariaPlaceholder: null,
      ariaPosInSet: L,
      ariaPressed: Se,
      ariaReadOnly: Se,
      ariaRelevant: null,
      ariaRequired: Se,
      ariaRoleDescription: oe,
      ariaRowCount: L,
      ariaRowIndex: L,
      ariaRowSpan: L,
      ariaSelected: Se,
      ariaSetSize: L,
      ariaSort: null,
      ariaValueMax: L,
      ariaValueMin: L,
      ariaValueNow: L,
      ariaValueText: null,
      role: null,
    },
  }),
  Vx = Nr({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: Hm,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: wr,
      acceptCharset: oe,
      accessKey: oe,
      action: null,
      allow: null,
      allowFullScreen: V,
      allowPaymentRequest: V,
      allowUserMedia: V,
      alt: null,
      as: null,
      async: V,
      autoCapitalize: null,
      autoComplete: oe,
      autoFocus: V,
      autoPlay: V,
      blocking: oe,
      capture: null,
      charSet: null,
      checked: V,
      cite: null,
      className: oe,
      cols: L,
      colSpan: null,
      content: null,
      contentEditable: Se,
      controls: V,
      controlsList: oe,
      coords: L | wr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: V,
      defer: V,
      dir: null,
      dirName: null,
      disabled: V,
      download: $m,
      draggable: Se,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: V,
      formTarget: null,
      headers: oe,
      height: L,
      hidden: V,
      high: L,
      href: null,
      hrefLang: null,
      htmlFor: oe,
      httpEquiv: oe,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: V,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: V,
      itemId: null,
      itemProp: oe,
      itemRef: oe,
      itemScope: V,
      itemType: oe,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: V,
      low: L,
      manifest: null,
      max: null,
      maxLength: L,
      media: null,
      method: null,
      min: null,
      minLength: L,
      multiple: V,
      muted: V,
      name: null,
      nonce: null,
      noModule: V,
      noValidate: V,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: V,
      optimum: L,
      pattern: null,
      ping: oe,
      placeholder: null,
      playsInline: V,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: V,
      referrerPolicy: null,
      rel: oe,
      required: V,
      reversed: V,
      rows: L,
      rowSpan: L,
      sandbox: oe,
      scope: null,
      scoped: V,
      seamless: V,
      selected: V,
      shadowRootDelegatesFocus: V,
      shadowRootMode: null,
      shape: null,
      size: L,
      sizes: null,
      slot: null,
      span: L,
      spellCheck: Se,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: L,
      step: null,
      style: null,
      tabIndex: L,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: V,
      useMap: null,
      value: Se,
      width: L,
      wrap: null,
      align: null,
      aLink: null,
      archive: oe,
      axis: null,
      background: null,
      bgColor: null,
      border: L,
      borderColor: null,
      bottomMargin: L,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: V,
      declare: V,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: L,
      leftMargin: L,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: L,
      marginWidth: L,
      noResize: V,
      noHref: V,
      noShade: V,
      noWrap: V,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: L,
      rules: null,
      scheme: null,
      scrolling: Se,
      standby: null,
      summary: null,
      text: null,
      topMargin: L,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: L,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: V,
      disableRemotePlayback: V,
      prefix: null,
      property: null,
      results: L,
      security: null,
      unselectable: null,
    },
  }),
  Wx = Nr({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: Um,
    properties: {
      about: Ge,
      accentHeight: L,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: L,
      amplitude: L,
      arabicForm: null,
      ascent: L,
      attributeName: null,
      attributeType: null,
      azimuth: L,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: L,
      by: null,
      calcMode: null,
      capHeight: L,
      className: oe,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: L,
      diffuseConstant: L,
      direction: null,
      display: null,
      dur: null,
      divisor: L,
      dominantBaseline: null,
      download: V,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: L,
      enableBackground: null,
      end: null,
      event: null,
      exponent: L,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: L,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: wr,
      g2: wr,
      glyphName: wr,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: L,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: L,
      horizOriginX: L,
      horizOriginY: L,
      id: null,
      ideographic: L,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: L,
      k: L,
      k1: L,
      k2: L,
      k3: L,
      k4: L,
      kernelMatrix: Ge,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: L,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: L,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: L,
      overlineThickness: L,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: L,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: oe,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: L,
      pointsAtY: L,
      pointsAtZ: L,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Ge,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ge,
      rev: Ge,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ge,
      requiredFeatures: Ge,
      requiredFonts: Ge,
      requiredFormats: Ge,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: L,
      specularExponent: L,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: L,
      strikethroughThickness: L,
      string: null,
      stroke: null,
      strokeDashArray: Ge,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: L,
      strokeOpacity: L,
      strokeWidth: null,
      style: null,
      surfaceScale: L,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ge,
      tabIndex: L,
      tableValues: null,
      target: null,
      targetX: L,
      targetY: L,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Ge,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: L,
      underlineThickness: L,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: L,
      values: null,
      vAlphabetic: L,
      vMathematical: L,
      vectorEffect: null,
      vHanging: L,
      vIdeographic: L,
      version: null,
      vertAdvY: L,
      vertOriginX: L,
      vertOriginY: L,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: L,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  qx = /^data[-\w.:]+$/i,
  $f = /-[a-z]/g,
  Qx = /[A-Z]/g;
function Xx(e, t) {
  const n = Ts(t);
  let r = t,
    i = ht;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && qx.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace($f, Yx);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!$f.test(o)) {
        let l = o.replace(Qx, Kx);
        l.charAt(0) !== "-" && (l = "-" + l), (t = "data" + l);
      }
    }
    i = ju;
  }
  return new i(r, t);
}
function Kx(e) {
  return "-" + e.toLowerCase();
}
function Yx(e) {
  return e.charAt(1).toUpperCase();
}
const Gx = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  Zx = Fm([Bm, jm, Vm, Wm, Vx], "html"),
  Bu = Fm([Bm, jm, Vm, Wm, Wx], "svg");
function Jx(e) {
  return e.join(" ").trim();
}
var qm = {},
  jf = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  ek = /\n/g,
  tk = /^\s*/,
  nk = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  rk = /^:\s*/,
  ik = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  ok = /^[;\s]*/,
  lk = /^\s+|\s+$/g,
  ak = `
`,
  Bf = "/",
  Uf = "*",
  Rn = "",
  sk = "comment",
  uk = "declaration",
  ck = function (e, t) {
    if (typeof e != "string")
      throw new TypeError("First argument must be a string");
    if (!e) return [];
    t = t || {};
    var n = 1,
      r = 1;
    function i(h) {
      var y = h.match(ek);
      y && (n += y.length);
      var b = h.lastIndexOf(ak);
      r = ~b ? h.length - b : r + h.length;
    }
    function o() {
      var h = { line: n, column: r };
      return function (y) {
        return (y.position = new l(h)), u(), y;
      };
    }
    function l(h) {
      (this.start = h),
        (this.end = { line: n, column: r }),
        (this.source = t.source);
    }
    l.prototype.content = e;
    function a(h) {
      var y = new Error(t.source + ":" + n + ":" + r + ": " + h);
      if (
        ((y.reason = h),
        (y.filename = t.source),
        (y.line = n),
        (y.column = r),
        (y.source = e),
        !t.silent)
      )
        throw y;
    }
    function s(h) {
      var y = h.exec(e);
      if (y) {
        var b = y[0];
        return i(b), (e = e.slice(b.length)), y;
      }
    }
    function u() {
      s(tk);
    }
    function f(h) {
      var y;
      for (h = h || []; (y = c()); ) y !== !1 && h.push(y);
      return h;
    }
    function c() {
      var h = o();
      if (!(Bf != e.charAt(0) || Uf != e.charAt(1))) {
        for (
          var y = 2;
          Rn != e.charAt(y) && (Uf != e.charAt(y) || Bf != e.charAt(y + 1));

        )
          ++y;
        if (((y += 2), Rn === e.charAt(y - 1)))
          return a("End of comment missing");
        var b = e.slice(2, y - 2);
        return (
          (r += 2),
          i(b),
          (e = e.slice(y)),
          (r += 2),
          h({ type: sk, comment: b })
        );
      }
    }
    function d() {
      var h = o(),
        y = s(nk);
      if (y) {
        if ((c(), !s(rk))) return a("property missing ':'");
        var b = s(ik),
          m = h({
            type: uk,
            property: Hf(y[0].replace(jf, Rn)),
            value: b ? Hf(b[0].replace(jf, Rn)) : Rn,
          });
        return s(ok), m;
      }
    }
    function p() {
      var h = [];
      f(h);
      for (var y; (y = d()); ) y !== !1 && (h.push(y), f(h));
      return h;
    }
    return u(), p();
  };
function Hf(e) {
  return e ? e.replace(lk, Rn) : Rn;
}
var fk =
  (uc && uc.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(qm, "__esModule", { value: !0 });
var dk = fk(ck);
function pk(e, t) {
  var n = null;
  if (!e || typeof e != "string") return n;
  var r = (0, dk.default)(e),
    i = typeof t == "function";
  return (
    r.forEach(function (o) {
      if (o.type === "declaration") {
        var l = o.property,
          a = o.value;
        i ? t(l, a, o) : a && ((n = n || {}), (n[l] = a));
      }
    }),
    n
  );
}
var Vf = (qm.default = pk);
const hk = Vf.default || Vf,
  Qm = Xm("end"),
  Uu = Xm("start");
function Xm(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function mk(e) {
  const t = Uu(e),
    n = Qm(e);
  if (t && n) return { start: t, end: n };
}
function si(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
    ? Wf(e.position)
    : "start" in e || "end" in e
    ? Wf(e)
    : "line" in e || "column" in e
    ? As(e)
    : "";
}
function As(e) {
  return qf(e && e.line) + ":" + qf(e && e.column);
}
function Wf(e) {
  return As(e && e.start) + "-" + As(e && e.end);
}
function qf(e) {
  return e && typeof e == "number" ? e : 1;
}
class De extends Error {
  constructor(t, n, r) {
    super(), typeof n == "string" && ((r = n), (n = void 0));
    let i = "",
      o = {},
      l = !1;
    if (
      (n &&
        ("line" in n && "column" in n
          ? (o = { place: n })
          : "start" in n && "end" in n
          ? (o = { place: n })
          : "type" in n
          ? (o = { ancestors: [n], place: n.position })
          : (o = { ...n })),
      typeof t == "string"
        ? (i = t)
        : !o.cause && t && ((l = !0), (i = t.message), (o.cause = t)),
      !o.ruleId && !o.source && typeof r == "string")
    ) {
      const s = r.indexOf(":");
      s === -1
        ? (o.ruleId = r)
        : ((o.source = r.slice(0, s)), (o.ruleId = r.slice(s + 1)));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    (this.ancestors = o.ancestors || void 0),
      (this.cause = o.cause || void 0),
      (this.column = a ? a.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = i),
      (this.line = a ? a.line : void 0),
      (this.name = si(o.place) || "1:1"),
      (this.place = o.place || void 0),
      (this.reason = this.message),
      (this.ruleId = o.ruleId || void 0),
      (this.source = o.source || void 0),
      (this.stack =
        l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : ""),
      this.actual,
      this.expected,
      this.note,
      this.url;
  }
}
De.prototype.file = "";
De.prototype.name = "";
De.prototype.reason = "";
De.prototype.message = "";
De.prototype.stack = "";
De.prototype.column = void 0;
De.prototype.line = void 0;
De.prototype.ancestors = void 0;
De.prototype.cause = void 0;
De.prototype.fatal = void 0;
De.prototype.place = void 0;
De.prototype.ruleId = void 0;
De.prototype.source = void 0;
const Hu = {}.hasOwnProperty,
  gk = new Map(),
  yk = /[A-Z]/g,
  wk = /-([a-z])/g,
  vk = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  xk = new Set(["td", "th"]),
  Km = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function kk(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ak(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = _k(n, t.jsx, t.jsxs);
  }
  const i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || "react",
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === "svg" ? Bu : Zx,
      stylePropertyNameCase: t.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    o = Ym(i, e, void 0);
  return o && typeof o != "string"
    ? o
    : i.create(e, i.Fragment, { children: o || void 0 }, void 0);
}
function Ym(e, t, n) {
  if (t.type === "element") return Sk(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return bk(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Ek(e, t, n);
  if (t.type === "mdxjsEsm") return Ck(e, t);
  if (t.type === "root") return Pk(e, t, n);
  if (t.type === "text") return Tk(e, t);
}
function Sk(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" &&
    r.space === "html" &&
    ((i = Bu), (e.schema = i)),
    e.ancestors.push(t);
  const o = Zm(e, t.tagName, !1),
    l = zk(e, t);
  let a = Wu(e, t);
  return (
    vk.has(t.tagName) &&
      (a = a.filter(function (s) {
        return typeof s == "string" ? !Bx(s) : !0;
      })),
    Gm(e, l, o, t),
    Vu(l, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, o, l, n)
  );
}
function bk(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, e.evaluater.evaluateExpression(r.expression);
  }
  Ai(e, t.position);
}
function Ck(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree);
  Ai(e, t.position);
}
function Ek(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && ((i = Bu), (e.schema = i)),
    e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : Zm(e, t.name, !0),
    l = Rk(e, t),
    a = Wu(e, t);
  return (
    Gm(e, l, o, t),
    Vu(l, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, o, l, n)
  );
}
function Pk(e, t, n) {
  const r = {};
  return Vu(r, Wu(e, t)), e.create(t, e.Fragment, r, n);
}
function Tk(e, t) {
  return t.value;
}
function Gm(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Vu(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function _k(e, t, n) {
  return r;
  function r(i, o, l, a) {
    const u = Array.isArray(l.children) ? n : t;
    return a ? u(o, l, a) : u(o, l);
  }
}
function Ak(e, t) {
  return n;
  function n(r, i, o, l) {
    const a = Array.isArray(o.children),
      s = Uu(r);
    return t(
      i,
      o,
      l,
      a,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0,
      },
      void 0
    );
  }
}
function zk(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Hu.call(t.properties, i)) {
      const o = Lk(e, i, t.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle &&
        l === "align" &&
        typeof a == "string" &&
        xk.has(t.tagName)
          ? (r = a)
          : (n[l] = a);
      }
    }
  if (r) {
    const o = n.style || (n.style = {});
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Rk(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const a = l.properties[0];
        a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
      } else Ai(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, (o = e.evaluater.evaluateExpression(a.expression));
        } else Ai(e, t.position);
      else o = r.value === null ? !0 : r.value;
      n[i] = o;
    }
  return n;
}
function Wu(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? new Map() : gk;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let l;
    if (e.passKeys) {
      const s =
        o.type === "element"
          ? o.tagName
          : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement"
          ? o.name
          : void 0;
      if (s) {
        const u = i.get(s) || 0;
        (l = s + "-" + u), i.set(s, u + 1);
      }
    }
    const a = Ym(e, o, l);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Lk(e, t, n) {
  const r = Xx(e.schema, t);
  if (!(n == null || (typeof n == "number" && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = r.commaSeparated ? Mx(n) : Jx(n)),
      r.property === "style")
    ) {
      let i = typeof n == "object" ? n : Nk(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Ok(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space
        ? Gx[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function Nk(e, t) {
  const n = {};
  try {
    hk(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const o = i,
        l = new De("Cannot parse `style` attribute", {
          ancestors: e.ancestors,
          cause: o,
          ruleId: "style",
          source: "hast-util-to-jsx-runtime",
        });
      throw (
        ((l.file = e.filePath || void 0),
        (l.url = Km + "#cannot-parse-style-attribute"),
        l)
      );
    }
  }
  return n;
  function r(i, o) {
    let l = i;
    l.slice(0, 2) !== "--" &&
      (l.slice(0, 4) === "-ms-" && (l = "ms-" + l.slice(4)),
      (l = l.replace(wk, Mk))),
      (n[l] = o);
  }
}
function Zm(e, t, n) {
  let r;
  if (!n) r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1,
      l;
    for (; ++o < i.length; ) {
      const a = Mf(i[o])
        ? { type: "Identifier", name: i[o] }
        : { type: "Literal", value: i[o] };
      l = l
        ? {
            type: "MemberExpression",
            object: l,
            property: a,
            computed: !!(o && a.type === "Literal"),
            optional: !1,
          }
        : a;
    }
    r = l;
  } else
    r =
      Mf(t) && !/^[a-z]/.test(t)
        ? { type: "Identifier", name: t }
        : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = r.value;
    return Hu.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  Ai(e);
}
function Ai(e, t) {
  const n = new De("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    ((n.file = e.filePath || void 0),
    (n.url = Km + "#cannot-handle-mdx-estrees-without-createevaluater"),
    n)
  );
}
function Ok(e) {
  const t = {};
  let n;
  for (n in e) Hu.call(e, n) && (t[Ik(n)] = e[n]);
  return t;
}
function Ik(e) {
  let t = e.replace(yk, Dk);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Mk(e, t) {
  return t.toUpperCase();
}
function Dk(e) {
  return "-" + e.toLowerCase();
}
const fa = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  },
  Fk = {};
function qu(e, t) {
  const n = t || Fk,
    r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
    i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Jm(e, r, i);
}
function Jm(e, t, n) {
  if ($k(e)) {
    if ("value" in e) return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return Qf(e.children, t, n);
  }
  return Array.isArray(e) ? Qf(e, t, n) : "";
}
function Qf(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = Jm(e[i], t, n);
  return r.join("");
}
function $k(e) {
  return !!(e && typeof e == "object");
}
const Xf = document.createElement("i");
function Qu(e) {
  const t = "&" + e + ";";
  Xf.innerHTML = t;
  const n = Xf.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t
    ? !1
    : n;
}
function tt(e, t, n, r) {
  const i = e.length;
  let o = 0,
    l;
  if (
    (t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (l = Array.from(r)), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      (l = r.slice(o, o + 1e4)),
        l.unshift(t, 0),
        e.splice(...l),
        (o += 1e4),
        (t += 1e4);
}
function at(e, t) {
  return e.length > 0 ? (tt(e, e.length, 0, t), e) : t;
}
const Kf = {}.hasOwnProperty;
function e0(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) jk(t, e[n]);
  return t;
}
function jk(e, t) {
  let n;
  for (n in t) {
    const i = (Kf.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      o = t[n];
    let l;
    if (o)
      for (l in o) {
        Kf.call(i, l) || (i[l] = []);
        const a = o[l];
        Bk(i[l], Array.isArray(a) ? a : a ? [a] : []);
      }
  }
}
function Bk(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) (t[n].add === "after" ? e : r).push(t[n]);
  tt(e, 0, 0, r);
}
function t0(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? "�"
    : String.fromCodePoint(n);
}
function bt(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const $e = En(/[A-Za-z]/),
  Ie = En(/[\dA-Za-z]/),
  Uk = En(/[#-'*+\--9=?A-Z^-~]/);
function el(e) {
  return e !== null && (e < 32 || e === 127);
}
const zs = En(/\d/),
  Hk = En(/[\dA-Fa-f]/),
  Vk = En(/[!-/:-@[-`{-~]/);
function B(e) {
  return e !== null && e < -2;
}
function ie(e) {
  return e !== null && (e < 0 || e === 32);
}
function Q(e) {
  return e === -2 || e === -1 || e === 32;
}
const _l = En(new RegExp("\\p{P}|\\p{S}", "u")),
  Vn = En(/\s/);
function En(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Or(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && Ie(e.charCodeAt(n + 1)) && Ie(e.charCodeAt(n + 2))) i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
        (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344
        ? ((l = String.fromCharCode(o, a)), (i = 1))
        : (l = "�");
    } else l = String.fromCharCode(o);
    l &&
      (t.push(e.slice(r, n), encodeURIComponent(l)), (r = n + i + 1), (l = "")),
      i && ((n += i), (i = 0));
  }
  return t.join("") + e.slice(r);
}
function Z(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return Q(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return Q(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const Wk = { tokenize: qk };
function qk(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(a),
      e.exit("lineEnding"),
      Z(e, t, "linePrefix")
    );
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const s = e.enter("chunkText", { contentType: "text", previous: n });
    return n && (n.next = s), (n = s), l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return B(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const Qk = { tokenize: Xk },
  Yf = { tokenize: Kk };
function Xk(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    o,
    l;
  return a;
  function a(w) {
    if (r < n.length) {
      const E = n[r];
      return (t.containerState = E[1]), e.attempt(E[0].continuation, s, u)(w);
    }
    return u(w);
  }
  function s(w) {
    if ((r++, t.containerState._closeFlow)) {
      (t.containerState._closeFlow = void 0), i && g();
      const E = t.events.length;
      let P = E,
        k;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          k = t.events[P][1].end;
          break;
        }
      m(r);
      let _ = E;
      for (; _ < t.events.length; )
        (t.events[_][1].end = Object.assign({}, k)), _++;
      return (
        tt(t.events, P + 1, 0, t.events.slice(E)), (t.events.length = _), u(w)
      );
    }
    return a(w);
  }
  function u(w) {
    if (r === n.length) {
      if (!i) return d(w);
      if (i.currentConstruct && i.currentConstruct.concrete) return h(w);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return (t.containerState = {}), e.check(Yf, f, c)(w);
  }
  function f(w) {
    return i && g(), m(r), d(w);
  }
  function c(w) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length), (l = t.now().offset), h(w)
    );
  }
  function d(w) {
    return (t.containerState = {}), e.attempt(Yf, p, h)(w);
  }
  function p(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(w);
  }
  function h(w) {
    if (w === null) {
      i && g(), m(0), e.consume(w);
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter("chunkFlow", { contentType: "flow", previous: o, _tokenizer: i }),
      y(w)
    );
  }
  function y(w) {
    if (w === null) {
      b(e.exit("chunkFlow"), !0), m(0), e.consume(w);
      return;
    }
    return B(w)
      ? (e.consume(w),
        b(e.exit("chunkFlow")),
        (r = 0),
        (t.interrupt = void 0),
        a)
      : (e.consume(w), y);
  }
  function b(w, E) {
    const P = t.sliceStream(w);
    if (
      (E && P.push(null),
      (w.previous = o),
      o && (o.next = w),
      (o = w),
      i.defineSkip(w.start),
      i.write(P),
      t.parser.lazy[w.start.line])
    ) {
      let k = i.events.length;
      for (; k--; )
        if (
          i.events[k][1].start.offset < l &&
          (!i.events[k][1].end || i.events[k][1].end.offset > l)
        )
          return;
      const _ = t.events.length;
      let z = _,
        N,
        S;
      for (; z--; )
        if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
          if (N) {
            S = t.events[z][1].end;
            break;
          }
          N = !0;
        }
      for (m(r), k = _; k < t.events.length; )
        (t.events[k][1].end = Object.assign({}, S)), k++;
      tt(t.events, z + 1, 0, t.events.slice(_)), (t.events.length = k);
    }
  }
  function m(w) {
    let E = n.length;
    for (; E-- > w; ) {
      const P = n[E];
      (t.containerState = P[1]), P[0].exit.call(t, e);
    }
    n.length = w;
  }
  function g() {
    i.write([null]),
      (o = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0);
  }
}
function Kk(e, t, n) {
  return Z(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function tl(e) {
  if (e === null || ie(e) || Vn(e)) return 1;
  if (_l(e)) return 2;
}
function Al(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && ((t = o(t, n)), r.push(o));
  }
  return t;
}
const Rs = { name: "attention", tokenize: Gk, resolveAll: Yk };
function Yk(e, t) {
  let n = -1,
    r,
    i,
    o,
    l,
    a,
    s,
    u,
    f;
  for (; ++n < e.length; )
    if (
      e[n][0] === "enter" &&
      e[n][1].type === "attentionSequence" &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          s =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const c = Object.assign({}, e[r][1].end),
            d = Object.assign({}, e[n][1].start);
          Gf(c, -s),
            Gf(d, s),
            (l = {
              type: s > 1 ? "strongSequence" : "emphasisSequence",
              start: c,
              end: Object.assign({}, e[r][1].end),
            }),
            (a = {
              type: s > 1 ? "strongSequence" : "emphasisSequence",
              start: Object.assign({}, e[n][1].start),
              end: d,
            }),
            (o = {
              type: s > 1 ? "strongText" : "emphasisText",
              start: Object.assign({}, e[r][1].end),
              end: Object.assign({}, e[n][1].start),
            }),
            (i = {
              type: s > 1 ? "strong" : "emphasis",
              start: Object.assign({}, l.start),
              end: Object.assign({}, a.end),
            }),
            (e[r][1].end = Object.assign({}, l.start)),
            (e[n][1].start = Object.assign({}, a.end)),
            (u = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (u = at(u, [
                ["enter", e[r][1], t],
                ["exit", e[r][1], t],
              ])),
            (u = at(u, [
              ["enter", i, t],
              ["enter", l, t],
              ["exit", l, t],
              ["enter", o, t],
            ])),
            (u = at(
              u,
              Al(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)
            )),
            (u = at(u, [
              ["exit", o, t],
              ["enter", a, t],
              ["exit", a, t],
              ["exit", i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((f = 2),
                (u = at(u, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])))
              : (f = 0),
            tt(e, r - 1, n - r + 3, u),
            (n = r + u.length - f - 2);
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Gk(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = tl(r);
  let o;
  return l;
  function l(s) {
    return (o = s), e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o) return e.consume(s), a;
    const u = e.exit("attentionSequence"),
      f = tl(s),
      c = !f || (f === 2 && i) || n.includes(s),
      d = !i || (i === 2 && f) || n.includes(r);
    return (
      (u._open = !!(o === 42 ? c : c && (i || !d))),
      (u._close = !!(o === 42 ? d : d && (f || !c))),
      t(s)
    );
  }
}
function Gf(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const Zk = { name: "autolink", tokenize: Jk };
function Jk(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(p),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      o
    );
  }
  function o(p) {
    return $e(p) ? (e.consume(p), l) : u(p);
  }
  function l(p) {
    return p === 43 || p === 45 || p === 46 || Ie(p) ? ((r = 1), a(p)) : u(p);
  }
  function a(p) {
    return p === 58
      ? (e.consume(p), (r = 0), s)
      : (p === 43 || p === 45 || p === 46 || Ie(p)) && r++ < 32
      ? (e.consume(p), a)
      : ((r = 0), u(p));
  }
  function s(p) {
    return p === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(p),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : p === null || p === 32 || p === 60 || el(p)
      ? n(p)
      : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), f) : Uk(p) ? (e.consume(p), u) : n(p);
  }
  function f(p) {
    return Ie(p) ? c(p) : n(p);
  }
  function c(p) {
    return p === 46
      ? (e.consume(p), (r = 0), f)
      : p === 62
      ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
        e.enter("autolinkMarker"),
        e.consume(p),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : d(p);
  }
  function d(p) {
    if ((p === 45 || Ie(p)) && r++ < 63) {
      const h = p === 45 ? d : c;
      return e.consume(p), h;
    }
    return n(p);
  }
}
const $i = { tokenize: e2, partial: !0 };
function e2(e, t, n) {
  return r;
  function r(o) {
    return Q(o) ? Z(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || B(o) ? t(o) : n(o);
  }
}
const n0 = {
  name: "blockQuote",
  tokenize: t2,
  continuation: { tokenize: n2 },
  exit: r2,
};
function t2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return (
        a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(l),
        e.exit("blockQuoteMarker"),
        o
      );
    }
    return n(l);
  }
  function o(l) {
    return Q(l)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(l),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(l));
  }
}
function n2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return Q(l)
      ? Z(
          e,
          o,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(l)
      : o(l);
  }
  function o(l) {
    return e.attempt(n0, t, n)(l);
  }
}
function r2(e) {
  e.exit("blockQuote");
}
const r0 = { name: "characterEscape", tokenize: i2 };
function i2(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(o),
      e.exit("escapeMarker"),
      i
    );
  }
  function i(o) {
    return Vk(o)
      ? (e.enter("characterEscapeValue"),
        e.consume(o),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : n(o);
  }
}
const i0 = { name: "characterReference", tokenize: o2 };
function o2(e, t, n) {
  const r = this;
  let i = 0,
    o,
    l;
  return a;
  function a(c) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(c),
      e.exit("characterReferenceMarker"),
      s
    );
  }
  function s(c) {
    return c === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(c),
        e.exit("characterReferenceMarkerNumeric"),
        u)
      : (e.enter("characterReferenceValue"), (o = 31), (l = Ie), f(c));
  }
  function u(c) {
    return c === 88 || c === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(c),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (o = 6),
        (l = Hk),
        f)
      : (e.enter("characterReferenceValue"), (o = 7), (l = zs), f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return l === Ie && !Qu(r.sliceSerialize(d))
        ? n(c)
        : (e.enter("characterReferenceMarker"),
          e.consume(c),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          t);
    }
    return l(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const Zf = { tokenize: a2, partial: !0 },
  Jf = { name: "codeFenced", tokenize: l2, concrete: !0 };
function l2(e, t, n) {
  const r = this,
    i = { tokenize: P, partial: !0 };
  let o = 0,
    l = 0,
    a;
  return s;
  function s(k) {
    return u(k);
  }
  function u(k) {
    const _ = r.events[r.events.length - 1];
    return (
      (o =
        _ && _[1].type === "linePrefix"
          ? _[2].sliceSerialize(_[1], !0).length
          : 0),
      (a = k),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      f(k)
    );
  }
  function f(k) {
    return k === a
      ? (l++, e.consume(k), f)
      : l < 3
      ? n(k)
      : (e.exit("codeFencedFenceSequence"),
        Q(k) ? Z(e, c, "whitespace")(k) : c(k));
  }
  function c(k) {
    return k === null || B(k)
      ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(Zf, y, E)(k))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        d(k));
  }
  function d(k) {
    return k === null || B(k)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(k))
      : Q(k)
      ? (e.exit("chunkString"),
        e.exit("codeFencedFenceInfo"),
        Z(e, p, "whitespace")(k))
      : k === 96 && k === a
      ? n(k)
      : (e.consume(k), d);
  }
  function p(k) {
    return k === null || B(k)
      ? c(k)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        h(k));
  }
  function h(k) {
    return k === null || B(k)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(k))
      : k === 96 && k === a
      ? n(k)
      : (e.consume(k), h);
  }
  function y(k) {
    return e.attempt(i, E, b)(k);
  }
  function b(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), m;
  }
  function m(k) {
    return o > 0 && Q(k) ? Z(e, g, "linePrefix", o + 1)(k) : g(k);
  }
  function g(k) {
    return k === null || B(k)
      ? e.check(Zf, y, E)(k)
      : (e.enter("codeFlowValue"), w(k));
  }
  function w(k) {
    return k === null || B(k)
      ? (e.exit("codeFlowValue"), g(k))
      : (e.consume(k), w);
  }
  function E(k) {
    return e.exit("codeFenced"), t(k);
  }
  function P(k, _, z) {
    let N = 0;
    return S;
    function S(q) {
      return k.enter("lineEnding"), k.consume(q), k.exit("lineEnding"), I;
    }
    function I(q) {
      return (
        k.enter("codeFencedFence"),
        Q(q)
          ? Z(
              k,
              O,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(q)
          : O(q)
      );
    }
    function O(q) {
      return q === a ? (k.enter("codeFencedFenceSequence"), X(q)) : z(q);
    }
    function X(q) {
      return q === a
        ? (N++, k.consume(q), X)
        : N >= l
        ? (k.exit("codeFencedFenceSequence"),
          Q(q) ? Z(k, te, "whitespace")(q) : te(q))
        : z(q);
    }
    function te(q) {
      return q === null || B(q) ? (k.exit("codeFencedFence"), _(q)) : z(q);
    }
  }
}
function a2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null
      ? n(l)
      : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const da = { name: "codeIndented", tokenize: u2 },
  s2 = { tokenize: c2, partial: !0 };
function u2(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), Z(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const f = r.events[r.events.length - 1];
    return f &&
      f[1].type === "linePrefix" &&
      f[2].sliceSerialize(f[1], !0).length >= 4
      ? l(u)
      : n(u);
  }
  function l(u) {
    return u === null
      ? s(u)
      : B(u)
      ? e.attempt(s2, l, s)(u)
      : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || B(u)
      ? (e.exit("codeFlowValue"), l(u))
      : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function c2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line]
      ? n(l)
      : B(l)
      ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i)
      : Z(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(l)
      : B(l)
      ? i(l)
      : n(l);
  }
}
const f2 = { name: "codeText", tokenize: h2, resolve: d2, previous: p2 };
function d2(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        (e[n][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (n += 2),
          (t -= 2);
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
      : (r === t || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function p2(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function h2(e, t, n) {
  let r = 0,
    i,
    o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96
      ? (e.consume(c), r++, a)
      : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null
      ? n(c)
      : c === 32
      ? (e.enter("space"), e.consume(c), e.exit("space"), s)
      : c === 96
      ? ((o = e.enter("codeTextSequence")), (i = 0), f(c))
      : B(c)
      ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s)
      : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || B(c)
      ? (e.exit("codeTextData"), s(c))
      : (e.consume(c), u);
  }
  function f(c) {
    return c === 96
      ? (e.consume(c), i++, f)
      : i === r
      ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c))
      : ((o.type = "codeTextData"), u(c));
  }
}
function o0(e) {
  const t = {};
  let n = -1,
    r,
    i,
    o,
    l,
    a,
    s,
    u;
  for (; ++n < e.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = e[n]),
      n &&
        r[1].type === "chunkFlow" &&
        e[n - 1][1].type === "listItemPrefix" &&
        ((s = r[1]._tokenizer.events),
        (o = 0),
        o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2),
        o < s.length && s[o][1].type === "content"))
    )
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" &&
          ((s[o][1]._isInFirstContentOfListItem = !0), o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, m2(e, n)), (n = t[n]), (u = !0));
    else if (r[1]._container) {
      for (
        o = n, i = void 0;
        o-- &&
        ((l = e[o]),
        l[1].type === "lineEnding" || l[1].type === "lineEndingBlank");

      )
        l[0] === "enter" &&
          (i && (e[i][1].type = "lineEndingBlank"),
          (l[1].type = "lineEnding"),
          (i = o));
      i &&
        ((r[1].end = Object.assign({}, e[i][1].start)),
        (a = e.slice(i, n)),
        a.unshift(r),
        tt(e, i, n - i + 1, a));
    }
  }
  return !u;
}
function m2(e, t) {
  const n = e[t][1],
    r = e[t][2];
  let i = t - 1;
  const o = [],
    l = n._tokenizer || r.parser[n.contentType](n.start),
    a = l.events,
    s = [],
    u = {};
  let f,
    c,
    d = -1,
    p = n,
    h = 0,
    y = 0;
  const b = [y];
  for (; p; ) {
    for (; e[++i][1] !== p; );
    o.push(i),
      p._tokenizer ||
        ((f = r.sliceStream(p)),
        p.next || f.push(null),
        c && l.defineSkip(p.start),
        p._isInFirstContentOfListItem &&
          (l._gfmTasklistFirstContentOfListItem = !0),
        l.write(f),
        p._isInFirstContentOfListItem &&
          (l._gfmTasklistFirstContentOfListItem = void 0)),
      (c = p),
      (p = p.next);
  }
  for (p = n; ++d < a.length; )
    a[d][0] === "exit" &&
      a[d - 1][0] === "enter" &&
      a[d][1].type === a[d - 1][1].type &&
      a[d][1].start.line !== a[d][1].end.line &&
      ((y = d + 1),
      b.push(y),
      (p._tokenizer = void 0),
      (p.previous = void 0),
      (p = p.next));
  for (
    l.events = [],
      p ? ((p._tokenizer = void 0), (p.previous = void 0)) : b.pop(),
      d = b.length;
    d--;

  ) {
    const m = a.slice(b[d], b[d + 1]),
      g = o.pop();
    s.unshift([g, g + m.length - 1]), tt(e, g, 2, m);
  }
  for (d = -1; ++d < s.length; )
    (u[h + s[d][0]] = h + s[d][1]), (h += s[d][1] - s[d][0] - 1);
  return u;
}
const g2 = { tokenize: v2, resolve: w2 },
  y2 = { tokenize: x2, partial: !0 };
function w2(e) {
  return o0(e), e;
}
function v2(e, t) {
  let n;
  return r;
  function r(a) {
    return (
      e.enter("content"),
      (n = e.enter("chunkContent", { contentType: "content" })),
      i(a)
    );
  }
  function i(a) {
    return a === null ? o(a) : B(a) ? e.check(y2, l, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function l(a) {
    return (
      e.consume(a),
      e.exit("chunkContent"),
      (n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function x2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      Z(e, o, "linePrefix")
    );
  }
  function o(l) {
    if (l === null || B(l)) return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(l)
      : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function l0(e, t, n, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(m) {
    return m === 60
      ? (e.enter(r), e.enter(i), e.enter(o), e.consume(m), e.exit(o), d)
      : m === null || m === 32 || m === 41 || el(m)
      ? n(m)
      : (e.enter(r),
        e.enter(l),
        e.enter(a),
        e.enter("chunkString", { contentType: "string" }),
        y(m));
  }
  function d(m) {
    return m === 62
      ? (e.enter(o), e.consume(m), e.exit(o), e.exit(i), e.exit(r), t)
      : (e.enter(a), e.enter("chunkString", { contentType: "string" }), p(m));
  }
  function p(m) {
    return m === 62
      ? (e.exit("chunkString"), e.exit(a), d(m))
      : m === null || m === 60 || B(m)
      ? n(m)
      : (e.consume(m), m === 92 ? h : p);
  }
  function h(m) {
    return m === 60 || m === 62 || m === 92 ? (e.consume(m), p) : p(m);
  }
  function y(m) {
    return !f && (m === null || m === 41 || ie(m))
      ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(m))
      : f < u && m === 40
      ? (e.consume(m), f++, y)
      : m === 41
      ? (e.consume(m), f--, y)
      : m === null || m === 32 || m === 40 || el(m)
      ? n(m)
      : (e.consume(m), m === 92 ? b : y);
  }
  function b(m) {
    return m === 40 || m === 41 || m === 92 ? (e.consume(m), y) : y(m);
  }
}
function a0(e, t, n, r, i, o) {
  const l = this;
  let a = 0,
    s;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), f;
  }
  function f(p) {
    return a > 999 ||
      p === null ||
      p === 91 ||
      (p === 93 && !s) ||
      (p === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs)
      ? n(p)
      : p === 93
      ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t)
      : B(p)
      ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), f)
      : (e.enter("chunkString", { contentType: "string" }), c(p));
  }
  function c(p) {
    return p === null || p === 91 || p === 93 || B(p) || a++ > 999
      ? (e.exit("chunkString"), f(p))
      : (e.consume(p), s || (s = !Q(p)), p === 92 ? d : c);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, c) : c(p);
  }
}
function s0(e, t, n, r, i, o) {
  let l;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(d),
        e.exit(i),
        (l = d === 40 ? 41 : d),
        s)
      : n(d);
  }
  function s(d) {
    return d === l
      ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t)
      : (e.enter(o), u(d));
  }
  function u(d) {
    return d === l
      ? (e.exit(o), s(l))
      : d === null
      ? n(d)
      : B(d)
      ? (e.enter("lineEnding"),
        e.consume(d),
        e.exit("lineEnding"),
        Z(e, u, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), f(d));
  }
  function f(d) {
    return d === l || d === null || B(d)
      ? (e.exit("chunkString"), u(d))
      : (e.consume(d), d === 92 ? c : f);
  }
  function c(d) {
    return d === l || d === 92 ? (e.consume(d), f) : f(d);
  }
}
function ui(e, t) {
  let n;
  return r;
  function r(i) {
    return B(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r)
      : Q(i)
      ? Z(e, r, n ? "linePrefix" : "lineSuffix")(i)
      : t(i);
  }
}
const k2 = { name: "definition", tokenize: b2 },
  S2 = { tokenize: C2, partial: !0 };
function b2(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return a0.call(
      r,
      e,
      a,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return (
      (i = bt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      p === 58
        ? (e.enter("definitionMarker"),
          e.consume(p),
          e.exit("definitionMarker"),
          s)
        : n(p)
    );
  }
  function s(p) {
    return ie(p) ? ui(e, u)(p) : u(p);
  }
  function u(p) {
    return l0(
      e,
      f,
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function f(p) {
    return e.attempt(S2, c, c)(p);
  }
  function c(p) {
    return Q(p) ? Z(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || B(p)
      ? (e.exit("definition"), r.parser.defined.push(i), t(p))
      : n(p);
  }
}
function C2(e, t, n) {
  return r;
  function r(a) {
    return ie(a) ? ui(e, i)(a) : n(a);
  }
  function i(a) {
    return s0(
      e,
      o,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function o(a) {
    return Q(a) ? Z(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || B(a) ? t(a) : n(a);
  }
}
const E2 = { name: "hardBreakEscape", tokenize: P2 };
function P2(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return B(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const T2 = { name: "headingAtx", tokenize: A2, resolve: _2 };
function _2(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    o;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
    e[n][1].type === "atxHeadingSequence" &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
      (o = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text",
      }),
      tt(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", o, t],
        ["exit", o, t],
        ["exit", i, t],
      ])),
    e
  );
}
function A2(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), l(f);
  }
  function l(f) {
    return f === 35 && r++ < 6
      ? (e.consume(f), l)
      : f === null || ie(f)
      ? (e.exit("atxHeadingSequence"), a(f))
      : n(f);
  }
  function a(f) {
    return f === 35
      ? (e.enter("atxHeadingSequence"), s(f))
      : f === null || B(f)
      ? (e.exit("atxHeading"), t(f))
      : Q(f)
      ? Z(e, a, "whitespace")(f)
      : (e.enter("atxHeadingText"), u(f));
  }
  function s(f) {
    return f === 35 ? (e.consume(f), s) : (e.exit("atxHeadingSequence"), a(f));
  }
  function u(f) {
    return f === null || f === 35 || ie(f)
      ? (e.exit("atxHeadingText"), a(f))
      : (e.consume(f), u);
  }
}
const z2 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  ed = ["pre", "script", "style", "textarea"],
  R2 = { name: "htmlFlow", tokenize: I2, resolveTo: O2, concrete: !0 },
  L2 = { tokenize: D2, partial: !0 },
  N2 = { tokenize: M2, partial: !0 };
function O2(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function I2(e, t, n) {
  const r = this;
  let i, o, l, a, s;
  return u;
  function u(x) {
    return f(x);
  }
  function f(x) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(x), c;
  }
  function c(x) {
    return x === 33
      ? (e.consume(x), d)
      : x === 47
      ? (e.consume(x), (o = !0), y)
      : x === 63
      ? (e.consume(x), (i = 3), r.interrupt ? t : v)
      : $e(x)
      ? (e.consume(x), (l = String.fromCharCode(x)), b)
      : n(x);
  }
  function d(x) {
    return x === 45
      ? (e.consume(x), (i = 2), p)
      : x === 91
      ? (e.consume(x), (i = 5), (a = 0), h)
      : $e(x)
      ? (e.consume(x), (i = 4), r.interrupt ? t : v)
      : n(x);
  }
  function p(x) {
    return x === 45 ? (e.consume(x), r.interrupt ? t : v) : n(x);
  }
  function h(x) {
    const Ce = "CDATA[";
    return x === Ce.charCodeAt(a++)
      ? (e.consume(x), a === Ce.length ? (r.interrupt ? t : O) : h)
      : n(x);
  }
  function y(x) {
    return $e(x) ? (e.consume(x), (l = String.fromCharCode(x)), b) : n(x);
  }
  function b(x) {
    if (x === null || x === 47 || x === 62 || ie(x)) {
      const Ce = x === 47,
        mt = l.toLowerCase();
      return !Ce && !o && ed.includes(mt)
        ? ((i = 1), r.interrupt ? t(x) : O(x))
        : z2.includes(l.toLowerCase())
        ? ((i = 6), Ce ? (e.consume(x), m) : r.interrupt ? t(x) : O(x))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? n(x) : o ? g(x) : w(x));
    }
    return x === 45 || Ie(x)
      ? (e.consume(x), (l += String.fromCharCode(x)), b)
      : n(x);
  }
  function m(x) {
    return x === 62 ? (e.consume(x), r.interrupt ? t : O) : n(x);
  }
  function g(x) {
    return Q(x) ? (e.consume(x), g) : S(x);
  }
  function w(x) {
    return x === 47
      ? (e.consume(x), S)
      : x === 58 || x === 95 || $e(x)
      ? (e.consume(x), E)
      : Q(x)
      ? (e.consume(x), w)
      : S(x);
  }
  function E(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Ie(x)
      ? (e.consume(x), E)
      : P(x);
  }
  function P(x) {
    return x === 61 ? (e.consume(x), k) : Q(x) ? (e.consume(x), P) : w(x);
  }
  function k(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96
      ? n(x)
      : x === 34 || x === 39
      ? (e.consume(x), (s = x), _)
      : Q(x)
      ? (e.consume(x), k)
      : z(x);
  }
  function _(x) {
    return x === s
      ? (e.consume(x), (s = null), N)
      : x === null || B(x)
      ? n(x)
      : (e.consume(x), _);
  }
  function z(x) {
    return x === null ||
      x === 34 ||
      x === 39 ||
      x === 47 ||
      x === 60 ||
      x === 61 ||
      x === 62 ||
      x === 96 ||
      ie(x)
      ? P(x)
      : (e.consume(x), z);
  }
  function N(x) {
    return x === 47 || x === 62 || Q(x) ? w(x) : n(x);
  }
  function S(x) {
    return x === 62 ? (e.consume(x), I) : n(x);
  }
  function I(x) {
    return x === null || B(x) ? O(x) : Q(x) ? (e.consume(x), I) : n(x);
  }
  function O(x) {
    return x === 45 && i === 2
      ? (e.consume(x), se)
      : x === 60 && i === 1
      ? (e.consume(x), he)
      : x === 62 && i === 4
      ? (e.consume(x), W)
      : x === 63 && i === 3
      ? (e.consume(x), v)
      : x === 93 && i === 5
      ? (e.consume(x), j)
      : B(x) && (i === 6 || i === 7)
      ? (e.exit("htmlFlowData"), e.check(L2, J, X)(x))
      : x === null || B(x)
      ? (e.exit("htmlFlowData"), X(x))
      : (e.consume(x), O);
  }
  function X(x) {
    return e.check(N2, te, J)(x);
  }
  function te(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), q;
  }
  function q(x) {
    return x === null || B(x) ? X(x) : (e.enter("htmlFlowData"), O(x));
  }
  function se(x) {
    return x === 45 ? (e.consume(x), v) : O(x);
  }
  function he(x) {
    return x === 47 ? (e.consume(x), (l = ""), M) : O(x);
  }
  function M(x) {
    if (x === 62) {
      const Ce = l.toLowerCase();
      return ed.includes(Ce) ? (e.consume(x), W) : O(x);
    }
    return $e(x) && l.length < 8
      ? (e.consume(x), (l += String.fromCharCode(x)), M)
      : O(x);
  }
  function j(x) {
    return x === 93 ? (e.consume(x), v) : O(x);
  }
  function v(x) {
    return x === 62
      ? (e.consume(x), W)
      : x === 45 && i === 2
      ? (e.consume(x), v)
      : O(x);
  }
  function W(x) {
    return x === null || B(x)
      ? (e.exit("htmlFlowData"), J(x))
      : (e.consume(x), W);
  }
  function J(x) {
    return e.exit("htmlFlow"), t(x);
  }
}
function M2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return B(l)
      ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o)
      : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function D2(e, t, n) {
  return r;
  function r(i) {
    return (
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      e.attempt($i, t, n)
    );
  }
}
const F2 = { name: "htmlText", tokenize: $2 };
function $2(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(v) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(v), s;
  }
  function s(v) {
    return v === 33
      ? (e.consume(v), u)
      : v === 47
      ? (e.consume(v), P)
      : v === 63
      ? (e.consume(v), w)
      : $e(v)
      ? (e.consume(v), z)
      : n(v);
  }
  function u(v) {
    return v === 45
      ? (e.consume(v), f)
      : v === 91
      ? (e.consume(v), (o = 0), h)
      : $e(v)
      ? (e.consume(v), g)
      : n(v);
  }
  function f(v) {
    return v === 45 ? (e.consume(v), p) : n(v);
  }
  function c(v) {
    return v === null
      ? n(v)
      : v === 45
      ? (e.consume(v), d)
      : B(v)
      ? ((l = c), he(v))
      : (e.consume(v), c);
  }
  function d(v) {
    return v === 45 ? (e.consume(v), p) : c(v);
  }
  function p(v) {
    return v === 62 ? se(v) : v === 45 ? d(v) : c(v);
  }
  function h(v) {
    const W = "CDATA[";
    return v === W.charCodeAt(o++)
      ? (e.consume(v), o === W.length ? y : h)
      : n(v);
  }
  function y(v) {
    return v === null
      ? n(v)
      : v === 93
      ? (e.consume(v), b)
      : B(v)
      ? ((l = y), he(v))
      : (e.consume(v), y);
  }
  function b(v) {
    return v === 93 ? (e.consume(v), m) : y(v);
  }
  function m(v) {
    return v === 62 ? se(v) : v === 93 ? (e.consume(v), m) : y(v);
  }
  function g(v) {
    return v === null || v === 62
      ? se(v)
      : B(v)
      ? ((l = g), he(v))
      : (e.consume(v), g);
  }
  function w(v) {
    return v === null
      ? n(v)
      : v === 63
      ? (e.consume(v), E)
      : B(v)
      ? ((l = w), he(v))
      : (e.consume(v), w);
  }
  function E(v) {
    return v === 62 ? se(v) : w(v);
  }
  function P(v) {
    return $e(v) ? (e.consume(v), k) : n(v);
  }
  function k(v) {
    return v === 45 || Ie(v) ? (e.consume(v), k) : _(v);
  }
  function _(v) {
    return B(v) ? ((l = _), he(v)) : Q(v) ? (e.consume(v), _) : se(v);
  }
  function z(v) {
    return v === 45 || Ie(v)
      ? (e.consume(v), z)
      : v === 47 || v === 62 || ie(v)
      ? N(v)
      : n(v);
  }
  function N(v) {
    return v === 47
      ? (e.consume(v), se)
      : v === 58 || v === 95 || $e(v)
      ? (e.consume(v), S)
      : B(v)
      ? ((l = N), he(v))
      : Q(v)
      ? (e.consume(v), N)
      : se(v);
  }
  function S(v) {
    return v === 45 || v === 46 || v === 58 || v === 95 || Ie(v)
      ? (e.consume(v), S)
      : I(v);
  }
  function I(v) {
    return v === 61
      ? (e.consume(v), O)
      : B(v)
      ? ((l = I), he(v))
      : Q(v)
      ? (e.consume(v), I)
      : N(v);
  }
  function O(v) {
    return v === null || v === 60 || v === 61 || v === 62 || v === 96
      ? n(v)
      : v === 34 || v === 39
      ? (e.consume(v), (i = v), X)
      : B(v)
      ? ((l = O), he(v))
      : Q(v)
      ? (e.consume(v), O)
      : (e.consume(v), te);
  }
  function X(v) {
    return v === i
      ? (e.consume(v), (i = void 0), q)
      : v === null
      ? n(v)
      : B(v)
      ? ((l = X), he(v))
      : (e.consume(v), X);
  }
  function te(v) {
    return v === null ||
      v === 34 ||
      v === 39 ||
      v === 60 ||
      v === 61 ||
      v === 96
      ? n(v)
      : v === 47 || v === 62 || ie(v)
      ? N(v)
      : (e.consume(v), te);
  }
  function q(v) {
    return v === 47 || v === 62 || ie(v) ? N(v) : n(v);
  }
  function se(v) {
    return v === 62
      ? (e.consume(v), e.exit("htmlTextData"), e.exit("htmlText"), t)
      : n(v);
  }
  function he(v) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(v),
      e.exit("lineEnding"),
      M
    );
  }
  function M(v) {
    return Q(v)
      ? Z(
          e,
          j,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(v)
      : j(v);
  }
  function j(v) {
    return e.enter("htmlTextData"), l(v);
  }
}
const Xu = { name: "labelEnd", tokenize: W2, resolveTo: V2, resolveAll: H2 },
  j2 = { tokenize: q2 },
  B2 = { tokenize: Q2 },
  U2 = { tokenize: X2 };
function H2(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" ||
      n.type === "labelLink" ||
      n.type === "labelEnd") &&
      (e.splice(t + 1, n.type === "labelImage" ? 4 : 2),
      (n.type = "data"),
      t++);
  }
  return e;
}
function V2(e, t) {
  let n = e.length,
    r = 0,
    i,
    o,
    l,
    a;
  for (; n--; )
    if (((i = e[n][1]), o)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (
        e[n][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((o = n), i.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
  const s = {
      type: e[o][1].type === "labelLink" ? "link" : "image",
      start: Object.assign({}, e[o][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    u = {
      type: "label",
      start: Object.assign({}, e[o][1].start),
      end: Object.assign({}, e[l][1].end),
    },
    f = {
      type: "labelText",
      start: Object.assign({}, e[o + r + 2][1].end),
      end: Object.assign({}, e[l - 2][1].start),
    };
  return (
    (a = [
      ["enter", s, t],
      ["enter", u, t],
    ]),
    (a = at(a, e.slice(o + 1, o + r + 3))),
    (a = at(a, [["enter", f, t]])),
    (a = at(
      a,
      Al(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)
    )),
    (a = at(a, [["exit", f, t], e[l - 2], e[l - 1], ["exit", u, t]])),
    (a = at(a, e.slice(l + 1))),
    (a = at(a, [["exit", s, t]])),
    tt(e, o, e.length, a),
    e
  );
}
function W2(e, t, n) {
  const r = this;
  let i = r.events.length,
    o,
    l;
  for (; i--; )
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return o
      ? o._inactive
        ? c(d)
        : ((l = r.parser.defined.includes(
            bt(r.sliceSerialize({ start: o.end, end: r.now() }))
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(d),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          s)
      : n(d);
  }
  function s(d) {
    return d === 40
      ? e.attempt(j2, f, l ? f : c)(d)
      : d === 91
      ? e.attempt(B2, f, l ? u : c)(d)
      : l
      ? f(d)
      : c(d);
  }
  function u(d) {
    return e.attempt(U2, f, c)(d);
  }
  function f(d) {
    return t(d);
  }
  function c(d) {
    return (o._balanced = !0), n(d);
  }
}
function q2(e, t, n) {
  return r;
  function r(c) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(c),
      e.exit("resourceMarker"),
      i
    );
  }
  function i(c) {
    return ie(c) ? ui(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41
      ? f(c)
      : l0(
          e,
          l,
          a,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(c);
  }
  function l(c) {
    return ie(c) ? ui(e, s)(c) : f(c);
  }
  function a(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40
      ? s0(
          e,
          u,
          n,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(c)
      : f(c);
  }
  function u(c) {
    return ie(c) ? ui(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41
      ? (e.enter("resourceMarker"),
        e.consume(c),
        e.exit("resourceMarker"),
        e.exit("resource"),
        t)
      : n(c);
  }
}
function Q2(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a0.call(
      r,
      e,
      o,
      l,
      "reference",
      "referenceMarker",
      "referenceString"
    )(a);
  }
  function o(a) {
    return r.parser.defined.includes(
      bt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? t(a)
      : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function X2(e, t, n) {
  return r;
  function r(o) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(o),
      e.exit("referenceMarker"),
      i
    );
  }
  function i(o) {
    return o === 93
      ? (e.enter("referenceMarker"),
        e.consume(o),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : n(o);
  }
}
const K2 = { name: "labelStartImage", tokenize: Y2, resolveAll: Xu.resolveAll };
function Y2(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(a),
      e.exit("labelImageMarker"),
      o
    );
  }
  function o(a) {
    return a === 91
      ? (e.enter("labelMarker"),
        e.consume(a),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        l)
      : n(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(a)
      : t(a);
  }
}
const G2 = { name: "labelStartLink", tokenize: Z2, resolveAll: Xu.resolveAll };
function Z2(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(l),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      o
    );
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(l)
      : t(l);
  }
}
const pa = { name: "lineEnding", tokenize: J2 };
function J2(e, t) {
  return n;
  function n(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      Z(e, t, "linePrefix")
    );
  }
}
const Po = { name: "thematicBreak", tokenize: eS };
function eS(e, t, n) {
  let r = 0,
    i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return (i = u), a(u);
  }
  function a(u) {
    return u === i
      ? (e.enter("thematicBreakSequence"), s(u))
      : r >= 3 && (u === null || B(u))
      ? (e.exit("thematicBreak"), t(u))
      : n(u);
  }
  function s(u) {
    return u === i
      ? (e.consume(u), r++, s)
      : (e.exit("thematicBreakSequence"),
        Q(u) ? Z(e, a, "whitespace")(u) : a(u));
  }
}
const He = {
    name: "list",
    tokenize: rS,
    continuation: { tokenize: iS },
    exit: lS,
  },
  tS = { tokenize: aS, partial: !0 },
  nS = { tokenize: oS, partial: !0 };
function rS(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let o =
      i && i[1].type === "linePrefix"
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    l = 0;
  return a;
  function a(p) {
    const h =
      r.containerState.type ||
      (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (
      h === "listUnordered"
        ? !r.containerState.marker || p === r.containerState.marker
        : zs(p)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = h), e.enter(h, { _container: !0 })),
        h === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          p === 42 || p === 45 ? e.check(Po, n, u)(p) : u(p)
        );
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return n(p);
  }
  function s(p) {
    return zs(p) && ++l < 10
      ? (e.consume(p), s)
      : (!r.interrupt || l < 2) &&
        (r.containerState.marker
          ? p === r.containerState.marker
          : p === 41 || p === 46)
      ? (e.exit("listItemValue"), u(p))
      : n(p);
  }
  function u(p) {
    return (
      e.enter("listItemMarker"),
      e.consume(p),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || p),
      e.check($i, r.interrupt ? n : f, e.attempt(tS, d, c))
    );
  }
  function f(p) {
    return (r.containerState.initialBlankLine = !0), o++, d(p);
  }
  function c(p) {
    return Q(p)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(p),
        e.exit("listItemPrefixWhitespace"),
        d)
      : n(p);
  }
  function d(p) {
    return (
      (r.containerState.size =
        o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(p)
    );
  }
}
function iS(e, t, n) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check($i, i, o);
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      Z(e, t, "listItemIndent", r.containerState.size + 1)(a)
    );
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !Q(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        l(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(nS, t, l)(a));
  }
  function l(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      Z(
        e,
        e.attempt(He, t, n),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(a)
    );
  }
}
function oS(e, t, n) {
  const r = this;
  return Z(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l &&
      l[1].type === "listItemIndent" &&
      l[2].sliceSerialize(l[1], !0).length === r.containerState.size
      ? t(o)
      : n(o);
  }
}
function lS(e) {
  e.exit(this.containerState.type);
}
function aS(e, t, n) {
  const r = this;
  return Z(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !Q(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const td = { name: "setextUnderline", tokenize: uS, resolveTo: sS };
function sS(e, t) {
  let n = e.length,
    r,
    i,
    o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1),
        !o && e[n][1].type === "definition" && (o = n);
  const l = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end),
  };
  return (
    (e[i][1].type = "setextHeadingText"),
    o
      ? (e.splice(i, 0, ["enter", l, t]),
        e.splice(o + 1, 0, ["exit", e[r][1], t]),
        (e[r][1].end = Object.assign({}, e[o][1].end)))
      : (e[r][1] = l),
    e.push(["exit", l, t]),
    e
  );
}
function uS(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let f = r.events.length,
      c;
    for (; f--; )
      if (
        r.events[f][1].type !== "lineEnding" &&
        r.events[f][1].type !== "linePrefix" &&
        r.events[f][1].type !== "content"
      ) {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c)
      ? (e.enter("setextHeadingLine"), (i = u), l(u))
      : n(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i
      ? (e.consume(u), a)
      : (e.exit("setextHeadingLineSequence"),
        Q(u) ? Z(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || B(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const cS = { tokenize: fS };
function fS(e) {
  const t = this,
    n = e.attempt(
      $i,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        Z(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(g2, i)),
          "linePrefix"
        )
      )
    );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(o),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(o),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const dS = { resolveAll: c0() },
  pS = u0("string"),
  hS = u0("text");
function u0(e) {
  return { tokenize: t, resolveAll: c0(e === "text" ? mS : void 0) };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      o = n.attempt(i, l, a);
    return l;
    function l(f) {
      return u(f) ? o(f) : a(f);
    }
    function a(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), s;
    }
    function s(f) {
      return u(f) ? (n.exit("data"), o(f)) : (n.consume(f), s);
    }
    function u(f) {
      if (f === null) return !0;
      const c = i[f];
      let d = -1;
      if (c)
        for (; ++d < c.length; ) {
          const p = c[d];
          if (!p.previous || p.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function c0(e) {
  return t;
  function t(n, r) {
    let i = -1,
      o;
    for (; ++i <= n.length; )
      o === void 0
        ? n[i] && n[i][1].type === "data" && ((o = i), i++)
        : (!n[i] || n[i][1].type !== "data") &&
          (i !== o + 2 &&
            ((n[o][1].end = n[i - 1][1].end),
            n.splice(o + 2, i - o - 2),
            (i = o + 2)),
          (o = void 0));
    return e ? e(n, r) : n;
  }
}
function mS(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let o = i.length,
        l = -1,
        a = 0,
        s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; ) a++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2) (s = !0), a++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (a) {
        const u = {
          type:
            n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + o,
            _bufferIndex: o ? l : r.start._bufferIndex + l,
          },
          end: Object.assign({}, r.end),
        };
        (r.end = Object.assign({}, u.start)),
          r.start.offset === r.end.offset
            ? Object.assign(r, u)
            : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), (n += 2));
      }
      n++;
    }
  return e;
}
function gS(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
    { _index: 0, _bufferIndex: -1 }
  );
  const i = {},
    o = [];
  let l = [],
    a = [];
  const s = {
      consume: g,
      enter: w,
      exit: E,
      attempt: _(P),
      check: _(k),
      interrupt: _(k, { interrupt: !0 }),
    },
    u = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: p,
      sliceSerialize: d,
      now: h,
      defineSkip: y,
      write: c,
    };
  let f = t.tokenize.call(u, s);
  return t.resolveAll && o.push(t), u;
  function c(I) {
    return (
      (l = at(l, I)),
      b(),
      l[l.length - 1] !== null
        ? []
        : (z(t, 0), (u.events = Al(o, u.events, u)), u.events)
    );
  }
  function d(I, O) {
    return wS(p(I), O);
  }
  function p(I) {
    return yS(l, I);
  }
  function h() {
    const { line: I, column: O, offset: X, _index: te, _bufferIndex: q } = r;
    return { line: I, column: O, offset: X, _index: te, _bufferIndex: q };
  }
  function y(I) {
    (i[I.line] = I.column), S();
  }
  function b() {
    let I;
    for (; r._index < l.length; ) {
      const O = l[r._index];
      if (typeof O == "string")
        for (
          I = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === I && r._bufferIndex < O.length;

        )
          m(O.charCodeAt(r._bufferIndex));
      else m(O);
    }
  }
  function m(I) {
    f = f(I);
  }
  function g(I) {
    B(I)
      ? (r.line++, (r.column = 1), (r.offset += I === -3 ? 2 : 1), S())
      : I !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === l[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (u.previous = I);
  }
  function w(I, O) {
    const X = O || {};
    return (
      (X.type = I),
      (X.start = h()),
      u.events.push(["enter", X, u]),
      a.push(X),
      X
    );
  }
  function E(I) {
    const O = a.pop();
    return (O.end = h()), u.events.push(["exit", O, u]), O;
  }
  function P(I, O) {
    z(I, O.from);
  }
  function k(I, O) {
    O.restore();
  }
  function _(I, O) {
    return X;
    function X(te, q, se) {
      let he, M, j, v;
      return Array.isArray(te) ? J(te) : "tokenize" in te ? J([te]) : W(te);
      function W(ue) {
        return Et;
        function Et(Gt) {
          const Kn = Gt !== null && ue[Gt],
            Pn = Gt !== null && ue.null,
            Nl = [
              ...(Array.isArray(Kn) ? Kn : Kn ? [Kn] : []),
              ...(Array.isArray(Pn) ? Pn : Pn ? [Pn] : []),
            ];
          return J(Nl)(Gt);
        }
      }
      function J(ue) {
        return (he = ue), (M = 0), ue.length === 0 ? se : x(ue[M]);
      }
      function x(ue) {
        return Et;
        function Et(Gt) {
          return (
            (v = N()),
            (j = ue),
            ue.partial || (u.currentConstruct = ue),
            ue.name && u.parser.constructs.disable.null.includes(ue.name)
              ? mt()
              : ue.tokenize.call(
                  O ? Object.assign(Object.create(u), O) : u,
                  s,
                  Ce,
                  mt
                )(Gt)
          );
        }
      }
      function Ce(ue) {
        return I(j, v), q;
      }
      function mt(ue) {
        return v.restore(), ++M < he.length ? x(he[M]) : se;
      }
    }
  }
  function z(I, O) {
    I.resolveAll && !o.includes(I) && o.push(I),
      I.resolve &&
        tt(u.events, O, u.events.length - O, I.resolve(u.events.slice(O), u)),
      I.resolveTo && (u.events = I.resolveTo(u.events, u));
  }
  function N() {
    const I = h(),
      O = u.previous,
      X = u.currentConstruct,
      te = u.events.length,
      q = Array.from(a);
    return { restore: se, from: te };
    function se() {
      (r = I),
        (u.previous = O),
        (u.currentConstruct = X),
        (u.events.length = te),
        (a = q),
        S();
    }
  }
  function S() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function yS(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    o = t.end._bufferIndex;
  let l;
  if (n === i) l = [e[n].slice(r, o)];
  else {
    if (((l = e.slice(n, i)), r > -1)) {
      const a = l[0];
      typeof a == "string" ? (l[0] = a.slice(r)) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function wS(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let l;
    if (typeof o == "string") l = o;
    else
      switch (o) {
        case -5: {
          l = "\r";
          break;
        }
        case -4: {
          l = `
`;
          break;
        }
        case -3: {
          l = `\r
`;
          break;
        }
        case -2: {
          l = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(o);
      }
    (i = o === -2), r.push(l);
  }
  return r.join("");
}
const vS = {
    42: He,
    43: He,
    45: He,
    48: He,
    49: He,
    50: He,
    51: He,
    52: He,
    53: He,
    54: He,
    55: He,
    56: He,
    57: He,
    62: n0,
  },
  xS = { 91: k2 },
  kS = { [-2]: da, [-1]: da, 32: da },
  SS = {
    35: T2,
    42: Po,
    45: [td, Po],
    60: R2,
    61: td,
    95: Po,
    96: Jf,
    126: Jf,
  },
  bS = { 38: i0, 92: r0 },
  CS = {
    [-5]: pa,
    [-4]: pa,
    [-3]: pa,
    33: K2,
    38: i0,
    42: Rs,
    60: [Zk, F2],
    91: G2,
    92: [E2, r0],
    93: Xu,
    95: Rs,
    96: f2,
  },
  ES = { null: [Rs, dS] },
  PS = { null: [42, 95] },
  TS = { null: [] },
  _S = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: PS,
        contentInitial: xS,
        disable: TS,
        document: vS,
        flow: SS,
        flowInitial: kS,
        insideSpan: ES,
        string: bS,
        text: CS,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function AS(e) {
  const n = e0([_S, ...((e || {}).extensions || [])]),
    r = {
      defined: [],
      lazy: {},
      constructs: n,
      content: i(Wk),
      document: i(Qk),
      flow: i(cS),
      string: i(pS),
      text: i(hS),
    };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return gS(r, o, a);
    }
  }
}
function zS(e) {
  for (; !o0(e); );
  return e;
}
const nd = /[\0\t\n\r]/g;
function RS() {
  let e = 1,
    t = "",
    n = !0,
    r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, f, c, d, p;
    for (
      o =
        t +
        (typeof o == "string"
          ? o.toString()
          : new TextDecoder(l || void 0).decode(o)),
        c = 0,
        t = "",
        n && (o.charCodeAt(0) === 65279 && c++, (n = void 0));
      c < o.length;

    ) {
      if (
        ((nd.lastIndex = c),
        (u = nd.exec(o)),
        (d = u && u.index !== void 0 ? u.index : o.length),
        (p = o.charCodeAt(d)),
        !u)
      ) {
        t = o.slice(c);
        break;
      }
      if (p === 10 && c === d && r) s.push(-3), (r = void 0);
      else
        switch (
          (r && (s.push(-5), (r = void 0)),
          c < d && (s.push(o.slice(c, d)), (e += d - c)),
          p)
        ) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, s.push(-2); e++ < f; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      c = d + 1;
    }
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const LS = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function NS(e) {
  return e.replace(LS, OS);
}
function OS(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1),
      o = i === 120 || i === 88;
    return t0(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Qu(n) || e;
}
const f0 = {}.hasOwnProperty;
function IS(e, t, n) {
  return (
    typeof t != "string" && ((n = t), (t = void 0)),
    MS(n)(zS(AS(n).document().write(RS()(e, t, !0))))
  );
}
function MS(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(ac),
      autolinkProtocol: N,
      autolinkEmail: N,
      atxHeading: o(ic),
      blockQuote: o(Kn),
      characterEscape: N,
      characterReference: N,
      codeFenced: o(Pn),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(Pn, l),
      codeText: o(Nl, l),
      codeTextData: N,
      data: N,
      codeFlowValue: N,
      definition: o(Y0),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(G0),
      hardBreakEscape: o(oc),
      hardBreakTrailing: o(oc),
      htmlFlow: o(lc, l),
      htmlFlowData: N,
      htmlText: o(lc, l),
      htmlTextData: N,
      image: o(Z0),
      label: l,
      link: o(ac),
      listItem: o(J0),
      listItemValue: d,
      listOrdered: o(sc, c),
      listUnordered: o(sc),
      paragraph: o(eg),
      reference: x,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(ic),
      strong: o(tg),
      thematicBreak: o(rg),
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: P,
      autolink: s(),
      autolinkEmail: Gt,
      autolinkProtocol: Et,
      blockQuote: s(),
      characterEscapeValue: S,
      characterReferenceMarkerHexadecimal: mt,
      characterReferenceMarkerNumeric: mt,
      characterReferenceValue: ue,
      codeFenced: s(b),
      codeFencedFence: y,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: h,
      codeFlowValue: S,
      codeIndented: s(m),
      codeText: s(q),
      codeTextData: S,
      data: S,
      definition: s(),
      definitionDestinationString: E,
      definitionLabelString: g,
      definitionTitleString: w,
      emphasis: s(),
      hardBreakEscape: s(O),
      hardBreakTrailing: s(O),
      htmlFlow: s(X),
      htmlFlowData: S,
      htmlText: s(te),
      htmlTextData: S,
      image: s(he),
      label: j,
      labelText: M,
      lineEnding: I,
      link: s(se),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: Ce,
      resourceDestinationString: v,
      resourceTitleString: W,
      resource: J,
      setextHeading: s(z),
      setextHeadingLineSequence: _,
      setextHeadingText: k,
      strong: s(),
      thematicBreak: s(),
    },
  };
  d0(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let D = { type: "root", children: [] };
    const U = {
        stack: [D],
        tokenStack: [],
        config: t,
        enter: a,
        exit: u,
        buffer: l,
        resume: f,
        data: n,
      },
      Y = [];
    let re = -1;
    for (; ++re < T.length; )
      if (T[re][1].type === "listOrdered" || T[re][1].type === "listUnordered")
        if (T[re][0] === "enter") Y.push(re);
        else {
          const gt = Y.pop();
          re = i(T, gt, re);
        }
    for (re = -1; ++re < T.length; ) {
      const gt = t[T[re][0]];
      f0.call(gt, T[re][1].type) &&
        gt[T[re][1].type].call(
          Object.assign({ sliceSerialize: T[re][2].sliceSerialize }, U),
          T[re][1]
        );
    }
    if (U.tokenStack.length > 0) {
      const gt = U.tokenStack[U.tokenStack.length - 1];
      (gt[1] || rd).call(U, void 0, gt[0]);
    }
    for (
      D.position = {
        start: nn(
          T.length > 0 ? T[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: nn(
          T.length > 0
            ? T[T.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        re = -1;
      ++re < t.transforms.length;

    )
      D = t.transforms[re](D) || D;
    return D;
  }
  function i(T, D, U) {
    let Y = D - 1,
      re = -1,
      gt = !1,
      Tn,
      It,
      Ir,
      Mr;
    for (; ++Y <= U; ) {
      const Ye = T[Y];
      switch (Ye[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ye[0] === "enter" ? re++ : re--, (Mr = void 0);
          break;
        }
        case "lineEndingBlank": {
          Ye[0] === "enter" &&
            (Tn && !Mr && !re && !Ir && (Ir = Y), (Mr = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Mr = void 0;
      }
      if (
        (!re && Ye[0] === "enter" && Ye[1].type === "listItemPrefix") ||
        (re === -1 &&
          Ye[0] === "exit" &&
          (Ye[1].type === "listUnordered" || Ye[1].type === "listOrdered"))
      ) {
        if (Tn) {
          let Yn = Y;
          for (It = void 0; Yn--; ) {
            const Mt = T[Yn];
            if (
              Mt[1].type === "lineEnding" ||
              Mt[1].type === "lineEndingBlank"
            ) {
              if (Mt[0] === "exit") continue;
              It && ((T[It][1].type = "lineEndingBlank"), (gt = !0)),
                (Mt[1].type = "lineEnding"),
                (It = Yn);
            } else if (
              !(
                Mt[1].type === "linePrefix" ||
                Mt[1].type === "blockQuotePrefix" ||
                Mt[1].type === "blockQuotePrefixWhitespace" ||
                Mt[1].type === "blockQuoteMarker" ||
                Mt[1].type === "listItemIndent"
              )
            )
              break;
          }
          Ir && (!It || Ir < It) && (Tn._spread = !0),
            (Tn.end = Object.assign({}, It ? T[It][1].start : Ye[1].end)),
            T.splice(It || Y, 0, ["exit", Tn, Ye[2]]),
            Y++,
            U++;
        }
        if (Ye[1].type === "listItemPrefix") {
          const Yn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ye[1].start),
            end: void 0,
          };
          (Tn = Yn),
            T.splice(Y, 0, ["enter", Yn, Ye[2]]),
            Y++,
            U++,
            (Ir = void 0),
            (Mr = !0);
        }
      }
    }
    return (T[D][1]._spread = gt), U;
  }
  function o(T, D) {
    return U;
    function U(Y) {
      a.call(this, T(Y), Y), D && D.call(this, Y);
    }
  }
  function l() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function a(T, D, U) {
    this.stack[this.stack.length - 1].children.push(T),
      this.stack.push(T),
      this.tokenStack.push([D, U]),
      (T.position = { start: nn(D.start), end: void 0 });
  }
  function s(T) {
    return D;
    function D(U) {
      T && T.call(this, U), u.call(this, U);
    }
  }
  function u(T, D) {
    const U = this.stack.pop(),
      Y = this.tokenStack.pop();
    if (Y)
      Y[0].type !== T.type &&
        (D ? D.call(this, T, Y[0]) : (Y[1] || rd).call(this, T, Y[0]));
    else
      throw new Error(
        "Cannot close `" +
          T.type +
          "` (" +
          si({ start: T.start, end: T.end }) +
          "): it’s not open"
      );
    U.position.end = nn(T.end);
  }
  function f() {
    return qu(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(T) {
    if (this.data.expectingFirstListItemValue) {
      const D = this.stack[this.stack.length - 2];
      (D.start = Number.parseInt(this.sliceSerialize(T), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function p() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.lang = T;
  }
  function h() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.meta = T;
  }
  function y() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function b() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    (D.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0);
  }
  function m() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function g(T) {
    const D = this.resume(),
      U = this.stack[this.stack.length - 1];
    (U.label = D), (U.identifier = bt(this.sliceSerialize(T)).toLowerCase());
  }
  function w() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.title = T;
  }
  function E() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.url = T;
  }
  function P(T) {
    const D = this.stack[this.stack.length - 1];
    if (!D.depth) {
      const U = this.sliceSerialize(T).length;
      D.depth = U;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function _(T) {
    const D = this.stack[this.stack.length - 1];
    D.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function z() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function N(T) {
    const U = this.stack[this.stack.length - 1].children;
    let Y = U[U.length - 1];
    (!Y || Y.type !== "text") &&
      ((Y = ng()),
      (Y.position = { start: nn(T.start), end: void 0 }),
      U.push(Y)),
      this.stack.push(Y);
  }
  function S(T) {
    const D = this.stack.pop();
    (D.value += this.sliceSerialize(T)), (D.position.end = nn(T.end));
  }
  function I(T) {
    const D = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const U = D.children[D.children.length - 1];
      (U.position.end = nn(T.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(D.type) &&
      (N.call(this, T), S.call(this, T));
  }
  function O() {
    this.data.atHardBreak = !0;
  }
  function X() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.value = T;
  }
  function te() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.value = T;
  }
  function q() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.value = T;
  }
  function se() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const D = this.data.referenceType || "shortcut";
      (T.type += "Reference"),
        (T.referenceType = D),
        delete T.url,
        delete T.title;
    } else delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function he() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const D = this.data.referenceType || "shortcut";
      (T.type += "Reference"),
        (T.referenceType = D),
        delete T.url,
        delete T.title;
    } else delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function M(T) {
    const D = this.sliceSerialize(T),
      U = this.stack[this.stack.length - 2];
    (U.label = NS(D)), (U.identifier = bt(D).toLowerCase());
  }
  function j() {
    const T = this.stack[this.stack.length - 1],
      D = this.resume(),
      U = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), U.type === "link")) {
      const Y = T.children;
      U.children = Y;
    } else U.alt = D;
  }
  function v() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.url = T;
  }
  function W() {
    const T = this.resume(),
      D = this.stack[this.stack.length - 1];
    D.title = T;
  }
  function J() {
    this.data.inReference = void 0;
  }
  function x() {
    this.data.referenceType = "collapsed";
  }
  function Ce(T) {
    const D = this.resume(),
      U = this.stack[this.stack.length - 1];
    (U.label = D),
      (U.identifier = bt(this.sliceSerialize(T)).toLowerCase()),
      (this.data.referenceType = "full");
  }
  function mt(T) {
    this.data.characterReferenceType = T.type;
  }
  function ue(T) {
    const D = this.sliceSerialize(T),
      U = this.data.characterReferenceType;
    let Y;
    U
      ? ((Y = t0(D, U === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Y = Qu(D));
    const re = this.stack.pop();
    (re.value += Y), (re.position.end = nn(T.end));
  }
  function Et(T) {
    S.call(this, T);
    const D = this.stack[this.stack.length - 1];
    D.url = this.sliceSerialize(T);
  }
  function Gt(T) {
    S.call(this, T);
    const D = this.stack[this.stack.length - 1];
    D.url = "mailto:" + this.sliceSerialize(T);
  }
  function Kn() {
    return { type: "blockquote", children: [] };
  }
  function Pn() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function Nl() {
    return { type: "inlineCode", value: "" };
  }
  function Y0() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function G0() {
    return { type: "emphasis", children: [] };
  }
  function ic() {
    return { type: "heading", depth: 0, children: [] };
  }
  function oc() {
    return { type: "break" };
  }
  function lc() {
    return { type: "html", value: "" };
  }
  function Z0() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function ac() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function sc(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: [],
    };
  }
  function J0(T) {
    return { type: "listItem", spread: T._spread, checked: null, children: [] };
  }
  function eg() {
    return { type: "paragraph", children: [] };
  }
  function tg() {
    return { type: "strong", children: [] };
  }
  function ng() {
    return { type: "text", value: "" };
  }
  function rg() {
    return { type: "thematicBreak" };
  }
}
function nn(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function d0(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? d0(e, r) : DS(e, r);
  }
}
function DS(e, t) {
  let n;
  for (n in t)
    if (f0.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function rd(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          si({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          si({ start: t.start, end: t.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          si({ start: t.start, end: t.end }) +
          ") is still open"
      );
}
function FS(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return IS(r, {
      ...t.data("settings"),
      ...e,
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || [],
    });
  }
}
function $S(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function jS(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function BS(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }],
  };
  return (
    t.meta && (i.data = { meta: t.meta }),
    e.patch(t, i),
    (i = e.applyData(t, i)),
    (i = { type: "element", tagName: "pre", properties: {}, children: [i] }),
    e.patch(t, i),
    i
  );
}
function US(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function HS(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function VS(e, t) {
  const n =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    r = String(t.identifier).toUpperCase(),
    i = Or(r.toLowerCase()),
    o = e.footnoteOrder.indexOf(r);
  let l,
    a = e.footnoteCounts.get(r);
  a === void 0
    ? ((a = 0), e.footnoteOrder.push(r), (l = e.footnoteOrder.length))
    : (l = o + 1),
    (a += 1),
    e.footnoteCounts.set(r, a);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(l) }],
  };
  e.patch(t, s);
  const u = { type: "element", tagName: "sup", properties: {}, children: [s] };
  return e.patch(t, u), e.applyData(t, u);
}
function WS(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function qS(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function p0(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    (n === "collapsed"
      ? (r += "[]")
      : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t),
    o = i[0];
  o && o.type === "text"
    ? (o.value = "[" + o.value)
    : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return (
    l && l.type === "text"
      ? (l.value += r)
      : i.push({ type: "text", value: r }),
    i
  );
}
function QS(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return p0(e, t);
  const i = { src: Or(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function XS(e, t) {
  const n = { src: Or(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function KS(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = { type: "element", tagName: "code", properties: {}, children: [n] };
  return e.patch(t, r), e.applyData(t, r);
}
function YS(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return p0(e, t);
  const i = { href: Or(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function GS(e, t) {
  const n = { href: Or(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ZS(e, t, n) {
  const r = e.all(t),
    i = n ? JS(n) : h0(t),
    o = {},
    l = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p"
      ? (c = f)
      : ((c = { type: "element", tagName: "p", properties: {}, children: [] }),
        r.unshift(c)),
      c.children.length > 0 && c.children.unshift({ type: "text", value: " " }),
      c.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: t.checked, disabled: !0 },
        children: [],
      }),
      (o.className = ["task-list-item"]);
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const f = r[a];
    (i || a !== 0 || f.type !== "element" || f.tagName !== "p") &&
      l.push({
        type: "text",
        value: `
`,
      }),
      f.type === "element" && f.tagName === "p" && !i
        ? l.push(...f.children)
        : l.push(f);
  }
  const s = r[r.length - 1];
  s &&
    (i || s.type !== "element" || s.tagName !== "p") &&
    l.push({
      type: "text",
      value: `
`,
    });
  const u = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(t, u), e.applyData(t, u);
}
function JS(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; ) t = h0(n[r]);
  }
  return t;
}
function h0(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function eb(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++i < r.length;

  ) {
    const l = r[i];
    if (
      l.type === "element" &&
      l.tagName === "li" &&
      l.properties &&
      Array.isArray(l.properties.className) &&
      l.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function tb(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function nb(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function rb(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ib(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, !0),
      },
      a = Uu(t.children[1]),
      s = Qm(t.children[t.children.length - 1]);
    a && s && (l.position = { start: a, end: s }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0),
  };
  return e.patch(t, o), e.applyData(t, o);
}
function ob(e, t, n) {
  const r = n ? n.children : void 0,
    o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
    l = n && n.type === "table" ? n.align : void 0,
    a = l ? l.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const c = t.children[s],
      d = {},
      p = l ? l[s] : void 0;
    p && (d.align = p);
    let h = { type: "element", tagName: o, properties: d, children: [] };
    c && ((h.children = e.all(c)), e.patch(c, h), (h = e.applyData(c, h))),
      u.push(h);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0),
  };
  return e.patch(t, f), e.applyData(t, f);
}
function lb(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
const id = 9,
  od = 32;
function ab(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const o = [];
  for (; r; )
    o.push(ld(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t));
  return o.push(ld(t.slice(i), i > 0, !1)), o.join("");
}
function ld(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === id || o === od; ) r++, (o = e.codePointAt(r));
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === id || o === od; ) i--, (o = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : "";
}
function sb(e, t) {
  const n = { type: "text", value: ab(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function ub(e, t) {
  const n = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
const cb = {
  blockquote: $S,
  break: jS,
  code: BS,
  delete: US,
  emphasis: HS,
  footnoteReference: VS,
  heading: WS,
  html: qS,
  imageReference: QS,
  image: XS,
  inlineCode: KS,
  linkReference: YS,
  link: GS,
  listItem: ZS,
  list: eb,
  paragraph: tb,
  root: nb,
  strong: rb,
  table: ib,
  tableCell: lb,
  tableRow: ob,
  text: sb,
  thematicBreak: ub,
  toml: lo,
  yaml: lo,
  definition: lo,
  footnoteDefinition: lo,
};
function lo() {}
const m0 = -1,
  zl = 0,
  nl = 1,
  rl = 2,
  Ku = 3,
  Yu = 4,
  Gu = 5,
  Zu = 6,
  g0 = 7,
  y0 = 8,
  ad = typeof self == "object" ? self : globalThis,
  fb = (e, t) => {
    const n = (i, o) => (e.set(o, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [o, l] = t[i];
        switch (o) {
          case zl:
          case m0:
            return n(l, i);
          case nl: {
            const a = n([], i);
            for (const s of l) a.push(r(s));
            return a;
          }
          case rl: {
            const a = n({}, i);
            for (const [s, u] of l) a[r(s)] = r(u);
            return a;
          }
          case Ku:
            return n(new Date(l), i);
          case Yu: {
            const { source: a, flags: s } = l;
            return n(new RegExp(a, s), i);
          }
          case Gu: {
            const a = n(new Map(), i);
            for (const [s, u] of l) a.set(r(s), r(u));
            return a;
          }
          case Zu: {
            const a = n(new Set(), i);
            for (const s of l) a.add(r(s));
            return a;
          }
          case g0: {
            const { name: a, message: s } = l;
            return n(new ad[a](s), i);
          }
          case y0:
            return n(BigInt(l), i);
          case "BigInt":
            return n(Object(BigInt(l)), i);
        }
        return n(new ad[o](l), i);
      };
    return r;
  },
  sd = (e) => fb(new Map(), e)(0),
  Zn = "",
  { toString: db } = {},
  { keys: pb } = Object,
  Xr = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [zl, t];
    const n = db.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [nl, Zn];
      case "Object":
        return [rl, Zn];
      case "Date":
        return [Ku, Zn];
      case "RegExp":
        return [Yu, Zn];
      case "Map":
        return [Gu, Zn];
      case "Set":
        return [Zu, Zn];
    }
    return n.includes("Array")
      ? [nl, n]
      : n.includes("Error")
      ? [g0, n]
      : [rl, n];
  },
  ao = ([e, t]) => e === zl && (t === "function" || t === "symbol"),
  hb = (e, t, n, r) => {
    const i = (l, a) => {
        const s = r.push(l) - 1;
        return n.set(a, s), s;
      },
      o = (l) => {
        if (n.has(l)) return n.get(l);
        let [a, s] = Xr(l);
        switch (a) {
          case zl: {
            let f = l;
            switch (s) {
              case "bigint":
                (a = y0), (f = l.toString());
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + s);
                f = null;
                break;
              case "undefined":
                return i([m0], l);
            }
            return i([a, f], l);
          }
          case nl: {
            if (s) return i([s, [...l]], l);
            const f = [],
              c = i([a, f], l);
            for (const d of l) f.push(o(d));
            return c;
          }
          case rl: {
            if (s)
              switch (s) {
                case "BigInt":
                  return i([s, l.toString()], l);
                case "Boolean":
                case "Number":
                case "String":
                  return i([s, l.valueOf()], l);
              }
            if (t && "toJSON" in l) return o(l.toJSON());
            const f = [],
              c = i([a, f], l);
            for (const d of pb(l))
              (e || !ao(Xr(l[d]))) && f.push([o(d), o(l[d])]);
            return c;
          }
          case Ku:
            return i([a, l.toISOString()], l);
          case Yu: {
            const { source: f, flags: c } = l;
            return i([a, { source: f, flags: c }], l);
          }
          case Gu: {
            const f = [],
              c = i([a, f], l);
            for (const [d, p] of l)
              (e || !(ao(Xr(d)) || ao(Xr(p)))) && f.push([o(d), o(p)]);
            return c;
          }
          case Zu: {
            const f = [],
              c = i([a, f], l);
            for (const d of l) (e || !ao(Xr(d))) && f.push(o(d));
            return c;
          }
        }
        const { message: u } = l;
        return i([a, { name: s, message: u }], l);
      };
    return o;
  },
  ud = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return hb(!(t || n), !!t, new Map(), r)(e), r;
  },
  il =
    typeof structuredClone == "function"
      ? (e, t) =>
          t && ("json" in t || "lossy" in t) ? sd(ud(e, t)) : structuredClone(e)
      : (e, t) => sd(ud(e, t));
function mb(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return (
    t > 1 &&
      n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(t) }],
      }),
    n
  );
}
function gb(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function yb(e) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    n = e.options.footnoteBackContent || mb,
    r = e.options.footnoteBackLabel || gb,
    i = e.options.footnoteLabel || "Footnotes",
    o = e.options.footnoteLabelTagName || "h2",
    l = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(e.footnoteOrder[s]);
    if (!u) continue;
    const f = e.all(u),
      c = String(u.identifier).toUpperCase(),
      d = Or(c.toLowerCase());
    let p = 0;
    const h = [],
      y = e.footnoteCounts.get(c);
    for (; y !== void 0 && ++p <= y; ) {
      h.length > 0 && h.push({ type: "text", value: " " });
      let g = typeof n == "string" ? n : n(s, p);
      typeof g == "string" && (g = { type: "text", value: g }),
        h.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(s, p),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(g) ? g : [g],
        });
    }
    const b = f[f.length - 1];
    if (b && b.type === "element" && b.tagName === "p") {
      const g = b.children[b.children.length - 1];
      g && g.type === "text"
        ? (g.value += " ")
        : b.children.push({ type: "text", value: " " }),
        b.children.push(...h);
    } else f.push(...h);
    const m = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(f, !0),
    };
    e.patch(u, m), a.push(m);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: { ...il(l), id: "footnote-label" },
          children: [{ type: "text", value: i }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const Rl = function (e) {
  if (e == null) return kb;
  if (typeof e == "function") return Ll(e);
  if (typeof e == "object") return Array.isArray(e) ? wb(e) : vb(e);
  if (typeof e == "string") return xb(e);
  throw new Error("Expected function, string, or object as test");
};
function wb(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; ) t[n] = Rl(e[n]);
  return Ll(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; ) if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function vb(e) {
  const t = e;
  return Ll(n);
  function n(r) {
    const i = r;
    let o;
    for (o in e) if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function xb(e) {
  return Ll(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ll(e) {
  return t;
  function t(n, r, i) {
    return !!(
      Sb(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0)
    );
  }
}
function kb() {
  return !0;
}
function Sb(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const w0 = [],
  bb = !0,
  Ls = !1,
  Cb = "skip";
function v0(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function"
    ? ((r = n), (n = t))
    : (i = t);
  const o = Rl(i),
    l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, u, f) {
    const c = s && typeof s == "object" ? s : {};
    if (typeof c.type == "string") {
      const p =
        typeof c.tagName == "string"
          ? c.tagName
          : typeof c.name == "string"
          ? c.name
          : void 0;
      Object.defineProperty(d, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")",
      });
    }
    return d;
    function d() {
      let p = w0,
        h,
        y,
        b;
      if (
        (!t || o(s, u, f[f.length - 1] || void 0)) &&
        ((p = Eb(n(s, f))), p[0] === Ls)
      )
        return p;
      if ("children" in s && s.children) {
        const m = s;
        if (m.children && p[0] !== Cb)
          for (
            y = (r ? m.children.length : -1) + l, b = f.concat(m);
            y > -1 && y < m.children.length;

          ) {
            const g = m.children[y];
            if (((h = a(g, y, b)()), h[0] === Ls)) return h;
            y = typeof h[1] == "number" ? h[1] : y + l;
          }
      }
      return p;
    }
  }
}
function Eb(e) {
  return Array.isArray(e)
    ? e
    : typeof e == "number"
    ? [bb, e]
    : e == null
    ? w0
    : [e];
}
function Ju(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function"
    ? ((o = void 0), (l = t), (i = n))
    : ((o = t), (l = n), (i = r)),
    v0(e, o, a, i);
  function a(s, u) {
    const f = u[u.length - 1],
      c = f ? f.children.indexOf(s) : void 0;
    return l(s, c, f);
  }
}
const Ns = {}.hasOwnProperty,
  Pb = {};
function Tb(e, t) {
  const n = t || Pb,
    r = new Map(),
    i = new Map(),
    o = new Map(),
    l = { ...cb, ...n.handlers },
    a = {
      all: u,
      applyData: Ab,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: o,
      footnoteOrder: [],
      handlers: l,
      one: s,
      options: n,
      patch: _b,
      wrap: Rb,
    };
  return (
    Ju(e, function (f) {
      if (f.type === "definition" || f.type === "footnoteDefinition") {
        const c = f.type === "definition" ? r : i,
          d = String(f.identifier).toUpperCase();
        c.has(d) || c.set(d, f);
      }
    }),
    a
  );
  function s(f, c) {
    const d = f.type,
      p = a.handlers[d];
    if (Ns.call(a.handlers, d) && p) return p(a, f, c);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in f) {
        const { children: y, ...b } = f,
          m = il(b);
        return (m.children = a.all(f)), m;
      }
      return il(f);
    }
    return (a.options.unknownHandler || zb)(a, f, c);
  }
  function u(f) {
    const c = [];
    if ("children" in f) {
      const d = f.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const h = a.one(d[p], f);
        if (h) {
          if (
            p &&
            d[p - 1].type === "break" &&
            (!Array.isArray(h) && h.type === "text" && (h.value = cd(h.value)),
            !Array.isArray(h) && h.type === "element")
          ) {
            const y = h.children[0];
            y && y.type === "text" && (y.value = cd(y.value));
          }
          Array.isArray(h) ? c.push(...h) : c.push(h);
        }
      }
    }
    return c;
  }
}
function _b(e, t) {
  e.position && (t.position = mk(e));
}
function Ab(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element") n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && o && Object.assign(n.properties, il(o)),
      "children" in n &&
        n.children &&
        i !== null &&
        i !== void 0 &&
        (n.children = i);
  }
  return n;
}
function zb(e, t) {
  const n = t.data || {},
    r =
      "value" in t && !(Ns.call(n, "hProperties") || Ns.call(n, "hChildren"))
        ? { type: "text", value: t.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t),
          };
  return e.patch(t, r), e.applyData(t, r);
}
function Rb(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      n.push({
        type: "text",
        value: `
`,
      }),
      n.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: "text",
        value: `
`,
      }),
    n
  );
}
function cd(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) t++, (n = e.charCodeAt(t));
  return e.slice(t);
}
function fd(e, t) {
  const n = Tb(e, t),
    r = n.one(e, void 0),
    i = yb(n),
    o = Array.isArray(r)
      ? { type: "root", children: r }
      : r || { type: "root", children: [] };
  return (
    i &&
      o.children.push(
        {
          type: "text",
          value: `
`,
        },
        i
      ),
    o
  );
}
function Lb(e, t) {
  return e && "run" in e
    ? async function (n, r) {
        const i = fd(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return fd(n, { file: r, ...(t || e) });
      };
}
function dd(e) {
  if (e) throw e;
}
var To = Object.prototype.hasOwnProperty,
  x0 = Object.prototype.toString,
  pd = Object.defineProperty,
  hd = Object.getOwnPropertyDescriptor,
  md = function (t) {
    return typeof Array.isArray == "function"
      ? Array.isArray(t)
      : x0.call(t) === "[object Array]";
  },
  gd = function (t) {
    if (!t || x0.call(t) !== "[object Object]") return !1;
    var n = To.call(t, "constructor"),
      r =
        t.constructor &&
        t.constructor.prototype &&
        To.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !n && !r) return !1;
    var i;
    for (i in t);
    return typeof i > "u" || To.call(t, i);
  },
  yd = function (t, n) {
    pd && n.name === "__proto__"
      ? pd(t, n.name, {
          enumerable: !0,
          configurable: !0,
          value: n.newValue,
          writable: !0,
        })
      : (t[n.name] = n.newValue);
  },
  wd = function (t, n) {
    if (n === "__proto__")
      if (To.call(t, n)) {
        if (hd) return hd(t, n).value;
      } else return;
    return t[n];
  },
  Nb = function e() {
    var t,
      n,
      r,
      i,
      o,
      l,
      a = arguments[0],
      s = 1,
      u = arguments.length,
      f = !1;
    for (
      typeof a == "boolean" && ((f = a), (a = arguments[1] || {}), (s = 2)),
        (a == null || (typeof a != "object" && typeof a != "function")) &&
          (a = {});
      s < u;
      ++s
    )
      if (((t = arguments[s]), t != null))
        for (n in t)
          (r = wd(a, n)),
            (i = wd(t, n)),
            a !== i &&
              (f && i && (gd(i) || (o = md(i)))
                ? (o
                    ? ((o = !1), (l = r && md(r) ? r : []))
                    : (l = r && gd(r) ? r : {}),
                  yd(a, { name: n, newValue: e(f, l, i) }))
                : typeof i < "u" && yd(a, { name: n, newValue: i }));
    return a;
  };
const ha = Rd(Nb);
function Os(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Ob() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(s, ...u) {
      const f = e[++o];
      let c = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      (i = u), f ? Ib(f, a)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    return e.push(i), t;
  }
}
function Ib(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let s;
    a && l.push(i);
    try {
      s = e.apply(this, l);
    } catch (u) {
      const f = u;
      if (a && n) throw f;
      return i(f);
    }
    a ||
      (s && s.then && typeof s.then == "function"
        ? s.then(o, i)
        : s instanceof Error
        ? i(s)
        : o(s));
  }
  function i(l, ...a) {
    n || ((n = !0), t(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const _t = { basename: Mb, dirname: Db, extname: Fb, join: $b, sep: "/" };
function Mb(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ji(e);
  let n = 0,
    r = -1,
    i = e.length,
    o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((o = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e) return "";
  let l = -1,
    a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && ((o = !0), (l = i + 1)),
        a > -1 &&
          (e.codePointAt(i) === t.codePointAt(a--)
            ? a < 0 && (r = i)
            : ((a = -1), (r = l)));
  return n === r ? (r = l) : r < 0 && (r = e.length), e.slice(n, r);
}
function Db(e) {
  if ((ji(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.codePointAt(0) === 47
    ? "//"
    : e.slice(0, t);
}
function Fb(e) {
  ji(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    o = 0,
    l;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && ((l = !0), (n = t + 1)),
      a === 46 ? (i < 0 ? (i = t) : o !== 1 && (o = 1)) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || o === 0 || (o === 1 && i === n - 1 && i === r + 1)
    ? ""
    : e.slice(i, n);
}
function $b(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    ji(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : jb(n);
}
function jb(e) {
  ji(e);
  const t = e.codePointAt(0) === 47;
  let n = Bb(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function Bb(e, t) {
  let n = "",
    r = 0,
    i = -1,
    o = 0,
    l = -1,
    a,
    s;
  for (; ++l <= e.length; ) {
    if (l < e.length) a = e.codePointAt(l);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || o === 1))
        if (i !== l - 1 && o === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((s = n.lastIndexOf("/")), s !== n.length - 1)) {
                s < 0
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, s)),
                    (r = n.length - 1 - n.lastIndexOf("/"))),
                  (i = l),
                  (o = 0);
                continue;
              }
            } else if (n.length > 0) {
              (n = ""), (r = 0), (i = l), (o = 0);
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
        } else
          n.length > 0
            ? (n += "/" + e.slice(i + 1, l))
            : (n = e.slice(i + 1, l)),
            (r = l - i - 1);
      (i = l), (o = 0);
    } else a === 46 && o > -1 ? o++ : (o = -1);
  }
  return n;
}
function ji(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Ub = { cwd: Hb };
function Hb() {
  return "/";
}
function Is(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Vb(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!Is(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return Wb(e);
}
function Wb(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(t);
}
const ma = ["history", "path", "basename", "stem", "extname", "dirname"];
class k0 {
  constructor(t) {
    let n;
    t
      ? Is(t)
        ? (n = { path: t })
        : typeof t == "string" || qb(t)
        ? (n = { value: t })
        : (n = t)
      : (n = {}),
      (this.cwd = Ub.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let r = -1;
    for (; ++r < ma.length; ) {
      const o = ma[r];
      o in n &&
        n[o] !== void 0 &&
        n[o] !== null &&
        (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n) ma.includes(i) || (this[i] = n[i]);
  }
  get basename() {
    return typeof this.path == "string" ? _t.basename(this.path) : void 0;
  }
  set basename(t) {
    ya(t, "basename"),
      ga(t, "basename"),
      (this.path = _t.join(this.dirname || "", t));
  }
  get dirname() {
    return typeof this.path == "string" ? _t.dirname(this.path) : void 0;
  }
  set dirname(t) {
    vd(this.basename, "dirname"), (this.path = _t.join(t || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? _t.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((ga(t, "extname"), vd(this.dirname, "extname"), t)) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = _t.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    Is(t) && (t = Vb(t)),
      ya(t, "path"),
      this.path !== t && this.history.push(t);
  }
  get stem() {
    return typeof this.path == "string"
      ? _t.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    ya(t, "stem"),
      ga(t, "stem"),
      (this.path = _t.join(this.dirname || "", t + (this.extname || "")));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return (i.fatal = void 0), i;
  }
  message(t, n, r) {
    const i = new De(t, n, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(t) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
      ? this.value
      : new TextDecoder(t || void 0).decode(this.value);
  }
}
function ga(e, t) {
  if (e && e.includes(_t.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + _t.sep + "`"
    );
}
function ya(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function vd(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function qb(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const Qb = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      o = function () {
        return i.apply(o, arguments);
      };
    Object.setPrototypeOf(o, r);
    const l = Object.getOwnPropertyNames(i);
    for (const a of l) {
      const s = Object.getOwnPropertyDescriptor(i, a);
      s && Object.defineProperty(o, a, s);
    }
    return o;
  },
  Xb = {}.hasOwnProperty;
class ec extends Qb {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = Ob());
  }
  copy() {
    const t = new ec();
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(ha(!0, {}, this.namespace)), t;
  }
  data(t, n) {
    return typeof t == "string"
      ? arguments.length === 2
        ? (xa("data", this.frozen), (this.namespace[t] = n), this)
        : (Xb.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
      ? (xa("data", this.frozen), (this.namespace = t), this)
      : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(t) {
    this.freeze();
    const n = so(t),
      r = this.parser || this.Parser;
    return wa("parse", r), r(String(n), n);
  }
  process(t, n) {
    const r = this;
    return (
      this.freeze(),
      wa("process", this.parser || this.Parser),
      va("process", this.compiler || this.Compiler),
      n ? i(void 0, n) : new Promise(i)
    );
    function i(o, l) {
      const a = so(t),
        s = r.parse(a);
      r.run(s, a, function (f, c, d) {
        if (f || !c || !d) return u(f);
        const p = c,
          h = r.stringify(p, d);
        Gb(h) ? (d.value = h) : (d.result = h), u(f, d);
      });
      function u(f, c) {
        f || !c ? l(f) : o ? o(c) : n(void 0, c);
      }
    }
  }
  processSync(t) {
    let n = !1,
      r;
    return (
      this.freeze(),
      wa("processSync", this.parser || this.Parser),
      va("processSync", this.compiler || this.Compiler),
      this.process(t, i),
      kd("processSync", "process", n),
      r
    );
    function i(o, l) {
      (n = !0), dd(o), (r = l);
    }
  }
  run(t, n, r) {
    xd(t), this.freeze();
    const i = this.transformers;
    return (
      !r && typeof n == "function" && ((r = n), (n = void 0)),
      r ? o(void 0, r) : new Promise(o)
    );
    function o(l, a) {
      const s = so(n);
      i.run(t, s, u);
      function u(f, c, d) {
        const p = c || t;
        f ? a(f) : l ? l(p) : r(void 0, p, d);
      }
    }
  }
  runSync(t, n) {
    let r = !1,
      i;
    return this.run(t, n, o), kd("runSync", "run", r), i;
    function o(l, a) {
      dd(l), (i = a), (r = !0);
    }
  }
  stringify(t, n) {
    this.freeze();
    const r = so(n),
      i = this.compiler || this.Compiler;
    return va("stringify", i), xd(t), i(t, r);
  }
  use(t, ...n) {
    const r = this.attachers,
      i = this.namespace;
    if ((xa("use", this.frozen), t != null))
      if (typeof t == "function") s(t, n);
      else if (typeof t == "object") Array.isArray(t) ? a(t) : l(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(u) {
      if (typeof u == "function") s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [f, ...c] = u;
          s(f, c);
        } else l(u);
      else throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function l(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(u.plugins), u.settings && (i.settings = ha(!0, i.settings, u.settings));
    }
    function a(u) {
      let f = -1;
      if (u != null)
        if (Array.isArray(u))
          for (; ++f < u.length; ) {
            const c = u[f];
            o(c);
          }
        else throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, f) {
      let c = -1,
        d = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          d = c;
          break;
        }
      if (d === -1) r.push([u, ...f]);
      else if (f.length > 0) {
        let [p, ...h] = f;
        const y = r[d][1];
        Os(y) && Os(p) && (p = ha(!0, y, p)), (r[d] = [u, p, ...h]);
      }
    }
  }
}
const Kb = new ec().freeze();
function wa(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function va(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function xa(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function xd(e) {
  if (!Os(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function kd(e, t, n) {
  if (!n)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function so(e) {
  return Yb(e) ? e : new k0(e);
}
function Yb(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Gb(e) {
  return typeof e == "string" || Zb(e);
}
function Zb(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const Jb = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  Sd = [],
  bd = { allowDangerousHtml: !0 },
  e3 = /^(https?|ircs?|mailto|xmpp)$/i,
  t3 = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function n3(e) {
  const t = e.allowedElements,
    n = e.allowElement,
    r = e.children || "",
    i = e.className,
    o = e.components,
    l = e.disallowedElements,
    a = e.rehypePlugins || Sd,
    s = e.remarkPlugins || Sd,
    u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...bd } : bd,
    f = e.skipHtml,
    c = e.unwrapDisallowed,
    d = e.urlTransform || r3,
    p = Kb().use(FS).use(s).use(Lb, u).use(a),
    h = new k0();
  typeof r == "string" && (h.value = r);
  for (const g of t3)
    Object.hasOwn(e, g.from) &&
      ("" +
        g.from +
        (g.to ? "use `" + g.to + "` instead" : "remove it") +
        Jb +
        g.id,
      void 0);
  const y = p.parse(h);
  let b = p.runSync(y, h);
  return (
    i &&
      (b = {
        type: "element",
        tagName: "div",
        properties: { className: i },
        children: b.type === "root" ? b.children : [b],
      }),
    Ju(b, m),
    kk(b, {
      Fragment: $.Fragment,
      components: o,
      ignoreInvalidStyle: !0,
      jsx: $.jsx,
      jsxs: $.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(g, w, E) {
    if (g.type === "raw" && E && typeof w == "number")
      return (
        f
          ? E.children.splice(w, 1)
          : (E.children[w] = { type: "text", value: g.value }),
        w
      );
    if (g.type === "element") {
      let P;
      for (P in fa)
        if (Object.hasOwn(fa, P) && Object.hasOwn(g.properties, P)) {
          const k = g.properties[P],
            _ = fa[P];
          (_ === null || _.includes(g.tagName)) &&
            (g.properties[P] = d(String(k || ""), P, g));
        }
    }
    if (g.type === "element") {
      let P = t ? !t.includes(g.tagName) : l ? l.includes(g.tagName) : !1;
      if (
        (!P && n && typeof w == "number" && (P = !n(g, w, E)),
        P && E && typeof w == "number")
      )
        return (
          c && g.children
            ? E.children.splice(w, 1, ...g.children)
            : E.children.splice(w, 1),
          w
        );
    }
  }
}
function r3(e) {
  const t = e.indexOf(":"),
    n = e.indexOf("?"),
    r = e.indexOf("#"),
    i = e.indexOf("/");
  return t < 0 ||
    (i > -1 && t > i) ||
    (n > -1 && t > n) ||
    (r > -1 && t > r) ||
    e3.test(e.slice(0, t))
    ? e
    : "";
}
function Cd(e, t) {
  const n = String(e);
  if (typeof t != "string") throw new TypeError("Expected character");
  let r = 0,
    i = n.indexOf(t);
  for (; i !== -1; ) r++, (i = n.indexOf(t, i + t.length));
  return r;
}
function i3(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function o3(e, t, n) {
  const i = Rl((n || {}).ignore || []),
    o = l3(t);
  let l = -1;
  for (; ++l < o.length; ) v0(e, "text", a);
  function a(u, f) {
    let c = -1,
      d;
    for (; ++c < f.length; ) {
      const p = f[c],
        h = d ? d.children : void 0;
      if (i(p, h ? h.indexOf(p) : void 0, d)) return;
      d = p;
    }
    if (d) return s(u, f);
  }
  function s(u, f) {
    const c = f[f.length - 1],
      d = o[l][0],
      p = o[l][1];
    let h = 0;
    const b = c.children.indexOf(u);
    let m = !1,
      g = [];
    d.lastIndex = 0;
    let w = d.exec(u.value);
    for (; w; ) {
      const E = w.index,
        P = { index: w.index, input: w.input, stack: [...f, u] };
      let k = p(...w, P);
      if (
        (typeof k == "string" &&
          (k = k.length > 0 ? { type: "text", value: k } : void 0),
        k === !1
          ? (d.lastIndex = E + 1)
          : (h !== E && g.push({ type: "text", value: u.value.slice(h, E) }),
            Array.isArray(k) ? g.push(...k) : k && g.push(k),
            (h = E + w[0].length),
            (m = !0)),
        !d.global)
      )
        break;
      w = d.exec(u.value);
    }
    return (
      m
        ? (h < u.value.length &&
            g.push({ type: "text", value: u.value.slice(h) }),
          c.children.splice(b, 1, ...g))
        : (g = [u]),
      b + g.length
    );
  }
}
function l3(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([a3(i[0]), s3(i[1])]);
  }
  return t;
}
function a3(e) {
  return typeof e == "string" ? new RegExp(i3(e), "g") : e;
}
function s3(e) {
  return typeof e == "function"
    ? e
    : function () {
        return e;
      };
}
const ka = "phrasing",
  Sa = ["autolink", "link", "image", "label"];
function u3() {
  return {
    transforms: [g3],
    enter: {
      literalAutolink: f3,
      literalAutolinkEmail: ba,
      literalAutolinkHttp: ba,
      literalAutolinkWww: ba,
    },
    exit: {
      literalAutolink: m3,
      literalAutolinkEmail: h3,
      literalAutolinkHttp: d3,
      literalAutolinkWww: p3,
    },
  };
}
function c3() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: ka,
        notInConstruct: Sa,
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: ka,
        notInConstruct: Sa,
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: ka,
        notInConstruct: Sa,
      },
    ],
  };
}
function f3(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function ba(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function d3(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function p3(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, (t.url = "http://" + this.sliceSerialize(e));
}
function h3(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function m3(e) {
  this.exit(e);
}
function g3(e) {
  o3(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, y3],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, w3],
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function y3(e, t, n, r, i) {
  let o = "";
  if (
    !S0(i) ||
    (/^w/i.test(t) && ((n = t + n), (t = ""), (o = "http://")), !v3(n))
  )
    return !1;
  const l = x3(n + r);
  if (!l[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + t + l[0],
    children: [{ type: "text", value: t + l[0] }],
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function w3(e, t, n, r) {
  return !S0(r, !0) || /[-\d_]$/.test(n)
    ? !1
    : {
        type: "link",
        title: null,
        url: "mailto:" + t + "@" + n,
        children: [{ type: "text", value: t + "@" + n }],
      };
}
function v3(e) {
  const t = e.split(".");
  return !(
    t.length < 2 ||
    (t[t.length - 1] &&
      (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
    (t[t.length - 2] &&
      (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
  );
}
function x3(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t) return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0],
    r = n.indexOf(")");
  const i = Cd(e, "(");
  let o = Cd(e, ")");
  for (; r !== -1 && i > o; )
    (e += n.slice(0, r + 1)), (n = n.slice(r + 1)), (r = n.indexOf(")")), o++;
  return [e, n];
}
function S0(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Vn(n) || _l(n)) && (!t || n !== 47);
}
b0.peek = R3;
function k3() {
  return {
    enter: {
      gfmFootnoteDefinition: b3,
      gfmFootnoteDefinitionLabelString: C3,
      gfmFootnoteCall: T3,
      gfmFootnoteCallString: _3,
    },
    exit: {
      gfmFootnoteDefinition: P3,
      gfmFootnoteDefinitionLabelString: E3,
      gfmFootnoteCall: z3,
      gfmFootnoteCallString: A3,
    },
  };
}
function S3() {
  return {
    unsafe: [
      { character: "[", inConstruct: ["phrasing", "label", "reference"] },
    ],
    handlers: { footnoteDefinition: L3, footnoteReference: b0 },
  };
}
function b3(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function C3() {
  this.buffer();
}
function E3(e) {
  const t = this.resume(),
    n = this.stack[this.stack.length - 1];
  n.type,
    (n.label = t),
    (n.identifier = bt(this.sliceSerialize(e)).toLowerCase());
}
function P3(e) {
  this.exit(e);
}
function T3(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function _3() {
  this.buffer();
}
function A3(e) {
  const t = this.resume(),
    n = this.stack[this.stack.length - 1];
  n.type,
    (n.label = t),
    (n.identifier = bt(this.sliceSerialize(e)).toLowerCase());
}
function z3(e) {
  this.exit(e);
}
function b0(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteReference"),
    a = n.enter("reference");
  return (
    (o += i.move(
      n.safe(n.associationId(e), { ...i.current(), before: o, after: "]" })
    )),
    a(),
    l(),
    (o += i.move("]")),
    o
  );
}
function R3() {
  return "[";
}
function L3(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteDefinition"),
    a = n.enter("label");
  return (
    (o += i.move(
      n.safe(n.associationId(e), { ...i.current(), before: o, after: "]" })
    )),
    a(),
    (o += i.move("]:" + (e.children && e.children.length > 0 ? " " : ""))),
    i.shift(4),
    (o += i.move(n.indentLines(n.containerFlow(e, i.current()), N3))),
    l(),
    o
  );
}
function N3(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
const O3 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe",
];
C0.peek = $3;
function I3() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: D3 },
    exit: { strikethrough: F3 },
  };
}
function M3() {
  return {
    unsafe: [{ character: "~", inConstruct: "phrasing", notInConstruct: O3 }],
    handlers: { delete: C0 },
  };
}
function D3(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function F3(e) {
  this.exit(e);
}
function C0(e, t, n, r) {
  const i = n.createTracker(r),
    o = n.enter("strikethrough");
  let l = i.move("~~");
  return (
    (l += n.containerPhrasing(e, { ...i.current(), before: l, after: "~" })),
    (l += i.move("~~")),
    o(),
    l
  );
}
function $3() {
  return "~";
}
function j3(e, t = {}) {
  const n = (t.align || []).concat(),
    r = t.stringLength || U3,
    i = [],
    o = [],
    l = [],
    a = [];
  let s = 0,
    u = -1;
  for (; ++u < e.length; ) {
    const h = [],
      y = [];
    let b = -1;
    for (e[u].length > s && (s = e[u].length); ++b < e[u].length; ) {
      const m = B3(e[u][b]);
      if (t.alignDelimiters !== !1) {
        const g = r(m);
        (y[b] = g), (a[b] === void 0 || g > a[b]) && (a[b] = g);
      }
      h.push(m);
    }
    (o[u] = h), (l[u] = y);
  }
  let f = -1;
  if (typeof n == "object" && "length" in n) for (; ++f < s; ) i[f] = Ed(n[f]);
  else {
    const h = Ed(n);
    for (; ++f < s; ) i[f] = h;
  }
  f = -1;
  const c = [],
    d = [];
  for (; ++f < s; ) {
    const h = i[f];
    let y = "",
      b = "";
    h === 99
      ? ((y = ":"), (b = ":"))
      : h === 108
      ? (y = ":")
      : h === 114 && (b = ":");
    let m =
      t.alignDelimiters === !1 ? 1 : Math.max(1, a[f] - y.length - b.length);
    const g = y + "-".repeat(m) + b;
    t.alignDelimiters !== !1 &&
      ((m = y.length + m + b.length), m > a[f] && (a[f] = m), (d[f] = m)),
      (c[f] = g);
  }
  o.splice(1, 0, c), l.splice(1, 0, d), (u = -1);
  const p = [];
  for (; ++u < o.length; ) {
    const h = o[u],
      y = l[u];
    f = -1;
    const b = [];
    for (; ++f < s; ) {
      const m = h[f] || "";
      let g = "",
        w = "";
      if (t.alignDelimiters !== !1) {
        const E = a[f] - (y[f] || 0),
          P = i[f];
        P === 114
          ? (g = " ".repeat(E))
          : P === 99
          ? E % 2
            ? ((g = " ".repeat(E / 2 + 0.5)), (w = " ".repeat(E / 2 - 0.5)))
            : ((g = " ".repeat(E / 2)), (w = g))
          : (w = " ".repeat(E));
      }
      t.delimiterStart !== !1 && !f && b.push("|"),
        t.padding !== !1 &&
          !(t.alignDelimiters === !1 && m === "") &&
          (t.delimiterStart !== !1 || f) &&
          b.push(" "),
        t.alignDelimiters !== !1 && b.push(g),
        b.push(m),
        t.alignDelimiters !== !1 && b.push(w),
        t.padding !== !1 && b.push(" "),
        (t.delimiterEnd !== !1 || f !== s - 1) && b.push("|");
    }
    p.push(t.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join(""));
  }
  return p.join(`
`);
}
function B3(e) {
  return e == null ? "" : String(e);
}
function U3(e) {
  return e.length;
}
function Ed(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99
    ? 99
    : t === 76 || t === 108
    ? 108
    : t === 82 || t === 114
    ? 114
    : 0;
}
function H3(e, t, n, r) {
  const i = n.enter("blockquote"),
    o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(n.containerFlow(e, o.current()), V3);
  return i(), l;
}
function V3(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function W3(e, t) {
  return Pd(e, t.inConstruct, !0) && !Pd(e, t.notInConstruct, !1);
}
function Pd(e, t, n) {
  if ((typeof t == "string" && (t = [t]), !t || t.length === 0)) return n;
  let r = -1;
  for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
  return !1;
}
function Td(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (
      n.unsafe[i].character ===
        `
` &&
      W3(n.stack, n.unsafe[i])
    )
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function q3(e, t) {
  const n = String(e);
  let r = n.indexOf(t),
    i = r,
    o = 0,
    l = 0;
  if (typeof t != "string") throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : (o = 1),
      (i = r + t.length),
      (r = n.indexOf(t, i));
  return l;
}
function Q3(e, t) {
  return !!(
    t.options.fences === !1 &&
    e.value &&
    !e.lang &&
    /[^ \r\n]/.test(e.value) &&
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
  );
}
function X3(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" +
        t +
        "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function K3(e, t, n, r) {
  const i = X3(n),
    o = e.value || "",
    l = i === "`" ? "GraveAccent" : "Tilde";
  if (Q3(e, n)) {
    const c = n.enter("codeIndented"),
      d = n.indentLines(o, Y3);
    return c(), d;
  }
  const a = n.createTracker(r),
    s = i.repeat(Math.max(q3(o, i) + 1, 3)),
    u = n.enter("codeFenced");
  let f = a.move(s);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${l}`);
    (f += a.move(
      n.safe(e.lang, { before: f, after: " ", encode: ["`"], ...a.current() })
    )),
      c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${l}`);
    (f += a.move(" ")),
      (f += a.move(
        n.safe(e.meta, {
          before: f,
          after: `
`,
          encode: ["`"],
          ...a.current(),
        })
      )),
      c();
  }
  return (
    (f += a.move(`
`)),
    o &&
      (f += a.move(
        o +
          `
`
      )),
    (f += a.move(s)),
    u(),
    f
  );
}
function Y3(e, t, n) {
  return (n ? "" : "    ") + e;
}
function tc(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" +
        t +
        "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function G3(e, t, n, r) {
  const i = tc(n),
    o = i === '"' ? "Quote" : "Apostrophe",
    l = n.enter("definition");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return (
    (u += s.move(
      n.safe(n.associationId(e), { before: u, after: "]", ...s.current() })
    )),
    (u += s.move("]: ")),
    a(),
    !e.url || /[\0- \u007F]/.test(e.url)
      ? ((a = n.enter("destinationLiteral")),
        (u += s.move("<")),
        (u += s.move(n.safe(e.url, { before: u, after: ">", ...s.current() }))),
        (u += s.move(">")))
      : ((a = n.enter("destinationRaw")),
        (u += s.move(
          n.safe(e.url, {
            before: u,
            after: e.title
              ? " "
              : `
`,
            ...s.current(),
          })
        ))),
    a(),
    e.title &&
      ((a = n.enter(`title${o}`)),
      (u += s.move(" " + i)),
      (u += s.move(n.safe(e.title, { before: u, after: i, ...s.current() }))),
      (u += s.move(i)),
      a()),
    l(),
    u
  );
}
function Z3(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" +
        t +
        "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
E0.peek = J3;
function E0(e, t, n, r) {
  const i = Z3(n),
    o = n.enter("emphasis"),
    l = n.createTracker(r);
  let a = l.move(i);
  return (
    (a += l.move(
      n.containerPhrasing(e, { before: a, after: i, ...l.current() })
    )),
    (a += l.move(i)),
    o(),
    a
  );
}
function J3(e, t, n) {
  return n.options.emphasis || "*";
}
function eC(e, t) {
  let n = !1;
  return (
    Ju(e, function (r) {
      if (("value" in r && /\r?\n|\r/.test(r.value)) || r.type === "break")
        return (n = !0), Ls;
    }),
    !!((!e.depth || e.depth < 3) && qu(e) && (t.options.setext || n))
  );
}
function tC(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1),
    o = n.createTracker(r);
  if (eC(e, n)) {
    const f = n.enter("headingSetext"),
      c = n.enter("phrasing"),
      d = n.containerPhrasing(e, {
        ...o.current(),
        before: `
`,
        after: `
`,
      });
    return (
      c(),
      f(),
      d +
        `
` +
        (i === 1 ? "=" : "-").repeat(
          d.length -
            (Math.max(
              d.lastIndexOf("\r"),
              d.lastIndexOf(`
`)
            ) +
              1)
        )
    );
  }
  const l = "#".repeat(i),
    a = n.enter("headingAtx"),
    s = n.enter("phrasing");
  o.move(l + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current(),
  });
  return (
    /^[\t ]/.test(u) &&
      (u =
        "&#x" + u.charCodeAt(0).toString(16).toUpperCase() + ";" + u.slice(1)),
    (u = u ? l + " " + u : l),
    n.options.closeAtx && (u += " " + l),
    s(),
    a(),
    u
  );
}
P0.peek = nC;
function P0(e) {
  return e.value || "";
}
function nC() {
  return "<";
}
T0.peek = rC;
function T0(e, t, n, r) {
  const i = tc(n),
    o = i === '"' ? "Quote" : "Apostrophe",
    l = n.enter("image");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return (
    (u += s.move(n.safe(e.alt, { before: u, after: "]", ...s.current() }))),
    (u += s.move("](")),
    a(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((a = n.enter("destinationLiteral")),
        (u += s.move("<")),
        (u += s.move(n.safe(e.url, { before: u, after: ">", ...s.current() }))),
        (u += s.move(">")))
      : ((a = n.enter("destinationRaw")),
        (u += s.move(
          n.safe(e.url, {
            before: u,
            after: e.title ? " " : ")",
            ...s.current(),
          })
        ))),
    a(),
    e.title &&
      ((a = n.enter(`title${o}`)),
      (u += s.move(" " + i)),
      (u += s.move(n.safe(e.title, { before: u, after: i, ...s.current() }))),
      (u += s.move(i)),
      a()),
    (u += s.move(")")),
    l(),
    u
  );
}
function rC() {
  return "!";
}
_0.peek = iC;
function _0(e, t, n, r) {
  const i = e.referenceType,
    o = n.enter("imageReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("![");
  const u = n.safe(e.alt, { before: s, after: "]", ...a.current() });
  (s += a.move(u + "][")), l();
  const f = n.stack;
  (n.stack = []), (l = n.enter("reference"));
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current(),
  });
  return (
    l(),
    (n.stack = f),
    o(),
    i === "full" || !u || u !== c
      ? (s += a.move(c + "]"))
      : i === "shortcut"
      ? (s = s.slice(0, -1))
      : (s += a.move("]")),
    s
  );
}
function iC() {
  return "!";
}
A0.peek = oC;
function A0(e, t, n) {
  let r = e.value || "",
    i = "`",
    o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
  for (
    /[^ \r\n]/.test(r) &&
    ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
    (r = " " + r + " ");
    ++o < n.unsafe.length;

  ) {
    const l = n.unsafe[o],
      a = n.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; (s = a.exec(r)); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--,
          (r = r.slice(0, u) + " " + r.slice(s.index + 1));
      }
  }
  return i + r + i;
}
function oC() {
  return "`";
}
function z0(e, t) {
  const n = qu(e);
  return !!(
    !t.options.resourceLink &&
    e.url &&
    !e.title &&
    e.children &&
    e.children.length === 1 &&
    e.children[0].type === "text" &&
    (n === e.url || "mailto:" + n === e.url) &&
    /^[a-z][a-z+.-]+:/i.test(e.url) &&
    !/[\0- <>\u007F]/.test(e.url)
  );
}
R0.peek = lC;
function R0(e, t, n, r) {
  const i = tc(n),
    o = i === '"' ? "Quote" : "Apostrophe",
    l = n.createTracker(r);
  let a, s;
  if (z0(e, n)) {
    const f = n.stack;
    (n.stack = []), (a = n.enter("autolink"));
    let c = l.move("<");
    return (
      (c += l.move(
        n.containerPhrasing(e, { before: c, after: ">", ...l.current() })
      )),
      (c += l.move(">")),
      a(),
      (n.stack = f),
      c
    );
  }
  (a = n.enter("link")), (s = n.enter("label"));
  let u = l.move("[");
  return (
    (u += l.move(
      n.containerPhrasing(e, { before: u, after: "](", ...l.current() })
    )),
    (u += l.move("](")),
    s(),
    (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
      ? ((s = n.enter("destinationLiteral")),
        (u += l.move("<")),
        (u += l.move(n.safe(e.url, { before: u, after: ">", ...l.current() }))),
        (u += l.move(">")))
      : ((s = n.enter("destinationRaw")),
        (u += l.move(
          n.safe(e.url, {
            before: u,
            after: e.title ? " " : ")",
            ...l.current(),
          })
        ))),
    s(),
    e.title &&
      ((s = n.enter(`title${o}`)),
      (u += l.move(" " + i)),
      (u += l.move(n.safe(e.title, { before: u, after: i, ...l.current() }))),
      (u += l.move(i)),
      s()),
    (u += l.move(")")),
    a(),
    u
  );
}
function lC(e, t, n) {
  return z0(e, n) ? "<" : "[";
}
L0.peek = aC;
function L0(e, t, n, r) {
  const i = e.referenceType,
    o = n.enter("linkReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("[");
  const u = n.containerPhrasing(e, { before: s, after: "]", ...a.current() });
  (s += a.move(u + "][")), l();
  const f = n.stack;
  (n.stack = []), (l = n.enter("reference"));
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current(),
  });
  return (
    l(),
    (n.stack = f),
    o(),
    i === "full" || !u || u !== c
      ? (s += a.move(c + "]"))
      : i === "shortcut"
      ? (s = s.slice(0, -1))
      : (s += a.move("]")),
    s
  );
}
function aC() {
  return "[";
}
function nc(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function sC(e) {
  const t = nc(e),
    n = e.options.bulletOther;
  if (!n) return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" +
        n +
        "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" +
        t +
        "`) and `bulletOther` (`" +
        n +
        "`) to be different"
    );
  return n;
}
function uC(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function N0(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" +
        t +
        "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function cC(e, t, n, r) {
  const i = n.enter("list"),
    o = n.bulletCurrent;
  let l = e.ordered ? uC(n) : nc(n);
  const a = e.ordered ? (l === "." ? ")" : ".") : sC(n);
  let s = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      ((l === "*" || l === "-") &&
        f &&
        (!f.children || !f.children[0]) &&
        n.stack[n.stack.length - 1] === "list" &&
        n.stack[n.stack.length - 2] === "listItem" &&
        n.stack[n.stack.length - 3] === "list" &&
        n.stack[n.stack.length - 4] === "listItem" &&
        n.indexStack[n.indexStack.length - 1] === 0 &&
        n.indexStack[n.indexStack.length - 2] === 0 &&
        n.indexStack[n.indexStack.length - 3] === 0 &&
        (s = !0),
      N0(n) === l && f)
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const d = e.children[c];
        if (
          d &&
          d.type === "listItem" &&
          d.children &&
          d.children[0] &&
          d.children[0].type === "thematicBreak"
        ) {
          s = !0;
          break;
        }
      }
    }
  }
  s && (l = a), (n.bulletCurrent = l);
  const u = n.containerFlow(e, r);
  return (n.bulletLastUsed = l), (n.bulletCurrent = o), i(), u;
}
function fC(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" +
        t +
        "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function dC(e, t, n, r) {
  const i = fC(n);
  let o = n.bulletCurrent || nc(n);
  t &&
    t.type === "list" &&
    t.ordered &&
    (o =
      (typeof t.start == "number" && t.start > -1 ? t.start : 1) +
      (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) +
      o);
  let l = o.length + 1;
  (i === "tab" ||
    (i === "mixed" && ((t && t.type === "list" && t.spread) || e.spread))) &&
    (l = Math.ceil(l / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const s = n.enter("listItem"),
    u = n.indentLines(n.containerFlow(e, a.current()), f);
  return s(), u;
  function f(c, d, p) {
    return d
      ? (p ? "" : " ".repeat(l)) + c
      : (p ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function pC(e, t, n, r) {
  const i = n.enter("paragraph"),
    o = n.enter("phrasing"),
    l = n.containerPhrasing(e, r);
  return o(), i(), l;
}
const hC = Rl([
  "break",
  "delete",
  "emphasis",
  "footnote",
  "footnoteReference",
  "image",
  "imageReference",
  "inlineCode",
  "inlineMath",
  "link",
  "linkReference",
  "mdxJsxTextElement",
  "mdxTextExpression",
  "strong",
  "text",
  "textDirective",
]);
function mC(e, t, n, r) {
  return (
    e.children.some(function (l) {
      return hC(l);
    })
      ? n.containerPhrasing
      : n.containerFlow
  ).call(n, e, r);
}
function gC(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" +
        t +
        "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
O0.peek = yC;
function O0(e, t, n, r) {
  const i = gC(n),
    o = n.enter("strong"),
    l = n.createTracker(r);
  let a = l.move(i + i);
  return (
    (a += l.move(
      n.containerPhrasing(e, { before: a, after: i, ...l.current() })
    )),
    (a += l.move(i + i)),
    o(),
    a
  );
}
function yC(e, t, n) {
  return n.options.strong || "*";
}
function wC(e, t, n, r) {
  return n.safe(e.value, r);
}
function vC(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" +
        t +
        "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function xC(e, t, n) {
  const r = (N0(n) + (n.options.ruleSpaces ? " " : "")).repeat(vC(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const I0 = {
  blockquote: H3,
  break: Td,
  code: K3,
  definition: G3,
  emphasis: E0,
  hardBreak: Td,
  heading: tC,
  html: P0,
  image: T0,
  imageReference: _0,
  inlineCode: A0,
  link: R0,
  linkReference: L0,
  list: cC,
  listItem: dC,
  paragraph: pC,
  root: mC,
  strong: O0,
  text: wC,
  thematicBreak: xC,
};
function kC() {
  return {
    enter: { table: SC, tableData: _d, tableHeader: _d, tableRow: CC },
    exit: {
      codeText: EC,
      table: bC,
      tableData: Ca,
      tableHeader: Ca,
      tableRow: Ca,
    },
  };
}
function SC(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function (n) {
        return n === "none" ? null : n;
      }),
      children: [],
    },
    e
  ),
    (this.data.inTable = !0);
}
function bC(e) {
  this.exit(e), (this.data.inTable = void 0);
}
function CC(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Ca(e) {
  this.exit(e);
}
function _d(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function EC(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, PC));
  const n = this.stack[this.stack.length - 1];
  n.type, (n.value = t), this.exit(e);
}
function PC(e, t) {
  return t === "|" ? t : e;
}
function TC(e) {
  const t = e || {},
    n = t.tableCellPadding,
    r = t.tablePipeAlign,
    i = t.stringLength,
    o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      {
        character: `
`,
        inConstruct: "tableCell",
      },
      { atBreak: !0, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: !0, character: ":", after: "-" },
      { atBreak: !0, character: "-", after: "[:|-]" },
    ],
    handlers: { inlineCode: d, table: l, tableCell: s, tableRow: a },
  };
  function l(p, h, y, b) {
    return u(f(p, y, b), p.align);
  }
  function a(p, h, y, b) {
    const m = c(p, y, b),
      g = u([m]);
    return g.slice(
      0,
      g.indexOf(`
`)
    );
  }
  function s(p, h, y, b) {
    const m = y.enter("tableCell"),
      g = y.enter("phrasing"),
      w = y.containerPhrasing(p, { ...b, before: o, after: o });
    return g(), m(), w;
  }
  function u(p, h) {
    return j3(p, { align: h, alignDelimiters: r, padding: n, stringLength: i });
  }
  function f(p, h, y) {
    const b = p.children;
    let m = -1;
    const g = [],
      w = h.enter("table");
    for (; ++m < b.length; ) g[m] = c(b[m], h, y);
    return w(), g;
  }
  function c(p, h, y) {
    const b = p.children;
    let m = -1;
    const g = [],
      w = h.enter("tableRow");
    for (; ++m < b.length; ) g[m] = s(b[m], p, h, y);
    return w(), g;
  }
  function d(p, h, y) {
    let b = I0.inlineCode(p, h, y);
    return y.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function _C() {
  return {
    exit: {
      taskListCheckValueChecked: Ad,
      taskListCheckValueUnchecked: Ad,
      paragraph: zC,
    },
  };
}
function AC() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: RC },
  };
}
function Ad(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, (t.checked = e.type === "taskListCheckValueChecked");
}
function zC(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1,
        l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === n &&
        ((r.value = r.value.slice(1)),
        r.value.length === 0
          ? n.children.shift()
          : n.position &&
            r.position &&
            typeof r.position.start.offset == "number" &&
            (r.position.start.column++,
            r.position.start.offset++,
            (n.position.start = Object.assign({}, r.position.start))));
    }
  }
  this.exit(e);
}
function RC(e, t, n, r) {
  const i = e.children[0],
    o = typeof e.checked == "boolean" && i && i.type === "paragraph",
    l = "[" + (e.checked ? "x" : " ") + "] ",
    a = n.createTracker(r);
  o && a.move(l);
  let s = I0.listItem(e, t, n, { ...r, ...a.current() });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(f) {
    return f + l;
  }
}
function LC() {
  return [u3(), k3(), I3(), kC(), _C()];
}
function NC(e) {
  return { extensions: [c3(), S3(), M3(), TC(e), AC()] };
}
const OC = { tokenize: jC, partial: !0 },
  M0 = { tokenize: BC, partial: !0 },
  D0 = { tokenize: UC, partial: !0 },
  F0 = { tokenize: HC, partial: !0 },
  IC = { tokenize: VC, partial: !0 },
  $0 = { tokenize: FC, previous: B0 },
  j0 = { tokenize: $C, previous: U0 },
  Yt = { tokenize: DC, previous: H0 },
  Ot = {};
function MC() {
  return { text: Ot };
}
let _n = 48;
for (; _n < 123; )
  (Ot[_n] = Yt), _n++, _n === 58 ? (_n = 65) : _n === 91 && (_n = 97);
Ot[43] = Yt;
Ot[45] = Yt;
Ot[46] = Yt;
Ot[95] = Yt;
Ot[72] = [Yt, j0];
Ot[104] = [Yt, j0];
Ot[87] = [Yt, $0];
Ot[119] = [Yt, $0];
function DC(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !Ms(c) || !H0.call(r, r.previous) || rc(r.events)
      ? n(c)
      : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return Ms(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46
      ? e.check(IC, f, u)(c)
      : c === 45 || c === 95 || Ie(c)
      ? ((o = !0), e.consume(c), s)
      : f(c);
  }
  function u(c) {
    return e.consume(c), (i = !0), s;
  }
  function f(c) {
    return o && i && $e(r.previous)
      ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c))
      : n(c);
  }
}
function FC(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return (l !== 87 && l !== 119) || !B0.call(r, r.previous) || rc(r.events)
      ? n(l)
      : (e.enter("literalAutolink"),
        e.enter("literalAutolinkWww"),
        e.check(OC, e.attempt(M0, e.attempt(D0, o), n), n)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function $C(e, t, n) {
  const r = this;
  let i = "",
    o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && U0.call(r, r.previous) && !rc(r.events)
      ? (e.enter("literalAutolink"),
        e.enter("literalAutolinkHttp"),
        (i += String.fromCodePoint(c)),
        e.consume(c),
        a)
      : n(c);
  }
  function a(c) {
    if ($e(c) && i.length < 5)
      return (i += String.fromCodePoint(c)), e.consume(c), a;
    if (c === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https") return e.consume(c), s;
    }
    return n(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), o ? u : ((o = !0), s)) : n(c);
  }
  function u(c) {
    return c === null || el(c) || ie(c) || Vn(c) || _l(c)
      ? n(c)
      : e.attempt(M0, e.attempt(D0, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function jC(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3
      ? (r++, e.consume(l), i)
      : l === 46 && r === 3
      ? (e.consume(l), o)
      : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function BC(e, t, n) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95
      ? e.check(F0, s, a)(u)
      : u === null || ie(u) || Vn(u) || (u !== 45 && _l(u))
      ? s(u)
      : ((o = !0), e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? (r = !0) : ((i = r), (r = void 0)), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function UC(e, t) {
  let n = 0,
    r = 0;
  return i;
  function i(l) {
    return l === 40
      ? (n++, e.consume(l), i)
      : l === 41 && r < n
      ? o(l)
      : l === 33 ||
        l === 34 ||
        l === 38 ||
        l === 39 ||
        l === 41 ||
        l === 42 ||
        l === 44 ||
        l === 46 ||
        l === 58 ||
        l === 59 ||
        l === 60 ||
        l === 63 ||
        l === 93 ||
        l === 95 ||
        l === 126
      ? e.check(F0, t, o)(l)
      : l === null || ie(l) || Vn(l)
      ? t(l)
      : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function HC(e, t, n) {
  return r;
  function r(a) {
    return a === 33 ||
      a === 34 ||
      a === 39 ||
      a === 41 ||
      a === 42 ||
      a === 44 ||
      a === 46 ||
      a === 58 ||
      a === 59 ||
      a === 63 ||
      a === 95 ||
      a === 126
      ? (e.consume(a), r)
      : a === 38
      ? (e.consume(a), o)
      : a === 93
      ? (e.consume(a), i)
      : a === 60 || a === null || ie(a) || Vn(a)
      ? t(a)
      : n(a);
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || ie(a) || Vn(a) ? t(a) : r(a);
  }
  function o(a) {
    return $e(a) ? l(a) : n(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : $e(a) ? (e.consume(a), l) : n(a);
  }
}
function VC(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return Ie(o) ? n(o) : t(o);
  }
}
function B0(e) {
  return (
    e === null ||
    e === 40 ||
    e === 42 ||
    e === 95 ||
    e === 91 ||
    e === 93 ||
    e === 126 ||
    ie(e)
  );
}
function U0(e) {
  return !$e(e);
}
function H0(e) {
  return !(e === 47 || Ms(e));
}
function Ms(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Ie(e);
}
function rc(e) {
  let t = e.length,
    n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return (
    e.length > 0 &&
      !n &&
      (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
    n
  );
}
const WC = { tokenize: JC, partial: !0 };
function qC() {
  return {
    document: {
      91: { tokenize: YC, continuation: { tokenize: GC }, exit: ZC },
    },
    text: {
      91: { tokenize: KC },
      93: { add: "after", tokenize: QC, resolveTo: XC },
    },
  };
}
function QC(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      l = s;
      break;
    }
    if (
      s.type === "gfmFootnoteCall" ||
      s.type === "labelLink" ||
      s.type === "label" ||
      s.type === "image" ||
      s.type === "link"
    )
      break;
  }
  return a;
  function a(s) {
    if (!l || !l._balanced) return n(s);
    const u = bt(r.sliceSerialize({ start: l.end, end: r.now() }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1))
      ? n(s)
      : (e.enter("gfmFootnoteCallLabelMarker"),
        e.consume(s),
        e.exit("gfmFootnoteCallLabelMarker"),
        t(s));
  }
}
function XC(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  (e[n + 1][1].type = "data"),
    (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
  const r = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[n + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    i = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[n + 3][1].end),
      end: Object.assign({}, e[n + 3][1].end),
    };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start),
    },
    l = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, o.start),
      end: Object.assign({}, o.end),
    },
    a = [
      e[n + 1],
      e[n + 2],
      ["enter", r, t],
      e[n + 3],
      e[n + 4],
      ["enter", i, t],
      ["exit", i, t],
      ["enter", o, t],
      ["enter", l, t],
      ["exit", l, t],
      ["exit", o, t],
      e[e.length - 2],
      e[e.length - 1],
      ["exit", r, t],
    ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function KC(e, t, n) {
  const r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0,
    l;
  return a;
  function a(c) {
    return (
      e.enter("gfmFootnoteCall"),
      e.enter("gfmFootnoteCallLabelMarker"),
      e.consume(c),
      e.exit("gfmFootnoteCallLabelMarker"),
      s
    );
  }
  function s(c) {
    return c !== 94
      ? n(c)
      : (e.enter("gfmFootnoteCallMarker"),
        e.consume(c),
        e.exit("gfmFootnoteCallMarker"),
        e.enter("gfmFootnoteCallString"),
        (e.enter("chunkString").contentType = "string"),
        u);
  }
  function u(c) {
    if (o > 999 || (c === 93 && !l) || c === null || c === 91 || ie(c))
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(bt(r.sliceSerialize(d)))
        ? (e.enter("gfmFootnoteCallLabelMarker"),
          e.consume(c),
          e.exit("gfmFootnoteCallLabelMarker"),
          e.exit("gfmFootnoteCall"),
          t)
        : n(c);
    }
    return ie(c) || (l = !0), o++, e.consume(c), c === 92 ? f : u;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function YC(e, t, n) {
  const r = this,
    i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o,
    l = 0,
    a;
  return s;
  function s(h) {
    return (
      (e.enter("gfmFootnoteDefinition")._container = !0),
      e.enter("gfmFootnoteDefinitionLabel"),
      e.enter("gfmFootnoteDefinitionLabelMarker"),
      e.consume(h),
      e.exit("gfmFootnoteDefinitionLabelMarker"),
      u
    );
  }
  function u(h) {
    return h === 94
      ? (e.enter("gfmFootnoteDefinitionMarker"),
        e.consume(h),
        e.exit("gfmFootnoteDefinitionMarker"),
        e.enter("gfmFootnoteDefinitionLabelString"),
        (e.enter("chunkString").contentType = "string"),
        f)
      : n(h);
  }
  function f(h) {
    if (l > 999 || (h === 93 && !a) || h === null || h === 91 || ie(h))
      return n(h);
    if (h === 93) {
      e.exit("chunkString");
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return (
        (o = bt(r.sliceSerialize(y))),
        e.enter("gfmFootnoteDefinitionLabelMarker"),
        e.consume(h),
        e.exit("gfmFootnoteDefinitionLabelMarker"),
        e.exit("gfmFootnoteDefinitionLabel"),
        d
      );
    }
    return ie(h) || (a = !0), l++, e.consume(h), h === 92 ? c : f;
  }
  function c(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, f) : f(h);
  }
  function d(h) {
    return h === 58
      ? (e.enter("definitionMarker"),
        e.consume(h),
        e.exit("definitionMarker"),
        i.includes(o) || i.push(o),
        Z(e, p, "gfmFootnoteDefinitionWhitespace"))
      : n(h);
  }
  function p(h) {
    return t(h);
  }
}
function GC(e, t, n) {
  return e.check($i, t, e.attempt(WC, t, n));
}
function ZC(e) {
  e.exit("gfmFootnoteDefinition");
}
function JC(e, t, n) {
  const r = this;
  return Z(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l &&
      l[1].type === "gfmFootnoteDefinitionIndent" &&
      l[2].sliceSerialize(l[1], !0).length === 4
      ? t(o)
      : n(o);
  }
}
function eE(e) {
  let n = (e || {}).singleTilde;
  const r = { tokenize: o, resolveAll: i };
  return (
    n == null && (n = !0),
    {
      text: { 126: r },
      insideSpan: { null: [r] },
      attentionMarkers: { null: [126] },
    }
  );
  function i(l, a) {
    let s = -1;
    for (; ++s < l.length; )
      if (
        l[s][0] === "enter" &&
        l[s][1].type === "strikethroughSequenceTemporary" &&
        l[s][1]._close
      ) {
        let u = s;
        for (; u--; )
          if (
            l[u][0] === "exit" &&
            l[u][1].type === "strikethroughSequenceTemporary" &&
            l[u][1]._open &&
            l[s][1].end.offset - l[s][1].start.offset ===
              l[u][1].end.offset - l[u][1].start.offset
          ) {
            (l[s][1].type = "strikethroughSequence"),
              (l[u][1].type = "strikethroughSequence");
            const f = {
                type: "strikethrough",
                start: Object.assign({}, l[u][1].start),
                end: Object.assign({}, l[s][1].end),
              },
              c = {
                type: "strikethroughText",
                start: Object.assign({}, l[u][1].end),
                end: Object.assign({}, l[s][1].start),
              },
              d = [
                ["enter", f, a],
                ["enter", l[u][1], a],
                ["exit", l[u][1], a],
                ["enter", c, a],
              ],
              p = a.parser.constructs.insideSpan.null;
            p && tt(d, d.length, 0, Al(p, l.slice(u + 1, s), a)),
              tt(d, d.length, 0, [
                ["exit", c, a],
                ["enter", l[s][1], a],
                ["exit", l[s][1], a],
                ["exit", f, a],
              ]),
              tt(l, u - 1, s - u + 3, d),
              (s = u + d.length - 2);
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" &&
        (l[s][1].type = "data");
    return l;
  }
  function o(l, a, s) {
    const u = this.previous,
      f = this.events;
    let c = 0;
    return d;
    function d(h) {
      return u === 126 && f[f.length - 1][1].type !== "characterEscape"
        ? s(h)
        : (l.enter("strikethroughSequenceTemporary"), p(h));
    }
    function p(h) {
      const y = tl(u);
      if (h === 126) return c > 1 ? s(h) : (l.consume(h), c++, p);
      if (c < 2 && !n) return s(h);
      const b = l.exit("strikethroughSequenceTemporary"),
        m = tl(h);
      return (
        (b._open = !m || (m === 2 && !!y)),
        (b._close = !y || (y === 2 && !!m)),
        a(h)
      );
    }
  }
}
class tE {
  constructor() {
    this.map = [];
  }
  add(t, n, r) {
    nE(this, t, n, r);
  }
  consume(t) {
    if (
      (this.map.sort(function (o, l) {
        return o[0] - l[0];
      }),
      this.map.length === 0)
    )
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      (n -= 1),
        r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]),
        (t.length = this.map[n][0]);
    r.push([...t]), (t.length = 0);
    let i = r.pop();
    for (; i; ) t.push(...i), (i = r.pop());
    this.map.length = 0;
  }
}
function nE(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        (e.map[i][1] += n), e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function rE(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" &&
          r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow") break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function iE() {
  return { flow: { null: { tokenize: oE, resolveAll: lE } } };
}
function oE(e, t, n) {
  const r = this;
  let i = 0,
    o = 0,
    l;
  return a;
  function a(S) {
    let O = r.events.length - 1;
    for (; O > -1; ) {
      const te = r.events[O][1].type;
      if (te === "lineEnding" || te === "linePrefix") O--;
      else break;
    }
    const N = O > -1 ? r.events[O][1].type : null,
      X = N === "tableHead" || N === "tableRow" ? k : s;
    return X === k && r.parser.lazy[r.now().line] ? n(S) : X(S);
  }
  function s(S) {
    return e.enter("tableHead"), e.enter("tableRow"), u(S);
  }
  function u(S) {
    return S === 124 || ((l = !0), (o += 1)), f(S);
  }
  function f(S) {
    return S === null
      ? n(S)
      : B(S)
      ? o > 1
        ? ((o = 0),
          (r.interrupt = !0),
          e.exit("tableRow"),
          e.enter("lineEnding"),
          e.consume(S),
          e.exit("lineEnding"),
          p)
        : n(S)
      : Q(S)
      ? Z(e, f, "whitespace")(S)
      : ((o += 1),
        l && ((l = !1), (i += 1)),
        S === 124
          ? (e.enter("tableCellDivider"),
            e.consume(S),
            e.exit("tableCellDivider"),
            (l = !0),
            f)
          : (e.enter("data"), c(S)));
  }
  function c(S) {
    return S === null || S === 124 || ie(S)
      ? (e.exit("data"), f(S))
      : (e.consume(S), S === 92 ? d : c);
  }
  function d(S) {
    return S === 92 || S === 124 ? (e.consume(S), c) : c(S);
  }
  function p(S) {
    return (
      (r.interrupt = !1),
      r.parser.lazy[r.now().line]
        ? n(S)
        : (e.enter("tableDelimiterRow"),
          (l = !1),
          Q(S)
            ? Z(
                e,
                h,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(S)
            : h(S))
    );
  }
  function h(S) {
    return S === 45 || S === 58
      ? b(S)
      : S === 124
      ? ((l = !0),
        e.enter("tableCellDivider"),
        e.consume(S),
        e.exit("tableCellDivider"),
        y)
      : P(S);
  }
  function y(S) {
    return Q(S) ? Z(e, b, "whitespace")(S) : b(S);
  }
  function b(S) {
    return S === 58
      ? ((o += 1),
        (l = !0),
        e.enter("tableDelimiterMarker"),
        e.consume(S),
        e.exit("tableDelimiterMarker"),
        m)
      : S === 45
      ? ((o += 1), m(S))
      : S === null || B(S)
      ? E(S)
      : P(S);
  }
  function m(S) {
    return S === 45 ? (e.enter("tableDelimiterFiller"), g(S)) : P(S);
  }
  function g(S) {
    return S === 45
      ? (e.consume(S), g)
      : S === 58
      ? ((l = !0),
        e.exit("tableDelimiterFiller"),
        e.enter("tableDelimiterMarker"),
        e.consume(S),
        e.exit("tableDelimiterMarker"),
        w)
      : (e.exit("tableDelimiterFiller"), w(S));
  }
  function w(S) {
    return Q(S) ? Z(e, E, "whitespace")(S) : E(S);
  }
  function E(S) {
    return S === 124
      ? h(S)
      : S === null || B(S)
      ? !l || i !== o
        ? P(S)
        : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(S))
      : P(S);
  }
  function P(S) {
    return n(S);
  }
  function k(S) {
    return e.enter("tableRow"), A(S);
  }
  function A(S) {
    return S === 124
      ? (e.enter("tableCellDivider"),
        e.consume(S),
        e.exit("tableCellDivider"),
        A)
      : S === null || B(S)
      ? (e.exit("tableRow"), t(S))
      : Q(S)
      ? Z(e, A, "whitespace")(S)
      : (e.enter("data"), z(S));
  }
  function z(S) {
    return S === null || S === 124 || ie(S)
      ? (e.exit("data"), A(S))
      : (e.consume(S), S === 92 ? I : z);
  }
  function I(S) {
    return S === 92 || S === 124 ? (e.consume(S), z) : z(S);
  }
}
function lE(e, t) {
  let n = -1,
    r = !0,
    i = 0,
    o = [0, 0, 0, 0],
    l = [0, 0, 0, 0],
    a = !1,
    s = 0,
    u,
    f,
    c;
  const d = new tE();
  for (; ++n < e.length; ) {
    const p = e[n],
      h = p[1];
    p[0] === "enter"
      ? h.type === "tableHead"
        ? ((a = !1),
          s !== 0 && (zd(d, t, s, u, f), (f = void 0), (s = 0)),
          (u = {
            type: "table",
            start: Object.assign({}, h.start),
            end: Object.assign({}, h.end),
          }),
          d.add(n, 0, [["enter", u, t]]))
        : h.type === "tableRow" || h.type === "tableDelimiterRow"
        ? ((r = !0),
          (c = void 0),
          (o = [0, 0, 0, 0]),
          (l = [0, n + 1, 0, 0]),
          a &&
            ((a = !1),
            (f = {
              type: "tableBody",
              start: Object.assign({}, h.start),
              end: Object.assign({}, h.end),
            }),
            d.add(n, 0, [["enter", f, t]])),
          (i = h.type === "tableDelimiterRow" ? 2 : f ? 3 : 1))
        : i &&
          (h.type === "data" ||
            h.type === "tableDelimiterMarker" ||
            h.type === "tableDelimiterFiller")
        ? ((r = !1),
          l[2] === 0 &&
            (o[1] !== 0 &&
              ((l[0] = l[1]),
              (c = uo(d, t, o, i, void 0, c)),
              (o = [0, 0, 0, 0])),
            (l[2] = n)))
        : h.type === "tableCellDivider" &&
          (r
            ? (r = !1)
            : (o[1] !== 0 && ((l[0] = l[1]), (c = uo(d, t, o, i, void 0, c))),
              (o = l),
              (l = [o[1], n, 0, 0])))
      : h.type === "tableHead"
      ? ((a = !0), (s = n))
      : h.type === "tableRow" || h.type === "tableDelimiterRow"
      ? ((s = n),
        o[1] !== 0
          ? ((l[0] = l[1]), (c = uo(d, t, o, i, n, c)))
          : l[1] !== 0 && (c = uo(d, t, l, i, n, c)),
        (i = 0))
      : i &&
        (h.type === "data" ||
          h.type === "tableDelimiterMarker" ||
          h.type === "tableDelimiterFiller") &&
        (l[3] = n);
  }
  for (
    s !== 0 && zd(d, t, s, u, f), d.consume(t.events), n = -1;
    ++n < t.events.length;

  ) {
    const p = t.events[n];
    p[0] === "enter" &&
      p[1].type === "table" &&
      (p[1]._align = rE(t.events, n));
  }
  return e;
}
function uo(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData",
    a = "tableContent";
  n[0] !== 0 &&
    ((o.end = Object.assign({}, Jn(t.events, n[0]))),
    e.add(n[0], 0, [["exit", o, t]]));
  const s = Jn(t.events, n[1]);
  if (
    ((o = { type: l, start: Object.assign({}, s), end: Object.assign({}, s) }),
    e.add(n[1], 0, [["enter", o, t]]),
    n[2] !== 0)
  ) {
    const u = Jn(t.events, n[2]),
      f = Jn(t.events, n[3]),
      c = { type: a, start: Object.assign({}, u), end: Object.assign({}, f) };
    if ((e.add(n[2], 0, [["enter", c, t]]), r !== 2)) {
      const d = t.events[n[2]],
        p = t.events[n[3]];
      if (
        ((d[1].end = Object.assign({}, p[1].end)),
        (d[1].type = "chunkText"),
        (d[1].contentType = "text"),
        n[3] > n[2] + 1)
      ) {
        const h = n[2] + 1,
          y = n[3] - n[2] - 1;
        e.add(h, y, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return (
    i !== void 0 &&
      ((o.end = Object.assign({}, Jn(t.events, i))),
      e.add(i, 0, [["exit", o, t]]),
      (o = void 0)),
    o
  );
}
function zd(e, t, n, r, i) {
  const o = [],
    l = Jn(t.events, n);
  i && ((i.end = Object.assign({}, l)), o.push(["exit", i, t])),
    (r.end = Object.assign({}, l)),
    o.push(["exit", r, t]),
    e.add(n + 1, 0, o);
}
function Jn(e, t) {
  const n = e[t],
    r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const aE = { tokenize: uE };
function sE() {
  return { text: { 91: aE } };
}
function uE(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem
      ? n(s)
      : (e.enter("taskListCheck"),
        e.enter("taskListCheckMarker"),
        e.consume(s),
        e.exit("taskListCheckMarker"),
        o);
  }
  function o(s) {
    return ie(s)
      ? (e.enter("taskListCheckValueUnchecked"),
        e.consume(s),
        e.exit("taskListCheckValueUnchecked"),
        l)
      : s === 88 || s === 120
      ? (e.enter("taskListCheckValueChecked"),
        e.consume(s),
        e.exit("taskListCheckValueChecked"),
        l)
      : n(s);
  }
  function l(s) {
    return s === 93
      ? (e.enter("taskListCheckMarker"),
        e.consume(s),
        e.exit("taskListCheckMarker"),
        e.exit("taskListCheck"),
        a)
      : n(s);
  }
  function a(s) {
    return B(s) ? t(s) : Q(s) ? e.check({ tokenize: cE }, t, n)(s) : n(s);
  }
}
function cE(e, t, n) {
  return Z(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function fE(e) {
  return e0([MC(), qC(), eE(e), iE(), sE()]);
}
const dE = {};
function pE(e) {
  const t = this,
    n = e || dE,
    r = t.data(),
    i = r.micromarkExtensions || (r.micromarkExtensions = []),
    o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []),
    l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(fE(n)), o.push(LC()), l.push(NC(n));
}
const hE = ({ content: e }) =>
    $.jsx(n3, {
      remarkPlugins: [pE],
      className: "markdown_prose ",
      children: e,
    }),
  mE = ({ key: e, message: t }) => {
    var n;
    return $.jsx(
      "div",
      {
        className: Ke(
          "flex  max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm text-wrap break-words",
          t.type === "human"
            ? "ml-auto bg-primary text-primary-foreground"
            : "bg-muted"
        ),
        children: $.jsx(hE, {
          content:
            (n = t == null ? void 0 : t.data) == null ? void 0 : n.content,
        }),
      },
      e
    );
  },
  V0 = "Avatar",
  [gE, LE] = rm(V0),
  [yE, W0] = gE(V0),
  wE = C.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [i, o] = C.useState("idle");
    return C.createElement(
      yE,
      { scope: n, imageLoadingStatus: i, onImageLoadingStatusChange: o },
      C.createElement(Cn.span, ae({}, r, { ref: t }))
    );
  }),
  vE = "AvatarImage",
  xE = C.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: i = () => {},
        ...o
      } = e,
      l = W0(vE, n),
      a = bE(r),
      s = sn((u) => {
        i(u), l.onImageLoadingStatusChange(u);
      });
    return (
      Ti(() => {
        a !== "idle" && s(a);
      }, [a, s]),
      a === "loaded"
        ? C.createElement(Cn.img, ae({}, o, { ref: t, src: r }))
        : null
    );
  }),
  kE = "AvatarFallback",
  SE = C.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...i } = e,
      o = W0(kE, n),
      [l, a] = C.useState(r === void 0);
    return (
      C.useEffect(() => {
        if (r !== void 0) {
          const s = window.setTimeout(() => a(!0), r);
          return () => window.clearTimeout(s);
        }
      }, [r]),
      l && o.imageLoadingStatus !== "loaded"
        ? C.createElement(Cn.span, ae({}, i, { ref: t }))
        : null
    );
  });
function bE(e) {
  const [t, n] = C.useState("idle");
  return (
    Ti(() => {
      if (!e) {
        n("error");
        return;
      }
      let r = !0;
      const i = new window.Image(),
        o = (l) => () => {
          r && n(l);
        };
      return (
        n("loading"),
        (i.onload = o("loaded")),
        (i.onerror = o("error")),
        (i.src = e),
        () => {
          r = !1;
        }
      );
    }, [e]),
    t
  );
}
const q0 = wE,
  Q0 = xE,
  X0 = SE,
  K0 = C.forwardRef(({ className: e, ...t }, n) =>
    $.jsx(q0, {
      ref: n,
      className: Ke(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t,
    })
  );
K0.displayName = q0.displayName;
const CE = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx(Q0, { ref: n, className: Ke("aspect-square h-full w-full", e), ...t })
);
CE.displayName = Q0.displayName;
const EE = C.forwardRef(({ className: e, ...t }, n) =>
  $.jsx(X0, {
    ref: n,
    className: Ke(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t,
  })
);
EE.displayName = X0.displayName;
const PE = ({ name: e, logo: t }) =>
  $.jsxs("div", {
    className: "frame_header",
    children: [
      $.jsx(K0, {
        className:
          "flex items-center justify-center bg-white dark:bg-white p-2",
        children: t,
      }),
      $.jsx("div", {
        children: $.jsx("p", {
          className: "text-sm font-medium leading-none",
          children: e,
        }),
      }),
    ],
  });
var TE = {
  VITE_XCOPILOT_CHAT_BASE_URL: "https://chat.xcopilot.co",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
function _E({
  chatBotId: e,
  chatBotkey: t,
  name: n = "XCopilot",
  logo: r = $.jsx(ws.logoDark, { className: "w-5 h-5" }),
  headers: i,
}) {
  const [o, l] = C.useState(!1),
    [a, s] = C.useState([]),
    [u, f] = C.useState(""),
    [c, d] = C.useState(!1),
    p = C.useRef(),
    h = u.trim().length;
  async function y(P, k) {
    const A = await ke.get(`http://localhost:5000/chatbot/${P}`, {
      headers: { Authorization: `Bearer ${k}` },
    });
    s(A == null ? void 0 : A.data);
  }
  async function b(P, k, A) {
    var I, S, O;
    d(!0), console.log(TE.XCOPILOT_CHAT_BASE_URL), console.log("headers", i);
    const z = await ke.post(
      `http://localhost:5000/chatbot/${P}`,
      { prompt: A, headers: i },
      { headers: { Authorization: `Bearer ${k}` } }
    );
    console.log("res", z == null ? void 0 : z.data),
      console.log(a),
      s([
        ...((I = z == null ? void 0 : z.data) == null ? void 0 : I.history),
        {
          type: "human",
          data: {
            content:
              (S = z == null ? void 0 : z.data) == null ? void 0 : S.input,
          },
        },
        {
          type: "ai",
          data: {
            content:
              (O = z == null ? void 0 : z.data) == null ? void 0 : O.output,
          },
        },
      ]),
      d(!1);
  }
  function m(P, k) {
    const [A, z] = C.useState(!1);
    return (
      C.useEffect(() => {
        let I;
        return (
          P && !A ? z(!0) : !P && A && (I = setTimeout(() => z(!1), k)),
          () => clearTimeout(I)
        );
      }, [P, k, A]),
      A
    );
  }
  C.useEffect(() => {
    y(e, t);
  }, []),
    C.useEffect(() => {
      console.log("chatBotId", p.current),
        p.current && (p.current.scrollTop = p.current.scrollHeight);
    }, [a]);
  const g = {
      animation: "chat_popup_in_animation 200ms cubic-bezier(0, 1.2, 1, 1)",
    },
    w = {
      animation: "chat_popup_out_animation 200ms cubic-bezier(0, 1.2, 1, 1)",
      animationFillMode: "forwards",
    },
    E = m(o, 200);
  return $.jsxs($.Fragment, {
    children: [
      E &&
        $.jsxs(tm, {
          className: "frame",
          style: o ? g : w,
          children: [
            $.jsx(PE, { name: n, logo: r }),
            $.jsx(mm, {
              className: "h-full",
              children: $.jsxs("div", {
                className: "frame_content",
                children: [
                  a == null
                    ? void 0
                    : a.map((P, k) => $.jsx(mE, { message: P }, k)),
                  c &&
                    $.jsx("div", {
                      className: "typingIndicatorContainer",
                      children: $.jsxs("div", {
                        className: "typingIndicatorBubble",
                        children: [
                          $.jsx("div", {
                            className: "typingIndicatorBubbleDot",
                          }),
                          $.jsx("div", {
                            className: "typingIndicatorBubbleDot",
                          }),
                          $.jsx("div", {
                            className: "typingIndicatorBubbleDot",
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
            $.jsx("div", {
              className: "flex items-center p-0 m-0",
              children: $.jsx("form", {
                onSubmit: (P) => {
                  P.preventDefault(),
                    h !== 0 &&
                      (s([...a, { type: "human", data: { content: u } }]),
                      f(""),
                      b(e, t, u));
                },
                className:
                  "flex items-center w-full h-full p-0 m-0 border-t border-gray-300 shadow-t-lg",
                children: $.jsx(nm, {
                  id: "message",
                  placeholder: "Type your message...",
                  className: "chat_text_field focus-visible:ring-0",
                  autoComplete: "off",
                  value: u,
                  onChange: (P) => f(P.target.value),
                }),
              }),
            }),
          ],
        }),
      $.jsxs(em, {
        onClick: () => l(!o),
        className: "trigger_button",
        children: [
          $.jsx(ws.logo, { className: "w-10 h-10" }),
          $.jsx("span", { className: "sr-only", children: "New chat" }),
        ],
      }),
    ],
  });
}
const AE = ({
  chatBotId: e,
  chatBotkey: t,
  name: n = "XCopilot",
  logo: r = $.jsx(ws.logoDark, { className: "w-5 h-5" }),
  headers: i,
}) =>
  $.jsx("div", {
    children: $.jsx(_E, {
      chatBotId: e,
      chatBotkey: t,
      name: n,
      logo: r,
      headers: i,
    }),
  });
function zE({
  chatBotId: e,
  chatBotkey: t,
  name: n = "XCopilot",
  logo: r,
  anchorId: i,
  headers: o,
}) {
  const l = Uw(i);
  Ea.createRoot(l).render(
    $.jsxs(vg.StrictMode, {
      children: [
        $.jsx(AE, {
          chatBotId: e,
          chatBotkey: t,
          name: n,
          logo: r,
          headers: o,
        }),
        $.jsx("style", { children: Ay }),
      ],
    })
  );
}
window.initXCopilot = zE;
