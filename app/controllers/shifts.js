import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		checkIn(shift){
			alert("On shift: " + shift);
		},
		noShow(shift){
			alert("Did not show: " + shift);
		}
	}
});
