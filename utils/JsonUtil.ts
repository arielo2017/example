import { Post } from "../DTO/Posts";

const json = require('load-json-file');


const data = JSON.parse("./datapost.json");

export class JsonUtil
{
    //let variable:Post[];
    
    static async readJsonPosts()
    {
      
       console.log("----------------------------Current Posts-------------------------------");
      //  variable = JSON.parse("./datapost.json");
       //read current posts
     /*   let variable= await  json("./datapost.json").then( x=> {
            console.log(x);
            return x;
     });
     console.log("lenght:"+variable.length);
     for(let post of variable){
         console.log(post);
     }*/

     let variable = JSON.stringify("./datapost.json");
     console.log(variable);

     return variable;
    }
   
}

interface MyObj {
    date: any
    post: any
  }
  
  interface MyRootObj {
    string: MyObj[];
  }
  

