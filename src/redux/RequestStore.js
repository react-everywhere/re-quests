import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';


class RequestStore extends React.Component {
    // noinspection JSUnusedGlobalSymbols
    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        const {children} = this.props;

        invariant(
            children || React.Children.count(children) === 1,
            'A <RequestStore> may have only one child element'
        );

        return (
            (children) ? React.Children.only(children) : null
        );
    }
}

RequestStore.propTypes = {
    store: PropTypes.object.isRequired
};

RequestStore.childContextTypes = {
    store: PropTypes.object
};

export default RequestStore;
