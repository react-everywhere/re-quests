# re-quests

Declarative Networking for React.


[![npm](https://img.shields.io/npm/v/re-quests.svg)](https://www.npmjs.com/package/react-requests)
[![npm](https://img.shields.io/npm/dt/re-quests.svg)](https://www.npmjs.com/package/react-requests)


> Checkout the [Philosophy] page, to get an idea why we created this package.
> If you disagree, we wanna listen :ear:, or rather read :book:.  

## Installation

```
npm install re-quests
```

## Example

```jsx
import Request from 're-quests';

<Request
    url='https://my-awesome-doma.in/me'
    onSuccess={this.myAwesomeResponseHandler}>

    {/*
    Request element can have only one Child,
    when using React-DOM it will be <div>,
    when using React-native it will be <View>,
    the limitation is because of the issue
    See: https://github.com/facebook/react/issues/2127
    */}

    <div>
        <Request.Start>
            <MyAwesomeSpinner />
        </Request.Start>
        <Request.Success>
            <MyAwesomeContent />
        </Request.Success>
        <Request.Failure>
            <MyAwesomeErrorMessage />
        </Request.Failure>
    </div>
</Request>
```


## Recipes

Check out the [Recipes] page.


## Contribution

Any and all the contribution is welcome, providing it aligns with the interest of the project. 
Please make sure the commit messages follow the convention from the [git commit template][template].


[Recipes]: https://github.com/ankitpopli1891/re-quests/wiki/Recipes
[Philosophy]: https://github.com/ankitpopli1891/re-quests/wiki/Philosophy
[template]: https://github.com/ankitpopli1891/re-quests/blob/master/.gitmessage
