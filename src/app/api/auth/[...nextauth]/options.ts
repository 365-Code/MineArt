import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const options: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        Credentials({
            name: "Credentials",
            credentials: {},
            // credentials: {
            //     email: {
            //         label: 'email',
            //         type: 'email',
            //         placeholder: 'Your Email'
            //     },
            //     password: {
            //         label: 'Password',
            //         type: 'password',
            //         placeholder: 'Enter Password'
            //     }
            // },
            async authorize(credentials){
                const user = {email: 'sam@gmail.com', id: '123789',  password: "sam123sam"}
                // if(credentials?.email == user.email && credentials?.password === user.password){
                    return user
                // } else{
                //     return null
                // }
            }
        })
    ],
    pages: {
        signIn: '/auth/login'
    }
}