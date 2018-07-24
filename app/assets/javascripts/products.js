$(function() {
    $('form').submit(function (event) {
        
        $.ajax({
            type: ($("input[name='_method']").val() || this.method),
            url: this.action,
            data: $(this).serialize(), // either JSON or querystring serializing
            // success: function(response){
                
            // }
            dataType: 'script'
        });

        event.preventDefault();
    })
})
