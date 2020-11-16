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
        const spinnerUp = $$(sel.spinner)[0].isDisplayed();
        expect(spinnerUp).toEqual(true);
    });

    it('TCA-005 Verify that spinner Down is present.', function () {
        browser.url('');
        const spinnerDown = $$(sel.spinner)[1].isDisplayed();
        expect(spinnerDown).toEqual(true);
    });

});