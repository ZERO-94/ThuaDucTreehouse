'uses strict'

var width,height;
let check = false;
const contents = document.querySelectorAll('.container .row');
const secondContentMobile = `
<div class="col-md-6 content-container" id="forMobile2">
    <div class="section-title">
        <h4 class="text-uppercase">Khung cảnh thiên nhiên</h4>
        <p class="section-subtitle">What our guests are saying about us</p>
    </div>
    <div class="info-branding" style="color:black;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo voluptates cupiditate, ipsum provident facere modi tempora ducimus enim dicta laborum esse aliquam rem
        assumenda dolores. Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga. Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi
        consequatur quae sequi ex, ipsa facere qui ut recusandae. Quod earum cupiditate quaerat assumenda.</p>
    </div>
</div>
`;
const fourthContentMobile = `
<div class="col-md-6 content-container" id="forMobile4">
    <div class="section-title">
        <h4 class="text-uppercase">BBQ kiểu Âu</h4>
        <p class="section-subtitle">What our guests are saying about us</p>
    </div>
    <div class="info-branding" style="color:black;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo voluptates cupiditate, ipsum provident facere modi tempora ducimus enim dicta laborum esse aliquam rem
        assumenda dolores. Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga. Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi
        consequatur quae sequi ex, ipsa facere qui ut recusandae. Quod earum cupiditate quaerat assumenda.</p>
    </div>
</div>
`;

const secondContentDesktop = `
<div class="col-md-6 content-container" id="forDesktop2">
    <div class="section-title">
        <h4 class="text-uppercase">Khung cảnh thiên nhiên</h4>
        <p class="section-subtitle">What our guests are saying about us</p>
    </div>
    <div class="info-branding" style="color:black;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo voluptates cupiditate, ipsum provident facere modi tempora ducimus enim dicta laborum esse aliquam rem
        assumenda dolores. Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga. Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi
        consequatur quae sequi ex, ipsa facere qui ut recusandae. Quod earum cupiditate quaerat assumenda.</p>
    </div>
</div>
`;

const fourthContentDesktop = `
<div class="col-md-6 content-container" id="forDesktop4">
    <div class="section-title">
        <h4 class="text-uppercase">BBQ kiểu Âu</h4>
        <p class="section-subtitle">What our guests are saying about us</p>
    </div>
    <div class="info-branding" style="color:black;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti nulla, hic voluptatibus eum voluptatum libero suscipit nemo voluptates cupiditate, ipsum provident facere modi tempora ducimus enim dicta laborum esse aliquam rem
        assumenda dolores. Commodi, aperiam, blanditiis! Ipsum iure necessitatibus eaque, fuga. Excepturi facilis libero dicta soluta officiis, sint sit voluptatem, vero doloribus nesciunt suscipit dolores veritatis minus quam atque non autem quasi
        consequatur quae sequi ex, ipsa facere qui ut recusandae. Quod earum cupiditate quaerat assumenda.</p>
    </div>
</div>
`;


window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
    console.log(width);
        if(check == false && width < 770) {
            const second = document.getElementById('forDesktop2');
            second.remove();
            contents[3].insertAdjacentHTML('afterbegin',secondContentMobile);
            const fourth = document.getElementById('forDesktop4');
            fourth.remove();
            contents[5].insertAdjacentHTML('afterbegin',fourthContentMobile);
            check = true;
        }else if(check == true  && width >= 770) {
            const second = document.getElementById('forMobile2');
            second.remove();
            contents[3].insertAdjacentHTML('beforeend',secondContentDesktop);
            const fourth = document.getElementById('forMobile4');
            fourth.remove();
            contents[5].insertAdjacentHTML('beforeend',fourthContentDesktop);
            check = false
        }
} 

