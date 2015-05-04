toDoList.controller('ToDoListController', [function(){

  var self = this;

  self.outstandingItems = [];
  self.completedItems = [];

  self.addItem = function(item){
    self.outstandingItems.push(item);
  };

  self.itemCompleted = function(item){
  var index = self.outstandingItems.indexOf(item)
  self.completedItems.push(self.outstandingItems[index]);
  self.outstandingItems.splice(index, 1)
  };











}]);
