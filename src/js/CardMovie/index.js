import React from "react";
import { Link } from 'react-router-dom';


class CardMovie extends React.Component {

    render() {
        const {id, poster_path, title, release_date, overview ,vote_average} = this.props;
        return (
            <li key={this.props.id} className={'card-film'}>

                <div className={'image-block'}>
                    <img src={`https://image.tmdb.org/t/p/w200${this.props.poster_path}`} alt=""/>
                </div>

                <div className={'text-block'}>
                    <div className={'top-block'}>
                        <h2>{this.props.title}</h2>
                        <h3>Дата выхода - <span> {this.props.release_date}</span></h3>
                        <p>
                            {this.props.overview}
                        </p>
                    </div>
                    <div className={'bottom-block'}>
                        <div className={'vote'}>
                            Оценка - {this.props.vote_average}
                        </div>
                        <Link to={`/film${this.props.id}`}>Подробнее о фильме</Link>
                    </div>

                </div>


            </li>
        )
    }
};


export default CardMovie;