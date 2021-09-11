goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38010 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38010(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38011 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38011(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37353 = coll;
var G__37354 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37353,G__37354) : shadow.dom.lazy_native_coll_seq.call(null,G__37353,G__37354));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37431 = arguments.length;
switch (G__37431) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37472 = arguments.length;
switch (G__37472) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37505 = arguments.length;
switch (G__37505) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37507 = arguments.length;
switch (G__37507) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37526 = arguments.length;
switch (G__37526) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37546 = arguments.length;
switch (G__37546) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37547){if((e37547 instanceof Object)){
var e = e37547;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37547;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37586 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37587 = null;
var count__37588 = (0);
var i__37589 = (0);
while(true){
if((i__37589 < count__37588)){
var el = chunk__37587.cljs$core$IIndexed$_nth$arity$2(null,i__37589);
var handler_38029__$1 = ((function (seq__37586,chunk__37587,count__37588,i__37589,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37586,chunk__37587,count__37588,i__37589,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38029__$1);


var G__38030 = seq__37586;
var G__38031 = chunk__37587;
var G__38032 = count__37588;
var G__38033 = (i__37589 + (1));
seq__37586 = G__38030;
chunk__37587 = G__38031;
count__37588 = G__38032;
i__37589 = G__38033;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37586);
if(temp__5753__auto__){
var seq__37586__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37586__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37586__$1);
var G__38034 = cljs.core.chunk_rest(seq__37586__$1);
var G__38035 = c__4638__auto__;
var G__38036 = cljs.core.count(c__4638__auto__);
var G__38037 = (0);
seq__37586 = G__38034;
chunk__37587 = G__38035;
count__37588 = G__38036;
i__37589 = G__38037;
continue;
} else {
var el = cljs.core.first(seq__37586__$1);
var handler_38038__$1 = ((function (seq__37586,chunk__37587,count__37588,i__37589,el,seq__37586__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37586,chunk__37587,count__37588,i__37589,el,seq__37586__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38038__$1);


var G__38039 = cljs.core.next(seq__37586__$1);
var G__38040 = null;
var G__38041 = (0);
var G__38042 = (0);
seq__37586 = G__38039;
chunk__37587 = G__38040;
count__37588 = G__38041;
i__37589 = G__38042;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37611 = arguments.length;
switch (G__37611) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37645 = cljs.core.seq(events);
var chunk__37646 = null;
var count__37647 = (0);
var i__37648 = (0);
while(true){
if((i__37648 < count__37647)){
var vec__37655 = chunk__37646.cljs$core$IIndexed$_nth$arity$2(null,i__37648);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37655,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38044 = seq__37645;
var G__38045 = chunk__37646;
var G__38046 = count__37647;
var G__38047 = (i__37648 + (1));
seq__37645 = G__38044;
chunk__37646 = G__38045;
count__37647 = G__38046;
i__37648 = G__38047;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37645);
if(temp__5753__auto__){
var seq__37645__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37645__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37645__$1);
var G__38048 = cljs.core.chunk_rest(seq__37645__$1);
var G__38049 = c__4638__auto__;
var G__38050 = cljs.core.count(c__4638__auto__);
var G__38051 = (0);
seq__37645 = G__38048;
chunk__37646 = G__38049;
count__37647 = G__38050;
i__37648 = G__38051;
continue;
} else {
var vec__37669 = cljs.core.first(seq__37645__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37669,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38052 = cljs.core.next(seq__37645__$1);
var G__38053 = null;
var G__38054 = (0);
var G__38055 = (0);
seq__37645 = G__38052;
chunk__37646 = G__38053;
count__37647 = G__38054;
i__37648 = G__38055;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37722 = cljs.core.seq(styles);
var chunk__37723 = null;
var count__37724 = (0);
var i__37725 = (0);
while(true){
if((i__37725 < count__37724)){
var vec__37757 = chunk__37723.cljs$core$IIndexed$_nth$arity$2(null,i__37725);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38056 = seq__37722;
var G__38057 = chunk__37723;
var G__38058 = count__37724;
var G__38059 = (i__37725 + (1));
seq__37722 = G__38056;
chunk__37723 = G__38057;
count__37724 = G__38058;
i__37725 = G__38059;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37722);
if(temp__5753__auto__){
var seq__37722__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37722__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37722__$1);
var G__38060 = cljs.core.chunk_rest(seq__37722__$1);
var G__38061 = c__4638__auto__;
var G__38062 = cljs.core.count(c__4638__auto__);
var G__38063 = (0);
seq__37722 = G__38060;
chunk__37723 = G__38061;
count__37724 = G__38062;
i__37725 = G__38063;
continue;
} else {
var vec__37763 = cljs.core.first(seq__37722__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38064 = cljs.core.next(seq__37722__$1);
var G__38065 = null;
var G__38066 = (0);
var G__38067 = (0);
seq__37722 = G__38064;
chunk__37723 = G__38065;
count__37724 = G__38066;
i__37725 = G__38067;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37770_38068 = key;
var G__37770_38069__$1 = (((G__37770_38068 instanceof cljs.core.Keyword))?G__37770_38068.fqn:null);
switch (G__37770_38069__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38071 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_38071,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_38071,"aria-");
}
})())){
el.setAttribute(ks_38071,value);
} else {
(el[ks_38071] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37780){
var map__37781 = p__37780;
var map__37781__$1 = cljs.core.__destructure_map(map__37781);
var props = map__37781__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37781__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37782 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37782,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37782,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37782,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37785 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37785,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37785;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37787 = arguments.length;
switch (G__37787) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37788){
var vec__37789 = p__37788;
var seq__37790 = cljs.core.seq(vec__37789);
var first__37791 = cljs.core.first(seq__37790);
var seq__37790__$1 = cljs.core.next(seq__37790);
var nn = first__37791;
var first__37791__$1 = cljs.core.first(seq__37790__$1);
var seq__37790__$2 = cljs.core.next(seq__37790__$1);
var np = first__37791__$1;
var nc = seq__37790__$2;
var node = vec__37789;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37792 = nn;
var G__37793 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37792,G__37793) : create_fn.call(null,G__37792,G__37793));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37794 = nn;
var G__37795 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37794,G__37795) : create_fn.call(null,G__37794,G__37795));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37796 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37796,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37796,(1),null);
var seq__37799_38097 = cljs.core.seq(node_children);
var chunk__37800_38098 = null;
var count__37801_38099 = (0);
var i__37802_38100 = (0);
while(true){
if((i__37802_38100 < count__37801_38099)){
var child_struct_38101 = chunk__37800_38098.cljs$core$IIndexed$_nth$arity$2(null,i__37802_38100);
var children_38102 = shadow.dom.dom_node(child_struct_38101);
if(cljs.core.seq_QMARK_(children_38102)){
var seq__37815_38103 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38102));
var chunk__37817_38104 = null;
var count__37818_38105 = (0);
var i__37819_38106 = (0);
while(true){
if((i__37819_38106 < count__37818_38105)){
var child_38107 = chunk__37817_38104.cljs$core$IIndexed$_nth$arity$2(null,i__37819_38106);
if(cljs.core.truth_(child_38107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38107);


var G__38108 = seq__37815_38103;
var G__38109 = chunk__37817_38104;
var G__38110 = count__37818_38105;
var G__38111 = (i__37819_38106 + (1));
seq__37815_38103 = G__38108;
chunk__37817_38104 = G__38109;
count__37818_38105 = G__38110;
i__37819_38106 = G__38111;
continue;
} else {
var G__38112 = seq__37815_38103;
var G__38113 = chunk__37817_38104;
var G__38114 = count__37818_38105;
var G__38115 = (i__37819_38106 + (1));
seq__37815_38103 = G__38112;
chunk__37817_38104 = G__38113;
count__37818_38105 = G__38114;
i__37819_38106 = G__38115;
continue;
}
} else {
var temp__5753__auto___38116 = cljs.core.seq(seq__37815_38103);
if(temp__5753__auto___38116){
var seq__37815_38117__$1 = temp__5753__auto___38116;
if(cljs.core.chunked_seq_QMARK_(seq__37815_38117__$1)){
var c__4638__auto___38118 = cljs.core.chunk_first(seq__37815_38117__$1);
var G__38119 = cljs.core.chunk_rest(seq__37815_38117__$1);
var G__38120 = c__4638__auto___38118;
var G__38121 = cljs.core.count(c__4638__auto___38118);
var G__38122 = (0);
seq__37815_38103 = G__38119;
chunk__37817_38104 = G__38120;
count__37818_38105 = G__38121;
i__37819_38106 = G__38122;
continue;
} else {
var child_38123 = cljs.core.first(seq__37815_38117__$1);
if(cljs.core.truth_(child_38123)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38123);


var G__38124 = cljs.core.next(seq__37815_38117__$1);
var G__38125 = null;
var G__38126 = (0);
var G__38127 = (0);
seq__37815_38103 = G__38124;
chunk__37817_38104 = G__38125;
count__37818_38105 = G__38126;
i__37819_38106 = G__38127;
continue;
} else {
var G__38128 = cljs.core.next(seq__37815_38117__$1);
var G__38129 = null;
var G__38130 = (0);
var G__38131 = (0);
seq__37815_38103 = G__38128;
chunk__37817_38104 = G__38129;
count__37818_38105 = G__38130;
i__37819_38106 = G__38131;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38102);
}


var G__38132 = seq__37799_38097;
var G__38133 = chunk__37800_38098;
var G__38134 = count__37801_38099;
var G__38135 = (i__37802_38100 + (1));
seq__37799_38097 = G__38132;
chunk__37800_38098 = G__38133;
count__37801_38099 = G__38134;
i__37802_38100 = G__38135;
continue;
} else {
var temp__5753__auto___38136 = cljs.core.seq(seq__37799_38097);
if(temp__5753__auto___38136){
var seq__37799_38137__$1 = temp__5753__auto___38136;
if(cljs.core.chunked_seq_QMARK_(seq__37799_38137__$1)){
var c__4638__auto___38138 = cljs.core.chunk_first(seq__37799_38137__$1);
var G__38139 = cljs.core.chunk_rest(seq__37799_38137__$1);
var G__38140 = c__4638__auto___38138;
var G__38141 = cljs.core.count(c__4638__auto___38138);
var G__38142 = (0);
seq__37799_38097 = G__38139;
chunk__37800_38098 = G__38140;
count__37801_38099 = G__38141;
i__37802_38100 = G__38142;
continue;
} else {
var child_struct_38143 = cljs.core.first(seq__37799_38137__$1);
var children_38144 = shadow.dom.dom_node(child_struct_38143);
if(cljs.core.seq_QMARK_(children_38144)){
var seq__37821_38145 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38144));
var chunk__37823_38146 = null;
var count__37824_38147 = (0);
var i__37825_38148 = (0);
while(true){
if((i__37825_38148 < count__37824_38147)){
var child_38149 = chunk__37823_38146.cljs$core$IIndexed$_nth$arity$2(null,i__37825_38148);
if(cljs.core.truth_(child_38149)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38149);


var G__38150 = seq__37821_38145;
var G__38151 = chunk__37823_38146;
var G__38152 = count__37824_38147;
var G__38153 = (i__37825_38148 + (1));
seq__37821_38145 = G__38150;
chunk__37823_38146 = G__38151;
count__37824_38147 = G__38152;
i__37825_38148 = G__38153;
continue;
} else {
var G__38154 = seq__37821_38145;
var G__38155 = chunk__37823_38146;
var G__38156 = count__37824_38147;
var G__38157 = (i__37825_38148 + (1));
seq__37821_38145 = G__38154;
chunk__37823_38146 = G__38155;
count__37824_38147 = G__38156;
i__37825_38148 = G__38157;
continue;
}
} else {
var temp__5753__auto___38158__$1 = cljs.core.seq(seq__37821_38145);
if(temp__5753__auto___38158__$1){
var seq__37821_38159__$1 = temp__5753__auto___38158__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37821_38159__$1)){
var c__4638__auto___38160 = cljs.core.chunk_first(seq__37821_38159__$1);
var G__38161 = cljs.core.chunk_rest(seq__37821_38159__$1);
var G__38162 = c__4638__auto___38160;
var G__38163 = cljs.core.count(c__4638__auto___38160);
var G__38164 = (0);
seq__37821_38145 = G__38161;
chunk__37823_38146 = G__38162;
count__37824_38147 = G__38163;
i__37825_38148 = G__38164;
continue;
} else {
var child_38165 = cljs.core.first(seq__37821_38159__$1);
if(cljs.core.truth_(child_38165)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38165);


var G__38166 = cljs.core.next(seq__37821_38159__$1);
var G__38167 = null;
var G__38168 = (0);
var G__38169 = (0);
seq__37821_38145 = G__38166;
chunk__37823_38146 = G__38167;
count__37824_38147 = G__38168;
i__37825_38148 = G__38169;
continue;
} else {
var G__38170 = cljs.core.next(seq__37821_38159__$1);
var G__38171 = null;
var G__38172 = (0);
var G__38173 = (0);
seq__37821_38145 = G__38170;
chunk__37823_38146 = G__38171;
count__37824_38147 = G__38172;
i__37825_38148 = G__38173;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38144);
}


var G__38174 = cljs.core.next(seq__37799_38137__$1);
var G__38175 = null;
var G__38176 = (0);
var G__38177 = (0);
seq__37799_38097 = G__38174;
chunk__37800_38098 = G__38175;
count__37801_38099 = G__38176;
i__37802_38100 = G__38177;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37828 = cljs.core.seq(node);
var chunk__37829 = null;
var count__37830 = (0);
var i__37831 = (0);
while(true){
if((i__37831 < count__37830)){
var n = chunk__37829.cljs$core$IIndexed$_nth$arity$2(null,i__37831);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38202 = seq__37828;
var G__38203 = chunk__37829;
var G__38204 = count__37830;
var G__38205 = (i__37831 + (1));
seq__37828 = G__38202;
chunk__37829 = G__38203;
count__37830 = G__38204;
i__37831 = G__38205;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37828);
if(temp__5753__auto__){
var seq__37828__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37828__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37828__$1);
var G__38206 = cljs.core.chunk_rest(seq__37828__$1);
var G__38207 = c__4638__auto__;
var G__38208 = cljs.core.count(c__4638__auto__);
var G__38209 = (0);
seq__37828 = G__38206;
chunk__37829 = G__38207;
count__37830 = G__38208;
i__37831 = G__38209;
continue;
} else {
var n = cljs.core.first(seq__37828__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38210 = cljs.core.next(seq__37828__$1);
var G__38211 = null;
var G__38212 = (0);
var G__38213 = (0);
seq__37828 = G__38210;
chunk__37829 = G__38211;
count__37830 = G__38212;
i__37831 = G__38213;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37833 = arguments.length;
switch (G__37833) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37835 = arguments.length;
switch (G__37835) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37837 = arguments.length;
switch (G__37837) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38219 = arguments.length;
var i__4819__auto___38220 = (0);
while(true){
if((i__4819__auto___38220 < len__4818__auto___38219)){
args__4824__auto__.push((arguments[i__4819__auto___38220]));

var G__38221 = (i__4819__auto___38220 + (1));
i__4819__auto___38220 = G__38221;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37839_38222 = cljs.core.seq(nodes);
var chunk__37840_38223 = null;
var count__37841_38224 = (0);
var i__37842_38225 = (0);
while(true){
if((i__37842_38225 < count__37841_38224)){
var node_38226 = chunk__37840_38223.cljs$core$IIndexed$_nth$arity$2(null,i__37842_38225);
fragment.appendChild(shadow.dom._to_dom(node_38226));


var G__38227 = seq__37839_38222;
var G__38228 = chunk__37840_38223;
var G__38229 = count__37841_38224;
var G__38230 = (i__37842_38225 + (1));
seq__37839_38222 = G__38227;
chunk__37840_38223 = G__38228;
count__37841_38224 = G__38229;
i__37842_38225 = G__38230;
continue;
} else {
var temp__5753__auto___38231 = cljs.core.seq(seq__37839_38222);
if(temp__5753__auto___38231){
var seq__37839_38232__$1 = temp__5753__auto___38231;
if(cljs.core.chunked_seq_QMARK_(seq__37839_38232__$1)){
var c__4638__auto___38233 = cljs.core.chunk_first(seq__37839_38232__$1);
var G__38234 = cljs.core.chunk_rest(seq__37839_38232__$1);
var G__38235 = c__4638__auto___38233;
var G__38236 = cljs.core.count(c__4638__auto___38233);
var G__38237 = (0);
seq__37839_38222 = G__38234;
chunk__37840_38223 = G__38235;
count__37841_38224 = G__38236;
i__37842_38225 = G__38237;
continue;
} else {
var node_38238 = cljs.core.first(seq__37839_38232__$1);
fragment.appendChild(shadow.dom._to_dom(node_38238));


var G__38239 = cljs.core.next(seq__37839_38232__$1);
var G__38240 = null;
var G__38241 = (0);
var G__38242 = (0);
seq__37839_38222 = G__38239;
chunk__37840_38223 = G__38240;
count__37841_38224 = G__38241;
i__37842_38225 = G__38242;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37838){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37838));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37843_38243 = cljs.core.seq(scripts);
var chunk__37844_38244 = null;
var count__37845_38245 = (0);
var i__37846_38246 = (0);
while(true){
if((i__37846_38246 < count__37845_38245)){
var vec__37853_38247 = chunk__37844_38244.cljs$core$IIndexed$_nth$arity$2(null,i__37846_38246);
var script_tag_38248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37853_38247,(0),null);
var script_body_38249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37853_38247,(1),null);
eval(script_body_38249);


var G__38250 = seq__37843_38243;
var G__38251 = chunk__37844_38244;
var G__38252 = count__37845_38245;
var G__38253 = (i__37846_38246 + (1));
seq__37843_38243 = G__38250;
chunk__37844_38244 = G__38251;
count__37845_38245 = G__38252;
i__37846_38246 = G__38253;
continue;
} else {
var temp__5753__auto___38254 = cljs.core.seq(seq__37843_38243);
if(temp__5753__auto___38254){
var seq__37843_38255__$1 = temp__5753__auto___38254;
if(cljs.core.chunked_seq_QMARK_(seq__37843_38255__$1)){
var c__4638__auto___38256 = cljs.core.chunk_first(seq__37843_38255__$1);
var G__38257 = cljs.core.chunk_rest(seq__37843_38255__$1);
var G__38258 = c__4638__auto___38256;
var G__38259 = cljs.core.count(c__4638__auto___38256);
var G__38260 = (0);
seq__37843_38243 = G__38257;
chunk__37844_38244 = G__38258;
count__37845_38245 = G__38259;
i__37846_38246 = G__38260;
continue;
} else {
var vec__37856_38261 = cljs.core.first(seq__37843_38255__$1);
var script_tag_38262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37856_38261,(0),null);
var script_body_38263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37856_38261,(1),null);
eval(script_body_38263);


var G__38264 = cljs.core.next(seq__37843_38255__$1);
var G__38265 = null;
var G__38266 = (0);
var G__38267 = (0);
seq__37843_38243 = G__38264;
chunk__37844_38244 = G__38265;
count__37845_38245 = G__38266;
i__37846_38246 = G__38267;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37859){
var vec__37860 = p__37859;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37860,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37860,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37864 = arguments.length;
switch (G__37864) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37865 = cljs.core.seq(style_keys);
var chunk__37866 = null;
var count__37867 = (0);
var i__37868 = (0);
while(true){
if((i__37868 < count__37867)){
var it = chunk__37866.cljs$core$IIndexed$_nth$arity$2(null,i__37868);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38269 = seq__37865;
var G__38270 = chunk__37866;
var G__38271 = count__37867;
var G__38272 = (i__37868 + (1));
seq__37865 = G__38269;
chunk__37866 = G__38270;
count__37867 = G__38271;
i__37868 = G__38272;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37865);
if(temp__5753__auto__){
var seq__37865__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37865__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37865__$1);
var G__38319 = cljs.core.chunk_rest(seq__37865__$1);
var G__38320 = c__4638__auto__;
var G__38321 = cljs.core.count(c__4638__auto__);
var G__38322 = (0);
seq__37865 = G__38319;
chunk__37866 = G__38320;
count__37867 = G__38321;
i__37868 = G__38322;
continue;
} else {
var it = cljs.core.first(seq__37865__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38323 = cljs.core.next(seq__37865__$1);
var G__38324 = null;
var G__38325 = (0);
var G__38326 = (0);
seq__37865 = G__38323;
chunk__37866 = G__38324;
count__37867 = G__38325;
i__37868 = G__38326;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k37870,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__37874 = k37870;
var G__37874__$1 = (((G__37874 instanceof cljs.core.Keyword))?G__37874.fqn:null);
switch (G__37874__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37870,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__37875){
var vec__37876 = p__37875;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37876,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37876,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37869){
var self__ = this;
var G__37869__$1 = this;
return (new cljs.core.RecordIter((0),G__37869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37871,other37872){
var self__ = this;
var this37871__$1 = this;
return (((!((other37872 == null)))) && ((((this37871__$1.constructor === other37872.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37871__$1.x,other37872.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37871__$1.y,other37872.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37871__$1.__extmap,other37872.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k37870){
var self__ = this;
var this__4468__auto____$1 = this;
var G__37879 = k37870;
var G__37879__$1 = (((G__37879 instanceof cljs.core.Keyword))?G__37879.fqn:null);
switch (G__37879__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37870);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__37869){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__37880 = cljs.core.keyword_identical_QMARK_;
var expr__37881 = k__4470__auto__;
if(cljs.core.truth_((pred__37880.cljs$core$IFn$_invoke$arity$2 ? pred__37880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37881) : pred__37880.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37881)))){
return (new shadow.dom.Coordinate(G__37869,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37880.cljs$core$IFn$_invoke$arity$2 ? pred__37880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37881) : pred__37880.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37881)))){
return (new shadow.dom.Coordinate(self__.x,G__37869,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__37869),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__37869){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37869,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37873){
var extmap__4501__auto__ = (function (){var G__37883 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37873,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37873)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37883);
} else {
return G__37883;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37873),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37873),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k37885,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__37889 = k37885;
var G__37889__$1 = (((G__37889 instanceof cljs.core.Keyword))?G__37889.fqn:null);
switch (G__37889__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37885,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__37890){
var vec__37891 = p__37890;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37884){
var self__ = this;
var G__37884__$1 = this;
return (new cljs.core.RecordIter((0),G__37884__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37886,other37887){
var self__ = this;
var this37886__$1 = this;
return (((!((other37887 == null)))) && ((((this37886__$1.constructor === other37887.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37886__$1.w,other37887.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37886__$1.h,other37887.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37886__$1.__extmap,other37887.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k37885){
var self__ = this;
var this__4468__auto____$1 = this;
var G__37894 = k37885;
var G__37894__$1 = (((G__37894 instanceof cljs.core.Keyword))?G__37894.fqn:null);
switch (G__37894__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37885);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__37884){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__37895 = cljs.core.keyword_identical_QMARK_;
var expr__37896 = k__4470__auto__;
if(cljs.core.truth_((pred__37895.cljs$core$IFn$_invoke$arity$2 ? pred__37895.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37896) : pred__37895.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37896)))){
return (new shadow.dom.Size(G__37884,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37895.cljs$core$IFn$_invoke$arity$2 ? pred__37895.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37896) : pred__37895.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37896)))){
return (new shadow.dom.Size(self__.w,G__37884,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__37884),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__37884){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37884,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37888){
var extmap__4501__auto__ = (function (){var G__37898 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37888,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37888)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37898);
} else {
return G__37898;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37888),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37888),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__38360 = (i + (1));
var G__38361 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38360;
ret = G__38361;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37903){
var vec__37904 = p__37903;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37904,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37908 = arguments.length;
switch (G__37908) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38363 = ps;
var G__38364 = (i + (1));
el__$1 = G__38363;
i = G__38364;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37915 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37915,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37915,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37915,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37918_38365 = cljs.core.seq(props);
var chunk__37919_38366 = null;
var count__37920_38367 = (0);
var i__37921_38368 = (0);
while(true){
if((i__37921_38368 < count__37920_38367)){
var vec__37928_38369 = chunk__37919_38366.cljs$core$IIndexed$_nth$arity$2(null,i__37921_38368);
var k_38370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37928_38369,(0),null);
var v_38371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37928_38369,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_38370);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38370),v_38371);


var G__38372 = seq__37918_38365;
var G__38373 = chunk__37919_38366;
var G__38374 = count__37920_38367;
var G__38375 = (i__37921_38368 + (1));
seq__37918_38365 = G__38372;
chunk__37919_38366 = G__38373;
count__37920_38367 = G__38374;
i__37921_38368 = G__38375;
continue;
} else {
var temp__5753__auto___38376 = cljs.core.seq(seq__37918_38365);
if(temp__5753__auto___38376){
var seq__37918_38377__$1 = temp__5753__auto___38376;
if(cljs.core.chunked_seq_QMARK_(seq__37918_38377__$1)){
var c__4638__auto___38378 = cljs.core.chunk_first(seq__37918_38377__$1);
var G__38379 = cljs.core.chunk_rest(seq__37918_38377__$1);
var G__38380 = c__4638__auto___38378;
var G__38381 = cljs.core.count(c__4638__auto___38378);
var G__38382 = (0);
seq__37918_38365 = G__38379;
chunk__37919_38366 = G__38380;
count__37920_38367 = G__38381;
i__37921_38368 = G__38382;
continue;
} else {
var vec__37931_38383 = cljs.core.first(seq__37918_38377__$1);
var k_38384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931_38383,(0),null);
var v_38385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931_38383,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_38384);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38384),v_38385);


var G__38386 = cljs.core.next(seq__37918_38377__$1);
var G__38387 = null;
var G__38388 = (0);
var G__38389 = (0);
seq__37918_38365 = G__38386;
chunk__37919_38366 = G__38387;
count__37920_38367 = G__38388;
i__37921_38368 = G__38389;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37939 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(1),null);
var seq__37942_38390 = cljs.core.seq(node_children);
var chunk__37944_38391 = null;
var count__37945_38392 = (0);
var i__37946_38393 = (0);
while(true){
if((i__37946_38393 < count__37945_38392)){
var child_struct_38394 = chunk__37944_38391.cljs$core$IIndexed$_nth$arity$2(null,i__37946_38393);
if((!((child_struct_38394 == null)))){
if(typeof child_struct_38394 === 'string'){
var text_38395 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38395),child_struct_38394].join(''));
} else {
var children_38396 = shadow.dom.svg_node(child_struct_38394);
if(cljs.core.seq_QMARK_(children_38396)){
var seq__37960_38397 = cljs.core.seq(children_38396);
var chunk__37962_38398 = null;
var count__37963_38399 = (0);
var i__37964_38400 = (0);
while(true){
if((i__37964_38400 < count__37963_38399)){
var child_38401 = chunk__37962_38398.cljs$core$IIndexed$_nth$arity$2(null,i__37964_38400);
if(cljs.core.truth_(child_38401)){
node.appendChild(child_38401);


var G__38402 = seq__37960_38397;
var G__38403 = chunk__37962_38398;
var G__38404 = count__37963_38399;
var G__38405 = (i__37964_38400 + (1));
seq__37960_38397 = G__38402;
chunk__37962_38398 = G__38403;
count__37963_38399 = G__38404;
i__37964_38400 = G__38405;
continue;
} else {
var G__38406 = seq__37960_38397;
var G__38407 = chunk__37962_38398;
var G__38408 = count__37963_38399;
var G__38409 = (i__37964_38400 + (1));
seq__37960_38397 = G__38406;
chunk__37962_38398 = G__38407;
count__37963_38399 = G__38408;
i__37964_38400 = G__38409;
continue;
}
} else {
var temp__5753__auto___38410 = cljs.core.seq(seq__37960_38397);
if(temp__5753__auto___38410){
var seq__37960_38411__$1 = temp__5753__auto___38410;
if(cljs.core.chunked_seq_QMARK_(seq__37960_38411__$1)){
var c__4638__auto___38412 = cljs.core.chunk_first(seq__37960_38411__$1);
var G__38413 = cljs.core.chunk_rest(seq__37960_38411__$1);
var G__38414 = c__4638__auto___38412;
var G__38415 = cljs.core.count(c__4638__auto___38412);
var G__38416 = (0);
seq__37960_38397 = G__38413;
chunk__37962_38398 = G__38414;
count__37963_38399 = G__38415;
i__37964_38400 = G__38416;
continue;
} else {
var child_38417 = cljs.core.first(seq__37960_38411__$1);
if(cljs.core.truth_(child_38417)){
node.appendChild(child_38417);


var G__38418 = cljs.core.next(seq__37960_38411__$1);
var G__38419 = null;
var G__38420 = (0);
var G__38421 = (0);
seq__37960_38397 = G__38418;
chunk__37962_38398 = G__38419;
count__37963_38399 = G__38420;
i__37964_38400 = G__38421;
continue;
} else {
var G__38422 = cljs.core.next(seq__37960_38411__$1);
var G__38423 = null;
var G__38424 = (0);
var G__38425 = (0);
seq__37960_38397 = G__38422;
chunk__37962_38398 = G__38423;
count__37963_38399 = G__38424;
i__37964_38400 = G__38425;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38396);
}
}


var G__38426 = seq__37942_38390;
var G__38427 = chunk__37944_38391;
var G__38428 = count__37945_38392;
var G__38429 = (i__37946_38393 + (1));
seq__37942_38390 = G__38426;
chunk__37944_38391 = G__38427;
count__37945_38392 = G__38428;
i__37946_38393 = G__38429;
continue;
} else {
var G__38430 = seq__37942_38390;
var G__38431 = chunk__37944_38391;
var G__38432 = count__37945_38392;
var G__38433 = (i__37946_38393 + (1));
seq__37942_38390 = G__38430;
chunk__37944_38391 = G__38431;
count__37945_38392 = G__38432;
i__37946_38393 = G__38433;
continue;
}
} else {
var temp__5753__auto___38434 = cljs.core.seq(seq__37942_38390);
if(temp__5753__auto___38434){
var seq__37942_38435__$1 = temp__5753__auto___38434;
if(cljs.core.chunked_seq_QMARK_(seq__37942_38435__$1)){
var c__4638__auto___38440 = cljs.core.chunk_first(seq__37942_38435__$1);
var G__38441 = cljs.core.chunk_rest(seq__37942_38435__$1);
var G__38442 = c__4638__auto___38440;
var G__38443 = cljs.core.count(c__4638__auto___38440);
var G__38444 = (0);
seq__37942_38390 = G__38441;
chunk__37944_38391 = G__38442;
count__37945_38392 = G__38443;
i__37946_38393 = G__38444;
continue;
} else {
var child_struct_38445 = cljs.core.first(seq__37942_38435__$1);
if((!((child_struct_38445 == null)))){
if(typeof child_struct_38445 === 'string'){
var text_38446 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38446),child_struct_38445].join(''));
} else {
var children_38447 = shadow.dom.svg_node(child_struct_38445);
if(cljs.core.seq_QMARK_(children_38447)){
var seq__37970_38448 = cljs.core.seq(children_38447);
var chunk__37972_38449 = null;
var count__37973_38450 = (0);
var i__37974_38451 = (0);
while(true){
if((i__37974_38451 < count__37973_38450)){
var child_38452 = chunk__37972_38449.cljs$core$IIndexed$_nth$arity$2(null,i__37974_38451);
if(cljs.core.truth_(child_38452)){
node.appendChild(child_38452);


var G__38453 = seq__37970_38448;
var G__38454 = chunk__37972_38449;
var G__38455 = count__37973_38450;
var G__38456 = (i__37974_38451 + (1));
seq__37970_38448 = G__38453;
chunk__37972_38449 = G__38454;
count__37973_38450 = G__38455;
i__37974_38451 = G__38456;
continue;
} else {
var G__38457 = seq__37970_38448;
var G__38458 = chunk__37972_38449;
var G__38459 = count__37973_38450;
var G__38460 = (i__37974_38451 + (1));
seq__37970_38448 = G__38457;
chunk__37972_38449 = G__38458;
count__37973_38450 = G__38459;
i__37974_38451 = G__38460;
continue;
}
} else {
var temp__5753__auto___38461__$1 = cljs.core.seq(seq__37970_38448);
if(temp__5753__auto___38461__$1){
var seq__37970_38462__$1 = temp__5753__auto___38461__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37970_38462__$1)){
var c__4638__auto___38463 = cljs.core.chunk_first(seq__37970_38462__$1);
var G__38464 = cljs.core.chunk_rest(seq__37970_38462__$1);
var G__38465 = c__4638__auto___38463;
var G__38466 = cljs.core.count(c__4638__auto___38463);
var G__38467 = (0);
seq__37970_38448 = G__38464;
chunk__37972_38449 = G__38465;
count__37973_38450 = G__38466;
i__37974_38451 = G__38467;
continue;
} else {
var child_38468 = cljs.core.first(seq__37970_38462__$1);
if(cljs.core.truth_(child_38468)){
node.appendChild(child_38468);


var G__38469 = cljs.core.next(seq__37970_38462__$1);
var G__38470 = null;
var G__38471 = (0);
var G__38472 = (0);
seq__37970_38448 = G__38469;
chunk__37972_38449 = G__38470;
count__37973_38450 = G__38471;
i__37974_38451 = G__38472;
continue;
} else {
var G__38473 = cljs.core.next(seq__37970_38462__$1);
var G__38474 = null;
var G__38475 = (0);
var G__38476 = (0);
seq__37970_38448 = G__38473;
chunk__37972_38449 = G__38474;
count__37973_38450 = G__38475;
i__37974_38451 = G__38476;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38447);
}
}


var G__38477 = cljs.core.next(seq__37942_38435__$1);
var G__38478 = null;
var G__38479 = (0);
var G__38480 = (0);
seq__37942_38390 = G__38477;
chunk__37944_38391 = G__38478;
count__37945_38392 = G__38479;
i__37946_38393 = G__38480;
continue;
} else {
var G__38481 = cljs.core.next(seq__37942_38435__$1);
var G__38482 = null;
var G__38483 = (0);
var G__38484 = (0);
seq__37942_38390 = G__38481;
chunk__37944_38391 = G__38482;
count__37945_38392 = G__38483;
i__37946_38393 = G__38484;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38485 = arguments.length;
var i__4819__auto___38486 = (0);
while(true){
if((i__4819__auto___38486 < len__4818__auto___38485)){
args__4824__auto__.push((arguments[i__4819__auto___38486]));

var G__38487 = (i__4819__auto___38486 + (1));
i__4819__auto___38486 = G__38487;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37980){
var G__37981 = cljs.core.first(seq37980);
var seq37980__$1 = cljs.core.next(seq37980);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37981,seq37980__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37983 = arguments.length;
switch (G__37983) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__35766__auto___38492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_37988){
var state_val_37989 = (state_37988[(1)]);
if((state_val_37989 === (1))){
var state_37988__$1 = state_37988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37988__$1,(2),once_or_cleanup);
} else {
if((state_val_37989 === (2))){
var inst_37985 = (state_37988[(2)]);
var inst_37986 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37988__$1 = (function (){var statearr_37990 = state_37988;
(statearr_37990[(7)] = inst_37985);

return statearr_37990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37988__$1,inst_37986);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35671__auto__ = null;
var shadow$dom$state_machine__35671__auto____0 = (function (){
var statearr_37991 = [null,null,null,null,null,null,null,null];
(statearr_37991[(0)] = shadow$dom$state_machine__35671__auto__);

(statearr_37991[(1)] = (1));

return statearr_37991;
});
var shadow$dom$state_machine__35671__auto____1 = (function (state_37988){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_37988);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e37992){var ex__35674__auto__ = e37992;
var statearr_37993_38493 = state_37988;
(statearr_37993_38493[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_37988[(4)]))){
var statearr_37994_38494 = state_37988;
(statearr_37994_38494[(1)] = cljs.core.first((state_37988[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38495 = state_37988;
state_37988 = G__38495;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
shadow$dom$state_machine__35671__auto__ = function(state_37988){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35671__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35671__auto____1.call(this,state_37988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35671__auto____0;
shadow$dom$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35671__auto____1;
return shadow$dom$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_37995 = f__35767__auto__();
(statearr_37995[(6)] = c__35766__auto___38492);

return statearr_37995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
