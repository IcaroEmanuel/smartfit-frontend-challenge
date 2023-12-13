import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  hoursRadio = [
    {
      name: 'morning',
      label: 'Manhã',
      start: '06:00',
      end: '12:00'
    },
    {
      name: 'afternoon',
      label: 'Tarde',
      start: '12:01',
      end: '18:00'
    },
    {
      name: 'night',
      label: 'Noite',
      start: '18:01',
      end: '23:00'
    },
  ];

}
