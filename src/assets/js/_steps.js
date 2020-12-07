function init_plugins() {
  $(function () {
    var step = 0;
    var stepItem = $('.step-progress .step-slider .step-slider-item');

    $('.step-content-foot button[name="prev"]').addClass('out');

    // inicializar el primer item
    $(stepItem[0]).addClass('active')
    // Step Next
    $('.step-content-foot button[name="next"]').on('click', function () {
      var instance = $(this);

      if (stepItem.length - 1 < step) {
        return;
      }
      $('.step-content-foot button[name="prev"]').removeClass('out');
      if (step === (stepItem.length - 2)) {
        instance.addClass('out');
        instance.siblings('button[name="finish"]').removeClass('out');
      }
      step++;
      $(stepItem[step]).addClass('active');
      $('.step-content-body').addClass('out');
      $('#' + stepItem[step].dataset.id).removeClass('out');
    });

    // Step Previous
    $('.step-content-foot button[name="prev"]').on('click', function () {
      if (step - 1 < 0) {
        return;
      }
      step--;
      var instance = $(this);
      if (step <= (stepItem.length - 1)) {
        instance.siblings('button[name="next"]').removeClass('out');
        instance.siblings('button[name="finish"]').addClass('out');
      }
      $('.step-content-body').addClass('out');
      $('#' + stepItem[step].dataset.id).removeClass('out');
      if (step === 0) {
        stepItem.removeClass('active');
      } else {
        stepItem.filter(':gt(' + (step) + ')').removeClass('active');
      }
      if (step - 1 < 0) {
        $('.step-content-foot button[name="prev"]').addClass('out');
        $(stepItem[0]).addClass('active')
      }
    });
  });
}
