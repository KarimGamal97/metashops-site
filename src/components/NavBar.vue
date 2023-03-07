<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light">
    <div class="container">
      <div>
        <a href=""
          ><img
            src="../assets/wedsite-cuts/home-page/meta-logo-white.svg"
            style="width: 60%"
        /></a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon class="hamburger-menu" icon="fa-solid fa-bars" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link tag="li" to="/" class="nav-link">الرئيسية</router-link>
          <router-link tag="li" to="/about" class="nav-link">
            من نحن
          </router-link>
          <!-- <router-link tag="li" to="/services" class="nav-link">
            خدماتنا
          </router-link> -->
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  خدماتنا
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <router-link class="dropdown-item" to="/erp"
                      >نظام اداري محاسبي ERP</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/digital"
                      >التسويق الالكتروني</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <router-link tag="li" to="/contact" class="nav-link">
            اتصل بنا
          </router-link>
        </ul>
        <form class="d-flex search-box">
          <div class="SearchBox">
            <input type="text" class="SearchBox-input" placeholder="ابحث" />
            <button class="SearchBox-button">
              <font-awesome-icon
                class="search-icon"
                icon="fa-solid fa-magnifying-glass"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  height: 10vh;
  background-color: var(--black-color);
}
.SearchBox {
  display: flex;
  background-color: transparent;
  height: 30px;
}
.SearchBox:hover .SearchBox-input {
  padding-left: 2em;
  padding-right: 1em;
}
.SearchBox-input {
  width: 0;
  height: 25px;
  border: none;
  font-size: 12px;
  background-color: transparent;
  transition: 0.45s;
  color: var(--white-color);
}
.SearchBox-input::placeholder {
  color: var(--white-color);
}
.SearchBox-button {
  display: flex;
  border: none;
  width: 25px;
  height: 25px;
  background-color: transparent;
  transition: 0.3s;
}

@media screen and (min-width: 400px) {
  .SearchBox:hover .SearchBox-input {
    width: 150px;
  }
}
.nav-link {
  color: var(--white-color);
  font-weight: 500;
  cursor: pointer;
}
.nav-link:hover {
  color: var(--main-color);
}

.router-link-exact-active {
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
}

@media (min-width: 992px) {
  .search-box {
    border: 1px solid var(--white-color);
    border-radius: 40px;
    margin-right: 15px;
  }
}
@media (max-width: 768px) {
  .SearchBox {
    display: none;
  }
}
.search-icon {
  margin: 6px -4px 0 5px;
  color: var(--white-color);
}
.nav-item a {
  color: var(--white-color);
}
.dropdown-menu {
  padding: 15px;
  margin-left: -80px;
}
.dropdown-menu li {
  margin-top: 10px;
  border: 2px solid #eee;
  border-radius: 6px;
  text-align: right;
}
.dropdown-menu .router-link-exact-active {
  border-bottom: none;
}
</style>
