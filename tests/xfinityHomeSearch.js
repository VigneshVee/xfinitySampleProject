// import { Selector as $, Selector, t } from 'testcafe';
import xfinityHomePage from '../pages/xfinityHomePage';

fixture `Search Test`.page `https://www.xfinity.com/learn/offers`

// uses testcafe's User Roles functionality
// https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
test('search for offers', async t => {
    // const searchbox = $('#Address_SingleStreetAddress');
     const searchAddressText = '1555 SUZY ST, APT 441, 17046'; 
     const videoChannelsPageText = 'Would you like any additional channels?';
     const videoEquipPageText = '';
     const customizeInternetPageText = 'Need more speed?';
     const voicePageText = "Let's customize your home phone service to your needs.";
     const insPageText = 'How do you want to handle installation?';
    await xfinityHomePage.searchForDeals(searchAddressText)
    const text = await xfinityHomePage.addressText.innerText;
    console.log(text);
    await t.expect(text).contains(searchAddressText.toUpperCase())
    const atc = await xfinityHomePage.addToCart.innerText;
    console.log('atc : '+atc);
    await xfinityHomePage.click_Checkout()
    await t.expect(xfinityHomePage.videoChannelsPageTitle.exists).notOk({ timeout: 10000 });
    const vcPageTitleText = await xfinityHomePage.videoChannelsPageTitle.innerText;
    await t.expect(vcPageTitleText).eql(videoChannelsPageText)
    console.log('Video package h1 tag text : '+vcPageTitleText);    
});



