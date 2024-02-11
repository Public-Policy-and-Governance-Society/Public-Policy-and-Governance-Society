$("#contactForm").on("submit", (e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwEFGrMwiRvEMqwE-uM5QmbkgCHhCOI26AEY3uAcYdnFtucT8ex4efRrTJJ4oTGN-TurQ/exec",
        type: "post",
        data: jQuery("#contactForm").serialize(),
        success: (res) => {
            console.log(res);
            window.location.reload();
        },
    });
});

// gooogle sheet: https://docs.google.com/spreadsheets/d/1uJ_r3AdTNUn072NsV87NQOZWoRY-66PX3ZAdhPqZDIQ/edit?usp=sharing