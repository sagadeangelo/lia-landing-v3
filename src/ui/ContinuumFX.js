/**
 * LIA OS — Continuum FX Module
 * Sprint 3: "La Revelación"
 *
 * Responsabilidad: Orquestar la revelación progresiva de los nodos del ecosistema 
 * a medida que entran en el viewport, utilizando IntersectionObserver y RAF.
 */

export class ContinuumFX {
  constructor() {
    this.nodes = Array.from(document.querySelectorAll('.lia-node'));
    if (!this.nodes.length) {
      this.active = false;
      return;
    }

    this.active = true;
    this._nodeData = this.nodes.map(el => ({
      el,
      visual: el.querySelector('.lia-node__visual'),
      functionText: el.querySelector('.lia-node__function'),
      identity: el.querySelector('.lia-node__identity'),
      isVisible: false,
      progress: 0,
    }));

    this._bindObserver();
  }

  _bindObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = this.nodes.indexOf(entry.target);
        if (index > -1) {
          this._nodeData[index].isVisible = entry.isIntersecting;
          
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        }
      });
    }, {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    });

    this.nodes.forEach(node => {
      // CSS initial states
      const functionText = node.querySelector('.lia-node__function');
      const identity = node.querySelector('.lia-node__identity');
      const visual = node.querySelector('.lia-node__visual');
      
      if (functionText) {
        functionText.style.opacity = '0';
        functionText.style.transform = 'translateY(40px)';
        functionText.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      }
      if (identity) {
        identity.style.opacity = '0';
        identity.style.transform = 'translateY(20px)';
        identity.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s';
      }
      if (visual) {
        visual.style.opacity = '0';
        visual.style.transform = 'translateY(-50%) scale(0.8)';
        visual.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
      }
      
      this.observer.observe(node);
    });
  }

  raf(time) {
    if (!this.active) return;
    
    // Smooth reveal logic driven by classes (applied by IntersectionObserver)
    this._nodeData.forEach(data => {
      if (data.isVisible && data.el.classList.contains('is-revealed')) {
        if (data.functionText) {
          data.functionText.style.opacity = '1';
          data.functionText.style.transform = 'translateY(0)';
        }
        if (data.identity) {
          data.identity.style.opacity = '0.6';
          data.identity.style.transform = 'translateY(0)';
        }
        if (data.visual) {
          data.visual.style.opacity = '0.4';
          data.visual.style.transform = 'translateY(-50%) scale(1)';
        }
      }
    });
  }

  destroy() {
    this.active = false;
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
