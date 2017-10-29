import React, { Component } from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.scrolledCheck = this.scrolledCheck.bind(this);
    }
    scrolledCheck() {
        this.list.addEventListener('scroll', () => {
            let scrollCheck =  this.list.scrollHeight -  this.list.scrollTop -  this.list.clientHeight < 100;
            if (scrollCheck) {
                this.props.getNews()
            }
        })
    }
    componentDidMount() {
        this.scrolledCheck()
    }
    render() {
        return (
            <div className='list' >
                <ul ref={ul => this.list = ul} >
                    {
                        this.props.list.map(
                            (item, key) =>
                                <li key={key}>
                                    <img src={item.images.downsized.url} alt="" />
                                </li>
                        )
                    }
                </ul>
            </div>
        );
    }

};

export default List;