export default Ember.ObjectController.extend({
  actions: {
    removeTodo: function() {
      this.get('model').deleteRecord();
    }
  }
});
