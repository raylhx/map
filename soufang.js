define("modules/SFUtil",["jquery","rsa/RSA.min.js"],function(t){"use strict";var e=t("jquery");t("rsa/RSA.min.js");var a=seajs.data.vars,o=(a.ajaxfilePath,{searchType:!1,setCookie:function(t,e,a){var o=30,n="",i=new Date;if(a){var r=window.location.host.split(".");a=r.length>1?"."+r[r.length-2]+"."+r[r.length-1]:".fang.com",n=";path=/;domain="+a}i.setTime(i.getTime()+24*o*60*60*1e3),document.cookie=t+"="+e+";expires="+i.toGMTString()+n},getCookie:function(t){var e,a=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(a))?e[2]:null},delCookie:function(t){var e=this,a=new Date;a.setTime(a.getTime()-1);var o=e.getCookie(t);null!=o&&(document.cookie=t+"="+o+";expires="+a.toGMTString())},containNode:function(t,e){return e.closest(t).length>0},ajaxUrl:window.location.href,ajax:function(t,e,a,o,n){var i=function(t){o(t)};if(!a.a){var r=t.split("/").pop();a.a=r.split(".")[0]}var s={url:this.ajaxUrl,type:e||"get",dataType:a.dataType||"json",data:a,success:i,error:n};return"ajaxSearch"==a.a&&"fromSearchBtn"==this.searchType&&(navigator.userAgent.indexOf("Firefox")<=0&&(s.async=!1),this.searchType=!1),jQuery.ajax(s)},getStrlen:function(t){for(var e=t.length,a=0,o=0;e>o;o++)t.charCodeAt(o)<27||t.charCodeAt(o)>126?a+=3:a++;return a},subStrcn:function(t,e){for(var a=t.length,o=0,n=0,i=0;a>i&&(n=t.charCodeAt(i)<27||t.charCodeAt(i)>126?3:1,o+=n,!(o>e));i++);return t.substring(0,i)},getLoginStatus:function(){var t=this,o=a.username;t.loginBarNew||(t.loginBarNew=e("#loginBarNew"));var n=o,i=t.loginBarNew.find("a").eq(0),r=t.loginBarNew.find("a").eq(1),s=t.loginBarNew.children("div").get(2);t.loginStatus||(t.loginStatus={href:i.attr("href")}),n?(i.attr({target:"_blank"}).off("click").on("click",function(){return t.logout(),!1}).text("\u9000\u51fa"),r.attr({href:"http://my.fang.com/?city="+a.city,target:"_blank"}).off("click").text(n),s.className="s4",s.onmousemove=function(){this.className="s4 on2014"},s.onmouseout=function(){this.className="s4"},s.getElementsByTagName("div")[0].style.cssText="text-overflow: ellipsis;white-space: nowrap;"):(i.attr({href:t.loginStatus.href,target:"_self"}).off("click").text("\u6ce8\u518c"),r.attr({href:"javascript:;",target:"_blank"}).off("click").on("click",function(){return e("#loginbox,#layer").show(),!1}).text("\u767b\u5f55"),s.className="s4a",s.onmousemove=function(){this.className="s4a on2014"},s.onmouseout=function(){this.className="s4a"})},login:function(){var t=this,o="",n="",i=e("#username"),r=e("#password"),s=e("#login_tip");if(0!=i.length&&(o=i.val()),0!=r.length&&(n=r.val()),""===o||"\u624b\u673a\u53f7/\u90ae\u7bb1/\u7528\u6237\u540d"===o)return void s.html("\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a");if(""===n||"\u8bf7\u8f93\u5165\u5bc6\u7801"===n)return void s.html("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a");var c=new RSAKeyPair("010001","","978C0A92D2173439707498F0944AA476B1B62595877DD6FA87F6E2AC6DCB3D0BF0B82857439C99B5091192BC134889DFF60C562EC54EFBA4FF2F9D55ADBCCEA4A2FBA80CB398ED501280A007C83AF30C3D1A142D6133C63012B90AB26AC60C898FB66EDC3192C3EC4FF66925A64003B72496099F4F09A9FB72A2CF9E4D770C41"),l=encryptedString(c,n),u={Uid:o,Pwd:l,Service:"map",token:t.getCookie("token"),rsa:0},g="get",f=location.protocol+"//passport.fang.com/login.api";u.city=a.city;var h=function(o){"Success"===o.Message?(e("#loginbox").hide(),a.username=o.UserName,t.getLoginStatus(),r.val(""),s.html(""),e("#layer").hide()):s.html(o.msg||"\u8d26\u53f7/\u5bc6\u7801\u9519\u8bef")},m=function(){s.html("\u8d26\u53f7/\u5bc6\u7801\u9519\u8bef")};e.ajax({type:g,url:f,dataType:"jsonp",jsonp:"callback",data:u,success:h,error:m})},logout:function(){var t=this,e=this.ajaxUrl,o={c:"user",a:"logout",city:a.city},n="get",i=function(e){e?(a.username="",t.getLoginStatus(),t.setCookie("token",e.data,"root"),t.delCookie("sfut")):alert("\u9000\u51fa\u5931\u8d25")},r=function(){alert("\u9000\u51fa\u5931\u8d25")};t.ajax(e,n,o,i,r)}});return o.setCookie("token",a.loginCookie,"root"),o});/**
 * @file 封装 Baidu 地图 API
 * @modified by 袁辉辉(yuanhuihui@fang.com) 吕雁(lvyan.bj@fang.com)
 */
define('modules/xf/MapApi', ['bmap/BMap', 'bmap/MapWrapper'], function (require) {
    'use strict';
    var vars = seajs.data.vars;
    var $ = require('jquery');
    var cityCenter = new BMap.Point(vars.cityx, vars.cityy);
    var localStor = vars.localStorage;
    var statusArr = [' 售完',' 在售',' 待售',' 出租',' 租售'];
    var dragFlag = false;
    // 定义一个开关  判断由小区模式变成区县模式时  是否传入四角坐标
    window.toQuxian = true;
    var MapApi = function () {
        var arg = arguments, that = this;
        var lng = 116.404, lat = 39.915, cont = 'mapObj', zoom = 12;
        var mapOptions = {
            minZoom: 10,
            maxZoom: 18,
            enableMapClick: false
        };
        for (var i = 0; i < arg.length; i++) {
            if (0 === i) {
                cont = arg[0];
            } else if (1 === i) {
                lat = arg[1];
            } else if (2 === i) {
                lng = arg[2];
            } else if (3 === i) {
                zoom = arg[3];
            } else if (4 === i) {
                // 增加自定义缩放级别和是否允许点击
                $.extend(mapOptions, arg[4]);
            }
        }

        // 拖拽结束标记
        this.dragend = !0;
        this.isClick = 0;
        this.viewAuto = true;
        this.citycenter = new BMap.Point(lng, lat);
        this.zoomPartition = 11;
        this.zoomAdapt = 15;
        this.maxDistance = 26200;
        this.container = document.getElementById(cont);
        this.zooms = zoom;
        // zindex值设置，out之后描点退居幕后，最大值2147483647
        this.ZindexsMin = -2000000000;
        this.ZindexsMax = 2000000000;
        var map = new BMap.Map(cont, mapOptions);
        map.centerAndZoom(this.citycenter, zoom);
        map.enableScrollWheelZoom();
        map.disableDoubleClickZoom();
        // 禁用惯性拖拽
        map.disableInertialDragging();

        // 添加平移缩放控件
        if (!mapOptions.NotAddNavCtrl) {
            map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT}));
            // 添加比例尺控件
            map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT}));
        } else {
            map.addControl(new BMap.ScaleControl());
        }
        if (mapOptions.BindEvent) {
            // 移动地图超过屏幕20%进行搜索
            map.addEventListener('dragstart', function () {
                var SFMap = require('modules/xf/SFMap');
                that.dragend = !0;
                // 第一次拖拽，作为拖拽起始点
                if (!SFMap.NotFirstDrag) {
                    SFMap.NotFirstDrag = !0;
                    that.centerstart = that._map.pointToOverlayPixel(that.getCenter());
                }
            });
            map.addEventListener('dragend', function () {
                try {
                    var SFMap = require('modules/xf/SFMap');
                    // 区县模式、学区模式不重新搜索
                    if (!that.dragend || SFMap.searchType === 'quxian') {
                        return;
                    }
                    var centerend = that._map.pointToOverlayPixel(that.getCenter());
                    var dx = Math.abs(centerend.x - that.centerstart.x);
                    var dy = Math.abs(centerend.y - that.centerstart.y);
                    // 拖拽20%时重新搜索
                    var distance = Math.sqrt(dx * dx + dy * dy * 1.75) * 5;
                    if (distance > $(window).width() && SFMap.searchWhileMove) {
                        setTimeout(function () {
                            that.dragend = !1;
                            MapApi.dragFlag = true;
                            // 只有是区县商圈模式的时候才清除  同时清除快筛
                            if (SFMap.params.strDistrict || SFMap.params.strComarea) {
                                SFMap.clearOtherOption('map');
                            }

                            SFMap.searchResult(1, '', true);
                        }, 200);
                    }
                } catch (e) {
                }

            });
            // 缩放开始
            map.addEventListener('zoomstart', function () {
                that.zoomStart = !0;

            });

            // 缩放结束
            map.addEventListener('zoomend', function () {
                var SFMap = require('modules/xf/SFMap'), zoom = SFMap.map._map.getZoom();
                if (that.zoomStart && !SFMap.params.railway && !SFMap.params.railway_station) {
                    MapApi.zoomFlag = true;
                    // 地图级别11-13之间返回区县模式
                    if (zoom < 14 && SFMap.searchType !== 'quxian') {
                        that.zoomStart = !1;
                        that.newClearOverlays();
                        that.clearMarkers();
                        SFMap.firstLoad = true;
                        SFMap.clearOtherOption('map');
                        // 当由小区模式变成区县模式时  置为false
                        toQuxian = false;
                        // 区县不传坐标isdrag传false
                        SFMap.searchResult(1, zoom, false);
                        return;
                    }
                    if (zoom > 13) {
                        that.zoomStart = !1;
                        that.newClearOverlays();
                        that.clearMarkers();
                        //  小区级别
                        SFMap.firstLoad = false;
                        SFMap.clearOtherOption('map');
                        SFMap.searchResult(1, zoom, true);
                    }
                }

            });
        }
        this._map = map;
        this._markerManager = new MarkerManager(this._map);
        this.first = true;
    };
    MapApi.prototype = {
        gethdBounds: function () {
            var map = this._map, bounds = map.getBounds();
            var sw0 = bounds.getSouthWest(), ne0 = bounds.getNorthEast(), pointSw = map.pointToPixel(sw0),
                sw = map.pixelToPoint(new BMap.Pixel(pointSw.x, pointSw.y)), pointNe = map.pointToPixel(ne0),
                ne = map.pixelToPoint(new BMap.Pixel(pointNe.x, pointNe.y));
            return {
                x1: sw.lng,
                x2: ne.lng,
                y1: sw.lat,
                y2: ne.lat
            };
        },

        /**
         * 截取字符串 包含中文处理
         */

        subString: function (str, len) {
            var strlen = 0, s = '';
            if (!str) {
                return '';
            }
            for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 128) {
                    strlen += 3;
                } else {
                    strlen++;
                }
                s += str.charAt(i);
                if (strlen >= len) {
                    return s;
                }
            }
            return s;
        },

        /**
         * 判断奇偶数
         *
         * @param num
         * @returns {boolean}
         */
        checkNum: function (num) {
            return num % 2 == 0;
        },

        // 新版描点
        drawMarkers: function (metaMarkers, hiddenMarker, keyPoint, allNum, zoom, newCenter, isDrag, isAuto, newcode) {
            if (!metaMarkers) {
                return;
            }
            var that = this, marker, map = that._map, bounds = new BMap.Bounds();
            var arrMarkers = [];
            var point, hiddenCount = 0, pointDetail = false;
            var SFMap = require('modules/xf/SFMap');
            var l = metaMarkers.length;
            // 去除需要划线的地铁站或者学校
            that.stationMarker = null;
            if (l > 0) {
                for (var i = 0; i < l; i++) {
                    var info = metaMarkers[i];
                    // 学校接口含baidu_coord_x
                    info.x = info.x || info.baidu_coord_x;
                    info.y = info.y || info.baidu_coord_y;
                    if (!parseInt(info.y) || !parseInt(info.x)) {
                        continue;
                    }
                    point = new BMap.Point(info.x, info.y);
                    // 如果是地铁站模式则不针对其他本线路上的地铁站自适应
                    if (!(SFMap.params.railway_station && info.station && SFMap.params.railway_station !== info.name)) {
                        arrMarkers.push(point);
                    }

                    if (!pointDetail) {
                        pointDetail = point;
                    }
                    bounds.extend(point);
                    marker = that.createMarker(info, newcode);
                    if (info.stat) {
                        // 如果有stat属性，表明是商圈加载,地图不是自适应
                        isAuto = false;
                    } else if (info.newCode) {
                        isAuto = true;
                    }
                    that.addMarker(marker);


                }
                // 如果是点击区县并且有筛选条件则定位到第一个描点
                if (SFMap.isClickDist && (SFMap.params.strDistrict || SFMap.params.strComarea) && metaMarkers.length
                    && (SFMap.params.strPrice || SFMap.params.strRoom || SFMap.params.strPurpose
                    || SFMap.params.housetag || SFMap.params.saling
                    || SFMap.params.strStartDate)) {
                    that.setCenter(metaMarkers[0].y, metaMarkers[0].x);
                }
                // 地铁站时，先保存之前描的点，以便自适应
                if (SFMap.params.railway_station /* && !metaMarkers[0].station*/) {
                    that.subwayStatLPMarkers = arrMarkers;
                } else if (!SFMap.params.railway_station) {
                    that.subwayStatLPMarkers = [];
                }

                // 地图移动不重新搜索时设置
                // 地铁找房描线
                if (SFMap.params.railway) {
                    SFMap.busline.getBusList(SFMap.params.railway);
                    if (!isDrag ) {
                        // 取消视野最佳  改为固定的16级
                        if (SFMap.searchType !== 'fangyuan') {
                            map.centerAndZoom(that.subwayStatLPMarkers[0], 16);
                        }

                    }
                } else if (!isDrag && SFMap.params.strKeyword) {
                    // 关键词搜索 自适应
                    map.setViewport(arrMarkers);
                }
            }
            // 分页
            var listPage = $('#xfmap_E01_38');
            listPage.off('click');
            listPage.on('click', 'a', function () {
                var SFMap = require('modules/xf/SFMap');
                SFMap.searchResult($(this).data('id'));
            });
            return hiddenCount;
        },

        // 阻止浏览器默认行为触发的通用方法
        stopDefault: function (e) {
            // 防止浏览器默认行为(W3C)
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            // IE中组织浏览器行为
            else {
                window.event.returnValue = false;
            }
            return false;
        },
        pageHtml: function (pagehtml, minNum, maxNum, page) {
            for (var i = minNum; i <= maxNum; i++) {
                if (page == i) {
                    pagehtml += '<a class="current" name=' + i + '>' + i + '</a> ';
                } else {
                    pagehtml += '<a href="javascript:void(0)" name=' + i + '>' + i + '</a>';
                }
            }
            return pagehtml;
        },
        addMarker: function (marker) {
            var that = this;
            var map = that._map;
            var mm = that._markerManager;
            map.addOverlay(marker);
            if (marker.provalue && 'undefined' != typeof marker.provalue.newCode) {
                var markerDiv = $('#tip' + marker.provalue.newCode);
                marker.provalue.zindex = markerDiv.parent().css('zIndex');
            }
            mm._markers.push(marker);
        },
        clearMarkers: function () {
            this._markerManager.clearMarkers();
        },
        clearOverlays: function () {
            this._map.clearOverlays();
            this.closeTip();
        },
        newClearOverlays: function () {
            this._map.clearOverlays();
        },

        /**
         * 注意对地图进行移动操作时，如果不想重新搜索，应该先把SFMap中的isDragend置成false 重新设置地图中心点
         */
        setCenter: function (y, x, zoomPara) {
            if (!y || !x) {
                return;
            }
            var zoom = zoomPara || this._map.getZoom();
            this._map.centerAndZoom(new BMap.Point(x, y), zoom);
        },
        getCenter: function () {
            return this._map.getCenter();
        },
        getZoom: function () {
            return this._map.getZoom();
        },
        panBy: function (posX, posY) {
            this._map.panBy(posX, posY);
        },
        panTo: function (y, x) {
            if (!y || !x) {
                return;
            }
            this._map.panTo(new BMap.Point(x, y));
        },

        createMarker: function (info, newcode) {
            var that = this, SFMap = require('modules/xf/SFMap');
            var latLng = new BMap.Point(info.x, info.y);
            var ltext = '', curZoom = that.getZoom();
            var offset_new;

            // 0:售完, 1:在售, 2:待售, 3:在租, 4:租售
            if ('undefined' !== typeof info.newCode) {
                if (!info.soufun_card_client) {
                    info.soufun_card_client = '';
                }
                info.houseurl = info.houseurl ? info.houseurl : 'javascript:void(0)';
                info.price_num = info.price_num ? info.price_num : '';
                info.price_unit = info.price_unit ? info.price_unit : '';
                info.title = info.title ? info.title : '';
                info.id = info.id ? info.id : '-1';

                // 20161129删掉套数
                var clickStyle = '', clickStyleStor = '', divClickS = '', divClickSStor = '';
                if (localStor && localStor.getItem('fangworld_loupanMarkers')) {
                    var list = JSON.parse(localStor.getItem('fangworld_loupanMarkers'));
                    var displayB = '',displayR = '';
                    if (info.price_num && info.price_unit) {
                        displayR = '';
                    }else {
                        displayR = 'border-top-right-radius:0; border-bottom-right-radius:0; padding-right:7px; border-right:1px solid #199752;';
                    }
                    if ($.inArray(info.newCode, list) !== -1) {
                        if (newcode && newcode === info.newCode) {
                            clickStyle = 'style="background-color:#199752; ' + displayR + '"';
                            clickStyleStor = '#199752';
                            divClickS = 'style="border-top: 6px solid #199752;"';
                            divClickSStor = '6px solid #199752';
                            displayB = 'style="display:block"';
                        }else {
                            clickStyle = 'style="background-color:#ff8e86;"';
                            clickStyleStor = '#ff8e86';
                            divClickS = 'style="border-top: 6px solid #ff8e86;"';
                            divClickSStor = '6px solid #ff8e86';
                        }
                    }
                }
                // 默认样式
                var defStl = 'lpTip', defCont = '', statusDom = '', saling = '', purposeDom = '', otherPurposeDom = '';
                if (info.saling && info.purpose) {
                    if (info.purpose === '商铺' || info.purpose === '写字楼') {
                        info.saling = +info.saling;
                        statusDom = '<strong>' + statusArr[info.saling] + '</strong>';
                        saling = ' ' + statusArr[+info.saling];
                        // 商铺写字楼和其他物业类型的显示位置不同 与下方的otherPurposeDom
                        purposeDom = info.purpose?' ' + info.purpose:'';
                    }else {
                        // 所以要分开定义  有一个的时候另一个一定为''   所以全拼进defCont里去 到时候只显示一个
                        otherPurposeDom = info.purpose?' ' + info.purpose:'';
                    }
                }
                if (!info.price_num && !info.price_unit) {
                    // 无价格无房源数显示楼盘名
                    defCont = info.title + purposeDom + '<div ' + divClickS + '></div> <span class="dis"' + displayB + '>' + info.title + statusDom + otherPurposeDom + '</span>';
                } else {
                    // 15级及以上标点展示价格
                    if (curZoom > 14) {
                        defStl = 'lpTip1';
                        defCont = '<b>' + info.price_num + info.price_unit + purposeDom + otherPurposeDom + saling
                            + '</b><b>' + info.title + '</b>' + '<div ' + divClickS + '></div>';
                    } else {
                        defCont = info.price_num + info.price_unit + purposeDom
                            + '<div ' + divClickS + '></div> <span class="dis">' + info.title + otherPurposeDom + statusDom + '</span>';
                    }
                }

                ltext = '<div class="' + defStl + ' clearfix l_5015" id="xfmap_E01_31">';
                ltext += '<a ' + clickStyle + ' data-buildid="' + info.newCode + '" data-bgColor="' + clickStyleStor
                    + '" data-bgTColor="' + divClickSStor + '">' + defCont
                    + '</a></div>';
                offset_new = new BMap.Size(-44, -22);
            } else if ('undefined' != typeof info.stat) {
                // 区县模式
                var hasClicked = '', hasClickedStor = '', price = '', shortName = '';
                if (localStor && localStor.getItem('fangworld_zoneMarkers')) {
                    list = JSON.parse(localStor.getItem('fangworld_zoneMarkers'));
                    if ($.inArray(info.name, list) !== -1) {
                        hasClicked = 'class="on"';
                        hasClickedStor = 'on';
                    }
                }
                if (info.price && !isNaN(info.price) && parseFloat(info.price) > 0) {
                    price = (info.price / 10000).toFixed(1) + '万元/㎡';
                }
                shortName = info.name;
                if (shortName.length > 4) {
                    // 截取前四个汉字
                    shortName = shortName.substr(0, 4);
                }
                ltext = '<ul id="xfmap_E01_30" class="lpNum"><li ' + hasClicked + '><a data-bgclass="' + hasClickedStor
                    + '" data-zoneid="' + info.name + '">' + shortName + '<br>' + price + '<br>' + info.stat + '个楼盘</a></li></ul>';
                offset_new = new BMap.Size(-42, -32);
            } else if ('undefined' != typeof info.station) {
                // 地铁找房
                var railwayHtml = [];
                if (SFMap.params.railway || SFMap.params.railway_station) {
                    var classOn = '';
                    // 选择地铁站点时为选中状态
                    if (SFMap.params.railway_station === info.title) {
                        classOn = ' class="on" data-ison="1"';
                    }
                    info.num = info.num ? info.num + '个' : '';
                    railwayHtml.push('<ul id="xfmap_E01_32" class="lpLine" data-x="' + info.x + '" data-y="' + info.y + '">');
                    railwayHtml.push('<li' + classOn + '><a>' + info.title);
                    railwayHtml.push('<span> ' + info.num + '</span></a>');
                    railwayHtml.push('<div class="dot"></div><div class="sanjiao"><em></em></div>');
                    railwayHtml.push('</ul>');
                    ltext = railwayHtml.join('');
                }
                offset_new = new BMap.Size(-50, 0);
            } else if ('undefined' !== typeof info.schoolname) {
                //  学校模式
                ltext = ' <div class="lpTip" id="' + info.id
                    + '" data-title="' + info.schoolname + '" ><a class="xuequ" alt="'
                    + info.schoolname + '" title="' + info.schoolname + '"><i></i><b> ' + info.schoolname + '</b></a></div>';
                offset_new = new BMap.Size(-60, -10);
            }
            var marker = new BMapLib.RichMarker(ltext, latLng, {
                anchor: offset_new
            });
            var prevBuildid = '';
            marker.provalue = info;
            if ('undefined' != typeof info.newCode) {
                marker.addEventListener('click', function () {
                    var lpStoreMarkers = 'fangworld_loupanMarkers', lpclickedMarkers = '', lpmarkersList = [], dom;
                    if (localStor) {
                        lpclickedMarkers = localStor.getItem(lpStoreMarkers) || '';
                        lpmarkersList = lpclickedMarkers ? JSON.parse(lpclickedMarkers) : [];
                    }
                    // 添加到本地存储
                    var lpIndex = $.inArray(info.newCode, lpmarkersList);
                    dom = $('a[data-buildid=' + info.newCode + ']');
                    if (lpIndex === -1) {
                        lpmarkersList.push(info.newCode);
                        if (localStor) {
                            localStor.setItem(lpStoreMarkers, '["' + lpmarkersList.join('","') + '"]');
                        }
                        dom.attr('data-bgcolor', '#ff8e86');
                        dom.attr('data-bgtcolor', '6px solid #ff8e86');
                    }
                    if (dom && dom.attr('data-buildid') !== prevBuildid) {
                        dom.css('backgroundColor', '#ff8e86');
                        dom.find('div').css('borderTop', '6px solid #ff8e86');
                    }
                    prevBuildid = dom.attr('data-buildid');

                    //  房源
                    SFMap.searchType = 'fangyuan';
                    var tao = info.tao.replace(/[^\d]*/g, '');
                    SFMap.searchResult(null, 16, false, marker.getPosition().lng, marker.getPosition().lat, {
                        newCode: info.newCode,
                        houseNum: tao
                    });
                });
                marker.addEventListener('mouseover', function () {
                    var $this = $(marker._container), id = $this.find('a[data-buildid]').data('buildid');
                    // 设置悬浮绿色
                    var p = $('#mapCanvas a[data-buildid=' + id + ']');
                    if (p.parent().hasClass('lpTip')) {
                        p.css({
                            backgroundColor: '#199752',
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            paddingRight: '7px',
                            borderRight: '1px solid #199752'
                        });
                    }else if (p.parent().hasClass('lpTip1')) {
                        p.css({
                            backgroundColor: '#199752'
                        });
                    }
                    p.find('div').css('borderTop', '6px solid #199752');
                    p.find('span').show();

                    // 如果地铁站模式或者学区模式则设置线路长
                    if ((SFMap.params.railway_station || SFMap.params.schoolid) && that.stationMarker) {
                        var pointA = new BMap.Point(that.stationMarker.getPosition().lng, that.stationMarker.getPosition().lat);
                        var pointB = new BMap.Point(marker.getPosition().lng, marker.getPosition().lat);
                        var polyline = new BMap.Polyline([pointA, pointB], {
                            strokeColor: '#ff8000',
                            strokeWeight: 3,
                            strokeOpacity: 0.5
                        });
                        that.addOverlay(polyline);
                        that.stationMarkerLine = polyline;
                        var txtDom = $this.find('.dis');
                        if (!txtDom.attr('hasAdd')) {
                            var stationMarkerTemp = $(that.stationMarker.getContent());
                            var distance = that._map.getDistance(pointA, pointB);
                            txtDom.attr('hasAdd', true);
                            txtDom.html(txtDom.html() + ' 距' + (stationMarkerTemp.find('a').text().trim()
                                || stationMarkerTemp.attr('data-title')) + (distance / 1000).toFixed(1) + '公里');
                        }
                    }
                });
                marker.addEventListener('mouseout', function () {
                    if (newcode && info.newCode === newcode) {
                        return;
                    }
                    var $this = $(marker._container);
                    var aDom = $this.find('a[data-buildid]'), id = aDom.data('buildid'),
                        bgColor = aDom.attr('data-bgcolor'), bgTColor = aDom.attr('data-bgtcolor');
                    var p = $('#mapCanvas a[data-buildid=' + id + ']');
                    // 恢复颜色
                    if (p.parent().hasClass('lpTip')) {
                        p.css({
                            backgroundColor: p.data('bgcolor') || '#f14646',
                            borderTopRightRadius: '3px',
                            borderBottomRightRadius: '3px',
                            paddingRight: '14px',
                            borderRight: 'none'
                        });
                    }else if (p.parent().hasClass('lpTip1')) {
                        p.css({
                            backgroundColor: p.data('bgcolor') || '#f14646'
                        });
                    }
                    p.find('div').css('borderTop', p.data('bgtcolor') || '6px solid #f14646');
                    p.find('span').hide();
                    // 清除提示距离的直线
                    if (that.stationMarkerLine) {
                        that._map.removeOverlay(that.stationMarkerLine);
                    }
                });
            } else if ('undefined' != typeof info.stat) {
                var storeitem = 'fangworld_zoneMarkers', cllickedMarkers, markersList;
                if (localStor) {
                    cllickedMarkers = localStor.getItem(storeitem);
                    markersList = cllickedMarkers ? JSON.parse(cllickedMarkers) : [];
                }
                marker.addEventListener('click', function () {
                    // 添加到本地存储
                    var sIndex = $.inArray(info.name, markersList);
                    if (sIndex === -1) {
                        markersList.push(info.name);
                        if (localStor) {
                            localStor.setItem(storeitem, '["' + markersList.join('","') + '"]');
                        }
                        var dom = $('a[data-buildid=' + info.name + ']');
                        dom.attr('data-bgclass', 'on');
                    }
                    SFMap.gotoDistrict(info.name, info.x, info.y);
                });
                marker.addEventListener('mouseover', function () {
                    var $this = $(marker._container), id = $this.find('a[data-zoneid]').data('zoneid');
                    // 设置悬浮绿色
                    var p = $('#mapCanvas a[data-zoneid=' + id + ']');
                    p.parent().attr('class', '');
                });
                marker.addEventListener('mouseout', function () {
                    var $this = $(marker._container);
                    var aDom = $this.find('a[data-zoneid]'), id = aDom.data('zoneid'), bgclass = aDom.data('bgclass');
                    var p = $('#mapCanvas a[data-zoneid=' + id + ']');
                    // 恢复颜色
                    p.parent().attr('class', bgclass || '');
                });
            } else if ('undefined' != typeof info.schoolname) {
                // 当前选中的学校描点
                if (SFMap.params.schoolid && SFMap.params.schoolid === $(marker.getContent()).attr('id')) {
                    that.stationMarker = marker;
                }
                marker.addEventListener('click', function () {
                    SFMap.gotoDistrict(info.schoolname, info.x, info.y, {schoolid: info.id});
                });
            } else if ('undefined' != typeof info.housetype && info.housetype === 'huxing') {
                //  房源
            } else if ('undefined' != typeof info.station) {
                if (SFMap.params.railway_station && SFMap.params.railway_station === $(marker.getContent()).text().trim()) {
                    that.stationMarker = marker;
                }
                marker.addEventListener('click', function () {
                    SFMap.clearOtherOption('subway');
                    var cont = $(marker.getContent()), container = $(marker._container), ison = container.find('.lpLine .on[data-ison]');
                    // 选中状态不执行操作
                    if (ison.length) {
                        return;
                    }
                    var x = cont.attr('data-x'), y = cont.attr('data-y');
                    var staTxt = cont.find('li a').text();
                    var railway_station = staTxt.substr(0, staTxt.indexOf(' '));
                    $('#subwayParamContent').text(railway_station);
                    SFMap.params.railway_station = railway_station;
                    SFMap.searchResult(null, 14, false, x, y);
                });
            }
            that.setTop(marker);
            return marker;
        },

        setTop: function (marker) {
            var that = this;
            if (marker && marker.addEventListener) {
                marker.addEventListener('mouseover', function () {
                    var $this = $(marker._container);
                    // 若无鼠标移动后可直接设置zindex的正负值实现
                    $this.css('zIndex', that.ZindexsMax++);
                });
                marker.addEventListener('mouseout', function () {
                    var $this = $(marker._container);
                    $this.css('zIndex', that.ZindexsMin--);
                });
            }
        },

        // 隐藏标点的 DIV 元素
        // newCode 楼盘 ID
        hideMarker: function (newCode) {
            var nodeId = 'tip' + newCode;
            var mNode = $('#' + nodeId);
            if (mNode.length > 0) {
                var domMark = mNode.parent();
                domMark.hide();
            }
        },
        hoverMarker: function (marker, flg, latLng) {
            var that = this;
            if ('undefined' === typeof marker.provalue.newCode) {
                return;
            }
            var markerDiv = $('#tip' + marker.provalue.newCode);
            if (0 === markerDiv.length) {
                return;
            }
            if (flg) {
                if (markerDiv.attr('class') != 'mapFinddingCanvasLabelStyle8') {
                    markerDiv.attr('class', 'lpxxx tf');
                    var mapwidth = $('#map_canvas').width();
                    var classname = 'alert_tc';
                    var sanjiaoimgid = '4';
                    var sanjiao = '';
                    var pixel = that.pointToPixel(latLng);
                    var x = pixel.x, y = pixel.y;
                    if (x < 210 && y < 136) {
                        // 下右
                        classname = 'alert_tc alert_tc2';
                        sanjiaoimgid = 2;
                        sanjiao = 'sanjiao2';
                    } else if (y < 136) {
                        // 下左
                        classname = 'alert_tc alert_tc3';
                        sanjiaoimgid = 1;
                        sanjiao = 'sanjiao3';
                    } else if (mapwidth - x < 210) {
                        // 上左
                        classname = 'alert_tc alert_tc1';
                        sanjiaoimgid = 3;
                        sanjiao = 'sanjiao1';
                    } else {
                        // 上右
                        classname = 'alert_tc';
                        sanjiaoimgid = 4;
                        sanjiao = '';
                    }
                    var sanjiaoimg = vars.imgUrl + 'img/jt_' + sanjiaoimgid + '.png';
                    var tip_price = $('#tip_price_' + marker.provalue.newCode), tip_sanjiao = $('#tip_sanjiao_' + marker.provalue.newCode);
                    tip_price.attr('class', classname);
                    tip_sanjiao.attr('src', sanjiaoimg);
                    tip_sanjiao.parent().attr('class', 'sanjiao ' + sanjiao);
                    tip_price.show();
                }
                markerDiv.parent().css('zIndex', 2);
            } else if (that.isClick !== marker.provalue.newCode) {
                if ('undefined' !== typeof marker.provalue.zindex) {
                    markerDiv.parent().css('zIndex', marker.provalue.zindex);
                }
                if (markerDiv.attr('class') !== 'mapFinddingCanvasLabelStyle8') {
                    var lclass = 'lpxx tf';
                    markerDiv.attr('class', lclass);
                    $('#tip_price_' + marker.provalue.newCode).hide();
                }

            }
        },
        closeTip: function () {
            var that = this;
            var SFMap = require('modules/xf/SFMap');
            var node = $('#maptip');
            var newCode = that.isClick;
            that.isClick = 0;
            node.hide();
            node.html('');
            if (newCode && SFMap.markerList[newCode]) {
                SFMap.markerList[newCode].onCloseTip();
            }
        },
        panMap: function (markerBounds, hiddenMarkerPara, points) {
            var that = this;
            var map = that._map;
            var viewPort = map.getViewport(points), center = markerBounds.getCenter();
            if (viewPort.zoom > that.zoomAdapt) {
                viewPort.zoom = that.zoomAdapt;
            }
            if (viewPort.zoom < 10 && cityCenter) {
                map.centerAndZoom(cityCenter, 10);
            } else {
                map.centerAndZoom(center, viewPort.zoom);
            }
        },
        panMap1: function (markerBounds, hiddenMarkerPara, points) {
            var that = this;
            var map = that._map;
            var viewPort = map.getViewport(points), center = markerBounds.getCenter();
            viewPort.zoom -= 1;
            if (viewPort.zoom > that.zoomAdapt) {
                viewPort.zoom = that.zoomAdapt;
            }
            if (viewPort.zoom < 10) {
                map.centerAndZoom(center, 10);
            } else {
                map.centerAndZoom(center, viewPort.zoom);
            }
        },
        addKeyMarker: function (info) {
            var that = this;
            var map = that._map;
            if (!info.district || !info.y || !info.x) {
                return;
            }
            var html = '<div class="mapFinddingCanvasLabelStyle11" id="divkeymarker"><table cellpadding=0 cellspacing=0 border=0><tr>';
            html += '<td class="s1" >&nbsp;</td><td class="s2" id="tip1010133427"><img src="'
                + imgPath + 'baidu_n/img/icon004.gif" alt="" />'
                + info.district + '</td><td class="s3">&nbsp;</td><td class="s4"></td></tr><tr><td colspan="3" class="s5"></td></tr></table></div>';
            var keymarker = new BMapLib.RichMarker(html, new BMap.Point(info.x, info.y), {
                anchor: new BMap.Size(0, -40)
            });
            map.addOverlay(keymarker);
            $('#divkeymarker').parent().css('zIndex', 0);
        },
        pointToPixel: function (point) {
            return this._map.pointToPixel(point);
        },
        setZoom: function (zoomPara) {
            var zoom = parseInt(zoomPara);
            this._map.setZoom(zoom);
        },
        addOverlay: function (o) {
            this._map.addOverlay(o);
        },
        removeOverlay: function (o) {
            this._map.removeOverlay(o);
        },
        openDis: function () {
            var that = this;
            if ('undefined' == typeof that._disTool) {
                that._disTool = new BMapLib.DistanceTool(that._map);
                that._disTool.addEventListener('drawend', function () {
                    that._disTool.close();
                });
            }
            that._disTool.open();
        },
        convertPoint: function (points) {
            var res = [];
            if ($.isArray(points) && points.length > 0) {
                // var mapWforGoogle = new BMapLib.MapWrapper(cityCenter, BMapLib.COORD_TYPE_GOOGLE);
                for (var i = 0; i < points.length; i++) {
                    var googleMkr = new BMap.Marker(new BMap.Point(points[i].x, points[i].y));
                    points[i].x = googleMkr.point.lng;
                    points[i].y = googleMkr.point.lat;
                    res.push(points[i]);
                }
                // 新房区县级别11级
                this.drawMarkers(res, null, null, null, 12, null, null, false);
            }
        },
        getMarkerLen: function () {
            return this._markerManager._markers.length;
        }
    };
    function MarkerManager(map) {
        this._markers = [];
        this._map = map;
    }

    MarkerManager.prototype.addMarker = function (marker) {
        this._markers.push(marker);
        this._map.addOverlay(marker);
    };
    MarkerManager.prototype.clearMarkers = function () {
        while (this._markers.length > 0) {
            this._map.removeOverlay(this._markers.shift());
        }
    };
    return MapApi;
});
define("lazyload/lazyload",["jquery"],function(e,t,o){var i=e("jquery"),n=i(window),r=window.document;i.fn.lazyload=function(e){function t(){var e=0;f.each(function(){var t=i(this);if(!l.skip_invisible||t.is(":visible"))if(i.abovethetop(this,l)||i.leftofbegin(this,l));else if(i.belowthefold(this,l)||i.rightoffold(this,l)){if(++e>l.failure_limit)return!1}else t.trigger("appear"),e=0})}var o,f=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:"#scrollbar1",data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"//js.soufunimg.com/common_m/m_public/images/loadingpic.jpg"};return e&&(void 0!==e.failurelimit&&(e.failure_limit=e.failurelimit,delete e.failurelimit),void 0!==e.effectspeed&&(e.effect_speed=e.effectspeed,delete e.effectspeed),i.extend(l,e)),o=void 0===l.container||l.container===window?n:i(l.container),0===l.event.indexOf("scroll")&&o.bind(l.event,function(){return t()}),this.each(function(){var e=this,t=i(e);e.loaded=!1,(void 0===t.attr("src")||t.attr("src")===!1)&&t.is("img")&&t.attr("src",l.placeholder),t.one("appear",function(){if(!this.loaded){if(l.appear){var o=f.length;l.appear.call(e,o,l)}i("<img />").bind("load",function(){var o=t.attr("data-"+l.data_attribute);t.hide(),t.is("img")?t.attr("src",o):t.css("background-image","url('"+o+"')"),t[l.effect](l.effect_speed),e.loaded=!0;var n=i.grep(f,function(e){return!e.loaded});if(f=i(n),l.load){var r=f.length;l.load.call(e,r,l)}}).attr("src",t.attr("data-"+l.data_attribute))}}),0!==l.event.indexOf("scroll")&&t.bind(l.event,function(){e.loaded||t.trigger("appear")})}),n.bind("resize",function(){t()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&f.each(function(){i(this).trigger("appear")})}),i(r).ready(function(){t()}),this},i.belowthefold=function(e,t){var o;return o=void 0===t.container||t.container===window?(window.innerHeight?window.innerHeight:n.height())+n.scrollTop():i(t.container).offset().top+i(t.container).height(),o<=i(e).offset().top-t.threshold},i.rightoffold=function(e,t){var o;return o=void 0===t.container||t.container===window?n.width()+n.scrollLeft():i(t.container).offset().left+i(t.container).width(),o<=i(e).offset().left-t.threshold},i.abovethetop=function(e,t){var o;return o=void 0===t.container||t.container===window?n.scrollTop():i(t.container).offset().top,o>=i(e).offset().top+t.threshold+i(e).height()},i.leftofbegin=function(e,t){var o;return o=void 0===t.container||t.container===window?n.scrollLeft():i(t.container).offset().left,o>=i(e).offset().left+t.threshold+i(e).width()},i.inviewport=function(e,t){return!(i.rightoffold(e,t)||i.leftofbegin(e,t)||i.belowthefold(e,t)||i.abovethetop(e,t))},i.extend(i.expr[":"],{"below-the-fold":function(e){return i.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!i.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return i.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!i.rightoffold(e,{threshold:0})},"in-viewport":function(e){return i.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!i.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return i.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!i.rightoffold(e,{threshold:0})}}),o.exports=i});!function(e){function s(s){var t=[].slice.call(arguments,1),o=0;return s=e.event.fix(s||window.event),s.type="mousewheel",s.originalEvent.wheelDelta&&(o=s.originalEvent.wheelDelta/120),s.originalEvent.detail&&(o=-s.originalEvent.detail/3),t.unshift(s,o),e.event.dispatch.apply(this,t)}var t=["DOMMouseScroll","mousewheel"];e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],s,!1);else this.onmousewheel=s},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],s,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery),function(e,s,t){function o(){r=s[i](function(){n.each(function(){var s=e(this),t=s.width(),o=s.height(),r=e.data(this,u);(t!==r.w||o!==r.h)&&s.trigger(c,[r.w=t,r.h=o])}),o()},a[l])}var r,n=e([]),a=e.resize=e.extend(e.resize,{}),i="setTimeout",c="resize",u=c+"-special-event",l="delay",d="throttleWindow";a[l]=250,a[d]=!0,e.event.special[c]={setup:function(){if(!a[d]&&this[i])return!1;var s=e(this);n=n.add(s),e.data(this,u,{w:s.width(),h:s.height()}),1===n.length&&o()},teardown:function(){if(!a[d]&&this[i])return!1;var s=e(this);n=n.not(s),s.removeData(u),n.length||clearTimeout(r)},add:function(s){function o(s,o,n){var a=e(this),i=e.data(this,u);i.w=o!==t?o:a.width(),i.h=n!==t?n:a.height(),r.apply(this,arguments)}if(!a[d]&&this[i])return!1;var r;return e.isFunction(s)?(r=s,o):(r=s.handler,void(s.handler=o))}}}(jQuery,this),function(e){$.fn.scrollbar=function(s){var t,o,r,n,a,i="scrollbar",c=300,u="auto",l=7,d=!1,f=!0,v=!1,h=!0,g=!1,m=!0,p=!1,b=!0,w=!1,C=!0,T=.4,k=10,z=!0,B=!0,E=10,I="auto",S="auto",A=0,D=5,y=!0,W="vertical",O=13,V="#111111",_="#a1dc13",X="#E6E6E6",Y="#CCCCCC",x=!1,L="middle",H="middle",M=20,F=20;s.type!=e&&(i=s.type),s.height!=e&&(c=s.height),s.width!=e&&(u=s.width),s.scrollerEase!=e&&(l=s.scrollerEase),s.downBtn!=e&&(d=!0,t=s.downBtn),s.upBtn!=e&&(v=!0,o=s.upBtn),s.topBtn!=e&&(g=!0,r=s.topBtn),s.rightBtn!=e&&(w=!0,a=s.rightBtn),s.leftBtn!=e&&(p=!0,n=s.leftBtn),s.dragVertical!=e&&(z=s.dragVertical),s.dragHorizontal!=e&&(B=s.dragHorizontal),s.buttonsDisabledAlpha!=e&&(T=s.buttonsDisabledAlpha),s.buttonsScrollSpeed!=e&&(k=s.buttonsScrollSpeed),s.barWidth!=e&&(E=s.barWidth),s.draggerVerticalSize!=e&&(I=s.draggerVerticalSize),s.roundCorners!=e&&(A=s.roundCorners),s.distanceFromBar!=e&&(D=s.distanceFromBar),s.mouseWheel!=e&&(y=s.mouseWheel),s.mouseWheelOrientation!=e&&(W=s.mouseWheelOrientation),s.mouseWheelSpeed!=e&&(O=s.mouseWheelSpeed),s.draggerColor!=e&&(V=s.draggerColor),s.draggerOverColor!=e&&(_=s.draggerOverColor),s.barColor!=e&&(X=s.barColor),s.barOverColor!=e&&(Y=s.barOverColor),s.lockToPosition!=e&&(x=s.lockToPosition),s.lockToAlignVertical!=e&&(L=s.lockToAlignVertical),s.lockToAlignHorizontal!=e&&(H=s.lockToAlignHorizontal),s.topAndBottomSpace!=e&&(M=s.topAndBottomSpace),s.leftAndRightSpace!=e&&(F=s.leftAndRightSpace),$(this).each(function(){var e="grab",s="mousemove",O="horizontal",P="left",j=".scrollbar_dragger.horizontal",Q="border-radius",R="-khtml-border-radius",q="-webkit-border-radius",G="-moz-border-radius",J="background-color",K="top",N="px",U=".content1",Z="width",ee="px",se="height",te=c,oe=$(this);oe.css(se,te+ee);var re=oe.width()-2,ne=$(".scrollbar",oe);ne.css(Z,re),ne.css(se,te);var ae=$(U,oe),ie=0,ce=0,ue=0,le=0,de=ae.height(),fe=ae.width();"auto"!=u&&(ae.css(Z,u+N),fe=u);var ve,he,ge=!1,me=!1,pe=!1,be=30,we=function(){var e="opacity";z&&(te>de?(Te.css(e,0),ze.css(e,0)):(Ce="auto"==I?te/(de/te):I,Te.css(se,Ce+ee),Te.css(e,1),ze.css(e,1))),B&&(re>fe?(Ie.css(e,0),Ae.css(e,0)):(Be="auto"==S?re/(fe/re):S,Ie.css(Z,Be+ee),Ie.css(e,1),Ae.css(e,1)))};if("scrollbar"==i&&z){oe.append('<div class="scrollbar_dragger vertical"><div class="back"></div><div class="dragger"></div></div>'),ne.css("margin-right",E+ee),re-=E+D,ne.css(Z,re+N),B||ae.css(Z,re+N),$(".scrollbar_dragger.vertical",oe).css(Z,E+N);var Ce,$e=te,Te=$(".scrollbar_dragger.vertical .dragger",oe),ke=0;Te.css(K,0+N),Te.css(Z,E+ee),Te.css(J,V),A>0&&(Te.css(G,A+ee),Te.css(q,A+ee),Te.css(R,A+ee),Te.css(Q,A+ee));var ze=$(".scrollbar_dragger.vertical .back");ze.css(Z,E+ee),ze.css(se,te+ee),ze.css(J,X),A>0&&(ze.css(G,A+ee),ze.css(q,A+ee),ze.css(R,A+ee),ze.css(Q,A+ee)),B||we()}if("scrollbar"==i&&B){ne.css("margin-bottom",E+ee),te-=E+D,z&&ze.css(se,te+ee),ne.css(se,te+N),z||ae.css(se,te+N),$(j,oe).css(se,E+N),$(j,oe).css(Z,re+E+D+N),$(j,oe).css(K,te+D+N);var Be,Ee=re,Ie=$(".scrollbar_dragger.horizontal .dragger",oe),Se=0;Ie.css(se,E+ee),Ie.css(Z,re+ee),Ie.css(J,V),Ie.css(P,0+N),A>0&&(Ie.css(G,A+ee),Ie.css(q,A+ee),Ie.css(R,A+ee),Ie.css(Q,A+ee));var Ae=$(".scrollbar_dragger.horizontal .back");Ae.css(se,E+ee),Ae.css(Z,re+ee),Ae.css(J,X),A>0&&(Ae.css(G,A+ee),Ae.css(q,A+ee),Ae.css(R,A+ee),Ae.css(Q,A+ee)),we()}$(U,oe).resize(function(){ae=$(U,oe),de=ae.height(),fe=ae.width(),"auto"!=u&&(ae.css(Z,u+N),fe=u),"scrollbar"==i&&we()});var De=function(){var e="disabled";if(g&&(ce>=0&&m?(m=!1,r.fadeTo(300,T),r.addClass(e)):0>ce&&!m&&(m=!0,r.fadeTo(300,1),r.removeClass(e))),v&&(ce>=0&&h?(h=!1,o.fadeTo(300,T),o.addClass(e)):0>ce&&!h&&(h=!0,o.fadeTo(300,1),o.removeClass(e))),d&&(-(de-te)>=ce&&f?(f=!1,t.fadeTo(300,T),t.addClass(e)):ce>-(de-te)&&!f&&(f=!0,t.fadeTo(300,1),t.removeClass(e))),p&&(le>=0&&b?(b=!1,n.fadeTo(300,T),n.addClass(e)):0>le&&!b&&(b=!0,n.fadeTo(300,1),n.removeClass(e))),w&&(-(fe-re)>=le&&C?(C=!1,a.fadeTo(300,T),a.addClass(e)):le>-(fe-re)&&!C&&(C=!0,a.fadeTo(300,1),a.removeClass(e))),z){var s=Math.round((ce-ie)/l);ie+=s,ae.css("top",ie+N),oe.trigger($.Event("scroll"))}if(B){var s=Math.round((le-ue)/l);ue+=s,ae.css("left",ue+N)}ve=setTimeout(De,be)};if(ve=setTimeout(De,be),"scrollbar"==i){var ye=function(e){if("vertical"==e){0>ke&&(ke=0),ke>$e-Ce&&(ke=$e-Ce);var s=ke/($e-Ce);ce=-(de-te)*s,Te.css(K,ke+N)}else if(e==O){0>Se&&(Se=0),Se>Ee-Be&&(Se=Ee-Be);var s=Se/(Ee-Be);le=-(fe-re)*s,Ie.css(P,Se+N)}},We=function(e){var s,t,o="vertical";me?(s=e.pageY,t=s-he,ke=positionIni+t):(s=e.pageX,o=O,t=s-he,Se=positionIni+t),ye(o)};z&&(Te.mouseover(function(){Te.css(J,_)}),Te.mouseout(function(){me||Te.css(J,V)}),ze.mouseover(function(){ze.css(J,Y)}),ze.mouseout(function(){ze.css(J,X)}),Te.mousedown(function(e){return de>te&&(he=e.pageY,positionIni=parseInt(Te.css(K),10),me=!0,$(document).bind(s,We),$(document).mouseup(function(){$(document).unbind(s),me=!1,Te.css(J,V)})),!1}),ze.click(function(e){var s=ze.offset();return ke=e.pageY-s.top,ye("vertical"),!1})),B&&(Ie.mouseover(function(){Ie.css(J,_)}),Ie.mouseout(function(){ge||Ie.css(J,V)}),Ae.mouseover(function(){Ae.css(J,Y)}),Ae.mouseout(function(){Ae.css(J,X)}),Ie.mousedown(function(e){return he=e.pageX,positionIni=parseInt(Ie.css(P),10),pe=!0,$(document).bind(s,We),$(document).mouseup(function(){$(document).unbind(s),pe=!1,Ie.css(J,V)}),!1}),Ae.click(function(e){var s=Ae.offset();return Se=e.pageX-s.left,ye(O),!1})),y&&oe.mousewheel(function(e,s){return"vertical"==W?de>te&&(ke-=13*s,ye("vertical")):(Se-=13*s,ye(O)),!1})}if("mousePosition"==i){z||ae.css(se,te+N),B||ae.css(Z,re+N);var Oe=ne.offset();ne.mousemove(function(e){if(Oe=ne.offset(),de>te){if(z){var s=de+2*M-te,t=(e.pageY-Oe.top)/te,o=M-s*t;ce=o}if(B){var s=fe+2*F-re,t=(e.pageX-Oe.left)/re,o=F-s*t;le=o}}}),x&&oe.mouseout(function(){if(z){var e=de+2*M-te;ce="middle"==L?M-.5*e:"bottom"==L?M-e:0}if(B){var e=fe+2*F-re;le="middle"==H?F-.5*e:"right"==H?F-e:0}})}if(/msie/.test(navigator.userAgent.toLowerCase())?ae.get(0).onselectstart=function(){return!1}:ae.get(0).onmousedown=function(e){e.preventDefault()},"dragAndDrop"==i){z||ae.css(se,te+N),B||ae.css(Z,re+N);var Ve,_e,Xe,Ye,xe=0,Le=0,He=0,Me=0,We=function(e){if(z){var s=e.pageY,t=s-Xe;ce=Ve+t,He=t-xe,xe=t}if(B){var o=e.pageX,r=o-Ye;le=_e+r,Me=r-Le,Le=r}};ne.addClass(e),oe.mousemove(function(e){e.preventDefault()}),ne.mousedown(function(t){var o="grabbing";return ne.removeClass(e),ne.addClass(o),t.preventDefault?t.preventDefault():t.returnValue=!1,z&&(Xe=t.pageY,ce=ie,Ve=ce),B&&(Ye=t.pageX,le=ue,_e=le),ge=!0,$(document).bind(s,We),$(document).mouseup(function(t){if(ne.addClass(e),ne.removeClass(o),$(document).unbind(s,We),ge=!1,z){var r=de-te;ce+=30*He,ce>0?ce=0:-r>ce&&(ce=-r),He=0}if(B){var n=fe-re;le+=30*Me,le>0?le=0:-n>le&&(le=-n),Me=0}return!1}),!1})}if(g&&r.click(function(){return ce=0,!1}),d){var Fe;t.mousedown(function(){var e=function(){ce-=k,-(de-te)>ce&&(ce=-(de-te))};return Fe=setInterval(e,30),$(document).mouseup(function(){clearInterval(Fe)}),!1})}if(v){var Fe;o.mousedown(function(){var e=function(){ce+=k,ce>0&&(ce=0)};return Fe=setInterval(e,be),$(document).mouseup(function(){clearInterval(Fe)}),!1})}if(p){var Fe;n.mousedown(function(){var e=function(){le+=k,le>0&&(le=0)};return Fe=setInterval(e,be),$(document).mouseup(function(){clearInterval(Fe)}),!1})}if(w){var Fe;a.mousedown(function(){var e=function(){le-=k,-(fe-re)>le&&(le=-(fe-re))};return Fe=setInterval(e,be),$(document).mouseup(function(){clearInterval(Fe)}),!1})}})}}();