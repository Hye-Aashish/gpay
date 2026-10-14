// Mobile Google Play Interactive Logic with Dynamic Shuffle Engine
document.addEventListener('DOMContentLoaded', () => {
  // --- Countdown timer logic ---
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

  // --- Comprehensive Catalog Data ---
  const allGamesCatalog = [
    {
      id: 'subway',
      title: 'Subway Surfers',
      sub: 'SYBO Games • Arcade • Runner',
      rating: '4.4',
      size: '168 MB',
      icon: './assets/subway_real.png',
      tag: 'Major update',
      tagIcon: 'update',
      offline: true,
      desc: 'DASH as fast as you can! DODGE the oncoming trains! Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog in this vibrant endless runner.'
    },
    {
      id: 'freefire',
      title: 'Free Fire MAX',
      sub: 'Garena International • Action • Battle Royale',
      rating: '4.2',
      size: '590 MB',
      icon: './assets/freefire_hero.png',
      tag: 'Featured',
      tagIcon: 'star',
      offline: false,
      desc: 'Free Fire MAX is designed exclusively to deliver premium gameplay experience in a Battle Royale. Enjoy thrilling 50-player matches with exclusive Firelink technology.'
    },
    {
      id: 'angrybirds',
      title: 'Angry Birds 2',
      sub: 'Rovio Entertainment • Casual • Slingshot',
      rating: '4.5',
      size: '240 MB',
      icon: './assets/angrybirds_hero.png',
      tag: 'Top Rated',
      tagIcon: 'star',
      offline: true,
      desc: 'Play the world’s best bird-flinging, pig-popping game! Use the slingshot to fling birds at the piggies’ towers and bring them crashing down with unique spells.'
    },
    {
      id: 'golfbattle',
      title: 'Golf Battle',
      sub: 'Miniclip.com • Sports • Multiplayer',
      rating: '4.6',
      size: '79 MB',
      icon: './assets/golfbattle_real.png',
      tag: 'Multiplayer',
      tagIcon: 'star',
      offline: false,
      desc: 'Challenge real players from around the world and make it to the top! Gather your friends and play 1v1 or with up to 6 Facebook friends in fast-paced mini golf.'
    },
    {
      id: 'hillclimb',
      title: 'Hill Climb Racing',
      sub: 'Fingersoft • Racing • Offline physics',
      rating: '4.0',
      size: '108 MB',
      icon: './assets/hillclimb_real.png',
      tag: 'Major update',
      tagIcon: 'update',
      offline: true,
      desc: 'Face the challenges of unique hill climbing environments with many different cars. Gain bonuses from daring tricks and collect coins to upgrade your vehicle.'
    },
    {
      id: 'fruitmerge',
      title: 'Fruit Merge™: Match Game',
      sub: 'Casual • Puzzle • Brain teaser',
      rating: '4.3',
      size: '64 MB',
      icon: './assets/fruitmerge_real.png',
      tag: 'Event',
      tagIcon: 'event',
      eventEnd: 'Ends on 28/10/2026',
      offline: true,
      desc: 'Drop juicy fruits and merge matching pairs to evolve them into bigger fruits until you create the giant watermelon! Test your spatial reasoning.'
    },
    {
      id: 'snakeio',
      title: 'Snake.io - Fun Snake .io Games',
      sub: 'Kooapps Games • Action • Arcade',
      rating: '4.1',
      size: '85 MB',
      icon: './assets/snakeio_real.png',
      tag: 'Event',
      tagIcon: 'event',
      eventEnd: 'Ends soon',
      offline: true,
      desc: 'Slither through a competitive version of Snake and survive as long as you can! Compete against other players online or offline in epic arcade challenges.'
    },
    {
      id: 'hiddenspots',
      title: 'Hidden Spots - Hidden Objects',
      sub: 'Puzzle • Brain Teaser • Offline',
      rating: '4.5',
      size: '72 MB',
      icon: './assets/hiddenspots_real.png',
      tag: 'Event',
      tagIcon: 'event',
      eventEnd: 'Ends in 5 days',
      offline: true,
      desc: 'Search, find and uncover hidden objects in beautifully handcrafted detailed illustrations. Relax and test your detective observation skills.'
    },
    {
      id: 'candy',
      title: 'Candy Crush Saga',
      sub: 'King • Casual • Match 3 Puzzle',
      rating: '4.6',
      size: '89 MB',
      icon: './assets/candy_real.png',
      tag: 'Popular',
      tagIcon: 'star',
      offline: true,
      desc: 'Master the legendary match 3 puzzle game from King! Match candies, blast combos and switch your way through thousands of sweet levels.'
    },
    {
      id: 'chess',
      title: 'Chess – Play and Learn',
      sub: 'Chess.com • Strategy • Board',
      rating: '4.7',
      size: '36 MB',
      icon: './assets/chess_real.png',
      tag: "Editor's Choice",
      tagIcon: 'star',
      offline: true,
      desc: 'Play chess online with more than 150 million players from around the world! Learn with free unlimited chess puzzles and interactive master lessons.'
    }
  ];

  const allAppsCatalog = [
    {
      id: 'spotify',
      title: 'Spotify: Music and Podcasts',
      sub: 'Music & Audio • Podcasts • Streaming',
      rating: '4.4',
      size: '42 MB',
      icon: './assets/spotify_real.png',
      tag: 'Music',
      desc: 'With Spotify, you can listen to millions of songs and podcasts for free. Play songs, create playlists, and explore albums from your favorite artists.'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Messenger',
      sub: 'WhatsApp LLC • Communication • Chat',
      rating: '4.5',
      size: '58 MB',
      icon: './assets/whatsapp_real.png',
      tag: 'Essential',
      desc: 'Simple, personal, real-time messaging and video calls with friends and family around the world. End-to-end encrypted and completely free.'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      sub: 'Instagram • Social • Photo & Video Sharing',
      rating: '4.3',
      size: '76 MB',
      icon: './assets/instagram_real.png',
      tag: 'Trending',
      desc: 'Bring you closer to the people and things you love. Connect with friends, share reels, photos, and explore new creative trends from creators.'
    },
    {
      id: 'youtube',
      title: 'YouTube',
      sub: 'Google LLC • Video Players & Editors • Streaming',
      rating: '4.2',
      size: '65 MB',
      icon: './assets/youtube_real.png',
      tag: 'Top Video',
      desc: 'Get the official YouTube app on your Android phone. Watch trending music videos, gaming highlights, news broadcasts, tutorials, and more.'
    },
    {
      id: 'netflix',
      title: 'Netflix',
      sub: 'Netflix, Inc. • Entertainment • Movies & Shows',
      rating: '4.1',
      size: '31 MB',
      icon: './assets/netflix_real.png',
      tag: 'Streaming',
      desc: 'Looking for the most talked about TV shows and movies from around the world? Award-winning series, documentaries, and stand-up specials on Netflix.'
    },
    {
      id: 'telegram',
      title: 'Telegram',
      sub: 'Telegram FZ-LLC • Social • Messaging',
      rating: '4.5',
      size: '44 MB',
      icon: './assets/telegram_real.png',
      tag: 'Fast & Secure',
      desc: 'Pure instant messaging — simple, fast, secure, and synced across all your devices. Send media and files without any limits on their type and size.'
    },
    {
      id: 'duolingo',
      title: 'Duolingo: Language Lessons',
      sub: 'Duolingo • Education • Free language learning',
      rating: '4.6',
      size: '49 MB',
      icon: './assets/duolingo_real.png',
      tag: 'Top Free',
      desc: 'Learn a new language with the world’s most-downloaded education app! Practice speaking, reading, listening, and writing through gamified lessons.'
    },
    {
      id: 'myntra',
      title: 'Myntra - Fashion Shopping App',
      sub: 'Myntra Designs • Shopping • Online marketplace',
      rating: '4.6',
      size: '26 MB',
      icon: './assets/myntra_real.png',
      tag: 'Fashion',
      desc: 'India’s biggest fashion and lifestyle online destination. Discover trending clothes, footwear, accessories, beauty products, and exclusive seasonal sales.'
    },
    {
      id: 'kotak',
      title: 'Kotak Bank: 811 Mobile App',
      sub: 'Kotak Mahindra Bank • Finance • Banking',
      rating: '4.7',
      size: '105 MB',
      icon: './assets/kotak_real.png',
      badge: 'NEW',
      tag: 'Finance',
      desc: 'Kotak 811 Mobile Banking App offers seamless zero-balance savings account opening, money transfer, bill payments, and investment options.'
    },
    {
      id: 'razorpay',
      title: 'Razorpay Payments for Business',
      sub: 'Razorpay • Business • Point of sale • Finance',
      rating: '4.1',
      size: '15 MB',
      icon: './assets/razorpay_real.png',
      tag: 'Business',
      desc: 'Accept payments, track cashflow, create payment links and manage business transactions with ease directly on your mobile device.'
    }
  ];

  // Combined dictionary for modal view lookup
  const appData = {};
  [...allGamesCatalog, ...allAppsCatalog].forEach(app => {
    appData[app.id] = app;
  });

  // Modal and Toast Elements
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

  // --- Fisher-Yates Array Shuffle Utility ---
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- HTML Builder for App Card Item ---
  function createAppItemHtml(app) {
    const badgeHtml = app.badge ? `<span class="app-icon-badge">${app.badge}</span>` : '';
    
    let tagBadgeHtml = '';
    if (app.tagIcon === 'update') {
      tagBadgeHtml = `<span class="tag-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.19"/></svg> ${app.tag}</span>`;
    } else if (app.tagIcon === 'event') {
      tagBadgeHtml = `<span class="tag-badge event-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${app.tag}</span>`;
      if (app.eventEnd) {
        tagBadgeHtml += ` <span class="end-date">${app.eventEnd}</span>`;
      }
    } else if (app.tag) {
      tagBadgeHtml = `<span class="tag-badge"><span class="star-sparkle-icon">✨</span> ${app.tag}</span>`;
    }

    return `
      <div class="app-list-item" data-app="${app.id}">
        <div class="app-icon-box ${app.id === 'kotak' ? 'kotak-icon' : ''}">
          <img src="${app.icon}" alt="${app.title}" class="app-icon-img" />
          ${badgeHtml}
        </div>
        <div class="app-details">
          <h4 class="app-name">${app.title}</h4>
          <p class="app-meta-sub">${app.sub}</p>
          <div class="app-meta-stats">
            <span class="rating">${app.rating} <span class="star-mini">★</span></span>
            <span class="size">${app.size}</span>
            ${tagBadgeHtml}
          </div>
        </div>
      </div>
    `;
  }

  // --- Dynamic Shuffler Engine ---
  // Every time user enters or navigates, all lists shuffle into brand new order and combinations!
  function shuffleAllAppLists(notify = false) {
    const suggestedContainer = document.getElementById('suggested-list');
    const recommendedContainer = document.getElementById('recommended-list');
    const offlineContainer = document.getElementById('offline-list');
    const appsTabContainer = document.getElementById('apps-tab-list');

    // 1. Shuffled Suggested for you (mix of popular games & apps)
    if (suggestedContainer) {
      const pool = shuffleArray([...allAppsCatalog, ...allGamesCatalog]);
      const pickedSuggested = pool.slice(0, 3);
      suggestedContainer.innerHTML = pickedSuggested.map(createAppItemHtml).join('');
    }

    // 2. Shuffled Recommended for you (rich games)
    if (recommendedContainer) {
      const shuffledGames = shuffleArray(allGamesCatalog);
      const pickedRecommended = shuffledGames.slice(0, 3);
      recommendedContainer.innerHTML = pickedRecommended.map(createAppItemHtml).join('');
    }

    // 3. Shuffled Offline games
    if (offlineContainer) {
      const offlinePool = shuffleArray(allGamesCatalog.filter(g => g.offline));
      const pickedOffline = offlinePool.slice(0, 3);
      offlineContainer.innerHTML = pickedOffline.map(createAppItemHtml).join('');
    }

    // 4. Shuffled Apps Tab (Productivity & Social apps)
    if (appsTabContainer) {
      const shuffledApps = shuffleArray(allAppsCatalog);
      const pickedApps = shuffledApps.slice(0, 5);
      appsTabContainer.innerHTML = pickedApps.map(createAppItemHtml).join('');
    }

    // 5. Shuffled Search Tab trending recommendations
    const searchInput = document.getElementById('app-search-input');
    if (searchInput && !searchInput.value.trim()) {
      renderSearchResults('');
    }

    if (notify) {
      showToast('App list refreshed & shuffled ✨');
    }
  }

  // Initial shuffle on every app open / reload!
  shuffleAllAppLists(false);

  // Re-shuffle when clicking section action buttons (More options or Arrow buttons)
  document.querySelectorAll('.more-opts-btn, .arrow-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      shuffleAllAppLists(true);
    });
  });

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

  // Auto slide hero carousel every 5 seconds
  let autoSlideTimer = setInterval(() => {
    updateSlide(currentSlide + 1);
  }, 5000);

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
      
      // Also shuffle when switching filter chips for dynamic experience!
      shuffleAllAppLists(false);
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

  // --- Open App Details Sheet ---
  function openAppSheet(id) {
    const data = appData[id] || {
      title: 'Google Play App',
      sub: 'Utilities • Free',
      rating: '4.5',
      size: '45 MB',
      icon: './assets/play.svg',
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
            <p style="margin-top: 6px; font-weight: 600; color: #c4c7c5;">${data.rating} ★ • ${data.size}</p>
          </div>
        </div>
        <p style="font-size: 13.5px; line-height: 1.6; color: #a8abb0; margin-bottom: 20px;">${data.desc}</p>
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

  // App Item clicks (Delegated so dynamically rendered and shuffled items always work)
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

  // Switch tabs function with auto-shuffle on visit
  function switchTab(tabId) {
    // Update bottom nav button active states
    document.querySelectorAll('.nav-item').forEach(n => {
      const isTarget = n.getAttribute('data-nav') === tabId;
      n.classList.toggle('active', isTarget);
      if (isTarget) {
        const svg = n.querySelector('.nav-pill-wrapper svg');
        if (svg) svg.setAttribute('fill', 'currentColor');
      }
    });

    // Hide all views and show selected
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

    // Shuffle lists whenever visiting tabs so it feels fresh!
    shuffleAllAppLists(false);

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
      shuffleAllAppLists(true);
    });
  }

  // --- Search Feature Inside Search Tab ---
  const searchInput = document.getElementById('app-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const resultsContainer = document.getElementById('search-results-list');
  const resultsHeading = document.getElementById('search-results-heading');

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    const q = (query || '').toLowerCase().trim();
    
    const combinedAll = [...allGamesCatalog, ...allAppsCatalog];

    let filtered;
    if (q) {
      filtered = combinedAll.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.sub.toLowerCase().includes(q) || 
        a.desc.toLowerCase().includes(q)
      );
      if (resultsHeading) resultsHeading.textContent = `Results for "${query}" (${filtered.length})`;
    } else {
      // When empty, show a shuffled set of trending apps!
      filtered = shuffleArray(combinedAll).slice(0, 8);
      if (resultsHeading) resultsHeading.textContent = 'Trending & Recommended for you';
    }

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<div style="text-align:center; padding: 40px 10px; color:#80868b;"><p>No apps found for "${query}"</p></div>`;
      return;
    }

    resultsContainer.innerHTML = filtered.map(createAppItemHtml).join('');
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
});
