$.getJSON('http://api.iwinbybetting.ofunwebservices.com/partite/campionato/'+getParameterByName("name"), function(data) {
	var url = getParameterByName("name");
	var json = JSON.parse(data);
	var content = "<ul data-role=\"listview\">";
	
	while(json.length > 0){
		var partita = json.pop();
		content+= "<li><a href=\"pronostici.html?id="+partita.id+"\"><h3>"+partita.casa+"</h3> vs <h3>"+partita.trasferta+"</h3><span class=\"ul-li-count\">"+partita.data+"</span></a></li>";
	}

	content += "</ul>";
    document.getElementById('partite').innerHTML = content;
    
}); 

function getParameterByName(name){
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex  new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if(result == null){
		return "";
	}
	else{
		return decodeURIComponent(results[1].replace(/\+/g," "));
	}
}
