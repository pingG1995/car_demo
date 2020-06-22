/**
 * Author: JianlinPeng
 * Date: 2020-05-24
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/manage/v3/sre/getOrderTotal', function (req, res) {
  res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
  const result = {
    'requestId': '11',
    'state': 'OK',
    'body': [
      {
        'bossCustTotal': '9853',
        'internetCustTotal': '25914',
        'orderTotal': '152282'
      }
    ]
  };
  res.send(result);
});

app.get('/manage/v3/sre/getProductListByTime', function (req, res) {
  console.warn(req.query);
  res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
  const result = {
    'requestId': '11',
    'state': 'OK',
    'body': [
      {
        'productName': '容量型云硬盘',
        'total': '3017'
      },
      {
        'productName': '云主机',
        'total': '2449'
      },
      {
        'productName': '容量型系统盘',
        'total': '1751'
      },
      {
        'productName': '公网ip',
        'total': '789'
      },
      {
        'productName': '云甲',
        'total': '321'
      }
    ]
  };
  res.send(result);
});

app.get('/security/incident/statistics', function (req, res) {
  console.warn(req.query);
  res.set({ 'Content-Type': 'text/json', 'Encodeing': 'utf8' });
  const result = {
    'meta': {
      'code': 200,
      'message': 'OK',
      'type': 1
    },
    'data': [
      {
        'attackName': 'SQL注入',
        'attackCount': 19700,
        'percentage': '13.90%'
      },
      {
        'attackName': 'RSS内站脚本攻击',
        'attackCount': 16700,
        'percentage': '10.00%'
      },
      {
        'attackName': '目录篡改攻击',
        'attackCount': 14700,
        'percentage': '9.80%'
      },
      {
        'attackName': '主机漏洞攻击',
        'attackCount': 10700,
        'percentage': '13.90%'
      },
      {
        'attackName': '账号弱口令',
        'attackCount': 980,
        'percentage': '7.89%'
      },
      {
        'attackName': '账号暴力破解',
        'attackCount': 970,
        'percentage': '6.90%'
      },
      {
        'attackName': '其他',
        'attackCount': 800,
        'percentage': '5.9%'
      }
    ],
    range: [
      {
        'date': '2020-04-07',
        'attackCount': Math.ceil(70 + Math.random() * 30)
      },
      {
        'date': '2020-04-08',
        'attackCount': Math.ceil(70 + Math.random() * 30)
      },
      {
        'date': '2020-04-09',
        'attackCount': Math.ceil(70 + Math.random() * 30)
      },
      {
        'date': '2020-04-10',
        'attackCount': Math.ceil(70 + Math.random() * 30)
      },
      {
        'date': '2020-04-11',
        'attackCount': Math.ceil(70 + Math.random() * 30)
      },
      {
        'date': '2020-04-12',
        'attackCount': Math.ceil(70 + Math.random() * 30)
      },
      {
        'date': '2020-04-13',
        'attackCount': Math.ceil(70 + Math.random() * 30)
      }
    ]
  };
  res.send(result);
});

app.get('/manage/v3/sre/getServiceListByTime', function (req, res) {
  const query = req.query;
  const result = {
    'requestId': '123',
    'state': 'OK',
    'body': []
  };
  const bodyResult = {};
  let serviceTypeName = 0;
  switch (query.serviceType) {
    case '0':
      serviceTypeName = 'allList';
      break;
    case '1':
      serviceTypeName = 'vmList';
      break;
    case '2':
      serviceTypeName = 'diskList';
      break;
    case '3':
      serviceTypeName = 'internetList';
      break;
  }
  bodyResult[serviceTypeName] = [
    {
      'serviceName': 'all',
      'serviceTotal': '1',
      'serviceSuccessTotal': '0',
      'delServiceTotal': '0',
      'delServiceSuccessTotal': '0',
      'dateTime': '2020-05-18'
    },
    {
      'serviceName': 'all',
      'serviceTotal': '2',
      'serviceSuccessTotal': '1',
      'delServiceTotal': '0',
      'delServiceSuccessTotal': '0',
      'dateTime': '2020-05-17'
    },
    {
      'serviceName': 'all',
      'serviceTotal': '3',
      'serviceSuccessTotal': '2',
      'delServiceTotal': '1',
      'delServiceSuccessTotal': '1',
      'dateTime': '2020-05-16'
    }
  ];
  result.body.push(bodyResult);
  res.send(result);
});

// 监听8888端口
app.listen(8888);
