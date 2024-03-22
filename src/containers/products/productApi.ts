// import { UserType } from '../../../providers/auth-provider';
import { api } from '../../services/api';

interface Product {
  id: number;
  name: string;
  // other fields
}

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: (queryParams) => `/products${queryParams}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
