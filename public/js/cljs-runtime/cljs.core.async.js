goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35832 = arguments.length;
switch (G__35832) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35833 = (function (f,blockable,meta35834){
this.f = f;
this.blockable = blockable;
this.meta35834 = meta35834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35835,meta35834__$1){
var self__ = this;
var _35835__$1 = this;
return (new cljs.core.async.t_cljs$core$async35833(self__.f,self__.blockable,meta35834__$1));
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35835){
var self__ = this;
var _35835__$1 = this;
return self__.meta35834;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35834","meta35834",736940433,null)], null);
}));

(cljs.core.async.t_cljs$core$async35833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35833");

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35833.
 */
cljs.core.async.__GT_t_cljs$core$async35833 = (function cljs$core$async$__GT_t_cljs$core$async35833(f__$1,blockable__$1,meta35834){
return (new cljs.core.async.t_cljs$core$async35833(f__$1,blockable__$1,meta35834));
});

}

return (new cljs.core.async.t_cljs$core$async35833(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35838 = arguments.length;
switch (G__35838) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35840 = arguments.length;
switch (G__35840) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35842 = arguments.length;
switch (G__35842) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_37276 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37276) : fn1.call(null,val_37276));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37276) : fn1.call(null,val_37276));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35844 = arguments.length;
switch (G__35844) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___37278 = n;
var x_37279 = (0);
while(true){
if((x_37279 < n__4695__auto___37278)){
(a[x_37279] = x_37279);

var G__37280 = (x_37279 + (1));
x_37279 = G__37280;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35845 = (function (flag,meta35846){
this.flag = flag;
this.meta35846 = meta35846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35847,meta35846__$1){
var self__ = this;
var _35847__$1 = this;
return (new cljs.core.async.t_cljs$core$async35845(self__.flag,meta35846__$1));
}));

(cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35847){
var self__ = this;
var _35847__$1 = this;
return self__.meta35846;
}));

(cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35846","meta35846",976022049,null)], null);
}));

(cljs.core.async.t_cljs$core$async35845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35845");

(cljs.core.async.t_cljs$core$async35845.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35845.
 */
cljs.core.async.__GT_t_cljs$core$async35845 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35845(flag__$1,meta35846){
return (new cljs.core.async.t_cljs$core$async35845(flag__$1,meta35846));
});

}

return (new cljs.core.async.t_cljs$core$async35845(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35848 = (function (flag,cb,meta35849){
this.flag = flag;
this.cb = cb;
this.meta35849 = meta35849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35850,meta35849__$1){
var self__ = this;
var _35850__$1 = this;
return (new cljs.core.async.t_cljs$core$async35848(self__.flag,self__.cb,meta35849__$1));
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35850){
var self__ = this;
var _35850__$1 = this;
return self__.meta35849;
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35849","meta35849",1181507060,null)], null);
}));

(cljs.core.async.t_cljs$core$async35848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35848");

(cljs.core.async.t_cljs$core$async35848.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35848.
 */
cljs.core.async.__GT_t_cljs$core$async35848 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35848(flag__$1,cb__$1,meta35849){
return (new cljs.core.async.t_cljs$core$async35848(flag__$1,cb__$1,meta35849));
});

}

return (new cljs.core.async.t_cljs$core$async35848(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35851_SHARP_){
var G__35853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35851_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35853) : fret.call(null,G__35853));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35852_SHARP_){
var G__35854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35852_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35854) : fret.call(null,G__35854));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37281 = (i + (1));
i = G__37281;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37282 = arguments.length;
var i__4819__auto___37283 = (0);
while(true){
if((i__4819__auto___37283 < len__4818__auto___37282)){
args__4824__auto__.push((arguments[i__4819__auto___37283]));

var G__37284 = (i__4819__auto___37283 + (1));
i__4819__auto___37283 = G__37284;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35857){
var map__35858 = p__35857;
var map__35858__$1 = cljs.core.__destructure_map(map__35858);
var opts = map__35858__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35855){
var G__35856 = cljs.core.first(seq35855);
var seq35855__$1 = cljs.core.next(seq35855);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35856,seq35855__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35860 = arguments.length;
switch (G__35860) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35766__auto___37286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_35884){
var state_val_35885 = (state_35884[(1)]);
if((state_val_35885 === (7))){
var inst_35880 = (state_35884[(2)]);
var state_35884__$1 = state_35884;
var statearr_35886_37287 = state_35884__$1;
(statearr_35886_37287[(2)] = inst_35880);

(statearr_35886_37287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (1))){
var state_35884__$1 = state_35884;
var statearr_35887_37288 = state_35884__$1;
(statearr_35887_37288[(2)] = null);

(statearr_35887_37288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (4))){
var inst_35863 = (state_35884[(7)]);
var inst_35863__$1 = (state_35884[(2)]);
var inst_35864 = (inst_35863__$1 == null);
var state_35884__$1 = (function (){var statearr_35888 = state_35884;
(statearr_35888[(7)] = inst_35863__$1);

return statearr_35888;
})();
if(cljs.core.truth_(inst_35864)){
var statearr_35889_37289 = state_35884__$1;
(statearr_35889_37289[(1)] = (5));

} else {
var statearr_35890_37290 = state_35884__$1;
(statearr_35890_37290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (13))){
var state_35884__$1 = state_35884;
var statearr_35891_37291 = state_35884__$1;
(statearr_35891_37291[(2)] = null);

(statearr_35891_37291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (6))){
var inst_35863 = (state_35884[(7)]);
var state_35884__$1 = state_35884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35884__$1,(11),to,inst_35863);
} else {
if((state_val_35885 === (3))){
var inst_35882 = (state_35884[(2)]);
var state_35884__$1 = state_35884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35884__$1,inst_35882);
} else {
if((state_val_35885 === (12))){
var state_35884__$1 = state_35884;
var statearr_35892_37292 = state_35884__$1;
(statearr_35892_37292[(2)] = null);

(statearr_35892_37292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (2))){
var state_35884__$1 = state_35884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35884__$1,(4),from);
} else {
if((state_val_35885 === (11))){
var inst_35873 = (state_35884[(2)]);
var state_35884__$1 = state_35884;
if(cljs.core.truth_(inst_35873)){
var statearr_35893_37293 = state_35884__$1;
(statearr_35893_37293[(1)] = (12));

} else {
var statearr_35894_37294 = state_35884__$1;
(statearr_35894_37294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (9))){
var state_35884__$1 = state_35884;
var statearr_35895_37295 = state_35884__$1;
(statearr_35895_37295[(2)] = null);

(statearr_35895_37295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (5))){
var state_35884__$1 = state_35884;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35896_37296 = state_35884__$1;
(statearr_35896_37296[(1)] = (8));

} else {
var statearr_35897_37297 = state_35884__$1;
(statearr_35897_37297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (14))){
var inst_35878 = (state_35884[(2)]);
var state_35884__$1 = state_35884;
var statearr_35898_37298 = state_35884__$1;
(statearr_35898_37298[(2)] = inst_35878);

(statearr_35898_37298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (10))){
var inst_35870 = (state_35884[(2)]);
var state_35884__$1 = state_35884;
var statearr_35899_37299 = state_35884__$1;
(statearr_35899_37299[(2)] = inst_35870);

(statearr_35899_37299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35885 === (8))){
var inst_35867 = cljs.core.async.close_BANG_(to);
var state_35884__$1 = state_35884;
var statearr_35900_37300 = state_35884__$1;
(statearr_35900_37300[(2)] = inst_35867);

(statearr_35900_37300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_35901 = [null,null,null,null,null,null,null,null];
(statearr_35901[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_35901[(1)] = (1));

return statearr_35901;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_35884){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_35884);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e35902){var ex__35674__auto__ = e35902;
var statearr_35903_37301 = state_35884;
(statearr_35903_37301[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_35884[(4)]))){
var statearr_35904_37302 = state_35884;
(statearr_35904_37302[(1)] = cljs.core.first((state_35884[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37303 = state_35884;
state_35884 = G__37303;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_35884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_35884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_35905 = f__35767__auto__();
(statearr_35905[(6)] = c__35766__auto___37286);

return statearr_35905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__35906){
var vec__35907 = p__35906;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(1),null);
var job = vec__35907;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35766__auto___37304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_35914){
var state_val_35915 = (state_35914[(1)]);
if((state_val_35915 === (1))){
var state_35914__$1 = state_35914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35914__$1,(2),res,v);
} else {
if((state_val_35915 === (2))){
var inst_35911 = (state_35914[(2)]);
var inst_35912 = cljs.core.async.close_BANG_(res);
var state_35914__$1 = (function (){var statearr_35916 = state_35914;
(statearr_35916[(7)] = inst_35911);

return statearr_35916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35914__$1,inst_35912);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0 = (function (){
var statearr_35917 = [null,null,null,null,null,null,null,null];
(statearr_35917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__);

(statearr_35917[(1)] = (1));

return statearr_35917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1 = (function (state_35914){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_35914);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e35918){var ex__35674__auto__ = e35918;
var statearr_35919_37305 = state_35914;
(statearr_35919_37305[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_35914[(4)]))){
var statearr_35920_37306 = state_35914;
(statearr_35920_37306[(1)] = cljs.core.first((state_35914[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37307 = state_35914;
state_35914 = G__37307;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = function(state_35914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1.call(this,state_35914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_35921 = f__35767__auto__();
(statearr_35921[(6)] = c__35766__auto___37304);

return statearr_35921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35922){
var vec__35923 = p__35922;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35923,(1),null);
var job = vec__35923;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___37308 = n;
var __37309 = (0);
while(true){
if((__37309 < n__4695__auto___37308)){
var G__35926_37310 = type;
var G__35926_37311__$1 = (((G__35926_37310 instanceof cljs.core.Keyword))?G__35926_37310.fqn:null);
switch (G__35926_37311__$1) {
case "compute":
var c__35766__auto___37313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37309,c__35766__auto___37313,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async){
return (function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = ((function (__37309,c__35766__auto___37313,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async){
return (function (state_35939){
var state_val_35940 = (state_35939[(1)]);
if((state_val_35940 === (1))){
var state_35939__$1 = state_35939;
var statearr_35941_37314 = state_35939__$1;
(statearr_35941_37314[(2)] = null);

(statearr_35941_37314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (2))){
var state_35939__$1 = state_35939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35939__$1,(4),jobs);
} else {
if((state_val_35940 === (3))){
var inst_35937 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35939__$1,inst_35937);
} else {
if((state_val_35940 === (4))){
var inst_35929 = (state_35939[(2)]);
var inst_35930 = process(inst_35929);
var state_35939__$1 = state_35939;
if(cljs.core.truth_(inst_35930)){
var statearr_35942_37315 = state_35939__$1;
(statearr_35942_37315[(1)] = (5));

} else {
var statearr_35943_37316 = state_35939__$1;
(statearr_35943_37316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (5))){
var state_35939__$1 = state_35939;
var statearr_35944_37317 = state_35939__$1;
(statearr_35944_37317[(2)] = null);

(statearr_35944_37317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (6))){
var state_35939__$1 = state_35939;
var statearr_35945_37318 = state_35939__$1;
(statearr_35945_37318[(2)] = null);

(statearr_35945_37318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (7))){
var inst_35935 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
var statearr_35946_37319 = state_35939__$1;
(statearr_35946_37319[(2)] = inst_35935);

(statearr_35946_37319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37309,c__35766__auto___37313,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async))
;
return ((function (__37309,switch__35670__auto__,c__35766__auto___37313,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0 = (function (){
var statearr_35947 = [null,null,null,null,null,null,null];
(statearr_35947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__);

(statearr_35947[(1)] = (1));

return statearr_35947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1 = (function (state_35939){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_35939);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e35948){var ex__35674__auto__ = e35948;
var statearr_35949_37320 = state_35939;
(statearr_35949_37320[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_35939[(4)]))){
var statearr_35950_37321 = state_35939;
(statearr_35950_37321[(1)] = cljs.core.first((state_35939[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37322 = state_35939;
state_35939 = G__37322;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = function(state_35939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1.call(this,state_35939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__;
})()
;})(__37309,switch__35670__auto__,c__35766__auto___37313,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async))
})();
var state__35768__auto__ = (function (){var statearr_35951 = f__35767__auto__();
(statearr_35951[(6)] = c__35766__auto___37313);

return statearr_35951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
});})(__37309,c__35766__auto___37313,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async))
);


break;
case "async":
var c__35766__auto___37323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37309,c__35766__auto___37323,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async){
return (function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = ((function (__37309,c__35766__auto___37323,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async){
return (function (state_35964){
var state_val_35965 = (state_35964[(1)]);
if((state_val_35965 === (1))){
var state_35964__$1 = state_35964;
var statearr_35966_37324 = state_35964__$1;
(statearr_35966_37324[(2)] = null);

(statearr_35966_37324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (2))){
var state_35964__$1 = state_35964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35964__$1,(4),jobs);
} else {
if((state_val_35965 === (3))){
var inst_35962 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35964__$1,inst_35962);
} else {
if((state_val_35965 === (4))){
var inst_35954 = (state_35964[(2)]);
var inst_35955 = async(inst_35954);
var state_35964__$1 = state_35964;
if(cljs.core.truth_(inst_35955)){
var statearr_35967_37325 = state_35964__$1;
(statearr_35967_37325[(1)] = (5));

} else {
var statearr_35968_37326 = state_35964__$1;
(statearr_35968_37326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (5))){
var state_35964__$1 = state_35964;
var statearr_35969_37327 = state_35964__$1;
(statearr_35969_37327[(2)] = null);

(statearr_35969_37327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (6))){
var state_35964__$1 = state_35964;
var statearr_35970_37328 = state_35964__$1;
(statearr_35970_37328[(2)] = null);

(statearr_35970_37328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35965 === (7))){
var inst_35960 = (state_35964[(2)]);
var state_35964__$1 = state_35964;
var statearr_35971_37329 = state_35964__$1;
(statearr_35971_37329[(2)] = inst_35960);

(statearr_35971_37329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37309,c__35766__auto___37323,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async))
;
return ((function (__37309,switch__35670__auto__,c__35766__auto___37323,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null];
(statearr_35972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1 = (function (state_35964){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_35964);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e35973){var ex__35674__auto__ = e35973;
var statearr_35974_37330 = state_35964;
(statearr_35974_37330[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_35964[(4)]))){
var statearr_35975_37331 = state_35964;
(statearr_35975_37331[(1)] = cljs.core.first((state_35964[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37332 = state_35964;
state_35964 = G__37332;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = function(state_35964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1.call(this,state_35964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__;
})()
;})(__37309,switch__35670__auto__,c__35766__auto___37323,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async))
})();
var state__35768__auto__ = (function (){var statearr_35976 = f__35767__auto__();
(statearr_35976[(6)] = c__35766__auto___37323);

return statearr_35976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
});})(__37309,c__35766__auto___37323,G__35926_37310,G__35926_37311__$1,n__4695__auto___37308,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35926_37311__$1)].join('')));

}

var G__37333 = (__37309 + (1));
__37309 = G__37333;
continue;
} else {
}
break;
}

var c__35766__auto___37334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_35998){
var state_val_35999 = (state_35998[(1)]);
if((state_val_35999 === (7))){
var inst_35994 = (state_35998[(2)]);
var state_35998__$1 = state_35998;
var statearr_36000_37335 = state_35998__$1;
(statearr_36000_37335[(2)] = inst_35994);

(statearr_36000_37335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (1))){
var state_35998__$1 = state_35998;
var statearr_36001_37336 = state_35998__$1;
(statearr_36001_37336[(2)] = null);

(statearr_36001_37336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (4))){
var inst_35979 = (state_35998[(7)]);
var inst_35979__$1 = (state_35998[(2)]);
var inst_35980 = (inst_35979__$1 == null);
var state_35998__$1 = (function (){var statearr_36002 = state_35998;
(statearr_36002[(7)] = inst_35979__$1);

return statearr_36002;
})();
if(cljs.core.truth_(inst_35980)){
var statearr_36003_37337 = state_35998__$1;
(statearr_36003_37337[(1)] = (5));

} else {
var statearr_36004_37338 = state_35998__$1;
(statearr_36004_37338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (6))){
var inst_35984 = (state_35998[(8)]);
var inst_35979 = (state_35998[(7)]);
var inst_35984__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35986 = [inst_35979,inst_35984__$1];
var inst_35987 = (new cljs.core.PersistentVector(null,2,(5),inst_35985,inst_35986,null));
var state_35998__$1 = (function (){var statearr_36005 = state_35998;
(statearr_36005[(8)] = inst_35984__$1);

return statearr_36005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35998__$1,(8),jobs,inst_35987);
} else {
if((state_val_35999 === (3))){
var inst_35996 = (state_35998[(2)]);
var state_35998__$1 = state_35998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35998__$1,inst_35996);
} else {
if((state_val_35999 === (2))){
var state_35998__$1 = state_35998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35998__$1,(4),from);
} else {
if((state_val_35999 === (9))){
var inst_35991 = (state_35998[(2)]);
var state_35998__$1 = (function (){var statearr_36006 = state_35998;
(statearr_36006[(9)] = inst_35991);

return statearr_36006;
})();
var statearr_36007_37339 = state_35998__$1;
(statearr_36007_37339[(2)] = null);

(statearr_36007_37339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (5))){
var inst_35982 = cljs.core.async.close_BANG_(jobs);
var state_35998__$1 = state_35998;
var statearr_36008_37340 = state_35998__$1;
(statearr_36008_37340[(2)] = inst_35982);

(statearr_36008_37340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35999 === (8))){
var inst_35984 = (state_35998[(8)]);
var inst_35989 = (state_35998[(2)]);
var state_35998__$1 = (function (){var statearr_36009 = state_35998;
(statearr_36009[(10)] = inst_35989);

return statearr_36009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35998__$1,(9),results,inst_35984);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0 = (function (){
var statearr_36010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__);

(statearr_36010[(1)] = (1));

return statearr_36010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1 = (function (state_35998){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_35998);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36011){var ex__35674__auto__ = e36011;
var statearr_36012_37341 = state_35998;
(statearr_36012_37341[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_35998[(4)]))){
var statearr_36013_37342 = state_35998;
(statearr_36013_37342[(1)] = cljs.core.first((state_35998[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37343 = state_35998;
state_35998 = G__37343;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = function(state_35998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1.call(this,state_35998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36014 = f__35767__auto__();
(statearr_36014[(6)] = c__35766__auto___37334);

return statearr_36014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


var c__35766__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36052){
var state_val_36053 = (state_36052[(1)]);
if((state_val_36053 === (7))){
var inst_36048 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
var statearr_36054_37344 = state_36052__$1;
(statearr_36054_37344[(2)] = inst_36048);

(statearr_36054_37344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (20))){
var state_36052__$1 = state_36052;
var statearr_36055_37345 = state_36052__$1;
(statearr_36055_37345[(2)] = null);

(statearr_36055_37345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (1))){
var state_36052__$1 = state_36052;
var statearr_36056_37346 = state_36052__$1;
(statearr_36056_37346[(2)] = null);

(statearr_36056_37346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (4))){
var inst_36017 = (state_36052[(7)]);
var inst_36017__$1 = (state_36052[(2)]);
var inst_36018 = (inst_36017__$1 == null);
var state_36052__$1 = (function (){var statearr_36057 = state_36052;
(statearr_36057[(7)] = inst_36017__$1);

return statearr_36057;
})();
if(cljs.core.truth_(inst_36018)){
var statearr_36058_37347 = state_36052__$1;
(statearr_36058_37347[(1)] = (5));

} else {
var statearr_36059_37348 = state_36052__$1;
(statearr_36059_37348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (15))){
var inst_36030 = (state_36052[(8)]);
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36052__$1,(18),to,inst_36030);
} else {
if((state_val_36053 === (21))){
var inst_36043 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
var statearr_36060_37349 = state_36052__$1;
(statearr_36060_37349[(2)] = inst_36043);

(statearr_36060_37349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (13))){
var inst_36045 = (state_36052[(2)]);
var state_36052__$1 = (function (){var statearr_36061 = state_36052;
(statearr_36061[(9)] = inst_36045);

return statearr_36061;
})();
var statearr_36062_37350 = state_36052__$1;
(statearr_36062_37350[(2)] = null);

(statearr_36062_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (6))){
var inst_36017 = (state_36052[(7)]);
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36052__$1,(11),inst_36017);
} else {
if((state_val_36053 === (17))){
var inst_36038 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
if(cljs.core.truth_(inst_36038)){
var statearr_36063_37351 = state_36052__$1;
(statearr_36063_37351[(1)] = (19));

} else {
var statearr_36064_37352 = state_36052__$1;
(statearr_36064_37352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (3))){
var inst_36050 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36052__$1,inst_36050);
} else {
if((state_val_36053 === (12))){
var inst_36027 = (state_36052[(10)]);
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36052__$1,(14),inst_36027);
} else {
if((state_val_36053 === (2))){
var state_36052__$1 = state_36052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36052__$1,(4),results);
} else {
if((state_val_36053 === (19))){
var state_36052__$1 = state_36052;
var statearr_36065_37355 = state_36052__$1;
(statearr_36065_37355[(2)] = null);

(statearr_36065_37355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (11))){
var inst_36027 = (state_36052[(2)]);
var state_36052__$1 = (function (){var statearr_36066 = state_36052;
(statearr_36066[(10)] = inst_36027);

return statearr_36066;
})();
var statearr_36067_37356 = state_36052__$1;
(statearr_36067_37356[(2)] = null);

(statearr_36067_37356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (9))){
var state_36052__$1 = state_36052;
var statearr_36068_37357 = state_36052__$1;
(statearr_36068_37357[(2)] = null);

(statearr_36068_37357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (5))){
var state_36052__$1 = state_36052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36069_37358 = state_36052__$1;
(statearr_36069_37358[(1)] = (8));

} else {
var statearr_36070_37359 = state_36052__$1;
(statearr_36070_37359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (14))){
var inst_36030 = (state_36052[(8)]);
var inst_36032 = (state_36052[(11)]);
var inst_36030__$1 = (state_36052[(2)]);
var inst_36031 = (inst_36030__$1 == null);
var inst_36032__$1 = cljs.core.not(inst_36031);
var state_36052__$1 = (function (){var statearr_36071 = state_36052;
(statearr_36071[(8)] = inst_36030__$1);

(statearr_36071[(11)] = inst_36032__$1);

return statearr_36071;
})();
if(inst_36032__$1){
var statearr_36072_37360 = state_36052__$1;
(statearr_36072_37360[(1)] = (15));

} else {
var statearr_36073_37361 = state_36052__$1;
(statearr_36073_37361[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (16))){
var inst_36032 = (state_36052[(11)]);
var state_36052__$1 = state_36052;
var statearr_36074_37362 = state_36052__$1;
(statearr_36074_37362[(2)] = inst_36032);

(statearr_36074_37362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (10))){
var inst_36024 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
var statearr_36075_37363 = state_36052__$1;
(statearr_36075_37363[(2)] = inst_36024);

(statearr_36075_37363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (18))){
var inst_36035 = (state_36052[(2)]);
var state_36052__$1 = state_36052;
var statearr_36076_37364 = state_36052__$1;
(statearr_36076_37364[(2)] = inst_36035);

(statearr_36076_37364[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36053 === (8))){
var inst_36021 = cljs.core.async.close_BANG_(to);
var state_36052__$1 = state_36052;
var statearr_36077_37365 = state_36052__$1;
(statearr_36077_37365[(2)] = inst_36021);

(statearr_36077_37365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0 = (function (){
var statearr_36078 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__);

(statearr_36078[(1)] = (1));

return statearr_36078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1 = (function (state_36052){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36052);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36079){var ex__35674__auto__ = e36079;
var statearr_36080_37366 = state_36052;
(statearr_36080_37366[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36052[(4)]))){
var statearr_36081_37367 = state_36052;
(statearr_36081_37367[(1)] = cljs.core.first((state_36052[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37368 = state_36052;
state_36052 = G__37368;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__ = function(state_36052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1.call(this,state_36052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35671__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36082 = f__35767__auto__();
(statearr_36082[(6)] = c__35766__auto__);

return statearr_36082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));

return c__35766__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36084 = arguments.length;
switch (G__36084) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36086 = arguments.length;
switch (G__36086) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36088 = arguments.length;
switch (G__36088) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__35766__auto___37372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36114){
var state_val_36115 = (state_36114[(1)]);
if((state_val_36115 === (7))){
var inst_36110 = (state_36114[(2)]);
var state_36114__$1 = state_36114;
var statearr_36116_37373 = state_36114__$1;
(statearr_36116_37373[(2)] = inst_36110);

(statearr_36116_37373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (1))){
var state_36114__$1 = state_36114;
var statearr_36117_37374 = state_36114__$1;
(statearr_36117_37374[(2)] = null);

(statearr_36117_37374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (4))){
var inst_36091 = (state_36114[(7)]);
var inst_36091__$1 = (state_36114[(2)]);
var inst_36092 = (inst_36091__$1 == null);
var state_36114__$1 = (function (){var statearr_36118 = state_36114;
(statearr_36118[(7)] = inst_36091__$1);

return statearr_36118;
})();
if(cljs.core.truth_(inst_36092)){
var statearr_36119_37375 = state_36114__$1;
(statearr_36119_37375[(1)] = (5));

} else {
var statearr_36120_37376 = state_36114__$1;
(statearr_36120_37376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (13))){
var state_36114__$1 = state_36114;
var statearr_36121_37377 = state_36114__$1;
(statearr_36121_37377[(2)] = null);

(statearr_36121_37377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (6))){
var inst_36091 = (state_36114[(7)]);
var inst_36097 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36091) : p.call(null,inst_36091));
var state_36114__$1 = state_36114;
if(cljs.core.truth_(inst_36097)){
var statearr_36122_37378 = state_36114__$1;
(statearr_36122_37378[(1)] = (9));

} else {
var statearr_36123_37379 = state_36114__$1;
(statearr_36123_37379[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (3))){
var inst_36112 = (state_36114[(2)]);
var state_36114__$1 = state_36114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36114__$1,inst_36112);
} else {
if((state_val_36115 === (12))){
var state_36114__$1 = state_36114;
var statearr_36124_37380 = state_36114__$1;
(statearr_36124_37380[(2)] = null);

(statearr_36124_37380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (2))){
var state_36114__$1 = state_36114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36114__$1,(4),ch);
} else {
if((state_val_36115 === (11))){
var inst_36091 = (state_36114[(7)]);
var inst_36101 = (state_36114[(2)]);
var state_36114__$1 = state_36114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36114__$1,(8),inst_36101,inst_36091);
} else {
if((state_val_36115 === (9))){
var state_36114__$1 = state_36114;
var statearr_36125_37381 = state_36114__$1;
(statearr_36125_37381[(2)] = tc);

(statearr_36125_37381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (5))){
var inst_36094 = cljs.core.async.close_BANG_(tc);
var inst_36095 = cljs.core.async.close_BANG_(fc);
var state_36114__$1 = (function (){var statearr_36126 = state_36114;
(statearr_36126[(8)] = inst_36094);

return statearr_36126;
})();
var statearr_36127_37382 = state_36114__$1;
(statearr_36127_37382[(2)] = inst_36095);

(statearr_36127_37382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (14))){
var inst_36108 = (state_36114[(2)]);
var state_36114__$1 = state_36114;
var statearr_36128_37383 = state_36114__$1;
(statearr_36128_37383[(2)] = inst_36108);

(statearr_36128_37383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (10))){
var state_36114__$1 = state_36114;
var statearr_36129_37384 = state_36114__$1;
(statearr_36129_37384[(2)] = fc);

(statearr_36129_37384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36115 === (8))){
var inst_36103 = (state_36114[(2)]);
var state_36114__$1 = state_36114;
if(cljs.core.truth_(inst_36103)){
var statearr_36130_37385 = state_36114__$1;
(statearr_36130_37385[(1)] = (12));

} else {
var statearr_36131_37386 = state_36114__$1;
(statearr_36131_37386[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_36132 = [null,null,null,null,null,null,null,null,null];
(statearr_36132[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_36132[(1)] = (1));

return statearr_36132;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_36114){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36114);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36133){var ex__35674__auto__ = e36133;
var statearr_36134_37387 = state_36114;
(statearr_36134_37387[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36114[(4)]))){
var statearr_36135_37388 = state_36114;
(statearr_36135_37388[(1)] = cljs.core.first((state_36114[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37389 = state_36114;
state_36114 = G__37389;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_36114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_36114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36136 = f__35767__auto__();
(statearr_36136[(6)] = c__35766__auto___37372);

return statearr_36136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35766__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36158){
var state_val_36159 = (state_36158[(1)]);
if((state_val_36159 === (7))){
var inst_36154 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36160_37390 = state_36158__$1;
(statearr_36160_37390[(2)] = inst_36154);

(statearr_36160_37390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (1))){
var inst_36137 = init;
var inst_36138 = inst_36137;
var state_36158__$1 = (function (){var statearr_36161 = state_36158;
(statearr_36161[(7)] = inst_36138);

return statearr_36161;
})();
var statearr_36162_37391 = state_36158__$1;
(statearr_36162_37391[(2)] = null);

(statearr_36162_37391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (4))){
var inst_36141 = (state_36158[(8)]);
var inst_36141__$1 = (state_36158[(2)]);
var inst_36142 = (inst_36141__$1 == null);
var state_36158__$1 = (function (){var statearr_36163 = state_36158;
(statearr_36163[(8)] = inst_36141__$1);

return statearr_36163;
})();
if(cljs.core.truth_(inst_36142)){
var statearr_36164_37392 = state_36158__$1;
(statearr_36164_37392[(1)] = (5));

} else {
var statearr_36165_37393 = state_36158__$1;
(statearr_36165_37393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (6))){
var inst_36138 = (state_36158[(7)]);
var inst_36141 = (state_36158[(8)]);
var inst_36145 = (state_36158[(9)]);
var inst_36145__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36138,inst_36141) : f.call(null,inst_36138,inst_36141));
var inst_36146 = cljs.core.reduced_QMARK_(inst_36145__$1);
var state_36158__$1 = (function (){var statearr_36166 = state_36158;
(statearr_36166[(9)] = inst_36145__$1);

return statearr_36166;
})();
if(inst_36146){
var statearr_36167_37394 = state_36158__$1;
(statearr_36167_37394[(1)] = (8));

} else {
var statearr_36168_37395 = state_36158__$1;
(statearr_36168_37395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (3))){
var inst_36156 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36158__$1,inst_36156);
} else {
if((state_val_36159 === (2))){
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36158__$1,(4),ch);
} else {
if((state_val_36159 === (9))){
var inst_36145 = (state_36158[(9)]);
var inst_36138 = inst_36145;
var state_36158__$1 = (function (){var statearr_36169 = state_36158;
(statearr_36169[(7)] = inst_36138);

return statearr_36169;
})();
var statearr_36170_37396 = state_36158__$1;
(statearr_36170_37396[(2)] = null);

(statearr_36170_37396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (5))){
var inst_36138 = (state_36158[(7)]);
var state_36158__$1 = state_36158;
var statearr_36171_37397 = state_36158__$1;
(statearr_36171_37397[(2)] = inst_36138);

(statearr_36171_37397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (10))){
var inst_36152 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36172_37398 = state_36158__$1;
(statearr_36172_37398[(2)] = inst_36152);

(statearr_36172_37398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (8))){
var inst_36145 = (state_36158[(9)]);
var inst_36148 = cljs.core.deref(inst_36145);
var state_36158__$1 = state_36158;
var statearr_36173_37399 = state_36158__$1;
(statearr_36173_37399[(2)] = inst_36148);

(statearr_36173_37399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__35671__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35671__auto____0 = (function (){
var statearr_36174 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36174[(0)] = cljs$core$async$reduce_$_state_machine__35671__auto__);

(statearr_36174[(1)] = (1));

return statearr_36174;
});
var cljs$core$async$reduce_$_state_machine__35671__auto____1 = (function (state_36158){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36158);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36175){var ex__35674__auto__ = e36175;
var statearr_36176_37400 = state_36158;
(statearr_36176_37400[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36158[(4)]))){
var statearr_36177_37401 = state_36158;
(statearr_36177_37401[(1)] = cljs.core.first((state_36158[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37402 = state_36158;
state_36158 = G__37402;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35671__auto__ = function(state_36158){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35671__auto____1.call(this,state_36158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35671__auto____0;
cljs$core$async$reduce_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35671__auto____1;
return cljs$core$async$reduce_$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36178 = f__35767__auto__();
(statearr_36178[(6)] = c__35766__auto__);

return statearr_36178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));

return c__35766__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35766__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36184){
var state_val_36185 = (state_36184[(1)]);
if((state_val_36185 === (1))){
var inst_36179 = cljs.core.async.reduce(f__$1,init,ch);
var state_36184__$1 = state_36184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36184__$1,(2),inst_36179);
} else {
if((state_val_36185 === (2))){
var inst_36181 = (state_36184[(2)]);
var inst_36182 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36181) : f__$1.call(null,inst_36181));
var state_36184__$1 = state_36184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36184__$1,inst_36182);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35671__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35671__auto____0 = (function (){
var statearr_36186 = [null,null,null,null,null,null,null];
(statearr_36186[(0)] = cljs$core$async$transduce_$_state_machine__35671__auto__);

(statearr_36186[(1)] = (1));

return statearr_36186;
});
var cljs$core$async$transduce_$_state_machine__35671__auto____1 = (function (state_36184){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36184);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36187){var ex__35674__auto__ = e36187;
var statearr_36188_37403 = state_36184;
(statearr_36188_37403[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36184[(4)]))){
var statearr_36189_37404 = state_36184;
(statearr_36189_37404[(1)] = cljs.core.first((state_36184[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37405 = state_36184;
state_36184 = G__37405;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35671__auto__ = function(state_36184){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35671__auto____1.call(this,state_36184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35671__auto____0;
cljs$core$async$transduce_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35671__auto____1;
return cljs$core$async$transduce_$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36190 = f__35767__auto__();
(statearr_36190[(6)] = c__35766__auto__);

return statearr_36190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));

return c__35766__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__36192 = arguments.length;
switch (G__36192) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35766__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36217){
var state_val_36218 = (state_36217[(1)]);
if((state_val_36218 === (7))){
var inst_36199 = (state_36217[(2)]);
var state_36217__$1 = state_36217;
var statearr_36219_37407 = state_36217__$1;
(statearr_36219_37407[(2)] = inst_36199);

(statearr_36219_37407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (1))){
var inst_36193 = cljs.core.seq(coll);
var inst_36194 = inst_36193;
var state_36217__$1 = (function (){var statearr_36220 = state_36217;
(statearr_36220[(7)] = inst_36194);

return statearr_36220;
})();
var statearr_36221_37408 = state_36217__$1;
(statearr_36221_37408[(2)] = null);

(statearr_36221_37408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (4))){
var inst_36194 = (state_36217[(7)]);
var inst_36197 = cljs.core.first(inst_36194);
var state_36217__$1 = state_36217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36217__$1,(7),ch,inst_36197);
} else {
if((state_val_36218 === (13))){
var inst_36211 = (state_36217[(2)]);
var state_36217__$1 = state_36217;
var statearr_36222_37409 = state_36217__$1;
(statearr_36222_37409[(2)] = inst_36211);

(statearr_36222_37409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (6))){
var inst_36202 = (state_36217[(2)]);
var state_36217__$1 = state_36217;
if(cljs.core.truth_(inst_36202)){
var statearr_36223_37410 = state_36217__$1;
(statearr_36223_37410[(1)] = (8));

} else {
var statearr_36224_37411 = state_36217__$1;
(statearr_36224_37411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (3))){
var inst_36215 = (state_36217[(2)]);
var state_36217__$1 = state_36217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36217__$1,inst_36215);
} else {
if((state_val_36218 === (12))){
var state_36217__$1 = state_36217;
var statearr_36225_37412 = state_36217__$1;
(statearr_36225_37412[(2)] = null);

(statearr_36225_37412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (2))){
var inst_36194 = (state_36217[(7)]);
var state_36217__$1 = state_36217;
if(cljs.core.truth_(inst_36194)){
var statearr_36226_37413 = state_36217__$1;
(statearr_36226_37413[(1)] = (4));

} else {
var statearr_36227_37414 = state_36217__$1;
(statearr_36227_37414[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (11))){
var inst_36208 = cljs.core.async.close_BANG_(ch);
var state_36217__$1 = state_36217;
var statearr_36228_37415 = state_36217__$1;
(statearr_36228_37415[(2)] = inst_36208);

(statearr_36228_37415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (9))){
var state_36217__$1 = state_36217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36229_37416 = state_36217__$1;
(statearr_36229_37416[(1)] = (11));

} else {
var statearr_36230_37417 = state_36217__$1;
(statearr_36230_37417[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (5))){
var inst_36194 = (state_36217[(7)]);
var state_36217__$1 = state_36217;
var statearr_36231_37418 = state_36217__$1;
(statearr_36231_37418[(2)] = inst_36194);

(statearr_36231_37418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (10))){
var inst_36213 = (state_36217[(2)]);
var state_36217__$1 = state_36217;
var statearr_36232_37419 = state_36217__$1;
(statearr_36232_37419[(2)] = inst_36213);

(statearr_36232_37419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36218 === (8))){
var inst_36194 = (state_36217[(7)]);
var inst_36204 = cljs.core.next(inst_36194);
var inst_36194__$1 = inst_36204;
var state_36217__$1 = (function (){var statearr_36233 = state_36217;
(statearr_36233[(7)] = inst_36194__$1);

return statearr_36233;
})();
var statearr_36234_37420 = state_36217__$1;
(statearr_36234_37420[(2)] = null);

(statearr_36234_37420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_36235 = [null,null,null,null,null,null,null,null];
(statearr_36235[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_36235[(1)] = (1));

return statearr_36235;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_36217){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36217);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36236){var ex__35674__auto__ = e36236;
var statearr_36237_37421 = state_36217;
(statearr_36237_37421[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36217[(4)]))){
var statearr_36238_37422 = state_36217;
(statearr_36238_37422[(1)] = cljs.core.first((state_36217[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37423 = state_36217;
state_36217 = G__37423;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_36217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_36217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36239 = f__35767__auto__();
(statearr_36239[(6)] = c__35766__auto__);

return statearr_36239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));

return c__35766__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36241 = arguments.length;
switch (G__36241) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37425 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37425(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37426 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37426(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37427 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37427(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37429 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37429(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36242 = (function (ch,cs,meta36243){
this.ch = ch;
this.cs = cs;
this.meta36243 = meta36243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36244,meta36243__$1){
var self__ = this;
var _36244__$1 = this;
return (new cljs.core.async.t_cljs$core$async36242(self__.ch,self__.cs,meta36243__$1));
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36244){
var self__ = this;
var _36244__$1 = this;
return self__.meta36243;
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36242.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36243","meta36243",-1189315507,null)], null);
}));

(cljs.core.async.t_cljs$core$async36242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36242");

(cljs.core.async.t_cljs$core$async36242.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36242.
 */
cljs.core.async.__GT_t_cljs$core$async36242 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36242(ch__$1,cs__$1,meta36243){
return (new cljs.core.async.t_cljs$core$async36242(ch__$1,cs__$1,meta36243));
});

}

return (new cljs.core.async.t_cljs$core$async36242(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35766__auto___37432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36377){
var state_val_36378 = (state_36377[(1)]);
if((state_val_36378 === (7))){
var inst_36373 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36379_37433 = state_36377__$1;
(statearr_36379_37433[(2)] = inst_36373);

(statearr_36379_37433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (20))){
var inst_36278 = (state_36377[(7)]);
var inst_36290 = cljs.core.first(inst_36278);
var inst_36291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36290,(0),null);
var inst_36292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36290,(1),null);
var state_36377__$1 = (function (){var statearr_36380 = state_36377;
(statearr_36380[(8)] = inst_36291);

return statearr_36380;
})();
if(cljs.core.truth_(inst_36292)){
var statearr_36381_37434 = state_36377__$1;
(statearr_36381_37434[(1)] = (22));

} else {
var statearr_36382_37435 = state_36377__$1;
(statearr_36382_37435[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (27))){
var inst_36320 = (state_36377[(9)]);
var inst_36247 = (state_36377[(10)]);
var inst_36322 = (state_36377[(11)]);
var inst_36327 = (state_36377[(12)]);
var inst_36327__$1 = cljs.core._nth(inst_36320,inst_36322);
var inst_36328 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36327__$1,inst_36247,done);
var state_36377__$1 = (function (){var statearr_36383 = state_36377;
(statearr_36383[(12)] = inst_36327__$1);

return statearr_36383;
})();
if(cljs.core.truth_(inst_36328)){
var statearr_36384_37436 = state_36377__$1;
(statearr_36384_37436[(1)] = (30));

} else {
var statearr_36385_37437 = state_36377__$1;
(statearr_36385_37437[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (1))){
var state_36377__$1 = state_36377;
var statearr_36386_37438 = state_36377__$1;
(statearr_36386_37438[(2)] = null);

(statearr_36386_37438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (24))){
var inst_36278 = (state_36377[(7)]);
var inst_36297 = (state_36377[(2)]);
var inst_36298 = cljs.core.next(inst_36278);
var inst_36256 = inst_36298;
var inst_36257 = null;
var inst_36258 = (0);
var inst_36259 = (0);
var state_36377__$1 = (function (){var statearr_36387 = state_36377;
(statearr_36387[(13)] = inst_36256);

(statearr_36387[(14)] = inst_36258);

(statearr_36387[(15)] = inst_36257);

(statearr_36387[(16)] = inst_36297);

(statearr_36387[(17)] = inst_36259);

return statearr_36387;
})();
var statearr_36388_37439 = state_36377__$1;
(statearr_36388_37439[(2)] = null);

(statearr_36388_37439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (39))){
var state_36377__$1 = state_36377;
var statearr_36392_37440 = state_36377__$1;
(statearr_36392_37440[(2)] = null);

(statearr_36392_37440[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (4))){
var inst_36247 = (state_36377[(10)]);
var inst_36247__$1 = (state_36377[(2)]);
var inst_36248 = (inst_36247__$1 == null);
var state_36377__$1 = (function (){var statearr_36393 = state_36377;
(statearr_36393[(10)] = inst_36247__$1);

return statearr_36393;
})();
if(cljs.core.truth_(inst_36248)){
var statearr_36394_37441 = state_36377__$1;
(statearr_36394_37441[(1)] = (5));

} else {
var statearr_36395_37442 = state_36377__$1;
(statearr_36395_37442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (15))){
var inst_36256 = (state_36377[(13)]);
var inst_36258 = (state_36377[(14)]);
var inst_36257 = (state_36377[(15)]);
var inst_36259 = (state_36377[(17)]);
var inst_36274 = (state_36377[(2)]);
var inst_36275 = (inst_36259 + (1));
var tmp36389 = inst_36256;
var tmp36390 = inst_36258;
var tmp36391 = inst_36257;
var inst_36256__$1 = tmp36389;
var inst_36257__$1 = tmp36391;
var inst_36258__$1 = tmp36390;
var inst_36259__$1 = inst_36275;
var state_36377__$1 = (function (){var statearr_36396 = state_36377;
(statearr_36396[(13)] = inst_36256__$1);

(statearr_36396[(18)] = inst_36274);

(statearr_36396[(14)] = inst_36258__$1);

(statearr_36396[(15)] = inst_36257__$1);

(statearr_36396[(17)] = inst_36259__$1);

return statearr_36396;
})();
var statearr_36397_37443 = state_36377__$1;
(statearr_36397_37443[(2)] = null);

(statearr_36397_37443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (21))){
var inst_36301 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36401_37444 = state_36377__$1;
(statearr_36401_37444[(2)] = inst_36301);

(statearr_36401_37444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (31))){
var inst_36327 = (state_36377[(12)]);
var inst_36331 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36327);
var state_36377__$1 = state_36377;
var statearr_36402_37445 = state_36377__$1;
(statearr_36402_37445[(2)] = inst_36331);

(statearr_36402_37445[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (32))){
var inst_36320 = (state_36377[(9)]);
var inst_36319 = (state_36377[(19)]);
var inst_36322 = (state_36377[(11)]);
var inst_36321 = (state_36377[(20)]);
var inst_36333 = (state_36377[(2)]);
var inst_36334 = (inst_36322 + (1));
var tmp36398 = inst_36320;
var tmp36399 = inst_36319;
var tmp36400 = inst_36321;
var inst_36319__$1 = tmp36399;
var inst_36320__$1 = tmp36398;
var inst_36321__$1 = tmp36400;
var inst_36322__$1 = inst_36334;
var state_36377__$1 = (function (){var statearr_36403 = state_36377;
(statearr_36403[(9)] = inst_36320__$1);

(statearr_36403[(19)] = inst_36319__$1);

(statearr_36403[(11)] = inst_36322__$1);

(statearr_36403[(21)] = inst_36333);

(statearr_36403[(20)] = inst_36321__$1);

return statearr_36403;
})();
var statearr_36404_37446 = state_36377__$1;
(statearr_36404_37446[(2)] = null);

(statearr_36404_37446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (40))){
var inst_36346 = (state_36377[(22)]);
var inst_36350 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36346);
var state_36377__$1 = state_36377;
var statearr_36405_37447 = state_36377__$1;
(statearr_36405_37447[(2)] = inst_36350);

(statearr_36405_37447[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (33))){
var inst_36337 = (state_36377[(23)]);
var inst_36339 = cljs.core.chunked_seq_QMARK_(inst_36337);
var state_36377__$1 = state_36377;
if(inst_36339){
var statearr_36406_37448 = state_36377__$1;
(statearr_36406_37448[(1)] = (36));

} else {
var statearr_36407_37449 = state_36377__$1;
(statearr_36407_37449[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (13))){
var inst_36268 = (state_36377[(24)]);
var inst_36271 = cljs.core.async.close_BANG_(inst_36268);
var state_36377__$1 = state_36377;
var statearr_36408_37450 = state_36377__$1;
(statearr_36408_37450[(2)] = inst_36271);

(statearr_36408_37450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (22))){
var inst_36291 = (state_36377[(8)]);
var inst_36294 = cljs.core.async.close_BANG_(inst_36291);
var state_36377__$1 = state_36377;
var statearr_36409_37451 = state_36377__$1;
(statearr_36409_37451[(2)] = inst_36294);

(statearr_36409_37451[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (36))){
var inst_36337 = (state_36377[(23)]);
var inst_36341 = cljs.core.chunk_first(inst_36337);
var inst_36342 = cljs.core.chunk_rest(inst_36337);
var inst_36343 = cljs.core.count(inst_36341);
var inst_36319 = inst_36342;
var inst_36320 = inst_36341;
var inst_36321 = inst_36343;
var inst_36322 = (0);
var state_36377__$1 = (function (){var statearr_36410 = state_36377;
(statearr_36410[(9)] = inst_36320);

(statearr_36410[(19)] = inst_36319);

(statearr_36410[(11)] = inst_36322);

(statearr_36410[(20)] = inst_36321);

return statearr_36410;
})();
var statearr_36411_37452 = state_36377__$1;
(statearr_36411_37452[(2)] = null);

(statearr_36411_37452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (41))){
var inst_36337 = (state_36377[(23)]);
var inst_36352 = (state_36377[(2)]);
var inst_36353 = cljs.core.next(inst_36337);
var inst_36319 = inst_36353;
var inst_36320 = null;
var inst_36321 = (0);
var inst_36322 = (0);
var state_36377__$1 = (function (){var statearr_36412 = state_36377;
(statearr_36412[(9)] = inst_36320);

(statearr_36412[(19)] = inst_36319);

(statearr_36412[(11)] = inst_36322);

(statearr_36412[(25)] = inst_36352);

(statearr_36412[(20)] = inst_36321);

return statearr_36412;
})();
var statearr_36413_37453 = state_36377__$1;
(statearr_36413_37453[(2)] = null);

(statearr_36413_37453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (43))){
var state_36377__$1 = state_36377;
var statearr_36414_37454 = state_36377__$1;
(statearr_36414_37454[(2)] = null);

(statearr_36414_37454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (29))){
var inst_36361 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36415_37455 = state_36377__$1;
(statearr_36415_37455[(2)] = inst_36361);

(statearr_36415_37455[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (44))){
var inst_36370 = (state_36377[(2)]);
var state_36377__$1 = (function (){var statearr_36416 = state_36377;
(statearr_36416[(26)] = inst_36370);

return statearr_36416;
})();
var statearr_36417_37456 = state_36377__$1;
(statearr_36417_37456[(2)] = null);

(statearr_36417_37456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (6))){
var inst_36311 = (state_36377[(27)]);
var inst_36310 = cljs.core.deref(cs);
var inst_36311__$1 = cljs.core.keys(inst_36310);
var inst_36312 = cljs.core.count(inst_36311__$1);
var inst_36313 = cljs.core.reset_BANG_(dctr,inst_36312);
var inst_36318 = cljs.core.seq(inst_36311__$1);
var inst_36319 = inst_36318;
var inst_36320 = null;
var inst_36321 = (0);
var inst_36322 = (0);
var state_36377__$1 = (function (){var statearr_36418 = state_36377;
(statearr_36418[(9)] = inst_36320);

(statearr_36418[(19)] = inst_36319);

(statearr_36418[(11)] = inst_36322);

(statearr_36418[(28)] = inst_36313);

(statearr_36418[(27)] = inst_36311__$1);

(statearr_36418[(20)] = inst_36321);

return statearr_36418;
})();
var statearr_36419_37457 = state_36377__$1;
(statearr_36419_37457[(2)] = null);

(statearr_36419_37457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (28))){
var inst_36319 = (state_36377[(19)]);
var inst_36337 = (state_36377[(23)]);
var inst_36337__$1 = cljs.core.seq(inst_36319);
var state_36377__$1 = (function (){var statearr_36420 = state_36377;
(statearr_36420[(23)] = inst_36337__$1);

return statearr_36420;
})();
if(inst_36337__$1){
var statearr_36421_37458 = state_36377__$1;
(statearr_36421_37458[(1)] = (33));

} else {
var statearr_36422_37459 = state_36377__$1;
(statearr_36422_37459[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (25))){
var inst_36322 = (state_36377[(11)]);
var inst_36321 = (state_36377[(20)]);
var inst_36324 = (inst_36322 < inst_36321);
var inst_36325 = inst_36324;
var state_36377__$1 = state_36377;
if(cljs.core.truth_(inst_36325)){
var statearr_36423_37460 = state_36377__$1;
(statearr_36423_37460[(1)] = (27));

} else {
var statearr_36424_37461 = state_36377__$1;
(statearr_36424_37461[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (34))){
var state_36377__$1 = state_36377;
var statearr_36425_37462 = state_36377__$1;
(statearr_36425_37462[(2)] = null);

(statearr_36425_37462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (17))){
var state_36377__$1 = state_36377;
var statearr_36426_37463 = state_36377__$1;
(statearr_36426_37463[(2)] = null);

(statearr_36426_37463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (3))){
var inst_36375 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36377__$1,inst_36375);
} else {
if((state_val_36378 === (12))){
var inst_36306 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36427_37464 = state_36377__$1;
(statearr_36427_37464[(2)] = inst_36306);

(statearr_36427_37464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (2))){
var state_36377__$1 = state_36377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36377__$1,(4),ch);
} else {
if((state_val_36378 === (23))){
var state_36377__$1 = state_36377;
var statearr_36428_37465 = state_36377__$1;
(statearr_36428_37465[(2)] = null);

(statearr_36428_37465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (35))){
var inst_36359 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36429_37466 = state_36377__$1;
(statearr_36429_37466[(2)] = inst_36359);

(statearr_36429_37466[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (19))){
var inst_36278 = (state_36377[(7)]);
var inst_36282 = cljs.core.chunk_first(inst_36278);
var inst_36283 = cljs.core.chunk_rest(inst_36278);
var inst_36284 = cljs.core.count(inst_36282);
var inst_36256 = inst_36283;
var inst_36257 = inst_36282;
var inst_36258 = inst_36284;
var inst_36259 = (0);
var state_36377__$1 = (function (){var statearr_36430 = state_36377;
(statearr_36430[(13)] = inst_36256);

(statearr_36430[(14)] = inst_36258);

(statearr_36430[(15)] = inst_36257);

(statearr_36430[(17)] = inst_36259);

return statearr_36430;
})();
var statearr_36431_37467 = state_36377__$1;
(statearr_36431_37467[(2)] = null);

(statearr_36431_37467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (11))){
var inst_36256 = (state_36377[(13)]);
var inst_36278 = (state_36377[(7)]);
var inst_36278__$1 = cljs.core.seq(inst_36256);
var state_36377__$1 = (function (){var statearr_36432 = state_36377;
(statearr_36432[(7)] = inst_36278__$1);

return statearr_36432;
})();
if(inst_36278__$1){
var statearr_36433_37468 = state_36377__$1;
(statearr_36433_37468[(1)] = (16));

} else {
var statearr_36434_37469 = state_36377__$1;
(statearr_36434_37469[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (9))){
var inst_36308 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36435_37470 = state_36377__$1;
(statearr_36435_37470[(2)] = inst_36308);

(statearr_36435_37470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (5))){
var inst_36254 = cljs.core.deref(cs);
var inst_36255 = cljs.core.seq(inst_36254);
var inst_36256 = inst_36255;
var inst_36257 = null;
var inst_36258 = (0);
var inst_36259 = (0);
var state_36377__$1 = (function (){var statearr_36436 = state_36377;
(statearr_36436[(13)] = inst_36256);

(statearr_36436[(14)] = inst_36258);

(statearr_36436[(15)] = inst_36257);

(statearr_36436[(17)] = inst_36259);

return statearr_36436;
})();
var statearr_36437_37473 = state_36377__$1;
(statearr_36437_37473[(2)] = null);

(statearr_36437_37473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (14))){
var state_36377__$1 = state_36377;
var statearr_36438_37474 = state_36377__$1;
(statearr_36438_37474[(2)] = null);

(statearr_36438_37474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (45))){
var inst_36367 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36439_37475 = state_36377__$1;
(statearr_36439_37475[(2)] = inst_36367);

(statearr_36439_37475[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (26))){
var inst_36311 = (state_36377[(27)]);
var inst_36363 = (state_36377[(2)]);
var inst_36364 = cljs.core.seq(inst_36311);
var state_36377__$1 = (function (){var statearr_36440 = state_36377;
(statearr_36440[(29)] = inst_36363);

return statearr_36440;
})();
if(inst_36364){
var statearr_36441_37476 = state_36377__$1;
(statearr_36441_37476[(1)] = (42));

} else {
var statearr_36442_37477 = state_36377__$1;
(statearr_36442_37477[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (16))){
var inst_36278 = (state_36377[(7)]);
var inst_36280 = cljs.core.chunked_seq_QMARK_(inst_36278);
var state_36377__$1 = state_36377;
if(inst_36280){
var statearr_36443_37478 = state_36377__$1;
(statearr_36443_37478[(1)] = (19));

} else {
var statearr_36444_37479 = state_36377__$1;
(statearr_36444_37479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (38))){
var inst_36356 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36445_37480 = state_36377__$1;
(statearr_36445_37480[(2)] = inst_36356);

(statearr_36445_37480[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (30))){
var state_36377__$1 = state_36377;
var statearr_36446_37481 = state_36377__$1;
(statearr_36446_37481[(2)] = null);

(statearr_36446_37481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (10))){
var inst_36257 = (state_36377[(15)]);
var inst_36259 = (state_36377[(17)]);
var inst_36267 = cljs.core._nth(inst_36257,inst_36259);
var inst_36268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36267,(0),null);
var inst_36269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36267,(1),null);
var state_36377__$1 = (function (){var statearr_36447 = state_36377;
(statearr_36447[(24)] = inst_36268);

return statearr_36447;
})();
if(cljs.core.truth_(inst_36269)){
var statearr_36448_37482 = state_36377__$1;
(statearr_36448_37482[(1)] = (13));

} else {
var statearr_36449_37483 = state_36377__$1;
(statearr_36449_37483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (18))){
var inst_36304 = (state_36377[(2)]);
var state_36377__$1 = state_36377;
var statearr_36450_37484 = state_36377__$1;
(statearr_36450_37484[(2)] = inst_36304);

(statearr_36450_37484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (42))){
var state_36377__$1 = state_36377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36377__$1,(45),dchan);
} else {
if((state_val_36378 === (37))){
var inst_36247 = (state_36377[(10)]);
var inst_36337 = (state_36377[(23)]);
var inst_36346 = (state_36377[(22)]);
var inst_36346__$1 = cljs.core.first(inst_36337);
var inst_36347 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36346__$1,inst_36247,done);
var state_36377__$1 = (function (){var statearr_36451 = state_36377;
(statearr_36451[(22)] = inst_36346__$1);

return statearr_36451;
})();
if(cljs.core.truth_(inst_36347)){
var statearr_36452_37485 = state_36377__$1;
(statearr_36452_37485[(1)] = (39));

} else {
var statearr_36453_37486 = state_36377__$1;
(statearr_36453_37486[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36378 === (8))){
var inst_36258 = (state_36377[(14)]);
var inst_36259 = (state_36377[(17)]);
var inst_36261 = (inst_36259 < inst_36258);
var inst_36262 = inst_36261;
var state_36377__$1 = state_36377;
if(cljs.core.truth_(inst_36262)){
var statearr_36454_37487 = state_36377__$1;
(statearr_36454_37487[(1)] = (10));

} else {
var statearr_36455_37488 = state_36377__$1;
(statearr_36455_37488[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__35671__auto__ = null;
var cljs$core$async$mult_$_state_machine__35671__auto____0 = (function (){
var statearr_36456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36456[(0)] = cljs$core$async$mult_$_state_machine__35671__auto__);

(statearr_36456[(1)] = (1));

return statearr_36456;
});
var cljs$core$async$mult_$_state_machine__35671__auto____1 = (function (state_36377){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36377);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36457){var ex__35674__auto__ = e36457;
var statearr_36458_37489 = state_36377;
(statearr_36458_37489[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36377[(4)]))){
var statearr_36459_37490 = state_36377;
(statearr_36459_37490[(1)] = cljs.core.first((state_36377[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37491 = state_36377;
state_36377 = G__37491;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35671__auto__ = function(state_36377){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35671__auto____1.call(this,state_36377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35671__auto____0;
cljs$core$async$mult_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35671__auto____1;
return cljs$core$async$mult_$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36460 = f__35767__auto__();
(statearr_36460[(6)] = c__35766__auto___37432);

return statearr_36460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36462 = arguments.length;
switch (G__36462) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37493 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37493(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37494 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37494(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37495 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37495(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37496 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37496(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37497 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37497(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37498 = arguments.length;
var i__4819__auto___37499 = (0);
while(true){
if((i__4819__auto___37499 < len__4818__auto___37498)){
args__4824__auto__.push((arguments[i__4819__auto___37499]));

var G__37500 = (i__4819__auto___37499 + (1));
i__4819__auto___37499 = G__37500;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36467){
var map__36468 = p__36467;
var map__36468__$1 = cljs.core.__destructure_map(map__36468);
var opts = map__36468__$1;
var statearr_36469_37501 = state;
(statearr_36469_37501[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36470_37502 = state;
(statearr_36470_37502[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_36471_37503 = state;
(statearr_36471_37503[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36463){
var G__36464 = cljs.core.first(seq36463);
var seq36463__$1 = cljs.core.next(seq36463);
var G__36465 = cljs.core.first(seq36463__$1);
var seq36463__$2 = cljs.core.next(seq36463__$1);
var G__36466 = cljs.core.first(seq36463__$2);
var seq36463__$3 = cljs.core.next(seq36463__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36464,G__36465,G__36466,seq36463__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36472 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36473){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36473 = meta36473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36474,meta36473__$1){
var self__ = this;
var _36474__$1 = this;
return (new cljs.core.async.t_cljs$core$async36472(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36473__$1));
}));

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36474){
var self__ = this;
var _36474__$1 = this;
return self__.meta36473;
}));

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36472.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36473","meta36473",-1196783693,null)], null);
}));

(cljs.core.async.t_cljs$core$async36472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36472");

(cljs.core.async.t_cljs$core$async36472.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36472.
 */
cljs.core.async.__GT_t_cljs$core$async36472 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36472(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36473){
return (new cljs.core.async.t_cljs$core$async36472(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36473));
});

}

return (new cljs.core.async.t_cljs$core$async36472(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35766__auto___37508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36542){
var state_val_36543 = (state_36542[(1)]);
if((state_val_36543 === (7))){
var inst_36502 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36502)){
var statearr_36544_37509 = state_36542__$1;
(statearr_36544_37509[(1)] = (8));

} else {
var statearr_36545_37510 = state_36542__$1;
(statearr_36545_37510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (20))){
var inst_36495 = (state_36542[(7)]);
var state_36542__$1 = state_36542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36542__$1,(23),out,inst_36495);
} else {
if((state_val_36543 === (1))){
var inst_36478 = calc_state();
var inst_36479 = cljs.core.__destructure_map(inst_36478);
var inst_36480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36479,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36479,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36479,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36483 = inst_36478;
var state_36542__$1 = (function (){var statearr_36546 = state_36542;
(statearr_36546[(8)] = inst_36480);

(statearr_36546[(9)] = inst_36481);

(statearr_36546[(10)] = inst_36482);

(statearr_36546[(11)] = inst_36483);

return statearr_36546;
})();
var statearr_36547_37511 = state_36542__$1;
(statearr_36547_37511[(2)] = null);

(statearr_36547_37511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (24))){
var inst_36486 = (state_36542[(12)]);
var inst_36483 = inst_36486;
var state_36542__$1 = (function (){var statearr_36548 = state_36542;
(statearr_36548[(11)] = inst_36483);

return statearr_36548;
})();
var statearr_36549_37512 = state_36542__$1;
(statearr_36549_37512[(2)] = null);

(statearr_36549_37512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (4))){
var inst_36495 = (state_36542[(7)]);
var inst_36497 = (state_36542[(13)]);
var inst_36494 = (state_36542[(2)]);
var inst_36495__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36494,(0),null);
var inst_36496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36494,(1),null);
var inst_36497__$1 = (inst_36495__$1 == null);
var state_36542__$1 = (function (){var statearr_36550 = state_36542;
(statearr_36550[(14)] = inst_36496);

(statearr_36550[(7)] = inst_36495__$1);

(statearr_36550[(13)] = inst_36497__$1);

return statearr_36550;
})();
if(cljs.core.truth_(inst_36497__$1)){
var statearr_36551_37513 = state_36542__$1;
(statearr_36551_37513[(1)] = (5));

} else {
var statearr_36552_37514 = state_36542__$1;
(statearr_36552_37514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (15))){
var inst_36516 = (state_36542[(15)]);
var inst_36487 = (state_36542[(16)]);
var inst_36516__$1 = cljs.core.empty_QMARK_(inst_36487);
var state_36542__$1 = (function (){var statearr_36553 = state_36542;
(statearr_36553[(15)] = inst_36516__$1);

return statearr_36553;
})();
if(inst_36516__$1){
var statearr_36554_37515 = state_36542__$1;
(statearr_36554_37515[(1)] = (17));

} else {
var statearr_36555_37516 = state_36542__$1;
(statearr_36555_37516[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (21))){
var inst_36486 = (state_36542[(12)]);
var inst_36483 = inst_36486;
var state_36542__$1 = (function (){var statearr_36556 = state_36542;
(statearr_36556[(11)] = inst_36483);

return statearr_36556;
})();
var statearr_36557_37517 = state_36542__$1;
(statearr_36557_37517[(2)] = null);

(statearr_36557_37517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (13))){
var inst_36509 = (state_36542[(2)]);
var inst_36510 = calc_state();
var inst_36483 = inst_36510;
var state_36542__$1 = (function (){var statearr_36558 = state_36542;
(statearr_36558[(17)] = inst_36509);

(statearr_36558[(11)] = inst_36483);

return statearr_36558;
})();
var statearr_36559_37518 = state_36542__$1;
(statearr_36559_37518[(2)] = null);

(statearr_36559_37518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (22))){
var inst_36536 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36560_37519 = state_36542__$1;
(statearr_36560_37519[(2)] = inst_36536);

(statearr_36560_37519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (6))){
var inst_36496 = (state_36542[(14)]);
var inst_36500 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36496,change);
var state_36542__$1 = state_36542;
var statearr_36561_37520 = state_36542__$1;
(statearr_36561_37520[(2)] = inst_36500);

(statearr_36561_37520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (25))){
var state_36542__$1 = state_36542;
var statearr_36562_37521 = state_36542__$1;
(statearr_36562_37521[(2)] = null);

(statearr_36562_37521[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (17))){
var inst_36488 = (state_36542[(18)]);
var inst_36496 = (state_36542[(14)]);
var inst_36518 = (inst_36488.cljs$core$IFn$_invoke$arity$1 ? inst_36488.cljs$core$IFn$_invoke$arity$1(inst_36496) : inst_36488.call(null,inst_36496));
var inst_36519 = cljs.core.not(inst_36518);
var state_36542__$1 = state_36542;
var statearr_36563_37522 = state_36542__$1;
(statearr_36563_37522[(2)] = inst_36519);

(statearr_36563_37522[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (3))){
var inst_36540 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36542__$1,inst_36540);
} else {
if((state_val_36543 === (12))){
var state_36542__$1 = state_36542;
var statearr_36564_37523 = state_36542__$1;
(statearr_36564_37523[(2)] = null);

(statearr_36564_37523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (2))){
var inst_36486 = (state_36542[(12)]);
var inst_36483 = (state_36542[(11)]);
var inst_36486__$1 = cljs.core.__destructure_map(inst_36483);
var inst_36487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36486__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36486__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36486__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36542__$1 = (function (){var statearr_36565 = state_36542;
(statearr_36565[(12)] = inst_36486__$1);

(statearr_36565[(18)] = inst_36488);

(statearr_36565[(16)] = inst_36487);

return statearr_36565;
})();
return cljs.core.async.ioc_alts_BANG_(state_36542__$1,(4),inst_36489);
} else {
if((state_val_36543 === (23))){
var inst_36527 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36527)){
var statearr_36566_37524 = state_36542__$1;
(statearr_36566_37524[(1)] = (24));

} else {
var statearr_36567_37527 = state_36542__$1;
(statearr_36567_37527[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (19))){
var inst_36522 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36568_37528 = state_36542__$1;
(statearr_36568_37528[(2)] = inst_36522);

(statearr_36568_37528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (11))){
var inst_36496 = (state_36542[(14)]);
var inst_36506 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36496);
var state_36542__$1 = state_36542;
var statearr_36569_37529 = state_36542__$1;
(statearr_36569_37529[(2)] = inst_36506);

(statearr_36569_37529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (9))){
var inst_36513 = (state_36542[(19)]);
var inst_36496 = (state_36542[(14)]);
var inst_36487 = (state_36542[(16)]);
var inst_36513__$1 = (inst_36487.cljs$core$IFn$_invoke$arity$1 ? inst_36487.cljs$core$IFn$_invoke$arity$1(inst_36496) : inst_36487.call(null,inst_36496));
var state_36542__$1 = (function (){var statearr_36570 = state_36542;
(statearr_36570[(19)] = inst_36513__$1);

return statearr_36570;
})();
if(cljs.core.truth_(inst_36513__$1)){
var statearr_36571_37530 = state_36542__$1;
(statearr_36571_37530[(1)] = (14));

} else {
var statearr_36572_37531 = state_36542__$1;
(statearr_36572_37531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (5))){
var inst_36497 = (state_36542[(13)]);
var state_36542__$1 = state_36542;
var statearr_36573_37532 = state_36542__$1;
(statearr_36573_37532[(2)] = inst_36497);

(statearr_36573_37532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (14))){
var inst_36513 = (state_36542[(19)]);
var state_36542__$1 = state_36542;
var statearr_36574_37533 = state_36542__$1;
(statearr_36574_37533[(2)] = inst_36513);

(statearr_36574_37533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (26))){
var inst_36532 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36575_37534 = state_36542__$1;
(statearr_36575_37534[(2)] = inst_36532);

(statearr_36575_37534[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (16))){
var inst_36524 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36524)){
var statearr_36576_37535 = state_36542__$1;
(statearr_36576_37535[(1)] = (20));

} else {
var statearr_36577_37536 = state_36542__$1;
(statearr_36577_37536[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (10))){
var inst_36538 = (state_36542[(2)]);
var state_36542__$1 = state_36542;
var statearr_36578_37537 = state_36542__$1;
(statearr_36578_37537[(2)] = inst_36538);

(statearr_36578_37537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (18))){
var inst_36516 = (state_36542[(15)]);
var state_36542__$1 = state_36542;
var statearr_36579_37538 = state_36542__$1;
(statearr_36579_37538[(2)] = inst_36516);

(statearr_36579_37538[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36543 === (8))){
var inst_36495 = (state_36542[(7)]);
var inst_36504 = (inst_36495 == null);
var state_36542__$1 = state_36542;
if(cljs.core.truth_(inst_36504)){
var statearr_36580_37539 = state_36542__$1;
(statearr_36580_37539[(1)] = (11));

} else {
var statearr_36581_37540 = state_36542__$1;
(statearr_36581_37540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__35671__auto__ = null;
var cljs$core$async$mix_$_state_machine__35671__auto____0 = (function (){
var statearr_36582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36582[(0)] = cljs$core$async$mix_$_state_machine__35671__auto__);

(statearr_36582[(1)] = (1));

return statearr_36582;
});
var cljs$core$async$mix_$_state_machine__35671__auto____1 = (function (state_36542){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36542);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36583){var ex__35674__auto__ = e36583;
var statearr_36584_37541 = state_36542;
(statearr_36584_37541[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36542[(4)]))){
var statearr_36585_37542 = state_36542;
(statearr_36585_37542[(1)] = cljs.core.first((state_36542[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37543 = state_36542;
state_36542 = G__37543;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35671__auto__ = function(state_36542){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35671__auto____1.call(this,state_36542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35671__auto____0;
cljs$core$async$mix_$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35671__auto____1;
return cljs$core$async$mix_$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36586 = f__35767__auto__();
(statearr_36586[(6)] = c__35766__auto___37508);

return statearr_36586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37544 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37544(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37548 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37548(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37549 = (function() {
var G__37550 = null;
var G__37550__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37550__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37550 = function(p,v){
switch(arguments.length){
case 1:
return G__37550__1.call(this,p);
case 2:
return G__37550__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37550.cljs$core$IFn$_invoke$arity$1 = G__37550__1;
G__37550.cljs$core$IFn$_invoke$arity$2 = G__37550__2;
return G__37550;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36588 = arguments.length;
switch (G__36588) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37549(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37549(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36591 = arguments.length;
switch (G__36591) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36589_SHARP_){
if(cljs.core.truth_((p1__36589_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36589_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36589_SHARP_.call(null,topic)))){
return p1__36589_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36589_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36592 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36593){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36593 = meta36593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36594,meta36593__$1){
var self__ = this;
var _36594__$1 = this;
return (new cljs.core.async.t_cljs$core$async36592(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36593__$1));
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36594){
var self__ = this;
var _36594__$1 = this;
return self__.meta36593;
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36593","meta36593",34582923,null)], null);
}));

(cljs.core.async.t_cljs$core$async36592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36592");

(cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36592.
 */
cljs.core.async.__GT_t_cljs$core$async36592 = (function cljs$core$async$__GT_t_cljs$core$async36592(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36593){
return (new cljs.core.async.t_cljs$core$async36592(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36593));
});

}

return (new cljs.core.async.t_cljs$core$async36592(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35766__auto___37553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36666){
var state_val_36667 = (state_36666[(1)]);
if((state_val_36667 === (7))){
var inst_36662 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
var statearr_36668_37554 = state_36666__$1;
(statearr_36668_37554[(2)] = inst_36662);

(statearr_36668_37554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (20))){
var state_36666__$1 = state_36666;
var statearr_36669_37555 = state_36666__$1;
(statearr_36669_37555[(2)] = null);

(statearr_36669_37555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (1))){
var state_36666__$1 = state_36666;
var statearr_36670_37556 = state_36666__$1;
(statearr_36670_37556[(2)] = null);

(statearr_36670_37556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (24))){
var inst_36645 = (state_36666[(7)]);
var inst_36654 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36645);
var state_36666__$1 = state_36666;
var statearr_36671_37557 = state_36666__$1;
(statearr_36671_37557[(2)] = inst_36654);

(statearr_36671_37557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (4))){
var inst_36597 = (state_36666[(8)]);
var inst_36597__$1 = (state_36666[(2)]);
var inst_36598 = (inst_36597__$1 == null);
var state_36666__$1 = (function (){var statearr_36672 = state_36666;
(statearr_36672[(8)] = inst_36597__$1);

return statearr_36672;
})();
if(cljs.core.truth_(inst_36598)){
var statearr_36673_37558 = state_36666__$1;
(statearr_36673_37558[(1)] = (5));

} else {
var statearr_36674_37559 = state_36666__$1;
(statearr_36674_37559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (15))){
var inst_36639 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
var statearr_36675_37560 = state_36666__$1;
(statearr_36675_37560[(2)] = inst_36639);

(statearr_36675_37560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (21))){
var inst_36659 = (state_36666[(2)]);
var state_36666__$1 = (function (){var statearr_36676 = state_36666;
(statearr_36676[(9)] = inst_36659);

return statearr_36676;
})();
var statearr_36677_37561 = state_36666__$1;
(statearr_36677_37561[(2)] = null);

(statearr_36677_37561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (13))){
var inst_36621 = (state_36666[(10)]);
var inst_36623 = cljs.core.chunked_seq_QMARK_(inst_36621);
var state_36666__$1 = state_36666;
if(inst_36623){
var statearr_36678_37562 = state_36666__$1;
(statearr_36678_37562[(1)] = (16));

} else {
var statearr_36679_37563 = state_36666__$1;
(statearr_36679_37563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (22))){
var inst_36651 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
if(cljs.core.truth_(inst_36651)){
var statearr_36680_37564 = state_36666__$1;
(statearr_36680_37564[(1)] = (23));

} else {
var statearr_36681_37565 = state_36666__$1;
(statearr_36681_37565[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (6))){
var inst_36645 = (state_36666[(7)]);
var inst_36647 = (state_36666[(11)]);
var inst_36597 = (state_36666[(8)]);
var inst_36645__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36597) : topic_fn.call(null,inst_36597));
var inst_36646 = cljs.core.deref(mults);
var inst_36647__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36646,inst_36645__$1);
var state_36666__$1 = (function (){var statearr_36682 = state_36666;
(statearr_36682[(7)] = inst_36645__$1);

(statearr_36682[(11)] = inst_36647__$1);

return statearr_36682;
})();
if(cljs.core.truth_(inst_36647__$1)){
var statearr_36683_37566 = state_36666__$1;
(statearr_36683_37566[(1)] = (19));

} else {
var statearr_36684_37567 = state_36666__$1;
(statearr_36684_37567[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (25))){
var inst_36656 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
var statearr_36685_37568 = state_36666__$1;
(statearr_36685_37568[(2)] = inst_36656);

(statearr_36685_37568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (17))){
var inst_36621 = (state_36666[(10)]);
var inst_36630 = cljs.core.first(inst_36621);
var inst_36631 = cljs.core.async.muxch_STAR_(inst_36630);
var inst_36632 = cljs.core.async.close_BANG_(inst_36631);
var inst_36633 = cljs.core.next(inst_36621);
var inst_36607 = inst_36633;
var inst_36608 = null;
var inst_36609 = (0);
var inst_36610 = (0);
var state_36666__$1 = (function (){var statearr_36686 = state_36666;
(statearr_36686[(12)] = inst_36610);

(statearr_36686[(13)] = inst_36609);

(statearr_36686[(14)] = inst_36607);

(statearr_36686[(15)] = inst_36632);

(statearr_36686[(16)] = inst_36608);

return statearr_36686;
})();
var statearr_36687_37569 = state_36666__$1;
(statearr_36687_37569[(2)] = null);

(statearr_36687_37569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (3))){
var inst_36664 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36666__$1,inst_36664);
} else {
if((state_val_36667 === (12))){
var inst_36641 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
var statearr_36688_37570 = state_36666__$1;
(statearr_36688_37570[(2)] = inst_36641);

(statearr_36688_37570[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (2))){
var state_36666__$1 = state_36666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36666__$1,(4),ch);
} else {
if((state_val_36667 === (23))){
var state_36666__$1 = state_36666;
var statearr_36689_37571 = state_36666__$1;
(statearr_36689_37571[(2)] = null);

(statearr_36689_37571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (19))){
var inst_36647 = (state_36666[(11)]);
var inst_36597 = (state_36666[(8)]);
var inst_36649 = cljs.core.async.muxch_STAR_(inst_36647);
var state_36666__$1 = state_36666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36666__$1,(22),inst_36649,inst_36597);
} else {
if((state_val_36667 === (11))){
var inst_36607 = (state_36666[(14)]);
var inst_36621 = (state_36666[(10)]);
var inst_36621__$1 = cljs.core.seq(inst_36607);
var state_36666__$1 = (function (){var statearr_36690 = state_36666;
(statearr_36690[(10)] = inst_36621__$1);

return statearr_36690;
})();
if(inst_36621__$1){
var statearr_36691_37572 = state_36666__$1;
(statearr_36691_37572[(1)] = (13));

} else {
var statearr_36692_37573 = state_36666__$1;
(statearr_36692_37573[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (9))){
var inst_36643 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
var statearr_36693_37574 = state_36666__$1;
(statearr_36693_37574[(2)] = inst_36643);

(statearr_36693_37574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (5))){
var inst_36604 = cljs.core.deref(mults);
var inst_36605 = cljs.core.vals(inst_36604);
var inst_36606 = cljs.core.seq(inst_36605);
var inst_36607 = inst_36606;
var inst_36608 = null;
var inst_36609 = (0);
var inst_36610 = (0);
var state_36666__$1 = (function (){var statearr_36694 = state_36666;
(statearr_36694[(12)] = inst_36610);

(statearr_36694[(13)] = inst_36609);

(statearr_36694[(14)] = inst_36607);

(statearr_36694[(16)] = inst_36608);

return statearr_36694;
})();
var statearr_36695_37575 = state_36666__$1;
(statearr_36695_37575[(2)] = null);

(statearr_36695_37575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (14))){
var state_36666__$1 = state_36666;
var statearr_36699_37576 = state_36666__$1;
(statearr_36699_37576[(2)] = null);

(statearr_36699_37576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (16))){
var inst_36621 = (state_36666[(10)]);
var inst_36625 = cljs.core.chunk_first(inst_36621);
var inst_36626 = cljs.core.chunk_rest(inst_36621);
var inst_36627 = cljs.core.count(inst_36625);
var inst_36607 = inst_36626;
var inst_36608 = inst_36625;
var inst_36609 = inst_36627;
var inst_36610 = (0);
var state_36666__$1 = (function (){var statearr_36700 = state_36666;
(statearr_36700[(12)] = inst_36610);

(statearr_36700[(13)] = inst_36609);

(statearr_36700[(14)] = inst_36607);

(statearr_36700[(16)] = inst_36608);

return statearr_36700;
})();
var statearr_36701_37577 = state_36666__$1;
(statearr_36701_37577[(2)] = null);

(statearr_36701_37577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (10))){
var inst_36610 = (state_36666[(12)]);
var inst_36609 = (state_36666[(13)]);
var inst_36607 = (state_36666[(14)]);
var inst_36608 = (state_36666[(16)]);
var inst_36615 = cljs.core._nth(inst_36608,inst_36610);
var inst_36616 = cljs.core.async.muxch_STAR_(inst_36615);
var inst_36617 = cljs.core.async.close_BANG_(inst_36616);
var inst_36618 = (inst_36610 + (1));
var tmp36696 = inst_36609;
var tmp36697 = inst_36607;
var tmp36698 = inst_36608;
var inst_36607__$1 = tmp36697;
var inst_36608__$1 = tmp36698;
var inst_36609__$1 = tmp36696;
var inst_36610__$1 = inst_36618;
var state_36666__$1 = (function (){var statearr_36702 = state_36666;
(statearr_36702[(12)] = inst_36610__$1);

(statearr_36702[(13)] = inst_36609__$1);

(statearr_36702[(17)] = inst_36617);

(statearr_36702[(14)] = inst_36607__$1);

(statearr_36702[(16)] = inst_36608__$1);

return statearr_36702;
})();
var statearr_36703_37578 = state_36666__$1;
(statearr_36703_37578[(2)] = null);

(statearr_36703_37578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (18))){
var inst_36636 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
var statearr_36704_37579 = state_36666__$1;
(statearr_36704_37579[(2)] = inst_36636);

(statearr_36704_37579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (8))){
var inst_36610 = (state_36666[(12)]);
var inst_36609 = (state_36666[(13)]);
var inst_36612 = (inst_36610 < inst_36609);
var inst_36613 = inst_36612;
var state_36666__$1 = state_36666;
if(cljs.core.truth_(inst_36613)){
var statearr_36705_37580 = state_36666__$1;
(statearr_36705_37580[(1)] = (10));

} else {
var statearr_36706_37581 = state_36666__$1;
(statearr_36706_37581[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_36707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36707[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_36707[(1)] = (1));

return statearr_36707;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_36666){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36666);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36708){var ex__35674__auto__ = e36708;
var statearr_36709_37582 = state_36666;
(statearr_36709_37582[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36666[(4)]))){
var statearr_36710_37583 = state_36666;
(statearr_36710_37583[(1)] = cljs.core.first((state_36666[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37584 = state_36666;
state_36666 = G__37584;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_36666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_36666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36711 = f__35767__auto__();
(statearr_36711[(6)] = c__35766__auto___37553);

return statearr_36711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36713 = arguments.length;
switch (G__36713) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36715 = arguments.length;
switch (G__36715) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36717 = arguments.length;
switch (G__36717) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__35766__auto___37592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36760){
var state_val_36761 = (state_36760[(1)]);
if((state_val_36761 === (7))){
var state_36760__$1 = state_36760;
var statearr_36762_37593 = state_36760__$1;
(statearr_36762_37593[(2)] = null);

(statearr_36762_37593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (1))){
var state_36760__$1 = state_36760;
var statearr_36763_37594 = state_36760__$1;
(statearr_36763_37594[(2)] = null);

(statearr_36763_37594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (4))){
var inst_36720 = (state_36760[(7)]);
var inst_36721 = (state_36760[(8)]);
var inst_36723 = (inst_36721 < inst_36720);
var state_36760__$1 = state_36760;
if(cljs.core.truth_(inst_36723)){
var statearr_36764_37595 = state_36760__$1;
(statearr_36764_37595[(1)] = (6));

} else {
var statearr_36765_37596 = state_36760__$1;
(statearr_36765_37596[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (15))){
var inst_36746 = (state_36760[(9)]);
var inst_36751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36746);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36760__$1,(17),out,inst_36751);
} else {
if((state_val_36761 === (13))){
var inst_36746 = (state_36760[(9)]);
var inst_36746__$1 = (state_36760[(2)]);
var inst_36747 = cljs.core.some(cljs.core.nil_QMARK_,inst_36746__$1);
var state_36760__$1 = (function (){var statearr_36766 = state_36760;
(statearr_36766[(9)] = inst_36746__$1);

return statearr_36766;
})();
if(cljs.core.truth_(inst_36747)){
var statearr_36767_37597 = state_36760__$1;
(statearr_36767_37597[(1)] = (14));

} else {
var statearr_36768_37598 = state_36760__$1;
(statearr_36768_37598[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (6))){
var state_36760__$1 = state_36760;
var statearr_36769_37599 = state_36760__$1;
(statearr_36769_37599[(2)] = null);

(statearr_36769_37599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (17))){
var inst_36753 = (state_36760[(2)]);
var state_36760__$1 = (function (){var statearr_36771 = state_36760;
(statearr_36771[(10)] = inst_36753);

return statearr_36771;
})();
var statearr_36772_37600 = state_36760__$1;
(statearr_36772_37600[(2)] = null);

(statearr_36772_37600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (3))){
var inst_36758 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36760__$1,inst_36758);
} else {
if((state_val_36761 === (12))){
var _ = (function (){var statearr_36773 = state_36760;
(statearr_36773[(4)] = cljs.core.rest((state_36760[(4)])));

return statearr_36773;
})();
var state_36760__$1 = state_36760;
var ex36770 = (state_36760__$1[(2)]);
var statearr_36774_37601 = state_36760__$1;
(statearr_36774_37601[(5)] = ex36770);


if((ex36770 instanceof Object)){
var statearr_36775_37602 = state_36760__$1;
(statearr_36775_37602[(1)] = (11));

(statearr_36775_37602[(5)] = null);

} else {
throw ex36770;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (2))){
var inst_36719 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36720 = cnt;
var inst_36721 = (0);
var state_36760__$1 = (function (){var statearr_36776 = state_36760;
(statearr_36776[(7)] = inst_36720);

(statearr_36776[(8)] = inst_36721);

(statearr_36776[(11)] = inst_36719);

return statearr_36776;
})();
var statearr_36777_37603 = state_36760__$1;
(statearr_36777_37603[(2)] = null);

(statearr_36777_37603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (11))){
var inst_36725 = (state_36760[(2)]);
var inst_36726 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36760__$1 = (function (){var statearr_36778 = state_36760;
(statearr_36778[(12)] = inst_36725);

return statearr_36778;
})();
var statearr_36779_37604 = state_36760__$1;
(statearr_36779_37604[(2)] = inst_36726);

(statearr_36779_37604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (9))){
var inst_36721 = (state_36760[(8)]);
var _ = (function (){var statearr_36780 = state_36760;
(statearr_36780[(4)] = cljs.core.cons((12),(state_36760[(4)])));

return statearr_36780;
})();
var inst_36732 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36721) : chs__$1.call(null,inst_36721));
var inst_36733 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36721) : done.call(null,inst_36721));
var inst_36734 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36732,inst_36733);
var ___$1 = (function (){var statearr_36781 = state_36760;
(statearr_36781[(4)] = cljs.core.rest((state_36760[(4)])));

return statearr_36781;
})();
var state_36760__$1 = state_36760;
var statearr_36782_37605 = state_36760__$1;
(statearr_36782_37605[(2)] = inst_36734);

(statearr_36782_37605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (5))){
var inst_36744 = (state_36760[(2)]);
var state_36760__$1 = (function (){var statearr_36783 = state_36760;
(statearr_36783[(13)] = inst_36744);

return statearr_36783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36760__$1,(13),dchan);
} else {
if((state_val_36761 === (14))){
var inst_36749 = cljs.core.async.close_BANG_(out);
var state_36760__$1 = state_36760;
var statearr_36784_37606 = state_36760__$1;
(statearr_36784_37606[(2)] = inst_36749);

(statearr_36784_37606[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (16))){
var inst_36756 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36785_37607 = state_36760__$1;
(statearr_36785_37607[(2)] = inst_36756);

(statearr_36785_37607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (10))){
var inst_36721 = (state_36760[(8)]);
var inst_36737 = (state_36760[(2)]);
var inst_36738 = (inst_36721 + (1));
var inst_36721__$1 = inst_36738;
var state_36760__$1 = (function (){var statearr_36786 = state_36760;
(statearr_36786[(14)] = inst_36737);

(statearr_36786[(8)] = inst_36721__$1);

return statearr_36786;
})();
var statearr_36787_37608 = state_36760__$1;
(statearr_36787_37608[(2)] = null);

(statearr_36787_37608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (8))){
var inst_36742 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36788_37610 = state_36760__$1;
(statearr_36788_37610[(2)] = inst_36742);

(statearr_36788_37610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_36789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36789[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_36789[(1)] = (1));

return statearr_36789;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_36760){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36760);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36790){var ex__35674__auto__ = e36790;
var statearr_36791_37612 = state_36760;
(statearr_36791_37612[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36760[(4)]))){
var statearr_36792_37613 = state_36760;
(statearr_36792_37613[(1)] = cljs.core.first((state_36760[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37614 = state_36760;
state_36760 = G__37614;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_36760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_36760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36793 = f__35767__auto__();
(statearr_36793[(6)] = c__35766__auto___37592);

return statearr_36793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36796 = arguments.length;
switch (G__36796) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35766__auto___37616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36828){
var state_val_36829 = (state_36828[(1)]);
if((state_val_36829 === (7))){
var inst_36807 = (state_36828[(7)]);
var inst_36808 = (state_36828[(8)]);
var inst_36807__$1 = (state_36828[(2)]);
var inst_36808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36807__$1,(0),null);
var inst_36809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36807__$1,(1),null);
var inst_36810 = (inst_36808__$1 == null);
var state_36828__$1 = (function (){var statearr_36830 = state_36828;
(statearr_36830[(7)] = inst_36807__$1);

(statearr_36830[(8)] = inst_36808__$1);

(statearr_36830[(9)] = inst_36809);

return statearr_36830;
})();
if(cljs.core.truth_(inst_36810)){
var statearr_36831_37617 = state_36828__$1;
(statearr_36831_37617[(1)] = (8));

} else {
var statearr_36832_37618 = state_36828__$1;
(statearr_36832_37618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (1))){
var inst_36797 = cljs.core.vec(chs);
var inst_36798 = inst_36797;
var state_36828__$1 = (function (){var statearr_36833 = state_36828;
(statearr_36833[(10)] = inst_36798);

return statearr_36833;
})();
var statearr_36834_37619 = state_36828__$1;
(statearr_36834_37619[(2)] = null);

(statearr_36834_37619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (4))){
var inst_36798 = (state_36828[(10)]);
var state_36828__$1 = state_36828;
return cljs.core.async.ioc_alts_BANG_(state_36828__$1,(7),inst_36798);
} else {
if((state_val_36829 === (6))){
var inst_36824 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36835_37620 = state_36828__$1;
(statearr_36835_37620[(2)] = inst_36824);

(statearr_36835_37620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (3))){
var inst_36826 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36828__$1,inst_36826);
} else {
if((state_val_36829 === (2))){
var inst_36798 = (state_36828[(10)]);
var inst_36800 = cljs.core.count(inst_36798);
var inst_36801 = (inst_36800 > (0));
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36801)){
var statearr_36837_37621 = state_36828__$1;
(statearr_36837_37621[(1)] = (4));

} else {
var statearr_36838_37622 = state_36828__$1;
(statearr_36838_37622[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (11))){
var inst_36798 = (state_36828[(10)]);
var inst_36817 = (state_36828[(2)]);
var tmp36836 = inst_36798;
var inst_36798__$1 = tmp36836;
var state_36828__$1 = (function (){var statearr_36839 = state_36828;
(statearr_36839[(10)] = inst_36798__$1);

(statearr_36839[(11)] = inst_36817);

return statearr_36839;
})();
var statearr_36840_37623 = state_36828__$1;
(statearr_36840_37623[(2)] = null);

(statearr_36840_37623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (9))){
var inst_36808 = (state_36828[(8)]);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36828__$1,(11),out,inst_36808);
} else {
if((state_val_36829 === (5))){
var inst_36822 = cljs.core.async.close_BANG_(out);
var state_36828__$1 = state_36828;
var statearr_36841_37624 = state_36828__$1;
(statearr_36841_37624[(2)] = inst_36822);

(statearr_36841_37624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (10))){
var inst_36820 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36842_37625 = state_36828__$1;
(statearr_36842_37625[(2)] = inst_36820);

(statearr_36842_37625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (8))){
var inst_36798 = (state_36828[(10)]);
var inst_36807 = (state_36828[(7)]);
var inst_36808 = (state_36828[(8)]);
var inst_36809 = (state_36828[(9)]);
var inst_36812 = (function (){var cs = inst_36798;
var vec__36803 = inst_36807;
var v = inst_36808;
var c = inst_36809;
return (function (p1__36794_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36794_SHARP_);
});
})();
var inst_36813 = cljs.core.filterv(inst_36812,inst_36798);
var inst_36798__$1 = inst_36813;
var state_36828__$1 = (function (){var statearr_36843 = state_36828;
(statearr_36843[(10)] = inst_36798__$1);

return statearr_36843;
})();
var statearr_36844_37626 = state_36828__$1;
(statearr_36844_37626[(2)] = null);

(statearr_36844_37626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_36845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36845[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_36845[(1)] = (1));

return statearr_36845;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_36828){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36828);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36846){var ex__35674__auto__ = e36846;
var statearr_36847_37627 = state_36828;
(statearr_36847_37627[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36828[(4)]))){
var statearr_36848_37628 = state_36828;
(statearr_36848_37628[(1)] = cljs.core.first((state_36828[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37629 = state_36828;
state_36828 = G__37629;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_36828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_36828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36849 = f__35767__auto__();
(statearr_36849[(6)] = c__35766__auto___37616);

return statearr_36849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36851 = arguments.length;
switch (G__36851) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35766__auto___37631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36875){
var state_val_36876 = (state_36875[(1)]);
if((state_val_36876 === (7))){
var inst_36857 = (state_36875[(7)]);
var inst_36857__$1 = (state_36875[(2)]);
var inst_36858 = (inst_36857__$1 == null);
var inst_36859 = cljs.core.not(inst_36858);
var state_36875__$1 = (function (){var statearr_36877 = state_36875;
(statearr_36877[(7)] = inst_36857__$1);

return statearr_36877;
})();
if(inst_36859){
var statearr_36878_37632 = state_36875__$1;
(statearr_36878_37632[(1)] = (8));

} else {
var statearr_36879_37633 = state_36875__$1;
(statearr_36879_37633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (1))){
var inst_36852 = (0);
var state_36875__$1 = (function (){var statearr_36880 = state_36875;
(statearr_36880[(8)] = inst_36852);

return statearr_36880;
})();
var statearr_36881_37634 = state_36875__$1;
(statearr_36881_37634[(2)] = null);

(statearr_36881_37634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (4))){
var state_36875__$1 = state_36875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36875__$1,(7),ch);
} else {
if((state_val_36876 === (6))){
var inst_36870 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
var statearr_36882_37635 = state_36875__$1;
(statearr_36882_37635[(2)] = inst_36870);

(statearr_36882_37635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (3))){
var inst_36872 = (state_36875[(2)]);
var inst_36873 = cljs.core.async.close_BANG_(out);
var state_36875__$1 = (function (){var statearr_36883 = state_36875;
(statearr_36883[(9)] = inst_36872);

return statearr_36883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36875__$1,inst_36873);
} else {
if((state_val_36876 === (2))){
var inst_36852 = (state_36875[(8)]);
var inst_36854 = (inst_36852 < n);
var state_36875__$1 = state_36875;
if(cljs.core.truth_(inst_36854)){
var statearr_36884_37636 = state_36875__$1;
(statearr_36884_37636[(1)] = (4));

} else {
var statearr_36885_37637 = state_36875__$1;
(statearr_36885_37637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (11))){
var inst_36852 = (state_36875[(8)]);
var inst_36862 = (state_36875[(2)]);
var inst_36863 = (inst_36852 + (1));
var inst_36852__$1 = inst_36863;
var state_36875__$1 = (function (){var statearr_36886 = state_36875;
(statearr_36886[(8)] = inst_36852__$1);

(statearr_36886[(10)] = inst_36862);

return statearr_36886;
})();
var statearr_36887_37638 = state_36875__$1;
(statearr_36887_37638[(2)] = null);

(statearr_36887_37638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (9))){
var state_36875__$1 = state_36875;
var statearr_36888_37639 = state_36875__$1;
(statearr_36888_37639[(2)] = null);

(statearr_36888_37639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (5))){
var state_36875__$1 = state_36875;
var statearr_36889_37640 = state_36875__$1;
(statearr_36889_37640[(2)] = null);

(statearr_36889_37640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (10))){
var inst_36867 = (state_36875[(2)]);
var state_36875__$1 = state_36875;
var statearr_36890_37641 = state_36875__$1;
(statearr_36890_37641[(2)] = inst_36867);

(statearr_36890_37641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36876 === (8))){
var inst_36857 = (state_36875[(7)]);
var state_36875__$1 = state_36875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36875__$1,(11),out,inst_36857);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_36891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36891[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_36891[(1)] = (1));

return statearr_36891;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_36875){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36875);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36892){var ex__35674__auto__ = e36892;
var statearr_36893_37642 = state_36875;
(statearr_36893_37642[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36875[(4)]))){
var statearr_36894_37643 = state_36875;
(statearr_36894_37643[(1)] = cljs.core.first((state_36875[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37644 = state_36875;
state_36875 = G__37644;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_36875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_36875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36895 = f__35767__auto__();
(statearr_36895[(6)] = c__35766__auto___37631);

return statearr_36895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36897 = (function (f,ch,meta36898){
this.f = f;
this.ch = ch;
this.meta36898 = meta36898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36899,meta36898__$1){
var self__ = this;
var _36899__$1 = this;
return (new cljs.core.async.t_cljs$core$async36897(self__.f,self__.ch,meta36898__$1));
}));

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36899){
var self__ = this;
var _36899__$1 = this;
return self__.meta36898;
}));

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36900 = (function (f,ch,meta36898,_,fn1,meta36901){
this.f = f;
this.ch = ch;
this.meta36898 = meta36898;
this._ = _;
this.fn1 = fn1;
this.meta36901 = meta36901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36902,meta36901__$1){
var self__ = this;
var _36902__$1 = this;
return (new cljs.core.async.t_cljs$core$async36900(self__.f,self__.ch,self__.meta36898,self__._,self__.fn1,meta36901__$1));
}));

(cljs.core.async.t_cljs$core$async36900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36902){
var self__ = this;
var _36902__$1 = this;
return self__.meta36901;
}));

(cljs.core.async.t_cljs$core$async36900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36896_SHARP_){
var G__36903 = (((p1__36896_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36896_SHARP_) : self__.f.call(null,p1__36896_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36903) : f1.call(null,G__36903));
});
}));

(cljs.core.async.t_cljs$core$async36900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36898","meta36898",-258313624,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36897","cljs.core.async/t_cljs$core$async36897",400947649,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36901","meta36901",-242059838,null)], null);
}));

(cljs.core.async.t_cljs$core$async36900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36900");

(cljs.core.async.t_cljs$core$async36900.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36900.
 */
cljs.core.async.__GT_t_cljs$core$async36900 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36900(f__$1,ch__$1,meta36898__$1,___$2,fn1__$1,meta36901){
return (new cljs.core.async.t_cljs$core$async36900(f__$1,ch__$1,meta36898__$1,___$2,fn1__$1,meta36901));
});

}

return (new cljs.core.async.t_cljs$core$async36900(self__.f,self__.ch,self__.meta36898,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36904 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36904) : self__.f.call(null,G__36904));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36897.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36898","meta36898",-258313624,null)], null);
}));

(cljs.core.async.t_cljs$core$async36897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36897");

(cljs.core.async.t_cljs$core$async36897.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36897.
 */
cljs.core.async.__GT_t_cljs$core$async36897 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36897(f__$1,ch__$1,meta36898){
return (new cljs.core.async.t_cljs$core$async36897(f__$1,ch__$1,meta36898));
});

}

return (new cljs.core.async.t_cljs$core$async36897(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36905 = (function (f,ch,meta36906){
this.f = f;
this.ch = ch;
this.meta36906 = meta36906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36907,meta36906__$1){
var self__ = this;
var _36907__$1 = this;
return (new cljs.core.async.t_cljs$core$async36905(self__.f,self__.ch,meta36906__$1));
}));

(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36907){
var self__ = this;
var _36907__$1 = this;
return self__.meta36906;
}));

(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36906","meta36906",-1642517591,null)], null);
}));

(cljs.core.async.t_cljs$core$async36905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36905");

(cljs.core.async.t_cljs$core$async36905.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36905.
 */
cljs.core.async.__GT_t_cljs$core$async36905 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36905(f__$1,ch__$1,meta36906){
return (new cljs.core.async.t_cljs$core$async36905(f__$1,ch__$1,meta36906));
});

}

return (new cljs.core.async.t_cljs$core$async36905(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36908 = (function (p,ch,meta36909){
this.p = p;
this.ch = ch;
this.meta36909 = meta36909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36910,meta36909__$1){
var self__ = this;
var _36910__$1 = this;
return (new cljs.core.async.t_cljs$core$async36908(self__.p,self__.ch,meta36909__$1));
}));

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36910){
var self__ = this;
var _36910__$1 = this;
return self__.meta36909;
}));

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36909","meta36909",945818075,null)], null);
}));

(cljs.core.async.t_cljs$core$async36908.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36908");

(cljs.core.async.t_cljs$core$async36908.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36908");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36908.
 */
cljs.core.async.__GT_t_cljs$core$async36908 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36908(p__$1,ch__$1,meta36909){
return (new cljs.core.async.t_cljs$core$async36908(p__$1,ch__$1,meta36909));
});

}

return (new cljs.core.async.t_cljs$core$async36908(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36912 = arguments.length;
switch (G__36912) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35766__auto___37659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_36933){
var state_val_36934 = (state_36933[(1)]);
if((state_val_36934 === (7))){
var inst_36929 = (state_36933[(2)]);
var state_36933__$1 = state_36933;
var statearr_36935_37660 = state_36933__$1;
(statearr_36935_37660[(2)] = inst_36929);

(statearr_36935_37660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (1))){
var state_36933__$1 = state_36933;
var statearr_36936_37661 = state_36933__$1;
(statearr_36936_37661[(2)] = null);

(statearr_36936_37661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (4))){
var inst_36915 = (state_36933[(7)]);
var inst_36915__$1 = (state_36933[(2)]);
var inst_36916 = (inst_36915__$1 == null);
var state_36933__$1 = (function (){var statearr_36937 = state_36933;
(statearr_36937[(7)] = inst_36915__$1);

return statearr_36937;
})();
if(cljs.core.truth_(inst_36916)){
var statearr_36938_37662 = state_36933__$1;
(statearr_36938_37662[(1)] = (5));

} else {
var statearr_36939_37663 = state_36933__$1;
(statearr_36939_37663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (6))){
var inst_36915 = (state_36933[(7)]);
var inst_36920 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36915) : p.call(null,inst_36915));
var state_36933__$1 = state_36933;
if(cljs.core.truth_(inst_36920)){
var statearr_36940_37664 = state_36933__$1;
(statearr_36940_37664[(1)] = (8));

} else {
var statearr_36941_37665 = state_36933__$1;
(statearr_36941_37665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (3))){
var inst_36931 = (state_36933[(2)]);
var state_36933__$1 = state_36933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36933__$1,inst_36931);
} else {
if((state_val_36934 === (2))){
var state_36933__$1 = state_36933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36933__$1,(4),ch);
} else {
if((state_val_36934 === (11))){
var inst_36923 = (state_36933[(2)]);
var state_36933__$1 = state_36933;
var statearr_36942_37666 = state_36933__$1;
(statearr_36942_37666[(2)] = inst_36923);

(statearr_36942_37666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (9))){
var state_36933__$1 = state_36933;
var statearr_36943_37667 = state_36933__$1;
(statearr_36943_37667[(2)] = null);

(statearr_36943_37667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (5))){
var inst_36918 = cljs.core.async.close_BANG_(out);
var state_36933__$1 = state_36933;
var statearr_36944_37668 = state_36933__$1;
(statearr_36944_37668[(2)] = inst_36918);

(statearr_36944_37668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (10))){
var inst_36926 = (state_36933[(2)]);
var state_36933__$1 = (function (){var statearr_36945 = state_36933;
(statearr_36945[(8)] = inst_36926);

return statearr_36945;
})();
var statearr_36946_37672 = state_36933__$1;
(statearr_36946_37672[(2)] = null);

(statearr_36946_37672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36934 === (8))){
var inst_36915 = (state_36933[(7)]);
var state_36933__$1 = state_36933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36933__$1,(11),out,inst_36915);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_36947 = [null,null,null,null,null,null,null,null,null];
(statearr_36947[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_36947[(1)] = (1));

return statearr_36947;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_36933){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_36933);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e36948){var ex__35674__auto__ = e36948;
var statearr_36949_37673 = state_36933;
(statearr_36949_37673[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_36933[(4)]))){
var statearr_36950_37674 = state_36933;
(statearr_36950_37674[(1)] = cljs.core.first((state_36933[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37675 = state_36933;
state_36933 = G__37675;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_36933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_36933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_36951 = f__35767__auto__();
(statearr_36951[(6)] = c__35766__auto___37659);

return statearr_36951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36953 = arguments.length;
switch (G__36953) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35766__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_37015){
var state_val_37016 = (state_37015[(1)]);
if((state_val_37016 === (7))){
var inst_37011 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37017_37677 = state_37015__$1;
(statearr_37017_37677[(2)] = inst_37011);

(statearr_37017_37677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (20))){
var inst_36981 = (state_37015[(7)]);
var inst_36992 = (state_37015[(2)]);
var inst_36993 = cljs.core.next(inst_36981);
var inst_36967 = inst_36993;
var inst_36968 = null;
var inst_36969 = (0);
var inst_36970 = (0);
var state_37015__$1 = (function (){var statearr_37018 = state_37015;
(statearr_37018[(8)] = inst_36992);

(statearr_37018[(9)] = inst_36969);

(statearr_37018[(10)] = inst_36967);

(statearr_37018[(11)] = inst_36968);

(statearr_37018[(12)] = inst_36970);

return statearr_37018;
})();
var statearr_37019_37678 = state_37015__$1;
(statearr_37019_37678[(2)] = null);

(statearr_37019_37678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (1))){
var state_37015__$1 = state_37015;
var statearr_37020_37679 = state_37015__$1;
(statearr_37020_37679[(2)] = null);

(statearr_37020_37679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (4))){
var inst_36956 = (state_37015[(13)]);
var inst_36956__$1 = (state_37015[(2)]);
var inst_36957 = (inst_36956__$1 == null);
var state_37015__$1 = (function (){var statearr_37021 = state_37015;
(statearr_37021[(13)] = inst_36956__$1);

return statearr_37021;
})();
if(cljs.core.truth_(inst_36957)){
var statearr_37022_37680 = state_37015__$1;
(statearr_37022_37680[(1)] = (5));

} else {
var statearr_37023_37681 = state_37015__$1;
(statearr_37023_37681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (15))){
var state_37015__$1 = state_37015;
var statearr_37027_37682 = state_37015__$1;
(statearr_37027_37682[(2)] = null);

(statearr_37027_37682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (21))){
var state_37015__$1 = state_37015;
var statearr_37028_37683 = state_37015__$1;
(statearr_37028_37683[(2)] = null);

(statearr_37028_37683[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (13))){
var inst_36969 = (state_37015[(9)]);
var inst_36967 = (state_37015[(10)]);
var inst_36968 = (state_37015[(11)]);
var inst_36970 = (state_37015[(12)]);
var inst_36977 = (state_37015[(2)]);
var inst_36978 = (inst_36970 + (1));
var tmp37024 = inst_36969;
var tmp37025 = inst_36967;
var tmp37026 = inst_36968;
var inst_36967__$1 = tmp37025;
var inst_36968__$1 = tmp37026;
var inst_36969__$1 = tmp37024;
var inst_36970__$1 = inst_36978;
var state_37015__$1 = (function (){var statearr_37029 = state_37015;
(statearr_37029[(9)] = inst_36969__$1);

(statearr_37029[(14)] = inst_36977);

(statearr_37029[(10)] = inst_36967__$1);

(statearr_37029[(11)] = inst_36968__$1);

(statearr_37029[(12)] = inst_36970__$1);

return statearr_37029;
})();
var statearr_37030_37684 = state_37015__$1;
(statearr_37030_37684[(2)] = null);

(statearr_37030_37684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (22))){
var state_37015__$1 = state_37015;
var statearr_37031_37685 = state_37015__$1;
(statearr_37031_37685[(2)] = null);

(statearr_37031_37685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (6))){
var inst_36956 = (state_37015[(13)]);
var inst_36965 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36956) : f.call(null,inst_36956));
var inst_36966 = cljs.core.seq(inst_36965);
var inst_36967 = inst_36966;
var inst_36968 = null;
var inst_36969 = (0);
var inst_36970 = (0);
var state_37015__$1 = (function (){var statearr_37032 = state_37015;
(statearr_37032[(9)] = inst_36969);

(statearr_37032[(10)] = inst_36967);

(statearr_37032[(11)] = inst_36968);

(statearr_37032[(12)] = inst_36970);

return statearr_37032;
})();
var statearr_37033_37686 = state_37015__$1;
(statearr_37033_37686[(2)] = null);

(statearr_37033_37686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (17))){
var inst_36981 = (state_37015[(7)]);
var inst_36985 = cljs.core.chunk_first(inst_36981);
var inst_36986 = cljs.core.chunk_rest(inst_36981);
var inst_36987 = cljs.core.count(inst_36985);
var inst_36967 = inst_36986;
var inst_36968 = inst_36985;
var inst_36969 = inst_36987;
var inst_36970 = (0);
var state_37015__$1 = (function (){var statearr_37034 = state_37015;
(statearr_37034[(9)] = inst_36969);

(statearr_37034[(10)] = inst_36967);

(statearr_37034[(11)] = inst_36968);

(statearr_37034[(12)] = inst_36970);

return statearr_37034;
})();
var statearr_37035_37687 = state_37015__$1;
(statearr_37035_37687[(2)] = null);

(statearr_37035_37687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (3))){
var inst_37013 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37015__$1,inst_37013);
} else {
if((state_val_37016 === (12))){
var inst_37001 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37036_37688 = state_37015__$1;
(statearr_37036_37688[(2)] = inst_37001);

(statearr_37036_37688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (2))){
var state_37015__$1 = state_37015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37015__$1,(4),in$);
} else {
if((state_val_37016 === (23))){
var inst_37009 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37037_37689 = state_37015__$1;
(statearr_37037_37689[(2)] = inst_37009);

(statearr_37037_37689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (19))){
var inst_36996 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37038_37690 = state_37015__$1;
(statearr_37038_37690[(2)] = inst_36996);

(statearr_37038_37690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (11))){
var inst_36967 = (state_37015[(10)]);
var inst_36981 = (state_37015[(7)]);
var inst_36981__$1 = cljs.core.seq(inst_36967);
var state_37015__$1 = (function (){var statearr_37039 = state_37015;
(statearr_37039[(7)] = inst_36981__$1);

return statearr_37039;
})();
if(inst_36981__$1){
var statearr_37040_37691 = state_37015__$1;
(statearr_37040_37691[(1)] = (14));

} else {
var statearr_37041_37692 = state_37015__$1;
(statearr_37041_37692[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (9))){
var inst_37003 = (state_37015[(2)]);
var inst_37004 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37015__$1 = (function (){var statearr_37042 = state_37015;
(statearr_37042[(15)] = inst_37003);

return statearr_37042;
})();
if(cljs.core.truth_(inst_37004)){
var statearr_37043_37693 = state_37015__$1;
(statearr_37043_37693[(1)] = (21));

} else {
var statearr_37044_37694 = state_37015__$1;
(statearr_37044_37694[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (5))){
var inst_36959 = cljs.core.async.close_BANG_(out);
var state_37015__$1 = state_37015;
var statearr_37045_37695 = state_37015__$1;
(statearr_37045_37695[(2)] = inst_36959);

(statearr_37045_37695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (14))){
var inst_36981 = (state_37015[(7)]);
var inst_36983 = cljs.core.chunked_seq_QMARK_(inst_36981);
var state_37015__$1 = state_37015;
if(inst_36983){
var statearr_37046_37696 = state_37015__$1;
(statearr_37046_37696[(1)] = (17));

} else {
var statearr_37047_37697 = state_37015__$1;
(statearr_37047_37697[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (16))){
var inst_36999 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37048_37698 = state_37015__$1;
(statearr_37048_37698[(2)] = inst_36999);

(statearr_37048_37698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (10))){
var inst_36968 = (state_37015[(11)]);
var inst_36970 = (state_37015[(12)]);
var inst_36975 = cljs.core._nth(inst_36968,inst_36970);
var state_37015__$1 = state_37015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37015__$1,(13),out,inst_36975);
} else {
if((state_val_37016 === (18))){
var inst_36981 = (state_37015[(7)]);
var inst_36990 = cljs.core.first(inst_36981);
var state_37015__$1 = state_37015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37015__$1,(20),out,inst_36990);
} else {
if((state_val_37016 === (8))){
var inst_36969 = (state_37015[(9)]);
var inst_36970 = (state_37015[(12)]);
var inst_36972 = (inst_36970 < inst_36969);
var inst_36973 = inst_36972;
var state_37015__$1 = state_37015;
if(cljs.core.truth_(inst_36973)){
var statearr_37049_37699 = state_37015__$1;
(statearr_37049_37699[(1)] = (10));

} else {
var statearr_37050_37700 = state_37015__$1;
(statearr_37050_37700[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35671__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35671__auto____0 = (function (){
var statearr_37051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37051[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35671__auto__);

(statearr_37051[(1)] = (1));

return statearr_37051;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35671__auto____1 = (function (state_37015){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_37015);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e37052){var ex__35674__auto__ = e37052;
var statearr_37053_37701 = state_37015;
(statearr_37053_37701[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_37015[(4)]))){
var statearr_37054_37702 = state_37015;
(statearr_37054_37702[(1)] = cljs.core.first((state_37015[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37703 = state_37015;
state_37015 = G__37703;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35671__auto__ = function(state_37015){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35671__auto____1.call(this,state_37015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35671__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35671__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_37055 = f__35767__auto__();
(statearr_37055[(6)] = c__35766__auto__);

return statearr_37055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));

return c__35766__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37057 = arguments.length;
switch (G__37057) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37059 = arguments.length;
switch (G__37059) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37061 = arguments.length;
switch (G__37061) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35766__auto___37707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_37085){
var state_val_37086 = (state_37085[(1)]);
if((state_val_37086 === (7))){
var inst_37080 = (state_37085[(2)]);
var state_37085__$1 = state_37085;
var statearr_37087_37708 = state_37085__$1;
(statearr_37087_37708[(2)] = inst_37080);

(statearr_37087_37708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37086 === (1))){
var inst_37062 = null;
var state_37085__$1 = (function (){var statearr_37088 = state_37085;
(statearr_37088[(7)] = inst_37062);

return statearr_37088;
})();
var statearr_37089_37709 = state_37085__$1;
(statearr_37089_37709[(2)] = null);

(statearr_37089_37709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37086 === (4))){
var inst_37065 = (state_37085[(8)]);
var inst_37065__$1 = (state_37085[(2)]);
var inst_37066 = (inst_37065__$1 == null);
var inst_37067 = cljs.core.not(inst_37066);
var state_37085__$1 = (function (){var statearr_37090 = state_37085;
(statearr_37090[(8)] = inst_37065__$1);

return statearr_37090;
})();
if(inst_37067){
var statearr_37091_37710 = state_37085__$1;
(statearr_37091_37710[(1)] = (5));

} else {
var statearr_37092_37711 = state_37085__$1;
(statearr_37092_37711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37086 === (6))){
var state_37085__$1 = state_37085;
var statearr_37093_37712 = state_37085__$1;
(statearr_37093_37712[(2)] = null);

(statearr_37093_37712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37086 === (3))){
var inst_37082 = (state_37085[(2)]);
var inst_37083 = cljs.core.async.close_BANG_(out);
var state_37085__$1 = (function (){var statearr_37094 = state_37085;
(statearr_37094[(9)] = inst_37082);

return statearr_37094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37085__$1,inst_37083);
} else {
if((state_val_37086 === (2))){
var state_37085__$1 = state_37085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37085__$1,(4),ch);
} else {
if((state_val_37086 === (11))){
var inst_37065 = (state_37085[(8)]);
var inst_37074 = (state_37085[(2)]);
var inst_37062 = inst_37065;
var state_37085__$1 = (function (){var statearr_37095 = state_37085;
(statearr_37095[(7)] = inst_37062);

(statearr_37095[(10)] = inst_37074);

return statearr_37095;
})();
var statearr_37096_37713 = state_37085__$1;
(statearr_37096_37713[(2)] = null);

(statearr_37096_37713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37086 === (9))){
var inst_37065 = (state_37085[(8)]);
var state_37085__$1 = state_37085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37085__$1,(11),out,inst_37065);
} else {
if((state_val_37086 === (5))){
var inst_37062 = (state_37085[(7)]);
var inst_37065 = (state_37085[(8)]);
var inst_37069 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37065,inst_37062);
var state_37085__$1 = state_37085;
if(inst_37069){
var statearr_37098_37714 = state_37085__$1;
(statearr_37098_37714[(1)] = (8));

} else {
var statearr_37099_37715 = state_37085__$1;
(statearr_37099_37715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37086 === (10))){
var inst_37077 = (state_37085[(2)]);
var state_37085__$1 = state_37085;
var statearr_37100_37716 = state_37085__$1;
(statearr_37100_37716[(2)] = inst_37077);

(statearr_37100_37716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37086 === (8))){
var inst_37062 = (state_37085[(7)]);
var tmp37097 = inst_37062;
var inst_37062__$1 = tmp37097;
var state_37085__$1 = (function (){var statearr_37101 = state_37085;
(statearr_37101[(7)] = inst_37062__$1);

return statearr_37101;
})();
var statearr_37102_37717 = state_37085__$1;
(statearr_37102_37717[(2)] = null);

(statearr_37102_37717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_37103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37103[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_37103[(1)] = (1));

return statearr_37103;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_37085){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_37085);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e37104){var ex__35674__auto__ = e37104;
var statearr_37105_37718 = state_37085;
(statearr_37105_37718[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_37085[(4)]))){
var statearr_37106_37719 = state_37085;
(statearr_37106_37719[(1)] = cljs.core.first((state_37085[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37720 = state_37085;
state_37085 = G__37720;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_37085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_37085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_37107 = f__35767__auto__();
(statearr_37107[(6)] = c__35766__auto___37707);

return statearr_37107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37109 = arguments.length;
switch (G__37109) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35766__auto___37729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_37147){
var state_val_37148 = (state_37147[(1)]);
if((state_val_37148 === (7))){
var inst_37143 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37149_37730 = state_37147__$1;
(statearr_37149_37730[(2)] = inst_37143);

(statearr_37149_37730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (1))){
var inst_37110 = (new Array(n));
var inst_37111 = inst_37110;
var inst_37112 = (0);
var state_37147__$1 = (function (){var statearr_37150 = state_37147;
(statearr_37150[(7)] = inst_37112);

(statearr_37150[(8)] = inst_37111);

return statearr_37150;
})();
var statearr_37151_37731 = state_37147__$1;
(statearr_37151_37731[(2)] = null);

(statearr_37151_37731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (4))){
var inst_37115 = (state_37147[(9)]);
var inst_37115__$1 = (state_37147[(2)]);
var inst_37116 = (inst_37115__$1 == null);
var inst_37117 = cljs.core.not(inst_37116);
var state_37147__$1 = (function (){var statearr_37152 = state_37147;
(statearr_37152[(9)] = inst_37115__$1);

return statearr_37152;
})();
if(inst_37117){
var statearr_37153_37735 = state_37147__$1;
(statearr_37153_37735[(1)] = (5));

} else {
var statearr_37154_37736 = state_37147__$1;
(statearr_37154_37736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (15))){
var inst_37137 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37155_37737 = state_37147__$1;
(statearr_37155_37737[(2)] = inst_37137);

(statearr_37155_37737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (13))){
var state_37147__$1 = state_37147;
var statearr_37156_37738 = state_37147__$1;
(statearr_37156_37738[(2)] = null);

(statearr_37156_37738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (6))){
var inst_37112 = (state_37147[(7)]);
var inst_37133 = (inst_37112 > (0));
var state_37147__$1 = state_37147;
if(cljs.core.truth_(inst_37133)){
var statearr_37157_37739 = state_37147__$1;
(statearr_37157_37739[(1)] = (12));

} else {
var statearr_37158_37740 = state_37147__$1;
(statearr_37158_37740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (3))){
var inst_37145 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37147__$1,inst_37145);
} else {
if((state_val_37148 === (12))){
var inst_37111 = (state_37147[(8)]);
var inst_37135 = cljs.core.vec(inst_37111);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37147__$1,(15),out,inst_37135);
} else {
if((state_val_37148 === (2))){
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37147__$1,(4),ch);
} else {
if((state_val_37148 === (11))){
var inst_37127 = (state_37147[(2)]);
var inst_37128 = (new Array(n));
var inst_37111 = inst_37128;
var inst_37112 = (0);
var state_37147__$1 = (function (){var statearr_37159 = state_37147;
(statearr_37159[(7)] = inst_37112);

(statearr_37159[(8)] = inst_37111);

(statearr_37159[(10)] = inst_37127);

return statearr_37159;
})();
var statearr_37160_37741 = state_37147__$1;
(statearr_37160_37741[(2)] = null);

(statearr_37160_37741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (9))){
var inst_37111 = (state_37147[(8)]);
var inst_37125 = cljs.core.vec(inst_37111);
var state_37147__$1 = state_37147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37147__$1,(11),out,inst_37125);
} else {
if((state_val_37148 === (5))){
var inst_37112 = (state_37147[(7)]);
var inst_37120 = (state_37147[(11)]);
var inst_37115 = (state_37147[(9)]);
var inst_37111 = (state_37147[(8)]);
var inst_37119 = (inst_37111[inst_37112] = inst_37115);
var inst_37120__$1 = (inst_37112 + (1));
var inst_37121 = (inst_37120__$1 < n);
var state_37147__$1 = (function (){var statearr_37161 = state_37147;
(statearr_37161[(11)] = inst_37120__$1);

(statearr_37161[(12)] = inst_37119);

return statearr_37161;
})();
if(cljs.core.truth_(inst_37121)){
var statearr_37162_37742 = state_37147__$1;
(statearr_37162_37742[(1)] = (8));

} else {
var statearr_37163_37743 = state_37147__$1;
(statearr_37163_37743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (14))){
var inst_37140 = (state_37147[(2)]);
var inst_37141 = cljs.core.async.close_BANG_(out);
var state_37147__$1 = (function (){var statearr_37165 = state_37147;
(statearr_37165[(13)] = inst_37140);

return statearr_37165;
})();
var statearr_37166_37744 = state_37147__$1;
(statearr_37166_37744[(2)] = inst_37141);

(statearr_37166_37744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (10))){
var inst_37131 = (state_37147[(2)]);
var state_37147__$1 = state_37147;
var statearr_37167_37745 = state_37147__$1;
(statearr_37167_37745[(2)] = inst_37131);

(statearr_37167_37745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37148 === (8))){
var inst_37120 = (state_37147[(11)]);
var inst_37111 = (state_37147[(8)]);
var tmp37164 = inst_37111;
var inst_37111__$1 = tmp37164;
var inst_37112 = inst_37120;
var state_37147__$1 = (function (){var statearr_37168 = state_37147;
(statearr_37168[(7)] = inst_37112);

(statearr_37168[(8)] = inst_37111__$1);

return statearr_37168;
})();
var statearr_37169_37746 = state_37147__$1;
(statearr_37169_37746[(2)] = null);

(statearr_37169_37746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_37170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37170[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_37170[(1)] = (1));

return statearr_37170;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_37147){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_37147);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e37171){var ex__35674__auto__ = e37171;
var statearr_37172_37747 = state_37147;
(statearr_37172_37747[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_37147[(4)]))){
var statearr_37173_37748 = state_37147;
(statearr_37173_37748[(1)] = cljs.core.first((state_37147[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37749 = state_37147;
state_37147 = G__37749;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_37147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_37147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_37174 = f__35767__auto__();
(statearr_37174[(6)] = c__35766__auto___37729);

return statearr_37174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37176 = arguments.length;
switch (G__37176) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35766__auto___37751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35767__auto__ = (function (){var switch__35670__auto__ = (function (state_37221){
var state_val_37222 = (state_37221[(1)]);
if((state_val_37222 === (7))){
var inst_37217 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37223_37752 = state_37221__$1;
(statearr_37223_37752[(2)] = inst_37217);

(statearr_37223_37752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (1))){
var inst_37177 = [];
var inst_37178 = inst_37177;
var inst_37179 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37221__$1 = (function (){var statearr_37224 = state_37221;
(statearr_37224[(7)] = inst_37179);

(statearr_37224[(8)] = inst_37178);

return statearr_37224;
})();
var statearr_37225_37753 = state_37221__$1;
(statearr_37225_37753[(2)] = null);

(statearr_37225_37753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (4))){
var inst_37182 = (state_37221[(9)]);
var inst_37182__$1 = (state_37221[(2)]);
var inst_37183 = (inst_37182__$1 == null);
var inst_37184 = cljs.core.not(inst_37183);
var state_37221__$1 = (function (){var statearr_37226 = state_37221;
(statearr_37226[(9)] = inst_37182__$1);

return statearr_37226;
})();
if(inst_37184){
var statearr_37227_37754 = state_37221__$1;
(statearr_37227_37754[(1)] = (5));

} else {
var statearr_37228_37755 = state_37221__$1;
(statearr_37228_37755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (15))){
var inst_37178 = (state_37221[(8)]);
var inst_37209 = cljs.core.vec(inst_37178);
var state_37221__$1 = state_37221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37221__$1,(18),out,inst_37209);
} else {
if((state_val_37222 === (13))){
var inst_37204 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37229_37756 = state_37221__$1;
(statearr_37229_37756[(2)] = inst_37204);

(statearr_37229_37756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (6))){
var inst_37178 = (state_37221[(8)]);
var inst_37206 = inst_37178.length;
var inst_37207 = (inst_37206 > (0));
var state_37221__$1 = state_37221;
if(cljs.core.truth_(inst_37207)){
var statearr_37230_37760 = state_37221__$1;
(statearr_37230_37760[(1)] = (15));

} else {
var statearr_37231_37761 = state_37221__$1;
(statearr_37231_37761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (17))){
var inst_37214 = (state_37221[(2)]);
var inst_37215 = cljs.core.async.close_BANG_(out);
var state_37221__$1 = (function (){var statearr_37232 = state_37221;
(statearr_37232[(10)] = inst_37214);

return statearr_37232;
})();
var statearr_37233_37762 = state_37221__$1;
(statearr_37233_37762[(2)] = inst_37215);

(statearr_37233_37762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (3))){
var inst_37219 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37221__$1,inst_37219);
} else {
if((state_val_37222 === (12))){
var inst_37178 = (state_37221[(8)]);
var inst_37197 = cljs.core.vec(inst_37178);
var state_37221__$1 = state_37221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37221__$1,(14),out,inst_37197);
} else {
if((state_val_37222 === (2))){
var state_37221__$1 = state_37221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37221__$1,(4),ch);
} else {
if((state_val_37222 === (11))){
var inst_37178 = (state_37221[(8)]);
var inst_37186 = (state_37221[(11)]);
var inst_37182 = (state_37221[(9)]);
var inst_37194 = inst_37178.push(inst_37182);
var tmp37234 = inst_37178;
var inst_37178__$1 = tmp37234;
var inst_37179 = inst_37186;
var state_37221__$1 = (function (){var statearr_37235 = state_37221;
(statearr_37235[(7)] = inst_37179);

(statearr_37235[(8)] = inst_37178__$1);

(statearr_37235[(12)] = inst_37194);

return statearr_37235;
})();
var statearr_37236_37766 = state_37221__$1;
(statearr_37236_37766[(2)] = null);

(statearr_37236_37766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (9))){
var inst_37179 = (state_37221[(7)]);
var inst_37190 = cljs.core.keyword_identical_QMARK_(inst_37179,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37221__$1 = state_37221;
var statearr_37237_37767 = state_37221__$1;
(statearr_37237_37767[(2)] = inst_37190);

(statearr_37237_37767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (5))){
var inst_37187 = (state_37221[(13)]);
var inst_37179 = (state_37221[(7)]);
var inst_37186 = (state_37221[(11)]);
var inst_37182 = (state_37221[(9)]);
var inst_37186__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37182) : f.call(null,inst_37182));
var inst_37187__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37186__$1,inst_37179);
var state_37221__$1 = (function (){var statearr_37238 = state_37221;
(statearr_37238[(13)] = inst_37187__$1);

(statearr_37238[(11)] = inst_37186__$1);

return statearr_37238;
})();
if(inst_37187__$1){
var statearr_37239_37768 = state_37221__$1;
(statearr_37239_37768[(1)] = (8));

} else {
var statearr_37240_37769 = state_37221__$1;
(statearr_37240_37769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (14))){
var inst_37186 = (state_37221[(11)]);
var inst_37182 = (state_37221[(9)]);
var inst_37199 = (state_37221[(2)]);
var inst_37200 = [];
var inst_37201 = inst_37200.push(inst_37182);
var inst_37178 = inst_37200;
var inst_37179 = inst_37186;
var state_37221__$1 = (function (){var statearr_37241 = state_37221;
(statearr_37241[(7)] = inst_37179);

(statearr_37241[(8)] = inst_37178);

(statearr_37241[(14)] = inst_37201);

(statearr_37241[(15)] = inst_37199);

return statearr_37241;
})();
var statearr_37242_37771 = state_37221__$1;
(statearr_37242_37771[(2)] = null);

(statearr_37242_37771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (16))){
var state_37221__$1 = state_37221;
var statearr_37243_37772 = state_37221__$1;
(statearr_37243_37772[(2)] = null);

(statearr_37243_37772[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (10))){
var inst_37192 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
if(cljs.core.truth_(inst_37192)){
var statearr_37244_37773 = state_37221__$1;
(statearr_37244_37773[(1)] = (11));

} else {
var statearr_37245_37774 = state_37221__$1;
(statearr_37245_37774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (18))){
var inst_37211 = (state_37221[(2)]);
var state_37221__$1 = state_37221;
var statearr_37246_37775 = state_37221__$1;
(statearr_37246_37775[(2)] = inst_37211);

(statearr_37246_37775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37222 === (8))){
var inst_37187 = (state_37221[(13)]);
var state_37221__$1 = state_37221;
var statearr_37247_37776 = state_37221__$1;
(statearr_37247_37776[(2)] = inst_37187);

(statearr_37247_37776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35671__auto__ = null;
var cljs$core$async$state_machine__35671__auto____0 = (function (){
var statearr_37248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37248[(0)] = cljs$core$async$state_machine__35671__auto__);

(statearr_37248[(1)] = (1));

return statearr_37248;
});
var cljs$core$async$state_machine__35671__auto____1 = (function (state_37221){
while(true){
var ret_value__35672__auto__ = (function (){try{while(true){
var result__35673__auto__ = switch__35670__auto__(state_37221);
if(cljs.core.keyword_identical_QMARK_(result__35673__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35673__auto__;
}
break;
}
}catch (e37249){var ex__35674__auto__ = e37249;
var statearr_37250_37777 = state_37221;
(statearr_37250_37777[(2)] = ex__35674__auto__);


if(cljs.core.seq((state_37221[(4)]))){
var statearr_37251_37778 = state_37221;
(statearr_37251_37778[(1)] = cljs.core.first((state_37221[(4)])));

} else {
throw ex__35674__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37779 = state_37221;
state_37221 = G__37779;
continue;
} else {
return ret_value__35672__auto__;
}
break;
}
});
cljs$core$async$state_machine__35671__auto__ = function(state_37221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35671__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35671__auto____1.call(this,state_37221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35671__auto____0;
cljs$core$async$state_machine__35671__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35671__auto____1;
return cljs$core$async$state_machine__35671__auto__;
})()
})();
var state__35768__auto__ = (function (){var statearr_37252 = f__35767__auto__();
(statearr_37252[(6)] = c__35766__auto___37751);

return statearr_37252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35768__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
