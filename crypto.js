// var Ht = Object.defineProperty;
// var zt = (r, e, t) =>
//   e in r
//     ? Ht(r, e, {
//         enumerable: !0,
//         configurable: !0,
//         writable: !0,
//         value: t,
//       })
//     : (r[e] = t);
// var y = (r, e, t) => (zt(r, typeof e != "symbol" ? e + "" : e, t), t),
//   lt = (r, e, t) => {
//     if (!e.has(r)) throw TypeError("Cannot " + t);
//   };
// var F = (r, e, t) => (
//     lt(r, e, "read from private field"), t ? t.call(r) : e.get(r)
//   ),
//   q = (r, e, t) => {
//     if (e.has(r))
//       throw TypeError("Cannot add the same private member more than once");
//     e instanceof WeakSet ? e.add(r) : e.set(r, t);
//   },
//   Q = (r, e, t, n) => (
//     lt(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t
//   );
// var He = (r, e, t, n) => ({
//     set _(i) {
//       Q(r, e, i, t);
//     },
//     get _() {
//       return F(r, e, n);
//     },
//   }),
//   Z = (r, e, t) => (lt(r, e, "access private method"), t);

// function getDefaultExportFromCjs(t) {
//   return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
//     ? t.default
//     : t;
// }

// function getAugmentedNamespace(t) {
//   if (t.__esModule) return t;
//   var e = t.default;
//   if (typeof e == "function") {
//     var n = function o() {
//       return this instanceof o
//         ? Reflect.construct(e, arguments, this.constructor)
//         : e.apply(this, arguments);
//     };
//     n.prototype = e.prototype;
//   } else n = {};
//   return (
//     Object.defineProperty(n, "__esModule", {
//       value: !0,
//     }),
//     Object.keys(t).forEach(function (o) {
//       var s = Object.getOwnPropertyDescriptor(t, o);
//       Object.defineProperty(
//         n,
//         o,
//         s.get
//           ? s
//           : {
//               enumerable: !0,
//               get: function () {
//                 return t[o];
//               },
//             }
//       );
//     }),
//     n
//   );
// }

// var commonjsGlobal =
//   typeof globalThis < "u"
//     ? globalThis
//     : typeof window < "u"
//     ? window
//     : typeof global < "u"
//     ? global
//     : typeof self < "u"
//     ? self
//     : {};

// var browser$3 = {
//   exports: {},
// };
// function tryStringify$1(r) {
//   try {
//     return JSON.stringify(r);
//   } catch {
//     return '"[Circular]"';
//   }
// }
// var quickFormatUnescaped$1 = format$4;
// function format$4(r, e, t) {
//   var n = (t && t.stringify) || tryStringify$1,
//     i = 1;
//   if (typeof r == "object" && r !== null) {
//     var o = e.length + i;
//     if (o === 1) return r;
//     var a = new Array(o);
//     a[0] = n(r);
//     for (var c = 1; c < o; c++) a[c] = n(e[c]);
//     return a.join(" ");
//   }
//   if (typeof r != "string") return r;
//   var u = e.length;
//   if (u === 0) return r;
//   for (
//     var l = "", h = 1 - i, f = -1, d = (r && r.length) || 0, p = 0;
//     p < d;

//   ) {
//     if (r.charCodeAt(p) === 37 && p + 1 < d) {
//       switch (((f = f > -1 ? f : 0), r.charCodeAt(p + 1))) {
//         case 100:
//         case 102:
//           if (h >= u || e[h] == null) break;
//           f < p && (l += r.slice(f, p)), (l += Number(e[h])), (f = p + 2), p++;
//           break;
//         case 105:
//           if (h >= u || e[h] == null) break;
//           f < p && (l += r.slice(f, p)),
//             (l += Math.floor(Number(e[h]))),
//             (f = p + 2),
//             p++;
//           break;
//         case 79:
//         case 111:
//         case 106:
//           if (h >= u || e[h] === void 0) break;
//           f < p && (l += r.slice(f, p));
//           var g = typeof e[h];
//           if (g === "string") {
//             (l += "'" + e[h] + "'"), (f = p + 2), p++;
//             break;
//           }
//           if (g === "function") {
//             (l += e[h].name || "<anonymous>"), (f = p + 2), p++;
//             break;
//           }
//           (l += n(e[h])), (f = p + 2), p++;
//           break;
//         case 115:
//           if (h >= u) break;
//           f < p && (l += r.slice(f, p)), (l += String(e[h])), (f = p + 2), p++;
//           break;
//         case 37:
//           f < p && (l += r.slice(f, p)), (l += "%"), (f = p + 2), p++, h--;
//           break;
//       }
//       ++h;
//     }
//     ++p;
//   }
//   return f === -1 ? r : (f < d && (l += r.slice(f)), l);
// }
// const format$3 = quickFormatUnescaped$1;
// browser$3.exports = pino$2;
// const _console$1 = pfGlobalThisOrFallback$1().console || {},
//   stdSerializers$1 = {
//     mapHttpRequest: mock$1,
//     mapHttpResponse: mock$1,
//     wrapRequestSerializer: passthrough$1,
//     wrapResponseSerializer: passthrough$1,
//     wrapErrorSerializer: passthrough$1,
//     req: mock$1,
//     res: mock$1,
//     err: asErrValue$1,
//     errWithCause: asErrValue$1,
//   };
// function levelToValue$1(r, e) {
//   return r === "silent" ? 1 / 0 : e.levels.values[r];
// }
// const baseLogFunctionSymbol$1 = Symbol("pino.logFuncs"),
//   hierarchySymbol$1 = Symbol("pino.hierarchy"),
//   logFallbackMap$1 = {
//     error: "log",
//     fatal: "error",
//     warn: "error",
//     info: "log",
//     debug: "log",
//     trace: "log",
//   };
// function appendChildLogger$1(r, e) {
//   const t = {
//     logger: e,
//     parent: r[hierarchySymbol$1],
//   };
//   e[hierarchySymbol$1] = t;
// }
// function setupBaseLogFunctions$1(r, e, t) {
//   const n = {};
//   e.forEach((i) => {
//     n[i] = t[i]
//       ? t[i]
//       : _console$1[i] || _console$1[logFallbackMap$1[i] || "log"] || noop$3;
//   }),
//     (r[baseLogFunctionSymbol$1] = n);
// }
// function shouldSerialize$1(r, e) {
//   return Array.isArray(r)
//     ? r.filter(function (n) {
//         return n !== "!stdSerializers.err";
//       })
//     : r === !0
//     ? Object.keys(e)
//     : !1;
// }
// function pino$2(r) {
//   (r = r || {}), (r.browser = r.browser || {});
//   const e = r.browser.transmit;
//   if (e && typeof e.send != "function")
//     throw Error("pino: transmit option must have a send function");
//   const t = r.browser.write || _console$1;
//   r.browser.write && (r.browser.asObject = !0);
//   const n = r.serializers || {},
//     i = shouldSerialize$1(r.browser.serialize, n);
//   let o = r.browser.serialize;
//   Array.isArray(r.browser.serialize) &&
//     r.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
//     (o = !1);
//   const a = Object.keys(r.customLevels || {}),
//     c = ["error", "fatal", "warn", "info", "debug", "trace"].concat(a);
//   typeof t == "function" &&
//     c.forEach(function (m) {
//       t[m] = t;
//     }),
//     (r.enabled === !1 || r.browser.disabled) && (r.level = "silent");
//   const u = r.level || "info",
//     l = Object.create(t);
//   l.log || (l.log = noop$3),
//     setupBaseLogFunctions$1(l, c, t),
//     appendChildLogger$1({}, l),
//     Object.defineProperty(l, "levelVal", {
//       get: f,
//     }),
//     Object.defineProperty(l, "level", {
//       get: d,
//       set: p,
//     });
//   const h = {
//     transmit: e,
//     serialize: i,
//     asObject: r.browser.asObject,
//     formatters: r.browser.formatters,
//     levels: c,
//     timestamp: getTimeFunction$1(r),
//     messageKey: r.messageKey || "msg",
//     onChild: r.onChild || noop$3,
//   };
//   (l.levels = getLevels$1(r)),
//     (l.level = u),
//     (l.setMaxListeners =
//       l.getMaxListeners =
//       l.emit =
//       l.addListener =
//       l.on =
//       l.prependListener =
//       l.once =
//       l.prependOnceListener =
//       l.removeListener =
//       l.removeAllListeners =
//       l.listeners =
//       l.listenerCount =
//       l.eventNames =
//       l.write =
//       l.flush =
//         noop$3),
//     (l.serializers = n),
//     (l._serialize = i),
//     (l._stdErrSerialize = o),
//     (l.child = function (...m) {
//       return g.call(this, h, ...m);
//     }),
//     e && (l._logEvent = createLogEventShape$1());
//   function f() {
//     return levelToValue$1(this.level, this);
//   }
//   function d() {
//     return this._level;
//   }
//   function p(m) {
//     if (m !== "silent" && !this.levels.values[m])
//       throw Error("unknown level " + m);
//     (this._level = m),
//       set$1(this, h, l, "error"),
//       set$1(this, h, l, "fatal"),
//       set$1(this, h, l, "warn"),
//       set$1(this, h, l, "info"),
//       set$1(this, h, l, "debug"),
//       set$1(this, h, l, "trace"),
//       a.forEach((b) => {
//         set$1(this, h, l, b);
//       });
//   }
//   function g(m, b, _) {
//     if (!b) throw new Error("missing bindings for child Pino");
//     (_ = _ || {}), i && b.serializers && (_.serializers = b.serializers);
//     const w = _.serializers;
//     if (i && w) {
//       var E = Object.assign({}, n, w),
//         v = r.browser.serialize === !0 ? Object.keys(E) : i;
//       delete b.serializers,
//         applySerializers$1([b], v, E, this._stdErrSerialize);
//     }
//     function S(T) {
//       (this._childLevel = (T._childLevel | 0) + 1),
//         (this.bindings = b),
//         E && ((this.serializers = E), (this._serialize = v)),
//         e &&
//           (this._logEvent = createLogEventShape$1(
//             [].concat(T._logEvent.bindings, b)
//           ));
//     }
//     S.prototype = this;
//     const I = new S(this);
//     return (
//       appendChildLogger$1(this, I),
//       (I.child = function (...T) {
//         return g.call(this, m, ...T);
//       }),
//       (I.level = _.level || this.level),
//       m.onChild(I),
//       I
//     );
//   }
//   return l;
// }
// function getLevels$1(r) {
//   const e = r.customLevels || {},
//     t = Object.assign({}, pino$2.levels.values, e),
//     n = Object.assign({}, pino$2.levels.labels, invertObject$1(e));
//   return {
//     values: t,
//     labels: n,
//   };
// }
// function invertObject$1(r) {
//   const e = {};
//   return (
//     Object.keys(r).forEach(function (t) {
//       e[r[t]] = t;
//     }),
//     e
//   );
// }
// pino$2.levels = {
//   values: {
//     fatal: 60,
//     error: 50,
//     warn: 40,
//     info: 30,
//     debug: 20,
//     trace: 10,
//   },
//   labels: {
//     10: "trace",
//     20: "debug",
//     30: "info",
//     40: "warn",
//     50: "error",
//     60: "fatal",
//   },
// };
// pino$2.stdSerializers = stdSerializers$1;
// pino$2.stdTimeFunctions = Object.assign(
//   {},
//   {
//     nullTime: nullTime$1,
//     epochTime: epochTime$1,
//     unixTime: unixTime$1,
//     isoTime: isoTime$1,
//   }
// );
// function getBindingChain$1(r) {
//   const e = [];
//   r.bindings && e.push(r.bindings);
//   let t = r[hierarchySymbol$1];
//   for (; t.parent; )
//     (t = t.parent), t.logger.bindings && e.push(t.logger.bindings);
//   return e.reverse();
// }
// function set$1(r, e, t, n) {
//   if (
//     (Object.defineProperty(r, n, {
//       value:
//         levelToValue$1(r.level, t) > levelToValue$1(n, t)
//           ? noop$3
//           : t[baseLogFunctionSymbol$1][n],
//       writable: !0,
//       enumerable: !0,
//       configurable: !0,
//     }),
//     r[n] === noop$3)
//   ) {
//     if (!e.transmit) return;
//     const o = e.transmit.level || r.level,
//       a = t.levels.values[o];
//     if (t.levels.values[n] < a) return;
//   }
//   r[n] = createWrap$1(r, e, t, n);
//   const i = getBindingChain$1(r);
//   i.length !== 0 && (r[n] = prependBindingsInArguments$1(i, r[n]));
// }
// function prependBindingsInArguments$1(r, e) {
//   return function () {
//     return e.apply(this, [...r, ...arguments]);
//   };
// }
// function createWrap$1(r, e, t, n) {
//   return (function (i) {
//     return function () {
//       const a = e.timestamp(),
//         c = new Array(arguments.length),
//         u =
//           Object.getPrototypeOf && Object.getPrototypeOf(this) === _console$1
//             ? _console$1
//             : this;
//       for (var l = 0; l < c.length; l++) c[l] = arguments[l];
//       var h = !1;
//       if (
//         (e.serialize &&
//           (applySerializers$1(
//             c,
//             this._serialize,
//             this.serializers,
//             this._stdErrSerialize
//           ),
//           (h = !0)),
//         e.asObject || e.formatters
//           ? i.call(u, asObject$1(this, n, c, a, e))
//           : i.apply(u, c),
//         e.transmit)
//       ) {
//         const f = e.transmit.level || r._level,
//           d = t.levels.values[f],
//           p = t.levels.values[n];
//         if (p < d) return;
//         transmit$1(
//           this,
//           {
//             ts: a,
//             methodLevel: n,
//             methodValue: p,
//             transmitLevel: f,
//             transmitValue: t.levels.values[e.transmit.level || r._level],
//             send: e.transmit.send,
//             val: levelToValue$1(r._level, t),
//           },
//           c,
//           h
//         );
//       }
//     };
//   })(r[baseLogFunctionSymbol$1][n]);
// }
// function asObject$1(r, e, t, n, i) {
//   const { level: o, log: a = (d) => d } = i.formatters || {},
//     c = t.slice();
//   let u = c[0];
//   const l = {};
//   if ((n && (l.time = n), o)) {
//     const d = o(e, r.levels.values[e]);
//     Object.assign(l, d);
//   } else l.level = r.levels.values[e];
//   let h = (r._childLevel | 0) + 1;
//   if ((h < 1 && (h = 1), u !== null && typeof u == "object")) {
//     for (; h-- && typeof c[0] == "object"; ) Object.assign(l, c.shift());
//     u = c.length ? format$3(c.shift(), c) : void 0;
//   } else typeof u == "string" && (u = format$3(c.shift(), c));
//   return u !== void 0 && (l[i.messageKey] = u), a(l);
// }
// function applySerializers$1(r, e, t, n) {
//   for (const i in r)
//     if (n && r[i] instanceof Error) r[i] = pino$2.stdSerializers.err(r[i]);
//     else if (typeof r[i] == "object" && !Array.isArray(r[i]) && e)
//       for (const o in r[i])
//         e.indexOf(o) > -1 && o in t && (r[i][o] = t[o](r[i][o]));
// }
// function transmit$1(r, e, t, n = !1) {
//   const i = e.send,
//     o = e.ts,
//     a = e.methodLevel,
//     c = e.methodValue,
//     u = e.val,
//     l = r._logEvent.bindings;
//   n ||
//     applySerializers$1(
//       t,
//       r._serialize || Object.keys(r.serializers),
//       r.serializers,
//       r._stdErrSerialize === void 0 ? !0 : r._stdErrSerialize
//     ),
//     (r._logEvent.ts = o),
//     (r._logEvent.messages = t.filter(function (h) {
//       return l.indexOf(h) === -1;
//     })),
//     (r._logEvent.level.label = a),
//     (r._logEvent.level.value = c),
//     i(a, r._logEvent, u),
//     (r._logEvent = createLogEventShape$1(l));
// }
// function createLogEventShape$1(r) {
//   return {
//     ts: 0,
//     messages: [],
//     bindings: r || [],
//     level: {
//       label: "",
//       value: 0,
//     },
//   };
// }
// function asErrValue$1(r) {
//   const e = {
//     type: r.constructor.name,
//     msg: r.message,
//     stack: r.stack,
//   };
//   for (const t in r) e[t] === void 0 && (e[t] = r[t]);
//   return e;
// }
// function getTimeFunction$1(r) {
//   return typeof r.timestamp == "function"
//     ? r.timestamp
//     : r.timestamp === !1
//     ? nullTime$1
//     : epochTime$1;
// }
// function mock$1() {
//   return {};
// }
// function passthrough$1(r) {
//   return r;
// }
// function noop$3() {}
// function nullTime$1() {
//   return !1;
// }
// function epochTime$1() {
//   return Date.now();
// }
// function unixTime$1() {
//   return Math.round(Date.now() / 1e3);
// }
// function isoTime$1() {
//   return new Date(Date.now()).toISOString();
// }
// function pfGlobalThisOrFallback$1() {
//   function r(e) {
//     return typeof e < "u" && e;
//   }
//   try {
//     return (
//       typeof globalThis < "u" ||
//         Object.defineProperty(Object.prototype, "globalThis", {
//           get: function () {
//             return delete Object.prototype.globalThis, (this.globalThis = this);
//           },
//           configurable: !0,
//         }),
//       globalThis
//     );
//   } catch {
//     return r(self) || r(window) || r(this) || {};
//   }
// }
// browser$3.exports.default = pino$2;
// var pino_1 = (browser$3.exports.pino = pino$2);
// const connectionSymbol = Symbol.for("@libp2p/connection"),
//   contentRoutingSymbol = Symbol.for("@libp2p/content-routing"),
//   peerDiscoverySymbol = Symbol.for("@libp2p/peer-discovery"),
//   peerIdSymbol = Symbol.for("@libp2p/peer-id");
// function isPeerId(r) {
//   return r != null && !!r[peerIdSymbol];
// }
// const peerRoutingSymbol = Symbol.for("@libp2p/peer-routing"),
//   KEEP_ALIVE = "keep-alive",
//   StrictSign = "StrictSign",
//   StrictNoSign = "StrictNoSign";
// var TopicValidatorResult;
// (function (r) {
//   (r.Accept = "accept"), (r.Ignore = "ignore"), (r.Reject = "reject");
// })(TopicValidatorResult || (TopicValidatorResult = {}));
// const transportSymbol = Symbol.for("@libp2p/transport");
// var FaultTolerance;
// (function (r) {
//   (r[(r.FATAL_ALL = 0)] = "FATAL_ALL"), (r[(r.NO_FATAL = 1)] = "NO_FATAL");
// })(FaultTolerance || (FaultTolerance = {}));
// var pe;
// let AbortError$5 =
//     ((pe = class extends Error {
//       constructor(t = "The operation was aborted") {
//         super(t);
//         y(this, "code");
//         y(this, "type");
//         (this.code = pe.code), (this.type = pe.type);
//       }
//     }),
//     y(pe, "code", "ABORT_ERR"),
//     y(pe, "type", "aborted"),
//     pe),
//   CodeError$2 = class extends Error {
//     constructor(t, n, i) {
//       super(t);
//       y(this, "code");
//       y(this, "props");
//       (this.code = n),
//         (this.name = (i == null ? void 0 : i.name) ?? "CodeError"),
//         (this.props = i ?? {});
//     }
//   };
// function equals$2(r, e) {
//   if (r === e) return !0;
//   if (r.byteLength !== e.byteLength) return !1;
//   for (let t = 0; t < r.byteLength; t++) if (r[t] !== e[t]) return !1;
//   return !0;
// }
// function coerce(r) {
//   if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
//   if (r instanceof ArrayBuffer) return new Uint8Array(r);
//   if (ArrayBuffer.isView(r))
//     return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
//   throw new Error("Unknown type, must be binary type");
// }
// function fromString$1(r) {
//   return new TextEncoder().encode(r);
// }
// function toString$4(r) {
//   return new TextDecoder().decode(r);
// }
// function base$1(r, e) {
//   if (r.length >= 255) throw new TypeError("Alphabet too long");
//   for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
//   for (var i = 0; i < r.length; i++) {
//     var o = r.charAt(i),
//       a = o.charCodeAt(0);
//     if (t[a] !== 255) throw new TypeError(o + " is ambiguous");
//     t[a] = i;
//   }
//   var c = r.length,
//     u = r.charAt(0),
//     l = Math.log(c) / Math.log(256),
//     h = Math.log(256) / Math.log(c);
//   function f(g) {
//     if (
//       (g instanceof Uint8Array ||
//         (ArrayBuffer.isView(g)
//           ? (g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength))
//           : Array.isArray(g) && (g = Uint8Array.from(g))),
//       !(g instanceof Uint8Array))
//     )
//       throw new TypeError("Expected Uint8Array");
//     if (g.length === 0) return "";
//     for (var m = 0, b = 0, _ = 0, w = g.length; _ !== w && g[_] === 0; )
//       _++, m++;
//     for (var E = ((w - _) * h + 1) >>> 0, v = new Uint8Array(E); _ !== w; ) {
//       for (
//         var S = g[_], I = 0, T = E - 1;
//         (S !== 0 || I < b) && T !== -1;
//         T--, I++
//       )
//         (S += (256 * v[T]) >>> 0), (v[T] = S % c >>> 0), (S = (S / c) >>> 0);
//       if (S !== 0) throw new Error("Non-zero carry");
//       (b = I), _++;
//     }
//     for (var A = E - b; A !== E && v[A] === 0; ) A++;
//     for (var C = u.repeat(m); A < E; ++A) C += r.charAt(v[A]);
//     return C;
//   }
//   function d(g) {
//     if (typeof g != "string") throw new TypeError("Expected String");
//     if (g.length === 0) return new Uint8Array();
//     var m = 0;
//     if (g[m] !== " ") {
//       for (var b = 0, _ = 0; g[m] === u; ) b++, m++;
//       for (
//         var w = ((g.length - m) * l + 1) >>> 0, E = new Uint8Array(w);
//         g[m];

//       ) {
//         var v = t[g.charCodeAt(m)];
//         if (v === 255) return;
//         for (var S = 0, I = w - 1; (v !== 0 || S < _) && I !== -1; I--, S++)
//           (v += (c * E[I]) >>> 0),
//             (E[I] = v % 256 >>> 0),
//             (v = (v / 256) >>> 0);
//         if (v !== 0) throw new Error("Non-zero carry");
//         (_ = S), m++;
//       }
//       if (g[m] !== " ") {
//         for (var T = w - _; T !== w && E[T] === 0; ) T++;
//         for (var A = new Uint8Array(b + (w - T)), C = b; T !== w; )
//           A[C++] = E[T++];
//         return A;
//       }
//     }
//   }
//   function p(g) {
//     var m = d(g);
//     if (m) return m;
//     throw new Error(`Non-${e} character`);
//   }
//   return {
//     encode: f,
//     decodeUnsafe: d,
//     decode: p,
//   };
// }
// var src = base$1,
//   _brrp__multiformats_scope_baseX = src;
// class Encoder {
//   constructor(e, t, n) {
//     y(this, "name");
//     y(this, "prefix");
//     y(this, "baseEncode");
//     (this.name = e), (this.prefix = t), (this.baseEncode = n);
//   }
//   encode(e) {
//     if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
//     throw Error("Unknown type, must be binary type");
//   }
// }
// let Decoder$1 = class {
//   constructor(e, t, n) {
//     y(this, "name");
//     y(this, "prefix");
//     y(this, "baseDecode");
//     y(this, "prefixCodePoint");
//     if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
//       throw new Error("Invalid prefix character");
//     (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = n);
//   }
//   decode(e) {
//     if (typeof e == "string") {
//       if (e.codePointAt(0) !== this.prefixCodePoint)
//         throw Error(
//           `Unable to decode multibase string ${JSON.stringify(e)}, ${
//             this.name
//           } decoder only supports inputs prefixed with ${this.prefix}`
//         );
//       return this.baseDecode(e.slice(this.prefix.length));
//     } else throw Error("Can only multibase decode strings");
//   }
//   or(e) {
//     return or$2(this, e);
//   }
// };
// class ComposedDecoder {
//   constructor(e) {
//     y(this, "decoders");
//     this.decoders = e;
//   }
//   or(e) {
//     return or$2(this, e);
//   }
//   decode(e) {
//     const t = e[0],
//       n = this.decoders[t];
//     if (n != null) return n.decode(e);
//     throw RangeError(
//       `Unable to decode multibase string ${JSON.stringify(
//         e
//       )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
//     );
//   }
// }
// function or$2(r, e) {
//   return new ComposedDecoder({
//     ...(r.decoders ?? {
//       [r.prefix]: r,
//     }),
//     ...(e.decoders ?? {
//       [e.prefix]: e,
//     }),
//   });
// }
// class Codec {
//   constructor(e, t, n, i) {
//     y(this, "name");
//     y(this, "prefix");
//     y(this, "baseEncode");
//     y(this, "baseDecode");
//     y(this, "encoder");
//     y(this, "decoder");
//     (this.name = e),
//       (this.prefix = t),
//       (this.baseEncode = n),
//       (this.baseDecode = i),
//       (this.encoder = new Encoder(e, t, n)),
//       (this.decoder = new Decoder$1(e, t, i));
//   }
//   encode(e) {
//     return this.encoder.encode(e);
//   }
//   decode(e) {
//     return this.decoder.decode(e);
//   }
// }
// function from$1({ name: r, prefix: e, encode: t, decode: n }) {
//   return new Codec(r, e, t, n);
// }
// function baseX({ name: r, prefix: e, alphabet: t }) {
//   const { encode: n, decode: i } = _brrp__multiformats_scope_baseX(t, r);
//   return from$1({
//     prefix: e,
//     name: r,
//     encode: n,
//     decode: (o) => coerce(i(o)),
//   });
// }
// function decode$6(r, e, t, n) {
//   const i = {};
//   for (let h = 0; h < e.length; ++h) i[e[h]] = h;
//   let o = r.length;
//   for (; r[o - 1] === "="; ) --o;
//   const a = new Uint8Array(((o * t) / 8) | 0);
//   let c = 0,
//     u = 0,
//     l = 0;
//   for (let h = 0; h < o; ++h) {
//     const f = i[r[h]];
//     if (f === void 0) throw new SyntaxError(`Non-${n} character`);
//     (u = (u << t) | f),
//       (c += t),
//       c >= 8 && ((c -= 8), (a[l++] = 255 & (u >> c)));
//   }
//   if (c >= t || 255 & (u << (8 - c)))
//     throw new SyntaxError("Unexpected end of data");
//   return a;
// }
// function encode$5(r, e, t) {
//   const n = e[e.length - 1] === "=",
//     i = (1 << t) - 1;
//   let o = "",
//     a = 0,
//     c = 0;
//   for (let u = 0; u < r.length; ++u)
//     for (c = (c << 8) | r[u], a += 8; a > t; ) (a -= t), (o += e[i & (c >> a)]);
//   if ((a !== 0 && (o += e[i & (c << (t - a))]), n))
//     for (; (o.length * t) & 7; ) o += "=";
//   return o;
// }
// function rfc4648({ name: r, prefix: e, bitsPerChar: t, alphabet: n }) {
//   return from$1({
//     prefix: e,
//     name: r,
//     encode(i) {
//       return encode$5(i, n, t);
//     },
//     decode(i) {
//       return decode$6(i, n, t, r);
//     },
//   });
// }
// const base58btc = baseX({
//     name: "base58btc",
//     prefix: "z",
//     alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
//   }),
//   base58flickr = baseX({
//     name: "base58flickr",
//     prefix: "Z",
//     alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
//   }),
//   base58 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base58btc,
//         base58flickr,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   );
// var encode_1 = encode$4,
//   MSB$1 = 128,
//   REST$1 = 127,
//   MSBALL = ~REST$1,
//   INT = Math.pow(2, 31);
// function encode$4(r, e, t) {
//   (e = e || []), (t = t || 0);
//   for (var n = t; r >= INT; ) (e[t++] = (r & 255) | MSB$1), (r /= 128);
//   for (; r & MSBALL; ) (e[t++] = (r & 255) | MSB$1), (r >>>= 7);
//   return (e[t] = r | 0), (encode$4.bytes = t - n + 1), e;
// }
// var decode$5 = read$2,
//   MSB$1$1 = 128,
//   REST$1$1 = 127;
// function read$2(r, n) {
//   var t = 0,
//     n = n || 0,
//     i = 0,
//     o = n,
//     a,
//     c = r.length;
//   do {
//     if (o >= c)
//       throw ((read$2.bytes = 0), new RangeError("Could not decode varint"));
//     (a = r[o++]),
//       (t += i < 28 ? (a & REST$1$1) << i : (a & REST$1$1) * Math.pow(2, i)),
//       (i += 7);
//   } while (a >= MSB$1$1);
//   return (read$2.bytes = o - n), t;
// }
// var N1$1 = Math.pow(2, 7),
//   N2$1 = Math.pow(2, 14),
//   N3$1 = Math.pow(2, 21),
//   N4$1 = Math.pow(2, 28),
//   N5$1 = Math.pow(2, 35),
//   N6$1 = Math.pow(2, 42),
//   N7$1 = Math.pow(2, 49),
//   N8 = Math.pow(2, 56),
//   N9 = Math.pow(2, 63),
//   length$1 = function (r) {
//     return r < N1$1
//       ? 1
//       : r < N2$1
//       ? 2
//       : r < N3$1
//       ? 3
//       : r < N4$1
//       ? 4
//       : r < N5$1
//       ? 5
//       : r < N6$1
//       ? 6
//       : r < N7$1
//       ? 7
//       : r < N8
//       ? 8
//       : r < N9
//       ? 9
//       : 10;
//   },
//   varint = {
//     encode: encode_1,
//     decode: decode$5,
//     encodingLength: length$1,
//   },
//   _brrp_varint = varint;
// function decode$4(r, e = 0) {
//   return [_brrp_varint.decode(r, e), _brrp_varint.decode.bytes];
// }
// function encodeTo(r, e, t = 0) {
//   return _brrp_varint.encode(r, e, t), e;
// }
// function encodingLength$1(r) {
//   return _brrp_varint.encodingLength(r);
// }
// function create$4(r, e) {
//   const t = e.byteLength,
//     n = encodingLength$1(r),
//     i = n + encodingLength$1(t),
//     o = new Uint8Array(i + t);
//   return (
//     encodeTo(r, o, 0), encodeTo(t, o, n), o.set(e, i), new Digest(r, t, e, o)
//   );
// }
// function decode$3(r) {
//   const e = coerce(r),
//     [t, n] = decode$4(e),
//     [i, o] = decode$4(e.subarray(n)),
//     a = e.subarray(n + o);
//   if (a.byteLength !== i) throw new Error("Incorrect length");
//   return new Digest(t, i, a, e);
// }
// function equals$1(r, e) {
//   if (r === e) return !0;
//   {
//     const t = e;
//     return (
//       r.code === t.code &&
//       r.size === t.size &&
//       t.bytes instanceof Uint8Array &&
//       equals$2(r.bytes, t.bytes)
//     );
//   }
// }
// class Digest {
//   constructor(e, t, n, i) {
//     y(this, "code");
//     y(this, "size");
//     y(this, "digest");
//     y(this, "bytes");
//     (this.code = e), (this.size = t), (this.digest = n), (this.bytes = i);
//   }
// }
// const code = 0,
//   name$1 = "identity",
//   encode$3 = coerce;
// function digest(r) {
//   return create$4(code, encode$3(r));
// }
// const identity$1 = {
//   code,
//   name: name$1,
//   encode: encode$3,
//   digest,
// };
// function from({ name: r, code: e, encode: t }) {
//   return new Hasher(r, e, t);
// }
// class Hasher {
//   constructor(e, t, n) {
//     y(this, "name");
//     y(this, "code");
//     y(this, "encode");
//     (this.name = e), (this.code = t), (this.encode = n);
//   }
//   digest(e) {
//     if (e instanceof Uint8Array) {
//       const t = this.encode(e);
//       return t instanceof Uint8Array
//         ? create$4(this.code, t)
//         : t.then((n) => create$4(this.code, n));
//     } else throw Error("Unknown type, must be binary type");
//   }
// }
// function sha(r) {
//   return async (e) => new Uint8Array(await crypto.subtle.digest(r, e));
// }
// const sha256$2 = from({
//   name: "sha2-256",
//   code: 18,
//   encode: sha("SHA-256"),
// });
// function equals(r, e) {
//   if (r === e) return !0;
//   if (r.byteLength !== e.byteLength) return !1;
//   for (let t = 0; t < r.byteLength; t++) if (r[t] !== e[t]) return !1;
//   return !0;
// }
// function alloc$1(r = 0) {
//   return new Uint8Array(r);
// }
// function allocUnsafe(r = 0) {
//   return new Uint8Array(r);
// }
// function asUint8Array(r) {
//   return r;
// }
// function concat$1(r, e) {
//   e == null && (e = r.reduce((i, o) => i + o.length, 0));
//   const t = allocUnsafe(e);
//   let n = 0;
//   for (const i of r) t.set(i, n), (n += i.length);
//   return t;
// }
// const base10 = baseX({
//     prefix: "9",
//     name: "base10",
//     alphabet: "0123456789",
//   }),
//   base10$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base10,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   base16 = rfc4648({
//     prefix: "f",
//     name: "base16",
//     alphabet: "0123456789abcdef",
//     bitsPerChar: 4,
//   }),
//   base16upper = rfc4648({
//     prefix: "F",
//     name: "base16upper",
//     alphabet: "0123456789ABCDEF",
//     bitsPerChar: 4,
//   }),
//   base16$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base16,
//         base16upper,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   base2 = rfc4648({
//     prefix: "0",
//     name: "base2",
//     alphabet: "01",
//     bitsPerChar: 1,
//   }),
//   base2$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base2,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   alphabet = Array.from(
//     "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
//   ),
//   alphabetBytesToChars = alphabet.reduce((r, e, t) => ((r[t] = e), r), []),
//   alphabetCharsToBytes = alphabet.reduce(
//     (r, e, t) => ((r[e.codePointAt(0)] = t), r),
//     []
//   );
// function encode$2(r) {
//   return r.reduce((e, t) => ((e += alphabetBytesToChars[t]), e), "");
// }
// function decode$2(r) {
//   const e = [];
//   for (const t of r) {
//     const n = alphabetCharsToBytes[t.codePointAt(0)];
//     if (n === void 0) throw new Error(`Non-base256emoji character: ${t}`);
//     e.push(n);
//   }
//   return new Uint8Array(e);
// }
// const base256emoji = from$1({
//     prefix: "🚀",
//     name: "base256emoji",
//     encode: encode$2,
//     decode: decode$2,
//   }),
//   base256emoji$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base256emoji,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   base32 = rfc4648({
//     prefix: "b",
//     name: "base32",
//     alphabet: "abcdefghijklmnopqrstuvwxyz234567",
//     bitsPerChar: 5,
//   }),
//   base32upper = rfc4648({
//     prefix: "B",
//     name: "base32upper",
//     alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
//     bitsPerChar: 5,
//   }),
//   base32pad = rfc4648({
//     prefix: "c",
//     name: "base32pad",
//     alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
//     bitsPerChar: 5,
//   }),
//   base32padupper = rfc4648({
//     prefix: "C",
//     name: "base32padupper",
//     alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
//     bitsPerChar: 5,
//   }),
//   base32hex = rfc4648({
//     prefix: "v",
//     name: "base32hex",
//     alphabet: "0123456789abcdefghijklmnopqrstuv",
//     bitsPerChar: 5,
//   }),
//   base32hexupper = rfc4648({
//     prefix: "V",
//     name: "base32hexupper",
//     alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
//     bitsPerChar: 5,
//   }),
//   base32hexpad = rfc4648({
//     prefix: "t",
//     name: "base32hexpad",
//     alphabet: "0123456789abcdefghijklmnopqrstuv=",
//     bitsPerChar: 5,
//   }),
//   base32hexpadupper = rfc4648({
//     prefix: "T",
//     name: "base32hexpadupper",
//     alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
//     bitsPerChar: 5,
//   }),
//   base32z = rfc4648({
//     prefix: "h",
//     name: "base32z",
//     alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
//     bitsPerChar: 5,
//   }),
//   base32$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base32,
//         base32hex,
//         base32hexpad,
//         base32hexpadupper,
//         base32hexupper,
//         base32pad,
//         base32padupper,
//         base32upper,
//         base32z,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   base36 = baseX({
//     prefix: "k",
//     name: "base36",
//     alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
//   }),
//   base36upper = baseX({
//     prefix: "K",
//     name: "base36upper",
//     alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   }),
//   base36$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base36,
//         base36upper,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   base64$2 = rfc4648({
//     prefix: "m",
//     name: "base64",
//     alphabet:
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
//     bitsPerChar: 6,
//   }),
//   base64pad = rfc4648({
//     prefix: "M",
//     name: "base64pad",
//     alphabet:
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
//     bitsPerChar: 6,
//   }),
//   base64url = rfc4648({
//     prefix: "u",
//     name: "base64url",
//     alphabet:
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
//     bitsPerChar: 6,
//   }),
//   base64urlpad = rfc4648({
//     prefix: "U",
//     name: "base64urlpad",
//     alphabet:
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
//     bitsPerChar: 6,
//   }),
//   base64$3 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base64: base64$2,
//         base64pad,
//         base64url,
//         base64urlpad,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   base8 = rfc4648({
//     prefix: "7",
//     name: "base8",
//     alphabet: "01234567",
//     bitsPerChar: 3,
//   }),
//   base8$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         base8,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   identity = from$1({
//     prefix: "\0",
//     name: "identity",
//     encode: (r) => toString$4(r),
//     decode: (r) => fromString$1(r),
//   }),
//   identityBase = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         identity,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   );

// function format$2(r, e) {
//   const { bytes: t, version: n } = r;
//   switch (n) {
//     case 0:
//       return toStringV0(t, baseCache(r), e ?? base58btc.encoder);
//     default:
//       return toStringV1(t, baseCache(r), e ?? base32.encoder);
//   }
// }
// const cache$1 = new WeakMap();
// function baseCache(r) {
//   const e = cache$1.get(r);
//   if (e == null) {
//     const t = new Map();
//     return cache$1.set(r, t), t;
//   }
//   return e;
// }
// var Gt;
// class CID {
//   constructor(e, t, n, i) {
//     y(this, "code");
//     y(this, "version");
//     y(this, "multihash");
//     y(this, "bytes");
//     y(this, "/");
//     y(this, Gt, "CID");
//     (this.code = t),
//       (this.version = e),
//       (this.multihash = n),
//       (this.bytes = i),
//       (this["/"] = i);
//   }
//   get asCID() {
//     return this;
//   }
//   get byteOffset() {
//     return this.bytes.byteOffset;
//   }
//   get byteLength() {
//     return this.bytes.byteLength;
//   }
//   toV0() {
//     switch (this.version) {
//       case 0:
//         return this;
//       case 1: {
//         const { code: e, multihash: t } = this;
//         if (e !== DAG_PB_CODE)
//           throw new Error("Cannot convert a non dag-pb CID to CIDv0");
//         if (t.code !== SHA_256_CODE)
//           throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
//         return CID.createV0(t);
//       }
//       default:
//         throw Error(
//           `Can not convert CID version ${this.version} to version 0. This is a bug please report`
//         );
//     }
//   }
//   toV1() {
//     switch (this.version) {
//       case 0: {
//         const { code: e, digest: t } = this.multihash,
//           n = create$4(e, t);
//         return CID.createV1(this.code, n);
//       }
//       case 1:
//         return this;
//       default:
//         throw Error(
//           `Can not convert CID version ${this.version} to version 1. This is a bug please report`
//         );
//     }
//   }
//   equals(e) {
//     return CID.equals(this, e);
//   }
//   static equals(e, t) {
//     const n = t;
//     return (
//       n != null &&
//       e.code === n.code &&
//       e.version === n.version &&
//       equals$1(e.multihash, n.multihash)
//     );
//   }
//   toString(e) {
//     return format$2(this, e);
//   }
//   toJSON() {
//     return {
//       "/": format$2(this),
//     };
//   }
//   link() {
//     return this;
//   }
//   [((Gt = Symbol.toStringTag), Symbol.for("nodejs.util.inspect.custom"))]() {
//     return `CID(${this.toString()})`;
//   }
//   static asCID(e) {
//     if (e == null) return null;
//     const t = e;
//     if (t instanceof CID) return t;
//     if ((t["/"] != null && t["/"] === t.bytes) || t.asCID === t) {
//       const { version: n, code: i, multihash: o, bytes: a } = t;
//       return new CID(n, i, o, a ?? encodeCID(n, i, o.bytes));
//     } else if (t[cidSymbol] === !0) {
//       const { version: n, multihash: i, code: o } = t,
//         a = decode$3(i);
//       return CID.create(n, o, a);
//     } else return null;
//   }
//   static create(e, t, n) {
//     if (typeof t != "number")
//       throw new Error("String codecs are no longer supported");
//     if (!(n.bytes instanceof Uint8Array)) throw new Error("Invalid digest");
//     switch (e) {
//       case 0: {
//         if (t !== DAG_PB_CODE)
//           throw new Error(
//             `Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`
//           );
//         return new CID(e, t, n, n.bytes);
//       }
//       case 1: {
//         const i = encodeCID(e, t, n.bytes);
//         return new CID(e, t, n, i);
//       }
//       default:
//         throw new Error("Invalid version");
//     }
//   }
//   static createV0(e) {
//     return CID.create(0, DAG_PB_CODE, e);
//   }
//   static createV1(e, t) {
//     return CID.create(1, e, t);
//   }
//   static decode(e) {
//     const [t, n] = CID.decodeFirst(e);
//     if (n.length !== 0) throw new Error("Incorrect length");
//     return t;
//   }
//   static decodeFirst(e) {
//     const t = CID.inspectBytes(e),
//       n = t.size - t.multihashSize,
//       i = coerce(e.subarray(n, n + t.multihashSize));
//     if (i.byteLength !== t.multihashSize) throw new Error("Incorrect length");
//     const o = i.subarray(t.multihashSize - t.digestSize),
//       a = new Digest(t.multihashCode, t.digestSize, o, i);
//     return [
//       t.version === 0 ? CID.createV0(a) : CID.createV1(t.codec, a),
//       e.subarray(t.size),
//     ];
//   }
//   static inspectBytes(e) {
//     let t = 0;
//     const n = () => {
//       const [f, d] = decode$4(e.subarray(t));
//       return (t += d), f;
//     };
//     let i = n(),
//       o = DAG_PB_CODE;
//     if ((i === 18 ? ((i = 0), (t = 0)) : (o = n()), i !== 0 && i !== 1))
//       throw new RangeError(`Invalid CID version ${i}`);
//     const a = t,
//       c = n(),
//       u = n(),
//       l = t + u,
//       h = l - a;
//     return {
//       version: i,
//       codec: o,
//       multihashCode: c,
//       digestSize: u,
//       multihashSize: h,
//       size: l,
//     };
//   }
//   static parse(e, t) {
//     const [n, i] = parseCIDtoBytes(e, t),
//       o = CID.decode(i);
//     if (o.version === 0 && e[0] !== "Q")
//       throw Error("Version 0 CID string must not include multibase prefix");
//     return baseCache(o).set(n, e), o;
//   }
// }
// function parseCIDtoBytes(r, e) {
//   switch (r[0]) {
//     case "Q": {
//       const t = e ?? base58btc;
//       return [base58btc.prefix, t.decode(`${base58btc.prefix}${r}`)];
//     }
//     case base58btc.prefix: {
//       const t = e ?? base58btc;
//       return [base58btc.prefix, t.decode(r)];
//     }
//     case base32.prefix: {
//       const t = e ?? base32;
//       return [base32.prefix, t.decode(r)];
//     }
//     default: {
//       if (e == null)
//         throw Error(
//           "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
//         );
//       return [r[0], e.decode(r)];
//     }
//   }
// }
// function toStringV0(r, e, t) {
//   const { prefix: n } = t;
//   if (n !== base58btc.prefix)
//     throw Error(`Cannot string encode V0 in ${t.name} encoding`);
//   const i = e.get(n);
//   if (i == null) {
//     const o = t.encode(r).slice(1);
//     return e.set(n, o), o;
//   } else return i;
// }
// function toStringV1(r, e, t) {
//   const { prefix: n } = t,
//     i = e.get(n);
//   if (i == null) {
//     const o = t.encode(r);
//     return e.set(n, o), o;
//   } else return i;
// }
// const DAG_PB_CODE = 112,
//   SHA_256_CODE = 18;
// function encodeCID(r, e, t) {
//   const n = encodingLength$1(r),
//     i = n + encodingLength$1(e),
//     o = new Uint8Array(i + t.byteLength);
//   return encodeTo(r, o, 0), encodeTo(e, o, n), o.set(t, i), o;
// }
// const cidSymbol = Symbol.for("@ipld/js-cid/CID"),
//   bases = {
//     ...identityBase,
//     ...base2$1,
//     ...base8$1,
//     ...base10$1,
//     ...base16$1,
//     ...base32$1,
//     ...base36$1,
//     ...base58,
//     ...base64$3,
//     ...base256emoji$1,
//   };
// function createCodec$1(r, e, t, n) {
//   return {
//     name: r,
//     prefix: e,
//     encoder: {
//       name: r,
//       prefix: e,
//       encode: t,
//     },
//     decoder: {
//       decode: n,
//     },
//   };
// }
// const string$1 = createCodec$1(
//     "utf8",
//     "u",
//     (r) => "u" + new TextDecoder("utf8").decode(r),
//     (r) => new TextEncoder().encode(r.substring(1))
//   ),
//   ascii = createCodec$1(
//     "ascii",
//     "a",
//     (r) => {
//       let e = "a";
//       for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
//       return e;
//     },
//     (r) => {
//       r = r.substring(1);
//       const e = allocUnsafe(r.length);
//       for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
//       return e;
//     }
//   ),
//   BASES = {
//     utf8: string$1,
//     "utf-8": string$1,
//     hex: bases.base16,
//     latin1: ascii,
//     ascii,
//     binary: ascii,
//     ...bases,
//   };
// function fromString(r, e = "utf8") {
//   const t = BASES[e];
//   if (t == null) throw new Error(`Unsupported encoding "${e}"`);
//   return t.decoder.decode(`${t.prefix}${r}`);
// }
// function isPromise$5(r) {
//   return r == null
//     ? !1
//     : typeof r.then == "function" &&
//         typeof r.catch == "function" &&
//         typeof r.finally == "function";
// }
// function number$2(r) {
//   if (!Number.isSafeInteger(r) || r < 0)
//     throw new Error(`positive integer expected, not ${r}`);
// }
// function isBytes$3(r) {
//   return (
//     r instanceof Uint8Array ||
//     (r != null && typeof r == "object" && r.constructor.name === "Uint8Array")
//   );
// }
// function bytes$1(r, ...e) {
//   if (!isBytes$3(r)) throw new Error("Uint8Array expected");
//   if (e.length > 0 && !e.includes(r.length))
//     throw new Error(
//       `Uint8Array expected of length ${e}, not of length=${r.length}`
//     );
// }
// function hash$1(r) {
//   if (typeof r != "function" || typeof r.create != "function")
//     throw new Error("Hash should be wrapped by utils.wrapConstructor");
//   number$2(r.outputLen), number$2(r.blockLen);
// }
// function exists$1(r, e = !0) {
//   if (r.destroyed) throw new Error("Hash instance has been destroyed");
//   if (e && r.finished) throw new Error("Hash#digest() has already been called");
// }
// function output$1(r, e) {
//   bytes$1(r);
//   const t = e.outputLen;
//   if (r.length < t)
//     throw new Error(
//       `digestInto() expects output buffer of length at least ${t}`
//     );
// }
// const crypto$2 =
//   typeof globalThis == "object" && "crypto" in globalThis
//     ? globalThis.crypto
//     : void 0;
// /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const createView$1 = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength),
//   rotr = (r, e) => (r << (32 - e)) | (r >>> e);
// new Uint8Array(new Uint32Array([287454020]).buffer)[0];
// const nextTick = async () => {};
// async function asyncLoop(r, e, t) {
//   let n = Date.now();
//   for (let i = 0; i < r; i++) {
//     t(i);
//     const o = Date.now() - n;
//     (o >= 0 && o < e) || (await nextTick(), (n += o));
//   }
// }
// function utf8ToBytes$2(r) {
//   if (typeof r != "string")
//     throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
//   return new Uint8Array(new TextEncoder().encode(r));
// }
// function toBytes$2(r) {
//   return typeof r == "string" && (r = utf8ToBytes$2(r)), bytes$1(r), r;
// }
// function concatBytes$1(...r) {
//   let e = 0;
//   for (let n = 0; n < r.length; n++) {
//     const i = r[n];
//     bytes$1(i), (e += i.length);
//   }
//   const t = new Uint8Array(e);
//   for (let n = 0, i = 0; n < r.length; n++) {
//     const o = r[n];
//     t.set(o, i), (i += o.length);
//   }
//   return t;
// }
// class Hash {
//   clone() {
//     return this._cloneInto();
//   }
// }
// const toStr = {}.toString;
// function checkOpts$1(r, e) {
//   if (e !== void 0 && toStr.call(e) !== "[object Object]")
//     throw new Error("Options should be object or undefined");
//   return Object.assign(r, e);
// }
// function wrapConstructor(r) {
//   const e = (n) => r().update(toBytes$2(n)).digest(),
//     t = r();
//   return (
//     (e.outputLen = t.outputLen),
//     (e.blockLen = t.blockLen),
//     (e.create = () => r()),
//     e
//   );
// }
// function randomBytes$2(r = 32) {
//   if (crypto$2 && typeof crypto$2.getRandomValues == "function")
//     return crypto$2.getRandomValues(new Uint8Array(r));
//   throw new Error("crypto.getRandomValues must be defined");
// }
// function setBigUint64$1(r, e, t, n) {
//   if (typeof r.setBigUint64 == "function") return r.setBigUint64(e, t, n);
//   const i = BigInt(32),
//     o = BigInt(4294967295),
//     a = Number((t >> i) & o),
//     c = Number(t & o),
//     u = n ? 4 : 0,
//     l = n ? 0 : 4;
//   r.setUint32(e + u, a, n), r.setUint32(e + l, c, n);
// }
// const Chi = (r, e, t) => (r & e) ^ (~r & t),
//   Maj = (r, e, t) => (r & e) ^ (r & t) ^ (e & t);
// class HashMD extends Hash {
//   constructor(e, t, n, i) {
//     super(),
//       (this.blockLen = e),
//       (this.outputLen = t),
//       (this.padOffset = n),
//       (this.isLE = i),
//       (this.finished = !1),
//       (this.length = 0),
//       (this.pos = 0),
//       (this.destroyed = !1),
//       (this.buffer = new Uint8Array(e)),
//       (this.view = createView$1(this.buffer));
//   }
//   update(e) {
//     exists$1(this);
//     const { view: t, buffer: n, blockLen: i } = this;
//     e = toBytes$2(e);
//     const o = e.length;
//     for (let a = 0; a < o; ) {
//       const c = Math.min(i - this.pos, o - a);
//       if (c === i) {
//         const u = createView$1(e);
//         for (; i <= o - a; a += i) this.process(u, a);
//         continue;
//       }
//       n.set(e.subarray(a, a + c), this.pos),
//         (this.pos += c),
//         (a += c),
//         this.pos === i && (this.process(t, 0), (this.pos = 0));
//     }
//     return (this.length += e.length), this.roundClean(), this;
//   }
//   digestInto(e) {
//     exists$1(this), output$1(e, this), (this.finished = !0);
//     const { buffer: t, view: n, blockLen: i, isLE: o } = this;
//     let { pos: a } = this;
//     (t[a++] = 128),
//       this.buffer.subarray(a).fill(0),
//       this.padOffset > i - a && (this.process(n, 0), (a = 0));
//     for (let f = a; f < i; f++) t[f] = 0;
//     setBigUint64$1(n, i - 8, BigInt(this.length * 8), o), this.process(n, 0);
//     const c = createView$1(e),
//       u = this.outputLen;
//     if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
//     const l = u / 4,
//       h = this.get();
//     if (l > h.length) throw new Error("_sha2: outputLen bigger than state");
//     for (let f = 0; f < l; f++) c.setUint32(4 * f, h[f], o);
//   }
//   digest() {
//     const { buffer: e, outputLen: t } = this;
//     this.digestInto(e);
//     const n = e.slice(0, t);
//     return this.destroy(), n;
//   }
//   _cloneInto(e) {
//     e || (e = new this.constructor()), e.set(...this.get());
//     const {
//       blockLen: t,
//       buffer: n,
//       length: i,
//       finished: o,
//       destroyed: a,
//       pos: c,
//     } = this;
//     return (
//       (e.length = i),
//       (e.pos = c),
//       (e.finished = o),
//       (e.destroyed = a),
//       i % t && e.buffer.set(n),
//       e
//     );
//   }
// }
// const U32_MASK64 = BigInt(2 ** 32 - 1),
//   _32n = BigInt(32);
// function fromBig(r, e = !1) {
//   return e
//     ? {
//         h: Number(r & U32_MASK64),
//         l: Number((r >> _32n) & U32_MASK64),
//       }
//     : {
//         h: Number((r >> _32n) & U32_MASK64) | 0,
//         l: Number(r & U32_MASK64) | 0,
//       };
// }
// function split(r, e = !1) {
//   let t = new Uint32Array(r.length),
//     n = new Uint32Array(r.length);
//   for (let i = 0; i < r.length; i++) {
//     const { h: o, l: a } = fromBig(r[i], e);
//     [t[i], n[i]] = [o, a];
//   }
//   return [t, n];
// }
// const toBig = (r, e) => (BigInt(r >>> 0) << _32n) | BigInt(e >>> 0),
//   shrSH = (r, e, t) => r >>> t,
//   shrSL = (r, e, t) => (r << (32 - t)) | (e >>> t),
//   rotrSH = (r, e, t) => (r >>> t) | (e << (32 - t)),
//   rotrSL = (r, e, t) => (r << (32 - t)) | (e >>> t),
//   rotrBH = (r, e, t) => (r << (64 - t)) | (e >>> (t - 32)),
//   rotrBL = (r, e, t) => (r >>> (t - 32)) | (e << (64 - t)),
//   rotr32H = (r, e) => e,
//   rotr32L = (r, e) => r,
//   rotlSH = (r, e, t) => (r << t) | (e >>> (32 - t)),
//   rotlSL = (r, e, t) => (e << t) | (r >>> (32 - t)),
//   rotlBH = (r, e, t) => (e << (t - 32)) | (r >>> (64 - t)),
//   rotlBL = (r, e, t) => (r << (t - 32)) | (e >>> (64 - t));
// function add(r, e, t, n) {
//   const i = (e >>> 0) + (n >>> 0);
//   return {
//     h: (r + t + ((i / 2 ** 32) | 0)) | 0,
//     l: i | 0,
//   };
// }
// const add3L = (r, e, t) => (r >>> 0) + (e >>> 0) + (t >>> 0),
//   add3H = (r, e, t, n) => (e + t + n + ((r / 2 ** 32) | 0)) | 0,
//   add4L = (r, e, t, n) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0),
//   add4H = (r, e, t, n, i) => (e + t + n + i + ((r / 2 ** 32) | 0)) | 0,
//   add5L = (r, e, t, n, i) =>
//     (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0),
//   add5H = (r, e, t, n, i, o) => (e + t + n + i + o + ((r / 2 ** 32) | 0)) | 0,
//   u64 = {
//     fromBig,
//     split,
//     toBig,
//     shrSH,
//     shrSL,
//     rotrSH,
//     rotrSL,
//     rotrBH,
//     rotrBL,
//     rotr32H,
//     rotr32L,
//     rotlSH,
//     rotlSL,
//     rotlBH,
//     rotlBL,
//     add,
//     add3L,
//     add3H,
//     add4L,
//     add4H,
//     add5H,
//     add5L,
//   },
//   u64$1 = u64,
//   [SHA512_Kh, SHA512_Kl] = (() =>
//     u64$1.split(
//       [
//         "0x428a2f98d728ae22",
//         "0x7137449123ef65cd",
//         "0xb5c0fbcfec4d3b2f",
//         "0xe9b5dba58189dbbc",
//         "0x3956c25bf348b538",
//         "0x59f111f1b605d019",
//         "0x923f82a4af194f9b",
//         "0xab1c5ed5da6d8118",
//         "0xd807aa98a3030242",
//         "0x12835b0145706fbe",
//         "0x243185be4ee4b28c",
//         "0x550c7dc3d5ffb4e2",
//         "0x72be5d74f27b896f",
//         "0x80deb1fe3b1696b1",
//         "0x9bdc06a725c71235",
//         "0xc19bf174cf692694",
//         "0xe49b69c19ef14ad2",
//         "0xefbe4786384f25e3",
//         "0x0fc19dc68b8cd5b5",
//         "0x240ca1cc77ac9c65",
//         "0x2de92c6f592b0275",
//         "0x4a7484aa6ea6e483",
//         "0x5cb0a9dcbd41fbd4",
//         "0x76f988da831153b5",
//         "0x983e5152ee66dfab",
//         "0xa831c66d2db43210",
//         "0xb00327c898fb213f",
//         "0xbf597fc7beef0ee4",
//         "0xc6e00bf33da88fc2",
//         "0xd5a79147930aa725",
//         "0x06ca6351e003826f",
//         "0x142929670a0e6e70",
//         "0x27b70a8546d22ffc",
//         "0x2e1b21385c26c926",
//         "0x4d2c6dfc5ac42aed",
//         "0x53380d139d95b3df",
//         "0x650a73548baf63de",
//         "0x766a0abb3c77b2a8",
//         "0x81c2c92e47edaee6",
//         "0x92722c851482353b",
//         "0xa2bfe8a14cf10364",
//         "0xa81a664bbc423001",
//         "0xc24b8b70d0f89791",
//         "0xc76c51a30654be30",
//         "0xd192e819d6ef5218",
//         "0xd69906245565a910",
//         "0xf40e35855771202a",
//         "0x106aa07032bbd1b8",
//         "0x19a4c116b8d2d0c8",
//         "0x1e376c085141ab53",
//         "0x2748774cdf8eeb99",
//         "0x34b0bcb5e19b48a8",
//         "0x391c0cb3c5c95a63",
//         "0x4ed8aa4ae3418acb",
//         "0x5b9cca4f7763e373",
//         "0x682e6ff3d6b2b8a3",
//         "0x748f82ee5defb2fc",
//         "0x78a5636f43172f60",
//         "0x84c87814a1f0ab72",
//         "0x8cc702081a6439ec",
//         "0x90befffa23631e28",
//         "0xa4506cebde82bde9",
//         "0xbef9a3f7b2c67915",
//         "0xc67178f2e372532b",
//         "0xca273eceea26619c",
//         "0xd186b8c721c0c207",
//         "0xeada7dd6cde0eb1e",
//         "0xf57d4f7fee6ed178",
//         "0x06f067aa72176fba",
//         "0x0a637dc5a2c898a6",
//         "0x113f9804bef90dae",
//         "0x1b710b35131c471b",
//         "0x28db77f523047d84",
//         "0x32caab7b40c72493",
//         "0x3c9ebe0a15c9bebc",
//         "0x431d67c49c100d4c",
//         "0x4cc5d4becb3e42b6",
//         "0x597f299cfc657e2a",
//         "0x5fcb6fab3ad6faec",
//         "0x6c44198c4a475817",
//       ].map((r) => BigInt(r))
//     ))(),
//   SHA512_W_H = new Uint32Array(80),
//   SHA512_W_L = new Uint32Array(80);
// class SHA512 extends HashMD {
//   constructor() {
//     super(128, 64, 16, !1),
//       (this.Ah = 1779033703),
//       (this.Al = -205731576),
//       (this.Bh = -1150833019),
//       (this.Bl = -2067093701),
//       (this.Ch = 1013904242),
//       (this.Cl = -23791573),
//       (this.Dh = -1521486534),
//       (this.Dl = 1595750129),
//       (this.Eh = 1359893119),
//       (this.El = -1377402159),
//       (this.Fh = -1694144372),
//       (this.Fl = 725511199),
//       (this.Gh = 528734635),
//       (this.Gl = -79577749),
//       (this.Hh = 1541459225),
//       (this.Hl = 327033209);
//   }
//   get() {
//     const {
//       Ah: e,
//       Al: t,
//       Bh: n,
//       Bl: i,
//       Ch: o,
//       Cl: a,
//       Dh: c,
//       Dl: u,
//       Eh: l,
//       El: h,
//       Fh: f,
//       Fl: d,
//       Gh: p,
//       Gl: g,
//       Hh: m,
//       Hl: b,
//     } = this;
//     return [e, t, n, i, o, a, c, u, l, h, f, d, p, g, m, b];
//   }
//   set(e, t, n, i, o, a, c, u, l, h, f, d, p, g, m, b) {
//     (this.Ah = e | 0),
//       (this.Al = t | 0),
//       (this.Bh = n | 0),
//       (this.Bl = i | 0),
//       (this.Ch = o | 0),
//       (this.Cl = a | 0),
//       (this.Dh = c | 0),
//       (this.Dl = u | 0),
//       (this.Eh = l | 0),
//       (this.El = h | 0),
//       (this.Fh = f | 0),
//       (this.Fl = d | 0),
//       (this.Gh = p | 0),
//       (this.Gl = g | 0),
//       (this.Hh = m | 0),
//       (this.Hl = b | 0);
//   }
//   process(e, t) {
//     for (let E = 0; E < 16; E++, t += 4)
//       (SHA512_W_H[E] = e.getUint32(t)), (SHA512_W_L[E] = e.getUint32((t += 4)));
//     for (let E = 16; E < 80; E++) {
//       const v = SHA512_W_H[E - 15] | 0,
//         S = SHA512_W_L[E - 15] | 0,
//         I =
//           u64$1.rotrSH(v, S, 1) ^ u64$1.rotrSH(v, S, 8) ^ u64$1.shrSH(v, S, 7),
//         T =
//           u64$1.rotrSL(v, S, 1) ^ u64$1.rotrSL(v, S, 8) ^ u64$1.shrSL(v, S, 7),
//         A = SHA512_W_H[E - 2] | 0,
//         C = SHA512_W_L[E - 2] | 0,
//         x =
//           u64$1.rotrSH(A, C, 19) ^
//           u64$1.rotrBH(A, C, 61) ^
//           u64$1.shrSH(A, C, 6),
//         $ =
//           u64$1.rotrSL(A, C, 19) ^
//           u64$1.rotrBL(A, C, 61) ^
//           u64$1.shrSL(A, C, 6),
//         O = u64$1.add4L(T, $, SHA512_W_L[E - 7], SHA512_W_L[E - 16]),
//         M = u64$1.add4H(O, I, x, SHA512_W_H[E - 7], SHA512_W_H[E - 16]);
//       (SHA512_W_H[E] = M | 0), (SHA512_W_L[E] = O | 0);
//     }
//     let {
//       Ah: n,
//       Al: i,
//       Bh: o,
//       Bl: a,
//       Ch: c,
//       Cl: u,
//       Dh: l,
//       Dl: h,
//       Eh: f,
//       El: d,
//       Fh: p,
//       Fl: g,
//       Gh: m,
//       Gl: b,
//       Hh: _,
//       Hl: w,
//     } = this;
//     for (let E = 0; E < 80; E++) {
//       const v =
//           u64$1.rotrSH(f, d, 14) ^
//           u64$1.rotrSH(f, d, 18) ^
//           u64$1.rotrBH(f, d, 41),
//         S =
//           u64$1.rotrSL(f, d, 14) ^
//           u64$1.rotrSL(f, d, 18) ^
//           u64$1.rotrBL(f, d, 41),
//         I = (f & p) ^ (~f & m),
//         T = (d & g) ^ (~d & b),
//         A = u64$1.add5L(w, S, T, SHA512_Kl[E], SHA512_W_L[E]),
//         C = u64$1.add5H(A, _, v, I, SHA512_Kh[E], SHA512_W_H[E]),
//         x = A | 0,
//         $ =
//           u64$1.rotrSH(n, i, 28) ^
//           u64$1.rotrBH(n, i, 34) ^
//           u64$1.rotrBH(n, i, 39),
//         O =
//           u64$1.rotrSL(n, i, 28) ^
//           u64$1.rotrBL(n, i, 34) ^
//           u64$1.rotrBL(n, i, 39),
//         M = (n & o) ^ (n & c) ^ (o & c),
//         K = (i & a) ^ (i & u) ^ (a & u);
//       (_ = m | 0),
//         (w = b | 0),
//         (m = p | 0),
//         (b = g | 0),
//         (p = f | 0),
//         (g = d | 0),
//         ({ h: f, l: d } = u64$1.add(l | 0, h | 0, C | 0, x | 0)),
//         (l = c | 0),
//         (h = u | 0),
//         (c = o | 0),
//         (u = a | 0),
//         (o = n | 0),
//         (a = i | 0);
//       const B = u64$1.add3L(x, O, K);
//       (n = u64$1.add3H(B, C, $, M)), (i = B | 0);
//     }
//     ({ h: n, l: i } = u64$1.add(this.Ah | 0, this.Al | 0, n | 0, i | 0)),
//       ({ h: o, l: a } = u64$1.add(this.Bh | 0, this.Bl | 0, o | 0, a | 0)),
//       ({ h: c, l: u } = u64$1.add(this.Ch | 0, this.Cl | 0, c | 0, u | 0)),
//       ({ h: l, l: h } = u64$1.add(this.Dh | 0, this.Dl | 0, l | 0, h | 0)),
//       ({ h: f, l: d } = u64$1.add(this.Eh | 0, this.El | 0, f | 0, d | 0)),
//       ({ h: p, l: g } = u64$1.add(this.Fh | 0, this.Fl | 0, p | 0, g | 0)),
//       ({ h: m, l: b } = u64$1.add(this.Gh | 0, this.Gl | 0, m | 0, b | 0)),
//       ({ h: _, l: w } = u64$1.add(this.Hh | 0, this.Hl | 0, _ | 0, w | 0)),
//       this.set(n, i, o, a, c, u, l, h, f, d, p, g, m, b, _, w);
//   }
//   roundClean() {
//     SHA512_W_H.fill(0), SHA512_W_L.fill(0);
//   }
//   destroy() {
//     this.buffer.fill(0),
//       this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
//   }
// }
// const sha512$1 = wrapConstructor(() => new SHA512());
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const _0n$5 = BigInt(0),
//   _1n$7 = BigInt(1),
//   _2n$4 = BigInt(2);
// function isBytes$2(r) {
//   return (
//     r instanceof Uint8Array ||
//     (r != null && typeof r == "object" && r.constructor.name === "Uint8Array")
//   );
// }
// function abytes(r) {
//   if (!isBytes$2(r)) throw new Error("Uint8Array expected");
// }
// const hexes = Array.from(
//   {
//     length: 256,
//   },
//   (r, e) => e.toString(16).padStart(2, "0")
// );
// function bytesToHex(r) {
//   abytes(r);
//   let e = "";
//   for (let t = 0; t < r.length; t++) e += hexes[r[t]];
//   return e;
// }
// function numberToHexUnpadded(r) {
//   const e = r.toString(16);
//   return e.length & 1 ? `0${e}` : e;
// }
// function hexToNumber(r) {
//   if (typeof r != "string")
//     throw new Error("hex string expected, got " + typeof r);
//   return BigInt(r === "" ? "0" : `0x${r}`);
// }
// const asciis = {
//   _0: 48,
//   _9: 57,
//   _A: 65,
//   _F: 70,
//   _a: 97,
//   _f: 102,
// };
// function asciiToBase16(r) {
//   if (r >= asciis._0 && r <= asciis._9) return r - asciis._0;
//   if (r >= asciis._A && r <= asciis._F) return r - (asciis._A - 10);
//   if (r >= asciis._a && r <= asciis._f) return r - (asciis._a - 10);
// }
// function hexToBytes(r) {
//   if (typeof r != "string")
//     throw new Error("hex string expected, got " + typeof r);
//   const e = r.length,
//     t = e / 2;
//   if (e % 2)
//     throw new Error(
//       "padded hex string expected, got unpadded hex of length " + e
//     );
//   const n = new Uint8Array(t);
//   for (let i = 0, o = 0; i < t; i++, o += 2) {
//     const a = asciiToBase16(r.charCodeAt(o)),
//       c = asciiToBase16(r.charCodeAt(o + 1));
//     if (a === void 0 || c === void 0) {
//       const u = r[o] + r[o + 1];
//       throw new Error(
//         'hex string expected, got non-hex character "' + u + '" at index ' + o
//       );
//     }
//     n[i] = a * 16 + c;
//   }
//   return n;
// }
// function bytesToNumberBE(r) {
//   return hexToNumber(bytesToHex(r));
// }
// function bytesToNumberLE(r) {
//   return abytes(r), hexToNumber(bytesToHex(Uint8Array.from(r).reverse()));
// }
// function numberToBytesBE(r, e) {
//   return hexToBytes(r.toString(16).padStart(e * 2, "0"));
// }
// function numberToBytesLE(r, e) {
//   return numberToBytesBE(r, e).reverse();
// }
// function numberToVarBytesBE(r) {
//   return hexToBytes(numberToHexUnpadded(r));
// }
// function ensureBytes$1(r, e, t) {
//   let n;
//   if (typeof e == "string")
//     try {
//       n = hexToBytes(e);
//     } catch (o) {
//       throw new Error(`${r} must be valid hex string, got "${e}". Cause: ${o}`);
//     }
//   else if (isBytes$2(e)) n = Uint8Array.from(e);
//   else throw new Error(`${r} must be hex string or Uint8Array`);
//   const i = n.length;
//   if (typeof t == "number" && i !== t)
//     throw new Error(`${r} expected ${t} bytes, got ${i}`);
//   return n;
// }
// function concatBytes(...r) {
//   let e = 0;
//   for (let n = 0; n < r.length; n++) {
//     const i = r[n];
//     abytes(i), (e += i.length);
//   }
//   const t = new Uint8Array(e);
//   for (let n = 0, i = 0; n < r.length; n++) {
//     const o = r[n];
//     t.set(o, i), (i += o.length);
//   }
//   return t;
// }
// function equalBytes$1(r, e) {
//   if (r.length !== e.length) return !1;
//   let t = 0;
//   for (let n = 0; n < r.length; n++) t |= r[n] ^ e[n];
//   return t === 0;
// }
// function utf8ToBytes$1(r) {
//   if (typeof r != "string")
//     throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
//   return new Uint8Array(new TextEncoder().encode(r));
// }
// function bitLen(r) {
//   let e;
//   for (e = 0; r > _0n$5; r >>= _1n$7, e += 1);
//   return e;
// }
// function bitGet(r, e) {
//   return (r >> BigInt(e)) & _1n$7;
// }
// function bitSet(r, e, t) {
//   return r | ((t ? _1n$7 : _0n$5) << BigInt(e));
// }
// const bitMask = (r) => (_2n$4 << BigInt(r - 1)) - _1n$7,
//   u8n = (r) => new Uint8Array(r),
//   u8fr = (r) => Uint8Array.from(r);
// function createHmacDrbg(r, e, t) {
//   if (typeof r != "number" || r < 2)
//     throw new Error("hashLen must be a number");
//   if (typeof e != "number" || e < 2)
//     throw new Error("qByteLen must be a number");
//   if (typeof t != "function") throw new Error("hmacFn must be a function");
//   let n = u8n(r),
//     i = u8n(r),
//     o = 0;
//   const a = () => {
//       n.fill(1), i.fill(0), (o = 0);
//     },
//     c = (...f) => t(i, n, ...f),
//     u = (f = u8n()) => {
//       (i = c(u8fr([0]), f)),
//         (n = c()),
//         f.length !== 0 && ((i = c(u8fr([1]), f)), (n = c()));
//     },
//     l = () => {
//       if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
//       let f = 0;
//       const d = [];
//       for (; f < e; ) {
//         n = c();
//         const p = n.slice();
//         d.push(p), (f += n.length);
//       }
//       return concatBytes(...d);
//     };
//   return (f, d) => {
//     a(), u(f);
//     let p;
//     for (; !(p = d(l())); ) u();
//     return a(), p;
//   };
// }
// const validatorFns = {
//   bigint: (r) => typeof r == "bigint",
//   function: (r) => typeof r == "function",
//   boolean: (r) => typeof r == "boolean",
//   string: (r) => typeof r == "string",
//   stringOrUint8Array: (r) => typeof r == "string" || isBytes$2(r),
//   isSafeInteger: (r) => Number.isSafeInteger(r),
//   array: (r) => Array.isArray(r),
//   field: (r, e) => e.Fp.isValid(r),
//   hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen),
// };
// function validateObject(r, e, t = {}) {
//   const n = (i, o, a) => {
//     const c = validatorFns[o];
//     if (typeof c != "function")
//       throw new Error(`Invalid validator "${o}", expected function`);
//     const u = r[i];
//     if (!(a && u === void 0) && !c(u, r))
//       throw new Error(
//         `Invalid param ${String(i)}=${u} (${typeof u}), expected ${o}`
//       );
//   };
//   for (const [i, o] of Object.entries(e)) n(i, o, !1);
//   for (const [i, o] of Object.entries(t)) n(i, o, !0);
//   return r;
// }
// const ut = Object.freeze(
//   Object.defineProperty(
//     {
//       __proto__: null,
//       abytes,
//       bitGet,
//       bitLen,
//       bitMask,
//       bitSet,
//       bytesToHex,
//       bytesToNumberBE,
//       bytesToNumberLE,
//       concatBytes,
//       createHmacDrbg,
//       ensureBytes: ensureBytes$1,
//       equalBytes: equalBytes$1,
//       hexToBytes,
//       hexToNumber,
//       isBytes: isBytes$2,
//       numberToBytesBE,
//       numberToBytesLE,
//       numberToHexUnpadded,
//       numberToVarBytesBE,
//       utf8ToBytes: utf8ToBytes$1,
//       validateObject,
//     },
//     Symbol.toStringTag,
//     {
//       value: "Module",
//     }
//   )
// );
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const _0n$4 = BigInt(0),
//   _1n$6 = BigInt(1),
//   _2n$3 = BigInt(2),
//   _3n$1 = BigInt(3),
//   _4n = BigInt(4),
//   _5n$1 = BigInt(5),
//   _8n$1 = BigInt(8);
// BigInt(9);
// BigInt(16);
// function mod(r, e) {
//   const t = r % e;
//   return t >= _0n$4 ? t : e + t;
// }
// function pow(r, e, t) {
//   if (t <= _0n$4 || e < _0n$4) throw new Error("Expected power/modulo > 0");
//   if (t === _1n$6) return _0n$4;
//   let n = _1n$6;
//   for (; e > _0n$4; )
//     e & _1n$6 && (n = (n * r) % t), (r = (r * r) % t), (e >>= _1n$6);
//   return n;
// }
// function pow2(r, e, t) {
//   let n = r;
//   for (; e-- > _0n$4; ) (n *= n), (n %= t);
//   return n;
// }
// function invert(r, e) {
//   if (r === _0n$4 || e <= _0n$4)
//     throw new Error(`invert: expected positive integers, got n=${r} mod=${e}`);
//   let t = mod(r, e),
//     n = e,
//     i = _0n$4,
//     o = _1n$6;
//   for (; t !== _0n$4; ) {
//     const c = n / t,
//       u = n % t,
//       l = i - o * c;
//     (n = t), (t = u), (i = o), (o = l);
//   }
//   if (n !== _1n$6) throw new Error("invert: does not exist");
//   return mod(i, e);
// }
// function tonelliShanks(r) {
//   const e = (r - _1n$6) / _2n$3;
//   let t, n, i;
//   for (t = r - _1n$6, n = 0; t % _2n$3 === _0n$4; t /= _2n$3, n++);
//   for (i = _2n$3; i < r && pow(i, e, r) !== r - _1n$6; i++);
//   if (n === 1) {
//     const a = (r + _1n$6) / _4n;
//     return function (u, l) {
//       const h = u.pow(l, a);
//       if (!u.eql(u.sqr(h), l)) throw new Error("Cannot find square root");
//       return h;
//     };
//   }
//   const o = (t + _1n$6) / _2n$3;
//   return function (c, u) {
//     if (c.pow(u, e) === c.neg(c.ONE))
//       throw new Error("Cannot find square root");
//     let l = n,
//       h = c.pow(c.mul(c.ONE, i), t),
//       f = c.pow(u, o),
//       d = c.pow(u, t);
//     for (; !c.eql(d, c.ONE); ) {
//       if (c.eql(d, c.ZERO)) return c.ZERO;
//       let p = 1;
//       for (let m = c.sqr(d); p < l && !c.eql(m, c.ONE); p++) m = c.sqr(m);
//       const g = c.pow(h, _1n$6 << BigInt(l - p - 1));
//       (h = c.sqr(g)), (f = c.mul(f, g)), (d = c.mul(d, h)), (l = p);
//     }
//     return f;
//   };
// }
// function FpSqrt(r) {
//   if (r % _4n === _3n$1) {
//     const e = (r + _1n$6) / _4n;
//     return function (n, i) {
//       const o = n.pow(i, e);
//       if (!n.eql(n.sqr(o), i)) throw new Error("Cannot find square root");
//       return o;
//     };
//   }
//   if (r % _8n$1 === _5n$1) {
//     const e = (r - _5n$1) / _8n$1;
//     return function (n, i) {
//       const o = n.mul(i, _2n$3),
//         a = n.pow(o, e),
//         c = n.mul(i, a),
//         u = n.mul(n.mul(c, _2n$3), a),
//         l = n.mul(c, n.sub(u, n.ONE));
//       if (!n.eql(n.sqr(l), i)) throw new Error("Cannot find square root");
//       return l;
//     };
//   }
//   return tonelliShanks(r);
// }
// const isNegativeLE = (r, e) => (mod(r, e) & _1n$6) === _1n$6,
//   FIELD_FIELDS = [
//     "create",
//     "isValid",
//     "is0",
//     "neg",
//     "inv",
//     "sqrt",
//     "sqr",
//     "eql",
//     "add",
//     "sub",
//     "mul",
//     "pow",
//     "div",
//     "addN",
//     "subN",
//     "mulN",
//     "sqrN",
//   ];
// function validateField(r) {
//   const e = {
//       ORDER: "bigint",
//       MASK: "bigint",
//       BYTES: "isSafeInteger",
//       BITS: "isSafeInteger",
//     },
//     t = FIELD_FIELDS.reduce((n, i) => ((n[i] = "function"), n), e);
//   return validateObject(r, t);
// }
// function FpPow(r, e, t) {
//   if (t < _0n$4) throw new Error("Expected power > 0");
//   if (t === _0n$4) return r.ONE;
//   if (t === _1n$6) return e;
//   let n = r.ONE,
//     i = e;
//   for (; t > _0n$4; )
//     t & _1n$6 && (n = r.mul(n, i)), (i = r.sqr(i)), (t >>= _1n$6);
//   return n;
// }
// function FpInvertBatch(r, e) {
//   const t = new Array(e.length),
//     n = e.reduce(
//       (o, a, c) => (r.is0(a) ? o : ((t[c] = o), r.mul(o, a))),
//       r.ONE
//     ),
//     i = r.inv(n);
//   return (
//     e.reduceRight(
//       (o, a, c) => (r.is0(a) ? o : ((t[c] = r.mul(o, t[c])), r.mul(o, a))),
//       i
//     ),
//     t
//   );
// }
// function nLength(r, e) {
//   const t = e !== void 0 ? e : r.toString(2).length,
//     n = Math.ceil(t / 8);
//   return {
//     nBitLength: t,
//     nByteLength: n,
//   };
// }
// function Field(r, e, t = !1, n = {}) {
//   if (r <= _0n$4) throw new Error(`Expected Field ORDER > 0, got ${r}`);
//   const { nBitLength: i, nByteLength: o } = nLength(r, e);
//   if (o > 2048)
//     throw new Error("Field lengths over 2048 bytes are not supported");
//   const a = FpSqrt(r),
//     c = Object.freeze({
//       ORDER: r,
//       BITS: i,
//       BYTES: o,
//       MASK: bitMask(i),
//       ZERO: _0n$4,
//       ONE: _1n$6,
//       create: (u) => mod(u, r),
//       isValid: (u) => {
//         if (typeof u != "bigint")
//           throw new Error(
//             `Invalid field element: expected bigint, got ${typeof u}`
//           );
//         return _0n$4 <= u && u < r;
//       },
//       is0: (u) => u === _0n$4,
//       isOdd: (u) => (u & _1n$6) === _1n$6,
//       neg: (u) => mod(-u, r),
//       eql: (u, l) => u === l,
//       sqr: (u) => mod(u * u, r),
//       add: (u, l) => mod(u + l, r),
//       sub: (u, l) => mod(u - l, r),
//       mul: (u, l) => mod(u * l, r),
//       pow: (u, l) => FpPow(c, u, l),
//       div: (u, l) => mod(u * invert(l, r), r),
//       sqrN: (u) => u * u,
//       addN: (u, l) => u + l,
//       subN: (u, l) => u - l,
//       mulN: (u, l) => u * l,
//       inv: (u) => invert(u, r),
//       sqrt: n.sqrt || ((u) => a(c, u)),
//       invertBatch: (u) => FpInvertBatch(c, u),
//       cmov: (u, l, h) => (h ? l : u),
//       toBytes: (u) => (t ? numberToBytesLE(u, o) : numberToBytesBE(u, o)),
//       fromBytes: (u) => {
//         if (u.length !== o)
//           throw new Error(`Fp.fromBytes: expected ${o}, got ${u.length}`);
//         return t ? bytesToNumberLE(u) : bytesToNumberBE(u);
//       },
//     });
//   return Object.freeze(c);
// }
// function FpSqrtEven(r, e) {
//   if (!r.isOdd) throw new Error("Field doesn't have isOdd");
//   const t = r.sqrt(e);
//   return r.isOdd(t) ? r.neg(t) : t;
// }
// function getFieldBytesLength(r) {
//   if (typeof r != "bigint") throw new Error("field order must be bigint");
//   const e = r.toString(2).length;
//   return Math.ceil(e / 8);
// }
// function getMinHashLength(r) {
//   const e = getFieldBytesLength(r);
//   return e + Math.ceil(e / 2);
// }
// function mapHashToField(r, e, t = !1) {
//   const n = r.length,
//     i = getFieldBytesLength(e),
//     o = getMinHashLength(e);
//   if (n < 16 || n < o || n > 1024)
//     throw new Error(`expected ${o}-1024 bytes of input, got ${n}`);
//   const a = t ? bytesToNumberBE(r) : bytesToNumberLE(r),
//     c = mod(a, e - _1n$6) + _1n$6;
//   return t ? numberToBytesLE(c, i) : numberToBytesBE(c, i);
// }
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const _0n$3 = BigInt(0),
//   _1n$5 = BigInt(1);
// function wNAF(r, e) {
//   const t = (i, o) => {
//       const a = o.negate();
//       return i ? a : o;
//     },
//     n = (i) => {
//       const o = Math.ceil(e / i) + 1,
//         a = 2 ** (i - 1);
//       return {
//         windows: o,
//         windowSize: a,
//       };
//     };
//   return {
//     constTimeNegate: t,
//     unsafeLadder(i, o) {
//       let a = r.ZERO,
//         c = i;
//       for (; o > _0n$3; )
//         o & _1n$5 && (a = a.add(c)), (c = c.double()), (o >>= _1n$5);
//       return a;
//     },
//     precomputeWindow(i, o) {
//       const { windows: a, windowSize: c } = n(o),
//         u = [];
//       let l = i,
//         h = l;
//       for (let f = 0; f < a; f++) {
//         (h = l), u.push(h);
//         for (let d = 1; d < c; d++) (h = h.add(l)), u.push(h);
//         l = h.double();
//       }
//       return u;
//     },
//     wNAF(i, o, a) {
//       const { windows: c, windowSize: u } = n(i);
//       let l = r.ZERO,
//         h = r.BASE;
//       const f = BigInt(2 ** i - 1),
//         d = 2 ** i,
//         p = BigInt(i);
//       for (let g = 0; g < c; g++) {
//         const m = g * u;
//         let b = Number(a & f);
//         (a >>= p), b > u && ((b -= d), (a += _1n$5));
//         const _ = m,
//           w = m + Math.abs(b) - 1,
//           E = g % 2 !== 0,
//           v = b < 0;
//         b === 0 ? (h = h.add(t(E, o[_]))) : (l = l.add(t(v, o[w])));
//       }
//       return {
//         p: l,
//         f: h,
//       };
//     },
//     wNAFCached(i, o, a, c) {
//       const u = i._WINDOW_SIZE || 1;
//       let l = o.get(i);
//       return (
//         l || ((l = this.precomputeWindow(i, u)), u !== 1 && o.set(i, c(l))),
//         this.wNAF(u, l, a)
//       );
//     },
//   };
// }
// function validateBasic(r) {
//   return (
//     validateField(r.Fp),
//     validateObject(
//       r,
//       {
//         n: "bigint",
//         h: "bigint",
//         Gx: "field",
//         Gy: "field",
//       },
//       {
//         nBitLength: "isSafeInteger",
//         nByteLength: "isSafeInteger",
//       }
//     ),
//     Object.freeze({
//       ...nLength(r.n, r.nBitLength),
//       ...r,
//       p: r.Fp.ORDER,
//     })
//   );
// }
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const _0n$2 = BigInt(0),
//   _1n$4 = BigInt(1),
//   _2n$2 = BigInt(2),
//   _8n = BigInt(8),
//   VERIFY_DEFAULT = {
//     zip215: !0,
//   };
// function validateOpts$2(r) {
//   const e = validateBasic(r);
//   return (
//     validateObject(
//       r,
//       {
//         hash: "function",
//         a: "bigint",
//         d: "bigint",
//         randomBytes: "function",
//       },
//       {
//         adjustScalarBytes: "function",
//         domain: "function",
//         uvRatio: "function",
//         mapToCurve: "function",
//       }
//     ),
//     Object.freeze({
//       ...e,
//     })
//   );
// }
// function twistedEdwards(r) {
//   const e = validateOpts$2(r),
//     { Fp: t, n, prehash: i, hash: o, randomBytes: a, nByteLength: c, h: u } = e,
//     l = _2n$2 << (BigInt(c * 8) - _1n$4),
//     h = t.create,
//     f =
//       e.uvRatio ||
//       ((P, R) => {
//         try {
//           return {
//             isValid: !0,
//             value: t.sqrt(P * t.inv(R)),
//           };
//         } catch {
//           return {
//             isValid: !1,
//             value: _0n$2,
//           };
//         }
//       }),
//     d = e.adjustScalarBytes || ((P) => P),
//     p =
//       e.domain ||
//       ((P, R, k) => {
//         if (R.length || k)
//           throw new Error("Contexts/pre-hash are not supported");
//         return P;
//       }),
//     g = (P) => typeof P == "bigint" && _0n$2 < P,
//     m = (P, R) => g(P) && g(R) && P < R,
//     b = (P) => P === _0n$2 || m(P, l);
//   function _(P, R) {
//     if (m(P, R)) return P;
//     throw new Error(`Expected valid scalar < ${R}, got ${typeof P} ${P}`);
//   }
//   function w(P) {
//     return P === _0n$2 ? P : _(P, n);
//   }
//   const E = new Map();
//   function v(P) {
//     if (!(P instanceof S)) throw new Error("ExtendedPoint expected");
//   }
//   class S {
//     constructor(R, k, L, U) {
//       if (((this.ex = R), (this.ey = k), (this.ez = L), (this.et = U), !b(R)))
//         throw new Error("x required");
//       if (!b(k)) throw new Error("y required");
//       if (!b(L)) throw new Error("z required");
//       if (!b(U)) throw new Error("t required");
//     }
//     get x() {
//       return this.toAffine().x;
//     }
//     get y() {
//       return this.toAffine().y;
//     }
//     static fromAffine(R) {
//       if (R instanceof S) throw new Error("extended point not allowed");
//       const { x: k, y: L } = R || {};
//       if (!b(k) || !b(L)) throw new Error("invalid affine point");
//       return new S(k, L, _1n$4, h(k * L));
//     }
//     static normalizeZ(R) {
//       const k = t.invertBatch(R.map((L) => L.ez));
//       return R.map((L, U) => L.toAffine(k[U])).map(S.fromAffine);
//     }
//     _setWindowSize(R) {
//       (this._WINDOW_SIZE = R), E.delete(this);
//     }
//     assertValidity() {
//       const { a: R, d: k } = e;
//       if (this.is0()) throw new Error("bad point: ZERO");
//       const { ex: L, ey: U, ez: H, et: z } = this,
//         Y = h(L * L),
//         G = h(U * U),
//         W = h(H * H),
//         X = h(W * W),
//         j = h(Y * R),
//         ee = h(W * h(j + G)),
//         te = h(X + h(k * h(Y * G)));
//       if (ee !== te) throw new Error("bad point: equation left != right (1)");
//       const re = h(L * U),
//         J = h(H * z);
//       if (re !== J) throw new Error("bad point: equation left != right (2)");
//     }
//     equals(R) {
//       v(R);
//       const { ex: k, ey: L, ez: U } = this,
//         { ex: H, ey: z, ez: Y } = R,
//         G = h(k * Y),
//         W = h(H * U),
//         X = h(L * Y),
//         j = h(z * U);
//       return G === W && X === j;
//     }
//     is0() {
//       return this.equals(S.ZERO);
//     }
//     negate() {
//       return new S(h(-this.ex), this.ey, this.ez, h(-this.et));
//     }
//     double() {
//       const { a: R } = e,
//         { ex: k, ey: L, ez: U } = this,
//         H = h(k * k),
//         z = h(L * L),
//         Y = h(_2n$2 * h(U * U)),
//         G = h(R * H),
//         W = k + L,
//         X = h(h(W * W) - H - z),
//         j = G + z,
//         ee = j - Y,
//         te = G - z,
//         re = h(X * ee),
//         J = h(j * te),
//         oe = h(X * te),
//         ge = h(ee * j);
//       return new S(re, J, ge, oe);
//     }
//     add(R) {
//       v(R);
//       const { a: k, d: L } = e,
//         { ex: U, ey: H, ez: z, et: Y } = this,
//         { ex: G, ey: W, ez: X, et: j } = R;
//       if (k === BigInt(-1)) {
//         const mt = h((H - U) * (W + G)),
//           bt = h((H + U) * (W - G)),
//           ct = h(bt - mt);
//         if (ct === _0n$2) return this.double();
//         const _t = h(z * _2n$2 * j),
//           Et = h(Y * _2n$2 * X),
//           wt = Et + _t,
//           vt = bt + mt,
//           St = Et - _t,
//           Ut = h(wt * ct),
//           Ft = h(vt * St),
//           Kt = h(wt * St),
//           Vt = h(ct * vt);
//         return new S(Ut, Ft, Vt, Kt);
//       }
//       const ee = h(U * G),
//         te = h(H * W),
//         re = h(Y * L * j),
//         J = h(z * X),
//         oe = h((U + H) * (G + W) - ee - te),
//         ge = J - re,
//         De = J + re,
//         yt = h(te - k * ee),
//         kt = h(oe * ge),
//         Ot = h(De * yt),
//         Lt = h(oe * yt),
//         Mt = h(ge * De);
//       return new S(kt, Ot, Mt, Lt);
//     }
//     subtract(R) {
//       return this.add(R.negate());
//     }
//     wNAF(R) {
//       return A.wNAFCached(this, E, R, S.normalizeZ);
//     }
//     multiply(R) {
//       const { p: k, f: L } = this.wNAF(_(R, n));
//       return S.normalizeZ([k, L])[0];
//     }
//     multiplyUnsafe(R) {
//       let k = w(R);
//       return k === _0n$2
//         ? T
//         : this.equals(T) || k === _1n$4
//         ? this
//         : this.equals(I)
//         ? this.wNAF(k).p
//         : A.unsafeLadder(this, k);
//     }
//     isSmallOrder() {
//       return this.multiplyUnsafe(u).is0();
//     }
//     isTorsionFree() {
//       return A.unsafeLadder(this, n).is0();
//     }
//     toAffine(R) {
//       const { ex: k, ey: L, ez: U } = this,
//         H = this.is0();
//       R == null && (R = H ? _8n : t.inv(U));
//       const z = h(k * R),
//         Y = h(L * R),
//         G = h(U * R);
//       if (H)
//         return {
//           x: _0n$2,
//           y: _1n$4,
//         };
//       if (G !== _1n$4) throw new Error("invZ was invalid");
//       return {
//         x: z,
//         y: Y,
//       };
//     }
//     clearCofactor() {
//       const { h: R } = e;
//       return R === _1n$4 ? this : this.multiplyUnsafe(R);
//     }
//     static fromHex(R, k = !1) {
//       const { d: L, a: U } = e,
//         H = t.BYTES;
//       R = ensureBytes$1("pointHex", R, H);
//       const z = R.slice(),
//         Y = R[H - 1];
//       z[H - 1] = Y & -129;
//       const G = bytesToNumberLE(z);
//       G === _0n$2 || (k ? _(G, l) : _(G, t.ORDER));
//       const W = h(G * G),
//         X = h(W - _1n$4),
//         j = h(L * W - U);
//       let { isValid: ee, value: te } = f(X, j);
//       if (!ee) throw new Error("Point.fromHex: invalid y coordinate");
//       const re = (te & _1n$4) === _1n$4,
//         J = (Y & 128) !== 0;
//       if (!k && te === _0n$2 && J)
//         throw new Error("Point.fromHex: x=0 and x_0=1");
//       return (
//         J !== re && (te = h(-te)),
//         S.fromAffine({
//           x: te,
//           y: G,
//         })
//       );
//     }
//     static fromPrivateKey(R) {
//       return $(R).point;
//     }
//     toRawBytes() {
//       const { x: R, y: k } = this.toAffine(),
//         L = numberToBytesLE(k, t.BYTES);
//       return (L[L.length - 1] |= R & _1n$4 ? 128 : 0), L;
//     }
//     toHex() {
//       return bytesToHex(this.toRawBytes());
//     }
//   }
//   (S.BASE = new S(e.Gx, e.Gy, _1n$4, h(e.Gx * e.Gy))),
//     (S.ZERO = new S(_0n$2, _1n$4, _1n$4, _0n$2));
//   const { BASE: I, ZERO: T } = S,
//     A = wNAF(S, c * 8);
//   function C(P) {
//     return mod(P, n);
//   }
//   function x(P) {
//     return C(bytesToNumberLE(P));
//   }
//   function $(P) {
//     const R = c;
//     P = ensureBytes$1("private key", P, R);
//     const k = ensureBytes$1("hashed private key", o(P), 2 * R),
//       L = d(k.slice(0, R)),
//       U = k.slice(R, 2 * R),
//       H = x(L),
//       z = I.multiply(H),
//       Y = z.toRawBytes();
//     return {
//       head: L,
//       prefix: U,
//       scalar: H,
//       point: z,
//       pointBytes: Y,
//     };
//   }
//   function O(P) {
//     return $(P).pointBytes;
//   }
//   function M(P = new Uint8Array(), ...R) {
//     const k = concatBytes(...R);
//     return x(o(p(k, ensureBytes$1("context", P), !!i)));
//   }
//   function K(P, R, k = {}) {
//     (P = ensureBytes$1("message", P)), i && (P = i(P));
//     const { prefix: L, scalar: U, pointBytes: H } = $(R),
//       z = M(k.context, L, P),
//       Y = I.multiply(z).toRawBytes(),
//       G = M(k.context, Y, H, P),
//       W = C(z + G * U);
//     w(W);
//     const X = concatBytes(Y, numberToBytesLE(W, t.BYTES));
//     return ensureBytes$1("result", X, c * 2);
//   }
//   const B = VERIFY_DEFAULT;
//   function N(P, R, k, L = B) {
//     const { context: U, zip215: H } = L,
//       z = t.BYTES;
//     (P = ensureBytes$1("signature", P, 2 * z)),
//       (R = ensureBytes$1("message", R)),
//       i && (R = i(R));
//     const Y = bytesToNumberLE(P.slice(z, 2 * z));
//     let G, W, X;
//     try {
//       (G = S.fromHex(k, H)),
//         (W = S.fromHex(P.slice(0, z), H)),
//         (X = I.multiplyUnsafe(Y));
//     } catch {
//       return !1;
//     }
//     if (!H && G.isSmallOrder()) return !1;
//     const j = M(U, W.toRawBytes(), G.toRawBytes(), R);
//     return W.add(G.multiplyUnsafe(j))
//       .subtract(X)
//       .clearCofactor()
//       .equals(S.ZERO);
//   }
//   return (
//     I._setWindowSize(8),
//     {
//       CURVE: e,
//       getPublicKey: O,
//       sign: K,
//       verify: N,
//       ExtendedPoint: S,
//       utils: {
//         getExtendedPublicKey: $,
//         randomPrivateKey: () => a(t.BYTES),
//         precompute(P = 8, R = S.BASE) {
//           return R._setWindowSize(P), R.multiply(BigInt(3)), R;
//         },
//       },
//     }
//   );
// }
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const _0n$1 = BigInt(0),
//   _1n$3 = BigInt(1);
// function validateOpts$1(r) {
//   return (
//     validateObject(
//       r,
//       {
//         a: "bigint",
//       },
//       {
//         montgomeryBits: "isSafeInteger",
//         nByteLength: "isSafeInteger",
//         adjustScalarBytes: "function",
//         domain: "function",
//         powPminus2: "function",
//         Gu: "bigint",
//       }
//     ),
//     Object.freeze({
//       ...r,
//     })
//   );
// }
// function montgomery(r) {
//   const e = validateOpts$1(r),
//     { P: t } = e,
//     n = (E) => mod(E, t),
//     i = e.montgomeryBits,
//     o = Math.ceil(i / 8),
//     a = e.nByteLength,
//     c = e.adjustScalarBytes || ((E) => E),
//     u = e.powPminus2 || ((E) => pow(E, t - BigInt(2), t));
//   function l(E, v, S) {
//     const I = n(E * (v - S));
//     return (v = n(v - I)), (S = n(S + I)), [v, S];
//   }
//   function h(E) {
//     if (typeof E == "bigint" && _0n$1 <= E && E < t) return E;
//     throw new Error("Expected valid scalar 0 < scalar < CURVE.P");
//   }
//   const f = (e.a - BigInt(2)) / BigInt(4);
//   function d(E, v) {
//     const S = h(E),
//       I = h(v),
//       T = S;
//     let A = _1n$3,
//       C = _0n$1,
//       x = S,
//       $ = _1n$3,
//       O = _0n$1,
//       M;
//     for (let B = BigInt(i - 1); B >= _0n$1; B--) {
//       const N = (I >> B) & _1n$3;
//       (O ^= N),
//         (M = l(O, A, x)),
//         (A = M[0]),
//         (x = M[1]),
//         (M = l(O, C, $)),
//         (C = M[0]),
//         ($ = M[1]),
//         (O = N);
//       const D = A + C,
//         P = n(D * D),
//         R = A - C,
//         k = n(R * R),
//         L = P - k,
//         U = x + $,
//         H = x - $,
//         z = n(H * D),
//         Y = n(U * R),
//         G = z + Y,
//         W = z - Y;
//       (x = n(G * G)),
//         ($ = n(T * n(W * W))),
//         (A = n(P * k)),
//         (C = n(L * (P + n(f * L))));
//     }
//     (M = l(O, A, x)),
//       (A = M[0]),
//       (x = M[1]),
//       (M = l(O, C, $)),
//       (C = M[0]),
//       ($ = M[1]);
//     const K = u(C);
//     return n(A * K);
//   }
//   function p(E) {
//     return numberToBytesLE(n(E), o);
//   }
//   function g(E) {
//     const v = ensureBytes$1("u coordinate", E, o);
//     return a === 32 && (v[31] &= 127), bytesToNumberLE(v);
//   }
//   function m(E) {
//     const v = ensureBytes$1("scalar", E),
//       S = v.length;
//     if (S !== o && S !== a)
//       throw new Error(`Expected ${o} or ${a} bytes, got ${S}`);
//     return bytesToNumberLE(c(v));
//   }
//   function b(E, v) {
//     const S = g(v),
//       I = m(E),
//       T = d(S, I);
//     if (T === _0n$1) throw new Error("Invalid private or public key received");
//     return p(T);
//   }
//   const _ = p(e.Gu);
//   function w(E) {
//     return b(E, _);
//   }
//   return {
//     scalarMult: b,
//     scalarMultBase: w,
//     getSharedSecret: (E, v) => b(E, v),
//     getPublicKey: (E) => w(E),
//     utils: {
//       randomPrivateKey: () => e.randomBytes(e.nByteLength),
//     },
//     GuBytes: _,
//   };
// }
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const ED25519_P = BigInt(
//     "57896044618658097711785492504343953926634992332820282019728792003956564819949"
//   ),
//   ED25519_SQRT_M1 = BigInt(
//     "19681161376707505956807079304988542015446066515923890162744021073123829784752"
//   );
// BigInt(0);
// const _1n$2 = BigInt(1),
//   _2n$1 = BigInt(2),
//   _5n = BigInt(5),
//   _10n = BigInt(10),
//   _20n = BigInt(20),
//   _40n = BigInt(40),
//   _80n = BigInt(80);
// function ed25519_pow_2_252_3(r) {
//   const e = ED25519_P,
//     n = (((r * r) % e) * r) % e,
//     i = (pow2(n, _2n$1, e) * n) % e,
//     o = (pow2(i, _1n$2, e) * r) % e,
//     a = (pow2(o, _5n, e) * o) % e,
//     c = (pow2(a, _10n, e) * a) % e,
//     u = (pow2(c, _20n, e) * c) % e,
//     l = (pow2(u, _40n, e) * u) % e,
//     h = (pow2(l, _80n, e) * l) % e,
//     f = (pow2(h, _80n, e) * l) % e,
//     d = (pow2(f, _10n, e) * a) % e;
//   return {
//     pow_p_5_8: (pow2(d, _2n$1, e) * r) % e,
//     b2: n,
//   };
// }
// function adjustScalarBytes(r) {
//   return (r[0] &= 248), (r[31] &= 127), (r[31] |= 64), r;
// }
// function uvRatio(r, e) {
//   const t = ED25519_P,
//     n = mod(e * e * e, t),
//     i = mod(n * n * e, t),
//     o = ed25519_pow_2_252_3(r * i).pow_p_5_8;
//   let a = mod(r * n * o, t);
//   const c = mod(e * a * a, t),
//     u = a,
//     l = mod(a * ED25519_SQRT_M1, t),
//     h = c === r,
//     f = c === mod(-r, t),
//     d = c === mod(-r * ED25519_SQRT_M1, t);
//   return (
//     h && (a = u),
//     (f || d) && (a = l),
//     isNegativeLE(a, t) && (a = mod(-a, t)),
//     {
//       isValid: h || f,
//       value: a,
//     }
//   );
// }
// const Fp$1 = Field(ED25519_P, void 0, !0),
//   ed25519Defaults = {
//     a: BigInt(-1),
//     d: BigInt(
//       "37095705934669439343138083508754565189542113879843219016388785533085940283555"
//     ),
//     Fp: Fp$1,
//     n: BigInt(
//       "7237005577332262213973186563042994240857116359379907606001950938285454250989"
//     ),
//     h: BigInt(8),
//     Gx: BigInt(
//       "15112221349535400772501151409588531511454012693041857206046113283949847762202"
//     ),
//     Gy: BigInt(
//       "46316835694926478169428394003475163141307993866256225615783033603165251855960"
//     ),
//     hash: sha512$1,
//     randomBytes: randomBytes$2,
//     adjustScalarBytes,
//     uvRatio,
//   },
//   ed25519 = twistedEdwards(ed25519Defaults);
// function ed25519_domain(r, e, t) {
//   if (e.length > 255) throw new Error("Context is too big");
//   return concatBytes$1(
//     utf8ToBytes$2("SigEd25519 no Ed25519 collisions"),
//     new Uint8Array([t ? 1 : 0, e.length]),
//     e,
//     r
//   );
// }
// ({
//   ...ed25519Defaults,
// });
// ({
//   ...ed25519Defaults,
// });
// const x25519 = (() =>
//     montgomery({
//       P: ED25519_P,
//       a: BigInt(486662),
//       montgomeryBits: 255,
//       nByteLength: 32,
//       Gu: BigInt(9),
//       powPminus2: (r) => {
//         const e = ED25519_P,
//           { pow_p_5_8: t, b2: n } = ed25519_pow_2_252_3(r);
//         return mod(pow2(t, BigInt(3), e) * n, e);
//       },
//       adjustScalarBytes,
//       randomBytes: randomBytes$2,
//     }))(),
//   ELL2_C1 = (Fp$1.ORDER + BigInt(3)) / BigInt(8);
// Fp$1.pow(_2n$1, ELL2_C1);
// Fp$1.sqrt(Fp$1.neg(Fp$1.ONE));
// (Fp$1.ORDER - BigInt(5)) / BigInt(8);
// BigInt(486662);
// FpSqrtEven(Fp$1, Fp$1.neg(BigInt(486664)));
// BigInt(
//   "25063068953384623474111414158702152701244531502492656460079210482610430750235"
// );
// BigInt(
//   "54469307008909316920995813868745141605393597292927456921205312896311721017578"
// );
// BigInt(
//   "1159843021668779879193775521855586647937357759715417654439879720876111806838"
// );
// BigInt(
//   "40440834346308536858101042469323190826248399146238708352240133220865137265952"
// );
// BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
// const PUBLIC_KEY_BYTE_LENGTH$1 = 32,
//   PRIVATE_KEY_BYTE_LENGTH$1 = 64,
//   KEYS_BYTE_LENGTH$1 = 32;
// function generateKey$5() {
//   const r = ed25519.utils.randomPrivateKey(),
//     e = ed25519.getPublicKey(r);
//   return {
//     privateKey: concatKeys$1(r, e),
//     publicKey: e,
//   };
// }
// function generateKeyFromSeed$1(r) {
//   if (r.length !== KEYS_BYTE_LENGTH$1)
//     throw new TypeError('"seed" must be 32 bytes in length.');
//   if (!(r instanceof Uint8Array))
//     throw new TypeError('"seed" must be a node.js Buffer, or Uint8Array.');
//   const e = r,
//     t = ed25519.getPublicKey(e);
//   return {
//     privateKey: concatKeys$1(e, t),
//     publicKey: t,
//   };
// }
// function hashAndSign$5(r, e) {
//   const t = r.subarray(0, KEYS_BYTE_LENGTH$1);
//   return ed25519.sign(e instanceof Uint8Array ? e : e.subarray(), t);
// }
// function hashAndVerify$5(r, e, t) {
//   return ed25519.verify(e, t instanceof Uint8Array ? t : t.subarray(), r);
// }
// function concatKeys$1(r, e) {
//   const t = new Uint8Array(PRIVATE_KEY_BYTE_LENGTH$1);
//   for (let n = 0; n < KEYS_BYTE_LENGTH$1; n++)
//     (t[n] = r[n]), (t[KEYS_BYTE_LENGTH$1 + n] = e[n]);
//   return t;
// }
// const webcrypto$1 = {
//     get(r = globalThis) {
//       const e = r.crypto;
//       if (e == null || e.subtle == null)
//         throw Object.assign(
//           new Error(
//             "Missing Web Crypto API. The most likely cause of this error is that this page is being accessed from an insecure context (i.e. not HTTPS). For more information and possible resolutions see https://github.com/libp2p/js-libp2p/blob/main/packages/crypto/README.md#web-crypto-api"
//           ),
//           {
//             code: "ERR_MISSING_WEB_CRYPTO",
//           }
//         );
//       return e;
//     },
//   },
//   derivedEmptyPasswordKey$1 = {
//     alg: "A128GCM",
//     ext: !0,
//     k: "scm9jmO_4BJAgdwWGVulLg",
//     key_ops: ["encrypt", "decrypt"],
//     kty: "oct",
//   };
// function create$3(r) {
//   const e = (r == null ? void 0 : r.algorithm) ?? "AES-GCM";
//   let t = (r == null ? void 0 : r.keyLength) ?? 16;
//   const n = (r == null ? void 0 : r.nonceLength) ?? 12,
//     i = (r == null ? void 0 : r.digest) ?? "SHA-256",
//     o = (r == null ? void 0 : r.saltLength) ?? 16,
//     a = (r == null ? void 0 : r.iterations) ?? 32767,
//     c = webcrypto$1.get();
//   t *= 8;
//   async function u(f, d) {
//     const p = c.getRandomValues(new Uint8Array(o)),
//       g = c.getRandomValues(new Uint8Array(n)),
//       m = {
//         name: e,
//         iv: g,
//       };
//     typeof d == "string" && (d = fromString(d));
//     let b;
//     if (d.length === 0) {
//       b = await c.subtle.importKey(
//         "jwk",
//         derivedEmptyPasswordKey$1,
//         {
//           name: "AES-GCM",
//         },
//         !0,
//         ["encrypt"]
//       );
//       try {
//         const w = {
//             name: "PBKDF2",
//             salt: p,
//             iterations: a,
//             hash: {
//               name: i,
//             },
//           },
//           E = await c.subtle.importKey(
//             "raw",
//             d,
//             {
//               name: "PBKDF2",
//             },
//             !1,
//             ["deriveKey"]
//           );
//         b = await c.subtle.deriveKey(
//           w,
//           E,
//           {
//             name: e,
//             length: t,
//           },
//           !0,
//           ["encrypt"]
//         );
//       } catch {
//         b = await c.subtle.importKey(
//           "jwk",
//           derivedEmptyPasswordKey$1,
//           {
//             name: "AES-GCM",
//           },
//           !0,
//           ["encrypt"]
//         );
//       }
//     } else {
//       const w = {
//           name: "PBKDF2",
//           salt: p,
//           iterations: a,
//           hash: {
//             name: i,
//           },
//         },
//         E = await c.subtle.importKey(
//           "raw",
//           d,
//           {
//             name: "PBKDF2",
//           },
//           !1,
//           ["deriveKey"]
//         );
//       b = await c.subtle.deriveKey(
//         w,
//         E,
//         {
//           name: e,
//           length: t,
//         },
//         !0,
//         ["encrypt"]
//       );
//     }
//     const _ = await c.subtle.encrypt(m, b, f);
//     return concat$1([p, m.iv, new Uint8Array(_)]);
//   }
//   async function l(f, d) {
//     const p = f.subarray(0, o),
//       g = f.subarray(o, o + n),
//       m = f.subarray(o + n),
//       b = {
//         name: e,
//         iv: g,
//       };
//     typeof d == "string" && (d = fromString(d));
//     let _;
//     if (d.length === 0)
//       try {
//         const E = {
//             name: "PBKDF2",
//             salt: p,
//             iterations: a,
//             hash: {
//               name: i,
//             },
//           },
//           v = await c.subtle.importKey(
//             "raw",
//             d,
//             {
//               name: "PBKDF2",
//             },
//             !1,
//             ["deriveKey"]
//           );
//         _ = await c.subtle.deriveKey(
//           E,
//           v,
//           {
//             name: e,
//             length: t,
//           },
//           !0,
//           ["decrypt"]
//         );
//       } catch {
//         _ = await c.subtle.importKey(
//           "jwk",
//           derivedEmptyPasswordKey$1,
//           {
//             name: "AES-GCM",
//           },
//           !0,
//           ["decrypt"]
//         );
//       }
//     else {
//       const E = {
//           name: "PBKDF2",
//           salt: p,
//           iterations: a,
//           hash: {
//             name: i,
//           },
//         },
//         v = await c.subtle.importKey(
//           "raw",
//           d,
//           {
//             name: "PBKDF2",
//           },
//           !1,
//           ["deriveKey"]
//         );
//       _ = await c.subtle.deriveKey(
//         E,
//         v,
//         {
//           name: e,
//           length: t,
//         },
//         !0,
//         ["decrypt"]
//       );
//     }
//     const w = await c.subtle.decrypt(b, _, m);
//     return new Uint8Array(w);
//   }
//   return {
//     encrypt: u,
//     decrypt: l,
//   };
// }
// async function exporter$1(r, e) {
//   const n = await create$3().encrypt(r, e);
//   return base64$2.encode(n);
// }
// const N1 = Math.pow(2, 7),
//   N2 = Math.pow(2, 14),
//   N3 = Math.pow(2, 21),
//   N4 = Math.pow(2, 28),
//   N5 = Math.pow(2, 35),
//   N6 = Math.pow(2, 42),
//   N7 = Math.pow(2, 49),
//   MSB = 128,
//   REST = 127;
// function encodingLength(r) {
//   if (r < N1) return 1;
//   if (r < N2) return 2;
//   if (r < N3) return 3;
//   if (r < N4) return 4;
//   if (r < N5) return 5;
//   if (r < N6) return 6;
//   if (r < N7) return 7;
//   if (Number.MAX_SAFE_INTEGER != null && r > Number.MAX_SAFE_INTEGER)
//     throw new RangeError("Could not encode varint");
//   return 8;
// }
// function encodeUint8Array(r, e, t = 0) {
//   switch (encodingLength(r)) {
//     case 8:
//       (e[t++] = (r & 255) | MSB), (r /= 128);
//     case 7:
//       (e[t++] = (r & 255) | MSB), (r /= 128);
//     case 6:
//       (e[t++] = (r & 255) | MSB), (r /= 128);
//     case 5:
//       (e[t++] = (r & 255) | MSB), (r /= 128);
//     case 4:
//       (e[t++] = (r & 255) | MSB), (r >>>= 7);
//     case 3:
//       (e[t++] = (r & 255) | MSB), (r >>>= 7);
//     case 2:
//       (e[t++] = (r & 255) | MSB), (r >>>= 7);
//     case 1: {
//       (e[t++] = r & 255), (r >>>= 7);
//       break;
//     }
//     default:
//       throw new Error("unreachable");
//   }
//   return e;
// }
// function encodeUint8ArrayList(r, e, t = 0) {
//   switch (encodingLength(r)) {
//     case 8:
//       e.set(t++, (r & 255) | MSB), (r /= 128);
//     case 7:
//       e.set(t++, (r & 255) | MSB), (r /= 128);
//     case 6:
//       e.set(t++, (r & 255) | MSB), (r /= 128);
//     case 5:
//       e.set(t++, (r & 255) | MSB), (r /= 128);
//     case 4:
//       e.set(t++, (r & 255) | MSB), (r >>>= 7);
//     case 3:
//       e.set(t++, (r & 255) | MSB), (r >>>= 7);
//     case 2:
//       e.set(t++, (r & 255) | MSB), (r >>>= 7);
//     case 1: {
//       e.set(t++, r & 255), (r >>>= 7);
//       break;
//     }
//     default:
//       throw new Error("unreachable");
//   }
//   return e;
// }
// function decodeUint8Array(r, e) {
//   let t = r[e],
//     n = 0;
//   if (
//     ((n += t & REST),
//     t < MSB ||
//       ((t = r[e + 1]), (n += (t & REST) << 7), t < MSB) ||
//       ((t = r[e + 2]), (n += (t & REST) << 14), t < MSB) ||
//       ((t = r[e + 3]), (n += (t & REST) << 21), t < MSB) ||
//       ((t = r[e + 4]), (n += (t & REST) * N4), t < MSB) ||
//       ((t = r[e + 5]), (n += (t & REST) * N5), t < MSB) ||
//       ((t = r[e + 6]), (n += (t & REST) * N6), t < MSB) ||
//       ((t = r[e + 7]), (n += (t & REST) * N7), t < MSB))
//   )
//     return n;
//   throw new RangeError("Could not decode varint");
// }
// function decodeUint8ArrayList(r, e) {
//   let t = r.get(e),
//     n = 0;
//   if (
//     ((n += t & REST),
//     t < MSB ||
//       ((t = r.get(e + 1)), (n += (t & REST) << 7), t < MSB) ||
//       ((t = r.get(e + 2)), (n += (t & REST) << 14), t < MSB) ||
//       ((t = r.get(e + 3)), (n += (t & REST) << 21), t < MSB) ||
//       ((t = r.get(e + 4)), (n += (t & REST) * N4), t < MSB) ||
//       ((t = r.get(e + 5)), (n += (t & REST) * N5), t < MSB) ||
//       ((t = r.get(e + 6)), (n += (t & REST) * N6), t < MSB) ||
//       ((t = r.get(e + 7)), (n += (t & REST) * N7), t < MSB))
//   )
//     return n;
//   throw new RangeError("Could not decode varint");
// }
// function encode$1(r, e, t = 0) {
//   return (
//     e == null && (e = allocUnsafe(encodingLength(r))),
//     e instanceof Uint8Array
//       ? encodeUint8Array(r, e, t)
//       : encodeUint8ArrayList(r, e, t)
//   );
// }
// function decode$1(r, e = 0) {
//   return r instanceof Uint8Array
//     ? decodeUint8Array(r, e)
//     : decodeUint8ArrayList(r, e);
// }
// const f32 = new Float32Array([-0]),
//   f8b = new Uint8Array(f32.buffer);
// function writeFloatLE(r, e, t) {
//   (f32[0] = r),
//     (e[t] = f8b[0]),
//     (e[t + 1] = f8b[1]),
//     (e[t + 2] = f8b[2]),
//     (e[t + 3] = f8b[3]);
// }
// function readFloatLE(r, e) {
//   return (
//     (f8b[0] = r[e]),
//     (f8b[1] = r[e + 1]),
//     (f8b[2] = r[e + 2]),
//     (f8b[3] = r[e + 3]),
//     f32[0]
//   );
// }
// const f64 = new Float64Array([-0]),
//   d8b = new Uint8Array(f64.buffer);
// function writeDoubleLE(r, e, t) {
//   (f64[0] = r),
//     (e[t] = d8b[0]),
//     (e[t + 1] = d8b[1]),
//     (e[t + 2] = d8b[2]),
//     (e[t + 3] = d8b[3]),
//     (e[t + 4] = d8b[4]),
//     (e[t + 5] = d8b[5]),
//     (e[t + 6] = d8b[6]),
//     (e[t + 7] = d8b[7]);
// }
// function readDoubleLE(r, e) {
//   return (
//     (d8b[0] = r[e]),
//     (d8b[1] = r[e + 1]),
//     (d8b[2] = r[e + 2]),
//     (d8b[3] = r[e + 3]),
//     (d8b[4] = r[e + 4]),
//     (d8b[5] = r[e + 5]),
//     (d8b[6] = r[e + 6]),
//     (d8b[7] = r[e + 7]),
//     f64[0]
//   );
// }
// const MAX_SAFE_NUMBER_INTEGER = BigInt(Number.MAX_SAFE_INTEGER),
//   MIN_SAFE_NUMBER_INTEGER = BigInt(Number.MIN_SAFE_INTEGER);
// let LongBits$2 = class ye {
//   constructor(e, t) {
//     y(this, "lo");
//     y(this, "hi");
//     (this.lo = e | 0), (this.hi = t | 0);
//   }
//   toNumber(e = !1) {
//     if (!e && this.hi >>> 31 > 0) {
//       const t = (~this.lo + 1) >>> 0;
//       let n = ~this.hi >>> 0;
//       return t === 0 && (n = (n + 1) >>> 0), -(t + n * 4294967296);
//     }
//     return this.lo + this.hi * 4294967296;
//   }
//   toBigInt(e = !1) {
//     if (e) return BigInt(this.lo >>> 0) + (BigInt(this.hi >>> 0) << 32n);
//     if (this.hi >>> 31) {
//       const t = (~this.lo + 1) >>> 0;
//       let n = ~this.hi >>> 0;
//       return t === 0 && (n = (n + 1) >>> 0), -(BigInt(t) + (BigInt(n) << 32n));
//     }
//     return BigInt(this.lo >>> 0) + (BigInt(this.hi >>> 0) << 32n);
//   }
//   toString(e = !1) {
//     return this.toBigInt(e).toString();
//   }
//   zzEncode() {
//     const e = this.hi >> 31;
//     return (
//       (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0),
//       (this.lo = ((this.lo << 1) ^ e) >>> 0),
//       this
//     );
//   }
//   zzDecode() {
//     const e = -(this.lo & 1);
//     return (
//       (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0),
//       (this.hi = ((this.hi >>> 1) ^ e) >>> 0),
//       this
//     );
//   }
//   length() {
//     const e = this.lo,
//       t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
//       n = this.hi >>> 24;
//     return n === 0
//       ? t === 0
//         ? e < 16384
//           ? e < 128
//             ? 1
//             : 2
//           : e < 2097152
//           ? 3
//           : 4
//         : t < 16384
//         ? t < 128
//           ? 5
//           : 6
//         : t < 2097152
//         ? 7
//         : 8
//       : n < 128
//       ? 9
//       : 10;
//   }
//   static fromBigInt(e) {
//     if (e === 0n) return zero$2;
//     if (e < MAX_SAFE_NUMBER_INTEGER && e > MIN_SAFE_NUMBER_INTEGER)
//       return this.fromNumber(Number(e));
//     const t = e < 0n;
//     t && (e = -e);
//     let n = e >> 32n,
//       i = e - (n << 32n);
//     return (
//       t &&
//         ((n = ~n | 0n),
//         (i = ~i | 0n),
//         ++i > TWO_32 && ((i = 0n), ++n > TWO_32 && (n = 0n))),
//       new ye(Number(i), Number(n))
//     );
//   }
//   static fromNumber(e) {
//     if (e === 0) return zero$2;
//     const t = e < 0;
//     t && (e = -e);
//     let n = e >>> 0,
//       i = ((e - n) / 4294967296) >>> 0;
//     return (
//       t &&
//         ((i = ~i >>> 0),
//         (n = ~n >>> 0),
//         ++n > 4294967295 && ((n = 0), ++i > 4294967295 && (i = 0))),
//       new ye(n, i)
//     );
//   }
//   static from(e) {
//     return typeof e == "number"
//       ? ye.fromNumber(e)
//       : typeof e == "bigint"
//       ? ye.fromBigInt(e)
//       : typeof e == "string"
//       ? ye.fromBigInt(BigInt(e))
//       : e.low != null || e.high != null
//       ? new ye(e.low >>> 0, e.high >>> 0)
//       : zero$2;
//   }
// };
// const zero$2 = new LongBits$2(0, 0);
// zero$2.toBigInt = function () {
//   return 0n;
// };
// zero$2.zzEncode = zero$2.zzDecode = function () {
//   return this;
// };
// zero$2.length = function () {
//   return 1;
// };
// const TWO_32 = 4294967296n;
// function length(r) {
//   let e = 0,
//     t = 0;
//   for (let n = 0; n < r.length; ++n)
//     (t = r.charCodeAt(n)),
//       t < 128
//         ? (e += 1)
//         : t < 2048
//         ? (e += 2)
//         : (t & 64512) === 55296 && (r.charCodeAt(n + 1) & 64512) === 56320
//         ? (++n, (e += 4))
//         : (e += 3);
//   return e;
// }
// function read$1(r, e, t) {
//   if (t - e < 1) return "";
//   let i;
//   const o = [];
//   let a = 0,
//     c;
//   for (; e < t; )
//     (c = r[e++]),
//       c < 128
//         ? (o[a++] = c)
//         : c > 191 && c < 224
//         ? (o[a++] = ((c & 31) << 6) | (r[e++] & 63))
//         : c > 239 && c < 365
//         ? ((c =
//             (((c & 7) << 18) |
//               ((r[e++] & 63) << 12) |
//               ((r[e++] & 63) << 6) |
//               (r[e++] & 63)) -
//             65536),
//           (o[a++] = 55296 + (c >> 10)),
//           (o[a++] = 56320 + (c & 1023)))
//         : (o[a++] = ((c & 15) << 12) | ((r[e++] & 63) << 6) | (r[e++] & 63)),
//       a > 8191 &&
//         ((i ?? (i = [])).push(String.fromCharCode.apply(String, o)), (a = 0));
//   return i != null
//     ? (a > 0 && i.push(String.fromCharCode.apply(String, o.slice(0, a))),
//       i.join(""))
//     : String.fromCharCode.apply(String, o.slice(0, a));
// }
// function write$1(r, e, t) {
//   const n = t;
//   let i, o;
//   for (let a = 0; a < r.length; ++a)
//     (i = r.charCodeAt(a)),
//       i < 128
//         ? (e[t++] = i)
//         : i < 2048
//         ? ((e[t++] = (i >> 6) | 192), (e[t++] = (i & 63) | 128))
//         : (i & 64512) === 55296 && ((o = r.charCodeAt(a + 1)) & 64512) === 56320
//         ? ((i = 65536 + ((i & 1023) << 10) + (o & 1023)),
//           ++a,
//           (e[t++] = (i >> 18) | 240),
//           (e[t++] = ((i >> 12) & 63) | 128),
//           (e[t++] = ((i >> 6) & 63) | 128),
//           (e[t++] = (i & 63) | 128))
//         : ((e[t++] = (i >> 12) | 224),
//           (e[t++] = ((i >> 6) & 63) | 128),
//           (e[t++] = (i & 63) | 128));
//   return t - n;
// }
// function indexOutOfRange$1(r, e) {
//   return RangeError(`index out of range: ${r.pos} + ${e ?? 1} > ${r.len}`);
// }
// function readFixed32End(r, e) {
//   return (
//     (r[e - 4] | (r[e - 3] << 8) | (r[e - 2] << 16) | (r[e - 1] << 24)) >>> 0
//   );
// }
// class Uint8ArrayReader {
//   constructor(e) {
//     y(this, "buf");
//     y(this, "pos");
//     y(this, "len");
//     y(this, "_slice", Uint8Array.prototype.subarray);
//     (this.buf = e), (this.pos = 0), (this.len = e.length);
//   }
//   uint32() {
//     let e = 4294967295;
//     if (
//       ((e = (this.buf[this.pos] & 127) >>> 0),
//       this.buf[this.pos++] < 128 ||
//         ((e = (e | ((this.buf[this.pos] & 127) << 7)) >>> 0),
//         this.buf[this.pos++] < 128) ||
//         ((e = (e | ((this.buf[this.pos] & 127) << 14)) >>> 0),
//         this.buf[this.pos++] < 128) ||
//         ((e = (e | ((this.buf[this.pos] & 127) << 21)) >>> 0),
//         this.buf[this.pos++] < 128) ||
//         ((e = (e | ((this.buf[this.pos] & 15) << 28)) >>> 0),
//         this.buf[this.pos++] < 128))
//     )
//       return e;
//     if ((this.pos += 5) > this.len)
//       throw ((this.pos = this.len), indexOutOfRange$1(this, 10));
//     return e;
//   }
//   int32() {
//     return this.uint32() | 0;
//   }
//   sint32() {
//     const e = this.uint32();
//     return ((e >>> 1) ^ -(e & 1)) | 0;
//   }
//   bool() {
//     return this.uint32() !== 0;
//   }
//   fixed32() {
//     if (this.pos + 4 > this.len) throw indexOutOfRange$1(this, 4);
//     return readFixed32End(this.buf, (this.pos += 4));
//   }
//   sfixed32() {
//     if (this.pos + 4 > this.len) throw indexOutOfRange$1(this, 4);
//     return readFixed32End(this.buf, (this.pos += 4)) | 0;
//   }
//   float() {
//     if (this.pos + 4 > this.len) throw indexOutOfRange$1(this, 4);
//     const e = readFloatLE(this.buf, this.pos);
//     return (this.pos += 4), e;
//   }
//   double() {
//     if (this.pos + 8 > this.len) throw indexOutOfRange$1(this, 4);
//     const e = readDoubleLE(this.buf, this.pos);
//     return (this.pos += 8), e;
//   }
//   bytes() {
//     const e = this.uint32(),
//       t = this.pos,
//       n = this.pos + e;
//     if (n > this.len) throw indexOutOfRange$1(this, e);
//     return (
//       (this.pos += e), t === n ? new Uint8Array(0) : this.buf.subarray(t, n)
//     );
//   }
//   string() {
//     const e = this.bytes();
//     return read$1(e, 0, e.length);
//   }
//   skip(e) {
//     if (typeof e == "number") {
//       if (this.pos + e > this.len) throw indexOutOfRange$1(this, e);
//       this.pos += e;
//     } else
//       do if (this.pos >= this.len) throw indexOutOfRange$1(this);
//       while (this.buf[this.pos++] & 128);
//     return this;
//   }
//   skipType(e) {
//     switch (e) {
//       case 0:
//         this.skip();
//         break;
//       case 1:
//         this.skip(8);
//         break;
//       case 2:
//         this.skip(this.uint32());
//         break;
//       case 3:
//         for (; (e = this.uint32() & 7) !== 4; ) this.skipType(e);
//         break;
//       case 5:
//         this.skip(4);
//         break;
//       default:
//         throw Error(`invalid wire type ${e} at offset ${this.pos}`);
//     }
//     return this;
//   }
//   readLongVarint() {
//     const e = new LongBits$2(0, 0);
//     let t = 0;
//     if (this.len - this.pos > 4) {
//       for (; t < 4; ++t)
//         if (
//           ((e.lo = (e.lo | ((this.buf[this.pos] & 127) << (t * 7))) >>> 0),
//           this.buf[this.pos++] < 128)
//         )
//           return e;
//       if (
//         ((e.lo = (e.lo | ((this.buf[this.pos] & 127) << 28)) >>> 0),
//         (e.hi = (e.hi | ((this.buf[this.pos] & 127) >> 4)) >>> 0),
//         this.buf[this.pos++] < 128)
//       )
//         return e;
//       t = 0;
//     } else {
//       for (; t < 3; ++t) {
//         if (this.pos >= this.len) throw indexOutOfRange$1(this);
//         if (
//           ((e.lo = (e.lo | ((this.buf[this.pos] & 127) << (t * 7))) >>> 0),
//           this.buf[this.pos++] < 128)
//         )
//           return e;
//       }
//       return (
//         (e.lo = (e.lo | ((this.buf[this.pos++] & 127) << (t * 7))) >>> 0), e
//       );
//     }
//     if (this.len - this.pos > 4) {
//       for (; t < 5; ++t)
//         if (
//           ((e.hi = (e.hi | ((this.buf[this.pos] & 127) << (t * 7 + 3))) >>> 0),
//           this.buf[this.pos++] < 128)
//         )
//           return e;
//     } else
//       for (; t < 5; ++t) {
//         if (this.pos >= this.len) throw indexOutOfRange$1(this);
//         if (
//           ((e.hi = (e.hi | ((this.buf[this.pos] & 127) << (t * 7 + 3))) >>> 0),
//           this.buf[this.pos++] < 128)
//         )
//           return e;
//       }
//     throw Error("invalid varint encoding");
//   }
//   readFixed64() {
//     if (this.pos + 8 > this.len) throw indexOutOfRange$1(this, 8);
//     const e = readFixed32End(this.buf, (this.pos += 4)),
//       t = readFixed32End(this.buf, (this.pos += 4));
//     return new LongBits$2(e, t);
//   }
//   int64() {
//     return this.readLongVarint().toBigInt();
//   }
//   int64Number() {
//     return this.readLongVarint().toNumber();
//   }
//   int64String() {
//     return this.readLongVarint().toString();
//   }
//   uint64() {
//     return this.readLongVarint().toBigInt(!0);
//   }
//   uint64Number() {
//     const e = decodeUint8Array(this.buf, this.pos);
//     return (this.pos += encodingLength(e)), e;
//   }
//   uint64String() {
//     return this.readLongVarint().toString(!0);
//   }
//   sint64() {
//     return this.readLongVarint().zzDecode().toBigInt();
//   }
//   sint64Number() {
//     return this.readLongVarint().zzDecode().toNumber();
//   }
//   sint64String() {
//     return this.readLongVarint().zzDecode().toString();
//   }
//   fixed64() {
//     return this.readFixed64().toBigInt();
//   }
//   fixed64Number() {
//     return this.readFixed64().toNumber();
//   }
//   fixed64String() {
//     return this.readFixed64().toString();
//   }
//   sfixed64() {
//     return this.readFixed64().toBigInt();
//   }
//   sfixed64Number() {
//     return this.readFixed64().toNumber();
//   }
//   sfixed64String() {
//     return this.readFixed64().toString();
//   }
// }
// function createReader(r) {
//   return new Uint8ArrayReader(r instanceof Uint8Array ? r : r.subarray());
// }
// function decodeMessage$1(r, e, t) {
//   const n = createReader(r);
//   return e.decode(n, void 0, t);
// }
// function pool$1(r) {
//   const e = r ?? 8192,
//     t = e >>> 1;
//   let n,
//     i = e;
//   return function (a) {
//     if (a < 1 || a > t) return allocUnsafe(a);
//     i + a > e && ((n = allocUnsafe(e)), (i = 0));
//     const c = n.subarray(i, (i += a));
//     return i & 7 && (i = (i | 7) + 1), c;
//   };
// }
// let Op$1 = class {
//   constructor(e, t, n) {
//     y(this, "fn");
//     y(this, "len");
//     y(this, "next");
//     y(this, "val");
//     (this.fn = e), (this.len = t), (this.next = void 0), (this.val = n);
//   }
// };
// function noop$2() {}
// let State$1 = class {
//   constructor(e) {
//     y(this, "head");
//     y(this, "tail");
//     y(this, "len");
//     y(this, "next");
//     (this.head = e.head),
//       (this.tail = e.tail),
//       (this.len = e.len),
//       (this.next = e.states);
//   }
// };
// const bufferPool = pool$1();
// function alloc(r) {
//   return globalThis.Buffer != null ? allocUnsafe(r) : bufferPool(r);
// }
// class Uint8ArrayWriter {
//   constructor() {
//     y(this, "len");
//     y(this, "head");
//     y(this, "tail");
//     y(this, "states");
//     (this.len = 0),
//       (this.head = new Op$1(noop$2, 0, 0)),
//       (this.tail = this.head),
//       (this.states = null);
//   }
//   _push(e, t, n) {
//     return (
//       (this.tail = this.tail.next = new Op$1(e, t, n)), (this.len += t), this
//     );
//   }
//   uint32(e) {
//     return (
//       (this.len += (this.tail = this.tail.next =
//         new VarintOp$1(
//           (e = e >>> 0) < 128
//             ? 1
//             : e < 16384
//             ? 2
//             : e < 2097152
//             ? 3
//             : e < 268435456
//             ? 4
//             : 5,
//           e
//         )).len),
//       this
//     );
//   }
//   int32(e) {
//     return e < 0
//       ? this._push(writeVarint64$1, 10, LongBits$2.fromNumber(e))
//       : this.uint32(e);
//   }
//   sint32(e) {
//     return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
//   }
//   uint64(e) {
//     const t = LongBits$2.fromBigInt(e);
//     return this._push(writeVarint64$1, t.length(), t);
//   }
//   uint64Number(e) {
//     return this._push(encodeUint8Array, encodingLength(e), e);
//   }
//   uint64String(e) {
//     return this.uint64(BigInt(e));
//   }
//   int64(e) {
//     return this.uint64(e);
//   }
//   int64Number(e) {
//     return this.uint64Number(e);
//   }
//   int64String(e) {
//     return this.uint64String(e);
//   }
//   sint64(e) {
//     const t = LongBits$2.fromBigInt(e).zzEncode();
//     return this._push(writeVarint64$1, t.length(), t);
//   }
//   sint64Number(e) {
//     const t = LongBits$2.fromNumber(e).zzEncode();
//     return this._push(writeVarint64$1, t.length(), t);
//   }
//   sint64String(e) {
//     return this.sint64(BigInt(e));
//   }
//   bool(e) {
//     return this._push(writeByte$1, 1, e ? 1 : 0);
//   }
//   fixed32(e) {
//     return this._push(writeFixed32$1, 4, e >>> 0);
//   }
//   sfixed32(e) {
//     return this.fixed32(e);
//   }
//   fixed64(e) {
//     const t = LongBits$2.fromBigInt(e);
//     return this._push(writeFixed32$1, 4, t.lo)._push(writeFixed32$1, 4, t.hi);
//   }
//   fixed64Number(e) {
//     const t = LongBits$2.fromNumber(e);
//     return this._push(writeFixed32$1, 4, t.lo)._push(writeFixed32$1, 4, t.hi);
//   }
//   fixed64String(e) {
//     return this.fixed64(BigInt(e));
//   }
//   sfixed64(e) {
//     return this.fixed64(e);
//   }
//   sfixed64Number(e) {
//     return this.fixed64Number(e);
//   }
//   sfixed64String(e) {
//     return this.fixed64String(e);
//   }
//   float(e) {
//     return this._push(writeFloatLE, 4, e);
//   }
//   double(e) {
//     return this._push(writeDoubleLE, 8, e);
//   }
//   bytes(e) {
//     const t = e.length >>> 0;
//     return t === 0
//       ? this._push(writeByte$1, 1, 0)
//       : this.uint32(t)._push(writeBytes$1, t, e);
//   }
//   string(e) {
//     const t = length(e);
//     return t !== 0
//       ? this.uint32(t)._push(write$1, t, e)
//       : this._push(writeByte$1, 1, 0);
//   }
//   fork() {
//     return (
//       (this.states = new State$1(this)),
//       (this.head = this.tail = new Op$1(noop$2, 0, 0)),
//       (this.len = 0),
//       this
//     );
//   }
//   reset() {
//     return (
//       this.states != null
//         ? ((this.head = this.states.head),
//           (this.tail = this.states.tail),
//           (this.len = this.states.len),
//           (this.states = this.states.next))
//         : ((this.head = this.tail = new Op$1(noop$2, 0, 0)), (this.len = 0)),
//       this
//     );
//   }
//   ldelim() {
//     const e = this.head,
//       t = this.tail,
//       n = this.len;
//     return (
//       this.reset().uint32(n),
//       n !== 0 && ((this.tail.next = e.next), (this.tail = t), (this.len += n)),
//       this
//     );
//   }
//   finish() {
//     let e = this.head.next;
//     const t = alloc(this.len);
//     let n = 0;
//     for (; e != null; ) e.fn(e.val, t, n), (n += e.len), (e = e.next);
//     return t;
//   }
// }
// function writeByte$1(r, e, t) {
//   e[t] = r & 255;
// }
// function writeVarint32$1(r, e, t) {
//   for (; r > 127; ) (e[t++] = (r & 127) | 128), (r >>>= 7);
//   e[t] = r;
// }
// let VarintOp$1 = class extends Op$1 {
//   constructor(t, n) {
//     super(writeVarint32$1, t, n);
//     y(this, "next");
//     this.next = void 0;
//   }
// };
// function writeVarint64$1(r, e, t) {
//   for (; r.hi !== 0; )
//     (e[t++] = (r.lo & 127) | 128),
//       (r.lo = ((r.lo >>> 7) | (r.hi << 25)) >>> 0),
//       (r.hi >>>= 7);
//   for (; r.lo > 127; ) (e[t++] = (r.lo & 127) | 128), (r.lo = r.lo >>> 7);
//   e[t++] = r.lo;
// }
// function writeFixed32$1(r, e, t) {
//   (e[t] = r & 255),
//     (e[t + 1] = (r >>> 8) & 255),
//     (e[t + 2] = (r >>> 16) & 255),
//     (e[t + 3] = r >>> 24);
// }
// function writeBytes$1(r, e, t) {
//   e.set(r, t);
// }
// globalThis.Buffer != null &&
//   ((Uint8ArrayWriter.prototype.bytes = function (r) {
//     const e = r.length >>> 0;
//     return this.uint32(e), e > 0 && this._push(writeBytesBuffer, e, r), this;
//   }),
//   (Uint8ArrayWriter.prototype.string = function (r) {
//     const e = globalThis.Buffer.byteLength(r);
//     return this.uint32(e), e > 0 && this._push(writeStringBuffer$1, e, r), this;
//   }));
// function writeBytesBuffer(r, e, t) {
//   e.set(r, t);
// }
// function writeStringBuffer$1(r, e, t) {
//   r.length < 40
//     ? write$1(r, e, t)
//     : e.utf8Write != null
//     ? e.utf8Write(r, t)
//     : e.set(fromString(r), t);
// }
// function createWriter() {
//   return new Uint8ArrayWriter();
// }
// function encodeMessage(r, e) {
//   const t = createWriter();
//   return (
//     e.encode(r, t, {
//       lengthDelimited: !1,
//     }),
//     t.finish()
//   );
// }
// var CODEC_TYPES;
// (function (r) {
//   (r[(r.VARINT = 0)] = "VARINT"),
//     (r[(r.BIT64 = 1)] = "BIT64"),
//     (r[(r.LENGTH_DELIMITED = 2)] = "LENGTH_DELIMITED"),
//     (r[(r.START_GROUP = 3)] = "START_GROUP"),
//     (r[(r.END_GROUP = 4)] = "END_GROUP"),
//     (r[(r.BIT32 = 5)] = "BIT32");
// })(CODEC_TYPES || (CODEC_TYPES = {}));
// function createCodec(r, e, t, n) {
//   return {
//     name: r,
//     type: e,
//     encode: t,
//     decode: n,
//   };
// }
// function enumeration(r) {
//   function e(i) {
//     if (r[i.toString()] == null) throw new Error("Invalid enum value");
//     return r[i];
//   }
//   const t = function (o, a) {
//       const c = e(o);
//       a.int32(c);
//     },
//     n = function (o) {
//       const a = o.int32();
//       return e(a);
//     };
//   return createCodec("enum", CODEC_TYPES.VARINT, t, n);
// }
// function message(r, e) {
//   return createCodec("message", CODEC_TYPES.LENGTH_DELIMITED, r, e);
// }
// var KeyType$1;
// (function (r) {
//   (r.RSA = "RSA"), (r.Ed25519 = "Ed25519"), (r.Secp256k1 = "Secp256k1");
// })(KeyType$1 || (KeyType$1 = {}));
// var __KeyTypeValues$1;
// (function (r) {
//   (r[(r.RSA = 0)] = "RSA"),
//     (r[(r.Ed25519 = 1)] = "Ed25519"),
//     (r[(r.Secp256k1 = 2)] = "Secp256k1");
// })(__KeyTypeValues$1 || (__KeyTypeValues$1 = {}));
// (function (r) {
//   r.codec = () => enumeration(__KeyTypeValues$1);
// })(KeyType$1 || (KeyType$1 = {}));
// var PublicKey$1;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.Type != null &&
//               (n.uint32(8), KeyType$1.codec().encode(t.Type, n)),
//             t.Data != null && (n.uint32(18), n.bytes(t.Data)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {},
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.Type = KeyType$1.codec().decode(t);
//                 break;
//               case 2:
//                 i.Data = t.bytes();
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(PublicKey$1 || (PublicKey$1 = {}));
// var PrivateKey$1;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.Type != null &&
//               (n.uint32(8), KeyType$1.codec().encode(t.Type, n)),
//             t.Data != null && (n.uint32(18), n.bytes(t.Data)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {},
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.Type = KeyType$1.codec().decode(t);
//                 break;
//               case 2:
//                 i.Data = t.bytes();
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(PrivateKey$1 || (PrivateKey$1 = {}));
// let Ed25519PublicKey$1 = class {
//     constructor(e) {
//       y(this, "_key");
//       this._key = ensureKey$1(e, PUBLIC_KEY_BYTE_LENGTH$1);
//     }
//     verify(e, t) {
//       return hashAndVerify$5(this._key, t, e);
//     }
//     marshal() {
//       return this._key;
//     }
//     get bytes() {
//       return PublicKey$1.encode({
//         Type: KeyType$1.Ed25519,
//         Data: this.marshal(),
//       }).subarray();
//     }
//     equals(e) {
//       return equals(this.bytes, e.bytes);
//     }
//     hash() {
//       const e = sha256$2.digest(this.bytes);
//       return isPromise$5(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//     }
//   },
//   Ed25519PrivateKey$1 = class {
//     constructor(e, t) {
//       y(this, "_key");
//       y(this, "_publicKey");
//       (this._key = ensureKey$1(e, PRIVATE_KEY_BYTE_LENGTH$1)),
//         (this._publicKey = ensureKey$1(t, PUBLIC_KEY_BYTE_LENGTH$1));
//     }
//     sign(e) {
//       return hashAndSign$5(this._key, e);
//     }
//     get public() {
//       return new Ed25519PublicKey$1(this._publicKey);
//     }
//     marshal() {
//       return this._key;
//     }
//     get bytes() {
//       return PrivateKey$1.encode({
//         Type: KeyType$1.Ed25519,
//         Data: this.marshal(),
//       }).subarray();
//     }
//     equals(e) {
//       return equals(this.bytes, e.bytes);
//     }
//     async hash() {
//       const e = sha256$2.digest(this.bytes);
//       let t;
//       return isPromise$5(e) ? ({ bytes: t } = await e) : (t = e.bytes), t;
//     }
//     async id() {
//       const e = identity$1.digest(this.public.bytes);
//       return base58btc.encode(e.bytes).substring(1);
//     }
//     async export(e, t = "libp2p-key") {
//       if (t === "libp2p-key") return exporter$1(this.bytes, e);
//       throw new CodeError$2(
//         `export format '${t}' is not supported`,
//         "ERR_INVALID_EXPORT_FORMAT"
//       );
//     }
//   };
// function unmarshalEd25519PrivateKey$1(r) {
//   if (r.length > PRIVATE_KEY_BYTE_LENGTH$1) {
//     r = ensureKey$1(r, PRIVATE_KEY_BYTE_LENGTH$1 + PUBLIC_KEY_BYTE_LENGTH$1);
//     const n = r.subarray(0, PRIVATE_KEY_BYTE_LENGTH$1),
//       i = r.subarray(PRIVATE_KEY_BYTE_LENGTH$1, r.length);
//     return new Ed25519PrivateKey$1(n, i);
//   }
//   r = ensureKey$1(r, PRIVATE_KEY_BYTE_LENGTH$1);
//   const e = r.subarray(0, PRIVATE_KEY_BYTE_LENGTH$1),
//     t = r.subarray(PUBLIC_KEY_BYTE_LENGTH$1);
//   return new Ed25519PrivateKey$1(e, t);
// }
// function unmarshalEd25519PublicKey$1(r) {
//   return (
//     (r = ensureKey$1(r, PUBLIC_KEY_BYTE_LENGTH$1)), new Ed25519PublicKey$1(r)
//   );
// }
// async function generateKeyPair$6() {
//   const { privateKey: r, publicKey: e } = generateKey$5();
//   return new Ed25519PrivateKey$1(r, e);
// }
// async function generateKeyPairFromSeed$1(r) {
//   const { privateKey: e, publicKey: t } = generateKeyFromSeed$1(r);
//   return new Ed25519PrivateKey$1(e, t);
// }
// function ensureKey$1(r, e) {
//   if (((r = Uint8Array.from(r ?? [])), r.length !== e))
//     throw new CodeError$2(
//       `Key must be a Uint8Array of length ${e}, got ${r.length}`,
//       "ERR_INVALID_KEY_TYPE"
//     );
//   return r;
// }
// const Ed25519$1 = Object.freeze(
//   Object.defineProperty(
//     {
//       __proto__: null,
//       Ed25519PrivateKey: Ed25519PrivateKey$1,
//       Ed25519PublicKey: Ed25519PublicKey$1,
//       generateKeyPair: generateKeyPair$6,
//       generateKeyPairFromSeed: generateKeyPairFromSeed$1,
//       unmarshalEd25519PrivateKey: unmarshalEd25519PrivateKey$1,
//       unmarshalEd25519PublicKey: unmarshalEd25519PublicKey$1,
//     },
//     Symbol.toStringTag,
//     {
//       value: "Module",
//     }
//   )
// );
// function toString$3(r, e = "utf8") {
//   const t = BASES[e];
//   if (t == null) throw new Error(`Unsupported encoding "${e}"`);
//   return t.encoder.encode(r).substring(1);
// }
// async function importer(r, e) {
//   const t = base64$2.decode(r);
//   return create$3().decrypt(t, e);
// }
// function randomBytes$1(r) {
//   if (isNaN(r) || r <= 0)
//     throw new CodeError$2(
//       "random bytes length must be a Number bigger than 0",
//       "ERR_INVALID_LENGTH"
//     );
//   return randomBytes$2(r);
// }
// class HMAC extends Hash {
//   constructor(e, t) {
//     super(), (this.finished = !1), (this.destroyed = !1), hash$1(e);
//     const n = toBytes$2(t);
//     if (((this.iHash = e.create()), typeof this.iHash.update != "function"))
//       throw new Error("Expected instance of class which extends utils.Hash");
//     (this.blockLen = this.iHash.blockLen),
//       (this.outputLen = this.iHash.outputLen);
//     const i = this.blockLen,
//       o = new Uint8Array(i);
//     o.set(n.length > i ? e.create().update(n).digest() : n);
//     for (let a = 0; a < o.length; a++) o[a] ^= 54;
//     this.iHash.update(o), (this.oHash = e.create());
//     for (let a = 0; a < o.length; a++) o[a] ^= 106;
//     this.oHash.update(o), o.fill(0);
//   }
//   update(e) {
//     return exists$1(this), this.iHash.update(e), this;
//   }
//   digestInto(e) {
//     exists$1(this),
//       bytes$1(e, this.outputLen),
//       (this.finished = !0),
//       this.iHash.digestInto(e),
//       this.oHash.update(e),
//       this.oHash.digestInto(e),
//       this.destroy();
//   }
//   digest() {
//     const e = new Uint8Array(this.oHash.outputLen);
//     return this.digestInto(e), e;
//   }
//   _cloneInto(e) {
//     e || (e = Object.create(Object.getPrototypeOf(this), {}));
//     const {
//       oHash: t,
//       iHash: n,
//       finished: i,
//       destroyed: o,
//       blockLen: a,
//       outputLen: c,
//     } = this;
//     return (
//       (e = e),
//       (e.finished = i),
//       (e.destroyed = o),
//       (e.blockLen = a),
//       (e.outputLen = c),
//       (e.oHash = t._cloneInto(e.oHash)),
//       (e.iHash = n._cloneInto(e.iHash)),
//       e
//     );
//   }
//   destroy() {
//     (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
//   }
// }
// const hmac$1 = (r, e, t) => new HMAC(r, e).update(t).digest();
// hmac$1.create = (r, e) => new HMAC(r, e);
// function pbkdf2Init(r, e, t, n) {
//   hash$1(r);
//   const i = checkOpts$1(
//       {
//         dkLen: 32,
//         asyncTick: 10,
//       },
//       n
//     ),
//     { c: o, dkLen: a, asyncTick: c } = i;
//   if ((number$2(o), number$2(a), number$2(c), o < 1))
//     throw new Error("PBKDF2: iterations (c) should be >= 1");
//   const u = toBytes$2(e),
//     l = toBytes$2(t),
//     h = new Uint8Array(a),
//     f = hmac$1.create(r, u),
//     d = f._cloneInto().update(l);
//   return {
//     c: o,
//     dkLen: a,
//     asyncTick: c,
//     DK: h,
//     PRF: f,
//     PRFSalt: d,
//   };
// }
// function pbkdf2Output(r, e, t, n, i) {
//   return r.destroy(), e.destroy(), n && n.destroy(), i.fill(0), t;
// }
// async function pbkdf2Async(r, e, t, n) {
//   const {
//     c: i,
//     dkLen: o,
//     asyncTick: a,
//     DK: c,
//     PRF: u,
//     PRFSalt: l,
//   } = pbkdf2Init(r, e, t, n);
//   let h;
//   const f = new Uint8Array(4),
//     d = createView$1(f),
//     p = new Uint8Array(u.outputLen);
//   for (let g = 1, m = 0; m < o; g++, m += u.outputLen) {
//     const b = c.subarray(m, m + u.outputLen);
//     d.setInt32(0, g, !1),
//       (h = l._cloneInto(h)).update(f).digestInto(p),
//       b.set(p.subarray(0, b.length)),
//       await asyncLoop(i - 1, a, () => {
//         u._cloneInto(h).update(p).digestInto(p);
//         for (let _ = 0; _ < b.length; _++) b[_] ^= p[_];
//       });
//   }
//   return pbkdf2Output(u, l, c, h, p);
// }
// /*!
//  * MIT License
//  *
//  * Copyright (c) 2017-2022 Peculiar Ventures, LLC
//  *
//  * Permission is hereby granted, free of charge, to any person obtaining a copy
//  * of this software and associated documentation files (the "Software"), to deal
//  * in the Software without restriction, including without limitation the rights
//  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  * copies of the Software, and to permit persons to whom the Software is
//  * furnished to do so, subject to the following conditions:
//  *
//  * The above copyright notice and this permission notice shall be included in all
//  * copies or substantial portions of the Software.
//  *
//  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  * SOFTWARE.
//  *
//  */
// const ARRAY_BUFFER_NAME = "[object ArrayBuffer]";
// class BufferSourceConverter {
//   static isArrayBuffer(e) {
//     return Object.prototype.toString.call(e) === ARRAY_BUFFER_NAME;
//   }
//   static toArrayBuffer(e) {
//     return this.isArrayBuffer(e)
//       ? e
//       : e.byteLength === e.buffer.byteLength ||
//         (e.byteOffset === 0 && e.byteLength === e.buffer.byteLength)
//       ? e.buffer
//       : this.toUint8Array(e.buffer).slice(
//           e.byteOffset,
//           e.byteOffset + e.byteLength
//         ).buffer;
//   }
//   static toUint8Array(e) {
//     return this.toView(e, Uint8Array);
//   }
//   static toView(e, t) {
//     if (e.constructor === t) return e;
//     if (this.isArrayBuffer(e)) return new t(e);
//     if (this.isArrayBufferView(e))
//       return new t(e.buffer, e.byteOffset, e.byteLength);
//     throw new TypeError(
//       "The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"
//     );
//   }
//   static isBufferSource(e) {
//     return this.isArrayBufferView(e) || this.isArrayBuffer(e);
//   }
//   static isArrayBufferView(e) {
//     return ArrayBuffer.isView(e) || (e && this.isArrayBuffer(e.buffer));
//   }
//   static isEqual(e, t) {
//     const n = BufferSourceConverter.toUint8Array(e),
//       i = BufferSourceConverter.toUint8Array(t);
//     if (n.length !== i.byteLength) return !1;
//     for (let o = 0; o < n.length; o++) if (n[o] !== i[o]) return !1;
//     return !0;
//   }
//   static concat(...e) {
//     let t;
//     (Array.isArray(e[0]) && !(e[1] instanceof Function)) ||
//     (Array.isArray(e[0]) && e[1] instanceof Function)
//       ? (t = e[0])
//       : e[e.length - 1] instanceof Function
//       ? (t = e.slice(0, e.length - 1))
//       : (t = e);
//     let n = 0;
//     for (const a of t) n += a.byteLength;
//     const i = new Uint8Array(n);
//     let o = 0;
//     for (const a of t) {
//       const c = this.toUint8Array(a);
//       i.set(c, o), (o += c.length);
//     }
//     return e[e.length - 1] instanceof Function
//       ? this.toView(i, e[e.length - 1])
//       : i.buffer;
//   }
// }
// const STRING_TYPE = "string",
//   HEX_REGEX = /^[0-9a-f]+$/i,
//   BASE64_REGEX =
//     /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
//   BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;
// class Utf8Converter {
//   static fromString(e) {
//     const t = unescape(encodeURIComponent(e)),
//       n = new Uint8Array(t.length);
//     for (let i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
//     return n.buffer;
//   }
//   static toString(e) {
//     const t = BufferSourceConverter.toUint8Array(e);
//     let n = "";
//     for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
//     return decodeURIComponent(escape(n));
//   }
// }
// class Utf16Converter {
//   static toString(e, t = !1) {
//     const n = BufferSourceConverter.toArrayBuffer(e),
//       i = new DataView(n);
//     let o = "";
//     for (let a = 0; a < n.byteLength; a += 2) {
//       const c = i.getUint16(a, t);
//       o += String.fromCharCode(c);
//     }
//     return o;
//   }
//   static fromString(e, t = !1) {
//     const n = new ArrayBuffer(e.length * 2),
//       i = new DataView(n);
//     for (let o = 0; o < e.length; o++) i.setUint16(o * 2, e.charCodeAt(o), t);
//     return n;
//   }
// }
// class Convert {
//   static isHex(e) {
//     return typeof e === STRING_TYPE && HEX_REGEX.test(e);
//   }
//   static isBase64(e) {
//     return typeof e === STRING_TYPE && BASE64_REGEX.test(e);
//   }
//   static isBase64Url(e) {
//     return typeof e === STRING_TYPE && BASE64URL_REGEX.test(e);
//   }
//   static ToString(e, t = "utf8") {
//     const n = BufferSourceConverter.toUint8Array(e);
//     switch (t.toLowerCase()) {
//       case "utf8":
//         return this.ToUtf8String(n);
//       case "binary":
//         return this.ToBinary(n);
//       case "hex":
//         return this.ToHex(n);
//       case "base64":
//         return this.ToBase64(n);
//       case "base64url":
//         return this.ToBase64Url(n);
//       case "utf16le":
//         return Utf16Converter.toString(n, !0);
//       case "utf16":
//       case "utf16be":
//         return Utf16Converter.toString(n);
//       default:
//         throw new Error(`Unknown type of encoding '${t}'`);
//     }
//   }
//   static FromString(e, t = "utf8") {
//     if (!e) return new ArrayBuffer(0);
//     switch (t.toLowerCase()) {
//       case "utf8":
//         return this.FromUtf8String(e);
//       case "binary":
//         return this.FromBinary(e);
//       case "hex":
//         return this.FromHex(e);
//       case "base64":
//         return this.FromBase64(e);
//       case "base64url":
//         return this.FromBase64Url(e);
//       case "utf16le":
//         return Utf16Converter.fromString(e, !0);
//       case "utf16":
//       case "utf16be":
//         return Utf16Converter.fromString(e);
//       default:
//         throw new Error(`Unknown type of encoding '${t}'`);
//     }
//   }
//   static ToBase64(e) {
//     const t = BufferSourceConverter.toUint8Array(e);
//     if (typeof btoa < "u") {
//       const n = this.ToString(t, "binary");
//       return btoa(n);
//     } else return Buffer.from(t).toString("base64");
//   }
//   static FromBase64(e) {
//     const t = this.formatString(e);
//     if (!t) return new ArrayBuffer(0);
//     if (!Convert.isBase64(t))
//       throw new TypeError("Argument 'base64Text' is not Base64 encoded");
//     return typeof atob < "u"
//       ? this.FromBinary(atob(t))
//       : new Uint8Array(Buffer.from(t, "base64")).buffer;
//   }
//   static FromBase64Url(e) {
//     const t = this.formatString(e);
//     if (!t) return new ArrayBuffer(0);
//     if (!Convert.isBase64Url(t))
//       throw new TypeError("Argument 'base64url' is not Base64Url encoded");
//     return this.FromBase64(
//       this.Base64Padding(t.replace(/\-/g, "+").replace(/\_/g, "/"))
//     );
//   }
//   static ToBase64Url(e) {
//     return this.ToBase64(e)
//       .replace(/\+/g, "-")
//       .replace(/\//g, "_")
//       .replace(/\=/g, "");
//   }
//   static FromUtf8String(e, t = Convert.DEFAULT_UTF8_ENCODING) {
//     switch (t) {
//       case "ascii":
//         return this.FromBinary(e);
//       case "utf8":
//         return Utf8Converter.fromString(e);
//       case "utf16":
//       case "utf16be":
//         return Utf16Converter.fromString(e);
//       case "utf16le":
//       case "usc2":
//         return Utf16Converter.fromString(e, !0);
//       default:
//         throw new Error(`Unknown type of encoding '${t}'`);
//     }
//   }
//   static ToUtf8String(e, t = Convert.DEFAULT_UTF8_ENCODING) {
//     switch (t) {
//       case "ascii":
//         return this.ToBinary(e);
//       case "utf8":
//         return Utf8Converter.toString(e);
//       case "utf16":
//       case "utf16be":
//         return Utf16Converter.toString(e);
//       case "utf16le":
//       case "usc2":
//         return Utf16Converter.toString(e, !0);
//       default:
//         throw new Error(`Unknown type of encoding '${t}'`);
//     }
//   }
//   static FromBinary(e) {
//     const t = e.length,
//       n = new Uint8Array(t);
//     for (let i = 0; i < t; i++) n[i] = e.charCodeAt(i);
//     return n.buffer;
//   }
//   static ToBinary(e) {
//     const t = BufferSourceConverter.toUint8Array(e);
//     let n = "";
//     for (let i = 0; i < t.length; i++) n += String.fromCharCode(t[i]);
//     return n;
//   }
//   static ToHex(e) {
//     const t = BufferSourceConverter.toUint8Array(e);
//     let n = "";
//     const i = t.length;
//     for (let o = 0; o < i; o++) {
//       const a = t[o];
//       a < 16 && (n += "0"), (n += a.toString(16));
//     }
//     return n;
//   }
//   static FromHex(e) {
//     let t = this.formatString(e);
//     if (!t) return new ArrayBuffer(0);
//     if (!Convert.isHex(t))
//       throw new TypeError("Argument 'hexString' is not HEX encoded");
//     t.length % 2 && (t = `0${t}`);
//     const n = new Uint8Array(t.length / 2);
//     for (let i = 0; i < t.length; i = i + 2) {
//       const o = t.slice(i, i + 2);
//       n[i / 2] = parseInt(o, 16);
//     }
//     return n.buffer;
//   }
//   static ToUtf16String(e, t = !1) {
//     return Utf16Converter.toString(e, t);
//   }
//   static FromUtf16String(e, t = !1) {
//     return Utf16Converter.fromString(e, t);
//   }
//   static Base64Padding(e) {
//     const t = 4 - (e.length % 4);
//     if (t < 4) for (let n = 0; n < t; n++) e += "=";
//     return e;
//   }
//   static formatString(e) {
//     return (e == null ? void 0 : e.replace(/[\n\r\t ]/g, "")) || "";
//   }
// }
// Convert.DEFAULT_UTF8_ENCODING = "utf8";
// /*!
//  Copyright (c) Peculiar Ventures, LLC
// */
// function utilFromBase(r, e) {
//   let t = 0;
//   if (r.length === 1) return r[0];
//   for (let n = r.length - 1; n >= 0; n--)
//     t += r[r.length - 1 - n] * Math.pow(2, e * n);
//   return t;
// }
// function utilToBase(r, e, t = -1) {
//   const n = t;
//   let i = r,
//     o = 0,
//     a = Math.pow(2, e);
//   for (let c = 1; c < 8; c++) {
//     if (r < a) {
//       let u;
//       if (n < 0) (u = new ArrayBuffer(c)), (o = c);
//       else {
//         if (n < c) return new ArrayBuffer(0);
//         (u = new ArrayBuffer(n)), (o = n);
//       }
//       const l = new Uint8Array(u);
//       for (let h = c - 1; h >= 0; h--) {
//         const f = Math.pow(2, h * e);
//         (l[o - h - 1] = Math.floor(i / f)), (i -= l[o - h - 1] * f);
//       }
//       return u;
//     }
//     a *= Math.pow(2, e);
//   }
//   return new ArrayBuffer(0);
// }
// function utilConcatView(...r) {
//   let e = 0,
//     t = 0;
//   for (const o of r) e += o.length;
//   const n = new ArrayBuffer(e),
//     i = new Uint8Array(n);
//   for (const o of r) i.set(o, t), (t += o.length);
//   return i;
// }
// function utilDecodeTC() {
//   const r = new Uint8Array(this.valueHex);
//   if (this.valueHex.byteLength >= 2) {
//     const c = r[0] === 255 && r[1] & 128,
//       u = r[0] === 0 && (r[1] & 128) === 0;
//     (c || u) && this.warnings.push("Needlessly long format");
//   }
//   const e = new ArrayBuffer(this.valueHex.byteLength),
//     t = new Uint8Array(e);
//   for (let c = 0; c < this.valueHex.byteLength; c++) t[c] = 0;
//   t[0] = r[0] & 128;
//   const n = utilFromBase(t, 8),
//     i = new ArrayBuffer(this.valueHex.byteLength),
//     o = new Uint8Array(i);
//   for (let c = 0; c < this.valueHex.byteLength; c++) o[c] = r[c];
//   return (o[0] &= 127), utilFromBase(o, 8) - n;
// }
// function utilEncodeTC(r) {
//   const e = r < 0 ? r * -1 : r;
//   let t = 128;
//   for (let n = 1; n < 8; n++) {
//     if (e <= t) {
//       if (r < 0) {
//         const a = t - e,
//           c = utilToBase(a, 8, n),
//           u = new Uint8Array(c);
//         return (u[0] |= 128), c;
//       }
//       let i = utilToBase(e, 8, n),
//         o = new Uint8Array(i);
//       if (o[0] & 128) {
//         const a = i.slice(0),
//           c = new Uint8Array(a);
//         (i = new ArrayBuffer(i.byteLength + 1)), (o = new Uint8Array(i));
//         for (let u = 0; u < a.byteLength; u++) o[u + 1] = c[u];
//         o[0] = 0;
//       }
//       return i;
//     }
//     t *= Math.pow(2, 8);
//   }
//   return new ArrayBuffer(0);
// }
// function isEqualBuffer(r, e) {
//   if (r.byteLength !== e.byteLength) return !1;
//   const t = new Uint8Array(r),
//     n = new Uint8Array(e);
//   for (let i = 0; i < t.length; i++) if (t[i] !== n[i]) return !1;
//   return !0;
// }
// function padNumber(r, e) {
//   const t = r.toString(10);
//   if (e < t.length) return "";
//   const n = e - t.length,
//     i = new Array(n);
//   for (let a = 0; a < n; a++) i[a] = "0";
//   return i.join("").concat(t);
// }
// /*!
//  * Copyright (c) 2014, GMO GlobalSign
//  * Copyright (c) 2015-2022, Peculiar Ventures
//  * All rights reserved.
//  *
//  * Author 2014-2019, Yury Strozhevsky
//  *
//  * Redistribution and use in source and binary forms, with or without modification,
//  * are permitted provided that the following conditions are met:
//  *
//  * * Redistributions of source code must retain the above copyright notice, this
//  *   list of conditions and the following disclaimer.
//  *
//  * * Redistributions in binary form must reproduce the above copyright notice, this
//  *   list of conditions and the following disclaimer in the documentation and/or
//  *   other materials provided with the distribution.
//  *
//  * * Neither the name of the copyright holder nor the names of its
//  *   contributors may be used to endorse or promote products derived from
//  *   this software without specific prior written permission.
//  *
//  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
//  * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
//  * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
//  * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
//  * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
//  * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
//  * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
//  * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
//  * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
//  * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//  *
//  */
// function assertBigInt() {
//   if (typeof BigInt > "u")
//     throw new Error(
//       "BigInt is not defined. Your environment doesn't implement BigInt."
//     );
// }
// function concat(r) {
//   let e = 0,
//     t = 0;
//   for (let i = 0; i < r.length; i++) {
//     const o = r[i];
//     e += o.byteLength;
//   }
//   const n = new Uint8Array(e);
//   for (let i = 0; i < r.length; i++) {
//     const o = r[i];
//     n.set(new Uint8Array(o), t), (t += o.byteLength);
//   }
//   return n.buffer;
// }
// function checkBufferParams(r, e, t, n) {
//   return e instanceof Uint8Array
//     ? e.byteLength
//       ? t < 0
//         ? ((r.error = "Wrong parameter: inputOffset less than zero"), !1)
//         : n < 0
//         ? ((r.error = "Wrong parameter: inputLength less than zero"), !1)
//         : e.byteLength - t - n < 0
//         ? ((r.error =
//             "End of input reached before message was fully decoded (inconsistent offset and length values)"),
//           !1)
//         : !0
//       : ((r.error = "Wrong parameter: inputBuffer has zero length"), !1)
//     : ((r.error = "Wrong parameter: inputBuffer must be 'Uint8Array'"), !1);
// }
// class ViewWriter {
//   constructor() {
//     this.items = [];
//   }
//   write(e) {
//     this.items.push(e);
//   }
//   final() {
//     return concat(this.items);
//   }
// }
// const powers2 = [new Uint8Array([1])],
//   digitsString = "0123456789",
//   EMPTY_STRING = "",
//   EMPTY_BUFFER$1 = new ArrayBuffer(0),
//   EMPTY_VIEW = new Uint8Array(0),
//   END_OF_CONTENT_NAME = "EndOfContent",
//   OCTET_STRING_NAME = "OCTET STRING",
//   BIT_STRING_NAME = "BIT STRING";
// function HexBlock(r) {
//   var e;
//   return (
//     (e = class extends r {
//       constructor(...n) {
//         var i;
//         super(...n);
//         const o = n[0] || {};
//         (this.isHexOnly = (i = o.isHexOnly) !== null && i !== void 0 ? i : !1),
//           (this.valueHexView = o.valueHex
//             ? BufferSourceConverter.toUint8Array(o.valueHex)
//             : EMPTY_VIEW);
//       }
//       get valueHex() {
//         return this.valueHexView.slice().buffer;
//       }
//       set valueHex(n) {
//         this.valueHexView = new Uint8Array(n);
//       }
//       fromBER(n, i, o) {
//         const a = n instanceof ArrayBuffer ? new Uint8Array(n) : n;
//         if (!checkBufferParams(this, a, i, o)) return -1;
//         const c = i + o;
//         return (
//           (this.valueHexView = a.subarray(i, c)),
//           this.valueHexView.length
//             ? ((this.blockLength = o), c)
//             : (this.warnings.push("Zero buffer length"), i)
//         );
//       }
//       toBER(n = !1) {
//         return this.isHexOnly
//           ? n
//             ? new ArrayBuffer(this.valueHexView.byteLength)
//             : this.valueHexView.byteLength ===
//               this.valueHexView.buffer.byteLength
//             ? this.valueHexView.buffer
//             : this.valueHexView.slice().buffer
//           : ((this.error = "Flag 'isHexOnly' is not set, abort"),
//             EMPTY_BUFFER$1);
//       }
//       toJSON() {
//         return {
//           ...super.toJSON(),
//           isHexOnly: this.isHexOnly,
//           valueHex: Convert.ToHex(this.valueHexView),
//         };
//       }
//     }),
//     (e.NAME = "hexBlock"),
//     e
//   );
// }
// class LocalBaseBlock {
//   constructor({
//     blockLength: e = 0,
//     error: t = EMPTY_STRING,
//     warnings: n = [],
//     valueBeforeDecode: i = EMPTY_VIEW,
//   } = {}) {
//     (this.blockLength = e),
//       (this.error = t),
//       (this.warnings = n),
//       (this.valueBeforeDecodeView = BufferSourceConverter.toUint8Array(i));
//   }
//   static blockName() {
//     return this.NAME;
//   }
//   get valueBeforeDecode() {
//     return this.valueBeforeDecodeView.slice().buffer;
//   }
//   set valueBeforeDecode(e) {
//     this.valueBeforeDecodeView = new Uint8Array(e);
//   }
//   toJSON() {
//     return {
//       blockName: this.constructor.NAME,
//       blockLength: this.blockLength,
//       error: this.error,
//       warnings: this.warnings,
//       valueBeforeDecode: Convert.ToHex(this.valueBeforeDecodeView),
//     };
//   }
// }
// LocalBaseBlock.NAME = "baseBlock";
// class ValueBlock extends LocalBaseBlock {
//   fromBER(e, t, n) {
//     throw TypeError(
//       "User need to make a specific function in a class which extends 'ValueBlock'"
//     );
//   }
//   toBER(e, t) {
//     throw TypeError(
//       "User need to make a specific function in a class which extends 'ValueBlock'"
//     );
//   }
// }
// ValueBlock.NAME = "valueBlock";
// class LocalIdentificationBlock extends HexBlock(LocalBaseBlock) {
//   constructor({ idBlock: e = {} } = {}) {
//     var t, n, i, o;
//     super(),
//       e
//         ? ((this.isHexOnly =
//             (t = e.isHexOnly) !== null && t !== void 0 ? t : !1),
//           (this.valueHexView = e.valueHex
//             ? BufferSourceConverter.toUint8Array(e.valueHex)
//             : EMPTY_VIEW),
//           (this.tagClass = (n = e.tagClass) !== null && n !== void 0 ? n : -1),
//           (this.tagNumber =
//             (i = e.tagNumber) !== null && i !== void 0 ? i : -1),
//           (this.isConstructed =
//             (o = e.isConstructed) !== null && o !== void 0 ? o : !1))
//         : ((this.tagClass = -1),
//           (this.tagNumber = -1),
//           (this.isConstructed = !1));
//   }
//   toBER(e = !1) {
//     let t = 0;
//     switch (this.tagClass) {
//       case 1:
//         t |= 0;
//         break;
//       case 2:
//         t |= 64;
//         break;
//       case 3:
//         t |= 128;
//         break;
//       case 4:
//         t |= 192;
//         break;
//       default:
//         return (this.error = "Unknown tag class"), EMPTY_BUFFER$1;
//     }
//     if (
//       (this.isConstructed && (t |= 32), this.tagNumber < 31 && !this.isHexOnly)
//     ) {
//       const i = new Uint8Array(1);
//       if (!e) {
//         let o = this.tagNumber;
//         (o &= 31), (t |= o), (i[0] = t);
//       }
//       return i.buffer;
//     }
//     if (!this.isHexOnly) {
//       const i = utilToBase(this.tagNumber, 7),
//         o = new Uint8Array(i),
//         a = i.byteLength,
//         c = new Uint8Array(a + 1);
//       if (((c[0] = t | 31), !e)) {
//         for (let u = 0; u < a - 1; u++) c[u + 1] = o[u] | 128;
//         c[a] = o[a - 1];
//       }
//       return c.buffer;
//     }
//     const n = new Uint8Array(this.valueHexView.byteLength + 1);
//     if (((n[0] = t | 31), !e)) {
//       const i = this.valueHexView;
//       for (let o = 0; o < i.length - 1; o++) n[o + 1] = i[o] | 128;
//       n[this.valueHexView.byteLength] = i[i.length - 1];
//     }
//     return n.buffer;
//   }
//   fromBER(e, t, n) {
//     const i = BufferSourceConverter.toUint8Array(e);
//     if (!checkBufferParams(this, i, t, n)) return -1;
//     const o = i.subarray(t, t + n);
//     if (o.length === 0) return (this.error = "Zero buffer length"), -1;
//     switch (o[0] & 192) {
//       case 0:
//         this.tagClass = 1;
//         break;
//       case 64:
//         this.tagClass = 2;
//         break;
//       case 128:
//         this.tagClass = 3;
//         break;
//       case 192:
//         this.tagClass = 4;
//         break;
//       default:
//         return (this.error = "Unknown tag class"), -1;
//     }
//     (this.isConstructed = (o[0] & 32) === 32), (this.isHexOnly = !1);
//     const c = o[0] & 31;
//     if (c !== 31) (this.tagNumber = c), (this.blockLength = 1);
//     else {
//       let u = 1,
//         l = (this.valueHexView = new Uint8Array(255)),
//         h = 255;
//       for (; o[u] & 128; ) {
//         if (((l[u - 1] = o[u] & 127), u++, u >= o.length))
//           return (
//             (this.error =
//               "End of input reached before message was fully decoded"),
//             -1
//           );
//         if (u === h) {
//           h += 255;
//           const d = new Uint8Array(h);
//           for (let p = 0; p < l.length; p++) d[p] = l[p];
//           l = this.valueHexView = new Uint8Array(h);
//         }
//       }
//       (this.blockLength = u + 1), (l[u - 1] = o[u] & 127);
//       const f = new Uint8Array(u);
//       for (let d = 0; d < u; d++) f[d] = l[d];
//       (l = this.valueHexView = new Uint8Array(u)),
//         l.set(f),
//         this.blockLength <= 9
//           ? (this.tagNumber = utilFromBase(l, 7))
//           : ((this.isHexOnly = !0),
//             this.warnings.push("Tag too long, represented as hex-coded"));
//     }
//     if (this.tagClass === 1 && this.isConstructed)
//       switch (this.tagNumber) {
//         case 1:
//         case 2:
//         case 5:
//         case 6:
//         case 9:
//         case 13:
//         case 14:
//         case 23:
//         case 24:
//         case 31:
//         case 32:
//         case 33:
//         case 34:
//           return (
//             (this.error = "Constructed encoding used for primitive type"), -1
//           );
//       }
//     return t + this.blockLength;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       tagClass: this.tagClass,
//       tagNumber: this.tagNumber,
//       isConstructed: this.isConstructed,
//     };
//   }
// }
// LocalIdentificationBlock.NAME = "identificationBlock";
// class LocalLengthBlock extends LocalBaseBlock {
//   constructor({ lenBlock: e = {} } = {}) {
//     var t, n, i;
//     super(),
//       (this.isIndefiniteForm =
//         (t = e.isIndefiniteForm) !== null && t !== void 0 ? t : !1),
//       (this.longFormUsed =
//         (n = e.longFormUsed) !== null && n !== void 0 ? n : !1),
//       (this.length = (i = e.length) !== null && i !== void 0 ? i : 0);
//   }
//   fromBER(e, t, n) {
//     const i = BufferSourceConverter.toUint8Array(e);
//     if (!checkBufferParams(this, i, t, n)) return -1;
//     const o = i.subarray(t, t + n);
//     if (o.length === 0) return (this.error = "Zero buffer length"), -1;
//     if (o[0] === 255)
//       return (this.error = "Length block 0xFF is reserved by standard"), -1;
//     if (((this.isIndefiniteForm = o[0] === 128), this.isIndefiniteForm))
//       return (this.blockLength = 1), t + this.blockLength;
//     if (((this.longFormUsed = !!(o[0] & 128)), this.longFormUsed === !1))
//       return (this.length = o[0]), (this.blockLength = 1), t + this.blockLength;
//     const a = o[0] & 127;
//     if (a > 8) return (this.error = "Too big integer"), -1;
//     if (a + 1 > o.length)
//       return (
//         (this.error = "End of input reached before message was fully decoded"),
//         -1
//       );
//     const c = t + 1,
//       u = i.subarray(c, c + a);
//     return (
//       u[a - 1] === 0 && this.warnings.push("Needlessly long encoded length"),
//       (this.length = utilFromBase(u, 8)),
//       this.longFormUsed &&
//         this.length <= 127 &&
//         this.warnings.push("Unnecessary usage of long length form"),
//       (this.blockLength = a + 1),
//       t + this.blockLength
//     );
//   }
//   toBER(e = !1) {
//     let t, n;
//     if ((this.length > 127 && (this.longFormUsed = !0), this.isIndefiniteForm))
//       return (
//         (t = new ArrayBuffer(1)),
//         e === !1 && ((n = new Uint8Array(t)), (n[0] = 128)),
//         t
//       );
//     if (this.longFormUsed) {
//       const i = utilToBase(this.length, 8);
//       if (i.byteLength > 127)
//         return (this.error = "Too big length"), EMPTY_BUFFER$1;
//       if (((t = new ArrayBuffer(i.byteLength + 1)), e)) return t;
//       const o = new Uint8Array(i);
//       (n = new Uint8Array(t)), (n[0] = i.byteLength | 128);
//       for (let a = 0; a < i.byteLength; a++) n[a + 1] = o[a];
//       return t;
//     }
//     return (
//       (t = new ArrayBuffer(1)),
//       e === !1 && ((n = new Uint8Array(t)), (n[0] = this.length)),
//       t
//     );
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       isIndefiniteForm: this.isIndefiniteForm,
//       longFormUsed: this.longFormUsed,
//       length: this.length,
//     };
//   }
// }
// LocalLengthBlock.NAME = "lengthBlock";
// const typeStore = {};
// class BaseBlock extends LocalBaseBlock {
//   constructor(
//     { name: e = EMPTY_STRING, optional: t = !1, primitiveSchema: n, ...i } = {},
//     o
//   ) {
//     super(i),
//       (this.name = e),
//       (this.optional = t),
//       n && (this.primitiveSchema = n),
//       (this.idBlock = new LocalIdentificationBlock(i)),
//       (this.lenBlock = new LocalLengthBlock(i)),
//       (this.valueBlock = o ? new o(i) : new ValueBlock(i));
//   }
//   fromBER(e, t, n) {
//     const i = this.valueBlock.fromBER(
//       e,
//       t,
//       this.lenBlock.isIndefiniteForm ? n : this.lenBlock.length
//     );
//     return i === -1
//       ? ((this.error = this.valueBlock.error), i)
//       : (this.idBlock.error.length ||
//           (this.blockLength += this.idBlock.blockLength),
//         this.lenBlock.error.length ||
//           (this.blockLength += this.lenBlock.blockLength),
//         this.valueBlock.error.length ||
//           (this.blockLength += this.valueBlock.blockLength),
//         i);
//   }
//   toBER(e, t) {
//     const n = t || new ViewWriter();
//     t || prepareIndefiniteForm(this);
//     const i = this.idBlock.toBER(e);
//     if ((n.write(i), this.lenBlock.isIndefiniteForm))
//       n.write(new Uint8Array([128]).buffer),
//         this.valueBlock.toBER(e, n),
//         n.write(new ArrayBuffer(2));
//     else {
//       const o = this.valueBlock.toBER(e);
//       this.lenBlock.length = o.byteLength;
//       const a = this.lenBlock.toBER(e);
//       n.write(a), n.write(o);
//     }
//     return t ? EMPTY_BUFFER$1 : n.final();
//   }
//   toJSON() {
//     const e = {
//       ...super.toJSON(),
//       idBlock: this.idBlock.toJSON(),
//       lenBlock: this.lenBlock.toJSON(),
//       valueBlock: this.valueBlock.toJSON(),
//       name: this.name,
//       optional: this.optional,
//     };
//     return (
//       this.primitiveSchema &&
//         (e.primitiveSchema = this.primitiveSchema.toJSON()),
//       e
//     );
//   }
//   toString(e = "ascii") {
//     return e === "ascii" ? this.onAsciiEncoding() : Convert.ToHex(this.toBER());
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME} : ${Convert.ToHex(
//       this.valueBlock.valueBeforeDecodeView
//     )}`;
//   }
//   isEqual(e) {
//     if (this === e) return !0;
//     if (!(e instanceof this.constructor)) return !1;
//     const t = this.toBER(),
//       n = e.toBER();
//     return isEqualBuffer(t, n);
//   }
// }
// BaseBlock.NAME = "BaseBlock";
// function prepareIndefiniteForm(r) {
//   if (r instanceof typeStore.Constructed)
//     for (const e of r.valueBlock.value)
//       prepareIndefiniteForm(e) && (r.lenBlock.isIndefiniteForm = !0);
//   return !!r.lenBlock.isIndefiniteForm;
// }
// class BaseStringBlock extends BaseBlock {
//   constructor({ value: e = EMPTY_STRING, ...t } = {}, n) {
//     super(t, n), e && this.fromString(e);
//   }
//   getValue() {
//     return this.valueBlock.value;
//   }
//   setValue(e) {
//     this.valueBlock.value = e;
//   }
//   fromBER(e, t, n) {
//     const i = this.valueBlock.fromBER(
//       e,
//       t,
//       this.lenBlock.isIndefiniteForm ? n : this.lenBlock.length
//     );
//     return i === -1
//       ? ((this.error = this.valueBlock.error), i)
//       : (this.fromBuffer(this.valueBlock.valueHexView),
//         this.idBlock.error.length ||
//           (this.blockLength += this.idBlock.blockLength),
//         this.lenBlock.error.length ||
//           (this.blockLength += this.lenBlock.blockLength),
//         this.valueBlock.error.length ||
//           (this.blockLength += this.valueBlock.blockLength),
//         i);
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME} : '${this.valueBlock.value}'`;
//   }
// }
// BaseStringBlock.NAME = "BaseStringBlock";
// class LocalPrimitiveValueBlock extends HexBlock(ValueBlock) {
//   constructor({ isHexOnly: e = !0, ...t } = {}) {
//     super(t), (this.isHexOnly = e);
//   }
// }
// LocalPrimitiveValueBlock.NAME = "PrimitiveValueBlock";
// var _a$w;
// class Primitive extends BaseBlock {
//   constructor(e = {}) {
//     super(e, LocalPrimitiveValueBlock), (this.idBlock.isConstructed = !1);
//   }
// }
// _a$w = Primitive;
// typeStore.Primitive = _a$w;
// Primitive.NAME = "PRIMITIVE";
// function localChangeType(r, e) {
//   if (r instanceof e) return r;
//   const t = new e();
//   return (
//     (t.idBlock = r.idBlock),
//     (t.lenBlock = r.lenBlock),
//     (t.warnings = r.warnings),
//     (t.valueBeforeDecodeView = r.valueBeforeDecodeView),
//     t
//   );
// }
// function localFromBER(r, e = 0, t = r.length) {
//   const n = e;
//   let i = new BaseBlock({}, ValueBlock);
//   const o = new LocalBaseBlock();
//   if (!checkBufferParams(o, r, e, t))
//     return (
//       (i.error = o.error),
//       {
//         offset: -1,
//         result: i,
//       }
//     );
//   if (!r.subarray(e, e + t).length)
//     return (
//       (i.error = "Zero buffer length"),
//       {
//         offset: -1,
//         result: i,
//       }
//     );
//   let c = i.idBlock.fromBER(r, e, t);
//   if (
//     (i.idBlock.warnings.length && i.warnings.concat(i.idBlock.warnings),
//     c === -1)
//   )
//     return (
//       (i.error = i.idBlock.error),
//       {
//         offset: -1,
//         result: i,
//       }
//     );
//   if (
//     ((e = c),
//     (t -= i.idBlock.blockLength),
//     (c = i.lenBlock.fromBER(r, e, t)),
//     i.lenBlock.warnings.length && i.warnings.concat(i.lenBlock.warnings),
//     c === -1)
//   )
//     return (
//       (i.error = i.lenBlock.error),
//       {
//         offset: -1,
//         result: i,
//       }
//     );
//   if (
//     ((e = c),
//     (t -= i.lenBlock.blockLength),
//     !i.idBlock.isConstructed && i.lenBlock.isIndefiniteForm)
//   )
//     return (
//       (i.error = "Indefinite length form used for primitive encoding form"),
//       {
//         offset: -1,
//         result: i,
//       }
//     );
//   let u = BaseBlock;
//   switch (i.idBlock.tagClass) {
//     case 1:
//       if (i.idBlock.tagNumber >= 37 && i.idBlock.isHexOnly === !1)
//         return (
//           (i.error =
//             "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard"),
//           {
//             offset: -1,
//             result: i,
//           }
//         );
//       switch (i.idBlock.tagNumber) {
//         case 0:
//           if (i.idBlock.isConstructed && i.lenBlock.length > 0)
//             return (
//               (i.error = "Type [UNIVERSAL 0] is reserved"),
//               {
//                 offset: -1,
//                 result: i,
//               }
//             );
//           u = typeStore.EndOfContent;
//           break;
//         case 1:
//           u = typeStore.Boolean;
//           break;
//         case 2:
//           u = typeStore.Integer;
//           break;
//         case 3:
//           u = typeStore.BitString;
//           break;
//         case 4:
//           u = typeStore.OctetString;
//           break;
//         case 5:
//           u = typeStore.Null;
//           break;
//         case 6:
//           u = typeStore.ObjectIdentifier;
//           break;
//         case 10:
//           u = typeStore.Enumerated;
//           break;
//         case 12:
//           u = typeStore.Utf8String;
//           break;
//         case 13:
//           u = typeStore.RelativeObjectIdentifier;
//           break;
//         case 14:
//           u = typeStore.TIME;
//           break;
//         case 15:
//           return (
//             (i.error = "[UNIVERSAL 15] is reserved by ASN.1 standard"),
//             {
//               offset: -1,
//               result: i,
//             }
//           );
//         case 16:
//           u = typeStore.Sequence;
//           break;
//         case 17:
//           u = typeStore.Set;
//           break;
//         case 18:
//           u = typeStore.NumericString;
//           break;
//         case 19:
//           u = typeStore.PrintableString;
//           break;
//         case 20:
//           u = typeStore.TeletexString;
//           break;
//         case 21:
//           u = typeStore.VideotexString;
//           break;
//         case 22:
//           u = typeStore.IA5String;
//           break;
//         case 23:
//           u = typeStore.UTCTime;
//           break;
//         case 24:
//           u = typeStore.GeneralizedTime;
//           break;
//         case 25:
//           u = typeStore.GraphicString;
//           break;
//         case 26:
//           u = typeStore.VisibleString;
//           break;
//         case 27:
//           u = typeStore.GeneralString;
//           break;
//         case 28:
//           u = typeStore.UniversalString;
//           break;
//         case 29:
//           u = typeStore.CharacterString;
//           break;
//         case 30:
//           u = typeStore.BmpString;
//           break;
//         case 31:
//           u = typeStore.DATE;
//           break;
//         case 32:
//           u = typeStore.TimeOfDay;
//           break;
//         case 33:
//           u = typeStore.DateTime;
//           break;
//         case 34:
//           u = typeStore.Duration;
//           break;
//         default: {
//           const l = i.idBlock.isConstructed
//             ? new typeStore.Constructed()
//             : new typeStore.Primitive();
//           (l.idBlock = i.idBlock),
//             (l.lenBlock = i.lenBlock),
//             (l.warnings = i.warnings),
//             (i = l);
//         }
//       }
//       break;
//     case 2:
//     case 3:
//     case 4:
//     default:
//       u = i.idBlock.isConstructed ? typeStore.Constructed : typeStore.Primitive;
//   }
//   return (
//     (i = localChangeType(i, u)),
//     (c = i.fromBER(r, e, i.lenBlock.isIndefiniteForm ? t : i.lenBlock.length)),
//     (i.valueBeforeDecodeView = r.subarray(n, n + i.blockLength)),
//     {
//       offset: c,
//       result: i,
//     }
//   );
// }
// function fromBER(r) {
//   if (!r.byteLength) {
//     const e = new BaseBlock({}, ValueBlock);
//     return (
//       (e.error = "Input buffer has zero length"),
//       {
//         offset: -1,
//         result: e,
//       }
//     );
//   }
//   return localFromBER(
//     BufferSourceConverter.toUint8Array(r).slice(),
//     0,
//     r.byteLength
//   );
// }
// function checkLen(r, e) {
//   return r ? 1 : e;
// }
// class LocalConstructedValueBlock extends ValueBlock {
//   constructor({ value: e = [], isIndefiniteForm: t = !1, ...n } = {}) {
//     super(n), (this.value = e), (this.isIndefiniteForm = t);
//   }
//   fromBER(e, t, n) {
//     const i = BufferSourceConverter.toUint8Array(e);
//     if (!checkBufferParams(this, i, t, n)) return -1;
//     if (
//       ((this.valueBeforeDecodeView = i.subarray(t, t + n)),
//       this.valueBeforeDecodeView.length === 0)
//     )
//       return this.warnings.push("Zero buffer length"), t;
//     let o = t;
//     for (; checkLen(this.isIndefiniteForm, n) > 0; ) {
//       const a = localFromBER(i, o, n);
//       if (a.offset === -1)
//         return (
//           (this.error = a.result.error),
//           this.warnings.concat(a.result.warnings),
//           -1
//         );
//       if (
//         ((o = a.offset),
//         (this.blockLength += a.result.blockLength),
//         (n -= a.result.blockLength),
//         this.value.push(a.result),
//         this.isIndefiniteForm &&
//           a.result.constructor.NAME === END_OF_CONTENT_NAME)
//       )
//         break;
//     }
//     return (
//       this.isIndefiniteForm &&
//         (this.value[this.value.length - 1].constructor.NAME ===
//         END_OF_CONTENT_NAME
//           ? this.value.pop()
//           : this.warnings.push("No EndOfContent block encoded")),
//       o
//     );
//   }
//   toBER(e, t) {
//     const n = t || new ViewWriter();
//     for (let i = 0; i < this.value.length; i++) this.value[i].toBER(e, n);
//     return t ? EMPTY_BUFFER$1 : n.final();
//   }
//   toJSON() {
//     const e = {
//       ...super.toJSON(),
//       isIndefiniteForm: this.isIndefiniteForm,
//       value: [],
//     };
//     for (const t of this.value) e.value.push(t.toJSON());
//     return e;
//   }
// }
// LocalConstructedValueBlock.NAME = "ConstructedValueBlock";
// var _a$v;
// class Constructed extends BaseBlock {
//   constructor(e = {}) {
//     super(e, LocalConstructedValueBlock), (this.idBlock.isConstructed = !0);
//   }
//   fromBER(e, t, n) {
//     this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
//     const i = this.valueBlock.fromBER(
//       e,
//       t,
//       this.lenBlock.isIndefiniteForm ? n : this.lenBlock.length
//     );
//     return i === -1
//       ? ((this.error = this.valueBlock.error), i)
//       : (this.idBlock.error.length ||
//           (this.blockLength += this.idBlock.blockLength),
//         this.lenBlock.error.length ||
//           (this.blockLength += this.lenBlock.blockLength),
//         this.valueBlock.error.length ||
//           (this.blockLength += this.valueBlock.blockLength),
//         i);
//   }
//   onAsciiEncoding() {
//     const e = [];
//     for (const n of this.valueBlock.value)
//       e.push(
//         n
//           .toString("ascii")
//           .split(
//             `
// `
//           )
//           .map((i) => `  ${i}`).join(`
// `)
//       );
//     const t =
//       this.idBlock.tagClass === 3
//         ? `[${this.idBlock.tagNumber}]`
//         : this.constructor.NAME;
//     return e.length
//       ? `${t} :
// ${e.join(`
// `)}`
//       : `${t} :`;
//   }
// }
// _a$v = Constructed;
// typeStore.Constructed = _a$v;
// Constructed.NAME = "CONSTRUCTED";
// class LocalEndOfContentValueBlock extends ValueBlock {
//   fromBER(e, t, n) {
//     return t;
//   }
//   toBER(e) {
//     return EMPTY_BUFFER$1;
//   }
// }
// LocalEndOfContentValueBlock.override = "EndOfContentValueBlock";
// var _a$u;
// class EndOfContent extends BaseBlock {
//   constructor(e = {}) {
//     super(e, LocalEndOfContentValueBlock),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 0);
//   }
// }
// _a$u = EndOfContent;
// typeStore.EndOfContent = _a$u;
// EndOfContent.NAME = END_OF_CONTENT_NAME;
// var _a$t;
// class Null extends BaseBlock {
//   constructor(e = {}) {
//     super(e, ValueBlock),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 5);
//   }
//   fromBER(e, t, n) {
//     return (
//       this.lenBlock.length > 0 &&
//         this.warnings.push("Non-zero length of value block for Null type"),
//       this.idBlock.error.length ||
//         (this.blockLength += this.idBlock.blockLength),
//       this.lenBlock.error.length ||
//         (this.blockLength += this.lenBlock.blockLength),
//       (this.blockLength += n),
//       t + n > e.byteLength
//         ? ((this.error =
//             "End of input reached before message was fully decoded (inconsistent offset and length values)"),
//           -1)
//         : t + n
//     );
//   }
//   toBER(e, t) {
//     const n = new ArrayBuffer(2);
//     if (!e) {
//       const i = new Uint8Array(n);
//       (i[0] = 5), (i[1] = 0);
//     }
//     return t && t.write(n), n;
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME}`;
//   }
// }
// _a$t = Null;
// typeStore.Null = _a$t;
// Null.NAME = "NULL";
// class LocalBooleanValueBlock extends HexBlock(ValueBlock) {
//   constructor({ value: e, ...t } = {}) {
//     super(t),
//       t.valueHex
//         ? (this.valueHexView = BufferSourceConverter.toUint8Array(t.valueHex))
//         : (this.valueHexView = new Uint8Array(1)),
//       e && (this.value = e);
//   }
//   get value() {
//     for (const e of this.valueHexView) if (e > 0) return !0;
//     return !1;
//   }
//   set value(e) {
//     this.valueHexView[0] = e ? 255 : 0;
//   }
//   fromBER(e, t, n) {
//     const i = BufferSourceConverter.toUint8Array(e);
//     return checkBufferParams(this, i, t, n)
//       ? ((this.valueHexView = i.subarray(t, t + n)),
//         n > 1 &&
//           this.warnings.push("Boolean value encoded in more then 1 octet"),
//         (this.isHexOnly = !0),
//         utilDecodeTC.call(this),
//         (this.blockLength = n),
//         t + n)
//       : -1;
//   }
//   toBER() {
//     return this.valueHexView.slice();
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       value: this.value,
//     };
//   }
// }
// LocalBooleanValueBlock.NAME = "BooleanValueBlock";
// var _a$s;
// let Boolean$1 = class extends BaseBlock {
//   constructor(e = {}) {
//     super(e, LocalBooleanValueBlock),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 1);
//   }
//   getValue() {
//     return this.valueBlock.value;
//   }
//   setValue(e) {
//     this.valueBlock.value = e;
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME} : ${this.getValue}`;
//   }
// };
// _a$s = Boolean$1;
// typeStore.Boolean = _a$s;
// Boolean$1.NAME = "BOOLEAN";
// class LocalOctetStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
//   constructor({ isConstructed: e = !1, ...t } = {}) {
//     super(t), (this.isConstructed = e);
//   }
//   fromBER(e, t, n) {
//     let i = 0;
//     if (this.isConstructed) {
//       if (
//         ((this.isHexOnly = !1),
//         (i = LocalConstructedValueBlock.prototype.fromBER.call(this, e, t, n)),
//         i === -1)
//       )
//         return i;
//       for (let o = 0; o < this.value.length; o++) {
//         const a = this.value[o].constructor.NAME;
//         if (a === END_OF_CONTENT_NAME) {
//           if (this.isIndefiniteForm) break;
//           return (
//             (this.error =
//               "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only"),
//             -1
//           );
//         }
//         if (a !== OCTET_STRING_NAME)
//           return (
//             (this.error = "OCTET STRING may consists of OCTET STRINGs only"), -1
//           );
//       }
//     } else
//       (this.isHexOnly = !0),
//         (i = super.fromBER(e, t, n)),
//         (this.blockLength = n);
//     return i;
//   }
//   toBER(e, t) {
//     return this.isConstructed
//       ? LocalConstructedValueBlock.prototype.toBER.call(this, e, t)
//       : e
//       ? new ArrayBuffer(this.valueHexView.byteLength)
//       : this.valueHexView.slice().buffer;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       isConstructed: this.isConstructed,
//     };
//   }
// }
// LocalOctetStringValueBlock.NAME = "OctetStringValueBlock";
// var _a$r;
// class OctetString extends BaseBlock {
//   constructor({ idBlock: e = {}, lenBlock: t = {}, ...n } = {}) {
//     var i, o;
//     ((i = n.isConstructed) !== null && i !== void 0) ||
//       (n.isConstructed = !!(
//         !((o = n.value) === null || o === void 0) && o.length
//       )),
//       super(
//         {
//           idBlock: {
//             isConstructed: n.isConstructed,
//             ...e,
//           },
//           lenBlock: {
//             ...t,
//             isIndefiniteForm: !!n.isIndefiniteForm,
//           },
//           ...n,
//         },
//         LocalOctetStringValueBlock
//       ),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 4);
//   }
//   fromBER(e, t, n) {
//     if (
//       ((this.valueBlock.isConstructed = this.idBlock.isConstructed),
//       (this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm),
//       n === 0)
//     )
//       return (
//         this.idBlock.error.length === 0 &&
//           (this.blockLength += this.idBlock.blockLength),
//         this.lenBlock.error.length === 0 &&
//           (this.blockLength += this.lenBlock.blockLength),
//         t
//       );
//     if (!this.valueBlock.isConstructed) {
//       const o = (e instanceof ArrayBuffer ? new Uint8Array(e) : e).subarray(
//         t,
//         t + n
//       );
//       try {
//         if (o.byteLength) {
//           const a = localFromBER(o, 0, o.byteLength);
//           a.offset !== -1 &&
//             a.offset === n &&
//             (this.valueBlock.value = [a.result]);
//         }
//       } catch {}
//     }
//     return super.fromBER(e, t, n);
//   }
//   onAsciiEncoding() {
//     return this.valueBlock.isConstructed ||
//       (this.valueBlock.value && this.valueBlock.value.length)
//       ? Constructed.prototype.onAsciiEncoding.call(this)
//       : `${this.constructor.NAME} : ${Convert.ToHex(
//           this.valueBlock.valueHexView
//         )}`;
//   }
//   getValue() {
//     if (!this.idBlock.isConstructed)
//       return this.valueBlock.valueHexView.slice().buffer;
//     const e = [];
//     for (const t of this.valueBlock.value)
//       t instanceof OctetString && e.push(t.valueBlock.valueHexView);
//     return BufferSourceConverter.concat(e);
//   }
// }
// _a$r = OctetString;
// typeStore.OctetString = _a$r;
// OctetString.NAME = OCTET_STRING_NAME;
// class LocalBitStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
//   constructor({ unusedBits: e = 0, isConstructed: t = !1, ...n } = {}) {
//     super(n),
//       (this.unusedBits = e),
//       (this.isConstructed = t),
//       (this.blockLength = this.valueHexView.byteLength);
//   }
//   fromBER(e, t, n) {
//     if (!n) return t;
//     let i = -1;
//     if (this.isConstructed) {
//       if (
//         ((i = LocalConstructedValueBlock.prototype.fromBER.call(this, e, t, n)),
//         i === -1)
//       )
//         return i;
//       for (const c of this.value) {
//         const u = c.constructor.NAME;
//         if (u === END_OF_CONTENT_NAME) {
//           if (this.isIndefiniteForm) break;
//           return (
//             (this.error =
//               "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only"),
//             -1
//           );
//         }
//         if (u !== BIT_STRING_NAME)
//           return (
//             (this.error = "BIT STRING may consists of BIT STRINGs only"), -1
//           );
//         const l = c.valueBlock;
//         if (this.unusedBits > 0 && l.unusedBits > 0)
//           return (
//             (this.error =
//               'Using of "unused bits" inside constructive BIT STRING allowed for least one only'),
//             -1
//           );
//         this.unusedBits = l.unusedBits;
//       }
//       return i;
//     }
//     const o = BufferSourceConverter.toUint8Array(e);
//     if (!checkBufferParams(this, o, t, n)) return -1;
//     const a = o.subarray(t, t + n);
//     if (((this.unusedBits = a[0]), this.unusedBits > 7))
//       return (
//         (this.error = "Unused bits for BitString must be in range 0-7"), -1
//       );
//     if (!this.unusedBits) {
//       const c = a.subarray(1);
//       try {
//         if (c.byteLength) {
//           const u = localFromBER(c, 0, c.byteLength);
//           u.offset !== -1 && u.offset === n - 1 && (this.value = [u.result]);
//         }
//       } catch {}
//     }
//     return (
//       (this.valueHexView = a.subarray(1)), (this.blockLength = a.length), t + n
//     );
//   }
//   toBER(e, t) {
//     if (this.isConstructed)
//       return LocalConstructedValueBlock.prototype.toBER.call(this, e, t);
//     if (e) return new ArrayBuffer(this.valueHexView.byteLength + 1);
//     if (!this.valueHexView.byteLength) return EMPTY_BUFFER$1;
//     const n = new Uint8Array(this.valueHexView.length + 1);
//     return (n[0] = this.unusedBits), n.set(this.valueHexView, 1), n.buffer;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       unusedBits: this.unusedBits,
//       isConstructed: this.isConstructed,
//     };
//   }
// }
// LocalBitStringValueBlock.NAME = "BitStringValueBlock";
// var _a$q;
// class BitString extends BaseBlock {
//   constructor({ idBlock: e = {}, lenBlock: t = {}, ...n } = {}) {
//     var i, o;
//     ((i = n.isConstructed) !== null && i !== void 0) ||
//       (n.isConstructed = !!(
//         !((o = n.value) === null || o === void 0) && o.length
//       )),
//       super(
//         {
//           idBlock: {
//             isConstructed: n.isConstructed,
//             ...e,
//           },
//           lenBlock: {
//             ...t,
//             isIndefiniteForm: !!n.isIndefiniteForm,
//           },
//           ...n,
//         },
//         LocalBitStringValueBlock
//       ),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 3);
//   }
//   fromBER(e, t, n) {
//     return (
//       (this.valueBlock.isConstructed = this.idBlock.isConstructed),
//       (this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm),
//       super.fromBER(e, t, n)
//     );
//   }
//   onAsciiEncoding() {
//     if (
//       this.valueBlock.isConstructed ||
//       (this.valueBlock.value && this.valueBlock.value.length)
//     )
//       return Constructed.prototype.onAsciiEncoding.call(this);
//     {
//       const e = [],
//         t = this.valueBlock.valueHexView;
//       for (const i of t) e.push(i.toString(2).padStart(8, "0"));
//       const n = e.join("");
//       return `${this.constructor.NAME} : ${n.substring(
//         0,
//         n.length - this.valueBlock.unusedBits
//       )}`;
//     }
//   }
// }
// _a$q = BitString;
// typeStore.BitString = _a$q;
// BitString.NAME = BIT_STRING_NAME;
// var _a$p;
// function viewAdd(r, e) {
//   const t = new Uint8Array([0]),
//     n = new Uint8Array(r),
//     i = new Uint8Array(e);
//   let o = n.slice(0);
//   const a = o.length - 1,
//     c = i.slice(0),
//     u = c.length - 1;
//   let l = 0;
//   const h = u < a ? a : u;
//   let f = 0;
//   for (let d = h; d >= 0; d--, f++) {
//     switch (!0) {
//       case f < c.length:
//         l = o[a - f] + c[u - f] + t[0];
//         break;
//       default:
//         l = o[a - f] + t[0];
//     }
//     switch (((t[0] = l / 10), !0)) {
//       case f >= o.length:
//         o = utilConcatView(new Uint8Array([l % 10]), o);
//         break;
//       default:
//         o[a - f] = l % 10;
//     }
//   }
//   return t[0] > 0 && (o = utilConcatView(t, o)), o;
// }
// function power2(r) {
//   if (r >= powers2.length)
//     for (let e = powers2.length; e <= r; e++) {
//       const t = new Uint8Array([0]);
//       let n = powers2[e - 1].slice(0);
//       for (let i = n.length - 1; i >= 0; i--) {
//         const o = new Uint8Array([(n[i] << 1) + t[0]]);
//         (t[0] = o[0] / 10), (n[i] = o[0] % 10);
//       }
//       t[0] > 0 && (n = utilConcatView(t, n)), powers2.push(n);
//     }
//   return powers2[r];
// }
// function viewSub(r, e) {
//   let t = 0;
//   const n = new Uint8Array(r),
//     i = new Uint8Array(e),
//     o = n.slice(0),
//     a = o.length - 1,
//     c = i.slice(0),
//     u = c.length - 1;
//   let l,
//     h = 0;
//   for (let f = u; f >= 0; f--, h++)
//     switch (((l = o[a - h] - c[u - h] - t), !0)) {
//       case l < 0:
//         (t = 1), (o[a - h] = l + 10);
//         break;
//       default:
//         (t = 0), (o[a - h] = l);
//     }
//   if (t > 0)
//     for (let f = a - u + 1; f >= 0; f--, h++)
//       if (((l = o[a - h] - t), l < 0)) (t = 1), (o[a - h] = l + 10);
//       else {
//         (t = 0), (o[a - h] = l);
//         break;
//       }
//   return o.slice();
// }
// class LocalIntegerValueBlock extends HexBlock(ValueBlock) {
//   constructor({ value: e, ...t } = {}) {
//     super(t),
//       (this._valueDec = 0),
//       t.valueHex && this.setValueHex(),
//       e !== void 0 && (this.valueDec = e);
//   }
//   setValueHex() {
//     this.valueHexView.length >= 4
//       ? (this.warnings.push("Too big Integer for decoding, hex only"),
//         (this.isHexOnly = !0),
//         (this._valueDec = 0))
//       : ((this.isHexOnly = !1),
//         this.valueHexView.length > 0 &&
//           (this._valueDec = utilDecodeTC.call(this)));
//   }
//   set valueDec(e) {
//     (this._valueDec = e),
//       (this.isHexOnly = !1),
//       (this.valueHexView = new Uint8Array(utilEncodeTC(e)));
//   }
//   get valueDec() {
//     return this._valueDec;
//   }
//   fromDER(e, t, n, i = 0) {
//     const o = this.fromBER(e, t, n);
//     if (o === -1) return o;
//     const a = this.valueHexView;
//     return (
//       a[0] === 0 && a[1] & 128
//         ? (this.valueHexView = a.subarray(1))
//         : i !== 0 &&
//           a.length < i &&
//           (i - a.length > 1 && (i = a.length + 1),
//           (this.valueHexView = a.subarray(i - a.length))),
//       o
//     );
//   }
//   toDER(e = !1) {
//     const t = this.valueHexView;
//     switch (!0) {
//       case (t[0] & 128) !== 0:
//         {
//           const n = new Uint8Array(this.valueHexView.length + 1);
//           (n[0] = 0), n.set(t, 1), (this.valueHexView = n);
//         }
//         break;
//       case t[0] === 0 && (t[1] & 128) === 0:
//         this.valueHexView = this.valueHexView.subarray(1);
//         break;
//     }
//     return this.toBER(e);
//   }
//   fromBER(e, t, n) {
//     const i = super.fromBER(e, t, n);
//     return i === -1 || this.setValueHex(), i;
//   }
//   toBER(e) {
//     return e
//       ? new ArrayBuffer(this.valueHexView.length)
//       : this.valueHexView.slice().buffer;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       valueDec: this.valueDec,
//     };
//   }
//   toString() {
//     const e = this.valueHexView.length * 8 - 1;
//     let t = new Uint8Array((this.valueHexView.length * 8) / 3),
//       n = 0,
//       i;
//     const o = this.valueHexView;
//     let a = "",
//       c = !1;
//     for (let u = o.byteLength - 1; u >= 0; u--) {
//       i = o[u];
//       for (let l = 0; l < 8; l++) {
//         if ((i & 1) === 1)
//           switch (n) {
//             case e:
//               (t = viewSub(power2(n), t)), (a = "-");
//               break;
//             default:
//               t = viewAdd(t, power2(n));
//           }
//         n++, (i >>= 1);
//       }
//     }
//     for (let u = 0; u < t.length; u++)
//       t[u] && (c = !0), c && (a += digitsString.charAt(t[u]));
//     return c === !1 && (a += digitsString.charAt(0)), a;
//   }
// }
// _a$p = LocalIntegerValueBlock;
// LocalIntegerValueBlock.NAME = "IntegerValueBlock";
// Object.defineProperty(_a$p.prototype, "valueHex", {
//   set: function (r) {
//     (this.valueHexView = new Uint8Array(r)), this.setValueHex();
//   },
//   get: function () {
//     return this.valueHexView.slice().buffer;
//   },
// });
// var _a$o;
// class Integer extends BaseBlock {
//   constructor(e = {}) {
//     super(e, LocalIntegerValueBlock),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 2);
//   }
//   toBigInt() {
//     return assertBigInt(), BigInt(this.valueBlock.toString());
//   }
//   static fromBigInt(e) {
//     assertBigInt();
//     const t = BigInt(e),
//       n = new ViewWriter(),
//       i = t.toString(16).replace(/^-/, ""),
//       o = new Uint8Array(Convert.FromHex(i));
//     if (t < 0) {
//       const c = new Uint8Array(o.length + (o[0] & 128 ? 1 : 0));
//       c[0] |= 128;
//       const l = BigInt(`0x${Convert.ToHex(c)}`) + t,
//         h = BufferSourceConverter.toUint8Array(Convert.FromHex(l.toString(16)));
//       (h[0] |= 128), n.write(h);
//     } else o[0] & 128 && n.write(new Uint8Array([0])), n.write(o);
//     return new Integer({
//       valueHex: n.final(),
//     });
//   }
//   convertToDER() {
//     const e = new Integer({
//       valueHex: this.valueBlock.valueHexView,
//     });
//     return e.valueBlock.toDER(), e;
//   }
//   convertFromDER() {
//     return new Integer({
//       valueHex:
//         this.valueBlock.valueHexView[0] === 0
//           ? this.valueBlock.valueHexView.subarray(1)
//           : this.valueBlock.valueHexView,
//     });
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME} : ${this.valueBlock.toString()}`;
//   }
// }
// _a$o = Integer;
// typeStore.Integer = _a$o;
// Integer.NAME = "INTEGER";
// var _a$n;
// class Enumerated extends Integer {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 10);
//   }
// }
// _a$n = Enumerated;
// typeStore.Enumerated = _a$n;
// Enumerated.NAME = "ENUMERATED";
// class LocalSidValueBlock extends HexBlock(ValueBlock) {
//   constructor({ valueDec: e = -1, isFirstSid: t = !1, ...n } = {}) {
//     super(n), (this.valueDec = e), (this.isFirstSid = t);
//   }
//   fromBER(e, t, n) {
//     if (!n) return t;
//     const i = BufferSourceConverter.toUint8Array(e);
//     if (!checkBufferParams(this, i, t, n)) return -1;
//     const o = i.subarray(t, t + n);
//     this.valueHexView = new Uint8Array(n);
//     for (
//       let c = 0;
//       c < n &&
//       ((this.valueHexView[c] = o[c] & 127), this.blockLength++, !!(o[c] & 128));
//       c++
//     );
//     const a = new Uint8Array(this.blockLength);
//     for (let c = 0; c < this.blockLength; c++) a[c] = this.valueHexView[c];
//     return (
//       (this.valueHexView = a),
//       o[this.blockLength - 1] & 128
//         ? ((this.error =
//             "End of input reached before message was fully decoded"),
//           -1)
//         : (this.valueHexView[0] === 0 &&
//             this.warnings.push("Needlessly long format of SID encoding"),
//           this.blockLength <= 8
//             ? (this.valueDec = utilFromBase(this.valueHexView, 7))
//             : ((this.isHexOnly = !0),
//               this.warnings.push("Too big SID for decoding, hex only")),
//           t + this.blockLength)
//     );
//   }
//   set valueBigInt(e) {
//     assertBigInt();
//     let t = BigInt(e).toString(2);
//     for (; t.length % 7; ) t = "0" + t;
//     const n = new Uint8Array(t.length / 7);
//     for (let i = 0; i < n.length; i++)
//       n[i] =
//         parseInt(t.slice(i * 7, i * 7 + 7), 2) + (i + 1 < n.length ? 128 : 0);
//     this.fromBER(n.buffer, 0, n.length);
//   }
//   toBER(e) {
//     if (this.isHexOnly) {
//       if (e) return new ArrayBuffer(this.valueHexView.byteLength);
//       const i = this.valueHexView,
//         o = new Uint8Array(this.blockLength);
//       for (let a = 0; a < this.blockLength - 1; a++) o[a] = i[a] | 128;
//       return (o[this.blockLength - 1] = i[this.blockLength - 1]), o.buffer;
//     }
//     const t = utilToBase(this.valueDec, 7);
//     if (t.byteLength === 0)
//       return (this.error = "Error during encoding SID value"), EMPTY_BUFFER$1;
//     const n = new Uint8Array(t.byteLength);
//     if (!e) {
//       const i = new Uint8Array(t),
//         o = t.byteLength - 1;
//       for (let a = 0; a < o; a++) n[a] = i[a] | 128;
//       n[o] = i[o];
//     }
//     return n;
//   }
//   toString() {
//     let e = "";
//     if (this.isHexOnly) e = Convert.ToHex(this.valueHexView);
//     else if (this.isFirstSid) {
//       let t = this.valueDec;
//       this.valueDec <= 39
//         ? (e = "0.")
//         : this.valueDec <= 79
//         ? ((e = "1."), (t -= 40))
//         : ((e = "2."), (t -= 80)),
//         (e += t.toString());
//     } else e = this.valueDec.toString();
//     return e;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       valueDec: this.valueDec,
//       isFirstSid: this.isFirstSid,
//     };
//   }
// }
// LocalSidValueBlock.NAME = "sidBlock";
// class LocalObjectIdentifierValueBlock extends ValueBlock {
//   constructor({ value: e = EMPTY_STRING, ...t } = {}) {
//     super(t), (this.value = []), e && this.fromString(e);
//   }
//   fromBER(e, t, n) {
//     let i = t;
//     for (; n > 0; ) {
//       const o = new LocalSidValueBlock();
//       if (((i = o.fromBER(e, i, n)), i === -1))
//         return (this.blockLength = 0), (this.error = o.error), i;
//       this.value.length === 0 && (o.isFirstSid = !0),
//         (this.blockLength += o.blockLength),
//         (n -= o.blockLength),
//         this.value.push(o);
//     }
//     return i;
//   }
//   toBER(e) {
//     const t = [];
//     for (let n = 0; n < this.value.length; n++) {
//       const i = this.value[n].toBER(e);
//       if (i.byteLength === 0)
//         return (this.error = this.value[n].error), EMPTY_BUFFER$1;
//       t.push(i);
//     }
//     return concat(t);
//   }
//   fromString(e) {
//     this.value = [];
//     let t = 0,
//       n = 0,
//       i = "",
//       o = !1;
//     do
//       if (
//         ((n = e.indexOf(".", t)),
//         n === -1 ? (i = e.substring(t)) : (i = e.substring(t, n)),
//         (t = n + 1),
//         o)
//       ) {
//         const a = this.value[0];
//         let c = 0;
//         switch (a.valueDec) {
//           case 0:
//             break;
//           case 1:
//             c = 40;
//             break;
//           case 2:
//             c = 80;
//             break;
//           default:
//             this.value = [];
//             return;
//         }
//         const u = parseInt(i, 10);
//         if (isNaN(u)) return;
//         (a.valueDec = u + c), (o = !1);
//       } else {
//         const a = new LocalSidValueBlock();
//         if (i > Number.MAX_SAFE_INTEGER) {
//           assertBigInt();
//           const c = BigInt(i);
//           a.valueBigInt = c;
//         } else if (((a.valueDec = parseInt(i, 10)), isNaN(a.valueDec))) return;
//         this.value.length || ((a.isFirstSid = !0), (o = !0)),
//           this.value.push(a);
//       }
//     while (n !== -1);
//   }
//   toString() {
//     let e = "",
//       t = !1;
//     for (let n = 0; n < this.value.length; n++) {
//       t = this.value[n].isHexOnly;
//       let i = this.value[n].toString();
//       n !== 0 && (e = `${e}.`),
//         t
//           ? ((i = `{${i}}`),
//             this.value[n].isFirstSid ? (e = `2.{${i} - 80}`) : (e += i))
//           : (e += i);
//     }
//     return e;
//   }
//   toJSON() {
//     const e = {
//       ...super.toJSON(),
//       value: this.toString(),
//       sidArray: [],
//     };
//     for (let t = 0; t < this.value.length; t++)
//       e.sidArray.push(this.value[t].toJSON());
//     return e;
//   }
// }
// LocalObjectIdentifierValueBlock.NAME = "ObjectIdentifierValueBlock";
// var _a$m;
// class ObjectIdentifier extends BaseBlock {
//   constructor(e = {}) {
//     super(e, LocalObjectIdentifierValueBlock),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 6);
//   }
//   getValue() {
//     return this.valueBlock.toString();
//   }
//   setValue(e) {
//     this.valueBlock.fromString(e);
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME} : ${
//       this.valueBlock.toString() || "empty"
//     }`;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       value: this.getValue(),
//     };
//   }
// }
// _a$m = ObjectIdentifier;
// typeStore.ObjectIdentifier = _a$m;
// ObjectIdentifier.NAME = "OBJECT IDENTIFIER";
// class LocalRelativeSidValueBlock extends HexBlock(LocalBaseBlock) {
//   constructor({ valueDec: e = 0, ...t } = {}) {
//     super(t), (this.valueDec = e);
//   }
//   fromBER(e, t, n) {
//     if (n === 0) return t;
//     const i = BufferSourceConverter.toUint8Array(e);
//     if (!checkBufferParams(this, i, t, n)) return -1;
//     const o = i.subarray(t, t + n);
//     this.valueHexView = new Uint8Array(n);
//     for (
//       let c = 0;
//       c < n &&
//       ((this.valueHexView[c] = o[c] & 127), this.blockLength++, !!(o[c] & 128));
//       c++
//     );
//     const a = new Uint8Array(this.blockLength);
//     for (let c = 0; c < this.blockLength; c++) a[c] = this.valueHexView[c];
//     return (
//       (this.valueHexView = a),
//       o[this.blockLength - 1] & 128
//         ? ((this.error =
//             "End of input reached before message was fully decoded"),
//           -1)
//         : (this.valueHexView[0] === 0 &&
//             this.warnings.push("Needlessly long format of SID encoding"),
//           this.blockLength <= 8
//             ? (this.valueDec = utilFromBase(this.valueHexView, 7))
//             : ((this.isHexOnly = !0),
//               this.warnings.push("Too big SID for decoding, hex only")),
//           t + this.blockLength)
//     );
//   }
//   toBER(e) {
//     if (this.isHexOnly) {
//       if (e) return new ArrayBuffer(this.valueHexView.byteLength);
//       const i = this.valueHexView,
//         o = new Uint8Array(this.blockLength);
//       for (let a = 0; a < this.blockLength - 1; a++) o[a] = i[a] | 128;
//       return (o[this.blockLength - 1] = i[this.blockLength - 1]), o.buffer;
//     }
//     const t = utilToBase(this.valueDec, 7);
//     if (t.byteLength === 0)
//       return (this.error = "Error during encoding SID value"), EMPTY_BUFFER$1;
//     const n = new Uint8Array(t.byteLength);
//     if (!e) {
//       const i = new Uint8Array(t),
//         o = t.byteLength - 1;
//       for (let a = 0; a < o; a++) n[a] = i[a] | 128;
//       n[o] = i[o];
//     }
//     return n.buffer;
//   }
//   toString() {
//     let e = "";
//     return (
//       this.isHexOnly
//         ? (e = Convert.ToHex(this.valueHexView))
//         : (e = this.valueDec.toString()),
//       e
//     );
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       valueDec: this.valueDec,
//     };
//   }
// }
// LocalRelativeSidValueBlock.NAME = "relativeSidBlock";
// class LocalRelativeObjectIdentifierValueBlock extends ValueBlock {
//   constructor({ value: e = EMPTY_STRING, ...t } = {}) {
//     super(t), (this.value = []), e && this.fromString(e);
//   }
//   fromBER(e, t, n) {
//     let i = t;
//     for (; n > 0; ) {
//       const o = new LocalRelativeSidValueBlock();
//       if (((i = o.fromBER(e, i, n)), i === -1))
//         return (this.blockLength = 0), (this.error = o.error), i;
//       (this.blockLength += o.blockLength),
//         (n -= o.blockLength),
//         this.value.push(o);
//     }
//     return i;
//   }
//   toBER(e, t) {
//     const n = [];
//     for (let i = 0; i < this.value.length; i++) {
//       const o = this.value[i].toBER(e);
//       if (o.byteLength === 0)
//         return (this.error = this.value[i].error), EMPTY_BUFFER$1;
//       n.push(o);
//     }
//     return concat(n);
//   }
//   fromString(e) {
//     this.value = [];
//     let t = 0,
//       n = 0,
//       i = "";
//     do {
//       (n = e.indexOf(".", t)),
//         n === -1 ? (i = e.substring(t)) : (i = e.substring(t, n)),
//         (t = n + 1);
//       const o = new LocalRelativeSidValueBlock();
//       if (((o.valueDec = parseInt(i, 10)), isNaN(o.valueDec))) return !0;
//       this.value.push(o);
//     } while (n !== -1);
//     return !0;
//   }
//   toString() {
//     let e = "",
//       t = !1;
//     for (let n = 0; n < this.value.length; n++) {
//       t = this.value[n].isHexOnly;
//       let i = this.value[n].toString();
//       n !== 0 && (e = `${e}.`), t && (i = `{${i}}`), (e += i);
//     }
//     return e;
//   }
//   toJSON() {
//     const e = {
//       ...super.toJSON(),
//       value: this.toString(),
//       sidArray: [],
//     };
//     for (let t = 0; t < this.value.length; t++)
//       e.sidArray.push(this.value[t].toJSON());
//     return e;
//   }
// }
// LocalRelativeObjectIdentifierValueBlock.NAME =
//   "RelativeObjectIdentifierValueBlock";
// var _a$l;
// class RelativeObjectIdentifier extends BaseBlock {
//   constructor(e = {}) {
//     super(e, LocalRelativeObjectIdentifierValueBlock),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 13);
//   }
//   getValue() {
//     return this.valueBlock.toString();
//   }
//   setValue(e) {
//     this.valueBlock.fromString(e);
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME} : ${
//       this.valueBlock.toString() || "empty"
//     }`;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       value: this.getValue(),
//     };
//   }
// }
// _a$l = RelativeObjectIdentifier;
// typeStore.RelativeObjectIdentifier = _a$l;
// RelativeObjectIdentifier.NAME = "RelativeObjectIdentifier";
// var _a$k;
// class Sequence extends Constructed {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 16);
//   }
// }
// _a$k = Sequence;
// typeStore.Sequence = _a$k;
// Sequence.NAME = "SEQUENCE";
// var _a$j;
// let Set$1 = class extends Constructed {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 17);
//   }
// };
// _a$j = Set$1;
// typeStore.Set = _a$j;
// Set$1.NAME = "SET";
// class LocalStringValueBlock extends HexBlock(ValueBlock) {
//   constructor({ ...e } = {}) {
//     super(e), (this.isHexOnly = !0), (this.value = EMPTY_STRING);
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       value: this.value,
//     };
//   }
// }
// LocalStringValueBlock.NAME = "StringValueBlock";
// class LocalSimpleStringValueBlock extends LocalStringValueBlock {}
// LocalSimpleStringValueBlock.NAME = "SimpleStringValueBlock";
// class LocalSimpleStringBlock extends BaseStringBlock {
//   constructor({ ...e } = {}) {
//     super(e, LocalSimpleStringValueBlock);
//   }
//   fromBuffer(e) {
//     this.valueBlock.value = String.fromCharCode.apply(
//       null,
//       BufferSourceConverter.toUint8Array(e)
//     );
//   }
//   fromString(e) {
//     const t = e.length,
//       n = (this.valueBlock.valueHexView = new Uint8Array(t));
//     for (let i = 0; i < t; i++) n[i] = e.charCodeAt(i);
//     this.valueBlock.value = e;
//   }
// }
// LocalSimpleStringBlock.NAME = "SIMPLE STRING";
// class LocalUtf8StringValueBlock extends LocalSimpleStringBlock {
//   fromBuffer(e) {
//     this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(e);
//     try {
//       this.valueBlock.value = Convert.ToUtf8String(e);
//     } catch (t) {
//       this.warnings.push(
//         `Error during "decodeURIComponent": ${t}, using raw string`
//       ),
//         (this.valueBlock.value = Convert.ToBinary(e));
//     }
//   }
//   fromString(e) {
//     (this.valueBlock.valueHexView = new Uint8Array(Convert.FromUtf8String(e))),
//       (this.valueBlock.value = e);
//   }
// }
// LocalUtf8StringValueBlock.NAME = "Utf8StringValueBlock";
// var _a$i;
// class Utf8String extends LocalUtf8StringValueBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 12);
//   }
// }
// _a$i = Utf8String;
// typeStore.Utf8String = _a$i;
// Utf8String.NAME = "UTF8String";
// class LocalBmpStringValueBlock extends LocalSimpleStringBlock {
//   fromBuffer(e) {
//     (this.valueBlock.value = Convert.ToUtf16String(e)),
//       (this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(e));
//   }
//   fromString(e) {
//     (this.valueBlock.value = e),
//       (this.valueBlock.valueHexView = new Uint8Array(
//         Convert.FromUtf16String(e)
//       ));
//   }
// }
// LocalBmpStringValueBlock.NAME = "BmpStringValueBlock";
// var _a$h;
// class BmpString extends LocalBmpStringValueBlock {
//   constructor({ ...e } = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 30);
//   }
// }
// _a$h = BmpString;
// typeStore.BmpString = _a$h;
// BmpString.NAME = "BMPString";
// class LocalUniversalStringValueBlock extends LocalSimpleStringBlock {
//   fromBuffer(e) {
//     const t = ArrayBuffer.isView(e) ? e.slice().buffer : e.slice(0),
//       n = new Uint8Array(t);
//     for (let i = 0; i < n.length; i += 4)
//       (n[i] = n[i + 3]), (n[i + 1] = n[i + 2]), (n[i + 2] = 0), (n[i + 3] = 0);
//     this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(t));
//   }
//   fromString(e) {
//     const t = e.length,
//       n = (this.valueBlock.valueHexView = new Uint8Array(t * 4));
//     for (let i = 0; i < t; i++) {
//       const o = utilToBase(e.charCodeAt(i), 8),
//         a = new Uint8Array(o);
//       if (a.length > 4) continue;
//       const c = 4 - a.length;
//       for (let u = a.length - 1; u >= 0; u--) n[i * 4 + u + c] = a[u];
//     }
//     this.valueBlock.value = e;
//   }
// }
// LocalUniversalStringValueBlock.NAME = "UniversalStringValueBlock";
// var _a$g;
// class UniversalString extends LocalUniversalStringValueBlock {
//   constructor({ ...e } = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 28);
//   }
// }
// _a$g = UniversalString;
// typeStore.UniversalString = _a$g;
// UniversalString.NAME = "UniversalString";
// var _a$f;
// class NumericString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 18);
//   }
// }
// _a$f = NumericString;
// typeStore.NumericString = _a$f;
// NumericString.NAME = "NumericString";
// var _a$e;
// class PrintableString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 19);
//   }
// }
// _a$e = PrintableString;
// typeStore.PrintableString = _a$e;
// PrintableString.NAME = "PrintableString";
// var _a$d;
// class TeletexString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 20);
//   }
// }
// _a$d = TeletexString;
// typeStore.TeletexString = _a$d;
// TeletexString.NAME = "TeletexString";
// var _a$c;
// class VideotexString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 21);
//   }
// }
// _a$c = VideotexString;
// typeStore.VideotexString = _a$c;
// VideotexString.NAME = "VideotexString";
// var _a$b;
// class IA5String extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 22);
//   }
// }
// _a$b = IA5String;
// typeStore.IA5String = _a$b;
// IA5String.NAME = "IA5String";
// var _a$a;
// class GraphicString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 25);
//   }
// }
// _a$a = GraphicString;
// typeStore.GraphicString = _a$a;
// GraphicString.NAME = "GraphicString";
// var _a$9;
// class VisibleString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 26);
//   }
// }
// _a$9 = VisibleString;
// typeStore.VisibleString = _a$9;
// VisibleString.NAME = "VisibleString";
// var _a$8;
// class GeneralString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 27);
//   }
// }
// _a$8 = GeneralString;
// typeStore.GeneralString = _a$8;
// GeneralString.NAME = "GeneralString";
// var _a$7;
// class CharacterString extends LocalSimpleStringBlock {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 29);
//   }
// }
// _a$7 = CharacterString;
// typeStore.CharacterString = _a$7;
// CharacterString.NAME = "CharacterString";
// var _a$6;
// class UTCTime extends VisibleString {
//   constructor({ value: e, valueDate: t, ...n } = {}) {
//     if (
//       (super(n),
//       (this.year = 0),
//       (this.month = 0),
//       (this.day = 0),
//       (this.hour = 0),
//       (this.minute = 0),
//       (this.second = 0),
//       e)
//     ) {
//       this.fromString(e),
//         (this.valueBlock.valueHexView = new Uint8Array(e.length));
//       for (let i = 0; i < e.length; i++)
//         this.valueBlock.valueHexView[i] = e.charCodeAt(i);
//     }
//     t &&
//       (this.fromDate(t),
//       (this.valueBlock.valueHexView = new Uint8Array(this.toBuffer()))),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 23);
//   }
//   fromBuffer(e) {
//     this.fromString(
//       String.fromCharCode.apply(null, BufferSourceConverter.toUint8Array(e))
//     );
//   }
//   toBuffer() {
//     const e = this.toString(),
//       t = new ArrayBuffer(e.length),
//       n = new Uint8Array(t);
//     for (let i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
//     return t;
//   }
//   fromDate(e) {
//     (this.year = e.getUTCFullYear()),
//       (this.month = e.getUTCMonth() + 1),
//       (this.day = e.getUTCDate()),
//       (this.hour = e.getUTCHours()),
//       (this.minute = e.getUTCMinutes()),
//       (this.second = e.getUTCSeconds());
//   }
//   toDate() {
//     return new Date(
//       Date.UTC(
//         this.year,
//         this.month - 1,
//         this.day,
//         this.hour,
//         this.minute,
//         this.second
//       )
//     );
//   }
//   fromString(e) {
//     const n = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/gi.exec(e);
//     if (n === null) {
//       this.error = "Wrong input string for conversion";
//       return;
//     }
//     const i = parseInt(n[1], 10);
//     i >= 50 ? (this.year = 1900 + i) : (this.year = 2e3 + i),
//       (this.month = parseInt(n[2], 10)),
//       (this.day = parseInt(n[3], 10)),
//       (this.hour = parseInt(n[4], 10)),
//       (this.minute = parseInt(n[5], 10)),
//       (this.second = parseInt(n[6], 10));
//   }
//   toString(e = "iso") {
//     if (e === "iso") {
//       const t = new Array(7);
//       return (
//         (t[0] = padNumber(
//           this.year < 2e3 ? this.year - 1900 : this.year - 2e3,
//           2
//         )),
//         (t[1] = padNumber(this.month, 2)),
//         (t[2] = padNumber(this.day, 2)),
//         (t[3] = padNumber(this.hour, 2)),
//         (t[4] = padNumber(this.minute, 2)),
//         (t[5] = padNumber(this.second, 2)),
//         (t[6] = "Z"),
//         t.join("")
//       );
//     }
//     return super.toString(e);
//   }
//   onAsciiEncoding() {
//     return `${this.constructor.NAME} : ${this.toDate().toISOString()}`;
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       year: this.year,
//       month: this.month,
//       day: this.day,
//       hour: this.hour,
//       minute: this.minute,
//       second: this.second,
//     };
//   }
// }
// _a$6 = UTCTime;
// typeStore.UTCTime = _a$6;
// UTCTime.NAME = "UTCTime";
// var _a$5;
// class GeneralizedTime extends UTCTime {
//   constructor(e = {}) {
//     var t;
//     super(e),
//       ((t = this.millisecond) !== null && t !== void 0) ||
//         (this.millisecond = 0),
//       (this.idBlock.tagClass = 1),
//       (this.idBlock.tagNumber = 24);
//   }
//   fromDate(e) {
//     super.fromDate(e), (this.millisecond = e.getUTCMilliseconds());
//   }
//   toDate() {
//     return new Date(
//       Date.UTC(
//         this.year,
//         this.month - 1,
//         this.day,
//         this.hour,
//         this.minute,
//         this.second,
//         this.millisecond
//       )
//     );
//   }
//   fromString(e) {
//     let t = !1,
//       n = "",
//       i = "",
//       o = 0,
//       a,
//       c = 0,
//       u = 0;
//     if (e[e.length - 1] === "Z") (n = e.substring(0, e.length - 1)), (t = !0);
//     else {
//       const f = new Number(e[e.length - 1]);
//       if (isNaN(f.valueOf()))
//         throw new Error("Wrong input string for conversion");
//       n = e;
//     }
//     if (t) {
//       if (n.indexOf("+") !== -1)
//         throw new Error("Wrong input string for conversion");
//       if (n.indexOf("-") !== -1)
//         throw new Error("Wrong input string for conversion");
//     } else {
//       let f = 1,
//         d = n.indexOf("+"),
//         p = "";
//       if ((d === -1 && ((d = n.indexOf("-")), (f = -1)), d !== -1)) {
//         if (
//           ((p = n.substring(d + 1)),
//           (n = n.substring(0, d)),
//           p.length !== 2 && p.length !== 4)
//         )
//           throw new Error("Wrong input string for conversion");
//         let g = parseInt(p.substring(0, 2), 10);
//         if (isNaN(g.valueOf()))
//           throw new Error("Wrong input string for conversion");
//         if (((c = f * g), p.length === 4)) {
//           if (((g = parseInt(p.substring(2, 4), 10)), isNaN(g.valueOf())))
//             throw new Error("Wrong input string for conversion");
//           u = f * g;
//         }
//       }
//     }
//     let l = n.indexOf(".");
//     if ((l === -1 && (l = n.indexOf(",")), l !== -1)) {
//       const f = new Number(`0${n.substring(l)}`);
//       if (isNaN(f.valueOf()))
//         throw new Error("Wrong input string for conversion");
//       (o = f.valueOf()), (i = n.substring(0, l));
//     } else i = n;
//     switch (!0) {
//       case i.length === 8:
//         if (((a = /(\d{4})(\d{2})(\d{2})/gi), l !== -1))
//           throw new Error("Wrong input string for conversion");
//         break;
//       case i.length === 10:
//         if (((a = /(\d{4})(\d{2})(\d{2})(\d{2})/gi), l !== -1)) {
//           let f = 60 * o;
//           (this.minute = Math.floor(f)),
//             (f = 60 * (f - this.minute)),
//             (this.second = Math.floor(f)),
//             (f = 1e3 * (f - this.second)),
//             (this.millisecond = Math.floor(f));
//         }
//         break;
//       case i.length === 12:
//         if (((a = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/gi), l !== -1)) {
//           let f = 60 * o;
//           (this.second = Math.floor(f)),
//             (f = 1e3 * (f - this.second)),
//             (this.millisecond = Math.floor(f));
//         }
//         break;
//       case i.length === 14:
//         if (((a = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gi), l !== -1)) {
//           const f = 1e3 * o;
//           this.millisecond = Math.floor(f);
//         }
//         break;
//       default:
//         throw new Error("Wrong input string for conversion");
//     }
//     const h = a.exec(i);
//     if (h === null) throw new Error("Wrong input string for conversion");
//     for (let f = 1; f < h.length; f++)
//       switch (f) {
//         case 1:
//           this.year = parseInt(h[f], 10);
//           break;
//         case 2:
//           this.month = parseInt(h[f], 10);
//           break;
//         case 3:
//           this.day = parseInt(h[f], 10);
//           break;
//         case 4:
//           this.hour = parseInt(h[f], 10) + c;
//           break;
//         case 5:
//           this.minute = parseInt(h[f], 10) + u;
//           break;
//         case 6:
//           this.second = parseInt(h[f], 10);
//           break;
//         default:
//           throw new Error("Wrong input string for conversion");
//       }
//     if (t === !1) {
//       const f = new Date(
//         this.year,
//         this.month,
//         this.day,
//         this.hour,
//         this.minute,
//         this.second,
//         this.millisecond
//       );
//       (this.year = f.getUTCFullYear()),
//         (this.month = f.getUTCMonth()),
//         (this.day = f.getUTCDay()),
//         (this.hour = f.getUTCHours()),
//         (this.minute = f.getUTCMinutes()),
//         (this.second = f.getUTCSeconds()),
//         (this.millisecond = f.getUTCMilliseconds());
//     }
//   }
//   toString(e = "iso") {
//     if (e === "iso") {
//       const t = [];
//       return (
//         t.push(padNumber(this.year, 4)),
//         t.push(padNumber(this.month, 2)),
//         t.push(padNumber(this.day, 2)),
//         t.push(padNumber(this.hour, 2)),
//         t.push(padNumber(this.minute, 2)),
//         t.push(padNumber(this.second, 2)),
//         this.millisecond !== 0 &&
//           (t.push("."), t.push(padNumber(this.millisecond, 3))),
//         t.push("Z"),
//         t.join("")
//       );
//     }
//     return super.toString(e);
//   }
//   toJSON() {
//     return {
//       ...super.toJSON(),
//       millisecond: this.millisecond,
//     };
//   }
// }
// _a$5 = GeneralizedTime;
// typeStore.GeneralizedTime = _a$5;
// GeneralizedTime.NAME = "GeneralizedTime";
// var _a$4;
// class DATE extends Utf8String {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 31);
//   }
// }
// _a$4 = DATE;
// typeStore.DATE = _a$4;
// DATE.NAME = "DATE";
// var _a$3;
// class TimeOfDay extends Utf8String {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 32);
//   }
// }
// _a$3 = TimeOfDay;
// typeStore.TimeOfDay = _a$3;
// TimeOfDay.NAME = "TimeOfDay";
// var _a$2;
// class DateTime extends Utf8String {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 33);
//   }
// }
// _a$2 = DateTime;
// typeStore.DateTime = _a$2;
// DateTime.NAME = "DateTime";
// var _a$1;
// class Duration extends Utf8String {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 34);
//   }
// }
// _a$1 = Duration;
// typeStore.Duration = _a$1;
// Duration.NAME = "Duration";
// var _a;
// let TIME$1 = class extends Utf8String {
//   constructor(e = {}) {
//     super(e), (this.idBlock.tagClass = 1), (this.idBlock.tagNumber = 14);
//   }
// };
// _a = TIME$1;
// typeStore.TIME = _a;
// TIME$1.NAME = "TIME";
// function pkcs1ToJwk$1(r) {
//   const { result: e } = fromBER(r),
//     t = e.valueBlock.value;
//   return {
//     n: toString$3(bnToBuf(t[1].toBigInt()), "base64url"),
//     e: toString$3(bnToBuf(t[2].toBigInt()), "base64url"),
//     d: toString$3(bnToBuf(t[3].toBigInt()), "base64url"),
//     p: toString$3(bnToBuf(t[4].toBigInt()), "base64url"),
//     q: toString$3(bnToBuf(t[5].toBigInt()), "base64url"),
//     dp: toString$3(bnToBuf(t[6].toBigInt()), "base64url"),
//     dq: toString$3(bnToBuf(t[7].toBigInt()), "base64url"),
//     qi: toString$3(bnToBuf(t[8].toBigInt()), "base64url"),
//     kty: "RSA",
//     alg: "RS256",
//   };
// }
// function jwkToPkcs1$1(r) {
//   if (
//     r.n == null ||
//     r.e == null ||
//     r.d == null ||
//     r.p == null ||
//     r.q == null ||
//     r.dp == null ||
//     r.dq == null ||
//     r.qi == null
//   )
//     throw new CodeError$2(
//       "JWK was missing components",
//       "ERR_INVALID_PARAMETERS"
//     );
//   const t = new Sequence({
//     value: [
//       new Integer({
//         value: 0,
//       }),
//       Integer.fromBigInt(bufToBn(fromString(r.n, "base64url"))),
//       Integer.fromBigInt(bufToBn(fromString(r.e, "base64url"))),
//       Integer.fromBigInt(bufToBn(fromString(r.d, "base64url"))),
//       Integer.fromBigInt(bufToBn(fromString(r.p, "base64url"))),
//       Integer.fromBigInt(bufToBn(fromString(r.q, "base64url"))),
//       Integer.fromBigInt(bufToBn(fromString(r.dp, "base64url"))),
//       Integer.fromBigInt(bufToBn(fromString(r.dq, "base64url"))),
//       Integer.fromBigInt(bufToBn(fromString(r.qi, "base64url"))),
//     ],
//   }).toBER();
//   return new Uint8Array(t, 0, t.byteLength);
// }
// function pkixToJwk$1(r) {
//   const { result: e } = fromBER(r),
//     t = e.valueBlock.value[1].valueBlock.value[0].valueBlock.value;
//   return {
//     kty: "RSA",
//     n: toString$3(bnToBuf(t[0].toBigInt()), "base64url"),
//     e: toString$3(bnToBuf(t[1].toBigInt()), "base64url"),
//   };
// }
// function jwkToPkix$1(r) {
//   if (r.n == null || r.e == null)
//     throw new CodeError$2(
//       "JWK was missing components",
//       "ERR_INVALID_PARAMETERS"
//     );
//   const t = new Sequence({
//     value: [
//       new Sequence({
//         value: [
//           new ObjectIdentifier({
//             value: "1.2.840.113549.1.1.1",
//           }),
//           new Null(),
//         ],
//       }),
//       new BitString({
//         valueHex: new Sequence({
//           value: [
//             Integer.fromBigInt(bufToBn(fromString(r.n, "base64url"))),
//             Integer.fromBigInt(bufToBn(fromString(r.e, "base64url"))),
//           ],
//         }).toBER(),
//       }),
//     ],
//   }).toBER();
//   return new Uint8Array(t, 0, t.byteLength);
// }
// function bnToBuf(r) {
//   let e = r.toString(16);
//   e.length % 2 > 0 && (e = `0${e}`);
//   const t = e.length / 2,
//     n = new Uint8Array(t);
//   let i = 0,
//     o = 0;
//   for (; i < t; ) (n[i] = parseInt(e.slice(o, o + 2), 16)), (i += 1), (o += 2);
//   return n;
// }
// function bufToBn(r) {
//   const e = [];
//   return (
//     r.forEach(function (t) {
//       let n = t.toString(16);
//       n.length % 2 > 0 && (n = `0${n}`), e.push(n);
//     }),
//     BigInt("0x" + e.join(""))
//   );
// }
// const SALT_LENGTH = 16,
//   KEY_SIZE = 32,
//   ITERATIONS = 1e4;
// async function exportToPem(r, e) {
//   const t = webcrypto$1.get(),
//     i = new Sequence({
//       value: [
//         new Integer({
//           value: 0,
//         }),
//         new Sequence({
//           value: [
//             new ObjectIdentifier({
//               value: "1.2.840.113549.1.1.1",
//             }),
//             new Null(),
//           ],
//         }),
//         new OctetString({
//           valueHex: r.marshal(),
//         }),
//       ],
//     }).toBER(),
//     o = new Uint8Array(i, 0, i.byteLength),
//     a = randomBytes$1(SALT_LENGTH),
//     c = await pbkdf2Async(sha512$1, e, a, {
//       c: ITERATIONS,
//       dkLen: KEY_SIZE,
//     }),
//     u = randomBytes$1(16),
//     l = await t.subtle.importKey("raw", c, "AES-CBC", !1, ["encrypt"]),
//     h = await t.subtle.encrypt(
//       {
//         name: "AES-CBC",
//         iv: u,
//       },
//       l,
//       o
//     ),
//     f = new Sequence({
//       value: [
//         new OctetString({
//           valueHex: a,
//         }),
//         new Integer({
//           value: ITERATIONS,
//         }),
//         new Integer({
//           value: KEY_SIZE,
//         }),
//         new Sequence({
//           value: [
//             new ObjectIdentifier({
//               value: "1.2.840.113549.2.11",
//             }),
//             new Null(),
//           ],
//         }),
//       ],
//     }),
//     d = new Sequence({
//       value: [
//         new ObjectIdentifier({
//           value: "1.2.840.113549.1.5.13",
//         }),
//         new Sequence({
//           value: [
//             new Sequence({
//               value: [
//                 new ObjectIdentifier({
//                   value: "1.2.840.113549.1.5.12",
//                 }),
//                 f,
//               ],
//             }),
//             new Sequence({
//               value: [
//                 new ObjectIdentifier({
//                   value: "2.16.840.1.101.3.4.1.42",
//                 }),
//                 new OctetString({
//                   valueHex: u,
//                 }),
//               ],
//             }),
//           ],
//         }),
//       ],
//     }),
//     g = new Sequence({
//       value: [
//         d,
//         new OctetString({
//           valueHex: h,
//         }),
//       ],
//     }).toBER(),
//     m = new Uint8Array(g, 0, g.byteLength);
//   return [
//     "-----BEGIN ENCRYPTED PRIVATE KEY-----",
//     ...toString$3(m, "base64pad")
//       .split(/(.{64})/)
//       .filter(Boolean),
//     "-----END ENCRYPTED PRIVATE KEY-----",
//   ].join(`
// `);
// }
// async function importFromPem(r, e) {
//   const t = webcrypto$1.get();
//   let n;
//   if (r.includes("-----BEGIN ENCRYPTED PRIVATE KEY-----")) {
//     const i = fromString(
//         r
//           .replace("-----BEGIN ENCRYPTED PRIVATE KEY-----", "")
//           .replace("-----END ENCRYPTED PRIVATE KEY-----", "")
//           .replace(/\n/g, "")
//           .trim(),
//         "base64pad"
//       ),
//       { result: o } = fromBER(i),
//       {
//         iv: a,
//         salt: c,
//         iterations: u,
//         keySize: l,
//         cipherText: h,
//       } = findEncryptedPEMData(o),
//       f = await pbkdf2Async(sha512$1, e, c, {
//         c: u,
//         dkLen: l,
//       }),
//       d = await t.subtle.importKey("raw", f, "AES-CBC", !1, ["decrypt"]),
//       p = toUint8Array(
//         await t.subtle.decrypt(
//           {
//             name: "AES-CBC",
//             iv: a,
//           },
//           d,
//           h
//         )
//       ),
//       { result: g } = fromBER(p);
//     n = findPEMData(g);
//   } else if (r.includes("-----BEGIN PRIVATE KEY-----")) {
//     const i = fromString(
//         r
//           .replace("-----BEGIN PRIVATE KEY-----", "")
//           .replace("-----END PRIVATE KEY-----", "")
//           .replace(/\n/g, "")
//           .trim(),
//         "base64pad"
//       ),
//       { result: o } = fromBER(i);
//     n = findPEMData(o);
//   } else
//     throw new CodeError$2(
//       "Could not parse private key from PEM data",
//       "ERR_INVALID_PARAMETERS"
//     );
//   return unmarshalRsaPrivateKey$1(n);
// }
// function findEncryptedPEMData(r) {
//   const e = r.valueBlock.value[0];
//   if (
//     e.valueBlock.value[0].toString() !==
//     "OBJECT IDENTIFIER : 1.2.840.113549.1.5.13"
//   )
//     throw new CodeError$2(
//       "Only pkcs5PBES2 encrypted private keys are supported",
//       "ERR_INVALID_PARAMS"
//     );
//   const n = e.valueBlock.value[1].valueBlock.value[0];
//   if (
//     n.valueBlock.value[0].toString() !==
//     "OBJECT IDENTIFIER : 1.2.840.113549.1.5.12"
//   )
//     throw new CodeError$2(
//       "Only pkcs5PBKDF2 key derivation functions are supported",
//       "ERR_INVALID_PARAMS"
//     );
//   const o = n.valueBlock.value[1],
//     a = toUint8Array(o.valueBlock.value[0].getValue());
//   let c = ITERATIONS,
//     u = KEY_SIZE;
//   if (o.valueBlock.value.length === 3)
//     (c = Number(o.valueBlock.value[1].toBigInt())),
//       (u = Number(o.valueBlock.value[2].toBigInt()));
//   else if (o.valueBlock.value.length === 2)
//     throw new CodeError$2(
//       "Could not derive key size and iterations from PEM file - please use @libp2p/rsa to re-import your key",
//       "ERR_INVALID_PARAMS"
//     );
//   const l = e.valueBlock.value[1].valueBlock.value[1],
//     h = l.valueBlock.value[0].toString();
//   if (h !== "OBJECT IDENTIFIER : 1.2.840.113549.3.7") {
//     if (h !== "OBJECT IDENTIFIER : 1.3.14.3.2.7") {
//       if (h !== "OBJECT IDENTIFIER : 2.16.840.1.101.3.4.1.2") {
//         if (h !== "OBJECT IDENTIFIER : 2.16.840.1.101.3.4.1.22") {
//           if (h !== "OBJECT IDENTIFIER : 2.16.840.1.101.3.4.1.42")
//             throw new CodeError$2(
//               "Only AES-CBC encryption schemes are supported",
//               "ERR_INVALID_PARAMS"
//             );
//         }
//       }
//     }
//   }
//   const f = toUint8Array(l.valueBlock.value[1].getValue());
//   return {
//     cipherText: toUint8Array(r.valueBlock.value[1].getValue()),
//     salt: a,
//     iterations: c,
//     keySize: u,
//     iv: f,
//   };
// }
// function findPEMData(r) {
//   return toUint8Array(r.valueBlock.value[2].getValue());
// }
// function toUint8Array(r) {
//   return new Uint8Array(r, 0, r.byteLength);
// }
// async function generateKey$4(r) {
//   const e = await webcrypto$1.get().subtle.generateKey(
//       {
//         name: "RSASSA-PKCS1-v1_5",
//         modulusLength: r,
//         publicExponent: new Uint8Array([1, 0, 1]),
//         hash: {
//           name: "SHA-256",
//         },
//       },
//       !0,
//       ["sign", "verify"]
//     ),
//     t = await exportKey$1(e);
//   return {
//     privateKey: t[0],
//     publicKey: t[1],
//   };
// }
// async function unmarshalPrivateKey$3(r) {
//   const t = [
//       await webcrypto$1.get().subtle.importKey(
//         "jwk",
//         r,
//         {
//           name: "RSASSA-PKCS1-v1_5",
//           hash: {
//             name: "SHA-256",
//           },
//         },
//         !0,
//         ["sign"]
//       ),
//       await derivePublicFromPrivate$1(r),
//     ],
//     n = await exportKey$1({
//       privateKey: t[0],
//       publicKey: t[1],
//     });
//   return {
//     privateKey: n[0],
//     publicKey: n[1],
//   };
// }
// async function hashAndSign$4(r, e) {
//   const t = await webcrypto$1.get().subtle.importKey(
//       "jwk",
//       r,
//       {
//         name: "RSASSA-PKCS1-v1_5",
//         hash: {
//           name: "SHA-256",
//         },
//       },
//       !1,
//       ["sign"]
//     ),
//     n = await webcrypto$1.get().subtle.sign(
//       {
//         name: "RSASSA-PKCS1-v1_5",
//       },
//       t,
//       e instanceof Uint8Array ? e : e.subarray()
//     );
//   return new Uint8Array(n, 0, n.byteLength);
// }
// async function hashAndVerify$4(r, e, t) {
//   const n = await webcrypto$1.get().subtle.importKey(
//     "jwk",
//     r,
//     {
//       name: "RSASSA-PKCS1-v1_5",
//       hash: {
//         name: "SHA-256",
//       },
//     },
//     !1,
//     ["verify"]
//   );
//   return webcrypto$1.get().subtle.verify(
//     {
//       name: "RSASSA-PKCS1-v1_5",
//     },
//     n,
//     e,
//     t instanceof Uint8Array ? t : t.subarray()
//   );
// }
// async function exportKey$1(r) {
//   if (r.privateKey == null || r.publicKey == null)
//     throw new CodeError$2(
//       "Private and public key are required",
//       "ERR_INVALID_PARAMETERS"
//     );
//   return Promise.all([
//     webcrypto$1.get().subtle.exportKey("jwk", r.privateKey),
//     webcrypto$1.get().subtle.exportKey("jwk", r.publicKey),
//   ]);
// }
// async function derivePublicFromPrivate$1(r) {
//   return webcrypto$1.get().subtle.importKey(
//     "jwk",
//     {
//       kty: r.kty,
//       n: r.n,
//       e: r.e,
//     },
//     {
//       name: "RSASSA-PKCS1-v1_5",
//       hash: {
//         name: "SHA-256",
//       },
//     },
//     !0,
//     ["verify"]
//   );
// }
// function keySize$1(r) {
//   if (r.kty !== "RSA")
//     throw new CodeError$2("invalid key type", "ERR_INVALID_KEY_TYPE");
//   if (r.n == null)
//     throw new CodeError$2("invalid key modulus", "ERR_INVALID_KEY_MODULUS");
//   return fromString(r.n, "base64url").length * 8;
// }
// const MAX_RSA_KEY_SIZE = 8192;
// let RsaPublicKey$1 = class {
//     constructor(e) {
//       y(this, "_key");
//       this._key = e;
//     }
//     verify(e, t) {
//       return hashAndVerify$4(this._key, t, e);
//     }
//     marshal() {
//       return jwkToPkix$1(this._key);
//     }
//     get bytes() {
//       return PublicKey$1.encode({
//         Type: KeyType$1.RSA,
//         Data: this.marshal(),
//       }).subarray();
//     }
//     equals(e) {
//       return equals(this.bytes, e.bytes);
//     }
//     hash() {
//       const e = sha256$2.digest(this.bytes);
//       return isPromise$5(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//     }
//   },
//   RsaPrivateKey$1 = class {
//     constructor(e, t) {
//       y(this, "_key");
//       y(this, "_publicKey");
//       (this._key = e), (this._publicKey = t);
//     }
//     genSecret() {
//       return randomBytes$1(16);
//     }
//     sign(e) {
//       return hashAndSign$4(this._key, e);
//     }
//     get public() {
//       if (this._publicKey == null)
//         throw new CodeError$2(
//           "public key not provided",
//           "ERR_PUBKEY_NOT_PROVIDED"
//         );
//       return new RsaPublicKey$1(this._publicKey);
//     }
//     marshal() {
//       return jwkToPkcs1$1(this._key);
//     }
//     get bytes() {
//       return PrivateKey$1.encode({
//         Type: KeyType$1.RSA,
//         Data: this.marshal(),
//       }).subarray();
//     }
//     equals(e) {
//       return equals(this.bytes, e.bytes);
//     }
//     hash() {
//       const e = sha256$2.digest(this.bytes);
//       return isPromise$5(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//     }
//     async id() {
//       const e = await this.public.hash();
//       return toString$3(e, "base58btc");
//     }
//     async export(e, t = "pkcs-8") {
//       if (t === "pkcs-8") return exportToPem(this, e);
//       if (t === "libp2p-key") return exporter$1(this.bytes, e);
//       throw new CodeError$2(
//         `export format '${t}' is not supported`,
//         "ERR_INVALID_EXPORT_FORMAT"
//       );
//     }
//   };
// async function unmarshalRsaPrivateKey$1(r) {
//   const e = pkcs1ToJwk$1(r);
//   if (keySize$1(e) > MAX_RSA_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   const t = await unmarshalPrivateKey$3(e);
//   return new RsaPrivateKey$1(t.privateKey, t.publicKey);
// }
// function unmarshalRsaPublicKey$1(r) {
//   const e = pkixToJwk$1(r);
//   if (keySize$1(e) > MAX_RSA_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   return new RsaPublicKey$1(e);
// }
// async function fromJwk$1(r) {
//   if (keySize$1(r) > MAX_RSA_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   const e = await unmarshalPrivateKey$3(r);
//   return new RsaPrivateKey$1(e.privateKey, e.publicKey);
// }
// async function generateKeyPair$5(r) {
//   if (r > MAX_RSA_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   const e = await generateKey$4(r);
//   return new RsaPrivateKey$1(e.privateKey, e.publicKey);
// }
// const RSA$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         MAX_RSA_KEY_SIZE,
//         RsaPrivateKey: RsaPrivateKey$1,
//         RsaPublicKey: RsaPublicKey$1,
//         fromJwk: fromJwk$1,
//         generateKeyPair: generateKeyPair$5,
//         unmarshalRsaPrivateKey: unmarshalRsaPrivateKey$1,
//         unmarshalRsaPublicKey: unmarshalRsaPublicKey$1,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   SHA256_K = new Uint32Array([
//     1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
//     2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
//     1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
//     264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
//     2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
//     113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
//     1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
//     3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
//     430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
//     1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
//     2428436474, 2756734187, 3204031479, 3329325298,
//   ]),
//   SHA256_IV = new Uint32Array([
//     1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
//     528734635, 1541459225,
//   ]),
//   SHA256_W = new Uint32Array(64);
// class SHA256 extends HashMD {
//   constructor() {
//     super(64, 32, 8, !1),
//       (this.A = SHA256_IV[0] | 0),
//       (this.B = SHA256_IV[1] | 0),
//       (this.C = SHA256_IV[2] | 0),
//       (this.D = SHA256_IV[3] | 0),
//       (this.E = SHA256_IV[4] | 0),
//       (this.F = SHA256_IV[5] | 0),
//       (this.G = SHA256_IV[6] | 0),
//       (this.H = SHA256_IV[7] | 0);
//   }
//   get() {
//     const { A: e, B: t, C: n, D: i, E: o, F: a, G: c, H: u } = this;
//     return [e, t, n, i, o, a, c, u];
//   }
//   set(e, t, n, i, o, a, c, u) {
//     (this.A = e | 0),
//       (this.B = t | 0),
//       (this.C = n | 0),
//       (this.D = i | 0),
//       (this.E = o | 0),
//       (this.F = a | 0),
//       (this.G = c | 0),
//       (this.H = u | 0);
//   }
//   process(e, t) {
//     for (let f = 0; f < 16; f++, t += 4) SHA256_W[f] = e.getUint32(t, !1);
//     for (let f = 16; f < 64; f++) {
//       const d = SHA256_W[f - 15],
//         p = SHA256_W[f - 2],
//         g = rotr(d, 7) ^ rotr(d, 18) ^ (d >>> 3),
//         m = rotr(p, 17) ^ rotr(p, 19) ^ (p >>> 10);
//       SHA256_W[f] = (m + SHA256_W[f - 7] + g + SHA256_W[f - 16]) | 0;
//     }
//     let { A: n, B: i, C: o, D: a, E: c, F: u, G: l, H: h } = this;
//     for (let f = 0; f < 64; f++) {
//       const d = rotr(c, 6) ^ rotr(c, 11) ^ rotr(c, 25),
//         p = (h + d + Chi(c, u, l) + SHA256_K[f] + SHA256_W[f]) | 0,
//         m = ((rotr(n, 2) ^ rotr(n, 13) ^ rotr(n, 22)) + Maj(n, i, o)) | 0;
//       (h = l),
//         (l = u),
//         (u = c),
//         (c = (a + p) | 0),
//         (a = o),
//         (o = i),
//         (i = n),
//         (n = (p + m) | 0);
//     }
//     (n = (n + this.A) | 0),
//       (i = (i + this.B) | 0),
//       (o = (o + this.C) | 0),
//       (a = (a + this.D) | 0),
//       (c = (c + this.E) | 0),
//       (u = (u + this.F) | 0),
//       (l = (l + this.G) | 0),
//       (h = (h + this.H) | 0),
//       this.set(n, i, o, a, c, u, l, h);
//   }
//   roundClean() {
//     SHA256_W.fill(0);
//   }
//   destroy() {
//     this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
//   }
// }
// const sha256$1 = wrapConstructor(() => new SHA256());
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// function validatePointOpts(r) {
//   const e = validateBasic(r);
//   validateObject(
//     e,
//     {
//       a: "field",
//       b: "field",
//     },
//     {
//       allowedPrivateKeyLengths: "array",
//       wrapPrivateKey: "boolean",
//       isTorsionFree: "function",
//       clearCofactor: "function",
//       allowInfinityPoint: "boolean",
//       fromBytes: "function",
//       toBytes: "function",
//     }
//   );
//   const { endo: t, Fp: n, a: i } = e;
//   if (t) {
//     if (!n.eql(i, n.ZERO))
//       throw new Error(
//         "Endomorphism can only be defined for Koblitz curves that have a=0"
//       );
//     if (
//       typeof t != "object" ||
//       typeof t.beta != "bigint" ||
//       typeof t.splitScalar != "function"
//     )
//       throw new Error(
//         "Expected endomorphism with beta: bigint and splitScalar: function"
//       );
//   }
//   return Object.freeze({
//     ...e,
//   });
// }
// const { bytesToNumberBE: b2n, hexToBytes: h2b } = ut,
//   DER = {
//     Err: class extends Error {
//       constructor(e = "") {
//         super(e);
//       }
//     },
//     _parseInt(r) {
//       const { Err: e } = DER;
//       if (r.length < 2 || r[0] !== 2)
//         throw new e("Invalid signature integer tag");
//       const t = r[1],
//         n = r.subarray(2, t + 2);
//       if (!t || n.length !== t)
//         throw new e("Invalid signature integer: wrong length");
//       if (n[0] & 128) throw new e("Invalid signature integer: negative");
//       if (n[0] === 0 && !(n[1] & 128))
//         throw new e("Invalid signature integer: unnecessary leading zero");
//       return {
//         d: b2n(n),
//         l: r.subarray(t + 2),
//       };
//     },
//     toSig(r) {
//       const { Err: e } = DER,
//         t = typeof r == "string" ? h2b(r) : r;
//       abytes(t);
//       let n = t.length;
//       if (n < 2 || t[0] != 48) throw new e("Invalid signature tag");
//       if (t[1] !== n - 2) throw new e("Invalid signature: incorrect length");
//       const { d: i, l: o } = DER._parseInt(t.subarray(2)),
//         { d: a, l: c } = DER._parseInt(o);
//       if (c.length) throw new e("Invalid signature: left bytes after parsing");
//       return {
//         r: i,
//         s: a,
//       };
//     },
//     hexFromSig(r) {
//       const e = (l) => (Number.parseInt(l[0], 16) & 8 ? "00" + l : l),
//         t = (l) => {
//           const h = l.toString(16);
//           return h.length & 1 ? `0${h}` : h;
//         },
//         n = e(t(r.s)),
//         i = e(t(r.r)),
//         o = n.length / 2,
//         a = i.length / 2,
//         c = t(o),
//         u = t(a);
//       return `30${t(a + o + 4)}02${u}${i}02${c}${n}`;
//     },
//   },
//   _0n = BigInt(0),
//   _1n$1 = BigInt(1);
// BigInt(2);
// const _3n = BigInt(3);
// BigInt(4);
// function weierstrassPoints(r) {
//   const e = validatePointOpts(r),
//     { Fp: t } = e,
//     n =
//       e.toBytes ||
//       ((g, m, b) => {
//         const _ = m.toAffine();
//         return concatBytes(
//           Uint8Array.from([4]),
//           t.toBytes(_.x),
//           t.toBytes(_.y)
//         );
//       }),
//     i =
//       e.fromBytes ||
//       ((g) => {
//         const m = g.subarray(1),
//           b = t.fromBytes(m.subarray(0, t.BYTES)),
//           _ = t.fromBytes(m.subarray(t.BYTES, 2 * t.BYTES));
//         return {
//           x: b,
//           y: _,
//         };
//       });
//   function o(g) {
//     const { a: m, b } = e,
//       _ = t.sqr(g),
//       w = t.mul(_, g);
//     return t.add(t.add(w, t.mul(g, m)), b);
//   }
//   if (!t.eql(t.sqr(e.Gy), o(e.Gx)))
//     throw new Error("bad generator point: equation left != right");
//   function a(g) {
//     return typeof g == "bigint" && _0n < g && g < e.n;
//   }
//   function c(g) {
//     if (!a(g)) throw new Error("Expected valid bigint: 0 < bigint < curve.n");
//   }
//   function u(g) {
//     const {
//       allowedPrivateKeyLengths: m,
//       nByteLength: b,
//       wrapPrivateKey: _,
//       n: w,
//     } = e;
//     if (m && typeof g != "bigint") {
//       if (
//         (isBytes$2(g) && (g = bytesToHex(g)),
//         typeof g != "string" || !m.includes(g.length))
//       )
//         throw new Error("Invalid key");
//       g = g.padStart(b * 2, "0");
//     }
//     let E;
//     try {
//       E =
//         typeof g == "bigint"
//           ? g
//           : bytesToNumberBE(ensureBytes$1("private key", g, b));
//     } catch {
//       throw new Error(
//         `private key must be ${b} bytes, hex or bigint, not ${typeof g}`
//       );
//     }
//     return _ && (E = mod(E, w)), c(E), E;
//   }
//   const l = new Map();
//   function h(g) {
//     if (!(g instanceof f)) throw new Error("ProjectivePoint expected");
//   }
//   class f {
//     constructor(m, b, _) {
//       if (
//         ((this.px = m),
//         (this.py = b),
//         (this.pz = _),
//         m == null || !t.isValid(m))
//       )
//         throw new Error("x required");
//       if (b == null || !t.isValid(b)) throw new Error("y required");
//       if (_ == null || !t.isValid(_)) throw new Error("z required");
//     }
//     static fromAffine(m) {
//       const { x: b, y: _ } = m || {};
//       if (!m || !t.isValid(b) || !t.isValid(_))
//         throw new Error("invalid affine point");
//       if (m instanceof f) throw new Error("projective point not allowed");
//       const w = (E) => t.eql(E, t.ZERO);
//       return w(b) && w(_) ? f.ZERO : new f(b, _, t.ONE);
//     }
//     get x() {
//       return this.toAffine().x;
//     }
//     get y() {
//       return this.toAffine().y;
//     }
//     static normalizeZ(m) {
//       const b = t.invertBatch(m.map((_) => _.pz));
//       return m.map((_, w) => _.toAffine(b[w])).map(f.fromAffine);
//     }
//     static fromHex(m) {
//       const b = f.fromAffine(i(ensureBytes$1("pointHex", m)));
//       return b.assertValidity(), b;
//     }
//     static fromPrivateKey(m) {
//       return f.BASE.multiply(u(m));
//     }
//     _setWindowSize(m) {
//       (this._WINDOW_SIZE = m), l.delete(this);
//     }
//     assertValidity() {
//       if (this.is0()) {
//         if (e.allowInfinityPoint && !t.is0(this.py)) return;
//         throw new Error("bad point: ZERO");
//       }
//       const { x: m, y: b } = this.toAffine();
//       if (!t.isValid(m) || !t.isValid(b))
//         throw new Error("bad point: x or y not FE");
//       const _ = t.sqr(b),
//         w = o(m);
//       if (!t.eql(_, w)) throw new Error("bad point: equation left != right");
//       if (!this.isTorsionFree())
//         throw new Error("bad point: not in prime-order subgroup");
//     }
//     hasEvenY() {
//       const { y: m } = this.toAffine();
//       if (t.isOdd) return !t.isOdd(m);
//       throw new Error("Field doesn't support isOdd");
//     }
//     equals(m) {
//       h(m);
//       const { px: b, py: _, pz: w } = this,
//         { px: E, py: v, pz: S } = m,
//         I = t.eql(t.mul(b, S), t.mul(E, w)),
//         T = t.eql(t.mul(_, S), t.mul(v, w));
//       return I && T;
//     }
//     negate() {
//       return new f(this.px, t.neg(this.py), this.pz);
//     }
//     double() {
//       const { a: m, b } = e,
//         _ = t.mul(b, _3n),
//         { px: w, py: E, pz: v } = this;
//       let S = t.ZERO,
//         I = t.ZERO,
//         T = t.ZERO,
//         A = t.mul(w, w),
//         C = t.mul(E, E),
//         x = t.mul(v, v),
//         $ = t.mul(w, E);
//       return (
//         ($ = t.add($, $)),
//         (T = t.mul(w, v)),
//         (T = t.add(T, T)),
//         (S = t.mul(m, T)),
//         (I = t.mul(_, x)),
//         (I = t.add(S, I)),
//         (S = t.sub(C, I)),
//         (I = t.add(C, I)),
//         (I = t.mul(S, I)),
//         (S = t.mul($, S)),
//         (T = t.mul(_, T)),
//         (x = t.mul(m, x)),
//         ($ = t.sub(A, x)),
//         ($ = t.mul(m, $)),
//         ($ = t.add($, T)),
//         (T = t.add(A, A)),
//         (A = t.add(T, A)),
//         (A = t.add(A, x)),
//         (A = t.mul(A, $)),
//         (I = t.add(I, A)),
//         (x = t.mul(E, v)),
//         (x = t.add(x, x)),
//         (A = t.mul(x, $)),
//         (S = t.sub(S, A)),
//         (T = t.mul(x, C)),
//         (T = t.add(T, T)),
//         (T = t.add(T, T)),
//         new f(S, I, T)
//       );
//     }
//     add(m) {
//       h(m);
//       const { px: b, py: _, pz: w } = this,
//         { px: E, py: v, pz: S } = m;
//       let I = t.ZERO,
//         T = t.ZERO,
//         A = t.ZERO;
//       const C = e.a,
//         x = t.mul(e.b, _3n);
//       let $ = t.mul(b, E),
//         O = t.mul(_, v),
//         M = t.mul(w, S),
//         K = t.add(b, _),
//         B = t.add(E, v);
//       (K = t.mul(K, B)),
//         (B = t.add($, O)),
//         (K = t.sub(K, B)),
//         (B = t.add(b, w));
//       let N = t.add(E, S);
//       return (
//         (B = t.mul(B, N)),
//         (N = t.add($, M)),
//         (B = t.sub(B, N)),
//         (N = t.add(_, w)),
//         (I = t.add(v, S)),
//         (N = t.mul(N, I)),
//         (I = t.add(O, M)),
//         (N = t.sub(N, I)),
//         (A = t.mul(C, B)),
//         (I = t.mul(x, M)),
//         (A = t.add(I, A)),
//         (I = t.sub(O, A)),
//         (A = t.add(O, A)),
//         (T = t.mul(I, A)),
//         (O = t.add($, $)),
//         (O = t.add(O, $)),
//         (M = t.mul(C, M)),
//         (B = t.mul(x, B)),
//         (O = t.add(O, M)),
//         (M = t.sub($, M)),
//         (M = t.mul(C, M)),
//         (B = t.add(B, M)),
//         ($ = t.mul(O, B)),
//         (T = t.add(T, $)),
//         ($ = t.mul(N, B)),
//         (I = t.mul(K, I)),
//         (I = t.sub(I, $)),
//         ($ = t.mul(K, O)),
//         (A = t.mul(N, A)),
//         (A = t.add(A, $)),
//         new f(I, T, A)
//       );
//     }
//     subtract(m) {
//       return this.add(m.negate());
//     }
//     is0() {
//       return this.equals(f.ZERO);
//     }
//     wNAF(m) {
//       return p.wNAFCached(this, l, m, (b) => {
//         const _ = t.invertBatch(b.map((w) => w.pz));
//         return b.map((w, E) => w.toAffine(_[E])).map(f.fromAffine);
//       });
//     }
//     multiplyUnsafe(m) {
//       const b = f.ZERO;
//       if (m === _0n) return b;
//       if ((c(m), m === _1n$1)) return this;
//       const { endo: _ } = e;
//       if (!_) return p.unsafeLadder(this, m);
//       let { k1neg: w, k1: E, k2neg: v, k2: S } = _.splitScalar(m),
//         I = b,
//         T = b,
//         A = this;
//       for (; E > _0n || S > _0n; )
//         E & _1n$1 && (I = I.add(A)),
//           S & _1n$1 && (T = T.add(A)),
//           (A = A.double()),
//           (E >>= _1n$1),
//           (S >>= _1n$1);
//       return (
//         w && (I = I.negate()),
//         v && (T = T.negate()),
//         (T = new f(t.mul(T.px, _.beta), T.py, T.pz)),
//         I.add(T)
//       );
//     }
//     multiply(m) {
//       c(m);
//       let b = m,
//         _,
//         w;
//       const { endo: E } = e;
//       if (E) {
//         const { k1neg: v, k1: S, k2neg: I, k2: T } = E.splitScalar(b);
//         let { p: A, f: C } = this.wNAF(S),
//           { p: x, f: $ } = this.wNAF(T);
//         (A = p.constTimeNegate(v, A)),
//           (x = p.constTimeNegate(I, x)),
//           (x = new f(t.mul(x.px, E.beta), x.py, x.pz)),
//           (_ = A.add(x)),
//           (w = C.add($));
//       } else {
//         const { p: v, f: S } = this.wNAF(b);
//         (_ = v), (w = S);
//       }
//       return f.normalizeZ([_, w])[0];
//     }
//     multiplyAndAddUnsafe(m, b, _) {
//       const w = f.BASE,
//         E = (S, I) =>
//           I === _0n || I === _1n$1 || !S.equals(w)
//             ? S.multiplyUnsafe(I)
//             : S.multiply(I),
//         v = E(this, b).add(E(m, _));
//       return v.is0() ? void 0 : v;
//     }
//     toAffine(m) {
//       const { px: b, py: _, pz: w } = this,
//         E = this.is0();
//       m == null && (m = E ? t.ONE : t.inv(w));
//       const v = t.mul(b, m),
//         S = t.mul(_, m),
//         I = t.mul(w, m);
//       if (E)
//         return {
//           x: t.ZERO,
//           y: t.ZERO,
//         };
//       if (!t.eql(I, t.ONE)) throw new Error("invZ was invalid");
//       return {
//         x: v,
//         y: S,
//       };
//     }
//     isTorsionFree() {
//       const { h: m, isTorsionFree: b } = e;
//       if (m === _1n$1) return !0;
//       if (b) return b(f, this);
//       throw new Error(
//         "isTorsionFree() has not been declared for the elliptic curve"
//       );
//     }
//     clearCofactor() {
//       const { h: m, clearCofactor: b } = e;
//       return m === _1n$1 ? this : b ? b(f, this) : this.multiplyUnsafe(e.h);
//     }
//     toRawBytes(m = !0) {
//       return this.assertValidity(), n(f, this, m);
//     }
//     toHex(m = !0) {
//       return bytesToHex(this.toRawBytes(m));
//     }
//   }
//   (f.BASE = new f(e.Gx, e.Gy, t.ONE)), (f.ZERO = new f(t.ZERO, t.ONE, t.ZERO));
//   const d = e.nBitLength,
//     p = wNAF(f, e.endo ? Math.ceil(d / 2) : d);
//   return {
//     CURVE: e,
//     ProjectivePoint: f,
//     normPrivateKeyToScalar: u,
//     weierstrassEquation: o,
//     isWithinCurveOrder: a,
//   };
// }
// function validateOpts(r) {
//   const e = validateBasic(r);
//   return (
//     validateObject(
//       e,
//       {
//         hash: "hash",
//         hmac: "function",
//         randomBytes: "function",
//       },
//       {
//         bits2int: "function",
//         bits2int_modN: "function",
//         lowS: "boolean",
//       }
//     ),
//     Object.freeze({
//       lowS: !0,
//       ...e,
//     })
//   );
// }
// function weierstrass(r) {
//   const e = validateOpts(r),
//     { Fp: t, n } = e,
//     i = t.BYTES + 1,
//     o = 2 * t.BYTES + 1;
//   function a(B) {
//     return _0n < B && B < t.ORDER;
//   }
//   function c(B) {
//     return mod(B, n);
//   }
//   function u(B) {
//     return invert(B, n);
//   }
//   const {
//       ProjectivePoint: l,
//       normPrivateKeyToScalar: h,
//       weierstrassEquation: f,
//       isWithinCurveOrder: d,
//     } = weierstrassPoints({
//       ...e,
//       toBytes(B, N, D) {
//         const P = N.toAffine(),
//           R = t.toBytes(P.x),
//           k = concatBytes;
//         return D
//           ? k(Uint8Array.from([N.hasEvenY() ? 2 : 3]), R)
//           : k(Uint8Array.from([4]), R, t.toBytes(P.y));
//       },
//       fromBytes(B) {
//         const N = B.length,
//           D = B[0],
//           P = B.subarray(1);
//         if (N === i && (D === 2 || D === 3)) {
//           const R = bytesToNumberBE(P);
//           if (!a(R)) throw new Error("Point is not on curve");
//           const k = f(R);
//           let L;
//           try {
//             L = t.sqrt(k);
//           } catch (z) {
//             const Y = z instanceof Error ? ": " + z.message : "";
//             throw new Error("Point is not on curve" + Y);
//           }
//           const U = (L & _1n$1) === _1n$1;
//           return (
//             ((D & 1) === 1) !== U && (L = t.neg(L)),
//             {
//               x: R,
//               y: L,
//             }
//           );
//         } else if (N === o && D === 4) {
//           const R = t.fromBytes(P.subarray(0, t.BYTES)),
//             k = t.fromBytes(P.subarray(t.BYTES, 2 * t.BYTES));
//           return {
//             x: R,
//             y: k,
//           };
//         } else
//           throw new Error(
//             `Point of length ${N} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`
//           );
//       },
//     }),
//     p = (B) => bytesToHex(numberToBytesBE(B, e.nByteLength));
//   function g(B) {
//     const N = n >> _1n$1;
//     return B > N;
//   }
//   function m(B) {
//     return g(B) ? c(-B) : B;
//   }
//   const b = (B, N, D) => bytesToNumberBE(B.slice(N, D));
//   class _ {
//     constructor(N, D, P) {
//       (this.r = N), (this.s = D), (this.recovery = P), this.assertValidity();
//     }
//     static fromCompact(N) {
//       const D = e.nByteLength;
//       return (
//         (N = ensureBytes$1("compactSignature", N, D * 2)),
//         new _(b(N, 0, D), b(N, D, 2 * D))
//       );
//     }
//     static fromDER(N) {
//       const { r: D, s: P } = DER.toSig(ensureBytes$1("DER", N));
//       return new _(D, P);
//     }
//     assertValidity() {
//       if (!d(this.r)) throw new Error("r must be 0 < r < CURVE.n");
//       if (!d(this.s)) throw new Error("s must be 0 < s < CURVE.n");
//     }
//     addRecoveryBit(N) {
//       return new _(this.r, this.s, N);
//     }
//     recoverPublicKey(N) {
//       const { r: D, s: P, recovery: R } = this,
//         k = T(ensureBytes$1("msgHash", N));
//       if (R == null || ![0, 1, 2, 3].includes(R))
//         throw new Error("recovery id invalid");
//       const L = R === 2 || R === 3 ? D + e.n : D;
//       if (L >= t.ORDER) throw new Error("recovery id 2 or 3 invalid");
//       const U = R & 1 ? "03" : "02",
//         H = l.fromHex(U + p(L)),
//         z = u(L),
//         Y = c(-k * z),
//         G = c(P * z),
//         W = l.BASE.multiplyAndAddUnsafe(H, Y, G);
//       if (!W) throw new Error("point at infinify");
//       return W.assertValidity(), W;
//     }
//     hasHighS() {
//       return g(this.s);
//     }
//     normalizeS() {
//       return this.hasHighS() ? new _(this.r, c(-this.s), this.recovery) : this;
//     }
//     toDERRawBytes() {
//       return hexToBytes(this.toDERHex());
//     }
//     toDERHex() {
//       return DER.hexFromSig({
//         r: this.r,
//         s: this.s,
//       });
//     }
//     toCompactRawBytes() {
//       return hexToBytes(this.toCompactHex());
//     }
//     toCompactHex() {
//       return p(this.r) + p(this.s);
//     }
//   }
//   const w = {
//     isValidPrivateKey(B) {
//       try {
//         return h(B), !0;
//       } catch {
//         return !1;
//       }
//     },
//     normPrivateKeyToScalar: h,
//     randomPrivateKey: () => {
//       const B = getMinHashLength(e.n);
//       return mapHashToField(e.randomBytes(B), e.n);
//     },
//     precompute(B = 8, N = l.BASE) {
//       return N._setWindowSize(B), N.multiply(BigInt(3)), N;
//     },
//   };
//   function E(B, N = !0) {
//     return l.fromPrivateKey(B).toRawBytes(N);
//   }
//   function v(B) {
//     const N = isBytes$2(B),
//       D = typeof B == "string",
//       P = (N || D) && B.length;
//     return N
//       ? P === i || P === o
//       : D
//       ? P === 2 * i || P === 2 * o
//       : B instanceof l;
//   }
//   function S(B, N, D = !0) {
//     if (v(B)) throw new Error("first arg must be private key");
//     if (!v(N)) throw new Error("second arg must be public key");
//     return l.fromHex(N).multiply(h(B)).toRawBytes(D);
//   }
//   const I =
//       e.bits2int ||
//       function (B) {
//         const N = bytesToNumberBE(B),
//           D = B.length * 8 - e.nBitLength;
//         return D > 0 ? N >> BigInt(D) : N;
//       },
//     T =
//       e.bits2int_modN ||
//       function (B) {
//         return c(I(B));
//       },
//     A = bitMask(e.nBitLength);
//   function C(B) {
//     if (typeof B != "bigint") throw new Error("bigint expected");
//     if (!(_0n <= B && B < A))
//       throw new Error(`bigint expected < 2^${e.nBitLength}`);
//     return numberToBytesBE(B, e.nByteLength);
//   }
//   function x(B, N, D = $) {
//     if (["recovered", "canonical"].some((j) => j in D))
//       throw new Error("sign() legacy options not supported");
//     const { hash: P, randomBytes: R } = e;
//     let { lowS: k, prehash: L, extraEntropy: U } = D;
//     k == null && (k = !0),
//       (B = ensureBytes$1("msgHash", B)),
//       L && (B = ensureBytes$1("prehashed msgHash", P(B)));
//     const H = T(B),
//       z = h(N),
//       Y = [C(z), C(H)];
//     if (U != null && U !== !1) {
//       const j = U === !0 ? R(t.BYTES) : U;
//       Y.push(ensureBytes$1("extraEntropy", j));
//     }
//     const G = concatBytes(...Y),
//       W = H;
//     function X(j) {
//       const ee = I(j);
//       if (!d(ee)) return;
//       const te = u(ee),
//         re = l.BASE.multiply(ee).toAffine(),
//         J = c(re.x);
//       if (J === _0n) return;
//       const oe = c(te * c(W + J * z));
//       if (oe === _0n) return;
//       let ge = (re.x === J ? 0 : 2) | Number(re.y & _1n$1),
//         De = oe;
//       return k && g(oe) && ((De = m(oe)), (ge ^= 1)), new _(J, De, ge);
//     }
//     return {
//       seed: G,
//       k2sig: X,
//     };
//   }
//   const $ = {
//       lowS: e.lowS,
//       prehash: !1,
//     },
//     O = {
//       lowS: e.lowS,
//       prehash: !1,
//     };
//   function M(B, N, D = $) {
//     const { seed: P, k2sig: R } = x(B, N, D),
//       k = e;
//     return createHmacDrbg(k.hash.outputLen, k.nByteLength, k.hmac)(P, R);
//   }
//   l.BASE._setWindowSize(8);
//   function K(B, N, D, P = O) {
//     var re;
//     const R = B;
//     if (
//       ((N = ensureBytes$1("msgHash", N)),
//       (D = ensureBytes$1("publicKey", D)),
//       "strict" in P)
//     )
//       throw new Error("options.strict was renamed to lowS");
//     const { lowS: k, prehash: L } = P;
//     let U, H;
//     try {
//       if (typeof R == "string" || isBytes$2(R))
//         try {
//           U = _.fromDER(R);
//         } catch (J) {
//           if (!(J instanceof DER.Err)) throw J;
//           U = _.fromCompact(R);
//         }
//       else if (
//         typeof R == "object" &&
//         typeof R.r == "bigint" &&
//         typeof R.s == "bigint"
//       ) {
//         const { r: J, s: oe } = R;
//         U = new _(J, oe);
//       } else throw new Error("PARSE");
//       H = l.fromHex(D);
//     } catch (J) {
//       if (J.message === "PARSE")
//         throw new Error(
//           "signature must be Signature instance, Uint8Array or hex string"
//         );
//       return !1;
//     }
//     if (k && U.hasHighS()) return !1;
//     L && (N = e.hash(N));
//     const { r: z, s: Y } = U,
//       G = T(N),
//       W = u(Y),
//       X = c(G * W),
//       j = c(z * W),
//       ee =
//         (re = l.BASE.multiplyAndAddUnsafe(H, X, j)) == null
//           ? void 0
//           : re.toAffine();
//     return ee ? c(ee.x) === z : !1;
//   }
//   return {
//     CURVE: e,
//     getPublicKey: E,
//     getSharedSecret: S,
//     sign: M,
//     verify: K,
//     ProjectivePoint: l,
//     Signature: _,
//     utils: w,
//   };
// }
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// function getHash(r) {
//   return {
//     hash: r,
//     hmac: (e, ...t) => hmac$1(r, e, concatBytes$1(...t)),
//     randomBytes: randomBytes$2,
//   };
// }
// function createCurve(r, e) {
//   const t = (n) =>
//     weierstrass({
//       ...r,
//       ...getHash(n),
//     });
//   return Object.freeze({
//     ...t(e),
//     create: t,
//   });
// }
// /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// const secp256k1P = BigInt(
//     "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
//   ),
//   secp256k1N = BigInt(
//     "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
//   ),
//   _1n = BigInt(1),
//   _2n = BigInt(2),
//   divNearest = (r, e) => (r + e / _2n) / e;
// function sqrtMod(r) {
//   const e = secp256k1P,
//     t = BigInt(3),
//     n = BigInt(6),
//     i = BigInt(11),
//     o = BigInt(22),
//     a = BigInt(23),
//     c = BigInt(44),
//     u = BigInt(88),
//     l = (r * r * r) % e,
//     h = (l * l * r) % e,
//     f = (pow2(h, t, e) * h) % e,
//     d = (pow2(f, t, e) * h) % e,
//     p = (pow2(d, _2n, e) * l) % e,
//     g = (pow2(p, i, e) * p) % e,
//     m = (pow2(g, o, e) * g) % e,
//     b = (pow2(m, c, e) * m) % e,
//     _ = (pow2(b, u, e) * b) % e,
//     w = (pow2(_, c, e) * m) % e,
//     E = (pow2(w, t, e) * h) % e,
//     v = (pow2(E, a, e) * g) % e,
//     S = (pow2(v, n, e) * l) % e,
//     I = pow2(S, _2n, e);
//   if (!Fp.eql(Fp.sqr(I), r)) throw new Error("Cannot find square root");
//   return I;
// }
// const Fp = Field(secp256k1P, void 0, void 0, {
//     sqrt: sqrtMod,
//   }),
//   secp256k1 = createCurve(
//     {
//       a: BigInt(0),
//       b: BigInt(7),
//       Fp,
//       n: secp256k1N,
//       Gx: BigInt(
//         "55066263022277343669578718895168534326250603453777594175500187360389116729240"
//       ),
//       Gy: BigInt(
//         "32670510020758816978083085130507043184471273380659243275938904335757337482424"
//       ),
//       h: BigInt(1),
//       lowS: !0,
//       endo: {
//         beta: BigInt(
//           "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
//         ),
//         splitScalar: (r) => {
//           const e = secp256k1N,
//             t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
//             n = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
//             i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
//             o = t,
//             a = BigInt("0x100000000000000000000000000000000"),
//             c = divNearest(o * r, e),
//             u = divNearest(-n * r, e);
//           let l = mod(r - c * t - u * i, e),
//             h = mod(-c * n - u * o, e);
//           const f = l > a,
//             d = h > a;
//           if ((f && (l = e - l), d && (h = e - h), l > a || h > a))
//             throw new Error("splitScalar: Endomorphism failed, k=" + r);
//           return {
//             k1neg: f,
//             k1: l,
//             k2neg: d,
//             k2: h,
//           };
//         },
//       },
//     },
//     sha256$1
//   );
// BigInt(0);
// secp256k1.ProjectivePoint;
// function generateKey$3() {
//   return secp256k1.utils.randomPrivateKey();
// }
// function hashAndSign$3(r, e) {
//   const t = sha256$2.digest(e instanceof Uint8Array ? e : e.subarray());
//   if (isPromise$5(t))
//     return t
//       .then(({ digest: n }) => secp256k1.sign(n, r).toDERRawBytes())
//       .catch((n) => {
//         throw new CodeError$2(String(n), "ERR_INVALID_INPUT");
//       });
//   try {
//     return secp256k1.sign(t.digest, r).toDERRawBytes();
//   } catch (n) {
//     throw new CodeError$2(String(n), "ERR_INVALID_INPUT");
//   }
// }
// function hashAndVerify$3(r, e, t) {
//   const n = sha256$2.digest(t instanceof Uint8Array ? t : t.subarray());
//   if (isPromise$5(n))
//     return n
//       .then(({ digest: i }) => secp256k1.verify(e, i, r))
//       .catch((i) => {
//         throw new CodeError$2(String(i), "ERR_INVALID_INPUT");
//       });
//   try {
//     return secp256k1.verify(e, n.digest, r);
//   } catch (i) {
//     throw new CodeError$2(String(i), "ERR_INVALID_INPUT");
//   }
// }
// function compressPublicKey$1(r) {
//   return secp256k1.ProjectivePoint.fromHex(r).toRawBytes(!0);
// }
// function validatePrivateKey$1(r) {
//   try {
//     secp256k1.getPublicKey(r, !0);
//   } catch (e) {
//     throw new CodeError$2(String(e), "ERR_INVALID_PRIVATE_KEY");
//   }
// }
// function validatePublicKey$1(r) {
//   try {
//     secp256k1.ProjectivePoint.fromHex(r);
//   } catch (e) {
//     throw new CodeError$2(String(e), "ERR_INVALID_PUBLIC_KEY");
//   }
// }
// function computePublicKey$1(r) {
//   try {
//     return secp256k1.getPublicKey(r, !0);
//   } catch (e) {
//     throw new CodeError$2(String(e), "ERR_INVALID_PRIVATE_KEY");
//   }
// }
// let Secp256k1PublicKey$1 = class {
//     constructor(e) {
//       y(this, "_key");
//       validatePublicKey$1(e), (this._key = e);
//     }
//     verify(e, t) {
//       return hashAndVerify$3(this._key, t, e);
//     }
//     marshal() {
//       return compressPublicKey$1(this._key);
//     }
//     get bytes() {
//       return PublicKey$1.encode({
//         Type: KeyType$1.Secp256k1,
//         Data: this.marshal(),
//       }).subarray();
//     }
//     equals(e) {
//       return equals(this.bytes, e.bytes);
//     }
//     async hash() {
//       const e = sha256$2.digest(this.bytes);
//       let t;
//       return isPromise$5(e) ? ({ bytes: t } = await e) : (t = e.bytes), t;
//     }
//   },
//   Secp256k1PrivateKey$1 = class {
//     constructor(e, t) {
//       y(this, "_key");
//       y(this, "_publicKey");
//       (this._key = e),
//         (this._publicKey = t ?? computePublicKey$1(e)),
//         validatePrivateKey$1(this._key),
//         validatePublicKey$1(this._publicKey);
//     }
//     sign(e) {
//       return hashAndSign$3(this._key, e);
//     }
//     get public() {
//       return new Secp256k1PublicKey$1(this._publicKey);
//     }
//     marshal() {
//       return this._key;
//     }
//     get bytes() {
//       return PrivateKey$1.encode({
//         Type: KeyType$1.Secp256k1,
//         Data: this.marshal(),
//       }).subarray();
//     }
//     equals(e) {
//       return equals(this.bytes, e.bytes);
//     }
//     hash() {
//       const e = sha256$2.digest(this.bytes);
//       return isPromise$5(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//     }
//     async id() {
//       const e = await this.public.hash();
//       return toString$3(e, "base58btc");
//     }
//     async export(e, t = "libp2p-key") {
//       if (t === "libp2p-key") return exporter$1(this.bytes, e);
//       throw new CodeError$2(
//         `export format '${t}' is not supported`,
//         "ERR_INVALID_EXPORT_FORMAT"
//       );
//     }
//   };
// function unmarshalSecp256k1PrivateKey$1(r) {
//   return new Secp256k1PrivateKey$1(r);
// }
// function unmarshalSecp256k1PublicKey$1(r) {
//   return new Secp256k1PublicKey$1(r);
// }
// async function generateKeyPair$4() {
//   const r = generateKey$3();
//   return new Secp256k1PrivateKey$1(r);
// }
// const Secp256k1$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         Secp256k1PrivateKey: Secp256k1PrivateKey$1,
//         Secp256k1PublicKey: Secp256k1PublicKey$1,
//         generateKeyPair: generateKeyPair$4,
//         unmarshalSecp256k1PrivateKey: unmarshalSecp256k1PrivateKey$1,
//         unmarshalSecp256k1PublicKey: unmarshalSecp256k1PublicKey$1,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   supportedKeys$1 = {
//     rsa: RSA$1,
//     ed25519: Ed25519$1,
//     secp256k1: Secp256k1$1,
//   };
// function unsupportedKey$1(r) {
//   const e = Object.keys(supportedKeys$1).join(" / ");
//   return new CodeError$2(
//     `invalid or unsupported key type ${r}. Must be ${e}`,
//     "ERR_UNSUPPORTED_KEY_TYPE"
//   );
// }
// function typeToKey(r) {
//   if (
//     ((r = r.toLowerCase()), r === "rsa" || r === "ed25519" || r === "secp256k1")
//   )
//     return supportedKeys$1[r];
//   throw unsupportedKey$1(r);
// }
// async function generateKeyPair$3(r, e) {
//   return typeToKey(r).generateKeyPair(e ?? 2048);
// }
// function unmarshalPublicKey$1(r) {
//   const e = PublicKey$1.decode(r),
//     t = e.Data ?? new Uint8Array();
//   switch (e.Type) {
//     case KeyType$1.RSA:
//       return supportedKeys$1.rsa.unmarshalRsaPublicKey(t);
//     case KeyType$1.Ed25519:
//       return supportedKeys$1.ed25519.unmarshalEd25519PublicKey(t);
//     case KeyType$1.Secp256k1:
//       return supportedKeys$1.secp256k1.unmarshalSecp256k1PublicKey(t);
//     default:
//       throw unsupportedKey$1(e.Type ?? "unknown");
//   }
// }
// function marshalPublicKey(r, e) {
//   return (e = (e ?? "rsa").toLowerCase()), typeToKey(e), r.bytes;
// }
// async function unmarshalPrivateKey$2(r) {
//   const e = PrivateKey$1.decode(r),
//     t = e.Data ?? new Uint8Array();
//   switch (e.Type) {
//     case KeyType$1.RSA:
//       return supportedKeys$1.rsa.unmarshalRsaPrivateKey(t);
//     case KeyType$1.Ed25519:
//       return supportedKeys$1.ed25519.unmarshalEd25519PrivateKey(t);
//     case KeyType$1.Secp256k1:
//       return supportedKeys$1.secp256k1.unmarshalSecp256k1PrivateKey(t);
//     default:
//       throw unsupportedKey$1(e.Type ?? "RSA");
//   }
// }
// function marshalPrivateKey(r, e) {
//   return (e = (e ?? "rsa").toLowerCase()), typeToKey(e), r.bytes;
// }
// async function importKey(r, e) {
//   try {
//     const t = await importer(r, e);
//     return await unmarshalPrivateKey$2(t);
//   } catch {}
//   if (!r.includes("BEGIN"))
//     throw new CodeError$2(
//       "Encrypted key was not a libp2p-key or a PEM file",
//       "ERR_INVALID_IMPORT_FORMAT"
//     );
//   return importFromPem(r, e);
// }
// var browser$2 = {
//     exports: {},
//   },
//   ms,
//   hasRequiredMs;
// function requireMs() {
//   if (hasRequiredMs) return ms;
//   hasRequiredMs = 1;
//   var r = 1e3,
//     e = r * 60,
//     t = e * 60,
//     n = t * 24,
//     i = n * 7,
//     o = n * 365.25;
//   ms = function (h, f) {
//     f = f || {};
//     var d = typeof h;
//     if (d === "string" && h.length > 0) return a(h);
//     if (d === "number" && isFinite(h)) return f.long ? u(h) : c(h);
//     throw new Error(
//       "val is not a non-empty string or a valid number. val=" +
//         JSON.stringify(h)
//     );
//   };
//   function a(h) {
//     if (((h = String(h)), !(h.length > 100))) {
//       var f =
//         /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
//           h
//         );
//       if (f) {
//         var d = parseFloat(f[1]),
//           p = (f[2] || "ms").toLowerCase();
//         switch (p) {
//           case "years":
//           case "year":
//           case "yrs":
//           case "yr":
//           case "y":
//             return d * o;
//           case "weeks":
//           case "week":
//           case "w":
//             return d * i;
//           case "days":
//           case "day":
//           case "d":
//             return d * n;
//           case "hours":
//           case "hour":
//           case "hrs":
//           case "hr":
//           case "h":
//             return d * t;
//           case "minutes":
//           case "minute":
//           case "mins":
//           case "min":
//           case "m":
//             return d * e;
//           case "seconds":
//           case "second":
//           case "secs":
//           case "sec":
//           case "s":
//             return d * r;
//           case "milliseconds":
//           case "millisecond":
//           case "msecs":
//           case "msec":
//           case "ms":
//             return d;
//           default:
//             return;
//         }
//       }
//     }
//   }
//   function c(h) {
//     var f = Math.abs(h);
//     return f >= n
//       ? Math.round(h / n) + "d"
//       : f >= t
//       ? Math.round(h / t) + "h"
//       : f >= e
//       ? Math.round(h / e) + "m"
//       : f >= r
//       ? Math.round(h / r) + "s"
//       : h + "ms";
//   }
//   function u(h) {
//     var f = Math.abs(h);
//     return f >= n
//       ? l(h, f, n, "day")
//       : f >= t
//       ? l(h, f, t, "hour")
//       : f >= e
//       ? l(h, f, e, "minute")
//       : f >= r
//       ? l(h, f, r, "second")
//       : h + " ms";
//   }
//   function l(h, f, d, p) {
//     var g = f >= d * 1.5;
//     return Math.round(h / d) + " " + p + (g ? "s" : "");
//   }
//   return ms;
// }
// function setup(r) {
//   (t.debug = t),
//     (t.default = t),
//     (t.coerce = u),
//     (t.disable = o),
//     (t.enable = i),
//     (t.enabled = a),
//     (t.humanize = requireMs()),
//     (t.destroy = l),
//     Object.keys(r).forEach((h) => {
//       t[h] = r[h];
//     }),
//     (t.names = []),
//     (t.skips = []),
//     (t.formatters = {});
//   function e(h) {
//     let f = 0;
//     for (let d = 0; d < h.length; d++)
//       (f = (f << 5) - f + h.charCodeAt(d)), (f |= 0);
//     return t.colors[Math.abs(f) % t.colors.length];
//   }
//   t.selectColor = e;
//   function t(h) {
//     let f,
//       d = null,
//       p,
//       g;
//     function m(...b) {
//       if (!m.enabled) return;
//       const _ = m,
//         w = Number(new Date()),
//         E = w - (f || w);
//       (_.diff = E),
//         (_.prev = f),
//         (_.curr = w),
//         (f = w),
//         (b[0] = t.coerce(b[0])),
//         typeof b[0] != "string" && b.unshift("%O");
//       let v = 0;
//       (b[0] = b[0].replace(/%([a-zA-Z%])/g, (I, T) => {
//         if (I === "%%") return "%";
//         v++;
//         const A = t.formatters[T];
//         if (typeof A == "function") {
//           const C = b[v];
//           (I = A.call(_, C)), b.splice(v, 1), v--;
//         }
//         return I;
//       })),
//         t.formatArgs.call(_, b),
//         (_.log || t.log).apply(_, b);
//     }
//     return (
//       (m.namespace = h),
//       (m.useColors = t.useColors()),
//       (m.color = t.selectColor(h)),
//       (m.extend = n),
//       (m.destroy = t.destroy),
//       Object.defineProperty(m, "enabled", {
//         enumerable: !0,
//         configurable: !1,
//         get: () =>
//           d !== null
//             ? d
//             : (p !== t.namespaces && ((p = t.namespaces), (g = t.enabled(h))),
//               g),
//         set: (b) => {
//           d = b;
//         },
//       }),
//       typeof t.init == "function" && t.init(m),
//       m
//     );
//   }
//   function n(h, f) {
//     const d = t(this.namespace + (typeof f > "u" ? ":" : f) + h);
//     return (d.log = this.log), d;
//   }
//   function i(h) {
//     t.save(h), (t.namespaces = h), (t.names = []), (t.skips = []);
//     let f;
//     const d = (typeof h == "string" ? h : "").split(/[\s,]+/),
//       p = d.length;
//     for (f = 0; f < p; f++)
//       d[f] &&
//         ((h = d[f].replace(/\*/g, ".*?")),
//         h[0] === "-"
//           ? t.skips.push(new RegExp("^" + h.slice(1) + "$"))
//           : t.names.push(new RegExp("^" + h + "$")));
//   }
//   function o() {
//     const h = [...t.names.map(c), ...t.skips.map(c).map((f) => "-" + f)].join(
//       ","
//     );
//     return t.enable(""), h;
//   }
//   function a(h) {
//     if (h[h.length - 1] === "*") return !0;
//     let f, d;
//     for (f = 0, d = t.skips.length; f < d; f++)
//       if (t.skips[f].test(h)) return !1;
//     for (f = 0, d = t.names.length; f < d; f++)
//       if (t.names[f].test(h)) return !0;
//     return !1;
//   }
//   function c(h) {
//     return h
//       .toString()
//       .substring(2, h.toString().length - 2)
//       .replace(/\.\*\?$/, "*");
//   }
//   function u(h) {
//     return h instanceof Error ? h.stack || h.message : h;
//   }
//   function l() {
//     console.warn(
//       "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
//     );
//   }
//   return t.enable(t.load()), t;
// }

// const inspect$1 = Symbol.for("nodejs.util.inspect.custom"),
//   baseDecoder = Object.values(bases)
//     .map((r) => r.decoder)
//     .reduce((r, e) => r.or(e), bases.identity.decoder),
//   LIBP2P_KEY_CODE = 114,
//   MARSHALLED_ED225519_PUBLIC_KEY_LENGTH = 36,
//   MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH = 37;
// var Wt;
// class PeerIdImpl {
//   constructor(e) {
//     y(this, "type");
//     y(this, "multihash");
//     y(this, "privateKey");
//     y(this, "publicKey");
//     y(this, "string");
//     y(this, Wt, !0);
//     (this.type = e.type),
//       (this.multihash = e.multihash),
//       (this.privateKey = e.privateKey),
//       Object.defineProperty(this, "string", {
//         enumerable: !1,
//         writable: !0,
//       });
//   }
//   get [Symbol.toStringTag]() {
//     return `PeerId(${this.toString()})`;
//   }
//   toString() {
//     return (
//       this.string == null &&
//         (this.string = base58btc.encode(this.multihash.bytes).slice(1)),
//       this.string
//     );
//   }
//   toCID() {
//     return CID.createV1(LIBP2P_KEY_CODE, this.multihash);
//   }
//   toBytes() {
//     return this.multihash.bytes;
//   }
//   toJSON() {
//     return this.toString();
//   }
//   equals(e) {
//     var t;
//     if (e == null) return !1;
//     if (e instanceof Uint8Array) return equals(this.multihash.bytes, e);
//     if (typeof e == "string") return peerIdFromString(e).equals(this);
//     if (
//       ((t = e == null ? void 0 : e.multihash) == null ? void 0 : t.bytes) !=
//       null
//     )
//       return equals(this.multihash.bytes, e.multihash.bytes);
//     throw new Error("not valid id");
//   }
//   [((Wt = peerIdSymbol), inspect$1)]() {
//     return `PeerId(${this.toString()})`;
//   }
// }
// class RSAPeerIdImpl extends PeerIdImpl {
//   constructor(t) {
//     super({
//       ...t,
//       type: "RSA",
//     });
//     y(this, "type", "RSA");
//     y(this, "publicKey");
//     this.publicKey = t.publicKey;
//   }
// }
// class Ed25519PeerIdImpl extends PeerIdImpl {
//   constructor(t) {
//     super({
//       ...t,
//       type: "Ed25519",
//     });
//     y(this, "type", "Ed25519");
//     y(this, "publicKey");
//     this.publicKey = t.multihash.digest;
//   }
// }
// class Secp256k1PeerIdImpl extends PeerIdImpl {
//   constructor(t) {
//     super({
//       ...t,
//       type: "secp256k1",
//     });
//     y(this, "type", "secp256k1");
//     y(this, "publicKey");
//     this.publicKey = t.multihash.digest;
//   }
// }
// function peerIdFromPeerId(r) {
//   if (r.type === "RSA") return new RSAPeerIdImpl(r);
//   if (r.type === "Ed25519") return new Ed25519PeerIdImpl(r);
//   if (r.type === "secp256k1") return new Secp256k1PeerIdImpl(r);
//   throw new CodeError$2("Not a PeerId", "ERR_INVALID_PARAMETERS");
// }
// function peerIdFromString(r, e) {
//   if (r.charAt(0) === "1" || r.charAt(0) === "Q") {
//     const t = decode$3(base58btc.decode(`z${r}`));
//     return r.startsWith("12D")
//       ? new Ed25519PeerIdImpl({
//           multihash: t,
//         })
//       : r.startsWith("16U")
//       ? new Secp256k1PeerIdImpl({
//           multihash: t,
//         })
//       : new RSAPeerIdImpl({
//           multihash: t,
//         });
//   }
//   return peerIdFromBytes(baseDecoder.decode(r));
// }
// function peerIdFromBytes(r) {
//   try {
//     const e = decode$3(r);
//     if (e.code === identity$1.code) {
//       if (e.digest.length === MARSHALLED_ED225519_PUBLIC_KEY_LENGTH)
//         return new Ed25519PeerIdImpl({
//           multihash: e,
//         });
//       if (e.digest.length === MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH)
//         return new Secp256k1PeerIdImpl({
//           multihash: e,
//         });
//     }
//     if (e.code === sha256$2.code)
//       return new RSAPeerIdImpl({
//         multihash: e,
//       });
//   } catch {
//     return peerIdFromCID(CID.decode(r));
//   }
//   throw new Error("Supplied PeerID CID is invalid");
// }
// function peerIdFromCID(r) {
//   if (
//     r == null ||
//     r.multihash == null ||
//     r.version == null ||
//     (r.version === 1 && r.code !== LIBP2P_KEY_CODE)
//   )
//     throw new Error("Supplied PeerID CID is invalid");
//   const e = r.multihash;
//   if (e.code === sha256$2.code)
//     return new RSAPeerIdImpl({
//       multihash: r.multihash,
//     });
//   if (e.code === identity$1.code) {
//     if (e.digest.length === MARSHALLED_ED225519_PUBLIC_KEY_LENGTH)
//       return new Ed25519PeerIdImpl({
//         multihash: r.multihash,
//       });
//     if (e.digest.length === MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH)
//       return new Secp256k1PeerIdImpl({
//         multihash: r.multihash,
//       });
//   }
//   throw new Error("Supplied PeerID CID is invalid");
// }
// async function peerIdFromKeys(r, e) {
//   return r.length === MARSHALLED_ED225519_PUBLIC_KEY_LENGTH
//     ? new Ed25519PeerIdImpl({
//         multihash: create$4(identity$1.code, r),
//         privateKey: e,
//       })
//     : r.length === MARSHALLED_SECP256K1_PUBLIC_KEY_LENGTH
//     ? new Secp256k1PeerIdImpl({
//         multihash: create$4(identity$1.code, r),
//         privateKey: e,
//       })
//     : new RSAPeerIdImpl({
//         multihash: await sha256$2.digest(r),
//         publicKey: r,
//         privateKey: e,
//       });
// }
// function mapIterable(r, e) {
//   const t = {
//     [Symbol.iterator]: () => t,
//     next: () => {
//       const n = r.next(),
//         i = n.value;
//       return n.done === !0 || i == null
//         ? {
//             done: !0,
//             value: void 0,
//           }
//         : {
//             done: !1,
//             value: e(i),
//           };
//     },
//   };
//   return t;
// }
// class PeerMap {
//   constructor(e) {
//     y(this, "map");
//     if (((this.map = new Map()), e != null))
//       for (const [t, n] of e.entries()) this.map.set(t.toString(), n);
//   }
//   [Symbol.iterator]() {
//     return this.entries();
//   }
//   clear() {
//     this.map.clear();
//   }
//   delete(e) {
//     return this.map.delete(e.toString());
//   }
//   entries() {
//     return mapIterable(this.map.entries(), (e) => [
//       peerIdFromString(e[0]),
//       e[1],
//     ]);
//   }
//   forEach(e) {
//     this.map.forEach((t, n) => {
//       e(t, peerIdFromString(n), this);
//     });
//   }
//   get(e) {
//     return this.map.get(e.toString());
//   }
//   has(e) {
//     return this.map.has(e.toString());
//   }
//   set(e, t) {
//     this.map.set(e.toString(), t);
//   }
//   keys() {
//     return mapIterable(this.map.keys(), (e) => peerIdFromString(e));
//   }
//   values() {
//     return this.map.values();
//   }
//   get size() {
//     return this.map.size;
//   }
// }
// class PeerSet {
//   constructor(e) {
//     y(this, "set");
//     if (((this.set = new Set()), e != null))
//       for (const t of e) this.set.add(t.toString());
//   }
//   get size() {
//     return this.set.size;
//   }
//   [Symbol.iterator]() {
//     return this.values();
//   }
//   add(e) {
//     this.set.add(e.toString());
//   }
//   clear() {
//     this.set.clear();
//   }
//   delete(e) {
//     this.set.delete(e.toString());
//   }
//   entries() {
//     return mapIterable(this.set.entries(), (e) => {
//       const t = peerIdFromString(e[0]);
//       return [t, t];
//     });
//   }
//   forEach(e) {
//     this.set.forEach((t) => {
//       const n = peerIdFromString(t);
//       e(n, n, this);
//     });
//   }
//   has(e) {
//     return this.set.has(e.toString());
//   }
//   values() {
//     return mapIterable(this.set.values(), (e) => peerIdFromString(e));
//   }
//   intersection(e) {
//     const t = new PeerSet();
//     for (const n of e) this.has(n) && t.add(n);
//     return t;
//   }
//   difference(e) {
//     const t = new PeerSet();
//     for (const n of this) e.has(n) || t.add(n);
//     return t;
//   }
//   union(e) {
//     const t = new PeerSet();
//     for (const n of e) t.add(n);
//     for (const n of this) t.add(n);
//     return t;
//   }
// }
// const createEd25519PeerId = async () => {
//   const r = await generateKeyPair$3("Ed25519"),
//     e = await createFromPrivKey(r);
//   if (e.type === "Ed25519") return e;
//   throw new Error(`Generated unexpected PeerId type "${e.type}"`);
// };
// async function createFromPrivKey(r) {
//   return peerIdFromKeys(marshalPublicKey(r.public), marshalPrivateKey(r));
// }
// const symbol$1 = Symbol.for("@achingbrain/uint8arraylist");
// function findBufAndOffset(r, e) {
//   if (e == null || e < 0) throw new RangeError("index is out of bounds");
//   let t = 0;
//   for (const n of r) {
//     const i = t + n.byteLength;
//     if (e < i)
//       return {
//         buf: n,
//         index: e - t,
//       };
//     t = i;
//   }
//   throw new RangeError("index is out of bounds");
// }
// function isUint8ArrayList(r) {
//   return !!(r != null && r[symbol$1]);
// }
// var qt;
// class Uint8ArrayList {
//   constructor(...e) {
//     y(this, "bufs");
//     y(this, "length");
//     y(this, qt, !0);
//     (this.bufs = []), (this.length = 0), e.length > 0 && this.appendAll(e);
//   }
//   *[((qt = symbol$1), Symbol.iterator)]() {
//     yield* this.bufs;
//   }
//   get byteLength() {
//     return this.length;
//   }
//   append(...e) {
//     this.appendAll(e);
//   }
//   appendAll(e) {
//     let t = 0;
//     for (const n of e)
//       if (n instanceof Uint8Array) (t += n.byteLength), this.bufs.push(n);
//       else if (isUint8ArrayList(n))
//         (t += n.byteLength), this.bufs.push(...n.bufs);
//       else
//         throw new Error(
//           "Could not append value, must be an Uint8Array or a Uint8ArrayList"
//         );
//     this.length += t;
//   }
//   prepend(...e) {
//     this.prependAll(e);
//   }
//   prependAll(e) {
//     let t = 0;
//     for (const n of e.reverse())
//       if (n instanceof Uint8Array) (t += n.byteLength), this.bufs.unshift(n);
//       else if (isUint8ArrayList(n))
//         (t += n.byteLength), this.bufs.unshift(...n.bufs);
//       else
//         throw new Error(
//           "Could not prepend value, must be an Uint8Array or a Uint8ArrayList"
//         );
//     this.length += t;
//   }
//   get(e) {
//     const t = findBufAndOffset(this.bufs, e);
//     return t.buf[t.index];
//   }
//   set(e, t) {
//     const n = findBufAndOffset(this.bufs, e);
//     n.buf[n.index] = t;
//   }
//   write(e, t = 0) {
//     if (e instanceof Uint8Array)
//       for (let n = 0; n < e.length; n++) this.set(t + n, e[n]);
//     else if (isUint8ArrayList(e))
//       for (let n = 0; n < e.length; n++) this.set(t + n, e.get(n));
//     else
//       throw new Error(
//         "Could not write value, must be an Uint8Array or a Uint8ArrayList"
//       );
//   }
//   consume(e) {
//     if (((e = Math.trunc(e)), !(Number.isNaN(e) || e <= 0))) {
//       if (e === this.byteLength) {
//         (this.bufs = []), (this.length = 0);
//         return;
//       }
//       for (; this.bufs.length > 0; )
//         if (e >= this.bufs[0].byteLength)
//           (e -= this.bufs[0].byteLength),
//             (this.length -= this.bufs[0].byteLength),
//             this.bufs.shift();
//         else {
//           (this.bufs[0] = this.bufs[0].subarray(e)), (this.length -= e);
//           break;
//         }
//     }
//   }
//   slice(e, t) {
//     const { bufs: n, length: i } = this._subList(e, t);
//     return concat$1(n, i);
//   }
//   subarray(e, t) {
//     const { bufs: n, length: i } = this._subList(e, t);
//     return n.length === 1 ? n[0] : concat$1(n, i);
//   }
//   sublist(e, t) {
//     const { bufs: n, length: i } = this._subList(e, t),
//       o = new Uint8ArrayList();
//     return (o.length = i), (o.bufs = [...n]), o;
//   }
//   _subList(e, t) {
//     if (
//       ((e = e ?? 0),
//       (t = t ?? this.length),
//       e < 0 && (e = this.length + e),
//       t < 0 && (t = this.length + t),
//       e < 0 || t > this.length)
//     )
//       throw new RangeError("index is out of bounds");
//     if (e === t)
//       return {
//         bufs: [],
//         length: 0,
//       };
//     if (e === 0 && t === this.length)
//       return {
//         bufs: this.bufs,
//         length: this.length,
//       };
//     const n = [];
//     let i = 0;
//     for (let o = 0; o < this.bufs.length; o++) {
//       const a = this.bufs[o],
//         c = i,
//         u = c + a.byteLength;
//       if (((i = u), e >= u)) continue;
//       const l = e >= c && e < u,
//         h = t > c && t <= u;
//       if (l && h) {
//         if (e === c && t === u) {
//           n.push(a);
//           break;
//         }
//         const f = e - c;
//         n.push(a.subarray(f, f + (t - e)));
//         break;
//       }
//       if (l) {
//         if (e === 0) {
//           n.push(a);
//           continue;
//         }
//         n.push(a.subarray(e - c));
//         continue;
//       }
//       if (h) {
//         if (t === u) {
//           n.push(a);
//           break;
//         }
//         n.push(a.subarray(0, t - c));
//         break;
//       }
//       n.push(a);
//     }
//     return {
//       bufs: n,
//       length: t - e,
//     };
//   }
//   indexOf(e, t = 0) {
//     if (!isUint8ArrayList(e) && !(e instanceof Uint8Array))
//       throw new TypeError(
//         'The "value" argument must be a Uint8ArrayList or Uint8Array'
//       );
//     const n = e instanceof Uint8Array ? e : e.subarray();
//     if (
//       ((t = Number(t ?? 0)),
//       isNaN(t) && (t = 0),
//       t < 0 && (t = this.length + t),
//       t < 0 && (t = 0),
//       e.length === 0)
//     )
//       return t > this.length ? this.length : t;
//     const i = n.byteLength;
//     if (i === 0) throw new TypeError("search must be at least 1 byte long");
//     const o = 256,
//       a = new Int32Array(o);
//     for (let f = 0; f < o; f++) a[f] = -1;
//     for (let f = 0; f < i; f++) a[n[f]] = f;
//     const c = a,
//       u = this.byteLength - n.byteLength,
//       l = n.byteLength - 1;
//     let h;
//     for (let f = t; f <= u; f += h) {
//       h = 0;
//       for (let d = l; d >= 0; d--) {
//         const p = this.get(f + d);
//         if (n[d] !== p) {
//           h = Math.max(1, d - c[p]);
//           break;
//         }
//       }
//       if (h === 0) return f;
//     }
//     return -1;
//   }
//   getInt8(e) {
//     const t = this.subarray(e, e + 1);
//     return new DataView(t.buffer, t.byteOffset, t.byteLength).getInt8(0);
//   }
//   setInt8(e, t) {
//     const n = allocUnsafe(1);
//     new DataView(n.buffer, n.byteOffset, n.byteLength).setInt8(0, t),
//       this.write(n, e);
//   }
//   getInt16(e, t) {
//     const n = this.subarray(e, e + 2);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getInt16(0, t);
//   }
//   setInt16(e, t, n) {
//     const i = alloc$1(2);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setInt16(0, t, n),
//       this.write(i, e);
//   }
//   getInt32(e, t) {
//     const n = this.subarray(e, e + 4);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getInt32(0, t);
//   }
//   setInt32(e, t, n) {
//     const i = alloc$1(4);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setInt32(0, t, n),
//       this.write(i, e);
//   }
//   getBigInt64(e, t) {
//     const n = this.subarray(e, e + 8);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getBigInt64(0, t);
//   }
//   setBigInt64(e, t, n) {
//     const i = alloc$1(8);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setBigInt64(0, t, n),
//       this.write(i, e);
//   }
//   getUint8(e) {
//     const t = this.subarray(e, e + 1);
//     return new DataView(t.buffer, t.byteOffset, t.byteLength).getUint8(0);
//   }
//   setUint8(e, t) {
//     const n = allocUnsafe(1);
//     new DataView(n.buffer, n.byteOffset, n.byteLength).setUint8(0, t),
//       this.write(n, e);
//   }
//   getUint16(e, t) {
//     const n = this.subarray(e, e + 2);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getUint16(0, t);
//   }
//   setUint16(e, t, n) {
//     const i = alloc$1(2);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setUint16(0, t, n),
//       this.write(i, e);
//   }
//   getUint32(e, t) {
//     const n = this.subarray(e, e + 4);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getUint32(0, t);
//   }
//   setUint32(e, t, n) {
//     const i = alloc$1(4);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, t, n),
//       this.write(i, e);
//   }
//   getBigUint64(e, t) {
//     const n = this.subarray(e, e + 8);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getBigUint64(
//       0,
//       t
//     );
//   }
//   setBigUint64(e, t, n) {
//     const i = alloc$1(8);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setBigUint64(0, t, n),
//       this.write(i, e);
//   }
//   getFloat32(e, t) {
//     const n = this.subarray(e, e + 4);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getFloat32(0, t);
//   }
//   setFloat32(e, t, n) {
//     const i = alloc$1(4);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setFloat32(0, t, n),
//       this.write(i, e);
//   }
//   getFloat64(e, t) {
//     const n = this.subarray(e, e + 8);
//     return new DataView(n.buffer, n.byteOffset, n.byteLength).getFloat64(0, t);
//   }
//   setFloat64(e, t, n) {
//     const i = alloc$1(8);
//     new DataView(i.buffer, i.byteOffset, i.byteLength).setFloat64(0, t, n),
//       this.write(i, e);
//   }
//   equals(e) {
//     if (
//       e == null ||
//       !(e instanceof Uint8ArrayList) ||
//       e.bufs.length !== this.bufs.length
//     )
//       return !1;
//     for (let t = 0; t < this.bufs.length; t++)
//       if (!equals(this.bufs[t], e.bufs[t])) return !1;
//     return !0;
//   }
//   static fromUint8Arrays(e, t) {
//     const n = new Uint8ArrayList();
//     return (
//       (n.bufs = e),
//       t == null && (t = e.reduce((i, o) => i + o.byteLength, 0)),
//       (n.length = t),
//       n
//     );
//   }
// }
// const codes$4 = {
//   ERR_SIGNATURE_NOT_VALID: "ERR_SIGNATURE_NOT_VALID",
// };
// var Envelope;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.publicKey != null &&
//               t.publicKey.byteLength > 0 &&
//               (n.uint32(10), n.bytes(t.publicKey)),
//             t.payloadType != null &&
//               t.payloadType.byteLength > 0 &&
//               (n.uint32(18), n.bytes(t.payloadType)),
//             t.payload != null &&
//               t.payload.byteLength > 0 &&
//               (n.uint32(26), n.bytes(t.payload)),
//             t.signature != null &&
//               t.signature.byteLength > 0 &&
//               (n.uint32(42), n.bytes(t.signature)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {
//               publicKey: new Uint8Array(0),
//               payloadType: new Uint8Array(0),
//               payload: new Uint8Array(0),
//               signature: new Uint8Array(0),
//             },
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.publicKey = t.bytes();
//                 break;
//               case 2:
//                 i.payloadType = t.bytes();
//                 break;
//               case 3:
//                 i.payload = t.bytes();
//                 break;
//               case 5:
//                 i.signature = t.bytes();
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(Envelope || (Envelope = {}));
// const fe = class fe {
//   constructor(e) {
//     y(this, "peerId");
//     y(this, "payloadType");
//     y(this, "payload");
//     y(this, "signature");
//     y(this, "marshaled");
//     const { peerId: t, payloadType: n, payload: i, signature: o } = e;
//     (this.peerId = t),
//       (this.payloadType = n),
//       (this.payload = i),
//       (this.signature = o);
//   }
//   marshal() {
//     if (this.peerId.publicKey == null) throw new Error("Missing public key");
//     return (
//       this.marshaled == null &&
//         (this.marshaled = Envelope.encode({
//           publicKey: this.peerId.publicKey,
//           payloadType: this.payloadType,
//           payload: this.payload.subarray(),
//           signature: this.signature,
//         })),
//       this.marshaled
//     );
//   }
//   equals(e) {
//     return equals(this.marshal(), e.marshal());
//   }
//   async validate(e) {
//     const t = formatSignaturePayload(e, this.payloadType, this.payload);
//     if (this.peerId.publicKey == null) throw new Error("Missing public key");
//     return unmarshalPublicKey$1(this.peerId.publicKey).verify(
//       t.subarray(),
//       this.signature
//     );
//   }
// };
// y(fe, "createFromProtobuf", async (e) => {
//   const t = Envelope.decode(e),
//     n = await peerIdFromKeys(t.publicKey);
//   return new fe({
//     peerId: n,
//     payloadType: t.payloadType,
//     payload: t.payload,
//     signature: t.signature,
//   });
// }),
//   y(fe, "seal", async (e, t) => {
//     if (t.privateKey == null) throw new Error("Missing private key");
//     const n = e.domain,
//       i = e.codec,
//       o = e.marshal(),
//       a = formatSignaturePayload(n, i, o),
//       u = await (await unmarshalPrivateKey$2(t.privateKey)).sign(a.subarray());
//     return new fe({
//       peerId: t,
//       payloadType: i,
//       payload: o,
//       signature: u,
//     });
//   }),
//   y(fe, "openAndCertify", async (e, t) => {
//     const n = await fe.createFromProtobuf(e);
//     if (!(await n.validate(t)))
//       throw new CodeError$2(
//         "envelope signature is not valid for the given domain",
//         codes$4.ERR_SIGNATURE_NOT_VALID
//       );
//     return n;
//   });
// let RecordEnvelope = fe;
// const formatSignaturePayload = (r, e, t) => {
//   const n = fromString(r),
//     i = encode$1(n.byteLength),
//     o = encode$1(e.length),
//     a = encode$1(t.length);
//   return new Uint8ArrayList(i, n, o, e, a, t);
// };
// function arrayEquals(r, e) {
//   const t = (n, i) => n.toString().localeCompare(i.toString());
//   return r.length !== e.length
//     ? !1
//     : (e.sort(t), r.sort(t).every((n, i) => e[i].equals(n)));
// }
// class Parser {
//   constructor() {
//     y(this, "index", 0);
//     y(this, "input", "");
//   }
//   new(e) {
//     return (this.index = 0), (this.input = e), this;
//   }
//   readAtomically(e) {
//     const t = this.index,
//       n = e();
//     return n === void 0 && (this.index = t), n;
//   }
//   parseWith(e) {
//     const t = e();
//     if (this.index === this.input.length) return t;
//   }
//   peekChar() {
//     if (!(this.index >= this.input.length)) return this.input[this.index];
//   }
//   readChar() {
//     if (!(this.index >= this.input.length)) return this.input[this.index++];
//   }
//   readGivenChar(e) {
//     return this.readAtomically(() => {
//       const t = this.readChar();
//       if (t === e) return t;
//     });
//   }
//   readSeparator(e, t, n) {
//     return this.readAtomically(() => {
//       if (!(t > 0 && this.readGivenChar(e) === void 0)) return n();
//     });
//   }
//   readNumber(e, t, n, i) {
//     return this.readAtomically(() => {
//       let o = 0,
//         a = 0;
//       const c = this.peekChar();
//       if (c === void 0) return;
//       const u = c === "0",
//         l = 2 ** (8 * i) - 1;
//       for (;;) {
//         const h = this.readAtomically(() => {
//           const f = this.readChar();
//           if (f === void 0) return;
//           const d = Number.parseInt(f, e);
//           if (!Number.isNaN(d)) return d;
//         });
//         if (h === void 0) break;
//         if (((o *= e), (o += h), o > l || ((a += 1), t !== void 0 && a > t)))
//           return;
//       }
//       if (a !== 0) return !n && u && a > 1 ? void 0 : o;
//     });
//   }
//   readIPv4Addr() {
//     return this.readAtomically(() => {
//       const e = new Uint8Array(4);
//       for (let t = 0; t < e.length; t++) {
//         const n = this.readSeparator(".", t, () =>
//           this.readNumber(10, 3, !1, 1)
//         );
//         if (n === void 0) return;
//         e[t] = n;
//       }
//       return e;
//     });
//   }
//   readIPv6Addr() {
//     const e = (t) => {
//       for (let n = 0; n < t.length / 2; n++) {
//         const i = n * 2;
//         if (n < t.length - 3) {
//           const a = this.readSeparator(":", n, () => this.readIPv4Addr());
//           if (a !== void 0)
//             return (
//               (t[i] = a[0]),
//               (t[i + 1] = a[1]),
//               (t[i + 2] = a[2]),
//               (t[i + 3] = a[3]),
//               [i + 4, !0]
//             );
//         }
//         const o = this.readSeparator(":", n, () =>
//           this.readNumber(16, 4, !0, 2)
//         );
//         if (o === void 0) return [i, !1];
//         (t[i] = o >> 8), (t[i + 1] = o & 255);
//       }
//       return [t.length, !1];
//     };
//     return this.readAtomically(() => {
//       const t = new Uint8Array(16),
//         [n, i] = e(t);
//       if (n === 16) return t;
//       if (
//         i ||
//         this.readGivenChar(":") === void 0 ||
//         this.readGivenChar(":") === void 0
//       )
//         return;
//       const o = new Uint8Array(14),
//         a = 16 - (n + 2),
//         [c] = e(o.subarray(0, a));
//       return t.set(o.subarray(0, c), 16 - c), t;
//     });
//   }
//   readIPAddr() {
//     return this.readIPv4Addr() ?? this.readIPv6Addr();
//   }
// }
// const MAX_IPV6_LENGTH = 45,
//   MAX_IPV4_LENGTH = 15,
//   parser = new Parser();
// function parseIPv4(r) {
//   if (!(r.length > MAX_IPV4_LENGTH))
//     return parser.new(r).parseWith(() => parser.readIPv4Addr());
// }
// function parseIPv6(r) {
//   if ((r.includes("%") && (r = r.split("%")[0]), !(r.length > MAX_IPV6_LENGTH)))
//     return parser.new(r).parseWith(() => parser.readIPv6Addr());
// }
// function parseIP(r) {
//   if ((r.includes("%") && (r = r.split("%")[0]), !(r.length > MAX_IPV6_LENGTH)))
//     return parser.new(r).parseWith(() => parser.readIPAddr());
// }
// function isIPv4(r) {
//   return !!parseIPv4(r);
// }
// function isIPv6(r) {
//   return !!parseIPv6(r);
// }
// function isIP(r) {
//   return !!parseIP(r);
// }
// const isV4 = isIPv4,
//   isV6 = isIPv6,
//   toBytes$1 = function (r) {
//     let e = 0;
//     if (((r = r.toString().trim()), isV4(r))) {
//       const t = new Uint8Array(e + 4);
//       return (
//         r.split(/\./g).forEach((n) => {
//           t[e++] = parseInt(n, 10) & 255;
//         }),
//         t
//       );
//     }
//     if (isV6(r)) {
//       const t = r.split(":", 8);
//       let n;
//       for (n = 0; n < t.length; n++) {
//         const o = isV4(t[n]);
//         let a;
//         o &&
//           ((a = toBytes$1(t[n])), (t[n] = toString$3(a.slice(0, 2), "base16"))),
//           a != null &&
//             ++n < 8 &&
//             t.splice(n, 0, toString$3(a.slice(2, 4), "base16"));
//       }
//       if (t[0] === "") for (; t.length < 8; ) t.unshift("0");
//       else if (t[t.length - 1] === "") for (; t.length < 8; ) t.push("0");
//       else if (t.length < 8) {
//         for (n = 0; n < t.length && t[n] !== ""; n++);
//         const o = [n, 1];
//         for (n = 9 - t.length; n > 0; n--) o.push("0");
//         t.splice.apply(t, o);
//       }
//       const i = new Uint8Array(e + 16);
//       for (n = 0; n < t.length; n++) {
//         const o = parseInt(t[n], 16);
//         (i[e++] = (o >> 8) & 255), (i[e++] = o & 255);
//       }
//       return i;
//     }
//     throw new Error("invalid ip address");
//   },
//   toString$2 = function (r, e = 0, t) {
//     (e = ~~e), (t = t ?? r.length - e);
//     const n = new DataView(r.buffer);
//     if (t === 4) {
//       const i = [];
//       for (let o = 0; o < t; o++) i.push(r[e + o]);
//       return i.join(".");
//     }
//     if (t === 16) {
//       const i = [];
//       for (let o = 0; o < t; o += 2) i.push(n.getUint16(e + o).toString(16));
//       return i
//         .join(":")
//         .replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3")
//         .replace(/:{3,4}/, "::");
//     }
//     return "";
//   },
//   V = -1,
//   names = {},
//   codes$3 = {},
//   table = [
//     [4, 32, "ip4"],
//     [6, 16, "tcp"],
//     [33, 16, "dccp"],
//     [41, 128, "ip6"],
//     [42, V, "ip6zone"],
//     [43, 8, "ipcidr"],
//     [53, V, "dns", !0],
//     [54, V, "dns4", !0],
//     [55, V, "dns6", !0],
//     [56, V, "dnsaddr", !0],
//     [132, 16, "sctp"],
//     [273, 16, "udp"],
//     [275, 0, "p2p-webrtc-star"],
//     [276, 0, "p2p-webrtc-direct"],
//     [277, 0, "p2p-stardust"],
//     [280, 0, "webrtc-direct"],
//     [281, 0, "webrtc"],
//     [290, 0, "p2p-circuit"],
//     [301, 0, "udt"],
//     [302, 0, "utp"],
//     [400, V, "unix", !1, !0],
//     [421, V, "ipfs"],
//     [421, V, "p2p"],
//     [443, 0, "https"],
//     [444, 96, "onion"],
//     [445, 296, "onion3"],
//     [446, V, "garlic64"],
//     [448, 0, "tls"],
//     [449, V, "sni"],
//     [460, 0, "quic"],
//     [461, 0, "quic-v1"],
//     [465, 0, "webtransport"],
//     [466, V, "certhash"],
//     [477, 0, "ws"],
//     [478, 0, "wss"],
//     [479, 0, "p2p-websocket-star"],
//     [480, 0, "http"],
//     [777, V, "memory"],
//   ];
// table.forEach((r) => {
//   const e = createProtocol(...r);
//   (codes$3[e.code] = e), (names[e.name] = e);
// });
// function createProtocol(r, e, t, n, i) {
//   return {
//     code: r,
//     size: e,
//     name: t,
//     resolvable: !!n,
//     path: !!i,
//   };
// }
// function getProtocol(r) {
//   if (typeof r == "number") {
//     if (codes$3[r] != null) return codes$3[r];
//     throw new Error(`no protocol with code: ${r}`);
//   } else if (typeof r == "string") {
//     if (names[r] != null) return names[r];
//     throw new Error(`no protocol with name: ${r}`);
//   }
//   throw new Error(`invalid protocol id type: ${typeof r}`);
// }
// getProtocol("ip4");
// getProtocol("ip6");
// getProtocol("ipcidr");
// function convertToString(r, e) {
//   switch (getProtocol(r).code) {
//     case 4:
//     case 41:
//       return bytes2ip(e);
//     case 42:
//       return bytes2str(e);
//     case 6:
//     case 273:
//     case 33:
//     case 132:
//       return bytes2port(e).toString();
//     case 53:
//     case 54:
//     case 55:
//     case 56:
//     case 400:
//     case 449:
//     case 777:
//       return bytes2str(e);
//     case 421:
//       return bytes2mh(e);
//     case 444:
//       return bytes2onion(e);
//     case 445:
//       return bytes2onion(e);
//     case 466:
//       return bytes2mb(e);
//     default:
//       return toString$3(e, "base16");
//   }
// }
// function convertToBytes(r, e) {
//   switch (getProtocol(r).code) {
//     case 4:
//       return ip2bytes(e);
//     case 41:
//       return ip2bytes(e);
//     case 42:
//       return str2bytes(e);
//     case 6:
//     case 273:
//     case 33:
//     case 132:
//       return port2bytes(parseInt(e, 10));
//     case 53:
//     case 54:
//     case 55:
//     case 56:
//     case 400:
//     case 449:
//     case 777:
//       return str2bytes(e);
//     case 421:
//       return mh2bytes(e);
//     case 444:
//       return onion2bytes(e);
//     case 445:
//       return onion32bytes(e);
//     case 466:
//       return mb2bytes(e);
//     default:
//       return fromString(e, "base16");
//   }
// }
// const decoders = Object.values(bases).map((r) => r.decoder),
//   anybaseDecoder = (function () {
//     let r = decoders[0].or(decoders[1]);
//     return decoders.slice(2).forEach((e) => (r = r.or(e))), r;
//   })();
// function ip2bytes(r) {
//   if (!isIP(r)) throw new Error("invalid ip address");
//   return toBytes$1(r);
// }
// function bytes2ip(r) {
//   const e = toString$2(r, 0, r.length);
//   if (e == null) throw new Error("ipBuff is required");
//   if (!isIP(e)) throw new Error("invalid ip address");
//   return e;
// }
// function port2bytes(r) {
//   const e = new ArrayBuffer(2);
//   return new DataView(e).setUint16(0, r), new Uint8Array(e);
// }
// function bytes2port(r) {
//   return new DataView(r.buffer).getUint16(r.byteOffset);
// }
// function str2bytes(r) {
//   const e = fromString(r),
//     t = Uint8Array.from(encode$1(e.length));
//   return concat$1([t, e], t.length + e.length);
// }
// function bytes2str(r) {
//   const e = decode$1(r);
//   if (((r = r.slice(encodingLength(e))), r.length !== e))
//     throw new Error("inconsistent lengths");
//   return toString$3(r);
// }
// function mh2bytes(r) {
//   let e;
//   r[0] === "Q" || r[0] === "1"
//     ? (e = decode$3(base58btc.decode(`z${r}`)).bytes)
//     : (e = CID.parse(r).multihash.bytes);
//   const t = Uint8Array.from(encode$1(e.length));
//   return concat$1([t, e], t.length + e.length);
// }
// function mb2bytes(r) {
//   const e = anybaseDecoder.decode(r),
//     t = Uint8Array.from(encode$1(e.length));
//   return concat$1([t, e], t.length + e.length);
// }
// function bytes2mb(r) {
//   const e = decode$1(r),
//     t = r.slice(encodingLength(e));
//   if (t.length !== e) throw new Error("inconsistent lengths");
//   return "u" + toString$3(t, "base64url");
// }
// function bytes2mh(r) {
//   const e = decode$1(r),
//     t = r.slice(encodingLength(e));
//   if (t.length !== e) throw new Error("inconsistent lengths");
//   return toString$3(t, "base58btc");
// }
// function onion2bytes(r) {
//   const e = r.split(":");
//   if (e.length !== 2)
//     throw new Error(
//       `failed to parse onion addr: ["'${e.join(
//         '", "'
//       )}'"]' does not contain a port number`
//     );
//   if (e[0].length !== 16)
//     throw new Error(
//       `failed to parse onion addr: ${e[0]} not a Tor onion address.`
//     );
//   const t = base32.decode("b" + e[0]),
//     n = parseInt(e[1], 10);
//   if (n < 1 || n > 65536)
//     throw new Error("Port number is not in range(1, 65536)");
//   const i = port2bytes(n);
//   return concat$1([t, i], t.length + i.length);
// }
// function onion32bytes(r) {
//   const e = r.split(":");
//   if (e.length !== 2)
//     throw new Error(
//       `failed to parse onion addr: ["'${e.join(
//         '", "'
//       )}'"]' does not contain a port number`
//     );
//   if (e[0].length !== 56)
//     throw new Error(
//       `failed to parse onion addr: ${e[0]} not a Tor onion3 address.`
//     );
//   const t = base32.decode(`b${e[0]}`),
//     n = parseInt(e[1], 10);
//   if (n < 1 || n > 65536)
//     throw new Error("Port number is not in range(1, 65536)");
//   const i = port2bytes(n);
//   return concat$1([t, i], t.length + i.length);
// }
// function bytes2onion(r) {
//   const e = r.slice(0, r.length - 2),
//     t = r.slice(r.length - 2),
//     n = toString$3(e, "base32"),
//     i = bytes2port(t);
//   return `${n}:${i}`;
// }
// function stringToMultiaddrParts(r) {
//   r = cleanPath(r);
//   const e = [],
//     t = [];
//   let n = null;
//   const i = r.split("/").slice(1);
//   if (i.length === 1 && i[0] === "")
//     return {
//       bytes: new Uint8Array(),
//       string: "/",
//       tuples: [],
//       stringTuples: [],
//       path: null,
//     };
//   for (let o = 0; o < i.length; o++) {
//     const a = i[o],
//       c = getProtocol(a);
//     if (c.size === 0) {
//       e.push([c.code]), t.push([c.code]);
//       continue;
//     }
//     if ((o++, o >= i.length)) throw ParseError("invalid address: " + r);
//     if (c.path === !0) {
//       (n = cleanPath(i.slice(o).join("/"))),
//         e.push([c.code, convertToBytes(c.code, n)]),
//         t.push([c.code, n]);
//       break;
//     }
//     const u = convertToBytes(c.code, i[o]);
//     e.push([c.code, u]), t.push([c.code, convertToString(c.code, u)]);
//   }
//   return {
//     string: stringTuplesToString(t),
//     bytes: tuplesToBytes(e),
//     tuples: e,
//     stringTuples: t,
//     path: n,
//   };
// }
// function bytesToMultiaddrParts(r) {
//   const e = [],
//     t = [];
//   let n = null,
//     i = 0;
//   for (; i < r.length; ) {
//     const o = decode$1(r, i),
//       a = encodingLength(o),
//       c = getProtocol(o),
//       u = sizeForAddr(c, r.slice(i + a));
//     if (u === 0) {
//       e.push([o]), t.push([o]), (i += a);
//       continue;
//     }
//     const l = r.slice(i + a, i + a + u);
//     if (((i += u + a), i > r.length))
//       throw ParseError(
//         "Invalid address Uint8Array: " + toString$3(r, "base16")
//       );
//     e.push([o, l]);
//     const h = convertToString(o, l);
//     if ((t.push([o, h]), c.path === !0)) {
//       n = h;
//       break;
//     }
//   }
//   return {
//     bytes: Uint8Array.from(r),
//     string: stringTuplesToString(t),
//     tuples: e,
//     stringTuples: t,
//     path: n,
//   };
// }
// function stringTuplesToString(r) {
//   const e = [];
//   return (
//     r.map((t) => {
//       const n = getProtocol(t[0]);
//       return e.push(n.name), t.length > 1 && t[1] != null && e.push(t[1]), null;
//     }),
//     cleanPath(e.join("/"))
//   );
// }
// function tuplesToBytes(r) {
//   return concat$1(
//     r.map((e) => {
//       const t = getProtocol(e[0]);
//       let n = Uint8Array.from(encode$1(t.code));
//       return e.length > 1 && e[1] != null && (n = concat$1([n, e[1]])), n;
//     })
//   );
// }
// function sizeForAddr(r, e) {
//   if (r.size > 0) return r.size / 8;
//   if (r.size === 0) return 0;
//   {
//     const t = decode$1(e instanceof Uint8Array ? e : Uint8Array.from(e));
//     return t + encodingLength(t);
//   }
// }
// function cleanPath(r) {
//   return (
//     "/" +
//     r
//       .trim()
//       .split("/")
//       .filter((e) => e)
//       .join("/")
//   );
// }
// function ParseError(r) {
//   return new Error("Error parsing address: " + r);
// }
// const inspect = Symbol.for("nodejs.util.inspect.custom"),
//   symbol = Symbol.for("@multiformats/js-multiaddr/multiaddr"),
//   DNS_CODES = [
//     getProtocol("dns").code,
//     getProtocol("dns4").code,
//     getProtocol("dns6").code,
//     getProtocol("dnsaddr").code,
//   ];
// var be, he, Pe, Ne, Yt;
// const me = class me {
//   constructor(e) {
//     y(this, "bytes");
//     q(this, be, void 0);
//     q(this, he, void 0);
//     q(this, Pe, void 0);
//     q(this, Ne, void 0);
//     y(this, Yt, !0);
//     e == null && (e = "");
//     let t;
//     if (e instanceof Uint8Array) t = bytesToMultiaddrParts(e);
//     else if (typeof e == "string") {
//       if (e.length > 0 && e.charAt(0) !== "/")
//         throw new Error(`multiaddr "${e}" must start with a "/"`);
//       t = stringToMultiaddrParts(e);
//     } else if (isMultiaddr(e)) t = bytesToMultiaddrParts(e.bytes);
//     else throw new Error("addr must be a string, Buffer, or another Multiaddr");
//     (this.bytes = t.bytes),
//       Q(this, be, t.string),
//       Q(this, he, t.tuples),
//       Q(this, Pe, t.stringTuples),
//       Q(this, Ne, t.path);
//   }
//   toString() {
//     return F(this, be);
//   }
//   toJSON() {
//     return this.toString();
//   }
//   toOptions() {
//     let e,
//       t,
//       n,
//       i,
//       o = "";
//     const a = getProtocol("tcp"),
//       c = getProtocol("udp"),
//       u = getProtocol("ip4"),
//       l = getProtocol("ip6"),
//       h = getProtocol("dns6"),
//       f = getProtocol("ip6zone");
//     for (const [p, g] of this.stringTuples())
//       p === f.code && (o = `%${g ?? ""}`),
//         DNS_CODES.includes(p) &&
//           ((t = a.name),
//           (i = 443),
//           (n = `${g ?? ""}${o}`),
//           (e = p === h.code ? 6 : 4)),
//         (p === a.code || p === c.code) &&
//           ((t = getProtocol(p).name), (i = parseInt(g ?? ""))),
//         (p === u.code || p === l.code) &&
//           ((t = getProtocol(p).name),
//           (n = `${g ?? ""}${o}`),
//           (e = p === l.code ? 6 : 4));
//     if (e == null || t == null || n == null || i == null)
//       throw new Error(
//         'multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".'
//       );
//     return {
//       family: e,
//       host: n,
//       transport: t,
//       port: i,
//     };
//   }
//   protos() {
//     return F(this, he).map(([e]) => Object.assign({}, getProtocol(e)));
//   }
//   protoCodes() {
//     return F(this, he).map(([e]) => e);
//   }
//   protoNames() {
//     return F(this, he).map(([e]) => getProtocol(e).name);
//   }
//   tuples() {
//     return F(this, he);
//   }
//   stringTuples() {
//     return F(this, Pe);
//   }
//   encapsulate(e) {
//     return (e = new me(e)), new me(this.toString() + e.toString());
//   }
//   decapsulate(e) {
//     const t = e.toString(),
//       n = this.toString(),
//       i = n.lastIndexOf(t);
//     if (i < 0)
//       throw new Error(
//         `Address ${this.toString()} does not contain subaddress: ${e.toString()}`
//       );
//     return new me(n.slice(0, i));
//   }
//   decapsulateCode(e) {
//     const t = this.tuples();
//     for (let n = t.length - 1; n >= 0; n--)
//       if (t[n][0] === e) return new me(tuplesToBytes(t.slice(0, n)));
//     return this;
//   }
//   getPeerId() {
//     try {
//       let e = [];
//       this.stringTuples().forEach(([n, i]) => {
//         n === names.p2p.code && e.push([n, i]),
//           n === names["p2p-circuit"].code && (e = []);
//       });
//       const t = e.pop();
//       if ((t == null ? void 0 : t[1]) != null) {
//         const n = t[1];
//         return n[0] === "Q" || n[0] === "1"
//           ? toString$3(base58btc.decode(`z${n}`), "base58btc")
//           : toString$3(CID.parse(n).multihash.bytes, "base58btc");
//       }
//       return null;
//     } catch {
//       return null;
//     }
//   }
//   getPath() {
//     return F(this, Ne);
//   }
//   equals(e) {
//     return equals(this.bytes, e.bytes);
//   }
//   async resolve(e) {
//     const t = this.protos().find((o) => o.resolvable);
//     if (t == null) return [this];
//     const n = resolvers.get(t.name);
//     if (n == null)
//       throw new CodeError$2(
//         `no available resolver for ${t.name}`,
//         "ERR_NO_AVAILABLE_RESOLVER"
//       );
//     return (await n(this, e)).map((o) => multiaddr(o));
//   }
//   nodeAddress() {
//     const e = this.toOptions();
//     if (e.transport !== "tcp" && e.transport !== "udp")
//       throw new Error(
//         `multiaddr must have a valid format - no protocol with name: "${e.transport}". Must have a valid transport protocol: "{tcp, udp}"`
//       );
//     return {
//       family: e.family,
//       address: e.host,
//       port: e.port,
//     };
//   }
//   isThinWaistAddress(e) {
//     const t = (e ?? this).protos();
//     return !(
//       t.length !== 2 ||
//       (t[0].code !== 4 && t[0].code !== 41) ||
//       (t[1].code !== 6 && t[1].code !== 273)
//     );
//   }
//   [((Yt = symbol), inspect)]() {
//     return `Multiaddr(${F(this, be)})`;
//   }
// };
// (be = new WeakMap()),
//   (he = new WeakMap()),
//   (Pe = new WeakMap()),
//   (Ne = new WeakMap());
// let Multiaddr = me;
// const resolvers = new Map();
// function isMultiaddr(r) {
//   return !!(r != null && r[symbol]);
// }
// function multiaddr(r) {
//   return new Multiaddr(r);
// }
// const ENVELOPE_DOMAIN_PEER_RECORD = "libp2p-peer-record",
//   ENVELOPE_PAYLOAD_TYPE_PEER_RECORD = Uint8Array.from([3, 1]);
// var PeerRecord$1;
// (function (r) {
//   (function (t) {
//     let n;
//     (t.codec = () => (
//       n == null &&
//         (n = message(
//           (i, o, a = {}) => {
//             a.lengthDelimited !== !1 && o.fork(),
//               i.multiaddr != null &&
//                 i.multiaddr.byteLength > 0 &&
//                 (o.uint32(10), o.bytes(i.multiaddr)),
//               a.lengthDelimited !== !1 && o.ldelim();
//           },
//           (i, o) => {
//             const a = {
//                 multiaddr: new Uint8Array(0),
//               },
//               c = o == null ? i.len : i.pos + o;
//             for (; i.pos < c; ) {
//               const u = i.uint32();
//               switch (u >>> 3) {
//                 case 1:
//                   a.multiaddr = i.bytes();
//                   break;
//                 default:
//                   i.skipType(u & 7);
//                   break;
//               }
//             }
//             return a;
//           }
//         )),
//       n
//     )),
//       (t.encode = (i) => encodeMessage(i, t.codec())),
//       (t.decode = (i) => decodeMessage$1(i, t.codec()));
//   })(r.AddressInfo || (r.AddressInfo = {}));
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           if (
//             (i.lengthDelimited !== !1 && n.fork(),
//             t.peerId != null &&
//               t.peerId.byteLength > 0 &&
//               (n.uint32(10), n.bytes(t.peerId)),
//             t.seq != null && t.seq !== 0n && (n.uint32(16), n.uint64(t.seq)),
//             t.addresses != null)
//           )
//             for (const o of t.addresses)
//               n.uint32(26), r.AddressInfo.codec().encode(o, n);
//           i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {
//               peerId: new Uint8Array(0),
//               seq: 0n,
//               addresses: [],
//             },
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.peerId = t.bytes();
//                 break;
//               case 2:
//                 i.seq = t.uint64();
//                 break;
//               case 3:
//                 i.addresses.push(r.AddressInfo.codec().decode(t, t.uint32()));
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(PeerRecord$1 || (PeerRecord$1 = {}));
// const le = class le {
//   constructor(e) {
//     y(this, "peerId");
//     y(this, "multiaddrs");
//     y(this, "seqNumber");
//     y(this, "domain", le.DOMAIN);
//     y(this, "codec", le.CODEC);
//     y(this, "marshaled");
//     const { peerId: t, multiaddrs: n, seqNumber: i } = e;
//     (this.peerId = t),
//       (this.multiaddrs = n ?? []),
//       (this.seqNumber = i ?? BigInt(Date.now()));
//   }
//   marshal() {
//     return (
//       this.marshaled == null &&
//         (this.marshaled = PeerRecord$1.encode({
//           peerId: this.peerId.toBytes(),
//           seq: BigInt(this.seqNumber),
//           addresses: this.multiaddrs.map((e) => ({
//             multiaddr: e.bytes,
//           })),
//         })),
//       this.marshaled
//     );
//   }
//   equals(e) {
//     return !(
//       !(e instanceof le) ||
//       !this.peerId.equals(e.peerId) ||
//       this.seqNumber !== e.seqNumber ||
//       !arrayEquals(this.multiaddrs, e.multiaddrs)
//     );
//   }
// };
// y(le, "createFromProtobuf", (e) => {
//   const t = PeerRecord$1.decode(e),
//     n = peerIdFromBytes(t.peerId),
//     i = (t.addresses ?? []).map((a) => multiaddr(a.multiaddr)),
//     o = t.seq;
//   return new le({
//     peerId: n,
//     multiaddrs: i,
//     seqNumber: o,
//   });
// }),
//   y(le, "DOMAIN", ENVELOPE_DOMAIN_PEER_RECORD),
//   y(le, "CODEC", ENVELOPE_PAYLOAD_TYPE_PEER_RECORD);
// let PeerRecord = le;
// function isAsyncIterable$8(r) {
//   return r[Symbol.asyncIterator] != null;
// }
// function all$1(r) {
//   if (isAsyncIterable$8(r))
//     return (async () => {
//       const t = [];
//       for await (const n of r) t.push(n);
//       return t;
//     })();
//   const e = [];
//   for (const t of r) e.push(t);
//   return e;
// }
// var eventemitter3 = {
//   exports: {},
// };
// (function (r) {
//   var e = Object.prototype.hasOwnProperty,
//     t = "~";
//   function n() {}
//   Object.create &&
//     ((n.prototype = Object.create(null)), new n().__proto__ || (t = !1));
//   function i(u, l, h) {
//     (this.fn = u), (this.context = l), (this.once = h || !1);
//   }
//   function o(u, l, h, f, d) {
//     if (typeof h != "function")
//       throw new TypeError("The listener must be a function");
//     var p = new i(h, f || u, d),
//       g = t ? t + l : l;
//     return (
//       u._events[g]
//         ? u._events[g].fn
//           ? (u._events[g] = [u._events[g], p])
//           : u._events[g].push(p)
//         : ((u._events[g] = p), u._eventsCount++),
//       u
//     );
//   }
//   function a(u, l) {
//     --u._eventsCount === 0 ? (u._events = new n()) : delete u._events[l];
//   }
//   function c() {
//     (this._events = new n()), (this._eventsCount = 0);
//   }
//   (c.prototype.eventNames = function () {
//     var l = [],
//       h,
//       f;
//     if (this._eventsCount === 0) return l;
//     for (f in (h = this._events)) e.call(h, f) && l.push(t ? f.slice(1) : f);
//     return Object.getOwnPropertySymbols
//       ? l.concat(Object.getOwnPropertySymbols(h))
//       : l;
//   }),
//     (c.prototype.listeners = function (l) {
//       var h = t ? t + l : l,
//         f = this._events[h];
//       if (!f) return [];
//       if (f.fn) return [f.fn];
//       for (var d = 0, p = f.length, g = new Array(p); d < p; d++)
//         g[d] = f[d].fn;
//       return g;
//     }),
//     (c.prototype.listenerCount = function (l) {
//       var h = t ? t + l : l,
//         f = this._events[h];
//       return f ? (f.fn ? 1 : f.length) : 0;
//     }),
//     (c.prototype.emit = function (l, h, f, d, p, g) {
//       var m = t ? t + l : l;
//       if (!this._events[m]) return !1;
//       var b = this._events[m],
//         _ = arguments.length,
//         w,
//         E;
//       if (b.fn) {
//         switch ((b.once && this.removeListener(l, b.fn, void 0, !0), _)) {
//           case 1:
//             return b.fn.call(b.context), !0;
//           case 2:
//             return b.fn.call(b.context, h), !0;
//           case 3:
//             return b.fn.call(b.context, h, f), !0;
//           case 4:
//             return b.fn.call(b.context, h, f, d), !0;
//           case 5:
//             return b.fn.call(b.context, h, f, d, p), !0;
//           case 6:
//             return b.fn.call(b.context, h, f, d, p, g), !0;
//         }
//         for (E = 1, w = new Array(_ - 1); E < _; E++) w[E - 1] = arguments[E];
//         b.fn.apply(b.context, w);
//       } else {
//         var v = b.length,
//           S;
//         for (E = 0; E < v; E++)
//           switch (
//             (b[E].once && this.removeListener(l, b[E].fn, void 0, !0), _)
//           ) {
//             case 1:
//               b[E].fn.call(b[E].context);
//               break;
//             case 2:
//               b[E].fn.call(b[E].context, h);
//               break;
//             case 3:
//               b[E].fn.call(b[E].context, h, f);
//               break;
//             case 4:
//               b[E].fn.call(b[E].context, h, f, d);
//               break;
//             default:
//               if (!w)
//                 for (S = 1, w = new Array(_ - 1); S < _; S++)
//                   w[S - 1] = arguments[S];
//               b[E].fn.apply(b[E].context, w);
//           }
//       }
//       return !0;
//     }),
//     (c.prototype.on = function (l, h, f) {
//       return o(this, l, h, f, !1);
//     }),
//     (c.prototype.once = function (l, h, f) {
//       return o(this, l, h, f, !0);
//     }),
//     (c.prototype.removeListener = function (l, h, f, d) {
//       var p = t ? t + l : l;
//       if (!this._events[p]) return this;
//       if (!h) return a(this, p), this;
//       var g = this._events[p];
//       if (g.fn)
//         g.fn === h && (!d || g.once) && (!f || g.context === f) && a(this, p);
//       else {
//         for (var m = 0, b = [], _ = g.length; m < _; m++)
//           (g[m].fn !== h || (d && !g[m].once) || (f && g[m].context !== f)) &&
//             b.push(g[m]);
//         b.length ? (this._events[p] = b.length === 1 ? b[0] : b) : a(this, p);
//       }
//       return this;
//     }),
//     (c.prototype.removeAllListeners = function (l) {
//       var h;
//       return (
//         l
//           ? ((h = t ? t + l : l), this._events[h] && a(this, h))
//           : ((this._events = new n()), (this._eventsCount = 0)),
//         this
//       );
//     }),
//     (c.prototype.off = c.prototype.removeListener),
//     (c.prototype.addListener = c.prototype.on),
//     (c.prefixed = t),
//     (c.EventEmitter = c),
//     (r.exports = c);
// })(eventemitter3);
// var eventemitter3Exports = eventemitter3.exports;
// const EventEmitter$1 = getDefaultExportFromCjs(eventemitter3Exports);
// class TimeoutError extends Error {
//   constructor(e) {
//     super(e), (this.name = "TimeoutError");
//   }
// }
// let AbortError$4 = class extends Error {
//   constructor(e) {
//     super(), (this.name = "AbortError"), (this.message = e);
//   }
// };
// const getDOMException = (r) =>
//     globalThis.DOMException === void 0
//       ? new AbortError$4(r)
//       : new DOMException(r),
//   getAbortedReason = (r) => {
//     const e =
//       r.reason === void 0
//         ? getDOMException("This operation was aborted.")
//         : r.reason;
//     return e instanceof Error ? e : getDOMException(e);
//   };
// function lowerBound$1(r, e, t) {
//   let n = 0,
//     i = r.length;
//   for (; i > 0; ) {
//     const o = Math.trunc(i / 2);
//     let a = n + o;
//     t(r[a], e) <= 0 ? ((n = ++a), (i -= o + 1)) : (i = o);
//   }
//   return n;
// }
// var ce;
// class PriorityQueue {
//   constructor() {
//     q(this, ce, []);
//   }
//   enqueue(e, t) {
//     t = {
//       priority: 0,
//       ...t,
//     };
//     const n = {
//       priority: t.priority,
//       run: e,
//     };
//     if (this.size && F(this, ce)[this.size - 1].priority >= t.priority) {
//       F(this, ce).push(n);
//       return;
//     }
//     const i = lowerBound$1(F(this, ce), n, (o, a) => a.priority - o.priority);
//     F(this, ce).splice(i, 0, n);
//   }
//   dequeue() {
//     const e = F(this, ce).shift();
//     return e == null ? void 0 : e.run;
//   }
//   filter(e) {
//     return F(this, ce)
//       .filter((t) => t.priority === e.priority)
//       .map((t) => t.run);
//   }
//   get size() {
//     return F(this, ce).length;
//   }
// }

// let implementation;
// async function createReleaseable(r, e) {
//   let t;
//   const n = new Promise((i) => {
//     t = i;
//   });
//   return (
//     r.add(async () =>
//       pTimeout(
//         (async () => {
//           await new Promise((i) => {
//             t(() => {
//               i();
//             });
//           });
//         })(),
//         {
//           milliseconds: e.timeout,
//         }
//       )
//     ),
//     n
//   );
// }
// const createMutex = (r, e) => {
//     if (implementation.isWorker === !0)
//       return {
//         readLock: implementation.readLock(r, e),
//         writeLock: implementation.writeLock(r, e),
//       };
//     const t = new PQueue({
//       concurrency: 1,
//     });
//     let n;
//     return {
//       async readLock() {
//         if (n != null) return createReleaseable(n, e);
//         n = new PQueue({
//           concurrency: e.concurrency,
//           autoStart: !1,
//         });
//         const i = n,
//           o = createReleaseable(n, e);
//         return (
//           t.add(async () => {
//             i.start(),
//               await i.onIdle().then(() => {
//                 n === i && (n = null);
//               });
//           }),
//           o
//         );
//       },
//       async writeLock() {
//         return (n = null), createReleaseable(t, e);
//       },
//     };
//   },
//   defaultOptions$4 = {
//     name: "lock",
//     concurrency: 1 / 0,
//     timeout: 846e5,
//     singleProcess: !1,
//   };

// var Peer$1;
// (function (r) {
//   (function (t) {
//     let n;
//     (t.codec = () => (
//       n == null &&
//         (n = message(
//           (i, o, a = {}) => {
//             a.lengthDelimited !== !1 && o.fork(),
//               i.key != null && i.key !== "" && (o.uint32(10), o.string(i.key)),
//               i.value != null &&
//                 i.value.byteLength > 0 &&
//                 (o.uint32(18), o.bytes(i.value)),
//               a.lengthDelimited !== !1 && o.ldelim();
//           },
//           (i, o) => {
//             const a = {
//                 key: "",
//                 value: new Uint8Array(0),
//               },
//               c = o == null ? i.len : i.pos + o;
//             for (; i.pos < c; ) {
//               const u = i.uint32();
//               switch (u >>> 3) {
//                 case 1:
//                   a.key = i.string();
//                   break;
//                 case 2:
//                   a.value = i.bytes();
//                   break;
//                 default:
//                   i.skipType(u & 7);
//                   break;
//               }
//             }
//             return a;
//           }
//         )),
//       n
//     )),
//       (t.encode = (i) => encodeMessage(i, t.codec())),
//       (t.decode = (i) => decodeMessage$1(i, t.codec()));
//   })(r.Peer$metadataEntry || (r.Peer$metadataEntry = {})),
//     (function (t) {
//       let n;
//       (t.codec = () => (
//         n == null &&
//           (n = message(
//             (i, o, a = {}) => {
//               a.lengthDelimited !== !1 && o.fork(),
//                 i.key != null &&
//                   i.key !== "" &&
//                   (o.uint32(10), o.string(i.key)),
//                 i.value != null &&
//                   (o.uint32(18), Tag.codec().encode(i.value, o)),
//                 a.lengthDelimited !== !1 && o.ldelim();
//             },
//             (i, o) => {
//               const a = {
//                   key: "",
//                 },
//                 c = o == null ? i.len : i.pos + o;
//               for (; i.pos < c; ) {
//                 const u = i.uint32();
//                 switch (u >>> 3) {
//                   case 1:
//                     a.key = i.string();
//                     break;
//                   case 2:
//                     a.value = Tag.codec().decode(i, i.uint32());
//                     break;
//                   default:
//                     i.skipType(u & 7);
//                     break;
//                 }
//               }
//               return a;
//             }
//           )),
//         n
//       )),
//         (t.encode = (i) => encodeMessage(i, t.codec())),
//         (t.decode = (i) => decodeMessage$1(i, t.codec()));
//     })(r.Peer$tagsEntry || (r.Peer$tagsEntry = {}));
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           if ((i.lengthDelimited !== !1 && n.fork(), t.addresses != null))
//             for (const o of t.addresses)
//               n.uint32(10), Address.codec().encode(o, n);
//           if (t.protocols != null)
//             for (const o of t.protocols) n.uint32(18), n.string(o);
//           if (
//             (t.publicKey != null && (n.uint32(34), n.bytes(t.publicKey)),
//             t.peerRecordEnvelope != null &&
//               (n.uint32(42), n.bytes(t.peerRecordEnvelope)),
//             t.metadata != null && t.metadata.size !== 0)
//           )
//             for (const [o, a] of t.metadata.entries())
//               n.uint32(50),
//                 r.Peer$metadataEntry.codec().encode(
//                   {
//                     key: o,
//                     value: a,
//                   },
//                   n
//                 );
//           if (t.tags != null && t.tags.size !== 0)
//             for (const [o, a] of t.tags.entries())
//               n.uint32(58),
//                 r.Peer$tagsEntry.codec().encode(
//                   {
//                     key: o,
//                     value: a,
//                   },
//                   n
//                 );
//           i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {
//               addresses: [],
//               protocols: [],
//               metadata: new Map(),
//               tags: new Map(),
//             },
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.addresses.push(Address.codec().decode(t, t.uint32()));
//                 break;
//               case 2:
//                 i.protocols.push(t.string());
//                 break;
//               case 4:
//                 i.publicKey = t.bytes();
//                 break;
//               case 5:
//                 i.peerRecordEnvelope = t.bytes();
//                 break;
//               case 6: {
//                 const c = r.Peer$metadataEntry.codec().decode(t, t.uint32());
//                 i.metadata.set(c.key, c.value);
//                 break;
//               }
//               case 7: {
//                 const c = r.Peer$tagsEntry.codec().decode(t, t.uint32());
//                 i.tags.set(c.key, c.value);
//                 break;
//               }
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(Peer$1 || (Peer$1 = {}));
// var Address;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.multiaddr != null &&
//               t.multiaddr.byteLength > 0 &&
//               (n.uint32(10), n.bytes(t.multiaddr)),
//             t.isCertified != null && (n.uint32(16), n.bool(t.isCertified)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {
//               multiaddr: new Uint8Array(0),
//             },
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.multiaddr = t.bytes();
//                 break;
//               case 2:
//                 i.isCertified = t.bool();
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(Address || (Address = {}));
// var Tag;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.value != null &&
//               t.value !== 0 &&
//               (n.uint32(8), n.uint32(t.value)),
//             t.expiry != null && (n.uint32(16), n.uint64(t.expiry)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {
//               value: 0,
//             },
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.value = t.uint32();
//                 break;
//               case 2:
//                 i.expiry = t.uint64();
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(Tag || (Tag = {}));
// function bytesToPeer(r, e) {
//   const t = Peer$1.decode(e);
//   t.publicKey != null &&
//     r.publicKey == null &&
//     (r = peerIdFromPeerId({
//       ...r,
//       publicKey: r.publicKey,
//     }));
//   const n = new Map(),
//     i = BigInt(Date.now());
//   for (const [o, a] of t.tags.entries())
//     (a.expiry != null && a.expiry < i) || n.set(o, a);
//   return {
//     ...t,
//     id: r,
//     addresses: t.addresses.map(({ multiaddr: o, isCertified: a }) => ({
//       multiaddr: multiaddr(o),
//       isCertified: a ?? !1,
//     })),
//     metadata: t.metadata,
//     peerRecordEnvelope: t.peerRecordEnvelope ?? void 0,
//     tags: n,
//   };
// }

// class Key {
//   constructor(e, t) {
//     y(this, "_buf");
//     if (typeof e == "string") this._buf = fromString(e);
//     else if (e instanceof Uint8Array) this._buf = e;
//     else throw new Error("Invalid key, should be String of Uint8Array");
//     if (
//       (t == null && (t = !0),
//       t && this.clean(),
//       this._buf.byteLength === 0 || this._buf[0] !== pathSep)
//     )
//       throw new Error("Invalid key");
//   }
//   toString(e = "utf8") {
//     return toString$3(this._buf, e);
//   }
//   uint8Array() {
//     return this._buf;
//   }
//   get [Symbol.toStringTag]() {
//     return `Key(${this.toString()})`;
//   }
//   static withNamespaces(e) {
//     return new Key(e.join(pathSepS));
//   }
//   static random() {
//     return new Key(Math.random().toString().substring(2));
//   }
//   static asKey(e) {
//     return e instanceof Uint8Array || typeof e == "string"
//       ? new Key(e)
//       : typeof e.uint8Array == "function"
//       ? new Key(e.uint8Array())
//       : null;
//   }
//   clean() {
//     if (
//       ((this._buf == null || this._buf.byteLength === 0) &&
//         (this._buf = pathSepB),
//       this._buf[0] !== pathSep)
//     ) {
//       const e = new Uint8Array(this._buf.byteLength + 1);
//       e.fill(pathSep, 0, 1), e.set(this._buf, 1), (this._buf = e);
//     }
//     for (
//       ;
//       this._buf.byteLength > 1 &&
//       this._buf[this._buf.byteLength - 1] === pathSep;

//     )
//       this._buf = this._buf.subarray(0, -1);
//   }
//   less(e) {
//     const t = this.list(),
//       n = e.list();
//     for (let i = 0; i < t.length; i++) {
//       if (n.length < i + 1) return !1;
//       const o = t[i],
//         a = n[i];
//       if (o < a) return !0;
//       if (o > a) return !1;
//     }
//     return t.length < n.length;
//   }
//   reverse() {
//     return Key.withNamespaces(this.list().slice().reverse());
//   }
//   namespaces() {
//     return this.list();
//   }
//   baseNamespace() {
//     const e = this.namespaces();
//     return e[e.length - 1];
//   }
//   list() {
//     return this.toString().split(pathSepS).slice(1);
//   }
//   type() {
//     return namespaceType(this.baseNamespace());
//   }
//   name() {
//     return namespaceValue(this.baseNamespace());
//   }
//   instance(e) {
//     return new Key(this.toString() + ":" + e);
//   }
//   path() {
//     let e = this.parent().toString();
//     return (
//       e.endsWith(pathSepS) || (e += pathSepS), (e += this.type()), new Key(e)
//     );
//   }
//   parent() {
//     const e = this.list();
//     return e.length === 1
//       ? new Key(pathSepS)
//       : new Key(e.slice(0, -1).join(pathSepS));
//   }
//   child(e) {
//     return this.toString() === pathSepS
//       ? e
//       : e.toString() === pathSepS
//       ? this
//       : new Key(this.toString() + e.toString(), !1);
//   }
//   isAncestorOf(e) {
//     return e.toString() === this.toString()
//       ? !1
//       : e.toString().startsWith(this.toString());
//   }
//   isDecendantOf(e) {
//     return e.toString() === this.toString()
//       ? !1
//       : this.toString().startsWith(e.toString());
//   }
//   isTopLevel() {
//     return this.list().length === 1;
//   }
//   concat(...e) {
//     return Key.withNamespaces([
//       ...this.namespaces(),
//       ...flatten(e.map((t) => t.namespaces())),
//     ]);
//   }
// }
// function namespaceType(r) {
//   const e = r.split(":");
//   return e.length < 2 ? "" : e.slice(0, -1).join(":");
// }
// function namespaceValue(r) {
//   const e = r.split(":");
//   return e[e.length - 1];
// }
// function flatten(r) {
//   return [].concat(...r);
// }
// const NAMESPACE_COMMON = "/peers/";
// function peerIdToDatastoreKey(r) {
//   if (!isPeerId(r) || r.type == null)
//     throw new CodeError$2("Invalid PeerId", codes$2.ERR_INVALID_PARAMETERS);
//   const e = r.toCID().toString();
//   return new Key(`${NAMESPACE_COMMON}${e}`);
// }
// async function dedupeFilterAndSortAddresses(r, e, t) {
//   const n = new Map();
//   for (const i of t) {
//     if (i == null) continue;
//     if (
//       (i.multiaddr instanceof Uint8Array &&
//         (i.multiaddr = multiaddr(i.multiaddr)),
//       !isMultiaddr(i.multiaddr))
//     )
//       throw new CodeError$2(
//         "Multiaddr was invalid",
//         codes$2.ERR_INVALID_PARAMETERS
//       );
//     if (!(await e(r, i.multiaddr))) continue;
//     const o = i.isCertified ?? !1,
//       a = i.multiaddr.toString(),
//       c = n.get(a);
//     c != null
//       ? (i.isCertified = c.isCertified || o)
//       : n.set(a, {
//           multiaddr: i.multiaddr,
//           isCertified: o,
//         });
//   }
//   return [...n.values()]
//     .sort((i, o) =>
//       i.multiaddr.toString().localeCompare(o.multiaddr.toString())
//     )
//     .map(({ isCertified: i, multiaddr: o }) => ({
//       isCertified: i,
//       multiaddr: o.bytes,
//     }));
// }
// async function toPeerPB(r, e, t, n) {
//   if (e == null)
//     throw new CodeError$2("Invalid PeerData", codes$2.ERR_INVALID_PARAMETERS);
//   if (
//     e.publicKey != null &&
//     r.publicKey != null &&
//     !equals(e.publicKey, r.publicKey)
//   )
//     throw new CodeError$2(
//       "publicKey bytes do not match peer id publicKey bytes",
//       codes$2.ERR_INVALID_PARAMETERS
//     );
//   const i = n.existingPeer;
//   if (i != null && !r.equals(i.id))
//     throw new CodeError$2(
//       "peer id did not match existing peer id",
//       codes$2.ERR_INVALID_PARAMETERS
//     );
//   let o = (i == null ? void 0 : i.addresses) ?? [],
//     a = new Set((i == null ? void 0 : i.protocols) ?? []),
//     c = (i == null ? void 0 : i.metadata) ?? new Map(),
//     u = (i == null ? void 0 : i.tags) ?? new Map(),
//     l = i == null ? void 0 : i.peerRecordEnvelope;
//   if (t === "patch") {
//     if (
//       ((e.multiaddrs != null || e.addresses != null) &&
//         ((o = []),
//         e.multiaddrs != null &&
//           o.push(
//             ...e.multiaddrs.map((f) => ({
//               isCertified: !1,
//               multiaddr: f,
//             }))
//           ),
//         e.addresses != null && o.push(...e.addresses)),
//       e.protocols != null && (a = new Set(e.protocols)),
//       e.metadata != null)
//     ) {
//       const f =
//         e.metadata instanceof Map
//           ? [...e.metadata.entries()]
//           : Object.entries(e.metadata);
//       c = createSortedMap(f, {
//         validate: validateMetadata,
//       });
//     }
//     if (e.tags != null) {
//       const f =
//         e.tags instanceof Map ? [...e.tags.entries()] : Object.entries(e.tags);
//       u = createSortedMap(f, {
//         validate: validateTag,
//         map: mapTag,
//       });
//     }
//     e.peerRecordEnvelope != null && (l = e.peerRecordEnvelope);
//   }
//   if (t === "merge") {
//     if (
//       (e.multiaddrs != null &&
//         o.push(
//           ...e.multiaddrs.map((f) => ({
//             isCertified: !1,
//             multiaddr: f,
//           }))
//         ),
//       e.addresses != null && o.push(...e.addresses),
//       e.protocols != null && (a = new Set([...a, ...e.protocols])),
//       e.metadata != null)
//     ) {
//       const f =
//         e.metadata instanceof Map
//           ? [...e.metadata.entries()]
//           : Object.entries(e.metadata);
//       for (const [d, p] of f) p == null ? c.delete(d) : c.set(d, p);
//       c = createSortedMap([...c.entries()], {
//         validate: validateMetadata,
//       });
//     }
//     if (e.tags != null) {
//       const f =
//           e.tags instanceof Map
//             ? [...e.tags.entries()]
//             : Object.entries(e.tags),
//         d = new Map(u);
//       for (const [p, g] of f) g == null ? d.delete(p) : d.set(p, g);
//       u = createSortedMap([...d.entries()], {
//         validate: validateTag,
//         map: mapTag,
//       });
//     }
//     e.peerRecordEnvelope != null && (l = e.peerRecordEnvelope);
//   }
//   const h = {
//     addresses: await dedupeFilterAndSortAddresses(
//       r,
//       n.addressFilter ?? (async () => !0),
//       o
//     ),
//     protocols: [...a.values()].sort((f, d) => f.localeCompare(d)),
//     metadata: c,
//     tags: u,
//     publicKey:
//       (i == null ? void 0 : i.id.publicKey) ?? e.publicKey ?? r.publicKey,
//     peerRecordEnvelope: l,
//   };
//   return r.type !== "RSA" && delete h.publicKey, h;
// }
// function createSortedMap(r, e) {
//   var n;
//   const t = new Map();
//   for (const [i, o] of r) o != null && e.validate(i, o);
//   for (const [i, o] of r.sort(([a], [c]) => a.localeCompare(c)))
//     o != null &&
//       t.set(i, ((n = e.map) == null ? void 0 : n.call(e, i, o)) ?? o);
//   return t;
// }
// function validateMetadata(r, e) {
//   if (typeof r != "string")
//     throw new CodeError$2(
//       "Metadata key must be a string",
//       codes$2.ERR_INVALID_PARAMETERS
//     );
//   if (!(e instanceof Uint8Array))
//     throw new CodeError$2(
//       "Metadata value must be a Uint8Array",
//       codes$2.ERR_INVALID_PARAMETERS
//     );
// }
// function validateTag(r, e) {
//   if (typeof r != "string")
//     throw new CodeError$2(
//       "Tag name must be a string",
//       codes$2.ERR_INVALID_PARAMETERS
//     );
//   if (e.value != null) {
//     if (parseInt(`${e.value}`, 10) !== e.value)
//       throw new CodeError$2(
//         "Tag value must be an integer",
//         codes$2.ERR_INVALID_PARAMETERS
//       );
//     if (e.value < 0 || e.value > 100)
//       throw new CodeError$2(
//         "Tag value must be between 0-100",
//         codes$2.ERR_INVALID_PARAMETERS
//       );
//   }
//   if (e.ttl != null) {
//     if (parseInt(`${e.ttl}`, 10) !== e.ttl)
//       throw new CodeError$2(
//         "Tag ttl must be an integer",
//         codes$2.ERR_INVALID_PARAMETERS
//       );
//     if (e.ttl < 0)
//       throw new CodeError$2(
//         "Tag ttl must be between greater than 0",
//         codes$2.ERR_INVALID_PARAMETERS
//       );
//   }
// }
// function mapTag(r, e) {
//   let t;
//   return (
//     e.expiry != null && (t = e.expiry),
//     e.ttl != null && (t = BigInt(Date.now() + Number(e.ttl))),
//     {
//       value: e.value ?? 0,
//       expiry: t,
//     }
//   );
// }
// function decodePeer(r, e, t) {
//   const n = r.toString().split("/")[2],
//     i = base32.decode(n),
//     o = peerIdFromBytes(i),
//     a = t.get(o);
//   if (a != null) return a;
//   const c = bytesToPeer(o, e);
//   return t.set(o, c), c;
// }
// function mapQuery(r, e) {
//   return r == null
//     ? {}
//     : {
//         prefix: NAMESPACE_COMMON,
//         filters: (r.filters ?? []).map(
//           (t) =>
//             ({ key: n, value: i }) =>
//               t(decodePeer(n, i, e))
//         ),
//         orders: (r.orders ?? []).map(
//           (t) => (n, i) =>
//             t(decodePeer(n.key, n.value, e), decodePeer(i.key, i.value, e))
//         ),
//       };
// }
// var Re, qe, xe, Ye;
// class PersistentStore {
//   constructor(e, t = {}) {
//     q(this, Re);
//     q(this, xe);
//     y(this, "peerId");
//     y(this, "datastore");
//     y(this, "lock");
//     y(this, "addressFilter");
//     (this.peerId = e.peerId),
//       (this.datastore = e.datastore),
//       (this.addressFilter = t.addressFilter),
//       (this.lock = createMortice({
//         name: "peer-store",
//         singleProcess: !0,
//       }));
//   }
//   async has(e) {
//     return this.datastore.has(peerIdToDatastoreKey(e));
//   }
//   async delete(e) {
//     if (this.peerId.equals(e))
//       throw new CodeError$2(
//         "Cannot delete self peer",
//         codes$2.ERR_INVALID_PARAMETERS
//       );
//     await this.datastore.delete(peerIdToDatastoreKey(e));
//   }
//   async load(e) {
//     const t = await this.datastore.get(peerIdToDatastoreKey(e));
//     return bytesToPeer(e, t);
//   }
//   async save(e, t) {
//     const { existingBuf: n, existingPeer: i } = await Z(this, Re, qe).call(
//         this,
//         e
//       ),
//       o = await toPeerPB(e, t, "patch", {
//         addressFilter: this.addressFilter,
//       });
//     return Z(this, xe, Ye).call(this, e, o, n, i);
//   }
//   async patch(e, t) {
//     const { existingBuf: n, existingPeer: i } = await Z(this, Re, qe).call(
//         this,
//         e
//       ),
//       o = await toPeerPB(e, t, "patch", {
//         addressFilter: this.addressFilter,
//         existingPeer: i,
//       });
//     return Z(this, xe, Ye).call(this, e, o, n, i);
//   }
//   async merge(e, t) {
//     const { existingBuf: n, existingPeer: i } = await Z(this, Re, qe).call(
//         this,
//         e
//       ),
//       o = await toPeerPB(e, t, "merge", {
//         addressFilter: this.addressFilter,
//         existingPeer: i,
//       });
//     return Z(this, xe, Ye).call(this, e, o, n, i);
//   }
//   async *all(e) {
//     const t = new PeerMap();
//     for await (const { key: n, value: i } of this.datastore.query(
//       mapQuery(e ?? {}, t)
//     )) {
//       const o = decodePeer(n, i, t);
//       o.id.equals(this.peerId) || (yield o);
//     }
//   }
// }
// (Re = new WeakSet()),
//   (qe = async function (e) {
//     try {
//       const t = await this.datastore.get(peerIdToDatastoreKey(e)),
//         n = bytesToPeer(e, t);
//       return {
//         existingBuf: t,
//         existingPeer: n,
//       };
//     } catch (t) {
//       if (t.code !== "ERR_NOT_FOUND") throw t;
//     }
//     return {};
//   }),
//   (xe = new WeakSet()),
//   (Ye = async function (e, t, n, i) {
//     const o = Peer$1.encode(t);
//     return n != null && equals(o, n)
//       ? {
//           peer: bytesToPeer(e, o),
//           previous: i,
//           updated: !1,
//         }
//       : (await this.datastore.put(peerIdToDatastoreKey(e), o),
//         {
//           peer: bytesToPeer(e, o),
//           previous: i,
//           updated: !0,
//         });
//   });
// var Ce, Ze;
// class PersistentPeerStore {
//   constructor(e, t = {}) {
//     q(this, Ce);
//     y(this, "store");
//     y(this, "events");
//     y(this, "peerId");
//     y(this, "log");
//     (this.log = e.logger.forComponent("libp2p:peer-store")),
//       (this.events = e.events),
//       (this.peerId = e.peerId),
//       (this.store = new PersistentStore(e, t));
//   }
//   async forEach(e, t) {
//     this.log.trace("forEach await read lock");
//     const n = await this.store.lock.readLock();
//     this.log.trace("forEach got read lock");
//     try {
//       for await (const i of this.store.all(t)) e(i);
//     } finally {
//       this.log.trace("forEach release read lock"), n();
//     }
//   }
//   async all(e) {
//     this.log.trace("all await read lock");
//     const t = await this.store.lock.readLock();
//     this.log.trace("all got read lock");
//     try {
//       return await all$1(this.store.all(e));
//     } finally {
//       this.log.trace("all release read lock"), t();
//     }
//   }
//   async delete(e) {
//     this.log.trace("delete await write lock");
//     const t = await this.store.lock.writeLock();
//     this.log.trace("delete got write lock");
//     try {
//       await this.store.delete(e);
//     } finally {
//       this.log.trace("delete release write lock"), t();
//     }
//   }
//   async has(e) {
//     this.log.trace("has await read lock");
//     const t = await this.store.lock.readLock();
//     this.log.trace("has got read lock");
//     try {
//       return await this.store.has(e);
//     } finally {
//       this.log.trace("has release read lock"), t();
//     }
//   }
//   async get(e) {
//     this.log.trace("get await read lock");
//     const t = await this.store.lock.readLock();
//     this.log.trace("get got read lock");
//     try {
//       return await this.store.load(e);
//     } finally {
//       this.log.trace("get release read lock"), t();
//     }
//   }
//   async save(e, t) {
//     this.log.trace("save await write lock");
//     const n = await this.store.lock.writeLock();
//     this.log.trace("save got write lock");
//     try {
//       const i = await this.store.save(e, t);
//       return Z(this, Ce, Ze).call(this, e, i), i.peer;
//     } finally {
//       this.log.trace("save release write lock"), n();
//     }
//   }
//   async patch(e, t) {
//     this.log.trace("patch await write lock");
//     const n = await this.store.lock.writeLock();
//     this.log.trace("patch got write lock");
//     try {
//       const i = await this.store.patch(e, t);
//       return Z(this, Ce, Ze).call(this, e, i), i.peer;
//     } finally {
//       this.log.trace("patch release write lock"), n();
//     }
//   }
//   async merge(e, t) {
//     this.log.trace("merge await write lock");
//     const n = await this.store.lock.writeLock();
//     this.log.trace("merge got write lock");
//     try {
//       const i = await this.store.merge(e, t);
//       return Z(this, Ce, Ze).call(this, e, i), i.peer;
//     } finally {
//       this.log.trace("merge release write lock"), n();
//     }
//   }
//   async consumePeerRecord(e, t) {
//     const n = await RecordEnvelope.openAndCertify(e, PeerRecord.DOMAIN);
//     if ((t == null ? void 0 : t.equals(n.peerId)) === !1)
//       return (
//         this.log(
//           "envelope peer id was not the expected peer id - expected: %p received: %p",
//           t,
//           n.peerId
//         ),
//         !1
//       );
//     const i = PeerRecord.createFromProtobuf(n.payload);
//     let o;
//     try {
//       o = await this.get(n.peerId);
//     } catch (a) {
//       if (a.code !== "ERR_NOT_FOUND") throw a;
//     }
//     if ((o == null ? void 0 : o.peerRecordEnvelope) != null) {
//       const a = await RecordEnvelope.createFromProtobuf(o.peerRecordEnvelope),
//         c = PeerRecord.createFromProtobuf(a.payload);
//       if (c.seqNumber >= i.seqNumber)
//         return (
//           this.log(
//             "sequence number was lower or equal to existing sequence number - stored: %d received: %d",
//             c.seqNumber,
//             i.seqNumber
//           ),
//           !1
//         );
//     }
//     return (
//       await this.patch(i.peerId, {
//         peerRecordEnvelope: e,
//         addresses: i.multiaddrs.map((a) => ({
//           isCertified: !0,
//           multiaddr: a,
//         })),
//       }),
//       !0
//     );
//   }
// }
// (Ce = new WeakSet()),
//   (Ze = function (e, t) {
//     t.updated &&
//       (this.peerId.equals(e)
//         ? this.events.safeDispatchEvent("self:peer:update", {
//             detail: t,
//           })
//         : this.events.safeDispatchEvent("peer:update", {
//             detail: t,
//           }));
//   });
// function isAsyncIterable$7(r) {
//   return r[Symbol.asyncIterator] != null;
// }
// function drain(r) {
//   if (isAsyncIterable$7(r))
//     return (async () => {
//       for await (const e of r);
//     })();
//   for (const e of r);
// }
// function peekable(r) {
//   const [e, t] =
//       r[Symbol.asyncIterator] != null
//         ? [r[Symbol.asyncIterator](), Symbol.asyncIterator]
//         : [r[Symbol.iterator](), Symbol.iterator],
//     n = [];
//   return {
//     peek: () => e.next(),
//     push: (i) => {
//       n.push(i);
//     },
//     next: () =>
//       n.length > 0
//         ? {
//             done: !1,
//             value: n.shift(),
//           }
//         : e.next(),
//     [t]() {
//       return this;
//     },
//   };
// }
// function isAsyncIterable$6(r) {
//   return r[Symbol.asyncIterator] != null;
// }
// function filter(r, e) {
//   if (isAsyncIterable$6(r))
//     return (async function* () {
//       for await (const c of r) (await e(c)) && (yield c);
//     })();
//   const t = peekable(r),
//     { value: n, done: i } = t.next();
//   if (i === !0) return (function* () {})();
//   const o = e(n);
//   if (typeof o.then == "function")
//     return (async function* () {
//       (await o) && (yield n);
//       for await (const c of t) (await e(c)) && (yield c);
//     })();
//   const a = e;
//   return (function* () {
//     o === !0 && (yield n);
//     for (const c of t) a(c) && (yield c);
//   })();
// }
// function isAsyncIterable$5(r) {
//   return r[Symbol.asyncIterator] != null;
// }
// function sort(r, e) {
//   return isAsyncIterable$5(r)
//     ? (async function* () {
//         yield* (await all$1(r)).sort(e);
//       })()
//     : (function* () {
//         yield* all$1(r).sort(e);
//       })();
// }
// function isAsyncIterable$4(r) {
//   return r[Symbol.asyncIterator] != null;
// }
// function take(r, e) {
//   return isAsyncIterable$4(r)
//     ? (async function* () {
//         let t = 0;
//         if (!(e < 1)) {
//           for await (const n of r) if ((yield n, t++, t === e)) return;
//         }
//       })()
//     : (function* () {
//         let t = 0;
//         if (!(e < 1)) {
//           for (const n of r) if ((yield n, t++, t === e)) return;
//         }
//       })();
// }

// var hashlru = function (r) {
//   if (!r)
//     throw Error(
//       "hashlru must have a max value, of type number, greater than 0"
//     );
//   var e = 0,
//     t = Object.create(null),
//     n = Object.create(null);
//   function i(o, a) {
//     (t[o] = a), e++, e >= r && ((e = 0), (n = t), (t = Object.create(null)));
//   }
//   return {
//     has: function (o) {
//       return t[o] !== void 0 || n[o] !== void 0;
//     },
//     remove: function (o) {
//       t[o] !== void 0 && (t[o] = void 0), n[o] !== void 0 && (n[o] = void 0);
//     },
//     get: function (o) {
//       var a = t[o];
//       if (a !== void 0) return a;
//       if ((a = n[o]) !== void 0) return i(o, a), a;
//     },
//     set: function (o, a) {
//       t[o] !== void 0 ? (t[o] = a) : i(o, a);
//     },
//     clear: function () {
//       (t = Object.create(null)), (n = Object.create(null));
//     },
//   };
// };

// function isAsyncIterable$3(r) {
//   return r[Symbol.asyncIterator] != null;
// }
// function merge(...r) {
//   const e = [];
//   for (const t of r) isAsyncIterable$3(t) || e.push(t);
//   return e.length === r.length
//     ? (function* () {
//         for (const t of e) yield* t;
//       })()
//     : (async function* () {
//         const t = pushable$1({
//           objectMode: !0,
//         });
//         Promise.resolve().then(async () => {
//           try {
//             await Promise.all(
//               r.map(async (n) => {
//                 for await (const i of n) t.push(i);
//               })
//             ),
//               t.end();
//           } catch (n) {
//             t.end(n);
//           }
//         }),
//           yield* t;
//       })();
// }
// class CompoundContentRouting {
//   constructor(e, t) {
//     y(this, "routers");
//     y(this, "started");
//     y(this, "components");
//     (this.routers = t.routers ?? []),
//       (this.started = !1),
//       (this.components = e);
//   }
//   isStarted() {
//     return this.started;
//   }
//   async start() {
//     this.started = !0;
//   }
//   async stop() {
//     this.started = !1;
//   }
//   async *findProviders(e, t = {}) {
//     if (this.routers.length === 0)
//       throw new CodeError$2(
//         "No content routers available",
//         codes$1.ERR_NO_ROUTERS_AVAILABLE
//       );
//     const n = this,
//       i = new PeerSet();
//     for await (const o of merge(...n.routers.map((a) => a.findProviders(e, t))))
//       o != null &&
//         (o.multiaddrs.length > 0 &&
//           (await this.components.peerStore.merge(o.id, {
//             multiaddrs: o.multiaddrs,
//           })),
//         !i.has(o.id) && (i.add(o.id), yield o));
//   }
//   async provide(e, t = {}) {
//     if (this.routers.length === 0)
//       throw new CodeError$2(
//         "No content routers available",
//         codes$1.ERR_NO_ROUTERS_AVAILABLE
//       );
//     await Promise.all(
//       this.routers.map(async (n) => {
//         await n.provide(e, t);
//       })
//     );
//   }
//   async put(e, t, n) {
//     if (!this.isStarted())
//       throw new CodeError$2(
//         messages$1.NOT_STARTED_YET,
//         codes$1.ERR_NODE_NOT_STARTED
//       );
//     await Promise.all(
//       this.routers.map(async (i) => {
//         await i.put(e, t, n);
//       })
//     );
//   }
//   async get(e, t) {
//     if (!this.isStarted())
//       throw new CodeError$2(
//         messages$1.NOT_STARTED_YET,
//         codes$1.ERR_NODE_NOT_STARTED
//       );
//     return Promise.any(this.routers.map(async (n) => n.get(e, t)));
//   }
// }

// async function createLibp2pNode(r = {}) {
//   const e = r.peerId ?? (r.peerId = await createEd25519PeerId());
//   if (e.privateKey == null)
//     throw new CodeError$2(
//       "peer id was missing private key",
//       "ERR_MISSING_PRIVATE_KEY"
//     );
//   return (
//     r.privateKey ?? (r.privateKey = await unmarshalPrivateKey$2(e.privateKey)),
//     new Libp2pNode(await validateConfig(r))
//   );
// }
// async function createLibp2p(r = {}) {
//   const e = await createLibp2pNode(r);
//   return r.start !== !1 && (await e.start()), e;
// }
// function pipe(r, ...e) {
//   if (r == null) throw new Error("Empty pipeline");
//   if (isDuplex(r)) {
//     const n = r;
//     r = () => n.source;
//   } else if (isIterable(r) || isAsyncIterable$1(r)) {
//     const n = r;
//     r = () => n;
//   }
//   const t = [r, ...e];
//   if (
//     (t.length > 1 &&
//       isDuplex(t[t.length - 1]) &&
//       (t[t.length - 1] = t[t.length - 1].sink),
//     t.length > 2)
//   )
//     for (let n = 1; n < t.length - 1; n++)
//       isDuplex(t[n]) && (t[n] = duplexPipelineFn(t[n]));
//   return rawPipe(...t);
// }
// const rawPipe = (...r) => {
//     let e;
//     for (; r.length > 0; ) e = r.shift()(e);
//     return e;
//   },
//   isAsyncIterable$1 = (r) =>
//     (r == null ? void 0 : r[Symbol.asyncIterator]) != null,
//   isIterable = (r) => (r == null ? void 0 : r[Symbol.iterator]) != null,
//   isDuplex = (r) => (r == null ? !1 : r.sink != null && r.source != null),
//   duplexPipelineFn = (r) => (e) => {
//     const t = r.sink(e);
//     if ((t == null ? void 0 : t.then) != null) {
//       const n = pushable$1({
//         objectMode: !0,
//       });
//       t.then(
//         () => {
//           n.end();
//         },
//         (a) => {
//           n.end(a);
//         }
//       );
//       let i;
//       const o = r.source;
//       if (isAsyncIterable$1(o))
//         i = async function* () {
//           yield* o, n.end();
//         };
//       else if (isIterable(o))
//         i = function* () {
//           yield* o, n.end();
//         };
//       else
//         throw new Error(
//           "Unknown duplex source type - must be Iterable or AsyncIterable"
//         );
//       return merge(n, i());
//     }
//     return r.source;
//   },
//   second = 1e3,
//   minute = 60 * second,
//   FloodsubID = "/floodsub/1.0.0",
//   GossipsubIDv10 = "/meshsub/1.0.0",
//   GossipsubIDv11 = "/meshsub/1.1.0",
//   GossipsubD = 6,
//   GossipsubDlo = 4,
//   GossipsubDhi = 12,
//   GossipsubDscore = 4,
//   GossipsubDout = 2,
//   GossipsubHistoryLength = 5,
//   GossipsubHistoryGossip = 3,
//   GossipsubDlazy = 6,
//   GossipsubGossipFactor = 0.25,
//   GossipsubGossipRetransmission = 3,
//   GossipsubHeartbeatInitialDelay = 100,
//   GossipsubHeartbeatInterval = second,
//   GossipsubFanoutTTL = minute,
//   GossipsubPrunePeers = 16,
//   GossipsubPruneBackoff = minute,
//   GossipsubUnsubscribeBackoff = 10 * second,
//   GossipsubPruneBackoffTicks = 15,
//   GossipsubDirectConnectTicks = 300,
//   GossipsubDirectConnectInitialDelay = second,
//   GossipsubOpportunisticGraftTicks = 60,
//   GossipsubOpportunisticGraftPeers = 2,
//   GossipsubGraftFloodThreshold = 10 * second,
//   GossipsubMaxIHaveLength = 5e3,
//   GossipsubMaxIHaveMessages = 10,
//   GossipsubIWantFollowupTime = 3 * second,
//   GossipsubSeenTTL = 2 * minute,
//   TimeCacheDuration = 120 * 1e3,
//   ERR_TOPIC_VALIDATOR_REJECT = "ERR_TOPIC_VALIDATOR_REJECT",
//   ERR_TOPIC_VALIDATOR_IGNORE = "ERR_TOPIC_VALIDATOR_IGNORE",
//   ACCEPT_FROM_WHITELIST_THRESHOLD_SCORE = 0,
//   ACCEPT_FROM_WHITELIST_MAX_MESSAGES = 128,
//   ACCEPT_FROM_WHITELIST_DURATION_MS = 1e3,
//   DEFAULT_METRIC_MESH_MESSAGE_DELIVERIES_WINDOWS = 1e3,
//   BACKOFF_SLACK = 1;
// var indexMinimal = {},
//   minimal$1 = {},
//   aspromise = asPromise;
// function asPromise(r, e) {
//   for (
//     var t = new Array(arguments.length - 1), n = 0, i = 2, o = !0;
//     i < arguments.length;

//   )
//     t[n++] = arguments[i++];
//   return new Promise(function (c, u) {
//     t[n] = function (h) {
//       if (o)
//         if (((o = !1), h)) u(h);
//         else {
//           for (var f = new Array(arguments.length - 1), d = 0; d < f.length; )
//             f[d++] = arguments[d];
//           c.apply(null, f);
//         }
//     };
//     try {
//       r.apply(e || null, t);
//     } catch (l) {
//       o && ((o = !1), u(l));
//     }
//   });
// }
// var base64$1 = {};
// (function (r) {
//   var e = r;
//   e.length = function (c) {
//     var u = c.length;
//     if (!u) return 0;
//     for (var l = 0; --u % 4 > 1 && c.charAt(u) === "="; ) ++l;
//     return Math.ceil(c.length * 3) / 4 - l;
//   };
//   for (var t = new Array(64), n = new Array(123), i = 0; i < 64; )
//     n[
//       (t[i] =
//         i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : (i - 59) | 43)
//     ] = i++;
//   e.encode = function (c, u, l) {
//     for (var h = null, f = [], d = 0, p = 0, g; u < l; ) {
//       var m = c[u++];
//       switch (p) {
//         case 0:
//           (f[d++] = t[m >> 2]), (g = (m & 3) << 4), (p = 1);
//           break;
//         case 1:
//           (f[d++] = t[g | (m >> 4)]), (g = (m & 15) << 2), (p = 2);
//           break;
//         case 2:
//           (f[d++] = t[g | (m >> 6)]), (f[d++] = t[m & 63]), (p = 0);
//           break;
//       }
//       d > 8191 &&
//         ((h || (h = [])).push(String.fromCharCode.apply(String, f)), (d = 0));
//     }
//     return (
//       p && ((f[d++] = t[g]), (f[d++] = 61), p === 1 && (f[d++] = 61)),
//       h
//         ? (d && h.push(String.fromCharCode.apply(String, f.slice(0, d))),
//           h.join(""))
//         : String.fromCharCode.apply(String, f.slice(0, d))
//     );
//   };
//   var o = "invalid encoding";
//   (e.decode = function (c, u, l) {
//     for (var h = l, f = 0, d, p = 0; p < c.length; ) {
//       var g = c.charCodeAt(p++);
//       if (g === 61 && f > 1) break;
//       if ((g = n[g]) === void 0) throw Error(o);
//       switch (f) {
//         case 0:
//           (d = g), (f = 1);
//           break;
//         case 1:
//           (u[l++] = (d << 2) | ((g & 48) >> 4)), (d = g), (f = 2);
//           break;
//         case 2:
//           (u[l++] = ((d & 15) << 4) | ((g & 60) >> 2)), (d = g), (f = 3);
//           break;
//         case 3:
//           (u[l++] = ((d & 3) << 6) | g), (f = 0);
//           break;
//       }
//     }
//     if (f === 1) throw Error(o);
//     return l - h;
//   }),
//     (e.test = function (c) {
//       return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
//         c
//       );
//     });
// })(base64$1);
// var eventemitter = EventEmitter;
// function EventEmitter() {
//   this._listeners = {};
// }
// EventEmitter.prototype.on = function (e, t, n) {
//   return (
//     (this._listeners[e] || (this._listeners[e] = [])).push({
//       fn: t,
//       ctx: n || this,
//     }),
//     this
//   );
// };
// EventEmitter.prototype.off = function (e, t) {
//   if (e === void 0) this._listeners = {};
//   else if (t === void 0) this._listeners[e] = [];
//   else
//     for (var n = this._listeners[e], i = 0; i < n.length; )
//       n[i].fn === t ? n.splice(i, 1) : ++i;
//   return this;
// };
// EventEmitter.prototype.emit = function (e) {
//   var t = this._listeners[e];
//   if (t) {
//     for (var n = [], i = 1; i < arguments.length; ) n.push(arguments[i++]);
//     for (i = 0; i < t.length; ) t[i].fn.apply(t[i++].ctx, n);
//   }
//   return this;
// };
// var float = factory(factory);
// function factory(r) {
//   return (
//     typeof Float32Array < "u"
//       ? (function () {
//           var e = new Float32Array([-0]),
//             t = new Uint8Array(e.buffer),
//             n = t[3] === 128;
//           function i(u, l, h) {
//             (e[0] = u),
//               (l[h] = t[0]),
//               (l[h + 1] = t[1]),
//               (l[h + 2] = t[2]),
//               (l[h + 3] = t[3]);
//           }
//           function o(u, l, h) {
//             (e[0] = u),
//               (l[h] = t[3]),
//               (l[h + 1] = t[2]),
//               (l[h + 2] = t[1]),
//               (l[h + 3] = t[0]);
//           }
//           (r.writeFloatLE = n ? i : o), (r.writeFloatBE = n ? o : i);
//           function a(u, l) {
//             return (
//               (t[0] = u[l]),
//               (t[1] = u[l + 1]),
//               (t[2] = u[l + 2]),
//               (t[3] = u[l + 3]),
//               e[0]
//             );
//           }
//           function c(u, l) {
//             return (
//               (t[3] = u[l]),
//               (t[2] = u[l + 1]),
//               (t[1] = u[l + 2]),
//               (t[0] = u[l + 3]),
//               e[0]
//             );
//           }
//           (r.readFloatLE = n ? a : c), (r.readFloatBE = n ? c : a);
//         })()
//       : (function () {
//           function e(n, i, o, a) {
//             var c = i < 0 ? 1 : 0;
//             if ((c && (i = -i), i === 0)) n(1 / i > 0 ? 0 : 2147483648, o, a);
//             else if (isNaN(i)) n(2143289344, o, a);
//             else if (i > 34028234663852886e22)
//               n(((c << 31) | 2139095040) >>> 0, o, a);
//             else if (i < 11754943508222875e-54)
//               n(((c << 31) | Math.round(i / 1401298464324817e-60)) >>> 0, o, a);
//             else {
//               var u = Math.floor(Math.log(i) / Math.LN2),
//                 l = Math.round(i * Math.pow(2, -u) * 8388608) & 8388607;
//               n(((c << 31) | ((u + 127) << 23) | l) >>> 0, o, a);
//             }
//           }
//           (r.writeFloatLE = e.bind(null, writeUintLE)),
//             (r.writeFloatBE = e.bind(null, writeUintBE));
//           function t(n, i, o) {
//             var a = n(i, o),
//               c = (a >> 31) * 2 + 1,
//               u = (a >>> 23) & 255,
//               l = a & 8388607;
//             return u === 255
//               ? l
//                 ? NaN
//                 : c * (1 / 0)
//               : u === 0
//               ? c * 1401298464324817e-60 * l
//               : c * Math.pow(2, u - 150) * (l + 8388608);
//           }
//           (r.readFloatLE = t.bind(null, readUintLE)),
//             (r.readFloatBE = t.bind(null, readUintBE));
//         })(),
//     typeof Float64Array < "u"
//       ? (function () {
//           var e = new Float64Array([-0]),
//             t = new Uint8Array(e.buffer),
//             n = t[7] === 128;
//           function i(u, l, h) {
//             (e[0] = u),
//               (l[h] = t[0]),
//               (l[h + 1] = t[1]),
//               (l[h + 2] = t[2]),
//               (l[h + 3] = t[3]),
//               (l[h + 4] = t[4]),
//               (l[h + 5] = t[5]),
//               (l[h + 6] = t[6]),
//               (l[h + 7] = t[7]);
//           }
//           function o(u, l, h) {
//             (e[0] = u),
//               (l[h] = t[7]),
//               (l[h + 1] = t[6]),
//               (l[h + 2] = t[5]),
//               (l[h + 3] = t[4]),
//               (l[h + 4] = t[3]),
//               (l[h + 5] = t[2]),
//               (l[h + 6] = t[1]),
//               (l[h + 7] = t[0]);
//           }
//           (r.writeDoubleLE = n ? i : o), (r.writeDoubleBE = n ? o : i);
//           function a(u, l) {
//             return (
//               (t[0] = u[l]),
//               (t[1] = u[l + 1]),
//               (t[2] = u[l + 2]),
//               (t[3] = u[l + 3]),
//               (t[4] = u[l + 4]),
//               (t[5] = u[l + 5]),
//               (t[6] = u[l + 6]),
//               (t[7] = u[l + 7]),
//               e[0]
//             );
//           }
//           function c(u, l) {
//             return (
//               (t[7] = u[l]),
//               (t[6] = u[l + 1]),
//               (t[5] = u[l + 2]),
//               (t[4] = u[l + 3]),
//               (t[3] = u[l + 4]),
//               (t[2] = u[l + 5]),
//               (t[1] = u[l + 6]),
//               (t[0] = u[l + 7]),
//               e[0]
//             );
//           }
//           (r.readDoubleLE = n ? a : c), (r.readDoubleBE = n ? c : a);
//         })()
//       : (function () {
//           function e(n, i, o, a, c, u) {
//             var l = a < 0 ? 1 : 0;
//             if ((l && (a = -a), a === 0))
//               n(0, c, u + i), n(1 / a > 0 ? 0 : 2147483648, c, u + o);
//             else if (isNaN(a)) n(0, c, u + i), n(2146959360, c, u + o);
//             else if (a > 17976931348623157e292)
//               n(0, c, u + i), n(((l << 31) | 2146435072) >>> 0, c, u + o);
//             else {
//               var h;
//               if (a < 22250738585072014e-324)
//                 (h = a / 5e-324),
//                   n(h >>> 0, c, u + i),
//                   n(((l << 31) | (h / 4294967296)) >>> 0, c, u + o);
//               else {
//                 var f = Math.floor(Math.log(a) / Math.LN2);
//                 f === 1024 && (f = 1023),
//                   (h = a * Math.pow(2, -f)),
//                   n((h * 4503599627370496) >>> 0, c, u + i),
//                   n(
//                     ((l << 31) |
//                       ((f + 1023) << 20) |
//                       ((h * 1048576) & 1048575)) >>>
//                       0,
//                     c,
//                     u + o
//                   );
//               }
//             }
//           }
//           (r.writeDoubleLE = e.bind(null, writeUintLE, 0, 4)),
//             (r.writeDoubleBE = e.bind(null, writeUintBE, 4, 0));
//           function t(n, i, o, a, c) {
//             var u = n(a, c + i),
//               l = n(a, c + o),
//               h = (l >> 31) * 2 + 1,
//               f = (l >>> 20) & 2047,
//               d = 4294967296 * (l & 1048575) + u;
//             return f === 2047
//               ? d
//                 ? NaN
//                 : h * (1 / 0)
//               : f === 0
//               ? h * 5e-324 * d
//               : h * Math.pow(2, f - 1075) * (d + 4503599627370496);
//           }
//           (r.readDoubleLE = t.bind(null, readUintLE, 0, 4)),
//             (r.readDoubleBE = t.bind(null, readUintBE, 4, 0));
//         })(),
//     r
//   );
// }
// function writeUintLE(r, e, t) {
//   (e[t] = r & 255),
//     (e[t + 1] = (r >>> 8) & 255),
//     (e[t + 2] = (r >>> 16) & 255),
//     (e[t + 3] = r >>> 24);
// }
// function writeUintBE(r, e, t) {
//   (e[t] = r >>> 24),
//     (e[t + 1] = (r >>> 16) & 255),
//     (e[t + 2] = (r >>> 8) & 255),
//     (e[t + 3] = r & 255);
// }
// function readUintLE(r, e) {
//   return (r[e] | (r[e + 1] << 8) | (r[e + 2] << 16) | (r[e + 3] << 24)) >>> 0;
// }
// function readUintBE(r, e) {
//   return ((r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]) >>> 0;
// }
// var inquire_1 = inquire;
// function inquire(moduleName) {
//   try {
//     var mod = eval("quire".replace(/^/, "re"))(moduleName);
//     if (mod && (mod.length || Object.keys(mod).length)) return mod;
//   } catch (r) {}
//   return null;
// }
// var utf8$2 = {};
// (function (r) {
//   var e = r;
//   (e.length = function (n) {
//     for (var i = 0, o = 0, a = 0; a < n.length; ++a)
//       (o = n.charCodeAt(a)),
//         o < 128
//           ? (i += 1)
//           : o < 2048
//           ? (i += 2)
//           : (o & 64512) === 55296 && (n.charCodeAt(a + 1) & 64512) === 56320
//           ? (++a, (i += 4))
//           : (i += 3);
//     return i;
//   }),
//     (e.read = function (n, i, o) {
//       var a = o - i;
//       if (a < 1) return "";
//       for (var c = null, u = [], l = 0, h; i < o; )
//         (h = n[i++]),
//           h < 128
//             ? (u[l++] = h)
//             : h > 191 && h < 224
//             ? (u[l++] = ((h & 31) << 6) | (n[i++] & 63))
//             : h > 239 && h < 365
//             ? ((h =
//                 (((h & 7) << 18) |
//                   ((n[i++] & 63) << 12) |
//                   ((n[i++] & 63) << 6) |
//                   (n[i++] & 63)) -
//                 65536),
//               (u[l++] = 55296 + (h >> 10)),
//               (u[l++] = 56320 + (h & 1023)))
//             : (u[l++] =
//                 ((h & 15) << 12) | ((n[i++] & 63) << 6) | (n[i++] & 63)),
//           l > 8191 &&
//             ((c || (c = [])).push(String.fromCharCode.apply(String, u)),
//             (l = 0));
//       return c
//         ? (l && c.push(String.fromCharCode.apply(String, u.slice(0, l))),
//           c.join(""))
//         : String.fromCharCode.apply(String, u.slice(0, l));
//     }),
//     (e.write = function (n, i, o) {
//       for (var a = o, c, u, l = 0; l < n.length; ++l)
//         (c = n.charCodeAt(l)),
//           c < 128
//             ? (i[o++] = c)
//             : c < 2048
//             ? ((i[o++] = (c >> 6) | 192), (i[o++] = (c & 63) | 128))
//             : (c & 64512) === 55296 &&
//               ((u = n.charCodeAt(l + 1)) & 64512) === 56320
//             ? ((c = 65536 + ((c & 1023) << 10) + (u & 1023)),
//               ++l,
//               (i[o++] = (c >> 18) | 240),
//               (i[o++] = ((c >> 12) & 63) | 128),
//               (i[o++] = ((c >> 6) & 63) | 128),
//               (i[o++] = (c & 63) | 128))
//             : ((i[o++] = (c >> 12) | 224),
//               (i[o++] = ((c >> 6) & 63) | 128),
//               (i[o++] = (c & 63) | 128));
//       return o - a;
//     });
// })(utf8$2);
// var pool_1 = pool;
// function pool(r, e, t) {
//   var n = t || 8192,
//     i = n >>> 1,
//     o = null,
//     a = n;
//   return function (u) {
//     if (u < 1 || u > i) return r(u);
//     a + u > n && ((o = r(n)), (a = 0));
//     var l = e.call(o, a, (a += u));
//     return a & 7 && (a = (a | 7) + 1), l;
//   };
// }
// var longbits, hasRequiredLongbits;
// function requireLongbits() {
//   if (hasRequiredLongbits) return longbits;
//   (hasRequiredLongbits = 1), (longbits = e);
//   var r = requireMinimal();
//   function e(o, a) {
//     (this.lo = o >>> 0), (this.hi = a >>> 0);
//   }
//   var t = (e.zero = new e(0, 0));
//   (t.toNumber = function () {
//     return 0;
//   }),
//     (t.zzEncode = t.zzDecode =
//       function () {
//         return this;
//       }),
//     (t.length = function () {
//       return 1;
//     });
//   var n = (e.zeroHash = "\0\0\0\0\0\0\0\0");
//   (e.fromNumber = function (a) {
//     if (a === 0) return t;
//     var c = a < 0;
//     c && (a = -a);
//     var u = a >>> 0,
//       l = ((a - u) / 4294967296) >>> 0;
//     return (
//       c &&
//         ((l = ~l >>> 0),
//         (u = ~u >>> 0),
//         ++u > 4294967295 && ((u = 0), ++l > 4294967295 && (l = 0))),
//       new e(u, l)
//     );
//   }),
//     (e.from = function (a) {
//       if (typeof a == "number") return e.fromNumber(a);
//       if (r.isString(a))
//         if (r.Long) a = r.Long.fromString(a);
//         else return e.fromNumber(parseInt(a, 10));
//       return a.low || a.high ? new e(a.low >>> 0, a.high >>> 0) : t;
//     }),
//     (e.prototype.toNumber = function (a) {
//       if (!a && this.hi >>> 31) {
//         var c = (~this.lo + 1) >>> 0,
//           u = ~this.hi >>> 0;
//         return c || (u = (u + 1) >>> 0), -(c + u * 4294967296);
//       }
//       return this.lo + this.hi * 4294967296;
//     }),
//     (e.prototype.toLong = function (a) {
//       return r.Long
//         ? new r.Long(this.lo | 0, this.hi | 0, !!a)
//         : {
//             low: this.lo | 0,
//             high: this.hi | 0,
//             unsigned: !!a,
//           };
//     });
//   var i = String.prototype.charCodeAt;
//   return (
//     (e.fromHash = function (a) {
//       return a === n
//         ? t
//         : new e(
//             (i.call(a, 0) |
//               (i.call(a, 1) << 8) |
//               (i.call(a, 2) << 16) |
//               (i.call(a, 3) << 24)) >>>
//               0,
//             (i.call(a, 4) |
//               (i.call(a, 5) << 8) |
//               (i.call(a, 6) << 16) |
//               (i.call(a, 7) << 24)) >>>
//               0
//           );
//     }),
//     (e.prototype.toHash = function () {
//       return String.fromCharCode(
//         this.lo & 255,
//         (this.lo >>> 8) & 255,
//         (this.lo >>> 16) & 255,
//         this.lo >>> 24,
//         this.hi & 255,
//         (this.hi >>> 8) & 255,
//         (this.hi >>> 16) & 255,
//         this.hi >>> 24
//       );
//     }),
//     (e.prototype.zzEncode = function () {
//       var a = this.hi >> 31;
//       return (
//         (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ a) >>> 0),
//         (this.lo = ((this.lo << 1) ^ a) >>> 0),
//         this
//       );
//     }),
//     (e.prototype.zzDecode = function () {
//       var a = -(this.lo & 1);
//       return (
//         (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ a) >>> 0),
//         (this.hi = ((this.hi >>> 1) ^ a) >>> 0),
//         this
//       );
//     }),
//     (e.prototype.length = function () {
//       var a = this.lo,
//         c = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
//         u = this.hi >>> 24;
//       return u === 0
//         ? c === 0
//           ? a < 16384
//             ? a < 128
//               ? 1
//               : 2
//             : a < 2097152
//             ? 3
//             : 4
//           : c < 16384
//           ? c < 128
//             ? 5
//             : 6
//           : c < 2097152
//           ? 7
//           : 8
//         : u < 128
//         ? 9
//         : 10;
//     }),
//     longbits
//   );
// }
// var hasRequiredMinimal;
// function requireMinimal() {
//   return (
//     hasRequiredMinimal ||
//       ((hasRequiredMinimal = 1),
//       (function (r) {
//         var e = r;
//         (e.asPromise = aspromise),
//           (e.base64 = base64$1),
//           (e.EventEmitter = eventemitter),
//           (e.float = float),
//           (e.inquire = inquire_1),
//           (e.utf8 = utf8$2),
//           (e.pool = pool_1),
//           (e.LongBits = requireLongbits()),
//           (e.isNode = !!(
//             typeof commonjsGlobal < "u" &&
//             commonjsGlobal &&
//             commonjsGlobal.process &&
//             commonjsGlobal.process.versions &&
//             commonjsGlobal.process.versions.node
//           )),
//           (e.global =
//             (e.isNode && commonjsGlobal) ||
//             (typeof window < "u" && window) ||
//             (typeof self < "u" && self) ||
//             commonjsGlobal),
//           (e.emptyArray = Object.freeze ? Object.freeze([]) : []),
//           (e.emptyObject = Object.freeze ? Object.freeze({}) : {}),
//           (e.isInteger =
//             Number.isInteger ||
//             function (o) {
//               return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
//             }),
//           (e.isString = function (o) {
//             return typeof o == "string" || o instanceof String;
//           }),
//           (e.isObject = function (o) {
//             return o && typeof o == "object";
//           }),
//           (e.isset = e.isSet =
//             function (o, a) {
//               var c = o[a];
//               return c != null && o.hasOwnProperty(a)
//                 ? typeof c != "object" ||
//                     (Array.isArray(c) ? c.length : Object.keys(c).length) > 0
//                 : !1;
//             }),
//           (e.Buffer = (function () {
//             try {
//               var i = e.inquire("buffer").Buffer;
//               return i.prototype.utf8Write ? i : null;
//             } catch {
//               return null;
//             }
//           })()),
//           (e._Buffer_from = null),
//           (e._Buffer_allocUnsafe = null),
//           (e.newBuffer = function (o) {
//             return typeof o == "number"
//               ? e.Buffer
//                 ? e._Buffer_allocUnsafe(o)
//                 : new e.Array(o)
//               : e.Buffer
//               ? e._Buffer_from(o)
//               : typeof Uint8Array > "u"
//               ? o
//               : new Uint8Array(o);
//           }),
//           (e.Array = typeof Uint8Array < "u" ? Uint8Array : Array),
//           (e.Long =
//             (e.global.dcodeIO && e.global.dcodeIO.Long) ||
//             e.global.Long ||
//             e.inquire("long")),
//           (e.key2Re = /^true|false|0|1$/),
//           (e.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
//           (e.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
//           (e.longToHash = function (o) {
//             return o ? e.LongBits.from(o).toHash() : e.LongBits.zeroHash;
//           }),
//           (e.longFromHash = function (o, a) {
//             var c = e.LongBits.fromHash(o);
//             return e.Long ? e.Long.fromBits(c.lo, c.hi, a) : c.toNumber(!!a);
//           });
//         function t(i, o, a) {
//           for (var c = Object.keys(o), u = 0; u < c.length; ++u)
//             (i[c[u]] === void 0 || !a) && (i[c[u]] = o[c[u]]);
//           return i;
//         }
//         (e.merge = t),
//           (e.lcFirst = function (o) {
//             return o.charAt(0).toLowerCase() + o.substring(1);
//           });
//         function n(i) {
//           function o(a, c) {
//             if (!(this instanceof o)) return new o(a, c);
//             Object.defineProperty(this, "message", {
//               get: function () {
//                 return a;
//               },
//             }),
//               Error.captureStackTrace
//                 ? Error.captureStackTrace(this, o)
//                 : Object.defineProperty(this, "stack", {
//                     value: new Error().stack || "",
//                   }),
//               c && t(this, c);
//           }
//           return (
//             (o.prototype = Object.create(Error.prototype, {
//               constructor: {
//                 value: o,
//                 writable: !0,
//                 enumerable: !1,
//                 configurable: !0,
//               },
//               name: {
//                 get: function () {
//                   return i;
//                 },
//                 set: void 0,
//                 enumerable: !1,
//                 configurable: !0,
//               },
//               toString: {
//                 value: function () {
//                   return this.name + ": " + this.message;
//                 },
//                 writable: !0,
//                 enumerable: !1,
//                 configurable: !0,
//               },
//             })),
//             o
//           );
//         }
//         (e.newError = n),
//           (e.ProtocolError = n("ProtocolError")),
//           (e.oneOfGetter = function (o) {
//             for (var a = {}, c = 0; c < o.length; ++c) a[o[c]] = 1;
//             return function () {
//               for (var u = Object.keys(this), l = u.length - 1; l > -1; --l)
//                 if (
//                   a[u[l]] === 1 &&
//                   this[u[l]] !== void 0 &&
//                   this[u[l]] !== null
//                 )
//                   return u[l];
//             };
//           }),
//           (e.oneOfSetter = function (o) {
//             return function (a) {
//               for (var c = 0; c < o.length; ++c)
//                 o[c] !== a && delete this[o[c]];
//             };
//           }),
//           (e.toJSONOptions = {
//             longs: String,
//             enums: String,
//             bytes: String,
//             json: !0,
//           }),
//           (e._configure = function () {
//             var i = e.Buffer;
//             if (!i) {
//               e._Buffer_from = e._Buffer_allocUnsafe = null;
//               return;
//             }
//             (e._Buffer_from =
//               (i.from !== Uint8Array.from && i.from) ||
//               function (a, c) {
//                 return new i(a, c);
//               }),
//               (e._Buffer_allocUnsafe =
//                 i.allocUnsafe ||
//                 function (a) {
//                   return new i(a);
//                 });
//           });
//       })(minimal$1)),
//     minimal$1
//   );
// }
// var writer = Writer$1,
//   util$6 = requireMinimal(),
//   BufferWriter$1,
//   LongBits$1 = util$6.LongBits,
//   base64 = util$6.base64,
//   utf8$1 = util$6.utf8;
// function Op(r, e, t) {
//   (this.fn = r), (this.len = e), (this.next = void 0), (this.val = t);
// }
// function noop$1() {}
// function State(r) {
//   (this.head = r.head),
//     (this.tail = r.tail),
//     (this.len = r.len),
//     (this.next = r.states);
// }
// function Writer$1() {
//   (this.len = 0),
//     (this.head = new Op(noop$1, 0, 0)),
//     (this.tail = this.head),
//     (this.states = null);
// }
// var create$2 = function r() {
//   return util$6.Buffer
//     ? function () {
//         return (Writer$1.create = function () {
//           return new BufferWriter$1();
//         })();
//       }
//     : function () {
//         return new Writer$1();
//       };
// };
// Writer$1.create = create$2();
// Writer$1.alloc = function r(e) {
//   return new util$6.Array(e);
// };
// util$6.Array !== Array &&
//   (Writer$1.alloc = util$6.pool(
//     Writer$1.alloc,
//     util$6.Array.prototype.subarray
//   ));
// Writer$1.prototype._push = function r(e, t, n) {
//   return (this.tail = this.tail.next = new Op(e, t, n)), (this.len += t), this;
// };
// function writeByte(r, e, t) {
//   e[t] = r & 255;
// }
// function writeVarint32(r, e, t) {
//   for (; r > 127; ) (e[t++] = (r & 127) | 128), (r >>>= 7);
//   e[t] = r;
// }
// function VarintOp(r, e) {
//   (this.len = r), (this.next = void 0), (this.val = e);
// }
// VarintOp.prototype = Object.create(Op.prototype);
// VarintOp.prototype.fn = writeVarint32;
// Writer$1.prototype.uint32 = function r(e) {
//   return (
//     (this.len += (this.tail = this.tail.next =
//       new VarintOp(
//         (e = e >>> 0) < 128
//           ? 1
//           : e < 16384
//           ? 2
//           : e < 2097152
//           ? 3
//           : e < 268435456
//           ? 4
//           : 5,
//         e
//       )).len),
//     this
//   );
// };
// Writer$1.prototype.int32 = function r(e) {
//   return e < 0
//     ? this._push(writeVarint64, 10, LongBits$1.fromNumber(e))
//     : this.uint32(e);
// };
// Writer$1.prototype.sint32 = function r(e) {
//   return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
// };
// function writeVarint64(r, e, t) {
//   for (; r.hi; )
//     (e[t++] = (r.lo & 127) | 128),
//       (r.lo = ((r.lo >>> 7) | (r.hi << 25)) >>> 0),
//       (r.hi >>>= 7);
//   for (; r.lo > 127; ) (e[t++] = (r.lo & 127) | 128), (r.lo = r.lo >>> 7);
//   e[t++] = r.lo;
// }
// Writer$1.prototype.uint64 = function r(e) {
//   var t = LongBits$1.from(e);
//   return this._push(writeVarint64, t.length(), t);
// };
// Writer$1.prototype.int64 = Writer$1.prototype.uint64;
// Writer$1.prototype.sint64 = function r(e) {
//   var t = LongBits$1.from(e).zzEncode();
//   return this._push(writeVarint64, t.length(), t);
// };
// Writer$1.prototype.bool = function r(e) {
//   return this._push(writeByte, 1, e ? 1 : 0);
// };
// function writeFixed32(r, e, t) {
//   (e[t] = r & 255),
//     (e[t + 1] = (r >>> 8) & 255),
//     (e[t + 2] = (r >>> 16) & 255),
//     (e[t + 3] = r >>> 24);
// }
// Writer$1.prototype.fixed32 = function r(e) {
//   return this._push(writeFixed32, 4, e >>> 0);
// };
// Writer$1.prototype.sfixed32 = Writer$1.prototype.fixed32;
// Writer$1.prototype.fixed64 = function r(e) {
//   var t = LongBits$1.from(e);
//   return this._push(writeFixed32, 4, t.lo)._push(writeFixed32, 4, t.hi);
// };
// Writer$1.prototype.sfixed64 = Writer$1.prototype.fixed64;
// Writer$1.prototype.float = function r(e) {
//   return this._push(util$6.float.writeFloatLE, 4, e);
// };
// Writer$1.prototype.double = function r(e) {
//   return this._push(util$6.float.writeDoubleLE, 8, e);
// };
// var writeBytes = util$6.Array.prototype.set
//   ? function r(e, t, n) {
//       t.set(e, n);
//     }
//   : function r(e, t, n) {
//       for (var i = 0; i < e.length; ++i) t[n + i] = e[i];
//     };
// Writer$1.prototype.bytes = function r(e) {
//   var t = e.length >>> 0;
//   if (!t) return this._push(writeByte, 1, 0);
//   if (util$6.isString(e)) {
//     var n = Writer$1.alloc((t = base64.length(e)));
//     base64.decode(e, n, 0), (e = n);
//   }
//   return this.uint32(t)._push(writeBytes, t, e);
// };
// Writer$1.prototype.string = function r(e) {
//   var t = utf8$1.length(e);
//   return t
//     ? this.uint32(t)._push(utf8$1.write, t, e)
//     : this._push(writeByte, 1, 0);
// };
// Writer$1.prototype.fork = function r() {
//   return (
//     (this.states = new State(this)),
//     (this.head = this.tail = new Op(noop$1, 0, 0)),
//     (this.len = 0),
//     this
//   );
// };
// Writer$1.prototype.reset = function r() {
//   return (
//     this.states
//       ? ((this.head = this.states.head),
//         (this.tail = this.states.tail),
//         (this.len = this.states.len),
//         (this.states = this.states.next))
//       : ((this.head = this.tail = new Op(noop$1, 0, 0)), (this.len = 0)),
//     this
//   );
// };
// Writer$1.prototype.ldelim = function r() {
//   var e = this.head,
//     t = this.tail,
//     n = this.len;
//   return (
//     this.reset().uint32(n),
//     n && ((this.tail.next = e.next), (this.tail = t), (this.len += n)),
//     this
//   );
// };
// Writer$1.prototype.finish = function r() {
//   for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e; )
//     e.fn(e.val, t, n), (n += e.len), (e = e.next);
//   return t;
// };
// Writer$1._configure = function (r) {
//   (BufferWriter$1 = r),
//     (Writer$1.create = create$2()),
//     BufferWriter$1._configure();
// };
// var writer_buffer = BufferWriter,
//   Writer = writer;
// (BufferWriter.prototype = Object.create(Writer.prototype)).constructor =
//   BufferWriter;
// var util$5 = requireMinimal();
// function BufferWriter() {
//   Writer.call(this);
// }
// BufferWriter._configure = function () {
//   (BufferWriter.alloc = util$5._Buffer_allocUnsafe),
//     (BufferWriter.writeBytesBuffer =
//       util$5.Buffer &&
//       util$5.Buffer.prototype instanceof Uint8Array &&
//       util$5.Buffer.prototype.set.name === "set"
//         ? function (e, t, n) {
//             t.set(e, n);
//           }
//         : function (e, t, n) {
//             if (e.copy) e.copy(t, n, 0, e.length);
//             else for (var i = 0; i < e.length; ) t[n++] = e[i++];
//           });
// };
// BufferWriter.prototype.bytes = function r(e) {
//   util$5.isString(e) && (e = util$5._Buffer_from(e, "base64"));
//   var t = e.length >>> 0;
//   return (
//     this.uint32(t), t && this._push(BufferWriter.writeBytesBuffer, t, e), this
//   );
// };
// function writeStringBuffer(r, e, t) {
//   r.length < 40
//     ? util$5.utf8.write(r, e, t)
//     : e.utf8Write
//     ? e.utf8Write(r, t)
//     : e.write(r, t);
// }
// BufferWriter.prototype.string = function r(e) {
//   var t = util$5.Buffer.byteLength(e);
//   return this.uint32(t), t && this._push(writeStringBuffer, t, e), this;
// };
// BufferWriter._configure();
// var reader = Reader$1,
//   util$4 = requireMinimal(),
//   BufferReader$1,
//   LongBits = util$4.LongBits,
//   utf8 = util$4.utf8;
// function indexOutOfRange(r, e) {
//   return RangeError(
//     "index out of range: " + r.pos + " + " + (e || 1) + " > " + r.len
//   );
// }
// function Reader$1(r) {
//   (this.buf = r), (this.pos = 0), (this.len = r.length);
// }
// var create_array =
//     typeof Uint8Array < "u"
//       ? function r(e) {
//           if (e instanceof Uint8Array || Array.isArray(e))
//             return new Reader$1(e);
//           throw Error("illegal buffer");
//         }
//       : function r(e) {
//           if (Array.isArray(e)) return new Reader$1(e);
//           throw Error("illegal buffer");
//         },
//   create$1 = function r() {
//     return util$4.Buffer
//       ? function (t) {
//           return (Reader$1.create = function (i) {
//             return util$4.Buffer.isBuffer(i)
//               ? new BufferReader$1(i)
//               : create_array(i);
//           })(t);
//         }
//       : create_array;
//   };
// Reader$1.create = create$1();
// Reader$1.prototype._slice =
//   util$4.Array.prototype.subarray || util$4.Array.prototype.slice;
// Reader$1.prototype.uint32 = (function r() {
//   var e = 4294967295;
//   return function () {
//     if (
//       ((e = (this.buf[this.pos] & 127) >>> 0),
//       this.buf[this.pos++] < 128 ||
//         ((e = (e | ((this.buf[this.pos] & 127) << 7)) >>> 0),
//         this.buf[this.pos++] < 128) ||
//         ((e = (e | ((this.buf[this.pos] & 127) << 14)) >>> 0),
//         this.buf[this.pos++] < 128) ||
//         ((e = (e | ((this.buf[this.pos] & 127) << 21)) >>> 0),
//         this.buf[this.pos++] < 128) ||
//         ((e = (e | ((this.buf[this.pos] & 15) << 28)) >>> 0),
//         this.buf[this.pos++] < 128))
//     )
//       return e;
//     if ((this.pos += 5) > this.len)
//       throw ((this.pos = this.len), indexOutOfRange(this, 10));
//     return e;
//   };
// })();
// Reader$1.prototype.int32 = function r() {
//   return this.uint32() | 0;
// };
// Reader$1.prototype.sint32 = function r() {
//   var e = this.uint32();
//   return ((e >>> 1) ^ -(e & 1)) | 0;
// };
// function readLongVarint() {
//   var r = new LongBits(0, 0),
//     e = 0;
//   if (this.len - this.pos > 4) {
//     for (; e < 4; ++e)
//       if (
//         ((r.lo = (r.lo | ((this.buf[this.pos] & 127) << (e * 7))) >>> 0),
//         this.buf[this.pos++] < 128)
//       )
//         return r;
//     if (
//       ((r.lo = (r.lo | ((this.buf[this.pos] & 127) << 28)) >>> 0),
//       (r.hi = (r.hi | ((this.buf[this.pos] & 127) >> 4)) >>> 0),
//       this.buf[this.pos++] < 128)
//     )
//       return r;
//     e = 0;
//   } else {
//     for (; e < 3; ++e) {
//       if (this.pos >= this.len) throw indexOutOfRange(this);
//       if (
//         ((r.lo = (r.lo | ((this.buf[this.pos] & 127) << (e * 7))) >>> 0),
//         this.buf[this.pos++] < 128)
//       )
//         return r;
//     }
//     return (r.lo = (r.lo | ((this.buf[this.pos++] & 127) << (e * 7))) >>> 0), r;
//   }
//   if (this.len - this.pos > 4) {
//     for (; e < 5; ++e)
//       if (
//         ((r.hi = (r.hi | ((this.buf[this.pos] & 127) << (e * 7 + 3))) >>> 0),
//         this.buf[this.pos++] < 128)
//       )
//         return r;
//   } else
//     for (; e < 5; ++e) {
//       if (this.pos >= this.len) throw indexOutOfRange(this);
//       if (
//         ((r.hi = (r.hi | ((this.buf[this.pos] & 127) << (e * 7 + 3))) >>> 0),
//         this.buf[this.pos++] < 128)
//       )
//         return r;
//     }
//   throw Error("invalid varint encoding");
// }
// Reader$1.prototype.bool = function r() {
//   return this.uint32() !== 0;
// };
// function readFixed32_end(r, e) {
//   return (
//     (r[e - 4] | (r[e - 3] << 8) | (r[e - 2] << 16) | (r[e - 1] << 24)) >>> 0
//   );
// }
// Reader$1.prototype.fixed32 = function r() {
//   if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
//   return readFixed32_end(this.buf, (this.pos += 4));
// };
// Reader$1.prototype.sfixed32 = function r() {
//   if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
//   return readFixed32_end(this.buf, (this.pos += 4)) | 0;
// };
// function readFixed64() {
//   if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
//   return new LongBits(
//     readFixed32_end(this.buf, (this.pos += 4)),
//     readFixed32_end(this.buf, (this.pos += 4))
//   );
// }
// Reader$1.prototype.float = function r() {
//   if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
//   var e = util$4.float.readFloatLE(this.buf, this.pos);
//   return (this.pos += 4), e;
// };
// Reader$1.prototype.double = function r() {
//   if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
//   var e = util$4.float.readDoubleLE(this.buf, this.pos);
//   return (this.pos += 8), e;
// };
// Reader$1.prototype.bytes = function r() {
//   var e = this.uint32(),
//     t = this.pos,
//     n = this.pos + e;
//   if (n > this.len) throw indexOutOfRange(this, e);
//   if (((this.pos += e), Array.isArray(this.buf))) return this.buf.slice(t, n);
//   if (t === n) {
//     var i = util$4.Buffer;
//     return i ? i.alloc(0) : new this.buf.constructor(0);
//   }
//   return this._slice.call(this.buf, t, n);
// };
// Reader$1.prototype.string = function r() {
//   var e = this.bytes();
//   return utf8.read(e, 0, e.length);
// };
// Reader$1.prototype.skip = function r(e) {
//   if (typeof e == "number") {
//     if (this.pos + e > this.len) throw indexOutOfRange(this, e);
//     this.pos += e;
//   } else
//     do if (this.pos >= this.len) throw indexOutOfRange(this);
//     while (this.buf[this.pos++] & 128);
//   return this;
// };
// Reader$1.prototype.skipType = function (r) {
//   switch (r) {
//     case 0:
//       this.skip();
//       break;
//     case 1:
//       this.skip(8);
//       break;
//     case 2:
//       this.skip(this.uint32());
//       break;
//     case 3:
//       for (; (r = this.uint32() & 7) !== 4; ) this.skipType(r);
//       break;
//     case 5:
//       this.skip(4);
//       break;
//     default:
//       throw Error("invalid wire type " + r + " at offset " + this.pos);
//   }
//   return this;
// };
// Reader$1._configure = function (r) {
//   (BufferReader$1 = r),
//     (Reader$1.create = create$1()),
//     BufferReader$1._configure();
//   var e = util$4.Long ? "toLong" : "toNumber";
//   util$4.merge(Reader$1.prototype, {
//     int64: function () {
//       return readLongVarint.call(this)[e](!1);
//     },
//     uint64: function () {
//       return readLongVarint.call(this)[e](!0);
//     },
//     sint64: function () {
//       return readLongVarint.call(this).zzDecode()[e](!1);
//     },
//     fixed64: function () {
//       return readFixed64.call(this)[e](!0);
//     },
//     sfixed64: function () {
//       return readFixed64.call(this)[e](!1);
//     },
//   });
// };
// var reader_buffer = BufferReader,
//   Reader = reader;
// (BufferReader.prototype = Object.create(Reader.prototype)).constructor =
//   BufferReader;
// var util$3 = requireMinimal();
// function BufferReader(r) {
//   Reader.call(this, r);
// }
// BufferReader._configure = function () {
//   util$3.Buffer &&
//     (BufferReader.prototype._slice = util$3.Buffer.prototype.slice);
// };
// BufferReader.prototype.string = function r() {
//   var e = this.uint32();
//   return this.buf.utf8Slice
//     ? this.buf.utf8Slice(
//         this.pos,
//         (this.pos = Math.min(this.pos + e, this.len))
//       )
//     : this.buf.toString(
//         "utf-8",
//         this.pos,
//         (this.pos = Math.min(this.pos + e, this.len))
//       );
// };
// BufferReader._configure();
// var rpc$1 = {},
//   service = Service,
//   util$2 = requireMinimal();
// (Service.prototype = Object.create(util$2.EventEmitter.prototype)).constructor =
//   Service;
// function Service(r, e, t) {
//   if (typeof r != "function") throw TypeError("rpcImpl must be a function");
//   util$2.EventEmitter.call(this),
//     (this.rpcImpl = r),
//     (this.requestDelimited = !!e),
//     (this.responseDelimited = !!t);
// }
// Service.prototype.rpcCall = function r(e, t, n, i, o) {
//   if (!i) throw TypeError("request must be specified");
//   var a = this;
//   if (!o) return util$2.asPromise(r, a, e, t, n, i);
//   if (!a.rpcImpl) {
//     setTimeout(function () {
//       o(Error("already ended"));
//     }, 0);
//     return;
//   }
//   try {
//     return a.rpcImpl(
//       e,
//       t[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(),
//       function (u, l) {
//         if (u) return a.emit("error", u, e), o(u);
//         if (l === null) {
//           a.end(!0);
//           return;
//         }
//         if (!(l instanceof n))
//           try {
//             l = n[a.responseDelimited ? "decodeDelimited" : "decode"](l);
//           } catch (h) {
//             return a.emit("error", h, e), o(h);
//           }
//         return a.emit("data", l, e), o(null, l);
//       }
//     );
//   } catch (c) {
//     a.emit("error", c, e),
//       setTimeout(function () {
//         o(c);
//       }, 0);
//     return;
//   }
// };
// Service.prototype.end = function r(e) {
//   return (
//     this.rpcImpl &&
//       (e || this.rpcImpl(null, null, null),
//       (this.rpcImpl = null),
//       this.emit("end").off()),
//     this
//   );
// };
// (function (r) {
//   var e = r;
//   e.Service = service;
// })(rpc$1);
// var roots = {};
// (function (r) {
//   var e = r;
//   (e.build = "minimal"),
//     (e.Writer = writer),
//     (e.BufferWriter = writer_buffer),
//     (e.Reader = reader),
//     (e.BufferReader = reader_buffer),
//     (e.util = requireMinimal()),
//     (e.rpc = rpc$1),
//     (e.roots = roots),
//     (e.configure = t);
//   function t() {
//     e.util._configure(),
//       e.Writer._configure(e.BufferWriter),
//       e.Reader._configure(e.BufferReader);
//   }
//   t();
// })(indexMinimal);
// var minimal = indexMinimal;
// const protobuf = getDefaultExportFromCjs(minimal),
//   defaultDecodeRpcLimits = {
//     maxSubscriptions: 1 / 0,
//     maxMessages: 1 / 0,
//     maxIhaveMessageIDs: 1 / 0,
//     maxIwantMessageIDs: 1 / 0,
//     maxControlMessages: 1 / 0,
//     maxPeerInfos: 1 / 0,
//   };
// function decodeRpc(r, e) {
//   e = {
//     ...e,
//   };
//   const t = protobuf.Reader.create(r),
//     n = r.length,
//     i = n === void 0 ? t.len : t.pos + n,
//     o = {};
//   for (; t.pos < i; ) {
//     const a = t.uint32();
//     switch (a >>> 3) {
//       case 1:
//         (o.subscriptions != null && o.subscriptions.length > 0) ||
//           (o.subscriptions = []),
//           o.subscriptions.length < e.maxSubscriptions
//             ? o.subscriptions.push(decodeSubOpts(t, t.uint32()))
//             : t.skipType(a & 7);
//         break;
//       case 2:
//         (o.messages != null && o.messages.length > 0) || (o.messages = []),
//           o.messages.length < e.maxMessages
//             ? o.messages.push(decodeMessage(t, t.uint32()))
//             : t.skipType(a & 7);
//         break;
//       case 3:
//         o.control = decodeControlMessage(t, t.uint32(), e);
//         break;
//       default:
//         t.skipType(a & 7);
//         break;
//     }
//   }
//   return o;
// }
// function decodeSubOpts(r, e) {
//   const t = e === void 0 ? r.len : r.pos + e,
//     n = {};
//   for (; r.pos < t; ) {
//     const i = r.uint32();
//     switch (i >>> 3) {
//       case 1:
//         n.subscribe = r.bool();
//         break;
//       case 2:
//         n.topic = r.string();
//         break;
//       default:
//         r.skipType(i & 7);
//         break;
//     }
//   }
//   return n;
// }
// function decodeMessage(r, e) {
//   const t = e === void 0 ? r.len : r.pos + e,
//     n = {};
//   for (; r.pos < t; ) {
//     const i = r.uint32();
//     switch (i >>> 3) {
//       case 1:
//         n.from = r.bytes();
//         break;
//       case 2:
//         n.data = r.bytes();
//         break;
//       case 3:
//         n.seqno = r.bytes();
//         break;
//       case 4:
//         n.topic = r.string();
//         break;
//       case 5:
//         n.signature = r.bytes();
//         break;
//       case 6:
//         n.key = r.bytes();
//         break;
//       default:
//         r.skipType(i & 7);
//         break;
//     }
//   }
//   if (!n.topic) throw Error("missing required 'topic'");
//   return n;
// }
// function decodeControlMessage(r, e, t) {
//   const n = e === void 0 ? r.len : r.pos + e,
//     i = {};
//   for (; r.pos < n; ) {
//     const o = r.uint32();
//     switch (o >>> 3) {
//       case 1:
//         (i.ihave != null && i.ihave.length > 0) || (i.ihave = []),
//           i.ihave.length < t.maxControlMessages
//             ? i.ihave.push(decodeControlIHave(r, r.uint32(), t))
//             : r.skipType(o & 7);
//         break;
//       case 2:
//         (i.iwant != null && i.iwant.length > 0) || (i.iwant = []),
//           i.iwant.length < t.maxControlMessages
//             ? i.iwant.push(decodeControlIWant(r, r.uint32(), t))
//             : r.skipType(o & 7);
//         break;
//       case 3:
//         (i.graft != null && i.graft.length > 0) || (i.graft = []),
//           i.graft.length < t.maxControlMessages
//             ? i.graft.push(decodeControlGraft(r, r.uint32()))
//             : r.skipType(o & 7);
//         break;
//       case 4:
//         (i.prune != null && i.prune.length > 0) || (i.prune = []),
//           i.prune.length < t.maxControlMessages
//             ? i.prune.push(decodeControlPrune(r, r.uint32(), t))
//             : r.skipType(o & 7);
//         break;
//       default:
//         r.skipType(o & 7);
//         break;
//     }
//   }
//   return i;
// }
// function decodeControlIHave(r, e, t) {
//   const n = e === void 0 ? r.len : r.pos + e,
//     i = {};
//   for (; r.pos < n; ) {
//     const o = r.uint32();
//     switch (o >>> 3) {
//       case 1:
//         i.topicID = r.string();
//         break;
//       case 2:
//         (i.messageIDs != null && i.messageIDs.length > 0) ||
//           (i.messageIDs = []),
//           t.maxIhaveMessageIDs-- > 0
//             ? i.messageIDs.push(r.bytes())
//             : r.skipType(o & 7);
//         break;
//       default:
//         r.skipType(o & 7);
//         break;
//     }
//   }
//   return i;
// }
// function decodeControlIWant(r, e, t) {
//   const n = e === void 0 ? r.len : r.pos + e,
//     i = {};
//   for (; r.pos < n; ) {
//     const o = r.uint32();
//     switch (o >>> 3) {
//       case 1:
//         (i.messageIDs != null && i.messageIDs.length > 0) ||
//           (i.messageIDs = []),
//           t.maxIwantMessageIDs-- > 0
//             ? i.messageIDs.push(r.bytes())
//             : r.skipType(o & 7);
//         break;
//       default:
//         r.skipType(o & 7);
//         break;
//     }
//   }
//   return i;
// }
// function decodeControlGraft(r, e) {
//   const t = e === void 0 ? r.len : r.pos + e,
//     n = {};
//   for (; r.pos < t; ) {
//     const i = r.uint32();
//     switch (i >>> 3) {
//       case 1:
//         n.topicID = r.string();
//         break;
//       default:
//         r.skipType(i & 7);
//         break;
//     }
//   }
//   return n;
// }
// function decodeControlPrune(r, e, t) {
//   const n = e === void 0 ? r.len : r.pos + e,
//     i = {};
//   for (; r.pos < n; ) {
//     const o = r.uint32();
//     switch (o >>> 3) {
//       case 1:
//         i.topicID = r.string();
//         break;
//       case 2:
//         (i.peers != null && i.peers.length > 0) || (i.peers = []),
//           t.maxPeerInfos-- > 0
//             ? i.peers.push(decodePeerInfo(r, r.uint32()))
//             : r.skipType(o & 7);
//         break;
//       case 3:
//         i.backoff = r.uint64();
//         break;
//       default:
//         r.skipType(o & 7);
//         break;
//     }
//   }
//   return i;
// }
// function decodePeerInfo(r, e) {
//   const t = e === void 0 ? r.len : r.pos + e,
//     n = {};
//   for (; r.pos < t; ) {
//     const i = r.uint32();
//     switch (i >>> 3) {
//       case 1:
//         n.peerID = r.bytes();
//         break;
//       case 2:
//         n.signedPeerRecord = r.bytes();
//         break;
//       default:
//         r.skipType(i & 7);
//         break;
//     }
//   }
//   return n;
// }
// function commonjsRequire(r) {
//   throw new Error(
//     'Could not dynamically require "' +
//       r +
//       '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
//   );
// }
// var rpc = {
//   exports: {},
// };
// (function (r) {
//   (function (e, t) {
//     typeof commonjsRequire == "function" &&
//       r &&
//       r.exports &&
//       (r.exports = t(minimal));
//   })(commonjsGlobal, function (e) {
//     var t = e.Reader,
//       n = e.Writer,
//       i = e.util,
//       o = e.roots.default || (e.roots.default = {});
//     return (
//       (o.RPC = (function () {
//         function a(u) {
//           if (((this.subscriptions = []), (this.messages = []), u))
//             for (var l = Object.keys(u), h = 0; h < l.length; ++h)
//               u[l[h]] != null && (this[l[h]] = u[l[h]]);
//         }
//         (a.prototype.subscriptions = i.emptyArray),
//           (a.prototype.messages = i.emptyArray),
//           (a.prototype.control = null);
//         var c;
//         return (
//           Object.defineProperty(a.prototype, "_control", {
//             get: i.oneOfGetter((c = ["control"])),
//             set: i.oneOfSetter(c),
//           }),
//           (a.encode = function (l, h) {
//             if (
//               (h || (h = n.create()),
//               l.subscriptions != null && l.subscriptions.length)
//             )
//               for (var f = 0; f < l.subscriptions.length; ++f)
//                 o.RPC.SubOpts.encode(
//                   l.subscriptions[f],
//                   h.uint32(10).fork()
//                 ).ldelim();
//             if (l.messages != null && l.messages.length)
//               for (var f = 0; f < l.messages.length; ++f)
//                 o.RPC.Message.encode(
//                   l.messages[f],
//                   h.uint32(18).fork()
//                 ).ldelim();
//             return (
//               l.control != null &&
//                 Object.hasOwnProperty.call(l, "control") &&
//                 o.RPC.ControlMessage.encode(
//                   l.control,
//                   h.uint32(26).fork()
//                 ).ldelim(),
//               h
//             );
//           }),
//           (a.decode = function (l, h) {
//             l instanceof t || (l = t.create(l));
//             for (
//               var f = h === void 0 ? l.len : l.pos + h, d = new o.RPC();
//               l.pos < f;

//             ) {
//               var p = l.uint32();
//               switch (p >>> 3) {
//                 case 1:
//                   (d.subscriptions && d.subscriptions.length) ||
//                     (d.subscriptions = []),
//                     d.subscriptions.push(o.RPC.SubOpts.decode(l, l.uint32()));
//                   break;
//                 case 2:
//                   (d.messages && d.messages.length) || (d.messages = []),
//                     d.messages.push(o.RPC.Message.decode(l, l.uint32()));
//                   break;
//                 case 3:
//                   d.control = o.RPC.ControlMessage.decode(l, l.uint32());
//                   break;
//                 default:
//                   l.skipType(p & 7);
//                   break;
//               }
//             }
//             return d;
//           }),
//           (a.fromObject = function (l) {
//             if (l instanceof o.RPC) return l;
//             var h = new o.RPC();
//             if (l.subscriptions) {
//               if (!Array.isArray(l.subscriptions))
//                 throw TypeError(".RPC.subscriptions: array expected");
//               h.subscriptions = [];
//               for (var f = 0; f < l.subscriptions.length; ++f) {
//                 if (typeof l.subscriptions[f] != "object")
//                   throw TypeError(".RPC.subscriptions: object expected");
//                 h.subscriptions[f] = o.RPC.SubOpts.fromObject(
//                   l.subscriptions[f]
//                 );
//               }
//             }
//             if (l.messages) {
//               if (!Array.isArray(l.messages))
//                 throw TypeError(".RPC.messages: array expected");
//               h.messages = [];
//               for (var f = 0; f < l.messages.length; ++f) {
//                 if (typeof l.messages[f] != "object")
//                   throw TypeError(".RPC.messages: object expected");
//                 h.messages[f] = o.RPC.Message.fromObject(l.messages[f]);
//               }
//             }
//             if (l.control != null) {
//               if (typeof l.control != "object")
//                 throw TypeError(".RPC.control: object expected");
//               h.control = o.RPC.ControlMessage.fromObject(l.control);
//             }
//             return h;
//           }),
//           (a.toObject = function (l, h) {
//             h || (h = {});
//             var f = {};
//             if (
//               ((h.arrays || h.defaults) &&
//                 ((f.subscriptions = []), (f.messages = [])),
//               l.subscriptions && l.subscriptions.length)
//             ) {
//               f.subscriptions = [];
//               for (var d = 0; d < l.subscriptions.length; ++d)
//                 f.subscriptions[d] = o.RPC.SubOpts.toObject(
//                   l.subscriptions[d],
//                   h
//                 );
//             }
//             if (l.messages && l.messages.length) {
//               f.messages = [];
//               for (var d = 0; d < l.messages.length; ++d)
//                 f.messages[d] = o.RPC.Message.toObject(l.messages[d], h);
//             }
//             return (
//               l.control != null &&
//                 l.hasOwnProperty("control") &&
//                 ((f.control = o.RPC.ControlMessage.toObject(l.control, h)),
//                 h.oneofs && (f._control = "control")),
//               f
//             );
//           }),
//           (a.prototype.toJSON = function () {
//             return this.constructor.toObject(this, e.util.toJSONOptions);
//           }),
//           (a.SubOpts = (function () {
//             function u(h) {
//               if (h)
//                 for (var f = Object.keys(h), d = 0; d < f.length; ++d)
//                   h[f[d]] != null && (this[f[d]] = h[f[d]]);
//             }
//             (u.prototype.subscribe = null), (u.prototype.topic = null);
//             var l;
//             return (
//               Object.defineProperty(u.prototype, "_subscribe", {
//                 get: i.oneOfGetter((l = ["subscribe"])),
//                 set: i.oneOfSetter(l),
//               }),
//               Object.defineProperty(u.prototype, "_topic", {
//                 get: i.oneOfGetter((l = ["topic"])),
//                 set: i.oneOfSetter(l),
//               }),
//               (u.encode = function (f, d) {
//                 return (
//                   d || (d = n.create()),
//                   f.subscribe != null &&
//                     Object.hasOwnProperty.call(f, "subscribe") &&
//                     d.uint32(8).bool(f.subscribe),
//                   f.topic != null &&
//                     Object.hasOwnProperty.call(f, "topic") &&
//                     d.uint32(18).string(f.topic),
//                   d
//                 );
//               }),
//               (u.decode = function (f, d) {
//                 f instanceof t || (f = t.create(f));
//                 for (
//                   var p = d === void 0 ? f.len : f.pos + d,
//                     g = new o.RPC.SubOpts();
//                   f.pos < p;

//                 ) {
//                   var m = f.uint32();
//                   switch (m >>> 3) {
//                     case 1:
//                       g.subscribe = f.bool();
//                       break;
//                     case 2:
//                       g.topic = f.string();
//                       break;
//                     default:
//                       f.skipType(m & 7);
//                       break;
//                   }
//                 }
//                 return g;
//               }),
//               (u.fromObject = function (f) {
//                 if (f instanceof o.RPC.SubOpts) return f;
//                 var d = new o.RPC.SubOpts();
//                 return (
//                   f.subscribe != null && (d.subscribe = !!f.subscribe),
//                   f.topic != null && (d.topic = String(f.topic)),
//                   d
//                 );
//               }),
//               (u.toObject = function (f, d) {
//                 d || (d = {});
//                 var p = {};
//                 return (
//                   f.subscribe != null &&
//                     f.hasOwnProperty("subscribe") &&
//                     ((p.subscribe = f.subscribe),
//                     d.oneofs && (p._subscribe = "subscribe")),
//                   f.topic != null &&
//                     f.hasOwnProperty("topic") &&
//                     ((p.topic = f.topic), d.oneofs && (p._topic = "topic")),
//                   p
//                 );
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           (a.Message = (function () {
//             function u(h) {
//               if (h)
//                 for (var f = Object.keys(h), d = 0; d < f.length; ++d)
//                   h[f[d]] != null && (this[f[d]] = h[f[d]]);
//             }
//             (u.prototype.from = null),
//               (u.prototype.data = null),
//               (u.prototype.seqno = null),
//               (u.prototype.topic = ""),
//               (u.prototype.signature = null),
//               (u.prototype.key = null);
//             var l;
//             return (
//               Object.defineProperty(u.prototype, "_from", {
//                 get: i.oneOfGetter((l = ["from"])),
//                 set: i.oneOfSetter(l),
//               }),
//               Object.defineProperty(u.prototype, "_data", {
//                 get: i.oneOfGetter((l = ["data"])),
//                 set: i.oneOfSetter(l),
//               }),
//               Object.defineProperty(u.prototype, "_seqno", {
//                 get: i.oneOfGetter((l = ["seqno"])),
//                 set: i.oneOfSetter(l),
//               }),
//               Object.defineProperty(u.prototype, "_signature", {
//                 get: i.oneOfGetter((l = ["signature"])),
//                 set: i.oneOfSetter(l),
//               }),
//               Object.defineProperty(u.prototype, "_key", {
//                 get: i.oneOfGetter((l = ["key"])),
//                 set: i.oneOfSetter(l),
//               }),
//               (u.encode = function (f, d) {
//                 return (
//                   d || (d = n.create()),
//                   f.from != null &&
//                     Object.hasOwnProperty.call(f, "from") &&
//                     d.uint32(10).bytes(f.from),
//                   f.data != null &&
//                     Object.hasOwnProperty.call(f, "data") &&
//                     d.uint32(18).bytes(f.data),
//                   f.seqno != null &&
//                     Object.hasOwnProperty.call(f, "seqno") &&
//                     d.uint32(26).bytes(f.seqno),
//                   d.uint32(34).string(f.topic),
//                   f.signature != null &&
//                     Object.hasOwnProperty.call(f, "signature") &&
//                     d.uint32(42).bytes(f.signature),
//                   f.key != null &&
//                     Object.hasOwnProperty.call(f, "key") &&
//                     d.uint32(50).bytes(f.key),
//                   d
//                 );
//               }),
//               (u.decode = function (f, d) {
//                 f instanceof t || (f = t.create(f));
//                 for (
//                   var p = d === void 0 ? f.len : f.pos + d,
//                     g = new o.RPC.Message();
//                   f.pos < p;

//                 ) {
//                   var m = f.uint32();
//                   switch (m >>> 3) {
//                     case 1:
//                       g.from = f.bytes();
//                       break;
//                     case 2:
//                       g.data = f.bytes();
//                       break;
//                     case 3:
//                       g.seqno = f.bytes();
//                       break;
//                     case 4:
//                       g.topic = f.string();
//                       break;
//                     case 5:
//                       g.signature = f.bytes();
//                       break;
//                     case 6:
//                       g.key = f.bytes();
//                       break;
//                     default:
//                       f.skipType(m & 7);
//                       break;
//                   }
//                 }
//                 if (!g.hasOwnProperty("topic"))
//                   throw i.ProtocolError("missing required 'topic'", {
//                     instance: g,
//                   });
//                 return g;
//               }),
//               (u.fromObject = function (f) {
//                 if (f instanceof o.RPC.Message) return f;
//                 var d = new o.RPC.Message();
//                 return (
//                   f.from != null &&
//                     (typeof f.from == "string"
//                       ? i.base64.decode(
//                           f.from,
//                           (d.from = i.newBuffer(i.base64.length(f.from))),
//                           0
//                         )
//                       : f.from.length && (d.from = f.from)),
//                   f.data != null &&
//                     (typeof f.data == "string"
//                       ? i.base64.decode(
//                           f.data,
//                           (d.data = i.newBuffer(i.base64.length(f.data))),
//                           0
//                         )
//                       : f.data.length && (d.data = f.data)),
//                   f.seqno != null &&
//                     (typeof f.seqno == "string"
//                       ? i.base64.decode(
//                           f.seqno,
//                           (d.seqno = i.newBuffer(i.base64.length(f.seqno))),
//                           0
//                         )
//                       : f.seqno.length && (d.seqno = f.seqno)),
//                   f.topic != null && (d.topic = String(f.topic)),
//                   f.signature != null &&
//                     (typeof f.signature == "string"
//                       ? i.base64.decode(
//                           f.signature,
//                           (d.signature = i.newBuffer(
//                             i.base64.length(f.signature)
//                           )),
//                           0
//                         )
//                       : f.signature.length && (d.signature = f.signature)),
//                   f.key != null &&
//                     (typeof f.key == "string"
//                       ? i.base64.decode(
//                           f.key,
//                           (d.key = i.newBuffer(i.base64.length(f.key))),
//                           0
//                         )
//                       : f.key.length && (d.key = f.key)),
//                   d
//                 );
//               }),
//               (u.toObject = function (f, d) {
//                 d || (d = {});
//                 var p = {};
//                 return (
//                   d.defaults && (p.topic = ""),
//                   f.from != null &&
//                     f.hasOwnProperty("from") &&
//                     ((p.from =
//                       d.bytes === String
//                         ? i.base64.encode(f.from, 0, f.from.length)
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.from)
//                         : f.from),
//                     d.oneofs && (p._from = "from")),
//                   f.data != null &&
//                     f.hasOwnProperty("data") &&
//                     ((p.data =
//                       d.bytes === String
//                         ? i.base64.encode(f.data, 0, f.data.length)
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.data)
//                         : f.data),
//                     d.oneofs && (p._data = "data")),
//                   f.seqno != null &&
//                     f.hasOwnProperty("seqno") &&
//                     ((p.seqno =
//                       d.bytes === String
//                         ? i.base64.encode(f.seqno, 0, f.seqno.length)
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.seqno)
//                         : f.seqno),
//                     d.oneofs && (p._seqno = "seqno")),
//                   f.topic != null &&
//                     f.hasOwnProperty("topic") &&
//                     (p.topic = f.topic),
//                   f.signature != null &&
//                     f.hasOwnProperty("signature") &&
//                     ((p.signature =
//                       d.bytes === String
//                         ? i.base64.encode(f.signature, 0, f.signature.length)
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.signature)
//                         : f.signature),
//                     d.oneofs && (p._signature = "signature")),
//                   f.key != null &&
//                     f.hasOwnProperty("key") &&
//                     ((p.key =
//                       d.bytes === String
//                         ? i.base64.encode(f.key, 0, f.key.length)
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.key)
//                         : f.key),
//                     d.oneofs && (p._key = "key")),
//                   p
//                 );
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           (a.ControlMessage = (function () {
//             function u(l) {
//               if (
//                 ((this.ihave = []),
//                 (this.iwant = []),
//                 (this.graft = []),
//                 (this.prune = []),
//                 l)
//               )
//                 for (var h = Object.keys(l), f = 0; f < h.length; ++f)
//                   l[h[f]] != null && (this[h[f]] = l[h[f]]);
//             }
//             return (
//               (u.prototype.ihave = i.emptyArray),
//               (u.prototype.iwant = i.emptyArray),
//               (u.prototype.graft = i.emptyArray),
//               (u.prototype.prune = i.emptyArray),
//               (u.encode = function (h, f) {
//                 if ((f || (f = n.create()), h.ihave != null && h.ihave.length))
//                   for (var d = 0; d < h.ihave.length; ++d)
//                     o.RPC.ControlIHave.encode(
//                       h.ihave[d],
//                       f.uint32(10).fork()
//                     ).ldelim();
//                 if (h.iwant != null && h.iwant.length)
//                   for (var d = 0; d < h.iwant.length; ++d)
//                     o.RPC.ControlIWant.encode(
//                       h.iwant[d],
//                       f.uint32(18).fork()
//                     ).ldelim();
//                 if (h.graft != null && h.graft.length)
//                   for (var d = 0; d < h.graft.length; ++d)
//                     o.RPC.ControlGraft.encode(
//                       h.graft[d],
//                       f.uint32(26).fork()
//                     ).ldelim();
//                 if (h.prune != null && h.prune.length)
//                   for (var d = 0; d < h.prune.length; ++d)
//                     o.RPC.ControlPrune.encode(
//                       h.prune[d],
//                       f.uint32(34).fork()
//                     ).ldelim();
//                 return f;
//               }),
//               (u.decode = function (h, f) {
//                 h instanceof t || (h = t.create(h));
//                 for (
//                   var d = f === void 0 ? h.len : h.pos + f,
//                     p = new o.RPC.ControlMessage();
//                   h.pos < d;

//                 ) {
//                   var g = h.uint32();
//                   switch (g >>> 3) {
//                     case 1:
//                       (p.ihave && p.ihave.length) || (p.ihave = []),
//                         p.ihave.push(o.RPC.ControlIHave.decode(h, h.uint32()));
//                       break;
//                     case 2:
//                       (p.iwant && p.iwant.length) || (p.iwant = []),
//                         p.iwant.push(o.RPC.ControlIWant.decode(h, h.uint32()));
//                       break;
//                     case 3:
//                       (p.graft && p.graft.length) || (p.graft = []),
//                         p.graft.push(o.RPC.ControlGraft.decode(h, h.uint32()));
//                       break;
//                     case 4:
//                       (p.prune && p.prune.length) || (p.prune = []),
//                         p.prune.push(o.RPC.ControlPrune.decode(h, h.uint32()));
//                       break;
//                     default:
//                       h.skipType(g & 7);
//                       break;
//                   }
//                 }
//                 return p;
//               }),
//               (u.fromObject = function (h) {
//                 if (h instanceof o.RPC.ControlMessage) return h;
//                 var f = new o.RPC.ControlMessage();
//                 if (h.ihave) {
//                   if (!Array.isArray(h.ihave))
//                     throw TypeError(
//                       ".RPC.ControlMessage.ihave: array expected"
//                     );
//                   f.ihave = [];
//                   for (var d = 0; d < h.ihave.length; ++d) {
//                     if (typeof h.ihave[d] != "object")
//                       throw TypeError(
//                         ".RPC.ControlMessage.ihave: object expected"
//                       );
//                     f.ihave[d] = o.RPC.ControlIHave.fromObject(h.ihave[d]);
//                   }
//                 }
//                 if (h.iwant) {
//                   if (!Array.isArray(h.iwant))
//                     throw TypeError(
//                       ".RPC.ControlMessage.iwant: array expected"
//                     );
//                   f.iwant = [];
//                   for (var d = 0; d < h.iwant.length; ++d) {
//                     if (typeof h.iwant[d] != "object")
//                       throw TypeError(
//                         ".RPC.ControlMessage.iwant: object expected"
//                       );
//                     f.iwant[d] = o.RPC.ControlIWant.fromObject(h.iwant[d]);
//                   }
//                 }
//                 if (h.graft) {
//                   if (!Array.isArray(h.graft))
//                     throw TypeError(
//                       ".RPC.ControlMessage.graft: array expected"
//                     );
//                   f.graft = [];
//                   for (var d = 0; d < h.graft.length; ++d) {
//                     if (typeof h.graft[d] != "object")
//                       throw TypeError(
//                         ".RPC.ControlMessage.graft: object expected"
//                       );
//                     f.graft[d] = o.RPC.ControlGraft.fromObject(h.graft[d]);
//                   }
//                 }
//                 if (h.prune) {
//                   if (!Array.isArray(h.prune))
//                     throw TypeError(
//                       ".RPC.ControlMessage.prune: array expected"
//                     );
//                   f.prune = [];
//                   for (var d = 0; d < h.prune.length; ++d) {
//                     if (typeof h.prune[d] != "object")
//                       throw TypeError(
//                         ".RPC.ControlMessage.prune: object expected"
//                       );
//                     f.prune[d] = o.RPC.ControlPrune.fromObject(h.prune[d]);
//                   }
//                 }
//                 return f;
//               }),
//               (u.toObject = function (h, f) {
//                 f || (f = {});
//                 var d = {};
//                 if (
//                   ((f.arrays || f.defaults) &&
//                     ((d.ihave = []),
//                     (d.iwant = []),
//                     (d.graft = []),
//                     (d.prune = [])),
//                   h.ihave && h.ihave.length)
//                 ) {
//                   d.ihave = [];
//                   for (var p = 0; p < h.ihave.length; ++p)
//                     d.ihave[p] = o.RPC.ControlIHave.toObject(h.ihave[p], f);
//                 }
//                 if (h.iwant && h.iwant.length) {
//                   d.iwant = [];
//                   for (var p = 0; p < h.iwant.length; ++p)
//                     d.iwant[p] = o.RPC.ControlIWant.toObject(h.iwant[p], f);
//                 }
//                 if (h.graft && h.graft.length) {
//                   d.graft = [];
//                   for (var p = 0; p < h.graft.length; ++p)
//                     d.graft[p] = o.RPC.ControlGraft.toObject(h.graft[p], f);
//                 }
//                 if (h.prune && h.prune.length) {
//                   d.prune = [];
//                   for (var p = 0; p < h.prune.length; ++p)
//                     d.prune[p] = o.RPC.ControlPrune.toObject(h.prune[p], f);
//                 }
//                 return d;
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           (a.ControlIHave = (function () {
//             function u(h) {
//               if (((this.messageIDs = []), h))
//                 for (var f = Object.keys(h), d = 0; d < f.length; ++d)
//                   h[f[d]] != null && (this[f[d]] = h[f[d]]);
//             }
//             (u.prototype.topicID = null),
//               (u.prototype.messageIDs = i.emptyArray);
//             var l;
//             return (
//               Object.defineProperty(u.prototype, "_topicID", {
//                 get: i.oneOfGetter((l = ["topicID"])),
//                 set: i.oneOfSetter(l),
//               }),
//               (u.encode = function (f, d) {
//                 if (
//                   (d || (d = n.create()),
//                   f.topicID != null &&
//                     Object.hasOwnProperty.call(f, "topicID") &&
//                     d.uint32(10).string(f.topicID),
//                   f.messageIDs != null && f.messageIDs.length)
//                 )
//                   for (var p = 0; p < f.messageIDs.length; ++p)
//                     d.uint32(18).bytes(f.messageIDs[p]);
//                 return d;
//               }),
//               (u.decode = function (f, d) {
//                 f instanceof t || (f = t.create(f));
//                 for (
//                   var p = d === void 0 ? f.len : f.pos + d,
//                     g = new o.RPC.ControlIHave();
//                   f.pos < p;

//                 ) {
//                   var m = f.uint32();
//                   switch (m >>> 3) {
//                     case 1:
//                       g.topicID = f.string();
//                       break;
//                     case 2:
//                       (g.messageIDs && g.messageIDs.length) ||
//                         (g.messageIDs = []),
//                         g.messageIDs.push(f.bytes());
//                       break;
//                     default:
//                       f.skipType(m & 7);
//                       break;
//                   }
//                 }
//                 return g;
//               }),
//               (u.fromObject = function (f) {
//                 if (f instanceof o.RPC.ControlIHave) return f;
//                 var d = new o.RPC.ControlIHave();
//                 if (
//                   (f.topicID != null && (d.topicID = String(f.topicID)),
//                   f.messageIDs)
//                 ) {
//                   if (!Array.isArray(f.messageIDs))
//                     throw TypeError(
//                       ".RPC.ControlIHave.messageIDs: array expected"
//                     );
//                   d.messageIDs = [];
//                   for (var p = 0; p < f.messageIDs.length; ++p)
//                     typeof f.messageIDs[p] == "string"
//                       ? i.base64.decode(
//                           f.messageIDs[p],
//                           (d.messageIDs[p] = i.newBuffer(
//                             i.base64.length(f.messageIDs[p])
//                           )),
//                           0
//                         )
//                       : f.messageIDs[p].length &&
//                         (d.messageIDs[p] = f.messageIDs[p]);
//                 }
//                 return d;
//               }),
//               (u.toObject = function (f, d) {
//                 d || (d = {});
//                 var p = {};
//                 if (
//                   ((d.arrays || d.defaults) && (p.messageIDs = []),
//                   f.topicID != null &&
//                     f.hasOwnProperty("topicID") &&
//                     ((p.topicID = f.topicID),
//                     d.oneofs && (p._topicID = "topicID")),
//                   f.messageIDs && f.messageIDs.length)
//                 ) {
//                   p.messageIDs = [];
//                   for (var g = 0; g < f.messageIDs.length; ++g)
//                     p.messageIDs[g] =
//                       d.bytes === String
//                         ? i.base64.encode(
//                             f.messageIDs[g],
//                             0,
//                             f.messageIDs[g].length
//                           )
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.messageIDs[g])
//                         : f.messageIDs[g];
//                 }
//                 return p;
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           (a.ControlIWant = (function () {
//             function u(l) {
//               if (((this.messageIDs = []), l))
//                 for (var h = Object.keys(l), f = 0; f < h.length; ++f)
//                   l[h[f]] != null && (this[h[f]] = l[h[f]]);
//             }
//             return (
//               (u.prototype.messageIDs = i.emptyArray),
//               (u.encode = function (h, f) {
//                 if (
//                   (f || (f = n.create()),
//                   h.messageIDs != null && h.messageIDs.length)
//                 )
//                   for (var d = 0; d < h.messageIDs.length; ++d)
//                     f.uint32(10).bytes(h.messageIDs[d]);
//                 return f;
//               }),
//               (u.decode = function (h, f) {
//                 h instanceof t || (h = t.create(h));
//                 for (
//                   var d = f === void 0 ? h.len : h.pos + f,
//                     p = new o.RPC.ControlIWant();
//                   h.pos < d;

//                 ) {
//                   var g = h.uint32();
//                   switch (g >>> 3) {
//                     case 1:
//                       (p.messageIDs && p.messageIDs.length) ||
//                         (p.messageIDs = []),
//                         p.messageIDs.push(h.bytes());
//                       break;
//                     default:
//                       h.skipType(g & 7);
//                       break;
//                   }
//                 }
//                 return p;
//               }),
//               (u.fromObject = function (h) {
//                 if (h instanceof o.RPC.ControlIWant) return h;
//                 var f = new o.RPC.ControlIWant();
//                 if (h.messageIDs) {
//                   if (!Array.isArray(h.messageIDs))
//                     throw TypeError(
//                       ".RPC.ControlIWant.messageIDs: array expected"
//                     );
//                   f.messageIDs = [];
//                   for (var d = 0; d < h.messageIDs.length; ++d)
//                     typeof h.messageIDs[d] == "string"
//                       ? i.base64.decode(
//                           h.messageIDs[d],
//                           (f.messageIDs[d] = i.newBuffer(
//                             i.base64.length(h.messageIDs[d])
//                           )),
//                           0
//                         )
//                       : h.messageIDs[d].length &&
//                         (f.messageIDs[d] = h.messageIDs[d]);
//                 }
//                 return f;
//               }),
//               (u.toObject = function (h, f) {
//                 f || (f = {});
//                 var d = {};
//                 if (
//                   ((f.arrays || f.defaults) && (d.messageIDs = []),
//                   h.messageIDs && h.messageIDs.length)
//                 ) {
//                   d.messageIDs = [];
//                   for (var p = 0; p < h.messageIDs.length; ++p)
//                     d.messageIDs[p] =
//                       f.bytes === String
//                         ? i.base64.encode(
//                             h.messageIDs[p],
//                             0,
//                             h.messageIDs[p].length
//                           )
//                         : f.bytes === Array
//                         ? Array.prototype.slice.call(h.messageIDs[p])
//                         : h.messageIDs[p];
//                 }
//                 return d;
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           (a.ControlGraft = (function () {
//             function u(h) {
//               if (h)
//                 for (var f = Object.keys(h), d = 0; d < f.length; ++d)
//                   h[f[d]] != null && (this[f[d]] = h[f[d]]);
//             }
//             u.prototype.topicID = null;
//             var l;
//             return (
//               Object.defineProperty(u.prototype, "_topicID", {
//                 get: i.oneOfGetter((l = ["topicID"])),
//                 set: i.oneOfSetter(l),
//               }),
//               (u.encode = function (f, d) {
//                 return (
//                   d || (d = n.create()),
//                   f.topicID != null &&
//                     Object.hasOwnProperty.call(f, "topicID") &&
//                     d.uint32(10).string(f.topicID),
//                   d
//                 );
//               }),
//               (u.decode = function (f, d) {
//                 f instanceof t || (f = t.create(f));
//                 for (
//                   var p = d === void 0 ? f.len : f.pos + d,
//                     g = new o.RPC.ControlGraft();
//                   f.pos < p;

//                 ) {
//                   var m = f.uint32();
//                   switch (m >>> 3) {
//                     case 1:
//                       g.topicID = f.string();
//                       break;
//                     default:
//                       f.skipType(m & 7);
//                       break;
//                   }
//                 }
//                 return g;
//               }),
//               (u.fromObject = function (f) {
//                 if (f instanceof o.RPC.ControlGraft) return f;
//                 var d = new o.RPC.ControlGraft();
//                 return f.topicID != null && (d.topicID = String(f.topicID)), d;
//               }),
//               (u.toObject = function (f, d) {
//                 d || (d = {});
//                 var p = {};
//                 return (
//                   f.topicID != null &&
//                     f.hasOwnProperty("topicID") &&
//                     ((p.topicID = f.topicID),
//                     d.oneofs && (p._topicID = "topicID")),
//                   p
//                 );
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           (a.ControlPrune = (function () {
//             function u(h) {
//               if (((this.peers = []), h))
//                 for (var f = Object.keys(h), d = 0; d < f.length; ++d)
//                   h[f[d]] != null && (this[f[d]] = h[f[d]]);
//             }
//             (u.prototype.topicID = null),
//               (u.prototype.peers = i.emptyArray),
//               (u.prototype.backoff = null);
//             var l;
//             return (
//               Object.defineProperty(u.prototype, "_topicID", {
//                 get: i.oneOfGetter((l = ["topicID"])),
//                 set: i.oneOfSetter(l),
//               }),
//               Object.defineProperty(u.prototype, "_backoff", {
//                 get: i.oneOfGetter((l = ["backoff"])),
//                 set: i.oneOfSetter(l),
//               }),
//               (u.encode = function (f, d) {
//                 if (
//                   (d || (d = n.create()),
//                   f.topicID != null &&
//                     Object.hasOwnProperty.call(f, "topicID") &&
//                     d.uint32(10).string(f.topicID),
//                   f.peers != null && f.peers.length)
//                 )
//                   for (var p = 0; p < f.peers.length; ++p)
//                     o.RPC.PeerInfo.encode(
//                       f.peers[p],
//                       d.uint32(18).fork()
//                     ).ldelim();
//                 return (
//                   f.backoff != null &&
//                     Object.hasOwnProperty.call(f, "backoff") &&
//                     d.uint32(24).uint64(f.backoff),
//                   d
//                 );
//               }),
//               (u.decode = function (f, d) {
//                 f instanceof t || (f = t.create(f));
//                 for (
//                   var p = d === void 0 ? f.len : f.pos + d,
//                     g = new o.RPC.ControlPrune();
//                   f.pos < p;

//                 ) {
//                   var m = f.uint32();
//                   switch (m >>> 3) {
//                     case 1:
//                       g.topicID = f.string();
//                       break;
//                     case 2:
//                       (g.peers && g.peers.length) || (g.peers = []),
//                         g.peers.push(o.RPC.PeerInfo.decode(f, f.uint32()));
//                       break;
//                     case 3:
//                       g.backoff = f.uint64();
//                       break;
//                     default:
//                       f.skipType(m & 7);
//                       break;
//                   }
//                 }
//                 return g;
//               }),
//               (u.fromObject = function (f) {
//                 if (f instanceof o.RPC.ControlPrune) return f;
//                 var d = new o.RPC.ControlPrune();
//                 if (
//                   (f.topicID != null && (d.topicID = String(f.topicID)),
//                   f.peers)
//                 ) {
//                   if (!Array.isArray(f.peers))
//                     throw TypeError(".RPC.ControlPrune.peers: array expected");
//                   d.peers = [];
//                   for (var p = 0; p < f.peers.length; ++p) {
//                     if (typeof f.peers[p] != "object")
//                       throw TypeError(
//                         ".RPC.ControlPrune.peers: object expected"
//                       );
//                     d.peers[p] = o.RPC.PeerInfo.fromObject(f.peers[p]);
//                   }
//                 }
//                 return (
//                   f.backoff != null &&
//                     (i.Long
//                       ? ((d.backoff = i.Long.fromValue(f.backoff)).unsigned =
//                           !0)
//                       : typeof f.backoff == "string"
//                       ? (d.backoff = parseInt(f.backoff, 10))
//                       : typeof f.backoff == "number"
//                       ? (d.backoff = f.backoff)
//                       : typeof f.backoff == "object" &&
//                         (d.backoff = new i.LongBits(
//                           f.backoff.low >>> 0,
//                           f.backoff.high >>> 0
//                         ).toNumber(!0))),
//                   d
//                 );
//               }),
//               (u.toObject = function (f, d) {
//                 d || (d = {});
//                 var p = {};
//                 if (
//                   ((d.arrays || d.defaults) && (p.peers = []),
//                   f.topicID != null &&
//                     f.hasOwnProperty("topicID") &&
//                     ((p.topicID = f.topicID),
//                     d.oneofs && (p._topicID = "topicID")),
//                   f.peers && f.peers.length)
//                 ) {
//                   p.peers = [];
//                   for (var g = 0; g < f.peers.length; ++g)
//                     p.peers[g] = o.RPC.PeerInfo.toObject(f.peers[g], d);
//                 }
//                 return (
//                   f.backoff != null &&
//                     f.hasOwnProperty("backoff") &&
//                     (typeof f.backoff == "number"
//                       ? (p.backoff =
//                           d.longs === String ? String(f.backoff) : f.backoff)
//                       : (p.backoff =
//                           d.longs === String
//                             ? i.Long.prototype.toString.call(f.backoff)
//                             : d.longs === Number
//                             ? new i.LongBits(
//                                 f.backoff.low >>> 0,
//                                 f.backoff.high >>> 0
//                               ).toNumber(!0)
//                             : f.backoff),
//                     d.oneofs && (p._backoff = "backoff")),
//                   p
//                 );
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           (a.PeerInfo = (function () {
//             function u(h) {
//               if (h)
//                 for (var f = Object.keys(h), d = 0; d < f.length; ++d)
//                   h[f[d]] != null && (this[f[d]] = h[f[d]]);
//             }
//             (u.prototype.peerID = null), (u.prototype.signedPeerRecord = null);
//             var l;
//             return (
//               Object.defineProperty(u.prototype, "_peerID", {
//                 get: i.oneOfGetter((l = ["peerID"])),
//                 set: i.oneOfSetter(l),
//               }),
//               Object.defineProperty(u.prototype, "_signedPeerRecord", {
//                 get: i.oneOfGetter((l = ["signedPeerRecord"])),
//                 set: i.oneOfSetter(l),
//               }),
//               (u.encode = function (f, d) {
//                 return (
//                   d || (d = n.create()),
//                   f.peerID != null &&
//                     Object.hasOwnProperty.call(f, "peerID") &&
//                     d.uint32(10).bytes(f.peerID),
//                   f.signedPeerRecord != null &&
//                     Object.hasOwnProperty.call(f, "signedPeerRecord") &&
//                     d.uint32(18).bytes(f.signedPeerRecord),
//                   d
//                 );
//               }),
//               (u.decode = function (f, d) {
//                 f instanceof t || (f = t.create(f));
//                 for (
//                   var p = d === void 0 ? f.len : f.pos + d,
//                     g = new o.RPC.PeerInfo();
//                   f.pos < p;

//                 ) {
//                   var m = f.uint32();
//                   switch (m >>> 3) {
//                     case 1:
//                       g.peerID = f.bytes();
//                       break;
//                     case 2:
//                       g.signedPeerRecord = f.bytes();
//                       break;
//                     default:
//                       f.skipType(m & 7);
//                       break;
//                   }
//                 }
//                 return g;
//               }),
//               (u.fromObject = function (f) {
//                 if (f instanceof o.RPC.PeerInfo) return f;
//                 var d = new o.RPC.PeerInfo();
//                 return (
//                   f.peerID != null &&
//                     (typeof f.peerID == "string"
//                       ? i.base64.decode(
//                           f.peerID,
//                           (d.peerID = i.newBuffer(i.base64.length(f.peerID))),
//                           0
//                         )
//                       : f.peerID.length && (d.peerID = f.peerID)),
//                   f.signedPeerRecord != null &&
//                     (typeof f.signedPeerRecord == "string"
//                       ? i.base64.decode(
//                           f.signedPeerRecord,
//                           (d.signedPeerRecord = i.newBuffer(
//                             i.base64.length(f.signedPeerRecord)
//                           )),
//                           0
//                         )
//                       : f.signedPeerRecord.length &&
//                         (d.signedPeerRecord = f.signedPeerRecord)),
//                   d
//                 );
//               }),
//               (u.toObject = function (f, d) {
//                 d || (d = {});
//                 var p = {};
//                 return (
//                   f.peerID != null &&
//                     f.hasOwnProperty("peerID") &&
//                     ((p.peerID =
//                       d.bytes === String
//                         ? i.base64.encode(f.peerID, 0, f.peerID.length)
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.peerID)
//                         : f.peerID),
//                     d.oneofs && (p._peerID = "peerID")),
//                   f.signedPeerRecord != null &&
//                     f.hasOwnProperty("signedPeerRecord") &&
//                     ((p.signedPeerRecord =
//                       d.bytes === String
//                         ? i.base64.encode(
//                             f.signedPeerRecord,
//                             0,
//                             f.signedPeerRecord.length
//                           )
//                         : d.bytes === Array
//                         ? Array.prototype.slice.call(f.signedPeerRecord)
//                         : f.signedPeerRecord),
//                     d.oneofs && (p._signedPeerRecord = "signedPeerRecord")),
//                   p
//                 );
//               }),
//               (u.prototype.toJSON = function () {
//                 return this.constructor.toObject(this, e.util.toJSONOptions);
//               }),
//               u
//             );
//           })()),
//           a
//         );
//       })()),
//       o
//     );
//   });
// })(rpc);

// const NOISE_MSG_MAX_LENGTH_BYTES = 65535,
//   NOISE_MSG_MAX_LENGTH_BYTES_WITHOUT_TAG = NOISE_MSG_MAX_LENGTH_BYTES - 16;
// var It, At;
// const DUMP_SESSION_KEYS = !!(
//   (At = (It = globalThis.process) == null ? void 0 : It.env) != null &&
//   At.DUMP_SESSION_KEYS
// );
// /*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
// const u32 = (r) =>
//   new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4));
// function isBytes$1(r) {
//   return (
//     r instanceof Uint8Array ||
//     (r != null && typeof r == "object" && r.constructor.name === "Uint8Array")
//   );
// }
// const createView = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength),
//   isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
// if (!isLE) throw new Error("Non little-endian hardware is not supported");
// function utf8ToBytes(r) {
//   if (typeof r != "string")
//     throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
//   return new Uint8Array(new TextEncoder().encode(r));
// }
// function toBytes(r) {
//   if (typeof r == "string") r = utf8ToBytes(r);
//   else if (isBytes$1(r)) r = r.slice();
//   else throw new Error(`expected Uint8Array, got ${typeof r}`);
//   return r;
// }
// const isPlainObject = (r) =>
//   Object.prototype.toString.call(r) === "[object Object]" &&
//   r.constructor === Object;
// function checkOpts(r, e) {
//   if (e !== void 0 && (typeof e != "object" || !isPlainObject(e)))
//     throw new Error("options must be object or undefined");
//   return Object.assign(r, e);
// }
// function ensureBytes(r, e) {
//   if (!isBytes$1(r)) throw new Error("Uint8Array expected");
//   if (typeof e == "number" && r.length !== e)
//     throw new Error(`Uint8Array length ${e} expected`);
// }
// function equalBytes(r, e) {
//   if (r.length !== e.length) return !1;
//   let t = 0;
//   for (let n = 0; n < r.length; n++) t |= r[n] ^ e[n];
//   return t === 0;
// }
// const wrapCipher = (r, e) => (Object.assign(e, r), e);
// function setBigUint64(r, e, t, n) {
//   if (typeof r.setBigUint64 == "function") return r.setBigUint64(e, t, n);
//   const i = BigInt(32),
//     o = BigInt(4294967295),
//     a = Number((t >> i) & o),
//     c = Number(t & o),
//     u = n ? 4 : 0,
//     l = n ? 0 : 4;
//   r.setUint32(e + u, a, n), r.setUint32(e + l, c, n);
// }
// function number(r) {
//   if (!Number.isSafeInteger(r) || r < 0)
//     throw new Error(`wrong positive integer: ${r}`);
// }
// function bool(r) {
//   if (typeof r != "boolean") throw new Error(`boolean expected, not ${r}`);
// }
// function isBytes(r) {
//   return (
//     r != null &&
//     typeof r == "object" &&
//     (r instanceof Uint8Array || r.constructor.name === "Uint8Array")
//   );
// }
// function bytes(r, ...e) {
//   if (!isBytes(r)) throw new Error("Uint8Array expected");
//   if (e.length > 0 && !e.includes(r.length))
//     throw new Error(
//       `Uint8Array expected of length ${e}, not of length=${r.length}`
//     );
// }
// function exists(r, e = !0) {
//   if (r.destroyed) throw new Error("Hash instance has been destroyed");
//   if (e && r.finished) throw new Error("Hash#digest() has already been called");
// }
// function output(r, e) {
//   bytes(r);
//   const t = e.outputLen;
//   if (r.length < t)
//     throw new Error(
//       `digestInto() expects output buffer of length at least ${t}`
//     );
// }
// const u8to16 = (r, e) => (r[e++] & 255) | ((r[e++] & 255) << 8);
// class Poly1305 {
//   constructor(e) {
//     (this.blockLen = 16),
//       (this.outputLen = 16),
//       (this.buffer = new Uint8Array(16)),
//       (this.r = new Uint16Array(10)),
//       (this.h = new Uint16Array(10)),
//       (this.pad = new Uint16Array(8)),
//       (this.pos = 0),
//       (this.finished = !1),
//       (e = toBytes(e)),
//       ensureBytes(e, 32);
//     const t = u8to16(e, 0),
//       n = u8to16(e, 2),
//       i = u8to16(e, 4),
//       o = u8to16(e, 6),
//       a = u8to16(e, 8),
//       c = u8to16(e, 10),
//       u = u8to16(e, 12),
//       l = u8to16(e, 14);
//     (this.r[0] = t & 8191),
//       (this.r[1] = ((t >>> 13) | (n << 3)) & 8191),
//       (this.r[2] = ((n >>> 10) | (i << 6)) & 7939),
//       (this.r[3] = ((i >>> 7) | (o << 9)) & 8191),
//       (this.r[4] = ((o >>> 4) | (a << 12)) & 255),
//       (this.r[5] = (a >>> 1) & 8190),
//       (this.r[6] = ((a >>> 14) | (c << 2)) & 8191),
//       (this.r[7] = ((c >>> 11) | (u << 5)) & 8065),
//       (this.r[8] = ((u >>> 8) | (l << 8)) & 8191),
//       (this.r[9] = (l >>> 5) & 127);
//     for (let h = 0; h < 8; h++) this.pad[h] = u8to16(e, 16 + 2 * h);
//   }
//   process(e, t, n = !1) {
//     const i = n ? 0 : 2048,
//       { h: o, r: a } = this,
//       c = a[0],
//       u = a[1],
//       l = a[2],
//       h = a[3],
//       f = a[4],
//       d = a[5],
//       p = a[6],
//       g = a[7],
//       m = a[8],
//       b = a[9],
//       _ = u8to16(e, t + 0),
//       w = u8to16(e, t + 2),
//       E = u8to16(e, t + 4),
//       v = u8to16(e, t + 6),
//       S = u8to16(e, t + 8),
//       I = u8to16(e, t + 10),
//       T = u8to16(e, t + 12),
//       A = u8to16(e, t + 14);
//     let C = o[0] + (_ & 8191),
//       x = o[1] + (((_ >>> 13) | (w << 3)) & 8191),
//       $ = o[2] + (((w >>> 10) | (E << 6)) & 8191),
//       O = o[3] + (((E >>> 7) | (v << 9)) & 8191),
//       M = o[4] + (((v >>> 4) | (S << 12)) & 8191),
//       K = o[5] + ((S >>> 1) & 8191),
//       B = o[6] + (((S >>> 14) | (I << 2)) & 8191),
//       N = o[7] + (((I >>> 11) | (T << 5)) & 8191),
//       D = o[8] + (((T >>> 8) | (A << 8)) & 8191),
//       P = o[9] + ((A >>> 5) | i),
//       R = 0,
//       k = R + C * c + x * (5 * b) + $ * (5 * m) + O * (5 * g) + M * (5 * p);
//     (R = k >>> 13),
//       (k &= 8191),
//       (k +=
//         K * (5 * d) + B * (5 * f) + N * (5 * h) + D * (5 * l) + P * (5 * u)),
//       (R += k >>> 13),
//       (k &= 8191);
//     let L = R + C * u + x * c + $ * (5 * b) + O * (5 * m) + M * (5 * g);
//     (R = L >>> 13),
//       (L &= 8191),
//       (L +=
//         K * (5 * p) + B * (5 * d) + N * (5 * f) + D * (5 * h) + P * (5 * l)),
//       (R += L >>> 13),
//       (L &= 8191);
//     let U = R + C * l + x * u + $ * c + O * (5 * b) + M * (5 * m);
//     (R = U >>> 13),
//       (U &= 8191),
//       (U +=
//         K * (5 * g) + B * (5 * p) + N * (5 * d) + D * (5 * f) + P * (5 * h)),
//       (R += U >>> 13),
//       (U &= 8191);
//     let H = R + C * h + x * l + $ * u + O * c + M * (5 * b);
//     (R = H >>> 13),
//       (H &= 8191),
//       (H +=
//         K * (5 * m) + B * (5 * g) + N * (5 * p) + D * (5 * d) + P * (5 * f)),
//       (R += H >>> 13),
//       (H &= 8191);
//     let z = R + C * f + x * h + $ * l + O * u + M * c;
//     (R = z >>> 13),
//       (z &= 8191),
//       (z +=
//         K * (5 * b) + B * (5 * m) + N * (5 * g) + D * (5 * p) + P * (5 * d)),
//       (R += z >>> 13),
//       (z &= 8191);
//     let Y = R + C * d + x * f + $ * h + O * l + M * u;
//     (R = Y >>> 13),
//       (Y &= 8191),
//       (Y += K * c + B * (5 * b) + N * (5 * m) + D * (5 * g) + P * (5 * p)),
//       (R += Y >>> 13),
//       (Y &= 8191);
//     let G = R + C * p + x * d + $ * f + O * h + M * l;
//     (R = G >>> 13),
//       (G &= 8191),
//       (G += K * u + B * c + N * (5 * b) + D * (5 * m) + P * (5 * g)),
//       (R += G >>> 13),
//       (G &= 8191);
//     let W = R + C * g + x * p + $ * d + O * f + M * h;
//     (R = W >>> 13),
//       (W &= 8191),
//       (W += K * l + B * u + N * c + D * (5 * b) + P * (5 * m)),
//       (R += W >>> 13),
//       (W &= 8191);
//     let X = R + C * m + x * g + $ * p + O * d + M * f;
//     (R = X >>> 13),
//       (X &= 8191),
//       (X += K * h + B * l + N * u + D * c + P * (5 * b)),
//       (R += X >>> 13),
//       (X &= 8191);
//     let j = R + C * b + x * m + $ * g + O * p + M * d;
//     (R = j >>> 13),
//       (j &= 8191),
//       (j += K * f + B * h + N * l + D * u + P * c),
//       (R += j >>> 13),
//       (j &= 8191),
//       (R = ((R << 2) + R) | 0),
//       (R = (R + k) | 0),
//       (k = R & 8191),
//       (R = R >>> 13),
//       (L += R),
//       (o[0] = k),
//       (o[1] = L),
//       (o[2] = U),
//       (o[3] = H),
//       (o[4] = z),
//       (o[5] = Y),
//       (o[6] = G),
//       (o[7] = W),
//       (o[8] = X),
//       (o[9] = j);
//   }
//   finalize() {
//     const { h: e, pad: t } = this,
//       n = new Uint16Array(10);
//     let i = e[1] >>> 13;
//     e[1] &= 8191;
//     for (let c = 2; c < 10; c++) (e[c] += i), (i = e[c] >>> 13), (e[c] &= 8191);
//     (e[0] += i * 5),
//       (i = e[0] >>> 13),
//       (e[0] &= 8191),
//       (e[1] += i),
//       (i = e[1] >>> 13),
//       (e[1] &= 8191),
//       (e[2] += i),
//       (n[0] = e[0] + 5),
//       (i = n[0] >>> 13),
//       (n[0] &= 8191);
//     for (let c = 1; c < 10; c++)
//       (n[c] = e[c] + i), (i = n[c] >>> 13), (n[c] &= 8191);
//     n[9] -= 8192;
//     let o = (i ^ 1) - 1;
//     for (let c = 0; c < 10; c++) n[c] &= o;
//     o = ~o;
//     for (let c = 0; c < 10; c++) e[c] = (e[c] & o) | n[c];
//     (e[0] = (e[0] | (e[1] << 13)) & 65535),
//       (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
//       (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
//       (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
//       (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
//       (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
//       (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
//       (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
//     let a = e[0] + t[0];
//     e[0] = a & 65535;
//     for (let c = 1; c < 8; c++)
//       (a = (((e[c] + t[c]) | 0) + (a >>> 16)) | 0), (e[c] = a & 65535);
//   }
//   update(e) {
//     exists(this);
//     const { buffer: t, blockLen: n } = this;
//     e = toBytes(e);
//     const i = e.length;
//     for (let o = 0; o < i; ) {
//       const a = Math.min(n - this.pos, i - o);
//       if (a === n) {
//         for (; n <= i - o; o += n) this.process(e, o);
//         continue;
//       }
//       t.set(e.subarray(o, o + a), this.pos),
//         (this.pos += a),
//         (o += a),
//         this.pos === n && (this.process(t, 0, !1), (this.pos = 0));
//     }
//     return this;
//   }
//   destroy() {
//     this.h.fill(0), this.r.fill(0), this.buffer.fill(0), this.pad.fill(0);
//   }
//   digestInto(e) {
//     exists(this), output(e, this), (this.finished = !0);
//     const { buffer: t, h: n } = this;
//     let { pos: i } = this;
//     if (i) {
//       for (t[i++] = 1; i < 16; i++) t[i] = 0;
//       this.process(t, 0, !0);
//     }
//     this.finalize();
//     let o = 0;
//     for (let a = 0; a < 8; a++) (e[o++] = n[a] >>> 0), (e[o++] = n[a] >>> 8);
//     return e;
//   }
//   digest() {
//     const { buffer: e, outputLen: t } = this;
//     this.digestInto(e);
//     const n = e.slice(0, t);
//     return this.destroy(), n;
//   }
// }
// function wrapConstructorWithKey(r) {
//   const e = (n, i) => r(i).update(toBytes(n)).digest(),
//     t = r(new Uint8Array(32));
//   return (
//     (e.outputLen = t.outputLen),
//     (e.blockLen = t.blockLen),
//     (e.create = (n) => r(n)),
//     e
//   );
// }
// const poly1305 = wrapConstructorWithKey((r) => new Poly1305(r)),
//   sigma16 = utf8ToBytes("expand 16-byte k"),
//   sigma32 = utf8ToBytes("expand 32-byte k"),
//   sigma16_32 = u32(sigma16),
//   sigma32_32 = u32(sigma32);
// function rotl(r, e) {
//   return (r << e) | (r >>> (32 - e));
// }
// function isAligned32(r) {
//   return r.byteOffset % 4 === 0;
// }
// const BLOCK_LEN = 64,
//   BLOCK_LEN32 = 16,
//   MAX_COUNTER = 2 ** 32 - 1,
//   U32_EMPTY = new Uint32Array();
// function runCipher(r, e, t, n, i, o, a, c) {
//   const u = i.length,
//     l = new Uint8Array(BLOCK_LEN),
//     h = u32(l),
//     f = isAligned32(i) && isAligned32(o),
//     d = f ? u32(i) : U32_EMPTY,
//     p = f ? u32(o) : U32_EMPTY;
//   for (let g = 0; g < u; a++) {
//     if ((r(e, t, n, h, a, c), a >= MAX_COUNTER))
//       throw new Error("arx: counter overflow");
//     const m = Math.min(BLOCK_LEN, u - g);
//     if (f && m === BLOCK_LEN) {
//       const b = g / 4;
//       if (g % 4 !== 0) throw new Error("arx: invalid block position");
//       for (let _ = 0, w; _ < BLOCK_LEN32; _++)
//         (w = b + _), (p[w] = d[w] ^ h[_]);
//       g += BLOCK_LEN;
//       continue;
//     }
//     for (let b = 0, _; b < m; b++) (_ = g + b), (o[_] = i[_] ^ l[b]);
//     g += m;
//   }
// }
// function createCipher$1(r, e) {
//   const {
//     allowShortKeys: t,
//     extendNonceFn: n,
//     counterLength: i,
//     counterRight: o,
//     rounds: a,
//   } = checkOpts(
//     {
//       allowShortKeys: !1,
//       counterLength: 8,
//       counterRight: !1,
//       rounds: 20,
//     },
//     e
//   );
//   if (typeof r != "function") throw new Error("core must be a function");
//   return (
//     number(i),
//     number(a),
//     bool(o),
//     bool(t),
//     (c, u, l, h, f = 0) => {
//       bytes(c), bytes(u), bytes(l);
//       const d = l.length;
//       if (
//         (h || (h = new Uint8Array(d)),
//         bytes(h),
//         number(f),
//         f < 0 || f >= MAX_COUNTER)
//       )
//         throw new Error("arx: counter overflow");
//       if (h.length < d)
//         throw new Error(
//           `arx: output (${h.length}) is shorter than data (${d})`
//         );
//       const p = [];
//       let g = c.length,
//         m,
//         b;
//       if (g === 32) (m = c.slice()), p.push(m), (b = sigma32_32);
//       else if (g === 16 && t)
//         (m = new Uint8Array(32)),
//           m.set(c),
//           m.set(c, 16),
//           (b = sigma16_32),
//           p.push(m);
//       else throw new Error(`arx: invalid 32-byte key, got length=${g}`);
//       isAligned32(u) || ((u = u.slice()), p.push(u));
//       const _ = u32(m);
//       if (n) {
//         if (u.length !== 24)
//           throw new Error("arx: extended nonce must be 24 bytes");
//         n(b, _, u32(u.subarray(0, 16)), _), (u = u.subarray(16));
//       }
//       const w = 16 - i;
//       if (w !== u.length)
//         throw new Error(`arx: nonce must be ${w} or 16 bytes`);
//       if (w !== 12) {
//         const v = new Uint8Array(12);
//         v.set(u, o ? 0 : 12 - u.length), (u = v), p.push(u);
//       }
//       const E = u32(u);
//       for (runCipher(r, b, _, E, l, h, f, a); p.length > 0; ) p.pop().fill(0);
//       return h;
//     }
//   );
// }
// function chachaCore(r, e, t, n, i, o = 20) {
//   let a = r[0],
//     c = r[1],
//     u = r[2],
//     l = r[3],
//     h = e[0],
//     f = e[1],
//     d = e[2],
//     p = e[3],
//     g = e[4],
//     m = e[5],
//     b = e[6],
//     _ = e[7],
//     w = i,
//     E = t[0],
//     v = t[1],
//     S = t[2],
//     I = a,
//     T = c,
//     A = u,
//     C = l,
//     x = h,
//     $ = f,
//     O = d,
//     M = p,
//     K = g,
//     B = m,
//     N = b,
//     D = _,
//     P = w,
//     R = E,
//     k = v,
//     L = S;
//   for (let H = 0; H < o; H += 2)
//     (I = (I + x) | 0),
//       (P = rotl(P ^ I, 16)),
//       (K = (K + P) | 0),
//       (x = rotl(x ^ K, 12)),
//       (I = (I + x) | 0),
//       (P = rotl(P ^ I, 8)),
//       (K = (K + P) | 0),
//       (x = rotl(x ^ K, 7)),
//       (T = (T + $) | 0),
//       (R = rotl(R ^ T, 16)),
//       (B = (B + R) | 0),
//       ($ = rotl($ ^ B, 12)),
//       (T = (T + $) | 0),
//       (R = rotl(R ^ T, 8)),
//       (B = (B + R) | 0),
//       ($ = rotl($ ^ B, 7)),
//       (A = (A + O) | 0),
//       (k = rotl(k ^ A, 16)),
//       (N = (N + k) | 0),
//       (O = rotl(O ^ N, 12)),
//       (A = (A + O) | 0),
//       (k = rotl(k ^ A, 8)),
//       (N = (N + k) | 0),
//       (O = rotl(O ^ N, 7)),
//       (C = (C + M) | 0),
//       (L = rotl(L ^ C, 16)),
//       (D = (D + L) | 0),
//       (M = rotl(M ^ D, 12)),
//       (C = (C + M) | 0),
//       (L = rotl(L ^ C, 8)),
//       (D = (D + L) | 0),
//       (M = rotl(M ^ D, 7)),
//       (I = (I + $) | 0),
//       (L = rotl(L ^ I, 16)),
//       (N = (N + L) | 0),
//       ($ = rotl($ ^ N, 12)),
//       (I = (I + $) | 0),
//       (L = rotl(L ^ I, 8)),
//       (N = (N + L) | 0),
//       ($ = rotl($ ^ N, 7)),
//       (T = (T + O) | 0),
//       (P = rotl(P ^ T, 16)),
//       (D = (D + P) | 0),
//       (O = rotl(O ^ D, 12)),
//       (T = (T + O) | 0),
//       (P = rotl(P ^ T, 8)),
//       (D = (D + P) | 0),
//       (O = rotl(O ^ D, 7)),
//       (A = (A + M) | 0),
//       (R = rotl(R ^ A, 16)),
//       (K = (K + R) | 0),
//       (M = rotl(M ^ K, 12)),
//       (A = (A + M) | 0),
//       (R = rotl(R ^ A, 8)),
//       (K = (K + R) | 0),
//       (M = rotl(M ^ K, 7)),
//       (C = (C + x) | 0),
//       (k = rotl(k ^ C, 16)),
//       (B = (B + k) | 0),
//       (x = rotl(x ^ B, 12)),
//       (C = (C + x) | 0),
//       (k = rotl(k ^ C, 8)),
//       (B = (B + k) | 0),
//       (x = rotl(x ^ B, 7));
//   let U = 0;
//   (n[U++] = (a + I) | 0),
//     (n[U++] = (c + T) | 0),
//     (n[U++] = (u + A) | 0),
//     (n[U++] = (l + C) | 0),
//     (n[U++] = (h + x) | 0),
//     (n[U++] = (f + $) | 0),
//     (n[U++] = (d + O) | 0),
//     (n[U++] = (p + M) | 0),
//     (n[U++] = (g + K) | 0),
//     (n[U++] = (m + B) | 0),
//     (n[U++] = (b + N) | 0),
//     (n[U++] = (_ + D) | 0),
//     (n[U++] = (w + P) | 0),
//     (n[U++] = (E + R) | 0),
//     (n[U++] = (v + k) | 0),
//     (n[U++] = (S + L) | 0);
// }
// const chacha20 = createCipher$1(chachaCore, {
//     counterRight: !1,
//     counterLength: 4,
//     allowShortKeys: !1,
//   }),
//   ZEROS16 = new Uint8Array(16),
//   updatePadded = (r, e) => {
//     r.update(e);
//     const t = e.length % 16;
//     t && r.update(ZEROS16.subarray(t));
//   },
//   ZEROS32 = new Uint8Array(32);
// function computeTag(r, e, t, n, i) {
//   const o = r(e, t, ZEROS32),
//     a = poly1305.create(o);
//   i && updatePadded(a, i), updatePadded(a, n);
//   const c = new Uint8Array(16),
//     u = createView(c);
//   setBigUint64(u, 0, BigInt(i ? i.length : 0), !0),
//     setBigUint64(u, 8, BigInt(n.length), !0),
//     a.update(c);
//   const l = a.digest();
//   return o.fill(0), l;
// }
// const _poly1305_aead = (r) => (e, t, n) => (
//     ensureBytes(e, 32),
//     ensureBytes(t),
//     {
//       encrypt: (o, a) => {
//         const c = o.length,
//           u = c + 16;
//         a ? ensureBytes(a, u) : (a = new Uint8Array(u)), r(e, t, o, a, 1);
//         const l = computeTag(r, e, t, a.subarray(0, -16), n);
//         return a.set(l, c), a;
//       },
//       decrypt: (o, a) => {
//         const c = o.length,
//           u = c - 16;
//         if (c < 16) throw new Error("encrypted data must be at least 16 bytes");
//         a ? ensureBytes(a, u) : (a = new Uint8Array(u));
//         const l = o.subarray(0, -16),
//           h = o.subarray(-16),
//           f = computeTag(r, e, t, l, n);
//         if (!equalBytes(h, f)) throw new Error("invalid tag");
//         return r(e, t, l, a, 1), a;
//       },
//     }
//   ),
//   chacha20poly1305 = wrapCipher(
//     {
//       blockSize: 64,
//       nonceLength: 12,
//       tagLength: 16,
//     },
//     _poly1305_aead(chacha20)
//   );
// function extract(r, e, t) {
//   return (
//     hash$1(r),
//     t === void 0 && (t = new Uint8Array(r.outputLen)),
//     hmac$1(r, toBytes$2(t), toBytes$2(e))
//   );
// }
// const HKDF_COUNTER = new Uint8Array([0]),
//   EMPTY_BUFFER = new Uint8Array();
// function expand(r, e, t, n = 32) {
//   if ((hash$1(r), number$2(n), n > 255 * r.outputLen))
//     throw new Error("Length should be <= 255*HashLen");
//   const i = Math.ceil(n / r.outputLen);
//   t === void 0 && (t = EMPTY_BUFFER);
//   const o = new Uint8Array(i * r.outputLen),
//     a = hmac$1.create(r, e),
//     c = a._cloneInto(),
//     u = new Uint8Array(a.outputLen);
//   for (let l = 0; l < i; l++)
//     (HKDF_COUNTER[0] = l + 1),
//       c
//         .update(l === 0 ? EMPTY_BUFFER : u)
//         .update(t)
//         .update(HKDF_COUNTER)
//         .digestInto(u),
//       o.set(u, r.outputLen * l),
//       a._cloneInto(c);
//   return (
//     a.destroy(), c.destroy(), u.fill(0), HKDF_COUNTER.fill(0), o.slice(0, n)
//   );
// }
// const pureJsCrypto = {
//     hashSHA256(r) {
//       return sha256$1(r.subarray());
//     },
//     getHKDF(r, e) {
//       const t = extract(sha256$1, e, r),
//         i = expand(sha256$1, t, void 0, 96),
//         o = i.subarray(0, 32),
//         a = i.subarray(32, 64),
//         c = i.subarray(64, 96);
//       return [o, a, c];
//     },
//     generateX25519KeyPair() {
//       const r = x25519.utils.randomPrivateKey();
//       return {
//         publicKey: x25519.getPublicKey(r),
//         privateKey: r,
//       };
//     },
//     generateX25519KeyPairFromSeed(r) {
//       return {
//         publicKey: x25519.getPublicKey(r),
//         privateKey: r,
//       };
//     },
//     generateX25519SharedKey(r, e) {
//       return x25519.getSharedSecret(r.subarray(), e.subarray());
//     },
//     chaCha20Poly1305Encrypt(r, e, t, n) {
//       return chacha20poly1305(n, e, t).encrypt(r.subarray());
//     },
//     chaCha20Poly1305Decrypt(r, e, t, n, i) {
//       return chacha20poly1305(n, e, t).decrypt(r.subarray(), i);
//     },
//   },
//   defaultCrypto = pureJsCrypto,
//   uint16BEEncode = (r) => {
//     const e = allocUnsafe(2);
//     return (
//       new DataView(e.buffer, e.byteOffset, e.byteLength).setUint16(0, r, !1), e
//     );
//   };
// uint16BEEncode.bytes = 2;
// const uint16BEDecode = (r) => {
//   if (r.length < 2) throw RangeError("Could not decode int16BE");
//   return r instanceof Uint8Array
//     ? new DataView(r.buffer, r.byteOffset, r.byteLength).getUint16(0, !1)
//     : r.getUint16(0);
// };
// uint16BEDecode.bytes = 2;
// function encode0(r) {
//   return new Uint8ArrayList(r.ne, r.ciphertext);
// }
// function encode1(r) {
//   return new Uint8ArrayList(r.ne, r.ns, r.ciphertext);
// }
// function encode2(r) {
//   return new Uint8ArrayList(r.ns, r.ciphertext);
// }
// function decode0(r) {
//   if (r.length < 32)
//     throw new Error(
//       "Cannot decode stage 0 MessageBuffer: length less than 32 bytes."
//     );
//   return {
//     ne: r.subarray(0, 32),
//     ciphertext: r.subarray(32, r.length),
//     ns: alloc$1(0),
//   };
// }
// function decode1(r) {
//   if (r.length < 80)
//     throw new Error(
//       "Cannot decode stage 1 MessageBuffer: length less than 80 bytes."
//     );
//   return {
//     ne: r.subarray(0, 32),
//     ns: r.subarray(32, 80),
//     ciphertext: r.subarray(80, r.length),
//   };
// }
// function decode2(r) {
//   if (r.length < 48)
//     throw new Error(
//       "Cannot decode stage 2 MessageBuffer: length less than 48 bytes."
//     );
//   return {
//     ne: alloc$1(0),
//     ns: r.subarray(0, 48),
//     ciphertext: r.subarray(48, r.length),
//   };
// }
// const CHACHA_TAG_LENGTH = 16;
// function encryptStream(r, e) {
//   return async function* (t) {
//     for await (const n of t)
//       for (
//         let i = 0;
//         i < n.length;
//         i += NOISE_MSG_MAX_LENGTH_BYTES_WITHOUT_TAG
//       ) {
//         let o = i + NOISE_MSG_MAX_LENGTH_BYTES_WITHOUT_TAG;
//         o > n.length && (o = n.length);
//         let a;
//         n instanceof Uint8Array
//           ? (a = r.encrypt(n.subarray(i, o), r.session))
//           : (a = r.encrypt(n.sublist(i, o), r.session)),
//           e == null || e.encryptedPackets.increment(),
//           yield new Uint8ArrayList(uint16BEEncode(a.byteLength), a);
//       }
//   };
// }
// function decryptStream(r, e) {
//   return async function* (t) {
//     for await (const n of t)
//       for (let i = 0; i < n.length; i += NOISE_MSG_MAX_LENGTH_BYTES) {
//         let o = i + NOISE_MSG_MAX_LENGTH_BYTES;
//         if ((o > n.length && (o = n.length), o - CHACHA_TAG_LENGTH < i))
//           throw new Error("Invalid chunk");
//         const a = n.sublist(i, o),
//           c = n.subarray(i, o - CHACHA_TAG_LENGTH),
//           { plaintext: u, valid: l } = r.decrypt(a, r.session, c);
//         if (!l)
//           throw (
//             (e == null || e.decryptErrors.increment(),
//             new Error("Failed to validate decrypted chunk"))
//           );
//         e == null || e.decryptedPackets.increment(), yield u;
//       }
//   };
// }
// const nt = class nt extends Error {
//   constructor(t = "Unexpected Peer") {
//     super(t);
//     y(this, "code");
//     this.code = nt.code;
//   }
// };
// y(nt, "code", "ERR_UNEXPECTED_PEER");
// let UnexpectedPeerError = nt;
// const st = class st extends Error {
//   constructor(t = "Invalid crypto exchange") {
//     super(t);
//     y(this, "code");
//     this.code = st.code;
//   }
// };
// y(st, "code", "ERR_INVALID_CRYPTO_EXCHANGE");
// let InvalidCryptoExchangeError = st;
// var forge$m = {
//   options: {
//     usePureJavaScript: !1,
//   },
// };
// const forge$n = getDefaultExportFromCjs(forge$m);
// var api = {},
//   baseN$1 = api,
//   _reverseAlphabets = {};
// api.encode = function (r, e, t) {
//   if (typeof e != "string") throw new TypeError('"alphabet" must be a string.');
//   if (t !== void 0 && typeof t != "number")
//     throw new TypeError('"maxline" must be a number.');
//   var n = "";
//   if (!(r instanceof Uint8Array)) n = _encodeWithByteBuffer(r, e);
//   else {
//     var i = 0,
//       o = e.length,
//       a = e.charAt(0),
//       c = [0];
//     for (i = 0; i < r.length; ++i) {
//       for (var u = 0, l = r[i]; u < c.length; ++u)
//         (l += c[u] << 8), (c[u] = l % o), (l = (l / o) | 0);
//       for (; l > 0; ) c.push(l % o), (l = (l / o) | 0);
//     }
//     for (i = 0; r[i] === 0 && i < r.length - 1; ++i) n += a;
//     for (i = c.length - 1; i >= 0; --i) n += e[c[i]];
//   }
//   if (t) {
//     var h = new RegExp(".{1," + t + "}", "g");
//     n = n.match(h).join(`\r
// `);
//   }
//   return n;
// };
// api.decode = function (r, e) {
//   if (typeof r != "string") throw new TypeError('"input" must be a string.');
//   if (typeof e != "string") throw new TypeError('"alphabet" must be a string.');
//   var t = _reverseAlphabets[e];
//   if (!t) {
//     t = _reverseAlphabets[e] = [];
//     for (var n = 0; n < e.length; ++n) t[e.charCodeAt(n)] = n;
//   }
//   r = r.replace(/\s/g, "");
//   for (var i = e.length, o = e.charAt(0), a = [0], n = 0; n < r.length; n++) {
//     var c = t[r.charCodeAt(n)];
//     if (c === void 0) return;
//     for (var u = 0, l = c; u < a.length; ++u)
//       (l += a[u] * i), (a[u] = l & 255), (l >>= 8);
//     for (; l > 0; ) a.push(l & 255), (l >>= 8);
//   }
//   for (var h = 0; r[h] === o && h < r.length - 1; ++h) a.push(0);
//   return typeof Buffer < "u"
//     ? Buffer.from(a.reverse())
//     : new Uint8Array(a.reverse());
// };
// function _encodeWithByteBuffer(r, e) {
//   var t = 0,
//     n = e.length,
//     i = e.charAt(0),
//     o = [0];
//   for (t = 0; t < r.length(); ++t) {
//     for (var a = 0, c = r.at(t); a < o.length; ++a)
//       (c += o[a] << 8), (o[a] = c % n), (c = (c / n) | 0);
//     for (; c > 0; ) o.push(c % n), (c = (c / n) | 0);
//   }
//   var u = "";
//   for (t = 0; r.at(t) === 0 && t < r.length() - 1; ++t) u += i;
//   for (t = o.length - 1; t >= 0; --t) u += e[o[t]];
//   return u;
// }
// var forge$l = forge$m,
//   baseN = baseN$1,
//   util$1 = (forge$l.util = forge$l.util || {});
// (function () {
//   if (typeof process < "u" && process.nextTick && !process.browser) {
//     (util$1.nextTick = process.nextTick),
//       typeof setImmediate == "function"
//         ? (util$1.setImmediate = setImmediate)
//         : (util$1.setImmediate = util$1.nextTick);
//     return;
//   }
//   if (typeof setImmediate == "function") {
//     (util$1.setImmediate = function () {
//       return setImmediate.apply(void 0, arguments);
//     }),
//       (util$1.nextTick = function (a) {
//         return setImmediate(a);
//       });
//     return;
//   }
//   if (
//     ((util$1.setImmediate = function (a) {
//       setTimeout(a, 0);
//     }),
//     typeof window < "u" && typeof window.postMessage == "function")
//   ) {
//     let a = function (c) {
//       if (c.source === window && c.data === r) {
//         c.stopPropagation();
//         var u = e.slice();
//         (e.length = 0),
//           u.forEach(function (l) {
//             l();
//           });
//       }
//     };
//     var r = "forge.setImmediate",
//       e = [];
//     (util$1.setImmediate = function (c) {
//       e.push(c), e.length === 1 && window.postMessage(r, "*");
//     }),
//       window.addEventListener("message", a, !0);
//   }
//   if (typeof MutationObserver < "u") {
//     var t = Date.now(),
//       n = !0,
//       i = document.createElement("div"),
//       e = [];
//     new MutationObserver(function () {
//       var c = e.slice();
//       (e.length = 0),
//         c.forEach(function (u) {
//           u();
//         });
//     }).observe(i, {
//       attributes: !0,
//     });
//     var o = util$1.setImmediate;
//     util$1.setImmediate = function (c) {
//       Date.now() - t > 15
//         ? ((t = Date.now()), o(c))
//         : (e.push(c), e.length === 1 && i.setAttribute("a", (n = !n)));
//     };
//   }
//   util$1.nextTick = util$1.setImmediate;
// })();
// util$1.isNodejs =
//   typeof process < "u" && process.versions && process.versions.node;
// util$1.globalScope = (function () {
//   return util$1.isNodejs ? commonjsGlobal : typeof self > "u" ? window : self;
// })();
// util$1.isArray =
//   Array.isArray ||
//   function (r) {
//     return Object.prototype.toString.call(r) === "[object Array]";
//   };
// util$1.isArrayBuffer = function (r) {
//   return typeof ArrayBuffer < "u" && r instanceof ArrayBuffer;
// };
// util$1.isArrayBufferView = function (r) {
//   return r && util$1.isArrayBuffer(r.buffer) && r.byteLength !== void 0;
// };
// function _checkBitsParam(r) {
//   if (!(r === 8 || r === 16 || r === 24 || r === 32))
//     throw new Error("Only 8, 16, 24, or 32 bits supported: " + r);
// }
// util$1.ByteBuffer = ByteStringBuffer;
// function ByteStringBuffer(r) {
//   if (((this.data = ""), (this.read = 0), typeof r == "string")) this.data = r;
//   else if (util$1.isArrayBuffer(r) || util$1.isArrayBufferView(r))
//     if (typeof Buffer < "u" && r instanceof Buffer)
//       this.data = r.toString("binary");
//     else {
//       var e = new Uint8Array(r);
//       try {
//         this.data = String.fromCharCode.apply(null, e);
//       } catch {
//         for (var t = 0; t < e.length; ++t) this.putByte(e[t]);
//       }
//     }
//   else
//     (r instanceof ByteStringBuffer ||
//       (typeof r == "object" &&
//         typeof r.data == "string" &&
//         typeof r.read == "number")) &&
//       ((this.data = r.data), (this.read = r.read));
//   this._constructedStringLength = 0;
// }
// util$1.ByteStringBuffer = ByteStringBuffer;
// var _MAX_CONSTRUCTED_STRING_LENGTH = 4096;
// util$1.ByteStringBuffer.prototype._optimizeConstructedString = function (r) {
//   (this._constructedStringLength += r),
//     this._constructedStringLength > _MAX_CONSTRUCTED_STRING_LENGTH &&
//       (this.data.substr(0, 1), (this._constructedStringLength = 0));
// };
// util$1.ByteStringBuffer.prototype.length = function () {
//   return this.data.length - this.read;
// };
// util$1.ByteStringBuffer.prototype.isEmpty = function () {
//   return this.length() <= 0;
// };
// util$1.ByteStringBuffer.prototype.putByte = function (r) {
//   return this.putBytes(String.fromCharCode(r));
// };
// util$1.ByteStringBuffer.prototype.fillWithByte = function (r, e) {
//   r = String.fromCharCode(r);
//   for (var t = this.data; e > 0; )
//     e & 1 && (t += r), (e >>>= 1), e > 0 && (r += r);
//   return (this.data = t), this._optimizeConstructedString(e), this;
// };
// util$1.ByteStringBuffer.prototype.putBytes = function (r) {
//   return (this.data += r), this._optimizeConstructedString(r.length), this;
// };
// util$1.ByteStringBuffer.prototype.putString = function (r) {
//   return this.putBytes(util$1.encodeUtf8(r));
// };
// util$1.ByteStringBuffer.prototype.putInt16 = function (r) {
//   return this.putBytes(
//     String.fromCharCode((r >> 8) & 255) + String.fromCharCode(r & 255)
//   );
// };
// util$1.ByteStringBuffer.prototype.putInt24 = function (r) {
//   return this.putBytes(
//     String.fromCharCode((r >> 16) & 255) +
//       String.fromCharCode((r >> 8) & 255) +
//       String.fromCharCode(r & 255)
//   );
// };
// util$1.ByteStringBuffer.prototype.putInt32 = function (r) {
//   return this.putBytes(
//     String.fromCharCode((r >> 24) & 255) +
//       String.fromCharCode((r >> 16) & 255) +
//       String.fromCharCode((r >> 8) & 255) +
//       String.fromCharCode(r & 255)
//   );
// };
// util$1.ByteStringBuffer.prototype.putInt16Le = function (r) {
//   return this.putBytes(
//     String.fromCharCode(r & 255) + String.fromCharCode((r >> 8) & 255)
//   );
// };
// util$1.ByteStringBuffer.prototype.putInt24Le = function (r) {
//   return this.putBytes(
//     String.fromCharCode(r & 255) +
//       String.fromCharCode((r >> 8) & 255) +
//       String.fromCharCode((r >> 16) & 255)
//   );
// };
// util$1.ByteStringBuffer.prototype.putInt32Le = function (r) {
//   return this.putBytes(
//     String.fromCharCode(r & 255) +
//       String.fromCharCode((r >> 8) & 255) +
//       String.fromCharCode((r >> 16) & 255) +
//       String.fromCharCode((r >> 24) & 255)
//   );
// };
// util$1.ByteStringBuffer.prototype.putInt = function (r, e) {
//   _checkBitsParam(e);
//   var t = "";
//   do (e -= 8), (t += String.fromCharCode((r >> e) & 255));
//   while (e > 0);
//   return this.putBytes(t);
// };
// util$1.ByteStringBuffer.prototype.putSignedInt = function (r, e) {
//   return r < 0 && (r += 2 << (e - 1)), this.putInt(r, e);
// };
// util$1.ByteStringBuffer.prototype.putBuffer = function (r) {
//   return this.putBytes(r.getBytes());
// };
// util$1.ByteStringBuffer.prototype.getByte = function () {
//   return this.data.charCodeAt(this.read++);
// };
// util$1.ByteStringBuffer.prototype.getInt16 = function () {
//   var r =
//     (this.data.charCodeAt(this.read) << 8) ^
//     this.data.charCodeAt(this.read + 1);
//   return (this.read += 2), r;
// };
// util$1.ByteStringBuffer.prototype.getInt24 = function () {
//   var r =
//     (this.data.charCodeAt(this.read) << 16) ^
//     (this.data.charCodeAt(this.read + 1) << 8) ^
//     this.data.charCodeAt(this.read + 2);
//   return (this.read += 3), r;
// };
// util$1.ByteStringBuffer.prototype.getInt32 = function () {
//   var r =
//     (this.data.charCodeAt(this.read) << 24) ^
//     (this.data.charCodeAt(this.read + 1) << 16) ^
//     (this.data.charCodeAt(this.read + 2) << 8) ^
//     this.data.charCodeAt(this.read + 3);
//   return (this.read += 4), r;
// };
// util$1.ByteStringBuffer.prototype.getInt16Le = function () {
//   var r =
//     this.data.charCodeAt(this.read) ^
//     (this.data.charCodeAt(this.read + 1) << 8);
//   return (this.read += 2), r;
// };
// util$1.ByteStringBuffer.prototype.getInt24Le = function () {
//   var r =
//     this.data.charCodeAt(this.read) ^
//     (this.data.charCodeAt(this.read + 1) << 8) ^
//     (this.data.charCodeAt(this.read + 2) << 16);
//   return (this.read += 3), r;
// };
// util$1.ByteStringBuffer.prototype.getInt32Le = function () {
//   var r =
//     this.data.charCodeAt(this.read) ^
//     (this.data.charCodeAt(this.read + 1) << 8) ^
//     (this.data.charCodeAt(this.read + 2) << 16) ^
//     (this.data.charCodeAt(this.read + 3) << 24);
//   return (this.read += 4), r;
// };
// util$1.ByteStringBuffer.prototype.getInt = function (r) {
//   _checkBitsParam(r);
//   var e = 0;
//   do (e = (e << 8) + this.data.charCodeAt(this.read++)), (r -= 8);
//   while (r > 0);
//   return e;
// };
// util$1.ByteStringBuffer.prototype.getSignedInt = function (r) {
//   var e = this.getInt(r),
//     t = 2 << (r - 2);
//   return e >= t && (e -= t << 1), e;
// };
// util$1.ByteStringBuffer.prototype.getBytes = function (r) {
//   var e;
//   return (
//     r
//       ? ((r = Math.min(this.length(), r)),
//         (e = this.data.slice(this.read, this.read + r)),
//         (this.read += r))
//       : r === 0
//       ? (e = "")
//       : ((e = this.read === 0 ? this.data : this.data.slice(this.read)),
//         this.clear()),
//     e
//   );
// };
// util$1.ByteStringBuffer.prototype.bytes = function (r) {
//   return typeof r > "u"
//     ? this.data.slice(this.read)
//     : this.data.slice(this.read, this.read + r);
// };
// util$1.ByteStringBuffer.prototype.at = function (r) {
//   return this.data.charCodeAt(this.read + r);
// };
// util$1.ByteStringBuffer.prototype.setAt = function (r, e) {
//   return (
//     (this.data =
//       this.data.substr(0, this.read + r) +
//       String.fromCharCode(e) +
//       this.data.substr(this.read + r + 1)),
//     this
//   );
// };
// util$1.ByteStringBuffer.prototype.last = function () {
//   return this.data.charCodeAt(this.data.length - 1);
// };
// util$1.ByteStringBuffer.prototype.copy = function () {
//   var r = util$1.createBuffer(this.data);
//   return (r.read = this.read), r;
// };
// util$1.ByteStringBuffer.prototype.compact = function () {
//   return (
//     this.read > 0 &&
//       ((this.data = this.data.slice(this.read)), (this.read = 0)),
//     this
//   );
// };
// util$1.ByteStringBuffer.prototype.clear = function () {
//   return (this.data = ""), (this.read = 0), this;
// };
// util$1.ByteStringBuffer.prototype.truncate = function (r) {
//   var e = Math.max(0, this.length() - r);
//   return (this.data = this.data.substr(this.read, e)), (this.read = 0), this;
// };
// util$1.ByteStringBuffer.prototype.toHex = function () {
//   for (var r = "", e = this.read; e < this.data.length; ++e) {
//     var t = this.data.charCodeAt(e);
//     t < 16 && (r += "0"), (r += t.toString(16));
//   }
//   return r;
// };
// util$1.ByteStringBuffer.prototype.toString = function () {
//   return util$1.decodeUtf8(this.bytes());
// };
// function DataBuffer(r, e) {
//   (e = e || {}),
//     (this.read = e.readOffset || 0),
//     (this.growSize = e.growSize || 1024);
//   var t = util$1.isArrayBuffer(r),
//     n = util$1.isArrayBufferView(r);
//   if (t || n) {
//     t
//       ? (this.data = new DataView(r))
//       : (this.data = new DataView(r.buffer, r.byteOffset, r.byteLength)),
//       (this.write = "writeOffset" in e ? e.writeOffset : this.data.byteLength);
//     return;
//   }
//   (this.data = new DataView(new ArrayBuffer(0))),
//     (this.write = 0),
//     r != null && this.putBytes(r),
//     "writeOffset" in e && (this.write = e.writeOffset);
// }
// util$1.DataBuffer = DataBuffer;
// util$1.DataBuffer.prototype.length = function () {
//   return this.write - this.read;
// };
// util$1.DataBuffer.prototype.isEmpty = function () {
//   return this.length() <= 0;
// };
// util$1.DataBuffer.prototype.accommodate = function (r, e) {
//   if (this.length() >= r) return this;
//   e = Math.max(e || this.growSize, r);
//   var t = new Uint8Array(
//       this.data.buffer,
//       this.data.byteOffset,
//       this.data.byteLength
//     ),
//     n = new Uint8Array(this.length() + e);
//   return n.set(t), (this.data = new DataView(n.buffer)), this;
// };
// util$1.DataBuffer.prototype.putByte = function (r) {
//   return this.accommodate(1), this.data.setUint8(this.write++, r), this;
// };
// util$1.DataBuffer.prototype.fillWithByte = function (r, e) {
//   this.accommodate(e);
//   for (var t = 0; t < e; ++t) this.data.setUint8(r);
//   return this;
// };
// util$1.DataBuffer.prototype.putBytes = function (r, e) {
//   if (util$1.isArrayBufferView(r)) {
//     var t = new Uint8Array(r.buffer, r.byteOffset, r.byteLength),
//       n = t.byteLength - t.byteOffset;
//     this.accommodate(n);
//     var i = new Uint8Array(this.data.buffer, this.write);
//     return i.set(t), (this.write += n), this;
//   }
//   if (util$1.isArrayBuffer(r)) {
//     var t = new Uint8Array(r);
//     this.accommodate(t.byteLength);
//     var i = new Uint8Array(this.data.buffer);
//     return i.set(t, this.write), (this.write += t.byteLength), this;
//   }
//   if (
//     r instanceof util$1.DataBuffer ||
//     (typeof r == "object" &&
//       typeof r.read == "number" &&
//       typeof r.write == "number" &&
//       util$1.isArrayBufferView(r.data))
//   ) {
//     var t = new Uint8Array(r.data.byteLength, r.read, r.length());
//     this.accommodate(t.byteLength);
//     var i = new Uint8Array(r.data.byteLength, this.write);
//     return i.set(t), (this.write += t.byteLength), this;
//   }
//   if (
//     (r instanceof util$1.ByteStringBuffer && ((r = r.data), (e = "binary")),
//     (e = e || "binary"),
//     typeof r == "string")
//   ) {
//     var o;
//     if (e === "hex")
//       return (
//         this.accommodate(Math.ceil(r.length / 2)),
//         (o = new Uint8Array(this.data.buffer, this.write)),
//         (this.write += util$1.binary.hex.decode(r, o, this.write)),
//         this
//       );
//     if (e === "base64")
//       return (
//         this.accommodate(Math.ceil(r.length / 4) * 3),
//         (o = new Uint8Array(this.data.buffer, this.write)),
//         (this.write += util$1.binary.base64.decode(r, o, this.write)),
//         this
//       );
//     if (
//       (e === "utf8" && ((r = util$1.encodeUtf8(r)), (e = "binary")),
//       e === "binary" || e === "raw")
//     )
//       return (
//         this.accommodate(r.length),
//         (o = new Uint8Array(this.data.buffer, this.write)),
//         (this.write += util$1.binary.raw.decode(o)),
//         this
//       );
//     if (e === "utf16")
//       return (
//         this.accommodate(r.length * 2),
//         (o = new Uint16Array(this.data.buffer, this.write)),
//         (this.write += util$1.text.utf16.encode(o)),
//         this
//       );
//     throw new Error("Invalid encoding: " + e);
//   }
//   throw Error("Invalid parameter: " + r);
// };
// util$1.DataBuffer.prototype.putBuffer = function (r) {
//   return this.putBytes(r), r.clear(), this;
// };
// util$1.DataBuffer.prototype.putString = function (r) {
//   return this.putBytes(r, "utf16");
// };
// util$1.DataBuffer.prototype.putInt16 = function (r) {
//   return (
//     this.accommodate(2),
//     this.data.setInt16(this.write, r),
//     (this.write += 2),
//     this
//   );
// };
// util$1.DataBuffer.prototype.putInt24 = function (r) {
//   return (
//     this.accommodate(3),
//     this.data.setInt16(this.write, (r >> 8) & 65535),
//     this.data.setInt8(this.write, (r >> 16) & 255),
//     (this.write += 3),
//     this
//   );
// };
// util$1.DataBuffer.prototype.putInt32 = function (r) {
//   return (
//     this.accommodate(4),
//     this.data.setInt32(this.write, r),
//     (this.write += 4),
//     this
//   );
// };
// util$1.DataBuffer.prototype.putInt16Le = function (r) {
//   return (
//     this.accommodate(2),
//     this.data.setInt16(this.write, r, !0),
//     (this.write += 2),
//     this
//   );
// };
// util$1.DataBuffer.prototype.putInt24Le = function (r) {
//   return (
//     this.accommodate(3),
//     this.data.setInt8(this.write, (r >> 16) & 255),
//     this.data.setInt16(this.write, (r >> 8) & 65535, !0),
//     (this.write += 3),
//     this
//   );
// };
// util$1.DataBuffer.prototype.putInt32Le = function (r) {
//   return (
//     this.accommodate(4),
//     this.data.setInt32(this.write, r, !0),
//     (this.write += 4),
//     this
//   );
// };
// util$1.DataBuffer.prototype.putInt = function (r, e) {
//   _checkBitsParam(e), this.accommodate(e / 8);
//   do (e -= 8), this.data.setInt8(this.write++, (r >> e) & 255);
//   while (e > 0);
//   return this;
// };
// util$1.DataBuffer.prototype.putSignedInt = function (r, e) {
//   return (
//     _checkBitsParam(e),
//     this.accommodate(e / 8),
//     r < 0 && (r += 2 << (e - 1)),
//     this.putInt(r, e)
//   );
// };
// util$1.DataBuffer.prototype.getByte = function () {
//   return this.data.getInt8(this.read++);
// };
// util$1.DataBuffer.prototype.getInt16 = function () {
//   var r = this.data.getInt16(this.read);
//   return (this.read += 2), r;
// };
// util$1.DataBuffer.prototype.getInt24 = function () {
//   var r =
//     (this.data.getInt16(this.read) << 8) ^ this.data.getInt8(this.read + 2);
//   return (this.read += 3), r;
// };
// util$1.DataBuffer.prototype.getInt32 = function () {
//   var r = this.data.getInt32(this.read);
//   return (this.read += 4), r;
// };
// util$1.DataBuffer.prototype.getInt16Le = function () {
//   var r = this.data.getInt16(this.read, !0);
//   return (this.read += 2), r;
// };
// util$1.DataBuffer.prototype.getInt24Le = function () {
//   var r =
//     this.data.getInt8(this.read) ^ (this.data.getInt16(this.read + 1, !0) << 8);
//   return (this.read += 3), r;
// };
// util$1.DataBuffer.prototype.getInt32Le = function () {
//   var r = this.data.getInt32(this.read, !0);
//   return (this.read += 4), r;
// };
// util$1.DataBuffer.prototype.getInt = function (r) {
//   _checkBitsParam(r);
//   var e = 0;
//   do (e = (e << 8) + this.data.getInt8(this.read++)), (r -= 8);
//   while (r > 0);
//   return e;
// };
// util$1.DataBuffer.prototype.getSignedInt = function (r) {
//   var e = this.getInt(r),
//     t = 2 << (r - 2);
//   return e >= t && (e -= t << 1), e;
// };
// util$1.DataBuffer.prototype.getBytes = function (r) {
//   var e;
//   return (
//     r
//       ? ((r = Math.min(this.length(), r)),
//         (e = this.data.slice(this.read, this.read + r)),
//         (this.read += r))
//       : r === 0
//       ? (e = "")
//       : ((e = this.read === 0 ? this.data : this.data.slice(this.read)),
//         this.clear()),
//     e
//   );
// };
// util$1.DataBuffer.prototype.bytes = function (r) {
//   return typeof r > "u"
//     ? this.data.slice(this.read)
//     : this.data.slice(this.read, this.read + r);
// };
// util$1.DataBuffer.prototype.at = function (r) {
//   return this.data.getUint8(this.read + r);
// };
// util$1.DataBuffer.prototype.setAt = function (r, e) {
//   return this.data.setUint8(r, e), this;
// };
// util$1.DataBuffer.prototype.last = function () {
//   return this.data.getUint8(this.write - 1);
// };
// util$1.DataBuffer.prototype.copy = function () {
//   return new util$1.DataBuffer(this);
// };
// util$1.DataBuffer.prototype.compact = function () {
//   if (this.read > 0) {
//     var r = new Uint8Array(this.data.buffer, this.read),
//       e = new Uint8Array(r.byteLength);
//     e.set(r),
//       (this.data = new DataView(e)),
//       (this.write -= this.read),
//       (this.read = 0);
//   }
//   return this;
// };
// util$1.DataBuffer.prototype.clear = function () {
//   return (
//     (this.data = new DataView(new ArrayBuffer(0))),
//     (this.read = this.write = 0),
//     this
//   );
// };
// util$1.DataBuffer.prototype.truncate = function (r) {
//   return (
//     (this.write = Math.max(0, this.length() - r)),
//     (this.read = Math.min(this.read, this.write)),
//     this
//   );
// };
// util$1.DataBuffer.prototype.toHex = function () {
//   for (var r = "", e = this.read; e < this.data.byteLength; ++e) {
//     var t = this.data.getUint8(e);
//     t < 16 && (r += "0"), (r += t.toString(16));
//   }
//   return r;
// };
// util$1.DataBuffer.prototype.toString = function (r) {
//   var e = new Uint8Array(this.data, this.read, this.length());
//   if (((r = r || "utf8"), r === "binary" || r === "raw"))
//     return util$1.binary.raw.encode(e);
//   if (r === "hex") return util$1.binary.hex.encode(e);
//   if (r === "base64") return util$1.binary.base64.encode(e);
//   if (r === "utf8") return util$1.text.utf8.decode(e);
//   if (r === "utf16") return util$1.text.utf16.decode(e);
//   throw new Error("Invalid encoding: " + r);
// };
// util$1.createBuffer = function (r, e) {
//   return (
//     (e = e || "raw"),
//     r !== void 0 && e === "utf8" && (r = util$1.encodeUtf8(r)),
//     new util$1.ByteBuffer(r)
//   );
// };
// util$1.fillString = function (r, e) {
//   for (var t = ""; e > 0; ) e & 1 && (t += r), (e >>>= 1), e > 0 && (r += r);
//   return t;
// };
// util$1.xorBytes = function (r, e, t) {
//   for (var n = "", i = "", o = "", a = 0, c = 0; t > 0; --t, ++a)
//     (i = r.charCodeAt(a) ^ e.charCodeAt(a)),
//       c >= 10 && ((n += o), (o = ""), (c = 0)),
//       (o += String.fromCharCode(i)),
//       ++c;
//   return (n += o), n;
// };
// util$1.hexToBytes = function (r) {
//   var e = "",
//     t = 0;
//   for (
//     r.length & !0 && ((t = 1), (e += String.fromCharCode(parseInt(r[0], 16))));
//     t < r.length;
//     t += 2
//   )
//     e += String.fromCharCode(parseInt(r.substr(t, 2), 16));
//   return e;
// };
// util$1.bytesToHex = function (r) {
//   return util$1.createBuffer(r).toHex();
// };
// util$1.int32ToBytes = function (r) {
//   return (
//     String.fromCharCode((r >> 24) & 255) +
//     String.fromCharCode((r >> 16) & 255) +
//     String.fromCharCode((r >> 8) & 255) +
//     String.fromCharCode(r & 255)
//   );
// };
// var _base64 =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
//   _base64Idx = [
//     62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64,
//     -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
//     18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30,
//     31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
//     50, 51,
//   ],
//   _base58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
// util$1.encode64 = function (r, e) {
//   for (var t = "", n = "", i, o, a, c = 0; c < r.length; )
//     (i = r.charCodeAt(c++)),
//       (o = r.charCodeAt(c++)),
//       (a = r.charCodeAt(c++)),
//       (t += _base64.charAt(i >> 2)),
//       (t += _base64.charAt(((i & 3) << 4) | (o >> 4))),
//       isNaN(o)
//         ? (t += "==")
//         : ((t += _base64.charAt(((o & 15) << 2) | (a >> 6))),
//           (t += isNaN(a) ? "=" : _base64.charAt(a & 63))),
//       e &&
//         t.length > e &&
//         ((n +=
//           t.substr(0, e) +
//           `\r
// `),
//         (t = t.substr(e)));
//   return (n += t), n;
// };
// util$1.decode64 = function (r) {
//   r = r.replace(/[^A-Za-z0-9\+\/\=]/g, "");
//   for (var e = "", t, n, i, o, a = 0; a < r.length; )
//     (t = _base64Idx[r.charCodeAt(a++) - 43]),
//       (n = _base64Idx[r.charCodeAt(a++) - 43]),
//       (i = _base64Idx[r.charCodeAt(a++) - 43]),
//       (o = _base64Idx[r.charCodeAt(a++) - 43]),
//       (e += String.fromCharCode((t << 2) | (n >> 4))),
//       i !== 64 &&
//         ((e += String.fromCharCode(((n & 15) << 4) | (i >> 2))),
//         o !== 64 && (e += String.fromCharCode(((i & 3) << 6) | o)));
//   return e;
// };
// util$1.encodeUtf8 = function (r) {
//   return unescape(encodeURIComponent(r));
// };
// util$1.decodeUtf8 = function (r) {
//   return decodeURIComponent(escape(r));
// };
// util$1.binary = {
//   raw: {},
//   hex: {},
//   base64: {},
//   base58: {},
//   baseN: {
//     encode: baseN.encode,
//     decode: baseN.decode,
//   },
// };
// util$1.binary.raw.encode = function (r) {
//   return String.fromCharCode.apply(null, r);
// };
// util$1.binary.raw.decode = function (r, e, t) {
//   var n = e;
//   n || (n = new Uint8Array(r.length)), (t = t || 0);
//   for (var i = t, o = 0; o < r.length; ++o) n[i++] = r.charCodeAt(o);
//   return e ? i - t : n;
// };
// util$1.binary.hex.encode = util$1.bytesToHex;
// util$1.binary.hex.decode = function (r, e, t) {
//   var n = e;
//   n || (n = new Uint8Array(Math.ceil(r.length / 2))), (t = t || 0);
//   var i = 0,
//     o = t;
//   for (
//     r.length & 1 && ((i = 1), (n[o++] = parseInt(r[0], 16)));
//     i < r.length;
//     i += 2
//   )
//     n[o++] = parseInt(r.substr(i, 2), 16);
//   return e ? o - t : n;
// };
// util$1.binary.base64.encode = function (r, e) {
//   for (var t = "", n = "", i, o, a, c = 0; c < r.byteLength; )
//     (i = r[c++]),
//       (o = r[c++]),
//       (a = r[c++]),
//       (t += _base64.charAt(i >> 2)),
//       (t += _base64.charAt(((i & 3) << 4) | (o >> 4))),
//       isNaN(o)
//         ? (t += "==")
//         : ((t += _base64.charAt(((o & 15) << 2) | (a >> 6))),
//           (t += isNaN(a) ? "=" : _base64.charAt(a & 63))),
//       e &&
//         t.length > e &&
//         ((n +=
//           t.substr(0, e) +
//           `\r
// `),
//         (t = t.substr(e)));
//   return (n += t), n;
// };
// util$1.binary.base64.decode = function (r, e, t) {
//   var n = e;
//   n || (n = new Uint8Array(Math.ceil(r.length / 4) * 3)),
//     (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, "")),
//     (t = t || 0);
//   for (var i, o, a, c, u = 0, l = t; u < r.length; )
//     (i = _base64Idx[r.charCodeAt(u++) - 43]),
//       (o = _base64Idx[r.charCodeAt(u++) - 43]),
//       (a = _base64Idx[r.charCodeAt(u++) - 43]),
//       (c = _base64Idx[r.charCodeAt(u++) - 43]),
//       (n[l++] = (i << 2) | (o >> 4)),
//       a !== 64 &&
//         ((n[l++] = ((o & 15) << 4) | (a >> 2)),
//         c !== 64 && (n[l++] = ((a & 3) << 6) | c));
//   return e ? l - t : n.subarray(0, l);
// };
// util$1.binary.base58.encode = function (r, e) {
//   return util$1.binary.baseN.encode(r, _base58, e);
// };
// util$1.binary.base58.decode = function (r, e) {
//   return util$1.binary.baseN.decode(r, _base58, e);
// };
// util$1.text = {
//   utf8: {},
//   utf16: {},
// };
// util$1.text.utf8.encode = function (r, e, t) {
//   r = util$1.encodeUtf8(r);
//   var n = e;
//   n || (n = new Uint8Array(r.length)), (t = t || 0);
//   for (var i = t, o = 0; o < r.length; ++o) n[i++] = r.charCodeAt(o);
//   return e ? i - t : n;
// };
// util$1.text.utf8.decode = function (r) {
//   return util$1.decodeUtf8(String.fromCharCode.apply(null, r));
// };
// util$1.text.utf16.encode = function (r, e, t) {
//   var n = e;
//   n || (n = new Uint8Array(r.length * 2));
//   var i = new Uint16Array(n.buffer);
//   t = t || 0;
//   for (var o = t, a = t, c = 0; c < r.length; ++c)
//     (i[a++] = r.charCodeAt(c)), (o += 2);
//   return e ? o - t : n;
// };
// util$1.text.utf16.decode = function (r) {
//   return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
// };
// util$1.deflate = function (r, e, t) {
//   if (((e = util$1.decode64(r.deflate(util$1.encode64(e)).rval)), t)) {
//     var n = 2,
//       i = e.charCodeAt(1);
//     i & 32 && (n = 6), (e = e.substring(n, e.length - 4));
//   }
//   return e;
// };
// util$1.inflate = function (r, e, t) {
//   var n = r.inflate(util$1.encode64(e)).rval;
//   return n === null ? null : util$1.decode64(n);
// };
// var _setStorageObject = function (r, e, t) {
//     if (!r) throw new Error("WebStorage not available.");
//     var n;
//     if (
//       (t === null
//         ? (n = r.removeItem(e))
//         : ((t = util$1.encode64(JSON.stringify(t))), (n = r.setItem(e, t))),
//       typeof n < "u" && n.rval !== !0)
//     ) {
//       var i = new Error(n.error.message);
//       throw ((i.id = n.error.id), (i.name = n.error.name), i);
//     }
//   },
//   _getStorageObject = function (r, e) {
//     if (!r) throw new Error("WebStorage not available.");
//     var t = r.getItem(e);
//     if (r.init)
//       if (t.rval === null) {
//         if (t.error) {
//           var n = new Error(t.error.message);
//           throw ((n.id = t.error.id), (n.name = t.error.name), n);
//         }
//         t = null;
//       } else t = t.rval;
//     return t !== null && (t = JSON.parse(util$1.decode64(t))), t;
//   },
//   _setItem = function (r, e, t, n) {
//     var i = _getStorageObject(r, e);
//     i === null && (i = {}), (i[t] = n), _setStorageObject(r, e, i);
//   },
//   _getItem = function (r, e, t) {
//     var n = _getStorageObject(r, e);
//     return n !== null && (n = t in n ? n[t] : null), n;
//   },
//   _removeItem = function (r, e, t) {
//     var n = _getStorageObject(r, e);
//     if (n !== null && t in n) {
//       delete n[t];
//       var i = !0;
//       for (var o in n) {
//         i = !1;
//         break;
//       }
//       i && (n = null), _setStorageObject(r, e, n);
//     }
//   },
//   _clearItems = function (r, e) {
//     _setStorageObject(r, e, null);
//   },
//   _callStorageFunction = function (r, e, t) {
//     var n = null;
//     typeof t > "u" && (t = ["web", "flash"]);
//     var i,
//       o = !1,
//       a = null;
//     for (var c in t) {
//       i = t[c];
//       try {
//         if (i === "flash" || i === "both") {
//           if (e[0] === null)
//             throw new Error("Flash local storage not available.");
//           (n = r.apply(this, e)), (o = i === "flash");
//         }
//         (i === "web" || i === "both") &&
//           ((e[0] = localStorage), (n = r.apply(this, e)), (o = !0));
//       } catch (u) {
//         a = u;
//       }
//       if (o) break;
//     }
//     if (!o) throw a;
//     return n;
//   };
// util$1.setItem = function (r, e, t, n, i) {
//   _callStorageFunction(_setItem, arguments, i);
// };
// util$1.getItem = function (r, e, t, n) {
//   return _callStorageFunction(_getItem, arguments, n);
// };
// util$1.removeItem = function (r, e, t, n) {
//   _callStorageFunction(_removeItem, arguments, n);
// };
// util$1.clearItems = function (r, e, t) {
//   _callStorageFunction(_clearItems, arguments, t);
// };
// util$1.isEmpty = function (r) {
//   for (var e in r) if (r.hasOwnProperty(e)) return !1;
//   return !0;
// };
// util$1.format = function (r) {
//   for (var e = /%./g, t, n, i = 0, o = [], a = 0; (t = e.exec(r)); ) {
//     (n = r.substring(a, e.lastIndex - 2)),
//       n.length > 0 && o.push(n),
//       (a = e.lastIndex);
//     var c = t[0][1];
//     switch (c) {
//       case "s":
//       case "o":
//         i < arguments.length ? o.push(arguments[i++ + 1]) : o.push("<?>");
//         break;
//       case "%":
//         o.push("%");
//         break;
//       default:
//         o.push("<%" + c + "?>");
//     }
//   }
//   return o.push(r.substring(a)), o.join("");
// };
// util$1.formatNumber = function (r, e, t, n) {
//   var i = r,
//     o = isNaN((e = Math.abs(e))) ? 2 : e,
//     a = t === void 0 ? "," : t,
//     c = n === void 0 ? "." : n,
//     u = i < 0 ? "-" : "",
//     l = parseInt((i = Math.abs(+i || 0).toFixed(o)), 10) + "",
//     h = l.length > 3 ? l.length % 3 : 0;
//   return (
//     u +
//     (h ? l.substr(0, h) + c : "") +
//     l.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + c) +
//     (o
//       ? a +
//         Math.abs(i - l)
//           .toFixed(o)
//           .slice(2)
//       : "")
//   );
// };
// util$1.formatSize = function (r) {
//   return (
//     r >= 1073741824
//       ? (r = util$1.formatNumber(r / 1073741824, 2, ".", "") + " GiB")
//       : r >= 1048576
//       ? (r = util$1.formatNumber(r / 1048576, 2, ".", "") + " MiB")
//       : r >= 1024
//       ? (r = util$1.formatNumber(r / 1024, 0) + " KiB")
//       : (r = util$1.formatNumber(r, 0) + " bytes"),
//     r
//   );
// };
// util$1.bytesFromIP = function (r) {
//   return r.indexOf(".") !== -1
//     ? util$1.bytesFromIPv4(r)
//     : r.indexOf(":") !== -1
//     ? util$1.bytesFromIPv6(r)
//     : null;
// };
// util$1.bytesFromIPv4 = function (r) {
//   if (((r = r.split(".")), r.length !== 4)) return null;
//   for (var e = util$1.createBuffer(), t = 0; t < r.length; ++t) {
//     var n = parseInt(r[t], 10);
//     if (isNaN(n)) return null;
//     e.putByte(n);
//   }
//   return e.getBytes();
// };
// util$1.bytesFromIPv6 = function (r) {
//   var e = 0;
//   r = r.split(":").filter(function (a) {
//     return a.length === 0 && ++e, !0;
//   });
//   for (
//     var t = (8 - r.length + e) * 2, n = util$1.createBuffer(), i = 0;
//     i < 8;
//     ++i
//   ) {
//     if (!r[i] || r[i].length === 0) {
//       n.fillWithByte(0, t), (t = 0);
//       continue;
//     }
//     var o = util$1.hexToBytes(r[i]);
//     o.length < 2 && n.putByte(0), n.putBytes(o);
//   }
//   return n.getBytes();
// };
// util$1.bytesToIP = function (r) {
//   return r.length === 4
//     ? util$1.bytesToIPv4(r)
//     : r.length === 16
//     ? util$1.bytesToIPv6(r)
//     : null;
// };
// util$1.bytesToIPv4 = function (r) {
//   if (r.length !== 4) return null;
//   for (var e = [], t = 0; t < r.length; ++t) e.push(r.charCodeAt(t));
//   return e.join(".");
// };
// util$1.bytesToIPv6 = function (r) {
//   if (r.length !== 16) return null;
//   for (var e = [], t = [], n = 0, i = 0; i < r.length; i += 2) {
//     for (
//       var o = util$1.bytesToHex(r[i] + r[i + 1]);
//       o[0] === "0" && o !== "0";

//     )
//       o = o.substr(1);
//     if (o === "0") {
//       var a = t[t.length - 1],
//         c = e.length;
//       !a || c !== a.end + 1
//         ? t.push({
//             start: c,
//             end: c,
//           })
//         : ((a.end = c),
//           a.end - a.start > t[n].end - t[n].start && (n = t.length - 1));
//     }
//     e.push(o);
//   }
//   if (t.length > 0) {
//     var u = t[n];
//     u.end - u.start > 0 &&
//       (e.splice(u.start, u.end - u.start + 1, ""),
//       u.start === 0 && e.unshift(""),
//       u.end === 7 && e.push(""));
//   }
//   return e.join(":");
// };
// util$1.estimateCores = function (r, e) {
//   if (
//     (typeof r == "function" && ((e = r), (r = {})),
//     (r = r || {}),
//     "cores" in util$1 && !r.update)
//   )
//     return e(null, util$1.cores);
//   if (
//     typeof navigator < "u" &&
//     "hardwareConcurrency" in navigator &&
//     navigator.hardwareConcurrency > 0
//   )
//     return (
//       (util$1.cores = navigator.hardwareConcurrency), e(null, util$1.cores)
//     );
//   if (typeof Worker > "u") return (util$1.cores = 1), e(null, util$1.cores);
//   if (typeof Blob > "u") return (util$1.cores = 2), e(null, util$1.cores);
//   var t = URL.createObjectURL(
//     new Blob(
//       [
//         "(",
//         function () {
//           self.addEventListener("message", function (a) {
//             var c = Date.now(),
//               u = c + 4;
//             self.postMessage({
//               st: c,
//               et: u,
//             });
//           });
//         }.toString(),
//         ")()",
//       ],
//       {
//         type: "application/javascript",
//       }
//     )
//   );
//   n([], 5, 16);
//   function n(a, c, u) {
//     if (c === 0) {
//       var l = Math.floor(
//         a.reduce(function (h, f) {
//           return h + f;
//         }, 0) / a.length
//       );
//       return (
//         (util$1.cores = Math.max(1, l)),
//         URL.revokeObjectURL(t),
//         e(null, util$1.cores)
//       );
//     }
//     i(u, function (h, f) {
//       a.push(o(u, f)), n(a, c - 1, u);
//     });
//   }
//   function i(a, c) {
//     for (var u = [], l = [], h = 0; h < a; ++h) {
//       var f = new Worker(t);
//       f.addEventListener("message", function (d) {
//         if ((l.push(d.data), l.length === a)) {
//           for (var p = 0; p < a; ++p) u[p].terminate();
//           c(null, l);
//         }
//       }),
//         u.push(f);
//     }
//     for (var h = 0; h < a; ++h) u[h].postMessage(h);
//   }
//   function o(a, c) {
//     for (var u = [], l = 0; l < a; ++l)
//       for (var h = c[l], f = (u[l] = []), d = 0; d < a; ++d)
//         if (l !== d) {
//           var p = c[d];
//           ((h.st > p.st && h.st < p.et) || (p.st > h.st && p.st < h.et)) &&
//             f.push(d);
//         }
//     return u.reduce(function (g, m) {
//       return Math.max(g, m.length);
//     }, 0);
//   }
// };
// var forge$k = forge$m;
// forge$k.pki = forge$k.pki || {};
// var oids$1 = (forge$k.pki.oids = forge$k.oids = forge$k.oids || {});
// function _IN(r, e) {
//   (oids$1[r] = e), (oids$1[e] = r);
// }
// function _I_(r, e) {
//   oids$1[r] = e;
// }
// _IN("1.2.840.113549.1.1.1", "rsaEncryption");
// _IN("1.2.840.113549.1.1.4", "md5WithRSAEncryption");
// _IN("1.2.840.113549.1.1.5", "sha1WithRSAEncryption");
// _IN("1.2.840.113549.1.1.7", "RSAES-OAEP");
// _IN("1.2.840.113549.1.1.8", "mgf1");
// _IN("1.2.840.113549.1.1.9", "pSpecified");
// _IN("1.2.840.113549.1.1.10", "RSASSA-PSS");
// _IN("1.2.840.113549.1.1.11", "sha256WithRSAEncryption");
// _IN("1.2.840.113549.1.1.12", "sha384WithRSAEncryption");
// _IN("1.2.840.113549.1.1.13", "sha512WithRSAEncryption");
// _IN("1.3.101.112", "EdDSA25519");
// _IN("1.2.840.10040.4.3", "dsa-with-sha1");
// _IN("1.3.14.3.2.7", "desCBC");
// _IN("1.3.14.3.2.26", "sha1");
// _IN("1.3.14.3.2.29", "sha1WithRSASignature");
// _IN("2.16.840.1.101.3.4.2.1", "sha256");
// _IN("2.16.840.1.101.3.4.2.2", "sha384");
// _IN("2.16.840.1.101.3.4.2.3", "sha512");
// _IN("2.16.840.1.101.3.4.2.4", "sha224");
// _IN("2.16.840.1.101.3.4.2.5", "sha512-224");
// _IN("2.16.840.1.101.3.4.2.6", "sha512-256");
// _IN("1.2.840.113549.2.2", "md2");
// _IN("1.2.840.113549.2.5", "md5");
// _IN("1.2.840.113549.1.7.1", "data");
// _IN("1.2.840.113549.1.7.2", "signedData");
// _IN("1.2.840.113549.1.7.3", "envelopedData");
// _IN("1.2.840.113549.1.7.4", "signedAndEnvelopedData");
// _IN("1.2.840.113549.1.7.5", "digestedData");
// _IN("1.2.840.113549.1.7.6", "encryptedData");
// _IN("1.2.840.113549.1.9.1", "emailAddress");
// _IN("1.2.840.113549.1.9.2", "unstructuredName");
// _IN("1.2.840.113549.1.9.3", "contentType");
// _IN("1.2.840.113549.1.9.4", "messageDigest");
// _IN("1.2.840.113549.1.9.5", "signingTime");
// _IN("1.2.840.113549.1.9.6", "counterSignature");
// _IN("1.2.840.113549.1.9.7", "challengePassword");
// _IN("1.2.840.113549.1.9.8", "unstructuredAddress");
// _IN("1.2.840.113549.1.9.14", "extensionRequest");
// _IN("1.2.840.113549.1.9.20", "friendlyName");
// _IN("1.2.840.113549.1.9.21", "localKeyId");
// _IN("1.2.840.113549.1.9.22.1", "x509Certificate");
// _IN("1.2.840.113549.1.12.10.1.1", "keyBag");
// _IN("1.2.840.113549.1.12.10.1.2", "pkcs8ShroudedKeyBag");
// _IN("1.2.840.113549.1.12.10.1.3", "certBag");
// _IN("1.2.840.113549.1.12.10.1.4", "crlBag");
// _IN("1.2.840.113549.1.12.10.1.5", "secretBag");
// _IN("1.2.840.113549.1.12.10.1.6", "safeContentsBag");
// _IN("1.2.840.113549.1.5.13", "pkcs5PBES2");
// _IN("1.2.840.113549.1.5.12", "pkcs5PBKDF2");
// _IN("1.2.840.113549.1.12.1.1", "pbeWithSHAAnd128BitRC4");
// _IN("1.2.840.113549.1.12.1.2", "pbeWithSHAAnd40BitRC4");
// _IN("1.2.840.113549.1.12.1.3", "pbeWithSHAAnd3-KeyTripleDES-CBC");
// _IN("1.2.840.113549.1.12.1.4", "pbeWithSHAAnd2-KeyTripleDES-CBC");
// _IN("1.2.840.113549.1.12.1.5", "pbeWithSHAAnd128BitRC2-CBC");
// _IN("1.2.840.113549.1.12.1.6", "pbewithSHAAnd40BitRC2-CBC");
// _IN("1.2.840.113549.2.7", "hmacWithSHA1");
// _IN("1.2.840.113549.2.8", "hmacWithSHA224");
// _IN("1.2.840.113549.2.9", "hmacWithSHA256");
// _IN("1.2.840.113549.2.10", "hmacWithSHA384");
// _IN("1.2.840.113549.2.11", "hmacWithSHA512");
// _IN("1.2.840.113549.3.7", "des-EDE3-CBC");
// _IN("2.16.840.1.101.3.4.1.2", "aes128-CBC");
// _IN("2.16.840.1.101.3.4.1.22", "aes192-CBC");
// _IN("2.16.840.1.101.3.4.1.42", "aes256-CBC");
// _IN("2.5.4.3", "commonName");
// _IN("2.5.4.4", "surname");
// _IN("2.5.4.5", "serialNumber");
// _IN("2.5.4.6", "countryName");
// _IN("2.5.4.7", "localityName");
// _IN("2.5.4.8", "stateOrProvinceName");
// _IN("2.5.4.9", "streetAddress");
// _IN("2.5.4.10", "organizationName");
// _IN("2.5.4.11", "organizationalUnitName");
// _IN("2.5.4.12", "title");
// _IN("2.5.4.13", "description");
// _IN("2.5.4.15", "businessCategory");
// _IN("2.5.4.17", "postalCode");
// _IN("2.5.4.42", "givenName");
// _IN(
//   "1.3.6.1.4.1.311.60.2.1.2",
//   "jurisdictionOfIncorporationStateOrProvinceName"
// );
// _IN("1.3.6.1.4.1.311.60.2.1.3", "jurisdictionOfIncorporationCountryName");
// _IN("2.16.840.1.113730.1.1", "nsCertType");
// _IN("2.16.840.1.113730.1.13", "nsComment");
// _I_("2.5.29.1", "authorityKeyIdentifier");
// _I_("2.5.29.2", "keyAttributes");
// _I_("2.5.29.3", "certificatePolicies");
// _I_("2.5.29.4", "keyUsageRestriction");
// _I_("2.5.29.5", "policyMapping");
// _I_("2.5.29.6", "subtreesConstraint");
// _I_("2.5.29.7", "subjectAltName");
// _I_("2.5.29.8", "issuerAltName");
// _I_("2.5.29.9", "subjectDirectoryAttributes");
// _I_("2.5.29.10", "basicConstraints");
// _I_("2.5.29.11", "nameConstraints");
// _I_("2.5.29.12", "policyConstraints");
// _I_("2.5.29.13", "basicConstraints");
// _IN("2.5.29.14", "subjectKeyIdentifier");
// _IN("2.5.29.15", "keyUsage");
// _I_("2.5.29.16", "privateKeyUsagePeriod");
// _IN("2.5.29.17", "subjectAltName");
// _IN("2.5.29.18", "issuerAltName");
// _IN("2.5.29.19", "basicConstraints");
// _I_("2.5.29.20", "cRLNumber");
// _I_("2.5.29.21", "cRLReason");
// _I_("2.5.29.22", "expirationDate");
// _I_("2.5.29.23", "instructionCode");
// _I_("2.5.29.24", "invalidityDate");
// _I_("2.5.29.25", "cRLDistributionPoints");
// _I_("2.5.29.26", "issuingDistributionPoint");
// _I_("2.5.29.27", "deltaCRLIndicator");
// _I_("2.5.29.28", "issuingDistributionPoint");
// _I_("2.5.29.29", "certificateIssuer");
// _I_("2.5.29.30", "nameConstraints");
// _IN("2.5.29.31", "cRLDistributionPoints");
// _IN("2.5.29.32", "certificatePolicies");
// _I_("2.5.29.33", "policyMappings");
// _I_("2.5.29.34", "policyConstraints");
// _IN("2.5.29.35", "authorityKeyIdentifier");
// _I_("2.5.29.36", "policyConstraints");
// _IN("2.5.29.37", "extKeyUsage");
// _I_("2.5.29.46", "freshestCRL");
// _I_("2.5.29.54", "inhibitAnyPolicy");
// _IN("1.3.6.1.4.1.11129.2.4.2", "timestampList");
// _IN("1.3.6.1.5.5.7.1.1", "authorityInfoAccess");
// _IN("1.3.6.1.5.5.7.3.1", "serverAuth");
// _IN("1.3.6.1.5.5.7.3.2", "clientAuth");
// _IN("1.3.6.1.5.5.7.3.3", "codeSigning");
// _IN("1.3.6.1.5.5.7.3.4", "emailProtection");
// _IN("1.3.6.1.5.5.7.3.8", "timeStamping");
// var forge$j = forge$m,
//   asn1$2 = (forge$j.asn1 = forge$j.asn1 || {});
// asn1$2.Class = {
//   UNIVERSAL: 0,
//   APPLICATION: 64,
//   CONTEXT_SPECIFIC: 128,
//   PRIVATE: 192,
// };
// asn1$2.Type = {
//   NONE: 0,
//   BOOLEAN: 1,
//   INTEGER: 2,
//   BITSTRING: 3,
//   OCTETSTRING: 4,
//   NULL: 5,
//   OID: 6,
//   ODESC: 7,
//   EXTERNAL: 8,
//   REAL: 9,
//   ENUMERATED: 10,
//   EMBEDDED: 11,
//   UTF8: 12,
//   ROID: 13,
//   SEQUENCE: 16,
//   SET: 17,
//   PRINTABLESTRING: 19,
//   IA5STRING: 22,
//   UTCTIME: 23,
//   GENERALIZEDTIME: 24,
//   BMPSTRING: 30,
// };
// asn1$2.create = function (r, e, t, n, i) {
//   if (forge$j.util.isArray(n)) {
//     for (var o = [], a = 0; a < n.length; ++a) n[a] !== void 0 && o.push(n[a]);
//     n = o;
//   }
//   var c = {
//     tagClass: r,
//     type: e,
//     constructed: t,
//     composed: t || forge$j.util.isArray(n),
//     value: n,
//   };
//   return (
//     i &&
//       "bitStringContents" in i &&
//       ((c.bitStringContents = i.bitStringContents),
//       (c.original = asn1$2.copy(c))),
//     c
//   );
// };
// asn1$2.copy = function (r, e) {
//   var t;
//   if (forge$j.util.isArray(r)) {
//     t = [];
//     for (var n = 0; n < r.length; ++n) t.push(asn1$2.copy(r[n], e));
//     return t;
//   }
//   return typeof r == "string"
//     ? r
//     : ((t = {
//         tagClass: r.tagClass,
//         type: r.type,
//         constructed: r.constructed,
//         composed: r.composed,
//         value: asn1$2.copy(r.value, e),
//       }),
//       e &&
//         !e.excludeBitStringContents &&
//         (t.bitStringContents = r.bitStringContents),
//       t);
// };
// asn1$2.equals = function (r, e, t) {
//   if (forge$j.util.isArray(r)) {
//     if (!forge$j.util.isArray(e) || r.length !== e.length) return !1;
//     for (var n = 0; n < r.length; ++n)
//       if (!asn1$2.equals(r[n], e[n])) return !1;
//     return !0;
//   }
//   if (typeof r != typeof e) return !1;
//   if (typeof r == "string") return r === e;
//   var i =
//     r.tagClass === e.tagClass &&
//     r.type === e.type &&
//     r.constructed === e.constructed &&
//     r.composed === e.composed &&
//     asn1$2.equals(r.value, e.value);
//   return (
//     t &&
//       t.includeBitStringContents &&
//       (i = i && r.bitStringContents === e.bitStringContents),
//     i
//   );
// };
// asn1$2.getBerValueLength = function (r) {
//   var e = r.getByte();
//   if (e !== 128) {
//     var t,
//       n = e & 128;
//     return n ? (t = r.getInt((e & 127) << 3)) : (t = e), t;
//   }
// };
// function _checkBufferLength(r, e, t) {
//   if (t > e) {
//     var n = new Error("Too few bytes to parse DER.");
//     throw ((n.available = r.length()), (n.remaining = e), (n.requested = t), n);
//   }
// }
// var _getValueLength = function (r, e) {
//   var t = r.getByte();
//   if ((e--, t !== 128)) {
//     var n,
//       i = t & 128;
//     if (!i) n = t;
//     else {
//       var o = t & 127;
//       _checkBufferLength(r, e, o), (n = r.getInt(o << 3));
//     }
//     if (n < 0) throw new Error("Negative length: " + n);
//     return n;
//   }
// };
// asn1$2.fromDer = function (r, e) {
//   e === void 0 &&
//     (e = {
//       strict: !0,
//       parseAllBytes: !0,
//       decodeBitStrings: !0,
//     }),
//     typeof e == "boolean" &&
//       (e = {
//         strict: e,
//         parseAllBytes: !0,
//         decodeBitStrings: !0,
//       }),
//     "strict" in e || (e.strict = !0),
//     "parseAllBytes" in e || (e.parseAllBytes = !0),
//     "decodeBitStrings" in e || (e.decodeBitStrings = !0),
//     typeof r == "string" && (r = forge$j.util.createBuffer(r));
//   var t = r.length(),
//     n = _fromDer(r, r.length(), 0, e);
//   if (e.parseAllBytes && r.length() !== 0) {
//     var i = new Error("Unparsed DER bytes remain after ASN.1 parsing.");
//     throw ((i.byteCount = t), (i.remaining = r.length()), i);
//   }
//   return n;
// };
// function _fromDer(r, e, t, n) {
//   var i;
//   _checkBufferLength(r, e, 2);
//   var o = r.getByte();
//   e--;
//   var a = o & 192,
//     c = o & 31;
//   i = r.length();
//   var u = _getValueLength(r, e);
//   if (((e -= i - r.length()), u !== void 0 && u > e)) {
//     if (n.strict) {
//       var l = new Error("Too few bytes to read ASN.1 value.");
//       throw (
//         ((l.available = r.length()), (l.remaining = e), (l.requested = u), l)
//       );
//     }
//     u = e;
//   }
//   var h,
//     f,
//     d = (o & 32) === 32;
//   if (d)
//     if (((h = []), u === void 0))
//       for (;;) {
//         if (
//           (_checkBufferLength(r, e, 2),
//           r.bytes(2) === String.fromCharCode(0, 0))
//         ) {
//           r.getBytes(2), (e -= 2);
//           break;
//         }
//         (i = r.length()),
//           h.push(_fromDer(r, e, t + 1, n)),
//           (e -= i - r.length());
//       }
//     else
//       for (; u > 0; )
//         (i = r.length()),
//           h.push(_fromDer(r, u, t + 1, n)),
//           (e -= i - r.length()),
//           (u -= i - r.length());
//   if (
//     (h === void 0 &&
//       a === asn1$2.Class.UNIVERSAL &&
//       c === asn1$2.Type.BITSTRING &&
//       (f = r.bytes(u)),
//     h === void 0 &&
//       n.decodeBitStrings &&
//       a === asn1$2.Class.UNIVERSAL &&
//       c === asn1$2.Type.BITSTRING &&
//       u > 1)
//   ) {
//     var p = r.read,
//       g = e,
//       m = 0;
//     if (
//       (c === asn1$2.Type.BITSTRING &&
//         (_checkBufferLength(r, e, 1), (m = r.getByte()), e--),
//       m === 0)
//     )
//       try {
//         i = r.length();
//         var b = {
//             strict: !0,
//             decodeBitStrings: !0,
//           },
//           _ = _fromDer(r, e, t + 1, b),
//           w = i - r.length();
//         (e -= w), c == asn1$2.Type.BITSTRING && w++;
//         var E = _.tagClass;
//         w === u &&
//           (E === asn1$2.Class.UNIVERSAL ||
//             E === asn1$2.Class.CONTEXT_SPECIFIC) &&
//           (h = [_]);
//       } catch {}
//     h === void 0 && ((r.read = p), (e = g));
//   }
//   if (h === void 0) {
//     if (u === void 0) {
//       if (n.strict)
//         throw new Error("Non-constructed ASN.1 object of indefinite length.");
//       u = e;
//     }
//     if (c === asn1$2.Type.BMPSTRING)
//       for (h = ""; u > 0; u -= 2)
//         _checkBufferLength(r, e, 2),
//           (h += String.fromCharCode(r.getInt16())),
//           (e -= 2);
//     else (h = r.getBytes(u)), (e -= u);
//   }
//   var v =
//     f === void 0
//       ? null
//       : {
//           bitStringContents: f,
//         };
//   return asn1$2.create(a, c, d, h, v);
// }
// asn1$2.toDer = function (r) {
//   var e = forge$j.util.createBuffer(),
//     t = r.tagClass | r.type,
//     n = forge$j.util.createBuffer(),
//     i = !1;
//   if (
//     ("bitStringContents" in r &&
//       ((i = !0), r.original && (i = asn1$2.equals(r, r.original))),
//     i)
//   )
//     n.putBytes(r.bitStringContents);
//   else if (r.composed) {
//     r.constructed ? (t |= 32) : n.putByte(0);
//     for (var o = 0; o < r.value.length; ++o)
//       r.value[o] !== void 0 && n.putBuffer(asn1$2.toDer(r.value[o]));
//   } else if (r.type === asn1$2.Type.BMPSTRING)
//     for (var o = 0; o < r.value.length; ++o) n.putInt16(r.value.charCodeAt(o));
//   else
//     r.type === asn1$2.Type.INTEGER &&
//     r.value.length > 1 &&
//     ((r.value.charCodeAt(0) === 0 && !(r.value.charCodeAt(1) & 128)) ||
//       (r.value.charCodeAt(0) === 255 && (r.value.charCodeAt(1) & 128) === 128))
//       ? n.putBytes(r.value.substr(1))
//       : n.putBytes(r.value);
//   if ((e.putByte(t), n.length() <= 127)) e.putByte(n.length() & 127);
//   else {
//     var a = n.length(),
//       c = "";
//     do (c += String.fromCharCode(a & 255)), (a = a >>> 8);
//     while (a > 0);
//     e.putByte(c.length | 128);
//     for (var o = c.length - 1; o >= 0; --o) e.putByte(c.charCodeAt(o));
//   }
//   return e.putBuffer(n), e;
// };
// asn1$2.oidToDer = function (r) {
//   var e = r.split("."),
//     t = forge$j.util.createBuffer();
//   t.putByte(40 * parseInt(e[0], 10) + parseInt(e[1], 10));
//   for (var n, i, o, a, c = 2; c < e.length; ++c) {
//     (n = !0), (i = []), (o = parseInt(e[c], 10));
//     do (a = o & 127), (o = o >>> 7), n || (a |= 128), i.push(a), (n = !1);
//     while (o > 0);
//     for (var u = i.length - 1; u >= 0; --u) t.putByte(i[u]);
//   }
//   return t;
// };
// asn1$2.derToOid = function (r) {
//   var e;
//   typeof r == "string" && (r = forge$j.util.createBuffer(r));
//   var t = r.getByte();
//   e = Math.floor(t / 40) + "." + (t % 40);
//   for (var n = 0; r.length() > 0; )
//     (t = r.getByte()),
//       (n = n << 7),
//       t & 128 ? (n += t & 127) : ((e += "." + (n + t)), (n = 0));
//   return e;
// };
// asn1$2.utcTimeToDate = function (r) {
//   var e = new Date(),
//     t = parseInt(r.substr(0, 2), 10);
//   t = t >= 50 ? 1900 + t : 2e3 + t;
//   var n = parseInt(r.substr(2, 2), 10) - 1,
//     i = parseInt(r.substr(4, 2), 10),
//     o = parseInt(r.substr(6, 2), 10),
//     a = parseInt(r.substr(8, 2), 10),
//     c = 0;
//   if (r.length > 11) {
//     var u = r.charAt(10),
//       l = 10;
//     u !== "+" && u !== "-" && ((c = parseInt(r.substr(10, 2), 10)), (l += 2));
//   }
//   if (
//     (e.setUTCFullYear(t, n, i),
//     e.setUTCHours(o, a, c, 0),
//     l && ((u = r.charAt(l)), u === "+" || u === "-"))
//   ) {
//     var h = parseInt(r.substr(l + 1, 2), 10),
//       f = parseInt(r.substr(l + 4, 2), 10),
//       d = h * 60 + f;
//     (d *= 6e4), u === "+" ? e.setTime(+e - d) : e.setTime(+e + d);
//   }
//   return e;
// };
// asn1$2.generalizedTimeToDate = function (r) {
//   var e = new Date(),
//     t = parseInt(r.substr(0, 4), 10),
//     n = parseInt(r.substr(4, 2), 10) - 1,
//     i = parseInt(r.substr(6, 2), 10),
//     o = parseInt(r.substr(8, 2), 10),
//     a = parseInt(r.substr(10, 2), 10),
//     c = parseInt(r.substr(12, 2), 10),
//     u = 0,
//     l = 0,
//     h = !1;
//   r.charAt(r.length - 1) === "Z" && (h = !0);
//   var f = r.length - 5,
//     d = r.charAt(f);
//   if (d === "+" || d === "-") {
//     var p = parseInt(r.substr(f + 1, 2), 10),
//       g = parseInt(r.substr(f + 4, 2), 10);
//     (l = p * 60 + g), (l *= 6e4), d === "+" && (l *= -1), (h = !0);
//   }
//   return (
//     r.charAt(14) === "." && (u = parseFloat(r.substr(14), 10) * 1e3),
//     h
//       ? (e.setUTCFullYear(t, n, i),
//         e.setUTCHours(o, a, c, u),
//         e.setTime(+e + l))
//       : (e.setFullYear(t, n, i), e.setHours(o, a, c, u)),
//     e
//   );
// };
// asn1$2.dateToUtcTime = function (r) {
//   if (typeof r == "string") return r;
//   var e = "",
//     t = [];
//   t.push(("" + r.getUTCFullYear()).substr(2)),
//     t.push("" + (r.getUTCMonth() + 1)),
//     t.push("" + r.getUTCDate()),
//     t.push("" + r.getUTCHours()),
//     t.push("" + r.getUTCMinutes()),
//     t.push("" + r.getUTCSeconds());
//   for (var n = 0; n < t.length; ++n) t[n].length < 2 && (e += "0"), (e += t[n]);
//   return (e += "Z"), e;
// };
// asn1$2.dateToGeneralizedTime = function (r) {
//   if (typeof r == "string") return r;
//   var e = "",
//     t = [];
//   t.push("" + r.getUTCFullYear()),
//     t.push("" + (r.getUTCMonth() + 1)),
//     t.push("" + r.getUTCDate()),
//     t.push("" + r.getUTCHours()),
//     t.push("" + r.getUTCMinutes()),
//     t.push("" + r.getUTCSeconds());
//   for (var n = 0; n < t.length; ++n) t[n].length < 2 && (e += "0"), (e += t[n]);
//   return (e += "Z"), e;
// };
// asn1$2.integerToDer = function (r) {
//   var e = forge$j.util.createBuffer();
//   if (r >= -128 && r < 128) return e.putSignedInt(r, 8);
//   if (r >= -32768 && r < 32768) return e.putSignedInt(r, 16);
//   if (r >= -8388608 && r < 8388608) return e.putSignedInt(r, 24);
//   if (r >= -2147483648 && r < 2147483648) return e.putSignedInt(r, 32);
//   var t = new Error("Integer too large; max is 32-bits.");
//   throw ((t.integer = r), t);
// };
// asn1$2.derToInteger = function (r) {
//   typeof r == "string" && (r = forge$j.util.createBuffer(r));
//   var e = r.length() * 8;
//   if (e > 32) throw new Error("Integer too large; max is 32-bits.");
//   return r.getSignedInt(e);
// };
// asn1$2.validate = function (r, e, t, n) {
//   var i = !1;
//   if (
//     (r.tagClass === e.tagClass || typeof e.tagClass > "u") &&
//     (r.type === e.type || typeof e.type > "u")
//   )
//     if (r.constructed === e.constructed || typeof e.constructed > "u") {
//       if (((i = !0), e.value && forge$j.util.isArray(e.value)))
//         for (var o = 0, a = 0; i && a < e.value.length; ++a)
//           (i = e.value[a].optional || !1),
//             r.value[o] &&
//               ((i = asn1$2.validate(r.value[o], e.value[a], t, n)),
//               i ? ++o : e.value[a].optional && (i = !0)),
//             !i &&
//               n &&
//               n.push(
//                 "[" +
//                   e.name +
//                   '] Tag class "' +
//                   e.tagClass +
//                   '", type "' +
//                   e.type +
//                   '" expected value length "' +
//                   e.value.length +
//                   '", got "' +
//                   r.value.length +
//                   '"'
//               );
//       if (
//         i &&
//         t &&
//         (e.capture && (t[e.capture] = r.value),
//         e.captureAsn1 && (t[e.captureAsn1] = r),
//         e.captureBitStringContents &&
//           "bitStringContents" in r &&
//           (t[e.captureBitStringContents] = r.bitStringContents),
//         e.captureBitStringValue && "bitStringContents" in r)
//       )
//         if (r.bitStringContents.length < 2) t[e.captureBitStringValue] = "";
//         else {
//           var c = r.bitStringContents.charCodeAt(0);
//           if (c !== 0)
//             throw new Error(
//               "captureBitStringValue only supported for zero unused bits"
//             );
//           t[e.captureBitStringValue] = r.bitStringContents.slice(1);
//         }
//     } else
//       n &&
//         n.push(
//           "[" +
//             e.name +
//             '] Expected constructed "' +
//             e.constructed +
//             '", got "' +
//             r.constructed +
//             '"'
//         );
//   else
//     n &&
//       (r.tagClass !== e.tagClass &&
//         n.push(
//           "[" +
//             e.name +
//             '] Expected tag class "' +
//             e.tagClass +
//             '", got "' +
//             r.tagClass +
//             '"'
//         ),
//       r.type !== e.type &&
//         n.push(
//           "[" +
//             e.name +
//             '] Expected type "' +
//             e.type +
//             '", got "' +
//             r.type +
//             '"'
//         ));
//   return i;
// };
// var _nonLatinRegex = /[^\\u0000-\\u00ff]/;
// asn1$2.prettyPrint = function (r, e, t) {
//   var n = "";
//   (e = e || 0),
//     (t = t || 2),
//     e > 0 &&
//       (n += `
// `);
//   for (var i = "", o = 0; o < e * t; ++o) i += " ";
//   switch (((n += i + "Tag: "), r.tagClass)) {
//     case asn1$2.Class.UNIVERSAL:
//       n += "Universal:";
//       break;
//     case asn1$2.Class.APPLICATION:
//       n += "Application:";
//       break;
//     case asn1$2.Class.CONTEXT_SPECIFIC:
//       n += "Context-Specific:";
//       break;
//     case asn1$2.Class.PRIVATE:
//       n += "Private:";
//       break;
//   }
//   if (r.tagClass === asn1$2.Class.UNIVERSAL)
//     switch (((n += r.type), r.type)) {
//       case asn1$2.Type.NONE:
//         n += " (None)";
//         break;
//       case asn1$2.Type.BOOLEAN:
//         n += " (Boolean)";
//         break;
//       case asn1$2.Type.INTEGER:
//         n += " (Integer)";
//         break;
//       case asn1$2.Type.BITSTRING:
//         n += " (Bit string)";
//         break;
//       case asn1$2.Type.OCTETSTRING:
//         n += " (Octet string)";
//         break;
//       case asn1$2.Type.NULL:
//         n += " (Null)";
//         break;
//       case asn1$2.Type.OID:
//         n += " (Object Identifier)";
//         break;
//       case asn1$2.Type.ODESC:
//         n += " (Object Descriptor)";
//         break;
//       case asn1$2.Type.EXTERNAL:
//         n += " (External or Instance of)";
//         break;
//       case asn1$2.Type.REAL:
//         n += " (Real)";
//         break;
//       case asn1$2.Type.ENUMERATED:
//         n += " (Enumerated)";
//         break;
//       case asn1$2.Type.EMBEDDED:
//         n += " (Embedded PDV)";
//         break;
//       case asn1$2.Type.UTF8:
//         n += " (UTF8)";
//         break;
//       case asn1$2.Type.ROID:
//         n += " (Relative Object Identifier)";
//         break;
//       case asn1$2.Type.SEQUENCE:
//         n += " (Sequence)";
//         break;
//       case asn1$2.Type.SET:
//         n += " (Set)";
//         break;
//       case asn1$2.Type.PRINTABLESTRING:
//         n += " (Printable String)";
//         break;
//       case asn1$2.Type.IA5String:
//         n += " (IA5String (ASCII))";
//         break;
//       case asn1$2.Type.UTCTIME:
//         n += " (UTC time)";
//         break;
//       case asn1$2.Type.GENERALIZEDTIME:
//         n += " (Generalized time)";
//         break;
//       case asn1$2.Type.BMPSTRING:
//         n += " (BMP String)";
//         break;
//     }
//   else n += r.type;
//   if (
//     ((n += `
// `),
//     (n +=
//       i +
//       "Constructed: " +
//       r.constructed +
//       `
// `),
//     r.composed)
//   ) {
//     for (var a = 0, c = "", o = 0; o < r.value.length; ++o)
//       r.value[o] !== void 0 &&
//         ((a += 1),
//         (c += asn1$2.prettyPrint(r.value[o], e + 1, t)),
//         o + 1 < r.value.length && (c += ","));
//     n += i + "Sub values: " + a + c;
//   } else {
//     if (((n += i + "Value: "), r.type === asn1$2.Type.OID)) {
//       var u = asn1$2.derToOid(r.value);
//       (n += u),
//         forge$j.pki &&
//           forge$j.pki.oids &&
//           u in forge$j.pki.oids &&
//           (n += " (" + forge$j.pki.oids[u] + ") ");
//     }
//     if (r.type === asn1$2.Type.INTEGER)
//       try {
//         n += asn1$2.derToInteger(r.value);
//       } catch {
//         n += "0x" + forge$j.util.bytesToHex(r.value);
//       }
//     else if (r.type === asn1$2.Type.BITSTRING) {
//       if (
//         (r.value.length > 1
//           ? (n += "0x" + forge$j.util.bytesToHex(r.value.slice(1)))
//           : (n += "(none)"),
//         r.value.length > 0)
//       ) {
//         var l = r.value.charCodeAt(0);
//         l == 1
//           ? (n += " (1 unused bit shown)")
//           : l > 1 && (n += " (" + l + " unused bits shown)");
//       }
//     } else if (r.type === asn1$2.Type.OCTETSTRING)
//       _nonLatinRegex.test(r.value) || (n += "(" + r.value + ") "),
//         (n += "0x" + forge$j.util.bytesToHex(r.value));
//     else if (r.type === asn1$2.Type.UTF8)
//       try {
//         n += forge$j.util.decodeUtf8(r.value);
//       } catch (h) {
//         if (h.message === "URI malformed")
//           n += "0x" + forge$j.util.bytesToHex(r.value) + " (malformed UTF8)";
//         else throw h;
//       }
//     else
//       r.type === asn1$2.Type.PRINTABLESTRING || r.type === asn1$2.Type.IA5String
//         ? (n += r.value)
//         : _nonLatinRegex.test(r.value)
//         ? (n += "0x" + forge$j.util.bytesToHex(r.value))
//         : r.value.length === 0
//         ? (n += "[null]")
//         : (n += r.value);
//   }
//   return n;
// };
// var forge$i = forge$m;
// forge$i.cipher = forge$i.cipher || {};
// forge$i.cipher.algorithms = forge$i.cipher.algorithms || {};
// forge$i.cipher.createCipher = function (r, e) {
//   var t = r;
//   if (
//     (typeof t == "string" &&
//       ((t = forge$i.cipher.getAlgorithm(t)), t && (t = t())),
//     !t)
//   )
//     throw new Error("Unsupported algorithm: " + r);
//   return new forge$i.cipher.BlockCipher({
//     algorithm: t,
//     key: e,
//     decrypt: !1,
//   });
// };
// forge$i.cipher.createDecipher = function (r, e) {
//   var t = r;
//   if (
//     (typeof t == "string" &&
//       ((t = forge$i.cipher.getAlgorithm(t)), t && (t = t())),
//     !t)
//   )
//     throw new Error("Unsupported algorithm: " + r);
//   return new forge$i.cipher.BlockCipher({
//     algorithm: t,
//     key: e,
//     decrypt: !0,
//   });
// };
// forge$i.cipher.registerAlgorithm = function (r, e) {
//   (r = r.toUpperCase()), (forge$i.cipher.algorithms[r] = e);
// };
// forge$i.cipher.getAlgorithm = function (r) {
//   return (
//     (r = r.toUpperCase()),
//     r in forge$i.cipher.algorithms ? forge$i.cipher.algorithms[r] : null
//   );
// };
// var BlockCipher = (forge$i.cipher.BlockCipher = function (r) {
//   (this.algorithm = r.algorithm),
//     (this.mode = this.algorithm.mode),
//     (this.blockSize = this.mode.blockSize),
//     (this._finish = !1),
//     (this._input = null),
//     (this.output = null),
//     (this._op = r.decrypt ? this.mode.decrypt : this.mode.encrypt),
//     (this._decrypt = r.decrypt),
//     this.algorithm.initialize(r);
// });
// BlockCipher.prototype.start = function (r) {
//   r = r || {};
//   var e = {};
//   for (var t in r) e[t] = r[t];
//   (e.decrypt = this._decrypt),
//     (this._finish = !1),
//     (this._input = forge$i.util.createBuffer()),
//     (this.output = r.output || forge$i.util.createBuffer()),
//     this.mode.start(e);
// };
// BlockCipher.prototype.update = function (r) {
//   for (
//     r && this._input.putBuffer(r);
//     !this._op.call(this.mode, this._input, this.output, this._finish) &&
//     !this._finish;

//   );
//   this._input.compact();
// };
// BlockCipher.prototype.finish = function (r) {
//   r &&
//     (this.mode.name === "ECB" || this.mode.name === "CBC") &&
//     ((this.mode.pad = function (t) {
//       return r(this.blockSize, t, !1);
//     }),
//     (this.mode.unpad = function (t) {
//       return r(this.blockSize, t, !0);
//     }));
//   var e = {};
//   return (
//     (e.decrypt = this._decrypt),
//     (e.overflow = this._input.length() % this.blockSize),
//     !(
//       (!this._decrypt && this.mode.pad && !this.mode.pad(this._input, e)) ||
//       ((this._finish = !0),
//       this.update(),
//       this._decrypt && this.mode.unpad && !this.mode.unpad(this.output, e)) ||
//       (this.mode.afterFinish && !this.mode.afterFinish(this.output, e))
//     )
//   );
// };
// var forge$h = forge$m;
// forge$h.cipher = forge$h.cipher || {};
// var modes = (forge$h.cipher.modes = forge$h.cipher.modes || {});
// modes.ecb = function (r) {
//   (r = r || {}),
//     (this.name = "ECB"),
//     (this.cipher = r.cipher),
//     (this.blockSize = r.blockSize || 16),
//     (this._ints = this.blockSize / 4),
//     (this._inBlock = new Array(this._ints)),
//     (this._outBlock = new Array(this._ints));
// };
// modes.ecb.prototype.start = function (r) {};
// modes.ecb.prototype.encrypt = function (r, e, t) {
//   if (r.length() < this.blockSize && !(t && r.length() > 0)) return !0;
//   for (var n = 0; n < this._ints; ++n) this._inBlock[n] = r.getInt32();
//   this.cipher.encrypt(this._inBlock, this._outBlock);
//   for (var n = 0; n < this._ints; ++n) e.putInt32(this._outBlock[n]);
// };
// modes.ecb.prototype.decrypt = function (r, e, t) {
//   if (r.length() < this.blockSize && !(t && r.length() > 0)) return !0;
//   for (var n = 0; n < this._ints; ++n) this._inBlock[n] = r.getInt32();
//   this.cipher.decrypt(this._inBlock, this._outBlock);
//   for (var n = 0; n < this._ints; ++n) e.putInt32(this._outBlock[n]);
// };
// modes.ecb.prototype.pad = function (r, e) {
//   var t =
//     r.length() === this.blockSize
//       ? this.blockSize
//       : this.blockSize - r.length();
//   return r.fillWithByte(t, t), !0;
// };
// modes.ecb.prototype.unpad = function (r, e) {
//   if (e.overflow > 0) return !1;
//   var t = r.length(),
//     n = r.at(t - 1);
//   return n > this.blockSize << 2 ? !1 : (r.truncate(n), !0);
// };
// modes.cbc = function (r) {
//   (r = r || {}),
//     (this.name = "CBC"),
//     (this.cipher = r.cipher),
//     (this.blockSize = r.blockSize || 16),
//     (this._ints = this.blockSize / 4),
//     (this._inBlock = new Array(this._ints)),
//     (this._outBlock = new Array(this._ints));
// };
// modes.cbc.prototype.start = function (r) {
//   if (r.iv === null) {
//     if (!this._prev) throw new Error("Invalid IV parameter.");
//     this._iv = this._prev.slice(0);
//   } else if ("iv" in r)
//     (this._iv = transformIV(r.iv, this.blockSize)),
//       (this._prev = this._iv.slice(0));
//   else throw new Error("Invalid IV parameter.");
// };
// modes.cbc.prototype.encrypt = function (r, e, t) {
//   if (r.length() < this.blockSize && !(t && r.length() > 0)) return !0;
//   for (var n = 0; n < this._ints; ++n)
//     this._inBlock[n] = this._prev[n] ^ r.getInt32();
//   this.cipher.encrypt(this._inBlock, this._outBlock);
//   for (var n = 0; n < this._ints; ++n) e.putInt32(this._outBlock[n]);
//   this._prev = this._outBlock;
// };
// modes.cbc.prototype.decrypt = function (r, e, t) {
//   if (r.length() < this.blockSize && !(t && r.length() > 0)) return !0;
//   for (var n = 0; n < this._ints; ++n) this._inBlock[n] = r.getInt32();
//   this.cipher.decrypt(this._inBlock, this._outBlock);
//   for (var n = 0; n < this._ints; ++n)
//     e.putInt32(this._prev[n] ^ this._outBlock[n]);
//   this._prev = this._inBlock.slice(0);
// };
// modes.cbc.prototype.pad = function (r, e) {
//   var t =
//     r.length() === this.blockSize
//       ? this.blockSize
//       : this.blockSize - r.length();
//   return r.fillWithByte(t, t), !0;
// };
// modes.cbc.prototype.unpad = function (r, e) {
//   if (e.overflow > 0) return !1;
//   var t = r.length(),
//     n = r.at(t - 1);
//   return n > this.blockSize << 2 ? !1 : (r.truncate(n), !0);
// };
// modes.cfb = function (r) {
//   (r = r || {}),
//     (this.name = "CFB"),
//     (this.cipher = r.cipher),
//     (this.blockSize = r.blockSize || 16),
//     (this._ints = this.blockSize / 4),
//     (this._inBlock = null),
//     (this._outBlock = new Array(this._ints)),
//     (this._partialBlock = new Array(this._ints)),
//     (this._partialOutput = forge$h.util.createBuffer()),
//     (this._partialBytes = 0);
// };
// modes.cfb.prototype.start = function (r) {
//   if (!("iv" in r)) throw new Error("Invalid IV parameter.");
//   (this._iv = transformIV(r.iv, this.blockSize)),
//     (this._inBlock = this._iv.slice(0)),
//     (this._partialBytes = 0);
// };
// modes.cfb.prototype.encrypt = function (r, e, t) {
//   var n = r.length();
//   if (n === 0) return !0;
//   if (
//     (this.cipher.encrypt(this._inBlock, this._outBlock),
//     this._partialBytes === 0 && n >= this.blockSize)
//   ) {
//     for (var i = 0; i < this._ints; ++i)
//       (this._inBlock[i] = r.getInt32() ^ this._outBlock[i]),
//         e.putInt32(this._inBlock[i]);
//     return;
//   }
//   var o = (this.blockSize - n) % this.blockSize;
//   o > 0 && (o = this.blockSize - o), this._partialOutput.clear();
//   for (var i = 0; i < this._ints; ++i)
//     (this._partialBlock[i] = r.getInt32() ^ this._outBlock[i]),
//       this._partialOutput.putInt32(this._partialBlock[i]);
//   if (o > 0) r.read -= this.blockSize;
//   else
//     for (var i = 0; i < this._ints; ++i)
//       this._inBlock[i] = this._partialBlock[i];
//   if (
//     (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes),
//     o > 0 && !t)
//   )
//     return (
//       e.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
//       (this._partialBytes = o),
//       !0
//     );
//   e.putBytes(this._partialOutput.getBytes(n - this._partialBytes)),
//     (this._partialBytes = 0);
// };
// modes.cfb.prototype.decrypt = function (r, e, t) {
//   var n = r.length();
//   if (n === 0) return !0;
//   if (
//     (this.cipher.encrypt(this._inBlock, this._outBlock),
//     this._partialBytes === 0 && n >= this.blockSize)
//   ) {
//     for (var i = 0; i < this._ints; ++i)
//       (this._inBlock[i] = r.getInt32()),
//         e.putInt32(this._inBlock[i] ^ this._outBlock[i]);
//     return;
//   }
//   var o = (this.blockSize - n) % this.blockSize;
//   o > 0 && (o = this.blockSize - o), this._partialOutput.clear();
//   for (var i = 0; i < this._ints; ++i)
//     (this._partialBlock[i] = r.getInt32()),
//       this._partialOutput.putInt32(this._partialBlock[i] ^ this._outBlock[i]);
//   if (o > 0) r.read -= this.blockSize;
//   else
//     for (var i = 0; i < this._ints; ++i)
//       this._inBlock[i] = this._partialBlock[i];
//   if (
//     (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes),
//     o > 0 && !t)
//   )
//     return (
//       e.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
//       (this._partialBytes = o),
//       !0
//     );
//   e.putBytes(this._partialOutput.getBytes(n - this._partialBytes)),
//     (this._partialBytes = 0);
// };
// modes.ofb = function (r) {
//   (r = r || {}),
//     (this.name = "OFB"),
//     (this.cipher = r.cipher),
//     (this.blockSize = r.blockSize || 16),
//     (this._ints = this.blockSize / 4),
//     (this._inBlock = null),
//     (this._outBlock = new Array(this._ints)),
//     (this._partialOutput = forge$h.util.createBuffer()),
//     (this._partialBytes = 0);
// };
// modes.ofb.prototype.start = function (r) {
//   if (!("iv" in r)) throw new Error("Invalid IV parameter.");
//   (this._iv = transformIV(r.iv, this.blockSize)),
//     (this._inBlock = this._iv.slice(0)),
//     (this._partialBytes = 0);
// };
// modes.ofb.prototype.encrypt = function (r, e, t) {
//   var n = r.length();
//   if (r.length() === 0) return !0;
//   if (
//     (this.cipher.encrypt(this._inBlock, this._outBlock),
//     this._partialBytes === 0 && n >= this.blockSize)
//   ) {
//     for (var i = 0; i < this._ints; ++i)
//       e.putInt32(r.getInt32() ^ this._outBlock[i]),
//         (this._inBlock[i] = this._outBlock[i]);
//     return;
//   }
//   var o = (this.blockSize - n) % this.blockSize;
//   o > 0 && (o = this.blockSize - o), this._partialOutput.clear();
//   for (var i = 0; i < this._ints; ++i)
//     this._partialOutput.putInt32(r.getInt32() ^ this._outBlock[i]);
//   if (o > 0) r.read -= this.blockSize;
//   else
//     for (var i = 0; i < this._ints; ++i) this._inBlock[i] = this._outBlock[i];
//   if (
//     (this._partialBytes > 0 && this._partialOutput.getBytes(this._partialBytes),
//     o > 0 && !t)
//   )
//     return (
//       e.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
//       (this._partialBytes = o),
//       !0
//     );
//   e.putBytes(this._partialOutput.getBytes(n - this._partialBytes)),
//     (this._partialBytes = 0);
// };
// modes.ofb.prototype.decrypt = modes.ofb.prototype.encrypt;
// modes.ctr = function (r) {
//   (r = r || {}),
//     (this.name = "CTR"),
//     (this.cipher = r.cipher),
//     (this.blockSize = r.blockSize || 16),
//     (this._ints = this.blockSize / 4),
//     (this._inBlock = null),
//     (this._outBlock = new Array(this._ints)),
//     (this._partialOutput = forge$h.util.createBuffer()),
//     (this._partialBytes = 0);
// };
// modes.ctr.prototype.start = function (r) {
//   if (!("iv" in r)) throw new Error("Invalid IV parameter.");
//   (this._iv = transformIV(r.iv, this.blockSize)),
//     (this._inBlock = this._iv.slice(0)),
//     (this._partialBytes = 0);
// };
// modes.ctr.prototype.encrypt = function (r, e, t) {
//   var n = r.length();
//   if (n === 0) return !0;
//   if (
//     (this.cipher.encrypt(this._inBlock, this._outBlock),
//     this._partialBytes === 0 && n >= this.blockSize)
//   )
//     for (var i = 0; i < this._ints; ++i)
//       e.putInt32(r.getInt32() ^ this._outBlock[i]);
//   else {
//     var o = (this.blockSize - n) % this.blockSize;
//     o > 0 && (o = this.blockSize - o), this._partialOutput.clear();
//     for (var i = 0; i < this._ints; ++i)
//       this._partialOutput.putInt32(r.getInt32() ^ this._outBlock[i]);
//     if (
//       (o > 0 && (r.read -= this.blockSize),
//       this._partialBytes > 0 &&
//         this._partialOutput.getBytes(this._partialBytes),
//       o > 0 && !t)
//     )
//       return (
//         e.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
//         (this._partialBytes = o),
//         !0
//       );
//     e.putBytes(this._partialOutput.getBytes(n - this._partialBytes)),
//       (this._partialBytes = 0);
//   }
//   inc32(this._inBlock);
// };
// modes.ctr.prototype.decrypt = modes.ctr.prototype.encrypt;
// modes.gcm = function (r) {
//   (r = r || {}),
//     (this.name = "GCM"),
//     (this.cipher = r.cipher),
//     (this.blockSize = r.blockSize || 16),
//     (this._ints = this.blockSize / 4),
//     (this._inBlock = new Array(this._ints)),
//     (this._outBlock = new Array(this._ints)),
//     (this._partialOutput = forge$h.util.createBuffer()),
//     (this._partialBytes = 0),
//     (this._R = 3774873600);
// };
// modes.gcm.prototype.start = function (r) {
//   if (!("iv" in r)) throw new Error("Invalid IV parameter.");
//   var e = forge$h.util.createBuffer(r.iv);
//   this._cipherLength = 0;
//   var t;
//   if (
//     ("additionalData" in r
//       ? (t = forge$h.util.createBuffer(r.additionalData))
//       : (t = forge$h.util.createBuffer()),
//     "tagLength" in r
//       ? (this._tagLength = r.tagLength)
//       : (this._tagLength = 128),
//     (this._tag = null),
//     r.decrypt &&
//       ((this._tag = forge$h.util.createBuffer(r.tag).getBytes()),
//       this._tag.length !== this._tagLength / 8))
//   )
//     throw new Error("Authentication tag does not match tag length.");
//   (this._hashBlock = new Array(this._ints)),
//     (this.tag = null),
//     (this._hashSubkey = new Array(this._ints)),
//     this.cipher.encrypt([0, 0, 0, 0], this._hashSubkey),
//     (this.componentBits = 4),
//     (this._m = this.generateHashTable(this._hashSubkey, this.componentBits));
//   var n = e.length();
//   if (n === 12) this._j0 = [e.getInt32(), e.getInt32(), e.getInt32(), 1];
//   else {
//     for (this._j0 = [0, 0, 0, 0]; e.length() > 0; )
//       this._j0 = this.ghash(this._hashSubkey, this._j0, [
//         e.getInt32(),
//         e.getInt32(),
//         e.getInt32(),
//         e.getInt32(),
//       ]);
//     this._j0 = this.ghash(
//       this._hashSubkey,
//       this._j0,
//       [0, 0].concat(from64To32(n * 8))
//     );
//   }
//   (this._inBlock = this._j0.slice(0)),
//     inc32(this._inBlock),
//     (this._partialBytes = 0),
//     (t = forge$h.util.createBuffer(t)),
//     (this._aDataLength = from64To32(t.length() * 8));
//   var i = t.length() % this.blockSize;
//   for (
//     i && t.fillWithByte(0, this.blockSize - i), this._s = [0, 0, 0, 0];
//     t.length() > 0;

//   )
//     this._s = this.ghash(this._hashSubkey, this._s, [
//       t.getInt32(),
//       t.getInt32(),
//       t.getInt32(),
//       t.getInt32(),
//     ]);
// };
// modes.gcm.prototype.encrypt = function (r, e, t) {
//   var n = r.length();
//   if (n === 0) return !0;
//   if (
//     (this.cipher.encrypt(this._inBlock, this._outBlock),
//     this._partialBytes === 0 && n >= this.blockSize)
//   ) {
//     for (var i = 0; i < this._ints; ++i)
//       e.putInt32((this._outBlock[i] ^= r.getInt32()));
//     this._cipherLength += this.blockSize;
//   } else {
//     var o = (this.blockSize - n) % this.blockSize;
//     o > 0 && (o = this.blockSize - o), this._partialOutput.clear();
//     for (var i = 0; i < this._ints; ++i)
//       this._partialOutput.putInt32(r.getInt32() ^ this._outBlock[i]);
//     if (o <= 0 || t) {
//       if (t) {
//         var a = n % this.blockSize;
//         (this._cipherLength += a),
//           this._partialOutput.truncate(this.blockSize - a);
//       } else this._cipherLength += this.blockSize;
//       for (var i = 0; i < this._ints; ++i)
//         this._outBlock[i] = this._partialOutput.getInt32();
//       this._partialOutput.read -= this.blockSize;
//     }
//     if (
//       (this._partialBytes > 0 &&
//         this._partialOutput.getBytes(this._partialBytes),
//       o > 0 && !t)
//     )
//       return (
//         (r.read -= this.blockSize),
//         e.putBytes(this._partialOutput.getBytes(o - this._partialBytes)),
//         (this._partialBytes = o),
//         !0
//       );
//     e.putBytes(this._partialOutput.getBytes(n - this._partialBytes)),
//       (this._partialBytes = 0);
//   }
//   (this._s = this.ghash(this._hashSubkey, this._s, this._outBlock)),
//     inc32(this._inBlock);
// };
// modes.gcm.prototype.decrypt = function (r, e, t) {
//   var n = r.length();
//   if (n < this.blockSize && !(t && n > 0)) return !0;
//   this.cipher.encrypt(this._inBlock, this._outBlock),
//     inc32(this._inBlock),
//     (this._hashBlock[0] = r.getInt32()),
//     (this._hashBlock[1] = r.getInt32()),
//     (this._hashBlock[2] = r.getInt32()),
//     (this._hashBlock[3] = r.getInt32()),
//     (this._s = this.ghash(this._hashSubkey, this._s, this._hashBlock));
//   for (var i = 0; i < this._ints; ++i)
//     e.putInt32(this._outBlock[i] ^ this._hashBlock[i]);
//   n < this.blockSize
//     ? (this._cipherLength += n % this.blockSize)
//     : (this._cipherLength += this.blockSize);
// };
// modes.gcm.prototype.afterFinish = function (r, e) {
//   var t = !0;
//   e.decrypt && e.overflow && r.truncate(this.blockSize - e.overflow),
//     (this.tag = forge$h.util.createBuffer());
//   var n = this._aDataLength.concat(from64To32(this._cipherLength * 8));
//   this._s = this.ghash(this._hashSubkey, this._s, n);
//   var i = [];
//   this.cipher.encrypt(this._j0, i);
//   for (var o = 0; o < this._ints; ++o) this.tag.putInt32(this._s[o] ^ i[o]);
//   return (
//     this.tag.truncate(this.tag.length() % (this._tagLength / 8)),
//     e.decrypt && this.tag.bytes() !== this._tag && (t = !1),
//     t
//   );
// };
// modes.gcm.prototype.multiply = function (r, e) {
//   for (var t = [0, 0, 0, 0], n = e.slice(0), i = 0; i < 128; ++i) {
//     var o = r[(i / 32) | 0] & (1 << (31 - (i % 32)));
//     o && ((t[0] ^= n[0]), (t[1] ^= n[1]), (t[2] ^= n[2]), (t[3] ^= n[3])),
//       this.pow(n, n);
//   }
//   return t;
// };
// modes.gcm.prototype.pow = function (r, e) {
//   for (var t = r[3] & 1, n = 3; n > 0; --n)
//     e[n] = (r[n] >>> 1) | ((r[n - 1] & 1) << 31);
//   (e[0] = r[0] >>> 1), t && (e[0] ^= this._R);
// };
// modes.gcm.prototype.tableMultiply = function (r) {
//   for (var e = [0, 0, 0, 0], t = 0; t < 32; ++t) {
//     var n = (t / 8) | 0,
//       i = (r[n] >>> ((7 - (t % 8)) * 4)) & 15,
//       o = this._m[t][i];
//     (e[0] ^= o[0]), (e[1] ^= o[1]), (e[2] ^= o[2]), (e[3] ^= o[3]);
//   }
//   return e;
// };
// modes.gcm.prototype.ghash = function (r, e, t) {
//   return (
//     (e[0] ^= t[0]),
//     (e[1] ^= t[1]),
//     (e[2] ^= t[2]),
//     (e[3] ^= t[3]),
//     this.tableMultiply(e)
//   );
// };
// modes.gcm.prototype.generateHashTable = function (r, e) {
//   for (
//     var t = 8 / e, n = 4 * t, i = 16 * t, o = new Array(i), a = 0;
//     a < i;
//     ++a
//   ) {
//     var c = [0, 0, 0, 0],
//       u = (a / n) | 0,
//       l = (n - 1 - (a % n)) * e;
//     (c[u] = (1 << (e - 1)) << l),
//       (o[a] = this.generateSubHashTable(this.multiply(c, r), e));
//   }
//   return o;
// };
// modes.gcm.prototype.generateSubHashTable = function (r, e) {
//   var t = 1 << e,
//     n = t >>> 1,
//     i = new Array(t);
//   i[n] = r.slice(0);
//   for (var o = n >>> 1; o > 0; ) this.pow(i[2 * o], (i[o] = [])), (o >>= 1);
//   for (o = 2; o < n; ) {
//     for (var a = 1; a < o; ++a) {
//       var c = i[o],
//         u = i[a];
//       i[o + a] = [c[0] ^ u[0], c[1] ^ u[1], c[2] ^ u[2], c[3] ^ u[3]];
//     }
//     o *= 2;
//   }
//   for (i[0] = [0, 0, 0, 0], o = n + 1; o < t; ++o) {
//     var l = i[o ^ n];
//     i[o] = [r[0] ^ l[0], r[1] ^ l[1], r[2] ^ l[2], r[3] ^ l[3]];
//   }
//   return i;
// };
// function transformIV(r, e) {
//   if (
//     (typeof r == "string" && (r = forge$h.util.createBuffer(r)),
//     forge$h.util.isArray(r) && r.length > 4)
//   ) {
//     var t = r;
//     r = forge$h.util.createBuffer();
//     for (var n = 0; n < t.length; ++n) r.putByte(t[n]);
//   }
//   if (r.length() < e)
//     throw new Error(
//       "Invalid IV length; got " +
//         r.length() +
//         " bytes and expected " +
//         e +
//         " bytes."
//     );
//   if (!forge$h.util.isArray(r)) {
//     for (var i = [], o = e / 4, n = 0; n < o; ++n) i.push(r.getInt32());
//     r = i;
//   }
//   return r;
// }
// function inc32(r) {
//   r[r.length - 1] = (r[r.length - 1] + 1) & 4294967295;
// }
// function from64To32(r) {
//   return [(r / 4294967296) | 0, r & 4294967295];
// }
// var forge$g = forge$m;
// forge$g.aes = forge$g.aes || {};
// forge$g.aes.startEncrypting = function (r, e, t, n) {
//   var i = _createCipher$1({
//     key: r,
//     output: t,
//     decrypt: !1,
//     mode: n,
//   });
//   return i.start(e), i;
// };
// forge$g.aes.createEncryptionCipher = function (r, e) {
//   return _createCipher$1({
//     key: r,
//     output: null,
//     decrypt: !1,
//     mode: e,
//   });
// };
// forge$g.aes.startDecrypting = function (r, e, t, n) {
//   var i = _createCipher$1({
//     key: r,
//     output: t,
//     decrypt: !0,
//     mode: n,
//   });
//   return i.start(e), i;
// };
// forge$g.aes.createDecryptionCipher = function (r, e) {
//   return _createCipher$1({
//     key: r,
//     output: null,
//     decrypt: !0,
//     mode: e,
//   });
// };
// forge$g.aes.Algorithm = function (r, e) {
//   init$1 || initialize$1();
//   var t = this;
//   (t.name = r),
//     (t.mode = new e({
//       blockSize: 16,
//       cipher: {
//         encrypt: function (n, i) {
//           return _updateBlock$1(t._w, n, i, !1);
//         },
//         decrypt: function (n, i) {
//           return _updateBlock$1(t._w, n, i, !0);
//         },
//       },
//     })),
//     (t._init = !1);
// };
// forge$g.aes.Algorithm.prototype.initialize = function (r) {
//   if (!this._init) {
//     var e = r.key,
//       t;
//     if (
//       typeof e == "string" &&
//       (e.length === 16 || e.length === 24 || e.length === 32)
//     )
//       e = forge$g.util.createBuffer(e);
//     else if (
//       forge$g.util.isArray(e) &&
//       (e.length === 16 || e.length === 24 || e.length === 32)
//     ) {
//       (t = e), (e = forge$g.util.createBuffer());
//       for (var n = 0; n < t.length; ++n) e.putByte(t[n]);
//     }
//     if (!forge$g.util.isArray(e)) {
//       (t = e), (e = []);
//       var i = t.length();
//       if (i === 16 || i === 24 || i === 32) {
//         i = i >>> 2;
//         for (var n = 0; n < i; ++n) e.push(t.getInt32());
//       }
//     }
//     if (
//       !forge$g.util.isArray(e) ||
//       !(e.length === 4 || e.length === 6 || e.length === 8)
//     )
//       throw new Error("Invalid key parameter.");
//     var o = this.mode.name,
//       a = ["CFB", "OFB", "CTR", "GCM"].indexOf(o) !== -1;
//     (this._w = _expandKey(e, r.decrypt && !a)), (this._init = !0);
//   }
// };
// forge$g.aes._expandKey = function (r, e) {
//   return init$1 || initialize$1(), _expandKey(r, e);
// };
// forge$g.aes._updateBlock = _updateBlock$1;
// registerAlgorithm$1("AES-ECB", forge$g.cipher.modes.ecb);
// registerAlgorithm$1("AES-CBC", forge$g.cipher.modes.cbc);
// registerAlgorithm$1("AES-CFB", forge$g.cipher.modes.cfb);
// registerAlgorithm$1("AES-OFB", forge$g.cipher.modes.ofb);
// registerAlgorithm$1("AES-CTR", forge$g.cipher.modes.ctr);
// registerAlgorithm$1("AES-GCM", forge$g.cipher.modes.gcm);
// function registerAlgorithm$1(r, e) {
//   var t = function () {
//     return new forge$g.aes.Algorithm(r, e);
//   };
//   forge$g.cipher.registerAlgorithm(r, t);
// }
// var init$1 = !1,
//   Nb = 4,
//   sbox,
//   isbox,
//   rcon,
//   mix,
//   imix;
// function initialize$1() {
//   (init$1 = !0), (rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]);
//   for (var r = new Array(256), e = 0; e < 128; ++e)
//     (r[e] = e << 1), (r[e + 128] = ((e + 128) << 1) ^ 283);
//   (sbox = new Array(256)),
//     (isbox = new Array(256)),
//     (mix = new Array(4)),
//     (imix = new Array(4));
//   for (var e = 0; e < 4; ++e)
//     (mix[e] = new Array(256)), (imix[e] = new Array(256));
//   for (var t = 0, n = 0, i, o, a, c, u, l, h, e = 0; e < 256; ++e) {
//     (c = n ^ (n << 1) ^ (n << 2) ^ (n << 3) ^ (n << 4)),
//       (c = (c >> 8) ^ (c & 255) ^ 99),
//       (sbox[t] = c),
//       (isbox[c] = t),
//       (u = r[c]),
//       (i = r[t]),
//       (o = r[i]),
//       (a = r[o]),
//       (l = (u << 24) ^ (c << 16) ^ (c << 8) ^ (c ^ u)),
//       (h =
//         ((i ^ o ^ a) << 24) ^
//         ((t ^ a) << 16) ^
//         ((t ^ o ^ a) << 8) ^
//         (t ^ i ^ a));
//     for (var f = 0; f < 4; ++f)
//       (mix[f][t] = l),
//         (imix[f][c] = h),
//         (l = (l << 24) | (l >>> 8)),
//         (h = (h << 24) | (h >>> 8));
//     t === 0 ? (t = n = 1) : ((t = i ^ r[r[r[i ^ a]]]), (n ^= r[r[n]]));
//   }
// }
// function _expandKey(r, e) {
//   for (
//     var t = r.slice(0),
//       n,
//       i = 1,
//       o = t.length,
//       a = o + 6 + 1,
//       c = Nb * a,
//       u = o;
//     u < c;
//     ++u
//   )
//     (n = t[u - 1]),
//       u % o === 0
//         ? ((n =
//             (sbox[(n >>> 16) & 255] << 24) ^
//             (sbox[(n >>> 8) & 255] << 16) ^
//             (sbox[n & 255] << 8) ^
//             sbox[n >>> 24] ^
//             (rcon[i] << 24)),
//           i++)
//         : o > 6 &&
//           u % o === 4 &&
//           (n =
//             (sbox[n >>> 24] << 24) ^
//             (sbox[(n >>> 16) & 255] << 16) ^
//             (sbox[(n >>> 8) & 255] << 8) ^
//             sbox[n & 255]),
//       (t[u] = t[u - o] ^ n);
//   if (e) {
//     var l,
//       h = imix[0],
//       f = imix[1],
//       d = imix[2],
//       p = imix[3],
//       g = t.slice(0);
//     c = t.length;
//     for (var u = 0, m = c - Nb; u < c; u += Nb, m -= Nb)
//       if (u === 0 || u === c - Nb)
//         (g[u] = t[m]),
//           (g[u + 1] = t[m + 3]),
//           (g[u + 2] = t[m + 2]),
//           (g[u + 3] = t[m + 1]);
//       else
//         for (var b = 0; b < Nb; ++b)
//           (l = t[m + b]),
//             (g[u + (3 & -b)] =
//               h[sbox[l >>> 24]] ^
//               f[sbox[(l >>> 16) & 255]] ^
//               d[sbox[(l >>> 8) & 255]] ^
//               p[sbox[l & 255]]);
//     t = g;
//   }
//   return t;
// }
// function _updateBlock$1(r, e, t, n) {
//   var i = r.length / 4 - 1,
//     o,
//     a,
//     c,
//     u,
//     l;
//   n
//     ? ((o = imix[0]), (a = imix[1]), (c = imix[2]), (u = imix[3]), (l = isbox))
//     : ((o = mix[0]), (a = mix[1]), (c = mix[2]), (u = mix[3]), (l = sbox));
//   var h, f, d, p, g, m, b;
//   (h = e[0] ^ r[0]),
//     (f = e[n ? 3 : 1] ^ r[1]),
//     (d = e[2] ^ r[2]),
//     (p = e[n ? 1 : 3] ^ r[3]);
//   for (var _ = 3, w = 1; w < i; ++w)
//     (g =
//       o[h >>> 24] ^
//       a[(f >>> 16) & 255] ^
//       c[(d >>> 8) & 255] ^
//       u[p & 255] ^
//       r[++_]),
//       (m =
//         o[f >>> 24] ^
//         a[(d >>> 16) & 255] ^
//         c[(p >>> 8) & 255] ^
//         u[h & 255] ^
//         r[++_]),
//       (b =
//         o[d >>> 24] ^
//         a[(p >>> 16) & 255] ^
//         c[(h >>> 8) & 255] ^
//         u[f & 255] ^
//         r[++_]),
//       (p =
//         o[p >>> 24] ^
//         a[(h >>> 16) & 255] ^
//         c[(f >>> 8) & 255] ^
//         u[d & 255] ^
//         r[++_]),
//       (h = g),
//       (f = m),
//       (d = b);
//   (t[0] =
//     (l[h >>> 24] << 24) ^
//     (l[(f >>> 16) & 255] << 16) ^
//     (l[(d >>> 8) & 255] << 8) ^
//     l[p & 255] ^
//     r[++_]),
//     (t[n ? 3 : 1] =
//       (l[f >>> 24] << 24) ^
//       (l[(d >>> 16) & 255] << 16) ^
//       (l[(p >>> 8) & 255] << 8) ^
//       l[h & 255] ^
//       r[++_]),
//     (t[2] =
//       (l[d >>> 24] << 24) ^
//       (l[(p >>> 16) & 255] << 16) ^
//       (l[(h >>> 8) & 255] << 8) ^
//       l[f & 255] ^
//       r[++_]),
//     (t[n ? 1 : 3] =
//       (l[p >>> 24] << 24) ^
//       (l[(h >>> 16) & 255] << 16) ^
//       (l[(f >>> 8) & 255] << 8) ^
//       l[d & 255] ^
//       r[++_]);
// }
// function _createCipher$1(r) {
//   r = r || {};
//   var e = (r.mode || "CBC").toUpperCase(),
//     t = "AES-" + e,
//     n;
//   r.decrypt
//     ? (n = forge$g.cipher.createDecipher(t, r.key))
//     : (n = forge$g.cipher.createCipher(t, r.key));
//   var i = n.start;
//   return (
//     (n.start = function (o, a) {
//       var c = null;
//       a instanceof forge$g.util.ByteBuffer && ((c = a), (a = {})),
//         (a = a || {}),
//         (a.output = c),
//         (a.iv = o),
//         i.call(n, a);
//     }),
//     n
//   );
// }
// var forge$f = forge$m;
// forge$f.des = forge$f.des || {};
// forge$f.des.startEncrypting = function (r, e, t, n) {
//   var i = _createCipher({
//     key: r,
//     output: t,
//     decrypt: !1,
//     mode: n || (e === null ? "ECB" : "CBC"),
//   });
//   return i.start(e), i;
// };
// forge$f.des.createEncryptionCipher = function (r, e) {
//   return _createCipher({
//     key: r,
//     output: null,
//     decrypt: !1,
//     mode: e,
//   });
// };
// forge$f.des.startDecrypting = function (r, e, t, n) {
//   var i = _createCipher({
//     key: r,
//     output: t,
//     decrypt: !0,
//     mode: n || (e === null ? "ECB" : "CBC"),
//   });
//   return i.start(e), i;
// };
// forge$f.des.createDecryptionCipher = function (r, e) {
//   return _createCipher({
//     key: r,
//     output: null,
//     decrypt: !0,
//     mode: e,
//   });
// };
// forge$f.des.Algorithm = function (r, e) {
//   var t = this;
//   (t.name = r),
//     (t.mode = new e({
//       blockSize: 8,
//       cipher: {
//         encrypt: function (n, i) {
//           return _updateBlock(t._keys, n, i, !1);
//         },
//         decrypt: function (n, i) {
//           return _updateBlock(t._keys, n, i, !0);
//         },
//       },
//     })),
//     (t._init = !1);
// };
// forge$f.des.Algorithm.prototype.initialize = function (r) {
//   if (!this._init) {
//     var e = forge$f.util.createBuffer(r.key);
//     if (this.name.indexOf("3DES") === 0 && e.length() !== 24)
//       throw new Error("Invalid Triple-DES key size: " + e.length() * 8);
//     (this._keys = _createKeys(e)), (this._init = !0);
//   }
// };
// registerAlgorithm("DES-ECB", forge$f.cipher.modes.ecb);
// registerAlgorithm("DES-CBC", forge$f.cipher.modes.cbc);
// registerAlgorithm("DES-CFB", forge$f.cipher.modes.cfb);
// registerAlgorithm("DES-OFB", forge$f.cipher.modes.ofb);
// registerAlgorithm("DES-CTR", forge$f.cipher.modes.ctr);
// registerAlgorithm("3DES-ECB", forge$f.cipher.modes.ecb);
// registerAlgorithm("3DES-CBC", forge$f.cipher.modes.cbc);
// registerAlgorithm("3DES-CFB", forge$f.cipher.modes.cfb);
// registerAlgorithm("3DES-OFB", forge$f.cipher.modes.ofb);
// registerAlgorithm("3DES-CTR", forge$f.cipher.modes.ctr);
// function registerAlgorithm(r, e) {
//   var t = function () {
//     return new forge$f.des.Algorithm(r, e);
//   };
//   forge$f.cipher.registerAlgorithm(r, t);
// }
// var spfunction1 = [
//     16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776,
//     16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240,
//     66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220,
//     65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776,
//     16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4,
//     16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564,
//     16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756,
//   ],
//   spfunction2 = [
//     -2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040,
//     -2147450848, -2147483616, -2146402272, -2146402304, -2147483648,
//     -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0,
//     -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344,
//     32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576,
//     -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32,
//     -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576,
//     -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0,
//     -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344,
//   ],
//   spfunction3 = [
//     520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080,
//     134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728,
//     8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584,
//     131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728,
//     131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320,
//     134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728,
//     134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520,
//     134348800, 131592, 8, 134348808, 131584,
//   ],
//   spfunction4 = [
//     8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800,
//     8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128,
//     8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129,
//     8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736,
//     8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193,
//     8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928,
//   ],
//   spfunction5 = [
//     256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720,
//     1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544,
//     1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800,
//     1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976,
//     33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824,
//     34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544,
//     34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544,
//     1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544,
//     33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080,
//   ],
//   spfunction6 = [
//     536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304,
//     536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912,
//     16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232,
//     541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912,
//     536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928,
//     4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688,
//     541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704,
//     16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312,
//   ],
//   spfunction7 = [
//     2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066,
//     2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202,
//     2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048,
//     2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152,
//     67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912,
//     2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066,
//     69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866,
//     67110912, 2048, 2097154,
//   ],
//   spfunction8 = [
//     268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456,
//     262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64,
//     268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696,
//     4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144,
//     268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520,
//     268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208,
//     268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240,
//     4160, 4160, 262208, 268435456, 268701696,
//   ];
// function _createKeys(r) {
//   for (
//     var e = [
//         0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512,
//         516, 536871424, 536871428, 66048, 66052, 536936960, 536936964,
//       ],
//       t = [
//         0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256,
//         257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697,
//       ],
//       n = [
//         0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048,
//         2056, 16777216, 16777224, 16779264, 16779272,
//       ],
//       i = [
//         0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072,
//         131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992,
//         136454144,
//       ],
//       o = [
//         0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112,
//         266256, 4096, 266240, 4112, 266256,
//       ],
//       a = [
//         0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464,
//         33555488, 33554432, 33555456, 33554464, 33555488,
//       ],
//       c = [
//         0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0,
//         268435456, 524288, 268959744, 2, 268435458, 524290, 268959746,
//       ],
//       u = [
//         0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496,
//         131072, 196608, 133120, 198656, 537001984, 537067520, 537004032,
//         537069568,
//       ],
//       l = [
//         0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576,
//         33554432, 33816576, 33554434, 33816578, 33554434, 33816578,
//       ],
//       h = [
//         0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480,
//         1032, 268436488, 1024, 268436480, 1032, 268436488,
//       ],
//       f = [
//         0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192,
//         8224, 1056768, 1056800, 1056768, 1056800,
//       ],
//       d = [
//         0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880,
//         67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528,
//         85983744,
//       ],
//       p = [
//         0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16,
//         4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128,
//       ],
//       g = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261],
//       m = r.length() > 8 ? 3 : 1,
//       b = [],
//       _ = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
//       w = 0,
//       E,
//       v = 0;
//     v < m;
//     v++
//   ) {
//     var S = r.getInt32(),
//       I = r.getInt32();
//     (E = ((S >>> 4) ^ I) & 252645135),
//       (I ^= E),
//       (S ^= E << 4),
//       (E = ((I >>> -16) ^ S) & 65535),
//       (S ^= E),
//       (I ^= E << -16),
//       (E = ((S >>> 2) ^ I) & 858993459),
//       (I ^= E),
//       (S ^= E << 2),
//       (E = ((I >>> -16) ^ S) & 65535),
//       (S ^= E),
//       (I ^= E << -16),
//       (E = ((S >>> 1) ^ I) & 1431655765),
//       (I ^= E),
//       (S ^= E << 1),
//       (E = ((I >>> 8) ^ S) & 16711935),
//       (S ^= E),
//       (I ^= E << 8),
//       (E = ((S >>> 1) ^ I) & 1431655765),
//       (I ^= E),
//       (S ^= E << 1),
//       (E = (S << 8) | ((I >>> 20) & 240)),
//       (S =
//         (I << 24) |
//         ((I << 8) & 16711680) |
//         ((I >>> 8) & 65280) |
//         ((I >>> 24) & 240)),
//       (I = E);
//     for (var T = 0; T < _.length; ++T) {
//       _[T]
//         ? ((S = (S << 2) | (S >>> 26)), (I = (I << 2) | (I >>> 26)))
//         : ((S = (S << 1) | (S >>> 27)), (I = (I << 1) | (I >>> 27))),
//         (S &= -15),
//         (I &= -15);
//       var A =
//           e[S >>> 28] |
//           t[(S >>> 24) & 15] |
//           n[(S >>> 20) & 15] |
//           i[(S >>> 16) & 15] |
//           o[(S >>> 12) & 15] |
//           a[(S >>> 8) & 15] |
//           c[(S >>> 4) & 15],
//         C =
//           u[I >>> 28] |
//           l[(I >>> 24) & 15] |
//           h[(I >>> 20) & 15] |
//           f[(I >>> 16) & 15] |
//           d[(I >>> 12) & 15] |
//           p[(I >>> 8) & 15] |
//           g[(I >>> 4) & 15];
//       (E = ((C >>> 16) ^ A) & 65535),
//         (b[w++] = A ^ E),
//         (b[w++] = C ^ (E << 16));
//     }
//   }
//   return b;
// }
// function _updateBlock(r, e, t, n) {
//   var i = r.length === 32 ? 3 : 9,
//     o;
//   i === 3
//     ? (o = n ? [30, -2, -2] : [0, 32, 2])
//     : (o = n
//         ? [94, 62, -2, 32, 64, 2, 30, -2, -2]
//         : [0, 32, 2, 62, 30, -2, 64, 96, 2]);
//   var a,
//     c = e[0],
//     u = e[1];
//   (a = ((c >>> 4) ^ u) & 252645135),
//     (u ^= a),
//     (c ^= a << 4),
//     (a = ((c >>> 16) ^ u) & 65535),
//     (u ^= a),
//     (c ^= a << 16),
//     (a = ((u >>> 2) ^ c) & 858993459),
//     (c ^= a),
//     (u ^= a << 2),
//     (a = ((u >>> 8) ^ c) & 16711935),
//     (c ^= a),
//     (u ^= a << 8),
//     (a = ((c >>> 1) ^ u) & 1431655765),
//     (u ^= a),
//     (c ^= a << 1),
//     (c = (c << 1) | (c >>> 31)),
//     (u = (u << 1) | (u >>> 31));
//   for (var l = 0; l < i; l += 3) {
//     for (var h = o[l + 1], f = o[l + 2], d = o[l]; d != h; d += f) {
//       var p = u ^ r[d],
//         g = ((u >>> 4) | (u << 28)) ^ r[d + 1];
//       (a = c),
//         (c = u),
//         (u =
//           a ^
//           (spfunction2[(p >>> 24) & 63] |
//             spfunction4[(p >>> 16) & 63] |
//             spfunction6[(p >>> 8) & 63] |
//             spfunction8[p & 63] |
//             spfunction1[(g >>> 24) & 63] |
//             spfunction3[(g >>> 16) & 63] |
//             spfunction5[(g >>> 8) & 63] |
//             spfunction7[g & 63]));
//     }
//     (a = c), (c = u), (u = a);
//   }
//   (c = (c >>> 1) | (c << 31)),
//     (u = (u >>> 1) | (u << 31)),
//     (a = ((c >>> 1) ^ u) & 1431655765),
//     (u ^= a),
//     (c ^= a << 1),
//     (a = ((u >>> 8) ^ c) & 16711935),
//     (c ^= a),
//     (u ^= a << 8),
//     (a = ((u >>> 2) ^ c) & 858993459),
//     (c ^= a),
//     (u ^= a << 2),
//     (a = ((c >>> 16) ^ u) & 65535),
//     (u ^= a),
//     (c ^= a << 16),
//     (a = ((c >>> 4) ^ u) & 252645135),
//     (u ^= a),
//     (c ^= a << 4),
//     (t[0] = c),
//     (t[1] = u);
// }
// function _createCipher(r) {
//   r = r || {};
//   var e = (r.mode || "CBC").toUpperCase(),
//     t = "DES-" + e,
//     n;
//   r.decrypt
//     ? (n = forge$f.cipher.createDecipher(t, r.key))
//     : (n = forge$f.cipher.createCipher(t, r.key));
//   var i = n.start;
//   return (
//     (n.start = function (o, a) {
//       var c = null;
//       a instanceof forge$f.util.ByteBuffer && ((c = a), (a = {})),
//         (a = a || {}),
//         (a.output = c),
//         (a.iv = o),
//         i.call(n, a);
//     }),
//     n
//   );
// }
// var forge$e = forge$m;
// forge$e.md = forge$e.md || {};
// forge$e.md.algorithms = forge$e.md.algorithms || {};
// var forge$d = forge$m,
//   hmac = (forge$d.hmac = forge$d.hmac || {});
// hmac.create = function () {
//   var r = null,
//     e = null,
//     t = null,
//     n = null,
//     i = {};
//   return (
//     (i.start = function (o, a) {
//       if (o !== null)
//         if (typeof o == "string")
//           if (((o = o.toLowerCase()), o in forge$d.md.algorithms))
//             e = forge$d.md.algorithms[o].create();
//           else throw new Error('Unknown hash algorithm "' + o + '"');
//         else e = o;
//       if (a === null) a = r;
//       else {
//         if (typeof a == "string") a = forge$d.util.createBuffer(a);
//         else if (forge$d.util.isArray(a)) {
//           var c = a;
//           a = forge$d.util.createBuffer();
//           for (var u = 0; u < c.length; ++u) a.putByte(c[u]);
//         }
//         var l = a.length();
//         l > e.blockLength && (e.start(), e.update(a.bytes()), (a = e.digest())),
//           (t = forge$d.util.createBuffer()),
//           (n = forge$d.util.createBuffer()),
//           (l = a.length());
//         for (var u = 0; u < l; ++u) {
//           var c = a.at(u);
//           t.putByte(54 ^ c), n.putByte(92 ^ c);
//         }
//         if (l < e.blockLength)
//           for (var c = e.blockLength - l, u = 0; u < c; ++u)
//             t.putByte(54), n.putByte(92);
//         (r = a), (t = t.bytes()), (n = n.bytes());
//       }
//       e.start(), e.update(t);
//     }),
//     (i.update = function (o) {
//       e.update(o);
//     }),
//     (i.getMac = function () {
//       var o = e.digest().bytes();
//       return e.start(), e.update(n), e.update(o), e.digest();
//     }),
//     (i.digest = i.getMac),
//     i
//   );
// };
// const __viteBrowserExternal = {},
//   __viteBrowserExternal$1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         default: __viteBrowserExternal,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   require$$8 = getAugmentedNamespace(__viteBrowserExternal$1);
// var forge$c = forge$m,
//   pkcs5 = (forge$c.pkcs5 = forge$c.pkcs5 || {}),
//   crypto$1;
// forge$c.util.isNodejs &&
//   !forge$c.options.usePureJavaScript &&
//   (crypto$1 = require$$8);
// forge$c.pbkdf2 = pkcs5.pbkdf2 = function (r, e, t, n, i, o) {
//   if (
//     (typeof i == "function" && ((o = i), (i = null)),
//     forge$c.util.isNodejs &&
//       !forge$c.options.usePureJavaScript &&
//       crypto$1.pbkdf2 &&
//       (i === null || typeof i != "object") &&
//       (crypto$1.pbkdf2Sync.length > 4 || !i || i === "sha1"))
//   )
//     return (
//       typeof i != "string" && (i = "sha1"),
//       (r = Buffer.from(r, "binary")),
//       (e = Buffer.from(e, "binary")),
//       o
//         ? crypto$1.pbkdf2Sync.length === 4
//           ? crypto$1.pbkdf2(r, e, t, n, function (E, v) {
//               if (E) return o(E);
//               o(null, v.toString("binary"));
//             })
//           : crypto$1.pbkdf2(r, e, t, n, i, function (E, v) {
//               if (E) return o(E);
//               o(null, v.toString("binary"));
//             })
//         : crypto$1.pbkdf2Sync.length === 4
//         ? crypto$1.pbkdf2Sync(r, e, t, n).toString("binary")
//         : crypto$1.pbkdf2Sync(r, e, t, n, i).toString("binary")
//     );
//   if (((typeof i > "u" || i === null) && (i = "sha1"), typeof i == "string")) {
//     if (!(i in forge$c.md.algorithms))
//       throw new Error("Unknown hash algorithm: " + i);
//     i = forge$c.md[i].create();
//   }
//   var a = i.digestLength;
//   if (n > 4294967295 * a) {
//     var c = new Error("Derived key is too long.");
//     if (o) return o(c);
//     throw c;
//   }
//   var u = Math.ceil(n / a),
//     l = n - (u - 1) * a,
//     h = forge$c.hmac.create();
//   h.start(i, r);
//   var f = "",
//     d,
//     p,
//     g;
//   if (!o) {
//     for (var m = 1; m <= u; ++m) {
//       h.start(null, null),
//         h.update(e),
//         h.update(forge$c.util.int32ToBytes(m)),
//         (d = g = h.digest().getBytes());
//       for (var b = 2; b <= t; ++b)
//         h.start(null, null),
//           h.update(g),
//           (p = h.digest().getBytes()),
//           (d = forge$c.util.xorBytes(d, p, a)),
//           (g = p);
//       f += m < u ? d : d.substr(0, l);
//     }
//     return f;
//   }
//   var m = 1,
//     b;
//   function _() {
//     if (m > u) return o(null, f);
//     h.start(null, null),
//       h.update(e),
//       h.update(forge$c.util.int32ToBytes(m)),
//       (d = g = h.digest().getBytes()),
//       (b = 2),
//       w();
//   }
//   function w() {
//     if (b <= t)
//       return (
//         h.start(null, null),
//         h.update(g),
//         (p = h.digest().getBytes()),
//         (d = forge$c.util.xorBytes(d, p, a)),
//         (g = p),
//         ++b,
//         forge$c.util.setImmediate(w)
//       );
//     (f += m < u ? d : d.substr(0, l)), ++m, _();
//   }
//   _();
// };
// var forge$b = forge$m,
//   pem = (forge$b.pem = forge$b.pem || {});
// pem.encode = function (r, e) {
//   e = e || {};
//   var t =
//       "-----BEGIN " +
//       r.type +
//       `-----\r
// `,
//     n;
//   if (
//     (r.procType &&
//       ((n = {
//         name: "Proc-Type",
//         values: [String(r.procType.version), r.procType.type],
//       }),
//       (t += foldHeader(n))),
//     r.contentDomain &&
//       ((n = {
//         name: "Content-Domain",
//         values: [r.contentDomain],
//       }),
//       (t += foldHeader(n))),
//     r.dekInfo &&
//       ((n = {
//         name: "DEK-Info",
//         values: [r.dekInfo.algorithm],
//       }),
//       r.dekInfo.parameters && n.values.push(r.dekInfo.parameters),
//       (t += foldHeader(n))),
//     r.headers)
//   )
//     for (var i = 0; i < r.headers.length; ++i) t += foldHeader(r.headers[i]);
//   return (
//     r.procType &&
//       (t += `\r
// `),
//     (t +=
//       forge$b.util.encode64(r.body, e.maxline || 64) +
//       `\r
// `),
//     (t +=
//       "-----END " +
//       r.type +
//       `-----\r
// `),
//     t
//   );
// };
// pem.decode = function (r) {
//   for (
//     var e = [],
//       t =
//         /\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,
//       n = /([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,
//       i = /\r?\n/,
//       o;
//     (o = t.exec(r)), !!o;

//   ) {
//     var a = o[1];
//     a === "NEW CERTIFICATE REQUEST" && (a = "CERTIFICATE REQUEST");
//     var c = {
//       type: a,
//       procType: null,
//       contentDomain: null,
//       dekInfo: null,
//       headers: [],
//       body: forge$b.util.decode64(o[3]),
//     };
//     if ((e.push(c), !!o[2])) {
//       for (var u = o[2].split(i), l = 0; o && l < u.length; ) {
//         for (var h = u[l].replace(/\s+$/, ""), f = l + 1; f < u.length; ++f) {
//           var d = u[f];
//           if (!/\s/.test(d[0])) break;
//           (h += d), (l = f);
//         }
//         if (((o = h.match(n)), o)) {
//           for (
//             var p = {
//                 name: o[1],
//                 values: [],
//               },
//               g = o[2].split(","),
//               m = 0;
//             m < g.length;
//             ++m
//           )
//             p.values.push(ltrim(g[m]));
//           if (c.procType)
//             if (!c.contentDomain && p.name === "Content-Domain")
//               c.contentDomain = g[0] || "";
//             else if (!c.dekInfo && p.name === "DEK-Info") {
//               if (p.values.length === 0)
//                 throw new Error(
//                   'Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.'
//                 );
//               c.dekInfo = {
//                 algorithm: g[0],
//                 parameters: g[1] || null,
//               };
//             } else c.headers.push(p);
//           else {
//             if (p.name !== "Proc-Type")
//               throw new Error(
//                 'Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".'
//               );
//             if (p.values.length !== 2)
//               throw new Error(
//                 'Invalid PEM formatted message. The "Proc-Type" header must have two subfields.'
//               );
//             c.procType = {
//               version: g[0],
//               type: g[1],
//             };
//           }
//         }
//         ++l;
//       }
//       if (c.procType === "ENCRYPTED" && !c.dekInfo)
//         throw new Error(
//           'Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".'
//         );
//     }
//   }
//   if (e.length === 0) throw new Error("Invalid PEM formatted message.");
//   return e;
// };
// function foldHeader(r) {
//   for (
//     var e = r.name + ": ",
//       t = [],
//       n = function (u, l) {
//         return " " + l;
//       },
//       i = 0;
//     i < r.values.length;
//     ++i
//   )
//     t.push(r.values[i].replace(/^(\S+\r\n)/, n));
//   e +=
//     t.join(",") +
//     `\r
// `;
//   for (var o = 0, a = -1, i = 0; i < e.length; ++i, ++o)
//     if (o > 65 && a !== -1) {
//       var c = e[a];
//       c === ","
//         ? (++a,
//           (e =
//             e.substr(0, a) +
//             `\r
//  ` +
//             e.substr(a)))
//         : (e =
//             e.substr(0, a) +
//             `\r
// ` +
//             c +
//             e.substr(a + 1)),
//         (o = i - a - 1),
//         (a = -1),
//         ++i;
//     } else (e[i] === " " || e[i] === "	" || e[i] === ",") && (a = i);
//   return e;
// }
// function ltrim(r) {
//   return r.replace(/^\s+/, "");
// }
// var forge$a = forge$m,
//   sha256 = (forge$a.sha256 = forge$a.sha256 || {});
// forge$a.md.sha256 = forge$a.md.algorithms.sha256 = sha256;
// sha256.create = function () {
//   _initialized$2 || _init$2();
//   var r = null,
//     e = forge$a.util.createBuffer(),
//     t = new Array(64),
//     n = {
//       algorithm: "sha256",
//       blockLength: 64,
//       digestLength: 32,
//       messageLength: 0,
//       fullMessageLength: null,
//       messageLengthSize: 8,
//     };
//   return (
//     (n.start = function () {
//       (n.messageLength = 0), (n.fullMessageLength = n.messageLength64 = []);
//       for (var i = n.messageLengthSize / 4, o = 0; o < i; ++o)
//         n.fullMessageLength.push(0);
//       return (
//         (e = forge$a.util.createBuffer()),
//         (r = {
//           h0: 1779033703,
//           h1: 3144134277,
//           h2: 1013904242,
//           h3: 2773480762,
//           h4: 1359893119,
//           h5: 2600822924,
//           h6: 528734635,
//           h7: 1541459225,
//         }),
//         n
//       );
//     }),
//     n.start(),
//     (n.update = function (i, o) {
//       o === "utf8" && (i = forge$a.util.encodeUtf8(i));
//       var a = i.length;
//       (n.messageLength += a), (a = [(a / 4294967296) >>> 0, a >>> 0]);
//       for (var c = n.fullMessageLength.length - 1; c >= 0; --c)
//         (n.fullMessageLength[c] += a[1]),
//           (a[1] = a[0] + ((n.fullMessageLength[c] / 4294967296) >>> 0)),
//           (n.fullMessageLength[c] = n.fullMessageLength[c] >>> 0),
//           (a[0] = (a[1] / 4294967296) >>> 0);
//       return (
//         e.putBytes(i),
//         _update$2(r, t, e),
//         (e.read > 2048 || e.length() === 0) && e.compact(),
//         n
//       );
//     }),
//     (n.digest = function () {
//       var i = forge$a.util.createBuffer();
//       i.putBytes(e.bytes());
//       var o =
//           n.fullMessageLength[n.fullMessageLength.length - 1] +
//           n.messageLengthSize,
//         a = o & (n.blockLength - 1);
//       i.putBytes(_padding$2.substr(0, n.blockLength - a));
//       for (
//         var c, u, l = n.fullMessageLength[0] * 8, h = 0;
//         h < n.fullMessageLength.length - 1;
//         ++h
//       )
//         (c = n.fullMessageLength[h + 1] * 8),
//           (u = (c / 4294967296) >>> 0),
//           (l += u),
//           i.putInt32(l >>> 0),
//           (l = c >>> 0);
//       i.putInt32(l);
//       var f = {
//         h0: r.h0,
//         h1: r.h1,
//         h2: r.h2,
//         h3: r.h3,
//         h4: r.h4,
//         h5: r.h5,
//         h6: r.h6,
//         h7: r.h7,
//       };
//       _update$2(f, t, i);
//       var d = forge$a.util.createBuffer();
//       return (
//         d.putInt32(f.h0),
//         d.putInt32(f.h1),
//         d.putInt32(f.h2),
//         d.putInt32(f.h3),
//         d.putInt32(f.h4),
//         d.putInt32(f.h5),
//         d.putInt32(f.h6),
//         d.putInt32(f.h7),
//         d
//       );
//     }),
//     n
//   );
// };
// var _padding$2 = null,
//   _initialized$2 = !1,
//   _k$1 = null;
// function _init$2() {
//   (_padding$2 = String.fromCharCode(128)),
//     (_padding$2 += forge$a.util.fillString(String.fromCharCode(0), 64)),
//     (_k$1 = [
//       1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
//       2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
//       1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
//       264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
//       2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
//       113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
//       1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
//       3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
//       430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
//       1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
//       2428436474, 2756734187, 3204031479, 3329325298,
//     ]),
//     (_initialized$2 = !0);
// }
// function _update$2(r, e, t) {
//   for (
//     var n, i, o, a, c, u, l, h, f, d, p, g, m, b, _, w = t.length();
//     w >= 64;

//   ) {
//     for (l = 0; l < 16; ++l) e[l] = t.getInt32();
//     for (; l < 64; ++l)
//       (n = e[l - 2]),
//         (n = ((n >>> 17) | (n << 15)) ^ ((n >>> 19) | (n << 13)) ^ (n >>> 10)),
//         (i = e[l - 15]),
//         (i = ((i >>> 7) | (i << 25)) ^ ((i >>> 18) | (i << 14)) ^ (i >>> 3)),
//         (e[l] = (n + e[l - 7] + i + e[l - 16]) | 0);
//     for (
//       h = r.h0,
//         f = r.h1,
//         d = r.h2,
//         p = r.h3,
//         g = r.h4,
//         m = r.h5,
//         b = r.h6,
//         _ = r.h7,
//         l = 0;
//       l < 64;
//       ++l
//     )
//       (a =
//         ((g >>> 6) | (g << 26)) ^
//         ((g >>> 11) | (g << 21)) ^
//         ((g >>> 25) | (g << 7))),
//         (c = b ^ (g & (m ^ b))),
//         (o =
//           ((h >>> 2) | (h << 30)) ^
//           ((h >>> 13) | (h << 19)) ^
//           ((h >>> 22) | (h << 10))),
//         (u = (h & f) | (d & (h ^ f))),
//         (n = _ + a + c + _k$1[l] + e[l]),
//         (i = o + u),
//         (_ = b),
//         (b = m),
//         (m = g),
//         (g = (p + n) >>> 0),
//         (p = d),
//         (d = f),
//         (f = h),
//         (h = (n + i) >>> 0);
//     (r.h0 = (r.h0 + h) | 0),
//       (r.h1 = (r.h1 + f) | 0),
//       (r.h2 = (r.h2 + d) | 0),
//       (r.h3 = (r.h3 + p) | 0),
//       (r.h4 = (r.h4 + g) | 0),
//       (r.h5 = (r.h5 + m) | 0),
//       (r.h6 = (r.h6 + b) | 0),
//       (r.h7 = (r.h7 + _) | 0),
//       (w -= 64);
//   }
// }
// var forge$9 = forge$m,
//   _crypto$1 = null;
// forge$9.util.isNodejs &&
//   !forge$9.options.usePureJavaScript &&
//   !process.versions["node-webkit"] &&
//   (_crypto$1 = require$$8);
// var prng = (forge$9.prng = forge$9.prng || {});
// prng.create = function (r) {
//   for (
//     var e = {
//         plugin: r,
//         key: null,
//         seed: null,
//         time: null,
//         reseeds: 0,
//         generated: 0,
//         keyBytes: "",
//       },
//       t = r.md,
//       n = new Array(32),
//       i = 0;
//     i < 32;
//     ++i
//   )
//     n[i] = t.create();
//   (e.pools = n),
//     (e.pool = 0),
//     (e.generate = function (l, h) {
//       if (!h) return e.generateSync(l);
//       var f = e.plugin.cipher,
//         d = e.plugin.increment,
//         p = e.plugin.formatKey,
//         g = e.plugin.formatSeed,
//         m = forge$9.util.createBuffer();
//       (e.key = null), b();
//       function b(_) {
//         if (_) return h(_);
//         if (m.length() >= l) return h(null, m.getBytes(l));
//         if ((e.generated > 1048575 && (e.key = null), e.key === null))
//           return forge$9.util.nextTick(function () {
//             o(b);
//           });
//         var w = f(e.key, e.seed);
//         (e.generated += w.length),
//           m.putBytes(w),
//           (e.key = p(f(e.key, d(e.seed)))),
//           (e.seed = g(f(e.key, e.seed))),
//           forge$9.util.setImmediate(b);
//       }
//     }),
//     (e.generateSync = function (l) {
//       var h = e.plugin.cipher,
//         f = e.plugin.increment,
//         d = e.plugin.formatKey,
//         p = e.plugin.formatSeed;
//       e.key = null;
//       for (var g = forge$9.util.createBuffer(); g.length() < l; ) {
//         e.generated > 1048575 && (e.key = null), e.key === null && a();
//         var m = h(e.key, e.seed);
//         (e.generated += m.length),
//           g.putBytes(m),
//           (e.key = d(h(e.key, f(e.seed)))),
//           (e.seed = p(h(e.key, e.seed)));
//       }
//       return g.getBytes(l);
//     });
//   function o(l) {
//     if (e.pools[0].messageLength >= 32) return c(), l();
//     var h = (32 - e.pools[0].messageLength) << 5;
//     e.seedFile(h, function (f, d) {
//       if (f) return l(f);
//       e.collect(d), c(), l();
//     });
//   }
//   function a() {
//     if (e.pools[0].messageLength >= 32) return c();
//     var l = (32 - e.pools[0].messageLength) << 5;
//     e.collect(e.seedFileSync(l)), c();
//   }
//   function c() {
//     e.reseeds = e.reseeds === 4294967295 ? 0 : e.reseeds + 1;
//     var l = e.plugin.md.create();
//     l.update(e.keyBytes);
//     for (var h = 1, f = 0; f < 32; ++f)
//       e.reseeds % h === 0 &&
//         (l.update(e.pools[f].digest().getBytes()), e.pools[f].start()),
//         (h = h << 1);
//     (e.keyBytes = l.digest().getBytes()), l.start(), l.update(e.keyBytes);
//     var d = l.digest().getBytes();
//     (e.key = e.plugin.formatKey(e.keyBytes)),
//       (e.seed = e.plugin.formatSeed(d)),
//       (e.generated = 0);
//   }
//   function u(l) {
//     var h = null,
//       f = forge$9.util.globalScope,
//       d = f.crypto || f.msCrypto;
//     d &&
//       d.getRandomValues &&
//       (h = function (S) {
//         return d.getRandomValues(S);
//       });
//     var p = forge$9.util.createBuffer();
//     if (h)
//       for (; p.length() < l; ) {
//         var g = Math.max(1, Math.min(l - p.length(), 65536) / 4),
//           m = new Uint32Array(Math.floor(g));
//         try {
//           h(m);
//           for (var b = 0; b < m.length; ++b) p.putInt32(m[b]);
//         } catch (S) {
//           if (
//             !(
//               typeof QuotaExceededError < "u" && S instanceof QuotaExceededError
//             )
//           )
//             throw S;
//         }
//       }
//     if (p.length() < l)
//       for (
//         var _, w, E, v = Math.floor(Math.random() * 65536);
//         p.length() < l;

//       ) {
//         (w = 16807 * (v & 65535)),
//           (_ = 16807 * (v >> 16)),
//           (w += (_ & 32767) << 16),
//           (w += _ >> 15),
//           (w = (w & 2147483647) + (w >> 31)),
//           (v = w & 4294967295);
//         for (var b = 0; b < 3; ++b)
//           (E = v >>> (b << 3)),
//             (E ^= Math.floor(Math.random() * 256)),
//             p.putByte(E & 255);
//       }
//     return p.getBytes(l);
//   }
//   return (
//     _crypto$1
//       ? ((e.seedFile = function (l, h) {
//           _crypto$1.randomBytes(l, function (f, d) {
//             if (f) return h(f);
//             h(null, d.toString());
//           });
//         }),
//         (e.seedFileSync = function (l) {
//           return _crypto$1.randomBytes(l).toString();
//         }))
//       : ((e.seedFile = function (l, h) {
//           try {
//             h(null, u(l));
//           } catch (f) {
//             h(f);
//           }
//         }),
//         (e.seedFileSync = u)),
//     (e.collect = function (l) {
//       for (var h = l.length, f = 0; f < h; ++f)
//         e.pools[e.pool].update(l.substr(f, 1)),
//           (e.pool = e.pool === 31 ? 0 : e.pool + 1);
//     }),
//     (e.collectInt = function (l, h) {
//       for (var f = "", d = 0; d < h; d += 8)
//         f += String.fromCharCode((l >> d) & 255);
//       e.collect(f);
//     }),
//     (e.registerWorker = function (l) {
//       if (l === self)
//         e.seedFile = function (f, d) {
//           function p(g) {
//             var m = g.data;
//             m.forge &&
//               m.forge.prng &&
//               (self.removeEventListener("message", p),
//               d(m.forge.prng.err, m.forge.prng.bytes));
//           }
//           self.addEventListener("message", p),
//             self.postMessage({
//               forge: {
//                 prng: {
//                   needed: f,
//                 },
//               },
//             });
//         };
//       else {
//         var h = function (f) {
//           var d = f.data;
//           d.forge &&
//             d.forge.prng &&
//             e.seedFile(d.forge.prng.needed, function (p, g) {
//               l.postMessage({
//                 forge: {
//                   prng: {
//                     err: p,
//                     bytes: g,
//                   },
//                 },
//               });
//             });
//         };
//         l.addEventListener("message", h);
//       }
//     }),
//     e
//   );
// };
// var forge$8 = forge$m;
// (function () {
//   if (forge$8.random && forge$8.random.getBytes) {
//     forge$8.random;
//     return;
//   }
//   (function (r) {
//     var e = {},
//       t = new Array(4),
//       n = forge$8.util.createBuffer();
//     (e.formatKey = function (f) {
//       var d = forge$8.util.createBuffer(f);
//       return (
//         (f = new Array(4)),
//         (f[0] = d.getInt32()),
//         (f[1] = d.getInt32()),
//         (f[2] = d.getInt32()),
//         (f[3] = d.getInt32()),
//         forge$8.aes._expandKey(f, !1)
//       );
//     }),
//       (e.formatSeed = function (f) {
//         var d = forge$8.util.createBuffer(f);
//         return (
//           (f = new Array(4)),
//           (f[0] = d.getInt32()),
//           (f[1] = d.getInt32()),
//           (f[2] = d.getInt32()),
//           (f[3] = d.getInt32()),
//           f
//         );
//       }),
//       (e.cipher = function (f, d) {
//         return (
//           forge$8.aes._updateBlock(f, d, t, !1),
//           n.putInt32(t[0]),
//           n.putInt32(t[1]),
//           n.putInt32(t[2]),
//           n.putInt32(t[3]),
//           n.getBytes()
//         );
//       }),
//       (e.increment = function (f) {
//         return ++f[3], f;
//       }),
//       (e.md = forge$8.md.sha256);
//     function i() {
//       var f = forge$8.prng.create(e);
//       return (
//         (f.getBytes = function (d, p) {
//           return f.generate(d, p);
//         }),
//         (f.getBytesSync = function (d) {
//           return f.generate(d);
//         }),
//         f
//       );
//     }
//     var o = i(),
//       a = null,
//       c = forge$8.util.globalScope,
//       u = c.crypto || c.msCrypto;
//     if (
//       (u &&
//         u.getRandomValues &&
//         (a = function (f) {
//           return u.getRandomValues(f);
//         }),
//       forge$8.options.usePureJavaScript || (!forge$8.util.isNodejs && !a))
//     ) {
//       if ((o.collectInt(+new Date(), 32), typeof navigator < "u")) {
//         var l = "";
//         for (var h in navigator)
//           try {
//             typeof navigator[h] == "string" && (l += navigator[h]);
//           } catch {}
//         o.collect(l), (l = null);
//       }
//       r &&
//         (r().mousemove(function (f) {
//           o.collectInt(f.clientX, 16), o.collectInt(f.clientY, 16);
//         }),
//         r().keypress(function (f) {
//           o.collectInt(f.charCode, 8);
//         }));
//     }
//     if (!forge$8.random) forge$8.random = o;
//     else for (var h in o) forge$8.random[h] = o[h];
//     (forge$8.random.createInstance = i), forge$8.random;
//   })(typeof jQuery < "u" ? jQuery : null);
// })();
// var forge$7 = forge$m,
//   piTable = [
//     217, 120, 249, 196, 25, 221, 181, 237, 40, 233, 253, 121, 74, 160, 216, 157,
//     198, 126, 55, 131, 43, 118, 83, 142, 98, 76, 100, 136, 68, 139, 251, 162,
//     23, 154, 89, 245, 135, 179, 79, 19, 97, 69, 109, 141, 9, 129, 125, 50, 189,
//     143, 64, 235, 134, 183, 123, 11, 240, 149, 33, 34, 92, 107, 78, 130, 84,
//     214, 101, 147, 206, 96, 178, 28, 115, 86, 192, 20, 167, 140, 241, 220, 18,
//     117, 202, 31, 59, 190, 228, 209, 66, 61, 212, 48, 163, 60, 182, 38, 111,
//     191, 14, 218, 70, 105, 7, 87, 39, 242, 29, 155, 188, 148, 67, 3, 248, 17,
//     199, 246, 144, 239, 62, 231, 6, 195, 213, 47, 200, 102, 30, 215, 8, 232,
//     234, 222, 128, 82, 238, 247, 132, 170, 114, 172, 53, 77, 106, 42, 150, 26,
//     210, 113, 90, 21, 73, 116, 75, 159, 208, 94, 4, 24, 164, 236, 194, 224, 65,
//     110, 15, 81, 203, 204, 36, 145, 175, 80, 161, 244, 112, 57, 153, 124, 58,
//     133, 35, 184, 180, 122, 252, 2, 54, 91, 37, 85, 151, 49, 45, 93, 250, 152,
//     227, 138, 146, 174, 5, 223, 41, 16, 103, 108, 186, 201, 211, 0, 230, 207,
//     225, 158, 168, 44, 99, 22, 1, 63, 88, 226, 137, 169, 13, 56, 52, 27, 171,
//     51, 255, 176, 187, 72, 12, 95, 185, 177, 205, 46, 197, 243, 219, 71, 229,
//     165, 156, 119, 10, 166, 32, 104, 254, 127, 193, 173,
//   ],
//   s = [1, 2, 3, 5],
//   rol = function (r, e) {
//     return ((r << e) & 65535) | ((r & 65535) >> (16 - e));
//   },
//   ror = function (r, e) {
//     return ((r & 65535) >> e) | ((r << (16 - e)) & 65535);
//   };
// forge$7.rc2 = forge$7.rc2 || {};
// forge$7.rc2.expandKey = function (r, e) {
//   typeof r == "string" && (r = forge$7.util.createBuffer(r)), (e = e || 128);
//   var t = r,
//     n = r.length(),
//     i = e,
//     o = Math.ceil(i / 8),
//     a = 255 >> (i & 7),
//     c;
//   for (c = n; c < 128; c++)
//     t.putByte(piTable[(t.at(c - 1) + t.at(c - n)) & 255]);
//   for (t.setAt(128 - o, piTable[t.at(128 - o) & a]), c = 127 - o; c >= 0; c--)
//     t.setAt(c, piTable[t.at(c + 1) ^ t.at(c + o)]);
//   return t;
// };
// var createCipher = function (r, e, t) {
//   var n = !1,
//     i = null,
//     o = null,
//     a = null,
//     c,
//     u,
//     l,
//     h,
//     f = [];
//   for (r = forge$7.rc2.expandKey(r, e), l = 0; l < 64; l++)
//     f.push(r.getInt16Le());
//   t
//     ? ((c = function (g) {
//         for (l = 0; l < 4; l++)
//           (g[l] +=
//             f[h] +
//             (g[(l + 3) % 4] & g[(l + 2) % 4]) +
//             (~g[(l + 3) % 4] & g[(l + 1) % 4])),
//             (g[l] = rol(g[l], s[l])),
//             h++;
//       }),
//       (u = function (g) {
//         for (l = 0; l < 4; l++) g[l] += f[g[(l + 3) % 4] & 63];
//       }))
//     : ((c = function (g) {
//         for (l = 3; l >= 0; l--)
//           (g[l] = ror(g[l], s[l])),
//             (g[l] -=
//               f[h] +
//               (g[(l + 3) % 4] & g[(l + 2) % 4]) +
//               (~g[(l + 3) % 4] & g[(l + 1) % 4])),
//             h--;
//       }),
//       (u = function (g) {
//         for (l = 3; l >= 0; l--) g[l] -= f[g[(l + 3) % 4] & 63];
//       }));
//   var d = function (g) {
//       var m = [];
//       for (l = 0; l < 4; l++) {
//         var b = i.getInt16Le();
//         a !== null && (t ? (b ^= a.getInt16Le()) : a.putInt16Le(b)),
//           m.push(b & 65535);
//       }
//       h = t ? 0 : 63;
//       for (var _ = 0; _ < g.length; _++)
//         for (var w = 0; w < g[_][0]; w++) g[_][1](m);
//       for (l = 0; l < 4; l++)
//         a !== null && (t ? a.putInt16Le(m[l]) : (m[l] ^= a.getInt16Le())),
//           o.putInt16Le(m[l]);
//     },
//     p = null;
//   return (
//     (p = {
//       start: function (g, m) {
//         g && typeof g == "string" && (g = forge$7.util.createBuffer(g)),
//           (n = !1),
//           (i = forge$7.util.createBuffer()),
//           (o = m || new forge$7.util.createBuffer()),
//           (a = g),
//           (p.output = o);
//       },
//       update: function (g) {
//         for (n || i.putBuffer(g); i.length() >= 8; )
//           d([
//             [5, c],
//             [1, u],
//             [6, c],
//             [1, u],
//             [5, c],
//           ]);
//       },
//       finish: function (g) {
//         var m = !0;
//         if (t)
//           if (g) m = g(8, i, !t);
//           else {
//             var b = i.length() === 8 ? 8 : 8 - i.length();
//             i.fillWithByte(b, b);
//           }
//         if ((m && ((n = !0), p.update()), !t && ((m = i.length() === 0), m)))
//           if (g) m = g(8, o, !t);
//           else {
//             var _ = o.length(),
//               w = o.at(_ - 1);
//             w > _ ? (m = !1) : o.truncate(w);
//           }
//         return m;
//       },
//     }),
//     p
//   );
// };
// forge$7.rc2.startEncrypting = function (r, e, t) {
//   var n = forge$7.rc2.createEncryptionCipher(r, 128);
//   return n.start(e, t), n;
// };
// forge$7.rc2.createEncryptionCipher = function (r, e) {
//   return createCipher(r, e, !0);
// };
// forge$7.rc2.startDecrypting = function (r, e, t) {
//   var n = forge$7.rc2.createDecryptionCipher(r, 128);
//   return n.start(e, t), n;
// };
// forge$7.rc2.createDecryptionCipher = function (r, e) {
//   return createCipher(r, e, !1);
// };
// var forge$6 = forge$m;
// forge$6.jsbn = forge$6.jsbn || {};
// var dbits;
// function BigInteger$2(r, e, t) {
//   (this.data = []),
//     r != null &&
//       (typeof r == "number"
//         ? this.fromNumber(r, e, t)
//         : e == null && typeof r != "string"
//         ? this.fromString(r, 256)
//         : this.fromString(r, e));
// }
// forge$6.jsbn.BigInteger = BigInteger$2;
// function nbi() {
//   return new BigInteger$2(null);
// }
// function am1(r, e, t, n, i, o) {
//   for (; --o >= 0; ) {
//     var a = e * this.data[r++] + t.data[n] + i;
//     (i = Math.floor(a / 67108864)), (t.data[n++] = a & 67108863);
//   }
//   return i;
// }
// function am2(r, e, t, n, i, o) {
//   for (var a = e & 32767, c = e >> 15; --o >= 0; ) {
//     var u = this.data[r] & 32767,
//       l = this.data[r++] >> 15,
//       h = c * u + l * a;
//     (u = a * u + ((h & 32767) << 15) + t.data[n] + (i & 1073741823)),
//       (i = (u >>> 30) + (h >>> 15) + c * l + (i >>> 30)),
//       (t.data[n++] = u & 1073741823);
//   }
//   return i;
// }
// function am3(r, e, t, n, i, o) {
//   for (var a = e & 16383, c = e >> 14; --o >= 0; ) {
//     var u = this.data[r] & 16383,
//       l = this.data[r++] >> 14,
//       h = c * u + l * a;
//     (u = a * u + ((h & 16383) << 14) + t.data[n] + i),
//       (i = (u >> 28) + (h >> 14) + c * l),
//       (t.data[n++] = u & 268435455);
//   }
//   return i;
// }
// typeof navigator > "u"
//   ? ((BigInteger$2.prototype.am = am3), (dbits = 28))
//   : navigator.appName == "Microsoft Internet Explorer"
//   ? ((BigInteger$2.prototype.am = am2), (dbits = 30))
//   : navigator.appName != "Netscape"
//   ? ((BigInteger$2.prototype.am = am1), (dbits = 26))
//   : ((BigInteger$2.prototype.am = am3), (dbits = 28));
// BigInteger$2.prototype.DB = dbits;
// BigInteger$2.prototype.DM = (1 << dbits) - 1;
// BigInteger$2.prototype.DV = 1 << dbits;
// var BI_FP = 52;
// BigInteger$2.prototype.FV = Math.pow(2, BI_FP);
// BigInteger$2.prototype.F1 = BI_FP - dbits;
// BigInteger$2.prototype.F2 = 2 * dbits - BI_FP;
// var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
//   BI_RC = new Array(),
//   rr,
//   vv;
// rr = "0".charCodeAt(0);
// for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
// rr = "a".charCodeAt(0);
// for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
// rr = "A".charCodeAt(0);
// for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
// function int2char(r) {
//   return BI_RM.charAt(r);
// }
// function intAt(r, e) {
//   var t = BI_RC[r.charCodeAt(e)];
//   return t ?? -1;
// }
// function bnpCopyTo(r) {
//   for (var e = this.t - 1; e >= 0; --e) r.data[e] = this.data[e];
//   (r.t = this.t), (r.s = this.s);
// }
// function bnpFromInt(r) {
//   (this.t = 1),
//     (this.s = r < 0 ? -1 : 0),
//     r > 0
//       ? (this.data[0] = r)
//       : r < -1
//       ? (this.data[0] = r + this.DV)
//       : (this.t = 0);
// }
// function nbv(r) {
//   var e = nbi();
//   return e.fromInt(r), e;
// }
// function bnpFromString(r, e) {
//   var t;
//   if (e == 16) t = 4;
//   else if (e == 8) t = 3;
//   else if (e == 256) t = 8;
//   else if (e == 2) t = 1;
//   else if (e == 32) t = 5;
//   else if (e == 4) t = 2;
//   else {
//     this.fromRadix(r, e);
//     return;
//   }
//   (this.t = 0), (this.s = 0);
//   for (var n = r.length, i = !1, o = 0; --n >= 0; ) {
//     var a = t == 8 ? r[n] & 255 : intAt(r, n);
//     if (a < 0) {
//       r.charAt(n) == "-" && (i = !0);
//       continue;
//     }
//     (i = !1),
//       o == 0
//         ? (this.data[this.t++] = a)
//         : o + t > this.DB
//         ? ((this.data[this.t - 1] |= (a & ((1 << (this.DB - o)) - 1)) << o),
//           (this.data[this.t++] = a >> (this.DB - o)))
//         : (this.data[this.t - 1] |= a << o),
//       (o += t),
//       o >= this.DB && (o -= this.DB);
//   }
//   t == 8 &&
//     r[0] & 128 &&
//     ((this.s = -1),
//     o > 0 && (this.data[this.t - 1] |= ((1 << (this.DB - o)) - 1) << o)),
//     this.clamp(),
//     i && BigInteger$2.ZERO.subTo(this, this);
// }
// function bnpClamp() {
//   for (var r = this.s & this.DM; this.t > 0 && this.data[this.t - 1] == r; )
//     --this.t;
// }
// function bnToString(r) {
//   if (this.s < 0) return "-" + this.negate().toString(r);
//   var e;
//   if (r == 16) e = 4;
//   else if (r == 8) e = 3;
//   else if (r == 2) e = 1;
//   else if (r == 32) e = 5;
//   else if (r == 4) e = 2;
//   else return this.toRadix(r);
//   var t = (1 << e) - 1,
//     n,
//     i = !1,
//     o = "",
//     a = this.t,
//     c = this.DB - ((a * this.DB) % e);
//   if (a-- > 0)
//     for (
//       c < this.DB &&
//       (n = this.data[a] >> c) > 0 &&
//       ((i = !0), (o = int2char(n)));
//       a >= 0;

//     )
//       c < e
//         ? ((n = (this.data[a] & ((1 << c) - 1)) << (e - c)),
//           (n |= this.data[--a] >> (c += this.DB - e)))
//         : ((n = (this.data[a] >> (c -= e)) & t),
//           c <= 0 && ((c += this.DB), --a)),
//         n > 0 && (i = !0),
//         i && (o += int2char(n));
//   return i ? o : "0";
// }
// function bnNegate() {
//   var r = nbi();
//   return BigInteger$2.ZERO.subTo(this, r), r;
// }
// function bnAbs() {
//   return this.s < 0 ? this.negate() : this;
// }
// function bnCompareTo(r) {
//   var e = this.s - r.s;
//   if (e != 0) return e;
//   var t = this.t;
//   if (((e = t - r.t), e != 0)) return this.s < 0 ? -e : e;
//   for (; --t >= 0; ) if ((e = this.data[t] - r.data[t]) != 0) return e;
//   return 0;
// }
// function nbits(r) {
//   var e = 1,
//     t;
//   return (
//     (t = r >>> 16) != 0 && ((r = t), (e += 16)),
//     (t = r >> 8) != 0 && ((r = t), (e += 8)),
//     (t = r >> 4) != 0 && ((r = t), (e += 4)),
//     (t = r >> 2) != 0 && ((r = t), (e += 2)),
//     (t = r >> 1) != 0 && ((r = t), (e += 1)),
//     e
//   );
// }
// function bnBitLength() {
//   return this.t <= 0
//     ? 0
//     : this.DB * (this.t - 1) +
//         nbits(this.data[this.t - 1] ^ (this.s & this.DM));
// }
// function bnpDLShiftTo(r, e) {
//   var t;
//   for (t = this.t - 1; t >= 0; --t) e.data[t + r] = this.data[t];
//   for (t = r - 1; t >= 0; --t) e.data[t] = 0;
//   (e.t = this.t + r), (e.s = this.s);
// }
// function bnpDRShiftTo(r, e) {
//   for (var t = r; t < this.t; ++t) e.data[t - r] = this.data[t];
//   (e.t = Math.max(this.t - r, 0)), (e.s = this.s);
// }
// function bnpLShiftTo(r, e) {
//   var t = r % this.DB,
//     n = this.DB - t,
//     i = (1 << n) - 1,
//     o = Math.floor(r / this.DB),
//     a = (this.s << t) & this.DM,
//     c;
//   for (c = this.t - 1; c >= 0; --c)
//     (e.data[c + o + 1] = (this.data[c] >> n) | a),
//       (a = (this.data[c] & i) << t);
//   for (c = o - 1; c >= 0; --c) e.data[c] = 0;
//   (e.data[o] = a), (e.t = this.t + o + 1), (e.s = this.s), e.clamp();
// }
// function bnpRShiftTo(r, e) {
//   e.s = this.s;
//   var t = Math.floor(r / this.DB);
//   if (t >= this.t) {
//     e.t = 0;
//     return;
//   }
//   var n = r % this.DB,
//     i = this.DB - n,
//     o = (1 << n) - 1;
//   e.data[0] = this.data[t] >> n;
//   for (var a = t + 1; a < this.t; ++a)
//     (e.data[a - t - 1] |= (this.data[a] & o) << i),
//       (e.data[a - t] = this.data[a] >> n);
//   n > 0 && (e.data[this.t - t - 1] |= (this.s & o) << i),
//     (e.t = this.t - t),
//     e.clamp();
// }
// function bnpSubTo(r, e) {
//   for (var t = 0, n = 0, i = Math.min(r.t, this.t); t < i; )
//     (n += this.data[t] - r.data[t]),
//       (e.data[t++] = n & this.DM),
//       (n >>= this.DB);
//   if (r.t < this.t) {
//     for (n -= r.s; t < this.t; )
//       (n += this.data[t]), (e.data[t++] = n & this.DM), (n >>= this.DB);
//     n += this.s;
//   } else {
//     for (n += this.s; t < r.t; )
//       (n -= r.data[t]), (e.data[t++] = n & this.DM), (n >>= this.DB);
//     n -= r.s;
//   }
//   (e.s = n < 0 ? -1 : 0),
//     n < -1 ? (e.data[t++] = this.DV + n) : n > 0 && (e.data[t++] = n),
//     (e.t = t),
//     e.clamp();
// }
// function bnpMultiplyTo(r, e) {
//   var t = this.abs(),
//     n = r.abs(),
//     i = t.t;
//   for (e.t = i + n.t; --i >= 0; ) e.data[i] = 0;
//   for (i = 0; i < n.t; ++i) e.data[i + t.t] = t.am(0, n.data[i], e, i, 0, t.t);
//   (e.s = 0), e.clamp(), this.s != r.s && BigInteger$2.ZERO.subTo(e, e);
// }
// function bnpSquareTo(r) {
//   for (var e = this.abs(), t = (r.t = 2 * e.t); --t >= 0; ) r.data[t] = 0;
//   for (t = 0; t < e.t - 1; ++t) {
//     var n = e.am(t, e.data[t], r, 2 * t, 0, 1);
//     (r.data[t + e.t] += e.am(
//       t + 1,
//       2 * e.data[t],
//       r,
//       2 * t + 1,
//       n,
//       e.t - t - 1
//     )) >= e.DV && ((r.data[t + e.t] -= e.DV), (r.data[t + e.t + 1] = 1));
//   }
//   r.t > 0 && (r.data[r.t - 1] += e.am(t, e.data[t], r, 2 * t, 0, 1)),
//     (r.s = 0),
//     r.clamp();
// }
// function bnpDivRemTo(r, e, t) {
//   var n = r.abs();
//   if (!(n.t <= 0)) {
//     var i = this.abs();
//     if (i.t < n.t) {
//       e != null && e.fromInt(0), t != null && this.copyTo(t);
//       return;
//     }
//     t == null && (t = nbi());
//     var o = nbi(),
//       a = this.s,
//       c = r.s,
//       u = this.DB - nbits(n.data[n.t - 1]);
//     u > 0 ? (n.lShiftTo(u, o), i.lShiftTo(u, t)) : (n.copyTo(o), i.copyTo(t));
//     var l = o.t,
//       h = o.data[l - 1];
//     if (h != 0) {
//       var f = h * (1 << this.F1) + (l > 1 ? o.data[l - 2] >> this.F2 : 0),
//         d = this.FV / f,
//         p = (1 << this.F1) / f,
//         g = 1 << this.F2,
//         m = t.t,
//         b = m - l,
//         _ = e ?? nbi();
//       for (
//         o.dlShiftTo(b, _),
//           t.compareTo(_) >= 0 && ((t.data[t.t++] = 1), t.subTo(_, t)),
//           BigInteger$2.ONE.dlShiftTo(l, _),
//           _.subTo(o, o);
//         o.t < l;

//       )
//         o.data[o.t++] = 0;
//       for (; --b >= 0; ) {
//         var w =
//           t.data[--m] == h
//             ? this.DM
//             : Math.floor(t.data[m] * d + (t.data[m - 1] + g) * p);
//         if ((t.data[m] += o.am(0, w, t, b, 0, l)) < w)
//           for (o.dlShiftTo(b, _), t.subTo(_, t); t.data[m] < --w; )
//             t.subTo(_, t);
//       }
//       e != null && (t.drShiftTo(l, e), a != c && BigInteger$2.ZERO.subTo(e, e)),
//         (t.t = l),
//         t.clamp(),
//         u > 0 && t.rShiftTo(u, t),
//         a < 0 && BigInteger$2.ZERO.subTo(t, t);
//     }
//   }
// }
// function bnMod(r) {
//   var e = nbi();
//   return (
//     this.abs().divRemTo(r, null, e),
//     this.s < 0 && e.compareTo(BigInteger$2.ZERO) > 0 && r.subTo(e, e),
//     e
//   );
// }
// function Classic(r) {
//   this.m = r;
// }
// function cConvert(r) {
//   return r.s < 0 || r.compareTo(this.m) >= 0 ? r.mod(this.m) : r;
// }
// function cRevert(r) {
//   return r;
// }
// function cReduce(r) {
//   r.divRemTo(this.m, null, r);
// }
// function cMulTo(r, e, t) {
//   r.multiplyTo(e, t), this.reduce(t);
// }
// function cSqrTo(r, e) {
//   r.squareTo(e), this.reduce(e);
// }
// Classic.prototype.convert = cConvert;
// Classic.prototype.revert = cRevert;
// Classic.prototype.reduce = cReduce;
// Classic.prototype.mulTo = cMulTo;
// Classic.prototype.sqrTo = cSqrTo;
// function bnpInvDigit() {
//   if (this.t < 1) return 0;
//   var r = this.data[0];
//   if (!(r & 1)) return 0;
//   var e = r & 3;
//   return (
//     (e = (e * (2 - (r & 15) * e)) & 15),
//     (e = (e * (2 - (r & 255) * e)) & 255),
//     (e = (e * (2 - (((r & 65535) * e) & 65535))) & 65535),
//     (e = (e * (2 - ((r * e) % this.DV))) % this.DV),
//     e > 0 ? this.DV - e : -e
//   );
// }
// function Montgomery(r) {
//   (this.m = r),
//     (this.mp = r.invDigit()),
//     (this.mpl = this.mp & 32767),
//     (this.mph = this.mp >> 15),
//     (this.um = (1 << (r.DB - 15)) - 1),
//     (this.mt2 = 2 * r.t);
// }
// function montConvert(r) {
//   var e = nbi();
//   return (
//     r.abs().dlShiftTo(this.m.t, e),
//     e.divRemTo(this.m, null, e),
//     r.s < 0 && e.compareTo(BigInteger$2.ZERO) > 0 && this.m.subTo(e, e),
//     e
//   );
// }
// function montRevert(r) {
//   var e = nbi();
//   return r.copyTo(e), this.reduce(e), e;
// }
// function montReduce(r) {
//   for (; r.t <= this.mt2; ) r.data[r.t++] = 0;
//   for (var e = 0; e < this.m.t; ++e) {
//     var t = r.data[e] & 32767,
//       n =
//         (t * this.mpl +
//           (((t * this.mph + (r.data[e] >> 15) * this.mpl) & this.um) << 15)) &
//         r.DM;
//     for (
//       t = e + this.m.t, r.data[t] += this.m.am(0, n, r, e, 0, this.m.t);
//       r.data[t] >= r.DV;

//     )
//       (r.data[t] -= r.DV), r.data[++t]++;
//   }
//   r.clamp(),
//     r.drShiftTo(this.m.t, r),
//     r.compareTo(this.m) >= 0 && r.subTo(this.m, r);
// }
// function montSqrTo(r, e) {
//   r.squareTo(e), this.reduce(e);
// }
// function montMulTo(r, e, t) {
//   r.multiplyTo(e, t), this.reduce(t);
// }
// Montgomery.prototype.convert = montConvert;
// Montgomery.prototype.revert = montRevert;
// Montgomery.prototype.reduce = montReduce;
// Montgomery.prototype.mulTo = montMulTo;
// Montgomery.prototype.sqrTo = montSqrTo;
// function bnpIsEven() {
//   return (this.t > 0 ? this.data[0] & 1 : this.s) == 0;
// }
// function bnpExp(r, e) {
//   if (r > 4294967295 || r < 1) return BigInteger$2.ONE;
//   var t = nbi(),
//     n = nbi(),
//     i = e.convert(this),
//     o = nbits(r) - 1;
//   for (i.copyTo(t); --o >= 0; )
//     if ((e.sqrTo(t, n), (r & (1 << o)) > 0)) e.mulTo(n, i, t);
//     else {
//       var a = t;
//       (t = n), (n = a);
//     }
//   return e.revert(t);
// }
// function bnModPowInt(r, e) {
//   var t;
//   return (
//     r < 256 || e.isEven() ? (t = new Classic(e)) : (t = new Montgomery(e)),
//     this.exp(r, t)
//   );
// }
// BigInteger$2.prototype.copyTo = bnpCopyTo;
// BigInteger$2.prototype.fromInt = bnpFromInt;
// BigInteger$2.prototype.fromString = bnpFromString;
// BigInteger$2.prototype.clamp = bnpClamp;
// BigInteger$2.prototype.dlShiftTo = bnpDLShiftTo;
// BigInteger$2.prototype.drShiftTo = bnpDRShiftTo;
// BigInteger$2.prototype.lShiftTo = bnpLShiftTo;
// BigInteger$2.prototype.rShiftTo = bnpRShiftTo;
// BigInteger$2.prototype.subTo = bnpSubTo;
// BigInteger$2.prototype.multiplyTo = bnpMultiplyTo;
// BigInteger$2.prototype.squareTo = bnpSquareTo;
// BigInteger$2.prototype.divRemTo = bnpDivRemTo;
// BigInteger$2.prototype.invDigit = bnpInvDigit;
// BigInteger$2.prototype.isEven = bnpIsEven;
// BigInteger$2.prototype.exp = bnpExp;
// BigInteger$2.prototype.toString = bnToString;
// BigInteger$2.prototype.negate = bnNegate;
// BigInteger$2.prototype.abs = bnAbs;
// BigInteger$2.prototype.compareTo = bnCompareTo;
// BigInteger$2.prototype.bitLength = bnBitLength;
// BigInteger$2.prototype.mod = bnMod;
// BigInteger$2.prototype.modPowInt = bnModPowInt;
// BigInteger$2.ZERO = nbv(0);
// BigInteger$2.ONE = nbv(1);
// function bnClone() {
//   var r = nbi();
//   return this.copyTo(r), r;
// }
// function bnIntValue() {
//   if (this.s < 0) {
//     if (this.t == 1) return this.data[0] - this.DV;
//     if (this.t == 0) return -1;
//   } else {
//     if (this.t == 1) return this.data[0];
//     if (this.t == 0) return 0;
//   }
//   return (
//     ((this.data[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this.data[0]
//   );
// }
// function bnByteValue() {
//   return this.t == 0 ? this.s : (this.data[0] << 24) >> 24;
// }
// function bnShortValue() {
//   return this.t == 0 ? this.s : (this.data[0] << 16) >> 16;
// }
// function bnpChunkSize(r) {
//   return Math.floor((Math.LN2 * this.DB) / Math.log(r));
// }
// function bnSigNum() {
//   return this.s < 0
//     ? -1
//     : this.t <= 0 || (this.t == 1 && this.data[0] <= 0)
//     ? 0
//     : 1;
// }
// function bnpToRadix(r) {
//   if ((r == null && (r = 10), this.signum() == 0 || r < 2 || r > 36))
//     return "0";
//   var e = this.chunkSize(r),
//     t = Math.pow(r, e),
//     n = nbv(t),
//     i = nbi(),
//     o = nbi(),
//     a = "";
//   for (this.divRemTo(n, i, o); i.signum() > 0; )
//     (a = (t + o.intValue()).toString(r).substr(1) + a), i.divRemTo(n, i, o);
//   return o.intValue().toString(r) + a;
// }
// function bnpFromRadix(r, e) {
//   this.fromInt(0), e == null && (e = 10);
//   for (
//     var t = this.chunkSize(e), n = Math.pow(e, t), i = !1, o = 0, a = 0, c = 0;
//     c < r.length;
//     ++c
//   ) {
//     var u = intAt(r, c);
//     if (u < 0) {
//       r.charAt(c) == "-" && this.signum() == 0 && (i = !0);
//       continue;
//     }
//     (a = e * a + u),
//       ++o >= t && (this.dMultiply(n), this.dAddOffset(a, 0), (o = 0), (a = 0));
//   }
//   o > 0 && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(a, 0)),
//     i && BigInteger$2.ZERO.subTo(this, this);
// }
// function bnpFromNumber(r, e, t) {
//   if (typeof e == "number")
//     if (r < 2) this.fromInt(1);
//     else
//       for (
//         this.fromNumber(r, t),
//           this.testBit(r - 1) ||
//             this.bitwiseTo(BigInteger$2.ONE.shiftLeft(r - 1), op_or, this),
//           this.isEven() && this.dAddOffset(1, 0);
//         !this.isProbablePrime(e);

//       )
//         this.dAddOffset(2, 0),
//           this.bitLength() > r &&
//             this.subTo(BigInteger$2.ONE.shiftLeft(r - 1), this);
//   else {
//     var n = new Array(),
//       i = r & 7;
//     (n.length = (r >> 3) + 1),
//       e.nextBytes(n),
//       i > 0 ? (n[0] &= (1 << i) - 1) : (n[0] = 0),
//       this.fromString(n, 256);
//   }
// }
// function bnToByteArray() {
//   var r = this.t,
//     e = new Array();
//   e[0] = this.s;
//   var t = this.DB - ((r * this.DB) % 8),
//     n,
//     i = 0;
//   if (r-- > 0)
//     for (
//       t < this.DB &&
//       (n = this.data[r] >> t) != (this.s & this.DM) >> t &&
//       (e[i++] = n | (this.s << (this.DB - t)));
//       r >= 0;

//     )
//       t < 8
//         ? ((n = (this.data[r] & ((1 << t) - 1)) << (8 - t)),
//           (n |= this.data[--r] >> (t += this.DB - 8)))
//         : ((n = (this.data[r] >> (t -= 8)) & 255),
//           t <= 0 && ((t += this.DB), --r)),
//         n & 128 && (n |= -256),
//         i == 0 && (this.s & 128) != (n & 128) && ++i,
//         (i > 0 || n != this.s) && (e[i++] = n);
//   return e;
// }
// function bnEquals(r) {
//   return this.compareTo(r) == 0;
// }
// function bnMin(r) {
//   return this.compareTo(r) < 0 ? this : r;
// }
// function bnMax(r) {
//   return this.compareTo(r) > 0 ? this : r;
// }
// function bnpBitwiseTo(r, e, t) {
//   var n,
//     i,
//     o = Math.min(r.t, this.t);
//   for (n = 0; n < o; ++n) t.data[n] = e(this.data[n], r.data[n]);
//   if (r.t < this.t) {
//     for (i = r.s & this.DM, n = o; n < this.t; ++n)
//       t.data[n] = e(this.data[n], i);
//     t.t = this.t;
//   } else {
//     for (i = this.s & this.DM, n = o; n < r.t; ++n) t.data[n] = e(i, r.data[n]);
//     t.t = r.t;
//   }
//   (t.s = e(this.s, r.s)), t.clamp();
// }
// function op_and(r, e) {
//   return r & e;
// }
// function bnAnd(r) {
//   var e = nbi();
//   return this.bitwiseTo(r, op_and, e), e;
// }
// function op_or(r, e) {
//   return r | e;
// }
// function bnOr(r) {
//   var e = nbi();
//   return this.bitwiseTo(r, op_or, e), e;
// }
// function op_xor(r, e) {
//   return r ^ e;
// }
// function bnXor(r) {
//   var e = nbi();
//   return this.bitwiseTo(r, op_xor, e), e;
// }
// function op_andnot(r, e) {
//   return r & ~e;
// }
// function bnAndNot(r) {
//   var e = nbi();
//   return this.bitwiseTo(r, op_andnot, e), e;
// }
// function bnNot() {
//   for (var r = nbi(), e = 0; e < this.t; ++e)
//     r.data[e] = this.DM & ~this.data[e];
//   return (r.t = this.t), (r.s = ~this.s), r;
// }
// function bnShiftLeft(r) {
//   var e = nbi();
//   return r < 0 ? this.rShiftTo(-r, e) : this.lShiftTo(r, e), e;
// }
// function bnShiftRight(r) {
//   var e = nbi();
//   return r < 0 ? this.lShiftTo(-r, e) : this.rShiftTo(r, e), e;
// }
// function lbit(r) {
//   if (r == 0) return -1;
//   var e = 0;
//   return (
//     r & 65535 || ((r >>= 16), (e += 16)),
//     r & 255 || ((r >>= 8), (e += 8)),
//     r & 15 || ((r >>= 4), (e += 4)),
//     r & 3 || ((r >>= 2), (e += 2)),
//     r & 1 || ++e,
//     e
//   );
// }
// function bnGetLowestSetBit() {
//   for (var r = 0; r < this.t; ++r)
//     if (this.data[r] != 0) return r * this.DB + lbit(this.data[r]);
//   return this.s < 0 ? this.t * this.DB : -1;
// }
// function cbit(r) {
//   for (var e = 0; r != 0; ) (r &= r - 1), ++e;
//   return e;
// }
// function bnBitCount() {
//   for (var r = 0, e = this.s & this.DM, t = 0; t < this.t; ++t)
//     r += cbit(this.data[t] ^ e);
//   return r;
// }
// function bnTestBit(r) {
//   var e = Math.floor(r / this.DB);
//   return e >= this.t ? this.s != 0 : (this.data[e] & (1 << r % this.DB)) != 0;
// }
// function bnpChangeBit(r, e) {
//   var t = BigInteger$2.ONE.shiftLeft(r);
//   return this.bitwiseTo(t, e, t), t;
// }
// function bnSetBit(r) {
//   return this.changeBit(r, op_or);
// }
// function bnClearBit(r) {
//   return this.changeBit(r, op_andnot);
// }
// function bnFlipBit(r) {
//   return this.changeBit(r, op_xor);
// }
// function bnpAddTo(r, e) {
//   for (var t = 0, n = 0, i = Math.min(r.t, this.t); t < i; )
//     (n += this.data[t] + r.data[t]),
//       (e.data[t++] = n & this.DM),
//       (n >>= this.DB);
//   if (r.t < this.t) {
//     for (n += r.s; t < this.t; )
//       (n += this.data[t]), (e.data[t++] = n & this.DM), (n >>= this.DB);
//     n += this.s;
//   } else {
//     for (n += this.s; t < r.t; )
//       (n += r.data[t]), (e.data[t++] = n & this.DM), (n >>= this.DB);
//     n += r.s;
//   }
//   (e.s = n < 0 ? -1 : 0),
//     n > 0 ? (e.data[t++] = n) : n < -1 && (e.data[t++] = this.DV + n),
//     (e.t = t),
//     e.clamp();
// }
// function bnAdd(r) {
//   var e = nbi();
//   return this.addTo(r, e), e;
// }
// function bnSubtract(r) {
//   var e = nbi();
//   return this.subTo(r, e), e;
// }
// function bnMultiply(r) {
//   var e = nbi();
//   return this.multiplyTo(r, e), e;
// }
// function bnDivide(r) {
//   var e = nbi();
//   return this.divRemTo(r, e, null), e;
// }
// function bnRemainder(r) {
//   var e = nbi();
//   return this.divRemTo(r, null, e), e;
// }
// function bnDivideAndRemainder(r) {
//   var e = nbi(),
//     t = nbi();
//   return this.divRemTo(r, e, t), new Array(e, t);
// }
// function bnpDMultiply(r) {
//   (this.data[this.t] = this.am(0, r - 1, this, 0, 0, this.t)),
//     ++this.t,
//     this.clamp();
// }
// function bnpDAddOffset(r, e) {
//   if (r != 0) {
//     for (; this.t <= e; ) this.data[this.t++] = 0;
//     for (this.data[e] += r; this.data[e] >= this.DV; )
//       (this.data[e] -= this.DV),
//         ++e >= this.t && (this.data[this.t++] = 0),
//         ++this.data[e];
//   }
// }
// function NullExp() {}
// function nNop(r) {
//   return r;
// }
// function nMulTo(r, e, t) {
//   r.multiplyTo(e, t);
// }
// function nSqrTo(r, e) {
//   r.squareTo(e);
// }
// NullExp.prototype.convert = nNop;
// NullExp.prototype.revert = nNop;
// NullExp.prototype.mulTo = nMulTo;
// NullExp.prototype.sqrTo = nSqrTo;
// function bnPow(r) {
//   return this.exp(r, new NullExp());
// }
// function bnpMultiplyLowerTo(r, e, t) {
//   var n = Math.min(this.t + r.t, e);
//   for (t.s = 0, t.t = n; n > 0; ) t.data[--n] = 0;
//   var i;
//   for (i = t.t - this.t; n < i; ++n)
//     t.data[n + this.t] = this.am(0, r.data[n], t, n, 0, this.t);
//   for (i = Math.min(r.t, e); n < i; ++n) this.am(0, r.data[n], t, n, 0, e - n);
//   t.clamp();
// }
// function bnpMultiplyUpperTo(r, e, t) {
//   --e;
//   var n = (t.t = this.t + r.t - e);
//   for (t.s = 0; --n >= 0; ) t.data[n] = 0;
//   for (n = Math.max(e - this.t, 0); n < r.t; ++n)
//     t.data[this.t + n - e] = this.am(e - n, r.data[n], t, 0, 0, this.t + n - e);
//   t.clamp(), t.drShiftTo(1, t);
// }
// function Barrett(r) {
//   (this.r2 = nbi()),
//     (this.q3 = nbi()),
//     BigInteger$2.ONE.dlShiftTo(2 * r.t, this.r2),
//     (this.mu = this.r2.divide(r)),
//     (this.m = r);
// }
// function barrettConvert(r) {
//   if (r.s < 0 || r.t > 2 * this.m.t) return r.mod(this.m);
//   if (r.compareTo(this.m) < 0) return r;
//   var e = nbi();
//   return r.copyTo(e), this.reduce(e), e;
// }
// function barrettRevert(r) {
//   return r;
// }
// function barrettReduce(r) {
//   for (
//     r.drShiftTo(this.m.t - 1, this.r2),
//       r.t > this.m.t + 1 && ((r.t = this.m.t + 1), r.clamp()),
//       this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
//       this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
//     r.compareTo(this.r2) < 0;

//   )
//     r.dAddOffset(1, this.m.t + 1);
//   for (r.subTo(this.r2, r); r.compareTo(this.m) >= 0; ) r.subTo(this.m, r);
// }
// function barrettSqrTo(r, e) {
//   r.squareTo(e), this.reduce(e);
// }
// function barrettMulTo(r, e, t) {
//   r.multiplyTo(e, t), this.reduce(t);
// }
// Barrett.prototype.convert = barrettConvert;
// Barrett.prototype.revert = barrettRevert;
// Barrett.prototype.reduce = barrettReduce;
// Barrett.prototype.mulTo = barrettMulTo;
// Barrett.prototype.sqrTo = barrettSqrTo;
// function bnModPow(r, e) {
//   var t = r.bitLength(),
//     n,
//     i = nbv(1),
//     o;
//   if (t <= 0) return i;
//   t < 18
//     ? (n = 1)
//     : t < 48
//     ? (n = 3)
//     : t < 144
//     ? (n = 4)
//     : t < 768
//     ? (n = 5)
//     : (n = 6),
//     t < 8
//       ? (o = new Classic(e))
//       : e.isEven()
//       ? (o = new Barrett(e))
//       : (o = new Montgomery(e));
//   var a = new Array(),
//     c = 3,
//     u = n - 1,
//     l = (1 << n) - 1;
//   if (((a[1] = o.convert(this)), n > 1)) {
//     var h = nbi();
//     for (o.sqrTo(a[1], h); c <= l; )
//       (a[c] = nbi()), o.mulTo(h, a[c - 2], a[c]), (c += 2);
//   }
//   var f = r.t - 1,
//     d,
//     p = !0,
//     g = nbi(),
//     m;
//   for (t = nbits(r.data[f]) - 1; f >= 0; ) {
//     for (
//       t >= u
//         ? (d = (r.data[f] >> (t - u)) & l)
//         : ((d = (r.data[f] & ((1 << (t + 1)) - 1)) << (u - t)),
//           f > 0 && (d |= r.data[f - 1] >> (this.DB + t - u))),
//         c = n;
//       !(d & 1);

//     )
//       (d >>= 1), --c;
//     if (((t -= c) < 0 && ((t += this.DB), --f), p)) a[d].copyTo(i), (p = !1);
//     else {
//       for (; c > 1; ) o.sqrTo(i, g), o.sqrTo(g, i), (c -= 2);
//       c > 0 ? o.sqrTo(i, g) : ((m = i), (i = g), (g = m)), o.mulTo(g, a[d], i);
//     }
//     for (; f >= 0 && !(r.data[f] & (1 << t)); )
//       o.sqrTo(i, g),
//         (m = i),
//         (i = g),
//         (g = m),
//         --t < 0 && ((t = this.DB - 1), --f);
//   }
//   return o.revert(i);
// }
// function bnGCD(r) {
//   var e = this.s < 0 ? this.negate() : this.clone(),
//     t = r.s < 0 ? r.negate() : r.clone();
//   if (e.compareTo(t) < 0) {
//     var n = e;
//     (e = t), (t = n);
//   }
//   var i = e.getLowestSetBit(),
//     o = t.getLowestSetBit();
//   if (o < 0) return e;
//   for (
//     i < o && (o = i), o > 0 && (e.rShiftTo(o, e), t.rShiftTo(o, t));
//     e.signum() > 0;

//   )
//     (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
//       (i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
//       e.compareTo(t) >= 0
//         ? (e.subTo(t, e), e.rShiftTo(1, e))
//         : (t.subTo(e, t), t.rShiftTo(1, t));
//   return o > 0 && t.lShiftTo(o, t), t;
// }
// function bnpModInt(r) {
//   if (r <= 0) return 0;
//   var e = this.DV % r,
//     t = this.s < 0 ? r - 1 : 0;
//   if (this.t > 0)
//     if (e == 0) t = this.data[0] % r;
//     else for (var n = this.t - 1; n >= 0; --n) t = (e * t + this.data[n]) % r;
//   return t;
// }
// function bnModInverse(r) {
//   var e = r.isEven();
//   if ((this.isEven() && e) || r.signum() == 0) return BigInteger$2.ZERO;
//   for (
//     var t = r.clone(),
//       n = this.clone(),
//       i = nbv(1),
//       o = nbv(0),
//       a = nbv(0),
//       c = nbv(1);
//     t.signum() != 0;

//   ) {
//     for (; t.isEven(); )
//       t.rShiftTo(1, t),
//         e
//           ? ((!i.isEven() || !o.isEven()) && (i.addTo(this, i), o.subTo(r, o)),
//             i.rShiftTo(1, i))
//           : o.isEven() || o.subTo(r, o),
//         o.rShiftTo(1, o);
//     for (; n.isEven(); )
//       n.rShiftTo(1, n),
//         e
//           ? ((!a.isEven() || !c.isEven()) && (a.addTo(this, a), c.subTo(r, c)),
//             a.rShiftTo(1, a))
//           : c.isEven() || c.subTo(r, c),
//         c.rShiftTo(1, c);
//     t.compareTo(n) >= 0
//       ? (t.subTo(n, t), e && i.subTo(a, i), o.subTo(c, o))
//       : (n.subTo(t, n), e && a.subTo(i, a), c.subTo(o, c));
//   }
//   if (n.compareTo(BigInteger$2.ONE) != 0) return BigInteger$2.ZERO;
//   if (c.compareTo(r) >= 0) return c.subtract(r);
//   if (c.signum() < 0) c.addTo(r, c);
//   else return c;
//   return c.signum() < 0 ? c.add(r) : c;
// }
// var lowprimes = [
//     2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
//     73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
//     157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
//     239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
//     331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
//     421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
//     509,
//   ],
//   lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
// function bnIsProbablePrime(r) {
//   var e,
//     t = this.abs();
//   if (t.t == 1 && t.data[0] <= lowprimes[lowprimes.length - 1]) {
//     for (e = 0; e < lowprimes.length; ++e)
//       if (t.data[0] == lowprimes[e]) return !0;
//     return !1;
//   }
//   if (t.isEven()) return !1;
//   for (e = 1; e < lowprimes.length; ) {
//     for (var n = lowprimes[e], i = e + 1; i < lowprimes.length && n < lplim; )
//       n *= lowprimes[i++];
//     for (n = t.modInt(n); e < i; ) if (n % lowprimes[e++] == 0) return !1;
//   }
//   return t.millerRabin(r);
// }
// function bnpMillerRabin(r) {
//   var e = this.subtract(BigInteger$2.ONE),
//     t = e.getLowestSetBit();
//   if (t <= 0) return !1;
//   for (var n = e.shiftRight(t), i = bnGetPrng(), o, a = 0; a < r; ++a) {
//     do o = new BigInteger$2(this.bitLength(), i);
//     while (o.compareTo(BigInteger$2.ONE) <= 0 || o.compareTo(e) >= 0);
//     var c = o.modPow(n, this);
//     if (c.compareTo(BigInteger$2.ONE) != 0 && c.compareTo(e) != 0) {
//       for (var u = 1; u++ < t && c.compareTo(e) != 0; )
//         if (((c = c.modPowInt(2, this)), c.compareTo(BigInteger$2.ONE) == 0))
//           return !1;
//       if (c.compareTo(e) != 0) return !1;
//     }
//   }
//   return !0;
// }
// function bnGetPrng() {
//   return {
//     nextBytes: function (r) {
//       for (var e = 0; e < r.length; ++e) r[e] = Math.floor(Math.random() * 256);
//     },
//   };
// }
// BigInteger$2.prototype.chunkSize = bnpChunkSize;
// BigInteger$2.prototype.toRadix = bnpToRadix;
// BigInteger$2.prototype.fromRadix = bnpFromRadix;
// BigInteger$2.prototype.fromNumber = bnpFromNumber;
// BigInteger$2.prototype.bitwiseTo = bnpBitwiseTo;
// BigInteger$2.prototype.changeBit = bnpChangeBit;
// BigInteger$2.prototype.addTo = bnpAddTo;
// BigInteger$2.prototype.dMultiply = bnpDMultiply;
// BigInteger$2.prototype.dAddOffset = bnpDAddOffset;
// BigInteger$2.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
// BigInteger$2.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
// BigInteger$2.prototype.modInt = bnpModInt;
// BigInteger$2.prototype.millerRabin = bnpMillerRabin;
// BigInteger$2.prototype.clone = bnClone;
// BigInteger$2.prototype.intValue = bnIntValue;
// BigInteger$2.prototype.byteValue = bnByteValue;
// BigInteger$2.prototype.shortValue = bnShortValue;
// BigInteger$2.prototype.signum = bnSigNum;
// BigInteger$2.prototype.toByteArray = bnToByteArray;
// BigInteger$2.prototype.equals = bnEquals;
// BigInteger$2.prototype.min = bnMin;
// BigInteger$2.prototype.max = bnMax;
// BigInteger$2.prototype.and = bnAnd;
// BigInteger$2.prototype.or = bnOr;
// BigInteger$2.prototype.xor = bnXor;
// BigInteger$2.prototype.andNot = bnAndNot;
// BigInteger$2.prototype.not = bnNot;
// BigInteger$2.prototype.shiftLeft = bnShiftLeft;
// BigInteger$2.prototype.shiftRight = bnShiftRight;
// BigInteger$2.prototype.getLowestSetBit = bnGetLowestSetBit;
// BigInteger$2.prototype.bitCount = bnBitCount;
// BigInteger$2.prototype.testBit = bnTestBit;
// BigInteger$2.prototype.setBit = bnSetBit;
// BigInteger$2.prototype.clearBit = bnClearBit;
// BigInteger$2.prototype.flipBit = bnFlipBit;
// BigInteger$2.prototype.add = bnAdd;
// BigInteger$2.prototype.subtract = bnSubtract;
// BigInteger$2.prototype.multiply = bnMultiply;
// BigInteger$2.prototype.divide = bnDivide;
// BigInteger$2.prototype.remainder = bnRemainder;
// BigInteger$2.prototype.divideAndRemainder = bnDivideAndRemainder;
// BigInteger$2.prototype.modPow = bnModPow;
// BigInteger$2.prototype.modInverse = bnModInverse;
// BigInteger$2.prototype.pow = bnPow;
// BigInteger$2.prototype.gcd = bnGCD;
// BigInteger$2.prototype.isProbablePrime = bnIsProbablePrime;
// var forge$5 = forge$m,
//   sha1 = (forge$5.sha1 = forge$5.sha1 || {});
// forge$5.md.sha1 = forge$5.md.algorithms.sha1 = sha1;
// sha1.create = function () {
//   _initialized$1 || _init$1();
//   var r = null,
//     e = forge$5.util.createBuffer(),
//     t = new Array(80),
//     n = {
//       algorithm: "sha1",
//       blockLength: 64,
//       digestLength: 20,
//       messageLength: 0,
//       fullMessageLength: null,
//       messageLengthSize: 8,
//     };
//   return (
//     (n.start = function () {
//       (n.messageLength = 0), (n.fullMessageLength = n.messageLength64 = []);
//       for (var i = n.messageLengthSize / 4, o = 0; o < i; ++o)
//         n.fullMessageLength.push(0);
//       return (
//         (e = forge$5.util.createBuffer()),
//         (r = {
//           h0: 1732584193,
//           h1: 4023233417,
//           h2: 2562383102,
//           h3: 271733878,
//           h4: 3285377520,
//         }),
//         n
//       );
//     }),
//     n.start(),
//     (n.update = function (i, o) {
//       o === "utf8" && (i = forge$5.util.encodeUtf8(i));
//       var a = i.length;
//       (n.messageLength += a), (a = [(a / 4294967296) >>> 0, a >>> 0]);
//       for (var c = n.fullMessageLength.length - 1; c >= 0; --c)
//         (n.fullMessageLength[c] += a[1]),
//           (a[1] = a[0] + ((n.fullMessageLength[c] / 4294967296) >>> 0)),
//           (n.fullMessageLength[c] = n.fullMessageLength[c] >>> 0),
//           (a[0] = (a[1] / 4294967296) >>> 0);
//       return (
//         e.putBytes(i),
//         _update$1(r, t, e),
//         (e.read > 2048 || e.length() === 0) && e.compact(),
//         n
//       );
//     }),
//     (n.digest = function () {
//       var i = forge$5.util.createBuffer();
//       i.putBytes(e.bytes());
//       var o =
//           n.fullMessageLength[n.fullMessageLength.length - 1] +
//           n.messageLengthSize,
//         a = o & (n.blockLength - 1);
//       i.putBytes(_padding$1.substr(0, n.blockLength - a));
//       for (
//         var c, u, l = n.fullMessageLength[0] * 8, h = 0;
//         h < n.fullMessageLength.length - 1;
//         ++h
//       )
//         (c = n.fullMessageLength[h + 1] * 8),
//           (u = (c / 4294967296) >>> 0),
//           (l += u),
//           i.putInt32(l >>> 0),
//           (l = c >>> 0);
//       i.putInt32(l);
//       var f = {
//         h0: r.h0,
//         h1: r.h1,
//         h2: r.h2,
//         h3: r.h3,
//         h4: r.h4,
//       };
//       _update$1(f, t, i);
//       var d = forge$5.util.createBuffer();
//       return (
//         d.putInt32(f.h0),
//         d.putInt32(f.h1),
//         d.putInt32(f.h2),
//         d.putInt32(f.h3),
//         d.putInt32(f.h4),
//         d
//       );
//     }),
//     n
//   );
// };
// var _padding$1 = null,
//   _initialized$1 = !1;
// function _init$1() {
//   (_padding$1 = String.fromCharCode(128)),
//     (_padding$1 += forge$5.util.fillString(String.fromCharCode(0), 64)),
//     (_initialized$1 = !0);
// }
// function _update$1(r, e, t) {
//   for (var n, i, o, a, c, u, l, h, f = t.length(); f >= 64; ) {
//     for (i = r.h0, o = r.h1, a = r.h2, c = r.h3, u = r.h4, h = 0; h < 16; ++h)
//       (n = t.getInt32()),
//         (e[h] = n),
//         (l = c ^ (o & (a ^ c))),
//         (n = ((i << 5) | (i >>> 27)) + l + u + 1518500249 + n),
//         (u = c),
//         (c = a),
//         (a = ((o << 30) | (o >>> 2)) >>> 0),
//         (o = i),
//         (i = n);
//     for (; h < 20; ++h)
//       (n = e[h - 3] ^ e[h - 8] ^ e[h - 14] ^ e[h - 16]),
//         (n = (n << 1) | (n >>> 31)),
//         (e[h] = n),
//         (l = c ^ (o & (a ^ c))),
//         (n = ((i << 5) | (i >>> 27)) + l + u + 1518500249 + n),
//         (u = c),
//         (c = a),
//         (a = ((o << 30) | (o >>> 2)) >>> 0),
//         (o = i),
//         (i = n);
//     for (; h < 32; ++h)
//       (n = e[h - 3] ^ e[h - 8] ^ e[h - 14] ^ e[h - 16]),
//         (n = (n << 1) | (n >>> 31)),
//         (e[h] = n),
//         (l = o ^ a ^ c),
//         (n = ((i << 5) | (i >>> 27)) + l + u + 1859775393 + n),
//         (u = c),
//         (c = a),
//         (a = ((o << 30) | (o >>> 2)) >>> 0),
//         (o = i),
//         (i = n);
//     for (; h < 40; ++h)
//       (n = e[h - 6] ^ e[h - 16] ^ e[h - 28] ^ e[h - 32]),
//         (n = (n << 2) | (n >>> 30)),
//         (e[h] = n),
//         (l = o ^ a ^ c),
//         (n = ((i << 5) | (i >>> 27)) + l + u + 1859775393 + n),
//         (u = c),
//         (c = a),
//         (a = ((o << 30) | (o >>> 2)) >>> 0),
//         (o = i),
//         (i = n);
//     for (; h < 60; ++h)
//       (n = e[h - 6] ^ e[h - 16] ^ e[h - 28] ^ e[h - 32]),
//         (n = (n << 2) | (n >>> 30)),
//         (e[h] = n),
//         (l = (o & a) | (c & (o ^ a))),
//         (n = ((i << 5) | (i >>> 27)) + l + u + 2400959708 + n),
//         (u = c),
//         (c = a),
//         (a = ((o << 30) | (o >>> 2)) >>> 0),
//         (o = i),
//         (i = n);
//     for (; h < 80; ++h)
//       (n = e[h - 6] ^ e[h - 16] ^ e[h - 28] ^ e[h - 32]),
//         (n = (n << 2) | (n >>> 30)),
//         (e[h] = n),
//         (l = o ^ a ^ c),
//         (n = ((i << 5) | (i >>> 27)) + l + u + 3395469782 + n),
//         (u = c),
//         (c = a),
//         (a = ((o << 30) | (o >>> 2)) >>> 0),
//         (o = i),
//         (i = n);
//     (r.h0 = (r.h0 + i) | 0),
//       (r.h1 = (r.h1 + o) | 0),
//       (r.h2 = (r.h2 + a) | 0),
//       (r.h3 = (r.h3 + c) | 0),
//       (r.h4 = (r.h4 + u) | 0),
//       (f -= 64);
//   }
// }
// var forge$4 = forge$m,
//   pkcs1 = (forge$4.pkcs1 = forge$4.pkcs1 || {});
// pkcs1.encode_rsa_oaep = function (r, e, t) {
//   var n, i, o, a;
//   typeof t == "string"
//     ? ((n = t), (i = arguments[3] || void 0), (o = arguments[4] || void 0))
//     : t &&
//       ((n = t.label || void 0),
//       (i = t.seed || void 0),
//       (o = t.md || void 0),
//       t.mgf1 && t.mgf1.md && (a = t.mgf1.md)),
//     o ? o.start() : (o = forge$4.md.sha1.create()),
//     a || (a = o);
//   var c = Math.ceil(r.n.bitLength() / 8),
//     u = c - 2 * o.digestLength - 2;
//   if (e.length > u) {
//     var l = new Error("RSAES-OAEP input message length is too long.");
//     throw ((l.length = e.length), (l.maxLength = u), l);
//   }
//   n || (n = ""), o.update(n, "raw");
//   for (var h = o.digest(), f = "", d = u - e.length, p = 0; p < d; p++)
//     f += "\0";
//   var g = h.getBytes() + f + "" + e;
//   if (!i) i = forge$4.random.getBytes(o.digestLength);
//   else if (i.length !== o.digestLength) {
//     var l = new Error(
//       "Invalid RSAES-OAEP seed. The seed length must match the digest length."
//     );
//     throw ((l.seedLength = i.length), (l.digestLength = o.digestLength), l);
//   }
//   var m = rsa_mgf1(i, c - o.digestLength - 1, a),
//     b = forge$4.util.xorBytes(g, m, g.length),
//     _ = rsa_mgf1(b, o.digestLength, a),
//     w = forge$4.util.xorBytes(i, _, i.length);
//   return "\0" + w + b;
// };
// pkcs1.decode_rsa_oaep = function (r, e, t) {
//   var n, i, o;
//   typeof t == "string"
//     ? ((n = t), (i = arguments[3] || void 0))
//     : t &&
//       ((n = t.label || void 0),
//       (i = t.md || void 0),
//       t.mgf1 && t.mgf1.md && (o = t.mgf1.md));
//   var a = Math.ceil(r.n.bitLength() / 8);
//   if (e.length !== a) {
//     var b = new Error("RSAES-OAEP encoded message length is invalid.");
//     throw ((b.length = e.length), (b.expectedLength = a), b);
//   }
//   if (
//     (i === void 0 ? (i = forge$4.md.sha1.create()) : i.start(),
//     o || (o = i),
//     a < 2 * i.digestLength + 2)
//   )
//     throw new Error("RSAES-OAEP key is too short for the hash function.");
//   n || (n = ""), i.update(n, "raw");
//   for (
//     var c = i.digest().getBytes(),
//       u = e.charAt(0),
//       l = e.substring(1, i.digestLength + 1),
//       h = e.substring(1 + i.digestLength),
//       f = rsa_mgf1(h, i.digestLength, o),
//       d = forge$4.util.xorBytes(l, f, l.length),
//       p = rsa_mgf1(d, a - i.digestLength - 1, o),
//       g = forge$4.util.xorBytes(h, p, h.length),
//       m = g.substring(0, i.digestLength),
//       b = u !== "\0",
//       _ = 0;
//     _ < i.digestLength;
//     ++_
//   )
//     b |= c.charAt(_) !== m.charAt(_);
//   for (var w = 1, E = i.digestLength, v = i.digestLength; v < g.length; v++) {
//     var S = g.charCodeAt(v),
//       I = (S & 1) ^ 1,
//       T = w ? 65534 : 0;
//     (b |= S & T), (w = w & I), (E += w);
//   }
//   if (b || g.charCodeAt(E) !== 1)
//     throw new Error("Invalid RSAES-OAEP padding.");
//   return g.substring(E + 1);
// };
// function rsa_mgf1(r, e, t) {
//   t || (t = forge$4.md.sha1.create());
//   for (var n = "", i = Math.ceil(e / t.digestLength), o = 0; o < i; ++o) {
//     var a = String.fromCharCode(
//       (o >> 24) & 255,
//       (o >> 16) & 255,
//       (o >> 8) & 255,
//       o & 255
//     );
//     t.start(), t.update(r + a), (n += t.digest().getBytes());
//   }
//   return n.substring(0, e);
// }

// var forge$2 = forge$m;
// if (typeof BigInteger$1 > "u") var BigInteger$1 = forge$2.jsbn.BigInteger;
// var _crypto = forge$2.util.isNodejs ? require$$8 : null,
//   asn1$1 = forge$2.asn1,
//   util = forge$2.util;
// forge$2.pki = forge$2.pki || {};
// forge$2.pki.rsa = forge$2.rsa = forge$2.rsa || {};
// var pki$1 = forge$2.pki,
//   GCD_30_DELTA = [6, 4, 2, 4, 2, 4, 6, 2],
//   privateKeyValidator = {
//     name: "PrivateKeyInfo",
//     tagClass: asn1$1.Class.UNIVERSAL,
//     type: asn1$1.Type.SEQUENCE,
//     constructed: !0,
//     value: [
//       {
//         name: "PrivateKeyInfo.version",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyVersion",
//       },
//       {
//         name: "PrivateKeyInfo.privateKeyAlgorithm",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.SEQUENCE,
//         constructed: !0,
//         value: [
//           {
//             name: "AlgorithmIdentifier.algorithm",
//             tagClass: asn1$1.Class.UNIVERSAL,
//             type: asn1$1.Type.OID,
//             constructed: !1,
//             capture: "privateKeyOid",
//           },
//         ],
//       },
//       {
//         name: "PrivateKeyInfo",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.OCTETSTRING,
//         constructed: !1,
//         capture: "privateKey",
//       },
//     ],
//   },
//   rsaPrivateKeyValidator = {
//     name: "RSAPrivateKey",
//     tagClass: asn1$1.Class.UNIVERSAL,
//     type: asn1$1.Type.SEQUENCE,
//     constructed: !0,
//     value: [
//       {
//         name: "RSAPrivateKey.version",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyVersion",
//       },
//       {
//         name: "RSAPrivateKey.modulus",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyModulus",
//       },
//       {
//         name: "RSAPrivateKey.publicExponent",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyPublicExponent",
//       },
//       {
//         name: "RSAPrivateKey.privateExponent",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyPrivateExponent",
//       },
//       {
//         name: "RSAPrivateKey.prime1",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyPrime1",
//       },
//       {
//         name: "RSAPrivateKey.prime2",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyPrime2",
//       },
//       {
//         name: "RSAPrivateKey.exponent1",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyExponent1",
//       },
//       {
//         name: "RSAPrivateKey.exponent2",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyExponent2",
//       },
//       {
//         name: "RSAPrivateKey.coefficient",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "privateKeyCoefficient",
//       },
//     ],
//   },
//   rsaPublicKeyValidator = {
//     name: "RSAPublicKey",
//     tagClass: asn1$1.Class.UNIVERSAL,
//     type: asn1$1.Type.SEQUENCE,
//     constructed: !0,
//     value: [
//       {
//         name: "RSAPublicKey.modulus",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "publicKeyModulus",
//       },
//       {
//         name: "RSAPublicKey.exponent",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.INTEGER,
//         constructed: !1,
//         capture: "publicKeyExponent",
//       },
//     ],
//   },
//   publicKeyValidator = (forge$2.pki.rsa.publicKeyValidator = {
//     name: "SubjectPublicKeyInfo",
//     tagClass: asn1$1.Class.UNIVERSAL,
//     type: asn1$1.Type.SEQUENCE,
//     constructed: !0,
//     captureAsn1: "subjectPublicKeyInfo",
//     value: [
//       {
//         name: "SubjectPublicKeyInfo.AlgorithmIdentifier",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.SEQUENCE,
//         constructed: !0,
//         value: [
//           {
//             name: "AlgorithmIdentifier.algorithm",
//             tagClass: asn1$1.Class.UNIVERSAL,
//             type: asn1$1.Type.OID,
//             constructed: !1,
//             capture: "publicKeyOid",
//           },
//         ],
//       },
//       {
//         name: "SubjectPublicKeyInfo.subjectPublicKey",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.BITSTRING,
//         constructed: !1,
//         value: [
//           {
//             name: "SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",
//             tagClass: asn1$1.Class.UNIVERSAL,
//             type: asn1$1.Type.SEQUENCE,
//             constructed: !0,
//             optional: !0,
//             captureAsn1: "rsaPublicKey",
//           },
//         ],
//       },
//     ],
//   }),
//   digestInfoValidator = {
//     name: "DigestInfo",
//     tagClass: asn1$1.Class.UNIVERSAL,
//     type: asn1$1.Type.SEQUENCE,
//     constructed: !0,
//     value: [
//       {
//         name: "DigestInfo.DigestAlgorithm",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.SEQUENCE,
//         constructed: !0,
//         value: [
//           {
//             name: "DigestInfo.DigestAlgorithm.algorithmIdentifier",
//             tagClass: asn1$1.Class.UNIVERSAL,
//             type: asn1$1.Type.OID,
//             constructed: !1,
//             capture: "algorithmIdentifier",
//           },
//           {
//             name: "DigestInfo.DigestAlgorithm.parameters",
//             tagClass: asn1$1.Class.UNIVERSAL,
//             type: asn1$1.Type.NULL,
//             capture: "parameters",
//             optional: !0,
//             constructed: !1,
//           },
//         ],
//       },
//       {
//         name: "DigestInfo.digest",
//         tagClass: asn1$1.Class.UNIVERSAL,
//         type: asn1$1.Type.OCTETSTRING,
//         constructed: !1,
//         capture: "digest",
//       },
//     ],
//   },
//   emsaPkcs1v15encode = function (r) {
//     var e;
//     if (r.algorithm in pki$1.oids) e = pki$1.oids[r.algorithm];
//     else {
//       var t = new Error("Unknown message digest algorithm.");
//       throw ((t.algorithm = r.algorithm), t);
//     }
//     var n = asn1$1.oidToDer(e).getBytes(),
//       i = asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, []),
//       o = asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, []);
//     o.value.push(asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.OID, !1, n)),
//       o.value.push(
//         asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.NULL, !1, "")
//       );
//     var a = asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.OCTETSTRING,
//       !1,
//       r.digest().getBytes()
//     );
//     return i.value.push(o), i.value.push(a), asn1$1.toDer(i).getBytes();
//   },
//   _modPow = function (r, e, t) {
//     if (t) return r.modPow(e.e, e.n);
//     if (!e.p || !e.q) return r.modPow(e.d, e.n);
//     e.dP || (e.dP = e.d.mod(e.p.subtract(BigInteger$1.ONE))),
//       e.dQ || (e.dQ = e.d.mod(e.q.subtract(BigInteger$1.ONE))),
//       e.qInv || (e.qInv = e.q.modInverse(e.p));
//     var n;
//     do
//       n = new BigInteger$1(
//         forge$2.util.bytesToHex(forge$2.random.getBytes(e.n.bitLength() / 8)),
//         16
//       );
//     while (n.compareTo(e.n) >= 0 || !n.gcd(e.n).equals(BigInteger$1.ONE));
//     r = r.multiply(n.modPow(e.e, e.n)).mod(e.n);
//     for (
//       var i = r.mod(e.p).modPow(e.dP, e.p), o = r.mod(e.q).modPow(e.dQ, e.q);
//       i.compareTo(o) < 0;

//     )
//       i = i.add(e.p);
//     var a = i.subtract(o).multiply(e.qInv).mod(e.p).multiply(e.q).add(o);
//     return (a = a.multiply(n.modInverse(e.n)).mod(e.n)), a;
//   };
// pki$1.rsa.encrypt = function (r, e, t) {
//   var n = t,
//     i,
//     o = Math.ceil(e.n.bitLength() / 8);
//   t !== !1 && t !== !0
//     ? ((n = t === 2), (i = _encodePkcs1_v1_5(r, e, t)))
//     : ((i = forge$2.util.createBuffer()), i.putBytes(r));
//   for (
//     var a = new BigInteger$1(i.toHex(), 16),
//       c = _modPow(a, e, n),
//       u = c.toString(16),
//       l = forge$2.util.createBuffer(),
//       h = o - Math.ceil(u.length / 2);
//     h > 0;

//   )
//     l.putByte(0), --h;
//   return l.putBytes(forge$2.util.hexToBytes(u)), l.getBytes();
// };
// pki$1.rsa.decrypt = function (r, e, t, n) {
//   var i = Math.ceil(e.n.bitLength() / 8);
//   if (r.length !== i) {
//     var o = new Error("Encrypted message length is invalid.");
//     throw ((o.length = r.length), (o.expected = i), o);
//   }
//   var a = new BigInteger$1(forge$2.util.createBuffer(r).toHex(), 16);
//   if (a.compareTo(e.n) >= 0) throw new Error("Encrypted message is invalid.");
//   for (
//     var c = _modPow(a, e, t),
//       u = c.toString(16),
//       l = forge$2.util.createBuffer(),
//       h = i - Math.ceil(u.length / 2);
//     h > 0;

//   )
//     l.putByte(0), --h;
//   return (
//     l.putBytes(forge$2.util.hexToBytes(u)),
//     n !== !1 ? _decodePkcs1_v1_5(l.getBytes(), e, t) : l.getBytes()
//   );
// };
// pki$1.rsa.createKeyPairGenerationState = function (r, e, t) {
//   typeof r == "string" && (r = parseInt(r, 10)), (r = r || 2048), (t = t || {});
//   var n = t.prng || forge$2.random,
//     i = {
//       nextBytes: function (c) {
//         for (var u = n.getBytesSync(c.length), l = 0; l < c.length; ++l)
//           c[l] = u.charCodeAt(l);
//       },
//     },
//     o = t.algorithm || "PRIMEINC",
//     a;
//   if (o === "PRIMEINC")
//     (a = {
//       algorithm: o,
//       state: 0,
//       bits: r,
//       rng: i,
//       eInt: e || 65537,
//       e: new BigInteger$1(null),
//       p: null,
//       q: null,
//       qBits: r >> 1,
//       pBits: r - (r >> 1),
//       pqState: 0,
//       num: null,
//       keys: null,
//     }),
//       a.e.fromInt(a.eInt);
//   else throw new Error("Invalid key generation algorithm: " + o);
//   return a;
// };
// pki$1.rsa.stepKeyPairGenerationState = function (r, e) {
//   "algorithm" in r || (r.algorithm = "PRIMEINC");
//   var t = new BigInteger$1(null);
//   t.fromInt(30);
//   for (
//     var n = 0,
//       i = function (f, d) {
//         return f | d;
//       },
//       o = +new Date(),
//       a,
//       c = 0;
//     r.keys === null && (e <= 0 || c < e);

//   ) {
//     if (r.state === 0) {
//       var u = r.p === null ? r.pBits : r.qBits,
//         l = u - 1;
//       r.pqState === 0
//         ? ((r.num = new BigInteger$1(u, r.rng)),
//           r.num.testBit(l) ||
//             r.num.bitwiseTo(BigInteger$1.ONE.shiftLeft(l), i, r.num),
//           r.num.dAddOffset(31 - r.num.mod(t).byteValue(), 0),
//           (n = 0),
//           ++r.pqState)
//         : r.pqState === 1
//         ? r.num.bitLength() > u
//           ? (r.pqState = 0)
//           : r.num.isProbablePrime(_getMillerRabinTests(r.num.bitLength()))
//           ? ++r.pqState
//           : r.num.dAddOffset(GCD_30_DELTA[n++ % 8], 0)
//         : r.pqState === 2
//         ? (r.pqState =
//             r.num
//               .subtract(BigInteger$1.ONE)
//               .gcd(r.e)
//               .compareTo(BigInteger$1.ONE) === 0
//               ? 3
//               : 0)
//         : r.pqState === 3 &&
//           ((r.pqState = 0),
//           r.p === null ? (r.p = r.num) : (r.q = r.num),
//           r.p !== null && r.q !== null && ++r.state,
//           (r.num = null));
//     } else if (r.state === 1)
//       r.p.compareTo(r.q) < 0 && ((r.num = r.p), (r.p = r.q), (r.q = r.num)),
//         ++r.state;
//     else if (r.state === 2)
//       (r.p1 = r.p.subtract(BigInteger$1.ONE)),
//         (r.q1 = r.q.subtract(BigInteger$1.ONE)),
//         (r.phi = r.p1.multiply(r.q1)),
//         ++r.state;
//     else if (r.state === 3)
//       r.phi.gcd(r.e).compareTo(BigInteger$1.ONE) === 0
//         ? ++r.state
//         : ((r.p = null), (r.q = null), (r.state = 0));
//     else if (r.state === 4)
//       (r.n = r.p.multiply(r.q)),
//         r.n.bitLength() === r.bits ? ++r.state : ((r.q = null), (r.state = 0));
//     else if (r.state === 5) {
//       var h = r.e.modInverse(r.phi);
//       r.keys = {
//         privateKey: pki$1.rsa.setPrivateKey(
//           r.n,
//           r.e,
//           h,
//           r.p,
//           r.q,
//           h.mod(r.p1),
//           h.mod(r.q1),
//           r.q.modInverse(r.p)
//         ),
//         publicKey: pki$1.rsa.setPublicKey(r.n, r.e),
//       };
//     }
//     (a = +new Date()), (c += a - o), (o = a);
//   }
//   return r.keys !== null;
// };
// pki$1.rsa.generateKeyPair = function (r, e, t, n) {
//   if (
//     (arguments.length === 1
//       ? typeof r == "object"
//         ? ((t = r), (r = void 0))
//         : typeof r == "function" && ((n = r), (r = void 0))
//       : arguments.length === 2
//       ? typeof r == "number"
//         ? typeof e == "function"
//           ? ((n = e), (e = void 0))
//           : typeof e != "number" && ((t = e), (e = void 0))
//         : ((t = r), (n = e), (r = void 0), (e = void 0))
//       : arguments.length === 3 &&
//         (typeof e == "number"
//           ? typeof t == "function" && ((n = t), (t = void 0))
//           : ((n = t), (t = e), (e = void 0))),
//     (t = t || {}),
//     r === void 0 && (r = t.bits || 2048),
//     e === void 0 && (e = t.e || 65537),
//     !forge$2.options.usePureJavaScript &&
//       !t.prng &&
//       r >= 256 &&
//       r <= 16384 &&
//       (e === 65537 || e === 3))
//   ) {
//     if (n) {
//       if (_detectNodeCrypto("generateKeyPair"))
//         return _crypto.generateKeyPair(
//           "rsa",
//           {
//             modulusLength: r,
//             publicExponent: e,
//             publicKeyEncoding: {
//               type: "spki",
//               format: "pem",
//             },
//             privateKeyEncoding: {
//               type: "pkcs8",
//               format: "pem",
//             },
//           },
//           function (c, u, l) {
//             if (c) return n(c);
//             n(null, {
//               privateKey: pki$1.privateKeyFromPem(l),
//               publicKey: pki$1.publicKeyFromPem(u),
//             });
//           }
//         );
//       if (
//         _detectSubtleCrypto("generateKey") &&
//         _detectSubtleCrypto("exportKey")
//       )
//         return util.globalScope.crypto.subtle
//           .generateKey(
//             {
//               name: "RSASSA-PKCS1-v1_5",
//               modulusLength: r,
//               publicExponent: _intToUint8Array(e),
//               hash: {
//                 name: "SHA-256",
//               },
//             },
//             !0,
//             ["sign", "verify"]
//           )
//           .then(function (c) {
//             return util.globalScope.crypto.subtle.exportKey(
//               "pkcs8",
//               c.privateKey
//             );
//           })
//           .then(void 0, function (c) {
//             n(c);
//           })
//           .then(function (c) {
//             if (c) {
//               var u = pki$1.privateKeyFromAsn1(
//                 asn1$1.fromDer(forge$2.util.createBuffer(c))
//               );
//               n(null, {
//                 privateKey: u,
//                 publicKey: pki$1.setRsaPublicKey(u.n, u.e),
//               });
//             }
//           });
//       if (
//         _detectSubtleMsCrypto("generateKey") &&
//         _detectSubtleMsCrypto("exportKey")
//       ) {
//         var i = util.globalScope.msCrypto.subtle.generateKey(
//           {
//             name: "RSASSA-PKCS1-v1_5",
//             modulusLength: r,
//             publicExponent: _intToUint8Array(e),
//             hash: {
//               name: "SHA-256",
//             },
//           },
//           !0,
//           ["sign", "verify"]
//         );
//         (i.oncomplete = function (c) {
//           var u = c.target.result,
//             l = util.globalScope.msCrypto.subtle.exportKey(
//               "pkcs8",
//               u.privateKey
//             );
//           (l.oncomplete = function (h) {
//             var f = h.target.result,
//               d = pki$1.privateKeyFromAsn1(
//                 asn1$1.fromDer(forge$2.util.createBuffer(f))
//               );
//             n(null, {
//               privateKey: d,
//               publicKey: pki$1.setRsaPublicKey(d.n, d.e),
//             });
//           }),
//             (l.onerror = function (h) {
//               n(h);
//             });
//         }),
//           (i.onerror = function (c) {
//             n(c);
//           });
//         return;
//       }
//     } else if (_detectNodeCrypto("generateKeyPairSync")) {
//       var o = _crypto.generateKeyPairSync("rsa", {
//         modulusLength: r,
//         publicExponent: e,
//         publicKeyEncoding: {
//           type: "spki",
//           format: "pem",
//         },
//         privateKeyEncoding: {
//           type: "pkcs8",
//           format: "pem",
//         },
//       });
//       return {
//         privateKey: pki$1.privateKeyFromPem(o.privateKey),
//         publicKey: pki$1.publicKeyFromPem(o.publicKey),
//       };
//     }
//   }
//   var a = pki$1.rsa.createKeyPairGenerationState(r, e, t);
//   if (!n) return pki$1.rsa.stepKeyPairGenerationState(a, 0), a.keys;
//   _generateKeyPair(a, t, n);
// };
// pki$1.setRsaPublicKey = pki$1.rsa.setPublicKey = function (r, e) {
//   var t = {
//     n: r,
//     e,
//   };
//   return (
//     (t.encrypt = function (n, i, o) {
//       if (
//         (typeof i == "string"
//           ? (i = i.toUpperCase())
//           : i === void 0 && (i = "RSAES-PKCS1-V1_5"),
//         i === "RSAES-PKCS1-V1_5")
//       )
//         i = {
//           encode: function (c, u, l) {
//             return _encodePkcs1_v1_5(c, u, 2).getBytes();
//           },
//         };
//       else if (i === "RSA-OAEP" || i === "RSAES-OAEP")
//         i = {
//           encode: function (c, u) {
//             return forge$2.pkcs1.encode_rsa_oaep(u, c, o);
//           },
//         };
//       else if (["RAW", "NONE", "NULL", null].indexOf(i) !== -1)
//         i = {
//           encode: function (c) {
//             return c;
//           },
//         };
//       else if (typeof i == "string")
//         throw new Error('Unsupported encryption scheme: "' + i + '".');
//       var a = i.encode(n, t, !0);
//       return pki$1.rsa.encrypt(a, t, !0);
//     }),
//     (t.verify = function (n, i, o, a) {
//       typeof o == "string"
//         ? (o = o.toUpperCase())
//         : o === void 0 && (o = "RSASSA-PKCS1-V1_5"),
//         a === void 0 &&
//           (a = {
//             _parseAllDigestBytes: !0,
//           }),
//         "_parseAllDigestBytes" in a || (a._parseAllDigestBytes = !0),
//         o === "RSASSA-PKCS1-V1_5"
//           ? (o = {
//               verify: function (u, l) {
//                 l = _decodePkcs1_v1_5(l, t, !0);
//                 var h = asn1$1.fromDer(l, {
//                     parseAllBytes: a._parseAllDigestBytes,
//                   }),
//                   f = {},
//                   d = [];
//                 if (!asn1$1.validate(h, digestInfoValidator, f, d)) {
//                   var p = new Error(
//                     "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value."
//                   );
//                   throw ((p.errors = d), p);
//                 }
//                 var g = asn1$1.derToOid(f.algorithmIdentifier);
//                 if (
//                   !(
//                     g === forge$2.oids.md2 ||
//                     g === forge$2.oids.md5 ||
//                     g === forge$2.oids.sha1 ||
//                     g === forge$2.oids.sha224 ||
//                     g === forge$2.oids.sha256 ||
//                     g === forge$2.oids.sha384 ||
//                     g === forge$2.oids.sha512 ||
//                     g === forge$2.oids["sha512-224"] ||
//                     g === forge$2.oids["sha512-256"]
//                   )
//                 ) {
//                   var p = new Error(
//                     "Unknown RSASSA-PKCS1-v1_5 DigestAlgorithm identifier."
//                   );
//                   throw ((p.oid = g), p);
//                 }
//                 if (
//                   (g === forge$2.oids.md2 || g === forge$2.oids.md5) &&
//                   !("parameters" in f)
//                 )
//                   throw new Error(
//                     "ASN.1 object does not contain a valid RSASSA-PKCS1-v1_5 DigestInfo value. Missing algorithm identifer NULL parameters."
//                   );
//                 return u === f.digest;
//               },
//             })
//           : (o === "NONE" || o === "NULL" || o === null) &&
//             (o = {
//               verify: function (u, l) {
//                 return (l = _decodePkcs1_v1_5(l, t, !0)), u === l;
//               },
//             });
//       var c = pki$1.rsa.decrypt(i, t, !0, !1);
//       return o.verify(n, c, t.n.bitLength());
//     }),
//     t
//   );
// };
// pki$1.setRsaPrivateKey = pki$1.rsa.setPrivateKey = function (
//   r,
//   e,
//   t,
//   n,
//   i,
//   o,
//   a,
//   c
// ) {
//   var u = {
//     n: r,
//     e,
//     d: t,
//     p: n,
//     q: i,
//     dP: o,
//     dQ: a,
//     qInv: c,
//   };
//   return (
//     (u.decrypt = function (l, h, f) {
//       typeof h == "string"
//         ? (h = h.toUpperCase())
//         : h === void 0 && (h = "RSAES-PKCS1-V1_5");
//       var d = pki$1.rsa.decrypt(l, u, !1, !1);
//       if (h === "RSAES-PKCS1-V1_5")
//         h = {
//           decode: _decodePkcs1_v1_5,
//         };
//       else if (h === "RSA-OAEP" || h === "RSAES-OAEP")
//         h = {
//           decode: function (p, g) {
//             return forge$2.pkcs1.decode_rsa_oaep(g, p, f);
//           },
//         };
//       else if (["RAW", "NONE", "NULL", null].indexOf(h) !== -1)
//         h = {
//           decode: function (p) {
//             return p;
//           },
//         };
//       else throw new Error('Unsupported encryption scheme: "' + h + '".');
//       return h.decode(d, u, !1);
//     }),
//     (u.sign = function (l, h) {
//       var f = !1;
//       typeof h == "string" && (h = h.toUpperCase()),
//         h === void 0 || h === "RSASSA-PKCS1-V1_5"
//           ? ((h = {
//               encode: emsaPkcs1v15encode,
//             }),
//             (f = 1))
//           : (h === "NONE" || h === "NULL" || h === null) &&
//             ((h = {
//               encode: function () {
//                 return l;
//               },
//             }),
//             (f = 1));
//       var d = h.encode(l, u.n.bitLength());
//       return pki$1.rsa.encrypt(d, u, f);
//     }),
//     u
//   );
// };
// pki$1.wrapRsaPrivateKey = function (r) {
//   return asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, [
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       asn1$1.integerToDer(0).getBytes()
//     ),
//     asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, [
//       asn1$1.create(
//         asn1$1.Class.UNIVERSAL,
//         asn1$1.Type.OID,
//         !1,
//         asn1$1.oidToDer(pki$1.oids.rsaEncryption).getBytes()
//       ),
//       asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.NULL, !1, ""),
//     ]),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.OCTETSTRING,
//       !1,
//       asn1$1.toDer(r).getBytes()
//     ),
//   ]);
// };
// pki$1.privateKeyFromAsn1 = function (r) {
//   var e = {},
//     t = [];
//   if (
//     (asn1$1.validate(r, privateKeyValidator, e, t) &&
//       (r = asn1$1.fromDer(forge$2.util.createBuffer(e.privateKey))),
//     (e = {}),
//     (t = []),
//     !asn1$1.validate(r, rsaPrivateKeyValidator, e, t))
//   ) {
//     var n = new Error(
//       "Cannot read private key. ASN.1 object does not contain an RSAPrivateKey."
//     );
//     throw ((n.errors = t), n);
//   }
//   var i, o, a, c, u, l, h, f;
//   return (
//     (i = forge$2.util.createBuffer(e.privateKeyModulus).toHex()),
//     (o = forge$2.util.createBuffer(e.privateKeyPublicExponent).toHex()),
//     (a = forge$2.util.createBuffer(e.privateKeyPrivateExponent).toHex()),
//     (c = forge$2.util.createBuffer(e.privateKeyPrime1).toHex()),
//     (u = forge$2.util.createBuffer(e.privateKeyPrime2).toHex()),
//     (l = forge$2.util.createBuffer(e.privateKeyExponent1).toHex()),
//     (h = forge$2.util.createBuffer(e.privateKeyExponent2).toHex()),
//     (f = forge$2.util.createBuffer(e.privateKeyCoefficient).toHex()),
//     pki$1.setRsaPrivateKey(
//       new BigInteger$1(i, 16),
//       new BigInteger$1(o, 16),
//       new BigInteger$1(a, 16),
//       new BigInteger$1(c, 16),
//       new BigInteger$1(u, 16),
//       new BigInteger$1(l, 16),
//       new BigInteger$1(h, 16),
//       new BigInteger$1(f, 16)
//     )
//   );
// };
// pki$1.privateKeyToAsn1 = pki$1.privateKeyToRSAPrivateKey = function (r) {
//   return asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, [
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       asn1$1.integerToDer(0).getBytes()
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.n)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.e)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.d)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.p)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.q)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.dP)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.dQ)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.qInv)
//     ),
//   ]);
// };
// pki$1.publicKeyFromAsn1 = function (r) {
//   var e = {},
//     t = [];
//   if (asn1$1.validate(r, publicKeyValidator, e, t)) {
//     var n = asn1$1.derToOid(e.publicKeyOid);
//     if (n !== pki$1.oids.rsaEncryption) {
//       var i = new Error("Cannot read public key. Unknown OID.");
//       throw ((i.oid = n), i);
//     }
//     r = e.rsaPublicKey;
//   }
//   if (((t = []), !asn1$1.validate(r, rsaPublicKeyValidator, e, t))) {
//     var i = new Error(
//       "Cannot read public key. ASN.1 object does not contain an RSAPublicKey."
//     );
//     throw ((i.errors = t), i);
//   }
//   var o = forge$2.util.createBuffer(e.publicKeyModulus).toHex(),
//     a = forge$2.util.createBuffer(e.publicKeyExponent).toHex();
//   return pki$1.setRsaPublicKey(
//     new BigInteger$1(o, 16),
//     new BigInteger$1(a, 16)
//   );
// };
// pki$1.publicKeyToAsn1 = pki$1.publicKeyToSubjectPublicKeyInfo = function (r) {
//   return asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, [
//     asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, [
//       asn1$1.create(
//         asn1$1.Class.UNIVERSAL,
//         asn1$1.Type.OID,
//         !1,
//         asn1$1.oidToDer(pki$1.oids.rsaEncryption).getBytes()
//       ),
//       asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.NULL, !1, ""),
//     ]),
//     asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.BITSTRING, !1, [
//       pki$1.publicKeyToRSAPublicKey(r),
//     ]),
//   ]);
// };
// pki$1.publicKeyToRSAPublicKey = function (r) {
//   return asn1$1.create(asn1$1.Class.UNIVERSAL, asn1$1.Type.SEQUENCE, !0, [
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.n)
//     ),
//     asn1$1.create(
//       asn1$1.Class.UNIVERSAL,
//       asn1$1.Type.INTEGER,
//       !1,
//       _bnToBytes(r.e)
//     ),
//   ]);
// };
// function _encodePkcs1_v1_5(r, e, t) {
//   var n = forge$2.util.createBuffer(),
//     i = Math.ceil(e.n.bitLength() / 8);
//   if (r.length > i - 11) {
//     var o = new Error("Message is too long for PKCS#1 v1.5 padding.");
//     throw ((o.length = r.length), (o.max = i - 11), o);
//   }
//   n.putByte(0), n.putByte(t);
//   var a = i - 3 - r.length,
//     c;
//   if (t === 0 || t === 1) {
//     c = t === 0 ? 0 : 255;
//     for (var u = 0; u < a; ++u) n.putByte(c);
//   } else
//     for (; a > 0; ) {
//       for (var l = 0, h = forge$2.random.getBytes(a), u = 0; u < a; ++u)
//         (c = h.charCodeAt(u)), c === 0 ? ++l : n.putByte(c);
//       a = l;
//     }
//   return n.putByte(0), n.putBytes(r), n;
// }
// function _decodePkcs1_v1_5(r, e, t, n) {
//   var i = Math.ceil(e.n.bitLength() / 8),
//     o = forge$2.util.createBuffer(r),
//     a = o.getByte(),
//     c = o.getByte();
//   if (
//     a !== 0 ||
//     (t && c !== 0 && c !== 1) ||
//     (!t && c != 2) ||
//     (t && c === 0 && typeof n > "u")
//   )
//     throw new Error("Encryption block is invalid.");
//   var u = 0;
//   if (c === 0) {
//     u = i - 3 - n;
//     for (var l = 0; l < u; ++l)
//       if (o.getByte() !== 0) throw new Error("Encryption block is invalid.");
//   } else if (c === 1)
//     for (u = 0; o.length() > 1; ) {
//       if (o.getByte() !== 255) {
//         --o.read;
//         break;
//       }
//       ++u;
//     }
//   else if (c === 2)
//     for (u = 0; o.length() > 1; ) {
//       if (o.getByte() === 0) {
//         --o.read;
//         break;
//       }
//       ++u;
//     }
//   var h = o.getByte();
//   if (h !== 0 || u !== i - 3 - o.length())
//     throw new Error("Encryption block is invalid.");
//   return o.getBytes();
// }
// function _generateKeyPair(r, e, t) {
//   typeof e == "function" && ((t = e), (e = {})), (e = e || {});
//   var n = {
//     algorithm: {
//       name: e.algorithm || "PRIMEINC",
//       options: {
//         workers: e.workers || 2,
//         workLoad: e.workLoad || 100,
//         workerScript: e.workerScript,
//       },
//     },
//   };
//   "prng" in e && (n.prng = e.prng), i();
//   function i() {
//     o(r.pBits, function (c, u) {
//       if (c) return t(c);
//       if (((r.p = u), r.q !== null)) return a(c, r.q);
//       o(r.qBits, a);
//     });
//   }
//   function o(c, u) {
//     forge$2.prime.generateProbablePrime(c, n, u);
//   }
//   function a(c, u) {
//     if (c) return t(c);
//     if (((r.q = u), r.p.compareTo(r.q) < 0)) {
//       var l = r.p;
//       (r.p = r.q), (r.q = l);
//     }
//     if (
//       r.p.subtract(BigInteger$1.ONE).gcd(r.e).compareTo(BigInteger$1.ONE) !== 0
//     ) {
//       (r.p = null), i();
//       return;
//     }
//     if (
//       r.q.subtract(BigInteger$1.ONE).gcd(r.e).compareTo(BigInteger$1.ONE) !== 0
//     ) {
//       (r.q = null), o(r.qBits, a);
//       return;
//     }
//     if (
//       ((r.p1 = r.p.subtract(BigInteger$1.ONE)),
//       (r.q1 = r.q.subtract(BigInteger$1.ONE)),
//       (r.phi = r.p1.multiply(r.q1)),
//       r.phi.gcd(r.e).compareTo(BigInteger$1.ONE) !== 0)
//     ) {
//       (r.p = r.q = null), i();
//       return;
//     }
//     if (((r.n = r.p.multiply(r.q)), r.n.bitLength() !== r.bits)) {
//       (r.q = null), o(r.qBits, a);
//       return;
//     }
//     var h = r.e.modInverse(r.phi);
//     (r.keys = {
//       privateKey: pki$1.rsa.setPrivateKey(
//         r.n,
//         r.e,
//         h,
//         r.p,
//         r.q,
//         h.mod(r.p1),
//         h.mod(r.q1),
//         r.q.modInverse(r.p)
//       ),
//       publicKey: pki$1.rsa.setPublicKey(r.n, r.e),
//     }),
//       t(null, r.keys);
//   }
// }
// function _bnToBytes(r) {
//   var e = r.toString(16);
//   e[0] >= "8" && (e = "00" + e);
//   var t = forge$2.util.hexToBytes(e);
//   return t.length > 1 &&
//     ((t.charCodeAt(0) === 0 && !(t.charCodeAt(1) & 128)) ||
//       (t.charCodeAt(0) === 255 && (t.charCodeAt(1) & 128) === 128))
//     ? t.substr(1)
//     : t;
// }
// function _getMillerRabinTests(r) {
//   return r <= 100
//     ? 27
//     : r <= 150
//     ? 18
//     : r <= 200
//     ? 15
//     : r <= 250
//     ? 12
//     : r <= 300
//     ? 9
//     : r <= 350
//     ? 8
//     : r <= 400
//     ? 7
//     : r <= 500
//     ? 6
//     : r <= 600
//     ? 5
//     : r <= 800
//     ? 4
//     : r <= 1250
//     ? 3
//     : 2;
// }
// function _detectNodeCrypto(r) {
//   return forge$2.util.isNodejs && typeof _crypto[r] == "function";
// }
// function _detectSubtleCrypto(r) {
//   return (
//     typeof util.globalScope < "u" &&
//     typeof util.globalScope.crypto == "object" &&
//     typeof util.globalScope.crypto.subtle == "object" &&
//     typeof util.globalScope.crypto.subtle[r] == "function"
//   );
// }
// function _detectSubtleMsCrypto(r) {
//   return (
//     typeof util.globalScope < "u" &&
//     typeof util.globalScope.msCrypto == "object" &&
//     typeof util.globalScope.msCrypto.subtle == "object" &&
//     typeof util.globalScope.msCrypto.subtle[r] == "function"
//   );
// }
// function _intToUint8Array(r) {
//   for (
//     var e = forge$2.util.hexToBytes(r.toString(16)),
//       t = new Uint8Array(e.length),
//       n = 0;
//     n < e.length;
//     ++n
//   )
//     t[n] = e.charCodeAt(n);
//   return t;
// }
// var forge$1 = forge$m;
// if (typeof BigInteger > "u") var BigInteger = forge$1.jsbn.BigInteger;
// var asn1 = forge$1.asn1,
//   pki = (forge$1.pki = forge$1.pki || {});
// pki.pbe = forge$1.pbe = forge$1.pbe || {};
// var oids = pki.oids,
//   encryptedPrivateKeyValidator = {
//     name: "EncryptedPrivateKeyInfo",
//     tagClass: asn1.Class.UNIVERSAL,
//     type: asn1.Type.SEQUENCE,
//     constructed: !0,
//     value: [
//       {
//         name: "EncryptedPrivateKeyInfo.encryptionAlgorithm",
//         tagClass: asn1.Class.UNIVERSAL,
//         type: asn1.Type.SEQUENCE,
//         constructed: !0,
//         value: [
//           {
//             name: "AlgorithmIdentifier.algorithm",
//             tagClass: asn1.Class.UNIVERSAL,
//             type: asn1.Type.OID,
//             constructed: !1,
//             capture: "encryptionOid",
//           },
//           {
//             name: "AlgorithmIdentifier.parameters",
//             tagClass: asn1.Class.UNIVERSAL,
//             type: asn1.Type.SEQUENCE,
//             constructed: !0,
//             captureAsn1: "encryptionParams",
//           },
//         ],
//       },
//       {
//         name: "EncryptedPrivateKeyInfo.encryptedData",
//         tagClass: asn1.Class.UNIVERSAL,
//         type: asn1.Type.OCTETSTRING,
//         constructed: !1,
//         capture: "encryptedData",
//       },
//     ],
//   },
//   PBES2AlgorithmsValidator = {
//     name: "PBES2Algorithms",
//     tagClass: asn1.Class.UNIVERSAL,
//     type: asn1.Type.SEQUENCE,
//     constructed: !0,
//     value: [
//       {
//         name: "PBES2Algorithms.keyDerivationFunc",
//         tagClass: asn1.Class.UNIVERSAL,
//         type: asn1.Type.SEQUENCE,
//         constructed: !0,
//         value: [
//           {
//             name: "PBES2Algorithms.keyDerivationFunc.oid",
//             tagClass: asn1.Class.UNIVERSAL,
//             type: asn1.Type.OID,
//             constructed: !1,
//             capture: "kdfOid",
//           },
//           {
//             name: "PBES2Algorithms.params",
//             tagClass: asn1.Class.UNIVERSAL,
//             type: asn1.Type.SEQUENCE,
//             constructed: !0,
//             value: [
//               {
//                 name: "PBES2Algorithms.params.salt",
//                 tagClass: asn1.Class.UNIVERSAL,
//                 type: asn1.Type.OCTETSTRING,
//                 constructed: !1,
//                 capture: "kdfSalt",
//               },
//               {
//                 name: "PBES2Algorithms.params.iterationCount",
//                 tagClass: asn1.Class.UNIVERSAL,
//                 type: asn1.Type.INTEGER,
//                 constructed: !1,
//                 capture: "kdfIterationCount",
//               },
//               {
//                 name: "PBES2Algorithms.params.keyLength",
//                 tagClass: asn1.Class.UNIVERSAL,
//                 type: asn1.Type.INTEGER,
//                 constructed: !1,
//                 optional: !0,
//                 capture: "keyLength",
//               },
//               {
//                 name: "PBES2Algorithms.params.prf",
//                 tagClass: asn1.Class.UNIVERSAL,
//                 type: asn1.Type.SEQUENCE,
//                 constructed: !0,
//                 optional: !0,
//                 value: [
//                   {
//                     name: "PBES2Algorithms.params.prf.algorithm",
//                     tagClass: asn1.Class.UNIVERSAL,
//                     type: asn1.Type.OID,
//                     constructed: !1,
//                     capture: "prfOid",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "PBES2Algorithms.encryptionScheme",
//         tagClass: asn1.Class.UNIVERSAL,
//         type: asn1.Type.SEQUENCE,
//         constructed: !0,
//         value: [
//           {
//             name: "PBES2Algorithms.encryptionScheme.oid",
//             tagClass: asn1.Class.UNIVERSAL,
//             type: asn1.Type.OID,
//             constructed: !1,
//             capture: "encOid",
//           },
//           {
//             name: "PBES2Algorithms.encryptionScheme.iv",
//             tagClass: asn1.Class.UNIVERSAL,
//             type: asn1.Type.OCTETSTRING,
//             constructed: !1,
//             capture: "encIv",
//           },
//         ],
//       },
//     ],
//   },
//   pkcs12PbeParamsValidator = {
//     name: "pkcs-12PbeParams",
//     tagClass: asn1.Class.UNIVERSAL,
//     type: asn1.Type.SEQUENCE,
//     constructed: !0,
//     value: [
//       {
//         name: "pkcs-12PbeParams.salt",
//         tagClass: asn1.Class.UNIVERSAL,
//         type: asn1.Type.OCTETSTRING,
//         constructed: !1,
//         capture: "salt",
//       },
//       {
//         name: "pkcs-12PbeParams.iterations",
//         tagClass: asn1.Class.UNIVERSAL,
//         type: asn1.Type.INTEGER,
//         constructed: !1,
//         capture: "iterations",
//       },
//     ],
//   };
// pki.encryptPrivateKeyInfo = function (r, e, t) {
//   (t = t || {}),
//     (t.saltSize = t.saltSize || 8),
//     (t.count = t.count || 2048),
//     (t.algorithm = t.algorithm || "aes128"),
//     (t.prfAlgorithm = t.prfAlgorithm || "sha1");
//   var n = forge$1.random.getBytesSync(t.saltSize),
//     i = t.count,
//     o = asn1.integerToDer(i),
//     a,
//     c,
//     u;
//   if (t.algorithm.indexOf("aes") === 0 || t.algorithm === "des") {
//     var l, h, f;
//     switch (t.algorithm) {
//       case "aes128":
//         (a = 16),
//           (l = 16),
//           (h = oids["aes128-CBC"]),
//           (f = forge$1.aes.createEncryptionCipher);
//         break;
//       case "aes192":
//         (a = 24),
//           (l = 16),
//           (h = oids["aes192-CBC"]),
//           (f = forge$1.aes.createEncryptionCipher);
//         break;
//       case "aes256":
//         (a = 32),
//           (l = 16),
//           (h = oids["aes256-CBC"]),
//           (f = forge$1.aes.createEncryptionCipher);
//         break;
//       case "des":
//         (a = 8),
//           (l = 8),
//           (h = oids.desCBC),
//           (f = forge$1.des.createEncryptionCipher);
//         break;
//       default:
//         var d = new Error(
//           "Cannot encrypt private key. Unknown encryption algorithm."
//         );
//         throw ((d.algorithm = t.algorithm), d);
//     }
//     var p = "hmacWith" + t.prfAlgorithm.toUpperCase(),
//       g = prfAlgorithmToMessageDigest(p),
//       m = forge$1.pkcs5.pbkdf2(e, n, i, a, g),
//       b = forge$1.random.getBytesSync(l),
//       _ = f(m);
//     _.start(b), _.update(asn1.toDer(r)), _.finish(), (u = _.output.getBytes());
//     var w = createPbkdf2Params(n, o, a, p);
//     c = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//       asn1.create(
//         asn1.Class.UNIVERSAL,
//         asn1.Type.OID,
//         !1,
//         asn1.oidToDer(oids.pkcs5PBES2).getBytes()
//       ),
//       asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//         asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//           asn1.create(
//             asn1.Class.UNIVERSAL,
//             asn1.Type.OID,
//             !1,
//             asn1.oidToDer(oids.pkcs5PBKDF2).getBytes()
//           ),
//           w,
//         ]),
//         asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//           asn1.create(
//             asn1.Class.UNIVERSAL,
//             asn1.Type.OID,
//             !1,
//             asn1.oidToDer(h).getBytes()
//           ),
//           asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, !1, b),
//         ]),
//       ]),
//     ]);
//   } else if (t.algorithm === "3des") {
//     a = 24;
//     var E = new forge$1.util.ByteBuffer(n),
//       m = pki.pbe.generatePkcs12Key(e, E, 1, i, a),
//       b = pki.pbe.generatePkcs12Key(e, E, 2, i, a),
//       _ = forge$1.des.createEncryptionCipher(m);
//     _.start(b),
//       _.update(asn1.toDer(r)),
//       _.finish(),
//       (u = _.output.getBytes()),
//       (c = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//         asn1.create(
//           asn1.Class.UNIVERSAL,
//           asn1.Type.OID,
//           !1,
//           asn1.oidToDer(oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()
//         ),
//         asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//           asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, !1, n),
//           asn1.create(
//             asn1.Class.UNIVERSAL,
//             asn1.Type.INTEGER,
//             !1,
//             o.getBytes()
//           ),
//         ]),
//       ]));
//   } else {
//     var d = new Error(
//       "Cannot encrypt private key. Unknown encryption algorithm."
//     );
//     throw ((d.algorithm = t.algorithm), d);
//   }
//   var v = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//     c,
//     asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, !1, u),
//   ]);
//   return v;
// };
// pki.decryptPrivateKeyInfo = function (r, e) {
//   var t = null,
//     n = {},
//     i = [];
//   if (!asn1.validate(r, encryptedPrivateKeyValidator, n, i)) {
//     var o = new Error(
//       "Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo."
//     );
//     throw ((o.errors = i), o);
//   }
//   var a = asn1.derToOid(n.encryptionOid),
//     c = pki.pbe.getCipher(a, n.encryptionParams, e),
//     u = forge$1.util.createBuffer(n.encryptedData);
//   return c.update(u), c.finish() && (t = asn1.fromDer(c.output)), t;
// };
// pki.encryptedPrivateKeyToPem = function (r, e) {
//   var t = {
//     type: "ENCRYPTED PRIVATE KEY",
//     body: asn1.toDer(r).getBytes(),
//   };
//   return forge$1.pem.encode(t, {
//     maxline: e,
//   });
// };
// pki.encryptedPrivateKeyFromPem = function (r) {
//   var e = forge$1.pem.decode(r)[0];
//   if (e.type !== "ENCRYPTED PRIVATE KEY") {
//     var t = new Error(
//       'Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".'
//     );
//     throw ((t.headerType = e.type), t);
//   }
//   if (e.procType && e.procType.type === "ENCRYPTED")
//     throw new Error(
//       "Could not convert encrypted private key from PEM; PEM is encrypted."
//     );
//   return asn1.fromDer(e.body);
// };
// pki.encryptRsaPrivateKey = function (r, e, t) {
//   if (((t = t || {}), !t.legacy)) {
//     var n = pki.wrapRsaPrivateKey(pki.privateKeyToAsn1(r));
//     return (
//       (n = pki.encryptPrivateKeyInfo(n, e, t)), pki.encryptedPrivateKeyToPem(n)
//     );
//   }
//   var i, o, a, c;
//   switch (t.algorithm) {
//     case "aes128":
//       (i = "AES-128-CBC"),
//         (a = 16),
//         (o = forge$1.random.getBytesSync(16)),
//         (c = forge$1.aes.createEncryptionCipher);
//       break;
//     case "aes192":
//       (i = "AES-192-CBC"),
//         (a = 24),
//         (o = forge$1.random.getBytesSync(16)),
//         (c = forge$1.aes.createEncryptionCipher);
//       break;
//     case "aes256":
//       (i = "AES-256-CBC"),
//         (a = 32),
//         (o = forge$1.random.getBytesSync(16)),
//         (c = forge$1.aes.createEncryptionCipher);
//       break;
//     case "3des":
//       (i = "DES-EDE3-CBC"),
//         (a = 24),
//         (o = forge$1.random.getBytesSync(8)),
//         (c = forge$1.des.createEncryptionCipher);
//       break;
//     case "des":
//       (i = "DES-CBC"),
//         (a = 8),
//         (o = forge$1.random.getBytesSync(8)),
//         (c = forge$1.des.createEncryptionCipher);
//       break;
//     default:
//       var u = new Error(
//         'Could not encrypt RSA private key; unsupported encryption algorithm "' +
//           t.algorithm +
//           '".'
//       );
//       throw ((u.algorithm = t.algorithm), u);
//   }
//   var l = forge$1.pbe.opensslDeriveBytes(e, o.substr(0, 8), a),
//     h = c(l);
//   h.start(o), h.update(asn1.toDer(pki.privateKeyToAsn1(r))), h.finish();
//   var f = {
//     type: "RSA PRIVATE KEY",
//     procType: {
//       version: "4",
//       type: "ENCRYPTED",
//     },
//     dekInfo: {
//       algorithm: i,
//       parameters: forge$1.util.bytesToHex(o).toUpperCase(),
//     },
//     body: h.output.getBytes(),
//   };
//   return forge$1.pem.encode(f);
// };
// pki.decryptRsaPrivateKey = function (r, e) {
//   var t = null,
//     n = forge$1.pem.decode(r)[0];
//   if (
//     n.type !== "ENCRYPTED PRIVATE KEY" &&
//     n.type !== "PRIVATE KEY" &&
//     n.type !== "RSA PRIVATE KEY"
//   ) {
//     var i = new Error(
//       'Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".'
//     );
//     throw ((i.headerType = i), i);
//   }
//   if (n.procType && n.procType.type === "ENCRYPTED") {
//     var o, a;
//     switch (n.dekInfo.algorithm) {
//       case "DES-CBC":
//         (o = 8), (a = forge$1.des.createDecryptionCipher);
//         break;
//       case "DES-EDE3-CBC":
//         (o = 24), (a = forge$1.des.createDecryptionCipher);
//         break;
//       case "AES-128-CBC":
//         (o = 16), (a = forge$1.aes.createDecryptionCipher);
//         break;
//       case "AES-192-CBC":
//         (o = 24), (a = forge$1.aes.createDecryptionCipher);
//         break;
//       case "AES-256-CBC":
//         (o = 32), (a = forge$1.aes.createDecryptionCipher);
//         break;
//       case "RC2-40-CBC":
//         (o = 5),
//           (a = function (f) {
//             return forge$1.rc2.createDecryptionCipher(f, 40);
//           });
//         break;
//       case "RC2-64-CBC":
//         (o = 8),
//           (a = function (f) {
//             return forge$1.rc2.createDecryptionCipher(f, 64);
//           });
//         break;
//       case "RC2-128-CBC":
//         (o = 16),
//           (a = function (f) {
//             return forge$1.rc2.createDecryptionCipher(f, 128);
//           });
//         break;
//       default:
//         var i = new Error(
//           'Could not decrypt private key; unsupported encryption algorithm "' +
//             n.dekInfo.algorithm +
//             '".'
//         );
//         throw ((i.algorithm = n.dekInfo.algorithm), i);
//     }
//     var c = forge$1.util.hexToBytes(n.dekInfo.parameters),
//       u = forge$1.pbe.opensslDeriveBytes(e, c.substr(0, 8), o),
//       l = a(u);
//     if ((l.start(c), l.update(forge$1.util.createBuffer(n.body)), l.finish()))
//       t = l.output.getBytes();
//     else return t;
//   } else t = n.body;
//   return (
//     n.type === "ENCRYPTED PRIVATE KEY"
//       ? (t = pki.decryptPrivateKeyInfo(asn1.fromDer(t), e))
//       : (t = asn1.fromDer(t)),
//     t !== null && (t = pki.privateKeyFromAsn1(t)),
//     t
//   );
// };
// pki.pbe.generatePkcs12Key = function (r, e, t, n, i, o) {
//   var a, c;
//   if (typeof o > "u" || o === null) {
//     if (!("sha1" in forge$1.md))
//       throw new Error('"sha1" hash algorithm unavailable.');
//     o = forge$1.md.sha1.create();
//   }
//   var u = o.digestLength,
//     l = o.blockLength,
//     h = new forge$1.util.ByteBuffer(),
//     f = new forge$1.util.ByteBuffer();
//   if (r != null) {
//     for (c = 0; c < r.length; c++) f.putInt16(r.charCodeAt(c));
//     f.putInt16(0);
//   }
//   var d = f.length(),
//     p = e.length(),
//     g = new forge$1.util.ByteBuffer();
//   g.fillWithByte(t, l);
//   var m = l * Math.ceil(p / l),
//     b = new forge$1.util.ByteBuffer();
//   for (c = 0; c < m; c++) b.putByte(e.at(c % p));
//   var _ = l * Math.ceil(d / l),
//     w = new forge$1.util.ByteBuffer();
//   for (c = 0; c < _; c++) w.putByte(f.at(c % d));
//   var E = b;
//   E.putBuffer(w);
//   for (var v = Math.ceil(i / u), S = 1; S <= v; S++) {
//     var I = new forge$1.util.ByteBuffer();
//     I.putBytes(g.bytes()), I.putBytes(E.bytes());
//     for (var T = 0; T < n; T++)
//       o.start(), o.update(I.getBytes()), (I = o.digest());
//     var A = new forge$1.util.ByteBuffer();
//     for (c = 0; c < l; c++) A.putByte(I.at(c % u));
//     var C = Math.ceil(p / l) + Math.ceil(d / l),
//       x = new forge$1.util.ByteBuffer();
//     for (a = 0; a < C; a++) {
//       var $ = new forge$1.util.ByteBuffer(E.getBytes(l)),
//         O = 511;
//       for (c = A.length() - 1; c >= 0; c--)
//         (O = O >> 8), (O += A.at(c) + $.at(c)), $.setAt(c, O & 255);
//       x.putBuffer($);
//     }
//     (E = x), h.putBuffer(I);
//   }
//   return h.truncate(h.length() - i), h;
// };
// pki.pbe.getCipher = function (r, e, t) {
//   switch (r) {
//     case pki.oids.pkcs5PBES2:
//       return pki.pbe.getCipherForPBES2(r, e, t);
//     case pki.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
//     case pki.oids["pbewithSHAAnd40BitRC2-CBC"]:
//       return pki.pbe.getCipherForPKCS12PBE(r, e, t);
//     default:
//       var n = new Error(
//         "Cannot read encrypted PBE data block. Unsupported OID."
//       );
//       throw (
//         ((n.oid = r),
//         (n.supportedOids = [
//           "pkcs5PBES2",
//           "pbeWithSHAAnd3-KeyTripleDES-CBC",
//           "pbewithSHAAnd40BitRC2-CBC",
//         ]),
//         n)
//       );
//   }
// };
// pki.pbe.getCipherForPBES2 = function (r, e, t) {
//   var n = {},
//     i = [];
//   if (!asn1.validate(e, PBES2AlgorithmsValidator, n, i)) {
//     var o = new Error(
//       "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo."
//     );
//     throw ((o.errors = i), o);
//   }
//   if (((r = asn1.derToOid(n.kdfOid)), r !== pki.oids.pkcs5PBKDF2)) {
//     var o = new Error(
//       "Cannot read encrypted private key. Unsupported key derivation function OID."
//     );
//     throw ((o.oid = r), (o.supportedOids = ["pkcs5PBKDF2"]), o);
//   }
//   if (
//     ((r = asn1.derToOid(n.encOid)),
//     r !== pki.oids["aes128-CBC"] &&
//       r !== pki.oids["aes192-CBC"] &&
//       r !== pki.oids["aes256-CBC"] &&
//       r !== pki.oids["des-EDE3-CBC"] &&
//       r !== pki.oids.desCBC)
//   ) {
//     var o = new Error(
//       "Cannot read encrypted private key. Unsupported encryption scheme OID."
//     );
//     throw (
//       ((o.oid = r),
//       (o.supportedOids = [
//         "aes128-CBC",
//         "aes192-CBC",
//         "aes256-CBC",
//         "des-EDE3-CBC",
//         "desCBC",
//       ]),
//       o)
//     );
//   }
//   var a = n.kdfSalt,
//     c = forge$1.util.createBuffer(n.kdfIterationCount);
//   c = c.getInt(c.length() << 3);
//   var u, l;
//   switch (pki.oids[r]) {
//     case "aes128-CBC":
//       (u = 16), (l = forge$1.aes.createDecryptionCipher);
//       break;
//     case "aes192-CBC":
//       (u = 24), (l = forge$1.aes.createDecryptionCipher);
//       break;
//     case "aes256-CBC":
//       (u = 32), (l = forge$1.aes.createDecryptionCipher);
//       break;
//     case "des-EDE3-CBC":
//       (u = 24), (l = forge$1.des.createDecryptionCipher);
//       break;
//     case "desCBC":
//       (u = 8), (l = forge$1.des.createDecryptionCipher);
//       break;
//   }
//   var h = prfOidToMessageDigest(n.prfOid),
//     f = forge$1.pkcs5.pbkdf2(t, a, c, u, h),
//     d = n.encIv,
//     p = l(f);
//   return p.start(d), p;
// };
// pki.pbe.getCipherForPKCS12PBE = function (r, e, t) {
//   var n = {},
//     i = [];
//   if (!asn1.validate(e, pkcs12PbeParamsValidator, n, i)) {
//     var o = new Error(
//       "Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo."
//     );
//     throw ((o.errors = i), o);
//   }
//   var a = forge$1.util.createBuffer(n.salt),
//     c = forge$1.util.createBuffer(n.iterations);
//   c = c.getInt(c.length() << 3);
//   var u, l, h;
//   switch (r) {
//     case pki.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:
//       (u = 24), (l = 8), (h = forge$1.des.startDecrypting);
//       break;
//     case pki.oids["pbewithSHAAnd40BitRC2-CBC"]:
//       (u = 5),
//         (l = 8),
//         (h = function (m, b) {
//           var _ = forge$1.rc2.createDecryptionCipher(m, 40);
//           return _.start(b, null), _;
//         });
//       break;
//     default:
//       var o = new Error(
//         "Cannot read PKCS #12 PBE data block. Unsupported OID."
//       );
//       throw ((o.oid = r), o);
//   }
//   var f = prfOidToMessageDigest(n.prfOid),
//     d = pki.pbe.generatePkcs12Key(t, a, 1, c, u, f);
//   f.start();
//   var p = pki.pbe.generatePkcs12Key(t, a, 2, c, l, f);
//   return h(d, p);
// };
// pki.pbe.opensslDeriveBytes = function (r, e, t, n) {
//   if (typeof n > "u" || n === null) {
//     if (!("md5" in forge$1.md))
//       throw new Error('"md5" hash algorithm unavailable.');
//     n = forge$1.md.md5.create();
//   }
//   e === null && (e = "");
//   for (var i = [hash(n, r + e)], o = 16, a = 1; o < t; ++a, o += 16)
//     i.push(hash(n, i[a - 1] + r + e));
//   return i.join("").substr(0, t);
// };
// function hash(r, e) {
//   return r.start().update(e).digest().getBytes();
// }
// function prfOidToMessageDigest(r) {
//   var e;
//   if (!r) e = "hmacWithSHA1";
//   else if (((e = pki.oids[asn1.derToOid(r)]), !e)) {
//     var t = new Error("Unsupported PRF OID.");
//     throw (
//       ((t.oid = r),
//       (t.supported = [
//         "hmacWithSHA1",
//         "hmacWithSHA224",
//         "hmacWithSHA256",
//         "hmacWithSHA384",
//         "hmacWithSHA512",
//       ]),
//       t)
//     );
//   }
//   return prfAlgorithmToMessageDigest(e);
// }
// function prfAlgorithmToMessageDigest(r) {
//   var e = forge$1.md;
//   switch (r) {
//     case "hmacWithSHA224":
//       e = forge$1.md.sha512;
//     case "hmacWithSHA1":
//     case "hmacWithSHA256":
//     case "hmacWithSHA384":
//     case "hmacWithSHA512":
//       r = r.substr(8).toLowerCase();
//       break;
//     default:
//       var t = new Error("Unsupported PRF algorithm.");
//       throw (
//         ((t.algorithm = r),
//         (t.supported = [
//           "hmacWithSHA1",
//           "hmacWithSHA224",
//           "hmacWithSHA256",
//           "hmacWithSHA384",
//           "hmacWithSHA512",
//         ]),
//         t)
//       );
//   }
//   if (!e || !(r in e)) throw new Error("Unknown hash algorithm: " + r);
//   return e[r].create();
// }
// function createPbkdf2Params(r, e, t, n) {
//   var i = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//     asn1.create(asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, !1, r),
//     asn1.create(asn1.Class.UNIVERSAL, asn1.Type.INTEGER, !1, e.getBytes()),
//   ]);
//   return (
//     n !== "hmacWithSHA1" &&
//       i.value.push(
//         asn1.create(
//           asn1.Class.UNIVERSAL,
//           asn1.Type.INTEGER,
//           !1,
//           forge$1.util.hexToBytes(t.toString(16))
//         ),
//         asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, !0, [
//           asn1.create(
//             asn1.Class.UNIVERSAL,
//             asn1.Type.OID,
//             !1,
//             asn1.oidToDer(pki.oids[n]).getBytes()
//           ),
//           asn1.create(asn1.Class.UNIVERSAL, asn1.Type.NULL, !1, ""),
//         ])
//       ),
//     i
//   );
// }
// function bigIntegerToUintBase64url(r, e) {
//   let t = Uint8Array.from(r.abs().toByteArray());
//   if (((t = t[0] === 0 ? t.subarray(1) : t), e != null)) {
//     if (t.length > e) throw new Error("byte array longer than desired length");
//     t = concat$1([new Uint8Array(e - t.length), t]);
//   }
//   return toString$3(t, "base64url");
// }
// function base64urlToBigInteger(r) {
//   const e = base64urlToBuffer(r);
//   return new forge$n.jsbn.BigInteger(toString$3(e, "base16"), 16);
// }
// function base64urlToBuffer(r, e) {
//   let t = fromString(r, "base64urlpad");
//   if (e != null) {
//     if (t.length > e) throw new Error("byte array longer than desired length");
//     t = concat$1([new Uint8Array(e - t.length), t]);
//   }
//   return t;
// }
// function isPromise$4(r) {
//   return r == null
//     ? !1
//     : typeof r.then == "function" &&
//         typeof r.catch == "function" &&
//         typeof r.finally == "function";
// }
// const PUBLIC_KEY_BYTE_LENGTH = 32,
//   PRIVATE_KEY_BYTE_LENGTH = 64,
//   KEYS_BYTE_LENGTH = 32;
// function generateKey$2() {
//   const r = ed25519.utils.randomPrivateKey(),
//     e = ed25519.getPublicKey(r);
//   return {
//     privateKey: concatKeys(r, e),
//     publicKey: e,
//   };
// }
// function generateKeyFromSeed(r) {
//   if (r.length !== KEYS_BYTE_LENGTH)
//     throw new TypeError('"seed" must be 32 bytes in length.');
//   if (!(r instanceof Uint8Array))
//     throw new TypeError('"seed" must be a node.js Buffer, or Uint8Array.');
//   const e = r,
//     t = ed25519.getPublicKey(e);
//   return {
//     privateKey: concatKeys(e, t),
//     publicKey: t,
//   };
// }
// function hashAndSign$2(r, e) {
//   const t = r.subarray(0, KEYS_BYTE_LENGTH);
//   return ed25519.sign(e instanceof Uint8Array ? e : e.subarray(), t);
// }
// function hashAndVerify$2(r, e, t) {
//   return ed25519.verify(e, t instanceof Uint8Array ? t : t.subarray(), r);
// }
// function concatKeys(r, e) {
//   const t = new Uint8Array(PRIVATE_KEY_BYTE_LENGTH);
//   for (let n = 0; n < KEYS_BYTE_LENGTH; n++)
//     (t[n] = r[n]), (t[KEYS_BYTE_LENGTH + n] = e[n]);
//   return t;
// }
// const webcrypto = {
//     get(r = globalThis) {
//       const e = r.crypto;
//       if (e == null || e.subtle == null)
//         throw Object.assign(
//           new Error(
//             "Missing Web Crypto API. The most likely cause of this error is that this page is being accessed from an insecure context (i.e. not HTTPS). For more information and possible resolutions see https://github.com/libp2p/js-libp2p/blob/main/packages/crypto/README.md#web-crypto-api"
//           ),
//           {
//             code: "ERR_MISSING_WEB_CRYPTO",
//           }
//         );
//       return e;
//     },
//   },
//   derivedEmptyPasswordKey = {
//     alg: "A128GCM",
//     ext: !0,
//     k: "scm9jmO_4BJAgdwWGVulLg",
//     key_ops: ["encrypt", "decrypt"],
//     kty: "oct",
//   };
// function create(r) {
//   const e = (r == null ? void 0 : r.algorithm) ?? "AES-GCM";
//   let t = (r == null ? void 0 : r.keyLength) ?? 16;
//   const n = (r == null ? void 0 : r.nonceLength) ?? 12,
//     i = (r == null ? void 0 : r.digest) ?? "SHA-256",
//     o = (r == null ? void 0 : r.saltLength) ?? 16,
//     a = (r == null ? void 0 : r.iterations) ?? 32767,
//     c = webcrypto.get();
//   t *= 8;
//   async function u(f, d) {
//     const p = c.getRandomValues(new Uint8Array(o)),
//       g = c.getRandomValues(new Uint8Array(n)),
//       m = {
//         name: e,
//         iv: g,
//       };
//     typeof d == "string" && (d = fromString(d));
//     let b;
//     if (d.length === 0) {
//       b = await c.subtle.importKey(
//         "jwk",
//         derivedEmptyPasswordKey,
//         {
//           name: "AES-GCM",
//         },
//         !0,
//         ["encrypt"]
//       );
//       try {
//         const w = {
//             name: "PBKDF2",
//             salt: p,
//             iterations: a,
//             hash: {
//               name: i,
//             },
//           },
//           E = await c.subtle.importKey(
//             "raw",
//             d,
//             {
//               name: "PBKDF2",
//             },
//             !1,
//             ["deriveKey"]
//           );
//         b = await c.subtle.deriveKey(
//           w,
//           E,
//           {
//             name: e,
//             length: t,
//           },
//           !0,
//           ["encrypt"]
//         );
//       } catch {
//         b = await c.subtle.importKey(
//           "jwk",
//           derivedEmptyPasswordKey,
//           {
//             name: "AES-GCM",
//           },
//           !0,
//           ["encrypt"]
//         );
//       }
//     } else {
//       const w = {
//           name: "PBKDF2",
//           salt: p,
//           iterations: a,
//           hash: {
//             name: i,
//           },
//         },
//         E = await c.subtle.importKey(
//           "raw",
//           d,
//           {
//             name: "PBKDF2",
//           },
//           !1,
//           ["deriveKey"]
//         );
//       b = await c.subtle.deriveKey(
//         w,
//         E,
//         {
//           name: e,
//           length: t,
//         },
//         !0,
//         ["encrypt"]
//       );
//     }
//     const _ = await c.subtle.encrypt(m, b, f);
//     return concat$1([p, m.iv, new Uint8Array(_)]);
//   }
//   async function l(f, d) {
//     const p = f.subarray(0, o),
//       g = f.subarray(o, o + n),
//       m = f.subarray(o + n),
//       b = {
//         name: e,
//         iv: g,
//       };
//     typeof d == "string" && (d = fromString(d));
//     let _;
//     if (d.length === 0)
//       try {
//         const E = {
//             name: "PBKDF2",
//             salt: p,
//             iterations: a,
//             hash: {
//               name: i,
//             },
//           },
//           v = await c.subtle.importKey(
//             "raw",
//             d,
//             {
//               name: "PBKDF2",
//             },
//             !1,
//             ["deriveKey"]
//           );
//         _ = await c.subtle.deriveKey(
//           E,
//           v,
//           {
//             name: e,
//             length: t,
//           },
//           !0,
//           ["decrypt"]
//         );
//       } catch {
//         _ = await c.subtle.importKey(
//           "jwk",
//           derivedEmptyPasswordKey,
//           {
//             name: "AES-GCM",
//           },
//           !0,
//           ["decrypt"]
//         );
//       }
//     else {
//       const E = {
//           name: "PBKDF2",
//           salt: p,
//           iterations: a,
//           hash: {
//             name: i,
//           },
//         },
//         v = await c.subtle.importKey(
//           "raw",
//           d,
//           {
//             name: "PBKDF2",
//           },
//           !1,
//           ["deriveKey"]
//         );
//       _ = await c.subtle.deriveKey(
//         E,
//         v,
//         {
//           name: e,
//           length: t,
//         },
//         !0,
//         ["decrypt"]
//       );
//     }
//     const w = await c.subtle.decrypt(b, _, m);
//     return new Uint8Array(w);
//   }
//   return {
//     encrypt: u,
//     decrypt: l,
//   };
// }
// async function exporter(r, e) {
//   const n = await create().encrypt(r, e);
//   return base64$2.encode(n);
// }
// var KeyType;
// (function (r) {
//   (r.RSA = "RSA"), (r.Ed25519 = "Ed25519"), (r.Secp256k1 = "Secp256k1");
// })(KeyType || (KeyType = {}));
// var __KeyTypeValues;
// (function (r) {
//   (r[(r.RSA = 0)] = "RSA"),
//     (r[(r.Ed25519 = 1)] = "Ed25519"),
//     (r[(r.Secp256k1 = 2)] = "Secp256k1");
// })(__KeyTypeValues || (__KeyTypeValues = {}));
// (function (r) {
//   r.codec = () => enumeration(__KeyTypeValues);
// })(KeyType || (KeyType = {}));
// var PublicKey;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.Type != null && (n.uint32(8), KeyType.codec().encode(t.Type, n)),
//             t.Data != null && (n.uint32(18), n.bytes(t.Data)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {},
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.Type = KeyType.codec().decode(t);
//                 break;
//               case 2:
//                 i.Data = t.bytes();
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(PublicKey || (PublicKey = {}));
// var PrivateKey;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.Type != null && (n.uint32(8), KeyType.codec().encode(t.Type, n)),
//             t.Data != null && (n.uint32(18), n.bytes(t.Data)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {},
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1:
//                 i.Type = KeyType.codec().decode(t);
//                 break;
//               case 2:
//                 i.Data = t.bytes();
//                 break;
//               default:
//                 t.skipType(a & 7);
//                 break;
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(PrivateKey || (PrivateKey = {}));
// class Ed25519PublicKey {
//   constructor(e) {
//     y(this, "_key");
//     this._key = ensureKey(e, PUBLIC_KEY_BYTE_LENGTH);
//   }
//   verify(e, t) {
//     return hashAndVerify$2(this._key, t, e);
//   }
//   marshal() {
//     return this._key;
//   }
//   get bytes() {
//     return PublicKey.encode({
//       Type: KeyType.Ed25519,
//       Data: this.marshal(),
//     }).subarray();
//   }
//   equals(e) {
//     return equals(this.bytes, e.bytes);
//   }
//   hash() {
//     const e = sha256$2.digest(this.bytes);
//     return isPromise$4(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//   }
// }
// class Ed25519PrivateKey {
//   constructor(e, t) {
//     y(this, "_key");
//     y(this, "_publicKey");
//     (this._key = ensureKey(e, PRIVATE_KEY_BYTE_LENGTH)),
//       (this._publicKey = ensureKey(t, PUBLIC_KEY_BYTE_LENGTH));
//   }
//   sign(e) {
//     return hashAndSign$2(this._key, e);
//   }
//   get public() {
//     return new Ed25519PublicKey(this._publicKey);
//   }
//   marshal() {
//     return this._key;
//   }
//   get bytes() {
//     return PrivateKey.encode({
//       Type: KeyType.Ed25519,
//       Data: this.marshal(),
//     }).subarray();
//   }
//   equals(e) {
//     return equals(this.bytes, e.bytes);
//   }
//   async hash() {
//     const e = sha256$2.digest(this.bytes);
//     let t;
//     return isPromise$4(e) ? ({ bytes: t } = await e) : (t = e.bytes), t;
//   }
//   async id() {
//     const e = identity$1.digest(this.public.bytes);
//     return base58btc.encode(e.bytes).substring(1);
//   }
//   async export(e, t = "libp2p-key") {
//     if (t === "libp2p-key") return exporter(this.bytes, e);
//     throw new CodeError$2(
//       `export format '${t}' is not supported`,
//       "ERR_INVALID_EXPORT_FORMAT"
//     );
//   }
// }
// function unmarshalEd25519PrivateKey(r) {
//   if (r.length > PRIVATE_KEY_BYTE_LENGTH) {
//     r = ensureKey(r, PRIVATE_KEY_BYTE_LENGTH + PUBLIC_KEY_BYTE_LENGTH);
//     const n = r.subarray(0, PRIVATE_KEY_BYTE_LENGTH),
//       i = r.subarray(PRIVATE_KEY_BYTE_LENGTH, r.length);
//     return new Ed25519PrivateKey(n, i);
//   }
//   r = ensureKey(r, PRIVATE_KEY_BYTE_LENGTH);
//   const e = r.subarray(0, PRIVATE_KEY_BYTE_LENGTH),
//     t = r.subarray(PUBLIC_KEY_BYTE_LENGTH);
//   return new Ed25519PrivateKey(e, t);
// }
// function unmarshalEd25519PublicKey(r) {
//   return (r = ensureKey(r, PUBLIC_KEY_BYTE_LENGTH)), new Ed25519PublicKey(r);
// }
// async function generateKeyPair$2() {
//   const { privateKey: r, publicKey: e } = generateKey$2();
//   return new Ed25519PrivateKey(r, e);
// }
// async function generateKeyPairFromSeed(r) {
//   const { privateKey: e, publicKey: t } = generateKeyFromSeed(r);
//   return new Ed25519PrivateKey(e, t);
// }
// function ensureKey(r, e) {
//   if (((r = Uint8Array.from(r ?? [])), r.length !== e))
//     throw new CodeError$2(
//       `Key must be a Uint8Array of length ${e}, got ${r.length}`,
//       "ERR_INVALID_KEY_TYPE"
//     );
//   return r;
// }
// const Ed25519 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         Ed25519PrivateKey,
//         Ed25519PublicKey,
//         generateKeyPair: generateKeyPair$2,
//         generateKeyPairFromSeed,
//         unmarshalEd25519PrivateKey,
//         unmarshalEd25519PublicKey,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   bits = {
//     "P-256": 256,
//     "P-384": 384,
//     "P-521": 521,
//   },
//   curveTypes = Object.keys(bits);
// curveTypes.join(" / ");
// var forge = forge$m,
//   sha512 = (forge.sha512 = forge.sha512 || {});
// forge.md.sha512 = forge.md.algorithms.sha512 = sha512;
// var sha384 = (forge.sha384 = forge.sha512.sha384 = forge.sha512.sha384 || {});
// sha384.create = function () {
//   return sha512.create("SHA-384");
// };
// forge.md.sha384 = forge.md.algorithms.sha384 = sha384;
// forge.sha512.sha256 = forge.sha512.sha256 || {
//   create: function () {
//     return sha512.create("SHA-512/256");
//   },
// };
// forge.md["sha512/256"] = forge.md.algorithms["sha512/256"] =
//   forge.sha512.sha256;
// forge.sha512.sha224 = forge.sha512.sha224 || {
//   create: function () {
//     return sha512.create("SHA-512/224");
//   },
// };
// forge.md["sha512/224"] = forge.md.algorithms["sha512/224"] =
//   forge.sha512.sha224;
// sha512.create = function (r) {
//   if (
//     (_initialized || _init(),
//     typeof r > "u" && (r = "SHA-512"),
//     !(r in _states))
//   )
//     throw new Error("Invalid SHA-512 algorithm: " + r);
//   for (
//     var e = _states[r],
//       t = null,
//       n = forge.util.createBuffer(),
//       i = new Array(80),
//       o = 0;
//     o < 80;
//     ++o
//   )
//     i[o] = new Array(2);
//   var a = 64;
//   switch (r) {
//     case "SHA-384":
//       a = 48;
//       break;
//     case "SHA-512/256":
//       a = 32;
//       break;
//     case "SHA-512/224":
//       a = 28;
//       break;
//   }
//   var c = {
//     algorithm: r.replace("-", "").toLowerCase(),
//     blockLength: 128,
//     digestLength: a,
//     messageLength: 0,
//     fullMessageLength: null,
//     messageLengthSize: 16,
//   };
//   return (
//     (c.start = function () {
//       (c.messageLength = 0), (c.fullMessageLength = c.messageLength128 = []);
//       for (var u = c.messageLengthSize / 4, l = 0; l < u; ++l)
//         c.fullMessageLength.push(0);
//       (n = forge.util.createBuffer()), (t = new Array(e.length));
//       for (var l = 0; l < e.length; ++l) t[l] = e[l].slice(0);
//       return c;
//     }),
//     c.start(),
//     (c.update = function (u, l) {
//       l === "utf8" && (u = forge.util.encodeUtf8(u));
//       var h = u.length;
//       (c.messageLength += h), (h = [(h / 4294967296) >>> 0, h >>> 0]);
//       for (var f = c.fullMessageLength.length - 1; f >= 0; --f)
//         (c.fullMessageLength[f] += h[1]),
//           (h[1] = h[0] + ((c.fullMessageLength[f] / 4294967296) >>> 0)),
//           (c.fullMessageLength[f] = c.fullMessageLength[f] >>> 0),
//           (h[0] = (h[1] / 4294967296) >>> 0);
//       return (
//         n.putBytes(u),
//         _update(t, i, n),
//         (n.read > 2048 || n.length() === 0) && n.compact(),
//         c
//       );
//     }),
//     (c.digest = function () {
//       var u = forge.util.createBuffer();
//       u.putBytes(n.bytes());
//       var l =
//           c.fullMessageLength[c.fullMessageLength.length - 1] +
//           c.messageLengthSize,
//         h = l & (c.blockLength - 1);
//       u.putBytes(_padding.substr(0, c.blockLength - h));
//       for (
//         var f, d, p = c.fullMessageLength[0] * 8, g = 0;
//         g < c.fullMessageLength.length - 1;
//         ++g
//       )
//         (f = c.fullMessageLength[g + 1] * 8),
//           (d = (f / 4294967296) >>> 0),
//           (p += d),
//           u.putInt32(p >>> 0),
//           (p = f >>> 0);
//       u.putInt32(p);
//       for (var m = new Array(t.length), g = 0; g < t.length; ++g)
//         m[g] = t[g].slice(0);
//       _update(m, i, u);
//       var b = forge.util.createBuffer(),
//         _;
//       r === "SHA-512"
//         ? (_ = m.length)
//         : r === "SHA-384"
//         ? (_ = m.length - 2)
//         : (_ = m.length - 4);
//       for (var g = 0; g < _; ++g)
//         b.putInt32(m[g][0]),
//           (g !== _ - 1 || r !== "SHA-512/224") && b.putInt32(m[g][1]);
//       return b;
//     }),
//     c
//   );
// };
// var _padding = null,
//   _initialized = !1,
//   _k = null,
//   _states = null;
// function _init() {
//   (_padding = String.fromCharCode(128)),
//     (_padding += forge.util.fillString(String.fromCharCode(0), 128)),
//     (_k = [
//       [1116352408, 3609767458],
//       [1899447441, 602891725],
//       [3049323471, 3964484399],
//       [3921009573, 2173295548],
//       [961987163, 4081628472],
//       [1508970993, 3053834265],
//       [2453635748, 2937671579],
//       [2870763221, 3664609560],
//       [3624381080, 2734883394],
//       [310598401, 1164996542],
//       [607225278, 1323610764],
//       [1426881987, 3590304994],
//       [1925078388, 4068182383],
//       [2162078206, 991336113],
//       [2614888103, 633803317],
//       [3248222580, 3479774868],
//       [3835390401, 2666613458],
//       [4022224774, 944711139],
//       [264347078, 2341262773],
//       [604807628, 2007800933],
//       [770255983, 1495990901],
//       [1249150122, 1856431235],
//       [1555081692, 3175218132],
//       [1996064986, 2198950837],
//       [2554220882, 3999719339],
//       [2821834349, 766784016],
//       [2952996808, 2566594879],
//       [3210313671, 3203337956],
//       [3336571891, 1034457026],
//       [3584528711, 2466948901],
//       [113926993, 3758326383],
//       [338241895, 168717936],
//       [666307205, 1188179964],
//       [773529912, 1546045734],
//       [1294757372, 1522805485],
//       [1396182291, 2643833823],
//       [1695183700, 2343527390],
//       [1986661051, 1014477480],
//       [2177026350, 1206759142],
//       [2456956037, 344077627],
//       [2730485921, 1290863460],
//       [2820302411, 3158454273],
//       [3259730800, 3505952657],
//       [3345764771, 106217008],
//       [3516065817, 3606008344],
//       [3600352804, 1432725776],
//       [4094571909, 1467031594],
//       [275423344, 851169720],
//       [430227734, 3100823752],
//       [506948616, 1363258195],
//       [659060556, 3750685593],
//       [883997877, 3785050280],
//       [958139571, 3318307427],
//       [1322822218, 3812723403],
//       [1537002063, 2003034995],
//       [1747873779, 3602036899],
//       [1955562222, 1575990012],
//       [2024104815, 1125592928],
//       [2227730452, 2716904306],
//       [2361852424, 442776044],
//       [2428436474, 593698344],
//       [2756734187, 3733110249],
//       [3204031479, 2999351573],
//       [3329325298, 3815920427],
//       [3391569614, 3928383900],
//       [3515267271, 566280711],
//       [3940187606, 3454069534],
//       [4118630271, 4000239992],
//       [116418474, 1914138554],
//       [174292421, 2731055270],
//       [289380356, 3203993006],
//       [460393269, 320620315],
//       [685471733, 587496836],
//       [852142971, 1086792851],
//       [1017036298, 365543100],
//       [1126000580, 2618297676],
//       [1288033470, 3409855158],
//       [1501505948, 4234509866],
//       [1607167915, 987167468],
//       [1816402316, 1246189591],
//     ]),
//     (_states = {}),
//     (_states["SHA-512"] = [
//       [1779033703, 4089235720],
//       [3144134277, 2227873595],
//       [1013904242, 4271175723],
//       [2773480762, 1595750129],
//       [1359893119, 2917565137],
//       [2600822924, 725511199],
//       [528734635, 4215389547],
//       [1541459225, 327033209],
//     ]),
//     (_states["SHA-384"] = [
//       [3418070365, 3238371032],
//       [1654270250, 914150663],
//       [2438529370, 812702999],
//       [355462360, 4144912697],
//       [1731405415, 4290775857],
//       [2394180231, 1750603025],
//       [3675008525, 1694076839],
//       [1203062813, 3204075428],
//     ]),
//     (_states["SHA-512/256"] = [
//       [573645204, 4230739756],
//       [2673172387, 3360449730],
//       [596883563, 1867755857],
//       [2520282905, 1497426621],
//       [2519219938, 2827943907],
//       [3193839141, 1401305490],
//       [721525244, 746961066],
//       [246885852, 2177182882],
//     ]),
//     (_states["SHA-512/224"] = [
//       [2352822216, 424955298],
//       [1944164710, 2312950998],
//       [502970286, 855612546],
//       [1738396948, 1479516111],
//       [258812777, 2077511080],
//       [2011393907, 79989058],
//       [1067287976, 1780299464],
//       [286451373, 2446758561],
//     ]),
//     (_initialized = !0);
// }
// function _update(r, e, t) {
//   for (
//     var n,
//       i,
//       o,
//       a,
//       c,
//       u,
//       l,
//       h,
//       f,
//       d,
//       p,
//       g,
//       m,
//       b,
//       _,
//       w,
//       E,
//       v,
//       S,
//       I,
//       T,
//       A,
//       C,
//       x,
//       $,
//       O,
//       M,
//       K,
//       B,
//       N,
//       D,
//       P,
//       R,
//       k,
//       L,
//       U = t.length();
//     U >= 128;

//   ) {
//     for (B = 0; B < 16; ++B)
//       (e[B][0] = t.getInt32() >>> 0), (e[B][1] = t.getInt32() >>> 0);
//     for (; B < 80; ++B)
//       (P = e[B - 2]),
//         (N = P[0]),
//         (D = P[1]),
//         (n =
//           (((N >>> 19) | (D << 13)) ^ ((D >>> 29) | (N << 3)) ^ (N >>> 6)) >>>
//           0),
//         (i =
//           (((N << 13) | (D >>> 19)) ^
//             ((D << 3) | (N >>> 29)) ^
//             ((N << 26) | (D >>> 6))) >>>
//           0),
//         (k = e[B - 15]),
//         (N = k[0]),
//         (D = k[1]),
//         (o =
//           (((N >>> 1) | (D << 31)) ^ ((N >>> 8) | (D << 24)) ^ (N >>> 7)) >>>
//           0),
//         (a =
//           (((N << 31) | (D >>> 1)) ^
//             ((N << 24) | (D >>> 8)) ^
//             ((N << 25) | (D >>> 7))) >>>
//           0),
//         (R = e[B - 7]),
//         (L = e[B - 16]),
//         (D = i + R[1] + a + L[1]),
//         (e[B][0] = (n + R[0] + o + L[0] + ((D / 4294967296) >>> 0)) >>> 0),
//         (e[B][1] = D >>> 0);
//     for (
//       m = r[0][0],
//         b = r[0][1],
//         _ = r[1][0],
//         w = r[1][1],
//         E = r[2][0],
//         v = r[2][1],
//         S = r[3][0],
//         I = r[3][1],
//         T = r[4][0],
//         A = r[4][1],
//         C = r[5][0],
//         x = r[5][1],
//         $ = r[6][0],
//         O = r[6][1],
//         M = r[7][0],
//         K = r[7][1],
//         B = 0;
//       B < 80;
//       ++B
//     )
//       (l =
//         (((T >>> 14) | (A << 18)) ^
//           ((T >>> 18) | (A << 14)) ^
//           ((A >>> 9) | (T << 23))) >>>
//         0),
//         (h =
//           (((T << 18) | (A >>> 14)) ^
//             ((T << 14) | (A >>> 18)) ^
//             ((A << 23) | (T >>> 9))) >>>
//           0),
//         (f = ($ ^ (T & (C ^ $))) >>> 0),
//         (d = (O ^ (A & (x ^ O))) >>> 0),
//         (c =
//           (((m >>> 28) | (b << 4)) ^
//             ((b >>> 2) | (m << 30)) ^
//             ((b >>> 7) | (m << 25))) >>>
//           0),
//         (u =
//           (((m << 4) | (b >>> 28)) ^
//             ((b << 30) | (m >>> 2)) ^
//             ((b << 25) | (m >>> 7))) >>>
//           0),
//         (p = ((m & _) | (E & (m ^ _))) >>> 0),
//         (g = ((b & w) | (v & (b ^ w))) >>> 0),
//         (D = K + h + d + _k[B][1] + e[B][1]),
//         (n = (M + l + f + _k[B][0] + e[B][0] + ((D / 4294967296) >>> 0)) >>> 0),
//         (i = D >>> 0),
//         (D = u + g),
//         (o = (c + p + ((D / 4294967296) >>> 0)) >>> 0),
//         (a = D >>> 0),
//         (M = $),
//         (K = O),
//         ($ = C),
//         (O = x),
//         (C = T),
//         (x = A),
//         (D = I + i),
//         (T = (S + n + ((D / 4294967296) >>> 0)) >>> 0),
//         (A = D >>> 0),
//         (S = E),
//         (I = v),
//         (E = _),
//         (v = w),
//         (_ = m),
//         (w = b),
//         (D = i + a),
//         (m = (n + o + ((D / 4294967296) >>> 0)) >>> 0),
//         (b = D >>> 0);
//     (D = r[0][1] + b),
//       (r[0][0] = (r[0][0] + m + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[0][1] = D >>> 0),
//       (D = r[1][1] + w),
//       (r[1][0] = (r[1][0] + _ + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[1][1] = D >>> 0),
//       (D = r[2][1] + v),
//       (r[2][0] = (r[2][0] + E + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[2][1] = D >>> 0),
//       (D = r[3][1] + I),
//       (r[3][0] = (r[3][0] + S + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[3][1] = D >>> 0),
//       (D = r[4][1] + A),
//       (r[4][0] = (r[4][0] + T + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[4][1] = D >>> 0),
//       (D = r[5][1] + x),
//       (r[5][0] = (r[5][0] + C + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[5][1] = D >>> 0),
//       (D = r[6][1] + O),
//       (r[6][0] = (r[6][0] + $ + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[6][1] = D >>> 0),
//       (D = r[7][1] + K),
//       (r[7][0] = (r[7][0] + M + ((D / 4294967296) >>> 0)) >>> 0),
//       (r[7][1] = D >>> 0),
//       (U -= 128);
//   }
// }
// function randomBytes(r) {
//   if (isNaN(r) || r <= 0)
//     throw new CodeError$2(
//       "random bytes length must be a Number bigger than 0",
//       "ERR_INVALID_LENGTH"
//     );
//   return randomBytes$2(r);
// }
// function convert(r, e) {
//   return e.map((t) => base64urlToBigInteger(r[t]));
// }
// function jwk2priv(r) {
//   return forge$n.pki.setRsaPrivateKey(
//     ...convert(r, ["n", "e", "d", "p", "q", "dp", "dq", "qi"])
//   );
// }
// function jwk2pub(r) {
//   return forge$n.pki.setRsaPublicKey(...convert(r, ["n", "e"]));
// }
// function pkcs1ToJwk(r) {
//   const e = forge$n.asn1.fromDer(toString$3(r, "ascii")),
//     t = forge$n.pki.privateKeyFromAsn1(e);
//   return {
//     kty: "RSA",
//     n: bigIntegerToUintBase64url(t.n),
//     e: bigIntegerToUintBase64url(t.e),
//     d: bigIntegerToUintBase64url(t.d),
//     p: bigIntegerToUintBase64url(t.p),
//     q: bigIntegerToUintBase64url(t.q),
//     dp: bigIntegerToUintBase64url(t.dP),
//     dq: bigIntegerToUintBase64url(t.dQ),
//     qi: bigIntegerToUintBase64url(t.qInv),
//     alg: "RS256",
//   };
// }
// function jwkToPkcs1(r) {
//   if (
//     r.n == null ||
//     r.e == null ||
//     r.d == null ||
//     r.p == null ||
//     r.q == null ||
//     r.dp == null ||
//     r.dq == null ||
//     r.qi == null
//   )
//     throw new CodeError$2(
//       "JWK was missing components",
//       "ERR_INVALID_PARAMETERS"
//     );
//   const e = forge$n.pki.privateKeyToAsn1({
//     n: base64urlToBigInteger(r.n),
//     e: base64urlToBigInteger(r.e),
//     d: base64urlToBigInteger(r.d),
//     p: base64urlToBigInteger(r.p),
//     q: base64urlToBigInteger(r.q),
//     dP: base64urlToBigInteger(r.dp),
//     dQ: base64urlToBigInteger(r.dq),
//     qInv: base64urlToBigInteger(r.qi),
//   });
//   return fromString(forge$n.asn1.toDer(e).getBytes(), "ascii");
// }
// function pkixToJwk(r) {
//   const e = forge$n.asn1.fromDer(toString$3(r, "ascii")),
//     t = forge$n.pki.publicKeyFromAsn1(e);
//   return {
//     kty: "RSA",
//     n: bigIntegerToUintBase64url(t.n),
//     e: bigIntegerToUintBase64url(t.e),
//   };
// }
// function jwkToPkix(r) {
//   if (r.n == null || r.e == null)
//     throw new CodeError$2(
//       "JWK was missing components",
//       "ERR_INVALID_PARAMETERS"
//     );
//   const e = forge$n.pki.publicKeyToAsn1({
//     n: base64urlToBigInteger(r.n),
//     e: base64urlToBigInteger(r.e),
//   });
//   return fromString(forge$n.asn1.toDer(e).getBytes(), "ascii");
// }
// async function generateKey$1(r) {
//   const e = await webcrypto.get().subtle.generateKey(
//       {
//         name: "RSASSA-PKCS1-v1_5",
//         modulusLength: r,
//         publicExponent: new Uint8Array([1, 0, 1]),
//         hash: {
//           name: "SHA-256",
//         },
//       },
//       !0,
//       ["sign", "verify"]
//     ),
//     t = await exportKey(e);
//   return {
//     privateKey: t[0],
//     publicKey: t[1],
//   };
// }
// async function unmarshalPrivateKey$1(r) {
//   const t = [
//       await webcrypto.get().subtle.importKey(
//         "jwk",
//         r,
//         {
//           name: "RSASSA-PKCS1-v1_5",
//           hash: {
//             name: "SHA-256",
//           },
//         },
//         !0,
//         ["sign"]
//       ),
//       await derivePublicFromPrivate(r),
//     ],
//     n = await exportKey({
//       privateKey: t[0],
//       publicKey: t[1],
//     });
//   return {
//     privateKey: n[0],
//     publicKey: n[1],
//   };
// }
// async function hashAndSign$1(r, e) {
//   const t = await webcrypto.get().subtle.importKey(
//       "jwk",
//       r,
//       {
//         name: "RSASSA-PKCS1-v1_5",
//         hash: {
//           name: "SHA-256",
//         },
//       },
//       !1,
//       ["sign"]
//     ),
//     n = await webcrypto.get().subtle.sign(
//       {
//         name: "RSASSA-PKCS1-v1_5",
//       },
//       t,
//       e instanceof Uint8Array ? e : e.subarray()
//     );
//   return new Uint8Array(n, 0, n.byteLength);
// }
// async function hashAndVerify$1(r, e, t) {
//   const n = await webcrypto.get().subtle.importKey(
//     "jwk",
//     r,
//     {
//       name: "RSASSA-PKCS1-v1_5",
//       hash: {
//         name: "SHA-256",
//       },
//     },
//     !1,
//     ["verify"]
//   );
//   return webcrypto.get().subtle.verify(
//     {
//       name: "RSASSA-PKCS1-v1_5",
//     },
//     n,
//     e,
//     t instanceof Uint8Array ? t : t.subarray()
//   );
// }
// async function exportKey(r) {
//   if (r.privateKey == null || r.publicKey == null)
//     throw new CodeError$2(
//       "Private and public key are required",
//       "ERR_INVALID_PARAMETERS"
//     );
//   return Promise.all([
//     webcrypto.get().subtle.exportKey("jwk", r.privateKey),
//     webcrypto.get().subtle.exportKey("jwk", r.publicKey),
//   ]);
// }
// async function derivePublicFromPrivate(r) {
//   return webcrypto.get().subtle.importKey(
//     "jwk",
//     {
//       kty: r.kty,
//       n: r.n,
//       e: r.e,
//     },
//     {
//       name: "RSASSA-PKCS1-v1_5",
//       hash: {
//         name: "SHA-256",
//       },
//     },
//     !0,
//     ["verify"]
//   );
// }
// function convertKey(r, e, t, n) {
//   const i = e ? jwk2pub(r) : jwk2priv(r),
//     o = toString$3(t instanceof Uint8Array ? t : t.subarray(), "ascii"),
//     a = n(o, i);
//   return fromString(a, "ascii");
// }
// function encrypt(r, e) {
//   return convertKey(r, !0, e, (t, n) => n.encrypt(t));
// }
// function decrypt(r, e) {
//   return convertKey(r, !1, e, (t, n) => n.decrypt(t));
// }
// function keySize(r) {
//   if (r.kty !== "RSA")
//     throw new CodeError$2("invalid key type", "ERR_INVALID_KEY_TYPE");
//   if (r.n == null)
//     throw new CodeError$2("invalid key modulus", "ERR_INVALID_KEY_MODULUS");
//   return fromString(r.n, "base64url").length * 8;
// }
// const MAX_KEY_SIZE = 8192;
// class RsaPublicKey {
//   constructor(e) {
//     y(this, "_key");
//     this._key = e;
//   }
//   verify(e, t) {
//     return hashAndVerify$1(this._key, t, e);
//   }
//   marshal() {
//     return jwkToPkix(this._key);
//   }
//   get bytes() {
//     return PublicKey.encode({
//       Type: KeyType.RSA,
//       Data: this.marshal(),
//     }).subarray();
//   }
//   encrypt(e) {
//     return encrypt(this._key, e);
//   }
//   equals(e) {
//     return equals(this.bytes, e.bytes);
//   }
//   hash() {
//     const e = sha256$2.digest(this.bytes);
//     return isPromise$4(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//   }
// }
// class RsaPrivateKey {
//   constructor(e, t) {
//     y(this, "_key");
//     y(this, "_publicKey");
//     (this._key = e), (this._publicKey = t);
//   }
//   genSecret() {
//     return randomBytes(16);
//   }
//   sign(e) {
//     return hashAndSign$1(this._key, e);
//   }
//   get public() {
//     if (this._publicKey == null)
//       throw new CodeError$2(
//         "public key not provided",
//         "ERR_PUBKEY_NOT_PROVIDED"
//       );
//     return new RsaPublicKey(this._publicKey);
//   }
//   decrypt(e) {
//     return decrypt(this._key, e);
//   }
//   marshal() {
//     return jwkToPkcs1(this._key);
//   }
//   get bytes() {
//     return PrivateKey.encode({
//       Type: KeyType.RSA,
//       Data: this.marshal(),
//     }).subarray();
//   }
//   equals(e) {
//     return equals(this.bytes, e.bytes);
//   }
//   hash() {
//     const e = sha256$2.digest(this.bytes);
//     return isPromise$4(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//   }
//   async id() {
//     const e = await this.public.hash();
//     return toString$3(e, "base58btc");
//   }
//   async export(e, t = "pkcs-8") {
//     if (t === "pkcs-8") {
//       const n = new forge$n.util.ByteBuffer(this.marshal()),
//         i = forge$n.asn1.fromDer(n),
//         o = forge$n.pki.privateKeyFromAsn1(i),
//         a = {
//           algorithm: "aes256",
//           count: 1e4,
//           saltSize: 128 / 8,
//           prfAlgorithm: "sha512",
//         };
//       return forge$n.pki.encryptRsaPrivateKey(o, e, a);
//     } else {
//       if (t === "libp2p-key") return exporter(this.bytes, e);
//       throw new CodeError$2(
//         `export format '${t}' is not supported`,
//         "ERR_INVALID_EXPORT_FORMAT"
//       );
//     }
//   }
// }
// async function unmarshalRsaPrivateKey(r) {
//   const e = pkcs1ToJwk(r);
//   if (keySize(e) > MAX_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   const t = await unmarshalPrivateKey$1(e);
//   return new RsaPrivateKey(t.privateKey, t.publicKey);
// }
// function unmarshalRsaPublicKey(r) {
//   const e = pkixToJwk(r);
//   if (keySize(e) > MAX_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   return new RsaPublicKey(e);
// }
// async function fromJwk(r) {
//   if (keySize(r) > MAX_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   const e = await unmarshalPrivateKey$1(r);
//   return new RsaPrivateKey(e.privateKey, e.publicKey);
// }
// async function generateKeyPair$1(r) {
//   if (r > MAX_KEY_SIZE)
//     throw new CodeError$2("key size is too large", "ERR_KEY_SIZE_TOO_LARGE");
//   const e = await generateKey$1(r);
//   return new RsaPrivateKey(e.privateKey, e.publicKey);
// }
// const RSA = Object.freeze(
//   Object.defineProperty(
//     {
//       __proto__: null,
//       MAX_KEY_SIZE,
//       RsaPrivateKey,
//       RsaPublicKey,
//       fromJwk,
//       generateKeyPair: generateKeyPair$1,
//       unmarshalRsaPrivateKey,
//       unmarshalRsaPublicKey,
//     },
//     Symbol.toStringTag,
//     {
//       value: "Module",
//     }
//   )
// );
// function generateKey() {
//   return secp256k1.utils.randomPrivateKey();
// }
// function hashAndSign(r, e) {
//   const t = sha256$2.digest(e instanceof Uint8Array ? e : e.subarray());
//   if (isPromise$4(t))
//     return t
//       .then(({ digest: n }) => secp256k1.sign(n, r).toDERRawBytes())
//       .catch((n) => {
//         throw new CodeError$2(String(n), "ERR_INVALID_INPUT");
//       });
//   try {
//     return secp256k1.sign(t.digest, r).toDERRawBytes();
//   } catch (n) {
//     throw new CodeError$2(String(n), "ERR_INVALID_INPUT");
//   }
// }
// function hashAndVerify(r, e, t) {
//   const n = sha256$2.digest(t instanceof Uint8Array ? t : t.subarray());
//   if (isPromise$4(n))
//     return n
//       .then(({ digest: i }) => secp256k1.verify(e, i, r))
//       .catch((i) => {
//         throw new CodeError$2(String(i), "ERR_INVALID_INPUT");
//       });
//   try {
//     return secp256k1.verify(e, n.digest, r);
//   } catch (i) {
//     throw new CodeError$2(String(i), "ERR_INVALID_INPUT");
//   }
// }
// function compressPublicKey(r) {
//   return secp256k1.ProjectivePoint.fromHex(r).toRawBytes(!0);
// }
// function validatePrivateKey(r) {
//   try {
//     secp256k1.getPublicKey(r, !0);
//   } catch (e) {
//     throw new CodeError$2(String(e), "ERR_INVALID_PRIVATE_KEY");
//   }
// }
// function validatePublicKey(r) {
//   try {
//     secp256k1.ProjectivePoint.fromHex(r);
//   } catch (e) {
//     throw new CodeError$2(String(e), "ERR_INVALID_PUBLIC_KEY");
//   }
// }
// function computePublicKey(r) {
//   try {
//     return secp256k1.getPublicKey(r, !0);
//   } catch (e) {
//     throw new CodeError$2(String(e), "ERR_INVALID_PRIVATE_KEY");
//   }
// }
// class Secp256k1PublicKey {
//   constructor(e) {
//     y(this, "_key");
//     validatePublicKey(e), (this._key = e);
//   }
//   verify(e, t) {
//     return hashAndVerify(this._key, t, e);
//   }
//   marshal() {
//     return compressPublicKey(this._key);
//   }
//   get bytes() {
//     return PublicKey.encode({
//       Type: KeyType.Secp256k1,
//       Data: this.marshal(),
//     }).subarray();
//   }
//   equals(e) {
//     return equals(this.bytes, e.bytes);
//   }
//   async hash() {
//     const e = sha256$2.digest(this.bytes);
//     let t;
//     return isPromise$4(e) ? ({ bytes: t } = await e) : (t = e.bytes), t;
//   }
// }
// class Secp256k1PrivateKey {
//   constructor(e, t) {
//     y(this, "_key");
//     y(this, "_publicKey");
//     (this._key = e),
//       (this._publicKey = t ?? computePublicKey(e)),
//       validatePrivateKey(this._key),
//       validatePublicKey(this._publicKey);
//   }
//   sign(e) {
//     return hashAndSign(this._key, e);
//   }
//   get public() {
//     return new Secp256k1PublicKey(this._publicKey);
//   }
//   marshal() {
//     return this._key;
//   }
//   get bytes() {
//     return PrivateKey.encode({
//       Type: KeyType.Secp256k1,
//       Data: this.marshal(),
//     }).subarray();
//   }
//   equals(e) {
//     return equals(this.bytes, e.bytes);
//   }
//   hash() {
//     const e = sha256$2.digest(this.bytes);
//     return isPromise$4(e) ? e.then(({ bytes: t }) => t) : e.bytes;
//   }
//   async id() {
//     const e = await this.public.hash();
//     return toString$3(e, "base58btc");
//   }
//   async export(e, t = "libp2p-key") {
//     if (t === "libp2p-key") return exporter(this.bytes, e);
//     throw new CodeError$2(
//       `export format '${t}' is not supported`,
//       "ERR_INVALID_EXPORT_FORMAT"
//     );
//   }
// }
// function unmarshalSecp256k1PrivateKey(r) {
//   return new Secp256k1PrivateKey(r);
// }
// function unmarshalSecp256k1PublicKey(r) {
//   return new Secp256k1PublicKey(r);
// }
// async function generateKeyPair() {
//   const r = generateKey();
//   return new Secp256k1PrivateKey(r);
// }
// const Secp256k1 = Object.freeze(
//     Object.defineProperty(
//       {
//         __proto__: null,
//         Secp256k1PrivateKey,
//         Secp256k1PublicKey,
//         generateKeyPair,
//         unmarshalSecp256k1PrivateKey,
//         unmarshalSecp256k1PublicKey,
//       },
//       Symbol.toStringTag,
//       {
//         value: "Module",
//       }
//     )
//   ),
//   supportedKeys = {
//     rsa: RSA,
//     ed25519: Ed25519,
//     secp256k1: Secp256k1,
//   };
// function unsupportedKey(r) {
//   const e = Object.keys(supportedKeys).join(" / ");
//   return new CodeError$2(
//     `invalid or unsupported key type ${r}. Must be ${e}`,
//     "ERR_UNSUPPORTED_KEY_TYPE"
//   );
// }
// function unmarshalPublicKey(r) {
//   const e = PublicKey.decode(r),
//     t = e.Data ?? new Uint8Array();
//   switch (e.Type) {
//     case KeyType.RSA:
//       return supportedKeys.rsa.unmarshalRsaPublicKey(t);
//     case KeyType.Ed25519:
//       return supportedKeys.ed25519.unmarshalEd25519PublicKey(t);
//     case KeyType.Secp256k1:
//       return supportedKeys.secp256k1.unmarshalSecp256k1PublicKey(t);
//     default:
//       throw unsupportedKey(e.Type ?? "unknown");
//   }
// }
// async function unmarshalPrivateKey(r) {
//   const e = PrivateKey.decode(r),
//     t = e.Data ?? new Uint8Array();
//   switch (e.Type) {
//     case KeyType.RSA:
//       return supportedKeys.rsa.unmarshalRsaPrivateKey(t);
//     case KeyType.Ed25519:
//       return supportedKeys.ed25519.unmarshalEd25519PrivateKey(t);
//     case KeyType.Secp256k1:
//       return supportedKeys.secp256k1.unmarshalSecp256k1PrivateKey(t);
//     default:
//       throw unsupportedKey(e.Type ?? "RSA");
//   }
// }
// var NoiseExtensions;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           if (
//             (i.lengthDelimited !== !1 && n.fork(),
//             t.webtransportCerthashes != null)
//           )
//             for (const o of t.webtransportCerthashes) n.uint32(10), n.bytes(o);
//           i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {
//               webtransportCerthashes: [],
//             },
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1: {
//                 i.webtransportCerthashes.push(t.bytes());
//                 break;
//               }
//               default: {
//                 t.skipType(a & 7);
//                 break;
//               }
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(NoiseExtensions || (NoiseExtensions = {}));
// var NoiseHandshakePayload;
// (function (r) {
//   let e;
//   (r.codec = () => (
//     e == null &&
//       (e = message(
//         (t, n, i = {}) => {
//           i.lengthDelimited !== !1 && n.fork(),
//             t.identityKey != null &&
//               t.identityKey.byteLength > 0 &&
//               (n.uint32(10), n.bytes(t.identityKey)),
//             t.identitySig != null &&
//               t.identitySig.byteLength > 0 &&
//               (n.uint32(18), n.bytes(t.identitySig)),
//             t.extensions != null &&
//               (n.uint32(34), NoiseExtensions.codec().encode(t.extensions, n)),
//             i.lengthDelimited !== !1 && n.ldelim();
//         },
//         (t, n) => {
//           const i = {
//               identityKey: alloc$1(0),
//               identitySig: alloc$1(0),
//             },
//             o = n == null ? t.len : t.pos + n;
//           for (; t.pos < o; ) {
//             const a = t.uint32();
//             switch (a >>> 3) {
//               case 1: {
//                 i.identityKey = t.bytes();
//                 break;
//               }
//               case 2: {
//                 i.identitySig = t.bytes();
//                 break;
//               }
//               case 4: {
//                 i.extensions = NoiseExtensions.codec().decode(t, t.uint32());
//                 break;
//               }
//               default: {
//                 t.skipType(a & 7);
//                 break;
//               }
//             }
//           }
//           return i;
//         }
//       )),
//     e
//   )),
//     (r.encode = (t) => encodeMessage(t, r.codec())),
//     (r.decode = (t) => decodeMessage$1(t, r.codec()));
// })(NoiseHandshakePayload || (NoiseHandshakePayload = {}));
// async function getPayload(r, e, t) {
//   const n = await signPayload(r, getHandshakePayload(e));
//   if (r.publicKey == null)
//     throw new Error("PublicKey was missing from local PeerId");
//   return createHandshakePayload(r.publicKey, n, t);
// }
// function createHandshakePayload(r, e, t) {
//   return NoiseHandshakePayload.encode({
//     identityKey: r,
//     identitySig: e,
//     extensions: t ?? {
//       webtransportCerthashes: [],
//     },
//   }).subarray();
// }
// async function signPayload(r, e) {
//   if (r.privateKey == null)
//     throw new Error("PrivateKey was missing from PeerId");
//   return (await unmarshalPrivateKey(r.privateKey)).sign(e);
// }
// async function getPeerIdFromPayload(r) {
//   return peerIdFromKeys(r.identityKey);
// }
// function decodePayload(r) {
//   return NoiseHandshakePayload.decode(r);
// }
// function getHandshakePayload(r) {
//   const e = fromString("noise-libp2p-static-key:");
//   return r instanceof Uint8Array
//     ? concat$1([e, r], e.length + r.length)
//     : (r.prepend(e), r);
// }
// async function verifySignedPayload(r, e, t) {
//   const n = await peerIdFromKeys(e.identityKey);
//   if (!n.equals(t))
//     throw new Error(
//       `Payload identity key ${n.toString()} does not match expected remote peer ${t.toString()}`
//     );
//   const i = getHandshakePayload(r);
//   if (n.publicKey == null) throw new Error("PublicKey was missing from PeerId");
//   if (e.identitySig == null)
//     throw new Error("Signature was missing from message");
//   if (!(await unmarshalPublicKey(n.publicKey).verify(i, e.identitySig)))
//     throw new Error("Static key doesn't match to peer that signed payload!");
//   return n;
// }
// function isValidPublicKey(r) {
//   return !(
//     (!(r instanceof Uint8Array) && !isUint8ArrayList(r)) ||
//     r.byteLength !== 32
//   );
// }
// const MIN_NONCE = 0,
//   MAX_NONCE = 4294967295,
//   ERR_MAX_NONCE =
//     "Cipherstate has reached maximum n, a new handshake must be performed";
// class Nonce {
//   constructor(e = MIN_NONCE) {
//     y(this, "n");
//     y(this, "bytes");
//     y(this, "view");
//     (this.n = e),
//       (this.bytes = alloc$1(12)),
//       (this.view = new DataView(
//         this.bytes.buffer,
//         this.bytes.byteOffset,
//         this.bytes.byteLength
//       )),
//       this.view.setUint32(4, e, !0);
//   }
//   increment() {
//     this.n++, this.view.setUint32(4, this.n, !0);
//   }
//   getBytes() {
//     return this.bytes;
//   }
//   getUint64() {
//     return this.n;
//   }
//   assertValue() {
//     if (this.n > MAX_NONCE) throw new Error(ERR_MAX_NONCE);
//   }
// }
// class AbstractHandshake {
//   constructor(e, t) {
//     y(this, "crypto");
//     y(this, "log");
//     (this.log = e.logger.forComponent("libp2p:noise:abstract-handshake")),
//       (this.crypto = t);
//   }
//   encryptWithAd(e, t, n) {
//     const i = this.encrypt(e.k, e.n, t, n);
//     return e.n.increment(), i;
//   }
//   decryptWithAd(e, t, n, i) {
//     const { plaintext: o, valid: a } = this.decrypt(e.k, e.n, t, n, i);
//     return (
//       a && e.n.increment(),
//       {
//         plaintext: o,
//         valid: a,
//       }
//     );
//   }
//   hasKey(e) {
//     return !this.isEmptyKey(e.k);
//   }
//   createEmptyKey() {
//     return alloc$1(32);
//   }
//   isEmptyKey(e) {
//     const t = this.createEmptyKey();
//     return equals(t, e);
//   }
//   encrypt(e, t, n, i) {
//     return (
//       t.assertValue(),
//       this.crypto.chaCha20Poly1305Encrypt(i, t.getBytes(), n, e)
//     );
//   }
//   encryptAndHash(e, t) {
//     let n;
//     return (
//       this.hasKey(e.cs) ? (n = this.encryptWithAd(e.cs, e.h, t)) : (n = t),
//       this.mixHash(e, n),
//       n
//     );
//   }
//   decrypt(e, t, n, i, o) {
//     t.assertValue();
//     const a = this.crypto.chaCha20Poly1305Decrypt(i, t.getBytes(), n, e, o);
//     return a
//       ? {
//           plaintext: a,
//           valid: !0,
//         }
//       : {
//           plaintext: alloc$1(0),
//           valid: !1,
//         };
//   }
//   decryptAndHash(e, t) {
//     let n,
//       i = !0;
//     return (
//       this.hasKey(e.cs)
//         ? ({ plaintext: n, valid: i } = this.decryptWithAd(e.cs, e.h, t))
//         : (n = t),
//       this.mixHash(e, t),
//       {
//         plaintext: n,
//         valid: i,
//       }
//     );
//   }
//   dh(e, t) {
//     try {
//       const n = this.crypto.generateX25519SharedKey(e, t);
//       return n.length === 32 ? n : n.subarray(0, 32);
//     } catch (n) {
//       const i = n;
//       return this.log.error("error deriving shared key", i), alloc$1(32);
//     }
//   }
//   mixHash(e, t) {
//     e.h = this.getHash(e.h, t);
//   }
//   getHash(e, t) {
//     return this.crypto.hashSHA256(new Uint8ArrayList(e, t));
//   }
//   mixKey(e, t) {
//     const [n, i] = this.crypto.getHKDF(e.ck, t);
//     (e.cs = this.initializeKey(i)), (e.ck = n);
//   }
//   initializeKey(e) {
//     return {
//       k: e,
//       n: new Nonce(),
//     };
//   }
//   initializeSymmetric(e) {
//     const t = fromString(e, "utf-8"),
//       n = this.hashProtocolName(t),
//       i = n,
//       o = this.createEmptyKey();
//     return {
//       cs: this.initializeKey(o),
//       ck: i,
//       h: n,
//     };
//   }
//   hashProtocolName(e) {
//     if (e.length <= 32) {
//       const t = alloc$1(32);
//       return t.set(e), t;
//     } else return this.getHash(e, alloc$1(0));
//   }
//   split(e) {
//     const [t, n] = this.crypto.getHKDF(e.ck, alloc$1(0)),
//       i = this.initializeKey(t),
//       o = this.initializeKey(n);
//     return {
//       cs1: i,
//       cs2: o,
//     };
//   }
//   writeMessageRegular(e, t) {
//     const n = this.encryptWithAd(e, alloc$1(0), t),
//       i = this.createEmptyKey(),
//       o = alloc$1(0);
//     return {
//       ne: i,
//       ns: o,
//       ciphertext: n,
//     };
//   }
//   readMessageRegular(e, t) {
//     return this.decryptWithAd(e, alloc$1(0), t.ciphertext);
//   }
// }
// class XX extends AbstractHandshake {
//   initializeInitiator(e, t, n, i) {
//     const o = "Noise_XX_25519_ChaChaPoly_SHA256",
//       a = this.initializeSymmetric(o);
//     this.mixHash(a, e);
//     const c = alloc$1(32);
//     return {
//       ss: a,
//       s: t,
//       rs: n,
//       psk: i,
//       re: c,
//     };
//   }
//   initializeResponder(e, t, n, i) {
//     const o = "Noise_XX_25519_ChaChaPoly_SHA256",
//       a = this.initializeSymmetric(o);
//     this.mixHash(a, e);
//     const c = alloc$1(32);
//     return {
//       ss: a,
//       s: t,
//       rs: n,
//       psk: i,
//       re: c,
//     };
//   }
//   writeMessageA(e, t, n) {
//     const i = alloc$1(0);
//     n !== void 0 ? (e.e = n) : (e.e = this.crypto.generateX25519KeyPair());
//     const o = e.e.publicKey;
//     this.mixHash(e.ss, o);
//     const a = this.encryptAndHash(e.ss, t);
//     return {
//       ne: o,
//       ns: i,
//       ciphertext: a,
//     };
//   }
//   writeMessageB(e, t) {
//     e.e = this.crypto.generateX25519KeyPair();
//     const n = e.e.publicKey;
//     this.mixHash(e.ss, n), this.mixKey(e.ss, this.dh(e.e.privateKey, e.re));
//     const i = e.s.publicKey,
//       o = this.encryptAndHash(e.ss, i);
//     this.mixKey(e.ss, this.dh(e.s.privateKey, e.re));
//     const a = this.encryptAndHash(e.ss, t);
//     return {
//       ne: n,
//       ns: o,
//       ciphertext: a,
//     };
//   }
//   writeMessageC(e, t) {
//     const n = e.s.publicKey,
//       i = this.encryptAndHash(e.ss, n);
//     this.mixKey(e.ss, this.dh(e.s.privateKey, e.re));
//     const o = this.encryptAndHash(e.ss, t),
//       c = {
//         ne: this.createEmptyKey(),
//         ns: i,
//         ciphertext: o,
//       },
//       { cs1: u, cs2: l } = this.split(e.ss);
//     return {
//       h: e.ss.h,
//       messageBuffer: c,
//       cs1: u,
//       cs2: l,
//     };
//   }
//   readMessageA(e, t) {
//     return (
//       isValidPublicKey(t.ne) && (e.re = t.ne),
//       this.mixHash(e.ss, e.re),
//       this.decryptAndHash(e.ss, t.ciphertext)
//     );
//   }
//   readMessageB(e, t) {
//     if (
//       (isValidPublicKey(t.ne) && (e.re = t.ne), this.mixHash(e.ss, e.re), !e.e)
//     )
//       throw new Error("Handshake state `e` param is missing.");
//     this.mixKey(e.ss, this.dh(e.e.privateKey, e.re));
//     const { plaintext: n, valid: i } = this.decryptAndHash(e.ss, t.ns);
//     i && isValidPublicKey(n) && (e.rs = n),
//       this.mixKey(e.ss, this.dh(e.e.privateKey, e.rs));
//     const { plaintext: o, valid: a } = this.decryptAndHash(e.ss, t.ciphertext);
//     return {
//       plaintext: o,
//       valid: i && a,
//     };
//   }
//   readMessageC(e, t) {
//     const { plaintext: n, valid: i } = this.decryptAndHash(e.ss, t.ns);
//     if ((i && isValidPublicKey(n) && (e.rs = n), !e.e))
//       throw new Error("Handshake state `e` param is missing.");
//     this.mixKey(e.ss, this.dh(e.e.privateKey, e.rs));
//     const { plaintext: o, valid: a } = this.decryptAndHash(e.ss, t.ciphertext),
//       { cs1: c, cs2: u } = this.split(e.ss);
//     return {
//       h: e.ss.h,
//       plaintext: o,
//       valid: i && a,
//       cs1: c,
//       cs2: u,
//     };
//   }
//   initSession(e, t, n) {
//     const i = this.createEmptyKey(),
//       o = alloc$1(32);
//     let a;
//     return (
//       e
//         ? (a = this.initializeInitiator(t, n, o, i))
//         : (a = this.initializeResponder(t, n, o, i)),
//       {
//         hs: a,
//         i: e,
//         mc: 0,
//       }
//     );
//   }
//   sendMessage(e, t, n) {
//     let i;
//     if (e.mc === 0) i = this.writeMessageA(e.hs, t, n);
//     else if (e.mc === 1) i = this.writeMessageB(e.hs, t);
//     else if (e.mc === 2) {
//       const {
//         h: o,
//         messageBuffer: a,
//         cs1: c,
//         cs2: u,
//       } = this.writeMessageC(e.hs, t);
//       (i = a), (e.h = o), (e.cs1 = c), (e.cs2 = u);
//     } else if (e.mc > 2)
//       if (e.i) {
//         if (!e.cs1) throw new Error("CS1 (cipher state) is not defined");
//         i = this.writeMessageRegular(e.cs1, t);
//       } else {
//         if (!e.cs2) throw new Error("CS2 (cipher state) is not defined");
//         i = this.writeMessageRegular(e.cs2, t);
//       }
//     else throw new Error("Session invalid.");
//     return e.mc++, i;
//   }
//   recvMessage(e, t) {
//     let n = alloc$1(0),
//       i = !1;
//     if (e.mc === 0) ({ plaintext: n, valid: i } = this.readMessageA(e.hs, t));
//     else if (e.mc === 1)
//       ({ plaintext: n, valid: i } = this.readMessageB(e.hs, t));
//     else if (e.mc === 2) {
//       const {
//         h: o,
//         plaintext: a,
//         valid: c,
//         cs1: u,
//         cs2: l,
//       } = this.readMessageC(e.hs, t);
//       (n = a), (i = c), (e.h = o), (e.cs1 = u), (e.cs2 = l);
//     }
//     return (
//       e.mc++,
//       {
//         plaintext: n,
//         valid: i,
//       }
//     );
//   }
// }
// function logLocalStaticKeys(r, e) {
//   !e.enabled ||
//     !DUMP_SESSION_KEYS ||
//     (e(`LOCAL_STATIC_PUBLIC_KEY ${toString$3(r.publicKey, "hex")}`),
//     e(`LOCAL_STATIC_PRIVATE_KEY ${toString$3(r.privateKey, "hex")}`));
// }
// function logLocalEphemeralKeys(r, e) {
//   !e.enabled ||
//     !DUMP_SESSION_KEYS ||
//     (r
//       ? (e(`LOCAL_PUBLIC_EPHEMERAL_KEY ${toString$3(r.publicKey, "hex")}`),
//         e(`LOCAL_PRIVATE_EPHEMERAL_KEY ${toString$3(r.privateKey, "hex")}`))
//       : e("Missing local ephemeral keys."));
// }
// function logRemoteStaticKey(r, e) {
//   !e.enabled ||
//     !DUMP_SESSION_KEYS ||
//     e(`REMOTE_STATIC_PUBLIC_KEY ${toString$3(r.subarray(), "hex")}`);
// }
// function logRemoteEphemeralKey(r, e) {
//   !e.enabled ||
//     !DUMP_SESSION_KEYS ||
//     e(`REMOTE_EPHEMERAL_PUBLIC_KEY ${toString$3(r.subarray(), "hex")}`);
// }
// function logCipherState(r, e) {
//   !e.enabled ||
//     !DUMP_SESSION_KEYS ||
//     (r.cs1 && r.cs2
//       ? (e(
//           `CIPHER_STATE_1 ${r.cs1.n.getUint64()} ${toString$3(r.cs1.k, "hex")}`
//         ),
//         e(
//           `CIPHER_STATE_2 ${r.cs2.n.getUint64()} ${toString$3(r.cs2.k, "hex")}`
//         ))
//       : e("Missing cipher state."));
// }

// class B7S {
//   static async GeneratePrivateKey(e) {
//     const t = await generateKeyPair$3("Ed25519");
//     return {
//       peerId: await peerIdFromKeys(t.public.bytes),
//       encryptedKey: await t.export(e),
//     };
//   }

//   static async ImportPrivateKey(e, t) {
//     return await importKey(e, t);
//   }

//   static async ImportPeerId(e, t) {
//     const n = await importKey(e, t);
//     return await peerIdFromKeys(n.public.bytes, n.bytes);
//   }
// }

// async function createPeer(r) {
//   const { peerId: e, encryptedKey: t } = await B7S.GeneratePrivateKey(r);
//   return {
//     peerId: e,
//     encryptedKey: t,
//   };
// }

// function generateRandomSystemInfo() {
//   const cpuModels = [
//     { model: "Common KVM processor", architecture: "x86_64", processors: 4 },
//     { model: "Intel Core i3", architecture: "x86_64", processors: 2 },
//     { model: "Intel Core i5", architecture: "x86_64", processors: 4 },
//     { model: "Intel Core i7", architecture: "x86_64", processors: 6 },
//     { model: "Intel Core i9", architecture: "x86_64", processors: 8 },
//     { model: "Intel Xeon E5-2440", architecture: "x86_64", processors: 8 },
//     { model: "Intel Xeon Gold 6248R", architecture: "x86_64", processors: 16 },
//     { model: "Intel Pentium G4560", architecture: "x86_64", processors: 2 },
//     { model: "AMD Ryzen 3 3200G", architecture: "x86_64", processors: 4 },
//     { model: "AMD Ryzen 5 3600", architecture: "x86_64", processors: 6 },
//     { model: "AMD Ryzen 7 3700X", architecture: "x86_64", processors: 8 },
//     { model: "AMD Ryzen 9 5900X", architecture: "x86_64", processors: 12 },
//     { model: "Apple M1", architecture: "arm64", processors: 8 },
//     { model: "Apple M2", architecture: "arm64", processors: 8 },
//     { model: "Qualcomm Snapdragon 888", architecture: "arm64", processors: 8 },
//     { model: "ARM Cortex-A76", architecture: "arm64", processors: 4 },
//     { model: "ARM Cortex-A78", architecture: "arm64", processors: 8 },
//     { model: "Exynos 2200", architecture: "arm64", processors: 8 },
//     { model: "Intel Atom x7-Z8750", architecture: "x86_64", processors: 4 },
//     {
//       model: "Intel Xeon Platinum 8280",
//       architecture: "x86_64",
//       processors: 28,
//     },
//     { model: "Intel Core i5-11600K", architecture: "x86_64", processors: 6 },
//     { model: "Intel Core i7-12700K", architecture: "x86_64", processors: 8 },
//     { model: "Intel Core i9-13900K", architecture: "x86_64", processors: 16 },
//     { model: "AMD Ryzen 5 5600X", architecture: "x86_64", processors: 6 },
//     { model: "AMD Ryzen 7 5800X", architecture: "x86_64", processors: 8 },
//     { model: "AMD Ryzen 9 7950X", architecture: "x86_64", processors: 16 },
//     { model: "Apple A14 Bionic", architecture: "arm64", processors: 6 },
//     { model: "Apple A15 Bionic", architecture: "arm64", processors: 6 },
//     { model: "Samsung Exynos 990", architecture: "arm64", processors: 8 },
//     { model: "HiSilicon Kirin 9000", architecture: "arm64", processors: 8 },
//     { model: "Intel Celeron N4020", architecture: "x86_64", processors: 2 },
//     { model: "Intel Core i9-10900K", architecture: "x86_64", processors: 10 },
//     { model: "Intel Xeon Silver 4210", architecture: "x86_64", processors: 10 },
//     { model: "Qualcomm Snapdragon 855", architecture: "arm64", processors: 8 },
//     { model: "Qualcomm Snapdragon 865", architecture: "arm64", processors: 8 },
//     { model: "ARM Cortex-A53", architecture: "arm64", processors: 4 },
//     { model: "ARM Cortex-A72", architecture: "arm64", processors: 4 },
//   ];

//   const cpuFeaturesList = [
//     ["mmx", "sse", "sse2", "sse3"],
//     ["avx", "avx2", "fma"],
//     ["neon", "vfpv3"],
//     ["aes", "sgx", "avx512"],
//   ];
//   const totalMemory = [4294967296, 8589934592, 17179869184, 34359738368]; // 4GB, 8GB, 16GB, 32GB

//   const randomCpu = cpuModels[Math.floor(Math.random() * cpuModels.length)];

//   return {
//     cpuArchitecture: randomCpu.architecture,
//     cpuModel: randomCpu.model,
//     cpuFeatures:
//       cpuFeaturesList[Math.floor(Math.random() * cpuFeaturesList.length)],
//     numOfProcessors: randomCpu.processors,
//     totalMemory: totalMemory[Math.floor(Math.random() * totalMemory.length)],
//   };
// }

// async function getHardwareInfo() {
//   try {
//     // const [r,e] = await Promise.all([chrome.system.cpu.getInfo(), chrome.system.memory.getInfo()]);
//     // return {
//     //     cpuArchitecture: r.archName,
//     //     cpuModel: r.modelName,
//     //     cpuFeatures: r.features,
//     //     numOfProcessors: r.numOfProcessors,
//     //     totalMemory: e.capacity
//     // }

//     return generateRandomSystemInfo();
//   } catch (r) {
//     return console.error("Error getting hardware info:", r), null;
//   }
// }
// async function generateDeviceIdentifier() {
//   const r = await getHardwareInfo(),
//     e = JSON.stringify({
//       hardware: btoa(JSON.stringify(r)),
//     }),
//     n = new TextEncoder().encode(e);
//   return crypto.subtle.digest("SHA-256", n).then((i) =>
//     Array.from(new Uint8Array(i))
//       .map((a) => a.toString(16).padStart(2, "0"))
//       .join("")
//   );
// }

// async function WTFTestHash() {
//     t = "6b66260453d590ba82faf310"

//     const {peerId: i, encryptedKey: o} = await createPeer(t);

//     console.log("peerId", i.toString());
//     console.log("peerEncryptedPrivKey", o);

// };

// // const e = await chrome.storage.local.get("nodeData")
// // {
// //     "nodeData": {
// //         "peerEncryptedPrivKey": "mS+Ydp6JHH7JsDwUw1qznprCykFrPaUxNwQNwEoCs3RF+CbUMW1D1NzNqL8w9chZyFN6a/QKeHhUCBp3AIWc02wb0eLCkX2Hf2RsLKa9jnY16MmICA8gdBp0z2AAI3CnmFxWU611AWt0pwvePUkWHqg",
// //         "peerPubKey": "12D3KooWMLt8uqt1gabfhmsdqKppqCtGAG1MsaMug8SP7RSg956r"
// //     }
// // }

// async function registerNode(pubKey, hardwareId, addr, accessToken) {
//   const apiBaseUrl = "https://gateway-run.bls.dev/api/v1";
//   const xExtensionVersion = "0.1.5";
//   const url = `${apiBaseUrl}/nodes/${pubKey}`;

//   console.log(
//     `[${new Date().toISOString()}] Registering node PubKey: ${pubKey}, HardwareID: ${hardwareId}`
//   );

//   const body = { hardwareId };
//   if (addr) {
//     body.ipAddress = addr;
//   }

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//         "X-Extension-Version": xExtensionVersion,
//       },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       throw new Error(
//         `Failed to register node ${pubKey}: HTTP ${response.status}`
//       );
//     }

//     const responseText = await response.text();

//     const data = JSON.parse(responseText);

//     console.log(`[${new Date().toISOString()}] Registration: ${pubKey}`);
//     return data;
//   } catch (error) {
//     console.error(`[${new Date().toISOString()}] Error: ${error.message}`);
//     throw error;
//   }
// }

// async function main(accessToken) {
//   t = "6b66260453d590ba82faf310";

//   for (let index = 0; index < 5; index++) {
    
//     const { peerId: i, encryptedKey: o } = await createPeer(t);
//     const hwId = await generateDeviceIdentifier();
  
//     console.log("peerId:", i.toString());
//     console.log("peerEncryptedPrivKey:", o);
//     console.log("hardwareId", hwId);
  
//     // ตัวอย่างการเรียกใช้งาน
//     registerNode(i.toString(), hwId, false, accessToken)
//       .then((response) => {
//         // console.log("Registration successful:", response);
//       })
//       .catch((error) => {
//         // console.error("Registration failed:", error);
//       });
//   }

// }



// // (((((((((((((((((((())))))))))))))))))))
// // CTRL + A & CTRL + / for crypto function  << ----------------------------------
// // (((((((((((((((((((())))))))))))))))))))

// // main(""); // ใส่ accessToken (auto insert node)
// WTFTestHash(); // test create hash