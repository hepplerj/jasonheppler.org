function toggleMenu() {
    const header = document.querySelector('.header-primary');
    const nav = document.querySelector('.header-primary > .nav-primary');
    const btn = document.querySelector('.header-primary > .toggler');
  
    if (btn == null) {
      return;
    }
  
    // Timeline for burger icon.
    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.01 }});
    tl.to('.toggled__top', { y: '6.5px' });
    tl.to('.toggled__bottom', { y: '-6.5px' }, '<');
    tl.to(nav, { opacity: 1 }, '<0.1');
    tl.to('.toggled__top', { rotate: 45 }, '<0.1');
    tl.to('.toggled__bottom', { rotate: -45 }, '<');
  
    btn.addEventListener('click', function() {
      const isClosed = header.classList.contains('is-closed');
  
      if (!isClosed) {
        gsap.to(nav, 0.1, { height: 0 });
        tl.reverse();
        header.classList.add('is-closed');
      } else {
        gsap.set(nav, { height: 'auto', opacity: 0 });
        gsap.from(nav, 0.1, { height: 0 });
        tl.play();
        header.classList.remove('is-closed');
      }
    });
  }