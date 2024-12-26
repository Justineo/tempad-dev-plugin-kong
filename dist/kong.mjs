function ni(o){return o}function n(o,_,t){return{name:o,props:_||{},children:t||[]}}function w(o,_){return typeof _=="function"?_(o):!(_.type&&o.type!==_.type||_.name&&o.name!==_.name)}function C(o,_){return o.children.find(t=>w(t,_))??null}function F(o,_){return o.children.filter(t=>w(t,_))}function d(o,_){for(const t of o.children){if(w(t,_))return t;if("children"in t){const i=d(t,_);if(i)return i}}return null}function A(o){const{Appearance:_,"Show icon":t,"Show title":i,Title:r,"Show close":e}=o.properties,c={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[_],s=t?!0:void 0,u=i?r:void 0,a=e?!0:void 0,p=e?!0:void 0,l=d(o,{type:"TEXT",name:"desc"});return n("KAlert",{appearance:c,showIcon:s,title:u,message:l?.characters,dismissible:a,onDismiss:p})}const D="#ffffff",L="#d60027",N="#ad000e",E="#850000",$="#5c0000",K="#ff3954",P="#ffabab",U="#ffe5e5",O="#6f28ff",j="#f1f0ff",H="#e0e4ea",M="#000933",V="#6c7489",X="#52596e",R="#3a3f51",W="#232633",G="#afb7c5",J="#e0e4ea",Q="#f9fafb",Y="rgba(0, 9, 51, 0.6)",Z="#0044f4",q="#0030cc",oo="#002099",_o="#001466",to="#5f9aff",ro="#bee2ff",eo="#eefaff",io="#00d6a4",co="#ecfffb",no="transparent",so="#ffc400",uo="#fffce0",ao="#e0e4ea",ko="#d60027",lo="#ad000e",po="#850000",go="#5c0000",fo="#ff3954",bo="#ffabab",ho="#ffe5e5",mo="#6f28ff",xo="#e0e4ea",wo="rgba(255, 255, 255, 0.2)",vo="#afb7c5",yo="#e0e4ea",Co="#0044f4",Fo="#0030cc",So="#002099",zo="#001466",Bo="#5f9aff",Io="#bee2ff",To="#eefaff",Ao="transparent",Do="#000933",Lo="#d60027",No="#ad000e",Eo="#00abd2",$o="#d60067",Ko="#6f28ff",Po="#5e00f5",Uo="#afb7c5",Oo="#ffffff",jo="#6c7489",Ho="#52596e",Mo="#3a3f51",Vo="#232633",Xo="#afb7c5",Ro="#e0e4ea",Wo="#0044f4",Go="#0030cc",Jo="#002099",Qo="#001466",Yo="#5f9aff",Zo="#007d60",qo="#005944",o_="#995c00",__="#804400",t_="0.2s",r_="0px",e_="2px",i_="4px",c_="6px",n_="8px",s_="10px",u_="50%",a_="100px",k_="0px",l_="1px",d_="2px",p_="4px",g_="640px",f_="768px",b_="1024px",h_="1280px",m_="1536px",x_="#f50045",w_="#828a9e",v_="#306fff",y_="#00a17b",C_="#ffc400",F_="10px",S_="12px",z_="16px",B_="20px",I_="24px",T_="32px",A_="40px",D_="48px",L_="#f1f0ff",N_="#ffe5e5",E_="#eefaff",$_="#52596e",K_="#e0e4ea",P_="#ecfcff",U_="#ecfffb",O_="#fffce0",j_="#fff0f7",H_="#6f28ff",M_="#5e00f5",V_="#d60027",X_="#ad000e",R_="#0044f4",W_="#0030cc",G_="#e0e4ea",J_="#afb7c5",Q_="#52596e",Y_="#3a3f51",Z_="#00819d",q_="#00647a",ot="#007d60",_t="#005944",tt="#995c00",rt="#804400",et="#d60067",it="#ad0053",ct="#000933",nt="rgba(255, 255, 255, 0.12)",st="rgba(255, 255, 255, 0.12)",ut="#00fabe",at="rgba(255, 255, 255, 0.24)",kt="#bee2ff",lt="#ffffff",dt="#eefaff",pt="#00fabe",gt="0 0 0 1px rgba(255, 255, 255, 0.12) inset",ft="4px 0 0 0 #00fabe inset",bt="0 0 0 1px rgba(255, 255, 255, 0.60) inset",ht="#bee2ff",mt="#8fc1ff",xt="#5f9aff",wt="#306fff",vt="#b5ffee",yt="#00fabe",Ct="#00d6a4",Ft="#00a17b",St="#007d60",zt="#005944",Bt="#b5ffee",It="#00fabe",Tt="#b5ffee",At="#00a17b",Dt="#fff296",Lt="#ffe04b",Nt="#ffc400",Et="#b37600",$t="#995c00",Kt="#804400",Pt="#fff296",Ut="#ffe04b",Ot="#FFC2B3",jt="#FF9877",Ht="#FF723C",Mt="#F75008",Vt="#D13500",Xt="#A31F00",Rt="#FFC2B3",Wt="#FF9877",Gt="#FF723C",Jt="#F75008",Qt="#D13500",Yt="#A31F00",Zt="#FFC2B3",qt="#FF9877",or="#FF723C",_r="#F75008",tr="#D13500",rr="#A31F00",er="#FFC2B3",ir="#FF9877",cr="#FF723C",nr="#F75008",sr="#D13500",ur="#A31F00",ar="#FFC2B3",kr="#FF9877",lr="#FF723C",dr="#F75008",pr="#D13500",gr="#ffabab",fr="#ff7272",br="#ff3954",hr="#f50045",mr="#d60027",xr="#ad000e",wr="#ffabab",vr="#ff7272",yr="#ff3954",Cr="#f50045",Fr="#d60027",Sr="#eefaff",zr="#ecfffb",Br="#fffce0",Ir="#FFF1EF",Tr="#ffe5e5",Ar="#5f9aff",Dr="#00d6a4",Lr="#ffc400",Nr="#FF723C",Er="#ff3954",$r="'JetBrains Mono', Consolas, monospace",Kr="'Inter', Roboto, Helvetica, sans-serif",Pr="'Inter', Roboto, Helvetica, sans-serif",Ur="10px",Or="12px",jr="14px",Hr="16px",Mr="18px",Vr="20px",Xr="24px",Rr="32px",Wr="40px",Gr="48px",Jr="700",Qr="500",Yr="400",Zr="600",qr="normal",oe="-0.12px",_e="-0.24px",te="-0.32px",re="-0.4px",ee="-0.48px",ie="normal",ce="12px",ne="16px",se="20px",ue="24px",ae="28px",ke="32px",le="36px",de="40px",pe="48px",ge="56px",fe="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",be="0px 0px 0px 1px #e0e4ea inset",he="0px 0px 0px 1px #d60027 inset",me="0px 0px 0px 1px #ad000e inset",xe="0px 0px 0px 1px #e0e4ea inset",we="0px 0px 0px 1px #0044f4 inset",ve="0px 0px 0px 1px #001466 inset",ye="0px 0px 0px 1px #5f9aff inset",Ce="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",Fe="0px",Se="2px",ze="4px",Be="6px",Ie="8px",Te="12px",Ae="16px",De="20px",Le="24px",Ne="32px",Ee="40px",$e="48px",Ke="56px",Pe="64px",Ue="80px",Oe="96px",je="auto",He={kui_color_background:D,kui_color_background_danger:L,kui_color_background_danger_strong:N,kui_color_background_danger_stronger:E,kui_color_background_danger_strongest:$,kui_color_background_danger_weak:K,kui_color_background_danger_weaker:P,kui_color_background_danger_weakest:U,kui_color_background_decorative_purple:O,kui_color_background_decorative_purple_weakest:j,kui_color_background_disabled:H,kui_color_background_inverse:M,kui_color_background_neutral:V,kui_color_background_neutral_strong:X,kui_color_background_neutral_stronger:R,kui_color_background_neutral_strongest:W,kui_color_background_neutral_weak:G,kui_color_background_neutral_weaker:J,kui_color_background_neutral_weakest:Q,kui_color_background_overlay:Y,kui_color_background_primary:Z,kui_color_background_primary_strong:q,kui_color_background_primary_stronger:oo,kui_color_background_primary_strongest:_o,kui_color_background_primary_weak:to,kui_color_background_primary_weaker:ro,kui_color_background_primary_weakest:eo,kui_color_background_success_weak:io,kui_color_background_success_weakest:co,kui_color_background_transparent:no,kui_color_background_warning_weak:so,kui_color_background_warning_weakest:uo,kui_color_border:ao,kui_color_border_danger:ko,kui_color_border_danger_strong:lo,kui_color_border_danger_stronger:po,kui_color_border_danger_strongest:go,kui_color_border_danger_weak:fo,kui_color_border_danger_weaker:bo,kui_color_border_danger_weakest:ho,kui_color_border_decorative_purple:mo,kui_color_border_disabled:xo,kui_color_border_inverse:wo,kui_color_border_neutral_weak:vo,kui_color_border_neutral_weaker:yo,kui_color_border_primary:Co,kui_color_border_primary_strong:Fo,kui_color_border_primary_stronger:So,kui_color_border_primary_strongest:zo,kui_color_border_primary_weak:Bo,kui_color_border_primary_weaker:Io,kui_color_border_primary_weakest:To,kui_color_border_transparent:Ao,kui_color_text:Do,kui_color_text_danger:Lo,kui_color_text_danger_strong:No,kui_color_text_decorative_aqua:Eo,kui_color_text_decorative_pink:$o,kui_color_text_decorative_purple:Ko,kui_color_text_decorative_purple_strong:Po,kui_color_text_disabled:Uo,kui_color_text_inverse:Oo,kui_color_text_neutral:jo,kui_color_text_neutral_strong:Ho,kui_color_text_neutral_stronger:Mo,kui_color_text_neutral_strongest:Vo,kui_color_text_neutral_weak:Xo,kui_color_text_neutral_weaker:Ro,kui_color_text_primary:Wo,kui_color_text_primary_strong:Go,kui_color_text_primary_stronger:Jo,kui_color_text_primary_strongest:Qo,kui_color_text_primary_weak:Yo,kui_color_text_success:Zo,kui_color_text_success_strong:qo,kui_color_text_warning:o_,kui_color_text_warning_strong:__,kui_animation_duration_20:t_,kui_border_radius_0:r_,kui_border_radius_10:e_,kui_border_radius_20:i_,kui_border_radius_30:c_,kui_border_radius_40:n_,kui_border_radius_50:s_,kui_border_radius_circle:u_,kui_border_radius_round:a_,kui_border_width_0:k_,kui_border_width_10:l_,kui_border_width_20:d_,kui_border_width_30:p_,kui_breakpoint_mobile:g_,kui_breakpoint_phablet:f_,kui_breakpoint_tablet:b_,kui_breakpoint_laptop:h_,kui_breakpoint_desktop:m_,kui_icon_color_danger:x_,kui_icon_color_neutral:w_,kui_icon_color_primary:v_,kui_icon_color_success:y_,kui_icon_color_warning:C_,kui_icon_size_10:F_,kui_icon_size_20:S_,kui_icon_size_30:z_,kui_icon_size_40:B_,kui_icon_size_50:I_,kui_icon_size_60:T_,kui_icon_size_70:A_,kui_icon_size_80:D_,kui_method_color_background_connect:L_,kui_method_color_background_delete:N_,kui_method_color_background_get:E_,kui_method_color_background_head:$_,kui_method_color_background_options:K_,kui_method_color_background_patch:P_,kui_method_color_background_post:U_,kui_method_color_background_put:O_,kui_method_color_background_trace:j_,kui_method_color_text_connect:H_,kui_method_color_text_connect_strong:M_,kui_method_color_text_delete:V_,kui_method_color_text_delete_strong:X_,kui_method_color_text_get:R_,kui_method_color_text_get_strong:W_,kui_method_color_text_head:G_,kui_method_color_text_head_strong:J_,kui_method_color_text_options:Q_,kui_method_color_text_options_strong:Y_,kui_method_color_text_patch:Z_,kui_method_color_text_patch_strong:q_,kui_method_color_text_post:ot,kui_method_color_text_post_strong:_t,kui_method_color_text_put:tt,kui_method_color_text_put_strong:rt,kui_method_color_text_trace:et,kui_method_color_text_trace_strong:it,kui_navigation_color_background:ct,kui_navigation_color_background_selected:nt,kui_navigation_color_border:st,kui_navigation_color_border_child:ut,kui_navigation_color_border_divider:at,kui_navigation_color_text:kt,kui_navigation_color_text_focus:lt,kui_navigation_color_text_hover:dt,kui_navigation_color_text_selected:pt,kui_navigation_shadow_border:gt,kui_navigation_shadow_border_child:ft,kui_navigation_shadow_focus:bt,kui_status_color_100:ht,kui_status_color_101:mt,kui_status_color_102:xt,kui_status_color_103:wt,kui_status_color_200:vt,kui_status_color_201:yt,kui_status_color_202:Ct,kui_status_color_203:Ft,kui_status_color_204:St,kui_status_color_205:zt,kui_status_color_206:Bt,kui_status_color_207:It,kui_status_color_208:Tt,kui_status_color_226:At,kui_status_color_300:Dt,kui_status_color_301:Lt,kui_status_color_302:Nt,kui_status_color_303:Et,kui_status_color_304:$t,kui_status_color_305:Kt,kui_status_color_307:Pt,kui_status_color_308:Ut,kui_status_color_400:Ot,kui_status_color_401:jt,kui_status_color_402:Ht,kui_status_color_403:Mt,kui_status_color_404:Vt,kui_status_color_405:Xt,kui_status_color_406:Rt,kui_status_color_407:Wt,kui_status_color_408:Gt,kui_status_color_409:Jt,kui_status_color_410:Qt,kui_status_color_411:Yt,kui_status_color_412:Zt,kui_status_color_413:qt,kui_status_color_414:or,kui_status_color_415:_r,kui_status_color_416:tr,kui_status_color_417:rr,kui_status_color_418:er,kui_status_color_421:ir,kui_status_color_422:cr,kui_status_color_423:nr,kui_status_color_424:sr,kui_status_color_425:ur,kui_status_color_426:ar,kui_status_color_428:kr,kui_status_color_429:lr,kui_status_color_431:dr,kui_status_color_451:pr,kui_status_color_500:gr,kui_status_color_501:fr,kui_status_color_502:br,kui_status_color_503:hr,kui_status_color_504:mr,kui_status_color_505:xr,kui_status_color_506:wr,kui_status_color_507:vr,kui_status_color_508:yr,kui_status_color_510:Cr,kui_status_color_511:Fr,kui_status_color_1na:Sr,kui_status_color_2na:zr,kui_status_color_3na:Br,kui_status_color_4na:Ir,kui_status_color_5na:Tr,kui_status_color_100s:Ar,kui_status_color_200s:Dr,kui_status_color_300s:Lr,kui_status_color_400s:Nr,kui_status_color_500s:Er,kui_font_family_code:$r,kui_font_family_heading:Kr,kui_font_family_text:Pr,kui_font_size_10:Ur,kui_font_size_20:Or,kui_font_size_30:jr,kui_font_size_40:Hr,kui_font_size_50:Mr,kui_font_size_60:Vr,kui_font_size_70:Xr,kui_font_size_80:Rr,kui_font_size_90:Wr,kui_font_size_100:Gr,kui_font_weight_bold:Jr,kui_font_weight_medium:Qr,kui_font_weight_regular:Yr,kui_font_weight_semibold:Zr,kui_letter_spacing_0:qr,kui_letter_spacing_minus_10:oe,kui_letter_spacing_minus_20:_e,kui_letter_spacing_minus_30:te,kui_letter_spacing_minus_40:re,kui_letter_spacing_minus_50:ee,kui_letter_spacing_normal:ie,kui_line_height_10:ce,kui_line_height_20:ne,kui_line_height_30:se,kui_line_height_40:ue,kui_line_height_50:ae,kui_line_height_60:ke,kui_line_height_70:le,kui_line_height_80:de,kui_line_height_90:pe,kui_line_height_100:ge,kui_shadow:fe,kui_shadow_border:be,kui_shadow_border_danger:he,kui_shadow_border_danger_strong:me,kui_shadow_border_disabled:xe,kui_shadow_border_primary:we,kui_shadow_border_primary_strongest:ve,kui_shadow_border_primary_weak:ye,kui_shadow_focus:Ce,kui_space_0:Fe,kui_space_10:Se,kui_space_20:ze,kui_space_30:Be,kui_space_40:Ie,kui_space_50:Te,kui_space_60:Ae,kui_space_70:De,kui_space_80:Le,kui_space_90:Ne,kui_space_100:Ee,kui_space_110:$e,kui_space_120:Ke,kui_space_130:Pe,kui_space_140:Ue,kui_space_150:Oe,kui_space_auto:je};function Me(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Ve(o){return o.replace(/-([a-z])/g,(_,t)=>t.toUpperCase())}function Xe(o){return Me(Ve(o))}function Re(o){return o.toUpperCase().replace(/-/g,"_")}function f(o){return n(`${Xe(o.name)}Icon`)}const We=new Set(Object.keys(He).map(o=>o.substring(4).replaceAll("_","-")));function S(o){const _=o.split("-");for(;_.length;){const t=_.join("-");if(We.has(t))return t;_.shift()}return null}function Ge(o){const{Appearance:_,"Show icon left":t,"Icon left":i,"Show icon right":r,"Icon right":e,Label:c}=o.properties,s={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[_],u=r&&!t?!1:void 0,a=t?i:r?e:void 0;return n("Badge",{appearance:s,iconBefore:u},[c,...a?[n("template",{"#icon":!0},[f(a)])]:[]])}function Je(o){const{Method:_}=o.properties,t={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[_];return n("KBadge",{appearance:t},_?[_]:[])}function Qe(o){const _=F(o,r=>r.type==="INSTANCE"&&r.name.startsWith("Level ")).map((r,e)=>{const{Icon:c,"Show icon":s,Text:u}=r.properties;return{item:{text:u||void 0,key:`level-${e}`},icon:s?c:void 0}}),t=_.map(({item:r})=>r),i=_.map(({icon:r},e)=>{if(r)return n("template",{[`#icon-level-${e}`]:!0},[f(r)])}).filter(r=>r!=null);return n("KBreadcrumbs",{items:t},i)}function h(o){const{Appearance:_,Size:t,State:i,Label:r,Position:e,Icon:c,"Icon danger":s,"Icon left":u,"Icon right":a}=o.properties,p={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[_],l={Small:"small",Medium:void 0,Large:"large"}[t],g={Disabled:!0,Default:void 0}[i];let k=[];return o.name==="Button"?k=[r]:o.name==="Icon Button"?e==="Left"?k=[f(_==="Danger"?s:u),r]:e==="Right"&&(k=[r,f(a)]):o.name==="Icon Only"&&(k=[f(_==="Danger"?s:c)]),n("KButton",{appearance:p,size:l,disabled:g,onClick:!0},k)}function Ye(o){const _=d(o,{type:"TEXT",name:"title"}),t=d(o,{type:"TEXT",name:"desc"});return n("KCard",{title:_?.characters},t?.characters?[t.characters]:[])}function z(o){const{Label:_,"Show required":t,"Show tooltip":i}=o.properties,r={};t&&(r.required=!0);const e=C(o,{type:"INSTANCE",name:"Info Tooltip"});if(i&&e){r.info="...";const{"Show tooltip":c}=e.properties,s=C(e,{type:"INSTANCE",name:"Tooltip"});if(c&&s){const{Text:u}=s.properties;u&&(r.info=u)}}return n("KLabel",r,[_])}function B(o){const{State:_,"Show label":t,"Show help text":i}=o.properties;let r,e;const c=d(o,{type:"INSTANCE",name:"Label"});t&&c&&(e=z(c));const s=d(o,a=>a.type==="INSTANCE"&&["Parts/.Help Text","Help text"].includes(a.name));if(i&&s){const{Text:a}=s.properties;a&&(r=a)}const u=e&&Object.keys(e.props).length>0?e.props:void 0;return{label:e?e.children[0]:void 0,labelAttributes:u,description:r,error:_==="Error"?!0:void 0,disabled:_==="Disabled"?!0:void 0}}function Ze(o){const{Type:_}=o.properties,t=_==="Indeterminate"?!0:void 0,i=B(o);return n("KCheckbox",{"v-model":"checked",indeterminate:t,...i})}function qe(o){const{Theme:_,"Show functions":t,"Show copy":i,"Show alt action":r}=o.properties,e={Light:void 0,Dark:"dark"}[_],c=t?!0:void 0,s=i===!1?!1:void 0;let u,a=!1;const p=d(o,{type:"INSTANCE",name:"Icon Button"});if(r&&p){const{"Icon left":l,Label:g}=p.properties,k=[];l&&(l.name==="copy"&&(a=!0),k.push(f(l))),g&&k.push(g),k.length>0&&(u=n("template",{"#secondary-actions":!0},[n("CodeBlockIconButton",{theme:e,copyTooltip:a?"Copy...":void 0,onClick:"() => {}"},k)]))}return n("KCodeBlock",{id:"...",":code":"code",theme:e,language:"json",searchable:c,showCopyButton:s},u?[u]:[])}function oi(o){const{Theme:_}=o.properties,t={Light:void 0,Dark:"dark"}[_];return n("CodeBlock",{":code":"code",theme:t,singleLine:!0})}function _i(o){const{"Show link":_}=o.properties,t=d(o,{type:"TEXT",name:"link"}),i=_&&t?.characters||void 0;return n("KCollapse",{"v-model":"isCollapsed",triggerLabel:i},["Lorem ipsum dolor sit amet, consectetur adipiscing elit."])}function ti(o){const{"Show icon":_,Icon:t,Title:i,Description:r,"Show button":e}=o.properties,c=d(o,{type:"INSTANCE",name:"Button"}),s=i||void 0,u=r||void 0,{Appearance:a,Label:p,State:l}=c?c.properties:{},g=e&&c&&a==="Primary",k=g?p:void 0,I=e?void 0:!1,T=g&&l==="Disabled"?!0:void 0;let b,m;_&&t&&(b={analytics:"default",warning:"error",search:"search",kong:"kong"}[t.name],b?b==="default"&&(b=void 0):m=t);const x=[];if(m&&x.push(n("template",{"#icon":!0},[f(m)])),e&&!g){const v=F(o,y=>y.type==="INSTANCE"&&["Icon Only","Icon Button","Button"].includes(y.name));v&&x.push(n("template",{"#action":!0},v.map(h)))}return n("KEmptyState",{title:s,message:u,iconVariant:b,actionButtonText:k,actionButtonVisible:I,actionButtonDisabled:T},x)}function ri(o){const{"Show value":_,Placeholder:t,"Show icon left":i,"Icon left":r}=o.properties,e=_?void 0:t,c=i&&r?f(r):void 0,s=B(o);return n("KFileUpload",{placeholder:e,...s},c?[n("template",{"#icon":!0},[c])]:void 0)}const ei={Alert:A,Badge:Ge,MethodBadge:Je,GlobalBreadcrumb:Qe,Button:h,IconButton:h,IconOnly:h,Card:Ye,Checkbox:Ze,CodeBlock:qe,CodeLine:oi,Collapse:_i,EmptyState:ti,FileUpload:ri,Label:z},ii=({component:o})=>{const _=ei[o.name.replaceAll(" ","")];return _?_(o):""},ci={name:"Kong UI",code:{component:{title:"Component",lang:"vue",transformComponent:ii},css:{title:"SCSS",lang:"scss",transformVariable({name:o,value:_}){const t=S(o);return t?`$kui-${t.toLowerCase()}`:_?`var(--${o}, ${_})`:`var(--${o})`}},js:{transformVariable({name:o,value:_}){const t=S(o);return t?`\0KUI_${Re(t)}\0`:_?`var(--${o}, ${_})`:`var(--${o})`}}}};export{ci as plugin};
