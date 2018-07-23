import blog from './blog.route'
import blog1 from './sub_routes/blog-1.sub-route'
import blog2 from './sub_routes/blog-2.sub-route'
import blog3 from './sub_routes/blog-3.sub-route'
import blog4 from './sub_routes/blog-4.sub-route'
import blog5 from './sub_routes/blog-5.sub-route'
import blog6 from './sub_routes/blog-6.sub-route'
import blog7 from './sub_routes/blog-7.sub-route'
import blog8 from './sub_routes/blog-8.sub-route'
import blog9 from './sub_routes/blog-9.sub-route'
import blog10 from './sub_routes/blog-10.sub-route'

export default [
  {
    path: '/blog',
    name: 'blog',
    redirect: '/blog/1',
    component: blog,
    children: [
      {
        path: '1',
        name: '1',
        component: blog1
      },
      {
        path: '2',
        name: '2',
        component: blog2
      },
      {
        path: '3',
        name: '3',
        component: blog3
      },
      {
        path: '4',
        name: '4',
        component: blog4
      },
      {
        path: '5',
        name: '5',
        component: blog5
      },
      {
        path: '6',
        name: '6',
        component: blog6
      },
      {
        path: '7',
        name: '7',
        component: blog7
      },
      {
        path: '8',
        name: '8',
        component: blog8
      },
      {
        path: '9',
        name: '9',
        component: blog9
      },
      {
        path: '10',
        name: '10',
        component: blog10
      }
    ]
  }
]
