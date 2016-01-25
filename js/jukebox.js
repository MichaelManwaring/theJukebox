$(document).ready(function(){
	// This is the Track object which contains information about the track that is in the player
	function Track(name){
		this.name = name
		// audio files have names corresponding to their artists
		this.file_name = name + ".mp3"
		// image files have names corresponding to their artists
		this.img_src = "images/" + name + ".jpg"
	}
	function Jukebox () {
		// initialize the track counter, library and key object for switching in images
		this.current_track = 0
		this.all_tracks = []
		this.track_list = {}
		this.new_track = function () {
			// use this function to load a track into the player
			$("#mic").html("<audio><source src= " + this.all_tracks[this.current_track].file_name + " type='audio/mpeg'></audio>")
		}
		this.play_current_track = function () {
			// plays the track set by new_track
			$('audio')[0].play()
		};
		this.pause_current_track = function () {
			// pauses track (called by heckle function, original intent was to include a crowd noise upon pause)
			$('audio')[0].pause()
		}
		this.reset_current_track = function () {
			// resets the track to the beginning
			$('audio')[0].currentTime = 0;
		}
		this.stop_current_track = function () {
			// pauses, then restarts the track
			this.pause_current_track()
			this.reset_current_track()
		}
		this.load_track = function (track) {
			// add a new track to the track list and library that can then be called by new_track
			this.all_tracks.push(track)
			this.track_list[track.name]=(this.all_tracks.length-1)
		}
	}

	function replace_pic (comedian) {
		// switches out the current on stage picture with the one clicked on by hiding the 'on deck' image and changing the one onstage
		$('.hider').css( "visibility", "visible");
		$("#"+comedian).css('visibility', "hidden");
		$('#performing').html("<img src='images/" + comedian  +".jpg' class='comedian_on_stage'>")
	}

	function build_gallery (participants){
		// Populates a gallery with comedians images that are clickable to allow track changes
		gallery_string=""
		for (var i in participants) {
			next= ("<div id='" + participants[i].name  + "' class='hider'><img src='" + participants[i].img_src + "' class='on_deck'></div>")
			console.log(next)
			gallery_string += next
		}
		// console.log(gallery_string)
		$('.comedians_list').html(gallery_string)
	}

	// initialize jukebox and move to first track

	the_jokebox = new Jukebox()
	// load the tracks
	the_jokebox.load_track(new Track('louis'))
	the_jokebox.load_track(new Track('amy'))
	the_jokebox.load_track(new Track('aziz'))
	the_jokebox.load_track(new Track('hannibal'))
	the_jokebox.load_track(new Track('george'))




	// set up gallery and load first track
	build_gallery(the_jokebox.all_tracks)
	// load first track
	the_jokebox.new_track()
	// load first performers picture
	replace_pic(the_jokebox.all_tracks[0].name)

	// function to switch comedians pictures
	$('.hider').click(function (event) {
		var clicked = this.id	
		console.log(the_jokebox.track_list[clicked])
		the_jokebox.current_track = the_jokebox.track_list[clicked]
		the_jokebox.new_track()
		replace_pic(clicked)
	})

	$('#play_button').click(function () {
		// calling play function from button
		the_jokebox.play_current_track()
	})
	$('#pause_button').click(function () {
		// calling pause/heckle function from button
		the_jokebox.pause_current_track()
	})
	$('#reset_button').click(function () {
		// calling reset function from button
		the_jokebox.reset_current_track()
	})
	$('#stop_button').click(function () {
		// calling stop function from button
		the_jokebox.stop_current_track()
	})
	$('#next_button').click(function () {
		// calling next function from button and wrapping around after the last one
		the_jokebox.current_track += 1
		if (the_jokebox.current_track == the_jokebox.all_tracks.length){
			the_jokebox.current_track = 0
		}
		the_jokebox.new_track()
	})
	$('#random_button').click(function () {
		// calling a random track		
		the_jokebox.current_track = Math.floor(Math.random()*the_jokebox.all_tracks.length);
		the_jokebox.new_track()
	})




	// blink function for sign
	function blink(msg){
		$(msg).fadeOut('slow', function(){
			$(this).fadeIn('slow', function(){
				blink(this);
				console.log('blink')
			});
		});
	}
	blink('#jokebox_header');


})
