//Base page
import { browser, element, by, protractor, $$, $ } from "protractor";

export enum IdentificationType {
    Id,
    className,
    Css,
    Xpath,
    LinkTextm,
    Js,
    PartialLinkText
}

export class BasePage {

    ElementLocator(obj) {//switch
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.className]:
                return element(by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return element(by.js(obj.value));
            default:
            break;

        }
    }

}