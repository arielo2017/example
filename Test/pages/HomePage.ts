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
    username=this.ElementLocator(Locators.username);
    //password
    password=this.ElementLocator(Locators.password);
     //login btn
    loginbtn=this.ElementLocator(Locators.loginbtn).element(by.tagName("input"));



    //Open browser
    async OpenBrowser(url:string){
        await browser.waitForAngularEnabled(false);
        await browser.driver.manage().window().setSize(1600, 1000); 
        await browser.get(url);

    }

    async Login()
    {
        console.log("Login");
        await this.username.sendKeys("kuleherman81@gmail.com");
        await this.password.sendKeys("arielo1985");
        await this.loginbtn.click();
    }

   
    
    
}