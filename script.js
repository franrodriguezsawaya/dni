/**
 * All code must go inside here. This ensures that your scripts run after the
 * html documents has finished loading and is ready to accept events.
 */
function app() {


  function updateText() {

    document.getElementById("demo").innerHTML = "Bienvenida Fiorella!";
  }

  document.querySelector("button[name=entrar]").onclick = updateText;
}

/**
 * Initialize the web application immediately if the DOM is ready or add a
 * listener for when it is.
 */
function init() {
  if (document.readyState === "complete" || document.readyState !== "loading") {
    app();
  } else {
    document.addEventListener("DOMContentLoaded", app);
  }
}

init();
