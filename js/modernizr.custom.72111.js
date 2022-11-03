/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-cssanimations-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
(window.Modernizr = (function (a, b, c) {
  function x(a) {
    j.cssText = a;
  }
  function y(a, b) {
    return x(prefixes.join(a + ";") + (b || ""));
  }
  function z(a, b) {
    return typeof a === b;
  }
  function A(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function B(a, b) {
    for (var d in a) if (j[a[d]] !== c) return b == "pfx" ? a[d] : !0;
    return !1;
  }
  function C(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function D(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.substr(1),
      e = (a + " " + n.join(d + " ") + d).split(" ");
    return z(b, "string") || z(b, "undefined")
      ? B(e, b)
      : ((e = (a + " " + o.join(d + " ") + d).split(" ")), C(e, b, c));
  }
  var d = "2.5.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k,
    l = {}.toString,
    m = "Webkit Moz O ms",
    n = m.split(" "),
    o = m.toLowerCase().split(" "),
    p = {},
    q = {},
    r = {},
    s = [],
    t = s.slice,
    u,
    v = {}.hasOwnProperty,
    w;
  !z(v, "undefined") && !z(v.call, "undefined")
    ? (w = function (a, b) {
        return v.call(a, b);
      })
    : (w = function (a, b) {
        return b in a && z(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = t.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(t.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(t.call(arguments)));
          };
        return e;
      }),
    (p.cssanimations = function () {
      return D("animationName");
    });
  for (var E in p)
    w(p, E) &&
      ((u = E.toLowerCase()), (e[u] = p[E]()), s.push((e[u] ? "" : "no-") + u));
  return (
    x(""),
    (i = k = null),
    (function (a, b) {
      function g(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function h() {
        var a = k.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function i(a) {
        var b = {},
          c = a.createElement,
          e = a.createDocumentFragment,
          f = e();
        (a.createElement = function (a) {
          var e = (b[a] || (b[a] = c(a))).cloneNode();
          return k.shivMethods && e.canHaveChildren && !d.test(a)
            ? f.appendChild(e)
            : e;
        }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              h()
                .join()
                .replace(/\w+/g, function (a) {
                  return (b[a] = c(a)), f.createElement(a), 'c("' + a + '")';
                }) +
              ");return n}"
          )(k, f));
      }
      function j(a) {
        var b;
        return a.documentShived
          ? a
          : (k.shivCSS &&
              !e &&
              (b = !!g(
                a,
                "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}"
              )),
            f || (b = !i(a)),
            b && (a.documentShived = b),
            a);
      }
      var c = a.html5 || {},
        d = /^<|^(?:button|form|map|select|textarea)$/i,
        e,
        f;
      (function () {
        var a = b.createElement("a");
        (a.innerHTML = "<xyz></xyz>"),
          (e = "hidden" in a),
          (f =
            a.childNodes.length == 1 ||
            (function () {
              try {
                b.createElement("a");
              } catch (a) {
                return !0;
              }
              var c = b.createDocumentFragment();
              return (
                typeof c.cloneNode == "undefined" ||
                typeof c.createDocumentFragment == "undefined" ||
                typeof c.createElement == "undefined"
              );
            })());
      })();
      var k = {
        elements:
          c.elements ||
          "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: j,
      };
      (a.html5 = k), j(b);
    })(this, b),
    (e._version = d),
    (e._domPrefixes = o),
    (e._cssomPrefixes = n),
    (e.testProp = function (a) {
      return B([a]);
    }),
    (e.testAllProps = D),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + s.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return o.call(a) == "[object Function]";
    }
    function e(a) {
      return typeof a == "string";
    }
    function f() {}
    function g(a) {
      return !a || a == "loaded" || a == "complete" || a == "uninitialized";
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                (a.t == "c"
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          a != "img" &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = {},
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      y[c] === 1 && ((r = 1), (y[c] = []), (l = b.createElement(a))),
        a == "object" ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        a != "img" &&
          (r || y[c] === 2
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i(b == "c" ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), p.length == 1 && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && o.call(a.opera) == "[object Opera]",
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return o.call(a) == "[object Array]";
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, i) {
        var j = b(a),
          l = j.autoCallback;
        j.url.split(".").pop().split("?").shift(),
          j.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]] || h),
            j.instead
              ? j.instead(a, e, f, g, i)
              : (y[j.url] ? (j.noexec = !0) : (y[j.url] = 1),
                f.load(
                  j.url,
                  j.forceCSS ||
                    (!j.forceJS &&
                      "css" == j.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  j.noexec,
                  j.attrs,
                  j.timeout
                ),
                (d(e) || d(l)) &&
                  f.load(function () {
                    k(),
                      e && e(j.origUrl, i, g),
                      l && l(j.origUrl, i, g),
                      (y[j.url] = 2);
                  })));
      }
      function i(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var j,
        l,
        m = this.yepnope.loader;
      if (e(a)) g(a, 0, m, 0);
      else if (w(a))
        for (j = 0; j < a.length; j++)
          (l = a[j]),
            e(l) ? g(l, 0, m, 0) : w(l) ? B(l) : Object(l) === l && i(l, m);
      else Object(a) === a && i(a, m);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      b.readyState == null &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });
