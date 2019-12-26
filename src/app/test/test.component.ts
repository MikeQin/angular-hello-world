import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./pipes.html",
  styles: []
})
export class TestComponent implements OnInit {
  colors = ["red", "blud", "green", "yellow"];

  color = "blue";
  //name = "Michael";
  myId = "testId";
  isDisabled = false;
  twoWayBinding = "";
  displayName = true;
  message = "hello world we are testing";
  person = {
    name: "Jason Lu",
    sex: "Male"
  };
  date = new Date();

  @Input("parentData") name;
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  fireEvent() {
    this.childEvent.emit("hello message from child");
  }

  greet() {
    return "Hello " + this.name;
  }

  log(event) {
    console.log(event.type);
  }

  logMessage(msg) {
    console.log("msg", msg);
  }
}
