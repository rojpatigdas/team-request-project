/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforEmpower(event) {
  utilprocess()
  var currentDate = new Date();
  var epochValue = currentDate.getTime();
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "header": {
              "title": "EMPOWER",
            },
            "sections": [
              {
                "header": "Request Details",
                "widgets": [
                  // {
                  //   "decoratedText": {
                  //     "text": "*Note: if not applicable, please write N/A",
                  //   }
                  // },
                 {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                  {
                    // Add an empty section for spacing
                  },                  
                  {
                    "selectionInput": {
                      "type": "RADIO_BUTTON",
                      "label": "Type of Concern*",
                      "name": "typeOfConcernEmpower",
                      "items": [
                        {
                          "text": "Team Assistance",
                          "value": "Team Assistance",
                          "selected": false
                        },
                        {
                          "text": "Payroll Queries",
                          "value": "Payroll Queries",
                          "selected": false
                        },
                        {
                          "text": "Request for Documents",
                          "value": "Request for Documents",
                          "selected": false
                        },
                        {
                          "text": "BHR concerns",
                          "value": "BHR concerns",
                          "selected": false
                        },
                        {
                          "text": "Other concerns",
                          "value": "Other concerns",
                          "selected": false
                        },
                      ]
                    }
                  },
                  {
                  "textInput": {
                    "label": "If 'Other' is selected, please indicate",
                    "type": "SINGLE_LINE",
                    "name": "otherRequestEmpower"
                  }
                  }, 
                  {
                    "divider": {}
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    "decoratedText": {
                      "text": "<b>Please Describe the details of your request*</b>",
                    }
                  },
                  {
                  "textInput": {
                    "label": "Details of the request",
                    "type": "MULTIPLE_LINE",
                    "name": "requestDetailsEmpower"
                  }
                  },           

                {
                  // Add an empty section for spacing
                },
                {
                  // Add an empty section for spacing
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
                                "function": "nextDialogforEmpower",
                                "parameters": [
                                  {
                                    "key": "nextDialogforEmpower",
                                    "value": "nextDialogforEmpower"
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
/**
 * 
 */
function nextDialogforEmpower(event) {
  sendToZapierEmpower(event);
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "EMPOWER",
                "widgets": [
                  {
                      "textParagraph": {
                        "text": "Thank You, "+event.user.displayName+"("+event.user.email+")! Your response has been recorded. You may close this dialog now."
                      }
                  },
                ]
              }
            ]
          }
        }
      }
    }
  };
}
