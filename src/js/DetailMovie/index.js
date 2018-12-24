import React from "react";

class DetailMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        };

        fetch(`https://api.themoviedb.org/3/movie/${this.props.itemId}?api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&language=ru-Ru`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                this.setState({
                    data : response
                });
                console.log(this.state.data);
            })
            .catch(alert);

        // this.addArticle = this.addArticle.bind(this);
    }

    render() {
        const {itemId} = this.props;
        return (
            <div className={'page-film'}>
                <h2>{this.state.data.title}</h2>

                <div className={'page-film-wrapper'}>
                    <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt=""/>

                    <div className={'right-part'}>
                        <div>
                            <h3>Дата выхода - <span> {this.state.data.release_date}</span></h3>
                            <p>
                                {this.state.data.overview}
                            </p>
                        </div>

                        <div className={'vote'}>
                            Оценка - {this.state.data.vote_average}
                        </div>
                    </div>
                </div>

                <div className={'janre-films'}>
                    <h2>Похожие фильмы</h2>
                </div>
            </div>
        )
    }
};

export default DetailMovie;