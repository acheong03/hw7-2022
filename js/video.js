var video;

function getVid(){
	video = document.querySelector("#player1");
}

window.addEventListener("load", function() {
  console.log("Good job opening the window");
  getVid();
});

function playVid() { 
	console.log("Play Video");
	video.play();
} 

function pauseVid() { 
	console.log("Pause Video");
	video.pause();
} 

function decreaseSpeed() {
	video.playbackRate -= 0.1;
	console.log("Slow Down");
} 

function increaseSpeed() {
	video.playbackRate += 0.1;
	console.log("Speed Up");
} 

function skipAhead() {
	video.currentTime = video.currentTime + 10;
	if (video.ended) {
		video.load();
		video.play();
		playbackRate = 1;
	}
	console.log("Skip Ahead");
} 

function mute() { 
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		console.log("Muted");
	}
}

function changeVolume() {
	console.log(slider.value);
	var slider_val = document.querySelector('#volume').innerHTML; 
	slider_val = slider.value;
	video.volume = slider_val / 100;
	document.querySelector('#volume').innerHTML = slider_val + '%';
}
	
function vintage() { 
	video.classList.add("oldSchool");
	console.log("oldSchool");
}

function orig() {
	video.classList.remove("oldSchool");
	console.log("Original");
}
