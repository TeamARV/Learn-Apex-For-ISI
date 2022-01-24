@isTest
private class AnimalLocatorTest {
    
    @isTest
    static void animaltest1(){
        
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        String actual = AnimalLocator.getAnimalNameById(10);
        String expected = 'moose';
        System.assertEquals(actual, expected);
        
    }

}