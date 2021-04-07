var appname = "Name of the App";
var applinkiphone = "";
var applinkandoid = "";
var applogo = "";
var appinfo = "Get the App";

var correctapplink;

function initappbanner()
{
  if(navigator.userAgent.match(/Android/i))
  {
    if(applinkandoid)
    {
      correctapplink = applinkandoid;
      showMobile();
    }
  }
  else if(navigator.userAgent.match(/iPhone/i))
  {
    if(applinkiphone)
    {
      correctapplink = applinkiphone;
      showMobile();
    }
  }
  else
  {
    //showDesktop();
  }
}

function showMobile()
{
  const bannerDiv = document.createElement("a");
  bannerDiv.id = "installbanner";
  bannerDiv.href = correctapplink;

  const image1234 = document.createElement("img");
  const textcont1234 = document.createElement("div");
  const title1234 = document.createElement("span");

  image1234.src = applogo;
  title1234.innerText = appname;
  title1234.id = "title";
  textcont1234.append(title1234);
  textcont1234.innerHTML += "<br>" + appinfo;

  textcont1234.prepend(image1234);
  bannerDiv.append(textcont1234);
  bannerDiv.innerHTML += '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>';

  document.body.prepend(bannerDiv);
}
