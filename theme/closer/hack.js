$(document).ready(function() {

	if (window.location.pathname.length < 2) {
		//$("#page-wrapper").removeClass("open");
	}

	$('h4#search-help-label').text('Advanced Searches');

	jQuery( ".accordion" ).accordion({
		collapsible: true,
		heightStyle: "content",
		active : false
	});

	if ($('#property-external-instrument-location').length) {
		var link = $('#property-external-instrument-location').find('a').eq(0).prop('href');
		if (link != undefined && link.toLowerCase().substr(link.length - 4) == '.pdf') {
			$details_pane = $('#details');
			$pane_nav = $details_pane.parent().prev();
			$pane_nav.append('<li role="presentation"><a href="#pdf" aria-controls="pdf" role="tab" data-toggle="tab" aria-expanded="false">PDF</a></li>');

			$details_pane.after('<div role="tabpanel" class="tab-pane" id="pdf"><embed src="' + link + '" width="' + $pane_nav.width() +
				'" height="700" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"></div>');
		}
	}

	$(function () {
	  $('[data-toggle="popover"]').popover({
		  html: true,
		  placement: 'right',
		  container: '#sidebar-wrapper',
		  trigger: 'click',
		  content: function() {
			  console.log($('#'+$(this).data('content-id')).html());
			  return $('#'+$(this).data('content-id')).html();
		  }
	  })
    })

    if (!localStorage.getItem('home_study_filter')) {
		var studies = [
			{
				"identifier": "uk.cls.bcs70:75fe4705-0c94-4f75-b1e6-ad9c61ffde26:8",
				"label": "1970 British Cohort Study",
				"checked": true
			},
			{
				"identifier":  "uk.alspac:c6601e78-0f74-446a-a5f1-7c73a1984b4e:17",
				"label": "Avon Longitudinal Study of Parents and Children",
				"checked": true
			},
			{
				"identifier": "uk.mrcleu-uos:d20a56d4-22e8-4d70-99cd-1d3a063073b1:5",
				"label": "Hertfordshire Cohort Study",
				"checked": true
			},
			{
				"identifier": "uk.cls.mcs:0d8a7220-c61b-4542-967d-a40cb5aca430:4",
				"label": "Millennium Cohort Study",
				"checked": true
			},
			{
				"identifier": "uk.cls.ncds:524c8f92-493f-4660-90c4-0aa7ac3d2640:6",
				"label": "National Child Development Study",
				"checked": true
			},
			{
				"identifier":  "uk.lha:f8d235f7-49e5-4568-905e-7f1646e241eb:7",
				"label": "National Survey of Health and Development",
				"checked": true
			},
			{
				"identifier": "uk.mrcleu-uos:03bdaf2d-f57a-487f-89f9-74150bfc3fad:7",
				"label": "Southampton Women's Survey",
				"checked": true
			},
			{
				"identifier": "uk.iser:44a7a09e-4703-498c-96f7-0131b296c917:11",
				"label": "Understanding Society",
				"checked": true
			}
		];
		localStorage.setItem('home_study_filter', JSON.stringify(studies));
	}

	if (!localStorage.getItem('home_ls_filter')) {
		var lifestages = [
							{
								"identifier": "Pregnancy, birth and infancy",
								"label": "Pregnancy, birth and infancy",
								"checked": true
							},
							{
								"identifier":  "Early years",
								"label": "Early years",
								"checked": true
							},
							{
								"identifier": "Childhood",
								"label": "Childhood",
								"checked": true
							},
							{
								"identifier": "Adolescence",
								"label": "Adolescence",
								"checked": true
							},
							{
								"identifier": "Mid-adulthood",
								"label": "Mid-adulthood",
								"checked": true
							},
							{
								"identifier":  "Third age",
								"label": "Third age",
								"checked": true
							},
							{
								"identifier": "Other",
								"label": "Other",
								"checked": true
							}
		];
		localStorage.setItem('home_ls_filter', JSON.stringify(lifestages));
	}

	var refresh_home_counts = function(studies, lifestages) {

		if (studies) {
			 var checked_studies = studies.filter(function(x) { return x.checked });
			 if (checked_studies.length == 0 || checked_studies.length == 8) {
				 $('#study-count').text('All');
			 } else {
				 $('#study-count').text(checked_studies.length);
			 }


			 $('#home-search-form input[name="SelectedSetRoots[]"]').remove();
			 for (var i = 0; i < checked_studies.length; i++) {
				 $('<input>',{
					 type: 'hidden',
					 name: 'SelectedSetRoots[]',
					 value: checked_studies[i].identifier
				 }).appendTo('#home-search-form');
			 }
	 	}

		if (lifestages) {
			 var checked_lifestages = lifestages.filter(function(x) { return x.checked });
			 if (checked_lifestages.length == 0 || checked_lifestages.length == 7) {
						 $('#ls-count').text('All');
					 } else {
						 $('#ls-count').text(checked_lifestages.length);
			 }

			 $('#home-search-form input[name="SelectedLifeStages[]"]').remove();
			 for (var i = 0; i < checked_lifestages.length; i++) {
						 $('<input>',{
							 type: 'hidden',
							 name: 'SelectedLifeStages[]',
							 value: checked_lifestages[i].identifier
						 }).appendTo('#home-search-form');
			 }
		}
	};

	if($('.home').length) {
		var studies = JSON.parse(localStorage.getItem('home_study_filter'));
		var lifestages = JSON.parse(localStorage.getItem('home_ls_filter'));
		refresh_home_counts(studies, lifestages);

		$studyselector = $('#studyselector');
		$lsselector = $('#lsselector');
		$.each(studies,function(i, study)
		{
			$studyselector.find('.modal-body').first().append('<div class="checkbox"><label><input type="checkbox" value="' +
				study.identifier + (study.checked ? '" checked="checked">' : '">') + study.label + '</label></div>');
		});
		$.each(lifestages,function(i, ls)
		{
			$lsselector.find('.modal-body').first().append('<div class="checkbox"><label><input type="checkbox" value="' +
				ls.identifier + (ls.checked ? '" checked="checked">' : '">') + ls.label + '</label></div>');
		});
	}

	setInterval(function() {
		$main = $('#main-menu');
		$sidebar_div = $('.sidebar-div');
		$help = $('#help-menu');
		if (($main.height() + $sidebar_div.height() + $help.height() + 128) > $('body').height()) {
			$('#sidebar-wrapper').css('overflowY', 'auto');
			$help.css('position', 'static');
		} else {
			$('#sidebar-wrapper').css('overflowY', '');
			$help.css('position', 'absolute');
		}
	}, 50);

    $('#studyselector input[type="checkbox"]').change(function() {
			var studies = JSON.parse(localStorage.getItem('home_study_filter'));
			var identifier = $(this).prop('value');
			var index = studies.findIndex(function(x) { return x.identifier == identifier });
	         if($(this).is(":checked")) {
	             studies[index].checked = true;
	         } else {
				 studies[index].checked = false;
			 }
			 localStorage.setItem('home_study_filter', JSON.stringify(studies));

			 refresh_home_counts(studies, null);
    });

    $('#lsselector input[type="checkbox"]').change(function() {
				var lifestages = JSON.parse(localStorage.getItem('home_ls_filter'));
				var identifier = $(this).prop('value');
				var index = lifestages.findIndex(function(x) { return x.identifier == identifier });
		         if($(this).is(":checked")) {
		             lifestages[index].checked = true;
		         } else {
					 lifestages[index].checked = false;
				 }
				 localStorage.setItem('home_ls_filter', JSON.stringify(lifestages));

				 refresh_home_counts(null, lifestages);
    });
});
