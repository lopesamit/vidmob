(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,a){e.exports=a(373)},215:function(e,t,a){},217:function(e,t,a){},221:function(e,t,a){e.exports=a.p+"static/media/vm-logo-primary.0faacd91.svg"},345:function(e,t,a){e.exports=a.p+"static/media/ic-large-email-generic.032abe26.svg"},360:function(e,t,a){e.exports=a.p+"static/media/multi-email-cancel.6cdbd05e.svg"},373:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"firebase",function(){return C.a});var i=a(1),l=a.n(i),s=a(15),o=a.n(s),r=(a(215),a(18)),c=a(19),m=a(22),u=a(20),p=a(21),d=(a(217),a(16)),h=a(374),f=function(){return l.a.createElement("header",null,l.a.createElement(h.a,{to:"/"},l.a.createElement("img",{className:"position-absolute vidmob-logo",src:a(221),alt:"vidmod logo"})),l.a.createElement("div",{className:"login-in-wrapper position-absolute"},l.a.createElement("label",{className:"text-white mr-3"}," Already have an account?"),l.a.createElement(d.a,{className:"login-btn text-white",variant:"outlined"},l.a.createElement(h.a,{to:"/signin",className:"text-white"},"Log in"))))},b=a(29),v=a.n(b),E=a(44),g=a(9),y=a(34),N=a(94),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClose=a.handleClose.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleClose",value:function(e){e.preventDefault(),this.props.closeModal()}},{key:"render",value:function(){return l.a.createElement("div",{className:"position-relative exist-confirmation-email"},l.a.createElement("div",{className:"card-icon-wrapper d-flex justify-content-center mx-auto mt-4"},l.a.createElement("img",{src:a(345),alt:"card"})),l.a.createElement("h5",{className:"my-3"},"That looks familiar"),l.a.createElement("p",{className:"col-10 mx-auto mb-3"},"That email looks like it\u2019s part of an exisitng company. Check your email for an invite to your company."),l.a.createElement("button",{className:"bg-transparent border-0 position-absolute text-white close-btn",onClick:this.handleClose}," close x"))}}]),t}(i.Component),O=a(377),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={navigate:!1,goBack:!1},a.handleContinue=a.handleContinue.bind(Object(g.a)(Object(g.a)(a))),a.handleBack=a.handleBack.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({prevState:this.props.state})}},{key:"handleContinue",value:function(){this.setState({navigate:!0})}},{key:"handleBack",value:function(){"function"===typeof this.props.closePersonalModal&&this.props.closePersonalModal()}},{key:"render",value:function(){return this.state.navigate?l.a.createElement(O.a,{to:{pathname:"/signup",state:this.state.prevState}}):l.a.createElement("div",{className:"position-relative text-left personal-email p-3"},l.a.createElement("h5",{className:"my-3"},"That looks like a personal email"),l.a.createElement(d.b,{className:"col-10 mx-auto mb-3"},"Press continue to create a new team, or go back to try finding your team instead."),l.a.createElement("div",{className:"float-right mt-3"},l.a.createElement(d.a,{className:"back-btn",onClick:this.handleBack}," back "),l.a.createElement(d.a,{className:"continue-btn",onClick:this.handleContinue}," continue ")))}}]),t}(i.Component),x=a(61),w=a(59),C=a.n(w);a(352),a(356).config();C.a.apps.length||C.a.initializeApp({apiKey:"AIzaSyDFSsJfvdbl9sgmuLBB4n0rt4-ScKVZkmc",authDomain:"vidmobreact.firebaseapp.com",databaseURL:"https://vidmobreact.firebaseio.com",projectId:"vidmobreact",storageBucket:"vidmobreact.appspot.com",messagingSenderId:"69048660733"});var S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isAssociated:!1,emailType:"",error:!1,navigate:!1,users:[],companies:[]},a.closeModal=a.closeModal.bind(Object(g.a)(Object(g.a)(a))),a.handleNext=a.handleNext.bind(Object(g.a)(Object(g.a)(a))),a.closePersonalModal=a.closePersonalModal.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark(function e(){var t,a,i,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],i=n.firebase.database().ref("users").orderByChild("email"),e.next=5,i.on("value",function(e,a){e.val()&&Object.values(e.val()).map(function(e){t.push(e)})});case 5:return l=n.firebase.database().ref("companies").orderByChild("email"),e.next=8,l.on("value",function(e,t){e.val()&&Object.values(e.val()).map(function(e){a.push(e)})});case 8:return e.next=10,this.setState({users:t,companies:a});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"closeModal",value:function(){this.setState({emailType:"confirm",navigate:!0})}},{key:"handleNext",value:function(){var e=Object(E.a)(v.a.mark(function e(t){var a,n,i=this;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.email.split("@")[1],e.next=4,this.state.companies.find(function(e){return e.domain===a});case 4:return n=e.sent,e.next=7,this.state.users.find(function(e){return e.email===i.state.email});case 7:e.sent?this.setState({emailType:"error",error:!0}):n?this.setState({emailType:"confirm",isAssociated:!0}):this.setState({emailType:"personal"});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"closePersonalModal",value:function(){this.setState({emailType:"none"})}},{key:"render",value:function(){var e=this;return this.state.navigate?l.a.createElement(O.a,{to:{pathname:"/signup",state:this.state}}):l.a.createElement("div",{className:"align-self-center col col-lg-4 col-md-6 landing-page"},l.a.createElement("form",{className:"form-control",onSubmit:this.handleNext},l.a.createElement("h3",{className:"get-started"}," Get started on VidMob"),l.a.createElement(d.b,{className:"text-left w-100"}," Enter your work email"),l.a.createElement(N.a,{open:"confirm"===this.state.emailType,closeOnDocumentClick:!0,onClose:this.closeModal},l.a.createElement(j,{style:{width:"320px"},closeModal:this.closeModal})),l.a.createElement(N.a,{open:"personal"===this.state.emailType,closeOnDocumentClick:!0},l.a.createElement(k,{state:this.state,closePersonalModal:this.closePersonalModal})),l.a.createElement(d.c,{required:!0,className:"float-left mt-3 w-100",placeholder:"name@company.com",variant:"outlined",id:"EmailError",error:this.state.error,onChange:function(t){return e.setState((a="email",n=t.target.value,function(){return Object(y.a)({},a,n)}));var a,n},type:"email"}),l.a.createElement(x.a,{placement:"top",isOpen:"error"===this.state.emailType,target:"EmailError"},l.a.createElement("div",null,l.a.createElement("p",null,"That email looks like it\u2019s already taken. Do you want to",l.a.createElement(h.a,{to:"/signin",className:"text-white"}," ",l.a.createElement("b",null,"login")," "),"or",l.a.createElement(h.a,{to:"/reset-password",className:"text-white"},l.a.createElement("b",null," reset your password? "))))),l.a.createElement(d.a,{className:"next-btn mt-3 float-right border-0 text-white",variant:"contained",type:"submit"}," Next")))}}]),t}(i.Component),M=a(376),D=a(375),T=(a(128),function(e,t){return function(){return Object(y.a)({},e,t)}}),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSignUp=a.handleSignUp.bind(Object(g.a)(Object(g.a)(a))),a.state={isAssociated:!1,navigate:!1,companyNameExist:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.location){e.next=3;break}return e.next=3,this.setState({isAssociated:!!this.props.location.state&&this.props.location.state.isAssociated,landingPageState:this.props.location.state||null});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSignUp",value:function(e){var t=this;e.preventDefault();var a={firstName:this.state.firstName,lastName:this.state.lastName,displayName:this.state.displayName||"",password:this.state.password,companyName:this.state.companyName||"",email:this.props.location.state?this.props.location.state.email:""},i=this.props.location?this.props.location.state.companies:[];i&&(i.find(function(e){return e.domain.split(".")[0]===t.state.companyName})?this.setState({companyNameExist:!0}):(n.firebase.database().ref("users").push(a),this.setState({navigate:!0,companyNameExist:!1})))}},{key:"render",value:function(){var e=this;return this.state.navigate?l.a.createElement(O.a,{to:{pathname:"/company-signup",state:this.state}}):l.a.createElement("div",{className:"sign-up align-self-center position-relative"},l.a.createElement("form",{className:"form-control",onSubmit:this.handleSignUp},this.state.isAssociated?l.a.createElement("h3",{className:"join-team text-left"},"Join the VidMob team"):l.a.createElement("h3",{className:"join-team text-left"},"Get started on VidMob"),l.a.createElement(d.b,{className:"input-label"},"Your email ",this.state.isAssociated?" is ":" wasn't ","associated with an existing company. Fill out the information below to finish the setup."),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"d-inline-block col-6 p-0 pr-1"},l.a.createElement(d.c,{className:"d-inline-block col",variant:"outlined",placeholder:"First Name",onChange:function(t){return e.setState(T("firstName",t.target.value))},required:!0})),l.a.createElement("div",{className:"d-inline-block col-6 p-0 pl-1"},l.a.createElement(d.c,{className:"d-inline-block col",variant:"outlined",placeholder:"Last Name",onChange:function(t){return e.setState(T("lastName",t.target.value))},required:!0}))),l.a.createElement("div",{className:"display-name"},l.a.createElement(d.c,{className:"col mt-2",variant:"outlined",placeholder:"Display Name",onChange:function(t){return e.setState(T("displayName",t.target.value))}}),l.a.createElement("label",{className:"label-optional"},"[optional]")),l.a.createElement(d.c,{className:"col mt-2",variant:"outlined",placeholder:"Password",type:"password",required:!0,onChange:function(t){return e.setState(T("password",t.target.value))}}),this.state.isAssociated?null:l.a.createElement("div",null,l.a.createElement(d.c,{className:"col mt-2",variant:"outlined",placeholder:"Company Name",id:"EmailError",required:!0,onChange:function(t){return e.setState(T("companyName",t.target.value))}}),l.a.createElement(x.a,{placement:"top",isOpen:this.state.companyNameExist,target:"EmailError"},l.a.createElement("div",null,l.a.createElement("p",null,"That company looks like it already exists. Try to Find My Team using your work email.")))),l.a.createElement(d.a,{className:"sign-up-btn mt-3 float-right border-0 text-white",variant:"contained",type:"submit"},"Sign up")),l.a.createElement("p",{className:"mt-3 text-center terms-condition position-absolute"},"By selecting Sign Up, you agree to our ",l.a.createElement("b",null,"Terms & Conditions")))}}]),t}(i.Component),B=a(43),P=a.n(B),U=a(57),q=a.n(U),I=a(42),L=a.n(I),F=(a(129),a(134)),J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={emails:[]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.emails.length!==this.state.emails.length&&this.props.handleEmail(this.state.emails)}},{key:"render",value:function(){var e=this,t=this.state.emails;return l.a.createElement("div",null,l.a.createElement(F.ReactMultiEmail,{placeholder:"placeholder",emails:t,onChange:function(t){e.setState({emails:t})},getLabel:function(e,t,n){return l.a.createElement("div",{className:"multi-email-wrapper","data-tag":!0,key:t},e,l.a.createElement("span",{"data-tag-handle":!0,onClick:function(){return n(t)}},l.a.createElement("img",{className:"remove-email",src:a(360),alt:"cancel"})))}}))}}]),t}(i.Component),V=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.state={value:"email",emails:[]},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a.handleEmail=a.handleEmail.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleEmail",value:function(e){this.setState({emails:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"company-sign-up align-self-center"},l.a.createElement("div",{className:"form-control"},l.a.createElement("h3",{className:"company-signup text-left"},"Company sign up mode"),l.a.createElement("p",{className:"text-left "}," Anyone with a specified email domain can join your team. Otherwise, an owner or co-owner will have to invite all team members."),l.a.createElement(q.a,{"aria-label":"CompanyName",name:"company-emails",value:this.state.value,onChange:this.handleChange},l.a.createElement(L.a,{value:"email",control:l.a.createElement(P.a,null),label:"Any email from my domains"}),l.a.createElement(J,{handleEmail:this.handleEmail}),l.a.createElement(L.a,{value:"invite",control:l.a.createElement(P.a,null),label:"Invite only"})),l.a.createElement(d.a,{className:"done-btn mt-3 float-right border-0 text-white",variant:"contained",onClick:this.handleSubmit},"Done")))}}]),t}(i.Component),R=function(){return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("h1",{className:"align-self-center text-white"},"Sign in page"))},z=function(){return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("h1",{className:"align-self-center text-white"},"Reset Password page"))},G=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(M.a,null,l.a.createElement("div",{className:"App d-flex justify-content-center"},l.a.createElement(f,null),l.a.createElement(D.a,{exact:!0,path:"/",component:S}),l.a.createElement(D.a,{exact:!0,path:"/signup",component:A}),l.a.createElement(D.a,{exact:!0,path:"/company-signup",component:V}),l.a.createElement(D.a,{exact:!0,path:"/signin",component:R}),l.a.createElement(D.a,{exact:!0,path:"/reset-password",component:z})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(370),a(131),a(60),a(372);o.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[210,2,1]]]);
//# sourceMappingURL=main.e4cca221.chunk.js.map