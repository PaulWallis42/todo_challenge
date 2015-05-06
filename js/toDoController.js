toDoList.controller('ToDoListController', [function(){

  var self = this;

  self.outstandingItems = [];
  self.completedItems = [];

  self.addItem = function(){
    self.outstandingItems.push(self.newItem);
  };

  self.itemCompleted = function(item){
    var index = self.outstandingItems.indexOf(item)
    self.completedItems.push(self.outstandingItems[index]);
    self.outstandingItems.splice(index, 1)
  };
}]);
