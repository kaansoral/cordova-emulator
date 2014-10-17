var device={name:"Emulator (WEB)",uuid:"8",platform:"web",version:"1",model:"gg",cordova:"0"};
var Connection={"None":0}
function Media(path)
{
	this.play=function(){};
}
function emulator_fire_event(name)
{
	document.dispatchEvent(new CustomEvent(name,{}));
}
navigator.notification={
	"alert":function(msg,f,btn){ alert(msg); },
	"confirm":function(msg,f,title,buttons){ alert("Confirmation TITLE '"+title+"' MESSAGE '"+msg+"'. Pushing all buttons."); f(1); f(2); },
	}
window.plugins={
	"pushNotification":{"register":function(){ console.log("window.plugins.pushNotification.register"); }}
};
navigator.network={"connection":{"type":"local"}}
setTimeout(function(){ emulator_fire_event("deviceready"); },2000);
setTimeout(function(){ emulator_fire_event("online"); },1500);
