// Main JavaScript for Tammy's Shades of Curls - Static Cart (localStorage)
// Works with buttons: <button class="add-to-cart-btn">Add to Cart</button>
// Cart count badge element: <span id="cart-count">0</span>
// Requires window.products to be populated from assets/products.json

(function () {
  const CART_KEY = 'tsc_cart_v1';
  let currentProducts = []; // Will store products loaded from JSON

  // ----- Storage helpers -----
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    updateCartSummary();
  }
  function cartTotal() {
    return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  window.updateCartCount = function() { // Expose globally for index.html script
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    const qty = getCart().reduce((sum, i) => sum + i.quantity, 0);
    badge.textContent = String(qty);
  }

  // ----- Cart Summary -----
  window.updateCartSummary = function() {
    const summaryEl = document.getElementById('cart-summary');
    const totalEl = document.getElementById('cart-total-display');
    const cart = getCart();
    
    if (!summaryEl || !totalEl) return;
    
    if (cart.length === 0) {
      summaryEl.innerHTML = '<p>Your cart is empty</p>';
      totalEl.textContent = '0.00';
      return;
    }
    
    const summaryHTML = cart.map(item => `
      <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
        <span>${item.name} x${item.quantity}</span>
        <span>R${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
    
    summaryEl.innerHTML = summaryHTML;
    totalEl.textContent = cartTotal().toFixed(2);
  }

  // ----- Add to cart -----
  window.addToCart = function(productId) { // Expose globally for onclick
    const product = currentProducts.find(p => p.id === productId);
    if (!product) {
      console.error('Product not found:', productId);
      toast('Product not found!', 'error');
      return;
    }

    const cart = getCart();
    const idx = cart.findIndex(i => i.id === productId);
    if (idx > -1) {
      cart[idx].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
    toast(`${product.name} added to cart`);
  }

  // ----- UI: attach to buttons -----
  window.wireAddToCartButtons = function() { // Expose globally for index.html script
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      // Remove existing listener to prevent duplicates
      btn.removeEventListener('click', handleAddToCartClick);
      btn.addEventListener('click', handleAddToCartClick);
    });
  }

  function handleAddToCartClick(event) {
    const btn = event.currentTarget;
    const card = btn.closest('.product-card');
    if (!card) return;

    const productId = parseInt(card.getAttribute('data-id'), 10);
    if (isNaN(productId)) {
      console.error('Product card missing valid data-id:', card);
      toast('Error: Product ID missing!', 'error');
      return;
    }
    addToCart(productId);
  }

  // ----- Simple toast (exposed globally for index.html script) -----
  window.toast = function(msg, tone = 'info') {
    const n = document.createElement('div');
    n.textContent = msg;
    n.className = 'toast';
    n.style.position = 'fixed';
    n.style.right = '16px';
    n.style.bottom = '16px';
    n.style.background = tone === 'error' ? '#f44336' : 'var(--gradient-primary)';
    n.style.color = '#fff';
    n.style.padding = '12px 18px';
    n.style.borderRadius = '12px';
    n.style.boxShadow = '0 8px 25px rgba(255, 140, 0, 0.3)';
    n.style.zIndex = '9999';
    n.style.transform = 'translateX(100%)';
    n.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    document.body.appendChild(n);
    
    // Animate in
    setTimeout(() => {
      n.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
      n.style.transform = 'translateX(100%)';
      n.style.opacity = '0';
      setTimeout(() => n.remove(), 300);
    }, 3000);
  }

  // ----- Optional: pre-fill PayFast amount with cart total -----
  window.syncPayFastAmount = function() { // Expose globally for index.html script
    const amountInput = document.getElementById('PayFastAmount');
    const qtyInput = document.getElementById('custom_quantity');
    if (!amountInput) return;
    const total = cartTotal();
    if (total > 0) {
      amountInput.value = total.toFixed(2);
      if (qtyInput) qtyInput.value = 1; // total already includes quantities
    }
  }

  // ----- Product filter/sort -----
  window.applyFilterSort = function() { // Expose globally for index.html script
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const grid = document.getElementById('products-grid');

    if (!grid || !currentProducts.length) return;

    let filtered = [...currentProducts];

    // Category filter
    const selectedCategory = categoryFilter ? categoryFilter.value : '';
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort
    const sortBy = sortFilter ? sortFilter.value : 'name';
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

    // Re-render products with animation
    grid.innerHTML = ''; // Clear existing
    filtered.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card fade-in-up';
      productCard.style.animationDelay = `${index * 0.1}s`;
      productCard.setAttribute('data-id', product.id);
      productCard.innerHTML = `
          <div class="product-image">
              <i class="${product.image}"></i>
          </div>
          <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="product-price">R${product.price.toFixed(2)}</div>
              <button class="add-to-cart-btn">Add to Cart</button>
          </div>
      `;
      grid.appendChild(productCard);
    });
    wireAddToCartButtons(); // Re-wire buttons after re-rendering
  }

  // ----- Mobile Navigation -----
  function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
      
      // Close mobile menu when clicking on a link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }
  }

  // ----- Smooth Scrolling -----
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const y = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }

  // ----- Contact Form -----
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        toast('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
      });
    }
  }

  // ----- Newsletter Form -----
  function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Simple email validation
        if (email && email.includes('@')) {
          toast('Thank you for subscribing!', 'success');
          this.reset();
        } else {
          toast('Please enter a valid email address.', 'error');
        }
      });
    }
  }

  // ----- Category Cards Animation -----
  function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    categoryCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });
  }

  // ----- Init -----
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initMobileNav();
    initSmoothScrolling();
    initContactForm();
    initNewsletterForm();
    initCategoryCards();
    
    // Populate currentProducts from window.products once it's loaded by index.html
    const checkProducts = setInterval(() => {
      if (window.products && window.products.length > 0) {
        currentProducts = window.products;
        clearInterval(checkProducts);
        updateCartCount();
        updateCartSummary();
        wireAddToCartButtons();
        applyFilterSort(); // Initial render with filters/sort
        syncPayFastAmount();

        // Update PayFast amount whenever navigating back to the form
        const checkoutSection = document.querySelector('.checkout');
        if (checkoutSection) {
          const observer = new MutationObserver(syncPayFastAmount);
          observer.observe(checkoutSection, { childList: true, subtree: true });
          document.getElementById('PayFastAmount')?.addEventListener('focus', syncPayFastAmount);
        }

        // Wire filter/sort change events
        document.getElementById('category-filter')?.addEventListener('change', applyFilterSort);
        document.getElementById('sort-filter')?.addEventListener('change', applyFilterSort);
      }
    }, 50); // Check every 50ms until products are loaded
  });
})();


















