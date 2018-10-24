var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200)
    {
        var myObj = JSON.parse(this.responseText);
        var avatar = new Image();
        avatar.src = myObj.data._embedded.uploader.avatar_url;
        document.getElementById("avatar").appendChild(avatar);
        document.getElementById("username").innerHTML = myObj.data._embedded.uploader.username;
        var imgnormal = new Image();
        imgnormal.src = myObj.data.images.normal;
        document.getElementById("imgnormal").appendChild(imgnormal);
        document.getElementById("date").innerHTML = myObj.data.date_published;
    }
};
xmlhttp.open("GET", "https://api.olapic.com/media/2899395330?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2", true);
xmlhttp.send();

