# re-quests

Declarative Networking for React.


[![npm](https://img.shields.io/npm/v/re-quests.svg)](https://www.npmjs.com/package/re-quests)
[![npm](https://img.shields.io/npm/dt/re-quests.svg)](https://www.npmjs.com/package/re-quests)


## Quick Start

__1. Install with NPM (or Yarn)__

```
npm install --save re-quests
```

__2. Fire up a network request by rendering the `Request`.__

```jsx
import Request from 're-quests';

...
render (
    <Request
        url='https://my-awesome-doma.in/me'
        onSuccess={this.myAwesomeResponseHandler}>
    
        <div> {/* use View for react-native */}
            <Request.Start>
                <MyAwesomeSpinner />
            </Request.Start>
            <Request.Success>
                <MyAwesomeContent content={this.state.content} />
            </Request.Success>
            <Request.Failure>
                <MyAwesomeErrorMessage />
            </Request.Failure>
        </div>
    </Request>
)
```

__3. Handle the response the way you want.__

```js
myAwesomeResponseHandler = (response) => {
    // set a local state
    this.setState({
        content: response.data
    });
    
    // or dispatch an event
    // this.props.dispatch(myAwesomeAction(response.data));
}
```

## Recipes

For common day problems & how to's, check out the [Recipes] page.

## Disclosure

The library being used for sending requests is [axios]. 
`Request` component is just a declarative wrapper around it, 
exposing a few of the capabilities of [axios]. 



## Props

```js
// `url` is the server URL that will be used for the request
url: PropTypes.string.isRequired,

// the http method is not required by axios &
// defaults to 'get' if not provided
method: PropTypes.oneOf(['get', 'post', 'put', 'patch', 'delete', 'head']),

// `headers` are custom headers to be sent
headers: PropTypes.object,

// `params` are the URL parameters to be sent with the request
// Must be a plain object or a URLSearchParams object
params: PropTypes.object,

// `data` is the data to be sent as the request body
// Only applicable for request methods 'PUT', 'POST', and 'PATCH'
// When no `transformRequest` is set, must be of one of the following types:
// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
// - Browser only: FormData, File, Blob
// - Node only: Stream
data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.instanceOf(ArrayBuffer),
    PropTypes.instanceOf(ArrayBufferView),
    PropTypes.instanceOf(URLSearchParams)
]),

// `paramsSerializer` is an optional function in charge of serializing `params`
// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
// default: function(params) { return Qs.stringify(params, {arrayFormat: 'brackets'}) }
paramsSerializer: PropTypes.func,

// `transformRequest` allows changes to the request data before it is sent to the server
// This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
// The last function in the array must return a string, an ArrayBuffer, FormData, or a Stream
transformRequest: PropTypes.arrayOf(PropTypes.func),

// `transformResponse` allows changes to the response data to be made before
// it is passed to then/catch
transformResponse: PropTypes.arrayOf(PropTypes.func),

// `validateStatus` defines whether to resolve or reject the promise for a given
// HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
// or `undefined`), the promise will be resolved; otherwise, the promise will be
// rejected.
// default: function (status) { return status >= 200 && status < 300; }
validateStatus: PropTypes.func,

// `maxRedirects` defines the maximum number of redirects to follow in node.js.
// If set to 0, no redirects will be followed.
// default: 5
maxRedirects: PropTypes.number,

// `timeout` specifies the number of milliseconds before the request times out.
// If the request takes longer than `timeout`, the request will be aborted.
timeout: PropTypes.number,

// `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
// This will set an `Authorization` header, overwriting any existing
// `Authorization` custom headers you have set using `headers`.
// { username: 'janedoe', password: 's00pers3cret' }
auth: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
}),

// `responseType` indicates the type of data that the server will respond with
// options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
// default: json
responseType: PropTypes.oneOf(['arraybuffer', 'blob', 'document', 'json', 'text', 'stream']),

// `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
// default: 'XSRF-TOKEN'
xsrfCookieName: PropTypes.string,

// `xsrfHeaderName` is the name of the http header that carries the xsrf token value
// default: 'X-XSRF-TOKEN'
xsrfHeaderName: PropTypes.string,


// callback fired just before the request is fired
onStart: PropTypes.func,

// callback fired after the response 
// comes back with status 2XX
onSuccess: PropTypes.func,

// callback fired after the response 
// comes back with status other 2XX
onFailure: PropTypes.func,

// callback fired when 
// something else goes wrong
onError: PropTypes.func,

// defer signals the Request component to not fire the 
// request as soon as ready instead construct the request and 
// wait for the manual trigger
// useful for cases when either the data is incomplete 
// or we want to wait for a CTA 
defer: PropTypes.bool,

// request can be tagged for enabling nested scenarios
// we might want to render a component based on 
// request sent way above the hierarchy of the component
// super grand parent component :P
tag: PropTypes.string
```

## Limitations

 - All `re-quests` components can only have one direct child. 
 Just like [render can only return one child][2127]. This will be fixed with react 16. 

## Contribution

Any and all the contribution is welcome, providing it aligns with the interest of the project. 
Please make sure the commit messages follow the convention from the [git commit template][template].


[Recipes]: https://github.com/ankitpopli1891/re-quests/wiki/Recipes
[template]: https://github.com/ankitpopli1891/re-quests/blob/master/.gitmessage
[axios]: https://github.com/mzabriskie/axios
[2127]: https://github.com/facebook/react/issues/2127
