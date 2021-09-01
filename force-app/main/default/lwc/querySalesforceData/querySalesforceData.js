import { LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/ContactLib.getContacts';
import getContactEmail from '@salesforce/apex/ContactLib.getContactEmail'

export default class QuerySalesforceData extends LightningElement {

    contactsEmail;
    error;
    @wire(getContact) contacts;

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