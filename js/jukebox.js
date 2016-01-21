$(document).ready(function(){
	function Jukebox () {
		this.current_track = 0
		this.all_tracks = ["louis.mp3","amy.mp3","aziz.mp3","hannibal.mp3","george.mp3"]
		
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

	function replace_pic (comedian) {
		$('.hider').css( "visibility", "visible");
		$(comedian).css('visibility', "hidden");
		$('#performing').html("<img src='images/" + comedian.substring(1)  +".jpg' class='on_deck'>")
	}

// STUFF FOR V2.0
// var new_song ={
// 	name: "louis.mp3",
// 	img:"",
// 	index:
// }

// function Song(name, src){
// 	this.name = name
// 	this.img_src = src
// 	this.location_in_array = 0
// 	this.setLocation = function(){

// 	}
// }

	the_jokebox = new Jukebox
	the_jokebox.new_track()

	$('#louis').click(function () {
		// $(this)
		// s.location_in_array
		console.log("clicked LOUIE")
		the_jokebox.current_track = 0
		the_jokebox.new_track()
		replace_pic('#louis')
	})

	$('#amy').click(function () {
		console.log("clicked AMY")
		the_jokebox.current_track = 1
		the_jokebox.new_track()
		replace_pic('#amy')
	})

	$('#aziz').click(function () {
		console.log("clicked AZIZ")
		the_jokebox.current_track = 2
		the_jokebox.new_track()
		replace_pic('#aziz')
	})

	$('#hannibal').click(function () {
		console.log("clicked HANNIBAL")
		the_jokebox.current_track = 3
		the_jokebox.new_track()
		replace_pic('#hannibal')
	})

	$('#george').click(function () {
		console.log("clicked GEORGE")
		the_jokebox.current_track = 4
		the_jokebox.new_track()
		replace_pic('#george')
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


	function blink(msg){
	$(msg).fadeOut('slow', function(){
	$(this).fadeIn('slow', function(){
	blink(this);
	});
	});
	}

	blink('#jokebox_header');


})
