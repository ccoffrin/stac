//Sub Class for Data view - Implemented as a static class.
VIEWS.DataView = (function(){
	return {
		returnToView: function() {
			d3.selectAll(".warning").each(function(d) {d3.select(this).classed("warning", false); });
			d3.selectAll(".warning-stroke").each(function(d) {d3.select(this).classed("warning-stroke", false); });
			d3.selectAll(".error").each(function(d) {d3.select(this).classed("error", false); });
			d3.selectAll(".error-stroke").each(function(d) { d3.select(this).classed("error-stroke", false); });
			d3.selectAll(".errorWarning").each(function(d) { d3.select(this).classed("errorWarning", false); });
			
			//For Line Charge Decorators.
			d3.selectAll(".LineChargeDecoErrorWarning, .lineChargeEdges").classed("LineChargeDecoErrorWarning", false)
																								.attr("style", function(d) {
																										//Checking if the status of the element is ON or OFF as this is required for the Charge Line Edge Decorator.
																										if(this.className.baseVal.indexOf("OffStatus") !== -1) {
																											return "fill:url(#LineChargeGradientOffStatus);";
																										}
																										else {
																											return "fill:url(#LineChargeGradient);";
																										}
																									});
		},
	}
})();