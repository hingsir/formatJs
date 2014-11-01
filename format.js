;
(function (global, undefined) {
    var format = {}
    format.printf = function (format, args) {
        var i = 0,
            args = [].slice.call(arguments).slice(1)
        var o = {
            '%d': parseInt,
            '%f': parseFloat,
            '%s': function (obj) {
                return obj + ''
            }
        }
        var _parse = function (type) {
            return function (obj) {
                return  o[type](obj)
            }
        }
        format = format.replace(/%[dfs%]/img, function ($) {
            if ($ == '%%') {
                return '%'
            }
            if (i == args.length) {
                return $
            }
            return  _parse($)(args[i++])
        })
        return format
    }
    format.formatDate = function (date, format) {
        var o = {
            'yyyy': date.getFullYear(),
            'MM': date.getMonth() + 1,
            'dd': date.getDate(),
            'hh': date.getHours(),
            'mm': date.getMinutes(),
            'ss': date.getSeconds()
        }
        format = format.replace(/yyyy|MM|dd|hh|mm|ss/g, function ($) {
            return ('0000' + o[$]).substr(-$.length)
        })
        return format
    }

    format.formatTemplate = function (template, data) {
        template = template.replace(/(\$\{((\w+\.?)+)\})/gm, function ($1, $2, $3) {
            return new Function('return ' + $3)()
        })
        return template
    }

    if (typeof module !== 'undefined' && module && typeof module.exports !== 'undefined') {
        module.exports = format
    } else {
        global.format = format
    }
})(this);
