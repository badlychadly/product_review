$(function() {
    $(document).on('submit', '#new_review', function(event) {
        
            $.ajax({
                type: ($("input[name='_method']").val() || this.method),
                async: true,
                url: this.action,
                data: $(this).serialize(),
                dataType: 'script'
            }).done( function () {
                $('#review_content').val("").attr("disabled", true)
            })
            event.preventDefault()
    })

    $(document).on('submit', '#deleteComment', function(event) {
            var id = this.dataset.num
            $.ajax({
                type: "DELETE",
                async: true,
                url: this.action,
                data: $(this).serialize(),
                // dataType: 'script'
                success: function (data) {
                    $(`[data-id="${id}"]`).html("")
                    $('#review_content').attr("disabled", false)
                    $('[value="Create Review"]').attr("disabled", false)
                }
            })
        
            event.preventDefault()

        
    })

    
})


