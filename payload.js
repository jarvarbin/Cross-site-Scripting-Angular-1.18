const inertPayload = `<div><style><style/><img src=x onerror="alert(Hello XSS)"/>`
angular.element(document.childNodes).append(inertPayload);
