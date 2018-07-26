$(function() {
    $('#searchForm').submit(function (event) {
        
        $.ajax({
            type: ($("input[name='_method']").val() || this.method),
            url: this.action,
            data: $(this).serialize(),
            dataType: 'script'
        });

        event.preventDefault();
    })
})
