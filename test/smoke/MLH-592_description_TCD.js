const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe('MLH-592 Description tests', function () {


    it('TCD-000 Verify Title is correct ', function () {
        browser.url('');
        let title = browser.getTitle();
        expect(title).toEqual(exp.title);
    });

    it('TCD-001 Verify Page Header is present', function () {
        const head = $(sel.headerMLH).isDisplayed()
        expect(head).toEqual(true);
    });

    it('TCD-002 Verify Page Header text is "My Little Hero"', function () {
        const head = $(sel.headerMLH).getText()
        expect(head).toEqual(exp.headerMLH);
    });

    it('TCD-003 Verify Description Text is present', function () {
        const head1 = $(sel.theIntro).isDisplayed()
        expect(head1).toEqual(true);
    });

    it('TCD-004  Verify Description Text is "Let\'s create your own HERO! It\'s super easy with our application!"\n', function () {
        const head1 = $(sel.theIntro).getText()
        expect(head1).toEqual(exp.theIntro);
    });


});
