public with sharing class AccountLibController {
    public AccountLibController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contract> getContractStatus(string strAccountId)
    {
		return [select Id, StartDate, ContractTerm,Status,SpecialTerms,Description	
                from Contract where AccountId =:strAccountId WITH SECURITY_ENFORCED];
    }
}

