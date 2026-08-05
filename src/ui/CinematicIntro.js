export const CinematicIntro = {
  render() {
    // Modo desarrollo y soporte escape
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('intro') === '0' || urlParams.get('dev') === '1') {
      return '';
    }
    
    // Validar si ya se vio en localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      if (localStorage.getItem('lia_intro_v1_seen')) {
        return '';
      }
    }

    return /* html */ `
      <div id="lia-cinematic-intro" style="position: fixed; inset: 0; z-index: 2147483000; background: #000; display: flex; align-items: center; justify-content: center; opacity: 1; visibility: visible; transition: opacity 2.5s cubic-bezier(0.25, 0.1, 0.25, 1), visibility 2.5s cubic-bezier(0.25, 0.1, 0.25, 1); pointer-events: none;">
        <video id="lia-intro-video" src="/intro/lia_intro_5s.mp4" playsinline muted autoplay style="width: 100%; height: 100%; object-fit: cover;"></video>
      </div>
    `;
  },

  init() {
    if (this._initialized) return;
    this._initialized = true;

    const introNode = document.getElementById('lia-cinematic-intro');
    const videoNode = document.getElementById('lia-intro-video');

    if (!introNode || !videoNode) {
      return;
    }

    const endIntro = () => {
      introNode.style.opacity = '0';
      introNode.style.visibility = 'hidden';
      document.body.style.overflow = '';
      try {
        localStorage.setItem('lia_intro_v1_seen', 'true');
      } catch (e) {}
      setTimeout(() => {
        if (introNode.parentNode) introNode.parentNode.removeChild(introNode);
      }, 2500);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        endIntro();
        window.removeEventListener('keydown', onKeyDown);
      }
    };

    videoNode.addEventListener('ended', endIntro);
    videoNode.addEventListener('error', endIntro);
    window.addEventListener('keydown', onKeyDown);

    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  }
};
