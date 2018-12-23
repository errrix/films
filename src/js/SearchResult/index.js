import React from "react";
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {

    render() {
        const {data} = this.props;
        return (
            <div>
                <ul>
                    {
                         ( Array.isArray(this.props.data)) ?
                        ( this.props.data.map((item, index) => {
                                 return (
                                     <li key={item.id}>{item.id}
                                            <Link to={`/film${item.id}`}>{item.title}</Link>
                                     </li>
                                 )
                            })
                        ) : false
                    }
                </ul>
            </div>
        )
    }
};

export default SearchResult;