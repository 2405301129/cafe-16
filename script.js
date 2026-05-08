/* ========================================
   CAFE 16 — JavaScript
   ======================================== */

// ─── Menu Data ───
const menuItems = [
  {
    name: "Classic Cappuccino",
    desc: "Rich espresso layered with silky steamed milk and a cloud of foam.",
    price: "₹89",
    category: "coffee",
    img: "images/coffee.png",
    badge: "Bestseller"
  },
  {
    name: "Hazelnut Latte",
    desc: "Smooth latte infused with toasted hazelnut syrup and latte art.",
    price: "₹129",
    category: "coffee",
    img: "images/coffee.png",
    badge: ""
  },
  {
    name: "Cold Brew",
    desc: "Slow-steeped for 18 hours — smooth, bold, and refreshing on ice.",
    price: "₹109",
    category: "coffee",
    img: "images/coffee.png",
    badge: "Popular"
  },
  {
    name: "Campus Burger",
    desc: "Juicy chicken patty, cheese, lettuce, and our signature sauce.",
    price: "₹159",
    category: "food",
    img: "images/burger.png",
    badge: "Popular"
  },
  {
    name: "Creamy Alfredo Pasta",
    desc: "Penne tossed in a rich white sauce with herbs and parmesan.",
    price: "₹179",
    category: "food",
    img: "images/pasta.png",
    badge: ""
  },
  {
    name: "Club Sandwich",
    desc: "Triple-decker loaded with chicken, veggies, cheese, and mayo.",
    price: "₹139",
    category: "food",
    img: "images/sandwich.png",
    badge: "Chef's Pick"
  },
  {
    name: "Loaded Fries",
    desc: "Crispy golden fries topped with cheese sauce, jalapeños, and herbs.",
    price: "₹99",
    category: "snacks",
    img: "images/burger.png",
    badge: ""
  },
  {
    name: "Paneer Tikka Wrap",
    desc: "Spiced paneer tikka in a warm tortilla with mint chutney.",
    price: "₹129",
    category: "snacks",
    img: "images/sandwich.png",
    badge: "Veg Fav"
  },
  {
    name: "Fresh Fruit Smoothie",
    desc: "A thick blend of seasonal fruits, yogurt, and a drizzle of honey.",
    price: "₹119",
    category: "drinks",
    img: "images/food-spread.png",
    badge: ""
  },
  {
    name: "Mango Shake",
    desc: "Thick and creamy mango milkshake made with real Alphonso pulp.",
    price: "₹109",
    category: "drinks",
    img: "images/food-spread.png",
    badge: "Seasonal"
  },
  {
    name: "Iced Matcha Latte",
    desc: "Ceremonial-grade matcha whisked with cold milk over ice.",
    price: "₹139",
    category: "drinks",
    img: "images/coffee.png",
    badge: "New"
  },
  {
    name: "Veg Cheese Burger",
    desc: "Crispy veg patty with melted cheese, pickles, and tangy sauce.",
    price: "₹139",
    category: "food",
    img: "images/burger.png",
    badge: "Veg"
  }
];

// ─── Testimonials Data ───
const testimonials = [
  {
    name: "Priya Sharma",
    role: "3rd Year, Computer Science",
    initials: "PS",
    stars: 5,
    text: "Cafe 16 is literally my second home on campus. The cappuccino gets me through every deadline, and the vibes are unmatched. 10/10 always!"
  },
  {
    name: "Arjun Mehta",
    role: "2nd Year, Mechanical Eng.",
    initials: "AM",
    stars: 5,
    text: "Best burgers on campus, hands down. And the student combo deal? Absolute steal. My friends and I are here almost every day."
  },
  {
    name: "Sneha Reddy",
    role: "4th Year, Design",
    initials: "SR",
    stars: 4,
    text: "I love how aesthetic this place is — perfect for studying with free Wi-Fi, great playlists, and the pasta is incredible. Can't recommend enough."
  },
  {
    name: "Kabir Patel",
    role: "1st Year, Business",
    initials: "KP",
    stars: 5,
    text: "Just started uni and Cafe 16 already feels like the place to be. The cold brew is amazing and the staff is super friendly. Already a regular!"
  },
  {
    name: "Ananya Verma",
    role: "3rd Year, Psychology",
    initials: "AV",
    stars: 5,
    text: "The matcha latte and paneer wrap combo has become my study ritual. This place has the warmest atmosphere on the entire campus."
  },
  {
    name: "Rohit Gupta",
    role: "2nd Year, Electronics",
    initials: "RG",
    stars: 4,
    text: "Affordable prices for students, great food quality, and they're open late! Perfect spot for group projects and late-night study sessions."
  }
];


// ───────────────────────────────────────
//  DOM Ready
// ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // ─── Preloader ───
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("hidden"), 800);
  });
  // safety fallback
  setTimeout(() => preloader.classList.add("hidden"), 3000);

  // ─── Navbar Scroll ───
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle("scrolled", scrollY > 60);
    backToTop.classList.toggle("show", scrollY > 500);
  });

  // ─── Mobile Nav ───
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // ─── Active Nav Link on Scroll ───
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.querySelectorAll("a:not(.nav-cta)").forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  });

  // ─── Render Menu ───
  const menuGrid = document.getElementById("menuGrid");
  const menuTabs = document.getElementById("menuTabs");

  function renderMenu(category = "all") {
    const filtered = category === "all"
      ? menuItems
      : menuItems.filter(item => item.category === category);

    menuGrid.innerHTML = filtered.map((item, i) => `
      <div class="menu-card reveal reveal-delay-${(i % 4) + 1}" style="animation-delay:${i * .08}s">
        <div class="card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ""}
        </div>
        <div class="card-body">
          <h3>${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <span class="card-price">${item.price}</span>
            <button class="card-add" aria-label="Add ${item.name} to order" onclick="addToOrder('${item.name}')">+</button>
          </div>
        </div>
      </div>
    `).join("");

    // Re-trigger reveal for newly added cards
    observeRevealElements();
  }

  renderMenu();

  menuTabs.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-tab")) return;
    menuTabs.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
    e.target.classList.add("active");
    renderMenu(e.target.dataset.category);
  });

  // ─── Render Testimonials ───
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  testimonialsGrid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="quote-icon">"</div>
      <div class="stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</div>
      <p class="review-text">"${t.text}"</p>
      <div class="reviewer">
        <div class="reviewer-avatar">${t.initials}</div>
        <div class="reviewer-info">
          <div class="name">${t.name}</div>
          <div class="role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join("");

  // ─── Scroll Reveal ───
  function observeRevealElements() {
    const reveals = document.querySelectorAll(".reveal:not(.visible)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  }
  observeRevealElements();

  // ─── Count-Up Animation ───
  const statNums = document.querySelectorAll(".stat-num[data-count]");
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        animateCount(el, target);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => countObserver.observe(el));

  function animateCount(el, target) {
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target).toLocaleString() + (target >= 1000 ? "+" : "+");
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ─── Contact Form ───
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    const originalText = btn.innerHTML;
    btn.innerHTML = "Message Sent! ✅";
    btn.style.pointerEvents = "none";
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.pointerEvents = "auto";
      contactForm.reset();
    }, 2500);
  });

  // ─── Smooth parallax on hero ───
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero-bg img");
    if (hero) {
      const scroll = window.scrollY;
      hero.style.transform = `translateY(${scroll * 0.3}px) scale(1.05)`;
    }
  });

  // ─── Chatbot Widget Toggle ───
  const chatbotToggle = document.getElementById("chatbotToggle");
  const chatbotContainer = document.getElementById("chatbotContainer");
  const chatbotClose = document.getElementById("chatbotClose");

  if (chatbotToggle && chatbotContainer && chatbotClose) {
    chatbotToggle.addEventListener("click", () => {
      const isOpen = chatbotContainer.classList.toggle("open");
      chatbotToggle.classList.toggle("active", isOpen);
      // Switch icon between chat and close
      const icon = document.getElementById("chatbotToggleIcon");
      icon.textContent = isOpen ? "✕" : "💬";
    });

    chatbotClose.addEventListener("click", () => {
      chatbotContainer.classList.remove("open");
      chatbotToggle.classList.remove("active");
      document.getElementById("chatbotToggleIcon").textContent = "💬";
    });
  }

});


// ─── Global: Add to Order Toast ───
function addToOrder(name) {
  // Create toast notification
  const toast = document.createElement("div");
  toast.textContent = `${name} added! 🎉`;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%) translateY(20px)",
    background: "linear-gradient(135deg, #d4a24e, #e8b85e)",
    color: "#0f0d0b",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: ".92rem",
    boxShadow: "0 4px 30px rgba(212,162,78,.35)",
    zIndex: "9999",
    opacity: "0",
    transition: "all .35s cubic-bezier(.16,1,.3,1)",
    fontFamily: "'Inter', sans-serif"
  });
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 2000);
}
