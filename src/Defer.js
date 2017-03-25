import React from 'react';
import invariant from 'invariant';

/*
 * TODO:
 * Ideally whenever the component is rendered,
 * it should set the parent Request component
 * defer prop to true
 */
export default class RequestDefer extends React.Component {
    render() {
        const {children, action} = this.props;

        invariant(children || React.Children.count(children) === 1,
            'A <RequestDefer> may have only one child element'
        );

        const props = {[action]: this.context.request};
        return (
            (children) ?
                React.cloneElement(React.Children.only(children), props) :
                null
        );
    }
}

RequestDefer.propTypes = {
    action: React.PropTypes.string.isRequired
};

RequestDefer.contextTypes = {
    request: React.PropTypes.func
};
