function init_selector() {

  var SelectList = {
    fn: {
      prepare: function() {
        var $select = $('select');

        for(let i = 0; $select.length > i ; i ++) {
          this.createSelect($select[i]);
        }
      },

      createSelect: function(item) {

        if(item !== undefined) {
          var id = $(item).attr('id')
          var select = $(`<div class="custom-select-box"  data-id="${id}"/>`);
          var html = `<div class="custom-select-text form-control""></div>`;

          html += `<ul class="custom-select-list">`;

          $('option', item).each(function() {
            var $option = $(this);
            var value = $option.val();
            var text = $option.text();
            html += '<li data-value="' + value + '">' + text + '</li>';
          });

          html += '</ul>';
          select.html(html).insertBefore(item);
        }

      },

      showHide: function() {
        $('.custom-select-text', '.custom-select-box').on('click', function() {
          var $trigger = $(this);
          var list = $trigger.next();
          if(list.is(':hidden')) {
            list.show();
            $trigger.addClass('active');
          } else {
            list.hide();
            $trigger.removeClass('active');
          }
        });
      },

      select: function() {
        $('li', '.custom-select-list').on('click', function() {

          var $li = $(this);
          var $selector = $li.parent().parent().data('id');
          var $trigger = $li.parent().parent().find('.custom-select-text');

          var value = $li.data('value');
          var text = $li.text();

          $trigger.text(text);

          $li.parent().hide('slow', function() {
            $('#' + $selector).val(value);
          });

          $trigger.removeClass('active');

        });
      }
    },

    init: function() {
      for(var method in this.fn) {
        this.fn[method]();
      }

    }
  };

  $(function() {
      SelectList.init();
  });
}

