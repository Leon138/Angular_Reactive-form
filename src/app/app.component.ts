import { Component } from '@angular/core';
import { ITask } from './reactive-form/interfaces/form.interfaces';
import { WEEK_DAYS } from './shared/constants/week-day.const';
import { WeekDays } from './shared/interfaces/week-day.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public weekDays: WeekDays[] = WEEK_DAYS;

  public addItemForm(task: ITask) {
    this.weekDays.map((item) => {
      if (task.date == item.value) {
        item.arrTask.push(task);
      }
    });

    console.log(this.weekDays);
    console.log(task);
  }
}
