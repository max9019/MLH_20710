const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

 describe ('Label', function() {

    describe ('Label is displayed', function(){

        it ('TCT-001 Label', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const story = $(sel.story2).isDisplayed();
            expect(story).toEqual(true);
        });



    });
});