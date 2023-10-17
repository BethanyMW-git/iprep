
export const surveyJson = {
        "title": "Welcome to the iPrep Survey! Please complete the survey so we can best determine what meal plan to send you!",
        "completedHtml": "<h3>Thank you for completing the survey</h3>",
        "completedHtmlOnCondition": [
         {
          "html": "<h3>Thank you for completing the survey. Please wait a moment while we process the results.</h3>"
         },
         {
          "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
         }
        ],
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "checkbox",
            "name": "question1",
            "title": "How many people are you preparing food for?",
            "isRequired": true,
            "choices": [
             {
              "value": "Item 3",
              "text": "2 people"
             },
             {
              "value": "Item 4",
              "text": "3 people"
             },
             {
              "value": "Item 5",
              "text": "More than 4 people"
             }
            ],
            "maxSelectedChoices": 1,
            "minSelectedChoices": 1,
            "selectAllText": "1 person"
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "checkbox",
            "name": "question2",
            "title": "What are your diet preferences?",
            "requiredErrorText": "Sorry an option needs to be selected.",
            "choices": [
             {
              "value": "Item 1",
              "text": "Vegetarian"
             },
             {
              "value": "Item 2",
              "text": "Vegan"
             },
             {
              "value": "Item 3",
              "text": "Omnivore"
             },
             {
              "value": "Item 4",
              "text": "Pescatarian"
             },
             {
              "value": "Item 5",
              "text": "Kosher"
             },
             {
              "value": "Item 6",
              "text": "Keto"
             },
             {
              "value": "Item 7",
              "text": "Halal"
             }
            ],
            "showOtherItem": true,
            "otherText": "List your other preferences here if it is not on the list.",
            "maxSelectedChoices": 1,
            "minSelectedChoices": 1
           },
           {
            "type": "checkbox",
            "name": "question3",
            "title": "Do you have any allergies or other dietary restrictions?",
            "choices": [
             {
              "value": "Item 1",
              "text": "Lactose"
             },
             {
              "value": "Item 2",
              "text": "Nuts"
             },
             {
              "value": "Item 3",
              "text": "Shellfish"
             },
             {
              "value": "Item 4",
              "text": "Gluten-Free"
             },
             {
              "value": "Item 5",
              "text": "Soy-Free"
             },
             {
              "value": "Item 6",
              "text": "Fish"
             }
            ],
            "showOtherItem": true,
            "showNoneItem": true,
            "otherText": "Other (If you don't see your allergy list it here.)",
            "maxSelectedChoices": 7
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "checkbox",
            "name": "question4",
            "title": "What type of cuisine do you like?",
            "choices": [
             {
              "value": "Item 1",
              "text": "American"
             },
             {
              "value": "Item 2",
              "text": "Mexican"
             },
             {
              "value": "Item 3",
              "text": "Japanese"
             },
             {
              "value": "Item 4",
              "text": "Chinese"
             },
             {
              "value": "Item 5",
              "text": "Thai"
             },
             {
              "value": "Item 6",
              "text": "African"
             },
             {
              "value": "Item 7",
              "text": "Indian"
             },
             {
              "value": "Item 8",
              "text": "French"
             },
             {
              "value": "Item 9",
              "text": "Mediterranean"
             }
            ],
            "showOtherItem": true,
            "otherText": "Other (If you don't see your cuisine write it in here and we will see if we can accommodate the cuisine you are looking for.)",
            "maxSelectedChoices": 10
           },
           {
            "type": "checkbox",
            "name": "question6",
            "title": "What kitchen appliances do you prefer to use?",
            "isRequired": true,
            "requiredErrorText": "Sorry, please choose an option so we know how you want to cook your food.",
            "choices": [
             {
              "value": "Item 1",
              "text": "Oven"
             },
             {
              "value": "Item 2",
              "text": "Stove"
             },
             {
              "value": "Item 3",
              "text": "Air Fryer"
             },
             {
              "value": "Item 4",
              "text": "Grill"
             },
             {
              "value": "Item 5",
              "text": "Steamer"
             },
             {
              "value": "Item 6",
              "text": "Smoker"
             }
            ]
           }
          ]
         },
         {
          "name": "page4",
          //MAKE A SELECT ALL BUTTON
          "elements": [
           {
            "type": "checkbox",
            "name": "question5",
            "title": "How spicy do you like your food?",
            "choices": [
             {
              "value": "Item 1",
              "text": "Hotter than Hell hot"
             },
             {
              "value": "Item 2",
              "text": "Super hot"
             },
             {
              "value": "Item 3",
              "text": "hot"
             },
             {
              "value": "Item 4",
              "text": "medium"
             },
             {
              "value": "Item 5",
              "text": "mild"
             },
             {
              "value": "Item 6",
              "text": "no spice"
             }
            ]
           }
          ]
         },
         {
          "name": "page5",
          "elements": [
           {
            "type": "checkbox",
            "name": "question7",
            "title": "Are there any ingredients you don't want because of texture or taste?(looking at you cilantro)",
            "choices": [
             {
              "value": "Item 1",
              "text": "Cilantro"
             },
             {
              "value": "Item 2",
              "text": "Tomatoes"
             },
             {
              "value": "Item 3",
              "text": "Mushrooms"
             },
             {
              "value": "Item 4",
              "text": "Onions"
             },
             {
              "value": "Item 5",
              "text": "Olives"
             },
             {
              "value": "Item 6",
              "text": "Beets"
             },
             {
              "value": "Item 7",
              "text": "Liver"
             }
            ],
            "showOtherItem": true,
            "otherText": "Other (If you don't see your ingredient listed, put it here.)",
            "maxSelectedChoices": 8
           }
          ]
         }
        ],
        "showQuestionNumbers": "off",
       };