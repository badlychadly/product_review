$(function () {
    $('#new_review').submit(function (e) {
        
        $.ajax({
            type: ($("input[name='_method']").val() || this.method),
            url: this.action,
            data: $(this).serialize(), 
            success: function(response){
                // debugger;
            }
        });
        
        e.preventDefault()
    })
})
