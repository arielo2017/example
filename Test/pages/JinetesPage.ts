import { browser, element, by, protractor, $$,$ } from "protractor";
import { IdentificationType, BasePage } from "./BasePage";
import {Post} from "../../DTO/Posts";


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

    colpostsArray: Post[] = [];
    newpost:Post;
   
    async getPosts()
    {
        //get all the dates and return the last one
        var dates=browser.$$(".timestampContent");  
        var colposts=browser.$$("._5pcr.userContentWrapper"); 

        var splitted;
        var datesplit;
        
        colposts.then(function (elements) {
          
           colposts.get(0).$$(".fsm.fwn.fcg").get(0).element(by.tagName("a")).getWebElement().then(ela=>
            {
                console.log("tag:"+ela.getText());
                ela.click();
            });
           
          });        
        
    }

    async getTodayPosts()
    {
        var colposts=browser.$$("._5pcr.userContentWrapper");
        var datetext:any;
        var newpost:any;
        colposts.then(elements=> {
         
            this.newpost=new Post("","");
            elements.forEach(ele => {
                
                ele.$(".fsm.fwn.fcg").$(".timestampContent").getText().then((text)=>{
                    
                    datetext=text;
                 
                    
                });
                //console.log(text)
                    /*function(text){
                        console.log("this:"+this);
                        console.log("time:"+text);
                        let post:Post=new Post(text,"");
                        colpostsArray.push(post);
                    });
                    */

              ele.$("[data-testid='post_message']").element(by.tagName("p")).getText().then(text=>
                {
                    newpost=text;
                     
                });
              
                console.log("******",this.colpostsArray);
            });
            
           });    
    }

    scrollTo(scrollToElement) {
        var wd = browser.driver;
        return browser.scrollToElement.getLocation().then(function (loc) {
            return wd.executeScript('window.scrollTo(0,arguments[0]);', loc.y);
        });
    };

    
}