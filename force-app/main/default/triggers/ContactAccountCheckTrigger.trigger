trigger ContactAccountCheckTrigger on Contact (before insert, before delete, before update) {
    
    // Run this trigger only when delete operation is initiated by the system or user
    if(Trigger.isDelete) // Boolean (true only if its a delete operation
    {
        System.debug('I am being called during delete operation');
        System.debug('Trigger.isInsert=::' + Trigger.isInsert);
        System.debug('Trigger.isDelete=::' + Trigger.isDelete);
        System.debug('Printing trigger.old value:: ' + Trigger.old);
        System.debug('Printing trigger.new value:: ' + Trigger.new);
        
       for(Contact contoDelete : Trigger.old) // get contact details 
       {
           System.debug('Printing Account ID associated to the contact=::' + contoDelete.AccountId);
           
           
           if(contoDelete.AccountId !=null) //see if contact account is empty or has value
           {
               contoDelete.addError('Contact has a valid accounttied to  so delete is not possible !!! Talk to account owner please !!!');
           }
       }
    }
    
    if(Trigger.isInsert)
    {
    	// Do something you want to do when a record is being inserted 
    }
    
    if(Trigger.isUpdate)
    {
    	// Do something you want to do when a record is being updated 
    }

}