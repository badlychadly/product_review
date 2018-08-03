
$(document).on('turbolinks:load', function () {

    $(document).on('submit', '#searchForm', function(event) {
            $.ajax({
                type: this.method,
                url: this.action,
                data: $(this).serialize(),
                dataType: 'script'
            });
            event.preventDefault();   
    })
    
    $('#pageContainer').on('click', '.nextProduct', function(event) {
        var id = parseInt($(this).attr("data-product-id")) + 1
        $.get(`/products/${id}/reviews`, function (data) {
            var html = $.parseHTML(data)
            $('#pageContainer').html($(html).filter('#pageContainer'))
        })
        event.preventDefault() 
    });  

    $('#votes').on('click', '#upVote', function(event) {
        // debugger;
       $.ajax({
            type: this.dataset.method,
            url: this.pathname,
            data: "html",
            success: function (product) {
                // debugger;
                $('#upVoteCount').text(product.cached_votes_up) 
                $('#downVoteCount').text(product.cached_votes_down)
            }
       })
    
        event.preventDefault()
        event.stopPropagation()
    })


    $('#votes').on('click', '#downVote', function(event) {
        // debugger;
       $.ajax({
            type: this.dataset.method,
            url: this.pathname,
            data: "html",
            success: function (product) {
                // debugger;
                $('#upVoteCount').text(product.cached_votes_up) 
                $('#downVoteCount').text(product.cached_votes_down)
            }
       })
    
        event.preventDefault()
        event.stopPropagation()
    })

})
