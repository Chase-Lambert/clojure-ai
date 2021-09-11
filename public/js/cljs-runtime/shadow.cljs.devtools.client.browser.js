goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40900 = arguments.length;
var i__4819__auto___40901 = (0);
while(true){
if((i__4819__auto___40901 < len__4818__auto___40900)){
args__4824__auto__.push((arguments[i__4819__auto___40901]));

var G__40902 = (i__4819__auto___40901 + (1));
i__4819__auto___40901 = G__40902;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40670){
var G__40671 = cljs.core.first(seq40670);
var seq40670__$1 = cljs.core.next(seq40670);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40671,seq40670__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40678 = cljs.core.seq(sources);
var chunk__40679 = null;
var count__40680 = (0);
var i__40681 = (0);
while(true){
if((i__40681 < count__40680)){
var map__40686 = chunk__40679.cljs$core$IIndexed$_nth$arity$2(null,i__40681);
var map__40686__$1 = cljs.core.__destructure_map(map__40686);
var src = map__40686__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40686__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40686__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40686__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40686__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40687){var e_40903 = e40687;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40903);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40903.message)].join('')));
}

var G__40904 = seq__40678;
var G__40905 = chunk__40679;
var G__40906 = count__40680;
var G__40907 = (i__40681 + (1));
seq__40678 = G__40904;
chunk__40679 = G__40905;
count__40680 = G__40906;
i__40681 = G__40907;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40678);
if(temp__5753__auto__){
var seq__40678__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40678__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40678__$1);
var G__40914 = cljs.core.chunk_rest(seq__40678__$1);
var G__40915 = c__4638__auto__;
var G__40916 = cljs.core.count(c__4638__auto__);
var G__40917 = (0);
seq__40678 = G__40914;
chunk__40679 = G__40915;
count__40680 = G__40916;
i__40681 = G__40917;
continue;
} else {
var map__40694 = cljs.core.first(seq__40678__$1);
var map__40694__$1 = cljs.core.__destructure_map(map__40694);
var src = map__40694__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40694__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40694__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40694__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40694__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40695){var e_40918 = e40695;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40918);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40918.message)].join('')));
}

var G__40919 = cljs.core.next(seq__40678__$1);
var G__40920 = null;
var G__40921 = (0);
var G__40922 = (0);
seq__40678 = G__40919;
chunk__40679 = G__40920;
count__40680 = G__40921;
i__40681 = G__40922;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40697 = cljs.core.seq(js_requires);
var chunk__40698 = null;
var count__40699 = (0);
var i__40700 = (0);
while(true){
if((i__40700 < count__40699)){
var js_ns = chunk__40698.cljs$core$IIndexed$_nth$arity$2(null,i__40700);
var require_str_40923 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40923);


var G__40924 = seq__40697;
var G__40925 = chunk__40698;
var G__40926 = count__40699;
var G__40927 = (i__40700 + (1));
seq__40697 = G__40924;
chunk__40698 = G__40925;
count__40699 = G__40926;
i__40700 = G__40927;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40697);
if(temp__5753__auto__){
var seq__40697__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40697__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40697__$1);
var G__40928 = cljs.core.chunk_rest(seq__40697__$1);
var G__40929 = c__4638__auto__;
var G__40930 = cljs.core.count(c__4638__auto__);
var G__40931 = (0);
seq__40697 = G__40928;
chunk__40698 = G__40929;
count__40699 = G__40930;
i__40700 = G__40931;
continue;
} else {
var js_ns = cljs.core.first(seq__40697__$1);
var require_str_40932 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40932);


var G__40933 = cljs.core.next(seq__40697__$1);
var G__40934 = null;
var G__40935 = (0);
var G__40936 = (0);
seq__40697 = G__40933;
chunk__40698 = G__40934;
count__40699 = G__40935;
i__40700 = G__40936;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40706){
var map__40707 = p__40706;
var map__40707__$1 = cljs.core.__destructure_map(map__40707);
var msg = map__40707__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40708(s__40709){
return (new cljs.core.LazySeq(null,(function (){
var s__40709__$1 = s__40709;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__40709__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__40714 = cljs.core.first(xs__6308__auto__);
var map__40714__$1 = cljs.core.__destructure_map(map__40714);
var src = map__40714__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40714__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40714__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__40709__$1,map__40714,map__40714__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40707,map__40707__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40708_$_iter__40710(s__40711){
return (new cljs.core.LazySeq(null,((function (s__40709__$1,map__40714,map__40714__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40707,map__40707__$1,msg,info,reload_info){
return (function (){
var s__40711__$1 = s__40711;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__40711__$1);
if(temp__5753__auto____$1){
var s__40711__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40711__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__40711__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__40713 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__40712 = (0);
while(true){
if((i__40712 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__40712);
cljs.core.chunk_append(b__40713,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40937 = (i__40712 + (1));
i__40712 = G__40937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40713),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40708_$_iter__40710(cljs.core.chunk_rest(s__40711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40713),null);
}
} else {
var warning = cljs.core.first(s__40711__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40708_$_iter__40710(cljs.core.rest(s__40711__$2)));
}
} else {
return null;
}
break;
}
});})(s__40709__$1,map__40714,map__40714__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40707,map__40707__$1,msg,info,reload_info))
,null,null));
});})(s__40709__$1,map__40714,map__40714__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__40707,map__40707__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40708(cljs.core.rest(s__40709__$1)));
} else {
var G__40938 = cljs.core.rest(s__40709__$1);
s__40709__$1 = G__40938;
continue;
}
} else {
var G__40939 = cljs.core.rest(s__40709__$1);
s__40709__$1 = G__40939;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40717_40942 = cljs.core.seq(warnings);
var chunk__40718_40943 = null;
var count__40719_40944 = (0);
var i__40720_40945 = (0);
while(true){
if((i__40720_40945 < count__40719_40944)){
var map__40723_40946 = chunk__40718_40943.cljs$core$IIndexed$_nth$arity$2(null,i__40720_40945);
var map__40723_40947__$1 = cljs.core.__destructure_map(map__40723_40946);
var w_40948 = map__40723_40947__$1;
var msg_40949__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40723_40947__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40723_40947__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40723_40947__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40723_40947__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40952)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40950),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40951),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40949__$1)].join(''));


var G__40953 = seq__40717_40942;
var G__40954 = chunk__40718_40943;
var G__40955 = count__40719_40944;
var G__40956 = (i__40720_40945 + (1));
seq__40717_40942 = G__40953;
chunk__40718_40943 = G__40954;
count__40719_40944 = G__40955;
i__40720_40945 = G__40956;
continue;
} else {
var temp__5753__auto___40957 = cljs.core.seq(seq__40717_40942);
if(temp__5753__auto___40957){
var seq__40717_40958__$1 = temp__5753__auto___40957;
if(cljs.core.chunked_seq_QMARK_(seq__40717_40958__$1)){
var c__4638__auto___40959 = cljs.core.chunk_first(seq__40717_40958__$1);
var G__40960 = cljs.core.chunk_rest(seq__40717_40958__$1);
var G__40961 = c__4638__auto___40959;
var G__40962 = cljs.core.count(c__4638__auto___40959);
var G__40963 = (0);
seq__40717_40942 = G__40960;
chunk__40718_40943 = G__40961;
count__40719_40944 = G__40962;
i__40720_40945 = G__40963;
continue;
} else {
var map__40724_40964 = cljs.core.first(seq__40717_40958__$1);
var map__40724_40965__$1 = cljs.core.__destructure_map(map__40724_40964);
var w_40966 = map__40724_40965__$1;
var msg_40967__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724_40965__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724_40965__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724_40965__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724_40965__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40970)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40968),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40969),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40967__$1)].join(''));


var G__40971 = cljs.core.next(seq__40717_40958__$1);
var G__40972 = null;
var G__40973 = (0);
var G__40974 = (0);
seq__40717_40942 = G__40971;
chunk__40718_40943 = G__40972;
count__40719_40944 = G__40973;
i__40720_40945 = G__40974;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40705_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40705_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40738){
var map__40739 = p__40738;
var map__40739__$1 = cljs.core.__destructure_map(map__40739);
var msg = map__40739__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40739__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40740 = cljs.core.seq(updates);
var chunk__40742 = null;
var count__40743 = (0);
var i__40744 = (0);
while(true){
if((i__40744 < count__40743)){
var path = chunk__40742.cljs$core$IIndexed$_nth$arity$2(null,i__40744);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40782_40975 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40786_40976 = null;
var count__40787_40977 = (0);
var i__40788_40978 = (0);
while(true){
if((i__40788_40978 < count__40787_40977)){
var node_40979 = chunk__40786_40976.cljs$core$IIndexed$_nth$arity$2(null,i__40788_40978);
if(cljs.core.not(node_40979.shadow$old)){
var path_match_40980 = shadow.cljs.devtools.client.browser.match_paths(node_40979.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40980)){
var new_link_40984 = (function (){var G__40798 = node_40979.cloneNode(true);
G__40798.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40980),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40798;
})();
(node_40979.shadow$old = true);

(new_link_40984.onload = ((function (seq__40782_40975,chunk__40786_40976,count__40787_40977,i__40788_40978,seq__40740,chunk__40742,count__40743,i__40744,new_link_40984,path_match_40980,node_40979,path,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40979);
});})(seq__40782_40975,chunk__40786_40976,count__40787_40977,i__40788_40978,seq__40740,chunk__40742,count__40743,i__40744,new_link_40984,path_match_40980,node_40979,path,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40980], 0));

goog.dom.insertSiblingAfter(new_link_40984,node_40979);


var G__40985 = seq__40782_40975;
var G__40986 = chunk__40786_40976;
var G__40987 = count__40787_40977;
var G__40988 = (i__40788_40978 + (1));
seq__40782_40975 = G__40985;
chunk__40786_40976 = G__40986;
count__40787_40977 = G__40987;
i__40788_40978 = G__40988;
continue;
} else {
var G__40989 = seq__40782_40975;
var G__40990 = chunk__40786_40976;
var G__40991 = count__40787_40977;
var G__40992 = (i__40788_40978 + (1));
seq__40782_40975 = G__40989;
chunk__40786_40976 = G__40990;
count__40787_40977 = G__40991;
i__40788_40978 = G__40992;
continue;
}
} else {
var G__40993 = seq__40782_40975;
var G__40994 = chunk__40786_40976;
var G__40995 = count__40787_40977;
var G__40996 = (i__40788_40978 + (1));
seq__40782_40975 = G__40993;
chunk__40786_40976 = G__40994;
count__40787_40977 = G__40995;
i__40788_40978 = G__40996;
continue;
}
} else {
var temp__5753__auto___40997 = cljs.core.seq(seq__40782_40975);
if(temp__5753__auto___40997){
var seq__40782_40998__$1 = temp__5753__auto___40997;
if(cljs.core.chunked_seq_QMARK_(seq__40782_40998__$1)){
var c__4638__auto___40999 = cljs.core.chunk_first(seq__40782_40998__$1);
var G__41000 = cljs.core.chunk_rest(seq__40782_40998__$1);
var G__41001 = c__4638__auto___40999;
var G__41002 = cljs.core.count(c__4638__auto___40999);
var G__41003 = (0);
seq__40782_40975 = G__41000;
chunk__40786_40976 = G__41001;
count__40787_40977 = G__41002;
i__40788_40978 = G__41003;
continue;
} else {
var node_41004 = cljs.core.first(seq__40782_40998__$1);
if(cljs.core.not(node_41004.shadow$old)){
var path_match_41005 = shadow.cljs.devtools.client.browser.match_paths(node_41004.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41005)){
var new_link_41006 = (function (){var G__40799 = node_41004.cloneNode(true);
G__40799.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41005),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40799;
})();
(node_41004.shadow$old = true);

(new_link_41006.onload = ((function (seq__40782_40975,chunk__40786_40976,count__40787_40977,i__40788_40978,seq__40740,chunk__40742,count__40743,i__40744,new_link_41006,path_match_41005,node_41004,seq__40782_40998__$1,temp__5753__auto___40997,path,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41004);
});})(seq__40782_40975,chunk__40786_40976,count__40787_40977,i__40788_40978,seq__40740,chunk__40742,count__40743,i__40744,new_link_41006,path_match_41005,node_41004,seq__40782_40998__$1,temp__5753__auto___40997,path,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41005], 0));

goog.dom.insertSiblingAfter(new_link_41006,node_41004);


var G__41007 = cljs.core.next(seq__40782_40998__$1);
var G__41008 = null;
var G__41009 = (0);
var G__41010 = (0);
seq__40782_40975 = G__41007;
chunk__40786_40976 = G__41008;
count__40787_40977 = G__41009;
i__40788_40978 = G__41010;
continue;
} else {
var G__41011 = cljs.core.next(seq__40782_40998__$1);
var G__41012 = null;
var G__41013 = (0);
var G__41014 = (0);
seq__40782_40975 = G__41011;
chunk__40786_40976 = G__41012;
count__40787_40977 = G__41013;
i__40788_40978 = G__41014;
continue;
}
} else {
var G__41015 = cljs.core.next(seq__40782_40998__$1);
var G__41016 = null;
var G__41017 = (0);
var G__41018 = (0);
seq__40782_40975 = G__41015;
chunk__40786_40976 = G__41016;
count__40787_40977 = G__41017;
i__40788_40978 = G__41018;
continue;
}
}
} else {
}
}
break;
}


var G__41019 = seq__40740;
var G__41020 = chunk__40742;
var G__41021 = count__40743;
var G__41022 = (i__40744 + (1));
seq__40740 = G__41019;
chunk__40742 = G__41020;
count__40743 = G__41021;
i__40744 = G__41022;
continue;
} else {
var G__41023 = seq__40740;
var G__41024 = chunk__40742;
var G__41025 = count__40743;
var G__41026 = (i__40744 + (1));
seq__40740 = G__41023;
chunk__40742 = G__41024;
count__40743 = G__41025;
i__40744 = G__41026;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40740);
if(temp__5753__auto__){
var seq__40740__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40740__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40740__$1);
var G__41027 = cljs.core.chunk_rest(seq__40740__$1);
var G__41028 = c__4638__auto__;
var G__41029 = cljs.core.count(c__4638__auto__);
var G__41030 = (0);
seq__40740 = G__41027;
chunk__40742 = G__41028;
count__40743 = G__41029;
i__40744 = G__41030;
continue;
} else {
var path = cljs.core.first(seq__40740__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40801_41031 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40805_41032 = null;
var count__40806_41033 = (0);
var i__40807_41034 = (0);
while(true){
if((i__40807_41034 < count__40806_41033)){
var node_41035 = chunk__40805_41032.cljs$core$IIndexed$_nth$arity$2(null,i__40807_41034);
if(cljs.core.not(node_41035.shadow$old)){
var path_match_41036 = shadow.cljs.devtools.client.browser.match_paths(node_41035.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41036)){
var new_link_41037 = (function (){var G__40824 = node_41035.cloneNode(true);
G__40824.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41036),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40824;
})();
(node_41035.shadow$old = true);

(new_link_41037.onload = ((function (seq__40801_41031,chunk__40805_41032,count__40806_41033,i__40807_41034,seq__40740,chunk__40742,count__40743,i__40744,new_link_41037,path_match_41036,node_41035,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41035);
});})(seq__40801_41031,chunk__40805_41032,count__40806_41033,i__40807_41034,seq__40740,chunk__40742,count__40743,i__40744,new_link_41037,path_match_41036,node_41035,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41036], 0));

goog.dom.insertSiblingAfter(new_link_41037,node_41035);


var G__41038 = seq__40801_41031;
var G__41039 = chunk__40805_41032;
var G__41040 = count__40806_41033;
var G__41041 = (i__40807_41034 + (1));
seq__40801_41031 = G__41038;
chunk__40805_41032 = G__41039;
count__40806_41033 = G__41040;
i__40807_41034 = G__41041;
continue;
} else {
var G__41042 = seq__40801_41031;
var G__41043 = chunk__40805_41032;
var G__41044 = count__40806_41033;
var G__41045 = (i__40807_41034 + (1));
seq__40801_41031 = G__41042;
chunk__40805_41032 = G__41043;
count__40806_41033 = G__41044;
i__40807_41034 = G__41045;
continue;
}
} else {
var G__41046 = seq__40801_41031;
var G__41047 = chunk__40805_41032;
var G__41048 = count__40806_41033;
var G__41049 = (i__40807_41034 + (1));
seq__40801_41031 = G__41046;
chunk__40805_41032 = G__41047;
count__40806_41033 = G__41048;
i__40807_41034 = G__41049;
continue;
}
} else {
var temp__5753__auto___41050__$1 = cljs.core.seq(seq__40801_41031);
if(temp__5753__auto___41050__$1){
var seq__40801_41051__$1 = temp__5753__auto___41050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40801_41051__$1)){
var c__4638__auto___41052 = cljs.core.chunk_first(seq__40801_41051__$1);
var G__41053 = cljs.core.chunk_rest(seq__40801_41051__$1);
var G__41054 = c__4638__auto___41052;
var G__41055 = cljs.core.count(c__4638__auto___41052);
var G__41056 = (0);
seq__40801_41031 = G__41053;
chunk__40805_41032 = G__41054;
count__40806_41033 = G__41055;
i__40807_41034 = G__41056;
continue;
} else {
var node_41057 = cljs.core.first(seq__40801_41051__$1);
if(cljs.core.not(node_41057.shadow$old)){
var path_match_41058 = shadow.cljs.devtools.client.browser.match_paths(node_41057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41058)){
var new_link_41059 = (function (){var G__40829 = node_41057.cloneNode(true);
G__40829.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41058),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40829;
})();
(node_41057.shadow$old = true);

(new_link_41059.onload = ((function (seq__40801_41031,chunk__40805_41032,count__40806_41033,i__40807_41034,seq__40740,chunk__40742,count__40743,i__40744,new_link_41059,path_match_41058,node_41057,seq__40801_41051__$1,temp__5753__auto___41050__$1,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41057);
});})(seq__40801_41031,chunk__40805_41032,count__40806_41033,i__40807_41034,seq__40740,chunk__40742,count__40743,i__40744,new_link_41059,path_match_41058,node_41057,seq__40801_41051__$1,temp__5753__auto___41050__$1,path,seq__40740__$1,temp__5753__auto__,map__40739,map__40739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41058], 0));

goog.dom.insertSiblingAfter(new_link_41059,node_41057);


var G__41060 = cljs.core.next(seq__40801_41051__$1);
var G__41061 = null;
var G__41062 = (0);
var G__41063 = (0);
seq__40801_41031 = G__41060;
chunk__40805_41032 = G__41061;
count__40806_41033 = G__41062;
i__40807_41034 = G__41063;
continue;
} else {
var G__41064 = cljs.core.next(seq__40801_41051__$1);
var G__41065 = null;
var G__41066 = (0);
var G__41067 = (0);
seq__40801_41031 = G__41064;
chunk__40805_41032 = G__41065;
count__40806_41033 = G__41066;
i__40807_41034 = G__41067;
continue;
}
} else {
var G__41068 = cljs.core.next(seq__40801_41051__$1);
var G__41069 = null;
var G__41070 = (0);
var G__41071 = (0);
seq__40801_41031 = G__41068;
chunk__40805_41032 = G__41069;
count__40806_41033 = G__41070;
i__40807_41034 = G__41071;
continue;
}
}
} else {
}
}
break;
}


var G__41072 = cljs.core.next(seq__40740__$1);
var G__41073 = null;
var G__41074 = (0);
var G__41075 = (0);
seq__40740 = G__41072;
chunk__40742 = G__41073;
count__40743 = G__41074;
i__40744 = G__41075;
continue;
} else {
var G__41076 = cljs.core.next(seq__40740__$1);
var G__41077 = null;
var G__41078 = (0);
var G__41079 = (0);
seq__40740 = G__41076;
chunk__40742 = G__41077;
count__40743 = G__41078;
i__40744 = G__41079;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40844){
var map__40845 = p__40844;
var map__40845__$1 = cljs.core.__destructure_map(map__40845);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40862){
var map__40863 = p__40862;
var map__40863__$1 = cljs.core.__destructure_map(map__40863);
var _ = map__40863__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40863__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40864,done,error){
var map__40865 = p__40864;
var map__40865__$1 = cljs.core.__destructure_map(map__40865);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40865__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40866,done,error){
var map__40867 = p__40866;
var map__40867__$1 = cljs.core.__destructure_map(map__40867);
var msg = map__40867__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40868){
var map__40869 = p__40868;
var map__40869__$1 = cljs.core.__destructure_map(map__40869);
var src = map__40869__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40869__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40870 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40870) : done.call(null,G__40870));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40871){
var map__40872 = p__40871;
var map__40872__$1 = cljs.core.__destructure_map(map__40872);
var msg__$1 = map__40872__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40872__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40873){var ex = e40873;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40879){
var map__40880 = p__40879;
var map__40880__$1 = cljs.core.__destructure_map(map__40880);
var env = map__40880__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40880__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40894){
var map__40895 = p__40894;
var map__40895__$1 = cljs.core.__destructure_map(map__40895);
var msg = map__40895__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40896){
var map__40897 = p__40896;
var map__40897__$1 = cljs.core.__destructure_map(map__40897);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40897__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40897__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40898){
var map__40899 = p__40898;
var map__40899__$1 = cljs.core.__destructure_map(map__40899);
var svc = map__40899__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40899__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
