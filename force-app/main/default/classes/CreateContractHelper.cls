public class CreateContractHelper {

    public static void CreateContract(List<Id> accountIds)
    {
        //List collection to hold contracts to be created
        List<Contract> newContracts = new List<Contract>();
        
        // Find number of contacts entered by the user for each account id
        List<Account> acclist = [SELECT ID, Number_of_contracts__c FROM Account WHERE ID =: accountIds];
            
        //Create contract by looping each account and based on Number_of_contracts__c value create contracts
		for(Account acc :acclist)
        {
           Integer numberofContracts = (Integer)acc.Number_of_contracts__c;
           
           //Run a loop and create contracts 
           for(Integer i=1; i<=numberofContracts; i++)
           {
               //Create a contract and store it in the collection for later insert
               Contract cont = new Contract();
               cont.AccountId = acc.Id;
               cont.Status = 'Draft';
               cont.StartDate = System.Today();
               cont.ContractTerm = 10;
               
               newContracts.add(cont);    // Store in collection           
               
           }
        }
        
        if(!newContracts.isEmpty()) // Best praticse check
        {
            insert newContracts; // Insert contracts
        }
    }
}