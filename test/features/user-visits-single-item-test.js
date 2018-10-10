const {assert} = require('chai');
//const {jsdom} = require('jsdom');
const {buildItemObject, parseTextFromHTML} = require('../test-utils');
//var $ = require('jQuery');


describe.only('User visits the single item page', () => {
	describe('posted a new item on create page and clicked on the created item on the redirected root page', () => {
		it('should display created item description', () => {
			const description = 'New item 1 description';
			const itemToCreate = buildItemObject({
				title: 'New Item 1',
				description: description
			});
			browser.url('/items/create');
			browser.setValue('#title-input', itemToCreate.title);
			browser.setValue('#description-input', itemToCreate.description);
			browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
			browser.click('#submit-button');

			browser.click('.item-card > a');

			const html = browser.getHTML('body');
			
			assert.include(parseTextFromHTML(html, '#item-description'), description);
		});
	});

});
	
