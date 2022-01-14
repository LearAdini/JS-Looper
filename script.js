function togglePlay(x) {
  x.classList.toggle("fa-pause");
  x.classList.toggle("fa-play");
  // checkStop(x); 
};

function toggleLooper(x){
  x.classList.toggle("fa-plus");
  const startSyncBtn = document.getElementById("plus-plus");
  startSyncBtn.style.display= `inline-block`;
  const SyncBtn = document.getElementById("loop-sync");
  SyncBtn.style.display = `none`;
};

// function checkStop(x){
 
 
//   if (x.classList == "fa-pause") {
//     x.classList == "fa-play";
//     playBtn.classList.add("playing");
//   } else{
//     x.classList == "fa-play";
//     playBtn.classList.remove("playing");
//   }

    // x.classList.toggle("fa-play");
    // x.classList.toggle("fa-play");
  
  // const startSyncBtn = document.getElementById("plus-plus");
  // startSyncBtn.style.display= `inline-block`;
  // const SyncBtn = document.getElementById("loop-sync");
  // SyncBtn.style.display = `none`;
  
  // x.classList.toggle("fa-plus");
  // const startSyncBtn = document.getElementById("fa-pause");
  // if(x.classList == "fa-pause")
  // {
 
  // // x.style.display= `none`;
  // x.classList =`fa-play`;
  // x.style.display = `inline-block`;
  //}
  // x.classList.toggle("fa-play");
  // x.classList.toggle("fa-stop");

//   x.classList.toggle("fa-plus");
//  const playBtn = document.querySelector(".track-btn");
//  const stopBtn = document.querySelector("#loop-stop");

//  if()

//   const startSyncBtn = document.getElementById("plus-plus");
//   startSyncBtn.style.display= `inline-block`;
//     const SyncBtn = document.getElementById("loop-sync");
//   SyncBtn.style.display = `none`;
//};

function addLooper(x){
  const SyncBtn = document.getElementById("loop-sync");
  SyncBtn.style.display = `inline-block`;

  const startSyncBtn = document.getElementById("plus-plus");
  startSyncBtn.style.display= `none`;
};

function togglePlayLoop(x) {
  x.classList.toggle("fa-pause");
  x.classList.toggle("fa-play");
};

function showInfo(){
  var x = document.querySelector(".card");
  
  if (x.style.display == "none")
   {
    x.style.display = `inline-block`;
    
    var h1 = document.querySelector(".display-text");
   
    h1.innerHTML = `
    <p id ="info-add-inst" class="br">
    <span class="song-name">Add<br>Piano</span>  
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

  else 
  {
   x.style.display = "none";
  }
};

// function toggleStop() {
//   x = document.getElementById('track2');
//   // x.classList.toggle("fa-pause");
//   // x.classList.toggle("fa-pause");
//   // x.classList.toggle("fa-volume-mute");
//   // x.classList.toggle("fa-play");
//   // x.classList.toggle("fa-play");

//   // if(x.classList == "fa-play")
//   // {
//   //   x.classList.remove("playing")
//   // }
//   // x.classList.toggle("fa-play");
//   // x.classList.toggle("fa-pause");


// }

function loadWaveFormTrack1(){

var audioTrack = WaveSurfer.create({
  container: ".audio",
  waveColor: "white",
  progressColor: "red",
  barWidth: 2,
  barHeight: 0.7,
  hideScrollbar:true,
  loopSelection: true,
});

audioTrack.load("audio/drums.mp3");
audioTrack.setVolume(1);


audioTrack.on('ready', function(){
  audioTrack.addRegion({
    id: 1,
    start: 0, 
    end: 2.98, 
    color: 'hsla(254, 84%, 53%, 0.1)',         
    drag: true,
    resize: true,
    loop:true
  });});

  const playBtn = document.querySelector(".play-btn");
  const trashBtn = document.querySelector(".trash-btn");
  const trackBtn = document.getElementById("track1");
  const muteTrackBtn = document.getElementById("pause1");
  const stopTrackBtn = document.getElementById("stop1");
  const volumeSlider = document.querySelector(".volume-slider");
  const muteBtn = document.querySelector(".mute-btn1");
  const stopLoopBtn = document.getElementById("loop-stop");
  const stopSyncBtn = document.getElementById("loop-sync");
  const addSyncBtn = document.getElementById("plus-plus");

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
      });
  })

  stopSyncBtn.addEventListener("click", () => {
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
    audioTrack.cancelAjax()();
  });

   
  playBtn.addEventListener("click", () => {
    audioTrack.playPause();
    togglePlayLoop(trackBtn);
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
      audioTrack.setVolume(1);
    }
  });


  stopTrackBtn.addEventListener("click", () => {   
    audioTrack.stop();
    togglePlayLoop(trackBtn);
    playBtn.classList.remove("playing");

      if(playBtn.classList == "playing")
      {
        playBtn.classList.remove("playing");
      }
      else
      {
        playBtn.classList.add("pause");
      }
  });


  stopLoopBtn.addEventListener("click", () => {
    audioTrack.stop();
    togglePlayLoop(trackBtn);
    playBtn.classList.remove("playing");
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
      audioTrack.setVolume(1);
      volumeSlider.value = 1;
    } else {
      audioTrack.setVolume(0);
      muteBtn.classList.add("muted");
      volumeSlider.value = 0;
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
  
  audioTrack.load("audio/ambient.mp3");
  audioTrack.setVolume(0.3);


  audioTrack.on('ready', function(){
    audioTrack.addRegion({
      id: 2,
      start: 0, 
      end: 3, 
      color: 'hsla(74, 86%, 54%, 0.1)',         
      drag: true,
      resize: true,
      loop:true
    });});

    const playBtn = document.querySelector(".play-btn");
    const trashBtn = document.querySelector(".trash-btn");
    const trackBtn = document.getElementById("track2");
    const muteTrackBtn = document.getElementById("pause2");
    const stopTrackBtn = document.getElementById("stop2");
    const volumeSlider = document.querySelector(".volume-slider");
    const muteBtn = document.querySelector(".mute-btn2");
    const stopLoopBtn = document.getElementById("loop-stop");
    const stopSyncBtn = document.getElementById("loop-sync");
    const addSyncBtn = document.getElementById("plus-plus");
  
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
        });
    })
  
    stopSyncBtn.addEventListener("click", () => {
    audioTrack.clearRegions(); 
    });
    


    stopSyncBtn.addEventListener("click", () => {
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
      togglePlayLoop(trackBtn);
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
  
 
    stopTrackBtn.addEventListener("click", () => {   
      audioTrack.stop();
      togglePlayLoop(trackBtn);
      playBtn.classList.remove("playing");

        if(playBtn.classList == "playing")
        {
          playBtn.classList.remove("playing");
        }
        else
        {
          playBtn.classList.add("pause");
        }
    });

  
    stopLoopBtn.addEventListener("click", () => {
      audioTrack.stop();
      togglePlayLoop(trackBtn);
      playBtn.classList.remove("playing");
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
        volumeSlider.value = 0.3;
      } else {
        audioTrack.setVolume(0);
        muteBtn.classList.add("muted");
        volumeSlider.value = 0;
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
  
  audioTrack.load("audio/base.mp3");
  audioTrack.setVolume(1.4);

  audioTrack.on('ready', function(){
    audioTrack.addRegion({
      id: 3,
      start: 9, 
      end: 12, 
      color: 'hsla(0, 100%, 30%, 0.1)',         
      drag: true,
      resize: true,
      loop:true
    });});

    const playBtn = document.querySelector(".play-btn");
    const trashBtn = document.querySelector(".trash-btn");
    const trackBtn = document.getElementById("track3");
    const muteTrackBtn = document.getElementById("pause3");
    const stopTrackBtn = document.getElementById("stop3");
    const volumeSlider = document.querySelector(".volume-slider");
    const muteBtn = document.querySelector(".mute-btn3");
    const stopLoopBtn = document.getElementById("loop-stop");
    const stopSyncBtn = document.getElementById("loop-sync");
    const addSyncBtn = document.getElementById("plus-plus");
  
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
        });
    })
  
    stopSyncBtn.addEventListener("click", () => {
    audioTrack.clearRegions(); 
    });


    stopSyncBtn.addEventListener("click", () => {
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
      togglePlayLoop(trackBtn);
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
  
 
    stopTrackBtn.addEventListener("click", () => {   
      audioTrack.stop();
      togglePlayLoop(trackBtn);
      playBtn.classList.remove("playing");

        if(playBtn.classList == "playing")
        {
          playBtn.classList.remove("playing");
        }
        else
        {
          playBtn.classList.add("pause");
        }
    });

  
    stopLoopBtn.addEventListener("click", () => {
      audioTrack.stop();
      togglePlayLoop(trackBtn);
      playBtn.classList.remove("playing");
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
        volumeSlider.value = 1.4;
      } else {
        audioTrack.setVolume(0);
        muteBtn.classList.add("muted");
        volumeSlider.value = 0;
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
      
      audioTrack.load("audio/background.mp3");
      audioTrack.setVolume(0.6);

      audioTrack.on('ready', function(){
        audioTrack.addRegion({
          id: 4,
          start: 6, 
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
        const stopTrackBtn = document.getElementById("stop4");
        const volumeSlider = document.querySelector(".volume-slider");
        const muteBtn = document.querySelector(".mute-btn4");
        const stopLoopBtn = document.getElementById("loop-stop");
        const stopSyncBtn = document.getElementById("loop-sync");
        const addSyncBtn = document.getElementById("plus-plus");
      
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
            });
        })
      
        stopSyncBtn.addEventListener("click", () => {
        audioTrack.clearRegions(); 
        });

    
        stopSyncBtn.addEventListener("click", () => {
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
          togglePlayLoop(trackBtn);
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
      
     
        stopTrackBtn.addEventListener("click", () => {   
          audioTrack.stop();
          togglePlayLoop(trackBtn);
          playBtn.classList.remove("playing");
    
            if(playBtn.classList == "playing")
            {
              playBtn.classList.remove("playing");
            }
            else
            {
              playBtn.classList.add("pause");
            }
        });
    
      
        stopLoopBtn.addEventListener("click", () => {
          audioTrack.stop();
          togglePlayLoop(trackBtn);
          playBtn.classList.remove("playing");
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
            volumeSlider.value = 0.6;
          } else {
            audioTrack.setVolume(0);
            muteBtn.classList.add("muted");
            volumeSlider.value = 0;
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
        
        audioTrack.load("audio/melodic-loop.mp3");
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
          const stopTrackBtn = document.getElementById("stop5");
          const volumeSlider = document.querySelector(".volume-slider");
          const muteBtn = document.querySelector(".mute-btn5");
          const stopLoopBtn = document.getElementById("loop-stop");
          const stopSyncBtn = document.getElementById("loop-sync");
          const addSyncBtn = document.getElementById("plus-plus");
        
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
              });
          })
        
          stopSyncBtn.addEventListener("click", () => {
          audioTrack.clearRegions(); 
          });

    
        stopSyncBtn.addEventListener("click", () => {
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
            togglePlayLoop(trackBtn);
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
        
       
          stopTrackBtn.addEventListener("click", () => {   
            audioTrack.stop();
            togglePlayLoop(trackBtn);
            playBtn.classList.remove("playing");
      
              if(playBtn.classList == "playing")
              {
                playBtn.classList.remove("playing");
              }
              else
              {
                playBtn.classList.add("pause");
              }
          });
      
        
          stopLoopBtn.addEventListener("click", () => {
            audioTrack.stop();
            togglePlayLoop(trackBtn);
            playBtn.classList.remove("playing");
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
              volumeSlider.value = 0.4;
            } else {
              audioTrack.setVolume(0);
              muteBtn.classList.add("muted");
              volumeSlider.value = 0;
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
          
          audioTrack.load("audio/noise.mp3");
          audioTrack.setVolume(0.3);

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
            const stopTrackBtn = document.getElementById("stop6");
            const volumeSlider = document.querySelector(".volume-slider");
            const muteBtn = document.querySelector(".mute-btn6");
            const stopLoopBtn = document.getElementById("loop-stop");
            const stopSyncBtn = document.getElementById("loop-sync");
            const addSyncBtn = document.getElementById("plus-plus");
          
            addSyncBtn.addEventListener("click", () => {
              audioTrack.clearRegions(); 
              audioTrack.addRegion({
                  id: 6,
                  start: 6, 
                  end: 9, 
                  color: 'hsla(305, 100%, 30%, 0.1)',         
                  drag: true,
                  resize: true,
                  loop:true
                });
            })
          
            stopSyncBtn.addEventListener("click", () => {
            audioTrack.clearRegions(); 
            });

    
            stopSyncBtn.addEventListener("click", () => {
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
              togglePlayLoop(trackBtn);
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
          
         
            stopTrackBtn.addEventListener("click", () => {   
              audioTrack.stop();
              togglePlayLoop(trackBtn);
              playBtn.classList.remove("playing");
        
                if(playBtn.classList == "playing")
                {
                  playBtn.classList.remove("playing");
                }
                else
                {
                  playBtn.classList.add("pause");
                }
            });
        
          
            stopLoopBtn.addEventListener("click", () => {
              audioTrack.stop();
              togglePlayLoop(trackBtn);
              playBtn.classList.remove("playing");
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
                volumeSlider.value = 0.3;
              } else {
                audioTrack.setVolume(0);
                muteBtn.classList.add("muted");
                volumeSlider.value = 0;
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
            
            audioTrack.load("audio/piano.mp3");
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
              const stopTrackBtn = document.getElementById("stop7");
              const volumeSlider = document.querySelector(".volume-slider");
              const muteBtn = document.querySelector(".mute-btn7");
              const stopLoopBtn = document.getElementById("loop-stop");
              const stopSyncBtn = document.getElementById("loop-sync");
              const addSyncBtn = document.getElementById("plus-plus");
            
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
                  });
              })
            
              stopSyncBtn.addEventListener("click", () => {
              audioTrack.clearRegions(); 
              });

    
              stopSyncBtn.addEventListener("click", () => {
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
                togglePlayLoop(trackBtn);
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
            
           
              stopTrackBtn.addEventListener("click", () => {   
                audioTrack.stop();
                togglePlayLoop(trackBtn);
                playBtn.classList.remove("playing");
          
                  if(playBtn.classList == "playing")
                  {
                    playBtn.classList.remove("playing");
                  }
                  else
                  {
                    playBtn.classList.add("pause");
                  }
              });
          
            
              stopLoopBtn.addEventListener("click", () => {
                audioTrack.stop();
                togglePlayLoop(trackBtn);
                playBtn.classList.remove("playing");
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
                  volumeSlider.value = 0.6;
                } else {
                  audioTrack.setVolume(0);
                  muteBtn.classList.add("muted");
                  volumeSlider.value = 0;
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
                
              audioTrack.load("audio/fx.mp3");
              audioTrack.setVolume(0.6);

              audioTrack.on('ready', function(){
                audioTrack.addRegion({
                  id: 8,
                  start: 5, 
                  end: 6, 
                  color: 'hsla(100, 100%, 30%, 0.1)',         
                  drag: true,
                  resize: true,
                  loop:true
                });});

                const playBtn = document.querySelector(".play-btn");
                const trashBtn = document.querySelector(".trash-btn");
                const trackBtn = document.getElementById("track8");
                const muteTrackBtn = document.getElementById("pause8");
                const stopTrackBtn = document.getElementById("stop8");
                const volumeSlider = document.querySelector(".volume-slider");
                const muteBtn = document.querySelector(".mute-btn8");
                const stopLoopBtn = document.getElementById("loop-stop");
                const stopSyncBtn = document.getElementById("loop-sync");
                const addSyncBtn = document.getElementById("plus-plus");
              
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
                    });
                })
              
                stopSyncBtn.addEventListener("click", () => {
                audioTrack.clearRegions(); 
                });

    
                stopSyncBtn.addEventListener("click", () => {
                audioTrack.clearRegions();               
                  });
                

                // } else { 
                //   audioTrack.on('destroy', function(){
                //   audioTrack.addRegion({
                //     id: 8,
                //     start: 5, 
                //     end: 6, 
                //     color: 'hsla(100, 100%, 30%, 0.1)',         
                //     drag: true,
                //     resize: true,
                //     loop:true
                //   });});
             

                
                trackBtn.addEventListener("click", () => {
                  audioTrack.playPause();
                  if (audioTrack.isPlaying()) {
                    playBtn.classList.add("playing");
                  } else{  
                      playBtn.classList.remove("playing");
                   } 
                   trackBtn.on('audioTrack',function(){

                   })
                });
              
                trashBtn.addEventListener("click",()=>{
                  audioTrack.destroy();
                  audioTrack.cancelAjax();
                });
            
                 
                playBtn.addEventListener("click", () => {
                  audioTrack.playPause();
                  togglePlayLoop(trackBtn);
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
              
             
                stopTrackBtn.addEventListener("click", () => {   
                  audioTrack.stop();
                  togglePlayLoop(trackBtn);
                  playBtn.classList.remove("playing");
            
                    if(playBtn.classList == "playing")
                    {
                      playBtn.classList.remove("playing");
                    }
                    else
                    {
                      playBtn.classList.add("pause");
                    }
                });
                  // playBtn.classList.remove("playing");
            
                  //   if(playBtn.classList == "playing")
                  //   {
                  //     playBtn.classList.remove("playing");
                  //   }
                  //   else
                  //   {
                  //     playBtn.classList.add("pause");
                  //   }
                 
                stopLoopBtn.addEventListener("click", () => {
                  audioTrack.stop();
                  togglePlayLoop(trackBtn);
                  playBtn.classList.remove("playing");
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
                    volumeSlider.value = 0.6;
                  } else {
                    audioTrack.setVolume(0);
                    muteBtn.classList.add("muted");
                    volumeSlider.value = 0;
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

 