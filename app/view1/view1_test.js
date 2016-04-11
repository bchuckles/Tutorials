'use strict';
//The system should record the
//contact’s name, address, and phone number. The SPA should provide the ability to

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));
    describe('view1 controller', function(){

        it('should ....', inject(function($controller,  $rootScope) {
          //spec body
          var view1Ctrl = $controller('View1Ctrl', {
              '$scope':  $rootScope.$new()
          });
          expect(view1Ctrl).toBeDefined();
        }));
    });
    describe('contact’s name', function(){

        it('ensure it is not empty', function() {
        });
        it('ensure it only has alpha characters', function() {
        });
    });
    describe('address', function(){

        it('ensure it is not empty', function() {
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