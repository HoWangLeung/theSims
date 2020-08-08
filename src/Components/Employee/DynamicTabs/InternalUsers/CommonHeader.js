import React from 'react'
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Switch, Button } from 'antd';




const headerId = () => (
    {
        title: () => (intl.get('id')),
        dataIndex: 'id',
        key: 'id',
        
    }
)
const headerName = () => (
    {
        title: () => (intl.get('employeeName')),
        dataIndex: 'name',
        key: 'name',
        width:200,
        sorter:(a, b) => a.firstName.localeCompare(b.firstName),
        render: (text, row, index) => {
   
            return (
                <div>
                    {row.firstName} {row.lastName}
                </div>
            )
        }
    }
)

const headerRole = () => (
    {
        title: () => (intl.get('jobTitle')),
        sorter:true,
        dataIndex: 'role',
        key: 'role',
        width:200,
        sorter:(a, b) => a.role.localeCompare(b.role)
    }
)

const headerDepartment = () => (
    {
        title: () => (intl.get('department')),
        sorter:true,
        dataIndex: 'department',
        key: 'department',
        width:200,
        sorter:(a, b) => a.department.name.localeCompare(b.department.name),
        render: (text, row, index) => {
            console.log(row);
            return (
               <span>{row.department.name}</span>
            )
        }
    
    }
)

const headerPermission = () => (
    {
        title: () => (intl.get('permission')),
        dataIndex: '',
        key: 'permission',
        align:'center',
        render: () => {
            return (<Button type="text" icon={<FontAwesomeIcon icon={faLock}/>}></Button>)
        }
    })
const headerAdmin = () => (
    {
        title: () => (intl.get('hasAdmin')),
        dataIndex: 'hasAdmin',
        key: 'hasAdmin',
        align:'center',
        render: (text, row, index) => {

            if (text === true) return (<p>Yes</p>)
            return (<p>No</p>)
        }

    })

const headerDefaultPermission = () => (
    {
        title: () => (intl.get('defaultPermission')),
        dataIndex: 'defaultPermission',
        key: 'defaultPermission',
        align:'center',
        render: (text, row, index) => {
            return (<Switch defaultChecked />)
        }

    }
)

const lastModifiedBy = () => (
    {
        title: () => (intl.get('lastModifiedBy')),
        dataIndex: 'lastModifiedBy',
        key: 'lastModifiedBy',
    }
)

const lastModifiedDate = () => (
    {
        title: () => (intl.get('lastModifiedDate')),
        dataIndex: 'lastModifiedDate',
        key: 'lastModifiedDate',
    }
)

const headerProfile = () => (
    {
        title: () => (intl.get('profile')),
        dataIndex: 'profile',
        key: 'profile',
        render: () => <Link>{intl.get('access')}</Link>
    }
)

const headerDelete = (config) => {

    const {handleDelete} = config
    return (
        {
            title: () => (intl.get('terminate')),
            dataIndex: 'terminate',
            key: 'terminate',
            render: (text, record, index) => {
                     
                return (<Button
                    key={index}
                    id={record.id}
                    onClick={handleDelete}
                    >{intl.get('terminate')}</Button>)
            }
        }

    )
}
export const commonHeader = (config) => {
   
    
        return (
            [
                headerId(),
                headerName(),
                headerRole(),
                headerDepartment(),
                headerPermission(),
                headerAdmin(),
                headerDefaultPermission(),
                lastModifiedBy(),
                lastModifiedDate(),
                headerProfile(),
                headerDelete(config)
            ])
    

}