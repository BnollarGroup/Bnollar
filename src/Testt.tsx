import { fetchData } from 'api/apiService'
import React from 'react'

const Testt = () => {
    fetchData('http://64.226.94.204:1337/api/chat/messages/1')
    return (
        <div>test</div>
    )
}

export default Testt