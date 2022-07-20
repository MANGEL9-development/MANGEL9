var isMobile=false;
var paralaxStart=0; //was 800

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
	isMobile=true;
}

window.addEventListener("load",function(){
	//console.log("loaded");
	if(isMobile){
		document.body.style.backgroundAttachment="fixed";
	}
	else{
		paralaxScroll();
		window.addEventListener("scroll",function(e){
			paralaxScroll();
		});
	}
});
function paralaxScroll(){
	document.body.style.backgroundPositionY=((window.scrollY/2)-paralaxStart)+"px";
}

function getLinks(level,elementID){
	//write a function that puts links in the elementID at the specified level
	var linksHTML="";
	
	dots=repeatString("../",level);
	
	var links=[{adress:dots+"index.html" , text:"MANGEL9"},
			   {adress:dots+"about/default.html" , text:"About"},
			   {adress:dots+"resume/default.html" , text:"Resume"},
			   {adress:dots+"contact/default.html" , text:"Contact"}];
	
	for(var x=0;x<links.length;x++){
        // remove the link for the current page that the user is on
		if(links[x].text==document.title){
			//console.log(links[x].text+" to be removed");
			links.splice(x,1);
			break;
		}
	}
	if(links[0].text=="MANGEL9"){
		links[0].text="Home";
	}
	
	for(var i=0;i<links.length;i++){
		linksHTML+="<li><a href='"+links[i].adress+"'><div class='link-text'>"+links[i].text+"</div><div class='link-accent'></div></a></li>";
	}
		
	document.getElementById(elementID).innerHTML=linksHTML;
	
	//for styling purposes
		//var links=document.getElementById("links").children;
		/*var underliningAccent=document.createElement("div");
		underliningAccent.className="links-link-accent";
		console.log(underliningAccent);*/
		//for(var i=0;i<links.length;i++){
			/*links[i].children[0].appendChild(underliningAccent);
			console.log("Now editing: Link #"+i)
			console.log(links[i].children[0]);*/
			//links[i].children[0].innerHTML+="<div class='link-accent'></div>";
		//}
	
	document.getElementById("sitename").innerHTML=document.title.toUpperCase();
}

function repeatString(word,count){
	var chars="";
	for(var i=0;i<count;i++){
		chars+=word;
	}
	return chars;
}

var typedWords="";
window.addEventListener("keydown",function(e){
	if(!["INPUT","TEXTAREA"].includes(e.target.tagName)){
		if(65<=e.keyCode && e.keyCode<=90){
			typedWords+=e.key;
			if(typedWords.endsWith("takemetomysecretlayer",false)){
				window.open("https://tigerweb.towson.edu/mangel9/developer/developer.html","_self");
			}
		}
	}
});
String.prototype.endsWith=function(str,caseSensitive){
	if(str.length>typedWords.length){
		console.log("Checkpoint A");
		return false;
	}
	console.log("Checkpoint B");
	
	for(var i=(str.length-1),j=(this.length-1);(i>=0 && i>=0);i--,j--){
		if(caseSensitive){
			if(str.charAt(i)!=this.charAt(j)){
				console.log(i+" : "+str.charAt(i)+" , "+this.charAt(j)+" {"+typedWords+"}");
				return false;
			}
		}
		else{
			if(str.charAt(i).toLowerCase()!=this.charAt(j).toLowerCase()){
				console.log(i+" : "+str.charAt(i)+" , "+this.charAt(j)+" {"+typedWords+"}");
				return false;
			}
		}
	}
	return true;
};

function implementSwitch(element){
	var options=element.dataset.options.split(",");
	var switchText=element.children[0].children[0];
	var value=parseInt(element.dataset.value);
	switchText.innerHTML=options[value];
}