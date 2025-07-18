/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforExcite(event) {
  utilprocess()
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "EXCITE",
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
                      "name": "clientDomainExcite"
                    }
                  },

      

                   {
                    "textInput": {
                      "label": "Hiver permalink*",
                      "type": "SINGLE_LINE",
                      "name": "hiverPermalinkExcite"
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
                        "type": "RADIO_BUTTON",
                        "label": "CC Membership*",
                        "name": "ccMembershipExcite",
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
                            "label": "Other, please indicate:",
                            "type": "SINGLE_LINE",
                            "name": "otherCCMembershipExcite"
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
                             "text": "Client First Name*"
                           }
                    },
                    {
                        "textInput": {
                            "label": "Client First Name",
                            "type": "SINGLE_LINE",
                            "name": "clientFirstNameExcite"
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
                             "text": "Client Last Name*"
                           }
                    },
                    {
                        "textInput": {
                            "label": "Client Last Name",
                            "type": "SINGLE_LINE",
                            "name": "clientLastNameExcite"
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
                             "text": "Company Name*"
                           }
                    },
                    {
                        "textInput": {
                            "label": "Company Name",
                            "type": "SINGLE_LINE",
                            "name": "companyNameExcite"
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
                             "text": "Client Email address*"
                           }
                    },
                    {
                        "textInput": {
                            "label": "Client Email address",
                            "type": "SINGLE_LINE",
                            "name": "clientEmailAddressExcite"
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
                             "text": "Client Phone number*"
                           }
                    },
                    {
                        "textInput": {
                            "label": "Include country code if applicable",
                            "type": "SINGLE_LINE",
                            "name": "clientPhoneNumberExcite"
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
                        "type": "RADIO_BUTTON",
                        "label": "Team size*",
                        "name": "teamSizeExcite",
                        "items": [
                          {
                            "text": "1",
                            "value": "1",
                            "selected": false
                          },
                          {
                            "text": "2-5",
                            "value": "2-5",
                            "selected": false
                          },
                          {
                            "text": "6-20",
                            "value": "6-20",
                            "selected": false
                          },
                          {
                            "text": "21-50",
                            "value": "21-50",
                            "selected": false
                          },
                          {
                            "text": "51-200",
                            "value": "51-200",
                            "selected": false
                          },
                          {
                            "text": "200+",
                            "value": "200+",
                            "selected": false
                          },
                        ]
                      }
                    },
                    {
                      "selectionInput": {
                        "type": "DROPDOWN",
                        "label": "Referred by/Customer Source*",
                        "name": "customerSourceExcite",
                        "items": [
                          {
                            "text": "Existing Customer Referrals",
                            "value": "Existing Customer Referrals",
                            "selected": false
                          },
                          {
                            "text": "Google Search/SEO",
                            "value": "Google Search/SEO",
                            "selected": false
                          },
                          {
                            "text": "Social - Facebook",
                            "value": "Social - Facebook",
                            "selected": false
                          },
                          {
                            "text": "Social - LinkedIn",
                            "value": "Social - LinkedIn",
                            "selected": false
                          },
                          {
                            "text": "Social - YouTube",
                            "value": "Social - YouTube",
                            "selected": false
                          },
                          {
                            "text": "Vendor - Asana",
                            "value": "Vendor - Asana",
                            "selected": false
                          },
                          {
                            "text": "Vendor - Backupify",
                            "value": "Vendor - Backupify",
                            "selected": false
                          },
                          {
                            "text": "Vendor - Copper",
                            "value": "Vendor - Copper",
                            "selected": false
                          },
                          {
                            "text": "Vendor - Dialpad",
                            "value": "Vendor - Dialpad",
                            "selected": false
                          },
                          {
                            "text": "Vendor - Google",
                            "value": "Vendor - Google",
                            "selected": false
                          },
                          {
                            "text": "Vendor - HiverHQ",
                            "value": "Vendor - HiverHQ",
                            "selected": false
                          },
                          {
                            "text": "Direct - EC",
                            "value": "Direct - EC",
                            "selected": false
                          },
                          {
                            "text": "itG Support",
                            "value": "itG Support",
                            "selected": false
                          },
                          {
                            "text": "itG Engage",
                            "value": "itG Engage",
                            "selected": false
                          },
                          {
                            "text": "itG Projects",
                            "value": "itG Projects",
                            "selected": false
                          },
                          {
                            "text": "Organic - email marketing",
                            "value": "Organic - email marketing",
                            "selected": false
                          },
                          {
                            "text": "Unidentified",
                            "value": "Unidentified",
                            "selected": false
                          },
                          {
                            "text": "Bootcamp Ads",
                            "value": "Bootcamp Ads",
                            "selected": false
                          },
                          {
                            "text": "Youtube Ads",
                            "value": "Youtube Ads",
                            "selected": false
                          },
                          {
                            "text": "Facebook Ads",
                            "value": "Facebook Ads",
                            "selected": false
                          },
                          {
                            "text": "Google Ads",
                            "value": "Google Ads",
                            "selected": false
                          },
                        ]
                      }
                    },
                    {
                      "selectionInput": {
                        "type": "DROPDOWN",
                        "label": "Customer Type*",
                        "name": "customerTypeExcite",
                        "items": [
                          {
                            "text": "CC member",
                            "value": "CC member",
                            "selected": false
                          },
                          {
                            "text": "License Only",
                            "value": "License Only",
                            "selected": false
                          },
                          {
                            "text": "New Customer",
                            "value": "New Customer",
                            "selected": false
                          },
                        ]
                      }
                    },
                    {
                         "textParagraph": {
                             "text": "How can we help?*"
                           }
                    },
                    {
                        "textInput": {
                            "label": "How can we help?",
                            "type": "MULTIPLE_LINE",
                            "name": "howCanWeHelpExcite"
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
                                              "function": "finalDialogforExcite",
                                              "parameters": [
                                                {
                                                  "key": "finalDialogforExcite",
                                                  "value": "finalDialogforExcite"
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

function finalDialogforExcite(event) {
  sendToZapierExcite(event)

                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "EXCITE",
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