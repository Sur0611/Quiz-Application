(function(){
	angular.module("mainApp")
	.factory("DataService", DataFactory);

	function DataFactory(){
		var dataObj = {
			quizQuestions: quizQuestions,
         correctAnswers:correctAnswers
		};
		return dataObj;
	}
   
   var correctAnswers = [1,2,3,0,2,0,3,2,0,3];

   var quizQuestions = [
   {
   	id:1,
   	type: "text",
   	text: "Question 1",
   	possibilities: [{
   		answer: "Option 1"
   	},
   	{
   		answer: "Option 2"
   	},
   	{
   		answer: "Option 3"
   	},
   	{
   		answer: "Option 4"
   	}],
   	selected: null,
   	correct: null
   },
   {
   	id:2,
   	type: "text",
   	text: "Question 2",
   	possibilities: [{
   		answer: "Option 1"
   	},
   	{
   		answer: "Option 2"
   	},
   	{
   		answer: "Option 3"
   	},
   	{
   		answer: "Option 4"
   	}],
   	selected: null,
   	correct: null
   },
   {
   	id:3,
   	type: "text",
   	text: "Question 3",
   	possibilities: [{
   		answer: "Option 1"
   	},
   	{
   		answer: "Option 2"
   	},
   	{
   		answer: "Option 3"
   	},
   	{
   		answer: "Option 4"
   	}],
   	selected: null,
   	correct: null
   },
   {
   	id:4,
   	type: "text",
   	text: "Question 4",
   	possibilities: [{
   		answer: "Option 1"
   	},
   	{
   		answer: "Option 2"
   	},
   	{
   		answer: "Option 3"
   	},
   	{
   		answer: "Option 4"
   	}],
   	selected: null,
   	correct: null
   },
   {
   	id:5,
   	type: "text",
   	text: "Question 5",
   	possibilities: [{
   		answer: "Option 1"
   	},
   	{
   		answer: "Option 2"
   	},
   	{
   		answer: "Option 3"
   	},
   	{
   		answer: "Option 4"
   	}],
   	selected: null,
   	correct: null
   },
      {
      id:6,
      type: "text",
      text: "Question 6",
      possibilities: [{
         answer: "Option 1"
      },
      {
         answer: "Option 2"
      },
      {
         answer: "Option 3"
      },
      {
         answer: "Option 4"
      }],
      selected: null,
      correct: null
   },
      {
      id:7,
      type: "text",
      text: "Question 7",
      possibilities: [{
         answer: "Option 1"
      },
      {
         answer: "Option 2"
      },
      {
         answer: "Option 3"
      },
      {
         answer: "Option 4"
      }],
      selected: null,
      correct: null
   },
      {
      id:8,
      type: "text",
      text: "Question 8",
      possibilities: [{
         answer: "Option 1"
      },
      {
         answer: "Option 2"
      },
      {
         answer: "Option 3"
      },
      {
         answer: "Option 4"
      }],
      selected: null,
      correct: null
   },
      {
      id:9,
      type: "text",
      text: "Question 9",
      possibilities: [{
         answer: "Option 1"
      },
      {
         answer: "Option 2"
      },
      {
         answer: "Option 3"
      },
      {
         answer: "Option 4"
      }],
      selected: null,
      correct: null
   },
      {
      id:10,
      type: "text",
      text: "Question 10",
      possibilities: [{
         answer: "Option 1"
      },
      {
         answer: "Option 2"
      },
      {
         answer: "Option 3"
      },
      {
         answer: "Option 4"
      }],
      selected: null,
      correct: null
   },
   ] 
})();