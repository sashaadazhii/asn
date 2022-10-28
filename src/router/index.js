import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/signin/user',
    name: 'loginUser',
    meta: {layout: 'login', access: [], auth: false, header: 'loginUser'},
    component: () => import('@/views/Login')
  },
  {
    path: '/signin/customer',
    name: 'loginCustomer',
    meta: {layout: 'login', access: [], auth: false, header: 'loginCustomer'},
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/inspection-builder',
    meta: {layout: 'admin', access: [], auth: false, header: 'admin'},
    component: () => import('@/views/Home')
  },
  {
    path: '/work-board',
    name: 'WorkOrders',
    redirect: '/work-orders/board',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: false, header: 'board'}
  },
  // {
  //   path: '/work-orders/calendar',
  //   name: 'WorkBoardCalendar',
  //   meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: false, header: 'board'},
  //   component: () => import('@/views/WorkOrders/Calendar')
  // },
  {
    path: '/work-orders/board',
    name: 'WorkOrdersBoard',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: false, header: 'board'},
    component: () => import('@/views/WorkOrders/Board')
  },
  {
    path: '/inspection-builder',
    name: 'InspectionBuilder',
    meta: {layout: 'admin', access: ['admin', 'service-advisor', 'technician'], auth: true, header: 'builder'},
    component: () => import('@/views/InspectionBuilder')
  },
  {
    path: '/inspection-builder/card/:id',
    name: 'CardTemplatePage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor', 'technician'], auth: true, header: 'builder'},
    component: () => import('@/views/InspectionBuilder/CardPage')
  },
  {
    path: '/inspection-builder/card/:id/parts',
    name: 'CardTemplatePartsPage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor', 'technician'], auth: true, header: 'builder'},
    component: () => import('@/views/InspectionBuilder/PartsPage')
  },
  {
    path: '/customers',
    name: 'CustomersPage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: true, header: 'customersPage'},
    component: () => import('@/views/Customers/CustomersPage')
  },
  {
    path: '/customers/:uid',
    name: 'CustomerPage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: true, header: 'customerPage'},
    component: () => import('@/views/Customers/CustomerPage')
  },
  {
    path: '/new-customer',
    name: 'NewCustomerPage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: true, header: 'newCustomer'},
    component: () => import('@/views/Customers/NewCustomerPage')
  },
  {
    path: '/new-customer/:uid',
    name: 'EditCustomerPage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: true, header: 'editCustomer'},
    component: () => import('@/views/Customers/NewCustomerPage')
  },
  {
    path: '/customers/:uid/new-vehicle',
    name: 'NewVehiclePage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: true, header: 'newVehicle'},
    component: () => import('@/views/Customers/NewVehiclePage')
  },
  {
    path: '/customers/:uid/vehicles/:vehicleUid/edit',
    name: 'EditVehiclePage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: true, header: 'newVehicle'},
    component: () => import('@/views/Customers/NewVehiclePage')
  },
  {
    path: '/customers/:uid/vehicles/:vehicleUid',
    name: 'VehiclePage',
    meta: {layout: 'admin', access: ['admin', 'service-advisor'], auth: true, header: 'VehiclePage'},
    component: () => import('@/views/Customers/VehiclePage')
  },
  {
    path: '/settings',
    name: 'CompanySettings',
    meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
    component: () => import('@/views/Settings'),
    redirect: '/settings/general',
    children: [
      {
        path: 'general',
        name: 'CompanySettingsGeneral',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
        component: () => import('@/views/Settings/General')
      },
      {
        path: 'employees',
        name: 'CompanySettingsEmployees',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
        component: () => import('@/views/Settings/Employees')
      },
      {
        path: 'employees/:id',
        name: 'CompanySettingsEmployee',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
        component: () => import('@/views/Settings/Employees/Employee')
      },
      {
        path: 'statuses',
        name: 'CompanySettingsStatuses',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
        component: () => import('@/views/Settings/Statuses')
      },
      {
        path: 'statuses/:id',
        name: 'CompanySettingsStatus',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
        component: () => import('@/views/Settings/Statuses/StatusPage')
      },
      {
        path: 'services',
        name: 'CompanySettingsServices',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
        component: () => import('@/views/Settings/Services')
      },
      {
        path: 'markups',
        name: 'CompanySettingsMarkups',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'CompanySettings'},
        component: () => import('@/views/Settings/Markups')
      }
    ]
  },
  {
    path: '/reports',
    name: 'Reports',
    meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
    component: () => import('@/views/Reports'),
    redirect: '/reports/sold-time',
    children: [
      {
        path: 'sold-time',
        name: 'ReportsSoldTime',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/SoldTime')
      },
      {
        path: 'new-customers',
        name: 'ReportsNewCustomers',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/NewCustomers')
      },
      {
        path: 'deferred-work',
        name: 'ReportsDeferredWork',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/DeferredWork')
      },
      {
        path: 'monthly-efficiency',
        name: 'MonthlyEfficiency',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/MonthlyEfficiency')
      },
      {
        path: 'profit',
        name: 'Profit',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/Profit')
      },
      {
        path: 'service-due',
        name: 'ServiceDue',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/ServiceDue')
      },
      {
        path: 'payroll-hours',
        name: 'PayrollHours',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/PayrollHours')
      },
      {
        path: 'mark-up',
        name: 'markUp',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/MarkUp')
      },
      {
        path: 'inventory',
        name: 'inventory',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/Inventory')
      },
      {
        path: 'stocks',
        name: 'stocks',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/Stocks')
      },
      {
        path: 'customer-sales-report',
        name: 'customerSalesReport',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Reports'},
        component: () => import('@/views/Reports/CustomerSalesReport')
      }
    ]
  },
  {
    path: '/vendors',
    name: 'Vendors',
    meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Vendors'},
    component: () => import('@/views/Vendors'),
    redirect: '/vendors/main',
    children: [
      {
        path: 'main',
        name: 'Vendors',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Vendors'},
        component: () => import('@/views/Vendors/Main')
      },
      {
        path: 'expenses',
        name: 'Expenses',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Vendors'},
        component: () => import('@/views/Vendors/Expenses')
      },
      {
        path: 'report',
        name: 'Report',
        meta: {layout: 'admin', access: ['admin'], auth: true, header: 'Vendors'},
        component: () => import('@/views/Vendors/Report')
      }
    ]
  },
  {
    path: '/work-order',
    name: 'WorkOrder',
    meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
    component: () => import('@/views/WorkOrder'),
    redirect: '/work-order/new',
    children: [
      {
        path: 'new',
        name: 'WorkOrderNew',
        meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: ''},
        component: () => import('@/views/WorkOrder/New')
      },
      {
        path: ':uid/general',
        name: 'WorkOrderGeneral',
        meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
        component: () => import('@/views/WorkOrder/General')
      },
      {
        path: ':uid/vehicle-health',
        name: 'WorkOrderVehicleHealth',
        meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
        component: () => import('@/views/WorkOrder/VehicleHealth')
      },
      {
        path: ':uid/vehicle-health/checkout',
        name: 'WorkOrrderCheckout',
        meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
        component: () => import('@/views/WorkOrder/Checkout')
      },
      {
        path: ':uid/vehicle-info',
        name: 'WorkOrderVehicleInfo',
        meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
        component: () => import('@/views/WorkOrder/VehicleInfo')
      },
      {
        path: ':uid/finance',
        name: 'WorkOrderFinance',
        meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
        component: () => import('@/views/WorkOrder/Finance')
      },
      {
        path: ':uid/finance/:id',
        name: 'WorkOrderFinanceCard',
        meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
        component: () => import('@/views/WorkOrder/Finance/CardPage')
      }
    ]
  },
  {
    path: '/flows',
    name: 'Flows',
    meta: {layout: 'admin', header: 'Flows'},
    component: () => import('@/views/Flows')
  },
  {
    path: '/staff-calendar',
    name: 'StaffCalendar',
    meta: {layout: 'admin', header: 'staffCalendar'},
    component: () => import('@/views/StaffCalendar')
  },
  {
    path: '/capacity-calendar',
    name: 'CapacityCalendar',
    meta: {layout: 'admin', header: 'capacityCalendar'},
    component: () => import('@/views/CapacityCalendar')
  },
  {
    path: '/payroll-overview',
    name: 'PayrollOverview',
    meta: {layout: 'admin', header: 'payrollOverview'},
    component: () => import('@/views/PayrollOverview')
  },
  {
    path: '/employee-productivity',
    name: 'EmployeeProductivity',
    meta: {layout: 'admin', header: 'employeeProductivity'},
    component: () => import('@/views/EmployeeProductivity')
  },
  {
    path: '/shift-management',
    name: 'ShiftManagement',
    meta: {layout: 'admin', header: 'shiftManagement'},
    component: () => import('@/views/ShiftManagement')
  },

  {
    path: '/test',
    name: 'TestPage',
    meta: {layout: 'admin', header: 'Test'},
    component: () => import('@/views/Test')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    meta: {layout: 'admin', header: 'Documentation'},
    component: () => import('@/views/Documentation')
  },
  {
    path: '/service-advisor/:uid',
    name: 'SAView',
    meta: {layout: 'order', access: ['admin', 'technician', 'service-advisor'], auth: true, header: 'WorkOrder'},
    component: () => import('@/views/WorkOrder/AdvisorView'),

    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})
const users = ['admin', 'technician', 'service-advisor']

// router.beforeEach((to, from, next) => {
//   const role = store.state.login.user.role
//   const isLoggedIn = !!store.state.login.token
//   const requiredAuth = to.matched.some(record => record.meta.auth)
//   const access = to.meta.access || []
//   const entrance = access.some(acc => acc === role)
//   if (requiredAuth && !isLoggedIn) {
//     if (users.some(user => user === role)) next('/signin/user')
//     if (access.some(acc => users.includes(acc))) next('/signin/user')
//   } else if (requiredAuth && !entrance) {
//     if (users.some(user => user === role)) next('/signin/user')
//     if (access.some(acc => users.includes(acc))) next('/signin/user')
//   } else {
//     next()
//   }
// })

export default router
