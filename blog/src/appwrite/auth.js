import conf from "./conf/conf.js"
import {Client,Account,ID} from "appwrite"
 

class AuthService

{

client=new Client()
account;

constructor()
{
    this.client.setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

    this.account=new Account(this.client)
}

async createAccount(email,password,name)
{

    try {
        const user=await this.account.create(ID.unique,email,password,name)

        if(user)
        {
            return this.login({email,password})
        }
        else
        {
            return user;
        }
        
    } catch (error) {
        throw error
    }
}

async login({email,password})
{
    try {
      return  await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
       throw error 
    }

}

async getCurrentUser()
{
    try {
        
      return await  this.account.get();
    } catch (error) {
        throw error
    }

    return null;
}

async logout()
{
    return await this.account.deleteSessions()
}



}

export const authService=new AuthService