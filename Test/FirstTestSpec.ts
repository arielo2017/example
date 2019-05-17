import { browser, element, by, protractor, $$, $ } from "protractor";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";

describe("first part login and finding", () => {

    //Globally 
    var homePage = new HomePage();
    var newsPage = new NewsPage();
    it("login succesfully", async () => {
          //Open Browser
          await homePage.OpenBrowser("http://www.facebook.com");
          //login
          await homePage.Login();
          //news page
          await newsPage.Search("jinetes Colombianos");
         
    });




});