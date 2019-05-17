import { browser, element, by, protractor, $$,$ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";

const Locators={

    username:{
        type:IdentificationType[IdentificationType.Id],
        value:"email"

    },
    
    //password
    password:
    {
        type:IdentificationType[IdentificationType.Id],
        value:"pass"
    },

    loginbtn:
    {
        type:IdentificationType[IdentificationType.Id],
        value:"loginbutton"
    }
}

export class HomePage extends BasePage{

    // username
    //username=this.ElementLocator(Locators.username);
    username=this.ElementLocator(Locators.username)
    //password
    password=this.ElementLocator(Locators.password);
     //login btn
    loginbtn=this.ElementLocator(Locators.loginbtn).element(by.tagName("input"));


    //Open browser
    async OpenBrowser(url:string){
        browser.waitForAngularEnabled(false);
        await browser.get(url);
    }

    
   async Search(search:string)
    {
        console.log("search this :"+search);
        
    }

    async Login()
    {
        console.log("Login");
        this.username.sendKeys("kuleherman81@gmail.com");
        this.password.sendKeys("arielo1985");
        this.loginbtn.click();
    }
    
    
}