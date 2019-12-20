function Fields(el, pattern) {
    this.el = document.querySelector(el);
    this.pattern = pattern;
    let self = this;
    this.validate = function () {
        let validator = self.pattern.test(this.el.value);
        console.log(validator);
        return validator;
    }
    this.getEl = function () {
        console.log(self.el);
        return self.el;
    }
}