import CommonModal from "../ConfirmModal/CommonModal"




export const returnMessage = (msg) => {
    CommonModal.success({
        content: msg,
        okText: 'OK',
        centered:true
    })
}