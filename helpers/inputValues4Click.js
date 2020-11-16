const sel = require ('../data/selectors.json');
function inputValues4Click (name, gender, age, storyType){
    $(sel.name).addValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyArrow).click();
    $$(sel.storyTitle)[storyType].click();
    $(sel.create).click();
}
module.exports = inputValues4Click;