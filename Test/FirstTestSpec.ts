import { browser, element, by, protractor, $$, $ } from "protractor";

describe("first part login and finding", () => {

    //Globally 
   
    it("login succesfully", async () => {
        browser.get("http://www.facebook.com");
        
        let a =12;
        expect(a).toBe(12);
    });

    it("without any expectation", () => {

    });

});