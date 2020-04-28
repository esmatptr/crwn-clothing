import React from 'react';

// Components
import Directory from '../../components/directory/directory.component';

// Styles
// import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles'


const HomePage = () => {
    return (
        // <div className='homepage'>
        //     <Directory />
        // </div>
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage;