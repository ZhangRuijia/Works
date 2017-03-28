/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fengmian',
                            symbolName: 'part1',
                            type: 'rect',
                            rect: ['0', '0', '1920', '970', 'auto', 'auto']
                        },
                        {
                            id: 'part2',
                            symbolName: 'part2',
                            type: 'rect',
                            rect: ['0', '0', '1920', '970', 'auto', 'auto']
                        },
                        {
                            id: 'part3',
                            symbolName: 'part3',
                            type: 'rect',
                            rect: ['0', '0', '1920', '970', 'auto', 'auto']
                        },
                        {
                            id: 'part4',
                            symbolName: 'part4',
                            type: 'rect',
                            rect: ['0', '0', '1920', '970', 'auto', 'auto']
                        },
                        {
                            id: 'part5',
                            symbolName: 'part5',
                            type: 'rect',
                            rect: ['0', '0', '1920', '970', 'auto', 'auto']
                        },
                        {
                            id: 'daohang',
                            symbolName: 'daohang',
                            type: 'rect',
                            rect: ['1849', '355', '265', '260', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '970px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "part1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '1920px', '970px', 'auto', 'auto'],
                            id: 'background',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/part1%E8%83%8C%E6%99%AF_x0_y0.png', '0px', '0px']
                        },
                        {
                            rect: ['108', '128', '1717', '334', 'auto', 'auto'],
                            id: 'star',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'otherStars_x108_y128',
                                opacity: '1',
                                rect: ['0px', '0px', '1717px', '331px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/otherStars_x108_y128.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'star4_x1250_y202',
                                opacity: '1',
                                rect: ['1142px', '74px', '41px', '38px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/star4_x1250_y202.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'star3_x1610_y218',
                                opacity: '1',
                                rect: ['1502px', '90px', '119px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/star3_x1610_y218.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'star2_x140_y424',
                                opacity: '1',
                                rect: ['32px', '296px', '41px', '38px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/star2_x140_y424.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'star1_x117_y180',
                                opacity: '1',
                                rect: ['9px', '52px', '124px', '86px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/star1_x117_y180.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['274px', '250px', '1344px', '714px', 'auto', 'auto'],
                            id: 'body',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E4%B8%BB%E4%BD%93_x274_y250.png', '0px', '0px']
                        },
                        {
                            rect: ['325px', '-151', '1194', '454', 'auto', 'auto'],
                            id: 'daban2',
                            symbolName: 'daban',
                            type: 'rect'
                        },
                        {
                            rect: ['325px', '129px', '284px', '284px', 'auto', 'auto'],
                            id: 'daban_yuan',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%89%93%E6%9D%BF%E5%99%A8%E5%9C%86%E5%BD%A2_x340_y152.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1920px', '68px', 'auto', 'auto'],
                            id: 'top',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E9%A1%B6%E9%83%A8%E8%B4%A2%E7%BB%8Fbar_x0_y0.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '970px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "daohang": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '265', '80', 'auto', 'auto'],
                            id: 'tab1',
                            symbolName: 'tab1',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '90', '265', '80', 'auto', 'auto'],
                            id: 'tab2',
                            symbolName: 'tab2',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '180', '265', '80', 'auto', 'auto'],
                            id: 'tab3',
                            symbolName: 'tab3',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'down',
                            rect: ['8px', '281px', '52px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E4%B8%8B%E6%8C%89%E9%92%AE_x1860_y636.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'top',
                            rect: ['8px', '-54px', '52px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E4%B8%8A%E6%8C%89%E9%92%AE_x1860_y301.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '265px', '260px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "tab1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'tab',
                            rect: ['0px', '0px', '265px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%AE%E5%BD%95tab1_mouseOver_X1653_Y355_%E6%9C%AA%E9%80%89%E4%B8%AD_x1849_Y%E4%B8%8D%E5%8F%98.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '265px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid630",
                            "left",
                            0,
                            250,
                            "linear",
                            "${tab}",
                            '0px',
                            '-197px'
                        ]
                    ]
                }
            },
            "tab2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'tab',
                            rect: ['0px', '0px', '265px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%AE%E5%BD%95tab2_mouseOver_X1653_Y445_%E6%9C%AA%E9%80%89%E4%B8%AD_X18492.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '265px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid21",
                            "left",
                            0,
                            250,
                            "linear",
                            "${tab}",
                            '0px',
                            '-197px'
                        ],
                        [
                            "eid22",
                            "left",
                            250,
                            0,
                            "linear",
                            "${tab}",
                            '-197px',
                            '-197px'
                        ]
                    ]
                }
            },
            "tab3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'tab',
                            rect: ['0px', '0px', '265px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%AE%E5%BD%95tab3_Y535_X%E4%B8%8E1%E5%92%8C2%E4%B8%80%E6%A0%B72.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '265px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid23",
                            "left",
                            0,
                            250,
                            "linear",
                            "${tab}",
                            '0px',
                            '-197px'
                        ],
                        [
                            "eid24",
                            "left",
                            250,
                            0,
                            "linear",
                            "${tab}",
                            '-197px',
                            '-197px'
                        ]
                    ]
                }
            },
            "part2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '970px', 'auto', 'auto'],
                            id: 'background',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E8%83%8C%E6%99%AF_x0y0.png', '0px', '0px']
                        },
                        {
                            rect: ['120px', '40px', '678px', '65px', 'auto', 'auto'],
                            id: 'title',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/title_x120y40.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '211', '256', 'auto', 'auto'],
                            id: 'weixuanzhong',
                            type: 'group',
                            c: [
                            {
                                rect: ['1564px', '168px', '211px', '252px', 'auto', 'auto'],
                                id: '_2015__x1564_y168',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2015_%E6%9C%AA%E9%80%89%E4%B8%AD_x1564_y168.png', '0px', '0px']
                            },
                            {
                                rect: ['1356px', '601px', '168px', '218px', 'auto', 'auto'],
                                id: '_2013__x1356_y601',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2013_%E6%9C%AA%E9%80%89%E4%B8%AD_x1356_y601.png', '0px', '0px']
                            },
                            {
                                rect: ['1140px', '190px', '168px', '221px', 'auto', 'auto'],
                                id: '_2010__x1140_y190',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2010_%E6%9C%AA%E9%80%89%E4%B8%AD_x1140_y190.png', '0px', '0px']
                            },
                            {
                                rect: ['987px', '611px', '168px', '208px', 'auto', 'auto'],
                                id: '_2008_-x987_y611',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2008_%E6%9C%AA%E9%80%89%E4%B8%AD-x987_y611.png', '0px', '0px']
                            },
                            {
                                rect: ['873px', '261px', '158px', '207px', 'auto', 'auto'],
                                id: '_2003__x873_y261',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2003_%E6%9C%AA%E9%80%89%E4%B8%AD_x873_y261.png', '0px', '0px']
                            },
                            {
                                rect: ['752px', '611px', '159px', '209px', 'auto', 'auto'],
                                id: '_1993__x752_y611',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1993_%E6%9C%AA%E9%80%89%E4%B8%AD_x752_y611.png', '0px', '0px']
                            },
                            {
                                rect: ['616px', '230px', '178px', '256px', 'auto', 'auto'],
                                id: '_1949__x616_y230',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1949_%E6%9C%AA%E9%80%89%E4%B8%AD_x616_y230.png', '0px', '0px']
                            },
                            {
                                rect: ['548px', '556px', '98px', '124px', 'auto', 'auto'],
                                id: '_1922__x548_y556',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1922_%E6%9C%AA%E9%80%89%E4%B8%AD_x548_y556.png', '0px', '0px']
                            },
                            {
                                rect: ['465px', '362px', '79px', '161px', 'auto', 'auto'],
                                id: '_1920__x465_y362',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1920_%E6%9C%AA%E9%80%89%E4%B8%AD_x465_y362.png', '0px', '0px']
                            },
                            {
                                rect: ['381px', '549px', '97px', '133px', 'auto', 'auto'],
                                id: '_1909__x381_y549',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1909_%E6%9C%AA%E9%80%89%E4%B8%AD_x381_y549.png', '0px', '0px']
                            },
                            {
                                rect: ['320px', '361px', '97px', '151px', 'auto', 'auto'],
                                id: '_1905__x320y361',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1905_%E6%9C%AA%E9%80%89%E4%B8%AD_x320y361.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0', '0', '488', '396', 'auto', 'auto'],
                            id: 'xuanzhong',
                            type: 'group',
                            c: [
                            {
                                rect: ['460px', '108px', '488px', '396px', 'auto', 'auto'],
                                id: '_1949__x460_y108',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1949_%E9%80%89%E4%B8%AD_x460_y108.png', '0px', '0px']
                            },
                            {
                                rect: ['1426px', '88px', '488px', '396px', 'auto', 'auto'],
                                id: '_2015__x1426_y88',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2015_%E9%80%89%E4%B8%AD_x1426_y88.png', '0px', '0px']
                            },
                            {
                                rect: ['1036px', '126px', '379px', '317px', 'auto', 'auto'],
                                id: '_2010__x1036_y126',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2010_%E9%80%89%E4%B8%AD_x1036_y126.png', '0px', '0px']
                            },
                            {
                                rect: ['864px', '550px', '408px', '334px', 'auto', 'auto'],
                                id: '_2008__x864_y550',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2008_%E9%80%89%E4%B8%AD_x864_y550.png', '0px', '0px']
                            },
                            {
                                rect: ['672px', '545px', '309px', '277px', 'auto', 'auto'],
                                id: '_1993__x655_y545',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1993_%E9%80%89%E4%B8%AD_x655_y545.png', '0px', '0px']
                            },
                            {
                                rect: ['1213px', '581px', '453px', '382px', 'auto', 'auto'],
                                id: '_2013_x1213_y581',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2013_x1213_y581.png', '0px', '0px']
                            },
                            {
                                rect: ['744px', '78px', '414px', '413px', 'auto', 'auto'],
                                id: '_2003_x744_y78',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2003_x744_y78.png', '0px', '0px']
                            },
                            {
                                rect: ['442px', '545px', '308px', '274px', 'auto', 'auto'],
                                id: '_1922__x442_y545',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1922_%E9%80%89%E4%B8%AD_x442_y545.png', '0px', '0px']
                            },
                            {
                                rect: ['327px', '242px', '354px', '287px', 'auto', 'auto'],
                                id: '_1920__x327_y242',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1920_%E9%80%89%E4%B8%AD_x327_y242.png', '0px', '0px']
                            },
                            {
                                rect: ['275px', '545px', '310px', '274px', 'auto', 'auto'],
                                id: '_1909__x275_y545',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1909_%E9%80%89%E4%B8%AD_x275_y545.png', '0px', '0px']
                            },
                            {
                                rect: ['192px', '145px', '353px', '384px', 'auto', 'auto'],
                                id: '_1905__x192_y145',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1905_%E9%80%89%E4%B8%AD_x192_y145.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '247px', '300px', 'auto', 'auto'],
                            id: 'year_pic',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: '_2015_x1553_y377',
                                rect: ['1553px', '377px', '247px', '300px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/2015_x1553_y377.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_2013_x1333_y410',
                                rect: ['1333px', '410px', '220px', '240px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/2013_x1333_y410.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_2010_x1127_y403',
                                rect: ['1127px', '403px', '207px', '254px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/2010_x1127_y403.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_2008_x1005_y413',
                                rect: ['1005px', '413px', '122px', '221px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/2008_x1005_y413.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_2003_x903_y463',
                                rect: ['903px', '463px', '102px', '134px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/2003_x903_y463.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_1993_x764_y442',
                                rect: ['764px', '442px', '139px', '169px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/1993_x764_y442.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_1949_x651_y444',
                                rect: ['651px', '444px', '113px', '167px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/1949_x651_y444.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_1922_x545_y479',
                                rect: ['545px', '479px', '107px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/1922_x545_y479.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_1920_x466_y475',
                                rect: ['466px', '475px', '80px', '102px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/1920_x466_y475.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_1909_x398_y496',
                                rect: ['398px', '496px', '68px', '67px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/1909_x398_y496.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_1905_x316_y503',
                                rect: ['316px', '503px', '83px', '54px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/1905_x316_y503.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['106px', '352px', '1694px', '351px', 'auto', 'auto'],
                            id: 'machine',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E8%83%B6%E7%89%87%E5%92%8C%E6%94%BE%E6%98%A0%E6%9C%BA_x106_y352.png', '0px', '0px']
                        },
                        {
                            rect: ['335', '420', '1465', '214', 'auto', 'auto'],
                            id: 'year_touch',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                rect: ['0px', '92px', '60px', '32px', 'auto', 'auto'],
                                id: '_1905',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['63px', '92px', '63px', '32px', 'auto', 'auto'],
                                id: '_1909',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['131px', '66px', '74px', '77px', 'auto', 'auto'],
                                id: '_1920',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['213px', '76px', '98px', '61px', 'auto', 'auto'],
                                id: '_1922',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['319px', '41px', '102px', '136px', 'auto', 'auto'],
                                id: '_1949',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['432px', '41px', '130px', '136px', 'auto', 'auto'],
                                id: '_1993',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['568px', '59px', '97px', '96px', 'auto', 'auto'],
                                id: '_2003',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['671px', '24px', '113px', '157px', 'auto', 'auto'],
                                id: '_2008',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['797px', '0px', '189px', '214px', 'auto', 'auto'],
                                id: '_2010',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['1004px', '22px', '202px', '181px', 'auto', 'auto'],
                                id: '_2013',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['1225px', '22px', '240px', '181px', 'auto', 'auto'],
                                id: '_2015',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '970px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "daban": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1194px', '454px', 'auto', 'auto'],
                            id: 'daban',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%89%93%E6%9D%BF%E5%99%A8.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1194px', '454px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "tab1-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_tab1_mouseOver_X1653_Y355__x1849_Y',
                            type: 'image',
                            rect: ['0px', '0px', '265px', '80px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%AE%E5%BD%95tab1_mouseOver_X1653_Y355_%E6%9C%AA%E9%80%89%E4%B8%AD_x1849_Y%E4%B8%8D%E5%8F%98.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '265px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid795",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_tab1_mouseOver_X1653_Y355__x1849_Y}",
                            '0px',
                            '-197px'
                        ]
                    ]
                }
            },
            "part3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1920', '970', 'auto', 'auto'],
                            id: 'two',
                            symbolName: 'part3-1',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '0', '1920', '970', 'auto', 'auto'],
                            id: 'one',
                            symbolName: 'part3-2',
                            type: 'rect'
                        },
                        {
                            rect: ['120px', '40px', '855px', '65px', 'auto', 'auto'],
                            id: 'title_x120_y402',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/title_x120_y402.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '198', '60', 'auto', 'auto'],
                            id: 'anniu',
                            type: 'group',
                            c: [
                            {
                                rect: ['1672px', '234px', '198px', '60px', 'auto', 'auto'],
                                id: 'tab2_hong',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/tab2_%E9%80%89%E4%B8%AD_x1672_y234.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'tab2_hui',
                                rect: ['1672px', '234px', '198px', '60px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/tab2_%E6%9C%AA%E9%80%89%E4%B8%AD_x1672_y234.png', '0px', '0px']
                            },
                            {
                                rect: ['1672px', '164px', '198px', '60px', 'auto', 'auto'],
                                id: 'tab1_hong',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/tab1_%E9%80%89%E4%B8%AD_x1672_y164.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'taib1_hui',
                                rect: ['1672px', '164px', '198px', '60px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/tab1_%E6%9C%AA%E9%80%89%E4%B8%AD_x1672_y164.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '970px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bianju1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bianju',
                            rect: ['0px', '0px', '169px', '169px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%BC%96%E5%89%A7x275y590.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid916",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${bianju}",
                            [[84.75, 84.22, 0, 0, 0, 0,0],[122.22, -280.2, 142.82, -138.51, 561.57, -544.61,404],[513.21, -211.64, 106.06, 155.3, 418.42, 612.66,854.24],[427.43, 141.21, -623.53, 349.51, -516.66, 354.87,1255.43],[84.51, 84.5, 0, 0, 0, 0,1634.6]]
                        ]
                    ]
                }
            },
            "chupinren1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'chupinren',
                            rect: ['0px', '0px', '169px', '169px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%87%BA%E5%93%81%E4%BA%BAx240y300.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid968",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${chupinren}",
                            [[84.5, 84.5, 0, 0, 0, 0,0],[449.21, -14.35, 180.24, 87.93, 731.44, 356.85,419.11],[527.67, 360.27, -103.93, 156.49, -361.59, 544.46,847.11],[172.48, 429.46, -589.54, -443.61, -579.58, -326.12,1247.68],[84.5, 84.5, 0, 0, 0, 0,1636.6]]
                        ]
                    ]
                }
            },
            "daoyan1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'daoyan',
                            type: 'image',
                            rect: ['0px', '0px', '169px', '169px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94x660y590.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "houqi1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'houqi',
                            rect: ['0px', '0px', '169px', '170px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%90%8E%E6%9C%9F%E5%88%B6%E4%BD%9Cx470y170.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '170px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid998",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${houqi}",
                            [[84.5, 85, 0, 0, 0, 0,0],[345.61, 341.78, 15.53, 197.41, 62.5, 794.68,406.67],[100.26, 605.77, -308.07, 8.41, -611.56, 65.37,803.86],[-176.66, 347.68, 49.79, -806.47, -48.4, -611.03,1225.14],[84.49, 84.89, 0, 0, 0, 0,1637.16]]
                        ]
                    ]
                }
            },
            "jianzhi1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'jianzhi',
                            rect: ['0px', '0px', '169px', '170px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%91%E5%88%B6x700y300.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '170px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1000",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${jianzhi}",
                            [[84.5, 85, 0, 0, 0, 0,0],[-23.24, 443.39, -204.83, 113.38, -668.49, 406.65,414],[-356.73, 363.11, -151.14, -163.56, -304.4, -411.15,786.6],[-275.09, -15.94, 717.76, -356.74, 564.64, -348.02,1223.7],[84.5, 84.99, 0, 0, 0, 0,1639.06]]
                        ]
                    ]
                }
            },
            "bianqu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_x390y90',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%BC%96%E6%9B%B2x390y90.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "chuzifangdaibiao": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_x185y230',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%87%BA%E8%B5%84%E6%96%B9%E4%BB%A3%E8%A1%A8x185y230.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "jianji": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_x510y70',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%89%AA%E8%BE%91x510y70.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "qita": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_x700y785',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%85%B6%E5%AE%83%E6%8B%8D%E6%91%84%E5%9B%A2%E9%98%9Fx700y785.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "shexiang": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_x823y700',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%91%84%E5%83%8Fx823y700.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "yanyuan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_x870y580',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%BC%94%E5%91%98x870y580.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "yingshidawan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_x128y350',
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%BD%B1%E8%A7%86%E5%A4%A7%E8%85%95x128y350.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "daoyan11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'daoyan',
                            rect: ['0px', '0px', '169px', '169px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94x660y5902.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '169px', '169px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid993",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${daoyan}",
                            [[84.5, 84.5, 0, 0, 0, 0,0],[-274.52, 130.95, -251.32, -196.36, -636.93, -405.4,397.41],[-298.17, -268.61, 152.19, -128.69, 457.83, -470.62,851.56],[63.95, -266.13, 497.29, 517.39, 502.64, 421.21,1249.73],[84.5, 84.5, 0, 0, 0, 0,1634.88]]
                        ]
                    ]
                }
            },
            "part3-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '970px', 'auto', 'auto'],
                            id: 'bg_x0y0Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bg_x0y0.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '134px', '1920px', '836px', 'auto', 'auto'],
                            id: '_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E8%83%8C%E6%99%AF3.png', '0px', '0px']
                        },
                        {
                            rect: ['159px', '197px', '708px', '708px', 'auto', 'auto'],
                            id: 'Image',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%BA%95%E5%B1%82%E5%9C%88.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '149', '149', 'auto', 'auto'],
                            id: 'yuan',
                            type: 'group',
                            c: [
                            {
                                rect: ['120', '158', '760', '755', 'auto', 'auto'],
                                id: 'xiaoyuan',
                                type: 'group',
                                c: [
                                {
                                    rect: ['0', '0', '760', '755', 'auto', 'auto'],
                                    id: 'xiaoyuan2',
                                    symbolName: 'xiaoyuan',
                                    type: 'rect'
                                }]
                            },
                            {
                                rect: ['655', '409', '149', '145', 'auto', 'auto'],
                                id: 'jianzhi2',
                                symbolName: 'jianzhi',
                                type: 'rect'
                            },
                            {
                                rect: ['441', '250', '144', '149', 'auto', 'auto'],
                                id: 'houqi2',
                                symbolName: 'houqi',
                                type: 'rect'
                            },
                            {
                                rect: ['574', '662', '146', '147', 'auto', 'auto'],
                                id: 'daoyan2',
                                symbolName: 'daoyan',
                                type: 'rect'
                            },
                            {
                                rect: ['223', '409', '149', '145', 'auto', 'auto'],
                                id: 'chupinren',
                                symbolName: 'chupinren',
                                type: 'rect'
                            },
                            {
                                rect: ['307', '662', '146', '147', 'auto', 'auto'],
                                id: 'bianju2',
                                symbolName: 'bianju',
                                type: 'rect'
                            },
                            {
                                type: 'image',
                                id: 'zhipianren',
                                rect: ['398px', '437px', '229px', '229px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA_x398_y437.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1050', '272', '494', '560', 'auto', 'auto'],
                            id: 'tanchu',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '494px', '560px', 'auto', 'auto'],
                                id: 'jianzhi',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/%E6%96%87%E5%AD%97_x1050_272.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '494px', '409px', 'auto', 'auto'],
                                id: 'houqi',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E4%B8%8E%E5%90%8E%E6%9C%9F_x1050_272.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '494px', '574px', 'auto', 'auto'],
                                id: 'chupinren1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E5%92%8C%E5%87%BA%E5%93%81%E4%BA%BA_x1050_272.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '494px', '495px', 'auto', 'auto'],
                                id: 'bianju',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/%E6%96%87%E5%AD%97-%E5%88%B6%E7%89%87%E4%BA%BA%E5%92%8C%E5%89%A7%E6%9C%AC__x1050_272.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '494px', '574px', 'auto', 'auto'],
                                id: 'daoyan',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/%E6%96%87%E5%AD%97-%E5%88%B6%E7%89%87%E4%BA%BA%E5%92%8C%E5%AF%BC%E6%BC%94_x1050_272.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1050px', '272px', '494px', '460px', 'auto', 'auto'],
                            id: 'zhipianrenjieshao',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%96%87%E5%AD%97_x1050_y272.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '970px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "part3-2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '970px', 'auto', 'auto'],
                            id: 'bg_x0y0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bg_x0y0.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '134px', '1920px', '836px', 'auto', 'auto'],
                            id: 'contentBg_x0_y134',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/contentBg_x0_y134.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '397', '245', 'auto', 'auto'],
                            id: 'renwu',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: '_10_x660_y680',
                                rect: ['1928px', '680px', '281px', '235px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/10_x660_y680.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_9_x183_y585',
                                rect: ['1942px', '582px', '152px', '195px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/9_x183_y585.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_8_x514_y504',
                                rect: ['1926px', '508px', '158px', '172px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/8_x514_y504.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_7_x935_y467',
                                rect: ['1932px', '467px', '150px', '185px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/7_x935_y467.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_6_x1277_y484',
                                rect: ['1933px', '485px', '138px', '177px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/6_x1277_y484.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_5_x1590_y388',
                                rect: ['1931px', '388px', '172px', '245px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/5_x1590_y388.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_4_x1011_y195',
                                rect: ['1935px', '195px', '397px', '229px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/4_x1011_y195.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_3_x686_y184',
                                rect: ['1945px', '184px', '113px', '169px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/3_x686_y184.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_2_x366_y184',
                                rect: ['1954px', '184px', '114px', '154px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/2_x366_y184.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: '_1_x103_y162',
                                rect: ['1935px', '160px', '149px', '216px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/1%E5%88%B6%E7%89%87%E4%BA%BA%E9%80%89%E9%A2%98_x103_y162.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0', '0', '250', '133', 'auto', 'auto'],
                            id: 'tanchuan',
                            type: 'group',
                            c: [
                            {
                                rect: ['882px', '873px', '257px', '70px', 'auto', 'auto'],
                                id: '_10__x882_y873',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/10_%E9%80%89%E4%B8%AD_x882_y873.png', '0px', '0px']
                            },
                            {
                                rect: ['219px', '789px', '250px', '79px', 'auto', 'auto'],
                                id: '_9__x219_y789',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/9_%E9%80%89%E4%B8%AD_x219_y789.png', '0px', '0px']
                            },
                            {
                                rect: ['401px', '684px', '250px', '151px', 'auto', 'auto'],
                                id: '_8__x401_y684',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/8_%E9%80%89%E4%B8%AD_x401_y684.png', '0px', '0px']
                            },
                            {
                                rect: ['945px', '660px', '250px', '167px', 'auto', 'auto'],
                                id: '_7__x945_y660',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/7_%E9%80%89%E4%B8%AD_x945_y660.png', '0px', '0px']
                            },
                            {
                                rect: ['1290px', '668px', '250px', '77px', 'auto', 'auto'],
                                id: '_6__x1290_y668',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/6_%E9%80%89%E4%B8%AD_x1290_y668.png', '0px', '0px']
                            },
                            {
                                rect: ['1589px', '641px', '250px', '113px', 'auto', 'auto'],
                                id: '_5__x1589_y641',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/5_%E9%80%89%E4%B8%AD_x1589_y641.png', '0px', '0px']
                            },
                            {
                                rect: ['1292px', '402px', '250px', '77px', 'auto', 'auto'],
                                id: '_4_x1292_y402',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/4%E5%BC%B9%E7%AA%97_x1292_y402.png', '0px', '0px']
                            },
                            {
                                rect: ['684px', '363px', '250px', '113px', 'auto', 'auto'],
                                id: '_3_x684_y363',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/3%E5%BC%B9%E7%AA%97_x684_y363.png', '0px', '0px']
                            },
                            {
                                rect: ['369px', '349px', '250px', '133px', 'auto', 'auto'],
                                id: '_2_x369_y349',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/2%E5%BC%B9%E7%AA%97_x369_y349.png', '0px', '0px']
                            },
                            {
                                rect: ['126px', '387px', '250px', '97px', 'auto', 'auto'],
                                id: '_1__x126_y387',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/1%E5%88%B6%E7%89%87%E4%BA%BA%E9%80%89%E9%A2%98_%E5%BC%B9%E7%AA%97_x126_y387.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '970px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: false,
                    data: [
                        [
                            "eid1186",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${_6_x1277_y484}",
                            '1933px',
                            '1277px'
                        ],
                        [
                            "eid1182",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${_4_x1011_y195}",
                            '1935px',
                            '1011px'
                        ],
                        [
                            "eid1199",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${_10_x660_y680}",
                            '1928px',
                            '660px'
                        ],
                        [
                            "eid1174",
                            "left",
                            250,
                            250,
                            "linear",
                            "${_1_x103_y162}",
                            '1935px',
                            '103px'
                        ],
                        [
                            "eid1177",
                            "left",
                            500,
                            250,
                            "linear",
                            "${_2_x366_y184}",
                            '1954px',
                            '366px'
                        ],
                        [
                            "eid1191",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${_8_x514_y504}",
                            '1926px',
                            '514px'
                        ],
                        [
                            "eid1179",
                            "left",
                            750,
                            250,
                            "linear",
                            "${_3_x686_y184}",
                            '1945px',
                            '686px'
                        ],
                        [
                            "eid1189",
                            "left",
                            1750,
                            250,
                            "linear",
                            "${_7_x935_y467}",
                            '1932px',
                            '935px'
                        ],
                        [
                            "eid1184",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${_5_x1590_y388}",
                            '1931px',
                            '1590px'
                        ],
                        [
                            "eid1194",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${_9_x183_y585}",
                            '1942px',
                            '183px'
                        ]
                    ]
                }
            },
            "part4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '970px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E8%83%8C%E6%99%AF2.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1920px', '970px', 'auto', 'auto'],
                            id: '_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E8%83%8C%E6%99%AF4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'daoshixiashan',
                            rect: ['1098px', '709px', '146px', '58px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E9%81%93%E5%A3%AB%E4%B8%8B%E5%B1%B1x1098.4y709.38.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'guilai',
                            rect: ['833px', '260px', '122px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%BD%92%E6%9D%A5x833.21y260.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'shanheguren',
                            rect: ['1156px', '274px', '141px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%B1%B1%E6%B2%B3%E6%95%85%E4%BA%BAx1155.74y273.94.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sirendingzhi',
                            rect: ['583px', '680px', '146px', '70px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6x582.61y679.69.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sousuo',
                            rect: ['401px', '379px', '123px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%90%9C%E7%B4%A2x4013.72y378.5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'panjinlian',
                            rect: ['1317px', '467px', '170px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%88%91%E4%B8%8D%E6%98%AF%E6%BD%98%E9%87%91%E8%8E%B2x1317.09y466.97.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'yibuzhiyao',
                            rect: ['826px', '506px', '146px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E4%B8%80%E6%AD%A5%E4%B9%8B%E9%81%A5x825.7y506.13.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: '_1942',
                            rect: ['387px', '292px', '152px', '55px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E4%B8%80%E4%B9%9D%E5%9B%9B%E4%BA%8Cx387y291.53.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'changcheng',
                            rect: ['1375px', '726px', '122px', '56px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E9%95%BF%E5%9F%8Ex1374.52y726.28.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'gong',
                            rect: ['582px', '805px', '141px', '21px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AE%AB%E9%94%81%E6%B2%89%E9%A6%99x582y805.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'gundanba',
                            rect: ['1167px', '306px', '183px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%BB%9A%E8%9B%8B%E5%90%A7%EF%BC%8C%E8%82%BF%E7%98%A4%E5%90%9Bx1166.75y305.84.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'jianbingxia',
                            rect: ['1065px', '518px', '140px', '97px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%85%8E%E9%A5%BC%E4%BE%A0x1065.01y517.94.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'jiejiuwuxiansheng',
                            rect: ['1087px', '227px', '159px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E8%A7%A3%E6%95%91%E5%90%BE%E5%85%88%E7%94%9Fx1087.45y227.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'luyaozhimali',
                            rect: ['1318px', '710px', '159px', '29px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E9%99%86%E5%9E%9A%E7%9F%A5%E9%A9%AC%E4%BF%90x1318.48y709.69.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tangrenjia',
                            rect: ['900px', '309px', '159px', '70px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%94%90%E4%BA%BA%E8%A1%97%E6%8E%A2%E6%A1%88x900.13y309.09.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'tongzhuodeni',
                            rect: ['826px', '659px', '147px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%90%8C%E6%A1%8C%E7%9A%84%E4%BD%A0x826.11y658.72.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'xunlongjue',
                            rect: ['1012px', '252px', '140px', '118px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BB%E9%BE%99%E8%AF%80x1011.83y251.69.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'xialuote',
                            rect: ['1041px', '316px', '164px', '109px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%A4%8F%E6%B4%9B%E7%89%B910402.98y316.06.png', '0px', '0px']
                        },
                        {
                            rect: ['1140px', '744px', '355px', '220px', 'auto', 'auto'],
                            id: 'daoshixiashan1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E9%99%88%E5%87%AF%E6%AD%8C-%E9%81%93%E5%A3%AB%E4%B8%8B%E5%B1%B1x1140y744.png', '0px', '0px']
                        },
                        {
                            rect: ['1182px', '284px', '315px', '250px', 'auto', 'auto'],
                            id: 'shanheguren1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E8%B4%BE%E6%A8%9F%E6%9F%AF-%E5%B1%B1%E6%B2%B3%E6%95%85%E4%BA%BAx1182y284.png', '0px', '0px']
                        },
                        {
                            rect: ['624px', '728px', '355px', '220px', 'auto', 'auto'],
                            id: 'sirendingzhi1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E5%86%AF%E5%B0%8F%E5%88%9A-%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6x624y728.png', '0px', '0px']
                        },
                        {
                            rect: ['1375px', '508px', '315px', '220px', 'auto', 'auto'],
                            id: 'panjinlian1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E5%86%AF%E5%B0%8F%E5%88%9A-%E6%88%91%E4%B8%8D%E6%98%AF%E6%BD%98%E9%87%91%E8%8E%B2x1375y508.png', '0px', '0px']
                        },
                        {
                            rect: ['864px', '296px', '317px', '220px', 'auto', 'auto'],
                            id: 'guilai1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E5%BC%A0%E8%89%BA%E8%B0%8B-%E5%BD%92%E6%9D%A5x864y296.png', '0px', '0px']
                        },
                        {
                            rect: ['422px', '418px', '346px', '220px', 'auto', 'auto'],
                            id: 'sousuo1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%90%9C%E7%B4%A2%E6%96%87%E5%AD%97x422y4183.png', '0px', '0px']
                        },
                        {
                            rect: ['1116px', '378px', '346px', '220px', 'auto', 'auto'],
                            id: 'xialuote1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%A4%8F%E6%B4%9B%E7%89%B9%E7%83%A6%E6%81%BC%E6%96%87%E5%AD%97x1116y3782.png', '0px', '0px']
                        },
                        {
                            rect: ['861px', '549px', '355px', '220px', 'auto', 'auto'],
                            id: 'yibuzhiyao1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E5%A7%9C%E6%96%87-%E6%AD%A5%E4%B9%8B%E9%81%A5x861y549.png', '0px', '0px']
                        },
                        {
                            rect: ['428px', '341px', '355px', '220px', 'auto', 'auto'],
                            id: '_1942-1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E5%86%AF%E5%B0%8F%E5%88%9A-%E4%B8%80%E4%B9%9D%E5%9B%9B%E4%BA%8Cx428y341.png', '0px', '0px']
                        },
                        {
                            rect: ['1395px', '759px', '409px', '205px', 'auto', 'auto'],
                            id: 'changcheng1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94%E7%BB%84-%E5%BC%A0%E8%89%BA%E8%B0%8B-%E9%95%BF%E5%9F%8Ex1394y759.png', '0px', '0px']
                        },
                        {
                            rect: ['1206px', '343px', '346px', '220px', 'auto', 'auto'],
                            id: 'gundanba1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E5%8F%B6%E5%AE%81-%E6%BB%9A%E8%9B%8B%E5%90%A7%E8%82%BF%E7%98%A4%E5%90%9Bx1206y343.png', '0px', '0px']
                        },
                        {
                            rect: ['1090px', '578px', '389px', '220px', 'auto', 'auto'],
                            id: 'jianbingxia1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E7%94%B0%E7%94%9C-%E7%85%8E%E9%A5%BC%E4%BE%A0x1090y578.png', '0px', '0px']
                        },
                        {
                            rect: ['1123px', '254px', '389px', '220px', 'auto', 'auto'],
                            id: 'jiejiuwuxiansheng1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E6%9D%9C%E6%89%AC-%E8%A7%A3%E6%95%91%E5%90%BE%E5%85%88%E7%94%9Fx1123y254.png', '0px', '0px']
                        },
                        {
                            rect: ['1355px', '726px', '344px', '195px', 'auto', 'auto'],
                            id: 'luyaozhimali1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E5%8F%B6%E5%AE%81-%E9%99%86%E5%9E%9A%E7%9F%A5%E9%A9%AC%E4%BF%90x1355y726.png', '0px', '0px']
                        },
                        {
                            rect: ['947px', '351px', '389px', '204px', 'auto', 'auto'],
                            id: 'tangrenjia1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E5%8F%B6%E5%AE%81-%E5%94%90%E4%BA%BA%E8%A1%97%E6%8E%A2%E6%A1%88x947y350.97.png', '0px', '0px']
                        },
                        {
                            rect: ['855px', '701px', '389px', '220px', 'auto', 'auto'],
                            id: 'tongzhuodeni1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E6%9D%9C%E6%89%AC-%E5%90%8C%E6%A1%8C%E7%9A%84%E4%BD%A0x855y701.png', '0px', '0px']
                        },
                        {
                            rect: ['642px', '817px', '184px', '118px', 'auto', 'auto'],
                            id: 'gong1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E6%9D%9C%E6%89%AC-%E5%AE%AB%E9%94%81%E6%B2%89%E9%A6%99x642y817.png', '0px', '0px']
                        },
                        {
                            rect: ['1032px', '316px', '389px', '220px', 'auto', 'auto'],
                            id: 'xunlongjue1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%88%B6%E7%89%87%E4%BA%BA%E7%BB%84-%E6%9D%9C%E6%89%AC-%E5%AF%BB%E9%BE%99%E8%AF%80x1032y316.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '970px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bianju": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '146px', '147px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%BC%96%E5%89%A7_%E9%80%89%E4%B8%AD_x307.03_y661.97.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '146px', '147px', 'auto', 'auto'],
                            id: 'bianju',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%BC%96%E5%89%A7_%E6%9C%AA%E9%80%89%E4%B8%AD_x306.53_y661.63.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '146px', '147px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1651",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${bianju}",
                            [[73, 73.5, 0, 0, 0, 0,0],[19.61, -238.81, 84.17, -144.79, 336.58, -578.97,348.63],[354.93, -282.63, 131.6, 104.26, 482.65, 382.4,730.14],[372.7, 42.37, -444.41, 434.58, -373.6, 428.85,1092.77],[73.01, 73.5, 0, 0, 0, 0,1421.36]]
                        ],
                        [
                            "eid1708",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${_2}",
                            [[72.99, 73.5, 0, 0, 0, 0,0],[19.6, -238.81, 84.17, -144.79, 336.58, -578.97,348.63],[354.92, -282.63, 131.6, 104.26, 482.65, 382.4,730.14],[372.69, 42.37, -444.41, 434.58, -373.6, 428.85,1092.77],[73, 73.5, 0, 0, 0, 0,1421.36]]
                        ]
                    ]
                }
            },
            "chupinren": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '145px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%87%BA%E5%93%81%E4%BA%BA_%E9%80%89%E4%B8%AD_x223.00_y409.00.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '149px', '145px', 'auto', 'auto'],
                            id: 'chupren',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%87%BA%E5%93%81%E4%BA%BA_%E6%9C%AA%E9%80%89%E4%B8%AD_x222.72_y409.09.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '149px', '145px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1657",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${chupren}",
                            [[74.5, 72.5, 0, 0, 0, 0,0],[396.15, -58.76, 255.12, 140.54, 741.02, 281.22,392.32],[480.54, 266.01, -88.85, 151.23, -266.21, 453.09,768.88],[181.92, 343.33, -492.72, -295.31, -490.43, -207.67,1105.59],[74.51, 72.5, 0, 0, 0, 0,1420.2]]
                        ],
                        [
                            "eid1710",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${_2}",
                            [[74.49, 72.5, 0, 0, 0, 0,0],[396.14, -58.76, 255.12, 140.54, 741.02, 281.22,392.32],[480.53, 266.01, -88.85, 151.23, -266.21, 453.09,768.88],[181.91, 343.33, -492.72, -295.31, -490.43, -207.67,1105.59],[74.5, 72.5, 0, 0, 0, 0,1420.2]]
                        ]
                    ]
                }
            },
            "daoyan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '146px', '147px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94_%E9%80%89%E4%B8%AD_574.03_y662.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '146px', '147px', 'auto', 'auto'],
                            id: 'daoyan',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%AF%BC%E6%BC%94_%E6%9C%AA%E9%80%89%E4%B8%AD_x573.50_y661.66.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '146px', '147px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1661",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${daoyan}",
                            [[73, 73.5, 0, 0, 0, 0,0],[-249.81, 11.7, -105.18, -142.39, -415.57, -562.6,365.72],[-196.8, -290.55, 217.29, -158.3, 399.16, -306.91,703.85],[139.56, -223.42, 257.63, 572.06, 342.94, 465.43,1087.83],[73.01, 73.5, 0, 0, 0, 0,1417.91]]
                        ],
                        [
                            "eid1711",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${_2}",
                            [[72.99, 73.5, 0, 0, 0, 0,0],[-249.82, 11.7, -105.18, -142.39, -415.57, -562.6,365.72],[-196.81, -290.55, 217.29, -158.3, 399.16, -306.91,703.85],[139.55, -223.42, 257.63, 572.06, 342.94, 465.43,1087.83],[73, 73.5, 0, 0, 0, 0,1417.91]]
                        ]
                    ]
                }
            },
            "houqi": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '144px', '149px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%90%8E%E6%9C%9F%E5%88%B6%E4%BD%9C_%E9%80%89%E4%B8%AD_x441_y250.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '144px', '149px', 'auto', 'auto'],
                            id: 'houqi',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%90%8E%E6%9C%9F%E5%88%B6%E4%BD%9C_%E6%9C%AA%E9%80%89%E4%B8%AD_x441_y250.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '144px', '149px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1664",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${houqi}",
                            [[72, 74.5, 0, 0, 0, 0,0],[298.27, 307.49, -11.6, 295.98, 35.59, 712.02,361.64],[78.26, 527.7, -340.41, -7.07, -454.62, 46.52,703.56],[-152.02, 304.14, 57.27, -697.4, -14.26, -434.22,1059.68],[71.99, 74.51, 0, 0, 0, 0,1414.25]]
                        ],
                        [
                            "eid1712",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${_2}",
                            [[72.01, 74.49, 0, 0, 0, 0,0],[298.28, 307.48, -11.6, 295.98, 35.59, 712.02,361.64],[78.27, 527.69, -340.41, -7.07, -454.62, 46.52,703.56],[-152.01, 304.13, 57.27, -697.4, -14.26, -434.22,1059.68],[72, 74.5, 0, 0, 0, 0,1414.25]]
                        ]
                    ]
                }
            },
            "jianzhi": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '150px', '145px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%91%E5%88%B6_%E9%80%89%E4%B8%AD_x6543.97_y409.00.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '149px', '145px', 'auto', 'auto'],
                            id: 'jianzhi',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%91%E5%88%B6_%E6%9C%AA%E9%80%89%E4%B8%AD_x655.00_y409.00.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '149px', '145px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1700",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${_2}",
                            [[75.01, 72.51, 0, 0, 0, 0,0],[-32.72, 342.52, -150.2, 93.81, -497.12, 310.49,313.7],[-333.69, 263.48, -82.92, -123.53, -278.64, -415.09,654.74],[-250.61, -55.03, 713.2, -321.94, 524.33, -324.68,1023.17],[75, 72.5, 0, 0, 0, 0,1420.49]]
                        ],
                        [
                            "eid1667",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${jianzhi}",
                            [[74.5, 72.5, 0, 0, 0, 0,0],[-33.23, 342.51, -150.2, 93.81, -497.12, 310.49,313.7],[-334.2, 263.47, -82.92, -123.53, -278.64, -415.09,654.74],[-251.12, -55.04, 713.2, -321.94, 524.33, -324.68,1023.17],[74.49, 72.49, 0, 0, 0, 0,1420.49]]
                        ]
                    ]
                }
            },
            "xiaoyuan": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '355px', '79px', '77px', 'auto', 'auto'],
                            id: 'dawan',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%BD%B1%E8%A7%86%E5%A4%A7%E8%85%95_x120_y513.png', '0px', '0px']
                        },
                        {
                            rect: ['681px', '486px', '79px', '75px', 'auto', 'auto'],
                            id: 'yanyuan',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%BC%94%E5%91%98_x801.31_y644.25.png', '0px', '0px']
                        },
                        {
                            rect: ['608px', '599px', '78px', '78px', 'auto', 'auto'],
                            id: 'shexiang',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E6%91%84%E5%83%8F_x728.28_y756.88.png', '0px', '0px']
                        },
                        {
                            rect: ['498px', '676px', '77px', '79px', 'auto', 'auto'],
                            id: 'qita',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%85%B6%E5%AE%83%E6%8B%8D%E6%91%84%E5%9B%A2%E9%98%9F_x618.22_833.75.png', '0px', '0px']
                        },
                        {
                            rect: ['355px', '0px', '77px', '79px', 'auto', 'auto'],
                            id: 'jianji',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%89%AA%E8%BE%91_x475_y158.png', '0px', '0px']
                        },
                        {
                            rect: ['31px', '211px', '79px', '77px', 'auto', 'auto'],
                            id: 'chuzifang',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%87%BA%E8%B5%84%E6%96%B9%E4%BB%A3%E8%A1%A8_x150.66_y368.75.png', '0px', '0px']
                        },
                        {
                            rect: ['222px', '26px', '77px', '79px', 'auto', 'auto'],
                            id: 'bianqu',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E7%BC%96%E6%9B%B2_x342.22_y183.88.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '760px', '755px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1689",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${yanyuan}",
                            [[720.5, 524.5, 0, 0, 0, 0,0],[318.99, 737.1, -260.07, -48.95, -905.35, -170.39,494.41],[51.6, 319.76, 61.23, -254.05, 183.53, -761.47,1042.27],[528.63, 63.95, 957.15, 485.12, 1124.05, 240.69,1654.74],[720.5, 524.8, 0, 0, 0, 0,2206.98]]
                        ],
                        [
                            "eid1682",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${qita}",
                            [[536.5, 715.5, 0, 0, 0, 0,0],[72.08, 535.06, -97.59, -242.2, -347.7, -862.93,549.51],[307.05, 50.8, 271.23, -96.55, 985.72, -350.88,1158.21],[742.77, 338.13, 116.02, 781.62, 145.91, 867.4,1744.89],[536.92, 715.5, 0, 0, 0, 0,2204.42]]
                        ],
                        [
                            "eid1671",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${bianqu}",
                            [[260.5, 65.5, 0, 0, 0, 0,0],[729.64, 278.36, 105.95, 232.44, 449.87, 986.95,568.99],[510.81, 726.3, -252.12, 84.37, -755.92, 252.98,1120.71],[63.88, 519.96, -323.98, -953.51, -337.81, -777.76,1662.9],[260.06, 65.22, 0, 0, 0, 0,2208.55]]
                        ],
                        [
                            "eid1695",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${dawan}",
                            [[39.5, 393.5, 0, 0, 0, 0,0],[392.08, 36.36, 246.83, -13.29, 1034.68, -55.71,554.7],[744.79, 390.01, 6.56, 271.18, 21.17, 875.02,1109.59],[395.18, 746.43, -1086.34, -81.33, -879.31, 40.6,1664.2],[39.5, 393.36, 0, 0, 0, 0,2219.72]]
                        ],
                        [
                            "eid1676",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${chuzifang}",
                            [[70.5, 249.5, 0, 0, 0, 0,0],[574.82, 84.56, 331.27, 174.36, 1068.24, 480.7,593.89],[641.86, 644.25, -174.74, 188.98, -676.78, 731.96,1243.21],[149.63, 648.04, -553.31, -552.99, -613.42, -538.02,1783.8],[70.5, 249.22, 0, 0, 0, 0,2216.61]]
                        ],
                        [
                            "eid1679",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${jianji}",
                            [[393.5, 39.5, 0, 0, 0, 0,0],[749.94, 410.33, -0.73, 248.91, -3.2, 1096.65,575.36],[379.26, 747.28, -273.35, 3.96, -885.3, 12.83,1128.99],[40.57, 387.23, 64.84, -1006.85, -31.39, -824.46,1672.64],[393.5, 39.5, 0, 0, 0, 0,2217.99]]
                        ],
                        [
                            "eid1685",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${shexiang}",
                            [[647, 638, 0, 0, 0, 0,0],[150.98, 645.76, -202.42, -170.46, -809.21, -681.44,548.96],[192.78, 104.23, 223.63, -166.58, 819.78, -610.65,1171.41],[699.31, 209.99, 372.21, 718.24, 429.9, 829.57,1762.96],[647, 637.7, 0, 0, 0, 0,2221.14]]
                        ]
                    ]
                }
            },
            "jianzhi12": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '___x654297_y40900',
                            type: 'image',
                            rect: ['0px', '0px', '150px', '145px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/%E7%9B%91%E5%88%B6_%E9%80%89%E4%B8%AD_x6542.97_y409.00.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150px', '145px']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1699",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${___x654297_y40900}",
                            [[75.01, 72.51, 0, 0, 0, 0,0],[-32.72, 342.52, -150.2, 93.81, -497.12, 310.49,313.7],[-333.69, 263.48, -82.92, -123.53, -278.64, -415.09,654.74],[-250.61, -55.03, 713.2, -321.94, 524.33, -324.68,1023.17],[75, 72.5, 0, 0, 0, 0,1420.49]]
                        ]
                    ]
                }
            },
            "part5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '__x0_y0',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '970px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/%E8%83%8C%E6%99%AF_x0_y0.png', '0px', '0px']
                        },
                        {
                            rect: ['336px', '616px', '525px', '225px', 'auto', 'auto'],
                            id: '__x336_y616',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%B7%A6%E4%B8%8B_x336_y616.png', '0px', '0px']
                        },
                        {
                            rect: ['948px', '207px', '471px', '256px', 'auto', 'auto'],
                            id: '__x948_y207',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%8F%B3%E4%B8%8A_x948_y207.png', '0px', '0px']
                        },
                        {
                            rect: ['135px', '97px', '533px', '240px', 'auto', 'auto'],
                            id: '__x135_y97',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/%E5%B7%A6%E4%B8%8A_x135_y97.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '970px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1716",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${__x948_y207}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1714",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${__x135_y97}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1718",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${__x336_y616}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("%E8%B0%81%E5%9C%A8%E5%86%B3%E5%AE%9A%E6%88%91%E4%BB%AC%E7%9C%8B%E4%BB%80%E4%B9%88%E7%94%B5%E5%BD%B1_edgeActions.js");
})("EDGE-393783007");
