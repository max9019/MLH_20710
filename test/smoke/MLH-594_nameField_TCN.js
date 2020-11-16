const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('MLH-594 Name field', function () {


    it('TCN-001 Verify wthat a label field is present.', function () {
        browser.url('');
        let label = $(sel.name).isDisplayed();
        expect(label).toEqual(true);
    });

    it('TCN-002 Verify wthat a Input field is present.', function () {
        let label = $$(sel.label)[0].isDisplayed();
        expect(label).toEqual(true);
    });

    it('TCN-003 Verify wthat a Input field is active.', function () {
        let label = $$(sel.label)[0].isClickable();
        expect(label).toEqual(true);
    });

    it('TCN-004 Verify wthat a placeholder is present.', function () {
        const text = $(sel.name).getAttribute('placeholder');
        expect(text).toEqual(exp.placeholderName);
    });


});
