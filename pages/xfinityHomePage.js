import { Selector as $, Selector, t } from 'testcafe';


const xfinityHomePage = {  
  searchbox : $('#Address_SingleStreetAddress'),
  searchBtn : $('button.x-button--solid') ,
  src : $('#Address_SingleStreetAddress__results').child('li').child('button'),
  addressText : $('div.x-filters__btn-item__stats').child('div').child('div:nth-child(1)').child('p'),
  addToCart: $('div.x-offercard-wrap').child('section:nth-child(2)').child('div.x-flex__col-xs-12.x-flex__col-md-4.x-flex__col-lg-3.x-ui-theme--grey.x-offercard__bottom').child('div').child('aside').child('div:nth-child(2)').child('div').child('div').child('div').child('form').child('button').child('span'),
  videoChannelsPageNextBtn: $('div.hg-cart__panel--mobile-footer.hg-cart__panel').child('div:nth-child(2)').child('button'),
  videoChannelsPageTitle: $('h1').child('span'),
  checkoutBtn: $('div.x-offercard-pinned').child('div').child('section').child('div.x-flex__col-xs-12.x-flex__col-md-4.x-flex__col-lg-3.x-ui-theme--grey.x-offercard__bottom').child('div').child('aside').child('div:nth-child(2)').child('div').child('div.x-flex__content.x-offercard__addcart').child('div').child('form').child('button'),
  videoEquipAddBtn: $('#video-equipment-option-add'),
  addServiceWithTVBox: $('div.col-lg-8.col-xs-12').child('h1').child('span').child('span.content-value'),
  videoEquipPageTitle: $('h1').child('span'),
  videoEquipPageNextBtn: $('div.hg-cart__panel--mobile-footer.hg-cart__panel').child('div:nth-child(2)').child('button'),
  cisPageTitle: $('h1').child('span'),
  cisPageNextBtn: $('div.hg-cart__panel--mobile-footer.hg-cart__panel').child('div:nth-child(2)').child('button'),
  voicePageTitle: $('h1').child('span'),
  voicePageRadioOne: $('div.hg-tab-container.row').child('div:nth-child(1)').child('div').child('div').child('label'),
  voicePageNewPhoneSelector: $('#newPhone'),
  voicePageNewPhoneOption: $('#newPhone').child('option:nth-child(2)'),
  voicePageNextBtn:  $('div.hg-cart__panel--mobile-footer.hg-cart__panel').child('div:nth-child(2)').child('button'),
  ciePageTitle: $('h1').child('span'),
  ciePageRadioTwo: $('div.col-lg-8.col-xs-12').child('div').child('div:nth-child(2)').child('div.radio-below-hero.radio-below-hero--flex.hg-panel').child('div').child('div').child('div').child('div').child('div').child('label'),
  ciePageNextBtn:  $('div.hg-cart__panel--mobile-footer.hg-cart__panel').child('div:nth-child(2)').child('button'),
  insPageTitle: $('h1').child('span'),
  insPageMyOwn: $('div.install--col.col-lg-8.col-md-offset-.col-xs-12').child('div.row').child('div').child('div').child('div'),
  insNextPageBtn: $('div.hg-cart__panel--mobile-footer.hg-cart__panel').child('div:nth-child(2)').child('button'),
  billingPageAddress: $('div.serviceAddress').child('div').child('div').child('div').child('p'),
  /**
   * 
   * @param {String} text 
   */
  async searchForDeals(text){
  await t.maximizeWindow()
    .typeText(this.searchbox, text,{paste:true})
    .click(this.src)
    .click(this.searchBtn)
  },
  /**
   * 
   */
  async clickAdd_To_Cart(){
    await t.click(this.addToCart);
  },
  async click_Checkout() {
    await t.click(this.checkoutBtn);
  }
  }
export default{...xfinityHomePage}