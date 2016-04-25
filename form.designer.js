$(function () {

    var form = {
        reason_info: 'reason_info',
        file_name: 'file_name',
        copies: '2',
        remark: 'remark'
    };

    var datas = [
        {
            "fieldName": "日期",
            "isMust": "1",
            "fieldCode": "riqi",
            "ifVisible": "1",
            "ifEdit": "1",
            "fieldType": "date",
            'dateFormter': 'yyyy-MM-dd HH:mm:ss'
        },
        {
            "fieldName": "文本域",
            "ifAuto": "0",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "reason_info",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 86,
            "ifEdit": "1",
            "fieldType": "textarea",
            "orderByNum": "3"
        },
        {
            "fieldName": "数字",
            "ifAuto": "0",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "copies",
            "ifVisible": "1",
            "defaultValue": "10",
            "isOpinion": "0",
            "id": 87,
            "ifEdit": "1",
            "fieldType": "number_input",
            "orderByNum": "4"
        },
        {
            "fieldName": "金额",
            "isMust": "1",
            "fieldCode": "audit_person",
            "ifVisible": "1",
            "defaultValue": "10",
            "ifEdit": "1",
            "fieldType": "money_input",
            "orderByNum": "6"
        },
        {
            "fieldName": "文本框",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "0",
            "fieldCode": "user_info",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 84,
            "ifEdit": "0",
            "fieldType": "input",
            "orderByNum": "7"
        },
        {
            "fieldName": "下拉菜单",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "dept",
            "ifVisible": "1",
            "defaultValue": "ab,cd,er,o",
            "isOpinion": "0",
            "id": 83,
            "ifEdit": "1",
            "fieldType": "select",
            "orderByNum": "8"
        },
        {
            "fieldName": "单选",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "radio_option",
            "ifVisible": "1",
            "defaultValue": "男,女,未知",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "radio",
            "orderByNum": "9"
        },
        {
            "fieldName": "多选",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "checkbox_option",
            "ifVisible": "1",
            "defaultValue": "男,女,未知",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "checkbox",
            "orderByNum": "9"
        },
        {
            "fieldName": "附件",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "input_date",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "file",
            "orderByNum": "9"
        },
        {
            "fieldName": "单选部门",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "0",
            "fieldCode": "input_date",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "dept_radio",
            "orderByNum": "9"
        },
        {
            "fieldName": "多选部门",
            "ifAuto": "0",
            "ifVariableValue": "",
            "isMust": "0",
            "fieldCode": "input_date2",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "dept_multiselect",
        },
        {
            "fieldName": "单选人员",
            "ifAuto": "0",
            "ifVariableValue": "",
            "isMust": "0",
            "fieldCode": "input_date4",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "user_radio",
        },
        {
            "fieldName": "多选人员",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "0",
            "fieldCode": "input_date3",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "user_multiselect",
        },
        {
            "fieldName": "分割线",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "splitline",
        },
        {
            "fieldName": "电话",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "fsfsf",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "tel",
        },
        {
            "fieldName": "手机",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "ssfsf",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "phone",
        },
        {
            "fieldName": "邮箱",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "ssfsdssssf",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "email",
        },
        {
            "fieldName": "附件",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "dgdgg",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "file",
        },
        {
            "fieldName": "合同快照",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "dgddddgg",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "fieldType": "image",
        },
        {
            "fieldName": "表格",
            "ifAuto": "1",
            "ifVariableValue": "",
            "isMust": "1",
            "fieldCode": "tables",
            "ifVisible": "1",
            "defaultValue": "",
            "isOpinion": "0",
            "id": 82,
            "ifEdit": "1",
            "columnNames": "表格列1，表格列2",
            "fieldType": "items",
        }

    ];

    var emptyFnc = function () {
    };
    var validator = {
        tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
        phone: /^1[3|4|5|7|8]\d{9}$/,
        email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/,
        float: /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/
    };
    var templateConfig = {
        'head': _.template('<div class="g-head"><h1><%=title%></h1><a class="btn btn-success btn-back" href="<%=back%>">返回</a></div>'),
        'foot': _.template(
            '<div class="g-foot">' +
            '<div class="btn-group btn-group-justified" role="group" aria-label="...">' +
            '<div class="btn-group" role="group">' +
            '<button type="button" class="btn btn-default">提交</button>' +
            '</div>' +
            '<div class="btn-group" role="group">' +
            '<button type="button" class="btn btn-default" id="submit">保存</button>' +
            '</div>' +
            '</div>' +
            '</div>'
        ),
        'date': _.template(//日期
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width"><input class="form-control" type="text" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>" ' +
            'onclick="WdatePicker({dateFmt:\'<%=item.dateFormter%>\',onpicked:function(){formView.handBindings.time(this,formView);}})"/></div>' +
            '</div>' +
            '</div>'
        ),
        'text': _.template(//文本框
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '	<div class="u-title"><%=item.fieldName%></div>' +
            '	<div class="u-content mid-width">' +
            '	 <input class="form-control" type="text" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>" />' +
            '	</div>' +
            '</div>'
        ),
        'input': _.template(//输入框
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '	<div class="u-title"><%=item.fieldName%></div>' +
            '	<div class="u-content mid-width">' +
            '	 <input class="form-control" type="text" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>" />' +
            '	</div>' +
            '</div>'
        ),
        'textarea': _.template(//多行文本
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title u-fl"><%=item.fieldName%></div>' +
            '<div class="u-content max-width">' +
            '<textarea class="form-control" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>"><%=item.defaultValue%></textarea>' +
            '</div>' +
            '</div>'
        ),
        'radio': _.template(//单选
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title u-fl"><%=item.fieldName%></div>' +
            '<div class="u-content u-radio" id="<%=item.fieldCode%>">' +
            '<%=forRadio(item.defaultValue,item)%>' +
                //'<label class="u-radio"><input <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> name="<%=item.fieldCode%>" type="radio"/></label>' +
            '</div>' +
            '</div>'
        ),
        'checkbox': _.template(//多选
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title u-fl" ><%=item.fieldName%></div>' +
            '<div class="u-content u-radio" id="<%=item.fieldCode%>">' +
            '<%=forCheckbox(item.defaultValue,item)%>' +
                //'<label class="u-radio"><input <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>"  name="<%=item.fieldCode%>" type="checkbox"/></label>' +
            '</div>' +
            '</div>'
        ),
        'select': _.template(//下拉
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<select class="form-control" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" >' +
            '<%=forSelect(item.defaultValue,item)%>' +
                //'<option value="-1">--请选择--</option>' +
            '</select>' +
            '</div>' +
            '</div>'
        ),
        number_input: _.template(//数字
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width"><input class="form-control" type="number" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>"  /></div>' +
            '</div>' +
            '</div>'
        ),
        money_input: _.template(//金额
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width"><input class="form-control" type="number" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>"  /></div>' +
            '</div>' +
            '</div>'
        ),
        file: _.template(//附件框
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width">' +
            '<form method="post" action="" enctype="multipart/form-data">' +
            '<input class="form-control j-attach" type="file" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" />' +
            '</form>' +
            '</div>' +
            '<span></span>' +
            '</div>' +
            '</div>'
        ),
        dept_radio: _.template(//单选部门
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '	<div class="u-title"><%=item.fieldName%></div>' +
            '	<div class="u-content max-width">' +
            '	 <input class="form-control" type="text" readonly <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>" />' +
            '	</div>' +
            '</div>'
        ),
        dept_multiselect: _.template(//多选部门
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '	<div class="u-title"><%=item.fieldName%></div>' +
            '	<div class="u-content max-width">' +
            '	 <input class="form-control" type="text" readonly <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>" />' +
            '	</div>' +
            '</div>'
        ),
        user_radio: _.template(//单选人员
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '	<div class="u-title"><%=item.fieldName%></div>' +
            '	<div class="u-content max-width">' +
            '	 <input class="form-control" type="text" readonly <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>" />' +
            '	</div>' +
            '</div>'
        ),
        user_multiselect: _.template(//多选人员
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '	<div class="u-title"><%=item.fieldName%></div>' +
            '	<div class="u-content max-width">' +
            '	 <input class="form-control" type="text" readonly <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>" />' +
            '	</div>' +
            '</div>'
        ),
        splitline: _.template(//分割线
            '<hr/>'
        ),
        tel: _.template(//电话
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width"><input class="form-control" type="tel" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>"  /></div>' +
            '</div>' +
            '</div>'
        ),
        phone: _.template(//手机
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width"><input class="form-control" type="tel" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>"  /></div>' +
            '</div>' +
            '</div>'
        ),
        image: _.template(//图片控件
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width">' +
            '<div class="u-img">' +
            '<label for="hide_file<%=cid%>">' +
            '<div class="u-upload">' +
            '选择图片' +
            '</div>' +
            '<form method="post" action="" enctype="multipart/form-data">' +
            '<input class="text-hide j-file" name="uploadFile" accept="image/*" type="file" id="hide_file<%=cid%>"/>' +
            '</form>' +
            '</label>' +
            '<img src="https://42.96.170.158:18443/oapc/images/target.png" alt="默认图片"/>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        ),
        items: _.template(//列表控件
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title u-fl"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content">' +
            '<table id="datatable" class="table table-bordered table-responsive">' +
            '<thead>' +
            '<tr>' +
            '<%=forTableTH(item.columnNames,item)%>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<%=forTableTD(item.columnNames,item)%>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div>'
        ),
        email: _.template(//邮箱
            '<div class="g-item <%=ifVisible(item.ifVisible)%>">' +
            '<div class="u-title"><%=item.fieldName%></div>' +
            '<div class="u-content">' +
            '<div class="u-content min-width"><input class="form-control" type="email" <%=isMust(item.isMust)%> <%=ifEdit(item.ifEdit)%> id="<%=item.fieldCode%>" name="<%=item.fieldCode%>" value="<%=item.defaultValue%>"  /></div>' +
            '</div>' +
            '</div>'
        )

    };

    var requestService = {
        ajax: function (options) {
            options.type = options.type || 'post';
            options.timeout = options.timeout || 3000;
            options.dataType = options.dataType || 'JSON';
            options.success = function (data) {
                if (data.status === '000') {
                    options.success(data.msg.data);
                } else {
                    options.error.apply(this, data.msg.message);
                }
            };
            options.error = function () {
                options.error.apply(this, '网络异常，请稍后重试');
            };
            $.ajax(options);
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
        model: Config,
        service: requestService,
        sync: function (method, model, options) {
            switch (method) {
                case "create":
                    break;
                case "update":
                    break;
                case "patch":
                    break;
                case "read":
                    options.url = '';
                    options.data = {};
                    this.service.ajax(options);
                    break;
                case "delete":
                    break;
                default:
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
                    item: model.attributes,
                    cid: model.cid,
                    ifAuto: function (val) {
                    },
                    ifVariableValue: function (val) {
                    },
                    isMust: function (val) {
                        return val == 1 ? 'required' : '';
                    },
                    ifVisible: function (val) {
                        return val == 1 ? '' : 'none';
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
                                return '<label class="u-radio"><input name="' + item.fieldCode + '" value="' + opt + '" type="checkbox"/> ' + opt + '</label>';
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
                    },
                    forTableTH: function (val, item) {
                        if (val) {
                            var options = val.split(/[,，，]/);
                            var html = _.map(options, function (opt) {
                                return '<th>' + opt + '</th>';
                            }).join(' ');
                            return html
                        }
                        return '';
                    },
                    forTableTD: function (val, item) {
                        if (val) {
                            var options = val.split(/[,，，]/);
                            var html = _.map(options, function (opt) {
                                return '<td><input type="text" name="' + item.fieldCode + '"/></td>';
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
            }
        },
        handleImageType: function () {

            $('.j-file', this.$el).change(function () {
                var allows = ['jpg', 'gif', 'png', 'jpeg', 'bmp'];
                var suffix = this.value.substr(this.value.lastIndexOf('.') + 1).toLowerCase();
                if (allows.indexOf(suffix) === -1) {
                    //$(this).tip('仅支持jpg, gif, png, jpeg, bmp格式的图片');
                    return alert('仅支持jpg, gif, png, jpeg, bmp格式的图片');
                }

                var picviewPath = '/';
                var $self = $(this);
                $self.parent().attr('action', picviewPath).ajaxSubmit({
                    dataType: 'json',
                    success: function (data) {
                        if (data.status == "000") {
                            var picurl = picviewPath + "/" + data.msg.objectId;
                            $self.parents('.u-img').find('img').attr('src', picurl);
                        } else {
                            alert(data.msg);
                        }
                    },
                    error: function (err) {
                        alert('上传失败');
                    },
                    complete: function () {
                    }
                });

            });
        },
        handleFileType: function () {

            $('.j-attach', this.$el).change(function () {

                var picviewPath = '/';
                var $self = $(this);
                $self.parent().attr('action', picviewPath).ajaxSubmit({
                    dataType: 'json',
                    success: function (data) {
                        if (data.status == "000") {
                            var objectId = data.msg.objectId;
                            $self.parent().parent().next().html('上传成功');
                        } else {
                            alert(data.msg);
                        }
                    },
                    error: function (err) {
                        alert('上传失败');
                    },
                    complete: function () {
                    }
                });

            });
        }
    });

    var ItemsView = Backbone.View.extend({
        initialize: function (options) {
            this.$items = $('#items', this.$el);
            this.listenTo(this.collection, 'add', this.add);
            //默认是预览
            this.crud = 'r';
        },
        collection: new Items(),
        'el': '#container',
        render: function () {
            this.$el.prepend(templateConfig.head({title: '标题', back: '#'}));
            if (this.crud != 'r') {
                this.$el.append(templateConfig.foot());
            }
        },
        load: function (id, options, callback) {
            var self = this;
            callback = callback || emptyFnc;
            if (typeof options === 'object') {
                this.crud = options.crud || 'r';
            }
            this.collection.fetch({
                success: function () {
                    self.render();
                    callback();
                }
            });
        },
        add: function (model) {
            var configView = new ConfigView({
                model: model,
                baseView: this
            });
            if (configView.$el) {
                this.$items.append(configView.$el);
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
                    return {el: '#' + key, msg: '该字段是必填字段'};
                }

                var maxLen = +config.get('maxLen');
                var minLen = +config.get('minLen');
                if (minLen && val.length < minLen) {
                    return {el: '#' + key, msg: '该字段最短' + minLen + '个字符'};
                }

                if (maxLen && val.length > maxLen) {
                    return {el: '#' + key, msg: '该字段最长' + maxLen + '个字符'};
                }

                switch (config.get('fieldType')) {
                    case 'email':
                        if (!validator.email.test(val)) {
                            return {el: '#' + key, msg: '请填写正确格式的邮箱'};
                        }
                        break;
                    case 'tel':
                        if (!validator.tel.test(val)) {
                            return {el: '#' + key, msg: '请填写正确格式的电话'};
                        }
                        break;
                    case 'phone':
                        if (!validator.phone.test(val)) {
                            return {el: '#' + key, msg: '请填写正确格式的手机号'};
                        }
                        break;
                    case 'number_input':
                    case 'money_input':
                        if (!validator.float.test(val)) {
                            return {el: '#' + key, msg: '请填写正确格式的数字'};
                        }
                        break;
                }

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
                    return options.success(form);
                    options.data = {};
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
                        getVal: function ($el, event, options) {
                            var vals = [];
                            $el.each(function (dom) {
                                vals.push(this.value);
                            });
                            return vals;
                        },
                        update: function ($el, val, model, options) {
                            $el.each(function (idx, dom) {
                                this.value = val[idx] || '';
                            });
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
        load: function (id, callback) {
            var self = this;
            this.model.set('id', id);
            this.model.fetch({
                success: function () {
                    callback();
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
                validate: false
            });
        }
    });


    var preview = function (id) {
        var itemsView = new ItemsView();
        itemsView.load(id);
    };

    var add = function (id) {
        var itemsView = new ItemsView();
        var formView = new FormView();
        //将字段配置和字段的值进行绑定
        formView.configs = itemsView.collection;
        itemsView.load(id, {crud: 'c'}, function () {
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

    var update = function (id) {
        var itemsView = new ItemsView();
        var formView = new FormView();
        //将字段配置和字段的值进行绑定
        formView.configs = itemsView.collection;

        //请求数据
        async.parallel([function (callback) {
            itemsView.load(id, {crud: 'u'}, callback);
        }, function (callback) {
            var def = {};
            _.each(_.pluck(formView.configs.toJSON(), 'fieldCode'), function (field) {
                if (config.field) {
                    def[field] = null;
                }
            });
            formView.model.set(def);
            formView.load(id, callback);
        }], function () {
            formView.render();
        });
        window.formView = formView;
    };

    //导出
    Backbone.designer = {
        preview: preview,
        add: add,
        update: update
    }
});