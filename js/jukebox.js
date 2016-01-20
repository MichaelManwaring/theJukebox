
$(document).ready(function(){
	var current_track = 0
	var all_tracks = ["leaving.mp3", "Daisy.mp3"]
	$("#mic").html("<source src= " + all_tracks[current_track] + " type='audio/mpeg'>")
	function Jukebox () {
		this.playlist = [];
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
		current_track += 1
		if (current_track == all_tracks.length){
			current_track = 0
		}
		$("#mic").html("<audio><source src= " + all_tracks[current_track] + " type='audio/mpeg'></audio>")
	})
	$('#random_button').click(function () {
		// console.log("click next")
		current_track = Math.floor(Math.random()*all_tracks.length);
		$("#mic").html("<audio><source src= " + all_tracks[current_track] + " type='audio/mpeg'></audio>")
	})
})
