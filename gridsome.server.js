// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = (api) => {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const dataSources = {
      Services: require('./data/services.json'),
      Testimonials: require('./data/testimonials.json'),
      ContactDetails: require('./data/contactDetails.json'),
      Socials: require('./data/socials.json')
    }

    const servicesCollection = actions.addCollection('Service')
    const testimonialsCollection = actions.addCollection('Testimonial')
    const contactDetailsCollection = actions.addCollection('ContactDetail')
    const socialsCollection = actions.addCollection('Social')

    for (const service of dataSources.Services) {
      servicesCollection.addNode(service);
    }
    for (const testimonial of dataSources.Testimonials) {
      testimonialsCollection.addNode(testimonial);
    }
    for (const contactDetail of dataSources.ContactDetails) {
      contactDetailsCollection.addNode(contactDetail);
    }
    for (const social of dataSources.Socials) {
      socialsCollection.addNode(social);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
