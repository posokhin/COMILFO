/* form-fields animate */
function placeholderAnimate() {
    $(this).siblings('.form__field-placeholder').addClass('active');
}
var inputs = document.querySelectorAll('.form__field input');
if (inputs.length) {
    inputs.forEach(function (el) {
        el.addEventListener('focus', placeholderAnimate);
        el.addEventListener('blur', function () {
            if (this.value == '') {
                $(this).siblings('.form__field-placeholder').removeClass('active');
            }
        });
    });
}
/* form-fields animate end */


/* tabs */
function tabs(item, parent, content) {
    $(item).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active').closest(parent).find(content).removeClass('active').animate({
            opacity: 0
        }, 300).eq($(this).index()).addClass('active').animate({
            opacity: 1
        }, 300);
    });
}
/* tabs end */