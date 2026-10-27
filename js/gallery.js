/**
 * CARNATIC LODGE NO. 39 - GALLERY & EVENT INTERACTIONS
 * Lightbox Modal, Gallery Category Filtering, Event Filtering, and RSVP System.
 */

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initEventFilters();
  initGalleryFilters();
  initRSVPModal();
});

/* ==========================================================================
   LIGHTBOX MODAL FOR PHOTO GALLERIES
   ========================================================================== */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!galleryItems.length) return;

  let lightbox = document.getElementById('lightboxModal');
  if (!lightbox) {
    const lightboxHTML = `
      <div id="lightboxModal" class="lightbox-modal" role="dialog" aria-modal="true">
        <div class="lightbox-content-box">
          <button class="lightbox-close" id="lightboxClose" aria-label="Close image">&times;</button>
          <img id="lightboxImage" class="lightbox-img" src="" alt="Enlarged gallery photo">
          <div id="lightboxCaption" class="lightbox-caption-text"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    lightbox = document.getElementById('lightboxModal');
  }

  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title');
      const caption = item.querySelector('.gallery-caption');

      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Carnatic Lodge Event';
      }

      if (lightboxCaption) {
        const titleText = title ? title.textContent : '';
        const captionText = caption ? caption.textContent : '';
        lightboxCaption.innerHTML = `<strong>${titleText}</strong>${captionText ? ' — ' + captionText : ''}`;
      }

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   GALLERY CATEGORY FILTERING (Gallery Page)
   ========================================================================== */
function initGalleryFilters() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;

  const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
  const filterTabs = document.querySelector('.filter-tabs');
  if (!filterTabs || !galleryItems.length) return;

  const filterButtons = filterTabs.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      // Update button active states
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter gallery cards
      galleryItems.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   EVENT CATEGORY FILTERING (Events Page)
   ========================================================================== */
function initEventFilters() {
  const eventsList = document.querySelector('.events-list');
  if (!eventsList) return;

  const eventCards = eventsList.querySelectorAll('.event-card');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!filterButtons.length || !eventCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      eventCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'grid';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   RSVP MODAL FOR EVENTS
   ========================================================================== */
function initRSVPModal() {
  const rsvpButtons = document.querySelectorAll('.btn-rsvp');
  if (!rsvpButtons.length) return;

  let modal = document.getElementById('rsvpModal');
  if (!modal) {
    const modalHTML = `
      <div id="rsvpModal" class="custom-modal-backdrop" role="dialog" aria-modal="true">
        <div class="custom-modal-card">
          <div class="custom-modal-header">
            <h3 class="custom-modal-title">RSVP & Fraternal Notice</h3>
            <button class="custom-modal-close" id="rsvpModalClose">&times;</button>
          </div>
          <div class="custom-modal-body">
            <p id="rsvpEventName" style="font-family: var(--font-serif); font-weight: 700; color: var(--color-primary-navy); margin-bottom: 1.25rem; font-size: 1.1rem; border-left: 3px solid var(--color-gold-primary); padding-left: 0.75rem;">
              Event RSVP
            </p>
            <form id="rsvpForm">
              <input type="hidden" id="rsvpEventHidden">
              <div class="form-group">
                <label class="form-label" for="rsvpName">Full Name / Rank <span class="req">*</span></label>
                <input type="text" id="rsvpName" class="form-control" placeholder="e.g. Bro. Rajesh Kumar, PM" required>
              </div>
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="rsvpLodge">Mother Lodge & No. <span class="req">*</span></label>
                  <input type="text" id="rsvpLodge" class="form-control" placeholder="e.g. Lodge Carnatic No. 39" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="rsvpDegree">Masonic Degree</label>
<select id="rsvpDegree" class="form-control">
                    <option value="MM">Master Mason</option>
                    <option value="PM">Past Master</option>
                    <option value="Officer">Lodge / Grand Lodge Officer</option>
                    <option value="Visitor">Visiting Brother</option>
                    <option value="Other">Fraternal Guest</option>
                  </select>
                </div>
              </div>
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label" for="rsvpEmail">Email Address <span class="req">*</span></label>
                  <input type="email" id="rsvpEmail" class="form-control" placeholder="brother@example.com" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="rsvpPhone">Contact Number</label>
                  <input type="tel" id="rsvpPhone" class="form-control" placeholder="+91 98400 00000">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Attending Festive Board (Dinner)?</label>
                <div style="display: flex; gap: 1.5rem; margin-top: 0.4rem;">
                  <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                    <input type="radio" name="rsvpDinner" value="yes" checked> Yes, with Pleasure
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                    <input type="radio" name="rsvpDinner" value="no"> Regrets (Meeting Only)
                  </label>
                </div>
              </div>
              <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 1rem;">
                Confirm Fraternal Attendance
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modal = document.getElementById('rsvpModal');
  }

  const closeBtn = document.getElementById('rsvpModalClose');
  const eventNameDisplay = document.getElementById('rsvpEventName');
  const rsvpForm = document.getElementById('rsvpForm');

  rsvpButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const card = button.closest('.event-card');
      const title = card ? card.querySelector('.event-title') : null;
      const titleText = title ? title.textContent.trim() : 'Carnatic Lodge Event';

      if (eventNameDisplay) {
        eventNameDisplay.textContent = `RSVP for: ${titleText}`;
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeRSVP() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeRSVP);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeRSVP();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeRSVP();
    }
  });

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeRSVP();
      rsvpForm.reset();
      window.showToast('Your fraternal RSVP has been registered with the Secretary and Director of Ceremonies. We look forward to greeting you!', 'success');
    });
  }
}
