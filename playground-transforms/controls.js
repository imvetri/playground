class Controls {
    constructor(config) {

    }
}

new Controls({
    item: '#item',

    xRotate: 'input[name="xRotate"]',
    yRotate: 'input[name="yRotate"]',
    zRotate: 'input[name="zRotate"]',

    xSkew: 'input[name="xSkew"]',
    ySkew: 'input[name="ySkew"]',

    xScale: 'input[name="xScale"]',
    yScale: 'input[name="yScale"]',

    xTranslate: 'input[name="xTranslate"]',
    yTranslate: 'input[name="yTranslate"]',

    perspective: 'input[name="perspectiveLength"]'
})