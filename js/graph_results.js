Highcharts.chart('graph_results', {

    chart: {
        backgroundColor: 'rgba(0,0,0,0)'
    },

    title: {
        text: 'Results distribution over time'
    },

    yAxis: {
        title: {
            text: 'Proportion (%)'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2018'
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.0f}%</b><br/>'
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
        name: 'PASS',
        data: [65.56877454140539, 64.4437034567078, 61.3324960036538, 59.69003912127595, 59.906157234511156, 58.64485981308412, 56.889755060459755, 57.02626641651032, 56.55870009684709],
        color: '#134b6b'
    }, {
        name: 'FAIL',
        data: [24.649827111293444, 23.724574858286097, 20.461292532541677, 16.666666666666664, 17.643397491142395, 17.387071651090345, 18.930770252912254, 19.169793621013135, 20.757559453351984],
        color: '#1C6E7D'
    }, {
        name: 'PASS W/ CONDITIONS',
        data: [8.257633475942097, 8.369456485495165, 8.700616579127654, 8.722038318788243, 11.007373360145552, 10.416666666666668, 11.631306196571732, 9.953095684803003, 11.115893683417626],
        color: '#008E8E'
    }, {
        name: 'OUT OF BUSINESS',
        data: [1.494461700756022, 3.434478159386462, 8.135419045444166, 11.445480991072325, 7.823422388202624, 8.089953271028037, 6.440182486601409, 6.543151969981238, 5.896911653933068],
        color: '#2FAD91'
    }, {
        name: 'NO ENTRY',
        data: [0.0, 0.0, 1.3416305092486869, 3.455712709399137, 3.5957100450062245, 4.2640186915887845, 4.681755769145591, 5.398686679174483, 3.389648122242548],
        color: '#6ACA89'
    }, {
        name: 'NOT READY',
        data: [0.0, 0.0, 0.0, 0.0, 0.0, 1.1779595015576323, 1.4129423749833903, 1.8996247654784242, 2.2597654148283652],
        color: '#ADE47B'
    }, {
        name: 'BUSINESS NOT LOCATED',
        data: [0.029303170603059252, 0.027787040124485938, 0.028545329984014618, 0.020062192797672785, 0.023939480992052092, 0.019470404984423675, 0.013287859325862605, 0.009380863039399626, 0.021521575379317766],
        color: '#F9F871'
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
