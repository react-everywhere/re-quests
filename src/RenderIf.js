import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

import * as STATE from './States';

export class RenderIf extends React.Component {
    render() {
        if (this.props.tag && this.context.tag !== this.props.tag) {
            return null;
        }

        if (this.props.stateIn.indexOf(this.context.status) === -1) {
            return null;
        }

        const {children} = this.props;
        invariant(children || React.Children.count(children) === 1,
            'A <RenderIf> may have only one child element'
        );

        return (
            (children) ? React.Children.only(children) : null
        );
    }
}

RenderIf.contextTypes = {
    status: PropTypes.oneOf(STATE.ALL),
    response: PropTypes.object,
    error: PropTypes.object,
    tag: PropTypes.string
};


RenderIf.propTypes = {
    stateIn: PropTypes.array.isRequired
};

// just for backward compatibility until the next version
// can't change the production apps with immediately :)
export const RequestInit = (props) => {
    return (
        <RenderIf stateIn={[STATE.INIT]} {...props} />
    )
};

export const RequestStart = (props) => {
    return (
        <RenderIf stateIn={[STATE.START]} {...props} />
    )
};

export const RequestSuccess = (props) => {
    return (
        <RenderIf stateIn={[STATE.SUCCESS]} {...props} />
    )
};

export const RequestFailure = (props) => {
    return (
        <RenderIf stateIn={[STATE.FAILURE]} {...props} />
    )
};

export const RequestError = (props) => {
    return (
        <RenderIf stateIn={[STATE.ERROR]} {...props} />
    )
};
