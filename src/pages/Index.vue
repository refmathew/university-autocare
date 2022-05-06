<template>
  <Layout
    bg-name="hero-1.jpg"
    :is-home-page="true"
    heading-text="Dui sed amet augue sed ada nisl, donec.Tellus quis ac, vitae eget quisque ultrices leo odio lobortis."
  >
    <div id="services" class="services-wrapper">
      <div class="services page-section">
        <div class="services__heading">What we offer</div>
        <div class="services__main">
          <div v-for="service in $page.services.edges" class="service-card__wrapper">
            <service-card
              :key="service.node.title"
              :name="service.node.name"
              :fa-icon="service.node.faIcon"
              :def="service.node.def"
            ></service-card>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonials-wrapper">
      <div class="testimonials page-section">
        <div class="testimonials__banner">
          <div class="testimonials__heading">What our clients say</div>
          <div
            class="testimonials__subheading"
          >Turpis malesuada scelerisque nam quis adipiscing vitae.Venenatis vitae id amet vel dictum. Aenean ullamcorper urna mi neque semper. Donec pulvinar consequat faucibus sed orci.</div>
          <div class="testimonials__main">
            <testimonial-card
              v-for="testimonial in $page.testimonials.edges"
              :key="testimonial.node.name"
              :name="testimonial.node.name"
              :img-src="testimonial.node.imgSrc"
              :testimony="testimonial.node.testimony"
            ></testimonial-card>
          </div>
        </div>
      </div>
    </div>
    <div id="contact" class="contact-wrapper">
      <div class="contact page-section">
        <div class="contact__heading">Contact Us!</div>
        <div class="contact__main">
          <div class="contact__left">
            <div class="contact__details">
              <contact-detail
                v-for="contactDetail of $page.contactDetails.edges"
                :key="contactDetail.node.iconName"
                :fa-icon="contactDetail.node.faIcon"
                :details="contactDetail.node.details"
              ></contact-detail>
            </div>
            <div class="contact__hr"></div>
            <div class="contact__socials">
              <a
                v-for="social of $page.socials.edges"
                :href="`https://${social.node.link}`"
                target="_blank"
                class="contact__social-icon"
              >
                <font-awesome :key="social.node.link" :icon="['fab', social.node.faIcon]"></font-awesome>
              </a>
            </div>
          </div>
          <div class="contact__right">
            <contact-form></contact-form>
            <div class="contact__hr"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query {
  services: allService {
    edges{
      node{
        name
        faIcon
        def
      }
    }
  }
  testimonials: allTestimonial{
    edges{
      node{
        name
        imgSrc
        testimony
      }
    }
  }
  socials: allSocial{
    edges{
      node{
        name
        link
        faIcon
      }
    }
  }
  contactDetails: allContactDetail{
    edges{
      node{
        details
        faIcon
      }
    }
  }
}
</page-query>


<script>
import ServiceCard from '../components/ServiceCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import ContactDetail from '../components/ContactDetail.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {
    ServiceCard,
    TestimonialCard,
    ContactDetail,
    ContactForm
  },
  metaInfo: {
    title: "Your Friendly Neighborhood Car Center",
  }
}
</script>

