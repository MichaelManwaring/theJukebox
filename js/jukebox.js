
$(document).ready(function(){
	function Jukebox () {
		this.current_track = 0
		this.all_tracks = ["leaving.mp3", "Daisy.mp3"]
		this.playlist = [];
		this.new_track = function () {
			console.log("NEW")
			$("#mic").html("<audio><source src= " + this.all_tracks[this.current_track] + " type='audio/mpeg'></audio>")
		}
		this.play_current_track = function () {
			// console.log("play")
			$('audio')[0].play()
		};
		this.pause_current_track = function () {
			// console.log("pause")
			$('audio')[0].pause()
		}
		this.reset_current_track = function () {
			// console.log("restart")
			$('audio')[0].currentTime = 0;
		}
		this.stop_current_track = function () {
			this.pause_current_track()
			this.reset_current_track()
		}
	}

	the_jokebox = new Jukebox
	the_jokebox.new_track()

	$('#louie').click(function () {
	})

	$('#play_button').click(function () {
		// console.log("click play")
		the_jokebox.play_current_track()
	})
	$('#pause_button').click(function () {
		// console.log("click pause")
		the_jokebox.pause_current_track()
	})
	$('#reset_button').click(function () {
		// console.log("click reset")
		the_jokebox.reset_current_track()
	})
	$('#stop_button').click(function () {
		// console.log("click stop")
		the_jokebox.stop_current_track()
	})
	$('#next_button').click(function () {
		// console.log("click next")
		the_jokebox.current_track += 1
		if (the_jokebox.current_track == the_jokebox.all_tracks.length){
			the_jokebox.current_track = 0
		}
		the_jokebox.new_track()
	})
	$('#random_button').click(function () {
		// console.log("click next")
		the_jokebox.current_track = Math.floor(Math.random()*the_jokebox.all_tracks.length);
		the_jokebox.new_track()
	})
})
