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
  staffCount: Ember.computed('shift.shifts',function(){
    return this.get('shift.shifts').length;
  }),
  workedCount: Ember.computed('shift.shifts',function(){
    var worked = [];
    this.get('shift.shifts').forEach(function(s){
      if (s.worked_label == "This shift was worked"){
        worked = worked.concat(s)
      }
    })
    return worked.length;
  }),
  onShift: Ember.computed('shift.workedCount', function(){
    if (this.get('workedCount')/this.get('shift.shifts').length >= 0.66){
      console.log("yay")
      return 'worked';
    } else if(new Date(this.get('shift.start_time')) < new Date()) {
      return 'vacant';
    }
  })
});
