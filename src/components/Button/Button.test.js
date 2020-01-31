import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Button from './Button';

describe('ProductHeader Component', () => {

    it('has an h2 tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<Button />);
        var button = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'button'
        )
    });

    it('has a title class', () => {

        const component = ReactTestUtils.renderIntoDocument(<Button />);
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'title'
        );
    })
})