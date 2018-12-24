import React from "react";
import Form from './../Form/'
import SearchResult from './../SearchResult/'
import {saveData, totalPage, inputValue} from "../actions";
import {connect} from "react-redux";


class WebPage extends React.Component {

    render() {
        const {
            saveDataAction,
            totalPageAction,
            data,
            inputValueAction,
            inputValueData
        } = this.props;
        return (
            <div>
                <Form saveData={saveDataAction}
                      totalPage={totalPageAction}
                      inputValue={inputValueAction}
                      inputValueData={inputValueData}
                />

                <SearchResult data={data}/>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    console.log(store.data)
    return {
        data: store.data,
        inputValueData: store.inputValue
    }
};

const mapDispatchToProps = dispatch => ({
    saveDataAction: array => dispatch(saveData(array)),
    totalPageAction: pages => dispatch(totalPage(pages)),
    inputValueAction: pages => dispatch(inputValue(pages))
});

export default connect(mapStateToProps, mapDispatchToProps)(WebPage);
