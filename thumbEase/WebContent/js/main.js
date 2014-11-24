 $(function() {
	 
	 var SearchTypes = {
			 BY_SHAPE: "BY_SHAPE",
			 BY_COLOR: "BY_COLOR",
			 BY_SIZE: "BY_SIZE"
	 }
	 
	 var PillDescriptionViewModel = function(searchType, label, code) {
		  
		 var pillDescriptionViewModel = this;
		 
		 pillDescriptionViewModel.label = label;
		 pillDescriptionViewModel.searchType = searchType;
		 pillDescriptionViewModel.code = code;
		 
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
		 
		 return buttonGroup;
	 };
	 
	 var createPillShapeButtons = function() {
		 var buttons = [];
		 
		 buttons.push(createPillShapeButton("Circle", "C48335"));
		 buttons.push(createPillShapeButton("Capsule", "C48336"));
		 buttons.push(createPillShapeButton("Clover", "C48337"));
		 buttons.push(createPillShapeButton("Diamond", "C48338"));
		 buttons.push(createPillShapeButton("Dbl. Circle", "C48339"));
		 buttons.push(createPillShapeButton("Freeform", "C48340"));
		 buttons.push(createPillShapeButton("Gear", "C48341"));
		 buttons.push(createPillShapeButton("7 Sides", "C48342"));
		 buttons.push(createPillShapeButton("6 Sides", "C48343"));
		 buttons.push(createPillShapeButton("8 Sides", "C48344"));
		 buttons.push(createPillShapeButton("Pentagon", "C48346"));
		 buttons.push(createPillShapeButton("Rectangle", "C48347"));
		 buttons.push(createPillShapeButton("Round", "C48348"));
		 buttons.push(createPillShapeButton("Circle", "C48349"));
		 buttons.push(createPillShapeButton("Square", "C48350"));
		 buttons.push(createPillShapeButton("Tear", "C48351"));
		 buttons.push(createPillShapeButton("Trapezoid", "C48352"));
		 buttons.push(createPillShapeButton("Triangle", "C48353"));
		 
		 return buttons;
	 };
	 
	 function createPillShapeButton(label, code) {
		 return new PillDescriptionViewModel(SearchTypes.BY_SHAPE, label, code);
	 }
	 
	 var createPillColorButtons = function() {
		 var buttons = [];
		 
		 buttons.push(createPillColorButton("Black", "C48323"));
		 buttons.push(createPillColorButton("Blue", "C48333"));
		 buttons.push(createPillColorButton("Brown", "C48332"));
		 buttons.push(createPillColorButton("Gray", "C48324"));
		 buttons.push(createPillColorButton("Green", "C48329"));
		 buttons.push(createPillColorButton("Orange", "C48331"));
		 buttons.push(createPillColorButton("Pink", "C48328"));
		 buttons.push(createPillColorButton("Purple", "C48327"));
		 buttons.push(createPillColorButton("Red", "C48326"));
		 buttons.push(createPillColorButton("Turquoise", "C48334"));
		 buttons.push(createPillColorButton("White", "C48325"));
		 buttons.push(createPillColorButton("Yellow", "C48330"));
		 
		 return buttons;
	 };
	 
	 function createPillColorButton(label, code) {
		 return new PillDescriptionViewModel(SearchTypes.BY_COLOR, label, code);
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
		 
		 function nextButtonGroupList() {
			 pillIdViewModel.buttonGroupList = searchFieldArray[currentSearchField];
		 }
		 
		 pillIdViewModel.nextButtonGroup = function() {
			 var nextGroupIndex = currentButtonGroup + 1;
			 if (nextGroupIndex == pillIdViewModel.buttonGroupList.length) {
				 nextGroupIndex = 0;
			 }
			 currentButtonGroup = nextGroupIndex;
			 pillIdViewModel.buttonGroup(pillIdViewModel.buttonGroupList[currentButtonGroup]);
		 };
		 
		 function incrementSearchFieldArray() {
			 var nextSearchFieldIndex = currentSearchField + 1;
			 if (nextSearchFieldIndex == searchFieldArray.length) {
				 nextSearchFieldIndex = 0;
			 }
			 currentSearchField = nextSearchFieldIndex;
		 }
		 
		 function showNextSearchField() {
			 incrementSearchFieldArray();
			 setSearchField();
			 currentButtonGroup = 0;
		 }
		 
		 function setSearchField() {
			 pillIdViewModel.buttonGroupList = searchFieldArray[currentSearchField];
		 };
		 
		 pillIdViewModel.startOver = function() {
			 clearCarousel();
			 createEmptyResults();
			 
			 currentButtonGroup = 0;
			 currentSearchField = 0;
			 
			 pillIdViewModel.buttonGroupList = searchFieldArray[currentSearchField];
			 pillIdViewModel.buttonGroup(pillIdViewModel.buttonGroupList[currentButtonGroup]);
			 
			 initializeQuery();
		 };
		 
		 pillIdViewModel.nextSearchField = function() {
			 showNextSearchField();
			 pillIdViewModel.buttonGroup(pillIdViewModel.buttonGroupList[currentButtonGroup]);
		 };
			 
		 function loadImages(responseImages) {
			 var pills = responseImages.pills;
			 
			 clearCarousel();
			 
			 createFirstSetOfImageFromResults(pills);
		 }
		 
		 function initializeQuery() {
			 pillIdViewModel.query = {
					 color: '',
					 shape: '',
					 size: ''	 
			 };
		 }
		 initializeQuery();
		 
		 pillIdViewModel.addQueryDetail = function(event) {
			 showNextSearchField();
			 pillIdViewModel.buttonGroup(pillIdViewModel.buttonGroupList[currentButtonGroup]);
			 
			 if (event.searchType == "BY_COLOR") {
				 pillIdViewModel.query.color = event.code;
			 } else if (event.searchType == "BY_SHAPE") {
				 pillIdViewModel.query.shape = event.code;
			 }  else if (event.searchType == "BY_SIZE") {
				 pillIdViewModel.query.size = event.label;
			 }
			 
			 $.ajax({
			     type: "GET",
			     url: "/rest/search",
			     data: pillIdViewModel.query
			}).done(function(response) {
				var response = jQuery.parseJSON(response);
				if (response) {

					var fnCallback = function() {
						loadImages(response);
					};
					showAlert(response.recordCount + " different pills found!", fnCallback);
				}
			});
		 }
		 
		 pillIdViewModel.showButtonGroup = true;
		 
		 pillIdViewModel.image1 = new PillImageViewModel("pillImage1", "No Results", "/images/300x300_red.png");
		 pillIdViewModel.image2 = new PillImageViewModel("pillImage2", "No Results", "/images/300x300_blue.png");
		 pillIdViewModel.image3 = new PillImageViewModel("pillImage3", "No Results", "/images/300x300_yellow.png");
		 
		 pillIdViewModel.isAlertShown = ko.observable(false);
		 
		 return pillIdViewModel;
	};
	
	function showAlert(message, fnCallBack) {
		
		var $element = $("<div class=\"alert alert-success invisible\" role=\"alert\">" + message + "</div>")
		.appendTo($("#slick"));
		
		var $slick = $("#slick");
		var heightDrop = $slick.height()/2 - 60;
		var nudgeRight = (($slick.width() - $element.width())/2) + 33;
		
		$element.css({'position':'absolute', 'left': nudgeRight + 'px', 'top': heightDrop + 'px'})
		.removeClass("invisible")
		.delay(1500)
		.fadeOut(500, null, function() {
			$element.remove();
		});
		
		if (fnCallBack) fnCallBack();
	};
	
	var PillImageViewModel = function(id, label, imageUri) {
		var pillImageViewModel = this;
		
		var defaultUri = "/images/300x300.png";
		if (!imageUri) {
			imageUri = defaultUri;
		}
		
		pillImageViewModel.label = label;
		pillImageViewModel.id = id;
		pillImageViewModel.uri = ko.observable(imageUri);
		pillImageViewModel.isActive = $("#" + pillImageViewModel.id).hasClass("active");
		
		return pillImageViewModel;
	};

	ko.applyBindings(new PillIdViewModel());
	
	$('#slick').slick({ arrows: true});
 });

