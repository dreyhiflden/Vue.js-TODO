(function(t){function e(e){for(var n,s,c=e[0],l=e[1],a=e[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,c=1;c<o.length;c++){var l=o[c];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/skd-testcase/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"2eba":function(t,e,o){"use strict";var n=o("de71"),r=o.n(n);r.a},3892:function(t,e,o){"use strict";var n=o("3fad"),r=o.n(n);r.a},"3fad":function(t,e,o){},"50e9":function(t,e,o){"use strict";var n=o("f5ac"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoList")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"main"},[o("AddTodoItem"),o("ul",{staticClass:"todo-list"},t._l(t.todos,(function(t){return o("TodoListItem",{key:t.id,attrs:{todo:t}})})),1),o("FilterControls"),o("div",{staticClass:"container"},[o("TodoListStats"),o("TodoListProgress")],1)],1)])},c=[],l=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("2fa7")),a=o("2f62"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"add-todo-form",attrs:{autocomplete:"off"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"add-todo-form__input",attrs:{type:"text",id:"todo-input",placeholder:"",maxlength:"36"},domProps:{value:t.newTodo},on:{blur:t.clearInput,input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),o("label",{staticClass:"add-todo-form__label",attrs:{for:"todo-input"}},[t._v("Input your deal")]),o("button",{staticClass:"button add-todo-form__button",on:{click:function(e){return e.preventDefault(),t.addTodoItemMethod(e)}}},[t._v("Add to list")])])},d=[],f=(o("498a"),o("c64e")),p=o.n(f);function b(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function m(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?b(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var O={name:"AddTodoItemForm",data:function(){return{newTodo:null}},methods:m({},Object(a["b"])(["addTodoItem"]),{addTodoItemMethod:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.addTodoItem({text:this.newTodo,completed:!1,id:p()()}),this.newTodo=null)},clearInput:function(t){t.target.value=""}})},v=O,g=(o("3892"),o("2877")),h=Object(g["a"])(v,u,d,!1,null,"bf5338b8",null),_=h.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"todo-list__item"},[o("input",{attrs:{type:"checkbox",id:t.todo.id},domProps:{checked:t.checked},on:{change:function(e){return t.toggleCompletedStatusMethod(t.todo)}}}),t.isEditing?t._e():o("label",{staticClass:"todo-list__text",class:{"todo-list__item--completed":t.todo.completed},attrs:{for:t.todo.id}},[t._v(" "+t._s(t.todo.text)+" ")]),t.isEditing?o("input",{staticClass:"todo-list__edit-input",attrs:{type:"text",maxlength:"36"},domProps:{value:t.todo.text},on:{change:t.bufferingText}}):t._e(),t.isEditing?t._e():o("button",{staticClass:"button todo-list__button",on:{click:t.toggleEditingState}},[t._v("Edit")]),t.isEditing?o("button",{staticClass:"button todo-list__button",on:{click:function(e){return t.edit(t.todo)}}},[t._v("Save")]):t._e(),o("button",{staticClass:"button todo-list__button",on:{click:function(e){return t.removeTodoItemMethod(t.todo)}}},[t._v("Delete")])])},T=[];function j(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function w(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?j(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):j(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var P={name:"TodoListItem",data:function(){return{isEditing:!1,bufferingInputText:""}},computed:{checked:function(){return this.todo.completed}},props:{todo:Object},methods:w({},Object(a["b"])(["toggleCompletedStatus","editTodoItem","removeTodoItem"]),{toggleCompletedStatusMethod:function(t){this.toggleCompletedStatus(t)},toggleEditingState:function(){this.isEditing=!this.isEditing},edit:function(t){this.bufferingInputText?(this.editTodoItem({newText:this.bufferingInputText,todoId:t.id}),this.toggleEditingState()):this.toggleEditingState()},removeTodoItemMethod:function(t){this.removeTodoItem(t)},bufferingText:function(t){this.bufferingInputText=t.target.value}})},E=P,C=(o("2eba"),Object(g["a"])(E,y,T,!1,null,"c420ea62",null)),D=C.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"filter-list__container"},[o("ul",{staticClass:"filter-list"},[o("li",{staticClass:"filter-list__item",class:{"filter-list__item--active":this.isAll},on:{click:function(e){return t.filterTodosMethod("all")}}},[t._v(" All ")]),o("li",{staticClass:"filter-list__item",class:{"filter-list__item--active":this.isCompleted},on:{click:function(e){return t.filterTodosMethod("completed")}}},[t._v(" Completed ")]),o("li",{staticClass:"filter-list__item",class:{"filter-list__item--active":this.isUncompleted},on:{click:function(e){return t.filterTodosMethod("uncompleted")}}},[t._v(" Uncompleted ")])])])},S=[];function x(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function M(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?x(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):x(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var k={name:"FilterControls",computed:Object(a["d"])({visibility:function(t){return t.visibility},isAll:function(){return"all"===this.visibility},isCompleted:function(){return"completed"===this.visibility},isUncompleted:function(){return"uncompleted"===this.visibility}}),methods:M({},Object(a["b"])(["filterTodos"]),{filterTodosMethod:function(t){this.filterTodos(t)}})},L=k,A=(o("617b"),Object(g["a"])(L,I,S,!1,null,"38fc0ec0",null)),$=A.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"stats"},[o("div",{staticClass:"stats__container"},[o("table",{staticClass:"stats__table",staticStyle:{width:"100%"}},[o("tr",[o("td",[t._v("Deals:")]),o("td",[t._v(t._s(t.totalDeals))])]),o("tr",[o("td",[t._v("Deals left:")]),o("td",[t._v(t._s(t.leftDeals))])])])]),o("button",{staticClass:"button stats__button",on:{click:t.clearCompletedMethod}},[t._v(" Clear completed ")])])},G=[];function U(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function R(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?U(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):U(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var V={name:"TodoListStats",computed:R({},Object(a["c"])(["todos"]),{totalDeals:function(){return this.todos.length},leftDeals:function(){return this.todos.filter((function(t){return!t.completed})).length}}),methods:R({},Object(a["b"])(["clearCompleted"]),{clearCompletedMethod:function(){this.clearCompleted()}})},B=V,J=(o("50e9"),Object(g["a"])(B,F,G,!1,null,"44dfa9f6",null)),z=J.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progress"},[o("div",{staticClass:"progress__container"},[o("ProgressBar")],1),o("button",{staticClass:"button progress__button",on:{click:t.completeAllMethod}},[t._v("Complete all")])])},q=[],H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progressbar"},[o("vue-circle",{ref:"circleProgress",staticClass:"progressbar",attrs:{progress:t.total,size:100,reverse:!1,"line-cap":"round",fill:t.fill,"empty-fill":"rgba(0, 0, 0, .1)","animation-start-value":0,"start-angle":2,"insert-mode":"append",thickness:10,"show-percent":!0}})],1)},K=[],Q=o("9de6"),W={components:{VueCircle:Q["a"]},data:function(){return{fill:{gradient:["#1ccd00","#a7ff00"]}}},computed:{total:function(){var t=this.$store.state.todos.length,e=this.$store.state.todos.filter((function(t){return t.completed})).length;return e/t*100||0}},watch:{total:function(){this.$refs.circleProgress.updateProgress(this.total)}}},X=W,Y=(o("b831"),Object(g["a"])(X,H,K,!1,null,"12245a9f",null)),Z=Y.exports;function tt(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function et(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?tt(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):tt(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var ot={name:"TodoListProgress",components:{ProgressBar:Z},methods:et({},Object(a["b"])(["completeAll"]),{completeAllMethod:function(){this.completeAll()}})},nt=ot,rt=(o("93d3"),Object(g["a"])(nt,N,q,!1,null,"12417df5",null)),it=rt.exports;function st(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function ct(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?st(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):st(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var lt={name:"Todo",components:{TodoListProgress:it,TodoListStats:z,FilterControls:$,TodoListItem:D,AddTodoItem:_},computed:ct({},Object(a["c"])({todos:"filteredTodos"}))},at=lt,ut=(o("71e8"),Object(g["a"])(at,s,c,!1,null,null,null)),dt=ut.exports,ft={name:"app",components:{TodoList:dt}},pt=ft,bt=(o("034f"),Object(g["a"])(pt,r,i,!1,null,null,null)),mt=bt.exports,Ot=(o("c740"),o("c975"),o("a434"),o("bfa9"));function vt(t,e){return t.todos.findIndex((function(t){return t.id===e}))}n["a"].use(a["a"]);var gt={all:function(t){return t},uncompleted:function(t){return t.filter((function(t){return!t.completed}))},completed:function(t){return t.filter((function(t){return t.completed}))}},ht=new Ot["a"]({key:"todo-appv5",storage:window.localStorage}),_t=new a["a"].Store({plugins:[ht.plugin],state:{todos:[],visibility:"all"},getters:{todos:function(t){return t.todos},filteredTodos:function(t){return gt[t.visibility](t.todos)}},mutations:{ADD_TODO_ITEM:function(t,e){t.todos.push(e)},TOGGLE_COMPLETE_STATUS:function(t,e){e.completed=!e.completed},EDIT_TODO_ITEM:function(t,e){t.todos[e.todoIndex].text=e.newText},REMOVE_TODO_ITEM:function(t,e){t.todos.splice(t.todos.indexOf(e),1)},FILTER_TODOS:function(t,e){t.visibility=e}},actions:{addTodoItem:function(t,e){var o=t.commit;o("ADD_TODO_ITEM",e)},toggleCompletedStatus:function(t,e){t.state;var o=t.commit;o("TOGGLE_COMPLETE_STATUS",e)},editTodoItem:function(t,e){var o=t.state,n=t.commit,r=(t.dispatch,vt(o,e.todoId));n("EDIT_TODO_ITEM",{newText:e.newText,todoIndex:r})},removeTodoItem:function(t,e){var o=t.commit;o("REMOVE_TODO_ITEM",e)},filterTodos:function(t,e){var o=t.commit;o("FILTER_TODOS",e)},clearCompleted:function(t){var e=t.state,o=t.commit;e.todos.filter((function(t){return t.completed})).forEach((function(t){o("REMOVE_TODO_ITEM",t)}))},completeAll:function(t){var e=t.state,o=t.commit;e.todos.filter((function(t){return!t.completed})).forEach((function(t){o("TOGGLE_COMPLETE_STATUS",t)}))}}});n["a"].config.productionTip=!1,new n["a"]({store:_t,render:function(t){return t(mt)}}).$mount("#app")},"58d2":function(t,e,o){},"617b":function(t,e,o){"use strict";var n=o("b346"),r=o.n(n);r.a},"71e8":function(t,e,o){"use strict";var n=o("bb91"),r=o.n(n);r.a},"85ec":function(t,e,o){},"93d3":function(t,e,o){"use strict";var n=o("e341"),r=o.n(n);r.a},b346:function(t,e,o){},b831:function(t,e,o){"use strict";var n=o("58d2"),r=o.n(n);r.a},bb91:function(t,e,o){},de71:function(t,e,o){},e341:function(t,e,o){},f5ac:function(t,e,o){}});
//# sourceMappingURL=app.ce3a4410.js.map