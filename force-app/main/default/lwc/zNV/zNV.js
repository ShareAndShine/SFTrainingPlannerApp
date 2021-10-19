import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class ZNV extends NavigationMixin(LightningElement) {


    //Open an external web page
    openWebPage()
    {
        this[NavigationMixin.Navigate]({
                type:'standard__webPage',
                attributes: {
                    url:'https://www.google.com'
                }


            }
        );
    }


    //Open Account Home

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    createNewContact(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    openOppListView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }

    openSFTrainingRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: "a015g00000W7QpoAAF",
                objectApiName: 'SF_Training_Topic__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

}