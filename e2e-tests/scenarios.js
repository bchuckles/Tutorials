'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

    it('should have a name field', function() {
      var input = element(by.model('person.name'));
      input.sendKeys('Bryant Schuck');
      expect(input.getAttribute('value')).toBe('Bryant Schuck');
    });
    it('should have a address field', function() {
      var input = element(by.model('person.address'));
      input.sendKeys('2325 Quarry Valley Dr');
      expect(input.getAttribute('value')).toBe('2325 Quarry Valley Dr');
    });
      it('should have a phone number field', function() {
          var input = element(by.model('person.phone'));
          input.sendKeys('Bryant Schuck');
          expect(input.getAttribute('value')).toBe('Bryant Schuck');
      });
      it('should have a edit button', function() {
          var input = element(by.buttonText('Edit'));
          input.click();
      });
      it('should have a add button', function() {
          var input = element(by.buttonText('Add'));
          input.click();
      });
      it('should have a list button', function() {
          var input = element(by.buttonText('List'));
          input.click();
      });
      it('should have a delete button', function() {
          var input = element(by.buttonText('Delete'));
          input.click();
      });
      it('should have a see details button', function() {
          var input = element(by.buttonText('See Details'));
          input.click();
      });
  });

});
