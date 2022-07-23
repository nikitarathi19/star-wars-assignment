import { Component, Input } from '@angular/core'
import { Flims } from '../models/flims'

@Component({
	selector: 'app-side-data',
	templateUrl: './side-data.component.html',
	styleUrls: ['./side-data.component.css']
})
export class SideDataComponent {
	@Input() flims!: Flims
	@Input() isActive: boolean = false
}
