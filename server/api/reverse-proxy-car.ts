import { useEnv } from '~/composables/useEnv'
import { Car } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const baseAPIUrl = useEnv('BASE_API_URL');
    const { slug } = getQuery(event);

    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid api call, slug is undefined.',
      })
    }

    const data: Car = await $fetch(`${baseAPIUrl}/cars/${slug}`)

    const { pricePerDay, people, gasolineLiter } = data;
    return {
      ...data,
      pricePerDay: `$${pricePerDay.toFixed(2)}`,
      people: `${people} People`,
      gasolineLiter: `${gasolineLiter}L`,
    };

  } catch (err) {
    console.error(err);
  }


})
