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
    let variable:Post[] ;
    var newposts:Post[];
   // var newsPage = new NewsPage();
    it("login succesfully", async () => {      
         
          //read json
          await homePage.ReadDataFromJson();
          variable=homePage.postsold;
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
       
       newposts= await EmailUtils.getNewPosts(variable,coleccion);
       
      })

      it("send posts to json ", async () => {
        //
       await EmailUtils.sendEmails(newposts);
      })

      it("update posts to json ", async () => {
        
    });


});

