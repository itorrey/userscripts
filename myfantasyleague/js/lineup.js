define('lineup', 
    [], 
    // module definition function
    // dependencies (foo and bar) are mapped to function parameters
    function () {
        // return a value that defines the module export
        // (i.e the functionality we want to expose for consumption)
        var checkboxes;
 		var selected;
 		var selectedNode;
 		var allowed;
 		var allowedNode;
    
        // create your module here
        var lineup = {
        	
	 		init:function(){
	 			
	 			//createTotalsBoard();
	 			checkboxes = $('.report input[type^="checkbox"]');
	 			this.updateCount();

				checkboxes.change(function(elm, action) {
		 			lineup.updateCount();
				});
	 		},

            updateCount:function(){
                selected = $('.report input[type^="checkbox"]:checked').length;
	 			//selectedNode.text(selected);
	 			console.log(selected);
            }
        }
 
        return lineup;
});