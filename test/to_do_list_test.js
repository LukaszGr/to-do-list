var expect = require("chai").expect;
var ToDoList = require("../models/toDoList");
var toDoList;

describe ("ToDoList", function() {

  beforeEach(function() {
    toDoList = new ToDoList();
  });

  it("object is instantiated with with an array to store to do objects", function() {
    expect(toDoList.tasks).to.be.a('array');
    expect(toDoList.tasks).to.have.length(0);
  });

  describe ("#addTask", function() {
    it("adds a new to do object to the to do list", function() {
      toDoList.addTask("Eat breakfast");
      expect(toDoList.tasks[0].task).to.equal("Eat breakfast")
    });
  });

  describe ("#display", function() {
    it("displays a to do list in html format", function() {
      toDoList.addTask("Eat breakfast");
      toDoList.addTask("Eat lunch");
      expect(toDoList.display()).to.equal("<ul><li><div>Eat breakfast</div></li><li><div>Eat lunch</div></li></ul>");
    });
  });

});