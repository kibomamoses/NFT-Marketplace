import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'qbbzkftz',
  dataset: 'production',
  apiVersion: '2022-08-24',
  token:
    'skIaoZDF4sdKnFvwfRKd2jJ0kkOCAJW7NV0r9odBUcg1K6WlFCJEXtbkVYEgXxDBIIJov0HjjE1vPeaJYwm2EE05xd6vZOiSg4Etr6RHvERIzxDvOpL9WDji8UUFzbcNeJsDFlckaWKfG6jMThYJoicOmsCNNA3lJo5v8BHAE6OOJveqYxP5',
  useCdn: false,
})
