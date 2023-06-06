<template>
  <div class="navbar">
    <div class="brand">
      <LogoBuatKamu />
    </div>

    <div class="navbar__menu">
      <a>Tentang Kami</a>
      <a>Layanan</a>
      <a>Showcase</a>
      <a class="button">Sign-up</a>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  position: sticky;
  top: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: var(--global-navbar-height);

  box-shadow: 0 0 15px 1px rgba($color: #000000, $alpha: 0.1);
  background-color: white;
  padding: 0 var(--global-gutter);

  @include tablet-up {
    padding: 0 var(--global-gutter);
  }

  .brand {
    margin: 0 var(--global-gutter);
  }

  &__menu {
    display: none;
    justify-content: center;
    align-items: center;

    @include tablet-up {
      display: flex;
    }
    a {
      text-align: center;
      margin: 0 var(--global-gutter);
      cursor: pointer;
    }
  }
}
</style>
