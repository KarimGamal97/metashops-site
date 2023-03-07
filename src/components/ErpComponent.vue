<template>
  <div class="erp">
    <div class="electronic">
      <div class="container text-center">
        <h3 class="electronic-head">نظام اداري محاسبي ERP</h3>
        <img src="../assets/wedsite-cuts/service-erp-page/erp-page-pic.svg" />
      </div>
    </div>
    <div class="desc">
      <h2>نظام اداري محاسبي ERP</h2>
      <div class="define">
        <p>
          ERP نظام إدارى محاسبى يمتاز بسهولة إستخدامة ومرونة يساعدك على إدارة
          مشروعك بكفاءة عالية ويطور من خدماتك مثل“المحاسبة، المشتريات، إدارة
          المخزون والمشروعات، عمليات التوريد، نقاط البيع والفواتير الإلكترونية
          ". يساعدك أيضاً على ربط جميع البيانات بأقسام الشركة، ريادة الأعمال
          الأمثل، حلول التجارة، زيادة الربح وتوفير الوقت والمال.
        </p>
      </div>
    </div>
    <div class="digital-marketing">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-12">
            <div class="digital-box">
              <img
                src="../assets/wedsite-cuts/service-erp-page/Logistics-icon.svg"
              />
              <h2>الخدمات اللوجستية</h2>
              <p>
                نساعد مشروعك على النمو والتوسع بجانب تقليل التكاليف والوقت،
                زيادة الأرباح وتحسين الكفاءة، ضمان الشحن والتخزين والتوصيل
                السريع والآمن للمنتجات إلى العملاء، يمكنك بسهولة نقل البضائع من
                الشركات المصنعة إلى منافذ البيع حتى تصل إلى المستهلك. نصل بك إلى
                مواكبة متطلبات العملاء والتفوق على المنافسين. سيربط حلنا جميع
                أصحاب المصلحة بما في ذلك المتاجر والموردين والعملاء والخدمات
                اللوجستية والسلطات الحكومية.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="digital-box">
              <img
                src="../assets/wedsite-cuts/service-erp-page/Government-icon.svg"
              />
              <h2>ربط الهيئات الحكومية</h2>
              <p>
                يوفر اتصالنا بالحكومة مكانة خاصة لعملائنا حيث يحصلون على معلومات
                مهمة حول السياسات الحكومية بشأن المبيعات والإنتاجية. نقدم الربط
                مجاناَ مع أي منظمة حكوميه مثل (ربط الفواتير الإلكترونية للشركات
                والمؤسسات مع الهيئة).
              </p>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="digital-box">
              <img
                src="../assets/wedsite-cuts/service-erp-page/Remote-icon.svg"
              />
              <h2>التحكم عن بعد</h2>
              <p>
                نقدم لك تطبيقا يساعدك في إدارة ومراقبة أنشطة مشروعك عن بعد بكل
                سهولة وأفضل جودة. يساعد أيضاً تطبيقنا في الأنشطة خارج المتاجر
                مثل إدخال بيانات المنتجات أثناء الشراء والدفع.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="manage">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xs-12">
            <div class="price">
              <h2>خطة التسعير لدينا</h2>
              <p>أفضل باقة لادارة كاملة لمشروعك</p>
              <img
                src="../assets/wedsite-cuts/service-erp-page/erp-2-pic.svg"
              />
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="pro">
              <h3>Meta Erp Pro</h3>
              <p>ادارة الموارد البشرية</p>
              <hr />
              <p>ادارة المشتريات</p>
              <hr />
              <p>ادارة المبيعات</p>
              <hr />
              <p>ادارة المخزون</p>
              <hr />
              <p>نقاط البيع</p>
              <hr />
              <p>لوحة التحكم</p>
              <hr />
              <p>التقارير</p>
              <hr />
              <img
                src="../assets/wedsite-cuts/service-erp-page/price-tag.svg"
                style="width: 80%"
              />
              <hr />
              <div class="p-3">
                <button class="meta-btn">اشترك</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErpComponent",
};
</script>

<style scoped>
.electronic {
  background-image: url(../assets/wedsite-cuts/web\ design\ -\ Cut-73.svg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--main-padding);
}
.electronic-head {
  text-align: center;
  font-size: 40px;
  color: var(--main-color);
}
.electronic img {
  width: 90%;
}

.desc {
  background-image: url(../assets/wedsite-cuts/web\ design\ -\ Cut-71.svg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--main-padding);
  text-align: center;
}

.desc h2 {
  color: var(--main-color);
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 50px;
}
.define p {
  font-size: 18px;
  line-height: 2;
  color: var(--black-color);
  letter-spacing: 1px;
  background-color: var(--grey-color);
  font-weight: 500;
  border: 4px solid #777;
  border-radius: 40px;
  padding: 5%;
}
.digital-marketing {
  background-color: var(--main-color);
  padding: var(--main-padding);
  text-align: center;
}
.digital-box {
  border: 4px solid #555;
  padding: 15px;
  background-color: var(--white-color);
  color: var(--black-color);
  border-radius: 40px;
  height: 88vh;
}
.digital-box img {
  width: 35%;
  margin-bottom: 20px;
}
.digital-box h2 {
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: bold;
}
.digital-box p {
  font-size: 16px;
  line-height: 1.8;
  letter-spacing: 1px;
}
.manage {
  background-image: url(../assets/wedsite-cuts/web\ design\ -\ Cut-73.svg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--main-padding);
}

.price h2 {
  font-size: 36px;
  color: var(--main-color);
  margin-bottom: 10px;
  font-weight: bold;
}
.price p {
  font-size: 24px;
  color: var(--white-color);
  font-weight: 400;
}
.price img {
  width: 85%;
}
.pro {
  background-color: var(--black-color);
  color: var(--white-color);
  text-align: center;
}
.pro h3 {
  background-color: var(--main-color);
  text-transform: uppercase;
  padding: 15px;
  font-size: 36px;
}
.pro p {
  padding: 5px;
  font-weight: bold;
}
</style>
