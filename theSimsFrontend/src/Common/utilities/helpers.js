import CommonModal from "../ConfirmModal/CommonModal"
import intl from 'react-intl-universal';



export const returnMessage = (msg) => {
    CommonModal.success({
        content: msg,
        okText: intl.get('confirm'),
        centered:true
    })
}