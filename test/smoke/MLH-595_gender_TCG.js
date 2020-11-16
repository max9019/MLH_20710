const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('MLH-595 Gender Radio Button', function () {


    it('TCG-001 Verify that a label field is present.', function () {
        browser.url('');
        let label = $$(sel.label)[1].isDisplayed();
        expect(label).toEqual(true);
    });

    it('TCG-002 Verify that a 1 radio button is present.', function () {
        let rButton = $$(sel.gender)[0].isDisplayed();
        expect(rButton).toEqual(true);
    });

    it('TCG-002-1 Verify that a 2 radio button is present.', function () {
        let rButton = $$(sel.gender)[1].isDisplayed();
        expect(rButton).toEqual(true);
    });

    it('TCG-002-2 Verify that a 3 radio button is present.', function () {
        let rButton = $$(sel.gender)[2].isDisplayed();
        expect(rButton).toEqual(true);
    });

    it('TCG-003 Verify that a name first radio button is present.', function () {
        let name = $$(sel.genderName)[0].getValue();
        expect(name).toEqual(exp.genderHe);
    });

    it('TCG-004 Verify that a name second radio button is present.', function () {
        let name = $$(sel.genderName)[1].getValue();
        expect(name).toEqual(exp.genderShe);
    });

    it('TCG-005 Verify that a name third radio button is present.', function () {
        let name = $$(sel.genderName)[2].getValue();
        expect(name).toEqual(exp.genderIt);
    });


});
