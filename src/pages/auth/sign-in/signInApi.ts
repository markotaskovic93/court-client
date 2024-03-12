import { UserType } from '../../../providers/auth-provider';
import { api } from '../../../services/api';
import { Credentials } from './constants';


const signInApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserType, Credentials>({
      query: (credentials) => ({
        url: 'sign-in',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.query({
      query: (id) => ({ url: `sign-out/${id}` }),
    })
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useLogoutQuery } = signInApi;
