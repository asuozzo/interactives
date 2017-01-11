// when the dropdown changes,
$(document).ready(function() {
    $("#opioid-list").change(function() {
        $('#opioidtype').html($(this).find("option:selected").text());
        // $('#opioidtype').html($(this).val());
    }).change();
});

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = parseInt(d3.select('#chart').style('width'), 10),
    width = width - margin.left - margin.right,
		height = 300;

// Parse the date / time
var	parseDate = d3.time.format("%Y").parse;

var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .05)

var y = d3.scale.linear()
	.range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.time.format("%Y"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var chart = d3.select("#chart").append("svg")
    .style("width", (width + margin.left + margin.right) + "px")
    .style("height", height + margin.top + margin.bottom)
  .append("g")
    .attr('transform', 'translate(' + [margin.left, margin.top] + ')');


function drawChart(opioidType){

	d3.csv("vtOverdoses.csv", function(error, data) {

			data.forEach(function(d) {
					d.Year = parseDate(d.Year);
			});

		x.domain(data.map(function(d) { return d.Year; }));
		y.domain([0, 76]);


		chart.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis)
			.selectAll("text")
				.style("text-anchor", "end")
        .attr("font-size", "1.3em")
				.attr("dx", "1em")
				.attr("dy", "1em");

		chart.append("g")
				.attr("class", "y axis")
				.call(yAxis)
			.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", "-2.3em")
				.attr("dx", "-8em")
				.style("text-anchor", "end")
				.text("Overdoses")
				.attr("font-size", "1.5em");

		chart.selectAll("bar")
				.data(data)
			.enter().append("rect")
				.style("fill", "#777c19")
				.attr("class", "bar")
				.attr("x", function(d) { return x(d.Year); })
				.attr("width", x.rangeBand())
				.attr("y", function(d) { return y(d[opioidType]); })
				.attr("height", function(d) { return height - y(d[opioidType]); });

		chart.selectAll("labeltext")
			.data(data)
			.enter()
			.append("text")
			.attr("class", "labeltext")
			.text(function(d) {
				return d[opioidType]
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d){
				return x(d.Year) + x.rangeBand()/2;
			})
			.attr("y", function(d){
				return y(d[opioidType]) - 7;
			})
			.attr("fill", "black")

		d3.select("#opioid-list").on("change", alertChange);
	});
};

d3.select(window).on("resize", resize);

function resize() {


		width = parseInt(d3.select("#chart").style("width"), 10);
		width = width - margin.left - margin.right;

		x.rangeRoundBands([0, width], .05);
		 d3.select(chart.node().parentNode)
				.style("width", (width + margin.left + margin.right + "px"));

		chart.selectAll("rect.bar")
				.attr("x", function(d) {
					return x(d.Year);
				})
				.attr("width", x.rangeBand())

		chart.selectAll("text.labeltext")
				.attr("x", function(d){
					return x(d.Year) + x.rangeBand()/2;
				})

		chart.select(".x.axis").call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "1em")
      .attr("dy", "1em");
}

var alertChange = function() {
  //get the data value and index from the event
  selectedValue = d3.event.target.value;
	redrawChart(selectedValue)
};

// re-render data based on dropdown change
function redrawChart(newValue) {
	 d3.csv("vtOverdoses.csv", function(error,data) {

		 data.forEach(function(d) {
				 d.Year = parseDate(d.Year);
		 });



		 var bars = chart.selectAll("rect.bar")
		 	.data(data)

		bars.transition()
			.duration(500)
			.attr("height", function(d) {
				return height - y(d[newValue]);
			})
			.attr("y", function(d) {
				return y(d[newValue])
			})
      .style("fill", function() {
        if (newValue === "rxopioid") {
          return "#a0a627";
        } else if (newValue === "heroin") {
          return "#cfd2ba";
        } else if (newValue === "fentanyl") {
          return "#dddddd";
        } else {
          return "#777c19";
        }
      });

		var labels = chart.selectAll("text.labeltext")
			.data(data)

		labels.transition()
			.duration(500)
			.attr("y", function(d){
				return y(d[newValue]) - 7;
			})
			.text(function(d){
				return d[newValue];
			});

		});

	};

d3.select(window).on("load", drawChart("allopioid"))
