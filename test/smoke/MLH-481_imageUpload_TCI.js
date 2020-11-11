const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const uploadSmallJPGimage = require('../../helpers/uploadSmallJPGimage');
const uploadSmallPNGimage = require('../../helpers/uploadSmallPNGimage');
const inputValues4 = require('../../helpers/inputValues4');

describe('MLH-481 Labels for Image Uploading Field', function () {

    it('TCI-001 Image Upload Area is present', function () {
        browser.url('');
        const upload = $(sel.picture).isDisplayed()
        expect(upload).toEqual(true);
    });

    it('TCI-002 Image Upload Area Placeholder is present and correct', function () {
        const text = $(sel.picture).getText();
        expect(text).toEqual(exp.picturePlaceholder);
    });

    it('TCI-003 Label for picture is present and correct', function () {
        const label = $$(sel.label)[4].getText();
        expect(label).toEqual(exp.labelPicture);
    });

});

describe('MLH-481 Testing Image Uploading Field - Smoke', function () {

    it('TCI-006 Image Upload accepts JPG and displays preview', function () {
        browser.url('');
        uploadSmallJPGimage();
        const preview = $(sel.imagePreviewName).getAttribute('title');
        expect(preview).toEqual(exp.jpgPreview);
    });

    it('TCI-007 Image Upload accepts PNG and displays preview', function () {
        browser.url('');
        uploadSmallPNGimage();
        const preview = $(sel.imagePreviewName).getAttribute('title');
        expect(preview).toEqual(exp.pngPreview);
    });

    it('TCI-008 User can delete JPG preview', function () {
        browser.url('');
        uploadSmallJPGimage();
        $(sel.imagePreviewDelete).moveTo();
        browser.pause(1000);
        const deletePreview = $(sel.imagePreviewDelete).isClickable();
        expect(deletePreview).toEqual(true);
    });

    it('TCI-009 User can delete PNG preview', function () {
        browser.url('');
        uploadSmallPNGimage();
        $(sel.imagePreviewDelete).moveTo();
        browser.pause(1000);
        const deletePreview = $(sel.imagePreviewDelete).isClickable();
        expect(deletePreview).toEqual(true);
    });

    it('TCI-010 JPG appears in the final story', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallJPGimage();
        $(sel.button).click();
        const finalImage = $(sel.uploadedPicture).getAttribute('src');
        expect(finalImage === exp.imageError).toEqual(false);
    });

    it('TCI-011 JPG in the final story is 500px max', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallJPGimage();
        $(sel.button).click();
        const finalImageSize = $(sel.uploadedPicture).getSize('width');
        expect(finalImageSize <= 500).toEqual(true);
    });

    it('TCI-012 PNG appears in the final story', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallPNGimage();
        $(sel.button).click();
        const finalImage = $(sel.uploadedPicture).getAttribute('src');
        expect(finalImage === exp.imageError).toEqual(false);
    });

    it('TCI-013 PNG in the final story is 500px max', function () {
        browser.url('');
        inputValues4(data.name, data.gender.he, data.age, data.storyType.Comedy);
        uploadSmallPNGimage()
        $(sel.button).click();
        const finalImageSize = $(sel.uploadedPicture).getSize('width');
        expect(finalImageSize <= 500).toEqual(true);
    });

});
