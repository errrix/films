import React from "react";
import { Link } from 'react-router-dom';
import CardMovie from "../CardMovie";

class SearchResult extends React.Component {

    constructor() {
        super();

        this.state = {
            showCount: 10
        };

        this.HandleScroll = this.HandleScroll.bind(this);
    }

    HandleScroll () {
        console.log( document.documentElement.scrollHeight - document.documentElement.scrollTop );
        if(document.documentElement.scrollHeight - document.documentElement.scrollTop < 1200 ) {
            this.setState({
                showCount : this.state.showCount + 10
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.HandleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.HandleScroll);
    }

    render() {
        const {data} = this.props;
        return (
            <div className={'search-results-block'}>
                {
                    ( Array.isArray(this.props.data) && this.props.data.length > 0) ? (

                        <h1>РЕЗУЛЬТАТЫ ПОИСКА</h1>

                    ) : false
                }
                <ul className={'list-wrapper'}>
                    {
                         ( Array.isArray(this.props.data)) ?
                        ( this.props.data.map((item, index) => {
                                if (index < this.state.showCount) {
                                    return (
                                        <CardMovie id = {item.id}
                                                   poster_path = {item.poster_path}
                                                   title = {item.title}
                                                   release_date = {item.release_date}
                                                   overview = {item.overview}
                                                   vote_average = {item.vote_average}
                                        />
                                        // <li key={item.id} className={'card-film'}>
                                        //
                                        //     <div className={'image-block'}>
                                        //         <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt=""/>
                                        //     </div>
                                        //
                                        //     <div className={'text-block'}>
                                        //         <div className={'top-block'}>
                                        //             <h2>{item.title}</h2>
                                        //             <h3>Дата выхода - <span> {item.release_date}</span></h3>
                                        //             <p>
                                        //                 {item.overview}
                                        //             </p>
                                        //         </div>
                                        //         <div className={'bottom-block'}>
                                        //             <div className={'vote'}>
                                        //                 Оценка - {item.vote_average}
                                        //             </div>
                                        //             <Link to={`/film${item.id}`}>Подробнее о фильме</Link>
                                        //         </div>
                                        //
                                        //     </div>
                                        //
                                        //
                                        // </li>
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