(this.webpackJsonptallerces4=this.webpackJsonptallerces4||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(5),s=r.n(a),i=r(2);r(10);function o(e){var t=e.setStop,r=e.questionNumber,n=Object(c.useState)(30),a=Object(i.a)(n,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){if(0===s)return t(!0);var e=setInterval((function(){o((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}),[t,s]),Object(c.useEffect)((function(){o(30)}),[r]),s}var u=r(3),l=r.p+"static/media/play.8e5f6d1d.mp3",d=r.p+"static/media/correct.160572d7.mp3",m=r.p+"static/media/wrong.e9468218.mp3",j=r(0);function b(e){var t=e.data,r=e.setStop,n=e.questionNumber,a=e.setQuestionNumber,s=Object(c.useState)(null),o=Object(i.a)(s,2),b=o[0],x=o[1],O=Object(c.useState)(null),f=Object(i.a)(O,2),p=f[0],v=f[1],h=Object(c.useState)("answer"),N=Object(i.a)(h,2),C=N[0],w=N[1],q=Object(u.a)(l),B=(Object(i.a)(q,1)[0],Object(u.a)(d)),g=Object(i.a)(B,1)[0],E=Object(u.a)(m),S=Object(i.a)(E,1)[0];Object(c.useEffect)((function(){x(t[n-1])}),[t,n]);var A=function(e,t){r((function(){t()}),e)};return Object(j.jsxs)("div",{className:"trivia",children:[Object(j.jsx)("div",{className:"question",children:null===b||void 0===b?void 0:b.question}),Object(j.jsx)("div",{className:"answers",children:null===b||void 0===b?void 0:b.answers.map((function(e){return Object(j.jsx)("div",{className:p===e?C:"answer",onClick:function(){return!p&&function(e){v(e),w("answer active"),A(3e3,(function(){w(e.correct?"answer correct":"answer wrong")})),A(5e3,(function(){e.correct?(g(),A(1e3,(function(){a((function(e){return e+1})),v(null)}))):(S(),A(1e3,(function(){r(!0)})))}))}(e)},children:e.text})}))})]})}function x(e){var t=e.setUsername,r=Object(c.useRef)();return Object(j.jsxs)("div",{className:"start",children:[Object(j.jsx)("input",{className:"startInput",placeholder:"Escribe tu nombre",ref:r}),Object(j.jsx)("button",{className:"startButton",onClick:function(){r.current.value&&t(r.current.value)},children:"Empezar"})]})}var O=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)(1),s=Object(i.a)(a,2),u=s[0],l=s[1],d=Object(c.useState)(!1),m=Object(i.a)(d,2),O=m[0],f=m[1],p=Object(c.useState)("$ 0"),v=Object(i.a)(p,2),h=v[0],N=v[1],C=Object(c.useMemo)((function(){return[{id:1,amount:"$ 100.000"},{id:2,amount:"$ 200.000"},{id:3,amount:"$ 300.000"},{id:4,amount:"$ 400.000"},{id:5,amount:"$ 500.000"},{id:6,amount:"$ 600.000"},{id:7,amount:"$ 700.000"},{id:8,amount:"$ 800.000"},{id:9,amount:"$ 900.000"},{id:10,amount:"$ 1.000.000"}].reverse()}),[]);return Object(c.useEffect)((function(){u>1&&N(C.find((function(e){return e.id===u-1})).amount)}),[C,u]),Object(j.jsx)("div",{className:"app",children:r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"main",children:O?Object(j.jsxs)("h1",{className:"endText",children:["Usted gano:",h]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"top",children:Object(j.jsx)("div",{className:"timer",children:Object(j.jsx)(o,{setStop:f,questionNumber:u})})}),Object(j.jsx)("div",{className:"bottom",children:Object(j.jsx)(b,{data:[{id:1,question:"\xbfQui\xe9n gan\xf3 el mundial del 2014?",answers:[{text:"A) Brasil",correct:!1},{text:"B) Espa\xf1a",correct:!1},{text:"C)Colombia",correct:!1},{text:"D) Alemania",correct:!0}]},{id:2,question:"\xbfCu\xe1l es el pa\xeds m\xe1s grande del mundo?",answers:[{text:"A) Rusia ",correct:!0},{text:"B) EEUU",correct:!1},{text:"C) China ",correct:!1},{text:"D) Canad\xe1",correct:!1}]},{id:3,question:"\xbfQui\xe9n fue la \xfaltima persona en ganar el premio Nobel de literatura?",answers:[{text:"A)Bob Dylan",correct:!1},{text:"B) Gabriel Garc\xeda M\xe1rquez",correct:!1},{text:"C) Louise Gluck ",correct:!0},{text:"D) Mo Yanst",correct:!1}]},{id:4,question:"\xbfQui\xe9n fue el presidente de Senegal en 2010?",answers:[{text:"A) Andrea Pirlo",correct:!1},{text:"B) Zidane ",correct:!1},{text:"C) Abdoulaye Wade ",correct:!0},{text:"D) Macky Sall",correct:!1}]},{id:5,question:"\xbfCu\xe1l el r\xedo m\xe1s grande del mundo?",answers:[{text:"A) Amazonas",correct:!0},{text:"B) Nilo",correct:!1},{text:"C) Misisipi ",correct:!1},{text:"D) Congue",correct:!1}]},{id:6,question:"\xbfQui\xe9n escribi\xf3 Harry Potter?",answers:[{text:"A) Edgar Allan Poe",correct:!1},{text:"B) Stephen King",correct:!1},{text:"C) J.K Rowling ",correct:!0},{text:"D) Cassandra Clare",correct:!1}]},{id:7,question:"\xbfEn qu\xe9 a\xf1o fue construida la torre Eiffel?",answers:[{text:"A) 1874",correct:!1},{text:"B) 1865",correct:!1},{text:"C) 1877",correct:!0},{text:"D) 1790",correct:!1}]},{id:8,question:"Una tarjeta SD es un dispositivo de:",answers:[{text:"A) Comunicaci\xf3n remota",correct:!1},{text:"B)Procesamiento de audio",correct:!1},{text:"C)Compresi\xf3n de video ",correct:!1},{text:"D)Memoria",correct:!0}]},{id:9,question:"Es el primer afroamericano en ser electo Presidente de Estados Unidos:",answers:[{text:"A)Bill Clinton",correct:!1},{text:"B)Barack Obama",correct:!0},{text:"C)John McCain ",correct:!1},{text:"D)George W. Bush",correct:!1}]},{id:10,question:"En la pel\xedcula de Disney; Tambor, el amigo de Bambi, es un:",answers:[{text:"A)Perro",correct:!1},{text:"B)Gato",correct:!1},{text:"C)Conejo ",correct:!0},{text:"D)Elefante",correct:!1}]}],setStop:f,questionNumber:u,setQuestionNumber:l})})]})}),Object(j.jsx)("div",{className:"pyramid",children:Object(j.jsx)("ul",{className:"moneyList",children:C.map((function(e){return Object(j.jsxs)("li",{className:u===e.id?"moneyListItem active":"moneyListItem",children:[Object(j.jsx)("span",{className:"moneyListItemNumber",children:e.id}),Object(j.jsx)("span",{className:"moneyListItemAmount",children:e.amount})]})}))})})]}):Object(j.jsx)(x,{setUsername:n})})};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f0f35766.chunk.js.map