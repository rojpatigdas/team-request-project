/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforSupport(event) {
  utilprocess()
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },
                  {
                    "textInput": {
                      "label": "Client Primary Domain*",
                      "type": "SINGLE_LINE",
                      "name": "clientDomainSupport"
                    }
                  },

                   {
                    "textInput": {
                      "label": "Hiver permalink*",
                      "type": "SINGLE_LINE",
                      "name": "hiverPermalinkSupport"
                    }
                  },
                  {
                    "textInput": {
                      "label": "Region (N/A if not applicable)*",
                      "type": "SINGLE_LINE",
                      "name": "regionSupport"
                    }
                  },
                  
                  {
                      "selectionInput": {
                        "type": "RADIO_BUTTON",
                        "label": "CC Membership*",
                        "name": "ccMembershipSupport",
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
                      "name": "otherCCMembershipSupport"
                    }
                  },
                  {
                    // Add an empty section for spacing
                   },
                   {
                    // Add an empty section for spacing
                   },
                   {
                    // Add an empty section for spacing
                   },
                   {
                    "selectionInput": {
                      "type": "DROPDOWN",
                      "label": "Should we contact the client directly?*",
                      "name": "contactClientDirectlySupport",
                      "items": [
                        {
                          "text": "No, this is a backend job. I will communicate directly to the client.",
                          "value": "No, this is a backend job. I will communicate directly to the client.",
                          "selected": false
                        },
                        {
                          "text": "Yes, please contact the client.",
                          "value": "Yes, please contact the client.",
                          "selected": false
                        },
                      ]
                    }
                  },
                  {
                    "selectionInput": {
                      "type": "DROPDOWN",
                      "label": "When should we action this request?*",
                      "name": "whenShouldWeActionSupport",
                      "items": [
                        {
                          "text": "As soon as possible",
                          "value": "As soon as possible",
                          "selected": false
                        },
                        {
                          "text": "Wait for my Go Signal",
                          "value": "Wait for my Go Signal",
                          "selected": false
                        },
                      ]
                    }
                  },
                  {
                    // Add an empty section for spacing
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
                        "label": "Help needed with*",
                        "name": "helpNeededWithSupport",
                        "items": [
                          {
                            "text": "Technical Support Request",
                            "value": "Technical Support Request",
                            "selected": false
                          },
                          {
                            "text": "Internal consultation",
                            "value": "Internal consultation",
                            "selected": false
                          },
                          {
                            "text": "Data archiving",
                            "value": "Data archiving",
                            "selected": false
                          },
                          {
                            "text": "Google Classroom Onboarding",
                            "value": "Google Classroom Onboarding",
                            "selected": false
                          },
                          {
                            "text": "Google Classroom Offboarding",
                            "value": "Google Classroom Offboarding",
                            "selected": false
                          },
                          {
                            "text": "CC Inclusion Product Cancellation",
                            "value": "CC Inclusion Product Cancellation",
                            "selected": false
                          },
                          {
                            "text": "Transfer-In",
                            "value": "Transfer-In",
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
                      "name": "otherHelpNeededSupport"
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
                                "function": "nextDialogforSupport",
                                "parameters": [
                                  {
                                    "key": "nextDialogforSupport",
                                    "value": "nextDialogforSupport"
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


function nextDialogforSupport(event) {
      var clientDomainSupport = event.common.formInputs.clientDomainSupport[""].stringInputs.value[0]
      var hiverPermalinkSupport = event.common.formInputs.hiverPermalinkSupport[""].stringInputs.value[0]
      var regionSupport = event.common.formInputs.regionSupport[""].stringInputs.value[0]
      var ccMembershipSupport = event.common.formInputs.ccMembershipSupport[""].stringInputs.value[0]
      var otherCCMembershipSupport = event.common.formInputs.otherCCMembershipSupport[""].stringInputs.value[0]
      var helpNeededWithSupport = event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]
      var otherHelpNeededSupport = event.common.formInputs.otherHelpNeededSupport[""].stringInputs.value[0]
      var contactClientDirectlySupport = event.common.formInputs.contactClientDirectlySupport[""].stringInputs.value[0]
      var whenShouldWeActionSupport = event.common.formInputs.whenShouldWeActionSupport[""].stringInputs.value[0]

      if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='Technical Support Request'){
        
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },
                                          {
                                      "selectionInput": {
                                        "type": "CHECK_BOX",
                                        "label": "Product with issue*",
                                        "name": "productWithIssueSupport",
                                        "items": [
                                          {
                                            "text": "Technical Support Request",
                                            "value": "Technical Support Request",
                                            "selected": false
                                          },
                                          {
                                            "text": "Internal consultation",
                                            "value": "Internal consultation",
                                            "selected": false
                                          },
                                          {
                                            "text": "Data archiving",
                                            "value": "Data archiving",
                                            "selected": false
                                          },
                                          {
                                            "text": "Google Classroom Onboarding",
                                            "value": "Google Classroom Onboarding",
                                            "selected": false
                                          },
                                          {
                                            "text": "Google Classroom Offboarding",
                                            "value": "Google Classroom Offboarding",
                                            "selected": false
                                          },
                                          {
                                            "text": "CC Inclusion Product Cancellation",
                                            "value": "CC Inclusion Product Cancellation",
                                            "selected": false
                                          },
                                          {
                                            "text": "Transfer-In",
                                            "value": "Transfer-In",
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
                                          "text": "Request Details*"
                                        }
                                    },
                                    {
                                      "textInput": {
                                        "label": "Request details",
                                        "type": "MULTIPLE_LINE",
                                        "name": "requestDetailsSupport"
                                      }
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    
                                    {
                                      "textParagraph": {
                                          "text": "Client Name*"
                                        }
                                    },
                                    {
                                      "textInput": {
                                        "label": "Client Name",
                                        "type": "SINGLE_LINE",
                                        "name": "clientNameSupport"
                                      }
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    
                                    {
                                      "textParagraph": {
                                          "text": "Phone number*"
                                        }
                                    },
                                    {
                                      "textInput": {
                                        "label": "Phone number",
                                        "type": "SINGLE_LINE",
                                        "name": "phoneNumberSupport"
                                      }
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    
                                    {
                                      "textParagraph": {
                                          "text": "Email address*"
                                        }
                                    },
                                    {
                                      "textInput": {
                                        "label": "Email address",
                                        "type": "SINGLE_LINE",
                                        "name": "emailAddressSupport"
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
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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
      else if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='Internal consultation'){
          var currentDate = new Date();
          var epochValue = currentDate.getTime()
        
        //sendToZapierMultiplePods(event)
                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },                             
                                 {
                                  "selectionInput": {
                                    "type": "RADIO_BUTTON",
                                    "label": "Consult with*",
                                    "name": "consultWithSupport",
                                    "items": [
                                      {
                                        "text": "Christel",
                                        "value": "Christel",
                                        "selected": false
                                      },
                                      {
                                        "text": "Arlene",
                                        "value": "Arlene",
                                        "selected": false
                                      },
                                      
                                      
                                    ]
                                  }
                                },
                                {
                                        "dateTimePicker": {
                                          
                                          "label": "Consult meeting*",
                                          "name": "consultMeetingSupport",
                                          "type": "DATE_AND_TIME",
                                          "valueMsEpoch": epochValue
                                        }
                                },
                                {
                                      "textParagraph": {
                                          "text": "Request Details"
                                        }
                                    },
                                    {
                                      "textInput": {
                                        "label": "Consultation details*",
                                        "type": "MULTIPLE_LINE",
                                        "name": "consultationDetailsSupport"
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
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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
      else if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='Data archiving'){
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
                              "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },
                                {
                                        "dateTimePicker": {
                                          
                                          "label": "Expected completion date*",
                                          "name": "expectedCompletionDateSupport",
                                          "type": "DATE_ONLY",
                                          "valueMsEpoch": epochValue
                                        }
                                },
                                {
                                      "textParagraph": {
                                          "text": "How many accounts need to be archived?*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Accounts need to be archived*",
                                        "type": "SINGLE_LINE",
                                        "name": "accountsArchivedSupport"
                                      }
                                },
                                {
                                      // Add an empty section for spacing
                                },
                                {
                                      // Add an empty section for spacing
                                },
                                {
                                      "textParagraph": {
                                          "text": "List down source account/s to destination account/s*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "",
                                        "type": "MULTIPLE_LINE",
                                        "name": "sourceToDestinationAccountsSupport"
                                      }
                                },
                                {
                                      // Add an empty section for spacing
                                },
                                {
                                      // Add an empty section for spacing
                                },
                                {
                                      "textParagraph": {
                                          "text": "Client Name*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Client Name",
                                        "type": "SINGLE_LINE",
                                        "name": "clientNameSupport"
                                      }
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    
                                    {
                                      "textParagraph": {
                                          "text": "Phone number*"
                                        }
                                    },
                                    {
                                      "textInput": {
                                        "label": "Phone number",
                                        "type": "SINGLE_LINE",
                                        "name": "phoneNumberSupport"
                                      }
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    {
                                      // Add an empty section for spacing
                                    },
                                    
                                    {
                                      "textParagraph": {
                                          "text": "Email address*"
                                        }
                                    },
                                    {
                                      "textInput": {
                                        "label": "Email address",
                                        "type": "SINGLE_LINE",
                                        "name": "emailAddressSupport"
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
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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
      else if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='Google Classroom Onboarding'){
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },
                                {
                                      "textParagraph": {
                                          "text": "Please provide the client's domain for whitelisting*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Client's Domain for Whitelisting",
                                        "type": "MULTIPLE_LINE",
                                        "name": "whitelistedDomainOnboardingSupport"
                                      }
                                },
                                {
                                      // Add an empty section for spacing
                                },
                                {
                                      // Add an empty section for spacing
                                },
                                {
                                      "textParagraph": {
                                          "text": "Email addresses of Google Classroom users*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Email addresses of Google Classroom users",
                                        "type": "MULTIPLE_LINE",
                                        "name": "emailAddressClassroomUsersSupport"
                                      }
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
                                          "label": "Course(s)*",
                                          "name": "coursesSupport",
                                          "items": [
                                      {
                                        "text": "G Workspace Basic",
                                        "value": "G Workspace Basic",
                                        "selected": false
                                      },
                                      {
                                        "text": "G Workspace Advance",
                                        "value": "G Workspace Advance",
                                        "selected": false
                                      },
                                      {
                                        "text": "Dialpad",
                                        "value": "Dialpad",
                                        "selected": false
                                      },
                                      
                                
                                
                                    ]
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
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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
      else if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='Google Classroom Offboarding'){
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },
                                {
                                      "textParagraph": {
                                          "text": "Provide the client's domain(s) for whitelist removal.*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Client's Domain for Whitelisting",
                                        "type": "MULTIPLE_LINE",
                                        "name": "whitelistedDomainOffboardingSupport"
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
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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
      else if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='CC Inclusion Product Cancellation'){
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },
                                {
                                          "selectionInput": {
                                          "type": "CHECK_BOX",
                                          "label": "Which product do you want us to cancel?*",
                                          "name": "productsCancelSupport",
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
                                        "text": "Lastpass",
                                        "value": "Lastpass",
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
                                      
                                
                                
                                    ]
                                  }
                                },
                                {
                                  "selectionInput": {
                                    "type": "DROPDOWN",
                                    "label": "Submit a finance request to cancel the product in Bill?*",
                                    "name": "financeRequestSupport",
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
                                      
                                    ]
                                  }
                                },
                                {
                                  "selectionInput": {
                                    "type": "DROPDOWN",
                                    "label": "Did the client approve of the product cancellation?*",
                                    "name": "clientApprovedCancellationSupport",
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
                                      
                                    ]
                                  }
                                },
                                {
                                      "textParagraph": {
                                          "text": "Reason for cancellation of CC inclusion:*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Reason for cancellation of CC inclusion",
                                        "type": "MULTIPLE_LINE",
                                        "name": "reasonCancellationSupport"
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
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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
      else if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='Transfer-In'){
          return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
                              "widgets": [
                                
                                

                                {
                                  "buttonList": {
                                    "buttons": [
                                      {
                                        "text": "Submit",
                                        "onClick": {
                                          "action": {
                                            
                                            // Specifies which function to run
                                              // in response to the card click.
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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
      else if(event.common.formInputs.helpNeededWithSupport[""].stringInputs.value[0]=='Other'){
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
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
                    // Add an empty section for spacing
                  },
                                {
                                      "textParagraph": {
                                          "text": "Complete Details of the Request*"
                                        }
                                },
                                {
                                      "textInput": {
                                        "label": "Complete Details of the Request",
                                        "type": "MULTIPLE_LINE",
                                        "name": "completeRequestDetailsSupport"
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
                                              "function": "finalDialogforSupport",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforSupport",
                                                  "value": "finalDialogforSupport"
                                                },
                                                {
                                                  "key": "clientDomainSupport",
                                                  "value": clientDomainSupport
                                                },
                                                {
                                                  "key": "hiverPermalinkSupport",
                                                  "value": hiverPermalinkSupport
                                                },
                                                {
                                                  "key": "regionSupport",
                                                  "value": regionSupport
                                                },
                                                {
                                                  "key": "ccMembershipSupport",
                                                  "value": ccMembershipSupport
                                                },
                                                {
                                                  "key": "otherCCMembershipSupport",
                                                  "value": otherCCMembershipSupport
                                                },
                                                {
                                                  "key": "helpNeededWithSupport",
                                                  "value": helpNeededWithSupport
                                                },
                                                {
                                                  "key": "otherHelpNeededSupport",
                                                  "value": otherHelpNeededSupport
                                                },
                                                {
                                                  "key": "contactClientDirectlySupport",
                                                  "value": contactClientDirectlySupport
                                                },
                                                {
                                                  "key": "whenShouldWeActionSupport",
                                                  "value": whenShouldWeActionSupport
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


      // let clientDomain = event.common.formInputs.clientDomain[""].stringInputs.value[0]
      // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
      // "productNo" : event.common.formInputs.ccMembership[""].stringInputs.value[0]
      // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
      // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

}

function finalDialogforSupport(event) {
  sendToZapierSupport(event)

                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "SUPPORT",
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


