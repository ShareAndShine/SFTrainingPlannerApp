import { LightningElement, api} from 'lwc';
import AI_OBJECT from '@salesforce/schema/Account_Intelligence__c';
import AI_DM_FIELD from '@salesforce/schema/Account_Intelligence__c.Decision_Maker_Email__c';
import AI_CEOPHONE_FIELD from '@salesforce/schema/Account_Intelligence__c.CEO_Personal_Phone__c';

export default class ViewAI extends LightningElement {

    
    @api recordId;
    objectApiName = AI_OBJECT;

    fields = [AI_DM_FIELD, AI_CEOPHONE_FIELD];
}