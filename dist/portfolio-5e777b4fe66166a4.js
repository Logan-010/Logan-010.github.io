let a3=4,a0=`Object`,X=`function`,R=1,V=`utf-8`,_=`string`,Y=`number`,Q=null,Z=`boolean`,S=0,a5=63,U=`undefined`,a2=16,O=Array,$=Array.isArray,W=Error,a1=FinalizationRegistry,a4=Promise,T=Uint8Array,P=undefined;var k=((a,b,c)=>{if(c===P){const c=i.encode(a);const d=b(c.length,R)>>>S;h().subarray(d,d+ c.length).set(c);f=c.length;return d};let d=a.length;let e=b(d,R)>>>S;const g=h();let k=S;for(;k<d;k++){const b=a.charCodeAt(k);if(b>127)break;g[e+ k]=b};if(k!==d){if(k!==S){a=a.slice(k)};e=c(e,d,d=k+ a.length*3,R)>>>S;const b=h().subarray(e+ k,e+ d);const f=j(a,b);k+=f.written;e=c(e,d,k,R)>>>S};f=k;return e});var K=((a,b)=>{});var t=(()=>{if(s===Q||s.byteLength===S){s=new Float64Array(a.memory.buffer)};return s});var p=(a=>{const b=c(a);o(a);return b});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var I=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var B=((b,c,d,f)=>{a.__wbindgen_export_6(b,c,e(d),e(f))});var n=(()=>{if(m===Q||m.byteLength===S){m=new Int32Array(a.memory.buffer)};return m});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_export_5(e(b))}}var u=(a=>{const b=typeof a;if(b==Y||b==Z||a==Q){return `${a}`};if(b==_){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Q){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==_&&b.length>S){return `Function(${b})`}else{return `Function`}};if($(a)){const b=a.length;let c=`[`;if(b>S){c+=u(a[S])};for(let d=R;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>R){d=c[R]}else{return toString.call(a)};if(d==a0){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a0}};if(a instanceof W){return `${a.name}: ${a.message}\n${a.stack}`};return d});var e=(a=>{if(d===b.length)b.push(b.length+ R);const c=d;d=b[c];b[c]=a;return c});var J=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return e(b)});b.wbg.__wbg_createDocumentFragment_8c86903bbb0a3c3c=(a=>{const b=c(a).createDocumentFragment();return e(b)});b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=c(a).body;return l(b)?S:e(b)});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===_;return b});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbg_call_27c0f87801dedf93=function(){return A(((a,b)=>{const d=c(a).call(c(b));return e(d)}),arguments)};b.wbg.__wbg_get_e3c254076557e348=function(){return A(((a,b)=>{const d=Reflect.get(c(a),c(b));return e(d)}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const g=typeof e===_?e:P;var h=l(g)?S:k(g,a.__wbindgen_export_0,a.__wbindgen_export_1);var i=f;n()[b/a3+ R]=i;n()[b/a3+ S]=h});b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return A((()=>{const a=self.self;return e(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return A((()=>{const a=window.window;return e(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return A((()=>{const a=globalThis.globalThis;return e(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return A((()=>{const a=global.global;return e(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===P;return b});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{var c=z(a,b);const d=new Function(c);return e(d)});b.wbg.__wbg_decodeURI_34e1afc7326c927c=function(){return A(((a,b)=>{var c=z(a,b);const d=decodeURI(c);return e(d)}),arguments)};b.wbg.__wbg_call_b3ca7c6051f9bec1=function(){return A(((a,b,d)=>{const f=c(a).call(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_is_010fdc0f4ab96916=((a,b)=>{const d=Object.is(c(a),c(b));return d});b.wbg.__wbg_exec_b9996525463e30df=((a,b,d)=>{var f=z(b,d);const g=c(a).exec(f);return l(g)?S:e(g)});b.wbg.__wbg_new_3c970fa9da0c5794=((a,b,c,d)=>{var f=z(a,b);var g=z(c,d);const h=new RegExp(f,g);return e(h)});b.wbg.__wbindgen_object_drop_ref=(a=>{p(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=r(a,b);return e(c)});b.wbg.__wbg_error_8e3928cfb8a43e2b=(a=>{console.error(c(a))});b.wbg.__wbg_setdata_8c2b43af041cc1b3=((a,b,d)=>{var e=z(b,d);c(a).data=e});b.wbg.__wbg_previousSibling_9708a091a3e6e03b=(a=>{const b=c(a).previousSibling;return l(b)?S:e(b)});b.wbg.__wbg_remove_49b0a5925a04b955=(a=>{c(a).remove()});b.wbg.__wbg_before_210596e44d88649f=function(){return A(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_childNodes_118168e8b23bcb9b=(a=>{const b=c(a).childNodes;return e(b)});b.wbg.__wbg_length_d0a802565d17eec4=(a=>{const b=c(a).length;return b});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=c(a).document;return l(b)?S:e(b)});b.wbg.__wbg_createComment_354ccab4fdc521ee=((a,b,d)=>{var f=z(b,d);const g=c(a).createComment(f);return e(g)});b.wbg.__wbg_location_2951b5ee34f19221=(a=>{const b=c(a).location;return e(b)});b.wbg.__wbg_requestAnimationFrame_549258cfa66011f0=function(){return A(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_addEventListener_53b787075bd5e003=function(){return A(((a,b,d,e)=>{var f=z(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_removeEventListener_92cb9b3943463338=function(){return A(((a,b,d,e)=>{var f=z(b,d);c(a).removeEventListener(f,c(e))}),arguments)};b.wbg.__wbg_warn_63bbae1730aead09=(a=>{console.warn(c(a))});b.wbg.__wbg_createTextNode_0c38fd80a5b2284d=((a,b,d)=>{var f=z(b,d);const g=c(a).createTextNode(f);return e(g)});b.wbg.__wbindgen_cb_drop=(a=>{const b=p(a).original;if(b.cnt--==R){b.a=S;return !0};const c=!1;return c});b.wbg.__wbg_pathname_c5fe403ef9525ec6=((b,d)=>{const e=c(d).pathname;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbg_search_c68f506c44be6d1e=((b,d)=>{const e=c(d).search;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbg_searchParams_bc5845fe67587f77=(a=>{const b=c(a).searchParams;return e(b)});b.wbg.__wbg_iterator_2cee6dadfd956dfa=(()=>{const a=Symbol.iterator;return e(a)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==Q;return d});b.wbg.__wbg_next_40fc327bfc8770e6=(a=>{const b=c(a).next;return e(b)});b.wbg.__wbg_next_196c84450b364254=function(){return A((a=>{const b=c(a).next();return e(b)}),arguments)};b.wbg.__wbg_done_298b57d23c0fc80c=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_d93c65011f51a456=(a=>{const b=c(a).value;return e(b)});b.wbg.__wbg_isArray_2ab64d95e09ea0ae=(a=>{const b=$(c(a));return b});b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const d=c(a)[b>>>S];return e(d)});b.wbg.__wbg_hash_cdea7a9b7e684a42=((b,d)=>{const e=c(d).hash;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbg_getElementById_c369ff43f0db99cf=((a,b,d)=>{var f=z(b,d);const g=c(a).getElementById(f);return l(g)?S:e(g)});b.wbg.__wbg_scrollIntoView_0c1a31f3d0dce6ae=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_scrollTo_4d970c5e1c4b340b=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===Y?d:P;t()[a/8+ R]=l(e)?S:e;n()[a/a3+ S]=!l(e)});b.wbg.__wbg_sethref_b94692d1a9f05b53=function(){return A(((a,b,d)=>{var e=z(b,d);c(a).href=e}),arguments)};b.wbg.__wbg_defaultPrevented_cc14a1dd3dd69c38=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_button_367cdc7303e3cf9b=(a=>{const b=c(a).button;return b});b.wbg.__wbg_metaKey_86bfd3b0d3a8083f=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_altKey_07da841b54bd3ed6=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_008695ce60a588f5=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_1e76dbfcdd36a4b4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_composedPath_58473fd5ae55f2cd=(a=>{const b=c(a).composedPath();return e(b)});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_href_40fd5bca11c13133=((b,d)=>{const e=c(d).href;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbg_target_f0876f510847bc60=((b,d)=>{const e=c(d).target;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbg_getAttribute_99bddb29274b29b9=((b,d,e,g)=>{var h=z(e,g);const i=c(d).getAttribute(h);var j=l(i)?S:k(i,a.__wbindgen_export_0,a.__wbindgen_export_1);var m=f;n()[b/a3+ R]=m;n()[b/a3+ S]=j});b.wbg.__wbg_preventDefault_b1a4aafc79409429=(a=>{c(a).preventDefault()});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===Z?(b?R:S):2;return d});b.wbg.__wbg_instanceof_HtmlAnchorElement_5fc0eb2fbc8672d8=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_pushState_b8e8d346f8bb33fd=function(){return A(((a,b,d,e,f,g)=>{var h=z(d,e);var i=z(f,g);c(a).pushState(c(b),h,i)}),arguments)};b.wbg.__wbg_replaceState_ec9431bea5108a50=function(){return A(((a,b,d,e,f,g)=>{var h=z(d,e);var i=z(f,g);c(a).replaceState(c(b),h,i)}),arguments)};b.wbg.__wbg_state_9cc3f933b7d50acb=function(){return A((a=>{const b=c(a).state;return e(b)}),arguments)};b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===Q;return b});b.wbg.__wbg_pathname_5449afe3829f96a1=function(){return A(((b,d)=>{const e=c(d).pathname;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g}),arguments)};b.wbg.__wbg_search_489f12953342ec1f=function(){return A(((b,d)=>{const e=c(d).search;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbindgen_throw=((a,b)=>{throw new W(r(a,b))});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const d=c(a).then(c(b));return e(d)});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=c(a).queueMicrotask;return e(b)});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=a4.resolve(c(a));return e(b)});b.wbg.__wbg_close_a994f9425dab445c=function(){return A((a=>{c(a).close()}),arguments)};b.wbg.__wbg_enqueue_ea194723156c0cc2=function(){return A(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_byobRequest_72fca99f9c32c193=(a=>{const b=c(a).byobRequest;return l(b)?S:e(b)});b.wbg.__wbg_view_7f0ce470793a340f=(a=>{const b=c(a).view;return l(b)?S:e(b)});b.wbg.__wbg_byteLength_58f7b4fab1919d44=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_close_184931724d961ccc=function(){return A((a=>{c(a).close()}),arguments)};b.wbg.__wbg_new_28c511d9baebfa89=((a,b)=>{var c=z(a,b);const d=new W(c);return e(d)});b.wbg.__wbg_buffer_dd7f74bc60f1faab=(a=>{const b=c(a).buffer;return e(b)});b.wbg.__wbg_byteOffset_81d60f7392524f62=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=((a,b,d)=>{const f=new T(c(a),b>>>S,d>>>S);return e(f)});b.wbg.__wbg_length_c20a40f15020d68a=(a=>{const b=c(a).length;return b});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return e(b)});b.wbg.__wbg_buffer_12d079cc21e14bdb=(a=>{const b=c(a).buffer;return e(b)});b.wbg.__wbg_set_a47bac70306a19a7=((a,b,d)=>{c(a).set(c(b),d>>>S)});b.wbg.__wbg_new_81740750da40724f=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=S;try{return B(d,c.b,a,b)}finally{c.a=d}};const f=new a4(d);return e(f)}finally{c.a=c.b=S}});b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return A(((a,b,d)=>{var f=z(b,d);const g=c(a).createElement(f);return e(g)}),arguments)};b.wbg.__wbg_createElementNS_556a62fb298be5a2=function(){return A(((a,b,d,f,g)=>{var h=z(b,d);var i=z(f,g);const j=c(a).createElementNS(h,i);return e(j)}),arguments)};b.wbg.__wbg_append_7ba9d5c2eb183eea=function(){return A(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7=((a,b,d)=>{var e=z(b,d);c(a).innerHTML=e});b.wbg.__wbg_hasAttribute_8340e1a2a46f10f3=((a,b,d)=>{var e=z(b,d);const f=c(a).hasAttribute(e);return f});b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1=function(){return A(((a,b,d)=>{var e=z(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_setAttribute_3c9f6c303b696daa=function(){return A(((a,b,d,e,f)=>{var g=z(b,d);var h=z(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_origin_ee93e29ace71f568=function(){return A(((b,d)=>{const e=c(d).origin;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g}),arguments)};b.wbg.__wbg_hash_553098e838e06c1d=function(){return A(((b,d)=>{const e=c(d).hash;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g}),arguments)};b.wbg.__wbg_nextSibling_709614fdb0fb7a66=(a=>{const b=c(a).nextSibling;return l(b)?S:e(b)});b.wbg.__wbg_appendChild_580ccb11a660db68=function(){return A(((a,b)=>{const d=c(a).appendChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_cloneNode_e19c313ea20d5d1d=function(){return A((a=>{const b=c(a).cloneNode();return e(b)}),arguments)};b.wbg.__wbg_respond_b1a43b2e3a06d525=function(){return A(((a,b)=>{c(a).respond(b>>>S)}),arguments)};b.wbg.__wbg_href_7bfb3b2fdc0a6c3f=((b,d)=>{const e=c(d).href;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbg_origin_ea68ac578fa8517a=((b,d)=>{const e=c(d).origin;const g=k(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const h=f;n()[b/a3+ R]=h;n()[b/a3+ S]=g});b.wbg.__wbg_newwithbase_6aabbfb1b2e6a1cb=function(){return A(((a,b,c,d)=>{var f=z(a,b);var g=z(c,d);const h=new URL(f,g);return e(h)}),arguments)};b.wbg.__wbg_history_bc4057de66a2015f=function(){return A((a=>{const b=c(a).history;return e(b)}),arguments)};b.wbg.__wbindgen_closure_wrapper380=((a,b,c)=>{const d=w(a,b,31,x);return e(d)});b.wbg.__wbindgen_closure_wrapper388=((a,b,c)=>{const d=w(a,b,35,y);return e(d)});b.wbg.__wbindgen_closure_wrapper1156=((a,b,c)=>{const d=w(a,b,a5,x);return e(d)});b.wbg.__wbindgen_closure_wrapper1612=((a,b,c)=>{const d=w(a,b,a5,y);return e(d)});return b});var y=((b,c,d)=>{a.__wbindgen_export_4(b,c,e(d))});var M=(b=>{if(a!==P)return a;const c=J();K(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return L(d,b)});var x=((b,c)=>{a.__wbindgen_export_3(b,c)});var N=(async(b)=>{if(a!==P)return a;if(typeof b===U){b=new URL(`portfolio_bg.wasm`,import.meta.url)};const c=J();if(typeof b===_||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};K(c);const {instance:d,module:e}=await I(await b,c);return L(d,e)});var L=((b,c)=>{a=b.exports;N.__wbindgen_wasm_module=c;s=Q;m=Q;g=Q;a.__wbindgen_start();return a});var r=((a,b)=>{a=a>>>S;return q.decode(h().subarray(a,a+ b))});var c=(a=>b[a]);var o=(a=>{if(a<132)return;b[a]=d;d=a});var l=(a=>a===P||a===Q);var h=(()=>{if(g===Q||g.byteLength===S){g=new T(a.memory.buffer)};return g});var z=((a,b)=>{if(a===S){return c(b)}else{return r(a,b)}});let a;const b=new O(128).fill(P);b.push(P,Q,!0,!1);let d=b.length;let f=S;let g=Q;const i=typeof TextEncoder!==U?new TextEncoder(V):{encode:()=>{throw W(`TextEncoder not available`)}};const j=typeof i.encodeInto===X?((a,b)=>i.encodeInto(a,b)):((a,b)=>{const c=i.encode(a);b.set(c);return {read:a.length,written:c.length}});let m=Q;const q=typeof TextDecoder!==U?new TextDecoder(V,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw W(`TextDecoder not available`)}};if(typeof TextDecoder!==U){q.decode()};let s=Q;const v=typeof a1===U?{register:()=>{},unregister:()=>{}}:new a1(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});const C=typeof a1===U?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingbytesource_free(b>>>S));class D{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=S;C.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-a2);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=n()[e/a3+ S];var c=n()[e/a3+ R];var d=z(b,c);if(b!==S){a.__wbindgen_export_7(b,c,R)};return d}finally{a.__wbindgen_add_to_stack_pointer(a2)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>S}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,e(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,e(b));return p(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const E=typeof a1===U?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingsink_free(b>>>S));class F{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=S;E.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,e(b));return p(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return p(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,e(b));return p(d)}}const G=typeof a1===U?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingsource_free(b>>>S));class H{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=S;G.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,e(b));return p(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default N;export{D as IntoUnderlyingByteSource,F as IntoUnderlyingSink,H as IntoUnderlyingSource,M as initSync}