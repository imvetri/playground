class Controls {
    constructor(config) {
        this.queryElements(config);
        this.bindEvents();
    }

    bindEvents() {
        this.xScale.addEventListener("change", e => this.item.style.transform = "scaleX("+e.target.value +")");
        this.yScale.addEventListener("change", e => this.item.style.transform = "scaleY("+e.target.value +")");
    }
    queryElements(config) {
        Object.keys(config)
            .forEach(key => this[key] = document.querySelector(config[key]));
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