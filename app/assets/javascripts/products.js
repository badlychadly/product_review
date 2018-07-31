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
        $.get(`/products`)

        event.preventDefault()
    })
})
