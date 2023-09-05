import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQueryWithHeader = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json')

    return headers
  },
})

export const baseApi = createApi({
  baseQuery: baseQueryWithHeader,
  endpoints: () => ({}),
})
