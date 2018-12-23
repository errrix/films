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
            <div>
               <h1>{this.state.data.title}</h1>
                <h2>
                    {this.state.data.overview}
                </h2>
                <p>
                </p>
            </div>
        )
    }
};

export default DetailMovie;