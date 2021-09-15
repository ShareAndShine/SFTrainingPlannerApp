import { LightningElement, wire, api } from 'lwc';
import getContractStatus from '@salesforce/apex/AccountLibController.getContractStatus'

export default class ZCAcc extends LightningElement {

    @api strRecordId;
    allContractStatus;

    connectedCallback()
    {
        console.log("RecordId:" + this.recordId);
    }

    @wire(getContractStatus, {strAccountId: '$strRecordId'})
    loadContractSattus({data, error})
    {
        
        console.log("data:" + JSON.stringify(data));
        console.log("error:" +error);
        this.allContractStatus = data;
    }
}