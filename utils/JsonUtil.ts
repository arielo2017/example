import { Post } from "../DTO/Posts";

const json = require('load-json-file');

const fs = require('fs');

export class JsonUtil
{
    
    static async readJsonPosts()
    {
  
      
      
      //read current posts

        //read current posts
        /*let variable=await json("./datapost.json").then(async x => {
          console.log(x);
    
      });*/

     /* (async () => {
        console.log("lo que sea");
        console.log(await json('./datapost.json'));
          //=> {foo: true}
          
      })();*/
   
      let rawdata =  await fs.readFileSync("./datapost.json");  
      let variable:Post[] = await JSON.parse(rawdata);  

      return variable;
      
    }
   
}



