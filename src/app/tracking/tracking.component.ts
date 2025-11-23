import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit, OnDestroy {
  private router= inject(Router);
  // Example data (copied from app logic)
  orderId = signal('OD129834756234');
  product = signal({
    name: 'REDMI Note-14 Pro+ 5G (Phantom Purple, 512 GB) ',
    price: 32999,
    color: 'Phantom Purple',
    storage: '512 GB',
    RAM: '12 GB',
    imageUrl: 'data:image/jpeg;base64,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'
  });

  deliveryAgent = signal({
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    initials: 'RK'
  });

  otp = '4592';
  gridItems = Array(24).fill(0);

  // Tracking
  currentStepIndex = signal(0);// 0: Order Placed, 1: Shipped, 2: Out for Delivery, 3: Delivered
    arrivedAt = signal('Hyderabad'); // Location where the package has currently arrived
  // The date the order was shipped (used to auto-advance status)
  shippedDate = signal(new Date('2025-11-26T00:00:00'));
  statusCheckInterval: any;
  // Dev-easter-egg: click counter to reveal dev controls
  devClickCount = signal(0);
  showDevControls = signal(false);
  devClickTimer: any;

  // Driver animation
  driverProgress = signal(20);
  driverY = signal(60);
  animationInterval: any;

  ngOnInit() {
    this.arrivedAt.set('Chandigarh');
    this.currentStepIndex.set(1);
    this.shippedDate.set(new Date('2025-11-26T00:00:00'));
    
    // Restore dev-controls visibility and other dev selections from localStorage so the panel
    // and selected values persist across reloads
    try {
     
      const shipped = localStorage.getItem('tracking.shippedDate');
      if (shipped) {
        const d = new Date(shipped);
        if (!Number.isNaN(d.getTime())) {
          this.shippedDate.set(d);
        }
      }
      const arrived = localStorage.getItem('tracking.arrivedAt');
      if (arrived) {
        this.arrivedAt.set(arrived);
      }
      const step = localStorage.getItem('tracking.currentStepIndex');
      if (step) {
        const si = Number(step);
        if (!Number.isNaN(si)) this.currentStepIndex.set(si);
      }
      const prog = localStorage.getItem('tracking.driverProgress');
      if (prog) {
        const pv = Number(prog);
        if (!Number.isNaN(pv)) this.driverProgress.set(pv);
      }
      // If there was no persisted step, ensure default is 'Shipped' (index 1)
      const persistedStep = localStorage.getItem('tracking.currentStepIndex');
      if (!persistedStep) {
        this.currentStepIndex.set(1);
        try {
          localStorage.setItem('tracking.currentStepIndex', '1');
        } catch (e) {
          // ignore
        }
      }
    } catch (e) {
      // ignore (e.g., localStorage not available)
    }
    this.startDriverSimulation();
    // Immediately check whether we need to auto-advance the status based on shipped date
    this.checkAndUpdateStatus();
    // Periodically re-check (every minute) so the UI auto-updates while the app is open
    this.statusCheckInterval = setInterval(() => this.checkAndUpdateStatus(), 60 * 1000);
  }
  removeLocalStorage(){
    localStorage.removeItem('tracking.shippedDate');
    localStorage.removeItem('tracking.arrivedAt');
    localStorage.removeItem('tracking.currentStepIndex');
    localStorage.removeItem('tracking.driverProgress');
  }

  ngOnDestroy() {
    if (this.animationInterval) clearInterval(this.animationInterval);
    if (this.statusCheckInterval) clearInterval(this.statusCheckInterval);
    if (this.devClickTimer) clearTimeout(this.devClickTimer);
  }

  progressHeight = computed(() => {
    const step = this.currentStepIndex();
    if (step === 0) return 15;
    if (step === 1) return 45;
    if (step === 2) return 75;
    if (step >= 3) return 100;
    return 0;
  });

  showOtp = computed(() => this.currentStepIndex() >= 2);

  /**
   * If 3 or more full days have passed since shippedDate, advance the step to "Out for Delivery" (index 2)
   * without regressing a later state.
   */
  checkAndUpdateStatus() {
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const shipped = new Date("2025-10-21");
    console.log("shipped,",shipped)
    const now = new Date();
    const days = Math.floor((now.getTime() - shipped.getTime()) / MS_PER_DAY);

    // if(days >= 2 && this.currentStepIndex() < 2)
    // {
    //   this.arrivedAt.set("Jammu")
    // }
    // Advance to 'Out for Delivery' after 3 full days
    // if (days >= 3 && this.currentStepIndex() < 2) {
    //   this.currentStepIndex.set(2);
    //   this.arrivedAt.set("Srinagar")
    //   // also bump driver progress a bit to reflect movement
    //   this.driverProgress.set(70);
    //   if(days >= 4 &&this.currentStepIndex() == 2)
    //   {
    //     this.arrivedAt.set("Nearest")
    //   }
    //    if(days >= 5 &&this.currentStepIndex() == 2)
    //   {
    //     this.arrivedAt.set("Nearest")
    //     this.currentStepIndex.set(3);
    //   }
    // }
  }

  // --- Dev helpers (for testing) ---
  /** Force the state to Out for Delivery (index 2) */
  forceOutForDelivery() {
    this.currentStepIndex.set(2);
    this.driverProgress.set(70);
    try {
      localStorage.setItem('tracking.currentStepIndex', String(this.currentStepIndex()));
      localStorage.setItem('tracking.driverProgress', String(this.driverProgress()));
    } catch (e) {
      // ignore
    }
  }

  /** Force the state to Shipped (index 1) - dev helper */
  forceShipped() {
    this.currentStepIndex.set(1);
    // move driver a little to indicate movement
    this.driverProgress.set(35);
    try {
      localStorage.setItem('tracking.currentStepIndex', String(this.currentStepIndex()));
      localStorage.setItem('tracking.driverProgress', String(this.driverProgress()));
    } catch (e) {
      // ignore
    }
  }


  /** Set shippedDate from an ISO string (dev helper) */
  setShippedDate(dateStr: string) {
    if (!dateStr) return;
    // Handle 'YYYY-MM-DD' from <input type="date"> reliably (avoid timezone shift)
    const isoDateMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    let d: Date;
    if (isoDateMatch) {
      const y = Number(isoDateMatch[1]);
      const m = Number(isoDateMatch[2]) - 1;
      const day = Number(isoDateMatch[3]);
      d = new Date(y, m, day);
    } else {
      d = new Date(dateStr);
    }
    if (!Number.isNaN(d.getTime())) {
      this.shippedDate.set(d);
      // set status back to 'Shipped' (index 1) after changing the shipped date
      this.currentStepIndex.set(1);
      this.checkAndUpdateStatus();
      try {
        // persist shipped date as ISO so it round-trips reliably
        localStorage.setItem('tracking.shippedDate', this.shippedDate().toISOString());
        localStorage.setItem('tracking.currentStepIndex', String(this.currentStepIndex()));
      } catch (e) {
        // ignore
      }
    }
  }
  // arrivedAtIndex used by template to show which hub text to display (1..5)
  arrivedAtIndex = signal(0);

  /** Getter used by template (pure) — returns current arrivedAtIndex */
  changeArrivedAt() {
    return this.arrivedAtIndex();
  }

  /** Click handler to cycle arrivedAtIndex (used by dev button) */
  increaseArrivedAt() {
    this.arrivedAtIndex.update(v => {
      const next = v + 1;
      return next > 5 ? 1 : next; // cycle 1..5
    });
  }
  
  // Human-readable arrivedAt selected hub
//   arrivedAt = signal('Nearest');
  arrivedAtDisplay = computed(() => {
    const v = this.arrivedAt();
    return v === 'Nearest' ? 'your nearest Hub' : v + ' Hub';
  });
  // (removed arrivedAtValue - we'll use ngModel to bind select safely)

  setArrivedAt(value: string) {
    if (!value) return;
    this.arrivedAt.set(value);
    try {
      localStorage.setItem('tracking.arrivedAt', value);
    } catch (e) {
      // ignore
    }
  }

  /** Force delivered (index 3) - dev helper */
  forceDelivered() {
    this.currentStepIndex.set(3);
    this.driverProgress.set(98);
    try {
      localStorage.setItem('tracking.currentStepIndex', String(this.currentStepIndex()));
      localStorage.setItem('tracking.driverProgress', String(this.driverProgress()));
    } catch (e) {
      // ignore
    }
  }
 

  /** User clicked the "Need Help?" button — count rapid clicks to reveal dev controls */
  onNeedHelpClicked() {
    // If already visible, do nothing
    if (this.showDevControls()) return;

    // increment counter
    this.devClickCount.update(c => c + 1);

    // reset the counter if no further clicks within 2 seconds
    if (this.devClickTimer) clearTimeout(this.devClickTimer);
    this.devClickTimer = setTimeout(() => {
      this.devClickCount.set(0);
    }, 2000);

    // Reveal when 5 rapid clicks detected
    if (this.devClickCount() >= 5) {
      this.showDevControls.set(true);
    
      if (this.devClickTimer) clearTimeout(this.devClickTimer);
      this.devClickCount.set(0);
    }
  }

  /** Hide dev controls and clear persisted flag (optional) */
  hideDevControls() {
    this.showDevControls.set(false);
    try {
      localStorage.removeItem('tracking.showDevControls');
    } catch (e) {
      // ignore
    }
  }

  getStepClass(index: number) {
    if (this.currentStepIndex() > index) {
      return 'bg-[#008c00] text-white';
    } else if (this.currentStepIndex() === index) {
      return 'bg-[#2874f0] text-white ring-4 ring-blue-100';
    } else {
      return 'bg-gray-100 text-gray-300 border border-gray-300';
    }
  }

  nextStep() {
    if (this.currentStepIndex() < 3) {
      this.currentStepIndex.update(v => v + 1);
      if (this.currentStepIndex() === 3) {
        this.driverProgress.set(85);
      }
    }
  }

  prevStep() {
    if (this.currentStepIndex() > 0) {
      this.currentStepIndex.update(v => v - 1);
    }
  }

 startDriverSimulation() {
    this.animationInterval = setInterval(() => {
      this.driverProgress.update(v => {
        let newProgress = v + 1;
        if (newProgress > 100) newProgress = 0;
        // Update Y position based on progress
        if (newProgress <= 50) {
          this.driverY.set(60 - (newProgress / 50) * 40); // Move up
        } else {
          this.driverY.set(20 + ((newProgress - 50) / 50) * 40); // Move down
        }
        return newProgress;
      });
    }, 200); // Adjust speed as needed
  }
  back() {
    this.router.navigate(['/search-order']);
  }
  shareLink() {
  if (navigator.share) {
    navigator.share({
      title: 'Share your order details',
      text: 'my order link',
      url: 'https://trackyourorders.vercel.app/',
    }).then(() => {
      console.log('Shared successfully');
    }).catch((error) => {
      console.error('Sharing failed:', error);
    });
  } else {
    alert('Share not supported on this browser/device');
  }
}
}
