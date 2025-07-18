/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforFinance(event) {
  utilprocess()
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "header": {
              "title": "FINANCE",
            },
            "sections": [
              {
                "header": "Request Details",
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
                    "textInput": {
                      "label": "Client Primary Domain*",
                      "type": "SINGLE_LINE",
                      "name": "clientDomainFinance"
                    }
                  },
                  {
                    "textInput": {
                      "label": "Hiver Permalink*",
                      "type": "SINGLE_LINE",
                      "name": "hiverPermalinkFinance"
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
                      "label": "CC Membership*",
                      "name": "ccMembershipFinance",
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
                          "text": "Other, please indicate:",
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
                    "name": "otherCCMembershipFinance"
                  }
                  },           
                  {
                    "divider": {}
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    "selectionInput": {
                      "type": "CHECK_BOX",
                      "label": "Request reason*",
                      "name": "requestReasonFinance",
                      "items": [
                        {
                          "text": "License inquiry/concern",
                          "value": "License inquiry/concern",
                          "selected": false
                        },
                        {
                          "text": "Invoice inquiry/concern",
                          "value": "Invoice inquiry/concern",
                          "selected": false
                        },
                        {
                          "text": "Refund and cancellation",
                          "value": "Refund and cancellation",
                          "selected": false
                        },
                        {
                          "text": "Other, please indicate:",
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
                      "name": "otherRequestReasonFinance"
                    }
                  },
                  {
                  // Add an empty section for spacing
                  },
                  {
                    "textParagraph":{
                      "text": "Client Link in BILL*"
                    }
                  },
                  {
                    "textInput": {
                      "label": "Client Link in BILL*",
                      "type": "SINGLE_LINE",
                      "name": "clientBillLink"
                    }
                  },
                  {
                  // Add an empty section for spacing
                  },
                  {
                    "textParagraph":{
                      "text": "Level of Urgency*"
                    }
                  },
                  {
                    "selectionInput": {
                      "type": "DROPDOWN",
                      "label": "Level of Urgency*",
                      "name": "levelOfUrgencyFinance",
                      "items": [
                        {
                          "text": "Urgent (1 hour)",
                          "value": "Urgent (1 hour)",
                          "selected": false
                        },
                        {
                          "text": "High (3-4 hours)",
                          "value": "High (3-4 hours)",
                          "selected": false
                        },
                        {
                          "text": "Medium (8 hours)",
                          "value": "Medium (8 hours)",
                          "selected": false
                        },
                        {
                          "text": "Low (24 hours)",
                          "value": "Low (24 hours)",
                          "selected": false
                        },
                      ]
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
                      "type": "CHECK_BOX",
                      "label": "Product*",
                      "name": "productFinance",
                      "items": [
                        {
                          "text": "Archival/migration",
                          "value": "Archival/migration",
                          "selected": false
                        },
                        {
                          "text": "Asana",
                          "value": "Asana",
                          "selected": false
                        },
                        {
                          "text": "Backupify",
                          "value": "Backupify",
                          "selected": false
                        },
                        {
                          "text": "Copper",
                          "value": "Copper",
                          "selected": false
                        },
                        {
                          "text": "Dialpad",
                          "value": "Dialpad",
                          "selected": false
                        },
                        {
                          "text": "DNS Hosting",
                          "value": "DNS Hosting",
                          "selected": false
                        },
                        {
                          "text": "Domain Registration",
                          "value": "Domain Registration",
                          "selected": false
                        },
                        {
                          "text": "Google Data Studio",
                          "value": "Google Data Studio",
                          "selected": false
                        },
                        {
                          "text": "Google Drive Blueprint",
                          "value": "Google Drive Blueprint",
                          "selected": false
                        },
                        {
                          "text": "Google Workspace",
                          "value": "Google Workspace",
                          "selected": false
                        },
                        {
                          "text": "Hiver",
                          "value": "Hiver",
                          "selected": false
                        },
                        {
                          "text": "Webroot",
                          "value": "Webroot",
                          "selected": false
                        },
                        {
                          "text": "Workflow Automation",
                          "value": "Workflow Automation",
                          "selected": false
                        },
                        {
                          "text": "Other, please indicate:",
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
                      "name": "otherProductFinance"
                    }
                  },           
                  {
                    "divider": {}
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    "selectionInput": {
                      "type": "RADIO_BUTTON",
                      "label": "Ok to charge card?*",
                      "name": "chargeCardBoolean",
                      "items": [
                        {
                          "text": "Yes",
                          "value": "Yes",
                          "selected": false
                        },
                        {
                          "text": "No",
                          "value": "No",
                          "selected": false
                        },
                        {
                          "text": "Other, please indicate:",
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
                    "name": "otherChargeCardFinance"
                  }
                  },           
                  {
                    "divider": {}
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                  "textParagraph":{
                    "text": "No. of licenses to add*"
                  }
                  },
                  {
                    "textInput": {
                      "label": "No. of licenses to add*",
                      "type": "SINGLE_LINE",
                      "name": "numberOfLicensestoAdd"
                    }
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    "textParagraph":{
                      "text": "No. of licenses to downgrade*"
                    }
                  },
                  {
                    "textInput": {
                      "label": "No. of licenses to downgrade*",
                      "type": "SINGLE_LINE",
                      "name": "numberOfLicensestoDowngrade"
                    }
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    "textParagraph":{
                      "text": "Other important notes*"
                    }
                  },
                  {
                    "textInput": {
                      "label": "Other important notes*",
                      "type": "MULTIPLE_LINE",
                      "name": "otherImportantNotes"
                    }
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    "divider": {}
                  },
                  {
                    // Add an empty section for spacing
                  },
                  {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please indicate 'N/A' if not applicable"
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
                                "function": "nextDialogforFinance",
                                "parameters": [
                                  {
                                    "key": "nextDialogforFinance",
                                    "value": "nextDialogforFinance"
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
function nextDialogforFinance(event) {
  sendToZapierFinance(event);
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "FINANCE",
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


