(function(){
	angular.module("mainApp")
	       .controller("resultsCtrl", ResultsController);


ResultsController.$inject = ['quizMetrics'];
	       function ResultsController(quizMetrics){
	       	var vm = this;
            vm.quizMetrics = quizMetrics;

	       }

})