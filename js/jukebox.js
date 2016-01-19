var Jukebox = {
	playlist: [],
	play: function(){
		console.log("play")
	},
	stop: function () {
		console.log("stop")
	},
	// pause: function () {}
	load: function (file) {
		// this.playlist.push(file)
		console.log("load")
	},
	queue: function (file) {
		
	},
	// random: function(){}
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