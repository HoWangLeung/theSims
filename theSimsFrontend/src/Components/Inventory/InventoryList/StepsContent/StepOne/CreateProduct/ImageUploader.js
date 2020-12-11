// import React, { useState, useEffect } from 'react'
// import { Button, Progress, Upload } from "antd";
// import ImgCrop from "antd-img-crop";

// import { storage } from './UploadIndex'
// import { CheckCircleFilled, UploadOutlined } from '@ant-design/icons';
// import { useDispatch } from 'react-redux';
// import { setUploadedProductUrl } from '../../../../action/InventoryAction';





// function ImageUploader(props) {
//   const [fileList, setFileList] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [url, setUrl] = useState([]);
//   const [progress, setProgress] = useState(0);
//   const dispatch = useDispatch();
  

//   useEffect(() => {
    
    
//   }, [url]);

//   const handleUpload = (options) => {
//     const { onSuccess, onError, file, onProgress } = options;
    
    
//     setUploading(true)


//     const uploadTask = storage.ref(`images/products/${file.name}_${file.uid}`).put(fileList[0]);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );

        
//         setProgress(progress);

//       },
//       error => {
        
//       },
//       () => {
//         const { form } = props
//         storage
//           .ref("images/products/")
//           .child(`${file.name}_${file.uid}`)
//           .getDownloadURL()
//           .then(result => {
            
//             const currentFormValue = [...form.getFieldValue("createProduct")]
            


            
//             for (let i = 0; i < currentFormValue.length; i++) {
              
//               if (currentFormValue[i].fieldKey === props.fieldKey) {

//                 currentFormValue[i].productUrl = result
//               }

//             }


//             // 

//             setUrl([...url, result]);

//             setUploading(false)
            
//             onSuccess("OK")
//             // dispatch(setUploadedProductUrl(result, props.fieldId))
//           })
//           .catch(e => { 
//       }
//     );
//   };
//   const handleOnChange = ({ file, fileList, event }) => {
//     setFileList(fileList);
//   };
//   const Uprops = {
//     beforeUpload: file => {
//       setFileList(state => [...state, file])
//       return true;
//     },
//     fileList,
//   };
//   const onPreview = async file => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise(resolve => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow.document.write(image.outerHTML);
//   };
//   return (

//     <>
//       {/* <ImgCrop 
//       // aspect= {300/300}
      
//       rotate> */}
//       <Upload
//        name="files" 
//         onPreview={onPreview}
//         onChange={handleOnChange}
//         listType="picture-card"

//         progress={
//           {
//             format: (percent) => {
              
              
              

//               return progress < 100 ? progress + "%" : <CheckCircleFilled />
//             },
//             percent: progress,
//             // showInfo:true,
//             type: "line",
//             success: { percent: progress }
//           }
//         }
//         customRequest={handleUpload}
//         {...Uprops}>
//         {fileList.length < 1 && '+ Upload'}
//       </Upload>
//       {/* </ImgCrop> */}

//     </>




//   );

// }




// export default ImageUploader;
