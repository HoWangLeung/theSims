import React, { useEffect, useState } from 'react'
import { Form, Input, InputNumber, Button, Col, Row, Spin } from 'antd';
import classes from '../UserProfile.less'
import { Typography, Space } from 'antd';
import intl from 'react-intl-universal';
import { values } from 'lodash';
import Editbasicinfoform from './EditBasicInfoForm';
import Basicinfodisplay from './BasicInfoDisplay';
import CommonModal from '../../../../Common/ConfirmModal/CommonModal';
import { useDispatch, useSelector } from 'react-redux';
import { editBasicInfoRequest, getUserProfile } from '../../actions/AuthenticationActions';
import { API } from '../../../../ApiConfig';
import axios from 'axios';
import { returnMessage } from '../../../../Common/utilities/helpers';

const { Text, Link } = Typography;







export default function Userinfo(props) {
    const [form] = Form.useForm();
    const { userProfile } = props
    const dispatch = useDispatch();
    console.log(userProfile);

    const [editMode, setEditMode] = useState(false)

    const [initialValues, setInitialValues] = useState()
    const isFetching = useSelector(state => state.LoadingReducer)
    const [loading, setLoading] = useState(false)
    console.log(isFetching);
    const toggleEditMode = () => {

        setEditMode(prevState => !prevState)


        const initialValues = Object.keys(userProfile)
            .filter(field => field !== "id" && field !== "role")
            .reduce((accumulator, currentValue) => ({ ...accumulator, [currentValue]: userProfile[`${currentValue}`] })
                , {})




        setInitialValues(initialValues)
    }

    const onFinish = (values) => {
        CommonModal.confirm({
            content: "Are you sure",
            okText: intl.get('confirm'),
            centered: true,
            maskClosable: false,

            // okButtonProps: { loading: this.props.isLoading },
            keyboard: false,
            margin: 0,
            onOk: async () => {
                //or return dispatch if I want to use .then
                await dispatch(editBasicInfoRequest(values))
                await dispatch(getUserProfile({ username: sessionStorage.getItem("authenticatedUser") }))
                toggleEditMode()
                returnMessage("Successfully edited")
               

            }


        })
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
                toggleEditMode={toggleEditMode}
                onFinish={onFinish}
            />
        } else {
            return <Basicinfodisplay
                userProfile={userProfile}
                initialValues={initialValues}
            />
        }




    }

    // const handleSubmit = () => {
    //     CommonModal.confirm({
    //         content: "Are you sure",
    //         okText: intl.get('confirm'),
    //         centered: true,
    //         maskClosable: false,

    //         // okButtonProps: { loading: this.props.isLoading },
    //         keyboard: false,
    //         margin: 0,

    //         onOk:  async () => {
    //             console.log();
    //             let payload = {
    //                 lastname: "abcdsd",
    //                 addressBlock: "ZZB",

    //             }
    //         //     let userId = parseInt(sessionStorage.getItem("userId"))

    //         //    let res= await axios.put(`${API}/users/editBasicInfo?userId=${userId}`, payload)
    //         //     console.log(res);
    //          let res= await dispatch(editBasicInfoRequest(payload))
    //             console.log(res);

    //         }
    //     })


    // }


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
                            htmlType="submit"
                            form="userProfileForm"
                        >Confirm</Button>
                    </Form.Item> : null}

                </Row>
         
        </Row>
    )
}
