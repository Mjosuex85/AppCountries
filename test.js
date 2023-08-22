public resendDigitalSignature(offerId: number, index: number) {
        
        this.isResendingSignature = true
        this.offers[index]['disabledButton'] = true;

        console.log(this.offers)

        this.offerRegularService.resendDigitalSignature(offerId).subscribe({
            next: (data: boolean) => {
                
                if (data) {
                    this.cd.detectChanges();

                }
                
            }
        }).add(() => {
            this.isResendingSignature = false;
            this.offers[index]['disabledButton'] = false;
        });

    }

}


<button mat-flat-button *ngIf="offer.stateId === 9" [disabled]="offer.disabledButton" [title]="labels.resendSingaturButton" 
                    class="button-complementary-color-one rounded-0  me-0 me-lg-2 mb-2 mb-lg-0"
                    (click)="resendDigitalSignature(offer.id, rowIndex)">
                    <div *ngIf="!offer.disabledButton" class="d-flex flex-row justify-content-center align-items-center">
                        <fa-icon [icon]="['fas', 'rotate-right']"></fa-icon>
                    </div>
                    <div *ngIf="offer.disabledButton" class="d-flex flex-row justify-content-center align-items-center">
                        <fa-icon [icon]="['fas', 'spinner']" [spin]="true" class="me-2"></fa-icon>
                    </div>
</button>
