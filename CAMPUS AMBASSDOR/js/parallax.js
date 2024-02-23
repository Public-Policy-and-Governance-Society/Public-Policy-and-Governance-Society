jQuery(document).ready(() => {
    const {
        clientWidth
    } = document.body;

    if (clientWidth < 1000) {
        // document.getElementsByTagName("img")
        $("img").attr("width", "100%");
        $(".xs-reverse").css({
            display: "flex",
            flexDirection: "column-reverse",
        });
    }

    const grass = $("#parallax-1");
    const gc = $("#parallax-2");
    const leftTree = $("#left-tree");

    function parallax(e) {
        let _mouseX = e.clientX;

        const distFromCentre = clientWidth / 2 - _mouseX;

        const offsetLeft = `${-50 - distFromCentre * 0.002}%`;
        const gcOffset = `${-50 + distFromCentre * 0.001}%`;
        const treeOffsetLeft = `${-distFromCentre * 0.0008}%`;

        grass.css("transform", `translate(${offsetLeft}, 0)`);
        gc.css("transform", `translate(${gcOffset}, 0)`);
        leftTree.css("transform", `translate(${treeOffsetLeft}, 0)`);
    }

    $("#parallax").on("mousemove", parallax);
});