/*
// Print a msg
console.log("Welcome to JS Training !!!");

// Variables
// Let , const, var

const TopicName = "JS Training";
console.log(TopicName);

//var
//var i = 1;
for(var i=0; i<10;i++)
{}
console.log(i);


for(let j=0; j<10;j++)
{
   //console.log(j)
}
//console.log(j);

// Data Types 
// Boolean, Number, String, Object, Array, null, undefined

let Topicname = "JS Training";
console.log(typeof Topicname);

let x = 10 + "JS Training";
console.log(typeof x);

let y = 3.14e5
console.log(y);
console.log(typeof y);

let training =  undefined;
console.log(training);

//Objects

const SFTopics = {
    TopicName:"APEX Basics",
    TopicCategory:"APEX"
};
console.log(SFTopics);
console.log(typeof SFTopics);
console.log(JSON.stringify(SFTopics));

console.log("The topic " + SFTopics.TopicName + " has been categorized under " 
                + SFTopics.TopicCategory);

console.log(`The topic ${SFTopics.TopicName} has been categorized under ${SFTopics.TopicCategory}`);


// array
const SFTopicsArr = [];
SFTopicsArr.push("APEX Basics");
SFTopicsArr.push("APEX Triggers");
SFTopicsArr.push("LWC");
console.log("SFTopicsArr:" + SFTopicsArr);
console.log(JSON.stringify(SFTopicsArr));
console.log(SFTopicsArr.length);
console.log(SFTopicsArr[2]);



// Function - Method I 
addTopics("Javascript","LWC");
function addTopics(TopicName, TopicCategory)
{
    console.log(`The topic ${TopicName} has been categorized under ${TopicCategory}`);

}


// Method - II
const  addTopics_2 = function(TopicName, TopicCategory)
{
    console.log(`The topic ${TopicName} has been categorized under ${TopicCategory}`);
}
addTopics_2("Web components","LWC");
*/


//Method - III

const addTopics_3 = (TopicName, TopicCategory) => {
    console.log(`The topic ${TopicName} has been categorized under ${TopicCategory}`);
};
addTopics_3("Decorators","LWC");



// Class
// Set & Map
// array 
// import / export - JS modules
// Sample app

// Map
let instructor = new Map();
instructor.set("APEX", "Vamsi");
instructor.set("LWC", "Rajesh");
instructor.set("Admin", "Gopi");
//console.log(instructor.get("LWC"));
//console.log("Key check:" + instructor.has("Light"));


//Set
let SFTopic_s = new Set();
SFTopic_s.add("LWC");
SFTopic_s.add("APEX");
SFTopic_s.add("lightning");
SFTopic_s.add("lightning");
SFTopic_s.add("lightning");
console.log(SFTopic_s.keys());
console.log("Key check:" + SFTopic_s.has("APEX"));



class SFTopics {

    constructor(TopicName, TopicCategory)
    {
        this.TopicName = TopicName,
        this.TopicCategory = TopicCategory,
        this.Instructor = getInstructor(TopicCategory)
    }


};

// function to get instructor name based on category
const getInstructor = (TopicCategory) => {
    return instructor.get(TopicCategory);
};
//console.log(getInstructor("APEX"));


let newtopic = new SFTopics("Decorators","LWC");
let newtopic2 = new SFTopics("APEX T","APEX");
console.log(`The topic ${newtopic.TopicName} has been categorized under ${newtopic.TopicCategory}. 
Instructor is ${newtopic.Instructor}`);
console.log(`The topic ${newtopic2.TopicName} has been categorized under ${newtopic2.TopicCategory}
Instructor is ${newtopic2.Instructor}`);

// Set & Map
//let number = [1,2,3,4,5];
//number.map(n => console.log(n**2))

/*for (i=0;i<number.length;i++)
{
    console.log(number[i]**2);
}*/

//console.log(repeat("JS Modules"));


 


// Web components
// 1. JS Modules
// 2. custom element
// 3. HTML Template
// 4. Shadow DOM 






