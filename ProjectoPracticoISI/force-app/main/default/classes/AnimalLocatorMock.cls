@isTest
global class AnimalLocatorMock implements HttpCalloutMock {
    
    // Implement this interface method
    global HTTPResponse respond(HTTPRequest request) {
            HttpResponse response = new HttpResponse();
            response.setHeader('Content-Type', 'application/json');
        response.setBody('{"animal": {"id":1, "name":"moose"}}');
            response.setStatusCode(200);
            return response; 
    }

}