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

    $(document).on('click', '.nextProduct', function (event) {
        // $('.nextProduct').click(function (event) {
            var id = parseInt($(this).attr("data-product-id")) + 1
            $.get(`/products/${id}/reviews`, function (data) {
                $('body').html($.parseHTML(data))
            })
    
            event.preventDefault()
        
    });
})
