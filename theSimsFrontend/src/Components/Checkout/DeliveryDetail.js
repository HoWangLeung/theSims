import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

import {
    Form,
    Input,
    Button,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Radio,

} from 'antd';
import LocationSearchInput from './LocationSearchInput ';

function Deliverydetail(props) {


    const [radioValue, setRadioValue] = useState(1)
    const handleRadioChange = (e) => {
        console.log('changed radio');
        setRadioValue(e.target.value)
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
    return (
        <>


            <Form
                labelCol={{ span: 15 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"

            >

                <Form.Item label="First Name">
                    <Input />
                </Form.Item>
                <Form.Item label="Contact">
                    <Input />
                </Form.Item>


                <Form.Item label="Building">
                    <LocationSearchInput />
                </Form.Item>

                <Form.Item label="Block">
                    <Input />
                </Form.Item>
                <Form.Item label="Floor">
                    <Input />
                </Form.Item>

                <Form.Item label="Flat">
                    <Input />
                </Form.Item>


                <Form.Item label="Remark (If Applicable)">
                    <Input />
                </Form.Item>

                <Form.Item label="Payment">
                    <Radio.Group onChange={handleRadioChange} value={radioValue}>
                        <Radio style={radioStyle}  value={1}>
                            Option A
        </Radio>
                        <Radio style={radioStyle}  value={2}>
                            Option B
        </Radio>
                        <Radio style={radioStyle}  value={3}>
                            Option C
        </Radio>

                    </Radio.Group>
                </Form.Item>



                <Form.Item label="Button">
                    <Button>Submit</Button>
                </Form.Item>
            </Form>
        </>


    )
}

Deliverydetail.propTypes = {

}

export default Deliverydetail
