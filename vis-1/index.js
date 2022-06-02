const popPieId = $("#first");


const popPie = new Chart(popPieId, {
    type: 'pie',
    data: {
        labels: blocks,
        datasets: [
            {
                data: data["1990"],
                backgroundColor: [
                    "#FF6384",
                    "#63FF84",
                ],
                borderWidth: 1,
                borderColor: 'rgba(255, 99, 132, 1)'
            },
        ]
    },

})


$('#1990').click(function () {
    $('#1990').removeClass('btn-secondary');
    $('#2000').removeClass('btn-primary');
    $('#2010').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    popPie.data.datasets[0].data = data["1990"];
    popPie.data.datasets[0].borderColor = 'rgba(255, 99, 132, 1)';
    popPie.update();
});

$('#2000').click(function () {
    $('#1990').removeClass('btn-secondary');
    $('#2000').removeClass('btn-primary');
    $('#2010').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    popPie.data.datasets[0].data = data["2000"];
    popPie.data.datasets[0].borderColor = 'rgba(54, 162, 235, 1)';

    popPie.update();
});

$('#2010').click(function () {
    $('#1990').removeClass('btn-secondary');
    $('#2000').removeClass('btn-primary');
    $('#2010').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    popPie.data.datasets[0].data = data["2010"];
    popPie.data.datasets[0].borderColor = 'rgba(54, 162, 235, 1)';

    popPie.update();
});

$('#2020').click(function () {
    $('#1990').removeClass('btn-secondary');
    $('#2000').removeClass('btn-primary');
    $('#2010').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    popPie.data.datasets[0].data =  data["2020"];
    popPie.data.datasets[0].borderColor = 'rgba(54, 162, 235, 1)';

    popPie.update();
});