import { Component } from '@angular/core';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './tu-componente.component.html',
})
export class TuComponente {
  displayConfirmationDialog: boolean = false;

  // Resto del código de tu componente...

  openConfirmationDialog(offerId: number, index: number): void {
    this.displayConfirmationDialog = true;
  }

  confirm(): void {
    // Aquí puedes realizar la acción de confirmación, como llamar a resendDigitalSignature
    this.displayConfirmationDialog = false;
  }

  cancel(): void {
    this.displayConfirmationDialog = false;
  }
}
