Highcharts.chart('graph_year_frequencies', {

    chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 300,
        width: 600
    },

    title: {
        text: 'Number of inspections per year'
    },

    yAxis: {
        title: {
            text: 'Number of inspections'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2018'
        }
    },

    tooltip: {
        pointFormat: '<b>{point.y}</b><br/>'
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        showInLegend: false,
        data: [17063, 17994, 17516, 19938, 20886, 20544, 22577, 21320, 9293],
        //color: '#56E39F'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },

    credits: {
        enabled: false
    }

});
