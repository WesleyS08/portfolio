const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      modeSwitich = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");



      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      })

      modeSwitich.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")){
            modeText.innerText = "Modo claro"
        }else {
            modeText.innerText = "Modo Dark"

        }
      });


