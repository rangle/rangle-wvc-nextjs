$(function () {
	$('#calendar').fullCalendar({
		locale: wvcCalLocal,
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'listDay,listWeek,month'
		},
		buttonText: {
			today: wvcTodayLabel,
			month: wvcMonthLabel,
			week: wvcWeekLabel,
			day: wvcDayLabel
		},
		defaultView: 'month',
		navLinks: false,
		eventLimit: true,
		eventSources: [{ url: wvcEventSource }],
		eventRender: function (event, element) {
			var selectedFilterVal = $('#ddlProvinceFilter').val();
			if (selectedFilterVal !== 'ALL' && selectedFilterVal !== event.province) {
				return false;
			}
		},
		eventOrder: 'sortPriority, title'
		//,
		//eventOrder: function(eventA, eventB) {
		//	return (eventA.miscProps.eventnumber < eventB.miscProps.eventnumber) ? -1 : 1;
		//}
  });
  var lang = document.documentElement.lang;
  var nextButton = document.getElementsByClassName("fc-next-button");
  var prevButton = document.getElementsByClassName("fc-prev-button");
  var monthElement = document.getElementsByClassName("fc-center");

  monthElement[0].setAttribute("role", "alert");
  monthElement[0].setAttribute("aria-live", "polite");
  monthElement[0].nodeValue.replace("/", "to");


  if (lang == "en-CA") {
    nextButton[0].setAttribute("aria-label", "Next Month");
    prevButton[0].setAttribute("aria-label", "Prev Month");
  }
  else if (lang == "fr-CA") {
    nextButton[0].setAttribute("aria-label", "Le mois prochain");
    prevButton[0].setAttribute("aria-label", "Le mois précédent");
  }
});

function provinceFilterChanged() { $('#calendar').fullCalendar('rerenderEvents'); } 



$(window).on("load resize", function (e) {
	if ($(window).width() <= 770) {
		$('.fc-listWeek-button').click();
	}
	else {
    $('.fc-month-button').click();
	}
});
