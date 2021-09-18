// slider
let sliderItems = document.querySelector('.js-slider-items');
let width = sliderItems.children[0].getBoundingClientRect().width;
let offset = 0;

setInterval(() => {
    if (offset > width * (sliderItems.children.length - 1)) {
        offset = 0;
        sliderItems.style.marginLeft = 0;
    } else {
        offset += width + 10;
        sliderItems.style.marginLeft = '-' + offset + 'px';
    }
}, 3000)

// chart
let ctx = document.getElementById('chart__statistics').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        datasets: [{
            label: 'Eternity',
            data: [100, 200, 100, 400, 200, 555],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Dragon',
            data: [400, 600, 200, 600, 700, 999],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});