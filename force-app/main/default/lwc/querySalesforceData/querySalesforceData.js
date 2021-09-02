import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactLib.getContacts';
import getContactEmail from '@salesforce/apex/ContactLib.getContactEmail'


export default class QuerySalesforceData extends LightningElement {

    contactsEmail;
    error;

    // wire to APEX Method and store o/p in a property
    @wire(getContact) contacts;

     // wire to APEX Method and store o/p in a function
    @wire(getContactEmail) 
    wiredContactEmail({data, error})
    {
        console.log("data::" + data);
        console.log("error:" + error);

        if(data)
        {
            this.contactsEmail = data;            
        }
        else if(error)
        {
            this.error = error;
        }
    }


}


// 1. Pass parameters to wire function
// 2. setup SF training topics object in Saleforce org
// 3. Access salesforce data imperatively