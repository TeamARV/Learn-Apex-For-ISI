public with sharing class GamesService {
    @AuraEnabled(cacheable=true)
    public static List<Game__c> GamesService() {

        return [
            SELECT Id, Name,Foto__c
            FROM Game__c
      
          ];

    }
}



