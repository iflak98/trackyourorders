import { Routes } from '@angular/router';
import { TrackingComponent } from './tracking/tracking.component';
import { SearchOrderComponent } from './search-order/search-order';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		
		component: TrackingComponent
	},
	{
		path: 'search-order',
		component: SearchOrderComponent
	}
];
