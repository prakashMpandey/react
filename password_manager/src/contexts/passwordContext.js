import { createContext,useContext } from "react"

const passwordContext=createContext(
    {
        passwords:[

           { 
            id:"1",
            username:"mahesh",
            website:"www.google.com",
            password:"1234"
           }
        ],
        addPassword:()=>{},
        deletePassword:()=>{},
        editPassword:()=>{}
    }
)

export const usePassword=()=>useContext(passwordContext)

export const PasswordProvider=passwordContext.Provider;

