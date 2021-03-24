$(document).ready(function(){
    $(".clickedPortfolio").click(function(){
        $.ajax({
            url:"http://localhost:3000/postPortfolio",
            type:"POST"
        }).done(function(rs){
            console.log(rs);
            if(rs !== "err"){
                for(let i = 0;i<rs.length;i++){
                    var li = `<li data-groups="[&quot;photography&quot;]" class="shuffle-item filtered" style="position: absolute; top: 0px; left: 0px; visibility: visible; opacity: 1; transform: translate3d(0px, 260px, 0px) scale3d(1, 1, 1); transition: transform 250ms ease-out 0s, opacity 250ms ease-out 0s;">
                        <div class='inner' >
                            <img src='img/portfolio/`+rs[i]+`' alt>
                            <div class='overlay' >
                                <a href='#popup-`+i+`' class='view-project' >
                                    View
                                </a>
                                <div id='popup-`+i+`' class='popup-box zoom-anim-dialog mfp-hide' >
                                    <figure>
                                        <img src='img/portfolio/`+rs[i]+`' alt>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </li>`
                    $(".portfolio-items").append(li);
                }
            }
        });
    })
});