/**
 * CARNATIC LODGE NO. 39 - CORE JAVASCRIPT
 * Handles Navigation (Mahadhi-Style Mega Menu & Mobile Drawer), Sticky Header,
 * Animated Counters, Form Validations, and Toast Alerts.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initStickyHeader();
  initStatsCounters();
  initBackToTop();
  initContactForm();
  highlightActiveNav();
});

/* ==========================================================================
   NAVIGATION BAR & MAHADHI MEGA MENU ACCORDION FOR MOBILE
   ========================================================================== */
function initNavbar() {
  const hamburger = document.querySelector('.mm-hamburger') || document.querySelector('.hamburger');
  const navMenu = document.querySelector('.mm-nav') || document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeNavMenu();
      } else {
        openNavMenu();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeNavMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeNavMenu();
      }
    });
  }

  function openNavMenu() {
    navMenu.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNavMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Mobile Accordion Submenu Toggles
  const megaButtons = document.querySelectorAll('.mm-nav > li.has-mega > .mm-nav-btn');
  megaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If mobile view (< 1100px), toggle submenu
      if (window.innerWidth <= 1100) {
        e.preventDefault();
        const parentLi = btn.closest('li');
        const isOpen = parentLi.classList.contains('is-open');

        // Close other open submenus
        document.querySelectorAll('.mm-nav > li.has-mega').forEach(li => {
          if (li !== parentLi) li.classList.remove('is-open');
        });

        if (isOpen) {
          parentLi.classList.remove('is-open');
        } else {
          parentLi.classList.add('is-open');
        }
      }
    });
  });
}

/* ==========================================================================
   STICKY HEADER ELEVATION
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.mm-header') || document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   AUTO-HIGHLIGHT ACTIVE NAV LINK
   ========================================================================== */
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.mm-nav-link, .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    const cleanHref = href.toLowerCase().replace(/^\.\.\//, '').replace(/^\.\//, '');
    const cleanPath = currentPath.split('/').pop() || 'index.html';

    if (cleanPath === '' || cleanPath === 'index.html') {
      if (cleanHref === 'index.html' || cleanHref === './' || cleanHref === '/') {
        link.classList.add('active');
      }
    } else if (cleanHref.includes(cleanPath)) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   ANIMATED STATS COUNTER
   ========================================================================== */
function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || counter.innerText.replace(/\D/g, ''), 10);
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          
          if (isNaN(target)) return;

          let count = 0;
          const duration = 1800; // ms
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.innerText = `${prefix}${target.toLocaleString()}${suffix}`;
              clearInterval(timer);
            } else {
              counter.innerText = `${prefix}${Math.floor(count).toLocaleString()}${suffix}`;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-strip');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   INTERACTIVE CONTACT FORM
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactLodgeForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = contactForm.querySelector('#senderName');
    const emailInput = contactForm.querySelector('#senderEmail');
    const subjectInput = contactForm.querySelector('#inquiryType');
    const messageInput = contactForm.querySelector('#senderMessage');

    const fields = [
      { el: nameInput, test: (v) => v.trim().length >= 2, msg: 'Please provide your full name.' },
      { el: emailInput, test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Please enter a valid email address.' },
      { el: subjectInput, test: (v) => v !== '', msg: 'Please select an inquiry category.' },
      { el: messageInput, test: (v) => v.trim().length >= 10, msg: 'Your message should be at least 10 characters.' }
    ];

    fields.forEach(field => {
      if (!field.el) return;
      const group = field.el.closest('.form-group');
      const feedback = group ? group.querySelector('.form-feedback') : null;

      if (!field.test(field.el.value)) {
        isValid = false;
        if (group) group.classList.add('has-error');
        if (feedback) feedback.textContent = field.msg;
      } else {
        if (group) group.classList.remove('has-error');
      }
    });

    if (isValid) {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Transmitting Dispatch...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        contactForm.reset();
        window.showToast('Thank you! Your dispatch has been transmitted to the Lodge Secretary. We will reply promptly.', 'success');
      }, 900);
    }
  });
}

/* ==========================================================================
   GLOBAL TOAST SYSTEM
   ========================================================================== */
window.showToast = function(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✓' : (type === 'error' ? '⚠' : 'ℹ');
  toast.innerHTML = `<strong>${icon}</strong> <span>${message}</span>`;
  
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4500);
};
