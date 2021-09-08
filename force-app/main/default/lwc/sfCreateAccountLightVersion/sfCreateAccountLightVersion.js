import { LightningElement } from 'lwc';
import {  createRecord } from 'lightning/uiRecordApi';
import SF_ACCOUNT_OBJECT from '@salesforce/schema/Account';
import SF_ACC_NAME from '@salesforce/schema/Account.Name';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SfCreateAccountLightVersion extends LightningElement {

    accountname = '';
    accountId;

    handleAccNameChange(event)
    {
        this.accountname = event.detail.value;
        
    }

    handleCreateAccount()
    {

       const fields = {};

       //Form an array and add user inputted value and pass it on to create record
       fields[SF_ACC_NAME.fieldApiName] = this.accountname;
    
       //Form record input
       const recordInput = {apiName: SF_ACCOUNT_OBJECT.objectApiName, fields };

       console.log("record input::" + JSON.stringify(recordInput));
       console.log("this.accountname::" + this.accountname);
       

       createRecord(recordInput)
            .then(account => {

                this.accountId = account.id;
                console.log("account.ID::" + account.id);

                // Make a call or dispatch an event to ShowToast Event
                const successevent = new ShowToastEvent(
                    {
                        title : 'Success',
                        message: 'Account has been successfully created',
                        variant: 'success'
                    }
                ) 
                this.dispatchEvent(successevent);
                
             })
            .catch(error =>
                 {
                console.log("erorr::" + error.body.message);
                // Make a call or dispatch an event to ShowToast Event
                const errorevent = new ShowToastEvent(
                    {
                        title : 'Error',
                        message:`Something is wrong !!! {error.body.message}`,
                        variant: 'Error'
                    }
                ) 
                this.dispatchEvent(errorevent);
            })


    }

}