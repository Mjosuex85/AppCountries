  <button mat-flat-button *ngIf="offer.stateId === 9 && checkPermissions()" [disabled]="offer.disabledButton" [title]="labels.resendSingaturButton" 
                    class="button-complementary-color-one rounded-0  me-0 me-lg-2 mb-2 mb-lg-0"
                    (click)="openConfirmationDialog(offer.id, rowIndex)">

                    <p-dialog [(visible)]="displayConfirmationDialog" header="Confirmación"  [style]="{ width: '300px' }">
                        <p>
                            ¿Está seguro de que desea reenviar la firma digital?
                        </p>
                        <p-footer>
                            <button type="button" pButton label="Sí" (click)="openConfirmationDialog(offer.id, rowIndex)" class="p-button-success"></button>
                            <button type="button" pButton label="No" (click)="openConfirmationDialog(offer.id, rowIndex)" class="p-button-secondary"></button>
                        </p-footer>
                    </p-dialog>


                    <div *ngIf="!offer.disabledButton" class="d-flex flex-row justify-content-center align-items-center">
                        <fa-icon [icon]="['fas', 'rotate-right']"></fa-icon>
                    </div>
                    <div *ngIf="offer.disabledButton" class="d-flex flex-row justify-content-center align-items-center">
                        <fa-icon [icon]="['fas', 'spinner']" [spin]="true" class="me-2"></fa-icon>
                    </div>
                </button>
