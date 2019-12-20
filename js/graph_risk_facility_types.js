Highcharts.chart('graph_risk_facility_types', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: 'Risk distribution per facility type'
    },
    xAxis: {
        categories: ['LONG TERM CARE', 'HOSPITAL', 'DAYCARE (UNDER 2 YEARS)', "CHILDREN'S SERVICES FACILITY", 'DAYCARE ABOVE AND UNDER 2 YEARS', 'DAYCARE (2 - 6 YEARS)', 'DAYCARE COMBO 1586', 'GOLDEN DINER', 'CATERING', 'SCHOOL', 'SHARED KITCHEN', 'BANQUET HALL', 'RESTAURANT', 'SHARED KITCHEN USER (SHORT TERM)', 'SHARED KITCHEN USER (LONG TERM)', 'SPECIAL EVENT', 'BAKERY', 'WHOLESALE', 'GROCERY STORE', 'MOBILE FOOD PREPARER', 'GAS STATION', 'MOBILE FOOD DISPENSER', 'LIQUOR', 'MOBILE FROZEN DESSERTS VENDOR', 'MOBILE PREPARED FOOD VENDOR', 'CONVENIENCE STORE', 'CONVENIENCE', 'TAVERN']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Risk distribution (%)'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'HIGH',
        data: [252, 93, 56, 559, 476, 576, 180, 68, 179, 989, 16, 22, 13407, 23, 95, 10, 114, 38, 802, 14, 2, 5, 4, 0, 0, 0, 0, 0],
        color: '#1C6E7D'
    }, {
        name: 'MEDIUM',
        data: [0, 0, 0, 0, 2, 0, 4, 0, 7, 102, 3, 3, 4190, 12, 40, 14, 325, 78, 1608, 119, 5, 37, 6, 0, 2, 4, 1, 4],
        color: '#4BBC8E'
    }, {
        name: 'LOW',
        data: [0, 0, 0, 3, 2, 8, 0, 5, 8, 34, 0, 2, 473, 1, 28, 7, 10, 140, 3382, 0, 42, 397, 357, 23, 31, 19, 18, 115],
        color: '#D7F2BA'
    }],

    credits: {
        enabled: false
    }
});
