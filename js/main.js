document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	initPushwoosh();
    window.alert = function(message) {
        navigator.vibrate(100);
        navigator.notification.alert(
            message,
            null,
            "BILLY",
            'OK'
        );
    };
}
document.addEventListener('push-notification', function(event) {
    //event.notification is a JSON push notifications payload
    var title = event.notification.title;
 
    //example of obtaining custom data from push notification
    var userData = event.notification.userdata;
 
    console.warn('user data: ' + JSON.stringify(userData));
 
    //we might want to display an alert with push notifications title
    alert(title);
});
function initPushwoosh()
{
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "AIzaSyBTymFKwjZGo_As00yTGD32qC2GXNK3s0o", pw_appid : "30994-56285" });
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
}
$(function(){
	$(document).on("click","#logo", function(){
		goTo("index");
	});
	$(document).on("click", ".nav-xhr", function(e){
        goTo($(this).data("href"));        
    });
});
var yy;
var calendarArray =[];
var monthOffset = [6,7,8,9,10,11,0,1,2,3,4,5];
var monthArray = [["ENE","enero"],["FEB","Febrero"],["MAR","Marzo"],["ABR","Abril"],["MAY","Mayo"],["JUN","Junio"],["JUL","Julio"],["AGO","Agosto"],["SEP","Septiembre"],["OCT","Octubre"],["NOV","Noviembre"],["DIC","Diciembre"]];
var letrasArray = ["L","M","X","J","V","S","D"];
var dayArray = ["7","1","2","3","4","5","6"];
function padresIndex(){
	$(document).on('click','.calendar-day.have-events',activateDay);
	$(document).on('click','.specific-day',activatecalendar);
	$(document).on('click','.calendar-month-view-arrow',offsetcalendar);
	$(window).resize(calendarScale);
	$(".calendar").calendar({
		"2013910": {
			"Mulberry Festival": {
				start: "9.00",
				end: "9.30",
				location: "London"
			}
		}
	});
	calendarSet();
	calendarScale();
}
function padres(){}
function padresDisponibles(){
	$(".nanni").on("click", function(){
		goTo("padresConocela");
	});
}
function padresConocela(){}
function goTo(view){
    $("#app").hide();
    var url = "views/"+view+".html";
    $.get(url, function(html){
        $("#app").html(html).show();
        try{
        	eval(view)();               
        }catch(e){
        	console.warn(e);
        }
    });
}
