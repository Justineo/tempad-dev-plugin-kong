function ki(o){return o}function n(o,_,t){return{name:o,props:_||{},children:t||[]}}function v(o,_){return typeof _=="function"?_(o):!(_.type&&o.type!==_.type||_.name&&o.name!==_.name)}function m(o,_){return o.children.find(t=>v(t,_))??null}function y(o,_){return o.children.filter(t=>v(t,_))}function f(o,_){for(const t of o.children){if(v(t,_))return t;if("children"in t){const r=f(t,_);if(r)return r}}return null}function A(o){const{Appearance:_,"Show icon":t,"Show title":r,Title:e,"Show close":i}=o.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[_],u=t?!0:void 0,s=r?e:void 0,a=i?!0:void 0,k=i?!0:void 0,p=f(o,{type:"TEXT",name:"desc"});return n("KAlert",{appearance:c,showIcon:u,title:s,message:p?.characters,dismissible:a,onDismiss:k})}const N="#ffffff",L="#d60027",E="#ad000e",K="#850000",P="#5c0000",$="#ff3954",O="#ffabab",U="#ffe5e5",R="#6f28ff",M="#f1f0ff",j="#e0e4ea",H="#000933",V="#6c7489",W="#52596e",X="#3a3f51",J="#232633",q="#afb7c5",G="#e0e4ea",Q="#f9fafb",Y="rgba(0, 9, 51, 0.6)",Z="#0044f4",oo="#0030cc",_o="#002099",to="#001466",eo="#5f9aff",ro="#bee2ff",io="#eefaff",co="#00d6a4",no="#ecfffb",so="transparent",uo="#ffc400",ao="#fffce0",lo="#e0e4ea",ko="#d60027",po="#ad000e",go="#850000",fo="#5c0000",bo="#ff3954",mo="#ffabab",ho="#ffe5e5",xo="#6f28ff",wo="#e0e4ea",vo="rgba(255, 255, 255, 0.2)",yo="#afb7c5",Co="#e0e4ea",So="#0044f4",Fo="#0030cc",Io="#002099",Do="#001466",To="#5f9aff",zo="#bee2ff",Bo="#eefaff",Ao="transparent",No="#000933",Lo="#d60027",Eo="#ad000e",Ko="#00abd2",Po="#d60067",$o="#6f28ff",Oo="#5e00f5",Uo="#afb7c5",Ro="#ffffff",Mo="#6c7489",jo="#52596e",Ho="#3a3f51",Vo="#232633",Wo="#afb7c5",Xo="#e0e4ea",Jo="#0044f4",qo="#0030cc",Go="#002099",Qo="#001466",Yo="#5f9aff",Zo="#007d60",o_="#005944",__="#995c00",t_="#804400",e_="0.2s",r_="0px",i_="2px",c_="4px",n_="6px",s_="8px",u_="10px",a_="50%",l_="100px",k_="0px",d_="1px",p_="2px",g_="4px",f_="640px",b_="768px",m_="1024px",h_="1280px",x_="1536px",w_="#f50045",v_="#828a9e",y_="#306fff",C_="#00a17b",S_="#ffc400",F_="10px",I_="12px",D_="16px",T_="20px",z_="24px",B_="32px",A_="40px",N_="48px",L_="#f1f0ff",E_="#ffe5e5",K_="#eefaff",P_="#52596e",$_="#e0e4ea",O_="#ecfcff",U_="#ecfffb",R_="#fffce0",M_="#fff0f7",j_="#6f28ff",H_="#5e00f5",V_="#d60027",W_="#ad000e",X_="#0044f4",J_="#0030cc",q_="#e0e4ea",G_="#afb7c5",Q_="#52596e",Y_="#3a3f51",Z_="#00819d",ot="#00647a",_t="#007d60",tt="#005944",et="#995c00",rt="#804400",it="#d60067",ct="#ad0053",nt="#000933",st="rgba(255, 255, 255, 0.12)",ut="rgba(255, 255, 255, 0.12)",at="#00fabe",lt="rgba(255, 255, 255, 0.24)",kt="#bee2ff",dt="#ffffff",pt="#eefaff",gt="#00fabe",ft="0 0 0 1px rgba(255, 255, 255, 0.12) inset",bt="4px 0 0 0 #00fabe inset",mt="0 0 0 1px rgba(255, 255, 255, 0.60) inset",ht="#bee2ff",xt="#8fc1ff",wt="#5f9aff",vt="#306fff",yt="#b5ffee",Ct="#00fabe",St="#00d6a4",Ft="#00a17b",It="#007d60",Dt="#005944",Tt="#b5ffee",zt="#00fabe",Bt="#b5ffee",At="#00a17b",Nt="#fff296",Lt="#ffe04b",Et="#ffc400",Kt="#b37600",Pt="#995c00",$t="#804400",Ot="#fff296",Ut="#ffe04b",Rt="#FFC2B3",Mt="#FF9877",jt="#FF723C",Ht="#F75008",Vt="#D13500",Wt="#A31F00",Xt="#FFC2B3",Jt="#FF9877",qt="#FF723C",Gt="#F75008",Qt="#D13500",Yt="#A31F00",Zt="#FFC2B3",oe="#FF9877",_e="#FF723C",te="#F75008",ee="#D13500",re="#A31F00",ie="#FFC2B3",ce="#FF9877",ne="#FF723C",se="#F75008",ue="#D13500",ae="#A31F00",le="#FFC2B3",ke="#FF9877",de="#FF723C",pe="#F75008",ge="#D13500",fe="#ffabab",be="#ff7272",me="#ff3954",he="#f50045",xe="#d60027",we="#ad000e",ve="#ffabab",ye="#ff7272",Ce="#ff3954",Se="#f50045",Fe="#d60027",Ie="#eefaff",De="#ecfffb",Te="#fffce0",ze="#FFF1EF",Be="#ffe5e5",Ae="#5f9aff",Ne="#00d6a4",Le="#ffc400",Ee="#FF723C",Ke="#ff3954",Pe="'JetBrains Mono', Consolas, monospace",$e="'Inter', Roboto, Helvetica, sans-serif",Oe="'Inter', Roboto, Helvetica, sans-serif",Ue="10px",Re="12px",Me="14px",je="16px",He="18px",Ve="20px",We="24px",Xe="32px",Je="40px",qe="48px",Ge="700",Qe="500",Ye="400",Ze="600",or="normal",_r="-0.12px",tr="-0.24px",er="-0.32px",rr="-0.4px",ir="-0.48px",cr="normal",nr="12px",sr="16px",ur="20px",ar="24px",lr="28px",kr="32px",dr="36px",pr="40px",gr="48px",fr="56px",br="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",mr="0px 0px 0px 1px #e0e4ea inset",hr="0px 0px 0px 1px #d60027 inset",xr="0px 0px 0px 1px #ad000e inset",wr="0px 0px 0px 1px #e0e4ea inset",vr="0px 0px 0px 1px #0044f4 inset",yr="0px 0px 0px 1px #001466 inset",Cr="0px 0px 0px 1px #5f9aff inset",Sr="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",Fr="0px",Ir="2px",Dr="4px",Tr="6px",zr="8px",Br="12px",Ar="16px",Nr="20px",Lr="24px",Er="32px",Kr="40px",Pr="48px",$r="56px",Or="64px",Ur="80px",Rr="96px",Mr="auto",jr={kui_color_background:N,kui_color_background_danger:L,kui_color_background_danger_strong:E,kui_color_background_danger_stronger:K,kui_color_background_danger_strongest:P,kui_color_background_danger_weak:$,kui_color_background_danger_weaker:O,kui_color_background_danger_weakest:U,kui_color_background_decorative_purple:R,kui_color_background_decorative_purple_weakest:M,kui_color_background_disabled:j,kui_color_background_inverse:H,kui_color_background_neutral:V,kui_color_background_neutral_strong:W,kui_color_background_neutral_stronger:X,kui_color_background_neutral_strongest:J,kui_color_background_neutral_weak:q,kui_color_background_neutral_weaker:G,kui_color_background_neutral_weakest:Q,kui_color_background_overlay:Y,kui_color_background_primary:Z,kui_color_background_primary_strong:oo,kui_color_background_primary_stronger:_o,kui_color_background_primary_strongest:to,kui_color_background_primary_weak:eo,kui_color_background_primary_weaker:ro,kui_color_background_primary_weakest:io,kui_color_background_success_weak:co,kui_color_background_success_weakest:no,kui_color_background_transparent:so,kui_color_background_warning_weak:uo,kui_color_background_warning_weakest:ao,kui_color_border:lo,kui_color_border_danger:ko,kui_color_border_danger_strong:po,kui_color_border_danger_stronger:go,kui_color_border_danger_strongest:fo,kui_color_border_danger_weak:bo,kui_color_border_danger_weaker:mo,kui_color_border_danger_weakest:ho,kui_color_border_decorative_purple:xo,kui_color_border_disabled:wo,kui_color_border_inverse:vo,kui_color_border_neutral_weak:yo,kui_color_border_neutral_weaker:Co,kui_color_border_primary:So,kui_color_border_primary_strong:Fo,kui_color_border_primary_stronger:Io,kui_color_border_primary_strongest:Do,kui_color_border_primary_weak:To,kui_color_border_primary_weaker:zo,kui_color_border_primary_weakest:Bo,kui_color_border_transparent:Ao,kui_color_text:No,kui_color_text_danger:Lo,kui_color_text_danger_strong:Eo,kui_color_text_decorative_aqua:Ko,kui_color_text_decorative_pink:Po,kui_color_text_decorative_purple:$o,kui_color_text_decorative_purple_strong:Oo,kui_color_text_disabled:Uo,kui_color_text_inverse:Ro,kui_color_text_neutral:Mo,kui_color_text_neutral_strong:jo,kui_color_text_neutral_stronger:Ho,kui_color_text_neutral_strongest:Vo,kui_color_text_neutral_weak:Wo,kui_color_text_neutral_weaker:Xo,kui_color_text_primary:Jo,kui_color_text_primary_strong:qo,kui_color_text_primary_stronger:Go,kui_color_text_primary_strongest:Qo,kui_color_text_primary_weak:Yo,kui_color_text_success:Zo,kui_color_text_success_strong:o_,kui_color_text_warning:__,kui_color_text_warning_strong:t_,kui_animation_duration_20:e_,kui_border_radius_0:r_,kui_border_radius_10:i_,kui_border_radius_20:c_,kui_border_radius_30:n_,kui_border_radius_40:s_,kui_border_radius_50:u_,kui_border_radius_circle:a_,kui_border_radius_round:l_,kui_border_width_0:k_,kui_border_width_10:d_,kui_border_width_20:p_,kui_border_width_30:g_,kui_breakpoint_mobile:f_,kui_breakpoint_phablet:b_,kui_breakpoint_tablet:m_,kui_breakpoint_laptop:h_,kui_breakpoint_desktop:x_,kui_icon_color_danger:w_,kui_icon_color_neutral:v_,kui_icon_color_primary:y_,kui_icon_color_success:C_,kui_icon_color_warning:S_,kui_icon_size_10:F_,kui_icon_size_20:I_,kui_icon_size_30:D_,kui_icon_size_40:T_,kui_icon_size_50:z_,kui_icon_size_60:B_,kui_icon_size_70:A_,kui_icon_size_80:N_,kui_method_color_background_connect:L_,kui_method_color_background_delete:E_,kui_method_color_background_get:K_,kui_method_color_background_head:P_,kui_method_color_background_options:$_,kui_method_color_background_patch:O_,kui_method_color_background_post:U_,kui_method_color_background_put:R_,kui_method_color_background_trace:M_,kui_method_color_text_connect:j_,kui_method_color_text_connect_strong:H_,kui_method_color_text_delete:V_,kui_method_color_text_delete_strong:W_,kui_method_color_text_get:X_,kui_method_color_text_get_strong:J_,kui_method_color_text_head:q_,kui_method_color_text_head_strong:G_,kui_method_color_text_options:Q_,kui_method_color_text_options_strong:Y_,kui_method_color_text_patch:Z_,kui_method_color_text_patch_strong:ot,kui_method_color_text_post:_t,kui_method_color_text_post_strong:tt,kui_method_color_text_put:et,kui_method_color_text_put_strong:rt,kui_method_color_text_trace:it,kui_method_color_text_trace_strong:ct,kui_navigation_color_background:nt,kui_navigation_color_background_selected:st,kui_navigation_color_border:ut,kui_navigation_color_border_child:at,kui_navigation_color_border_divider:lt,kui_navigation_color_text:kt,kui_navigation_color_text_focus:dt,kui_navigation_color_text_hover:pt,kui_navigation_color_text_selected:gt,kui_navigation_shadow_border:ft,kui_navigation_shadow_border_child:bt,kui_navigation_shadow_focus:mt,kui_status_color_100:ht,kui_status_color_101:xt,kui_status_color_102:wt,kui_status_color_103:vt,kui_status_color_200:yt,kui_status_color_201:Ct,kui_status_color_202:St,kui_status_color_203:Ft,kui_status_color_204:It,kui_status_color_205:Dt,kui_status_color_206:Tt,kui_status_color_207:zt,kui_status_color_208:Bt,kui_status_color_226:At,kui_status_color_300:Nt,kui_status_color_301:Lt,kui_status_color_302:Et,kui_status_color_303:Kt,kui_status_color_304:Pt,kui_status_color_305:$t,kui_status_color_307:Ot,kui_status_color_308:Ut,kui_status_color_400:Rt,kui_status_color_401:Mt,kui_status_color_402:jt,kui_status_color_403:Ht,kui_status_color_404:Vt,kui_status_color_405:Wt,kui_status_color_406:Xt,kui_status_color_407:Jt,kui_status_color_408:qt,kui_status_color_409:Gt,kui_status_color_410:Qt,kui_status_color_411:Yt,kui_status_color_412:Zt,kui_status_color_413:oe,kui_status_color_414:_e,kui_status_color_415:te,kui_status_color_416:ee,kui_status_color_417:re,kui_status_color_418:ie,kui_status_color_421:ce,kui_status_color_422:ne,kui_status_color_423:se,kui_status_color_424:ue,kui_status_color_425:ae,kui_status_color_426:le,kui_status_color_428:ke,kui_status_color_429:de,kui_status_color_431:pe,kui_status_color_451:ge,kui_status_color_500:fe,kui_status_color_501:be,kui_status_color_502:me,kui_status_color_503:he,kui_status_color_504:xe,kui_status_color_505:we,kui_status_color_506:ve,kui_status_color_507:ye,kui_status_color_508:Ce,kui_status_color_510:Se,kui_status_color_511:Fe,kui_status_color_1na:Ie,kui_status_color_2na:De,kui_status_color_3na:Te,kui_status_color_4na:ze,kui_status_color_5na:Be,kui_status_color_100s:Ae,kui_status_color_200s:Ne,kui_status_color_300s:Le,kui_status_color_400s:Ee,kui_status_color_500s:Ke,kui_font_family_code:Pe,kui_font_family_heading:$e,kui_font_family_text:Oe,kui_font_size_10:Ue,kui_font_size_20:Re,kui_font_size_30:Me,kui_font_size_40:je,kui_font_size_50:He,kui_font_size_60:Ve,kui_font_size_70:We,kui_font_size_80:Xe,kui_font_size_90:Je,kui_font_size_100:qe,kui_font_weight_bold:Ge,kui_font_weight_medium:Qe,kui_font_weight_regular:Ye,kui_font_weight_semibold:Ze,kui_letter_spacing_0:or,kui_letter_spacing_minus_10:_r,kui_letter_spacing_minus_20:tr,kui_letter_spacing_minus_30:er,kui_letter_spacing_minus_40:rr,kui_letter_spacing_minus_50:ir,kui_letter_spacing_normal:cr,kui_line_height_10:nr,kui_line_height_20:sr,kui_line_height_30:ur,kui_line_height_40:ar,kui_line_height_50:lr,kui_line_height_60:kr,kui_line_height_70:dr,kui_line_height_80:pr,kui_line_height_90:gr,kui_line_height_100:fr,kui_shadow:br,kui_shadow_border:mr,kui_shadow_border_danger:hr,kui_shadow_border_danger_strong:xr,kui_shadow_border_disabled:wr,kui_shadow_border_primary:vr,kui_shadow_border_primary_strongest:yr,kui_shadow_border_primary_weak:Cr,kui_shadow_focus:Sr,kui_space_0:Fr,kui_space_10:Ir,kui_space_20:Dr,kui_space_30:Tr,kui_space_40:zr,kui_space_50:Br,kui_space_60:Ar,kui_space_70:Nr,kui_space_80:Lr,kui_space_90:Er,kui_space_100:Kr,kui_space_110:Pr,kui_space_120:$r,kui_space_130:Or,kui_space_140:Ur,kui_space_150:Rr,kui_space_auto:Mr};function Hr(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Vr(o){return o.replace(/-([a-z])/g,(_,t)=>t.toUpperCase())}function Wr(o){return Hr(Vr(o))}function Xr(o){return o.toUpperCase().replace(/-/g,"_")}function g(o,_={}){return n(`${Wr(o.name)}Icon`,_)}const Jr=new Set(Object.keys(jr).map(o=>o.substring(4).replaceAll("_","-")));function I(o){const _=o.split("-");for(;_.length;){const t=_.join("-");if(Jr.has(t))return t;_.shift()}return null}function qr(o,_){const t={},r=typeof _=="function"?_:e=>_[e]??e;for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)){const i=r(e);t[i]=o[e]}return t}function D(o){return JSON.parse(JSON.stringify(o))}function Gr(o){const{Appearance:_,"Show icon left":t,"Icon left":r,"Show icon right":e,"Icon right":i,Label:c}=o.properties,u={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[_],s=e&&!t?!1:void 0,a=t?r:e?i:void 0;return n("Badge",{appearance:u,iconBefore:s},[c,...a?[n("template",{"#icon":!0},[g(a)])]:[]])}function Qr(o){const{Method:_}=o.properties,t={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[_];return n("KBadge",{appearance:t},_?[_]:[])}function Yr(o){const _=y(o,e=>e.type==="INSTANCE"&&e.name.startsWith("Level ")).map((e,i)=>{const{Icon:c,"Show icon":u,Text:s}=e.properties;return{item:{text:s||void 0,key:`level-${i}`},icon:u?c:void 0}}),t=_.map(({item:e})=>D(e)),r=_.map(({icon:e},i)=>{if(e)return n("template",{[`#icon-level-${i}`]:!0},[g(e)])}).filter(e=>e!=null);return n("KBreadcrumbs",{items:t},r)}function h(o){const{Appearance:_,Size:t,State:r,Label:e,Position:i,Icon:c,"Icon danger":u,"Icon left":s,"Icon right":a}=o.properties,k={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[_],p={Small:"small",Medium:void 0,Large:"large"}[t],d={Disabled:!0,Default:void 0}[r];let l=[];return o.name==="Button"?l=[e]:o.name==="Icon Button"?i==="Left"?l=[g(_==="Danger"?u:s),e]:i==="Right"&&(l=[e,g(a)]):o.name==="Icon Only"&&(l=[g(_==="Danger"?u:c)]),n("KButton",{appearance:k,size:p,disabled:d,onClick:!0},l)}function Zr(o){const _=f(o,{type:"TEXT",name:"title"}),t=f(o,{type:"TEXT",name:"desc"});return n("KCard",{title:_?.characters},t?.characters?[t.characters]:[])}function T(o){const{Label:_,"Show required":t,"Show tooltip":r}=o.properties,e={};t&&(e.required=!0);const i=m(o,{type:"INSTANCE",name:"Info Tooltip"});if(r&&i){e.info="...";const{"Show tooltip":c}=i.properties,u=m(i,{type:"INSTANCE",name:"Tooltip"});if(c&&u){const{Text:s}=u.properties;s&&(e.info=s)}}return n("KLabel",e,[_])}function C(o,_){const{State:t,"Show label":r,"Show help text":e}=o.properties;let i,c;const u=f(o,{type:"INSTANCE",name:"Label"});r&&u&&(c=T(u));const s=f(o,l=>l.type==="INSTANCE"&&["Parts/.Help Text","Help text"].includes(l.name));if(e&&s){const{Text:l}=s.properties;l&&(i=l)}const a=c&&Object.keys(c.props).length>0?{...c.props}:void 0,{required:k,...p}=a||{},d={label:c?c.children[0]:void 0,labelAttributes:p,required:k,help:i,error:t==="Error"?!0:void 0,disabled:t==="Disabled"?!0:void 0};return _?qr(d,_):d}function oi(o){const{Type:_}=o.properties,t=_==="Indeterminate"?!0:void 0,{required:r,label:e,labelAttributes:i,...c}=C(o,{help:"description"});return n("KCheckbox",{"v-model":"checked",indeterminate:t,label:e,labelAttributes:{...i,required:r},...c})}function _i(o){const{Theme:_,"Show functions":t,"Show copy":r,"Show alt action":e}=o.properties,i={Light:void 0,Dark:"dark"}[_],c=t?!0:void 0,u=r===!1?!1:void 0;let s,a=!1;const k=f(o,{type:"INSTANCE",name:"Icon Button"});if(e&&k){const{"Icon left":p,Label:d}=k.properties,l=[];p&&(p.name==="copy"&&(a=!0),l.push(g(p))),d&&l.push(d),l.length>0&&(s=n("template",{"#secondary-actions":!0},[n("CodeBlockIconButton",{theme:i,copyTooltip:a?"Copy...":void 0,onClick:"() => {}"},l)]))}return n("KCodeBlock",{id:"...",":code":"code",theme:i,language:"json",searchable:c,showCopyButton:u},s?[s]:[])}function ti(o){const{Theme:_}=o.properties,t={Light:void 0,Dark:"dark"}[_];return n("CodeBlock",{":code":"code",theme:t,singleLine:!0})}function ei(o){const{"Show link":_}=o.properties,t=f(o,{type:"TEXT",name:"link"}),r=_&&t?.characters||void 0;return n("KCollapse",{"v-model":"isCollapsed",triggerLabel:r},["Lorem ipsum dolor sit amet, consectetur adipiscing elit."])}function ri(o){const{Appearance:_}=o.properties,t={Default:"date",Date:"date","Date and time":"dateTime",Range:"date","Range and time":"dataTime","Custom date":"relativeDate","Custom date and time":"relativeDateTime","Relative date":"relativeDate"}[_],r=_.startsWith("Range")||void 0;return n("KDateTimePicker",{"v-model":"currentValue",mode:t,range:r})}function ii(o){const _=y(o,{type:"INSTANCE",name:"Dropdown Option"}).map(t=>{const{State:r,"Show left icon":e,"Left icon":i,Label:c}=t.properties,u=r==="Selected"?!0:void 0,s=r==="Disabled"?!0:void 0,a=r==="Danger"?!0:void 0,k=e&&i?g(i):void 0;return D({label:c,selected:u,disabled:s,danger:a,icon:k})});return _.some(t=>t.icon)?n("KDropdown",{},[n("template",{"#items":!0},[..._.map(({icon:t,label:r,...e})=>n("KDropdownItem",e,t?[t,r]:[r]))])]):n("KDropdown",{items:_})}function ci(o){const{"Show icon":_,Icon:t,Title:r,Description:e,"Show button":i}=o.properties,c=f(o,{type:"INSTANCE",name:"Button"}),u=r||void 0,s=e||void 0,{Appearance:a,Label:k,State:p}=c?c.properties:{},d=i&&c&&a==="Primary",l=d?k:void 0,z=i?void 0:!1,B=d&&p==="Disabled"?!0:void 0;let b,x;_&&t&&(b={analytics:"default",warning:"error",search:"search",kong:"kong"}[t.name],b?b==="default"&&(b=void 0):x=t);const w=[];if(x&&w.push(n("template",{"#icon":!0},[g(x)])),i&&!d){const S=y(o,F=>F.type==="INSTANCE"&&["Icon Only","Icon Button","Button"].includes(F.name));S&&w.push(n("template",{"#action":!0},S.map(h)))}return n("KEmptyState",{title:u,message:s,iconVariant:b,actionButtonText:l,actionButtonVisible:z,actionButtonDisabled:B},w)}function ni(o){const{"Show value":_,Placeholder:t,"Show icon left":r,"Icon left":e}=o.properties,i=_?void 0:t,c=r&&e?g(e):void 0,u=m(o,{type:"FRAME",name:"input"}),s=u?m(u,{type:"INSTANCE",name:"Button"}):void 0,a=s?s.properties.Label:void 0,k=C(o);return n("KFileUpload",{placeholder:i,buttonText:a!=="Select file"?a:void 0,...k,onFileAdded:"files => {}",onFileRemoved:"files => {}"},c?[n("template",{"#icon":!0},[c])]:void 0)}function si(o){const{"Show value":_,Placeholder:t,"Show icon left":r,"Icon left":e,"Show icon right":i,"Icon right":c}=o.properties,u=_?void 0:t,s=r&&e?n("template",{"#before":!0},[g(e)]):void 0,a=i&&c?n("template",{"#after":!0},[g(c,{role:"button",tabindex:"0",onClick:!0})]):void 0,k=C(o),p=k.label==="Password",d=c?.name==="visibility"||c?.name==="visibility-off";return n("KInput",{"v-model":"value",type:p||d?"password":void 0,showPasswordMaskToggle:d,placeholder:u,...k},[s,a].filter(l=>l!=null))}const ui={Alert:A,Badge:Gr,MethodBadge:Qr,GlobalBreadcrumb:Yr,Button:h,IconButton:h,IconOnly:h,Card:Zr,Checkbox:oi,CodeBlock:_i,CodeLine:ti,Collapse:ei,DatePicker:ri,Dropdown:ii,EmptyState:ci,FileUpload:ni,Input:si,Label:T},ai=({component:o})=>{const _=ui[o.name.replaceAll(" ","")];return _?_(o):""},li={name:"Kong UI Advanced",code:{component:{title:"Component",lang:"vue",transformComponent:ai},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:_}){const t=I(o)?.toLowerCase();return t?`var(--kui-${t}, $kui-${t})`:_?`var(--${o}, ${_})`:`var(--${o})`}},js:{transformVariable({name:o,value:_}){const t=I(o);return t?`var(--kui-${t.toLowerCase()}, \0KUI_${Xr(t)}\0)`:_?`var(--${o}, ${_})`:`var(--${o})`}}}};export{li as plugin};
