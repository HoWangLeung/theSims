import React, { useEffect } from 'react'
import { Button, Col, Input, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVacancy } from '../../actions/EmployeeAction';
import Checkbox from 'antd/lib/checkbox/Checkbox';

const { Option } = Select;

export default function JobSearchBoxes(props) {

    const vacancyList = useSelector(state => state.EmployeeReducer.vacancyList)
    const jobLevelList = [...new Set(vacancyList.map(item => item.jobLevel))].sort()
    console.log(jobLevelList);
    const dispatch = useDispatch()
    useEffect(() => {
        let payload = {}
        dispatch(fetchVacancy(payload))

        return () => {

        }
    }, [])

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    const handleJobLevelChange = (value) => {
        console.log(`selected ${value}`);
    }



    return (
        <Row>

            <Col>
                <Input size="large" placeholder="Search Job Title" prefix={<UserOutlined />} />
            </Col>

            <Col>
                <Select mode="tags" size="large" placeholder="Career Level" style={{ width: 300 }} onChange={handleChange}>
                    {jobLevelList && jobLevelList.map(jobLevel => {
                        return (

                            <Option key={jobLevel}>{jobLevel}</Option>
 
                        )
                    })}

                </Select>
            </Col>


            <Col>
                <Select size="large" placeholder="Career Level" style={{ width: 300 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Col>
            <Col>
                <Button disabled size="large" >Search</Button>
            </Col>
        </Row>
    )
}
