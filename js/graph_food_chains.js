Highcharts.chart('graph_food_chains', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: 'Average inspection result per restaurant chain'
    },
    xAxis: {
        categories: ['STARBUCKS', 'TACO BELL', 'AU BON PAIN', 'POTBELLY SANDWICH WORKS', 'KFC', 'CHIPOTLE MEXICAN GRILL', 'SUBWAY', "MCDONALD'S", 'DUNKIN DONUTS', 'FLAT TOP GRILL', 'PIZZA HUT', "JIMMY JOHN'S", "HAROLD'S CHICKEN SHACK", 'FRESHII', 'WINGSTOP', "DOMINO'S PIZZA", "PAPA JOHN'S PIZZA"]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Result distribution (%)'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'FAIL',
        data: [9.649122807017543, 10.1010101010101, 13.122171945701359, 17.20430107526882, 19.747899159663866, 15.384615384615385, 13.880248833592535, 19.67654986522911, 16.02951039570758, 26.984126984126984, 21.367521367521366, 17.08185053380783, 26.903553299492383, 17.045454545454543, 17.82178217821782, 18.93491124260355, 32.38095238095238],
        color: '#DBE4EE'
    }, {
        name: 'PASS W/ CONDITIONS',
        data: [9.649122807017543, 13.131313131313133, 14.93212669683258, 11.182795698924732, 9.243697478991598, 15.384615384615385, 17.02954898911353, 11.859838274932615, 16.36485580147552, 9.523809523809524, 15.384615384615385, 19.9288256227758, 11.6751269035533, 23.863636363636363, 25.742574257425744, 26.627218934911244, 14.285714285714285],
        color: '#5E7CE2'
    }, {
        name: 'PASS',
        data: [80.7017543859649, 76.76767676767676, 71.94570135746606, 71.61290322580646, 71.00840336134453, 69.23076923076923, 69.09020217729393, 68.46361185983828, 67.6056338028169, 63.49206349206349, 63.24786324786324, 62.989323843416365, 61.42131979695431, 59.09090909090909, 56.43564356435643, 54.437869822485204, 53.333333333333336],
        color: '#0A369D'
    }],

    credits: {
        enabled: false
    }
});
