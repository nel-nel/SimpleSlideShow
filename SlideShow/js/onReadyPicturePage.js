function onReadyPicturePage() {
	var localUrl = location.href;
	var title = document.getElementById('title');
	var pic = document.getElementById('pic');
	var description = document.getElementById('description');
	var url = document.getElementById('url');
	var back = document.getElementById("back");
	var $img = $('img');	
	$img.on('click', function(){
			var object = traverseData('path', $(this));
			$('#pic').attr('src', object.path);
			$('#description').html( object.description); 
			$('#title').html( object.name); 
			$('#url').html( object.path); 
			//window.location.assign("picturePage.html?name ="+path.name);
});	
 function getDataFromUrl(url){
	var queryStart = url.indexOf("?") + 1;
	queryEnd   = url.indexOf("#") + 1 || url.length + 1;
	query = url.slice(queryStart, queryEnd - 1);
	pairs = query.replace(/\+/g, " ").split("=");
	var name = decodeURIComponent(pairs[1]);
	fillPage(name);
	};

 function fillPage(param){	
	for(var i = 0; i < imgData.length; i++){
		var imgObject = JSON.parse(imgData[i]);
		if (imgObject.name == param){
			title.innerHTML = param;
			pic.src = imgObject.path;
			url.innerHTML = imgObject.path;
			description.innerHTML = imgObject.description;
			return;
		};
	}
};

getDataFromUrl(localUrl);
url.addEventListener('click', function (){
		window.open(url.innerHTML,"_blank","width:100% , height:100%");
});

	back.onclick = function(){
		window.location.assign('Gallery.html');
	};
};