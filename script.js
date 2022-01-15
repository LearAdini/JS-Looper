function togglePlay(x) {
  x.classList.toggle("fa-pause");
  x.classList.toggle("fa-play");
};

function toggleStop(x) {
 x.classList.add("fa-play");
 x.classList.remove("fa-pause");
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


/// Section: toggle loop on/off for each track
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

///

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



// Each track has its own function, when .add-track class is beeing clicked add the specefied instrument.
function loadWaveFormTrack1(){
var audioTrack = WaveSurfer.create({
  container: ".audio",
  waveColor: "white",
  progressColor: "red", // Each track has its own pregressColor,meaning when played waveform color is changed.
  barWidth: 2,
  barHeight: 0.7,
  hideScrollbar:true,
  loopSelection: true,
});


audioTrack.load("audio/drums_.mp3"); // Load track from audio directory.
audioTrack.setVolume(1);

audioTrack.on('ready', function(){ // When loaded add regions plugin (loop selection).
  audioTrack.addRegion({
    id: 1,
    start: 6, // Where loop starts
    end: 14,// Where loop ends
    color: 'hsla(254, 84%, 53%, 0.1)',   
    drag: true, // Can drag
    resize: true, // Can resize
    loop:true // Will loop
  })
});

  const playBtn = document.querySelector(".play-btn");
  const trashBtn = document.querySelector(".trash-btn");
  const trackBtn = document.getElementById("track1");
  const muteTrackBtn = document.getElementById("pause1");
  const volumeSlider = document.querySelector(".volume-slider");
  const muteBtn = document.querySelector(".mute-btn1");
  const addTrack = document.querySelector(".add-track1");
  const stopLoopBtn = document.getElementById("loop-stop");
  const stopSyncBtn = document.getElementById("loop-sync");
  const addSyncBtn = document.getElementById("plus-plus");
  const stopSyncTrackBtn = document.getElementById("loop-sync1");
  const addSyncTrackBtn = document.getElementById("plus-plus1");


    // Prevents spamming add instrument button.
    addTrack.addEventListener("click", ()=>{
    audioTrack.destroy();
    });


    // When plus-plus white button is clicked add loop regions again of this track.
    addSyncBtn.addEventListener("click", () => {
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


    // When loop-sync white button is clicked remove loop origins of this track.   
    stopSyncBtn.addEventListener("click", () => {
    audioTrack.clearRegions(); 
    });


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


    // When loop-sync red button is clicked remove loop origins of this track.
    stopSyncTrackBtn.addEventListener("click", () => {
    audioTrack.clearRegions(); 
    });

    
    // When red play button is clicked play or pause this track.
    trackBtn.addEventListener("click", () => {
      audioTrack.playPause();
      if (audioTrack.isPlaying()) {
        playBtn.classList.add("playing");
      } else{  
          playBtn.classList.remove("playing");
       } 
    });

  
    // Removes this track from audio container.
    trashBtn.addEventListener("click",()=>{
      audioTrack.destroy();
      audioTrack.cancelAjax();
    });


    // When white play button is clicked play or pause this track.
    playBtn.addEventListener("click", () => {
      audioTrack.playPause();
      togglePlay(trackBtn);
      if (audioTrack.isPlaying()) {
        playBtn.classList.add("playing");
      } else{
        playBtn.classList.remove("playing");
      }
    });


    // When red mute button is clicked mute this track.
    muteTrackBtn.addEventListener("click",()=>{
      if(audioTrack.isPlaying())
      {
      audioTrack.setVolume(0);
      }else if(audioTrack.getMute() == true){
        audioTrack.setVolume(1);
      }
    });
  
 
    // When white stop button is clicked stop this track.  
    stopLoopBtn.addEventListener("click", () => {
      audioTrack.stop();
      playBtn.classList.remove("playing");
      toggleStop(trackBtn);
    });

    // Changing volume slider when mouseup.
    volumeSlider.addEventListener("mouseup", () => {
      changeVolume(volumeSlider.value);
    });

    const changeVolume = (volume) => {
      audioTrack.setVolume(volume);
    };
    
    // if muted set volume to 1, if not muted mute.
    muteBtn.addEventListener("click", () => {
      if (muteBtn.classList.contains("muted")) {
        muteBtn.classList.remove("muted");
        audioTrack.setVolume(1);
      } else {
        audioTrack.setVolume(0);
        muteBtn.classList.add("muted");
      }
    });
  }

  function loadWaveFormTrack2(){

  var audioTrack = WaveSurfer.create({
    container: ".audio",
    waveColor: "white",
    progressColor: "blue",
    barWidth: 2,
    barHeight: 0.7,
    hideScrollbar:true,
    loopSelection: true
  });
  
  audioTrack.load("audio/_tambourine_shake_higher.mp3");
  audioTrack.setVolume(0.3);


  audioTrack.on('ready', function(){
    audioTrack.addRegion({
      id: 2,
      start: 0.3, 
      end: 4, 
      color: 'hsla(74, 86%, 54%, 0.1)',         
      drag: true,
      resize: true,
      loop:true
    });});

    const playBtn = document.querySelector(".play-btn");
    const trashBtn = document.querySelector(".trash-btn");
    const trackBtn = document.getElementById("track2");
    const muteTrackBtn = document.getElementById("pause2");
    const volumeSlider = document.querySelector(".volume-slider");
    const muteBtn = document.querySelector(".mute-btn2");
    const addTrack = document.querySelector(".add-track2");
    const stopLoopBtn = document.getElementById("loop-stop");
    const stopSyncBtn = document.getElementById("loop-sync");
    const addSyncBtn = document.getElementById("plus-plus");
    const stopSyncTrackBtn = document.getElementById("loop-sync2");
    const addSyncTrackBtn = document.getElementById("plus-plus2");
  
  
    addTrack.addEventListener("click", ()=>{
      audioTrack.destroy();
    });
  
  
    addSyncBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      audioTrack.addRegion({
        id: 2,
        start: 0, 
        end: 3, 
        color: 'hsla(74, 86%, 54%, 0.1)',         
        drag: true,
        resize: true,
        loop:true
      });});
  
  
    stopSyncBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      });

  
        addSyncTrackBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      audioTrack.addRegion({
        id: 2,
        start: 0, 
        end: 3, 
        color: 'hsla(74, 86%, 54%, 0.1)',         
        drag: true,
        resize: true,
        loop:true
      });});
  
  
    stopSyncTrackBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      });
  
      
      trackBtn.addEventListener("click", () => {
        audioTrack.playPause();
        if (audioTrack.isPlaying()) {
          playBtn.classList.add("playing");
        } else{  
            playBtn.classList.remove("playing");
         } 
      });
  

      trashBtn.addEventListener("click",()=>{
        audioTrack.destroy();
        audioTrack.cancelAjax();
      });
  

      playBtn.addEventListener("click", () => {
        audioTrack.playPause();
        togglePlay(trackBtn);
        if (audioTrack.isPlaying()) {
          playBtn.classList.add("playing");
        } else{
          playBtn.classList.remove("playing");
        }
      });
  
  
      muteTrackBtn.addEventListener("click",()=>{
        if(audioTrack.isPlaying())
        {
        audioTrack.setVolume(0);
        }else if(audioTrack.getMute() == true){
          audioTrack.setVolume(0.3);
        }
      });

      stopLoopBtn.addEventListener("click", () => {
        audioTrack.stop();
        playBtn.classList.remove("playing");
        toggleStop(trackBtn);
      });
  
      
      volumeSlider.addEventListener("mouseup", () => {
        changeVolume(volumeSlider.value);
      });
  
      
      const changeVolume = (volume) => {
        if (volume == 0) {
          muteBtn.classList.add("muted");
        }
         else {
          muteBtn.classList.remove("muted");
        }
      
        audioTrack.setVolume(volume);
      };
      
  
      muteBtn.addEventListener("click", () => {
        if (muteBtn.classList.contains("muted")) {
          muteBtn.classList.remove("muted");
          audioTrack.setVolume(0.3);
        } else {
          audioTrack.setVolume(0);
          muteBtn.classList.add("muted");
        }
      });
 }
    function loadWaveFormTrack3(){

  var audioTrack = WaveSurfer.create({
    container: ".audio",
    waveColor: "white",
    progressColor: "magenta",
    barWidth: 2,
    barHeight: 0.7,
    hideScrollbar:true,
    loopSelection: true
  });
  
  audioTrack.load("audio/JIBRISH.mp3");
  audioTrack.setVolume(1.4);

  audioTrack.on('ready', function(){
    audioTrack.addRegion({
      id: 3,
      start: 9, 
      end: 11, 
      color: 'hsla(0, 100%, 30%, 0.1)',         
      drag: true,
      resize: true,
      loop:true
    });});

    const playBtn = document.querySelector(".play-btn");
    const trashBtn = document.querySelector(".trash-btn");
    const trackBtn = document.getElementById("track3");
    const muteTrackBtn = document.getElementById("pause3");
    const volumeSlider = document.querySelector(".volume-slider");
    const muteBtn = document.querySelector(".mute-btn3");
    const addTrack = document.querySelector(".add-track3");
    const stopLoopBtn = document.getElementById("loop-stop");
    const stopSyncBtn = document.getElementById("loop-sync");
    const addSyncBtn = document.getElementById("plus-plus");
    const stopSyncTrackBtn = document.getElementById("loop-sync3");
    const addSyncTrackBtn = document.getElementById("plus-plus3");
  
  
    addTrack.addEventListener("click", ()=>{
      audioTrack.destroy();
    });
  
  
    addSyncBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      audioTrack.addRegion({
        id: 3,
        start: 9, 
        end: 12, 
        color: 'hsla(0, 100%, 30%, 0.1)',         
        drag: true,
        resize: true,
        loop:true
      });});
  
  
      stopSyncBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      });
  
      addSyncTrackBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      audioTrack.addRegion({
        id: 3,
        start: 9, 
        end: 12, 
        color: 'hsla(0, 100%, 30%, 0.1)',         
        drag: true,
        resize: true,
        loop:true
      });});
  
  
      stopSyncTrackBtn.addEventListener("click", () => {
      audioTrack.clearRegions(); 
      });
  
      
      trackBtn.addEventListener("click", () => {
        audioTrack.playPause();
        if (audioTrack.isPlaying()) {
          playBtn.classList.add("playing");
        } else{  
            playBtn.classList.remove("playing");
         } 
      });
  
    
      trashBtn.addEventListener("click",()=>{
        audioTrack.destroy();
        audioTrack.cancelAjax();
      });
  

      playBtn.addEventListener("click", () => {
        audioTrack.playPause();
        togglePlay(trackBtn);
        if (audioTrack.isPlaying()) {
          playBtn.classList.add("playing");
        } else{
          playBtn.classList.remove("playing");
        }
      });
  
  
      muteTrackBtn.addEventListener("click",()=>{
        if(audioTrack.isPlaying())
        {
        audioTrack.setVolume(0);
        }else if(audioTrack.getMute() == true){
          audioTrack.setVolume(1.4);
        }
      });
    
      stopLoopBtn.addEventListener("click", () => {
        audioTrack.stop();
        playBtn.classList.remove("playing");
        toggleStop(trackBtn);
      });
  
      
      volumeSlider.addEventListener("mouseup", () => {
        changeVolume(volumeSlider.value);
      });
  
      
      const changeVolume = (volume) => {
        if (volume == 0) {
          muteBtn.classList.add("muted");
        }
         else {
          muteBtn.classList.remove("muted");
        }
      
        audioTrack.setVolume(volume);
      };
      
  
      muteBtn.addEventListener("click", () => {
        if (muteBtn.classList.contains("muted")) {
          muteBtn.classList.remove("muted");
          audioTrack.setVolume(1.4);
        } else {
          audioTrack.setVolume(0);
          muteBtn.classList.add("muted");
        }
      });
   }
      function loadWaveFormTrack4(){

      var audioTrack = WaveSurfer.create({
        container: ".audio",
        waveColor: "white",
        progressColor: "yellow",
        barWidth: 2,
        hideScrollbar:true,
        loopSelection: true
      });
      
      audioTrack.load("audio/HIGH_VOC.mp3");
      audioTrack.setVolume(0.6);

      audioTrack.on('ready', function(){
        audioTrack.addRegion({
          id: 4,
          start: 8, 
          end: 12, 
          color: 'hsla(187, 100%, 30%, 0.1)',         
          drag: true,
          resize: true,
          loop:true
        });});

        const playBtn = document.querySelector(".play-btn");
        const trashBtn = document.querySelector(".trash-btn");
        const trackBtn = document.getElementById("track4");
        const muteTrackBtn = document.getElementById("pause4");
        const volumeSlider = document.querySelector(".volume-slider");
        const muteBtn = document.querySelector(".mute-btn4");
        const addTrack = document.querySelector(".add-track4");
        const stopLoopBtn = document.getElementById("loop-stop");
        const stopSyncBtn = document.getElementById("loop-sync");
        const addSyncBtn = document.getElementById("plus-plus");
        const stopSyncTrackBtn = document.getElementById("loop-sync4");
        const addSyncTrackBtn = document.getElementById("plus-plus4");
      
      
        addTrack.addEventListener("click", ()=>{
          audioTrack.destroy();
        });
      
      
        addSyncBtn.addEventListener("click", () => {
          audioTrack.clearRegions(); 
          audioTrack.addRegion({
            id: 4,
            start: 6, 
            end: 12, 
            color: 'hsla(187, 100%, 30%, 0.1)',         
            drag: true,
            resize: true,
            loop:true
          });});
      
      
        stopSyncBtn.addEventListener("click", () => {
          audioTrack.clearRegions(); 
          });
      
            addSyncTrackBtn.addEventListener("click", () => {
          audioTrack.clearRegions(); 
          audioTrack.addRegion({
            id: 4,
            start: 6, 
            end: 12, 
            color: 'hsla(187, 100%, 30%, 0.1)',         
            drag: true,
            resize: true,
            loop:true
          });});
      
      
        stopSyncTrackBtn.addEventListener("click", () => {
          audioTrack.clearRegions(); 
          });
      
          
          trackBtn.addEventListener("click", () => {
            audioTrack.playPause();
            if (audioTrack.isPlaying()) {
              playBtn.classList.add("playing");
            } else{  
                playBtn.classList.remove("playing");
             } 
          });
      
        
          trashBtn.addEventListener("click",()=>{
            audioTrack.destroy();
            audioTrack.cancelAjax();
          });
      

          playBtn.addEventListener("click", () => {
            audioTrack.playPause();
            togglePlay(trackBtn);
            if (audioTrack.isPlaying()) {
              playBtn.classList.add("playing");
            } else{
              playBtn.classList.remove("playing");
            }
          });
      
      
          muteTrackBtn.addEventListener("click",()=>{
            if(audioTrack.isPlaying())
            {
            audioTrack.setVolume(0);
            }else if(audioTrack.getMute() == true){
              audioTrack.setVolume(0.6);
            }
          });
        
             
        
          stopLoopBtn.addEventListener("click", () => {
            audioTrack.stop();
            playBtn.classList.remove("playing");
            toggleStop(trackBtn);
          });
      
          
          volumeSlider.addEventListener("mouseup", () => {
            changeVolume(volumeSlider.value);
          });
      
          
          const changeVolume = (volume) => {
            if (volume == 0) {
              muteBtn.classList.add("muted");
            }
             else {
              muteBtn.classList.remove("muted");
            }
          
            audioTrack.setVolume(volume);
          };
          
      
          muteBtn.addEventListener("click", () => {
            if (muteBtn.classList.contains("muted")) {
              muteBtn.classList.remove("muted");
              audioTrack.setVolume(0.6);
            } else {
              audioTrack.setVolume(0);
              muteBtn.classList.add("muted");
            }
          });
     }
       function loadWaveFormTrack5(){

        var audioTrack = WaveSurfer.create({
          container: ".audio",
          waveColor: "white",
          progressColor: "lime",
          barWidth: 2,
          hideScrollbar:true,
          loopSelection: true
        });
        
        audioTrack.load("audio/HE_HE_VOC.mp3");
        audioTrack.setVolume(0.4);
        
        audioTrack.on('ready', function(){
          audioTrack.addRegion({
            id: 5,
            start: 0.2, 
            end: 1.4, 
            color: 'hsla(39, 100%, 30%, 0.1)',         
            drag: true,
            resize: true,
            loop:true
          });});
          
          const playBtn = document.querySelector(".play-btn");
          const trashBtn = document.querySelector(".trash-btn");
          const trackBtn = document.getElementById("track5");
          const muteTrackBtn = document.getElementById("pause5");
          const volumeSlider = document.querySelector(".volume-slider");
          const muteBtn = document.querySelector(".mute-btn5");
          const addTrack = document.querySelector(".add-track5");
          const stopLoopBtn = document.getElementById("loop-stop");
          const stopSyncBtn = document.getElementById("loop-sync");
          const addSyncBtn = document.getElementById("plus-plus");    
          const stopSyncTrackBtn = document.getElementById("loop-sync5");
          const addSyncTrackBtn = document.getElementById("plus-plus5");
        
        
          addTrack.addEventListener("click", ()=>{
            audioTrack.destroy();
          });
        
        
          addSyncBtn.addEventListener("click", () => {
            audioTrack.clearRegions(); 
            audioTrack.addRegion({
              id: 5,
              start: 0.2, 
              end: 1.4, 
              color: 'hsla(39, 100%, 30%, 0.1)',         
              drag: true,
              resize: true,
              loop:true
            });});
        

          stopSyncBtn.addEventListener("click", () => {
            audioTrack.clearRegions(); 
            });
        
              addSyncTrackBtn.addEventListener("click", () => {
            audioTrack.clearRegions(); 
            audioTrack.addRegion({
              id: 5,
              start: 0.2, 
              end: 1.4, 
              color: 'hsla(39, 100%, 30%, 0.1)',         
              drag: true,
              resize: true,
              loop:true
            });});
        
        
          stopSyncTrackBtn.addEventListener("click", () => {
            audioTrack.clearRegions(); 
            });
        
            
            trackBtn.addEventListener("click", () => {
              audioTrack.playPause();
              if (audioTrack.isPlaying()) {
                playBtn.classList.add("playing");
              } else{  
                  playBtn.classList.remove("playing");
               } 
            });
        
          
            trashBtn.addEventListener("click",()=>{
              audioTrack.destroy();
              audioTrack.cancelAjax();
            });
        
        
            playBtn.addEventListener("click", () => {
              audioTrack.playPause();
              togglePlay(trackBtn);
              if (audioTrack.isPlaying()) {
                playBtn.classList.add("playing");
              } else{
                playBtn.classList.remove("playing");
              }
            });
        

            muteTrackBtn.addEventListener("click",()=>{
              if(audioTrack.isPlaying())
              {
              audioTrack.setVolume(0);
              }else if(audioTrack.getMute() == true){
                audioTrack.setVolume(0.4);
              }
            });
          
                           
 
            stopLoopBtn.addEventListener("click", () => {
              audioTrack.stop();
              playBtn.classList.remove("playing");
              toggleStop(trackBtn);
            });
        
            
            volumeSlider.addEventListener("mouseup", () => {
              changeVolume(volumeSlider.value);
            });
        
            
            const changeVolume = (volume) => {
              if (volume == 0) {
                muteBtn.classList.add("muted");
              }
               else {
                muteBtn.classList.remove("muted");
              }
            
              audioTrack.setVolume(volume);
            };
            
        
            muteBtn.addEventListener("click", () => {
              if (muteBtn.classList.contains("muted")) {
                muteBtn.classList.remove("muted");
                audioTrack.setVolume(0.4);
              } else {
                audioTrack.setVolume(0);
                muteBtn.classList.add("muted");
              }
            });
       }       
         function loadWaveFormTrack6(){

          var audioTrack = WaveSurfer.create({
            container: ".audio",
            waveColor: "white",
            progressColor: "aqua",
            barWidth: 2,
            hideScrollbar:true,
            loopSelection: true
          });
          
          audioTrack.load("audio/B_VOC.mp3");
          audioTrack.setVolume(0.7);

          audioTrack.on('ready', function(){
            audioTrack.addRegion({
              id: 6,
              start: 8.8, 
              end: 10.5, 
              color: 'hsla(305, 100%, 30%, 0.1)',         
              drag: true,
              resize: true,
              loop:true
            });});
     
            const playBtn = document.querySelector(".play-btn");
            const trashBtn = document.querySelector(".trash-btn");
            const trackBtn = document.getElementById("track6");
            const muteTrackBtn = document.getElementById("pause6");
            const volumeSlider = document.querySelector(".volume-slider");
            const muteBtn = document.querySelector(".mute-btn6");
            const addTrack = document.querySelector(".add-track6");
            const stopLoopBtn = document.getElementById("loop-stop");
            const stopSyncBtn = document.getElementById("loop-sync");
            const addSyncBtn = document.getElementById("plus-plus");     
            const stopSyncTrackBtn = document.getElementById("loop-sync6");
            const addSyncTrackBtn = document.getElementById("plus-plus6");
          
          
            addTrack.addEventListener("click", ()=>{
              audioTrack.destroy();
            });
          
          
            addSyncBtn.addEventListener("click", () => {
              audioTrack.clearRegions(); 
              audioTrack.addRegion({
                id: 6,
                start: 8.8, 
                end: 10.5, 
                color: 'hsla(305, 100%, 30%, 0.1)',         
                drag: true,
                resize: true,
                loop:true
              });});
          
          
            stopSyncBtn.addEventListener("click", () => {
              audioTrack.clearRegions(); 
              });
          
                addSyncTrackBtn.addEventListener("click", () => {
              audioTrack.clearRegions(); 
              audioTrack.addRegion({
                id: 6,
                start: 8.8, 
                end: 10.5, 
                color: 'hsla(305, 100%, 30%, 0.1)',         
                drag: true,
                resize: true,
                loop:true
              });});
          
          
            stopSyncTrackBtn.addEventListener("click", () => {
              audioTrack.clearRegions(); 
              });
          
              

              trackBtn.addEventListener("click", () => {
                audioTrack.playPause();
                if (audioTrack.isPlaying()) {
                  playBtn.classList.add("playing");
                } else{  
                    playBtn.classList.remove("playing");
                 } 
              });
          
            
              trashBtn.addEventListener("click",()=>{
                audioTrack.destroy();
                audioTrack.cancelAjax();
              });
          
          
              playBtn.addEventListener("click", () => {
                audioTrack.playPause();
                togglePlay(trackBtn);
                if (audioTrack.isPlaying()) {
                  playBtn.classList.add("playing");
                } else{
                  playBtn.classList.remove("playing");
                }
              });
          
          
  
              muteTrackBtn.addEventListener("click",()=>{
                if(audioTrack.isPlaying())
                {
                audioTrack.setVolume(0);
                }else if(audioTrack.getMute() == true){
                  audioTrack.setVolume(0.7);
                }
              });

            
              stopLoopBtn.addEventListener("click", () => {
                audioTrack.stop();
                playBtn.classList.remove("playing");
                toggleStop(trackBtn);
              });
          
              
              volumeSlider.addEventListener("mouseup", () => {
                changeVolume(volumeSlider.value);
              });
          
              
              const changeVolume = (volume) => {
                if (volume == 0) {
                  muteBtn.classList.add("muted");
                }
                 else {
                  muteBtn.classList.remove("muted");
                }
              
                audioTrack.setVolume(volume);
              };
              
          
              muteBtn.addEventListener("click", () => {
                if (muteBtn.classList.contains("muted")) {
                  muteBtn.classList.remove("muted");
                  audioTrack.setVolume(0.7);
                } else {
                  audioTrack.setVolume(0);
                  muteBtn.classList.add("muted");
                }
              });
         }         
           function loadWaveFormTrack7(){

            var audioTrack = WaveSurfer.create({
              container: ".audio",
              waveColor: "white",
              progressColor: "orange",
              barWidth: 2,
              hideScrollbar:true,
              loopSelection: true
            });
            
            audioTrack.load("audio/LEAD_1.mp3");
            audioTrack.setVolume(0.6);

            audioTrack.on('ready', function(){
              audioTrack.addRegion({
                id: 7,
                start: 6, 
                end: 9, 
                color: 'hsla(74, 86%, 54%, 0.1)',         
                drag: true,
                resize: true,
                loop:true
              });});

              const playBtn = document.querySelector(".play-btn");
              const trashBtn = document.querySelector(".trash-btn");
              const trackBtn = document.getElementById("track7");
              const muteTrackBtn = document.getElementById("pause7");
              const volumeSlider = document.querySelector(".volume-slider");
              const muteBtn = document.querySelector(".mute-btn7");
              const addTrack = document.querySelector(".add-track7");
              const stopLoopBtn = document.getElementById("loop-stop");
              const stopSyncBtn = document.getElementById("loop-sync");
              const addSyncBtn = document.getElementById("plus-plus");        
              const stopSyncTrackBtn = document.getElementById("loop-sync7");
              const addSyncTrackBtn = document.getElementById("plus-plus7");
            
            
              addTrack.addEventListener("click", ()=>{
                audioTrack.destroy();
              });
            
            
              addSyncBtn.addEventListener("click", () => {
                audioTrack.clearRegions(); 
                audioTrack.addRegion({
                  id: 7,
                  start: 6, 
                  end: 9, 
                  color: 'hsla(74, 86%, 54%, 0.1)',         
                  drag: true,
                  resize: true,
                  loop:true
                });});
  
            
              stopSyncBtn.addEventListener("click", () => {
                audioTrack.clearRegions(); 
                });
            
                  addSyncTrackBtn.addEventListener("click", () => {
                audioTrack.clearRegions(); 
                audioTrack.addRegion({
                  id: 7,
                  start: 6, 
                  end: 9, 
                  color: 'hsla(74, 86%, 54%, 0.1)',         
                  drag: true,
                  resize: true,
                  loop:true
                });});
            
            
              stopSyncTrackBtn.addEventListener("click", () => {
                audioTrack.clearRegions(); 
                });
            
                
                trackBtn.addEventListener("click", () => {
                  audioTrack.playPause();
                  if (audioTrack.isPlaying()) {
                    playBtn.classList.add("playing");
                  } else{  
                      playBtn.classList.remove("playing");
                   } 
                });
            
              
                trashBtn.addEventListener("click",()=>{
                  audioTrack.destroy();
                  audioTrack.cancelAjax();
                });
            

                playBtn.addEventListener("click", () => {
                  audioTrack.playPause();
                  togglePlay(trackBtn);
                  if (audioTrack.isPlaying()) {
                    playBtn.classList.add("playing");
                  } else{
                    playBtn.classList.remove("playing");
                  }
                });
            
            
                muteTrackBtn.addEventListener("click",()=>{
                  if(audioTrack.isPlaying())
                  {
                  audioTrack.setVolume(0);
                  }else if(audioTrack.getMute() == true){
                    audioTrack.setVolume(0.6);
                  }
                });
  
                stopLoopBtn.addEventListener("click", () => {
                  audioTrack.stop();
                  playBtn.classList.remove("playing");
                  toggleStop(trackBtn);
                });
            
                
                volumeSlider.addEventListener("mouseup", () => {
                  changeVolume(volumeSlider.value);
                });
            
                
                const changeVolume = (volume) => {
                  if (volume == 0) {
                    muteBtn.classList.add("muted");
                  }
                   else {
                    muteBtn.classList.remove("muted");
                  }
                
                  audioTrack.setVolume(volume);
                };
                
            
                muteBtn.addEventListener("click", () => {
                  if (muteBtn.classList.contains("muted")) {
                    muteBtn.classList.remove("muted");
                    audioTrack.setVolume(0.6);
                  } else {
                    audioTrack.setVolume(0);
                    muteBtn.classList.add("muted");
                  }
                });
           }                    
             function loadWaveFormTrack8(){

              var audioTrack = WaveSurfer.create({
                container: ".audio",
                waveColor: "white",
                progressColor: "lightseagreen",
                barWidth: 2,       
                hideScrollbar:true,
                loopSelection: true
              });
                
              audioTrack.load("audio/UUHO_VOC.mp3");
              audioTrack.setVolume(0.6);

              audioTrack.on('ready', function(){
                audioTrack.addRegion({
                  id: 8,
                  start: 5, 
                  end: 7, 
                  color: 'hsla(100, 100%, 30%, 0.1)',         
                  drag: true,
                  resize: true,
                  loop:true
                });});

                const playBtn = document.querySelector(".play-btn");
                const trashBtn = document.querySelector(".trash-btn");
                const trackBtn = document.getElementById("track8");
                const muteTrackBtn = document.getElementById("pause8");
                const volumeSlider = document.querySelector(".volume-slider");
                const muteBtn = document.querySelector(".mute-btn8");
                const addTrack = document.querySelector(".add-track8");
                const stopLoopBtn = document.getElementById("loop-stop");
                const stopSyncBtn = document.getElementById("loop-sync");
                const addSyncBtn = document.getElementById("plus-plus");            
                const stopSyncTrackBtn = document.getElementById("loop-sync8");
                const addSyncTrackBtn = document.getElementById("plus-plus8");
              
              
                addTrack.addEventListener("click", ()=>{
                  audioTrack.destroy();
                });
              
              
                addSyncBtn.addEventListener("click", () => {
                  audioTrack.clearRegions(); 
                  audioTrack.addRegion({
                    id: 8,
                    start: 5, 
                    end: 6, 
                    color: 'hsla(100, 100%, 30%, 0.1)',         
                    drag: true,
                    resize: true,
                    loop:true
                  });});
    
              
                stopSyncBtn.addEventListener("click", () => {
                  audioTrack.clearRegions(); 
                  });
              
                    addSyncTrackBtn.addEventListener("click", () => {
                  audioTrack.clearRegions(); 
                  audioTrack.addRegion({
                    id: 8,
                    start: 5, 
                    end: 6, 
                    color: 'hsla(100, 100%, 30%, 0.1)',         
                    drag: true,
                    resize: true,
                    loop:true
                  });});
                
              
                stopSyncTrackBtn.addEventListener("click", () => {
                  audioTrack.clearRegions(); 
                  });
              
                  
                  trackBtn.addEventListener("click", () => {
                    audioTrack.playPause();
                    if (audioTrack.isPlaying()) {
                      playBtn.classList.add("playing");
                    } else{  
                        playBtn.classList.remove("playing");
                     } 
                  });
              

                  trashBtn.addEventListener("click",()=>{
                    audioTrack.destroy();
                    audioTrack.cancelAjax();
                  });
              
              
                  playBtn.addEventListener("click", () => {
                    audioTrack.playPause();
                    togglePlay(trackBtn);
                    if (audioTrack.isPlaying()) {
                      playBtn.classList.add("playing");
                    } else{
                      playBtn.classList.remove("playing");
                    }
                  });
              
              
                  muteTrackBtn.addEventListener("click",()=>{
                    if(audioTrack.isPlaying())
                    {
                    audioTrack.setVolume(0);
                    }else if(audioTrack.getMute() == true){
                      audioTrack.setVolume(0.6);
                    }
                  });
    
                  stopLoopBtn.addEventListener("click", () => {
                    audioTrack.stop();
                    playBtn.classList.remove("playing");
                    toggleStop(trackBtn);
                  });
              
                  
                  volumeSlider.addEventListener("mouseup", () => {
                    changeVolume(volumeSlider.value);
                  });
              
                  
                  const changeVolume = (volume) => {
                    if (volume == 0) {
                      muteBtn.classList.add("muted");
                    }
                     else {
                      muteBtn.classList.remove("muted");
                    }
                  
                    audioTrack.setVolume(volume);
                  };
                  
              
                  muteBtn.addEventListener("click", () => {
                    if (muteBtn.classList.contains("muted")) {
                      muteBtn.classList.remove("muted");
                      audioTrack.setVolume(0.6);
                    } else {
                      audioTrack.setVolume(0);
                      muteBtn.classList.add("muted");
                    }
                  });
             }

// Note: This is just in the progress of making the app

              // function playTrack1(){

            //   const playBtn = document.querySelector(".play-btn");        
            //   const syncBtn = document.querySelector(".sync-btn");
            //   const trackBtn = document.querySelector(".track-btn");          
            //   const volumeSlider = document.querySelector(".volume-slider");
              
            //   trackBtn.addEventListener("click",() =>{
            //     audioTrack.playPause(); 
            //     if (audioTrack.isPlaying()) {
            //       playBtn.classList.add("playing");
            //     } else {
            //       playBtn.classList.remove("playing");
            //     }
            //   });
              
            //   syncBtn.addEventListener("click",() =>{
            //     console.log('looping');
            //   });
              
              
            //   playBtn.addEventListener("click", () => {
            //     audioTrack.playPause();
              
            //     if (audioTrack.isPlaying()) {
            //       playBtn.classList.add("playing");
            //     } else {
            //       playBtn.classList.remove("playing");
            //     }
            //   });
              
            //   stopBtn.addEventListener("click", () => {
            //     audioTrack.stop();
            //     playBtn.classList.remove("playing");
            //   });
              
            //   volumeSlider.addEventListener("mouseup", () => {
            //     changeVolume(volumeSlider.value);
            //   });
              
            //   const changeVolume = (volume) => {
            //     if (volume == 0) {
            //       muteBtn.classList.add("muted");
            //     } else {
            //       muteBtn.classList.remove("muted");
            //     }
              
            //     audioTrack.setVolume(volume);
            //   };
              
            //   muteBtn.addEventListener("click", () => {
            //     if (muteBtn.classList.contains("muted")) {
            //       muteBtn.classList.remove("muted");
            //       audioTrack.setVolume(0.5);
            //       volumeSlider.value = 0.5;
            //     } else {
            //       audioTrack.setVolume(0);
            //       muteBtn.classList.add("muted");
            //       volumeSlider.value = 0;
            //     }
            //   });
            //   }

            //   function playTrack2(){
                
            //     const playBtn = document.querySelector(".play-btn");        
            //     var audioTrack = WaveSurfer;
                
            //     audioTrack.load("../audio/ambient.mp3");
              
            //     trackBtn.addEventListener("click",() =>{
            //       audioTrack.playPause(); 
            //     });
                
            //     syncBtn.addEventListener("click",() =>{
            //       console.log('looping');
            //     });
                
                
            //     playBtn.addEventListener("click", () => {
            //       audioTrack.playPause();
                
            //       if (audioTrack.isPlaying()) {
            //         playBtn.classList.add("playing");
            //       } else {
            //         playBtn.classList.remove("playing");
            //       }
            //     });
                          
            //     }

            //     function playTrack3(){

            //       const playBtn = document.querySelector(".play-btn");
            //       const syncBtn = document.querySelector(".sync-btn");
            //       const trackBtn = document.querySelector(".track-btn");
                  
            //       const volumeSlider = document.querySelector(".volume-slider");
                  
            //       trackBtn.addEventListener("click",() =>{
            //         audioTrack.playPause(); 
            //       });
                  
            //       syncBtn.addEventListener("click",() =>{
            //         console.log('looping');
            //       });
                  
                  
            //       playBtn.addEventListener("click", () => {
            //         audioTrack.playPause();
                  
            //         if (audioTrack.isPlaying()) {
            //           playBtn.classList.add("playing");
            //         } else {
            //           playBtn.classList.remove("playing");
            //         }
            //       });
                  
            //       stopBtn.addEventListener("click", () => {
            //         audioTrack.stop();
            //         playBtn.classList.remove("playing");
            //       });
                  
            //       volumeSlider.addEventListener("mouseup", () => {
            //         changeVolume(volumeSlider.value);
            //       });
                  
            //       const changeVolume = (volume) => {
            //         if (volume == 0) {
            //           muteBtn.classList.add("muted");
            //         } else {
            //           muteBtn.classList.remove("muted");
            //         }
                  
            //         audioTrack.setVolume(volume);
            //       };
                  
            //       muteBtn.addEventListener("click", () => {
            //         if (muteBtn.classList.contains("muted")) {
            //           muteBtn.classList.remove("muted");
            //           audioTrack.setVolume(0.5);
            //           volumeSlider.value = 0.5;
            //         } else {
            //           audioTrack.setVolume(0);
            //           muteBtn.classList.add("muted");
            //           volumeSlider.value = 0;
            //         }
            //       });
            //       }

            //       function playTrack4(){

            //         const playBtn = document.querySelector(".play-btn");
            //         const syncBtn = document.querySelector(".sync-btn");
            //         const trackBtn = document.querySelector(".track-btn");
                    
            //         const volumeSlider = document.querySelector(".volume-slider");
                    
            //         trackBtn.addEventListener("click",() =>{
            //           audioTrack.playPause(); 
            //         });
                    
            //         syncBtn.addEventListener("click",() =>{
            //           console.log('looping');
            //         });
                    
                    
            //         playBtn.addEventListener("click", () => {
            //           audioTrack.playPause();
                    
            //           if (audioTrack.isPlaying()) {
            //             playBtn.classList.add("playing");
            //           } else {
            //             playBtn.classList.remove("playing");
            //           }
            //         });
                    
            //         stopBtn.addEventListener("click", () => {
            //           audioTrack.stop();
            //           playBtn.classList.remove("playing");
            //         });
                    
            //         volumeSlider.addEventListener("mouseup", () => {
            //           changeVolume(volumeSlider.value);
            //         });
                    
            //         const changeVolume = (volume) => {
            //           if (volume == 0) {
            //             muteBtn.classList.add("muted");
            //           } else {
            //             muteBtn.classList.remove("muted");
            //           }
                    
            //           audioTrack.setVolume(volume);
            //         };
                    
            //         muteBtn.addEventListener("click", () => {
            //           if (muteBtn.classList.contains("muted")) {
            //             muteBtn.classList.remove("muted");
            //             audioTrack.setVolume(0.5);
            //             volumeSlider.value = 0.5;
            //           } else {
            //             audioTrack.setVolume(0);
            //             muteBtn.classList.add("muted");
            //             volumeSlider.value = 0;
            //           }
            //         });
            //         }

            //         function playTrack5(){

            //           const playBtn = document.querySelector(".play-btn");
            //           const syncBtn = document.querySelector(".sync-btn");
            //           const trackBtn = document.querySelector(".track-btn");
                      
            //           const volumeSlider = document.querySelector(".volume-slider");
                      
            //           trackBtn.addEventListener("click",() =>{
            //             audioTrack.playPause(); 
            //           });
                      
            //           syncBtn.addEventListener("click",() =>{
            //             console.log('looping');
            //           });
                      
                      
            //           playBtn.addEventListener("click", () => {
            //             audioTrack.playPause();
                      
            //             if (audioTrack.isPlaying()) {
            //               playBtn.classList.add("playing");
            //             } else {
            //               playBtn.classList.remove("playing");
            //             }
            //           });
                      
            //           stopBtn.addEventListener("click", () => {
            //             audioTrack.stop();
            //             playBtn.classList.remove("playing");
            //           });
                      
            //           volumeSlider.addEventListener("mouseup", () => {
            //             changeVolume(volumeSlider.value);
            //           });
                      
            //           const changeVolume = (volume) => {
            //             if (volume == 0) {
            //               muteBtn.classList.add("muted");
            //             } else {
            //               muteBtn.classList.remove("muted");
            //             }
                      
            //             audioTrack.setVolume(volume);
            //           };
                      
            //           muteBtn.addEventListener("click", () => {
            //             if (muteBtn.classList.contains("muted")) {
            //               muteBtn.classList.remove("muted");
            //               audioTrack.setVolume(0.5);
            //               volumeSlider.value = 0.5;
            //             } else {
            //               audioTrack.setVolume(0);
            //               muteBtn.classList.add("muted");
            //               volumeSlider.value = 0;
            //             }
            //           });
            //           }

            //           function playTrack6(){

            //             const playBtn = document.querySelector(".play-btn");
            //             const syncBtn = document.querySelector(".sync-btn");
            //             const trackBtn = document.querySelector(".track-btn");
                        
            //             const volumeSlider = document.querySelector(".volume-slider");
                        
            //             trackBtn.addEventListener("click",() =>{
            //               audioTrack.playPause(); 
            //             });
                        
            //             syncBtn.addEventListener("click",() =>{
            //               console.log('looping');
            //             });
                        
                        
            //             playBtn.addEventListener("click", () => {
            //               audioTrack.playPause();
                        
            //               if (audioTrack.isPlaying()) {
            //                 playBtn.classList.add("playing");
            //               } else {
            //                 playBtn.classList.remove("playing");
            //               }
            //             });
                        
            //             stopBtn.addEventListener("click", () => {
            //               audioTrack.stop();
            //               playBtn.classList.remove("playing");
            //             });
                        
            //             volumeSlider.addEventListener("mouseup", () => {
            //               changeVolume(volumeSlider.value);
            //             });
                        
            //             const changeVolume = (volume) => {
            //               if (volume == 0) {
            //                 muteBtn.classList.add("muted");
            //               } else {
            //                 muteBtn.classList.remove("muted");
            //               }
                        
            //               audioTrack.setVolume(volume);
            //             };
                        
            //             muteBtn.addEventListener("click", () => {
            //               if (muteBtn.classList.contains("muted")) {
            //                 muteBtn.classList.remove("muted");
            //                 audioTrack.setVolume(0.5);
            //                 volumeSlider.value = 0.5;
            //               } else {
            //                 audioTrack.setVolume(0);
            //                 muteBtn.classList.add("muted");
            //                 volumeSlider.value = 0;
            //               }
            //             });
            //             }

            //             function playTrack7(){

            //               const playBtn = document.querySelector(".play-btn");
            //               const syncBtn = document.querySelector(".sync-btn");
            //               const trackBtn = document.querySelector(".track-btn");
                          
            //               const volumeSlider = document.querySelector(".volume-slider");
                          
            //               trackBtn.addEventListener("click",() =>{
            //                 audioTrack.playPause(); 
            //               });
                          
            //               syncBtn.addEventListener("click",() =>{
            //                 console.log('looping');
            //               });
                          
                          
            //               playBtn.addEventListener("click", () => {
            //                 audioTrack.playPause();
                          
            //                 if (audioTrack.isPlaying()) {
            //                   playBtn.classList.add("playing");
            //                 } else {
            //                   playBtn.classList.remove("playing");
            //                 }
            //               });
                          
            //               stopBtn.addEventListener("click", () => {
            //                 audioTrack.stop();
            //                 playBtn.classList.remove("playing");
            //               });
                          
            //               volumeSlider.addEventListener("mouseup", () => {
            //                 changeVolume(volumeSlider.value);
            //               });
                          
            //               const changeVolume = (volume) => {
            //                 if (volume == 0) {
            //                   muteBtn.classList.add("muted");
            //                 } else {
            //                   muteBtn.classList.remove("muted");
            //                 }
                          
            //                 audioTrack.setVolume(volume);
            //               };
                          
            //               muteBtn.addEventListener("click", () => {
            //                 if (muteBtn.classList.contains("muted")) {
            //                   muteBtn.classList.remove("muted");
            //                   audioTrack.setVolume(0.5);
            //                   volumeSlider.value = 0.5;
            //                 } else {
            //                   audioTrack.setVolume(0);
            //                   muteBtn.classList.add("muted");
            //                   volumeSlider.value = 0;
            //                 }
            //               });
            //               }


            // function loopButton(){
            //   const loopBtn = document.querySelector(".sync-btn");
            //   // loopBtn.addEventListener("click",()=>{
            //     audioTrack.loop = true;
            //     console.log('looping ' + audioTrack);
            //   // });
            // }




          //   function loopTrack1(){
          //     var audioTrack = WaveSurfer.create({
          //       container: ".audio",
          //       waveColor: "black",
          //       progressColor: "red",
          //       barWidth: 2,
          //        loopSelection: true
          //     });
              
              
          //     audioTrack.load("../audio/drums.mp3");
          // }

          // function loopTrack2(){
          //     ambient.loop = true;
          //     console.log('looping ');
          // }
          // function loopTrack3(){
          //     base.loop = true;
          //     console.log('looping ');
          // }
          // function loopTrack4(){
          //     background.loop = true;
          //     console.log('looping ');
          // }
          // function loopTrack5(){
          //     meoldy.loop = true;
          //     console.log('looping ');
          // }
          // function loopTrack6(){
          //     noise.loop = true;
          //     console.log('looping ');
          // }
          // function loopTrack7(){
          //     piano.loop = true;
          //     console.log('looping ');
          // }

            // loadWaveFormTrack1();
            // loadWaveFormTrack2();
            // loadWaveFormTrack3();
            // loadWaveFormTrack4();
            // loadWaveFormTrack5();
            // loadWaveFormTrack6();
            // loadWaveFormTrack7();

 