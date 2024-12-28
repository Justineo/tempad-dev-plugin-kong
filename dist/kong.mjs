function gi(o){return o}function s(o,_,t){return{name:o,props:_||{},children:t||[]}}function C(o,_){return typeof _=="function"?_(o):!(_.type&&o.type!==_.type||_.name&&o.name!==_.name)}function h(o,_){return o.children.find(t=>C(t,_))??null}function w(o,_){return o.children.filter(t=>C(t,_))}function f(o,_){for(const t of o.children){if(C(t,_))return t;if("children"in t){const i=f(t,_);if(i)return i}}return null}function N(o){const{Appearance:_,"Show icon":t,"Show title":i,Title:e,"Show close":r}=o.properties,n={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[_],c=t?!0:void 0,u=i?e:void 0,a=r?!0:void 0,d=r?!0:void 0,p=f(o,{type:"TEXT",name:"desc"});return s("KAlert",{appearance:n,showIcon:c,title:u,message:p?.characters,dismissible:a,onDismiss:d})}const E="#ffffff",L="#d60027",K="#ad000e",P="#850000",M="#5c0000",O="#ff3954",$="#ffabab",R="#ffe5e5",U="#6f28ff",j="#f1f0ff",H="#e0e4ea",V="#000933",X="#6c7489",W="#52596e",J="#3a3f51",q="#232633",G="#afb7c5",Q="#e0e4ea",Y="#f9fafb",Z="rgba(0, 9, 51, 0.6)",oo="#0044f4",_o="#0030cc",to="#002099",eo="#001466",ro="#5f9aff",io="#bee2ff",no="#eefaff",co="#00d6a4",so="#ecfffb",uo="transparent",ao="#ffc400",lo="#fffce0",ko="#e0e4ea",po="#d60027",go="#ad000e",fo="#850000",bo="#5c0000",ho="#ff3954",mo="#ffabab",xo="#ffe5e5",wo="#6f28ff",vo="#e0e4ea",yo="rgba(255, 255, 255, 0.2)",Co="#afb7c5",So="#e0e4ea",Fo="#0044f4",Io="#0030cc",To="#002099",zo="#001466",Bo="#5f9aff",Do="#bee2ff",Ao="#eefaff",No="transparent",Eo="#000933",Lo="#d60027",Ko="#ad000e",Po="#00abd2",Mo="#d60067",Oo="#6f28ff",$o="#5e00f5",Ro="#afb7c5",Uo="#ffffff",jo="#6c7489",Ho="#52596e",Vo="#3a3f51",Xo="#232633",Wo="#afb7c5",Jo="#e0e4ea",qo="#0044f4",Go="#0030cc",Qo="#002099",Yo="#001466",Zo="#5f9aff",o_="#007d60",__="#005944",t_="#995c00",e_="#804400",r_="0.2s",i_="0px",n_="2px",c_="4px",s_="6px",u_="8px",a_="10px",l_="50%",k_="100px",d_="0px",p_="1px",g_="2px",f_="4px",b_="640px",h_="768px",m_="1024px",x_="1280px",w_="1536px",v_="#f50045",y_="#828a9e",C_="#306fff",S_="#00a17b",F_="#ffc400",I_="10px",T_="12px",z_="16px",B_="20px",D_="24px",A_="32px",N_="40px",E_="48px",L_="#f1f0ff",K_="#ffe5e5",P_="#eefaff",M_="#52596e",O_="#e0e4ea",$_="#ecfcff",R_="#ecfffb",U_="#fffce0",j_="#fff0f7",H_="#6f28ff",V_="#5e00f5",X_="#d60027",W_="#ad000e",J_="#0044f4",q_="#0030cc",G_="#e0e4ea",Q_="#afb7c5",Y_="#52596e",Z_="#3a3f51",ot="#00819d",_t="#00647a",tt="#007d60",et="#005944",rt="#995c00",it="#804400",nt="#d60067",ct="#ad0053",st="#000933",ut="rgba(255, 255, 255, 0.12)",at="rgba(255, 255, 255, 0.12)",lt="#00fabe",kt="rgba(255, 255, 255, 0.24)",dt="#bee2ff",pt="#ffffff",gt="#eefaff",ft="#00fabe",bt="0 0 0 1px rgba(255, 255, 255, 0.12) inset",ht="4px 0 0 0 #00fabe inset",mt="0 0 0 1px rgba(255, 255, 255, 0.60) inset",xt="#bee2ff",wt="#8fc1ff",vt="#5f9aff",yt="#306fff",Ct="#b5ffee",St="#00fabe",Ft="#00d6a4",It="#00a17b",Tt="#007d60",zt="#005944",Bt="#b5ffee",Dt="#00fabe",At="#b5ffee",Nt="#00a17b",Et="#fff296",Lt="#ffe04b",Kt="#ffc400",Pt="#b37600",Mt="#995c00",Ot="#804400",$t="#fff296",Rt="#ffe04b",Ut="#FFC2B3",jt="#FF9877",Ht="#FF723C",Vt="#F75008",Xt="#D13500",Wt="#A31F00",Jt="#FFC2B3",qt="#FF9877",Gt="#FF723C",Qt="#F75008",Yt="#D13500",Zt="#A31F00",oe="#FFC2B3",_e="#FF9877",te="#FF723C",ee="#F75008",re="#D13500",ie="#A31F00",ne="#FFC2B3",ce="#FF9877",se="#FF723C",ue="#F75008",ae="#D13500",le="#A31F00",ke="#FFC2B3",de="#FF9877",pe="#FF723C",ge="#F75008",fe="#D13500",be="#ffabab",he="#ff7272",me="#ff3954",xe="#f50045",we="#d60027",ve="#ad000e",ye="#ffabab",Ce="#ff7272",Se="#ff3954",Fe="#f50045",Ie="#d60027",Te="#eefaff",ze="#ecfffb",Be="#fffce0",De="#FFF1EF",Ae="#ffe5e5",Ne="#5f9aff",Ee="#00d6a4",Le="#ffc400",Ke="#FF723C",Pe="#ff3954",Me="'JetBrains Mono', Consolas, monospace",Oe="'Inter', Roboto, Helvetica, sans-serif",$e="'Inter', Roboto, Helvetica, sans-serif",Re="10px",Ue="12px",je="14px",He="16px",Ve="18px",Xe="20px",We="24px",Je="32px",qe="40px",Ge="48px",Qe="700",Ye="500",Ze="400",or="600",_r="normal",tr="-0.12px",er="-0.24px",rr="-0.32px",ir="-0.4px",nr="-0.48px",cr="normal",sr="12px",ur="16px",ar="20px",lr="24px",kr="28px",dr="32px",pr="36px",gr="40px",fr="48px",br="56px",hr="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",mr="0px 0px 0px 1px #e0e4ea inset",xr="0px 0px 0px 1px #d60027 inset",wr="0px 0px 0px 1px #ad000e inset",vr="0px 0px 0px 1px #e0e4ea inset",yr="0px 0px 0px 1px #0044f4 inset",Cr="0px 0px 0px 1px #001466 inset",Sr="0px 0px 0px 1px #5f9aff inset",Fr="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",Ir="0px",Tr="2px",zr="4px",Br="6px",Dr="8px",Ar="12px",Nr="16px",Er="20px",Lr="24px",Kr="32px",Pr="40px",Mr="48px",Or="56px",$r="64px",Rr="80px",Ur="96px",jr="auto",Hr={kui_color_background:E,kui_color_background_danger:L,kui_color_background_danger_strong:K,kui_color_background_danger_stronger:P,kui_color_background_danger_strongest:M,kui_color_background_danger_weak:O,kui_color_background_danger_weaker:$,kui_color_background_danger_weakest:R,kui_color_background_decorative_purple:U,kui_color_background_decorative_purple_weakest:j,kui_color_background_disabled:H,kui_color_background_inverse:V,kui_color_background_neutral:X,kui_color_background_neutral_strong:W,kui_color_background_neutral_stronger:J,kui_color_background_neutral_strongest:q,kui_color_background_neutral_weak:G,kui_color_background_neutral_weaker:Q,kui_color_background_neutral_weakest:Y,kui_color_background_overlay:Z,kui_color_background_primary:oo,kui_color_background_primary_strong:_o,kui_color_background_primary_stronger:to,kui_color_background_primary_strongest:eo,kui_color_background_primary_weak:ro,kui_color_background_primary_weaker:io,kui_color_background_primary_weakest:no,kui_color_background_success_weak:co,kui_color_background_success_weakest:so,kui_color_background_transparent:uo,kui_color_background_warning_weak:ao,kui_color_background_warning_weakest:lo,kui_color_border:ko,kui_color_border_danger:po,kui_color_border_danger_strong:go,kui_color_border_danger_stronger:fo,kui_color_border_danger_strongest:bo,kui_color_border_danger_weak:ho,kui_color_border_danger_weaker:mo,kui_color_border_danger_weakest:xo,kui_color_border_decorative_purple:wo,kui_color_border_disabled:vo,kui_color_border_inverse:yo,kui_color_border_neutral_weak:Co,kui_color_border_neutral_weaker:So,kui_color_border_primary:Fo,kui_color_border_primary_strong:Io,kui_color_border_primary_stronger:To,kui_color_border_primary_strongest:zo,kui_color_border_primary_weak:Bo,kui_color_border_primary_weaker:Do,kui_color_border_primary_weakest:Ao,kui_color_border_transparent:No,kui_color_text:Eo,kui_color_text_danger:Lo,kui_color_text_danger_strong:Ko,kui_color_text_decorative_aqua:Po,kui_color_text_decorative_pink:Mo,kui_color_text_decorative_purple:Oo,kui_color_text_decorative_purple_strong:$o,kui_color_text_disabled:Ro,kui_color_text_inverse:Uo,kui_color_text_neutral:jo,kui_color_text_neutral_strong:Ho,kui_color_text_neutral_stronger:Vo,kui_color_text_neutral_strongest:Xo,kui_color_text_neutral_weak:Wo,kui_color_text_neutral_weaker:Jo,kui_color_text_primary:qo,kui_color_text_primary_strong:Go,kui_color_text_primary_stronger:Qo,kui_color_text_primary_strongest:Yo,kui_color_text_primary_weak:Zo,kui_color_text_success:o_,kui_color_text_success_strong:__,kui_color_text_warning:t_,kui_color_text_warning_strong:e_,kui_animation_duration_20:r_,kui_border_radius_0:i_,kui_border_radius_10:n_,kui_border_radius_20:c_,kui_border_radius_30:s_,kui_border_radius_40:u_,kui_border_radius_50:a_,kui_border_radius_circle:l_,kui_border_radius_round:k_,kui_border_width_0:d_,kui_border_width_10:p_,kui_border_width_20:g_,kui_border_width_30:f_,kui_breakpoint_mobile:b_,kui_breakpoint_phablet:h_,kui_breakpoint_tablet:m_,kui_breakpoint_laptop:x_,kui_breakpoint_desktop:w_,kui_icon_color_danger:v_,kui_icon_color_neutral:y_,kui_icon_color_primary:C_,kui_icon_color_success:S_,kui_icon_color_warning:F_,kui_icon_size_10:I_,kui_icon_size_20:T_,kui_icon_size_30:z_,kui_icon_size_40:B_,kui_icon_size_50:D_,kui_icon_size_60:A_,kui_icon_size_70:N_,kui_icon_size_80:E_,kui_method_color_background_connect:L_,kui_method_color_background_delete:K_,kui_method_color_background_get:P_,kui_method_color_background_head:M_,kui_method_color_background_options:O_,kui_method_color_background_patch:$_,kui_method_color_background_post:R_,kui_method_color_background_put:U_,kui_method_color_background_trace:j_,kui_method_color_text_connect:H_,kui_method_color_text_connect_strong:V_,kui_method_color_text_delete:X_,kui_method_color_text_delete_strong:W_,kui_method_color_text_get:J_,kui_method_color_text_get_strong:q_,kui_method_color_text_head:G_,kui_method_color_text_head_strong:Q_,kui_method_color_text_options:Y_,kui_method_color_text_options_strong:Z_,kui_method_color_text_patch:ot,kui_method_color_text_patch_strong:_t,kui_method_color_text_post:tt,kui_method_color_text_post_strong:et,kui_method_color_text_put:rt,kui_method_color_text_put_strong:it,kui_method_color_text_trace:nt,kui_method_color_text_trace_strong:ct,kui_navigation_color_background:st,kui_navigation_color_background_selected:ut,kui_navigation_color_border:at,kui_navigation_color_border_child:lt,kui_navigation_color_border_divider:kt,kui_navigation_color_text:dt,kui_navigation_color_text_focus:pt,kui_navigation_color_text_hover:gt,kui_navigation_color_text_selected:ft,kui_navigation_shadow_border:bt,kui_navigation_shadow_border_child:ht,kui_navigation_shadow_focus:mt,kui_status_color_100:xt,kui_status_color_101:wt,kui_status_color_102:vt,kui_status_color_103:yt,kui_status_color_200:Ct,kui_status_color_201:St,kui_status_color_202:Ft,kui_status_color_203:It,kui_status_color_204:Tt,kui_status_color_205:zt,kui_status_color_206:Bt,kui_status_color_207:Dt,kui_status_color_208:At,kui_status_color_226:Nt,kui_status_color_300:Et,kui_status_color_301:Lt,kui_status_color_302:Kt,kui_status_color_303:Pt,kui_status_color_304:Mt,kui_status_color_305:Ot,kui_status_color_307:$t,kui_status_color_308:Rt,kui_status_color_400:Ut,kui_status_color_401:jt,kui_status_color_402:Ht,kui_status_color_403:Vt,kui_status_color_404:Xt,kui_status_color_405:Wt,kui_status_color_406:Jt,kui_status_color_407:qt,kui_status_color_408:Gt,kui_status_color_409:Qt,kui_status_color_410:Yt,kui_status_color_411:Zt,kui_status_color_412:oe,kui_status_color_413:_e,kui_status_color_414:te,kui_status_color_415:ee,kui_status_color_416:re,kui_status_color_417:ie,kui_status_color_418:ne,kui_status_color_421:ce,kui_status_color_422:se,kui_status_color_423:ue,kui_status_color_424:ae,kui_status_color_425:le,kui_status_color_426:ke,kui_status_color_428:de,kui_status_color_429:pe,kui_status_color_431:ge,kui_status_color_451:fe,kui_status_color_500:be,kui_status_color_501:he,kui_status_color_502:me,kui_status_color_503:xe,kui_status_color_504:we,kui_status_color_505:ve,kui_status_color_506:ye,kui_status_color_507:Ce,kui_status_color_508:Se,kui_status_color_510:Fe,kui_status_color_511:Ie,kui_status_color_1na:Te,kui_status_color_2na:ze,kui_status_color_3na:Be,kui_status_color_4na:De,kui_status_color_5na:Ae,kui_status_color_100s:Ne,kui_status_color_200s:Ee,kui_status_color_300s:Le,kui_status_color_400s:Ke,kui_status_color_500s:Pe,kui_font_family_code:Me,kui_font_family_heading:Oe,kui_font_family_text:$e,kui_font_size_10:Re,kui_font_size_20:Ue,kui_font_size_30:je,kui_font_size_40:He,kui_font_size_50:Ve,kui_font_size_60:Xe,kui_font_size_70:We,kui_font_size_80:Je,kui_font_size_90:qe,kui_font_size_100:Ge,kui_font_weight_bold:Qe,kui_font_weight_medium:Ye,kui_font_weight_regular:Ze,kui_font_weight_semibold:or,kui_letter_spacing_0:_r,kui_letter_spacing_minus_10:tr,kui_letter_spacing_minus_20:er,kui_letter_spacing_minus_30:rr,kui_letter_spacing_minus_40:ir,kui_letter_spacing_minus_50:nr,kui_letter_spacing_normal:cr,kui_line_height_10:sr,kui_line_height_20:ur,kui_line_height_30:ar,kui_line_height_40:lr,kui_line_height_50:kr,kui_line_height_60:dr,kui_line_height_70:pr,kui_line_height_80:gr,kui_line_height_90:fr,kui_line_height_100:br,kui_shadow:hr,kui_shadow_border:mr,kui_shadow_border_danger:xr,kui_shadow_border_danger_strong:wr,kui_shadow_border_disabled:vr,kui_shadow_border_primary:yr,kui_shadow_border_primary_strongest:Cr,kui_shadow_border_primary_weak:Sr,kui_shadow_focus:Fr,kui_space_0:Ir,kui_space_10:Tr,kui_space_20:zr,kui_space_30:Br,kui_space_40:Dr,kui_space_50:Ar,kui_space_60:Nr,kui_space_70:Er,kui_space_80:Lr,kui_space_90:Kr,kui_space_100:Pr,kui_space_110:Mr,kui_space_120:Or,kui_space_130:$r,kui_space_140:Rr,kui_space_150:Ur,kui_space_auto:jr};function Vr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Xr(o){return o.replace(/-([a-z])/g,(_,t)=>t.toUpperCase())}function Wr(o){return Vr(Xr(o))}function Jr(o){return o.toUpperCase().replace(/-/g,"_")}function g(o,_={}){return s(`${Wr(o.name)}Icon`,_)}const qr=new Set(Object.keys(Hr).map(o=>o.substring(4).replaceAll("_","-")));function T(o){const _=o.split("-");for(;_.length;){const t=_.join("-");if(qr.has(t))return t;_.shift()}return null}function Gr(o,_){const t={},i=typeof _=="function"?_:e=>_[e]??e;for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)){const r=i(e);t[r]=o[e]}return t}function z(o){return JSON.parse(JSON.stringify(o))}const Qr="Lorem ipsum",B="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function Yr(o){const{Appearance:_,"Show icon left":t,"Icon left":i,"Show icon right":e,"Icon right":r,Label:n}=o.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[_],u=e&&!t?!1:void 0,a=t?i:e?r:void 0;return s("Badge",{appearance:c,iconBefore:u},[n,...a?[s("template",{"#icon":!0},[g(a)])]:[]])}function Zr(o){const{Method:_}=o.properties,t={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[_];return s("KBadge",{appearance:t},_?[_]:[])}function oi(o){const _=w(o,e=>e.type==="INSTANCE"&&e.name.startsWith("Level ")).map((e,r)=>{const{Icon:n,"Show icon":c,Text:u}=e.properties;return{item:{text:u||void 0,key:`level-${r}`},icon:c?n:void 0}}),t=_.map(({item:e})=>z(e)),i=_.map(({icon:e},r)=>{if(e)return s("template",{[`#icon-level-${r}`]:!0},[g(e)])}).filter(e=>e!=null);return s("KBreadcrumbs",{items:t},i)}function m(o){const{Appearance:_,Size:t,State:i,Label:e,Position:r,Icon:n,"Icon danger":c,"Icon left":u,"Icon right":a}=o.properties,d={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[_],p={Small:"small",Medium:void 0,Large:"large"}[t],k={Disabled:!0,Default:void 0}[i];let l=[];return o.name==="Button"?l=[e]:o.name==="Icon Button"?r==="Left"?l=[g(_==="Danger"?c:u),e]:r==="Right"&&(l=[e,g(a)]):o.name==="Icon Only"&&(l=[g(_==="Danger"?c:n)]),s("KButton",{appearance:d,size:p,disabled:k,onClick:!0},l)}function _i(o){const _=f(o,{type:"TEXT",name:"title"}),t=f(o,{type:"TEXT",name:"desc"});return s("KCard",{title:_?.characters},t?.characters?[t.characters]:[])}function D(o){const{Label:_,"Show required":t,"Show tooltip":i}=o.properties,e={};t&&(e.required=!0);const r=h(o,{type:"INSTANCE",name:"Info Tooltip"});if(i&&r){e.info="...";const{"Show tooltip":n}=r.properties,c=h(r,{type:"INSTANCE",name:"Tooltip"});if(n&&c){const{Text:u}=c.properties;u&&(e.info=u)}}return s("KLabel",e,[_])}function S(o,_){const{State:t,"Show label":i,"Show help text":e}=o.properties;let r,n;const c=f(o,{type:"INSTANCE",name:"Label"});i&&c&&(n=D(c));const u=f(o,k=>k.type==="INSTANCE"&&["Parts/.Help Text","Help text"].includes(k.name));if(e&&u){const{Text:k}=u.properties;k&&(r=k)}const{required:a,...d}=n?n.props:{},p={label:n?n.children[0]:void 0,labelAttributes:Object.keys(d).length>0?d:void 0,required:a,help:r,error:t==="Error"?!0:void 0,disabled:t==="Disabled"?!0:void 0};return _?Gr(p,_):p}function ti(o){const{Type:_}=o.properties,t=_==="Indeterminate"?!0:void 0,{required:i,label:e,labelAttributes:r,...n}=S(o,{help:"description"});return s("KCheckbox",{"v-model":"checked",indeterminate:t,label:e,labelAttributes:{...r,required:i},...n})}function ei(o){const{Theme:_,"Show functions":t,"Show copy":i,"Show alt action":e}=o.properties,r={Light:void 0,Dark:"dark"}[_],n=t?!0:void 0,c=i===!1?!1:void 0;let u,a=!1;const d=f(o,{type:"INSTANCE",name:"Icon Button"});if(e&&d){const{"Icon left":p,Label:k}=d.properties,l=[];p&&(p.name==="copy"&&(a=!0),l.push(g(p))),k&&l.push(k),l.length>0&&(u=s("template",{"#secondary-actions":!0},[s("CodeBlockIconButton",{theme:r,copyTooltip:a?"Copy...":void 0,onClick:"() => {}"},l)]))}return s("KCodeBlock",{id:"...",":code":"code",theme:r,language:"json",searchable:n,showCopyButton:c},u?[u]:[])}function ri(o){const{Theme:_}=o.properties,t={Light:void 0,Dark:"dark"}[_];return s("CodeBlock",{":code":"code",theme:t,singleLine:!0})}function ii(o){const{"Show link":_}=o.properties,t=f(o,{type:"TEXT",name:"link"}),i=_&&t?.characters||void 0;return s("KCollapse",{"v-model":"isCollapsed",triggerLabel:i},[B])}function ni(o){const{Appearance:_}=o.properties,t={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[_],i=_.startsWith("Range")||void 0;return s("KDateTimePicker",{"v-model":"currentValue",mode:t,range:i})}function ci(o){const _=w(o,{type:"INSTANCE",name:"Dropdown Option"}).map(t=>{const{State:i,"Show left icon":e,"Left icon":r,Label:n}=t.properties,c=i==="Selected"?!0:void 0,u=i==="Disabled"?!0:void 0,a=i==="Danger"?!0:void 0,d=e&&r?g(r):void 0;return z({label:n,selected:c,disabled:u,danger:a,icon:d})});return _.some(t=>t.icon)?s("KDropdown",{},[s("template",{"#items":!0},[..._.map(({icon:t,label:i,...e})=>s("KDropdownItem",e,t?[t,i]:[i]))])]):s("KDropdown",{items:_})}function si(o){const{"Show icon":_,Icon:t,Title:i,Description:e,"Show button":r}=o.properties,n=f(o,{type:"INSTANCE",name:"Button"}),c=i||void 0,u=e||void 0,{Appearance:a,Label:d,State:p}=n?n.properties:{},k=r&&n&&a==="Primary",l=k?d:void 0,b=r?void 0:!1,A=k&&p==="Disabled"?!0:void 0;let x,v;_&&t&&(x={analytics:"default",warning:"error",search:"search",kong:"kong"}[t.name],x?x==="default"&&(x=void 0):v=t);const y=[];if(v&&y.push(s("template",{"#icon":!0},[g(v)])),r&&!k){const F=w(o,I=>I.type==="INSTANCE"&&["Icon Only","Icon Button","Button"].includes(I.name));F&&y.push(s("template",{"#action":!0},F.map(m)))}return s("KEmptyState",{title:c,message:u,iconVariant:x,actionButtonText:l,actionButtonVisible:b,actionButtonDisabled:A},y)}function ui(o){const{"Show value":_,Placeholder:t,"Show icon left":i,"Icon left":e}=o.properties,r=_==="True"?void 0:t,n=i&&e?g(e):void 0,c=h(o,{type:"FRAME",name:"input"}),u=c?h(c,{type:"INSTANCE",name:"Button"}):void 0,a=u?u.properties.Label:void 0,d=S(o);return s("KFileUpload",{placeholder:r,buttonText:a!=="Select file"?a:void 0,...d,onFileAdded:"files => {}",onFileRemoved:"files => {}"},n?[s("template",{"#icon":!0},[n])]:void 0)}function ai(o){const{State:_,"Show value":t,Placeholder:i,"Show icon left":e,"Icon left":r,"Show icon right":n,"Icon right":c}=o.properties,u=t==="True"?void 0:i||void 0,a=e&&r?s("template",{"#before":!0},[g(r)]):void 0,d=n&&c?s("template",{"#after":!0},[g(c,{role:"button",tabindex:"0",onClick:!0})]):void 0,p=S(o),k=p.label==="Password",l=c?.name==="visibility"||c?.name==="visibility-off";return s("KInput",{"v-model":"value",type:k||l?"password":void 0,showPasswordMaskToggle:l||void 0,placeholder:u,...p,readonly:_==="Readonly"||void 0},[a,d].filter(b=>b!=null))}function li(o){const _=h(o,{type:"INSTANCE",name:"Modal Header"}),{"Show icon":t,Icon:i}=_?_.properties:{};let e=Qr;_&&(e=h(_,{type:"TEXT",name:"Modal title"})?.characters||e);const r=t&&i?s("template",{"#title":!0},[e]):void 0,n=h(o,{type:"INSTANCE",name:"Modal Footer"}),c={},u={};let a;if(n){const p=h(n,{type:"FRAME",name:"right"}),k=p?w(p,{type:"INSTANCE",name:"Button"}):[];if(!k.length)a=[];else if(k.length===1){const l=m(k[0]);Object.assign(c,l.props),typeof l.children[0]=="string"?c.label=l.children[0]:a=[l],u.hide=!0}else if(k.length===2){const[l,b]=k.map(m);Object.assign(c,b.props),Object.assign(u,l.props),b.children[0]==="string"&&l.children[0]==="string"?(c.label=b.children[0],u.label=l.children[0]):a=[l,b]}else a=k.map(m)}const d=a?s("template",{"#footer-actions":!0},a):void 0;return s("KModal",{":visible":"modalVisible",title:e},[...r?[r]:[],B,...d?[d]:[]])}const ki={Alert:N,Badge:Yr,MethodBadge:Zr,GlobalBreadcrumb:oi,Button:m,IconButton:m,IconOnly:m,Card:_i,Checkbox:ti,CodeBlock:ei,CodeLine:ri,Collapse:ii,DatePicker:ni,Dropdown:ci,EmptyState:si,FileUpload:ui,Input:ai,Label:D,Modal:li},di=({component:o})=>{const _=ki[o.name.replaceAll(" ","")];return _?_(o):""},pi={name:"Kong UI",code:{component:{title:"Component",lang:"vue",transformComponent:di},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:_}){const t=T(o);return t?`$kui-${t.toLowerCase()}`:_?`var(--${o}, ${_})`:`var(--${o})`}},js:{transformVariable({name:o,value:_}){const t=T(o);return t?`\0KUI_${Jr(t)}\0`:_?`var(--${o}, ${_})`:`var(--${o})`}}}};export{pi as plugin};
