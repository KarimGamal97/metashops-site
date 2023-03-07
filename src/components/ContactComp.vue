<template>
  <div class="contact">
    <h2>نحن نهتم بكل تفصيلة متعلقة بمشروعك ..</h2>
    <h3>أرسل لنا كل استفساراتك في أي وقت ترغب فيه . نحن هنا دائما من أجلك..</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="form d-flex flex-column">
            <p>
              92 00 20 347
              <font-awesome-icon class="form-icon" icon="fa-solid fa-phone" />
            </p>
            <p>
              https://goo.gl/maps/FE75URdPNQbepcRL6
              <font-awesome-icon
                class="form-icon"
                icon="fa-solid fa-location-dot"
              />
            </p>
            <h4>لديك أي أسئلة</h4>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button class="meta-btn" style="margin: 10px auto">ارسال</button>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <img
            src="../assets/wedsite-cuts/contact-us-page/contact-us-pic.svg"
          />
          <div class="footer-link">
            <router-link tag="i" to="">
              <font-awesome-icon class="social-icon" icon="fa-solid fa-house" />
            </router-link>
            <router-link to="">
              <font-awesome-icon class="social-icon" icon="fa-solid fa-house" />
            </router-link>
            <router-link to="">
              <font-awesome-icon class="social-icon" icon="fa-solid fa-house" />
            </router-link>
            <router-link to="">
              <font-awesome-icon class="social-icon" icon="fa-solid fa-house" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComp",
};
</script>

<style scoped>
.contact {
  background-image: url(../assets/wedsite-cuts/web\ design\ -\ Cut-73.svg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--main-padding);
}
.contact h2 {
  color: var(--main-color);
  font-size: 46px;
  font-weight: 600;
  text-align: center;
}
.contact h3 {
  color: var(--white-color);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}
.form {
  padding: 30px;
  margin-top: 30px;
}
.form p {
  color: var(--white-color);
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.form .form-icon {
  color: var(--black-color);
  font-size: 12px;
  background-color: var(--white-color);
  padding: 5px;
  border-radius: 50%;
}
.form h4 {
  text-align: center;
  color: var(--main-color);
  font-weight: 500;
  font-size: 22px;
}
.form input::placeholder,
textarea::placeholder {
  text-align: left;
  padding: 10px;
}
.form input {
  width: 250px;
  margin: 10px auto;
  border-radius: 40px;
  border: none;
}
.form textarea {
  width: 250px;
  margin: 10px auto;
  border-radius: 20px;
  resize: none;
}
.footer-link .social-icon {
  color: var(--black-color);
  background-color: var(--white-color);
  border-radius: 50%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  margin: 20px 0 0 10px;
}
</style>
