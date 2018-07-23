<template>
  <div>
    <blog-wrap img-src="blog4.jpg" title="교통사고 현장의 조치 방법" :tags="tags"
    sub-content="교통사고는 운전자가 아무리 조심해서 운전한다고 해도 완벽하게 예방하는 것은 불가능합니다. 만일을 위해 교통 사고 현장에서 필요한 대처 요령을 알아보도록 하겠습니다.">
      <blog-article title="01. 차량 정지">
        <div>
          교통사고가 발생하면 아무리 사소한 사고일지라도 최단거리에서 정차한 후 사고의 내용을 확인합니다.
        </div>
      </blog-article>

      <blog-article title="02. 부상자 확인 및 구호">
        <div>
          부상자가 발생하였다면 즉시 상태를 확인하고 적절한 응급조치를 합니다. 사고가 심할 경우 119에 신고하여 구조를 요청합니다.
        </div>
        <tip tip="무단으로 현장 이탈 시 뺑소니로 오해 받을 수 있어요!"></tip>
      </blog-article>

      <blog-article title="03. 사고 표시 및 사고 정황증거 확보">
        <div>
          사고현장을 다양한 각도 및 거리에서 촬영하고, 사고차량 위치를 스프레이 등으로 도로상에 표시합니다. 사고의 진위여부를 확인해줄 사고 목격자를 확보하는 것도 중요합니다. 또한 사후처리를 위해 상대방 운전자와 연락처를 교환합니다.
        </div>
      </blog-article>

      <blog-article title="04. 추가사고 방지조치 및 차량이동">
        <div>
          원활한 교통흐름과 2차 사고예방을 위해 도로의 가장자리 등 안전한 장소로 신속하게 이동합니다. 자력운행이 불가한 경우에는 안전표지판 등을 설치하여 추가로 교통사고가 발생하지 않도록 조치합니다. <br><br><br>
          이때 가장 먼저 사고현장에 도착한 사설 견인차의 사용은 신중해야 합니다. 가능하면 사설 견인차를 이용하기보다는 본인이 가입한 보험사의 견인서비스를 이용하는 것이 바람직합니다. 현재 대부분의 보험사에서 제공하고 있는 긴급출동서비스 특약에 가입했다면 일정거리까지 견인 서비스가 무료로 제공됩니다.
        </div>
      </blog-article>

      <div class="left-border">
        긴급출동서비스 특약 비교
      </div>
      <table>
            <thead>
            <tr>
              <th>보험사</th>
              <th>보장종목명</th>
              <th>최대보상한도</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="left">KB손해보험</td>
              <td class="left">매직카서비스</td>
              <td class="left">연5회/견인10km/주유3l(1회)</td>
            </tr>
            <tr>
              <td class="left">현대해상</td>
              <td class="left">하이카(Hicar) 서비스</td>
              <td class="left">연5회/견인10km/주유3l(2회)</td>
            </tr>
            <tr>
              <td class="left">삼성화재</td>
              <td class="left">애니카서비스</td>
              <td class="left">연6회/견인10km/주유3l(2회)</td>
            </tr>
            <tr>
              <td class="left">메리츠화재</td>
              <td class="left">Readycar 긴급출동서비스</td>
              <td class="left">연5회/견인10km/주유3l(2회)</td>
            </tr>
            <tr>
              <td class="left">롯데손해보험</td>
              <td class="left">R해피카서비스</td>
              <td class="left">연5회/견인10km/주유3l(2회)</td>
            </tr>
            <tr>
              <td class="left">DB손해보험</td>
              <td class="left">프로미카 SOS서비스</td>
              <td class="left">연6회/견인10km/주유3l(2회)</td>
            </tr>
            <tr>
              <td class="left">한화손해보험</td>
              <td class="left">한화 긴급출동 서비스</td>
              <td class="left">연5회/견인10km/주유3l</td>
            </tr>
            <tr>
              <td class="left">MG손해보험</td>
              <td class="left">조이카 긴급출동서비스</td>
              <td class="left">연5회/견인10km/주유3l</td>
            </tr>
            <tr>
              <td class="left">흥국화재</td>
              <td class="left">마이카서비스</td>
              <td class="left">연5회/견인10km/주유3l(2회, 경유5l)</td>
            </tr>
            <tr>
              <td class="left">더K손해보험</td>
              <td class="left">긴급출동서비스</td>
              <td class="left">연5회/견인10km/주유3l</td>
            </tr>
            <tr>
              <td class="left">AXA손해보험</td>
              <td class="left">긴급출동서비스</td>
              <td class="left">연5회/견인10km/주유3l</td>
            </tr>
            </tbody>
          </table>
          <tip tip="고속도로에서 사고가 났다면 한국도로공사의 긴급견인서비스(1588-2504)를 무료로 이용할 수 있어요!" class="margin-bottom"></tip>
          <tip tip="사고차량 10km이내 견인 시, 보험회사 긴급출동서비스를 이용하는 경우 무료이나, 사설 견인차를 이용하는 경우 51,600원(2.5톤미만, 승용차 기준)의 비용이 발생합니다!" class="margin-bottom-20px"></tip>

          <div class="left-border">
            사설 견인차(구난형특수자동차) 운임·요금표(단위: 원)(자료: 국토교통부)
          </div>
          <table class="margin-bottom">
            <thead>
            <tr>
              <th>구분</th>
              <th>10km 까지</th>
              <th>15km 까지</th>
              <th>20km 까지</th>
              <th>100km 까지</th>
              <th>100km 초과시 매 10km마다 가산</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="left">2.5톤 미만</td>
              <td>51,600</td>
              <td>60,000</td>
              <td>68,300</td>
              <td>198,400</td>
              <td>16,800</td>
            </tr>
            <tr>
              <td class="left">2.5톤 이상 – 6.5톤 미만</td>
              <td>64,700</td>
              <td>75,500</td>
              <td>68,300</td>
              <td>259,000</td>
              <td>21,600</td>
            </tr>
            <tr>
              <td class="left">6.5톤 이상</td>
              <td>102,500</td>
              <td>118,700</td>
              <td>134,800</td>
              <td>393,800</td>
              <td>32,400</td>
            </tr>
            </tbody>
          </table>

      <blog-article title="05. 경찰서 신고 및 보험사 접수">
        <div class="margin-bottom">
          사망, 중상해, 도주 및 교통사고처리 특례법상 11대 중과실 사고의 경우에는 관할 경찰서에 반드시 신고해야 합니다. 차량만 파손되거나 사고 수습조치를 끝낸 경우에는 반드시 신고할 필요는 없습니다. 
        </div>

        <div class="border-box margin-bottom">
          <div class="title">
            11대 중과실 사고 (교통사고처리 특례법 제3조)
          </div>

          <div class="float-left">
            <ul>
              <li>신호·지시위반</li>
              <li>중앙선 침범</li>
              <li>제한속도위반(시속20KM초과)</li>
              <li>앞지르기방법위반</li>
              <li>철길건널목 통과방법위반</li>
              <li>횡단보도에서 보행자보호의무 위반</li>
            </ul>
          </div>

          <div class="float-left border">
            <ul>
              <li>무면허운전</li>
              <li>음주운전 또는 약물운전 </li>
              <li>보도침범사고</li>
              <li>승객추락방지의무위반</li>
              <li>스쿨존 위반사고</li>
            </ul>
          </div>
        </div>
        <tip class="margin-bottom-20px" tip="사고경위를 잘 파악하고 정확히 처리하기 위해서는 사고현장에서 당사자간 옳고 그름을 판단하기보다는 전문성을 갖춘 보험사에 위임하는 것이 좋습니다."></tip>

        <div class="left-border">
          보험사 콜센터 
        </div>

        <table class="margin-bottom">
            <thead>
            <tr>
              <th>보험사</th>
              <th>대표번호</th>
              <th>보험사</th>
              <th>대표번호</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="left">KB손해보험</td>
              <td>1544-0114</td>
              <td class="left">한화손해보험</td>
              <td>1566-8000</td>
            </tr>
            <tr>
              <td class="left">현대해상</td>
              <td>1588-5656</td>
              <td class="left">MG손해보험</td>
              <td>1588-5959</td>
            </tr>
            <tr>
              <td class="left">삼성화재</td>
              <td>1588-5114</td>
              <td class="left">흥국화재</td>
              <td>1688-1688</td>
            </tr>
            <tr>
              <td class="left">메리츠화재</td>
              <td>1566-7711</td>
              <td class="left">더K손해보험</td>
              <td>1566-3000</td>
            </tr>
            <tr>
              <td class="left">롯데손해보험</td>
              <td>1588-3344</td>
              <td class="left">AXA손해보험</td>
              <td>1566-1566</td>
            </tr>
            <tr>
              <td class="left">DB손해보험</td>
              <td>1588-0100</td>
              <td class="left"></td>
              <td></td>
            </tr>
            </tbody>
          </table>
      </blog-article>
    </blog-wrap>
  </div>
</template>

<script>
  import blogWrap from '../components/blog-wrap.component'
  import blogArticle from '../components/blog-article.component'
  import tip from '../components/tip.component'

  export default {
    data () {
      return {
        tags: ['교통사고', '현장조치방법', '사설견인차이용법', '긴급출동서비스 특약 비교']
      }
    },
    components: {
      blogWrap,
      blogArticle,
      tip
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../style/blog";
</style>
