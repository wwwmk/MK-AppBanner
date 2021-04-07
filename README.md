# MK-AppBanner
Mobile app download banner for websites.
Works with Android and iOS.


![image](light.png)
![image](image.png)
>Automatic dark theme


## Step 1

Place the following code in the head of your page:
```javascript
<script src="https://cdn.jsdelivr.net/gh/wwwmk/MK-AppBanner/appbanner.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/wwwmk/MK-AppBanner/banner.css">
```


## Step 2

Place the following code in the body of your page:
```javascript
<script type="text/javascript">
  appname = "Facebook";
  applogo = "https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s180-rw";
  applinkiphone = "https://apps.apple.com/us/app/facebook/id284882215";
  applinkandoid = "https://play.google.com/store/apps/details?id=com.facebook.katana";
  initappbanner();
</script>
```


## Step 3

Replace the name, logo and links to those of the app.

To only show the banner on Android, remove the line with "applinkiphone".

To only show on iPhone, remove the line with "applinkandoid".
