const popBarId = $("#second");


const popBar = new Chart(popBarId, {
    type: 'bar',
    data: {
        labels: countries,
        datasets: [
            {
                data: data["2019"],
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


$('#2019').click(function () {
    $('#2019').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    popBar.data.datasets[0].data = data["2019"];
    popBar.data.datasets[0].borderColor = 'rgba(255, 99, 132, 1)';
    popBar.update();
});

$('#2020').click(function () {
    $('#2019').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    popBar.data.datasets[0].data = data["2020"];
    popBar.data.datasets[0].borderColor = 'rgba(54, 162, 235, 1)';

    popBar.update();
});