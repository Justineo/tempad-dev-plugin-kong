function yi(o){return o}function n(o,_,t){return{name:o,props:_||{},children:t||[]}}function D(o,_){return typeof _=="function"?_(o):!(_.type&&o.type!==_.type||_.name&&o.name!==_.name)}function b(o,_){return o.children.find(t=>D(t,_))??null}function B(o,_){return o.children.filter(t=>D(t,_))}function g(o,_){for(const t of o.children){if(D(t,_))return t;if("children"in t){const r=g(t,_);if(r)return r}}return null}function L(o){const{Appearance:_,"Show icon":t,"Show title":r,Title:e,"Show close":i}=o.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[_],a=t?!0:void 0,s=r?e:void 0,u=i?!0:void 0,l=i?!0:void 0,k=g(o,{type:"TEXT",name:"desc"});return n("KAlert",{appearance:c,showIcon:a,title:s,message:k?.characters,dismissible:u,onDismiss:l})}const K="#ffffff",M="#d60027",R="#ad000e",O="#850000",$="#5c0000",U="#ff3954",j="#ffabab",H="#ffe5e5",V="#6f28ff",X="#f1f0ff",q="#e0e4ea",J="#000933",W="#6c7489",G="#52596e",Y="#3a3f51",Q="#232633",Z="#afb7c5",oo="#e0e4ea",_o="#f9fafb",to="rgba(0, 9, 51, 0.6)",eo="#0044f4",ro="#0030cc",io="#002099",no="#001466",co="#5f9aff",so="#bee2ff",ao="#eefaff",uo="#00d6a4",lo="#ecfffb",ko="transparent",po="#ffc400",go="#fffce0",fo="#e0e4ea",bo="#d60027",mo="#ad000e",ho="#850000",xo="#5c0000",vo="#ff3954",wo="#ffabab",yo="#ffe5e5",Co="#6f28ff",So="#e0e4ea",To="rgba(255, 255, 255, 0.2)",Io="#afb7c5",Fo="#e0e4ea",Bo="#0044f4",Ao="#0030cc",No="#002099",Do="#001466",zo="#5f9aff",Eo="#bee2ff",Po="#eefaff",Lo="transparent",Ko="#000933",Mo="#d60027",Ro="#ad000e",Oo="#00abd2",$o="#d60067",Uo="#6f28ff",jo="#5e00f5",Ho="#afb7c5",Vo="#ffffff",Xo="#6c7489",qo="#52596e",Jo="#3a3f51",Wo="#232633",Go="#afb7c5",Yo="#e0e4ea",Qo="#0044f4",Zo="#0030cc",o_="#002099",__="#001466",t_="#5f9aff",e_="#007d60",r_="#005944",i_="#995c00",n_="#804400",c_="0.2s",s_="0px",a_="2px",u_="4px",l_="6px",k_="8px",d_="10px",p_="50%",g_="100px",f_="0px",b_="1px",m_="2px",h_="4px",x_="640px",v_="768px",w_="1024px",y_="1280px",C_="1536px",S_="#f50045",T_="#828a9e",I_="#306fff",F_="#00a17b",B_="#ffc400",A_="10px",N_="12px",D_="16px",z_="20px",E_="24px",P_="32px",L_="40px",K_="48px",M_="#f1f0ff",R_="#ffe5e5",O_="#eefaff",$_="#52596e",U_="#e0e4ea",j_="#ecfcff",H_="#ecfffb",V_="#fffce0",X_="#fff0f7",q_="#6f28ff",J_="#5e00f5",W_="#d60027",G_="#ad000e",Y_="#0044f4",Q_="#0030cc",Z_="#e0e4ea",ot="#afb7c5",_t="#52596e",tt="#3a3f51",et="#00819d",rt="#00647a",it="#007d60",nt="#005944",ct="#995c00",st="#804400",at="#d60067",ut="#ad0053",lt="#000933",kt="rgba(255, 255, 255, 0.12)",dt="rgba(255, 255, 255, 0.12)",pt="#00fabe",gt="rgba(255, 255, 255, 0.24)",ft="#bee2ff",bt="#ffffff",mt="#eefaff",ht="#00fabe",xt="0 0 0 1px rgba(255, 255, 255, 0.12) inset",vt="4px 0 0 0 #00fabe inset",wt="0 0 0 1px rgba(255, 255, 255, 0.60) inset",yt="#bee2ff",Ct="#8fc1ff",St="#5f9aff",Tt="#306fff",It="#b5ffee",Ft="#00fabe",Bt="#00d6a4",At="#00a17b",Nt="#007d60",Dt="#005944",zt="#b5ffee",Et="#00fabe",Pt="#b5ffee",Lt="#00a17b",Kt="#fff296",Mt="#ffe04b",Rt="#ffc400",Ot="#b37600",$t="#995c00",Ut="#804400",jt="#fff296",Ht="#ffe04b",Vt="#FFC2B3",Xt="#FF9877",qt="#FF723C",Jt="#F75008",Wt="#D13500",Gt="#A31F00",Yt="#FFC2B3",Qt="#FF9877",Zt="#FF723C",oe="#F75008",_e="#D13500",te="#A31F00",ee="#FFC2B3",re="#FF9877",ie="#FF723C",ne="#F75008",ce="#D13500",se="#A31F00",ae="#FFC2B3",ue="#FF9877",le="#FF723C",ke="#F75008",de="#D13500",pe="#A31F00",ge="#FFC2B3",fe="#FF9877",be="#FF723C",me="#F75008",he="#D13500",xe="#ffabab",ve="#ff7272",we="#ff3954",ye="#f50045",Ce="#d60027",Se="#ad000e",Te="#ffabab",Ie="#ff7272",Fe="#ff3954",Be="#f50045",Ae="#d60027",Ne="#eefaff",De="#ecfffb",ze="#fffce0",Ee="#FFF1EF",Pe="#ffe5e5",Le="#5f9aff",Ke="#00d6a4",Me="#ffc400",Re="#FF723C",Oe="#ff3954",$e="'JetBrains Mono', Consolas, monospace",Ue="'Inter', Roboto, Helvetica, sans-serif",je="'Inter', Roboto, Helvetica, sans-serif",He="10px",Ve="12px",Xe="14px",qe="16px",Je="18px",We="20px",Ge="24px",Ye="32px",Qe="40px",Ze="48px",or="700",_r="500",tr="400",er="600",rr="normal",ir="-0.12px",nr="-0.24px",cr="-0.32px",sr="-0.4px",ar="-0.48px",ur="normal",lr="12px",kr="16px",dr="20px",pr="24px",gr="28px",fr="32px",br="36px",mr="40px",hr="48px",xr="56px",vr="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",wr="0px 0px 0px 1px #e0e4ea inset",yr="0px 0px 0px 1px #d60027 inset",Cr="0px 0px 0px 1px #ad000e inset",Sr="0px 0px 0px 1px #e0e4ea inset",Tr="0px 0px 0px 1px #0044f4 inset",Ir="0px 0px 0px 1px #001466 inset",Fr="0px 0px 0px 1px #5f9aff inset",Br="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",Ar="0px",Nr="2px",Dr="4px",zr="6px",Er="8px",Pr="12px",Lr="16px",Kr="20px",Mr="24px",Rr="32px",Or="40px",$r="48px",Ur="56px",jr="64px",Hr="80px",Vr="96px",Xr="auto",qr={kui_color_background:K,kui_color_background_danger:M,kui_color_background_danger_strong:R,kui_color_background_danger_stronger:O,kui_color_background_danger_strongest:$,kui_color_background_danger_weak:U,kui_color_background_danger_weaker:j,kui_color_background_danger_weakest:H,kui_color_background_decorative_purple:V,kui_color_background_decorative_purple_weakest:X,kui_color_background_disabled:q,kui_color_background_inverse:J,kui_color_background_neutral:W,kui_color_background_neutral_strong:G,kui_color_background_neutral_stronger:Y,kui_color_background_neutral_strongest:Q,kui_color_background_neutral_weak:Z,kui_color_background_neutral_weaker:oo,kui_color_background_neutral_weakest:_o,kui_color_background_overlay:to,kui_color_background_primary:eo,kui_color_background_primary_strong:ro,kui_color_background_primary_stronger:io,kui_color_background_primary_strongest:no,kui_color_background_primary_weak:co,kui_color_background_primary_weaker:so,kui_color_background_primary_weakest:ao,kui_color_background_success_weak:uo,kui_color_background_success_weakest:lo,kui_color_background_transparent:ko,kui_color_background_warning_weak:po,kui_color_background_warning_weakest:go,kui_color_border:fo,kui_color_border_danger:bo,kui_color_border_danger_strong:mo,kui_color_border_danger_stronger:ho,kui_color_border_danger_strongest:xo,kui_color_border_danger_weak:vo,kui_color_border_danger_weaker:wo,kui_color_border_danger_weakest:yo,kui_color_border_decorative_purple:Co,kui_color_border_disabled:So,kui_color_border_inverse:To,kui_color_border_neutral_weak:Io,kui_color_border_neutral_weaker:Fo,kui_color_border_primary:Bo,kui_color_border_primary_strong:Ao,kui_color_border_primary_stronger:No,kui_color_border_primary_strongest:Do,kui_color_border_primary_weak:zo,kui_color_border_primary_weaker:Eo,kui_color_border_primary_weakest:Po,kui_color_border_transparent:Lo,kui_color_text:Ko,kui_color_text_danger:Mo,kui_color_text_danger_strong:Ro,kui_color_text_decorative_aqua:Oo,kui_color_text_decorative_pink:$o,kui_color_text_decorative_purple:Uo,kui_color_text_decorative_purple_strong:jo,kui_color_text_disabled:Ho,kui_color_text_inverse:Vo,kui_color_text_neutral:Xo,kui_color_text_neutral_strong:qo,kui_color_text_neutral_stronger:Jo,kui_color_text_neutral_strongest:Wo,kui_color_text_neutral_weak:Go,kui_color_text_neutral_weaker:Yo,kui_color_text_primary:Qo,kui_color_text_primary_strong:Zo,kui_color_text_primary_stronger:o_,kui_color_text_primary_strongest:__,kui_color_text_primary_weak:t_,kui_color_text_success:e_,kui_color_text_success_strong:r_,kui_color_text_warning:i_,kui_color_text_warning_strong:n_,kui_animation_duration_20:c_,kui_border_radius_0:s_,kui_border_radius_10:a_,kui_border_radius_20:u_,kui_border_radius_30:l_,kui_border_radius_40:k_,kui_border_radius_50:d_,kui_border_radius_circle:p_,kui_border_radius_round:g_,kui_border_width_0:f_,kui_border_width_10:b_,kui_border_width_20:m_,kui_border_width_30:h_,kui_breakpoint_mobile:x_,kui_breakpoint_phablet:v_,kui_breakpoint_tablet:w_,kui_breakpoint_laptop:y_,kui_breakpoint_desktop:C_,kui_icon_color_danger:S_,kui_icon_color_neutral:T_,kui_icon_color_primary:I_,kui_icon_color_success:F_,kui_icon_color_warning:B_,kui_icon_size_10:A_,kui_icon_size_20:N_,kui_icon_size_30:D_,kui_icon_size_40:z_,kui_icon_size_50:E_,kui_icon_size_60:P_,kui_icon_size_70:L_,kui_icon_size_80:K_,kui_method_color_background_connect:M_,kui_method_color_background_delete:R_,kui_method_color_background_get:O_,kui_method_color_background_head:$_,kui_method_color_background_options:U_,kui_method_color_background_patch:j_,kui_method_color_background_post:H_,kui_method_color_background_put:V_,kui_method_color_background_trace:X_,kui_method_color_text_connect:q_,kui_method_color_text_connect_strong:J_,kui_method_color_text_delete:W_,kui_method_color_text_delete_strong:G_,kui_method_color_text_get:Y_,kui_method_color_text_get_strong:Q_,kui_method_color_text_head:Z_,kui_method_color_text_head_strong:ot,kui_method_color_text_options:_t,kui_method_color_text_options_strong:tt,kui_method_color_text_patch:et,kui_method_color_text_patch_strong:rt,kui_method_color_text_post:it,kui_method_color_text_post_strong:nt,kui_method_color_text_put:ct,kui_method_color_text_put_strong:st,kui_method_color_text_trace:at,kui_method_color_text_trace_strong:ut,kui_navigation_color_background:lt,kui_navigation_color_background_selected:kt,kui_navigation_color_border:dt,kui_navigation_color_border_child:pt,kui_navigation_color_border_divider:gt,kui_navigation_color_text:ft,kui_navigation_color_text_focus:bt,kui_navigation_color_text_hover:mt,kui_navigation_color_text_selected:ht,kui_navigation_shadow_border:xt,kui_navigation_shadow_border_child:vt,kui_navigation_shadow_focus:wt,kui_status_color_100:yt,kui_status_color_101:Ct,kui_status_color_102:St,kui_status_color_103:Tt,kui_status_color_200:It,kui_status_color_201:Ft,kui_status_color_202:Bt,kui_status_color_203:At,kui_status_color_204:Nt,kui_status_color_205:Dt,kui_status_color_206:zt,kui_status_color_207:Et,kui_status_color_208:Pt,kui_status_color_226:Lt,kui_status_color_300:Kt,kui_status_color_301:Mt,kui_status_color_302:Rt,kui_status_color_303:Ot,kui_status_color_304:$t,kui_status_color_305:Ut,kui_status_color_307:jt,kui_status_color_308:Ht,kui_status_color_400:Vt,kui_status_color_401:Xt,kui_status_color_402:qt,kui_status_color_403:Jt,kui_status_color_404:Wt,kui_status_color_405:Gt,kui_status_color_406:Yt,kui_status_color_407:Qt,kui_status_color_408:Zt,kui_status_color_409:oe,kui_status_color_410:_e,kui_status_color_411:te,kui_status_color_412:ee,kui_status_color_413:re,kui_status_color_414:ie,kui_status_color_415:ne,kui_status_color_416:ce,kui_status_color_417:se,kui_status_color_418:ae,kui_status_color_421:ue,kui_status_color_422:le,kui_status_color_423:ke,kui_status_color_424:de,kui_status_color_425:pe,kui_status_color_426:ge,kui_status_color_428:fe,kui_status_color_429:be,kui_status_color_431:me,kui_status_color_451:he,kui_status_color_500:xe,kui_status_color_501:ve,kui_status_color_502:we,kui_status_color_503:ye,kui_status_color_504:Ce,kui_status_color_505:Se,kui_status_color_506:Te,kui_status_color_507:Ie,kui_status_color_508:Fe,kui_status_color_510:Be,kui_status_color_511:Ae,kui_status_color_1na:Ne,kui_status_color_2na:De,kui_status_color_3na:ze,kui_status_color_4na:Ee,kui_status_color_5na:Pe,kui_status_color_100s:Le,kui_status_color_200s:Ke,kui_status_color_300s:Me,kui_status_color_400s:Re,kui_status_color_500s:Oe,kui_font_family_code:$e,kui_font_family_heading:Ue,kui_font_family_text:je,kui_font_size_10:He,kui_font_size_20:Ve,kui_font_size_30:Xe,kui_font_size_40:qe,kui_font_size_50:Je,kui_font_size_60:We,kui_font_size_70:Ge,kui_font_size_80:Ye,kui_font_size_90:Qe,kui_font_size_100:Ze,kui_font_weight_bold:or,kui_font_weight_medium:_r,kui_font_weight_regular:tr,kui_font_weight_semibold:er,kui_letter_spacing_0:rr,kui_letter_spacing_minus_10:ir,kui_letter_spacing_minus_20:nr,kui_letter_spacing_minus_30:cr,kui_letter_spacing_minus_40:sr,kui_letter_spacing_minus_50:ar,kui_letter_spacing_normal:ur,kui_line_height_10:lr,kui_line_height_20:kr,kui_line_height_30:dr,kui_line_height_40:pr,kui_line_height_50:gr,kui_line_height_60:fr,kui_line_height_70:br,kui_line_height_80:mr,kui_line_height_90:hr,kui_line_height_100:xr,kui_shadow:vr,kui_shadow_border:wr,kui_shadow_border_danger:yr,kui_shadow_border_danger_strong:Cr,kui_shadow_border_disabled:Sr,kui_shadow_border_primary:Tr,kui_shadow_border_primary_strongest:Ir,kui_shadow_border_primary_weak:Fr,kui_shadow_focus:Br,kui_space_0:Ar,kui_space_10:Nr,kui_space_20:Dr,kui_space_30:zr,kui_space_40:Er,kui_space_50:Pr,kui_space_60:Lr,kui_space_70:Kr,kui_space_80:Mr,kui_space_90:Rr,kui_space_100:Or,kui_space_110:$r,kui_space_120:Ur,kui_space_130:jr,kui_space_140:Hr,kui_space_150:Vr,kui_space_auto:Xr};function Jr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Wr(o){return o.replace(/-([a-z])/g,(_,t)=>t.toUpperCase())}function Gr(o){return Jr(Wr(o))}function Yr(o){return o.toUpperCase().replace(/-/g,"_")}function f(o,_={}){return n(`${Gr(o.name)}Icon`,_)}const Qr=new Set(Object.keys(qr).map(o=>o.substring(4).replaceAll("_","-")));function z(o){const _=o.split("-");for(;_.length;){const t=_.join("-");if(Qr.has(t))return t;_.shift()}return null}function Zr(o,_){const t={},r=typeof _=="function"?_:e=>_[e]??e;for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)){const i=r(e);t[i]=o[e]}return t}function A(o){return JSON.parse(JSON.stringify(o))}const oi="Lorem ipsum",E="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function _i(o){const{Appearance:_,"Show icon left":t,"Icon left":r,"Show icon right":e,"Icon right":i,Label:c}=o.properties,a={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[_],s=e&&!t?!1:void 0,u=t?r:e?i:void 0;return n("Badge",{appearance:a,iconBefore:s},[c,...u?[n("template",{"#icon":!0},[f(u)])]:[]])}function ti(o){const{Method:_}=o.properties,t={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[_];return n("KBadge",{appearance:t},_?[_]:[])}function ei(o){const _=B(o,e=>e.type==="INSTANCE"&&e.name.startsWith("Level ")).map((e,i)=>{const{Icon:c,"Show icon":a,Text:s}=e.properties;return{item:{text:s||void 0,key:`level-${i}`},icon:a?c:void 0}}),t=_.map(({item:e})=>A(e)),r=_.map(({icon:e},i)=>{if(e)return n("template",{[`#icon-level-${i}`]:!0},[f(e)])}).filter(e=>e!=null);return n("KBreadcrumbs",{items:t},r)}function v(o){const{Appearance:_,Size:t,State:r,Label:e,Position:i,Icon:c,"Icon danger":a,"Icon left":s,"Icon right":u}=o.properties,l={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[_],k={Small:"small",Medium:void 0,Large:"large"}[t],d=r==="Disabled"||void 0;let p=[];return o.name==="Button"?p=[e]:o.name==="Icon Button"?i==="Left"?p=[f(_==="Danger"?a:s),e]:i==="Right"&&(p=[e,f(u)]):o.name==="Icon Only"&&(p=[f(_==="Danger"?a:c)]),n("KButton",{appearance:l,size:k,disabled:d,onClick:!0},p)}function ri(o){const _=g(o,{type:"TEXT",name:"title"}),t=g(o,{type:"TEXT",name:"desc"});return n("KCard",{title:_?.characters},t?.characters?[t.characters]:[])}function P(o){const{Label:_,"Show required":t,"Show tooltip":r}=o.properties,e={};t&&(e.required=!0);const i=b(o,{type:"INSTANCE",name:"Tooltip"});if(r&&i){e.info="...";const{"Show tooltip":c}=i.properties,a=b(i,{type:"INSTANCE",name:"Tooltip"});if(c&&a){const{Text:s}=a.properties;s&&(e.info=s)}}return n("KLabel",e,[_])}function I(o,_){const{State:t,"Show label":r,"Show help text":e}=o.properties;let i,c;const a=g(o,{type:"INSTANCE",name:"Label"});r&&a&&(c=P(a));const s=g(o,d=>d.type==="INSTANCE"&&["Parts/.Help Text","Help text"].includes(d.name));if(e&&s){const{Text:d}=s.properties;d&&(i=d)}const{required:u,...l}=c?c.props:{},k={label:c?c.children[0]:void 0,labelAttributes:Object.keys(l).length>0?l:void 0,required:u,help:i,error:t==="Error"?!0:void 0,disabled:t==="Disabled"?!0:void 0};return _?Zr(k,_):k}function ii(o){const{Type:_}=o.properties,t=_==="Indeterminate"?!0:void 0,{required:r,label:e,labelAttributes:i,...c}=I(o,{help:"description"});return n("KCheckbox",{"v-model":"checked",indeterminate:t,label:e,labelAttributes:A({...i,required:r}),...c})}function ni(o){const{Theme:_,"Show functions":t,"Show copy":r,"Show alt action":e}=o.properties,i={Light:void 0,Dark:"dark"}[_],c=t?!0:void 0,a=r===!1?!1:void 0;let s,u=!1;const l=g(o,{type:"INSTANCE",name:"Icon Button"});if(e&&l){const{"Icon left":k,Label:d}=l.properties,p=[];k&&(k.name==="copy"&&(u=!0),p.push(f(k))),d&&p.push(d),p.length>0&&(s=n("template",{"#secondary-actions":!0},[n("CodeBlockIconButton",{theme:i,copyTooltip:u?"Copy...":void 0,onClick:"() => {}"},p)]))}return n("KCodeBlock",{id:"...",":code":"code",theme:i,language:"json",searchable:c,showCopyButton:a},s?[s]:[])}function ci(o){const{Theme:_}=o.properties,t={Light:void 0,Dark:"dark"}[_];return n("CodeBlock",{":code":"code",theme:t,singleLine:!0})}function si(o){const{"Show link":_}=o.properties,t=g(o,{type:"TEXT",name:"link"}),r=_&&t?.characters||void 0;return n("KCollapse",{"v-model":"isCollapsed",triggerLabel:r},[E])}function ai(o){const{Appearance:_}=o.properties,t={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime",Months:"UNSUPPORTED",Years:"UNSUPPORTED","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[_],r=_.startsWith("Range")||void 0;return n("KDateTimePicker",{"v-model":"currentValue",mode:t,range:r})}function ui(o){const _=B(o,{type:"INSTANCE",name:"Dropdown Option"}).map(t=>{const{State:r,"Show left icon":e,"Left icon":i,Label:c}=t.properties,a=r==="Selected"?!0:void 0,s=r==="Disabled"?!0:void 0,u=r==="Danger"?!0:void 0,l=e&&i?f(i):void 0;return A({label:c,selected:a,disabled:s,danger:u,icon:l})});return _.some(t=>t.icon)?n("KDropdown",{},[n("template",{"#items":!0},[..._.map(({icon:t,label:r,...e})=>n("KDropdownItem",e,t?[t,r]:[r]))])]):n("KDropdown",{items:_})}function li(o){const{"Show icon":_,Icon:t,Title:r,Description:e,"Show button":i}=o.properties,c=g(o,{type:"INSTANCE",name:"Button"}),a=r||void 0,s=e||void 0,{Appearance:u,Label:l,State:k}=c?c.properties:{},d=i&&c&&u==="Primary",p=d?l:void 0,y=i?void 0:!1,N=d&&k==="Disabled"?!0:void 0;let x,C;_&&t&&(x={analytics:"default",warning:"error",search:"search",kong:"kong"}[t.name],x?x==="default"&&(x=void 0):C=t);const S=[];if(C&&S.push(n("template",{"#icon":!0},[f(C)])),i&&!d){const T=B(o,m=>m.type==="INSTANCE"&&["Icon Only","Icon Button","Button"].includes(m.name));T&&S.push(n("template",{"#action":!0},T.map(v)))}return n("KEmptyState",{title:a,message:s,iconVariant:x,actionButtonText:p,actionButtonVisible:y,actionButtonDisabled:N},S)}function ki(o){const{"Show value":_,Placeholder:t,"Show icon left":r,"Icon left":e}=o.properties,i=_==="True"?void 0:t,c=r&&e?f(e):void 0,a=b(o,{type:"FRAME",name:"input"}),s=a?b(a,{type:"INSTANCE",name:"Button"}):void 0,u=s?s.properties.Label:void 0,l=I(o);return n("KFileUpload",{placeholder:i,buttonText:u!=="Select file"?u:void 0,...l,onFileAdded:"files => {}",onFileRemoved:"files => {}"},c?[n("template",{"#icon":!0},[c])]:void 0)}function di(o){const{State:_,"Show value":t,Placeholder:r,"Show icon left":e,"Icon left":i,"Show icon right":c,"Icon right":a}=o.properties,s=t==="True"?void 0:r||void 0,u=e&&i?n("template",{"#before":!0},[f(i)]):void 0,l=c&&a?n("template",{"#after":!0},[f(a,{role:"button",tabindex:"0",onClick:!0})]):void 0,k=I(o),d=k.label==="Password",p=a?.name==="visibility"||a?.name==="visibility-off";return n("KInput",{"v-model":"value",type:d||p?"password":void 0,showPasswordMaskToggle:p||void 0,placeholder:s,...k,readonly:_==="Readonly"||void 0},[u,l].filter(y=>y!=null))}function pi(o){const _=b(o,{type:"INSTANCE",name:"Modal Header"}),{"Show icon":t,Icon:r}=_?_.properties:{};let e=oi,i=!1;_&&(e=b(_,{type:"TEXT",name:"Modal title"})?.characters||e,i=!b(_,{type:"INSTANCE",name:"close"}));const c=t&&r?n("template",{"#title":!0},[f(r),e]):void 0,a=b(o,{type:"INSTANCE",name:"Modal Footer"}),s={},u={};let l;if(a){const T=b(a,{type:"FRAME",name:"right"}),m=T?B(T,{type:"INSTANCE",name:"Button"}):[];if(!m.length)l=[];else if(m.length===1){const h=v(m[0]);Object.assign(s,h.props),typeof h.children[0]=="string"?s.label=h.children[0]:l=[h],u.hide=!0}else if(m.length===2){const[h,F]=m.map(v);Object.assign(s,F.props),Object.assign(u,h.props),typeof F.children[0]=="string"&&typeof h.children[0]=="string"?(s.label=F.children[0],u.label=h.children[0]):l=[h,F]}else l=m.map(v)}const k=l?n("template",{"#footer-actions":!0},l):void 0,d=w(s,"label","Submit"),p=w(s,"appearance","primary"),y=w(s,"disabled",!1),N=w(u,"label","Cancel"),x=w(u,"appearance","tertiary"),C=w(u,"disabled",!1),S=w(u,"hide",!1);return n("KModal",{":visible":"modalVisible",title:c?void 0:e,actionButtonText:d,actionButtonAppearance:p,actionButtonDisabled:y,cancelButtonText:N,cancelButtonAppearance:x,cancelButtonDisabled:C,hideCancelButton:S,hideCloseIcon:i||void 0},[...c?[c]:[],E,...k?[k]:[]])}function w(o,_,t){const r=o[_];return r===t?void 0:r||void 0}function gi(o){const{"Show value":_,Placeholder:t}=o.properties,r=_==="True"?void 0:t,e=I(o);return n("KMultiselect",{"v-model":"value",":items":"items",placeholder:r,...e},[])}function fi(o){const{"Show pages":_}=o.properties,t=!!b(o,{type:"INSTANCE",name:"Parts/.Pagination Text"});return n("KPagination",{":total-count":"total",":current-page":"page",offset:!_&&!t||void 0,disablePageJump:!_&&t||void 0})}function bi(o){const{Text:_,Heading:t}=o.properties,r=g(o,{type:"FRAME",name:"title"}),e=g(o,{type:"INSTANCE",name:"close"});return n("KPopover",{title:r&&t||void 0,hideCloseIcon:!e||void 0},[n("template",{"#content":!0},[_])])}function mi(o){const{required:_,label:t,labelAttributes:r,...e}=I(o,{help:"description"});return n("KRadio",{"v-model":"checked",label:t,labelAttributes:A({...r,required:_}),...e})}function hi(o){const _=b(o,{type:"INSTANCE"}),t=g(o,{type:"INSTANCE",name:"Label"}),r=g(o,{type:"INSTANCE",name:"Help Text"});return n("KRadio",{"v-model":"checked",label:t?.properties.Label||void 0,description:r?.properties.Text||void 0,cardRadioVisible:!1},_?[f(_)]:[])}const xi={Alert:L,Badge:_i,MethodBadge:ti,GlobalBreadcrumb:ei,Button:v,IconButton:v,IconOnly:v,Card:ri,Checkbox:ii,CodeBlock:ni,CodeLine:ci,Collapse:si,DatePicker:ai,Dropdown:ui,EmptyState:li,FileUpload:ki,Input:di,Label:P,Modal:pi,Multiselect:gi,Pagination:fi,Popover:bi,Radio:mi,RadioCard:hi},vi=({component:o})=>{const _=xi[o.name.replaceAll(" ","")];return _?_(o):""},wi={name:"Kong UI Advanced",code:{component:{title:"Component",lang:"vue",transformComponent:vi},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:_}){const t=z(o)?.toLowerCase();return t?`var(--kui-${t}, $kui-${t})`:_?`var(--${o}, ${_})`:`var(--${o})`}},js:{transformVariable({name:o,value:_}){const t=z(o);return t?`var(--kui-${t.toLowerCase()}, \0KUI_${Yr(t)}\0)`:_?`var(--${o}, ${_})`:`var(--${o})`}}}};export{wi as plugin};
