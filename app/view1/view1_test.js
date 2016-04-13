'use strict';
//The system should record the
//contact’s name, address, and phone number. The SPA should provide the ability to

describe('myApp.view1 module', function() {
    var view1Ctrl;
    var myScope;
    var local;
  beforeEach(module('myApp.view1'));
    beforeEach(inject(function($controller,  $rootScope, $localStorage) {
        myScope = $rootScope.$new();
        local = $localStorage.$reset();
        local.message = new Array();
       view1Ctrl = $controller('View1Ctrl', {
          '$scope':  myScope,
           '$localStorage': local

      });
    }));

    describe('save functionality', function(){
        it('ensure there is a save function', function() {
            expect(typeof myScope.save).toBe("function");
        });
        it('ensure that it saves information', function() {
            myScope.save("jello","65614","46546");
            expect(local.message.length > 0).toBe(true);
        });
        it('ensure that it saves the name', function() {
            myScope.save("jello","65614","46546");
            expect(local.message[0].name).toBe("jello");
        });
        it('ensure that it saves the phone', function() {
            myScope.save("jello","65614","46546");
            expect(local.message[0].phone).toBe("46546");
        });
        it('ensure that it saves the address', function() {
            myScope.save("jello","65614","46546");
            expect(local.message[0].address).toBe("65614");
        });

    });
    describe('List functionality', function(){
        it('ensure there is a list function', function() {
            expect(typeof myScope.list).toBe("function");
        });
        it('the list function returns more than one', function() {
            myScope.save("jello","65614","46546");
            myScope.list();
            expect(myScope.data[0].name).toBe("jello");
            expect(myScope.data[0].address).toBe("65614");
            expect(myScope.data[0].phone).toBe("46546");
        });

    });
    describe('phone number', function(){

        it('ensure it is not empty', function() {
        });
        it('ensure it only has numeric characters', function() {
        });
        it('ensure it only has dashes', function() {
        });
    });
    //add, list,
    //   edit, delete, and see details of a contact.
    describe('add', function(){

        it('ensure when clicked fields are added', function() {
        });
    });
    describe('list', function(){

        it('ensure when clicked fields are pulled', function() {
        });
    });
    describe('edit', function(){

        it('ensure when clicked fields are edited', function() {
        });
    });
    describe('delete', function(){

        it('ensure when clicked fields are gone', function() {
        });
    });
    describe('see details of a contact', function(){

        it('ensure when clicked fields are in detail', function() {
        });
    });
});