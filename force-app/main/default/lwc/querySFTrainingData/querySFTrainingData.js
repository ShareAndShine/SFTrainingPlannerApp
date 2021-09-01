import { LightningElement, wire } from 'lwc';
import getTrainingTopics from '@salesforce/apex/TrainingPlanner.getTrainingTopics';
import getTopicsByCat from '@salesforce/apex/TrainingPlanner.getTopicsByCat';

export default class QuerySFTrainingData extends LightningElement {

    alltopic;
    categoryInput;
    alltopicByCat = '';

    //wire with property
    //@wire(getTrainingTopics) alltopics;

    //wire with function
    // @wire(getTrainingTopics)
    // loadTopic({data, error})
    //     {
    //         console.log("data:" + JSON.stringify(data));
    //         console.log("error:" +error);
    //         this.alltopic = data;
    //     }

    
    // Wire with function paramter
    @wire(getTopicsByCat, {strCatName: '$categoryInput'})
    loadTopicByCategory({data, error})
    {
        console.log("data:" + JSON.stringify(data));
        console.log("error:" +error);
        this.alltopicByCat = data;
    }

    handleCategoryinput(event)
    {
        //this.categoryInput = event.target.value;
    }


    showtopic()
    {
        
        this.categoryInput = this.template.querySelector('lightning-input').value;
        
    }
}