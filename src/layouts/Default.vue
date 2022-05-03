<template>
  <div :class="['layout--default', { 'unscrollable': burgerMenuActive === true }]">
    <div :class="['nav-wrapper', { 'nav-wrapper--active': burgerMenuActive === true }]">
      <nav :class="['nav', { ' nav--active': burgerMenuActive === true }]">
        <div
          :class="[
            'nav__links-wrapper',
            { 'nav__links-wrapper--active': burgerMenuActive === true },
            { 'nav__links-wrapper--inactive': burgerMenuActive === false },
          ]"
        >
          <g-link class="nav__link nav__home" to="/">HOME</g-link>
          <g-link class="nav__link nav__about" to="/about/">ABOUT</g-link>
          <a href="/#services" class="nav__link nav__services" to="/services/">SERVICES</a>
          <g-link class="nav__link nav__blogs" to="/blog/">BLOGS</g-link>
          <contact-button></contact-button>
        </div>
        <div
          :class="[
            'nav__burger-wrapper',
            { 'nav__burger-wrapper--active': burgerMenuActive === true },
            { 'nav__burger-wrapper--inactive': burgerMenuActive === false }
          ]"
          @click.stop="handleBurgerClick"
        >
          <div class="nav__burger-line line-one"></div>
          <div class="nav__burger-line line-two"></div>
          <div class="nav__burger-line line-three"></div>
        </div>
      </nav>
    </div>
    <div
      class="hero-wrapper"
      :style="{ 'background-image': 'url(' + require(`../assets/img/${bgName}`) + ')' }"
    >
      <div class="hero-wrapper__overlay"></div>
      <div class="hero">
        <div :class="['hero__info', { 'hero__info--home-page': isHomePage }]">
          <img
            :class="['hero__logo', { 'hero__logo--home-page': isHomePage }]"
            src="../assets/img/Logo.svg"
          />
          <div :class="['hero__text', { 'hero__text--home-page': isHomePage }]">{{ headingText }}</div>
          <contact-button :class="['hero__button', { 'hero__button--home-page': isHomePage }]"></contact-button>
        </div>
      </div>
    </div>
    <slot />
    <div class="footer-wrapper">
      <footer class="footer">
        <div class="logo-wrapper">
          <img src="../assets/img/Logo.svg" alt class="logo" />
        </div>
        <div class="links-wrapper">
          <div class="native-links">
            <g-link class="native-links__link native-links__home" to="/">Home</g-link>
            <g-link class="native-links__link native-links__about" to="/about/">About</g-link>
            <g-link class="native-links__link native-links__services" to="/services/">Services</g-link>
            <g-link class="native-links__link native-links__blogs" to="/blog/">Blogs</g-link>
            <contact-button></contact-button>
          </div>
          <div class="social-wrapper">
            <div class="social-links">
              <a href class="social-links__wrapper social-links__twitter-wrapper">
                <font-awesome
                  class="social-links__icon social-links__twitter-icon"
                  :icon="['fab', 'twitter']"
                ></font-awesome>
                <div class="social-links__name social-links__twitter-name">Twitter</div>
              </a>
              <a href class="social-links__wrapper social-links__instagram-wrapper">
                <font-awesome
                  class="social-links__icon social-links__instagram-icon"
                  :icon="['fab', 'instagram']"
                ></font-awesome>
                <div class="social-links__name social-links__instagram-name">Instagram</div>
              </a>
              <a href class="social-links__wrapper social-links__facebook-wrapper">
                <font-awesome
                  class="social-links__icon social-links__facebook-icon"
                  :icon="['fab', 'facebook-f']"
                ></font-awesome>
                <div class="social-links__name social-links__facebook-name">Facebook</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script >
import ContactButton from '@/components/ContactButton.vue'

export default {
  props: {
    isHomePage: Boolean,
    headingText: String,
    bgName: String
  },
  data() {
    return {
      burgerMenuActive: undefined,
    }
  },
  computed: {
  },
  components: {
    ContactButton
  },
  methods: {
    handleBurgerClick() {
      this.burgerMenuActive = !this.burgerMenuActive
    },
    calculateDistance() {
      const nav = document.querySelector('.nav-wrapper')
      window.addEventListener('scroll', () => {
        if (window.scrollY > 114) {
          if (nav.classList.contains('nav-wrapper--scrolled')) return
          return nav.classList.add('nav-wrapper--scrolled');
        }

        if (!nav.classList.contains('nav-wrapper--scrolled')) return
        nav.classList.remove('nav-wrapper--scrolled')
      })
    }
  },
  mounted() {
    this.calculateDistance()
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
