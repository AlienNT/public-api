<script setup>

</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="author-link">
          created by <a href="https://webfolio-develop.onrender.com/">M. Trysten</a>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  min-height: $headerHeight;
  background: $primaryColor;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  margin-top: auto;
}
.author-link {
  text-align: center;
  color: white;
  a {
    color: $semiMediumColor;
    transition: .2s ease;
    &:hover {
      color: lighten($semiMediumColor, 5%);
    }
  }
}
</style>