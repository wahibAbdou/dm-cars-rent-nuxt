import { useEnv } from '~/composables/useEnv'
import { useProductsResponseFormatter } from '~/composables/useProductsResponseFormatter'
import { Response } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const baseAPIUrl = useEnv('BASE_API_URL');
    const { page } = getQuery(event);

    if (!Number.isInteger(Number(page))) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid api call, page should be an integer.',
      })
    }


    const response: Response = await $fetch(`${baseAPIUrl}/cars?page=${page}`)
    const { data, meta } = response;
    return {
      data: useProductsResponseFormatter(data),
      meta: meta
    }
  } catch (err) {
    console.error(err);
  }


})
