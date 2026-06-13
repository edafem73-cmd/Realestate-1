/* ============================================================
   VESTA PROPERTIES — main.js
   Handles: data rendering, icons, scroll animations,
            sticky nav, mobile nav, form submission
   ============================================================ */

'use strict';

/* ── DATA ────────────────────────────────────────────────── */

const listings = [
  {
    image:    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    badge:    'For Sale',
    badgeType: '',
    price:    '₦1,250,000',
    name:     'Whitmore Estate',
    location: 'Beverly Hills, CA',
    beds:     4,
    baths:    3,
    sqft:     '2,850'
  },
  {
    image:    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80',
    badge:    'New Listing',
    badgeType: 'new',
    price:    '₦875,000',
    name:     'Sycamore Heights',
    location: 'Santa Monica, CA',
    beds:     3,
    baths:    2,
    sqft:     '1,980'
  },
  {
    image:    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    badge:    'For Sale',
    badgeType: '',
    price:    '₦2,100,000',
    name:     'Oakridge Villa',
    location: 'Malibu, CA',
    beds:     5,
    baths:    4,
    sqft:     '4,200'
  },
  {
    image:    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
    badge:    'Price Reduced',
    badgeType: '',
    price:    '₦680,000',
    name:     'Hillcrest Cottage',
    location: 'Pasadena, CA',
    beds:     3,
    baths:    2,
    sqft:     '1,650'
  },
  {
    image:    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80',
    badge:    'For Sale',
    badgeType: '',
    price:    '₦1,490,000',
    name:     'Cedar Ridge Home',
    location: 'Brentwood, CA',
    beds:     4,
    baths:    3,
    sqft:     '3,100'
  },
  {
    image:    'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&q=80',
    badge:    'New Listing',
    badgeType: 'new',
    price:    '₦545,000',
    name:     'Larkspur Lane',
    location: 'Culver City, CA',
    beds:     2,
    baths:    2,
    sqft:     '1,320'
  }
];

const featured = [
  {
    image:    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',
    tag:      'Featured',
    name:     'The Meridian Penthouse',
    location: 'Manhattan, New York',
    beds:     3,
    baths:    3,
    sqft:     '3,400',
    garage:   2,
    price:    '₦4,750,000',
    type:     'Luxury Penthouse'
  },
  {
    image:    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80',
    tag:      'Exclusive',
    name:     'Sunstone Residence',
    location: 'Coral Gables, FL',
    beds:     5,
    baths:    4,
    sqft:     '5,100',
    garage:   3,
    price:    '₦3,200,000',
    type:     'Luxury Villa'
  },
  {
    image:    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
    tag:      'Featured',
    name:     'Elmwood Manor',
    location: 'Lake Shore, Chicago',
    beds:     4,
    baths:    3,
    sqft:     '4,600',
    garage:   2,
    price:    '₦2,850,000',
    type:     'Contemporary Home'
  }
];

const testimonials = [
  {
    quote:    'Working with Vesta was the smoothest property purchase I have ever experienced. Our agent was proactive, patient, and always reachable. We closed in under six weeks.',
    name:     'Jonathan Keno',
    location: 'Warri, Delta state',
    initials: 'JK'
  },
  {
    quote:    'I was skeptical at first — I had been burned by other agencies before. But Vesta delivered on every promise. The listing was exactly as described, and the pricing was completely transparent.',
    name:     'Ayinde Lakan',
    location: 'Banana island, Lagos',
    initials: 'AL'
  },
  {
    quote:    'From the first call to picking up our keys, the Vesta team treated us like we were their only client. The verified listings saved us so much time. Highly recommend without hesitation.',
    name:     'David & Priya Okonkwo',
    location: 'Uruan, Uyo',
    initials: 'DO'
  }
];

/* ── RENDERING ────────────────────────────────────────────── */

function renderListings() {
  const grid = document.getElementById('listingsGrid');
  if (!grid) return;

  grid.innerHTML = listings.map((p, i) => `
    <div class="listing-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="listing-card__image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="listing-card__badge ${p.badgeType === 'new' ? 'listing-card__badge--new' : ''}">${p.badge}</span>
      </div>
      <div class="listing-card__body">
        <p class="listing-card__price">${p.price}</p>
        <p class="listing-card__name">${p.name}</p>
        <p class="listing-card__location">
          <i data-lucide="map-pin"></i>
          ${p.location}
        </p>
        <div class="listing-card__divider"></div>
        <div class="listing-card__meta">
          <span class="listing-card__meta-item">
            <i data-lucide="bed-double"></i> ${p.beds} Beds
          </span>
          <span class="listing-card__meta-item">
            <i data-lucide="bath"></i> ${p.baths} Baths
          </span>
          <span class="listing-card__meta-item">
            <i data-lucide="maximize-2"></i> ${p.sqft} sq ft
          </span>
        </div>
        <button class="btn btn--card">
          View Details
          <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  grid.innerHTML = featured.map((p, i) => `
    <div class="featured-card reveal reveal-delay-${i + 1}">
      <div class="featured-card__image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="featured-card__tag">${p.tag}</span>
        <button class="featured-card__save" aria-label="Save property">
          <i data-lucide="heart"></i>
        </button>
      </div>
      <div class="featured-card__body">
        <p class="featured-card__name">${p.name}</p>
        <p class="featured-card__location">
          <i data-lucide="map-pin"></i>
          ${p.location}
        </p>
        <div class="featured-card__details">
          <span class="featured-card__detail">
            <i data-lucide="bed-double"></i> ${p.beds} Bedrooms
          </span>
          <span class="featured-card__detail">
            <i data-lucide="bath"></i> ${p.baths} Bathrooms
          </span>
          <span class="featured-card__detail">
            <i data-lucide="maximize-2"></i> ${p.sqft} sq ft
          </span>
          <span class="featured-card__detail">
            <i data-lucide="car"></i> ${p.garage} Garage
          </span>
        </div>
        <div class="featured-card__footer">
          <div>
            <p class="featured-card__price">${p.price}</p>
            <span class="featured-card__price-label">${p.type}</span>
          </div>
          <a href="#contact" class="featured-card__cta">
            Enquire
            <i data-lucide="arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  const stars = Array(5).fill('<i data-lucide="star"></i>').join('');

  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal reveal-delay-${i + 1}">
      <div class="testimonial-card__stars">${stars}</div>
      <p class="testimonial-card__quote">${t.quote}</p>
      <div class="testimonial-card__author">
        <div class="testimonial-card__avatar">${t.initials}</div>
        <div>
          <p class="testimonial-card__name">${t.name}</p>
          <p class="testimonial-card__location">${t.location}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── SCROLL REVEAL ────────────────────────────────────────── */

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ── STICKY NAV ───────────────────────────────────────────── */

function initStickyNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── MOBILE NAV ───────────────────────────────────────────── */

function initMobileNav() {
  const toggle  = document.getElementById('navToggle');
  const links   = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if (!toggle || !links || !overlay) return;

  let isOpen = false;

  const open = () => {
    isOpen = true;
    links.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.innerHTML = '<i data-lucide="x"></i>';
    lucide.createIcons();
  };

  const close = () => {
    isOpen = false;
    links.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggle.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  };

  toggle.addEventListener('click', () => (isOpen ? close() : open()));
  overlay.addEventListener('click', close);

  // Close on nav link click
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', close)
  );

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) close();
  });
}

/* ── SMOOTH ANCHOR SCROLL ─────────────────────────────────── */

function initSmoothScroll() {
  const NAV_H = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72'
  );

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - NAV_H - 16;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
}

/* ── FORM SUBMISSION ──────────────────────────────────────── */

function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name  = form.querySelector('#fname');
    const email = form.querySelector('#email');
    let   valid = true;

    [name, email].forEach((field) => {
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
        field.addEventListener('input', () => {
          field.style.borderColor = '';
        }, { once: true });
      }
    });

    if (!valid) return;

    // Simulate async submission
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="loader-circle"></i> Sending...';
    btn.disabled  = true;
    lucide.createIcons();

    setTimeout(() => {
      form.style.display    = 'none';
      success.style.display = 'flex';
      lucide.createIcons();
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1400);
  });
}

/* ── SAVE BUTTON TOGGLE ───────────────────────────────────── */

function initSaveButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.featured-card__save');
    if (!btn) return;

    const icon    = btn.querySelector('svg');
    const isSaved = btn.dataset.saved === 'true';

    btn.dataset.saved = String(!isSaved);
    btn.style.background  = !isSaved ? 'var(--dark)'  : 'rgba(50,50,50,0.6)';
    btn.style.color       = !isSaved ? 'var(--accent)' : 'rgba(255,255,255,0.85)';
    btn.setAttribute('aria-label', !isSaved ? 'Unsave property' : 'Save property');
  });
}

/* ── HERO PARALLAX (subtle) ───────────────────────────────── */

function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Skip on mobile / reduced motion
  if (window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      hero.style.backgroundPositionY = `calc(40% + ${scrolled * 0.2}px)`;
    }
  }, { passive: true });
}

/* ── INIT ─────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render dynamic content
  renderListings();
  renderFeatured();
  renderTestimonials();

  // 2. Initialise Lucide icons (must run after DOM mutations)
  lucide.createIcons();

  // 3. Behaviour
  initStickyNav();
  initMobileNav();
  initSmoothScroll();
  initContactForm();
  initSaveButtons();
  initHeroParallax();

  // 4. Scroll reveal — runs last so all elements are present
  initScrollReveal();
});