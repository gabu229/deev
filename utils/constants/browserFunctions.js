
// ENTER FULLSCREEN
const enterFullscreen = () => {
  if (typeof document !== "undefined" && document.documentElement) {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.webkitRequestFullscreen) {
      docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  }
};

// LEAVE FULLSCREEN
const exitFullscreen = () => {
  if (typeof document !== "undefined" && document.exitFullscreen) {
    document.exitFullscreen();
  } else if (typeof document !== "undefined" && document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (typeof document !== "undefined" && document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

export { enterFullscreen, exitFullscreen };
