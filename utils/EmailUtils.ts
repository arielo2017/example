import { Post } from "../DTO/Posts";
import { JsonUtil } from "../utils/JsonUtil";

const fs = require('fs');

export class EmailUtils
{

    static sendEmails(list:any[]): any
    {
        
        
    }
    

    static async  getNewPosts(listold:Post[],listnew:Post[])
    {
       

       console.log("----------------Comparison--------------");
        let finalarray=[];

       await listold.forEach(element => {
        console.log("old:"+ element);
        });
        console.log("old:"+await listold);
        console.log("new:"+listnew.length);
      /* for (let index = 0; index < listold.length; index++) {
           const element = listold[index];
           console.log(element);
           
       }
        console.log("new");
        for (let index = 0; index < listnew.length; index++) {
            const element = listnew[index];
            console.log(element);
            
        }*/

        /*listnew.forEach((e1)=>listold.forEach((e2)=>
        {
            console.log("old date:"+e1.date);
            console.log("new date:"+e2.date);    
        }*/
        

    //    let missing = listnew.filter(item => listold.indexOf(item) < 0);
        console.log("final array"); 
        console.log(finalarray); 
    }
}