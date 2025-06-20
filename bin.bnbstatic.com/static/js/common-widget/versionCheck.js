var versionIsLessThan18 = React.version.split('.')[0] < 18;
var ReactDOMNew = window.ReactDOMClient || window.ReactDOM;
if (versionIsLessThan18) {
    window.hydarteHandler = (reactElement, element) => ReactDOM.hydrate(reactElement, element);
} else {
    window.hydarteHandler = (reactElement, element) => {
        ReactDOMNew.hydrateRoot(element, reactElement);
    };
}
if (versionIsLessThan18) {
    window.renderHandler = (reactElement, element) => ReactDOM.render(reactElement, element);
} else {
    window.renderHandler = (reactElement, element) => {
        ReactDOMNew.createRoot(element).render(reactElement);
    };
}