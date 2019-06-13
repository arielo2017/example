import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { browser } from "protractor";
import { JinetesPage } from "./pages/JinetesPage";
import { async } from "q";
import {EmailUtils } from "../utils/EmailUtils";
import { JsonUtil } from "../utils/JsonUtil";
import { Post } from "../DTO/Posts";



const fs = require('fs');

describe("first part login and finding", () => {

    //Globally 
    var homePage = new HomePage();
    var jinetePage = new JinetesPage();
    var coleccion;
   

   // var newsPage = new NewsPage();
    it("login succesfully", async () => {      
         
          //read json
          await homePage.ReadDataFromJson();
          //Open Browser
          await homePage.OpenBrowser();
          //login
          await homePage.Login();
         
      })

      it("return posts",async()=>{
         //search
         await homePage.OpenBrowser();
         //click posts
         coleccion= await jinetePage.getTodayPosts();
        
         expect(coleccion.length).toBeGreaterThan(0);
      });

      it("compare date posts ", async () => {
        
       // let postsold:Post[]= await JsonUtil.readJsonPosts();
       
        let rawdata =  await fs.readFileSync("./datapost.json");  
        let variable:Post[] = await JSON.parse(rawdata);  

        console.log("----------------------------Current Posts-------------------------------");
        console.log( variable);
        console.log("--------------------------Posts FB-----------------------------");
        console.log(await coleccion);
        var newposts= EmailUtils.getNewPosts(variable,coleccion);
       
      })

      it("send posts to json ", async () => {
        //
       await EmailUtils.sendEmails(null);
      })

      it("update posts to json ", async () => {
        
    });


});

