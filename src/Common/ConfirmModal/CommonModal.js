import React from 'react'
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
class CommonModal {

   success=(props)=>{

        return Modal.success({
            title: 'Success',
            ...props
        });

    }


     error=(props)=>{

        return Modal.error({
            title: 'Error',
            ...props
        });

    }


    info=(props)=>{

        return Modal.info({
            title: 'info',
            ...props
        });

    }



    warning=(props)=>{

        return Modal.warning({
            title: 'Confirm',

            ...props
        });

    }

    confirm = (props) => {

        return Modal.confirm({
            title:intl.get('confirm'),
            cancelText: intl.get('cancel'),
            okButtonProps:props.okButtonProps,
            ...props
        });

    }

}

export default new CommonModal()
