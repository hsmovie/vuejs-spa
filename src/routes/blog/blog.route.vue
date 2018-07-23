<template>
  <div>
    <main-header></main-header>
    <router-view/>
    <div class="slick">
      <blog-slick></blog-slick>
    </div>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import mainHeader from '../../layout/header.layout'
  import globalFooter from '../../layout/footer.layout'
  import blogSlick from '../../components/blog-slick.component'

  export default {
    components: {
      mainHeader,
      globalFooter,
      blogSlick
    }
  }
</script>

<style lang="scss">
  .slick {
    margin: 0 auto;
    width: 1020px;
  }
</style>
