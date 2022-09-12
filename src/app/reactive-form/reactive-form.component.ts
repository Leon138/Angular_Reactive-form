import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LABELS, TASK_STATUS, TASK_TYPES, WEEK_DAYS } from './constants/form.const';
import { ITask, ITaskStatus, ITaskType } from './interfaces/form.interfaces';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public myForm!: FormGroup;
  public taskTypes: ITaskType[] = TASK_TYPES;
  public taskStatus: ITaskStatus[] = TASK_STATUS;
  public days: string[] = WEEK_DAYS;
  public labels = LABELS;
  public isFormValid: boolean = false;

  @Output() public itemForm = new EventEmitter<ITask>();

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.myForm = this.fb.group({
      task: [null, [Validators.required, Validators.pattern(/^[0-9a-z_]{5,}/i)]],
      taskType: [null, Validators.required],
      taskStatus: [null, Validators.required],
      date: [null, Validators.required],
    });
    this.subscription();
  }

  public submit(): void {
    const weekday = this.getWeekDay(this.myForm.get('date')?.value);
    const newTask = <ITask>{
      ...this.myForm.value,
      date: weekday,
    };
    this.itemForm.emit(newTask);
    console.log(this.myForm.value);
  }

  private getWeekDay(date: Date): string {
    let weekday = new Date(date).getDay();
    return this.days[weekday];
  }

  private subscription(): void {
    this.myForm.valueChanges.subscribe(() => (this.isFormValid = this.myForm.valid));
  }
}
