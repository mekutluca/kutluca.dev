function mailer() {
    var name = document.getElementById("full-name").value || "No Name"
    var subj = document.getElementById("subject").value || "Let's Talk!"
    var mesg = document.getElementById("message").value

    name = name.replaceAll(" ", ".")
    window.open(`mailto:mehmetemrekutluca+${name}@gmail.com?subject=${subj}&body=${mesg}`)
}