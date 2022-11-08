$(document).ready(function(){
    $(".icons").hover(function(){
        $(this).css("transform", "scale(10)");
    });
});


$(document).ready(function(){
    $(".btn").click(function(){  let gitHubRequest = new XMLHttpRequest();
        gitHubRequest.onload = function() {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("myRepos").innerHTML = gitObject.login +"<br>"+gitObject.id;
    };
    gitHubRequest.open("GET", "https://api.github.com/users/NourElHoudaSaid09", true);
    gitHubRequest.send();
});
})
