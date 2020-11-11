const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');
const inputValues5AndClick = require('../../helpers/inputValues5AndClick');


describe('MLH-484 Labels for Create Button', function () {

    it('TCB-001 Create button is present', function () {
        browser.url('');
        const submit = $(sel.button).isDisplayed()
        expect(submit).toEqual(true);
    });

    it('TCB-002 Create button has name Create!', function () {
        browser.url('');
        const text = $(sel.button).getText();
        expect(text).toEqual(exp.buttonPlaceholder);
    });

});

describe('MLH-484 Create Button - Smoke', function () {

    it('TCB-003 Button disabled when all fields empty', function () {
        browser.url('');
        const button = $(sel.button).isEnabled()
        expect(button).toEqual(false);
    });

    it('TCB-0011 Active when 4 fields filled', function () {
        browser.url('');
        inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
        const tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

    it('TCB-0012 Active when 4 fields filled and image uploaded', function () {
        browser.url('');
        inputValues5AndClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
        const tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});
