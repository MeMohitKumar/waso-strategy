// sw.js - Service Worker File

const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
'/waso-strategy/',
'/waso-strategy/ABOUT THIS TEMPLATE.txt',
'/waso-strategy/index.html',
'/waso-strategy/project-detail.html',
'/waso-strategy/README.md',
'/waso-strategy/css/bootstrap-icons.css',
'/waso-strategy/css/bootstrap.min.css',
'/waso-strategy/css/magnific-popup.css',
'/waso-strategy/css/tooplate-waso-strategy.css',
'/waso-strategy/fonts/bootstrap-icons.woff',
'/waso-strategy/fonts/bootstrap-icons.woff2',
'/waso-strategy/images/jason-goodman-MUZFKa_mttU-unsplash.webp',
'/waso-strategy/images/peter-jones-WZROBIlY8Rg-unsplash.webp',
'/waso-strategy/images/projects/elena-baidak-pz69kY0UQuQ-unsplash.webp',
'/waso-strategy/images/projects/evangeline-shaw-nwLTVwb7DbU-unsplash.webp',
'/waso-strategy/images/projects/pj-gal-szabo-CIXXIWxxec4-unsplash.webp',
'/waso-strategy/images/projects/tangerine-newt-AKH4OVEmILc-unsplash.webp',
'/waso-strategy/images/projects/team-fredi-FN3vmVee2sI-unsplash.webp',
'/waso-strategy/images/projects/vmsign-x9yGe7wnvKQ-unsplash.webp',
'/waso-strategy/images/services/portrait-smiling-african-american-young-woman-holding-movie-production-blackboard-67e1389e27fa6.webp',
'/waso-strategy/images/services/startup-leader-drawing-flowchart-board-discussing-project-67e138b8f04ca.webp',
'/waso-strategy/images/services/young-entrepreneurs-mature-investor-watching-presentation-discussing-project-67e138c4a7e11.webp',
'/waso-strategy/images/slide/christina-wocintechchat-com-ndovgcs-lzm-unsplash-67e138f047e69.webp',
'/waso-strategy/images/slide/jason-goodman-0k7ggia8lve-unsplash-67e138fc7f1e1.webp',
'/waso-strategy/js/bootstrap.min.js',
'/waso-strategy/js/click-scroll.js',
'/waso-strategy/js/custom.js',
'/waso-strategy/js/jquery.magnific-popup.min.js',
'/waso-strategy/js/jquery.min.js',
'/waso-strategy/js/jquery.sticky.js',
'/waso-strategy/js/magnific-popup-options.js'
  ];

// Install event - caches important files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event - serves cached content when available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;

      // If requesting the root, serve index.html
      if (event.request.mode === 'navigate') {
        return caches.match('/waso-strategy/index.html');
      }

      return fetch(event.request);
    })
  );
});

