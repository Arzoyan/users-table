import React from 'react'
import AntdTable from '../components/AntdTable'

const HomePage = (props) => {
    const redirect = (data) => {
        props.history.push(data)
    }
    return (
        <AntdTable redirect={redirect} />
    )
}

export default HomePage