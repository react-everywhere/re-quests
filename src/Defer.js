import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

/*
 * TODO:
 * Ideally whenever the component is rendered,
 * it should set the parent Request component
 * defer prop to true
 *
 * This was a f mistake. Shouldn't have made this component. :/
 * Why didn't I think of ref earlier :(
 */
export default class RequestDefer extends React.Component {
    render() {
        console.warn('<RequestDefer> is deprecated. ' +
            'Please use refs, https://facebook.github.io/react/docs/refs-and-the-dom.html.' +
            'The component will be removed in next release.');
        const {children, action} = this.props;

        invariant(children || React.Children.count(children) === 1,
            'A <RequestDefer> may have only one child element'
        );

        const props = {[action]: this.context.fire};
        return (
            (children) ?
                React.cloneElement(React.Children.only(children), props) :
                null
        );
    }
}

RequestDefer.propTypes = {
    action: PropTypes.string.isRequired
};

RequestDefer.contextTypes = {
    request: PropTypes.func
};
