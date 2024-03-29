import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";


/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
 async function refreshAccessToken(token: any) {
   try {
    const urlSearchParams = {
      client_id: process.env.SPOTIFY_CLIENT_ID?.toString,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      grant_type: "client_credentials",
      refresh_token: token.refreshToken,
    };

     const url =
       "https://accounts.spotify.com/api/token?" +
       new URLSearchParams(JSON.stringify(urlSearchParams))

       
 
     const response = await fetch(url, {
       headers: {
         "Content-Type": "application/x-www-form-urlencoded",
       },
       method: "POST",
     })
 
     const refreshedTokens = await response.json()
 
     if (!response.ok) {
       throw refreshedTokens
     }
 
     return {
       ...token,
       accessToken: refreshedTokens.access_token,
       accessTokenExpires: Date.now() + refreshedTokens.expires_at * 100000000000000,
       refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
       
     }
   } catch (error) {
     console.log(error)
 
     return {
       ...token,
       error: "RefreshAccessTokenError",
     }
   }
 }



export default NextAuth({

    providers: [
       
       SpotifyProvider({
          clientId: process.env.SPOTIFY_CLIENT_ID ?? '',
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET  ?? '',
          authorization: 
          "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-read-email,streaming,user-read-private,user-library-read,user-library-modify,user-read-playback-state,user-modify-playback-state,user-read-recently-played,user-follow-read",
       }),
    ],

    pages: { 
      signIn: '/auth/signin', 
    },
    callbacks : {
      async jwt({ token, user, account}){

       // Initial sign in
       if(account && user){
        const expiredAt = account.expires_at ?? 0;
         return {
            accessToken: account.access_token,
            accessTokenExpires: Date.now() + expiredAt * 1000,
            refreshToken: account.refresh_token,
            user,
         }
       }
       // Return previous token if the access token has not expired yet
       if(Date.now() <  token.expires_at * 1000 ) {
         return token;
       }
        //Access token has expired, try to update it
        return refreshAccessToken(token)
      },
      async session({ session, token }) {
         session.user = token
         session.accessToken = token.accessToken
         session.error = token.error
         return session
      },
    },
})
