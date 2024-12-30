function Bi(o){return o}function n(o,t,_){return{name:o,props:t||{},children:_||[]}}function E(o,t){return typeof t=="function"?t(o):!(t.type&&o.type!==t.type||t.name&&o.name!==t.name)}function g(o,t){return o.children.find(_=>E(_,t))??null}function A(o,t){return o.children.filter(_=>E(_,t))}function f(o,t){for(const _ of o.children){if(E(_,t))return _;if("children"in _){const r=f(_,t);if(r)return r}}return null}function z(o,t){const _=[];for(const r of o.children)E(r,t)&&_.push(r),"children"in r&&_.push(...z(r,t));return _}function $(o){const{Appearance:t,"Show icon":_,"Show title":r,Title:e,"Show close":i}=o.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[t],a=_?!0:void 0,s=r?e:void 0,u=i?!0:void 0,l=i?!0:void 0,k=f(o,{type:"TEXT",name:"desc"});return n("KAlert",{appearance:c,showIcon:a,title:s,message:k?.characters,dismissible:u,onDismiss:l})}const O="#ffffff",U="#d60027",j="#ad000e",X="#850000",H="#5c0000",V="#ff3954",G="#ffabab",J="#ffe5e5",W="#6f28ff",q="#f1f0ff",Y="#e0e4ea",Z="#000933",Q="#6c7489",oo="#52596e",to="#3a3f51",_o="#232633",eo="#afb7c5",ro="#e0e4ea",io="#f9fafb",no="rgba(0, 9, 51, 0.6)",co="#0044f4",so="#0030cc",ao="#002099",uo="#001466",lo="#5f9aff",ko="#bee2ff",po="#eefaff",go="#00d6a4",fo="#ecfffb",bo="transparent",mo="#ffc400",ho="#fffce0",xo="#e0e4ea",vo="#d60027",wo="#ad000e",yo="#850000",So="#5c0000",Co="#ff3954",To="#ffabab",Io="#ffe5e5",Fo="#6f28ff",Ao="#e0e4ea",No="rgba(255, 255, 255, 0.2)",Eo="#afb7c5",Bo="#e0e4ea",Do="#0044f4",zo="#0030cc",Lo="#002099",Po="#001466",Ko="#5f9aff",Mo="#bee2ff",Ro="#eefaff",$o="transparent",Oo="#000933",Uo="#d60027",jo="#ad000e",Xo="#00abd2",Ho="#d60067",Vo="#6f28ff",Go="#5e00f5",Jo="#afb7c5",Wo="#ffffff",qo="#6c7489",Yo="#52596e",Zo="#3a3f51",Qo="#232633",ot="#afb7c5",tt="#e0e4ea",_t="#0044f4",et="#0030cc",rt="#002099",it="#001466",nt="#5f9aff",ct="#007d60",st="#005944",at="#995c00",ut="#804400",lt="0.2s",kt="0px",dt="2px",pt="4px",gt="6px",ft="8px",bt="10px",mt="50%",ht="100px",xt="0px",vt="1px",wt="2px",yt="4px",St="640px",Ct="768px",Tt="1024px",It="1280px",Ft="1536px",At="#f50045",Nt="#828a9e",Et="#306fff",Bt="#00a17b",Dt="#ffc400",zt="10px",Lt="12px",Pt="16px",Kt="20px",Mt="24px",Rt="32px",$t="40px",Ot="48px",Ut="#f1f0ff",jt="#ffe5e5",Xt="#eefaff",Ht="#52596e",Vt="#e0e4ea",Gt="#ecfcff",Jt="#ecfffb",Wt="#fffce0",qt="#fff0f7",Yt="#6f28ff",Zt="#5e00f5",Qt="#d60027",o_="#ad000e",t_="#0044f4",__="#0030cc",e_="#e0e4ea",r_="#afb7c5",i_="#52596e",n_="#3a3f51",c_="#00819d",s_="#00647a",a_="#007d60",u_="#005944",l_="#995c00",k_="#804400",d_="#d60067",p_="#ad0053",g_="#000933",f_="rgba(255, 255, 255, 0.12)",b_="rgba(255, 255, 255, 0.12)",m_="#00fabe",h_="rgba(255, 255, 255, 0.24)",x_="#bee2ff",v_="#ffffff",w_="#eefaff",y_="#00fabe",S_="0 0 0 1px rgba(255, 255, 255, 0.12) inset",C_="4px 0 0 0 #00fabe inset",T_="0 0 0 1px rgba(255, 255, 255, 0.60) inset",I_="#bee2ff",F_="#8fc1ff",A_="#5f9aff",N_="#306fff",E_="#b5ffee",B_="#00fabe",D_="#00d6a4",z_="#00a17b",L_="#007d60",P_="#005944",K_="#b5ffee",M_="#00fabe",R_="#b5ffee",$_="#00a17b",O_="#fff296",U_="#ffe04b",j_="#ffc400",X_="#b37600",H_="#995c00",V_="#804400",G_="#fff296",J_="#ffe04b",W_="#FFC2B3",q_="#FF9877",Y_="#FF723C",Z_="#F75008",Q_="#D13500",oe="#A31F00",te="#FFC2B3",_e="#FF9877",ee="#FF723C",re="#F75008",ie="#D13500",ne="#A31F00",ce="#FFC2B3",se="#FF9877",ae="#FF723C",ue="#F75008",le="#D13500",ke="#A31F00",de="#FFC2B3",pe="#FF9877",ge="#FF723C",fe="#F75008",be="#D13500",me="#A31F00",he="#FFC2B3",xe="#FF9877",ve="#FF723C",we="#F75008",ye="#D13500",Se="#ffabab",Ce="#ff7272",Te="#ff3954",Ie="#f50045",Fe="#d60027",Ae="#ad000e",Ne="#ffabab",Ee="#ff7272",Be="#ff3954",De="#f50045",ze="#d60027",Le="#eefaff",Pe="#ecfffb",Ke="#fffce0",Me="#FFF1EF",Re="#ffe5e5",$e="#5f9aff",Oe="#00d6a4",Ue="#ffc400",je="#FF723C",Xe="#ff3954",He="'JetBrains Mono', Consolas, monospace",Ve="'Inter', Roboto, Helvetica, sans-serif",Ge="'Inter', Roboto, Helvetica, sans-serif",Je="10px",We="12px",qe="14px",Ye="16px",Ze="18px",Qe="20px",or="24px",tr="32px",_r="40px",er="48px",rr="700",ir="500",nr="400",cr="600",sr="normal",ar="-0.12px",ur="-0.24px",lr="-0.32px",kr="-0.4px",dr="-0.48px",pr="normal",gr="12px",fr="16px",br="20px",mr="24px",hr="28px",xr="32px",vr="36px",wr="40px",yr="48px",Sr="56px",Cr="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",Tr="0px 0px 0px 1px #e0e4ea inset",Ir="0px 0px 0px 1px #d60027 inset",Fr="0px 0px 0px 1px #ad000e inset",Ar="0px 0px 0px 1px #e0e4ea inset",Nr="0px 0px 0px 1px #0044f4 inset",Er="0px 0px 0px 1px #001466 inset",Br="0px 0px 0px 1px #5f9aff inset",Dr="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",zr="0px",Lr="2px",Pr="4px",Kr="6px",Mr="8px",Rr="12px",$r="16px",Or="20px",Ur="24px",jr="32px",Xr="40px",Hr="48px",Vr="56px",Gr="64px",Jr="80px",Wr="96px",qr="auto",Yr={kui_color_background:O,kui_color_background_danger:U,kui_color_background_danger_strong:j,kui_color_background_danger_stronger:X,kui_color_background_danger_strongest:H,kui_color_background_danger_weak:V,kui_color_background_danger_weaker:G,kui_color_background_danger_weakest:J,kui_color_background_decorative_purple:W,kui_color_background_decorative_purple_weakest:q,kui_color_background_disabled:Y,kui_color_background_inverse:Z,kui_color_background_neutral:Q,kui_color_background_neutral_strong:oo,kui_color_background_neutral_stronger:to,kui_color_background_neutral_strongest:_o,kui_color_background_neutral_weak:eo,kui_color_background_neutral_weaker:ro,kui_color_background_neutral_weakest:io,kui_color_background_overlay:no,kui_color_background_primary:co,kui_color_background_primary_strong:so,kui_color_background_primary_stronger:ao,kui_color_background_primary_strongest:uo,kui_color_background_primary_weak:lo,kui_color_background_primary_weaker:ko,kui_color_background_primary_weakest:po,kui_color_background_success_weak:go,kui_color_background_success_weakest:fo,kui_color_background_transparent:bo,kui_color_background_warning_weak:mo,kui_color_background_warning_weakest:ho,kui_color_border:xo,kui_color_border_danger:vo,kui_color_border_danger_strong:wo,kui_color_border_danger_stronger:yo,kui_color_border_danger_strongest:So,kui_color_border_danger_weak:Co,kui_color_border_danger_weaker:To,kui_color_border_danger_weakest:Io,kui_color_border_decorative_purple:Fo,kui_color_border_disabled:Ao,kui_color_border_inverse:No,kui_color_border_neutral_weak:Eo,kui_color_border_neutral_weaker:Bo,kui_color_border_primary:Do,kui_color_border_primary_strong:zo,kui_color_border_primary_stronger:Lo,kui_color_border_primary_strongest:Po,kui_color_border_primary_weak:Ko,kui_color_border_primary_weaker:Mo,kui_color_border_primary_weakest:Ro,kui_color_border_transparent:$o,kui_color_text:Oo,kui_color_text_danger:Uo,kui_color_text_danger_strong:jo,kui_color_text_decorative_aqua:Xo,kui_color_text_decorative_pink:Ho,kui_color_text_decorative_purple:Vo,kui_color_text_decorative_purple_strong:Go,kui_color_text_disabled:Jo,kui_color_text_inverse:Wo,kui_color_text_neutral:qo,kui_color_text_neutral_strong:Yo,kui_color_text_neutral_stronger:Zo,kui_color_text_neutral_strongest:Qo,kui_color_text_neutral_weak:ot,kui_color_text_neutral_weaker:tt,kui_color_text_primary:_t,kui_color_text_primary_strong:et,kui_color_text_primary_stronger:rt,kui_color_text_primary_strongest:it,kui_color_text_primary_weak:nt,kui_color_text_success:ct,kui_color_text_success_strong:st,kui_color_text_warning:at,kui_color_text_warning_strong:ut,kui_animation_duration_20:lt,kui_border_radius_0:kt,kui_border_radius_10:dt,kui_border_radius_20:pt,kui_border_radius_30:gt,kui_border_radius_40:ft,kui_border_radius_50:bt,kui_border_radius_circle:mt,kui_border_radius_round:ht,kui_border_width_0:xt,kui_border_width_10:vt,kui_border_width_20:wt,kui_border_width_30:yt,kui_breakpoint_mobile:St,kui_breakpoint_phablet:Ct,kui_breakpoint_tablet:Tt,kui_breakpoint_laptop:It,kui_breakpoint_desktop:Ft,kui_icon_color_danger:At,kui_icon_color_neutral:Nt,kui_icon_color_primary:Et,kui_icon_color_success:Bt,kui_icon_color_warning:Dt,kui_icon_size_10:zt,kui_icon_size_20:Lt,kui_icon_size_30:Pt,kui_icon_size_40:Kt,kui_icon_size_50:Mt,kui_icon_size_60:Rt,kui_icon_size_70:$t,kui_icon_size_80:Ot,kui_method_color_background_connect:Ut,kui_method_color_background_delete:jt,kui_method_color_background_get:Xt,kui_method_color_background_head:Ht,kui_method_color_background_options:Vt,kui_method_color_background_patch:Gt,kui_method_color_background_post:Jt,kui_method_color_background_put:Wt,kui_method_color_background_trace:qt,kui_method_color_text_connect:Yt,kui_method_color_text_connect_strong:Zt,kui_method_color_text_delete:Qt,kui_method_color_text_delete_strong:o_,kui_method_color_text_get:t_,kui_method_color_text_get_strong:__,kui_method_color_text_head:e_,kui_method_color_text_head_strong:r_,kui_method_color_text_options:i_,kui_method_color_text_options_strong:n_,kui_method_color_text_patch:c_,kui_method_color_text_patch_strong:s_,kui_method_color_text_post:a_,kui_method_color_text_post_strong:u_,kui_method_color_text_put:l_,kui_method_color_text_put_strong:k_,kui_method_color_text_trace:d_,kui_method_color_text_trace_strong:p_,kui_navigation_color_background:g_,kui_navigation_color_background_selected:f_,kui_navigation_color_border:b_,kui_navigation_color_border_child:m_,kui_navigation_color_border_divider:h_,kui_navigation_color_text:x_,kui_navigation_color_text_focus:v_,kui_navigation_color_text_hover:w_,kui_navigation_color_text_selected:y_,kui_navigation_shadow_border:S_,kui_navigation_shadow_border_child:C_,kui_navigation_shadow_focus:T_,kui_status_color_100:I_,kui_status_color_101:F_,kui_status_color_102:A_,kui_status_color_103:N_,kui_status_color_200:E_,kui_status_color_201:B_,kui_status_color_202:D_,kui_status_color_203:z_,kui_status_color_204:L_,kui_status_color_205:P_,kui_status_color_206:K_,kui_status_color_207:M_,kui_status_color_208:R_,kui_status_color_226:$_,kui_status_color_300:O_,kui_status_color_301:U_,kui_status_color_302:j_,kui_status_color_303:X_,kui_status_color_304:H_,kui_status_color_305:V_,kui_status_color_307:G_,kui_status_color_308:J_,kui_status_color_400:W_,kui_status_color_401:q_,kui_status_color_402:Y_,kui_status_color_403:Z_,kui_status_color_404:Q_,kui_status_color_405:oe,kui_status_color_406:te,kui_status_color_407:_e,kui_status_color_408:ee,kui_status_color_409:re,kui_status_color_410:ie,kui_status_color_411:ne,kui_status_color_412:ce,kui_status_color_413:se,kui_status_color_414:ae,kui_status_color_415:ue,kui_status_color_416:le,kui_status_color_417:ke,kui_status_color_418:de,kui_status_color_421:pe,kui_status_color_422:ge,kui_status_color_423:fe,kui_status_color_424:be,kui_status_color_425:me,kui_status_color_426:he,kui_status_color_428:xe,kui_status_color_429:ve,kui_status_color_431:we,kui_status_color_451:ye,kui_status_color_500:Se,kui_status_color_501:Ce,kui_status_color_502:Te,kui_status_color_503:Ie,kui_status_color_504:Fe,kui_status_color_505:Ae,kui_status_color_506:Ne,kui_status_color_507:Ee,kui_status_color_508:Be,kui_status_color_510:De,kui_status_color_511:ze,kui_status_color_1na:Le,kui_status_color_2na:Pe,kui_status_color_3na:Ke,kui_status_color_4na:Me,kui_status_color_5na:Re,kui_status_color_100s:$e,kui_status_color_200s:Oe,kui_status_color_300s:Ue,kui_status_color_400s:je,kui_status_color_500s:Xe,kui_font_family_code:He,kui_font_family_heading:Ve,kui_font_family_text:Ge,kui_font_size_10:Je,kui_font_size_20:We,kui_font_size_30:qe,kui_font_size_40:Ye,kui_font_size_50:Ze,kui_font_size_60:Qe,kui_font_size_70:or,kui_font_size_80:tr,kui_font_size_90:_r,kui_font_size_100:er,kui_font_weight_bold:rr,kui_font_weight_medium:ir,kui_font_weight_regular:nr,kui_font_weight_semibold:cr,kui_letter_spacing_0:sr,kui_letter_spacing_minus_10:ar,kui_letter_spacing_minus_20:ur,kui_letter_spacing_minus_30:lr,kui_letter_spacing_minus_40:kr,kui_letter_spacing_minus_50:dr,kui_letter_spacing_normal:pr,kui_line_height_10:gr,kui_line_height_20:fr,kui_line_height_30:br,kui_line_height_40:mr,kui_line_height_50:hr,kui_line_height_60:xr,kui_line_height_70:vr,kui_line_height_80:wr,kui_line_height_90:yr,kui_line_height_100:Sr,kui_shadow:Cr,kui_shadow_border:Tr,kui_shadow_border_danger:Ir,kui_shadow_border_danger_strong:Fr,kui_shadow_border_disabled:Ar,kui_shadow_border_primary:Nr,kui_shadow_border_primary_strongest:Er,kui_shadow_border_primary_weak:Br,kui_shadow_focus:Dr,kui_space_0:zr,kui_space_10:Lr,kui_space_20:Pr,kui_space_30:Kr,kui_space_40:Mr,kui_space_50:Rr,kui_space_60:$r,kui_space_70:Or,kui_space_80:Ur,kui_space_90:jr,kui_space_100:Xr,kui_space_110:Hr,kui_space_120:Vr,kui_space_130:Gr,kui_space_140:Jr,kui_space_150:Wr,kui_space_auto:qr};function Zr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Qr(o){return o.replace(/-([a-z])/g,(t,_)=>_.toUpperCase())}function L(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/g,"-").toLowerCase()}function oi(o){return Zr(Qr(o))}function ti(o){return o.toUpperCase().replace(/-/g,"_")}function b(o,t={}){return n(`${oi(o.name)}Icon`,t)}const _i=new Set(Object.keys(Yr).map(o=>o.substring(4).replaceAll("_","-")));function P(o){const t=o.split("-");for(;t.length;){const _=t.join("-");if(_i.has(_))return _;t.shift()}return null}function ei(o,t){const _={},r=typeof t=="function"?t:e=>t[e]??e;for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)){const i=r(e);_[i]=o[e]}return _}function y(o){return JSON.parse(JSON.stringify(o))}const ri="Lorem ipsum",K="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function ii(o){const{Appearance:t,"Show icon left":_,"Icon left":r,"Show icon right":e,"Icon right":i,Label:c}=o.properties,a={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[t],s=e&&!_?!1:void 0,u=_?r:e?i:void 0;return n("Badge",{appearance:a,iconBefore:s},[c,...u?[n("template",{"#icon":!0},[b(u)])]:[]])}function ni(o){const{Method:t}=o.properties,_={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[t];return n("KBadge",{appearance:_},t?[t]:[])}function ci(o){const t=A(o,e=>e.type==="INSTANCE"&&e.name.startsWith("Level ")).map((e,i)=>{const{Icon:c,"Show icon":a,Text:s}=e.properties;return{item:{text:s||void 0,key:`level-${i}`},icon:a?c:void 0}}),_=t.map(({item:e})=>y(e)),r=t.map(({icon:e},i)=>{if(e)return n("template",{[`#icon-level-${i}`]:!0},[b(e)])}).filter(e=>e!=null);return n("KBreadcrumbs",{items:_},r)}function v(o){const{Appearance:t,Size:_,State:r,Label:e,Position:i,Icon:c,"Icon danger":a,"Icon left":s,"Icon right":u}=o.properties,l={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[t],k={Small:"small",Medium:void 0,Large:"large"}[_],d=r==="Disabled"||void 0;let p=[];return o.name==="Button"?p=[e]:o.name==="Icon Button"?i==="Left"?p=[b(t==="Danger"?a:s),e]:i==="Right"&&(p=[e,b(u)]):o.name==="Icon Only"&&(p=[b(t==="Danger"?a:c)]),n("KButton",{appearance:l,size:k,disabled:d,onClick:!0},p)}function si(o){const t=f(o,{type:"TEXT",name:"title"}),_=f(o,{type:"TEXT",name:"desc"});return n("KCard",{title:t?.characters},_?.characters?[_.characters]:[])}function M(o){const{Label:t,"Show required":_,"Show tooltip":r}=o.properties,e={};_&&(e.required=!0);const i=g(o,{type:"INSTANCE",name:"Tooltip"});if(r&&i){e.info="...";const{"Show tooltip":c}=i.properties,a=g(i,{type:"INSTANCE",name:"Tooltip"});if(c&&a){const{Text:s}=a.properties;s&&(e.info=s)}}return n("KLabel",e,[t])}function S(o,t){const{State:_,"Show label":r,"Show help text":e}=o.properties;let i,c;const a=f(o,{type:"INSTANCE",name:"Label"});r&&a&&(c=M(a));const s=f(o,d=>d.type==="INSTANCE"&&["Parts/.Help Text","Help text"].includes(d.name));if(e&&s){const{Text:d}=s.properties;d&&(i=d)}const{required:u,...l}=c?c.props:{},k={label:c?c.children[0]:void 0,labelAttributes:Object.keys(l).length>0?l:void 0,required:u,help:i,error:_==="Error"?!0:void 0,disabled:_==="Disabled"?!0:void 0};return t?ei(k,t):k}function ai(o){const{Type:t}=o.properties,_=t==="Indeterminate"?!0:void 0,{required:r,label:e,labelAttributes:i,...c}=S(o,{help:"description"});return n("KCheckbox",{"v-model":"checked",indeterminate:_,label:e,labelAttributes:y({...i,required:r}),...c})}function ui(o){const{Theme:t,"Show functions":_,"Show copy":r,"Show alt action":e}=o.properties,i={Light:void 0,Dark:"dark"}[t],c=_?!0:void 0,a=r===!1?!1:void 0;let s,u=!1;const l=f(o,{type:"INSTANCE",name:"Icon Button"});if(e&&l){const{"Icon left":k,Label:d}=l.properties,p=[];k&&(k.name==="copy"&&(u=!0),p.push(b(k))),d&&p.push(d),p.length>0&&(s=n("template",{"#secondary-actions":!0},[n("CodeBlockIconButton",{theme:i,copyTooltip:u?"Copy...":void 0,onClick:"() => {}"},p)]))}return n("KCodeBlock",{id:"...",":code":"code",theme:i,language:"json",searchable:c,showCopyButton:a},s?[s]:[])}function li(o){const{Theme:t}=o.properties,_={Light:void 0,Dark:"dark"}[t];return n("CodeBlock",{":code":"code",theme:_,singleLine:!0})}function ki(o){const{"Show link":t}=o.properties,_=f(o,{type:"TEXT",name:"link"}),r=t&&_?.characters||void 0;return n("KCollapse",{"v-model":"isCollapsed",triggerLabel:r},[K])}function di(o){const{Appearance:t}=o.properties,_={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime",Months:"UNSUPPORTED",Years:"UNSUPPORTED","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[t],r=t.startsWith("Range")||void 0;return n("KDateTimePicker",{"v-model":"currentValue",mode:_,range:r})}function pi(o){const t=A(o,{type:"INSTANCE",name:"Dropdown Option"}).map(_=>{const{State:r,"Show left icon":e,"Left icon":i,Label:c}=_.properties,a=r==="Selected"?!0:void 0,s=r==="Disabled"?!0:void 0,u=r==="Danger"?!0:void 0,l=e&&i?b(i):void 0;return y({label:c,selected:a,disabled:s,danger:u,icon:l})});return t.some(_=>_.icon)?n("KDropdown",{},[n("template",{"#items":!0},[...t.map(({icon:_,label:r,...e})=>n("KDropdownItem",e,_?[_,r]:[r]))])]):n("KDropdown",{items:t})}function gi(o){const{"Show icon":t,Icon:_,Title:r,Description:e,"Show button":i}=o.properties,c=f(o,{type:"INSTANCE",name:"Button"}),a=r||void 0,s=e||void 0,{Appearance:u,Label:l,State:k}=c?c.properties:{},d=i&&c&&u==="Primary",p=d?l:void 0,C=i?void 0:!1,D=d&&k==="Disabled"?!0:void 0;let x,T;t&&_&&(x={analytics:"default",warning:"error",search:"search",kong:"kong"}[_.name],x?x==="default"&&(x=void 0):T=_);const I=[];if(T&&I.push(n("template",{"#icon":!0},[b(T)])),i&&!d){const F=A(o,m=>m.type==="INSTANCE"&&["Icon Only","Icon Button","Button"].includes(m.name));F&&I.push(n("template",{"#action":!0},F.map(v)))}return n("KEmptyState",{title:a,message:s,iconVariant:x,actionButtonText:p,actionButtonVisible:C,actionButtonDisabled:D},I)}function fi(o){const{"Show value":t,Placeholder:_,"Show icon left":r,"Icon left":e}=o.properties,i=t==="True"?void 0:_,c=r&&e?b(e):void 0,a=g(o,{type:"FRAME",name:"input"}),s=a?g(a,{type:"INSTANCE",name:"Button"}):void 0,u=s?s.properties.Label:void 0,l=S(o);return n("KFileUpload",{placeholder:i,buttonText:u!=="Select file"?u:void 0,...l,onFileAdded:"files => {}",onFileRemoved:"files => {}"},c?[n("template",{"#icon":!0},[c])]:void 0)}function bi(o){const{State:t,"Show value":_,Placeholder:r,"Show icon left":e,"Icon left":i,"Show icon right":c,"Icon right":a}=o.properties,s=_==="True"?void 0:r||void 0,u=e&&i?n("template",{"#before":!0},[b(i)]):void 0,l=c&&a?n("template",{"#after":!0},[b(a,{role:"button",tabindex:"0",onClick:!0})]):void 0,k=S(o),d=k.label==="Password",p=a?.name==="visibility"||a?.name==="visibility-off";return n("KInput",{"v-model":"value",type:d||p?"password":void 0,showPasswordMaskToggle:p||void 0,placeholder:s,...k,readonly:t==="Readonly"||void 0},[u,l].filter(C=>C!=null))}function mi(o){const t=g(o,{type:"INSTANCE",name:"Modal Header"}),{"Show icon":_,Icon:r}=t?t.properties:{};let e=ri,i=!1;t&&(e=g(t,{type:"TEXT",name:"Modal title"})?.characters||e,i=!g(t,{type:"INSTANCE",name:"close"}));const c=_&&r?n("template",{"#title":!0},[b(r),e]):void 0,a=g(o,{type:"INSTANCE",name:"Modal Footer"}),s={},u={};let l;if(a){const F=g(a,{type:"FRAME",name:"right"}),m=F?A(F,{type:"INSTANCE",name:"Button"}):[];if(!m.length)l=[];else if(m.length===1){const h=v(m[0]);Object.assign(s,h.props),typeof h.children[0]=="string"?s.label=h.children[0]:l=[h],u.hide=!0}else if(m.length===2){const[h,N]=m.map(v);Object.assign(s,N.props),Object.assign(u,h.props),typeof N.children[0]=="string"&&typeof h.children[0]=="string"?(s.label=N.children[0],u.label=h.children[0]):l=[h,N]}else l=m.map(v)}const k=l?n("template",{"#footer-actions":!0},l):void 0,d=w(s,"label","Submit"),p=w(s,"appearance","primary"),C=w(s,"disabled",!1),D=w(u,"label","Cancel"),x=w(u,"appearance","tertiary"),T=w(u,"disabled",!1),I=w(u,"hide",!1);return n("KModal",{":visible":"modalVisible",title:c?void 0:e,actionButtonText:d,actionButtonAppearance:p,actionButtonDisabled:C,cancelButtonText:D,cancelButtonAppearance:x,cancelButtonDisabled:T,hideCancelButton:I,hideCloseIcon:i||void 0},[...c?[c]:[],K,...k?[k]:[]])}function w(o,t,_){const r=o[t];return r===_?void 0:r||void 0}function hi(o){const{"Show value":t,Placeholder:_}=o.properties,r=t==="True"?void 0:_,e=S(o);return n("KMultiselect",{"v-model":"value",":items":"items",placeholder:r,...e},[])}function xi(o){const{"Show pages":t}=o.properties,_=!!g(o,{type:"INSTANCE",name:"Parts/.Pagination Text"});return n("KPagination",{":total-count":"total",":current-page":"page",offset:!t&&!_||void 0,disablePageJump:!t&&_||void 0})}function vi(o){const{Text:t,Heading:_}=o.properties,r=f(o,{type:"FRAME",name:"title"}),e=f(o,{type:"INSTANCE",name:"close"});return n("KPopover",{title:r&&_||void 0,hideCloseIcon:!e||void 0},[n("template",{"#content":!0},[t])])}function wi(o){const{required:t,label:_,labelAttributes:r,...e}=S(o,{help:"description"});return n("KRadio",{"v-model":"checked",label:_,labelAttributes:y({...r,required:t}),...e})}function yi(o){const t=g(o,{type:"INSTANCE"}),_=f(o,{type:"INSTANCE",name:"Label"}),r=f(o,{type:"INSTANCE",name:"Help Text"});return n("KRadio",{"v-model":"checked",label:_?.properties.Label||void 0,description:r?.properties.Text||void 0,cardRadioVisible:!1},t?[b(t)]:[])}function Si(o){const{Size:t}=o.properties,_={Default:void 0,Large:"large"}[t],r=A(o,{type:"INSTANCE",name:"Control Option"}).map(i=>{const{State:c}=i.properties,a=c==="Disabled"?!0:void 0,s=g(i,{type:"TEXT",name:"option"})?.characters||"";return y({label:s,value:L(s),disabled:a})}),e=r.every(i=>i.disabled)||void 0;return e&&r.forEach(i=>{i.disabled=void 0}),n("KSegmentedControl",{":v-model":"selected",options:r,size:_,disabled:e})}function Ci(o){const{"Show value":t,Placeholder:_,"Show icon left":r,"Icon left":e}=o.properties,i=t==="True"?void 0:_,c=r&&e?b(e):void 0,a=S(o);return n("KSelect",{"v-model":"value",":items":"items",placeholder:i,...a},c?[n("template",{"#before":!0},[c])]:void 0)}const Ti={Generic:"generic",Card:"card",Form:"form",Table:"table"},Ii="Skeleton Loader/(.*)";function B(o){const[,t]=o.name.match(Ii)||[],_=t&&Ti[t]||"generic";return n("KSkeleton",{type:_!=="generic"?_:void 0})}function R(o){const t=z(o,{type:"INSTANCE",name:"Tab"}),_=[],r=[];return t.forEach(e=>{const{State:i,"Show icon":c,Icon:a}=e.properties,s=i==="Disabled"?!0:void 0,u=g(e,{type:"TEXT",name:"label"})?.characters||"",l=L(u);c&&a&&_.push(n("template",{[`#${l}-anchor`]:!0},[b(a),u])),r.push(y({title:u||void 0,hash:`#${l}`,disabled:s}))}),n("KTabs",{"v-model":"tabs",":tabs":"tabs"},_)}function Fi(o){const{"Show tabs":t}=o.properties,_=g(o,{type:"FRAME",name:"header"}),r=_&&g(_,{type:"FRAME",name:"title"}),e=(r&&f(r,{type:"TEXT"}))?.characters,i=t&&f(o,{type:"INSTANCE",name:"Tabs"})||null;return n("KSlideout",{":visible":"slideoutVisible",title:e},i?[R(i)]:[])}const Ai={Alert:$,Badge:ii,MethodBadge:ni,GlobalBreadcrumb:ci,Button:v,IconButton:v,IconOnly:v,Card:si,Checkbox:ai,CodeBlock:ui,CodeLine:li,Collapse:ki,DatePicker:di,Dropdown:pi,EmptyState:gi,FileUpload:fi,Input:bi,Label:M,Modal:mi,Multiselect:hi,Pagination:xi,Popover:vi,Radio:wi,RadioCard:yi,SegmentedControl:Si,Select:Ci,"SkeletonLoader/Generic":B,"SkeletonLoader/Card":B,"SkeletonLoader/Form":B,"SkeletonLoader/Table":B,Slideout:Fi,Tabs:R},Ni=({component:o})=>{const t=Ai[o.name.replaceAll(" ","")];return t?t(o):""},Ei={name:"Kong UI Advanced",code:{component:{title:"Component",lang:"vue",transformComponent:Ni},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:t}){const _=P(o)?.toLowerCase();return _?`var(--kui-${_}, $kui-${_})`:t?`var(--${o}, ${t})`:`var(--${o})`}},js:{transformVariable({name:o,value:t}){const _=P(o);return _?`var(--kui-${_.toLowerCase()}, \0KUI_${ti(_)}\0)`:t?`var(--${o}, ${t})`:`var(--${o})`}}}};export{Ei as plugin};
