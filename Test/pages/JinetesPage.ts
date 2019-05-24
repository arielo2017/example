import { browser, element, by, protractor, $$,$ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";


const Locators={
   //link posts
   dates:
   {
       type:IdentificationType[IdentificationType.Css],
       value:".timestampContent"
   }
}


export class JinetesPage extends BasePage{
  
    dates=this.ElementLocator(Locators.dates);  
    

    async getPosts()
    {
        //get all the dates and return the last one
        var dates=browser.$$(".timestampContent");  
        var splitted;
        var datesplit;
        
        dates.getText().then(text=>
        {
                 console.log("The input is:"+text);
                 var datesplit=text.toString();
                 var splitted=datesplit.split(",");
                 console.log(splitted);   
                 if (splitted[1]==text) {
                    console.log("equals:"+text);   
                }     
        });

       
    /*    let items = dates.map(function(elm, index) {
            return {
              index: index,
              text: elm.getText(),
              class: elm.getAttribute('class')
            };
          });*/

          
          
          dates.count().then(count=>
            {
                console.log("count:"+count);  
            });
            
            
        
    }
}