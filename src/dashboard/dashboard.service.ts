import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getMetrics() {
    return {
      totalUsers: 1240,
      activeUsers: 890,
      sales: 45200,
      growth: '12%',
    };
  }

  getRevenue() {
    return {
      currentMonth: 12000,
      previousMonth: 9500,
      change: '+26%',
    };
  }

  getCustomerSatisfaction() {
    return {
      score: 87,
      trend: 'up',
    };
  }

  getVisitorInsights() {
    return {
      dailyVisitors: [120, 340, 560, 220, 450, 610, 720],
      topCountries: ['US', 'India', 'UK', 'Germany'],
    };
  }


getanalytics() {

    return dashboardData;
}

  getTopProducts() {
    return [
      { name: 'Product A', sales: 1500 },
      { name: 'Product B', sales: 1200 },
      { name: 'Product C', sales: 900 },
    ];
  }
}



const dashboardData={
  "salesDashboardMetrics": [
    {
      "id": 1,
      "icon": "ShoppingBag",
      "value": "$1k",
      "label": "Total Sales",
      "change": "+8% from yesterday",
      "bgColor": "#FFE2E5",
      "iconColor": "#FA5A7D"
    },
    {
      "id": 2,
      "icon": "FileText",
      "value": "300",
      "label": "Total Order",
      "change": "+5% from yesterday",
      "bgColor": "#FFF4DE",
      "iconColor": "#FF947A"
    },
    {
      "id": 3,
      "icon": "CheckCircle",
      "value": "5",
      "label": "Product Sold",
      "change": "+1.2% from yesterday",
      "bgColor": "#DCFCE7",
      "iconColor": "#3CD856"
    },
    {
      "id": 4,
      "icon": "Users",
      "value": "8",
      "label": "New Customers",
      "change": "+0.5% from yesterday",
      "bgColor": "#F3E8FF",
      "iconColor": "#BF83FF"
    }
  ],
  "visitorInsights": [
    { "month": "Jan", "loyalCustomers": 350, "newCustomers": 300, "uniqueCustomers": 320 },
    { "month": "Feb", "loyalCustomers": 380, "newCustomers": 280, "uniqueCustomers": 340 },
    { "month": "Mar", "loyalCustomers": 320, "newCustomers": 250, "uniqueCustomers": 380 },
    { "month": "Apr", "loyalCustomers": 300, "newCustomers": 220, "uniqueCustomers": 400 },
    { "month": "May", "loyalCustomers": 280, "newCustomers": 200, "uniqueCustomers": 380 },
    { "month": "Jun", "loyalCustomers": 250, "newCustomers": 180, "uniqueCustomers": 350 },
    { "month": "Jul", "loyalCustomers": 300, "newCustomers": 260, "uniqueCustomers": 380 },
    { "month": "Aug", "loyalCustomers": 380, "newCustomers": 350, "uniqueCustomers": 420 },
    { "month": "Sept", "loyalCustomers": 450, "newCustomers": 400, "uniqueCustomers": 440 },
    { "month": "Oct", "loyalCustomers": 420, "newCustomers": 380, "uniqueCustomers": 400 },
    { "month": "Nov", "loyalCustomers": 380, "newCustomers": 340, "uniqueCustomers": 360 },
    { "month": "Dec", "loyalCustomers": 320, "newCustomers": 280, "uniqueCustomers": 320 }
  ],
  "totalRevenueChart": [
    { "name": "Monday", "onlineSales": 14, "offlineSales": 12 },
    { "name": "Tuesday", "onlineSales": 17, "offlineSales": 11 },
    { "name": "Wednesday", "onlineSales": 5, "offlineSales": 22 },
    { "name": "Thursday", "onlineSales": 16, "offlineSales": 6 },
    { "name": "Friday", "onlineSales": 12, "offlineSales": 11 },
    { "name": "Saturday", "onlineSales": 17, "offlineSales": 13 },
    { "name": "Sunday", "onlineSales": 21, "offlineSales": 11 }
  ],
  "customerSatisfaction": {
    "lastMonthData": [
      { "x": 0, "y": 75 },
      { "x": 50, "y": 45 },
      { "x": 100, "y": 50 },
      { "x": 150, "y": 60 },
      { "x": 200, "y": 55 },
      { "x": 250, "y": 65 },
      { "x": 300, "y": 70 }
    ],
    "thisMonthData": [
      { "x": 0, "y": 25 },
      { "x": 50, "y": 35 },
      { "x": 100, "y": 20 },
      { "x": 150, "y": 40 },
      { "x": 200, "y": 45 },
      { "x": 250, "y": 50 },
      { "x": 300, "y": 15 }
    ]
  },
  "targetVsReality": [
    { "month": "Jan", "reality": 85, "target": 60 },
    { "month": "Feb", "reality": 55, "target": 75 },
    { "month": "Mar", "reality": 45, "target": 100 },
    { "month": "Apr", "reality": 70, "target": 55 },
    { "month": "May", "reality": 85, "target": 110 },
    { "month": "June", "reality": 80, "target": 105 },
    { "month": "July", "reality": 90, "target": 108 }
  ],
  "topProducts": [
    {
      "id": "01",
      "name": "Home Decor Range",
      "popularity": 45,
      "sales": 45,
      "color": "#3B82F6",
      "lightColor": "#DBEAFE"
    },
    {
      "id": "02",
      "name": "Disney Princess Pink Bag 18'",
      "popularity": 29,
      "sales": 29,
      "color": "#10B981",
      "lightColor": "#D1FAE5"
    },
    {
      "id": "03",
      "name": "Bathroom Essentials",
      "popularity": 18,
      "sales": 18,
      "color": "#8B5CF6",
      "lightColor": "#EDE9FE"
    },
    {
      "id": "04",
      "name": "Apple Smartwatches",
      "popularity": 25,
      "sales": 25,
      "color": "#F59E0B",
      "lightColor": "#FEF3C7"
    }
  ],
  "highlightedCountries": {
    "840": "#F59E0B",
    "076": "#EF4444",
    "156": "#8B5CF6",
    "360": "#10B981",
    "566": "#3B82F6"
  },
  "volumeServiceChartSkeleton": [
    { "volume": 85, "services": 40 },
    { "volume": 100, "services": 45 },
    { "volume": 75, "services": 35 },
    { "volume": 65, "services": 40 },
    { "volume": 50, "services": 30 },
    { "volume": 55, "services": 35 }
  ]
}
