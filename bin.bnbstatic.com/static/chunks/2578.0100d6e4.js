"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2578], {
        fPZ3: (e, n, t) => {
            t.d(n, {
                Ay: () => k,
                rw: () => I,
                hr: () => b,
                B3: () => L
            });
            var o = t("DTvD"),
                r = t("MD8j"),
                i = t("blJy"),
                c = t("vjpm"),
                a = t("jbP7"),
                u = t.n(a),
                s = t("WUsl"),
                m = t("jTOc");
            const l = e => e.announcementTool;
            var g = t("gHJi");
            const d = g.Reader,
                p = g.Writer,
                f = g.util,
                h = g.roots.default || (g.roots.default = {}),
                {
                    WsMsg: y
                } = (h.com = (() => {
                    const e = {};
                    return e.WsMsg = function() {
                        function e(e) {
                            if (e)
                                for (let n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                        }
                        let n;
                        return e.prototype.channel = "", e.prototype.sourceTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.announcementBroadcastMsg = null, Object.defineProperty(e.prototype, "body", {
                            get: f.oneOfGetter(n = ["announcementBroadcastMsg"]),
                            set: f.oneOfSetter(n)
                        }), e.create = function(n) {
                            return new e(n)
                        }, e.encode = function(e, n) {
                            return n || (n = p.create()), n.uint32(10).string(e.channel), n.uint32(16).int64(e.sourceTime), null != e.announcementBroadcastMsg && Object.hasOwnProperty.call(e, "announcementBroadcastMsg") && h.com.market.AnnouncementBroadcastMsg.encode(e.announcementBroadcastMsg, n.uint32(882).fork()).ldelim(), n
                        }, e.encodeDelimited = function(e, n) {
                            return this.encode(e, n).ldelim()
                        }, e.decode = function(e, n) {
                            e instanceof d || (e = d.create(e));
                            let t = void 0 === n ? e.len : e.pos + n,
                                o = new h.com.WsMsg;
                            for (; e.pos < t;) {
                                let n = e.uint32();
                                switch (n >>> 3) {
                                    case 1:
                                        o.channel = e.string();
                                        break;
                                    case 2:
                                        o.sourceTime = e.int64();
                                        break;
                                    case 110:
                                        o.announcementBroadcastMsg = h.com.market.AnnouncementBroadcastMsg.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & n)
                                }
                            }
                            if (!o.hasOwnProperty("channel")) throw f.ProtocolError("missing required 'channel'", {
                                instance: o
                            });
                            if (!o.hasOwnProperty("sourceTime")) throw f.ProtocolError("missing required 'sourceTime'", {
                                instance: o
                            });
                            return o
                        }, e.decodeDelimited = function(e) {
                            return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                        }, e.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            let n = {};
                            if (!f.isString(e.channel)) return "channel: string expected";
                            if (!f.isInteger(e.sourceTime) && !(e.sourceTime && f.isInteger(e.sourceTime.low) && f.isInteger(e.sourceTime.high))) return "sourceTime: integer|Long expected";
                            if (null != e.announcementBroadcastMsg && e.hasOwnProperty("announcementBroadcastMsg")) {
                                n.body = 1; {
                                    let n = h.com.market.AnnouncementBroadcastMsg.verify(e.announcementBroadcastMsg);
                                    if (n) return "announcementBroadcastMsg." + n
                                }
                            }
                            return null
                        }, e.fromObject = function(e) {
                            if (e instanceof h.com.WsMsg) return e;
                            let n = new h.com.WsMsg;
                            if (null != e.channel && (n.channel = String(e.channel)), null != e.sourceTime && (f.Long ? (n.sourceTime = f.Long.fromValue(e.sourceTime)).unsigned = !1 : "string" === typeof e.sourceTime ? n.sourceTime = parseInt(e.sourceTime, 10) : "number" === typeof e.sourceTime ? n.sourceTime = e.sourceTime : "object" === typeof e.sourceTime && (n.sourceTime = new f.LongBits(e.sourceTime.low >>> 0, e.sourceTime.high >>> 0).toNumber())), null != e.announcementBroadcastMsg) {
                                if ("object" !== typeof e.announcementBroadcastMsg) throw TypeError(".com.WsMsg.announcementBroadcastMsg: object expected");
                                n.announcementBroadcastMsg = h.com.market.AnnouncementBroadcastMsg.fromObject(e.announcementBroadcastMsg)
                            }
                            return n
                        }, e.toObject = function(e, n) {
                            n || (n = {});
                            let t = {};
                            if (n.defaults)
                                if (t.channel = "", f.Long) {
                                    let e = new f.Long(0, 0, !1);
                                    t.sourceTime = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                } else t.sourceTime = n.longs === String ? "0" : 0;
                            return null != e.channel && e.hasOwnProperty("channel") && (t.channel = e.channel), null != e.sourceTime && e.hasOwnProperty("sourceTime") && ("number" === typeof e.sourceTime ? t.sourceTime = n.longs === String ? String(e.sourceTime) : e.sourceTime : t.sourceTime = n.longs === String ? f.Long.prototype.toString.call(e.sourceTime) : n.longs === Number ? new f.LongBits(e.sourceTime.low >>> 0, e.sourceTime.high >>> 0).toNumber() : e.sourceTime), null != e.announcementBroadcastMsg && e.hasOwnProperty("announcementBroadcastMsg") && (t.announcementBroadcastMsg = h.com.market.AnnouncementBroadcastMsg.toObject(e.announcementBroadcastMsg, n), n.oneofs && (t.body = "announcementBroadcastMsg")), t
                        }, e.prototype.toJSON = function() {
                            return this.constructor.toObject(this, g.util.toJSONOptions)
                        }, e
                    }(), e.market = function() {
                        const e = {};
                        return e.AnnouncementBroadcastMsg = function() {
                            function e(e) {
                                if (this.announcementDevices = [], e)
                                    for (let n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                            }
                            return e.prototype.announcement = null, e.prototype.announcementDevices = f.emptyArray, e.prototype.announcementLanguage = null, e.create = function(n) {
                                return new e(n)
                            }, e.encode = function(e, n) {
                                if (n || (n = p.create()), h.com.market.Announcement.encode(e.announcement, n.uint32(10).fork()).ldelim(), null != e.announcementDevices && e.announcementDevices.length)
                                    for (let t = 0; t < e.announcementDevices.length; ++t) h.com.market.AnnouncementDevice.encode(e.announcementDevices[t], n.uint32(18).fork()).ldelim();
                                return h.com.market.AnnouncementLanguage.encode(e.announcementLanguage, n.uint32(26).fork()).ldelim(), n
                            }, e.encodeDelimited = function(e, n) {
                                return this.encode(e, n).ldelim()
                            }, e.decode = function(e, n) {
                                e instanceof d || (e = d.create(e));
                                let t = void 0 === n ? e.len : e.pos + n,
                                    o = new h.com.market.AnnouncementBroadcastMsg;
                                for (; e.pos < t;) {
                                    let n = e.uint32();
                                    switch (n >>> 3) {
                                        case 1:
                                            o.announcement = h.com.market.Announcement.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            o.announcementDevices && o.announcementDevices.length || (o.announcementDevices = []), o.announcementDevices.push(h.com.market.AnnouncementDevice.decode(e, e.uint32()));
                                            break;
                                        case 3:
                                            o.announcementLanguage = h.com.market.AnnouncementLanguage.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & n)
                                    }
                                }
                                if (!o.hasOwnProperty("announcement")) throw f.ProtocolError("missing required 'announcement'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("announcementLanguage")) throw f.ProtocolError("missing required 'announcementLanguage'", {
                                    instance: o
                                });
                                return o
                            }, e.decodeDelimited = function(e) {
                                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected"; {
                                    let n = h.com.market.Announcement.verify(e.announcement);
                                    if (n) return "announcement." + n
                                }
                                if (null != e.announcementDevices && e.hasOwnProperty("announcementDevices")) {
                                    if (!Array.isArray(e.announcementDevices)) return "announcementDevices: array expected";
                                    for (let n = 0; n < e.announcementDevices.length; ++n) {
                                        let t = h.com.market.AnnouncementDevice.verify(e.announcementDevices[n]);
                                        if (t) return "announcementDevices." + t
                                    }
                                } {
                                    let n = h.com.market.AnnouncementLanguage.verify(e.announcementLanguage);
                                    if (n) return "announcementLanguage." + n
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if (e instanceof h.com.market.AnnouncementBroadcastMsg) return e;
                                let n = new h.com.market.AnnouncementBroadcastMsg;
                                if (null != e.announcement) {
                                    if ("object" !== typeof e.announcement) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcement: object expected");
                                    n.announcement = h.com.market.Announcement.fromObject(e.announcement)
                                }
                                if (e.announcementDevices) {
                                    if (!Array.isArray(e.announcementDevices)) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcementDevices: array expected");
                                    n.announcementDevices = [];
                                    for (let t = 0; t < e.announcementDevices.length; ++t) {
                                        if ("object" !== typeof e.announcementDevices[t]) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcementDevices: object expected");
                                        n.announcementDevices[t] = h.com.market.AnnouncementDevice.fromObject(e.announcementDevices[t])
                                    }
                                }
                                if (null != e.announcementLanguage) {
                                    if ("object" !== typeof e.announcementLanguage) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcementLanguage: object expected");
                                    n.announcementLanguage = h.com.market.AnnouncementLanguage.fromObject(e.announcementLanguage)
                                }
                                return n
                            }, e.toObject = function(e, n) {
                                n || (n = {});
                                let t = {};
                                if ((n.arrays || n.defaults) && (t.announcementDevices = []), n.defaults && (t.announcement = null, t.announcementLanguage = null), null != e.announcement && e.hasOwnProperty("announcement") && (t.announcement = h.com.market.Announcement.toObject(e.announcement, n)), e.announcementDevices && e.announcementDevices.length) {
                                    t.announcementDevices = [];
                                    for (let o = 0; o < e.announcementDevices.length; ++o) t.announcementDevices[o] = h.com.market.AnnouncementDevice.toObject(e.announcementDevices[o], n)
                                }
                                return null != e.announcementLanguage && e.hasOwnProperty("announcementLanguage") && (t.announcementLanguage = h.com.market.AnnouncementLanguage.toObject(e.announcementLanguage, n)), t
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, g.util.toJSONOptions)
                            }, e
                        }(), e.AnnouncementDevice = function() {
                            function e(e) {
                                if (e)
                                    for (let n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                            }
                            return e.prototype.announcementId = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.device = "", e.prototype.business = "", e.prototype.scope = "", e.prototype.url = "", e.create = function(n) {
                                return new e(n)
                            }, e.encode = function(e, n) {
                                return n || (n = p.create()), n.uint32(8).int64(e.announcementId), n.uint32(18).string(e.device), n.uint32(26).string(e.business), n.uint32(34).string(e.scope), n.uint32(42).string(e.url), n
                            }, e.encodeDelimited = function(e, n) {
                                return this.encode(e, n).ldelim()
                            }, e.decode = function(e, n) {
                                e instanceof d || (e = d.create(e));
                                let t = void 0 === n ? e.len : e.pos + n,
                                    o = new h.com.market.AnnouncementDevice;
                                for (; e.pos < t;) {
                                    let n = e.uint32();
                                    switch (n >>> 3) {
                                        case 1:
                                            o.announcementId = e.int64();
                                            break;
                                        case 2:
                                            o.device = e.string();
                                            break;
                                        case 3:
                                            o.business = e.string();
                                            break;
                                        case 4:
                                            o.scope = e.string();
                                            break;
                                        case 5:
                                            o.url = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & n)
                                    }
                                }
                                if (!o.hasOwnProperty("announcementId")) throw f.ProtocolError("missing required 'announcementId'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("device")) throw f.ProtocolError("missing required 'device'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("business")) throw f.ProtocolError("missing required 'business'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("scope")) throw f.ProtocolError("missing required 'scope'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("url")) throw f.ProtocolError("missing required 'url'", {
                                    instance: o
                                });
                                return o
                            }, e.decodeDelimited = function(e) {
                                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : f.isInteger(e.announcementId) || e.announcementId && f.isInteger(e.announcementId.low) && f.isInteger(e.announcementId.high) ? f.isString(e.device) ? f.isString(e.business) ? f.isString(e.scope) ? f.isString(e.url) ? null : "url: string expected" : "scope: string expected" : "business: string expected" : "device: string expected" : "announcementId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if (e instanceof h.com.market.AnnouncementDevice) return e;
                                let n = new h.com.market.AnnouncementDevice;
                                return null != e.announcementId && (f.Long ? (n.announcementId = f.Long.fromValue(e.announcementId)).unsigned = !1 : "string" === typeof e.announcementId ? n.announcementId = parseInt(e.announcementId, 10) : "number" === typeof e.announcementId ? n.announcementId = e.announcementId : "object" === typeof e.announcementId && (n.announcementId = new f.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber())), null != e.device && (n.device = String(e.device)), null != e.business && (n.business = String(e.business)), null != e.scope && (n.scope = String(e.scope)), null != e.url && (n.url = String(e.url)), n
                            }, e.toObject = function(e, n) {
                                n || (n = {});
                                let t = {};
                                if (n.defaults) {
                                    if (f.Long) {
                                        let e = new f.Long(0, 0, !1);
                                        t.announcementId = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                    } else t.announcementId = n.longs === String ? "0" : 0;
                                    t.device = "", t.business = "", t.scope = "", t.url = ""
                                }
                                return null != e.announcementId && e.hasOwnProperty("announcementId") && ("number" === typeof e.announcementId ? t.announcementId = n.longs === String ? String(e.announcementId) : e.announcementId : t.announcementId = n.longs === String ? f.Long.prototype.toString.call(e.announcementId) : n.longs === Number ? new f.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber() : e.announcementId), null != e.device && e.hasOwnProperty("device") && (t.device = e.device), null != e.business && e.hasOwnProperty("business") && (t.business = e.business), null != e.scope && e.hasOwnProperty("scope") && (t.scope = e.scope), null != e.url && e.hasOwnProperty("url") && (t.url = e.url), t
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, g.util.toJSONOptions)
                            }, e
                        }(), e.AnnouncementLanguage = function() {
                            function e(e) {
                                if (e)
                                    for (let n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                            }
                            return e.prototype.announcementId = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.language = "", e.prototype.title = "", e.prototype.contents = "", e.prototype.actionButton = "", e.create = function(n) {
                                return new e(n)
                            }, e.encode = function(e, n) {
                                return n || (n = p.create()), n.uint32(8).int64(e.announcementId), n.uint32(18).string(e.language), n.uint32(26).string(e.title), n.uint32(34).string(e.contents), n.uint32(42).string(e.actionButton), n
                            }, e.encodeDelimited = function(e, n) {
                                return this.encode(e, n).ldelim()
                            }, e.decode = function(e, n) {
                                e instanceof d || (e = d.create(e));
                                let t = void 0 === n ? e.len : e.pos + n,
                                    o = new h.com.market.AnnouncementLanguage;
                                for (; e.pos < t;) {
                                    let n = e.uint32();
                                    switch (n >>> 3) {
                                        case 1:
                                            o.announcementId = e.int64();
                                            break;
                                        case 2:
                                            o.language = e.string();
                                            break;
                                        case 3:
                                            o.title = e.string();
                                            break;
                                        case 4:
                                            o.contents = e.string();
                                            break;
                                        case 5:
                                            o.actionButton = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & n)
                                    }
                                }
                                if (!o.hasOwnProperty("announcementId")) throw f.ProtocolError("missing required 'announcementId'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("language")) throw f.ProtocolError("missing required 'language'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("title")) throw f.ProtocolError("missing required 'title'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("contents")) throw f.ProtocolError("missing required 'contents'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("actionButton")) throw f.ProtocolError("missing required 'actionButton'", {
                                    instance: o
                                });
                                return o
                            }, e.decodeDelimited = function(e) {
                                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : f.isInteger(e.announcementId) || e.announcementId && f.isInteger(e.announcementId.low) && f.isInteger(e.announcementId.high) ? f.isString(e.language) ? f.isString(e.title) ? f.isString(e.contents) ? f.isString(e.actionButton) ? null : "actionButton: string expected" : "contents: string expected" : "title: string expected" : "language: string expected" : "announcementId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if (e instanceof h.com.market.AnnouncementLanguage) return e;
                                let n = new h.com.market.AnnouncementLanguage;
                                return null != e.announcementId && (f.Long ? (n.announcementId = f.Long.fromValue(e.announcementId)).unsigned = !1 : "string" === typeof e.announcementId ? n.announcementId = parseInt(e.announcementId, 10) : "number" === typeof e.announcementId ? n.announcementId = e.announcementId : "object" === typeof e.announcementId && (n.announcementId = new f.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber())), null != e.language && (n.language = String(e.language)), null != e.title && (n.title = String(e.title)), null != e.contents && (n.contents = String(e.contents)), null != e.actionButton && (n.actionButton = String(e.actionButton)), n
                            }, e.toObject = function(e, n) {
                                n || (n = {});
                                let t = {};
                                if (n.defaults) {
                                    if (f.Long) {
                                        let e = new f.Long(0, 0, !1);
                                        t.announcementId = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                    } else t.announcementId = n.longs === String ? "0" : 0;
                                    t.language = "", t.title = "", t.contents = "", t.actionButton = ""
                                }
                                return null != e.announcementId && e.hasOwnProperty("announcementId") && ("number" === typeof e.announcementId ? t.announcementId = n.longs === String ? String(e.announcementId) : e.announcementId : t.announcementId = n.longs === String ? f.Long.prototype.toString.call(e.announcementId) : n.longs === Number ? new f.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber() : e.announcementId), null != e.language && e.hasOwnProperty("language") && (t.language = e.language), null != e.title && e.hasOwnProperty("title") && (t.title = e.title), null != e.contents && e.hasOwnProperty("contents") && (t.contents = e.contents), null != e.actionButton && e.hasOwnProperty("actionButton") && (t.actionButton = e.actionButton), t
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, g.util.toJSONOptions)
                            }, e
                        }(), e.Announcement = function() {
                            function e(e) {
                                if (e)
                                    for (let n = Object.keys(e), t = 0; t < n.length; ++t) null != e[n[t]] && (this[n[t]] = e[n[t]])
                            }
                            return e.prototype.announcementId = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.description = "", e.prototype.type = "", e.prototype.status = "", e.prototype.createTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.releaseTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.hiddenTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.expiryTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, e.prototype.rank = 0, e.create = function(n) {
                                return new e(n)
                            }, e.encode = function(e, n) {
                                return n || (n = p.create()), n.uint32(8).int64(e.announcementId), n.uint32(18).string(e.description), n.uint32(26).string(e.type), n.uint32(34).string(e.status), n.uint32(40).int64(e.createTime), n.uint32(48).int64(e.releaseTime), n.uint32(56).int64(e.hiddenTime), n.uint32(64).int64(e.expiryTime), null != e.rank && Object.hasOwnProperty.call(e, "rank") && n.uint32(72).int32(e.rank), n
                            }, e.encodeDelimited = function(e, n) {
                                return this.encode(e, n).ldelim()
                            }, e.decode = function(e, n) {
                                e instanceof d || (e = d.create(e));
                                let t = void 0 === n ? e.len : e.pos + n,
                                    o = new h.com.market.Announcement;
                                for (; e.pos < t;) {
                                    let n = e.uint32();
                                    switch (n >>> 3) {
                                        case 1:
                                            o.announcementId = e.int64();
                                            break;
                                        case 2:
                                            o.description = e.string();
                                            break;
                                        case 3:
                                            o.type = e.string();
                                            break;
                                        case 4:
                                            o.status = e.string();
                                            break;
                                        case 5:
                                            o.createTime = e.int64();
                                            break;
                                        case 6:
                                            o.releaseTime = e.int64();
                                            break;
                                        case 7:
                                            o.hiddenTime = e.int64();
                                            break;
                                        case 8:
                                            o.expiryTime = e.int64();
                                            break;
                                        case 9:
                                            o.rank = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & n)
                                    }
                                }
                                if (!o.hasOwnProperty("announcementId")) throw f.ProtocolError("missing required 'announcementId'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("description")) throw f.ProtocolError("missing required 'description'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("type")) throw f.ProtocolError("missing required 'type'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("status")) throw f.ProtocolError("missing required 'status'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("createTime")) throw f.ProtocolError("missing required 'createTime'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("releaseTime")) throw f.ProtocolError("missing required 'releaseTime'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("hiddenTime")) throw f.ProtocolError("missing required 'hiddenTime'", {
                                    instance: o
                                });
                                if (!o.hasOwnProperty("expiryTime")) throw f.ProtocolError("missing required 'expiryTime'", {
                                    instance: o
                                });
                                return o
                            }, e.decodeDelimited = function(e) {
                                return e instanceof d || (e = new d(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : f.isInteger(e.announcementId) || e.announcementId && f.isInteger(e.announcementId.low) && f.isInteger(e.announcementId.high) ? f.isString(e.description) ? f.isString(e.type) ? f.isString(e.status) ? f.isInteger(e.createTime) || e.createTime && f.isInteger(e.createTime.low) && f.isInteger(e.createTime.high) ? f.isInteger(e.releaseTime) || e.releaseTime && f.isInteger(e.releaseTime.low) && f.isInteger(e.releaseTime.high) ? f.isInteger(e.hiddenTime) || e.hiddenTime && f.isInteger(e.hiddenTime.low) && f.isInteger(e.hiddenTime.high) ? f.isInteger(e.expiryTime) || e.expiryTime && f.isInteger(e.expiryTime.low) && f.isInteger(e.expiryTime.high) ? null != e.rank && e.hasOwnProperty("rank") && !f.isInteger(e.rank) ? "rank: integer expected" : null : "expiryTime: integer|Long expected" : "hiddenTime: integer|Long expected" : "releaseTime: integer|Long expected" : "createTime: integer|Long expected" : "status: string expected" : "type: string expected" : "description: string expected" : "announcementId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if (e instanceof h.com.market.Announcement) return e;
                                let n = new h.com.market.Announcement;
                                return null != e.announcementId && (f.Long ? (n.announcementId = f.Long.fromValue(e.announcementId)).unsigned = !1 : "string" === typeof e.announcementId ? n.announcementId = parseInt(e.announcementId, 10) : "number" === typeof e.announcementId ? n.announcementId = e.announcementId : "object" === typeof e.announcementId && (n.announcementId = new f.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber())), null != e.description && (n.description = String(e.description)), null != e.type && (n.type = String(e.type)), null != e.status && (n.status = String(e.status)), null != e.createTime && (f.Long ? (n.createTime = f.Long.fromValue(e.createTime)).unsigned = !1 : "string" === typeof e.createTime ? n.createTime = parseInt(e.createTime, 10) : "number" === typeof e.createTime ? n.createTime = e.createTime : "object" === typeof e.createTime && (n.createTime = new f.LongBits(e.createTime.low >>> 0, e.createTime.high >>> 0).toNumber())), null != e.releaseTime && (f.Long ? (n.releaseTime = f.Long.fromValue(e.releaseTime)).unsigned = !1 : "string" === typeof e.releaseTime ? n.releaseTime = parseInt(e.releaseTime, 10) : "number" === typeof e.releaseTime ? n.releaseTime = e.releaseTime : "object" === typeof e.releaseTime && (n.releaseTime = new f.LongBits(e.releaseTime.low >>> 0, e.releaseTime.high >>> 0).toNumber())), null != e.hiddenTime && (f.Long ? (n.hiddenTime = f.Long.fromValue(e.hiddenTime)).unsigned = !1 : "string" === typeof e.hiddenTime ? n.hiddenTime = parseInt(e.hiddenTime, 10) : "number" === typeof e.hiddenTime ? n.hiddenTime = e.hiddenTime : "object" === typeof e.hiddenTime && (n.hiddenTime = new f.LongBits(e.hiddenTime.low >>> 0, e.hiddenTime.high >>> 0).toNumber())), null != e.expiryTime && (f.Long ? (n.expiryTime = f.Long.fromValue(e.expiryTime)).unsigned = !1 : "string" === typeof e.expiryTime ? n.expiryTime = parseInt(e.expiryTime, 10) : "number" === typeof e.expiryTime ? n.expiryTime = e.expiryTime : "object" === typeof e.expiryTime && (n.expiryTime = new f.LongBits(e.expiryTime.low >>> 0, e.expiryTime.high >>> 0).toNumber())), null != e.rank && (n.rank = 0 | e.rank), n
                            }, e.toObject = function(e, n) {
                                n || (n = {});
                                let t = {};
                                if (n.defaults) {
                                    if (f.Long) {
                                        let e = new f.Long(0, 0, !1);
                                        t.announcementId = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                    } else t.announcementId = n.longs === String ? "0" : 0;
                                    if (t.description = "", t.type = "", t.status = "", f.Long) {
                                        let e = new f.Long(0, 0, !1);
                                        t.createTime = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                    } else t.createTime = n.longs === String ? "0" : 0;
                                    if (f.Long) {
                                        let e = new f.Long(0, 0, !1);
                                        t.releaseTime = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                    } else t.releaseTime = n.longs === String ? "0" : 0;
                                    if (f.Long) {
                                        let e = new f.Long(0, 0, !1);
                                        t.hiddenTime = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                    } else t.hiddenTime = n.longs === String ? "0" : 0;
                                    if (f.Long) {
                                        let e = new f.Long(0, 0, !1);
                                        t.expiryTime = n.longs === String ? e.toString() : n.longs === Number ? e.toNumber() : e
                                    } else t.expiryTime = n.longs === String ? "0" : 0;
                                    t.rank = 0
                                }
                                return null != e.announcementId && e.hasOwnProperty("announcementId") && ("number" === typeof e.announcementId ? t.announcementId = n.longs === String ? String(e.announcementId) : e.announcementId : t.announcementId = n.longs === String ? f.Long.prototype.toString.call(e.announcementId) : n.longs === Number ? new f.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber() : e.announcementId), null != e.description && e.hasOwnProperty("description") && (t.description = e.description), null != e.type && e.hasOwnProperty("type") && (t.type = e.type), null != e.status && e.hasOwnProperty("status") && (t.status = e.status), null != e.createTime && e.hasOwnProperty("createTime") && ("number" === typeof e.createTime ? t.createTime = n.longs === String ? String(e.createTime) : e.createTime : t.createTime = n.longs === String ? f.Long.prototype.toString.call(e.createTime) : n.longs === Number ? new f.LongBits(e.createTime.low >>> 0, e.createTime.high >>> 0).toNumber() : e.createTime), null != e.releaseTime && e.hasOwnProperty("releaseTime") && ("number" === typeof e.releaseTime ? t.releaseTime = n.longs === String ? String(e.releaseTime) : e.releaseTime : t.releaseTime = n.longs === String ? f.Long.prototype.toString.call(e.releaseTime) : n.longs === Number ? new f.LongBits(e.releaseTime.low >>> 0, e.releaseTime.high >>> 0).toNumber() : e.releaseTime), null != e.hiddenTime && e.hasOwnProperty("hiddenTime") && ("number" === typeof e.hiddenTime ? t.hiddenTime = n.longs === String ? String(e.hiddenTime) : e.hiddenTime : t.hiddenTime = n.longs === String ? f.Long.prototype.toString.call(e.hiddenTime) : n.longs === Number ? new f.LongBits(e.hiddenTime.low >>> 0, e.hiddenTime.high >>> 0).toNumber() : e.hiddenTime), null != e.expiryTime && e.hasOwnProperty("expiryTime") && ("number" === typeof e.expiryTime ? t.expiryTime = n.longs === String ? String(e.expiryTime) : e.expiryTime : t.expiryTime = n.longs === String ? f.Long.prototype.toString.call(e.expiryTime) : n.longs === Number ? new f.LongBits(e.expiryTime.low >>> 0, e.expiryTime.high >>> 0).toNumber() : e.expiryTime), null != e.rank && e.hasOwnProperty("rank") && (t.rank = e.rank), t
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, g.util.toJSONOptions)
                            }, e
                        }(), e
                    }(), e
                })(), h.com),
                T = e => {
                    const {
                        i18n: {
                            language: n
                        }
                    } = (0, s.rw)(), t = (0, r.wA)(), {
                        announcementInfos: i
                    } = (0, r.d4)(l), c = (0, o.useRef)();
                    (0, o.useEffect)((() => {
                        if (e) return c.current = (0, m.A)(`${e}/market?channel=announcement_${n}`), () => c ? .current ? .close()
                    }), [e, n]), (0, o.useEffect)((() => {
                        c ? .current ? .onmessage((async e => {
                            const {
                                data: n
                            } = e || {};
                            if (n && n.size && n instanceof Blob) {
                                const e = await (o = n, new Promise((e => {
                                        if (o instanceof ArrayBuffer) return void e(o);
                                        const n = new FileReader;
                                        n.onload = () => {
                                            e(n.result)
                                        }, n.readAsArrayBuffer(o)
                                    }))),
                                    r = y.toObject(y.decode(new Uint8Array(e))) ? .announcementBroadcastMsg || {},
                                    {
                                        announcement: c,
                                        announcementDevices: a,
                                        announcementLanguage: u
                                    } = r;
                                c && a ? .length && u ? .announcementId && t.announcementTool.updateState({
                                    announcementInfos: [...i, {
                                        announcement: c,
                                        announcementDevices: a,
                                        announcementLanguage: {
                                            [u ? .announcementId]: u
                                        }
                                    }]
                                })
                            }
                            var o
                        })), c ? .current ? .open()
                    }), [i, t.announcementTool])
                };
            var w = t("L6E9");
            const b = ({
                    device: e,
                    isMobile: n
                }) => !n && e === i.KJ.WEB || n && e === i.KJ.H5,
                I = ({
                    business: e,
                    invokerBusiness: n
                }) => e === i.Sp.ALL || e === n,
                L = ({
                    scope: e,
                    invokerScope: n
                }) => e === i.ob.ALL || e === n,
                k = (e, n, t, i) => {
                    const a = (0, r.wA)(),
                        {
                            isMobile: m
                        } = (0, c.Q)(),
                        {
                            i18n: {
                                language: g
                            }
                        } = (0, s.rw)(),
                        {
                            announcementInfos: d,
                            annIsInvalid: p
                        } = (0, r.d4)(l);
                    T(t);
                    const {
                        queryAnnouncementViewSetting: f,
                        pushSettingMap: h,
                        pushSettingSwitch: y
                    } = (0, w.ud)();
                    return (0, o.useEffect)((() => {
                        f({
                            isLoggedIn: i
                        })
                    }), [i, f]), (0, o.useEffect)((() => {
                        a.announcementTool.queryAnnouncement({
                            lng: g
                        })
                    }), [a.announcementTool, g]), (0, o.useMemo)((() => {
                        const t = [];
                        d ? .forEach((({
                            announcement: o,
                            announcementDevices: r,
                            announcementLanguage: i
                        }) => {
                            const {
                                announcementId: c,
                                type: a,
                                expiryTime: u = 0,
                                hiddenTime: s = 0,
                                releaseTime: l = 0,
                                rank: g
                            } = o || {}, d = r.find((({
                                announcementId: t,
                                business: o,
                                device: r,
                                scope: i
                            }) => t === c && b({
                                device: r,
                                isMobile: m
                            }) && I({
                                business: o,
                                invokerBusiness: e
                            }) && L({
                                scope: i,
                                invokerScope: n
                            }))), {
                                title: p,
                                contents: f,
                                actionButton: T
                            } = i ? .[c] || {}, w = y && h ? .[a];
                            d && (({
                                releaseTime: e,
                                expiryTime: n,
                                hiddenTime: t
                            }) => {
                                const o = Date.now();
                                return o > e && (o < n || o < t)
                            })({
                                releaseTime: l,
                                expiryTime: u,
                                hiddenTime: s
                            }) && w && t.push({
                                annId: `${c}`,
                                annType: a,
                                annTitle: p,
                                annContent: f,
                                annBtnText: T,
                                annUrl: d.url,
                                annTime: l,
                                annRank: g || Number.MAX_SAFE_INTEGER
                            })
                        }));
                        return {
                            annData: u()(t, ["annRank", "annTime"], ["asc", "desc"]),
                            annIsInvalid: p
                        }
                    }), [d, p, h, m, e, n])
                }
        },
        jIw6: (e, n, t) => {
            t.d(n, {
                A: () => c
            });
            var o = t("DTvD"),
                r = t("S9mB"),
                i = t("+KAX");
            const c = (e, n = r.A) => {
                const t = n.language || "undefined" !== typeof window && window.localStorage.i18nextLng;
                (0, o.useEffect)((() => {
                    !async function() {
                        await (0, i.V8)({
                            language: t,
                            i18nInstance: n,
                            i18nHost: e,
                            namespace: "announcement-tool"
                        })
                    }()
                }), [e, n, t])
            }
        },
        WUsl: (e, n, t) => {
            t.d(n, {
                MU: () => r,
                _b: () => a,
                rw: () => i,
                ud: () => c
            });
            var o = t("T0Sc");
            const r = () => (0, o.o)("", "trade-ui"),
                i = () => (0, o.o)("annTool", "announcement-tool"),
                c = () => (0, o.o)("futures-trade", "futures-ui"),
                a = () => (0, o.o)("", "futures-widget")
        },
        vYM6: (e, n, t) => {
            t.d(n, {
                A: () => o
            });
            const o = function(e = [], n) {
                return e.reduce(((e, t) => (e[t[n]] = t, e)), {})
            }
        }
    }
]);