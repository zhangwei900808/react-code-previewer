"use strict";

!function (d) {
  var t,
      n = '<svg><symbol id="icon-code-open" viewBox="0 0 1098 1024"><path d="M352.548571 799.451429l-28.598857 28.598857q-5.705143 5.705143-13.165714 5.705143t-13.165714-5.705143l-266.313143-266.313143q-5.705143-5.705143-5.705143-13.165714t5.705143-13.165714l266.313143-266.313143q5.705143-5.705143 13.165714-5.705143t13.165714 5.705143l28.598857 28.598857q5.705143 5.705143 5.705143 13.165714t-5.705143 13.165714l-224.548571 224.548571 224.548571 224.548571q5.705143 5.705143 5.705143 13.165714t-5.705143 13.165714zM690.322286 189.732571l-213.138286 737.718857q-2.267429 7.460571-8.850286 11.117714t-13.458286 1.462857l-35.401143-9.728q-7.460571-2.267429-11.117714-8.850286t-1.462857-13.970286l213.138286-737.718857q2.267429-7.460571 8.850286-11.117714t13.458286-1.462857l35.401143 9.728q7.460571 2.267429 11.117714 8.850286t1.462857 13.970286zM1065.691429 561.737143l-266.313143 266.313143q-5.705143 5.705143-13.165714 5.705143t-13.165714-5.705143l-28.598857-28.598857q-5.705143-5.705143-5.705143-13.165714t5.705143-13.165714l224.548571-224.548571-224.548571-224.548571q-5.705143-5.705143-5.705143-13.165714t5.705143-13.165714l28.598857-28.598857q5.705143-5.705143 13.165714-5.705143t13.165714 5.705143l266.313143 266.313143q5.705143 5.705143 5.705143 13.165714t-5.705143 13.165714z"  ></path></symbol><symbol id="icon-code-close" viewBox="0 0 1024 1024"><path d="M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"  ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (o = t, l = d.document, i = !1, (_c = function c() {
      try {
        l.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_c, 50);
      }

      n();
    })(), l.onreadystatechange = function () {
      "complete" == l.readyState && (l.onreadystatechange = null, n());
    });

    function n() {
      i || (i = !0, o());
    }

    var o, l, i, _c;
  }(function () {
    var t, e;
    (t = document.createElement("div")).innerHTML = n, n = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", function (t, e) {
      e.firstChild ? function (t, e) {
        e.parentNode.insertBefore(t, e);
      }(t, e.firstChild) : e.appendChild(t);
    }(e, document.body));
  });
}(window);
//# sourceMappingURL=iconfont.js.map