public async Task<IRequestPipelineResult<bool>> UpdateContractStateOffer(int offerId)
        {


            var dbOffers = Repository
            .Items<OfferRegular>(includeNavigationProperties: true, levels: 1, trackEntities: true)
            .Where(or => or.Id != offerId)
            .ToList();
            


            dbOffer.State = (int)offerStateId;

            await Repository.Update<OfferRegular>(dbOffer);
            bool dbUpdateErrorResult = await Repository.Commit();
            
            if (!dbUpdateErrorResult)
            {
                Logger.LogError($"Error al actualizar el estado de la oferta {dbOffer.Id}...");
   
            }


            return await Task.FromResult(
                new RequestPipelineResult<bool>(true)
            );
        }
