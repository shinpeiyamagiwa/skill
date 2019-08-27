import Vue from 'vue';
import Router from 'vue-router';
import List from '../components/List';
import FacilityCreate from '../components/Facility/Create';
import FacilityEdit from '../components/Facility/Edit';
import FactoryCreate from '../components/Factory/Create'
import Calculate from '../components/Calculate';
Vue.use(Router);

export default new Router({
  mode: '',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/facility/create/:id',
      name: 'FacilityCreate',
      component: FacilityCreate
    },
    {
      path: '/facility/edit',
      name: 'FacilityEdit',
      component: FacilityEdit
    },
    {
      path: '/calculate/:id',
      name: 'Calculate',
      component: Calculate
    },
    {
      path: '/factory/create',
      name: 'FactoryCreate',
      component: FactoryCreate
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
});