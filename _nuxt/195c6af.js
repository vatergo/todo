(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{1229:function(t,e,n){var content=n(1231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(224).default)("390ed404",content,!0,{sourceMap:!1})},1230:function(t,e,n){"use strict";n(1229)},1231:function(t,e,n){var o=n(223)((function(i){return i[1]}));o.push([t.i,".content>div,.content>form{align-items:center;display:flex;gap:8px;justify-content:space-between}.content>div button,.content>form button{flex-shrink:0}.label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.select{max-width:90px}",""]),o.locals={},t.exports=o},1232:function(t,e,n){var content=n(1235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(224).default)("51bcebe4",content,!0,{sourceMap:!1})},1233:function(t,e,n){"use strict";n.r(e);n(76),n(91),n(159),n(160),n(92),n(38),n(77);var o=n(62);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=n(9).default.extend({name:"Task",data:function(){return{editMode:!1}},props:{task:{type:Object,required:!0}},setup:function(t){return{innerLabel:t.task.label,innerStatus:t.task.status}},methods:{changeStatus:function(t){this.innerStatus=t},changeLabel:function(t){var e=t.target;e instanceof HTMLInputElement&&(this.innerLabel=e.value)},enableEditMode:function(){this.editMode=!0},deleteTask:function(){this.$store.dispatch("deleteTask",this.task.id)},saveTask:function(){this.editMode=!1,this.$store.dispatch("editTask",l(l({},this.task),{},{label:this.innerLabel,status:this.innerStatus}))}}}),d=(n(1230),n(106)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content"},[t.editMode?e("form",{on:{submit:function(e){return e.preventDefault(),t.saveTask.apply(null,arguments)}}},[e("a-input",{attrs:{"default-value":t.innerLabel},on:{change:t.changeLabel}}),t._v(" "),e("a-select",{staticClass:"select",attrs:{"default-value":t.innerStatus},on:{change:t.changeStatus}},[e("a-select-option",{attrs:{value:"done"}},[t._v("Done")]),t._v(" "),e("a-select-option",{attrs:{value:"cancel"}},[t._v("Cancel")]),t._v(" "),e("a-select-option",{attrs:{value:"new"}},[t._v("New")])],1),t._v(" "),e("a-button",{attrs:{icon:"delete"},on:{click:t.deleteTask}}),t._v(" "),e("a-button",{attrs:{htmlType:"submit",icon:"save"}})],1):e("div",[e("span",["new"===t.task.status?e("a-icon",{staticStyle:{color:"blue"},attrs:{type:"clock-circle"}}):"done"===t.task.status?e("a-icon",{staticStyle:{color:"green"},attrs:{type:"check-circle"}}):e("a-icon",{staticStyle:{color:"red"},attrs:{type:"close-circle"}})],1),t._v(" "),e("span",{staticClass:"label"},[t._v(t._s(t.task.label))]),t._v(" "),e("a-button",{attrs:{icon:"edit"},on:{click:t.enableEditMode}})],1)])}),[],!1,null,null,null);e.default=component.exports},1234:function(t,e,n){"use strict";n(1232)},1235:function(t,e,n){var o=n(223)((function(i){return i[1]}));o.push([t.i,".container{align-items:flex-start;height:100vh;justify-content:center;padding:36px}.container,.form{display:flex;width:100%}.form{border:1px solid #add8e6;border-radius:16px;flex-direction:column;max-height:100%;max-width:400px;overflow:hidden;padding:24px}.createBlock{display:flex;gap:8px;justify-content:space-between;width:100%}.createBlock button{flex-shrink:0}.input{width:100%}.tasksBlock{height:100%;margin-top:32px;overflow:auto}",""]),o.locals={},t.exports=o},1236:function(t,e,n){"use strict";n.r(e);var o=n(9).default.extend({name:"IndexPage",data:function(){return{taskName:""}},methods:{addTask:function(){this.$store.dispatch("addTask",this.taskName),this.taskName=""}}}),r=(n(1234),n(106)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"form"},[e("h1",[t._v("TODO List")]),t._v(" "),e("form",{staticClass:"createBlock",on:{submit:function(e){return e.preventDefault(),t.addTask.apply(null,arguments)}}},[e("a-input",{staticClass:"input",attrs:{placeholder:"Task name"},model:{value:t.taskName,callback:function(e){t.taskName=e},expression:"taskName"}}),t._v(" "),e("a-button",{attrs:{type:"primary",htmlType:"submit",disabled:0===t.taskName.length,icon:"plus"}})],1),t._v(" "),e("a-space",{staticClass:"tasksBlock",attrs:{direction:"vertical"}},t._l(t.$store.state.tasks,(function(t){return e("Task",{key:t.id,staticClass:"task",attrs:{task:t}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Task:n(1233).default})}}]);