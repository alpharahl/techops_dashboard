import Component from '@ember/component';

export default Component.extend({
  toast: Ember.inject.service(),
  actions: {
    signInBarcode(barcode){
      var toast = this.get("toast")
    	Ember.$.getJSON('mark_shift_worked?barcode=' + barcode).then(
        function(data, header, response){
          if (response.status == 200){
            toast.success("Shift: " + data.name + " marked as worked")
            this.set('barcode', '')
          }
        }
      ).catch(
        function(data, header, response){
          toast.error("No shift found")
        }
      )
      this.set('barcode', '')
    }
  },
  didRender(){
    this.$("barcode_entry").focus();
  }
});
