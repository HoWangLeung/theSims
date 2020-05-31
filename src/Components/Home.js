import React, { Component } from 'react'

import { Layout } from 'antd';
import { Typography } from 'antd';
import styles from './Home.less'
import Congrats from './Jotto/Congrats';
import GuessedWord from './Jotto/GuessedWord';



const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        console.log(styles);

        return (
            <>
                <h1>Jotto</h1>
                <Congrats success={true} />
                <GuessedWord guessedWords={[
                    {
                        guessedWord: 'train',
                        letterMatchCount: 3
                    }

                ]} />
            </>
        )
    }
}

export default Home
