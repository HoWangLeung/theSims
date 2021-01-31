import React from 'react'
import { Checkbox } from 'antd';
import classes from '../../ProductMainPage.less'
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../actions/productActions';

export default function Filtercountry(props) {

    const { productOverview } = props
    console.log(productOverview);
    const filterPayload = useSelector(state => state.ProductReducer.filterPayload);
    const dispatch = useDispatch();

    const onChange = (e) => {

        console.log(`value = ${e.target.value}`);
        console.log(`checked = ${e.target.checked}`);
        let country = e.target.value

        if (!filterPayload.country.has(country)) {
            filterPayload.country.add(country)
        } else if (filterPayload.country.has(country)) {
            filterPayload.country.delete(country)
        }

        if (filterPayload.country.size === 0)
            filterPayload.country.add("All")
        else
            filterPayload.country.delete("All")


        console.log(filterPayload.country);



        filterPayload.currentFilter.country = !filterPayload.currentFilter.country

        console.log(filterPayload);

        dispatch(filterProduct(filterPayload))



    }

     

    const renderCheckboxes = () => {

        const { countries } = productOverview

        var arrResult = {};
        // if (productList) {
        //     const countryList = productList.map(e => e.countryOrigin)
        //     console.log(countryList);
        //     const uniqueCountries = [...new Set(countryList)];



        return countries && countries.map(country => (

            <Checkbox
         
               

                value={country}
                key={country}
                onChange={onChange}>{country}</Checkbox>
        ))


        // } else {
        //     return (

        //         <div className={classes.skeletonCheckbox} > 
        //             {Array.from(Array(5).keys()).map(e => {
        //                 return (
        //                     <div  className={classes.skeletonCheckboxContainer} >
        //                         <Skeleton.Avatar size="small" active={true} shape="square" />
        //                         <Skeleton.Input size="small" style={{ width: 100 }} active={true}  className={classes.skeletonInput} />
        //                     </div>
        //                 )
        //             })}


        //         </div>



        //     )
        // }

    }



    return (
        <div className={classes.countryCheckboxes}>
            { renderCheckboxes()}
        </div>
    )
}
