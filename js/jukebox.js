
$(document).ready(function(){
	function Jukebox () {
		this.playlist = [];
		this.play_current_record = function () {
			console.log("play")
			$('audio')[0].play()
		};
		this.stop_current_record = function () {
			console.log("stop")
			$('audio')[0].pause()
		}
		// this.pause_current_record
	}
	the_jokebox = new Jukebox
	$('#play_button').click(function () {
		console.log("click play")
		// var audio = new Audio('The leaving.mp3');
		// audio.play();
		the_jokebox.play_current_record()
	})
	$('#stop_button').click(function () {
		console.log("click stop")
		// var audio = new Audio('The leaving.mp3');
		// audio.play();
		the_jokebox.stop_current_record()
	})
})
