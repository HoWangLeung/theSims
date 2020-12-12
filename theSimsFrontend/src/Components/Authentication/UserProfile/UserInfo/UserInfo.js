import React, { useEffect, useState } from 'react'
import { Form, Input, InputNumber, Button, Col, Row } from 'antd';
import classes from '../UserProfile.less'
import { Typography, Space } from 'antd';
import intl from 'react-intl-universal';
import { values } from 'lodash';
import Editbasicinfoform from './EditBasicInfoForm';
import Basicinfodisplay from './BasicInfoDisplay';
import CommonModal from '../../../../Common/ConfirmModal/CommonModal';

const { Text, Link } = Typography;







export default function Userinfo(props) {
    const [form] = Form.useForm();
    const { userProfile } = props

    console.log(userProfile);

    const [editMode, setEditMode] = useState(false)

    const [initialValues, setInitialValues] = useState()
    const toggleEditMode = () => {

        setEditMode(prevState => !prevState)


        const initialValues = Object.keys(userProfile)
            .filter(field => field !== "id" && field !== "role")
            .reduce((accumulator, currentValue) => ({ ...accumulator, [currentValue]: userProfile[`${currentValue}`] })
                , {})




        setInitialValues(initialValues)
    }

    const onFinish = (values) => {

        console.log(values);
    }


    // useEffect(() => {


    //     setInitialValues({ firstname: userProfile && userProfile.firstname })


    // }, [])

    const onFieldsChange = (changedFields, allFields) => {
        console.log(changedFields, allFields);
    }

    const getInitialValues = () => {
        Object.keys(userProfile).map(field => {

        })


    }

    const tailLayout = {
        wrapperCol: { offset: 20, span: 4 },
    };

    const renderScreen = () => {

        if (editMode) {
            return <Editbasicinfoform
                userProfile={userProfile}
                initialValues={initialValues}
            />
        } else {
            return <Basicinfodisplay
                userProfile={userProfile}
                initialValues={initialValues}
            />
        }




    }

    const handleSubmit = () => {
        CommonModal.confirm({
            content: "Are you sure",
            okText: intl.get('confirm'),
            centered: true,
            maskClosable: false,
            // okButtonProps: { loading: this.props.isLoading },
            keyboard: false,
            margin: 0,
            okButtonProps: {
                form: "userProfileForm",
                style: { marginLeft: "8px" },
                htmlType: "submit"
            },
            onOk: async () => {
                 
                        

            }
        })


    }


    return (
        <Row className={classes.userInfoContainer}>

            {renderScreen()}

            <Row className={classes.userInfoEditButtonsRow} >
                <Form.Item

                >
                    <Button
                        onClick={toggleEditMode}
                    >{editMode ? "Cancel" : "Edit Profile"}
                    </Button>
                </Form.Item>

                {editMode ? <Form.Item>
                    <Button

                        onClick={handleSubmit}
                    >Confirm</Button>
                </Form.Item> : null}



            </Row>
        </Row>
    )
}
