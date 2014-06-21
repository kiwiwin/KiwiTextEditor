
var showModeFunction = function(modelName) {
	$("#modeHint").text('Current Mode: ' + modelName)
}

var cleanLastModeFootPrint = function() {
	$("#linesEditor").remove()
	$('.currentComponent').removeClass('currentComponent')
}

$.fn.cleanComponentLastModeFootPrint = function() {
	return this.draggable({ disabled: true }).
				removeClass('layoutModel').
				removeClass('viewModel').
				removeClass('editModel').
				unbind('click').
				attr('contenteditable', false)
}

$.fn.toEditModel = function(){
	showModeFunction('EditMode')
	cleanLastModeFootPrint()

    return this.each(function(){
  		$(this).cleanComponentLastModeFootPrint().
  				addClass('editModel')

		$(this).click(function(){
			if (!$(this).hasClass('currentComponent')) {
				$(".currentComponent").removeHeightEditor()
				$(".currentComponent").removeClass("currentComponent")
				$(this).addClass('currentComponent')
				$(this).addHeightEditor()		

				$("#linesEditor input").change(function(){
					var height = $(this).val()
					$(".currentComponent").attr('style',  "height: " + height + "px");
				})		
			}
		})
    });
};

$.fn.addHeightEditor = function(){
	this.append('<div id="linesEditor">height: <input type="number">px</div>')
}

$.fn.removeHeightEditor = function(){
	this.find('#linesEditor').remove()
}

$.fn.toViewModel = function(){
	showModeFunction('ViewMode')
	cleanLastModeFootPrint()

	return this.each(function(){
		$(this).cleanComponentLastModeFootPrint().
				addClass('viewModel').
				attr('contenteditable', true)
	})
}

$.fn.toLayoutModel = function(){
	showModeFunction('LayoutMode')
	cleanLastModeFootPrint()	

	return this.each(function(){
		$(this).cleanComponentLastModeFootPrint().
				addClass('layoutModel').
				draggable({ disabled: false });

		$(this).click(function(){
			$(".currentComponent").removeClass('currentComponent')			
			$(this).addClass('currentComponent')
		})
	})
}