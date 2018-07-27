$(function() {
    $('#new_review').submit(function (event) {
        $.ajax({
            type: ($("input[name='_method']").val() || this.method),
            url: this.action,
            data: $(this).serialize(),
            dataType: 'script'
        }).done(function () {
            $('#review_content').val("").attr("disabled", true)
        })
        event.preventDefault()
    })

    $('#deleteComment').on('click', function (event) {
        $.ajax({
            type: "DELETE",
            url: this.href,
            success: function (data) {
                debugger
            }
        })

        event.preventDefault()
    })
})


