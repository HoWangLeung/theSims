
import React, { useEffect } from 'react'
import { Button, Checkbox } from 'antd';
import classes from '../../ProductMainPage.less'
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../../actions/productActions';

export default function Filtercountry(props) {

    const { productOverview } = props

    const filterPayload = useSelector(state => state.ProductReducer.filterPayload);

    

    const dispatch = useDispatch();

    const [checkedList, setCheckedList] = React.useState([]);
    useEffect(()=>{
        console.log(filterPayload.currentFilter);
        if(filterPayload.currentFilter.country===false){
            
            console.log("set empty");
            setCheckedList([])
        }
        return ()=>{
            
        }
    },[filterPayload])
    const onChange = (e) => {

        let target = e.target.value
        let isChecked = e.target.checked
        let newCheckListSet = new Set([...checkedList])
        if (!newCheckListSet.has(target)) {
            newCheckListSet.add(target)
        } else if (newCheckListSet.has(target)) {
            newCheckListSet.delete(target)
        }
        // let index = newCheckedLiist.indexOf(target);
        // 
        // if (index == -1 && isChecked) {
        //     
        //     newCheckedLiist.push(target)
          
        // }else{
        //     newCheckedLiist.splice(index, 1);
        // }
     
        

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




        console.log("isChecked ",isChecked);
        if(isChecked)
        filterPayload.currentFilter.country = true


        console.log(filterPayload);
        dispatch(filterProduct(filterPayload))
        let newCheckListArray = [...newCheckListSet]
        console.log(newCheckListArray);
        setCheckedList(newCheckListArray)


    }


    const shouldCheck=(country)=>{

       
       if(checkedList.indexOf(country)!==-1){
           return true
       }else{
           return false
       }

    }

    const renderCheckboxes = () => {

        const { countries } = productOverview

        var arrResult = {};
        // if (productList) {
        //     const countryList = productList.map(e => e.countryOrigin)
        //     
        //     const uniqueCountries = [...new Set(countryList)];



        return countries && countries.map((country, i) => {


            return (

                <Checkbox
                    checked={shouldCheck(country)}
                    value={country}
                    key={country}
                    onChange={onChange}>{country}
                </Checkbox>
            )
        })


    }



    return (
        <div className={classes.countryCheckboxes}>
            { renderCheckboxes()}
    
        </div>
    )
}