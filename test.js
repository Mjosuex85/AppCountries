<p-dialog [(visible)]="displayConfirmationDialog" header="Confirmación" modal="true" [style]="{ width: '300px' }">
    <p>
        ¿Está seguro de que desea reenviar la firma digital?
    </p>
    <p-footer>
        <button type="button" pButton label="Sí" (click)="confirm()" class="p-button-success"></button>
        <button type="button" pButton label="No" (click)="cancel()" class="p-button-secondary"></button>
    </p-footer>
</p-dialog>
