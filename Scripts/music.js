Game.music = (function(){
	function loadSound(source){
		let sound = new Audio();
		sound.src = source;
		return sound;
	}

	function loadAudio(){
		Game.sounds = {};
		Game.sounds['Audio/menuRemix'] = loadSound('Audio/menuRemix.mp3');
	}

	function playSound(soundToPlay){
		Game.sounds[soundToPlay].play();
	}

	function resetSound(soundToPlay){
		Game.sounds[soundToPlay].pause();
		Game.sounds[soundToPlay].currentTime = 0;
	}

	loadAudio();

	return {
		playSound : playSound,
		resetSound : resetSound,
	}
}());
