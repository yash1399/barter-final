import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div>
            <Search
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="Search By Typing..."
                style={{ width: 1000, marginRight:200, textAlign: "center", marginLeft: 800  }}
            />
        </div>
    )
}

export default SearchFeature
