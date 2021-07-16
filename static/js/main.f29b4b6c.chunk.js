(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(57)},28:function(e,t,n){},49:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),s=n.n(o),l=(n(28),n(3)),i=n(15),d=n(16),r=n(21),m=n(17),h=n(22),u=n(4),v=n(18),p=n.n(v),E=n(19),y=n.n(E),f=n(20),C=n.n(f),g=(n(49),n(51),n(53),n(55),n(13),n(12),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).syncUpdates=function(){var e=Object(l.a)({},n.state);C.a.post("https://dyte-backend.herokuapp.com/update-editor",e).catch(console.error)},n.runCode=function(){var e=n.state,t=e.html,a=e.css,c=e.js,o=n.refs.iframe.contentDocument,s='\n      <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>Document</title>\n        <style>\n          '.concat(a,"\n        </style>\n      </head>\n      <body>\n        ").concat(t,'\n\n        <script type="text/javascript">\n          ').concat(c,"\n        <\/script>\n      </body>\n      </html>\n    ");o.open(),o.write(s),o.close()},n.state={id:"",html:"",css:"",js:""},n.pusher=new p.a("d90d11b1a8b505ec91f5",{cluster:"ap2",forceTLS:!0}),n.channel=n.pusher.subscribe("editor"),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.runCode()}},{key:"componentDidMount",value:function(){var e=this;this.setState({id:y()()}),this.channel.bind("text-update",function(t){var n=e.state.id;t.id!==n&&e.setState({html:t.html,css:t.css,js:t.js})})}},{key:"loadEditor",value:function(e){console.log(e);var t="".concat(e)+"-code";"html-code"===t&&(document.getElementsByClassName("html-code")[0].style.height="94.8vh",document.getElementsByClassName("css-code")[0].style.height="0vh",document.getElementsByClassName("js-code")[0].style.height="0vh"),"css-code"===t&&(document.getElementsByClassName("html-code")[0].style.height="0vh",document.getElementsByClassName("css-code")[0].style.height="94.8vh",document.getElementsByClassName("js-code")[0].style.height="0vh"),"js-code"===t&&(document.getElementsByClassName("html-code")[0].style.height="0vh",document.getElementsByClassName("css-code")[0].style.height="0vh",document.getElementsByClassName("js-code")[0].style.height="94.8vh")}},{key:"downloadCode",value:function(){var e='\n      <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>Document</title>\n        <style>\n          '.concat(this.state.css,"\n        </style>\n      </head>\n      <body>\n        ").concat(this.state.html,'\n        <script type="text/javascript">\n          ').concat(this.state.js,"\n        <\/script>\n      </body>\n      </html>\n    "),t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=UTF-8,"+encodeURIComponent(e)),t.setAttribute("download","codeSoumyadeeptaDas.txt"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.html,a=t.js,o=t.css,s={theme:"material",lineNumbers:!0,scrollbarStyle:null,lineWrapping:!0};return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement("section",{className:"headersection"},c.a.createElement("div",null,c.a.createElement("h2",null,"Live Code Editor with collaboration features"),c.a.createElement("h4",null,"by: Soumyadeepta Das (18BCE1350)")))),c.a.createElement("div",null,c.a.createElement("section",{className:"fileexplorersection"},c.a.createElement("div",{className:"section-heading"},"File Explorer"),c.a.createElement("div",{className:"file-explorer"},c.a.createElement("br",null),c.a.createElement("p",null,"Click on a file to maximize on code editor"),c.a.createElement("ul",{className:"filelist"},c.a.createElement("li",{onClick:function(){return e.loadEditor("html")},id:"html",value:"html"},"index.html"),c.a.createElement("li",{onClick:function(){return e.loadEditor("css")},id:"css",value:"css"},"index.css"),c.a.createElement("li",{onClick:function(){return e.loadEditor("js")},id:"js",value:"js"},"index.js")),c.a.createElement("button",{id:"downloadButton",onClick:function(){return e.downloadCode()}},"Download Code"))),c.a.createElement("section",{className:"codeeditorsection"},c.a.createElement("div",{className:"section-heading"},"Code Editor"),c.a.createElement("div",{className:"code-editor html-code"},c.a.createElement("div",{className:"editor-header"},"HTML (index.html)"),c.a.createElement(u.Controlled,{value:n,options:Object(l.a)({mode:"htmlmixed"},s),onBeforeChange:function(t,n,a){e.setState({html:a},function(){return e.syncUpdates()})}})),c.a.createElement("div",{className:"code-editor css-code"},c.a.createElement("div",{className:"editor-header"},"CSS (index.css)"),c.a.createElement(u.Controlled,{value:o,options:Object(l.a)({mode:"css"},s),onBeforeChange:function(t,n,a){e.setState({css:a},function(){return e.syncUpdates()})}})),c.a.createElement("div",{className:"code-editor js-code"},c.a.createElement("div",{className:"editor-header"},"JavaScript (index.js)"),c.a.createElement(u.Controlled,{value:a,options:Object(l.a)({mode:"javascript"},s),onBeforeChange:function(t,n,a){e.setState({js:a},function(){return e.syncUpdates()})}}))),c.a.createElement("section",{className:"liveviewsection"},c.a.createElement("div",{className:"section-heading"},"Live View (Rendered view)"),c.a.createElement("iframe",{title:"result",className:"iframe",ref:"iframe"}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.f29b4b6c.chunk.js.map