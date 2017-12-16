import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		checkIn(shift){
		},
		noShow(shift){
		},
		signInBarcode(barcode){
      console.log(barcode)
    }
	}
});



// signInBarcode(barcode){
// 	console.log(barcode)
// }
