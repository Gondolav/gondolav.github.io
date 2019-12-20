Highcharts.chart('graph_facility_types', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: 'Mean fail rate per facility type'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Fail rate (%)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Fail rate: <b>{point.y:.1f} %</b>'
    },
    series: [{
        name: 'Percentage',
        data: [
          ['LIQUOR', 35.98435462842243],
          ['WHOLESALE', 34.04255319148936],
          ['TAVERN', 33.69565217391305],
          ['MOBILE FOOD PREPARER', 30.0796812749004],
          ['MOBILE FOOD DISPENSER', 29.134860050890588],
          ['LIVE POULTRY', 28.57142857142857],
          ['GAS STATION', 26.984126984126984],
          ['CONVENIENCE STORE', 25.0],
          ['MOBILE PREPARED FOOD VENDOR', 24.0],
          ['DAYCARE COMBO 1586', 23.842917251051894],
          ['GROCERY STORE', 23.74944665781319],
          ['SPECIAL EVENT', 22.916666666666664],
          ['KIOSK', 21.568627450980394],
          ['BANQUET HALL', 21.52777777777778],
          ['BANQUET', 21.428571428571427],
          ['DAYCARE (UNDER 2 YEARS)', 21.363636363636363],
          ['LONG TERM CARE', 21.342031686859272],
          ['BAKERY', 21.04632587859425],
          ['DAYCARE (2 - 6 YEARS)', 19.826158940397352],
          ['SCHOOL', 19.413539505940033],
          ['CONVENIENCE', 19.230769230769234],
          ['RESTAURANT', 18.681145734970098],
          ['GOLDEN DINER', 17.894736842105264],
          ["CHILDREN'S SERVICES FACILITY", 17.76516804888695],
          ['SHARED KITCHEN', 17.5],
          ['DAYCARE ABOVE AND UNDER 2 YEARS', 17.34431291816778],
          ['CATERING', 16.50099403578529],
          ['HOSPITAL', 14.476614699331849]
        ],
        color: '#039590',
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }],

    credits: {
        enabled: false
    }
});
