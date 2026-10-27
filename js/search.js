/**
 * THE CARNATIC LODGE NO: 39 - GLOBAL SITE SEARCH
 * Comprehensive in-browser search index covering all pages, officers, history, and media.
 */

const SITE_SEARCH_INDEX = [
  {
    title: "About The Carnatic Lodge No: 39",
    motto: "Love and Truth",
    category: "About",
    url: "pages/about.html",
    rootUrl: "pages/about.html",
    subUrl: "about.html",
    keywords: "the carnatic lodge no 39 love and truth mission vision values freemasonry grand lodge of india gli rglsi brotherly love relief truth history charter",
    snippet: "Discover our venerable history, constitutional charter under the Grand Lodge of India, and our enduring dedication to brotherly love and truth."
  },
  {
    title: "Officers of the Lodge for the Year 2026",
    category: "Officers",
    url: "pages/about.html#officers",
    rootUrl: "pages/about.html#officers",
    subUrl: "about.html#officers",
    keywords: "officers leadership 2026 roll worshipful master avinash naidu vigneswaran chandrasekaran santhosh nagarajan arun vinay prabhakaran harikrishnan rajagopalan jagannath badrinath r rajagopalan mallikarjun abhinav parthasarathy kamlesh kumar praveen kumar perumal ashwin muthukumar ganesh kumar dinesh kumar anand chaplain secretary warden deacon steward tyler",
    snippet: "Complete roll of 2026 Officers of The Carnatic Lodge No: 39 led by W.Bro. Avinash Naidu (Worshipful Master) and Bro. Harikrishnan Rajagopalan (Chaplain, as Secretary)."
  },
  {
    title: "Freemasons' Hall, Egmore (Chennai Temple)",
    category: "Temple",
    url: "pages/temple.html",
    rootUrl: "pages/temple.html",
    subUrl: "temple.html",
    keywords: "freemasons hall egmore ethiraj salai commander in chief road architecture columns asoka hall library dining temple chennai",
    snippet: "Explore the architectural grandeur, neoclassical portico, Asoka Hall, and sacred temple rooms of Freemasons' Hall in Egmore."
  },
  {
    title: "Becoming a Freemason (2B1ASK1)",
    category: "Membership",
    url: "pages/membership.html",
    rootUrl: "pages/membership.html",
    subUrl: "membership.html",
    keywords: "membership joining qualifications how to join 2b1ask1 petition ballot inquiry steps good character moral integrity",
    snippet: "The step-by-step pathway to membership in Craft Freemasonry: qualifications, petitioning procedure, and what to expect."
  },
  {
    title: "Photo & Media Gallery",
    category: "Gallery",
    url: "pages/gallery.html",
    rootUrl: "pages/gallery.html",
    subUrl: "gallery.html",
    keywords: "gallery photos pictures media archives temple meetings banquets festive boards regalia centenary installations",
    snippet: "High-resolution photo archives of our lodge temple, regalia, annual installations, festive board banquets, and medical drives."
  },
  {
    title: "Masonic Core Values & Principles",
    category: "Principles",
    url: "pages/about.html#values",
    rootUrl: "pages/about.html#values",
    subUrl: "about.html#values",
    keywords: "brotherly love relief truth charity faith hope benevolence morality rectitude tenets",
    snippet: "The foundational tenets that guide every Freemason: cultivating brotherhood, extending relief to the distressed, and seeking moral truth."
  },
  {
    title: "Chronological History & Milestones (1883 - Present)",
    category: "History",
    url: "pages/history.html",
    rootUrl: "pages/history.html",
    subUrl: "history.html",
    keywords: "timeline consecration 1883 2031 ec grand lodge of india 1961 centenary 1983 1001st meeting 1500th meeting sitaram jaipuria",
    snippet: "From its consecration in 1883 in colonial Madras to landmark milestones: 1,000th meeting, Centenary Jubilee, and Sesquicentennial horizons."
  },
  {
    title: "The Consecrated Lodge Banner & Heritage",
    category: "History",
    url: "pages/history.html#lodge-banner",
    rootUrl: "pages/history.html#lodge-banner",
    subUrl: "history.html#lodge-banner",
    keywords: "consecrated banner lodge standard love and truth motto 1883 consecration heritage egmore history",
    snippet: "Discover the heritage of the official consecrated banner of The Carnatic Lodge No: 39, preserved since 1883 under our sacred motto Love and Truth."
  },
  {
    title: "Anecdotes & Memoirs of Senior Brethren",
    category: "History",
    url: "pages/history.html#anecdotes",
    rootUrl: "pages/history.html#anecdotes",
    subUrl: "history.html#anecdotes",
    keywords: "memoirs past masters stories traditions archival lore fraternal bonds festive boards",
    snippet: "Preserved recollections and inspiring fraternal stories passed down through generations of dedicated Past Masters."
  },
  {
    title: "Upcoming Calendar & Regular Meetings",
    category: "Events",
    url: "pages/events.html",
    rootUrl: "pages/events.html",
    subUrl: "events.html",
    keywords: "calendar schedule regular meeting installation festive board banquet rsvp summons dress code",
    snippet: "Complete schedule of upcoming Regular Meetings, Annual Installation, Festive Boards, and fraternal visits."
  },
  {
    title: "Annual Installation Ceremony",
    category: "Events",
    url: "pages/events.html#installation",
    rootUrl: "pages/events.html#installation",
    subUrl: "events.html#installation",
    keywords: "installation worshipful master investiture ceremony officers banquet festive board gavel",
    snippet: "The solemn and joyous annual investiture where the incoming Master of the Lodge is duly installed into office and officers are invested."
  },
  {
    title: "Charity & Educational Scholarship Endowment",
    category: "Community",
    url: "pages/community.html#scholarships",
    rootUrl: "pages/community.html#scholarships",
    subUrl: "community.html#scholarships",
    keywords: "scholarships education underprivileged students college school funding merit need endowment fees",
    snippet: "Providing higher education tuition and academic supplies to bright students from underprivileged backgrounds across Tamil Nadu."
  },
  {
    title: "Free Medical, Eye, & Health Camps",
    category: "Community",
    url: "pages/community.html#health",
    rootUrl: "pages/community.html#health",
    subUrl: "community.html#health",
    keywords: "medical camp eye checkup cataract surgery blood donation doctor health clinic screening",
    snippet: "Annual medical screenings, optical care, and blood donation drives organized in underserved rural and peri-urban communities."
  },
  {
    title: "Disaster Relief & Civic Support",
    category: "Community",
    url: "pages/community.html#relief",
    rootUrl: "pages/community.html#relief",
    subUrl: "community.html#relief",
    keywords: "disaster flood chennai relief food distribution cyclone pandemic emergency aid",
    snippet: "Prompt mobilization of food rations, dry goods, and rehabilitation assistance during natural emergencies and Chennai flood situations."
  },
  {
    title: "Contact Secretary & Lodge Location",
    category: "Contact",
    url: "pages/contact.html",
    rootUrl: "pages/contact.html",
    subUrl: "contact.html",
    keywords: "contact address email phone secretary meeting times directions freemasons hall ethiraj salai chennai",
    snippet: "Get in touch with the Lodge Secretary for fraternal visit inquiries, membership prerequisites, or charity collaborations."
  },
  {
    title: "Information for Visiting Brethren",
    category: "Contact",
    url: "pages/contact.html#visiting",
    rootUrl: "pages/contact.html#visiting",
    subUrl: "contact.html#visiting",
    keywords: "visiting mason brethren sister lodge clearance certificate grand lodge regalia dark suit etiquette",
    snippet: "Essential guidelines, dress code requirements, and verification protocols for traveling Masons visiting Chennai."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initSearchModal();
});

function initSearchModal() {
  if (!document.getElementById('searchModalBackdrop')) {
    createSearchModalDOM();
  }

  const modal = document.getElementById('searchModalBackdrop');
  const openButtons = document.querySelectorAll('.mm-btn-search, .btn-search-trigger');
  const closeBtn = document.getElementById('searchModalClose');
  const searchInput = document.getElementById('siteSearchInput');
  const resultsContainer = document.getElementById('searchResultsList');

  if (!modal || !searchInput || !resultsContainer) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Global Keyboard Shortcut: Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) {
        closeModal();
      } else {
        openModal();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    renderSearchResults(query, resultsContainer);
  });

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    searchInput.value = '';
    renderSearchResults('', resultsContainer);
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderSearchResults(query, container) {
  const isSubPage = window.location.pathname.toLowerCase().includes('/pages/');

  if (!query) {
    container.innerHTML = `
      <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gold-deep); font-weight: 700; margin-bottom: 0.5rem;">
        Suggested Sections:
      </div>
      ${SITE_SEARCH_INDEX.slice(0, 5).map(item => createResultHTML(item, isSubPage, '')).join('')}
    `;
    return;
  }

  const matches = SITE_SEARCH_INDEX.filter(item => {
    const haystack = `${item.title} ${item.keywords} ${item.snippet}`.toLowerCase();
    return haystack.includes(query);
  });

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 1.1rem; font-family: var(--font-serif); margin-bottom: 0.5rem; color: var(--color-primary-navy);">
          No matching records found for "<strong>${escapeHtml(query)}</strong>"
        </p>
        <p style="font-size: 0.85rem;">Try searching for <em>'gallery'</em>, <em>'temple'</em>, <em>'membership'</em>, <em>'officers'</em>, or <em>'history'</em>.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(item => createResultHTML(item, isSubPage, query)).join('');
}

function createResultHTML(item, isSubPage, query) {
  const linkHref = isSubPage ? item.subUrl : item.rootUrl;
  
  let highlightedSnippet = escapeHtml(item.snippet);
  let highlightedTitle = escapeHtml(item.title);

  if (query) {
    const reg = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    highlightedSnippet = highlightedSnippet.replace(reg, '<mark>$1</mark>');
    highlightedTitle = highlightedTitle.replace(reg, '<mark>$1</mark>');
  }

  return `
    <a href="${linkHref}" class="search-result-item">
      <span class="search-result-badge">${escapeHtml(item.category)}</span>
      <div class="search-result-title">${highlightedTitle}</div>
      <div class="search-result-snippet">${highlightedSnippet}</div>
    </a>
  `;
}

function createSearchModalDOM() {
  const modalHTML = `
    <div id="searchModalBackdrop" class="search-modal-backdrop" role="dialog" aria-modal="true" aria-label="Site Search">
      <div class="search-modal-container">
        <div class="search-modal-header">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="search" id="siteSearchInput" class="search-input" placeholder="Search Carnatic Lodge 39..." autocomplete="off">
          <button id="searchModalClose" class="search-modal-close" aria-label="Close search">&times;</button>
        </div>
        <div class="search-modal-body">
          <div id="searchResultsList" class="search-results-list"></div>
        </div>
        <div class="search-modal-footer">
          <div class="search-tips">
            <span>Press <kbd>ESC</kbd> to exit</span>
            <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          </div>
          <span>The Carnatic Lodge No: 39 Archive</span>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}
