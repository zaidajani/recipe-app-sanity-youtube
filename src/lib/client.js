import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'z1epgbac',
  dataset: 'production',
  apiVersion: '2022-04-25',
  useCdn: true,
  token: process.env.TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
}