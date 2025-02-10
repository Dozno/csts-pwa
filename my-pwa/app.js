if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker registered"))
    .catch(error => console.log("Service Worker registration failed:", error));
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    console.log("PWA Install Prompt available");

    // Show a custom install button (optional)
    document.body.innerHTML += '<button id="install">Install PWA</button>';
    
    document.getElementById("install").addEventListener("click", () => {
        deferredPrompt.prompt();
    });
});
