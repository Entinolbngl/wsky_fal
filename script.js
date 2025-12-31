emailjs.init("fHJAx_HOUH9A7rub0"); // ganti dengan Public Key Anda

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  emailjs
    .send("service_5wlyn4j", "template_mour2xq", {
      //ganti dengan service_id dan template_id
      from_name: name,
      reply_to: email,
      message: message,
      to_email:"valentinogaol114@gmail.com"
    })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Pesan Terkirim! MOHON JANGAN SPAM!!!",
        text: "Pesan Anda telah berhasil dikirim. MOHON JANGAN SPAM!!!. Saya akan segera menghubungi Anda.",
      });
      e.target.reset(); // reset form setelah pengiriman
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim Pesan",
        text: "Silakan coba lagi nanti.",
      });
      console.error("Error:", error);
    });
});
