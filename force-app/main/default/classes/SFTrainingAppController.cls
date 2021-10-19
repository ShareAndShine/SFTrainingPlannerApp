public with sharing class SFTrainingAppController {
    
    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topic__c> getTopicByCat(string strCat)
    {
        string strinput = strCat + '%';
        return [ select Id, Topic_Name__c, Short_Description__c, Instructor__c, Category__c,
               	Audience__c FROM SF_Training_Topic__c where Category__c like :strinput WITH SECURITY_ENFORCED LIMIT 50];
    }

}