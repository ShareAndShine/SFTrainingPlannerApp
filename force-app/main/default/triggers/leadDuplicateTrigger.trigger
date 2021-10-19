trigger leadDuplicateTrigger on Lead (before insert, before update) {

    
    
    // DO THE DUP CHECK ONLY DURING CREATE
    if(Trigger.isInsert)
    {        
        LeadTriggerHandler.findDupLeadInContact(Trigger.new);
    
    }
    
    // WHEN LEAD STATUS IS HOT , CREATE A TASK FOR LEAD OWNER TO TALK TO THE LEAD 
    // ALSO, SEND AN EMAIL
    if(Trigger.isUpdate)
    {
        // TASK CREATE
        LeadTriggerHandler.CreateTask(Trigger.New);
        
        // SEND EMAIL     
        LeadTriggerHandler.SendEmail(Trigger.New);
    }
    
    
}