import React from 'react'
import { Checkbox } from 'antd';
import classes from '../../ProductMainPage.less'
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';

export default function Filtercountry(props) {

    const { productInfo: { productList } } = props

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);

    }
    const renderCheckboxes = () => {
        var arrResult = {};
        if (productList) {
            const countryList = productList.map(e => e.countryOrigin)
            console.log(countryList);
            const uniqueCountries = [...new Set(countryList)];




            return uniqueCountries.map(country => (

                <Checkbox key={country} onChange={onChange}>{country}</Checkbox>
            ))


        } else {
            return (

                <div className={classes.skeletonCheckbox} > 
                    {Array.from(Array(5).keys()).map(e => {
                        return (
                            <div  className={classes.skeletonCheckboxContainer} >
                                <Skeleton.Avatar size="small" active={true} shape="square" />
                                <Skeleton.Input size="small" style={{ width: 100 }} active={true}  className={classes.skeletonInput} />
                            </div>
                        )
                    })}


                </div>



            )
        }

    }



    return (
        <div className={classes.countryCheckboxes}>
            { renderCheckboxes()}
        </div>
    )
}
