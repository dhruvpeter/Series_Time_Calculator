(this.webpackJsonpseries_time_calculator=this.webpackJsonpseries_time_calculator||[]).push([[0],{24:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),r=a(17),i=a.n(r),c=(a(24),a(7)),o=a.n(c),l=a(8),u=a(18),d=a(4),h=a(19),m=a.n(h),j=(a(44),a(0));function p(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(JSON.parse(localStorage.getItem("results"))||[]),i=Object(d.a)(r,2),c=i[0],h=i[1],p=Object(s.useState)(JSON.parse(localStorage.getItem("watchTime"))||{days:0,hours:0}),b=Object(d.a)(p,2),f=b[0],O=b[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"input-container",children:[Object(j.jsx)("h1",{children:"Series Time Calculator"}),Object(j.jsxs)("div",{className:"time",children:[f.days," Days ",f.hours," Hours"]}),Object(j.jsx)("form",{onSubmit:function(e){function t(){return(t=Object(u.a)(o.a.mark((function e(){var t,s,r,i,u,j,p,b,g,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a,s={method:"GET",url:"https://imdb8.p.rapidapi.com/title/find",params:{q:a},headers:{"x-rapidapi-key":"350b05e5efmshbe4a30ce50ae94ap1bc047jsnd95e5bf5097e","x-rapidapi-host":"imdb8.p.rapidapi.com"}},e.prev=2,e.next=5,m.a.request(s);case 5:r=e.sent,i=r.data.results.filter((function(e){return"tvSeries"===e.titleType&&e.title.toLowerCase()===t.toLowerCase()})),u=Object(d.a)(i,1),(j=u[0])?(console.log(j),h([].concat(Object(l.a)(c),[j])),console.log(j.runningTimeInMinutes),p=Math.floor(j.runningTimeInMinutes*j.numberOfEpisodes/60),b=Math.floor(p/24),g=f.hours+p%24,console.log(p,b,g),v={},v=g>=24?{days:f.days+b+1,hours:g%24}:{days:f.days+b,hours:g},O(v),n(""),localStorage.setItem("watchTime",JSON.stringify(v)),localStorage.setItem("results",JSON.stringify([].concat(Object(l.a)(c),[j])))):alert("This series in not available"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()},children:Object(j.jsx)("input",{type:"text",name:"input",onChange:function(e){n(e.target.value)},value:a,placeholder:"Type in a TV Show"})})]}),Object(j.jsx)("div",{className:"tiles",children:c.map((function(e,t){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"fas fa-times delete",onClick:function(){return function(e){var t=c[e],a=Math.floor(t.runningTimeInMinutes*t.numberOfEpisodes/60),s=Math.floor(a/24),n=f.hours-a%24,r={};r=n<0?{days:f.days-s-1,hours:n+24}:{days:f.days-s,hours:n};var i=c.filter((function(t,a){return a!==e}));h(i),O(r),localStorage.setItem("watchTime",JSON.stringify(r)),localStorage.setItem("results",JSON.stringify(i))}(t)}}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:e.image.url})}),Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h3",{children:e.title})})]},t)}))})]})}var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.20f7e813.chunk.js.map