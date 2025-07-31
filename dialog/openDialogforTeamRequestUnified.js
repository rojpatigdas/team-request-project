// openDialogforTeamRequestUnified.js
// Google Chat dialog for unified team requests (Multiple Pods, cross-team coordination).
// Provides a multi-section dialog for collecting client, project, and sub-task details, and routes responses to Zapier or other endpoints.

/**
 * Opens the main unified team request dialog in Google Chat.
 * @param {Object} event - The event object from Chat API.
 * @return {Object} Dialog definition for Google Chat.
 */
function openDialogforTeamRequestUnified(event) {
  utilprocess()
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "TEAM REQUEST HELLO ROJENN",
                "widgets": [
                  {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  //test -puebs
                  {
                    "textParagraph":{
                      "text": 'Client Details',
                    }
                  },
                  {
                    "textInput": {
                      "label": "Client Primary Domain*",
                      "type": 1,
                      "name": "clientDomainMultiplePods"
                    }
                  },
                  {
                    "textInput": {
                      "label": "Hiver permalink*",
                      "type": "SINGLE_LINE",
                      "name": "hiverPermalinkMultiplePods"
                    }
                  },
                  {
                    "textInput":{
                      "label": "Client Pain Points",
                      "type": "MULTIPLE_LINE",
                      "name": "clientPainPoints"
                    }
                  },
                  {
                    "textInput":{
                      "label": "Why they need the project",
                      "type": "MULTIPLE_LINE",
                      "name": "whyNeedProject"
                    }
                  },
                  {
                    "textParagraph":{
                      "text": 'Identify Projects/Phases',
                    }
                  },
                  {
                    "textInput":{
                      "label": "Enter All Phases Here",
                      "type": "MULTIPLE_LINE",
                      "name": "requestDetailsMultiplePods"
                    }
                  },
                  {
                    "textParagraph":{
                      "text": 'Sub-Task',
                    }
                  },
                  {
                    "textParagraph":{
                      "text": 'NOTE: For every sub-task, always add semi-colon (;) at the end of each sub-task',
                    }
                  },
                  // {
                  //   "textInput":{
                  //     "label": "Sub-Task1 Name",
                  //     "type": "SINGLE_LINE",
                  //     "name": "subTaskName1"
                  //   }
                  // },
                  //Sub Task Here
                  {
                    "textInput":{
                      "label": "Enter All Sub-Tasks Here",
                      "type": "MULTIPLE_LINE",
                      "name": "allSubTasks"
                    }
                  },
                  {
                      "selectionInput": {
                        "type": "CHECK_BOX",
                        "label": "Pods Assigned*",
                        "name": "podsAssigned",
                        "items": [
                          {
                            "text": "D2 Attract",
                            "value": "D2 Attract",
                            "selected": false
                          },
                          {
                            "text": "D3 Excite",
                            "value": "D3 Excite",
                            "selected": false
                          },
                          {
                            "text": "D4 Engage",
                            "value": "D4 Engage",
                            "selected": false
                          },
                          {
                            "text": "D5 Deliver",
                            "value": "D5 Deliver",
                            "selected": false
                          },
                          {
                            "text": "D6 Support",
                            "value": "D6 Support",
                            "selected": false
                          },
                          {
                            "text": "D7 Empower",
                            "value": "D7 Empower",
                            "selected": false
                          },
                          {
                            "text": "D8 Engineering",
                            "value": "D8 Engineering",
                            "selected": false
                          },
                          
                        ]
                      }
                    },
                  // End of Test
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
                        "name": "ccMembershipMultiplePods",
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
                      "name": "otherMultiplePods"
                    }
                    },
              
              
              // {
              //   // Add an empty section for spacing
              // },
              // {
              //   // Add an empty section for spacing
              // },
              //               {
              //   // Add an empty section for spacing
              // },
              //       // {
                    //   "selectionInput": {
                    //     "type": "CHECK_BOX",
                    //     "label": "Pods you need help from*",
                    //     "name": "podsHelp",
                    //     "items": [
                    //       {
                    //         "text": "D1 Treasury",
                    //         "value": "D1 Treasury",
                    //         "selected": false
                    //       },
                    //       {
                    //         "text": "D2 Attract",
                    //         "value": "D2 Attract",
                    //         "selected": false
                    //       },
                    //       {
                    //         "text": "D3 Excite",
                    //         "value": "D3 Excite",
                    //         "selected": false
                    //       },
                    //       {
                    //         "text": "D4 Engage",
                    //         "value": "D4 Engage",
                    //         "selected": false
                    //       },
                    //       {
                    //         "text": "D5 Deliver",
                    //         "value": "D5 Deliver",
                    //         "selected": false
                    //       },
                    //       {
                    //         "text": "D6 Support",
                    //         "value": "D6 Support",
                    //         "selected": false
                    //       },
                    //       {
                    //         "text": "D7 Empower",
                    //         "value": "D7 Empower",
                    //         "selected": false
                    //       },
                    //       {
                    //         "text": "D8 Engineering",
                    //         "value": "D8 Engineering",
                    //         "selected": false
                    //       },
                          
                    //     ]
                    //   }
                    // },
                    {
                      "selectionInput": {
                        "type": "DROPDOWN",
                        "label": "Client Region(Please select N/A if not applicable)*",
                        "name": "clientRegionMultiplePods",
                        "items": [
                          {
                            "text": "AU/NZ",
                            "value": "AU/NZ",
                            "selected": false
                          },
                          {
                            "text": "Americas",
                            "value": "Americas",
                            "selected": false
                          },
                          {
                            "text": "APAC",
                            "value": "APAC",
                            "selected": false
                          },
                          {
                            "text": "Central & Eastern Europe",
                            "value": "Central & Eastern Europe",
                            "selected": false
                          },
                          {
                            "text": "Western Europe",
                            "value": "Western Europe",
                            "selected": false
                          },
                          {
                            "text": "Africa",
                            "value": "Africa",
                            "selected": false
                          },
                          {
                            "text": "Middle East",
                            "value": "Middle East",
                            "selected": false
                          },
                          {
                            "text": "Undetermined",
                            "value": "Undetermined",
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

                  // {
                  //   "textInput": {
                  //     "label": "Request details(Note: Outline what needs to be done for this request per pod)*",
                  //     "type": "MULTIPLE_LINE",
                  //     "name": "requestDetailsMultiplePods"
                  //   }
                  // },
                  {
                    "divider": {}
                  },
                  // {
                  //   // Add an empty section for spacing
                  // },
                  // {
                  //   "textParagraph":{
                  //     "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                  //   }
                  // },
     
                  
                  {
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Next",
                          "onClick": {
                            "action": {
                              
                              // Specifies which function to run
                                // in response to the card click.
                                "function": "nextDialogforTeamRequestUnified",
                                "parameters": [
                                  {
                                    "key": "nextDialogforTeamRequestUnified",
                                    "value": "nextDialogforTeamRequestUnified"
                                  }
                                ]
                            }
                          }
                        },
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
 * Handles the 'Next' button click in the unified team request dialog.
 * Sends the collected data to Zapier and shows a thank you message.
 * @param {Object} event - The event object from Chat API.
 * @return {Object} Dialog definition for Google Chat.
 */
function nextDialogforTeamRequestUnified(event) {


      // if(event.common.formInputs.needFinance[""].stringInputs.value[0]=='Yes'){
        
      //   return openDialogforFinancefromMultiplePods(event);
      // }
      // else if(event.common.formInputs.needFinance[""].stringInputs.value[0]=='No'){
        // editSubTasks(event)
        sendToZapierTeamRequestUnified(event)
                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "MULTIPLE PODS",
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
      // }

      // let clientDomain = event.common.formInputs.clientDomain[""].stringInputs.value[0]
      // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
      // "productNo" : event.common.formInputs.ccMembership[""].stringInputs.value[0]
      // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
      // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

}



// function openDialogforFinancefromMultiplePods(event) {
//    var clientDomain = event.common.formInputs.clientDomainMultiplePods[""].stringInputs.value[0]
//    var clientLink = event.common.formInputs.hiverPermalinkMultiplePods[""].stringInputs.value[0]
//    var ccMembership = event.common.formInputs.ccMembershipMultiplePods[""].stringInputs.value[0]
//    var otherCCMembership = event.common.formInputs.otherMultiplePods[""].stringInputs.value[0]
//    var helpPods = event.common.formInputs.podsHelp[""].stringInputs.value
//    var clientRegion = event.common.formInputs.clientRegionMultiplePods[""].stringInputs.value[0]
//    var requestDetails = event.common.formInputs.requestDetailsMultiplePods[""].stringInputs.value[0]
//    var needHelpFinance = event.common.formInputs.needFinance[""].stringInputs.value[0]
//     /*"clientDomain": event.common.formInputs.clientDomainMultiplePods[""].stringInputs.value[0],
//     "clientLink": event.common.formInputs.hiverPermalinkMultiplePods[""].stringInputs.value[0],
//     "ccMembership": event.common.formInputs.ccMembershipMultiplePods[""].stringInputs.value[0],
//     "otherCCMembership": event.common.formInputs.otherMultiplePods[""].stringInputs.value[0],
//     "helpPods": event.common.formInputs.podsHelp[""].stringInputs.value,
//     "clientRegion": event.common.formInputs.clientRegionMultiplePods[""].stringInputs.value[0],
//     "requestDetails": event.common.formInputs.requestDetailsMultiplePods[""].stringInputs.value[0],
//     */
//   return {
//     "action_response": {
//       "type": "DIALOG",
//       "dialog_action": {
//         "dialog": {
//           "body": {
//             "sections": [
//               {
//                 "header": "MULTIPLE PODS(FINANCE)",
//                 "widgets": [
                  



//                    {
//                       "selectionInput": {
//                         "type": "CHECK_BOX",
//                         "label": "Request reason",
//                         "name": "requestReasonFinancefromMultiplePods",
//                         "items": [
//                           {
//                             "text": "License inquiry/concern",
//                             "value": "License inquiry/concern",
//                             "selected": false
//                           },
//                           {
//                             "text": "Invoice inquiry/concern",
//                             "value": "Invoice inquiry/concern",
//                             "selected": false
//                           },
//                           {
//                             "text": "Refund and cancellation",
//                             "value": "Refund and cancellation",
//                             "selected": false
//                           },
//                           {
//                             "text": "Other, please indicate:",
//                             "value": "Other",
//                             "selected": false
//                           },
                          
                          
//                         ]
//                       }
//                     },
//                     {
//                     "textInput": {
//                       "label": "If 'Other' is selected, please indicate",
//                       "type": "SINGLE_LINE",
//                       "name": "otherRequestReasonFinancefromMultiplePods"
//                     }
//                    },

//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },
                   
//                    {
//                     "textParagraph":{
//                       "text": "Client Link in BILL"
//                     }
//                    },


//                   {
//                     "textInput": {
//                       "label": "Client Link in BILL",
//                       "type": "SINGLE_LINE",
//                       "name": "clientBillLinkFinancefromMultiplePods"
//                     }
//                   },

//                   {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },
                   

//                   {
//                     "textParagraph":{
//                       "text": "Level of Urgency"
//                     }
//                    },

//                   {
//                       "selectionInput": {
//                         "type": "DROPDOWN",
//                         "label": "Level of urgency",
//                         "name": "levelOfUrgencyFinancefromMultiplePods",
//                         "items": [
//                           {
//                             "text": "Urgent (1 hour)",
//                             "value": "Urgent (1 hour)",
//                             "selected": false
//                           },
//                           {
//                             "text": "High (3-4 hours)",
//                             "value": "High (3-4 hours)",
//                             "selected": false
//                           },
//                           {
//                             "text": "Medium (8 hours)",
//                             "value": "Medium (8 hours)",
//                             "selected": false
//                           },
//                           {
//                             "text": "Low (24 hours)",
//                             "value": "Low (24 hours)",
//                             "selected": false
//                           },
                          
                          
//                         ]
//                       }
//                     },


//                     {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },


//                     {
//                       "selectionInput": {
//                         "type": "CHECK_BOX",
//                         "label": "Product",
//                         "name": "productFinancefromMultiplePods",
//                         "items": [
//                           {
//                             "text": "Archival/migration",
//                             "value": "Archival/migration",
//                             "selected": false
//                           },
//                           {
//                             "text": "Asana",
//                             "value": "Asana",
//                             "selected": false
//                           },
//                           {
//                             "text": "Backupify",
//                             "value": "Backupify",
//                             "selected": false
//                           },
//                           {
//                             "text": "Copper",
//                             "value": "Copper",
//                             "selected": false
//                           },
//                           {
//                             "text": "Dialpad",
//                             "value": "Dialpad",
//                             "selected": false
//                           },
//                           {
//                             "text": "DNS Hosting",
//                             "value": "DNS Hosting",
//                             "selected": false
//                           },
//                           {
//                             "text": "Domain Registration",
//                             "value": "Domain Registration",
//                             "selected": false
//                           },
//                           {
//                             "text": "Google Data Studio",
//                             "value": "Google Data Studio",
//                             "selected": false
//                           },
//                           {
//                             "text": "Google Drive Blueprint",
//                             "value": "Google Drive Blueprint",
//                             "selected": false
//                           },
//                           {
//                             "text": "Google Workspace",
//                             "value": "Google Workspace",
//                             "selected": false
//                           },
//                           {
//                             "text": "Hiver",
//                             "value": "Hiver",
//                             "selected": false
//                           },
//                           {
//                             "text": "Webroot",
//                             "value": "Webroot",
//                             "selected": false
//                           },
//                           {
//                             "text": "Workflow Automation",
//                             "value": "Workflow Automation",
//                             "selected": false
//                           },
//                           {
//                             "text": "Other, please indicate:",
//                             "value": "Other",
//                             "selected": false
//                           },

                          
//                         ]
//                       }
//                     },

//                     {
//                     "textInput": {
//                       "label": "If 'Other' is selected, please indicate",
//                       "type": "SINGLE_LINE",
//                       "name": "otherProductFinancefromMultiplePods"
//                     }
//                    },



//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },

//                    {
//                       "selectionInput": {
//                         "type": "RADIO_BUTTON",
//                         "label": "Ok to charge card?",
//                         "name": "chargeCardBooleanfromMultiplePods",
//                         "items": [
//                           {
//                             "text": "Yes",
//                             "value": "Yes",
//                             "selected": false
//                           },
//                           {
//                             "text": "No",
//                             "value": "No",
//                             "selected": false
//                           },
//                           {
//                             "text": "Other, please indicate:",
//                             "value": "Other",
//                             "selected": false
//                           },
//                         ]
//                       }
//                     },
//                     {
//                     "textInput": {
//                       "label": "If 'Other' is selected, please indicate",
//                       "type": "SINGLE_LINE",
//                       "name": "otherChargeCardFinancefromMultiplePods"
//                     }
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },

//                    {
//                     "textParagraph":{
//                       "text": "No. of licenses to add"
//                     }
//                    },
//                    {
//                     "textInput": {
//                       "label": "No. of licenses to add",
//                       "type": "SINGLE_LINE",
//                       "name": "numberOfLicensestoAddfromMultiplePods"
//                     }
//                   },
//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },


//                    {
//                     "textParagraph":{
//                       "text": "No. of licenses to downgrade"
//                     }
//                    },
//                    {
//                     "textInput": {
//                       "label": "No. of licenses to downgrade",
//                       "type": "SINGLE_LINE",
//                       "name": "numberOfLicensestoDowngradefromMultiplePods"
//                     }
//                   },
//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },

//                    {
//                     "textParagraph":{
//                       "text": "Other important notes"
//                     }
//                    },
//                    {
//                     "textInput": {
//                       "label": "Other important notes",
//                       "type": "MULTIPLE_LINE",
//                       "name": "otherImportantNotesfromMultiplePods"
//                     }
//                   },
//                    {
//                     // Add an empty section for spacing
//                    },
//                    {
//                     // Add an empty section for spacing
//                    },



     
                  
//                   {
//                     "buttonList": {
//                       "buttons": [
//                         {
//                           "text": "Submit",
//                           "onClick": {
//                             "action": {
//                               // Specifies which function to run
//                                 // in response to the card click.
//                                 "function": "nextDialogforMultiplePodsneedFinance",
//                                 "parameters": [
//                                   {
//                                     "key": "nextDialogforMultiplePodsneedFinance",
//                                     "value": "nextDialogforMultiplePodsneedFinance"
//                                   },
//                                   {
//                                     "key": "clientDomain",
//                                     "value": clientDomain
//                                   },
//                                   {
//                                     "key": "clientLink",
//                                     "value": clientLink
//                                   },
//                                   {
//                                     "key": "ccMembership",
//                                     "value": ccMembership
//                                   },
//                                   {
//                                     "key": "otherCCMembership",
//                                     "value": otherCCMembership
//                                   },
//                                   {
//                                     "key": "helpPods",
//                                     "value": helpPods
//                                   },
//                                   {
//                                     "key": "clientRegion",
//                                     "value": clientRegion
//                                   },
//                                   {
//                                     "key": "requestDetails",
//                                     "value": requestDetails
//                                   },
//                                   {
//                                     "key": "needHelpFinance",
//                                     "value": needHelpFinance
//                                   },
                                  
//                                 ]
//                             }
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 ]
//               }
//             ]
//           }
//         }
//       }
//     }
//   };
// }


// function nextDialogforMultiplePodsneedFinance(event) {


//         sendToZapierMultiplePods(event)
//                 return {
//                   "action_response": {
//                     "type": "DIALOG",
//                     "dialog_action": {
//                       "dialog": {
//                         "body": {
//                           "sections": [
//                             {
//                               "header": "MULTIPLE PODS",
//                               "widgets": [
//                                 {
//                                     "textParagraph": {
//                                       "text": "Thank You, "+event.user.displayName+"("+event.user.email+")! Your response has been recorded. You may close this dialog now."
//                                     }
//                                 },
//                               ]
//                             }
//                           ]
//                         }
//                       }
//                     }
//                   }
//                 };
      

//       // let clientDomain = event.common.formInputs.clientDomain[""].stringInputs.value[0]
//       // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
//       // "productNo" : event.common.formInputs.ccMembership[""].stringInputs.value[0]
//       // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
//       // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

// }








