trigger GameTrigger on Migame__c (before insert, before update) {    // cambio sobre quien se ejecutara -->

    // cuando inserto un juego calcular cuando volver a comprar porque soy comprador compulsivo

    // variables de contexto Trigger.isInsert

    if (Trigger.isInsert ){

        //calcular cuando comprare de nuevo



    }


    if (Trigger.isUpdate ){

        // si cambia fecha de comprar entonces vuelvo a calcular cuando vuelvo a comprar :D compulsivo 

        // Trigger.old / Trigger.new / TriggeroldMap / Trigger.newMap
        // un trigger esta MULTIFICADO ... es decir que pueden tener hasta 200 registros


        for( Migame__c new)




        // puro  control xD   ---> comparar la antigua es distinta a la nueva y recalcular



    }

}