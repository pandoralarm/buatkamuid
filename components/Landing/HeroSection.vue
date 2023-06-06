<template>
  <div class="hero">
    <div class="billboard">
      <h1>
        Cetak jejak digital kamu dan orang spesial di hidupmu dengan
        <span class="intense">bits</span> paling romantis!
      </h1>
    </div>
    <div class="image"><img src="/images/card-1.png" /></div>
  </div>
</template>

<style lang="scss">
.hero {
  font-family: 'Geologica';
  display: flex;
  height: calc(100vh - var(--global-navbar-height));

  .billboard {
    padding: calc(var(--global-gutter) * 2);
    display: flex;
    align-items: center;

    @include tablet-up {
      max-width: 50%;
    }

    .intense {
      font-family: 'Geologica-ExtraBold';
    }
  }

  img {
    display: none;
    opacity: 0.65;
    filter: brightness(120%);
    max-width: 100%;
    max-height: 100%;

    @include tablet-up {
      display: block;
    }
  }
}
</style>
