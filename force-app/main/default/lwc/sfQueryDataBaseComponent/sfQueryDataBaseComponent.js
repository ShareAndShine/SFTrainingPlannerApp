import { LightningElement, api } from 'lwc';
// Commetting the code to check Dynamic form
import OBJECT_NAME from '@salesforce/schema/SF_Training_Topic__c';
import  INST_FIELD from '@salesforce/schema/SF_Training_Topic__c.Instructor__c';
import  AUIDENCE_FIELD from '@salesforce/schema/SF_Training_Topic__c.Audience__c';
import  CAT_FIELD from '@salesforce/schema/SF_Training_Topic__c.Category__c';
import  TOPIC_FIELD from '@salesforce/schema/SF_Training_Topic__c.Topic_Name__c';





export default class SfQueryDataBaseComponent extends LightningElement {

        
    @api recordId;
    @api objectApiName;

    //objectName = OBJECT_NAME;

    // Commetting the code to check Dynamic form
    fieldstoDisplay = [INST_FIELD, AUIDENCE_FIELD,CAT_FIELD,TOPIC_FIELD];
}