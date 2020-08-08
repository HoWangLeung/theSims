import React, { Component } from 'react'
import classes from './SearchCollapse.less'
import { PlusSquareOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { CaretRightOutlined, MinusSquareOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import SearchBar from './SearchBar';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
class SearchCollapse extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    getSearchCollapse = () => (<Collapse
        bordered={false}

        expandIcon={({ isActive }) => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
        className="site-collapse-custom-collapse"
    >
        <Panel header={intl.get('search')} key="1" className="site-collapse-custom-panel">
            <SearchBar
            
            />
        </Panel>
    </Collapse>)

    render() {
        const SearchCollapse = this.getSearchCollapse()
        return (
            <div className={classes.container}>
                {SearchCollapse}
            </div>
        )
    }
}

export default SearchCollapse
