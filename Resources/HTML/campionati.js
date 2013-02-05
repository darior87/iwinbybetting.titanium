$.getJSON('http://api.iwinbybetting.ofunwebservices.com/campionati/active', function(data) {
	
	var json = JSON.parse(data);
	var content = "<ul data-role=\"listview\">";
	
	while(json.length > 0){
		var champ = json.pop();
		content+= "<li><a href=\"partite.html?n="+champ.nome+"\"><img src=\"iwinbybetting.ofunwebservices.com/campionati/"+champ.nome+"."+champ.image+"\" alt=\"\" class=\"ul-li-icon\" /><h3>"+champ.nome+"</h3></a></li>";
	}

	content += "</ul>";
    document.getElementById('campionati').innerHTML = content;
    
}); 