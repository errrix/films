import React from "react";
import CardMovie from "../CardMovie";

class InCinema extends React.Component {
    constructor() {
        super();

        this.state = {
            array: []
        };

        fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&language=ru-Ru`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                this.setState({
                    array : response.results
                })
                console.log(this.state.array);
            })
            .catch(alert);

        // this.addArticle = this.addArticle.bind(this);
    }

    render() {
        // const {saveDataAction, totalPageAction, data} = this.props;
        return (
            <div className={'search-results-block'}>

                {
                    ( Array.isArray(this.state.array) && this.state.array.length > 0) ? (

                        <h1>СЕГОДНЯ В КИНО</h1>

                    ) : false
                }

                <ul className={'list-wrapper'}>
                    {
                        (this.state.array.map((item, index) => {
                                return <CardMovie id = {item.id}
                                               poster_path = {item.poster_path}
                                               title = {item.title}
                                               release_date = {item.release_date}
                                               overview = {item.overview}
                                               vote_average = {item.vote_average}
                                    />


                                {/*<li key={item.id} >{item.id} {item.title}*/}
                                         {/*<Link to={`/film${item.id}`}>{item.title}</Link>*/}
                                {/*</li>*/}
                            })
                        )
                    }
                </ul>
            </div>
        )
    }
};

export default InCinema;
