module.exports = function(){
  this.books =  element.all(by.repeater("book in vm.books"));
  this.search = element.all(by.model('title'));
};
