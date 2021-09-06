import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import  SF_OBJECT_NAME from '@salesforce/schema/SF_Training_Topic__c';
import  INST_FIELD from '@salesforce/schema/SF_Training_Topic__c.Instructor__c';
import  AUIDENCE_FIELD from '@salesforce/schema/SF_Training_Topic__c.Audience__c';
import  CAT_FIELD from '@salesforce/schema/SF_Training_Topic__c.Category__c';
import  TOPIC_FIELD from '@salesforce/schema/SF_Training_Topic__c.Topic_Name__c';


export default class SfDevTrainingAddTopic extends LightningElement {

    // We have object name and Fields
    sfTopicObject = SF_OBJECT_NAME;
    fields = [TOPIC_FIELD, CAT_FIELD,INST_FIELD, AUIDENCE_FIELD];



    //Step 2: Use record form base component and pass on object name and fields
    Category__c = CAT_FIELD;
    Topic_Name__c = TOPIC_FIELD;
    Instructor__c = INST_FIELD;
    Audience__c = AUIDENCE_FIELD;

    handleSuccess()
    {
        this.showMessage('Success','Topic has been added successfully', 'success');
        this.handleReset();
    }

    handleError(event)
    {
        this.showMessage('Error creating record',event.detail.message, 'error')
    }

    handleReset(event)
    {

        //Loop thru all elements and set value as empty
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        console.log("inputFields:" + JSON.stringify(inputFields));
        let loop = 0;
        if(inputFields)
        {        
            inputFields.foreach(field => 
                {
                    field.reset();
                    console.log("loop:" + loop + 1);
                });
            
        }
    }

    showMessage(title, message, variant)
    {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant,
            }),
        );
    }
}