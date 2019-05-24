//Base page
import { browser, element, by, protractor, $$, $ } from "protractor";

export enum IdentificationType {
    Id,
    className,
    Css,
    Xpath,
    LinkTextm,
    Js,
    PartialLinkText,
    tagName
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
                case IdentificationType[IdentificationType.tagName]:
                return element(by.js(obj.value));
            default:
            break;

        }
    }

    public ReturnColection(obj)
    {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return element.all(by.css(obj.value));
            case IdentificationType[IdentificationType.className]:
                return element.all(by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return element.all(by.id(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return element.all(by.xpath(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return element.all(by.js(obj.value));
                case IdentificationType[IdentificationType.tagName]:
                return element.all(by.js(obj.value));
            default:
            break;

    }

}