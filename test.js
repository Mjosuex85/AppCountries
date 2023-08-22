<button mat-flat-button *ngIf="offer.stateId === 9 && checkPermissions()" [disabled]="offer.disabledButton" [title]="labels.resendSingaturButton" 
                    class="button-complementary-color-one rounded-0  me-0 me-lg-2 mb-2 mb-lg-0"
                    (click)="openConfirmationDialog(offer.id, rowIndex)">
                    <div *ngIf="!offer.disabledButton" class="d-flex flex-row justify-content-center align-items-center">
                        <fa-icon [icon]="['fas', 'rotate-right']"></fa-icon>
                    </div>
                    <div *ngIf="offer.disabledButton" class="d-flex flex-row justify-content-center align-items-center">
                        <fa-icon [icon]="['fas', 'spinner']" [spin]="true" class="me-2"></fa-icon>
                    </div>
</button>


public resendDigitalSignature(offerId: number, index: number) {
        
        this.isResendingSignature = true
        this.offers[index]['disabledButton'] = true;

        this.offerRegularService.resendDigitalSignature(offerId).subscribe({
            next: (data: boolean) => {
                
                console.log(data)
                
            }
        }).add(() => {
            this.isResendingSignature = false;
            this.offers[index]['disabledButton'] = false;
        });

    }


    public openConfirmationDialog(offerId: number, index: number) : void {

        this.confirmationService.confirm({
            message: "Se reenviará el contrato a firma digital",
            accept: () => {
    
                this.resendDigitalSignature(offerId, index)
                
            }
        })

    }
