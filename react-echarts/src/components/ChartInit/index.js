/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 * -
 * @authors ZWH (zhangweiheng@fengmap.com)
 * @date 2019/12/26 18:36
 * @describe  生成图表对象
 */
'use strict';
import React from 'react'
import echarts from 'echarts';

class ChartInit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartId: 'chart' + this.props.id
        }
    }

    componentDidMount() {
        this.initChart(this.state.chartId)
    }

    initChart(id) {
        let myChart = echarts.getInstanceByDom(document.getElementById(id));
        if (!myChart) {
            myChart = echarts.init(document.getElementById(id));
        }
        myChart.setOption(this.props.option, true)
    }

    render() {
        const height = this.props.height;
        const width = this.props.width ? this.props.width : '40%';
        return (
            <div id={this.state.chartId} style={{width: width, height: height}}></div>
        )
    }
}

export default ChartInit