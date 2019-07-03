import { Post } from "../DTO/Posts";
import { JsonUtil } from "../utils/JsonUtil";
import { post } from "selenium-webdriver/http";
import { compose } from "nativescript-email";
import * as nodemailer from 'nodemailer'

export class EmailUtils
{       

    static async sendEmails(list:Post[])
    {
      let transporter: nodemailer.Transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'kuleherman81@gmail.com',
            pass: 'arielo1985'
        }
    });

    let message="";
    console.log("list"+list.length);
    for (let index = 0; index < list.length; index++) {
      message+="<b>"+list[index].datepost+"<br><b>"+list[index].post+"<b><br><br>";
    }



    // setup e-mail data with unicode symbols
    let mailOptions:  nodemailer.SendMailOptions = {
      from: 'kuleherman81@gmail.com', // sender address
      to: 'ariel1985@gmail.com,vivianpocando@gmail.com,mariacamilagomezp1@gmail.com', // list of receivers
      subject: 'Posts De FB jinetes en el exterior ✔', // Subject line
      text: 'Post FB Jinetes en el exterior', // plaintext body
      html: message // html body
    };
    
    
    // promise send mail without callback
   await transporter
    .sendMail(mailOptions)
    .then(info => info.messageId)
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