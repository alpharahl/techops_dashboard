import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [{
			"name":"Panels 1 AV Tech#AV",
			"timeStart":"Fri, 05 Jan 2018 12:00:00",
			"timeEnd":"Fri, 05 Jan 2018 16:00:00",
			"staff":[{
				"name":"Dave G"
			},{
			  "name":"Afton S"
			}]
		},{
			"name":"Panels 2 AV Tech#AV",
			"timeStart":"Fri, 05 Jan 2018 10:00:00",
			"timeEnd":"Fri, 05 Jan 2018 14:00:00",
			"staff":[{
				"name":"Dalton W"
			},{
				"name":"Lauren W"
			}]
		},{
			"name":"Network Support#Network",
			"timeStart":"Fri, 05 Jan 2018 12:00:00",
			"timeEnd":"Fri, 05 Jan 2018 16:00:00",
			"staff":[{
				"name":"Cody L"
			}]
		}]
	}
});
