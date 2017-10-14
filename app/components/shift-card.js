import Component from '@ember/component';

export default Component.extend({
  classNameBindings:['onShift'],
  classNames:['shift'],

  splitName: Ember.computed('shift.name', function(){
    return this.get('shift.name').split('#');
  }),
  shiftName: Ember.computed('shift.splitName', function(){
    return this.get('splitName')[0];
  }),
  subDepartment: Ember.computed('shift.splitName',function(){
    return this.get('splitName')[1];
  }),

  actions: {
    checkIn(){
      this.set('onShift', 'worked')
    },
    noShow(){
      this.set('onShift', 'vacant')
    },
    noData(){
      this.set('onShift', '')
    }
  }
});
