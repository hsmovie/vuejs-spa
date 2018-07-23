<template>
  <div>
    <main-header></main-header>
    <blog-wrap :tags="[]" img-src="blog1.jpg" title="이용약관">
      <blog-article title="01. 전속설계사를 이용한 보험의 가입">
        <div class="margin-bottom">
          특정 보험사에 소속되어 해당 보험사의 상품만을 판매할 수 있는 설계사와 대면을 통해 보험 상품에 대한 내용과 주의사항에 대해 설명을 듣고 가입하는 방법입니다. 그러나 2008년 9월부터 보험설계사 교차모집제도가 시행되면서 일사전속주의가 일부 완화되었습니다.
        </div>
        <div class="margin-bottom">
          <b>장점</b><br>
          보험에 대한 이해도가 높은 설계사와 대면하여 계약이 진행되기 때문에 보험상품에 대한 내용과 주의사항에 대해 상세하게 설명을 들을 수 있습니다. 또한 지속적인 관리 및 서비스를 받을 수 있습니다.
        </div>
        <div class="margin-bottom">
          <b>단점</b><br>
          설계사 수수료 등 사업비가 책정되어 있어 다양한 판매채널 중 동일한 조건 기준의 보험료가 가장 비쌉니다. 설계사는 자신의 수수료 수입을 높이기 위해 보험가입자에게 반드시 필요한 보장 상품이 아닌 과도한 보장 상품을 권유하는 경우가 많습니다. 또한, 담당 설계사가 그만둘 경우 지속적인 관리를 받는데 어려움이 있으며, 다른 보험사의 상품 판매가 불가능하기 때문에 다양한 상품 및 가격을 비교한 후 보험상품에 가입하지 못한다는 한계가 있습니다.
        </div>
        <div>
          <b>추천고객</b><br>
          인터넷으로 직접 가입하기 힘들거나, 보험상품에 대한 지식이 부족하여 상세한 내용과 주의사항에 대해 설명이 필요한 고객
        </div>
      </blog-article>
    </blog-wrap>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import mainHeader from '../../layout/header.layout'
  import globalFooter from '../../layout/footer.layout'
  import blogWrap from '../../routes/blog/components/blog-wrap.component'
  import blogArticle from '../../routes/blog/components/blog-article.component'

  export default {
    components: {
      mainHeader,
      globalFooter,
      blogWrap,
      blogArticle
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/blog";
</style>
