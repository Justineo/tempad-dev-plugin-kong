function h(n){return n}function u(n,e,t){return{name:n,props:e||{},children:t||[]}}function I(n){return n.charAt(0).toUpperCase()+n.slice(1)}function y(n){return n.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function D(n){return I(y(n))}function S(n){return n.toUpperCase().replace(/-/g,"_")}function a(n){return u(D(n.name))}function c(n){const{Appearance:e,Size:t,State:l,Label:o,Position:i,Icon:p,"Icon Danger":s,"Icon Left":m,"Icon Right":g}=n.properties,f={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[e],d={Small:"small",Medium:void 0,Large:"large"}[t],C={Disabled:!0,Default:void 0}[l];let r=[];return n.name==="Button"?r=[o]:n.name==="Icon Button"?i==="Left"?r=[a(e==="Danger"?s:m),o]:i==="Right"&&(r=[o,a(g)]):n.name==="Icon Only"&&(r=[a(e==="Danger"?s:p)]),u("Button",{appearance:f,size:d,disabled:C},r)}const B=new Map([["Button",c],["Icon Button",c],["Icon Only",c]]),U=({component:n})=>{const e=B.get(n.name);return e?e(n):""},b={name:"Kong UI",code:{component:{title:"Component",lang:"vue",transformComponent:U},css:{title:"SCSS",lang:"scss",transformVariable({name:n}){return`$kui-${n.toLowerCase()}`}},js:{transformVariable({name:n}){return`\0KUI_${S(n)}\0`}}}};export{b as plugin};
