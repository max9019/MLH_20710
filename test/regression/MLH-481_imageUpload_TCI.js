const sel = require('../../data/selectors.json')
const data = require('../../data/testData.json');
const uploadSmallJPGimage = require('../../helpers/uploadSmallJPGimage');
const uploadSmallPNGimage = require('../../helpers/uploadSmallPNGimage');
const uploadPDFFile = require('../../helpers/uploadPDFFile');
const uploadTXTFile = require('../../helpers/uploadTXTFile');
const uploadDOCfile = require('../../helpers/uploadDOCfile');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');

describe('MLH-481 Testing Image Uploading Field - Regression', function () {

    it('TCI-004-1 Does not accept PDF', function () {
        browser.url('');
        uploadPDFFile();
        const isExisting = $(sel.imagePreview).isExisting();
        expect(isExisting).toEqual(false);
    });

    it('TCI-004-2 Does not accept TXT files', function () {
        browser.url('');
        uploadTXTFile();
        const isExisting = $(sel.imagePreview).isExisting();
        expect(isExisting).toEqual(false);
    });

    it('TCI-004-3 Does not accept DOC files', function () {
        browser.url('');
        uploadDOCfile();
        const isExisting = $(sel.imagePreview).isExisting();
        expect(isExisting).toEqual(false);
    });

    it('TCI-005-1 Does not accept PDF files ALONG with JPEG', function () {
        browser.url('');
        uploadPDFFile();
        uploadSmallJPGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-005-2 Does not accept TXT files ALONG with JPEG', function () {
        browser.url('');
        uploadTXTFile()
        uploadSmallJPGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-005-3 Does not accept DOC files ALONG with JPEG', function () {
        browser.url('');
        uploadDOCfile();
        uploadSmallJPGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-005-4 Does not accept PDF files ALONG with PNG', function () {
        browser.url('');
        uploadPDFFile();
        uploadSmallPNGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-005-5 Does not accept TXT files ALONG with PNG', function () {
        browser.url('');
        uploadTXTFile()
        uploadSmallPNGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-005-6 Does not accept DOC files ALONG with PNG', function () {
        browser.url('');
        uploadDOCfile();
        uploadSmallPNGimage();
        const elem = $$(sel.imagePreview);
        expect(elem.length).toEqual(1);
    });

    it('TCI-014 No image shown in the final story if no image uploaded', function () {
        browser.url('');
        inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
        const isExist = $(sel.uploadedPicture).isExisting();
        expect(isExist).toEqual(false);
    })

});
