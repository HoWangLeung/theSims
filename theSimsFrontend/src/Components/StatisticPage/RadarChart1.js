import React, { Component } from 'react'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer
} from 'recharts';
class RadarChart1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const data = [
            {
                subject: 'Information Technology', A: 120, B: 110, fullMark: 150,
            },
            {
                subject: 'Marketing', A: 98, B: 130, fullMark: 150,
            },
            {
                subject: 'Operation', A: 86, B: 130, fullMark: 150,
            },
            {
                subject: 'Human Resource', A: 99, B: 100, fullMark: 150,
            },
            {
                subject: 'Finance', A: 85, B: 90, fullMark: 150,
            },
            {
                subject: 'General Affair', A: 65, B: 85, fullMark: 150,
            },
        ];
        return (
            <ResponsiveContainer height="99%" width="100%"  >
                <RadarChart   cx="50%"
                        cy="50%" outerRadius={130} width={500} height="90%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}

export default RadarChart1
