/* AUTUMN LEAVES CO. — shared interactions */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
      );
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Helpers ---------- */
  function setError(field, message) {
    field.classList.add("has-error");
    var input = field.querySelector(".input");
    if (input) input.setAttribute("aria-invalid", "true");
    var err = field.querySelector(".field-error");
    if (err) err.textContent = message;
  }

  function clearError(field) {
    field.classList.remove("has-error");
    var input = field.querySelector(".input");
    if (input) input.removeAttribute("aria-invalid");
    var err = field.querySelector(".field-error");
    if (err) err.textContent = "";
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }

  /* ---------- Contact form validation ---------- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var banner = document.getElementById("form-feedback");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var firstInvalid = null;

      var checks = [
        {
          id: "first-name",
          ok: function (v) { return v.trim().length >= 2; },
          msg: "Please tell us your first name (at least 2 letters).",
        },
        {
          id: "last-name",
          ok: function (v) { return v.trim().length >= 2; },
          msg: "Please tell us your last name (at least 2 letters).",
        },
        {
          id: "email-address",
          ok: validEmail,
          msg: "Please enter a valid email address, e.g. evelyn@correspondence.com.",
        },
        {
          id: "inquiry-type",
          ok: function (v) { return v !== ""; },
          msg: "Please choose the nature of your inquiry.",
        },
        {
          id: "message-content",
          ok: function (v) { return v.trim().length >= 10; },
          msg: "Please write a message of at least 10 characters.",
        },
      ];

      checks.forEach(function (check) {
        var input = document.getElementById(check.id);
        if (!input) return;
        var field = input.closest(".field");
        if (!field) return;
        if (!check.ok(input.value)) {
          setError(field, check.msg);
          valid = false;
          if (!firstInvalid) firstInvalid = input;
        } else {
          clearError(field);
        }
      });

      if (banner) banner.classList.remove("show", "is-error");

      if (!valid) {
        if (banner) {
          banner.classList.add("show", "is-error");
          banner.querySelector("p").textContent =
            "Your dispatch needs a little mending — please review the highlighted fields above.";
        }
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var firstName = document.getElementById("first-name").value.trim();

      /* Static preview only: no message is sent or stored by this form. */
      if (banner) {
        banner.classList.add("show");
        banner.classList.remove("is-error");
        banner.querySelector("p").textContent =
          "Thank you, " + firstName + " — your note is noted by hand. " +
          "This preview build does not send or store messages yet; " +
          "for a reply, please email care@autumnleavesco.com or connect a form service.";
      }
      contactForm.reset();
      contactForm.querySelectorAll(".field").forEach(clearError);
      if (banner) banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    /* Clear a field's error as soon as the visitor starts fixing it */
    contactForm.addEventListener("input", function (e) {
      var field = e.target.closest(".field");
      if (field && field.classList.contains("has-error")) clearError(field);
    });
    contactForm.addEventListener("change", function (e) {
      var field = e.target.closest(".field");
      if (field && field.classList.contains("has-error")) clearError(field);
    });
  }

  /* ---------- Newsletter forms (home callout + footer) ---------- */
  document.querySelectorAll("form[data-newsletter]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type='email']");
      var msg =
        document.getElementById(form.getAttribute("data-msg")) || null;
      if (!msg) return;
      if (!input || !validEmail(input.value)) {
        msg.textContent = "Please enter a valid email address.";
        msg.classList.add("show", "is-error");
        if (input) input.focus();
        return;
      }
      msg.textContent =
        "Lovely — you are on the list. (Preview build: no email is sent or stored yet.)";
      msg.classList.add("show");
      msg.classList.remove("is-error");
      form.reset();
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  /* ---------- Anatomy hotspots (about) ---------- */
  var hotspots = document.querySelectorAll(".hotspot");
  if (hotspots.length) {
    var specs = {
      collar: document.getElementById("spec-collar"),
      yarn: document.getElementById("spec-yarn"),
      shoulder: document.getElementById("spec-shoulder"),
      brass: document.getElementById("spec-brass"),
    };
    function activate(key) {
      hotspots.forEach(function (h) {
        h.classList.toggle("is-active", h.dataset.spec === key);
      });
      Object.keys(specs).forEach(function (k) {
        if (specs[k]) specs[k].classList.toggle("is-active", k === key);
      });
    }
    hotspots.forEach(function (h) {
      h.addEventListener("click", function () { activate(h.dataset.spec); });
    });
    document.querySelectorAll(".spec-card").forEach(function (card) {
      card.addEventListener("click", function () {
        activate(card.dataset.spec);
      });
      card.addEventListener("mouseenter", function () {
        activate(card.dataset.spec);
      });
    });
  }

  /* ---------- Studio clock (contact) ---------- */
  var clock = document.getElementById("studio-clock");
  if (clock) {
    function tick() {
      try {
        var now = new Date();
        var opts = {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        clock.textContent = now.toLocaleTimeString("en-US", opts) + " PT";
      } catch (err) {
        clock.textContent = "";
      }
    }
    tick();
    setInterval(tick, 60000);
  }

  /* ---------- Inquiry pre-fill links ---------- */
  document.querySelectorAll("[data-inquiry]").forEach(function (link) {
    link.addEventListener("click", function () {
      var select = document.getElementById("inquiry-type");
      if (select) select.value = link.getAttribute("data-inquiry");
    });
  });
})();
