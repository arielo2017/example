import { Post } from "../DTO/Posts";
import { JsonUtil } from "../utils/JsonUtil";
import { post } from "selenium-webdriver/http";
import { compose } from "nativescript-email";

const sendmail = require('sendmail')();

export class EmailUtils
{       

    static sendEmails(list:any[]): any
    {
        sendmail({
            from: 'ariel1985@gmail.com',
            to: 'ariel1985@gmail.com,vivianpocado@gmail.com',
          //  replyTo: 'vivianpocado@gmail.com',
            subject: 'Mail Composer sendmail',
            html: 'Mail of test sendmail'
          }, function (err, reply) {
            console.log(err && err.stack)
            console.dir(reply)
          })        
        
    }
    

    static async  getNewPosts(listold:Post[],listnew:Post[])
    {
       

       console.log("----------------Comparison--------------");
       let finalarray=[];
       
       for (let index = 0; index < listold.length; index++) {
           const element = listold[index];
           console.log(element);
           
       }
        console.log("new");
        for (let index = 0; index < listnew.length; index++) {
            const element:Post = listnew[index];
            var postconcat="";
            for (let indexpost = 0; indexpost < element.post.length; indexpost++) {
                const elementemp = element.post[indexpost];
                postconcat+=elementemp;
            }
           
            element.post=postconcat.toString();
            listnew[index]=element;
            console.log("new element:"+listnew[index].post);
        }

    //in the meantime send the new posts by day    
    return listnew;
    }
}