(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(52)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a(4),s=a(3),o=a(5),i=a(0),l=a.n(i),u=a(6),m=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).changeName=function(t){!0===/^[A-Z\u0410-\u042f\u0401\s-]+$/i.test(t.target.value)?(e.setState({textNameCorrect:!0,textName:t.target.value}),e.firstRender=!0):(e.setState({textNameCorrect:!1,textName:t.target.value}),e.firstRender=!1),e.props.checkButton(e.firstRender,"inputName")},e.state={textName:"",textNameCorrect:!0},e.firstRender=!1,e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.textName,a=this.state.textNameCorrect,n=a?"":l.a.createElement("label",{htmlFor:"InputName",className:"showErrorText"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f.");return l.a.createElement("div",{className:"containerInputName"},l.a.createElement("label",{className:"paddingLabel",htmlFor:"InputName"},"\u0424\u0418\u041e"),l.a.createElement("input",{id:"InputName",className:a?"InputName":"errorImage",value:t,placeholder:"\u0422\u043e\u043b\u044c\u043a\u043e \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0430",onChange:function(t){return e.changeName(t)}}),n)}}]),t}(l.a.Component),h=a(16),d=a.n(h),p=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).changeNumberBlur=function(t){11===t.target.value.replace(/\D/g,"").length?(e.setState({numberCorrect:!0}),e.firstRender=!0):(e.setState({numberCorrect:!1}),e.firstRender=!1),e.props.checkButton(e.firstRender,"inputNumber")},e.changeNumberFocus=function(t){11===t.target.value.replace(/\D/g,"").length?(e.setState({numberCorrect:!0}),e.firstRender=!0):e.firstRender=!1,e.props.checkButton(e.firstRender,"inputNumber")},e.state={numberCorrect:!0,numberFocus:!1},e.firstRender=!1,e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.numberCorrect?"":l.a.createElement("label",{htmlFor:"InputNumber",className:"showErrorText"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430");return l.a.createElement("div",{className:"containerInputNumber"},l.a.createElement("label",{className:"paddingLabel",htmlFor:"InputNumber"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),l.a.createElement(d.a,{id:"InputNumber",mask:"+7 (999) 999-99-99",className:"InputNumber",placeholder:"+7 (___) ___-__-__",onChange:function(t){return e.changeNumberFocus(t)},onBlur:function(t){return e.changeNumberBlur(t)}}),t)}}]),t}(l.a.Component),b=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).changeAddress=function(t){t.target.value.length>0?(e.setState({textAddressCorrect:!0,textAddress:t.target.value}),e.firstRender=!0):(e.setState({textAddressCorrect:!1,textAddress:t.target.value}),e.firstRender=!1),e.props.checkButton(e.firstRender,"inputAddress")},e.state={textAddress:"",textAddressCorrect:!0},e.firstRender=!1,e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.textAddress,a=this.state.textAddressCorrect,n=a?"":l.a.createElement("label",{htmlFor:"InputAddress",className:"showErrorText"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438.");return l.a.createElement("div",{className:"containerInputAddress"},l.a.createElement("label",{className:"paddingLabel",htmlFor:"InputAddress"},"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),l.a.createElement("input",{id:"InputAddress",className:a?"InputAddress":"errorAddress",value:t,placeholder:"\u0413\u043e\u0440\u043e\u0434, \u0443\u043b\u0438\u0446\u0430, \u0434\u043e\u043c",onChange:function(t){return e.changeAddress(t)}}),n)}}]),t}(l.a.Component),k=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).changeComment=function(t){e.setState({textComment:t.target.value})},e.state={textComment:""},e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.textComment;return l.a.createElement("div",{className:"containerInputComment"},l.a.createElement("label",{className:"paddingLabel",htmlFor:"InputComment"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),l.a.createElement("textarea",{id:"InputComment",className:"textArea",value:t,onChange:function(t){return e.changeComment(t)}}," "))}}]),t}(l.a.Component),f=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).checkButton=function(t,a){"inputName"===a?e.inputName=t:"inputAddress"===a?e.inputAddress=t:"inputNumber"===a&&(e.inputNumber=t),e.stateButton()},e.stateButton=function(){e.inputName&&e.inputAddress&&e.inputNumber?e.setState({stateButton:!0}):e.setState({stateButton:!1})},e.state={stateButton:!1},e.inputName=!1,e.inputAddress=!1,e.inputNumber=!1,e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.showContent?"showContentDelivery":"hideContent"},l.a.createElement("div",{className:"containerOuter"},l.a.createElement("div",{className:"containerInner"},l.a.createElement(m,{checkButton:this.checkButton}),l.a.createElement(p,{checkButton:this.checkButton})),l.a.createElement(b,{checkButton:this.checkButton}),l.a.createElement(k,null)),l.a.createElement("div",{className:"containerButtonCheckout"},l.a.createElement("button",{className:this.state.stateButton?"checkout":"checkoutOff"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437")))}}]),t}(l.a.Component),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).checkBoxSelectedInput=function(e){a.check(e.target.value)},a.check=function(e){"radio-1"===e?a.props.stateMarkers("radio-1"):"radio-2"===e&&a.props.stateMarkers("radio-2")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"radioComponentOuter"},l.a.createElement("div",{className:"radioComponent"},l.a.createElement("input",{id:"radio-1",type:"radio",value:"radio-1",checked:"radio-1"===this.props.checkBoxSelected,onChange:function(t){return e.checkBoxSelectedInput(t)}}),l.a.createElement("label",{htmlFor:"radio-1",className:"addressPickup"},"\u0443\u043b. \u042e\u043d\u043e\u0441\u0442\u0438, 5, \u0417\u0435\u043b\u0435\u043d\u043e\u0433\u0440\u0430\u0434, \u041c\u043e\u0441\u043a\u0432\u0430, 124482")),l.a.createElement("div",{className:"radioComponent"},l.a.createElement("input",{id:"radio-2",type:"radio",value:"radio-2",checked:"radio-2"===this.props.checkBoxSelected,onChange:function(t){return e.checkBoxSelectedInput(t)}}),l.a.createElement("label",{htmlFor:"radio-2",className:"addressPickup"},"\u043a\u043e\u0440\u043f\u0443\u0441 1549, \u0417\u0435\u043b\u0435\u043d\u043e\u0433\u0440\u0430\u0434, \u041c\u043e\u0441\u043a\u0432\u0430, 124683")))}}]),t}(l.a.Component),N=a(17),C=a.n(N),E=function(e){return l.a.createElement("div",{className:"marker",onClick:e.click},l.a.createElement("svg",{width:"34",height:"40",viewBox:"0 0 34 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M16.6667 38.3333C15.7422 39.7201 15.7413 39.7195 15.7413 39.7195L15.7365 39.7163L15.7254 39.7088L15.6872 39.683C15.6547 39.661 15.6085 39.6293 15.5493 39.5883C15.4309 39.5063 15.2608 39.3869 15.0463 39.232C14.6176 38.9223 14.0106 38.4704 13.2847 37.8923C11.8356 36.7384 9.89898 35.0714 7.95675 33.0212C4.14044 28.9929 0 23.1699 0 16.6667C9.93411e-08 12.2464 1.75595 8.00716 4.88155 4.88155C8.00716 1.75595 12.2464 0 16.6667 0C21.0869 0 25.3262 1.75595 28.4518 4.88155C31.5774 8.00716 33.3333 12.2464 33.3333 16.6667C33.3333 23.1699 29.1929 28.9929 25.3766 33.0212C23.4344 35.0714 21.4978 36.7384 20.0486 37.8923C19.3227 38.4704 18.7158 38.9223 18.287 39.232C18.0726 39.3869 17.9025 39.5063 17.7841 39.5883C17.7249 39.6293 17.6786 39.661 17.6461 39.683L17.6079 39.7088L17.5968 39.7163L17.5933 39.7187C17.5933 39.7187 17.5912 39.7201 16.6667 38.3333ZM16.6667 38.3333L17.5912 39.7201C17.0313 40.0933 16.3011 40.0927 15.7413 39.7195L16.6667 38.3333Z",fill:"#215BF0"}),l.a.createElement("circle",{cx:"16.6666",cy:"16",r:"6",fill:"white"})))},g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).markerIndex=function(e){0===e?a.props.stateMarkers("radio-1"):1===e&&a.props.stateMarkers("radio-2")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.markers.map((function(t,a){return l.a.createElement(E,{click:function(){return e.markerIndex(a)},key:a,lat:t.lat,lng:t.lng})}));return l.a.createElement("div",{className:"googleMapContainer"},l.a.createElement("div",{style:{width:"100%",height:"100%"}},l.a.createElement(C.a,{center:this.props.center,zoom:this.props.zoom},t)))}}]),t}(l.a.Component),O=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(s.a)(t).call(this))).stateMarkers=function(t){"radio-1"===t?e.setState({center:{lat:e.state.markers[0].lat,lng:e.state.markers[0].lng},zoom:14,checkBoxSelected:t}):"radio-2"===t&&e.setState({center:{lat:e.state.markers[1].lat,lng:e.state.markers[1].lng},zoom:14.1,checkBoxSelected:t}),e.stateButton=!0},e.state={markers:[{lat:55.99884,lng:37.223017},{lat:55.977773,lng:37.154761}],center:{lat:55.992698,lng:37.191747},zoom:11,checkBoxSelected:null},e.stateButton=!1,e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.showContent?"showContentPickup":"hideContent"},l.a.createElement(v,{stateMarkers:this.stateMarkers,checkBoxSelected:this.state.checkBoxSelected}),l.a.createElement(g,{stateMarkers:this.stateMarkers,markers:this.state.markers,center:this.state.center,zoom:this.state.zoom}),l.a.createElement("div",{className:"containerButtonCheckout"},l.a.createElement("button",{className:this.stateButton?"checkout":"checkoutOff"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437")))}}]),t}(l.a.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("li",{className:this.props.showTab?"showTab "+this.props.classNameTab:"hideTab "+this.props.classNameTab,onClick:this.props.click},this.props.nameTab)}}]),t}(l.a.Component),x=(a(47),a(48),a(49),a(50),a(51),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={showContentDelivery:!0,showContentTabPickup:!1,showTabDelivery:!0,showTabPickup:!1,nameTabDelivery:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430",nameTabPickup:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437",classNameDelivery:"delivery",classNamePickup:"pickup"},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"containerApp"},l.a.createElement("div",{className:"selectOuter"},l.a.createElement("h1",{className:"selectTab"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438")),l.a.createElement("ul",{className:"containerTabs"},l.a.createElement(j,{showTab:this.state.showTabDelivery,classNameTab:this.state.classNameDelivery,nameTab:this.state.nameTabDelivery,click:function(){return e.setState({showTabDelivery:!0,showTabPickup:!1})}}),l.a.createElement(j,{showTab:this.state.showTabPickup,classNameTab:this.state.classNamePickup,nameTab:this.state.nameTabPickup,click:function(){return e.setState({showTabPickup:!0,showTabDelivery:!1})}})),l.a.createElement(f,{showContent:this.state.showTabDelivery}),l.a.createElement(O,{showContent:this.state.showTabPickup}))}}]),t}(l.a.Component));Object(u.render)(l.a.createElement(x,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.87e5a57b.chunk.js.map