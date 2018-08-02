$(function() {
    $('#searchForm').submit(function (event) {
        
        $.ajax({
            type: this.method,
            // type: ($("input[name='_method']").val() || this.method),
            url: this.action,
            data: $(this).serialize(),
            dataType: 'script'
        });

        event.preventDefault();
    })

    $('#pageContainer').on('click', '.nextProduct', function (event) {
            var id = parseInt($(this).attr("data-product-id")) + 1
            $.get(`/products/${id}/reviews`, function (data) {
                var html = $.parseHTML(data)
                $('#pageContainer').html($(html).filter('#pageContainer'))
            })
    
            event.preventDefault()
        
    });
})
