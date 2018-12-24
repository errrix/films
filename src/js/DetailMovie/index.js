import React from "react";
import {connect} from "react-redux";
import CardMovie from "./../CardMovie/"

class DetailMovie extends React.Component {
    constructor() {
        super();

        this.state = {
            dataDetail: {},
            similar: {}
        };
    }

    componentDidMount() {
        if (Array.isArray(this.props.data1) && this.props.data1.length > 0) {
            this.props.data1.forEach((elem) => {
                if (elem.id === +this.props.itemId) {
                    this.setState({
                        dataDetail: elem
                    })
                }
            });
        } else {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.itemId}?api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&language=ru-Ru`)
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    this.setState({
                        dataDetail: response
                    });
                })
                .catch(alert);
        }
        fetch(`https://api.themoviedb.org/3/movie/${this.props.itemId}/similar?api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&language=ru-Ru`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                this.setState({
                    similar: response.results
                });
            })
            .catch(alert);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.dataDetail.id !== +this.props.itemId) {
           document.documentElement.scrollTop = 0;
            fetch(`https://api.themoviedb.org/3/movie/${this.props.itemId}?api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&language=ru-Ru`)
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    this.setState({
                        dataDetail: response
                    });
                })
                .catch(alert);
            fetch(`https://api.themoviedb.org/3/movie/${this.props.itemId}/similar?api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&language=ru-Ru`)
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    this.setState({
                        similar: response.results
                    });
                })
                .catch(alert);
        }
    }

    render() {
        return (
            <div className={'page-film'}>
                <h2>{this.state.dataDetail.title}</h2>

                <div className={'page-film-wrapper'}>
                    <img src={`https://image.tmdb.org/t/p/w500${ this.state.dataDetail.poster_path}`} alt=""/>

                    <div className={'right-part'}>
                        <div>
                            <h3>Дата выхода - <span> {this.state.dataDetail.release_date}</span></h3>
                            <p>
                                {this.state.dataDetail.overview}
                            </p>
                        </div>

                        <div className={'vote'}>
                            Оценка - {this.state.dataDetail.vote_average}
                        </div>
                    </div>
                </div>

                <div className={'janre-films'}>
                    <h2>Похожие фильмы</h2>

                    <ul className={'similar-films'}>
                        {
                            (Array.isArray(this.state.similar)) ?
                                (this.state.similar.map((item, index) => {
                                        if (index < 4) {
                                            return (
                                                <CardMovie key={item.id}
                                                           id={item.id}
                                                           poster_path={item.poster_path}
                                                           title={item.title}
                                                           release_date={item.release_date}
                                                           overview={item.overview}
                                                           vote_average={item.vote_average}
                                                />
                                            )
                                        }
                                    })
                                ) : false
                        }
                    </ul>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        data1: store.data,
    }
};

export default connect(mapStateToProps)(DetailMovie);
