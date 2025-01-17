! function(a) {
    a.color = {}, a.color.make = function(b, c, d, e) {
        var f = {};
        return f.r = b || 0, f.g = c || 0, f.b = d || 0, f.a = null != e ? e : 1, f.add = function(a, b) {
            for (var c = 0; c < a.length; ++c) f[a.charAt(c)] += b;
            return f.normalize()
        }, f.scale = function(a, b) {
            for (var c = 0; c < a.length; ++c) f[a.charAt(c)] *= b;
            return f.normalize()
        }, f.toString = function() {
            return f.a >= 1 ? "rgb(" + [f.r, f.g, f.b].join(",") + ")" : "rgba(" + [f.r, f.g, f.b, f.a].join(",") + ")"
        }, f.normalize = function() {
            function a(a, b, c) {
                return b < a ? a : b > c ? c : b
            }
            return f.r = a(0, parseInt(f.r), 255), f.g = a(0, parseInt(f.g), 255), f.b = a(0, parseInt(f.b), 255), f.a = a(0, f.a, 1), f
        }, f.clone = function() {
            return a.color.make(f.r, f.b, f.g, f.a)
        }, f.normalize()
    }, a.color.extract = function(b, c) {
        var d;
        do {
            if ("" != (d = b.css(c).toLowerCase()) && "transparent" != d) break;
            b = b.parent()
        } while (b.length && !a.nodeName(b.get(0), "body"));
        return "rgba(0, 0, 0, 0)" == d && (d = "transparent"), a.color.parse(d)
    }, a.color.parse = function(c) {
        var d, e = a.color.make;
        if (d = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)) return e(parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10));
        if (d = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)) return e(parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10), parseFloat(d[4]));
        if (d = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)) return e(2.55 * parseFloat(d[1]), 2.55 * parseFloat(d[2]), 2.55 * parseFloat(d[3]));
        if (d = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)) return e(2.55 * parseFloat(d[1]), 2.55 * parseFloat(d[2]), 2.55 * parseFloat(d[3]), parseFloat(d[4]));
        if (d = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)) return e(parseInt(d[1], 16), parseInt(d[2], 16), parseInt(d[3], 16));
        if (d = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)) return e(parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16));
        var f = a.trim(c).toLowerCase();
        return "transparent" == f ? e(255, 255, 255, 0) : (d = b[f] || [0, 0, 0], e(d[0], d[1], d[2]))
    };
    var b = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}(jQuery),
function(a) {
    function b(b, c) {
        var d = c.children("." + b)[0];
        if (null == d && (d = document.createElement("canvas"), d.className = b, a(d).css({
                direction: "ltr",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo(c), !d.getContext)) {
            if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
            d = window.G_vmlCanvasManager.initElement(d)
        }
        this.element = d;
        var e = this.context = d.getContext("2d"),
            f = window.devicePixelRatio || 1,
            g = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        this.pixelRatio = f / g, this.resize(c.width(), c.height()), this.textContainer = null, this.text = {}, this._textCache = {}
    }

    function c(c, e, f, g) {
        function h(a, b) {
            b = [ma].concat(b);
            for (var c = 0; c < a.length; ++c) a[c].apply(this, b)
        }

        function i(a) {
            _ = j(a), p(), q()
        }

        function j(b) {
            for (var c = [], d = 0; d < b.length; ++d) {
                var e = a.extend(!0, {}, aa.series);
                null != b[d].data ? (e.data = b[d].data, delete b[d].data, a.extend(!0, e, b[d]), b[d].data = e.data) : e.data = b[d], c.push(e)
            }
            return c
        }

        function k(a, b) {
            var c = a[b + "axis"];
            return "object" == typeof c && (c = c.n), "number" != typeof c && (c = 1), c
        }

        function l() {
            return a.grep(ga.concat(ha), function(a) {
                return a
            })
        }

        function m(a) {
            var b, c, d = {};
            for (b = 0; b < ga.length; ++b)(c = ga[b]) && c.used && (d["x" + c.n] = c.c2p(a.left));
            for (b = 0; b < ha.length; ++b)(c = ha[b]) && c.used && (d["y" + c.n] = c.c2p(a.top));
            return void 0 !== d.x1 && (d.x = d.x1), void 0 !== d.y1 && (d.y = d.y1), d
        }

        function n(a) {
            var b, c, d, e = {};
            for (b = 0; b < ga.length; ++b)
                if ((c = ga[b]) && c.used && (d = "x" + c.n, null == a[d] && 1 == c.n && (d = "x"), null != a[d])) {
                    e.left = c.p2c(a[d]);
                    break
                }
            for (b = 0; b < ha.length; ++b)
                if ((c = ha[b]) && c.used && (d = "y" + c.n, null == a[d] && 1 == c.n && (d = "y"), null != a[d])) {
                    e.top = c.p2c(a[d]);
                    break
                }
            return e
        }

        function o(b, c) {
            return b[c - 1] || (b[c - 1] = {
                n: c,
                direction: b == ga ? "x" : "y",
                options: a.extend(!0, {}, b == ga ? aa.xaxis : aa.yaxis)
            }), b[c - 1]
        }

        function p() {
            var b, c = _.length,
                d = -1;
            for (b = 0; b < _.length; ++b) {
                var e = _[b].color;
                null != e && (c--, "number" == typeof e && e > d && (d = e))
            }
            c <= d && (c = d + 1);
            var f, g = [],
                h = aa.colors,
                i = h.length,
                j = 0;
            for (b = 0; b < c; b++) f = a.color.parse(h[b % i] || "#666"), b % i == 0 && b && (j = j >= 0 ? j < .5 ? -j - .2 : 0 : -j), g[b] = f.scale("rgb", 1 + j);
            var l, m = 0;
            for (b = 0; b < _.length; ++b) {
                if (l = _[b], null == l.color ? (l.color = g[m].toString(), ++m) : "number" == typeof l.color && (l.color = g[l.color].toString()), null == l.lines.show) {
                    var n, p = !0;
                    for (n in l)
                        if (l[n] && l[n].show) {
                            p = !1;
                            break
                        }
                    p && (l.lines.show = !0)
                }
                null == l.lines.zero && (l.lines.zero = !!l.lines.fill), l.xaxis = o(ga, k(l, "x")), l.yaxis = o(ha, k(l, "y"))
            }
        }

        function q() {
            function b(a, b, c) {
                b < a.datamin && b != -s && (a.datamin = b), c > a.datamax && c != s && (a.datamax = c)
            }
            var c, d, e, f, g, i, j, k, m, n, o, p, q = Number.POSITIVE_INFINITY,
                r = Number.NEGATIVE_INFINITY,
                s = Number.MAX_VALUE;
            for (a.each(l(), function(a, b) {
                    b.datamin = q, b.datamax = r, b.used = !1
                }), c = 0; c < _.length; ++c) g = _[c], g.datapoints = {
                points: []
            }, h(la.processRawData, [g, g.data, g.datapoints]);
            for (c = 0; c < _.length; ++c) {
                if (g = _[c], o = g.data, !(p = g.datapoints.format)) {
                    if (p = [], p.push({
                            x: !0,
                            number: !0,
                            required: !0
                        }), p.push({
                            y: !0,
                            number: !0,
                            required: !0
                        }), g.bars.show || g.lines.show && g.lines.fill) {
                        var t = !!(g.bars.show && g.bars.zero || g.lines.show && g.lines.zero);
                        p.push({
                            y: !0,
                            number: !0,
                            required: !1,
                            defaultValue: 0,
                            autoscale: t
                        }), g.bars.horizontal && (delete p[p.length - 1].y, p[p.length - 1].x = !0)
                    }
                    g.datapoints.format = p
                }
                if (null == g.datapoints.pointsize) {
                    g.datapoints.pointsize = p.length, j = g.datapoints.pointsize, i = g.datapoints.points;
                    var u = g.lines.show && g.lines.steps;
                    for (g.xaxis.used = g.yaxis.used = !0, d = e = 0; d < o.length; ++d, e += j) {
                        n = o[d];
                        var v = null == n;
                        if (!v)
                            for (f = 0; f < j; ++f) k = n[f], m = p[f], m && (m.number && null != k && (k = +k, isNaN(k) ? k = null : k == 1 / 0 ? k = s : k == -1 / 0 && (k = -s)), null == k && (m.required && (v = !0), null != m.defaultValue && (k = m.defaultValue))), i[e + f] = k;
                        if (v)
                            for (f = 0; f < j; ++f) k = i[e + f], null != k && (m = p[f], !1 !== m.autoscale && (m.x && b(g.xaxis, k, k), m.y && b(g.yaxis, k, k))), i[e + f] = null;
                        else if (u && e > 0 && null != i[e - j] && i[e - j] != i[e] && i[e - j + 1] != i[e + 1]) {
                            for (f = 0; f < j; ++f) i[e + j + f] = i[e + f];
                            i[e + 1] = i[e - j + 1], e += j
                        }
                    }
                }
            }
            for (c = 0; c < _.length; ++c) g = _[c], h(la.processDatapoints, [g, g.datapoints]);
            for (c = 0; c < _.length; ++c) {
                g = _[c], i = g.datapoints.points, j = g.datapoints.pointsize, p = g.datapoints.format;
                var w = q,
                    x = q,
                    y = r,
                    z = r;
                for (d = 0; d < i.length; d += j)
                    if (null != i[d])
                        for (f = 0; f < j; ++f) k = i[d + f], (m = p[f]) && !1 !== m.autoscale && k != s && k != -s && (m.x && (k < w && (w = k), k > y && (y = k)), m.y && (k < x && (x = k), k > z && (z = k)));
                if (g.bars.show) {
                    var A;
                    switch (g.bars.align) {
                        case "left":
                            A = 0;
                            break;
                        case "right":
                            A = -g.bars.barWidth;
                            break;
                        default:
                            A = -g.bars.barWidth / 2
                    }
                    g.bars.horizontal ? (x += A, z += A + g.bars.barWidth) : (w += A, y += A + g.bars.barWidth)
                }
                b(g.xaxis, w, y), b(g.yaxis, x, z)
            }
            a.each(l(), function(a, b) {
                b.datamin == q && (b.datamin = null), b.datamax == r && (b.datamax = null)
            })
        }

        function r() {
            oa && clearTimeout(oa), da.unbind("mousemove", P), da.unbind("mouseleave", Q), da.unbind("click", R), h(la.shutdown, [da])
        }

        function s(a) {
            function b(a) {
                return a
            }
            var c, d, e = a.options.transform || b,
                f = a.options.inverseTransform;
            "x" == a.direction ? (c = a.scale = ja / Math.abs(e(a.max) - e(a.min)), d = Math.min(e(a.max), e(a.min))) : (c = a.scale = ka / Math.abs(e(a.max) - e(a.min)), c = -c, d = Math.max(e(a.max), e(a.min))), a.p2c = e == b ? function(a) {
                return (a - d) * c
            } : function(a) {
                return (e(a) - d) * c
            }, a.c2p = f ? function(a) {
                return f(d + a / c)
            } : function(a) {
                return d + a / c
            }
        }

        function t(a) {
            for (var b = a.options, c = a.ticks || [], d = b.labelWidth || 0, e = b.labelHeight || 0, f = d || ("x" == a.direction ? Math.floor(ba.width / (c.length || 1)) : null), g = a.direction + "Axis " + a.direction + a.n + "Axis", h = "flot-" + a.direction + "-axis flot-" + a.direction + a.n + "-axis " + g, i = b.font || "flot-tick-label tickLabel", j = 0; j < c.length; ++j) {
                var k = c[j];
                if (k.label) {
                    var l = ba.getTextInfo(h, k.label, i, null, f);
                    d = Math.max(d, l.width), e = Math.max(e, l.height)
                }
            }
            a.labelWidth = b.labelWidth || d, a.labelHeight = b.labelHeight || e
        }

        function u(b) {
            var c = b.labelWidth,
                d = b.labelHeight,
                e = b.options.position,
                f = "x" === b.direction,
                g = b.options.tickLength,
                h = aa.grid.axisMargin,
                i = aa.grid.labelMargin,
                j = !0,
                k = !0,
                l = !0,
                m = !1;
            a.each(f ? ga : ha, function(a, c) {
                c && (c.show || c.reserveSpace) && (c === b ? m = !0 : c.options.position === e && (m ? k = !1 : j = !1), m || (l = !1))
            }), k && (h = 0), null == g && (g = l ? "full" : 5), isNaN(+g) || (i += +g), f ? (d += i, "bottom" == e ? (ia.bottom += d + h, b.box = {
                top: ba.height - ia.bottom,
                height: d
            }) : (b.box = {
                top: ia.top + h,
                height: d
            }, ia.top += d + h)) : (c += i, "left" == e ? (b.box = {
                left: ia.left + h,
                width: c
            }, ia.left += c + h) : (ia.right += c + h, b.box = {
                left: ba.width - ia.right,
                width: c
            })), b.position = e, b.tickLength = g, b.box.padding = i, b.innermost = j
        }

        function v(a) {
            "x" == a.direction ? (a.box.left = ia.left - a.labelWidth / 2, a.box.width = ba.width - ia.left - ia.right + a.labelWidth) : (a.box.top = ia.top - a.labelHeight / 2, a.box.height = ba.height - ia.bottom - ia.top + a.labelHeight)
        }

        function w() {
            var b, c = aa.grid.minBorderMargin;
            if (null == c)
                for (c = 0, b = 0; b < _.length; ++b) c = Math.max(c, 2 * (_[b].points.radius + _[b].points.lineWidth / 2));
            var d = {
                left: c,
                right: c,
                top: c,
                bottom: c
            };
            a.each(l(), function(a, b) {
                b.reserveSpace && b.ticks && b.ticks.length && ("x" === b.direction ? (d.left = Math.max(d.left, b.labelWidth / 2), d.right = Math.max(d.right, b.labelWidth / 2)) : (d.bottom = Math.max(d.bottom, b.labelHeight / 2), d.top = Math.max(d.top, b.labelHeight / 2)))
            }), ia.left = Math.ceil(Math.max(d.left, ia.left)), ia.right = Math.ceil(Math.max(d.right, ia.right)), ia.top = Math.ceil(Math.max(d.top, ia.top)), ia.bottom = Math.ceil(Math.max(d.bottom, ia.bottom))
        }

        function x() {
            var b, c = l(),
                d = aa.grid.show;
            for (var e in ia) {
                var f = aa.grid.margin || 0;
                ia[e] = "number" == typeof f ? f : f[e] || 0
            }
            h(la.processOffset, [ia]);
            for (var e in ia) "object" == typeof aa.grid.borderWidth ? ia[e] += d ? aa.grid.borderWidth[e] : 0 : ia[e] += d ? aa.grid.borderWidth : 0;
            if (a.each(c, function(a, b) {
                    var c = b.options;
                    b.show = null == c.show ? b.used : c.show, b.reserveSpace = null == c.reserveSpace ? b.show : c.reserveSpace, y(b)
                }), d) {
                var g = a.grep(c, function(a) {
                    return a.show || a.reserveSpace
                });
                for (a.each(g, function(a, b) {
                        z(b), A(b), B(b, b.ticks), t(b)
                    }), b = g.length - 1; b >= 0; --b) u(g[b]);
                w(), a.each(g, function(a, b) {
                    v(b)
                })
            }
            ja = ba.width - ia.left - ia.right, ka = ba.height - ia.bottom - ia.top, a.each(c, function(a, b) {
                s(b)
            }), d && G(), N()
        }

        function y(a) {
            var b = a.options,
                c = +(null != b.min ? b.min : a.datamin),
                d = +(null != b.max ? b.max : a.datamax),
                e = d - c;
            if (0 == e) {
                var f = 0 == d ? 1 : .01;
                null == b.min && (c -= f), null != b.max && null == b.min || (d += f)
            } else {
                var g = b.autoscaleMargin;
                null != g && (null == b.min && (c -= e * g) < 0 && null != a.datamin && a.datamin >= 0 && (c = 0), null == b.max && (d += e * g) > 0 && null != a.datamax && a.datamax <= 0 && (d = 0))
            }
            a.min = c, a.max = d
        }

        function z(b) {
            var c, e = b.options;
            c = "number" == typeof e.ticks && e.ticks > 0 ? e.ticks : .3 * Math.sqrt("x" == b.direction ? ba.width : ba.height);
            var f = (b.max - b.min) / c,
                g = -Math.floor(Math.log(f) / Math.LN10),
                h = e.tickDecimals;
            null != h && g > h && (g = h);
            var i, j = Math.pow(10, -g),
                k = f / j;
            if (k < 1.5 ? i = 1 : k < 3 ? (i = 2, k > 2.25 && (null == h || g + 1 <= h) && (i = 2.5, ++g)) : i = k < 7.5 ? 5 : 10, i *= j, null != e.minTickSize && i < e.minTickSize && (i = e.minTickSize), b.delta = f, b.tickDecimals = Math.max(0, null != h ? h : g), b.tickSize = e.tickSize || i, "time" == e.mode && !b.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
            if (b.tickGenerator || (b.tickGenerator = function(a) {
                    var b, c = [],
                        e = d(a.min, a.tickSize),
                        f = 0,
                        g = Number.NaN;
                    do {
                        b = g, g = e + f * a.tickSize, c.push(g), ++f
                    } while (g < a.max && g != b);
                    return c
                }, b.tickFormatter = function(a, b) {
                    var c = b.tickDecimals ? Math.pow(10, b.tickDecimals) : 1,
                        d = "" + Math.round(a * c) / c;
                    if (null != b.tickDecimals) {
                        var e = d.indexOf("."),
                            f = -1 == e ? 0 : d.length - e - 1;
                        if (f < b.tickDecimals) return (f ? d : d + ".") + ("" + c).substr(1, b.tickDecimals - f)
                    }
                    return d
                }), a.isFunction(e.tickFormatter) && (b.tickFormatter = function(a, b) {
                    return "" + e.tickFormatter(a, b)
                }), null != e.alignTicksWithAxis) {
                var l = ("x" == b.direction ? ga : ha)[e.alignTicksWithAxis - 1];
                if (l && l.used && l != b) {
                    var m = b.tickGenerator(b);
                    if (m.length > 0 && (null == e.min && (b.min = Math.min(b.min, m[0])), null == e.max && m.length > 1 && (b.max = Math.max(b.max, m[m.length - 1]))), b.tickGenerator = function(a) {
                            var b, c, d = [];
                            for (c = 0; c < l.ticks.length; ++c) b = (l.ticks[c].v - l.min) / (l.max - l.min), b = a.min + b * (a.max - a.min), d.push(b);
                            return d
                        }, !b.mode && null == e.tickDecimals) {
                        var n = Math.max(0, 1 - Math.floor(Math.log(b.delta) / Math.LN10)),
                            o = b.tickGenerator(b);
                        o.length > 1 && /\..*0$/.test((o[1] - o[0]).toFixed(n)) || (b.tickDecimals = n)
                    }
                }
            }
        }

        function A(b) {
            var c = b.options.ticks,
                d = [];
            null == c || "number" == typeof c && c > 0 ? d = b.tickGenerator(b) : c && (d = a.isFunction(c) ? c(b) : c);
            var e, f;
            for (b.ticks = [], e = 0; e < d.length; ++e) {
                var g = null,
                    h = d[e];
                "object" == typeof h ? (f = +h[0], h.length > 1 && (g = h[1])) : f = +h, null == g && (g = b.tickFormatter(f, b)), isNaN(f) || b.ticks.push({
                    v: f,
                    label: g
                })
            }
        }

        function B(a, b) {
            a.options.autoscaleMargin && b.length > 0 && (null == a.options.min && (a.min = Math.min(a.min, b[0].v)), null == a.options.max && b.length > 1 && (a.max = Math.max(a.max, b[b.length - 1].v)))
        }

        function C() {
            ba.clear(), h(la.drawBackground, [ea]);
            var a = aa.grid;
            a.show && a.backgroundColor && E(), a.show && !a.aboveData && F();
            for (var b = 0; b < _.length; ++b) h(la.drawSeries, [ea, _[b]]), H(_[b]);
            h(la.draw, [ea]), a.show && a.aboveData && F(), ba.render(), T()
        }

        function D(a, b) {
            for (var c, d, e, f, g = l(), h = 0; h < g.length; ++h)
                if (c = g[h], c.direction == b && (f = b + c.n + "axis", a[f] || 1 != c.n || (f = b + "axis"), a[f])) {
                    d = a[f].from, e = a[f].to;
                    break
                }
            if (a[f] || (c = "x" == b ? ga[0] : ha[0], d = a[b + "1"], e = a[b + "2"]), null != d && null != e && d > e) {
                var i = d;
                d = e, e = i
            }
            return {
                from: d,
                to: e,
                axis: c
            }
        }

        function E() {
            ea.save(), ea.translate(ia.left, ia.top), ea.fillStyle = $(aa.grid.backgroundColor, ka, 0, "rgba(255, 255, 255, 0)"), ea.fillRect(0, 0, ja, ka), ea.restore()
        }

        function F() {
            var b, c, d, e;
            ea.save(), ea.translate(ia.left, ia.top);
            var f = aa.grid.markings;
            if (f)
                for (a.isFunction(f) && (c = ma.getAxes(), c.xmin = c.xaxis.min, c.xmax = c.xaxis.max, c.ymin = c.yaxis.min, c.ymax = c.yaxis.max, f = f(c)), b = 0; b < f.length; ++b) {
                    var g = f[b],
                        h = D(g, "x"),
                        i = D(g, "y");
                    if (null == h.from && (h.from = h.axis.min), null == h.to && (h.to = h.axis.max), null == i.from && (i.from = i.axis.min), null == i.to && (i.to = i.axis.max), !(h.to < h.axis.min || h.from > h.axis.max || i.to < i.axis.min || i.from > i.axis.max)) {
                        h.from = Math.max(h.from, h.axis.min), h.to = Math.min(h.to, h.axis.max), i.from = Math.max(i.from, i.axis.min), i.to = Math.min(i.to, i.axis.max);
                        var j = h.from === h.to,
                            k = i.from === i.to;
                        if (!j || !k)
                            if (h.from = Math.floor(h.axis.p2c(h.from)), h.to = Math.floor(h.axis.p2c(h.to)), i.from = Math.floor(i.axis.p2c(i.from)), i.to = Math.floor(i.axis.p2c(i.to)), j || k) {
                                var m = g.lineWidth || aa.grid.markingsLineWidth,
                                    n = m % 2 ? .5 : 0;
                                ea.beginPath(), ea.strokeStyle = g.color || aa.grid.markingsColor, ea.lineWidth = m, j ? (ea.moveTo(h.to + n, i.from), ea.lineTo(h.to + n, i.to)) : (ea.moveTo(h.from, i.to + n), ea.lineTo(h.to, i.to + n)), ea.stroke()
                            } else ea.fillStyle = g.color || aa.grid.markingsColor, ea.fillRect(h.from, i.to, h.to - h.from, i.from - i.to)
                    }
                }
            c = l(), d = aa.grid.borderWidth;
            for (var o = 0; o < c.length; ++o) {
                var p, q, r, s, t = c[o],
                    u = t.box,
                    v = t.tickLength;
                if (t.show && 0 != t.ticks.length) {
                    for (ea.lineWidth = 1, "x" == t.direction ? (p = 0, q = "full" == v ? "top" == t.position ? 0 : ka : u.top - ia.top + ("top" == t.position ? u.height : 0)) : (q = 0, p = "full" == v ? "left" == t.position ? 0 : ja : u.left - ia.left + ("left" == t.position ? u.width : 0)), t.innermost || (ea.strokeStyle = t.options.color, ea.beginPath(), r = s = 0, "x" == t.direction ? r = ja + 1 : s = ka + 1, 1 == ea.lineWidth && ("x" == t.direction ? q = Math.floor(q) + .5 : p = Math.floor(p) + .5), ea.moveTo(p, q), ea.lineTo(p + r, q + s), ea.stroke()), ea.strokeStyle = t.options.tickColor, ea.beginPath(), b = 0; b < t.ticks.length; ++b) {
                        var w = t.ticks[b].v;
                        r = s = 0, isNaN(w) || w < t.min || w > t.max || "full" == v && ("object" == typeof d && d[t.position] > 0 || d > 0) && (w == t.min || w == t.max) || ("x" == t.direction ? (p = t.p2c(w), s = "full" == v ? -ka : v, "top" == t.position && (s = -s)) : (q = t.p2c(w), r = "full" == v ? -ja : v, "left" == t.position && (r = -r)), 1 == ea.lineWidth && ("x" == t.direction ? p = Math.floor(p) + .5 : q = Math.floor(q) + .5), ea.moveTo(p, q), ea.lineTo(p + r, q + s))
                    }
                    ea.stroke()
                }
            }
            d && (e = aa.grid.borderColor, "object" == typeof d || "object" == typeof e ? ("object" != typeof d && (d = {
                top: d,
                right: d,
                bottom: d,
                left: d
            }), "object" != typeof e && (e = {
                top: e,
                right: e,
                bottom: e,
                left: e
            }), d.top > 0 && (ea.strokeStyle = e.top, ea.lineWidth = d.top, ea.beginPath(), ea.moveTo(0 - d.left, 0 - d.top / 2), ea.lineTo(ja, 0 - d.top / 2), ea.stroke()), d.right > 0 && (ea.strokeStyle = e.right, ea.lineWidth = d.right, ea.beginPath(), ea.moveTo(ja + d.right / 2, 0 - d.top), ea.lineTo(ja + d.right / 2, ka), ea.stroke()), d.bottom > 0 && (ea.strokeStyle = e.bottom, ea.lineWidth = d.bottom, ea.beginPath(), ea.moveTo(ja + d.right, ka + d.bottom / 2), ea.lineTo(0, ka + d.bottom / 2), ea.stroke()), d.left > 0 && (ea.strokeStyle = e.left, ea.lineWidth = d.left, ea.beginPath(), ea.moveTo(0 - d.left / 2, ka + d.bottom), ea.lineTo(0 - d.left / 2, 0), ea.stroke())) : (ea.lineWidth = d, ea.strokeStyle = aa.grid.borderColor, ea.strokeRect(-d / 2, -d / 2, ja + d, ka + d))), ea.restore()
        }

        function G() {
            a.each(l(), function(a, b) {
                var c, d, e, f, g, h = b.box,
                    i = b.direction + "Axis " + b.direction + b.n + "Axis",
                    j = "flot-" + b.direction + "-axis flot-" + b.direction + b.n + "-axis " + i,
                    k = b.options.font || "flot-tick-label tickLabel";
                if (ba.removeText(j), b.show && 0 != b.ticks.length)
                    for (var l = 0; l < b.ticks.length; ++l) c = b.ticks[l], !c.label || c.v < b.min || c.v > b.max || ("x" == b.direction ? (f = "center", d = ia.left + b.p2c(c.v), "bottom" == b.position ? e = h.top + h.padding : (e = h.top + h.height - h.padding, g = "bottom")) : (g = "middle", e = ia.top + b.p2c(c.v), "left" == b.position ? (d = h.left + h.width - h.padding, f = "right") : d = h.left + h.padding), ba.addText(j, d, e, c.label, k, null, null, f, g))
            })
        }

        function H(a) {
            a.lines.show && I(a), a.bars.show && L(a), a.points.show && J(a)
        }

        function I(a) {
            function b(a, b, c, d, e) {
                var f = a.points,
                    g = a.pointsize,
                    h = null,
                    i = null;
                ea.beginPath();
                for (var j = g; j < f.length; j += g) {
                    var k = f[j - g],
                        l = f[j - g + 1],
                        m = f[j],
                        n = f[j + 1];
                    if (null != k && null != m) {
                        if (l <= n && l < e.min) {
                            if (n < e.min) continue;
                            k = (e.min - l) / (n - l) * (m - k) + k, l = e.min
                        } else if (n <= l && n < e.min) {
                            if (l < e.min) continue;
                            m = (e.min - l) / (n - l) * (m - k) + k, n = e.min
                        }
                        if (l >= n && l > e.max) {
                            if (n > e.max) continue;
                            k = (e.max - l) / (n - l) * (m - k) + k, l = e.max
                        } else if (n >= l && n > e.max) {
                            if (l > e.max) continue;
                            m = (e.max - l) / (n - l) * (m - k) + k, n = e.max
                        }
                        if (k <= m && k < d.min) {
                            if (m < d.min) continue;
                            l = (d.min - k) / (m - k) * (n - l) + l, k = d.min
                        } else if (m <= k && m < d.min) {
                            if (k < d.min) continue;
                            n = (d.min - k) / (m - k) * (n - l) + l, m = d.min
                        }
                        if (k >= m && k > d.max) {
                            if (m > d.max) continue;
                            l = (d.max - k) / (m - k) * (n - l) + l, k = d.max
                        } else if (m >= k && m > d.max) {
                            if (k > d.max) continue;
                            n = (d.max - k) / (m - k) * (n - l) + l, m = d.max
                        }
                        k == h && l == i || ea.moveTo(d.p2c(k) + b, e.p2c(l) + c), h = m, i = n, ea.lineTo(d.p2c(m) + b, e.p2c(n) + c)
                    }
                }
                ea.stroke()
            }
            ea.save(), ea.translate(ia.left, ia.top), ea.lineJoin = "round";
            var c = a.lines.lineWidth,
                d = a.shadowSize;
            if (c > 0 && d > 0) {
                ea.lineWidth = d, ea.strokeStyle = "rgba(0,0,0,0.1)";
                var e = Math.PI / 18;
                b(a.datapoints, Math.sin(e) * (c / 2 + d / 2), Math.cos(e) * (c / 2 + d / 2), a.xaxis, a.yaxis), ea.lineWidth = d / 2, b(a.datapoints, Math.sin(e) * (c / 2 + d / 4), Math.cos(e) * (c / 2 + d / 4), a.xaxis, a.yaxis)
            }
            ea.lineWidth = c, ea.strokeStyle = a.color;
            var f = M(a.lines, a.color, 0, ka);
            f && (ea.fillStyle = f, function(a, b, c) {
                for (var d = a.points, e = a.pointsize, f = Math.min(Math.max(0, c.min), c.max), g = 0, h = !1, i = 1, j = 0, k = 0; !(e > 0 && g > d.length + e);) {
                    g += e;
                    var l = d[g - e],
                        m = d[g - e + i],
                        n = d[g],
                        o = d[g + i];
                    if (h) {
                        if (e > 0 && null != l && null == n) {
                            k = g, e = -e, i = 2;
                            continue
                        }
                        if (e < 0 && g == j + e) {
                            ea.fill(), h = !1, e = -e, i = 1, g = j = k + e;
                            continue
                        }
                    }
                    if (null != l && null != n) {
                        if (l <= n && l < b.min) {
                            if (n < b.min) continue;
                            m = (b.min - l) / (n - l) * (o - m) + m, l = b.min
                        } else if (n <= l && n < b.min) {
                            if (l < b.min) continue;
                            o = (b.min - l) / (n - l) * (o - m) + m, n = b.min
                        }
                        if (l >= n && l > b.max) {
                            if (n > b.max) continue;
                            m = (b.max - l) / (n - l) * (o - m) + m, l = b.max
                        } else if (n >= l && n > b.max) {
                            if (l > b.max) continue;
                            o = (b.max - l) / (n - l) * (o - m) + m, n = b.max
                        }
                        if (h || (ea.beginPath(), ea.moveTo(b.p2c(l), c.p2c(f)), h = !0), m >= c.max && o >= c.max) ea.lineTo(b.p2c(l), c.p2c(c.max)), ea.lineTo(b.p2c(n), c.p2c(c.max));
                        else if (m <= c.min && o <= c.min) ea.lineTo(b.p2c(l), c.p2c(c.min)), ea.lineTo(b.p2c(n), c.p2c(c.min));
                        else {
                            var p = l,
                                q = n;
                            m <= o && m < c.min && o >= c.min ? (l = (c.min - m) / (o - m) * (n - l) + l, m = c.min) : o <= m && o < c.min && m >= c.min && (n = (c.min - m) / (o - m) * (n - l) + l, o = c.min), m >= o && m > c.max && o <= c.max ? (l = (c.max - m) / (o - m) * (n - l) + l, m = c.max) : o >= m && o > c.max && m <= c.max && (n = (c.max - m) / (o - m) * (n - l) + l, o = c.max), l != p && ea.lineTo(b.p2c(p), c.p2c(m)), ea.lineTo(b.p2c(l), c.p2c(m)), ea.lineTo(b.p2c(n), c.p2c(o)), n != q && (ea.lineTo(b.p2c(n), c.p2c(o)), ea.lineTo(b.p2c(q), c.p2c(o)))
                        }
                    }
                }
            }(a.datapoints, a.xaxis, a.yaxis)), c > 0 && b(a.datapoints, 0, 0, a.xaxis, a.yaxis), ea.restore()
        }

        function J(a) {
            function b(a, b, c, d, e, f, g, h) {
                for (var i = a.points, j = a.pointsize, k = 0; k < i.length; k += j) {
                    var l = i[k],
                        m = i[k + 1];
                    null == l || l < f.min || l > f.max || m < g.min || m > g.max || (ea.beginPath(), l = f.p2c(l), m = g.p2c(m) + d, "circle" == h ? ea.arc(l, m, b, 0, e ? Math.PI : 2 * Math.PI, !1) : h(ea, l, m, b, e), ea.closePath(), c && (ea.fillStyle = c, ea.fill()), ea.stroke())
                }
            }
            ea.save(), ea.translate(ia.left, ia.top);
            var c = a.points.lineWidth,
                d = a.shadowSize,
                e = a.points.radius,
                f = a.points.symbol;
            if (0 == c && (c = 1e-4), c > 0 && d > 0) {
                var g = d / 2;
                ea.lineWidth = g, ea.strokeStyle = "rgba(0,0,0,0.1)", b(a.datapoints, e, null, g + g / 2, !0, a.xaxis, a.yaxis, f), ea.strokeStyle = "rgba(0,0,0,0.2)", b(a.datapoints, e, null, g / 2, !0, a.xaxis, a.yaxis, f)
            }
            ea.lineWidth = c, ea.strokeStyle = a.color, b(a.datapoints, e, M(a.points, a.color), 0, !1, a.xaxis, a.yaxis, f), ea.restore()
        }

        function K(a, b, c, d, e, f, g, h, i, j, k) {
            var l, m, n, o, p, q, r, s, t;
            j ? (s = q = r = !0, p = !1, l = c, m = a, o = b + d, n = b + e, m < l && (t = m, m = l, l = t, p = !0, q = !1)) : (p = q = r = !0, s = !1, l = a + d, m = a + e, n = c, (o = b) < n && (t = o, o = n, n = t, s = !0, r = !1)), m < g.min || l > g.max || o < h.min || n > h.max || (l < g.min && (l = g.min, p = !1), m > g.max && (m = g.max, q = !1), n < h.min && (n = h.min, s = !1), o > h.max && (o = h.max, r = !1), l = g.p2c(l), n = h.p2c(n), m = g.p2c(m), o = h.p2c(o), f && (i.fillStyle = f(n, o), i.fillRect(l, o, m - l, n - o)), k > 0 && (p || q || r || s) && (i.beginPath(), i.moveTo(l, n), p ? i.lineTo(l, o) : i.moveTo(l, o), r ? i.lineTo(m, o) : i.moveTo(m, o), q ? i.lineTo(m, n) : i.moveTo(m, n), s ? i.lineTo(l, n) : i.moveTo(l, n), i.stroke()))
        }

        function L(a) {
            ea.save(), ea.translate(ia.left, ia.top), ea.lineWidth = a.bars.lineWidth, ea.strokeStyle = a.color;
            var b;
            switch (a.bars.align) {
                case "left":
                    b = 0;
                    break;
                case "right":
                    b = -a.bars.barWidth;
                    break;
                default:
                    b = -a.bars.barWidth / 2
            }
            var c = a.bars.fill ? function(b, c) {
                return M(a.bars, a.color, b, c)
            } : null;
            ! function(b, c, d, e, f, g) {
                for (var h = b.points, i = b.pointsize, j = 0; j < h.length; j += i) null != h[j] && K(h[j], h[j + 1], h[j + 2], c, d, e, f, g, ea, a.bars.horizontal, a.bars.lineWidth)
            }(a.datapoints, b, b + a.bars.barWidth, c, a.xaxis, a.yaxis), ea.restore()
        }

        function M(b, c, d, e) {
            var f = b.fill;
            if (!f) return null;
            if (b.fillColor) return $(b.fillColor, d, e, c);
            var g = a.color.parse(c);
            return g.a = "number" == typeof f ? f : .4, g.normalize(), g.toString()
        }

        function N() {
            if (null != aa.legend.container ? a(aa.legend.container).html("") : c.find(".legend").remove(), aa.legend.show) {
                for (var b, d, e = [], f = [], g = !1, h = aa.legend.labelFormatter, i = 0; i < _.length; ++i) b = _[i], b.label && (d = h ? h(b.label, b) : b.label) && f.push({
                    label: d,
                    color: b.color
                });
                if (aa.legend.sorted)
                    if (a.isFunction(aa.legend.sorted)) f.sort(aa.legend.sorted);
                    else if ("reverse" == aa.legend.sorted) f.reverse();
                else {
                    var j = "descending" != aa.legend.sorted;
                    f.sort(function(a, b) {
                        return a.label == b.label ? 0 : a.label < b.label != j ? 1 : -1
                    })
                }
                for (var i = 0; i < f.length; ++i) {
                    var k = f[i];
                    i % aa.legend.noColumns == 0 && (g && e.push("</tr>"), e.push("<tr>"), g = !0), e.push('<td class="legendColorBox"><div style="border:1px solid ' + aa.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + k.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + k.label + "</td>")
                }
                if (g && e.push("</tr>"), 0 != e.length) {
                    var l = '<table style="font-size:smaller;color:' + aa.grid.color + '">' + e.join("") + "</table>";
                    if (null != aa.legend.container) a(aa.legend.container).html(l);
                    else {
                        var m = "",
                            n = aa.legend.position,
                            o = aa.legend.margin;
                        null == o[0] && (o = [o, o]), "n" == n.charAt(0) ? m += "top:" + (o[1] + ia.top) + "px;" : "s" == n.charAt(0) && (m += "bottom:" + (o[1] + ia.bottom) + "px;"), "e" == n.charAt(1) ? m += "right:" + (o[0] + ia.right) + "px;" : "w" == n.charAt(1) && (m += "left:" + (o[0] + ia.left) + "px;");
                        var p = a('<div class="legend">' + l.replace('style="', 'style="position:absolute;' + m + ";") + "</div>").appendTo(c);
                        if (0 != aa.legend.backgroundOpacity) {
                            var q = aa.legend.backgroundColor;
                            null == q && (q = aa.grid.backgroundColor, q = q && "string" == typeof q ? a.color.parse(q) : a.color.extract(p, "background-color"), q.a = 1, q = q.toString());
                            var r = p.children();
                            a('<div style="position:absolute;width:' + r.width() + "px;height:" + r.height() + "px;" + m + "background-color:" + q + ';"> </div>').prependTo(p).css("opacity", aa.legend.backgroundOpacity)
                        }
                    }
                }
            }
        }

        function O(a, b, c) {
            var d, e, f, g = aa.grid.mouseActiveRadius,
                h = g * g + 1,
                i = null;
            for (d = _.length - 1; d >= 0; --d)
                if (c(_[d])) {
                    var j = _[d],
                        k = j.xaxis,
                        l = j.yaxis,
                        m = j.datapoints.points,
                        n = k.c2p(a),
                        o = l.c2p(b),
                        p = g / k.scale,
                        q = g / l.scale;
                    if (f = j.datapoints.pointsize, k.options.inverseTransform && (p = Number.MAX_VALUE), l.options.inverseTransform && (q = Number.MAX_VALUE), j.lines.show || j.points.show)
                        for (e = 0; e < m.length; e += f) {
                            var r = m[e],
                                s = m[e + 1];
                            if (null != r && !(r - n > p || r - n < -p || s - o > q || s - o < -q)) {
                                var t = Math.abs(k.p2c(r) - a),
                                    u = Math.abs(l.p2c(s) - b),
                                    v = t * t + u * u;
                                v < h && (h = v, i = [d, e / f])
                            }
                        }
                    if (j.bars.show && !i) {
                        var w, x;
                        switch (j.bars.align) {
                            case "left":
                                w = 0;
                                break;
                            case "right":
                                w = -j.bars.barWidth;
                                break;
                            default:
                                w = -j.bars.barWidth / 2
                        }
                        for (x = w + j.bars.barWidth, e = 0; e < m.length; e += f) {
                            var r = m[e],
                                s = m[e + 1],
                                y = m[e + 2];
                            null != r && ((_[d].bars.horizontal ? n <= Math.max(y, r) && n >= Math.min(y, r) && o >= s + w && o <= s + x : n >= r + w && n <= r + x && o >= Math.min(y, s) && o <= Math.max(y, s)) && (i = [d, e / f]))
                        }
                    }
                }
            return i ? (d = i[0], e = i[1], f = _[d].datapoints.pointsize, {
                datapoint: _[d].datapoints.points.slice(e * f, (e + 1) * f),
                dataIndex: e,
                series: _[d],
                seriesIndex: d
            }) : null
        }

        function P(a) {
            aa.grid.hoverable && S("plothover", a, function(a) {
                return 0 != a.hoverable
            })
        }

        function Q(a) {
            aa.grid.hoverable && S("plothover", a, function(a) {
                return !1
            })
        }

        function R(a) {
            S("plotclick", a, function(a) {
                return 0 != a.clickable
            })
        }

        function S(a, b, d) {
            var e = da.offset(),
                f = b.pageX - e.left - ia.left,
                g = b.pageY - e.top - ia.top,
                h = m({
                    left: f,
                    top: g
                });
            h.pageX = b.pageX, h.pageY = b.pageY;
            var i = O(f, g, d);
            if (i && (i.pageX = parseInt(i.series.xaxis.p2c(i.datapoint[0]) + e.left + ia.left, 10), i.pageY = parseInt(i.series.yaxis.p2c(i.datapoint[1]) + e.top + ia.top, 10)), aa.grid.autoHighlight) {
                for (var j = 0; j < na.length; ++j) {
                    var k = na[j];
                    k.auto != a || i && k.series == i.series && k.point[0] == i.datapoint[0] && k.point[1] == i.datapoint[1] || W(k.series, k.point)
                }
                i && V(i.series, i.datapoint, a)
            }
            c.trigger(a, [h, i])
        }

        function T() {
            var a = aa.interaction.redrawOverlayInterval;
            if (-1 == a) return void U();
            oa || (oa = setTimeout(U, a))
        }

        function U() {
            oa = null, fa.save(), ca.clear(), fa.translate(ia.left, ia.top);
            var a, b;
            for (a = 0; a < na.length; ++a) b = na[a], b.series.bars.show ? Z(b.series, b.point) : Y(b.series, b.point);
            fa.restore(), h(la.drawOverlay, [fa])
        }

        function V(a, b, c) {
            if ("number" == typeof a && (a = _[a]), "number" == typeof b) {
                var d = a.datapoints.pointsize;
                b = a.datapoints.points.slice(d * b, d * (b + 1))
            }
            var e = X(a, b); - 1 == e ? (na.push({
                series: a,
                point: b,
                auto: c
            }), T()) : c || (na[e].auto = !1)
        }

        function W(a, b) {
            if (null == a && null == b) return na = [], void T();
            if ("number" == typeof a && (a = _[a]), "number" == typeof b) {
                var c = a.datapoints.pointsize;
                b = a.datapoints.points.slice(c * b, c * (b + 1))
            }
            var d = X(a, b); - 1 != d && (na.splice(d, 1), T())
        }

        function X(a, b) {
            for (var c = 0; c < na.length; ++c) {
                var d = na[c];
                if (d.series == a && d.point[0] == b[0] && d.point[1] == b[1]) return c
            }
            return -1
        }

        function Y(b, c) {
            var d = c[0],
                e = c[1],
                f = b.xaxis,
                g = b.yaxis,
                h = "string" == typeof b.highlightColor ? b.highlightColor : a.color.parse(b.color).scale("a", .5).toString();
            if (!(d < f.min || d > f.max || e < g.min || e > g.max)) {
                var i = b.points.radius + b.points.lineWidth / 2;
                fa.lineWidth = i, fa.strokeStyle = h;
                var j = 1.5 * i;
                d = f.p2c(d), e = g.p2c(e), fa.beginPath(), "circle" == b.points.symbol ? fa.arc(d, e, j, 0, 2 * Math.PI, !1) : b.points.symbol(fa, d, e, j, !1), fa.closePath(), fa.stroke()
            }
        }

        function Z(b, c) {
            var d, e = "string" == typeof b.highlightColor ? b.highlightColor : a.color.parse(b.color).scale("a", .5).toString(),
                f = e;
            switch (b.bars.align) {
                case "left":
                    d = 0;
                    break;
                case "right":
                    d = -b.bars.barWidth;
                    break;
                default:
                    d = -b.bars.barWidth / 2
            }
            fa.lineWidth = b.bars.lineWidth, fa.strokeStyle = e, K(c[0], c[1], c[2] || 0, d, d + b.bars.barWidth, function() {
                return f
            }, b.xaxis, b.yaxis, fa, b.bars.horizontal, b.bars.lineWidth)
        }

        function $(b, c, d, e) {
            if ("string" == typeof b) return b;
            for (var f = ea.createLinearGradient(0, d, 0, c), g = 0, h = b.colors.length; g < h; ++g) {
                var i = b.colors[g];
                if ("string" != typeof i) {
                    var j = a.color.parse(e);
                    null != i.brightness && (j = j.scale("rgb", i.brightness)), null != i.opacity && (j.a *= i.opacity), i = j.toString()
                }
                f.addColorStop(g / (h - 1), i)
            }
            return f
        }
        var _ = [],
            aa = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85,
                    sorted: null
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    font: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null
                },
                yaxis: {
                    autoscaleMargin: .02,
                    position: "left"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle"
                    },
                    lines: {
                        lineWidth: 2,
                        fill: !1,
                        fillColor: null,
                        steps: !1
                    },
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1,
                        zero: !0
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    margin: 0,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                interaction: {
                    redrawOverlayInterval: 1e3 / 60
                },
                hooks: {}
            },
            ba = null,
            ca = null,
            da = null,
            ea = null,
            fa = null,
            ga = [],
            ha = [],
            ia = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            ja = 0,
            ka = 0,
            la = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            },
            ma = this;
        ma.setData = i, ma.setupGrid = x, ma.draw = C, ma.getPlaceholder = function() {
                return c
            }, ma.getCanvas = function() {
                return ba.element
            }, ma.getPlotOffset = function() {
                return ia
            }, ma.width = function() {
                return ja
            }, ma.height = function() {
                return ka
            }, ma.offset = function() {
                var a = da.offset();
                return a.left += ia.left, a.top += ia.top, a
            }, ma.getData = function() {
                return _
            }, ma.getAxes = function() {
                var b = {};
                return a.each(ga.concat(ha), function(a, c) {
                    c && (b[c.direction + (1 != c.n ? c.n : "") + "axis"] = c)
                }), b
            }, ma.getXAxes = function() {
                return ga
            }, ma.getYAxes = function() {
                return ha
            }, ma.c2p = m, ma.p2c = n, ma.getOptions = function() {
                return aa
            }, ma.highlight = V, ma.unhighlight = W, ma.triggerRedrawOverlay = T, ma.pointOffset = function(a) {
                return {
                    left: parseInt(ga[k(a, "x") - 1].p2c(+a.x) + ia.left, 10),
                    top: parseInt(ha[k(a, "y") - 1].p2c(+a.y) + ia.top, 10)
                }
            }, ma.shutdown = r, ma.destroy = function() {
                r(), c.removeData("plot").empty(), _ = [], aa = null, ba = null, ca = null, da = null, ea = null, fa = null, ga = [], ha = [], la = null, na = [], ma = null
            }, ma.resize = function() {
                var a = c.width(),
                    b = c.height();
                ba.resize(a, b), ca.resize(a, b)
            }, ma.hooks = la,
            function() {
                for (var c = {
                        Canvas: b
                    }, d = 0; d < g.length; ++d) {
                    var e = g[d];
                    e.init(ma, c), e.options && a.extend(!0, aa, e.options)
                }
            }(),
            function(b) {
                a.extend(!0, aa, b), b && b.colors && (aa.colors = b.colors), null == aa.xaxis.color && (aa.xaxis.color = a.color.parse(aa.grid.color).scale("a", .22).toString()), null == aa.yaxis.color && (aa.yaxis.color = a.color.parse(aa.grid.color).scale("a", .22).toString()), null == aa.xaxis.tickColor && (aa.xaxis.tickColor = aa.grid.tickColor || aa.xaxis.color), null == aa.yaxis.tickColor && (aa.yaxis.tickColor = aa.grid.tickColor || aa.yaxis.color), null == aa.grid.borderColor && (aa.grid.borderColor = aa.grid.color), null == aa.grid.tickColor && (aa.grid.tickColor = a.color.parse(aa.grid.color).scale("a", .22).toString());
                var d, e, f, g = c.css("font-size"),
                    i = g ? +g.replace("px", "") : 13,
                    j = {
                        style: c.css("font-style"),
                        size: Math.round(.8 * i),
                        variant: c.css("font-variant"),
                        weight: c.css("font-weight"),
                        family: c.css("font-family")
                    };
                for (f = aa.xaxes.length || 1, d = 0; d < f; ++d) e = aa.xaxes[d], e && !e.tickColor && (e.tickColor = e.color), e = a.extend(!0, {}, aa.xaxis, e), aa.xaxes[d] = e, e.font && (e.font = a.extend({}, j, e.font), e.font.color || (e.font.color = e.color), e.font.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)));
                for (f = aa.yaxes.length || 1, d = 0; d < f; ++d) e = aa.yaxes[d], e && !e.tickColor && (e.tickColor = e.color), e = a.extend(!0, {}, aa.yaxis, e), aa.yaxes[d] = e, e.font && (e.font = a.extend({}, j, e.font), e.font.color || (e.font.color = e.color),
                    e.font.lineHeight || (e.font.lineHeight = Math.round(1.15 * e.font.size)));
                for (aa.xaxis.noTicks && null == aa.xaxis.ticks && (aa.xaxis.ticks = aa.xaxis.noTicks), aa.yaxis.noTicks && null == aa.yaxis.ticks && (aa.yaxis.ticks = aa.yaxis.noTicks), aa.x2axis && (aa.xaxes[1] = a.extend(!0, {}, aa.xaxis, aa.x2axis), aa.xaxes[1].position = "top", null == aa.x2axis.min && (aa.xaxes[1].min = null), null == aa.x2axis.max && (aa.xaxes[1].max = null)), aa.y2axis && (aa.yaxes[1] = a.extend(!0, {}, aa.yaxis, aa.y2axis), aa.yaxes[1].position = "right", null == aa.y2axis.min && (aa.yaxes[1].min = null), null == aa.y2axis.max && (aa.yaxes[1].max = null)), aa.grid.coloredAreas && (aa.grid.markings = aa.grid.coloredAreas), aa.grid.coloredAreasColor && (aa.grid.markingsColor = aa.grid.coloredAreasColor), aa.lines && a.extend(!0, aa.series.lines, aa.lines), aa.points && a.extend(!0, aa.series.points, aa.points), aa.bars && a.extend(!0, aa.series.bars, aa.bars), null != aa.shadowSize && (aa.series.shadowSize = aa.shadowSize), null != aa.highlightColor && (aa.series.highlightColor = aa.highlightColor), d = 0; d < aa.xaxes.length; ++d) o(ga, d + 1).options = aa.xaxes[d];
                for (d = 0; d < aa.yaxes.length; ++d) o(ha, d + 1).options = aa.yaxes[d];
                for (var k in la) aa.hooks[k] && aa.hooks[k].length && (la[k] = la[k].concat(aa.hooks[k]));
                h(la.processOptions, [aa])
            }(f),
            function() {
                c.css("padding", 0).children().filter(function() {
                    return !a(this).hasClass("flot-overlay") && !a(this).hasClass("flot-base")
                }).remove(), "static" == c.css("position") && c.css("position", "relative"), ba = new b("flot-base", c), ca = new b("flot-overlay", c), ea = ba.context, fa = ca.context, da = a(ca.element).unbind();
                var d = c.data("plot");
                d && (d.shutdown(), ca.clear()), c.data("plot", ma)
            }(), i(e), x(), C(),
            function() {
                aa.grid.hoverable && (da.mousemove(P), da.bind("mouseleave", Q)), aa.grid.clickable && da.click(R), h(la.bindEvents, [da])
            }();
        var na = [],
            oa = null
    }

    function d(a, b) {
        return b * Math.floor(a / b)
    }
    var e = Object.prototype.hasOwnProperty;
    a.fn.detach || (a.fn.detach = function() {
        return this.each(function() {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }), b.prototype.resize = function(a, b) {
        if (a <= 0 || b <= 0) throw new Error("Invalid dimensions for plot, width = " + a + ", height = " + b);
        var c = this.element,
            d = this.context,
            e = this.pixelRatio;
        this.width != a && (c.width = a * e, c.style.width = a + "px", this.width = a), this.height != b && (c.height = b * e, c.style.height = b + "px", this.height = b), d.restore(), d.save(), d.scale(e, e)
    }, b.prototype.clear = function() {
        this.context.clearRect(0, 0, this.width, this.height)
    }, b.prototype.render = function() {
        var a = this._textCache;
        for (var b in a)
            if (e.call(a, b)) {
                var c = this.getTextLayer(b),
                    d = a[b];
                c.hide();
                for (var f in d)
                    if (e.call(d, f)) {
                        var g = d[f];
                        for (var h in g)
                            if (e.call(g, h)) {
                                for (var i, j = g[h].positions, k = 0; i = j[k]; k++) i.active ? i.rendered || (c.append(i.element), i.rendered = !0) : (j.splice(k--, 1), i.rendered && i.element.detach());
                                0 == j.length && delete g[h]
                            }
                    }
                c.show()
            }
    }, b.prototype.getTextLayer = function(b) {
        var c = this.text[b];
        return null == c && (null == this.textContainer && (this.textContainer = a("<div class='flot-text'></div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "font-size": "smaller",
            color: "#545454"
        }).insertAfter(this.element)), c = this.text[b] = a("<div></div>").addClass(b).css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }).appendTo(this.textContainer)), c
    }, b.prototype.getTextInfo = function(b, c, d, e, f) {
        var g, h, i, j;
        if (c = "" + c, g = "object" == typeof d ? d.style + " " + d.variant + " " + d.weight + " " + d.size + "px/" + d.lineHeight + "px " + d.family : d, h = this._textCache[b], null == h && (h = this._textCache[b] = {}), i = h[g], null == i && (i = h[g] = {}), null == (j = i[c])) {
            var k = a("<div></div>").html(c).css({
                position: "absolute",
                "max-width": f,
                top: -9999
            }).appendTo(this.getTextLayer(b));
            "object" == typeof d ? k.css({
                font: g,
                color: d.color
            }) : "string" == typeof d && k.addClass(d), j = i[c] = {
                width: k.outerWidth(!0),
                height: k.outerHeight(!0),
                element: k,
                positions: []
            }, k.detach()
        }
        return j
    }, b.prototype.addText = function(a, b, c, d, e, f, g, h, i) {
        var j = this.getTextInfo(a, d, e, f, g),
            k = j.positions;
        "center" == h ? b -= j.width / 2 : "right" == h && (b -= j.width), "middle" == i ? c -= j.height / 2 : "bottom" == i && (c -= j.height);
        for (var l, m = 0; l = k[m]; m++)
            if (l.x == b && l.y == c) return void(l.active = !0);
        l = {
            active: !0,
            rendered: !1,
            element: k.length ? j.element.clone() : j.element,
            x: b,
            y: c
        }, k.push(l), l.element.css({
            top: Math.round(c),
            left: Math.round(b),
            "text-align": h
        })
    }, b.prototype.removeText = function(a, b, c, d, f, g) {
        if (null == d) {
            var h = this._textCache[a];
            if (null != h)
                for (var i in h)
                    if (e.call(h, i)) {
                        var j = h[i];
                        for (var k in j)
                            if (e.call(j, k))
                                for (var l, m = j[k].positions, n = 0; l = m[n]; n++) l.active = !1
                    }
        } else
            for (var l, m = this.getTextInfo(a, d, f, g).positions, n = 0; l = m[n]; n++) l.x == b && l.y == c && (l.active = !1)
    }, a.plot = function(b, d, e) {
        return new c(a(b), d, e, a.plot.plugins)
    }, a.plot.version = "0.8.3", a.plot.plugins = [], a.fn.plot = function(b, c) {
        return this.each(function() {
            a.plot(this, b, c)
        })
    }
}(jQuery),
function(a, b, c) {
    "$:nomunge";

    function d(c) {
        !0 === h && (h = c || 1);
        for (var i = f.length - 1; i >= 0; i--) {
            var m = a(f[i]);
            if (m[0] == b || m.is(":visible")) {
                var n = m.width(),
                    o = m.height(),
                    p = m.data(k);
                !p || n === p.w && o === p.h || (m.trigger(j, [p.w = n, p.h = o]), h = c || !0)
            } else p = m.data(k), p.w = 0, p.h = 0
        }
        null !== e && (h && (null == c || c - h < 1e3) ? e = b.requestAnimationFrame(d) : (e = setTimeout(d, g[l]), h = !1))
    }
    var e, f = [],
        g = a.resize = a.extend(a.resize, {}),
        h = !1,
        i = "setTimeout",
        j = "resize",
        k = j + "-special-event",
        l = "pendingDelay",
        m = "activeDelay",
        n = "throttleWindow";
    g[l] = 200, g[m] = 20, g[n] = !0, a.event.special[j] = {
        setup: function() {
            if (!g[n] && this[i]) return !1;
            var b = a(this);
            f.push(this), b.data(k, {
                w: b.width(),
                h: b.height()
            }), 1 === f.length && (e = c, d())
        },
        teardown: function() {
            if (!g[n] && this[i]) return !1;
            for (var b = a(this), c = f.length - 1; c >= 0; c--)
                if (f[c] == this) {
                    f.splice(c, 1);
                    break
                }
            b.removeData(k), f.length || (h ? cancelAnimationFrame(e) : clearTimeout(e), e = null)
        },
        add: function(b) {
            function d(b, d, f) {
                var g = a(this),
                    h = g.data(k) || {};
                h.w = d !== c ? d : g.width(), h.h = f !== c ? f : g.height(), e.apply(this, arguments)
            }
            if (!g[n] && this[i]) return !1;
            var e;
            if (a.isFunction(b)) return e = b, d;
            e = b.handler, b.handler = d
        }
    }, b.requestAnimationFrame || (b.requestAnimationFrame = function() {
        return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a, c) {
            return b.setTimeout(function() {
                a((new Date).getTime())
            }, g[m])
        }
    }()), b.cancelAnimationFrame || (b.cancelAnimationFrame = function() {
        return b.webkitCancelRequestAnimationFrame || b.mozCancelRequestAnimationFrame || b.oCancelRequestAnimationFrame || b.msCancelRequestAnimationFrame || clearTimeout
    }())
}(jQuery, this),
function(a) {
    function b(a) {
        function b() {
            var b = a.getPlaceholder();
            0 != b.width() && 0 != b.height() && (a.resize(), a.setupGrid(), a.draw())
        }

        function c(a, c) {
            a.getPlaceholder().resize(b)
        }

        function d(a, c) {
            a.getPlaceholder().unbind("resize", b)
        }
        a.hooks.bindEvents.push(c), a.hooks.shutdown.push(d)
    }
    var c = {};
    a.plot.plugins.push({
        init: b,
        options: c,
        name: "resize",
        version: "1.0"
    })
}(jQuery),
function(a) {
    function b(b) {
        function e(b, c, d) {
            x || (x = !0, r = b.getCanvas(), s = a(r).parent(), t = b.getOptions(), b.setData(f(b.getData())))
        }

        function f(b) {
            for (var c = 0, d = 0, e = 0, f = t.series.pie.combine.color, g = [], h = 0; h < b.length; ++h) {
                var i = b[h].data;
                a.isArray(i) && 1 == i.length && (i = i[0]), a.isArray(i) ? !isNaN(parseFloat(i[1])) && isFinite(i[1]) ? i[1] = +i[1] : i[1] = 0 : i = !isNaN(parseFloat(i)) && isFinite(i) ? [1, +i] : [1, 0], b[h].data = [i]
            }
            for (var h = 0; h < b.length; ++h) c += b[h].data[0][1];
            for (var h = 0; h < b.length; ++h) {
                var i = b[h].data[0][1];
                i / c <= t.series.pie.combine.threshold && (d += i, e++, f || (f = b[h].color))
            }
            for (var h = 0; h < b.length; ++h) {
                var i = b[h].data[0][1];
                (e < 2 || i / c > t.series.pie.combine.threshold) && g.push(a.extend(b[h], {
                    data: [
                        [1, i]
                    ],
                    color: b[h].color,
                    label: b[h].label,
                    angle: i * Math.PI * 2 / c,
                    percent: i / (c / 100)
                }))
            }
            return e > 1 && g.push({
                data: [
                    [1, d]
                ],
                color: f,
                label: t.series.pie.combine.label,
                angle: d * Math.PI * 2 / c,
                percent: d / (c / 100)
            }), g
        }

        function g(b, e) {
            function f() {
                y.clearRect(0, 0, g, i), s.children().filter(".pieLabel, .pieLabelBackground").remove()
            }
            if (s) {
                var g = b.getPlaceholder().width(),
                    i = b.getPlaceholder().height(),
                    j = s.children().filter(".legend").children().width() || 0;
                y = e, x = !1, u = Math.min(g, i / t.series.pie.tilt) / 2, w = i / 2 + t.series.pie.offset.top, v = g / 2, "auto" == t.series.pie.offset.left ? (t.legend.position.match("w") ? v += j / 2 : v -= j / 2, v < u ? v = u : v > g - u && (v = g - u)) : v += t.series.pie.offset.left;
                var k = b.getData(),
                    l = 0;
                do {
                    l > 0 && (u *= d), l += 1, f(), t.series.pie.tilt <= .8 && function() {
                        var a = t.series.pie.shadow.left,
                            b = t.series.pie.shadow.top,
                            c = t.series.pie.shadow.alpha,
                            d = t.series.pie.radius > 1 ? t.series.pie.radius : u * t.series.pie.radius;
                        if (!(d >= g / 2 - a || d * t.series.pie.tilt >= i / 2 - b || d <= 10)) {
                            y.save(), y.translate(a, b), y.globalAlpha = c, y.fillStyle = "#000", y.translate(v, w), y.scale(1, t.series.pie.tilt);
                            for (var e = 1; e <= 10; e++) y.beginPath(), y.arc(0, 0, d, 0, 2 * Math.PI, !1), y.fill(), d -= e;
                            y.restore()
                        }
                    }()
                } while (! function() {
                        function b(a, b, c) {
                            a <= 0 || isNaN(a) || (c ? y.fillStyle = b : (y.strokeStyle = b, y.lineJoin = "round"), y.beginPath(), Math.abs(a - 2 * Math.PI) > 1e-9 && y.moveTo(0, 0), y.arc(0, 0, d, e, e + a / 2, !1), y.arc(0, 0, d, e + a / 2, e + a, !1), y.closePath(), e += a, c ? y.fill() : y.stroke())
                        }
                        var c = Math.PI * t.series.pie.startAngle,
                            d = t.series.pie.radius > 1 ? t.series.pie.radius : u * t.series.pie.radius;
                        y.save(), y.translate(v, w), y.scale(1, t.series.pie.tilt), y.save();
                        for (var e = c, f = 0; f < k.length; ++f) k[f].startAngle = e, b(k[f].angle, k[f].color, !0);
                        if (y.restore(), t.series.pie.stroke.width > 0) {
                            y.save(), y.lineWidth = t.series.pie.stroke.width, e = c;
                            for (var f = 0; f < k.length; ++f) b(k[f].angle, t.series.pie.stroke.color, !1);
                            y.restore()
                        }
                        return h(y), y.restore(), !t.series.pie.label.show || function() {
                            for (var b = c, d = t.series.pie.label.radius > 1 ? t.series.pie.label.radius : u * t.series.pie.label.radius, e = 0; e < k.length; ++e) {
                                if (k[e].percent >= 100 * t.series.pie.label.threshold && ! function(b, c, e) {
                                        if (0 == b.data[0][1]) return !0;
                                        var f, h = t.legend.labelFormatter,
                                            j = t.series.pie.label.formatter;
                                        f = h ? h(b.label, b) : b.label, j && (f = j(f, b));
                                        var k = (c + b.angle + c) / 2,
                                            l = v + Math.round(Math.cos(k) * d),
                                            m = w + Math.round(Math.sin(k) * d) * t.series.pie.tilt,
                                            n = "<span class='pieLabel' id='pieLabel" + e + "' style='position:absolute;top:" + m + "px;left:" + l + "px;'>" + f + "</span>";
                                        s.append(n);
                                        var o = s.children("#pieLabel" + e),
                                            p = m - o.height() / 2,
                                            q = l - o.width() / 2;
                                        if (o.css("top", p), o.css("left", q), 0 - p > 0 || 0 - q > 0 || i - (p + o.height()) < 0 || g - (q + o.width()) < 0) return !1;
                                        if (0 != t.series.pie.label.background.opacity) {
                                            var r = t.series.pie.label.background.color;
                                            null == r && (r = b.color);
                                            var u = "top:" + p + "px;left:" + q + "px;";
                                            a("<div class='pieLabelBackground' style='position:absolute;width:" + o.width() + "px;height:" + o.height() + "px;" + u + "background-color:" + r + ";'></div>").css("opacity", t.series.pie.label.background.opacity).insertBefore(o)
                                        }
                                        return !0
                                    }(k[e], b, e)) return !1;
                                b += k[e].angle
                            }
                            return !0
                        }()
                    }() && l < c);
                l >= c && (f(), s.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), b.setSeries && b.insertLegend && (b.setSeries(k), b.insertLegend())
            }
        }

        function h(a) {
            if (t.series.pie.innerRadius > 0) {
                a.save();
                var b = t.series.pie.innerRadius > 1 ? t.series.pie.innerRadius : u * t.series.pie.innerRadius;
                a.globalCompositeOperation = "destination-out", a.beginPath(), a.fillStyle = t.series.pie.stroke.color, a.arc(0, 0, b, 0, 2 * Math.PI, !1), a.fill(), a.closePath(), a.restore(), a.save(), a.beginPath(), a.strokeStyle = t.series.pie.stroke.color, a.arc(0, 0, b, 0, 2 * Math.PI, !1), a.stroke(), a.closePath(), a.restore()
            }
        }

        function i(a, b) {
            for (var c = !1, d = -1, e = a.length, f = e - 1; ++d < e; f = d)(a[d][1] <= b[1] && b[1] < a[f][1] || a[f][1] <= b[1] && b[1] < a[d][1]) && b[0] < (a[f][0] - a[d][0]) * (b[1] - a[d][1]) / (a[f][1] - a[d][1]) + a[d][0] && (c = !c);
            return c
        }

        function j(a, c) {
            for (var d, e, f = b.getData(), g = b.getOptions(), h = g.series.pie.radius > 1 ? g.series.pie.radius : u * g.series.pie.radius, j = 0; j < f.length; ++j) {
                var k = f[j];
                if (k.pie.show) {
                    if (y.save(), y.beginPath(), y.moveTo(0, 0), y.arc(0, 0, h, k.startAngle, k.startAngle + k.angle / 2, !1), y.arc(0, 0, h, k.startAngle + k.angle / 2, k.startAngle + k.angle, !1), y.closePath(), d = a - v, e = c - w, y.isPointInPath) {
                        if (y.isPointInPath(a - v, c - w)) return y.restore(), {
                            datapoint: [k.percent, k.data],
                            dataIndex: 0,
                            series: k,
                            seriesIndex: j
                        }
                    } else {
                        if (i([
                                [0, 0],
                                [h * Math.cos(k.startAngle), h * Math.sin(k.startAngle)],
                                [h * Math.cos(k.startAngle + k.angle / 4), h * Math.sin(k.startAngle + k.angle / 4)],
                                [h * Math.cos(k.startAngle + k.angle / 2), h * Math.sin(k.startAngle + k.angle / 2)],
                                [h * Math.cos(k.startAngle + k.angle / 1.5), h * Math.sin(k.startAngle + k.angle / 1.5)],
                                [h * Math.cos(k.startAngle + k.angle), h * Math.sin(k.startAngle + k.angle)]
                            ], [d, e])) return y.restore(), {
                            datapoint: [k.percent, k.data],
                            dataIndex: 0,
                            series: k,
                            seriesIndex: j
                        }
                    }
                    y.restore()
                }
            }
            return null
        }

        function k(a) {
            m("plothover", a)
        }

        function l(a) {
            m("plotclick", a)
        }

        function m(a, c) {
            var d = b.offset(),
                e = parseInt(c.pageX - d.left),
                f = parseInt(c.pageY - d.top),
                g = j(e, f);
            if (t.grid.autoHighlight)
                for (var h = 0; h < z.length; ++h) {
                    var i = z[h];
                    i.auto != a || g && i.series == g.series || o(i.series)
                }
            g && n(g.series, a);
            var k = {
                pageX: c.pageX,
                pageY: c.pageY
            };
            s.trigger(a, [k, g])
        }

        function n(a, c) {
            var d = p(a); - 1 == d ? (z.push({
                series: a,
                auto: c
            }), b.triggerRedrawOverlay()) : c || (z[d].auto = !1)
        }

        function o(a) {
            null == a && (z = [], b.triggerRedrawOverlay());
            var c = p(a); - 1 != c && (z.splice(c, 1), b.triggerRedrawOverlay())
        }

        function p(a) {
            for (var b = 0; b < z.length; ++b) {
                if (z[b].series == a) return b
            }
            return -1
        }

        function q(a, b) {
            var c = a.getOptions(),
                d = c.series.pie.radius > 1 ? c.series.pie.radius : u * c.series.pie.radius;
            b.save(), b.translate(v, w), b.scale(1, c.series.pie.tilt);
            for (var e = 0; e < z.length; ++e) ! function(a) {
                a.angle <= 0 || isNaN(a.angle) || (b.fillStyle = "rgba(255, 255, 255, " + c.series.pie.highlight.opacity + ")", b.beginPath(), Math.abs(a.angle - 2 * Math.PI) > 1e-9 && b.moveTo(0, 0), b.arc(0, 0, d, a.startAngle, a.startAngle + a.angle / 2, !1), b.arc(0, 0, d, a.startAngle + a.angle / 2, a.startAngle + a.angle, !1), b.closePath(), b.fill())
            }(z[e].series);
            h(b), b.restore()
        }
        var r = null,
            s = null,
            t = null,
            u = null,
            v = null,
            w = null,
            x = !1,
            y = null,
            z = [];
        b.hooks.processOptions.push(function(a, b) {
            b.series.pie.show && (b.grid.show = !1, "auto" == b.series.pie.label.show && (b.legend.show ? b.series.pie.label.show = !1 : b.series.pie.label.show = !0), "auto" == b.series.pie.radius && (b.series.pie.label.show ? b.series.pie.radius = .75 : b.series.pie.radius = 1), b.series.pie.tilt > 1 ? b.series.pie.tilt = 1 : b.series.pie.tilt < 0 && (b.series.pie.tilt = 0))
        }), b.hooks.bindEvents.push(function(a, b) {
            var c = a.getOptions();
            c.series.pie.show && (c.grid.hoverable && b.unbind("mousemove").mousemove(k), c.grid.clickable && b.unbind("click").click(l))
        }), b.hooks.processDatapoints.push(function(a, b, c, d) {
            a.getOptions().series.pie.show && e(a, b, c)
        }), b.hooks.drawOverlay.push(function(a, b) {
            a.getOptions().series.pie.show && q(a, b)
        }), b.hooks.draw.push(function(a, b) {
            a.getOptions().series.pie.show && g(a, b)
        })
    }
    var c = 10,
        d = .95,
        e = {
            series: {
                pie: {
                    show: !1,
                    radius: "auto",
                    innerRadius: 0,
                    startAngle: 1.5,
                    tilt: 1,
                    shadow: {
                        left: 5,
                        top: 15,
                        alpha: .02
                    },
                    offset: {
                        top: 0,
                        left: "auto"
                    },
                    stroke: {
                        color: "#fff",
                        width: 1
                    },
                    label: {
                        show: "auto",
                        formatter: function(a, b) {
                            return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + b.color + ";'>" + a + "<br/>" + Math.round(b.percent) + "%</div>"
                        },
                        radius: 1,
                        background: {
                            color: null,
                            opacity: 0
                        },
                        threshold: 0
                    },
                    combine: {
                        threshold: -1,
                        color: null,
                        label: "Other"
                    },
                    highlight: {
                        opacity: .5
                    }
                }
            }
        };
    a.plot.plugins.push({
        init: b,
        options: e,
        name: "pie",
        version: "1.1"
    })
}(jQuery),
function(a) {
    function b(a, b, c, d) {
        var e = "categories" == b.xaxis.options.mode,
            f = "categories" == b.yaxis.options.mode;
        if (e || f) {
            var g = d.format;
            if (!g) {
                var h = b;
                if (g = [], g.push({
                        x: !0,
                        number: !0,
                        required: !0
                    }), g.push({
                        y: !0,
                        number: !0,
                        required: !0
                    }), h.bars.show || h.lines.show && h.lines.fill) {
                    var i = !!(h.bars.show && h.bars.zero || h.lines.show && h.lines.zero);
                    g.push({
                        y: !0,
                        number: !0,
                        required: !1,
                        defaultValue: 0,
                        autoscale: i
                    }), h.bars.horizontal && (delete g[g.length - 1].y, g[g.length - 1].x = !0)
                }
                d.format = g
            }
            for (var j = 0; j < g.length; ++j) g[j].x && e && (g[j].number = !1), g[j].y && f && (g[j].number = !1)
        }
    }

    function c(a) {
        var b = -1;
        for (var c in a) a[c] > b && (b = a[c]);
        return b + 1
    }

    function d(a) {
        var b = [];
        for (var c in a.categories) {
            var d = a.categories[c];
            d >= a.min && d <= a.max && b.push([d, c])
        }
        return b.sort(function(a, b) {
            return a[0] - b[0]
        }), b
    }

    function e(b, c, e) {
        if ("categories" == b[c].options.mode) {
            if (!b[c].categories) {
                var g = {},
                    h = b[c].options.categories || {};
                if (a.isArray(h))
                    for (var i = 0; i < h.length; ++i) g[h[i]] = i;
                else
                    for (var j in h) g[j] = h[j];
                b[c].categories = g
            }
            b[c].options.ticks || (b[c].options.ticks = d), f(e, c, b[c].categories)
        }
    }

    function f(a, b, d) {
        for (var e = a.points, f = a.pointsize, g = a.format, h = b.charAt(0), i = c(d), j = 0; j < e.length; j += f)
            if (null != e[j])
                for (var k = 0; k < f; ++k) {
                    var l = e[j + k];
                    null != l && g[k][h] && (l in d || (d[l] = i, ++i), e[j + k] = d[l])
                }
    }

    function g(a, b, c) {
        e(b, "xaxis", c), e(b, "yaxis", c)
    }

    function h(a) {
        a.hooks.processRawData.push(b), a.hooks.processDatapoints.push(g)
    }
    var i = {
        xaxis: {
            categories: null
        },
        yaxis: {
            categories: null
        }
    };
    a.plot.plugins.push({
        init: h,
        options: i,
        name: "categories",
        version: "1.0"
    })
}(jQuery),
function(a) {
    function b(a, b) {
        return b * Math.floor(a / b)
    }

    function c(a, b, c, d) {
        if ("function" == typeof a.strftime) return a.strftime(b);
        var e = function(a, b) {
                return a = "" + a, b = "" + (null == b ? "0" : b), 1 == a.length ? b + a : a
            },
            f = [],
            g = !1,
            h = a.getHours(),
            i = h < 12;
        null == c && (c = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), null == d && (d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
        var j;
        j = h > 12 ? h - 12 : 0 == h ? 12 : h;
        for (var k = 0; k < b.length; ++k) {
            var l = b.charAt(k);
            if (g) {
                switch (l) {
                    case "a":
                        l = "" + d[a.getDay()];
                        break;
                    case "b":
                        l = "" + c[a.getMonth()];
                        break;
                    case "d":
                        l = e(a.getDate());
                        break;
                    case "e":
                        l = e(a.getDate(), " ");
                        break;
                    case "h":
                    case "H":
                        l = e(h);
                        break;
                    case "I":
                        l = e(j);
                        break;
                    case "l":
                        l = e(j, " ");
                        break;
                    case "m":
                        l = e(a.getMonth() + 1);
                        break;
                    case "M":
                        l = e(a.getMinutes());
                        break;
                    case "q":
                        l = "" + (Math.floor(a.getMonth() / 3) + 1);
                        break;
                    case "S":
                        l = e(a.getSeconds());
                        break;
                    case "y":
                        l = e(a.getFullYear() % 100);
                        break;
                    case "Y":
                        l = "" + a.getFullYear();
                        break;
                    case "p":
                        l = i ? "am" : "pm";
                        break;
                    case "P":
                        l = i ? "AM" : "PM";
                        break;
                    case "w":
                        l = "" + a.getDay()
                }
                f.push(l), g = !1
            } else "%" == l ? g = !0 : f.push(l)
        }
        return f.join("")
    }

    function d(a) {
        function b(a, b, c, d) {
            a[b] = function() {
                return c[d].apply(c, arguments)
            }
        }
        var c = {
            date: a
        };
        void 0 != a.strftime && b(c, "strftime", a, "strftime"), b(c, "getTime", a, "getTime"), b(c, "setTime", a, "setTime");
        for (var d = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], e = 0; e < d.length; e++) b(c, "get" + d[e], a, "getUTC" + d[e]), b(c, "set" + d[e], a, "setUTC" + d[e]);
        return c
    }

    function e(a, b) {
        if ("browser" == b.timezone) return new Date(a);
        if (b.timezone && "utc" != b.timezone) {
            if ("undefined" != typeof timezoneJS && void 0 !== timezoneJS.Date) {
                var c = new timezoneJS.Date;
                return c.setTimezone(b.timezone), c.setTime(a), c
            }
            return d(new Date(a))
        }
        return d(new Date(a))
    }

    function f(d) {
        d.hooks.processOptions.push(function(d, f) {
            a.each(d.getAxes(), function(a, d) {
                var f = d.options;
                "time" == f.mode && (d.tickGenerator = function(a) {
                    var c = [],
                        d = e(a.min, f),
                        g = 0,
                        i = f.tickSize && "quarter" === f.tickSize[1] || f.minTickSize && "quarter" === f.minTickSize[1] ? k : j;
                    null != f.minTickSize && (g = "number" == typeof f.tickSize ? f.tickSize : f.minTickSize[0] * h[f.minTickSize[1]]);
                    for (var l = 0; l < i.length - 1 && !(a.delta < (i[l][0] * h[i[l][1]] + i[l + 1][0] * h[i[l + 1][1]]) / 2 && i[l][0] * h[i[l][1]] >= g); ++l);
                    var m = i[l][0],
                        n = i[l][1];
                    if ("year" == n) {
                        if (null != f.minTickSize && "year" == f.minTickSize[1]) m = Math.floor(f.minTickSize[0]);
                        else {
                            var o = Math.pow(10, Math.floor(Math.log(a.delta / h.year) / Math.LN10)),
                                p = a.delta / h.year / o;
                            m = p < 1.5 ? 1 : p < 3 ? 2 : p < 7.5 ? 5 : 10, m *= o
                        }
                        m < 1 && (m = 1)
                    }
                    a.tickSize = f.tickSize || [m, n];
                    var q = a.tickSize[0];
                    n = a.tickSize[1];
                    var r = q * h[n];
                    "second" == n ? d.setSeconds(b(d.getSeconds(), q)) : "minute" == n ? d.setMinutes(b(d.getMinutes(), q)) : "hour" == n ? d.setHours(b(d.getHours(), q)) : "month" == n ? d.setMonth(b(d.getMonth(), q)) : "quarter" == n ? d.setMonth(3 * b(d.getMonth() / 3, q)) : "year" == n && d.setFullYear(b(d.getFullYear(), q)), d.setMilliseconds(0), r >= h.minute && d.setSeconds(0), r >= h.hour && d.setMinutes(0), r >= h.day && d.setHours(0), r >= 4 * h.day && d.setDate(1), r >= 2 * h.month && d.setMonth(b(d.getMonth(), 3)), r >= 2 * h.quarter && d.setMonth(b(d.getMonth(), 6)), r >= h.year && d.setMonth(0);
                    var s, t = 0,
                        u = Number.NaN;
                    do {
                        if (s = u, u = d.getTime(), c.push(u), "month" == n || "quarter" == n)
                            if (q < 1) {
                                d.setDate(1);
                                var v = d.getTime();
                                d.setMonth(d.getMonth() + ("quarter" == n ? 3 : 1));
                                var w = d.getTime();
                                d.setTime(u + t * h.hour + (w - v) * q), t = d.getHours(), d.setHours(0)
                            } else d.setMonth(d.getMonth() + q * ("quarter" == n ? 3 : 1));
                        else "year" == n ? d.setFullYear(d.getFullYear() + q) : d.setTime(u + r)
                    } while (u < a.max && u != s);
                    return c
                }, d.tickFormatter = function(a, b) {
                    var d = e(a, b.options);
                    if (null != f.timeformat) return c(d, f.timeformat, f.monthNames, f.dayNames);
                    var g, i = b.options.tickSize && "quarter" == b.options.tickSize[1] || b.options.minTickSize && "quarter" == b.options.minTickSize[1],
                        j = b.tickSize[0] * h[b.tickSize[1]],
                        k = b.max - b.min,
                        l = f.twelveHourClock ? " %p" : "",
                        m = f.twelveHourClock ? "%I" : "%H";
                    return g = j < h.minute ? m + ":%M:%S" + l : j < h.day ? k < 2 * h.day ? m + ":%M" + l : "%b %d " + m + ":%M" + l : j < h.month ? "%b %d" : i && j < h.quarter || !i && j < h.year ? k < h.year ? "%b" : "%b %Y" : i && j < h.year ? k < h.year ? "Q%q" : "Q%q %Y" : "%Y", c(d, g, f.monthNames, f.dayNames)
                })
            })
        })
    }
    var g = {
            xaxis: {
                timezone: null,
                timeformat: null,
                twelveHourClock: !1,
                monthNames: null
            }
        },
        h = {
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            month: 2592e6,
            quarter: 7776e6,
            year: 525949.2 * 60 * 1e3
        },
        i = [
            [1, "second"],
            [2, "second"],
            [5, "second"],
            [10, "second"],
            [30, "second"],
            [1, "minute"],
            [2, "minute"],
            [5, "minute"],
            [10, "minute"],
            [30, "minute"],
            [1, "hour"],
            [2, "hour"],
            [4, "hour"],
            [8, "hour"],
            [12, "hour"],
            [1, "day"],
            [2, "day"],
            [3, "day"],
            [.25, "month"],
            [.5, "month"],
            [1, "month"],
            [2, "month"]
        ],
        j = i.concat([
            [3, "month"],
            [6, "month"],
            [1, "year"]
        ]),
        k = i.concat([
            [1, "quarter"],
            [2, "quarter"],
            [1, "year"]
        ]);
    a.plot.plugins.push({
        init: f,
        options: g,
        name: "time",
        version: "1.0"
    }), a.plot.formatDate = c, a.plot.dateGenerator = e
}(jQuery);