import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return Ember.$.getJSON('/current_shifts')
	}
});
// return [{
// 	"name":"Panels 1 AV Tech#AV",
// 	"timeStart":"12:00 PM",
// 	"timeEnd":"4:00 PM",
// 	"staff":[{
// 		"name":"Dave G"
// 	},{
// 	  "name":"Afton S"
// 	},{
// 		"name":"Another"
// 	},{
// 		"name":"And Another"
// 	},{
// 		"name":"Kristi"
// 	},{
// 	  "name":"Afton S"
// 	},{
// 		"name":"Another"
// 	},{
// 		"name":"And Another"
// 	},{
// 		"name":"Kristi"
// 	},{
// 	  "name":"Afton S"
// 	},{
// 		"name":"Another"
// 	},{
// 		"name":"And Another"
// 	},{
// 		"name":"Kristi"
// 	},{
// 	  "name":"Afton S"
// 	}]
// },{
// 	"name":"Panels 2 AV Tech#AV",
// 	"timeStart":"10:00 AM",
// 	"timeEnd":"2:00 PM",
// 	"staff":[{
// 		"name":"Dalton W"
// 	},{
// 		"name":"Lauren W"
// 	}]
// },{
// 	"name":"Network Support#Network",
// 	"timeStart":"12:00 PM",
// 	"timeEnd":"4:00 PM",
// 	"staff":[{
// 		"name":"Cody L"
// 	}]
// },{
// 	"name":"Manager Shift 15",
// 	"timeStart":"12:00 PM",
// 	"timeEnd":"4:00 PM",
// 	"staff":[{
// 		"name":"JD"
// 	}]
// },{
// 	"name":"Manager Shift 16",
// 	"timeStart":"2:00 PM",
// 	"timeEnd":"6:00 PM",
// 	"staff":[{
// 		"name":"That Guy"
// 	}]
// }]
