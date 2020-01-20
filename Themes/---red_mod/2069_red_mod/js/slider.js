

                    $(document).ready(function() {
						// top example
						$('.roundabout-example ul').roundabout({
							'easing': 'easeOutExpo',
							'duration': 500,
							'btnNext': '.next',
							'btnPrev': '.previous'
						});
						
						$(window).resize(function() {
							$('.roundabout-example ul').roundabout_animateToBearing($.roundabout_getBearing($('.roundabout-example ul')));
						})
					});

                