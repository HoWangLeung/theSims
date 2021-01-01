import React from 'react'
import { Select } from 'antd';
import moment from 'moment'

const { Option } = Select;
export default function Yearselector(props) {

    const handleChange = (value) => {
        const { handleSelect } = props
        console.log(`selected ${value}`);
        handleSelect(value)
    }

    const years = (back) => {
        const year = new Date().getFullYear();
        return Array.from({ length: back }, (v, i) => year - back + i + 1);
    }

    let yearsList = years(100).reverse()
    return (
        <>
            <Select defaultValue={moment().year()} style={{ width: 150 }} onChange={handleChange}>

                {yearsList.map(year => (
                    <Option value={year}>{year}</Option>
                ))}
            </Select>

        </>
    )
}
