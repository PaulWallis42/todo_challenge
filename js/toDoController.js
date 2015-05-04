toDoList.controller('ToDoListController', [function(){

  var self = this;

  self.outstandingItems = [];
  self.completedItems = [];

  self.addItem = function(item){
    self.outstandingItems.push(item);
  };

  self.itemCompleted = function(){
    self.completedItems.push(self.outstandingItems[0]);
    self.outstandingItems.splice(0, 1);
  };











}]);
