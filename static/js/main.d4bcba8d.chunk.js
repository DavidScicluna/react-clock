(this.webpackJsonpalarm=this.webpackJsonpalarm||[]).push([[0],{110:function(e,t,a){e.exports=a(121)},12:function(e,t,a){e.exports={Time:"Time_Time__2gqof",TimeGroup:"Time_TimeGroup__2RK2P",Tooltip:"Time_Tooltip__13bcG",Hidden:"Time_Hidden__1CRj5",GreyBtn:"Time_GreyBtn__MX43G"}},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(10),r=a.n(i),o=a(172),c=a(99),s=a(46),u=a(42),m=a(11),d=a(29),h=a(18),p=a(34),E=a(35),f=a(38),g=a(161),v=a(146),S=a(170),b=a(150);function y(e){var t=e.location;return l.a.createElement(v.a,{elevation:3,variant:"outlined"},l.a.createElement(S.a,{value:t,indicatorColor:"primary",textColor:"primary",centered:!0},l.a.createElement(b.a,{exact:"true",to:"/",label:"Clock",component:s.b}),l.a.createElement(b.a,{to:"/alarm",label:"Alarm",component:s.b}),l.a.createElement(b.a,{to:"/stopwatch",label:"Stopwatch",component:s.b}),l.a.createElement(b.a,{to:"/timer",label:"Timer",component:s.b})))}var _=a(57),C=a(58),k=a.n(C);function L(e){var t=e.locationPicked,a=e.local,n=void 0===t||null===t?a:t;function i(e,t){var a=(new Date).setSeconds(e),n=new Date(a),l={hours:n.getUTCHours(),minutes:n.getUTCMinutes(),day:n.getDay(),dayText:"",date:n.getDate(),month:n.getMonth(),monthText:"",year:n.getFullYear(),timeOfDay:""};switch(l.day){case 0:l.dayText="Sunday";break;case 1:l.dayText="Monday";break;case 2:l.dayText="Tuesday";break;case 3:l.dayText="Wednesday";break;case 4:l.dayText="Thursday";break;case 5:l.dayText="Friday";break;case 6:l.dayText="Saturday"}switch(l.month){case 0:l.monthText="January";break;case 1:l.monthText="February";break;case 2:l.monthText="March";break;case 3:l.monthText="April";break;case 4:l.monthText="May";break;case 5:l.monthText="June";break;case 6:l.monthText="July";break;case 7:l.monthText="August";break;case 8:l.monthText="September";break;case 9:l.monthText="October";break;case 10:l.monthText="November";break;case 11:l.monthText="December"}if(l.minutes>=0&&l.minutes<10&&(l.minutes="0".concat(l.minutes)),l.hours>=0&&l.hours<10&&(l.hours="0".concat(l.hours)),l.hours>=0&&l.hours<12)l.timeOfDay="AM";else{switch(l.hours){case 13:l.hours=1;break;case 14:l.hours=2;break;case 15:l.hours=3;break;case 16:l.hours=4;break;case 17:l.hours=5;break;case 18:l.hours=6;break;case 19:l.hours=7;break;case 20:l.hours=8;break;case 21:l.hours=9;break;case 22:l.hours=10;break;case 23:l.hours=11}l.timeOfDay="PM"}return"time"===t?"".concat(l.hours,":").concat(l.minutes):"timeOfDay"===t?l.timeOfDay:"date"===t?"".concat(l.dayText,", ").concat(l.monthText," ").concat(l.date,", ").concat(l.year):void 0}return l.a.createElement("div",{className:k.a.Content},l.a.createElement(_.a,{className:k.a.Subtitle,variant:"button",align:"center"},"Local"===n.name?n.name:"".concat(n.name," (").concat(n.sys.country,")")),l.a.createElement(_.a,{className:k.a.Title,variant:"h1",color:"primary",align:"center"},i(n.timezone,"time"),l.a.createElement("span",null,l.a.createElement(_.a,{variant:"button",color:"primary",align:"center"},i(n.timezone,"timeOfDay")))),l.a.createElement(_.a,{className:k.a.Subtitle,variant:"button",align:"center"},i(n.timezone,"date")))}var w=a(151),B=a(173),T=a(154),D=a(59),A=a.n(D),N=a(90),O=a.n(N),G=a(67),x=a.n(G),P=a(68),R=a.n(P);function I(e){var t=e.locationPicked,a=e.handleDialogOpen,n=null===t?{name:"Local"}:t;return l.a.createElement(w.a,{timeout:500,in:!0},l.a.createElement(v.a,{className:A.a.Paper,variant:"outlined"},l.a.createElement(B.a,{title:"View Locations","aria-label":"View Locations",placement:"top"},l.a.createElement(T.a,{"aria-label":"View Locations",onClick:function(){return a("Loc")},className:A.a.BlackBtn,size:"large"},l.a.createElement(O.a,null))),l.a.createElement("div",null,l.a.createElement(B.a,{title:"Local"===n.name?"":"Delete Location","aria-label":"Delete Locations",placement:"top"},l.a.createElement("span",null,l.a.createElement(T.a,{"aria-label":"Delete Locations",className:"Local"===n.name?"":A.a.RedBtn,onClick:function(){return a("Del")},size:"large",disabled:"Local"===n.name},l.a.createElement(x.a,null)))),l.a.createElement(B.a,{title:"Add Locations","aria-label":"Add Locations",placement:"top"},l.a.createElement(T.a,{"aria-label":"Add Locations",onClick:function(){return a("Add")},className:A.a.BlackBtn,size:"large"},l.a.createElement(R.a,null))))))}var M=a(174),j=a(162),H=a(155),z=a(167),F=a(157),W=a(91),q=a.n(W);function U(e){var t=e.selectedLocation,a=e.selectedLocationError,n=e.handleDialogClose,i=e.handleKeyPress,r=e.onChange,o=e.handleSubmit;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,null,l.a.createElement(z.a,{error:a,label:"City",placeholder:'Try "London"',type:"string",size:"small",variant:"outlined",color:"primary",fullWidth:!0,value:t,onChange:r,onKeyPress:i})),l.a.createElement(F.a,{disableSpacing:!0},l.a.createElement(T.a,{className:q.a.GreyBtn,onClick:n},"Cancel"),l.a.createElement(T.a,{onClick:o,color:"primary"},"Submit")))}var J=a(156),K=a(158),V=a(159),Q=a(76),Y=a.n(Q);function X(e){var t=e.locations,a=e.handleOpenLocationData,n=e.handleDialogClose,i=e.handleClearLocations;function r(e){var t=(new Date).setSeconds(e),a=new Date(t),n={hour:a.getUTCHours(),minute:a.getUTCMinutes()};return n.minute>=0&&n.minute<10&&(n.minute="0".concat(n.minute)),n.hour>=0&&n.hour<10&&(n.hour="0".concat(n.hour)),"".concat(n.hour,":").concat(n.minute)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,null,t.map((function(e){return l.a.createElement(K.a,{key:Math.random(),button:!0,onClick:function(){return a(e)}},l.a.createElement(V.a,{align:"left",primary:"Local"===e.name?e.name:"".concat(e.name," (").concat(e.sys.country,")")}),l.a.createElement(V.a,{align:"right",secondary:r(e.timezone)}))}))),l.a.createElement(F.a,{disableSpacing:!0},l.a.createElement(T.a,{className:Y.a.GreyBtn,onClick:n},"Cancel"),l.a.createElement(T.a,{className:Y.a.RedBtn,onClick:i,color:"primary"},"Clear")))}var Z=a(160),$=a(77),ee=a.n($);function te(e){var t=e.locationPicked,a=e.handleDialogClose,n=e.handleDelete;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,null,l.a.createElement(Z.a,null,"Are you sure you want to delete ",t.name)),l.a.createElement(F.a,{disableSpacing:!0},l.a.createElement(T.a,{className:ee.a.GreyBtn,onClick:a},"No"),l.a.createElement(T.a,{className:ee.a.RedBtn,onClick:function(){return n(t.id,t.name)}},"Yes")))}function ae(e){var t=e.dialog,a=e.dialogType,n=e.selectedLocation,i=e.selectedLocationError,r=e.locations,o=e.locationPicked,c=e.handleOpenLocationData,s=e.handleDialogClose,u=e.handleClearLocations,m=e.handleKeyPress,d=e.onChange,h=e.handleDelete,p=e.handleSubmit;return l.a.createElement(M.a,{open:t,keepMounted:!0,onClose:s,"aria-labelledby":"alertDialogTitle",fullWidth:!0,maxWidth:"xs"},l.a.createElement(j.a,{id:"alertDialogTitle"},"Add"===a?"Add new location":"Del"===a?"Delete?":"Locations"),"Add"===a?l.a.createElement(U,{selectedLocation:n,selectedLocationError:i,handleDialogClose:s,handleKeyPress:m,onChange:d,handleSubmit:p}):"Del"===a?l.a.createElement(te,{locationPicked:o,handleDialogClose:s,handleDelete:h}):l.a.createElement(X,{locations:r,handleOpenLocationData:c,handleDialogClose:s,handleClearLocations:u}))}var ne=a(92),le=a.n(ne),ie=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).createLocal=function(){var e=(new Date).toString().split("").splice(29,4).filter((function(e){return"0"!==e}));return{name:"Local",timezone:60*parseInt(e.join(""))*60,sys:{country:"Country"}}},a.handleLocationChange=function(e){a.setState({selectedLocation:e.target.value})},a.handleFocus=function(){!0!==a.state.selectedLocationError&&"Correct Input"!==a.state.selectedLocation||a.setState((function(e){return{selectedLocation:"",selectedLocationError:!e.selectedLocationError}}))},a.handleKeyPress=function(e){a.handleFocus(),!0===a.state.dialog&&("Enter"===e.key?a.handleSubmit():"Escape"===e.key&&a.handleDialogClose())},a.handleSubmit=function(){var e=a.state.selectedLocation;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=").concat("f3ef21c55d165f4433893081d602af6e")).then((function(e){return e.json()})).then((function(e){a.setState({newLocation:e}),a.handleUpdate()})).catch(Error)},a.handleUpdate=function(){var e=Object(m.a)(a.state.locations),t=Object(m.a)(a.state.cities);a.state.newLocation.cod!==["400","401","403","404","405","409","500","503"].find((function(e){return e===a.state.newLocation.cod}))?a.state.newLocation.name.toLowerCase()!==a.state.cities.find((function(e){return e===a.state.newLocation.name.toLowerCase()}))?(e.push(a.state.newLocation),t.push(a.state.selectedLocation.toLowerCase()),localStorage.setItem("LocalLocations",JSON.stringify(e)),localStorage.setItem("LocalCities",JSON.stringify(t)),a.setState({selectedLocation:"Correct Input",newLocation:null,locations:e,cities:t})):a.setState((function(e){return{selectedLocation:"City already inserted",selectedLocationError:!e.selectedLocationError,newLocation:null}})):a.setState((function(e){return{selectedLocation:"Incorrect Input",selectedLocationError:!e.selectedLocationError,newLocation:null}}))},a.handleOpenLocationData=function(e){a.setState({locationPicked:e}),a.handleDialogClose()},a.handleClearLocations=function(){localStorage.removeItem("LocalLocations"),localStorage.removeItem("LocalCities"),a.setState({selectedLocation:"",selectedLocationError:!1,newLocation:null,locations:[],cities:[]}),a.componentDidMount()},a.handleDelete=function(e,t){var n=e,l=t.toLowerCase(),i=Object(m.a)(a.state.locations).filter((function(e){return e.id!==n})),r=Object(m.a)(a.state.cities).filter((function(e){return e!==l}));localStorage.setItem("LocalLocations",JSON.stringify(i)),localStorage.setItem("LocalCities",JSON.stringify(r)),a.setState({locationPicked:a.state.locations[0],locations:i,cities:r}),a.componentDidMount(),a.handleDialogClose()},a.handleDialogOpen=function(e){a.setState((function(t){return{dialog:!t.dialog,dialogType:e}}))},a.handleDialogClose=function(){a.setState((function(e){return{dialog:!e.dialog}}))},a.state={selectedLocation:"",selectedLocationError:!1,newLocation:null,locations:[],cities:[],locationPicked:null,dialog:!1,dialogType:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){var e=this;clearInterval(this.interval);var t=JSON.parse(localStorage.getItem("LocalLocations")||"[]"),a=JSON.parse(localStorage.getItem("LocalCities")||"[]");if(0===t.length||0===a.length||1===t.length){var n=[],l=this.createLocal();return n.push(l),void this.setState({locations:n,locationPicked:l})}this.setState({locations:t,cities:a}),this.interval=setInterval((function(){e.setState({locations:e.state.locations})}),1e3)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{location:0}),l.a.createElement(g.a,{timeout:500,in:!0},l.a.createElement("div",{className:le.a.Container},l.a.createElement(L,{local:this.createLocal(),locationPicked:this.state.locationPicked}),l.a.createElement(I,{locationPicked:this.state.locationPicked,handleDialogOpen:this.handleDialogOpen}))),l.a.createElement(ae,{dialog:this.state.dialog,dialogType:this.state.dialogType,selectedLocation:this.state.selectedLocation,selectedLocationError:this.state.selectedLocationError,locations:this.state.locations,locationPicked:this.state.locationPicked,handleOpenLocationData:this.handleOpenLocationData,handleClearLocations:this.handleClearLocations,handleDialogClose:this.handleDialogClose,handleKeyPress:this.handleKeyPress,onChange:this.handleLocationChange,handleSubmit:this.handleSubmit,handleDelete:this.handleDelete}))}}]),t}(l.a.Component),re=a(163),oe=a(164),ce=a(175),se=a(49),ue=a.n(se),me=a(93),de=a.n(me);function he(e){var t=e.alarms,a=e.edit,n=e.handleAlarmEdit,i=e.handleAlarmDelete,r=e.handleSwitchChange;return l.a.createElement(J.a,{className:ue.a.List},0===t.length?l.a.createElement(K.a,{className:ue.a.Center},l.a.createElement(V.a,{primary:"No alarms found. Please add alarm."})):t.map((function(e){return l.a.createElement(K.a,{key:e.id,divider:!0},l.a.createElement(V.a,{children:l.a.createElement(_.a,{className:!0===e.active?ue.a.Active:ue.a.Inactive,variant:"h4"},"".concat(e.hours>=0&&e.hours<10?String("0".concat(e.hours)):e.hours,":").concat(e.minutes>=0&&e.minutes<10?String("0".concat(e.minutes)):e.minutes)),secondary:e.label}),l.a.createElement(re.a,{edge:"end"},!0===a?l.a.createElement(l.a.Fragment,null,l.a.createElement(oe.a,{onClick:function(){return n(e)},className:ue.a.GreyBtn,"aria-label":"Edit ".concat(e.label," alarm")},l.a.createElement(de.a,null)),l.a.createElement(oe.a,{onClick:function(){return i(e)},className:ue.a.RedBtn,"aria-label":"Delete ".concat(e.label," alarm")},l.a.createElement(x.a,null))):l.a.createElement(ce.a,{size:"medium",color:"primary",onChange:function(){return r(e)},checked:!0===e.active})))})))}var pe=a(60),Ee=a.n(pe);function fe(e){var t=e.alarms,a=e.edit,n=e.handleDialogOpen,i=e.handleEdit;return l.a.createElement(w.a,{timeout:500,in:!0},l.a.createElement(v.a,{className:Ee.a.Paper,variant:"outlined"},l.a.createElement(B.a,{title:0===t.length?"":"View Locations","aria-label":"View Locations",placement:"top"},l.a.createElement("span",null,l.a.createElement(T.a,{"aria-label":"View Locations",onClick:i,className:0===t.length?"":!0===a?Ee.a.PrimaryBtn:Ee.a.BlackBtn,size:"large",disabled:0===t.length},"Edit"))),l.a.createElement(B.a,{title:"Add Alarm","aria-label":"Add Alarm",placement:"top"},l.a.createElement(T.a,{"aria-label":"Add Alarm",onClick:function(){return n("Add")},className:Ee.a.BlackBtn,size:"large"},l.a.createElement(R.a,null)))))}var ge=a(168),ve=a(22),Se=a.n(ve),be=a(48),ye=a.n(be),_e=a(47),Ce=a.n(_e);function ke(e){var t=e.alarmPicked,a=e.hours,n=e.minutes,i=e.handleTime,r=e.onChangeTextfield,o=e.handleDialogClose,c=e.handleSave,s=e.handleSaveEdit;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,null,l.a.createElement("div",{className:Se.a.Time},l.a.createElement("div",{className:Se.a.TimeGroup},l.a.createElement(_.a,{variant:"overline",align:"center"},"Hours"),l.a.createElement(B.a,{className:Se.a.Tooltip,title:23===a?"":"Add 1 hour","aria-label":"Add 1 hour",placement:"top"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:a>=0&&a<23?function(){return i("Add","Hour")}:i(),className:a>=0&&a<23?Se.a.GreyBtn:"",variant:"outlined",size:"medium",fullWidth:!0,disabled:!(a>=0&&a<23)},l.a.createElement(Ce.a,null)))),l.a.createElement(_.a,{variant:"h3",color:"primary",align:"center"},a>=0&&a<10?String("0".concat(a)):a),l.a.createElement(B.a,{className:Se.a.Tooltip,title:0===a?"":"Subtract 1 hour","aria-label":"Subtract 1 hour",placement:"bottom"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:0===a?i():function(){return i("Subtract","Hour")},className:0===a?"":Se.a.GreyBtn,variant:"outlined",size:"medium",fullWidth:!0,disabled:0===a},l.a.createElement(ye.a,null))))),l.a.createElement(ge.a,{mt:3},l.a.createElement(_.a,{variant:"h3",color:"primary",align:"center"},":")),l.a.createElement("div",{className:Se.a.TimeGroup},l.a.createElement(_.a,{variant:"overline",align:"center"},"Minutes"),l.a.createElement(B.a,{className:Se.a.Tooltip,title:59===n?"":"Add 1 minute","aria-label":"Add 1 minute",placement:"top"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:n>=0&&n<59?function(){return i("Add","Minute")}:i(),className:n>=0&&n<59?Se.a.GreyBtn:"",variant:"outlined",size:"medium",fullWidth:!0,disabled:!(n>=0&&n<59)},l.a.createElement(Ce.a,null)))),l.a.createElement(_.a,{variant:"h3",color:"primary",align:"center"},n>=0&&n<10?String("0".concat(n)):n),l.a.createElement(B.a,{className:Se.a.Tooltip,title:0===n?"":"Subtract 1 minute","aria-label":"Subtract 1 minute",placement:"bottom"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:0===n?i():function(){return i("Subtract","Minute")},className:0===n?"":Se.a.GreyBtn,variant:"outlined",size:"medium",fullWidth:!0,disabled:0===n},l.a.createElement(ye.a,null)))))),l.a.createElement(ge.a,{m:3}),l.a.createElement(z.a,{label:"Label",placeholder:null===t?'Try "Work"':t.label,type:"string",size:"small",variant:"outlined",color:"primary",fullWidth:!0,onChange:r})),l.a.createElement(F.a,{disableSpacing:!0},l.a.createElement(T.a,{className:Se.a.GreyBtn,onClick:o},"Cancel"),l.a.createElement(T.a,{onClick:null===t?c:function(){return s(t)},color:"primary"},"Save")))}var Le=a(78),we=a.n(Le);function Be(e){var t=e.alarmPicked,a=e.handleDialogClose,n=e.handleDelete;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.a,null,l.a.createElement(Z.a,null,"Are you sure you want to delete ",t.label)),l.a.createElement(F.a,{disableSpacing:!0},l.a.createElement(T.a,{className:we.a.GreyBtn,onClick:a},"No"),l.a.createElement(T.a,{className:we.a.RedBtn,onClick:function(){return n(t.id)}},"Yes")))}var Te=a(71),De=a.n(Te);function Ae(e){var t=e.alarmPicked,a=e.handleStop;return l.a.createElement(J.a,{className:De.a.List},l.a.createElement(K.a,{button:!0,onClick:function(){return a(t)}},l.a.createElement(V.a,{className:"".concat(De.a.ListBtn," ").concat(De.a.RedBtn),align:"center",primary:"Stop"})))}function Ne(e){var t=e.alarmPicked,a=e.dialog,n=e.dialogType,i=e.hours,r=e.minutes,o=e.handleTime,c=e.onChangeTextfield,s=e.handleSave,u=e.handleDialogClose,m=e.handleDelete,d=e.handleSaveEdit,h=e.handleStop;return l.a.createElement(M.a,{open:a,keepMounted:!0,onClose:u,"aria-labelledby":"alertDialogTitle",fullWidth:!0,maxWidth:"xs"},l.a.createElement(j.a,{id:"alertDialogTitle"},"Add"===n?"Add new Alarm":"Del"===n?"Delete?":"Edit"===n?"Edit Alarm":"".concat(null===t?"Alarm":t.label," Complete!")),"Add"===n?l.a.createElement(ke,{alarmPicked:t,hours:i,minutes:r,handleTime:o,onChangeTextfield:c,handleDialogClose:u,handleSave:s}):"Del"===n?l.a.createElement(Be,{alarmPicked:t,handleDialogClose:u,handleDelete:m}):"Edit"===n?l.a.createElement(ke,{alarmPicked:t,hours:i,minutes:r,handleTime:o,onChangeTextfield:c,handleDialogClose:u,handleSaveEdit:d}):l.a.createElement(Ae,{alarmPicked:t,handleStop:h}))}var Oe=a(96),Ge=a.n(Oe),xe=a(70),Pe=a.n(xe),Re=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).handleAlarmComplete=function(e){a.interval=setInterval((function(){var t=new Date,n=t.getHours(),l=t.getMinutes();e.filter((function(e){return!0===e.active})).forEach((function(e){e.hours===n&&e.minutes===l&&(a.playSound(),a.handleDialogOpen("Finish",e))}))}),1e3)},a.playSound=function(){clearInterval(a.interval),a.audio.play(),a.audio.loop=!0},a.handleChangeTextfield=function(e){a.setState({newAlarmLabel:e.target.value})},a.handleAlarmEdit=function(e){a.setState({alarmPicked:e}),a.handleDialogOpen("Edit",e)},a.handleAlarmDelete=function(e){a.setState({alarmPicked:e}),a.handleDialogOpen("Del")},a.handleSwitchChange=function(e){var t=Object(m.a)(a.state.alarms),n=t.filter((function(t){return t.id===e.id&&(t.active=!t.active),t}));t.forEach((function(e){e.id===n.id&&(e=n)})),localStorage.setItem("Alarms",JSON.stringify(t)),a.setState({alarms:t})},a.handleTime=function(e,t){var n=a.state.newAlarmHours,l=a.state.newAlarmMinutes;if("Add"===e)switch(t){case"Hour":n++,a.setState((function(e){return{newAlarmHours:n}}));break;case"Minute":l++,a.setState((function(e){return{newAlarmMinutes:l}}))}else if("Subtract"===e)switch(t){case"Hour":n--,a.setState((function(e){return{newAlarmHours:n}}));break;case"Minute":l--,a.setState((function(e){return{newAlarmMinutes:l}}))}},a.handleSave=function(){var e=a.state.newAlarmHours,t=a.state.newAlarmMinutes,n=""===a.state.newAlarmLabel?"Label":a.state.newAlarmLabel,l=Object(m.a)(a.state.alarms),i={id:Math.random(),label:n,hours:e,minutes:t,active:!0};l.push(i),localStorage.setItem("Alarms",JSON.stringify(l)),a.setState({alarms:l,newAlarmHours:0,newAlarmMinutes:0,newAlarmLabel:""}),a.handleDialogClose()},a.handleSaveEdit=function(e){var t=a.state.newAlarmHours,n=a.state.newAlarmMinutes,l=a.state.newAlarmLabel,i=Object(m.a)(a.state.alarms),r=i.filter((function(a){return a.id===e.id&&(a.hours=t,a.minutes=n,a.label=l),a}));i.forEach((function(e){e.id===r.id&&(e=r)})),localStorage.setItem("Alarms",JSON.stringify(i)),a.setState((function(e){return{alarms:i,newAlarmHours:0,newAlarmMinutes:0,newAlarmLabel:"",edit:!e.edit}})),a.handleDialogClose()},a.handleEdit=function(){a.setState((function(e){return{edit:!e.edit}}))},a.handleDelete=function(e){var t=e,n=Object(m.a)(a.state.alarms).filter((function(e){return e.id!==t}));localStorage.setItem("Alarms",JSON.stringify(n)),a.setState({alarms:n}),a.handleDialogClose()},a.handleStop=function(e){a.audio.pause();var t=Object(m.a)(a.state.alarms),n=t.filter((function(t){return t.id===e.id&&(t.active=!t.active),t}));t.forEach((function(e){e.id===n.id&&(e=n)})),localStorage.setItem("Alarms",JSON.stringify(t)),a.setState({alarms:t}),a.handleDialogClose()},a.handleDialogOpen=function(e,t){a.setState((function(t){return{dialog:!t.dialog,dialogType:e}})),"Finish"===e&&a.setState({alarmPicked:t}),"Edit"===e&&a.setState({newAlarmHours:t.hours,newAlarmMinutes:t.minutes,newAlarmLabel:t.label})},a.handleDialogClose=function(){a.setState((function(e){return{alarmPicked:null,dialog:!e.dialog,dialogType:""}}))},a.state={alarms:[],alarmPicked:null,edit:!1,newAlarmHours:0,newAlarmMinutes:0,newAlarmLabel:"",dialog:!1,dialogType:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){clearInterval(this.interval),this.audio=new Audio(Pe.a);var e=JSON.parse(localStorage.getItem("Alarms")||"[]");this.handleAlarmComplete(e),!1===this.state.dialog&&this.audio.pause(),this.setState({alarms:e})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{location:1}),l.a.createElement(g.a,{timeout:500,in:!0},l.a.createElement("div",{className:Ge.a.Container},l.a.createElement(he,{alarms:this.state.alarms,edit:this.state.edit,handleAlarmEdit:this.handleAlarmEdit,handleAlarmDelete:this.handleAlarmDelete,handleSwitchChange:this.handleSwitchChange}),l.a.createElement(fe,{alarms:this.state.alarms,edit:this.state.edit,handleEdit:this.handleEdit,handleDialogOpen:this.handleDialogOpen}))),l.a.createElement(Ne,{alarmPicked:this.state.alarmPicked,dialog:this.state.dialog,dialogType:this.state.dialogType,hours:this.state.newAlarmHours,minutes:this.state.newAlarmMinutes,onChangeTextfield:this.handleChangeTextfield,handleTime:this.handleTime,handleDialogClose:this.handleDialogClose,handleSave:this.handleSave,handleSaveEdit:this.handleSaveEdit,handleStop:this.handleStop,handleDelete:this.handleDelete}))}}]),t}(l.a.Component),Ie=a(23),Me=a.n(Ie),je=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).handleLap=function(){var e=Object(m.a)(a.state.laps),t={id:Math.random(),index:e.length+1,seconds:a.state.seconds,minutes:a.state.minutes};e.unshift(t),a.setState({laps:e}),a.calculateQuickest(t,e)},a.calculateQuickest=function(e,t){if(t.length>1){var n=t[1],l=(a.state.quickest.minutes>0?60*a.state.quickest.minutes:0)+a.state.quickest.seconds,i=(a.state.slowest.minutes>0?60*a.state.slowest.minutes:0)+a.state.slowest.seconds,r=(n.minutes>0?60*n.minutes:0)+n.seconds,o=(e.minutes>0?60*e.minutes:0)+e.seconds-r;return o<(null===a.state.quickestSeconds?l:a.state.quickestSeconds)?void a.setState({quickest:e,quickestSeconds:o}):o>i?void a.setState({slowest:e}):void 0}a.setState({quickest:e,slowest:e})},a.handleUpdateStopwatch=function(e){var t=Object(m.a)(a.state.laps).filter((function(t){return t.index<=e})),n=t[0],l=!0===t.find((function(e){return e.id===a.state.quickest.id}))?a.state.quickest:t[t.length-1],i=!0===t.find((function(e){return e.id===a.state.slowest.id}))?a.state.slowest:t[t.length-1];a.setState((function(e){return{stopwatchOn:!1!==e.stopwatchOn&&!e.stopwatchOn,seconds:n.seconds,minutes:n.minutes,laps:t,quickest:l,quickestSeconds:null,slowest:i}})),clearInterval(a.interval)},a.handleReset=function(){a.setState({stopwatchOn:!1,seconds:0,minutes:0,laps:[],quickest:null,slowest:null})},a.handleStop=function(){clearInterval(a.interval),a.setState((function(e){return{stopwatchOn:!e.stopwatchOn}}))},a.handleStart=function(){var e=a.state.seconds,t=a.state.minutes;a.interval=setInterval((function(){++e>=60&&(e=0,t++),a.setState({seconds:e,minutes:t})}),1e3),a.setState((function(e){return{stopwatchOn:!e.stopwatchOn}}))},a.state={stopwatchOn:!1,seconds:0,minutes:0,laps:[],quickest:null,quickestSeconds:null,slowest:null},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){this.handleReset(),clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{location:2}),l.a.createElement(g.a,{timeout:500,in:!0},l.a.createElement("div",{className:Me.a.Container},l.a.createElement("div",{className:Me.a.Time},l.a.createElement(_.a,{variant:"h1",color:"primary",align:"center"},this.state.minutes>=0&&this.state.minutes<10?String("0".concat(this.state.minutes)):this.state.minutes),l.a.createElement(_.a,{variant:"h2",color:"primary",align:"center"},":"),l.a.createElement(_.a,{variant:"h1",color:"primary",align:"center"},this.state.seconds>=0&&this.state.seconds<10?String("0".concat(this.state.seconds)):this.state.seconds)),l.a.createElement(w.a,{timeout:500,in:!0},l.a.createElement("div",{className:Me.a.ButtonGroup},!0===this.state.stopwatchOn?l.a.createElement(T.a,{onClick:this.handleLap,className:Me.a.GreyBtn,variant:"outlined",size:"large"},"Lap"):l.a.createElement(T.a,{onClick:this.handleReset,className:Me.a.GreyBtn,variant:"outlined",size:"large"},"Reset"),!0===this.state.stopwatchOn?l.a.createElement(T.a,{onClick:this.handleStop,className:Me.a.RedBtn,variant:"outlined",size:"large"},"Stop"):l.a.createElement(T.a,{onClick:this.handleStart,className:Me.a.GreenBtn,variant:"outlined",size:"large"},"Start"))),l.a.createElement(J.a,{className:Me.a.List},this.state.laps.map((function(t){return l.a.createElement(K.a,{key:t.id,button:!0,divider:!0,onClick:function(){return e.handleUpdateStopwatch(t.index)}},l.a.createElement(V.a,{align:"left",secondary:"Lap ".concat(t.index)}),l.a.createElement(V.a,{align:"right",primary:"".concat(t.minutes>=0&&t.minutes<10?String("0".concat(t.minutes)):t.minutes,":").concat(t.seconds>=0&&t.seconds<10?String("0".concat(t.seconds)):t.seconds),className:t.id===e.state.quickest.id&&t.id===e.state.slowest.id?Me.a.Normal:t.id===e.state.quickest.id?Me.a.Fastest:t.id===e.state.slowest.id?Me.a.Slowest:Me.a.Normal}))}))))))}}]),t}(l.a.Component),He=a(12),ze=a.n(He);function Fe(e){var t=e.timerOn,a=e.seconds,n=e.minutes,i=e.hours,r=e.handleTime;return l.a.createElement("div",{className:ze.a.Time},l.a.createElement("div",{className:ze.a.TimeGroup},l.a.createElement(_.a,{variant:"overline",align:"center"},"Hours"),l.a.createElement(B.a,{className:ze.a.Tooltip,title:23===i?"":"Add 1 hour","aria-label":"Add 1 hour",placement:"top"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:i>=0&&i<23?function(){return r("Add","Hour")}:r(),className:!0===t?ze.a.Hidden:i>=0&&i<23?ze.a.GreyBtn:"",variant:"outlined",size:"large",fullWidth:!0,disabled:!(i>=0&&i<23)},l.a.createElement(Ce.a,null)))),l.a.createElement(_.a,{variant:"h2",color:"primary",align:"center"},i>=0&&i<10?String("0".concat(i)):i),l.a.createElement(B.a,{className:ze.a.Tooltip,title:0===i?"":"Subtract 1 hour","aria-label":"Subtract 1 hour",placement:"bottom"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:0===i?r():function(){return r("Subtract","Hour")},className:!0===t?ze.a.Hidden:0===i?"":ze.a.GreyBtn,variant:"outlined",size:"large",fullWidth:!0,disabled:0===i},l.a.createElement(ye.a,null))))),l.a.createElement(ge.a,{mt:3},l.a.createElement(_.a,{variant:"h2",color:"primary",align:"center"},":")),l.a.createElement("div",{className:ze.a.TimeGroup},l.a.createElement(_.a,{variant:"overline",align:"center"},"Minutes"),l.a.createElement(B.a,{className:ze.a.Tooltip,title:59===n?"":"Add 1 minute","aria-label":"Add 1 minute",placement:"top"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:n>=0&&n<59?function(){return r("Add","Minute")}:r(),className:!0===t?ze.a.Hidden:n>=0&&n<59?ze.a.GreyBtn:"",variant:"outlined",size:"large",fullWidth:!0,disabled:!(n>=0&&n<59)},l.a.createElement(Ce.a,null)))),l.a.createElement(_.a,{variant:"h2",color:"primary",align:"center"},n>=0&&n<10?String("0".concat(n)):n),l.a.createElement(B.a,{className:ze.a.Tooltip,title:0===n?"":"Subtract 1 minute","aria-label":"Subtract 1 minute",placement:"bottom"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:0===n?r():function(){return r("Subtract","Minute")},className:!0===t?ze.a.Hidden:0===n?"":ze.a.GreyBtn,variant:"outlined",size:"large",fullWidth:!0,disabled:0===n},l.a.createElement(ye.a,null))))),l.a.createElement(ge.a,{mt:3},l.a.createElement(_.a,{variant:"h2",color:"primary",align:"center"},":")),l.a.createElement("div",{className:ze.a.TimeGroup},l.a.createElement(_.a,{variant:"overline",align:"center"},"Seconds"),l.a.createElement(B.a,{className:ze.a.Tooltip,title:59===a?"":"Add 1 second","aria-label":"Add 1 second",placement:"top"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:a>=0&&a<59?function(){return r("Add","Second")}:r(),className:!0===t?ze.a.Hidden:a>=0&&a<59?ze.a.GreyBtn:"",variant:"outlined",size:"large",fullWidth:!0,disabled:!(a>=0&&a<59)},l.a.createElement(Ce.a,null)))),l.a.createElement(_.a,{variant:"h2",color:"primary",align:"center"},a>=0&&a<10?String("0".concat(a)):a),l.a.createElement(B.a,{className:ze.a.Tooltip,title:0===a?"":"Subtract 1 second","aria-label":"Subtract 1 second",placement:"bottom"},l.a.createElement("span",null,l.a.createElement(T.a,{onClick:0===a?r():function(){return r("Subtract","Second")},className:!0===t?ze.a.Hidden:0===a?"":ze.a.GreyBtn,variant:"outlined",size:"large",fullWidth:!0,disabled:0===a},l.a.createElement(ye.a,null))))))}var We=a(30),qe=a.n(We);function Ue(e){var t=e.timerOn,a=e.seconds,n=e.minutes,i=e.hours,r=e.handleCancel,o=e.handleStop,c=e.handleStart;return l.a.createElement(w.a,{timeout:500,in:!0},l.a.createElement("div",{className:qe.a.ButtonGroup},l.a.createElement(T.a,{onClick:r,className:"".concat(qe.a.GreyBtn," ").concat(qe.a.Left),variant:"outlined",size:"large"},"Cancel"),!0===t?l.a.createElement(T.a,{onClick:o,className:"".concat(qe.a.RedBtn," ").concat(qe.a.Right),variant:"outlined",size:"large"},"Stop"):l.a.createElement(T.a,{onClick:c,className:0===a&&0===n&&0===i?"".concat(qe.a.GreyBtn," ").concat(qe.a.Right):"".concat(qe.a.GreenBtn," ").concat(qe.a.Right),variant:"outlined",size:"large",disabled:0===a&&0===n&&0===i},"Start")))}var Je=a(56),Ke=a.n(Je);function Ve(e){var t=e.dialog,a=e.handleCloseDialog,n=e.handleRepeat;return l.a.createElement(M.a,{open:t,keepMounted:!0,onClose:a,"aria-labelledby":"alertDialogTitle"},l.a.createElement(j.a,{id:"alertDialogTitle"},"Timer Complete!"),l.a.createElement(J.a,{className:Ke.a.List},l.a.createElement(K.a,{button:!0,onClick:a},l.a.createElement(V.a,{className:"".concat(Ke.a.ListBtn," ").concat(Ke.a.RedBtn),align:"center",primary:"Stop"})),l.a.createElement(K.a,{button:!0,onClick:n},l.a.createElement(V.a,{className:"".concat(Ke.a.ListBtn," ").concat(Ke.a.GreyBtn),align:"center",primary:"Repeat"}))))}var Qe=a(97),Ye=a.n(Qe),Xe=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).handleTime=function(e,t){var n=a.state.hours,l=a.state.minutes,i=a.state.seconds;if("Add"===e)switch(t){case"Hour":n++,a.setState((function(e){return{hours:n}}));break;case"Minute":l++,a.setState((function(e){return{minutes:l}}));break;case"Second":i++,a.setState((function(e){return{seconds:i}}))}else if("Subtract"===e)switch(t){case"Hour":n--,a.setState((function(e){return{hours:n}}));break;case"Minute":l--,a.setState((function(e){return{minutes:l}}));break;case"Second":i--,a.setState((function(e){return{seconds:i}}))}},a.handleCancel=function(){clearInterval(a.interval),a.setState({timerOn:!1,seconds:0,minutes:0,hours:0,dialog:!1,timer:null})},a.handleStop=function(){clearInterval(a.interval),a.setState((function(e){return{timerOn:!e.timerOn}}))},a.handleStart=function(){var e=a.state.seconds,t=a.state.minutes,n=a.state.hours,l={seconds:e,minutes:t,hours:n};a.setState({timer:l}),a.interval=setInterval((function(){0===n&&0===t&&0===e?(e=0,t=0,n=0):0!==t&&0===e?(e=60,t--):0!==n&&0===t&&0===e&&(e=60,t=59,n--),e--,a.setState({seconds:e,minutes:t,hours:n})}),1e3),a.setState((function(e){return{timerOn:!e.timerOn}}))},a.handleFinished=function(){a.audio=new Audio(Pe.a),a.audio.play(),a.audio.loop=!0,a.setState((function(e){return{dialog:!e.dialog}}))},a.handleCloseDialog=function(){a.audio.pause(),a.handleCancel()},a.handleRepeat=function(){a.audio.pause();var e=a.state.timer,t=e.seconds,n=e.minutes,l=e.hours;a.setState((function(e){return{dialog:!e.dialog,seconds:t,minutes:n,hours:l}}))},a.state={timerOn:!1,seconds:0,minutes:0,hours:0,dialog:!1,timer:null},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillUnmount",value:function(){this.handleCancel()}},{key:"componentDidUpdate",value:function(){0===this.state.seconds&&0===this.state.minutes&&0===this.state.hours&&!0===this.state.timerOn&&(clearInterval(this.interval),this.setState({timerOn:!1}),this.handleFinished())}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{location:3}),l.a.createElement(g.a,{timeout:500,in:!0},l.a.createElement("div",{className:Ye.a.Container},l.a.createElement(Fe,{timerOn:this.state.timerOn,seconds:this.state.seconds,minutes:this.state.minutes,hours:this.state.hours,handleTime:this.handleTime}),l.a.createElement(Ue,{timerOn:this.state.timerOn,seconds:this.state.seconds,minutes:this.state.minutes,hours:this.state.hours,handleCancel:this.handleCancel,handleStop:this.handleStop,handleStart:this.handleStart}),l.a.createElement(Ve,{dialog:this.state.dialog,handleCloseDialog:this.handleCloseDialog,handleRepeat:this.handleRepeat}))))}}]),t}(l.a.Component),Ze=a(165),$e=a(166),et=a(98),tt=a.n(et),at=Object(c.a)({palette:{primary:{main:"#1565C0"}}});a(120);r.a.render(l.a.createElement((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null),l.a.createElement(Ze.a,{theme:at},l.a.createElement(s.a,null,l.a.createElement($e.a,{className:tt.a.Container,maxWidth:"md"},l.a.createElement(u.a,{path:"/timer"},l.a.createElement(Xe,null)),l.a.createElement(u.a,{path:"/stopwatch"},l.a.createElement(je,null)),l.a.createElement(u.a,{path:"/alarm"},l.a.createElement(Re,null)),l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(ie,null))))))}),null),document.getElementById("root"))},22:function(e,t,a){e.exports={Time:"Add_Time__2C8nD",TimeGroup:"Add_TimeGroup__3yF0o",Tooltip:"Add_Tooltip__2bulp",Hidden:"Add_Hidden__2zTFK",GreyBtn:"Add_GreyBtn__1LYU1"}},23:function(e,t,a){e.exports={Container:"Stopwatch_Container__2RiYZ",Time:"Stopwatch_Time__2bssB",ButtonGroup:"Stopwatch_ButtonGroup__iNOI3",GreyBtn:"Stopwatch_GreyBtn__1LdxN",RedBtn:"Stopwatch_RedBtn__Naygb",GreenBtn:"Stopwatch_GreenBtn__1_qdm",List:"Stopwatch_List__3VHPd",Fastest:"Stopwatch_Fastest__tJ_t0",Slowest:"Stopwatch_Slowest__23BLV",Normal:"Stopwatch_Normal__YubiQ"}},30:function(e,t,a){e.exports={ButtonGroup:"ButtonGroup_ButtonGroup__1UuWO",Right:"ButtonGroup_Right__2RsMB",Left:"ButtonGroup_Left__2KkSW",GreyBtn:"ButtonGroup_GreyBtn__Rhoz0",RedBtn:"ButtonGroup_RedBtn__3EG6X",GreenBtn:"ButtonGroup_GreenBtn__hvW-6"}},49:function(e,t,a){e.exports={List:"List_List__-K-mC",Active:"List_Active__g6I_i",Inactive:"List_Inactive__A-SXp",Center:"List_Center__3QQFb",GreyBtn:"List_GreyBtn__3l5UH",RedBtn:"List_RedBtn__23jjK"}},56:function(e,t,a){e.exports={GreyBtn:"Dialog_GreyBtn__fDAOq",RedBtn:"Dialog_RedBtn__26bOX",ListBtn:"Dialog_ListBtn__2ngcC"}},58:function(e,t,a){e.exports={Content:"Content_Content__th24N",Title:"Content_Title__2O-zx",Subtitle:"Content_Subtitle__2I8Qq"}},59:function(e,t,a){e.exports={Paper:"Paper_Paper__2pVgK",BlackBtn:"Paper_BlackBtn__3gMhs",RedBtn:"Paper_RedBtn__2muQn"}},60:function(e,t,a){e.exports={Paper:"Paper_Paper__1sLq9",BlackBtn:"Paper_BlackBtn__3YN1X",PrimaryBtn:"Paper_PrimaryBtn__1ykNR"}},70:function(e,t,a){e.exports=a.p+"static/media/beep.5a020f67.wav"},71:function(e,t,a){e.exports={RedBtn:"Alarm_RedBtn__1N51d",ListBtn:"Alarm_ListBtn__2g3yC"}},76:function(e,t,a){e.exports={GreyBtn:"List_GreyBtn__3dvqU",RedBtn:"List_RedBtn__2JUF2"}},77:function(e,t,a){e.exports={GreyBtn:"Delete_GreyBtn__1f2R1",RedBtn:"Delete_RedBtn__36zC-"}},78:function(e,t,a){e.exports={GreyBtn:"Delete_GreyBtn__26I1Q",RedBtn:"Delete_RedBtn__3Ts9G"}},91:function(e,t,a){e.exports={GreyBtn:"Add_GreyBtn__AUTUZ"}},92:function(e,t,a){e.exports={Container:"Clock_Container__1nEaK"}},96:function(e,t,a){e.exports={Container:"Alarm_Container__lG4nV"}},97:function(e,t,a){e.exports={Container:"Timer_Container__2BZcZ"}},98:function(e,t,a){e.exports={Container:"App_Container__2MIaf"}}},[[110,1,2]]]);
//# sourceMappingURL=main.d4bcba8d.chunk.js.map