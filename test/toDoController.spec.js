describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('has no ToDo items when created', function() {
    expect(ctrl.outstandingItems).toEqual([]);
  });










});
