import React from "react";
import Form from './../Form/'
import SearchResult from './../SearchResult/'
import {saveData, totalPage, inputValue, currentPage, updateData} from "../actions";
import {connect} from "react-redux";


class WebPage extends React.Component {

    render() {
        const {
            saveDataAction,
            totalPageAction,
            data,
            inputValueAction,
            inputValueData,
            currentPageAction,
            updateDataAction
        } = this.props;
        return (
            <div>
                <Form saveData={saveDataAction}
                      totalPage={totalPageAction}
                      inputValue={inputValueAction}
                      currentPage={currentPageAction}
                      inputValueData={inputValueData}
                />

                <SearchResult data={data}
                              updateData={updateDataAction}
                              currentPage={currentPageAction}
                />
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        data: store,
        inputValueData: store.inputValue
    }
};

const mapDispatchToProps = dispatch => ({
    saveDataAction: array => dispatch(saveData(array)),
    totalPageAction: pages => dispatch(totalPage(pages)),
    inputValueAction: string => dispatch(inputValue(string)),
    currentPageAction: page => dispatch(currentPage(page)),
    updateDataAction: array => dispatch(updateData(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(WebPage);
