import React from 'react';
import axios from 'axios';

const [INIT, START, SUCCESS, FAILURE, ERROR] = [0, 1, 2, 3, 4];

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: INIT,
            response: null,
            error: null
        }
    }

    render() {
        const render = [
            this.props.renderOnStart,
            this.props.renderOnSuccess,
            this.props.renderOnFailure,
            this.props.renderOnError
        ][[START, SUCCESS, FAILURE, ERROR].indexOf(this.state.status)];
        return (
            (!render) ? null : render()
        );
    }

    /**
     * componentDidMount() is invoked immediately after a component is mounted.
     * Initialization that requires DOM nodes should go here.
     * If you need to load data from a remote endpoint,
     * this is a good place to instantiate the network request.
     * Setting state in this method will trigger a re-rendering.
     */
    componentDidMount() {
        const {url, headers} = this.props;

        this.setState({status: START}, this.props.onStart);
        axios.request({
            url: url,
            headers: headers
        }).then((response) => {
            const code = Math.round(response.status / 100);
            switch (code) {
                case 2:
                    this.setState({status: SUCCESS, response: response},
                        (this.props.onSuccess) ? this.onSuccess : undefined
                    );
                    break;
                default:
                    this.setState({status: FAILURE, response: response},
                        (this.props.onFailure) ? this.onFailure : undefined
                    );
            }
        }).catch((err) => {
            this.setState({status: ERROR, error: err},
                (this.props.onError) ? this.onError : undefined
            );
        })
    }

    onSuccess = () => {
        this.props.onSuccess(this.state.response);
    };

    onFailure = () => {
        this.props.onFailure(this.state.response);
    };

    onError = () => {
        this.props.onError(this.state.error);
    };
}

/*
 * See: https://github.com/mzabriskie/axios#request-config
 * More PropTypes will be added as & when required.
 */
Request.PropTypes = {
    url: React.PropTypes.string.isRequired,

    // the http method is not required by axios &
    // defaults to 'get' if not provided
    method: React.PropTypes.oneOf(['get', 'post', 'put', 'patch', 'delete']),

    // `headers` are custom headers to be sent
    headers: React.PropTypes.object,

    /*
     * Props that behave either as hooks/callbacks,
     * these are the APIs provided by us.
     */
    onStart: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onFailure: React.PropTypes.func,
    onError: React.PropTypes.func,

    renderOnStart: React.PropTypes.func,
    renderOnSuccess: React.PropTypes.func,
    renderOnFailure: React.PropTypes.func,
    renderOnError: React.PropTypes.func
};


export default Request;
