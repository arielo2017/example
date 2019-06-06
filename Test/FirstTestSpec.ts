import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { browser } from "protractor";
import { JinetesPage } from "./pages/JinetesPage";
import { async } from "q";

describe("first part login and finding", () => {

    //Globally 
    var homePage = new HomePage();
    var jinetePage = new JinetesPage();
   // var newsPage = new NewsPage();
    it("login succesfully", async () => {
          //Open Browser
          await homePage.OpenBrowser("http://www.facebook.com");
          //login
          await homePage.Login();
         
      })

      it("return posts",async()=>{
         //search
         await homePage.OpenBrowser("https://www.facebook.com/jinetescolombianos/posts/");
         //click posts
         var coleccion= await jinetePage.getTodayPosts();

      });

      


});

