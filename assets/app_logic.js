// Mobile Google Play Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
  // Countdown timer logic
  let totalSeconds = 15 * 3600 + 26 * 60 + 44;
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
    }
  }, 1000);

  // App details data
  const appData = {
    freefire: {
      title: 'Free Fire MAX',
      sub: 'Action • Battle Royale',
      rating: '4.2 ★',
      size: '590 MB',
      icon: './assets/freefire_hero.png',
      desc: 'Free Fire MAX is designed exclusively to deliver premium gameplay experience in a Battle Royale. Enjoy a variety of exciting game modes with all Free Fire players via exclusive Firelink technology.'
    },
    angrybirds: {
      title: 'Angry Birds 2',
      sub: 'Rovio Entertainment • Casual',
      rating: '4.5 ★',
      size: '240 MB',
      icon: './assets/angrybirds_hero.png',
      desc: 'Play the world’s best bird-flinging, pig-popping game! Use the slingshot to fling birds at the piggies’ towers and bring them crashing down.'
    },
    myntra: {
      title: 'Myntra - Fashion Shopping App',
      sub: 'Shopping • Online marketplace',
      rating: '4.6 ★',
      size: '26 MB',
      icon: './assets/myntra_real.png',
      desc: 'India’s biggest fashion and lifestyle online destination. Discover trending clothes, footwear, accessories and beauty products.'
    },
    kotak: {
      title: 'Kotak Bank: 811 Mobile App',
      sub: 'Finance • Bank and online banking',
      rating: '4.7 ★',
      size: '105 MB',
      icon: './assets/kotak_real.png',
      desc: 'Kotak 811 Mobile Banking App offers seamless zero-balance savings account opening, money transfer, bill payments, and investment options.'
    },
    razorpay: {
      title: 'Razorpay Payments for Business',
      sub: 'Business • Point of sale • Finance',
      rating: '4.1 ★',
      size: '15 MB',
      icon: './assets/razorpay_real.png',
      desc: 'Accept payments, track cashflow, create payment links and manage business transactions with ease directly on your mobile device.'
    },
    subway: {
      title: 'Subway Surfers',
      sub: 'SYBO Games • Arcade • Runner',
      rating: '4.4 ★',
      size: '168 MB',
      icon: './assets/subway_real.png',
      desc: 'DASH as fast as you can! DODGE the oncoming trains! Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.'
    },
    golfbattle: {
      title: 'Golf Battle',
      sub: 'Miniclip.com • Sports • Multiplayer',
      rating: '4.6 ★',
      size: '79 MB',
      icon: './assets/golfbattle_real.png',
      desc: 'Challenge real players from around the world and make it to the top! Gather your friends and play 1v1 or with up to 6 Facebook friends all together.'
    },
    hillclimb: {
      title: 'Hill Climb Racing',
      sub: 'Fingersoft • Racing • Offline',
      rating: '4.0 ★',
      size: '108 MB',
      icon: './assets/hillclimb_real.png',
      desc: 'Face the challenges of unique hill climbing environments with many different cars. Gain bonuses from daring tricks and collect coins to upgrade your car.'
    },
    fruitmerge: {
      title: 'Fruit Merge™: Match Game',
      sub: 'Casual • Puzzle • Event',
      rating: '4.3 ★',
      size: '64 MB',
      icon: './assets/fruitmerge_real.png',
      desc: 'Drop fruits and merge matching ones to evolve them into bigger fruits until you create the giant watermelon!'
    },
    snakeio: {
      title: 'Snake.io - Fun Snake .io Games',
      sub: 'Kooapps Games • Action • Arcade',
      rating: '4.1 ★',
      size: '85 MB',
      icon: './assets/snakeio_real.png',
      desc: 'Slither through a new competitive version of Snake and survive as long as you can! Challenge your friends and try to be the biggest worm in Snake.io!'
    },
    hiddenspots: {
      title: 'Hidden Spots - Hidden Objects',
      sub: 'Puzzle • Brain Teaser • Offline',
      rating: '4.5 ★',
      size: '72 MB',
      icon: './assets/hiddenspots_real.png',
      desc: 'Search, find and uncover hidden objects in beautifully handcrafted detailed illustrations. Relax and test your detective observation skills.'
    },
    spotify: {
      title: 'Spotify: Music and Podcasts',
      sub: 'Music & Audio • Podcasts • Streaming',
      rating: '4.4 ★',
      size: '42 MB',
      icon: './assets/spotify_real.png',
      desc: 'With Spotify, you can listen to millions of songs and podcasts for free. Play songs, create playlists, and explore albums.'
    },
    whatsapp: {
      title: 'WhatsApp Messenger',
      sub: 'Communication • Instant Messaging',
      rating: '4.5 ★',
      size: '58 MB',
      icon: './assets/whatsapp_real.png',
      desc: 'Simple, personal, real-time messaging and video calls with friends and family around the world.'
    },
    instagram: {
      title: 'Instagram',
      sub: 'Social • Photo & Video Sharing',
      rating: '4.3 ★',
      size: '76 MB',
      icon: './assets/myntra_real.png',
      desc: 'Bring you closer to the people and things you love. Connect with friends, share what you are up to, and see what is new from others.'
    },
    youtube: {
      title: 'YouTube',
      sub: 'Video Players & Editors • Streaming',
      rating: '4.2 ★',
      size: '65 MB',
      icon: './assets/myntra_real.png',
      desc: 'Get the official YouTube app on your Android phone. See what the world is watching in music, gaming, news, and more.'
    }
  };

  const modal = document.getElementById('app-modal');
  const sheetContent = document.getElementById('sheet-content');
  const toast = document.getElementById('toast');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    setTimeout(() => {
      toast.hidden = true;
    }, 2800);
  }

  // --- Hero Carousel Slide Logic ---
  const carousel = document.getElementById('hero-carousel');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const dots = document.querySelectorAll('.indicator-dot');
  let currentSlide = 0;
  const totalSlides = 2;

  function updateSlide(index) {
    if (!carousel) return;
    currentSlide = (index + totalSlides) % totalSlides;
    const slides = carousel.querySelectorAll('.hero-card');
    if (slides[currentSlide]) {
      carousel.scrollTo({
        left: slides[currentSlide].offsetLeft,
        behavior: 'smooth'
      });
    }
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateSlide(currentSlide - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateSlide(currentSlide + 1);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide'), 10);
      updateSlide(idx);
    });
  });

  // Auto slide hero carousel every 4.5 seconds
  let autoSlideTimer = setInterval(() => {
    updateSlide(currentSlide + 1);
  }, 4500);

  if (carousel) {
    carousel.addEventListener('touchstart', () => clearInterval(autoSlideTimer), { passive: true });
    carousel.addEventListener('scroll', () => {
      const scrollPos = carousel.scrollLeft;
      const slides = carousel.querySelectorAll('.hero-card');
      let closestIdx = 0;
      let minDiff = Infinity;
      slides.forEach((slide, idx) => {
        const diff = Math.abs(slide.offsetLeft - scrollPos);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === closestIdx);
      });
      currentSlide = closestIdx;
    }, { passive: true });
  }

  // --- Top Category Filter Pills (Play Fest, Top charts, Premium, Offline) ---
  const pillChips = document.querySelectorAll('.pill-chip');
  pillChips.forEach(chip => {
    chip.addEventListener('click', () => {
      pillChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterType = chip.getAttribute('data-tab');
      filterCategoryContent(filterType);
      showToast(`Showing: ${chip.textContent.trim()}`);
    });
  });

  function filterCategoryContent(filter) {
    const suggestedSection = document.getElementById('suggested-list')?.closest('.app-section');
    const recommendedSection = document.getElementById('recommended-list')?.closest('.app-section');
    const offlineSection = document.getElementById('offline-list')?.closest('.app-section');
    const heroSection = document.querySelector('.hero-carousel-section');
    const countdownSection = document.querySelector('.countdown-banner');

    if (filter === 'fest') {
      if (countdownSection) countdownSection.style.display = 'flex';
      if (heroSection) heroSection.style.display = 'block';
      if (suggestedSection) suggestedSection.style.display = 'block';
      if (recommendedSection) recommendedSection.style.display = 'block';
      if (offlineSection) offlineSection.style.display = 'block';
    } else if (filter === 'topcharts') {
      if (countdownSection) countdownSection.style.display = 'none';
      if (heroSection) heroSection.style.display = 'none';
      if (suggestedSection) suggestedSection.style.display = 'block';
      if (recommendedSection) recommendedSection.style.display = 'block';
      if (offlineSection) offlineSection.style.display = 'none';
    } else if (filter === 'premium') {
      if (countdownSection) countdownSection.style.display = 'none';
      if (heroSection) heroSection.style.display = 'block';
      if (suggestedSection) suggestedSection.style.display = 'none';
      if (recommendedSection) recommendedSection.style.display = 'block';
      if (offlineSection) offlineSection.style.display = 'none';
    } else if (filter === 'offline') {
      if (countdownSection) countdownSection.style.display = 'none';
      if (heroSection) heroSection.style.display = 'none';
      if (suggestedSection) suggestedSection.style.display = 'none';
      if (recommendedSection) recommendedSection.style.display = 'none';
      if (offlineSection) offlineSection.style.display = 'block';
    }
  }

  // Open App Dialog / Sheet
  function openAppSheet(id) {
    const data = appData[id] || {
      title: 'Google Play App',
      sub: 'Utilities • Free',
      rating: '4.5 ★',
      size: '45 MB',
      icon: './assets/myntra_real.png',
      desc: 'Discover and install favorite games and apps directly from Google Play.'
    };

    if (sheetContent) {
      sheetContent.innerHTML = `
        <div class="sheet-header">
          <div class="sheet-app-icon">
            <img src="${data.icon}" alt="${data.title}" />
          </div>
          <div class="sheet-title-info">
            <h3>${data.title}</h3>
            <p>${data.sub}</p>
            <p style="margin-top: 6px; font-weight: 600; color: #c4c7c5;">${data.rating} • ${data.size}</p>
          </div>
        </div>
        <p style="font-size: 13px; line-height: 1.6; color: #a8abb0; margin-bottom: 16px;">${data.desc}</p>
        <button class="sheet-install-btn" id="install-action-btn">Install</button>
      `;

      const installBtn = document.getElementById('install-action-btn');
      if (installBtn) {
        installBtn.addEventListener('click', () => {
          installBtn.textContent = 'Installing...';
          installBtn.style.backgroundColor = '#1f3647';
          installBtn.style.color = '#7fcfff';
          setTimeout(() => {
            installBtn.textContent = 'Installed';
            installBtn.style.backgroundColor = '#2d3036';
            installBtn.style.color = '#c4c7c5';
            showToast(`${data.title} installed successfully!`);
          }, 1500);
        });
      }
    }

    if (modal) {
      modal.showModal();
    }
  }

  // Close modal when clicking backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        modal.close();
      }
    });
  }

  // App Item clicks (Delegated so all tabs work)
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.app-list-item');
    if (item && item.getAttribute('data-app')) {
      const appId = item.getAttribute('data-app');
      openAppSheet(appId);
    }
  });

  // Hero "Open" buttons
  document.querySelectorAll('.open-action-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const appId = btn.getAttribute('data-app');
      openAppSheet(appId);
    });
  });

  // Genre Chips selection toggle
  document.querySelectorAll('.genre-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      const isSelected = chip.classList.contains('selected');
      const text = chip.getAttribute('data-genre');
      chip.textContent = isSelected ? `✓ ${text}` : `+ ${text}`;
      showToast(isSelected ? `Followed ${text} genre` : `Unfollowed ${text}`);
    });
  });

  // Switch tabs function
  function switchTab(tabId) {
    // Update bottom nav button active states
    document.querySelectorAll('.nav-item').forEach(n => {
      const isTarget = n.getAttribute('data-nav') === tabId;
      n.classList.toggle('active', isTarget);
      if (isTarget) {
        n.querySelector('.nav-pill-wrapper svg').setAttribute('fill', 'currentColor');
      }
    });

    // Hide all view mains and show selected
    document.querySelectorAll('.tab-content-view').forEach(view => {
      view.style.display = 'none';
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) {
      targetView.style.display = 'block';
      targetView.classList.add('active');
      targetView.scrollTop = 0;
    }

    if (tabId === 'search') {
      const searchInput = document.getElementById('app-search-input');
      if (searchInput) {
        renderSearchResults(searchInput.value);
        setTimeout(() => searchInput.focus(), 100);
      }
    }
  }

  // Bottom Navigation tabs click listener
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      const navTarget = item.getAttribute('data-nav');
      switchTab(navTarget);
    });
  });

  // Banner explore button
  const exploreBanner = document.getElementById('explore-banner-btn');
  if (exploreBanner) {
    exploreBanner.addEventListener('click', () => {
      showToast('Exploring Play Fest events & rewards');
    });
  }

  // Search feature inside SEARCH TAB
  const searchInput = document.getElementById('app-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const resultsContainer = document.getElementById('search-results-list');
  const resultsHeading = document.getElementById('search-results-heading');

  const allAppsList = [
    { id: 'subway', name: 'Subway Surfers', sub: 'SYBO Games • Arcade • Runner', rating: '4.4 ★', size: '168 MB', icon: './assets/subway_real.png' },
    { id: 'freefire', name: 'Free Fire MAX', sub: 'Action • Battle Royale', rating: '4.2 ★', size: '590 MB', icon: './assets/freefire_hero.png' },
    { id: 'angrybirds', name: 'Angry Birds 2', sub: 'Rovio Entertainment • Casual', rating: '4.5 ★', size: '240 MB', icon: './assets/angrybirds_hero.png' },
    { id: 'myntra', name: 'Myntra - Fashion Shopping App', sub: 'Shopping • Online marketplace', rating: '4.6 ★', size: '26 MB', icon: './assets/myntra_real.png' },
    { id: 'kotak', name: 'Kotak Bank: 811 Mobile App', sub: 'Finance • Bank and online banking', rating: '4.7 ★', size: '105 MB', icon: './assets/kotak_real.png' },
    { id: 'razorpay', name: 'Razorpay Payments for Business', sub: 'Business • Point of sale • Finance', rating: '4.1 ★', size: '15 MB', icon: './assets/razorpay_real.png' },
    { id: 'golfbattle', name: 'Golf Battle', sub: 'Miniclip.com • Sports', rating: '4.6 ★', size: '79 MB', icon: './assets/golfbattle_real.png' },
    { id: 'hillclimb', name: 'Hill Climb Racing', sub: 'Fingersoft • Racing', rating: '4.0 ★', size: '108 MB', icon: './assets/hillclimb_real.png' },
    { id: 'fruitmerge', name: 'Fruit Merge™: Match Game', sub: 'Casual • Puzzle', rating: '4.3 ★', size: '64 MB', icon: './assets/fruitmerge_real.png' },
    { id: 'snakeio', name: 'Snake.io - Fun Snake .io Games', sub: 'Action • Arcade', rating: '4.1 ★', size: '85 MB', icon: './assets/snakeio_real.png' },
    { id: 'hiddenspots', name: 'Hidden Spots - Hidden Objects', sub: 'Puzzle • Brain Teaser', rating: '4.5 ★', size: '72 MB', icon: './assets/hiddenspots_real.png' },
    { id: 'spotify', name: 'Spotify: Music and Podcasts', sub: 'Music & Audio • Podcasts', rating: '4.4 ★', size: '42 MB', icon: './assets/spotify_real.png' },
    { id: 'whatsapp', name: 'WhatsApp Messenger', sub: 'Communication • Chat', rating: '4.5 ★', size: '58 MB', icon: './assets/whatsapp_real.png' }
  ];

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    const q = (query || '').toLowerCase().trim();
    
    let filtered = allAppsList;
    if (q) {
      filtered = allAppsList.filter(a => a.name.toLowerCase().includes(q) || a.sub.toLowerCase().includes(q));
      if (resultsHeading) resultsHeading.textContent = `Results for "${query}" (${filtered.length})`;
    } else {
      if (resultsHeading) resultsHeading.textContent = 'Trending & Recommended searches';
    }

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<div style="text-align:center; padding: 40px 10px; color:#80868b;"><p>No apps found for "${query}"</p></div>`;
      return;
    }

    resultsContainer.innerHTML = filtered.map(app => `
      <div class="app-list-item" data-app="${app.id}">
        <div class="app-icon-box">
          <img src="${app.icon}" alt="${app.name}" class="app-icon-img" />
        </div>
        <div class="app-details">
          <h4 class="app-name">${app.name}</h4>
          <p class="app-meta-sub">${app.sub}</p>
          <div class="app-meta-stats">
            <span class="rating">${app.rating}</span>
            <span class="size">${app.size}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearBtn) clearBtn.hidden = !val;
      renderSearchResults(val);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      clearBtn.hidden = true;
      renderSearchResults('');
      if (searchInput) searchInput.focus();
    });
  }

  // Header Profile & Notification buttons
  const profileBtn = document.getElementById('profile-btn');
  if (profileBtn) {
    profileBtn.addEventListener('click', () => {
      showToast('Google Account: User Profile');
    });
  }

  const notifBtn = document.getElementById('notif-btn');
  if (notifBtn) {
    notifBtn.addEventListener('click', () => {
      showToast('Notifications: 4 unread alerts');
    });
  }

  // Initial render of search tab items
  renderSearchResults('');
});
