Game.music = (function(){
	function loadSound(source){
		let sound = new Audio();
		sound.src = source;
		return sound;
	}

	function loadAudio(){
		Game.bgm = {};
    Game.bgm['Audio/menu'] = loadSound('Audio/menu.mp3');
	}

	function playMusic(musicToPlay){
		Game.bgm[musicToPlay].play();
    Game.bgm[musicToPlay].addEventListener('ended', function(){
      audioStarted = false;
    })
    audioStarted = true;
	}

	function resetMusic(musicToPlay){
		Game.bgm[musicToPlay].pause();
		Game.bgm[musicToPlay].currentTime = 0;
	}

	function pauseMusic(musicToPlay){
		Game.bgm[musicToPlay].pause();
	}

	loadAudio();

	return {
		playMusic : playMusic,
		resetMusic : resetMusic,
		pauseMusic : pauseMusic,
	}
}());
