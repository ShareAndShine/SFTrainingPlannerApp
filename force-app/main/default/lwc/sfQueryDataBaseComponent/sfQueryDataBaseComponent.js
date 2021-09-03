import { LightningElement, api } from 'lwc';
// Commetting the code to check Dynamic form
import OBJECT_NAME from '@salesforce/schema/SF_Training_Topic__c';
import  INST_FIELD from '@salesforce/schema/SF_Training_Topic__c.Instructor__c'
import  AUIDENCE_FIELD from '@salesforce/schema/SF_Training_Topic__c.Audience__c'



export default class SfQueryDataBaseComponent extends LightningElement {

        
    @api recordId;
    @api objectApiName;

    //objectName = OBJECT_NAME;

    // Commetting the code to check Dynamic form
    fieldstoDisplay = [AUIDENCE_FIELD, INST_FIELD];
}