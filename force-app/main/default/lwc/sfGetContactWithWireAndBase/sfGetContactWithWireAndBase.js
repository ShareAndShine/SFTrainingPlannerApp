import { LightningElement, wire } from 'lwc';
import {  getRecord, getFieldValue } from 'lightning/uiRecordApi';
import SF_ACCOUNT_OBJECT from '@salesforce/schema/Account';
import SF_ACC_NAME from '@salesforce/schema/Account.Name';
import SF_ACC_OWNER from '@salesforce/schema/Account.Owner.Name';
import SF_PHONE from '@salesforce/schema/Account.Phone';

export default class SfGetContactWithWireAndBase extends LightningElement {

    mandatory_fields = [SF_ACC_NAME, SF_ACC_OWNER];
    optional_fields  = [SF_PHONE];

    @wire(getRecord, {recordId: '0015g00000BmtLnAAJ', fields: [SF_ACC_NAME, SF_ACC_OWNER], optionalFields: [SF_PHONE]})
    account;

    get name()
    {
        console.log("this.account.data::", JSON.stringify(this.account.data));
        return getFieldValue(this.account.data,SF_ACC_NAME);
    }

    get owner()
    {
        return getFieldValue(this.account.data,SF_ACC_OWNER);
    }


    get phone()
    {
        console.log("SF_PHONE::" + JSON.stringify(SF_PHONE));
        return getFieldValue(this.account.data,SF_PHONE);
    }
}