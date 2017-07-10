$(document).ready(function(){
"use strict";

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});

});
	});
  


$(document).ready(function(){
	   
	"use strict";
	
	
	function getQueryVariable(variable) { 
var query = window.location.search.substring(1); 
var vars = query.split("&"); 
for (var i = 0; i < vars.length; i++) { 
var pair = vars[i].split("="); 
if (pair[0] === variable) { 
return unescape(pair[1]); 
} 
} 
return false; 
}

	
	var x = getQueryVariable('id');
	
	
	$(".single").hide();
	$("#" + x).show();
	
	$( "#Mzes" ).on('click',function() {     
   $('#zes').toggle();
	$(".single").not('#zes').hide();
});
	
	$( "#Mvier" ).on('click',function() {     
   $('#vier').toggle();
		$(".single").not('#vier').hide();
});
	
$( "#Mvijf" ).on('click',function() {     
   $('#vijf').toggle();
	$(".single").not('#vijf').hide();
});
	
	$( "#Mzeven" ).on('click',function() {     
   $('#zeven').toggle();
	$(".single").not('#zeven').hide();
});
	$( "#Mdrie" ).on('click',function() {     
   $('#drie').toggle();
	$(".single").not('#drie').hide();
});
	$( "#Mtwee" ).on('click',function() {     
   $('#twee').toggle();
	$(".single").not('#twee').hide();
});
	$( "#Meen" ).on('click',function() {     
   $('#een').toggle();
	$(".single").not('#een').hide();
});
	$( "#Macht" ).on('click',function() {     
   $('#acht').toggle();
	$(".single").not('#acht').hide();
});
	$( "#Mnegen" ).on('click',function() {     
   $('#negen').toggle();
	$(".single").not('#negen').hide();
});
	$( "#Mtien" ).on('click',function() {     
   $('#tien').toggle();
	$(".single").not('#tien').hide();
});
	$( "#Melf" ).on('click',function() {     
   $('#elf').toggle();
	$(".single").not('#elf').hide();
});
	$( "#Mtwaalf" ).on('click',function() {     
   $('#twaalf').toggle();
	$(".single").not('#twaalf').hide();
});
	$( "#Mdertien" ).on('click',function() {     
   $('#dertien').toggle();
	$(".single").not('#dertien').hide();
});
	$( "#Mveertien" ).on('click',function() {     
   $('#veertien').toggle();
	$(".single").not('#veertien').hide();
});
	$( "#Mvijftien" ).on('click',function() {     
   $('#vijftien').toggle();
	$(".single").not('#vijftien').hide();
});
	$( "#Mzestien" ).on('click',function() {     
   $('#zestien').toggle();
	$(".single").not('#zestien').hide();
});
	$( "#Mzeventien" ).on('click',function() {     
   $('#zeventien').toggle();
	$(".single").not('#zeventien').hide();
});
	$( "#Machtien" ).on('click',function() {     
   $('#achtien').toggle();
	$(".single").not('#achtien').hide();
});
	$( "#Mnegentien" ).on('click',function() {     
   $('#negentien').toggle();
	$(".single").not('#negentien').hide();
});
	$( "#Mtwintig" ).on('click',function() {     
   $('#twintig').toggle();
	$(".single").not('#twintig').hide();
});
	$( "#M21" ).on('click',function() {     
   $('#21').toggle();
	$(".single").not('#21').hide();
});
	$( "#M22" ).on('click',function() {     
   $('#22').toggle();
	$(".single").not('#22').hide();
});
	$( "#M23" ).on('click',function() {     
   $('#23').toggle();
	$(".single").not('#23').hide();
});
	$( "#M24" ).on('click',function() {     
   $('#24').toggle();
	$(".single").not('#24').hide();
});
	$( "#M25" ).on('click',function() {     
   $('#25').toggle();
	$(".single").not('#25').hide();
});
	$( "#M26" ).on('click',function() {     
   $('#26').toggle();
	$(".single").not('#26').hide();
});
	$( "#M27" ).on('click',function() {     
   $('#27').toggle();
	$(".single").not('#27').hide();
});
	$( "#M28" ).on('click',function() {     
   $('#28').toggle();
	$(".single").not('#28').hide();
});
	$( "#M29" ).on('click',function() {     
   $('#29').toggle();
	$(".single").not('#29').hide();
});
	$( "#M30" ).on('click',function() {     
   $('#30').toggle();
	$(".single").not('#30').hide();
});
	$( "#M31" ).on('click',function() {     
   $('#31').toggle();
	$(".single").not('#31').hide();
});
	});

	







