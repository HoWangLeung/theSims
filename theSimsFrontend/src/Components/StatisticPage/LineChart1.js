import React, { Component } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import classes from './Dashboard.less'
class LineChart1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        const data = [
            { name: 'Jan', Apple: 4000, Orange: 2400, Kiwi: 2400 },
            { name: 'Feb', Apple: 3000, Orange: 1398, Kiwi: 2210 },
            { name: 'Mar', Apple: 2000, Orange: 9800, Kiwi: 2290 },
            { name: 'Apr', Apple: 2780, Orange: 3908, Kiwi: 2000 },
            { name: 'May', Apple: 1890, Orange: 4800, Kiwi: 2181 },
            { name: 'Jun', Apple: 2390, Orange: 3800, Kiwi: 2500 },
            { name: 'Jul', Apple: 3490, Orange: 4300, Kiwi: 2100 },
            { name: 'Aug', Apple: 2390, Orange: 3800, Kiwi: 2500 },
            { name: 'Sep', Apple: 3490, Orange: 4300, Kiwi: 2100 },
            { name: 'Oct', Apple: 1500, Orange: 3800, Kiwi: 2500 },
            { name: 'Nov', Apple: 2421, Orange: 4300, Kiwi: 2100 },
            { name: 'Dec', Apple: 2390, Orange: 3800, Kiwi: 2500 },
           
        ];
        return (
 
            <ResponsiveContainer height="90%" width="100%" >
                <LineChart 
            
                   data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line     animationDuration={10000} type="monotone" dataKey="Orange" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line     animationDuration={10000} type="monotone" dataKey="Apple" stroke="#82ca9d" />
                    <Line     animationDuration={10000} type="monotone" dataKey="Kiwi" stroke="#fcba03" />
                </LineChart>
            </ResponsiveContainer>

        )
    }
}

export default LineChart1
