import { useEnv } from '~/composables/useEnv'
import { useProductsResponseFormatter } from '~/composables/useProductsResponseFormatter'
import { Response } from '~/types'

export default defineEventHandler(async (event) => {
  try {
    const baseAPIUrl = useEnv('BASE_API_URL');

    const data: Response = await $fetch(`${baseAPIUrl}/cars/popular`)

    return useProductsResponseFormatter(data);

  } catch (err) {
    console.error(err);
  }
})