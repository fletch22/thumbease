 $(function() {
	 
	 var SearchTypes = {
			 BY_SHAPE: "BY_SHAPE",
			 BY_COLOR: "BY_COLOR"
	 }
	 
	 var PillDescriptionViewModel = function(searchType, label) {
		  
		 var pillDescriptionViewModel = this;
		 
		 pillDescriptionViewModel.label = label;
		 pillDescriptionViewModel.searchType = searchType;
		 
		 return pillDescriptionViewModel;
	 };
	 
	 var PillButtonGroup = function() {
		 
		 var buttonGroup = this;
		 
		 buttonGroup.items = ko.observableArray([]);
		 
		 buttonGroup.hasElementTwo = ko.computed(function() {
			 return buttonGroup.items().length > 1;
		 });
		 
		 buttonGroup.hasElementThree = ko.computed(function() {
			 return buttonGroup.items().length > 2;
		 });
		 
		 buttonGroup.hasElementTwo 
		 
		 return buttonGroup;
	 };
	 
	 var createPillShapeButtons = function() {
		 var buttons = [];
		 
		 buttons.push(createPillShapeButton("7 Sides"));
		 buttons.push(createPillShapeButton("Oval"));
		 buttons.push(createPillShapeButton("Square"));
		 buttons.push(createPillShapeButton("Triangle"));
		 buttons.push(createPillShapeButton("Dble Circ."));
		 
		 return buttons;
	 };
	 
	 function createPillShapeButton(label) {
		 return new PillDescriptionViewModel(SearchTypes.BY_COLOR, label)
	 }
	 
	 var createPillColorButtons = function() {
		 var buttons = [];
		 
		 buttons.push(createPillColorButton("Black"));
		 buttons.push(createPillColorButton("Blue"));
		 buttons.push(createPillColorButton("Brown"));
		 buttons.push(createPillColorButton("Gray"));
		 buttons.push(createPillColorButton("Green"));
		 buttons.push(createPillColorButton("Orange"));
		 buttons.push(createPillColorButton("Pink"));
		 buttons.push(createPillColorButton("Purple"));
		 buttons.push(createPillColorButton("Red"));
		 buttons.push(createPillColorButton("Turquoise"));
		 buttons.push(createPillColorButton("White"));
		 buttons.push(createPillColorButton("Yellow"));
		 
		 return buttons;
	 };
	 
	 function createPillColorButton(label) {
		 return new PillDescriptionViewModel(SearchTypes.BY_COLOR, label)
	 }
	 
	 function createGroupList(fnCreateButtons) {
		 
		 var listOfButtons = fnCreateButtons();
		 
		 var index = 0;
		 var groupArray = [];
		 var pillButtonGroup = null;
		 for (var i = 0; i < listOfButtons.length; i++) {
			 if (index == 0) {
				 var showGroup = groupArray.length == 0;
				 pillButtonGroup = new PillButtonGroup(showGroup);
				 groupArray.push(pillButtonGroup);
			 }
			 pillButtonGroup.items.push(listOfButtons[i]);
			 index++;
			 if (index > 2) index = 0;
		 }
		 
		 return groupArray;
	 }
	 
	 var createShapeGroupList = function() {
		 return createGroupList(createPillShapeButtons);
	 };
	 
	 var createColorGroupList = function() {
		 return createGroupList(createPillColorButtons);
	 };
	 
	 var PillIdViewModel = function() {
		
		 var pillIdViewModel = this;
		 
		 var searchFieldArray = [];
		 var shapeGroupList = createShapeGroupList();
		 searchFieldArray.push(shapeGroupList);
		 
		 var colorGroupList = createColorGroupList();
		 searchFieldArray.push(colorGroupList);
		 
		 var currentSearchField = 0;
		 var currentButtonGroup = 0;
		 
		 pillIdViewModel.buttonGroupList = searchFieldArray[currentSearchField];
		 pillIdViewModel.buttonGroup = ko.observable(pillIdViewModel.buttonGroupList[currentButtonGroup]);
		 
		 pillIdViewModel.nextButtonGroup = function() {
			 var nextGroupIndex = currentButtonGroup + 1;
			 if (nextGroupIndex == pillIdViewModel.buttonGroupList.length) {
				 var nextSearchFieldIndex = currentSearchField + 1;
				 if (nextSearchFieldIndex == searchFieldArray.length) {
					 nextSearchFieldIndex = 0;
				 }
				 currentSearchField = nextSearchFieldIndex;
				 pillIdViewModel.buttonGroupList = searchFieldArray[currentSearchField];
				 nextGroupIndex = 0;
			 }
			 currentButtonGroup = nextGroupIndex;
			 pillIdViewModel.buttonGroup(pillIdViewModel.buttonGroupList[currentButtonGroup]);
		 };
		 
		 pillIdViewModel.addQueryDetail = function(event) {
			 console.log("Clicked add query detail: ", event);
		 }
		 
		 pillIdViewModel.showButtonGroup = true;
		 
		 pillIdViewModel.image1 = new PillImage("pillImage1");
		 pillIdViewModel.image2 = new PillImage("pillImage2");
		 pillIdViewModel.image3 = new PillImage("pillImage3");
		 
		 return pillIdViewModel;
	};
	
	var PillImage = function(id) {
		var pillImage = this;
		
		pillImage.id = id;
		pillImage.uri = "";
		pillImage.isActive = $()
		
		return pillImage;
	};

	ko.applyBindings(new PillIdViewModel());
	
	$('#slick').slick({ arrows: true});
 });

