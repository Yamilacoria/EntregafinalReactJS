(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload"))
        return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]'))
        f(d);
    new MutationObserver(d => {
        for (const m of d)
            if (m.type === "childList")
                for (const E of m.addedNodes)
                    E.tagName === "LINK" && E.rel === "modulepreload" && f(E)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(d) {
        const m = {};
        return d.integrity && (m.integrity = d.integrity),
        d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy),
        d.crossOrigin === "use-credentials" ? m.credentials = "include" : d.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin",
        m
    }
    function f(d) {
        if (d.ep)
            return;
        d.ep = !0;
        const m = s(d);
        fetch(d.href, m)
    }
}
)();
var Sf = {
    exports: {}
}
  , Mu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function qv() {
    if (Cd)
        return Mu;
    Cd = 1;
    var i = Symbol.for("react.transitional.element")
      , o = Symbol.for("react.fragment");
    function s(f, d, m) {
        var E = null;
        if (m !== void 0 && (E = "" + m),
        d.key !== void 0 && (E = "" + d.key),
        "key"in d) {
            m = {};
            for (var M in d)
                M !== "key" && (m[M] = d[M])
        } else
            m = d;
        return d = m.ref,
        {
            $$typeof: i,
            type: f,
            key: E,
            ref: d !== void 0 ? d : null,
            props: m
        }
    }
    return Mu.Fragment = o,
    Mu.jsx = s,
    Mu.jsxs = s,
    Mu
}
var jd;
function Yv() {
    return jd || (jd = 1,
    Sf.exports = qv()),
    Sf.exports
}
var z = Yv()
  , bf = {
    exports: {}
}
  , et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;
function Lv() {
    if (Hd)
        return et;
    Hd = 1;
    var i = Symbol.for("react.transitional.element")
      , o = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , f = Symbol.for("react.strict_mode")
      , d = Symbol.for("react.profiler")
      , m = Symbol.for("react.consumer")
      , E = Symbol.for("react.context")
      , M = Symbol.for("react.forward_ref")
      , b = Symbol.for("react.suspense")
      , v = Symbol.for("react.memo")
      , R = Symbol.for("react.lazy")
      , C = Symbol.iterator;
    function H(y) {
        return y === null || typeof y != "object" ? null : (y = C && y[C] || y["@@iterator"],
        typeof y == "function" ? y : null)
    }
    var B = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , V = Object.assign
      , F = {};
    function X(y, j, L) {
        this.props = y,
        this.context = j,
        this.refs = F,
        this.updater = L || B
    }
    X.prototype.isReactComponent = {},
    X.prototype.setState = function(y, j) {
        if (typeof y != "object" && typeof y != "function" && y != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, y, j, "setState")
    }
    ,
    X.prototype.forceUpdate = function(y) {
        this.updater.enqueueForceUpdate(this, y, "forceUpdate")
    }
    ;
    function w() {}
    w.prototype = X.prototype;
    function Q(y, j, L) {
        this.props = y,
        this.context = j,
        this.refs = F,
        this.updater = L || B
    }
    var tt = Q.prototype = new w;
    tt.constructor = Q,
    V(tt, X.prototype),
    tt.isPureReactComponent = !0;
    var Et = Array.isArray
      , P = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , Ct = Object.prototype.hasOwnProperty;
    function _t(y, j, L, q, K, ct) {
        return L = ct.ref,
        {
            $$typeof: i,
            type: y,
            key: j,
            ref: L !== void 0 ? L : null,
            props: ct
        }
    }
    function jt(y, j) {
        return _t(y.type, j, void 0, void 0, void 0, y.props)
    }
    function At(y) {
        return typeof y == "object" && y !== null && y.$$typeof === i
    }
    function It(y) {
        var j = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + y.replace(/[=:]/g, function(L) {
            return j[L]
        })
    }
    var oe = /\/+/g;
    function Qt(y, j) {
        return typeof y == "object" && y !== null && y.key != null ? It("" + y.key) : j.toString(36)
    }
    function Al() {}
    function Rl(y) {
        switch (y.status) {
        case "fulfilled":
            return y.value;
        case "rejected":
            throw y.reason;
        default:
            switch (typeof y.status == "string" ? y.then(Al, Al) : (y.status = "pending",
            y.then(function(j) {
                y.status === "pending" && (y.status = "fulfilled",
                y.value = j)
            }, function(j) {
                y.status === "pending" && (y.status = "rejected",
                y.reason = j)
            })),
            y.status) {
            case "fulfilled":
                return y.value;
            case "rejected":
                throw y.reason
            }
        }
        throw y
    }
    function Zt(y, j, L, q, K) {
        var ct = typeof y;
        (ct === "undefined" || ct === "boolean") && (y = null);
        var I = !1;
        if (y === null)
            I = !0;
        else
            switch (ct) {
            case "bigint":
            case "string":
            case "number":
                I = !0;
                break;
            case "object":
                switch (y.$$typeof) {
                case i:
                case o:
                    I = !0;
                    break;
                case R:
                    return I = y._init,
                    Zt(I(y._payload), j, L, q, K)
                }
            }
        if (I)
            return K = K(y),
            I = q === "" ? "." + Qt(y, 0) : q,
            Et(K) ? (L = "",
            I != null && (L = I.replace(oe, "$&/") + "/"),
            Zt(K, j, L, "", function(Fe) {
                return Fe
            })) : K != null && (At(K) && (K = jt(K, L + (K.key == null || y && y.key === K.key ? "" : ("" + K.key).replace(oe, "$&/") + "/") + I)),
            j.push(K)),
            1;
        I = 0;
        var te = q === "" ? "." : q + ":";
        if (Et(y))
            for (var pt = 0; pt < y.length; pt++)
                q = y[pt],
                ct = te + Qt(q, pt),
                I += Zt(q, j, L, ct, K);
        else if (pt = H(y),
        typeof pt == "function")
            for (y = pt.call(y),
            pt = 0; !(q = y.next()).done; )
                q = q.value,
                ct = te + Qt(q, pt++),
                I += Zt(q, j, L, ct, K);
        else if (ct === "object") {
            if (typeof y.then == "function")
                return Zt(Rl(y), j, L, q, K);
            throw j = String(y),
            Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.")
        }
        return I
    }
    function _(y, j, L) {
        if (y == null)
            return y;
        var q = []
          , K = 0;
        return Zt(y, q, "", "", function(ct) {
            return j.call(L, ct, K++)
        }),
        q
    }
    function Y(y) {
        if (y._status === -1) {
            var j = y._result;
            j = j(),
            j.then(function(L) {
                (y._status === 0 || y._status === -1) && (y._status = 1,
                y._result = L)
            }, function(L) {
                (y._status === 0 || y._status === -1) && (y._status = 2,
                y._result = L)
            }),
            y._status === -1 && (y._status = 0,
            y._result = j)
        }
        if (y._status === 1)
            return y._result.default;
        throw y._result
    }
    var k = typeof reportError == "function" ? reportError : function(y) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var j = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
                error: y
            });
            if (!window.dispatchEvent(j))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", y);
            return
        }
        console.error(y)
    }
    ;
    function vt() {}
    return et.Children = {
        map: _,
        forEach: function(y, j, L) {
            _(y, function() {
                j.apply(this, arguments)
            }, L)
        },
        count: function(y) {
            var j = 0;
            return _(y, function() {
                j++
            }),
            j
        },
        toArray: function(y) {
            return _(y, function(j) {
                return j
            }) || []
        },
        only: function(y) {
            if (!At(y))
                throw Error("React.Children.only expected to receive a single React element child.");
            return y
        }
    },
    et.Component = X,
    et.Fragment = s,
    et.Profiler = d,
    et.PureComponent = Q,
    et.StrictMode = f,
    et.Suspense = b,
    et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P,
    et.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(y) {
            return P.H.useMemoCache(y)
        }
    },
    et.cache = function(y) {
        return function() {
            return y.apply(null, arguments)
        }
    }
    ,
    et.cloneElement = function(y, j, L) {
        if (y == null)
            throw Error("The argument must be a React element, but you passed " + y + ".");
        var q = V({}, y.props)
          , K = y.key
          , ct = void 0;
        if (j != null)
            for (I in j.ref !== void 0 && (ct = void 0),
            j.key !== void 0 && (K = "" + j.key),
            j)
                !Ct.call(j, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && j.ref === void 0 || (q[I] = j[I]);
        var I = arguments.length - 2;
        if (I === 1)
            q.children = L;
        else if (1 < I) {
            for (var te = Array(I), pt = 0; pt < I; pt++)
                te[pt] = arguments[pt + 2];
            q.children = te
        }
        return _t(y.type, K, void 0, void 0, ct, q)
    }
    ,
    et.createContext = function(y) {
        return y = {
            $$typeof: E,
            _currentValue: y,
            _currentValue2: y,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        y.Provider = y,
        y.Consumer = {
            $$typeof: m,
            _context: y
        },
        y
    }
    ,
    et.createElement = function(y, j, L) {
        var q, K = {}, ct = null;
        if (j != null)
            for (q in j.key !== void 0 && (ct = "" + j.key),
            j)
                Ct.call(j, q) && q !== "key" && q !== "__self" && q !== "__source" && (K[q] = j[q]);
        var I = arguments.length - 2;
        if (I === 1)
            K.children = L;
        else if (1 < I) {
            for (var te = Array(I), pt = 0; pt < I; pt++)
                te[pt] = arguments[pt + 2];
            K.children = te
        }
        if (y && y.defaultProps)
            for (q in I = y.defaultProps,
            I)
                K[q] === void 0 && (K[q] = I[q]);
        return _t(y, ct, void 0, void 0, null, K)
    }
    ,
    et.createRef = function() {
        return {
            current: null
        }
    }
    ,
    et.forwardRef = function(y) {
        return {
            $$typeof: M,
            render: y
        }
    }
    ,
    et.isValidElement = At,
    et.lazy = function(y) {
        return {
            $$typeof: R,
            _payload: {
                _status: -1,
                _result: y
            },
            _init: Y
        }
    }
    ,
    et.memo = function(y, j) {
        return {
            $$typeof: v,
            type: y,
            compare: j === void 0 ? null : j
        }
    }
    ,
    et.startTransition = function(y) {
        var j = P.T
          , L = {};
        P.T = L;
        try {
            var q = y()
              , K = P.S;
            K !== null && K(L, q),
            typeof q == "object" && q !== null && typeof q.then == "function" && q.then(vt, k)
        } catch (ct) {
            k(ct)
        } finally {
            P.T = j
        }
    }
    ,
    et.unstable_useCacheRefresh = function() {
        return P.H.useCacheRefresh()
    }
    ,
    et.use = function(y) {
        return P.H.use(y)
    }
    ,
    et.useActionState = function(y, j, L) {
        return P.H.useActionState(y, j, L)
    }
    ,
    et.useCallback = function(y, j) {
        return P.H.useCallback(y, j)
    }
    ,
    et.useContext = function(y) {
        return P.H.useContext(y)
    }
    ,
    et.useDebugValue = function() {}
    ,
    et.useDeferredValue = function(y, j) {
        return P.H.useDeferredValue(y, j)
    }
    ,
    et.useEffect = function(y, j, L) {
        var q = P.H;
        if (typeof L == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return q.useEffect(y, j)
    }
    ,
    et.useId = function() {
        return P.H.useId()
    }
    ,
    et.useImperativeHandle = function(y, j, L) {
        return P.H.useImperativeHandle(y, j, L)
    }
    ,
    et.useInsertionEffect = function(y, j) {
        return P.H.useInsertionEffect(y, j)
    }
    ,
    et.useLayoutEffect = function(y, j) {
        return P.H.useLayoutEffect(y, j)
    }
    ,
    et.useMemo = function(y, j) {
        return P.H.useMemo(y, j)
    }
    ,
    et.useOptimistic = function(y, j) {
        return P.H.useOptimistic(y, j)
    }
    ,
    et.useReducer = function(y, j, L) {
        return P.H.useReducer(y, j, L)
    }
    ,
    et.useRef = function(y) {
        return P.H.useRef(y)
    }
    ,
    et.useState = function(y) {
        return P.H.useState(y)
    }
    ,
    et.useSyncExternalStore = function(y, j, L) {
        return P.H.useSyncExternalStore(y, j, L)
    }
    ,
    et.useTransition = function() {
        return P.H.useTransition()
    }
    ,
    et.version = "19.1.1",
    et
}
var Bd;
function Df() {
    return Bd || (Bd = 1,
    bf.exports = Lv()),
    bf.exports
}
var O = Df()
  , Ef = {
    exports: {}
}
  , Du = {}
  , Tf = {
    exports: {}
}
  , Af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd;
function Gv() {
    return qd || (qd = 1,
    (function(i) {
        function o(_, Y) {
            var k = _.length;
            _.push(Y);
            t: for (; 0 < k; ) {
                var vt = k - 1 >>> 1
                  , y = _[vt];
                if (0 < d(y, Y))
                    _[vt] = Y,
                    _[k] = y,
                    k = vt;
                else
                    break t
            }
        }
        function s(_) {
            return _.length === 0 ? null : _[0]
        }
        function f(_) {
            if (_.length === 0)
                return null;
            var Y = _[0]
              , k = _.pop();
            if (k !== Y) {
                _[0] = k;
                t: for (var vt = 0, y = _.length, j = y >>> 1; vt < j; ) {
                    var L = 2 * (vt + 1) - 1
                      , q = _[L]
                      , K = L + 1
                      , ct = _[K];
                    if (0 > d(q, k))
                        K < y && 0 > d(ct, q) ? (_[vt] = ct,
                        _[K] = k,
                        vt = K) : (_[vt] = q,
                        _[L] = k,
                        vt = L);
                    else if (K < y && 0 > d(ct, k))
                        _[vt] = ct,
                        _[K] = k,
                        vt = K;
                    else
                        break t
                }
            }
            return Y
        }
        function d(_, Y) {
            var k = _.sortIndex - Y.sortIndex;
            return k !== 0 ? k : _.id - Y.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var m = performance;
            i.unstable_now = function() {
                return m.now()
            }
        } else {
            var E = Date
              , M = E.now();
            i.unstable_now = function() {
                return E.now() - M
            }
        }
        var b = []
          , v = []
          , R = 1
          , C = null
          , H = 3
          , B = !1
          , V = !1
          , F = !1
          , X = !1
          , w = typeof setTimeout == "function" ? setTimeout : null
          , Q = typeof clearTimeout == "function" ? clearTimeout : null
          , tt = typeof setImmediate < "u" ? setImmediate : null;
        function Et(_) {
            for (var Y = s(v); Y !== null; ) {
                if (Y.callback === null)
                    f(v);
                else if (Y.startTime <= _)
                    f(v),
                    Y.sortIndex = Y.expirationTime,
                    o(b, Y);
                else
                    break;
                Y = s(v)
            }
        }
        function P(_) {
            if (F = !1,
            Et(_),
            !V)
                if (s(b) !== null)
                    V = !0,
                    Ct || (Ct = !0,
                    Qt());
                else {
                    var Y = s(v);
                    Y !== null && Zt(P, Y.startTime - _)
                }
        }
        var Ct = !1
          , _t = -1
          , jt = 5
          , At = -1;
        function It() {
            return X ? !0 : !(i.unstable_now() - At < jt)
        }
        function oe() {
            if (X = !1,
            Ct) {
                var _ = i.unstable_now();
                At = _;
                var Y = !0;
                try {
                    t: {
                        V = !1,
                        F && (F = !1,
                        Q(_t),
                        _t = -1),
                        B = !0;
                        var k = H;
                        try {
                            e: {
                                for (Et(_),
                                C = s(b); C !== null && !(C.expirationTime > _ && It()); ) {
                                    var vt = C.callback;
                                    if (typeof vt == "function") {
                                        C.callback = null,
                                        H = C.priorityLevel;
                                        var y = vt(C.expirationTime <= _);
                                        if (_ = i.unstable_now(),
                                        typeof y == "function") {
                                            C.callback = y,
                                            Et(_),
                                            Y = !0;
                                            break e
                                        }
                                        C === s(b) && f(b),
                                        Et(_)
                                    } else
                                        f(b);
                                    C = s(b)
                                }
                                if (C !== null)
                                    Y = !0;
                                else {
                                    var j = s(v);
                                    j !== null && Zt(P, j.startTime - _),
                                    Y = !1
                                }
                            }
                            break t
                        } finally {
                            C = null,
                            H = k,
                            B = !1
                        }
                        Y = void 0
                    }
                } finally {
                    Y ? Qt() : Ct = !1
                }
            }
        }
        var Qt;
        if (typeof tt == "function")
            Qt = function() {
                tt(oe)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Al = new MessageChannel
              , Rl = Al.port2;
            Al.port1.onmessage = oe,
            Qt = function() {
                Rl.postMessage(null)
            }
        } else
            Qt = function() {
                w(oe, 0)
            }
            ;
        function Zt(_, Y) {
            _t = w(function() {
                _(i.unstable_now())
            }, Y)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(_) {
            _.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(_) {
            0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jt = 0 < _ ? Math.floor(1e3 / _) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return H
        }
        ,
        i.unstable_next = function(_) {
            switch (H) {
            case 1:
            case 2:
            case 3:
                var Y = 3;
                break;
            default:
                Y = H
            }
            var k = H;
            H = Y;
            try {
                return _()
            } finally {
                H = k
            }
        }
        ,
        i.unstable_requestPaint = function() {
            X = !0
        }
        ,
        i.unstable_runWithPriority = function(_, Y) {
            switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                _ = 3
            }
            var k = H;
            H = _;
            try {
                return Y()
            } finally {
                H = k
            }
        }
        ,
        i.unstable_scheduleCallback = function(_, Y, k) {
            var vt = i.unstable_now();
            switch (typeof k == "object" && k !== null ? (k = k.delay,
            k = typeof k == "number" && 0 < k ? vt + k : vt) : k = vt,
            _) {
            case 1:
                var y = -1;
                break;
            case 2:
                y = 250;
                break;
            case 5:
                y = 1073741823;
                break;
            case 4:
                y = 1e4;
                break;
            default:
                y = 5e3
            }
            return y = k + y,
            _ = {
                id: R++,
                callback: Y,
                priorityLevel: _,
                startTime: k,
                expirationTime: y,
                sortIndex: -1
            },
            k > vt ? (_.sortIndex = k,
            o(v, _),
            s(b) === null && _ === s(v) && (F ? (Q(_t),
            _t = -1) : F = !0,
            Zt(P, k - vt))) : (_.sortIndex = y,
            o(b, _),
            V || B || (V = !0,
            Ct || (Ct = !0,
            Qt()))),
            _
        }
        ,
        i.unstable_shouldYield = It,
        i.unstable_wrapCallback = function(_) {
            var Y = H;
            return function() {
                var k = H;
                H = Y;
                try {
                    return _.apply(this, arguments)
                } finally {
                    H = k
                }
            }
        }
    }
    )(Af)),
    Af
}
var Yd;
function Xv() {
    return Yd || (Yd = 1,
    Tf.exports = Gv()),
    Tf.exports
}
var Rf = {
    exports: {}
}
  , Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function Qv() {
    if (Ld)
        return Kt;
    Ld = 1;
    var i = Df();
    function o(b) {
        var v = "https://react.dev/errors/" + b;
        if (1 < arguments.length) {
            v += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var R = 2; R < arguments.length; R++)
                v += "&args[]=" + encodeURIComponent(arguments[R])
        }
        return "Minified React error #" + b + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var f = {
        d: {
            f: s,
            r: function() {
                throw Error(o(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , d = Symbol.for("react.portal");
    function m(b, v, R) {
        var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: d,
            key: C == null ? null : "" + C,
            children: b,
            containerInfo: v,
            implementation: R
        }
    }
    var E = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function M(b, v) {
        if (b === "font")
            return "";
        if (typeof v == "string")
            return v === "use-credentials" ? v : ""
    }
    return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f,
    Kt.createPortal = function(b, v) {
        var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
            throw Error(o(299));
        return m(b, v, null, R)
    }
    ,
    Kt.flushSync = function(b) {
        var v = E.T
          , R = f.p;
        try {
            if (E.T = null,
            f.p = 2,
            b)
                return b()
        } finally {
            E.T = v,
            f.p = R,
            f.d.f()
        }
    }
    ,
    Kt.preconnect = function(b, v) {
        typeof b == "string" && (v ? (v = v.crossOrigin,
        v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null,
        f.d.C(b, v))
    }
    ,
    Kt.prefetchDNS = function(b) {
        typeof b == "string" && f.d.D(b)
    }
    ,
    Kt.preinit = function(b, v) {
        if (typeof b == "string" && v && typeof v.as == "string") {
            var R = v.as
              , C = M(R, v.crossOrigin)
              , H = typeof v.integrity == "string" ? v.integrity : void 0
              , B = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
            R === "style" ? f.d.S(b, typeof v.precedence == "string" ? v.precedence : void 0, {
                crossOrigin: C,
                integrity: H,
                fetchPriority: B
            }) : R === "script" && f.d.X(b, {
                crossOrigin: C,
                integrity: H,
                fetchPriority: B,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0
            })
        }
    }
    ,
    Kt.preinitModule = function(b, v) {
        if (typeof b == "string")
            if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var R = M(v.as, v.crossOrigin);
                    f.d.M(b, {
                        crossOrigin: R,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    })
                }
            } else
                v == null && f.d.M(b)
    }
    ,
    Kt.preload = function(b, v) {
        if (typeof b == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
            var R = v.as
              , C = M(R, v.crossOrigin);
            f.d.L(b, R, {
                crossOrigin: C,
                integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                type: typeof v.type == "string" ? v.type : void 0,
                fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                media: typeof v.media == "string" ? v.media : void 0
            })
        }
    }
    ,
    Kt.preloadModule = function(b, v) {
        if (typeof b == "string")
            if (v) {
                var R = M(v.as, v.crossOrigin);
                f.d.m(b, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: R,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                })
            } else
                f.d.m(b)
    }
    ,
    Kt.requestFormReset = function(b) {
        f.d.r(b)
    }
    ,
    Kt.unstable_batchedUpdates = function(b, v) {
        return b(v)
    }
    ,
    Kt.useFormState = function(b, v, R) {
        return E.H.useFormState(b, v, R)
    }
    ,
    Kt.useFormStatus = function() {
        return E.H.useHostTransitionStatus()
    }
    ,
    Kt.version = "19.1.1",
    Kt
}
var Gd;
function Zv() {
    if (Gd)
        return Rf.exports;
    Gd = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (o) {
                console.error(o)
            }
    }
    return i(),
    Rf.exports = Qv(),
    Rf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function Vv() {
    if (Xd)
        return Du;
    Xd = 1;
    var i = Xv()
      , o = Df()
      , s = Zv();
    function f(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                e += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function d(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function m(t) {
        var e = t
          , l = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (l = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? l : null
    }
    function E(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function M(t) {
        if (m(t) !== t)
            throw Error(f(188))
    }
    function b(t) {
        var e = t.alternate;
        if (!e) {
            if (e = m(t),
            e === null)
                throw Error(f(188));
            return e !== t ? null : t
        }
        for (var l = t, a = e; ; ) {
            var u = l.return;
            if (u === null)
                break;
            var n = u.alternate;
            if (n === null) {
                if (a = u.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n; ) {
                    if (n === l)
                        return M(u),
                        t;
                    if (n === a)
                        return M(u),
                        e;
                    n = n.sibling
                }
                throw Error(f(188))
            }
            if (l.return !== a.return)
                l = u,
                a = n;
            else {
                for (var c = !1, r = u.child; r; ) {
                    if (r === l) {
                        c = !0,
                        l = u,
                        a = n;
                        break
                    }
                    if (r === a) {
                        c = !0,
                        a = u,
                        l = n;
                        break
                    }
                    r = r.sibling
                }
                if (!c) {
                    for (r = n.child; r; ) {
                        if (r === l) {
                            c = !0,
                            l = n,
                            a = u;
                            break
                        }
                        if (r === a) {
                            c = !0,
                            a = n,
                            l = u;
                            break
                        }
                        r = r.sibling
                    }
                    if (!c)
                        throw Error(f(189))
                }
            }
            if (l.alternate !== a)
                throw Error(f(190))
        }
        if (l.tag !== 3)
            throw Error(f(188));
        return l.stateNode.current === l ? t : e
    }
    function v(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = v(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var R = Object.assign
      , C = Symbol.for("react.element")
      , H = Symbol.for("react.transitional.element")
      , B = Symbol.for("react.portal")
      , V = Symbol.for("react.fragment")
      , F = Symbol.for("react.strict_mode")
      , X = Symbol.for("react.profiler")
      , w = Symbol.for("react.provider")
      , Q = Symbol.for("react.consumer")
      , tt = Symbol.for("react.context")
      , Et = Symbol.for("react.forward_ref")
      , P = Symbol.for("react.suspense")
      , Ct = Symbol.for("react.suspense_list")
      , _t = Symbol.for("react.memo")
      , jt = Symbol.for("react.lazy")
      , At = Symbol.for("react.activity")
      , It = Symbol.for("react.memo_cache_sentinel")
      , oe = Symbol.iterator;
    function Qt(t) {
        return t === null || typeof t != "object" ? null : (t = oe && t[oe] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Al = Symbol.for("react.client.reference");
    function Rl(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Al ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case V:
            return "Fragment";
        case X:
            return "Profiler";
        case F:
            return "StrictMode";
        case P:
            return "Suspense";
        case Ct:
            return "SuspenseList";
        case At:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case B:
                return "Portal";
            case tt:
                return (t.displayName || "Context") + ".Provider";
            case Q:
                return (t._context.displayName || "Context") + ".Consumer";
            case Et:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case _t:
                return e = t.displayName || null,
                e !== null ? e : Rl(t.type) || "Memo";
            case jt:
                e = t._payload,
                t = t._init;
                try {
                    return Rl(t(e))
                } catch {}
            }
        return null
    }
    var Zt = Array.isArray
      , _ = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Y = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , k = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , vt = []
      , y = -1;
    function j(t) {
        return {
            current: t
        }
    }
    function L(t) {
        0 > y || (t.current = vt[y],
        vt[y] = null,
        y--)
    }
    function q(t, e) {
        y++,
        vt[y] = t.current,
        t.current = e
    }
    var K = j(null)
      , ct = j(null)
      , I = j(null)
      , te = j(null);
    function pt(t, e) {
        switch (q(I, e),
        q(ct, t),
        q(K, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? cd(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = cd(e),
                t = fd(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        L(K),
        q(K, t)
    }
    function Fe() {
        L(K),
        L(ct),
        L(I)
    }
    function ai(t) {
        t.memoizedState !== null && q(te, t);
        var e = K.current
          , l = fd(e, t.type);
        e !== l && (q(ct, t),
        q(K, l))
    }
    function ju(t) {
        ct.current === t && (L(K),
        L(ct)),
        te.current === t && (L(te),
        Au._currentValue = k)
    }
    var ui = Object.prototype.hasOwnProperty
      , ni = i.unstable_scheduleCallback
      , ii = i.unstable_cancelCallback
      , vh = i.unstable_shouldYield
      , yh = i.unstable_requestPaint
      , ze = i.unstable_now
      , gh = i.unstable_getCurrentPriorityLevel
      , Gf = i.unstable_ImmediatePriority
      , Xf = i.unstable_UserBlockingPriority
      , Hu = i.unstable_NormalPriority
      , ph = i.unstable_LowPriority
      , Qf = i.unstable_IdlePriority
      , Sh = i.log
      , bh = i.unstable_setDisableYieldValue
      , Ua = null
      , ee = null;
    function Pe(t) {
        if (typeof Sh == "function" && bh(t),
        ee && typeof ee.setStrictMode == "function")
            try {
                ee.setStrictMode(Ua, t)
            } catch {}
    }
    var le = Math.clz32 ? Math.clz32 : Ah
      , Eh = Math.log
      , Th = Math.LN2;
    function Ah(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (Eh(t) / Th | 0) | 0
    }
    var Bu = 256
      , qu = 4194304;
    function xl(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
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
            return 64;
        case 128:
            return 128;
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
            return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function Yu(t, e, l) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var u = 0
          , n = t.suspendedLanes
          , c = t.pingedLanes;
        t = t.warmLanes;
        var r = a & 134217727;
        return r !== 0 ? (a = r & ~n,
        a !== 0 ? u = xl(a) : (c &= r,
        c !== 0 ? u = xl(c) : l || (l = r & ~t,
        l !== 0 && (u = xl(l))))) : (r = a & ~n,
        r !== 0 ? u = xl(r) : c !== 0 ? u = xl(c) : l || (l = a & ~t,
        l !== 0 && (u = xl(l)))),
        u === 0 ? 0 : e !== 0 && e !== u && (e & n) === 0 && (n = u & -u,
        l = e & -e,
        n >= l || n === 32 && (l & 4194048) !== 0) ? e : u
    }
    function Na(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Rh(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
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
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Zf() {
        var t = Bu;
        return Bu <<= 1,
        (Bu & 4194048) === 0 && (Bu = 256),
        t
    }
    function Vf() {
        var t = qu;
        return qu <<= 1,
        (qu & 62914560) === 0 && (qu = 4194304),
        t
    }
    function ci(t) {
        for (var e = [], l = 0; 31 > l; l++)
            e.push(t);
        return e
    }
    function Ca(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function xh(t, e, l, a, u, n) {
        var c = t.pendingLanes;
        t.pendingLanes = l,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= l,
        t.entangledLanes &= l,
        t.errorRecoveryDisabledLanes &= l,
        t.shellSuspendCounter = 0;
        var r = t.entanglements
          , h = t.expirationTimes
          , T = t.hiddenUpdates;
        for (l = c & ~l; 0 < l; ) {
            var D = 31 - le(l)
              , N = 1 << D;
            r[D] = 0,
            h[D] = -1;
            var A = T[D];
            if (A !== null)
                for (T[D] = null,
                D = 0; D < A.length; D++) {
                    var x = A[D];
                    x !== null && (x.lane &= -536870913)
                }
            l &= ~N
        }
        a !== 0 && wf(t, a, 0),
        n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~e))
    }
    function wf(t, e, l) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var a = 31 - le(e);
        t.entangledLanes |= e,
        t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 4194090
    }
    function Kf(t, e) {
        var l = t.entangledLanes |= e;
        for (t = t.entanglements; l; ) {
            var a = 31 - le(l)
              , u = 1 << a;
            u & e | t[a] & e && (t[a] |= e),
            l &= ~u
        }
    }
    function fi(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
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
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function ri(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Jf() {
        var t = Y.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Od(t.type))
    }
    function zh(t, e) {
        var l = Y.p;
        try {
            return Y.p = t,
            e()
        } finally {
            Y.p = l
        }
    }
    var Ie = Math.random().toString(36).slice(2)
      , Vt = "__reactFiber$" + Ie
      , $t = "__reactProps$" + Ie
      , Zl = "__reactContainer$" + Ie
      , oi = "__reactEvents$" + Ie
      , Oh = "__reactListeners$" + Ie
      , Mh = "__reactHandles$" + Ie
      , $f = "__reactResources$" + Ie
      , ja = "__reactMarker$" + Ie;
    function si(t) {
        delete t[Vt],
        delete t[$t],
        delete t[oi],
        delete t[Oh],
        delete t[Mh]
    }
    function Vl(t) {
        var e = t[Vt];
        if (e)
            return e;
        for (var l = t.parentNode; l; ) {
            if (e = l[Zl] || l[Vt]) {
                if (l = e.alternate,
                e.child !== null || l !== null && l.child !== null)
                    for (t = dd(t); t !== null; ) {
                        if (l = t[Vt])
                            return l;
                        t = dd(t)
                    }
                return e
            }
            t = l,
            l = t.parentNode
        }
        return null
    }
    function wl(t) {
        if (t = t[Vt] || t[Zl]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Ha(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(f(33))
    }
    function Kl(t) {
        var e = t[$f];
        return e || (e = t[$f] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function Ht(t) {
        t[ja] = !0
    }
    var kf = new Set
      , Wf = {};
    function zl(t, e) {
        Jl(t, e),
        Jl(t + "Capture", e)
    }
    function Jl(t, e) {
        for (Wf[t] = e,
        t = 0; t < e.length; t++)
            kf.add(e[t])
    }
    var Dh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Ff = {}
      , Pf = {};
    function _h(t) {
        return ui.call(Pf, t) ? !0 : ui.call(Ff, t) ? !1 : Dh.test(t) ? Pf[t] = !0 : (Ff[t] = !0,
        !1)
    }
    function Lu(t, e, l) {
        if (_h(e))
            if (l === null)
                t.removeAttribute(e);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var a = e.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + l)
            }
    }
    function Gu(t, e, l) {
        if (l === null)
            t.removeAttribute(e);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + l)
        }
    }
    function Ce(t, e, l, a) {
        if (a === null)
            t.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(l);
                return
            }
            t.setAttributeNS(e, l, "" + a)
        }
    }
    var di, If;
    function $l(t) {
        if (di === void 0)
            try {
                throw Error()
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/);
                di = e && e[1] || "",
                If = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + di + t + If
    }
    var hi = !1;
    function mi(t, e) {
        if (!t || hi)
            return "";
        hi = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var N = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(N.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(N, [])
                                } catch (x) {
                                    var A = x
                                }
                                Reflect.construct(t, [], N)
                            } else {
                                try {
                                    N.call()
                                } catch (x) {
                                    A = x
                                }
                                t.call(N.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (x) {
                                A = x
                            }
                            (N = t()) && typeof N.catch == "function" && N.catch(function() {})
                        }
                    } catch (x) {
                        if (x && A && typeof x.stack == "string")
                            return [x.stack, A.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot()
              , c = n[0]
              , r = n[1];
            if (c && r) {
                var h = c.split(`
`)
                  , T = r.split(`
`);
                for (u = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; u < T.length && !T[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (a === h.length || u === T.length)
                    for (a = h.length - 1,
                    u = T.length - 1; 1 <= a && 0 <= u && h[a] !== T[u]; )
                        u--;
                for (; 1 <= a && 0 <= u; a--,
                u--)
                    if (h[a] !== T[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--,
                                u--,
                                0 > u || h[a] !== T[u]) {
                                    var D = `
` + h[a].replace(" at new ", " at ");
                                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)),
                                    D
                                }
                            while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            hi = !1,
            Error.prepareStackTrace = l
        }
        return (l = t ? t.displayName || t.name : "") ? $l(l) : ""
    }
    function Uh(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return $l(t.type);
        case 16:
            return $l("Lazy");
        case 13:
            return $l("Suspense");
        case 19:
            return $l("SuspenseList");
        case 0:
        case 15:
            return mi(t.type, !1);
        case 11:
            return mi(t.type.render, !1);
        case 1:
            return mi(t.type, !0);
        case 31:
            return $l("Activity");
        default:
            return ""
        }
    }
    function tr(t) {
        try {
            var e = "";
            do
                e += Uh(t),
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    function se(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function er(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Nh(t) {
        var e = er(t) ? "checked" : "value"
          , l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
          , a = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var u = l.get
              , n = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(c) {
                    a = "" + c,
                    n.call(this, c)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(c) {
                    a = "" + c
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Xu(t) {
        t._valueTracker || (t._valueTracker = Nh(t))
    }
    function lr(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var l = e.getValue()
          , a = "";
        return t && (a = er(t) ? t.checked ? "true" : "false" : t.value),
        t = a,
        t !== l ? (e.setValue(t),
        !0) : !1
    }
    function Qu(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Ch = /[\n"\\]/g;
    function de(t) {
        return t.replace(Ch, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function vi(t, e, l, a, u, n, c, r) {
        t.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"),
        e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + se(e)) : t.value !== "" + se(e) && (t.value = "" + se(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"),
        e != null ? yi(t, c, se(e)) : l != null ? yi(t, c, se(l)) : a != null && t.removeAttribute("value"),
        u == null && n != null && (t.defaultChecked = !!n),
        u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"),
        r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + se(r) : t.removeAttribute("name")
    }
    function ar(t, e, l, a, u, n, c, r) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n),
        e != null || l != null) {
            if (!(n !== "submit" && n !== "reset" || e != null))
                return;
            l = l != null ? "" + se(l) : "",
            e = e != null ? "" + se(e) : l,
            r || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        a = a ?? u,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        t.checked = r ? t.checked : !!a,
        t.defaultChecked = !!a,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c)
    }
    function yi(t, e, l) {
        e === "number" && Qu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
    }
    function kl(t, e, l, a) {
        if (t = t.options,
        e) {
            e = {};
            for (var u = 0; u < l.length; u++)
                e["$" + l[u]] = !0;
            for (l = 0; l < t.length; l++)
                u = e.hasOwnProperty("$" + t[l].value),
                t[l].selected !== u && (t[l].selected = u),
                u && a && (t[l].defaultSelected = !0)
        } else {
            for (l = "" + se(l),
            e = null,
            u = 0; u < t.length; u++) {
                if (t[u].value === l) {
                    t[u].selected = !0,
                    a && (t[u].defaultSelected = !0);
                    return
                }
                e !== null || t[u].disabled || (e = t[u])
            }
            e !== null && (e.selected = !0)
        }
    }
    function ur(t, e, l) {
        if (e != null && (e = "" + se(e),
        e !== t.value && (t.value = e),
        l == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = l != null ? "" + se(l) : ""
    }
    function nr(t, e, l, a) {
        if (e == null) {
            if (a != null) {
                if (l != null)
                    throw Error(f(92));
                if (Zt(a)) {
                    if (1 < a.length)
                        throw Error(f(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            e = l
        }
        l = se(e),
        t.defaultValue = l,
        a = t.textContent,
        a === l && a !== "" && a !== null && (t.value = a)
    }
    function Wl(t, e) {
        if (e) {
            var l = t.firstChild;
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var jh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function ir(t, e, l) {
        var a = e.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || jh.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
    }
    function cr(t, e, l) {
        if (e != null && typeof e != "object")
            throw Error(f(62));
        if (t = t.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var u in e)
                a = e[u],
                e.hasOwnProperty(u) && l[u] !== a && ir(t, u, a)
        } else
            for (var n in e)
                e.hasOwnProperty(n) && ir(t, n, e[n])
    }
    function gi(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
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
            return !0
        }
    }
    var Hh = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Bh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Zu(t) {
        return Bh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var pi = null;
    function Si(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Fl = null
      , Pl = null;
    function fr(t) {
        var e = wl(t);
        if (e && (t = e.stateNode)) {
            var l = t[$t] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (vi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                e = l.name,
                l.type === "radio" && e != null) {
                    for (l = t; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + de("" + e) + '"][type="radio"]'),
                    e = 0; e < l.length; e++) {
                        var a = l[e];
                        if (a !== t && a.form === t.form) {
                            var u = a[$t] || null;
                            if (!u)
                                throw Error(f(90));
                            vi(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (e = 0; e < l.length; e++)
                        a = l[e],
                        a.form === t.form && lr(a)
                }
                break t;
            case "textarea":
                ur(t, l.value, l.defaultValue);
                break t;
            case "select":
                e = l.value,
                e != null && kl(t, !!l.multiple, e, !1)
            }
        }
    }
    var bi = !1;
    function rr(t, e, l) {
        if (bi)
            return t(e, l);
        bi = !0;
        try {
            var a = t(e);
            return a
        } finally {
            if (bi = !1,
            (Fl !== null || Pl !== null) && (Dn(),
            Fl && (e = Fl,
            t = Pl,
            Pl = Fl = null,
            fr(e),
            t)))
                for (e = 0; e < t.length; e++)
                    fr(t[e])
        }
    }
    function Ba(t, e) {
        var l = t.stateNode;
        if (l === null)
            return null;
        var a = l[$t] || null;
        if (a === null)
            return null;
        l = a[e];
        t: switch (e) {
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
            (a = !a.disabled) || (t = t.type,
            a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !a;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (l && typeof l != "function")
            throw Error(f(231, e, typeof l));
        return l
    }
    var je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Ei = !1;
    if (je)
        try {
            var qa = {};
            Object.defineProperty(qa, "passive", {
                get: function() {
                    Ei = !0
                }
            }),
            window.addEventListener("test", qa, qa),
            window.removeEventListener("test", qa, qa)
        } catch {
            Ei = !1
        }
    var tl = null
      , Ti = null
      , Vu = null;
    function or() {
        if (Vu)
            return Vu;
        var t, e = Ti, l = e.length, a, u = "value"in tl ? tl.value : tl.textContent, n = u.length;
        for (t = 0; t < l && e[t] === u[t]; t++)
            ;
        var c = l - t;
        for (a = 1; a <= c && e[l - a] === u[n - a]; a++)
            ;
        return Vu = u.slice(t, 1 < a ? 1 - a : void 0)
    }
    function wu(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Ku() {
        return !0
    }
    function sr() {
        return !1
    }
    function kt(t) {
        function e(l, a, u, n, c) {
            this._reactName = l,
            this._targetInst = u,
            this.type = a,
            this.nativeEvent = n,
            this.target = c,
            this.currentTarget = null;
            for (var r in t)
                t.hasOwnProperty(r) && (l = t[r],
                this[r] = l ? l(n) : n[r]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ku : sr,
            this.isPropagationStopped = sr,
            this
        }
        return R(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = Ku)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = Ku)
            },
            persist: function() {},
            isPersistent: Ku
        }),
        e
    }
    var Ol = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Ju = kt(Ol), Ya = R({}, Ol, {
        view: 0,
        detail: 0
    }), qh = kt(Ya), Ai, Ri, La, $u = R({}, Ya, {
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
        getModifierState: zi,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== La && (La && t.type === "mousemove" ? (Ai = t.screenX - La.screenX,
            Ri = t.screenY - La.screenY) : Ri = Ai = 0,
            La = t),
            Ai)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Ri
        }
    }), dr = kt($u), Yh = R({}, $u, {
        dataTransfer: 0
    }), Lh = kt(Yh), Gh = R({}, Ya, {
        relatedTarget: 0
    }), xi = kt(Gh), Xh = R({}, Ol, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Qh = kt(Xh), Zh = R({}, Ol, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Vh = kt(Zh), wh = R({}, Ol, {
        data: 0
    }), hr = kt(wh), Kh = {
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
        MozPrintableKey: "Unidentified"
    }, Jh = {
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
        224: "Meta"
    }, $h = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function kh(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = $h[t]) ? !!e[t] : !1
    }
    function zi() {
        return kh
    }
    var Wh = R({}, Ya, {
        key: function(t) {
            if (t.key) {
                var e = Kh[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = wu(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Jh[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: zi,
        charCode: function(t) {
            return t.type === "keypress" ? wu(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? wu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Fh = kt(Wh)
      , Ph = R({}, $u, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , mr = kt(Ph)
      , Ih = R({}, Ya, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: zi
    })
      , tm = kt(Ih)
      , em = R({}, Ol, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , lm = kt(em)
      , am = R({}, $u, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , um = kt(am)
      , nm = R({}, Ol, {
        newState: 0,
        oldState: 0
    })
      , im = kt(nm)
      , cm = [9, 13, 27, 32]
      , Oi = je && "CompositionEvent"in window
      , Ga = null;
    je && "documentMode"in document && (Ga = document.documentMode);
    var fm = je && "TextEvent"in window && !Ga
      , vr = je && (!Oi || Ga && 8 < Ga && 11 >= Ga)
      , yr = " "
      , gr = !1;
    function pr(t, e) {
        switch (t) {
        case "keyup":
            return cm.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Sr(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Il = !1;
    function rm(t, e) {
        switch (t) {
        case "compositionend":
            return Sr(e);
        case "keypress":
            return e.which !== 32 ? null : (gr = !0,
            yr);
        case "textInput":
            return t = e.data,
            t === yr && gr ? null : t;
        default:
            return null
        }
    }
    function om(t, e) {
        if (Il)
            return t === "compositionend" || !Oi && pr(t, e) ? (t = or(),
            Vu = Ti = tl = null,
            Il = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return vr && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var sm = {
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
        week: !0
    };
    function br(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!sm[t.type] : e === "textarea"
    }
    function Er(t, e, l, a) {
        Fl ? Pl ? Pl.push(a) : Pl = [a] : Fl = a,
        e = Hn(e, "onChange"),
        0 < e.length && (l = new Ju("onChange","change",null,l,a),
        t.push({
            event: l,
            listeners: e
        }))
    }
    var Xa = null
      , Qa = null;
    function dm(t) {
        ld(t, 0)
    }
    function ku(t) {
        var e = Ha(t);
        if (lr(e))
            return t
    }
    function Tr(t, e) {
        if (t === "change")
            return e
    }
    var Ar = !1;
    if (je) {
        var Mi;
        if (je) {
            var Di = "oninput"in document;
            if (!Di) {
                var Rr = document.createElement("div");
                Rr.setAttribute("oninput", "return;"),
                Di = typeof Rr.oninput == "function"
            }
            Mi = Di
        } else
            Mi = !1;
        Ar = Mi && (!document.documentMode || 9 < document.documentMode)
    }
    function xr() {
        Xa && (Xa.detachEvent("onpropertychange", zr),
        Qa = Xa = null)
    }
    function zr(t) {
        if (t.propertyName === "value" && ku(Qa)) {
            var e = [];
            Er(e, Qa, t, Si(t)),
            rr(dm, e)
        }
    }
    function hm(t, e, l) {
        t === "focusin" ? (xr(),
        Xa = e,
        Qa = l,
        Xa.attachEvent("onpropertychange", zr)) : t === "focusout" && xr()
    }
    function mm(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return ku(Qa)
    }
    function vm(t, e) {
        if (t === "click")
            return ku(e)
    }
    function ym(t, e) {
        if (t === "input" || t === "change")
            return ku(e)
    }
    function gm(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var ae = typeof Object.is == "function" ? Object.is : gm;
    function Za(t, e) {
        if (ae(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var l = Object.keys(t)
          , a = Object.keys(e);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var u = l[a];
            if (!ui.call(e, u) || !ae(t[u], e[u]))
                return !1
        }
        return !0
    }
    function Or(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Mr(t, e) {
        var l = Or(t);
        t = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = t + l.textContent.length,
                t <= e && a >= e)
                    return {
                        node: l,
                        offset: e - t
                    };
                t = a
            }
            t: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break t
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Or(l)
        }
    }
    function Dr(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Dr(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function _r(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Qu(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var l = typeof e.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                t = e.contentWindow;
            else
                break;
            e = Qu(t.document)
        }
        return e
    }
    function _i(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var pm = je && "documentMode"in document && 11 >= document.documentMode
      , ta = null
      , Ui = null
      , Va = null
      , Ni = !1;
    function Ur(t, e, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Ni || ta == null || ta !== Qu(a) || (a = ta,
        "selectionStart"in a && _i(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Va && Za(Va, a) || (Va = a,
        a = Hn(Ui, "onSelect"),
        0 < a.length && (e = new Ju("onSelect","select",null,e,l),
        t.push({
            event: e,
            listeners: a
        }),
        e.target = ta)))
    }
    function Ml(t, e) {
        var l = {};
        return l[t.toLowerCase()] = e.toLowerCase(),
        l["Webkit" + t] = "webkit" + e,
        l["Moz" + t] = "moz" + e,
        l
    }
    var ea = {
        animationend: Ml("Animation", "AnimationEnd"),
        animationiteration: Ml("Animation", "AnimationIteration"),
        animationstart: Ml("Animation", "AnimationStart"),
        transitionrun: Ml("Transition", "TransitionRun"),
        transitionstart: Ml("Transition", "TransitionStart"),
        transitioncancel: Ml("Transition", "TransitionCancel"),
        transitionend: Ml("Transition", "TransitionEnd")
    }
      , Ci = {}
      , Nr = {};
    je && (Nr = document.createElement("div").style,
    "AnimationEvent"in window || (delete ea.animationend.animation,
    delete ea.animationiteration.animation,
    delete ea.animationstart.animation),
    "TransitionEvent"in window || delete ea.transitionend.transition);
    function Dl(t) {
        if (Ci[t])
            return Ci[t];
        if (!ea[t])
            return t;
        var e = ea[t], l;
        for (l in e)
            if (e.hasOwnProperty(l) && l in Nr)
                return Ci[t] = e[l];
        return t
    }
    var Cr = Dl("animationend")
      , jr = Dl("animationiteration")
      , Hr = Dl("animationstart")
      , Sm = Dl("transitionrun")
      , bm = Dl("transitionstart")
      , Em = Dl("transitioncancel")
      , Br = Dl("transitionend")
      , qr = new Map
      , ji = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ji.push("scrollEnd");
    function Ee(t, e) {
        qr.set(t, e),
        zl(e, [t])
    }
    var Yr = new WeakMap;
    function he(t, e) {
        if (typeof t == "object" && t !== null) {
            var l = Yr.get(t);
            return l !== void 0 ? l : (e = {
                value: t,
                source: e,
                stack: tr(e)
            },
            Yr.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: tr(e)
        }
    }
    var me = []
      , la = 0
      , Hi = 0;
    function Wu() {
        for (var t = la, e = Hi = la = 0; e < t; ) {
            var l = me[e];
            me[e++] = null;
            var a = me[e];
            me[e++] = null;
            var u = me[e];
            me[e++] = null;
            var n = me[e];
            if (me[e++] = null,
            a !== null && u !== null) {
                var c = a.pending;
                c === null ? u.next = u : (u.next = c.next,
                c.next = u),
                a.pending = u
            }
            n !== 0 && Lr(l, u, n)
        }
    }
    function Fu(t, e, l, a) {
        me[la++] = t,
        me[la++] = e,
        me[la++] = l,
        me[la++] = a,
        Hi |= a,
        t.lanes |= a,
        t = t.alternate,
        t !== null && (t.lanes |= a)
    }
    function Bi(t, e, l, a) {
        return Fu(t, e, l, a),
        Pu(t)
    }
    function aa(t, e) {
        return Fu(t, null, null, e),
        Pu(t)
    }
    function Lr(t, e, l) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l);
        for (var u = !1, n = t.return; n !== null; )
            n.childLanes |= l,
            a = n.alternate,
            a !== null && (a.childLanes |= l),
            n.tag === 22 && (t = n.stateNode,
            t === null || t._visibility & 1 || (u = !0)),
            t = n,
            n = n.return;
        return t.tag === 3 ? (n = t.stateNode,
        u && e !== null && (u = 31 - le(l),
        t = n.hiddenUpdates,
        a = t[u],
        a === null ? t[u] = [e] : a.push(e),
        e.lane = l | 536870912),
        n) : null
    }
    function Pu(t) {
        if (50 < vu)
            throw vu = 0,
            Qc = null,
            Error(f(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var ua = {};
    function Tm(t, e, l, a) {
        this.tag = t,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function ue(t, e, l, a) {
        return new Tm(t,e,l,a)
    }
    function qi(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function He(t, e) {
        var l = t.alternate;
        return l === null ? (l = ue(t.tag, e, t.key, t.mode),
        l.elementType = t.elementType,
        l.type = t.type,
        l.stateNode = t.stateNode,
        l.alternate = t,
        t.alternate = l) : (l.pendingProps = e,
        l.type = t.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = t.flags & 65011712,
        l.childLanes = t.childLanes,
        l.lanes = t.lanes,
        l.child = t.child,
        l.memoizedProps = t.memoizedProps,
        l.memoizedState = t.memoizedState,
        l.updateQueue = t.updateQueue,
        e = t.dependencies,
        l.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        l.sibling = t.sibling,
        l.index = t.index,
        l.ref = t.ref,
        l.refCleanup = t.refCleanup,
        l
    }
    function Gr(t, e) {
        t.flags &= 65011714;
        var l = t.alternate;
        return l === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = l.childLanes,
        t.lanes = l.lanes,
        t.child = l.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = l.memoizedProps,
        t.memoizedState = l.memoizedState,
        t.updateQueue = l.updateQueue,
        t.type = l.type,
        e = l.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Iu(t, e, l, a, u, n) {
        var c = 0;
        if (a = t,
        typeof t == "function")
            qi(t) && (c = 1);
        else if (typeof t == "string")
            c = Rv(t, l, K.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case At:
                return t = ue(31, l, e, u),
                t.elementType = At,
                t.lanes = n,
                t;
            case V:
                return _l(l.children, u, n, e);
            case F:
                c = 8,
                u |= 24;
                break;
            case X:
                return t = ue(12, l, e, u | 2),
                t.elementType = X,
                t.lanes = n,
                t;
            case P:
                return t = ue(13, l, e, u),
                t.elementType = P,
                t.lanes = n,
                t;
            case Ct:
                return t = ue(19, l, e, u),
                t.elementType = Ct,
                t.lanes = n,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case w:
                    case tt:
                        c = 10;
                        break t;
                    case Q:
                        c = 9;
                        break t;
                    case Et:
                        c = 11;
                        break t;
                    case _t:
                        c = 14;
                        break t;
                    case jt:
                        c = 16,
                        a = null;
                        break t
                    }
                c = 29,
                l = Error(f(130, t === null ? "null" : typeof t, "")),
                a = null
            }
        return e = ue(c, l, e, u),
        e.elementType = t,
        e.type = a,
        e.lanes = n,
        e
    }
    function _l(t, e, l, a) {
        return t = ue(7, t, a, e),
        t.lanes = l,
        t
    }
    function Yi(t, e, l) {
        return t = ue(6, t, null, e),
        t.lanes = l,
        t
    }
    function Li(t, e, l) {
        return e = ue(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = l,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var na = []
      , ia = 0
      , tn = null
      , en = 0
      , ve = []
      , ye = 0
      , Ul = null
      , Be = 1
      , qe = "";
    function Nl(t, e) {
        na[ia++] = en,
        na[ia++] = tn,
        tn = t,
        en = e
    }
    function Xr(t, e, l) {
        ve[ye++] = Be,
        ve[ye++] = qe,
        ve[ye++] = Ul,
        Ul = t;
        var a = Be;
        t = qe;
        var u = 32 - le(a) - 1;
        a &= ~(1 << u),
        l += 1;
        var n = 32 - le(e) + u;
        if (30 < n) {
            var c = u - u % 5;
            n = (a & (1 << c) - 1).toString(32),
            a >>= c,
            u -= c,
            Be = 1 << 32 - le(e) + u | l << u | a,
            qe = n + t
        } else
            Be = 1 << n | l << u | a,
            qe = t
    }
    function Gi(t) {
        t.return !== null && (Nl(t, 1),
        Xr(t, 1, 0))
    }
    function Xi(t) {
        for (; t === tn; )
            tn = na[--ia],
            na[ia] = null,
            en = na[--ia],
            na[ia] = null;
        for (; t === Ul; )
            Ul = ve[--ye],
            ve[ye] = null,
            qe = ve[--ye],
            ve[ye] = null,
            Be = ve[--ye],
            ve[ye] = null
    }
    var Jt = null
      , Rt = null
      , rt = !1
      , Cl = null
      , Oe = !1
      , Qi = Error(f(519));
    function jl(t) {
        var e = Error(f(418, ""));
        throw Ja(he(e, t)),
        Qi
    }
    function Qr(t) {
        var e = t.stateNode
          , l = t.type
          , a = t.memoizedProps;
        switch (e[Vt] = t,
        e[$t] = a,
        l) {
        case "dialog":
            nt("cancel", e),
            nt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            nt("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < gu.length; l++)
                nt(gu[l], e);
            break;
        case "source":
            nt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            nt("error", e),
            nt("load", e);
            break;
        case "details":
            nt("toggle", e);
            break;
        case "input":
            nt("invalid", e),
            ar(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
            Xu(e);
            break;
        case "select":
            nt("invalid", e);
            break;
        case "textarea":
            nt("invalid", e),
            nr(e, a.value, a.defaultValue, a.children),
            Xu(e)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || id(e.textContent, l) ? (a.popover != null && (nt("beforetoggle", e),
        nt("toggle", e)),
        a.onScroll != null && nt("scroll", e),
        a.onScrollEnd != null && nt("scrollend", e),
        a.onClick != null && (e.onclick = Bn),
        e = !0) : e = !1,
        e || jl(t)
    }
    function Zr(t) {
        for (Jt = t.return; Jt; )
            switch (Jt.tag) {
            case 5:
            case 13:
                Oe = !1;
                return;
            case 27:
            case 3:
                Oe = !0;
                return;
            default:
                Jt = Jt.return
            }
    }
    function wa(t) {
        if (t !== Jt)
            return !1;
        if (!rt)
            return Zr(t),
            rt = !0,
            !1;
        var e = t.tag, l;
        if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type,
        l = !(l !== "form" && l !== "button") || uf(t.type, t.memoizedProps)),
        l = !l),
        l && Rt && jl(t),
        Zr(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(f(317));
            t: {
                for (t = t.nextSibling,
                e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (l = t.data,
                        l === "/$") {
                            if (e === 0) {
                                Rt = Ae(t.nextSibling);
                                break t
                            }
                            e--
                        } else
                            l !== "$" && l !== "$!" && l !== "$?" || e++;
                    t = t.nextSibling
                }
                Rt = null
            }
        } else
            e === 27 ? (e = Rt,
            yl(t.type) ? (t = rf,
            rf = null,
            Rt = t) : Rt = e) : Rt = Jt ? Ae(t.stateNode.nextSibling) : null;
        return !0
    }
    function Ka() {
        Rt = Jt = null,
        rt = !1
    }
    function Vr() {
        var t = Cl;
        return t !== null && (Pt === null ? Pt = t : Pt.push.apply(Pt, t),
        Cl = null),
        t
    }
    function Ja(t) {
        Cl === null ? Cl = [t] : Cl.push(t)
    }
    var Zi = j(null)
      , Hl = null
      , Ye = null;
    function el(t, e, l) {
        q(Zi, e._currentValue),
        e._currentValue = l
    }
    function Le(t) {
        t._currentValue = Zi.current,
        L(Zi)
    }
    function Vi(t, e, l) {
        for (; t !== null; ) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
            t === l)
                break;
            t = t.return
        }
    }
    function wi(t, e, l, a) {
        var u = t.child;
        for (u !== null && (u.return = t); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
                var c = u.child;
                n = n.firstContext;
                t: for (; n !== null; ) {
                    var r = n;
                    n = u;
                    for (var h = 0; h < e.length; h++)
                        if (r.context === e[h]) {
                            n.lanes |= l,
                            r = n.alternate,
                            r !== null && (r.lanes |= l),
                            Vi(n.return, l, t),
                            a || (c = null);
                            break t
                        }
                    n = r.next
                }
            } else if (u.tag === 18) {
                if (c = u.return,
                c === null)
                    throw Error(f(341));
                c.lanes |= l,
                n = c.alternate,
                n !== null && (n.lanes |= l),
                Vi(c, l, t),
                c = null
            } else
                c = u.child;
            if (c !== null)
                c.return = u;
            else
                for (c = u; c !== null; ) {
                    if (c === t) {
                        c = null;
                        break
                    }
                    if (u = c.sibling,
                    u !== null) {
                        u.return = c.return,
                        c = u;
                        break
                    }
                    c = c.return
                }
            u = c
        }
    }
    function $a(t, e, l, a) {
        t = null;
        for (var u = e, n = !1; u !== null; ) {
            if (!n) {
                if ((u.flags & 524288) !== 0)
                    n = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var c = u.alternate;
                if (c === null)
                    throw Error(f(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var r = u.type;
                    ae(u.pendingProps.value, c.value) || (t !== null ? t.push(r) : t = [r])
                }
            } else if (u === te.current) {
                if (c = u.alternate,
                c === null)
                    throw Error(f(387));
                c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Au) : t = [Au])
            }
            u = u.return
        }
        t !== null && wi(e, t, l, a),
        e.flags |= 262144
    }
    function ln(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!ae(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Bl(t) {
        Hl = t,
        Ye = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function wt(t) {
        return wr(Hl, t)
    }
    function an(t, e) {
        return Hl === null && Bl(t),
        wr(t, e)
    }
    function wr(t, e) {
        var l = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: l,
            next: null
        },
        Ye === null) {
            if (t === null)
                throw Error(f(308));
            Ye = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            Ye = Ye.next = e;
        return l
    }
    var Am = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                t.push(a)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(l) {
                return l()
            })
        }
    }
      , Rm = i.unstable_scheduleCallback
      , xm = i.unstable_NormalPriority
      , Ut = {
        $$typeof: tt,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ki() {
        return {
            controller: new Am,
            data: new Map,
            refCount: 0
        }
    }
    function ka(t) {
        t.refCount--,
        t.refCount === 0 && Rm(xm, function() {
            t.controller.abort()
        })
    }
    var Wa = null
      , Ji = 0
      , ca = 0
      , fa = null;
    function zm(t, e) {
        if (Wa === null) {
            var l = Wa = [];
            Ji = 0,
            ca = kc(),
            fa = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return Ji++,
        e.then(Kr, Kr),
        e
    }
    function Kr() {
        if (--Ji === 0 && Wa !== null) {
            fa !== null && (fa.status = "fulfilled");
            var t = Wa;
            Wa = null,
            ca = 0,
            fa = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function Om(t, e) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                l.push(u)
            }
        };
        return t.then(function() {
            a.status = "fulfilled",
            a.value = e;
            for (var u = 0; u < l.length; u++)
                (0,
                l[u])(e)
        }, function(u) {
            for (a.status = "rejected",
            a.reason = u,
            u = 0; u < l.length; u++)
                (0,
                l[u])(void 0)
        }),
        a
    }
    var Jr = _.S;
    _.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && zm(t, e),
        Jr !== null && Jr(t, e)
    }
    ;
    var ql = j(null);
    function $i() {
        var t = ql.current;
        return t !== null ? t : gt.pooledCache
    }
    function un(t, e) {
        e === null ? q(ql, ql.current) : q(ql, e.pool)
    }
    function $r() {
        var t = $i();
        return t === null ? null : {
            parent: Ut._currentValue,
            pool: t
        }
    }
    var Fa = Error(f(460))
      , kr = Error(f(474))
      , nn = Error(f(542))
      , ki = {
        then: function() {}
    };
    function Wr(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function cn() {}
    function Fr(t, e, l) {
        switch (l = t[l],
        l === void 0 ? t.push(e) : l !== e && (e.then(cn, cn),
        e = l),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            Ir(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(cn, cn);
            else {
                if (t = gt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(f(482));
                t = e,
                t.status = "pending",
                t.then(function(a) {
                    if (e.status === "pending") {
                        var u = e;
                        u.status = "fulfilled",
                        u.value = a
                    }
                }, function(a) {
                    if (e.status === "pending") {
                        var u = e;
                        u.status = "rejected",
                        u.reason = a
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                Ir(t),
                t
            }
            throw Pa = e,
            Fa
        }
    }
    var Pa = null;
    function Pr() {
        if (Pa === null)
            throw Error(f(459));
        var t = Pa;
        return Pa = null,
        t
    }
    function Ir(t) {
        if (t === Fa || t === nn)
            throw Error(f(483))
    }
    var ll = !1;
    function Wi(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Fi(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function al(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ul(t, e, l) {
        var a = t.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (ot & 2) !== 0) {
            var u = a.pending;
            return u === null ? e.next = e : (e.next = u.next,
            u.next = e),
            a.pending = e,
            e = Pu(t),
            Lr(t, null, l),
            e
        }
        return Fu(t, a, e, l),
        Pu(t)
    }
    function Ia(t, e, l) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (l & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes,
            l |= a,
            e.lanes = l,
            Kf(t, l)
        }
    }
    function Pi(t, e) {
        var l = t.updateQueue
          , a = t.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var u = null
              , n = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var c = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = c : n = n.next = c,
                    l = l.next
                } while (l !== null);
                n === null ? u = n = e : n = n.next = e
            } else
                u = n = e;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks
            },
            t.updateQueue = l;
            return
        }
        t = l.lastBaseUpdate,
        t === null ? l.firstBaseUpdate = e : t.next = e,
        l.lastBaseUpdate = e
    }
    var Ii = !1;
    function tu() {
        if (Ii) {
            var t = fa;
            if (t !== null)
                throw t
        }
    }
    function eu(t, e, l, a) {
        Ii = !1;
        var u = t.updateQueue;
        ll = !1;
        var n = u.firstBaseUpdate
          , c = u.lastBaseUpdate
          , r = u.shared.pending;
        if (r !== null) {
            u.shared.pending = null;
            var h = r
              , T = h.next;
            h.next = null,
            c === null ? n = T : c.next = T,
            c = h;
            var D = t.alternate;
            D !== null && (D = D.updateQueue,
            r = D.lastBaseUpdate,
            r !== c && (r === null ? D.firstBaseUpdate = T : r.next = T,
            D.lastBaseUpdate = h))
        }
        if (n !== null) {
            var N = u.baseState;
            c = 0,
            D = T = h = null,
            r = n;
            do {
                var A = r.lane & -536870913
                  , x = A !== r.lane;
                if (x ? (it & A) === A : (a & A) === A) {
                    A !== 0 && A === ca && (Ii = !0),
                    D !== null && (D = D.next = {
                        lane: 0,
                        tag: r.tag,
                        payload: r.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var W = t
                          , J = r;
                        A = e;
                        var mt = l;
                        switch (J.tag) {
                        case 1:
                            if (W = J.payload,
                            typeof W == "function") {
                                N = W.call(mt, N, A);
                                break t
                            }
                            N = W;
                            break t;
                        case 3:
                            W.flags = W.flags & -65537 | 128;
                        case 0:
                            if (W = J.payload,
                            A = typeof W == "function" ? W.call(mt, N, A) : W,
                            A == null)
                                break t;
                            N = R({}, N, A);
                            break t;
                        case 2:
                            ll = !0
                        }
                    }
                    A = r.callback,
                    A !== null && (t.flags |= 64,
                    x && (t.flags |= 8192),
                    x = u.callbacks,
                    x === null ? u.callbacks = [A] : x.push(A))
                } else
                    x = {
                        lane: A,
                        tag: r.tag,
                        payload: r.payload,
                        callback: r.callback,
                        next: null
                    },
                    D === null ? (T = D = x,
                    h = N) : D = D.next = x,
                    c |= A;
                if (r = r.next,
                r === null) {
                    if (r = u.shared.pending,
                    r === null)
                        break;
                    x = r,
                    r = x.next,
                    x.next = null,
                    u.lastBaseUpdate = x,
                    u.shared.pending = null
                }
            } while (!0);
            D === null && (h = N),
            u.baseState = h,
            u.firstBaseUpdate = T,
            u.lastBaseUpdate = D,
            n === null && (u.shared.lanes = 0),
            dl |= c,
            t.lanes = c,
            t.memoizedState = N
        }
    }
    function to(t, e) {
        if (typeof t != "function")
            throw Error(f(191, t));
        t.call(e)
    }
    function eo(t, e) {
        var l = t.callbacks;
        if (l !== null)
            for (t.callbacks = null,
            t = 0; t < l.length; t++)
                to(l[t], e)
    }
    var ra = j(null)
      , fn = j(0);
    function lo(t, e) {
        t = Ke,
        q(fn, t),
        q(ra, e),
        Ke = t | e.baseLanes
    }
    function tc() {
        q(fn, Ke),
        q(ra, ra.current)
    }
    function ec() {
        Ke = fn.current,
        L(ra),
        L(fn)
    }
    var nl = 0
      , lt = null
      , dt = null
      , Mt = null
      , rn = !1
      , oa = !1
      , Yl = !1
      , on = 0
      , lu = 0
      , sa = null
      , Mm = 0;
    function zt() {
        throw Error(f(321))
    }
    function lc(t, e) {
        if (e === null)
            return !1;
        for (var l = 0; l < e.length && l < t.length; l++)
            if (!ae(t[l], e[l]))
                return !1;
        return !0
    }
    function ac(t, e, l, a, u, n) {
        return nl = n,
        lt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        _.H = t === null || t.memoizedState === null ? Go : Xo,
        Yl = !1,
        n = l(a, u),
        Yl = !1,
        oa && (n = uo(e, l, a, u)),
        ao(t),
        n
    }
    function ao(t) {
        _.H = yn;
        var e = dt !== null && dt.next !== null;
        if (nl = 0,
        Mt = dt = lt = null,
        rn = !1,
        lu = 0,
        sa = null,
        e)
            throw Error(f(300));
        t === null || Bt || (t = t.dependencies,
        t !== null && ln(t) && (Bt = !0))
    }
    function uo(t, e, l, a) {
        lt = t;
        var u = 0;
        do {
            if (oa && (sa = null),
            lu = 0,
            oa = !1,
            25 <= u)
                throw Error(f(301));
            if (u += 1,
            Mt = dt = null,
            t.updateQueue != null) {
                var n = t.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            _.H = Hm,
            n = e(l, a)
        } while (oa);
        return n
    }
    function Dm() {
        var t = _.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? au(e) : e,
        t = t.useState()[0],
        (dt !== null ? dt.memoizedState : null) !== t && (lt.flags |= 1024),
        e
    }
    function uc() {
        var t = on !== 0;
        return on = 0,
        t
    }
    function nc(t, e, l) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~l
    }
    function ic(t) {
        if (rn) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            rn = !1
        }
        nl = 0,
        Mt = dt = lt = null,
        oa = !1,
        lu = on = 0,
        sa = null
    }
    function Wt() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Mt === null ? lt.memoizedState = Mt = t : Mt = Mt.next = t,
        Mt
    }
    function Dt() {
        if (dt === null) {
            var t = lt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = dt.next;
        var e = Mt === null ? lt.memoizedState : Mt.next;
        if (e !== null)
            Mt = e,
            dt = t;
        else {
            if (t === null)
                throw lt.alternate === null ? Error(f(467)) : Error(f(310));
            dt = t,
            t = {
                memoizedState: dt.memoizedState,
                baseState: dt.baseState,
                baseQueue: dt.baseQueue,
                queue: dt.queue,
                next: null
            },
            Mt === null ? lt.memoizedState = Mt = t : Mt = Mt.next = t
        }
        return Mt
    }
    function cc() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function au(t) {
        var e = lu;
        return lu += 1,
        sa === null && (sa = []),
        t = Fr(sa, t, e),
        e = lt,
        (Mt === null ? e.memoizedState : Mt.next) === null && (e = e.alternate,
        _.H = e === null || e.memoizedState === null ? Go : Xo),
        t
    }
    function sn(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return au(t);
            if (t.$$typeof === tt)
                return wt(t)
        }
        throw Error(f(438, String(t)))
    }
    function fc(t) {
        var e = null
          , l = lt.updateQueue;
        if (l !== null && (e = l.memoCache),
        e == null) {
            var a = lt.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (e = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        l === null && (l = cc(),
        lt.updateQueue = l),
        l.memoCache = e,
        l = e.data[e.index],
        l === void 0)
            for (l = e.data[e.index] = Array(t),
            a = 0; a < t; a++)
                l[a] = It;
        return e.index++,
        l
    }
    function Ge(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function dn(t) {
        var e = Dt();
        return rc(e, dt, t)
    }
    function rc(t, e, l) {
        var a = t.queue;
        if (a === null)
            throw Error(f(311));
        a.lastRenderedReducer = l;
        var u = t.baseQueue
          , n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var c = u.next;
                u.next = n.next,
                n.next = c
            }
            e.baseQueue = u = n,
            a.pending = null
        }
        if (n = t.baseState,
        u === null)
            t.memoizedState = n;
        else {
            e = u.next;
            var r = c = null
              , h = null
              , T = e
              , D = !1;
            do {
                var N = T.lane & -536870913;
                if (N !== T.lane ? (it & N) === N : (nl & N) === N) {
                    var A = T.revertLane;
                    if (A === 0)
                        h !== null && (h = h.next = {
                            lane: 0,
                            revertLane: 0,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null
                        }),
                        N === ca && (D = !0);
                    else if ((nl & A) === A) {
                        T = T.next,
                        A === ca && (D = !0);
                        continue
                    } else
                        N = {
                            lane: 0,
                            revertLane: T.revertLane,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null
                        },
                        h === null ? (r = h = N,
                        c = n) : h = h.next = N,
                        lt.lanes |= A,
                        dl |= A;
                    N = T.action,
                    Yl && l(n, N),
                    n = T.hasEagerState ? T.eagerState : l(n, N)
                } else
                    A = {
                        lane: N,
                        revertLane: T.revertLane,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    },
                    h === null ? (r = h = A,
                    c = n) : h = h.next = A,
                    lt.lanes |= N,
                    dl |= N;
                T = T.next
            } while (T !== null && T !== e);
            if (h === null ? c = n : h.next = r,
            !ae(n, t.memoizedState) && (Bt = !0,
            D && (l = fa,
            l !== null)))
                throw l;
            t.memoizedState = n,
            t.baseState = c,
            t.baseQueue = h,
            a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0),
        [t.memoizedState, a.dispatch]
    }
    function oc(t) {
        var e = Dt()
          , l = e.queue;
        if (l === null)
            throw Error(f(311));
        l.lastRenderedReducer = t;
        var a = l.dispatch
          , u = l.pending
          , n = e.memoizedState;
        if (u !== null) {
            l.pending = null;
            var c = u = u.next;
            do
                n = t(n, c.action),
                c = c.next;
            while (c !== u);
            ae(n, e.memoizedState) || (Bt = !0),
            e.memoizedState = n,
            e.baseQueue === null && (e.baseState = n),
            l.lastRenderedState = n
        }
        return [n, a]
    }
    function no(t, e, l) {
        var a = lt
          , u = Dt()
          , n = rt;
        if (n) {
            if (l === void 0)
                throw Error(f(407));
            l = l()
        } else
            l = e();
        var c = !ae((dt || u).memoizedState, l);
        c && (u.memoizedState = l,
        Bt = !0),
        u = u.queue;
        var r = fo.bind(null, a, u, t);
        if (uu(2048, 8, r, [t]),
        u.getSnapshot !== e || c || Mt !== null && Mt.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            da(9, hn(), co.bind(null, a, u, l, e), null),
            gt === null)
                throw Error(f(349));
            n || (nl & 124) !== 0 || io(a, e, l)
        }
        return l
    }
    function io(t, e, l) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: l
        },
        e = lt.updateQueue,
        e === null ? (e = cc(),
        lt.updateQueue = e,
        e.stores = [t]) : (l = e.stores,
        l === null ? e.stores = [t] : l.push(t))
    }
    function co(t, e, l, a) {
        e.value = l,
        e.getSnapshot = a,
        ro(e) && oo(t)
    }
    function fo(t, e, l) {
        return l(function() {
            ro(e) && oo(t)
        })
    }
    function ro(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var l = e();
            return !ae(t, l)
        } catch {
            return !0
        }
    }
    function oo(t) {
        var e = aa(t, 2);
        e !== null && re(e, t, 2)
    }
    function sc(t) {
        var e = Wt();
        if (typeof t == "function") {
            var l = t;
            if (t = l(),
            Yl) {
                Pe(!0);
                try {
                    l()
                } finally {
                    Pe(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ge,
            lastRenderedState: t
        },
        e
    }
    function so(t, e, l, a) {
        return t.baseState = l,
        rc(t, dt, typeof a == "function" ? a : Ge)
    }
    function _m(t, e, l, a, u) {
        if (vn(t))
            throw Error(f(485));
        if (t = e.action,
        t !== null) {
            var n = {
                payload: u,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    n.listeners.push(c)
                }
            };
            _.T !== null ? l(!0) : n.isTransition = !1,
            a(n),
            l = e.pending,
            l === null ? (n.next = e.pending = n,
            ho(e, n)) : (n.next = l.next,
            e.pending = l.next = n)
        }
    }
    function ho(t, e) {
        var l = e.action
          , a = e.payload
          , u = t.state;
        if (e.isTransition) {
            var n = _.T
              , c = {};
            _.T = c;
            try {
                var r = l(u, a)
                  , h = _.S;
                h !== null && h(c, r),
                mo(t, e, r)
            } catch (T) {
                dc(t, e, T)
            } finally {
                _.T = n
            }
        } else
            try {
                n = l(u, a),
                mo(t, e, n)
            } catch (T) {
                dc(t, e, T)
            }
    }
    function mo(t, e, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            vo(t, e, a)
        }, function(a) {
            return dc(t, e, a)
        }) : vo(t, e, l)
    }
    function vo(t, e, l) {
        e.status = "fulfilled",
        e.value = l,
        yo(e),
        t.state = l,
        e = t.pending,
        e !== null && (l = e.next,
        l === e ? t.pending = null : (l = l.next,
        e.next = l,
        ho(t, l)))
    }
    function dc(t, e, l) {
        var a = t.pending;
        if (t.pending = null,
        a !== null) {
            a = a.next;
            do
                e.status = "rejected",
                e.reason = l,
                yo(e),
                e = e.next;
            while (e !== a)
        }
        t.action = null
    }
    function yo(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function go(t, e) {
        return e
    }
    function po(t, e) {
        if (rt) {
            var l = gt.formState;
            if (l !== null) {
                t: {
                    var a = lt;
                    if (rt) {
                        if (Rt) {
                            e: {
                                for (var u = Rt, n = Oe; u.nodeType !== 8; ) {
                                    if (!n) {
                                        u = null;
                                        break e
                                    }
                                    if (u = Ae(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break e
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                Rt = Ae(u.nextSibling),
                                a = u.data === "F!";
                                break t
                            }
                        }
                        jl(a)
                    }
                    a = !1
                }
                a && (e = l[0])
            }
        }
        return l = Wt(),
        l.memoizedState = l.baseState = e,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: go,
            lastRenderedState: e
        },
        l.queue = a,
        l = qo.bind(null, lt, a),
        a.dispatch = l,
        a = sc(!1),
        n = gc.bind(null, lt, !1, a.queue),
        a = Wt(),
        u = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        a.queue = u,
        l = _m.bind(null, lt, u, n, l),
        u.dispatch = l,
        a.memoizedState = t,
        [e, l, !1]
    }
    function So(t) {
        var e = Dt();
        return bo(e, dt, t)
    }
    function bo(t, e, l) {
        if (e = rc(t, e, go)[0],
        t = dn(Ge)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var a = au(e)
            } catch (c) {
                throw c === Fa ? nn : c
            }
        else
            a = e;
        e = Dt();
        var u = e.queue
          , n = u.dispatch;
        return l !== e.memoizedState && (lt.flags |= 2048,
        da(9, hn(), Um.bind(null, u, l), null)),
        [a, n, t]
    }
    function Um(t, e) {
        t.action = e
    }
    function Eo(t) {
        var e = Dt()
          , l = dt;
        if (l !== null)
            return bo(e, l, t);
        Dt(),
        e = e.memoizedState,
        l = Dt();
        var a = l.queue.dispatch;
        return l.memoizedState = t,
        [e, a, !1]
    }
    function da(t, e, l, a) {
        return t = {
            tag: t,
            create: l,
            deps: a,
            inst: e,
            next: null
        },
        e = lt.updateQueue,
        e === null && (e = cc(),
        lt.updateQueue = e),
        l = e.lastEffect,
        l === null ? e.lastEffect = t.next = t : (a = l.next,
        l.next = t,
        t.next = a,
        e.lastEffect = t),
        t
    }
    function hn() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function To() {
        return Dt().memoizedState
    }
    function mn(t, e, l, a) {
        var u = Wt();
        a = a === void 0 ? null : a,
        lt.flags |= t,
        u.memoizedState = da(1 | e, hn(), l, a)
    }
    function uu(t, e, l, a) {
        var u = Dt();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        dt !== null && a !== null && lc(a, dt.memoizedState.deps) ? u.memoizedState = da(e, n, l, a) : (lt.flags |= t,
        u.memoizedState = da(1 | e, n, l, a))
    }
    function Ao(t, e) {
        mn(8390656, 8, t, e)
    }
    function Ro(t, e) {
        uu(2048, 8, t, e)
    }
    function xo(t, e) {
        return uu(4, 2, t, e)
    }
    function zo(t, e) {
        return uu(4, 4, t, e)
    }
    function Oo(t, e) {
        if (typeof e == "function") {
            t = t();
            var l = e(t);
            return function() {
                typeof l == "function" ? l() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Mo(t, e, l) {
        l = l != null ? l.concat([t]) : null,
        uu(4, 4, Oo.bind(null, e, t), l)
    }
    function hc() {}
    function Do(t, e) {
        var l = Dt();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        return e !== null && lc(e, a[1]) ? a[0] : (l.memoizedState = [t, e],
        t)
    }
    function _o(t, e) {
        var l = Dt();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        if (e !== null && lc(e, a[1]))
            return a[0];
        if (a = t(),
        Yl) {
            Pe(!0);
            try {
                t()
            } finally {
                Pe(!1)
            }
        }
        return l.memoizedState = [a, e],
        a
    }
    function mc(t, e, l) {
        return l === void 0 || (nl & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = l,
        t = Cs(),
        lt.lanes |= t,
        dl |= t,
        l)
    }
    function Uo(t, e, l, a) {
        return ae(l, e) ? l : ra.current !== null ? (t = mc(t, l, a),
        ae(t, e) || (Bt = !0),
        t) : (nl & 42) === 0 ? (Bt = !0,
        t.memoizedState = l) : (t = Cs(),
        lt.lanes |= t,
        dl |= t,
        e)
    }
    function No(t, e, l, a, u) {
        var n = Y.p;
        Y.p = n !== 0 && 8 > n ? n : 8;
        var c = _.T
          , r = {};
        _.T = r,
        gc(t, !1, e, l);
        try {
            var h = u()
              , T = _.S;
            if (T !== null && T(r, h),
            h !== null && typeof h == "object" && typeof h.then == "function") {
                var D = Om(h, a);
                nu(t, e, D, fe(t))
            } else
                nu(t, e, a, fe(t))
        } catch (N) {
            nu(t, e, {
                then: function() {},
                status: "rejected",
                reason: N
            }, fe())
        } finally {
            Y.p = n,
            _.T = c
        }
    }
    function Nm() {}
    function vc(t, e, l, a) {
        if (t.tag !== 5)
            throw Error(f(476));
        var u = Co(t).queue;
        No(t, u, e, k, l === null ? Nm : function() {
            return jo(t),
            l(a)
        }
        )
    }
    function Co(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: k,
            baseState: k,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ge,
                lastRenderedState: k
            },
            next: null
        };
        var l = {};
        return e.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ge,
                lastRenderedState: l
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function jo(t) {
        var e = Co(t).next.queue;
        nu(t, e, {}, fe())
    }
    function yc() {
        return wt(Au)
    }
    function Ho() {
        return Dt().memoizedState
    }
    function Bo() {
        return Dt().memoizedState
    }
    function Cm(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var l = fe();
                t = al(l);
                var a = ul(e, t, l);
                a !== null && (re(a, e, l),
                Ia(a, e, l)),
                e = {
                    cache: Ki()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function jm(t, e, l) {
        var a = fe();
        l = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        vn(t) ? Yo(e, l) : (l = Bi(t, e, l, a),
        l !== null && (re(l, t, a),
        Lo(l, e, a)))
    }
    function qo(t, e, l) {
        var a = fe();
        nu(t, e, l, a)
    }
    function nu(t, e, l, a) {
        var u = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (vn(t))
            Yo(e, u);
        else {
            var n = t.alternate;
            if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = e.lastRenderedReducer,
            n !== null))
                try {
                    var c = e.lastRenderedState
                      , r = n(c, l);
                    if (u.hasEagerState = !0,
                    u.eagerState = r,
                    ae(r, c))
                        return Fu(t, e, u, 0),
                        gt === null && Wu(),
                        !1
                } catch {} finally {}
            if (l = Bi(t, e, u, a),
            l !== null)
                return re(l, t, a),
                Lo(l, e, a),
                !0
        }
        return !1
    }
    function gc(t, e, l, a) {
        if (a = {
            lane: 2,
            revertLane: kc(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        vn(t)) {
            if (e)
                throw Error(f(479))
        } else
            e = Bi(t, l, a, 2),
            e !== null && re(e, t, 2)
    }
    function vn(t) {
        var e = t.alternate;
        return t === lt || e !== null && e === lt
    }
    function Yo(t, e) {
        oa = rn = !0;
        var l = t.pending;
        l === null ? e.next = e : (e.next = l.next,
        l.next = e),
        t.pending = e
    }
    function Lo(t, e, l) {
        if ((l & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes,
            l |= a,
            e.lanes = l,
            Kf(t, l)
        }
    }
    var yn = {
        readContext: wt,
        use: sn,
        useCallback: zt,
        useContext: zt,
        useEffect: zt,
        useImperativeHandle: zt,
        useLayoutEffect: zt,
        useInsertionEffect: zt,
        useMemo: zt,
        useReducer: zt,
        useRef: zt,
        useState: zt,
        useDebugValue: zt,
        useDeferredValue: zt,
        useTransition: zt,
        useSyncExternalStore: zt,
        useId: zt,
        useHostTransitionStatus: zt,
        useFormState: zt,
        useActionState: zt,
        useOptimistic: zt,
        useMemoCache: zt,
        useCacheRefresh: zt
    }
      , Go = {
        readContext: wt,
        use: sn,
        useCallback: function(t, e) {
            return Wt().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: wt,
        useEffect: Ao,
        useImperativeHandle: function(t, e, l) {
            l = l != null ? l.concat([t]) : null,
            mn(4194308, 4, Oo.bind(null, e, t), l)
        },
        useLayoutEffect: function(t, e) {
            return mn(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            mn(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var l = Wt();
            e = e === void 0 ? null : e;
            var a = t();
            if (Yl) {
                Pe(!0);
                try {
                    t()
                } finally {
                    Pe(!1)
                }
            }
            return l.memoizedState = [a, e],
            a
        },
        useReducer: function(t, e, l) {
            var a = Wt();
            if (l !== void 0) {
                var u = l(e);
                if (Yl) {
                    Pe(!0);
                    try {
                        l(e)
                    } finally {
                        Pe(!1)
                    }
                }
            } else
                u = e;
            return a.memoizedState = a.baseState = u,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: u
            },
            a.queue = t,
            t = t.dispatch = jm.bind(null, lt, t),
            [a.memoizedState, t]
        },
        useRef: function(t) {
            var e = Wt();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = sc(t);
            var e = t.queue
              , l = qo.bind(null, lt, e);
            return e.dispatch = l,
            [t.memoizedState, l]
        },
        useDebugValue: hc,
        useDeferredValue: function(t, e) {
            var l = Wt();
            return mc(l, t, e)
        },
        useTransition: function() {
            var t = sc(!1);
            return t = No.bind(null, lt, t.queue, !0, !1),
            Wt().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, l) {
            var a = lt
              , u = Wt();
            if (rt) {
                if (l === void 0)
                    throw Error(f(407));
                l = l()
            } else {
                if (l = e(),
                gt === null)
                    throw Error(f(349));
                (it & 124) !== 0 || io(a, e, l)
            }
            u.memoizedState = l;
            var n = {
                value: l,
                getSnapshot: e
            };
            return u.queue = n,
            Ao(fo.bind(null, a, n, t), [t]),
            a.flags |= 2048,
            da(9, hn(), co.bind(null, a, n, l, e), null),
            l
        },
        useId: function() {
            var t = Wt()
              , e = gt.identifierPrefix;
            if (rt) {
                var l = qe
                  , a = Be;
                l = (a & ~(1 << 32 - le(a) - 1)).toString(32) + l,
                e = "«" + e + "R" + l,
                l = on++,
                0 < l && (e += "H" + l.toString(32)),
                e += "»"
            } else
                l = Mm++,
                e = "«" + e + "r" + l.toString(32) + "»";
            return t.memoizedState = e
        },
        useHostTransitionStatus: yc,
        useFormState: po,
        useActionState: po,
        useOptimistic: function(t) {
            var e = Wt();
            e.memoizedState = e.baseState = t;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = l,
            e = gc.bind(null, lt, !0, l),
            l.dispatch = e,
            [t, e]
        },
        useMemoCache: fc,
        useCacheRefresh: function() {
            return Wt().memoizedState = Cm.bind(null, lt)
        }
    }
      , Xo = {
        readContext: wt,
        use: sn,
        useCallback: Do,
        useContext: wt,
        useEffect: Ro,
        useImperativeHandle: Mo,
        useInsertionEffect: xo,
        useLayoutEffect: zo,
        useMemo: _o,
        useReducer: dn,
        useRef: To,
        useState: function() {
            return dn(Ge)
        },
        useDebugValue: hc,
        useDeferredValue: function(t, e) {
            var l = Dt();
            return Uo(l, dt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = dn(Ge)[0]
              , e = Dt().memoizedState;
            return [typeof t == "boolean" ? t : au(t), e]
        },
        useSyncExternalStore: no,
        useId: Ho,
        useHostTransitionStatus: yc,
        useFormState: So,
        useActionState: So,
        useOptimistic: function(t, e) {
            var l = Dt();
            return so(l, dt, t, e)
        },
        useMemoCache: fc,
        useCacheRefresh: Bo
    }
      , Hm = {
        readContext: wt,
        use: sn,
        useCallback: Do,
        useContext: wt,
        useEffect: Ro,
        useImperativeHandle: Mo,
        useInsertionEffect: xo,
        useLayoutEffect: zo,
        useMemo: _o,
        useReducer: oc,
        useRef: To,
        useState: function() {
            return oc(Ge)
        },
        useDebugValue: hc,
        useDeferredValue: function(t, e) {
            var l = Dt();
            return dt === null ? mc(l, t, e) : Uo(l, dt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = oc(Ge)[0]
              , e = Dt().memoizedState;
            return [typeof t == "boolean" ? t : au(t), e]
        },
        useSyncExternalStore: no,
        useId: Ho,
        useHostTransitionStatus: yc,
        useFormState: Eo,
        useActionState: Eo,
        useOptimistic: function(t, e) {
            var l = Dt();
            return dt !== null ? so(l, dt, t, e) : (l.baseState = t,
            [t, l.queue.dispatch])
        },
        useMemoCache: fc,
        useCacheRefresh: Bo
    }
      , ha = null
      , iu = 0;
    function gn(t) {
        var e = iu;
        return iu += 1,
        ha === null && (ha = []),
        Fr(ha, t, e)
    }
    function cu(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function pn(t, e) {
        throw e.$$typeof === C ? Error(f(525)) : (t = Object.prototype.toString.call(e),
        Error(f(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function Qo(t) {
        var e = t._init;
        return e(t._payload)
    }
    function Zo(t) {
        function e(p, g) {
            if (t) {
                var S = p.deletions;
                S === null ? (p.deletions = [g],
                p.flags |= 16) : S.push(g)
            }
        }
        function l(p, g) {
            if (!t)
                return null;
            for (; g !== null; )
                e(p, g),
                g = g.sibling;
            return null
        }
        function a(p) {
            for (var g = new Map; p !== null; )
                p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
                p = p.sibling;
            return g
        }
        function u(p, g) {
            return p = He(p, g),
            p.index = 0,
            p.sibling = null,
            p
        }
        function n(p, g, S) {
            return p.index = S,
            t ? (S = p.alternate,
            S !== null ? (S = S.index,
            S < g ? (p.flags |= 67108866,
            g) : S) : (p.flags |= 67108866,
            g)) : (p.flags |= 1048576,
            g)
        }
        function c(p) {
            return t && p.alternate === null && (p.flags |= 67108866),
            p
        }
        function r(p, g, S, U) {
            return g === null || g.tag !== 6 ? (g = Yi(S, p.mode, U),
            g.return = p,
            g) : (g = u(g, S),
            g.return = p,
            g)
        }
        function h(p, g, S, U) {
            var G = S.type;
            return G === V ? D(p, g, S.props.children, U, S.key) : g !== null && (g.elementType === G || typeof G == "object" && G !== null && G.$$typeof === jt && Qo(G) === g.type) ? (g = u(g, S.props),
            cu(g, S),
            g.return = p,
            g) : (g = Iu(S.type, S.key, S.props, null, p.mode, U),
            cu(g, S),
            g.return = p,
            g)
        }
        function T(p, g, S, U) {
            return g === null || g.tag !== 4 || g.stateNode.containerInfo !== S.containerInfo || g.stateNode.implementation !== S.implementation ? (g = Li(S, p.mode, U),
            g.return = p,
            g) : (g = u(g, S.children || []),
            g.return = p,
            g)
        }
        function D(p, g, S, U, G) {
            return g === null || g.tag !== 7 ? (g = _l(S, p.mode, U, G),
            g.return = p,
            g) : (g = u(g, S),
            g.return = p,
            g)
        }
        function N(p, g, S) {
            if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
                return g = Yi("" + g, p.mode, S),
                g.return = p,
                g;
            if (typeof g == "object" && g !== null) {
                switch (g.$$typeof) {
                case H:
                    return S = Iu(g.type, g.key, g.props, null, p.mode, S),
                    cu(S, g),
                    S.return = p,
                    S;
                case B:
                    return g = Li(g, p.mode, S),
                    g.return = p,
                    g;
                case jt:
                    var U = g._init;
                    return g = U(g._payload),
                    N(p, g, S)
                }
                if (Zt(g) || Qt(g))
                    return g = _l(g, p.mode, S, null),
                    g.return = p,
                    g;
                if (typeof g.then == "function")
                    return N(p, gn(g), S);
                if (g.$$typeof === tt)
                    return N(p, an(p, g), S);
                pn(p, g)
            }
            return null
        }
        function A(p, g, S, U) {
            var G = g !== null ? g.key : null;
            if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
                return G !== null ? null : r(p, g, "" + S, U);
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case H:
                    return S.key === G ? h(p, g, S, U) : null;
                case B:
                    return S.key === G ? T(p, g, S, U) : null;
                case jt:
                    return G = S._init,
                    S = G(S._payload),
                    A(p, g, S, U)
                }
                if (Zt(S) || Qt(S))
                    return G !== null ? null : D(p, g, S, U, null);
                if (typeof S.then == "function")
                    return A(p, g, gn(S), U);
                if (S.$$typeof === tt)
                    return A(p, g, an(p, S), U);
                pn(p, S)
            }
            return null
        }
        function x(p, g, S, U, G) {
            if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
                return p = p.get(S) || null,
                r(g, p, "" + U, G);
            if (typeof U == "object" && U !== null) {
                switch (U.$$typeof) {
                case H:
                    return p = p.get(U.key === null ? S : U.key) || null,
                    h(g, p, U, G);
                case B:
                    return p = p.get(U.key === null ? S : U.key) || null,
                    T(g, p, U, G);
                case jt:
                    var at = U._init;
                    return U = at(U._payload),
                    x(p, g, S, U, G)
                }
                if (Zt(U) || Qt(U))
                    return p = p.get(S) || null,
                    D(g, p, U, G, null);
                if (typeof U.then == "function")
                    return x(p, g, S, gn(U), G);
                if (U.$$typeof === tt)
                    return x(p, g, S, an(g, U), G);
                pn(g, U)
            }
            return null
        }
        function W(p, g, S, U) {
            for (var G = null, at = null, Z = g, $ = g = 0, Yt = null; Z !== null && $ < S.length; $++) {
                Z.index > $ ? (Yt = Z,
                Z = null) : Yt = Z.sibling;
                var ft = A(p, Z, S[$], U);
                if (ft === null) {
                    Z === null && (Z = Yt);
                    break
                }
                t && Z && ft.alternate === null && e(p, Z),
                g = n(ft, g, $),
                at === null ? G = ft : at.sibling = ft,
                at = ft,
                Z = Yt
            }
            if ($ === S.length)
                return l(p, Z),
                rt && Nl(p, $),
                G;
            if (Z === null) {
                for (; $ < S.length; $++)
                    Z = N(p, S[$], U),
                    Z !== null && (g = n(Z, g, $),
                    at === null ? G = Z : at.sibling = Z,
                    at = Z);
                return rt && Nl(p, $),
                G
            }
            for (Z = a(Z); $ < S.length; $++)
                Yt = x(Z, p, $, S[$], U),
                Yt !== null && (t && Yt.alternate !== null && Z.delete(Yt.key === null ? $ : Yt.key),
                g = n(Yt, g, $),
                at === null ? G = Yt : at.sibling = Yt,
                at = Yt);
            return t && Z.forEach(function(El) {
                return e(p, El)
            }),
            rt && Nl(p, $),
            G
        }
        function J(p, g, S, U) {
            if (S == null)
                throw Error(f(151));
            for (var G = null, at = null, Z = g, $ = g = 0, Yt = null, ft = S.next(); Z !== null && !ft.done; $++,
            ft = S.next()) {
                Z.index > $ ? (Yt = Z,
                Z = null) : Yt = Z.sibling;
                var El = A(p, Z, ft.value, U);
                if (El === null) {
                    Z === null && (Z = Yt);
                    break
                }
                t && Z && El.alternate === null && e(p, Z),
                g = n(El, g, $),
                at === null ? G = El : at.sibling = El,
                at = El,
                Z = Yt
            }
            if (ft.done)
                return l(p, Z),
                rt && Nl(p, $),
                G;
            if (Z === null) {
                for (; !ft.done; $++,
                ft = S.next())
                    ft = N(p, ft.value, U),
                    ft !== null && (g = n(ft, g, $),
                    at === null ? G = ft : at.sibling = ft,
                    at = ft);
                return rt && Nl(p, $),
                G
            }
            for (Z = a(Z); !ft.done; $++,
            ft = S.next())
                ft = x(Z, p, $, ft.value, U),
                ft !== null && (t && ft.alternate !== null && Z.delete(ft.key === null ? $ : ft.key),
                g = n(ft, g, $),
                at === null ? G = ft : at.sibling = ft,
                at = ft);
            return t && Z.forEach(function(Bv) {
                return e(p, Bv)
            }),
            rt && Nl(p, $),
            G
        }
        function mt(p, g, S, U) {
            if (typeof S == "object" && S !== null && S.type === V && S.key === null && (S = S.props.children),
            typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case H:
                    t: {
                        for (var G = S.key; g !== null; ) {
                            if (g.key === G) {
                                if (G = S.type,
                                G === V) {
                                    if (g.tag === 7) {
                                        l(p, g.sibling),
                                        U = u(g, S.props.children),
                                        U.return = p,
                                        p = U;
                                        break t
                                    }
                                } else if (g.elementType === G || typeof G == "object" && G !== null && G.$$typeof === jt && Qo(G) === g.type) {
                                    l(p, g.sibling),
                                    U = u(g, S.props),
                                    cu(U, S),
                                    U.return = p,
                                    p = U;
                                    break t
                                }
                                l(p, g);
                                break
                            } else
                                e(p, g);
                            g = g.sibling
                        }
                        S.type === V ? (U = _l(S.props.children, p.mode, U, S.key),
                        U.return = p,
                        p = U) : (U = Iu(S.type, S.key, S.props, null, p.mode, U),
                        cu(U, S),
                        U.return = p,
                        p = U)
                    }
                    return c(p);
                case B:
                    t: {
                        for (G = S.key; g !== null; ) {
                            if (g.key === G)
                                if (g.tag === 4 && g.stateNode.containerInfo === S.containerInfo && g.stateNode.implementation === S.implementation) {
                                    l(p, g.sibling),
                                    U = u(g, S.children || []),
                                    U.return = p,
                                    p = U;
                                    break t
                                } else {
                                    l(p, g);
                                    break
                                }
                            else
                                e(p, g);
                            g = g.sibling
                        }
                        U = Li(S, p.mode, U),
                        U.return = p,
                        p = U
                    }
                    return c(p);
                case jt:
                    return G = S._init,
                    S = G(S._payload),
                    mt(p, g, S, U)
                }
                if (Zt(S))
                    return W(p, g, S, U);
                if (Qt(S)) {
                    if (G = Qt(S),
                    typeof G != "function")
                        throw Error(f(150));
                    return S = G.call(S),
                    J(p, g, S, U)
                }
                if (typeof S.then == "function")
                    return mt(p, g, gn(S), U);
                if (S.$$typeof === tt)
                    return mt(p, g, an(p, S), U);
                pn(p, S)
            }
            return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S,
            g !== null && g.tag === 6 ? (l(p, g.sibling),
            U = u(g, S),
            U.return = p,
            p = U) : (l(p, g),
            U = Yi(S, p.mode, U),
            U.return = p,
            p = U),
            c(p)) : l(p, g)
        }
        return function(p, g, S, U) {
            try {
                iu = 0;
                var G = mt(p, g, S, U);
                return ha = null,
                G
            } catch (Z) {
                if (Z === Fa || Z === nn)
                    throw Z;
                var at = ue(29, Z, null, p.mode);
                return at.lanes = U,
                at.return = p,
                at
            } finally {}
        }
    }
    var ma = Zo(!0)
      , Vo = Zo(!1)
      , ge = j(null)
      , Me = null;
    function il(t) {
        var e = t.alternate;
        q(Nt, Nt.current & 1),
        q(ge, t),
        Me === null && (e === null || ra.current !== null || e.memoizedState !== null) && (Me = t)
    }
    function wo(t) {
        if (t.tag === 22) {
            if (q(Nt, Nt.current),
            q(ge, t),
            Me === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (Me = t)
            }
        } else
            cl()
    }
    function cl() {
        q(Nt, Nt.current),
        q(ge, ge.current)
    }
    function Xe(t) {
        L(ge),
        Me === t && (Me = null),
        L(Nt)
    }
    var Nt = j(0);
    function Sn(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var l = e.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || l.data === "$?" || ff(l)))
                    return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    function pc(t, e, l, a) {
        e = t.memoizedState,
        l = l(a, e),
        l = l == null ? e : R({}, e, l),
        t.memoizedState = l,
        t.lanes === 0 && (t.updateQueue.baseState = l)
    }
    var Sc = {
        enqueueSetState: function(t, e, l) {
            t = t._reactInternals;
            var a = fe()
              , u = al(a);
            u.payload = e,
            l != null && (u.callback = l),
            e = ul(t, u, a),
            e !== null && (re(e, t, a),
            Ia(e, t, a))
        },
        enqueueReplaceState: function(t, e, l) {
            t = t._reactInternals;
            var a = fe()
              , u = al(a);
            u.tag = 1,
            u.payload = e,
            l != null && (u.callback = l),
            e = ul(t, u, a),
            e !== null && (re(e, t, a),
            Ia(e, t, a))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var l = fe()
              , a = al(l);
            a.tag = 2,
            e != null && (a.callback = e),
            e = ul(t, a, l),
            e !== null && (re(e, t, l),
            Ia(e, t, l))
        }
    };
    function Ko(t, e, l, a, u, n, c) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, c) : e.prototype && e.prototype.isPureReactComponent ? !Za(l, a) || !Za(u, n) : !0
    }
    function Jo(t, e, l, a) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a),
        e.state !== t && Sc.enqueueReplaceState(e, e.state, null)
    }
    function Ll(t, e) {
        var l = e;
        if ("ref"in e) {
            l = {};
            for (var a in e)
                a !== "ref" && (l[a] = e[a])
        }
        if (t = t.defaultProps) {
            l === e && (l = R({}, l));
            for (var u in t)
                l[u] === void 0 && (l[u] = t[u])
        }
        return l
    }
    var bn = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
    ;
    function $o(t) {
        bn(t)
    }
    function ko(t) {
        console.error(t)
    }
    function Wo(t) {
        bn(t)
    }
    function En(t, e) {
        try {
            var l = t.onUncaughtError;
            l(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Fo(t, e, l) {
        try {
            var a = t.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function bc(t, e, l) {
        return l = al(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            En(t, e)
        }
        ,
        l
    }
    function Po(t) {
        return t = al(t),
        t.tag = 3,
        t
    }
    function Io(t, e, l, a) {
        var u = l.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            t.payload = function() {
                return u(n)
            }
            ,
            t.callback = function() {
                Fo(e, l, a)
            }
        }
        var c = l.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
            Fo(e, l, a),
            typeof u != "function" && (hl === null ? hl = new Set([this]) : hl.add(this));
            var r = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: r !== null ? r : ""
            })
        }
        )
    }
    function Bm(t, e, l, a, u) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = l.alternate,
            e !== null && $a(e, l, u, !0),
            l = ge.current,
            l !== null) {
                switch (l.tag) {
                case 13:
                    return Me === null ? Vc() : l.alternate === null && xt === 0 && (xt = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = u,
                    a === ki ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? l.updateQueue = new Set([a]) : e.add(a),
                    Kc(t, a, u)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === ki ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = e) : (l = e.retryQueue,
                    l === null ? e.retryQueue = new Set([a]) : l.add(a)),
                    Kc(t, a, u)),
                    !1
                }
                throw Error(f(435, l.tag))
            }
            return Kc(t, a, u),
            Vc(),
            !1
        }
        if (rt)
            return e = ge.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = u,
            a !== Qi && (t = Error(f(422), {
                cause: a
            }),
            Ja(he(t, l)))) : (a !== Qi && (e = Error(f(423), {
                cause: a
            }),
            Ja(he(e, l))),
            t = t.current.alternate,
            t.flags |= 65536,
            u &= -u,
            t.lanes |= u,
            a = he(a, l),
            u = bc(t.stateNode, a, u),
            Pi(t, u),
            xt !== 4 && (xt = 2)),
            !1;
        var n = Error(f(520), {
            cause: a
        });
        if (n = he(n, l),
        mu === null ? mu = [n] : mu.push(n),
        xt !== 4 && (xt = 2),
        e === null)
            return !0;
        a = he(a, l),
        l = e;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                t = u & -u,
                l.lanes |= t,
                t = bc(l.stateNode, a, t),
                Pi(l, t),
                !1;
            case 1:
                if (e = l.type,
                n = l.stateNode,
                (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (hl === null || !hl.has(n))))
                    return l.flags |= 65536,
                    u &= -u,
                    l.lanes |= u,
                    u = Po(u),
                    Io(u, t, l, a),
                    Pi(l, u),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var ts = Error(f(461))
      , Bt = !1;
    function Lt(t, e, l, a) {
        e.child = t === null ? Vo(e, null, l, a) : ma(e, t.child, l, a)
    }
    function es(t, e, l, a, u) {
        l = l.render;
        var n = e.ref;
        if ("ref"in a) {
            var c = {};
            for (var r in a)
                r !== "ref" && (c[r] = a[r])
        } else
            c = a;
        return Bl(e),
        a = ac(t, e, l, c, n, u),
        r = uc(),
        t !== null && !Bt ? (nc(t, e, u),
        Qe(t, e, u)) : (rt && r && Gi(e),
        e.flags |= 1,
        Lt(t, e, a, u),
        e.child)
    }
    function ls(t, e, l, a, u) {
        if (t === null) {
            var n = l.type;
            return typeof n == "function" && !qi(n) && n.defaultProps === void 0 && l.compare === null ? (e.tag = 15,
            e.type = n,
            as(t, e, n, a, u)) : (t = Iu(l.type, null, a, e, e.mode, u),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (n = t.child,
        !Mc(t, u)) {
            var c = n.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : Za,
            l(c, a) && t.ref === e.ref)
                return Qe(t, e, u)
        }
        return e.flags |= 1,
        t = He(n, a),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function as(t, e, l, a, u) {
        if (t !== null) {
            var n = t.memoizedProps;
            if (Za(n, a) && t.ref === e.ref)
                if (Bt = !1,
                e.pendingProps = a = n,
                Mc(t, u))
                    (t.flags & 131072) !== 0 && (Bt = !0);
                else
                    return e.lanes = t.lanes,
                    Qe(t, e, u)
        }
        return Ec(t, e, l, a, u)
    }
    function us(t, e, l) {
        var a = e.pendingProps
          , u = a.children
          , n = t !== null ? t.memoizedState : null;
        if (a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (a = n !== null ? n.baseLanes | l : l,
                t !== null) {
                    for (u = e.child = t.child,
                    n = 0; u !== null; )
                        n = n | u.lanes | u.childLanes,
                        u = u.sibling;
                    e.childLanes = n & ~a
                } else
                    e.childLanes = 0,
                    e.child = null;
                return ns(t, e, a, l)
            }
            if ((l & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && un(e, n !== null ? n.cachePool : null),
                n !== null ? lo(e, n) : tc(),
                wo(e);
            else
                return e.lanes = e.childLanes = 536870912,
                ns(t, e, n !== null ? n.baseLanes | l : l, l)
        } else
            n !== null ? (un(e, n.cachePool),
            lo(e, n),
            cl(),
            e.memoizedState = null) : (t !== null && un(e, null),
            tc(),
            cl());
        return Lt(t, e, u, l),
        e.child
    }
    function ns(t, e, l, a) {
        var u = $i();
        return u = u === null ? null : {
            parent: Ut._currentValue,
            pool: u
        },
        e.memoizedState = {
            baseLanes: l,
            cachePool: u
        },
        t !== null && un(e, null),
        tc(),
        wo(e),
        t !== null && $a(t, e, a, !0),
        null
    }
    function Tn(t, e) {
        var l = e.ref;
        if (l === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(f(284));
            (t === null || t.ref !== l) && (e.flags |= 4194816)
        }
    }
    function Ec(t, e, l, a, u) {
        return Bl(e),
        l = ac(t, e, l, a, void 0, u),
        a = uc(),
        t !== null && !Bt ? (nc(t, e, u),
        Qe(t, e, u)) : (rt && a && Gi(e),
        e.flags |= 1,
        Lt(t, e, l, u),
        e.child)
    }
    function is(t, e, l, a, u, n) {
        return Bl(e),
        e.updateQueue = null,
        l = uo(e, a, l, u),
        ao(t),
        a = uc(),
        t !== null && !Bt ? (nc(t, e, n),
        Qe(t, e, n)) : (rt && a && Gi(e),
        e.flags |= 1,
        Lt(t, e, l, n),
        e.child)
    }
    function cs(t, e, l, a, u) {
        if (Bl(e),
        e.stateNode === null) {
            var n = ua
              , c = l.contextType;
            typeof c == "object" && c !== null && (n = wt(c)),
            n = new l(a,n),
            e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = Sc,
            e.stateNode = n,
            n._reactInternals = e,
            n = e.stateNode,
            n.props = a,
            n.state = e.memoizedState,
            n.refs = {},
            Wi(e),
            c = l.contextType,
            n.context = typeof c == "object" && c !== null ? wt(c) : ua,
            n.state = e.memoizedState,
            c = l.getDerivedStateFromProps,
            typeof c == "function" && (pc(e, l, c, a),
            n.state = e.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            c !== n.state && Sc.enqueueReplaceState(n, n.state, null),
            eu(e, a, n, u),
            tu(),
            n.state = e.memoizedState),
            typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            a = !0
        } else if (t === null) {
            n = e.stateNode;
            var r = e.memoizedProps
              , h = Ll(l, r);
            n.props = h;
            var T = n.context
              , D = l.contextType;
            c = ua,
            typeof D == "object" && D !== null && (c = wt(D));
            var N = l.getDerivedStateFromProps;
            D = typeof N == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            r = e.pendingProps !== r,
            D || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (r || T !== c) && Jo(e, n, a, c),
            ll = !1;
            var A = e.memoizedState;
            n.state = A,
            eu(e, a, n, u),
            tu(),
            T = e.memoizedState,
            r || A !== T || ll ? (typeof N == "function" && (pc(e, l, N, a),
            T = e.memoizedState),
            (h = ll || Ko(e, l, h, a, A, T, c)) ? (D || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = a,
            e.memoizedState = T),
            n.props = a,
            n.state = T,
            n.context = c,
            a = h) : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            a = !1)
        } else {
            n = e.stateNode,
            Fi(t, e),
            c = e.memoizedProps,
            D = Ll(l, c),
            n.props = D,
            N = e.pendingProps,
            A = n.context,
            T = l.contextType,
            h = ua,
            typeof T == "object" && T !== null && (h = wt(T)),
            r = l.getDerivedStateFromProps,
            (T = typeof r == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== N || A !== h) && Jo(e, n, a, h),
            ll = !1,
            A = e.memoizedState,
            n.state = A,
            eu(e, a, n, u),
            tu();
            var x = e.memoizedState;
            c !== N || A !== x || ll || t !== null && t.dependencies !== null && ln(t.dependencies) ? (typeof r == "function" && (pc(e, l, r, a),
            x = e.memoizedState),
            (D = ll || Ko(e, l, D, a, A, x, h) || t !== null && t.dependencies !== null && ln(t.dependencies)) ? (T || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, x, h),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, x, h)),
            typeof n.componentDidUpdate == "function" && (e.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = a,
            e.memoizedState = x),
            n.props = a,
            n.state = x,
            n.context = h,
            a = D) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024),
            a = !1)
        }
        return n = a,
        Tn(t, e),
        a = (e.flags & 128) !== 0,
        n || a ? (n = e.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : n.render(),
        e.flags |= 1,
        t !== null && a ? (e.child = ma(e, t.child, null, u),
        e.child = ma(e, null, l, u)) : Lt(t, e, l, u),
        e.memoizedState = n.state,
        t = e.child) : t = Qe(t, e, u),
        t
    }
    function fs(t, e, l, a) {
        return Ka(),
        e.flags |= 256,
        Lt(t, e, l, a),
        e.child
    }
    var Tc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Ac(t) {
        return {
            baseLanes: t,
            cachePool: $r()
        }
    }
    function Rc(t, e, l) {
        return t = t !== null ? t.childLanes & ~l : 0,
        e && (t |= pe),
        t
    }
    function rs(t, e, l) {
        var a = e.pendingProps, u = !1, n = (e.flags & 128) !== 0, c;
        if ((c = n) || (c = t !== null && t.memoizedState === null ? !1 : (Nt.current & 2) !== 0),
        c && (u = !0,
        e.flags &= -129),
        c = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (rt) {
                if (u ? il(e) : cl(),
                rt) {
                    var r = Rt, h;
                    if (h = r) {
                        t: {
                            for (h = r,
                            r = Oe; h.nodeType !== 8; ) {
                                if (!r) {
                                    r = null;
                                    break t
                                }
                                if (h = Ae(h.nextSibling),
                                h === null) {
                                    r = null;
                                    break t
                                }
                            }
                            r = h
                        }
                        r !== null ? (e.memoizedState = {
                            dehydrated: r,
                            treeContext: Ul !== null ? {
                                id: Be,
                                overflow: qe
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        h = ue(18, null, null, 0),
                        h.stateNode = r,
                        h.return = e,
                        e.child = h,
                        Jt = e,
                        Rt = null,
                        h = !0) : h = !1
                    }
                    h || jl(e)
                }
                if (r = e.memoizedState,
                r !== null && (r = r.dehydrated,
                r !== null))
                    return ff(r) ? e.lanes = 32 : e.lanes = 536870912,
                    null;
                Xe(e)
            }
            return r = a.children,
            a = a.fallback,
            u ? (cl(),
            u = e.mode,
            r = An({
                mode: "hidden",
                children: r
            }, u),
            a = _l(a, u, l, null),
            r.return = e,
            a.return = e,
            r.sibling = a,
            e.child = r,
            u = e.child,
            u.memoizedState = Ac(l),
            u.childLanes = Rc(t, c, l),
            e.memoizedState = Tc,
            a) : (il(e),
            xc(e, r))
        }
        if (h = t.memoizedState,
        h !== null && (r = h.dehydrated,
        r !== null)) {
            if (n)
                e.flags & 256 ? (il(e),
                e.flags &= -257,
                e = zc(t, e, l)) : e.memoizedState !== null ? (cl(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (cl(),
                u = a.fallback,
                r = e.mode,
                a = An({
                    mode: "visible",
                    children: a.children
                }, r),
                u = _l(u, r, l, null),
                u.flags |= 2,
                a.return = e,
                u.return = e,
                a.sibling = u,
                e.child = a,
                ma(e, t.child, null, l),
                a = e.child,
                a.memoizedState = Ac(l),
                a.childLanes = Rc(t, c, l),
                e.memoizedState = Tc,
                e = u);
            else if (il(e),
            ff(r)) {
                if (c = r.nextSibling && r.nextSibling.dataset,
                c)
                    var T = c.dgst;
                c = T,
                a = Error(f(419)),
                a.stack = "",
                a.digest = c,
                Ja({
                    value: a,
                    source: null,
                    stack: null
                }),
                e = zc(t, e, l)
            } else if (Bt || $a(t, e, l, !1),
            c = (l & t.childLanes) !== 0,
            Bt || c) {
                if (c = gt,
                c !== null && (a = l & -l,
                a = (a & 42) !== 0 ? 1 : fi(a),
                a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a,
                a !== 0 && a !== h.retryLane))
                    throw h.retryLane = a,
                    aa(t, a),
                    re(c, t, a),
                    ts;
                r.data === "$?" || Vc(),
                e = zc(t, e, l)
            } else
                r.data === "$?" ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = h.treeContext,
                Rt = Ae(r.nextSibling),
                Jt = e,
                rt = !0,
                Cl = null,
                Oe = !1,
                t !== null && (ve[ye++] = Be,
                ve[ye++] = qe,
                ve[ye++] = Ul,
                Be = t.id,
                qe = t.overflow,
                Ul = e),
                e = xc(e, a.children),
                e.flags |= 4096);
            return e
        }
        return u ? (cl(),
        u = a.fallback,
        r = e.mode,
        h = t.child,
        T = h.sibling,
        a = He(h, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = h.subtreeFlags & 65011712,
        T !== null ? u = He(T, u) : (u = _l(u, r, l, null),
        u.flags |= 2),
        u.return = e,
        a.return = e,
        a.sibling = u,
        e.child = a,
        a = u,
        u = e.child,
        r = t.child.memoizedState,
        r === null ? r = Ac(l) : (h = r.cachePool,
        h !== null ? (T = Ut._currentValue,
        h = h.parent !== T ? {
            parent: T,
            pool: T
        } : h) : h = $r(),
        r = {
            baseLanes: r.baseLanes | l,
            cachePool: h
        }),
        u.memoizedState = r,
        u.childLanes = Rc(t, c, l),
        e.memoizedState = Tc,
        a) : (il(e),
        l = t.child,
        t = l.sibling,
        l = He(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = e,
        l.sibling = null,
        t !== null && (c = e.deletions,
        c === null ? (e.deletions = [t],
        e.flags |= 16) : c.push(t)),
        e.child = l,
        e.memoizedState = null,
        l)
    }
    function xc(t, e) {
        return e = An({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function An(t, e) {
        return t = ue(22, t, null, e),
        t.lanes = 0,
        t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        t
    }
    function zc(t, e, l) {
        return ma(e, t.child, null, l),
        t = xc(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function os(t, e, l) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e),
        Vi(t.return, e, l)
    }
    function Oc(t, e, l, a, u) {
        var n = t.memoizedState;
        n === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: u
        } : (n.isBackwards = e,
        n.rendering = null,
        n.renderingStartTime = 0,
        n.last = a,
        n.tail = l,
        n.tailMode = u)
    }
    function ss(t, e, l) {
        var a = e.pendingProps
          , u = a.revealOrder
          , n = a.tail;
        if (Lt(t, e, a.children, l),
        a = Nt.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && os(t, l, e);
                    else if (t.tag === 19)
                        os(t, l, e);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break t;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a &= 1
        }
        switch (q(Nt, a),
        u) {
        case "forwards":
            for (l = e.child,
            u = null; l !== null; )
                t = l.alternate,
                t !== null && Sn(t) === null && (u = l),
                l = l.sibling;
            l = u,
            l === null ? (u = e.child,
            e.child = null) : (u = l.sibling,
            l.sibling = null),
            Oc(e, !1, u, l, n);
            break;
        case "backwards":
            for (l = null,
            u = e.child,
            e.child = null; u !== null; ) {
                if (t = u.alternate,
                t !== null && Sn(t) === null) {
                    e.child = u;
                    break
                }
                t = u.sibling,
                u.sibling = l,
                l = u,
                u = t
            }
            Oc(e, !0, l, null, n);
            break;
        case "together":
            Oc(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function Qe(t, e, l) {
        if (t !== null && (e.dependencies = t.dependencies),
        dl |= e.lanes,
        (l & e.childLanes) === 0)
            if (t !== null) {
                if ($a(t, e, l, !1),
                (l & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(f(153));
        if (e.child !== null) {
            for (t = e.child,
            l = He(t, t.pendingProps),
            e.child = l,
            l.return = e; t.sibling !== null; )
                t = t.sibling,
                l = l.sibling = He(t, t.pendingProps),
                l.return = e;
            l.sibling = null
        }
        return e.child
    }
    function Mc(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && ln(t)))
    }
    function qm(t, e, l) {
        switch (e.tag) {
        case 3:
            pt(e, e.stateNode.containerInfo),
            el(e, Ut, t.memoizedState.cache),
            Ka();
            break;
        case 27:
        case 5:
            ai(e);
            break;
        case 4:
            pt(e, e.stateNode.containerInfo);
            break;
        case 10:
            el(e, e.type, e.memoizedProps.value);
            break;
        case 13:
            var a = e.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (il(e),
                e.flags |= 128,
                null) : (l & e.child.childLanes) !== 0 ? rs(t, e, l) : (il(e),
                t = Qe(t, e, l),
                t !== null ? t.sibling : null);
            il(e);
            break;
        case 19:
            var u = (t.flags & 128) !== 0;
            if (a = (l & e.childLanes) !== 0,
            a || ($a(t, e, l, !1),
            a = (l & e.childLanes) !== 0),
            u) {
                if (a)
                    return ss(t, e, l);
                e.flags |= 128
            }
            if (u = e.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            q(Nt, Nt.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0,
            us(t, e, l);
        case 24:
            el(e, Ut, t.memoizedState.cache)
        }
        return Qe(t, e, l)
    }
    function ds(t, e, l) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Bt = !0;
            else {
                if (!Mc(t, l) && (e.flags & 128) === 0)
                    return Bt = !1,
                    qm(t, e, l);
                Bt = (t.flags & 131072) !== 0
            }
        else
            Bt = !1,
            rt && (e.flags & 1048576) !== 0 && Xr(e, en, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                t = e.pendingProps;
                var a = e.elementType
                  , u = a._init;
                if (a = u(a._payload),
                e.type = a,
                typeof a == "function")
                    qi(a) ? (t = Ll(a, t),
                    e.tag = 1,
                    e = cs(null, e, a, t, l)) : (e.tag = 0,
                    e = Ec(null, e, a, t, l));
                else {
                    if (a != null) {
                        if (u = a.$$typeof,
                        u === Et) {
                            e.tag = 11,
                            e = es(null, e, a, t, l);
                            break t
                        } else if (u === _t) {
                            e.tag = 14,
                            e = ls(null, e, a, t, l);
                            break t
                        }
                    }
                    throw e = Rl(a) || a,
                    Error(f(306, e, ""))
                }
            }
            return e;
        case 0:
            return Ec(t, e, e.type, e.pendingProps, l);
        case 1:
            return a = e.type,
            u = Ll(a, e.pendingProps),
            cs(t, e, a, u, l);
        case 3:
            t: {
                if (pt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(f(387));
                a = e.pendingProps;
                var n = e.memoizedState;
                u = n.element,
                Fi(t, e),
                eu(e, a, null, l);
                var c = e.memoizedState;
                if (a = c.cache,
                el(e, Ut, a),
                a !== n.cache && wi(e, [Ut], l, !0),
                tu(),
                a = c.element,
                n.isDehydrated)
                    if (n = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    e.updateQueue.baseState = n,
                    e.memoizedState = n,
                    e.flags & 256) {
                        e = fs(t, e, a, l);
                        break t
                    } else if (a !== u) {
                        u = he(Error(f(424)), e),
                        Ja(u),
                        e = fs(t, e, a, l);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Rt = Ae(t.firstChild),
                        Jt = e,
                        rt = !0,
                        Cl = null,
                        Oe = !0,
                        l = Vo(e, null, a, l),
                        e.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling
                    }
                else {
                    if (Ka(),
                    a === u) {
                        e = Qe(t, e, l);
                        break t
                    }
                    Lt(t, e, a, l)
                }
                e = e.child
            }
            return e;
        case 26:
            return Tn(t, e),
            t === null ? (l = yd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : rt || (l = e.type,
            t = e.pendingProps,
            a = qn(I.current).createElement(l),
            a[Vt] = e,
            a[$t] = t,
            Xt(a, l, t),
            Ht(a),
            e.stateNode = a) : e.memoizedState = yd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return ai(e),
            t === null && rt && (a = e.stateNode = hd(e.type, e.pendingProps, I.current),
            Jt = e,
            Oe = !0,
            u = Rt,
            yl(e.type) ? (rf = u,
            Rt = Ae(a.firstChild)) : Rt = u),
            Lt(t, e, e.pendingProps.children, l),
            Tn(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && rt && ((u = a = Rt) && (a = sv(a, e.type, e.pendingProps, Oe),
            a !== null ? (e.stateNode = a,
            Jt = e,
            Rt = Ae(a.firstChild),
            Oe = !1,
            u = !0) : u = !1),
            u || jl(e)),
            ai(e),
            u = e.type,
            n = e.pendingProps,
            c = t !== null ? t.memoizedProps : null,
            a = n.children,
            uf(u, n) ? a = null : c !== null && uf(u, c) && (e.flags |= 32),
            e.memoizedState !== null && (u = ac(t, e, Dm, null, null, l),
            Au._currentValue = u),
            Tn(t, e),
            Lt(t, e, a, l),
            e.child;
        case 6:
            return t === null && rt && ((t = l = Rt) && (l = dv(l, e.pendingProps, Oe),
            l !== null ? (e.stateNode = l,
            Jt = e,
            Rt = null,
            t = !0) : t = !1),
            t || jl(e)),
            null;
        case 13:
            return rs(t, e, l);
        case 4:
            return pt(e, e.stateNode.containerInfo),
            a = e.pendingProps,
            t === null ? e.child = ma(e, null, a, l) : Lt(t, e, a, l),
            e.child;
        case 11:
            return es(t, e, e.type, e.pendingProps, l);
        case 7:
            return Lt(t, e, e.pendingProps, l),
            e.child;
        case 8:
            return Lt(t, e, e.pendingProps.children, l),
            e.child;
        case 12:
            return Lt(t, e, e.pendingProps.children, l),
            e.child;
        case 10:
            return a = e.pendingProps,
            el(e, e.type, a.value),
            Lt(t, e, a.children, l),
            e.child;
        case 9:
            return u = e.type._context,
            a = e.pendingProps.children,
            Bl(e),
            u = wt(u),
            a = a(u),
            e.flags |= 1,
            Lt(t, e, a, l),
            e.child;
        case 14:
            return ls(t, e, e.type, e.pendingProps, l);
        case 15:
            return as(t, e, e.type, e.pendingProps, l);
        case 19:
            return ss(t, e, l);
        case 31:
            return a = e.pendingProps,
            l = e.mode,
            a = {
                mode: a.mode,
                children: a.children
            },
            t === null ? (l = An(a, l),
            l.ref = e.ref,
            e.child = l,
            l.return = e,
            e = l) : (l = He(t.child, a),
            l.ref = e.ref,
            e.child = l,
            l.return = e,
            e = l),
            e;
        case 22:
            return us(t, e, l);
        case 24:
            return Bl(e),
            a = wt(Ut),
            t === null ? (u = $i(),
            u === null && (u = gt,
            n = Ki(),
            u.pooledCache = n,
            n.refCount++,
            n !== null && (u.pooledCacheLanes |= l),
            u = n),
            e.memoizedState = {
                parent: a,
                cache: u
            },
            Wi(e),
            el(e, Ut, u)) : ((t.lanes & l) !== 0 && (Fi(t, e),
            eu(e, null, null, l),
            tu()),
            u = t.memoizedState,
            n = e.memoizedState,
            u.parent !== a ? (u = {
                parent: a,
                cache: a
            },
            e.memoizedState = u,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u),
            el(e, Ut, a)) : (a = n.cache,
            el(e, Ut, a),
            a !== u.cache && wi(e, [Ut], l, !0))),
            Lt(t, e, e.pendingProps.children, l),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(f(156, e.tag))
    }
    function Ze(t) {
        t.flags |= 4
    }
    function hs(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Ed(e)) {
            if (e = ge.current,
            e !== null && ((it & 4194048) === it ? Me !== null : (it & 62914560) !== it && (it & 536870912) === 0 || e !== Me))
                throw Pa = ki,
                kr;
            t.flags |= 8192
        }
    }
    function Rn(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? Vf() : 536870912,
        t.lanes |= e,
        pa |= e)
    }
    function fu(t, e) {
        if (!rt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var l = null; e !== null; )
                    e.alternate !== null && (l = e),
                    e = e.sibling;
                l === null ? t.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = t.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
    }
    function Tt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , l = 0
          , a = 0;
        if (e)
            for (var u = t.child; u !== null; )
                l |= u.lanes | u.childLanes,
                a |= u.subtreeFlags & 65011712,
                a |= u.flags & 65011712,
                u.return = t,
                u = u.sibling;
        else
            for (u = t.child; u !== null; )
                l |= u.lanes | u.childLanes,
                a |= u.subtreeFlags,
                a |= u.flags,
                u.return = t,
                u = u.sibling;
        return t.subtreeFlags |= a,
        t.childLanes = l,
        e
    }
    function Ym(t, e, l) {
        var a = e.pendingProps;
        switch (Xi(e),
        e.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Tt(e),
            null;
        case 1:
            return Tt(e),
            null;
        case 3:
            return l = e.stateNode,
            a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            Le(Ut),
            Fe(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (t === null || t.child === null) && (wa(e) ? Ze(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Vr())),
            Tt(e),
            null;
        case 26:
            return l = e.memoizedState,
            t === null ? (Ze(e),
            l !== null ? (Tt(e),
            hs(e, l)) : (Tt(e),
            e.flags &= -16777217)) : l ? l !== t.memoizedState ? (Ze(e),
            Tt(e),
            hs(e, l)) : (Tt(e),
            e.flags &= -16777217) : (t.memoizedProps !== a && Ze(e),
            Tt(e),
            e.flags &= -16777217),
            null;
        case 27:
            ju(e),
            l = I.current;
            var u = e.type;
            if (t !== null && e.stateNode != null)
                t.memoizedProps !== a && Ze(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(f(166));
                    return Tt(e),
                    null
                }
                t = K.current,
                wa(e) ? Qr(e) : (t = hd(u, a, l),
                e.stateNode = t,
                Ze(e))
            }
            return Tt(e),
            null;
        case 5:
            if (ju(e),
            l = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== a && Ze(e);
            else {
                if (!a) {
                    if (e.stateNode === null)
                        throw Error(f(166));
                    return Tt(e),
                    null
                }
                if (t = K.current,
                wa(e))
                    Qr(e);
                else {
                    switch (u = qn(I.current),
                    t) {
                    case 1:
                        t = u.createElementNS("http://www.w3.org/2000/svg", l);
                        break;
                    case 2:
                        t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                        break;
                    default:
                        switch (l) {
                        case "svg":
                            t = u.createElementNS("http://www.w3.org/2000/svg", l);
                            break;
                        case "math":
                            t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                            break;
                        case "script":
                            t = u.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof a.is == "string" ? u.createElement("select", {
                                is: a.is
                            }) : u.createElement("select"),
                            a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                            break;
                        default:
                            t = typeof a.is == "string" ? u.createElement(l, {
                                is: a.is
                            }) : u.createElement(l)
                        }
                    }
                    t[Vt] = e,
                    t[$t] = a;
                    t: for (u = e.child; u !== null; ) {
                        if (u.tag === 5 || u.tag === 6)
                            t.appendChild(u.stateNode);
                        else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                            u.child.return = u,
                            u = u.child;
                            continue
                        }
                        if (u === e)
                            break t;
                        for (; u.sibling === null; ) {
                            if (u.return === null || u.return === e)
                                break t;
                            u = u.return
                        }
                        u.sibling.return = u.return,
                        u = u.sibling
                    }
                    e.stateNode = t;
                    t: switch (Xt(t, l, a),
                    l) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!a.autoFocus;
                        break t;
                    case "img":
                        t = !0;
                        break t;
                    default:
                        t = !1
                    }
                    t && Ze(e)
                }
            }
            return Tt(e),
            e.flags &= -16777217,
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== a && Ze(e);
            else {
                if (typeof a != "string" && e.stateNode === null)
                    throw Error(f(166));
                if (t = I.current,
                wa(e)) {
                    if (t = e.stateNode,
                    l = e.memoizedProps,
                    a = null,
                    u = Jt,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            a = u.memoizedProps
                        }
                    t[Vt] = e,
                    t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || id(t.nodeValue, l)),
                    t || jl(e)
                } else
                    t = qn(t).createTextNode(a),
                    t[Vt] = e,
                    e.stateNode = t
            }
            return Tt(e),
            null;
        case 13:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (u = wa(e),
                a !== null && a.dehydrated !== null) {
                    if (t === null) {
                        if (!u)
                            throw Error(f(318));
                        if (u = e.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(f(317));
                        u[Vt] = e
                    } else
                        Ka(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Tt(e),
                    u = !1
                } else
                    u = Vr(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return e.flags & 256 ? (Xe(e),
                    e) : (Xe(e),
                    null)
            }
            if (Xe(e),
            (e.flags & 128) !== 0)
                return e.lanes = l,
                e;
            if (l = a !== null,
            t = t !== null && t.memoizedState !== null,
            l) {
                a = e.child,
                u = null,
                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                var n = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool),
                n !== u && (a.flags |= 2048)
            }
            return l !== t && l && (e.child.flags |= 8192),
            Rn(e, e.updateQueue),
            Tt(e),
            null;
        case 4:
            return Fe(),
            t === null && Ic(e.stateNode.containerInfo),
            Tt(e),
            null;
        case 10:
            return Le(e.type),
            Tt(e),
            null;
        case 19:
            if (L(Nt),
            u = e.memoizedState,
            u === null)
                return Tt(e),
                null;
            if (a = (e.flags & 128) !== 0,
            n = u.rendering,
            n === null)
                if (a)
                    fu(u, !1);
                else {
                    if (xt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (n = Sn(t),
                            n !== null) {
                                for (e.flags |= 128,
                                fu(u, !1),
                                t = n.updateQueue,
                                e.updateQueue = t,
                                Rn(e, t),
                                e.subtreeFlags = 0,
                                t = l,
                                l = e.child; l !== null; )
                                    Gr(l, t),
                                    l = l.sibling;
                                return q(Nt, Nt.current & 1 | 2),
                                e.child
                            }
                            t = t.sibling
                        }
                    u.tail !== null && ze() > On && (e.flags |= 128,
                    a = !0,
                    fu(u, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!a)
                    if (t = Sn(n),
                    t !== null) {
                        if (e.flags |= 128,
                        a = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        Rn(e, t),
                        fu(u, !0),
                        u.tail === null && u.tailMode === "hidden" && !n.alternate && !rt)
                            return Tt(e),
                            null
                    } else
                        2 * ze() - u.renderingStartTime > On && l !== 536870912 && (e.flags |= 128,
                        a = !0,
                        fu(u, !1),
                        e.lanes = 4194304);
                u.isBackwards ? (n.sibling = e.child,
                e.child = n) : (t = u.last,
                t !== null ? t.sibling = n : e.child = n,
                u.last = n)
            }
            return u.tail !== null ? (e = u.tail,
            u.rendering = e,
            u.tail = e.sibling,
            u.renderingStartTime = ze(),
            e.sibling = null,
            t = Nt.current,
            q(Nt, a ? t & 1 | 2 : t & 1),
            e) : (Tt(e),
            null);
        case 22:
        case 23:
            return Xe(e),
            ec(),
            a = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192),
            a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Tt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Tt(e),
            l = e.updateQueue,
            l !== null && Rn(e, l.retryQueue),
            l = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
            a = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            a !== l && (e.flags |= 2048),
            t !== null && L(ql),
            null;
        case 24:
            return l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            Le(Ut),
            Tt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(f(156, e.tag))
    }
    function Lm(t, e) {
        switch (Xi(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return Le(Ut),
            Fe(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return ju(e),
            null;
        case 13:
            if (Xe(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(f(340));
                Ka()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return L(Nt),
            null;
        case 4:
            return Fe(),
            null;
        case 10:
            return Le(e.type),
            null;
        case 22:
        case 23:
            return Xe(e),
            ec(),
            t !== null && L(ql),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return Le(Ut),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function ms(t, e) {
        switch (Xi(e),
        e.tag) {
        case 3:
            Le(Ut),
            Fe();
            break;
        case 26:
        case 27:
        case 5:
            ju(e);
            break;
        case 4:
            Fe();
            break;
        case 13:
            Xe(e);
            break;
        case 19:
            L(Nt);
            break;
        case 10:
            Le(e.type);
            break;
        case 22:
        case 23:
            Xe(e),
            ec(),
            t !== null && L(ql);
            break;
        case 24:
            Le(Ut)
        }
    }
    function ru(t, e) {
        try {
            var l = e.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                l = u;
                do {
                    if ((l.tag & t) === t) {
                        a = void 0;
                        var n = l.create
                          , c = l.inst;
                        a = n(),
                        c.destroy = a
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (r) {
            yt(e, e.return, r)
        }
    }
    function fl(t, e, l) {
        try {
            var a = e.updateQueue
              , u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & t) === t) {
                        var c = a.inst
                          , r = c.destroy;
                        if (r !== void 0) {
                            c.destroy = void 0,
                            u = e;
                            var h = l
                              , T = r;
                            try {
                                T()
                            } catch (D) {
                                yt(u, h, D)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (D) {
            yt(e, e.return, D)
        }
    }
    function vs(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var l = t.stateNode;
            try {
                eo(e, l)
            } catch (a) {
                yt(t, t.return, a)
            }
        }
    }
    function ys(t, e, l) {
        l.props = Ll(t.type, t.memoizedProps),
        l.state = t.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            yt(t, e, a)
        }
    }
    function ou(t, e) {
        try {
            var l = t.ref;
            if (l !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var a = t.stateNode;
                    break;
                case 30:
                    a = t.stateNode;
                    break;
                default:
                    a = t.stateNode
                }
                typeof l == "function" ? t.refCleanup = l(a) : l.current = a
            }
        } catch (u) {
            yt(t, e, u)
        }
    }
    function De(t, e) {
        var l = t.ref
          , a = t.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (u) {
                    yt(t, e, u)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (u) {
                    yt(t, e, u)
                }
            else
                l.current = null
    }
    function gs(t) {
        var e = t.type
          , l = t.memoizedProps
          , a = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break t;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (u) {
            yt(t, t.return, u)
        }
    }
    function Dc(t, e, l) {
        try {
            var a = t.stateNode;
            iv(a, t.type, l, e),
            a[$t] = e
        } catch (u) {
            yt(t, t.return, u)
        }
    }
    function ps(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && yl(t.type) || t.tag === 4
    }
    function _c(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || ps(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && yl(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Uc(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            e.appendChild(t),
            l = l._reactRootContainer,
            l != null || e.onclick !== null || (e.onclick = Bn));
        else if (a !== 4 && (a === 27 && yl(t.type) && (l = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Uc(t, e, l),
            t = t.sibling; t !== null; )
                Uc(t, e, l),
                t = t.sibling
    }
    function xn(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            e ? l.insertBefore(t, e) : l.appendChild(t);
        else if (a !== 4 && (a === 27 && yl(t.type) && (l = t.stateNode),
        t = t.child,
        t !== null))
            for (xn(t, e, l),
            t = t.sibling; t !== null; )
                xn(t, e, l),
                t = t.sibling
    }
    function Ss(t) {
        var e = t.stateNode
          , l = t.memoizedProps;
        try {
            for (var a = t.type, u = e.attributes; u.length; )
                e.removeAttributeNode(u[0]);
            Xt(e, a, l),
            e[Vt] = t,
            e[$t] = l
        } catch (n) {
            yt(t, t.return, n)
        }
    }
    var Ve = !1
      , Ot = !1
      , Nc = !1
      , bs = typeof WeakSet == "function" ? WeakSet : Set
      , qt = null;
    function Gm(t, e) {
        if (t = t.containerInfo,
        lf = Zn,
        t = _r(t),
        _i(t)) {
            if ("selectionStart"in t)
                var l = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    l = (l = t.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var u = a.anchorOffset
                          , n = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            n.nodeType
                        } catch {
                            l = null;
                            break t
                        }
                        var c = 0
                          , r = -1
                          , h = -1
                          , T = 0
                          , D = 0
                          , N = t
                          , A = null;
                        e: for (; ; ) {
                            for (var x; N !== l || u !== 0 && N.nodeType !== 3 || (r = c + u),
                            N !== n || a !== 0 && N.nodeType !== 3 || (h = c + a),
                            N.nodeType === 3 && (c += N.nodeValue.length),
                            (x = N.firstChild) !== null; )
                                A = N,
                                N = x;
                            for (; ; ) {
                                if (N === t)
                                    break e;
                                if (A === l && ++T === u && (r = c),
                                A === n && ++D === a && (h = c),
                                (x = N.nextSibling) !== null)
                                    break;
                                N = A,
                                A = N.parentNode
                            }
                            N = x
                        }
                        l = r === -1 || h === -1 ? null : {
                            start: r,
                            end: h
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (af = {
            focusedElem: t,
            selectionRange: l
        },
        Zn = !1,
        qt = e; qt !== null; )
            if (e = qt,
            t = e.child,
            (e.subtreeFlags & 1024) !== 0 && t !== null)
                t.return = e,
                qt = t;
            else
                for (; qt !== null; ) {
                    switch (e = qt,
                    n = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && n !== null) {
                            t = void 0,
                            l = e,
                            u = n.memoizedProps,
                            n = n.memoizedState,
                            a = l.stateNode;
                            try {
                                var W = Ll(l.type, u, l.elementType === l.type);
                                t = a.getSnapshotBeforeUpdate(W, n),
                                a.__reactInternalSnapshotBeforeUpdate = t
                            } catch (J) {
                                yt(l, l.return, J)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            l = t.nodeType,
                            l === 9)
                                cf(t);
                            else if (l === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    cf(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(f(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        qt = t;
                        break
                    }
                    qt = e.return
                }
    }
    function Es(t, e, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            rl(t, l),
            a & 4 && ru(5, l);
            break;
        case 1:
            if (rl(t, l),
            a & 4)
                if (t = l.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (c) {
                        yt(l, l.return, c)
                    }
                else {
                    var u = Ll(l.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        yt(l, l.return, c)
                    }
                }
            a & 64 && vs(l),
            a & 512 && ou(l, l.return);
            break;
        case 3:
            if (rl(t, l),
            a & 64 && (t = l.updateQueue,
            t !== null)) {
                if (e = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        e = l.child.stateNode;
                        break;
                    case 1:
                        e = l.child.stateNode
                    }
                try {
                    eo(t, e)
                } catch (c) {
                    yt(l, l.return, c)
                }
            }
            break;
        case 27:
            e === null && a & 4 && Ss(l);
        case 26:
        case 5:
            rl(t, l),
            e === null && a & 4 && gs(l),
            a & 512 && ou(l, l.return);
            break;
        case 12:
            rl(t, l);
            break;
        case 13:
            rl(t, l),
            a & 4 && Rs(t, l),
            a & 64 && (t = l.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (l = km.bind(null, l),
            hv(t, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || Ve,
            !a) {
                e = e !== null && e.memoizedState !== null || Ot,
                u = Ve;
                var n = Ot;
                Ve = a,
                (Ot = e) && !n ? ol(t, l, (l.subtreeFlags & 8772) !== 0) : rl(t, l),
                Ve = u,
                Ot = n
            }
            break;
        case 30:
            break;
        default:
            rl(t, l)
        }
    }
    function Ts(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Ts(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && si(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var St = null
      , Ft = !1;
    function we(t, e, l) {
        for (l = l.child; l !== null; )
            As(t, e, l),
            l = l.sibling
    }
    function As(t, e, l) {
        if (ee && typeof ee.onCommitFiberUnmount == "function")
            try {
                ee.onCommitFiberUnmount(Ua, l)
            } catch {}
        switch (l.tag) {
        case 26:
            Ot || De(l, e),
            we(t, e, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            Ot || De(l, e);
            var a = St
              , u = Ft;
            yl(l.type) && (St = l.stateNode,
            Ft = !1),
            we(t, e, l),
            Su(l.stateNode),
            St = a,
            Ft = u;
            break;
        case 5:
            Ot || De(l, e);
        case 6:
            if (a = St,
            u = Ft,
            St = null,
            we(t, e, l),
            St = a,
            Ft = u,
            St !== null)
                if (Ft)
                    try {
                        (St.nodeType === 9 ? St.body : St.nodeName === "HTML" ? St.ownerDocument.body : St).removeChild(l.stateNode)
                    } catch (n) {
                        yt(l, e, n)
                    }
                else
                    try {
                        St.removeChild(l.stateNode)
                    } catch (n) {
                        yt(l, e, n)
                    }
            break;
        case 18:
            St !== null && (Ft ? (t = St,
            sd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode),
            Ou(t)) : sd(St, l.stateNode));
            break;
        case 4:
            a = St,
            u = Ft,
            St = l.stateNode.containerInfo,
            Ft = !0,
            we(t, e, l),
            St = a,
            Ft = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ot || fl(2, l, e),
            Ot || fl(4, l, e),
            we(t, e, l);
            break;
        case 1:
            Ot || (De(l, e),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && ys(l, e, a)),
            we(t, e, l);
            break;
        case 21:
            we(t, e, l);
            break;
        case 22:
            Ot = (a = Ot) || l.memoizedState !== null,
            we(t, e, l),
            Ot = a;
            break;
        default:
            we(t, e, l)
        }
    }
    function Rs(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Ou(t)
            } catch (l) {
                yt(e, e.return, l)
            }
    }
    function Xm(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new bs),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new bs),
            e;
        default:
            throw Error(f(435, t.tag))
        }
    }
    function Cc(t, e) {
        var l = Xm(t);
        e.forEach(function(a) {
            var u = Wm.bind(null, t, a);
            l.has(a) || (l.add(a),
            a.then(u, u))
        })
    }
    function ne(t, e) {
        var l = e.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var u = l[a]
                  , n = t
                  , c = e
                  , r = c;
                t: for (; r !== null; ) {
                    switch (r.tag) {
                    case 27:
                        if (yl(r.type)) {
                            St = r.stateNode,
                            Ft = !1;
                            break t
                        }
                        break;
                    case 5:
                        St = r.stateNode,
                        Ft = !1;
                        break t;
                    case 3:
                    case 4:
                        St = r.stateNode.containerInfo,
                        Ft = !0;
                        break t
                    }
                    r = r.return
                }
                if (St === null)
                    throw Error(f(160));
                As(n, c, u),
                St = null,
                Ft = !1,
                n = u.alternate,
                n !== null && (n.return = null),
                u.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null; )
                xs(e, t),
                e = e.sibling
    }
    var Te = null;
    function xs(t, e) {
        var l = t.alternate
          , a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ne(e, t),
            ie(t),
            a & 4 && (fl(3, t, t.return),
            ru(3, t),
            fl(5, t, t.return));
            break;
        case 1:
            ne(e, t),
            ie(t),
            a & 512 && (Ot || l === null || De(l, l.return)),
            a & 64 && Ve && (t = t.updateQueue,
            t !== null && (a = t.callbacks,
            a !== null && (l = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var u = Te;
            if (ne(e, t),
            ie(t),
            a & 512 && (Ot || l === null || De(l, l.return)),
            a & 4) {
                var n = l !== null ? l.memoizedState : null;
                if (a = t.memoizedState,
                l === null)
                    if (a === null)
                        if (t.stateNode === null) {
                            t: {
                                a = t.type,
                                l = t.memoizedProps,
                                u = u.ownerDocument || u;
                                e: switch (a) {
                                case "title":
                                    n = u.getElementsByTagName("title")[0],
                                    (!n || n[ja] || n[Vt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a),
                                    u.head.insertBefore(n, u.querySelector("head > title"))),
                                    Xt(n, a, l),
                                    n[Vt] = t,
                                    Ht(n),
                                    a = n;
                                    break t;
                                case "link":
                                    var c = Sd("link", "href", u).get(a + (l.href || ""));
                                    if (c) {
                                        for (var r = 0; r < c.length; r++)
                                            if (n = c[r],
                                            n.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && n.getAttribute("rel") === (l.rel == null ? null : l.rel) && n.getAttribute("title") === (l.title == null ? null : l.title) && n.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                c.splice(r, 1);
                                                break e
                                            }
                                    }
                                    n = u.createElement(a),
                                    Xt(n, a, l),
                                    u.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (c = Sd("meta", "content", u).get(a + (l.content || ""))) {
                                        for (r = 0; r < c.length; r++)
                                            if (n = c[r],
                                            n.getAttribute("content") === (l.content == null ? null : "" + l.content) && n.getAttribute("name") === (l.name == null ? null : l.name) && n.getAttribute("property") === (l.property == null ? null : l.property) && n.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && n.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                c.splice(r, 1);
                                                break e
                                            }
                                    }
                                    n = u.createElement(a),
                                    Xt(n, a, l),
                                    u.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(f(468, a))
                                }
                                n[Vt] = t,
                                Ht(n),
                                a = n
                            }
                            t.stateNode = a
                        } else
                            bd(u, t.type, t.stateNode);
                    else
                        t.stateNode = pd(u, a, t.memoizedProps);
                else
                    n !== a ? (n === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : n.count--,
                    a === null ? bd(u, t.type, t.stateNode) : pd(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Dc(t, t.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            ne(e, t),
            ie(t),
            a & 512 && (Ot || l === null || De(l, l.return)),
            l !== null && a & 4 && Dc(t, t.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (ne(e, t),
            ie(t),
            a & 512 && (Ot || l === null || De(l, l.return)),
            t.flags & 32) {
                u = t.stateNode;
                try {
                    Wl(u, "")
                } catch (x) {
                    yt(t, t.return, x)
                }
            }
            a & 4 && t.stateNode != null && (u = t.memoizedProps,
            Dc(t, u, l !== null ? l.memoizedProps : u)),
            a & 1024 && (Nc = !0);
            break;
        case 6:
            if (ne(e, t),
            ie(t),
            a & 4) {
                if (t.stateNode === null)
                    throw Error(f(162));
                a = t.memoizedProps,
                l = t.stateNode;
                try {
                    l.nodeValue = a
                } catch (x) {
                    yt(t, t.return, x)
                }
            }
            break;
        case 3:
            if (Gn = null,
            u = Te,
            Te = Yn(e.containerInfo),
            ne(e, t),
            Te = u,
            ie(t),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    Ou(e.containerInfo)
                } catch (x) {
                    yt(t, t.return, x)
                }
            Nc && (Nc = !1,
            zs(t));
            break;
        case 4:
            a = Te,
            Te = Yn(t.stateNode.containerInfo),
            ne(e, t),
            ie(t),
            Te = a;
            break;
        case 12:
            ne(e, t),
            ie(t);
            break;
        case 13:
            ne(e, t),
            ie(t),
            t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Lc = ze()),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Cc(t, a)));
            break;
        case 22:
            u = t.memoizedState !== null;
            var h = l !== null && l.memoizedState !== null
              , T = Ve
              , D = Ot;
            if (Ve = T || u,
            Ot = D || h,
            ne(e, t),
            Ot = D,
            Ve = T,
            ie(t),
            a & 8192)
                t: for (e = t.stateNode,
                e._visibility = u ? e._visibility & -2 : e._visibility | 1,
                u && (l === null || h || Ve || Ot || Gl(t)),
                l = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (l === null) {
                            h = l = e;
                            try {
                                if (n = h.stateNode,
                                u)
                                    c = n.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    r = h.stateNode;
                                    var N = h.memoizedProps.style
                                      , A = N != null && N.hasOwnProperty("display") ? N.display : null;
                                    r.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim()
                                }
                            } catch (x) {
                                yt(h, h.return, x)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (l === null) {
                            h = e;
                            try {
                                h.stateNode.nodeValue = u ? "" : h.memoizedProps
                            } catch (x) {
                                yt(h, h.return, x)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        l === e && (l = null),
                        e = e.return
                    }
                    l === e && (l = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a & 4 && (a = t.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            Cc(t, l))));
            break;
        case 19:
            ne(e, t),
            ie(t),
            a & 4 && (a = t.updateQueue,
            a !== null && (t.updateQueue = null,
            Cc(t, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ne(e, t),
            ie(t)
        }
    }
    function ie(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var l, a = t.return; a !== null; ) {
                    if (ps(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(f(160));
                switch (l.tag) {
                case 27:
                    var u = l.stateNode
                      , n = _c(t);
                    xn(t, n, u);
                    break;
                case 5:
                    var c = l.stateNode;
                    l.flags & 32 && (Wl(c, ""),
                    l.flags &= -33);
                    var r = _c(t);
                    xn(t, r, c);
                    break;
                case 3:
                case 4:
                    var h = l.stateNode.containerInfo
                      , T = _c(t);
                    Uc(t, T, h);
                    break;
                default:
                    throw Error(f(161))
                }
            } catch (D) {
                yt(t, t.return, D)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function zs(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                zs(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function rl(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Es(t, e.alternate, e),
                e = e.sibling
    }
    function Gl(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                fl(4, e, e.return),
                Gl(e);
                break;
            case 1:
                De(e, e.return);
                var l = e.stateNode;
                typeof l.componentWillUnmount == "function" && ys(e, e.return, l),
                Gl(e);
                break;
            case 27:
                Su(e.stateNode);
            case 26:
            case 5:
                De(e, e.return),
                Gl(e);
                break;
            case 22:
                e.memoizedState === null && Gl(e);
                break;
            case 30:
                Gl(e);
                break;
            default:
                Gl(e)
            }
            t = t.sibling
        }
    }
    function ol(t, e, l) {
        for (l = l && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var a = e.alternate
              , u = t
              , n = e
              , c = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                ol(u, n, l),
                ru(4, n);
                break;
            case 1:
                if (ol(u, n, l),
                a = n,
                u = a.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (T) {
                        yt(a, a.return, T)
                    }
                if (a = n,
                u = a.updateQueue,
                u !== null) {
                    var r = a.stateNode;
                    try {
                        var h = u.shared.hiddenCallbacks;
                        if (h !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < h.length; u++)
                                to(h[u], r)
                    } catch (T) {
                        yt(a, a.return, T)
                    }
                }
                l && c & 64 && vs(n),
                ou(n, n.return);
                break;
            case 27:
                Ss(n);
            case 26:
            case 5:
                ol(u, n, l),
                l && a === null && c & 4 && gs(n),
                ou(n, n.return);
                break;
            case 12:
                ol(u, n, l);
                break;
            case 13:
                ol(u, n, l),
                l && c & 4 && Rs(u, n);
                break;
            case 22:
                n.memoizedState === null && ol(u, n, l),
                ou(n, n.return);
                break;
            case 30:
                break;
            default:
                ol(u, n, l)
            }
            e = e.sibling
        }
    }
    function jc(t, e) {
        var l = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== l && (t != null && t.refCount++,
        l != null && ka(l))
    }
    function Hc(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && ka(t))
    }
    function _e(t, e, l, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Os(t, e, l, a),
                e = e.sibling
    }
    function Os(t, e, l, a) {
        var u = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            _e(t, e, l, a),
            u & 2048 && ru(9, e);
            break;
        case 1:
            _e(t, e, l, a);
            break;
        case 3:
            _e(t, e, l, a),
            u & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && ka(t)));
            break;
        case 12:
            if (u & 2048) {
                _e(t, e, l, a),
                t = e.stateNode;
                try {
                    var n = e.memoizedProps
                      , c = n.id
                      , r = n.onPostCommit;
                    typeof r == "function" && r(c, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (h) {
                    yt(e, e.return, h)
                }
            } else
                _e(t, e, l, a);
            break;
        case 13:
            _e(t, e, l, a);
            break;
        case 23:
            break;
        case 22:
            n = e.stateNode,
            c = e.alternate,
            e.memoizedState !== null ? n._visibility & 2 ? _e(t, e, l, a) : su(t, e) : n._visibility & 2 ? _e(t, e, l, a) : (n._visibility |= 2,
            va(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
            u & 2048 && jc(c, e);
            break;
        case 24:
            _e(t, e, l, a),
            u & 2048 && Hc(e.alternate, e);
            break;
        default:
            _e(t, e, l, a)
        }
    }
    function va(t, e, l, a, u) {
        for (u = u && (e.subtreeFlags & 10256) !== 0,
        e = e.child; e !== null; ) {
            var n = t
              , c = e
              , r = l
              , h = a
              , T = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                va(n, c, r, h, u),
                ru(8, c);
                break;
            case 23:
                break;
            case 22:
                var D = c.stateNode;
                c.memoizedState !== null ? D._visibility & 2 ? va(n, c, r, h, u) : su(n, c) : (D._visibility |= 2,
                va(n, c, r, h, u)),
                u && T & 2048 && jc(c.alternate, c);
                break;
            case 24:
                va(n, c, r, h, u),
                u && T & 2048 && Hc(c.alternate, c);
                break;
            default:
                va(n, c, r, h, u)
            }
            e = e.sibling
        }
    }
    function su(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var l = t
                  , a = e
                  , u = a.flags;
                switch (a.tag) {
                case 22:
                    su(l, a),
                    u & 2048 && jc(a.alternate, a);
                    break;
                case 24:
                    su(l, a),
                    u & 2048 && Hc(a.alternate, a);
                    break;
                default:
                    su(l, a)
                }
                e = e.sibling
            }
    }
    var du = 8192;
    function ya(t) {
        if (t.subtreeFlags & du)
            for (t = t.child; t !== null; )
                Ms(t),
                t = t.sibling
    }
    function Ms(t) {
        switch (t.tag) {
        case 26:
            ya(t),
            t.flags & du && t.memoizedState !== null && zv(Te, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            ya(t);
            break;
        case 3:
        case 4:
            var e = Te;
            Te = Yn(t.stateNode.containerInfo),
            ya(t),
            Te = e;
            break;
        case 22:
            t.memoizedState === null && (e = t.alternate,
            e !== null && e.memoizedState !== null ? (e = du,
            du = 16777216,
            ya(t),
            du = e) : ya(t));
            break;
        default:
            ya(t)
        }
    }
    function Ds(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function hu(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    qt = a,
                    Us(a, t)
                }
            Ds(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                _s(t),
                t = t.sibling
    }
    function _s(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            hu(t),
            t.flags & 2048 && fl(9, t, t.return);
            break;
        case 3:
            hu(t);
            break;
        case 12:
            hu(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            zn(t)) : hu(t);
            break;
        default:
            hu(t)
        }
    }
    function zn(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l];
                    qt = a,
                    Us(a, t)
                }
            Ds(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                fl(8, e, e.return),
                zn(e);
                break;
            case 22:
                l = e.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                zn(e));
                break;
            default:
                zn(e)
            }
            t = t.sibling
        }
    }
    function Us(t, e) {
        for (; qt !== null; ) {
            var l = qt;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                fl(8, l, e);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                ka(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                qt = a;
            else
                t: for (l = t; qt !== null; ) {
                    a = qt;
                    var u = a.sibling
                      , n = a.return;
                    if (Ts(a),
                    a === l) {
                        qt = null;
                        break t
                    }
                    if (u !== null) {
                        u.return = n,
                        qt = u;
                        break t
                    }
                    qt = n
                }
        }
    }
    var Qm = {
        getCacheForType: function(t) {
            var e = wt(Ut)
              , l = e.data.get(t);
            return l === void 0 && (l = t(),
            e.data.set(t, l)),
            l
        }
    }
      , Zm = typeof WeakMap == "function" ? WeakMap : Map
      , ot = 0
      , gt = null
      , ut = null
      , it = 0
      , st = 0
      , ce = null
      , sl = !1
      , ga = !1
      , Bc = !1
      , Ke = 0
      , xt = 0
      , dl = 0
      , Xl = 0
      , qc = 0
      , pe = 0
      , pa = 0
      , mu = null
      , Pt = null
      , Yc = !1
      , Lc = 0
      , On = 1 / 0
      , Mn = null
      , hl = null
      , Gt = 0
      , ml = null
      , Sa = null
      , ba = 0
      , Gc = 0
      , Xc = null
      , Ns = null
      , vu = 0
      , Qc = null;
    function fe() {
        if ((ot & 2) !== 0 && it !== 0)
            return it & -it;
        if (_.T !== null) {
            var t = ca;
            return t !== 0 ? t : kc()
        }
        return Jf()
    }
    function Cs() {
        pe === 0 && (pe = (it & 536870912) === 0 || rt ? Zf() : 536870912);
        var t = ge.current;
        return t !== null && (t.flags |= 32),
        pe
    }
    function re(t, e, l) {
        (t === gt && (st === 2 || st === 9) || t.cancelPendingCommit !== null) && (Ea(t, 0),
        vl(t, it, pe, !1)),
        Ca(t, l),
        ((ot & 2) === 0 || t !== gt) && (t === gt && ((ot & 2) === 0 && (Xl |= l),
        xt === 4 && vl(t, it, pe, !1)),
        Ue(t))
    }
    function js(t, e, l) {
        if ((ot & 6) !== 0)
            throw Error(f(327));
        var a = !l && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Na(t, e)
          , u = a ? Km(t, e) : wc(t, e, !0)
          , n = a;
        do {
            if (u === 0) {
                ga && !a && vl(t, e, 0, !1);
                break
            } else {
                if (l = t.current.alternate,
                n && !Vm(l)) {
                    u = wc(t, e, !1),
                    n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = e,
                    t.errorRecoveryDisabledLanes & n)
                        var c = 0;
                    else
                        c = t.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        e = c;
                        t: {
                            var r = t;
                            u = mu;
                            var h = r.current.memoizedState.isDehydrated;
                            if (h && (Ea(r, c).flags |= 256),
                            c = wc(r, c, !1),
                            c !== 2) {
                                if (Bc && !h) {
                                    r.errorRecoveryDisabledLanes |= n,
                                    Xl |= n,
                                    u = 4;
                                    break t
                                }
                                n = Pt,
                                Pt = u,
                                n !== null && (Pt === null ? Pt = n : Pt.push.apply(Pt, n))
                            }
                            u = c
                        }
                        if (n = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    Ea(t, 0),
                    vl(t, e, 0, !0);
                    break
                }
                t: {
                    switch (a = t,
                    n = u,
                    n) {
                    case 0:
                    case 1:
                        throw Error(f(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        vl(a, e, pe, !sl);
                        break t;
                    case 2:
                        Pt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(f(329))
                    }
                    if ((e & 62914560) === e && (u = Lc + 300 - ze(),
                    10 < u)) {
                        if (vl(a, e, pe, !sl),
                        Yu(a, 0, !0) !== 0)
                            break t;
                        a.timeoutHandle = rd(Hs.bind(null, a, l, Pt, Mn, Yc, e, pe, Xl, pa, sl, n, 2, -0, 0), u);
                        break t
                    }
                    Hs(a, l, Pt, Mn, Yc, e, pe, Xl, pa, sl, n, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ue(t)
    }
    function Hs(t, e, l, a, u, n, c, r, h, T, D, N, A, x) {
        if (t.timeoutHandle = -1,
        N = e.subtreeFlags,
        (N & 8192 || (N & 16785408) === 16785408) && (Tu = {
            stylesheets: null,
            count: 0,
            unsuspend: xv
        },
        Ms(e),
        N = Ov(),
        N !== null)) {
            t.cancelPendingCommit = N(Qs.bind(null, t, e, n, l, a, u, c, r, h, D, 1, A, x)),
            vl(t, n, c, !T);
            return
        }
        Qs(t, e, n, l, a, u, c, r, h)
    }
    function Vm(t) {
        for (var e = t; ; ) {
            var l = e.tag;
            if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var u = l[a]
                      , n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!ae(n(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = e.child,
            e.subtreeFlags & 16384 && l !== null)
                l.return = e,
                e = l;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function vl(t, e, l, a) {
        e &= ~qc,
        e &= ~Xl,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        a && (t.warmLanes |= e),
        a = t.expirationTimes;
        for (var u = e; 0 < u; ) {
            var n = 31 - le(u)
              , c = 1 << n;
            a[n] = -1,
            u &= ~c
        }
        l !== 0 && wf(t, l, e)
    }
    function Dn() {
        return (ot & 6) === 0 ? (yu(0),
        !1) : !0
    }
    function Zc() {
        if (ut !== null) {
            if (st === 0)
                var t = ut.return;
            else
                t = ut,
                Ye = Hl = null,
                ic(t),
                ha = null,
                iu = 0,
                t = ut;
            for (; t !== null; )
                ms(t.alternate, t),
                t = t.return;
            ut = null
        }
    }
    function Ea(t, e) {
        var l = t.timeoutHandle;
        l !== -1 && (t.timeoutHandle = -1,
        fv(l)),
        l = t.cancelPendingCommit,
        l !== null && (t.cancelPendingCommit = null,
        l()),
        Zc(),
        gt = t,
        ut = l = He(t.current, null),
        it = e,
        st = 0,
        ce = null,
        sl = !1,
        ga = Na(t, e),
        Bc = !1,
        pa = pe = qc = Xl = dl = xt = 0,
        Pt = mu = null,
        Yc = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements,
            a &= e; 0 < a; ) {
                var u = 31 - le(a)
                  , n = 1 << u;
                e |= t[u],
                a &= ~n
            }
        return Ke = e,
        Wu(),
        l
    }
    function Bs(t, e) {
        lt = null,
        _.H = yn,
        e === Fa || e === nn ? (e = Pr(),
        st = 3) : e === kr ? (e = Pr(),
        st = 4) : st = e === ts ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        ce = e,
        ut === null && (xt = 1,
        En(t, he(e, t.current)))
    }
    function qs() {
        var t = _.H;
        return _.H = yn,
        t === null ? yn : t
    }
    function Ys() {
        var t = _.A;
        return _.A = Qm,
        t
    }
    function Vc() {
        xt = 4,
        sl || (it & 4194048) !== it && ge.current !== null || (ga = !0),
        (dl & 134217727) === 0 && (Xl & 134217727) === 0 || gt === null || vl(gt, it, pe, !1)
    }
    function wc(t, e, l) {
        var a = ot;
        ot |= 2;
        var u = qs()
          , n = Ys();
        (gt !== t || it !== e) && (Mn = null,
        Ea(t, e)),
        e = !1;
        var c = xt;
        t: do
            try {
                if (st !== 0 && ut !== null) {
                    var r = ut
                      , h = ce;
                    switch (st) {
                    case 8:
                        Zc(),
                        c = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ge.current === null && (e = !0);
                        var T = st;
                        if (st = 0,
                        ce = null,
                        Ta(t, r, h, T),
                        l && ga) {
                            c = 0;
                            break t
                        }
                        break;
                    default:
                        T = st,
                        st = 0,
                        ce = null,
                        Ta(t, r, h, T)
                    }
                }
                wm(),
                c = xt;
                break
            } catch (D) {
                Bs(t, D)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        Ye = Hl = null,
        ot = a,
        _.H = u,
        _.A = n,
        ut === null && (gt = null,
        it = 0,
        Wu()),
        c
    }
    function wm() {
        for (; ut !== null; )
            Ls(ut)
    }
    function Km(t, e) {
        var l = ot;
        ot |= 2;
        var a = qs()
          , u = Ys();
        gt !== t || it !== e ? (Mn = null,
        On = ze() + 500,
        Ea(t, e)) : ga = Na(t, e);
        t: do
            try {
                if (st !== 0 && ut !== null) {
                    e = ut;
                    var n = ce;
                    e: switch (st) {
                    case 1:
                        st = 0,
                        ce = null,
                        Ta(t, e, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (Wr(n)) {
                            st = 0,
                            ce = null,
                            Gs(e);
                            break
                        }
                        e = function() {
                            st !== 2 && st !== 9 || gt !== t || (st = 7),
                            Ue(t)
                        }
                        ,
                        n.then(e, e);
                        break t;
                    case 3:
                        st = 7;
                        break t;
                    case 4:
                        st = 5;
                        break t;
                    case 7:
                        Wr(n) ? (st = 0,
                        ce = null,
                        Gs(e)) : (st = 0,
                        ce = null,
                        Ta(t, e, n, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (ut.tag) {
                        case 26:
                            c = ut.memoizedState;
                        case 5:
                        case 27:
                            var r = ut;
                            if (!c || Ed(c)) {
                                st = 0,
                                ce = null;
                                var h = r.sibling;
                                if (h !== null)
                                    ut = h;
                                else {
                                    var T = r.return;
                                    T !== null ? (ut = T,
                                    _n(T)) : ut = null
                                }
                                break e
                            }
                        }
                        st = 0,
                        ce = null,
                        Ta(t, e, n, 5);
                        break;
                    case 6:
                        st = 0,
                        ce = null,
                        Ta(t, e, n, 6);
                        break;
                    case 8:
                        Zc(),
                        xt = 6;
                        break t;
                    default:
                        throw Error(f(462))
                    }
                }
                Jm();
                break
            } catch (D) {
                Bs(t, D)
            }
        while (!0);
        return Ye = Hl = null,
        _.H = a,
        _.A = u,
        ot = l,
        ut !== null ? 0 : (gt = null,
        it = 0,
        Wu(),
        xt)
    }
    function Jm() {
        for (; ut !== null && !vh(); )
            Ls(ut)
    }
    function Ls(t) {
        var e = ds(t.alternate, t, Ke);
        t.memoizedProps = t.pendingProps,
        e === null ? _n(t) : ut = e
    }
    function Gs(t) {
        var e = t
          , l = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = is(l, e, e.pendingProps, e.type, void 0, it);
            break;
        case 11:
            e = is(l, e, e.pendingProps, e.type.render, e.ref, it);
            break;
        case 5:
            ic(e);
        default:
            ms(l, e),
            e = ut = Gr(e, Ke),
            e = ds(l, e, Ke)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? _n(t) : ut = e
    }
    function Ta(t, e, l, a) {
        Ye = Hl = null,
        ic(e),
        ha = null,
        iu = 0;
        var u = e.return;
        try {
            if (Bm(t, u, e, l, it)) {
                xt = 1,
                En(t, he(l, t.current)),
                ut = null;
                return
            }
        } catch (n) {
            if (u !== null)
                throw ut = u,
                n;
            xt = 1,
            En(t, he(l, t.current)),
            ut = null;
            return
        }
        e.flags & 32768 ? (rt || a === 1 ? t = !0 : ga || (it & 536870912) !== 0 ? t = !1 : (sl = t = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Xs(e, t)) : _n(e)
    }
    function _n(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Xs(e, sl);
                return
            }
            t = e.return;
            var l = Ym(e.alternate, e, Ke);
            if (l !== null) {
                ut = l;
                return
            }
            if (e = e.sibling,
            e !== null) {
                ut = e;
                return
            }
            ut = e = t
        } while (e !== null);
        xt === 0 && (xt = 5)
    }
    function Xs(t, e) {
        do {
            var l = Lm(t.alternate, t);
            if (l !== null) {
                l.flags &= 32767,
                ut = l;
                return
            }
            if (l = t.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                ut = t;
                return
            }
            ut = t = l
        } while (t !== null);
        xt = 6,
        ut = null
    }
    function Qs(t, e, l, a, u, n, c, r, h) {
        t.cancelPendingCommit = null;
        do
            Un();
        while (Gt !== 0);
        if ((ot & 6) !== 0)
            throw Error(f(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(f(177));
            if (n = e.lanes | e.childLanes,
            n |= Hi,
            xh(t, l, n, c, r, h),
            t === gt && (ut = gt = null,
            it = 0),
            Sa = e,
            ml = t,
            ba = l,
            Gc = n,
            Xc = u,
            Ns = a,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            Fm(Hu, function() {
                return Js(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            a = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || a) {
                a = _.T,
                _.T = null,
                u = Y.p,
                Y.p = 2,
                c = ot,
                ot |= 4;
                try {
                    Gm(t, e, l)
                } finally {
                    ot = c,
                    Y.p = u,
                    _.T = a
                }
            }
            Gt = 1,
            Zs(),
            Vs(),
            ws()
        }
    }
    function Zs() {
        if (Gt === 1) {
            Gt = 0;
            var t = ml
              , e = Sa
              , l = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                l = _.T,
                _.T = null;
                var a = Y.p;
                Y.p = 2;
                var u = ot;
                ot |= 4;
                try {
                    xs(e, t);
                    var n = af
                      , c = _r(t.containerInfo)
                      , r = n.focusedElem
                      , h = n.selectionRange;
                    if (c !== r && r && r.ownerDocument && Dr(r.ownerDocument.documentElement, r)) {
                        if (h !== null && _i(r)) {
                            var T = h.start
                              , D = h.end;
                            if (D === void 0 && (D = T),
                            "selectionStart"in r)
                                r.selectionStart = T,
                                r.selectionEnd = Math.min(D, r.value.length);
                            else {
                                var N = r.ownerDocument || document
                                  , A = N && N.defaultView || window;
                                if (A.getSelection) {
                                    var x = A.getSelection()
                                      , W = r.textContent.length
                                      , J = Math.min(h.start, W)
                                      , mt = h.end === void 0 ? J : Math.min(h.end, W);
                                    !x.extend && J > mt && (c = mt,
                                    mt = J,
                                    J = c);
                                    var p = Mr(r, J)
                                      , g = Mr(r, mt);
                                    if (p && g && (x.rangeCount !== 1 || x.anchorNode !== p.node || x.anchorOffset !== p.offset || x.focusNode !== g.node || x.focusOffset !== g.offset)) {
                                        var S = N.createRange();
                                        S.setStart(p.node, p.offset),
                                        x.removeAllRanges(),
                                        J > mt ? (x.addRange(S),
                                        x.extend(g.node, g.offset)) : (S.setEnd(g.node, g.offset),
                                        x.addRange(S))
                                    }
                                }
                            }
                        }
                        for (N = [],
                        x = r; x = x.parentNode; )
                            x.nodeType === 1 && N.push({
                                element: x,
                                left: x.scrollLeft,
                                top: x.scrollTop
                            });
                        for (typeof r.focus == "function" && r.focus(),
                        r = 0; r < N.length; r++) {
                            var U = N[r];
                            U.element.scrollLeft = U.left,
                            U.element.scrollTop = U.top
                        }
                    }
                    Zn = !!lf,
                    af = lf = null
                } finally {
                    ot = u,
                    Y.p = a,
                    _.T = l
                }
            }
            t.current = e,
            Gt = 2
        }
    }
    function Vs() {
        if (Gt === 2) {
            Gt = 0;
            var t = ml
              , e = Sa
              , l = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                l = _.T,
                _.T = null;
                var a = Y.p;
                Y.p = 2;
                var u = ot;
                ot |= 4;
                try {
                    Es(t, e.alternate, e)
                } finally {
                    ot = u,
                    Y.p = a,
                    _.T = l
                }
            }
            Gt = 3
        }
    }
    function ws() {
        if (Gt === 4 || Gt === 3) {
            Gt = 0,
            yh();
            var t = ml
              , e = Sa
              , l = ba
              , a = Ns;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Gt = 5 : (Gt = 0,
            Sa = ml = null,
            Ks(t, t.pendingLanes));
            var u = t.pendingLanes;
            if (u === 0 && (hl = null),
            ri(l),
            e = e.stateNode,
            ee && typeof ee.onCommitFiberRoot == "function")
                try {
                    ee.onCommitFiberRoot(Ua, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                e = _.T,
                u = Y.p,
                Y.p = 2,
                _.T = null;
                try {
                    for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
                        var r = a[c];
                        n(r.value, {
                            componentStack: r.stack
                        })
                    }
                } finally {
                    _.T = e,
                    Y.p = u
                }
            }
            (ba & 3) !== 0 && Un(),
            Ue(t),
            u = t.pendingLanes,
            (l & 4194090) !== 0 && (u & 42) !== 0 ? t === Qc ? vu++ : (vu = 0,
            Qc = t) : vu = 0,
            yu(0)
        }
    }
    function Ks(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        ka(e)))
    }
    function Un(t) {
        return Zs(),
        Vs(),
        ws(),
        Js()
    }
    function Js() {
        if (Gt !== 5)
            return !1;
        var t = ml
          , e = Gc;
        Gc = 0;
        var l = ri(ba)
          , a = _.T
          , u = Y.p;
        try {
            Y.p = 32 > l ? 32 : l,
            _.T = null,
            l = Xc,
            Xc = null;
            var n = ml
              , c = ba;
            if (Gt = 0,
            Sa = ml = null,
            ba = 0,
            (ot & 6) !== 0)
                throw Error(f(331));
            var r = ot;
            if (ot |= 4,
            _s(n.current),
            Os(n, n.current, c, l),
            ot = r,
            yu(0, !1),
            ee && typeof ee.onPostCommitFiberRoot == "function")
                try {
                    ee.onPostCommitFiberRoot(Ua, n)
                } catch {}
            return !0
        } finally {
            Y.p = u,
            _.T = a,
            Ks(t, e)
        }
    }
    function $s(t, e, l) {
        e = he(l, e),
        e = bc(t.stateNode, e, 2),
        t = ul(t, e, 2),
        t !== null && (Ca(t, 2),
        Ue(t))
    }
    function yt(t, e, l) {
        if (t.tag === 3)
            $s(t, t, l);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    $s(e, t, l);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (hl === null || !hl.has(a))) {
                        t = he(l, t),
                        l = Po(2),
                        a = ul(e, l, 2),
                        a !== null && (Io(l, a, e, t),
                        Ca(a, 2),
                        Ue(a));
                        break
                    }
                }
                e = e.return
            }
    }
    function Kc(t, e, l) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new Zm;
            var u = new Set;
            a.set(e, u)
        } else
            u = a.get(e),
            u === void 0 && (u = new Set,
            a.set(e, u));
        u.has(l) || (Bc = !0,
        u.add(l),
        t = $m.bind(null, t, e, l),
        e.then(t, t))
    }
    function $m(t, e, l) {
        var a = t.pingCache;
        a !== null && a.delete(e),
        t.pingedLanes |= t.suspendedLanes & l,
        t.warmLanes &= ~l,
        gt === t && (it & l) === l && (xt === 4 || xt === 3 && (it & 62914560) === it && 300 > ze() - Lc ? (ot & 2) === 0 && Ea(t, 0) : qc |= l,
        pa === it && (pa = 0)),
        Ue(t)
    }
    function ks(t, e) {
        e === 0 && (e = Vf()),
        t = aa(t, e),
        t !== null && (Ca(t, e),
        Ue(t))
    }
    function km(t) {
        var e = t.memoizedState
          , l = 0;
        e !== null && (l = e.retryLane),
        ks(t, l)
    }
    function Wm(t, e) {
        var l = 0;
        switch (t.tag) {
        case 13:
            var a = t.stateNode
              , u = t.memoizedState;
            u !== null && (l = u.retryLane);
            break;
        case 19:
            a = t.stateNode;
            break;
        case 22:
            a = t.stateNode._retryCache;
            break;
        default:
            throw Error(f(314))
        }
        a !== null && a.delete(e),
        ks(t, l)
    }
    function Fm(t, e) {
        return ni(t, e)
    }
    var Nn = null
      , Aa = null
      , Jc = !1
      , Cn = !1
      , $c = !1
      , Ql = 0;
    function Ue(t) {
        t !== Aa && t.next === null && (Aa === null ? Nn = Aa = t : Aa = Aa.next = t),
        Cn = !0,
        Jc || (Jc = !0,
        Im())
    }
    function yu(t, e) {
        if (!$c && Cn) {
            $c = !0;
            do
                for (var l = !1, a = Nn; a !== null; ) {
                    if (t !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0)
                            var n = 0;
                        else {
                            var c = a.suspendedLanes
                              , r = a.pingedLanes;
                            n = (1 << 31 - le(42 | t) + 1) - 1,
                            n &= u & ~(c & ~r),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (l = !0,
                        Is(a, n))
                    } else
                        n = it,
                        n = Yu(a, a === gt ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (n & 3) === 0 || Na(a, n) || (l = !0,
                        Is(a, n));
                    a = a.next
                }
            while (l);
            $c = !1
        }
    }
    function Pm() {
        Ws()
    }
    function Ws() {
        Cn = Jc = !1;
        var t = 0;
        Ql !== 0 && (cv() && (t = Ql),
        Ql = 0);
        for (var e = ze(), l = null, a = Nn; a !== null; ) {
            var u = a.next
              , n = Fs(a, e);
            n === 0 ? (a.next = null,
            l === null ? Nn = u : l.next = u,
            u === null && (Aa = l)) : (l = a,
            (t !== 0 || (n & 3) !== 0) && (Cn = !0)),
            a = u
        }
        yu(t)
    }
    function Fs(t, e) {
        for (var l = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
            var c = 31 - le(n)
              , r = 1 << c
              , h = u[c];
            h === -1 ? ((r & l) === 0 || (r & a) !== 0) && (u[c] = Rh(r, e)) : h <= e && (t.expiredLanes |= r),
            n &= ~r
        }
        if (e = gt,
        l = it,
        l = Yu(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a = t.callbackNode,
        l === 0 || t === e && (st === 2 || st === 9) || t.cancelPendingCommit !== null)
            return a !== null && a !== null && ii(a),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((l & 3) === 0 || Na(t, l)) {
            if (e = l & -l,
            e === t.callbackPriority)
                return e;
            switch (a !== null && ii(a),
            ri(l)) {
            case 2:
            case 8:
                l = Xf;
                break;
            case 32:
                l = Hu;
                break;
            case 268435456:
                l = Qf;
                break;
            default:
                l = Hu
            }
            return a = Ps.bind(null, t),
            l = ni(l, a),
            t.callbackPriority = e,
            t.callbackNode = l,
            e
        }
        return a !== null && a !== null && ii(a),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function Ps(t, e) {
        if (Gt !== 0 && Gt !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var l = t.callbackNode;
        if (Un() && t.callbackNode !== l)
            return null;
        var a = it;
        return a = Yu(t, t === gt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        a === 0 ? null : (js(t, a, e),
        Fs(t, ze()),
        t.callbackNode != null && t.callbackNode === l ? Ps.bind(null, t) : null)
    }
    function Is(t, e) {
        if (Un())
            return null;
        js(t, e, !0)
    }
    function Im() {
        rv(function() {
            (ot & 6) !== 0 ? ni(Gf, Pm) : Ws()
        })
    }
    function kc() {
        return Ql === 0 && (Ql = Zf()),
        Ql
    }
    function td(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Zu("" + t)
    }
    function ed(t, e) {
        var l = e.ownerDocument.createElement("input");
        return l.name = e.name,
        l.value = e.value,
        t.id && l.setAttribute("form", t.id),
        e.parentNode.insertBefore(l, e),
        t = new FormData(t),
        l.parentNode.removeChild(l),
        t
    }
    function tv(t, e, l, a, u) {
        if (e === "submit" && l && l.stateNode === u) {
            var n = td((u[$t] || null).action)
              , c = a.submitter;
            c && (e = (e = c[$t] || null) ? td(e.formAction) : c.getAttribute("formAction"),
            e !== null && (n = e,
            c = null));
            var r = new Ju("action","action",null,a,u);
            t.push({
                event: r,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Ql !== 0) {
                                var h = c ? ed(u, c) : new FormData(u);
                                vc(l, {
                                    pending: !0,
                                    data: h,
                                    method: u.method,
                                    action: n
                                }, null, h)
                            }
                        } else
                            typeof n == "function" && (r.preventDefault(),
                            h = c ? ed(u, c) : new FormData(u),
                            vc(l, {
                                pending: !0,
                                data: h,
                                method: u.method,
                                action: n
                            }, n, h))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Wc = 0; Wc < ji.length; Wc++) {
        var Fc = ji[Wc]
          , ev = Fc.toLowerCase()
          , lv = Fc[0].toUpperCase() + Fc.slice(1);
        Ee(ev, "on" + lv)
    }
    Ee(Cr, "onAnimationEnd"),
    Ee(jr, "onAnimationIteration"),
    Ee(Hr, "onAnimationStart"),
    Ee("dblclick", "onDoubleClick"),
    Ee("focusin", "onFocus"),
    Ee("focusout", "onBlur"),
    Ee(Sm, "onTransitionRun"),
    Ee(bm, "onTransitionStart"),
    Ee(Em, "onTransitionCancel"),
    Ee(Br, "onTransitionEnd"),
    Jl("onMouseEnter", ["mouseout", "mouseover"]),
    Jl("onMouseLeave", ["mouseout", "mouseover"]),
    Jl("onPointerEnter", ["pointerout", "pointerover"]),
    Jl("onPointerLeave", ["pointerout", "pointerover"]),
    zl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    zl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    zl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    zl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    zl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    zl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var gu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , av = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gu));
    function ld(t, e) {
        e = (e & 4) !== 0;
        for (var l = 0; l < t.length; l++) {
            var a = t[l]
              , u = a.event;
            a = a.listeners;
            t: {
                var n = void 0;
                if (e)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var r = a[c]
                          , h = r.instance
                          , T = r.currentTarget;
                        if (r = r.listener,
                        h !== n && u.isPropagationStopped())
                            break t;
                        n = r,
                        u.currentTarget = T;
                        try {
                            n(u)
                        } catch (D) {
                            bn(D)
                        }
                        u.currentTarget = null,
                        n = h
                    }
                else
                    for (c = 0; c < a.length; c++) {
                        if (r = a[c],
                        h = r.instance,
                        T = r.currentTarget,
                        r = r.listener,
                        h !== n && u.isPropagationStopped())
                            break t;
                        n = r,
                        u.currentTarget = T;
                        try {
                            n(u)
                        } catch (D) {
                            bn(D)
                        }
                        u.currentTarget = null,
                        n = h
                    }
            }
        }
    }
    function nt(t, e) {
        var l = e[oi];
        l === void 0 && (l = e[oi] = new Set);
        var a = t + "__bubble";
        l.has(a) || (ad(e, t, 2, !1),
        l.add(a))
    }
    function Pc(t, e, l) {
        var a = 0;
        e && (a |= 4),
        ad(l, t, a, e)
    }
    var jn = "_reactListening" + Math.random().toString(36).slice(2);
    function Ic(t) {
        if (!t[jn]) {
            t[jn] = !0,
            kf.forEach(function(l) {
                l !== "selectionchange" && (av.has(l) || Pc(l, !1, t),
                Pc(l, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[jn] || (e[jn] = !0,
            Pc("selectionchange", !1, e))
        }
    }
    function ad(t, e, l, a) {
        switch (Od(e)) {
        case 2:
            var u = _v;
            break;
        case 8:
            u = Uv;
            break;
        default:
            u = mf
        }
        l = u.bind(null, e, l, t),
        u = void 0,
        !Ei || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0),
        a ? u !== void 0 ? t.addEventListener(e, l, {
            capture: !0,
            passive: u
        }) : t.addEventListener(e, l, !0) : u !== void 0 ? t.addEventListener(e, l, {
            passive: u
        }) : t.addEventListener(e, l, !1)
    }
    function tf(t, e, l, a, u) {
        var n = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
            t: for (; ; ) {
                if (a === null)
                    return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var r = a.stateNode.containerInfo;
                    if (r === u)
                        break;
                    if (c === 4)
                        for (c = a.return; c !== null; ) {
                            var h = c.tag;
                            if ((h === 3 || h === 4) && c.stateNode.containerInfo === u)
                                return;
                            c = c.return
                        }
                    for (; r !== null; ) {
                        if (c = Vl(r),
                        c === null)
                            return;
                        if (h = c.tag,
                        h === 5 || h === 6 || h === 26 || h === 27) {
                            a = n = c;
                            continue t
                        }
                        r = r.parentNode
                    }
                }
                a = a.return
            }
        rr(function() {
            var T = n
              , D = Si(l)
              , N = [];
            t: {
                var A = qr.get(t);
                if (A !== void 0) {
                    var x = Ju
                      , W = t;
                    switch (t) {
                    case "keypress":
                        if (wu(l) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        x = Fh;
                        break;
                    case "focusin":
                        W = "focus",
                        x = xi;
                        break;
                    case "focusout":
                        W = "blur",
                        x = xi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = xi;
                        break;
                    case "click":
                        if (l.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = dr;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = Lh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = tm;
                        break;
                    case Cr:
                    case jr:
                    case Hr:
                        x = Qh;
                        break;
                    case Br:
                        x = lm;
                        break;
                    case "scroll":
                    case "scrollend":
                        x = qh;
                        break;
                    case "wheel":
                        x = um;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = Vh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = mr;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        x = im
                    }
                    var J = (e & 4) !== 0
                      , mt = !J && (t === "scroll" || t === "scrollend")
                      , p = J ? A !== null ? A + "Capture" : null : A;
                    J = [];
                    for (var g = T, S; g !== null; ) {
                        var U = g;
                        if (S = U.stateNode,
                        U = U.tag,
                        U !== 5 && U !== 26 && U !== 27 || S === null || p === null || (U = Ba(g, p),
                        U != null && J.push(pu(g, U, S))),
                        mt)
                            break;
                        g = g.return
                    }
                    0 < J.length && (A = new x(A,W,null,l,D),
                    N.push({
                        event: A,
                        listeners: J
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (A = t === "mouseover" || t === "pointerover",
                    x = t === "mouseout" || t === "pointerout",
                    A && l !== pi && (W = l.relatedTarget || l.fromElement) && (Vl(W) || W[Zl]))
                        break t;
                    if ((x || A) && (A = D.window === D ? D : (A = D.ownerDocument) ? A.defaultView || A.parentWindow : window,
                    x ? (W = l.relatedTarget || l.toElement,
                    x = T,
                    W = W ? Vl(W) : null,
                    W !== null && (mt = m(W),
                    J = W.tag,
                    W !== mt || J !== 5 && J !== 27 && J !== 6) && (W = null)) : (x = null,
                    W = T),
                    x !== W)) {
                        if (J = dr,
                        U = "onMouseLeave",
                        p = "onMouseEnter",
                        g = "mouse",
                        (t === "pointerout" || t === "pointerover") && (J = mr,
                        U = "onPointerLeave",
                        p = "onPointerEnter",
                        g = "pointer"),
                        mt = x == null ? A : Ha(x),
                        S = W == null ? A : Ha(W),
                        A = new J(U,g + "leave",x,l,D),
                        A.target = mt,
                        A.relatedTarget = S,
                        U = null,
                        Vl(D) === T && (J = new J(p,g + "enter",W,l,D),
                        J.target = S,
                        J.relatedTarget = mt,
                        U = J),
                        mt = U,
                        x && W)
                            e: {
                                for (J = x,
                                p = W,
                                g = 0,
                                S = J; S; S = Ra(S))
                                    g++;
                                for (S = 0,
                                U = p; U; U = Ra(U))
                                    S++;
                                for (; 0 < g - S; )
                                    J = Ra(J),
                                    g--;
                                for (; 0 < S - g; )
                                    p = Ra(p),
                                    S--;
                                for (; g--; ) {
                                    if (J === p || p !== null && J === p.alternate)
                                        break e;
                                    J = Ra(J),
                                    p = Ra(p)
                                }
                                J = null
                            }
                        else
                            J = null;
                        x !== null && ud(N, A, x, J, !1),
                        W !== null && mt !== null && ud(N, mt, W, J, !0)
                    }
                }
                t: {
                    if (A = T ? Ha(T) : window,
                    x = A.nodeName && A.nodeName.toLowerCase(),
                    x === "select" || x === "input" && A.type === "file")
                        var G = Tr;
                    else if (br(A))
                        if (Ar)
                            G = ym;
                        else {
                            G = mm;
                            var at = hm
                        }
                    else
                        x = A.nodeName,
                        !x || x.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? T && gi(T.elementType) && (G = Tr) : G = vm;
                    if (G && (G = G(t, T))) {
                        Er(N, G, l, D);
                        break t
                    }
                    at && at(t, A, T),
                    t === "focusout" && T && A.type === "number" && T.memoizedProps.value != null && yi(A, "number", A.value)
                }
                switch (at = T ? Ha(T) : window,
                t) {
                case "focusin":
                    (br(at) || at.contentEditable === "true") && (ta = at,
                    Ui = T,
                    Va = null);
                    break;
                case "focusout":
                    Va = Ui = ta = null;
                    break;
                case "mousedown":
                    Ni = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ni = !1,
                    Ur(N, l, D);
                    break;
                case "selectionchange":
                    if (pm)
                        break;
                case "keydown":
                case "keyup":
                    Ur(N, l, D)
                }
                var Z;
                if (Oi)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var $ = "onCompositionStart";
                            break t;
                        case "compositionend":
                            $ = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            $ = "onCompositionUpdate";
                            break t
                        }
                        $ = void 0
                    }
                else
                    Il ? pr(t, l) && ($ = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && ($ = "onCompositionStart");
                $ && (vr && l.locale !== "ko" && (Il || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Il && (Z = or()) : (tl = D,
                Ti = "value"in tl ? tl.value : tl.textContent,
                Il = !0)),
                at = Hn(T, $),
                0 < at.length && ($ = new hr($,t,null,l,D),
                N.push({
                    event: $,
                    listeners: at
                }),
                Z ? $.data = Z : (Z = Sr(l),
                Z !== null && ($.data = Z)))),
                (Z = fm ? rm(t, l) : om(t, l)) && ($ = Hn(T, "onBeforeInput"),
                0 < $.length && (at = new hr("onBeforeInput","beforeinput",null,l,D),
                N.push({
                    event: at,
                    listeners: $
                }),
                at.data = Z)),
                tv(N, t, T, l, D)
            }
            ld(N, e)
        })
    }
    function pu(t, e, l) {
        return {
            instance: t,
            listener: e,
            currentTarget: l
        }
    }
    function Hn(t, e) {
        for (var l = e + "Capture", a = []; t !== null; ) {
            var u = t
              , n = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ba(t, l),
            u != null && a.unshift(pu(t, u, n)),
            u = Ba(t, e),
            u != null && a.push(pu(t, u, n))),
            t.tag === 3)
                return a;
            t = t.return
        }
        return []
    }
    function Ra(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function ud(t, e, l, a, u) {
        for (var n = e._reactName, c = []; l !== null && l !== a; ) {
            var r = l
              , h = r.alternate
              , T = r.stateNode;
            if (r = r.tag,
            h !== null && h === a)
                break;
            r !== 5 && r !== 26 && r !== 27 || T === null || (h = T,
            u ? (T = Ba(l, n),
            T != null && c.unshift(pu(l, T, h))) : u || (T = Ba(l, n),
            T != null && c.push(pu(l, T, h)))),
            l = l.return
        }
        c.length !== 0 && t.push({
            event: e,
            listeners: c
        })
    }
    var uv = /\r\n?/g
      , nv = /\u0000|\uFFFD/g;
    function nd(t) {
        return (typeof t == "string" ? t : "" + t).replace(uv, `
`).replace(nv, "")
    }
    function id(t, e) {
        return e = nd(e),
        nd(t) === e
    }
    function Bn() {}
    function ht(t, e, l, a, u, n) {
        switch (l) {
        case "children":
            typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Wl(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Wl(t, "" + a);
            break;
        case "className":
            Gu(t, "class", a);
            break;
        case "tabIndex":
            Gu(t, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Gu(t, l, a);
            break;
        case "style":
            cr(t, a, n);
            break;
        case "data":
            if (e !== "object") {
                Gu(t, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (e !== "a" || l !== "href")) {
                t.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(l);
                break
            }
            a = Zu("" + a),
            t.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (l === "formAction" ? (e !== "input" && ht(t, e, "name", u.name, u, null),
                ht(t, e, "formEncType", u.formEncType, u, null),
                ht(t, e, "formMethod", u.formMethod, u, null),
                ht(t, e, "formTarget", u.formTarget, u, null)) : (ht(t, e, "encType", u.encType, u, null),
                ht(t, e, "method", u.method, u, null),
                ht(t, e, "target", u.target, u, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(l);
                break
            }
            a = Zu("" + a),
            t.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (t.onclick = Bn);
            break;
        case "onScroll":
            a != null && nt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && nt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (u.children != null)
                        throw Error(f(60));
                    t.innerHTML = l
                }
            }
            break;
        case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            l = Zu("" + a),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
            break;
        case "popover":
            nt("beforetoggle", t),
            nt("toggle", t),
            Lu(t, "popover", a);
            break;
        case "xlinkActuate":
            Ce(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ce(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ce(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ce(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ce(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ce(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ce(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ce(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ce(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Lu(t, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Hh.get(l) || l,
            Lu(t, l, a))
        }
    }
    function ef(t, e, l, a, u, n) {
        switch (l) {
        case "style":
            cr(t, a, n);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (u.children != null)
                        throw Error(f(60));
                    t.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? Wl(t, a) : (typeof a == "number" || typeof a == "bigint") && Wl(t, "" + a);
            break;
        case "onScroll":
            a != null && nt("scroll", t);
            break;
        case "onScrollEnd":
            a != null && nt("scrollend", t);
            break;
        case "onClick":
            a != null && (t.onclick = Bn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Wf.hasOwnProperty(l))
                t: {
                    if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"),
                    e = l.slice(2, u ? l.length - 7 : void 0),
                    n = t[$t] || null,
                    n = n != null ? n[l] : null,
                    typeof n == "function" && t.removeEventListener(e, n, u),
                    typeof a == "function")) {
                        typeof n != "function" && n !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)),
                        t.addEventListener(e, a, u);
                        break t
                    }
                    l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Lu(t, l, a)
                }
        }
    }
    function Xt(t, e, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            nt("error", t),
            nt("load", t);
            var a = !1, u = !1, n;
            for (n in l)
                if (l.hasOwnProperty(n)) {
                    var c = l[n];
                    if (c != null)
                        switch (n) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, e));
                        default:
                            ht(t, e, n, c, l, null)
                        }
                }
            u && ht(t, e, "srcSet", l.srcSet, l, null),
            a && ht(t, e, "src", l.src, l, null);
            return;
        case "input":
            nt("invalid", t);
            var r = n = c = u = null
              , h = null
              , T = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var D = l[a];
                    if (D != null)
                        switch (a) {
                        case "name":
                            u = D;
                            break;
                        case "type":
                            c = D;
                            break;
                        case "checked":
                            h = D;
                            break;
                        case "defaultChecked":
                            T = D;
                            break;
                        case "value":
                            n = D;
                            break;
                        case "defaultValue":
                            r = D;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (D != null)
                                throw Error(f(137, e));
                            break;
                        default:
                            ht(t, e, a, D, l, null)
                        }
                }
            ar(t, n, r, h, T, c, u, !1),
            Xu(t);
            return;
        case "select":
            nt("invalid", t),
            a = c = n = null;
            for (u in l)
                if (l.hasOwnProperty(u) && (r = l[u],
                r != null))
                    switch (u) {
                    case "value":
                        n = r;
                        break;
                    case "defaultValue":
                        c = r;
                        break;
                    case "multiple":
                        a = r;
                    default:
                        ht(t, e, u, r, l, null)
                    }
            e = n,
            l = c,
            t.multiple = !!a,
            e != null ? kl(t, !!a, e, !1) : l != null && kl(t, !!a, l, !0);
            return;
        case "textarea":
            nt("invalid", t),
            n = u = a = null;
            for (c in l)
                if (l.hasOwnProperty(c) && (r = l[c],
                r != null))
                    switch (c) {
                    case "value":
                        a = r;
                        break;
                    case "defaultValue":
                        u = r;
                        break;
                    case "children":
                        n = r;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(f(91));
                        break;
                    default:
                        ht(t, e, c, r, l, null)
                    }
            nr(t, a, u, n),
            Xu(t);
            return;
        case "option":
            for (h in l)
                if (l.hasOwnProperty(h) && (a = l[h],
                a != null))
                    switch (h) {
                    case "selected":
                        t.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        ht(t, e, h, a, l, null)
                    }
            return;
        case "dialog":
            nt("beforetoggle", t),
            nt("toggle", t),
            nt("cancel", t),
            nt("close", t);
            break;
        case "iframe":
        case "object":
            nt("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < gu.length; a++)
                nt(gu[a], t);
            break;
        case "image":
            nt("error", t),
            nt("load", t);
            break;
        case "details":
            nt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            nt("error", t),
            nt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (T in l)
                if (l.hasOwnProperty(T) && (a = l[T],
                a != null))
                    switch (T) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(f(137, e));
                    default:
                        ht(t, e, T, a, l, null)
                    }
            return;
        default:
            if (gi(e)) {
                for (D in l)
                    l.hasOwnProperty(D) && (a = l[D],
                    a !== void 0 && ef(t, e, D, a, l, void 0));
                return
            }
        }
        for (r in l)
            l.hasOwnProperty(r) && (a = l[r],
            a != null && ht(t, e, r, a, l, null))
    }
    function iv(t, e, l, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var u = null
              , n = null
              , c = null
              , r = null
              , h = null
              , T = null
              , D = null;
            for (x in l) {
                var N = l[x];
                if (l.hasOwnProperty(x) && N != null)
                    switch (x) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        h = N;
                    default:
                        a.hasOwnProperty(x) || ht(t, e, x, null, a, N)
                    }
            }
            for (var A in a) {
                var x = a[A];
                if (N = l[A],
                a.hasOwnProperty(A) && (x != null || N != null))
                    switch (A) {
                    case "type":
                        n = x;
                        break;
                    case "name":
                        u = x;
                        break;
                    case "checked":
                        T = x;
                        break;
                    case "defaultChecked":
                        D = x;
                        break;
                    case "value":
                        c = x;
                        break;
                    case "defaultValue":
                        r = x;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (x != null)
                            throw Error(f(137, e));
                        break;
                    default:
                        x !== N && ht(t, e, A, x, a, N)
                    }
            }
            vi(t, c, r, h, T, D, n, u);
            return;
        case "select":
            x = c = r = A = null;
            for (n in l)
                if (h = l[n],
                l.hasOwnProperty(n) && h != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        x = h;
                    default:
                        a.hasOwnProperty(n) || ht(t, e, n, null, a, h)
                    }
            for (u in a)
                if (n = a[u],
                h = l[u],
                a.hasOwnProperty(u) && (n != null || h != null))
                    switch (u) {
                    case "value":
                        A = n;
                        break;
                    case "defaultValue":
                        r = n;
                        break;
                    case "multiple":
                        c = n;
                    default:
                        n !== h && ht(t, e, u, n, a, h)
                    }
            e = r,
            l = c,
            a = x,
            A != null ? kl(t, !!l, A, !1) : !!a != !!l && (e != null ? kl(t, !!l, e, !0) : kl(t, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            x = A = null;
            for (r in l)
                if (u = l[r],
                l.hasOwnProperty(r) && u != null && !a.hasOwnProperty(r))
                    switch (r) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ht(t, e, r, null, a, u)
                    }
            for (c in a)
                if (u = a[c],
                n = l[c],
                a.hasOwnProperty(c) && (u != null || n != null))
                    switch (c) {
                    case "value":
                        A = u;
                        break;
                    case "defaultValue":
                        x = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(f(91));
                        break;
                    default:
                        u !== n && ht(t, e, c, u, a, n)
                    }
            ur(t, A, x);
            return;
        case "option":
            for (var W in l)
                if (A = l[W],
                l.hasOwnProperty(W) && A != null && !a.hasOwnProperty(W))
                    switch (W) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        ht(t, e, W, null, a, A)
                    }
            for (h in a)
                if (A = a[h],
                x = l[h],
                a.hasOwnProperty(h) && A !== x && (A != null || x != null))
                    switch (h) {
                    case "selected":
                        t.selected = A && typeof A != "function" && typeof A != "symbol";
                        break;
                    default:
                        ht(t, e, h, A, a, x)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var J in l)
                A = l[J],
                l.hasOwnProperty(J) && A != null && !a.hasOwnProperty(J) && ht(t, e, J, null, a, A);
            for (T in a)
                if (A = a[T],
                x = l[T],
                a.hasOwnProperty(T) && A !== x && (A != null || x != null))
                    switch (T) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (A != null)
                            throw Error(f(137, e));
                        break;
                    default:
                        ht(t, e, T, A, a, x)
                    }
            return;
        default:
            if (gi(e)) {
                for (var mt in l)
                    A = l[mt],
                    l.hasOwnProperty(mt) && A !== void 0 && !a.hasOwnProperty(mt) && ef(t, e, mt, void 0, a, A);
                for (D in a)
                    A = a[D],
                    x = l[D],
                    !a.hasOwnProperty(D) || A === x || A === void 0 && x === void 0 || ef(t, e, D, A, a, x);
                return
            }
        }
        for (var p in l)
            A = l[p],
            l.hasOwnProperty(p) && A != null && !a.hasOwnProperty(p) && ht(t, e, p, null, a, A);
        for (N in a)
            A = a[N],
            x = l[N],
            !a.hasOwnProperty(N) || A === x || A == null && x == null || ht(t, e, N, A, a, x)
    }
    var lf = null
      , af = null;
    function qn(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function cd(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function fd(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function uf(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var nf = null;
    function cv() {
        var t = window.event;
        return t && t.type === "popstate" ? t === nf ? !1 : (nf = t,
        !0) : (nf = null,
        !1)
    }
    var rd = typeof setTimeout == "function" ? setTimeout : void 0
      , fv = typeof clearTimeout == "function" ? clearTimeout : void 0
      , od = typeof Promise == "function" ? Promise : void 0
      , rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof od < "u" ? function(t) {
        return od.resolve(null).then(t).catch(ov)
    }
    : rd;
    function ov(t) {
        setTimeout(function() {
            throw t
        })
    }
    function yl(t) {
        return t === "head"
    }
    function sd(t, e) {
        var l = e
          , a = 0
          , u = 0;
        do {
            var n = l.nextSibling;
            if (t.removeChild(l),
            n && n.nodeType === 8)
                if (l = n.data,
                l === "/$") {
                    if (0 < a && 8 > a) {
                        l = a;
                        var c = t.ownerDocument;
                        if (l & 1 && Su(c.documentElement),
                        l & 2 && Su(c.body),
                        l & 4)
                            for (l = c.head,
                            Su(l),
                            c = l.firstChild; c; ) {
                                var r = c.nextSibling
                                  , h = c.nodeName;
                                c[ja] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c),
                                c = r
                            }
                    }
                    if (u === 0) {
                        t.removeChild(n),
                        Ou(e);
                        return
                    }
                    u--
                } else
                    l === "$" || l === "$?" || l === "$!" ? u++ : a = l.charCodeAt(0) - 48;
            else
                a = 0;
            l = n
        } while (l);
        Ou(e)
    }
    function cf(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var l = e;
            switch (e = e.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                cf(l),
                si(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(l)
        }
    }
    function sv(t, e, l, a) {
        for (; t.nodeType === 1; ) {
            var u = l;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (a) {
                if (!t[ja])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (n = t.getAttribute("rel"),
                        n === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (n = t.getAttribute("src"),
                        (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && t.getAttribute("name") === n)
                    return t
            } else
                return t;
            if (t = Ae(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function dv(t, e, l) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ae(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function ff(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }
    function hv(t, e) {
        var l = t.ownerDocument;
        if (t.data !== "$?" || l.readyState === "complete")
            e();
        else {
            var a = function() {
                e(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            t._reactRetry = a
        }
    }
    function Ae(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
                    break;
                if (e === "/$")
                    return null
            }
        }
        return t
    }
    var rf = null;
    function dd(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "$" || l === "$!" || l === "$?") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    l === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }
    function hd(t, e, l) {
        switch (e = qn(l),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(f(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(f(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(f(454));
            return t;
        default:
            throw Error(f(451))
        }
    }
    function Su(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        si(t)
    }
    var Se = new Map
      , md = new Set;
    function Yn(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Je = Y.d;
    Y.d = {
        f: mv,
        r: vv,
        D: yv,
        C: gv,
        L: pv,
        m: Sv,
        X: Ev,
        S: bv,
        M: Tv
    };
    function mv() {
        var t = Je.f()
          , e = Dn();
        return t || e
    }
    function vv(t) {
        var e = wl(t);
        e !== null && e.tag === 5 && e.type === "form" ? jo(e) : Je.r(t)
    }
    var xa = typeof document > "u" ? null : document;
    function vd(t, e, l) {
        var a = xa;
        if (a && typeof e == "string" && e) {
            var u = de(e);
            u = 'link[rel="' + t + '"][href="' + u + '"]',
            typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
            md.has(u) || (md.add(u),
            t = {
                rel: t,
                crossOrigin: l,
                href: e
            },
            a.querySelector(u) === null && (e = a.createElement("link"),
            Xt(e, "link", t),
            Ht(e),
            a.head.appendChild(e)))
        }
    }
    function yv(t) {
        Je.D(t),
        vd("dns-prefetch", t, null)
    }
    function gv(t, e) {
        Je.C(t, e),
        vd("preconnect", t, e)
    }
    function pv(t, e, l) {
        Je.L(t, e, l);
        var a = xa;
        if (a && t && e) {
            var u = 'link[rel="preload"][as="' + de(e) + '"]';
            e === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + de(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (u += '[imagesizes="' + de(l.imageSizes) + '"]')) : u += '[href="' + de(t) + '"]';
            var n = u;
            switch (e) {
            case "style":
                n = za(t);
                break;
            case "script":
                n = Oa(t)
            }
            Se.has(n) || (t = R({
                rel: "preload",
                href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                as: e
            }, l),
            Se.set(n, t),
            a.querySelector(u) !== null || e === "style" && a.querySelector(bu(n)) || e === "script" && a.querySelector(Eu(n)) || (e = a.createElement("link"),
            Xt(e, "link", t),
            Ht(e),
            a.head.appendChild(e)))
        }
    }
    function Sv(t, e) {
        Je.m(t, e);
        var l = xa;
        if (l && t) {
            var a = e && typeof e.as == "string" ? e.as : "script"
              , u = 'link[rel="modulepreload"][as="' + de(a) + '"][href="' + de(t) + '"]'
              , n = u;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = Oa(t)
            }
            if (!Se.has(n) && (t = R({
                rel: "modulepreload",
                href: t
            }, e),
            Se.set(n, t),
            l.querySelector(u) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(Eu(n)))
                        return
                }
                a = l.createElement("link"),
                Xt(a, "link", t),
                Ht(a),
                l.head.appendChild(a)
            }
        }
    }
    function bv(t, e, l) {
        Je.S(t, e, l);
        var a = xa;
        if (a && t) {
            var u = Kl(a).hoistableStyles
              , n = za(t);
            e = e || "default";
            var c = u.get(n);
            if (!c) {
                var r = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(bu(n)))
                    r.loading = 5;
                else {
                    t = R({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, l),
                    (l = Se.get(n)) && of(t, l);
                    var h = c = a.createElement("link");
                    Ht(h),
                    Xt(h, "link", t),
                    h._p = new Promise(function(T, D) {
                        h.onload = T,
                        h.onerror = D
                    }
                    ),
                    h.addEventListener("load", function() {
                        r.loading |= 1
                    }),
                    h.addEventListener("error", function() {
                        r.loading |= 2
                    }),
                    r.loading |= 4,
                    Ln(c, e, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: r
                },
                u.set(n, c)
            }
        }
    }
    function Ev(t, e) {
        Je.X(t, e);
        var l = xa;
        if (l && t) {
            var a = Kl(l).hoistableScripts
              , u = Oa(t)
              , n = a.get(u);
            n || (n = l.querySelector(Eu(u)),
            n || (t = R({
                src: t,
                async: !0
            }, e),
            (e = Se.get(u)) && sf(t, e),
            n = l.createElement("script"),
            Ht(n),
            Xt(n, "link", t),
            l.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function Tv(t, e) {
        Je.M(t, e);
        var l = xa;
        if (l && t) {
            var a = Kl(l).hoistableScripts
              , u = Oa(t)
              , n = a.get(u);
            n || (n = l.querySelector(Eu(u)),
            n || (t = R({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Se.get(u)) && sf(t, e),
            n = l.createElement("script"),
            Ht(n),
            Xt(n, "link", t),
            l.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function yd(t, e, l, a) {
        var u = (u = I.current) ? Yn(u) : null;
        if (!u)
            throw Error(f(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (e = za(l.href),
            l = Kl(u).hoistableStyles,
            a = l.get(e),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                t = za(l.href);
                var n = Kl(u).hoistableStyles
                  , c = n.get(t);
                if (c || (u = u.ownerDocument || u,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(t, c),
                (n = u.querySelector(bu(t))) && !n._p && (c.instance = n,
                c.state.loading = 5),
                Se.has(t) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                Se.set(t, l),
                n || Av(u, t, l, c.state))),
                e && a === null)
                    throw Error(f(528, ""));
                return c
            }
            if (e && a !== null)
                throw Error(f(529, ""));
            return null;
        case "script":
            return e = l.async,
            l = l.src,
            typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Oa(l),
            l = Kl(u).hoistableScripts,
            a = l.get(e),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(f(444, t))
        }
    }
    function za(t) {
        return 'href="' + de(t) + '"'
    }
    function bu(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function gd(t) {
        return R({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function Av(t, e, l, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"),
        a.preload = e,
        e.addEventListener("load", function() {
            return a.loading |= 1
        }),
        e.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Xt(e, "link", l),
        Ht(e),
        t.head.appendChild(e))
    }
    function Oa(t) {
        return '[src="' + de(t) + '"]'
    }
    function Eu(t) {
        return "script[async]" + t
    }
    function pd(t, e, l) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + de(l.href) + '"]');
                if (a)
                    return e.instance = a,
                    Ht(a),
                    a;
                var u = R({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"),
                Ht(a),
                Xt(a, "style", u),
                Ln(a, l.precedence, t),
                e.instance = a;
            case "stylesheet":
                u = za(l.href);
                var n = t.querySelector(bu(u));
                if (n)
                    return e.state.loading |= 4,
                    e.instance = n,
                    Ht(n),
                    n;
                a = gd(l),
                (u = Se.get(u)) && of(a, u),
                n = (t.ownerDocument || t).createElement("link"),
                Ht(n);
                var c = n;
                return c._p = new Promise(function(r, h) {
                    c.onload = r,
                    c.onerror = h
                }
                ),
                Xt(n, "link", a),
                e.state.loading |= 4,
                Ln(n, l.precedence, t),
                e.instance = n;
            case "script":
                return n = Oa(l.src),
                (u = t.querySelector(Eu(n))) ? (e.instance = u,
                Ht(u),
                u) : (a = l,
                (u = Se.get(n)) && (a = R({}, l),
                sf(a, u)),
                t = t.ownerDocument || t,
                u = t.createElement("script"),
                Ht(u),
                Xt(u, "link", a),
                t.head.appendChild(u),
                e.instance = u);
            case "void":
                return null;
            default:
                throw Error(f(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance,
            e.state.loading |= 4,
            Ln(a, l.precedence, t));
        return e.instance
    }
    function Ln(t, e, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
            var r = a[c];
            if (r.dataset.precedence === e)
                n = r;
            else if (n !== u)
                break
        }
        n ? n.parentNode.insertBefore(t, n.nextSibling) : (e = l.nodeType === 9 ? l.head : l,
        e.insertBefore(t, e.firstChild))
    }
    function of(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function sf(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Gn = null;
    function Sd(t, e, l) {
        if (Gn === null) {
            var a = new Map
              , u = Gn = new Map;
            u.set(l, a)
        } else
            u = Gn,
            a = u.get(l),
            a || (a = new Map,
            u.set(l, a));
        if (a.has(t))
            return a;
        for (a.set(t, null),
        l = l.getElementsByTagName(t),
        u = 0; u < l.length; u++) {
            var n = l[u];
            if (!(n[ja] || n[Vt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = n.getAttribute(e) || "";
                c = t + c;
                var r = a.get(c);
                r ? r.push(n) : a.set(c, [n])
            }
        }
        return a
    }
    function bd(t, e, l) {
        t = t.ownerDocument || t,
        t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
    }
    function Rv(t, e, l) {
        if (l === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Ed(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Tu = null;
    function xv() {}
    function zv(t, e, l) {
        if (Tu === null)
            throw Error(f(475));
        var a = Tu;
        if (e.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var u = za(l.href)
                  , n = t.querySelector(bu(u));
                if (n) {
                    t = n._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++,
                    a = Xn.bind(a),
                    t.then(a, a)),
                    e.state.loading |= 4,
                    e.instance = n,
                    Ht(n);
                    return
                }
                n = t.ownerDocument || t,
                l = gd(l),
                (u = Se.get(u)) && of(l, u),
                n = n.createElement("link"),
                Ht(n);
                var c = n;
                c._p = new Promise(function(r, h) {
                    c.onload = r,
                    c.onerror = h
                }
                ),
                Xt(n, "link", l),
                e.instance = n
            }
            a.stylesheets === null && (a.stylesheets = new Map),
            a.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++,
            e = Xn.bind(a),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    function Ov() {
        if (Tu === null)
            throw Error(f(475));
        var t = Tu;
        return t.stylesheets && t.count === 0 && df(t, t.stylesheets),
        0 < t.count ? function(e) {
            var l = setTimeout(function() {
                if (t.stylesheets && df(t, t.stylesheets),
                t.unsuspend) {
                    var a = t.unsuspend;
                    t.unsuspend = null,
                    a()
                }
            }, 6e4);
            return t.unsuspend = e,
            function() {
                t.unsuspend = null,
                clearTimeout(l)
            }
        }
        : null
    }
    function Xn() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                df(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var Qn = null;
    function df(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        Qn = new Map,
        e.forEach(Mv, t),
        Qn = null,
        Xn.call(t))
    }
    function Mv(t, e) {
        if (!(e.state.loading & 4)) {
            var l = Qn.get(t);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                Qn.set(t, l);
                for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var c = u[n];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c),
                    a = c)
                }
                a && l.set(null, a)
            }
            u = e.instance,
            c = u.getAttribute("data-precedence"),
            n = l.get(c) || a,
            n === a && l.set(null, u),
            l.set(c, u),
            this.count++,
            a = Xn.bind(this),
            u.addEventListener("load", a),
            u.addEventListener("error", a),
            n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(u, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Au = {
        $$typeof: tt,
        Provider: null,
        Consumer: null,
        _currentValue: k,
        _currentValue2: k,
        _threadCount: 0
    };
    function Dv(t, e, l, a, u, n, c, r) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = ci(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ci(0),
        this.hiddenUpdates = ci(null),
        this.identifierPrefix = a,
        this.onUncaughtError = u,
        this.onCaughtError = n,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = r,
        this.incompleteTransitions = new Map
    }
    function Td(t, e, l, a, u, n, c, r, h, T, D, N) {
        return t = new Dv(t,e,l,c,r,h,T,N),
        e = 1,
        n === !0 && (e |= 24),
        n = ue(3, null, null, e),
        t.current = n,
        n.stateNode = t,
        e = Ki(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        n.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: e
        },
        Wi(n),
        t
    }
    function Ad(t) {
        return t ? (t = ua,
        t) : ua
    }
    function Rd(t, e, l, a, u, n) {
        u = Ad(u),
        a.context === null ? a.context = u : a.pendingContext = u,
        a = al(e),
        a.payload = {
            element: l
        },
        n = n === void 0 ? null : n,
        n !== null && (a.callback = n),
        l = ul(t, a, e),
        l !== null && (re(l, t, e),
        Ia(l, t, e))
    }
    function xd(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var l = t.retryLane;
            t.retryLane = l !== 0 && l < e ? l : e
        }
    }
    function hf(t, e) {
        xd(t, e),
        (t = t.alternate) && xd(t, e)
    }
    function zd(t) {
        if (t.tag === 13) {
            var e = aa(t, 67108864);
            e !== null && re(e, t, 67108864),
            hf(t, 67108864)
        }
    }
    var Zn = !0;
    function _v(t, e, l, a) {
        var u = _.T;
        _.T = null;
        var n = Y.p;
        try {
            Y.p = 2,
            mf(t, e, l, a)
        } finally {
            Y.p = n,
            _.T = u
        }
    }
    function Uv(t, e, l, a) {
        var u = _.T;
        _.T = null;
        var n = Y.p;
        try {
            Y.p = 8,
            mf(t, e, l, a)
        } finally {
            Y.p = n,
            _.T = u
        }
    }
    function mf(t, e, l, a) {
        if (Zn) {
            var u = vf(a);
            if (u === null)
                tf(t, e, a, Vn, l),
                Md(t, a);
            else if (Cv(u, t, e, l, a))
                a.stopPropagation();
            else if (Md(t, a),
            e & 4 && -1 < Nv.indexOf(t)) {
                for (; u !== null; ) {
                    var n = wl(u);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var c = xl(n.pendingLanes);
                                if (c !== 0) {
                                    var r = n;
                                    for (r.pendingLanes |= 2,
                                    r.entangledLanes |= 2; c; ) {
                                        var h = 1 << 31 - le(c);
                                        r.entanglements[1] |= h,
                                        c &= ~h
                                    }
                                    Ue(n),
                                    (ot & 6) === 0 && (On = ze() + 500,
                                    yu(0))
                                }
                            }
                            break;
                        case 13:
                            r = aa(n, 2),
                            r !== null && re(r, n, 2),
                            Dn(),
                            hf(n, 2)
                        }
                    if (n = vf(a),
                    n === null && tf(t, e, a, Vn, l),
                    n === u)
                        break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else
                tf(t, e, a, null, l)
        }
    }
    function vf(t) {
        return t = Si(t),
        yf(t)
    }
    var Vn = null;
    function yf(t) {
        if (Vn = null,
        t = Vl(t),
        t !== null) {
            var e = m(t);
            if (e === null)
                t = null;
            else {
                var l = e.tag;
                if (l === 13) {
                    if (t = E(e),
                    t !== null)
                        return t;
                    t = null
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return Vn = t,
        null
    }
    function Od(t) {
        switch (t) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (gh()) {
            case Gf:
                return 2;
            case Xf:
                return 8;
            case Hu:
            case ph:
                return 32;
            case Qf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var gf = !1
      , gl = null
      , pl = null
      , Sl = null
      , Ru = new Map
      , xu = new Map
      , bl = []
      , Nv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Md(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            gl = null;
            break;
        case "dragenter":
        case "dragleave":
            pl = null;
            break;
        case "mouseover":
        case "mouseout":
            Sl = null;
            break;
        case "pointerover":
        case "pointerout":
            Ru.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            xu.delete(e.pointerId)
        }
    }
    function zu(t, e, l, a, u, n) {
        return t === null || t.nativeEvent !== n ? (t = {
            blockedOn: e,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        },
        e !== null && (e = wl(e),
        e !== null && zd(e)),
        t) : (t.eventSystemFlags |= a,
        e = t.targetContainers,
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t)
    }
    function Cv(t, e, l, a, u) {
        switch (e) {
        case "focusin":
            return gl = zu(gl, t, e, l, a, u),
            !0;
        case "dragenter":
            return pl = zu(pl, t, e, l, a, u),
            !0;
        case "mouseover":
            return Sl = zu(Sl, t, e, l, a, u),
            !0;
        case "pointerover":
            var n = u.pointerId;
            return Ru.set(n, zu(Ru.get(n) || null, t, e, l, a, u)),
            !0;
        case "gotpointercapture":
            return n = u.pointerId,
            xu.set(n, zu(xu.get(n) || null, t, e, l, a, u)),
            !0
        }
        return !1
    }
    function Dd(t) {
        var e = Vl(t.target);
        if (e !== null) {
            var l = m(e);
            if (l !== null) {
                if (e = l.tag,
                e === 13) {
                    if (e = E(l),
                    e !== null) {
                        t.blockedOn = e,
                        zh(t.priority, function() {
                            if (l.tag === 13) {
                                var a = fe();
                                a = fi(a);
                                var u = aa(l, a);
                                u !== null && re(u, l, a),
                                hf(l, a)
                            }
                        });
                        return
                    }
                } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function wn(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var l = vf(t.nativeEvent);
            if (l === null) {
                l = t.nativeEvent;
                var a = new l.constructor(l.type,l);
                pi = a,
                l.target.dispatchEvent(a),
                pi = null
            } else
                return e = wl(l),
                e !== null && zd(e),
                t.blockedOn = l,
                !1;
            e.shift()
        }
        return !0
    }
    function _d(t, e, l) {
        wn(t) && l.delete(e)
    }
    function jv() {
        gf = !1,
        gl !== null && wn(gl) && (gl = null),
        pl !== null && wn(pl) && (pl = null),
        Sl !== null && wn(Sl) && (Sl = null),
        Ru.forEach(_d),
        xu.forEach(_d)
    }
    function Kn(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        gf || (gf = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, jv)))
    }
    var Jn = null;
    function Ud(t) {
        Jn !== t && (Jn = t,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            Jn === t && (Jn = null);
            for (var e = 0; e < t.length; e += 3) {
                var l = t[e]
                  , a = t[e + 1]
                  , u = t[e + 2];
                if (typeof a != "function") {
                    if (yf(a || l) === null)
                        continue;
                    break
                }
                var n = wl(l);
                n !== null && (t.splice(e, 3),
                e -= 3,
                vc(n, {
                    pending: !0,
                    data: u,
                    method: l.method,
                    action: a
                }, a, u))
            }
        }))
    }
    function Ou(t) {
        function e(h) {
            return Kn(h, t)
        }
        gl !== null && Kn(gl, t),
        pl !== null && Kn(pl, t),
        Sl !== null && Kn(Sl, t),
        Ru.forEach(e),
        xu.forEach(e);
        for (var l = 0; l < bl.length; l++) {
            var a = bl[l];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < bl.length && (l = bl[0],
        l.blockedOn === null); )
            Dd(l),
            l.blockedOn === null && bl.shift();
        if (l = (t.ownerDocument || t).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var u = l[a]
                  , n = l[a + 1]
                  , c = u[$t] || null;
                if (typeof n == "function")
                    c || Ud(l);
                else if (c) {
                    var r = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n,
                        c = n[$t] || null)
                            r = c.formAction;
                        else if (yf(u) !== null)
                            continue
                    } else
                        r = c.action;
                    typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3),
                    a -= 3),
                    Ud(l)
                }
            }
    }
    function pf(t) {
        this._internalRoot = t
    }
    $n.prototype.render = pf.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(f(409));
        var l = e.current
          , a = fe();
        Rd(l, a, t, e, null, null)
    }
    ,
    $n.prototype.unmount = pf.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Rd(t.current, 2, null, t, null, null),
            Dn(),
            e[Zl] = null
        }
    }
    ;
    function $n(t) {
        this._internalRoot = t
    }
    $n.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Jf();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var l = 0; l < bl.length && e !== 0 && e < bl[l].priority; l++)
                ;
            bl.splice(l, 0, t),
            l === 0 && Dd(t)
        }
    }
    ;
    var Nd = o.version;
    if (Nd !== "19.1.1")
        throw Error(f(527, Nd, "19.1.1"));
    Y.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","),
            Error(f(268, t)));
        return t = b(e),
        t = t !== null ? v(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var Hv = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: _,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!kn.isDisabled && kn.supportsFiber)
            try {
                Ua = kn.inject(Hv),
                ee = kn
            } catch {}
    }
    return Du.createRoot = function(t, e) {
        if (!d(t))
            throw Error(f(299));
        var l = !1
          , a = ""
          , u = $o
          , n = ko
          , c = Wo
          , r = null;
        return e != null && (e.unstable_strictMode === !0 && (l = !0),
        e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
        e.onCaughtError !== void 0 && (n = e.onCaughtError),
        e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
        e.unstable_transitionCallbacks !== void 0 && (r = e.unstable_transitionCallbacks)),
        e = Td(t, 1, !1, null, null, l, a, u, n, c, r, null),
        t[Zl] = e.current,
        Ic(t),
        new pf(e)
    }
    ,
    Du.hydrateRoot = function(t, e, l) {
        if (!d(t))
            throw Error(f(299));
        var a = !1
          , u = ""
          , n = $o
          , c = ko
          , r = Wo
          , h = null
          , T = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
        l.onCaughtError !== void 0 && (c = l.onCaughtError),
        l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
        l.unstable_transitionCallbacks !== void 0 && (h = l.unstable_transitionCallbacks),
        l.formState !== void 0 && (T = l.formState)),
        e = Td(t, 1, !0, e, l ?? null, a, u, n, c, r, h, T),
        e.context = Ad(null),
        l = e.current,
        a = fe(),
        a = fi(a),
        u = al(a),
        u.callback = null,
        ul(l, u, a),
        l = a,
        e.current.lanes = l,
        Ca(e, l),
        Ue(e),
        t[Zl] = e.current,
        Ic(t),
        new $n(e)
    }
    ,
    Du.version = "19.1.1",
    Du
}
var Qd;
function wv() {
    if (Qd)
        return Ef.exports;
    Qd = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (o) {
                console.error(o)
            }
    }
    return i(),
    Ef.exports = Vv(),
    Ef.exports
}
var Kv = wv();
const kd = O.createContext(null)
  , Jv = ({children: i}) => {
    const [o,s] = O.useState( () => {
        const m = sessionStorage.getItem("session");
        return m ? JSON.parse(m) : null
    }
    )
      , f = (m, E) => {
        if (m === "admin" && E === "1234") {
            const M = {
                name: m
            };
            return s(M),
            sessionStorage.setItem("session", JSON.stringify(M)),
            !0
        }
        return !1
    }
      , d = () => {
        sessionStorage.removeItem("session"),
        s(null),
        alert("Cerrando sesion")
    }
    ;
    return z.jsx(kd.Provider, {
        value: {
            user: o,
            login: f,
            logout: d
        },
        children: i
    })
}
;
/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Zd = "popstate";
function $v(i={}) {
    function o(f, d) {
        let {pathname: m, search: E, hash: M} = f.location;
        return Of("", {
            pathname: m,
            search: E,
            hash: M
        }, d.state && d.state.usr || null, d.state && d.state.key || "default")
    }
    function s(f, d) {
        return typeof d == "string" ? d : Uu(d)
    }
    return Wv(o, s, null, i)
}
function bt(i, o) {
    if (i === !1 || i === null || typeof i > "u")
        throw new Error(o)
}
function Re(i, o) {
    if (!i) {
        typeof console < "u" && console.warn(o);
        try {
            throw new Error(o)
        } catch {}
    }
}
function kv() {
    return Math.random().toString(36).substring(2, 10)
}
function Vd(i, o) {
    return {
        usr: i.state,
        key: i.key,
        idx: o
    }
}
function Of(i, o, s=null, f) {
    return {
        pathname: typeof i == "string" ? i : i.pathname,
        search: "",
        hash: "",
        ...typeof o == "string" ? Ma(o) : o,
        state: s,
        key: o && o.key || f || kv()
    }
}
function Uu({pathname: i="/", search: o="", hash: s=""}) {
    return o && o !== "?" && (i += o.charAt(0) === "?" ? o : "?" + o),
    s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s),
    i
}
function Ma(i) {
    let o = {};
    if (i) {
        let s = i.indexOf("#");
        s >= 0 && (o.hash = i.substring(s),
        i = i.substring(0, s));
        let f = i.indexOf("?");
        f >= 0 && (o.search = i.substring(f),
        i = i.substring(0, f)),
        i && (o.pathname = i)
    }
    return o
}
function Wv(i, o, s, f={}) {
    let {window: d=document.defaultView, v5Compat: m=!1} = f
      , E = d.history
      , M = "POP"
      , b = null
      , v = R();
    v == null && (v = 0,
    E.replaceState({
        ...E.state,
        idx: v
    }, ""));
    function R() {
        return (E.state || {
            idx: null
        }).idx
    }
    function C() {
        M = "POP";
        let X = R()
          , w = X == null ? null : X - v;
        v = X,
        b && b({
            action: M,
            location: F.location,
            delta: w
        })
    }
    function H(X, w) {
        M = "PUSH";
        let Q = Of(F.location, X, w);
        v = R() + 1;
        let tt = Vd(Q, v)
          , Et = F.createHref(Q);
        try {
            E.pushState(tt, "", Et)
        } catch (P) {
            if (P instanceof DOMException && P.name === "DataCloneError")
                throw P;
            d.location.assign(Et)
        }
        m && b && b({
            action: M,
            location: F.location,
            delta: 1
        })
    }
    function B(X, w) {
        M = "REPLACE";
        let Q = Of(F.location, X, w);
        v = R();
        let tt = Vd(Q, v)
          , Et = F.createHref(Q);
        E.replaceState(tt, "", Et),
        m && b && b({
            action: M,
            location: F.location,
            delta: 0
        })
    }
    function V(X) {
        return Fv(X)
    }
    let F = {
        get action() {
            return M
        },
        get location() {
            return i(d, E)
        },
        listen(X) {
            if (b)
                throw new Error("A history only accepts one active listener");
            return d.addEventListener(Zd, C),
            b = X,
            () => {
                d.removeEventListener(Zd, C),
                b = null
            }
        },
        createHref(X) {
            return o(d, X)
        },
        createURL: V,
        encodeLocation(X) {
            let w = V(X);
            return {
                pathname: w.pathname,
                search: w.search,
                hash: w.hash
            }
        },
        push: H,
        replace: B,
        go(X) {
            return E.go(X)
        }
    };
    return F
}
function Fv(i, o=!1) {
    let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href),
    bt(s, "No window.location.(origin|href) available to create URL");
    let f = typeof i == "string" ? i : Uu(i);
    return f = f.replace(/ $/, "%20"),
    !o && f.startsWith("//") && (f = s + f),
    new URL(f,s)
}
function Wd(i, o, s="/") {
    return Pv(i, o, s, !1)
}
function Pv(i, o, s, f) {
    let d = typeof o == "string" ? Ma(o) : o
      , m = We(d.pathname || "/", s);
    if (m == null)
        return null;
    let E = Fd(i);
    Iv(E);
    let M = null;
    for (let b = 0; M == null && b < E.length; ++b) {
        let v = oy(m);
        M = fy(E[b], v, f)
    }
    return M
}
function Fd(i, o=[], s=[], f="", d=!1) {
    let m = (E, M, b=d, v) => {
        let R = {
            relativePath: v === void 0 ? E.path || "" : v,
            caseSensitive: E.caseSensitive === !0,
            childrenIndex: M,
            route: E
        };
        if (R.relativePath.startsWith("/")) {
            if (!R.relativePath.startsWith(f) && b)
                return;
            bt(R.relativePath.startsWith(f), `Absolute route path "${R.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            R.relativePath = R.relativePath.slice(f.length)
        }
        let C = ke([f, R.relativePath])
          , H = s.concat(R);
        E.children && E.children.length > 0 && (bt(E.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${C}".`),
        Fd(E.children, o, H, C, b)),
        !(E.path == null && !E.index) && o.push({
            path: C,
            score: iy(C, E.index),
            routesMeta: H
        })
    }
    ;
    return i.forEach( (E, M) => {
        if (E.path === "" || !E.path?.includes("?"))
            m(E, M);
        else
            for (let b of Pd(E.path))
                m(E, M, !0, b)
    }
    ),
    o
}
function Pd(i) {
    let o = i.split("/");
    if (o.length === 0)
        return [];
    let[s,...f] = o
      , d = s.endsWith("?")
      , m = s.replace(/\?$/, "");
    if (f.length === 0)
        return d ? [m, ""] : [m];
    let E = Pd(f.join("/"))
      , M = [];
    return M.push(...E.map(b => b === "" ? m : [m, b].join("/"))),
    d && M.push(...E),
    M.map(b => i.startsWith("/") && b === "" ? "/" : b)
}
function Iv(i) {
    i.sort( (o, s) => o.score !== s.score ? s.score - o.score : cy(o.routesMeta.map(f => f.childrenIndex), s.routesMeta.map(f => f.childrenIndex)))
}
var ty = /^:[\w-]+$/
  , ey = 3
  , ly = 2
  , ay = 1
  , uy = 10
  , ny = -2
  , wd = i => i === "*";
function iy(i, o) {
    let s = i.split("/")
      , f = s.length;
    return s.some(wd) && (f += ny),
    o && (f += ly),
    s.filter(d => !wd(d)).reduce( (d, m) => d + (ty.test(m) ? ey : m === "" ? ay : uy), f)
}
function cy(i, o) {
    return i.length === o.length && i.slice(0, -1).every( (f, d) => f === o[d]) ? i[i.length - 1] - o[o.length - 1] : 0
}
function fy(i, o, s=!1) {
    let {routesMeta: f} = i
      , d = {}
      , m = "/"
      , E = [];
    for (let M = 0; M < f.length; ++M) {
        let b = f[M]
          , v = M === f.length - 1
          , R = m === "/" ? o : o.slice(m.length) || "/"
          , C = In({
            path: b.relativePath,
            caseSensitive: b.caseSensitive,
            end: v
        }, R)
          , H = b.route;
        if (!C && v && s && !f[f.length - 1].route.index && (C = In({
            path: b.relativePath,
            caseSensitive: b.caseSensitive,
            end: !1
        }, R)),
        !C)
            return null;
        Object.assign(d, C.params),
        E.push({
            params: d,
            pathname: ke([m, C.pathname]),
            pathnameBase: my(ke([m, C.pathnameBase])),
            route: H
        }),
        C.pathnameBase !== "/" && (m = ke([m, C.pathnameBase]))
    }
    return E
}
function In(i, o) {
    typeof i == "string" && (i = {
        path: i,
        caseSensitive: !1,
        end: !0
    });
    let[s,f] = ry(i.path, i.caseSensitive, i.end)
      , d = o.match(s);
    if (!d)
        return null;
    let m = d[0]
      , E = m.replace(/(.)\/+$/, "$1")
      , M = d.slice(1);
    return {
        params: f.reduce( (v, {paramName: R, isOptional: C}, H) => {
            if (R === "*") {
                let V = M[H] || "";
                E = m.slice(0, m.length - V.length).replace(/(.)\/+$/, "$1")
            }
            const B = M[H];
            return C && !B ? v[R] = void 0 : v[R] = (B || "").replace(/%2F/g, "/"),
            v
        }
        , {}),
        pathname: m,
        pathnameBase: E,
        pattern: i
    }
}
function ry(i, o=!1, s=!0) {
    Re(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
    let f = []
      , d = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (E, M, b) => (f.push({
        paramName: M,
        isOptional: b != null
    }),
    b ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return i.endsWith("*") ? (f.push({
        paramName: "*"
    }),
    d += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? d += "\\/*$" : i !== "" && i !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d,o ? void 0 : "i"), f]
}
function oy(i) {
    try {
        return i.split("/").map(o => decodeURIComponent(o).replace(/\//g, "%2F")).join("/")
    } catch (o) {
        return Re(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),
        i
    }
}
function We(i, o) {
    if (o === "/")
        return i;
    if (!i.toLowerCase().startsWith(o.toLowerCase()))
        return null;
    let s = o.endsWith("/") ? o.length - 1 : o.length
      , f = i.charAt(s);
    return f && f !== "/" ? null : i.slice(s) || "/"
}
function sy(i, o="/") {
    let {pathname: s, search: f="", hash: d=""} = typeof i == "string" ? Ma(i) : i;
    return {
        pathname: s ? s.startsWith("/") ? s : dy(s, o) : o,
        search: vy(f),
        hash: yy(d)
    }
}
function dy(i, o) {
    let s = o.replace(/\/+$/, "").split("/");
    return i.split("/").forEach(d => {
        d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function xf(i, o, s, f) {
    return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function hy(i) {
    return i.filter( (o, s) => s === 0 || o.route.path && o.route.path.length > 0)
}
function _f(i) {
    let o = hy(i);
    return o.map( (s, f) => f === o.length - 1 ? s.pathname : s.pathnameBase)
}
function Uf(i, o, s, f=!1) {
    let d;
    typeof i == "string" ? d = Ma(i) : (d = {
        ...i
    },
    bt(!d.pathname || !d.pathname.includes("?"), xf("?", "pathname", "search", d)),
    bt(!d.pathname || !d.pathname.includes("#"), xf("#", "pathname", "hash", d)),
    bt(!d.search || !d.search.includes("#"), xf("#", "search", "hash", d)));
    let m = i === "" || d.pathname === "", E = m ? "/" : d.pathname, M;
    if (E == null)
        M = s;
    else {
        let C = o.length - 1;
        if (!f && E.startsWith("..")) {
            let H = E.split("/");
            for (; H[0] === ".."; )
                H.shift(),
                C -= 1;
            d.pathname = H.join("/")
        }
        M = C >= 0 ? o[C] : "/"
    }
    let b = sy(d, M)
      , v = E && E !== "/" && E.endsWith("/")
      , R = (m || E === ".") && s.endsWith("/");
    return !b.pathname.endsWith("/") && (v || R) && (b.pathname += "/"),
    b
}
var ke = i => i.join("/").replace(/\/\/+/g, "/")
  , my = i => i.replace(/\/+$/, "").replace(/^\/*/, "/")
  , vy = i => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i
  , yy = i => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;
function gy(i) {
    return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data"in i
}
var Id = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Id);
var py = ["GET", ...Id];
new Set(py);
var Da = O.createContext(null);
Da.displayName = "DataRouter";
var ei = O.createContext(null);
ei.displayName = "DataRouterState";
O.createContext(!1);
var th = O.createContext({
    isTransitioning: !1
});
th.displayName = "ViewTransition";
var Sy = O.createContext(new Map);
Sy.displayName = "Fetchers";
var by = O.createContext(null);
by.displayName = "Await";
var xe = O.createContext(null);
xe.displayName = "Navigation";
var Nu = O.createContext(null);
Nu.displayName = "Location";
var be = O.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
be.displayName = "Route";
var Nf = O.createContext(null);
Nf.displayName = "RouteError";
function Ey(i, {relative: o}={}) {
    bt(_a(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: s, navigator: f} = O.useContext(xe)
      , {hash: d, pathname: m, search: E} = Cu(i, {
        relative: o
    })
      , M = m;
    return s !== "/" && (M = m === "/" ? s : ke([s, m])),
    f.createHref({
        pathname: M,
        search: E,
        hash: d
    })
}
function _a() {
    return O.useContext(Nu) != null
}
function Tl() {
    return bt(_a(), "useLocation() may be used only in the context of a <Router> component."),
    O.useContext(Nu).location
}
var eh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function lh(i) {
    O.useContext(xe).static || O.useLayoutEffect(i)
}
function Cf() {
    let {isDataRoute: i} = O.useContext(be);
    return i ? By() : Ty()
}
function Ty() {
    bt(_a(), "useNavigate() may be used only in the context of a <Router> component.");
    let i = O.useContext(Da)
      , {basename: o, navigator: s} = O.useContext(xe)
      , {matches: f} = O.useContext(be)
      , {pathname: d} = Tl()
      , m = JSON.stringify(_f(f))
      , E = O.useRef(!1);
    return lh( () => {
        E.current = !0
    }
    ),
    O.useCallback( (b, v={}) => {
        if (Re(E.current, eh),
        !E.current)
            return;
        if (typeof b == "number") {
            s.go(b);
            return
        }
        let R = Uf(b, JSON.parse(m), d, v.relative === "path");
        i == null && o !== "/" && (R.pathname = R.pathname === "/" ? o : ke([o, R.pathname])),
        (v.replace ? s.replace : s.push)(R, v.state, v)
    }
    , [o, s, m, d, i])
}
var Ay = O.createContext(null);
function Ry(i) {
    let o = O.useContext(be).outlet;
    return O.useMemo( () => o && O.createElement(Ay.Provider, {
        value: i
    }, o), [o, i])
}
function ah() {
    let {matches: i} = O.useContext(be)
      , o = i[i.length - 1];
    return o ? o.params : {}
}
function Cu(i, {relative: o}={}) {
    let {matches: s} = O.useContext(be)
      , {pathname: f} = Tl()
      , d = JSON.stringify(_f(s));
    return O.useMemo( () => Uf(i, JSON.parse(d), f, o === "path"), [i, d, f, o])
}
function xy(i, o) {
    return uh(i, o)
}
function uh(i, o, s, f, d) {
    bt(_a(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: m} = O.useContext(xe)
      , {matches: E} = O.useContext(be)
      , M = E[E.length - 1]
      , b = M ? M.params : {}
      , v = M ? M.pathname : "/"
      , R = M ? M.pathnameBase : "/"
      , C = M && M.route;
    {
        let Q = C && C.path || "";
        nh(v, !C || Q.endsWith("*") || Q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`)
    }
    let H = Tl(), B;
    if (o) {
        let Q = typeof o == "string" ? Ma(o) : o;
        bt(R === "/" || Q.pathname?.startsWith(R), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),
        B = Q
    } else
        B = H;
    let V = B.pathname || "/"
      , F = V;
    if (R !== "/") {
        let Q = R.replace(/^\//, "").split("/");
        F = "/" + V.replace(/^\//, "").split("/").slice(Q.length).join("/")
    }
    let X = Wd(i, {
        pathname: F
    });
    Re(C || X != null, `No routes matched location "${B.pathname}${B.search}${B.hash}" `),
    Re(X == null || X[X.length - 1].route.element !== void 0 || X[X.length - 1].route.Component !== void 0 || X[X.length - 1].route.lazy !== void 0, `Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let w = _y(X && X.map(Q => Object.assign({}, Q, {
        params: Object.assign({}, b, Q.params),
        pathname: ke([R, m.encodeLocation ? m.encodeLocation(Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : Q.pathname]),
        pathnameBase: Q.pathnameBase === "/" ? R : ke([R, m.encodeLocation ? m.encodeLocation(Q.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : Q.pathnameBase])
    })), E, s, f, d);
    return o && w ? O.createElement(Nu.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...B
            },
            navigationType: "POP"
        }
    }, w) : w
}
function zy() {
    let i = Hy()
      , o = gy(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i)
      , s = i instanceof Error ? i.stack : null
      , f = "rgba(200,200,200, 0.5)"
      , d = {
        padding: "0.5rem",
        backgroundColor: f
    }
      , m = {
        padding: "2px 4px",
        backgroundColor: f
    }
      , E = null;
    return console.error("Error handled by React Router default ErrorBoundary:", i),
    E = O.createElement(O.Fragment, null, O.createElement("p", null, "💿 Hey developer 👋"), O.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", O.createElement("code", {
        style: m
    }, "ErrorBoundary"), " or", " ", O.createElement("code", {
        style: m
    }, "errorElement"), " prop on your route.")),
    O.createElement(O.Fragment, null, O.createElement("h2", null, "Unexpected Application Error!"), O.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, o), s ? O.createElement("pre", {
        style: d
    }, s) : null, E)
}
var Oy = O.createElement(zy, null)
  , My = class extends O.Component {
    constructor(i) {
        super(i),
        this.state = {
            location: i.location,
            revalidation: i.revalidation,
            error: i.error
        }
    }
    static getDerivedStateFromError(i) {
        return {
            error: i
        }
    }
    static getDerivedStateFromProps(i, o) {
        return o.location !== i.location || o.revalidation !== "idle" && i.revalidation === "idle" ? {
            error: i.error,
            location: i.location,
            revalidation: i.revalidation
        } : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation
        }
    }
    componentDidCatch(i, o) {
        this.props.unstable_onError ? this.props.unstable_onError(i, o) : console.error("React Router caught the following error during render", i)
    }
    render() {
        return this.state.error !== void 0 ? O.createElement(be.Provider, {
            value: this.props.routeContext
        }, O.createElement(Nf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Dy({routeContext: i, match: o, children: s}) {
    let f = O.useContext(Da);
    return f && f.static && f.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    O.createElement(be.Provider, {
        value: i
    }, s)
}
function _y(i, o=[], s=null, f=null, d=null) {
    if (i == null) {
        if (!s)
            return null;
        if (s.errors)
            i = s.matches;
        else if (o.length === 0 && !s.initialized && s.matches.length > 0)
            i = s.matches;
        else
            return null
    }
    let m = i
      , E = s?.errors;
    if (E != null) {
        let v = m.findIndex(R => R.route.id && E?.[R.route.id] !== void 0);
        bt(v >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(E).join(",")}`),
        m = m.slice(0, Math.min(m.length, v + 1))
    }
    let M = !1
      , b = -1;
    if (s)
        for (let v = 0; v < m.length; v++) {
            let R = m[v];
            if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (b = v),
            R.route.id) {
                let {loaderData: C, errors: H} = s
                  , B = R.route.loader && !C.hasOwnProperty(R.route.id) && (!H || H[R.route.id] === void 0);
                if (R.route.lazy || B) {
                    M = !0,
                    b >= 0 ? m = m.slice(0, b + 1) : m = [m[0]];
                    break
                }
            }
        }
    return m.reduceRight( (v, R, C) => {
        let H, B = !1, V = null, F = null;
        s && (H = E && R.route.id ? E[R.route.id] : void 0,
        V = R.route.errorElement || Oy,
        M && (b < 0 && C === 0 ? (nh("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        B = !0,
        F = null) : b === C && (B = !0,
        F = R.route.hydrateFallbackElement || null)));
        let X = o.concat(m.slice(0, C + 1))
          , w = () => {
            let Q;
            return H ? Q = V : B ? Q = F : R.route.Component ? Q = O.createElement(R.route.Component, null) : R.route.element ? Q = R.route.element : Q = v,
            O.createElement(Dy, {
                match: R,
                routeContext: {
                    outlet: v,
                    matches: X,
                    isDataRoute: s != null
                },
                children: Q
            })
        }
        ;
        return s && (R.route.ErrorBoundary || R.route.errorElement || C === 0) ? O.createElement(My, {
            location: s.location,
            revalidation: s.revalidation,
            component: V,
            error: H,
            children: w(),
            routeContext: {
                outlet: null,
                matches: X,
                isDataRoute: !0
            },
            unstable_onError: f
        }) : w()
    }
    , null)
}
function jf(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Uy(i) {
    let o = O.useContext(Da);
    return bt(o, jf(i)),
    o
}
function Ny(i) {
    let o = O.useContext(ei);
    return bt(o, jf(i)),
    o
}
function Cy(i) {
    let o = O.useContext(be);
    return bt(o, jf(i)),
    o
}
function Hf(i) {
    let o = Cy(i)
      , s = o.matches[o.matches.length - 1];
    return bt(s.route.id, `${i} can only be used on routes that contain a unique "id"`),
    s.route.id
}
function jy() {
    return Hf("useRouteId")
}
function Hy() {
    let i = O.useContext(Nf)
      , o = Ny("useRouteError")
      , s = Hf("useRouteError");
    return i !== void 0 ? i : o.errors?.[s]
}
function By() {
    let {router: i} = Uy("useNavigate")
      , o = Hf("useNavigate")
      , s = O.useRef(!1);
    return lh( () => {
        s.current = !0
    }
    ),
    O.useCallback(async (d, m={}) => {
        Re(s.current, eh),
        s.current && (typeof d == "number" ? i.navigate(d) : await i.navigate(d, {
            fromRouteId: o,
            ...m
        }))
    }
    , [i, o])
}
var Kd = {};
function nh(i, o, s) {
    !o && !Kd[i] && (Kd[i] = !0,
    Re(!1, s))
}
O.memo(qy);
function qy({routes: i, future: o, state: s, unstable_onError: f}) {
    return uh(i, void 0, s, f, o)
}
function ih({to: i, replace: o, state: s, relative: f}) {
    bt(_a(), "<Navigate> may be used only in the context of a <Router> component.");
    let {static: d} = O.useContext(xe);
    Re(!d, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let {matches: m} = O.useContext(be)
      , {pathname: E} = Tl()
      , M = Cf()
      , b = Uf(i, _f(m), E, f === "path")
      , v = JSON.stringify(b);
    return O.useEffect( () => {
        M(JSON.parse(v), {
            replace: o,
            state: s,
            relative: f
        })
    }
    , [M, v, f, o, s]),
    null
}
function ch(i) {
    return Ry(i.context)
}
function $e(i) {
    bt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Yy({basename: i="/", children: o=null, location: s, navigationType: f="POP", navigator: d, static: m=!1}) {
    bt(!_a(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let E = i.replace(/^\/*/, "/")
      , M = O.useMemo( () => ({
        basename: E,
        navigator: d,
        static: m,
        future: {}
    }), [E, d, m]);
    typeof s == "string" && (s = Ma(s));
    let {pathname: b="/", search: v="", hash: R="", state: C=null, key: H="default"} = s
      , B = O.useMemo( () => {
        let V = We(b, E);
        return V == null ? null : {
            location: {
                pathname: V,
                search: v,
                hash: R,
                state: C,
                key: H
            },
            navigationType: f
        }
    }
    , [E, b, v, R, C, H, f]);
    return Re(B != null, `<Router basename="${E}"> is not able to match the URL "${b}${v}${R}" because it does not start with the basename, so the <Router> won't render anything.`),
    B == null ? null : O.createElement(xe.Provider, {
        value: M
    }, O.createElement(Nu.Provider, {
        children: o,
        value: B
    }))
}
function Ly({children: i, location: o}) {
    return xy(Mf(i), o)
}
function Mf(i, o=[]) {
    let s = [];
    return O.Children.forEach(i, (f, d) => {
        if (!O.isValidElement(f))
            return;
        let m = [...o, d];
        if (f.type === O.Fragment) {
            s.push.apply(s, Mf(f.props.children, m));
            return
        }
        bt(f.type === $e, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        bt(!f.props.index || !f.props.children, "An index route cannot have child routes.");
        let E = {
            id: f.props.id || m.join("-"),
            caseSensitive: f.props.caseSensitive,
            element: f.props.element,
            Component: f.props.Component,
            index: f.props.index,
            path: f.props.path,
            middleware: f.props.middleware,
            loader: f.props.loader,
            action: f.props.action,
            hydrateFallbackElement: f.props.hydrateFallbackElement,
            HydrateFallback: f.props.HydrateFallback,
            errorElement: f.props.errorElement,
            ErrorBoundary: f.props.ErrorBoundary,
            hasErrorBoundary: f.props.hasErrorBoundary === !0 || f.props.ErrorBoundary != null || f.props.errorElement != null,
            shouldRevalidate: f.props.shouldRevalidate,
            handle: f.props.handle,
            lazy: f.props.lazy
        };
        f.props.children && (E.children = Mf(f.props.children, m)),
        s.push(E)
    }
    ),
    s
}
var Fn = "get"
  , Pn = "application/x-www-form-urlencoded";
function li(i) {
    return i != null && typeof i.tagName == "string"
}
function Gy(i) {
    return li(i) && i.tagName.toLowerCase() === "button"
}
function Xy(i) {
    return li(i) && i.tagName.toLowerCase() === "form"
}
function Qy(i) {
    return li(i) && i.tagName.toLowerCase() === "input"
}
function Zy(i) {
    return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function Vy(i, o) {
    return i.button === 0 && (!o || o === "_self") && !Zy(i)
}
var Wn = null;
function wy() {
    if (Wn === null)
        try {
            new FormData(document.createElement("form"),0),
            Wn = !1
        } catch {
            Wn = !0
        }
    return Wn
}
var Ky = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function zf(i) {
    return i != null && !Ky.has(i) ? (Re(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pn}"`),
    null) : i
}
function Jy(i, o) {
    let s, f, d, m, E;
    if (Xy(i)) {
        let M = i.getAttribute("action");
        f = M ? We(M, o) : null,
        s = i.getAttribute("method") || Fn,
        d = zf(i.getAttribute("enctype")) || Pn,
        m = new FormData(i)
    } else if (Gy(i) || Qy(i) && (i.type === "submit" || i.type === "image")) {
        let M = i.form;
        if (M == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let b = i.getAttribute("formaction") || M.getAttribute("action");
        if (f = b ? We(b, o) : null,
        s = i.getAttribute("formmethod") || M.getAttribute("method") || Fn,
        d = zf(i.getAttribute("formenctype")) || zf(M.getAttribute("enctype")) || Pn,
        m = new FormData(M,i),
        !wy()) {
            let {name: v, type: R, value: C} = i;
            if (R === "image") {
                let H = v ? `${v}.` : "";
                m.append(`${H}x`, "0"),
                m.append(`${H}y`, "0")
            } else
                v && m.append(v, C)
        }
    } else {
        if (li(i))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = Fn,
        f = null,
        d = Pn,
        E = i
    }
    return m && d === "text/plain" && (E = m,
    m = void 0),
    {
        action: f,
        method: s.toLowerCase(),
        encType: d,
        formData: m,
        body: E
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Bf(i, o) {
    if (i === !1 || i === null || typeof i > "u")
        throw new Error(o)
}
function $y(i, o, s) {
    let f = typeof i == "string" ? new URL(i,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
    return f.pathname === "/" ? f.pathname = `_root.${s}` : o && We(f.pathname, o) === "/" ? f.pathname = `${o.replace(/\/$/, "")}/_root.${s}` : f.pathname = `${f.pathname.replace(/\/$/, "")}.${s}`,
    f
}
async function ky(i, o) {
    if (i.id in o)
        return o[i.id];
    try {
        let s = await import(i.module);
        return o[i.id] = s,
        s
    } catch (s) {
        return console.error(`Error loading route module \`${i.module}\`, reloading page...`),
        console.error(s),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function Wy(i) {
    return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string"
}
async function Fy(i, o, s) {
    let f = await Promise.all(i.map(async d => {
        let m = o.routes[d.route.id];
        if (m) {
            let E = await ky(m, s);
            return E.links ? E.links() : []
        }
        return []
    }
    ));
    return e0(f.flat(1).filter(Wy).filter(d => d.rel === "stylesheet" || d.rel === "preload").map(d => d.rel === "stylesheet" ? {
        ...d,
        rel: "prefetch",
        as: "style"
    } : {
        ...d,
        rel: "prefetch"
    }))
}
function Jd(i, o, s, f, d, m) {
    let E = (b, v) => s[v] ? b.route.id !== s[v].route.id : !0
      , M = (b, v) => s[v].pathname !== b.pathname || s[v].route.path?.endsWith("*") && s[v].params["*"] !== b.params["*"];
    return m === "assets" ? o.filter( (b, v) => E(b, v) || M(b, v)) : m === "data" ? o.filter( (b, v) => {
        let R = f.routes[b.route.id];
        if (!R || !R.hasLoader)
            return !1;
        if (E(b, v) || M(b, v))
            return !0;
        if (b.route.shouldRevalidate) {
            let C = b.route.shouldRevalidate({
                currentUrl: new URL(d.pathname + d.search + d.hash,window.origin),
                currentParams: s[0]?.params || {},
                nextUrl: new URL(i,window.origin),
                nextParams: b.params,
                defaultShouldRevalidate: !0
            });
            if (typeof C == "boolean")
                return C
        }
        return !0
    }
    ) : []
}
function Py(i, o, {includeHydrateFallback: s}={}) {
    return Iy(i.map(f => {
        let d = o.routes[f.route.id];
        if (!d)
            return [];
        let m = [d.module];
        return d.clientActionModule && (m = m.concat(d.clientActionModule)),
        d.clientLoaderModule && (m = m.concat(d.clientLoaderModule)),
        s && d.hydrateFallbackModule && (m = m.concat(d.hydrateFallbackModule)),
        d.imports && (m = m.concat(d.imports)),
        m
    }
    ).flat(1))
}
function Iy(i) {
    return [...new Set(i)]
}
function t0(i) {
    let o = {}
      , s = Object.keys(i).sort();
    for (let f of s)
        o[f] = i[f];
    return o
}
function e0(i, o) {
    let s = new Set;
    return new Set(o),
    i.reduce( (f, d) => {
        let m = JSON.stringify(t0(d));
        return s.has(m) || (s.add(m),
        f.push({
            key: m,
            link: d
        })),
        f
    }
    , [])
}
function fh() {
    let i = O.useContext(Da);
    return Bf(i, "You must render this element inside a <DataRouterContext.Provider> element"),
    i
}
function l0() {
    let i = O.useContext(ei);
    return Bf(i, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    i
}
var qf = O.createContext(void 0);
qf.displayName = "FrameworkContext";
function rh() {
    let i = O.useContext(qf);
    return Bf(i, "You must render this element inside a <HydratedRouter> element"),
    i
}
function a0(i, o) {
    let s = O.useContext(qf)
      , [f,d] = O.useState(!1)
      , [m,E] = O.useState(!1)
      , {onFocus: M, onBlur: b, onMouseEnter: v, onMouseLeave: R, onTouchStart: C} = o
      , H = O.useRef(null);
    O.useEffect( () => {
        if (i === "render" && E(!0),
        i === "viewport") {
            let F = w => {
                w.forEach(Q => {
                    E(Q.isIntersecting)
                }
                )
            }
              , X = new IntersectionObserver(F,{
                threshold: .5
            });
            return H.current && X.observe(H.current),
            () => {
                X.disconnect()
            }
        }
    }
    , [i]),
    O.useEffect( () => {
        if (f) {
            let F = setTimeout( () => {
                E(!0)
            }
            , 100);
            return () => {
                clearTimeout(F)
            }
        }
    }
    , [f]);
    let B = () => {
        d(!0)
    }
      , V = () => {
        d(!1),
        E(!1)
    }
    ;
    return s ? i !== "intent" ? [m, H, {}] : [m, H, {
        onFocus: _u(M, B),
        onBlur: _u(b, V),
        onMouseEnter: _u(v, B),
        onMouseLeave: _u(R, V),
        onTouchStart: _u(C, B)
    }] : [!1, H, {}]
}
function _u(i, o) {
    return s => {
        i && i(s),
        s.defaultPrevented || o(s)
    }
}
function u0({page: i, ...o}) {
    let {router: s} = fh()
      , f = O.useMemo( () => Wd(s.routes, i, s.basename), [s.routes, i, s.basename]);
    return f ? O.createElement(i0, {
        page: i,
        matches: f,
        ...o
    }) : null
}
function n0(i) {
    let {manifest: o, routeModules: s} = rh()
      , [f,d] = O.useState([]);
    return O.useEffect( () => {
        let m = !1;
        return Fy(i, o, s).then(E => {
            m || d(E)
        }
        ),
        () => {
            m = !0
        }
    }
    , [i, o, s]),
    f
}
function i0({page: i, matches: o, ...s}) {
    let f = Tl()
      , {manifest: d, routeModules: m} = rh()
      , {basename: E} = fh()
      , {loaderData: M, matches: b} = l0()
      , v = O.useMemo( () => Jd(i, o, b, d, f, "data"), [i, o, b, d, f])
      , R = O.useMemo( () => Jd(i, o, b, d, f, "assets"), [i, o, b, d, f])
      , C = O.useMemo( () => {
        if (i === f.pathname + f.search + f.hash)
            return [];
        let V = new Set
          , F = !1;
        if (o.forEach(w => {
            let Q = d.routes[w.route.id];
            !Q || !Q.hasLoader || (!v.some(tt => tt.route.id === w.route.id) && w.route.id in M && m[w.route.id]?.shouldRevalidate || Q.hasClientLoader ? F = !0 : V.add(w.route.id))
        }
        ),
        V.size === 0)
            return [];
        let X = $y(i, E, "data");
        return F && V.size > 0 && X.searchParams.set("_routes", o.filter(w => V.has(w.route.id)).map(w => w.route.id).join(",")),
        [X.pathname + X.search]
    }
    , [E, M, f, d, v, o, i, m])
      , H = O.useMemo( () => Py(R, d), [R, d])
      , B = n0(R);
    return O.createElement(O.Fragment, null, C.map(V => O.createElement("link", {
        key: V,
        rel: "prefetch",
        as: "fetch",
        href: V,
        ...s
    })), H.map(V => O.createElement("link", {
        key: V,
        rel: "modulepreload",
        href: V,
        ...s
    })), B.map( ({key: V, link: F}) => O.createElement("link", {
        key: V,
        nonce: s.nonce,
        ...F
    })))
}
function c0(...i) {
    return o => {
        i.forEach(s => {
            typeof s == "function" ? s(o) : s != null && (s.current = o)
        }
        )
    }
}
var oh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    oh && (window.__reactRouterVersion = "7.9.4")
} catch {}
function f0({basename: i, children: o, window: s}) {
    let f = O.useRef();
    f.current == null && (f.current = $v({
        window: s,
        v5Compat: !0
    }));
    let d = f.current
      , [m,E] = O.useState({
        action: d.action,
        location: d.location
    })
      , M = O.useCallback(b => {
        O.startTransition( () => E(b))
    }
    , [E]);
    return O.useLayoutEffect( () => d.listen(M), [d, M]),
    O.createElement(Yy, {
        basename: i,
        children: o,
        location: m.location,
        navigationType: m.action,
        navigator: d
    })
}
var sh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Ne = O.forwardRef(function({onClick: o, discover: s="render", prefetch: f="none", relative: d, reloadDocument: m, replace: E, state: M, target: b, to: v, preventScrollReset: R, viewTransition: C, ...H}, B) {
    let {basename: V} = O.useContext(xe), F = typeof v == "string" && sh.test(v), X, w = !1;
    if (typeof v == "string" && F && (X = v,
    oh))
        try {
            let At = new URL(window.location.href)
              , It = v.startsWith("//") ? new URL(At.protocol + v) : new URL(v)
              , oe = We(It.pathname, V);
            It.origin === At.origin && oe != null ? v = oe + It.search + It.hash : w = !0
        } catch {
            Re(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let Q = Ey(v, {
        relative: d
    })
      , [tt,Et,P] = a0(f, H)
      , Ct = d0(v, {
        replace: E,
        state: M,
        target: b,
        preventScrollReset: R,
        relative: d,
        viewTransition: C
    });
    function _t(At) {
        o && o(At),
        At.defaultPrevented || Ct(At)
    }
    let jt = O.createElement("a", {
        ...H,
        ...P,
        href: X || Q,
        onClick: w || m ? o : _t,
        ref: c0(B, Et),
        target: b,
        "data-discover": !F && s === "render" ? "true" : void 0
    });
    return tt && !F ? O.createElement(O.Fragment, null, jt, O.createElement(u0, {
        page: Q
    })) : jt
});
Ne.displayName = "Link";
var r0 = O.forwardRef(function({"aria-current": o="page", caseSensitive: s=!1, className: f="", end: d=!1, style: m, to: E, viewTransition: M, children: b, ...v}, R) {
    let C = Cu(E, {
        relative: v.relative
    })
      , H = Tl()
      , B = O.useContext(ei)
      , {navigator: V, basename: F} = O.useContext(xe)
      , X = B != null && g0(C) && M === !0
      , w = V.encodeLocation ? V.encodeLocation(C).pathname : C.pathname
      , Q = H.pathname
      , tt = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
    s || (Q = Q.toLowerCase(),
    tt = tt ? tt.toLowerCase() : null,
    w = w.toLowerCase()),
    tt && F && (tt = We(tt, F) || tt);
    const Et = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
    let P = Q === w || !d && Q.startsWith(w) && Q.charAt(Et) === "/", Ct = tt != null && (tt === w || !d && tt.startsWith(w) && tt.charAt(w.length) === "/"), _t = {
        isActive: P,
        isPending: Ct,
        isTransitioning: X
    }, jt = P ? o : void 0, At;
    typeof f == "function" ? At = f(_t) : At = [f, P ? "active" : null, Ct ? "pending" : null, X ? "transitioning" : null].filter(Boolean).join(" ");
    let It = typeof m == "function" ? m(_t) : m;
    return O.createElement(Ne, {
        ...v,
        "aria-current": jt,
        className: At,
        ref: R,
        style: It,
        to: E,
        viewTransition: M
    }, typeof b == "function" ? b(_t) : b)
});
r0.displayName = "NavLink";
var o0 = O.forwardRef( ({discover: i="render", fetcherKey: o, navigate: s, reloadDocument: f, replace: d, state: m, method: E=Fn, action: M, onSubmit: b, relative: v, preventScrollReset: R, viewTransition: C, ...H}, B) => {
    let V = v0()
      , F = y0(M, {
        relative: v
    })
      , X = E.toLowerCase() === "get" ? "get" : "post"
      , w = typeof M == "string" && sh.test(M)
      , Q = tt => {
        if (b && b(tt),
        tt.defaultPrevented)
            return;
        tt.preventDefault();
        let Et = tt.nativeEvent.submitter
          , P = Et?.getAttribute("formmethod") || E;
        V(Et || tt.currentTarget, {
            fetcherKey: o,
            method: P,
            navigate: s,
            replace: d,
            state: m,
            relative: v,
            preventScrollReset: R,
            viewTransition: C
        })
    }
    ;
    return O.createElement("form", {
        ref: B,
        method: X,
        action: F,
        onSubmit: f ? b : Q,
        ...H,
        "data-discover": !w && i === "render" ? "true" : void 0
    })
}
);
o0.displayName = "Form";
function s0(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function dh(i) {
    let o = O.useContext(Da);
    return bt(o, s0(i)),
    o
}
function d0(i, {target: o, replace: s, state: f, preventScrollReset: d, relative: m, viewTransition: E}={}) {
    let M = Cf()
      , b = Tl()
      , v = Cu(i, {
        relative: m
    });
    return O.useCallback(R => {
        if (Vy(R, o)) {
            R.preventDefault();
            let C = s !== void 0 ? s : Uu(b) === Uu(v);
            M(i, {
                replace: C,
                state: f,
                preventScrollReset: d,
                relative: m,
                viewTransition: E
            })
        }
    }
    , [b, M, v, s, f, o, i, d, m, E])
}
var h0 = 0
  , m0 = () => `__${String(++h0)}__`;
function v0() {
    let {router: i} = dh("useSubmit")
      , {basename: o} = O.useContext(xe)
      , s = jy();
    return O.useCallback(async (f, d={}) => {
        let {action: m, method: E, encType: M, formData: b, body: v} = Jy(f, o);
        if (d.navigate === !1) {
            let R = d.fetcherKey || m0();
            await i.fetch(R, s, d.action || m, {
                preventScrollReset: d.preventScrollReset,
                formData: b,
                body: v,
                formMethod: d.method || E,
                formEncType: d.encType || M,
                flushSync: d.flushSync
            })
        } else
            await i.navigate(d.action || m, {
                preventScrollReset: d.preventScrollReset,
                formData: b,
                body: v,
                formMethod: d.method || E,
                formEncType: d.encType || M,
                replace: d.replace,
                state: d.state,
                fromRouteId: s,
                flushSync: d.flushSync,
                viewTransition: d.viewTransition
            })
    }
    , [i, o, s])
}
function y0(i, {relative: o}={}) {
    let {basename: s} = O.useContext(xe)
      , f = O.useContext(be);
    bt(f, "useFormAction must be used inside a RouteContext");
    let[d] = f.matches.slice(-1)
      , m = {
        ...Cu(i || ".", {
            relative: o
        })
    }
      , E = Tl();
    if (i == null) {
        m.search = E.search;
        let M = new URLSearchParams(m.search)
          , b = M.getAll("index");
        if (b.some(R => R === "")) {
            M.delete("index"),
            b.filter(C => C).forEach(C => M.append("index", C));
            let R = M.toString();
            m.search = R ? `?${R}` : ""
        }
    }
    return (!i || i === ".") && d.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (m.pathname = m.pathname === "/" ? s : ke([s, m.pathname])),
    Uu(m)
}
function g0(i, {relative: o}={}) {
    let s = O.useContext(th);
    bt(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: f} = dh("useViewTransitionState")
      , d = Cu(i, {
        relative: o
    });
    if (!s.isTransitioning)
        return !1;
    let m = We(s.currentLocation.pathname, f) || s.currentLocation.pathname
      , E = We(s.nextLocation.pathname, f) || s.nextLocation.pathname;
    return In(d.pathname, E) != null || In(d.pathname, m) != null
}
const hh = O.createContext()
  , Yf = () => O.useContext(hh)
  , p0 = () => {
    const {getTotalItems: i} = Yf();
    return z.jsx("nav", {
        children: z.jsxs("ul", {
            children: [z.jsx("li", {
                children: z.jsx(Ne, {
                    to: "/",
                    children: "Home"
                })
            }), z.jsx("li", {
                children: z.jsx(Ne, {
                    to: "/category/dulces",
                    children: "Dulces"
                })
            }), z.jsx("li", {
                children: z.jsx(Ne, {
                    to: "/category/salados",
                    children: "Salados"
                })
            }), z.jsxs("li", {
                children: [z.jsx(Ne, {
                    to: "/carrito",
                    className: "icons-cart",
                    children: "🛒"
                }), i() > 0 && z.jsx("span", {
                    className: "in-cart",
                    children: i()
                })]
            })]
        })
    })
}
  , S0 = () => z.jsx("header", {
    children: z.jsxs("div", {
        className: "header-container",
        children: [z.jsx(Ne, {
            to: "/",
            children: z.jsx("img", {
                src: "/Bottlesea.svg"
            })
        }), z.jsx(p0, {})]
    })
})
  , b0 = () => z.jsx("footer", {
    children: z.jsx("p", {
        children: "Página creada por Coria Yamila"
    })
})
  , Lf = ({name: i, price: o, description: s, imageUrl: f, children: d}) => z.jsxs("article", {
    className: "product-item",
    children: [z.jsx("img", {
        src: f,
        alt: s
    }), z.jsx("h2", {
        children: i
    }), z.jsxs("p", {
        children: ["Precio: $", o.toLocaleString("es-AR")]
    }), z.jsxs("p", {
        children: ["Descripcion: ", s]
    }), d]
})
  , E0 = ({lista: i}) => z.jsx("div", {
    className: "galeria",
    children: i.length ? i.map(o => z.jsx(Ne, {
        to: `/detail/${o.id}`,
        children: z.jsx(Lf, {
            ...o
        })
    }, o.id)) : z.jsx("p", {
        children: "No hay productos"
    })
})
  , ti = "https://6931d87f11a8738467d0c1a0.mockapi.io/products"
  , T0 = async i => {
    const o = await fetch(ti, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(i)
    });
    if (!o.ok)
        throw new Error("No se pudo crear el producto");
    return await o.json()
}
  , A0 = async i => {
    let o = ti;
    i && (o = `${ti}?category=${i}`);
    const s = await fetch(o);
    if (!s.ok)
        throw new Error("Error al listar productos");
    return await s.json()
}
  , R0 = async i => {
    const o = await fetch(`${ti}/${i}`);
    if (!o.ok)
        throw new Error("Error al obtener el producto");
    return await o.json()
}
  , $d = ({titulo: i}) => {
    const [o,s] = O.useState([])
      , {category: f} = ah();
    return O.useEffect( () => {
        A0(f).then(d => s(d)).catch(d => {
            console.log(d)
        }
        )
    }
    , [f]),
    z.jsxs("section", {
        children: [z.jsxs("h2", {
            children: [i, z.jsx("span", {
                className: "text-category",
                children: f
            })]
        }), z.jsx(E0, {
            lista: o
        })]
    })
}
  , x0 = ({btnText: i, onConfirm: o}) => {
    const [s,f] = O.useState(1)
      , d = () => {
        f(M => M + 1)
    }
      , m = () => {
        f(M => M > 1 ? M - 1 : 1)
    }
      , E = () => {
        s > 0 && o(s),
        f(1)
    }
    ;
    return z.jsxs("div", {
        className: "count-container",
        children: [z.jsxs("div", {
            className: "count-buttons",
            children: [z.jsx("button", {
                className: "btn",
                onClick: m,
                disabled: s === 1,
                children: "-"
            }), z.jsx("span", {
                children: s
            }), z.jsx("button", {
                className: "btn",
                onClick: d,
                children: "+"
            })]
        }), z.jsx("button", {
            className: "btn btn-add",
            onClick: E,
            children: i
        })]
    })
}
  , z0 = ({detail: i}) => {
    const {addItem: o} = Yf()
      , s = f => {
        o({
            ...i,
            quantity: f
        })
    }
    ;
    return z.jsxs("div", {
        className: "container-detail",
        children: [z.jsx("h2", {
            children: "Detalle del producto:"
        }), z.jsxs(Lf, {
            ...i,
            children: [z.jsx("p", {
                children: i.info
            }), z.jsx("p", {
                children: "Envios sin cargo dentro de CABA"
            }), z.jsx(x0, {
                btnText: "Agregar al carrito",
                onConfirm: s
            })]
        })]
    })
}
  , O0 = () => {
    const [i,o] = O.useState({})
      , {id: s} = ah();
    return O.useEffect( () => {
        R0(s).then(f => o(f)).catch(f => {
            console.log(f)
        }
        )
    }
    , [s]),
    z.jsx("main", {
        children: Object.keys(i).length ? z.jsx(z0, {
            detail: i
        }) : z.jsx("p", {
            children: "Cargando..."
        })
    })
}
  , M0 = ({children: i}) => {
    const [o,s] = O.useState([])
      , f = C => o.some(B => B.id === C)
      , d = C => {
        if (f(C.id)) {
            const H = o.map(B => B.id === C.id ? {
                ...B,
                quantity: B.quantity + C.quantity
            } : B);
            s(H),
            alert("Agregando al carrito")
        } else
            s([...o, C]),
            alert(`${C.name} Agregando al carrito`)
    }
      , m = C => {
        const H = o.filter(B => B.id !== C);
        s(H),
        alert("Producto eliminado")
    }
      , E = () => s([])
      , R = {
        cart: o,
        addItem: d,
        clearCart: E,
        getTotalItems: () => o.reduce( (H, B) => H + B.quantity, 0),
        deleteItem: m,
        total: () => {
            const C = o.reduce( (H, B) => H + B.price * B.quantity, 0);
            return Math.round(C * 100) / 100
        }
        ,
        checkout: () => {
            confirm("¿Seguro que quiere finalizar la compra?") && (alert("¡Compra realizada con éxito!"),
            E())
        }
    };
    return z.jsx(hh.Provider, {
        value: R,
        children: i
    })
}
  , D0 = () => {
    const {cart: i, clearCart: o, deleteItem: s, total: f, checkout: d} = Yf();
    return z.jsxs("section", {
        children: [z.jsx("h2", {
            children: "Carrito de compras"
        }), z.jsx("div", {
            className: "carrito-container",
            children: i.length ? i.map(m => z.jsxs(Lf, {
                ...m,
                children: [z.jsxs("p", {
                    children: ["Cantidad: ", m.quantity]
                }), z.jsx("button", {
                    className: "btn",
                    onClick: () => s(m.id),
                    children: "Eliminar"
                })]
            }, m.id)) : z.jsx("p", {
                className: "msg-cart-vacio",
                children: "El carrito está vacio"
            })
        }), i.length ? z.jsxs("div", {
            className: "btn-container",
            children: [z.jsx("div", {
                className: "total-pagar",
                children: z.jsxs("p", {
                    children: ["Total a pagar: $", f().toLocaleString("es-AR")]
                })
            }), z.jsx("button", {
                className: "btn",
                onClick: d,
                children: "Finalizar compra"
            }), z.jsx("button", {
                className: "btn",
                onClick: o,
                children: "Vaciar carrito"
            })]
        }) : z.jsx(Ne, {
            className: "btn btn-volver",
            to: "/",
            children: "Volver al inicio"
        })]
    })
}
  , _0 = (i, o=!0) => {
    const s = {};
    return i.name.trim() || (s.name = "El nombre es obligatorio"),
    (!i.price || i.price <= 0) && (s.price = "El precio debe ser mayor a cero"),
    i.description.trim() || (s.description = "La descripcion es obligatoria"),
    i.category.trim() || (s.category = "La categoria es obligatoria"),
    i.info.trim() || (s.info = "La informacion adicional es obligatoria"),
    o && !i.file && (s.file = "Debes seleccionar una imagen"),
    s
}
  , U0 = ({product: i, errors: o, loading: s, onChange: f, onFileChange: d, onSubmit: m}) => z.jsxs("section", {
    children: [z.jsxs("form", {
        className: "product-form",
        onSubmit: m,
        children: [z.jsx("h2", {
            children: "Agregar producto"
        }), z.jsxs("div", {
            children: [z.jsx("label", {
                htmlFor: "name",
                children: "Nombre:"
            }), z.jsx("input", {
                type: "text",
                id: "name",
                name: "name",
                value: i.name,
                onChange: f,
                required: !0
            }), o.name && z.jsx("p", {
                className: "error",
                children: o.name
            })]
        }), z.jsxs("div", {
            children: [z.jsx("label", {
                htmlFor: "price",
                children: "Precio:"
            }), z.jsx("input", {
                type: "number",
                id: "price",
                name: "price",
                value: i.price,
                onChange: f,
                min: "0",
                required: !0
            }), o.price && z.jsx("p", {
                className: "error",
                children: o.price
            })]
        }), z.jsxs("div", {
            children: [z.jsx("label", {
                htmlFor: "category",
                children: "Categoria:"
            }), z.jsx("input", {
                type: "text",
                id: "category",
                name: "category",
                value: i.category,
                onChange: f,
                placeholder: "dulces/salados",
                required: !0
            }), o.category && z.jsx("p", {
                className: "error",
                children: o.category
            })]
        }), z.jsxs("div", {
            children: [z.jsx("label", {
                htmlFor: "description",
                children: "Descripcion:"
            }), z.jsx("input", {
                type: "text",
                id: "description",
                name: "description",
                value: i.description,
                onChange: f,
                required: !0
            }), o.description && z.jsx("p", {
                className: "error",
                children: o.description
            })]
        }), z.jsxs("div", {
            children: [z.jsx("label", {
                htmlFor: "info",
                children: "Info:"
            }), z.jsx("textarea", {
                name: "info",
                id: "info",
                value: i.info,
                onChange: f,
                required: !0
            }), o.info && z.jsx("p", {
                className: "error",
                children: o.info
            })]
        }), z.jsxs("div", {
            children: [z.jsx("label", {
                htmlFor: "image",
                children: "Imagen:"
            }), z.jsx("input", {
                type: "file",
                id: "image",
                accept: "image/*",
                onChange: E => d(E.target.files?.[0] ?? null)
            }), o.file && z.jsx("p", {
                className: "error",
                children: o.file
            })]
        }), z.jsx("button", {
            className: "btn",
            type: "submit",
            disabled: s,
            children: s ? "Guardando..." : "Guardar"
        })]
    }), z.jsx(Ne, {
        to: "/",
        children: z.jsx("div", {
            className: "form-inicio",
            children: "👉Volver Home"
        })
    })]
})
  , N0 = "e2e5633c15c60cba4fe4925bfff29718"
  , C0 = "https://api.imgbb.com/1/upload"
  , j0 = i => new Promise( (o, s) => {
    const f = new FileReader;
    f.onload = () => {
        const m = String(f.result).split(",");
        if (m.length < 2) {
            s(new Error("Formato de Data URL inválido"));
            return
        }
        const E = m[1];
        o(E)
    }
    ,
    f.onerror = () => {
        s(new Error("No se pudo leer el archivo"))
    }
    ,
    f.readAsDataURL(i)
}
)
  , H0 = async i => {
    if (!i)
        throw new Error("No se recibió ningún archivo de imagen");
    const o = new FormData;
    o.append("key", N0);
    const s = await j0(i);
    o.append("image", s);
    const f = await fetch(C0, {
        method: "POST",
        body: o
    });
    let d;
    try {
        d = await f.json()
    } catch {
        throw new Error("La respuesta del servidor no es JSON válido")
    }
    if (!f.ok || d && d.success === !1) {
        const m = d && d.error && d.error.message || "Error al subir la imagen";
        throw new Error(m)
    }
    if (d && d.data) {
        if (d.data.display_url)
            return d.data.display_url;
        if (d.data.url)
            return d.data.url
    }
    throw new Error("No se recibió una URL válida desde imgbb")
}
  , B0 = () => {
    const [i,o] = O.useState()
      , [s,f] = O.useState("")
      , [d,m] = O.useState(null)
      , [E,M] = O.useState({
        name: "",
        price: "",
        category: "",
        description: "",
        info: ""
    })
      , b = R => {
        const {name: C, value: H} = R.target;
        M({
            ...E,
            [C]: H
        })
    }
      , v = async R => {
        R.preventDefault(),
        f({}),
        o(!0);
        const C = _0({
            ...E,
            file: d
        });
        if (Object.keys(C).length > 0) {
            f(C),
            o(!1);
            return
        }
        try {
            const H = await H0(d)
              , B = {
                ...E,
                price: Number(E.price),
                imageUrl: H
            };
            await T0(B),
            alert("Producto cargado con exito"),
            M({
                name: "",
                price: "",
                category: "",
                description: "",
                info: ""
            }),
            m(null)
        } catch (H) {
            f({
                general: H.message
            })
        } finally {
            o(!1)
        }
    }
    ;
    return z.jsx(U0, {
        product: E,
        errors: s,
        onChange: b,
        onFileChange: m,
        loading: i,
        onSubmit: v
    })
}
  , q0 = () => z.jsxs(z.Fragment, {
    children: [z.jsx(S0, {}), z.jsxs("main", {
        className: "container",
        children: [z.jsx("h1", {
            children: 'Cafeteria"Bottle Sea"'
        }), z.jsx(ch, {})]
    })]
})
  , Y0 = () => z.jsx("div", {
    children: z.jsx(ch, {})
})
  , mh = () => O.useContext(kd)
  , L0 = ({children: i}) => {
    const {user: o} = mh();
    return o ? i : z.jsx(ih, {
        to: "/",
        replace: !0
    })
}
  , G0 = () => {
    const [i,o] = O.useState({
        name: "",
        password: ""
    })
      , {user: s, login: f} = mh()
      , d = Cf();
    if (s)
        return z.jsx(ih, {
            to: "/admin/alta-productos"
        });
    const m = M => {
        const {name: b, value: v} = M.target;
        o({
            ...i,
            [b]: v
        })
    }
      , E = M => {
        M.preventDefault(),
        f(i.name, i.password) ? d("/admin/alta-productos") : (alert("Credenciales incorrectas"),
        o({
            name: "",
            password: ""
        }))
    }
    ;
    return z.jsx("div", {
        className: "form-container",
        children: z.jsxs("form", {
            onSubmit: E,
            className: "form-login",
            children: [z.jsx("h2", {
                children: "Iniciar sesión"
            }), z.jsxs("div", {
                children: [z.jsx("label", {
                    children: "Usuario:"
                }), z.jsx("input", {
                    type: "text",
                    name: "name",
                    value: i.name,
                    onChange: m
                })]
            }), z.jsxs("div", {
                children: [z.jsx("label", {
                    children: "Contraseña:"
                }), z.jsx("input", {
                    type: "password",
                    name: "password",
                    value: i.password,
                    onChange: m
                })]
            }), z.jsx("button", {
                type: "submit",
                children: "Iniciar sesión"
            })]
        })
    })
}
;
function X0() {
    return z.jsx(z.Fragment, {
        children: z.jsx(f0, {
            children: z.jsxs(M0, {
                children: [z.jsxs(Ly, {
                    children: [z.jsxs($e, {
                        element: z.jsx(q0, {}),
                        children: [z.jsx($e, {
                            path: "/",
                            element: z.jsx($d, {
                                titulo: "Bienvenidos a nuestro catalogo de productos"
                            })
                        }), z.jsx($e, {
                            path: "/category/:category",
                            element: z.jsx($d, {
                                titulo: "Productos por categoria: "
                            })
                        }), z.jsx($e, {
                            path: "/detail/:id",
                            element: z.jsx(O0, {})
                        }), z.jsx($e, {
                            path: "/carrito",
                            element: z.jsx(D0, {})
                        })]
                    }), z.jsxs($e, {
                        path: "/admin",
                        element: z.jsx(Y0, {}),
                        children: [z.jsx($e, {
                            index: !0,
                            element: z.jsx(G0, {})
                        }), z.jsx($e, {
                            path: "alta-productos",
                            element: z.jsx(L0, {
                                children: z.jsx(B0, {})
                            })
                        })]
                    })]
                }), z.jsx(b0, {})]
            })
        })
    })
}
Kv.createRoot(document.getElementById("root")).render(z.jsx(O.StrictMode, {
    children: z.jsx(Jv, {
        children: z.jsx(X0, {})
    })
}));