 $(function() {
	 
	 var ButtonGroup = function(isInitiallyVisible) {
		 
		 var buttonGroup = this;
		 
		 buttonGroup.show = ko.observable(isInitiallyVisible);
		 
		 return buttonGroup;
	 };
	 
	 var PillIdViewModel = function() {
		
		 var pillIdViewModel = this;
		 
		 pillIdViewModel.name = "test";
		 
		 var buttonGroupArray = [];
		 pillIdViewModel.buttonGroupShape1 = ko.observable(new ButtonGroup(true));
		 
		 buttonGroupArray.push(pillIdViewModel.buttonGroupShape1);
		 
		 pillIdViewModel.buttonGroupShape2 = ko.observable(new ButtonGroup(false));
		 
		 buttonGroupArray.push(pillIdViewModel.buttonGroupShape2);
		 
		 //var currentlyShowingButtonIndex = 1;
		 
		 pillIdViewModel.nextButtonGroup = function() {
			 console.log("Button fired.");
//			 currentlyShowingButtonIndex++;
//			 hideAll;
//			 if (currentlyShowingButtonIndex == 0) {
//				 
//			 }
			 return true;
		 };
		 
		 return pillIdViewModel;
	};

	ko.applyBindings(new PillIdViewModel());
 });

