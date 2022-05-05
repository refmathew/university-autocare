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
          <div v-for="serviceCard in serviceCardValues" class="service-card__wrapper">
            <service-card
              :key="serviceCard.title"
              :icon-name="serviceCard.iconName"
              :title="serviceCard.title"
              :body="serviceCard.body"
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
              v-for="testimonialCard in testimonialCardValues"
              :key="testimonialCard.name"
              :img-src="testimonialCard.imgSrc"
              :name="testimonialCard.name"
              :testimony="testimonialCard.testimony"
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
                v-for="contactDetail in contactDetails"
                :key="contactDetail.iconName"
                :icon-name="contactDetail.iconName"
                :details="contactDetail.details"
              ></contact-detail>
            </div>
            <div class="contact__hr"></div>
            <div class="contact__socials">
              <a
                v-for="socialLink of socialLinks"
                :href="`https://${socialLink.link}`"
                target="_blank"
                class="contact__social-icon"
              >
                <font-awesome :key="socialLink" :icon="['fab', socialLink.icon]"></font-awesome>
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
query Post {
  allPost {
    edges{
      node{
        path
        title
        date
        content
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

const serviceCardValues = [
  {
    iconName: 'cog',
    title: 'Tempus pellentesque volutpat',
    body: 'Suspendisse eget pretium lectus proin id interdum. Nibh cursus metus sit quam nisi, tortor augue malesuada vitae.'

  },
  {
    iconName: 'cog',
    title: 'Tempus pellentesque volutpat',
    body: 'Suspendisse eget pretium lectus proin id interdum. Nibh cursus metus sit quam nisi, tortor augue malesuada vitae.'
  },
  {
    iconName: 'cog',
    title: 'Tempus pellentesque volutpat',
    body: 'Suspendisse eget pretium lectus proin id interdum. Nibh cursus metus sit quam nisi, tortor augue malesuada vitae.'
  },
  {
    iconName: 'cog',
    title: 'Tempus pellentesque volutpat',
    body: 'Suspendisse lslseget pretium lectus proin id interdum. Nibh cursus metus sit quam nisi, tortor augue malesuada vitae.'
  },
  {
    iconName: 'cog',
    title: 'Tempus pellentesque volutpat',
    body: 'dlkfSuspendisse eget pretium lectus proin id interdum. Nibh cursus metus sit quam nisi, tortor augue malesuada vitae.'
  },
]
const testimonialCardValues = [
  {
    imgSrc: "person-1.jpg",
    name: "John Doe",
    testimony: "Ut enim fermentum egestas adipiscing volutpat. Volutpat faucibus id vel cursus habitant magna turpis placerat orci. Posuere massa facilisi consequat, eget ornare tempor congue faucibus gravida. Id eu, faucibus ullamcorpe eu, pulvinar."
  },
  {
    imgSrc: "person-2.jpg",
    name: "John Tho",
    testimony: "Ut enim fermentum egestas adipiscing volutpat. Volutpat faucibus id vel cursus habitant magna turpis placerat orci. Posuere massa facilisi consequat, eget ornare tempor congue faucibus gravida. Id eu, faucibus ullamcorpe eu, pulvinar."
  },
  {
    imgSrc: "person-3.jpg",
    name: "John Dough",
    testimony: "Ut enim fermentum egestas adipiscing volutpat. Volutpat faucibus id vel cursus habitant magna turpis placerat orci. Posuere massa facilisi consequat, eget ornare tempor congue faucibus gravida. Id eu, faucibus ullamcorpe eu, pulvinar."
  },
]
const socialLinks = [{ icon: "twitter", link: "twitter.com/" }, { icon: "instagram", link: "instagram.com/" }, { icon: "facebook-f", link: "facebook.com/" }]
const contactDetails = [
  {
    iconName: 'compass',
    details: '4517 Washington Ave. Manchester, Kentucky 39495'
  },
  {
    iconName: 'clock-four',
    details: 'Mon - Fri: 8am - 7pm<br/>Saturday: Closed<br/>Sunday: 8am - 7pm'
  },
  {
    iconName: 'phone',
    details: '(480) 555-0103'
  },
]

export default {
  data() {
    return {
      serviceCardValues,
      testimonialCardValues,
      socialLinks,
      contactDetails,
    }
  },
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

