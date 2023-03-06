$(document).ready(function() {

	//获取当前时间数据的函数
	function time() {
		var _box=document.getElementById("time");
		var id=setInterval(function function_name () {
			var date=new Date();
			var years=date.getFullYear();
			var months=date.getMonth();
			var days=date.getDate();
			var weeks=date.getDay();
			var date1=new Date(`${years}-${months+1}-${days}`);
			var times=date-date1;
			var hours=parseInt(times/1000/60/60);
			var minutes=parseInt(times/1000/60%60);
			var seconds=parseInt(times/1000%60);
			var zhou;
			switch(weeks){
				case 0:
					zhou="星期日";
					break;
				case 1:
					zhou="星期一";
					break;
				case 2:
					zhou="星期二";
					break;
				case 3:
					zhou="星期三";
					break;
				case 4:
					zhou="星期四";
					break;
				case 5:
					zhou="星期五";
					break;
				default:
					zhou="星期六";
					break;
			}
			if(seconds==1||seconds==2||seconds==3||seconds==4||seconds==5||seconds==6||seconds==7||seconds==8||seconds==9||seconds==0){

				seconds="0"+seconds;
			}
			if(minutes==1||minutes==2||minutes==3||minutes==4||minutes==5||minutes==6||minutes==7||minutes==8||minutes==9||minutes==0){
				minutes="0"+minutes;
			}
			_box.innerHTML="&ensp;"+"&ensp;"+"&ensp;"+years+"年"+months+"月"+days+"日"+"&ensp;"+"&ensp;"+zhou+"&ensp;"+"&ensp;"+hours+"时"+minutes+"分"+seconds+"秒";
		},1000);
	};

	//获取天气数据的函数
	function weather(cityName){
		$.ajax({
			type: 'GET',
			url: 'http://wthrcdn.etouch.cn/weather_mini?city='+cityName ,
			dataType: "jsonp",
			error: function () {
				console.log('数据错误');
			},
			success: function (res) {
				if(res.status==1000){
					$('#weather').append('<span>今天的天气'+ res.data.forecast[0].type+'，</span>');
					$('#weather').append('<span>最低气温:' +res.data.forecast[0].low.substring(2,5)+ '℃，最高气温:' + res.data.forecast[0].high.substring(2,5)   + '</span>');
				}
			}
		});
	}


	// function weather() {
	// 	$.ajax({
	// 		type: "get",
	// 		dataType: "jsonp",
	// 		url: "https://api.seniverse.com/v3/weather/now.json?key=rlaz3yugjaptxegr&location=beijing&language=zh-Hans&unit=c",
	// 		success: function(res) {
	// 			if(res.status==1000){
	// 				$('weather').append('<span>今天的天气'+ res.data.forecast[0].type+'，</span>');
	// 				$('weather').append('<span>最低气温:' +res.data.forecast[0].low.substring(2,5)+ '℃，最高气温:' + res.data.forecast[0].high.substring(2,5)   + '</span>');
	// 			}
	// 		},
	// 		error: function(jqXHR2) {
	// 			alert("天气接口错误，请稍后再试！")
	// 		}
	// 	});
	// };
	//weather();

	$('.tab_box li').click(function() {
		$(this).addClass("active").siblings().removeClass("active")
	});

	$('.tab1').click(function() {
		$('.main_box').removeClass("display");
		$('.main_box2').addClass("display");
		$('.top_center').html('曲江新区平安大数据')
	});

	$('.tab2').click(function() {
		$('.main_box2').removeClass("display");
		$('.main_box').addClass("display");
		$('.top_center').html('裕昌·太阳城')
	});

	//页面交互、数据
	var myChart1 = echarts.init(document.getElementById('echarts_data1'));
	var myChart2 = echarts.init(document.getElementById('echarts_data2'));

	function echart1() {
		var option1 = {
			color: ['#0345A2'],
			title: {
				default: false
			},
			//整个图表位置
			grid: {
				left: '1%',
				right: '4%',
				bottom: '10%',
				top: '15%',
				containLabel: true
			},
			tooltip: {
				trigger: 'axis'
			},
			toolbox: {
				show: false
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
				axisLabel: {
					interval: 1
				},
				axisLine: {
					lineStyle: {
						color: '#0345A2', // 颜色
						width: 1, // 粗细
						type: 'solid'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#86BED3'
					}
				},
				//辅助线
				splitLine: {
					show: true,
					lineStyle: {
						// 使用深浅的间隔色
						color: '#143260',
						type: 'dashed'
					}
				}
			},
			yAxis: {
				type: 'value',
				axisLine: {
					lineStyle: {
						color: '#0345A2', // 颜色
						width: 1, // 粗细
						type: 'solid'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#86BED3'
					}
				},
				//辅助线
				splitLine: {
					show: true,
					lineStyle: {
						// 使用深浅的间隔色
						color: '#143260',
						type: 'dashed'
					}
				}
			},
			series: [{
				name: '数据量',
				type: 'line',
				smooth: true,
				data: [320, 590, 680, 790, 920, 820, 920, 1020, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752],
				symbol: 'none',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#023D7D' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#0B1842' // 100% 处的颜色
					}])
				},
				markLine: {
					show: false
				}
			}]
		};
		myChart1.setOption(option1);
	};
	echart1();

	function echart2() {
		var option2 = {
			color: ['#0345A2'],
			title: {
				default: false
			},
			//整个图表位置
			grid: {
				left: '1%',
				right: '4%',
				bottom: '10%',
				top: '15%',
				containLabel: true
			},
			tooltip: {
				trigger: 'axis'
			},
			toolbox: {
				show: false
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
				axisLabel: {
					interval: 1
				},
				axisLine: {
					lineStyle: {
						color: '#0345A2', // 颜色
						width: 1, // 粗细
						type: 'solid'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#86BED3'
					}
				},
				//辅助线
				splitLine: {
					show: true,
					lineStyle: {
						// 使用深浅的间隔色
						color: '#143260',
						type: 'dashed'
					}
				}
			},
			yAxis: {
				type: 'value',
				axisLine: {
					lineStyle: {
						color: '#0345A2', // 颜色
						width: 1, // 粗细
						type: 'solid'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#86BED3'
					}
				},
				//辅助线
				splitLine: {
					show: true,
					lineStyle: {
						// 使用深浅的间隔色
						color: '#143260',
						type: 'dashed'
					}
				}
			},
			series: [{
				name: '数据量',
				type: 'line',
				smooth: true,
				data: [320, 590, 680, 790, 920, 820, 920, 1020, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752, 365, 252, 932, 901, 934, 236, 1330, 752],
				symbol: 'none',
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#023D7D' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#0B1842' // 100% 处的颜色
					}])
				},
				markLine: {
					show: false
				}
			}]
		};
		myChart2.setOption(option2);
	};
	echart2();

	//任务进度
	var myChart8 = echarts.init(document.getElementById('echartWbtj'))
	option8 = {
		title: {
			text: '8%',
			x: 'center',
			y: 'center',
			textStyle: {
				fontWeight: 'normal',
				color: '#FFFFFF',
				fontSize: '30'
			}
		},
		color: ['rgba(176, 212, 251, 0.5)'],


		series: [{
			name: 'Line 1',
			type: 'pie',
			clockWise: true,
			radius: ['90%', '75%'],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			},
			hoverAnimation: false,
			data: [{
				value: 8,
				name: '01',
				itemStyle: {
					normal: {
						color: { // 完成的圆环的颜色
							colorStops: [{
								offset: 0,
								color: '#00cefc' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#367bec' // 100% 处的颜色
							}]
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				}
			}, {
				name: '02',
				value: 92
			}]
		}]
	}
	// 使用刚指定的配置项和数据显示图表。
	myChart8.setOption(option8)

	// $('.data_box1').click(function() {
	// 	$('.j1_box1').removeClass("display");
	// 	$('.j1_box2').addClass("display");
	// 	echart1();
	// });
	//
	// $('.data_box2').click(function() {
	// 	$('.j1_box2').removeClass("display");
	// 	$('.j1_box1').addClass("display");
	// 	echart2();
	// });

	//房屋概览 --------------------- echarts
	function echarts_1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('Cake'));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b} : {c} ({d}%)"
			},
			calculable: true,
			series: [{
				name: ' ',
				color: ['#1179FE', '#3FD4EC', '#8613F6'],
				type: 'pie',
				radius: [0, 100],
				center: ['50%', '50%'],
				roseType: 'radius',
				label: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},

				lableLine: {
					normal: {
						show: true
					},
					emphasis: {
						show: true
					}
				},

				data: [{
						value: 456,
						name: '闲置'
					},
					{
						value: 663,
						name: '出租'
					},
					{
						value: 862,
						name: '自住'
					},

				]
			}, ]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
	echarts_1();

	//amcharts1
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		var chart = am4core.create("chartsdiv1", am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

		chart.data = [{
				country: "流动人口",
				litres: 501.9
			},
			{
				country: "流动人口2",
				litres: 201.1
			}
		];

		var series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "litres";
		series.dataFields.category = "country";
		series.colors.list = [
			am4core.color("#47EBEA"),
			am4core.color("#1E94FE"),
		];

	}); // end am4core.ready()

	//amcharts2
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		var chart = am4core.create("chartsdiv2", am4charts.PieChart3D);
		chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

		chart.data = [{
				country: "特殊人群",
				litres: 141.9
			},
			{
				country: "特殊人群2",
				litres: 621.1
			}
		];

		var series = chart.series.push(new am4charts.PieSeries3D());
		series.dataFields.value = "litres";
		series.dataFields.category = "country";
		series.colors.list = [
			am4core.color("#B916DE"),
			am4core.color("#D4A031"),
		];

	}); // end am4core.ready()

	//进度条1
	var progress1chart = "";

	function progress1char() {
		var progress1chart = echarts.init(document.getElementById('progress1_chart'));
		var baifenbi = [0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 0.920, 0.960];
		var grayBar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		var paiming = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		var xingm = ['字段名称10', '字段名称9', '字段名称8', '字段名称7', '字段名称6', '字段名称5', '字段名称4', '字段名称3', '字段名称2', '字段名称1'];
		option = {
			grid: {
				left: '5%', //如果离左边太远就用这个......
				right: '5%',
				bottom: '-2%',
				top: '5%',
				containLabel: true
			},
			xAxis: [{
					show: false,
				},
				{
					show: false,
				}
			],
			yAxis: [{
				type: 'category',
				axisLabel: {
					show: true, //让Y轴数据不显示
				},

				axisTick: {
					show: false, //隐藏Y轴刻度
				},
				axisLine: {
					show: false, //隐藏Y轴线段
				},
			}, {
			axisTick:'none',
				axisLine:'none',
				axisLabel: {
				textStyle: {
					color: 'rgba(255,255,255,.6)',
						fontSize:'14',
				}
			},
			data: [800,1514, 1619, 1623,1968,2158,2456 ,3506,4664,8390]

		}],
			series: [
				//背景色
				{
					show: true,
					type: 'bar',
					barGap: '-100%',
					barWidth: '15%', //统计条宽度 
					itemStyle: {
						normal: {
							barBorderRadius: 50,
							color: 'rgba(41, 55, 94)'
						},
					},
					z: 1,
					data: grayBar,
				},
				//蓝条
				{
					show: true,
					type: 'bar',
					barGap: '-100%',
					barWidth: '15%', //统计条宽度
					itemStyle: {
						normal: {
							barBorderRadius: 50, //统计条弧度
							color: {
								colorStops: [{
									offset: 0,
									color: '#5d29f7' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#5093fb' // 100% 处的颜色
								}],
								globalCoord: false, // 缺省为 false

							}
						},
					},
					max: 1,
					label: {
						normal: {
							show: true,
							textStyle: {
								color: '#ccc', //百分比颜色
								fontSize: 18
							},
							position: [0, '-20'],
							rich: { //富文本
								green: {
									color: '#70DDA7',
									fontSize: 18
								},
								yellow: {
									color: '#CCB877',
									fontSize: 18
								},
								red: {
									color: '#B916DE',
									fontSize: 18
								}
							},
							formatter: function(data) {
								//富文本固定格式{colorName|这里填你想要写的内容}
								//富文本固定格式{colorName|这里填你想要写的内容}
								if(paiming[data.dataIndex] == 1) {
									return '{start1|}{red|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else if(paiming[data.dataIndex] == 2) {
									return '{start1|}{yellow|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else if(paiming[data.dataIndex] == 3) {
									return '{start1|}{green|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else {
									return '{start2|}{white|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								}
								if(paiming[data.dataIndex] == 1 || paiming[data.dataIndex] == 2 || paiming[data.dataIndex] == 3) {
									return '{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else {
									return paiming[data.dataIndex] + '  ' + xingm[data.dataIndex]
								}
							},

						}
					},
					data: baifenbi,
				},

			]
		};

		progress1chart.setOption(option)
	}
	progress1char();

	function jindu2() {
		var myChart2 = echarts.init(document.getElementById('jindu2'));
		option2 = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '3%',
				bottom: '0%',
				top: '2%',
				containLabel: true
			},
			xAxis: {
				type: 'value',
				show: false,
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				data: ['主机1', '主机2', '主机3', '主机4', '主机5', '主机6'],
				axisLabel: {
					textStyle: {
						color: '#47EBEA',
						fontSize: 18
					}
				}
			},
			series: [{
					type: 'bar',
					data: [120, 330, 463, 563, 663, 763],
					color: {
						colorStops: [{
							offset: 0,
							color: '#1F3DE2' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#2086FC' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false

					}
				},

			]
		};
		myChart2.setOption(option2);
	}
	jindu2();

	//第一页下面的ec
	function sqjr() {
		var myChart2 = echarts.init(document.getElementById('sq_right'));
		option2 = {
			tooltip: {},
			grid: {
				top: '14%',
				left: '1%',
				right: '1%',
				bottom: '2%',
				containLabel: true,
			},
			xAxis: [{
				type: 'category',
				boundaryGap: true,
				axisLine: { //坐标轴轴线相关设置。数学上的x轴
					show: true,
					lineStyle: {
						color: '#f9f9f9'
					},
				},
				axisLabel: { //坐标轴刻度标签的相关设置
					textStyle: {
						color: '#d1e6eb',
						margin: 15,
					},
					rotate: 60,
				},
				axisTick: {
					show: false,
				},
				data: ['5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8', '5-9', '5-10'],
				axisLabel: {
					interval: 0
				},
			}],
			yAxis: [{
				type: 'value',
				min: 0,
				// max: 140,
				splitNumber: 7,
				splitLine: {
					show: true,
					lineStyle: {
						color: '#0a3256'
					}
				},
				axisLine: {
					show: false,
				},
				axisLabel: {
					margin: 20,
					textStyle: {
						color: '#d1e6eb',
				
					},
				},
				axisTick: {
					show: false,
				},
			}],
			series: [{
				name: '最新接入数',
				type: 'bar',
				barWidth:10,
				tooltip: {
					show: false
				},
				label: {
					show: true,
					position: 'top',
					textStyle: {
						color: '#fff',
					}
				},
				itemStyle: {
					normal: {
//						barBorderRadius: 5,
//						color: new echarts.graphic.LinearGradient(
//							0, 0, 0, 1, [{
//									offset: 0,
//									color: '#14c8d4'
//								},
//								{
//									offset: 1,
//									color: '#43eec6'
//								}
//							]
//						),
						color: function(params) {
							var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
							return colorList[params.dataIndex];
						}
					}
				},
				data: [200, 382, 102, 267, 186,200, 382, 250, 267, 186]
			}]
		};
		myChart2.setOption(option2);
	}
		sqjr();
		
		
	$('#center_map .open_btn').click(function() {
		$('#center_map .open_btn').css("background","#47EBEA");
		$('#center_map .off_btn').css("background","transparent");
	});
	$('#center_map .off_btn').click(function() {
		$('#center_map .open_btn').css("background","transparent");
		$('#center_map .off_btn').css("background","#47EBEA");
	});

	window.onload = function(){
		weather('长沙');
		time();
		setInterval(function(){
			$("time").empty();
			time();
		},60000);
		setInterval(function(){
			$("weather").empty();
			weather('长沙');
		},1800000);
	}
});