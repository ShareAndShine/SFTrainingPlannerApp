import { LightningElement, } from 'lwc';

export default class AddGrocery extends LightningElement {

    itemInput;
    catInput;

    handleAdditemClick()
    {
        //Read user inuput
        this.itemInput = this.template.querySelector('lightning-input[data-name="Grocery-Item"]').value;
        this.catInput = this.template.querySelector('lightning-input[data-name="Grocery-Category"]').value;

        console.log("this.itemInput::" + this.itemInput);
        console.log("this.catInput::" + this.catInput);        
        
        //Object to hold grocery item and category
        const grocery = { item: this.itemInput, category: this.catInput};

        console.log("this.grocery::" + JSON.stringify(this.grocery));        
        
        //initalize event msg to parent 
        const addgroceryevent = new CustomEvent("addgrocerytrigger", {detail:
            {
               groceryitem : this.itemInput,
               grocerycategory : this.catInput 
            } 
            
            } );

        //Dispatch to Parent
        this.dispatchEvent(addgroceryevent);
    }

}