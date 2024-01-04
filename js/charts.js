//饼图
var pieChartDom = document.getElementById('pieChart');
var pieChart = echarts.init(pieChartDom);
var pieOption = {
    title: {
        text: '性别分布',
        textStyle: {
            color: 'green'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '性别',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 6028, name: '男'},
                {value: 3967, name: '女'}
            ]
        }
    ]
};
pieChart.setOption(pieOption);


//柱状图
var barChartDom = document.getElementById('barChart');
var barChart = echarts.init(barChartDom);
var barOption = {
    title: {
        text: '游戏注册人数(最受欢迎的前五名)',
        textStyle: {
            color: 'green'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['花木兰', '绝地战警', '抵达之谜', '妙先生', '蓝色防线']  // 游戏名
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [3934, 2844, 1598, 218, 176],  // 游戏注册人数
            type: 'bar'
        }
    ]
};
barChart.setOption(barOption);


//词云图
var wordCloudChartDom = document.getElementById('wordCloudChart');
var wordCloudChart = echarts.init(wordCloudChartDom);
var wordCloudOption = {
    title: {
        text: '游戏名词云图(前十)',
        textStyle: {
            color: 'green'
        }
    },
    series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        shape: 'pentagon',
        width: 600,
        height: 400,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            }
        },
        data: [
            // 词云数据
            {name: '花木兰', value: 3934},
            {name: '绝地战警', value: 2844},
            {name: '抵达之谜', value: 1598},
            {name: '妙先生', value: 218},
            {name: '蓝色防线', value: 176},
            {name: '姜子牙', value: 170},
            {name: '夺冠', value: 156},
            {name: '疯狂原始人', value: 115},
            {name: '7号房的礼物', value: 85},
            {name: '天王刀', value: 82},
        ]
    }]
};
wordCloudChart.setOption(wordCloudOption);



//动态图
var dynamicLineChartDom = document.getElementById('dynamicLineChart');
var dynamicLineChart = echarts.init(dynamicLineChartDom);
var dynamicLineOption = {
    title: {
        text: '动态用户注册量',
        textStyle: {
            color: 'green'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []  // 初始为空
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],  // 初始为空
        type: 'line',
        areaStyle: {}
    }]
};
dynamicLineChart.setOption(dynamicLineOption);

// 模拟数据更新
setInterval(function () {
    var now = new Date();
    var dateStr = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    var value = Math.round(Math.random() * 100);

    // 更新数据
    var data = dynamicLineOption.series[0].data;
    var xAxisData = dynamicLineOption.xAxis.data;

    xAxisData.push(dateStr);
    data.push(value);

    // 保持数据长度，移除旧数据
    if (xAxisData.length > 20) {
        xAxisData.shift();
        data.shift();
    }

    dynamicLineChart.setOption({
        xAxis: {
            data: xAxisData
        },
        series: [{
            data: data
        }]
    });
}, 2000);  // 每2秒更新一次

//
var liquidFillChartDom = document.getElementById('liquidFillChart');
var liquidFillChart = echarts.init(liquidFillChartDom);
var liquidFillOption = {
    title: {
        text: '安卓设备注册占比',
        textStyle: {
            color: 'green'
        }
    },
    series: [{
        type: 'liquidFill',
        data: [0.5354], // 安卓设备注册占比
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#156ACF',
            }
        },
        backgroundStyle: {
            color: '#1e2024',
        },
        label: {
            normal: {
                textStyle: {
                    color: '#fff',
                    insideColor: '#276DDF',
                    fontSize: 50
                }
            }
        }
    }]
};
liquidFillChart.setOption(liquidFillOption);


// 堆叠面积图配置
var stackedAreaChartDom = document.getElementById('stackedAreaChart');
var stackedAreaChart = echarts.init(stackedAreaChartDom);
var stackedAreaOption = {
    title: {
        text: '用户类型随时间的变化',
        textStyle: {
            color: 'green'
        },
        left: 'center', 
        top: '3%'        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['中R', '大R', '小R', '超R', '非R'], 
        top: '10%',      
        left: 'center'   
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',   
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] 
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '中R',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [242, 254, 233, 247, 229, 280, 237] 
        },
        {
            name: '大R',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [129, 109, 142, 108, 127, 141, 146] 
        },
        {
            name: '小R',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [262, 236, 261, 266, 249, 304, 246] 
        },
        {
            name: '超R',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [30, 21, 17, 24, 20, 15, 26] 
        },
        {
            name: '非R',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [786, 789, 709, 787, 739, 811, 773]
        }
    ]
};
stackedAreaChart.setOption(stackedAreaOption);


// 下载渠道漏斗图配置
var funnelChartDom = document.getElementById('funnelChart');
var funnelChart = echarts.init(funnelChartDom);
var funnelOption = {
    title: {
        text: '下载渠道统计分析',
        textStyle: {
            color: 'green'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        data: ['其他', '荣耀应用商城', '360手机助手', 'OPPO应用商城', '华为应用商城', '应用宝'],
        right: '10%',
        bottom: '5%'
    },
    series: [
        {
            name: '下载量',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 100,
            width: '80%',
            min: 0,
            max: 4665, // 最大值设置为“其他”类别的注册人数
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 4665, name: '其他'},
                {value: 1104, name: '荣耀应用商城'},
                {value: 1074, name: '360手机助手'},
                {value: 1068, name: 'OPPO应用商城'},
                {value: 1043, name: '华为应用商城'},
                {value: 1041, name: '应用宝'}
            ]
        }
    ]
};
funnelChart.setOption(funnelOption);


