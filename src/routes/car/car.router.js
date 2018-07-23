import car from './car.route'
import mode from './sub-routes/mode/mode.sub-route'
import customerInfo from './sub-routes/customer-info/customer-info.sub-route'
import coverageDesign from './sub-routes/coverage-design/coverage-design.sub-route'
import comparison from './sub-routes/comparison/comparison.sub-route'
export default [
  {
    path: '/car',
    name: 'car',
    redirect: '/car/mode',
    component: car,
    children: [
      {
        path: 'mode',
        name: 'Mode',
        component: mode
      },
      {
        path: 'customer',
        name: 'Customer',
        component: customerInfo
      },
      {
        path: 'coverage',
        name: 'Coverage',
        component: coverageDesign
      },
      {
        path: 'comparison',
        name: 'Comparison',
        component: comparison
      }
    ]
  }
]
