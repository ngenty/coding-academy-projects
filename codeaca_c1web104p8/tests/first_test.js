import { expect } from 'chai';
import { Selector } from 'testcafe';

// Declare the parameterized selector function
// to obtain text content of an element identified by the `id` attribute
const getElementById = Selector(id => document.getElementById(id));

fixture `Getting Started`
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');

    // Use the Selector function to get access to the article header
    const articleHeader = await getElementById('article-header');

    // Use the assertion to check if the actual header text is equal to the expected one
    expect(articleHeader.innerText).to.equal('Thank you, John Smith!');
});
