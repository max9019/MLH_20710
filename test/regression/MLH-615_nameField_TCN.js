const sel = require('../../data/selectors.json')
const symbols = require('../../data/testData.json').symbols;

describe('MLH-615 Testing Name Field - Regression', function () {

        it('TCN-005 Verify what a Input field not accepted more them 70 simbols ', function () {
        browser.url('');
        let nField = $(sel.name).setValue(symbols.moreThanNecessary);
        nField = $(sel.name).getValue();
        const count = nField.length;
        expect(count).toEqual(70);
    });

    it('TCN-005-1 Verify what a Input field not accepted more them 70 simbols & alert', function () {
        browser.url('');
        $(sel.name).setValue(symbols.moreThanNecessary);
        $(sel.alert).waitForDisplayed();
        const alert = $(sel.alert).isDisplayed();
        expect(alert).toEqual(true);
    });

    it('TCN-006 Verify what a Input field accepted 70 simbols', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.allowed);
        let nField = $(sel.name).getValue();
        const count1 = nField.length;
        expect(count1).toEqual(70) ;
    });

    it('TCN-006-1 Verify what a Input field accepted 70 simbols & no alert', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.allowed);
        $(sel.name).getValue();
        const alert = $(sel.alert).isDisplayed();
        expect(alert).toEqual(false);
    });

    it('TCN-007 Verify what a Input field accepted single uppercase letters', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.singleUppercase);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.singleUppercase);
    });

    it('TCN-008 Verify what a Input field accepted single lowercase letters', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.singleLowercase);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.singleLowercase);
    });

    it('TCN-009 Verify what a Input field accepted single digit', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.singleDigit);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.singleDigit);
    });

    it('TCN-010 Verify what a Input field accepted A-Z', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.uppercase);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.uppercase);
    });

    it('TCN-011 Verify what a Input field accepted a-z', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.lowercase);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.lowercase);
    });

    it('TCN-012 Verify what a Input field accepted special characters', function () {
        browser.refresh();
        let nField = $(sel.name).setValue(symbols.specialCharacters);
        nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.specialCharacters);
    });

    it('TCN-013 Verify what a Input field accepted digit 0-9', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.digit);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.digit);
    });

    it('TCN-014 Verify Name Input Field accepts spacesVerify Name Input Field accepts name with spaces' , function () {
        browser.refresh();
        $(sel.name).setValue(symbols.space3);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.space3);
    });

    it('TCN-015 Verify Name Input Field accepts spaces in the end and in the end', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.space1);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.space1);
    });

    it('TCN-015-1 Verify Name Input Field accepts only spaces', function () {
        browser.refresh();
        $(sel.name).setValue(symbols.space2);
        let nField = $(sel.name).getValue();
        expect(nField).toEqual(symbols.space2);
    });

});
