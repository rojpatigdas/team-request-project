/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforConcierge(event) {
  utilprocess()
  var currentDate = new Date();
  var epochValue = currentDate.getTime()
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "CONCIERGE",
                "widgets": [
                   {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                  {
                    "selectionInput": {
                      "label": "What Help is Needed*",
                      "type": "RADIO_BUTTON",
                      "name": "helpNeededConcierge",
                        "items": [
                          {
                            "text": "Lead Submission",
                            "value": "Lead Submission",
                            "selected": false
                          },
                          {
                            "text": "Engage",
                            "value": "Engage",
                            "selected": false
                          },
                        ]
                    }
                  },
                  {
                    // Add an empty section for spacing
                  },
                  
   
                  
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Next",
                          "onClick": {
                            "action": {

                                "function": "nextDialogforConcierge",
                                "parameters": [
                                  {
                                    "key": "nextDialogforConcierge",
                                    "value": "nextDialogforConcierge"
                                  }
                                ]
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  };
}










function nextDialogforConcierge(event) {
  var helpNeededConcierge = event.common.formInputs.helpNeededConcierge[""].stringInputs.value[0]
  Logger.log(helpNeededConcierge)

 if(helpNeededConcierge=='Lead Submission'){
    return openDialogforExcite(event)
 }
 else if(helpNeededConcierge=='Engage'){
    return openDialogforEngage(event)
 }


    

      // let clientDomain = event.common.formInputs.clientDomainAttract[""].stringInputs.value[0]
      // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
      // "productNo" : event.common.formInputs.ccMembershipAttract[""].stringInputs.value[0]
      // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
      // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

}





