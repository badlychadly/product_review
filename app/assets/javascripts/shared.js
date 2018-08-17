



function redBorder() {
    $('#review_content').css({
        "border": "1px solid red"
    })
}

function normalizeBorder() {
    $('#review_content').css({
        "border-color": "rgb(169, 169, 169)"
    })
    $('#new_review').children('ul.list-group').remove()
}
