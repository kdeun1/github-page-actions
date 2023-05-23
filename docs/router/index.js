import { createRouter, createWebHistory } from 'vue-router';
import Intro from 'docs/views/Intro.vue';
import PageView from 'docs/views/PageView';
import tabProps from 'docs/views/tab/props';
import buttonProps from 'docs/views/button/props';
import checkboxProps from 'docs/views/checkbox/props';
import selectProps from 'docs/views/select/props';
import toggleProps from 'docs/views/toggle/props';
import radioProps from 'docs/views/radio/props';
import textFieldProps from 'docs/views/textField/props';
import inputNumberProps from 'docs/views/inputNumber/props';
import sliderProps from 'docs/views/slider/props';
import iconProps from 'docs/views/icon/props';
import datePickerProps from 'docs/views/datePicker/props';
import calendarProps from 'docs/views/calendar/props';
import messageProps from 'docs/views/message/props';
import messageBoxProps from 'docs/views/messageBox/props';
import notificationProps from 'docs/views/notification/props';
import contextMenuProps from 'docs/views/contextMenu/props';
import windowProps from 'docs/views/window/props';
import schedulerProps from 'docs/views/scheduler/props';
import loadingProps from 'docs/views/loading/props';
import progressProps from 'docs/views/progress/props';
import menuProps from 'docs/views/menu/props';
import treeProps from 'docs/views/tree/props';
import timePickerProps from 'docs/views/timePicker/props';
import gridProps from 'docs/views/grid/props';
import barChartProps from 'docs/views/barChart/props';
import lineChartProps from 'docs/views/lineChart/props';
import scatterChartProps from 'docs/views/scatterChart/props';
import comboChartProps from 'docs/views/comboChart/props';
import pieChartProps from 'docs/views/pieChart/props';
import treeGridProps from 'docs/views/treeGrid/props';
import paginationProps from 'docs/views/pagination/props';
import heatMapProps from 'docs/views/heatMap/props';

const repoName = process.env.NODE_ENV === 'production' ? '/github-page-actions' : '';

const routes = [
  {
    path: '/',
    redirect: { name: 'Intro' },
  },
  {
    path: `${repoName}/`,
    name: 'Intro',
    component: Intro,
  },
  {
    path: `${repoName}/tab`,
    name: 'Tab',
    component: PageView,
    props: tabProps,
    meta: {
      category: 'Layout',
    },
  },
  {
    path: `${repoName}/window`,
    name: 'Window',
    component: PageView,
    props: windowProps,
    meta: {
      category: 'Layout',
    },
  },
  {
    path: `${repoName}/menu`,
    name: 'Menu',
    component: PageView,
    props: menuProps,
    meta: {
      category: 'Layout',
    },
  },
  {
    path: `${repoName}/contextMenu`,
    name: 'ContextMenu',
    component: PageView,
    props: contextMenuProps,
    meta: {
      category: 'Layout',
    },
  },
  {
    path: `${repoName}/button`,
    name: 'Button',
    component: PageView,
    props: buttonProps,
    meta: {
      category: 'Layout',
    },
  },
  {
    path: `${repoName}/icon`,
    name: 'Icon',
    component: PageView,
    props: iconProps,
    meta: {
      category: 'Layout',
    },
  },
  {
    path: `${repoName}/checkbox`,
    name: 'Checkbox',
    component: PageView,
    props: checkboxProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/radio`,
    name: 'Radio',
    component: PageView,
    props: radioProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/select`,
    name: 'Select',
    component: PageView,
    props: selectProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/toggle`,
    name: 'Toggle',
    component: PageView,
    props: toggleProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/textField`,
    name: 'TextField',
    component: PageView,
    props: textFieldProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/inputNumber`,
    name: 'InputNumber',
    component: PageView,
    props: inputNumberProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/slider`,
    name: 'Slider',
    component: PageView,
    props: sliderProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/calendar`,
    name: 'Calendar',
    component: PageView,
    props: calendarProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/datePicker`,
    name: 'DatePicker',
    component: PageView,
    props: datePickerProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/scheduler`,
    name: 'Scheduler',
    component: PageView,
    props: schedulerProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/timePicker`,
    name: 'TimePicker',
    component: PageView,
    props: timePickerProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/pagination`,
    name: 'Pagination',
    component: PageView,
    props: paginationProps,
    meta: {
      category: 'Form',
    },
  },
  {
    path: `${repoName}/grid`,
    name: 'Grid',
    component: PageView,
    props: gridProps,
    meta: {
      category: 'Table',
    },
  },
  {
    path: `${repoName}/tree`,
    name: 'Tree',
    component: PageView,
    props: treeProps,
    meta: {
      category: 'Table',
    },
  },
  {
    path: `${repoName}/treeGrid`,
    name: 'TreeGrid',
    component: PageView,
    props: treeGridProps,
    meta: {
      category: 'Table',
    },
  },
  {
    path: `${repoName}/barChart`,
    name: 'BarChart',
    component: PageView,
    props: barChartProps,
    meta: {
      category: 'Chart',
    },
  },
  {
    path: `${repoName}/lineChart`,
    name: 'LineChart',
    component: PageView,
    props: lineChartProps,
    meta: {
      category: 'Chart',
    },
  },
  {
    path: `${repoName}/scatterChart`,
    name: 'ScatterChart',
    component: PageView,
    props: scatterChartProps,
    meta: {
      category: 'Chart',
    },
  },
  {
    path: `${repoName}/pieChart`,
    name: 'PieChart',
    component: PageView,
    props: pieChartProps,
    meta: {
      category: 'Chart',
    },
  },
  {
    path: `${repoName}/comboChart`,
    name: 'ComboChart',
    component: PageView,
    props: comboChartProps,
    meta: {
      category: 'Chart',
    },
  },
  {
    path: `${repoName}/heatMap`,
    name: 'HeatMap',
    component: PageView,
    props: heatMapProps,
    meta: {
      category: 'Chart',
    },
  },
  {
    path: `${repoName}/message`,
    name: 'Message',
    component: PageView,
    props: messageProps,
    meta: {
      category: 'Notice',
    },
  },
  {
    path: `${repoName}/messageBox`,
    name: 'MessageBox',
    component: PageView,
    props: messageBoxProps,
    meta: {
      category: 'Notice',
    },
  },
  {
    path: `${repoName}/notification`,
    name: 'Notification',
    component: PageView,
    props: notificationProps,
    meta: {
      category: 'Notice',
    },
  },
  {
    path: `${repoName}/loading`,
    name: 'Loading',
    component: PageView,
    props: loadingProps,
    meta: {
      category: 'Notice',
    },
  },
  {
    path: `${repoName}/progress`,
    name: 'Progress',
    component: PageView,
    props: progressProps,
    meta: {
      category: 'Notice',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "pageNotFound" */ '../views/PageNotFound'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
