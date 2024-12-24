function Ke(_){return _}function u(_,o,t){return{name:_,props:o||{},children:t||[]}}function f(_,o){return typeof o=="function"?o(_):!(o.type&&_.type!==o.type||o.name&&_.name!==o.name)}function m(_,o){return _.children.filter(t=>f(t,o))}function b(_,o){for(const t of _.children){if(f(t,o))return t;if("children"in t){const e=b(t,o);if(e)return e}}return null}function w(_){const{Appearance:o,"Show icon":t,"Show title":e,Title:c,"Show close":s}=_.properties,r={Info:void 0,Success:"success",Warning:"warning",Danger:"danger"}[o],i=t?!0:void 0,a=e?c:void 0,n=s?!0:void 0,k=s?!0:void 0,p=b(_,{type:"TEXT",name:"desc"});return u("Alert",{appearance:r,showIcon:i,title:a,message:p?.characters,dismissible:n,onDismiss:k})}const v="#ffffff",y="#d60027",F="#ad000e",z="#850000",C="#5c0000",B="#ff3954",I="#ffabab",S="#ffe5e5",D="#6f28ff",A="#f1f0ff",$="#e0e4ea",T="#000933",P="#6c7489",L="#52596e",N="#3a3f51",U="#232633",M="#afb7c5",O="#e0e4ea",j="#f9fafb",E="rgba(0, 9, 51, 0.6)",H="#0044f4",R="#0030cc",K="#002099",V="#001466",W="#5f9aff",G="#bee2ff",J="#eefaff",X="#00d6a4",Q="#ecfffb",Y="transparent",Z="#ffc400",q="#fffce0",__="#e0e4ea",o_="#d60027",t_="#ad000e",r_="#850000",e_="#5c0000",c_="#ff3954",i_="#ffabab",s_="#ffe5e5",n_="#6f28ff",u_="#e0e4ea",a_="rgba(255, 255, 255, 0.2)",k_="#afb7c5",l_="#e0e4ea",d_="#0044f4",p_="#0030cc",g_="#002099",f_="#001466",b_="#5f9aff",x_="#bee2ff",h_="#eefaff",m_="transparent",w_="#000933",v_="#d60027",y_="#ad000e",F_="#00abd2",z_="#d60067",C_="#6f28ff",B_="#5e00f5",I_="#afb7c5",S_="#ffffff",D_="#6c7489",A_="#52596e",$_="#3a3f51",T_="#232633",P_="#afb7c5",L_="#e0e4ea",N_="#0044f4",U_="#0030cc",M_="#002099",O_="#001466",j_="#5f9aff",E_="#007d60",H_="#005944",R_="#995c00",K_="#804400",V_="0.2s",W_="0px",G_="2px",J_="4px",X_="6px",Q_="8px",Y_="10px",Z_="50%",q_="100px",_o="0px",oo="1px",to="2px",ro="4px",eo="640px",co="768px",io="1024px",so="1280px",no="1536px",uo="#f50045",ao="#828a9e",ko="#306fff",lo="#00a17b",po="#ffc400",go="10px",fo="12px",bo="16px",xo="20px",ho="24px",mo="32px",wo="40px",vo="48px",yo="#f1f0ff",Fo="#ffe5e5",zo="#eefaff",Co="#52596e",Bo="#e0e4ea",Io="#ecfcff",So="#ecfffb",Do="#fffce0",Ao="#fff0f7",$o="#6f28ff",To="#5e00f5",Po="#d60027",Lo="#ad000e",No="#0044f4",Uo="#0030cc",Mo="#e0e4ea",Oo="#afb7c5",jo="#52596e",Eo="#3a3f51",Ho="#00819d",Ro="#00647a",Ko="#007d60",Vo="#005944",Wo="#995c00",Go="#804400",Jo="#d60067",Xo="#ad0053",Qo="#000933",Yo="rgba(255, 255, 255, 0.12)",Zo="rgba(255, 255, 255, 0.12)",qo="#00fabe",_t="rgba(255, 255, 255, 0.24)",ot="#bee2ff",tt="#ffffff",rt="#eefaff",et="#00fabe",ct="0 0 0 1px rgba(255, 255, 255, 0.12) inset",it="4px 0 0 0 #00fabe inset",st="0 0 0 1px rgba(255, 255, 255, 0.60) inset",nt="#bee2ff",ut="#8fc1ff",at="#5f9aff",kt="#306fff",lt="#b5ffee",dt="#00fabe",pt="#00d6a4",gt="#00a17b",ft="#007d60",bt="#005944",xt="#b5ffee",ht="#00fabe",mt="#b5ffee",wt="#00a17b",vt="#fff296",yt="#ffe04b",Ft="#ffc400",zt="#b37600",Ct="#995c00",Bt="#804400",It="#fff296",St="#ffe04b",Dt="#FFC2B3",At="#FF9877",$t="#FF723C",Tt="#F75008",Pt="#D13500",Lt="#A31F00",Nt="#FFC2B3",Ut="#FF9877",Mt="#FF723C",Ot="#F75008",jt="#D13500",Et="#A31F00",Ht="#FFC2B3",Rt="#FF9877",Kt="#FF723C",Vt="#F75008",Wt="#D13500",Gt="#A31F00",Jt="#FFC2B3",Xt="#FF9877",Qt="#FF723C",Yt="#F75008",Zt="#D13500",qt="#A31F00",_r="#FFC2B3",or="#FF9877",tr="#FF723C",rr="#F75008",er="#D13500",cr="#ffabab",ir="#ff7272",sr="#ff3954",nr="#f50045",ur="#d60027",ar="#ad000e",kr="#ffabab",lr="#ff7272",dr="#ff3954",pr="#f50045",gr="#d60027",fr="#eefaff",br="#ecfffb",xr="#fffce0",hr="#FFF1EF",mr="#ffe5e5",wr="#5f9aff",vr="#00d6a4",yr="#ffc400",Fr="#FF723C",zr="#ff3954",Cr="'JetBrains Mono', Consolas, monospace",Br="'Inter', Roboto, Helvetica, sans-serif",Ir="'Inter', Roboto, Helvetica, sans-serif",Sr="10px",Dr="12px",Ar="14px",$r="16px",Tr="18px",Pr="20px",Lr="24px",Nr="32px",Ur="40px",Mr="48px",Or="700",jr="500",Er="400",Hr="600",Rr="normal",Kr="-0.12px",Vr="-0.24px",Wr="-0.32px",Gr="-0.4px",Jr="-0.48px",Xr="normal",Qr="12px",Yr="16px",Zr="20px",qr="24px",_e="28px",oe="32px",te="36px",re="40px",ee="48px",ce="56px",ie="0px 4px 20px 0px rgba(0, 0, 0, 0.08)",se="0px 0px 0px 1px #e0e4ea inset",ne="0px 0px 0px 1px #d60027 inset",ue="0px 0px 0px 1px #ad000e inset",ae="0px 0px 0px 1px #e0e4ea inset",ke="0px 0px 0px 1px #0044f4 inset",le="0px 0px 0px 1px #001466 inset",de="0px 0px 0px 1px #5f9aff inset",pe="0px 0px 0px 4px rgba(0, 68, 244, 0.2)",ge="0px",fe="2px",be="4px",xe="6px",he="8px",me="12px",we="16px",ve="20px",ye="24px",Fe="32px",ze="40px",Ce="48px",Be="56px",Ie="64px",Se="80px",De="96px",Ae="auto",$e={kui_color_background:v,kui_color_background_danger:y,kui_color_background_danger_strong:F,kui_color_background_danger_stronger:z,kui_color_background_danger_strongest:C,kui_color_background_danger_weak:B,kui_color_background_danger_weaker:I,kui_color_background_danger_weakest:S,kui_color_background_decorative_purple:D,kui_color_background_decorative_purple_weakest:A,kui_color_background_disabled:$,kui_color_background_inverse:T,kui_color_background_neutral:P,kui_color_background_neutral_strong:L,kui_color_background_neutral_stronger:N,kui_color_background_neutral_strongest:U,kui_color_background_neutral_weak:M,kui_color_background_neutral_weaker:O,kui_color_background_neutral_weakest:j,kui_color_background_overlay:E,kui_color_background_primary:H,kui_color_background_primary_strong:R,kui_color_background_primary_stronger:K,kui_color_background_primary_strongest:V,kui_color_background_primary_weak:W,kui_color_background_primary_weaker:G,kui_color_background_primary_weakest:J,kui_color_background_success_weak:X,kui_color_background_success_weakest:Q,kui_color_background_transparent:Y,kui_color_background_warning_weak:Z,kui_color_background_warning_weakest:q,kui_color_border:__,kui_color_border_danger:o_,kui_color_border_danger_strong:t_,kui_color_border_danger_stronger:r_,kui_color_border_danger_strongest:e_,kui_color_border_danger_weak:c_,kui_color_border_danger_weaker:i_,kui_color_border_danger_weakest:s_,kui_color_border_decorative_purple:n_,kui_color_border_disabled:u_,kui_color_border_inverse:a_,kui_color_border_neutral_weak:k_,kui_color_border_neutral_weaker:l_,kui_color_border_primary:d_,kui_color_border_primary_strong:p_,kui_color_border_primary_stronger:g_,kui_color_border_primary_strongest:f_,kui_color_border_primary_weak:b_,kui_color_border_primary_weaker:x_,kui_color_border_primary_weakest:h_,kui_color_border_transparent:m_,kui_color_text:w_,kui_color_text_danger:v_,kui_color_text_danger_strong:y_,kui_color_text_decorative_aqua:F_,kui_color_text_decorative_pink:z_,kui_color_text_decorative_purple:C_,kui_color_text_decorative_purple_strong:B_,kui_color_text_disabled:I_,kui_color_text_inverse:S_,kui_color_text_neutral:D_,kui_color_text_neutral_strong:A_,kui_color_text_neutral_stronger:$_,kui_color_text_neutral_strongest:T_,kui_color_text_neutral_weak:P_,kui_color_text_neutral_weaker:L_,kui_color_text_primary:N_,kui_color_text_primary_strong:U_,kui_color_text_primary_stronger:M_,kui_color_text_primary_strongest:O_,kui_color_text_primary_weak:j_,kui_color_text_success:E_,kui_color_text_success_strong:H_,kui_color_text_warning:R_,kui_color_text_warning_strong:K_,kui_animation_duration_20:V_,kui_border_radius_0:W_,kui_border_radius_10:G_,kui_border_radius_20:J_,kui_border_radius_30:X_,kui_border_radius_40:Q_,kui_border_radius_50:Y_,kui_border_radius_circle:Z_,kui_border_radius_round:q_,kui_border_width_0:_o,kui_border_width_10:oo,kui_border_width_20:to,kui_border_width_30:ro,kui_breakpoint_mobile:eo,kui_breakpoint_phablet:co,kui_breakpoint_tablet:io,kui_breakpoint_laptop:so,kui_breakpoint_desktop:no,kui_icon_color_danger:uo,kui_icon_color_neutral:ao,kui_icon_color_primary:ko,kui_icon_color_success:lo,kui_icon_color_warning:po,kui_icon_size_10:go,kui_icon_size_20:fo,kui_icon_size_30:bo,kui_icon_size_40:xo,kui_icon_size_50:ho,kui_icon_size_60:mo,kui_icon_size_70:wo,kui_icon_size_80:vo,kui_method_color_background_connect:yo,kui_method_color_background_delete:Fo,kui_method_color_background_get:zo,kui_method_color_background_head:Co,kui_method_color_background_options:Bo,kui_method_color_background_patch:Io,kui_method_color_background_post:So,kui_method_color_background_put:Do,kui_method_color_background_trace:Ao,kui_method_color_text_connect:$o,kui_method_color_text_connect_strong:To,kui_method_color_text_delete:Po,kui_method_color_text_delete_strong:Lo,kui_method_color_text_get:No,kui_method_color_text_get_strong:Uo,kui_method_color_text_head:Mo,kui_method_color_text_head_strong:Oo,kui_method_color_text_options:jo,kui_method_color_text_options_strong:Eo,kui_method_color_text_patch:Ho,kui_method_color_text_patch_strong:Ro,kui_method_color_text_post:Ko,kui_method_color_text_post_strong:Vo,kui_method_color_text_put:Wo,kui_method_color_text_put_strong:Go,kui_method_color_text_trace:Jo,kui_method_color_text_trace_strong:Xo,kui_navigation_color_background:Qo,kui_navigation_color_background_selected:Yo,kui_navigation_color_border:Zo,kui_navigation_color_border_child:qo,kui_navigation_color_border_divider:_t,kui_navigation_color_text:ot,kui_navigation_color_text_focus:tt,kui_navigation_color_text_hover:rt,kui_navigation_color_text_selected:et,kui_navigation_shadow_border:ct,kui_navigation_shadow_border_child:it,kui_navigation_shadow_focus:st,kui_status_color_100:nt,kui_status_color_101:ut,kui_status_color_102:at,kui_status_color_103:kt,kui_status_color_200:lt,kui_status_color_201:dt,kui_status_color_202:pt,kui_status_color_203:gt,kui_status_color_204:ft,kui_status_color_205:bt,kui_status_color_206:xt,kui_status_color_207:ht,kui_status_color_208:mt,kui_status_color_226:wt,kui_status_color_300:vt,kui_status_color_301:yt,kui_status_color_302:Ft,kui_status_color_303:zt,kui_status_color_304:Ct,kui_status_color_305:Bt,kui_status_color_307:It,kui_status_color_308:St,kui_status_color_400:Dt,kui_status_color_401:At,kui_status_color_402:$t,kui_status_color_403:Tt,kui_status_color_404:Pt,kui_status_color_405:Lt,kui_status_color_406:Nt,kui_status_color_407:Ut,kui_status_color_408:Mt,kui_status_color_409:Ot,kui_status_color_410:jt,kui_status_color_411:Et,kui_status_color_412:Ht,kui_status_color_413:Rt,kui_status_color_414:Kt,kui_status_color_415:Vt,kui_status_color_416:Wt,kui_status_color_417:Gt,kui_status_color_418:Jt,kui_status_color_421:Xt,kui_status_color_422:Qt,kui_status_color_423:Yt,kui_status_color_424:Zt,kui_status_color_425:qt,kui_status_color_426:_r,kui_status_color_428:or,kui_status_color_429:tr,kui_status_color_431:rr,kui_status_color_451:er,kui_status_color_500:cr,kui_status_color_501:ir,kui_status_color_502:sr,kui_status_color_503:nr,kui_status_color_504:ur,kui_status_color_505:ar,kui_status_color_506:kr,kui_status_color_507:lr,kui_status_color_508:dr,kui_status_color_510:pr,kui_status_color_511:gr,kui_status_color_1na:fr,kui_status_color_2na:br,kui_status_color_3na:xr,kui_status_color_4na:hr,kui_status_color_5na:mr,kui_status_color_100s:wr,kui_status_color_200s:vr,kui_status_color_300s:yr,kui_status_color_400s:Fr,kui_status_color_500s:zr,kui_font_family_code:Cr,kui_font_family_heading:Br,kui_font_family_text:Ir,kui_font_size_10:Sr,kui_font_size_20:Dr,kui_font_size_30:Ar,kui_font_size_40:$r,kui_font_size_50:Tr,kui_font_size_60:Pr,kui_font_size_70:Lr,kui_font_size_80:Nr,kui_font_size_90:Ur,kui_font_size_100:Mr,kui_font_weight_bold:Or,kui_font_weight_medium:jr,kui_font_weight_regular:Er,kui_font_weight_semibold:Hr,kui_letter_spacing_0:Rr,kui_letter_spacing_minus_10:Kr,kui_letter_spacing_minus_20:Vr,kui_letter_spacing_minus_30:Wr,kui_letter_spacing_minus_40:Gr,kui_letter_spacing_minus_50:Jr,kui_letter_spacing_normal:Xr,kui_line_height_10:Qr,kui_line_height_20:Yr,kui_line_height_30:Zr,kui_line_height_40:qr,kui_line_height_50:_e,kui_line_height_60:oe,kui_line_height_70:te,kui_line_height_80:re,kui_line_height_90:ee,kui_line_height_100:ce,kui_shadow:ie,kui_shadow_border:se,kui_shadow_border_danger:ne,kui_shadow_border_danger_strong:ue,kui_shadow_border_disabled:ae,kui_shadow_border_primary:ke,kui_shadow_border_primary_strongest:le,kui_shadow_border_primary_weak:de,kui_shadow_focus:pe,kui_space_0:ge,kui_space_10:fe,kui_space_20:be,kui_space_30:xe,kui_space_40:he,kui_space_50:me,kui_space_60:we,kui_space_70:ve,kui_space_80:ye,kui_space_90:Fe,kui_space_100:ze,kui_space_110:Ce,kui_space_120:Be,kui_space_130:Ie,kui_space_140:Se,kui_space_150:De,kui_space_auto:Ae};function Te(_){return _.charAt(0).toUpperCase()+_.slice(1)}function Pe(_){return _.replace(/-([a-z])/g,(o,t)=>t.toUpperCase())}function Le(_){return Te(Pe(_))}function Ne(_){return _.toUpperCase().replace(/-/g,"_")}function d(_){return u(`${Le(_.name)}Icon`)}const Ue=new Set(Object.keys($e).map(_=>_.substring(4).replaceAll("_","-")));function x(_){const o=_.split("-");for(;o.length;){const t=o.join("-");if(Ue.has(t))return t;o.shift()}return null}function Me(_){const{Appearance:o,"Show icon left":t,"Icon left":e,"Show icon right":c,"Icon right":s,Label:r}=_.properties,i={Info:void 0,Success:"success",Warning:"warning",Danger:"danger",Neutral:"neutral",Decorative:"decorative"}[o],a=c&&!t?!1:void 0,n=t?e:c?s:void 0;return u("Badge",{appearance:i,iconBefore:a},[r,...n?[u("template",{"#icon":!0},[d(n)])]:[]])}function Oe(_){const{Method:o}=_.properties,t={Get:"get",Post:"post",Put:"put",Delete:"delete",Patch:"patch",Options:"options",Head:"head",Connect:"connect",Trace:"trace",Custom:"custom"}[o];return u("Badge",{appearance:t},o?[o]:[])}function je(_){const{Levels:o}=_.properties,t=Number.parseInt(o,10),e=m(_,{type:"INSTANCE"}).slice(0,t).map((r,i)=>{const{Icon:a,"Show icon":n,Text:k}=r.properties;return{item:{text:k||void 0,key:`level-${i}`},icon:n?a:void 0}}),c=e.map(({item:r})=>r),s=e.map(({icon:r},i)=>{if(r)return u("template",{[`#icon-level-${i}`]:!0},[d(r)])}).filter(r=>r!=null);return u("Breadcrumbs",{items:c},s)}function g(_){const{Appearance:o,Size:t,State:e,Label:c,Position:s,Icon:r,"Icon danger":i,"Icon left":a,"Icon right":n}=_.properties,k={Primary:void 0,Secondary:"secondary",Tertiary:"tertiary",Danger:"danger"}[o],p={Small:"small",Medium:void 0,Large:"large"}[t],h={Disabled:!0,Default:void 0}[e];let l=[];return _.name==="Button"?l=[c]:_.name==="Icon Button"?s==="Left"?l=[d(o==="Danger"?i:a),c]:s==="Right"&&(l=[c,d(n)]):_.name==="Icon Only"&&(l=[d(o==="Danger"?i:r)]),u("Button",{appearance:k,size:p,disabled:h,onClick:!0},l)}const Ee={Alert:w,Badge:Me,"Method Badge":Oe,Button:g,"Icon Button":g,"Icon Only":g,Breadcrumbs:je},He=({component:_})=>{const o=Ee[_.name];return o?o(_):""},Re={name:"Kong UI",code:{component:{title:"Component",lang:"vue",transformComponent:He},css:{title:"SCSS",lang:"scss",transformVariable({name:_,value:o}){const t=x(_);return t?`$kui-${t.toLowerCase()}`:o?`var(--${_}, ${o})`:`var(--${_})`}},js:{transformVariable({name:_,value:o}){const t=x(_);return t?`\0KUI_${Ne(t)}\0`:o?`var(--${_}, ${o})`:`var(--${_})`}}}};export{Re as plugin};
