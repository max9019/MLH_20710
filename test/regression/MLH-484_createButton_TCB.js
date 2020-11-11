const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const uploadSmallJPGimage = require('../../helpers/uploadSmallJPGimage');

describe('MLH-484 Create Button - Regression', function () {

    it('TCB-004 Disabled when only name entered', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-005 Disabled when only age entered', function () {
        browser.url('');
        $(sel.age).setValue(data.age);
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-006 Disabled when only gender entered', function () {
        browser.url('');
        $$(sel.gender)[data.gender.he].click();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-007 Disabled when only image uploaded', function () {
        browser.url('');
        uploadSmallJPGimage();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-008 Disabled when 2 fields filled', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.age).setValue(data.age);
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-009 Disabled when 2 fields filled and image uploaded', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.age).setValue(data.age);
        uploadSmallJPGimage();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

    it('TCB-0010 Disabled when 3 fields filled and image uploaded', function () {
        browser.url('');
        $(sel.name).setValue(data.name);
        $(sel.age).setValue(data.age);
        $$(sel.gender)[data.gender.he].click();
        uploadSmallJPGimage();
        const button = $(sel.button).isEnabled();
        expect(button).toEqual(false);
    });

});
