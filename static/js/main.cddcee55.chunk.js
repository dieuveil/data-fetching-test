(this["webpackJsonpdata-fetching-test"]=this["webpackJsonpdata-fetching-test"]||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(12),r=n.n(l),i=(n(19),n(2)),u=n(13),o=n.n(u),s={height:"30px",width:"25em"},p={"font-size":"25px"};var f=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),l=n[0],r=n[1],u=Object(a.useState)([]),f=Object(i.a)(u,2),d=f[0],m=f[1];Object(a.useEffect)((function(){o.a.get("https://api.github.com/users/dieuveil/repos").then((function(e){console.log(e),m(e.data)})).catch((function(e){console.log(e)}))}));var h=d.filter((function(e){return-1!==e.name.indexOf(l)}));return c.a.createElement("div",null,c.a.createElement("input",{style:s,type:"text",placeholder:"Search",value:l,onChange:function(e){r(e.target.value.substr(0,20))}}),c.a.createElement("ul",{className:"list"},h.map((function(e){return c.a.createElement("li",{key:e.id,style:p},e.name)}))))},d={"padding-top":"20px","padding-left":"38em"};var m=function(){return c.a.createElement("div",{className:"App",style:d},c.a.createElement(f,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cddcee55.chunk.js.map