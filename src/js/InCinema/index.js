import React from "react";
import { Link } from 'react-router-dom';

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
            <div>
                <ul>
                    {
                        (this.state.array.map((item, index) => {
                                return <li key={item.id} >{item.id} {item.title}
                                         <Link to={`/film${item.id}`}>{item.title}</Link>
                                </li>
                            })
                        )
                    }
                </ul>
            </div>
        )
    }
};

export default InCinema;
