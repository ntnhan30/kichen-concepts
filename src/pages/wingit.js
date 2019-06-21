import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

const WingIt = () => {
    return (
     <Layout>
        <h1>WingIt</h1>
        <h2><Link to="/">Home Page</Link></h2>
    </Layout>
    )
}

export default WingIt