
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
}

/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialog(event) {
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "TEMPLATE",
                "widgets": [
                  {
                    "textInput": {
                      "label": "Client Primary Domain",
                      "type": "SINGLE_LINE",
                      "name": "clientDomain"
                    }
                  },

                   {
                    "textInput": {
                      "label": "Hiver permalink",
                      "type": "SINGLE_LINE",
                      "name": "hiverPermalink"
                    }
                  },
                  
                  {
                      "selectionInput": {
                        "type": "RADIO_BUTTON",
                        "label": "CC Membership",
                        "name": "ccMembership",
                        "items": [
                          {
                            "text": "Growth",
                            "value": "Growth",
                            "selected": false
                          },
                          {
                            "text": "Support",
                            "value": "Support",
                            "selected": false
                          },
                          {
                            "text": "Other",
                            "value": "Other",
                            "selected": false
                          },
                        ]
                      }
                    },

                    {
                    "textInput": {
                      "label": "If 'Other' is selected, please indicate",
                      "type": "SINGLE_LINE",
                      "name": "Other"
                    }
                  },
     
                  
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Submit",
                          "onClick": {
                            "action": {
                              // Specifies which function to run
                                // in response to the card click.
                                "function": "receiveDialog",
                                "parameters": [
                                  {
                                    "key": "receiveDialog",
                                    "value": "receiveDialog"
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


function utilprocess(){
  Utilities.sleep(1500)
}









function receiveDialog(event) {






const inputString = JSON.stringify(event.common.formInputs.clientDomain)

// Parse the input string into an object
const parsedObject = JSON.parse(inputString);

// Access the value property
const value = parsedObject[""]["stringInputs"]["value"][0];

Logger.log(value); 




}