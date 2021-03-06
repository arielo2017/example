import { browser, element, by, protractor, $$,$ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";
import { JsonUtil } from "../../utils/JsonUtil";
import { post } from "selenium-webdriver/http";

import { JsonDecoder } from 'ts.data.json';
import { Post } from "../../DTO/Posts";

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


const json = require('load-json-file');


export class HomePage extends BasePage{
    
    // username
    username=this.ElementLocator(Locators.username);
    //password
    password=this.ElementLocator(Locators.password);
     //login btn
    loginbtn=this.ElementLocator(Locators.loginbtn).element(by.tagName("input"));
    //url
    url:string;
    //userstring
    usernamejson:string;
    //passstring
    passwordjson:string;
    //posts colection
    postsold:Post[];
    async ReadDataFromJson() {
        
        //read info fb
        console.log("----------------------------FB Configuration-----------------------------");
         let other=await json("./configfb.json").then(data => {
            return data;
         });
         this.url=other.urlpost;
         this.usernamejson=other.user.username;
         this.passwordjson=other.user.password;
         console.log("url:"+this.url);
        
    }

    //Open browser
    async OpenBrowser(){
        await browser.waitForAngularEnabled(false);
        await browser.driver.manage().window().setSize(1600, 1000); 
        await browser.get(this.url);

    }
    

    async Login()
    {
        console.log("Login");
        await this.username.sendKeys(this.usernamejson);
        await this.password.sendKeys(this.passwordjson);
        await this.loginbtn.click();
    }    
}

