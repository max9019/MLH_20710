const sel = require('../../data/selectors.json');

describe('MLH-584 field age tests to check spinners', function () {

    it('TCA-004 Verify first click spinner Up.', function () {
        browser.url('');
        $$(sel.spinner)[0].click();
        const Num1 = $(sel.age).getValue();
        expect(Num1).toEqual("1");
    });

    it('TCA-005 Verify that spinner Up is present.', function () {
        browser.url('');
        $(sel.age).moveTo();
        const spinnerUp = $$(sel.spinner)[0].isDisplayed();
        expect(spinnerUp).toEqual(true);
    });

    it('TCA-005 Verify that spinner Down is present.', function () {
        browser.url('');
        $$(sel.spinner)[1].moveTo();
        const spinnerDown = $$(sel.spinner)[1].isDisplayed();
        expect(spinnerDown).toEqual(true);
    });

    it('TCA-018 Verify that number is change if one time click spinner Up button.', function () {
        browser.url('');
        $(sel.age).setValue(1);
        $$(sel.spinner)[0].click();
        const Num1 = $(sel.age).getValue();
        expect(Num1).toEqual("2");
    });

    it('TCA-019 Verify that number is change if one time click spinner Down button.', function () {
        browser.url('');
        $(sel.age).setValue(2);
        $$(sel.spinner)[1].click();
        const Num1 = $(sel.age).getValue();
        expect(Num1).toEqual("1");
    });

    it('TCA-019 Verify that number 1 is no change if one time click spinner Down button.', function () {
        browser.url('');
        $(sel.age).setValue(1);
        $$(sel.spinner)[1].click();
        const Num1 = $(sel.age).getValue();
        expect(Num1).toEqual("1");
    });
});