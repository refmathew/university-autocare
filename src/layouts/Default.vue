<template>
  <div :class="['layout--default', { 'unscrollable': isMenuActive === true }]">
    <div
      :class="['nav-wrapper', { 'nav-wrapper--active': isMenuActive === true }, { 'nav-wrapper--blog-template': !bgName }]"
    >
      <nav
        :class="['nav', { ' nav--active': isMenuActive === true }, { 'nav--blog-template': !bgName }]"
      >
        <div
          :class="[
            'nav__links-wrapper',
            { 'nav__links-wrapper--active': isMenuActive === true },
            { 'nav__links-wrapper--inactive': isMenuActive === false },
          ]"
          @click="closeMenu"
        >
          <g-link
            v-for="sitePage in sitePages"
            :class="['nav__link', { 'nav__link--blog-template': !bgName }]"
            :to="sitePage.link"
          >{{ sitePage.name.toUpperCase() }}</g-link>
          <contact-button :class="[{ 'nav__link--blog-template': !bgName }]"></contact-button>
        </div>
        <div
          :class="['nav__home-buttons', { 'nav__home-buttons--logo-shown': heroLogoInView === false }]"
        >
          <g-link to="/">
            <!-- bgName? checks whether the page is a normal page or a blog-post page-->
            <g-image
              :src="bgName ? require('../assets/img/Logo.svg') : require('../assets/img/Logo-alt.svg')"
              :class="['nav__logo', { 'nav__logo--logo-shown': heroLogoInView === false }, { 'nav__logo-blog': !isHomePage }]"
              alt="Business logo"
            />
          </g-link>
          <div
            :class="[
              'nav__burger-wrapper',
              { 'nav__burger-wrapper--active': isMenuActive === true },
              { 'nav__burger-wrapper--inactive': isMenuActive === false }
            ]"
            @click.stop="handleBurgerClick"
          >
            <div
              :class="['nav__burger-line', 'line-one', { 'nav__burger-line--blog-template': !bgName }]"
            ></div>
            <div
              :class="['nav__burger-line', 'line-two', { 'nav__burger-line--blog-template': !bgName }]"
            ></div>
            <div
              :class="['nav__burger-line', 'line-three', { 'nav__burger-line--blog-template': !bgName }]"
            ></div>
          </div>
        </div>
      </nav>
    </div>
    <div
      class="hero-wrapper"
      v-if="bgName"
      :style="{ 'background-image': 'url(' + require(`../assets/img/${bgName}`) + ')' }"
    >
      <div class="hero-wrapper__overlay"></div>
      <div class="hero">
        <div :class="['hero__info', { 'hero__info--home-page': isHomePage }]">
          <img
            :class="['hero__logo', { 'hero__logo--home-page': isHomePage }]"
            src="../assets/img/Logo.svg"
            alt="Business logo"
          />
          <div
            v-if="headingText"
            :class="['hero__text', { 'hero__text--home-page': isHomePage }]"
          >{{ headingText }}</div>
          <contact-button :class="['hero__button', { 'hero__button--home-page': isHomePage }]"></contact-button>
        </div>
      </div>
    </div>

    <slot />

    <div class="footer-wrapper">
      <footer class="footer">
        <div class="logo-wrapper">
          <img @click="scrollToTop" src="../assets/img/Logo.svg" alt="Business Logo" class="logo" />
        </div>
        <div class="links-wrapper">
          <div class="native-links">
            <g-link
              v-for="sitePage in sitePages"
              :key="sitePage.name"
              :to="sitePage.link"
              class="native-links__link"
            >{{ sitePage.name }}</g-link>
            <contact-button></contact-button>
          </div>
          <div class="social-wrapper">
            <div class="social-links">
              <a
                v-for="social in $page.socials.edges"
                :key="social.node.faIcon"
                :href="`https://${social.node.link}`"
                target="_blank"
                class="social-links__wrapper"
              >
                <font-awesome :icon="['fab', social.node.faIcon]" class="social-links__icon"></font-awesome>
                <div class="social-links__name">{{ social.node.name }}</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>


<page-query>
  query Post {
    socials: allSocial {
      edges{
        node{
          name
          faIcon
          link
        }
      }
    }
  }
</page-query>


<script >
import ContactButton from '@/components/ContactButton.vue'

export default {
  components: {
    ContactButton
  },
  props: {
    isHomePage: {
      type: Boolean,
      default: false
    },
    headingText: String,
    bgName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isMenuActive: undefined,
      heroLogoInView: undefined,
      sitePages: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Services",
          link: "/#services"
        },
        {
          name: "Blog",
          link: "/blog"
        },
      ]
    }
  },
  methods: {
    handleBurgerClick() {
      this.isMenuActive = !this.isMenuActive
    },
    closeMenu() {
      this.isMenuActive = false
    },
    checkHeroLogoVisibility(hero) {
      window.addEventListener('scroll', () => {
        const rect = hero.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return this.heroLogoInView = vertInView && horInView
      })
    },
    calculateDistance() {
      const nav = document.querySelector('.nav-wrapper')
      window.addEventListener('scroll', (e) => {
        if (window.scrollY > 114) {
          if (nav.classList.contains('nav-wrapper--scrolled')) return
          return nav.classList.add('nav-wrapper--scrolled');
        }

        if (!nav.classList.contains('nav-wrapper--scrolled')) return
        nav.classList.remove('nav-wrapper--scrolled')
      })
    },
    scrollToTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  watch: {
    heroLogoInView: function (newVal) {
      const nav = document.querySelector('.nav-wrapper')
      if (newVal === false) {
        if (nav.classList.contains('nav-wrapper--scrolled')) return
        return nav.classList.add('nav-wrapper--scrolled');
      }
      if (!nav.classList.contains('nav-wrapper--scrolled')) return
      nav.classList.remove('nav-wrapper--scrolled')
    }
  },
  mounted() {
    const heroSection = document.querySelector('.hero')
    if (!heroSection) {
      return this.heroLogoInView = false
    } else {
      this.checkHeroLogoVisibility(heroSection)
    }
  }
}
</script>
