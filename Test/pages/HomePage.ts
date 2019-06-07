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

const postoread = JsonDecoder.object<DataPost>(
    {
        LastUpdate: JsonDecoder.string,
        Post: JsonDecoder.string
    },
    'User'
  );

  const json = JSON.parse("./data.json") ;


export class HomePage extends BasePage{
    
    // username
    username=this.ElementLocator(Locators.username);
    //password
    password=this.ElementLocator(Locators.password);
     //login btn
    loginbtn=this.ElementLocator(Locators.loginbtn).element(by.tagName("input"));

    async ReadDataFromJson() {
       
        postoread.decodePromise(json)
        .then(value => {
            console.log(value);
        })
        .catch(error => {
            console.log(error);
        });
    }
    


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

interface DataPost
{
    
    LastUpdate:any, 
    Post:string;

}

export interface PostsObjects {
    posts: DataPost[];
}

