let R=`undefined`,Q=null,_=`string`,a0=`Object`,U=0,a1=4,X=`function`,W=1,S=`utf-8`,Z=`boolean`,a4=65,O=Array,$=Array.isArray,T=Error,Y=FinalizationRegistry,a6=Object,a5=Object.getPrototypeOf,a2=Promise,V=Uint8Array,a3=globalThis,P=undefined;var z=((b,c)=>{a.__wbindgen_export_6(b,c)});var c=(a=>b[a]);var x=((b,c)=>{a.__wbindgen_export_4(b,c)});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:W,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===U){a.__wbindgen_export_3.get(f.dtor)(f.a,f.b);f.a=U;t.unregister(f)}}};g.original=f;t.register(g,f,f);return g});var K=((a,b)=>{});var y=((b,c,d)=>{a.__wbindgen_export_5(b,c,i(d))});var f=(()=>{if(e===Q||e.byteLength===U){e=new V(a.memory.buffer)};return e});var k=(a=>a===P||a===Q);var r=(a=>{if(a<132)return;b[a]=h;h=a});var I=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var w=(a=>{const b=typeof a;if(b==`number`||b==Z||a==Q){return `${a}`};if(b==_){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Q){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==_&&b.length>U){return `Function(${b})`}else{return `Function`}};if($(a)){const b=a.length;let c=`[`;if(b>U){c+=w(a[U])};for(let d=W;d<b;d++){c+=`, `+ w(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c&&c.length>W){d=c[W]}else{return toString.call(a)};if(d==a0){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a0}};if(a instanceof T){return `${a.name}: ${a.message}\n${a.stack}`};return d});var q=(()=>{if(p===Q||p.buffer.detached===!0||p.buffer.detached===P&&p.buffer!==a.memory.buffer){p=new DataView(a.memory.buffer)};return p});function j(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_export_0(i(b))}}var s=(a=>{const b=c(a);r(a);return b});var N=(async(b)=>{if(a!==P)return a;if(typeof b!==R){if(a5(b)===a6.prototype){({module_or_path:b}=b)}else{console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)}};if(typeof b===R){b=new URL(`portfolio_bg.wasm`,import.meta.url)};const c=J();if(typeof b===_||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};K(c);const {instance:d,module:e}=await I(await b,c);return L(d,e)});var J=(()=>{const b={};b.wbg={};b.wbg.__wbg_addEventListener_90e553fdce254421=function(){return j(((a,b,d,e)=>{c(a).addEventListener(g(b,d),c(e))}),arguments)};b.wbg.__wbg_add_9b5191a4a4f767dc=function(){return j(((a,b,d)=>{c(a).add(g(b,d))}),arguments)};b.wbg.__wbg_altKey_d7495666df921121=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_body_942ea927546a04ba=(a=>{const b=c(a).body;return k(b)?U:i(b)});b.wbg.__wbg_buffer_09165b52af8c5237=(a=>{const b=c(a).buffer;return i(b)});b.wbg.__wbg_buffer_609cc3eee51ed158=(a=>{const b=c(a).buffer;return i(b)});b.wbg.__wbg_button_f75c56aec440ea04=(a=>{const b=c(a).button;return b});b.wbg.__wbg_byobRequest_77d9adf63337edfb=(a=>{const b=c(a).byobRequest;return k(b)?U:i(b)});b.wbg.__wbg_byteLength_e674b853d9c77e1d=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_byteOffset_fd862df290ef848d=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_call_672a4d21634d4a24=function(){return j(((a,b)=>{const d=c(a).call(c(b));return i(d)}),arguments)};b.wbg.__wbg_call_7cccdd69e0791ae2=function(){return j(((a,b,d)=>{const e=c(a).call(c(b),c(d));return i(e)}),arguments)};b.wbg.__wbg_classList_3fa995ef71da9e8e=(a=>{const b=c(a).classList;return i(b)});b.wbg.__wbg_cloneNode_a8ce4052a2c37536=function(){return j(((a,b)=>{const d=c(a).cloneNode(b!==U);return i(d)}),arguments)};b.wbg.__wbg_cloneNode_e35b333b87d51340=function(){return j((a=>{const b=c(a).cloneNode();return i(b)}),arguments)};b.wbg.__wbg_close_304cc1fef3466669=function(){return j((a=>{c(a).close()}),arguments)};b.wbg.__wbg_close_5ce03e29be453811=function(){return j((a=>{c(a).close()}),arguments)};b.wbg.__wbg_composedPath_977ce97a0ef39358=(a=>{const b=c(a).composedPath();return i(b)});b.wbg.__wbg_content_537e4105afcd9cee=(a=>{const b=c(a).content;return i(b)});b.wbg.__wbg_createComment_8b540d4b9d22f212=((a,b,d)=>{const e=c(a).createComment(g(b,d));return i(e)});b.wbg.__wbg_createElementNS_914d752e521987da=function(){return j(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===U?P:g(b,d),g(e,f));return i(h)}),arguments)};b.wbg.__wbg_createElement_8c9931a732ee2fea=function(){return j(((a,b,d)=>{const e=c(a).createElement(g(b,d));return i(e)}),arguments)};b.wbg.__wbg_createTextNode_42af1a9f21bb3360=((a,b,d)=>{const e=c(a).createTextNode(g(b,d));return i(e)});b.wbg.__wbg_ctrlKey_cdbe8154dfb00d1f=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_decodeURIComponent_47f6f7c91d9430fc=function(){return j(((a,b)=>{const c=decodeURIComponent(g(a,b));return i(c)}),arguments)};b.wbg.__wbg_decodeURI_985604b8372324c2=function(){return j(((a,b)=>{const c=decodeURI(g(a,b));return i(c)}),arguments)};b.wbg.__wbg_defaultPrevented_2fc2f28cc3ab3140=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_documentElement_197a88c262a0aa27=(a=>{const b=c(a).documentElement;return k(b)?U:i(b)});b.wbg.__wbg_document_d249400bd7bd996d=(a=>{const b=c(a).document;return k(b)?U:i(b)});b.wbg.__wbg_done_769e5ede4b31c67b=(a=>{const b=c(a).done;return b});b.wbg.__wbg_enqueue_bb16ba72f537dc9e=function(){return j(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_error_524f506f44df1645=(a=>{console.error(c(a))});b.wbg.__wbg_firstElementChild_d75d385f5abd1414=(a=>{const b=c(a).firstElementChild;return k(b)?U:i(b)});b.wbg.__wbg_getAttribute_ea5166be2deba45e=((b,d,e,f)=>{const h=c(d).getAttribute(g(e,f));var i=k(h)?U:o(h,a.__wbindgen_export_1,a.__wbindgen_export_2);var j=l;q().setInt32(b+ a1*W,j,!0);q().setInt32(b+ a1*U,i,!0)});b.wbg.__wbg_getElementById_f827f0d6648718a8=((a,b,d)=>{const e=c(a).getElementById(g(b,d));return k(e)?U:i(e)});b.wbg.__wbg_getTime_46267b1c24877e30=(a=>{const b=c(a).getTime();return b});b.wbg.__wbg_get_67b2ba62fc30de12=function(){return j(((a,b)=>{const d=Reflect.get(c(a),c(b));return i(d)}),arguments)};b.wbg.__wbg_get_b9b93047fe3cf45b=((a,b)=>{const d=c(a)[b>>>U];return i(d)});b.wbg.__wbg_hasAttribute_db31090c2e646f57=((a,b,d)=>{const e=c(a).hasAttribute(g(b,d));return e});b.wbg.__wbg_hash_01705e9bdeb40d33=((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)});b.wbg.__wbg_hash_dd4b49269c385c8a=function(){return j(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)}),arguments)};b.wbg.__wbg_history_b8221edd09c17656=function(){return j((a=>{const b=c(a).history;return i(b)}),arguments)};b.wbg.__wbg_href_3273d88cf0b3b6ff=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)});b.wbg.__wbg_insertBefore_c181fb91844cd959=function(){return j(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return i(e)}),arguments)};b.wbg.__wbg_instanceof_Element_0af65443936d5154=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_HtmlAnchorElement_1ff926b551076f86=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Window_def73ea0955fc569=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_isArray_a1eab7e0d067391b=(a=>{const b=$(c(a));return b});b.wbg.__wbg_iterator_9a24c88df860dc65=(()=>{const a=Symbol.iterator;return i(a)});b.wbg.__wbg_length_a446193dc22c12f8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_length_e2d2a49132c1b256=(a=>{const b=c(a).length;return b});b.wbg.__wbg_location_350d99456c2f3693=(a=>{const b=c(a).location;return i(b)});b.wbg.__wbg_log_c222819a41e063d3=(a=>{console.log(c(a))});b.wbg.__wbg_metaKey_0b25f7848e014cc8=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_new0_f788a2397c7ca929=(()=>{const a=new Date();return i(a)});b.wbg.__wbg_new_23a2665fac83c611=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=U;try{return A(d,c.b,a,b)}finally{c.a=d}};const e=new a2(d);return i(e)}finally{c.a=c.b=U}});b.wbg.__wbg_new_c68d7209be747379=((a,b)=>{const c=new T(g(a,b));return i(c)});b.wbg.__wbg_newnoargs_105ed471475aaf50=((a,b)=>{const c=new Function(g(a,b));return i(c)});b.wbg.__wbg_newwithbase_161c299e7a34e2eb=function(){return j(((a,b,c,d)=>{const e=new URL(g(a,b),g(c,d));return i(e)}),arguments)};b.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a=((a,b,d)=>{const e=new V(c(a),b>>>U,d>>>U);return i(e)});b.wbg.__wbg_newwithstr_e55017f371f42aa6=function(){return j(((a,b)=>{const c=new URLSearchParams(g(a,b));return i(c)}),arguments)};b.wbg.__wbg_next_25feadfc0913fea9=(a=>{const b=c(a).next;return i(b)});b.wbg.__wbg_next_6574e1a8a62d1055=function(){return j((a=>{const b=c(a).next();return i(b)}),arguments)};b.wbg.__wbg_origin_13f696c2de6a298e=((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)});b.wbg.__wbg_origin_7c5d649acdace3ea=function(){return j(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)}),arguments)};b.wbg.__wbg_parentNode_9de97a0e7973ea4e=(a=>{const b=c(a).parentNode;return k(b)?U:i(b)});b.wbg.__wbg_pathname_9b0b04c4e19316d0=((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)});b.wbg.__wbg_pathname_f525fe3ba3d01fcf=function(){return j(((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)}),arguments)};b.wbg.__wbg_preventDefault_c2314fd813c02b3c=(a=>{c(a).preventDefault()});b.wbg.__wbg_pushState_d132f15566570786=function(){return j(((a,b,d,e,f,h)=>{c(a).pushState(c(b),g(d,e),f===U?P:g(f,h))}),arguments)};b.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_d3219def82552485=(a=>{const b=c(a).queueMicrotask;return i(b)});b.wbg.__wbg_remove_282d941ca37d0c63=function(){return j(((a,b,d)=>{c(a).remove(g(b,d))}),arguments)};b.wbg.__wbg_remove_e2d2659f3128c045=(a=>{c(a).remove()});b.wbg.__wbg_remove_efb062ab554e1fbd=(a=>{c(a).remove()});b.wbg.__wbg_replaceState_79f3b896be12c919=function(){return j(((a,b,d,e,f,h)=>{c(a).replaceState(c(b),g(d,e),f===U?P:g(f,h))}),arguments)};b.wbg.__wbg_resolve_4851785c9c5f573d=(a=>{const b=a2.resolve(c(a));return i(b)});b.wbg.__wbg_respond_1f279fa9f8edcb1c=function(){return j(((a,b)=>{c(a).respond(b>>>U)}),arguments)};b.wbg.__wbg_scrollIntoView_d13094450218e94b=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_scrollTo_26cd993048111460=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_searchParams_da316d96d88b6d30=(a=>{const b=c(a).searchParams;return i(b)});b.wbg.__wbg_search_c1c3bfbeadd96c47=function(){return j(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)}),arguments)};b.wbg.__wbg_search_e0e79cfe010c5c23=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)});b.wbg.__wbg_setAttribute_2704501201f15687=function(){return j(((a,b,d,e,f)=>{c(a).setAttribute(g(b,d),g(e,f))}),arguments)};b.wbg.__wbg_set_65595bdd868b3009=((a,b,d)=>{c(a).set(c(b),d>>>U)});b.wbg.__wbg_setinnerHTML_31bde41f835786f7=((a,b,d)=>{c(a).innerHTML=g(b,d)});b.wbg.__wbg_setnodeValue_58cb1b2f6b6c33d2=((a,b,d)=>{c(a).nodeValue=b===U?P:g(b,d)});b.wbg.__wbg_shiftKey_2bebb3b703254f47=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=(()=>{const a=typeof global===R?Q:global;return k(a)?U:i(a)});b.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=(()=>{const a=typeof a3===R?Q:a3;return k(a)?U:i(a)});b.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=(()=>{const a=typeof self===R?Q:self;return k(a)?U:i(a)});b.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=(()=>{const a=typeof window===R?Q:window;return k(a)?U:i(a)});b.wbg.__wbg_target_35037abec4967784=((b,d)=>{const e=c(d).target;const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)});b.wbg.__wbg_then_44b73946d2fb3e7d=((a,b)=>{const d=c(a).then(c(b));return i(d)});b.wbg.__wbg_value_cd1ffa7b1ab794f1=(a=>{const b=c(a).value;return i(b)});b.wbg.__wbg_view_fd8a56e8983f448d=(a=>{const b=c(a).view;return k(b)?U:i(b)});b.wbg.__wbg_warn_4ca3906c248c47c4=(a=>{console.warn(c(a))});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===Z?(b?W:U):2;return d});b.wbg.__wbindgen_cb_drop=(a=>{const b=s(a).original;if(b.cnt--==W){b.a=U;return !0};const c=!1;return c});b.wbg.__wbindgen_closure_wrapper175=((a,b,c)=>{const d=u(a,b,a4,x);return i(d)});b.wbg.__wbindgen_closure_wrapper180=((a,b,c)=>{const d=u(a,b,a4,y);return i(d)});b.wbg.__wbindgen_closure_wrapper809=((a,b,c)=>{const d=u(a,b,85,y);return i(d)});b.wbg.__wbindgen_closure_wrapper812=((a,b,c)=>{const d=v(a,b,80,z);return i(d)});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=w(c(d));const f=o(e,a.__wbindgen_export_1,a.__wbindgen_export_2);const g=l;q().setInt32(b+ a1*W,g,!0);q().setInt32(b+ a1*U,f,!0)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==Q;return d});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===_;return b});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===P;return b});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return i(b)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return i(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{s(a)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===_?e:P;var g=k(f)?U:o(f,a.__wbindgen_export_1,a.__wbindgen_export_2);var h=l;q().setInt32(b+ a1*W,h,!0);q().setInt32(b+ a1*U,g,!0)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=g(a,b);return i(c)});b.wbg.__wbindgen_throw=((a,b)=>{throw new T(g(a,b))});return b});var A=((b,c,d,e)=>{a.__wbindgen_export_7(b,c,i(d),i(e))});var u=((b,c,d,e)=>{const f={a:b,b:c,cnt:W,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=U;try{return e(c,f.b,...b)}finally{if(--f.cnt===U){a.__wbindgen_export_3.get(f.dtor)(c,f.b);t.unregister(f)}else{f.a=c}}};g.original=f;t.register(g,f,f);return g});var o=((a,b,c)=>{if(c===P){const c=m.encode(a);const d=b(c.length,W)>>>U;f().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,W)>>>U;const g=f();let h=U;for(;h<d;h++){const b=a.charCodeAt(h);if(b>127)break;g[e+ h]=b};if(h!==d){if(h!==U){a=a.slice(h)};e=c(e,d,d=h+ a.length*3,W)>>>U;const b=f().subarray(e+ h,e+ d);const g=n(a,b);h+=g.written;e=c(e,d,h,W)>>>U};l=h;return e});var i=(a=>{if(h===b.length)b.push(b.length+ W);const c=h;h=b[c];b[c]=a;return c});var L=((b,c)=>{a=b.exports;N.__wbindgen_wasm_module=c;p=Q;e=Q;a.__wbindgen_start();return a});var M=(b=>{if(a!==P)return a;if(typeof b!==R){if(a5(b)===a6.prototype){({module:b}=b)}else{console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`)}};const c=J();K(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return L(d,b)});var g=((a,b)=>{a=a>>>U;return d.decode(f().subarray(a,a+ b))});let a;const b=new O(128).fill(P);b.push(P,Q,!0,!1);const d=typeof TextDecoder!==R?new TextDecoder(S,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw T(`TextDecoder not available`)}};if(typeof TextDecoder!==R){d.decode()};let e=Q;let h=b.length;let l=U;const m=typeof TextEncoder!==R?new TextEncoder(S):{encode:()=>{throw T(`TextEncoder not available`)}};const n=typeof m.encodeInto===X?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let p=Q;const t=typeof Y===R?{register:()=>{},unregister:()=>{}}:new Y(b=>{a.__wbindgen_export_3.get(b.dtor)(b.a,b.b)});const B=[`bytes`];const C=typeof Y===R?{register:()=>{},unregister:()=>{}}:new Y(b=>a.__wbg_intounderlyingbytesource_free(b>>>U,W));class D{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=U;C.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b,U)}type(){const b=a.intounderlyingbytesource_type(this.__wbg_ptr);return B[b]}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>U}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,i(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,i(b));return s(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const E=typeof Y===R?{register:()=>{},unregister:()=>{}}:new Y(b=>a.__wbg_intounderlyingsink_free(b>>>U,W));class F{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=U;E.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b,U)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,i(b));return s(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return s(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,i(b));return s(d)}}const G=typeof Y===R?{register:()=>{},unregister:()=>{}}:new Y(b=>a.__wbg_intounderlyingsource_free(b>>>U,W));class H{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=U;G.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b,U)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,i(b));return s(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default N;export{D as IntoUnderlyingByteSource,F as IntoUnderlyingSink,H as IntoUnderlyingSource,M as initSync}