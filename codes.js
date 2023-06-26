const DOMAIN = "https://api.pravega.org";

function addcode(event) {
    event.preventDefault();
    var codes = document.getElementById("codes").value.split(" ");
    fetch(`${DOMAIN}/api/sci_tech/quad/addone`, {
        method: "POST",
        body: {codes: JSON.stringify(codes)},
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }).then((res) => {
        if (res.status == 200) {
           alert("done");
        }
        else {
            alert("failed");
        }
    }).catch((e) => { alert(e.message) })
}