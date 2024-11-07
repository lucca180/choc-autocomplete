import * as Ar from "react";
import He, { useMemo as mr, useRef as lr, useState as Hr, useEffect as Re, useImperativeHandle as lo, useContext as tt, createContext as Dt, forwardRef as co, Children as uo, memo as fo } from "react";
import { useDisclosure as po, useControllableState as go, useUpdateEffect as ho, forwardRef as rr, Popover as mo, chakra as bo, useMergeRefs as nt, Flex as ot, Box as vo, Divider as Ct, InputGroup as yo, Input as So, InputRightElement as _o, Spinner as Gt, useMultiStyleConfig as xo, Wrap as ko, WrapItem as To, PopoverAnchor as wo, PopoverContent as Co, Center as Eo } from "@chakra-ui/react";
import Et from "@emotion/styled";
import { ThemeContext as Ro } from "@emotion/react";
var Tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kr = { exports: {} }, pr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function Io() {
  if (Rt) return pr;
  Rt = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function n(o, i, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      c = {};
      for (var f in i)
        f !== "key" && (c[f] = i[f]);
    } else c = i;
    return i = c.ref, {
      $$typeof: e,
      type: o,
      key: d,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return pr.Fragment = r, pr.jsx = n, pr.jsxs = n, pr;
}
var gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function Ao() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === tr ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case _e:
          return "Fragment";
        case Xe:
          return "Portal";
        case xe:
          return "Profiler";
        case de:
          return "StrictMode";
        case Oe:
          return "Suspense";
        case ee:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case ce:
            return (a.displayName || "Context") + ".Provider";
          case Z:
            return (a._context.displayName || "Context") + ".Consumer";
          case fe:
            var h = a.render;
            return a = a.displayName, a || (a = h.displayName || h.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case ne:
            return h = a.displayName || null, h !== null ? h : e(a.type) || "Memo";
          case De:
            h = a._payload, a = a._init;
            try {
              return e(a(h));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function n(a) {
      try {
        r(a);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var v = h.error, C = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return v.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), r(a);
      }
    }
    function o() {
    }
    function i() {
      if (we === 0) {
        F = console.log, ae = console.info, pe = console.warn, ge = console.error, ie = console.group, qe = console.groupCollapsed, $e = console.groupEnd;
        var a = {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        };
        Object.defineProperties(console, {
          info: a,
          log: a,
          warn: a,
          error: a,
          group: a,
          groupCollapsed: a,
          groupEnd: a
        });
      }
      we++;
    }
    function c() {
      if (we--, we === 0) {
        var a = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Q({}, a, { value: F }),
          info: Q({}, a, { value: ae }),
          warn: Q({}, a, { value: pe }),
          error: Q({}, a, { value: ge }),
          group: Q({}, a, { value: ie }),
          groupCollapsed: Q({}, a, { value: qe }),
          groupEnd: Q({}, a, { value: $e })
        });
      }
      0 > we && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function d(a) {
      if (Pe === void 0)
        try {
          throw Error();
        } catch (v) {
          var h = v.stack.trim().match(/\n( *(at )?)/);
          Pe = h && h[1] || "", Ge = -1 < v.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < v.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Pe + a + Ge;
    }
    function f(a, h) {
      if (!a || oe) return "";
      var v = Ne.get(a);
      if (v !== void 0) return v;
      oe = !0, v = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var C = null;
      C = se.H, se.H = null, i();
      try {
        var X = {
          DetermineComponentFrameRoot: function() {
            try {
              if (h) {
                var q = function() {
                  throw Error();
                };
                if (Object.defineProperty(q.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(q, []);
                  } catch (W) {
                    var w = W;
                  }
                  Reflect.construct(a, [], q);
                } else {
                  try {
                    q.call();
                  } catch (W) {
                    w = W;
                  }
                  a.call(q.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (W) {
                  w = W;
                }
                (q = a()) && typeof q.catch == "function" && q.catch(function() {
                });
              }
            } catch (W) {
              if (W && w && typeof W.stack == "string")
                return [W.stack, w.stack];
            }
            return [null, null];
          }
        };
        X.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var g = Object.getOwnPropertyDescriptor(
          X.DetermineComponentFrameRoot,
          "name"
        );
        g && g.configurable && Object.defineProperty(
          X.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var p = X.DetermineComponentFrameRoot(), E = p[0], H = p[1];
        if (E && H) {
          var N = E.split(`
`), D = H.split(`
`);
          for (p = g = 0; g < N.length && !N[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          for (; p < D.length && !D[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          if (g === N.length || p === D.length)
            for (g = N.length - 1, p = D.length - 1; 1 <= g && 0 <= p && N[g] !== D[p]; )
              p--;
          for (; 1 <= g && 0 <= p; g--, p--)
            if (N[g] !== D[p]) {
              if (g !== 1 || p !== 1)
                do
                  if (g--, p--, 0 > p || N[g] !== D[p]) {
                    var le = `
` + N[g].replace(
                      " at new ",
                      " at "
                    );
                    return a.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", a.displayName)), typeof a == "function" && Ne.set(a, le), le;
                  }
                while (1 <= g && 0 <= p);
              break;
            }
        }
      } finally {
        oe = !1, se.H = C, c(), Error.prepareStackTrace = v;
      }
      return N = (N = a ? a.displayName || a.name : "") ? d(N) : "", typeof a == "function" && Ne.set(a, N), N;
    }
    function b(a) {
      if (a == null) return "";
      if (typeof a == "function") {
        var h = a.prototype;
        return f(
          a,
          !(!h || !h.isReactComponent)
        );
      }
      if (typeof a == "string") return d(a);
      switch (a) {
        case Oe:
          return d("Suspense");
        case ee:
          return d("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case fe:
            return a = f(a.render, !1), a;
          case ne:
            return b(a.type);
          case De:
            h = a._payload, a = a._init;
            try {
              return b(a(h));
            } catch {
            }
        }
      return "";
    }
    function m() {
      var a = se.A;
      return a === null ? null : a.getOwner();
    }
    function S(a) {
      if (ke.call(a, "ref")) {
        var h = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.ref !== void 0;
    }
    function _(a) {
      if (ke.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function k(a, h) {
      function v() {
        Ve || (Ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: v,
        configurable: !0
      });
    }
    function T() {
      var a = e(this.type);
      return Ke[a] || (Ke[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function O(a, h, v, C, X, g, p) {
      return v = p.ref, a = {
        $$typeof: je,
        type: a,
        key: h,
        props: p,
        _owner: g
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: T
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function P(a, h, v, C, X, g) {
      if (typeof a == "string" || typeof a == "function" || a === _e || a === xe || a === de || a === Oe || a === ee || a === Be || typeof a == "object" && a !== null && (a.$$typeof === De || a.$$typeof === ne || a.$$typeof === ce || a.$$typeof === Z || a.$$typeof === fe || a.$$typeof === j || a.getModuleId !== void 0)) {
        var p = h.children;
        if (p !== void 0)
          if (C)
            if (Te(p)) {
              for (C = 0; C < p.length; C++)
                A(p[C], a);
              Object.freeze && Object.freeze(p);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else A(p, a);
      } else
        p = "", (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), a === null ? C = "null" : Te(a) ? C = "array" : a !== void 0 && a.$$typeof === je ? (C = "<" + (e(a.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : C = typeof a, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          C,
          p
        );
      if (ke.call(h, "key")) {
        p = e(a);
        var E = Object.keys(h).filter(function(N) {
          return N !== "key";
        });
        C = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", We[p + C] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          p,
          E,
          p
        ), We[p + C] = !0);
      }
      if (p = null, v !== void 0 && (n(v), p = "" + v), _(h) && (n(h.key), p = "" + h.key), S(h), "key" in h) {
        v = {};
        for (var H in h)
          H !== "key" && (v[H] = h[H]);
      } else v = h;
      return p && (h = typeof a == "function" ? a.displayName || a.name || "Unknown" : a, p && k(v, h)), O(
        a,
        p,
        null,
        g,
        X,
        m(),
        v
      );
    }
    function A(a, h) {
      if (typeof a == "object" && a && a.$$typeof !== nr) {
        if (Te(a))
          for (var v = 0; v < a.length; v++) {
            var C = a[v];
            M(C) && L(C, h);
          }
        else if (M(a))
          a._store && (a._store.validated = 1);
        else if (a === null || typeof a != "object" ? v = null : (v = be && a[be] || a["@@iterator"], v = typeof v == "function" ? v : null), typeof v == "function" && v !== a.entries && (v = v.call(a), v !== a))
          for (; !(a = v.next()).done; )
            M(a.value) && L(a.value, h);
      }
    }
    function M(a) {
      return typeof a == "object" && a !== null && a.$$typeof === je;
    }
    function L(a, h) {
      if (a._store && !a._store.validated && a.key == null && (a._store.validated = 1, h = te(h), !Me[h])) {
        Me[h] = !0;
        var v = "";
        a && a._owner != null && a._owner !== m() && (v = null, typeof a._owner.tag == "number" ? v = e(a._owner.type) : typeof a._owner.name == "string" && (v = a._owner.name), v = " It was passed a child from " + v + ".");
        var C = se.getCurrentStack;
        se.getCurrentStack = function() {
          var X = b(a.type);
          return C && (X += C() || ""), X;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          h,
          v
        ), se.getCurrentStack = C;
      }
    }
    function te(a) {
      var h = "", v = m();
      return v && (v = e(v.type)) && (h = `

Check the render method of \`` + v + "`."), h || (a = e(a)) && (h = `

Check the top-level render call using <` + a + ">."), h;
    }
    var Ae = He, je = Symbol.for("react.transitional.element"), Xe = Symbol.for("react.portal"), _e = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), ce = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), Be = Symbol.for("react.offscreen"), be = Symbol.iterator, tr = Symbol.for("react.client.reference"), se = Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ke = Object.prototype.hasOwnProperty, Q = Object.assign, j = Symbol.for("react.client.reference"), Te = Array.isArray, we = 0, F, ae, pe, ge, ie, qe, $e;
    o.__reactDisabledLog = !0;
    var Pe, Ge, oe = !1, Ne = new (typeof WeakMap == "function" ? WeakMap : Map)(), nr = Symbol.for("react.client.reference"), Ve, Ke = {}, We = {}, Me = {};
    gr.Fragment = _e, gr.jsx = function(a, h, v, C, X) {
      return P(a, h, v, !1, C, X);
    }, gr.jsxs = function(a, h, v, C, X) {
      return P(a, h, v, !0, C, X);
    };
  }()), gr;
}
process.env.NODE_ENV === "production" ? Kr.exports = Io() : Kr.exports = Ao();
var x = Kr.exports;
const [jo, Ue] = Oo();
function Oo() {
  const e = Ar.createContext(void 0);
  e.displayName = "AutoCompleteContext";
  function r() {
    var i;
    const n = Ar.useContext(e), o = "useAutoCompleteContext: `context` is undefined. Seems you forgot to wrap all autoomplete components within `<AutoComplete />`";
    if (!n) {
      const c = new Error(o);
      throw c.name = "ContextError", (i = Error.captureStackTrace) == null || i.call(Error, c, r), c;
    }
    return n;
  }
  return [e.Provider, r, e];
}
function Bo(e) {
  return e == null ? void 0 : e[0];
}
function Ur(e) {
  return e != null && e.length ? e[e.length - 1] : void 0;
}
function Yt(e, r, n = 1, o = !0) {
  if (r === 0) return -1;
  let i = e + n;
  return e === -1 && (i = n > 0 ? 0 : r - 1), o ? i = (i % r + r) % r : i = Math.max(0, Math.min(i, r - 1)), i;
}
function $o(e, r, n = !0) {
  return Yt(e, r, -1, n);
}
function Po(e, r, n = !0) {
  const o = Yt(e, r.length, 1, n);
  return r[o];
}
function No(e, r, n = !0) {
  const o = $o(e, r.length, n);
  return r[o];
}
function at(e) {
  return Array.isArray(e);
}
function Wo(e) {
  return at(e) && e.length === 0;
}
function it(e) {
  return e !== null && typeof e == "object" && !at(e);
}
function Mo(e) {
  return it(e) && Object.keys(e).length === 0;
}
function st(e) {
  return at(e) ? Wo(e) : it(e) ? Mo(e) : e == null || e === "";
}
function Er(e) {
  return typeof e > "u";
}
function Ht(e) {
  return typeof e < "u";
}
function zo(e, r) {
  const n = {};
  return r.forEach((o) => {
    o in e && (n[o] = e[o]);
  }), n;
}
function lt(e, r) {
  const n = { ...e };
  return r.forEach((o) => {
    delete n[o];
  }), n;
}
function Lo(e) {
  return typeof e == "function";
}
function J(e, ...r) {
  return Lo(e) ? e(...r) : e;
}
var Br = function(e, r) {
  for (var n, o = Ar.Children.toArray(e), i = 0, c = o; i < c.length; i++) {
    var d = c[i];
    if (r(d))
      return d;
    if (!((n = d.props) === null || n === void 0) && n.children) {
      var f = Br(d.props.children, r);
      if (f)
        return f;
    }
  }
}, wr = function(e, r) {
  for (var n = 0, o = r.length, i = e.length; n < o; n++, i++)
    e[i] = r[n];
  return e;
}, Ut = function(e, r) {
  for (var n, o = Ar.Children.toArray(e), i = [], c = 0, d = o; c < d.length; c++) {
    var f = d[c];
    r(f) && (i = wr(wr([], i), [f])), !((n = f.props) === null || n === void 0) && n.children && (i = wr(wr([], i), Ut(f.props.children, r)));
  }
  return i;
};
function At(e, r, n = 2) {
  function o(_, k) {
    _ = " ".repeat(k - 1) + _.toLowerCase() + " ".repeat(k - 1);
    let T = new Array(_.length - k + 1);
    for (let O = 0; O < T.length; O++)
      T[O] = _.slice(O, O + k);
    return T;
  }
  if (!(e != null && e.length) || !(r != null && r.length))
    return 0;
  let i = e.length < r.length ? e : r, c = e.length < r.length ? r : e, d = o(i, n), f = o(c, n), b = new Set(d), m = f.length, S = 0;
  for (let _ of f)
    b.delete(_) && S++;
  return S / m;
}
const ct = (e) => {
  var r;
  return (r = typeof e == "string" || typeof e == "number" ? e : e[Object.keys(e)[0]]) == null ? void 0 : r.toString();
}, Fo = (e, r) => typeof e != "string" || st(r) ? e : e.toString().replace(
  new RegExp(Yo(r), "gi"),
  (o) => `<mark>${o}</mark>`
), Do = (e) => Ut(
  e,
  (n) => {
    var o;
    return ((o = n == null ? void 0 : n.type) == null ? void 0 : o.displayName) === "AutoCompleteItem";
  }
).map((n) => {
  const o = zo(n.props, ["value", "label", "fixed", "disabled"]), { getValue: i = ct } = n.props, c = i(o.value);
  return { ...Ht(o.label) ? o : { ...o, label: c }, value: c, originalValue: o.value };
}), Go = () => ({
  bg: "whiteAlpha.100",
  _light: {
    bg: "gray.200"
  }
}), Vo = (e, r, n) => (r == null ? void 0 : r.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || (n == null ? void 0 : n.toLowerCase().indexOf(e == null ? void 0 : e.toLowerCase())) >= 0 || At(e, r) >= 0.5 || At(e, n) >= 0.5;
function Yo(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const Ho = (e, r) => Br(
  e,
  (o) => {
    var i;
    return ((i = o == null ? void 0 : o.type) == null ? void 0 : i.displayName) === "AutoCompleteItem" && o.props.value === (r == null ? void 0 : r.value);
  }
), Uo = (e, r) => Br(
  e,
  (o) => {
    var i;
    return ((i = o == null ? void 0 : o.type) == null ? void 0 : i.displayName) === "AutoCompleteItem" && o.props.value === (r == null ? void 0 : r.value);
  }
), Xo = (e, r) => Ht(
  Br(e, (n) => {
    var i, c;
    const o = J(
      ((i = n.props) == null ? void 0 : i.getValue) || ct,
      ((c = n.props) == null ? void 0 : c.value) || {}
    );
    return r.some((d) => d.value === o);
  })
), qo = (e, r) => {
  const n = {}, o = {}, { field: i } = e;
  return i && Object.keys(i).forEach((c) => {
    if (c.startsWith("--input") === !1)
      n[c] = i[c];
    else {
      let d = i[c];
      const b = c.replace("--input-", "").replace(/-([a-z])/g, function(m) {
        return m[1].toUpperCase();
      });
      d.indexOf(".") !== -1 && (d = d.substring(d.indexOf(".") + 1)), o[b] = d;
    }
  }), {
    ...r && {
      ...n,
      ...o,
      _focusWithin: e.field._focus,
      pos: "relative",
      minH: 9,
      // px: 3,
      py: 1.5,
      spacing: 3
    },
    cursor: "text",
    h: "fit-content"
    // w: "full",
  };
};
function Ko(e) {
  var X;
  let {
    prefocusFirstItem: r = !0,
    closeOnBlur: n = !0,
    creatable: o,
    emphasize: i,
    emptyState: c = !0,
    defaultEmptyStateProps: d = {},
    freeSolo: f,
    isReadOnly: b,
    listAllValuesOnFocus: m,
    maxSuggestions: S,
    multiple: _,
    closeOnSelect: k = !_,
    defaultValue: T,
    defaultValues: O = T ? [T] : [],
    onReady: P,
    defaultIsOpen: A,
    disableFilter: M,
    isLoading: L = !1,
    placement: te = "bottom",
    restoreOnBlurIfEmpty: Ae = !f,
    shouldRenderSuggestions: je = () => !0,
    submitKeys: Xe = [],
    suggestWhenEmpty: _e,
    value: de,
    values: xe = de ? typeof de == "string" ? [de] : [...de] : void 0
  } = e;
  f = f || (_ ? !0 : e.freeSolo);
  const { isOpen: Z, onClose: ce, onOpen: fe } = po({ defaultIsOpen: A }), Oe = mr(
    () => J(e.children, {
      isOpen: Z,
      onClose: ce,
      onOpen: fe
    }),
    [e.children, Z]
  ), ee = mr(() => Do(Oe), [Oe]), ne = lr(null), De = lr(null), Be = lr(null), be = lr(null), [tr, se] = Hr(!1);
  let ke = "";
  _ ? ke = "" : Er(O) ? Er(xe) || (ke = xe[0]) : ke = O[0];
  const [Q, j] = Hr(ke ?? ""), Te = mr(
    () => M ? ee : ee.filter(
      (g) => g.fixed || J(
        e.filter || Vo,
        Q,
        g.value,
        g.label
      ) || tr
    ).filter(
      (g, p) => S ? g.fixed || p < S : !0
    ),
    [Q, ee, tr, S, M]
  ), we = o ? [{ value: Q, noFilter: !0, creatable: !0 }] : [], F = mr(() => [...Te, ...we], [Te, we]), [ae, pe] = go({
    defaultValue: O.map((g) => g == null ? void 0 : g.toString()),
    value: xe,
    onChange: (g) => {
      const p = F.find((H) => H.value === g[0]);
      if (!p) return;
      const E = g.map(
        (H) => F.find((N) => N.value === H)
      );
      J(
        e.onChange,
        _ ? g : g[0],
        _ ? E : p
      );
    }
  });
  Re(() => {
    F.length === 0 && !c && Z && ce();
  }, [F.length, c, Z]);
  const [ge, ie] = Hr(
    r ? (X = ee[0]) == null ? void 0 : X.value : null
  ), qe = e.maxSelections || ae.length + 1, $e = F.findIndex((g) => g.value === ge), Pe = Po(
    $e,
    F,
    !!e.rollNavigation
  ), Ge = No(
    $e,
    F,
    !!e.rollNavigation
  ), oe = Bo(F), Ne = Ur(F), nr = !F.some(
    (g) => g.value === ge
  );
  Re(() => {
    var g;
    nr && ie(r ? (g = ee[0]) == null ? void 0 : g.value : null);
  }, [nr]), ho(() => {
    r && ie(oe == null ? void 0 : oe.value);
  }, [Q, oe == null ? void 0 : oe.value]), Re(() => {
    var g;
    !Z && r && ie((g = ee[0]) == null ? void 0 : g.value);
  }, [Z]), Re(() => {
    Z && m && se(!0);
  }, [Z, m, se]), Re(() => {
    const g = ee.find((p) => p.value === ge);
    J(e.onOptionFocus, {
      item: g,
      focusMethod: be.current,
      isNewInput: g == null ? void 0 : g.creatable
    });
  }, [ge, e.onOptionFocus]);
  const Ve = (g) => {
    var H, N;
    const p = F.find((D) => D.value === g), E = (p == null ? void 0 : p.label) || (p == null ? void 0 : p.value);
    j(() => _ ? "" : E ?? ""), !ae.includes(g) && ae.length < qe && pe((D) => _ ? [...D, g] : [g]), _ && ((H = ne.current) == null || H.focus()), e.focusInputOnSelect && ((N = ne.current) == null || N.focus()), J(e.onSelectOption, {
      item: p,
      selectMethod: be.current,
      isNewInput: p == null ? void 0 : p.creatable
    }), p != null && p.creatable && J(e.onCreateOption, {
      item: lt(p, ["noFilter"]),
      selectMethod: be.current
    }), k && ce();
  }, Ke = (g, p) => {
    var N;
    pe((D) => {
      const le = ee.find((q) => q.value === g);
      return le ? (J(e.onTagRemoved, g, le, D), D.filter((q) => q !== g)) : D;
    });
    const E = ee.find((D) => D.value === g), H = (E == null ? void 0 : E.label) || (E == null ? void 0 : E.value);
    Q === H && j(""), p && ((N = ne.current) == null || N.focus());
  }, We = (g) => {
    var p;
    pe([]), g && ((p = ne.current) == null || p.focus());
  }, Me = _ ? ae.map((g) => {
    var p;
    return {
      label: ((p = ee.find((E) => E.value === (g == null ? void 0 : g.toString()))) == null ? void 0 : p.label) || g,
      onRemove: () => Ke(g)
    };
  }) : [];
  return Re(() => {
    J(P, { tags: Me });
  }, [ae]), {
    autoCompleteProps: e,
    children: Oe,
    filteredList: F,
    filteredResults: Te,
    focusedValue: ge,
    defaultEmptyStateProps: d,
    getEmptyStateProps: (g) => {
      if (F.every((E) => E.noFilter) && c && !o)
        return typeof c == "boolean" ? g : J(c, { query: Q });
    },
    getGroupProps: (g) => {
      const p = Xo(g.children, F);
      return {
        divider: {
          hasFirstChild: Ho(g.children, oe),
          hasLastChild: Uo(
            g.children,
            Ur(F.filter((E) => Er(E == null ? void 0 : E.noFilter)))
          )
        },
        group: {
          display: p ? "initial" : "none"
        }
      };
    },
    getInputProps: (g, p) => {
      const { onBlur: E, onChange: H, onFocus: N, onKeyDown: D, variant: le, ...q } = g;
      return {
        wrapper: {
          ref: De,
          onClick: () => {
            var w;
            (w = ne == null ? void 0 : ne.current) == null || w.focus();
          },
          ...qo(p, _),
          ...q
        },
        input: {
          isReadOnly: b,
          onFocus: (w) => {
            J(N, w), e.openOnFocus && !b && fe(), e.selectOnFocus && w.target.select(), m && se(!0);
          },
          onBlur: (w) => {
            var Ce, or;
            J(E, w);
            const W = w.relatedTarget === (Be == null ? void 0 : Be.current) || ((Ce = Be.current) == null ? void 0 : Ce.contains(w.relatedTarget)), U = (or = De.current) == null ? void 0 : or.contains(
              w.relatedTarget
            );
            if (!W && !U && (n && ce(), !ae.includes(w.target.value) && Ae)) {
              const ar = Ur(ae), K = ee.find(
                (ve) => ve.value === ar
              ), cr = (K == null ? void 0 : K.label) || (K == null ? void 0 : K.value) || "";
              j(cr);
            }
          },
          onChange: (w) => {
            const W = w.target.value;
            J(H, w), j(W);
            const U = st(W);
            J(je, W) && (!U || _e) ? fe() : ce(), se(!1);
          },
          onKeyDown: (w) => {
            var Ce;
            J(D, w), be.current = "keyboard";
            const { key: W } = w, U = F[$e];
            if (["Enter", ...Xe].includes(W)) {
              U && !(U != null && U.disabled) && Z ? Ve(U == null ? void 0 : U.value) : (Ce = ne.current) == null || Ce.focus(), w.preventDefault();
              return;
            }
            if (W === "ArrowDown") {
              Z ? ie(Pe == null ? void 0 : Pe.value) : fe(), w.preventDefault();
              return;
            }
            if (W === "ArrowUp") {
              Z ? ie(Ge == null ? void 0 : Ge.value) : fe(), w.preventDefault();
              return;
            }
            if (W === "Tab") {
              Z && U && !(U != null && U.disabled) ? Ve(U == null ? void 0 : U.value) : ce();
              return;
            }
            if (W === "Home") {
              ie(oe == null ? void 0 : oe.value), w.preventDefault();
              return;
            }
            if (W === "End") {
              ie(Ne == null ? void 0 : Ne.value), w.preventDefault();
              return;
            }
            W === "Escape" && (ce(), w.preventDefault());
          },
          value: Q,
          variant: _ ? "unstyled" : le,
          ...q
        }
      };
    },
    getItemProps: (g, p) => {
      var vr;
      const {
        _fixed: E,
        _focus: H,
        children: N,
        disabled: D,
        label: le,
        value: q,
        fixed: w,
        getValue: W = ct,
        onClick: U,
        onMouseOver: Ce,
        sx: or,
        ...ar
      } = g, K = p ? q : (vr = W(q)) == null ? void 0 : vr.toString(), cr = K === ge, ve = F.findIndex((Je) => Je.value === K) >= 0, ur = N || le || K;
      return {
        item: {
          ...typeof ur != "string" || !i ? { children: ur } : {
            dangerouslySetInnerHTML: {
              __html: Fo(ur, Q)
            }
          },
          "aria-selected": ae.includes(K),
          "aria-disabled": D,
          _disabled: { opacity: 0.4, cursor: "not-allowed", userSelect: "none" },
          onClick: (Je) => {
            var yr;
            J(U, Je), D ? (yr = ne.current) == null || yr.focus() : Ve(K);
          },
          onMouseOver: (Je) => {
            J(Ce, Je), ie(K), be.current = "mouse";
          },
          sx: {
            ...or,
            mark: {
              color: "inherit",
              bg: "transparent",
              ...it(i) ? i : {
                fontWeight: i ? "extrabold" : "inherit"
              }
            }
          },
          ...cr && (H || Go()),
          ...w && E,
          ...ar
        },
        root: {
          isValidSuggestion: ve,
          value: K
        }
      };
    },
    inputRef: ne,
    interactionRef: be,
    isLoading: L,
    isOpen: Z,
    itemList: ee,
    listRef: Be,
    onClose: ce,
    onOpen: fe,
    placement: te,
    query: Q,
    removeItem: Ke,
    resetItems: We,
    setQuery: j,
    tags: Me,
    value: de,
    values: ae
  };
}
const Jo = rr(
  (e, r) => {
    const n = Ko(e), {
      children: o,
      isOpen: i,
      onClose: c,
      onOpen: d,
      placement: f,
      resetItems: b,
      removeItem: m
    } = n;
    lo(r, () => ({
      resetItems: b,
      removeItem: m
    }));
    const { matchWidth: S = !0 } = n.autoCompleteProps;
    return /* @__PURE__ */ x.jsx(jo, { value: n, children: /* @__PURE__ */ x.jsx(
      mo,
      {
        isLazy: !0,
        isOpen: i,
        onClose: c,
        onOpen: d,
        autoFocus: !1,
        placement: f,
        closeOnBlur: !0,
        matchWidth: S,
        children: /* @__PURE__ */ x.jsx(bo.div, { w: "full", ref: r, children: o })
      }
    ) });
  }
);
Jo.displayName = "AutoComplete";
const Qo = rr(
  (e, r) => {
    const {
      focusedValue: n,
      getItemProps: o,
      interactionRef: i
    } = Ue(), c = lr(void 0), d = nt(r, c), f = o(e), { isValidSuggestion: b, value: m } = f.root, S = n === m;
    Re(() => {
      var P;
      S && i.current === "keyboard" && ((P = c == null ? void 0 : c.current) == null || P.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      }));
    }, [S, i]), Re(() => {
      typeof m != "string" && console.warn("wow"), typeof m != "string" && Er(e.getValue) && console.error(
        "You must define the `getValue` prop, when an Item's value is not a string"
      );
    }, []);
    const { children: _, dangerouslySetInnerHTML: k, ...T } = f.item, O = lt(T, ["groupId"]);
    return b ? /* @__PURE__ */ x.jsx(ot, { ref: d, ...Xt, ...O, children: _ || /* @__PURE__ */ x.jsx("span", { dangerouslySetInnerHTML: k }) }) : null;
  }
);
Qo.displayName = "AutoCompleteItem";
const Xt = {
  mx: "2",
  px: "2",
  py: "2",
  rounded: "md",
  cursor: "pointer"
};
function Zo(e) {
  const { alwaysDisplay: r, children: n, ...o } = e, {
    autoCompleteProps: i,
    getItemProps: c,
    query: d,
    filteredResults: f
  } = Ue(), { children: b, ...m } = c(
    {
      ...e,
      value: d,
      children: J(n, {
        value: d
      })
    },
    !0
  ).item, S = f.some((T) => T.value === d), _ = st(d) ? r : !0;
  return i.creatable && _ && !S ? /* @__PURE__ */ x.jsx(ot, { ...Xt, ...m, ...o, children: b || `Add ${d}` }) : null;
}
Zo.displayName = "AutoCompleteCreatable";
const ea = rr(
  (e, r) => {
    const { children: n, showDivider: o, ...i } = e, c = lt(i, ["groupSibling"]), { getGroupProps: d } = Ue(), { group: f } = d(e), b = na(e);
    return /* @__PURE__ */ x.jsxs(vo, { ref: r, ...f, ...c, children: [
      /* @__PURE__ */ x.jsx(Ct, { ...b.top }),
      n,
      /* @__PURE__ */ x.jsx(Ct, { ...b.bottom })
    ] });
  }
), ra = rr(
  (e, r) => /* @__PURE__ */ x.jsx(ot, { ...ta, ...e, ref: r })
);
ea.displayName = "AutoCompleteGroup";
ra.displayName = "AutoCompleteGroupTitle";
const ta = {
  ml: 5,
  my: 1,
  fontSize: "xs",
  letterSpacing: "wider",
  fontWeight: "extrabold",
  textTransform: "uppercase"
}, na = (e) => {
  const { getGroupProps: r } = Ue(), n = e.groupSibling, {
    divider: { hasFirstChild: o, hasLastChild: i }
  } = r(e), c = {
    my: 2,
    borderColor: e.dividerColor
  }, d = {
    ...c,
    mb: 4,
    display: !e.showDivider || o ? "none" : ""
  }, f = {
    ...c,
    display: !e.showDivider || i || n ? "none" : ""
  };
  return { top: d, bottom: f };
}, jt = rr((e, r) => {
  const { isLoading: n } = Ue(), { loadingIcon: o, ...i } = e;
  return /* @__PURE__ */ x.jsxs(yo, { children: [
    /* @__PURE__ */ x.jsx(So, { ...i, ref: r }),
    n && /* @__PURE__ */ x.jsx(_o, { children: o || /* @__PURE__ */ x.jsx(Gt, {}) })
  ] });
}), qt = rr(
  (e, r) => {
    const {
      autoCompleteProps: n,
      inputRef: o,
      getInputProps: i,
      tags: c,
      setQuery: d,
      value: f,
      itemList: b
    } = Ue(), {
      children: m,
      isInvalid: S,
      hidePlaceholder: _,
      ...k
    } = e, { value: T } = k;
    Re(() => {
      if (f !== void 0 && (typeof f == "string" || f instanceof String)) {
        const _e = b.find((xe) => xe.value === f), de = _e === void 0 ? f : _e.label;
        d(de);
      }
    }, [f]), Re(() => {
      T !== void 0 && (typeof T == "string" || T instanceof String) && d(T);
    }, [T]);
    const O = xo("Input", e);
    let { wrapper: P, input: A } = i(k, O);
    const { ref: M, ...L } = P, te = nt(r, o), Ae = J(m, { tags: c });
    _ && (A = {
      ...A,
      placeholder: Array.isArray(Ae) && Ae.length ? void 0 : A.placeholder
    });
    const je = /* @__PURE__ */ x.jsx(
      jt,
      {
        isInvalid: S,
        ...A,
        ref: te
      }
    ), Xe = /* @__PURE__ */ x.jsxs(ko, { "aria-invalid": S, ...L, ref: M, children: [
      Ae,
      /* @__PURE__ */ x.jsx(
        To,
        {
          as: jt,
          ...A,
          ref: te
        }
      )
    ] });
    return /* @__PURE__ */ x.jsx(wo, { children: n.multiple ? Xe : je });
  }
);
qt.displayName = "Input";
qt.id = "Input";
function oa() {
  const e = tt(
    Ro
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Kt = Dt({});
Kt.displayName = "ColorModeContext";
function Jt() {
  const e = tt(Kt);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function aa() {
  const e = Jt(), r = oa();
  return { ...e, theme: r };
}
var ut = (...e) => e.filter(Boolean).join(" ");
function er(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function Ze(e, ...r) {
  return ia(e) ? e(...r) : e;
}
var ia = (e) => typeof e == "function", jr = { exports: {} };
jr.exports;
(function(e, r) {
  var n = 200, o = "__lodash_hash_undefined__", i = 800, c = 16, d = 9007199254740991, f = "[object Arguments]", b = "[object Array]", m = "[object AsyncFunction]", S = "[object Boolean]", _ = "[object Date]", k = "[object Error]", T = "[object Function]", O = "[object GeneratorFunction]", P = "[object Map]", A = "[object Number]", M = "[object Null]", L = "[object Object]", te = "[object Proxy]", Ae = "[object RegExp]", je = "[object Set]", Xe = "[object String]", _e = "[object Undefined]", de = "[object WeakMap]", xe = "[object ArrayBuffer]", Z = "[object DataView]", ce = "[object Float32Array]", fe = "[object Float64Array]", Oe = "[object Int8Array]", ee = "[object Int16Array]", ne = "[object Int32Array]", De = "[object Uint8Array]", Be = "[object Uint8ClampedArray]", be = "[object Uint16Array]", tr = "[object Uint32Array]", se = /[\\^$.*+?()[\]{}|]/g, ke = /^\[object .+?Constructor\]$/, Q = /^(?:0|[1-9]\d*)$/, j = {};
  j[ce] = j[fe] = j[Oe] = j[ee] = j[ne] = j[De] = j[Be] = j[be] = j[tr] = !0, j[f] = j[b] = j[xe] = j[S] = j[Z] = j[_] = j[k] = j[T] = j[P] = j[A] = j[L] = j[Ae] = j[je] = j[Xe] = j[de] = !1;
  var Te = typeof Tr == "object" && Tr && Tr.Object === Object && Tr, we = typeof self == "object" && self && self.Object === Object && self, F = Te || we || Function("return this")(), ae = r && !r.nodeType && r, pe = ae && !0 && e && !e.nodeType && e, ge = pe && pe.exports === ae, ie = ge && Te.process, qe = function() {
    try {
      var t = pe && pe.require && pe.require("util").types;
      return t || ie && ie.binding && ie.binding("util");
    } catch {
    }
  }(), $e = qe && qe.isTypedArray;
  function Pe(t, l, u) {
    switch (u.length) {
      case 0:
        return t.call(l);
      case 1:
        return t.call(l, u[0]);
      case 2:
        return t.call(l, u[0], u[1]);
      case 3:
        return t.call(l, u[0], u[1], u[2]);
    }
    return t.apply(l, u);
  }
  function Ge(t, l) {
    for (var u = -1, y = Array(t); ++u < t; )
      y[u] = l(u);
    return y;
  }
  function oe(t) {
    return function(l) {
      return t(l);
    };
  }
  function Ne(t, l) {
    return t == null ? void 0 : t[l];
  }
  function nr(t, l) {
    return function(u) {
      return t(l(u));
    };
  }
  var Ve = Array.prototype, Ke = Function.prototype, We = Object.prototype, Me = F["__core-js_shared__"], a = Ke.toString, h = We.hasOwnProperty, v = function() {
    var t = /[^.]+$/.exec(Me && Me.keys && Me.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }(), C = We.toString, X = a.call(Object), g = RegExp(
    "^" + a.call(h).replace(se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), p = ge ? F.Buffer : void 0, E = F.Symbol, H = F.Uint8Array;
  p && p.allocUnsafe;
  var N = nr(Object.getPrototypeOf, Object), D = Object.create, le = We.propertyIsEnumerable, q = Ve.splice, w = E ? E.toStringTag : void 0, W = function() {
    try {
      var t = Mr(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }(), U = p ? p.isBuffer : void 0, Ce = Math.max, or = Date.now, ar = Mr(F, "Map"), K = Mr(Object, "create"), cr = /* @__PURE__ */ function() {
    function t() {
    }
    return function(l) {
      if (!Qe(l))
        return {};
      if (D)
        return D(l);
      t.prototype = l;
      var u = new t();
      return t.prototype = void 0, u;
    };
  }();
  function ve(t) {
    var l = -1, u = t == null ? 0 : t.length;
    for (this.clear(); ++l < u; ) {
      var y = t[l];
      this.set(y[0], y[1]);
    }
  }
  function ur() {
    this.__data__ = K ? K(null) : {}, this.size = 0;
  }
  function vr(t) {
    var l = this.has(t) && delete this.__data__[t];
    return this.size -= l ? 1 : 0, l;
  }
  function Je(t) {
    var l = this.__data__;
    if (K) {
      var u = l[t];
      return u === o ? void 0 : u;
    }
    return h.call(l, t) ? l[t] : void 0;
  }
  function yr(t) {
    var l = this.__data__;
    return K ? l[t] !== void 0 : h.call(l, t);
  }
  function pn(t, l) {
    var u = this.__data__;
    return this.size += this.has(t) ? 0 : 1, u[t] = K && l === void 0 ? o : l, this;
  }
  ve.prototype.clear = ur, ve.prototype.delete = vr, ve.prototype.get = Je, ve.prototype.has = yr, ve.prototype.set = pn;
  function ze(t) {
    var l = -1, u = t == null ? 0 : t.length;
    for (this.clear(); ++l < u; ) {
      var y = t[l];
      this.set(y[0], y[1]);
    }
  }
  function gn() {
    this.__data__ = [], this.size = 0;
  }
  function hn(t) {
    var l = this.__data__, u = Sr(l, t);
    if (u < 0)
      return !1;
    var y = l.length - 1;
    return u == y ? l.pop() : q.call(l, u, 1), --this.size, !0;
  }
  function mn(t) {
    var l = this.__data__, u = Sr(l, t);
    return u < 0 ? void 0 : l[u][1];
  }
  function bn(t) {
    return Sr(this.__data__, t) > -1;
  }
  function vn(t, l) {
    var u = this.__data__, y = Sr(u, t);
    return y < 0 ? (++this.size, u.push([t, l])) : u[y][1] = l, this;
  }
  ze.prototype.clear = gn, ze.prototype.delete = hn, ze.prototype.get = mn, ze.prototype.has = bn, ze.prototype.set = vn;
  function ir(t) {
    var l = -1, u = t == null ? 0 : t.length;
    for (this.clear(); ++l < u; ) {
      var y = t[l];
      this.set(y[0], y[1]);
    }
  }
  function yn() {
    this.size = 0, this.__data__ = {
      hash: new ve(),
      map: new (ar || ze)(),
      string: new ve()
    };
  }
  function Sn(t) {
    var l = xr(this, t).delete(t);
    return this.size -= l ? 1 : 0, l;
  }
  function _n(t) {
    return xr(this, t).get(t);
  }
  function xn(t) {
    return xr(this, t).has(t);
  }
  function kn(t, l) {
    var u = xr(this, t), y = u.size;
    return u.set(t, l), this.size += u.size == y ? 0 : 1, this;
  }
  ir.prototype.clear = yn, ir.prototype.delete = Sn, ir.prototype.get = _n, ir.prototype.has = xn, ir.prototype.set = kn;
  function sr(t) {
    var l = this.__data__ = new ze(t);
    this.size = l.size;
  }
  function Tn() {
    this.__data__ = new ze(), this.size = 0;
  }
  function wn(t) {
    var l = this.__data__, u = l.delete(t);
    return this.size = l.size, u;
  }
  function Cn(t) {
    return this.__data__.get(t);
  }
  function En(t) {
    return this.__data__.has(t);
  }
  function Rn(t, l) {
    var u = this.__data__;
    if (u instanceof ze) {
      var y = u.__data__;
      if (!ar || y.length < n - 1)
        return y.push([t, l]), this.size = ++u.size, this;
      u = this.__data__ = new ir(y);
    }
    return u.set(t, l), this.size = u.size, this;
  }
  sr.prototype.clear = Tn, sr.prototype.delete = wn, sr.prototype.get = Cn, sr.prototype.has = En, sr.prototype.set = Rn;
  function In(t, l) {
    var u = Fr(t), y = !u && Lr(t), I = !u && !y && St(t), z = !u && !y && !I && xt(t), V = u || y || I || z, B = V ? Ge(t.length, String) : [], Y = B.length;
    for (var ye in t)
      V && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ye == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      I && (ye == "offset" || ye == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      z && (ye == "buffer" || ye == "byteLength" || ye == "byteOffset") || // Skip index properties.
      vt(ye, Y)) || B.push(ye);
    return B;
  }
  function Nr(t, l, u) {
    (u !== void 0 && !kr(t[l], u) || u === void 0 && !(l in t)) && Wr(t, l, u);
  }
  function An(t, l, u) {
    var y = t[l];
    (!(h.call(t, l) && kr(y, u)) || u === void 0 && !(l in t)) && Wr(t, l, u);
  }
  function Sr(t, l) {
    for (var u = t.length; u--; )
      if (kr(t[u][0], l))
        return u;
    return -1;
  }
  function Wr(t, l, u) {
    l == "__proto__" && W ? W(t, l, {
      configurable: !0,
      enumerable: !0,
      value: u,
      writable: !0
    }) : t[l] = u;
  }
  var jn = Vn();
  function _r(t) {
    return t == null ? t === void 0 ? _e : M : w && w in Object(t) ? Yn(t) : Jn(t);
  }
  function mt(t) {
    return dr(t) && _r(t) == f;
  }
  function On(t) {
    if (!Qe(t) || qn(t))
      return !1;
    var l = Gr(t) ? g : ke;
    return l.test(ro(t));
  }
  function Bn(t) {
    return dr(t) && _t(t.length) && !!j[_r(t)];
  }
  function $n(t) {
    if (!Qe(t))
      return Kn(t);
    var l = yt(t), u = [];
    for (var y in t)
      y == "constructor" && (l || !h.call(t, y)) || u.push(y);
    return u;
  }
  function bt(t, l, u, y, I) {
    t !== l && jn(l, function(z, V) {
      if (I || (I = new sr()), Qe(z))
        Pn(t, l, V, u, bt, y, I);
      else {
        var B = y ? y(zr(t, V), z, V + "", t, l, I) : void 0;
        B === void 0 && (B = z), Nr(t, V, B);
      }
    }, kt);
  }
  function Pn(t, l, u, y, I, z, V) {
    var B = zr(t, u), Y = zr(l, u), ye = V.get(Y);
    if (ye) {
      Nr(t, u, ye);
      return;
    }
    var ue = z ? z(B, Y, u + "", t, l, V) : void 0, fr = ue === void 0;
    if (fr) {
      var Vr = Fr(Y), Yr = !Vr && St(Y), wt = !Vr && !Yr && xt(Y);
      ue = Y, Vr || Yr || wt ? Fr(B) ? ue = B : to(B) ? ue = Fn(B) : Yr ? (fr = !1, ue = Mn(Y)) : wt ? (fr = !1, ue = Ln(Y)) : ue = [] : no(Y) || Lr(Y) ? (ue = B, Lr(B) ? ue = oo(B) : (!Qe(B) || Gr(B)) && (ue = Hn(Y))) : fr = !1;
    }
    fr && (V.set(Y, ue), I(ue, Y, y, z, V), V.delete(Y)), Nr(t, u, ue);
  }
  function Nn(t, l) {
    return Zn(Qn(t, l, Tt), t + "");
  }
  var Wn = W ? function(t, l) {
    return W(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: io(l),
      writable: !0
    });
  } : Tt;
  function Mn(t, l) {
    return t.slice();
  }
  function zn(t) {
    var l = new t.constructor(t.byteLength);
    return new H(l).set(new H(t)), l;
  }
  function Ln(t, l) {
    var u = zn(t.buffer);
    return new t.constructor(u, t.byteOffset, t.length);
  }
  function Fn(t, l) {
    var u = -1, y = t.length;
    for (l || (l = Array(y)); ++u < y; )
      l[u] = t[u];
    return l;
  }
  function Dn(t, l, u, y) {
    var I = !u;
    u || (u = {});
    for (var z = -1, V = l.length; ++z < V; ) {
      var B = l[z], Y = void 0;
      Y === void 0 && (Y = t[B]), I ? Wr(u, B, Y) : An(u, B, Y);
    }
    return u;
  }
  function Gn(t) {
    return Nn(function(l, u) {
      var y = -1, I = u.length, z = I > 1 ? u[I - 1] : void 0, V = I > 2 ? u[2] : void 0;
      for (z = t.length > 3 && typeof z == "function" ? (I--, z) : void 0, V && Un(u[0], u[1], V) && (z = I < 3 ? void 0 : z, I = 1), l = Object(l); ++y < I; ) {
        var B = u[y];
        B && t(l, B, y, z);
      }
      return l;
    });
  }
  function Vn(t) {
    return function(l, u, y) {
      for (var I = -1, z = Object(l), V = y(l), B = V.length; B--; ) {
        var Y = V[++I];
        if (u(z[Y], Y, z) === !1)
          break;
      }
      return l;
    };
  }
  function xr(t, l) {
    var u = t.__data__;
    return Xn(l) ? u[typeof l == "string" ? "string" : "hash"] : u.map;
  }
  function Mr(t, l) {
    var u = Ne(t, l);
    return On(u) ? u : void 0;
  }
  function Yn(t) {
    var l = h.call(t, w), u = t[w];
    try {
      t[w] = void 0;
      var y = !0;
    } catch {
    }
    var I = C.call(t);
    return y && (l ? t[w] = u : delete t[w]), I;
  }
  function Hn(t) {
    return typeof t.constructor == "function" && !yt(t) ? cr(N(t)) : {};
  }
  function vt(t, l) {
    var u = typeof t;
    return l = l ?? d, !!l && (u == "number" || u != "symbol" && Q.test(t)) && t > -1 && t % 1 == 0 && t < l;
  }
  function Un(t, l, u) {
    if (!Qe(u))
      return !1;
    var y = typeof l;
    return (y == "number" ? Dr(u) && vt(l, u.length) : y == "string" && l in u) ? kr(u[l], t) : !1;
  }
  function Xn(t) {
    var l = typeof t;
    return l == "string" || l == "number" || l == "symbol" || l == "boolean" ? t !== "__proto__" : t === null;
  }
  function qn(t) {
    return !!v && v in t;
  }
  function yt(t) {
    var l = t && t.constructor, u = typeof l == "function" && l.prototype || We;
    return t === u;
  }
  function Kn(t) {
    var l = [];
    if (t != null)
      for (var u in Object(t))
        l.push(u);
    return l;
  }
  function Jn(t) {
    return C.call(t);
  }
  function Qn(t, l, u) {
    return l = Ce(l === void 0 ? t.length - 1 : l, 0), function() {
      for (var y = arguments, I = -1, z = Ce(y.length - l, 0), V = Array(z); ++I < z; )
        V[I] = y[l + I];
      I = -1;
      for (var B = Array(l + 1); ++I < l; )
        B[I] = y[I];
      return B[l] = u(V), Pe(t, this, B);
    };
  }
  function zr(t, l) {
    if (!(l === "constructor" && typeof t[l] == "function") && l != "__proto__")
      return t[l];
  }
  var Zn = eo(Wn);
  function eo(t) {
    var l = 0, u = 0;
    return function() {
      var y = or(), I = c - (y - u);
      if (u = y, I > 0) {
        if (++l >= i)
          return arguments[0];
      } else
        l = 0;
      return t.apply(void 0, arguments);
    };
  }
  function ro(t) {
    if (t != null) {
      try {
        return a.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  function kr(t, l) {
    return t === l || t !== t && l !== l;
  }
  var Lr = mt(/* @__PURE__ */ function() {
    return arguments;
  }()) ? mt : function(t) {
    return dr(t) && h.call(t, "callee") && !le.call(t, "callee");
  }, Fr = Array.isArray;
  function Dr(t) {
    return t != null && _t(t.length) && !Gr(t);
  }
  function to(t) {
    return dr(t) && Dr(t);
  }
  var St = U || so;
  function Gr(t) {
    if (!Qe(t))
      return !1;
    var l = _r(t);
    return l == T || l == O || l == m || l == te;
  }
  function _t(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= d;
  }
  function Qe(t) {
    var l = typeof t;
    return t != null && (l == "object" || l == "function");
  }
  function dr(t) {
    return t != null && typeof t == "object";
  }
  function no(t) {
    if (!dr(t) || _r(t) != L)
      return !1;
    var l = N(t);
    if (l === null)
      return !0;
    var u = h.call(l, "constructor") && l.constructor;
    return typeof u == "function" && u instanceof u && a.call(u) == X;
  }
  var xt = $e ? oe($e) : Bn;
  function oo(t) {
    return Dn(t, kt(t));
  }
  function kt(t) {
    return Dr(t) ? In(t) : $n(t);
  }
  var ao = Gn(function(t, l, u, y) {
    bt(t, l, u, y);
  });
  function io(t) {
    return function() {
      return t;
    };
  }
  function Tt(t) {
    return t;
  }
  function so() {
    return !1;
  }
  e.exports = ao;
})(jr, jr.exports);
var sa = jr.exports;
const Fe = /* @__PURE__ */ Vt(sa);
var la = (e) => /!(important)?$/.test(e), Ot = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, ca = (e, r) => (n) => {
  const o = String(r), i = la(o), c = Ot(o), d = e ? `${e}.${c}` : c;
  let f = er(n.__cssMap) && d in n.__cssMap ? n.__cssMap[d].varRef : r;
  return f = Ot(f), i ? `${f} !important` : f;
};
function dt(e) {
  const { scale: r, transform: n, compose: o } = e;
  return (c, d) => {
    var f;
    const b = ca(r, c)(d);
    let m = (f = n == null ? void 0 : n(b, d)) != null ? f : b;
    return o && (m = o(m, d)), m;
  };
}
var Cr = (...e) => (r) => e.reduce((n, o) => o(n), r);
function he(e, r) {
  return (n) => {
    const o = { property: n, scale: e };
    return o.transform = dt({
      scale: e,
      transform: r
    }), o;
  };
}
var ua = ({ rtl: e, ltr: r }) => (n) => n.direction === "rtl" ? e : r;
function da(e) {
  const { property: r, scale: n, transform: o } = e;
  return {
    scale: n,
    property: ua(r),
    transform: n ? dt({
      scale: n,
      compose: o
    }) : o
  };
}
var Qt = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function fa() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Qt
  ].join(" ");
}
function pa() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Qt
  ].join(" ");
}
var ga = {
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
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, ha = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function ma(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var ba = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Jr = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, va = new Set(Object.values(Jr)), Qr = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), ya = (e) => e.trim();
function Sa(e, r) {
  if (e == null || Qr.has(e))
    return e;
  if (!(Zr(e) || Qr.has(e)))
    return `url('${e}')`;
  const i = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), c = i == null ? void 0 : i[1], d = i == null ? void 0 : i[2];
  if (!c || !d)
    return e;
  const f = c.includes("-gradient") ? c : `${c}-gradient`, [b, ...m] = d.split(",").map(ya).filter(Boolean);
  if ((m == null ? void 0 : m.length) === 0)
    return e;
  const S = b in Jr ? Jr[b] : b;
  m.unshift(S);
  const _ = m.map((k) => {
    if (va.has(k))
      return k;
    const T = k.indexOf(" "), [O, P] = T !== -1 ? [k.substr(0, T), k.substr(T + 1)] : [k], A = Zr(P) ? P : P && P.split(" "), M = `colors.${O}`, L = M in r.__cssMap ? r.__cssMap[M].varRef : O;
    return A ? [
      L,
      ...Array.isArray(A) ? A : [A]
    ].join(" ") : L;
  });
  return `${f}(${_.join(", ")})`;
}
var Zr = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), _a = (e, r) => Sa(e, r ?? {});
function xa(e) {
  return /^var\(--.+\)$/.test(e);
}
var ka = (e) => {
  const r = parseFloat(e.toString()), n = e.toString().replace(String(r), "");
  return { unitless: !n, value: r, unit: n };
}, Ee = (e) => (r) => `${e}(${r})`, R = {
  filter(e) {
    return e !== "auto" ? e : ga;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : ha;
  },
  ring(e) {
    return ma(R.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? fa() : e === "auto-gpu" ? pa() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = ka(e);
    return r || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, r) {
    const n = { left: "right", right: "left" };
    return r.direction === "rtl" ? n[e] : e;
  },
  degree(e) {
    if (xa(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: _a,
  blur: Ee("blur"),
  opacity: Ee("opacity"),
  brightness: Ee("brightness"),
  contrast: Ee("contrast"),
  dropShadow: Ee("drop-shadow"),
  grayscale: Ee("grayscale"),
  hueRotate: (e) => Ee("hue-rotate")(R.degree(e)),
  invert: Ee("invert"),
  saturate: Ee("saturate"),
  sepia: Ee("sepia"),
  bgImage(e) {
    return e == null || Zr(e) || Qr.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: n, divide: o } = (r = ba[e]) != null ? r : {}, i = { flexDirection: e };
    return n && (i[n] = 1), o && (i[o] = 1), i;
  }
}, s = {
  borderWidths: he("borderWidths"),
  borderStyles: he("borderStyles"),
  colors: he("colors"),
  borders: he("borders"),
  gradients: he("gradients", R.gradient),
  radii: he("radii", R.px),
  space: he("space", Cr(R.vh, R.px)),
  spaceT: he("space", Cr(R.vh, R.px)),
  degreeT(e) {
    return { property: e, transform: R.degree };
  },
  prop(e, r, n) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: dt({ scale: r, transform: n })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: he("sizes", Cr(R.vh, R.px)),
  sizesT: he("sizes", Cr(R.vh, R.fraction)),
  shadows: he("shadows"),
  logical: da,
  blur: he("blur", R.blur)
}, Rr = {
  background: s.colors("background"),
  backgroundColor: s.colors("backgroundColor"),
  backgroundImage: s.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: R.bgClip },
  bgSize: s.prop("backgroundSize"),
  bgPosition: s.prop("backgroundPosition"),
  bg: s.colors("background"),
  bgColor: s.colors("backgroundColor"),
  bgPos: s.prop("backgroundPosition"),
  bgRepeat: s.prop("backgroundRepeat"),
  bgAttachment: s.prop("backgroundAttachment"),
  bgGradient: s.gradients("backgroundImage"),
  bgClip: { transform: R.bgClip }
};
Object.assign(Rr, {
  bgImage: Rr.backgroundImage,
  bgImg: Rr.backgroundImage
});
var $ = {
  border: s.borders("border"),
  borderWidth: s.borderWidths("borderWidth"),
  borderStyle: s.borderStyles("borderStyle"),
  borderColor: s.colors("borderColor"),
  borderRadius: s.radii("borderRadius"),
  borderTop: s.borders("borderTop"),
  borderBlockStart: s.borders("borderBlockStart"),
  borderTopLeftRadius: s.radii("borderTopLeftRadius"),
  borderStartStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: s.radii("borderTopRightRadius"),
  borderStartEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: s.borders("borderRight"),
  borderInlineEnd: s.borders("borderInlineEnd"),
  borderBottom: s.borders("borderBottom"),
  borderBlockEnd: s.borders("borderBlockEnd"),
  borderBottomLeftRadius: s.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: s.radii("borderBottomRightRadius"),
  borderLeft: s.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: s.borders(["borderLeft", "borderRight"]),
  borderInline: s.borders("borderInline"),
  borderY: s.borders(["borderTop", "borderBottom"]),
  borderBlock: s.borders("borderBlock"),
  borderTopWidth: s.borderWidths("borderTopWidth"),
  borderBlockStartWidth: s.borderWidths("borderBlockStartWidth"),
  borderTopColor: s.colors("borderTopColor"),
  borderBlockStartColor: s.colors("borderBlockStartColor"),
  borderTopStyle: s.borderStyles("borderTopStyle"),
  borderBlockStartStyle: s.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: s.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: s.borderWidths("borderBlockEndWidth"),
  borderBottomColor: s.colors("borderBottomColor"),
  borderBlockEndColor: s.colors("borderBlockEndColor"),
  borderBottomStyle: s.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: s.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: s.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: s.borderWidths("borderInlineStartWidth"),
  borderLeftColor: s.colors("borderLeftColor"),
  borderInlineStartColor: s.colors("borderInlineStartColor"),
  borderLeftStyle: s.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: s.borderStyles("borderInlineStartStyle"),
  borderRightWidth: s.borderWidths("borderRightWidth"),
  borderInlineEndWidth: s.borderWidths("borderInlineEndWidth"),
  borderRightColor: s.colors("borderRightColor"),
  borderInlineEndColor: s.colors("borderInlineEndColor"),
  borderRightStyle: s.borderStyles("borderRightStyle"),
  borderInlineEndStyle: s.borderStyles("borderInlineEndStyle"),
  borderTopRadius: s.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: s.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: s.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: s.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign($, {
  rounded: $.borderRadius,
  roundedTop: $.borderTopRadius,
  roundedTopLeft: $.borderTopLeftRadius,
  roundedTopRight: $.borderTopRightRadius,
  roundedTopStart: $.borderStartStartRadius,
  roundedTopEnd: $.borderStartEndRadius,
  roundedBottom: $.borderBottomRadius,
  roundedBottomLeft: $.borderBottomLeftRadius,
  roundedBottomRight: $.borderBottomRightRadius,
  roundedBottomStart: $.borderEndStartRadius,
  roundedBottomEnd: $.borderEndEndRadius,
  roundedLeft: $.borderLeftRadius,
  roundedRight: $.borderRightRadius,
  roundedStart: $.borderInlineStartRadius,
  roundedEnd: $.borderInlineEndRadius,
  borderStart: $.borderInlineStart,
  borderEnd: $.borderInlineEnd,
  borderTopStartRadius: $.borderStartStartRadius,
  borderTopEndRadius: $.borderStartEndRadius,
  borderBottomStartRadius: $.borderEndStartRadius,
  borderBottomEndRadius: $.borderEndEndRadius,
  borderStartRadius: $.borderInlineStartRadius,
  borderEndRadius: $.borderInlineEndRadius,
  borderStartWidth: $.borderInlineStartWidth,
  borderEndWidth: $.borderInlineEndWidth,
  borderStartColor: $.borderInlineStartColor,
  borderEndColor: $.borderInlineEndColor,
  borderStartStyle: $.borderInlineStartStyle,
  borderEndStyle: $.borderInlineEndStyle
});
var Ta = {
  color: s.colors("color"),
  textColor: s.colors("color"),
  fill: s.colors("fill"),
  stroke: s.colors("stroke")
}, et = {
  boxShadow: s.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: s.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: s.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(et, {
  shadow: et.boxShadow
});
var wa = {
  filter: { transform: R.filter },
  blur: s.blur("--chakra-blur"),
  brightness: s.propT("--chakra-brightness", R.brightness),
  contrast: s.propT("--chakra-contrast", R.contrast),
  hueRotate: s.propT("--chakra-hue-rotate", R.hueRotate),
  invert: s.propT("--chakra-invert", R.invert),
  saturate: s.propT("--chakra-saturate", R.saturate),
  dropShadow: s.propT("--chakra-drop-shadow", R.dropShadow),
  backdropFilter: { transform: R.backdropFilter },
  backdropBlur: s.blur("--chakra-backdrop-blur"),
  backdropBrightness: s.propT(
    "--chakra-backdrop-brightness",
    R.brightness
  ),
  backdropContrast: s.propT("--chakra-backdrop-contrast", R.contrast),
  backdropHueRotate: s.propT(
    "--chakra-backdrop-hue-rotate",
    R.hueRotate
  ),
  backdropInvert: s.propT("--chakra-backdrop-invert", R.invert),
  backdropSaturate: s.propT("--chakra-backdrop-saturate", R.saturate)
}, Or = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: R.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: s.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: s.space("gap"),
  rowGap: s.space("rowGap"),
  columnGap: s.space("columnGap")
};
Object.assign(Or, {
  flexDir: Or.flexDirection
});
var Zt = {
  gridGap: s.space("gridGap"),
  gridColumnGap: s.space("gridColumnGap"),
  gridRowGap: s.space("gridRowGap"),
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
  gridArea: !0
}, Ca = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: R.outline },
  outlineOffset: !0,
  outlineColor: s.colors("outlineColor")
}, me = {
  width: s.sizesT("width"),
  inlineSize: s.sizesT("inlineSize"),
  height: s.sizes("height"),
  blockSize: s.sizes("blockSize"),
  boxSize: s.sizes(["width", "height"]),
  minWidth: s.sizes("minWidth"),
  minInlineSize: s.sizes("minInlineSize"),
  minHeight: s.sizes("minHeight"),
  minBlockSize: s.sizes("minBlockSize"),
  maxWidth: s.sizes("maxWidth"),
  maxInlineSize: s.sizes("maxInlineSize"),
  maxHeight: s.sizes("maxHeight"),
  maxBlockSize: s.sizes("maxBlockSize"),
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
    transform: (e, r) => {
      var n, o, i;
      return { [`@media screen and (min-width: ${(i = (o = (n = r.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : o.minW) != null ? i : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, r) => {
      var n, o, i;
      return { [`@media screen and (max-width: ${(i = (o = (n = r.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : o._minW) != null ? i : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: s.propT("float", R.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(me, {
  w: me.width,
  h: me.height,
  minW: me.minWidth,
  maxW: me.maxWidth,
  minH: me.minHeight,
  maxH: me.maxHeight,
  overscroll: me.overscrollBehavior,
  overscrollX: me.overscrollBehaviorX,
  overscrollY: me.overscrollBehaviorY
});
var Ea = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: s.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: s.prop("listStyleImage")
};
function Ra(e, r, n, o) {
  const i = typeof r == "string" ? r.split(".") : [r];
  for (o = 0; o < i.length && e; o += 1)
    e = e[i[o]];
  return e === void 0 ? n : e;
}
var Ia = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (o, i, c, d) => {
    if (typeof o > "u")
      return e(o, i, c);
    r.has(o) || r.set(o, /* @__PURE__ */ new Map());
    const f = r.get(o);
    if (f.has(i))
      return f.get(i);
    const b = e(o, i, c, d);
    return f.set(i, b), b;
  };
}, Aa = Ia(Ra), ja = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Oa = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Xr = (e, r, n) => {
  const o = {}, i = Aa(e, r, {});
  for (const c in i)
    c in n && n[c] != null || (o[c] = i[c]);
  return o;
}, Ba = {
  srOnly: {
    transform(e) {
      return e === !0 ? ja : e === "focusable" ? Oa : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, n) => Xr(r, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, n) => Xr(r, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, r, n) => Xr(r, e, n)
  }
}, br = {
  position: !0,
  pos: s.prop("position"),
  zIndex: s.prop("zIndex", "zIndices"),
  inset: s.spaceT("inset"),
  insetX: s.spaceT(["left", "right"]),
  insetInline: s.spaceT("insetInline"),
  insetY: s.spaceT(["top", "bottom"]),
  insetBlock: s.spaceT("insetBlock"),
  top: s.spaceT("top"),
  insetBlockStart: s.spaceT("insetBlockStart"),
  bottom: s.spaceT("bottom"),
  insetBlockEnd: s.spaceT("insetBlockEnd"),
  left: s.spaceT("left"),
  insetInlineStart: s.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: s.spaceT("right"),
  insetInlineEnd: s.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(br, {
  insetStart: br.insetInlineStart,
  insetEnd: br.insetInlineEnd
});
var $a = {
  ring: { transform: R.ring },
  ringColor: s.colors("--chakra-ring-color"),
  ringOffset: s.prop("--chakra-ring-offset-width"),
  ringOffsetColor: s.colors("--chakra-ring-offset-color"),
  ringInset: s.prop("--chakra-ring-inset")
}, G = {
  margin: s.spaceT("margin"),
  marginTop: s.spaceT("marginTop"),
  marginBlockStart: s.spaceT("marginBlockStart"),
  marginRight: s.spaceT("marginRight"),
  marginInlineEnd: s.spaceT("marginInlineEnd"),
  marginBottom: s.spaceT("marginBottom"),
  marginBlockEnd: s.spaceT("marginBlockEnd"),
  marginLeft: s.spaceT("marginLeft"),
  marginInlineStart: s.spaceT("marginInlineStart"),
  marginX: s.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: s.spaceT("marginInline"),
  marginY: s.spaceT(["marginTop", "marginBottom"]),
  marginBlock: s.spaceT("marginBlock"),
  padding: s.space("padding"),
  paddingTop: s.space("paddingTop"),
  paddingBlockStart: s.space("paddingBlockStart"),
  paddingRight: s.space("paddingRight"),
  paddingBottom: s.space("paddingBottom"),
  paddingBlockEnd: s.space("paddingBlockEnd"),
  paddingLeft: s.space("paddingLeft"),
  paddingInlineStart: s.space("paddingInlineStart"),
  paddingInlineEnd: s.space("paddingInlineEnd"),
  paddingX: s.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: s.space("paddingInline"),
  paddingY: s.space(["paddingTop", "paddingBottom"]),
  paddingBlock: s.space("paddingBlock")
};
Object.assign(G, {
  m: G.margin,
  mt: G.marginTop,
  mr: G.marginRight,
  me: G.marginInlineEnd,
  marginEnd: G.marginInlineEnd,
  mb: G.marginBottom,
  ml: G.marginLeft,
  ms: G.marginInlineStart,
  marginStart: G.marginInlineStart,
  mx: G.marginX,
  my: G.marginY,
  p: G.padding,
  pt: G.paddingTop,
  py: G.paddingY,
  px: G.paddingX,
  pb: G.paddingBottom,
  pl: G.paddingLeft,
  ps: G.paddingInlineStart,
  paddingStart: G.paddingInlineStart,
  pr: G.paddingRight,
  pe: G.paddingInlineEnd,
  paddingEnd: G.paddingInlineEnd
});
var Pa = {
  textDecorationColor: s.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: s.shadows("textShadow")
}, Na = {
  clipPath: !0,
  transform: s.propT("transform", R.transform),
  transformOrigin: !0,
  translateX: s.spaceT("--chakra-translate-x"),
  translateY: s.spaceT("--chakra-translate-y"),
  skewX: s.degreeT("--chakra-skew-x"),
  skewY: s.degreeT("--chakra-skew-y"),
  scaleX: s.prop("--chakra-scale-x"),
  scaleY: s.prop("--chakra-scale-y"),
  scale: s.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: s.degreeT("--chakra-rotate")
}, Wa = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: s.prop("transitionDuration", "transition.duration"),
  transitionProperty: s.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: s.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Ma = {
  fontFamily: s.prop("fontFamily", "fonts"),
  fontSize: s.prop("fontSize", "fontSizes", R.px),
  fontWeight: s.prop("fontWeight", "fontWeights"),
  lineHeight: s.prop("lineHeight", "lineHeights"),
  letterSpacing: s.prop("letterSpacing", "letterSpacings"),
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
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, za = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: s.spaceT("scrollMargin"),
  scrollMarginTop: s.spaceT("scrollMarginTop"),
  scrollMarginBottom: s.spaceT("scrollMarginBottom"),
  scrollMarginLeft: s.spaceT("scrollMarginLeft"),
  scrollMarginRight: s.spaceT("scrollMarginRight"),
  scrollMarginX: s.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: s.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: s.spaceT("scrollPadding"),
  scrollPaddingTop: s.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: s.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: s.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: s.spaceT("scrollPaddingRight"),
  scrollPaddingX: s.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: s.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function en(e) {
  return er(e) && e.reference ? e.reference : String(e);
}
var $r = (e, ...r) => r.map(en).join(` ${e} `).replace(/calc/g, ""), Bt = (...e) => `calc(${$r("+", ...e)})`, $t = (...e) => `calc(${$r("-", ...e)})`, rt = (...e) => `calc(${$r("*", ...e)})`, Pt = (...e) => `calc(${$r("/", ...e)})`, Nt = (e) => {
  const r = en(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : rt(r, -1);
}, hr = Object.assign(
  (e) => ({
    add: (...r) => hr(Bt(e, ...r)),
    subtract: (...r) => hr($t(e, ...r)),
    multiply: (...r) => hr(rt(e, ...r)),
    divide: (...r) => hr(Pt(e, ...r)),
    negate: () => hr(Nt(e)),
    toString: () => e.toString()
  }),
  {
    add: Bt,
    subtract: $t,
    multiply: rt,
    divide: Pt,
    negate: Nt
  }
);
function La(e) {
  const r = parseFloat(e.toString()), n = e.toString().replace(String(r), "");
  return { unitless: !n, value: r, unit: n };
}
function Wt(e) {
  if (e == null)
    return e;
  const { unitless: r } = La(e);
  return r || typeof e == "number" ? `${e}px` : e;
}
function Fa(e, r) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Wt(e)})`), r && n.push("and", `(max-width: ${Wt(r)})`), n.join(" ");
}
var re = {
  hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
  focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
  focusVisible: (e, r) => `${e}:focus-visible ${r}`,
  focusWithin: (e, r) => `${e}:focus-within ${r}`,
  active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
  disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
  invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
  checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
  indeterminate: (e, r) => `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
  readOnly: (e, r) => `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
  expanded: (e, r) => `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
  placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`
}, Ye = (e) => rn((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), Le = (e) => rn((r) => e(r, "~ &"), "[data-peer]", ".peer"), rn = (e, ...r) => r.map(e).join(", "), ft = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: Ye(re.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Le(re.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Ye(re.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Le(re.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Ye(re.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Le(re.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Ye(re.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Le(re.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Ye(re.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Le(re.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Ye(re.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Le(re.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Ye(re.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Le(re.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Ye(re.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Le(re.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Le(re.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, Da = Object.keys(
  ft
);
function Ga(e, r = []) {
  const n = Object.assign({}, e);
  for (const o of r)
    o in n && delete n[o];
  return n;
}
var pt = Fe(
  {},
  Rr,
  $,
  Ta,
  Or,
  me,
  wa,
  $a,
  Ca,
  Zt,
  Ba,
  br,
  et,
  G,
  za,
  Ma,
  Pa,
  Na,
  Ea,
  Wa
);
Object.assign({}, G, me, Or, Zt, br);
var Va = [...Object.keys(pt), ...Da], Ya = { ...pt, ...ft }, Ha = (e) => e in Ya, Ua = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: o, media: i } = r.__breakpoints, c = {};
  for (const d in e) {
    let f = Ze(e[d], r);
    if (f == null)
      continue;
    if (f = er(f) && n(f) ? o(f) : f, !Array.isArray(f)) {
      c[d] = f;
      continue;
    }
    const b = f.slice(0, i.length).length;
    for (let m = 0; m < b; m += 1) {
      const S = i == null ? void 0 : i[m];
      if (!S) {
        c[d] = f[m];
        continue;
      }
      c[S] = c[S] || {}, f[m] != null && (c[S][d] = f[m]);
    }
  }
  return c;
};
function Xa(e) {
  const r = [];
  let n = "", o = !1;
  for (let i = 0; i < e.length; i++) {
    const c = e[i];
    c === "(" ? (o = !0, n += c) : c === ")" ? (o = !1, n += c) : c === "," && !o ? (r.push(n), n = "") : n += c;
  }
  return n = n.trim(), n && r.push(n), r;
}
function qa(e) {
  return /^var\(--.+\)$/.test(e);
}
var Ka = (e, r) => e.startsWith("--") && typeof r == "string" && !qa(r), Ja = (e, r) => {
  var n, o;
  if (r == null)
    return r;
  const i = (b) => {
    var m, S;
    return (S = (m = e.__cssMap) == null ? void 0 : m[b]) == null ? void 0 : S.varRef;
  }, c = (b) => {
    var m;
    return (m = i(b)) != null ? m : b;
  }, [d, f] = Xa(r);
  return r = (o = (n = i(d)) != null ? n : c(f)) != null ? o : c(r), r;
};
function Qa(e) {
  const { configs: r = {}, pseudos: n = {}, theme: o } = e, i = (c, d = !1) => {
    var f, b, m;
    const S = Ze(c, o), _ = Ua(S)(o);
    let k = {};
    for (let T in _) {
      const O = _[T];
      let P = Ze(O, o);
      T in n && (T = n[T]), Ka(T, P) && (P = Ja(o, P));
      let A = r[T];
      if (A === !0 && (A = { property: T }), er(P)) {
        k[T] = (f = k[T]) != null ? f : {}, k[T] = Fe(
          {},
          k[T],
          i(P, !0)
        );
        continue;
      }
      let M = (m = (b = A == null ? void 0 : A.transform) == null ? void 0 : b.call(A, P, o, S)) != null ? m : P;
      M = A != null && A.processResult ? i(M, !0) : M;
      const L = Ze(A == null ? void 0 : A.property, o);
      if (!d && (A != null && A.static)) {
        const te = Ze(A.static, o);
        k = Fe({}, k, te);
      }
      if (L && Array.isArray(L)) {
        for (const te of L)
          k[te] = M;
        continue;
      }
      if (L) {
        L === "&" && er(M) ? k = Fe({}, k, M) : k[L] = M;
        continue;
      }
      if (er(M)) {
        k = Fe({}, k, M);
        continue;
      }
      k[T] = M;
    }
    return k;
  };
  return i;
}
var Za = (e) => (r) => Qa({
  theme: r,
  pseudos: ft,
  configs: pt
})(e);
function ei(e, r) {
  if (Array.isArray(e))
    return e;
  if (er(e))
    return r(e);
  if (e != null)
    return [e];
}
function ri(e, r) {
  for (let n = r + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function ti(e) {
  const r = e.__breakpoints;
  return function(o, i, c, d) {
    var f, b;
    if (!r)
      return;
    const m = {}, S = ei(c, r.toArrayValue);
    if (!S)
      return m;
    const _ = S.length, k = _ === 1, T = !!o.parts;
    for (let O = 0; O < _; O++) {
      const P = r.details[O], A = r.details[ri(S, O)], M = Fa(P.minW, A == null ? void 0 : A._minW), L = Ze((f = o[i]) == null ? void 0 : f[S[O]], d);
      if (L) {
        if (T) {
          (b = o.parts) == null || b.forEach((te) => {
            Fe(m, {
              [te]: k ? L[te] : { [M]: L[te] }
            });
          });
          continue;
        }
        if (!T) {
          k ? Fe(m, L) : m[M] = L;
          continue;
        }
        m[M] = L;
      }
    }
    return m;
  };
}
function ni(e) {
  return (r) => {
    var n;
    const { variant: o, size: i, theme: c } = r, d = ti(c);
    return Fe(
      {},
      Ze((n = e.baseStyle) != null ? n : {}, r),
      d(e, "sizes", i, r),
      d(e, "variants", o, r)
    );
  };
}
function oi(e) {
  return Ga(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function ai(e, r) {
  const n = {};
  return Object.keys(e).forEach((o) => {
    r.includes(o) || (n[o] = e[o]);
  }), n;
}
function ii(e, r, n, o) {
  const i = typeof r == "string" ? r.split(".") : [r];
  for (o = 0; o < i.length && e; o += 1)
    e = e[i[o]];
  return e === void 0 ? n : e;
}
var si = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (o, i, c, d) => {
    if (typeof o > "u")
      return e(o, i, c);
    r.has(o) || r.set(o, /* @__PURE__ */ new Map());
    const f = r.get(o);
    if (f.has(i))
      return f.get(i);
    const b = e(o, i, c, d);
    return f.set(i, b), b;
  };
}, li = si(ii);
function tn(e, r) {
  const n = {};
  return Object.keys(e).forEach((o) => {
    const i = e[o];
    r(i, o, e) && (n[o] = i);
  }), n;
}
var nn = (e) => tn(e, (r) => r != null);
function ci(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function ui(e, ...r) {
  return ci(e) ? e(...r) : e;
}
var di = typeof Element < "u", fi = typeof Map == "function", pi = typeof Set == "function", gi = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ir(e, r) {
  if (e === r) return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor) return !1;
    var n, o, i;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Ir(e[o], r[o])) return !1;
      return !0;
    }
    var c;
    if (fi && e instanceof Map && r instanceof Map) {
      if (e.size !== r.size) return !1;
      for (c = e.entries(); !(o = c.next()).done; )
        if (!r.has(o.value[0])) return !1;
      for (c = e.entries(); !(o = c.next()).done; )
        if (!Ir(o.value[1], r.get(o.value[0]))) return !1;
      return !0;
    }
    if (pi && e instanceof Set && r instanceof Set) {
      if (e.size !== r.size) return !1;
      for (c = e.entries(); !(o = c.next()).done; )
        if (!r.has(o.value[0])) return !1;
      return !0;
    }
    if (gi && ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
      if (n = e.length, n != r.length) return !1;
      for (o = n; o-- !== 0; )
        if (e[o] !== r[o]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof r.valueOf == "function") return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof r.toString == "function") return e.toString() === r.toString();
    if (i = Object.keys(e), n = i.length, n !== Object.keys(r).length) return !1;
    for (o = n; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
    if (di && e instanceof Element) return !1;
    for (o = n; o-- !== 0; )
      if (!((i[o] === "_owner" || i[o] === "__v" || i[o] === "__o") && e.$$typeof) && !Ir(e[i[o]], r[i[o]]))
        return !1;
    return !0;
  }
  return e !== e && r !== r;
}
var hi = function(r, n) {
  try {
    return Ir(r, n);
  } catch (o) {
    if ((o.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw o;
  }
};
const mi = /* @__PURE__ */ Vt(hi);
function on(e, r = {}) {
  var n;
  const { styleConfig: o, ...i } = r, { theme: c, colorMode: d } = aa(), f = e ? li(c, `components.${e}`) : void 0, b = o || f, m = Fe(
    { theme: c, colorMode: d },
    (n = b == null ? void 0 : b.defaultProps) != null ? n : {},
    nn(ai(i, ["children"]))
  ), S = lr({});
  if (b) {
    const k = ni(b)(m);
    mi(S.current, k) || (S.current = k);
  }
  return S.current;
}
function bi(e, r = {}) {
  return on(e, r);
}
function vi(e, r = {}) {
  return on(e, r);
}
var yi = /* @__PURE__ */ new Set([
  ...Va,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), Si = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function _i(e) {
  return Si.has(e) || !yi.has(e);
}
function xi(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const o of r)
    if (o != null)
      for (const i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (i in n && delete n[i], n[i] = o[i]);
  return n;
}
var Mt, ki = (Mt = Et.default) != null ? Mt : Et, Ti = ({ baseStyle: e }) => (r) => {
  const { theme: n, css: o, __css: i, sx: c, ...d } = r, f = tn(d, (_, k) => Ha(k)), b = ui(e, r), m = xi(
    {},
    i,
    b,
    nn(f),
    c
  ), S = Za(m)(r.theme);
  return o ? [S, o] : S;
};
function qr(e, r) {
  const { baseStyle: n, ...o } = r ?? {};
  o.shouldForwardProp || (o.shouldForwardProp = _i);
  const i = Ti({ baseStyle: n }), c = ki(
    e,
    o
  )(i);
  return He.forwardRef(function(b, m) {
    const { colorMode: S, forced: _ } = Jt();
    return He.createElement(c, {
      ref: m,
      "data-theme": _ ? S : void 0,
      ...b
    });
  });
}
function wi() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(qr, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(r, n, o) {
      return qr(...o);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(r, n) {
      return e.has(n) || e.set(n, qr(n)), e.get(n);
    }
  });
}
var Ie = wi();
function Se(e) {
  return co(e);
}
var zt = {
  path: /* @__PURE__ */ x.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ x.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ x.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Pr = Se((e, r) => {
  const {
    as: n,
    viewBox: o,
    color: i = "currentColor",
    focusable: c = !1,
    children: d,
    className: f,
    __css: b,
    ...m
  } = e, S = ut("chakra-icon", f), _ = bi("Icon", e), k = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: i,
    ...b,
    ..._
  }, T = {
    ref: r,
    focusable: c,
    className: S,
    __css: k
  }, O = o ?? zt.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ x.jsx(Ie.svg, { as: n, ...T, ...m });
  const P = d ?? zt.path;
  return /* @__PURE__ */ x.jsx(Ie.svg, { verticalAlign: "middle", viewBox: O, ...T, ...m, children: P });
});
Pr.displayName = "Icon";
function Ci(e, r) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${r}`;
}
function Ei(e = {}) {
  const {
    name: r,
    strict: n = !0,
    hookName: o = "useContext",
    providerName: i = "Provider",
    errorMessage: c,
    defaultValue: d
  } = e, f = Dt(d);
  f.displayName = r;
  function b() {
    var m;
    const S = tt(f);
    if (!S && n) {
      const _ = new Error(
        c ?? Ci(o, i)
      );
      throw _.name = "ContextError", (m = Error.captureStackTrace) == null || m.call(Error, _, b), _;
    }
    return S;
  }
  return [f.Provider, b, f];
}
var Ri = Se(function(r, n) {
  const {
    spacing: o = "0.5rem",
    spacingX: i,
    spacingY: c,
    children: d,
    justify: f,
    direction: b,
    align: m,
    className: S,
    shouldWrapChildren: _,
    ...k
  } = r, T = mr(
    () => _ ? uo.map(d, (O, P) => /* @__PURE__ */ x.jsx(gt, { children: O }, P)) : d,
    [d, _]
  );
  return /* @__PURE__ */ x.jsx(Ie.div, { ref: n, className: ut("chakra-wrap", S), ...k, children: /* @__PURE__ */ x.jsx(
    Ie.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: f,
        alignItems: m,
        flexDirection: b,
        listStyleType: "none",
        gap: o,
        columnGap: i,
        rowGap: c,
        padding: "0"
      },
      children: T
    }
  ) });
});
Ri.displayName = "Wrap";
var gt = Se(function(r, n) {
  const { className: o, ...i } = r;
  return /* @__PURE__ */ x.jsx(
    Ie.li,
    {
      ref: n,
      __css: { display: "flex", alignItems: "flex-start" },
      className: ut("chakra-wrap__listitem", o),
      ...i
    }
  );
});
gt.displayName = "WrapItem";
var ht = Ie("div");
ht.displayName = "Box";
var an = Se(function(r, n) {
  const { size: o, centerContent: i = !0, ...c } = r, d = i ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ x.jsx(
    ht,
    {
      ref: n,
      boxSize: o,
      __css: {
        ...d,
        flexShrink: 0,
        flexGrow: 0
      },
      ...c
    }
  );
});
an.displayName = "Square";
var Ii = Se(function(r, n) {
  const { size: o, ...i } = r;
  return /* @__PURE__ */ x.jsx(an, { size: o, ref: n, borderRadius: "9999px", ...i });
});
Ii.displayName = "Circle";
var sn = Se(function(r, n) {
  const { direction: o, align: i, justify: c, wrap: d, basis: f, grow: b, shrink: m, ...S } = r, _ = {
    display: "flex",
    flexDirection: o,
    alignItems: i,
    justifyContent: c,
    flexWrap: d,
    flexBasis: f,
    flexGrow: b,
    flexShrink: m
  };
  return /* @__PURE__ */ x.jsx(Ie.div, { ref: n, __css: _, ...S });
});
sn.displayName = "Flex";
const Ai = (e) => {
  const { getEmptyStateProps: r, defaultEmptyStateProps: n } = Ue(), o = r(
    /* @__PURE__ */ x.jsx(sn, { ...ji, ...n, children: "No options found!" })
  );
  return /* @__PURE__ */ x.jsx(ht, { ...e, children: o });
}, ji = {
  fontSize: "sm",
  align: "center",
  justify: "center",
  fontWeight: "bold",
  fontStyle: "italic"
}, Lt = [
  "AutoCompleteGroup",
  "AutoCompleteItem",
  "AutoCompleteCreatable"
], Oi = (e) => {
  const r = He.Children.map(e, (i, c) => {
    var d;
    if (((d = i == null ? void 0 : i.type) == null ? void 0 : d.displayName) === "AutoCompleteGroup") {
      const f = He.Children.toArray(e)[c + 1];
      return He.cloneElement(i, {
        groupSibling: f ? f.type.displayName === "AutoCompleteGroup" : !1
      });
    }
    return i;
  }), n = He.Children.toArray(r).filter(
    (i) => {
      var c;
      return !Lt.includes(
        (c = i == null ? void 0 : i.type) == null ? void 0 : c.displayName
      );
    }
  );
  return [He.Children.toArray(r).filter(
    (i) => {
      var c;
      return Lt.includes(
        (c = i == null ? void 0 : i.type) == null ? void 0 : c.displayName
      );
    }
  ), n];
}, Bi = rr(
  (e, r) => {
    const { children: n, loadingState: o, ...i } = e, { listRef: c, isLoading: d } = Ue(), f = nt(r, c), [b, m] = Oi(n);
    return /* @__PURE__ */ x.jsxs(Co, { ref: f, w: "inherit", ...$i, ...i, children: [
      d && /* @__PURE__ */ x.jsx(Eo, { children: o || /* @__PURE__ */ x.jsx(Gt, { size: "md" }) }),
      !d && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        b,
        /* @__PURE__ */ x.jsx(Ai, {}),
        m
      ] })
    ] });
  }
);
Bi.displayName = "AutoCompleteList";
const $i = {
  py: "4",
  opacity: "0",
  bg: "#232934",
  rounded: "md",
  maxH: "350px",
  border: "none",
  shadow: "base",
  zIndex: "popover",
  overflowY: "auto",
  _light: {
    bg: "#ffffff"
  },
  _focus: {
    boxShadow: "none"
  }
};
var [Pi, ln] = Ei({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), cn = Se((e, r) => {
  const n = vi("Tag", e), o = oi(e), i = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ x.jsx(Pi, { value: n, children: /* @__PURE__ */ x.jsx(Ie.span, { ref: r, ...o, __css: i }) });
});
cn.displayName = "Tag";
var un = Se((e, r) => {
  const n = ln();
  return /* @__PURE__ */ x.jsx(Ie.span, { ref: r, noOfLines: 1, ...e, __css: n.label });
});
un.displayName = "TagLabel";
var Ni = Se((e, r) => /* @__PURE__ */ x.jsx(Pr, { ref: r, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
Ni.displayName = "TagLeftIcon";
var Wi = Se((e, r) => /* @__PURE__ */ x.jsx(Pr, { ref: r, verticalAlign: "top", marginStart: "0.5rem", ...e }));
Wi.displayName = "TagRightIcon";
var dn = (e) => /* @__PURE__ */ x.jsx(Pr, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ x.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
dn.displayName = "TagCloseIcon";
var fn = Se(
  (e, r) => {
    const { isDisabled: n, children: o, ...i } = e, d = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...ln().closeButton
    };
    return /* @__PURE__ */ x.jsx(
      Ie.button,
      {
        ref: r,
        "aria-label": "close",
        ...i,
        type: "button",
        disabled: n,
        __css: d,
        children: o || /* @__PURE__ */ x.jsx(dn, {})
      }
    );
  }
);
fn.displayName = "TagCloseButton";
const Di = fo((e) => {
  const { label: r, onRemove: n, disabled: o, ...i } = e;
  return /* @__PURE__ */ x.jsx(gt, { children: /* @__PURE__ */ x.jsxs(
    cn,
    {
      borderRadius: "md",
      fontWeight: "normal",
      ...o && Ft,
      ...i,
      children: [
        /* @__PURE__ */ x.jsx(un, { children: r }),
        /* @__PURE__ */ x.jsx(
          fn,
          {
            onClick: () => !o && J(n),
            cursor: "pointer",
            ...o && Ft
          }
        )
      ]
    }
  ) });
}), Ft = {
  cursor: "text",
  userSelect: "none",
  opacity: 0.4,
  _focus: { boxShadow: "none" }
};
export {
  Jo as AutoComplete,
  Zo as AutoCompleteCreatable,
  ea as AutoCompleteGroup,
  ra as AutoCompleteGroupTitle,
  qt as AutoCompleteInput,
  Qo as AutoCompleteItem,
  Bi as AutoCompleteList,
  jo as AutoCompleteProvider,
  Di as AutoCompleteTag,
  Xt as baseItemStyles,
  Oo as createContext,
  Ko as useAutoComplete,
  Ue as useAutoCompleteContext
};
