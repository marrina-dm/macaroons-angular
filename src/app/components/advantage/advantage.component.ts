import {Component, Input} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss'
})
export class AdvantageComponent {
  @Input() advantage: AdvantageType = {} as AdvantageType;
  @Input() index: number = 0;
}
