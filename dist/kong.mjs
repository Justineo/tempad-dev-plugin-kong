function L(e){return e}function s(e,n,t){return{name:e,props:n||{},children:t||[]}}function C(e,n){return typeof n=="function"?n(e):!(n.type&&e.type!==n.type||n.name&&e.name!==n.name)}function h(e,n){for(const t of e.children){if(C(t,n))return t;if("children"in t){const o=h(t,n);if(o)return o}}return null}function v(e){const{Appearance:n,"Show icon":t,"Show title":o,Title:r,"Show close":a}=e.properties,p={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[n],c=t?!0:void 0,l=o?r:void 0,i=a?!0:void 0,f=a?!0:void 0,g=h(e,{type:"TEXT",name:"desc"});return s("Alert",{appearance:p,showIcon:c,title:l,message:g?.characters,dismissible:i,onDismiss:f})}function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}function B(e){return e.replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function D(e){return S(B(e))}function w(e){return e.toUpperCase().replace(/-/g,"_")}function d(e){return s(`${D(e.name)}Icon`)}function b(e){const{Appearance:n,"Show icon left":t,"Icon left":o,"Show icon right":r,"Icon right":a,Label:p}=e.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[n],l=r&&!t?!1:void 0,i=t?o:r?a:void 0;return s("Badge",{appearance:c,iconBefore:l},[p,...i?[s("template",{"#icon":!0},[d(i)])]:[]])}function A(e){const{Method:n}=e.properties,t={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[n];return s("Badge",{appearance:t},n?[n]:[])}function m(e){const{Appearance:n,Size:t,State:o,Label:r,Position:a,Icon:p,"Icon danger":c,"Icon left":l,"Icon right":i}=e.properties,f={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[n],g={Small:"small",Medium:void 0,Large:"large"}[t],I={Disabled:!0,Default:void 0}[o];let u=[];return e.name==="Button"?u=[r]:e.name==="Icon Button"?a==="Left"?u=[d(n==="Danger"?c:l),r]:a==="Right"&&(u=[r,d(i)]):e.name==="Icon Only"&&(u=[d(n==="Danger"?c:p)]),s("Button",{appearance:f,size:g,disabled:I,onClick:!0},u)}const P={Alert:v,Badge:b,"Method Badge":A,Button:m,"Icon Button":m,"Icon Only":m},y=({component:e})=>{const n=P[e.name];return n?n(e):""},U={name:"Kong UI",code:{component:{title:"Component",lang:"vue",transformComponent:y},css:{title:"SCSS",lang:"scss",transformVariable({name:e}){return`$kui-${e.toLowerCase()}`}},js:{transformVariable({name:e}){return`\0KUI_${w(e)}\0`}}}};export{U as plugin};
