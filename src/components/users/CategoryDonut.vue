<template>
  <div class='CategoryDount'>
    <div id='#chart'></div>
  </div>
</template>

<script>
import * as d3 from 'd3'; 
export default {
  props: {
    completeNum: {},
    totalNum: {}
  },
  data() {
    return {
      dataset: [
        {label: 'total', count: this.totalNum},
        {label: 'completed', count: this.completeNum}
      ]
    }
  },
  mounted: function() {
    var width = 200
    var height = 200
    var radius = Math.min(width, height) / 2
    var color = d3.scaleOrdinal().range(['#9C6ADE', '#DFE4E8' ])

    var svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${(width / 2)},${(height / 2)})`)

    var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius)

    var pie = d3.pie()
            .value(function(d) {return d.count})
            .sort(null)

    var path = svg.selectAll('path')
            .data(pie(this.dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) {
                return color(d.data.label)
            })
  }
}
</script>

<style>
  
</style>
