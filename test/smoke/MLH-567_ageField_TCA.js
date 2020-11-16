const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('MLH-567 field age tests', function () {

    it('TCA-001 Verify that a label field is present.', function () {
        browser.url('');
        const label = $$(sel.label)[2].isDisplayed();
        expect(label).toEqual(true);
    });

    it('TCA-002 Label for age = 3. How old is your hero?', function () {
        browser.url('');
        const text = $$(sel.label)[2].getText();
        expect(text).toEqual(exp.labelAge);
    });

    it('TCA-003 Placeholder Age is displayed', function () {
        browser.url('');
        const text = $(sel.age).getAttribute('placeholder');
        expect(text).toEqual(exp.placeholderAge);
    });
});
