(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(15),n=c.n(i),r=c(5),u=c(4),o=c(3),d=c(22),l=c(11),j=c(37),p={newQuizRoute:function(){return"/quizzes/new"},quizRoute:function(e){return"/quizzes/".concat(e)},quizzesRoute:function(){return"/quizzes"},newTopicRoute:function(){return"/topics/new"},topicRoute:function(e){return"/topics/".concat(e)},topicsRoute:function(){return"/topics"}},b=c(12),h=Object(b.b)({name:"cards",initialState:{cards:{}},reducers:{addCard:function(e,t){var c=t.payload.id;e.cards[c]=t.payload}}}),x=h.actions.addCard,m=function(e){return e.cards.cards},O=h.reducer,z=Object(b.b)({name:"topics",initialState:{topics:{}},reducers:{addTopic:function(e,t){var c=t.payload.id;e.topics[c]=t.payload},addQuizIdForTopic:function(e,t){console.log(t.payload);var c=t.payload,a=c.quizId,s=c.topicId;e.topics[s].quizIds.push(a)}}}),v=z.actions,f=v.addTopic,q=v.addQuizIdForTopic,g=function(e){return e.topics.topics},k=z.reducer,y=Object(b.b)({name:"quizzes",initialState:{quizzes:{}},reducers:{addQuiz:function(e,t){var c=t.payload.id;e.quizzes[c]=t.payload}}}),N=y.actions.addQuiz,C=function(e){return e.quizzes.quizzes},w=y.reducer,T=c(0);function I(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),n=Object(l.a)(i,2),u=n[0],b=n[1],h=Object(a.useState)(""),m=Object(l.a)(h,2),O=m[0],z=m[1],v=Object(o.f)(),f=Object(r.c)(g),k=Object(r.b)(),y=function(e,t,c){var a=u.slice();a[e][t]=c,b(a)};return Object(T.jsxs)("section",{children:[Object(T.jsx)("h1",{children:"Create a new quiz"}),Object(T.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0!==c.length)if(""!==O){var t,a=[];u.forEach((function(e){var t=Object(j.a)();a.push(t),k(x(Object(d.a)(Object(d.a)({},e),{},{id:t})))})),k((t={name:c,id:Object(j.a)(),topicId:O,cardIds:a},function(e){var c=t.topicId,a=t.id;e(N(t)),e(q({quizId:a,topicId:c}))})),v.push(p.quizzesRoute())}else alert('Please select a topic to create a quiz. If you do not have any topics, you can create one by clicking the "topics tab."')},children:[Object(T.jsx)("input",{id:"quiz-name",value:c,onChange:function(e){return s(e.currentTarget.value)},placeholder:"Quiz Title"}),Object(T.jsxs)("select",{id:"quiz-topic",onChange:function(e){return z(e.currentTarget.value)},placeholder:"Topic",children:[Object(T.jsx)("option",{value:"",children:"Topic"}),Object.values(f).map((function(e){return Object(T.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),u.map((function(e,t){return Object(T.jsxs)("div",{className:"card-front-back",children:[Object(T.jsx)("input",{id:"card-front-".concat(t),value:u[t].front,onChange:function(e){return y(t,"front",e.currentTarget.value)},placeholder:"Front"}),Object(T.jsx)("input",{id:"card-back-".concat(t),value:u[t].back,onChange:function(e){return y(t,"back",e.currentTarget.value)},placeholder:"Back"}),Object(T.jsx)("button",{onClick:function(e){return function(e,t){e.preventDefault(),b(u.filter((function(e,c){return t!==c})))}(e,t)},className:"remove-card-button",children:"Remove Card"})]},t)})),Object(T.jsxs)("div",{className:"actions-container",children:[Object(T.jsx)("button",{onClick:function(e){e.preventDefault(),b(u.concat({front:"",back:""}))},children:"Add a Card"}),Object(T.jsx)("button",{children:"Create Quiz"})]})]})]})}var R=[{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg",name:"Book"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/balloon.svg",name:"Balloon"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/bird.svg",name:"Bird"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/calendar.svg",name:"Calendar"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/clover.svg",name:"Clover"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/crayons.svg",name:"Crayons"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/data-flow.svg",name:"Data"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/fence.svg",name:"Fence"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/grill.svg",name:"Grill"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/hand-drill.svg",name:"Hand"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/hat.svg",name:"Hat"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/internet.svg",name:"Internet"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/ladybug.svg",name:"Ladybug"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/leaves.svg",name:"Leaves"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/medicine.svg",name:"Medicine"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/nest.svg",name:"Nest"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/shuttlecock.svg",name:"Shuttlecock"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/spade.svg",name:"Spade"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/statistics.svg",name:"Statistics"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/sun.svg",name:"Sun"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/tree.svg",name:"Tree"}];function Q(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(l.a)(i,2),u=n[0],d=n[1],b=Object(o.f)(),h=Object(r.b)();return Object(T.jsx)("section",{children:Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==c.length&&(h(f({id:Object(j.a)(),name:c,icon:u,quizIds:[]})),b.push(p.topicsRoute()))},children:[Object(T.jsx)("h1",{className:"center",children:"Create a new topic"}),Object(T.jsxs)("div",{className:"form-section",children:[Object(T.jsx)("input",{id:"topic-name",type:"text",value:c,onChange:function(e){return s(e.currentTarget.value)},placeholder:"Topic Name"}),Object(T.jsxs)("select",{onChange:function(e){return d(e.currentTarget.value)},required:!0,defaultValue:"default",children:[Object(T.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Choose an icon"}),R.map((function(e){var t=e.name,c=e.url;return Object(T.jsx)("option",{value:c,children:t},c)}))]})]}),Object(T.jsx)("button",{className:"center",children:"Add Topic"})]})})}function S(){var e=Object(r.c)(g);return Object(T.jsxs)("section",{className:"center",children:[Object(T.jsx)("h1",{children:"Topics"}),Object(T.jsx)("ul",{className:"topics-list",children:Object.values(e).map((function(e){return Object(T.jsx)("li",{className:"topic",children:Object(T.jsx)(u.b,{to:p.topicRoute(e.id),className:"topic-link",children:Object(T.jsxs)("div",{className:"topic-container",children:[Object(T.jsx)("img",{src:e.icon,alt:""}),Object(T.jsxs)("div",{className:"text-content",children:[Object(T.jsx)("h2",{children:e.name}),Object(T.jsxs)("p",{children:[e.quizIds.length," Quizzes"]})]})]})})},e.id)}))}),Object(T.jsx)(u.b,{to:p.newTopicRoute(),className:"button create-new-topic-button",children:"Create New Topic"})]})}function F(){var e=Object(r.c)(g),t=Object(r.c)(C),c=e[Object(o.g)().topicId],a=c.quizIds.map((function(e){return t[e]}));return Object(T.jsxs)("section",{children:[Object(T.jsx)("img",{src:c.icon,alt:"",className:"topic-icon"}),Object(T.jsxs)("h1",{children:["Topic: ",c.name]}),Object(T.jsx)("ul",{className:"quizzes-list",children:a.map((function(e){return Object(T.jsx)("li",{className:"quiz",children:Object(T.jsx)(u.b,{to:p.quizRoute(e.id),children:e.name})},e.id)}))}),Object(T.jsx)(u.b,{to:"/quizzes/new",className:"button center",children:"Create a New Quiz"})]})}function B(e){var t=e.id,c=Object(r.c)(m)[t],s=Object(a.useState)(!1),i=Object(l.a)(s,2),n=i[0],u=i[1];return Object(T.jsx)("li",{children:Object(T.jsx)("button",{className:"card",onClick:function(e){return u(!n)},children:n?c.back:c.front})})}function D(){var e=Object(r.c)(C)[Object(o.g)().quizId];return Object(T.jsxs)("section",{children:[Object(T.jsx)("h1",{children:e.name}),Object(T.jsx)("ul",{className:"cards-list",children:e.cardIds.map((function(e){return Object(T.jsx)(B,{id:e},e)}))}),Object(T.jsx)(u.b,{to:p.newQuizRoute(),className:"button center",children:"Create a New Quiz"})]})}function A(){var e=Object(r.c)(C);return Object(T.jsxs)("section",{className:"center",children:[Object(T.jsx)("h1",{children:"Quizzes"}),Object(T.jsx)("ul",{className:"quizzes-list",children:Object.values(e).map((function(e){return Object(T.jsx)(u.b,{to:p.quizRoute(e.id),children:Object(T.jsx)("li",{className:"quiz",children:e.name})},e.id)}))}),Object(T.jsx)(u.b,{to:p.newQuizRoute(),className:"button",children:"Create New Quiz"})]})}function E(){return Object(T.jsxs)(u.a,{children:[Object(T.jsx)("nav",{children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(u.c,{strict:!0,to:p.topicsRoute(),activeClassName:"active",children:"Topics"})}),Object(T.jsx)("li",{children:Object(T.jsx)(u.c,{strict:!0,to:p.quizzesRoute(),activeClassName:"active",children:"Quizzes"})}),Object(T.jsx)("li",{children:Object(T.jsx)(u.c,{strict:!0,to:p.newQuizRoute(),activeClassName:"active",children:"New Quiz"})})]})}),Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"/topics",children:Object(T.jsx)(H,{})}),Object(T.jsx)(o.a,{path:"/quizzes",children:Object(T.jsx)(J,{})})]})]})}function H(){var e=Object(o.h)();return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"".concat(e.path,"/new"),children:Object(T.jsx)(Q,{})}),Object(T.jsx)(o.a,{path:"".concat(e.path,"/:topicId"),children:Object(T.jsx)(F,{})}),Object(T.jsx)(o.a,{path:"".concat(e.path),children:Object(T.jsx)(S,{})})]})})}function J(){var e=Object(o.h)();return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"".concat(e.path,"/new"),children:Object(T.jsx)(I,{})}),Object(T.jsx)(o.a,{path:"".concat(e.path,"/:quizId"),children:Object(T.jsx)(D,{})}),Object(T.jsx)(o.a,{path:"".concat(e.path),children:Object(T.jsx)(A,{})})]})})}var L=Object(b.a)({reducer:{topics:k,quizzes:w,cards:O}});n.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(r.a,{store:L,children:Object(T.jsx)(E,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6f74336a.chunk.js.map