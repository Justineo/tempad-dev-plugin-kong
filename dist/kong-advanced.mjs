function $i(o){return o}function C(o,t,e){return{name:o,props:t??{},children:e??[]}}function F(o,t){if(t===void 0)return!0;if(typeof o=="string"){if(Array.isArray(t))return t.includes(o);if(t instanceof RegExp)return t.test(o)}return o===t}function E(o,t){return typeof t=="function"?t(o):F(o.type,t.type)&&F(o.name,t.name)&&F(o.visible,t.visible)}function d(o,t){return o.children.find(e=>E(e,t))??null}function I(o,t){return o.children.filter(e=>E(e,t))}function f(o,t){for(const e of o.children){if(E(e,t))return e;if("children"in e){const _=f(e,t);if(_)return _}}return null}function S(o,t){const e=[];for(const _ of o.children)E(_,t)&&e.push(_),"children"in _&&e.push(...S(_,t));return e}const O="#ffffff",U="#d60027",V="#ad000e",X="#850000",j="#5c0000",q="#ff3954",H="#ffabab",G="#ffe5e5",J="#6f28ff",W="#f1f0ff",Y="#e0e4ea",Z="#000933",Q="#6c7489",oo="#52596e",to="#3a3f51",eo="#232633",_o="#afb7c5",ro="#e0e4ea",io="#f9fafb",no="rgba(0, 9, 51, 0.6)",so="#0044f4",co="#0030cc",ao="#002099",uo="#001466",lo="#5f9aff",ko="#bee2ff",po="#eefaff",bo="#00d6a4",fo="#ecfffb",go="transparent",ho="#ffc400",mo="#fffce0",xo="#e0e4ea",wo="#d60027",vo="#ad000e",yo="#850000",To="#5c0000",Co="#ff3954",Io="#ffabab",So="#ffe5e5",Ao="#6f28ff",Eo="#e0e4ea",No="rgba(255, 255, 255, 0.2)",Fo="#afb7c5",Bo="#e0e4ea",zo="#0044f4",Lo="#0030cc",Ko="#002099",Do="#001466",Ro="#5f9aff",Po="#bee2ff",$o="#eefaff",Mo="transparent",Oo="#000933",Uo="#d60027",Vo="#ad000e",Xo="#00abd2",jo="#d60067",qo="#6f28ff",Ho="#5e00f5",Go="#afb7c5",Jo="#ffffff",Wo="#6c7489",Yo="#52596e",Zo="#3a3f51",Qo="#232633",ot="#afb7c5",tt="#e0e4ea",et="#0044f4",_t="#0030cc",rt="#002099",it="#001466",nt="#5f9aff",st="#007d60",ct="#005944",at="#995c00",ut="#804400",lt="0.2s",kt="0px",dt="2px",pt="4px",bt="6px",ft="8px",gt="10px",ht="50%",mt="100px",xt="0px",wt="1px",vt="2px",yt="4px",Tt="640px",Ct="768px",It="1024px",St="1280px",At="1536px",Et="#f50045",Nt="#828a9e",Ft="#306fff",Bt="#00a17b",zt="#ffc400",Lt="10px",Kt="12px",Dt="16px",Rt="20px",Pt="24px",$t="32px",Mt="40px",Ot="48px",Ut="#f1f0ff",Vt="#ffe5e5",Xt="#eefaff",jt="#52596e",qt="#e0e4ea",Ht="#ecfcff",Gt="#ecfffb",Jt="#fffce0",Wt="#fff0f7",Yt="#6f28ff",Zt="#5e00f5",Qt="#d60027",oe="#ad000e",te="#0044f4",ee="#0030cc",_e="#e0e4ea",re="#afb7c5",ie="#52596e",ne="#3a3f51",se="#00819d",ce="#00647a",ae="#007d60",ue="#005944",le="#995c00",ke="#804400",de="#d60067",pe="#ad0053",be="#000933",fe="rgba(255, 255, 255, 0.12)",ge="rgba(255, 255, 255, 0.12)",he="#00fabe",me="rgba(255, 255, 255, 0.24)",xe="#bee2ff",we="#ffffff",ve="#eefaff",ye="#00fabe",Te="0 0 0 1px rgba(255, 255, 255, 0.12) inset",Ce="4px 0 0 0 #00fabe inset",Ie="0 0 0 1px rgba(255, 255, 255, 0.60) inset",Se="#bee2ff",Ae="#8fc1ff",Ee="#5f9aff",Ne="#306fff",Fe="#b5ffee",Be="#00fabe",ze="#00d6a4",Le="#00a17b",Ke="#007d60",De="#005944",Re="#b5ffee",Pe="#00fabe",$e="#b5ffee",Me="#00a17b",Oe="#fff296",Ue="#ffe04b",Ve="#ffc400",Xe="#b37600",je="#995c00",qe="#804400",He="#fff296",Ge="#ffe04b",Je="#FFC2B3",We="#FF9877",Ye="#FF723C",Ze="#F75008",Qe="#D13500",o_="#A31F00",t_="#FFC2B3",e_="#FF9877",__="#FF723C",r_="#F75008",i_="#D13500",n_="#A31F00",s_="#FFC2B3",c_="#FF9877",a_="#FF723C",u_="#F75008",l_="#D13500",k_="#A31F00",d_="#FFC2B3",p_="#FF9877",b_="#FF723C",f_="#F75008",g_="#D13500",h_="#A31F00",m_="#FFC2B3",x_="#FF9877",w_="#FF723C",v_="#F75008",y_="#D13500",T_="#ffabab",C_="#ff7272",I_="#ff3954",S_="#f50045",A_="#d60027",E_="#ad000e",N_="#ffabab",F_="#ff7272",B_="#ff3954",z_="#f50045",L_="#d60027",K_="#eefaff",D_="#ecfffb",R_="#fffce0",P_="#FFF1EF",$_="#ffe5e5",M_="#5f9aff",O_="#00d6a4",U_="#ffc400",V_="#FF723C",X_="#ff3954",j_="'JetBrains Mono', Consolas, monospace",q_="'Inter', Roboto, Helvetica, sans-serif",H_="'Inter', Roboto, Helvetica, sans-serif",G_="10px",J_="12px",W_="14px",Y_="16px",Z_="18px",Q_="20px",or="24px",tr="32px",er="40px",_r="48px",rr="700",ir="500",nr="400",sr="600",cr="normal",ar="-0.12px",ur="-0.24px",lr="-0.32px",kr="-0.4px",dr="-0.48px",pr="normal",br="12px",fr="16px",gr="20px",hr="24px",mr="28px",xr="32px",wr="36px",vr="40px",yr="48px",Tr="56px",Cr="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",Ir="0px 0px 0px 1px #e0e4ea inset",Sr="0px 0px 0px 1px #d60027 inset",Ar="0px 0px 0px 1px #ad000e inset",Er="0px 0px 0px 1px #e0e4ea inset",Nr="0px 0px 0px 1px #0044f4 inset",Fr="0px 0px 0px 1px #001466 inset",Br="0px 0px 0px 1px #5f9aff inset",zr="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",Lr="0px",Kr="2px",Dr="4px",Rr="6px",Pr="8px",$r="12px",Mr="16px",Or="20px",Ur="24px",Vr="32px",Xr="40px",jr="48px",qr="56px",Hr="64px",Gr="80px",Jr="96px",Wr="auto",Yr={kui_color_background:O,kui_color_background_danger:U,kui_color_background_danger_strong:V,kui_color_background_danger_stronger:X,kui_color_background_danger_strongest:j,kui_color_background_danger_weak:q,kui_color_background_danger_weaker:H,kui_color_background_danger_weakest:G,kui_color_background_decorative_purple:J,kui_color_background_decorative_purple_weakest:W,kui_color_background_disabled:Y,kui_color_background_inverse:Z,kui_color_background_neutral:Q,kui_color_background_neutral_strong:oo,kui_color_background_neutral_stronger:to,kui_color_background_neutral_strongest:eo,kui_color_background_neutral_weak:_o,kui_color_background_neutral_weaker:ro,kui_color_background_neutral_weakest:io,kui_color_background_overlay:no,kui_color_background_primary:so,kui_color_background_primary_strong:co,kui_color_background_primary_stronger:ao,kui_color_background_primary_strongest:uo,kui_color_background_primary_weak:lo,kui_color_background_primary_weaker:ko,kui_color_background_primary_weakest:po,kui_color_background_success_weak:bo,kui_color_background_success_weakest:fo,kui_color_background_transparent:go,kui_color_background_warning_weak:ho,kui_color_background_warning_weakest:mo,kui_color_border:xo,kui_color_border_danger:wo,kui_color_border_danger_strong:vo,kui_color_border_danger_stronger:yo,kui_color_border_danger_strongest:To,kui_color_border_danger_weak:Co,kui_color_border_danger_weaker:Io,kui_color_border_danger_weakest:So,kui_color_border_decorative_purple:Ao,kui_color_border_disabled:Eo,kui_color_border_inverse:No,kui_color_border_neutral_weak:Fo,kui_color_border_neutral_weaker:Bo,kui_color_border_primary:zo,kui_color_border_primary_strong:Lo,kui_color_border_primary_stronger:Ko,kui_color_border_primary_strongest:Do,kui_color_border_primary_weak:Ro,kui_color_border_primary_weaker:Po,kui_color_border_primary_weakest:$o,kui_color_border_transparent:Mo,kui_color_text:Oo,kui_color_text_danger:Uo,kui_color_text_danger_strong:Vo,kui_color_text_decorative_aqua:Xo,kui_color_text_decorative_pink:jo,kui_color_text_decorative_purple:qo,kui_color_text_decorative_purple_strong:Ho,kui_color_text_disabled:Go,kui_color_text_inverse:Jo,kui_color_text_neutral:Wo,kui_color_text_neutral_strong:Yo,kui_color_text_neutral_stronger:Zo,kui_color_text_neutral_strongest:Qo,kui_color_text_neutral_weak:ot,kui_color_text_neutral_weaker:tt,kui_color_text_primary:et,kui_color_text_primary_strong:_t,kui_color_text_primary_stronger:rt,kui_color_text_primary_strongest:it,kui_color_text_primary_weak:nt,kui_color_text_success:st,kui_color_text_success_strong:ct,kui_color_text_warning:at,kui_color_text_warning_strong:ut,kui_animation_duration_20:lt,kui_border_radius_0:kt,kui_border_radius_10:dt,kui_border_radius_20:pt,kui_border_radius_30:bt,kui_border_radius_40:ft,kui_border_radius_50:gt,kui_border_radius_circle:ht,kui_border_radius_round:mt,kui_border_width_0:xt,kui_border_width_10:wt,kui_border_width_20:vt,kui_border_width_30:yt,kui_breakpoint_mobile:Tt,kui_breakpoint_phablet:Ct,kui_breakpoint_tablet:It,kui_breakpoint_laptop:St,kui_breakpoint_desktop:At,kui_icon_color_danger:Et,kui_icon_color_neutral:Nt,kui_icon_color_primary:Ft,kui_icon_color_success:Bt,kui_icon_color_warning:zt,kui_icon_size_10:Lt,kui_icon_size_20:Kt,kui_icon_size_30:Dt,kui_icon_size_40:Rt,kui_icon_size_50:Pt,kui_icon_size_60:$t,kui_icon_size_70:Mt,kui_icon_size_80:Ot,kui_method_color_background_connect:Ut,kui_method_color_background_delete:Vt,kui_method_color_background_get:Xt,kui_method_color_background_head:jt,kui_method_color_background_options:qt,kui_method_color_background_patch:Ht,kui_method_color_background_post:Gt,kui_method_color_background_put:Jt,kui_method_color_background_trace:Wt,kui_method_color_text_connect:Yt,kui_method_color_text_connect_strong:Zt,kui_method_color_text_delete:Qt,kui_method_color_text_delete_strong:oe,kui_method_color_text_get:te,kui_method_color_text_get_strong:ee,kui_method_color_text_head:_e,kui_method_color_text_head_strong:re,kui_method_color_text_options:ie,kui_method_color_text_options_strong:ne,kui_method_color_text_patch:se,kui_method_color_text_patch_strong:ce,kui_method_color_text_post:ae,kui_method_color_text_post_strong:ue,kui_method_color_text_put:le,kui_method_color_text_put_strong:ke,kui_method_color_text_trace:de,kui_method_color_text_trace_strong:pe,kui_navigation_color_background:be,kui_navigation_color_background_selected:fe,kui_navigation_color_border:ge,kui_navigation_color_border_child:he,kui_navigation_color_border_divider:me,kui_navigation_color_text:xe,kui_navigation_color_text_focus:we,kui_navigation_color_text_hover:ve,kui_navigation_color_text_selected:ye,kui_navigation_shadow_border:Te,kui_navigation_shadow_border_child:Ce,kui_navigation_shadow_focus:Ie,kui_status_color_100:Se,kui_status_color_101:Ae,kui_status_color_102:Ee,kui_status_color_103:Ne,kui_status_color_200:Fe,kui_status_color_201:Be,kui_status_color_202:ze,kui_status_color_203:Le,kui_status_color_204:Ke,kui_status_color_205:De,kui_status_color_206:Re,kui_status_color_207:Pe,kui_status_color_208:$e,kui_status_color_226:Me,kui_status_color_300:Oe,kui_status_color_301:Ue,kui_status_color_302:Ve,kui_status_color_303:Xe,kui_status_color_304:je,kui_status_color_305:qe,kui_status_color_307:He,kui_status_color_308:Ge,kui_status_color_400:Je,kui_status_color_401:We,kui_status_color_402:Ye,kui_status_color_403:Ze,kui_status_color_404:Qe,kui_status_color_405:o_,kui_status_color_406:t_,kui_status_color_407:e_,kui_status_color_408:__,kui_status_color_409:r_,kui_status_color_410:i_,kui_status_color_411:n_,kui_status_color_412:s_,kui_status_color_413:c_,kui_status_color_414:a_,kui_status_color_415:u_,kui_status_color_416:l_,kui_status_color_417:k_,kui_status_color_418:d_,kui_status_color_421:p_,kui_status_color_422:b_,kui_status_color_423:f_,kui_status_color_424:g_,kui_status_color_425:h_,kui_status_color_426:m_,kui_status_color_428:x_,kui_status_color_429:w_,kui_status_color_431:v_,kui_status_color_451:y_,kui_status_color_500:T_,kui_status_color_501:C_,kui_status_color_502:I_,kui_status_color_503:S_,kui_status_color_504:A_,kui_status_color_505:E_,kui_status_color_506:N_,kui_status_color_507:F_,kui_status_color_508:B_,kui_status_color_510:z_,kui_status_color_511:L_,kui_status_color_1na:K_,kui_status_color_2na:D_,kui_status_color_3na:R_,kui_status_color_4na:P_,kui_status_color_5na:$_,kui_status_color_100s:M_,kui_status_color_200s:O_,kui_status_color_300s:U_,kui_status_color_400s:V_,kui_status_color_500s:X_,kui_font_family_code:j_,kui_font_family_heading:q_,kui_font_family_text:H_,kui_font_size_10:G_,kui_font_size_20:J_,kui_font_size_30:W_,kui_font_size_40:Y_,kui_font_size_50:Z_,kui_font_size_60:Q_,kui_font_size_70:or,kui_font_size_80:tr,kui_font_size_90:er,kui_font_size_100:_r,kui_font_weight_bold:rr,kui_font_weight_medium:ir,kui_font_weight_regular:nr,kui_font_weight_semibold:sr,kui_letter_spacing_0:cr,kui_letter_spacing_minus_10:ar,kui_letter_spacing_minus_20:ur,kui_letter_spacing_minus_30:lr,kui_letter_spacing_minus_40:kr,kui_letter_spacing_minus_50:dr,kui_letter_spacing_normal:pr,kui_line_height_10:br,kui_line_height_20:fr,kui_line_height_30:gr,kui_line_height_40:hr,kui_line_height_50:mr,kui_line_height_60:xr,kui_line_height_70:wr,kui_line_height_80:vr,kui_line_height_90:yr,kui_line_height_100:Tr,kui_shadow:Cr,kui_shadow_border:Ir,kui_shadow_border_danger:Sr,kui_shadow_border_danger_strong:Ar,kui_shadow_border_disabled:Er,kui_shadow_border_primary:Nr,kui_shadow_border_primary_strongest:Fr,kui_shadow_border_primary_weak:Br,kui_shadow_focus:zr,kui_space_0:Lr,kui_space_10:Kr,kui_space_20:Dr,kui_space_30:Rr,kui_space_40:Pr,kui_space_50:$r,kui_space_60:Mr,kui_space_70:Or,kui_space_80:Ur,kui_space_90:Vr,kui_space_100:Xr,kui_space_110:jr,kui_space_120:qr,kui_space_130:Hr,kui_space_140:Gr,kui_space_150:Jr,kui_space_auto:Wr};function K(o,t){let e={};return Object.keys(o||e).forEach(_=>e[t(o[_],_)]=o[_]),e}function c(o,t){return K(o,(e,_)=>{if(t&&_ in t)return t[_]??_;const r=_.replace(/[ /]+(.)/g,(i,n)=>n.toUpperCase());return r.charAt(0).toLowerCase()+r.slice(1)})}function Zr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Qr(o){return o.replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function B(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/(\d)([a-z])/gi,"$1-$2").replace(/([a-z])(\d)/gi,"$1-$2").replace(/[_\s]/g,"-").toLowerCase()}function oi(o){return Zr(Qr(o))}function D(o){return o.toUpperCase().replace(/-/g,"_")}function w(o){return o.toLowerCase()}function p(o,t={}){const e=o.mainComponent?.name||o.name,_=d(o,{type:"VECTOR"})?.fills[0]?.color;return C(`${oi(e)}Icon`,Object.assign(_?{":color":typeof _=="string"?_:z(_.name,"js")}:{},t))}const ti=new Set(Object.keys(Yr).map(o=>o.substring(4).replaceAll("_","-")));function z(o,t){const e=o.toLowerCase().split(/[-/_ ]/);let _=null;for(;e.length;){const r=e.join("-");if(ti.has(r)){_=r;break}e.shift()}return _?t==="scss"?`$kui-${_.toLowerCase()}`:t==="js"?`KUI_${D(_)}`:_:null}function v(o,t){const e={};for(const _ in o)o[_]!==void 0&&o[_]!==t[_]&&(e[_]=o[_]);return e}function a(o,t,e,_){return C(o,v(t,e),_)}function h(o,t,e){const _=e?t:null,r=e??t;return C("template",{[`#${o}`]:_??!0},r)}const R="Lorem ipsum",L="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function ei(o){const{appearance:t,showIcon:e,showTitle:_,title:r,showClose:i}=c(o.properties),n=f(o,{type:"TEXT",name:"desc",visible:!0});return a("KAlert",{appearance:w(t),showIcon:e,title:_&&r||void 0,message:n?.characters,dismissible:i,onDismiss:i?()=>{}:void 0},{appearance:"info",showIcon:!1,dismissible:!1})}function _i(o){const{appearance:t,showIconLeft:e,iconLeft:_,showIconRight:r,iconRight:i,label:n}=c(o.properties),s=e?_:r?i:void 0;return a("KBadge",{appearance:w(t),iconBefore:e&&!r},{appearance:"info",iconBefore:!0},[n,...s?[h("icon",[p(s)])]:[]])}function ri(o){const{properties:t}=o,{method:e}=c(t);return a("KBadge",{appearance:w(e)},{},e?[e]:[])}function ii(o,t){const{icon:e,showIcon:_,text:r}=c(o.properties);return{text:r,key:B(r)||`level-${t}`,icon:_?e:void 0}}function ni(o){const t=I(o,{type:"INSTANCE",name:/^Level/,visible:!0}).map((_,r)=>ii(_,r)),e=[];return t.forEach(_=>{_.icon&&(e.push(h(`icon-${_.key}`,[p(_.icon)])),delete _.icon)}),C("KBreadcrumbs",{items:t},e)}function y(o){const{appearance:t,size:e,state:_,label:r,position:i,icon:n,iconDanger:s,iconLeft:u,iconRight:k}=c(o.properties);let l=[];return o.name==="Button"?l=[r]:o.name==="Icon Button"?i==="Left"?l=[p(t==="Danger"?s:u),r]:i==="Right"&&(l=[r,p(k)]):o.name==="Icon Only"&&(l=[p(t==="Danger"?s:n)]),a("KButton",{appearance:w(t),size:w(e),disabled:_==="Disabled",onClick:()=>{}},{appearance:"primary",size:"medium",disabled:!1},l)}function si(o){const t=f(o,{type:"TEXT",name:"title",visible:!0}),e=f(o,{type:"TEXT",name:"desc",visible:!0});return a("KCard",{title:t?.characters},{},e?.characters?[e.characters]:[])}function P(o){const{label:t,showRequired:e,showTooltip:_}=c(o.properties),r={};e&&(r.required=!0);const i=d(o,{type:"INSTANCE",name:"Tooltip",visible:!0});if(_&&i){r.info="...";const{showTooltip:n}=c(i.properties),s=d(i,{type:"INSTANCE",name:"Tooltip",visible:!0});if(n&&s){const{text:u}=c(s.properties);r.info=u}}return a("KLabel",r,{required:!1},[t])}function T(o,t){const{state:e,showLabel:_,showHelpText:r}=c(o.properties);let i,n;const s=f(o,{type:"INSTANCE",name:"Label",visible:!0});_&&s&&(n=P(s));const u=f(o,{type:"INSTANCE",name:["Parts/.Help Text","Help text"],visible:!0});if(r&&u){const{text:g}=c(u.properties);i=g}const{required:k,...l}=n?n.props:{},x=v({label:n?.children[0],labelAttributes:l,required:k,help:i,error:e==="Error",disabled:e==="Disabled"},{required:!1,error:!1,disabled:!1});return t?K(x,(g,b)=>b in t?t[b]??b:b):x}function ci(o){const{type:t}=c(o.properties),{required:e,label:_,labelAttributes:r,...i}=T(o,{help:"description"});return a("KCheckbox",{"v-model":"checked",indeterminate:t==="Indeterminate",label:_,labelAttributes:v({...r,required:e},{required:!1}),...i},{indeterminate:!1})}function ai(o){const{theme:t,showFunctions:e,showCopy:_,showAltAction:r}=c(o.properties),i=[];let n=!1;const s=f(o,{type:"INSTANCE",name:"Icon Button"});if(r&&s){const{iconLeft:u,label:k}=c(s.properties),l=[];u&&(u.name==="copy"&&(n=!0),l.push(p(u))),k&&l.push(k),l.length>0&&i.push(h("secondary-actions",[a("KCodeBlockIconButton",{theme:w(t),copyTooltip:n?"Copy...":void 0,onClick:"() => {}"},{theme:"light"},l)]))}return a("KCodeBlock",{id:"...",":code":"code",theme:w(t),language:"json",searchable:e,showCopyButton:_},{theme:"light",searchable:!1,showCopyButton:!0},i)}function ui(o){const{theme:t}=c(o.properties);return a("KCodeBlock",{":code":"code",theme:w(t),singleLine:!0},{theme:"light"})}function li(o){const{showLink:t}=c(o.properties),e=f(o,{type:"TEXT",name:"link",visible:!0});return a("KCollapse",{"v-model":"isCollapsed",triggerLabel:t&&e?.characters||void 0},{},[L])}function ki(o){const{appearance:t}=c(o.properties),e={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime",Months:"UNSUPPORTED",Years:"UNSUPPORTED","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[t],_=t.startsWith("Range")||void 0;return a("KDateTimePicker",{"v-model":"currentValue",mode:e,range:_},{range:!1})}function di(o){const t=I(o,{type:"INSTANCE",name:"Dropdown Option",visible:!0}).map(e=>{const{state:_,showLeftIcon:r,leftIcon:i,label:n}=c(e.properties),s=r&&i?p(i):void 0;return v({label:n,selected:_==="Selected",disabled:_==="Disabled",danger:_==="Danger",icon:s},{selected:!1,disabled:!1,danger:!1})});return t.some(e=>e.icon)?a("KDropdown",{},{},[h("items",[...t.map(({icon:e,label:_,...r})=>{const i=[];return e&&i.push(e),_&&i.push(_),a("KDropdownItem",r,{},i)})])]):a("KDropdown",{items:t},{})}function pi(o){const{showIcon:t,icon:e,title:_,description:r,showButton:i}=c(o.properties),n=f(o,{type:"INSTANCE",name:"Button"}),{appearance:s,label:u,state:k}=n?c(n.properties):{},l=i&&n&&s==="Primary",x=l?{actionButtonText:u,actionButtonVisible:i,actionButtonDisabled:l&&k==="Disabled"}:{};let g;t&&e&&(g={analytics:"default",warning:"error",search:"search",kong:"kong"}[e.name],g&&g==="default"&&(g=void 0));const b=[];if(!g&&e&&b.push(h("icon",[p(e)])),i&&!l){const m=I(o,{type:"INSTANCE",name:["Icon Only","Icon Button","Button"],visible:!0});m&&b.push(h("action",m.map(y)))}return a("KEmptyState",{title:_,message:r,iconVariant:g,...x},{actionButtonVisible:!0,actionButtonDisabled:!1},b)}function bi(o){const{showValue:t,placeholder:e,showIconLeft:_,iconLeft:r}=c(o.properties),i=_&&r?p(r):void 0,n=d(o,{type:"FRAME",name:"input",visible:!0}),s=n?d(n,{type:"INSTANCE",name:"Button",visible:!0}):void 0,u=s?s.properties.Label:void 0,k=T(o);return a("KFileUpload",{placeholder:t==="True"?void 0:e,buttonText:u!=="Select file"?u:void 0,...k,onFileAdded:"files => {}",onFileRemoved:"files => {}"},{},[...i?[h("icon",[i])]:[]])}function fi(o){const{state:t,showValue:e,placeholder:_,showIconLeft:r,iconLeft:i,showIconRight:n,iconRight:s}=c(o.properties),u=r&&i?h("before",[p(i)]):void 0,k=n&&s?h("after",[p(s,{role:"button",tabindex:"0",onClick:!0})]):void 0,l=T(o),x=l.label==="Password",g=s?.name==="visibility"||s?.name==="visibility-off";return a("KInput",{"v-model":"value",type:x||g?"password":void 0,showPasswordMaskToggle:g,placeholder:e==="True"?void 0:_,...l,readonly:t==="Readonly"},{showPasswordMaskToggle:!1,readonly:!1},[u,k].filter(b=>b!=null))}function gi(o){const t=d(o,{type:"INSTANCE",name:"Modal Header",visible:!0}),{showIcon:e,icon:_}=t?c(t.properties):{};let r=R,i=!1;t&&(r=d(t,{type:"TEXT",name:"Modal title"})?.characters||r,i=!d(t,{type:"INSTANCE",name:"close",visible:!0}));const n=e&&_?h("title",[p(_),r]):void 0,s=d(o,{type:"INSTANCE",name:"Modal Footer"}),u={},k={};let l;if(s){const g=d(s,{type:"FRAME",name:"right"}),b=g?I(g,{type:"INSTANCE",name:"Button",visible:!0}):[];if(!b.length)l=[];else if(b.length===1){const m=y(b[0]);Object.assign(u,m.props),typeof m.children[0]=="string"?u.label=m.children[0]:l=[m],k.hide=!0}else if(b.length===2){const[m,A]=b.map(y);Object.assign(u,A.props),Object.assign(k,m.props),typeof A.children[0]=="string"&&typeof m.children[0]=="string"?(u.label=A.children[0],k.label=m.children[0]):l=[m,A]}else l=b.map(y)}const x=l?h("footer-actions",l):void 0;return a("KModal",{":visible":"modalVisible",title:n?void 0:r,actionButtonText:u.label,actionButtonAppearance:u.appearance,actionButtonDisabled:u.disabled,cancelButtonText:k.label,cancelButtonAppearance:k.appearance,cancelButtonDisabled:k.disabled,hideCancelButton:k.hide,hideCloseIcon:i},{actionButtonText:"Submit",actionButtonAppearance:"primary",actionButtonDisabled:!1,cancelButtonText:"Cancel",cancelButtonAppearance:"tertiary",cancelButtonDisabled:!1,hideCancelButton:!1,hideCloseIcon:!1},[...n?[n]:[],L,...x?[x]:[]])}function hi(o){const{showValue:t,placeholder:e}=c(o.properties),_=T(o);return a("KMultiselect",{"v-model":"value",":items":"items",placeholder:t==="True"?void 0:e,..._},{})}function mi(o){const{showPages:t}=c(o.properties),e=!!d(o,{type:"INSTANCE",name:"Parts/.Pagination Text"});return a("KPagination",{":total-count":"total",":current-page":"page",offset:!t&&!e,disablePageJump:!t&&e},{offset:!1,disablePageJump:!1})}function xi(o){const{text:t,heading:e}=c(o.properties),_=f(o,{type:"FRAME",name:"title",visible:!0}),r=f(o,{type:"INSTANCE",name:"close",visible:!0});return a("KPop",{title:_&&e||void 0,hideCloseIcon:!r},{hideCloseIcon:!1},[h("content",[t])])}function wi(o){const{required:t,label:e,labelAttributes:_,...r}=T(o,{help:"description"});return a("KRadio",{"v-model":"checked",label:e,labelAttributes:v({..._,required:t},{required:!1}),...r},{})}function vi(o){const t=d(o,{type:"INSTANCE",visible:!0}),e=f(o,{type:"INSTANCE",name:"Label"}),_=f(o,{type:"INSTANCE",name:"Help Text"});return a("KRadio",{"v-model":"checked",label:e?.properties.Label,description:_?.properties.Text,cardRadioVisible:!1},{},t?[p(t)]:[])}function yi(o){const{size:t}=c(o.properties),e=I(o,{type:"INSTANCE",name:"Control Option"}).map(r=>{const{state:i}=c(r.properties),n=i==="Disabled",s=d(r,{type:"TEXT",name:"option"})?.characters||"";return{label:s,value:B(s),disabled:n}}),_=e.every(r=>r.disabled)||void 0;return _&&e.forEach(r=>{r.disabled=void 0}),a("KSegmentedControl",{":v-model":"selected",options:e,size:w(t),disabled:_},{size:"default",disabled:!1})}function Ti(o){const{showValue:t,placeholder:e,showIconLeft:_,iconLeft:r}=c(o.properties),i=_&&r?p(r):void 0,n=T(o);return a("KSelect",{"v-model":"value",":items":"items",placeholder:t==="True"?void 0:e,...n},{},i?[h("before",[i])]:[])}const $={Generic:"",Card:"card",Form:"form",Table:"table"},Ci="Skeleton Loader/(.*)";function N(o){const[,t]=o.name.match(Ci)||[],e=t in $?$[t]:void 0;return a("KSkeleton",{type:e},{type:""})}function M(o){const t=S(o,{type:"INSTANCE",name:"Tab",visible:!0}),e=[],_=[];return t.forEach(r=>{const{state:i,showIcon:n,icon:s}=c(r.properties),u=d(r,{type:"TEXT",name:"label"})?.characters||"",k=B(u);n&&s&&e.push(h(`${k}-anchor`,[p(s),u])),_.push(v({title:u||void 0,hash:`#${k}`,disabled:i==="Disabled"},{disabled:!1}))}),a("KTabs",{"v-model":"tabs",tabs:_},{},e)}function Ii(o){const{showTabs:t}=c(o.properties),e=d(o,{type:"FRAME",name:"header"}),_=e&&d(e,{type:"FRAME",name:"title",visible:!0}),r=(_&&f(_,{type:"TEXT",visible:!0}))?.characters,i=t&&f(o,{type:"INSTANCE",name:"Tabs",visible:!0})||null;return C("KSlideout",{":visible":"slideoutVisible",title:r},[...i?[M(i)]:[],L])}const Si={Inactive:"default",Active:"active",Complete:"completed",Loading:"pending",Error:"error"};function Ai(o){const t=S(o,{type:"INSTANCE",name:"Parts/.Step Icon"}),e=S(o,{type:"TEXT",name:/^Step/,visible:!0}).map((_,r)=>{const i=t[r],{appearance:n}=c(i.properties),s=Si[n];return v({label:_.characters,state:s},{state:"default"})});return a("KStepper",{steps:e},{})}function Ei(o){const{size:t}=c(o.properties);return a("KInputSwitch",{"v-model":"switchValue",label:R,labelBefore:!0,size:{Medium:"large",Small:"small"}[t]},{size:"small"})}function Ni(o){const{showValue:t,placeholder:e}=c(o.properties),_=T(o),r=f(o,{type:"INSTANCE",name:"Parts/.Resize",visible:!0});return a("KTextArea",{"v-model":"value",placeholder:t==="True"?void 0:e,resizable:!!r,..._},{resizable:!1})}function Fi(o){const{showTitle:t,appearance:e}=c(o.properties),_={Info:"info",Success:"success",Warning:"warning",Error:"danger",System:"system"},r=t&&o.properties[`${e} title`]||void 0,i=o.properties[`${e} desc`]||void 0;return a("KToaster",{appearance:_[e],title:r,message:i},{appearance:"info"})}const Bi="#6c7489";function zi(o){const{text:t}=c(o.properties);return a("KTooltip",{text:t},{})}function Li(o){const{showTooltip:t}=c(o.properties),e=t&&d(o,{type:"INSTANCE",name:"Tooltip",visible:!0}),_=(e&&c(e.properties))?.text||"...";return a("KTooltip",{text:_,":tooltip-id":"tooltipId"},{},[p({name:"info",type:"INSTANCE",properties:{},children:[],visible:!0},{":aria-describedby":"tooltipId",":color":`var(--kui-color-text-neutral, ${Bi})`,tabindex:"0"})])}function Ki(o){const t=S(o,{type:"INSTANCE",name:"Parts/.List Item",visible:!0}),e=t.map(n=>d(n,{type:"INSTANCE",name:"Icon",visible:!0})),_=t.map(n=>c(n.properties).icon),r=[...new Map(_.map(n=>[n.name,n])).values()],i=h("item-icon","{ item }",r.map((n,s)=>{const u=r.length===1?e.length===t.length?{}:{"v-if":"..."}:s===0?{"v-if":"..."}:s===r.length-1?{"v-else":"..."}:{"v-else-if":"..."};return p(n,u)}));return a("KTreeList",{":items":"items",hideIcons:e.length===0},{hideIcons:!1},r.length===1&&r[0].name==="document"?[]:[i])}const Di={Alert:ei,Badge:_i,MethodBadge:ri,GlobalBreadcrumb:ni,Button:y,IconButton:y,IconOnly:y,Card:si,Checkbox:ci,CodeBlock:ai,CodeLine:ui,Collapse:li,DatePicker:ki,Dropdown:di,EmptyState:pi,FileUpload:bi,Input:fi,Label:P,Modal:gi,Multiselect:hi,Pagination:mi,Popover:xi,Radio:wi,RadioCard:vi,SegmentedControl:yi,Select:Ti,"SkeletonLoader/Generic":N,"SkeletonLoader/Card":N,"SkeletonLoader/Form":N,"SkeletonLoader/Table":N,Slideout:Ii,Stepper:Ai,Tabs:M,Switch:Ei,Textarea:Ni,Toast:Fi,Tooltip:zi,InfoTooltip:Li,TreeList:Ki},Ri=({component:o})=>{try{if(o.children.length===1&&o.children[0].type==="VECTOR")return p(o);const t=Di[o.name.replaceAll(" ","")];return t?t(o):""}catch(t){return console.error(t),""}},Pi={name:"Kong UI Advanced",code:{component:{title:"Component",lang:"vue",transformComponent:Ri},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:t}){const e=z(o)?.toLowerCase();return e?`var(--kui-${e}, $kui-${e})`:t?`var(--${o}, ${t})`:`var(--${o})`}},js:{transformVariable({name:o,value:t}){const e=z(o);return e?`var(--kui-${e.toLowerCase()}, \0KUI_${D(e)}\0)`:t?`var(--${o}, ${t})`:`var(--${o})`}}}};export{Pi as plugin};
