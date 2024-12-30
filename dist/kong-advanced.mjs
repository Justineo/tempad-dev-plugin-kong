function Pi(o){return o}function n(o,t,_){return{name:o,props:t||{},children:_||[]}}function E(o,t){return typeof t=="function"?t(o):!(t.type&&o.type!==t.type||t.name&&o.name!==t.name)}function g(o,t){return o.children.find(_=>E(_,t))??null}function A(o,t){return o.children.filter(_=>E(_,t))}function f(o,t){for(const _ of o.children){if(E(_,t))return _;if("children"in _){const e=f(_,t);if(e)return e}}return null}function B(o,t){const _=[];for(const e of o.children)E(e,t)&&_.push(e),"children"in e&&_.push(...B(e,t));return _}function O(o){const{Appearance:t,"Show icon":_,"Show title":e,Title:r,"Show close":i}=o.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[t],s=_?!0:void 0,a=e?r:void 0,u=i?!0:void 0,l=i?!0:void 0,k=f(o,{type:"TEXT",name:"desc"});return n("KAlert",{appearance:c,showIcon:s,title:a,message:k?.characters,dismissible:u,onDismiss:l})}const U="#ffffff",X="#d60027",j="#ad000e",V="#850000",H="#5c0000",W="#ff3954",G="#ffabab",J="#ffe5e5",q="#6f28ff",Y="#f1f0ff",Z="#e0e4ea",Q="#000933",oo="#6c7489",to="#52596e",_o="#3a3f51",eo="#232633",ro="#afb7c5",io="#e0e4ea",no="#f9fafb",co="rgba(0, 9, 51, 0.6)",so="#0044f4",ao="#0030cc",uo="#002099",lo="#001466",ko="#5f9aff",po="#bee2ff",go="#eefaff",fo="#00d6a4",bo="#ecfffb",mo="transparent",ho="#ffc400",xo="#fffce0",vo="#e0e4ea",wo="#d60027",yo="#ad000e",So="#850000",Co="#5c0000",To="#ff3954",Io="#ffabab",Fo="#ffe5e5",Ao="#6f28ff",No="#e0e4ea",Eo="rgba(255, 255, 255, 0.2)",Bo="#afb7c5",Do="#e0e4ea",zo="#0044f4",Lo="#0030cc",Po="#002099",Ko="#001466",Mo="#5f9aff",Ro="#bee2ff",$o="#eefaff",Oo="transparent",Uo="#000933",Xo="#d60027",jo="#ad000e",Vo="#00abd2",Ho="#d60067",Wo="#6f28ff",Go="#5e00f5",Jo="#afb7c5",qo="#ffffff",Yo="#6c7489",Zo="#52596e",Qo="#3a3f51",ot="#232633",tt="#afb7c5",_t="#e0e4ea",et="#0044f4",rt="#0030cc",it="#002099",nt="#001466",ct="#5f9aff",st="#007d60",at="#005944",ut="#995c00",lt="#804400",kt="0.2s",dt="0px",pt="2px",gt="4px",ft="6px",bt="8px",mt="10px",ht="50%",xt="100px",vt="0px",wt="1px",yt="2px",St="4px",Ct="640px",Tt="768px",It="1024px",Ft="1280px",At="1536px",Nt="#f50045",Et="#828a9e",Bt="#306fff",Dt="#00a17b",zt="#ffc400",Lt="10px",Pt="12px",Kt="16px",Mt="20px",Rt="24px",$t="32px",Ot="40px",Ut="48px",Xt="#f1f0ff",jt="#ffe5e5",Vt="#eefaff",Ht="#52596e",Wt="#e0e4ea",Gt="#ecfcff",Jt="#ecfffb",qt="#fffce0",Yt="#fff0f7",Zt="#6f28ff",Qt="#5e00f5",o_="#d60027",t_="#ad000e",__="#0044f4",e_="#0030cc",r_="#e0e4ea",i_="#afb7c5",n_="#52596e",c_="#3a3f51",s_="#00819d",a_="#00647a",u_="#007d60",l_="#005944",k_="#995c00",d_="#804400",p_="#d60067",g_="#ad0053",f_="#000933",b_="rgba(255, 255, 255, 0.12)",m_="rgba(255, 255, 255, 0.12)",h_="#00fabe",x_="rgba(255, 255, 255, 0.24)",v_="#bee2ff",w_="#ffffff",y_="#eefaff",S_="#00fabe",C_="0 0 0 1px rgba(255, 255, 255, 0.12) inset",T_="4px 0 0 0 #00fabe inset",I_="0 0 0 1px rgba(255, 255, 255, 0.60) inset",F_="#bee2ff",A_="#8fc1ff",N_="#5f9aff",E_="#306fff",B_="#b5ffee",D_="#00fabe",z_="#00d6a4",L_="#00a17b",P_="#007d60",K_="#005944",M_="#b5ffee",R_="#00fabe",$_="#b5ffee",O_="#00a17b",U_="#fff296",X_="#ffe04b",j_="#ffc400",V_="#b37600",H_="#995c00",W_="#804400",G_="#fff296",J_="#ffe04b",q_="#FFC2B3",Y_="#FF9877",Z_="#FF723C",Q_="#F75008",oe="#D13500",te="#A31F00",_e="#FFC2B3",ee="#FF9877",re="#FF723C",ie="#F75008",ne="#D13500",ce="#A31F00",se="#FFC2B3",ae="#FF9877",ue="#FF723C",le="#F75008",ke="#D13500",de="#A31F00",pe="#FFC2B3",ge="#FF9877",fe="#FF723C",be="#F75008",me="#D13500",he="#A31F00",xe="#FFC2B3",ve="#FF9877",we="#FF723C",ye="#F75008",Se="#D13500",Ce="#ffabab",Te="#ff7272",Ie="#ff3954",Fe="#f50045",Ae="#d60027",Ne="#ad000e",Ee="#ffabab",Be="#ff7272",De="#ff3954",ze="#f50045",Le="#d60027",Pe="#eefaff",Ke="#ecfffb",Me="#fffce0",Re="#FFF1EF",$e="#ffe5e5",Oe="#5f9aff",Ue="#00d6a4",Xe="#ffc400",je="#FF723C",Ve="#ff3954",He="'JetBrains Mono', Consolas, monospace",We="'Inter', Roboto, Helvetica, sans-serif",Ge="'Inter', Roboto, Helvetica, sans-serif",Je="10px",qe="12px",Ye="14px",Ze="16px",Qe="18px",or="20px",tr="24px",_r="32px",er="40px",rr="48px",ir="700",nr="500",cr="400",sr="600",ar="normal",ur="-0.12px",lr="-0.24px",kr="-0.32px",dr="-0.4px",pr="-0.48px",gr="normal",fr="12px",br="16px",mr="20px",hr="24px",xr="28px",vr="32px",wr="36px",yr="40px",Sr="48px",Cr="56px",Tr="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",Ir="0px 0px 0px 1px #e0e4ea inset",Fr="0px 0px 0px 1px #d60027 inset",Ar="0px 0px 0px 1px #ad000e inset",Nr="0px 0px 0px 1px #e0e4ea inset",Er="0px 0px 0px 1px #0044f4 inset",Br="0px 0px 0px 1px #001466 inset",Dr="0px 0px 0px 1px #5f9aff inset",zr="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",Lr="0px",Pr="2px",Kr="4px",Mr="6px",Rr="8px",$r="12px",Or="16px",Ur="20px",Xr="24px",jr="32px",Vr="40px",Hr="48px",Wr="56px",Gr="64px",Jr="80px",qr="96px",Yr="auto",Zr={kui_color_background:U,kui_color_background_danger:X,kui_color_background_danger_strong:j,kui_color_background_danger_stronger:V,kui_color_background_danger_strongest:H,kui_color_background_danger_weak:W,kui_color_background_danger_weaker:G,kui_color_background_danger_weakest:J,kui_color_background_decorative_purple:q,kui_color_background_decorative_purple_weakest:Y,kui_color_background_disabled:Z,kui_color_background_inverse:Q,kui_color_background_neutral:oo,kui_color_background_neutral_strong:to,kui_color_background_neutral_stronger:_o,kui_color_background_neutral_strongest:eo,kui_color_background_neutral_weak:ro,kui_color_background_neutral_weaker:io,kui_color_background_neutral_weakest:no,kui_color_background_overlay:co,kui_color_background_primary:so,kui_color_background_primary_strong:ao,kui_color_background_primary_stronger:uo,kui_color_background_primary_strongest:lo,kui_color_background_primary_weak:ko,kui_color_background_primary_weaker:po,kui_color_background_primary_weakest:go,kui_color_background_success_weak:fo,kui_color_background_success_weakest:bo,kui_color_background_transparent:mo,kui_color_background_warning_weak:ho,kui_color_background_warning_weakest:xo,kui_color_border:vo,kui_color_border_danger:wo,kui_color_border_danger_strong:yo,kui_color_border_danger_stronger:So,kui_color_border_danger_strongest:Co,kui_color_border_danger_weak:To,kui_color_border_danger_weaker:Io,kui_color_border_danger_weakest:Fo,kui_color_border_decorative_purple:Ao,kui_color_border_disabled:No,kui_color_border_inverse:Eo,kui_color_border_neutral_weak:Bo,kui_color_border_neutral_weaker:Do,kui_color_border_primary:zo,kui_color_border_primary_strong:Lo,kui_color_border_primary_stronger:Po,kui_color_border_primary_strongest:Ko,kui_color_border_primary_weak:Mo,kui_color_border_primary_weaker:Ro,kui_color_border_primary_weakest:$o,kui_color_border_transparent:Oo,kui_color_text:Uo,kui_color_text_danger:Xo,kui_color_text_danger_strong:jo,kui_color_text_decorative_aqua:Vo,kui_color_text_decorative_pink:Ho,kui_color_text_decorative_purple:Wo,kui_color_text_decorative_purple_strong:Go,kui_color_text_disabled:Jo,kui_color_text_inverse:qo,kui_color_text_neutral:Yo,kui_color_text_neutral_strong:Zo,kui_color_text_neutral_stronger:Qo,kui_color_text_neutral_strongest:ot,kui_color_text_neutral_weak:tt,kui_color_text_neutral_weaker:_t,kui_color_text_primary:et,kui_color_text_primary_strong:rt,kui_color_text_primary_stronger:it,kui_color_text_primary_strongest:nt,kui_color_text_primary_weak:ct,kui_color_text_success:st,kui_color_text_success_strong:at,kui_color_text_warning:ut,kui_color_text_warning_strong:lt,kui_animation_duration_20:kt,kui_border_radius_0:dt,kui_border_radius_10:pt,kui_border_radius_20:gt,kui_border_radius_30:ft,kui_border_radius_40:bt,kui_border_radius_50:mt,kui_border_radius_circle:ht,kui_border_radius_round:xt,kui_border_width_0:vt,kui_border_width_10:wt,kui_border_width_20:yt,kui_border_width_30:St,kui_breakpoint_mobile:Ct,kui_breakpoint_phablet:Tt,kui_breakpoint_tablet:It,kui_breakpoint_laptop:Ft,kui_breakpoint_desktop:At,kui_icon_color_danger:Nt,kui_icon_color_neutral:Et,kui_icon_color_primary:Bt,kui_icon_color_success:Dt,kui_icon_color_warning:zt,kui_icon_size_10:Lt,kui_icon_size_20:Pt,kui_icon_size_30:Kt,kui_icon_size_40:Mt,kui_icon_size_50:Rt,kui_icon_size_60:$t,kui_icon_size_70:Ot,kui_icon_size_80:Ut,kui_method_color_background_connect:Xt,kui_method_color_background_delete:jt,kui_method_color_background_get:Vt,kui_method_color_background_head:Ht,kui_method_color_background_options:Wt,kui_method_color_background_patch:Gt,kui_method_color_background_post:Jt,kui_method_color_background_put:qt,kui_method_color_background_trace:Yt,kui_method_color_text_connect:Zt,kui_method_color_text_connect_strong:Qt,kui_method_color_text_delete:o_,kui_method_color_text_delete_strong:t_,kui_method_color_text_get:__,kui_method_color_text_get_strong:e_,kui_method_color_text_head:r_,kui_method_color_text_head_strong:i_,kui_method_color_text_options:n_,kui_method_color_text_options_strong:c_,kui_method_color_text_patch:s_,kui_method_color_text_patch_strong:a_,kui_method_color_text_post:u_,kui_method_color_text_post_strong:l_,kui_method_color_text_put:k_,kui_method_color_text_put_strong:d_,kui_method_color_text_trace:p_,kui_method_color_text_trace_strong:g_,kui_navigation_color_background:f_,kui_navigation_color_background_selected:b_,kui_navigation_color_border:m_,kui_navigation_color_border_child:h_,kui_navigation_color_border_divider:x_,kui_navigation_color_text:v_,kui_navigation_color_text_focus:w_,kui_navigation_color_text_hover:y_,kui_navigation_color_text_selected:S_,kui_navigation_shadow_border:C_,kui_navigation_shadow_border_child:T_,kui_navigation_shadow_focus:I_,kui_status_color_100:F_,kui_status_color_101:A_,kui_status_color_102:N_,kui_status_color_103:E_,kui_status_color_200:B_,kui_status_color_201:D_,kui_status_color_202:z_,kui_status_color_203:L_,kui_status_color_204:P_,kui_status_color_205:K_,kui_status_color_206:M_,kui_status_color_207:R_,kui_status_color_208:$_,kui_status_color_226:O_,kui_status_color_300:U_,kui_status_color_301:X_,kui_status_color_302:j_,kui_status_color_303:V_,kui_status_color_304:H_,kui_status_color_305:W_,kui_status_color_307:G_,kui_status_color_308:J_,kui_status_color_400:q_,kui_status_color_401:Y_,kui_status_color_402:Z_,kui_status_color_403:Q_,kui_status_color_404:oe,kui_status_color_405:te,kui_status_color_406:_e,kui_status_color_407:ee,kui_status_color_408:re,kui_status_color_409:ie,kui_status_color_410:ne,kui_status_color_411:ce,kui_status_color_412:se,kui_status_color_413:ae,kui_status_color_414:ue,kui_status_color_415:le,kui_status_color_416:ke,kui_status_color_417:de,kui_status_color_418:pe,kui_status_color_421:ge,kui_status_color_422:fe,kui_status_color_423:be,kui_status_color_424:me,kui_status_color_425:he,kui_status_color_426:xe,kui_status_color_428:ve,kui_status_color_429:we,kui_status_color_431:ye,kui_status_color_451:Se,kui_status_color_500:Ce,kui_status_color_501:Te,kui_status_color_502:Ie,kui_status_color_503:Fe,kui_status_color_504:Ae,kui_status_color_505:Ne,kui_status_color_506:Ee,kui_status_color_507:Be,kui_status_color_508:De,kui_status_color_510:ze,kui_status_color_511:Le,kui_status_color_1na:Pe,kui_status_color_2na:Ke,kui_status_color_3na:Me,kui_status_color_4na:Re,kui_status_color_5na:$e,kui_status_color_100s:Oe,kui_status_color_200s:Ue,kui_status_color_300s:Xe,kui_status_color_400s:je,kui_status_color_500s:Ve,kui_font_family_code:He,kui_font_family_heading:We,kui_font_family_text:Ge,kui_font_size_10:Je,kui_font_size_20:qe,kui_font_size_30:Ye,kui_font_size_40:Ze,kui_font_size_50:Qe,kui_font_size_60:or,kui_font_size_70:tr,kui_font_size_80:_r,kui_font_size_90:er,kui_font_size_100:rr,kui_font_weight_bold:ir,kui_font_weight_medium:nr,kui_font_weight_regular:cr,kui_font_weight_semibold:sr,kui_letter_spacing_0:ar,kui_letter_spacing_minus_10:ur,kui_letter_spacing_minus_20:lr,kui_letter_spacing_minus_30:kr,kui_letter_spacing_minus_40:dr,kui_letter_spacing_minus_50:pr,kui_letter_spacing_normal:gr,kui_line_height_10:fr,kui_line_height_20:br,kui_line_height_30:mr,kui_line_height_40:hr,kui_line_height_50:xr,kui_line_height_60:vr,kui_line_height_70:wr,kui_line_height_80:yr,kui_line_height_90:Sr,kui_line_height_100:Cr,kui_shadow:Tr,kui_shadow_border:Ir,kui_shadow_border_danger:Fr,kui_shadow_border_danger_strong:Ar,kui_shadow_border_disabled:Nr,kui_shadow_border_primary:Er,kui_shadow_border_primary_strongest:Br,kui_shadow_border_primary_weak:Dr,kui_shadow_focus:zr,kui_space_0:Lr,kui_space_10:Pr,kui_space_20:Kr,kui_space_30:Mr,kui_space_40:Rr,kui_space_50:$r,kui_space_60:Or,kui_space_70:Ur,kui_space_80:Xr,kui_space_90:jr,kui_space_100:Vr,kui_space_110:Hr,kui_space_120:Wr,kui_space_130:Gr,kui_space_140:Jr,kui_space_150:qr,kui_space_auto:Yr};function Qr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function oi(o){return o.replace(/-([a-z])/g,(t,_)=>_.toUpperCase())}function P(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/g,"-").toLowerCase()}function ti(o){return Qr(oi(o))}function _i(o){return o.toUpperCase().replace(/-/g,"_")}function b(o,t={}){return n(`${ti(o.name)}Icon`,t)}const ei=new Set(Object.keys(Zr).map(o=>o.substring(4).replaceAll("_","-")));function K(o){const t=o.split("-");for(;t.length;){const _=t.join("-");if(ei.has(_))return _;t.shift()}return null}function ri(o,t){const _={},e=typeof t=="function"?t:r=>t[r]??r;for(const r in o)if(Object.prototype.hasOwnProperty.call(o,r)){const i=e(r);_[i]=o[r]}return _}function v(o){return JSON.parse(JSON.stringify(o))}const M="Lorem ipsum",L="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function ii(o){const{Appearance:t,"Show icon left":_,"Icon left":e,"Show icon right":r,"Icon right":i,Label:c}=o.properties,s={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[t],a=r&&!_?!1:void 0,u=_?e:r?i:void 0;return n("Badge",{appearance:s,iconBefore:a},[c,...u?[n("template",{"#icon":!0},[b(u)])]:[]])}function ni(o){const{Method:t}=o.properties,_={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[t];return n("KBadge",{appearance:_},t?[t]:[])}function ci(o){const t=A(o,r=>r.type==="INSTANCE"&&r.name.startsWith("Level ")).map((r,i)=>{const{Icon:c,"Show icon":s,Text:a}=r.properties;return{item:{text:a||void 0,key:`level-${i}`},icon:s?c:void 0}}),_=t.map(({item:r})=>v(r)),e=t.map(({icon:r},i)=>{if(r)return n("template",{[`#icon-level-${i}`]:!0},[b(r)])}).filter(r=>r!=null);return n("KBreadcrumbs",{items:_},e)}function w(o){const{Appearance:t,Size:_,State:e,Label:r,Position:i,Icon:c,"Icon danger":s,"Icon left":a,"Icon right":u}=o.properties,l={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[t],k={Small:"small",Medium:void 0,Large:"large"}[_],d=e==="Disabled"||void 0;let p=[];return o.name==="Button"?p=[r]:o.name==="Icon Button"?i==="Left"?p=[b(t==="Danger"?s:a),r]:i==="Right"&&(p=[r,b(u)]):o.name==="Icon Only"&&(p=[b(t==="Danger"?s:c)]),n("KButton",{appearance:l,size:k,disabled:d,onClick:!0},p)}function si(o){const t=f(o,{type:"TEXT",name:"title"}),_=f(o,{type:"TEXT",name:"desc"});return n("KCard",{title:t?.characters},_?.characters?[_.characters]:[])}function R(o){const{Label:t,"Show required":_,"Show tooltip":e}=o.properties,r={};_&&(r.required=!0);const i=g(o,{type:"INSTANCE",name:"Tooltip"});if(e&&i){r.info="...";const{"Show tooltip":c}=i.properties,s=g(i,{type:"INSTANCE",name:"Tooltip"});if(c&&s){const{Text:a}=s.properties;a&&(r.info=a)}}return n("KLabel",r,[t])}function y(o,t){const{State:_,"Show label":e,"Show help text":r}=o.properties;let i,c;const s=f(o,{type:"INSTANCE",name:"Label"});e&&s&&(c=R(s));const a=f(o,d=>d.type==="INSTANCE"&&["Parts/.Help Text","Help text"].includes(d.name));if(r&&a){const{Text:d}=a.properties;d&&(i=d)}const{required:u,...l}=c?c.props:{},k={label:c?c.children[0]:void 0,labelAttributes:Object.keys(l).length>0?l:void 0,required:u,help:i,error:_==="Error"?!0:void 0,disabled:_==="Disabled"?!0:void 0};return t?ri(k,t):k}function ai(o){const{Type:t}=o.properties,_=t==="Indeterminate"?!0:void 0,{required:e,label:r,labelAttributes:i,...c}=y(o,{help:"description"});return n("KCheckbox",{"v-model":"checked",indeterminate:_,label:r,labelAttributes:v({...i,required:e}),...c})}function ui(o){const{Theme:t,"Show functions":_,"Show copy":e,"Show alt action":r}=o.properties,i={Light:void 0,Dark:"dark"}[t],c=_?!0:void 0,s=e===!1?!1:void 0;let a,u=!1;const l=f(o,{type:"INSTANCE",name:"Icon Button"});if(r&&l){const{"Icon left":k,Label:d}=l.properties,p=[];k&&(k.name==="copy"&&(u=!0),p.push(b(k))),d&&p.push(d),p.length>0&&(a=n("template",{"#secondary-actions":!0},[n("CodeBlockIconButton",{theme:i,copyTooltip:u?"Copy...":void 0,onClick:"() => {}"},p)]))}return n("KCodeBlock",{id:"...",":code":"code",theme:i,language:"json",searchable:c,showCopyButton:s},a?[a]:[])}function li(o){const{Theme:t}=o.properties,_={Light:void 0,Dark:"dark"}[t];return n("CodeBlock",{":code":"code",theme:_,singleLine:!0})}function ki(o){const{"Show link":t}=o.properties,_=f(o,{type:"TEXT",name:"link"}),e=t&&_?.characters||void 0;return n("KCollapse",{"v-model":"isCollapsed",triggerLabel:e},[L])}function di(o){const{Appearance:t}=o.properties,_={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime",Months:"UNSUPPORTED",Years:"UNSUPPORTED","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[t],e=t.startsWith("Range")||void 0;return n("KDateTimePicker",{"v-model":"currentValue",mode:_,range:e})}function pi(o){const t=A(o,{type:"INSTANCE",name:"Dropdown Option"}).map(_=>{const{State:e,"Show left icon":r,"Left icon":i,Label:c}=_.properties,s=e==="Selected"?!0:void 0,a=e==="Disabled"?!0:void 0,u=e==="Danger"?!0:void 0,l=r&&i?b(i):void 0;return v({label:c,selected:s,disabled:a,danger:u,icon:l})});return t.some(_=>_.icon)?n("KDropdown",{},[n("template",{"#items":!0},[...t.map(({icon:_,label:e,...r})=>n("KDropdownItem",r,_?[_,e]:[e]))])]):n("KDropdown",{items:t})}function gi(o){const{"Show icon":t,Icon:_,Title:e,Description:r,"Show button":i}=o.properties,c=f(o,{type:"INSTANCE",name:"Button"}),s=e||void 0,a=r||void 0,{Appearance:u,Label:l,State:k}=c?c.properties:{},d=i&&c&&u==="Primary",p=d?l:void 0,C=i?void 0:!1,z=d&&k==="Disabled"?!0:void 0;let x,T;t&&_&&(x={analytics:"default",warning:"error",search:"search",kong:"kong"}[_.name],x?x==="default"&&(x=void 0):T=_);const I=[];if(T&&I.push(n("template",{"#icon":!0},[b(T)])),i&&!d){const F=A(o,m=>m.type==="INSTANCE"&&["Icon Only","Icon Button","Button"].includes(m.name));F&&I.push(n("template",{"#action":!0},F.map(w)))}return n("KEmptyState",{title:s,message:a,iconVariant:x,actionButtonText:p,actionButtonVisible:C,actionButtonDisabled:z},I)}function fi(o){const{"Show value":t,Placeholder:_,"Show icon left":e,"Icon left":r}=o.properties,i=t==="True"?void 0:_,c=e&&r?b(r):void 0,s=g(o,{type:"FRAME",name:"input"}),a=s?g(s,{type:"INSTANCE",name:"Button"}):void 0,u=a?a.properties.Label:void 0,l=y(o);return n("KFileUpload",{placeholder:i,buttonText:u!=="Select file"?u:void 0,...l,onFileAdded:"files => {}",onFileRemoved:"files => {}"},c?[n("template",{"#icon":!0},[c])]:void 0)}function bi(o){const{State:t,"Show value":_,Placeholder:e,"Show icon left":r,"Icon left":i,"Show icon right":c,"Icon right":s}=o.properties,a=_==="True"?void 0:e||void 0,u=r&&i?n("template",{"#before":!0},[b(i)]):void 0,l=c&&s?n("template",{"#after":!0},[b(s,{role:"button",tabindex:"0",onClick:!0})]):void 0,k=y(o),d=k.label==="Password",p=s?.name==="visibility"||s?.name==="visibility-off";return n("KInput",{"v-model":"value",type:d||p?"password":void 0,showPasswordMaskToggle:p||void 0,placeholder:a,...k,readonly:t==="Readonly"||void 0},[u,l].filter(C=>C!=null))}function mi(o){const t=g(o,{type:"INSTANCE",name:"Modal Header"}),{"Show icon":_,Icon:e}=t?t.properties:{};let r=M,i=!1;t&&(r=g(t,{type:"TEXT",name:"Modal title"})?.characters||r,i=!g(t,{type:"INSTANCE",name:"close"}));const c=_&&e?n("template",{"#title":!0},[b(e),r]):void 0,s=g(o,{type:"INSTANCE",name:"Modal Footer"}),a={},u={};let l;if(s){const F=g(s,{type:"FRAME",name:"right"}),m=F?A(F,{type:"INSTANCE",name:"Button"}):[];if(!m.length)l=[];else if(m.length===1){const h=w(m[0]);Object.assign(a,h.props),typeof h.children[0]=="string"?a.label=h.children[0]:l=[h],u.hide=!0}else if(m.length===2){const[h,N]=m.map(w);Object.assign(a,N.props),Object.assign(u,h.props),typeof N.children[0]=="string"&&typeof h.children[0]=="string"?(a.label=N.children[0],u.label=h.children[0]):l=[h,N]}else l=m.map(w)}const k=l?n("template",{"#footer-actions":!0},l):void 0,d=S(a,"label","Submit"),p=S(a,"appearance","primary"),C=S(a,"disabled",!1),z=S(u,"label","Cancel"),x=S(u,"appearance","tertiary"),T=S(u,"disabled",!1),I=S(u,"hide",!1);return n("KModal",{":visible":"modalVisible",title:c?void 0:r,actionButtonText:d,actionButtonAppearance:p,actionButtonDisabled:C,cancelButtonText:z,cancelButtonAppearance:x,cancelButtonDisabled:T,hideCancelButton:I,hideCloseIcon:i||void 0},[...c?[c]:[],L,...k?[k]:[]])}function S(o,t,_){const e=o[t];return e===_?void 0:e||void 0}function hi(o){const{"Show value":t,Placeholder:_}=o.properties,e=t==="True"?void 0:_,r=y(o);return n("KMultiselect",{"v-model":"value",":items":"items",placeholder:e,...r},[])}function xi(o){const{"Show pages":t}=o.properties,_=!!g(o,{type:"INSTANCE",name:"Parts/.Pagination Text"});return n("KPagination",{":total-count":"total",":current-page":"page",offset:!t&&!_||void 0,disablePageJump:!t&&_||void 0})}function vi(o){const{Text:t,Heading:_}=o.properties,e=f(o,{type:"FRAME",name:"title"}),r=f(o,{type:"INSTANCE",name:"close"});return n("KPopover",{title:e&&_||void 0,hideCloseIcon:!r||void 0},[n("template",{"#content":!0},[t])])}function wi(o){const{required:t,label:_,labelAttributes:e,...r}=y(o,{help:"description"});return n("KRadio",{"v-model":"checked",label:_,labelAttributes:v({...e,required:t}),...r})}function yi(o){const t=g(o,{type:"INSTANCE"}),_=f(o,{type:"INSTANCE",name:"Label"}),e=f(o,{type:"INSTANCE",name:"Help Text"});return n("KRadio",{"v-model":"checked",label:_?.properties.Label||void 0,description:e?.properties.Text||void 0,cardRadioVisible:!1},t?[b(t)]:[])}function Si(o){const{Size:t}=o.properties,_={Default:void 0,Large:"large"}[t],e=A(o,{type:"INSTANCE",name:"Control Option"}).map(i=>{const{State:c}=i.properties,s=c==="Disabled"?!0:void 0,a=g(i,{type:"TEXT",name:"option"})?.characters||"";return v({label:a,value:P(a),disabled:s})}),r=e.every(i=>i.disabled)||void 0;return r&&e.forEach(i=>{i.disabled=void 0}),n("KSegmentedControl",{":v-model":"selected",options:e,size:_,disabled:r})}function Ci(o){const{"Show value":t,Placeholder:_,"Show icon left":e,"Icon left":r}=o.properties,i=t==="True"?void 0:_,c=e&&r?b(r):void 0,s=y(o);return n("KSelect",{"v-model":"value",":items":"items",placeholder:i,...s},c?[n("template",{"#before":!0},[c])]:void 0)}const Ti={Generic:"generic",Card:"card",Form:"form",Table:"table"},Ii="Skeleton Loader/(.*)";function D(o){const[,t]=o.name.match(Ii)||[],_=t&&Ti[t]||"generic";return n("KSkeleton",{type:_!=="generic"?_:void 0})}function $(o){const t=B(o,{type:"INSTANCE",name:"Tab"}),_=[],e=[];return t.forEach(r=>{const{State:i,"Show icon":c,Icon:s}=r.properties,a=i==="Disabled"?!0:void 0,u=g(r,{type:"TEXT",name:"label"})?.characters||"",l=P(u);c&&s&&_.push(n("template",{[`#${l}-anchor`]:!0},[b(s),u])),e.push(v({title:u||void 0,hash:`#${l}`,disabled:a}))}),n("KTabs",{"v-model":"tabs",tabs:e},_)}function Fi(o){const{"Show tabs":t}=o.properties,_=g(o,{type:"FRAME",name:"header"}),e=_&&g(_,{type:"FRAME",name:"title"}),r=(e&&f(e,{type:"TEXT"}))?.characters,i=t&&f(o,{type:"INSTANCE",name:"Tabs"})||null;return n("KSlideout",{":visible":"slideoutVisible",title:r},[...i?[$(i)]:[],L])}const Ai={Inactive:"default",Active:"active",Complete:"completed",Loading:"pending",Error:"error"};function Ni(o){const t=B(o,{type:"INSTANCE",name:"Parts/.Step Icon"}),_=B(o,e=>e.type==="TEXT"&&e.name.startsWith("Step")).map((e,r)=>{const i=t[r],{Appearance:c}=i.properties,s=Ai[c];return v({label:e.characters,state:s==="default"?void 0:s})});return n("KStepper",{steps:_})}function Ei(o){const{Size:t}=o.properties,_={Medium:"large",Small:"small"}[t];return n("KInputSwitch",{"v-model":"switchValue",label:M,labelBefore:!0,size:_==="small"?void 0:_})}function Bi(o){const{"Show value":t,Placeholder:_}=o.properties,e=t==="True"?void 0:_||void 0,r=y(o);return n("KTextArea",{"v-model":"value",placeholder:e,...r})}const Di={Alert:O,Badge:ii,MethodBadge:ni,GlobalBreadcrumb:ci,Button:w,IconButton:w,IconOnly:w,Card:si,Checkbox:ai,CodeBlock:ui,CodeLine:li,Collapse:ki,DatePicker:di,Dropdown:pi,EmptyState:gi,FileUpload:fi,Input:bi,Label:R,Modal:mi,Multiselect:hi,Pagination:xi,Popover:vi,Radio:wi,RadioCard:yi,SegmentedControl:Si,Select:Ci,"SkeletonLoader/Generic":D,"SkeletonLoader/Card":D,"SkeletonLoader/Form":D,"SkeletonLoader/Table":D,Slideout:Fi,Stepper:Ni,Tabs:$,Switch:Ei,Textarea:Bi},zi=({component:o})=>{const t=Di[o.name.replaceAll(" ","")];return t?t(o):""},Li={name:"Kong UI Advanced",code:{component:{title:"Component",lang:"vue",transformComponent:zi},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:t}){const _=K(o)?.toLowerCase();return _?`var(--kui-${_}, $kui-${_})`:t?`var(--${o}, ${t})`:`var(--${o})`}},js:{transformVariable({name:o,value:t}){const _=K(o);return _?`var(--kui-${_.toLowerCase()}, \0KUI_${_i(_)}\0)`:t?`var(--${o}, ${t})`:`var(--${o})`}}}};export{Li as plugin};
