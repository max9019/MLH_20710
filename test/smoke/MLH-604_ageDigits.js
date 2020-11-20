const sel = require('../../data/selectors.json');

describe('MLH-604 field Age tests for digits', function () {

    it('TCA-006 Verify that only positive integers only can be added.', function () {
        browser.url('');
        $(sel.age).moveTo();
        $$(sel.spinner)[1].click();
        const number = $(sel.age).getValue();
        expect(number).toEqual("1");
    });

    it('TCA-007 Verify that the Input field does not accept more them 12 digits.', function () {
        browser.url('');
        $(sel.age).setValue('0123456789012');
        const number = $(sel.age).getValue();
        expect(number).toEqual("012345678901");
    });

    it('TCA-008 Verify that the Input field accepts 12 digits.', function () {
        browser.url('');
        $(sel.age).setValue('012345678901');
        const number = $(sel.age).getValue();
        expect(number).toEqual("012345678901");
    });

});