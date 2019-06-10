import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { browser } from "protractor";
import { JinetesPage } from "./pages/JinetesPage";
import { async } from "q";
import {EmailUtils } from "../utils/EmailUtils";


describe("first part login and finding", () => {

    //Globally 
    var homePage = new HomePage();
    var jinetePage = new JinetesPage();

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
         var coleccion= await jinetePage.getTodayPosts();
         expect(coleccion.length).toBeGreaterThan(0);
      });


      it("send posts to json ", async () => {
        //
       await EmailUtils.sendEmails(null);
      })

      it("update posts to json ", async () => {
        
    });


});

