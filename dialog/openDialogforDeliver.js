/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforDeliver(event) {
  utilprocess()
  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "DELIVER",
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
                      "name": "clientDomainDeliver"
                    }
                  },

      

                   {
                    "textInput": {
                      "label": "Hiver permalink*",
                      "type": "SINGLE_LINE",
                      "name": "hiverPermalinkDeliver"
                    }
                  },
              {
                // Add an empty section for spacing
              },
              {
                // Add an empty section for spacing
              },
              {
                    "textInput": {
                      "label": "Region (type N/A if not applicable)*",
                      "type": "SINGLE_LINE",
                      "name": "clientRegionDeliver"
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
                        "name": "ccMembershipDeliver",
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
                      "name": "otherCCDeliver"
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
                        "label": "Help Needed With*",
                        "name": "helpNeededWithDeliver",
                        "items": [
                          {
                            "text": "Research / Technical Consultation",
                            "value": "Research / Technical Consultation",
                            "selected": false
                          },
                          {
                            "text": "Project Manager assignment",
                            "value": "Project Manager assignment",
                            "selected": false
                          },
                          {
                            "text": "GW Audit",
                            "value": "GW Audit",
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
                      "type": "MULTIPLE_LINE",
                      "name": "otherHelpDeliver"
                    }
                    },   

              {
                // Add an empty section for spacing
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
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
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
                                "function": "nextDialogforDeliver",
                                "parameters": [
                                  {
                                    "key": "nextDialogforDeliver",
                                    "value": "nextDialogforDeliver"
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




function nextDialogforDeliver(event) {
      var clientDomain = event.common.formInputs.clientDomainDeliver[""].stringInputs.value[0]
      var clientLink = event.common.formInputs.hiverPermalinkDeliver[""].stringInputs.value[0]
      var ccMembership = event.common.formInputs.ccMembershipDeliver[""].stringInputs.value[0]
      var otherCCMembership = event.common.formInputs.otherCCDeliver[""].stringInputs.value[0]
      var helpNeeded = event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]
      var otherHelp = event.common.formInputs.otherHelpDeliver[""].stringInputs.value[0]
      var regionDeliver = event.common.formInputs.clientRegionDeliver[""].stringInputs.value[0]
            // console.log("clientDomain:"+ event.common.formInputs.clientDomainDeliver[""].stringInputs.value[0]);
            // console.log("clientLink:"+ clientLink);
            // console.log("ccMembership:"+ ccMembership);
            // console.log("otherCCMembership:"+ otherCCMembership);
            // console.log("helpNeededWith:"+ helpNeededWith);
            // console.log("otherHelpDeliver:"+ otherHelpDeliver);
            // console.log("requestDetailsDeliver:"+ requestDetailsDeliver);

      if(event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]=='Research / Technical Consultation' || event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]=='GW Audit' || event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]=='Other'){
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "DELIVER",
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
                                    "textParagraph":{
                                      "text": "Kindly provide the details of your request*"
                                    }
                                  },                                  
                                  {
                                  "textInput": {
                                    "label": "",
                                    "type": "MULTIPLE_LINE",
                                    "name": "requestDetailsDeliver"
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
                                                "function": "submissionDeliver",
                                                "parameters": [
                                                  {
                                                                "key": "submissionDeliver",
                                                                "value": "submissionDeliver"
                                                  },

                                                  {
                                                                "key": "clientDomain",
                                                                "value": clientDomain
                                                  },
                                                  {
                                                                "key": "clientLink",
                                                                "value": clientLink
                                                  },
                                                  {
                                                                "key": "ccMembership",
                                                                "value": ccMembership
                                                  },
                                                  {
                                                                "key": "otherCCMembership",
                                                                "value": otherCCMembership
                                                  },
                                                  {
                                                                "key": "helpNeededWith",
                                                                "value": helpNeeded
                                                  },
                                                  {
                                                                "key": "otherHelpDeliver",
                                                                "value": otherHelp
                                                  },
                                                  {
                                                                "key": "regionDeliver",
                                                                "value": regionDeliver
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


      else if(event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]=='Project Manager assignment'){




                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "DELIVER",
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

                                    //----------------------------------------------------------------------------------------------------------
                                    //Implement this on v2 of Team Request Automations, for now use the single column check box
                                  
                                    // {
                                    //   "textParagraph": {
                                    //     "text": "Implementation request"
                                    //   }
                                    // },

                                    
                                    // {
                                    //   "columns": {
                                    //     "columnItems": [
                                    //       {
                                    //         //"horizontalSizeStyle": "FILL_MINIMUM_SPACE",
                                    //         //"horizontalAlignment": "CENTER",
                                    //         //"verticalAlignment": "TOP",
                                    //         "widgets": [
                                    //           {
                                    //             "selectionInput": {
                                    //               "type": "CHECK_BOX",
                                    //               "label": "",
                                    //               "name": "implemRequestDeliverTest",
                                    //               "items": [
                                    //                 {
                                    //                   "text": "Google Workspace Migration",
                                    //                   "value": "Google Workspace Migration",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Archiving",
                                    //                   "value": "Archiving",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Google Drive Blueprint",
                                    //                   "value": "Google Drive Blueprint",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Dialpad",
                                    //                   "value": "Dialpad",
                                    //                   "selected": false
                                    //                 },
                                                    
                                                  
                                    //               ]
                                    //             }
                                    //           },
                                    //         ]
                                    //       },
                                    //       {
                                    //         //"horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
                                    //         //"horizontalAlignment": "CENTER",
                                    //         //"verticalAlignment": "TOP",
                                    //         "widgets": [
                                    //           {
                                    //             "selectionInput": {
                                    //               "type": "CHECK_BOX",
                                    //               "label": "",
                                    //               "name": "implemRequestDeliverTest2",
                                    //               "items": [
                                                    
                                    //                 {
                                    //                   "text": "Google Data Studio",
                                    //                   "value": "Google Data Studio",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Copper",
                                    //                   "value": "Copper",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Asana",
                                    //                   "value": "Asana",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Workflow Automations",
                                    //                   "value": "Workflow Automation",
                                    //                   "selected": false
                                    //                 },
                                                  
                                    //               ]
                                    //             }
                                    //           },
                                    //         ]
                                    //       }
                                    //     ]
                                    //   }
                                    // },

                                    //----------------------------------------------------------------------------------------------------------





                                     {
                                      "selectionInput": {
                                        "type": "CHECK_BOX",
                                        "label": "Implementation request*",
                                        "name": "implemRequestDeliver",
                                        "items": [
                                          {
                                            "text": "GW Migration",
                                            "value": "GW Migration",
                                            "selected": false
                                          },
                                          {
                                            "text": "GW Audit",
                                            "value": "GW Audit",
                                            "selected": false
                                          },
                                          {
                                            "text": "Google Drive Blueprint",
                                            "value": "Google Drive Blueprint",
                                            "selected": false
                                          },
                                          {
                                            "text": "Google Looker Studio (fomerly Data Studio)",
                                            "value": "Google Looker Studio (fomerly Data Studio)",
                                            "selected": false
                                          },
                                          {
                                            "text": "Workflow Automation",
                                            "value": "Workflow Automation",
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
                                            "text": "Asana",
                                            "value": "Asana",
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
                                                "textParagraph":{
                                                  "text": "Project details*"
                                                }
                                              },  
                                              {
                                                "textParagraph":{
                                                  "text": "Provide a short outline of what needs to be done for this request"
                                                }
                                              },                                 
                                              {
                                              "textInput": {
                                                "label": "",
                                                "type": "MULTIPLE_LINE",
                                                "name": "requestDetailsDeliver"
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
                                                            "function": "submissionDeliver",
                                                            "parameters": [
                                                              {
                                                                "key": "submissionDeliver",
                                                                "value": "submissionDeliver",
                                                                // "clientDomain": event.common.formInputs.clientDomainDeliver[""].stringInputs.value[0],
                                                                // "clientLink": event.common.formInputs.hiverPermalinkDeliver[""].stringInputs.value[0],
                                                                // "ccMembership": event.common.formInputs.ccMembershipDeliver[""].stringInputs.value[0],
                                                                // "otherCCMembership": otherCCMembershipDeliver,
                                                                // "helpNeededWith": event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0],
                                                                // "otherHelpDeliver": event.common.formInputs.otherHelpDeliver[""].stringInputs.value[0],
                                                                // "requestDetailsDeliver": event.common.formInputs.requestDetailsDeliver[""].stringInputs.value[0],  

                                                              },
                                                              
                                                              {
                                                                "key": "clientDomain",
                                                                "value": clientDomain
                                                              },
                                                              {
                                                                "key": "clientLink",
                                                                "value": clientLink
                                                              },
                                                              {
                                                                "key": "ccMembership",
                                                                "value": ccMembership
                                                              },
                                                              {
                                                                "key": "otherCCMembership",
                                                                "value": otherCCMembership
                                                              },
                                                              {
                                                                "key": "helpNeededWith",
                                                                "value": helpNeeded
                                                              },
                                                              {
                                                                "key": "otherHelpDeliver",
                                                                "value": otherHelp
                                                              },
                                                              
                                                            ]
                                                        }
                                                      }
                                                    }
                                                  ]
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

      else{
        sendToZapierDeliver(event)
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "DELIVER",
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
      // else if(event.common.formInputs.needFinance[""].stringInputs.value[0]=='No'){
                
      // }

      // let clientDomain = event.common.formInputs.clientDomain[""].stringInputs.value[0]
      // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
      // "productNo" : event.common.formInputs.ccMembership[""].stringInputs.value[0]
      // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
      // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

}



function submissionDeliver(event) {



  // console.log("clientDomain:", clientDomain);
  // console.log("clientLink:", clientLink);
  // console.log("ccMembership:", ccMembership);
  // console.log("otherCCMembership:", otherCCMembership);
  // console.log("helpNeededWith:", helpNeededWith);
  // console.log("otherHelpDeliver:", otherHelpDeliver);
sendToZapierDeliver(event)
                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "DELIVER",
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






