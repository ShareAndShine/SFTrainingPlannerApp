public class LeadTriggerHandler {

    // FIND DUP CHECK
    public static void findDupLeadInContact(List<Lead> allLeads)
    {
           for(Lead mylead :allLeads) // Loop thru lead record(s)
            {
               // Check if you have right input 
               if(mylead.Email != null)
               {
                   List<Contact> dupContacts = [SELECT ID FROM Contact WHERE Email =: mylead.Email];
                   
                   // Use size helper method to see if there is dup contact
                   if(dupContacts.size() > 0)
                   {
                       System.debug('Duplicate contact is found !!!!. Will stop you from creating a lead');              
                       
                       // Throw an error or message to the user that dup contact exists
                       // Use add error helper method to bubble up the error
                       
                       mylead.addError('There is a duplicate contact exists !!!');
                   }
               }
                
            }
    }
    
    // CREATE TASK FOR HOT LEADS
    public static void CreateTask(List<Lead> allLeads)
    {
        	
    }
    
    // SEND EMAIL FOR HOT LEADS
    public static void SendEmail(List<Lead> allLeads)
    {
        
    }
    
}