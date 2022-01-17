public with sharing class OlderAccountsUtility {
    public OlderAccountsUtility() {
        
        

    }

    
        public static void updateOlderAccounts() {
        // Get the 5 oldest accounts
        System.debug('ANDRES TEST:::::::::::::::');
        Account[] oldAccounts = [SELECT Id, Description FROM Account ORDER BY CreatedDate ASC LIMIT 17];
        // loop through them and update the Description field
        for (Account acct : oldAccounts) {
            acct.Description = 'POWERBYANDRES';
            System.debug('ANDRES TEST:::::::::::::::');
            
        }
        // save the change you made
        update oldAccounts;
      }
}