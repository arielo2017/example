import { browser, element, by, protractor, $$,$ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";

const Locators={
   //input search
   inputsearch:
   {
       type:IdentificationType[IdentificationType.Css],
       value:"._1frb"
   },
   //link
   linksearched:
   {
       type:IdentificationType[IdentificationType.PartialLinkText],
       value:"Jinetes Colombianos'"
   }
}


export class NewsPage extends BasePage{

    inputsearch=this.ElementLocator(Locators.inputsearch);

    async search(text:string){
        this.inputsearch.sendKeys(text,protractor.Key.ENTER);   
    }
            
}