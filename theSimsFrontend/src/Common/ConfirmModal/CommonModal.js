import React from 'react'
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import CommonTexty from './CommonTexty'
class CommonModal {

   success=(props)=>{

        return Modal.success({
            title: intl.get('success'),
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
            title: 'Warning',

            ...props
        });

    }

    confirm = (props) => {

        return Modal.confirm({
            title:<CommonTexty text={'confirm'}/> ,
            cancelText: intl.get('cancel'),
            okButtonProps:props.okButtonProps,
            ...props
        });

    }

}

export default new CommonModal()
