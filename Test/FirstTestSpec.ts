import { browser, element, by, protractor, $$, $ } from "protractor";
import { HomePage } from "./pages/HomePage";

describe("first part login and finding", () => {

    //Globally 
    var homePage = new HomePage();
    it("login succesfully", async () => {
          //Open Browser
          await homePage.OpenBrowser("http://www.facebook.com");
          //login
          await homePage.Login();
    });

    it("without any expectation", () => {
        let a =12;
        expect(a).toBe(12);
    });

});