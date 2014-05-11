export default Ember.ArrayController.extend({
  newTodo: '',
  actions: {
    addTodo: function() {
      var name = this.get('newTodo').trim();

      if(!name) return;

      this.store.createRecord('todo', {name: name});
      this.set('newTodo', '');
    }
  }
});
