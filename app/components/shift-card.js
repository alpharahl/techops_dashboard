import Component from '@ember/component';

export default Component.extend({
  classNameBindings:['onShift'],
  classNames:['shift'],
  actions: {
    checkIn(){
      this.set('onShift', 'worked')
      console.log("check in")
    },
    noShow(){
      this.set('onShift', 'vacant')
      console.log("no show")
    }
  }
});
