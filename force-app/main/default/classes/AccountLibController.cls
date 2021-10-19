public with sharing class AccountLibController {

    @AuraEnabled(cacheable=true)
    public static List<Contract> getContractStatus(string strAccountId)
    {
		return [select Id, StartDate,Enddate, ContractTerm,Status,SpecialTerms,Description	
                from Contract where AccountId =:strAccountId WITH SECURITY_ENFORCED];
    }
}