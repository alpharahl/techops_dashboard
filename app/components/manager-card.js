import Component from '@ember/component';

export default Component.extend({
  actions: {
    signInBarcode(barcode){
    	console.log(barcode)
    }
  }
});
