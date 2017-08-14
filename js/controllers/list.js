(function(){
	angular.module("mainApp")
	       .controller("listCtrl",ListController);

	       ListController.$inject = ['quizMetrics'];

	       function ListController(quizMetrics){
	       	
	       	var vm = this;
	       	vm.quizMetrics = quizMetrics;
	       	vm.activateQuiz = activateQuiz;

	       	function activateQuiz(){

	       		quizMetrics.changeState("quiz",true);
	       	}
	       }
})();