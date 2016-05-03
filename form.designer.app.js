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
    var formTemplateTypes = ['date', 'text', 'input', 'textarea', 'radio',
        'checkbox', 'select', 'number_input', 'money_input', 'file',
        'dept_radio', 'dept_multiselect', 'user_radio', 'user_multiselect', 'splitline',
        'tel', 'phone', 'image', 'items', 'email'];
    var templateConfig = {};
    //初始化模板引擎（模板在页面中，通过DOM获取）
    formTemplateTypes.forEach(function (key) {
        var $dom = $('#template_' + key);
        templateConfig[key] = $dom.length ? _.template(
            $dom.html()
        ) : function () {
            return '';
        };

    });

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
            return resp.appModel;
        },
        model: Config,
        service: requestService,
        sync: function (method, model, options) {
            switch (method) {
                case "read":
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
                        url : workFlowUrl,
                        data : data
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
            }
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
        load: function (id, opts, callback) {
            var self = this;
            callback = callback || emptyFnc;
            if (typeof opts === 'object') {
                this.crud = opts.crud || 'r';
            }
            this.collection.fetch({
                success: function (col, reps, options) {
                    callback();
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
                if (config.get('isMust') == 1 && !$.trim(val)) {
                    return {
                        el: '#' + key,
                        msg: '该字段是必填字段'
                    };
                }

                var maxLen = +config.get('maxLen');
                var minLen = +config.get('minLen');
                if (minLen && val.length < minLen) {
                    return {
                        el: '#' + key,
                        msg: '该字段最短' + minLen + '个字符'
                    };
                }

                if (maxLen && val.length > maxLen) {
                    return {
                        el: '#' + key,
                        msg: '该字段最长' + maxLen + '个字符'
                    };
                }

                switch (config.get('fieldType')) {
                    case 'email':
                        if (!validator.email.test(val)) {
                            return {
                                el: '#' + key,
                                msg: '请填写正确格式的邮箱'
                            };
                        }
                        break;
                    case 'tel':
                        if (!validator.tel.test(val)) {
                            return {
                                el: '#' + key,
                                msg: '请填写正确格式的电话'
                            };
                        }
                        break;
                    case 'phone':
                        if (!validator.phone.test(val)) {
                            return {
                                el: '#' + key,
                                msg: '请填写正确格式的手机号'
                            };
                        }
                        break;
                    case 'number_input':
                    case 'money_input':
                        if (!validator.float.test(val)) {
                            return {
                                el: '#' + key,
                                msg: '请填写正确格式的数字'
                            };
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
        el: '#container',
        events: {
            'click #submit': 'save'
        },
        bindings: {},
        handBindings: {//一些操作无法自动数据绑定，需要手动处理
            time: function (dom, view) {
                view.model.set(dom.name, dom.value);
            }
        },
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
                var fieldType = config.get('fieldType');
                var _key = '#' + key;
                var getVal = function ($el, event, options) {
                    var val = $el.val();
                    var curVal = options.view.model.get(key);
                    if (config.get('ifEdit') == 1) {
                        if (!$.trim(val) && config.get('isMust') == 1) {
                            $el.tip('该字段是必填字段');
                        }
                        return val;
                    } else {
                        $el.tip('该字段不允许修改');
                        $el.val(curVal);
                        return curVal;
                    }
                };
                if (fieldType === 'checkbox' || fieldType === 'radio') {
                    _key = 'input[name="' + key + '"]';
                    self.bindings[_key] = {
                        observe: key,
                        updateView: function (val) {
                            return val != null && val.trim().length != 0;
                        }
                    };
                } else if (fieldType === 'items') {
                    _key = 'input[name="' + key + '"]';
                    self.bindings[_key] = {
                        observe: key,
                        getVal: function ($el) {
                            var vals = [];
                            $el.each(function (dom) {
                                vals.push(this.value);
                            });
                            return vals;
                        },
                        update: function ($el, vals, model, options) {
                            options.view.onceUpdate($el, vals, model, options);
                        }
                    };
                } else {
                    self.bindings[_key] = {
                        observe: key,
                        getVal: getVal,
                        updateView: function (val) {
                            return val != null && val.trim().length != 0;
                        }
                    };
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
        save: function () {
            if (!this.model.isValid()) {
                $(this.model.validationError.el, this.$el).tip(this.model.validationError.msg);
                return false;
            }

            this.model.save({}, {
                success: function (data, resp, option) {
                },
                error: function (err, resp, option) {
                },
                validate: false,
                parse: false
            });
        }
    });

    var add = function (metaid) {
        var itemsView = new ItemsView();
        var formView = new FormView();
        //将字段配置和字段的值进行绑定
        formView.configs = itemsView.collection;
        itemsView.load(metaid, {
            crud: 'c'
        }, function () {
            var def = {};
            _.each(formView.configs.toJSON(), function (config) {
                if (config.fieldCode) {
                    def[config.fieldCode] = config.defaultValue && config.defaultValue.split(/[,，，]/)[0];
                }
            });
            formView.model.set(def);
            formView.render();
        });
        window.formView = formView;
    };

    var update = function (metaid, objectId, callback) {
        var itemsView = new ItemsView();
        var formView = new FormView();
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
        preview: preview,
        view: view,
        add: add,
        update: update
    }
});