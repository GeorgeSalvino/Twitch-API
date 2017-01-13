var streams=["ESL_SC2","brtt", "hastad", "yeTz", "TSM_TheOddOne", "sharkjmp", "RiotGamesBrazil", "YoDa", "Nightblue3", "Akrinuss", "noobs2ninjas", "brunofin", "comster404","freecodecamp"];
var urlIsOnline= 'https://wind-bow.gomix.me/twitch-api/streams/';
var urlIsOffline = 'https://wind-bow.gomix.me/twitch-api/channels/'

streams.forEach(function(stream){
	$.ajax( { 
      url: urlIsOnline +stream,
       success: function(data) {
       	console.log(data.stream)
       	if (data.stream==null){
       		$.ajax( { 
      			url: urlIsOffline +stream,
       			success: function(data) {
       			if(data.status == 404){
       				$("#streamsContent").append("<a href='"+ data.url+"'<div class='streamDiv'><p class='offline'><img src='https://www.klcconcursos.com.br/page-not-found.png'>" +stream + " - Channel does not exist</p></div>");
       			}
       			else{
       				$("#streamsContent").append("<a href='"+ data.url+"'<div class='streamDiv'><p class='offline'><img src='"+data.logo+"'>   " +stream + " - Offline</p></div>");
       			}
       			       			
			},cache:false
       		})
      	}
       	else{
       		console.log(stream);
       		$("#streamsContent").append("<a href='"+data.stream.channel.url+"'<div class='streamDiv'><p class='online'><img src='" + data.stream.channel.logo+"'>   " +data.stream.channel.display_name+" - "  +data.stream.channel.status + "</p></div>" )
       	}
       }
	})
})


$("#all,#online,#offline").on("click", function(){
	if($(this).text()=="All"){
		$("p").css({"display":"block"})
		$("#allIcon").css({"display":"inline-block"})
		$("#onlineIcon,#offlineIcon").css({"display":"none"})
	}
	else if($(this).text()=="Online"){
		$(".online").css({"display":"block"})
		$(".offline").css({"display":"none"})
		$("#onlineIcon").css({"display":"inline-block"})
		$("#offlineIcon,#allIcon").css({"display":"none"})
	}
	else if($(this).text()=="Offline"){
		$(".offline").css({"display":"block"})
		$(".online").css({"display":"none"})
		$("#offlineIcon").css({"display":"inline-block"})
		$("#onlineIcon,#allIcon").css({"display":"none"})
	}
})

// $("input").keyup(function(){
// 	if(searchVal==null){
// 		$("#streamDiv").addClass("searched");
// 	}
// 	var searchVal =  $("#search").val();
// 	console.log(searchVal);
// 	$(".streamDiv:contains('"+searchVal+"')").addClass("searched");
// });
