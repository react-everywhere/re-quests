# react-requests

HTTP requests, the React way. 


[![npm](https://img.shields.io/npm/v/react-requests.svg)](https://www.npmjs.com/package/react-requests)
[![npm](https://img.shields.io/npm/dt/react-requests.svg)](https://www.npmjs.com/package/react-requests)


> __Disclaimer__: The project currently is in its infancy. The APIs may or may not change. 
> We are totally unsure if there are any cons to this approach. 
> Checkout the [Philosophy] page, to get an idea why we created this package.
> If you disagree, we wanna listen :ear:, or rather read :book:.  

## Installation

```
npm install react-requests
```

## Example

```

<Request
    url='https://my-awesome-doma.in/me'
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


## Recipes

Check out the [Recipes] page.


## Contribution

Any and all the contribution is welcome, providing it aligns with the interest of the project. 
Please make sure the commit messages follow the convention from the [git commit template][template].


[Recipes]: https://www.npmjs.com/package/react-requests
[Philosophy]: https://www.npmjs.com/package/react-requests
[template]: https://github.com/ankitpopli1891/react-requests/blob/master/.gitmessage
