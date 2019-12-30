/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 * -
 * @authors ZWH (zhangweiheng@fengmap.com)
 * @date 2019/12/26 18:56
 * @describe
 */
'use strict';
import React from 'react';
// import { Anchor } from 'antd';
// const { Link } = Anchor;
import ChartInit from '../../components/ChartInit'

class Echart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const edata = {
            legend: ['A', 'B', 'C'],
            xSeries: ['2018.12.01', '2018.12.02', '2018.12.03', '2018.12.04', '2018.12.05', '2018.12.06', '2018.12.07'],
            series: [
                {
                    name: 'A',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10]
                },
                {
                    name: 'B',
                    type: 'line',
                    data: [1, 3, 2, 5, 3, 2, 0]
                },
                {
                    name: 'C',
                    type: 'line',
                    data: [10, 13, 22, 51, 23, 12, 10]
                }
            ]
        };
        const edata1 = {
            legend: ['A', 'B', 'C'],
            xSeries: ['2018.12.01', '2018.12.02', '2018.12.03', '2018.12.04', '2018.12.05', '2018.12.06', '2018.12.07'],
            series: [
                {
                    name: 'A',
                    type: 'bar',
                    data: [11, 11, 15, 13, 12, 13, 10]
                },
                {
                    name: 'B',
                    type: 'bar',
                    data: [1, 3, 2, 5, 3, 2, 0]
                },
                {
                    name: 'C',
                    type: 'bar',
                    data: [10, 13, 22, 51, 23, 12, 10]
                }
            ]
        };
        let option = {
            title: {
                text: '数据分析'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: edata.legend
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {},
                    dataView: {
                        readOnly: false
                    },
                    magicType: {
                        type: ['line', 'bar']
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: edata.xSeries
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                }
            },
            series: edata.series
        };
        let option1 = {
            title: {
                text: '数据分析'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: edata1.legend
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {},
                    dataView: {
                        readOnly: false
                    },
                    magicType: {
                        type: ['line', 'bar']
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: edata1.xSeries
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                }
            },
            series: edata1.series
        };
        let option2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 335, name: '直达', selected: true},
                        {value: 679, name: '营销广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,

                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },

                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        {value: 335, name: '直达'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1048, name: '百度'},
                        {value: 251, name: '谷歌'},
                        {value: 147, name: '必应'},
                        {value: 102, name: '其他'}
                    ]
                }
            ]
        };
        return (
            <div>
                <div>
                    {/*<Anchor affix={false}>*/}
                    {/*    <Link href="#components-anchor-demo-basic" title="Basic demo" />*/}
                    {/*    <Link href="#components-anchor-demo-static" title="Static demo" />*/}
                    {/*    <Link href="#API" title="API">*/}
                    {/*        <Link href="#Anchor-Props" title="Anchor Props" />*/}
                    {/*        <Link href="#Link-Props" title="Link Props" />*/}
                    {/*    </Link>*/}
                    {/*</Anchor>,*/}
                </div>
                <ChartInit id='1' option={option} height={'400px'}></ChartInit>
                <ChartInit id='2' option={option1} height={'400px'}></ChartInit>
                <ChartInit id='3' option={option2} height={'400px'}></ChartInit>
            </div>
        )
    }
}


export default Echart;