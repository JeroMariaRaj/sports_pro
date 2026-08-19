document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-[#FDFBF9] text-[#5D4037] shadow-[0_4px_12px_rgba(93,64,55,0.15)] transition-all duration-300">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

   <h1 class="text-2xl font-bold text-[#3E2723]">
  <a href="index.html" class="flex items-center gap-2 ">
    <img src="assets/images/site-icon.jpeg" alt="Logo" class="w-8 h-8 rounded-full object-cover">
    <span class="tracking-tight">SPORTS</span>
    <span class="font-normal">PRO</span>
  </a>
</h1>

    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-10 font-medium text-sm" id="navLinks">

        <li class="relative">
          <button id="homeDropdownBtn"
            class="flex items-center gap-1 transition hover:text-[#8D6E63]">
            Home <i class="bi bi-chevron-down text-xs"></i>
          </button>

          <ul id="homeDropdownMenu"
            class="absolute left-0 mt-3 w-44 bg-white text-[#3E2723] rounded-xl shadow-xl hidden z-50 border border-[#EFEBE9]">
            <li>
              <a href="index.html" class="block px-4 py-2 rounded-t-xl transition hover:bg-[#F5F5F5]">Home 1</a>
            </li>
            <li>
              <a href="home2.html" class="block px-4 py-2 rounded-b-xl transition hover:bg-[#F5F5F5]">Home 2</a>
            </li>
          </ul>
        </li>

        <li><a href="about.html" class="transition hover:text-[#8D6E63]">About</a></li>
        <li><a href="services.html" class="transition hover:text-[#8D6E63]">Categories</a></li>
        <li><a href="shop.html" class="transition hover:text-[#8D6E63]">Products</a></li>
        <li><a href="blog.html" class="transition hover:text-[#8D6E63]">Blog</a></li>
        <li><a href="contact.html" class="transition hover:text-[#8D6E63]">Contact</a></li>
        </li>
      </ul>
    </div>

    <div id="rightButtons" class="hidden lg:flex items-center gap-5">

      <button id="theme-toggle" class="text-xl hover:text-[#8D6E63] transition">
        <i class="bi bi-moon-fill"></i>
      </button>

      <button id="rtlToggle" class="text-2xl hover:text-[#8D6E63] transition">
        ⇄
      </button>

      <a href="cart.html" aria-label="View shopping cart"
         class="relative text-2xl hover:text-[#8D6E63] transition">
        <i class="bi bi-cart3"></i>
        <span class="cart-count absolute -top-2 -right-3 min-w-5 h-5 px-1 rounded-full bg-[#8D6E63] text-white text-[10px] font-bold flex items-center justify-center">0</span>
      </a>

      <a href="contact.html" 
         class="px-5 py-2 rounded-lg bg-[#5D4037] text-white font-semibold text-sm transition hover:bg-[#3E2723] shadow-md ml-2 whitespace-nowrap">
         Book Service
      </a>
      
      <button id="profileBtn" class="hidden"></button>
      <ul id="profileMenu" class="hidden"></ul>
    </div>

    <button id="hamburgerBtn"
      class="lg:hidden text-3xl text-[#5D4037] hover:text-[#3E2723] transition">
      <i class="bi bi-list"></i>
    </button>

  </div>
</header>

<div id="mobileMenuOverlay"
  class="fixed inset-0 bg-[#3E2723] bg-opacity-40 hidden lg:hidden z-40"></div>

<div id="mobileMenu"
  class="fixed top-0 right-0 h-full w-72 bg-[#3E2723] text-[#FDFBF9] z-50
          transform translate-x-full transition-transform duration-300 lg:hidden shadow-2xl">

  <div class="flex items-center justify-between p-5 border-b border-[#5D4037]">
    <h2 class="text-xl font-bold text-[#EFEBE9]">Menu</h2>
    <button id="closeMenuBtn" class="text-3xl hover:text-[#D7CCC8] transition">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>

  <div class="p-6 overflow-y-auto h-full">
    <ul class="space-y-4">
      <li>
        <button id="mobileDropdownBtn"
          class="w-full flex items-center justify-between py-2 hover:text-[#D7CCC8] transition">
          <span>Home</span>
          <i id="mobileHomeChevron" class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2">
          <li><a href="index.html" class="block py-1 hover:text-[#D7CCC8]">Home 1</a></li>
          <li><a href="home2.html" class="block py-1 hover:text-[#D7CCC8]">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2 hover:text-[#D7CCC8] transition">About</a></li>
      <li><a href="services.html" class="block py-2 hover:text-[#D7CCC8] transition">Categories</a></li>
      <li><a href="shop.html" class="block py-2 hover:text-[#D7CCC8] transition">Products</a></li>
      <li><a href="blog.html" class="block py-2 hover:text-[#D7CCC8] transition">Blog</a></li>
      <li><a href="cart.html" class="block py-2 hover:text-[#D7CCC8] transition">Cart <span class="cart-count ml-1 inline-flex min-w-5 h-5 px-1 items-center justify-center rounded-full bg-[#8D6E63] text-white text-[10px] font-bold">0</span></a></li>      <li><a href="contact.html" class="block py-2 hover:text-[#D7CCC8] transition">Contact</a></li>



      <li class="pt-4">
         <a href="contact.html" class="block w-full text-center py-2 bg-[#EFEBE9] text-[#3E2723] rounded-lg font-bold">Book Service</a>
      </li>

      <li class="pt-6 border-t border-[#5D4037] flex justify-around">
        <button id="mobile-theme-toggle" class="text-2xl hover:text-[#D7CCC8] transition">
          <i class="bi bi-moon-fill"></i>
        </button>
        <button id="mobile-rtl-toggle" class="text-2xl hover:text-[#D7CCC8] transition">
          ⇄
        </button>
        <button id="mobileProfileBtn" class="hidden"></button>
        <ul id="mobileProfileMenu" class="hidden"></ul>
      </li>
    </ul>
  </div>
</div>
`;

  // Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    body.classList.toggle('mobile-menu-open');
    if (!mobileMenu.classList.contains('active')) {
      mobileDropdownMenu.classList.remove('show');
    }
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);
  closeMenuBtn.addEventListener('click', toggleMobileMenu);
  mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });

  const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');

  if (mobileDropdownBtn) {
    mobileDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdownMenu.classList.toggle('hidden');
    });
  }


  const homeDropdownBtn = document.getElementById('homeDropdownBtn');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');

  if (homeDropdownBtn) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      homeDropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
        homeDropdownMenu.classList.add('hidden');
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      if (mobileDropdownMenu) {
        mobileDropdownMenu.classList.add('hidden');
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDropdownMenu) mobileDropdownMenu.classList.add('hidden');
      if (homeDropdownMenu) homeDropdownMenu.classList.add('hidden');
      if (window.innerWidth <= 1024 && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    }
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        if (body.classList.contains('mobile-menu-open')) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = '';
        }
      }
    });
  });

  observer.observe(body, { attributes: true });

  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.innerHTML = savedTheme === "dark"
      ? `<i class="bi bi-brightness-high-fill"></i>`
      : `<i class="bi bi-moon-fill"></i>`;
  }

  toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  const rtlToggle = document.getElementById("rtlToggle");
  if (rtlToggle) {
    const savedDir = localStorage.getItem("dir") || "ltr";
    document.documentElement.setAttribute("dir", savedDir);
    rtlToggle.onclick = () => {
      const html = document.documentElement;
      const targetDir = html.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
      html.setAttribute("dir", targetDir);
      localStorage.setItem("dir", targetDir);
    };
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('#navLinks > li > a, #mobileMenu > ul > li > a');

  allNavLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) link.classList.add("nav-active");
  });

  if (currentPath === "index.html" || currentPath === "home2.html") {
    document.getElementById("homeDropdownBtn")?.classList.add("home-active");
    document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
  }

  // The navigation is inserted after page scripts initialise, so render its
  // cart badges here and keep them in sync with the shared cart store.
  const updateCartCount = () => {
    if (!window.store) return;
    const count = window.store.getCart().reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach((badge) => {
      badge.textContent = count;
    });
  };
  updateCartCount();
  window.addEventListener('cartUpdated', updateCartCount);

  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  mobileThemeToggle?.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      mobileThemeToggle.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      mobileThemeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  const mobileRtlToggle = document.getElementById("mobile-rtl-toggle");
  mobileRtlToggle?.addEventListener("click", () => {
    const html = document.documentElement;
    const targetDir = html.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
    html.setAttribute("dir", targetDir);
    localStorage.setItem("dir", targetDir);
  });
});

