goog.provide('ai.core');
ai.core.app = (function ai$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello world!"], null)], null);
});
ai.core.main = (function ai$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ai.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('ai.core.main', ai.core.main);

//# sourceMappingURL=ai.core.js.map
