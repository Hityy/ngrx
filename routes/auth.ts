import { Request, Response, Router } from "express";
import { errCatcher, GET } from './config'; 
// async post_$id()
function HIT(ctor) {}


@HIT
export class Auth {

    @GET('/signin')
    async signIn() {
        return {
            zalogujsie: true
        };
    }
    @GET('/signup')
    async signUp() {
        return {
            Rejestracja: true
        };
    }
}




