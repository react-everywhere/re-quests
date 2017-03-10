import React from 'react';
import axios from 'axios';

const [INIT, START, SUCCESS, FAILURE, ERROR] = [0, 1, 2, 3, 4];
const [ArrayBuffer, ArrayBufferView, URLSearchParams] = [
    ArrayBuffer || Object,
    ArrayBufferView || Object,
    URLSearchParams || Object
];

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: INIT,
            response: null,
            error: null
        };
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
        const {
            url, method, headers, params,
            data, timeout, auth, responseType,
            xsrfCookieName, xsrfHeaderName
        } = this.props;

        const config = {
            url, method, headers, params,
            data, timeout, auth, responseType,
            xsrfCookieName, xsrfHeaderName
        };

        // remove the undefined keys
        Object.keys(config).map((k) => config[k] === undefined ? delete config[k] : false);

        this.setState({status: START}, this.props.onStart);
        axios.request(config).then((response) => {
            const code = Math.round(response.status / 100);
            switch (code) {
                case 2:
                    this.setState({status: SUCCESS, response},
                        (this.props.onSuccess) ? this.onSuccess : undefined
                    );
                    break;
                default:
                    this.setState({status: FAILURE, response},
                        (this.props.onFailure) ? this.onFailure : undefined
                    );
            }
        }).catch((err) => {
            this.setState({status: ERROR, error: err},
                (this.props.onError) ? this.onError : undefined
            );
        });
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
Request.propTypes = {
    url: React.PropTypes.string.isRequired,

    // the http method is not required by axios &
    // defaults to 'get' if not provided
    method: React.PropTypes.oneOf(['get', 'post', 'put', 'patch', 'delete', 'head']),

    // `headers` are custom headers to be sent
    headers: React.PropTypes.object,

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    params: React.PropTypes.object,

    // `data` is the data to be sent as the request body
    // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // When no `transformRequest` is set, must be of one of the following types:
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream
    data: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object,
        React.PropTypes.instanceOf(ArrayBuffer),
        React.PropTypes.instanceOf(ArrayBufferView),
        React.PropTypes.instanceOf(URLSearchParams)
    ]),

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: React.PropTypes.number,

    // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
    // This will set an `Authorization` header, overwriting any existing
    // `Authorization` custom headers you have set using `headers`.
    // { username: 'janedoe', password: 's00pers3cret' }
    auth: React.PropTypes.object,

    // `responseType` indicates the type of data that the server will respond with
    // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    // default: json
    responseType: React.PropTypes.oneOf(['arraybuffer', 'blob', 'document', 'json', 'text', 'stream']),

    // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
    // default: 'XSRF-TOKEN'
    xsrfCookieName: React.PropTypes.string,

    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    // default: 'X-XSRF-TOKEN'
    xsrfHeaderName: React.PropTypes.string,

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
