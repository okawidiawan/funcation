import React, { Component } from 'react';
import Header from 'parts/Header';
import { render } from '@testing-library/react';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
            </>
        );
    }
}

