describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('has no ToDo items when created', function() {
    expect(ctrl.outstandingItems).toEqual([]);
  });

  it('has no completed items when created', function(){
    expect(ctrl.completedItems).toEqual([]);
  });

  it('can add an item to the ToDo list', function(){
    ctrl.addItem('Clean Fridge');
    expect(ctrl.outstandingItems).toEqual(['Clean Fridge']);
  });

  it('can add an item from the ToDo list to the complete list', function(){
    ctrl.addItem('Collect Dry Cleaning');
    ctrl.itemCompleted('Collect Dry Cleaning');
    expect(ctrl.outstandingItems).toEqual([]);
    expect(ctrl.completedItems).toEqual(['Collect Dry Cleaning']);
  });

  it('can move a specific item from ToDo to Complete', function(){
    ctrl.addItem('Collect Dry Cleaning');
    ctrl.addItem('Buy Milk');
    ctrl.addItem('Drop Kids at School');
    ctrl.itemCompleted('Drop Kids at School');
    expect(ctrl.outstandingItems).toEqual(['Collect Dry Cleaning', 'Buy Milk']);
    expect(ctrl.completedItems).toEqual(['Drop Kids at School']);
  });

});
