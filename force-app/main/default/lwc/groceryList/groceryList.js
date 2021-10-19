import { LightningElement } from 'lwc';


export default class GroceryList extends LightningElement {

    groceries;
    grocerieslist = [];
    groceriesCategory = [];
    groceryitem;
    groceryitemMessage;

    // get groceryitem()
    // {
    //     console.log("this.grocerieslist.get(Fruits)::" + this.grocerieslist.get("Fruits"));
    //     //return this.grocerieslist.get("Fruits");
    //     return "abc";
        
    // }

    
    
    
    connectedCallback()
    {
        //this.grocerieslist = new Map();
        this.groceriesCategory = new Set();
        // console.log("groceryitem::" + this.groceryitem);
        // instructor.set("APEX", "Vamsi");
        // instructor.set("LWC", "Rajesh");
        // instructor.set("Admin", "Gopi");
    }
    
    renderedCallback()
    {
        // console.log("Rendered call back");
        // console.log("groceryitem - renderedcallback::" + this.groceryitem);
    }

    handleGroceryList(event)
    {
        
        //Read data from child component
        const item = event.detail.groceryitem
        const category = event.detail.grocerycategory
        
        this.groceryitem = event.detail.groceryitem;
        this.groceryitemMessage = "New item added !!" ;
        
        //Assign it to a local map and set collections
        this.grocerieslist.push({key:category, value:item});
        this.groceriesCategory.add(category);

        console.log("this.grocerieslist::" + JSON.stringify(this.grocerieslist))


        
    }

}