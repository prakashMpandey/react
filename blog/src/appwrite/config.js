import { data } from "react-router";
import { conf } from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service
{
    client=new Client()
   databases;
   storage;

   constructor()
   {
     this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)


    
       
   }

   async createPost({title ,slug,content,image,status,userId})
   {
    try {

        return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
            title,
            content,
            status,
            image,
            userId
        })
        
    } catch (error) {
        console.log("appwrite error",error)
    }

  }

    async updatePost(slug,{title,content,image,status})
    {

        try {

        return this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            conf.slug,
            {
                title,
                content,
                image,
                status
            }
        )

        } catch (error) {
            console.log("appwrite error",error)
        }
    }

    async deletePost(slug)
    {
        try {
           
          await this.databases.deleteDocument(conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
           )

           return true
            
        } catch (error) {
            console.log("appwrite error",error)
        }
    }

    async getPost(slug)
    {
   try {
         const post=await this.databases.getDocument(conf.appwriteDatabaseId,
             conf.appwriteCollectionId,slug)
 
             return post
   } catch (error) {
    console.log("appwrite error",error)
    return false
   }
        
    }

    async getPosts(queries=[Query.equal('status','active')])
    {

        try {

            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )


            
        } catch (error) {
           console.log("appwrite error",error) 
           return false
        }
    }

    

    async uploadFile(file)
    {
        try {
return await this.storage.createFile(conf.appwriteBucketId,ID.unique(),
file
)     
} catch (error) {
            console.log("appwrite error",error)
        }
    }

    async deleteFile(fileId)
    {
        try {
            

             await this.storage.deleteFile(conf.appwriteBucketId,fileId)

            return true
        } catch (error) {
            
            console.log("appwrite rror",error)
            return false
        }

    }

     previewFile(fileId)
    {
        return this.storage.getFilePreview(conf.appwriteBucketId,fileId)
    }





   
    
}


const service=new Service()

export default service