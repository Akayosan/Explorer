var coinzilla_display=function(){var t=[],e={push:function(e){if(void 0!==e.zone&&(void 0===e.width&&(e.width=300),void 0===e.height&&(e.height=250),o.isCookieEnabled())){t[e.zone]={zone:e.zone,width:e.width,height:e.height};var i=Math.floor(1e12*Math.random())+(new Date).getTime();n.true&&728===parseInt(e.width)&&90===parseInt(e.height)&&(e.width=320,e.height=100);var s="https://request-global.czilladx.com/serve/get.php?withoutAdCode=1&z="+e.zone+"&w="+e.width+"&h="+e.height+"&n="+i,d=new XMLHttpRequest;d.open("GET",s,!0),d.withCredentials=!0,d.onload=function(){if(200===d.status){var t=d.responseText;if(o.isEmptyString(t))return;e.url=t,r[e.zone]=function(t){return new this(t)},r[e.zone](e)}if(220===d.status){t=d.responseText;if(t=JSON.parse(t),o.isEmptyString(t.client))return;if(o.isEmptyString(t.slot))return;e.client=t.client,e.slot=t.slot,e.width=t.width,e.height=t.height,a[e.zone]=function(t){return new this(t)},a[e.zone](e)}},d.send()}},reload:function(){for(var i=document.getElementsByClassName("coinzilla"),n=0;n<i.length;n++)i[n].removeAttribute("data-rendered"),i[n].innerHTML="";Object.keys(t).forEach((function(i,n){e.push(t[i])}),t)}},i=(navigator.userAgent,navigator.userAgent.toLowerCase()),n={true:/iphone|ipad|android|ucbrowser|iemobile|ipod|blackberry|bada/.test(i)},o={bind:function(t,e,i){i.addEventListener?i.addEventListener(e,t):i.attachEvent&&i.attachEvent("on"+e,t)},getCookie:function(t){var e=document.cookie.match(new RegExp(t+"=([^;]+)"));return e?decodeURIComponent(e[1]):null},setCookie:function(t,e,i,n){var o;null==i?i=null:("number"==typeof i?(o=new Date).setTime(o.getTime()+60*i*1e3):o=i,i="; expires="+o.toUTCString());document.cookie=t+"="+encodeURIComponent(e)+i+"; path="+(n||"/")},isCookieEnabled:function(){return navigator.cookieEnabled},isEmptyString:function(t){return void 0===t||null==t||0==t||0==t.length||""==t||""==t.replace(/\s/g,"")||!/[^\s]/.test(t)||/^\s*$/.test(t)}},r=function(t){this.construct(t)},a=function(t){this.construct(t)};if(r.prototype={construct:function(t){for(var e=t.url,i=document.getElementsByClassName("coinzilla"),n=0;n<i.length;n++)if(void 0===i[n].dataset.rendered&&void 0!==i[n].dataset.zone&&i[n].dataset.zone==="C-"+t.zone){i[n].setAttribute("style","max-width: "+t.width+"px; width:"+t.width+"px; height:"+t.height+"px; display: inline-block;"),i[n].setAttribute("data-rendered","true");var o=document.createElement("iframe");o.setAttribute("src",e),o.setAttribute("scrolling","no"),o.setAttribute("style","border: 0; overflow: hidden; margin:0 auto;width: 100%;max-width: "+t.width+"px;height: 100%;max-height: "+t.height+"px;"),o.setAttribute("frameborder","0"),o.setAttribute("scrolling","no"),o.setAttribute("allowtransparency","true"),o.id="Z-"+t.zone,i[n].appendChild(o)}}},a.prototype={construct:function(t){for(var e=document.getElementsByClassName("coinzilla"),i=0;i<e.length;i++)if(void 0===e[i].dataset.rendered&&void 0!==e[i].dataset.zone&&e[i].dataset.zone==="C-"+t.zone){e[i].setAttribute("style","max-width: "+t.width+"px; width:"+t.width+"px; height:"+t.height+"px; display: inline-block;"),e[i].setAttribute("data-rendered","true");var n=document.createElement("script");n.setAttribute("src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+t.client),n.setAttribute("crossorigin","anonymous"),e[i].appendChild(n);var o=document.createElement("ins");o.setAttribute("class","adsbygoogle"),o.setAttribute("data-ad-client",t.client),o.setAttribute("data-ad-slot",t.slot),o.setAttribute("style","display:inline-block;width:"+t.width+"px;height:"+t.height+"px"),e[i].appendChild(o);var r=document.createElement("script");r.textContent="(adsbygoogle = window.adsbygoogle || []).push({})",e[i].appendChild(r)}}},void 0!==window.coinzilla_display)for(var s=0;s<window.coinzilla_display.length;s++)e.push(window.coinzilla_display[s]);return e}();