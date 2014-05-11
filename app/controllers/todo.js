export default Ember.ObjectController.extend({
  actions: {
    removeTodo: function() {
      this.get('model').deleteRecord();
    },

    markDone: function() {
      var todo = this.get('model');
      todo.set('done', !todo.get('done'));
      todo.save();
    }
  }
});
