(function () {
  console.log("[SPORTS-TV] Starting injector");

  if (document.getElementById("sports-tv-widget")) {
    console.log("[SPORTS-TV] Widget already exists");
    return;
  }

  
  const style = document.createElement("style");
  style.id = "sports-tv-style";
  style.textContent = `

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #07111f;
  font-family: Arial, sans-serif;
}
@media (max-width: 1000px) {
  .sports-tv {
    left: 4px !important;
    bottom: 46px !important;
  }
    .sports-tv:hover {
  width: 96vw !important;
  height: 66vw!important;
}
}
.sports-tv {
  position: fixed;
  left: 300px;
  bottom: 32px;

  width: 200px;
  height: 160px;

  perspective: 1200px;
  transform-origin: left bottom;

  animation: tvFloat 4s ease-in-out infinite;
  z-index: 9999;

  transition:
    width 0.7s ease,
    height 0.7s ease;
}

.sports-tv:hover {
  width: 420px;
  height: 260px;
}

.sports-tv__inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.9s ease;
}

.sports-tv:hover .sports-tv__inner {
  transform: rotateY(180deg);
}

.sports-tv__front,
.sports-tv__back {
  position: absolute;
  inset: 0;
  border-radius: 24px;
  backface-visibility: hidden;
  overflow: hidden;
  background: rgba(7, 17, 31, 0.35);
  border: 1px solid rgba(255,255,255,0.1);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.5),
    inset 0 0 24px rgba(0, 189, 255, 0.18);
}

.sports-tv__front {
  padding: 8px;
}

.sports-tv__screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 17px;
  overflow: hidden;

  


  box-shadow:
    inset 0 0 0 1px rgba(2, 102, 0, 0.06),
    inset 0 0 34px rgba(0, 187, 255, 0.18),
    0 0 22px rgba(89, 205, 248, 0.24);

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sports-tv__screen::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.025) 0px,
    rgba(255, 255, 255, 0.025) 1px,
    transparent 2px,
    transparent 4px
  );
  pointer-events: none;
  z-index: 2;
}

.sports-tv__glass {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.06) 24%,
    transparent 42%
  );
}

.sports-tv__live {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 4;

  display: flex;
  align-items: center;
  gap: 6px;

  padding: 4px 8px;
  border-radius: 999px;

  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.8px;

  color: #fff;
  background: rgba(255, 0, 0, 0.22);
  border: 1px solid rgba(255, 80, 80, 0.45);
}

.sports-tv__live span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff3d3d;
  box-shadow:
    0 0 8px #ff3d3d,
    0 0 14px #ff3d3d;
  animation: livePulse 1.2s infinite;
}

.sports-tv__score {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 4;

  display: flex;
  align-items: center;
  gap: 9px;

  font-size: 11px;
  font-weight: 900;
  color: white;
}

.sports-tv__score-num {
  color: #caff00;
  font-size: 15px;
}

.sports-tv__content {
  position: relative;
  z-index: 4;
  text-align: center;
  padding: 18px;
}

.sports-tv__label {
  display: block;
  margin-top: 8px;
  margin-bottom: 4px;
  color: rgb(0, 189, 255);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 900;
}

.sports-tv__content h3 {
  margin: 0 0 8px;
  font-size: 22px;
  line-height: 1.08;
}

.sports-tv__content p {
  margin: 0;
  color: #fff;
  font-size: 13px;
}

.sports-tv__back {
  transform: rotateY(180deg);
  padding: 12px;
  background: #0d325f;
}

.sports-tv__video {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
}

.sports-tv__video iframe {
  width: 100%;
  height: 100%;
  display: block;
}






@keyframes tvFloat {
  0%, 100% {
    transform: translateY(0) rotate(-1deg);
  }

  50% {
    transform: translateY(-12px) rotate(2deg);
  }
}

@keyframes livePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.25);
    opacity: 0.7;
  }
}

  `;
  document.head.appendChild(style);

  console.log("[SPORTS-TV] Styles injected");


  const wrapper = document.createElement("div");
  wrapper.id = "sports-tv-widget";

  wrapper.innerHTML = `
   <div class="sports-tv">
  <div class="sports-tv__inner">

    <div class="sports-tv__front">


      <div class="sports-tv__screen">
        <div class="sports-tv__glass"></div>

        <div class="sports-tv__live">
          <span></span>
          LIVE
        </div>

        

        <div class="sports-tv__content">
          <span class="sports-tv__label">SPORTS CHANNEL</span>
       
          <p>Hover to watch live action</p>
        </div>
      </div>
    </div>

    <div class="sports-tv__back">
      <div class="sports-tv__video">
        <iframe
          id="sportsVideo"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>

  </div>
</div>

<script>
const sportsTv = document.querySelector(".sports-tv");
const iframe = document.getElementById("sportsVideo");

const videoUrl =
  "https://www.youtube.com/embed/4zRt8f5KF00?autoplay=1&mute=1&playsinline=1&rel=0";

sportsTv.addEventListener("mouseenter", () => {
  iframe.src = videoUrl;
});

sportsTv.addEventListener("mouseleave", () => {
  iframe.src = "";
});
</script>

  `;

  document.body.appendChild(wrapper);

  console.log("[SPORTS-TV] Widget rendered");


  const sportsTv = wrapper.querySelector(".sports-tv");
  const iframe = wrapper.querySelector("iframe");

  const videoUrl =
    "https://www.youtube.com/embed/4zRt8f5KF00?autoplay=1&mute=1&playsinline=1&rel=0";

  sportsTv.addEventListener("mouseenter", () => {
    console.log("[SPORTS-TV] Hover start");
    iframe.src = videoUrl;
  });

  sportsTv.addEventListener("mouseleave", () => {
    console.log("[SPORTS-TV] Hover end");
    iframe.src = "";
  });

  function updateVisibility() {
    const path = location.pathname.toLowerCase();

    const isHome =
      path === "/en" ||
      path === "/en/";

    console.log(
      "[SPORTS-TV] Path:",
      path,
      "| Home:",
      isHome
    );

    wrapper.style.display = isHome ? "block" : "none";
  }

  updateVisibility();

  let lastUrl = location.href;

  const observer = new MutationObserver(() => {
    if (lastUrl !== location.href) {
      console.log("[SPORTS-TV] Route changed");

      lastUrl = location.href;

      updateVisibility();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  const pushState = history.pushState;

  history.pushState = function () {
    pushState.apply(this, arguments);

    console.log("[SPORTS-TV] pushState");

    setTimeout(updateVisibility, 0);
  };

  const replaceState = history.replaceState;

  history.replaceState = function () {
    replaceState.apply(this, arguments);

    console.log("[SPORTS-TV] replaceState");

    setTimeout(updateVisibility, 0);
  };

  window.addEventListener("popstate", () => {
    console.log("[SPORTS-TV] popstate");
    updateVisibility();
  });

  console.log("[SPORTS-TV] Ready");
})();
