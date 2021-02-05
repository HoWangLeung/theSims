import React, { Component, useEffect, useState } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell
} from 'recharts';

import classes from './Dashboard.less'
import { Tabs, Button, Divider, Checkbox, Empty } from 'antd';
import { getStatSoldByMonth } from './action/StatisticAction';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import Yearselector from '../../Common/DatePicker/YearSelector';
const { TabPane } = Tabs;




function LineChart1() {
 
    const [activeMonth, setActiveMonth] = useState(moment().format('MMM'))
    const [activeYear, setActiveYear] = useState(moment().year())
    const productSoldStat = useSelector(state => state.StatisticReducer.productSoldStat);

    const dispatch = useDispatch();
    useEffect(() => {
        let activeMonthFullName = moment(activeMonth, 'MMM').format('MMMM')
        let payload = {
            activeMonth: activeMonthFullName,
            activeYear
        }
        dispatch(getStatSoldByMonth(payload))
    }, [activeMonth, activeYear])



    

    const data = productSoldStat


    const handleTabChange = key => {

        setActiveMonth(key)
    }

    const handleYearSelect = (year) => {
        setActiveYear(year);
    }

    const renderData = () => {

        
        if (data.length > 0) {
            return (<ResponsiveContainer height="99%" width="100%" >
                <BarChart width={600} height={400} data={data} maxBarSize={20} layout={'vertical'}>
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type={'number'} orientation={'top'} />
                    <YAxis type={'category'} orientation={'right'} dataKey={'productName'} />


                    <Bar dataKey={'quantity'} radius={0} label={{ position: 'right' }}>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))
                        }
                    </Bar>

                </BarChart>
            </ResponsiveContainer>)
        } else {
            return <Empty className={classes.empty} image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }
    }


    const colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']
    return (
        <Tabs
            className={classes.quantityMonthTab}
            tabBarExtraContent={<Yearselector handleSelect={handleYearSelect} />}
            onChange={handleTabChange}
            defaultActiveKey="Feb"
            activeKey={activeMonth}
        >
            {moment.monthsShort().map((month, index) => {
                
                return (
                    <TabPane tab={month} key={month} className={classes.quantityTabPane}   >
                        {renderData()}
                    </TabPane>)

            })}


        </Tabs>
    )

}
export default LineChart1
