  function downloadMobile() {
    var mobileAppPath = "App\Medolious RealmPHolder.zip";

    var anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = mobileAppPath;
    anchor.download = "MedoliousRealm_Mobile.zip";
    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  }

  function downloadDesktop() {
    var desktopAppPath = "App\MedoliousRealm_LatestDesktop.rar";

    var anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = desktopAppPath;
    anchor.download = "MedoliousRealm_Desktop.zip";
    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  }

document.getElementById('trailerVid').playbackRate = 1.5; 

