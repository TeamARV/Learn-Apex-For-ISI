public with sharing class pedir {
    @AuraEnabled(cacheable=true)
    

    public static String getdataA() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://www.donorperfect.net/prod/xmlrequest.asp?apikey=SeqE69G2ov3RrUYBIT6CFFOfEOyt0XlwTPhlcT7MRwH6YYPqXXAXjCeL5FtPZ%2fk8eUwK%2bj5QLMwHb0I8NvUsKaiD5SPU5FwEYd4R4P%2fwKtcxP6JWm9EUS1RVIGqI4NBx&action=SELECT%20TOP%2020%20*%20FROM%20dp');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        return response.getBody();
    }
}


/* public with sharing class GamesService {
    @AuraEnabled(cacheable=true)
    public static List<Game__c> GamesService() {

        return [
            SELECT Id, Name,Foto__c,Plataforma__c
            FROM Game__c
      
          ];

    }
} */