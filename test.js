public resendDigitalSignature(offerId: number, index: number) {
        
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
        
        
        console.log("PASA POR AUI")
        this.displayConfirmationDialog = true
        
        this.confirmationService.confirm({
            message: "Se reenviará el contrato a firma digital",
            accept: () => {
    
                this.resendDigitalSignature(offerId, index)
                
                this.displayConfirmationDialog = false
                
            }
        })

    }

    public confirm() {
        alert("LE DISTE A CONFIRMAR")
        
    }

    public cancel() {
        alert("CANCELASTE")
    }
