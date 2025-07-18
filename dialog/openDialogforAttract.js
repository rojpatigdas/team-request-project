/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforAttract(event) {
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
                "header": "ATTRACT",
                "widgets": [
                  {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                  // {
                  //   "textInput": {
                  //     "label": "Client Primary Domain*",
                  //     "type": "SINGLE_LINE",
                  //     "name": "clientDomainAttract"
                  //   }
                  // },

                  


              //      {
              //       "textInput": {
              //         "label": "Hiver Permalink*",
              //         "type": "SINGLE_LINE",
              //         "name": "hiverPermalinkAttract"
              //       }
              //     },

              // {
              //   // Add an empty section for spacing
              // },
              // {
              //   // Add an empty section for spacing
              // },                  
              //     {
              //         "selectionInput": {
              //           "type": "RADIO_BUTTON",
              //           "label": "CC Membership*",
              //           "name": "ccMembershipAttract",
              //           "items": [
              //             {
              //               "text": "Growth",
              //               "value": "Growth",
              //               "selected": false
              //             },
              //             {
              //               "text": "Support",
              //               "value": "Support",
              //               "selected": false
              //             },
              //             {
              //               "text": "Other, please indicate:",
              //               "value": "Other",
              //               "selected": false
              //             },
              //           ]
              //         }
              //       },

              //     {
              //       "textInput": {
              //         "label": "If 'Other' is selected, please indicate",
              //         "type": "SINGLE_LINE",
              //         "name": "otherCCMembershipAttract"
              //       }
              //      },

                                  
              // {
              //   // Add an empty section for spacing
              // },
              // {
              //   // Add an empty section for spacing
              // },
                  

                   {
                      "selectionInput": {
                        "type": "CHECK_BOX",
                        "label": "Help needed with*",
                        "name": "helpNeededAttract",
                        "items": [
                          {
                            "text": "Graphic design",
                            "value": "Graphic design",
                            "selected": false
                          },
                          {
                            "text": "Video editing",
                            "value": "Video editing",
                            "selected": false
                          },
                          {
                            "text": "Broadcast email",
                            "value": "Broadcast email",
                            "selected": false
                          },
                          {
                            "text": "Copy",
                            "value": "Copy",
                            "selected": false
                          },
                          {
                            "text": "Email",
                            "value": "Email",
                            "selected": false
                          },
                          {
                            "text": "Script",
                            "value": "Script",
                            "selected": false
                          },
                          {
                            "text": "Thumbnail",
                            "value": "Thumbnail",
                            "selected": false
                          },
                          {
                            "text": "D2 WP Blogs",
                            "value": "D2 WP Blogs",
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
                      "textParagraph": {
                           "text": "Region (N/A if not applicable)*"
                        }
                    },

                   {
                    "textInput": {
                      "label": "Region*",
                      "type": "SINGLE_LINE",
                      "name": "regionAttract"
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
                      "textParagraph": {
                           "text": "Assets Link (N/A if not applicable)*"
                        }
                    },

                   {
                    "textInput": {
                      "label": "Assets Link*",
                      "type": "SINGLE_LINE",
                      "name": "assetsLinkAttract"
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
                    // Add an empty section for spacing
                   },
                   
                  {
                      "textParagraph": {
                           "text": "Size (N/A if not applicable)*"
                        }
                    },

                   {
                    "textInput": {
                      "label": "Size*",
                      "type": "SINGLE_LINE",
                      "name": "sizeAttract"
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
                    // Add an empty section for spacing
                   },
                   


                   {
                      "textParagraph": {
                           "text": "Request Details*"
                        }
                    },

                   {
                    "textInput": {
                      "label": "Request Details*",
                      "type": "MULTIPLE_LINE",
                      "name": "requestDetailsAttract"
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
                    // Add an empty section for spacing
                   },
                   


                   {
                      "textParagraph": {
                           "text": "Additional Requested Changes (N/A if not applicable)*"
                        }
                    },

                   {
                    "textInput": {
                      "label": "Additional Requested Changes*",
                      "type": "MULTIPLE_LINE",
                      "name": "additionalRequestsAttract"
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
                      "dateTimePicker": {
                        
                        "label": "Deadline*",
                        "name": "deadlineAttract",
                        "type": "DATE_ONLY",
                        "valueMsEpoch": epochValue
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
                    "buttonList": {
                      "buttons": [
                        {
                          "text": "Submit",
                          "onClick": {
                            "action": {

                                "function": "nextDialogforAttract",
                                "parameters": [
                                  {
                                    "key": "nextDialogforAttract",
                                    "value": "nextDialogforAttract"
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







function formatDate(date) {
  // Get the individual components of the date
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');

  // Return the formatted date string in the YYYY-MM-DD format
  return `${year}-${month}-${day}`;
}


function nextDialogforAttract(event) {
  sendToZapierAttract(event)

                return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ATTRACT",
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


