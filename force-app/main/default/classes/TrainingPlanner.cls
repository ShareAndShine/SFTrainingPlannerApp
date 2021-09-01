public with sharing class TrainingPlanner {
    public TrainingPlanner() 
    {
    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topic__c> getTrainingTopics()
    {
        return [select Id, Topic_Name__c, Category__c, Audience__c,Instructor__c,Short_Description__c from SF_Training_Topic__c WITH SECURITY_ENFORCED limit 50];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topic__c> getTopicsByCat(string strCatName)
    {
        string szCN = strCatName + '%';
        return [select Id, Topic_Name__c, Category__c, Audience__c,Instructor__c,Short_Description__c 
                from SF_Training_Topic__c where Category__c like :szCN WITH SECURITY_ENFORCED limit 50];
    }
    }
}
