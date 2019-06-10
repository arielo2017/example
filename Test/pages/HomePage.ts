import { browser, element, by, protractor, $$,$ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";
import { JsonUtil } from "../../utils/JsonUtil";
import { post } from "selenium-webdriver/http";

import { JsonDecoder } from 'ts.data.json';

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

    async ReadDataFromJson() {
        //read current posts
        let variable=await json("./datapost.json").then(x => {
           return x;
        });
        console.log("----------------------------Current Posts-----------------------------");
        for(let post of variable.posts){
            console.log(post);
        }
        //read info fb
        console.log("----------------------------FB Configuration-----------------------------");
         let other=await json("./configfb.json").then(data => {
            return data;
         });
         console.log("user"+other.urlpost);
         this.url=other.urlpost;

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
        await this.username.sendKeys("kuleherman81@gmail.com");
        await this.password.sendKeys("arielo1985");
        await this.loginbtn.click();
    }    
}

