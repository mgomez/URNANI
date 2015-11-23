document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
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
function nannisIndex(){
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
function nannis(){}
function nannisDisponibles(){
	$(".nanni").on("click", function(){
		goTo("nannisConocela");
	});
}
function nannisConocela(){}
function goTo(view){
    $("#app").hide();
    var url = "views/"+view+".html";
    $.get(url, function(html){
        $("#app").html(html).show();
        eval(view)();               
    });
}
