import React from "react";
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {

    constructor() {
        super();

        this.state = {
            showCount: 10
        };

        this.HandleScroll = this.HandleScroll.bind(this);
    }

    HandleScroll () {

        // console.log( document.querySelector('.list-wrapper').scrollTop);
        // console.log( document.documentElement.scrollTop);
        console.log( document.documentElement.scrollHeight - document.documentElement.scrollTop );
        // console.log( document.querySelector('.list-wrapper').offsetHeight);

        if(document.documentElement.scrollHeight - document.documentElement.scrollTop < 1000 ) {
            this.setState({
                showCount : this.state.showCount + 10
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.HandleScroll, true);
    }

    componentDidUpdate() {
        document.querySelector('.list-wrapper').scrollTop = window.scrollHeight ;
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.HandleScroll);
    }

    render() {
        const {data} = this.props;
        return (
            <div className={'list-wrapper'}>
                <ul>
                    {
                         ( Array.isArray(this.props.data)) ?
                        ( this.props.data.map((item, index) => {
                                if (index < this.state.showCount) {
                                    return (
                                        <li key={item.id} className={'card-film'}>
                                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt=""/>
                                            <Link to={`/film${item.id}`}>{item.title}</Link>
                                        </li>
                                    )
                                }

                            })
                        ) : false
                    }
                </ul>
            </div>
        )
    }
};

export default SearchResult;