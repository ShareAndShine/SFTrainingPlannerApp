import { LightningElement } from 'lwc';
import { basedata } from 'c/data';

export default class PlanningAppContainner extends LightningElement {

    welcomeNote = "Hi Everyone !!! Thanks for joining LWC programming session!!! "
    TopicAndInstructor = basedata;

    isDataExists = basedata.length > 0 ? true: false;

    connectedCallback()
    {
        console.log("Topics data length:" + basedata.length);
   
        console.log("hi!!!")
        console.log("Topics data:" + JSON.stringify(basedata));
    } 

    callChildfunction()
    {
        this.template.querySelector('c-setup-topic').showSomething();
    }
    
}