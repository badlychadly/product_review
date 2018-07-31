$(function() {
    $('#new_review').submit(function (event) {
        $.ajax({
            type: ($("input[name='_method']").val() || this.method),
            async: true,
            url: this.action,
            data: $(this).serialize(),
            dataType: 'script'
        }).done(function () {
            $('#review_content').val("").attr("disabled", true)
        })
        event.preventDefault()
    })
})

$(function() {
    $('#deleteComment').submit(function (event) {
        // debugger;
        id = this.dataset.num
        $.ajax({
            type: "DELETE",
            async: true,
            url: this.action,
            data: $(this).serialize(),
            // dataType: 'script'
            success: function (data) {
                // debugger;
                $(`[data-id="${id}"]`).html("")
            }
        })
    
        event.preventDefault()
    })
    
})


