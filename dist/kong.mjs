function $i(o){return o}function n(o,t,e){return{name:o,props:t||{},children:e||[]}}function B(o,t){return typeof t=="function"?t(o):!(t.type&&o.type!==t.type||t.name&&o.name!==t.name)}function p(o,t){return o.children.find(e=>B(e,t))??null}function N(o,t){return o.children.filter(e=>B(e,t))}function b(o,t){for(const e of o.children){if(B(e,t))return e;if("children"in e){const _=b(e,t);if(_)return _}}return null}function E(o,t){const e=[];for(const _ of o.children)B(_,t)&&e.push(_),"children"in _&&e.push(...E(_,t));return e}const $="#ffffff",U="#d60027",j="#ad000e",V="#850000",X="#5c0000",H="#ff3954",W="#ffabab",G="#ffe5e5",J="#6f28ff",q="#f1f0ff",Y="#e0e4ea",Z="#000933",Q="#6c7489",oo="#52596e",to="#3a3f51",eo="#232633",_o="#afb7c5",ro="#e0e4ea",io="#f9fafb",no="rgba(0, 9, 51, 0.6)",co="#0044f4",so="#0030cc",ao="#002099",uo="#001466",lo="#5f9aff",ko="#bee2ff",po="#eefaff",go="#00d6a4",fo="#ecfffb",bo="transparent",mo="#ffc400",ho="#fffce0",xo="#e0e4ea",vo="#d60027",wo="#ad000e",yo="#850000",So="#5c0000",To="#ff3954",Co="#ffabab",Io="#ffe5e5",Ao="#6f28ff",No="#e0e4ea",Eo="rgba(255, 255, 255, 0.2)",Fo="#afb7c5",Bo="#e0e4ea",Do="#0044f4",zo="#0030cc",Lo="#002099",Ko="#001466",Po="#5f9aff",Ro="#bee2ff",Mo="#eefaff",Oo="transparent",$o="#000933",Uo="#d60027",jo="#ad000e",Vo="#00abd2",Xo="#d60067",Ho="#6f28ff",Wo="#5e00f5",Go="#afb7c5",Jo="#ffffff",qo="#6c7489",Yo="#52596e",Zo="#3a3f51",Qo="#232633",ot="#afb7c5",tt="#e0e4ea",et="#0044f4",_t="#0030cc",rt="#002099",it="#001466",nt="#5f9aff",ct="#007d60",st="#005944",at="#995c00",ut="#804400",lt="0.2s",kt="0px",dt="2px",pt="4px",gt="6px",ft="8px",bt="10px",mt="50%",ht="100px",xt="0px",vt="1px",wt="2px",yt="4px",St="640px",Tt="768px",Ct="1024px",It="1280px",At="1536px",Nt="#f50045",Et="#828a9e",Ft="#306fff",Bt="#00a17b",Dt="#ffc400",zt="10px",Lt="12px",Kt="16px",Pt="20px",Rt="24px",Mt="32px",Ot="40px",$t="48px",Ut="#f1f0ff",jt="#ffe5e5",Vt="#eefaff",Xt="#52596e",Ht="#e0e4ea",Wt="#ecfcff",Gt="#ecfffb",Jt="#fffce0",qt="#fff0f7",Yt="#6f28ff",Zt="#5e00f5",Qt="#d60027",oe="#ad000e",te="#0044f4",ee="#0030cc",_e="#e0e4ea",re="#afb7c5",ie="#52596e",ne="#3a3f51",ce="#00819d",se="#00647a",ae="#007d60",ue="#005944",le="#995c00",ke="#804400",de="#d60067",pe="#ad0053",ge="#000933",fe="rgba(255, 255, 255, 0.12)",be="rgba(255, 255, 255, 0.12)",me="#00fabe",he="rgba(255, 255, 255, 0.24)",xe="#bee2ff",ve="#ffffff",we="#eefaff",ye="#00fabe",Se="0 0 0 1px rgba(255, 255, 255, 0.12) inset",Te="4px 0 0 0 #00fabe inset",Ce="0 0 0 1px rgba(255, 255, 255, 0.60) inset",Ie="#bee2ff",Ae="#8fc1ff",Ne="#5f9aff",Ee="#306fff",Fe="#b5ffee",Be="#00fabe",De="#00d6a4",ze="#00a17b",Le="#007d60",Ke="#005944",Pe="#b5ffee",Re="#00fabe",Me="#b5ffee",Oe="#00a17b",$e="#fff296",Ue="#ffe04b",je="#ffc400",Ve="#b37600",Xe="#995c00",He="#804400",We="#fff296",Ge="#ffe04b",Je="#FFC2B3",qe="#FF9877",Ye="#FF723C",Ze="#F75008",Qe="#D13500",o_="#A31F00",t_="#FFC2B3",e_="#FF9877",__="#FF723C",r_="#F75008",i_="#D13500",n_="#A31F00",c_="#FFC2B3",s_="#FF9877",a_="#FF723C",u_="#F75008",l_="#D13500",k_="#A31F00",d_="#FFC2B3",p_="#FF9877",g_="#FF723C",f_="#F75008",b_="#D13500",m_="#A31F00",h_="#FFC2B3",x_="#FF9877",v_="#FF723C",w_="#F75008",y_="#D13500",S_="#ffabab",T_="#ff7272",C_="#ff3954",I_="#f50045",A_="#d60027",N_="#ad000e",E_="#ffabab",F_="#ff7272",B_="#ff3954",D_="#f50045",z_="#d60027",L_="#eefaff",K_="#ecfffb",P_="#fffce0",R_="#FFF1EF",M_="#ffe5e5",O_="#5f9aff",$_="#00d6a4",U_="#ffc400",j_="#FF723C",V_="#ff3954",X_="'JetBrains Mono', Consolas, monospace",H_="'Inter', Roboto, Helvetica, sans-serif",W_="'Inter', Roboto, Helvetica, sans-serif",G_="10px",J_="12px",q_="14px",Y_="16px",Z_="18px",Q_="20px",or="24px",tr="32px",er="40px",_r="48px",rr="700",ir="500",nr="400",cr="600",sr="normal",ar="-0.12px",ur="-0.24px",lr="-0.32px",kr="-0.4px",dr="-0.48px",pr="normal",gr="12px",fr="16px",br="20px",mr="24px",hr="28px",xr="32px",vr="36px",wr="40px",yr="48px",Sr="56px",Tr="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",Cr="0px 0px 0px 1px #e0e4ea inset",Ir="0px 0px 0px 1px #d60027 inset",Ar="0px 0px 0px 1px #ad000e inset",Nr="0px 0px 0px 1px #e0e4ea inset",Er="0px 0px 0px 1px #0044f4 inset",Fr="0px 0px 0px 1px #001466 inset",Br="0px 0px 0px 1px #5f9aff inset",Dr="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",zr="0px",Lr="2px",Kr="4px",Pr="6px",Rr="8px",Mr="12px",Or="16px",$r="20px",Ur="24px",jr="32px",Vr="40px",Xr="48px",Hr="56px",Wr="64px",Gr="80px",Jr="96px",qr="auto",Yr={kui_color_background:$,kui_color_background_danger:U,kui_color_background_danger_strong:j,kui_color_background_danger_stronger:V,kui_color_background_danger_strongest:X,kui_color_background_danger_weak:H,kui_color_background_danger_weaker:W,kui_color_background_danger_weakest:G,kui_color_background_decorative_purple:J,kui_color_background_decorative_purple_weakest:q,kui_color_background_disabled:Y,kui_color_background_inverse:Z,kui_color_background_neutral:Q,kui_color_background_neutral_strong:oo,kui_color_background_neutral_stronger:to,kui_color_background_neutral_strongest:eo,kui_color_background_neutral_weak:_o,kui_color_background_neutral_weaker:ro,kui_color_background_neutral_weakest:io,kui_color_background_overlay:no,kui_color_background_primary:co,kui_color_background_primary_strong:so,kui_color_background_primary_stronger:ao,kui_color_background_primary_strongest:uo,kui_color_background_primary_weak:lo,kui_color_background_primary_weaker:ko,kui_color_background_primary_weakest:po,kui_color_background_success_weak:go,kui_color_background_success_weakest:fo,kui_color_background_transparent:bo,kui_color_background_warning_weak:mo,kui_color_background_warning_weakest:ho,kui_color_border:xo,kui_color_border_danger:vo,kui_color_border_danger_strong:wo,kui_color_border_danger_stronger:yo,kui_color_border_danger_strongest:So,kui_color_border_danger_weak:To,kui_color_border_danger_weaker:Co,kui_color_border_danger_weakest:Io,kui_color_border_decorative_purple:Ao,kui_color_border_disabled:No,kui_color_border_inverse:Eo,kui_color_border_neutral_weak:Fo,kui_color_border_neutral_weaker:Bo,kui_color_border_primary:Do,kui_color_border_primary_strong:zo,kui_color_border_primary_stronger:Lo,kui_color_border_primary_strongest:Ko,kui_color_border_primary_weak:Po,kui_color_border_primary_weaker:Ro,kui_color_border_primary_weakest:Mo,kui_color_border_transparent:Oo,kui_color_text:$o,kui_color_text_danger:Uo,kui_color_text_danger_strong:jo,kui_color_text_decorative_aqua:Vo,kui_color_text_decorative_pink:Xo,kui_color_text_decorative_purple:Ho,kui_color_text_decorative_purple_strong:Wo,kui_color_text_disabled:Go,kui_color_text_inverse:Jo,kui_color_text_neutral:qo,kui_color_text_neutral_strong:Yo,kui_color_text_neutral_stronger:Zo,kui_color_text_neutral_strongest:Qo,kui_color_text_neutral_weak:ot,kui_color_text_neutral_weaker:tt,kui_color_text_primary:et,kui_color_text_primary_strong:_t,kui_color_text_primary_stronger:rt,kui_color_text_primary_strongest:it,kui_color_text_primary_weak:nt,kui_color_text_success:ct,kui_color_text_success_strong:st,kui_color_text_warning:at,kui_color_text_warning_strong:ut,kui_animation_duration_20:lt,kui_border_radius_0:kt,kui_border_radius_10:dt,kui_border_radius_20:pt,kui_border_radius_30:gt,kui_border_radius_40:ft,kui_border_radius_50:bt,kui_border_radius_circle:mt,kui_border_radius_round:ht,kui_border_width_0:xt,kui_border_width_10:vt,kui_border_width_20:wt,kui_border_width_30:yt,kui_breakpoint_mobile:St,kui_breakpoint_phablet:Tt,kui_breakpoint_tablet:Ct,kui_breakpoint_laptop:It,kui_breakpoint_desktop:At,kui_icon_color_danger:Nt,kui_icon_color_neutral:Et,kui_icon_color_primary:Ft,kui_icon_color_success:Bt,kui_icon_color_warning:Dt,kui_icon_size_10:zt,kui_icon_size_20:Lt,kui_icon_size_30:Kt,kui_icon_size_40:Pt,kui_icon_size_50:Rt,kui_icon_size_60:Mt,kui_icon_size_70:Ot,kui_icon_size_80:$t,kui_method_color_background_connect:Ut,kui_method_color_background_delete:jt,kui_method_color_background_get:Vt,kui_method_color_background_head:Xt,kui_method_color_background_options:Ht,kui_method_color_background_patch:Wt,kui_method_color_background_post:Gt,kui_method_color_background_put:Jt,kui_method_color_background_trace:qt,kui_method_color_text_connect:Yt,kui_method_color_text_connect_strong:Zt,kui_method_color_text_delete:Qt,kui_method_color_text_delete_strong:oe,kui_method_color_text_get:te,kui_method_color_text_get_strong:ee,kui_method_color_text_head:_e,kui_method_color_text_head_strong:re,kui_method_color_text_options:ie,kui_method_color_text_options_strong:ne,kui_method_color_text_patch:ce,kui_method_color_text_patch_strong:se,kui_method_color_text_post:ae,kui_method_color_text_post_strong:ue,kui_method_color_text_put:le,kui_method_color_text_put_strong:ke,kui_method_color_text_trace:de,kui_method_color_text_trace_strong:pe,kui_navigation_color_background:ge,kui_navigation_color_background_selected:fe,kui_navigation_color_border:be,kui_navigation_color_border_child:me,kui_navigation_color_border_divider:he,kui_navigation_color_text:xe,kui_navigation_color_text_focus:ve,kui_navigation_color_text_hover:we,kui_navigation_color_text_selected:ye,kui_navigation_shadow_border:Se,kui_navigation_shadow_border_child:Te,kui_navigation_shadow_focus:Ce,kui_status_color_100:Ie,kui_status_color_101:Ae,kui_status_color_102:Ne,kui_status_color_103:Ee,kui_status_color_200:Fe,kui_status_color_201:Be,kui_status_color_202:De,kui_status_color_203:ze,kui_status_color_204:Le,kui_status_color_205:Ke,kui_status_color_206:Pe,kui_status_color_207:Re,kui_status_color_208:Me,kui_status_color_226:Oe,kui_status_color_300:$e,kui_status_color_301:Ue,kui_status_color_302:je,kui_status_color_303:Ve,kui_status_color_304:Xe,kui_status_color_305:He,kui_status_color_307:We,kui_status_color_308:Ge,kui_status_color_400:Je,kui_status_color_401:qe,kui_status_color_402:Ye,kui_status_color_403:Ze,kui_status_color_404:Qe,kui_status_color_405:o_,kui_status_color_406:t_,kui_status_color_407:e_,kui_status_color_408:__,kui_status_color_409:r_,kui_status_color_410:i_,kui_status_color_411:n_,kui_status_color_412:c_,kui_status_color_413:s_,kui_status_color_414:a_,kui_status_color_415:u_,kui_status_color_416:l_,kui_status_color_417:k_,kui_status_color_418:d_,kui_status_color_421:p_,kui_status_color_422:g_,kui_status_color_423:f_,kui_status_color_424:b_,kui_status_color_425:m_,kui_status_color_426:h_,kui_status_color_428:x_,kui_status_color_429:v_,kui_status_color_431:w_,kui_status_color_451:y_,kui_status_color_500:S_,kui_status_color_501:T_,kui_status_color_502:C_,kui_status_color_503:I_,kui_status_color_504:A_,kui_status_color_505:N_,kui_status_color_506:E_,kui_status_color_507:F_,kui_status_color_508:B_,kui_status_color_510:D_,kui_status_color_511:z_,kui_status_color_1na:L_,kui_status_color_2na:K_,kui_status_color_3na:P_,kui_status_color_4na:R_,kui_status_color_5na:M_,kui_status_color_100s:O_,kui_status_color_200s:$_,kui_status_color_300s:U_,kui_status_color_400s:j_,kui_status_color_500s:V_,kui_font_family_code:X_,kui_font_family_heading:H_,kui_font_family_text:W_,kui_font_size_10:G_,kui_font_size_20:J_,kui_font_size_30:q_,kui_font_size_40:Y_,kui_font_size_50:Z_,kui_font_size_60:Q_,kui_font_size_70:or,kui_font_size_80:tr,kui_font_size_90:er,kui_font_size_100:_r,kui_font_weight_bold:rr,kui_font_weight_medium:ir,kui_font_weight_regular:nr,kui_font_weight_semibold:cr,kui_letter_spacing_0:sr,kui_letter_spacing_minus_10:ar,kui_letter_spacing_minus_20:ur,kui_letter_spacing_minus_30:lr,kui_letter_spacing_minus_40:kr,kui_letter_spacing_minus_50:dr,kui_letter_spacing_normal:pr,kui_line_height_10:gr,kui_line_height_20:fr,kui_line_height_30:br,kui_line_height_40:mr,kui_line_height_50:hr,kui_line_height_60:xr,kui_line_height_70:vr,kui_line_height_80:wr,kui_line_height_90:yr,kui_line_height_100:Sr,kui_shadow:Tr,kui_shadow_border:Cr,kui_shadow_border_danger:Ir,kui_shadow_border_danger_strong:Ar,kui_shadow_border_disabled:Nr,kui_shadow_border_primary:Er,kui_shadow_border_primary_strongest:Fr,kui_shadow_border_primary_weak:Br,kui_shadow_focus:Dr,kui_space_0:zr,kui_space_10:Lr,kui_space_20:Kr,kui_space_30:Pr,kui_space_40:Rr,kui_space_50:Mr,kui_space_60:Or,kui_space_70:$r,kui_space_80:Ur,kui_space_90:jr,kui_space_100:Vr,kui_space_110:Xr,kui_space_120:Hr,kui_space_130:Wr,kui_space_140:Gr,kui_space_150:Jr,kui_space_auto:qr};function Zr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Qr(o){return o.replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function L(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/g,"-").toLowerCase()}function oi(o){return Zr(Qr(o))}function ti(o){return o.toUpperCase().replace(/-/g,"_")}function g(o,t={}){const e=o.mainComponent?.name||o.name,_=p(o,{type:"VECTOR"})?.fills[0]?.color;return n(`${oi(e)}Icon`,Object.assign(_?{":color":typeof _=="string"?_:K(_.name,"js")}:{},t))}const ei=new Set(Object.keys(Yr).map(o=>o.substring(4).replaceAll("_","-")));function K(o,t){const e=o.split("-");let _=null;for(;e.length;){const r=e.join("-");if(ei.has(r)){_=r;break}e.shift()}return _?t==="scss"?`$kui-${_.toLowerCase()}`:t==="js"?`KUI_${ti(_)}`:_:null}function _i(o,t){const e={},_=typeof t=="function"?t:r=>t[r]??r;for(const r in o)if(Object.prototype.hasOwnProperty.call(o,r)){const i=_(r);e[i]=o[r]}return e}function v(o){return JSON.parse(JSON.stringify(o))}const R="Lorem ipsum",P="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function ri(o){const{Appearance:t,"Show icon":e,"Show title":_,Title:r,"Show close":i}=o.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[t],s=e?!0:void 0,a=_?r:void 0,u=i?!0:void 0,l=i?!0:void 0,k=b(o,{type:"TEXT",name:"desc"});return n("KAlert",{appearance:c,showIcon:s,title:a,message:k?.characters,dismissible:u,onDismiss:l})}function ii(o){const{Appearance:t,"Show icon left":e,"Icon left":_,"Show icon right":r,"Icon right":i,Label:c}=o.properties,s={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[t],a=r&&!e?!1:void 0,u=e?_:r?i:void 0;return n("Badge",{appearance:s,iconBefore:a},[c,...u?[n("template",{"#icon":!0},[g(u)])]:[]])}function ni(o){const{Method:t}=o.properties,e={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[t];return n("KBadge",{appearance:e},t?[t]:[])}function ci(o){const t=N(o,r=>r.type==="INSTANCE"&&r.name.startsWith("Level ")).map((r,i)=>{const{Icon:c,"Show icon":s,Text:a}=r.properties,u=a||"";return{item:{text:u||void 0,key:L(u)||`level-${i}`},icon:s?c:void 0}}),e=t.map(({item:r})=>v(r)),_=t.map(({item:r,icon:i})=>{if(i)return n("template",{[`#icon-${r.key}`]:!0},[g(i)])}).filter(r=>r!=null);return n("KBreadcrumbs",{items:e},_)}function w(o){const{Appearance:t,Size:e,State:_,Label:r,Position:i,Icon:c,"Icon danger":s,"Icon left":a,"Icon right":u}=o.properties,l={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[t],k={Small:"small",Medium:void 0,Large:"large"}[e],d=_==="Disabled"||void 0;let f=[];return o.name==="Button"?f=[r]:o.name==="Icon Button"?i==="Left"?f=[g(t==="Danger"?s:a),r]:i==="Right"&&(f=[r,g(u)]):o.name==="Icon Only"&&(f=[g(t==="Danger"?s:c)]),n("KButton",{appearance:l,size:k,disabled:d,onClick:!0},f)}function si(o){const t=b(o,{type:"TEXT",name:"title"}),e=b(o,{type:"TEXT",name:"desc"});return n("KCard",{title:t?.characters},e?.characters?[e.characters]:[])}function M(o){const{Label:t,"Show required":e,"Show tooltip":_}=o.properties,r={};e&&(r.required=!0);const i=p(o,{type:"INSTANCE",name:"Tooltip"});if(_&&i){r.info="...";const{"Show tooltip":c}=i.properties,s=p(i,{type:"INSTANCE",name:"Tooltip"});if(c&&s){const{Text:a}=s.properties;a&&(r.info=a)}}return n("KLabel",r,[t])}function y(o,t){const{State:e,"Show label":_,"Show help text":r}=o.properties;let i,c;const s=b(o,{type:"INSTANCE",name:"Label"});_&&s&&(c=M(s));const a=b(o,d=>d.type==="INSTANCE"&&["Parts/.Help Text","Help text"].includes(d.name));if(r&&a){const{Text:d}=a.properties;d&&(i=d)}const{required:u,...l}=c?c.props:{},k={label:c?c.children[0]:void 0,labelAttributes:Object.keys(l).length>0?l:void 0,required:u,help:i,error:e==="Error"?!0:void 0,disabled:e==="Disabled"?!0:void 0};return t?_i(k,t):k}function ai(o){const{Type:t}=o.properties,e=t==="Indeterminate"?!0:void 0,{required:_,label:r,labelAttributes:i,...c}=y(o,{help:"description"});return n("KCheckbox",{"v-model":"checked",indeterminate:e,label:r,labelAttributes:v({...i,required:_}),...c})}function ui(o){const{Theme:t,"Show functions":e,"Show copy":_,"Show alt action":r}=o.properties,i={Light:void 0,Dark:"dark"}[t],c=e?!0:void 0,s=_===!1?!1:void 0;let a,u=!1;const l=b(o,{type:"INSTANCE",name:"Icon Button"});if(r&&l){const{"Icon left":k,Label:d}=l.properties,f=[];k&&(k.name==="copy"&&(u=!0),f.push(g(k))),d&&f.push(d),f.length>0&&(a=n("template",{"#secondary-actions":!0},[n("CodeBlockIconButton",{theme:i,copyTooltip:u?"Copy...":void 0,onClick:"() => {}"},f)]))}return n("KCodeBlock",{id:"...",":code":"code",theme:i,language:"json",searchable:c,showCopyButton:s},a?[a]:[])}function li(o){const{Theme:t}=o.properties,e={Light:void 0,Dark:"dark"}[t];return n("CodeBlock",{":code":"code",theme:e,singleLine:!0})}function ki(o){const{"Show link":t}=o.properties,e=b(o,{type:"TEXT",name:"link"}),_=t&&e?.characters||void 0;return n("KCollapse",{"v-model":"isCollapsed",triggerLabel:_},[P])}function di(o){const{Appearance:t}=o.properties,e={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime",Months:"UNSUPPORTED",Years:"UNSUPPORTED","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[t],_=t.startsWith("Range")||void 0;return n("KDateTimePicker",{"v-model":"currentValue",mode:e,range:_})}function pi(o){const t=N(o,{type:"INSTANCE",name:"Dropdown Option"}).map(e=>{const{State:_,"Show left icon":r,"Left icon":i,Label:c}=e.properties,s=_==="Selected"?!0:void 0,a=_==="Disabled"?!0:void 0,u=_==="Danger"?!0:void 0,l=r&&i?g(i):void 0;return v({label:c,selected:s,disabled:a,danger:u,icon:l})});return t.some(e=>e.icon)?n("KDropdown",{},[n("template",{"#items":!0},[...t.map(({icon:e,label:_,...r})=>n("KDropdownItem",r,e?[e,_]:[_]))])]):n("KDropdown",{items:t})}function gi(o){const{"Show icon":t,Icon:e,Title:_,Description:r,"Show button":i}=o.properties,c=b(o,{type:"INSTANCE",name:"Button"}),s=_||void 0,a=r||void 0,{Appearance:u,Label:l,State:k}=c?c.properties:{},d=i&&c&&u==="Primary",f=d?l:void 0,T=i?void 0:!1,z=d&&k==="Disabled"?!0:void 0;let x,C;t&&e&&(x={analytics:"default",warning:"error",search:"search",kong:"kong"}[e.name],x?x==="default"&&(x=void 0):C=e);const I=[];if(C&&I.push(n("template",{"#icon":!0},[g(C)])),i&&!d){const A=N(o,m=>m.type==="INSTANCE"&&["Icon Only","Icon Button","Button"].includes(m.name));A&&I.push(n("template",{"#action":!0},A.map(w)))}return n("KEmptyState",{title:s,message:a,iconVariant:x,actionButtonText:f,actionButtonVisible:T,actionButtonDisabled:z},I)}function fi(o){const{"Show value":t,Placeholder:e,"Show icon left":_,"Icon left":r}=o.properties,i=t==="True"?void 0:e,c=_&&r?g(r):void 0,s=p(o,{type:"FRAME",name:"input"}),a=s?p(s,{type:"INSTANCE",name:"Button"}):void 0,u=a?a.properties.Label:void 0,l=y(o);return n("KFileUpload",{placeholder:i,buttonText:u!=="Select file"?u:void 0,...l,onFileAdded:"files => {}",onFileRemoved:"files => {}"},c?[n("template",{"#icon":!0},[c])]:void 0)}function bi(o){const{State:t,"Show value":e,Placeholder:_,"Show icon left":r,"Icon left":i,"Show icon right":c,"Icon right":s}=o.properties,a=e==="True"?void 0:_||void 0,u=r&&i?n("template",{"#before":!0},[g(i)]):void 0,l=c&&s?n("template",{"#after":!0},[g(s,{role:"button",tabindex:"0",onClick:!0})]):void 0,k=y(o),d=k.label==="Password",f=s?.name==="visibility"||s?.name==="visibility-off";return n("KInput",{"v-model":"value",type:d||f?"password":void 0,showPasswordMaskToggle:f||void 0,placeholder:a,...k,readonly:t==="Readonly"||void 0},[u,l].filter(T=>T!=null))}function mi(o){const t=p(o,{type:"INSTANCE",name:"Modal Header"}),{"Show icon":e,Icon:_}=t?t.properties:{};let r=R,i=!1;t&&(r=p(t,{type:"TEXT",name:"Modal title"})?.characters||r,i=!p(t,{type:"INSTANCE",name:"close"}));const c=e&&_?n("template",{"#title":!0},[g(_),r]):void 0,s=p(o,{type:"INSTANCE",name:"Modal Footer"}),a={},u={};let l;if(s){const A=p(s,{type:"FRAME",name:"right"}),m=A?N(A,{type:"INSTANCE",name:"Button"}):[];if(!m.length)l=[];else if(m.length===1){const h=w(m[0]);Object.assign(a,h.props),typeof h.children[0]=="string"?a.label=h.children[0]:l=[h],u.hide=!0}else if(m.length===2){const[h,F]=m.map(w);Object.assign(a,F.props),Object.assign(u,h.props),typeof F.children[0]=="string"&&typeof h.children[0]=="string"?(a.label=F.children[0],u.label=h.children[0]):l=[h,F]}else l=m.map(w)}const k=l?n("template",{"#footer-actions":!0},l):void 0,d=S(a,"label","Submit"),f=S(a,"appearance","primary"),T=S(a,"disabled",!1),z=S(u,"label","Cancel"),x=S(u,"appearance","tertiary"),C=S(u,"disabled",!1),I=S(u,"hide",!1);return n("KModal",{":visible":"modalVisible",title:c?void 0:r,actionButtonText:d,actionButtonAppearance:f,actionButtonDisabled:T,cancelButtonText:z,cancelButtonAppearance:x,cancelButtonDisabled:C,hideCancelButton:I,hideCloseIcon:i||void 0},[...c?[c]:[],P,...k?[k]:[]])}function S(o,t,e){const _=o[t];return _===e?void 0:_||void 0}function hi(o){const{"Show value":t,Placeholder:e}=o.properties,_=t==="True"?void 0:e,r=y(o);return n("KMultiselect",{"v-model":"value",":items":"items",placeholder:_,...r},[])}function xi(o){const{"Show pages":t}=o.properties,e=!!p(o,{type:"INSTANCE",name:"Parts/.Pagination Text"});return n("KPagination",{":total-count":"total",":current-page":"page",offset:!t&&!e||void 0,disablePageJump:!t&&e||void 0})}function vi(o){const{Text:t,Heading:e}=o.properties,_=b(o,{type:"FRAME",name:"title"}),r=b(o,{type:"INSTANCE",name:"close"});return n("KPopover",{title:_&&e||void 0,hideCloseIcon:!r||void 0},[n("template",{"#content":!0},[t])])}function wi(o){const{required:t,label:e,labelAttributes:_,...r}=y(o,{help:"description"});return n("KRadio",{"v-model":"checked",label:e,labelAttributes:v({..._,required:t}),...r})}function yi(o){const t=p(o,{type:"INSTANCE"}),e=b(o,{type:"INSTANCE",name:"Label"}),_=b(o,{type:"INSTANCE",name:"Help Text"});return n("KRadio",{"v-model":"checked",label:e?.properties.Label||void 0,description:_?.properties.Text||void 0,cardRadioVisible:!1},t?[g(t)]:[])}function Si(o){const{Size:t}=o.properties,e={Default:void 0,Large:"large"}[t],_=N(o,{type:"INSTANCE",name:"Control Option"}).map(i=>{const{State:c}=i.properties,s=c==="Disabled"?!0:void 0,a=p(i,{type:"TEXT",name:"option"})?.characters||"";return v({label:a,value:L(a),disabled:s})}),r=_.every(i=>i.disabled)||void 0;return r&&_.forEach(i=>{i.disabled=void 0}),n("KSegmentedControl",{":v-model":"selected",options:_,size:e,disabled:r})}function Ti(o){const{"Show value":t,Placeholder:e,"Show icon left":_,"Icon left":r}=o.properties,i=t==="True"?void 0:e,c=_&&r?g(r):void 0,s=y(o);return n("KSelect",{"v-model":"value",":items":"items",placeholder:i,...s},c?[n("template",{"#before":!0},[c])]:void 0)}const Ci={Generic:"generic",Card:"card",Form:"form",Table:"table"},Ii="Skeleton Loader/(.*)";function D(o){const[,t]=o.name.match(Ii)||[],e=t&&Ci[t]||"generic";return n("KSkeleton",{type:e!=="generic"?e:void 0})}function O(o){const t=E(o,{type:"INSTANCE",name:"Tab"}),e=[],_=[];return t.forEach(r=>{const{State:i,"Show icon":c,Icon:s}=r.properties,a=i==="Disabled"?!0:void 0,u=p(r,{type:"TEXT",name:"label"})?.characters||"",l=L(u);c&&s&&e.push(n("template",{[`#${l}-anchor`]:!0},[g(s),u])),_.push(v({title:u||void 0,hash:`#${l}`,disabled:a}))}),n("KTabs",{"v-model":"tabs",tabs:_},e)}function Ai(o){const{"Show tabs":t}=o.properties,e=p(o,{type:"FRAME",name:"header"}),_=e&&p(e,{type:"FRAME",name:"title"}),r=(_&&b(_,{type:"TEXT"}))?.characters,i=t&&b(o,{type:"INSTANCE",name:"Tabs"})||null;return n("KSlideout",{":visible":"slideoutVisible",title:r},[...i?[O(i)]:[],P])}const Ni={Inactive:"default",Active:"active",Complete:"completed",Loading:"pending",Error:"error"};function Ei(o){const t=E(o,{type:"INSTANCE",name:"Parts/.Step Icon"}),e=E(o,_=>_.type==="TEXT"&&_.name.startsWith("Step")).map((_,r)=>{const i=t[r],{Appearance:c}=i.properties,s=Ni[c];return v({label:_.characters,state:s==="default"?void 0:s})});return n("KStepper",{steps:e})}function Fi(o){const{Size:t}=o.properties,e={Medium:"large",Small:"small"}[t];return n("KInputSwitch",{"v-model":"switchValue",label:R,labelBefore:!0,size:e==="small"?void 0:e})}function Bi(o){const{"Show value":t,Placeholder:e}=o.properties,_=t==="True"?void 0:e||void 0,r=y(o);return n("KTextArea",{"v-model":"value",placeholder:_,...r})}function Di(o){const{"Show title":t,Appearance:e}=o.properties,_={Info:"info",Success:"success",Warning:"warning",Error:"danger",System:"system"}[e],r=t&&o.properties[`${e} title`]||void 0,i=o.properties[`${e} desc`];return n("KToaster",{appearance:_==="info"?void 0:_,title:r,message:i})}const zi="#6c7489";function Li(o){const{Text:t}=o.properties;return n("KTooltip",{text:t})}function Ki(o){const{"Show tooltip":t}=o.properties,e=t&&p(o,{type:"INSTANCE",name:"Tooltip"}),_=e&&e.properties.Text||"...";return n("KTooltip",{text:_,":tooltip-id":"tooltipId"},[g({name:"info",type:"INSTANCE",properties:{},children:[]},{":aria-describedby":"tooltipId",":color":`var(--kui-color-text-neutral, ${zi})`,tabindex:"0"})])}function Pi(o){const t=E(o,{type:"INSTANCE",name:"Parts/.List Item"}),e=t.map(c=>p(c,{type:"INSTANCE",name:"Icon"})),_=t.map(c=>{const{Icon:s}=c.properties;return s}),r=[...new Map(_.map(c=>[c.name,c])).values()],i=n("template",{"#item-icon":"{ item }"},r.map((c,s)=>{const a=r.length===1?e.length===t.length?{}:{"v-if":"..."}:s===0?{"v-if":"..."}:s===r.length-1?{"v-else":"..."}:{"v-else-if":"..."};return g(c,a)}));return n("KTreeList",{":items":"items",hideIcons:e.length===0||void 0},r.length===1&&r[0].name==="document"?[]:[i])}const Ri={Alert:ri,Badge:ii,MethodBadge:ni,GlobalBreadcrumb:ci,Button:w,IconButton:w,IconOnly:w,Card:si,Checkbox:ai,CodeBlock:ui,CodeLine:li,Collapse:ki,DatePicker:di,Dropdown:pi,EmptyState:gi,FileUpload:fi,Input:bi,Label:M,Modal:mi,Multiselect:hi,Pagination:xi,Popover:vi,Radio:wi,RadioCard:yi,SegmentedControl:Si,Select:Ti,"SkeletonLoader/Generic":D,"SkeletonLoader/Card":D,"SkeletonLoader/Form":D,"SkeletonLoader/Table":D,Slideout:Ai,Stepper:Ei,Tabs:O,Switch:Fi,Textarea:Bi,Toast:Di,Tooltip:Li,InfoTooltip:Ki,TreeList:Pi},Mi=({component:o})=>{if(o.children.length===1&&o.children[0].type==="VECTOR")return g(o);const t=Ri[o.name.replaceAll(" ","")];return t?t(o):""},Oi={name:"Kong UI",code:{component:{title:"Component",lang:"vue",transformComponent:Mi},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:t}){return K(o,"scss")||(t?`var(--${o}, ${t})`:`var(--${o})`)}},js:{transformVariable({name:o,value:t}){const e=K(o,"js");return e?`\0${e}\0`:t?`var(--${o}, ${t})`:`var(--${o})`}}}};export{Oi as plugin};
