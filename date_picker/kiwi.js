var makeInput = function(datepicker) {
	var year = $("#_dp_year").val()
	var month = $("#_dp_month").val()
	var day = $("#_dp_day").val()
	var date = year + "/" + month + "/" + day
	$(datepicker).attr('value', date)
}

$.fn.datepicker =  function() {
	var hasDatePicker = false;
	return $(this).click(function(){
		var parent = $(this).parent()
		// alert(parent.find("#_dp_"))
		if (hasDatePicker) {
			console.log("has datepicker")
			$("#_dp_").remove()
			hasDatePicker = false;
		} else {
			console.log("has not datepicker")
			hasDatePicker = true;
			parent.append("<div id=\"_dp_\"></div>")
			$("#_dp_").append("<label>Year</label><select id=\"_dp_year\">")
			$("#_dp_").append("<label>Month</label><select id=\"_dp_month\">")
			$("#_dp_").append("<label>Day</label><select id=\"_dp_day\">")

			var year_options = ""
			for (var year = 1970; year <= 2100; year++) {
				if (year === 2014) {
					year_options += "<option value=\"" + year + "\" selected=\"selected\">" + year + "</option>"					
				}

				year_options += "<option value=\"" + year + "\">" + year + "</option>"
			}



			$("#_dp_year").append(
				year_options
			)

			$("#_dp_month").append(
			"<option value=\"1\">Jan</option>" +
			"<option value=\"2\">Feb</option>" +
			"<option value=\"3\">Mar</option>" +
			"<option value=\"4\">Apr</option>" +
			"<option value=\"5\">May</option>" +
			"<option value=\"6\" selected=\"selected\">Jun</option>" +
			"<option value=\"7\">July</option>" +
			"<option value=\"8\">Aug</option>" +
			"<option value=\"9\">Sep</option>" +
			"<option value=\"10\">Oct</option>" +
			"<option value=\"11\">Mov</option>" +
			"<option value=\"12\">Dec</option>")

			var day_options = ""
			for (var day = 1; day <= 31; day++) {
				if (day === 22) {
					day_options += "<option value=\"" + day + "\" selected=\"selected\">" + day + "</option>"					
				}

				day_options += "<option value=\"" + day + "\">" + day + "</option>"
			}

			$("#_dp_day").append(
				day_options
			)

			var datepicker = $(this)
			$("#_dp_year").change(function() {
				makeInput(datepicker)
			})
			$("#_dp_month").change(function() {
				makeInput(datepicker)
			})
			$("#_dp_day").change(function() {
				makeInput(datepicker)
			})

		}
	})
}

