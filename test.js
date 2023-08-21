try
    {
        // Obtén la oferta específica que deseas actualizar
        var dbOffer = await Repository.FindAsync<OfferRegular>(offerId);
        
        if (dbOffer != null)
        {
            dbOffer.State = (int)offerStateId;

            // Actualiza la oferta
            await Repository.Update<OfferRegular>(dbOffer);
            bool dbUpdateErrorResult = await Repository.Commit();
            
            if (!dbUpdateErrorResult)
            {
                Logger.LogError($"Error al actualizar el estado de la oferta {dbOffer.Id}...");
            }
        }
        else
        {
            Logger.LogError($"No se encontró una oferta con el ID {offerId}...");
        }

        return new RequestPipelineResult<bool>(true);
    }
    catch (Exception ex)
    {
        Logger.LogError($"Error en UpdateContractStateOffer: {ex.Message}");
        return new RequestPipelineResult<bool>(false);
    }
