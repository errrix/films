import React from "react";
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
        if(document.documentElement.scrollHeight - document.documentElement.scrollTop < 1200 ) {
            if (this.props.data.data.length >  this.state.showCount) {
                this.setState({
                    showCount : this.state.showCount + 10
                });

            } else if ( (this.props.data.data.length <=  this.state.showCount) &&
                        (+this.props.data.totalPage > +this.props.data.currentPage)) {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&query=${this.props.data.inputValue}&language=ru-Ru&page=${+this.props.data.currentPage + 1}`)
                    .then((response) => {
                        return response.json()
                    })
                    .then( (response) => {
                        this.props.updateData(response.results);
                        this.props.currentPage(+this.props.data.currentPage + 1);
                        this.setState({
                            showCount : this.state.showCount + 10
                        });
                    })
                    .catch(alert);
            }
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
                    ( Array.isArray(this.props.data.data) && this.props.data.data.length > 0) ? (

                        <h1>РЕЗУЛЬТАТЫ ПОИСКА</h1>

                    ) : false
                }
                <ul className={'list-wrapper'}>
                    {
                         ( Array.isArray(this.props.data.data)) ?
                        ( this.props.data.data.map((item, index) => {
                                if (index < this.state.showCount) {
                                    return (
                                        <CardMovie key={item.id} id = {item.id}
                                                   poster_path = {item.poster_path}
                                                   title = {item.title}
                                                   release_date = {item.release_date}
                                                   overview = {item.overview}
                                                   vote_average = {item.vote_average}
                                        />
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