public with sharing class ContactLib {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts()
    {
        return [select Id, Name, Email from Contact WITH SECURITY_ENFORCED limit 10];
    }
    
     /*@AuraEnabled(cacheable=true)
    public static List<Contact> getContactEmail(string strContactName)
    {
        string szCN = strContactName + '%';
        return [select Id, Name, Email from Contact where Name like :szCN WITH SECURITY_ENFORCED limit 10];
    }*/
    
     @AuraEnabled(cacheable=true)
    public static List<Contact> getContactEmail()
    {
        return [select Id, Name, Email from Contact  WITH SECURITY_ENFORCED limit 10];
    }
}