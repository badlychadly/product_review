
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
    
    $(document).on('click', '.nextProduct', function(event) {
        var id = parseInt($(this).attr("data-product-id")) + 1
        $.get(`/products/${id}/reviews`, function (data) {
            var html = $.parseHTML(data)
            $('#pageContainer').html($(html).filter('#pageContainer'))
        })
        event.preventDefault() 
        event.stopImmediatePropagation()
        
    });  

    $('body').on('click', '#upVote', function(event) {
        // debugger;
       $.ajax({
            type: this.dataset.method,
            url: this.pathname,
            data: "json",
            success: function (product) {
                // debugger;
                $('#upVoteCount').text(product.cached_votes_up) 
                $('#downVoteCount').text(product.cached_votes_down)
            }
       })
    
        event.preventDefault()
        event.stopImmediatePropagation()
    })


    $('body').on('click', '#downVote', function(event) {
        // debugger;
       $.ajax({
            type: this.dataset.method,
            url: this.pathname,
            data: "json",
            success: function (product) {
                // debugger;
                $('#upVoteCount').text(product.cached_votes_up) 
                $('#downVoteCount').text(product.cached_votes_down)
            }
       })
    
        event.preventDefault()
        event.stopImmediatePropagation()
    })


    $('body').on('click', '#differentProduct', function (event) {
        var nextId = parseInt($('#differentProduct').attr('data-product')) + 1;
        // debugger;
        $.get(`/products/${nextId}.json`, function (product) {
            var productHtml = HandlebarsTemplates['product_page']({
                img: product.img,
                description: product.description
            });
            // debugger;
            $('#newContent').html(productHtml)
            $('#differentProduct').attr("data-product", product["id"])
        })
        event.preventDefault()
    })

})
