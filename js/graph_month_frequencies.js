Highcharts.chart('graph_month_frequencies', {

    chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 300,
        width: 600
    },

    title: {
        text: 'Average number of inspections per month'
    },

    yAxis: {
        title: {
            text: 'Number of inspections'
        }
    },

    xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
            }
        }
    },

    series: [{
        showInLegend: false,
        data: [13222, 12397, 15136, 14511, 16119, 15931, 11874, 14381, 15093, 14700, 12582, 11185],
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
