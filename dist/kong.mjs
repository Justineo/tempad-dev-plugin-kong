function $i(o){return o}function C(o,t,e){return{name:o,props:t??{},children:e??[]}}function F(o,t){if(t===void 0)return!0;if(typeof o=="string"){if(Array.isArray(t))return t.includes(o);if(t instanceof RegExp)return t.test(o)}return o===t}function E(o,t){return typeof t=="function"?t(o):F(o.type,t.type)&&F(o.name,t.name)&&F(o.visible,t.visible)}function d(o,t){return o.children.find(e=>E(e,t))??null}function I(o,t){return o.children.filter(e=>E(e,t))}function f(o,t){for(const e of o.children){if(E(e,t))return e;if("children"in e){const _=f(e,t);if(_)return _}}return null}function S(o,t){const e=[];for(const _ of o.children)E(_,t)&&e.push(_),"children"in _&&e.push(...S(_,t));return e}const M="#ffffff",O="#d60027",U="#ad000e",V="#850000",j="#5c0000",X="#ff3954",q="#ffabab",H="#ffe5e5",G="#6f28ff",J="#f1f0ff",W="#e0e4ea",Y="#000933",Z="#6c7489",Q="#52596e",oo="#3a3f51",to="#232633",eo="#afb7c5",_o="#e0e4ea",ro="#f9fafb",io="rgba(0, 9, 51, 0.6)",no="#0044f4",so="#0030cc",co="#002099",ao="#001466",uo="#5f9aff",lo="#bee2ff",ko="#eefaff",po="#00d6a4",bo="#ecfffb",fo="transparent",go="#ffc400",ho="#fffce0",mo="#e0e4ea",xo="#d60027",wo="#ad000e",vo="#850000",yo="#5c0000",To="#ff3954",Co="#ffabab",Io="#ffe5e5",So="#6f28ff",Ao="#e0e4ea",Eo="rgba(255, 255, 255, 0.2)",No="#afb7c5",Fo="#e0e4ea",Bo="#0044f4",zo="#0030cc",Lo="#002099",Ko="#001466",Do="#5f9aff",Ro="#bee2ff",Po="#eefaff",$o="transparent",Mo="#000933",Oo="#d60027",Uo="#ad000e",Vo="#00abd2",jo="#d60067",Xo="#6f28ff",qo="#5e00f5",Ho="#afb7c5",Go="#ffffff",Jo="#6c7489",Wo="#52596e",Yo="#3a3f51",Zo="#232633",Qo="#afb7c5",ot="#e0e4ea",tt="#0044f4",et="#0030cc",_t="#002099",rt="#001466",it="#5f9aff",nt="#007d60",st="#005944",ct="#995c00",at="#804400",ut="0.2s",lt="0px",kt="2px",dt="4px",pt="6px",bt="8px",ft="10px",gt="50%",ht="100px",mt="0px",xt="1px",wt="2px",vt="4px",yt="640px",Tt="768px",Ct="1024px",It="1280px",St="1536px",At="#f50045",Et="#828a9e",Nt="#306fff",Ft="#00a17b",Bt="#ffc400",zt="10px",Lt="12px",Kt="16px",Dt="20px",Rt="24px",Pt="32px",$t="40px",Mt="48px",Ot="#f1f0ff",Ut="#ffe5e5",Vt="#eefaff",jt="#52596e",Xt="#e0e4ea",qt="#ecfcff",Ht="#ecfffb",Gt="#fffce0",Jt="#fff0f7",Wt="#6f28ff",Yt="#5e00f5",Zt="#d60027",Qt="#ad000e",oe="#0044f4",te="#0030cc",ee="#e0e4ea",_e="#afb7c5",re="#52596e",ie="#3a3f51",ne="#00819d",se="#00647a",ce="#007d60",ae="#005944",ue="#995c00",le="#804400",ke="#d60067",de="#ad0053",pe="#000933",be="rgba(255, 255, 255, 0.12)",fe="rgba(255, 255, 255, 0.12)",ge="#00fabe",he="rgba(255, 255, 255, 0.24)",me="#bee2ff",xe="#ffffff",we="#eefaff",ve="#00fabe",ye="0 0 0 1px rgba(255, 255, 255, 0.12) inset",Te="4px 0 0 0 #00fabe inset",Ce="0 0 0 1px rgba(255, 255, 255, 0.60) inset",Ie="#bee2ff",Se="#8fc1ff",Ae="#5f9aff",Ee="#306fff",Ne="#b5ffee",Fe="#00fabe",Be="#00d6a4",ze="#00a17b",Le="#007d60",Ke="#005944",De="#b5ffee",Re="#00fabe",Pe="#b5ffee",$e="#00a17b",Me="#fff296",Oe="#ffe04b",Ue="#ffc400",Ve="#b37600",je="#995c00",Xe="#804400",qe="#fff296",He="#ffe04b",Ge="#FFC2B3",Je="#FF9877",We="#FF723C",Ye="#F75008",Ze="#D13500",Qe="#A31F00",o_="#FFC2B3",t_="#FF9877",e_="#FF723C",__="#F75008",r_="#D13500",i_="#A31F00",n_="#FFC2B3",s_="#FF9877",c_="#FF723C",a_="#F75008",u_="#D13500",l_="#A31F00",k_="#FFC2B3",d_="#FF9877",p_="#FF723C",b_="#F75008",f_="#D13500",g_="#A31F00",h_="#FFC2B3",m_="#FF9877",x_="#FF723C",w_="#F75008",v_="#D13500",y_="#ffabab",T_="#ff7272",C_="#ff3954",I_="#f50045",S_="#d60027",A_="#ad000e",E_="#ffabab",N_="#ff7272",F_="#ff3954",B_="#f50045",z_="#d60027",L_="#eefaff",K_="#ecfffb",D_="#fffce0",R_="#FFF1EF",P_="#ffe5e5",$_="#5f9aff",M_="#00d6a4",O_="#ffc400",U_="#FF723C",V_="#ff3954",j_="'JetBrains Mono', Consolas, monospace",X_="'Inter', Roboto, Helvetica, sans-serif",q_="'Inter', Roboto, Helvetica, sans-serif",H_="10px",G_="12px",J_="14px",W_="16px",Y_="18px",Z_="20px",Q_="24px",or="32px",tr="40px",er="48px",_r="700",rr="500",ir="400",nr="600",sr="normal",cr="-0.12px",ar="-0.24px",ur="-0.32px",lr="-0.4px",kr="-0.48px",dr="normal",pr="12px",br="16px",fr="20px",gr="24px",hr="28px",mr="32px",xr="36px",wr="40px",vr="48px",yr="56px",Tr="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",Cr="0px 0px 0px 1px #e0e4ea inset",Ir="0px 0px 0px 1px #d60027 inset",Sr="0px 0px 0px 1px #ad000e inset",Ar="0px 0px 0px 1px #e0e4ea inset",Er="0px 0px 0px 1px #0044f4 inset",Nr="0px 0px 0px 1px #001466 inset",Fr="0px 0px 0px 1px #5f9aff inset",Br="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",zr="0px",Lr="2px",Kr="4px",Dr="6px",Rr="8px",Pr="12px",$r="16px",Mr="20px",Or="24px",Ur="32px",Vr="40px",jr="48px",Xr="56px",qr="64px",Hr="80px",Gr="96px",Jr="auto",Wr={kui_color_background:M,kui_color_background_danger:O,kui_color_background_danger_strong:U,kui_color_background_danger_stronger:V,kui_color_background_danger_strongest:j,kui_color_background_danger_weak:X,kui_color_background_danger_weaker:q,kui_color_background_danger_weakest:H,kui_color_background_decorative_purple:G,kui_color_background_decorative_purple_weakest:J,kui_color_background_disabled:W,kui_color_background_inverse:Y,kui_color_background_neutral:Z,kui_color_background_neutral_strong:Q,kui_color_background_neutral_stronger:oo,kui_color_background_neutral_strongest:to,kui_color_background_neutral_weak:eo,kui_color_background_neutral_weaker:_o,kui_color_background_neutral_weakest:ro,kui_color_background_overlay:io,kui_color_background_primary:no,kui_color_background_primary_strong:so,kui_color_background_primary_stronger:co,kui_color_background_primary_strongest:ao,kui_color_background_primary_weak:uo,kui_color_background_primary_weaker:lo,kui_color_background_primary_weakest:ko,kui_color_background_success_weak:po,kui_color_background_success_weakest:bo,kui_color_background_transparent:fo,kui_color_background_warning_weak:go,kui_color_background_warning_weakest:ho,kui_color_border:mo,kui_color_border_danger:xo,kui_color_border_danger_strong:wo,kui_color_border_danger_stronger:vo,kui_color_border_danger_strongest:yo,kui_color_border_danger_weak:To,kui_color_border_danger_weaker:Co,kui_color_border_danger_weakest:Io,kui_color_border_decorative_purple:So,kui_color_border_disabled:Ao,kui_color_border_inverse:Eo,kui_color_border_neutral_weak:No,kui_color_border_neutral_weaker:Fo,kui_color_border_primary:Bo,kui_color_border_primary_strong:zo,kui_color_border_primary_stronger:Lo,kui_color_border_primary_strongest:Ko,kui_color_border_primary_weak:Do,kui_color_border_primary_weaker:Ro,kui_color_border_primary_weakest:Po,kui_color_border_transparent:$o,kui_color_text:Mo,kui_color_text_danger:Oo,kui_color_text_danger_strong:Uo,kui_color_text_decorative_aqua:Vo,kui_color_text_decorative_pink:jo,kui_color_text_decorative_purple:Xo,kui_color_text_decorative_purple_strong:qo,kui_color_text_disabled:Ho,kui_color_text_inverse:Go,kui_color_text_neutral:Jo,kui_color_text_neutral_strong:Wo,kui_color_text_neutral_stronger:Yo,kui_color_text_neutral_strongest:Zo,kui_color_text_neutral_weak:Qo,kui_color_text_neutral_weaker:ot,kui_color_text_primary:tt,kui_color_text_primary_strong:et,kui_color_text_primary_stronger:_t,kui_color_text_primary_strongest:rt,kui_color_text_primary_weak:it,kui_color_text_success:nt,kui_color_text_success_strong:st,kui_color_text_warning:ct,kui_color_text_warning_strong:at,kui_animation_duration_20:ut,kui_border_radius_0:lt,kui_border_radius_10:kt,kui_border_radius_20:dt,kui_border_radius_30:pt,kui_border_radius_40:bt,kui_border_radius_50:ft,kui_border_radius_circle:gt,kui_border_radius_round:ht,kui_border_width_0:mt,kui_border_width_10:xt,kui_border_width_20:wt,kui_border_width_30:vt,kui_breakpoint_mobile:yt,kui_breakpoint_phablet:Tt,kui_breakpoint_tablet:Ct,kui_breakpoint_laptop:It,kui_breakpoint_desktop:St,kui_icon_color_danger:At,kui_icon_color_neutral:Et,kui_icon_color_primary:Nt,kui_icon_color_success:Ft,kui_icon_color_warning:Bt,kui_icon_size_10:zt,kui_icon_size_20:Lt,kui_icon_size_30:Kt,kui_icon_size_40:Dt,kui_icon_size_50:Rt,kui_icon_size_60:Pt,kui_icon_size_70:$t,kui_icon_size_80:Mt,kui_method_color_background_connect:Ot,kui_method_color_background_delete:Ut,kui_method_color_background_get:Vt,kui_method_color_background_head:jt,kui_method_color_background_options:Xt,kui_method_color_background_patch:qt,kui_method_color_background_post:Ht,kui_method_color_background_put:Gt,kui_method_color_background_trace:Jt,kui_method_color_text_connect:Wt,kui_method_color_text_connect_strong:Yt,kui_method_color_text_delete:Zt,kui_method_color_text_delete_strong:Qt,kui_method_color_text_get:oe,kui_method_color_text_get_strong:te,kui_method_color_text_head:ee,kui_method_color_text_head_strong:_e,kui_method_color_text_options:re,kui_method_color_text_options_strong:ie,kui_method_color_text_patch:ne,kui_method_color_text_patch_strong:se,kui_method_color_text_post:ce,kui_method_color_text_post_strong:ae,kui_method_color_text_put:ue,kui_method_color_text_put_strong:le,kui_method_color_text_trace:ke,kui_method_color_text_trace_strong:de,kui_navigation_color_background:pe,kui_navigation_color_background_selected:be,kui_navigation_color_border:fe,kui_navigation_color_border_child:ge,kui_navigation_color_border_divider:he,kui_navigation_color_text:me,kui_navigation_color_text_focus:xe,kui_navigation_color_text_hover:we,kui_navigation_color_text_selected:ve,kui_navigation_shadow_border:ye,kui_navigation_shadow_border_child:Te,kui_navigation_shadow_focus:Ce,kui_status_color_100:Ie,kui_status_color_101:Se,kui_status_color_102:Ae,kui_status_color_103:Ee,kui_status_color_200:Ne,kui_status_color_201:Fe,kui_status_color_202:Be,kui_status_color_203:ze,kui_status_color_204:Le,kui_status_color_205:Ke,kui_status_color_206:De,kui_status_color_207:Re,kui_status_color_208:Pe,kui_status_color_226:$e,kui_status_color_300:Me,kui_status_color_301:Oe,kui_status_color_302:Ue,kui_status_color_303:Ve,kui_status_color_304:je,kui_status_color_305:Xe,kui_status_color_307:qe,kui_status_color_308:He,kui_status_color_400:Ge,kui_status_color_401:Je,kui_status_color_402:We,kui_status_color_403:Ye,kui_status_color_404:Ze,kui_status_color_405:Qe,kui_status_color_406:o_,kui_status_color_407:t_,kui_status_color_408:e_,kui_status_color_409:__,kui_status_color_410:r_,kui_status_color_411:i_,kui_status_color_412:n_,kui_status_color_413:s_,kui_status_color_414:c_,kui_status_color_415:a_,kui_status_color_416:u_,kui_status_color_417:l_,kui_status_color_418:k_,kui_status_color_421:d_,kui_status_color_422:p_,kui_status_color_423:b_,kui_status_color_424:f_,kui_status_color_425:g_,kui_status_color_426:h_,kui_status_color_428:m_,kui_status_color_429:x_,kui_status_color_431:w_,kui_status_color_451:v_,kui_status_color_500:y_,kui_status_color_501:T_,kui_status_color_502:C_,kui_status_color_503:I_,kui_status_color_504:S_,kui_status_color_505:A_,kui_status_color_506:E_,kui_status_color_507:N_,kui_status_color_508:F_,kui_status_color_510:B_,kui_status_color_511:z_,kui_status_color_1na:L_,kui_status_color_2na:K_,kui_status_color_3na:D_,kui_status_color_4na:R_,kui_status_color_5na:P_,kui_status_color_100s:$_,kui_status_color_200s:M_,kui_status_color_300s:O_,kui_status_color_400s:U_,kui_status_color_500s:V_,kui_font_family_code:j_,kui_font_family_heading:X_,kui_font_family_text:q_,kui_font_size_10:H_,kui_font_size_20:G_,kui_font_size_30:J_,kui_font_size_40:W_,kui_font_size_50:Y_,kui_font_size_60:Z_,kui_font_size_70:Q_,kui_font_size_80:or,kui_font_size_90:tr,kui_font_size_100:er,kui_font_weight_bold:_r,kui_font_weight_medium:rr,kui_font_weight_regular:ir,kui_font_weight_semibold:nr,kui_letter_spacing_0:sr,kui_letter_spacing_minus_10:cr,kui_letter_spacing_minus_20:ar,kui_letter_spacing_minus_30:ur,kui_letter_spacing_minus_40:lr,kui_letter_spacing_minus_50:kr,kui_letter_spacing_normal:dr,kui_line_height_10:pr,kui_line_height_20:br,kui_line_height_30:fr,kui_line_height_40:gr,kui_line_height_50:hr,kui_line_height_60:mr,kui_line_height_70:xr,kui_line_height_80:wr,kui_line_height_90:vr,kui_line_height_100:yr,kui_shadow:Tr,kui_shadow_border:Cr,kui_shadow_border_danger:Ir,kui_shadow_border_danger_strong:Sr,kui_shadow_border_disabled:Ar,kui_shadow_border_primary:Er,kui_shadow_border_primary_strongest:Nr,kui_shadow_border_primary_weak:Fr,kui_shadow_focus:Br,kui_space_0:zr,kui_space_10:Lr,kui_space_20:Kr,kui_space_30:Dr,kui_space_40:Rr,kui_space_50:Pr,kui_space_60:$r,kui_space_70:Mr,kui_space_80:Or,kui_space_90:Ur,kui_space_100:Vr,kui_space_110:jr,kui_space_120:Xr,kui_space_130:qr,kui_space_140:Hr,kui_space_150:Gr,kui_space_auto:Jr};function K(o,t){let e={};return Object.keys(o||e).forEach(_=>e[t(o[_],_)]=o[_]),e}function c(o,t){return K(o,(e,_)=>{if(t&&_ in t)return t[_]??_;const r=_.replace(/[ /]+(.)/g,(i,n)=>n.toUpperCase());return r.charAt(0).toLowerCase()+r.slice(1)})}function Yr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Zr(o){return o.replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function B(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/(\d)([a-z])/gi,"$1-$2").replace(/([a-z])(\d)/gi,"$1-$2").replace(/[_\s]/g,"-").toLowerCase()}function Qr(o){return Yr(Zr(o))}function oi(o){return o.toUpperCase().replace(/-/g,"_")}function w(o){return o.toLowerCase()}function p(o,t={}){const e=o.mainComponent?.name||o.name,_=d(o,{type:"VECTOR"})?.fills[0]?.color;return C(`${Qr(e)}Icon`,Object.assign(_?{":color":typeof _=="string"?_:z(_.name,"js")}:{},t))}const ti=new Set(Object.keys(Wr).map(o=>o.substring(4).replaceAll("_","-")));function z(o,t){const e=o.toLowerCase().split(/[-/_ ]/);let _=null;for(;e.length;){const r=e.join("-");if(ti.has(r)){_=r;break}e.shift()}return _?t==="scss"?`$kui-${_.toLowerCase()}`:t==="js"?`KUI_${oi(_)}`:_:null}function v(o,t){const e={};for(const _ in o)o[_]!==void 0&&o[_]!==t[_]&&(e[_]=o[_]);return e}function a(o,t,e,_){return C(o,v(t,e),_)}function h(o,t,e){const _=e?t:null,r=e??t;return C("template",{[`#${o}`]:_??!0},r)}const D="Lorem ipsum",L="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function ei(o){const{appearance:t,showIcon:e,showTitle:_,title:r,showClose:i}=c(o.properties),n=f(o,{type:"TEXT",name:"desc",visible:!0});return a("KAlert",{appearance:w(t),showIcon:e,title:_&&r||void 0,message:n?.characters,dismissible:i,onDismiss:i?()=>{}:void 0},{appearance:"info",showIcon:!1,dismissible:!1})}function _i(o){const{appearance:t,showIconLeft:e,iconLeft:_,showIconRight:r,iconRight:i,label:n}=c(o.properties),s=e?_:r?i:void 0;return a("KBadge",{appearance:w(t),iconBefore:e&&!r},{appearance:"info",iconBefore:!0},[n,...s?[h("icon",[p(s)])]:[]])}function ri(o){const{properties:t}=o,{method:e}=c(t);return a("KBadge",{appearance:w(e)},{},e?[e]:[])}function ii(o,t){const{icon:e,showIcon:_,text:r}=c(o.properties);return{text:r,key:B(r)||`level-${t}`,icon:_?e:void 0}}function ni(o){const t=I(o,{type:"INSTANCE",name:/^Level/,visible:!0}).map((_,r)=>ii(_,r)),e=[];return t.forEach(_=>{_.icon&&(e.push(h(`icon-${_.key}`,[p(_.icon)])),delete _.icon)}),C("KBreadcrumbs",{items:t},e)}function y(o){const{appearance:t,size:e,state:_,label:r,position:i,icon:n,iconDanger:s,iconLeft:u,iconRight:k}=c(o.properties);let l=[];return o.name==="Button"?l=[r]:o.name==="Icon Button"?i==="Left"?l=[p(t==="Danger"?s:u),r]:i==="Right"&&(l=[r,p(k)]):o.name==="Icon Only"&&(l=[p(t==="Danger"?s:n)]),a("KButton",{appearance:w(t),size:w(e),disabled:_==="Disabled",onClick:()=>{}},{appearance:"primary",size:"medium",disabled:!1},l)}function si(o){const t=f(o,{type:"TEXT",name:"title",visible:!0}),e=f(o,{type:"TEXT",name:"desc",visible:!0});return a("KCard",{title:t?.characters},{},e?.characters?[e.characters]:[])}function R(o){const{label:t,showRequired:e,showTooltip:_}=c(o.properties),r={};e&&(r.required=!0);const i=d(o,{type:"INSTANCE",name:"Tooltip",visible:!0});if(_&&i){r.info="...";const{showTooltip:n}=c(i.properties),s=d(i,{type:"INSTANCE",name:"Tooltip",visible:!0});if(n&&s){const{text:u}=c(s.properties);r.info=u}}return a("KLabel",r,{required:!1},[t])}function T(o,t){const{state:e,showLabel:_,showHelpText:r}=c(o.properties);let i,n;const s=f(o,{type:"INSTANCE",name:"Label",visible:!0});_&&s&&(n=R(s));const u=f(o,{type:"INSTANCE",name:["Parts/.Help Text","Help text"],visible:!0});if(r&&u){const{text:g}=c(u.properties);i=g}const{required:k,...l}=n?n.props:{},x=v({label:n?.children[0],labelAttributes:l,required:k,help:i,error:e==="Error",disabled:e==="Disabled"},{required:!1,error:!1,disabled:!1});return t?K(x,(g,b)=>b in t?t[b]??b:b):x}function ci(o){const{type:t}=c(o.properties),{required:e,label:_,labelAttributes:r,...i}=T(o,{help:"description"});return a("KCheckbox",{"v-model":"checked",indeterminate:t==="Indeterminate",label:_,labelAttributes:v({...r,required:e},{required:!1}),...i},{indeterminate:!1})}function ai(o){const{theme:t,showFunctions:e,showCopy:_,showAltAction:r}=c(o.properties),i=[];let n=!1;const s=f(o,{type:"INSTANCE",name:"Icon Button"});if(r&&s){const{iconLeft:u,label:k}=c(s.properties),l=[];u&&(u.name==="copy"&&(n=!0),l.push(p(u))),k&&l.push(k),l.length>0&&i.push(h("secondary-actions",[a("KCodeBlockIconButton",{theme:w(t),copyTooltip:n?"Copy...":void 0,onClick:"() => {}"},{theme:"light"},l)]))}return a("KCodeBlock",{id:"...",":code":"code",theme:w(t),language:"json",searchable:e,showCopyButton:_},{theme:"light",searchable:!1,showCopyButton:!0},i)}function ui(o){const{theme:t}=c(o.properties);return a("KCodeBlock",{":code":"code",theme:w(t),singleLine:!0},{theme:"light"})}function li(o){const{showLink:t}=c(o.properties),e=f(o,{type:"TEXT",name:"link",visible:!0});return a("KCollapse",{"v-model":"isCollapsed",triggerLabel:t&&e?.characters||void 0},{},[L])}function ki(o){const{appearance:t}=c(o.properties),e={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime",Months:"UNSUPPORTED",Years:"UNSUPPORTED","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[t],_=t.startsWith("Range")||void 0;return a("KDateTimePicker",{"v-model":"currentValue",mode:e,range:_},{range:!1})}function di(o){const t=I(o,{type:"INSTANCE",name:"Dropdown Option",visible:!0}).map(e=>{const{state:_,showLeftIcon:r,leftIcon:i,label:n}=c(e.properties),s=r&&i?p(i):void 0;return v({label:n,selected:_==="Selected",disabled:_==="Disabled",danger:_==="Danger",icon:s},{selected:!1,disabled:!1,danger:!1})});return t.some(e=>e.icon)?a("KDropdown",{},{},[h("items",[...t.map(({icon:e,label:_,...r})=>{const i=[];return e&&i.push(e),_&&i.push(_),a("KDropdownItem",r,{},i)})])]):a("KDropdown",{items:t},{})}function pi(o){const{showIcon:t,icon:e,title:_,description:r,showButton:i}=c(o.properties),n=f(o,{type:"INSTANCE",name:"Button"}),{appearance:s,label:u,state:k}=n?c(n.properties):{},l=i&&n&&s==="Primary",x=l?{actionButtonText:u,actionButtonVisible:i,actionButtonDisabled:l&&k==="Disabled"}:{};let g;t&&e&&(g={analytics:"default",warning:"error",search:"search",kong:"kong"}[e.name],g&&g==="default"&&(g=void 0));const b=[];if(!g&&e&&b.push(h("icon",[p(e)])),i&&!l){const m=I(o,{type:"INSTANCE",name:["Icon Only","Icon Button","Button"],visible:!0});m&&b.push(h("action",m.map(y)))}return a("KEmptyState",{title:_,message:r,iconVariant:g,...x},{actionButtonVisible:!0,actionButtonDisabled:!1},b)}function bi(o){const{showValue:t,placeholder:e,showIconLeft:_,iconLeft:r}=c(o.properties),i=_&&r?p(r):void 0,n=d(o,{type:"FRAME",name:"input",visible:!0}),s=n?d(n,{type:"INSTANCE",name:"Button",visible:!0}):void 0,u=s?s.properties.Label:void 0,k=T(o);return a("KFileUpload",{placeholder:t==="True"?void 0:e,buttonText:u!=="Select file"?u:void 0,...k,onFileAdded:"files => {}",onFileRemoved:"files => {}"},{},[...i?[h("icon",[i])]:[]])}function fi(o){const{state:t,showValue:e,placeholder:_,showIconLeft:r,iconLeft:i,showIconRight:n,iconRight:s}=c(o.properties),u=r&&i?h("before",[p(i)]):void 0,k=n&&s?h("after",[p(s,{role:"button",tabindex:"0",onClick:!0})]):void 0,l=T(o),x=l.label==="Password",g=s?.name==="visibility"||s?.name==="visibility-off";return a("KInput",{"v-model":"value",type:x||g?"password":void 0,showPasswordMaskToggle:g,placeholder:e==="True"?void 0:_,...l,readonly:t==="Readonly"},{showPasswordMaskToggle:!1,readonly:!1},[u,k].filter(b=>b!=null))}function gi(o){const t=d(o,{type:"INSTANCE",name:"Modal Header",visible:!0}),{showIcon:e,icon:_}=t?c(t.properties):{};let r=D,i=!1;t&&(r=d(t,{type:"TEXT",name:"Modal title"})?.characters||r,i=!d(t,{type:"INSTANCE",name:"close",visible:!0}));const n=e&&_?h("title",[p(_),r]):void 0,s=d(o,{type:"INSTANCE",name:"Modal Footer"}),u={},k={};let l;if(s){const g=d(s,{type:"FRAME",name:"right"}),b=g?I(g,{type:"INSTANCE",name:"Button",visible:!0}):[];if(!b.length)l=[];else if(b.length===1){const m=y(b[0]);Object.assign(u,m.props),typeof m.children[0]=="string"?u.label=m.children[0]:l=[m],k.hide=!0}else if(b.length===2){const[m,A]=b.map(y);Object.assign(u,A.props),Object.assign(k,m.props),typeof A.children[0]=="string"&&typeof m.children[0]=="string"?(u.label=A.children[0],k.label=m.children[0]):l=[m,A]}else l=b.map(y)}const x=l?h("footer-actions",l):void 0;return a("KModal",{":visible":"modalVisible",title:n?void 0:r,actionButtonText:u.label,actionButtonAppearance:u.appearance,actionButtonDisabled:u.disabled,cancelButtonText:k.label,cancelButtonAppearance:k.appearance,cancelButtonDisabled:k.disabled,hideCancelButton:k.hide,hideCloseIcon:i},{actionButtonText:"Submit",actionButtonAppearance:"primary",actionButtonDisabled:!1,cancelButtonText:"Cancel",cancelButtonAppearance:"tertiary",cancelButtonDisabled:!1,hideCancelButton:!1,hideCloseIcon:!1},[...n?[n]:[],L,...x?[x]:[]])}function hi(o){const{showValue:t,placeholder:e}=c(o.properties),_=T(o);return a("KMultiselect",{"v-model":"value",":items":"items",placeholder:t==="True"?void 0:e,..._},{})}function mi(o){const{showPages:t}=c(o.properties),e=!!d(o,{type:"INSTANCE",name:"Parts/.Pagination Text"});return a("KPagination",{":total-count":"total",":current-page":"page",offset:!t&&!e,disablePageJump:!t&&e},{offset:!1,disablePageJump:!1})}function xi(o){const{text:t,heading:e}=c(o.properties),_=f(o,{type:"FRAME",name:"title",visible:!0}),r=f(o,{type:"INSTANCE",name:"close",visible:!0});return a("KPop",{title:_&&e||void 0,hideCloseIcon:!r},{hideCloseIcon:!1},[h("content",[t])])}function wi(o){const{required:t,label:e,labelAttributes:_,...r}=T(o,{help:"description"});return a("KRadio",{"v-model":"checked",label:e,labelAttributes:v({..._,required:t},{required:!1}),...r},{})}function vi(o){const t=d(o,{type:"INSTANCE",visible:!0}),e=f(o,{type:"INSTANCE",name:"Label"}),_=f(o,{type:"INSTANCE",name:"Help Text"});return a("KRadio",{"v-model":"checked",label:e?.properties.Label,description:_?.properties.Text,cardRadioVisible:!1},{},t?[p(t)]:[])}function yi(o){const{size:t}=c(o.properties),e=I(o,{type:"INSTANCE",name:"Control Option"}).map(r=>{const{state:i}=c(r.properties),n=i==="Disabled",s=d(r,{type:"TEXT",name:"option"})?.characters||"";return{label:s,value:B(s),disabled:n}}),_=e.every(r=>r.disabled)||void 0;return _&&e.forEach(r=>{r.disabled=void 0}),a("KSegmentedControl",{":v-model":"selected",options:e,size:w(t),disabled:_},{size:"default",disabled:!1})}function Ti(o){const{showValue:t,placeholder:e,showIconLeft:_,iconLeft:r}=c(o.properties),i=_&&r?p(r):void 0,n=T(o);return a("KSelect",{"v-model":"value",":items":"items",placeholder:t==="True"?void 0:e,...n},{},i?[h("before",[i])]:[])}const P={Generic:"",Card:"card",Form:"form",Table:"table"},Ci="Skeleton Loader/(.*)";function N(o){const[,t]=o.name.match(Ci)||[],e=t in P?P[t]:void 0;return a("KSkeleton",{type:e},{type:""})}function $(o){const t=S(o,{type:"INSTANCE",name:"Tab",visible:!0}),e=[],_=[];return t.forEach(r=>{const{state:i,showIcon:n,icon:s}=c(r.properties),u=d(r,{type:"TEXT",name:"label"})?.characters||"",k=B(u);n&&s&&e.push(h(`${k}-anchor`,[p(s),u])),_.push(v({title:u||void 0,hash:`#${k}`,disabled:i==="Disabled"},{disabled:!1}))}),a("KTabs",{"v-model":"tabs",tabs:_},{},e)}function Ii(o){const{showTabs:t}=c(o.properties),e=d(o,{type:"FRAME",name:"header"}),_=e&&d(e,{type:"FRAME",name:"title",visible:!0}),r=(_&&f(_,{type:"TEXT",visible:!0}))?.characters,i=t&&f(o,{type:"INSTANCE",name:"Tabs",visible:!0})||null;return C("KSlideout",{":visible":"slideoutVisible",title:r},[...i?[$(i)]:[],L])}const Si={Inactive:"default",Active:"active",Complete:"completed",Loading:"pending",Error:"error"};function Ai(o){const t=S(o,{type:"INSTANCE",name:"Parts/.Step Icon"}),e=S(o,{type:"TEXT",name:/^Step/,visible:!0}).map((_,r)=>{const i=t[r],{appearance:n}=c(i.properties),s=Si[n];return v({label:_.characters,state:s},{state:"default"})});return a("KStepper",{steps:e},{})}function Ei(o){const{size:t}=c(o.properties);return a("KInputSwitch",{"v-model":"switchValue",label:D,labelBefore:!0,size:{Medium:"large",Small:"small"}[t]},{size:"small"})}function Ni(o){const{showValue:t,placeholder:e}=c(o.properties),_=T(o),r=f(o,{type:"INSTANCE",name:"Parts/.Resize",visible:!0});return a("KTextArea",{"v-model":"value",placeholder:t==="True"?void 0:e,resizable:!!r,..._},{resizable:!1})}function Fi(o){const{showTitle:t,appearance:e}=c(o.properties),_={Info:"info",Success:"success",Warning:"warning",Error:"danger",System:"system"},r=t&&o.properties[`${e} title`]||void 0,i=o.properties[`${e} desc`]||void 0;return a("KToaster",{appearance:_[e],title:r,message:i},{appearance:"info"})}const Bi="#6c7489";function zi(o){const{text:t}=c(o.properties);return a("KTooltip",{text:t},{})}function Li(o){const{showTooltip:t}=c(o.properties),e=t&&d(o,{type:"INSTANCE",name:"Tooltip",visible:!0}),_=(e&&c(e.properties))?.text||"...";return a("KTooltip",{text:_,":tooltip-id":"tooltipId"},{},[p({name:"info",type:"INSTANCE",properties:{},children:[],visible:!0},{":aria-describedby":"tooltipId",":color":`var(--kui-color-text-neutral, ${Bi})`,tabindex:"0"})])}function Ki(o){const t=S(o,{type:"INSTANCE",name:"Parts/.List Item",visible:!0}),e=t.map(n=>d(n,{type:"INSTANCE",name:"Icon",visible:!0})),_=t.map(n=>c(n.properties).icon),r=[...new Map(_.map(n=>[n.name,n])).values()],i=h("item-icon","{ item }",r.map((n,s)=>{const u=r.length===1?e.length===t.length?{}:{"v-if":"..."}:s===0?{"v-if":"..."}:s===r.length-1?{"v-else":"..."}:{"v-else-if":"..."};return p(n,u)}));return a("KTreeList",{":items":"items",hideIcons:e.length===0},{hideIcons:!1},r.length===1&&r[0].name==="document"?[]:[i])}const Di={Alert:ei,Badge:_i,MethodBadge:ri,GlobalBreadcrumb:ni,Button:y,IconButton:y,IconOnly:y,Card:si,Checkbox:ci,CodeBlock:ai,CodeLine:ui,Collapse:li,DatePicker:ki,Dropdown:di,EmptyState:pi,FileUpload:bi,Input:fi,Label:R,Modal:gi,Multiselect:hi,Pagination:mi,Popover:xi,Radio:wi,RadioCard:vi,SegmentedControl:yi,Select:Ti,"SkeletonLoader/Generic":N,"SkeletonLoader/Card":N,"SkeletonLoader/Form":N,"SkeletonLoader/Table":N,Slideout:Ii,Stepper:Ai,Tabs:$,Switch:Ei,Textarea:Ni,Toast:Fi,Tooltip:zi,InfoTooltip:Li,TreeList:Ki},Ri=({component:o})=>{try{if(o.children.length===1&&o.children[0].type==="VECTOR")return p(o);const t=Di[o.name.replaceAll(" ","")];return t?t(o):""}catch(t){return console.error(t),""}},Pi={name:"Kong UI",code:{component:{title:"Component",lang:"vue",transformComponent:Ri},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:t}){return z(o,"scss")||(t?`var(--${o}, ${t})`:`var(--${o})`)}},js:{transformVariable({name:o,value:t}){const e=z(o,"js");return e?`\0${e}\0`:t?`var(--${o}, ${t})`:`var(--${o})`}}}};export{Pi as plugin};
