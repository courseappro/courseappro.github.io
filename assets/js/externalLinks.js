const installerwinUrl = 'https://github.com/josecantero/curseApp/releases/download/v1.0.77/courseapp-1.0.77.Setup.exe';
const installerlinUrl = 'https://github.com/josecantero/curseApp/releases/download/v1.0.77/curseApp-1.0.77.AppImage';
const grupoFbUrl = 'https://www.facebook.com/groups/cursosgratisenstreaming/';

const installerwin = document.getElementsByClassName('btn primary-cta win32');
openExternalLink(installerwin, installerwinUrl);

const installerlin = document.getElementsByClassName('btn primary-cta linux');
openExternalLink(installerlin, installerlinUrl);

const grupoFb = document.getElementsByClassName('btn primary-cta fbg');
openExternalLink(grupoFb, grupoFbUrl);

function openExternalLink(button, url) {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {
            window.location.href = url;
        });
    }
}
