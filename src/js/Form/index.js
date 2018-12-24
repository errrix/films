import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.myAdd = this.myAdd.bind(this);
    }

    myAdd (e) {
        this.props.inputValue(e.target.value);
        if (e.target.value !=='') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=39a3fe1b6db3dfb1cf6cc4cbc1f0db5e&query=${e.target.value}&language=ru-Ru`)
                .then((response) => {
                    return response.json()
                })
                .then( (response) => {
                    this.props.saveData(response.results);
                    this.props.totalPage(response.total_pages);
                })
                .catch(alert);
        }
    };

    render() {
        const {inputValueData} = this.props;
        return (
            <div className={'search-input-block'}>
                <p>Введите название фильма</p>
                <form action="">
                    <label className="main-input">
                        <input onChange={this.myAdd} type="text" value={inputValueData}/>
                    </label>

                </form>
            </div>
        )
    }
};

export default Form;
