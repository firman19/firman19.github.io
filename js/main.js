const imgpath = './assets/image/people/'

const people = [
    // {
    //     img: './assets/image/people/people1.png',
    //     name: 'MURIO',
    //     position: 'Director, F4Elements',
    // },
    {
        img: './assets/image/people/people2.png',
        name: 'AGIEL',
        position: 'Director, F4Elements',
    },
    {
        img: './assets/image/people/people3.png',
        name: 'HENRY',
        position: 'Director, F4Elements',
    },
    {
        img: './assets/image/people/people4.png',
        name: 'DHONO',
        position: 'Director, F4Elements',
    },
    {
        img: './assets/image/people/people5.png',
        name: 'ADIT',
        position: 'Strategic Planner Head, F4Elements',
    },
    {
        img: './assets/image/people/people6.png',
        name: 'ABDAH',
        position: 'Design Head, Interface',
    },
    {
        img: './assets/image/people/people7.png',
        name: 'TUTIEK',
        position: 'Design Head, Interface',
    },
    {
        img: './assets/image/people/people8.png',
        name: 'SHELLY',
        position: 'Design Head, Interface',
    },
    {
        img: './assets/image/people/people9.png',
        name: 'INONG',
        position: 'Design Head, Interface',
    },
    {
        img: './assets/image/people/people10.png',
        name: 'BABA',
        position: 'Design Head, Interface',
    },
    {
        img: './assets/image/people/people11.png',
        name: 'YENDA',
        position: 'Design Head, Interface',
    },
    {
        img: './assets/image/people/people12.png',
        name: 'MARTIN',
        position: 'Design Head, Interface',
    },
    {
        img: './assets/image/people/people13.png',
        name: 'SORAYA',
        position: 'General Manager, Sunrise',
    },
    {
        img: './assets/image/people/people14.png',
        name: 'ADIT',
        position: 'Operation Head, Sunrise',
    },
    {
        img: './assets/image/people/people15.png',
        name: 'FARRAH',
        position: 'HR Business Partner, F4Elements',
    },
    {
        img: './assets/image/people/people16.png',
        name: 'IDRIS',
        position: 'Production Head, Giza',
    },
    {
        img: './assets/image/people/people17.png',
        name: 'LUSI',
        position: 'Sales & Operation Lead, Printworks',
    },
    {
        img: './assets/image/people/people18.png',
        name: 'ITA',
        position: 'Sales Lead, Elements Branding',
    },
]

people.forEach(e => {
    const html = `<div class="people-item">
        <div class="poeple-img__wrapper">
            <img src="${e.img}" alt="" class="lazyload">
        </div>
        <div class="f-cust people-name section-eight__name">
            ${e.name}
        </div>
        <div class="f-smallest people-position section-eight__position">
            ${e.position}
        </div>
    </div>`;
    $('.section-eight__people-wrapper').append(html)
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
  
function showPage() {
    document.getElementById("page-loader").style.display = "none";
}