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


    $('.nextProduct').click(function (event) {
        // id = $(this).data('productId') + 1;
        id = parseInt($(this).attr("data-product-id")) + 1
        // debugger;
        $.get(`/products/${id}/reviews`, function (data) {
            $('body').html($.parseHTML(data))
            $(this).attr("data-product-id", (id + 1))
        })

        event.preventDefault()
    })
})
