! function(a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.Raphael = b() : a.Raphael = b()
}(this, function() {
    return function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
        }
        var c = {};
        return b.m = a, b.c = c, b.p = "", b(0)
    }([function(a, b, c) {
        var d, e;
        d = [c(1), c(3), c(4)], void 0 !== (e = function(a) {
            return a
        }.apply(b, d)) && (a.exports = e)
    }, function(a, b, c) {
        var d, e;
        d = [c(2)], void 0 !== (e = function(a) {
            function b(c) {
                if (b.is(c, "function")) return t ? c() : a.on("raphael.DOMload", c);
                if (b.is(c, U)) return b._engine.create[C](b, c.splice(0, 3 + b.is(c[0], S))).add(c);
                var d = Array.prototype.slice.call(arguments, 0);
                if (b.is(d[d.length - 1], "function")) {
                    var e = d.pop();
                    return t ? e.call(b._engine.create[C](b, d)) : a.on("raphael.DOMload", function() {
                        e.call(b._engine.create[C](b, d))
                    })
                }
                return b._engine.create[C](b, arguments)
            }

            function c(a) {
                if ("function" == typeof a || Object(a) !== a) return a;
                var b = new a.constructor;
                for (var d in a) a[y](d) && (b[d] = c(a[d]));
                return b
            }

            function d(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function e(a, b, c) {
                function e() {
                    var f = Array.prototype.slice.call(arguments, 0),
                        g = f.join("␀"),
                        h = e.cache = e.cache || {},
                        i = e.count = e.count || [];
                    return h[y](g) ? (d(i, g), c ? c(h[g]) : h[g]) : (i.length >= 1e3 && delete h[i.shift()], i.push(g), h[g] = a[C](b, f), c ? c(h[g]) : h[g])
                }
                return e
            }

            function f() {
                return this.hex
            }

            function g(a, b) {
                for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                    var f = [{
                        x: +a[d - 2],
                        y: +a[d - 1]
                    }, {
                        x: +a[d],
                        y: +a[d + 1]
                    }, {
                        x: +a[d + 2],
                        y: +a[d + 3]
                    }, {
                        x: +a[d + 4],
                        y: +a[d + 5]
                    }];
                    b ? d ? e - 4 == d ? f[3] = {
                        x: +a[0],
                        y: +a[1]
                    } : e - 2 == d && (f[2] = {
                        x: +a[0],
                        y: +a[1]
                    }, f[3] = {
                        x: +a[2],
                        y: +a[3]
                    }) : f[0] = {
                        x: +a[e - 2],
                        y: +a[e - 1]
                    } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                        x: +a[d],
                        y: +a[d + 1]
                    }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
                }
                return c
            }

            function h(a, b, c, d, e) {
                return a * (a * (-3 * b + 9 * c - 9 * d + 3 * e) + 6 * b - 12 * c + 6 * d) - 3 * b + 3 * c
            }

            function i(a, b, c, d, e, f, g, i, j) {
                null == j && (j = 1), j = j > 1 ? 1 : 0 > j ? 0 : j;
                for (var k = j / 2, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0, o = 0; 12 > o; o++) {
                    var p = k * l[o] + k,
                        q = h(p, a, c, e, g),
                        r = h(p, b, d, f, i),
                        s = q * q + r * r;
                    n += m[o] * M.sqrt(s)
                }
                return k * n
            }

            function j(a, b, c, d, e, f, g, h, j) {
                if (!(0 > j || i(a, b, c, d, e, f, g, h) < j)) {
                    var k, l = .5,
                        m = 1 - l;
                    for (k = i(a, b, c, d, e, f, g, h, m); P(k - j) > .01;) l /= 2, m += (j > k ? 1 : -1) * l, k = i(a, b, c, d, e, f, g, h, m);
                    return m
                }
            }

            function k(a, b, c, d, e, f, g, h) {
                if (!(N(a, c) < O(e, g) || O(a, c) > N(e, g) || N(b, d) < O(f, h) || O(b, d) > N(f, h))) {
                    var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                        j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                        k = (a - c) * (f - h) - (b - d) * (e - g);
                    if (k) {
                        var l = i / k,
                            m = j / k,
                            n = +l.toFixed(2),
                            o = +m.toFixed(2);
                        if (!(n < +O(a, c).toFixed(2) || n > +N(a, c).toFixed(2) || n < +O(e, g).toFixed(2) || n > +N(e, g).toFixed(2) || o < +O(b, d).toFixed(2) || o > +N(b, d).toFixed(2) || o < +O(f, h).toFixed(2) || o > +N(f, h).toFixed(2))) return {
                            x: l,
                            y: m
                        }
                    }
                }
            }

            function l(a, c, d) {
                var e = b.bezierBBox(a),
                    f = b.bezierBBox(c);
                if (!b.isBBoxIntersect(e, f)) return d ? 0 : [];
                for (var g = i.apply(0, a), h = i.apply(0, c), j = N(~~(g / 5), 1), l = N(~~(h / 5), 1), m = [], n = [], o = {}, p = d ? 0 : [], q = 0; j + 1 > q; q++) {
                    var r = b.findDotsAtSegment.apply(b, a.concat(q / j));
                    m.push({
                        x: r.x,
                        y: r.y,
                        t: q / j
                    })
                }
                for (q = 0; l + 1 > q; q++) r = b.findDotsAtSegment.apply(b, c.concat(q / l)), n.push({
                    x: r.x,
                    y: r.y,
                    t: q / l
                });
                for (q = 0; j > q; q++)
                    for (var s = 0; l > s; s++) {
                        var t = m[q],
                            u = m[q + 1],
                            v = n[s],
                            w = n[s + 1],
                            x = P(u.x - t.x) < .001 ? "y" : "x",
                            y = P(w.x - v.x) < .001 ? "y" : "x",
                            z = k(t.x, t.y, u.x, u.y, v.x, v.y, w.x, w.y);
                        if (z) {
                            if (o[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
                            o[z.x.toFixed(4)] = z.y.toFixed(4);
                            var A = t.t + P((z[x] - t[x]) / (u[x] - t[x])) * (u.t - t.t),
                                B = v.t + P((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                            A >= 0 && 1.001 >= A && B >= 0 && 1.001 >= B && (d ? p++ : p.push({
                                x: z.x,
                                y: z.y,
                                t1: O(A, 1),
                                t2: O(B, 1)
                            }))
                        }
                    }
                return p
            }

            function m(a, c, d) {
                a = b._path2curve(a), c = b._path2curve(c);
                for (var e, f, g, h, i, j, k, m, n, o, p = d ? 0 : [], q = 0, r = a.length; r > q; q++) {
                    var s = a[q];
                    if ("M" == s[0]) e = i = s[1], f = j = s[2];
                    else {
                        "C" == s[0] ? (n = [e, f].concat(s.slice(1)), e = n[6], f = n[7]) : (n = [e, f, e, f, i, j, i, j], e = i, f = j);
                        for (var t = 0, u = c.length; u > t; t++) {
                            var v = c[t];
                            if ("M" == v[0]) g = k = v[1], h = m = v[2];
                            else {
                                "C" == v[0] ? (o = [g, h].concat(v.slice(1)), g = o[6], h = o[7]) : (o = [g, h, g, h, k, m, k, m], g = k, h = m);
                                var w = l(n, o, d);
                                if (d) p += w;
                                else {
                                    for (var x = 0, y = w.length; y > x; x++) w[x].segment1 = q, w[x].segment2 = t, w[x].bez1 = n, w[x].bez2 = o;
                                    p = p.concat(w)
                                }
                            }
                        }
                    }
                }
                return p
            }

            function n(a, b, c, d, e, f) {
                null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
            }

            function o() {
                return this.x + G + this.y + G + this.width + " × " + this.height
            }

            function p(a, b, c, d, e, f) {
                function g(a) {
                    return ((k * a + j) * a + i) * a
                }

                function h(a, b) {
                    var c, d, e, f, h, l;
                    for (e = a, l = 0; 8 > l; l++) {
                        if (f = g(e) - a, P(f) < b) return e;
                        if (h = (3 * k * e + 2 * j) * e + i, P(h) < 1e-6) break;
                        e -= f / h
                    }
                    if (c = 0, d = 1, e = a, c > e) return c;
                    if (e > d) return d;
                    for (; d > c;) {
                        if (f = g(e), P(f - a) < b) return e;
                        a > f ? c = e : d = e, e = (d - c) / 2 + c
                    }
                    return e
                }
                var i = 3 * b,
                    j = 3 * (d - b) - i,
                    k = 1 - i - j,
                    l = 3 * c,
                    m = 3 * (e - c) - l,
                    n = 1 - l - m;
                return function(a, b) {
                    var c = h(a, b);
                    return ((n * c + m) * c + l) * c
                }(a, 1 / (200 * f))
            }

            function q(a, b) {
                var c = [],
                    d = {};
                if (this.ms = b, this.times = 1, a) {
                    for (var e in a) a[y](e) && (d[$(e)] = a[e], c.push($(e)));
                    c.sort(ka)
                }
                this.anim = d, this.top = c[c.length - 1], this.percents = c
            }

            function r(c, d, e, f, g, h) {
                e = $(e);
                var i, j, k, l, m, o, q = c.ms,
                    r = {},
                    s = {},
                    t = {};
                if (f)
                    for (w = 0, x = fb.length; x > w; w++) {
                        var u = fb[w];
                        if (u.el.id == d.id && u.anim == c) {
                            u.percent != e ? (fb.splice(w, 1), k = 1) : j = u, d.attr(u.totalOrigin);
                            break
                        }
                    } else f = +s;
                for (var w = 0, x = c.percents.length; x > w; w++) {
                    if (c.percents[w] == e || c.percents[w] > f * c.top) {
                        e = c.percents[w], m = c.percents[w - 1] || 0, q = q / c.top * (e - m), l = c.percents[w + 1], i = c.anim[e];
                        break
                    }
                    f && d.attr(c.anim[c.percents[w]])
                }
                if (i) {
                    if (j) j.initstatus = f, j.start = new Date - j.ms * f;
                    else {
                        for (var z in i)
                            if (i[y](z) && (ca[y](z) || d.paper.customAttributes[y](z))) switch (r[z] = d.attr(z), null == r[z] && (r[z] = ba[z]), s[z] = i[z], ca[z]) {
                                case S:
                                    t[z] = (s[z] - r[z]) / q;
                                    break;
                                case "colour":
                                    r[z] = b.getRGB(r[z]);
                                    var A = b.getRGB(s[z]);
                                    t[z] = {
                                        r: (A.r - r[z].r) / q,
                                        g: (A.g - r[z].g) / q,
                                        b: (A.b - r[z].b) / q
                                    };
                                    break;
                                case "path":
                                    var B = Ia(r[z], s[z]),
                                        C = B[1];
                                    for (r[z] = B[0], t[z] = [], w = 0, x = r[z].length; x > w; w++) {
                                        t[z][w] = [0];
                                        for (var E = 1, F = r[z][w].length; F > E; E++) t[z][w][E] = (C[w][E] - r[z][w][E]) / q
                                    }
                                    break;
                                case "transform":
                                    var G = d._,
                                        J = Na(G[z], s[z]);
                                    if (J)
                                        for (r[z] = J.from, s[z] = J.to, t[z] = [], t[z].real = !0, w = 0, x = r[z].length; x > w; w++)
                                            for (t[z][w] = [r[z][w][0]], E = 1, F = r[z][w].length; F > E; E++) t[z][w][E] = (s[z][w][E] - r[z][w][E]) / q;
                                    else {
                                        var K = d.matrix || new n,
                                            L = {
                                                _: {
                                                    transform: G.transform
                                                },
                                                getBBox: function() {
                                                    return d.getBBox(1)
                                                }
                                            };
                                        r[z] = [K.a, K.b, K.c, K.d, K.e, K.f], La(L, s[z]), s[z] = L._.transform, t[z] = [(L.matrix.a - K.a) / q, (L.matrix.b - K.b) / q, (L.matrix.c - K.c) / q, (L.matrix.d - K.d) / q, (L.matrix.e - K.e) / q, (L.matrix.f - K.f) / q]
                                    }
                                    break;
                                case "csv":
                                    var M = H(i[z])[I](v),
                                        N = H(r[z])[I](v);
                                    if ("clip-rect" == z)
                                        for (r[z] = N, t[z] = [], w = N.length; w--;) t[z][w] = (M[w] - r[z][w]) / q;
                                    s[z] = M;
                                    break;
                                default:
                                    for (M = [][D](i[z]), N = [][D](r[z]), t[z] = [], w = d.paper.customAttributes[z].length; w--;) t[z][w] = ((M[w] || 0) - (N[w] || 0)) / q
                            }
                            var O = i.easing,
                                P = b.easing_formulas[O];
                        if (!P)
                            if ((P = H(O).match(Y)) && 5 == P.length) {
                                var Q = P;
                                P = function(a) {
                                    return p(a, +Q[1], +Q[2], +Q[3], +Q[4], q)
                                }
                            } else P = la;
                        if (o = i.start || c.start || +new Date, u = {
                                anim: c,
                                percent: e,
                                timestamp: o,
                                start: o + (c.del || 0),
                                status: 0,
                                initstatus: f || 0,
                                stop: !1,
                                ms: q,
                                easing: P,
                                from: r,
                                diff: t,
                                to: s,
                                el: d,
                                callback: i.callback,
                                prev: m,
                                next: l,
                                repeat: h || c.times,
                                origin: d.attr(),
                                totalOrigin: g
                            }, fb.push(u), f && !j && !k && (u.stop = !0, u.start = new Date - q * f, 1 == fb.length)) return hb();
                        k && (u.start = new Date - u.ms * f), 1 == fb.length && gb(hb)
                    }
                    a("raphael.anim.start." + d.id, d, c)
                }
            }

            function s(a) {
                for (var b = 0; b < fb.length; b++) fb[b].el.paper == a && fb.splice(b--, 1)
            }
            b.version = "2.2.0", b.eve = a;
            var t, u, v = /[, ]+/,
                w = {
                    circle: 1,
                    rect: 1,
                    path: 1,
                    ellipse: 1,
                    text: 1,
                    image: 1
                },
                x = /\{(\d+)\}/g,
                y = "hasOwnProperty",
                z = {
                    doc: document,
                    win: window
                },
                A = {
                    was: Object.prototype[y].call(z.win, "Raphael"),
                    is: z.win.Raphael
                },
                B = function() {
                    this.ca = this.customAttributes = {}
                },
                C = "apply",
                D = "concat",
                E = "ontouchstart" in z.win || z.win.DocumentTouch && z.doc instanceof DocumentTouch,
                F = "",
                G = " ",
                H = String,
                I = "split",
                J = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [I](G),
                K = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                },
                L = H.prototype.toLowerCase,
                M = Math,
                N = M.max,
                O = M.min,
                P = M.abs,
                Q = M.pow,
                R = M.PI,
                S = "number",
                T = "string",
                U = "array",
                V = Object.prototype.toString,
                W = (b._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                X = {
                    NaN: 1,
                    Infinity: 1,
                    "-Infinity": 1
                },
                Y = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                Z = M.round,
                $ = parseFloat,
                _ = parseInt,
                aa = H.prototype.toUpperCase,
                ba = b._availableAttrs = {
                    "arrow-end": "none",
                    "arrow-start": "none",
                    blur: 0,
                    "clip-rect": "0 0 1e9 1e9",
                    cursor: "default",
                    cx: 0,
                    cy: 0,
                    fill: "#fff",
                    "fill-opacity": 1,
                    font: '10px "Arial"',
                    "font-family": '"Arial"',
                    "font-size": "10",
                    "font-style": "normal",
                    "font-weight": 400,
                    gradient: 0,
                    height: 0,
                    href: "http://raphaeljs.com/",
                    "letter-spacing": 0,
                    opacity: 1,
                    path: "M0,0",
                    r: 0,
                    rx: 0,
                    ry: 0,
                    src: "",
                    stroke: "#000",
                    "stroke-dasharray": "",
                    "stroke-linecap": "butt",
                    "stroke-linejoin": "butt",
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 1,
                    "stroke-width": 1,
                    target: "_blank",
                    "text-anchor": "middle",
                    title: "Raphael",
                    transform: "",
                    width: 0,
                    x: 0,
                    y: 0,
                    class: ""
                },
                ca = b._availableAnimAttrs = {
                    blur: S,
                    "clip-rect": "csv",
                    cx: S,
                    cy: S,
                    fill: "colour",
                    "fill-opacity": S,
                    "font-size": S,
                    height: S,
                    opacity: S,
                    path: "path",
                    r: S,
                    rx: S,
                    ry: S,
                    stroke: "colour",
                    "stroke-opacity": S,
                    "stroke-width": S,
                    transform: "transform",
                    width: S,
                    x: S,
                    y: S
                },
                da = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                ea = {
                    hs: 1,
                    rg: 1
                },
                fa = /,?([achlmqrstvxz]),?/gi,
                ga = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                ha = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                ia = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                ja = (b._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                ka = function(a, b) {
                    return $(a) - $(b)
                },
                la = function(a) {
                    return a
                },
                ma = b._rectPath = function(a, b, c, d, e) {
                    return e ? [
                        ["M", a + e, b],
                        ["l", c - 2 * e, 0],
                        ["a", e, e, 0, 0, 1, e, e],
                        ["l", 0, d - 2 * e],
                        ["a", e, e, 0, 0, 1, -e, e],
                        ["l", 2 * e - c, 0],
                        ["a", e, e, 0, 0, 1, -e, -e],
                        ["l", 0, 2 * e - d],
                        ["a", e, e, 0, 0, 1, e, -e],
                        ["z"]
                    ] : [
                        ["M", a, b],
                        ["l", c, 0],
                        ["l", 0, d],
                        ["l", -c, 0],
                        ["z"]
                    ]
                },
                na = function(a, b, c, d) {
                    return null == d && (d = c), [
                        ["M", a, b],
                        ["m", 0, -d],
                        ["a", c, d, 0, 1, 1, 0, 2 * d],
                        ["a", c, d, 0, 1, 1, 0, -2 * d],
                        ["z"]
                    ]
                },
                oa = b._getPath = {
                    path: function(a) {
                        return a.attr("path")
                    },
                    circle: function(a) {
                        var b = a.attrs;
                        return na(b.cx, b.cy, b.r)
                    },
                    ellipse: function(a) {
                        var b = a.attrs;
                        return na(b.cx, b.cy, b.rx, b.ry)
                    },
                    rect: function(a) {
                        var b = a.attrs;
                        return ma(b.x, b.y, b.width, b.height, b.r)
                    },
                    image: function(a) {
                        var b = a.attrs;
                        return ma(b.x, b.y, b.width, b.height)
                    },
                    text: function(a) {
                        var b = a._getBBox();
                        return ma(b.x, b.y, b.width, b.height)
                    },
                    set: function(a) {
                        var b = a._getBBox();
                        return ma(b.x, b.y, b.width, b.height)
                    }
                },
                pa = b.mapPath = function(a, b) {
                    if (!b) return a;
                    var c, d, e, f, g, h, i;
                    for (a = Ia(a), e = 0, g = a.length; g > e; e++)
                        for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
                    return a
                };
            if (b._g = z, b.type = z.win.SVGAngle || z.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == b.type) {
                var qa, ra = z.doc.createElement("div");
                if (ra.innerHTML = '<v:shape adj="1"/>', qa = ra.firstChild, qa.style.behavior = "url(#default#VML)", !qa || "object" != typeof qa.adj) return b.type = F;
                ra = null
            }
            b.svg = !(b.vml = "VML" == b.type), b._Paper = B, b.fn = u = B.prototype = b.prototype, b._id = 0, b._oid = 0, b.is = function(a, b) {
                return b = L.call(b), "finite" == b ? !X[y](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || V.call(a).slice(8, -1).toLowerCase() == b
            }, b.angle = function(a, c, d, e, f, g) {
                if (null == f) {
                    var h = a - d,
                        i = c - e;
                    return h || i ? (180 + 180 * M.atan2(-i, -h) / R + 360) % 360 : 0
                }
                return b.angle(a, c, f, g) - b.angle(d, e, f, g)
            }, b.rad = function(a) {
                return a % 360 * R / 180
            }, b.deg = function(a) {
                return Math.round(180 * a / R % 360 * 1e3) / 1e3
            }, b.snapTo = function(a, c, d) {
                if (d = b.is(d, "finite") ? d : 10, b.is(a, U)) {
                    for (var e = a.length; e--;)
                        if (P(a[e] - c) <= d) return a[e]
                } else {
                    a = +a;
                    var f = c % a;
                    if (d > f) return c - f;
                    if (f > a - d) return c - f + a
                }
                return c
            };
            b.createUUID = function(a, b) {
                return function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
                }
            }(/[xy]/g, function(a) {
                var b = 16 * M.random() | 0;
                return ("x" == a ? b : 3 & b | 8).toString(16)
            });
            b.setWindow = function(c) {
                a("raphael.setWindow", b, z.win, c), z.win = c, z.doc = z.win.document, b._engine.initWin && b._engine.initWin(z.win)
            };
            var sa = function(a) {
                    if (b.vml) {
                        var c, d = /^\s+|\s+$/g;
                        try {
                            var f = new ActiveXObject("htmlfile");
                            f.write("<body>"), f.close(), c = f.body
                        } catch (a) {
                            c = createPopup().document.body
                        }
                        var g = c.createTextRange();
                        sa = e(function(a) {
                            try {
                                c.style.color = H(a).replace(d, F);
                                var b = g.queryCommandValue("ForeColor");
                                return b = (255 & b) << 16 | 65280 & b | (16711680 & b) >>> 16, "#" + ("000000" + b.toString(16)).slice(-6)
                            } catch (a) {
                                return "none"
                            }
                        })
                    } else {
                        var h = z.doc.createElement("i");
                        h.title = "Raphaël Colour Picker", h.style.display = "none", z.doc.body.appendChild(h), sa = e(function(a) {
                            return h.style.color = a, z.doc.defaultView.getComputedStyle(h, F).getPropertyValue("color")
                        })
                    }
                    return sa(a)
                },
                ta = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                ua = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                va = function() {
                    return this.hex
                },
                wa = function(a, c, d) {
                    if (null == c && b.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, c = a.g, a = a.r), null == c && b.is(a, T)) {
                        var e = b.getRGB(a);
                        a = e.r, c = e.g, d = e.b
                    }
                    return (a > 1 || c > 1 || d > 1) && (a /= 255, c /= 255, d /= 255), [a, c, d]
                },
                xa = function(a, c, d, e) {
                    a *= 255, c *= 255, d *= 255;
                    var f = {
                        r: a,
                        g: c,
                        b: d,
                        hex: b.rgb(a, c, d),
                        toString: va
                    };
                    return b.is(e, "finite") && (f.opacity = e), f
                };
            b.color = function(a) {
                var c;
                return b.is(a, "object") && "h" in a && "s" in a && "b" in a ? (c = b.hsb2rgb(a), a.r = c.r, a.g = c.g, a.b = c.b, a.hex = c.hex) : b.is(a, "object") && "h" in a && "s" in a && "l" in a ? (c = b.hsl2rgb(a), a.r = c.r, a.g = c.g, a.b = c.b, a.hex = c.hex) : (b.is(a, "string") && (a = b.getRGB(a)), b.is(a, "object") && "r" in a && "g" in a && "b" in a ? (c = b.rgb2hsl(a), a.h = c.h, a.s = c.s, a.l = c.l, c = b.rgb2hsb(a), a.v = c.b) : (a = {
                    hex: "none"
                }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = va, a
            }, b.hsb2rgb = function(a, b, c, d) {
                this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
                var e, f, g, h, i;
                return a = a % 360 / 60, i = c * b, h = i * (1 - P(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], xa(e, f, g, d)
            }, b.hsl2rgb = function(a, b, c, d) {
                this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var e, f, g, h, i;
                return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - P(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], xa(e, f, g, d)
            }, b.rgb2hsb = function(a, b, c) {
                c = wa(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = N(a, b, c), g = f - O(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: ta
                }
            }, b.rgb2hsl = function(a, b, c) {
                c = wa(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = N(a, b, c), h = O(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: ua
                }
            }, b._path2string = function() {
                return this.join(",").replace(fa, "$1")
            };
            b._preload = function(a, b) {
                var c = z.doc.createElement("img");
                c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
                    b.call(this), this.onload = null, z.doc.body.removeChild(this)
                }, c.onerror = function() {
                    z.doc.body.removeChild(this)
                }, z.doc.body.appendChild(c), c.src = a
            };
            b.getRGB = e(function(a) {
                if (!a || (a = H(a)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: f
                };
                if ("none" == a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: f
                };
                !(ea[y](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = sa(a));
                var c, d, e, g, h, i, j = a.match(W);
                return j ? (j[2] && (e = _(j[2].substring(5), 16), d = _(j[2].substring(3, 5), 16), c = _(j[2].substring(1, 3), 16)), j[3] && (e = _((h = j[3].charAt(3)) + h, 16), d = _((h = j[3].charAt(2)) + h, 16), c = _((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4][I](da), c = $(i[0]), "%" == i[0].slice(-1) && (c *= 2.55), d = $(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = $(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = $(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5][I](da), c = $(i[0]), "%" == i[0].slice(-1) && (c *= 2.55), d = $(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = $(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (c /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = $(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), b.hsb2rgb(c, d, e, g)) : j[6] ? (i = j[6][I](da), c = $(i[0]), "%" == i[0].slice(-1) && (c *= 2.55), d = $(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), e = $(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (c /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = $(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), b.hsl2rgb(c, d, e, g)) : (j = {
                    r: c,
                    g: d,
                    b: e,
                    toString: f
                }, j.hex = "#" + (16777216 | e | d << 8 | c << 16).toString(16).slice(1), b.is(g, "finite") && (j.opacity = g), j)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: f
                }
            }, b), b.hsb = e(function(a, c, d) {
                return b.hsb2rgb(a, c, d).hex
            }), b.hsl = e(function(a, c, d) {
                return b.hsl2rgb(a, c, d).hex
            }), b.rgb = e(function(a, b, c) {
                function d(a) {
                    return a + .5 | 0
                }
                return "#" + (16777216 | d(c) | d(b) << 8 | d(a) << 16).toString(16).slice(1)
            }), b.getColor = function(a) {
                var b = this.getColor.start = this.getColor.start || {
                        h: 0,
                        s: 1,
                        b: a || .75
                    },
                    c = this.hsb2rgb(b.h, b.s, b.b);
                return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
                    h: 0,
                    s: 1,
                    b: b.b
                })), c.hex
            }, b.getColor.reset = function() {
                delete this.start
            }, b.parsePathString = function(a) {
                if (!a) return null;
                var c = ya(a);
                if (c.arr) return Aa(c.arr);
                var d = {
                        a: 7,
                        c: 6,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        z: 0
                    },
                    e = [];
                return b.is(a, U) && b.is(a[0], U) && (e = Aa(a)), e.length || H(a).replace(ga, function(a, b, c) {
                    var f = [],
                        g = b.toLowerCase();
                    if (c.replace(ia, function(a, b) {
                            b && f.push(+b)
                        }), "m" == g && f.length > 2 && (e.push([b][D](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][D](f));
                    else
                        for (; f.length >= d[g] && (e.push([b][D](f.splice(0, d[g]))), d[g]););
                }), e.toString = b._path2string, c.arr = Aa(e), e
            }, b.parseTransformString = e(function(a) {
                if (!a) return null;
                var c = [];
                return b.is(a, U) && b.is(a[0], U) && (c = Aa(a)), c.length || H(a).replace(ha, function(a, b, d) {
                    var e = [];
                    L.call(b);
                    d.replace(ia, function(a, b) {
                        b && e.push(+b)
                    }), c.push([b][D](e))
                }), c.toString = b._path2string, c
            });
            var ya = function(a) {
                var b = ya.ps = ya.ps || {};
                return b[a] ? b[a].sleep = 100 : b[a] = {
                    sleep: 100
                }, setTimeout(function() {
                    for (var c in b) b[y](c) && c != a && !--b[c].sleep && delete b[c]
                }), b[a]
            };
            b.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
                var j = 1 - i,
                    k = Q(j, 3),
                    l = Q(j, 2),
                    m = i * i,
                    n = m * i,
                    o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                    p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                    q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                    r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                    s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                    t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                    u = j * a + i * c,
                    v = j * b + i * d,
                    w = j * e + i * g,
                    x = j * f + i * h,
                    y = 90 - 180 * M.atan2(q - s, r - t) / R;
                return (q > s || t > r) && (y += 180), {
                    x: o,
                    y: p,
                    m: {
                        x: q,
                        y: r
                    },
                    n: {
                        x: s,
                        y: t
                    },
                    start: {
                        x: u,
                        y: v
                    },
                    end: {
                        x: w,
                        y: x
                    },
                    alpha: y
                }
            }, b.bezierBBox = function(a, c, d, e, f, g, h, i) {
                b.is(a, "array") || (a = [a, c, d, e, f, g, h, i]);
                var j = Ha.apply(null, a);
                return {
                    x: j.min.x,
                    y: j.min.y,
                    x2: j.max.x,
                    y2: j.max.y,
                    width: j.max.x - j.min.x,
                    height: j.max.y - j.min.y
                }
            }, b.isPointInsideBBox = function(a, b, c) {
                return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
            }, b.isBBoxIntersect = function(a, c) {
                var d = b.isPointInsideBBox;
                return d(c, a.x, a.y) || d(c, a.x2, a.y) || d(c, a.x, a.y2) || d(c, a.x2, a.y2) || d(a, c.x, c.y) || d(a, c.x2, c.y) || d(a, c.x, c.y2) || d(a, c.x2, c.y2) || (a.x < c.x2 && a.x > c.x || c.x < a.x2 && c.x > a.x) && (a.y < c.y2 && a.y > c.y || c.y < a.y2 && c.y > a.y)
            }, b.pathIntersection = function(a, b) {
                return m(a, b)
            }, b.pathIntersectionNumber = function(a, b) {
                return m(a, b, 1)
            }, b.isPointInsidePath = function(a, c, d) {
                var e = b.pathBBox(a);
                return b.isPointInsideBBox(e, c, d) && m(a, [
                    ["M", c, d],
                    ["H", e.x2 + 10]
                ], 1) % 2 == 1
            }, b._removedFactory = function(b) {
                return function() {
                    a("raphael.log", null, "Raphaël: you are calling to method “" + b + "” of removed object", b)
                }
            };
            var za = b.pathBBox = function(a) {
                    var b = ya(a);
                    if (b.bbox) return c(b.bbox);
                    if (!a) return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        x2: 0,
                        y2: 0
                    };
                    a = Ia(a);
                    for (var d, e = 0, f = 0, g = [], h = [], i = 0, j = a.length; j > i; i++)
                        if (d = a[i], "M" == d[0]) e = d[1], f = d[2], g.push(e), h.push(f);
                        else {
                            var k = Ha(e, f, d[1], d[2], d[3], d[4], d[5], d[6]);
                            g = g[D](k.min.x, k.max.x), h = h[D](k.min.y, k.max.y), e = d[5], f = d[6]
                        }
                    var l = O[C](0, g),
                        m = O[C](0, h),
                        n = N[C](0, g),
                        o = N[C](0, h),
                        p = n - l,
                        q = o - m,
                        r = {
                            x: l,
                            y: m,
                            x2: n,
                            y2: o,
                            width: p,
                            height: q,
                            cx: l + p / 2,
                            cy: m + q / 2
                        };
                    return b.bbox = c(r), r
                },
                Aa = function(a) {
                    var d = c(a);
                    return d.toString = b._path2string, d
                },
                Ba = b._pathToRelative = function(a) {
                    var c = ya(a);
                    if (c.rel) return Aa(c.rel);
                    b.is(a, U) && b.is(a && a[0], U) || (a = b.parsePathString(a));
                    var d = [],
                        e = 0,
                        f = 0,
                        g = 0,
                        h = 0,
                        i = 0;
                    "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
                    for (var j = i, k = a.length; k > j; j++) {
                        var l = d[j] = [],
                            m = a[j];
                        if (m[0] != L.call(m[0])) switch (l[0] = L.call(m[0]), l[0]) {
                            case "a":
                                l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                                break;
                            case "v":
                                l[1] = +(m[1] - f).toFixed(3);
                                break;
                            case "m":
                                g = m[1], h = m[2];
                            default:
                                for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
                        } else {
                            l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                            for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
                        }
                        var r = d[j].length;
                        switch (d[j][0]) {
                            case "z":
                                e = g, f = h;
                                break;
                            case "h":
                                e += +d[j][r - 1];
                                break;
                            case "v":
                                f += +d[j][r - 1];
                                break;
                            default:
                                e += +d[j][r - 2], f += +d[j][r - 1]
                        }
                    }
                    return d.toString = b._path2string, c.rel = Aa(d), d
                },
                Ca = b._pathToAbsolute = function(a) {
                    var c = ya(a);
                    if (c.abs) return Aa(c.abs);
                    if (b.is(a, U) && b.is(a && a[0], U) || (a = b.parsePathString(a)), !a || !a.length) return [
                        ["M", 0, 0]
                    ];
                    var d = [],
                        e = 0,
                        f = 0,
                        h = 0,
                        i = 0,
                        j = 0;
                    "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], h = e, i = f, j++, d[0] = ["M", e, f]);
                    for (var k, l, m = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), n = j, o = a.length; o > n; n++) {
                        if (d.push(k = []), l = a[n], l[0] != aa.call(l[0])) switch (k[0] = aa.call(l[0]), k[0]) {
                                case "A":
                                    k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                                    break;
                                case "V":
                                    k[1] = +l[1] + f;
                                    break;
                                case "H":
                                    k[1] = +l[1] + e;
                                    break;
                                case "R":
                                    for (var p = [e, f][D](l.slice(1)), q = 2, r = p.length; r > q; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
                                    d.pop(), d = d[D](g(p, m));
                                    break;
                                case "M":
                                    h = +l[1] + e, i = +l[2] + f;
                                default:
                                    for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
                            } else if ("R" == l[0]) p = [e, f][D](l.slice(1)), d.pop(), d = d[D](g(p, m)), k = ["R"][D](l.slice(-2));
                            else
                                for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
                        switch (k[0]) {
                            case "Z":
                                e = h, f = i;
                                break;
                            case "H":
                                e = k[1];
                                break;
                            case "V":
                                f = k[1];
                                break;
                            case "M":
                                h = k[k.length - 2], i = k[k.length - 1];
                            default:
                                e = k[k.length - 2], f = k[k.length - 1]
                        }
                    }
                    return d.toString = b._path2string, c.abs = Aa(d), d
                },
                Da = function(a, b, c, d) {
                    return [a, b, c, d, c, d]
                },
                Ea = function(a, b, c, d, e, f) {
                    var g = 1 / 3,
                        h = 2 / 3;
                    return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
                },
                Fa = function(a, b, c, d, f, g, h, i, j, k) {
                    var l, m = 120 * R / 180,
                        n = R / 180 * (+f || 0),
                        o = [],
                        p = e(function(a, b, c) {
                            return {
                                x: a * M.cos(c) - b * M.sin(c),
                                y: a * M.sin(c) + b * M.cos(c)
                            }
                        });
                    if (k) y = k[0], z = k[1], w = k[2], x = k[3];
                    else {
                        l = p(a, b, -n), a = l.x, b = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                        var q = (M.cos(R / 180 * f), M.sin(R / 180 * f), (a - i) / 2),
                            r = (b - j) / 2,
                            s = q * q / (c * c) + r * r / (d * d);
                        s > 1 && (s = M.sqrt(s), c *= s, d *= s);
                        var t = c * c,
                            u = d * d,
                            v = (g == h ? -1 : 1) * M.sqrt(P((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                            w = v * c * r / d + (a + i) / 2,
                            x = v * -d * q / c + (b + j) / 2,
                            y = M.asin(((b - x) / d).toFixed(9)),
                            z = M.asin(((j - x) / d).toFixed(9));
                        y = w > a ? R - y : y, z = w > i ? R - z : z, 0 > y && (y = 2 * R + y), 0 > z && (z = 2 * R + z), h && y > z && (y -= 2 * R), !h && z > y && (z -= 2 * R)
                    }
                    var A = z - y;
                    if (P(A) > m) {
                        var B = z,
                            C = i,
                            E = j;
                        z = y + m * (h && z > y ? 1 : -1), i = w + c * M.cos(z), j = x + d * M.sin(z), o = Fa(i, j, c, d, f, 0, h, C, E, [z, B, w, x])
                    }
                    A = z - y;
                    var F = M.cos(y),
                        G = M.sin(y),
                        H = M.cos(z),
                        J = M.sin(z),
                        K = M.tan(A / 4),
                        L = 4 / 3 * c * K,
                        N = 4 / 3 * d * K,
                        O = [a, b],
                        Q = [a + L * G, b - N * F],
                        S = [i + L * J, j - N * H],
                        T = [i, j];
                    if (Q[0] = 2 * O[0] - Q[0], Q[1] = 2 * O[1] - Q[1], k) return [Q, S, T][D](o);
                    o = [Q, S, T][D](o).join()[I](",");
                    for (var U = [], V = 0, W = o.length; W > V; V++) U[V] = V % 2 ? p(o[V - 1], o[V], n).y : p(o[V], o[V + 1], n).x;
                    return U
                },
                Ga = function(a, b, c, d, e, f, g, h, i) {
                    var j = 1 - i;
                    return {
                        x: Q(j, 3) * a + 3 * Q(j, 2) * i * c + 3 * j * i * i * e + Q(i, 3) * g,
                        y: Q(j, 3) * b + 3 * Q(j, 2) * i * d + 3 * j * i * i * f + Q(i, 3) * h
                    }
                },
                Ha = e(function(a, b, c, d, e, f, g, h) {
                    var i, j = e - 2 * c + a - (g - 2 * e + c),
                        k = 2 * (c - a) - 2 * (e - c),
                        l = a - c,
                        m = (-k + M.sqrt(k * k - 4 * j * l)) / 2 / j,
                        n = (-k - M.sqrt(k * k - 4 * j * l)) / 2 / j,
                        o = [b, h],
                        p = [a, g];
                    return P(m) > "1e12" && (m = .5), P(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ga(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ga(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + M.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - M.sqrt(k * k - 4 * j * l)) / 2 / j, P(m) > "1e12" && (m = .5), P(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = Ga(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = Ga(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
                        min: {
                            x: O[C](0, p),
                            y: O[C](0, o)
                        },
                        max: {
                            x: N[C](0, p),
                            y: N[C](0, o)
                        }
                    }
                }),
                Ia = b._path2curve = e(function(a, b) {
                    var c = !b && ya(a);
                    if (!b && c.curve) return Aa(c.curve);
                    for (var d = Ca(a), e = b && Ca(b), f = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, g = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, h = (function(a, b, c) {
                            var d, e, f = {
                                T: 1,
                                Q: 1
                            };
                            if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                            switch (!(a[0] in f) && (b.qx = b.qy = null), a[0]) {
                                case "M":
                                    b.X = a[1], b.Y = a[2];
                                    break;
                                case "A":
                                    a = ["C"][D](Fa[C](0, [b.x, b.y][D](a.slice(1))));
                                    break;
                                case "S":
                                    "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][D](a.slice(1));
                                    break;
                                case "T":
                                    "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][D](Ea(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                                    break;
                                case "Q":
                                    b.qx = a[1], b.qy = a[2], a = ["C"][D](Ea(b.x, b.y, a[1], a[2], a[3], a[4]));
                                    break;
                                case "L":
                                    a = ["C"][D](Da(b.x, b.y, a[1], a[2]));
                                    break;
                                case "H":
                                    a = ["C"][D](Da(b.x, b.y, a[1], b.y));
                                    break;
                                case "V":
                                    a = ["C"][D](Da(b.x, b.y, b.x, a[1]));
                                    break;
                                case "Z":
                                    a = ["C"][D](Da(b.x, b.y, b.X, b.Y))
                            }
                            return a
                        }), i = function(a, b) {
                            if (a[b].length > 7) {
                                a[b].shift();
                                for (var c = a[b]; c.length;) k[b] = "A", e && (l[b] = "A"), a.splice(b++, 0, ["C"][D](c.splice(0, 6)));
                                a.splice(b, 1), p = N(d.length, e && e.length || 0)
                            }
                        }, j = function(a, b, c, f, g) {
                            a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], p = N(d.length, e && e.length || 0))
                        }, k = [], l = [], m = "", n = "", o = 0, p = N(d.length, e && e.length || 0); p > o; o++) {
                        d[o] && (m = d[o][0]), "C" != m && (k[o] = m, o && (n = k[o - 1])), d[o] = h(d[o], f, n), "A" != k[o] && "C" == m && (k[o] = "C"), i(d, o), e && (e[o] && (m = e[o][0]), "C" != m && (l[o] = m, o && (n = l[o - 1])), e[o] = h(e[o], g, n), "A" != l[o] && "C" == m && (l[o] = "C"), i(e, o)), j(d, e, f, g, o), j(e, d, g, f, o);
                        var q = d[o],
                            r = e && e[o],
                            s = q.length,
                            t = e && r.length;
                        f.x = q[s - 2], f.y = q[s - 1], f.bx = $(q[s - 4]) || f.x, f.by = $(q[s - 3]) || f.y, g.bx = e && ($(r[t - 4]) || g.x), g.by = e && ($(r[t - 3]) || g.y), g.x = e && r[t - 2], g.y = e && r[t - 1]
                    }
                    return e || (c.curve = Aa(d)), e ? [d, e] : d
                }, null, Aa),
                Ja = (b._parseDots = e(function(a) {
                    for (var c = [], d = 0, e = a.length; e > d; d++) {
                        var f = {},
                            g = a[d].match(/^([^:]*):?([\d\.]*)/);
                        if (f.color = b.getRGB(g[1]), f.color.error) return null;
                        f.opacity = f.color.opacity, f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), c.push(f)
                    }
                    for (d = 1, e = c.length - 1; e > d; d++)
                        if (!c[d].offset) {
                            for (var h = $(c[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
                                if (c[j].offset) {
                                    i = c[j].offset;
                                    break
                                }
                            i || (i = 100, j = e), i = $(i);
                            for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, c[d].offset = h + "%"
                        }
                    return c
                }), b._tear = function(a, b) {
                    a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
                }),
                Ka = (b._tofront = function(a, b) {
                    b.top !== a && (Ja(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
                }, b._toback = function(a, b) {
                    b.bottom !== a && (Ja(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
                }, b._insertafter = function(a, b, c) {
                    Ja(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
                }, b._insertbefore = function(a, b, c) {
                    Ja(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
                }, b.toMatrix = function(a, b) {
                    var c = za(a),
                        d = {
                            _: {
                                transform: F
                            },
                            getBBox: function() {
                                return c
                            }
                        };
                    return La(d, b), d.matrix
                }),
                La = (b.transformPath = function(a, b) {
                    return pa(a, Ka(a, b))
                }, b._extractTransform = function(a, c) {
                    if (null == c) return a._.transform;
                    c = H(c).replace(/\.{3}|\u2026/g, a._.transform || F);
                    var d = b.parseTransformString(c),
                        e = 0,
                        f = 0,
                        g = 0,
                        h = 1,
                        i = 1,
                        j = a._,
                        k = new n;
                    if (j.transform = d || [], d)
                        for (var l = 0, m = d.length; m > l; l++) {
                            var o, p, q, r, s, t = d[l],
                                u = t.length,
                                v = H(t[0]).toLowerCase(),
                                w = t[0] != v,
                                x = w ? k.invert() : 0;
                            "t" == v && 3 == u ? w ? (o = x.x(0, 0), p = x.y(0, 0), q = x.x(t[1], t[2]), r = x.y(t[1], t[2]), k.translate(q - o, r - p)) : k.translate(t[1], t[2]) : "r" == v ? 2 == u ? (s = s || a.getBBox(1), k.rotate(t[1], s.x + s.width / 2, s.y + s.height / 2), e += t[1]) : 4 == u && (w ? (q = x.x(t[2], t[3]), r = x.y(t[2], t[3]), k.rotate(t[1], q, r)) : k.rotate(t[1], t[2], t[3]), e += t[1]) : "s" == v ? 2 == u || 3 == u ? (s = s || a.getBBox(1), k.scale(t[1], t[u - 1], s.x + s.width / 2, s.y + s.height / 2), h *= t[1], i *= t[u - 1]) : 5 == u && (w ? (q = x.x(t[3], t[4]), r = x.y(t[3], t[4]), k.scale(t[1], t[2], q, r)) : k.scale(t[1], t[2], t[3], t[4]), h *= t[1], i *= t[2]) : "m" == v && 7 == u && k.add(t[1], t[2], t[3], t[4], t[5], t[6]), j.dirtyT = 1, a.matrix = k
                        }
                    a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
                }),
                Ma = function(a) {
                    var b = a[0];
                    switch (b.toLowerCase()) {
                        case "t":
                            return [b, 0, 0];
                        case "m":
                            return [b, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                        case "s":
                            return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
                    }
                },
                Na = b._equaliseTransform = function(a, c) {
                    c = H(c).replace(/\.{3}|\u2026/g, a), a = b.parseTransformString(a) || [], c = b.parseTransformString(c) || [];
                    for (var d, e, f, g, h = N(a.length, c.length), i = [], j = [], k = 0; h > k; k++) {
                        if (f = a[k] || Ma(c[k]), g = c[k] || Ma(f), f[0] != g[0] || "r" == f[0].toLowerCase() && (f[2] != g[2] || f[3] != g[3]) || "s" == f[0].toLowerCase() && (f[3] != g[3] || f[4] != g[4])) return;
                        for (i[k] = [], j[k] = [], d = 0, e = N(f.length, g.length); e > d; d++) d in f && (i[k][d] = f[d]), d in g && (j[k][d] = g[d])
                    }
                    return {
                        from: i,
                        to: j
                    }
                };
            b._getContainer = function(a, c, d, e) {
                    var f;
                    return f = null != e || b.is(a, "object") ? a : z.doc.getElementById(a), null != f ? f.tagName ? null == c ? {
                        container: f,
                        width: f.style.pixelWidth || f.offsetWidth,
                        height: f.style.pixelHeight || f.offsetHeight
                    } : {
                        container: f,
                        width: c,
                        height: d
                    } : {
                        container: 1,
                        x: a,
                        y: c,
                        width: d,
                        height: e
                    } : void 0
                }, b.pathToRelative = Ba, b._engine = {}, b.path2curve = Ia, b.matrix = function(a, b, c, d, e, f) {
                    return new n(a, b, c, d, e, f)
                },
                function(a) {
                    function c(a) {
                        return a[0] * a[0] + a[1] * a[1]
                    }

                    function d(a) {
                        var b = M.sqrt(c(a));
                        a[0] && (a[0] /= b), a[1] && (a[1] /= b)
                    }
                    a.add = function(a, b, c, d, e, f) {
                        var g, h, i, j, k = [
                                [],
                                [],
                                []
                            ],
                            l = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            m = [
                                [a, c, e],
                                [b, d, f],
                                [0, 0, 1]
                            ];
                        for (a && a instanceof n && (m = [
                                [a.a, a.c, a.e],
                                [a.b, a.d, a.f],
                                [0, 0, 1]
                            ]), g = 0; 3 > g; g++)
                            for (h = 0; 3 > h; h++) {
                                for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                                k[g][h] = j
                            }
                        this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2]
                    }, a.invert = function() {
                        var a = this,
                            b = a.a * a.d - a.b * a.c;
                        return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
                    }, a.clone = function() {
                        return new n(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, a.translate = function(a, b) {
                        this.add(1, 0, 0, 1, a, b)
                    }, a.scale = function(a, b, c, d) {
                        null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
                    }, a.rotate = function(a, c, d) {
                        a = b.rad(a), c = c || 0, d = d || 0;
                        var e = +M.cos(a).toFixed(9),
                            f = +M.sin(a).toFixed(9);
                        this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
                    }, a.x = function(a, b) {
                        return a * this.a + b * this.c + this.e
                    }, a.y = function(a, b) {
                        return a * this.b + b * this.d + this.f
                    }, a.get = function(a) {
                        return +this[H.fromCharCode(97 + a)].toFixed(4)
                    }, a.toString = function() {
                        return b.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                    }, a.toFilter = function() {
                        return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                    }, a.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, a.split = function() {
                        var a = {};
                        a.dx = this.e, a.dy = this.f;
                        var e = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        a.scalex = M.sqrt(c(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = M.sqrt(c(e[1])), d(e[1]), a.shear /= a.scaley;
                        var f = -e[0][1],
                            g = e[1][1];
                        return 0 > g ? (a.rotate = b.deg(M.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = b.deg(M.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
                    }, a.toTransformString = function(a) {
                        var b = a || this[I]();
                        return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : F) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : F) + (b.rotate ? "r" + [b.rotate, 0, 0] : F)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                    }
                }(n.prototype);
            for (var Oa = function() {
                    this.returnValue = !1
                }, Pa = function() {
                    return this.originalEvent.preventDefault()
                }, Qa = function() {
                    this.cancelBubble = !0
                }, Ra = function() {
                    return this.originalEvent.stopPropagation()
                }, Sa = function(a) {
                    var b = z.doc.documentElement.scrollTop || z.doc.body.scrollTop,
                        c = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft;
                    return {
                        x: a.clientX + c,
                        y: a.clientY + b
                    }
                }, Ta = function() {
                    return z.doc.addEventListener ? function(a, b, c, d) {
                        var e = function(a) {
                            var b = Sa(a);
                            return c.call(d, a, b.x, b.y)
                        };
                        if (a.addEventListener(b, e, !1), E && K[b]) {
                            var f = function(b) {
                                for (var e = Sa(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
                                    if (b.targetTouches[g].target == a) {
                                        b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = Pa, b.stopPropagation = Ra;
                                        break
                                    }
                                return c.call(d, b, e.x, e.y)
                            };
                            a.addEventListener(K[b], f, !1)
                        }
                        return function() {
                            return a.removeEventListener(b, e, !1), E && K[b] && a.removeEventListener(K[b], f, !1), !0
                        }
                    } : z.doc.attachEvent ? function(a, b, c, d) {
                        var e = function(a) {
                            a = a || z.win.event;
                            var b = z.doc.documentElement.scrollTop || z.doc.body.scrollTop,
                                e = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft,
                                f = a.clientX + e,
                                g = a.clientY + b;
                            return a.preventDefault = a.preventDefault || Oa, a.stopPropagation = a.stopPropagation || Qa, c.call(d, a, f, g)
                        };
                        return a.attachEvent("on" + b, e),
                            function() {
                                return a.detachEvent("on" + b, e), !0
                            }
                    } : void 0
                }(), Ua = [], Va = function(b) {
                    for (var c, d = b.clientX, e = b.clientY, f = z.doc.documentElement.scrollTop || z.doc.body.scrollTop, g = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft, h = Ua.length; h--;) {
                        if (c = Ua[h], E && b.touches) {
                            for (var i, j = b.touches.length; j--;)
                                if (i = b.touches[j], i.identifier == c.el._drag.id) {
                                    d = i.clientX, e = i.clientY, (b.originalEvent ? b.originalEvent : b).preventDefault();
                                    break
                                }
                        } else b.preventDefault();
                        var k, l = c.el.node,
                            m = l.nextSibling,
                            n = l.parentNode,
                            o = l.style.display;
                        z.win.opera && n.removeChild(l), l.style.display = "none", k = c.el.paper.getElementByPoint(d, e), l.style.display = o, z.win.opera && (m ? n.insertBefore(l, m) : n.appendChild(l)), k && a("raphael.drag.over." + c.el.id, c.el, k), d += g, e += f, a("raphael.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, b)
                    }
                }, Wa = function(c) {
                    b.unmousemove(Va).unmouseup(Wa);
                    for (var d, e = Ua.length; e--;) d = Ua[e], d.el._drag = {}, a("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
                    Ua = []
                }, Xa = b.el = {}, Ya = J.length; Ya--;) ! function(a) {
                b[a] = Xa[a] = function(c, d) {
                    return b.is(c, "function") && (this.events = this.events || [], this.events.push({
                        name: a,
                        f: c,
                        unbind: Ta(this.shape || this.node || z.doc, a, c, d || this)
                    })), this
                }, b["un" + a] = Xa["un" + a] = function(c) {
                    for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !b.is(c, "undefined") && d[e].f != c || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
                    return this
                }
            }(J[Ya]);
            Xa.data = function(c, d) {
                var e = ja[this.id] = ja[this.id] || {};
                if (0 == arguments.length) return e;
                if (1 == arguments.length) {
                    if (b.is(c, "object")) {
                        for (var f in c) c[y](f) && this.data(f, c[f]);
                        return this
                    }
                    return a("raphael.data.get." + this.id, this, e[c], c), e[c]
                }
                return e[c] = d, a("raphael.data.set." + this.id, this, d, c), this
            }, Xa.removeData = function(a) {
                return null == a ? ja[this.id] = {} : ja[this.id] && delete ja[this.id][a], this
            }, Xa.getData = function() {
                return c(ja[this.id] || {})
            }, Xa.hover = function(a, b, c, d) {
                return this.mouseover(a, c).mouseout(b, d || c)
            }, Xa.unhover = function(a, b) {
                return this.unmouseover(a).unmouseout(b)
            };
            var Za = [];
            Xa.drag = function(c, d, e, f, g, h) {
                function i(i) {
                    (i.originalEvent || i).preventDefault();
                    var j = i.clientX,
                        k = i.clientY,
                        l = z.doc.documentElement.scrollTop || z.doc.body.scrollTop,
                        m = z.doc.documentElement.scrollLeft || z.doc.body.scrollLeft;
                    if (this._drag.id = i.identifier, E && i.touches)
                        for (var n, o = i.touches.length; o--;)
                            if (n = i.touches[o], this._drag.id = n.identifier, n.identifier == this._drag.id) {
                                j = n.clientX, k = n.clientY;
                                break
                            }
                    this._drag.x = j + m, this._drag.y = k + l, !Ua.length && b.mousemove(Va).mouseup(Wa), Ua.push({
                        el: this,
                        move_scope: f,
                        start_scope: g,
                        end_scope: h
                    }), d && a.on("raphael.drag.start." + this.id, d), c && a.on("raphael.drag.move." + this.id, c), e && a.on("raphael.drag.end." + this.id, e), a("raphael.drag.start." + this.id, g || f || this, i.clientX + m, i.clientY + l, i)
                }
                return this._drag = {}, Za.push({
                    el: this,
                    start: i
                }), this.mousedown(i), this
            }, Xa.onDragOver = function(b) {
                b ? a.on("raphael.drag.over." + this.id, b) : a.unbind("raphael.drag.over." + this.id)
            }, Xa.undrag = function() {
                for (var c = Za.length; c--;) Za[c].el == this && (this.unmousedown(Za[c].start), Za.splice(c, 1), a.unbind("raphael.drag.*." + this.id));
                !Za.length && b.unmousemove(Va).unmouseup(Wa), Ua = []
            }, u.circle = function(a, c, d) {
                var e = b._engine.circle(this, a || 0, c || 0, d || 0);
                return this.__set__ && this.__set__.push(e), e
            }, u.rect = function(a, c, d, e, f) {
                var g = b._engine.rect(this, a || 0, c || 0, d || 0, e || 0, f || 0);
                return this.__set__ && this.__set__.push(g), g
            }, u.ellipse = function(a, c, d, e) {
                var f = b._engine.ellipse(this, a || 0, c || 0, d || 0, e || 0);
                return this.__set__ && this.__set__.push(f), f
            }, u.path = function(a) {
                a && !b.is(a, T) && !b.is(a[0], U) && (a += F);
                var c = b._engine.path(b.format[C](b, arguments), this);
                return this.__set__ && this.__set__.push(c), c
            }, u.image = function(a, c, d, e, f) {
                var g = b._engine.image(this, a || "about:blank", c || 0, d || 0, e || 0, f || 0);
                return this.__set__ && this.__set__.push(g), g
            }, u.text = function(a, c, d) {
                var e = b._engine.text(this, a || 0, c || 0, H(d));
                return this.__set__ && this.__set__.push(e), e
            }, u.set = function(a) {
                !b.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
                var c = new jb(a);
                return this.__set__ && this.__set__.push(c), c.paper = this, c.type = "set", c
            }, u.setStart = function(a) {
                this.__set__ = a || this.set()
            }, u.setFinish = function(a) {
                var b = this.__set__;
                return delete this.__set__, b
            }, u.getSize = function() {
                var a = this.canvas.parentNode;
                return {
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            }, u.setSize = function(a, c) {
                return b._engine.setSize.call(this, a, c)
            }, u.setViewBox = function(a, c, d, e, f) {
                return b._engine.setViewBox.call(this, a, c, d, e, f)
            }, u.top = u.bottom = null, u.raphael = b;
            var $a = function(a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    g = e.clientLeft || d.clientLeft || 0;
                return {
                    y: b.top + (z.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    x: b.left + (z.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g
                }
            };
            u.getElementByPoint = function(a, b) {
                var c = this,
                    d = c.canvas,
                    e = z.doc.elementFromPoint(a, b);
                if (z.win.opera && "svg" == e.tagName) {
                    var f = $a(d),
                        g = d.createSVGRect();
                    g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
                    var h = d.getIntersectionList(g, null);
                    h.length && (e = h[h.length - 1])
                }
                if (!e) return null;
                for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
                return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
            }, u.getElementsByBBox = function(a) {
                var c = this.set();
                return this.forEach(function(d) {
                    b.isBBoxIntersect(d.getBBox(), a) && c.push(d)
                }), c
            }, u.getById = function(a) {
                for (var b = this.bottom; b;) {
                    if (b.id == a) return b;
                    b = b.next
                }
                return null
            }, u.forEach = function(a, b) {
                for (var c = this.bottom; c;) {
                    if (!1 === a.call(b, c)) return this;
                    c = c.next
                }
                return this
            }, u.getElementsByPoint = function(a, b) {
                var c = this.set();
                return this.forEach(function(d) {
                    d.isPointInside(a, b) && c.push(d)
                }), c
            }, Xa.isPointInside = function(a, c) {
                var d = this.realPath = oa[this.type](this);
                return this.attr("transform") && this.attr("transform").length && (d = b.transformPath(d, this.attr("transform"))), b.isPointInsidePath(d, a, c)
            }, Xa.getBBox = function(a) {
                if (this.removed) return {};
                var b = this._;
                return a ? (!b.dirty && b.bboxwt || (this.realPath = oa[this.type](this), b.bboxwt = za(this.realPath), b.bboxwt.toString = o, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && (!b.dirty && this.realPath || (b.bboxwt = 0, this.realPath = oa[this.type](this)), b.bbox = za(pa(this.realPath, this.matrix)), b.bbox.toString = o, b.dirty = b.dirtyT = 0), b.bbox)
            }, Xa.clone = function() {
                if (this.removed) return null;
                var a = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(a), a
            }, Xa.glow = function(a) {
                if ("text" == this.type) return null;
                a = a || {};
                var b = {
                        width: (a.width || 10) + (+this.attr("stroke-width") || 1),
                        fill: a.fill || !1,
                        opacity: null == a.opacity ? .5 : a.opacity,
                        offsetx: a.offsetx || 0,
                        offsety: a.offsety || 0,
                        color: a.color || "#000"
                    },
                    c = b.width / 2,
                    d = this.paper,
                    e = d.set(),
                    f = this.realPath || oa[this.type](this);
                f = this.matrix ? pa(f, this.matrix) : f;
                for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
                    stroke: b.color,
                    fill: b.fill ? b.color : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +(b.width / c * g).toFixed(3),
                    opacity: +(b.opacity / c).toFixed(3)
                }));
                return e.insertBefore(this).translate(b.offsetx, b.offsety)
            };
            var _a = function(a, c, d, e, f, g, h, k, l) {
                    return null == l ? i(a, c, d, e, f, g, h, k) : b.findDotsAtSegment(a, c, d, e, f, g, h, k, j(a, c, d, e, f, g, h, k, l))
                },
                ab = function(a, c) {
                    return function(d, e, f) {
                        d = Ia(d);
                        for (var g, h, i, j, k, l = "", m = {}, n = 0, o = 0, p = d.length; p > o; o++) {
                            if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
                            else {
                                if (j = _a(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                                    if (c && !m.start) {
                                        if (k = _a(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), l += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y], f) return l;
                                        m.start = l, l = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                                        continue
                                    }
                                    if (!a && !c) return k = _a(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                                        x: k.x,
                                        y: k.y,
                                        alpha: k.alpha
                                    }
                                }
                                n += j, g = +i[5], h = +i[6]
                            }
                            l += i.shift() + i
                        }
                        return m.end = l, k = a ? n : c ? m : b.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), k.alpha && (k = {
                            x: k.x,
                            y: k.y,
                            alpha: k.alpha
                        }), k
                    }
                },
                bb = ab(1),
                cb = ab(),
                db = ab(0, 1);
            b.getTotalLength = bb, b.getPointAtLength = cb, b.getSubpath = function(a, b, c) {
                if (this.getTotalLength(a) - c < 1e-6) return db(a, b).end;
                var d = db(a, c, 1);
                return b ? db(d, b).end : d
            }, Xa.getTotalLength = function() {
                var a = this.getPath();
                if (a) return this.node.getTotalLength ? this.node.getTotalLength() : bb(a)
            }, Xa.getPointAtLength = function(a) {
                var b = this.getPath();
                if (b) return cb(b, a)
            }, Xa.getPath = function() {
                var a, c = b._getPath[this.type];
                if ("text" != this.type && "set" != this.type) return c && (a = c(this)), a
            }, Xa.getSubpath = function(a, c) {
                var d = this.getPath();
                if (d) return b.getSubpath(d, a, c)
            };
            var eb = b.easing_formulas = {
                linear: function(a) {
                    return a
                },
                "<": function(a) {
                    return Q(a, 1.7)
                },
                ">": function(a) {
                    return Q(a, .48)
                },
                "<>": function(a) {
                    var b = .48 - a / 1.04,
                        c = M.sqrt(.1734 + b * b),
                        d = c - b,
                        e = Q(P(d), 1 / 3) * (0 > d ? -1 : 1),
                        f = -c - b,
                        g = Q(P(f), 1 / 3) * (0 > f ? -1 : 1),
                        h = e + g + .5;
                    return 3 * (1 - h) * h * h + h * h * h
                },
                backIn: function(a) {
                    var b = 1.70158;
                    return a * a * ((b + 1) * a - b)
                },
                backOut: function(a) {
                    a -= 1;
                    var b = 1.70158;
                    return a * a * ((b + 1) * a + b) + 1
                },
                elastic: function(a) {
                    return a == !!a ? a : Q(2, -10 * a) * M.sin(2 * R * (a - .075) / .3) + 1
                },
                bounce: function(a) {
                    var b, c = 7.5625,
                        d = 2.75;
                    return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
                }
            };
            eb.easeIn = eb["ease-in"] = eb["<"], eb.easeOut = eb["ease-out"] = eb[">"], eb.easeInOut = eb["ease-in-out"] = eb["<>"], eb["back-in"] = eb.backIn, eb["back-out"] = eb.backOut;
            var fb = [],
                gb = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                    setTimeout(a, 16)
                },
                hb = function() {
                    for (var c = +new Date, d = 0; d < fb.length; d++) {
                        var e = fb[d];
                        if (!e.el.removed && !e.paused) {
                            var f, g, h = c - e.start,
                                i = e.ms,
                                j = e.easing,
                                k = e.from,
                                l = e.diff,
                                m = e.to,
                                n = (e.t, e.el),
                                o = {},
                                p = {};
                            if (e.initstatus ? (h = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * i, e.status = e.initstatus, delete e.initstatus, e.stop && fb.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (h / i)) / e.anim.top, !(0 > h))
                                if (i > h) {
                                    var q = j(h / i);
                                    for (var s in k)
                                        if (k[y](s)) {
                                            switch (ca[s]) {
                                                case S:
                                                    f = +k[s] + q * i * l[s];
                                                    break;
                                                case "colour":
                                                    f = "rgb(" + [ib(Z(k[s].r + q * i * l[s].r)), ib(Z(k[s].g + q * i * l[s].g)), ib(Z(k[s].b + q * i * l[s].b))].join(",") + ")";
                                                    break;
                                                case "path":
                                                    f = [];
                                                    for (var t = 0, u = k[s].length; u > t; t++) {
                                                        f[t] = [k[s][t][0]];
                                                        for (var v = 1, w = k[s][t].length; w > v; v++) f[t][v] = +k[s][t][v] + q * i * l[s][t][v];
                                                        f[t] = f[t].join(G)
                                                    }
                                                    f = f.join(G);
                                                    break;
                                                case "transform":
                                                    if (l[s].real)
                                                        for (f = [], t = 0, u = k[s].length; u > t; t++)
                                                            for (f[t] = [k[s][t][0]], v = 1, w = k[s][t].length; w > v; v++) f[t][v] = k[s][t][v] + q * i * l[s][t][v];
                                                    else {
                                                        var x = function(a) {
                                                            return +k[s][a] + q * i * l[s][a]
                                                        };
                                                        f = [
                                                            ["m", x(0), x(1), x(2), x(3), x(4), x(5)]
                                                        ]
                                                    }
                                                    break;
                                                case "csv":
                                                    if ("clip-rect" == s)
                                                        for (f = [], t = 4; t--;) f[t] = +k[s][t] + q * i * l[s][t];
                                                    break;
                                                default:
                                                    var z = [][D](k[s]);
                                                    for (f = [], t = n.paper.customAttributes[s].length; t--;) f[t] = +z[t] + q * i * l[s][t]
                                            }
                                            o[s] = f
                                        }
                                    n.attr(o),
                                        function(b, c, d) {
                                            setTimeout(function() {
                                                a("raphael.anim.frame." + b, c, d)
                                            })
                                        }(n.id, n, e.anim)
                                } else {
                                    if (function(c, d, e) {
                                            setTimeout(function() {
                                                a("raphael.anim.frame." + d.id, d, e), a("raphael.anim.finish." + d.id, d, e), b.is(c, "function") && c.call(d)
                                            })
                                        }(e.callback, n, e.anim), n.attr(m), fb.splice(d--, 1), e.repeat > 1 && !e.next) {
                                        for (g in m) m[y](g) && (p[g] = e.totalOrigin[g]);
                                        e.el.attr(p), r(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
                                    }
                                    e.next && !e.stop && r(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
                                }
                        }
                    }
                    fb.length && gb(hb)
                },
                ib = function(a) {
                    return a > 255 ? 255 : 0 > a ? 0 : a
                };
            Xa.animateWith = function(a, c, d, e, f, g) {
                var h = this;
                if (h.removed) return g && g.call(h), h;
                var i = d instanceof q ? d : b.animation(d, e, f, g);
                r(i, h, i.percents[0], null, h.attr());
                for (var j = 0, k = fb.length; k > j; j++)
                    if (fb[j].anim == c && fb[j].el == a) {
                        fb[k - 1].start = fb[j].start;
                        break
                    }
                return h
            }, Xa.onAnimation = function(b) {
                return b ? a.on("raphael.anim.frame." + this.id, b) : a.unbind("raphael.anim.frame." + this.id), this
            }, q.prototype.delay = function(a) {
                var b = new q(this.anim, this.ms);
                return b.times = this.times, b.del = +a || 0, b
            }, q.prototype.repeat = function(a) {
                var b = new q(this.anim, this.ms);
                return b.del = this.del, b.times = M.floor(N(a, 0)) || 1, b
            }, b.animation = function(a, c, d, e) {
                if (a instanceof q) return a;
                !b.is(d, "function") && d || (e = e || d || null, d = null), a = Object(a), c = +c || 0;
                var f, g, h = {};
                for (g in a) a[y](g) && $(g) != g && $(g) + "%" != g && (f = !0, h[g] = a[g]);
                if (f) return d && (h.easing = d), e && (h.callback = e), new q({
                    100: h
                }, c);
                if (e) {
                    var i = 0;
                    for (var j in a) {
                        var k = _(j);
                        a[y](j) && k > i && (i = k)
                    }
                    i += "%", !a[i].callback && (a[i].callback = e)
                }
                return new q(a, c)
            }, Xa.animate = function(a, c, d, e) {
                var f = this;
                if (f.removed) return e && e.call(f), f;
                var g = a instanceof q ? a : b.animation(a, c, d, e);
                return r(g, f, g.percents[0], null, f.attr()), f
            }, Xa.setTime = function(a, b) {
                return a && null != b && this.status(a, O(b, a.ms) / a.ms), this
            }, Xa.status = function(a, b) {
                var c, d, e = [],
                    f = 0;
                if (null != b) return r(a, this, -1, O(b, 1)), this;
                for (c = fb.length; c > f; f++)
                    if (d = fb[f], d.el.id == this.id && (!a || d.anim == a)) {
                        if (a) return d.status;
                        e.push({
                            anim: d.anim,
                            status: d.status
                        })
                    }
                return a ? 0 : e
            }, Xa.pause = function(b) {
                for (var c = 0; c < fb.length; c++) fb[c].el.id != this.id || b && fb[c].anim != b || !1 !== a("raphael.anim.pause." + this.id, this, fb[c].anim) && (fb[c].paused = !0);
                return this
            }, Xa.resume = function(b) {
                for (var c = 0; c < fb.length; c++)
                    if (fb[c].el.id == this.id && (!b || fb[c].anim == b)) {
                        var d = fb[c];
                        !1 !== a("raphael.anim.resume." + this.id, this, d.anim) && (delete d.paused, this.status(d.anim, d.status))
                    }
                return this
            }, Xa.stop = function(b) {
                for (var c = 0; c < fb.length; c++) fb[c].el.id != this.id || b && fb[c].anim != b || !1 !== a("raphael.anim.stop." + this.id, this, fb[c].anim) && fb.splice(c--, 1);
                return this
            }, a.on("raphael.remove", s), a.on("raphael.clear", s), Xa.toString = function() {
                return "Raphaël’s object"
            };
            var jb = function(a) {
                    if (this.items = [], this.length = 0, this.type = "set", a)
                        for (var b = 0, c = a.length; c > b; b++) !a[b] || a[b].constructor != Xa.constructor && a[b].constructor != jb || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
                },
                kb = jb.prototype;
            kb.push = function() {
                for (var a, b, c = 0, d = arguments.length; d > c; c++) !(a = arguments[c]) || a.constructor != Xa.constructor && a.constructor != jb || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
                return this
            }, kb.pop = function() {
                return this.length && delete this[this.length--], this.items.pop()
            }, kb.forEach = function(a, b) {
                for (var c = 0, d = this.items.length; d > c; c++)
                    if (!1 === a.call(b, this.items[c], c)) return this;
                return this
            };
            for (var lb in Xa) Xa[y](lb) && (kb[lb] = function(a) {
                return function() {
                    var b = arguments;
                    return this.forEach(function(c) {
                        c[a][C](c, b)
                    })
                }
            }(lb));
            return kb.attr = function(a, c) {
                    if (a && b.is(a, U) && b.is(a[0], "object"))
                        for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
                    else
                        for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, c);
                    return this
                }, kb.clear = function() {
                    for (; this.length;) this.pop()
                }, kb.splice = function(a, b, c) {
                    a = 0 > a ? N(this.length + a, 0) : a, b = N(0, O(this.length - a, b));
                    var d, e = [],
                        f = [],
                        g = [];
                    for (d = 2; d < arguments.length; d++) g.push(arguments[d]);
                    for (d = 0; b > d; d++) f.push(this[a + d]);
                    for (; d < this.length - a; d++) e.push(this[a + d]);
                    var h = g.length;
                    for (d = 0; d < h + e.length; d++) this.items[a + d] = this[a + d] = h > d ? g[d] : e[d - h];
                    for (d = this.items.length = this.length -= b - h; this[d];) delete this[d++];
                    return new jb(f)
                }, kb.exclude = function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] == a) return this.splice(b, 1), !0
                }, kb.animate = function(a, c, d, e) {
                    (b.is(d, "function") || !d) && (e = d || null);
                    var f, g, h = this.items.length,
                        i = h,
                        j = this;
                    if (!h) return this;
                    e && (g = function() {
                        !--h && e.call(j)
                    }), d = b.is(d, T) ? d : g;
                    var k = b.animation(a, c, d, g);
                    for (f = this.items[--i].animate(k); i--;) this.items[i] && !this.items[i].removed && this.items[i].animateWith(f, k, k), this.items[i] && !this.items[i].removed || h--;
                    return this
                }, kb.insertAfter = function(a) {
                    for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
                    return this
                }, kb.getBBox = function() {
                    for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
                        if (!this.items[e].removed) {
                            var f = this.items[e].getBBox();
                            a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
                        }
                    return a = O[C](0, a), b = O[C](0, b), c = N[C](0, c), d = N[C](0, d), {
                        x: a,
                        y: b,
                        x2: c,
                        y2: d,
                        width: c - a,
                        height: d - b
                    }
                }, kb.clone = function(a) {
                    a = this.paper.set();
                    for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
                    return a
                }, kb.toString = function() {
                    return "Raphaël‘s set"
                }, kb.glow = function(a) {
                    var b = this.paper.set();
                    return this.forEach(function(c, d) {
                        var e = c.glow(a);
                        null != e && e.forEach(function(a, c) {
                            b.push(a)
                        })
                    }), b
                }, kb.isPointInside = function(a, b) {
                    var c = !1;
                    return this.forEach(function(d) {
                        return d.isPointInside(a, b) ? (c = !0, !1) : void 0
                    }), c
                }, b.registerFont = function(a) {
                    if (!a.face) return a;
                    this.fonts = this.fonts || {};
                    var b = {
                            w: a.w,
                            face: {},
                            glyphs: {}
                        },
                        c = a.face["font-family"];
                    for (var d in a.face) a.face[y](d) && (b.face[d] = a.face[d]);
                    if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
                        b.face["units-per-em"] = _(a.face["units-per-em"], 10);
                        for (var e in a.glyphs)
                            if (a.glyphs[y](e)) {
                                var f = a.glyphs[e];
                                if (b.glyphs[e] = {
                                        w: f.w,
                                        k: {},
                                        d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                                            return {
                                                l: "L",
                                                c: "C",
                                                x: "z",
                                                t: "m",
                                                r: "l",
                                                v: "c"
                                            }[a] || "M"
                                        }) + "z"
                                    }, f.k)
                                    for (var g in f.k) f[y](g) && (b.glyphs[e].k[g] = f.k[g])
                            }
                    }
                    return a
                }, u.getFont = function(a, c, d, e) {
                    if (e = e || "normal", d = d || "normal", c = +c || {
                            normal: 400,
                            bold: 700,
                            lighter: 300,
                            bolder: 800
                        }[c] || 400, b.fonts) {
                        var f = b.fonts[a];
                        if (!f) {
                            var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, F) + "(\\s|$)", "i");
                            for (var h in b.fonts)
                                if (b.fonts[y](h) && g.test(h)) {
                                    f = b.fonts[h];
                                    break
                                }
                        }
                        var i;
                        if (f)
                            for (var j = 0, k = f.length; k > j && (i = f[j], i.face["font-weight"] != c || i.face["font-style"] != d && i.face["font-style"] || i.face["font-stretch"] != e); j++);
                        return i
                    }
                }, u.print = function(a, c, d, e, f, g, h, i) {
                    g = g || "middle", h = N(O(h || 0, 1), -1), i = N(O(i || 1, 3), 1);
                    var j, k = H(d)[I](F),
                        l = 0,
                        m = 0,
                        n = F;
                    if (b.is(e, "string") && (e = this.getFont(e)), e) {
                        j = (f || 16) / e.face["units-per-em"];
                        for (var o = e.face.bbox[I](v), p = +o[0], q = o[3] - o[1], r = 0, s = +o[1] + ("baseline" == g ? q + +e.face.descent : q / 2), t = 0, u = k.length; u > t; t++) {
                            if ("\n" == k[t]) l = 0, x = 0, m = 0, r += q * i;
                            else {
                                var w = m && e.glyphs[k[t - 1]] || {},
                                    x = e.glyphs[k[t]];
                                l += m ? (w.w || e.w) + (w.k && w.k[k[t]] || 0) + e.w * h : 0, m = 1
                            }
                            x && x.d && (n += b.transformPath(x.d, ["t", l * j, r * j, "s", j, j, p, s, "t", (a - p) / j, (c - s) / j]))
                        }
                    }
                    return this.path(n).attr({
                        fill: "#000",
                        stroke: "none"
                    })
                }, u.add = function(a) {
                    if (b.is(a, "array"))
                        for (var c, d = this.set(), e = 0, f = a.length; f > e; e++) c = a[e] || {}, w[y](c.type) && d.push(this[c.type]().attr(c));
                    return d
                }, b.format = function(a, c) {
                    var d = b.is(c, U) ? [0][D](c) : arguments;
                    return a && b.is(a, T) && d.length - 1 && (a = a.replace(x, function(a, b) {
                        return null == d[++b] ? F : d[b]
                    })), a || F
                }, b.fullfill = function() {
                    var a = /\{([^\}]+)\}/g,
                        b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        c = function(a, c, d) {
                            var e = d;
                            return c.replace(b, function(a, b, c, d, f) {
                                b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                            }), e = (null == e || e == d ? a : e) + ""
                        };
                    return function(b, d) {
                        return String(b).replace(a, function(a, b) {
                            return c(a, b, d)
                        })
                    }
                }(), b.ninja = function() {
                    if (A.was) z.win.Raphael = A.is;
                    else {
                        window.Raphael = void 0;
                        try {
                            delete window.Raphael
                        } catch (a) {}
                    }
                    return b
                }, b.st = kb, a.on("raphael.DOMload", function() {
                    t = !0
                }),
                function(a, c, d) {
                    function e() {
                        /in/.test(a.readyState) ? setTimeout(e, 9) : b.eve("raphael.DOMload")
                    }
                    null == a.readyState && a.addEventListener && (a.addEventListener(c, d = function() {
                        a.removeEventListener(c, d, !1), a.readyState = "complete"
                    }, !1), a.readyState = "loading"), e()
                }(document, "DOMContentLoaded"), b
        }.apply(b, d)) && (a.exports = e)
    }, function(a, b, c) {
        var d, e;
        ! function(c) {
            var f, g, h = "0.4.2",
                i = "hasOwnProperty",
                j = /[\.\/]/,
                k = function() {},
                l = function(a, b) {
                    return a - b
                },
                m = {
                    n: {}
                },
                n = function(a, b) {
                    a = String(a);
                    var c, d = g,
                        e = Array.prototype.slice.call(arguments, 2),
                        h = n.listeners(a),
                        i = 0,
                        j = [],
                        k = {},
                        m = [],
                        o = f;
                    f = a, g = 0;
                    for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (j.push(h[p].zIndex), h[p].zIndex < 0 && (k[h[p].zIndex] = h[p]));
                    for (j.sort(l); j[i] < 0;)
                        if (c = k[j[i++]], m.push(c.apply(b, e)), g) return g = d, m;
                    for (p = 0; q > p; p++)
                        if ("zIndex" in (c = h[p]))
                            if (c.zIndex == j[i]) {
                                if (m.push(c.apply(b, e)), g) break;
                                do {
                                    if (i++, c = k[j[i]], c && m.push(c.apply(b, e)), g) break
                                } while (c)
                            } else k[c.zIndex] = c;
                    else if (m.push(c.apply(b, e)), g) break;
                    return g = d, f = o, m.length ? m : null
                };
            n._events = m, n.listeners = function(a) {
                var b, c, d, e, f, g, h, i, k = a.split(j),
                    l = m,
                    n = [l],
                    o = [];
                for (e = 0, f = k.length; f > e; e++) {
                    for (i = [], g = 0, h = n.length; h > g; g++)
                        for (l = n[g].n, c = [l[k[e]], l["*"]], d = 2; d--;)(b = c[d]) && (i.push(b), o = o.concat(b.f || []));
                    n = i
                }
                return o
            }, n.on = function(a, b) {
                if (a = String(a), "function" != typeof b) return function() {};
                for (var c = a.split(j), d = m, e = 0, f = c.length; f > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {
                    n: {}
                });
                for (d.f = d.f || [], e = 0, f = d.f.length; f > e; e++)
                    if (d.f[e] == b) return k;
                return d.f.push(b),
                    function(a) {
                        +a == +a && (b.zIndex = +a)
                    }
            }, n.f = function(a) {
                var b = [].slice.call(arguments, 1);
                return function() {
                    n.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
                }
            }, n.stop = function() {
                g = 1
            }, n.nt = function(a) {
                return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(f) : f
            }, n.nts = function() {
                return f.split(j)
            }, n.off = n.unbind = function(a, b) {
                if (!a) return void(n._events = m = {
                    n: {}
                });
                var c, d, e, f, g, h, k, l = a.split(j),
                    o = [m];
                for (f = 0, g = l.length; g > f; f++)
                    for (h = 0; h < o.length; h += e.length - 2) {
                        if (e = [h, 1], c = o[h].n, "*" != l[f]) c[l[f]] && e.push(c[l[f]]);
                        else
                            for (d in c) c[i](d) && e.push(c[d]);
                        o.splice.apply(o, e)
                    }
                for (f = 0, g = o.length; g > f; f++)
                    for (c = o[f]; c.n;) {
                        if (b) {
                            if (c.f) {
                                for (h = 0, k = c.f.length; k > h; h++)
                                    if (c.f[h] == b) {
                                        c.f.splice(h, 1);
                                        break
                                    }!c.f.length && delete c.f
                            }
                            for (d in c.n)
                                if (c.n[i](d) && c.n[d].f) {
                                    var p = c.n[d].f;
                                    for (h = 0, k = p.length; k > h; h++)
                                        if (p[h] == b) {
                                            p.splice(h, 1);
                                            break
                                        }!p.length && delete c.n[d].f
                                }
                        } else {
                            delete c.f;
                            for (d in c.n) c.n[i](d) && c.n[d].f && delete c.n[d].f
                        }
                        c = c.n
                    }
            }, n.once = function(a, b) {
                var c = function() {
                    return n.unbind(a, c), b.apply(this, arguments)
                };
                return n.on(a, c)
            }, n.version = h, n.toString = function() {
                return "You are running Eve " + h
            }, void 0 !== a && a.exports ? a.exports = n : (d = [], void 0 !== (e = function() {
                return n
            }.apply(b, d)) && (a.exports = e))
        }()
    }, function(a, b, c) {
        var d, e;
        d = [c(1)], void 0 !== (e = function(a) {
            if (!a || a.svg) {
                var b = "hasOwnProperty",
                    c = String,
                    d = parseFloat,
                    e = parseInt,
                    f = Math,
                    g = f.max,
                    h = f.abs,
                    i = f.pow,
                    j = /[, ]+/,
                    k = a.eve,
                    l = "",
                    m = " ",
                    n = "http://www.w3.org/1999/xlink",
                    o = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                    p = {};
                a.toString = function() {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                };
                var q = function(d, e) {
                        if (e) {
                            "string" == typeof d && (d = q(d));
                            for (var f in e) e[b](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f])))
                        } else d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return d
                    },
                    r = function(b, e) {
                        var j = "linear",
                            k = b.id + e,
                            m = .5,
                            n = .5,
                            o = b.node,
                            p = b.paper,
                            r = o.style,
                            s = a._g.doc.getElementById(k);
                        if (!s) {
                            if (e = c(e).replace(a._radial_gradient, function(a, b, c) {
                                    if (j = "radial", b && c) {
                                        m = d(b), n = d(c);
                                        var e = 2 * (n > .5) - 1;
                                        i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                                    }
                                    return l
                                }), e = e.split(/\s*\-\s*/), "linear" == j) {
                                var u = e.shift();
                                if (u = -d(u), isNaN(u)) return null;
                                var v = [0, 0, f.cos(a.rad(u)), f.sin(a.rad(u))],
                                    w = 1 / (g(h(v[2]), h(v[3])) || 1);
                                v[2] *= w, v[3] *= w, v[2] < 0 && (v[0] = -v[2], v[2] = 0), v[3] < 0 && (v[1] = -v[3], v[3] = 0)
                            }
                            var x = a._parseDots(e);
                            if (!x) return null;
                            if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), b.gradient && k != b.gradient.id && (p.defs.removeChild(b.gradient), delete b.gradient), !b.gradient) {
                                s = q(j + "Gradient", {
                                    id: k
                                }), b.gradient = s, q(s, "radial" == j ? {
                                    fx: m,
                                    fy: n
                                } : {
                                    x1: v[0],
                                    y1: v[1],
                                    x2: v[2],
                                    y2: v[3],
                                    gradientTransform: b.matrix.invert()
                                }), p.defs.appendChild(s);
                                for (var y = 0, z = x.length; z > y; y++) s.appendChild(q("stop", {
                                    offset: x[y].offset ? x[y].offset : y ? "100%" : "0%",
                                    "stop-color": x[y].color || "#fff",
                                    "stop-opacity": isFinite(x[y].opacity) ? x[y].opacity : 1
                                }))
                            }
                        }
                        return q(o, {
                            fill: t(k),
                            opacity: 1,
                            "fill-opacity": 1
                        }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
                    },
                    s = function() {
                        var a = document.documentMode;
                        return a && (9 === a || 10 === a)
                    },
                    t = function(a) {
                        if (s()) return "url('#" + a + "')";
                        var b = document.location;
                        return "url('" + b.protocol + "//" + b.host + b.pathname + b.search + "#" + a + "')"
                    },
                    u = function(a) {
                        var b = a.getBBox(1);
                        q(a.pattern, {
                            patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
                        })
                    },
                    v = function(d, e, f) {
                        if ("path" == d.type) {
                            for (var g, h, i, j, k, m = c(e).toLowerCase().split("-"), n = d.paper, r = f ? "end" : "start", s = d.node, t = d.attrs, u = t["stroke-width"], v = m.length, w = "classic", x = 3, y = 3, z = 5; v--;) switch (m[v]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    w = m[v];
                                    break;
                                case "wide":
                                    y = 5;
                                    break;
                                case "narrow":
                                    y = 2;
                                    break;
                                case "long":
                                    x = 5;
                                    break;
                                case "short":
                                    x = 2
                            }
                            if ("open" == w ? (x += 2, y += 2, z += 2, i = 1, j = f ? 4 : 1, k = {
                                    fill: "none",
                                    stroke: t.stroke
                                }) : (j = i = x / 2, k = {
                                    fill: t.stroke,
                                    stroke: "none"
                                }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {}, "none" != w) {
                                var A = "raphael-marker-" + w,
                                    B = "raphael-marker-" + r + w + x + y + "-obj" + d.id;
                                a._g.doc.getElementById(A) ? p[A]++ : (n.defs.appendChild(q(q("path"), {
                                    "stroke-linecap": "round",
                                    d: o[w],
                                    id: A
                                })), p[A] = 1);
                                var C, D = a._g.doc.getElementById(B);
                                D ? (p[B]++, C = D.getElementsByTagName("use")[0]) : (D = q(q("marker"), {
                                    id: B,
                                    markerHeight: y,
                                    markerWidth: x,
                                    orient: "auto",
                                    refX: j,
                                    refY: y / 2
                                }), C = q(q("use"), {
                                    "xlink:href": "#" + A,
                                    transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                                    "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                                }), D.appendChild(C), n.defs.appendChild(D), p[B] = 1), q(C, k);
                                var E = i * ("diamond" != w && "oval" != w);
                                f ? (g = d._.arrows.startdx * u || 0, h = a.getTotalLength(t.path) - E * u) : (g = E * u, h = a.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), k = {}, k["marker-" + r] = "url(#" + B + ")", (h || g) && (k.d = a.getSubpath(t.path, g, h)), q(s, k), d._.arrows[r + "Path"] = A, d._.arrows[r + "Marker"] = B, d._.arrows[r + "dx"] = E, d._.arrows[r + "Type"] = w, d._.arrows[r + "String"] = e
                            } else f ? (g = d._.arrows.startdx * u || 0, h = a.getTotalLength(t.path) - g) : (g = 0, h = a.getTotalLength(t.path) - (d._.arrows.enddx * u || 0)), d._.arrows[r + "Path"] && q(s, {
                                d: a.getSubpath(t.path, g, h)
                            }), delete d._.arrows[r + "Path"], delete d._.arrows[r + "Marker"], delete d._.arrows[r + "dx"], delete d._.arrows[r + "Type"], delete d._.arrows[r + "String"];
                            for (k in p)
                                if (p[b](k) && !p[k]) {
                                    var F = a._g.doc.getElementById(k);
                                    F && F.parentNode.removeChild(F)
                                }
                        }
                    },
                    w = {
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                    x = function(a, b, d) {
                        if (b = w[c(b).toLowerCase()]) {
                            for (var e = a.attrs["stroke-width"] || "1", f = {
                                    round: e,
                                    square: e,
                                    butt: 0
                                }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = b.length; h--;) g[h] = b[h] * e + (h % 2 ? 1 : -1) * f;
                            q(a.node, {
                                "stroke-dasharray": g.join(",")
                            })
                        } else q(a.node, {
                            "stroke-dasharray": "none"
                        })
                    },
                    y = function(d, f) {
                        var i = d.node,
                            k = d.attrs,
                            m = i.style.visibility;
                        i.style.visibility = "hidden";
                        for (var o in f)
                            if (f[b](o)) {
                                if (!a._availableAttrs[b](o)) continue;
                                var p = f[o];
                                switch (k[o] = p, o) {
                                    case "blur":
                                        d.blur(p);
                                        break;
                                    case "title":
                                        var s = i.getElementsByTagName("title");
                                        if (s.length && (s = s[0])) s.firstChild.nodeValue = p;
                                        else {
                                            s = q("title");
                                            var t = a._g.doc.createTextNode(p);
                                            s.appendChild(t), i.appendChild(s)
                                        }
                                        break;
                                    case "href":
                                    case "target":
                                        var w = i.parentNode;
                                        if ("a" != w.tagName.toLowerCase()) {
                                            var y = q("a");
                                            w.insertBefore(y, i), y.appendChild(i), w = y
                                        }
                                        "target" == o ? w.setAttributeNS(n, "show", "blank" == p ? "new" : p) : w.setAttributeNS(n, o, p);
                                        break;
                                    case "cursor":
                                        i.style.cursor = p;
                                        break;
                                    case "transform":
                                        d.transform(p);
                                        break;
                                    case "arrow-start":
                                        v(d, p);
                                        break;
                                    case "arrow-end":
                                        v(d, p, 1);
                                        break;
                                    case "clip-rect":
                                        var A = c(p).split(j);
                                        if (4 == A.length) {
                                            d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                            var B = q("clipPath"),
                                                C = q("rect");
                                            B.id = a.createUUID(), q(C, {
                                                x: A[0],
                                                y: A[1],
                                                width: A[2],
                                                height: A[3]
                                            }), B.appendChild(C), d.paper.defs.appendChild(B), q(i, {
                                                "clip-path": "url(#" + B.id + ")"
                                            }), d.clip = C
                                        }
                                        if (!p) {
                                            var D = i.getAttribute("clip-path");
                                            if (D) {
                                                var E = a._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g, l));
                                                E && E.parentNode.removeChild(E), q(i, {
                                                    "clip-path": l
                                                }), delete d.clip
                                            }
                                        }
                                        break;
                                    case "path":
                                        "path" == d.type && (q(i, {
                                            d: p ? k.path = a._pathToAbsolute(p) : "M0,0"
                                        }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && v(d, d._.arrows.startString), "endString" in d._.arrows && v(d, d._.arrows.endString, 1)));
                                        break;
                                    case "width":
                                        if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                                        o = "x", p = k.x;
                                    case "x":
                                        k.fx && (p = -k.x - (k.width || 0));
                                    case "rx":
                                        if ("rx" == o && "rect" == d.type) break;
                                    case "cx":
                                        i.setAttribute(o, p), d.pattern && u(d), d._.dirty = 1;
                                        break;
                                    case "height":
                                        if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                                        o = "y", p = k.y;
                                    case "y":
                                        k.fy && (p = -k.y - (k.height || 0));
                                    case "ry":
                                        if ("ry" == o && "rect" == d.type) break;
                                    case "cy":
                                        i.setAttribute(o, p), d.pattern && u(d), d._.dirty = 1;
                                        break;
                                    case "r":
                                        "rect" == d.type ? q(i, {
                                            rx: p,
                                            ry: p
                                        }) : i.setAttribute(o, p), d._.dirty = 1;
                                        break;
                                    case "src":
                                        "image" == d.type && i.setAttributeNS(n, "href", p);
                                        break;
                                    case "stroke-width":
                                        1 == d._.sx && 1 == d._.sy || (p /= g(h(d._.sx), h(d._.sy)) || 1), i.setAttribute(o, p), k["stroke-dasharray"] && x(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && v(d, d._.arrows.startString), "endString" in d._.arrows && v(d, d._.arrows.endString, 1));
                                        break;
                                    case "stroke-dasharray":
                                        x(d, p, f);
                                        break;
                                    case "fill":
                                        var F = c(p).match(a._ISURL);
                                        if (F) {
                                            B = q("pattern");
                                            var G = q("image");
                                            B.id = a.createUUID(), q(B, {
                                                    x: 0,
                                                    y: 0,
                                                    patternUnits: "userSpaceOnUse",
                                                    height: 1,
                                                    width: 1
                                                }), q(G, {
                                                    x: 0,
                                                    y: 0,
                                                    "xlink:href": F[1]
                                                }), B.appendChild(G),
                                                function(b) {
                                                    a._preload(F[1], function() {
                                                        var a = this.offsetWidth,
                                                            c = this.offsetHeight;
                                                        q(b, {
                                                            width: a,
                                                            height: c
                                                        }), q(G, {
                                                            width: a,
                                                            height: c
                                                        })
                                                    })
                                                }(B), d.paper.defs.appendChild(B), q(i, {
                                                    fill: "url(#" + B.id + ")"
                                                }), d.pattern = B, d.pattern && u(d);
                                            break
                                        }
                                        var H = a.getRGB(p);
                                        if (H.error) {
                                            if (("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p)) {
                                                if ("opacity" in k || "fill-opacity" in k) {
                                                    var I = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                                    if (I) {
                                                        var J = I.getElementsByTagName("stop");
                                                        q(J[J.length - 1], {
                                                            "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                                                        })
                                                    }
                                                }
                                                k.gradient = p, k.fill = "none";
                                                break
                                            }
                                        } else delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, {
                                            opacity: k.opacity
                                        }), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, {
                                            "fill-opacity": k["fill-opacity"]
                                        });
                                        H[b]("opacity") && q(i, {
                                            "fill-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                                        });
                                    case "stroke":
                                        H = a.getRGB(p), i.setAttribute(o, H.hex), "stroke" == o && H[b]("opacity") && q(i, {
                                            "stroke-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                                        }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && v(d, d._.arrows.startString), "endString" in d._.arrows && v(d, d._.arrows.endString, 1));
                                        break;
                                    case "gradient":
                                        ("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p);
                                        break;
                                    case "opacity":
                                        k.gradient && !k[b]("stroke-opacity") && q(i, {
                                            "stroke-opacity": p > 1 ? p / 100 : p
                                        });
                                    case "fill-opacity":
                                        if (k.gradient) {
                                            (I = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l))) && (J = I.getElementsByTagName("stop"), q(J[J.length - 1], {
                                                "stop-opacity": p
                                            }));
                                            break
                                        }
                                    default:
                                        "font-size" == o && (p = e(p, 10) + "px");
                                        var K = o.replace(/(\-.)/g, function(a) {
                                            return a.substring(1).toUpperCase()
                                        });
                                        i.style[K] = p, d._.dirty = 1, i.setAttribute(o, p)
                                }
                            }
                        z(d, f), i.style.visibility = m
                    },
                    z = function(d, f) {
                        if ("text" == d.type && (f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) {
                            var g = d.attrs,
                                h = d.node,
                                i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                            if (f[b]("text")) {
                                for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                                for (var j, k = c(f.text).split("\n"), m = [], n = 0, o = k.length; o > n; n++) j = q("tspan"), n && q(j, {
                                    dy: 1.2 * i,
                                    x: g.x
                                }), j.appendChild(a._g.doc.createTextNode(k[n])), h.appendChild(j), m[n] = j
                            } else
                                for (m = h.getElementsByTagName("tspan"), n = 0, o = m.length; o > n; n++) n ? q(m[n], {
                                    dy: 1.2 * i,
                                    x: g.x
                                }) : q(m[0], {
                                    dy: 0
                                });
                            q(h, {
                                x: g.x,
                                y: g.y
                            }), d._.dirty = 1;
                            var p = d._getBBox(),
                                r = g.y - (p.y + p.height / 2);
                            r && a.is(r, "finite") && q(m[0], {
                                dy: r
                            })
                        }
                    },
                    A = function(a) {
                        return a.parentNode && "a" === a.parentNode.tagName.toLowerCase() ? a.parentNode : a
                    },
                    B = function(b, c) {
                        this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
                    },
                    C = a.el;
                B.prototype = C, C.constructor = B, a._engine.path = function(a, b) {
                    var c = q("path");
                    b.canvas && b.canvas.appendChild(c);
                    var d = new B(c, b);
                    return d.type = "path", y(d, {
                        fill: "none",
                        stroke: "#000",
                        path: a
                    }), d
                }, C.rotate = function(a, b, e) {
                    if (this.removed) return this;
                    if (a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e), null == b || null == e) {
                        var f = this.getBBox(1);
                        b = f.x + f.width / 2, e = f.y + f.height / 2
                    }
                    return this.transform(this._.transform.concat([
                        ["r", a, b, e]
                    ])), this
                }, C.scale = function(a, b, e, f) {
                    if (this.removed) return this;
                    if (a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == b && (b = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                        ["s", a, b, e, f]
                    ])), this
                }, C.translate = function(a, b) {
                    return this.removed ? this : (a = c(a).split(j), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this.transform(this._.transform.concat([
                        ["t", a, b]
                    ])), this)
                }, C.transform = function(c) {
                    var d = this._;
                    if (null == c) return d.transform;
                    if (a._extractTransform(this, c), this.clip && q(this.clip, {
                            transform: this.matrix.invert()
                        }), this.pattern && u(this), this.node && q(this.node, {
                            transform: this.matrix
                        }), 1 != d.sx || 1 != d.sy) {
                        var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": e
                        })
                    }
                    return d.transform = this.matrix.toTransformString(), this
                }, C.hide = function() {
                    return this.removed || (this.node.style.display = "none"), this
                }, C.show = function() {
                    return this.removed || (this.node.style.display = ""), this
                }, C.remove = function() {
                    var b = A(this.node);
                    if (!this.removed && b.parentNode) {
                        var c = this.paper;
                        c.__set__ && c.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && c.defs.removeChild(this.gradient), a._tear(this, c), b.parentNode.removeChild(b), this.removeData();
                        for (var d in this) this[d] = "function" == typeof this[d] ? a._removedFactory(d) : null;
                        this.removed = !0
                    }
                }, C._getBBox = function() {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var a = !0
                    }
                    var b, c = !1;
                    this.paper.canvas.parentElement ? b = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (b = this.paper.canvas.parentNode.style), b && "none" == b.display && (c = !0, b.display = "");
                    var d = {};
                    try {
                        d = this.node.getBBox()
                    } catch (a) {
                        d = {
                            x: this.node.clientLeft,
                            y: this.node.clientTop,
                            width: this.node.clientWidth,
                            height: this.node.clientHeight
                        }
                    } finally {
                        d = d || {}, c && (b.display = "none")
                    }
                    return a && this.hide(), d
                }, C.attr = function(c, d) {
                    if (this.removed) return this;
                    if (null == c) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && a.is(c, "string")) {
                        if ("fill" == c && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == c) return this._.transform;
                        for (var g = c.split(j), h = {}, i = 0, l = g.length; l > i; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
                        return l - 1 ? h : h[g[0]]
                    }
                    if (null == d && a.is(c, "array")) {
                        for (h = {}, i = 0, l = c.length; l > i; i++) h[c[i]] = this.attr(c[i]);
                        return h
                    }
                    if (null != d) {
                        var m = {};
                        m[c] = d
                    } else null != c && a.is(c, "object") && (m = c);
                    for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
                    for (n in this.paper.customAttributes)
                        if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
                            var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                            this.attrs[n] = m[n];
                            for (var p in o) o[b](p) && (m[p] = o[p])
                        }
                    return y(this, m), this
                }, C.toFront = function() {
                    if (this.removed) return this;
                    var b = A(this.node);
                    b.parentNode.appendChild(b);
                    var c = this.paper;
                    return c.top != this && a._tofront(this, c), this
                }, C.toBack = function() {
                    if (this.removed) return this;
                    var b = A(this.node),
                        c = b.parentNode;
                    c.insertBefore(b, c.firstChild), a._toback(this, this.paper);
                    this.paper;
                    return this
                }, C.insertAfter = function(b) {
                    if (this.removed || !b) return this;
                    var c = A(this.node),
                        d = A(b.node || b[b.length - 1].node);
                    return d.nextSibling ? d.parentNode.insertBefore(c, d.nextSibling) : d.parentNode.appendChild(c), a._insertafter(this, b, this.paper), this
                }, C.insertBefore = function(b) {
                    if (this.removed || !b) return this;
                    var c = A(this.node),
                        d = A(b.node || b[0].node);
                    return d.parentNode.insertBefore(c, d), a._insertbefore(this, b, this.paper), this
                }, C.blur = function(b) {
                    var c = this;
                    if (0 != +b) {
                        var d = q("filter"),
                            e = q("feGaussianBlur");
                        c.attrs.blur = b, d.id = a.createUUID(), q(e, {
                            stdDeviation: +b || 1.5
                        }), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, {
                            filter: "url(#" + d.id + ")"
                        })
                    } else c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), c.node.removeAttribute("filter");
                    return c
                }, a._engine.circle = function(a, b, c, d) {
                    var e = q("circle");
                    a.canvas && a.canvas.appendChild(e);
                    var f = new B(e, a);
                    return f.attrs = {
                        cx: b,
                        cy: c,
                        r: d,
                        fill: "none",
                        stroke: "#000"
                    }, f.type = "circle", q(e, f.attrs), f
                }, a._engine.rect = function(a, b, c, d, e, f) {
                    var g = q("rect");
                    a.canvas && a.canvas.appendChild(g);
                    var h = new B(g, a);
                    return h.attrs = {
                        x: b,
                        y: c,
                        width: d,
                        height: e,
                        rx: f || 0,
                        ry: f || 0,
                        fill: "none",
                        stroke: "#000"
                    }, h.type = "rect", q(g, h.attrs), h
                }, a._engine.ellipse = function(a, b, c, d, e) {
                    var f = q("ellipse");
                    a.canvas && a.canvas.appendChild(f);
                    var g = new B(f, a);
                    return g.attrs = {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e,
                        fill: "none",
                        stroke: "#000"
                    }, g.type = "ellipse", q(f, g.attrs), g
                }, a._engine.image = function(a, b, c, d, e, f) {
                    var g = q("image");
                    q(g, {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        preserveAspectRatio: "none"
                    }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
                    var h = new B(g, a);
                    return h.attrs = {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        src: b
                    }, h.type = "image", h
                }, a._engine.text = function(b, c, d, e) {
                    var f = q("text");
                    b.canvas && b.canvas.appendChild(f);
                    var g = new B(f, b);
                    return g.attrs = {
                        x: c,
                        y: d,
                        "text-anchor": "middle",
                        text: e,
                        "font-family": a._availableAttrs["font-family"],
                        "font-size": a._availableAttrs["font-size"],
                        stroke: "none",
                        fill: "#000"
                    }, g.type = "text", y(g, g.attrs), g
                }, a._engine.setSize = function(a, b) {
                    return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, a._engine.create = function() {
                    var b = a._getContainer.apply(0, arguments),
                        c = b && b.container,
                        d = b.x,
                        e = b.y,
                        f = b.width,
                        g = b.height;
                    if (!c) throw new Error("SVG container not found.");
                    var h, i = q("svg"),
                        j = "overflow:hidden;";
                    return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(i, {
                        height: g,
                        version: 1.1,
                        width: f,
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }), 1 == c ? (i.style.cssText = j + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(i), h = 1) : (i.style.cssText = j + "position:relative", c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i)), c = new a._Paper, c.width = f, c.height = g, c.canvas = i, c.clear(), c._left = c._top = 0, h && (c.renderfix = function() {}), c.renderfix(), c
                }, a._engine.setViewBox = function(a, b, c, d, e) {
                    k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
                    var f, h, i = this.getSize(),
                        j = g(c / i.width, d / i.height),
                        l = this.top,
                        n = e ? "xMidYMid meet" : "xMinYMin";
                    for (null == a ? (this._vbSize && (j = 1), delete this._vbSize, f = "0 0 " + this.width + m + this.height) : (this._vbSize = j, f = a + m + b + m + c + m + d), q(this.canvas, {
                            viewBox: f,
                            preserveAspectRatio: n
                        }); j && l;) h = "stroke-width" in l.attrs ? l.attrs["stroke-width"] : 1, l.attr({
                        "stroke-width": h
                    }), l._.dirty = 1, l._.dirtyT = 1, l = l.prev;
                    return this._viewBox = [a, b, c, d, !!e], this
                }, a.prototype.renderfix = function() {
                    var a, b = this.canvas,
                        c = b.style;
                    try {
                        a = b.getScreenCTM() || b.createSVGMatrix()
                    } catch (c) {
                        a = b.createSVGMatrix()
                    }
                    var d = -a.e % 1,
                        e = -a.f % 1;
                    (d || e) && (d && (this._left = (this._left + d) % 1, c.left = this._left + "px"), e && (this._top = (this._top + e) % 1, c.top = this._top + "px"))
                }, a.prototype.clear = function() {
                    a.eve("raphael.clear", this);
                    for (var b = this.canvas; b.firstChild;) b.removeChild(b.firstChild);
                    this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël " + a.version)), b.appendChild(this.desc), b.appendChild(this.defs = q("defs"))
                }, a.prototype.remove = function() {
                    k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                    for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null
                };
                var D = a.st;
                for (var E in C) C[b](E) && !D[b](E) && (D[E] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(E))
            }
        }.apply(b, d)) && (a.exports = e)
    }, function(a, b, c) {
        var d, e;
        d = [c(1)], void 0 !== (e = function(a) {
            if (!a || a.vml) {
                var b = "hasOwnProperty",
                    c = String,
                    d = parseFloat,
                    e = Math,
                    f = e.round,
                    g = e.max,
                    h = e.min,
                    i = e.abs,
                    j = "fill",
                    k = /[, ]+/,
                    l = a.eve,
                    m = " ",
                    n = "",
                    o = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    },
                    p = /([clmz]),?([^clmz]*)/gi,
                    q = / progid:\S+Blur\([^\)]+\)/g,
                    r = /-?[^,\s-]+/g,
                    s = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                    t = 21600,
                    u = {
                        path: 1,
                        rect: 1,
                        image: 1
                    },
                    v = {
                        circle: 1,
                        ellipse: 1
                    },
                    w = function(b) {
                        var d = /[ahqstv]/gi,
                            e = a._pathToAbsolute;
                        if (c(b).match(d) && (e = a._path2curve), d = /[clmz]/g, e == a._pathToAbsolute && !c(b).match(d)) {
                            var g = c(b).replace(p, function(a, b, c) {
                                var d = [],
                                    e = "m" == b.toLowerCase(),
                                    g = o[b];
                                return c.replace(r, function(a) {
                                    e && 2 == d.length && (g += d + o["m" == b ? "l" : "L"], d = []), d.push(f(a * t))
                                }), g + d
                            });
                            return g
                        }
                        var h, i, j = e(b);
                        g = [];
                        for (var k = 0, l = j.length; l > k; k++) {
                            h = j[k], "z" == (i = j[k][0].toLowerCase()) && (i = "x");
                            for (var q = 1, s = h.length; s > q; q++) i += f(h[q] * t) + (q != s - 1 ? "," : n);
                            g.push(i)
                        }
                        return g.join(m)
                    },
                    x = function(b, c, d) {
                        var e = a.matrix();
                        return e.rotate(-b, .5, .5), {
                            dx: e.x(c, d),
                            dy: e.y(c, d)
                        }
                    },
                    y = function(a, b, c, d, e, f) {
                        var g = a._,
                            h = a.matrix,
                            k = g.fillpos,
                            l = a.node,
                            n = l.style,
                            o = 1,
                            p = "",
                            q = t / b,
                            r = t / c;
                        if (n.visibility = "hidden", b && c) {
                            if (l.coordsize = i(q) + m + i(r), n.rotation = f * (0 > b * c ? -1 : 1), f) {
                                var s = x(f, d, e);
                                d = s.dx, e = s.dy
                            }
                            if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), n.flip = p, l.coordorigin = d * -q + m + e * -r, k || g.fillsize) {
                                var u = l.getElementsByTagName(j);
                                u = u && u[0], l.removeChild(u), k && (s = x(f, h.x(k[0], k[1]), h.y(k[0], k[1])), u.position = s.dx * o + m + s.dy * o), g.fillsize && (u.size = g.fillsize[0] * i(b) + m + g.fillsize[1] * i(c)), l.appendChild(u)
                            }
                            n.visibility = "visible"
                        }
                    };
                a.toString = function() {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                };
                var z = function(a, b, d) {
                        for (var e = c(b).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                h = e[g];
                                break;
                            case "wide":
                            case "narrow":
                                j = e[g];
                                break;
                            case "long":
                            case "short":
                                i = e[g]
                        }
                        var k = a.node.getElementsByTagName("stroke")[0];
                        k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
                    },
                    A = function(e, i) {
                        e.attrs = e.attrs || {};
                        var l = e.node,
                            o = e.attrs,
                            p = l.style,
                            q = u[e.type] && (i.x != o.x || i.y != o.y || i.width != o.width || i.height != o.height || i.cx != o.cx || i.cy != o.cy || i.rx != o.rx || i.ry != o.ry || i.r != o.r),
                            r = v[e.type] && (o.cx != i.cx || o.cy != i.cy || o.r != i.r || o.rx != i.rx || o.ry != i.ry),
                            s = e;
                        for (var x in i) i[b](x) && (o[x] = i[x]);
                        if (q && (o.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || q) && (l.path = w(~c(o.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(o.path) : o.path), e._.dirty = 1, "image" == e.type && (e._.fillpos = [o.x, o.y], e._.fillsize = [o.width, o.height], y(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), r) {
                            var A = +o.cx,
                                C = +o.cy,
                                D = +o.rx || +o.r || 0,
                                F = +o.ry || +o.r || 0;
                            l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((A - D) * t), f((C - F) * t), f((A + D) * t), f((C + F) * t), f(A * t)), e._.dirty = 1
                        }
                        if ("clip-rect" in i) {
                            var G = c(i["clip-rect"]).split(k);
                            if (4 == G.length) {
                                G[2] = +G[2] + +G[0], G[3] = +G[3] + +G[1];
                                var H = l.clipRect || a._g.doc.createElement("div"),
                                    I = H.style;
                                I.clip = a.format("rect({1}px {2}px {3}px {0}px)", G), l.clipRect || (I.position = "absolute", I.top = 0, I.left = 0, I.width = e.paper.width + "px", I.height = e.paper.height + "px", l.parentNode.insertBefore(H, l), H.appendChild(l), l.clipRect = H)
                            }
                            i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                        }
                        if (e.textpath) {
                            var J = e.textpath.style;
                            i.font && (J.font = i.font), i["font-family"] && (J.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, n) + '"'), i["font-size"] && (J.fontSize = i["font-size"]), i["font-weight"] && (J.fontWeight = i["font-weight"]), i["font-style"] && (J.fontStyle = i["font-style"])
                        }
                        if ("arrow-start" in i && z(s, i["arrow-start"]), "arrow-end" in i && z(s, i["arrow-end"], 1), null != i.opacity || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                            var K = l.getElementsByTagName(j);
                            if (K = K && K[0], !K && (K = E(j)), "image" == e.type && i.src && (K.src = i.src), i.fill && (K.on = !0), null != K.on && "none" != i.fill && null !== i.fill || (K.on = !1), K.on && i.fill) {
                                var L = c(i.fill).match(a._ISURL);
                                if (L) {
                                    K.parentNode == l && l.removeChild(K), K.rotate = !0, K.src = L[1], K.type = "tile";
                                    var M = e.getBBox(1);
                                    K.position = M.x + m + M.y, e._.fillpos = [M.x, M.y], a._preload(L[1], function() {
                                        e._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else K.color = a.getRGB(i.fill).hex, K.src = n, K.type = "solid", a.getRGB(i.fill).error && (s.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != c(i.fill).charAt()) && B(s, i.fill, K) && (o.fill = "none", o.gradient = i.fill, K.rotate = !1)
                            }
                            if ("fill-opacity" in i || "opacity" in i) {
                                var N = ((+o["fill-opacity"] + 1 || 2) - 1) * ((+o.opacity + 1 || 2) - 1) * ((+a.getRGB(i.fill).o + 1 || 2) - 1);
                                N = h(g(N, 0), 1), K.opacity = N, K.src && (K.color = "none")
                            }
                            l.appendChild(K);
                            var O = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                                P = !1;
                            !O && (P = O = E("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (O.on = !0), ("none" == i.stroke || null === i.stroke || null == O.on || 0 == i.stroke || 0 == i["stroke-width"]) && (O.on = !1);
                            var Q = a.getRGB(i.stroke);
                            O.on && i.stroke && (O.color = Q.hex), N = ((+o["stroke-opacity"] + 1 || 2) - 1) * ((+o.opacity + 1 || 2) - 1) * ((+Q.o + 1 || 2) - 1);
                            var R = .75 * (d(i["stroke-width"]) || 1);
                            if (N = h(g(N, 0), 1), null == i["stroke-width"] && (R = o["stroke-width"]), i["stroke-width"] && (O.weight = R), R && 1 > R && (N *= R) && (O.weight = 1), O.opacity = N, i["stroke-linejoin"] && (O.joinstyle = i["stroke-linejoin"] || "miter"), O.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (O.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in i) {
                                var S = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                O.dashstyle = S[b](i["stroke-dasharray"]) ? S[i["stroke-dasharray"]] : n
                            }
                            P && l.appendChild(O)
                        }
                        if ("text" == s.type) {
                            s.paper.canvas.style.display = n;
                            var T = s.paper.span,
                                U = o.font && o.font.match(/\d+(?:\.\d*)?(?=px)/);
                            p = T.style, o.font && (p.font = o.font), o["font-family"] && (p.fontFamily = o["font-family"]), o["font-weight"] && (p.fontWeight = o["font-weight"]), o["font-style"] && (p.fontStyle = o["font-style"]), U = d(o["font-size"] || U && U[0]) || 10, p.fontSize = 100 * U + "px", s.textpath.string && (T.innerHTML = c(s.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var V = T.getBoundingClientRect();
                            s.W = o.w = (V.right - V.left) / 100, s.H = o.h = (V.bottom - V.top) / 100, s.X = o.x, s.Y = o.y + s.H / 2, ("x" in i || "y" in i) && (s.path.v = a.format("m{0},{1}l{2},{1}", f(o.x * t), f(o.y * t), f(o.x * t) + 1));
                            for (var W = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], X = 0, Y = W.length; Y > X; X++)
                                if (W[X] in i) {
                                    s._.dirty = 1;
                                    break
                                }
                            switch (o["text-anchor"]) {
                                case "start":
                                    s.textpath.style["v-text-align"] = "left", s.bbx = s.W / 2;
                                    break;
                                case "end":
                                    s.textpath.style["v-text-align"] = "right", s.bbx = -s.W / 2;
                                    break;
                                default:
                                    s.textpath.style["v-text-align"] = "center", s.bbx = 0
                            }
                            s.textpath.style["v-text-kern"] = !0
                        }
                    },
                    B = function(b, f, g) {
                        b.attrs = b.attrs || {};
                        var h = (b.attrs, Math.pow),
                            i = "linear",
                            j = ".5 .5";
                        if (b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) {
                                return i = "radial", b && c && (b = d(b), c = d(c), h(b - .5, 2) + h(c - .5, 2) > .25 && (c = e.sqrt(.25 - h(b - .5, 2)) * (2 * (c > .5) - 1) + .5), j = b + m + c), n
                            }), f = f.split(/\s*\-\s*/), "linear" == i) {
                            var k = f.shift();
                            if (k = -d(k), isNaN(k)) return null
                        }
                        var l = a._parseDots(f);
                        if (!l) return null;
                        if (b = b.shape || b.node, l.length) {
                            b.removeChild(g), g.on = !0, g.method = "none", g.color = l[0].color, g.color2 = l[l.length - 1].color;
                            for (var o = [], p = 0, q = l.length; q > p; p++) l[p].offset && o.push(l[p].offset + m + l[p].color);
                            g.colors = o.length ? o.join() : "0% " + g.color, "radial" == i ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = j, g.angle = 0) : (g.type = "gradient", g.angle = (270 - k) % 360), b.appendChild(g)
                        }
                        return 1
                    },
                    C = function(b, c) {
                        this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
                    },
                    D = a.el;
                C.prototype = D, D.constructor = C, D.transform = function(b) {
                    if (null == b) return this._.transform;
                    var d, e = this.paper._viewBoxShift,
                        f = e ? "s" + [e.scale, e.scale] + "-1-1t" + [e.dx, e.dy] : n;
                    e && (d = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || n)), a._extractTransform(this, f + b);
                    var g, h = this.matrix.clone(),
                        i = this.skew,
                        j = this.node,
                        k = ~c(this.attrs.fill).indexOf("-"),
                        l = !c(this.attrs.fill).indexOf("url(");
                    if (h.translate(1, 1), l || k || "image" == this.type)
                        if (i.matrix = "1 0 0 1", i.offset = "0 0", g = h.split(), k && g.noRotation || !g.isSimple) {
                            j.style.filter = h.toFilter();
                            var o = this.getBBox(),
                                p = this.getBBox(1),
                                q = o.x - p.x,
                                r = o.y - p.y;
                            j.coordorigin = q * -t + m + r * -t, y(this, 1, 1, q, r, 0)
                        } else j.style.filter = n, y(this, g.scalex, g.scaley, g.dx, g.dy, g.rotate);
                    else j.style.filter = n, i.matrix = c(h), i.offset = h.offset();
                    return null !== d && (this._.transform = d, a._extractTransform(this, d)), this
                }, D.rotate = function(a, b, e) {
                    if (this.removed) return this;
                    if (null != a) {
                        if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e), null == b || null == e) {
                            var f = this.getBBox(1);
                            b = f.x + f.width / 2, e = f.y + f.height / 2
                        }
                        return this._.dirtyT = 1, this.transform(this._.transform.concat([
                            ["r", a, b, e]
                        ])), this
                    }
                }, D.translate = function(a, b) {
                    return this.removed ? this : (a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([
                        ["t", a, b]
                    ])), this)
                }, D.scale = function(a, b, e, f) {
                    if (this.removed) return this;
                    if (a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == b && (b = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
                        ["s", a, b, e, f]
                    ])), this._.dirtyT = 1, this
                }, D.hide = function() {
                    return !this.removed && (this.node.style.display = "none"), this
                }, D.show = function() {
                    return !this.removed && (this.node.style.display = n), this
                }, D.auxGetBBox = a.el.getBBox, D.getBBox = function() {
                    var a = this.auxGetBBox();
                    if (this.paper && this.paper._viewBoxShift) {
                        var b = {},
                            c = 1 / this.paper._viewBoxShift.scale;
                        return b.x = a.x - this.paper._viewBoxShift.dx, b.x *= c, b.y = a.y - this.paper._viewBoxShift.dy, b.y *= c, b.width = a.width * c, b.height = a.height * c, b.x2 = b.x + b.width, b.y2 = b.y + b.height, b
                    }
                    return a
                }, D._getBBox = function() {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, D.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                        for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
                        this.removed = !0
                    }
                }, D.attr = function(c, d) {
                    if (this.removed) return this;
                    if (null == c) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && a.is(c, "string")) {
                        if (c == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var g = c.split(k), h = {}, i = 0, m = g.length; m > i; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
                        return m - 1 ? h : h[g[0]]
                    }
                    if (this.attrs && null == d && a.is(c, "array")) {
                        for (h = {}, i = 0, m = c.length; m > i; i++) h[c[i]] = this.attr(c[i]);
                        return h
                    }
                    var n;
                    null != d && (n = {}, n[c] = d), null == d && a.is(c, "object") && (n = c);
                    for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
                    if (n) {
                        for (o in this.paper.customAttributes)
                            if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
                                var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                                this.attrs[o] = n[o];
                                for (var q in p) p[b](q) && (n[q] = p[q])
                            }
                        n.text && "text" == this.type && (this.textpath.string = n.text), A(this, n)
                    }
                    return this
                }, D.toFront = function() {
                    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper), this
                }, D.toBack = function() {
                    return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper)), this)
                }, D.insertAfter = function(b) {
                    return this.removed ? this : (b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper), this)
                }, D.insertBefore = function(b) {
                    return this.removed ? this : (b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper), this)
                }, D.blur = function(b) {
                    var c = this.node.runtimeStyle,
                        d = c.filter;
                    return d = d.replace(q, n), 0 != +b ? (this.attrs.blur = b, c.filter = d + m + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f(+b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur), this
                }, a._engine.path = function(a, b) {
                    var c = E("shape");
                    c.style.cssText = s, c.coordsize = t + m + t, c.coordorigin = b.coordorigin;
                    var d = new C(c, b),
                        e = {
                            fill: "none",
                            stroke: "#000"
                        };
                    a && (e.path = a), d.type = "path", d.path = [], d.Path = n, A(d, e), b.canvas && b.canvas.appendChild(c);
                    var f = E("skew");
                    return f.on = !0, c.appendChild(f), d.skew = f, d.transform(n), d
                }, a._engine.rect = function(b, c, d, e, f, g) {
                    var h = a._rectPath(c, d, e, f, g),
                        i = b.path(h),
                        j = i.attrs;
                    return i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
                }, a._engine.ellipse = function(a, b, c, d, e) {
                    var f = a.path();
                    f.attrs;
                    return f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", A(f, {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e
                    }), f
                }, a._engine.circle = function(a, b, c, d) {
                    var e = a.path();
                    e.attrs;
                    return e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", A(e, {
                        cx: b,
                        cy: c,
                        r: d
                    }), e
                }, a._engine.image = function(b, c, d, e, f, g) {
                    var h = a._rectPath(d, e, f, g),
                        i = b.path(h).attr({
                            stroke: "none"
                        }),
                        k = i.attrs,
                        l = i.node,
                        m = l.getElementsByTagName(j)[0];
                    return k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = c, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), y(i, 1, 1, 0, 0, 0), i
                }, a._engine.text = function(b, d, e, g) {
                    var h = E("shape"),
                        i = E("path"),
                        j = E("textpath");
                    d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * t), f(e * t), f(d * t) + 1), i.textpathok = !0, j.string = c(g), j.on = !0, h.style.cssText = s, h.coordsize = t + m + t, h.coordorigin = "0 0";
                    var k = new C(h, b),
                        l = {
                            fill: "#000",
                            stroke: "none",
                            font: a._availableAttrs.font,
                            text: g
                        };
                    k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, A(k, l), h.appendChild(j), h.appendChild(i), b.canvas.appendChild(h);
                    var o = E("skew");
                    return o.on = !0, h.appendChild(o), k.skew = o, k.transform(n), k
                }, a._engine.setSize = function(b, c) {
                    var d = this.canvas.style;
                    return this.width = b, this.height = c, b == +b && (b += "px"), c == +c && (c += "px"), d.width = b, d.height = c, d.clip = "rect(0 " + b + " " + c + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox), this
                }, a._engine.setViewBox = function(b, c, d, e, f) {
                    a.eve("raphael.setViewBox", this, this._viewBox, [b, c, d, e, f]);
                    var g, h, i = this.getSize(),
                        j = i.width,
                        k = i.height;
                    return f && (g = k / e, h = j / d, j > d * g && (b -= (j - d * g) / 2 / g), k > e * h && (c -= (k - e * h) / 2 / h)), this._viewBox = [b, c, d, e, !!f], this._viewBoxShift = {
                        dx: -b,
                        dy: -c,
                        scale: i
                    }, this.forEach(function(a) {
                        a.transform("...")
                    }), this
                };
                var E;
                a._engine.initWin = function(a) {
                    var b = a.document;
                    b.styleSheets.length < 31 ? b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : b.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), E = function(a) {
                            return b.createElement("<rvml:" + a + ' class="rvml">')
                        }
                    } catch (a) {
                        E = function(a) {
                            return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, a._engine.initWin(a._g.win), a._engine.create = function() {
                    var b = a._getContainer.apply(0, arguments),
                        c = b.container,
                        d = b.height,
                        e = b.width,
                        f = b.x,
                        g = b.y;
                    if (!c) throw new Error("VML container not found.");
                    var h = new a._Paper,
                        i = h.canvas = a._g.doc.createElement("div"),
                        j = i.style;
                    return f = f || 0, g = g || 0, e = e || 512, d = d || 342, h.width = e, h.height = d, e == +e && (e += "px"), d == +d && (d += "px"), h.coordsize = 216e5 + m + 216e5, h.coordorigin = "0 0", h.span = a._g.doc.createElement("span"), h.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", i.appendChild(h.span), j.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", e, d), 1 == c ? (a._g.doc.body.appendChild(i), j.left = f + "px", j.top = g + "px", j.position = "absolute") : c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i), h.renderfix = function() {}, h
                }, a.prototype.clear = function() {
                    a.eve("raphael.clear", this), this.canvas.innerHTML = n, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, a.prototype.remove = function() {
                    a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                    for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
                    return !0
                };
                var F = a.st;
                for (var G in D) D[b](G) && !F[b](G) && (F[G] = function(a) {
                    return function() {
                        var b = arguments;
                        return this.forEach(function(c) {
                            c[a].apply(c, b)
                        })
                    }
                }(G))
            }
        }.apply(b, d)) && (a.exports = e)
    }])
}),
function() {
    var a, b, c, d, e = [].slice,
        f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = {}.hasOwnProperty,
        h = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) g.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        i = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = window.Morris = {}, a = jQuery, b.EventEmitter = function() {
        function a() {}
        return a.prototype.on = function(a, b) {
            return null == this.handlers && (this.handlers = {}), null == this.handlers[a] && (this.handlers[a] = []), this.handlers[a].push(b), this
        }, a.prototype.fire = function() {
            var a, b, c, d, f, g, h;
            if (c = arguments[0], a = 2 <= arguments.length ? e.call(arguments, 1) : [], null != this.handlers && null != this.handlers[c]) {
                for (g = this.handlers[c], h = [], d = 0, f = g.length; d < f; d++) b = g[d], h.push(b.apply(null, a));
                return h
            }
        }, a
    }(), b.commas = function(a) {
        var b, c, d, e;
        return null != a ? (d = a < 0 ? "-" : "", b = Math.abs(a), c = Math.floor(b).toFixed(0), d += c.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), e = b.toString(), e.length > c.length && (d += e.slice(c.length)), d) : "-"
    }, b.pad2 = function(a) {
        return (a < 10 ? "0" : "") + a
    }, b.Grid = function(c) {
        function d(b) {
            this.resizeHandler = f(this.resizeHandler, this);
            var c = this;
            if ("string" == typeof b.element ? this.el = a(document.getElementById(b.element)) : this.el = a(b.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
            "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = a.extend({}, this.gridDefaults, this.defaults || {}, b), "string" == typeof this.options.units && (this.options.postUnits = b.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(a) {
                var b, d, e, f, g;
                return d = c.el.offset(), g = a.pageX - d.left, c.selectFrom ? (b = c.data[c.hitTest(Math.min(g, c.selectFrom))]._x, e = c.data[c.hitTest(Math.max(g, c.selectFrom))]._x, f = e - b, c.selectionRect.attr({
                    x: b,
                    width: f
                })) : c.fire("hovermove", g, a.pageY - d.top)
            }), this.el.bind("mouseleave", function(a) {
                return c.selectFrom && (c.selectionRect.hide(), c.selectFrom = null), c.fire("hoverout")
            }), this.el.bind("touchstart touchmove touchend", function(a) {
                var b, d;
                return d = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], b = c.el.offset(), c.fire("hovermove", d.pageX - b.left, d.pageY - b.top)
            }), this.el.bind("click", function(a) {
                var b;
                return b = c.el.offset(), c.fire("gridclick", a.pageX - b.left, a.pageY - b.top)
            }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
                fill: this.options.rangeSelectColor,
                stroke: !1
            }).toBack().hide(), this.el.bind("mousedown", function(a) {
                var b;
                return b = c.el.offset(), c.startRange(a.pageX - b.left)
            }), this.el.bind("mouseup", function(a) {
                var b;
                return b = c.el.offset(), c.endRange(a.pageX - b.left), c.fire("hovermove", a.pageX - b.left, a.pageY - b.top)
            })), this.options.resize && a(window).bind("resize", function(a) {
                return null != c.timeoutId && window.clearTimeout(c.timeoutId), c.timeoutId = window.setTimeout(c.resizeHandler, 100)
            }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit()
        }
        return h(d, c), d.prototype.gridDefaults = {
            dateFormat: null,
            axes: !0,
            grid: !0,
            gridLineColor: "#aaa",
            gridStrokeWidth: .5,
            gridTextColor: "#888",
            gridTextSize: 12,
            gridTextFamily: "sans-serif",
            gridTextWeight: "normal",
            hideHover: !1,
            yLabelFormat: null,
            xLabelAngle: 0,
            numLines: 5,
            padding: 25,
            parseTime: !0,
            postUnits: "",
            preUnits: "",
            ymax: "auto",
            ymin: "auto 0",
            goals: [],
            goalStrokeWidth: 1,
            goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
            events: [],
            eventStrokeWidth: 1,
            eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
            rangeSelect: null,
            rangeSelectColor: "#eef",
            resize: !1
        }, d.prototype.setData = function(a, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
            return null == c && (c = !0), this.options.data = a, null == a || 0 === a.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (o = this.cumulative ? 0 : null, p = this.cumulative ? 0 : null, this.options.goals.length > 0 && (h = Math.min.apply(Math, this.options.goals), g = Math.max.apply(Math, this.options.goals), p = null != p ? Math.min(p, h) : h, o = null != o ? Math.max(o, g) : g),
                this.data = function() {
                    var c, d, g;
                    for (g = [], f = c = 0, d = a.length; c < d; f = ++c) j = a[f], i = {
                        src: j
                    }, i.label = j[this.options.xkey], this.options.parseTime ? (i.x = b.parseDate(i.label), this.options.dateFormat ? i.label = this.options.dateFormat(i.x) : "number" == typeof i.label && (i.label = new Date(i.label).toString())) : (i.x = f, this.options.xLabelFormat && (i.label = this.options.xLabelFormat(i))), l = 0, i.y = function() {
                        var a, b, c, d;
                        for (c = this.options.ykeys, d = [], e = a = 0, b = c.length; a < b; e = ++a) n = c[e], q = j[n], "string" == typeof q && (q = parseFloat(q)), null != q && "number" != typeof q && (q = null), null != q && (this.cumulative ? l += q : null != o ? (o = Math.max(q, o), p = Math.min(q, p)) : o = p = q), this.cumulative && null != l && (o = Math.max(l, o), p = Math.min(l, p)), d.push(q);
                        return d
                    }.call(this), g.push(i);
                    return g
                }.call(this), this.options.parseTime && (this.data = this.data.sort(function(a, b) {
                    return (a.x > b.x) - (b.x > a.x)
                })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.events.length > 0 && (this.options.parseTime ? this.events = function() {
                    var a, c, e, f;
                    for (e = this.options.events, f = [], a = 0, c = e.length; a < c; a++) d = e[a], f.push(b.parseDate(d));
                    return f
                }.call(this) : this.events = this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", p), this.ymax = this.yboundary("max", o), this.ymin === this.ymax && (p && (this.ymin -= 1), this.ymax += 1), !0 !== (r = this.options.axes) && "both" !== r && "y" !== r && !0 !== this.options.grid || (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (k = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() {
                    var a, b, c;
                    for (c = [], m = a = this.ymin, b = this.ymax; k > 0 ? a <= b : a >= b; m = a += k) c.push(m);
                    return c
                }.call(this))), this.dirty = !0, c ? this.redraw() : void 0)
        }, d.prototype.yboundary = function(a, b) {
            var c, d;
            return c = this.options["y" + a], "string" == typeof c ? "auto" === c.slice(0, 4) ? c.length > 5 ? (d = parseInt(c.slice(5), 10), null == b ? d : Math[a](b, d)) : null != b ? b : 0 : parseInt(c, 10) : c
        }, d.prototype.autoGridLines = function(a, b, c) {
            var d, e, f, g, h, i, j, k, l;
            return h = b - a, l = Math.floor(Math.log(h) / Math.log(10)), j = Math.pow(10, l), e = Math.floor(a / j) * j, d = Math.ceil(b / j) * j, i = (d - e) / (c - 1), 1 === j && i > 1 && Math.ceil(i) !== i && (i = Math.ceil(i), d = e + i * (c - 1)), e < 0 && d > 0 && (e = Math.floor(a / i) * i, d = Math.ceil(b / i) * i), i < 1 ? (g = Math.floor(Math.log(i) / Math.log(10)), f = function() {
                var a, b;
                for (b = [], k = a = e; i > 0 ? a <= d : a >= d; k = a += i) b.push(parseFloat(k.toFixed(1 - g)));
                return b
            }()) : f = function() {
                var a, b;
                for (b = [], k = a = e; i > 0 ? a <= d : a >= d; k = a += i) b.push(k);
                return b
            }(), f
        }, d.prototype._calc = function() {
            var a, b, c, d, e, f, g, h;
            if (e = this.el.width(), c = this.el.height(), (this.elementWidth !== e || this.elementHeight !== c || this.dirty) && (this.elementWidth = e, this.elementHeight = c, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, !0 !== (g = this.options.axes) && "both" !== g && "y" !== g || (f = function() {
                    var a, c, d, e;
                    for (d = this.grid, e = [], a = 0, c = d.length; a < c; a++) b = d[a], e.push(this.measureText(this.yAxisFormat(b)).width);
                    return e
                }.call(this), this.left += Math.max.apply(Math, f)), !0 !== (h = this.options.axes) && "both" !== h && "x" !== h || (a = function() {
                    var a, b, c;
                    for (c = [], d = a = 0, b = this.data.length; 0 <= b ? a < b : a > b; d = 0 <= b ? ++a : --a) c.push(this.measureText(this.data[d].text, -this.options.xLabelAngle).height);
                    return c
                }.call(this), this.bottom -= Math.max.apply(Math, a)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc)) return this.calc()
        }, d.prototype.transY = function(a) {
            return this.bottom - (a - this.ymin) * this.dy
        }, d.prototype.transX = function(a) {
            return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (a - this.xmin) * this.dx
        }, d.prototype.redraw = function() {
            if (this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw) return this.draw()
        }, d.prototype.measureText = function(a, b) {
            var c, d;
            return null == b && (b = 0), d = this.raphael.text(100, 100, a).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(b), c = d.getBBox(), d.remove(), c
        }, d.prototype.yAxisFormat = function(a) {
            return this.yLabelFormat(a)
        }, d.prototype.yLabelFormat = function(a) {
            return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(a) : "" + this.options.preUnits + b.commas(a) + this.options.postUnits
        }, d.prototype.drawGrid = function() {
            var a, b, c, d, e, f, g, h;
            if (!1 !== this.options.grid || !0 === (e = this.options.axes) || "both" === e || "y" === e) {
                for (f = this.grid, h = [], c = 0, d = f.length; c < d; c++) a = f[c], b = this.transY(a), !0 !== (g = this.options.axes) && "both" !== g && "y" !== g || this.drawYAxisLabel(this.left - this.options.padding / 2, b, this.yAxisFormat(a)), this.options.grid ? h.push(this.drawGridLine("M" + this.left + "," + b + "H" + (this.left + this.width))) : h.push(void 0);
                return h
            }
        }, d.prototype.drawGoals = function() {
            var a, b, c, d, e, f, g;
            for (f = this.options.goals, g = [], c = d = 0, e = f.length; d < e; c = ++d) b = f[c], a = this.options.goalLineColors[c % this.options.goalLineColors.length], g.push(this.drawGoal(b, a));
            return g
        }, d.prototype.drawEvents = function() {
            var a, b, c, d, e, f, g;
            for (f = this.events, g = [], c = d = 0, e = f.length; d < e; c = ++d) b = f[c], a = this.options.eventLineColors[c % this.options.eventLineColors.length], g.push(this.drawEvent(b, a));
            return g
        }, d.prototype.drawGoal = function(a, b) {
            return this.raphael.path("M" + this.left + "," + this.transY(a) + "H" + this.right).attr("stroke", b).attr("stroke-width", this.options.goalStrokeWidth)
        }, d.prototype.drawEvent = function(a, b) {
            return this.raphael.path("M" + this.transX(a) + "," + this.bottom + "V" + this.top).attr("stroke", b).attr("stroke-width", this.options.eventStrokeWidth)
        }, d.prototype.drawYAxisLabel = function(a, b, c) {
            return this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
        }, d.prototype.drawGridLine = function(a) {
            return this.raphael.path(a).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
        }, d.prototype.startRange = function(a) {
            return this.hover.hide(), this.selectFrom = a, this.selectionRect.attr({
                x: a,
                width: 0
            }).show()
        }, d.prototype.endRange = function(a) {
            var b, c;
            if (this.selectFrom) return c = Math.min(this.selectFrom, a), b = Math.max(this.selectFrom, a), this.options.rangeSelect.call(this.el, {
                start: this.data[this.hitTest(c)].x,
                end: this.data[this.hitTest(b)].x
            }), this.selectFrom = null
        }, d.prototype.resizeHandler = function() {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, d
    }(b.EventEmitter), b.parseDate = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l;
        return "number" == typeof a ? a : (c = a.match(/^(\d+) Q(\d)$/), e = a.match(/^(\d+)-(\d+)$/), f = a.match(/^(\d+)-(\d+)-(\d+)$/), h = a.match(/^(\d+) W(\d+)$/), i = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), j = a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), c ? new Date(parseInt(c[1], 10), 3 * parseInt(c[2], 10) - 1, 1).getTime() : e ? new Date(parseInt(e[1], 10), parseInt(e[2], 10) - 1, 1).getTime() : f ? new Date(parseInt(f[1], 10), parseInt(f[2], 10) - 1, parseInt(f[3], 10)).getTime() : h ? (k = new Date(parseInt(h[1], 10), 0, 1), 4 !== k.getDay() && k.setMonth(0, 1 + (4 - k.getDay() + 7) % 7), k.getTime() + 6048e5 * parseInt(h[2], 10)) : i ? i[6] ? (g = 0, "Z" !== i[6] && (g = 60 * parseInt(i[8], 10) + parseInt(i[9], 10), "+" === i[7] && (g = 0 - g)), Date.UTC(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10) + g)) : new Date(parseInt(i[1], 10), parseInt(i[2], 10) - 1, parseInt(i[3], 10), parseInt(i[4], 10), parseInt(i[5], 10)).getTime() : j ? (l = parseFloat(j[6]), b = Math.floor(l), d = Math.round(1e3 * (l - b)), j[8] ? (g = 0, "Z" !== j[8] && (g = 60 * parseInt(j[10], 10) + parseInt(j[11], 10), "+" === j[9] && (g = 0 - g)), Date.UTC(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10) + g, b, d)) : new Date(parseInt(j[1], 10), parseInt(j[2], 10) - 1, parseInt(j[3], 10), parseInt(j[4], 10), parseInt(j[5], 10), b, d).getTime()) : new Date(parseInt(a, 10), 0, 1).getTime())
    }, b.Hover = function() {
        function c(c) {
            null == c && (c = {}), this.options = a.extend({}, b.Hover.defaults, c), this.el = a("<div class='" + this.options.class + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
        }
        return c.defaults = {
            class: "morris-hover morris-default-style"
        }, c.prototype.update = function(a, b, c) {
            return a ? (this.html(a), this.show(), this.moveTo(b, c)) : this.hide()
        }, c.prototype.html = function(a) {
            return this.el.html(a)
        }, c.prototype.moveTo = function(a, b) {
            var c, d, e, f, g, h;
            return g = this.options.parent.innerWidth(), f = this.options.parent.innerHeight(), d = this.el.outerWidth(), c = this.el.outerHeight(), e = Math.min(Math.max(0, a - d / 2), g - d), null != b ? (h = b - c - 10) < 0 && (h = b + 10) + c > f && (h = f / 2 - c / 2) : h = f / 2 - c / 2, this.el.css({
                left: e + "px",
                top: parseInt(h) + "px"
            })
        }, c.prototype.show = function() {
            return this.el.show()
        }, c.prototype.hide = function() {
            return this.el.hide()
        }, c
    }(), b.Line = function(a) {
        function c(a) {
            if (this.hilight = f(this.hilight, this), this.onHoverOut = f(this.onHoverOut, this), this.onHoverMove = f(this.onHoverMove, this), this.onGridClick = f(this.onGridClick, this), !(this instanceof b.Line)) return new b.Line(a);
            c.__super__.constructor.call(this, a)
        }
        return h(c, a), c.prototype.init = function() {
            if ("always" !== this.options.hideHover) return this.hover = new b.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)
        }, c.prototype.defaults = {
            lineWidth: 3,
            pointSize: 4,
            lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            pointStrokeWidths: [1],
            pointStrokeColors: ["#ffffff"],
            pointFillColors: [],
            smooth: !0,
            xLabels: "auto",
            xLabelFormat: null,
            xLabelMargin: 24,
            hideHover: !1
        }, c.prototype.calc = function() {
            return this.calcPoints(), this.generatePaths()
        }, c.prototype.calcPoints = function() {
            var a, b, c, d, e, f;
            for (e = this.data, f = [], c = 0, d = e.length; c < d; c++) a = e[c], a._x = this.transX(a.x), a._y = function() {
                var c, d, e, f;
                for (e = a.y, f = [], c = 0, d = e.length; c < d; c++) b = e[c], null != b ? f.push(this.transY(b)) : f.push(b);
                return f
            }.call(this), f.push(a._ymax = Math.min.apply(Math, [this.bottom].concat(function() {
                var c, d, e, f;
                for (e = a._y, f = [], c = 0, d = e.length; c < d; c++) null != (b = e[c]) && f.push(b);
                return f
            }())));
            return f
        }, c.prototype.hitTest = function(a) {
            var b, c, d, e, f;
            if (0 === this.data.length) return null;
            for (f = this.data.slice(1), b = d = 0, e = f.length; d < e && (c = f[b], !(a < (c._x + this.data[b]._x) / 2)); b = ++d);
            return b
        }, c.prototype.onGridClick = function(a, b) {
            var c;
            return c = this.hitTest(a), this.fire("click", c, this.data[c].src, a, b)
        }, c.prototype.onHoverMove = function(a, b) {
            var c;
            return c = this.hitTest(a), this.displayHoverForRow(c)
        }, c.prototype.onHoverOut = function() {
            if (!1 !== this.options.hideHover) return this.displayHoverForRow(null)
        }, c.prototype.displayHoverForRow = function(a) {
            var b;
            return null != a ? ((b = this.hover).update.apply(b, this.hoverContentForRow(a)), this.hilight(a)) : (this.hover.hide(), this.hilight())
        }, c.prototype.hoverContentForRow = function(a) {
            var b, c, d, e, f, g, h;
            for (d = this.data[a], b = "<div class='morris-hover-row-label'>" + d.label + "</div>", h = d.y, c = f = 0, g = h.length; f < g; c = ++f) e = h[c], b += "<div class='morris-hover-point' style='color: " + this.colorFor(d, c, "label") + "'>\n  " + this.options.labels[c] + ":\n  " + this.yLabelFormat(e) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (b = this.options.hoverCallback(a, this.options, b, d.src)), [b, d._x, d._ymax]
        }, c.prototype.generatePaths = function() {
            var a, c, d, e;
            return this.paths = function() {
                var f, g, h, j;
                for (j = [], c = f = 0, g = this.options.ykeys.length; 0 <= g ? f < g : f > g; c = 0 <= g ? ++f : --f) e = "boolean" == typeof this.options.smooth ? this.options.smooth : (h = this.options.ykeys[c], i.call(this.options.smooth, h) >= 0), a = function() {
                    var a, b, e, f;
                    for (e = this.data, f = [], a = 0, b = e.length; a < b; a++) d = e[a], void 0 !== d._y[c] && f.push({
                        x: d._x,
                        y: d._y[c]
                    });
                    return f
                }.call(this), a.length > 1 ? j.push(b.Line.createPath(a, e, this.bottom)) : j.push(null);
                return j
            }.call(this)
        }, c.prototype.draw = function() {
            var a;
            if (!0 !== (a = this.options.axes) && "both" !== a && "x" !== a || this.drawXAxis(), this.drawSeries(), !1 === this.options.hideHover) return this.displayHoverForRow(this.data.length - 1)
        }, c.prototype.drawXAxis = function() {
            var a, c, d, e, f, g, h, i, j, k, l = this;
            for (h = this.bottom + this.options.padding / 2, f = null, e = null, a = function(a, b) {
                    var c, d, g, i, j;
                    return c = l.drawXAxisLabel(l.transX(b), h, a), j = c.getBBox(), c.transform("r" + -l.options.xLabelAngle), d = c.getBBox(), c.transform("t0," + d.height / 2 + "..."), 0 !== l.options.xLabelAngle && (i = -.5 * j.width * Math.cos(l.options.xLabelAngle * Math.PI / 180), c.transform("t" + i + ",0...")), d = c.getBBox(), (null == f || f >= d.x + d.width || null != e && e >= d.x) && d.x >= 0 && d.x + d.width < l.el.width() ? (0 !== l.options.xLabelAngle && (g = 1.25 * l.options.gridTextSize / Math.sin(l.options.xLabelAngle * Math.PI / 180), e = d.x - g), f = d.x - l.options.xLabelMargin) : c.remove()
                }, d = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                    [this.data[0].label, this.data[0].x]
                ] : b.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
                    var a, b, c, d;
                    for (c = this.data, d = [], a = 0, b = c.length; a < b; a++) g = c[a], d.push([g.label, g.x]);
                    return d
                }.call(this), d.reverse(), k = [], i = 0, j = d.length; i < j; i++) c = d[i], k.push(a(c[0], c[1]));
            return k
        }, c.prototype.drawSeries = function() {
            var a, b, c, d, e, f;
            for (this.seriesPoints = [], a = b = d = this.options.ykeys.length - 1; d <= 0 ? b <= 0 : b >= 0; a = d <= 0 ? ++b : --b) this._drawLineFor(a);
            for (f = [], a = c = e = this.options.ykeys.length - 1; e <= 0 ? c <= 0 : c >= 0; a = e <= 0 ? ++c : --c) f.push(this._drawPointFor(a));
            return f
        }, c.prototype._drawPointFor = function(a) {
            var b, c, d, e, f, g;
            for (this.seriesPoints[a] = [], f = this.data, g = [], d = 0, e = f.length; d < e; d++) c = f[d], b = null, null != c._y[a] && (b = this.drawLinePoint(c._x, c._y[a], this.colorFor(c, a, "point"), a)), g.push(this.seriesPoints[a].push(b));
            return g
        }, c.prototype._drawLineFor = function(a) {
            var b;
            if (null !== (b = this.paths[a])) return this.drawLinePath(b, this.colorFor(null, a, "line"), a)
        }, c.createPath = function(a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r;
            for (k = "", c && (g = b.Line.gradients(a)), l = {
                    y: null
                }, h = q = 0, r = a.length; q < r; h = ++q) e = a[h], null != e.y && (null != l.y ? c ? (f = g[h], j = g[h - 1], i = (e.x - l.x) / 4, m = l.x + i, o = Math.min(d, l.y + i * j), n = e.x - i, p = Math.min(d, e.y - i * f), k += "C" + m + "," + o + "," + n + "," + p + "," + e.x + "," + e.y) : k += "L" + e.x + "," + e.y : c && null == g[h] || (k += "M" + e.x + "," + e.y)), l = e;
            return k
        }, c.gradients = function(a) {
            var b, c, d, e, f, g, h, i;
            for (c = function(a, b) {
                    return (a.y - b.y) / (a.x - b.x)
                }, i = [], d = g = 0, h = a.length; g < h; d = ++g) b = a[d], null != b.y ? (e = a[d + 1] || {
                y: null
            }, f = a[d - 1] || {
                y: null
            }, null != f.y && null != e.y ? i.push(c(f, e)) : null != f.y ? i.push(c(f, b)) : null != e.y ? i.push(c(b, e)) : i.push(null)) : i.push(null);
            return i
        }, c.prototype.hilight = function(a) {
            var b, c, d, e, f;
            if (null !== this.prevHilight && this.prevHilight !== a)
                for (b = c = 0, e = this.seriesPoints.length - 1; 0 <= e ? c <= e : c >= e; b = 0 <= e ? ++c : --c) this.seriesPoints[b][this.prevHilight] && this.seriesPoints[b][this.prevHilight].animate(this.pointShrinkSeries(b));
            if (null !== a && this.prevHilight !== a)
                for (b = d = 0, f = this.seriesPoints.length - 1; 0 <= f ? d <= f : d >= f; b = 0 <= f ? ++d : --d) this.seriesPoints[b][a] && this.seriesPoints[b][a].animate(this.pointGrowSeries(b));
            return this.prevHilight = a
        }, c.prototype.colorFor = function(a, b, c) {
            return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, a, b, c) : "point" === c ? this.options.pointFillColors[b % this.options.pointFillColors.length] || this.options.lineColors[b % this.options.lineColors.length] : this.options.lineColors[b % this.options.lineColors.length]
        }, c.prototype.drawXAxisLabel = function(a, b, c) {
            return this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, c.prototype.drawLinePath = function(a, b, c) {
            return this.raphael.path(a).attr("stroke", b).attr("stroke-width", this.lineWidthForSeries(c))
        }, c.prototype.drawLinePoint = function(a, b, c, d) {
            return this.raphael.circle(a, b, this.pointSizeForSeries(d)).attr("fill", c).attr("stroke-width", this.pointStrokeWidthForSeries(d)).attr("stroke", this.pointStrokeColorForSeries(d))
        }, c.prototype.pointStrokeWidthForSeries = function(a) {
            return this.options.pointStrokeWidths[a % this.options.pointStrokeWidths.length]
        }, c.prototype.pointStrokeColorForSeries = function(a) {
            return this.options.pointStrokeColors[a % this.options.pointStrokeColors.length]
        }, c.prototype.lineWidthForSeries = function(a) {
            return this.options.lineWidth instanceof Array ? this.options.lineWidth[a % this.options.lineWidth.length] : this.options.lineWidth
        }, c.prototype.pointSizeForSeries = function(a) {
            return this.options.pointSize instanceof Array ? this.options.pointSize[a % this.options.pointSize.length] : this.options.pointSize
        }, c.prototype.pointGrowSeries = function(a) {
            return Raphael.animation({
                r: this.pointSizeForSeries(a) + 3
            }, 25, "linear")
        }, c.prototype.pointShrinkSeries = function(a) {
            return Raphael.animation({
                r: this.pointSizeForSeries(a)
            }, 25, "linear")
        }, c
    }(b.Grid), b.labelSeries = function(c, d, e, f, g) {
        var h, i, j, k, l, m, n, o, p, q, r;
        if (j = 200 * (d - c) / e, i = new Date(c), void 0 === (n = b.LABEL_SPECS[f]))
            for (r = b.AUTO_LABEL_ORDER, p = 0, q = r.length; p < q; p++)
                if (k = r[p], m = b.LABEL_SPECS[k], j >= m.span) {
                    n = m;
                    break
                }
        for (void 0 === n && (n = b.LABEL_SPECS.second), g && (n = a.extend({}, n, {
                fmt: g
            })), h = n.start(i), l = [];
            (o = h.getTime()) <= d;) o >= c && l.push([n.fmt(h), o]), n.incr(h);
        return l
    }, c = function(a) {
        return {
            span: 60 * a * 1e3,
            start: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours())
            },
            fmt: function(a) {
                return b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes())
            },
            incr: function(b) {
                return b.setUTCMinutes(b.getUTCMinutes() + a)
            }
        }
    }, d = function(a) {
        return {
            span: 1e3 * a,
            start: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes())
            },
            fmt: function(a) {
                return b.pad2(a.getHours()) + ":" + b.pad2(a.getMinutes()) + ":" + b.pad2(a.getSeconds())
            },
            incr: function(b) {
                return b.setUTCSeconds(b.getUTCSeconds() + a)
            }
        }
    }, b.LABEL_SPECS = {
        decade: {
            span: 1728e8,
            start: function(a) {
                return new Date(a.getFullYear() - a.getFullYear() % 10, 0, 1)
            },
            fmt: function(a) {
                return "" + a.getFullYear()
            },
            incr: function(a) {
                return a.setFullYear(a.getFullYear() + 10)
            }
        },
        year: {
            span: 1728e7,
            start: function(a) {
                return new Date(a.getFullYear(), 0, 1)
            },
            fmt: function(a) {
                return "" + a.getFullYear()
            },
            incr: function(a) {
                return a.setFullYear(a.getFullYear() + 1)
            }
        },
        month: {
            span: 24192e5,
            start: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), 1)
            },
            fmt: function(a) {
                return a.getFullYear() + "-" + b.pad2(a.getMonth() + 1)
            },
            incr: function(a) {
                return a.setMonth(a.getMonth() + 1)
            }
        },
        week: {
            span: 6048e5,
            start: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate())
            },
            fmt: function(a) {
                return a.getFullYear() + "-" + b.pad2(a.getMonth() + 1) + "-" + b.pad2(a.getDate())
            },
            incr: function(a) {
                return a.setDate(a.getDate() + 7)
            }
        },
        day: {
            span: 864e5,
            start: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate())
            },
            fmt: function(a) {
                return a.getFullYear() + "-" + b.pad2(a.getMonth() + 1) + "-" + b.pad2(a.getDate())
            },
            incr: function(a) {
                return a.setDate(a.getDate() + 1)
            }
        },
        hour: c(60),
        "30min": c(30),
        "15min": c(15),
        "10min": c(10),
        "5min": c(5),
        minute: c(1),
        "30sec": d(30),
        "15sec": d(15),
        "10sec": d(10),
        "5sec": d(5),
        second: d(1)
    }, b.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], b.Area = function(c) {
        function d(c) {
            var f;
            if (!(this instanceof b.Area)) return new b.Area(c);
            f = a.extend({}, e, c), this.cumulative = !f.behaveLikeLine, "auto" === f.fillOpacity && (f.fillOpacity = f.behaveLikeLine ? .8 : 1), d.__super__.constructor.call(this, f)
        }
        var e;
        return h(d, c), e = {
            fillOpacity: "auto",
            behaveLikeLine: !1
        }, d.prototype.calcPoints = function() {
            var a, b, c, d, e, f, g;
            for (f = this.data, g = [], d = 0, e = f.length; d < e; d++) a = f[d], a._x = this.transX(a.x), b = 0, a._y = function() {
                var d, e, f, g;
                for (f = a.y, g = [], d = 0, e = f.length; d < e; d++) c = f[d], this.options.behaveLikeLine ? g.push(this.transY(c)) : (b += c || 0, g.push(this.transY(b)));
                return g
            }.call(this), g.push(a._ymax = Math.max.apply(Math, a._y));
            return g
        }, d.prototype.drawSeries = function() {
            var a, b, c, d, e, f, g, h;
            for (this.seriesPoints = [], b = this.options.behaveLikeLine ? function() {
                    f = [];
                    for (var a = 0, b = this.options.ykeys.length - 1; 0 <= b ? a <= b : a >= b; 0 <= b ? a++ : a--) f.push(a);
                    return f
                }.apply(this) : function() {
                    g = [];
                    for (var a = e = this.options.ykeys.length - 1; e <= 0 ? a <= 0 : a >= 0; e <= 0 ? a++ : a--) g.push(a);
                    return g
                }.apply(this), h = [], c = 0, d = b.length; c < d; c++) a = b[c], this._drawFillFor(a), this._drawLineFor(a), h.push(this._drawPointFor(a));
            return h
        }, d.prototype._drawFillFor = function(a) {
            var b;
            if (null !== (b = this.paths[a])) return b = b + "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(b, this.fillForSeries(a))
        }, d.prototype.fillForSeries = function(a) {
            var b;
            return b = Raphael.rgb2hsl(this.colorFor(this.data[a], a, "line")), Raphael.hsl(b.h, this.options.behaveLikeLine ? .9 * b.s : .75 * b.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * b.l : 1.25 * b.l))
        }, d.prototype.drawFilledPath = function(a, b) {
            return this.raphael.path(a).attr("fill", b).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none")
        }, d
    }(b.Line), b.Bar = function(c) {
        function d(c) {
            if (this.onHoverOut = f(this.onHoverOut, this), this.onHoverMove = f(this.onHoverMove, this), this.onGridClick = f(this.onGridClick, this), !(this instanceof b.Bar)) return new b.Bar(c);
            d.__super__.constructor.call(this, a.extend({}, c, {
                parseTime: !1
            }))
        }
        return h(d, c), d.prototype.init = function() {
            if (this.cumulative = this.options.stacked, "always" !== this.options.hideHover) return this.hover = new b.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)
        }, d.prototype.defaults = {
            barSizeRatio: .75,
            barGap: 3,
            barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            barOpacity: 1,
            barRadius: [0, 0, 0, 0],
            xLabelMargin: 50
        }, d.prototype.calc = function() {
            var a;
            if (this.calcBars(), !1 === this.options.hideHover) return (a = this.hover).update.apply(a, this.hoverContentForRow(this.data.length - 1))
        }, d.prototype.calcBars = function() {
            var a, b, c, d, e, f, g;
            for (f = this.data, g = [], a = d = 0, e = f.length; d < e; a = ++d) b = f[a], b._x = this.left + this.width * (a + .5) / this.data.length, g.push(b._y = function() {
                var a, d, e, f;
                for (e = b.y, f = [], a = 0, d = e.length; a < d; a++) c = e[a], null != c ? f.push(this.transY(c)) : f.push(null);
                return f
            }.call(this));
            return g
        }, d.prototype.draw = function() {
            var a;
            return !0 !== (a = this.options.axes) && "both" !== a && "x" !== a || this.drawXAxis(), this.drawSeries()
        }, d.prototype.drawXAxis = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m;
            for (j = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), g = null, f = null, m = [], a = k = 0, l = this.data.length; 0 <= l ? k < l : k > l; a = 0 <= l ? ++k : --k) h = this.data[this.data.length - 1 - a], b = this.drawXAxisLabel(h._x, j, h.label), i = b.getBBox(), b.transform("r" + -this.options.xLabelAngle), c = b.getBBox(), b.transform("t0," + c.height / 2 + "..."), 0 !== this.options.xLabelAngle && (e = -.5 * i.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), b.transform("t" + e + ",0...")), (null == g || g >= c.x + c.width || null != f && f >= c.x) && c.x >= 0 && c.x + c.width < this.el.width() ? (0 !== this.options.xLabelAngle && (d = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), f = c.x - d), m.push(g = c.x - this.options.xLabelMargin)) : m.push(b.remove());
            return m
        }, d.prototype.drawSeries = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
            return c = this.width / this.options.data.length, h = this.options.stacked ? 1 : this.options.ykeys.length, a = (c * this.options.barSizeRatio - this.options.barGap * (h - 1)) / h, this.options.barSize && (a = Math.min(a, this.options.barSize)), l = c - a * h - this.options.barGap * (h - 1), g = l / 2, o = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
                var h, l, p, q;
                for (p = this.data, q = [], d = h = 0, l = p.length; h < l; d = ++h) i = p[d], e = 0, q.push(function() {
                    var h, l, p, q;
                    for (p = i._y, q = [], j = h = 0, l = p.length; h < l; j = ++h) n = p[j], null !== n ? (o ? (m = Math.min(n, o), b = Math.max(n, o)) : (m = n, b = this.bottom), f = this.left + d * c + g, this.options.stacked || (f += j * (a + this.options.barGap)), k = b - m, this.options.verticalGridCondition && this.options.verticalGridCondition(i.x) && this.drawBar(this.left + d * c, this.top, c, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (m -= e), this.drawBar(f, m, a, k, this.colorFor(i, j, "bar"), this.options.barOpacity, this.options.barRadius), q.push(e += k)) : q.push(null);
                    return q
                }.call(this));
                return q
            }.call(this)
        }, d.prototype.colorFor = function(a, b, c) {
            var d, e;
            return "function" == typeof this.options.barColors ? (d = {
                x: a.x,
                y: a.y[b],
                label: a.label
            }, e = {
                index: b,
                key: this.options.ykeys[b],
                label: this.options.labels[b]
            }, this.options.barColors.call(this, d, e, c)) : this.options.barColors[b % this.options.barColors.length]
        }, d.prototype.hitTest = function(a) {
            return 0 === this.data.length ? null : (a = Math.max(Math.min(a, this.right), this.left), Math.min(this.data.length - 1, Math.floor((a - this.left) / (this.width / this.data.length))))
        }, d.prototype.onGridClick = function(a, b) {
            var c;
            return c = this.hitTest(a), this.fire("click", c, this.data[c].src, a, b)
        }, d.prototype.onHoverMove = function(a, b) {
            var c, d;
            return c = this.hitTest(a), (d = this.hover).update.apply(d, this.hoverContentForRow(c))
        }, d.prototype.onHoverOut = function() {
            if (!1 !== this.options.hideHover) return this.hover.hide()
        }, d.prototype.hoverContentForRow = function(a) {
            var b, c, d, e, f, g, h, i;
            for (d = this.data[a], b = "<div class='morris-hover-row-label'>" + d.label + "</div>", i = d.y, c = g = 0, h = i.length; g < h; c = ++g) f = i[c], b += "<div class='morris-hover-point' style='color: " + this.colorFor(d, c, "label") + "'>\n  " + this.options.labels[c] + ":\n  " + this.yLabelFormat(f) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (b = this.options.hoverCallback(a, this.options, b, d.src)), e = this.left + (a + .5) * this.width / this.data.length, [b, e]
        }, d.prototype.drawXAxisLabel = function(a, b, c) {
            return this.raphael.text(a, b, c).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, d.prototype.drawBar = function(a, b, c, d, e, f, g) {
            var h, i;
            return h = Math.max.apply(Math, g), i = 0 === h || h > d ? this.raphael.rect(a, b, c, d) : this.raphael.path(this.roundedRect(a, b, c, d, g)), i.attr("fill", e).attr("fill-opacity", f).attr("stroke", "none")
        }, d.prototype.roundedRect = function(a, b, c, d, e) {
            return null == e && (e = [0, 0, 0, 0]), ["M", a, e[0] + b, "Q", a, b, a + e[0], b, "L", a + c - e[1], b, "Q", a + c, b, a + c, b + e[1], "L", a + c, b + d - e[2], "Q", a + c, b + d, a + c - e[2], b + d, "L", a + e[3], b + d, "Q", a, b + d, a, b + d - e[3], "Z"]
        }, d
    }(b.Grid), b.Donut = function(c) {
        function d(c) {
            this.resizeHandler = f(this.resizeHandler, this), this.select = f(this.select, this), this.click = f(this.click, this);
            var d = this;
            if (!(this instanceof b.Donut)) return new b.Donut(c);
            if (this.options = a.extend({}, this.defaults, c), "string" == typeof c.element ? this.el = a(document.getElementById(c.element)) : this.el = a(c.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
            void 0 !== c.data && 0 !== c.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && a(window).bind("resize", function(a) {
                return null != d.timeoutId && window.clearTimeout(d.timeoutId), d.timeoutId = window.setTimeout(d.resizeHandler, 100)
            }), this.setData(c.data))
        }
        return h(d, c), d.prototype.defaults = {
            colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
            backgroundColor: "#FFFFFF",
            labelColor: "#000000",
            formatter: b.commas,
            resize: !1
        }, d.prototype.redraw = function() {
            var a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x;
            for (this.raphael.clear(), c = this.el.width() / 2, d = this.el.height() / 2, n = (Math.min(c, d) - 10) / 3, l = 0, u = this.values, o = 0, r = u.length; o < r; o++) m = u[o], l += m;
            for (i = 5 / (2 * n), a = 1.9999 * Math.PI - i * this.data.length, g = 0, f = 0, this.segments = [], v = this.values, e = p = 0, s = v.length; p < s; e = ++p) m = v[e], j = g + i + a * (m / l), k = new b.DonutSegment(c, d, 2 * n, n, g, j, this.data[e].color || this.options.colors[f % this.options.colors.length], this.options.backgroundColor, f, this.raphael), k.render(), this.segments.push(k), k.on("hover", this.select), k.on("click", this.click), g = j, f += 1;
            for (this.text1 = this.drawEmptyDonutLabel(c, d - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(c, d + 10, this.options.labelColor, 14), h = Math.max.apply(Math, this.values), f = 0, w = this.values, x = [], q = 0, t = w.length; q < t; q++) {
                if ((m = w[q]) === h) {
                    this.select(f);
                    break
                }
                x.push(f += 1)
            }
            return x
        }, d.prototype.setData = function(a) {
            var b;
            return this.data = a, this.values = function() {
                var a, c, d, e;
                for (d = this.data, e = [], a = 0, c = d.length; a < c; a++) b = d[a], e.push(parseFloat(b.value));
                return e
            }.call(this), this.redraw()
        }, d.prototype.click = function(a) {
            return this.fire("click", a, this.data[a])
        }, d.prototype.select = function(a) {
            var b, c, d, e, f, g;
            for (g = this.segments, e = 0, f = g.length; e < f; e++) c = g[e], c.deselect();
            return d = this.segments[a], d.select(), b = this.data[a], this.setLabels(b.label, this.options.formatter(b.value, b))
        }, d.prototype.setLabels = function(a, b) {
            var c, d, e, f, g, h, i, j;
            return c = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, f = 1.8 * c, e = c / 2, d = c / 3, this.text1.attr({
                text: a,
                transform: ""
            }), g = this.text1.getBBox(), h = Math.min(f / g.width, e / g.height), this.text1.attr({
                transform: "S" + h + "," + h + "," + (g.x + g.width / 2) + "," + (g.y + g.height)
            }), this.text2.attr({
                text: b,
                transform: ""
            }), i = this.text2.getBBox(), j = Math.min(f / i.width, d / i.height), this.text2.attr({
                transform: "S" + j + "," + j + "," + (i.x + i.width / 2) + "," + i.y
            })
        }, d.prototype.drawEmptyDonutLabel = function(a, b, c, d, e) {
            var f;
            return f = this.raphael.text(a, b, "").attr("font-size", d).attr("fill", c), null != e && f.attr("font-weight", e), f
        }, d.prototype.resizeHandler = function() {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, d
    }(b.EventEmitter), b.DonutSegment = function(a) {
        function b(a, b, c, d, e, g, h, i, j, k) {
            this.cx = a, this.cy = b, this.inner = c, this.outer = d, this.color = h, this.backgroundColor = i, this.index = j, this.raphael = k, this.deselect = f(this.deselect, this), this.select = f(this.select, this), this.sin_p0 = Math.sin(e), this.cos_p0 = Math.cos(e), this.sin_p1 = Math.sin(g), this.cos_p1 = Math.cos(g), this.is_long = g - e > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
        }
        return h(b, a), b.prototype.calcArcPoints = function(a) {
            return [this.cx + a * this.sin_p0, this.cy + a * this.cos_p0, this.cx + a * this.sin_p1, this.cy + a * this.cos_p1]
        }, b.prototype.calcSegment = function(a, b) {
            var c, d, e, f, g, h, i, j, k, l;
            return k = this.calcArcPoints(a), c = k[0], e = k[1], d = k[2], f = k[3], l = this.calcArcPoints(b), g = l[0], i = l[1], h = l[2], j = l[3], "M" + c + "," + e + "A" + a + "," + a + ",0," + this.is_long + ",0," + d + "," + f + "L" + h + "," + j + "A" + b + "," + b + ",0," + this.is_long + ",1," + g + "," + i + "Z"
        }, b.prototype.calcArc = function(a) {
            var b, c, d, e, f;
            return f = this.calcArcPoints(a), b = f[0], d = f[1], c = f[2], e = f[3], "M" + b + "," + d + "A" + a + "," + a + ",0," + this.is_long + ",0," + c + "," + e
        }, b.prototype.render = function() {
            var a = this;
            return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
                return a.fire("hover", a.index)
            }, function() {
                return a.fire("click", a.index)
            })
        }, b.prototype.drawDonutArc = function(a, b) {
            return this.raphael.path(a).attr({
                stroke: b,
                "stroke-width": 2,
                opacity: 0
            })
        }, b.prototype.drawDonutSegment = function(a, b, c, d, e) {
            return this.raphael.path(a).attr({
                fill: b,
                stroke: c,
                "stroke-width": 3
            }).hover(d).click(e)
        }, b.prototype.select = function() {
            if (!this.selected) return this.seg.animate({
                path: this.selectedPath
            }, 150, "<>"), this.arc.animate({
                opacity: 1
            }, 150, "<>"), this.selected = !0
        }, b.prototype.deselect = function() {
            if (this.selected) return this.seg.animate({
                path: this.path
            }, 150, "<>"), this.arc.animate({
                opacity: 0
            }, 150, "<>"), this.selected = !1
        }, b
    }(b.EventEmitter)
}.call(this);