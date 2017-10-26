class Controls {
    constructor(config) {
        this.queryElements(config);
        this.initValues();
        this.bindEvents();
    }
    bindEvents() {
        this.xScale.addEventListener("change", e => this.item.style.transform = this.getTransform(this.xRotateValue, this.yRotateValue, this.zRotateValue, this.xSkewValue, this.ySkewValue, Number(e.target.value), this.yScaleValue, this.xTranslateValue, this.yTranslateValue, this.perspectiveValue));
        this.yScale.addEventListener("change", e => this.item.style.transform = this.getTransform(this.xRotateValue, this.yRotateValue, this.zRotateValue, this.xSkewValue, this.ySkewValue, this.xRotateValue, Number(e.target.value), this.xTranslateValue, this.yTranslateValue, this.perspectiveValue));
    }
    queryElements(config) {
        Object.keys(config)
            .forEach(key => this[key] = document.querySelector(config[key]));
    }
    initValues() {
        this.xRotateValue = this.yRotateValue = this.zRotateValue = this.xSkewValue = this.ySkewValue = this.xScaleValue = this.yScaleValue = this.xTranslateValue = this.yTranslateValue = this.perspectiveValue = 1;
    }
    //too much head ache to write reg ex, especially to handle empty scenario
    getTransform(xRotate, yRotate, zRotate, xSkew, ySkew, xScale, yScale, xTranslate, yTranslate, perspective) {
        this.xRotateValue = xRotate
        this.yRotateValue = yRotate
        this.zRotateValue = zRotate

        this.xSkewValue = xSkew
        this.ySkewValue = ySkew

        this.xScaleValue = xScale
        this.yScaleValue = yScale

        this.xTranslateValue = xTranslate
        this.yTranslateValue = yTranslate
        this.perspectiveValue = perspective

        return `rotateX(${this.xRotateValue})rotateY(${this.yRotateValue})rotateZ(${this.zRotateValue})skewX(${this.xSkewValue})skewY(${this.ySkewValue})scaleX(${this.xScaleValue})scaleY(${this.yScaleValue})translateX(${this.xTranslateValue})translateY(${this.yTranslateValue})perspective(${this.perspectiveValue})`;
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