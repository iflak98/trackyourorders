import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-order.html',
  styleUrl: './search-order.scss',
})
export class SearchOrderComponent {
  private router= inject(Router);
  back() {
    this.router.navigate(['']);
  }
  orderIdInput: string = 'OD129834756234';

  searchOrder() {
    // Implement search logic here
    console.log('Searching for order ID:', this.orderIdInput);
    // For demonstration, navigate to tracking page with a dummy order ID
    if(this.orderIdInput.trim()=='OD129834756234'){
    this.router.navigate(['']);
  }
  else if(this.orderIdInput.trim()==''){
    alert('Please enter a valid Order ID.');
  }
  else{
    alert('Order ID not found. Please try again.');
  }
}

}
