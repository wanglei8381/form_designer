$(function () {

    var emptyFnc = function () {
    };
    var validator = {
        tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
        phone: /^1[3|4|5|7|8]\d{9}$/,
        email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/,
        float: /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/
    };

    //单表类型
    var formTemplateTypes = ['date', 'text', 'input', 'textarea', 'radio', 'checkbox', 'select', 'number_input', 'money_input', 'file', 'dept_radio', 'dept_multiselect', 'user_radio', 'user_multiselect', 'splitline', 'tel', 'phone', 'image', 'items', 'email'];
    var likeInputTypes = ['input', 'number_input', 'money_input', 'email', 'tel', 'phone'];
    var $template_input = $('#template_input');
    var inputTemplateStr = $template_input.html();
    $template_input.remove();
    var templateConfig = {};
    //初始化模板引擎（模板在页面中，通过DOM获取）
    formTemplateTypes.forEach(function (key) {

        if (likeInputTypes.indexOf(key) > -1) {
            templateConfig[key] = _.template(inputTemplateStr);
        } else {
            var $dom = $('#template_' + key);
            templateConfig[key] = $dom.length ? _.template($dom.html()) : function () {
                return '';
            };
            $dom.remove();
        }
    });

    //模拟数据
    var datas = {
        msg: {
            "appModel": [{
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "select",
                "maxLen": "200",
                "fieldCode": "oper_type",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 34,
                "minLen": "0",
                "orderByNum": "1",
                "ifAuto": "0",
                "defaultValue": "事假,病假,婚假,丧假,年假,产假,其他",
                "ifEdit": "1",
                "fieldName": "请假类型",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "input",
                "maxLen": "200",
                "fieldCode": "otherreason",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "0",
                "id": 104,
                "minLen": "0",
                "orderByNum": "2",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "1",
                "fieldName": "其他原因",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "date",
                "maxLen": "200",
                "fieldCode": "begin_date",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 33,
                "minLen": "0",
                "orderByNum": "3",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "1",
                "fieldName": "请假开始日期",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "date",
                "maxLen": "200",
                "fieldCode": "end_date",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 40,
                "minLen": "0",
                "orderByNum": "4",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "1",
                "fieldName": "请假结束日期",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "input",
                "maxLen": "200",
                "fieldCode": "countday",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 102,
                "minLen": "0",
                "orderByNum": "5",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "1",
                "fieldName": "天",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "input",
                "maxLen": "200",
                "fieldCode": "counthour",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 103,
                "minLen": "0",
                "orderByNum": "6",
                "ifAuto": "0",
                "defaultValue": null,
                "ifEdit": "1",
                "fieldName": "时",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "input",
                "maxLen": "200",
                "fieldCode": "reason_info",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 41,
                "minLen": "0",
                "orderByNum": "7",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "1",
                "fieldName": "请假事由",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "text",
                "maxLen": "200",
                "fieldCode": "dept",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 31,
                "minLen": "0",
                "orderByNum": "8",
                "ifAuto": "1",
                "defaultValue": null,
                "ifEdit": "0",
                "fieldName": "部门",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "text",
                "maxLen": "200",
                "fieldCode": "user_info",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 32,
                "minLen": "0",
                "orderByNum": "9",
                "ifAuto": "1",
                "defaultValue": null,
                "ifEdit": "0",
                "fieldName": "申请人",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "0",
                "fieldType": "text",
                "maxLen": "200",
                "fieldCode": "dept_opinion",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 36,
                "minLen": "0",
                "orderByNum": "10",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "部门领导意见",
                "isOpinion": "1",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "0",
                "fieldType": "text",
                "maxLen": "200",
                "fieldCode": "hr_opinion",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 37,
                "minLen": "0",
                "orderByNum": "11",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "人力资源部意见",
                "isOpinion": "1",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "0",
                "fieldType": "text",
                "maxLen": "200",
                "fieldCode": "dgm_opinion",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 38,
                "minLen": "0",
                "orderByNum": "12",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "直属副总意见",
                "isOpinion": "1",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "0",
                "fieldType": "text",
                "maxLen": "200",
                "fieldCode": "gm_opinion",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 39,
                "minLen": "0",
                "orderByNum": "13",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "总经理批示",
                "isOpinion": "1",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "text",
                "maxLen": "200",
                "fieldCode": "input_date",
                "dateFormter": null,
                "columnNamesType": "",
                "numberFormter": "0",
                "isMust": "1",
                "id": 30,
                "minLen": "0",
                "orderByNum": "14",
                "ifAuto": "1",
                "defaultValue": null,
                "ifEdit": "0",
                "fieldName": "填表日期",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "dept_radio",
                "maxLen": "",
                "fieldCode": "choose_department",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "date",
                "numberFormter": "",
                "isMust": "1",
                "id": 218,
                "minLen": "",
                "orderByNum": "15",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "单选部门测试",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "user_multiselect",
                "maxLen": "",
                "fieldCode": "user_info_more",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "text",
                "numberFormter": "",
                "isMust": "1",
                "id": 222,
                "minLen": "",
                "orderByNum": "16",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "多选人员测试",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "user_radio",
                "maxLen": "",
                "fieldCode": "user_info_dan",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "date",
                "numberFormter": "",
                "isMust": "1",
                "id": 219,
                "minLen": "",
                "orderByNum": "17",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "单选人员测试",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": null
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "dept_multiselect",
                "maxLen": "",
                "fieldCode": "choose_part_more",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "text",
                "numberFormter": "",
                "isMust": "1",
                "id": 223,
                "minLen": "",
                "orderByNum": "18",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "多选部门测试",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "change_position",
                "maxLen": "",
                "fieldCode": "choose_position",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "text",
                "numberFormter": "",
                "isMust": "1",
                "id": 224,
                "minLen": "",
                "orderByNum": "19",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "选择职位测试",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "image",
                "maxLen": "",
                "fieldCode": "pic_info",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "text",
                "numberFormter": "",
                "isMust": "1",
                "id": 221,
                "minLen": "",
                "orderByNum": "20",
                "ifAuto": "1",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "图片上传测试",
                "isOpinion": "0",
                "columnNames": "",
                "ifVariableValue": ""
            }, {
                "errorTip": "",
                "ifVisible": "1",
                "fieldType": "items",
                "maxLen": "",
                "fieldCode": "table_info",
                "dateFormter": "yyyy-MM-dd HH:mm:ss",
                "columnNamesType": "text",
                "numberFormter": "",
                "isMust": "1",
                "id": 220,
                "minLen": "",
                "orderByNum": "21",
                "ifAuto": "0",
                "defaultValue": "",
                "ifEdit": "0",
                "fieldName": "表格插件测试",
                "isOpinion": "1",
                "columnNames": "姓名,编号，性别",
                "ifVariableValue": ""
            }],
            "metaName": "请假申请单",
            "sysDate": "2016-05-04"
        }
    };

    //--------------------------------------------------------------------
    //模板封装
    //--------------------------------------------------------------------
    var Config = Backbone.Model.extend({
        initialize: function () {
        },
        idAttribute: "fieldCode"
    });

    var Items = Backbone.Collection.extend({
        initialize: function () {
        },
        parse: function (resp, options) {
            return resp.msg.appModel;
        },
        model: Config,
        service: requestService,
        sync: function (method, model, options) {
            switch (method) {
                case "read":
                    return options.success(datas);
                    var workflowdata = options.workflowdata;

                    var data = {
                        "ifno": "zywx-workFlow-0005",
                        "condition": {
                            "url": "/appdo-web-flow/workFlowData/getBillTypeTemplateFileds"
                        },
                        "content": {
                            "tenantId": workflowdata.tenantId,
                            "metaid": workflowdata.metaid
                        }
                    };
                    options.params = {
                        url: workFlowUrl,
                        data: data
                    };
                    this.service.request(options);
                    break;
            }
        }
    });

    var ConfigView = Backbone.View.extend({
        initialize: function (options) {
            this.model.view = this;
            this.baseView = options.baseView;
            this.render();
        },
        render: function () {
            var crud = this.baseView.crud;
            var model = this.model;
            var template = templateConfig[model.get('fieldType')];
            this.template = template;
            if (template) {
                this.$el = $(template({
                    data: model.attributes,
                    cid: model.cid,
                    ifAuto: function (val) {
                    },
                    ifVariableValue: function (val) {
                    },
                    isMust: function (val) {
                        return val == 1 ? 'required' : '';
                    },
                    ifVisible: function (val) {
                        return val == 1 ? '' : 'uhide';
                    },
                    ifEdit: function (val) {
                        return val == 1 ? '' : 'disabled';
                        //return crud === 'u' && (val == 1 ? '' : 'disabled');
                    },
                    forRadio: function (val, item) {
                        if (val) {
                            var options = val.split(/[,，，]/);
                            var html = _.map(options, function (opt) {
                                return '<label class="u-radio"><input name="' + item.fieldCode + '" value="' + opt + '" type="radio"/> ' + opt + '</label>';
                            }).join(' ');
                            return html
                        }
                        return '';
                    },
                    forCheckbox: function (val, item) {
                        if (val) {
                            var options = val.split(/[,，，]/);
                            var html = _.map(options, function (opt) {
                                return '<div class="ub ufl paddB6"><input type="checkbox" name="' + item.fieldCode + '" value="' + opt + '" class="uhide"/><div  class="check  paddLeft9 paddRight4 paddTB10 uc-a1 ">' + opt + '</div><div class="uinn"></div></div>';
                            }).join(' ');
                            return html
                        }
                        return '';
                    },
                    forSelect: function (val, item) {
                        if (val) {
                            var options = val.split(/[,，，]/);
                            var html = _.map(options, function (opt) {
                                return '<option value="' + opt + '">' + opt + '</option>';
                            }).join(' ');
                            return html
                        }
                        return '';
                    }
                }));

                this.handleFieldType(model.get('fieldType'));
            }
        },
        handleFieldType: function (type) {
            switch (type) {
                case 'image':
                    this.handleImageType();
                    break;
                case 'file':
                    this.handleFileType();
                    break;
                case 'items':
                    this.handleItemsType();
                    break;
                case 'date':
                    this.handleDateType();
                    break;
            }
        },
        changetime: function (strTime, fieldCode, model) {
            var self = this;
            var dateFormter = this.model.get('dateFormter');
            var d = new Date();
            var year = d.getFullYear(),
                moth = d.getMonth() + 1,
                date = d.getDate(),
                hour = d.getHours(),
                mins = d.getMinutes(),
                secs = d.getSeconds();

            var pickTime = '([0-9]{4})[^0-9]+([0-9]{1,2})[^0-9]+([0-9]{1,2})';
            var onlyYMD = multi = Math.floor((strTime.length - 10) / 3);
            while (multi--) {
                pickTime += '[^0-9]+([0-9]{1,2})';
            }
            var pickTimeReg = new RegExp(pickTime);
            var times = pickTimeReg.exec(strTime);
            if (times) {
                var size = times.length;
                year = parseInt(times[1]);
                moth = parseInt(times[2]);
                date = parseInt(times[3]);
                if (size >= 5) {
                    hour = parseInt(times[4]);
                    if (size >= 6) {
                        mins = parseInt(times[5]);
                        if (size >= 7) {
                            secs = parseInt(times[6]);
                        }
                    }
                }
            }

            var handleResult = function (d) {
                var val = dateFormat(d, dateFormter);
                model.set(fieldCode, val);
            };

            uexControl.cbOpenDatePicker = function (opId, dataType, dateStr) {
                var date = JSON.parse(dateStr);
                d.setFullYear(date.year);
                d.setMonth(date.month);
                d.setDate(date.day);
                if (onlyYMD) {
                    uexControl.cbOpenTimePicker = function (opId, dataType, timeStr) {
                        var time = JSON.parse(timeStr);
                        d.setHours(time.hour);
                        d.setMinutes(time.minute);
                        d.setSeconds(time.second);
                        handleResult(d);
                    }
                    uexControl.openTimePicker(hour, mins, secs);
                } else {
                    handleResult(d);
                }
            }
            uexControl.openDatePicker(year, moth, date);
        },
        handleDateType: function () {
            var self = this;
            appcan.button($('.time', this.$el), "btn-act", function () {
                var model = self.baseView.formView.model;
                var fieldCode = this.getAttribute('data-fieldCode');
                var val = model.get(fieldCode);
                try {
                    self.changetime(val, fieldCode, model);
                } catch (e) {
                    alert(e.stack);
                }
            });

        },
        handleItemsType: function () {
            var self = this;
        },
        handleImageType: function () {

        },
        handleFileType: function () {

        }
    });

    var ItemsView = Backbone.View.extend({
        initialize: function (options) {
            this.listenTo(this.collection, 'add', this.add);
            //默认是预览
            this.crud = null;
            //表单类型，从本地获取
            var workflowdata = JSON.parse(decodeURIComponent(appcan.getLocVal('WORKFLOWDATA')));
            this.workflowdata = workflowdata;
        },
        collection: new Items(),
        'el': '#list',
        render: function (metaName) {
        },
        load: function (opts, callback) {
            var self = this;
            callback = callback || emptyFnc;
            if (typeof opts === 'object') {
                this.crud = opts.crud || 'r';
            }
            this.collection.fetch({
                success: function (col, reps, options) {
                    callback(col, reps, options);
                },
                workflowdata: this.workflowdata
            });
        },
        fillCollection: function (list, metaName) {
            this.crud = this.crud || 'u';
            this.collection.set(list);
            this.render(metaName);
        },
        add: function (model) {
            var configView = new ConfigView({
                model: model,
                baseView: this
            });
            if (configView.$el) {
                this.$el.append(configView.$el);
            }
        }
    });

    //--------------------------------------------------------------------
    //数据装载
    //--------------------------------------------------------------------
    var Form = Backbone.Model.extend({
        initialize: function () {
        },
        service: requestService,
        validate: function (attrs, options) {
            for (var key in attrs) {
                var val = attrs[key];
                var config = this.view.configs.get(key);
                if (!config || config.get('ifVisible') == 0) {
                    continue;
                }

                if (config.get('isMust') == 1 && !$.trim(val)) {
                    return config.get('fieldName') + '是必填字段';
                }

                var maxLen = +config.get('maxLen');
                var minLen = +config.get('minLen');
                if (minLen && val.length < minLen) {
                    return config.get('fieldName') + '字段最短' + minLen + '个字符'
                }

                if (maxLen && val.length > maxLen) {
                    return config.get('fieldName') + '字段最长' + maxLen + '个字符'
                }

                switch (config.get('fieldType')) {
                    case 'email':
                        if (!validator.email.test(val)) {
                            return config.get('fieldName') + '字段的格式不正确'
                        }
                        break;
                    case 'tel':
                        if (!validator.tel.test(val)) {
                            return config.get('fieldName') + '字段的格式不正确'
                        }
                        break;
                    case 'phone':
                        if (!validator.phone.test(val)) {
                            return config.get('fieldName') + '字段的格式不正确'
                        }
                        break;
                    case 'number_input':
                    case 'money_input':
                        if (!validator.float.test(val)) {
                            return config.get('fieldName') + '字段的格式不正确'
                        }
                        break;
                }

            }
        },
        parse: function (reps, options) {
            if (options.parse) {
                return reps.note.entity
            }
        },
        sync: function (method, model, options) {
            switch (method) {
                case "create":
                    alert(JSON.stringify(this.toJSON()));
                    return;
                    options.url = workFlowUrl;
                    options.data = JSON.stringify({
                        "ifno": "zywx-workFlow-0008",
                        "condition": {
                            "url": "/appdo-web-flow/workFlowAction/saveForm/" + options.flag,
                            "masifno": "zywx-note-0001"
                        },
                        "content": {
                            "tenantId": options.workflowdata.tenantId,
                            "entityTypeId": "24",
                            "entity": this.toJSON()
                        }
                    });
                    this.service.ajax(options);

                    break;
                case "update":
                    break;
                case "patch":
                    break;
                case "read":
                    options.url = "/emoa/workFlow";
                    options.data = JSON.stringify({
                        "ifno": "zywx-workFlow-0005",
                        "condition": {
                            "url": "/appdo-web-flow/workFlowData/getBillTypeTemplateFileds",
                            "entityTypeId": "24",
                            "objectId": this.id
                        },
                        "content": {
                            "tenantId": "611",
                            "metaid": this.get('metaid')
                        }
                    });
                    this.service.ajax(options);
                    break;
                case "delete":
                    break;
                default:
                    break;
            }
        }
    });

    var FormView = Backbone.View.extend({
        initialize: function () {
            this.model.view = this;
        },
        model: new Form(),
        el: '#list',
        events: {
            'click #submit': 'save'
        },
        bindings: {},
        onceUpdate: _.once(function ($el, vals, model, options) {
            var $tr = $el.parents('tr:first');
            var $tmp = $tr.find('input');
            if (vals && vals.length && vals.length > 0) {
                var len = parseInt(vals.length / $tmp.length) - 1;
                var $list = $el;
                while (len > 0) {
                    var $cp = $tr.clone(true);
                    $list = $list.add($cp.find('input'));
                    $tr.after($cp);
                    len--;
                }
                $list.each(function (idx, dom) {
                    this.value = vals && vals[idx] || '';
                });
                this.stickit();
            }
        }),
        render: function () {
            var self = this;
            _.each(this.model.attributes, function (val, key) {
                var config = self.configs.get(key);
                if (!config) return;
                var fieldType = config.get('fieldType');
                var _key = '#' + key;

                var getVal = function ($el, event, options) {
                    var val = $el.val();
                    var curVal = options.view.model.get(key);
                    if (config.get('ifEdit') == 1) {
                        if (!$.trim(val) && config.get('isMust') == 1) {
                            appcan.window.openToast("该字段是必填字段", 1500, 5);
                        }
                        return val;
                    } else {
                        appcan.window.openToast("该字段不允许修改", 1500, 5);
                        $el.val(curVal);
                        return curVal;
                    }
                };

                var updateView = function (val) {
                    return val != null && val.trim().length != 0;
                };

                switch (fieldType) {
                    case 'checkbox':
                    case 'radio':
                        _key = 'input[name="' + key + '"]';
                        self.bindings[_key] = {
                            observe: key,
                            updateView: updateView
                        };
                        break;
                    case 'items':
                        break;
                    case 'select':
                        self.bindings[_key] = {
                            observe: key,
                            getVal: function ($el, event, options) {
                                var val = getVal($el, event, options);
                                $el.prev().html(val || '请选择');
                                return val;
                            },
                            updateView: updateView
                        };
                        break;
                    default :
                        self.bindings[_key] = {
                            observe: key,
                            getVal: getVal,
                            updateView: updateView
                        };
                        break;
                }
            });
            this.stickit();
        },
        load: function (metaid, id, callback) {
            var self = this;
            this.model.set('metaid', metaid);
            this.model.set('id', id);
            this.model.fetch({
                success: function (col, rep, ops) {
                    callback(rep.msg.appModel, rep.msg.metaName);
                }
            });
        },
        save: function (flag) {

            this.model.on('invalid', function (model, error, options) {
                appcan.window.openToast(error, 1500, 5);
                appcan.window.publish("workFlow_add");
            });

            this.model.save({}, {
                success: function (data, resp, option) {
                },
                error: function (err, resp, option) {
                },
                parse: false,
                flag: flag,
                workflowdata: this.workflowdata
            });
        }
    });

    var add = function () {
        var itemsView = new ItemsView();
        var formView = new FormView();
        itemsView.formView = formView;
        //将字段配置和字段的值进行绑定
        formView.configs = itemsView.collection;
        formView.workflowdata = itemsView.workflowdata;
        itemsView.load({
            crud: 'c'
        }, function (col, reps, options) {
            var def = {};
            _.each(formView.configs.toJSON(), function (config) {
                if (config.fieldCode) {
                    if (config.fieldType === 'date') {
                        def[config.fieldCode] = dateFormat(Date.now(), config.dateFormter);
                    } else {
                        def[config.fieldCode] = config.defaultValue && config.defaultValue.split(/[,，，]/)[0];
                    }
                }
            });
            formView.model.set(def);
            formView.model.set('input_date', reps.msg.sysDate);
            formView.model.set(initModel);
            formView.render();
        });
        window.formView = formView;
    };

    var update = function (metaid, objectId, callback) {
        var itemsView = new ItemsView();
        var formView = new FormView();
        itemsView.formView = formView;
        //将字段配置和字段的值进行绑定
        formView.configs = itemsView.collection;
        formView.load(metaid, objectId, function (list, metaName) {
            itemsView.fillCollection(list, metaName);
            formView.render();
            if (typeof callback === 'function') {
                callback();
            }
        });

        window.formView = formView;
    };

    var view = function (metaid, objectId) {

        var itemsView = new ItemsView();
        var formView = new FormView();
        //将字段配置和字段的值进行绑定
        formView.configs = itemsView.collection;
        formView.load(metaid, objectId, function (list, metaName) {
            itemsView.crud = 'r';
            itemsView.fillCollection(list, metaName);
            formView.render();
            //详情
            $('input,textarea,select').css({
                border: 0,
                outline: 'none',
                'box-shadow': 'none',
                'background-color': '#fff'
            }).attr('readonly', true).removeAttr('onclick').off();
        });

    };

    //导出
    Backbone.designer = {
        view: view,
        add: add,
        update: update
    }

    try {
        window.userInfo = JSON.parse(appcan.getLocVal("OA_USER_INFO"));
        var user = userInfo.loginUser.entity;
        var initModel = {
            dept: user.department[0].dptName,
            deptId: user.department[0].dptId,
            user_info: user.fullName,
            user_info_id: appcan.getLocVal("userId")
        };
        Backbone.designer.add();
    } catch (e) {
        alert(e.stack);
    }

});
