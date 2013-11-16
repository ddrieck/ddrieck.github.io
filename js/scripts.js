
function showdiv(appearingDiv, disappearingDiv){
	var appear = document.getElementById(appearingDiv);
	var disappear = document.getElementById(disappearingDiv);
	
    		disappear.style.display = "none";
			appear.style.display = "block";
}
	
//jquery colorbox code
$(document).ready(function(){
	$('a.portfoliopics').colorbox({ opacity:0.5 , rel:'portfolio' });
	$('.inline').colorbox({ width:"90%", height:"80%" , iframe:true });
	});
	
$(document).ready(function(){
	
	});
	

