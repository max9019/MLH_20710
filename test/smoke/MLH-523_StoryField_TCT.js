const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

 describe ('Story Field', function() {

    describe ('Story Field', function(){

        it ('TCT-001 Label "4. What type of story would you like to read?" is present', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const story = $$(sel.label)[3].isDisplayed();
            expect(story).toEqual(true);
        });
        it ('TCT-002 Story dropdown is present', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });
        it ('TCT-003 Story placeholder "Type of the story" is present', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const story = $(sel.storyPlaceholder).getText();
            expect(story).toEqual(exp.placeholderStory);
        });


    });
});