import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice"; // We need to import this because we are dealing with async requests

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({ //this is a post request so mutation instead of query
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
            keepUnusedDataFor: 5
        }),
    }),
})

export const {useLoginMutation} = usersApiSlice