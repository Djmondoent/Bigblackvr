AFRAME.registerComponent("bigblackvr-loading-screen", {
  schema: {
    backgroundColor: { type: "color", default: "#101010" },
    enabled: { default: true },
  },

  init: function () {
    this.loader = null;
    this.sceneEl = document.querySelector("a-scene");
    if (this.data.enabled) {
      this.setupLoader();
    }
  },

  setupLoader: function () {
    this.loader = document.createElement("div");
    this.loader.id = "bigblackvr-loader";
    this.loader.style.backgroundColor = this.data.backgroundColor;
    this.loader.style.position = "fixed";
    this.loader.style.top = "0";
    this.loader.style.left = "0";
    this.loader.style.width = "100%";
    this.loader.style.height = "100%";
    this.loader.style.zIndex = "9999";
    document.body.appendChild(this.loader);
    this.loader.innerHTML = `
   
    
        
         <a-asset-item
          id="readyplayer"
          src="https://cdn.glitch.global/cb88aa99-1306-429f-9bd6-a868edd0dab9/readyplayermeavatar.glb?v=1658519663501"
          crossorigin="anonymous"
        >
        </a-asset-item>

        <a-asset-item
          id="terminater"
          src="https://cdn.glitch.global/cb88aa99-1306-429f-9bd6-a868edd0dab9/mech_robotic_police_3d_model_w_scifi_gun.glb?v=1680933736069"
          crossorigin="anonymous"
        >
        </a-asset-item>

        <a-asset-item
          id="livingroom"
          src="https://cdn.glitch.com/cb88aa99-1306-429f-9bd6-a868edd0dab9%2Ftheater.glb?v=1630556913089"
          crossorigin="anonymous"
        >
        </a-asset-item>

        <a-asset-item
          id="lefthand"
          src="https://cdn.glitch.global/cb88aa99-1306-429f-9bd6-a868edd0dab9/leftHandHigh%20(1).glb?v=1659726414863"
          crossorigin="anonymous"
        >
        </a-asset-item>

        <a-asset-item
          id="righthand"
          src="https://cdn.glitch.global/cb88aa99-1306-429f-9bd6-a868edd0dab9/rightHandHigh.glb?v=1659726468303"
          crossorigin="anonymous"
        >
        </a-asset-item>
        
                <a-assets-item id="usercontent" src="https://cdn.glitch.global/cb88aa99-1306-429f-9bd6-a868edd0dab9/loadinguserworlds.glb?v=1658226406537" > </a-asset-item>

        
          <a-asset-item id="box-model" src="https://cdn.glitch.global/cb88aa99-1306-429f-9bd6-a868edd0dab9/Big%20Black%20VR.glb?v=1680048115355"></a-asset-item>
          
          <img id="mondo" src="https://cdn.glitch.com/cb88aa99-1306-429f-9bd6-a868edd0dab9%2Fnight_360_6k.jpg?v=1631033142777"   crossorigin="anonymous"
        />
        
        
        <img id="bbi"  src="https://cdn.glitch.com/cb88aa99-1306-429f-9bd6-a868edd0dab9%2Fblack%20bitcoin%20billionaire.png?v=1621993177466" crossorigin="anonymous" />
        
          
        </a-assets>
        
        
        <a-scene loading-screen="dotsColor: red; backgroundColor: black"  render-order="first, background, foreground, detail,  ">
        
            render-order="first, background, foreground, detail,  "

        
        <a-entity id="user" gltf-model="#usercontent" rotation="0 0 0" position="0 -5.09 -53" scale="71.5 71.5 71.5"
       
        ></a-entity>
        
        
        <a-entity id="rotating-box" gltf-model="#box-model" rotation="0 0 0" position="0 6 -53" scale="0.5 0.5 0.5"
        animation="property: rotation; to: 0 360 0; dur: 4000; easing: linear; loop: true" 
        ></a-entity>
        
        
       <a-sky id="sky" rotation="0 -80 0" src="#bbi"> </a-sky>
          <audio id="travelsound1" volume="0.01" autoplay="">
        <source
          src=" 
      https://cdn.glitch.global/cb88aa99-1306-429f-9bd6-a868edd0dab9/bigblackvrtravelsound_Master.wav?v=1680167351746"
          type="audio/wav"
        />
      </audio>

      <audio
        id="gameplay2"
        volume="0.01"
        autoplay="true"
        src="#gameplay2"
        type="audio/wav"
        loop="true"
        crossorigin="anonymous"
      ></audio>

      <!-- experiment with raycasting interval; slight performance improvement but jittery appearance in world -->

      <!-- Left Controller -->

      <!-- Right Controller -->
      <!-- -->

      <!-- -->

      <!-- -->

      <!-- -->

     
        
      </a-scene>
    <div id="dom-overlay">
      <h1>Hello World</h1>
      <div class="overlay-footer">
        <section
          style="
            display: inline-block;
            background: lavenderblush;
            color: #333333;
            border-radius: 1em;
            padding: 1em;
            margin: 0;
            accent-color: hotpink;
          "
          id="my-interface"
        >
          <h2>Settings</h2>
          <fieldset style="border: none">
            <legend>Thumbstick Behaviour</legend>
            <input
              onclick="toggleThumbstick(this)"
              type="radio"
              id="thumbstick-teleport"
              name="thumbstick"
              value="teleport"
              checked
            /><label for="thumbstick-teleport"> Teleport</label>
            <input
              onclick="toggleThumbstick(this)"
              type="radio"
              id="thumbstick-move"
              name="thumbstick"
              value="move"
            /><label for="thumbstick-move"> Move</label>
          </fieldset>
          <button onclick="AFRAME.scenes[0].exitVR()" style="display: block">
            Exit Immersive
          </button>
        </section>

        <!-- HTML form logic -->
        <script>
          let movementType = "teleport";
          function toggleThumbstick(detail) {
            const rayPointers = ['[data-right="ray"]', '[data-left="ray"]'].map(
              (s) => document.querySelector(s)
            );
            const type = detail.value;
            movementType = type;
            if (type === "move") {
              // Hack fix for when the camera rig is rotated.
              cameraRig.object3D.rotation.y = 0;
              cameraRig.setAttribute("movement-controls", "enabled", true);
              for (const p of rayPointers) p.removeAttribute("mixin");
            }
            if (type === "teleport") {
              cameraRig.setAttribute("movement-controls", "enabled", false);
              for (const p of rayPointers) p.setAttribute("mixin", "blink");
            }
          }
          // If the user is teleporting disable movement-controls in XR
          const sceneEl = document.querySelector("a-scene");
          sceneEl.addEventListener("enter-vr", function () {
            if (movementType === "teleport") {
              cameraRig.setAttribute("movement-controls", "enabled", false);
            }
          });
          sceneEl.addEventListener("exit-vr", function () {
            cameraRig.setAttribute("movement-controls", "enabled", true);
          });
        </script>
        <div id="dom-overlay-message">Enter AR or VR to start.</div>
      </div>
    </div>

    <!---    sharescreen  
    <script>
    
    navigator.mediaDevices.getDisplayMedia({video: true}).then(function (stream) {
    easyrtc.register3rdPartyLocalMediaStream(stream, 'screen:1');

    // Then to add to existing connection
    easyrtc.addStreamToCall(easyrtcId, 'screen:1', function (caller, streamName) {

    });
});
    
    </script>
      
      
      
    `;

    this.sceneEl.addEventListener("loaded", () => {
      setTimeout(() => {
        this.loader.remove();
      }, 15000);
    });
  },
});
