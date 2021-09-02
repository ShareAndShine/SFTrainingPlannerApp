import { LightningElement, wire } from 'lwc';
import getTopicByCat from '@salesforce/apex/SFTrainingAppController.getTopicByCat';


export default class SearchTrainingTopics extends LightningElement {

    topics;
    error;

    catInput;

    //wire method with parameter
    // @wire(getTopicByCat, { strCat : '$catInput'})
    // loadTopics({data, error})
    // {
    //     if(data)
    //     {
    //         this.topics = data;
    //         this.error = undefined;
    //     }
    //     else
    //     {
    //         this.topics = undefined;
    //         this.error = error;
    //     }
    // }



    handleShowTopicClick()
    {
        //Get inuput from user
        this.catInput = this.template.querySelector('lightning-input').value;

        console.log('callign APEX method imperatively instead of LWC wire service !!!')
        // Make a call to APEX using JS promise         
        getTopicByCat({ strCat : this.catInput })
        .then((result) => { this.topics = result; })
        .catch((error) => { this.error = error; });
        
        
    }


}