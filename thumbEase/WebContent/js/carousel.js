function composeImageUri(imageId) {
	return "http://pillbox.nlm.nih.gov/assets/small/" + imageId + ".jpg";
}

function getImageUri(pill) {
	var imageId = "no_image";
	if (pill.hasImage) {
		imageId = pill.imageId;
	}
	return composeImageUri(imageId);
}

function clearCarousel() {
	var $slick = $("#slick");
	var imageCount = $slick.find(".image-carousel-container").length;
	for (var i = 0; i < imageCount; i++) {
		$slick.slickRemove(0);
	}
};

function createCarouselImage(imageUri) {
	var carouselContainer = $("<div class=\"image-carousel-container\"></div>");
	carouselContainer.append($("<img height=\"285\" width=\"285\" src=\""
			+ imageUri + "\">"));
	$("#slick").slickAdd(carouselContainer);
}

function createIfExists(pill) {
	if (pill) {
		var imageUri = getImageUri(pill);
		createCarouselImage(imageUri);
	}
}

function createFirstSetOfImageFromResults(pills) {
	var preloadAmount = 10;
	for (var i = 0; i < preloadAmount; i++) {
		createIfExists(pills[i]);
	}

	if (!pills || pills.length == 0) {
		createEmptyResults();
	}
}

function createEmptyResults() {
	createCarouselImage("/images/300x300_red.png");
	createCarouselImage("/images/300x300_blue.png");
	createCarouselImage("/images/300x300_yellow.png");
}