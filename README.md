formatJs
========

A JavaScript library for some formatting works.

How to use
==========

####`require` the format module
```
    var format = require('./format.js')
```
####`formatDate()`
```
    format.formatDate(new Date,'yyyy-MM-dd hh:mm:ss')
```
####`printf()`
```
    format.printf('%% %s %d %f','hingsir',99,1.35)
```
####`formatTemplate()`
```
    var tmpl = 'name : ${user.name}, home :${user.address.home},work at :${user.address.work}'
    var user = {
        id: '1000',
        name: 'hingsir',
        address: {
            home: 'china',
            work: 'ZhuHai'
        }
    }
    var result = format.formatTemplate(tmpl, user)
```
