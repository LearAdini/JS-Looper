function loadWaveFormTrack(pColor,trackLoad,lColor,trackId,pauseId,muteId,addTrackId,stopLoopId,addLoopId){
  var audioTrack = WaveSurfer.create({
    container: ".audio",
    waveColor: "white",
    progressColor: pColor, // Each track has its own pregressColor,meaning when played waveform color is changed.
    barWidth: 2,
    barHeight: 0.7,
    hideScrollbar:true,
    loopSelection: true,
  });
  
  
  audioTrack.load('audio/'+trackLoad); // Load track from audio directory.
  audioTrack.setVolume(1);
  
  audioTrack.on('ready', function(){ // When loaded add regions plugin (loop selection).
    audioTrack.addRegion({
      id: 1,
      start: 6, // Where loop starts
      end: 14,// Where loop ends
      color: lColor,   
      drag: true, // Can drag
      resize: true, // Can resize
      loop:true // Will loop
    })
  });
  
    const playBtn = document.querySelector(".play-btn");
    const trashBtn = document.querySelector(".trash-btn");
    const trackBtn = document.getElementById(trackId);
    const muteTrackBtn = document.getElementById(pauseId);
    const volumeSlider = document.querySelector(".volume-slider");
    const muteBtn = document.querySelector(muteId);
    const addTrack = document.querySelector(addTrackId);
    const stopLoopBtn = document.getElementById("loop-stop");
    const stopSyncBtn = document.getElementById("loop-sync");
    const addSyncBtn = document.getElementById("plus-plus");
    const stopSyncTrackBtn = document.getElementById(stopLoopId);
    const addSyncTrackBtn = document.getElementById(addLoopId);
  
  
      // Prevents spamming add instrument button.
      addTrack.addEventListener("click", ()=>{
      audioTrack.destroy();
      });
  
  
      // When loop-sync white button is clicked, remove loop regions of all track.   
      stopSyncBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      });
  
  
      // When plus-plus white button is clicked, add loop regions again for all tracks.
      addSyncBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      audioTrack.addRegion({
          id: 1,
          start: 0, 
          end: 17.5, 
          color: 'hsla(0, 100%, 30%, 0.1)',          
          drag: true,
          resize: true,
          loop:true
        });});
  
  
      // When plus-plus red button is clicked add loop regions again of this track.
      addSyncTrackBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      audioTrack.addRegion({
          id: 1,
          start: 0, 
          end: 2.98, 
          color: 'hsla(254, 84%, 53%, 0.1)',          
          drag: true,
          resize: true,
          loop:true
        });});
  
  
      // When loop-sync red button is clicked, remove loop regions of this track.
      stopSyncTrackBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      });
  
      
      // When red play button is clicked, play or pause this track.
      trackBtn.addEventListener("click", () => {
        audioTrack.playPause();
        if (audioTrack.isPlaying()) 
        {
           playBtn.classList.add("playing");
        } 
        else 
        {  
           playBtn.classList.remove("playing");
         } 
      });
  
  
      
      // When white play button is clicked, play or pause this & all tracks.
      playBtn.addEventListener("click", () => {
        audioTrack.playPause();
        togglePlay(trackBtn);
        if (audioTrack.isPlaying()) 
        {
          playBtn.classList.add("playing");
        } 
        else 
        {
          playBtn.classList.remove("playing");
        }
      });
  
    
      // Removes this & all tracks from audio container.
      trashBtn.addEventListener("click",()=>{
        audioTrack.destroy();
        audioTrack.cancelAjax();
      });
  
  
      // When red mute button is clicked mute this track.
      muteTrackBtn.addEventListener("click",()=>{
        if(audioTrack.isPlaying())
        {
        audioTrack.setVolume(0);
        }
        else if(audioTrack.getMute() == true)
        {
          audioTrack.setVolume(1);
        }
      });
    
   
      // When white stop button is clicked stop this & all tracks.  
      stopLoopBtn.addEventListener("click", () => {
        audioTrack.stop();
        playBtn.classList.remove("playing");
        togglePlay(trackBtn);
      });
  
      // Changing volume of all tracks.
      volumeSlider.addEventListener("mouseup", () => {
        changeVolume(volumeSlider.value);
      });
  
      const changeVolume = (volume) => {
        audioTrack.setVolume(volume);
      };
      
      // If muted while clicked on mute button, set volume to 1. if not muted, mute when clicking on mute button.
      muteBtn.addEventListener("click", () => {
        if (muteBtn.classList.contains("muted")) 
        {
          muteBtn.classList.remove("muted");
          audioTrack.setVolume(1);
        } else 
        {
          audioTrack.setVolume(0);
          muteBtn.classList.add("muted");
        }
      });
}


// function togglePlayStop(x){
//   x.classList.toggle("fa-pause");
//   x.classList.toggle("fa-play");
// };

function togglePlay(x){
  x.classList.toggle("fa-play");
  x.classList.toggle("fa-pause");
};


function toggleLooper(x){
  x.classList.toggle("fa-plus");
  const startSyncBtn = document.getElementById("plus-plus");
  startSyncBtn.style.display= `inline-block`;
  
  const SyncBtn = document.getElementById("loop-sync");
  SyncBtn.style.display = `none`;
};


function toggleMute(x){
  x.classList.toggle("fa-volume-mute");
  x.classList.toggle("fa-volume-up");
}


function toggleLooper(x,n){
  x.classList.toggle("fa-plus");
  const startSyncBtn = document.getElementById("plus-plus"+n);
  startSyncBtn.style.display= `inline-block`; 

  const SyncBtn = document.getElementById("loop-sync"+n);
  SyncBtn.style.display = `none`;
};


function addLooper(x,n){
  const SyncBtn = document.getElementById("loop-sync"+n);
  SyncBtn.style.display = `inline-block`;

  const startSyncBtn = document.getElementById("plus-plus"+n);
  startSyncBtn.style.display= `none`;
};


function toggleLooperAll(x){
  x.classList.toggle("fa-plus");
  const startSyncBtn = document.getElementById("plus-plus");
  startSyncBtn.style.display= `inline-block`; 

  const SyncBtn = document.getElementById("loop-sync");
  SyncBtn.style.display = `none`;
};


function addLooperAll(x){
  const SyncBtn = document.getElementById("loop-sync");
  SyncBtn.style.display = `inline-block`;

  const startSyncBtn = document.getElementById("plus-plus");
  startSyncBtn.style.display= `none`;
};


function showInfo(){
  var x = document.querySelector(".card"); //.card is the info pop up
  
  //if .card is not displayed when info button is clicked display .card as inline-block and manipulate DOM element h1's innerHTML
  if (x.style.display == "none")
   {
    x.style.display = `inline-block`;
    
    var h1 = document.querySelector(".display-text");
   
    h1.innerHTML = `
    <p id ="info-add-inst" class="br">
    <span class="add-track1">Add<br>Piano</span>  
    </p><h4 id="para-inst">&nbsp;&nbsp;- Add an instrument</h4>
    <br>
    <i id="info-play" class="fas fa-play"></i>
    <h4 id="para-play">- Play all added instruments simultaneously</h4>
    <br>
    <i id="info-playLoop" class="fas fa-play"></i>
    <h4 id="para-loop">- Play each track individually by adding a track first and pressing the red play button</h4>
    <br>
    <i id="info-sync" class="fas fa-sync"></i>
    <h4 id="para-sync">- Toggle loop off</h4>
    <br>
    <i id="info-plus" class="fas fa-plus"></i>
    <h4 id="para-plus">- Toggle loop on</h4>
    <i id="info-trash" class="far fa-trash-alt"></i>
    <h4 id="para-trash">- Remove instruments</h4>
    `;  
  } 
  // if clicked on info button once again .card display is equal to "inline-block" now and not "none" so it will change .card style to none making it dissappear only if you already clicked the info button..
  else 
  {
   x.style.display = "none";
  }
};