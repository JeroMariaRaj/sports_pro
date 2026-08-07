/* 
====================================================================
SportsPro X - Authentication & Theme Logic
====================================================================
*/

// Auth Manager
window.renderHeader = () => {
    const container = document.getElementById('spx-header-container');
    if (!container) return;
    
    container.innerHTML = `
    <div class="bg-primary-spx text-white py-2 small">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="d-none d-md-block">Free shipping on orders over $100!</div>
            <div class="d-flex gap-3 ms-auto">
                <a href="contact.html" class="text-white text-decoration-none"><i class="fa-solid fa-location-dot me-1"></i> Store Locator</a>
            </div>
        </div>
    </div>
    <header class="spx-header sticky-top py-3 z-20 shadow-sm">
        <div class="container d-flex justify-content-between align-items-center">
            <a href="index.html" class="fs-3 fw-bold text-primary-spx text-decoration-none">
                <i class="fa-solid fa-medal text-accent-spx me-2"></i>SportsPro X
            </a>
            <nav class="d-none d-lg-flex gap-4 align-items-center fw-medium">
                <div class="dropdown">
                      <a href="#" class="nav-link-spx text-muted-spx text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                      <ul class="dropdown-menu border-0 shadow-sm mt-2">
                          <li><a class="dropdown-item py-2" href="index.html">Home 1</a></li>
                          <li><a class="dropdown-item py-2" href="index-2.html">Home 2</a></li>
                      </ul>
                  </div>
                <div class="mega-menu-wrapper py-2">
                    <a href="shop.html" class="nav-link-spx text-muted-spx text-decoration-none">Categories <i class="fa-solid fa-chevron-down ms-1 small"></i></a>
                    <div class="mega-menu-dropdown">
                        <div class="row g-4">
                            <div class="col-3">
                                <h6 class="fw-bold mb-3 border-bottom pb-2">Team Sports</h6>
                                <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
                                    <li><a href="shop.html?cat=Cricket" class="text-muted-spx">Cricket</a></li>
                                    <li><a href="shop.html?cat=Football" class="text-muted-spx">Football</a></li>
                                    <li><a href="shop.html?cat=Basketball" class="text-muted-spx">Basketball</a></li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <h6 class="fw-bold mb-3 border-bottom pb-2">Racket Sports</h6>
                                <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
                                    <li><a href="shop.html?cat=Badminton" class="text-muted-spx">Badminton</a></li>
                                    <li><a href="shop.html?cat=Tennis" class="text-muted-spx">Tennis</a></li>
                                </ul>
                            </div>
                            <div class="col-3">
                                <h6 class="fw-bold mb-3 border-bottom pb-2">Individual</h6>
                                <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
                                    <li><a href="shop.html?cat=Fitness" class="text-muted-spx">Fitness & Yoga</a></li>
                                    <li><a href="shop.html?cat=Cycling" class="text-muted-spx">Cycling</a></li>
                                    <li><a href="shop.html?cat=Swimming" class="text-muted-spx">Swimming</a></li>
                                </ul>
                            </div>
                            <div class="col-3 border-start ps-4">
                                <div class="bg-alt-spx p-3 rounded h-100 text-center">
                                    <h6 class="fw-bold text-accent-spx">Sale up to 50%</h6>
                                    <p class="small text-muted-spx">On selected gym equipment</p>
                                    <a href="shop.html" class="btn btn-sm btn-outline-spx w-100">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="shop.html" class="nav-link-spx text-muted-spx text-decoration-none">Shop</a>
                <a href="services.html" class="nav-link-spx text-muted-spx text-decoration-none">Services</a>
                <a href="blog.html" class="nav-link-spx text-muted-spx text-decoration-none">Blog</a>
                <a href="contact.html" class="nav-link-spx text-muted-spx text-decoration-none">Contact</a>
            </nav>
            <div class="d-flex align-items-center gap-3 header-actions">
                <button class="btn btn-link text-muted-spx p-0 fs-5"><i class="fa-solid fa-search"></i></button>
                <div class="vr"></div>
                <button id="theme-toggle" class="theme-toggle-btn border-0 shadow-none bg-transparent fs-5" title="Toggle Dark Mode">
                    <i class="fa-solid fa-moon"></i>
                </button>
                <div class="vr"></div>
                
                <a href="wishlist.html" class="text-muted-spx fs-5 position-relative">
                    <i class="fa-regular fa-heart"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger wishlist-count" style="font-size: 0.6rem;">0</span>
                </a>
                <a href="cart.html" class="text-muted-spx fs-5 position-relative">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-accent-spx cart-count" style="font-size: 0.6rem;">0</span>
                </a>
                
                <div id="auth-menu" class="dropdown ms-3"></div>
                <button class="btn btn-outline-spx mobile-nav-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#spx-mobile-menu" aria-controls="spx-mobile-menu" aria-label="Open navigation menu">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
    <div class="offcanvas offcanvas-end mobile-menu" tabindex="-1" id="spx-mobile-menu" aria-labelledby="spx-mobile-menu-label">
        <div class="offcanvas-header">
            <a href="index.html" id="spx-mobile-menu-label" class="fs-4 fw-bold text-primary-spx text-decoration-none"><i class="fa-solid fa-medal text-accent-spx me-2"></i>SportsPro X</a>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close navigation"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column">
            <nav aria-label="Mobile primary navigation">
                <a href="index.html" class="nav-link-spx">Home</a>
                <a href="shop.html" class="nav-link-spx">Categories</a>
                <a href="shop.html" class="nav-link-spx">Shop</a>
                <a href="services.html" class="nav-link-spx">Services</a>
                <a href="blog.html" class="nav-link-spx">Blog</a>
                <a href="contact.html" class="nav-link-spx">Contact</a>
            </nav>
            <div class="mt-auto pt-4 border-top">
                <a href="wishlist.html" class="btn btn-outline-spx w-100 mb-2"><i class="fa-regular fa-heart me-2"></i>Wishlist</a>
                <a href="cart.html" class="btn btn-secondary-spx w-100"><i class="fa-solid fa-cart-shopping me-2"></i>Cart</a>
            </div>
        </div>
    </div>
    `;

    // Handle Auth UI
    const authMenu = document.getElementById('auth-menu');
    const user = window.auth.getUser();
    if (user) {
        let menuItems = '';
        if (user.role === 'admin') {
            menuItems = `
                <li><a class="dropdown-item rounded mb-1" href="admin-dashboard.html"><i class="fa-solid fa-gauge me-2 text-muted-spx"></i> Admin Dashboard</a></li>
            `;
        } else {
            menuItems = `
                <li><a class="dropdown-item rounded mb-1" href="profile.html"><i class="fa-regular fa-user me-2 text-muted-spx"></i> My Profile</a></li>
                <li><a class="dropdown-item rounded mb-1" href="profile.html?tab=orders"><i class="fa-solid fa-box-open me-2 text-muted-spx"></i> My Orders</a></li>
                <li><a class="dropdown-item rounded mb-1" href="profile.html?tab=tracking"><i class="fa-solid fa-truck-fast me-2 text-muted-spx"></i> Track Order</a></li>
            `;
        }

        authMenu.innerHTML = `
            <a href="#" class="btn btn-primary-spx text-white text-decoration-none dropdown-toggle px-4" data-bs-toggle="dropdown" style="padding-top: 0.6rem; padding-bottom: 0.6rem; border-radius: 50px;">
                <i class="fa-solid fa-circle-user me-2"></i> Account
            </a>
            <ul class="dropdown-menu dropdown-menu-end border-0 shadow-lg mt-3 p-2" style="width: 250px;">
                <li class="px-3 py-2 border-bottom mb-2">
                    <h6 class="mb-0 fw-bold">${user.name}</h6>
                    <span class="small text-muted-spx">${user.email}</span>
                </li>
                ${menuItems}
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item rounded text-danger" href="#" onclick="window.auth.logout()"><i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Logout</a></li>
            </ul>
        `;
    } else {
        authMenu.innerHTML = '<a href="login.html" class="btn btn-primary-spx text-white px-4" style="padding-top: 0.6rem; padding-bottom: 0.6rem; border-radius: 50px;">Sign In</a>';
    }

    // Handle Active Nav State
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link-spx').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.remove('text-muted-spx');
            link.classList.add('text-primary-spx', 'border-bottom', 'border-2', 'border-secondary-spx', 'pb-1');
        }
    });

};

window.renderFooter = () => {
    const container = document.getElementById('spx-footer-container');
    if (!container) return;

    container.innerHTML = `
    <footer class="bg-primary-spx text-white pt-5 pb-4 mt-5">
        <div class="container py-4">
            <div class="row g-5">
                <div class="col-lg-4">
                    <a href="index.html" class="fs-3 fw-bold text-white text-decoration-none mb-4 d-block">
                        <i class="fa-solid fa-medal text-accent-spx me-2"></i>SportsPro X
                    </a>
                    <p class="text-white-50 mb-4">The ultimate destination for premium sports equipment, apparel, and customized team solutions.</p>
                    <div class="d-flex gap-3">
                        <a href="#" class="btn btn-outline-light rounded-circle" style="width: 40px; height: 40px; padding: 0; line-height: 38px; text-align: center;"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="btn btn-outline-light rounded-circle" style="width: 40px; height: 40px; padding: 0; line-height: 38px; text-align: center;"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" class="btn btn-outline-light rounded-circle" style="width: 40px; height: 40px; padding: 0; line-height: 38px; text-align: center;"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5 class="fw-bold mb-4">Shop</h5>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li><a href="shop.html?cat=Cricket" class="text-white-50 text-decoration-none hover-white">Cricket</a></li>
                        <li><a href="shop.html?cat=Football" class="text-white-50 text-decoration-none hover-white">Football</a></li>
                        <li><a href="shop.html?cat=Basketball" class="text-white-50 text-decoration-none hover-white">Basketball</a></li>
                        <li><a href="shop.html?cat=Fitness" class="text-white-50 text-decoration-none hover-white">Fitness</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5 class="fw-bold mb-4">Company</h5>
                    <ul class="list-unstyled d-flex flex-column gap-2">
                        <li><a href="about.html" class="text-white-50 text-decoration-none hover-white">About Us</a></li>
                        <li><a href="contact.html" class="text-white-50 text-decoration-none hover-white">Contact</a></li>
                        <li><a href="blog.html" class="text-white-50 text-decoration-none hover-white">Blog</a></li>
                        <li><a href="services.html" class="text-white-50 text-decoration-none hover-white">Services</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-4">
                    <h5 class="fw-bold mb-4">Newsletter</h5>
                    <p class="text-white-50 mb-3">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Enter your email" aria-label="Email">
                        <button class="btn btn-accent-spx text-white" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr class="border-secondary my-4">
            <div class="text-center text-white-50 small">
                &copy; 2024 SportsPro X. All rights reserved.
            </div>
        </div>
    </footer>
    `;
};

// Auth Manager
window.auth = {
    login: (email, password) => {
        if (email === 'admin@sportsprox.com' && password === 'Admin@123') {
            const user = { role: 'admin', email: email, name: 'Admin User' };
            localStorage.setItem('spx_user', JSON.stringify(user));
            return { success: true, redirect: 'admin-dashboard.html' };
        }
        if (email === 'user@sportsprox.com' && password === 'User@123') {
            const user = { role: 'user', email: email, name: 'Standard User' };
            localStorage.setItem('spx_user', JSON.stringify(user));
            return { success: true, redirect: 'index.html' };
        }
        return { success: false, message: 'Invalid credentials' };
    },
    
    logout: () => {
        localStorage.removeItem('spx_user');
        window.location.href = 'login.html';
    },

    getUser: () => {
        return JSON.parse(localStorage.getItem('spx_user') || 'null');
    },

    updateUser: (updates = {}) => {
        const currentUser = window.auth.getUser();
        if (!currentUser) return null;

        const updatedUser = { ...currentUser, ...updates };
        localStorage.setItem('spx_user', JSON.stringify(updatedUser));
        return updatedUser;
    },
    
    requireAuth: (allowedRoles = ['admin', 'user']) => {
        const user = window.auth.getUser();
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
        if (!allowedRoles.includes(user.role)) {
            window.location.href = '404.html';
        }
    }
};

// UI Initialization
document.addEventListener('DOMContentLoaded', () => {
    
    // Render Header & Footer
    if(window.renderHeader) window.renderHeader();
    if(window.renderFooter) window.renderFooter();

    // Make content imagery inexpensive off-screen and avoid decoding jank.
    document.querySelectorAll('img:not([loading])').forEach((image) => {
        image.loading = 'lazy';
        image.decoding = 'async';
    });

    // Theme Management
    const savedTheme = localStorage.getItem('spx_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Bind Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('spx_theme', target);
        });
    }

    // RTL Management
    const rtlToggle = document.getElementById('rtl-toggle');
    if (rtlToggle) {
        const savedDir = localStorage.getItem('spx_dir') || 'ltr';
        document.documentElement.setAttribute('dir', savedDir);
        
        rtlToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('dir');
            const target = current === 'ltr' ? 'rtl' : 'ltr';
            document.documentElement.setAttribute('dir', target);
            localStorage.setItem('spx_dir', target);
        });
    }

    // Sticky Header
    const header = document.querySelector('.spx-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('sticky-scroll');
            } else {
                header.classList.remove('sticky-scroll');
            }
        });
    }

    // Admin pages use a persistent desktop sidebar. On tablet/mobile it becomes
    // a focusable drawer without changing the existing admin markup or routes.
    const adminSidebar = document.querySelector('.admin-sidebar');
    const adminTopbar = document.querySelector('.admin-main > header');
    if (adminSidebar && adminTopbar) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'btn btn-outline-spx admin-sidebar-toggle';
        toggle.setAttribute('aria-label', 'Open admin navigation');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        const backdrop = document.createElement('div');
        backdrop.className = 'admin-drawer-backdrop';
        document.body.appendChild(backdrop);
        adminTopbar.prepend(toggle);
        const closeDrawer = () => {
            adminSidebar.classList.remove('is-open');
            backdrop.classList.remove('is-visible');
            toggle.setAttribute('aria-expanded', 'false');
        };
        toggle.addEventListener('click', () => {
            const isOpen = adminSidebar.classList.toggle('is-open');
            backdrop.classList.toggle('is-visible', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
        backdrop.addEventListener('click', closeDrawer);
        document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDrawer(); });
        adminSidebar.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeDrawer));
    }

    // The catalogue filters follow the same compact-screen drawer pattern.
    const categoryFilters = document.getElementById('filter-categories');
    if (categoryFilters) {
        const filters = categoryFilters.closest('.col-lg-3');
        const shopRow = filters && filters.parentElement;
        if (filters && shopRow) {
            filters.classList.add('shop-filters');
            const toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'btn btn-outline-spx shop-filters-toggle';
            toggle.innerHTML = '<i class="fa-solid fa-sliders me-2"></i>Filters';
            toggle.setAttribute('aria-expanded', 'false');
            const backdrop = document.createElement('div');
            backdrop.className = 'admin-drawer-backdrop';
            document.body.appendChild(backdrop);
            shopRow.before(toggle);
            const closeFilters = () => {
                filters.classList.remove('is-open');
                backdrop.classList.remove('is-visible');
                toggle.setAttribute('aria-expanded', 'false');
            };
            toggle.addEventListener('click', () => {
                const isOpen = filters.classList.toggle('is-open');
                backdrop.classList.toggle('is-visible', isOpen);
                toggle.setAttribute('aria-expanded', String(isOpen));
            });
            backdrop.addEventListener('click', closeFilters);
            filters.querySelectorAll('button, a').forEach((item) => item.addEventListener('click', closeFilters));
            filters.querySelectorAll('input, select').forEach((item) => item.addEventListener('change', closeFilters));
        }
    }

    // Toast Notifications Setup
    const toastContainer = document.createElement('div');
    toastContainer.className = 'fixed top-24 right-6 z-[9999] flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(toastContainer);

    window.showToast = (message, type = 'success') => {
        const id = 'toast-' + Date.now();
        const bgColor = type === 'success' ? 'bg-[#3E2723]' : 'bg-red-600';
        const icon = type === 'success' ? 'bi-check-circle-fill text-[#D7CCC8]' : 'bi-exclamation-circle-fill text-white';
        
        const html = `
            <div id="${id}" class="${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-x-full opacity-0 pointer-events-auto">
                <i class="bi ${icon} text-xl"></i>
                <span class="font-medium">${message}</span>
            </div>
        `;
        toastContainer.insertAdjacentHTML('beforeend', html);
        
        const toastEl = document.getElementById(id);
        
        // Trigger enter animation
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                toastEl.classList.remove('translate-x-full', 'opacity-0');
            });
        });

        // Auto hide
        setTimeout(() => {
            toastEl.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => toastEl.remove(), 300);
        }, 3000);
    };

    // Listen for Store Events
    window.addEventListener('cartUpdated', () => {
        const count = window.store.getCart().reduce((acc, item) => acc + item.quantity, 0);
        document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
    });

    window.addEventListener('wishlistUpdated', () => {
        const count = window.store.getWishlist().length;
        document.querySelectorAll('.wishlist-count').forEach(el => el.textContent = count);
    });

    // Initial dispatch to set badges
    window.dispatchEvent(new Event('cartUpdated'));
    window.dispatchEvent(new Event('wishlistUpdated'));
});



