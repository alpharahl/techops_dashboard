import Component from '@ember/component';

export default Component.extend({
  toast: Ember.inject.service(),
  actions: {
    signInBarcode(barcode){
      var toast = this.get("toast")
    	Ember.$.getJSON('/mark_shift_worked/' + barcode).then(
        function(data, header, response){
          if (response.status == 200){
            toast.success("Shift: " + data.name + " marked as worked")
          }
        }
      ).catch(
        function(data, header, response){
          toast.error("No shift found")
        }
      )
    }
  }
});
