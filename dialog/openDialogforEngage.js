/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforEngage(event) {
  utilprocess()
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "ENGAGE",
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
                      "name": "clientDomainEngage"
                    }
                  },


                   {
                    "textInput": {
                      "label": "Region (N/A if not applicable)*",
                      "type": "SINGLE_LINE",
                      "name": "regionEngage"
                    }
                  },

                   {
                    "textInput": {
                      "label": "Hiver permalink*",
                      "type": "SINGLE_LINE",
                      "name": "hiverPermalinkEngage"
                    }
                  },
                  
                  {
                      "selectionInput": {
                        "type": "RADIO_BUTTON",
                        "label": "CC Membership*",
                        "name": "ccMembershipEngage",
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
                      "name": "otherCCMembershipEngage"
                    }
                  },
                  {
                      "selectionInput": {
                        "type": "RADIO_BUTTON",
                        "label": "Help Needed With*",
                        "name": "helpNeededWithEngage",
                        "items": [
                          {
                            "text": "Account Manager assignment",
                            "value": "Account Manager assignment",
                            "selected": false
                          },
                          {
                            "text": "Escalation",
                            "value": "Escalation",
                            "selected": false
                          },
                          {
                            "text": "Post-project handover",
                            "value": "Post-project handover",
                            "selected": false
                          },
                          {
                            "text": "Scoping",
                            "value": "Scoping",
                            "selected": false
                          },
                        ]
                      }
                    },
                  
     
                  
                  {
                                  "buttonList": {
                                    "buttons": [
                                      {
                                        "text": "Next",
                                        "onClick": {
                                          "action": {
                                            
                                            // Specifies which function to run
                                              // in response to the card click.
                                              "function": "nextDialogforEngage",
                                              "parameters": [
                                                {
                                                  "key": "nextDialogforEngage",
                                                  "value": "nextDialogforEngage"
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


function nextDialogforEngage(event) {
            var regionEngage = event.common.formInputs.regionEngage[""].stringInputs.value[0]
            var clientDomainEngage = event.common.formInputs.clientDomainEngage[""].stringInputs.value[0]
            var hiverPermalinkEngage = event.common.formInputs.hiverPermalinkEngage[""].stringInputs.value[0]
            var ccMembershipEngage = event.common.formInputs.ccMembershipEngage[""].stringInputs.value[0]
            var otherCCMembershipEngage = event.common.formInputs.otherCCMembershipEngage[""].stringInputs.value[0]
            var helpNeededWithEngage = event.common.formInputs.helpNeededWithEngage[""].stringInputs.value[0]
  //sendToZapierSupport(event)
 if(event.common.formInputs.helpNeededWithEngage[""].stringInputs.value[0]=='Account Manager assignment'){
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGAGE",
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
                                      "textParagraph": {
                                          "text": "Details of request*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Details of request",
                                        "type": "MULTIPLE_LINE",
                                        "name": "requestDetailsEngage"
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
                                            "function": "finalDialogforEngage",
                                            "parameters": [
                                                    {
                                                        "key": "finalDialogforEngage",
                                                        "value": "finalDialogforEngage"
                                                    },
                                                    {
                                                        "key": "clientDomainEngage",
                                                        "value": clientDomainEngage
                                                    },
                                                    {
                                                        "key": "regionEngage",
                                                        "value": regionEngage
                                                    },
                                                    {
                                                        "key": "hiverPermalinkEngage",
                                                        "value": hiverPermalinkEngage
                                                    },
                                                    {
                                                        "key": "ccMembershipEngage",
                                                        "value": ccMembershipEngage
                                                    },
                                                    {
                                                        "key": "otherCCMembershipEngage",
                                                        "value": otherCCMembershipEngage
                                                    },
                                                    {
                                                        "key": "helpNeededWithEngage",
                                                        "value": helpNeededWithEngage
                                                    },
                                                    
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
 else if(event.common.formInputs.helpNeededWithEngage[""].stringInputs.value[0]=='Escalation'){
  return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGAGE",
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
                                    "type": "RADIO_BUTTON",
                                    "label": "Escalation type*",
                                    "name": "escalationTypeEngage",
                                    "items": [
                                      {
                                        "text": "Need love",
                                        "value": "Need love",
                                        "selected": false
                                      },
                                      {
                                        "text": "Refund",
                                        "value": "Refund",
                                        "selected": false
                                      },
                                      {
                                        "text": "Cancellation",
                                        "value": "Cancellation",
                                        "selected": false
                                      },
                                      {
                                        "text": "Suspension",
                                        "value": "Suspension",
                                        "selected": false
                                      },
                                      {
                                        "text": "Complaint",
                                        "value": "Complaint",
                                        "selected": false
                                      },
                                      {
                                        "text": "Legal",
                                        "value": "Legal",
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
                                        "label": "Primary Contact Name*",
                                        "type": "SINGLE_LINE",
                                        "name": "primaryContactNameEngage"
                                      }
                                },
                                {
                                      "textInput": {
                                        "label": "Primary Contact Email",
                                        "type": "SINGLE_LINE",
                                        "name": "primaryContactEmailEngage"
                                      }
                                },
                                {
                                  "selectionInput": {
                                    "type": "DROPDOWN",
                                    "label": "Engagement Card type*",
                                    "name": "engagementCardTypeEngage",
                                    "items": [
                                      {
                                        "text": "Cloud Optimization Plan",
                                        "value": "Cloud Optimization Plan",
                                        "selected": false
                                      },
                                      {
                                        "text": "Escalation",
                                        "value": "Escalation",
                                        "selected": false
                                      },
                                      {
                                        "text": "Ongoing Support/Project",
                                        "value": "Ongoing Support/Project",
                                        "selected": false
                                      },
                                    ]
                                  }
                                },
                               
                                {
                                  "selectionInput": {
                                    "type": "DROPDOWN",
                                    "label": "Cloud Concierge*",
                                    "name": "cloudConciergeEngage",
                                    "items": [
                                      {
                                        "text": "CC Support",
                                        "value": "CC Support",
                                        "selected": false
                                      },
                                      {
                                        "text": "CC Growth",
                                        "value": "CC Growth",
                                        "selected": false
                                      },
                                      {
                                        "text": "CC Scale",
                                        "value": "CC Scale",
                                        "selected": false
                                      },
                                      {
                                        "text": "CC QuickFix (Archived)",
                                        "value": "CC QuickFix (Archived)",
                                        "selected": false
                                      },
                                      {
                                        "text": "N/A",
                                        "value": "N/A",
                                        "selected": false
                                      },
                                    ]
                                  }
                                },
                                {
                                "selectionInput": {
                                  "type": "DROPDOWN",
                                  "label": "Product License*",
                                  "name": "productLicenseEngage",
                                  "items": [
                                    {
                                      "text": "GW Business Starter",
                                      "value": "GW Business Starter",
                                      "selected": false
                                    },
                                    {
                                      "text": "GW Business Standard",
                                      "value": "GW Business Standard",
                                      "selected": false
                                    },
                                    {
                                      "text": "GW Business Plus",
                                      "value": "GW Business Plus",
                                      "selected": false
                                    },
                                    {
                                      "text": "GW Essentials",
                                      "value": "GW Essentials",
                                      "selected": false
                                    },
                                    {
                                      "text": "GW Frontline",
                                      "value": "GW Frontline",
                                      "selected": false
                                    },
                                    {
                                      "text": "GW Enterprise Standard",
                                      "value": "GW Enterprise Standard",
                                      "selected": false
                                    },
                                    {
                                      "text": "GW Enterprise Plus",
                                      "value": "GW Enterprise Plus",
                                      "selected": false
                                    },
                                    {
                                      "text": "Dialpad",
                                      "value": "Dialpad",
                                      "selected": false
                                    },
                                    {
                                      "text": "Asana",
                                      "value": "Asana",
                                      "selected": false
                                    },
                                    {
                                      "text": "Copper",
                                      "value": "Copper",
                                      "selected": false
                                    },
                                    {
                                      "text": "HiverHQ",
                                      "value": "HiverHQ",
                                      "selected": false
                                    },
                                    {
                                      "text": "N/A",
                                      "value": "N/A",
                                      "selected": false
                                    },
                                  ]
                                }
                              },
                                {
                                  "selectionInput": {
                                    "type": "RADIO_BUTTON",
                                    "label": "Other Licenses*",
                                    "name": "otherLicensesEngage",
                                    "items": [
                                      {
                                        "text": "Backupify",
                                        "value": "Backupify",
                                        "selected": false
                                      },
                                      {
                                        "text": "Webroot",
                                        "value": "Webroot",
                                        "selected": false
                                      },
                                      {
                                        "text": "LastPass",
                                        "value": "LastPass",
                                        "selected": false
                                      },
                                      {
                                        "text": "Archived user Business Plus",
                                        "value": "Archived user Business Plus",
                                        "selected": false
                                      },
                                      {
                                        "text": "Archived user Enterprise Standard",
                                        "value": "Archived user Enterprise Standard",
                                        "selected": false
                                      },
                                      {
                                        "text": "Archived user Enterprise Plus",
                                        "value": "Archived user Enterprise Plus",
                                        "selected": false
                                      },
                                      {
                                        "text": "N/A",
                                        "value": "N/A",
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
                                    "name": "otherOtherLicensesEngage"
                                  }
                                },
                                {

                                },
                                {

                                },
                                {
                                      "textInput": {
                                        "label": "Cloud Concierge Value(if N/A, type 0)*",
                                        "type": "SINGLE_LINE",
                                        "name": "ccValueEngage"
                                      }
                                },
                                {
                                      "textInput": {
                                        "label": "Product License Value(if N/A, type 0)*",
                                        "type": "SINGLE_LINE",
                                        "name": "productLicenseValueEngage"
                                      }
                                },
                                {
                                      "textInput": {
                                        "label": "Other License Value(if N/A, type 0)*",
                                        "type": "SINGLE_LINE",
                                        "name": "otherLicenseValueEngage"
                                      }
                                },
                                {
                                      "textInput": {
                                        "label": "Excalation details*",
                                        "type": "MULTIPLE_LINE",
                                        "name": "escalationDetailsEngage"
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
                                              "function": "finalDialogforEngage",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforEngage",
                                                  "value": "finalDialogforEngage"
                                                },
                                                {
                                                    "key": "clientDomainEngage",
                                                    "value": clientDomainEngage
                                                },
                                                {
                                                        "key": "regionEngage",
                                                        "value": regionEngage
                                                    },
                                                {
                                                    "key": "hiverPermalinkEngage",
                                                    "value": hiverPermalinkEngage
                                                },
                                                {
                                                    "key": "ccMembershipEngage",
                                                    "value": ccMembershipEngage
                                                },
                                                {
                                                    "key": "otherCCMembershipEngage",
                                                    "value": otherCCMembershipEngage
                                                },
                                                {
                                                    "key": "helpNeededWithEngage",
                                                    "value": helpNeededWithEngage
                                                },
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
 else if(event.common.formInputs.helpNeededWithEngage[""].stringInputs.value[0]=='Post-project handover'){
  return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGAGE",
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
                                    "type": "DROPDOWN",
                                    "label": "Project completed*",
                                    "name": "projectCompletedEngage",
                                    "items": [
                                      {
                                        "text": "Google Workspace Migration",
                                        "value": "Google Workspace Migration",
                                        "selected": false
                                      },
                                      {
                                        "text": "Google Drive Blueprint",
                                        "value": "Google Drive Blueprint",
                                        "selected": false
                                      },
                                      {
                                        "text": "Dialpad",
                                        "value": "Dialpad",
                                        "selected": false
                                      },
                                      {
                                        "text": "Google Data Studio",
                                        "value": "Google Data Studio",
                                        "selected": false
                                      },
                                      {
                                        "text": "Copper",
                                        "value": "Copper",
                                        "selected": false
                                      },
                                      {
                                        "text": "Asana",
                                        "value": "Asana",
                                        "selected": false
                                      },
                                      {
                                        "text": "Workflow Automation",
                                        "value": "Workflow Automation",
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

                                },
                                {

                                },
                                {
                                      "textParagraph": {
                                          "text": "Issues, request, concerns, and/or feedback from client*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "",
                                        "type": "MULTIPLE_LINE",
                                        "name": "feedbackFromClientEngage"
                                      }
                                },
                                {

                                },
                                {

                                },
                                {
                                      "textParagraph": {
                                          "text": "Project rating score*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "",
                                        "type": "SINGLE_LINE",
                                        "name": "projectRatingScoreEngage"
                                      }
                                },

                                {
                                  "selectionInput": {
                                    "type": "CHECK_BOX",
                                    "label": "Project implementation*",
                                    "name": "projectImplementationEngage",
                                    "items": [
                                      {
                                        "text": "Google Workspace Migration",
                                        "value": "Google Workspace Migration",
                                        "selected": false
                                      },
                                      {
                                        "text": "Google Drive Blueprint",
                                        "value": "Google Drive Blueprint",
                                        "selected": false
                                      },
                                      {
                                        "text": "Dialpad",
                                        "value": "Dialpad",
                                        "selected": false
                                      },
                                      {
                                        "text": "Google Data Studio",
                                        "value": "Google Data Studio",
                                        "selected": false
                                      },
                                      {
                                        "text": "Copper",
                                        "value": "Copper",
                                        "selected": false
                                      },
                                      {
                                        "text": "Asana",
                                        "value": "Asana",
                                        "selected": false
                                      },
                                      {
                                        "text": "Workflow Automation",
                                        "value": "Workflow Automation",
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
                                      "textParagraph": {
                                          "text": "If 'Other' is selected, please indicate:"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "",
                                        "type": "SINGLE_LINE",
                                        "name": "otherProjectImplementationEngage"
                                      }
                                },

                                {

                                },
                                {
                                      "textParagraph": {
                                          "text": "Next project Scoping request details*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "",
                                        "type": "MULTIPLE_LINE",
                                        "name": "nextProjectScopingRequestDetailsEngage"
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
                                              "function": "finalDialogforEngage",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforEngage",
                                                  "value": "finalDialogforEngage"
                                                },
                                                {
                                                    "key": "clientDomainEngage",
                                                    "value": clientDomainEngage
                                                },
                                                {
                                                        "key": "regionEngage",
                                                        "value": regionEngage
                                                    },
                                                {
                                                    "key": "hiverPermalinkEngage",
                                                    "value": hiverPermalinkEngage
                                                },
                                                {
                                                    "key": "ccMembershipEngage",
                                                    "value": ccMembershipEngage
                                                },
                                                {
                                                    "key": "otherCCMembershipEngage",
                                                    "value": otherCCMembershipEngage
                                                },
                                                {
                                                    "key": "helpNeededWithEngage",
                                                    "value": helpNeededWithEngage
                                                },
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
 else if(event.common.formInputs.helpNeededWithEngage[""].stringInputs.value[0]=='Scoping'){
  return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGAGE",
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
                                    "type": "CHECK_BOX",
                                    "label": "Project implementation*",
                                    "name": "projectImplementationEngage",
                                    "items": [
                                      {
                                        "text": "Google Workspace Migration",
                                        "value": "Google Workspace Migration",
                                        "selected": false
                                      },
                                      {
                                        "text": "Google Drive Blueprint",
                                        "value": "Google Drive Blueprint",
                                        "selected": false
                                      },
                                      {
                                        "text": "Dialpad",
                                        "value": "Dialpad",
                                        "selected": false
                                      },
                                      {
                                        "text": "Google Data Studio",
                                        "value": "Google Data Studio",
                                        "selected": false
                                      },
                                      {
                                        "text": "Copper",
                                        "value": "Copper",
                                        "selected": false
                                      },
                                      {
                                        "text": "Asana",
                                        "value": "Asana",
                                        "selected": false
                                      },
                                      {
                                        "text": "Workflow Automation",
                                        "value": "Workflow Automation",
                                        "selected": false
                                      },
                                      {
                                        "text": "Other, Please Indicate",
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
                                    "name": "otherProjectImplementationEngage"
                                  }
                                },
                                {

                                },
                                {

                                },
                                {
                                      "textParagraph": {
                                          "text": "Next project Scoping request details**"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Next project Scoping request details",
                                        "type": "MULTIPLE_LINE",
                                        "name": "nextProjectScopingRequestDetailsEngage"
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
                                              "function": "finalDialogforEngage",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforEngage",
                                                  "value": "finalDialogforEngage"
                                                },
                                                {
                                                    "key": "clientDomainEngage",
                                                    "value": clientDomainEngage
                                                },
                                                {
                                                        "key": "regionEngage",
                                                        "value": regionEngage
                                                    },
                                                {
                                                    "key": "hiverPermalinkEngage",
                                                    "value": hiverPermalinkEngage
                                                },
                                                {
                                                    "key": "ccMembershipEngage",
                                                    "value": ccMembershipEngage
                                                },
                                                {
                                                    "key": "otherCCMembershipEngage",
                                                    "value": otherCCMembershipEngage
                                                },
                                                {
                                                    "key": "helpNeededWithEngage",
                                                    "value": helpNeededWithEngage
                                                },
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
                


    

      // let clientDomain = event.common.formInputs.clientDomainAttract[""].stringInputs.value[0]
      // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
      // "productNo" : event.common.formInputs.ccMembershipAttract[""].stringInputs.value[0]
      // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
      // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

}





function finalDialogforEngage(event) {
  sendToZapierEngage(event)

                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGAGE",
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


    

      // let clientDomain = event.common.formInputs.clientDomainAttract[""].stringInputs.value[0]
      // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
      // "productNo" : event.common.formInputs.ccMembershipAttract[""].stringInputs.value[0]
      // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
      // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

}
