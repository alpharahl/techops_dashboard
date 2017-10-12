import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return ['shift 1', 'shift 2', 'shift 3']
	}
});
