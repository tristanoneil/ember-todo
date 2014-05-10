var Todo = DS.Model.extend({
  name: DS.attr(),
  done: DS.attr('boolean', {defaultValue: false})
});

Todo.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Dance'},
    { id: 2, name: 'Eat'},
    { id: 3, name: 'Read'}
  ]
});

export default Todo;
