import startApp from '../helpers/start-app';

var App;

module('Integration - Index Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('lists all todos', function() {
  visit('/');

  andThen(function() {
    equal(find('table tr').length, 3, 'There should be 4 todos');
  });
});

test('clicking remove deletes a todo', function() {
  visit('/');
  click('tr:first-of-type .remove');

  andThen(function() {
    equal(find('table tr').length, 2, 'There should only be 3 todos after clicking remove');
  });
});

test('clicking a todos checkbox should mark it as done', function() {
  visit('/');
  click('tr:first-of-type input[type=checkbox]');

  andThen(function() {
    equal(find('table span.done').length, 1, 'There should be 1 done todo after checking a todos checkbox');
  });
});
