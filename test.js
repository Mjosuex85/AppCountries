   public resendDigitalSignature(offerId: number) {
        
        
        this.offerRegularService.resendDigitalSignature(offerId).subscribe({
            next: (data: boolean) => {
                
                console.log(data)
            }
        })
    }
