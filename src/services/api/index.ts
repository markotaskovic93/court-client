import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiHeaders } from './utils/prepare-headers';

export const api = createApi({
  baseQuery: fetchBaseQuery(apiHeaders),
  tagTypes: [''],
  endpoints: () => ({})
});
