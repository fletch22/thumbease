<!DOCTYPE html>
<html lang="en">
<head>
<title>HealthcareMN Hackathon</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/bootstrap-extensions.css">
<link rel="stylesheet" type="text/css" href="/slick/slick.css"/>
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
	
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script src="/js/ko.js"></script>
<script type="text/javascript" src="/slick/slick.js"></script>

</head>

<body>
	<div>
		<nav role="navigation" class="navbar navbar-default">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" data-target="#navbarCollapse"
					data-toggle="collapse" class="navbar-toggle">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a href="#" class="navbar-brand">Thumbeasy Pill ID</a>
			</div>
			<!-- Collection of nav links and other content for toggling -->
			<div id="navbarCollapse" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#">Setup</a></li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-xs-12" style="padding:0 40px 0 40px">
				<div id="slick">
					<div class="image-carousel-container">
						<div class="image-carousel" data-bind="text: image1.label, attr: {id: image1.id}"></div>
						<img src="" data-bind="attr: {src:''}">
					</div>
				  	<div class="image-carousel-container">
						<div class="image-carousel" data-bind="text: image2.label, attr: {id: image2.id}"></div>
						<img src="" data-bind="attr: {src:''}">
					</div>
				  	<div class="image-carousel-container">
						<div class="image-carousel" data-bind="text: image3.label, attr: {id: image3.id}"></div>
						<img src="" data-bind="attr: {src:''}">
					</div>
				</div>
			</div>
		</div>
		<div class="row row-centered">
			<div class="col-xs-12 col-centered col-fixed"
				data-bind="template: { name: 'button-group-template', data: $data }"></div>
		</div>
	</div>

	<!-- Templates -->
	<script type="text/html" id="button-group-template">
		<div class="content content-text-centered">
			<!-- ko if: showButtonGroup -->
				<table align="center">
					<tr>
						<td>
							<div data-bind="template: { name: 'regular-button-template', data: buttonGroup().items()[0] }"></div>
						</td>
						<td>
							<!-- ko if: buttonGroup().hasElementTwo -->
								<div data-bind="template: { name: 'regular-button-template', data: buttonGroup().items()[1] }"></div>
							<!-- /ko -->
						</td>
					</tr>
					<tr>
						<td>
							<!-- ko if: buttonGroup().hasElementThree -->
								<div data-bind="template: { name: 'regular-button-template', data: buttonGroup().items()[2] }"></div>
							<!-- /ko -->
						</td>
						<td>
							<div data-bind="template: { name: 'other-button-template'}"></div>
						</td>
					</tr>
				</table>
			<!-- /ko -->
		</div>
	</script>
	<script type="text/html" id="regular-button-template">
		<a href="#" class="btn btn-primary btn-xlarge" role="button" data-bind="{click: $root.addQueryDetail, html: label }"></a>
	</script>
	<script type="text/html" id="other-button-template">
		<a href="#" class="btn btn-primary btn-xlarge" role="button" data-bind="{click: nextButtonGroup}">Other »</a>
	</script>
	<!-- End Templates -->

	<script src="/js/main.js"></script>
</body>
</html>