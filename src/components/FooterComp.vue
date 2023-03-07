<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <h3>حول Metashops</h3>
          <p class="desc">
            Metashops هي شركة رائدة في تقديم حلول متكاملة للمحلات الصناعية
            لتعزيز أعمالها من جميع الجوانب
          </p>
          <div class="footer-link">
            <router-link tag="i" to="">
              <font-awesome-icon
                class="social-icon"
                icon="fa-brands fa-twitter"
              />
            </router-link>
            <router-link to="">
              <font-awesome-icon
                class="social-icon"
                icon="fa-solid fa-envelope"
              />
            </router-link>
            <router-link to="">
              <font-awesome-icon
                class="social-icon"
                icon="fa-brands fa-instagram"
              />
            </router-link>
            <router-link to="">
              <font-awesome-icon
                class="social-icon"
                icon="fa-brands fa-facebook-f"
              />
            </router-link>
          </div>
        </div>
        <div style="list-style: none" class="col-md-2 col-xs-12">
          <h3>روابط سريعة</h3>
          <router-link tag="li" to="" style="margin-top: 10px"
            ><a href="" class="quick-link">الصفحة الرئيسية</a></router-link
          >
          <router-link tag="li" to="" style="margin-top: 10px">
            <a href="" class="quick-link">وظائف</a></router-link
          >
          <router-link tag="li" to="" style="margin-top: 10px"
            ><a href="" class="quick-link">معلومات عنا</a></router-link
          >
          <router-link tag="li" to="" style="margin-top: 10px"
            ><a href="" class="quick-link">الأسعار</a></router-link
          >
          <router-link tag="li" to="" style="margin-top: 10px"
            ><a href="" class="quick-link">اتصل بنا</a></router-link
          >
        </div>
        <div class="col-md-2 col-xs-12" style="list-style: none">
          <h3>قانوني</h3>
          <router-link tag="li" to="" style="margin-top: 10px">
            <a href="" class="quick-link">سياسة الخصوصية</a></router-link
          >
          <router-link tag="li" to="" style="margin-top: 10px"
            ><a href="" class="quick-link">شروط الخدمة</a></router-link
          >
        </div>
        <div class="col-md-4 col-xs-12">
          <h3>اتصل بنا</h3>
          <p><font-awesome-icon icon="fa-solid fa-phone" /> 920020347</p>
          <p>
            <font-awesome-icon icon="fa-solid fa-envelope" />
            info@metashops.com.sa
          </p>
          <p>
            <font-awesome-icon icon="fa-solid fa-location-dot" /> 2668 Abu Hamed
            Al Ghazaly St. Apt 12 Al Anud, Dammam 32427 Saudi Arabia
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
footer {
  background-color: var(--black-color);
  color: var(--white-color);
  padding: var(--main-padding);
}
@media (max-width: 992px) {
  footer {
    text-align: center;
  }
}
footer h3 {
  font-size: 22px;
  font-weight: bold;
}
.desc {
  width: 80%;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 2px;
}
@media (max-width: 992px) {
  .desc {
    width: 100%;
  }
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
.quick-link {
  color: var(--white-color);
  text-decoration: none;
  margin-top: 20px;
}
</style>
