(function () {
    function h(a) {
        throw a;
    }
    var i = true,
        k = null,
        l = false,
        m, p = this,
        aa = function (a) {
            a = a.split(".");
            for (var b = p, c; c = a.shift();) if (b[c] != k) b = b[c];
            else
            return k;
            return b
        },
        ba = function () {},
        ca = function (a) {
            var b = typeof a;
            if (b == "object") if (a) {
                if (a instanceof Array || !(a instanceof Object) && Object.prototype.toString.call(a) == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array";
                if (!(a instanceof Object) && (Object.prototype.toString.call(a) == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))) return "function"
            } else
            return "null";
            else if (b == "function" && typeof a.call == "undefined") return "object";
            return b
        },
        q = function (a) {
            return ca(a) == "array"
        },
        s = function (a) {
            var b = ca(a);
            return b == "array" || b == "object" && typeof a.length == "number"
        },
        u = function (a) {
            return typeof a == "string"
        },
        w = function (a) {
            return ca(a) == "function"
        },
        da = function (a) {
            a = ca(a);
            return a == "object" || a == "array" || a == "function"
        },
        x = function (a) {
            return a[ea] || (a[ea] = ++fa)
        },
        ea = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36),
        fa = 0,
        ga = function (a) {
            return a.call.apply(a.bind, arguments)
        },
        ha = function (a, b) {
            var c = b || p;
            if (arguments.length > 2) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(c, e)
                }
            } else
            return function () {
                return a.apply(c, arguments)
            }
        },
        y = function () {
            y = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ga : ha;
            return y.apply(k, arguments)
        },
        ia = function (a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                c.unshift.apply(c, b);
                return a.apply(this, c)
            }
        },
        ja = Date.now ||
        function () {
            return +new Date
        },
        z = function (a, b) {
            var c = a.split("."),
                d = p;
            !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) if (!c.length && b !== undefined) d[e] = b;
            else d = d[e] ? d[e] : d[e] = {}
        },
        A = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.F = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    Function.prototype.bind = Function.prototype.bind ||
    function (a) {
        if (arguments.length > 1) {
            var b = Array.prototype.slice.call(arguments, 1);
            b.unshift(this, a);
            return y.apply(k, b)
        } else
        return y(this, a)
    };
    var ka = function () {};
    ka.prototype.na = l;
    ka.prototype.H = function () {
        if (!this.na) {
            this.na = i;
            this.i()
        }
    };
    ka.prototype.i = function () {};
    var la = function (a) {
        this.stack = Error().stack || "";
        if (a) this.message = String(a)
    };
    A(la, Error);
    la.prototype.name = "CustomError";
    var ma = function (a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = String(arguments[b]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, c)
        }
        return a
    },
        na = /^[a-zA-Z0-9\-_.!~*'()]*$/,
        oa = function (a) {
            a = String(a);
            if (!na.test(a)) return encodeURIComponent(a);
            return a
        },
        ua = function (a) {
            if (!pa.test(a)) return a;
            if (a.indexOf("&") != -1) a = a.replace(qa, "&amp;");
            if (a.indexOf("<") != -1) a = a.replace(ra, "&lt;");
            if (a.indexOf(">") != -1) a = a.replace(sa, "&gt;");
            if (a.indexOf('"') != -1) a = a.replace(ta, "&quot;");
            return a
        },
        qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /\"/g,
        pa = /[&<>\"]/,
        wa = function (a, b) {
            for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0; c == 0 && g < f; g++) {
                var j = d[g] || "",
                    o = e[g] || "",
                    n = RegExp("(\\d*)(\\D*)", "g"),
                    v = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var t = n.exec(j) || ["", "", ""],
                        r = v.exec(o) || ["", "", ""];
                    if (t[0].length == 0 && r[0].length == 0) break;
                    c = va(t[1].length == 0 ? 0 : parseInt(t[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || va(t[2].length == 0, r[2].length == 0) || va(t[2], r[2])
                } while (c == 0)
            }
            return c
        },
        va = function (a, b) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0
        };
    var xa = function (a, b) {
        b.unshift(a);
        la.call(this, ma.apply(k, b));
        b.shift();
        this.qc = a
    };
    A(xa, la);
    xa.prototype.name = "AssertionError";
    var ya = function (a, b) {
        if (!a) {
            var c = Array.prototype.slice.call(arguments, 2),
                d = "Assertion failed";
            if (b) {
                d += ": " + b;
                var e = c
            }
            h(new xa("" + d, e || []))
        }
    },
        za = function (a) {
            h(new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
        };
    var C = Array.prototype,
        Aa = C.indexOf ?
        function (a, b, c) {
            ya(a.length != k);
            return C.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
            if (u(a)) {
                if (!u(b) || b.length != 1) return -1;
                return a.indexOf(b, c)
            }
            for (; c < a.length; c++) if (c in a && a[c] === b) return c;
            return -1
        },
        Ba = C.forEach ?
        function (a, b, c) {
            ya(a.length != k);
            C.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ca = function (a, b) {
            var c = Aa(a, b);
            if (c >= 0) {
                ya(a.length != k);
                C.splice.call(a, c, 1)
            }
        },
        Da = function () {
            return C.concat.apply(C, arguments)
        },
        Ea = function (a) {
            if (q(a)) return Da(a);
            else {
                for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c];
                return b
            }
        },
        Fa = function (a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b],
                    d;
                if (q(c) || (d = s(c)) && c.hasOwnProperty("callee")) a.push.apply(a, c);
                else if (d) for (var e = a.length, f = c.length, g = 0; g < f; g++) a[e + g] = c[g];
                else a.push(c)
            }
        },
        Ga = function (a, b, c) {
            ya(a.length != k);
            return arguments.length <= 2 ? C.slice.call(a, b) : C.slice.call(a, b, c)
        };
    var Ha = function (a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    },
        Ia = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Ja = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Ka = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        La = function (a) {
            for (var b, c, d = 1; d < arguments.length; d++) {
                c = arguments[d];
                for (b in c) a[b] = c[b];
                for (var e = 0; e < Ka.length; e++) {
                    b = Ka[e];
                    if (Object.prototype.hasOwnProperty.call(c, b)) a[b] = c[b]
                }
            }
        };
    var Ma, Na, Oa, Pa, Qa = function () {
        return p.navigator ? p.navigator.userAgent : k
    };
    Pa = Oa = Na = Ma = l;
    var Ra;
    if (Ra = Qa()) {
        var Sa = p.navigator;
        Ma = Ra.indexOf("Opera") == 0;
        Na = !Ma && Ra.indexOf("MSIE") != -1;
        Oa = !Ma && Ra.indexOf("WebKit") != -1;
        Pa = !Ma && !Oa && Sa.product == "Gecko"
    }
    var D = Na,
        Ta = Pa,
        E = Oa,
        Ua = p.navigator,
        Va = (Ua && Ua.platform || "").indexOf("Mac") != -1,
        Wa;
    a: {
        var Xa = "",
            Ya;
        if (Ma && p.opera) {
            var Za = p.opera.version;
            Xa = typeof Za == "function" ? Za() : Za
        } else {
            if (Ta) Ya = /rv\:([^\);]+)(\)|;)/;
            else if (D) Ya = /MSIE\s+([^\);]+)(\)|;)/;
            else if (E) Ya = /WebKit\/(\S+)/;
            if (Ya) {
                var $a = Ya.exec(Qa());
                Xa = $a ? $a[1] : ""
            }
        }
        if (D) {
            var ab, bb = p.document;
            ab = bb ? bb.documentMode : undefined;
            if (ab > parseFloat(Xa)) {
                Wa = String(ab);
                break a
            }
        }
        Wa = Xa
    }
    var cb = Wa,
        db = {},
        eb = function (a) {
            return db[a] || (db[a] = wa(cb, a) >= 0)
        };
    var fb, gb = !D || eb("9");D && eb("9");
    var hb = function (a) {
        var b;
        b = (b = a.className) && typeof b.split == "function" ? b.split(/\s+/) : [];
        var c;
        c = Ga(arguments, 1);
        for (var d = 0, e = 0; e < c.length; e++) if (!(Aa(b, c[e]) >= 0)) {
            b.push(c[e]);
            d++
        }
        c = d == c.length;
        a.className = b.join(" ");
        return c
    };
    var F = function (a) {
        return a ? new ib(a.nodeType == 9 ? a : a.ownerDocument || a.document) : fb || (fb = new ib)
    },
        jb = function (a, b, c, d) {
            a = d || a;
            b = b && b != "*" ? b.toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (!E || document.compatMode == "CSS1Compat" || eb("528")) && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) if (b == g.nodeName) d[e++] = g;
                    d.length = e;
                    return d
                } else
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++) {
                    b = g.className;
                    if (typeof b.split == "function" && Aa(b.split(/\s+/), c) >= 0) d[e++] = g
                }
                d.length = e;
                return d
            } else
            return a
        },
        lb = function (a, b) {
            Ha(b, function (c, d) {
                if (d == "style") a.style.cssText = c;
                else if (d == "class") a.className = c;
                else if (d == "for") a.htmlFor = c;
                else if (d in kb) a.setAttribute(kb[d], c);
                else a[d] = c
            })
        },
        kb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            height: "height",
            width: "width",
            usemap: "useMap",
            frameborder: "frameBorder",
            maxlength: "maxLength",
            type: "type"
        },
        nb = function (a, b, c) {
            function d(g) {
                if (g) b.appendChild(u(g) ? a.createTextNode(g) : g)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                s(f) && !(da(f) && f.nodeType > 0) ? Ba(mb(f) ? Ea(f) : f, d) : d(f)
            }
        },
        ob = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : k
        },
        mb = function (a) {
            if (a && typeof a.length == "number") if (da(a)) return typeof a.item == "function" || typeof a.item == "string";
            else if (w(a)) return typeof a.item == "function";
            return l
        },
        ib = function (a) {
            this.v = a || p.document || document
        };m = ib.prototype;
    m.jb = function () {
        var a = this.v,
            b = arguments,
            c = b[0],
            d = b[1];
        if (!gb && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', ua(d.name), '"');
            if (d.type) {
                c.push(' type="', ua(d.type), '"');
                var e = {};
                La(e, d);
                d = e;
                delete d.type
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        if (d) if (u(d)) c.className = d;
        else q(d) ? hb.apply(k, [c].concat(d)) : lb(c, d);
        b.length > 2 && nb(a, c, b);
        return c
    };m.createElement = function (a) {
        return this.v.createElement(a)
    };m.createTextNode = function (a) {
        return this.v.createTextNode(a)
    };
    m.e = function () {
        return this.v.parentWindow || this.v.defaultView
    };m.appendChild = function (a, b) {
        a.appendChild(b)
    };m.removeNode = ob;m.contains = function (a, b) {
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var pb = new Function("a", "return a");
    var qb;!D || eb("9");D && eb("8");
    var rb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };A(rb, ka);rb.prototype.i = function () {
        delete this.type;
        delete this.target;
        delete this.currentTarget
    };rb.prototype.Pa = l;rb.prototype.gc = i;
    var sb = function (a, b) {
        a && this.ra(a, b)
    };A(sb, rb);m = sb.prototype;m.target = k;m.relatedTarget = k;m.offsetX = 0;m.offsetY = 0;m.clientX = 0;m.clientY = 0;m.screenX = 0;m.screenY = 0;m.button = 0;m.keyCode = 0;m.charCode = 0;m.ctrlKey = l;m.altKey = l;m.shiftKey = l;m.metaKey = l;m.bc = l;m.oa = k;
    m.ra = function (a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Ta) try {
                pb(d.nodeName)
            } catch (e) {
                d = k
            }
        } else if (c == "mouseover") d = a.fromElement;
        else if (c == "mouseout") d = a.toElement;
        this.relatedTarget = d;
        this.offsetX = a.offsetX !== undefined ? a.offsetX : a.layerX;
        this.offsetY = a.offsetY !== undefined ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== undefined ? a.clientX : a.pageX;
        this.clientY = a.clientY !== undefined ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.bc = Va ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.oa = a;
        delete this.gc;
        delete this.Pa
    };m.i = function () {
        sb.F.i.call(this);
        this.relatedTarget = this.currentTarget = this.target = this.oa = k
    };
    var G = function (a, b) {
        this.ub = b;
        this.M = [];
        a > this.ub && h(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
        for (var c = 0; c < a; c++) this.M.push(this.A ? this.A() : {})
    };A(G, ka);G.prototype.A = k;G.prototype.mb = k;G.prototype.getObject = function () {
        if (this.M.length) return this.M.pop();
        return this.A ? this.A() : {}
    };
    var ub = function (a, b) {
        a.M.length < a.ub ? a.M.push(b) : tb(a, b)
    },
        tb = function (a, b) {
            if (a.mb) a.mb(b);
            else if (da(b)) if (w(b.H)) b.H();
            else
            for (var c in b) delete b[c]
        };
    G.prototype.i = function () {
        G.F.i.call(this);
        for (var a = this.M; a.length;) tb(this, a.pop());
        delete this.M
    };
    var vb;
    var wb = (vb = "ScriptEngine" in p && p.ScriptEngine() == "JScript") ? p.ScriptEngineMajorVersion() + "." + p.ScriptEngineMinorVersion() + "." + p.ScriptEngineBuildVersion() : "0";
    var xb = function () {},
        yb = 0;m = xb.prototype;m.key = 0;m.$ = l;m.bb = l;m.ra = function (a, b, c, d, e, f) {
        if (w(a)) this.rb = i;
        else if (a && a.handleEvent && w(a.handleEvent)) this.rb = l;
        else h(Error("Invalid listener argument"));
        this.fa = a;
        this.Db = b;
        this.src = c;
        this.type = d;
        this.capture = !! e;
        this.Ja = f;
        this.bb = l;
        this.key = ++yb;
        this.$ = l
    };m.handleEvent = function (a) {
        if (this.rb) return this.fa.call(this.Ja || this.src, a);
        return this.fa.handleEvent.call(this.fa, a)
    };
    var zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb;
    (function () {
        function a() {
            return {
                h: 0,
                Z: 0
            }
        }
        function b() {
            return []
        }
        function c() {
            var r = function (B) {
                return g.call(r.src, r.key, B)
            };
            return r
        }
        function d() {
            return new xb
        }
        function e() {
            return new sb
        }
        var f = vb && !(wa(wb, "5.7") >= 0),
            g;
        Eb = function (r) {
            g = r
        };
        if (f) {
            zb = function () {
                return j.getObject()
            };
            Ab = function (r) {
                ub(j, r)
            };
            Bb = function () {
                return o.getObject()
            };
            Cb = function (r) {
                ub(o, r)
            };
            Db = function () {
                return n.getObject()
            };
            Fb = function () {
                ub(n, c())
            };
            Gb = function () {
                return v.getObject()
            };
            Hb = function (r) {
                ub(v, r)
            };
            Ib = function () {
                return t.getObject()
            };
            Jb = function (r) {
                ub(t, r)
            };
            var j = new G(0, 600);
            j.A = a;
            var o = new G(0, 600);
            o.A = b;
            var n = new G(0, 600);
            n.A = c;
            var v = new G(0, 600);
            v.A = d;
            var t = new G(0, 600);
            t.A = e
        } else {
            zb = a;
            Ab = ba;
            Bb = b;
            Cb = ba;
            Db = c;
            Fb = ba;
            Gb = d;
            Hb = ba;
            Ib = e;
            Jb = ba
        }
    })();
    var Kb = {},
        H = {},
        Lb = {},
        Mb = {},
        Nb = function (a, b, c, d, e) {
            if (b) if (q(b)) for (var f = 0; f < b.length; f++) Nb(a, b[f], c, d, e);
            else {
                d = !! d;
                var g = H;
                b in g || (g[b] = zb());
                g = g[b];
                if (!(d in g)) {
                    g[d] = zb();
                    g.h++
                }
                g = g[d];
                var j = x(a),
                    o;
                g.Z++;
                if (g[j]) {
                    o = g[j];
                    for (f = 0; f < o.length; f++) {
                        g = o[f];
                        if (g.fa == c && g.Ja == e) {
                            if (g.$) break;
                            return
                        }
                    }
                } else {
                    o = g[j] = Bb();
                    g.h++
                }
                f = Db();
                f.src = a;
                g = Gb();
                g.ra(c, f, a, b, d, e);
                c = g.key;
                f.key = c;
                o.push(g);
                Kb[c] = g;
                Lb[j] || (Lb[j] = Bb());
                Lb[j].push(g);
                if (a.addEventListener) {
                    if (a == p || !a.Pb) a.addEventListener(b, f, d)
                } else a.attachEvent(Ob(b), f)
            } else h(Error("Invalid event type"))
        },
        Pb = function (a, b, c, d, e) {
            if (q(b)) for (var f = 0; f < b.length; f++) Pb(a, b[f], c, d, e);
            else {
                d = !! d;
                a: {
                    f = H;
                    if (b in f) {
                        f = f[b];
                        if (d in f) {
                            f = f[d];
                            a = x(a);
                            if (f[a]) {
                                a = f[a];
                                break a
                            }
                        }
                    }
                    a = k
                }
                if (a) for (f = 0; f < a.length; f++) if (a[f].fa == c && a[f].capture == d && a[f].Ja == e) {
                    Qb(a[f].key);
                    break
                }
            }
        },
        Qb = function (a) {
            if (Kb[a]) {
                var b = Kb[a];
                if (!b.$) {
                    var c = b.src,
                        d = b.type,
                        e = b.Db,
                        f = b.capture;
                    if (c.removeEventListener) {
                        if (c == p || !c.Pb) c.removeEventListener(d, e, f)
                    } else c.detachEvent && c.detachEvent(Ob(d), e);
                    c =
                    x(c);
                    e = H[d][f][c];
                    if (Lb[c]) {
                        var g = Lb[c];
                        Ca(g, b);
                        g.length == 0 && delete Lb[c]
                    }
                    b.$ = i;
                    e.zb = i;
                    Rb(d, f, c, e);
                    delete Kb[a]
                }
            }
        },
        Rb = function (a, b, c, d) {
            if (!d.sa) if (d.zb) {
                for (var e = 0, f = 0; e < d.length; e++) if (d[e].$) {
                    var g = d[e].Db;
                    g.src = k;
                    Fb(g);
                    Hb(d[e])
                } else {
                    if (e != f) d[f] = d[e];
                    f++
                }
                d.length = f;
                d.zb = l;
                if (f == 0) {
                    Cb(d);
                    delete H[a][b][c];
                    H[a][b].h--;
                    if (H[a][b].h == 0) {
                        Ab(H[a][b]);
                        delete H[a][b];
                        H[a].h--
                    }
                    if (H[a].h == 0) {
                        Ab(H[a]);
                        delete H[a]
                    }
                }
            }
        },
        Ob = function (a) {
            if (a in Mb) return Mb[a];
            return Mb[a] = "on" + a
        },
        Tb = function (a, b, c, d, e) {
            var f =
            1;
            b = x(b);
            if (a[b]) {
                a.Z--;
                a = a[b];
                if (a.sa) a.sa++;
                else a.sa = 1;
                try {
                    for (var g = a.length, j = 0; j < g; j++) {
                        var o = a[j];
                        if (o && !o.$) f &= Sb(o, e) !== l
                    }
                } finally {
                    a.sa--;
                    Rb(c, d, b, a)
                }
            }
            return Boolean(f)
        },
        Sb = function (a, b) {
            var c = a.handleEvent(b);
            a.bb && Qb(a.key);
            return c
        };
    Eb(function (a, b) {
        if (!Kb[a]) return i;
        var c = Kb[a],
            d = c.type,
            e = H;
        if (!(d in e)) return i;
        e = e[d];
        var f, g;
        if (qb === undefined) qb = D && !p.addEventListener;
        if (qb) {
            f = b || aa("window.event");
            var j = i in e,
                o = l in e;
            if (j) {
                if (f.keyCode < 0 || f.returnValue != undefined) return i;
                a: {
                    var n = l;
                    if (f.keyCode == 0) try {
                        f.keyCode = -1;
                        break a
                    } catch (v) {
                        n = i
                    }
                    if (n || f.returnValue == undefined) f.returnValue = i
                }
            }
            n = Ib();
            n.ra(f, this);
            f = i;
            try {
                if (j) {
                    for (var t = Bb(), r = n.currentTarget; r; r = r.parentNode) t.push(r);
                    g = e[i];
                    g.Z = g.h;
                    for (var B = t.length - 1; !n.Pa && B >= 0 && g.Z; B--) {
                        n.currentTarget = t[B];
                        f &= Tb(g, t[B], d, i, n)
                    }
                    if (o) {
                        g = e[l];
                        g.Z = g.h;
                        for (B = 0; !n.Pa && B < t.length && g.Z; B++) {
                            n.currentTarget = t[B];
                            f &= Tb(g, t[B], d, l, n)
                        }
                    }
                } else f = Sb(c, n)
            } finally {
                if (t) {
                    t.length = 0;
                    Cb(t)
                }
                n.H();
                Jb(n)
            }
            return f
        }
        d = new sb(b, this);
        try {
            f = Sb(c, d)
        } finally {
            d.H()
        }
        return f
    });
    var Ub = function (a) {
        a = String(a);
        var b;
        b = /^\s*$/.test(a) ? l : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
        if (b) try {
            return eval("(" + a + ")")
        } catch (c) {}
        h(Error("Invalid JSON string: " + a))
    },
        Vb = function () {},
        Xb = function (a, b) {
            var c = [];
            Wb(a, b, c);
            return c.join("")
        },
        Wb = function (a, b, c) {
            switch (typeof b) {
            case "string":
                Yb(a, b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == k) {
                    c.push("null");
                    break
                }
                if (q(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) {
                        c.push(e);
                        Wb(a, b[f], c);
                        e = ","
                    }
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (e in b) if (Object.prototype.hasOwnProperty.call(b, e)) {
                    f = b[e];
                    if (typeof f != "function") {
                        c.push(d);
                        Yb(a, e, c);
                        c.push(":");
                        Wb(a, f, c);
                        d = ","
                    }
                }
                c.push("}");
                break;
            case "function":
                break;
            default:
                h(Error("Unknown type: " + typeof b))
            }
        },
        Zb = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\u0008": "\\b",
            "\u000c": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\u000b": "\\u000b"
        },
        $b = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        Yb = function (a, b, c) {
            c.push('"', b.replace($b, function (d) {
                if (d in Zb) return Zb[d];
                var e = d.charCodeAt(0),
                    f = "\\u";
                if (e < 16) f += "000";
                else if (e < 256) f += "00";
                else if (e < 4096) f += "0";
                return Zb[d] = f + e.toString(16)
            }), '"')
        };
    var ac = "StopIteration" in p ? p.StopIteration : Error("StopIteration"),
        bc = function () {};bc.prototype.next = function () {
        h(ac)
    };bc.prototype.Ca = function () {
        return this
    };
    var cc = function (a) {
        if (typeof a.C == "function") return a.C();
        if (u(a)) return a.split("");
        if (s(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return Ia(a)
    },
        dc = function (a, b, c) {
            if (typeof a.forEach == "function") a.forEach(b, c);
            else if (s(a) || u(a)) Ba(a, b, c);
            else {
                var d;
                if (typeof a.U == "function") d = a.U();
                else if (typeof a.C != "function") if (s(a) || u(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else d = Ja(a);
                else d = void 0;
                e = cc(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var ec = function (a) {
        this.k = {};
        this.j = [];
        var b = arguments.length;
        if (b > 1) {
            b % 2 && h(Error("Uneven number of arguments"));
            for (var c = 0; c < b; c += 2) this.J(arguments[c], arguments[c + 1])
        } else a && this.Ea(a)
    };m = ec.prototype;m.h = 0;m.Ba = 0;m.C = function () {
        fc(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.k[this.j[b]]);
        return a
    };m.U = function () {
        fc(this);
        return this.j.concat()
    };m.G = function (a) {
        return gc(this.k, a)
    };
    m.remove = function (a) {
        if (gc(this.k, a)) {
            delete this.k[a];
            this.h--;
            this.Ba++;
            this.j.length > 2 * this.h && fc(this);
            return i
        }
        return l
    };
    var fc = function (a) {
        if (a.h != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                if (gc(a.k, d)) a.j[c++] = d;
                b++
            }
            a.j.length = c
        }
        if (a.h != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) {
                d = a.j[b];
                if (!gc(e, d)) {
                    a.j[c++] = d;
                    e[d] = 1
                }
                b++
            }
            a.j.length = c
        }
    };m = ec.prototype;m.get = function (a, b) {
        if (gc(this.k, a)) return this.k[a];
        return b
    };
    m.J = function (a, b) {
        if (!gc(this.k, a)) {
            this.h++;
            this.j.push(a);
            this.Ba++
        }
        this.k[a] = b
    };m.Ea = function (a) {
        var b;
        if (a instanceof ec) {
            b = a.U();
            a = a.C()
        } else {
            b = Ja(a);
            a = Ia(a)
        }
        for (var c = 0; c < b.length; c++) this.J(b[c], a[c])
    };m.R = function () {
        return new ec(this)
    };m.Ca = function (a) {
        fc(this);
        var b = 0,
            c = this.j,
            d = this.k,
            e = this.Ba,
            f = this,
            g = new bc;
        g.next = function () {
            for (;;) {
                e != f.Ba && h(Error("The map has changed since the iterator was created"));
                b >= c.length && h(ac);
                var j = c[b++];
                return a ? j : d[j]
            }
        };
        return g
    };
    var gc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var hc = function (a) {
        this.k = new ec;
        a && this.Ea(a)
    },
        ic = function (a) {
            var b = typeof a;
            return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
        };m = hc.prototype;m.add = function (a) {
        this.k.J(ic(a), a)
    };m.Ea = function (a) {
        a = cc(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };m.remove = function (a) {
        return this.k.remove(ic(a))
    };m.contains = function (a) {
        return this.k.G(ic(a))
    };m.C = function () {
        return this.k.C()
    };m.R = function () {
        return new hc(this)
    };m.Ca = function () {
        return this.k.Ca(l)
    };
    var jc = function (a) {
        var b = new hc,
            c = [],
            d = function (e, f) {
                var g = f + "  ";
                try {
                    if (e !== undefined) if (e === k) c.push("NULL");
                    else if (u(e)) c.push('"' + e.replace(/\n/g, "\n" + f) + '"');
                    else if (w(e)) c.push(String(e).replace(/\n/g, "\n" + f));
                    else if (da(e)) if (b.contains(e)) c.push("*** reference loop detected ***");
                    else {
                        b.add(e);
                        c.push("{");
                        for (var j in e) if (!w(e[j])) {
                            c.push("\n");
                            c.push(g);
                            c.push(j + " = ");
                            d(e[j], g)
                        }
                        c.push("\n" + f + "}")
                    } else c.push(e);
                    else c.push("undefined")
                } catch (o) {
                    c.push("*** " + o + " ***")
                }
            };
        d(a, "");
        return c.join("")
    },
        lc = function (a) {
            return kc(a || arguments.callee.caller, [])
        },
        kc = function (a, b) {
            var c = [];
            if (Aa(b, a) >= 0) c.push("[...circular reference...]");
            else if (a && b.length < 50) {
                c.push(mc(a) + "(");
                for (var d = a.arguments, e = 0; e < d.length; e++) {
                    e > 0 && c.push(", ");
                    var f;
                    f = d[e];
                    switch (typeof f) {
                    case "object":
                        f = f ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        f = String(f);
                        break;
                    case "boolean":
                        f = f ? "true" : "false";
                        break;
                    case "function":
                        f = (f = mc(f)) ? f : "[fn]";
                        break;
                    default:
                        f = typeof f
                    }
                    if (f.length > 40) f = f.substr(0, 40) + "...";
                    c.push(f)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(kc(a.caller, b))
                } catch (g) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ? c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        },
        mc = function (a) {
            a = String(a);
            if (!nc[a]) {
                var b = /function ([^\(]+)/.exec(a);
                nc[a] = b ? b[1] : "[Anonymous]"
            }
            return nc[a]
        },
        nc = {};
    var oc = function (a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };oc.prototype.xa = 0;oc.prototype.ob = k;oc.prototype.nb = k;
    var pc = 0;oc.prototype.reset = function (a, b, c, d, e) {
        this.xa = typeof e == "number" ? e : pc++;
        this.sc = d || ja();
        this.ea = a;
        this.Xb = b;
        this.pc = c;
        delete this.ob;
        delete this.nb
    };oc.prototype.Ib = function (a) {
        this.ea = a
    };
    var I = function (a) {
        this.yb = a
    };I.prototype.va = k;I.prototype.ea = k;I.prototype.Fa = k;I.prototype.pb = k;
    var qc = function (a, b) {
        this.name = a;
        this.value = b
    };qc.prototype.toString = function () {
        return this.name
    };
    var J = new qc("SEVERE", 1E3),
        rc = new qc("WARNING", 900),
        sc = new qc("INFO", 800),
        tc = new qc("CONFIG", 700),
        uc = new qc("FINE", 500),
        vc = new qc("FINEST", 300);I.prototype.getName = function () {
        return this.yb
    };I.prototype.getParent = function () {
        return this.va
    };I.prototype.Ib = function (a) {
        this.ea = a
    };
    var wc = function (a) {
        if (a.ea) return a.ea;
        if (a.va) return wc(a.va);
        za("Root logger has no level set.");
        return k
    };I.prototype.log = function (a, b, c) {
        //if (a.value >= wc(this).value) {
            a = this.Sb(a, b, c);
	    console.log(a.Xb);
            p.console && p.console.markTimeline && p.console.markTimeline("log:" + a.Xb);
            for (b = this; b;) {
                c = b;
                var d = a;
                if (c.pb) for (var e = 0, f = void 0; f = c.pb[e]; e++) f(d);
                b = b.getParent()
            }
        //}
    };
    I.prototype.Sb = function (a, b, c) {
        var d = new oc(a, String(b), this.yb);
        if (c) {
            d.ob = c;
            var e;
            var f = arguments.callee.caller;
            try {
                var g;
                var j = aa("window.location.href");
                if (u(c)) g = {
                    message: c,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: j,
                    stack: "Not available"
                };
                else {
                    var o, n, v = l;
                    try {
                        o = c.lineNumber || c.oc || "Not available"
                    } catch (t) {
                        o = "Not available";
                        v = i
                    }
                    try {
                        n = c.fileName || c.filename || c.sourceURL || j
                    } catch (r) {
                        n = "Not available";
                        v = i
                    }
                    g = v || !c.lineNumber || !c.fileName || !c.stack ? {
                        message: c.message,
                        name: c.name,
                        lineNumber: o,
                        fileName: n,
                        stack: c.stack || "Not available"
                    } : c
                }
                e = "Message: " + ua(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + ua(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ua(lc(f) + "-> ")
            } catch (B) {
                e = "Exception trying to expose exception! You win, we lose. " + B
            }
            d.nb = e
        }
        return d
    };
    var K = function (a, b) {
        a.log(rc, b, void 0)
    };I.prototype.info = function (a, b) {
        this.log(sc, a, b)
    };
    var L = function (a, b) {
        a.log(uc, b, void 0)
    },
        M = function (a, b) {
            a.log(vc, b, void 0)
        },
        xc = {},
        yc = k,
        zc = function (a) {
            if (!yc) {
                yc = new I("");
                xc[""] = yc;
                yc.Ib(tc)
            }
            var b;
            if (!(b = xc[a])) {
                b = new I(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = zc(a.substr(0, c));
                if (!c.Fa) c.Fa = {};
                c.Fa[d] = b;
                b.va = c;
                xc[a] = b
            }
            return b
        };
    var Ac = function () {
        this.za = {}
    };A(Ac, ka);Ac.prototype.ta = zc("goog.messaging.AbstractChannel");Ac.prototype.u = function (a) {
        a && a()
    };Ac.prototype.t = function () {
        return i
    };
    var Bc = function (a, b, c) {
        a.za[b] = {
            cb: c,
            Ka: l
        }
    };Ac.prototype.i = function () {
        Ac.F.i.call(this);
        var a = this.ta;
        a && typeof a.H == "function" && a.H();
        delete this.ta;
        delete this.za;
        delete this.lb
    };
    var Cc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    var N = function (a, b) {
        var c;
        if (a instanceof N) {
            this.aa(b == k ? a.w : b);
            O(this, a.n);
            Dc(this, a.ia);
            Ec(this, a.L);
            Fc(this, a.P);
            Gc(this, a.Y);
            Hc(this, a.z.R());
            Ic(this, a.da)
        } else if (a && (c = String(a).match(Cc))) {
            this.aa( !! b);
            O(this, c[1] || "", i);
            Dc(this, c[2] || "", i);
            Ec(this, c[3] || "", i);
            Fc(this, c[4]);
            Gc(this, c[5] || "", i);
            Hc(this, c[6] || "", i);
            Ic(this, c[7] || "", i)
        } else {
            this.aa( !! b);
            this.z = new Jc(k, this, this.w)
        }
    };m = N.prototype;m.n = "";m.ia = "";m.L = "";m.P = k;m.Y = "";m.da = "";m.Wb = l;m.w = l;
    m.toString = function () {
        if (this.r) return this.r;
        var a = [];
        this.n && a.push(Kc(this.n, Lc), ":");
        if (this.L) {
            a.push("//");
            this.ia && a.push(Kc(this.ia, Lc), "@");
            var b;
            b = this.L;
            b = u(b) ? encodeURIComponent(b) : k;
            a.push(b);
            this.P != k && a.push(":", String(this.P))
        }
        if (this.Y) {
            this.L && this.Y.charAt(0) != "/" && a.push("/");
            a.push(Kc(this.Y, Mc))
        }(b = String(this.z)) && a.push("?", b);
        this.da && a.push("#", Kc(this.da, Nc));
        return this.r = a.join("")
    };
    m.R = function () {
        var a = this.n,
            b = this.ia,
            c = this.L,
            d = this.P,
            e = this.Y,
            f = this.z.R(),
            g = this.da,
            j = new N(k, this.w);
        a && O(j, a);
        b && Dc(j, b);
        c && Ec(j, c);
        d && Fc(j, d);
        e && Gc(j, e);
        f && Hc(j, f);
        g && Ic(j, g);
        return j
    };
    var O = function (a, b, c) {
        P(a);
        delete a.r;
        a.n = c ? b ? decodeURIComponent(b) : "" : b;
        if (a.n) a.n = a.n.replace(/:$/, "")
    },
        Dc = function (a, b, c) {
            P(a);
            delete a.r;
            a.ia = c ? b ? decodeURIComponent(b) : "" : b
        },
        Ec = function (a, b, c) {
            P(a);
            delete a.r;
            a.L = c ? b ? decodeURIComponent(b) : "" : b
        },
        Fc = function (a, b) {
            P(a);
            delete a.r;
            if (b) {
                b = Number(b);
                if (isNaN(b) || b < 0) h(Error("Bad port number " + b));
                a.P = b
            } else a.P = k
        },
        Gc = function (a, b, c) {
            P(a);
            delete a.r;
            a.Y = c ? b ? decodeURIComponent(b) : "" : b
        },
        Hc = function (a, b, c) {
            P(a);
            delete a.r;
            if (b instanceof Jc) {
                a.z = b;
                a.z.Va =
                a;
                a.z.aa(a.w)
            } else {
                c || (b = Kc(b, Oc));
                a.z = new Jc(b, a, a.w)
            }
            return a
        },
        Pc = function (a, b, c) {
            P(a);
            delete a.r;
            a.z.J(b, c)
        },
        Ic = function (a, b, c) {
            P(a);
            delete a.r;
            a.da = c ? b ? decodeURIComponent(b) : "" : b
        },
        P = function (a) {
            a.Wb && h(Error("Tried to modify a read-only Uri"))
        };N.prototype.aa = function (a) {
        this.w = a;
        this.z && this.z.aa(a);
        return this
    };
    var Qc = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/,
        Kc = function (a, b) {
            var c = k;
            if (u(a)) {
                c = a;
                Qc.test(c) || (c = encodeURI(a));
                if (c.search(b) >= 0) c = c.replace(b, Rc)
            }
            return c
        },
        Rc = function (a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Lc = /[#\/\?@]/g,
        Mc = /[\#\?]/g,
        Oc = /[\#\?@]/g,
        Nc = /#/g,
        Jc = function (a, b, c) {
            this.B = a || k;
            this.Va = b || k;
            this.w = !! c
        },
        Q = function (a) {
            if (!a.f) {
                a.f = new ec;
                if (a.B) for (var b = a.B.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        e = k,
                        f = k;
                    if (d >= 0) {
                        e = b[c].substring(0, d);
                        f = b[c].substring(d + 1)
                    } else e = b[c];
                    e = decodeURIComponent(e.replace(/\+/g, " "));
                    e = Sc(a, e);
                    a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
            }
        };m = Jc.prototype;m.f = k;m.h = k;m.add = function (a, b) {
        Q(this);
        Tc(this);
        a = Sc(this, a);
        if (this.G(a)) {
            var c = this.f.get(a);
            q(c) ? c.push(b) : this.f.J(a, [c, b])
        } else this.f.J(a, b);
        this.h++;
        return this
    };m.remove = function (a) {
        Q(this);
        a = Sc(this, a);
        if (this.f.G(a)) {
            Tc(this);
            var b = this.f.get(a);
            if (q(b)) this.h -= b.length;
            else this.h--;
            return this.f.remove(a)
        }
        return l
    };
    m.G = function (a) {
        Q(this);
        a = Sc(this, a);
        return this.f.G(a)
    };m.U = function () {
        Q(this);
        for (var a = this.f.C(), b = this.f.U(), c = [], d = 0; d < b.length; d++) {
            var e = a[d];
            if (q(e)) for (var f = 0; f < e.length; f++) c.push(b[d]);
            else c.push(b[d])
        }
        return c
    };m.C = function (a) {
        Q(this);
        if (a) {
            a = Sc(this, a);
            if (this.G(a)) {
                var b = this.f.get(a);
                if (q(b)) return b;
                else {
                    a = [];
                    a.push(b)
                }
            } else a = []
        } else {
            b = this.f.C();
            a = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                q(d) ? Fa(a, d) : a.push(d)
            }
        }
        return a
    };
    m.J = function (a, b) {
        Q(this);
        Tc(this);
        a = Sc(this, a);
        if (this.G(a)) {
            var c = this.f.get(a);
            if (q(c)) this.h -= c.length;
            else this.h--
        }
        this.f.J(a, b);
        this.h++;
        return this
    };m.get = function (a, b) {
        Q(this);
        a = Sc(this, a);
        if (this.G(a)) {
            var c = this.f.get(a);
            return q(c) ? c[0] : c
        } else
        return b
    };
    m.toString = function () {
        if (this.B) return this.B;
        if (!this.f) return "";
        for (var a = [], b = 0, c = this.f.U(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = oa(e);
            e = this.f.get(e);
            if (q(e)) for (var g = 0; g < e.length; g++) {
                b > 0 && a.push("&");
                a.push(f);
                e[g] !== "" && a.push("=", oa(e[g]));
                b++
            } else {
                b > 0 && a.push("&");
                a.push(f);
                e !== "" && a.push("=", oa(e));
                b++
            }
        }
        return this.B = a.join("")
    };
    var Tc = function (a) {
        delete a.Ha;
        delete a.B;
        a.Va && delete a.Va.r
    };
    Jc.prototype.R = function () {
        var a = new Jc;
        if (this.Ha) a.Ha = this.Ha;
        if (this.B) a.B = this.B;
        if (this.f) a.f = this.f.R();
        return a
    };
    var Sc = function (a, b) {
        var c = String(b);
        if (a.w) c = c.toLowerCase();
        return c
    };Jc.prototype.aa = function (a) {
        if (a && !this.w) {
            Q(this);
            Tc(this);
            dc(this.f, function (b, c) {
                var d = c.toLowerCase();
                if (c != d) {
                    this.remove(c);
                    this.add(d, b)
                }
            }, this)
        }
        this.w = a
    };
    var Uc = {
        "1": "NativeMessagingTransport",
        "2": "FrameElementMethodTransport",
        "3": "IframeRelayTransport",
        "4": "IframePollingTransport",
        "5": "FlashTransport",
        "6": "NixTransport"
    },
        Vc = ["pu", "lru", "pru", "lpu", "ppu"],
        R = {},
        Xc = function (a) {
            for (var b = Wc, c = b.length, d = ""; a-- > 0;) d += b.charAt(Math.floor(Math.random() * c));
            return d
        },
        Wc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        S = zc("goog.net.xpc");
    var T = function (a) {
        this.o = a || F()
    };A(T, ka);T.prototype.ba = 0;T.prototype.e = function () {
        return this.o.e()
    };T.prototype.getName = function () {
        return Uc[this.ba] || ""
    };
    var Yc = function (a, b) {
        this.o = b || F();
        this.a = a;
        this.ga = [];
        this.Qb = y(this.Rb, this)
    };A(Yc, T);m = Yc.prototype;m.ba = 2;m.Ra = l;m.kc = 0;m.u = function () {
        if (Zc(this.a) == 0) {
            this.D = this.a.V;
            this.D.XPC_toOuter = y(this.qb, this)
        } else this.$a()
    };
    m.$a = function () {
        var a = i;
        try {
            if (!this.D) this.D = this.e().frameElement;
            if (this.D && this.D.XPC_toOuter) {
                this.Ma = this.D.XPC_toOuter;
                this.D.XPC_toOuter.XPC_toInner = y(this.qb, this);
                a = l;
                this.send("tp", "SETUP_ACK");
                U(this.a)
            }
        } catch (b) {
            S.log(J, "exception caught while attempting setup: " + b, void 0)
        }
        if (a) {
            if (!this.Za) this.Za = y(this.$a, this);
            this.e().setTimeout(this.Za, 100)
        }
    };m.Ua = function (a) {
        if (Zc(this.a) == 0 && !this.a.t() && a == "SETUP_ACK") {
            this.Ma = this.D.XPC_toOuter.XPC_toInner;
            U(this.a)
        } else h(Error("Got unexpected transport message."))
    };
    m.qb = function (a, b) {
        if (!this.Ra && this.ga.length == 0) V(this.a, a, b);
        else {
            this.ga.push({
                jc: a,
                Oa: b
            });
            if (this.ga.length == 1) this.kc = this.e().setTimeout(this.Qb, 1)
        }
    };m.Rb = function () {
        for (; this.ga.length;) {
            var a = this.ga.shift();
            V(this.a, a.jc, a.Oa)
        }
    };m.send = function (a, b) {
        this.Ra = i;
        this.Ma(a, b);
        this.Ra = l
    };m.i = function () {
        Yc.F.i.call(this);
        this.D = this.Ma = k
    };
    var W = function (a, b) {
        this.o = b || F();
        this.a = a;
        this.ha = this.a.b.ppu;
        this.ec = this.a.b.lpu;
        this.wa = []
    },
        $c, ad;A(W, T);W.prototype.ba = 4;W.prototype.ya = 0;W.prototype.ca = l;W.prototype.O = l;
    var bd = function (a) {
        return "googlexpc_" + a.a.name + "_msg"
    },
        cd = function (a) {
            return "googlexpc_" + a.a.name + "_ack"
        };
    W.prototype.u = function () {
        L(S, "transport connect called");
        if (!this.O) {
            L(S, "initializing...");
            var a = bd(this);
            this.X = dd(this, a);
            this.La = this.e().frames[a];
            a = cd(this);
            this.Q = dd(this, a);
            this.Da = this.e().frames[a];
            this.O = i
        }
        if (ed(this, bd(this)) && ed(this, cd(this))) {
            L(S, "foreign frames present");
            this.wb = new fd(this, this.a.q.frames[bd(this)], y(this.dc, this));
            this.Wa = new fd(this, this.a.q.frames[cd(this)], y(this.cc, this));
            this.fb()
        } else {
            M(S, "foreign frames not (yet) present");
            if (Zc(this.a) == 1 && !this.fc) {
                M(S, "innerPeerReconnect called");
                this.a.name = Xc(10);
                M(S, "switching channels: " + this.a.name);
                gd(this);
                this.O = l;
                this.fc = dd(this, "googlexpc_reconnect_" + this.a.name)
            } else if (Zc(this.a) == 0) {
                M(S, "outerPeerReconnect called");
                a = this.a.q.frames;
                for (var b = a.length, c = 0; c < b; c++) {
                    var d;
                    try {
                        if (a[c] && a[c].name) d = a[c].name
                    } catch (e) {}
                    if (d) {
                        var f = d.split("_");
                        if (f.length == 3 && f[0] == "googlexpc" && f[1] == "reconnect") {
                            this.a.name = f[2];
                            gd(this);
                            this.O = l;
                            break
                        }
                    }
                }
            }
            this.e().setTimeout(y(this.u, this), 100)
        }
    };
    var dd = function (a, b) {
        M(S, "constructing sender frame: " + b);
        var c = document.createElement("iframe"),
            d = c.style;
        d.position = "absolute";
        d.top = "-10px";
        d.left = "10px";
        d.width = "1px";
        d.height = "1px";
        c.id = c.name = b;
        c.src = a.ha + "#INITIAL";
        a.e().document.body.appendChild(c);
        return c
    },
        gd = function (a) {
            M(S, "deconstructSenderFrames called");
            if (a.X) {
                a.X.parentNode.removeChild(a.X);
                a.X = k;
                a.La = k
            }
            if (a.Q) {
                a.Q.parentNode.removeChild(a.Q);
                a.Q = k;
                a.Da = k
            }
        },
        ed = function (a, b) {
            M(S, "checking for receive frame: " + b);
            try {
                var c = a.a.q.frames[b];
                if (!c || c.location.href.indexOf(a.ec) != 0) return l
            } catch (d) {
                return l
            }
            return i
        };W.prototype.fb = function () {
        var a = this.a.q.frames;
        if (a[cd(this)] && a[bd(this)]) {
            this.xb = new hd(this.ha, this.La);
            this.ka = new hd(this.ha, this.Da);
            L(S, "local frames ready");
            this.e().setTimeout(y(function () {
                this.xb.send("SETUP");
                this.ca = this.rc = i;
                L(S, "SETUP sent")
            }, this), 100)
        } else {
            if (!this.eb) this.eb = y(this.fb, this);
            this.e().setTimeout(this.eb, 100);
            L(S, "local frames not (yet) present")
        }
    };
    var id = function (a) {
        if (a.Sa && a.Fb) {
            U(a.a);
            if (a.S) {
                L(S, "delivering queued messages (" + a.S.length + ")");
                for (var b = 0, c; b < a.S.length; b++) {
                    c = a.S[b];
                    V(a.a, c.ic, c.Oa)
                }
                delete a.S
            }
        } else M(S, "checking if connected: ack sent:" + a.Sa + ", ack rcvd: " + a.Fb)
    };
    W.prototype.dc = function (a) {
        M(S, "msg received: " + a);
        if (a == "SETUP") {
            if (this.ka) {
                this.ka.send("SETUP_ACK");
                M(S, "SETUP_ACK sent");
                this.Sa = i;
                id(this)
            }
        } else if (this.a.t() || this.Sa) {
            var b = a.indexOf("|"),
                c = a.substring(0, b);
            a = a.substring(b + 1);
            b = c.indexOf(",");
            if (b == -1) {
                var d;
                this.ka.send("ACK:" + c);
                jd(this, a)
            } else {
                d = c.substring(0, b);
                this.ka.send("ACK:" + d);
                c = c.substring(b + 1).split("/");
                b = parseInt(c[0], 10);
                c = parseInt(c[1], 10);
                if (b == 1) this.Na = [];
                this.Na.push(a);
                if (b == c) {
                    jd(this, this.Na.join(""));
                    delete this.Na
                }
            }
        } else K(S, "received msg, but channel is not connected")
    };W.prototype.cc = function (a) {
        M(S, "ack received: " + a);
        if (a == "SETUP_ACK") {
            this.ca = l;
            this.Fb = i;
            id(this)
        } else if (this.a.t()) if (this.ca) if (parseInt(a.split(":")[1], 10) == this.ya) {
            this.ca = l;
            kd(this)
        } else K(S, "got ack with wrong sequence");
        else K(S, "got unexpected ack");
        else K(S, "received ack, but channel not connected")
    };
    var kd = function (a) {
        if (!(a.ca || !a.wa.length)) {
            var b = a.wa.shift();
            ++a.ya;
            a.xb.send(a.ya + b);
            M(S, "msg sent: " + a.ya + b);
            a.ca = i
        }
    },
        jd = function (a, b) {
            var c = b.indexOf(":"),
                d = b.substr(0, c);
            c = b.substring(c + 1);
            if (a.a.t()) V(a.a, d, c);
            else {
                (a.S || (a.S = [])).push({
                    ic: d,
                    Oa: c
                });
                M(S, "queued delivery")
            }
        };W.prototype.ja = 3800;
    W.prototype.send = function (a, b) {
        var c = a + ":" + b;
        if (!D || b.length <= this.ja) this.wa.push("|" + c);
        else
        for (var d = b.length, e = Math.ceil(d / this.ja), f = 0, g = 1; f < d;) {
            this.wa.push("," + g + "/" + e + "|" + c.substr(f, this.ja));
            g++;
            f += this.ja
        }
        kd(this)
    };W.prototype.i = function () {
        W.F.i.call(this);
        var a = ld;
        Ca(a, this.wb);
        Ca(a, this.Wa);
        this.wb = this.Wa = k;
        ob(this.X);
        ob(this.Q);
        this.La = this.Da = this.X = this.Q = k
    };
    var ld = [],
        md = y(function () {
            var a = l;
            try {
                for (var b = 0, c = ld.length; b < c; b++) {
                    var d;
                    if (!(d = a)) {
                        var e = ld[b],
                            f = e.Eb.location.href;
                        if (f != e.kb) {
                            e.kb = f;
                            var g = f.split("#")[1];
                            if (g) {
                                g = g.substr(1);
                                e.Nb(decodeURIComponent(g))
                            }
                            d = i
                        } else d = l
                    }
                    a = d
                }
            } catch (j) {
                S.info("receive_() failed: " + j);
                b = ld[b].l.a;
                S.info("Transport Error");
                b.close();
                if (!ld.length) return
            }
            b = ja();
            if (a) $c = b;
            ad = window.setTimeout(md, b - $c < 1E3 ? 10 : 100)
        }, W),
        nd = function () {
            L(S, "starting receive-timer");
            $c = ja();
            ad && window.clearTimeout(ad);
            ad = window.setTimeout(md, 10)
        },
        hd = function (a, b) {
            this.ha = a;
            this.Hb = b;
            this.Ga = 0
        };hd.prototype.send = function (a) {
        this.Ga = ++this.Ga % 2;
        a = this.ha + "#" + this.Ga + encodeURIComponent(a);
        try {
            if (E) this.Hb.location.href = a;
            else this.Hb.location.replace(a)
        } catch (b) {
            S.log(J, "sending failed", b)
        }
        nd()
    };
    var fd = function (a, b, c) {
        this.l = a;
        this.Eb = b;
        this.Nb = c;
        this.kb = this.Eb.location.href.split("#")[0] + "#INITIAL";
        ld.push(this);
        nd()
    };
    var X = function (a, b) {
        this.o = b || F();
        this.a = a;
        this.ac = this.a.b.pru;
        this.Cb = this.a.b.ifrid;
        E && od()
    };A(X, T);
    if (E) var pd = [],
        qd = 0,
        od = function () {
            qd || (qd = window.setTimeout(function () {
                rd()
            }, 1E3))
        },
        rd = function (a) {
            var b = ja();
            for (a = a || 3E3; pd.length && b - pd[0].timestamp >= a;) {
                var c = pd.shift().Vb;
                ob(c);
                M(S, "iframe removed")
            }
            qd = window.setTimeout(sd, 1E3)
        },
        sd = function () {
            rd()
        };X.prototype.ba = 3;X.prototype.u = function () {
        this.e().xpcRelay || (this.e().xpcRelay = td);
        this.send("tp", "SETUP")
    };
    var td = function (a, b) {
        var c = b.indexOf(":");
        V(R[a], b.substring(0, c), decodeURIComponent(b.substring(c + 1)))
    };X.prototype.Ua = function (a) {
        if (a == "SETUP") {
            this.send("tp", "SETUP_ACK");
            U(this.a)
        } else a == "SETUP_ACK" && U(this.a)
    };
    X.prototype.send = function (a, b) {
        if (D) {
            var c = this.e().document.createElement("div");
            c.innerHTML = '<iframe onload="this.xpcOnload()"></iframe>';
            c = c.childNodes[0];
            c.mc = ud
        } else {
            c = this.e().document.createElement("iframe");
            E ? pd.push({
                timestamp: ja(),
                Vb: c
            }) : Nb(c, "load", ud)
        }
        var d = c.style;
        d.visibility = "hidden";
        d.width = c.style.height = "0px";
        d.position = "absolute";
        d = this.ac;
        d += "#" + this.a.name;
        if (this.Cb) d += "," + this.Cb;
        d += "|" + a + ":" + encodeURIComponent(b);
        c.src = d;
        this.e().document.body.appendChild(c);
        M(S, "msg sent: " + d)
    };
    var ud = function () {
        M(S, "iframe-load");
        ob(this);
        this.mc = k
    };X.prototype.i = function () {
        X.F.i.call(this);
        E && rd(0)
    };
    var Y = function (a, b, c) {
        this.o = c || F();
        this.a = a;
        this.Bb = b || "*"
    };A(Y, T);Y.prototype.O = l;Y.prototype.ba = 1;
    var vd = {},
        wd = function (a) {
            var b = a.oa.data,
                c = b.indexOf("|"),
                d = b.indexOf(":");
            if (c == -1 || d == -1) return l;
            var e = b.substring(0, c);
            c = b.substring(c + 1, d);
            b = b.substring(d + 1);
            L(S, "messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
            if (d = R[e]) {
                V(d, c, b, a.oa.origin);
                return i
            }
            for (var f in R) {
                a = R[f];
                if (Zc(a) == 1 && !a.t() && c == "tp" && b == "SETUP") {
                    L(S, "changing channel name to " + e);
                    a.name = e;
                    delete R[f];
                    R[e] = a;
                    V(a, c, b);
                    return i
                }
            }
            S.info('channel name mismatch; message ignored"');
            return l
        };m = Y.prototype;
    m.Ua = function (a) {
        switch (a) {
        case "SETUP":
            this.send("tp", "SETUP_ACK");
            break;
        case "SETUP_ACK":
            U(this.a)
        }
    };m.u = function () {
        var a = this.e(),
            b = x(a),
            c = vd[b];
        typeof c == "number" || (c = 0);
        if (c == 0) Nb(a.postMessage ? a : a.document, "message", wd, l, Y);
        vd[b] = c + 1;
        this.O = i;
        this.ib()
    };m.ib = function () {
        if (!(this.a.t() || this.na)) {
            this.send("tp", "SETUP");
            this.e().setTimeout(y(this.ib, this), 100)
        }
    };
    m.send = function (a, b) {
        var c = this.a.q;
        if (c) {
            var d = c.postMessage ? c : c.document;
            this.send = function (e, f) {
                L(S, "send(): payload=" + f + " to hostname=" + this.Bb);
                d.postMessage(this.a.name + "|" + e + ":" + f, this.Bb)
            };
            this.send(a, b)
        } else L(S, "send(): window not ready")
    };m.i = function () {
        Y.F.i.call(this);
        if (this.O) {
            var a = this.e(),
                b = x(a),
                c = vd[b];
            vd[b] = c - 1;
            if (c == 1) Pb(a.postMessage ? a : a.document, "message", wd, l, Y)
        }
    };
    var xd = function (a, b) {
        this.o = b || F();
        this.a = a;
        this.ab = a.at || "";
        this.Gb = a.rat || "";
        var c = this.e();
        if (!c.nix_setup_complete) try {
            c.execScript("Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport.GCXPC____NIXJS_handle_message(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport.GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function", "vbscript");
            c.nix_setup_complete = i
        } catch (d) {
            S.log(J, "exception caught while attempting global setup: " + d, void 0)
        }
        this.GCXPC____NIXJS_handle_message = this.Tb;
        this.GCXPC____NIXJS_create_channel = this.Ob
    };A(xd, T);m = xd.prototype;m.ba = 6;m.W = l;m.I = k;m.u = function () {
        Zc(this.a) == 0 ? this.Ya() : this.Xa()
    };
    m.Ya = function () {
        if (!this.W) {
            var a = this.a.V;
            try {
                a.contentWindow.opener = this.e().GCXPC____NIXVBS_get_wrapper(this, this.ab);
                this.W = i
            } catch (b) {
                S.log(J, "exception caught while attempting setup: " + b, void 0)
            }
            this.W || this.e().setTimeout(y(this.Ya, this), 100)
        }
    };
    m.Xa = function () {
        if (!this.W) {
            try {
                var a = this.e().opener;
                if (a && "GCXPC____NIXVBS_container" in a) {
                    this.I = a;
                    if (this.I.GetAuthToken() != this.Gb) {
                        S.log(J, "Invalid auth token from other party", void 0);
                        return
                    }
                    this.I.CreateChannel(this.e().GCXPC____NIXVBS_get_wrapper(this, this.ab));
                    this.W = i;
                    U(this.a)
                }
            } catch (b) {
                S.log(J, "exception caught while attempting setup: " + b, void 0);
                return
            }
            this.W || this.e().setTimeout(y(this.Xa, this), 100)
        }
    };
    m.Ob = function (a) {
        if (typeof a != "unknown" || !("GCXPC____NIXVBS_container" in a)) S.log(J, "Invalid NIX channel given to createChannel_", void 0);
        this.I = a;
        this.I.GetAuthToken() != this.Gb ? S.log(J, "Invalid auth token from other party", void 0) : U(this.a)
    };m.Tb = function (a, b) {
        this.e().setTimeout(y(function () {
            V(this.a, a, b)
        }, this), 1)
    };m.send = function (a, b) {
        typeof this.I !== "unknown" && S.log(J, "NIX channel not connected", void 0);
        this.I.SendMessage(a, b)
    };m.i = function () {
        xd.F.i.call(this);
        this.I = k
    };
    var Z = function (a, b) {
        this.za = {};
        for (var c = 0, d; d = Vc[c]; c++) d in a && !/^https?:\/\//.test(a[d]) && h(Error("URI " + a[d] + " is invalid for field " + d));
        this.b = a;
        this.name = this.b.cn || Xc(10);
        this.o = b || F();
        R[this.name] = this;
        Nb(window, "unload", yd);
        S.info("CrossPageChannel created: " + this.name)
    };A(Z, Ac);
    var zd = /^%*tp$/,
        Ad = /^%+tp$/;m = Z.prototype;m.l = k;m.Ta = 1;m.t = function () {
        return this.Ta == 2
    };m.q = k;m.V = k;
    var Bd = function (a) {
        var b = {};
        b.cn = a.name;
        b.tp = a.b.tp;
        if (a.b.lru) b.pru = a.b.lru;
        if (a.b.lpu) b.ppu = a.b.lpu;
        if (a.b.ppu) b.lpu = a.b.ppu;
        return b
    },
        Cd = function (a, b) {
            var c = a.b.ifrid;
            c || (c = a.b.ifrid = "xpcpeer" + Xc(4));
            var d = document.createElement("IFRAME");
            d.id = d.name = c;
            d.style.width = d.style.height = "100%";
            var e = a.b.pu;
            if (u(e)) e = a.b.pu = new N(e);
            Pc(e, "xpc", Xb(new Vb, Bd(a)));
            if (Ta || E) {
                a.Ia = i;
                window.setTimeout(y(function () {
                    this.Ia = l;
                    b.appendChild(d);
                    d.src = e.toString();
                    S.info("peer iframe created (" + c + ")");
                    this.hb && this.u(this.gb)
                }, a), 1)
            } else {
                d.src = e.toString();
                b.appendChild(d);
                S.info("peer iframe created (" + c + ")")
            }
        };Z.prototype.Ia = l;Z.prototype.hb = l;
    Z.prototype.u = function (a) {
        this.gb = a || ba;
        if (this.Ia) {
            S.info("connect() deferred");
            this.hb = i
        } else {
            S.info("connect()");
            if (this.b.ifrid) this.V = u(this.b.ifrid) ? this.o.v.getElementById(this.b.ifrid) : this.b.ifrid;
            if (this.V) {
                (a = this.V.contentWindow) || (a = window.frames[this.b.ifrid]);
                this.q = a
            }
            if (!this.q) if (window == top) h(Error("CrossPageChannel: Can't connect, peer window-object not set."));
            else this.q = window.parent;
            if (!this.l) {
                if (!this.b.tp) {
                    a = this.b;
                    var b;
                    if (w(document.postMessage) || w(window.postMessage) || D && window.postMessage) b = 1;
                    else if (Ta) b = 2;
                    else if (D && this.b.pru) b = 3;
                    else if (D) b = 6;
                    else if (this.b.lpu && this.b.ppu) b = 4;
                    a.tp = b
                }
                switch (this.b.tp) {
                case 1:
                    this.l = new Y(this, this.b.ph, this.o);
                    break;
                case 6:
                    this.l = new xd(this, this.o);
                    break;
                case 2:
                    this.l = new Yc(this, this.o);
                    break;
                case 3:
                    this.l = new X(this, this.o);
                    break;
                case 4:
                    this.l = new W(this, this.o)
                }
                this.l ? S.info("Transport created: " + this.l.getName()) : h(Error("CrossPageChannel: No suitable transport found!"))
            }
            this.l.u()
        }
    };
    Z.prototype.close = function () {
        if (this.t()) {
            this.Ta = 3;
            this.l.H();
            this.l = k;
            S.info('Channel "' + this.name + '" closed')
        }
    };
    var U = function (a) {
        if (!a.t()) {
            a.Ta = 2;
            S.info('Channel "' + a.name + '" connected');
            a.gb()
        }
    };Z.prototype.send = function (a, b) {
        if (this.t()) if (this.q.closed) {
            S.log(J, "Peer has disappeared.", void 0);
            this.close()
        } else {
            if (da(b)) b = Xb(new Vb, b);
            this.l.send(Dd(this, a), b)
        } else S.log(J, "Can't send. Channel not connected.", void 0)
    };
    var V = function (a, b, c, d) {
        var e = a.b.ph;
        if (/^[\s\xa0]*$/.test(d == k ? "" : String(d)) || /^[\s\xa0]*$/.test(e == k ? "" : String(e)) || d == a.b.ph) if (a.na) K(S, "CrossPageChannel::deliver_(): Disposed.");
        else if (!b || b == "tp") a.l.Ua(c);
        else if (a.t()) {
            b = b.replace(/%[0-9a-f]{2}/gi, decodeURIComponent);
            b = Ad.test(b) ? b.substring(1) : b;
            a: {
                d = a.za[b];
                if (!d) if (a.lb) {
                    d = ia(a.lb, b);
                    e = da(c);
                    d = {
                        cb: d,
                        Ka: e
                    }
                } else {
                    K(a.ta, 'Unknown service name "' + b + '" (payload: ' + jc(c) + ")");
                    break a
                }
                if (d.Ka && u(c)) try {
                    c = Ub(c)
                } catch (f) {
                    K(a.ta, "Expected JSON payload for " + b + ', was "' + c + '"');
                    break a
                } else if (!d.Ka && !u(c)) c = Xb(new Vb, c);
                d.cb(c)
            }
        } else S.info("CrossPageChannel::deliver_(): Not connected.");
        else K(S, 'Message received from unapproved origin "' + d + '" - rejected.')
    },
        Dd = function (a, b) {
            if (zd.test(b)) b = "%" + b;
            return b.replace(/[%:|]/g, encodeURIComponent)
        },
        Zc = function (a) {
            return window.parent == a.q ? 1 : 0
        };Z.prototype.i = function () {
        Z.F.i.call(this);
        this.close();
        this.V = this.q = k;
        delete R[this.name]
    };
    var yd = function () {
        for (var a in R) {
            var b = R[a];
            b && b.H()
        }
    };
    var Ed = function (a, b) {
        if (D) a.cssText = b;
        else a[E ? "innerText" : "innerHTML"] = b
    };
    var Fd = function (a, b, c, d) {
        if (!d) d = window.location.href;
        d = new N(d);
        var e = new N;
        Ec(e, "talkgadget.google.com");
        Gc(e, "/talkgadget/d");
        Pc(e, "token", a);
        O(new N, d.n);
        a = c || "wcs-iframe";
        c = "#" + a + " { display: none; }";
        var f = F(void 0),
            g = k;
        if (D) {
            g = f.v.createStyleSheet();
            Ed(g, c)
        } else {
            var j = jb(f.v, "head", void 0, void 0)[0];
            if (!j) {
                g = jb(f.v, "body", void 0, void 0)[0];
                j = f.jb("head");
                g.parentNode.insertBefore(j, g)
            }
            g = f.jb("style");
            Ed(g, c);
            f.appendChild(j, g)
        }
        c = {};
        if (d.n == "http" || d.n == "https") {
            O(e, d.n);
            f = new N;
            O(f, d.n);
            Ec(f, "talkgadget.google.com");
            Gc(f, "/talkgadget/xpc_blank");
            j = new N;
            O(j, d.n);
            Ec(j, d.L);
            Fc(j, d.P);
            Gc(j, b);
            c.ppu = j.toString();
            c.lpu = f.toString()
        } else O(e, "http");
        c.ifrid = a;
        c.pu = e.toString();
        Z.call(this, c)
    };A(Fd, Z);z("chat.WcsCrossPageChannel", Fd);
    var Gd = k,
        Hd = k,
        Id = k;
    var $ = function (a, b, c, d, e) {
        this.readyState = 0;
        this.Qa = [];
        this.onopen = b.onopen;
        this.onmessage = b.onmessage;
        this.onerror = b.onerror;
        this.onclose = b.onclose;
        this.K = c || new Fd(a, "/_ah/channel/xpc_blank");
        this.qa = c ? d : "wcs-iframe";
        this.vb = e || new Jd(a);
        document.body || h("document.body is not defined -- do not create socket from script in <head>.");
        Cd(this.K, document.body);
        Bc(this.K, "opened", y(this.$b, this));
        Bc(this.K, "onMessage", y(this.Zb, this));
        Bc(this.K, "onError", y(this.Yb, this));
        Bc(this.K, "onClosed", y(this.Ab, this));
        this.K.u(y(function () {}, this))
    };$.prototype.send = function () {
        return l
    };$.prototype.close = function () {
        this.Ab()
    };$.prototype.hc = function () {
        for (var a = 0, b; b = this.Qa[a]; a++) switch (b.type) {
        case 0:
            this.onopen(b.pa);
            break;
        case 1:
            this.onmessage(b.pa);
            break;
        case 2:
            this.onerror(b.pa);
            break;
        case 3:
            this.onclose(b.pa)
        }
        this.Qa = []
    };
    var Kd = function (a, b, c) {
        a.Qa.push({
            type: b,
            pa: c
        });
        window.setTimeout(y(a.hc, a), 1)
    };
    $.prototype.Zb = function (a) {
        a = Ub(a);
        var b = a.m;
        a = a.s;
        for (var c = this.vb, d = [], e = 0, f = 0; f < b.length; f++) {
            for (var g = b.charCodeAt(f); g > 255;) {
                d[e++] = g & 255;
                g >>= 8
            }
            d[e++] = g
        }
        d.push(c.xa);
        c = c.Ub;
        c.reset();
        c.update(d);
        a: {
            d = c.T();
            if (!s(d) || !s(a) || d.length != a.length) a = l;
            else {
                c = d.length;
                for (e = 0; e < c; e++) if (d[e] !== a[e]) {
                    a = l;
                    break a
                }
                a = i
            }
        }
        a && Kd(this, 1, {
            data: b
        });this.vb.xa++
    };$.prototype.Yb = function (a) {
        a = Ub(a);
        Kd(this, 2, {
            description: a.d,
            code: a.c
        })
    };$.prototype.$b = function () {
        this.readyState = 1;
        Kd(this, 0, {})
    };
    $.prototype.Ab = function () {
        this.K.close();
        this.readyState = 3;
        Kd(this, 3, {});
        if (this.qa) {
            var a = new ib,
                b = u(this.qa) ? a.v.getElementById(this.qa) : this.qa;
            b && a.removeNode(b)
        }
    };
    var Jd = function (a) {
        for (; a.length % 4 != 0;) a += ".";
        this.xa = 0;
        try {
            a.length % 4 && h(Error("Length of b64-encoded data must be zero mod four"));
            if (!Gd) {
                Gd = {};
                Hd = {};
                Id = {};
                for (var b = 0; b < 65; b++) {
                    Gd[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);
                    Hd[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(b);
                    Id[Hd[b]] = b
                }
            }
            b = Id;
            for (var c = [], d = 0; d < a.length; d += 4) {
                var e = b[a.charAt(d)],
                    f = b[a.charAt(d + 1)],
                    g = b[a.charAt(d + 2)],
                    j = b[a.charAt(d + 3)];
                if (e == k || f == k || g == k || j == k) h(Error());
                c.push(e << 2 | f >> 4);
                if (g != 64) {
                    c.push(f << 4 & 240 | g >> 2);
                    j != 64 && c.push(g << 6 & 192 | j)
                }
            }
            this.Jb = c
        } catch (o) {
            o.message ? h(Error("The provided token is invalid (" + o.name + ": " + o.message + ")")) : h(Error("The provided token is invalid."))
        }
        this.p = new SHA1;
        this.Ub = new G_HMAC(this.p, this.Jb, this.Jb.length)
    };z("goog.appengine.Socket", $);z("goog.appengine.Socket.ReadyState", {
        CONNECTING: 0,
        OPEN: 1,
        nc: 2,
        CLOSED: 3
    });z("goog.appengine.Socket.ReadyState.CONNECTING", 0);z("goog.appengine.Socket.ReadyState.OPEN", 1);
    z("goog.appengine.Socket.ReadyState.CLOSING", 2);z("goog.appengine.Socket.ReadyState.CLOSED", 3);z("goog.appengine.Socket.prototype.send", $.prototype.send);z("goog.appengine.Socket.prototype.close", $.prototype.close);
    var Ld = function (a) {
        this.lc = a
    },
        Md = {
            onopen: function () {},
            onclose: function () {},
            onerror: function () {},
            onmessage: function () {}
        };Ld.prototype.open = function (a) {
        a = a || Md;
        return new $(this.lc, a)
    };z("goog.appengine.Channel", Ld);z("goog.appengine.Channel.prototype.open", Ld.prototype.open);SHA1 = function () {
        this.g = Array(5);
        this.ma = Array(64);
        this.Mb = Array(80);
        this.ua = Array(64);
        this.ua[0] = 128;
        for (var a = 1; a < 64; ++a) this.ua[a] = 0;
        this.reset()
    };SHA1.prototype.reset = function () {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.Aa = this.N = 0
    };
    var Nd = function (a, b) {
        for (var c = a.Mb, d = 0; d < 64; d += 4) c[d / 4] = b[d] << 24 | b[d + 1] << 16 | b[d + 2] << 8 | b[d + 3];
        for (d = 16; d < 80; ++d) c[d] = ((c[d - 3] ^ c[d - 8] ^ c[d - 14] ^ c[d - 16]) << 1 | (c[d - 3] ^ c[d - 8] ^ c[d - 14] ^ c[d - 16]) >>> 31) & 4294967295;
        var e = a.g[0],
            f = a.g[1],
            g = a.g[2],
            j = a.g[3],
            o = a.g[4],
            n, v;
        for (d = 0; d < 80; ++d) {
            if (d < 40) if (d < 20) {
                n = j ^ f & (g ^ j);
                v = 1518500249
            } else {
                n = f ^ g ^ j;
                v = 1859775393
            } else if (d < 60) {
                n = f & g | j & (f | g);
                v = 2400959708
            } else {
                n = f ^ g ^ j;
                v = 3395469782
            }
            n = ((e << 5 | e >>> 27) & 4294967295) + n + o + v + c[d] & 4294967295;
            o = j;
            j = g;
            g = (f << 30 | f >>> 2) & 4294967295;
            f = e;
            e = n
        }
        a.g[0] =
        a.g[0] + e & 4294967295;
        a.g[1] = a.g[1] + f & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + j & 4294967295;
        a.g[4] = a.g[4] + o & 4294967295
    };SHA1.prototype.update = function (a, b) {
        if (!b) b = a.length;
        var c = 0;
        if (this.N == 0) for (; c + 64 < b;) {
            Nd(this, a.slice(c, c + 64));
            c += 64;
            this.Aa += 64
        }
        for (; c < b;) {
            this.ma[this.N++] = a[c++];
            ++this.Aa;
            if (this.N == 64) {
                this.N = 0;
                for (Nd(this, this.ma); c + 64 < b;) {
                    Nd(this, a.slice(c, c + 64));
                    c += 64;
                    this.Aa += 64
                }
            }
        }
    };
    SHA1.prototype.T = function () {
        var a = Array(20),
            b = this.Aa * 8;
        this.N < 56 ? this.update(this.ua, 56 - this.N) : this.update(this.ua, 64 - (this.N - 56));
        for (var c = 63; c >= 56; --c) {
            this.ma[c] = b & 255;
            b >>>= 8
        }
        Nd(this, this.ma);
        for (c = b = 0; c < 5; ++c) for (var d = 24; d >= 0; d -= 8) a[b++] = this.g[c] >> d & 255;
        return a
    };G_HMAC = function (a, b, c) {
        if (!a || typeof a != "object" || !a.reset || !a.update || !a.T) h(Error("Invalid hasher object. Hasher unspecified or does not implement expected interface."));
        b.constructor != Array && h(Error("Invalid key."));
        c && typeof c != "number" && h(Error("Invalid block size."));
        this.p = a;
        this.la = c || 16;
        this.tb = Array(this.la);
        this.sb = Array(this.la);
        if (b.length > this.la) {
            this.p.update(b);
            b = this.p.T()
        }
        for (c = 0; c < this.la; c++) {
            a = c < b.length ? b[c] : 0;
            this.tb[c] = a ^ G_HMAC.Lb;
            this.sb[c] = a ^ G_HMAC.Kb
        }
    };G_HMAC.Lb = 92;
    G_HMAC.Kb = 54;G_HMAC.prototype.reset = function () {
        this.p.reset();
        this.p.update(this.sb)
    };G_HMAC.prototype.update = function (a) {
        a.constructor != Array && h(Error("Invalid data. Data must be an array."));
        this.p.update(a)
    };G_HMAC.prototype.T = function () {
        var a = this.p.T();
        this.p.reset();
        this.p.update(this.tb);
        this.p.update(a);
        return this.p.T()
    };
})()
