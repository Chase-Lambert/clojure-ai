goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40672__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40673__i = 0, G__40673__a = new Array(arguments.length -  0);
while (G__40673__i < G__40673__a.length) {G__40673__a[G__40673__i] = arguments[G__40673__i + 0]; ++G__40673__i;}
  args = new cljs.core.IndexedSeq(G__40673__a,0,null);
} 
return G__40672__delegate.call(this,args);};
G__40672.cljs$lang$maxFixedArity = 0;
G__40672.cljs$lang$applyTo = (function (arglist__40674){
var args = cljs.core.seq(arglist__40674);
return G__40672__delegate(args);
});
G__40672.cljs$core$IFn$_invoke$arity$variadic = G__40672__delegate;
return G__40672;
})()
);

(o.error = (function() { 
var G__40675__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40676__i = 0, G__40676__a = new Array(arguments.length -  0);
while (G__40676__i < G__40676__a.length) {G__40676__a[G__40676__i] = arguments[G__40676__i + 0]; ++G__40676__i;}
  args = new cljs.core.IndexedSeq(G__40676__a,0,null);
} 
return G__40675__delegate.call(this,args);};
G__40675.cljs$lang$maxFixedArity = 0;
G__40675.cljs$lang$applyTo = (function (arglist__40677){
var args = cljs.core.seq(arglist__40677);
return G__40675__delegate(args);
});
G__40675.cljs$core$IFn$_invoke$arity$variadic = G__40675__delegate;
return G__40675;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
