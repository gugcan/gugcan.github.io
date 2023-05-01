// 柱状图1模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            // {
            //     name: "店铺",
            //     nameTextStyle: {color: "#a90000"}
            // },
            {
                type: "category",
                data: [
                    "思雅店",
                    "庭轩店",
                    "公园店",
                    "栋青店",
                    "田园店",
                    "甲秀店",
                    "数博店"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "#F57474",
                        fontSize: "10"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                namecolor: "#a90000"
            },
            {
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                    //
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }
    ],
    series: [
        {
            name: "月客流量",
            type: "bar",
            barWidth: "35%",
            data: [1200, 1600, 900, 1000, 1500, 1200, 700],
            itemStyle: {
                barBorderRadius: 5
            }
        }
    ]
};

// 把配置给实例对象
myChart.setOption(option);
window.addEventListener("resize", function() {
    myChart.resize();
    console.log("监控窗口变化，实现图形自适应窗口大小")
});

    // 数据变化
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
        option.series[0].data = dataAll[$(this).index()].data;
        myChart.setOption(option);
    });
})();


// 学习进度柱状图模块
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    var data = [70, 34, 60, 78, 69];
    var titlename = ["北京", "杭州", "深圳", "上海", "广州"];
    var valdata = [702, 350, 610, 793, 664];
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    option = {
        //图标位置
        grid: {
            top: "10%",
            left: "12%",
            bottom: "10%"
        },
        xAxis: {
            show: false,
            inverse: true,
        },
        yAxis: [
            {
                show: true,
                inverse: true,
                data: titlename,

                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                // inverse: true,
                axisLabel: {
                    // color: "#fff",

                    textStyle: {
                        color: "#56D0E3",
                        fontSize: "12"
                    },


                    rich: {
                        lg: {
                            backgroundColor: "#339911",
                            color: "#fff",
                            borderRadius: 15,
                            align: "center",
                            width: 15,
                            height: 15
                        }
                    }
                }
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#F57474"
                    }
                }
            }
        ],
        series: [
            {
                name: "条",
                type: "bar",
                yAxisIndex: 0,
                data: data,
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%"
                    }
                }
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//折线图1
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));

    // (1)准备数据
    var data = {
        year: [
            [124, 140, 101, 134, 90, 230, 210, 260, 120, 230, 210, 120],
            [140, 164, 191, 324, 190, 300, 310, 213, 180, 200, 180, 79]
        ]
    };

    // 2. 指定配置和数据
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "black"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            },
            splitArea: {
              show: true,
              areaStyle: {
                  color: ['rgba(250,250,250,0.2)','rgba(25,25,0,0.2)'],
                  shadowColor: 'rgba(0,0,0,0.2)',
                  shadowBlur: 10,
              }  ,
            },
        },
        series: [
            {
                name: "新增店铺",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "新增客流",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
        // console.log("监控窗口变化，实现图形自适应窗口大小")
    });
})();