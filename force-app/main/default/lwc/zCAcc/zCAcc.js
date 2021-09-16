import { LightningElement, wire, api } from 'lwc';
import getContractStatus from '@salesforce/apex/AccountLibController.getContractStatus'

export default class ZCAcc extends LightningElement {

    @api strRecordId;
    allContractStatus;

    @api recordId;

    connectedCallback()
    {
        console.log("RecordId:" + this.strRecordId);
    }

    //@wire(getContractStatus, {strAccountId: '$strRecordId'})
    
    @wire(getContractStatus, {strAccountId: '$recordId'})
    loadContractSattus({data, error})
    {
        
        console.log("data:" + JSON.stringify(data));
        console.log("error:" +error);
        this.allContractStatus = data;
    }
}