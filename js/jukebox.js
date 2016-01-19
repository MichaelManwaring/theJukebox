var Jukebox = {
	playlist: [],
	play: function(track){
		console.log("play")
		track.play()
	},
	stop: function (track) {
		console.log("stop")
		track.stop()
	},
	// pause: function () {}
	load: function (file) {
		this.playlist.push(file)
		console.log("load")
	},
	queue: function (track) {
		
	},
	// random: function(){}
}
var Record_Collection = {
	tr
}

$(document).ready(function(){

$("#play_button").click(function(){
	Jukebox.play()
	console.log('click')
});

$("#stop_button").click(function(){
	Jukebox.stop()
	console.log('click')
});

$("#upload_button").click(function(){
	Jukebox.load()
	console.log('click')
});

});
