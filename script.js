// ============================================================
// AgroLens AI Portfolio — script.js
// ============================================================

// ── NAVBAR SCROLL EFFECT ──────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar')
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(13,27,42,0.97)'
  } else {
    nav.style.background = 'rgba(13,27,42,0.85)'
  }
})

// ── MOBILE MENU ───────────────────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu')
  menu.classList.toggle('open')
}

// ── SCROLL ANIMATIONS (Intersection Observer) ─────────────
const animatedEls = document.querySelectorAll('[data-aos]')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible')
      }, i * 80)
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
})

animatedEls.forEach(el => observer.observe(el))

// ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-links a')

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = ''
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = '#1D9E75'
        }
      })
    }
  })
}, { threshold: 0.5 })

sections.forEach(s => sectionObserver.observe(s))

// ── SMOOTH SCROLL FOR ALL ANCHOR LINKS ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// ── SPONSOR IMAGE FALLBACK ────────────────────────────────
document.querySelectorAll('.sponsor-card img').forEach(img => {
  img.addEventListener('error', function () {
    this.style.display = 'none'
    const fallback = this.nextElementSibling
    if (fallback) fallback.style.display = 'flex'
  })
})

// ── TEAM IMAGE FALLBACK ───────────────────────────────────
document.querySelectorAll('.team-photo-wrap img').forEach(img => {
  img.addEventListener('error', function () {
    this.style.display = 'none'
    const fallback = this.nextElementSibling
    if (fallback) fallback.style.display = 'flex'
  })
})

// ── TYPING EFFECT HERO TITLE ──────────────────────────────
const line2 = document.querySelector('.hero-title .line2')
if (line2) {
  const text = line2.textContent
  line2.textContent = ''
  line2.style.opacity = '1'
  let i = 0
  const type = () => {
    if (i < text.length) {
      line2.textContent += text[i]
      i++
      setTimeout(type, 80)
    }
  }
  setTimeout(type, 600)
}

// ── COUNTER ANIMATION ─────────────────────────────────────
function animateCounter(el, target, suffix, duration = 1500) {
  let start = 0
  const step = (timestamp) => {
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(eased * target)
    el.textContent = current.toLocaleString('id-ID') + suffix
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const statVals = document.querySelectorAll('.stat-val')
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target
      const text = el.textContent
      const match = text.match(/[\d.]+/)
      if (match) {
        const num = parseFloat(match[0])
        const suffix = text.replace(match[0], '')
        animateCounter(el, num, suffix)
      }
      counterObserver.unobserve(el)
    }
  })
}, { threshold: 0.5 })

statVals.forEach(el => counterObserver.observe(el))

console.log('%c🌾 AgroLens AI — Tim Sonic', 'color:#1D9E75;font-weight:bold;font-size:14px')
console.log('%cPIDI DIGDAYA X HACKATHON 2026 | Universitas Dipa Makassar', 'color:#378ADD;font-size:11px')