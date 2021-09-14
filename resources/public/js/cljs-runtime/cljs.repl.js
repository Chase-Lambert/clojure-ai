goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39904){
var map__39905 = p__39904;
var map__39905__$1 = cljs.core.__destructure_map(map__39905);
var m = map__39905__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39905__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39905__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39906_40165 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39907_40166 = null;
var count__39908_40167 = (0);
var i__39909_40168 = (0);
while(true){
if((i__39909_40168 < count__39908_40167)){
var f_40169 = chunk__39907_40166.cljs$core$IIndexed$_nth$arity$2(null,i__39909_40168);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40169], 0));


var G__40170 = seq__39906_40165;
var G__40171 = chunk__39907_40166;
var G__40172 = count__39908_40167;
var G__40173 = (i__39909_40168 + (1));
seq__39906_40165 = G__40170;
chunk__39907_40166 = G__40171;
count__39908_40167 = G__40172;
i__39909_40168 = G__40173;
continue;
} else {
var temp__5753__auto___40174 = cljs.core.seq(seq__39906_40165);
if(temp__5753__auto___40174){
var seq__39906_40175__$1 = temp__5753__auto___40174;
if(cljs.core.chunked_seq_QMARK_(seq__39906_40175__$1)){
var c__4638__auto___40176 = cljs.core.chunk_first(seq__39906_40175__$1);
var G__40177 = cljs.core.chunk_rest(seq__39906_40175__$1);
var G__40178 = c__4638__auto___40176;
var G__40179 = cljs.core.count(c__4638__auto___40176);
var G__40180 = (0);
seq__39906_40165 = G__40177;
chunk__39907_40166 = G__40178;
count__39908_40167 = G__40179;
i__39909_40168 = G__40180;
continue;
} else {
var f_40181 = cljs.core.first(seq__39906_40175__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40181], 0));


var G__40182 = cljs.core.next(seq__39906_40175__$1);
var G__40183 = null;
var G__40184 = (0);
var G__40185 = (0);
seq__39906_40165 = G__40182;
chunk__39907_40166 = G__40183;
count__39908_40167 = G__40184;
i__39909_40168 = G__40185;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40186 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40186], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40186)))?cljs.core.second(arglists_40186):arglists_40186)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39917_40187 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39918_40188 = null;
var count__39919_40189 = (0);
var i__39920_40190 = (0);
while(true){
if((i__39920_40190 < count__39919_40189)){
var vec__39929_40191 = chunk__39918_40188.cljs$core$IIndexed$_nth$arity$2(null,i__39920_40190);
var name_40192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929_40191,(0),null);
var map__39932_40193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929_40191,(1),null);
var map__39932_40194__$1 = cljs.core.__destructure_map(map__39932_40193);
var doc_40195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39932_40194__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39932_40194__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40192], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40196], 0));

if(cljs.core.truth_(doc_40195)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40195], 0));
} else {
}


var G__40197 = seq__39917_40187;
var G__40198 = chunk__39918_40188;
var G__40199 = count__39919_40189;
var G__40200 = (i__39920_40190 + (1));
seq__39917_40187 = G__40197;
chunk__39918_40188 = G__40198;
count__39919_40189 = G__40199;
i__39920_40190 = G__40200;
continue;
} else {
var temp__5753__auto___40201 = cljs.core.seq(seq__39917_40187);
if(temp__5753__auto___40201){
var seq__39917_40202__$1 = temp__5753__auto___40201;
if(cljs.core.chunked_seq_QMARK_(seq__39917_40202__$1)){
var c__4638__auto___40203 = cljs.core.chunk_first(seq__39917_40202__$1);
var G__40204 = cljs.core.chunk_rest(seq__39917_40202__$1);
var G__40205 = c__4638__auto___40203;
var G__40206 = cljs.core.count(c__4638__auto___40203);
var G__40207 = (0);
seq__39917_40187 = G__40204;
chunk__39918_40188 = G__40205;
count__39919_40189 = G__40206;
i__39920_40190 = G__40207;
continue;
} else {
var vec__39938_40208 = cljs.core.first(seq__39917_40202__$1);
var name_40209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39938_40208,(0),null);
var map__39941_40210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39938_40208,(1),null);
var map__39941_40211__$1 = cljs.core.__destructure_map(map__39941_40210);
var doc_40212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39941_40211__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39941_40211__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40209], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40213], 0));

if(cljs.core.truth_(doc_40212)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40212], 0));
} else {
}


var G__40214 = cljs.core.next(seq__39917_40202__$1);
var G__40215 = null;
var G__40216 = (0);
var G__40217 = (0);
seq__39917_40187 = G__40214;
chunk__39918_40188 = G__40215;
count__39919_40189 = G__40216;
i__39920_40190 = G__40217;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39959 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39960 = null;
var count__39961 = (0);
var i__39962 = (0);
while(true){
if((i__39962 < count__39961)){
var role = chunk__39960.cljs$core$IIndexed$_nth$arity$2(null,i__39962);
var temp__5753__auto___40218__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40218__$1)){
var spec_40219 = temp__5753__auto___40218__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40219)], 0));
} else {
}


var G__40220 = seq__39959;
var G__40221 = chunk__39960;
var G__40222 = count__39961;
var G__40223 = (i__39962 + (1));
seq__39959 = G__40220;
chunk__39960 = G__40221;
count__39961 = G__40222;
i__39962 = G__40223;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__39959);
if(temp__5753__auto____$1){
var seq__39959__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39959__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39959__$1);
var G__40224 = cljs.core.chunk_rest(seq__39959__$1);
var G__40225 = c__4638__auto__;
var G__40226 = cljs.core.count(c__4638__auto__);
var G__40227 = (0);
seq__39959 = G__40224;
chunk__39960 = G__40225;
count__39961 = G__40226;
i__39962 = G__40227;
continue;
} else {
var role = cljs.core.first(seq__39959__$1);
var temp__5753__auto___40228__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40228__$2)){
var spec_40229 = temp__5753__auto___40228__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40229)], 0));
} else {
}


var G__40230 = cljs.core.next(seq__39959__$1);
var G__40231 = null;
var G__40232 = (0);
var G__40233 = (0);
seq__39959 = G__40230;
chunk__39960 = G__40231;
count__39961 = G__40232;
i__39962 = G__40233;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40235 = cljs.core.ex_cause(t);
via = G__40234;
t = G__40235;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40064 = datafied_throwable;
var map__40064__$1 = cljs.core.__destructure_map(map__40064);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40064__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40064__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40064__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40065 = cljs.core.last(via);
var map__40065__$1 = cljs.core.__destructure_map(map__40065);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40065__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40065__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40065__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40066 = data;
var map__40066__$1 = cljs.core.__destructure_map(map__40066);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40066__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40066__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40066__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40067 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40067__$1 = cljs.core.__destructure_map(map__40067);
var top_data = map__40067__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40067__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40069 = phase;
var G__40069__$1 = (((G__40069 instanceof cljs.core.Keyword))?G__40069.fqn:null);
switch (G__40069__$1) {
case "read-source":
var map__40071 = data;
var map__40071__$1 = cljs.core.__destructure_map(map__40071);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40071__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40071__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40072 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40072__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40072,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40072);
var G__40072__$2 = (cljs.core.truth_((function (){var fexpr__40073 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40073.cljs$core$IFn$_invoke$arity$1 ? fexpr__40073.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40073.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40072__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40072__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40072__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40072__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40074 = top_data;
var G__40074__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40074,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40074);
var G__40074__$2 = (cljs.core.truth_((function (){var fexpr__40075 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40075.cljs$core$IFn$_invoke$arity$1 ? fexpr__40075.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40075.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40074__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40074__$1);
var G__40074__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40074__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40074__$2);
var G__40074__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40074__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40074__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40074__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40074__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40076 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40076,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40076,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40076,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40076,(3),null);
var G__40079 = top_data;
var G__40079__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40079,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40079);
var G__40079__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40079__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40079__$1);
var G__40079__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40079__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40079__$2);
var G__40079__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40079__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40079__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40079__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40079__$4;
}

break;
case "execution":
var vec__40080 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40080,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40080,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40080,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40080,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40061_SHARP_){
var or__4212__auto__ = (p1__40061_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__40083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40083.cljs$core$IFn$_invoke$arity$1 ? fexpr__40083.cljs$core$IFn$_invoke$arity$1(p1__40061_SHARP_) : fexpr__40083.call(null,p1__40061_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__40087 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40087__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40087,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40087);
var G__40087__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40087__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40087__$1);
var G__40087__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40087__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40087__$2);
var G__40087__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40087__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40087__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40087__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40087__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40069__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40096){
var map__40097 = p__40096;
var map__40097__$1 = cljs.core.__destructure_map(map__40097);
var triage_data = map__40097__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40098 = phase;
var G__40098__$1 = (((G__40098 instanceof cljs.core.Keyword))?G__40098.fqn:null);
switch (G__40098__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40099 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40100 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40101 = loc;
var G__40102 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40103_40243 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40104_40244 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40105_40245 = true;
var _STAR_print_fn_STAR__temp_val__40106_40246 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40105_40245);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40106_40246);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40094_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40094_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40104_40244);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40103_40243);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40099,G__40100,G__40101,G__40102) : format.call(null,G__40099,G__40100,G__40101,G__40102));

break;
case "macroexpansion":
var G__40107 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40108 = cause_type;
var G__40109 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40110 = loc;
var G__40111 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40107,G__40108,G__40109,G__40110,G__40111) : format.call(null,G__40107,G__40108,G__40109,G__40110,G__40111));

break;
case "compile-syntax-check":
var G__40112 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40113 = cause_type;
var G__40114 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40115 = loc;
var G__40116 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40112,G__40113,G__40114,G__40115,G__40116) : format.call(null,G__40112,G__40113,G__40114,G__40115,G__40116));

break;
case "compilation":
var G__40117 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40118 = cause_type;
var G__40119 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40120 = loc;
var G__40121 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40117,G__40118,G__40119,G__40120,G__40121) : format.call(null,G__40117,G__40118,G__40119,G__40120,G__40121));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40122 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40123 = symbol;
var G__40124 = loc;
var G__40125 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40126_40260 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40127_40261 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40128_40262 = true;
var _STAR_print_fn_STAR__temp_val__40129_40263 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40128_40262);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40129_40263);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40095_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40095_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40127_40261);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40126_40260);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40122,G__40123,G__40124,G__40125) : format.call(null,G__40122,G__40123,G__40124,G__40125));
} else {
var G__40131 = "Execution error%s at %s(%s).\n%s\n";
var G__40132 = cause_type;
var G__40133 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40134 = loc;
var G__40135 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40131,G__40132,G__40133,G__40134,G__40135) : format.call(null,G__40131,G__40132,G__40133,G__40134,G__40135));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40098__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
