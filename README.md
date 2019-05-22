# rn-core-utils

React Native Core Utils is a package of utility functions that are most times copied over/recreated in every new React Native project while developing scalable and maintainable applications.

## Installation
```
npm install rn-core-utils --save
```

**Example Usage**

```
import { Validation, Sizer } from 'rn-core-utils';

onCheckEmail = () => {
    const isEmailValid = Validation.validateEmail('username@company.com');
    if (isEmailValid) {
        console.log('Email validation pass');
    } else {
        console.log('Please enter valid email id');
    }
};

render() {
    return (
        <TouchableOpacity onPress={this.onCheckEmail}>
            <Text style={{ fontSize: Sizer.fontSizer(20) }}></Text>
        </TouchableOpacity>
    );
}
```
