import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CommonBreadcrumb(props) {

    const { pathname } = props
    console.log(pathname);

    let depth = (pathname.match(/\//g) || []).length;

    let pathArray = pathname.replaceAll("/", " ").split(" ").splice(1)
    console.log(pathArray);

    return (
        <>
            <Breadcrumb>
                <Link to="/"><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
                {pathArray.map(link => (<Breadcrumb.Item><Link to={`/${link}`}>{link}</Link></Breadcrumb.Item>))}

            </Breadcrumb>
        </>
    )
}
