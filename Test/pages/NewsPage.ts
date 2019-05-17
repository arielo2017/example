import { browser, element, by, protractor, $$,$, WebElement } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";
const Locators={
    searchinput:
    {
        type:IdentificationType[IdentificationType.Css],
        value:"div.innerWrap"
    }
}

export class NewsPage extends BasePage{

    //search
    divsearchinput=this.ElementLocator(Locators.searchinput);
    
   async Search(search)
    {
        console.log("search this :"+search);
        this.divsearchinput.all(by.tagName("input")).then((elems)=>
        {
            console.log(elems.length);
        })
      
      //let listas: Array<WebElement>= this.searchinput.findElements(by.tagName("input"));

      /*  this.searchinput.findElements(by.tagName("input")).then(function(items)
        {
            console.log("collection");
        }asdasd
        /*await this.headings.getText().then((text)=>
        {
            console.log("The heading is :"+text);
        })*/
    
    }

    
}