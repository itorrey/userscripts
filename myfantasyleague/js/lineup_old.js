(function() {

	 var pageId = $('body')[0].id;

	 if(pageId != 'body_options_02') {
	 	return;
	 }

	 var checkboxes;
	 var selected;
	 var selectedNode;
	 var allowed;
	 var allowedNode;

	 function init() {
	 	createTotalsBoard();
	 	checkboxes = $('.report input[type^="checkbox"]');
	 	updateCount();

		checkboxes.change(function(elm, action) {
		 	updateCount();
		});
	 }

	 //var players = $('.report input[type^="checkbox"]').parent();
	 //var selected = $('.report input[type^="checkbox"]:checked');


	 function updateCount() {
	 	selected = $('.report input[type^="checkbox"]:checked').length;
	 	selectedNode.text(selected);
	 	console.log(selected);
	 }


	 function createTotalsBoard() {
	 	var board = '<div class="totalsBoard"><span id="selectedPlayers"></span><span id="allowedPlayers"></span></div>';
	 	$(board).appendTo(document.body);
	 	selectedNode = $('#selectedPlayers');
	 	allowedNode = $('#allowedPlayers');
	 }

	init();

}).call(this);