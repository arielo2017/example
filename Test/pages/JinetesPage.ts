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
   // colposts=element.all(by.css("._5pcr.userContentWrapper")).$$("[data-testid='post_message']");
    datestext=element.all(by.css("._5pcr.userContentWrapper"));

    colpostsArray:Post[];
   
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

    async  getTodayPosts()
    {
        var coldivs=element.all(by.css("._5pcr.userContentWrapper"));
        
        let postcreated:Post;
        
        let postarray;

        var tempObject=[];
        var posttemp;

        this.colpostsArray= await  this.datestext.map(async function(elm, index) {
            return{
                datepost:elm.$(".fsm.fwn.fcg").element(by.css(".timestampContent")).getText(),
                post:elm.all(by.css("[data-testid='post_message']")).all(by.tagName("p")).getText()
             };
            
        });
        
           
      /*  this.colpostsArray.forEach(element => {
            console.log("date:"+element.datepost);
            console.log("post:"+element.post);
        });*/


        
        
        return this.colpostsArray;
     }
      
    
}