/**
 * Responds to a CARD_CLICKED event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onCardClick(event) {
  if (event.common.invokedFunction == "openDialog") {
    return openDialog(event);
  }
    if (event.common.invokedFunction == "openSequentialDialog") {
    return openDialog(event);
  }
    if (event.common.invokedFunction == "dialogFinancePayload") {
    return dialogFinancePayload(event);
  }
  if (event.common.invokedFunction == "dialogDeliverPayload") {
    return dialogFinancePayload(event);
  }
  if (event.common.invokedFunction == "dialogAttractPayload") {
    return dialogAttractPayload(event);
  }




  //Engineering dialogs
  if (event.common.invokedFunction == "nextDialogforEngineering") {
    return nextDialogforEngineering(event);
  }
  if (event.common.invokedFunction == "openDialogforEngineering") {
    return openDialogforEngineering(event);
  }
  if (event.common.invokedFunction == "submitDialogEngineering") {
    return submitDialogEngineering(event);
  }




  //Finance dialogs
  if (event.common.invokedFunction == "nextDialogforFinance") {
    return nextDialogforFinance(event);
  }





  //Attract dialogs
  if (event.common.invokedFunction == "nextDialogforAttract") {
    return nextDialogforAttract(event);
  }






  //Empower dialogs
  if (event.common.invokedFunction == "nextDialogforEmpower") {
    return nextDialogforEmpower(event);
  }





  //Multiple Pods dialogs
  if (event.common.invokedFunction == "nextDialogforMultiplePods") {
    return nextDialogforMultiplePods(event);
  }
    if (event.common.invokedFunction == "openDialogforFinancefromMultiplePods") {
    return openDialogforFinancefromMultiplePods(event);
  }

  if (event.common.invokedFunction == "nextDialogforMultiplePodsneedFinance") {
    return nextDialogforMultiplePodsneedFinance(event);
  }
  


  
  //Team Unified
  if (event.common.invokedFunction == "nextDialogforTeamRequestUnified") {
    return nextDialogforTeamRequestUnified(event);
  }



  
  //Deliver dialogs
    if (event.common.invokedFunction == "nextDialogforDeliver") {
    return nextDialogforDeliver(event);
  }
    if (event.common.invokedFunction == "submissionDeliver") {
    return submissionDeliver(event);
  }


  //Support dialogs
    if (event.common.invokedFunction == "nextDialogforSupport") {
    return nextDialogforSupport(event);
  }
  if (event.common.invokedFunction == "finalDialogforSupport") {
    return finalDialogforSupport(event);
  }



   //Excite dialogs
    if (event.common.invokedFunction == "nextDialogforExcite") {
    return nextDialogforExcite(event);
  }
  if (event.common.invokedFunction == "finalDialogforExcite") {
    return finalDialogforExcite(event);
  }

  //Engage dialogs
    if (event.common.invokedFunction == "nextDialogforEngage") {
    return nextDialogforEngage(event);
  }
  if (event.common.invokedFunction == "finalDialogforEngage") {
    return finalDialogforEngage(event);
  }


   //Concierge dialogs
    if (event.common.invokedFunction == "nextDialogforConcierge") {
    return nextDialogforConcierge(event);
  }

    


}