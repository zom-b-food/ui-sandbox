
function change(){
	
	
if (document.title == "healthypainting.com - About" ) 
	{ 	(document.getElementById("about").style.textTransform="uppercase") && (document.getElementById("about").style.color="#000000"); } 
	
	else if (document.title == "healthypainting.com - Contact" ) 
	{ 	(document.getElementById("contact").style.textTransform="uppercase") && (document.getElementById("contact").style.color="#000000"); } 
	
	else if (document.title == "healthypainting.com - Exteriors" ) 
	{ 	(document.getElementById("exteriors").style.textTransform="uppercase") && (document.getElementById("exteriors").style.color="#000000"); } 
	
	else if (document.title == "healthypainting.com - Interiors" ) 
	{ 	(document.getElementById("interiors").style.textTransform="uppercase") && (document.getElementById("interiors").style.color="#000000"); } 

	else if (document.title == "healthypainting.com - Blog" ) 
	{ 	(document.getElementById("blog").style.textTransform="uppercase") && (document.getElementById("blog").style.color="#000000"); } 

	else if (document.title == "healthypainting.com - Home" ) 
	{ 	(document.getElementById("home").style.textTransform="uppercase") && (document.getElementById("home").style.color="#000000"); } 
	
	else if (document.title == "healthypainting.com - Links" ) 
	{ 	(document.getElementById("links").style.textTransform="uppercase") && (document.getElementById("links").style.color="#000000"); } 
	
	else if (document.title == "healthypainting.com - Coaching" ) 
	{ 	(document.getElementById("coach").style.textTransform="uppercase") && (document.getElementById("coach").style.color="#000000"); } 
	
	else if (document.title == "healthypainting.com - Outreach" ) 
	{ 	(document.getElementById("outreach").style.textTransform="uppercase") && (document.getElementById("outreach").style.color="#000000"); }
	
}
function autotab(original,destination){
if (original.getAttribute&&original.value.length==original.getAttribute("maxlength"))destination.focus()
}
