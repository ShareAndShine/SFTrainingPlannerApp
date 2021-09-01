import { LightningElement, api } from 'lwc';

export default class SetupTopic extends LightningElement {

    @api title;
    functionoutput;

    @api showSomething()
    {
        this.functionoutput = "Function called from parent !!!";
    }

}