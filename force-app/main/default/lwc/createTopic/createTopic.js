import { LightningElement } from 'lwc';
import SF_TRAINING_TOPIC_OBJECT from '@salesforce/schema/SF_Training_Topic__c';
import  INS_FIELD from '@salesforce/schema/SF_Training_Topic__c.Instructor__c';
import  AUIDENCE_FIELD from '@salesforce/schema/SF_Training_Topic__c.Audience__c';
// import ACCOUNT_OBJECT from '@salesforce/schema/Account';
// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class CreateTopic extends LightningElement {

    // fields = [INS_FIELD, AUIDENCE_FIELD];
    // objName = OBJECT_NAME
    accountObject = SF_TRAINING_TOPIC_OBJECT;
    myFields = [INS_FIELD, AUIDENCE_FIELD];
}