import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() public emitItemTask = new EventEmitter();

  public addItemTask: string = "";

  constructor() {}

  ngOnInit(): void {}

  public submitAddTask() {
    this.addItemTask = this.addItemTask.trim()

    if(this.addItemTask){
      this.emitItemTask.emit(this.addItemTask)
      this.addItemTask = "";
    }
  }
}
