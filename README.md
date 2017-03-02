# react-requests

HTTP requests, the React way.

---

## Installation

```
npm install react-requests
```

## Example

```

<Request
    url='https://my-awesome-doma.in'
    onSuccess={this.myAwesomeResponseHandler}
    renderOnStart={() => {
        return (
            <MyAwesomeSpinner />
        )
    }}
    renderOnSuccess={() => {
        return (
            <MyAwesomeContent />
        )
    }}
    renderOnError={() => {
        return (
            <MyAwesomeErrorMessage />
        )
    }}
/>
```
