import React, { Component } from 'react';
import List from './List';
import Infobar from './Infobar';
import Challange from './Challange';
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.getNews = this.getNews.bind(this);
        this.fetchingData = this.fetchingData.bind(this);
        this.state = {
            key: 'ab945fcbd7b146f18ecfab47cdd7131d',
            secretAcitve: false,
            limit: 5,
            gifs: []
        }
    }
    fetchingData(a) {
        return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${this.state.key}&limit=${this.state.limit + a}`)
            .then(data => data.json())
    }
    getNews() {
        if (this.state.limit % 2 == 0) {
            this.fetchingData(5)
                .then(newData => {
                    this.setState({
                        gifs: newData.data,
                        secretAcitve: true,
                        limit: this.state.limit + 5
                    })
                    setTimeout(() => {
                        this.setState({
                            secretAcitve: false
                        })
                    }, 800)
                })
        } else {
            this.fetchingData(5)
                .then(newData => {
                    this.setState({
                        gifs: newData.data,
                        limit: this.state.limit + 5
                    })
                })
        }

    }
    componentWillMount() {
        this.fetchingData(0)
            .then(newData => {
                this.setState({
                    gifs: newData.data
                })
            })
    }
    render() {
        return (
            <div className='phone'>

                <Infobar />
                <List getNews={this.getNews} list={this.state.gifs} />
                <Challange active={this.state.secretAcitve} />
            </div>
        );
    }
};

export default App;