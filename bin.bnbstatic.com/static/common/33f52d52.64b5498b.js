"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [5125], {
        "8v4f": (e, t, r) => {
            r.d(t, {
                g: () => l
            });
            var n = r("EnBZ"),
                i = r("gHJi"),
                o = i.Reader,
                s = i.Writer,
                a = i.util,
                c = {},
                l = c.com = function() {
                    var e = {};
                    return e.WsMsg = function() {
                        var e, t = function(e) {
                            if (e)
                                for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                        };
                        return t.prototype.channel = "", t.prototype.sourceTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, t.prototype.wsResp = null, t.prototype.trivialMsg = null, t.prototype.exchangeRateMsg = null, t.prototype.inboxMsg = null, t.prototype.c2cQuotePriceMsg = null, t.prototype.inboxNotificationMsg = null, t.prototype.coinPriceMsg = null, t.prototype.c2cAllQuotePriceMsg = null, t.prototype.c2cKlineMsg = null, t.prototype.emergencyBroadcastMsg = null, t.prototype.announcementBroadcastMsg = null, t.prototype.earnIndexMsg = null, t.prototype.pushMsg = null, t.prototype.nftInboxMsg = null, t.prototype.assetRateMsg = null, t.prototype.assetPushMsg = null, t.prototype.fundingBalanceMsg = null, t.prototype.txStatusEventMsg = null, Object.defineProperty(t.prototype, "body", {
                            get: a.oneOfGetter(e = ["wsResp", "trivialMsg", "exchangeRateMsg", "inboxMsg", "c2cQuotePriceMsg", "inboxNotificationMsg", "coinPriceMsg", "c2cAllQuotePriceMsg", "c2cKlineMsg", "emergencyBroadcastMsg", "announcementBroadcastMsg", "earnIndexMsg", "pushMsg", "nftInboxMsg", "assetRateMsg", "assetPushMsg", "fundingBalanceMsg", "txStatusEventMsg"]),
                            set: a.oneOfSetter(e)
                        }), t.create = function(e) {
                            return new t(e)
                        }, t.encode = function(e, t) {
                            return t || (t = s.create()), t.uint32(10).string(e.channel), t.uint32(16).int64(e.sourceTime), null != e.wsResp && Object.hasOwnProperty.call(e, "wsResp") && c.com.WsResp.encode(e.wsResp, t.uint32(802).fork()).ldelim(), null != e.trivialMsg && Object.hasOwnProperty.call(e, "trivialMsg") && c.com.market.TrivialMsg.encode(e.trivialMsg, t.uint32(810).fork()).ldelim(), null != e.exchangeRateMsg && Object.hasOwnProperty.call(e, "exchangeRateMsg") && c.com.market.ExchangeRateMsg.encode(e.exchangeRateMsg, t.uint32(818).fork()).ldelim(), null != e.inboxMsg && Object.hasOwnProperty.call(e, "inboxMsg") && c.com.inbox.InboxMsg.encode(e.inboxMsg, t.uint32(826).fork()).ldelim(), null != e.c2cQuotePriceMsg && Object.hasOwnProperty.call(e, "c2cQuotePriceMsg") && c.com.market.C2cQuotePriceMsg.encode(e.c2cQuotePriceMsg, t.uint32(834).fork()).ldelim(), null != e.inboxNotificationMsg && Object.hasOwnProperty.call(e, "inboxNotificationMsg") && c.com.inbox.InboxNotificationMsg.encode(e.inboxNotificationMsg, t.uint32(842).fork()).ldelim(), null != e.coinPriceMsg && Object.hasOwnProperty.call(e, "coinPriceMsg") && c.com.market.CoinPriceMsg.encode(e.coinPriceMsg, t.uint32(850).fork()).ldelim(), null != e.c2cAllQuotePriceMsg && Object.hasOwnProperty.call(e, "c2cAllQuotePriceMsg") && c.com.market.C2cAllQuotePriceMsg.encode(e.c2cAllQuotePriceMsg, t.uint32(858).fork()).ldelim(), null != e.c2cKlineMsg && Object.hasOwnProperty.call(e, "c2cKlineMsg") && c.com.market.C2cKlineMsg.encode(e.c2cKlineMsg, t.uint32(866).fork()).ldelim(), null != e.emergencyBroadcastMsg && Object.hasOwnProperty.call(e, "emergencyBroadcastMsg") && c.com.market.EmergencyBroadcastMsg.encode(e.emergencyBroadcastMsg, t.uint32(874).fork()).ldelim(), null != e.announcementBroadcastMsg && Object.hasOwnProperty.call(e, "announcementBroadcastMsg") && c.com.market.AnnouncementBroadcastMsg.encode(e.announcementBroadcastMsg, t.uint32(882).fork()).ldelim(), null != e.earnIndexMsg && Object.hasOwnProperty.call(e, "earnIndexMsg") && c.com.earn.EarnIndexMsg.encode(e.earnIndexMsg, t.uint32(890).fork()).ldelim(), null != e.pushMsg && Object.hasOwnProperty.call(e, "pushMsg") && c.com.push.PushMsg.encode(e.pushMsg, t.uint32(898).fork()).ldelim(), null != e.nftInboxMsg && Object.hasOwnProperty.call(e, "nftInboxMsg") && c.com.nft.NftInboxMsg.encode(e.nftInboxMsg, t.uint32(906).fork()).ldelim(), null != e.assetRateMsg && Object.hasOwnProperty.call(e, "assetRateMsg") && c.com.asset.AssetRateMsg.encode(e.assetRateMsg, t.uint32(954).fork()).ldelim(), null != e.assetPushMsg && Object.hasOwnProperty.call(e, "assetPushMsg") && c.com.asset.AssetPushMsg.encode(e.assetPushMsg, t.uint32(970).fork()).ldelim(), null != e.fundingBalanceMsg && Object.hasOwnProperty.call(e, "fundingBalanceMsg") && c.com.asset.FundingBalanceMsg.encode(e.fundingBalanceMsg, t.uint32(978).fork()).ldelim(), null != e.txStatusEventMsg && Object.hasOwnProperty.call(e, "txStatusEventMsg") && c.com.web3.TxStatusEventMsg.encode(e.txStatusEventMsg, t.uint32(986).fork()).ldelim(), t
                        }, t.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, t.decode = function(e, t) {
                            (0, n._)(e, o) || (e = o.create(e));
                            for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.WsMsg; e.pos < r;) {
                                var s = e.uint32();
                                switch (s >>> 3) {
                                    case 1:
                                        i.channel = e.string();
                                        break;
                                    case 2:
                                        i.sourceTime = e.int64();
                                        break;
                                    case 100:
                                        i.wsResp = c.com.WsResp.decode(e, e.uint32());
                                        break;
                                    case 101:
                                        i.trivialMsg = c.com.market.TrivialMsg.decode(e, e.uint32());
                                        break;
                                    case 102:
                                        i.exchangeRateMsg = c.com.market.ExchangeRateMsg.decode(e, e.uint32());
                                        break;
                                    case 103:
                                        i.inboxMsg = c.com.inbox.InboxMsg.decode(e, e.uint32());
                                        break;
                                    case 104:
                                        i.c2cQuotePriceMsg = c.com.market.C2cQuotePriceMsg.decode(e, e.uint32());
                                        break;
                                    case 105:
                                        i.inboxNotificationMsg = c.com.inbox.InboxNotificationMsg.decode(e, e.uint32());
                                        break;
                                    case 106:
                                        i.coinPriceMsg = c.com.market.CoinPriceMsg.decode(e, e.uint32());
                                        break;
                                    case 107:
                                        i.c2cAllQuotePriceMsg = c.com.market.C2cAllQuotePriceMsg.decode(e, e.uint32());
                                        break;
                                    case 108:
                                        i.c2cKlineMsg = c.com.market.C2cKlineMsg.decode(e, e.uint32());
                                        break;
                                    case 109:
                                        i.emergencyBroadcastMsg = c.com.market.EmergencyBroadcastMsg.decode(e, e.uint32());
                                        break;
                                    case 110:
                                        i.announcementBroadcastMsg = c.com.market.AnnouncementBroadcastMsg.decode(e, e.uint32());
                                        break;
                                    case 111:
                                        i.earnIndexMsg = c.com.earn.EarnIndexMsg.decode(e, e.uint32());
                                        break;
                                    case 112:
                                        i.pushMsg = c.com.push.PushMsg.decode(e, e.uint32());
                                        break;
                                    case 113:
                                        i.nftInboxMsg = c.com.nft.NftInboxMsg.decode(e, e.uint32());
                                        break;
                                    case 119:
                                        i.assetRateMsg = c.com.asset.AssetRateMsg.decode(e, e.uint32());
                                        break;
                                    case 121:
                                        i.assetPushMsg = c.com.asset.AssetPushMsg.decode(e, e.uint32());
                                        break;
                                    case 122:
                                        i.fundingBalanceMsg = c.com.asset.FundingBalanceMsg.decode(e, e.uint32());
                                        break;
                                    case 123:
                                        i.txStatusEventMsg = c.com.web3.TxStatusEventMsg.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & s)
                                }
                            }
                            if (!i.hasOwnProperty("channel")) throw a.ProtocolError("missing required 'channel'", {
                                instance: i
                            });
                            if (!i.hasOwnProperty("sourceTime")) throw a.ProtocolError("missing required 'sourceTime'", {
                                instance: i
                            });
                            return i
                        }, t.decodeDelimited = function(e) {
                            return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                        }, t.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (!a.isString(e.channel)) return "channel: string expected";
                            if (!a.isInteger(e.sourceTime) && !(e.sourceTime && a.isInteger(e.sourceTime.low) && a.isInteger(e.sourceTime.high))) return "sourceTime: integer|Long expected";
                            if (null != e.wsResp && e.hasOwnProperty("wsResp")) {
                                t.body = 1;
                                var r = c.com.WsResp.verify(e.wsResp);
                                if (r) return "wsResp." + r
                            }
                            if (null != e.trivialMsg && e.hasOwnProperty("trivialMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var n = c.com.market.TrivialMsg.verify(e.trivialMsg);
                                if (n) return "trivialMsg." + n
                            }
                            if (null != e.exchangeRateMsg && e.hasOwnProperty("exchangeRateMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var i = c.com.market.ExchangeRateMsg.verify(e.exchangeRateMsg);
                                if (i) return "exchangeRateMsg." + i
                            }
                            if (null != e.inboxMsg && e.hasOwnProperty("inboxMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var o = c.com.inbox.InboxMsg.verify(e.inboxMsg);
                                if (o) return "inboxMsg." + o
                            }
                            if (null != e.c2cQuotePriceMsg && e.hasOwnProperty("c2cQuotePriceMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var s = c.com.market.C2cQuotePriceMsg.verify(e.c2cQuotePriceMsg);
                                if (s) return "c2cQuotePriceMsg." + s
                            }
                            if (null != e.inboxNotificationMsg && e.hasOwnProperty("inboxNotificationMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var l = c.com.inbox.InboxNotificationMsg.verify(e.inboxNotificationMsg);
                                if (l) return "inboxNotificationMsg." + l
                            }
                            if (null != e.coinPriceMsg && e.hasOwnProperty("coinPriceMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var u = c.com.market.CoinPriceMsg.verify(e.coinPriceMsg);
                                if (u) return "coinPriceMsg." + u
                            }
                            if (null != e.c2cAllQuotePriceMsg && e.hasOwnProperty("c2cAllQuotePriceMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var p = c.com.market.C2cAllQuotePriceMsg.verify(e.c2cAllQuotePriceMsg);
                                if (p) return "c2cAllQuotePriceMsg." + p
                            }
                            if (null != e.c2cKlineMsg && e.hasOwnProperty("c2cKlineMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var d = c.com.market.C2cKlineMsg.verify(e.c2cKlineMsg);
                                if (d) return "c2cKlineMsg." + d
                            }
                            if (null != e.emergencyBroadcastMsg && e.hasOwnProperty("emergencyBroadcastMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var m = c.com.market.EmergencyBroadcastMsg.verify(e.emergencyBroadcastMsg);
                                if (m) return "emergencyBroadcastMsg." + m
                            }
                            if (null != e.announcementBroadcastMsg && e.hasOwnProperty("announcementBroadcastMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var g = c.com.market.AnnouncementBroadcastMsg.verify(e.announcementBroadcastMsg);
                                if (g) return "announcementBroadcastMsg." + g
                            }
                            if (null != e.earnIndexMsg && e.hasOwnProperty("earnIndexMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var y = c.com.earn.EarnIndexMsg.verify(e.earnIndexMsg);
                                if (y) return "earnIndexMsg." + y
                            }
                            if (null != e.pushMsg && e.hasOwnProperty("pushMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var f = c.com.push.PushMsg.verify(e.pushMsg);
                                if (f) return "pushMsg." + f
                            }
                            if (null != e.nftInboxMsg && e.hasOwnProperty("nftInboxMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var b = c.com.nft.NftInboxMsg.verify(e.nftInboxMsg);
                                if (b) return "nftInboxMsg." + b
                            }
                            if (null != e.assetRateMsg && e.hasOwnProperty("assetRateMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var h = c.com.asset.AssetRateMsg.verify(e.assetRateMsg);
                                if (h) return "assetRateMsg." + h
                            }
                            if (null != e.assetPushMsg && e.hasOwnProperty("assetPushMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var w = c.com.asset.AssetPushMsg.verify(e.assetPushMsg);
                                if (w) return "assetPushMsg." + w
                            }
                            if (null != e.fundingBalanceMsg && e.hasOwnProperty("fundingBalanceMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var O = c.com.asset.FundingBalanceMsg.verify(e.fundingBalanceMsg);
                                if (O) return "fundingBalanceMsg." + O
                            }
                            if (null != e.txStatusEventMsg && e.hasOwnProperty("txStatusEventMsg")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var S = c.com.web3.TxStatusEventMsg.verify(e.txStatusEventMsg);
                                if (S) return "txStatusEventMsg." + S
                            }
                            return null
                        }, t.fromObject = function(e) {
                            if ((0, n._)(e, c.com.WsMsg)) return e;
                            var t = new c.com.WsMsg;
                            if (null != e.channel && (t.channel = String(e.channel)), null != e.sourceTime && (a.Long ? (t.sourceTime = a.Long.fromValue(e.sourceTime)).unsigned = !1 : "string" === typeof e.sourceTime ? t.sourceTime = parseInt(e.sourceTime, 10) : "number" === typeof e.sourceTime ? t.sourceTime = e.sourceTime : "object" === typeof e.sourceTime && (t.sourceTime = new a.LongBits(e.sourceTime.low >>> 0, e.sourceTime.high >>> 0).toNumber())), null != e.wsResp) {
                                if ("object" !== typeof e.wsResp) throw TypeError(".com.WsMsg.wsResp: object expected");
                                t.wsResp = c.com.WsResp.fromObject(e.wsResp)
                            }
                            if (null != e.trivialMsg) {
                                if ("object" !== typeof e.trivialMsg) throw TypeError(".com.WsMsg.trivialMsg: object expected");
                                t.trivialMsg = c.com.market.TrivialMsg.fromObject(e.trivialMsg)
                            }
                            if (null != e.exchangeRateMsg) {
                                if ("object" !== typeof e.exchangeRateMsg) throw TypeError(".com.WsMsg.exchangeRateMsg: object expected");
                                t.exchangeRateMsg = c.com.market.ExchangeRateMsg.fromObject(e.exchangeRateMsg)
                            }
                            if (null != e.inboxMsg) {
                                if ("object" !== typeof e.inboxMsg) throw TypeError(".com.WsMsg.inboxMsg: object expected");
                                t.inboxMsg = c.com.inbox.InboxMsg.fromObject(e.inboxMsg)
                            }
                            if (null != e.c2cQuotePriceMsg) {
                                if ("object" !== typeof e.c2cQuotePriceMsg) throw TypeError(".com.WsMsg.c2cQuotePriceMsg: object expected");
                                t.c2cQuotePriceMsg = c.com.market.C2cQuotePriceMsg.fromObject(e.c2cQuotePriceMsg)
                            }
                            if (null != e.inboxNotificationMsg) {
                                if ("object" !== typeof e.inboxNotificationMsg) throw TypeError(".com.WsMsg.inboxNotificationMsg: object expected");
                                t.inboxNotificationMsg = c.com.inbox.InboxNotificationMsg.fromObject(e.inboxNotificationMsg)
                            }
                            if (null != e.coinPriceMsg) {
                                if ("object" !== typeof e.coinPriceMsg) throw TypeError(".com.WsMsg.coinPriceMsg: object expected");
                                t.coinPriceMsg = c.com.market.CoinPriceMsg.fromObject(e.coinPriceMsg)
                            }
                            if (null != e.c2cAllQuotePriceMsg) {
                                if ("object" !== typeof e.c2cAllQuotePriceMsg) throw TypeError(".com.WsMsg.c2cAllQuotePriceMsg: object expected");
                                t.c2cAllQuotePriceMsg = c.com.market.C2cAllQuotePriceMsg.fromObject(e.c2cAllQuotePriceMsg)
                            }
                            if (null != e.c2cKlineMsg) {
                                if ("object" !== typeof e.c2cKlineMsg) throw TypeError(".com.WsMsg.c2cKlineMsg: object expected");
                                t.c2cKlineMsg = c.com.market.C2cKlineMsg.fromObject(e.c2cKlineMsg)
                            }
                            if (null != e.emergencyBroadcastMsg) {
                                if ("object" !== typeof e.emergencyBroadcastMsg) throw TypeError(".com.WsMsg.emergencyBroadcastMsg: object expected");
                                t.emergencyBroadcastMsg = c.com.market.EmergencyBroadcastMsg.fromObject(e.emergencyBroadcastMsg)
                            }
                            if (null != e.announcementBroadcastMsg) {
                                if ("object" !== typeof e.announcementBroadcastMsg) throw TypeError(".com.WsMsg.announcementBroadcastMsg: object expected");
                                t.announcementBroadcastMsg = c.com.market.AnnouncementBroadcastMsg.fromObject(e.announcementBroadcastMsg)
                            }
                            if (null != e.earnIndexMsg) {
                                if ("object" !== typeof e.earnIndexMsg) throw TypeError(".com.WsMsg.earnIndexMsg: object expected");
                                t.earnIndexMsg = c.com.earn.EarnIndexMsg.fromObject(e.earnIndexMsg)
                            }
                            if (null != e.pushMsg) {
                                if ("object" !== typeof e.pushMsg) throw TypeError(".com.WsMsg.pushMsg: object expected");
                                t.pushMsg = c.com.push.PushMsg.fromObject(e.pushMsg)
                            }
                            if (null != e.nftInboxMsg) {
                                if ("object" !== typeof e.nftInboxMsg) throw TypeError(".com.WsMsg.nftInboxMsg: object expected");
                                t.nftInboxMsg = c.com.nft.NftInboxMsg.fromObject(e.nftInboxMsg)
                            }
                            if (null != e.assetRateMsg) {
                                if ("object" !== typeof e.assetRateMsg) throw TypeError(".com.WsMsg.assetRateMsg: object expected");
                                t.assetRateMsg = c.com.asset.AssetRateMsg.fromObject(e.assetRateMsg)
                            }
                            if (null != e.assetPushMsg) {
                                if ("object" !== typeof e.assetPushMsg) throw TypeError(".com.WsMsg.assetPushMsg: object expected");
                                t.assetPushMsg = c.com.asset.AssetPushMsg.fromObject(e.assetPushMsg)
                            }
                            if (null != e.fundingBalanceMsg) {
                                if ("object" !== typeof e.fundingBalanceMsg) throw TypeError(".com.WsMsg.fundingBalanceMsg: object expected");
                                t.fundingBalanceMsg = c.com.asset.FundingBalanceMsg.fromObject(e.fundingBalanceMsg)
                            }
                            if (null != e.txStatusEventMsg) {
                                if ("object" !== typeof e.txStatusEventMsg) throw TypeError(".com.WsMsg.txStatusEventMsg: object expected");
                                t.txStatusEventMsg = c.com.web3.TxStatusEventMsg.fromObject(e.txStatusEventMsg)
                            }
                            return t
                        }, t.toObject = function(e, t) {
                            t || (t = {});
                            var r = {};
                            if (t.defaults)
                                if (r.channel = "", a.Long) {
                                    var n = new a.Long(0, 0, !1);
                                    r.sourceTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                } else r.sourceTime = t.longs === String ? "0" : 0;
                            return null != e.channel && e.hasOwnProperty("channel") && (r.channel = e.channel), null != e.sourceTime && e.hasOwnProperty("sourceTime") && ("number" === typeof e.sourceTime ? r.sourceTime = t.longs === String ? String(e.sourceTime) : e.sourceTime : r.sourceTime = t.longs === String ? a.Long.prototype.toString.call(e.sourceTime) : t.longs === Number ? new a.LongBits(e.sourceTime.low >>> 0, e.sourceTime.high >>> 0).toNumber() : e.sourceTime), null != e.wsResp && e.hasOwnProperty("wsResp") && (r.wsResp = c.com.WsResp.toObject(e.wsResp, t), t.oneofs && (r.body = "wsResp")), null != e.trivialMsg && e.hasOwnProperty("trivialMsg") && (r.trivialMsg = c.com.market.TrivialMsg.toObject(e.trivialMsg, t), t.oneofs && (r.body = "trivialMsg")), null != e.exchangeRateMsg && e.hasOwnProperty("exchangeRateMsg") && (r.exchangeRateMsg = c.com.market.ExchangeRateMsg.toObject(e.exchangeRateMsg, t), t.oneofs && (r.body = "exchangeRateMsg")), null != e.inboxMsg && e.hasOwnProperty("inboxMsg") && (r.inboxMsg = c.com.inbox.InboxMsg.toObject(e.inboxMsg, t), t.oneofs && (r.body = "inboxMsg")), null != e.c2cQuotePriceMsg && e.hasOwnProperty("c2cQuotePriceMsg") && (r.c2cQuotePriceMsg = c.com.market.C2cQuotePriceMsg.toObject(e.c2cQuotePriceMsg, t), t.oneofs && (r.body = "c2cQuotePriceMsg")), null != e.inboxNotificationMsg && e.hasOwnProperty("inboxNotificationMsg") && (r.inboxNotificationMsg = c.com.inbox.InboxNotificationMsg.toObject(e.inboxNotificationMsg, t), t.oneofs && (r.body = "inboxNotificationMsg")), null != e.coinPriceMsg && e.hasOwnProperty("coinPriceMsg") && (r.coinPriceMsg = c.com.market.CoinPriceMsg.toObject(e.coinPriceMsg, t), t.oneofs && (r.body = "coinPriceMsg")), null != e.c2cAllQuotePriceMsg && e.hasOwnProperty("c2cAllQuotePriceMsg") && (r.c2cAllQuotePriceMsg = c.com.market.C2cAllQuotePriceMsg.toObject(e.c2cAllQuotePriceMsg, t), t.oneofs && (r.body = "c2cAllQuotePriceMsg")), null != e.c2cKlineMsg && e.hasOwnProperty("c2cKlineMsg") && (r.c2cKlineMsg = c.com.market.C2cKlineMsg.toObject(e.c2cKlineMsg, t), t.oneofs && (r.body = "c2cKlineMsg")), null != e.emergencyBroadcastMsg && e.hasOwnProperty("emergencyBroadcastMsg") && (r.emergencyBroadcastMsg = c.com.market.EmergencyBroadcastMsg.toObject(e.emergencyBroadcastMsg, t), t.oneofs && (r.body = "emergencyBroadcastMsg")), null != e.announcementBroadcastMsg && e.hasOwnProperty("announcementBroadcastMsg") && (r.announcementBroadcastMsg = c.com.market.AnnouncementBroadcastMsg.toObject(e.announcementBroadcastMsg, t), t.oneofs && (r.body = "announcementBroadcastMsg")), null != e.earnIndexMsg && e.hasOwnProperty("earnIndexMsg") && (r.earnIndexMsg = c.com.earn.EarnIndexMsg.toObject(e.earnIndexMsg, t), t.oneofs && (r.body = "earnIndexMsg")), null != e.pushMsg && e.hasOwnProperty("pushMsg") && (r.pushMsg = c.com.push.PushMsg.toObject(e.pushMsg, t), t.oneofs && (r.body = "pushMsg")), null != e.nftInboxMsg && e.hasOwnProperty("nftInboxMsg") && (r.nftInboxMsg = c.com.nft.NftInboxMsg.toObject(e.nftInboxMsg, t), t.oneofs && (r.body = "nftInboxMsg")), null != e.assetRateMsg && e.hasOwnProperty("assetRateMsg") && (r.assetRateMsg = c.com.asset.AssetRateMsg.toObject(e.assetRateMsg, t), t.oneofs && (r.body = "assetRateMsg")), null != e.assetPushMsg && e.hasOwnProperty("assetPushMsg") && (r.assetPushMsg = c.com.asset.AssetPushMsg.toObject(e.assetPushMsg, t), t.oneofs && (r.body = "assetPushMsg")), null != e.fundingBalanceMsg && e.hasOwnProperty("fundingBalanceMsg") && (r.fundingBalanceMsg = c.com.asset.FundingBalanceMsg.toObject(e.fundingBalanceMsg, t), t.oneofs && (r.body = "fundingBalanceMsg")), null != e.txStatusEventMsg && e.hasOwnProperty("txStatusEventMsg") && (r.txStatusEventMsg = c.com.web3.TxStatusEventMsg.toObject(e.txStatusEventMsg, t), t.oneofs && (r.body = "txStatusEventMsg")), r
                        }, t.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions)
                        }, t
                    }(), e.WsResp = function() {
                        var e, t = function(e) {
                            if (e)
                                for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                        };
                        return t.prototype.wsReqId = "", t.prototype.respTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, t.prototype.reqAction = 1, t.prototype.respError = 1, t.prototype.errorCode = 0, t.prototype.errorMsg = "", t.prototype.resp = "", t.prototype.trivialResp = null, t.prototype.balanceValuationResp = null, t.prototype.kycStatusResp = null, t.prototype.capitalConfigResp = null, t.prototype.getSelectorResp = null, t.prototype.getSubSelectorResp = null, t.prototype.isolatedMarginAccountResp = null, t.prototype.getAccountUserConfigResp = null, t.prototype.getAssetPortfolioResp = null, t.prototype.walletBalanceResp = null, t.prototype.getBuyAndSellSelectorResp = null, t.prototype.getBuyAndSellSubSelectorResp = null, t.prototype.getOpenGridsResp = null, t.prototype.getOrderConfirmationResp = null, t.prototype.getUserCommissionResp = null, t.prototype.inboxMsgReadResp = null, t.prototype.inboxMsgResp = null, t.prototype.inboxUnReadResp = null, t.prototype.faceSdkVerifyResp = null, t.prototype.buyRedesignQueryCryptoListResp = null, t.prototype.buyRedesignQueryFiatListResp = null, t.prototype.buyRedesignQueryCryptoResp = null, t.prototype.otcGetQuoteResp = null, t.prototype.faceRecognitionResp = null, Object.defineProperty(t.prototype, "body", {
                            get: a.oneOfGetter(e = ["resp", "trivialResp", "balanceValuationResp", "kycStatusResp", "capitalConfigResp", "getSelectorResp", "getSubSelectorResp", "isolatedMarginAccountResp", "getAccountUserConfigResp", "getAssetPortfolioResp", "walletBalanceResp", "getBuyAndSellSelectorResp", "getBuyAndSellSubSelectorResp", "getOpenGridsResp", "getOrderConfirmationResp", "getUserCommissionResp", "inboxMsgReadResp", "inboxMsgResp", "inboxUnReadResp", "faceSdkVerifyResp", "buyRedesignQueryCryptoListResp", "buyRedesignQueryFiatListResp", "buyRedesignQueryCryptoResp", "otcGetQuoteResp", "faceRecognitionResp"]),
                            set: a.oneOfSetter(e)
                        }), t.create = function(e) {
                            return new t(e)
                        }, t.encode = function(e, t) {
                            return t || (t = s.create()), t.uint32(10).string(e.wsReqId), t.uint32(16).int64(e.respTime), t.uint32(24).int32(e.reqAction), null != e.respError && Object.hasOwnProperty.call(e, "respError") && t.uint32(32).int32(e.respError), null != e.errorCode && Object.hasOwnProperty.call(e, "errorCode") && t.uint32(40).int32(e.errorCode), null != e.errorMsg && Object.hasOwnProperty.call(e, "errorMsg") && t.uint32(50).string(e.errorMsg), null != e.resp && Object.hasOwnProperty.call(e, "resp") && t.uint32(802).string(e.resp), null != e.trivialResp && Object.hasOwnProperty.call(e, "trivialResp") && c.com.market.TrivialResp.encode(e.trivialResp, t.uint32(810).fork()).ldelim(), null != e.balanceValuationResp && Object.hasOwnProperty.call(e, "balanceValuationResp") && c.com.market.BalanceValuationResp.encode(e.balanceValuationResp, t.uint32(818).fork()).ldelim(), null != e.kycStatusResp && Object.hasOwnProperty.call(e, "kycStatusResp") && c.com.market.KycStatusResp.encode(e.kycStatusResp, t.uint32(826).fork()).ldelim(), null != e.capitalConfigResp && Object.hasOwnProperty.call(e, "capitalConfigResp") && c.com.market.CapitalConfigResp.encode(e.capitalConfigResp, t.uint32(834).fork()).ldelim(), null != e.getSelectorResp && Object.hasOwnProperty.call(e, "getSelectorResp") && c.com.market.GetSelectorResp.encode(e.getSelectorResp, t.uint32(842).fork()).ldelim(), null != e.getSubSelectorResp && Object.hasOwnProperty.call(e, "getSubSelectorResp") && c.com.market.GetSubSelectorResp.encode(e.getSubSelectorResp, t.uint32(850).fork()).ldelim(), null != e.isolatedMarginAccountResp && Object.hasOwnProperty.call(e, "isolatedMarginAccountResp") && c.com.market.IsolatedMarginAccountResp.encode(e.isolatedMarginAccountResp, t.uint32(858).fork()).ldelim(), null != e.getAccountUserConfigResp && Object.hasOwnProperty.call(e, "getAccountUserConfigResp") && c.com.market.GetAccountUserConfigResp.encode(e.getAccountUserConfigResp, t.uint32(866).fork()).ldelim(), null != e.getAssetPortfolioResp && Object.hasOwnProperty.call(e, "getAssetPortfolioResp") && c.com.market.GetAssetPortfolioResp.encode(e.getAssetPortfolioResp, t.uint32(874).fork()).ldelim(), null != e.walletBalanceResp && Object.hasOwnProperty.call(e, "walletBalanceResp") && c.com.market.WalletBalanceResp.encode(e.walletBalanceResp, t.uint32(882).fork()).ldelim(), null != e.getBuyAndSellSelectorResp && Object.hasOwnProperty.call(e, "getBuyAndSellSelectorResp") && c.com.market.GetBuyAndSellSelectorResp.encode(e.getBuyAndSellSelectorResp, t.uint32(890).fork()).ldelim(), null != e.getBuyAndSellSubSelectorResp && Object.hasOwnProperty.call(e, "getBuyAndSellSubSelectorResp") && c.com.market.GetBuyAndSellSubSelectorResp.encode(e.getBuyAndSellSubSelectorResp, t.uint32(898).fork()).ldelim(), null != e.getOpenGridsResp && Object.hasOwnProperty.call(e, "getOpenGridsResp") && c.com.futures.GetOpenGridsResp.encode(e.getOpenGridsResp, t.uint32(906).fork()).ldelim(), null != e.getOrderConfirmationResp && Object.hasOwnProperty.call(e, "getOrderConfirmationResp") && c.com.futures.GetOrderConfirmationResp.encode(e.getOrderConfirmationResp, t.uint32(914).fork()).ldelim(), null != e.getUserCommissionResp && Object.hasOwnProperty.call(e, "getUserCommissionResp") && c.com.futures.GetUserCommissionResp.encode(e.getUserCommissionResp, t.uint32(922).fork()).ldelim(), null != e.inboxMsgReadResp && Object.hasOwnProperty.call(e, "inboxMsgReadResp") && c.com.inbox.InboxMsgReadResp.encode(e.inboxMsgReadResp, t.uint32(930).fork()).ldelim(), null != e.inboxMsgResp && Object.hasOwnProperty.call(e, "inboxMsgResp") && c.com.inbox.InboxMsgResp.encode(e.inboxMsgResp, t.uint32(938).fork()).ldelim(), null != e.inboxUnReadResp && Object.hasOwnProperty.call(e, "inboxUnReadResp") && c.com.inbox.InboxUnReadResp.encode(e.inboxUnReadResp, t.uint32(946).fork()).ldelim(), null != e.faceSdkVerifyResp && Object.hasOwnProperty.call(e, "faceSdkVerifyResp") && c.com.market.FaceSdkVerifyResp.encode(e.faceSdkVerifyResp, t.uint32(954).fork()).ldelim(), null != e.buyRedesignQueryCryptoListResp && Object.hasOwnProperty.call(e, "buyRedesignQueryCryptoListResp") && c.com.market.BuyRedesignQueryCryptoListResp.encode(e.buyRedesignQueryCryptoListResp, t.uint32(962).fork()).ldelim(), null != e.buyRedesignQueryFiatListResp && Object.hasOwnProperty.call(e, "buyRedesignQueryFiatListResp") && c.com.market.BuyRedesignQueryFiatListResp.encode(e.buyRedesignQueryFiatListResp, t.uint32(970).fork()).ldelim(), null != e.buyRedesignQueryCryptoResp && Object.hasOwnProperty.call(e, "buyRedesignQueryCryptoResp") && c.com.market.BuyRedesignQueryCryptoResp.encode(e.buyRedesignQueryCryptoResp, t.uint32(978).fork()).ldelim(), null != e.otcGetQuoteResp && Object.hasOwnProperty.call(e, "otcGetQuoteResp") && c.com.market.OtcGetQuoteResp.encode(e.otcGetQuoteResp, t.uint32(986).fork()).ldelim(), null != e.faceRecognitionResp && Object.hasOwnProperty.call(e, "faceRecognitionResp") && c.com.market.FaceRecognitionResp.encode(e.faceRecognitionResp, t.uint32(1042).fork()).ldelim(), t
                        }, t.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, t.decode = function(e, t) {
                            (0, n._)(e, o) || (e = o.create(e));
                            for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.WsResp; e.pos < r;) {
                                var s = e.uint32();
                                switch (s >>> 3) {
                                    case 1:
                                        i.wsReqId = e.string();
                                        break;
                                    case 2:
                                        i.respTime = e.int64();
                                        break;
                                    case 3:
                                        i.reqAction = e.int32();
                                        break;
                                    case 4:
                                        i.respError = e.int32();
                                        break;
                                    case 5:
                                        i.errorCode = e.int32();
                                        break;
                                    case 6:
                                        i.errorMsg = e.string();
                                        break;
                                    case 100:
                                        i.resp = e.string();
                                        break;
                                    case 101:
                                        i.trivialResp = c.com.market.TrivialResp.decode(e, e.uint32());
                                        break;
                                    case 102:
                                        i.balanceValuationResp = c.com.market.BalanceValuationResp.decode(e, e.uint32());
                                        break;
                                    case 103:
                                        i.kycStatusResp = c.com.market.KycStatusResp.decode(e, e.uint32());
                                        break;
                                    case 104:
                                        i.capitalConfigResp = c.com.market.CapitalConfigResp.decode(e, e.uint32());
                                        break;
                                    case 105:
                                        i.getSelectorResp = c.com.market.GetSelectorResp.decode(e, e.uint32());
                                        break;
                                    case 106:
                                        i.getSubSelectorResp = c.com.market.GetSubSelectorResp.decode(e, e.uint32());
                                        break;
                                    case 107:
                                        i.isolatedMarginAccountResp = c.com.market.IsolatedMarginAccountResp.decode(e, e.uint32());
                                        break;
                                    case 108:
                                        i.getAccountUserConfigResp = c.com.market.GetAccountUserConfigResp.decode(e, e.uint32());
                                        break;
                                    case 109:
                                        i.getAssetPortfolioResp = c.com.market.GetAssetPortfolioResp.decode(e, e.uint32());
                                        break;
                                    case 110:
                                        i.walletBalanceResp = c.com.market.WalletBalanceResp.decode(e, e.uint32());
                                        break;
                                    case 111:
                                        i.getBuyAndSellSelectorResp = c.com.market.GetBuyAndSellSelectorResp.decode(e, e.uint32());
                                        break;
                                    case 112:
                                        i.getBuyAndSellSubSelectorResp = c.com.market.GetBuyAndSellSubSelectorResp.decode(e, e.uint32());
                                        break;
                                    case 113:
                                        i.getOpenGridsResp = c.com.futures.GetOpenGridsResp.decode(e, e.uint32());
                                        break;
                                    case 114:
                                        i.getOrderConfirmationResp = c.com.futures.GetOrderConfirmationResp.decode(e, e.uint32());
                                        break;
                                    case 115:
                                        i.getUserCommissionResp = c.com.futures.GetUserCommissionResp.decode(e, e.uint32());
                                        break;
                                    case 116:
                                        i.inboxMsgReadResp = c.com.inbox.InboxMsgReadResp.decode(e, e.uint32());
                                        break;
                                    case 117:
                                        i.inboxMsgResp = c.com.inbox.InboxMsgResp.decode(e, e.uint32());
                                        break;
                                    case 118:
                                        i.inboxUnReadResp = c.com.inbox.InboxUnReadResp.decode(e, e.uint32());
                                        break;
                                    case 119:
                                        i.faceSdkVerifyResp = c.com.market.FaceSdkVerifyResp.decode(e, e.uint32());
                                        break;
                                    case 120:
                                        i.buyRedesignQueryCryptoListResp = c.com.market.BuyRedesignQueryCryptoListResp.decode(e, e.uint32());
                                        break;
                                    case 121:
                                        i.buyRedesignQueryFiatListResp = c.com.market.BuyRedesignQueryFiatListResp.decode(e, e.uint32());
                                        break;
                                    case 122:
                                        i.buyRedesignQueryCryptoResp = c.com.market.BuyRedesignQueryCryptoResp.decode(e, e.uint32());
                                        break;
                                    case 123:
                                        i.otcGetQuoteResp = c.com.market.OtcGetQuoteResp.decode(e, e.uint32());
                                        break;
                                    case 130:
                                        i.faceRecognitionResp = c.com.market.FaceRecognitionResp.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & s)
                                }
                            }
                            if (!i.hasOwnProperty("wsReqId")) throw a.ProtocolError("missing required 'wsReqId'", {
                                instance: i
                            });
                            if (!i.hasOwnProperty("respTime")) throw a.ProtocolError("missing required 'respTime'", {
                                instance: i
                            });
                            if (!i.hasOwnProperty("reqAction")) throw a.ProtocolError("missing required 'reqAction'", {
                                instance: i
                            });
                            return i
                        }, t.decodeDelimited = function(e) {
                            return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                        }, t.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (!a.isString(e.wsReqId)) return "wsReqId: string expected";
                            if (!a.isInteger(e.respTime) && !(e.respTime && a.isInteger(e.respTime.low) && a.isInteger(e.respTime.high))) return "respTime: integer|Long expected";
                            switch (e.reqAction) {
                                default: return "reqAction: enum value expected";
                                case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 11:
                                        case 12:
                            }
                            if (null != e.respError && e.hasOwnProperty("respError")) switch (e.respError) {
                                default: return "respError: enum value expected";
                                case 1:
                                        case 2:
                                        case 3:
                            }
                            if (null != e.errorCode && e.hasOwnProperty("errorCode") && !a.isInteger(e.errorCode)) return "errorCode: integer expected";
                            if (null != e.errorMsg && e.hasOwnProperty("errorMsg") && !a.isString(e.errorMsg)) return "errorMsg: string expected";
                            if (null != e.resp && e.hasOwnProperty("resp") && (t.body = 1, !a.isString(e.resp))) return "resp: string expected";
                            if (null != e.trivialResp && e.hasOwnProperty("trivialResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var r = c.com.market.TrivialResp.verify(e.trivialResp);
                                if (r) return "trivialResp." + r
                            }
                            if (null != e.balanceValuationResp && e.hasOwnProperty("balanceValuationResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var n = c.com.market.BalanceValuationResp.verify(e.balanceValuationResp);
                                if (n) return "balanceValuationResp." + n
                            }
                            if (null != e.kycStatusResp && e.hasOwnProperty("kycStatusResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var i = c.com.market.KycStatusResp.verify(e.kycStatusResp);
                                if (i) return "kycStatusResp." + i
                            }
                            if (null != e.capitalConfigResp && e.hasOwnProperty("capitalConfigResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var o = c.com.market.CapitalConfigResp.verify(e.capitalConfigResp);
                                if (o) return "capitalConfigResp." + o
                            }
                            if (null != e.getSelectorResp && e.hasOwnProperty("getSelectorResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var s = c.com.market.GetSelectorResp.verify(e.getSelectorResp);
                                if (s) return "getSelectorResp." + s
                            }
                            if (null != e.getSubSelectorResp && e.hasOwnProperty("getSubSelectorResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var l = c.com.market.GetSubSelectorResp.verify(e.getSubSelectorResp);
                                if (l) return "getSubSelectorResp." + l
                            }
                            if (null != e.isolatedMarginAccountResp && e.hasOwnProperty("isolatedMarginAccountResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var u = c.com.market.IsolatedMarginAccountResp.verify(e.isolatedMarginAccountResp);
                                if (u) return "isolatedMarginAccountResp." + u
                            }
                            if (null != e.getAccountUserConfigResp && e.hasOwnProperty("getAccountUserConfigResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var p = c.com.market.GetAccountUserConfigResp.verify(e.getAccountUserConfigResp);
                                if (p) return "getAccountUserConfigResp." + p
                            }
                            if (null != e.getAssetPortfolioResp && e.hasOwnProperty("getAssetPortfolioResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var d = c.com.market.GetAssetPortfolioResp.verify(e.getAssetPortfolioResp);
                                if (d) return "getAssetPortfolioResp." + d
                            }
                            if (null != e.walletBalanceResp && e.hasOwnProperty("walletBalanceResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var m = c.com.market.WalletBalanceResp.verify(e.walletBalanceResp);
                                if (m) return "walletBalanceResp." + m
                            }
                            if (null != e.getBuyAndSellSelectorResp && e.hasOwnProperty("getBuyAndSellSelectorResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var g = c.com.market.GetBuyAndSellSelectorResp.verify(e.getBuyAndSellSelectorResp);
                                if (g) return "getBuyAndSellSelectorResp." + g
                            }
                            if (null != e.getBuyAndSellSubSelectorResp && e.hasOwnProperty("getBuyAndSellSubSelectorResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var y = c.com.market.GetBuyAndSellSubSelectorResp.verify(e.getBuyAndSellSubSelectorResp);
                                if (y) return "getBuyAndSellSubSelectorResp." + y
                            }
                            if (null != e.getOpenGridsResp && e.hasOwnProperty("getOpenGridsResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var f = c.com.futures.GetOpenGridsResp.verify(e.getOpenGridsResp);
                                if (f) return "getOpenGridsResp." + f
                            }
                            if (null != e.getOrderConfirmationResp && e.hasOwnProperty("getOrderConfirmationResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var b = c.com.futures.GetOrderConfirmationResp.verify(e.getOrderConfirmationResp);
                                if (b) return "getOrderConfirmationResp." + b
                            }
                            if (null != e.getUserCommissionResp && e.hasOwnProperty("getUserCommissionResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var h = c.com.futures.GetUserCommissionResp.verify(e.getUserCommissionResp);
                                if (h) return "getUserCommissionResp." + h
                            }
                            if (null != e.inboxMsgReadResp && e.hasOwnProperty("inboxMsgReadResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var w = c.com.inbox.InboxMsgReadResp.verify(e.inboxMsgReadResp);
                                if (w) return "inboxMsgReadResp." + w
                            }
                            if (null != e.inboxMsgResp && e.hasOwnProperty("inboxMsgResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var O = c.com.inbox.InboxMsgResp.verify(e.inboxMsgResp);
                                if (O) return "inboxMsgResp." + O
                            }
                            if (null != e.inboxUnReadResp && e.hasOwnProperty("inboxUnReadResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var S = c.com.inbox.InboxUnReadResp.verify(e.inboxUnReadResp);
                                if (S) return "inboxUnReadResp." + S
                            }
                            if (null != e.faceSdkVerifyResp && e.hasOwnProperty("faceSdkVerifyResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var R = c.com.market.FaceSdkVerifyResp.verify(e.faceSdkVerifyResp);
                                if (R) return "faceSdkVerifyResp." + R
                            }
                            if (null != e.buyRedesignQueryCryptoListResp && e.hasOwnProperty("buyRedesignQueryCryptoListResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var T = c.com.market.BuyRedesignQueryCryptoListResp.verify(e.buyRedesignQueryCryptoListResp);
                                if (T) return "buyRedesignQueryCryptoListResp." + T
                            }
                            if (null != e.buyRedesignQueryFiatListResp && e.hasOwnProperty("buyRedesignQueryFiatListResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var P = c.com.market.BuyRedesignQueryFiatListResp.verify(e.buyRedesignQueryFiatListResp);
                                if (P) return "buyRedesignQueryFiatListResp." + P
                            }
                            if (null != e.buyRedesignQueryCryptoResp && e.hasOwnProperty("buyRedesignQueryCryptoResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var k = c.com.market.BuyRedesignQueryCryptoResp.verify(e.buyRedesignQueryCryptoResp);
                                if (k) return "buyRedesignQueryCryptoResp." + k
                            }
                            if (null != e.otcGetQuoteResp && e.hasOwnProperty("otcGetQuoteResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var x = c.com.market.OtcGetQuoteResp.verify(e.otcGetQuoteResp);
                                if (x) return "otcGetQuoteResp." + x
                            }
                            if (null != e.faceRecognitionResp && e.hasOwnProperty("faceRecognitionResp")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var v = c.com.market.FaceRecognitionResp.verify(e.faceRecognitionResp);
                                if (v) return "faceRecognitionResp." + v
                            }
                            return null
                        }, t.fromObject = function(e) {
                            if ((0, n._)(e, c.com.WsResp)) return e;
                            var t = new c.com.WsResp;
                            switch (null != e.wsReqId && (t.wsReqId = String(e.wsReqId)), null != e.respTime && (a.Long ? (t.respTime = a.Long.fromValue(e.respTime)).unsigned = !1 : "string" === typeof e.respTime ? t.respTime = parseInt(e.respTime, 10) : "number" === typeof e.respTime ? t.respTime = e.respTime : "object" === typeof e.respTime && (t.respTime = new a.LongBits(e.respTime.low >>> 0, e.respTime.high >>> 0).toNumber())), e.reqAction) {
                                case "SERVICE_REQ":
                                case 1:
                                    t.reqAction = 1;
                                    break;
                                case "SUBSCRIBE":
                                case 2:
                                    t.reqAction = 2;
                                    break;
                                case "UNSUBSCRIBE":
                                case 3:
                                    t.reqAction = 3;
                                    break;
                                case "LIST_CHANNELS":
                                case 4:
                                    t.reqAction = 4;
                                    break;
                                case "REFRESH_TOKEN":
                                case 5:
                                    t.reqAction = 5;
                                    break;
                                case "LAST_TOKEN_TIME":
                                case 6:
                                    t.reqAction = 6;
                                    break;
                                case "CLEAR_TOKEN":
                                case 7:
                                    t.reqAction = 7;
                                    break;
                                case "PUBLIC_SERVICE_REQ":
                                case 8:
                                    t.reqAction = 8;
                                    break;
                                case "FRIENDLY_SERVICE_REQ":
                                case 9:
                                    t.reqAction = 9;
                                    break;
                                case "PING":
                                case 10:
                                    t.reqAction = 10;
                                    break;
                                case "REFRESH_UUID":
                                case 11:
                                    t.reqAction = 11;
                                    break;
                                case "REFRESH_LANG":
                                case 12:
                                    t.reqAction = 12
                            }
                            switch (e.respError) {
                                case "INVALID_TOKEN":
                                case 1:
                                    t.respError = 1;
                                    break;
                                case "INVALID_REQUEST":
                                case 2:
                                    t.respError = 2;
                                    break;
                                case "SERVICE_ERROR":
                                case 3:
                                    t.respError = 3
                            }
                            if (null != e.errorCode && (t.errorCode = 0 | e.errorCode), null != e.errorMsg && (t.errorMsg = String(e.errorMsg)), null != e.resp && (t.resp = String(e.resp)), null != e.trivialResp) {
                                if ("object" !== typeof e.trivialResp) throw TypeError(".com.WsResp.trivialResp: object expected");
                                t.trivialResp = c.com.market.TrivialResp.fromObject(e.trivialResp)
                            }
                            if (null != e.balanceValuationResp) {
                                if ("object" !== typeof e.balanceValuationResp) throw TypeError(".com.WsResp.balanceValuationResp: object expected");
                                t.balanceValuationResp = c.com.market.BalanceValuationResp.fromObject(e.balanceValuationResp)
                            }
                            if (null != e.kycStatusResp) {
                                if ("object" !== typeof e.kycStatusResp) throw TypeError(".com.WsResp.kycStatusResp: object expected");
                                t.kycStatusResp = c.com.market.KycStatusResp.fromObject(e.kycStatusResp)
                            }
                            if (null != e.capitalConfigResp) {
                                if ("object" !== typeof e.capitalConfigResp) throw TypeError(".com.WsResp.capitalConfigResp: object expected");
                                t.capitalConfigResp = c.com.market.CapitalConfigResp.fromObject(e.capitalConfigResp)
                            }
                            if (null != e.getSelectorResp) {
                                if ("object" !== typeof e.getSelectorResp) throw TypeError(".com.WsResp.getSelectorResp: object expected");
                                t.getSelectorResp = c.com.market.GetSelectorResp.fromObject(e.getSelectorResp)
                            }
                            if (null != e.getSubSelectorResp) {
                                if ("object" !== typeof e.getSubSelectorResp) throw TypeError(".com.WsResp.getSubSelectorResp: object expected");
                                t.getSubSelectorResp = c.com.market.GetSubSelectorResp.fromObject(e.getSubSelectorResp)
                            }
                            if (null != e.isolatedMarginAccountResp) {
                                if ("object" !== typeof e.isolatedMarginAccountResp) throw TypeError(".com.WsResp.isolatedMarginAccountResp: object expected");
                                t.isolatedMarginAccountResp = c.com.market.IsolatedMarginAccountResp.fromObject(e.isolatedMarginAccountResp)
                            }
                            if (null != e.getAccountUserConfigResp) {
                                if ("object" !== typeof e.getAccountUserConfigResp) throw TypeError(".com.WsResp.getAccountUserConfigResp: object expected");
                                t.getAccountUserConfigResp = c.com.market.GetAccountUserConfigResp.fromObject(e.getAccountUserConfigResp)
                            }
                            if (null != e.getAssetPortfolioResp) {
                                if ("object" !== typeof e.getAssetPortfolioResp) throw TypeError(".com.WsResp.getAssetPortfolioResp: object expected");
                                t.getAssetPortfolioResp = c.com.market.GetAssetPortfolioResp.fromObject(e.getAssetPortfolioResp)
                            }
                            if (null != e.walletBalanceResp) {
                                if ("object" !== typeof e.walletBalanceResp) throw TypeError(".com.WsResp.walletBalanceResp: object expected");
                                t.walletBalanceResp = c.com.market.WalletBalanceResp.fromObject(e.walletBalanceResp)
                            }
                            if (null != e.getBuyAndSellSelectorResp) {
                                if ("object" !== typeof e.getBuyAndSellSelectorResp) throw TypeError(".com.WsResp.getBuyAndSellSelectorResp: object expected");
                                t.getBuyAndSellSelectorResp = c.com.market.GetBuyAndSellSelectorResp.fromObject(e.getBuyAndSellSelectorResp)
                            }
                            if (null != e.getBuyAndSellSubSelectorResp) {
                                if ("object" !== typeof e.getBuyAndSellSubSelectorResp) throw TypeError(".com.WsResp.getBuyAndSellSubSelectorResp: object expected");
                                t.getBuyAndSellSubSelectorResp = c.com.market.GetBuyAndSellSubSelectorResp.fromObject(e.getBuyAndSellSubSelectorResp)
                            }
                            if (null != e.getOpenGridsResp) {
                                if ("object" !== typeof e.getOpenGridsResp) throw TypeError(".com.WsResp.getOpenGridsResp: object expected");
                                t.getOpenGridsResp = c.com.futures.GetOpenGridsResp.fromObject(e.getOpenGridsResp)
                            }
                            if (null != e.getOrderConfirmationResp) {
                                if ("object" !== typeof e.getOrderConfirmationResp) throw TypeError(".com.WsResp.getOrderConfirmationResp: object expected");
                                t.getOrderConfirmationResp = c.com.futures.GetOrderConfirmationResp.fromObject(e.getOrderConfirmationResp)
                            }
                            if (null != e.getUserCommissionResp) {
                                if ("object" !== typeof e.getUserCommissionResp) throw TypeError(".com.WsResp.getUserCommissionResp: object expected");
                                t.getUserCommissionResp = c.com.futures.GetUserCommissionResp.fromObject(e.getUserCommissionResp)
                            }
                            if (null != e.inboxMsgReadResp) {
                                if ("object" !== typeof e.inboxMsgReadResp) throw TypeError(".com.WsResp.inboxMsgReadResp: object expected");
                                t.inboxMsgReadResp = c.com.inbox.InboxMsgReadResp.fromObject(e.inboxMsgReadResp)
                            }
                            if (null != e.inboxMsgResp) {
                                if ("object" !== typeof e.inboxMsgResp) throw TypeError(".com.WsResp.inboxMsgResp: object expected");
                                t.inboxMsgResp = c.com.inbox.InboxMsgResp.fromObject(e.inboxMsgResp)
                            }
                            if (null != e.inboxUnReadResp) {
                                if ("object" !== typeof e.inboxUnReadResp) throw TypeError(".com.WsResp.inboxUnReadResp: object expected");
                                t.inboxUnReadResp = c.com.inbox.InboxUnReadResp.fromObject(e.inboxUnReadResp)
                            }
                            if (null != e.faceSdkVerifyResp) {
                                if ("object" !== typeof e.faceSdkVerifyResp) throw TypeError(".com.WsResp.faceSdkVerifyResp: object expected");
                                t.faceSdkVerifyResp = c.com.market.FaceSdkVerifyResp.fromObject(e.faceSdkVerifyResp)
                            }
                            if (null != e.buyRedesignQueryCryptoListResp) {
                                if ("object" !== typeof e.buyRedesignQueryCryptoListResp) throw TypeError(".com.WsResp.buyRedesignQueryCryptoListResp: object expected");
                                t.buyRedesignQueryCryptoListResp = c.com.market.BuyRedesignQueryCryptoListResp.fromObject(e.buyRedesignQueryCryptoListResp)
                            }
                            if (null != e.buyRedesignQueryFiatListResp) {
                                if ("object" !== typeof e.buyRedesignQueryFiatListResp) throw TypeError(".com.WsResp.buyRedesignQueryFiatListResp: object expected");
                                t.buyRedesignQueryFiatListResp = c.com.market.BuyRedesignQueryFiatListResp.fromObject(e.buyRedesignQueryFiatListResp)
                            }
                            if (null != e.buyRedesignQueryCryptoResp) {
                                if ("object" !== typeof e.buyRedesignQueryCryptoResp) throw TypeError(".com.WsResp.buyRedesignQueryCryptoResp: object expected");
                                t.buyRedesignQueryCryptoResp = c.com.market.BuyRedesignQueryCryptoResp.fromObject(e.buyRedesignQueryCryptoResp)
                            }
                            if (null != e.otcGetQuoteResp) {
                                if ("object" !== typeof e.otcGetQuoteResp) throw TypeError(".com.WsResp.otcGetQuoteResp: object expected");
                                t.otcGetQuoteResp = c.com.market.OtcGetQuoteResp.fromObject(e.otcGetQuoteResp)
                            }
                            if (null != e.faceRecognitionResp) {
                                if ("object" !== typeof e.faceRecognitionResp) throw TypeError(".com.WsResp.faceRecognitionResp: object expected");
                                t.faceRecognitionResp = c.com.market.FaceRecognitionResp.fromObject(e.faceRecognitionResp)
                            }
                            return t
                        }, t.toObject = function(e, t) {
                            t || (t = {});
                            var r = {};
                            if (t.defaults) {
                                if (r.wsReqId = "", a.Long) {
                                    var n = new a.Long(0, 0, !1);
                                    r.respTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                } else r.respTime = t.longs === String ? "0" : 0;
                                r.reqAction = t.enums === String ? "SERVICE_REQ" : 1, r.respError = t.enums === String ? "INVALID_TOKEN" : 1, r.errorCode = 0, r.errorMsg = ""
                            }
                            return null != e.wsReqId && e.hasOwnProperty("wsReqId") && (r.wsReqId = e.wsReqId), null != e.respTime && e.hasOwnProperty("respTime") && ("number" === typeof e.respTime ? r.respTime = t.longs === String ? String(e.respTime) : e.respTime : r.respTime = t.longs === String ? a.Long.prototype.toString.call(e.respTime) : t.longs === Number ? new a.LongBits(e.respTime.low >>> 0, e.respTime.high >>> 0).toNumber() : e.respTime), null != e.reqAction && e.hasOwnProperty("reqAction") && (r.reqAction = t.enums === String ? c.com.WsReqAction[e.reqAction] : e.reqAction), null != e.respError && e.hasOwnProperty("respError") && (r.respError = t.enums === String ? c.com.WsRespError[e.respError] : e.respError), null != e.errorCode && e.hasOwnProperty("errorCode") && (r.errorCode = e.errorCode), null != e.errorMsg && e.hasOwnProperty("errorMsg") && (r.errorMsg = e.errorMsg), null != e.resp && e.hasOwnProperty("resp") && (r.resp = e.resp, t.oneofs && (r.body = "resp")), null != e.trivialResp && e.hasOwnProperty("trivialResp") && (r.trivialResp = c.com.market.TrivialResp.toObject(e.trivialResp, t), t.oneofs && (r.body = "trivialResp")), null != e.balanceValuationResp && e.hasOwnProperty("balanceValuationResp") && (r.balanceValuationResp = c.com.market.BalanceValuationResp.toObject(e.balanceValuationResp, t), t.oneofs && (r.body = "balanceValuationResp")), null != e.kycStatusResp && e.hasOwnProperty("kycStatusResp") && (r.kycStatusResp = c.com.market.KycStatusResp.toObject(e.kycStatusResp, t), t.oneofs && (r.body = "kycStatusResp")), null != e.capitalConfigResp && e.hasOwnProperty("capitalConfigResp") && (r.capitalConfigResp = c.com.market.CapitalConfigResp.toObject(e.capitalConfigResp, t), t.oneofs && (r.body = "capitalConfigResp")), null != e.getSelectorResp && e.hasOwnProperty("getSelectorResp") && (r.getSelectorResp = c.com.market.GetSelectorResp.toObject(e.getSelectorResp, t), t.oneofs && (r.body = "getSelectorResp")), null != e.getSubSelectorResp && e.hasOwnProperty("getSubSelectorResp") && (r.getSubSelectorResp = c.com.market.GetSubSelectorResp.toObject(e.getSubSelectorResp, t), t.oneofs && (r.body = "getSubSelectorResp")), null != e.isolatedMarginAccountResp && e.hasOwnProperty("isolatedMarginAccountResp") && (r.isolatedMarginAccountResp = c.com.market.IsolatedMarginAccountResp.toObject(e.isolatedMarginAccountResp, t), t.oneofs && (r.body = "isolatedMarginAccountResp")), null != e.getAccountUserConfigResp && e.hasOwnProperty("getAccountUserConfigResp") && (r.getAccountUserConfigResp = c.com.market.GetAccountUserConfigResp.toObject(e.getAccountUserConfigResp, t), t.oneofs && (r.body = "getAccountUserConfigResp")), null != e.getAssetPortfolioResp && e.hasOwnProperty("getAssetPortfolioResp") && (r.getAssetPortfolioResp = c.com.market.GetAssetPortfolioResp.toObject(e.getAssetPortfolioResp, t), t.oneofs && (r.body = "getAssetPortfolioResp")), null != e.walletBalanceResp && e.hasOwnProperty("walletBalanceResp") && (r.walletBalanceResp = c.com.market.WalletBalanceResp.toObject(e.walletBalanceResp, t), t.oneofs && (r.body = "walletBalanceResp")), null != e.getBuyAndSellSelectorResp && e.hasOwnProperty("getBuyAndSellSelectorResp") && (r.getBuyAndSellSelectorResp = c.com.market.GetBuyAndSellSelectorResp.toObject(e.getBuyAndSellSelectorResp, t), t.oneofs && (r.body = "getBuyAndSellSelectorResp")), null != e.getBuyAndSellSubSelectorResp && e.hasOwnProperty("getBuyAndSellSubSelectorResp") && (r.getBuyAndSellSubSelectorResp = c.com.market.GetBuyAndSellSubSelectorResp.toObject(e.getBuyAndSellSubSelectorResp, t), t.oneofs && (r.body = "getBuyAndSellSubSelectorResp")), null != e.getOpenGridsResp && e.hasOwnProperty("getOpenGridsResp") && (r.getOpenGridsResp = c.com.futures.GetOpenGridsResp.toObject(e.getOpenGridsResp, t), t.oneofs && (r.body = "getOpenGridsResp")), null != e.getOrderConfirmationResp && e.hasOwnProperty("getOrderConfirmationResp") && (r.getOrderConfirmationResp = c.com.futures.GetOrderConfirmationResp.toObject(e.getOrderConfirmationResp, t), t.oneofs && (r.body = "getOrderConfirmationResp")), null != e.getUserCommissionResp && e.hasOwnProperty("getUserCommissionResp") && (r.getUserCommissionResp = c.com.futures.GetUserCommissionResp.toObject(e.getUserCommissionResp, t), t.oneofs && (r.body = "getUserCommissionResp")), null != e.inboxMsgReadResp && e.hasOwnProperty("inboxMsgReadResp") && (r.inboxMsgReadResp = c.com.inbox.InboxMsgReadResp.toObject(e.inboxMsgReadResp, t), t.oneofs && (r.body = "inboxMsgReadResp")), null != e.inboxMsgResp && e.hasOwnProperty("inboxMsgResp") && (r.inboxMsgResp = c.com.inbox.InboxMsgResp.toObject(e.inboxMsgResp, t), t.oneofs && (r.body = "inboxMsgResp")), null != e.inboxUnReadResp && e.hasOwnProperty("inboxUnReadResp") && (r.inboxUnReadResp = c.com.inbox.InboxUnReadResp.toObject(e.inboxUnReadResp, t), t.oneofs && (r.body = "inboxUnReadResp")), null != e.faceSdkVerifyResp && e.hasOwnProperty("faceSdkVerifyResp") && (r.faceSdkVerifyResp = c.com.market.FaceSdkVerifyResp.toObject(e.faceSdkVerifyResp, t), t.oneofs && (r.body = "faceSdkVerifyResp")), null != e.buyRedesignQueryCryptoListResp && e.hasOwnProperty("buyRedesignQueryCryptoListResp") && (r.buyRedesignQueryCryptoListResp = c.com.market.BuyRedesignQueryCryptoListResp.toObject(e.buyRedesignQueryCryptoListResp, t), t.oneofs && (r.body = "buyRedesignQueryCryptoListResp")), null != e.buyRedesignQueryFiatListResp && e.hasOwnProperty("buyRedesignQueryFiatListResp") && (r.buyRedesignQueryFiatListResp = c.com.market.BuyRedesignQueryFiatListResp.toObject(e.buyRedesignQueryFiatListResp, t), t.oneofs && (r.body = "buyRedesignQueryFiatListResp")), null != e.buyRedesignQueryCryptoResp && e.hasOwnProperty("buyRedesignQueryCryptoResp") && (r.buyRedesignQueryCryptoResp = c.com.market.BuyRedesignQueryCryptoResp.toObject(e.buyRedesignQueryCryptoResp, t), t.oneofs && (r.body = "buyRedesignQueryCryptoResp")), null != e.otcGetQuoteResp && e.hasOwnProperty("otcGetQuoteResp") && (r.otcGetQuoteResp = c.com.market.OtcGetQuoteResp.toObject(e.otcGetQuoteResp, t), t.oneofs && (r.body = "otcGetQuoteResp")), null != e.faceRecognitionResp && e.hasOwnProperty("faceRecognitionResp") && (r.faceRecognitionResp = c.com.market.FaceRecognitionResp.toObject(e.faceRecognitionResp, t), t.oneofs && (r.body = "faceRecognitionResp")), r
                        }, t.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions)
                        }, t
                    }(), e.WsRespError = function() {
                        var e = {},
                            t = Object.create(e);
                        return t[e[1] = "INVALID_TOKEN"] = 1, t[e[2] = "INVALID_REQUEST"] = 2, t[e[3] = "SERVICE_ERROR"] = 3, t
                    }(), e.WsReq = function() {
                        var e, t = function(e) {
                            if (e)
                                for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                        };
                        return t.prototype.wsReqId = "", t.prototype.reqTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, t.prototype.reqAction = 1, t.prototype.service = "", t.prototype.tag = "", t.prototype.reqArgs = "", t.prototype.trivialReq = null, t.prototype.balanceValuationReq = null, t.prototype.kycStatusReq = null, t.prototype.capitalConfigReq = null, t.prototype.getSelectorReq = null, t.prototype.getSubSelectorReq = null, t.prototype.isolatedMarginAccountReq = null, t.prototype.getAccountUserConfigReq = null, t.prototype.getAssetPortfolioReq = null, t.prototype.walletBalanceReq = null, t.prototype.getBuyAndSellSelectorReq = null, t.prototype.getBuyAndSellSubSelectorReq = null, t.prototype.getOpenGridsReq = null, t.prototype.getOrderConfirmationReq = null, t.prototype.getUserCommissionReq = null, t.prototype.inboxMsgReadReq = null, t.prototype.inboxMsgReq = null, t.prototype.inboxUnReadReq = null, t.prototype.faceSdkVerifyReq = null, t.prototype.buyRedesignQueryCryptoListReq = null, t.prototype.buyRedesignQueryFiatListReq = null, t.prototype.otcGetQuoteReq = null, t.prototype.faceRecognitionReq = null, Object.defineProperty(t.prototype, "body", {
                            get: a.oneOfGetter(e = ["reqArgs", "trivialReq", "balanceValuationReq", "kycStatusReq", "capitalConfigReq", "getSelectorReq", "getSubSelectorReq", "isolatedMarginAccountReq", "getAccountUserConfigReq", "getAssetPortfolioReq", "walletBalanceReq", "getBuyAndSellSelectorReq", "getBuyAndSellSubSelectorReq", "getOpenGridsReq", "getOrderConfirmationReq", "getUserCommissionReq", "inboxMsgReadReq", "inboxMsgReq", "inboxUnReadReq", "faceSdkVerifyReq", "buyRedesignQueryCryptoListReq", "buyRedesignQueryFiatListReq", "otcGetQuoteReq", "faceRecognitionReq"]),
                            set: a.oneOfSetter(e)
                        }), t.create = function(e) {
                            return new t(e)
                        }, t.encode = function(e, t) {
                            return t || (t = s.create()), t.uint32(10).string(e.wsReqId), t.uint32(16).int64(e.reqTime), t.uint32(24).int32(e.reqAction), null != e.service && Object.hasOwnProperty.call(e, "service") && t.uint32(34).string(e.service), null != e.tag && Object.hasOwnProperty.call(e, "tag") && t.uint32(42).string(e.tag), null != e.reqArgs && Object.hasOwnProperty.call(e, "reqArgs") && t.uint32(802).string(e.reqArgs), null != e.trivialReq && Object.hasOwnProperty.call(e, "trivialReq") && c.com.market.TrivialReq.encode(e.trivialReq, t.uint32(810).fork()).ldelim(), null != e.balanceValuationReq && Object.hasOwnProperty.call(e, "balanceValuationReq") && c.com.market.BalanceValuationReq.encode(e.balanceValuationReq, t.uint32(818).fork()).ldelim(), null != e.kycStatusReq && Object.hasOwnProperty.call(e, "kycStatusReq") && c.com.market.KycStatusReq.encode(e.kycStatusReq, t.uint32(826).fork()).ldelim(), null != e.capitalConfigReq && Object.hasOwnProperty.call(e, "capitalConfigReq") && c.com.market.CapitalConfigReq.encode(e.capitalConfigReq, t.uint32(834).fork()).ldelim(), null != e.getSelectorReq && Object.hasOwnProperty.call(e, "getSelectorReq") && c.com.market.GetSelectorReq.encode(e.getSelectorReq, t.uint32(842).fork()).ldelim(), null != e.getSubSelectorReq && Object.hasOwnProperty.call(e, "getSubSelectorReq") && c.com.market.GetSubSelectorReq.encode(e.getSubSelectorReq, t.uint32(850).fork()).ldelim(), null != e.isolatedMarginAccountReq && Object.hasOwnProperty.call(e, "isolatedMarginAccountReq") && c.com.market.IsolatedMarginAccountReq.encode(e.isolatedMarginAccountReq, t.uint32(858).fork()).ldelim(), null != e.getAccountUserConfigReq && Object.hasOwnProperty.call(e, "getAccountUserConfigReq") && c.com.market.GetAccountUserConfigReq.encode(e.getAccountUserConfigReq, t.uint32(866).fork()).ldelim(), null != e.getAssetPortfolioReq && Object.hasOwnProperty.call(e, "getAssetPortfolioReq") && c.com.market.GetAssetPortfolioReq.encode(e.getAssetPortfolioReq, t.uint32(874).fork()).ldelim(), null != e.walletBalanceReq && Object.hasOwnProperty.call(e, "walletBalanceReq") && c.com.market.WalletBalanceReq.encode(e.walletBalanceReq, t.uint32(882).fork()).ldelim(), null != e.getBuyAndSellSelectorReq && Object.hasOwnProperty.call(e, "getBuyAndSellSelectorReq") && c.com.market.GetBuyAndSellSelectorReq.encode(e.getBuyAndSellSelectorReq, t.uint32(890).fork()).ldelim(), null != e.getBuyAndSellSubSelectorReq && Object.hasOwnProperty.call(e, "getBuyAndSellSubSelectorReq") && c.com.market.GetBuyAndSellSubSelectorReq.encode(e.getBuyAndSellSubSelectorReq, t.uint32(898).fork()).ldelim(), null != e.getOpenGridsReq && Object.hasOwnProperty.call(e, "getOpenGridsReq") && c.com.futures.GetOpenGridsReq.encode(e.getOpenGridsReq, t.uint32(906).fork()).ldelim(), null != e.getOrderConfirmationReq && Object.hasOwnProperty.call(e, "getOrderConfirmationReq") && c.com.futures.GetOrderConfirmationReq.encode(e.getOrderConfirmationReq, t.uint32(914).fork()).ldelim(), null != e.getUserCommissionReq && Object.hasOwnProperty.call(e, "getUserCommissionReq") && c.com.futures.GetUserCommissionReq.encode(e.getUserCommissionReq, t.uint32(922).fork()).ldelim(), null != e.inboxMsgReadReq && Object.hasOwnProperty.call(e, "inboxMsgReadReq") && c.com.inbox.InboxMsgReadReq.encode(e.inboxMsgReadReq, t.uint32(930).fork()).ldelim(), null != e.inboxMsgReq && Object.hasOwnProperty.call(e, "inboxMsgReq") && c.com.inbox.InboxMsgReq.encode(e.inboxMsgReq, t.uint32(938).fork()).ldelim(), null != e.inboxUnReadReq && Object.hasOwnProperty.call(e, "inboxUnReadReq") && c.com.inbox.InboxUnReadReq.encode(e.inboxUnReadReq, t.uint32(946).fork()).ldelim(), null != e.faceSdkVerifyReq && Object.hasOwnProperty.call(e, "faceSdkVerifyReq") && c.com.market.FaceSdkVerifyReq.encode(e.faceSdkVerifyReq, t.uint32(954).fork()).ldelim(), null != e.buyRedesignQueryCryptoListReq && Object.hasOwnProperty.call(e, "buyRedesignQueryCryptoListReq") && c.com.market.BuyRedesignQueryCryptoListReq.encode(e.buyRedesignQueryCryptoListReq, t.uint32(962).fork()).ldelim(), null != e.buyRedesignQueryFiatListReq && Object.hasOwnProperty.call(e, "buyRedesignQueryFiatListReq") && c.com.market.BuyRedesignQueryFiatListReq.encode(e.buyRedesignQueryFiatListReq, t.uint32(970).fork()).ldelim(), null != e.otcGetQuoteReq && Object.hasOwnProperty.call(e, "otcGetQuoteReq") && c.com.market.OtcGetQuoteReq.encode(e.otcGetQuoteReq, t.uint32(978).fork()).ldelim(), null != e.faceRecognitionReq && Object.hasOwnProperty.call(e, "faceRecognitionReq") && c.com.market.FaceRecognitionReq.encode(e.faceRecognitionReq, t.uint32(1042).fork()).ldelim(), t
                        }, t.encodeDelimited = function(e, t) {
                            return this.encode(e, t).ldelim()
                        }, t.decode = function(e, t) {
                            (0, n._)(e, o) || (e = o.create(e));
                            for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.WsReq; e.pos < r;) {
                                var s = e.uint32();
                                switch (s >>> 3) {
                                    case 1:
                                        i.wsReqId = e.string();
                                        break;
                                    case 2:
                                        i.reqTime = e.int64();
                                        break;
                                    case 3:
                                        i.reqAction = e.int32();
                                        break;
                                    case 4:
                                        i.service = e.string();
                                        break;
                                    case 5:
                                        i.tag = e.string();
                                        break;
                                    case 100:
                                        i.reqArgs = e.string();
                                        break;
                                    case 101:
                                        i.trivialReq = c.com.market.TrivialReq.decode(e, e.uint32());
                                        break;
                                    case 102:
                                        i.balanceValuationReq = c.com.market.BalanceValuationReq.decode(e, e.uint32());
                                        break;
                                    case 103:
                                        i.kycStatusReq = c.com.market.KycStatusReq.decode(e, e.uint32());
                                        break;
                                    case 104:
                                        i.capitalConfigReq = c.com.market.CapitalConfigReq.decode(e, e.uint32());
                                        break;
                                    case 105:
                                        i.getSelectorReq = c.com.market.GetSelectorReq.decode(e, e.uint32());
                                        break;
                                    case 106:
                                        i.getSubSelectorReq = c.com.market.GetSubSelectorReq.decode(e, e.uint32());
                                        break;
                                    case 107:
                                        i.isolatedMarginAccountReq = c.com.market.IsolatedMarginAccountReq.decode(e, e.uint32());
                                        break;
                                    case 108:
                                        i.getAccountUserConfigReq = c.com.market.GetAccountUserConfigReq.decode(e, e.uint32());
                                        break;
                                    case 109:
                                        i.getAssetPortfolioReq = c.com.market.GetAssetPortfolioReq.decode(e, e.uint32());
                                        break;
                                    case 110:
                                        i.walletBalanceReq = c.com.market.WalletBalanceReq.decode(e, e.uint32());
                                        break;
                                    case 111:
                                        i.getBuyAndSellSelectorReq = c.com.market.GetBuyAndSellSelectorReq.decode(e, e.uint32());
                                        break;
                                    case 112:
                                        i.getBuyAndSellSubSelectorReq = c.com.market.GetBuyAndSellSubSelectorReq.decode(e, e.uint32());
                                        break;
                                    case 113:
                                        i.getOpenGridsReq = c.com.futures.GetOpenGridsReq.decode(e, e.uint32());
                                        break;
                                    case 114:
                                        i.getOrderConfirmationReq = c.com.futures.GetOrderConfirmationReq.decode(e, e.uint32());
                                        break;
                                    case 115:
                                        i.getUserCommissionReq = c.com.futures.GetUserCommissionReq.decode(e, e.uint32());
                                        break;
                                    case 116:
                                        i.inboxMsgReadReq = c.com.inbox.InboxMsgReadReq.decode(e, e.uint32());
                                        break;
                                    case 117:
                                        i.inboxMsgReq = c.com.inbox.InboxMsgReq.decode(e, e.uint32());
                                        break;
                                    case 118:
                                        i.inboxUnReadReq = c.com.inbox.InboxUnReadReq.decode(e, e.uint32());
                                        break;
                                    case 119:
                                        i.faceSdkVerifyReq = c.com.market.FaceSdkVerifyReq.decode(e, e.uint32());
                                        break;
                                    case 120:
                                        i.buyRedesignQueryCryptoListReq = c.com.market.BuyRedesignQueryCryptoListReq.decode(e, e.uint32());
                                        break;
                                    case 121:
                                        i.buyRedesignQueryFiatListReq = c.com.market.BuyRedesignQueryFiatListReq.decode(e, e.uint32());
                                        break;
                                    case 122:
                                        i.otcGetQuoteReq = c.com.market.OtcGetQuoteReq.decode(e, e.uint32());
                                        break;
                                    case 130:
                                        i.faceRecognitionReq = c.com.market.FaceRecognitionReq.decode(e, e.uint32());
                                        break;
                                    default:
                                        e.skipType(7 & s)
                                }
                            }
                            if (!i.hasOwnProperty("wsReqId")) throw a.ProtocolError("missing required 'wsReqId'", {
                                instance: i
                            });
                            if (!i.hasOwnProperty("reqTime")) throw a.ProtocolError("missing required 'reqTime'", {
                                instance: i
                            });
                            if (!i.hasOwnProperty("reqAction")) throw a.ProtocolError("missing required 'reqAction'", {
                                instance: i
                            });
                            return i
                        }, t.decodeDelimited = function(e) {
                            return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                        }, t.verify = function(e) {
                            if ("object" !== typeof e || null === e) return "object expected";
                            var t = {};
                            if (!a.isString(e.wsReqId)) return "wsReqId: string expected";
                            if (!a.isInteger(e.reqTime) && !(e.reqTime && a.isInteger(e.reqTime.low) && a.isInteger(e.reqTime.high))) return "reqTime: integer|Long expected";
                            switch (e.reqAction) {
                                default: return "reqAction: enum value expected";
                                case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 11:
                                        case 12:
                            }
                            if (null != e.service && e.hasOwnProperty("service") && !a.isString(e.service)) return "service: string expected";
                            if (null != e.tag && e.hasOwnProperty("tag") && !a.isString(e.tag)) return "tag: string expected";
                            if (null != e.reqArgs && e.hasOwnProperty("reqArgs") && (t.body = 1, !a.isString(e.reqArgs))) return "reqArgs: string expected";
                            if (null != e.trivialReq && e.hasOwnProperty("trivialReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var r = c.com.market.TrivialReq.verify(e.trivialReq);
                                if (r) return "trivialReq." + r
                            }
                            if (null != e.balanceValuationReq && e.hasOwnProperty("balanceValuationReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var n = c.com.market.BalanceValuationReq.verify(e.balanceValuationReq);
                                if (n) return "balanceValuationReq." + n
                            }
                            if (null != e.kycStatusReq && e.hasOwnProperty("kycStatusReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var i = c.com.market.KycStatusReq.verify(e.kycStatusReq);
                                if (i) return "kycStatusReq." + i
                            }
                            if (null != e.capitalConfigReq && e.hasOwnProperty("capitalConfigReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var o = c.com.market.CapitalConfigReq.verify(e.capitalConfigReq);
                                if (o) return "capitalConfigReq." + o
                            }
                            if (null != e.getSelectorReq && e.hasOwnProperty("getSelectorReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var s = c.com.market.GetSelectorReq.verify(e.getSelectorReq);
                                if (s) return "getSelectorReq." + s
                            }
                            if (null != e.getSubSelectorReq && e.hasOwnProperty("getSubSelectorReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var l = c.com.market.GetSubSelectorReq.verify(e.getSubSelectorReq);
                                if (l) return "getSubSelectorReq." + l
                            }
                            if (null != e.isolatedMarginAccountReq && e.hasOwnProperty("isolatedMarginAccountReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var u = c.com.market.IsolatedMarginAccountReq.verify(e.isolatedMarginAccountReq);
                                if (u) return "isolatedMarginAccountReq." + u
                            }
                            if (null != e.getAccountUserConfigReq && e.hasOwnProperty("getAccountUserConfigReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var p = c.com.market.GetAccountUserConfigReq.verify(e.getAccountUserConfigReq);
                                if (p) return "getAccountUserConfigReq." + p
                            }
                            if (null != e.getAssetPortfolioReq && e.hasOwnProperty("getAssetPortfolioReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var d = c.com.market.GetAssetPortfolioReq.verify(e.getAssetPortfolioReq);
                                if (d) return "getAssetPortfolioReq." + d
                            }
                            if (null != e.walletBalanceReq && e.hasOwnProperty("walletBalanceReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var m = c.com.market.WalletBalanceReq.verify(e.walletBalanceReq);
                                if (m) return "walletBalanceReq." + m
                            }
                            if (null != e.getBuyAndSellSelectorReq && e.hasOwnProperty("getBuyAndSellSelectorReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var g = c.com.market.GetBuyAndSellSelectorReq.verify(e.getBuyAndSellSelectorReq);
                                if (g) return "getBuyAndSellSelectorReq." + g
                            }
                            if (null != e.getBuyAndSellSubSelectorReq && e.hasOwnProperty("getBuyAndSellSubSelectorReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var y = c.com.market.GetBuyAndSellSubSelectorReq.verify(e.getBuyAndSellSubSelectorReq);
                                if (y) return "getBuyAndSellSubSelectorReq." + y
                            }
                            if (null != e.getOpenGridsReq && e.hasOwnProperty("getOpenGridsReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var f = c.com.futures.GetOpenGridsReq.verify(e.getOpenGridsReq);
                                if (f) return "getOpenGridsReq." + f
                            }
                            if (null != e.getOrderConfirmationReq && e.hasOwnProperty("getOrderConfirmationReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var b = c.com.futures.GetOrderConfirmationReq.verify(e.getOrderConfirmationReq);
                                if (b) return "getOrderConfirmationReq." + b
                            }
                            if (null != e.getUserCommissionReq && e.hasOwnProperty("getUserCommissionReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var h = c.com.futures.GetUserCommissionReq.verify(e.getUserCommissionReq);
                                if (h) return "getUserCommissionReq." + h
                            }
                            if (null != e.inboxMsgReadReq && e.hasOwnProperty("inboxMsgReadReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var w = c.com.inbox.InboxMsgReadReq.verify(e.inboxMsgReadReq);
                                if (w) return "inboxMsgReadReq." + w
                            }
                            if (null != e.inboxMsgReq && e.hasOwnProperty("inboxMsgReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var O = c.com.inbox.InboxMsgReq.verify(e.inboxMsgReq);
                                if (O) return "inboxMsgReq." + O
                            }
                            if (null != e.inboxUnReadReq && e.hasOwnProperty("inboxUnReadReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var S = c.com.inbox.InboxUnReadReq.verify(e.inboxUnReadReq);
                                if (S) return "inboxUnReadReq." + S
                            }
                            if (null != e.faceSdkVerifyReq && e.hasOwnProperty("faceSdkVerifyReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var R = c.com.market.FaceSdkVerifyReq.verify(e.faceSdkVerifyReq);
                                if (R) return "faceSdkVerifyReq." + R
                            }
                            if (null != e.buyRedesignQueryCryptoListReq && e.hasOwnProperty("buyRedesignQueryCryptoListReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var T = c.com.market.BuyRedesignQueryCryptoListReq.verify(e.buyRedesignQueryCryptoListReq);
                                if (T) return "buyRedesignQueryCryptoListReq." + T
                            }
                            if (null != e.buyRedesignQueryFiatListReq && e.hasOwnProperty("buyRedesignQueryFiatListReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var P = c.com.market.BuyRedesignQueryFiatListReq.verify(e.buyRedesignQueryFiatListReq);
                                if (P) return "buyRedesignQueryFiatListReq." + P
                            }
                            if (null != e.otcGetQuoteReq && e.hasOwnProperty("otcGetQuoteReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var k = c.com.market.OtcGetQuoteReq.verify(e.otcGetQuoteReq);
                                if (k) return "otcGetQuoteReq." + k
                            }
                            if (null != e.faceRecognitionReq && e.hasOwnProperty("faceRecognitionReq")) {
                                if (1 === t.body) return "body: multiple values";
                                t.body = 1;
                                var x = c.com.market.FaceRecognitionReq.verify(e.faceRecognitionReq);
                                if (x) return "faceRecognitionReq." + x
                            }
                            return null
                        }, t.fromObject = function(e) {
                            if ((0, n._)(e, c.com.WsReq)) return e;
                            var t = new c.com.WsReq;
                            switch (null != e.wsReqId && (t.wsReqId = String(e.wsReqId)), null != e.reqTime && (a.Long ? (t.reqTime = a.Long.fromValue(e.reqTime)).unsigned = !1 : "string" === typeof e.reqTime ? t.reqTime = parseInt(e.reqTime, 10) : "number" === typeof e.reqTime ? t.reqTime = e.reqTime : "object" === typeof e.reqTime && (t.reqTime = new a.LongBits(e.reqTime.low >>> 0, e.reqTime.high >>> 0).toNumber())), e.reqAction) {
                                case "SERVICE_REQ":
                                case 1:
                                    t.reqAction = 1;
                                    break;
                                case "SUBSCRIBE":
                                case 2:
                                    t.reqAction = 2;
                                    break;
                                case "UNSUBSCRIBE":
                                case 3:
                                    t.reqAction = 3;
                                    break;
                                case "LIST_CHANNELS":
                                case 4:
                                    t.reqAction = 4;
                                    break;
                                case "REFRESH_TOKEN":
                                case 5:
                                    t.reqAction = 5;
                                    break;
                                case "LAST_TOKEN_TIME":
                                case 6:
                                    t.reqAction = 6;
                                    break;
                                case "CLEAR_TOKEN":
                                case 7:
                                    t.reqAction = 7;
                                    break;
                                case "PUBLIC_SERVICE_REQ":
                                case 8:
                                    t.reqAction = 8;
                                    break;
                                case "FRIENDLY_SERVICE_REQ":
                                case 9:
                                    t.reqAction = 9;
                                    break;
                                case "PING":
                                case 10:
                                    t.reqAction = 10;
                                    break;
                                case "REFRESH_UUID":
                                case 11:
                                    t.reqAction = 11;
                                    break;
                                case "REFRESH_LANG":
                                case 12:
                                    t.reqAction = 12
                            }
                            if (null != e.service && (t.service = String(e.service)), null != e.tag && (t.tag = String(e.tag)), null != e.reqArgs && (t.reqArgs = String(e.reqArgs)), null != e.trivialReq) {
                                if ("object" !== typeof e.trivialReq) throw TypeError(".com.WsReq.trivialReq: object expected");
                                t.trivialReq = c.com.market.TrivialReq.fromObject(e.trivialReq)
                            }
                            if (null != e.balanceValuationReq) {
                                if ("object" !== typeof e.balanceValuationReq) throw TypeError(".com.WsReq.balanceValuationReq: object expected");
                                t.balanceValuationReq = c.com.market.BalanceValuationReq.fromObject(e.balanceValuationReq)
                            }
                            if (null != e.kycStatusReq) {
                                if ("object" !== typeof e.kycStatusReq) throw TypeError(".com.WsReq.kycStatusReq: object expected");
                                t.kycStatusReq = c.com.market.KycStatusReq.fromObject(e.kycStatusReq)
                            }
                            if (null != e.capitalConfigReq) {
                                if ("object" !== typeof e.capitalConfigReq) throw TypeError(".com.WsReq.capitalConfigReq: object expected");
                                t.capitalConfigReq = c.com.market.CapitalConfigReq.fromObject(e.capitalConfigReq)
                            }
                            if (null != e.getSelectorReq) {
                                if ("object" !== typeof e.getSelectorReq) throw TypeError(".com.WsReq.getSelectorReq: object expected");
                                t.getSelectorReq = c.com.market.GetSelectorReq.fromObject(e.getSelectorReq)
                            }
                            if (null != e.getSubSelectorReq) {
                                if ("object" !== typeof e.getSubSelectorReq) throw TypeError(".com.WsReq.getSubSelectorReq: object expected");
                                t.getSubSelectorReq = c.com.market.GetSubSelectorReq.fromObject(e.getSubSelectorReq)
                            }
                            if (null != e.isolatedMarginAccountReq) {
                                if ("object" !== typeof e.isolatedMarginAccountReq) throw TypeError(".com.WsReq.isolatedMarginAccountReq: object expected");
                                t.isolatedMarginAccountReq = c.com.market.IsolatedMarginAccountReq.fromObject(e.isolatedMarginAccountReq)
                            }
                            if (null != e.getAccountUserConfigReq) {
                                if ("object" !== typeof e.getAccountUserConfigReq) throw TypeError(".com.WsReq.getAccountUserConfigReq: object expected");
                                t.getAccountUserConfigReq = c.com.market.GetAccountUserConfigReq.fromObject(e.getAccountUserConfigReq)
                            }
                            if (null != e.getAssetPortfolioReq) {
                                if ("object" !== typeof e.getAssetPortfolioReq) throw TypeError(".com.WsReq.getAssetPortfolioReq: object expected");
                                t.getAssetPortfolioReq = c.com.market.GetAssetPortfolioReq.fromObject(e.getAssetPortfolioReq)
                            }
                            if (null != e.walletBalanceReq) {
                                if ("object" !== typeof e.walletBalanceReq) throw TypeError(".com.WsReq.walletBalanceReq: object expected");
                                t.walletBalanceReq = c.com.market.WalletBalanceReq.fromObject(e.walletBalanceReq)
                            }
                            if (null != e.getBuyAndSellSelectorReq) {
                                if ("object" !== typeof e.getBuyAndSellSelectorReq) throw TypeError(".com.WsReq.getBuyAndSellSelectorReq: object expected");
                                t.getBuyAndSellSelectorReq = c.com.market.GetBuyAndSellSelectorReq.fromObject(e.getBuyAndSellSelectorReq)
                            }
                            if (null != e.getBuyAndSellSubSelectorReq) {
                                if ("object" !== typeof e.getBuyAndSellSubSelectorReq) throw TypeError(".com.WsReq.getBuyAndSellSubSelectorReq: object expected");
                                t.getBuyAndSellSubSelectorReq = c.com.market.GetBuyAndSellSubSelectorReq.fromObject(e.getBuyAndSellSubSelectorReq)
                            }
                            if (null != e.getOpenGridsReq) {
                                if ("object" !== typeof e.getOpenGridsReq) throw TypeError(".com.WsReq.getOpenGridsReq: object expected");
                                t.getOpenGridsReq = c.com.futures.GetOpenGridsReq.fromObject(e.getOpenGridsReq)
                            }
                            if (null != e.getOrderConfirmationReq) {
                                if ("object" !== typeof e.getOrderConfirmationReq) throw TypeError(".com.WsReq.getOrderConfirmationReq: object expected");
                                t.getOrderConfirmationReq = c.com.futures.GetOrderConfirmationReq.fromObject(e.getOrderConfirmationReq)
                            }
                            if (null != e.getUserCommissionReq) {
                                if ("object" !== typeof e.getUserCommissionReq) throw TypeError(".com.WsReq.getUserCommissionReq: object expected");
                                t.getUserCommissionReq = c.com.futures.GetUserCommissionReq.fromObject(e.getUserCommissionReq)
                            }
                            if (null != e.inboxMsgReadReq) {
                                if ("object" !== typeof e.inboxMsgReadReq) throw TypeError(".com.WsReq.inboxMsgReadReq: object expected");
                                t.inboxMsgReadReq = c.com.inbox.InboxMsgReadReq.fromObject(e.inboxMsgReadReq)
                            }
                            if (null != e.inboxMsgReq) {
                                if ("object" !== typeof e.inboxMsgReq) throw TypeError(".com.WsReq.inboxMsgReq: object expected");
                                t.inboxMsgReq = c.com.inbox.InboxMsgReq.fromObject(e.inboxMsgReq)
                            }
                            if (null != e.inboxUnReadReq) {
                                if ("object" !== typeof e.inboxUnReadReq) throw TypeError(".com.WsReq.inboxUnReadReq: object expected");
                                t.inboxUnReadReq = c.com.inbox.InboxUnReadReq.fromObject(e.inboxUnReadReq)
                            }
                            if (null != e.faceSdkVerifyReq) {
                                if ("object" !== typeof e.faceSdkVerifyReq) throw TypeError(".com.WsReq.faceSdkVerifyReq: object expected");
                                t.faceSdkVerifyReq = c.com.market.FaceSdkVerifyReq.fromObject(e.faceSdkVerifyReq)
                            }
                            if (null != e.buyRedesignQueryCryptoListReq) {
                                if ("object" !== typeof e.buyRedesignQueryCryptoListReq) throw TypeError(".com.WsReq.buyRedesignQueryCryptoListReq: object expected");
                                t.buyRedesignQueryCryptoListReq = c.com.market.BuyRedesignQueryCryptoListReq.fromObject(e.buyRedesignQueryCryptoListReq)
                            }
                            if (null != e.buyRedesignQueryFiatListReq) {
                                if ("object" !== typeof e.buyRedesignQueryFiatListReq) throw TypeError(".com.WsReq.buyRedesignQueryFiatListReq: object expected");
                                t.buyRedesignQueryFiatListReq = c.com.market.BuyRedesignQueryFiatListReq.fromObject(e.buyRedesignQueryFiatListReq)
                            }
                            if (null != e.otcGetQuoteReq) {
                                if ("object" !== typeof e.otcGetQuoteReq) throw TypeError(".com.WsReq.otcGetQuoteReq: object expected");
                                t.otcGetQuoteReq = c.com.market.OtcGetQuoteReq.fromObject(e.otcGetQuoteReq)
                            }
                            if (null != e.faceRecognitionReq) {
                                if ("object" !== typeof e.faceRecognitionReq) throw TypeError(".com.WsReq.faceRecognitionReq: object expected");
                                t.faceRecognitionReq = c.com.market.FaceRecognitionReq.fromObject(e.faceRecognitionReq)
                            }
                            return t
                        }, t.toObject = function(e, t) {
                            t || (t = {});
                            var r = {};
                            if (t.defaults) {
                                if (r.wsReqId = "", a.Long) {
                                    var n = new a.Long(0, 0, !1);
                                    r.reqTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                } else r.reqTime = t.longs === String ? "0" : 0;
                                r.reqAction = t.enums === String ? "SERVICE_REQ" : 1, r.service = "", r.tag = ""
                            }
                            return null != e.wsReqId && e.hasOwnProperty("wsReqId") && (r.wsReqId = e.wsReqId), null != e.reqTime && e.hasOwnProperty("reqTime") && ("number" === typeof e.reqTime ? r.reqTime = t.longs === String ? String(e.reqTime) : e.reqTime : r.reqTime = t.longs === String ? a.Long.prototype.toString.call(e.reqTime) : t.longs === Number ? new a.LongBits(e.reqTime.low >>> 0, e.reqTime.high >>> 0).toNumber() : e.reqTime), null != e.reqAction && e.hasOwnProperty("reqAction") && (r.reqAction = t.enums === String ? c.com.WsReqAction[e.reqAction] : e.reqAction), null != e.service && e.hasOwnProperty("service") && (r.service = e.service), null != e.tag && e.hasOwnProperty("tag") && (r.tag = e.tag), null != e.reqArgs && e.hasOwnProperty("reqArgs") && (r.reqArgs = e.reqArgs, t.oneofs && (r.body = "reqArgs")), null != e.trivialReq && e.hasOwnProperty("trivialReq") && (r.trivialReq = c.com.market.TrivialReq.toObject(e.trivialReq, t), t.oneofs && (r.body = "trivialReq")), null != e.balanceValuationReq && e.hasOwnProperty("balanceValuationReq") && (r.balanceValuationReq = c.com.market.BalanceValuationReq.toObject(e.balanceValuationReq, t), t.oneofs && (r.body = "balanceValuationReq")), null != e.kycStatusReq && e.hasOwnProperty("kycStatusReq") && (r.kycStatusReq = c.com.market.KycStatusReq.toObject(e.kycStatusReq, t), t.oneofs && (r.body = "kycStatusReq")), null != e.capitalConfigReq && e.hasOwnProperty("capitalConfigReq") && (r.capitalConfigReq = c.com.market.CapitalConfigReq.toObject(e.capitalConfigReq, t), t.oneofs && (r.body = "capitalConfigReq")), null != e.getSelectorReq && e.hasOwnProperty("getSelectorReq") && (r.getSelectorReq = c.com.market.GetSelectorReq.toObject(e.getSelectorReq, t), t.oneofs && (r.body = "getSelectorReq")), null != e.getSubSelectorReq && e.hasOwnProperty("getSubSelectorReq") && (r.getSubSelectorReq = c.com.market.GetSubSelectorReq.toObject(e.getSubSelectorReq, t), t.oneofs && (r.body = "getSubSelectorReq")), null != e.isolatedMarginAccountReq && e.hasOwnProperty("isolatedMarginAccountReq") && (r.isolatedMarginAccountReq = c.com.market.IsolatedMarginAccountReq.toObject(e.isolatedMarginAccountReq, t), t.oneofs && (r.body = "isolatedMarginAccountReq")), null != e.getAccountUserConfigReq && e.hasOwnProperty("getAccountUserConfigReq") && (r.getAccountUserConfigReq = c.com.market.GetAccountUserConfigReq.toObject(e.getAccountUserConfigReq, t), t.oneofs && (r.body = "getAccountUserConfigReq")), null != e.getAssetPortfolioReq && e.hasOwnProperty("getAssetPortfolioReq") && (r.getAssetPortfolioReq = c.com.market.GetAssetPortfolioReq.toObject(e.getAssetPortfolioReq, t), t.oneofs && (r.body = "getAssetPortfolioReq")), null != e.walletBalanceReq && e.hasOwnProperty("walletBalanceReq") && (r.walletBalanceReq = c.com.market.WalletBalanceReq.toObject(e.walletBalanceReq, t), t.oneofs && (r.body = "walletBalanceReq")), null != e.getBuyAndSellSelectorReq && e.hasOwnProperty("getBuyAndSellSelectorReq") && (r.getBuyAndSellSelectorReq = c.com.market.GetBuyAndSellSelectorReq.toObject(e.getBuyAndSellSelectorReq, t), t.oneofs && (r.body = "getBuyAndSellSelectorReq")), null != e.getBuyAndSellSubSelectorReq && e.hasOwnProperty("getBuyAndSellSubSelectorReq") && (r.getBuyAndSellSubSelectorReq = c.com.market.GetBuyAndSellSubSelectorReq.toObject(e.getBuyAndSellSubSelectorReq, t), t.oneofs && (r.body = "getBuyAndSellSubSelectorReq")), null != e.getOpenGridsReq && e.hasOwnProperty("getOpenGridsReq") && (r.getOpenGridsReq = c.com.futures.GetOpenGridsReq.toObject(e.getOpenGridsReq, t), t.oneofs && (r.body = "getOpenGridsReq")), null != e.getOrderConfirmationReq && e.hasOwnProperty("getOrderConfirmationReq") && (r.getOrderConfirmationReq = c.com.futures.GetOrderConfirmationReq.toObject(e.getOrderConfirmationReq, t), t.oneofs && (r.body = "getOrderConfirmationReq")), null != e.getUserCommissionReq && e.hasOwnProperty("getUserCommissionReq") && (r.getUserCommissionReq = c.com.futures.GetUserCommissionReq.toObject(e.getUserCommissionReq, t), t.oneofs && (r.body = "getUserCommissionReq")), null != e.inboxMsgReadReq && e.hasOwnProperty("inboxMsgReadReq") && (r.inboxMsgReadReq = c.com.inbox.InboxMsgReadReq.toObject(e.inboxMsgReadReq, t), t.oneofs && (r.body = "inboxMsgReadReq")), null != e.inboxMsgReq && e.hasOwnProperty("inboxMsgReq") && (r.inboxMsgReq = c.com.inbox.InboxMsgReq.toObject(e.inboxMsgReq, t), t.oneofs && (r.body = "inboxMsgReq")), null != e.inboxUnReadReq && e.hasOwnProperty("inboxUnReadReq") && (r.inboxUnReadReq = c.com.inbox.InboxUnReadReq.toObject(e.inboxUnReadReq, t), t.oneofs && (r.body = "inboxUnReadReq")), null != e.faceSdkVerifyReq && e.hasOwnProperty("faceSdkVerifyReq") && (r.faceSdkVerifyReq = c.com.market.FaceSdkVerifyReq.toObject(e.faceSdkVerifyReq, t), t.oneofs && (r.body = "faceSdkVerifyReq")), null != e.buyRedesignQueryCryptoListReq && e.hasOwnProperty("buyRedesignQueryCryptoListReq") && (r.buyRedesignQueryCryptoListReq = c.com.market.BuyRedesignQueryCryptoListReq.toObject(e.buyRedesignQueryCryptoListReq, t), t.oneofs && (r.body = "buyRedesignQueryCryptoListReq")), null != e.buyRedesignQueryFiatListReq && e.hasOwnProperty("buyRedesignQueryFiatListReq") && (r.buyRedesignQueryFiatListReq = c.com.market.BuyRedesignQueryFiatListReq.toObject(e.buyRedesignQueryFiatListReq, t), t.oneofs && (r.body = "buyRedesignQueryFiatListReq")), null != e.otcGetQuoteReq && e.hasOwnProperty("otcGetQuoteReq") && (r.otcGetQuoteReq = c.com.market.OtcGetQuoteReq.toObject(e.otcGetQuoteReq, t), t.oneofs && (r.body = "otcGetQuoteReq")), null != e.faceRecognitionReq && e.hasOwnProperty("faceRecognitionReq") && (r.faceRecognitionReq = c.com.market.FaceRecognitionReq.toObject(e.faceRecognitionReq, t), t.oneofs && (r.body = "faceRecognitionReq")), r
                        }, t.prototype.toJSON = function() {
                            return this.constructor.toObject(this, i.util.toJSONOptions)
                        }, t
                    }(), e.WsReqAction = function() {
                        var e = {},
                            t = Object.create(e);
                        return t[e[1] = "SERVICE_REQ"] = 1, t[e[2] = "SUBSCRIBE"] = 2, t[e[3] = "UNSUBSCRIBE"] = 3, t[e[4] = "LIST_CHANNELS"] = 4, t[e[5] = "REFRESH_TOKEN"] = 5, t[e[6] = "LAST_TOKEN_TIME"] = 6, t[e[7] = "CLEAR_TOKEN"] = 7, t[e[8] = "PUBLIC_SERVICE_REQ"] = 8, t[e[9] = "FRIENDLY_SERVICE_REQ"] = 9, t[e[10] = "PING"] = 10, t[e[11] = "REFRESH_UUID"] = 11, t[e[12] = "REFRESH_LANG"] = 12, t
                    }(), e.market = function() {
                        var e = {};
                        return e.TrivialReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.name = "", e.prototype.age = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), null != e.age && Object.hasOwnProperty.call(e, "age") && t.uint32(16).int32(e.age), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.TrivialReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.name = e.string();
                                            break;
                                        case 2:
                                            i.age = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.name && e.hasOwnProperty("name") && !a.isString(e.name) ? "name: string expected" : null != e.age && e.hasOwnProperty("age") && !a.isInteger(e.age) ? "age: integer expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.TrivialReq)) return e;
                                var t = new c.com.market.TrivialReq;
                                return null != e.name && (t.name = String(e.name)), null != e.age && (t.age = 0 | e.age), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.name = "", r.age = 0), null != e.name && e.hasOwnProperty("name") && (r.name = e.name), null != e.age && e.hasOwnProperty("age") && (r.age = e.age), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BalanceValuationReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.asset = "", e.prototype.needBtcValuation = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.asset && Object.hasOwnProperty.call(e, "asset") && t.uint32(10).string(e.asset), null != e.needBtcValuation && Object.hasOwnProperty.call(e, "needBtcValuation") && t.uint32(16).bool(e.needBtcValuation), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BalanceValuationReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.asset = e.string();
                                            break;
                                        case 2:
                                            i.needBtcValuation = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.asset && e.hasOwnProperty("asset") && !a.isString(e.asset) ? "asset: string expected" : null != e.needBtcValuation && e.hasOwnProperty("needBtcValuation") && "boolean" !== typeof e.needBtcValuation ? "needBtcValuation: boolean expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BalanceValuationReq)) return e;
                                var t = new c.com.market.BalanceValuationReq;
                                return null != e.asset && (t.asset = String(e.asset)), null != e.needBtcValuation && (t.needBtcValuation = Boolean(e.needBtcValuation)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.asset = "", r.needBtcValuation = !1), null != e.asset && e.hasOwnProperty("asset") && (r.asset = e.asset), null != e.needBtcValuation && e.hasOwnProperty("needBtcValuation") && (r.needBtcValuation = e.needBtcValuation), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.KycStatusReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.reqType = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.reqType && Object.hasOwnProperty.call(e, "reqType") && t.uint32(8).int32(e.reqType), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.KycStatusReq; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.reqType = e.int32();
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.reqType && e.hasOwnProperty("reqType")) switch (e.reqType) {
                                    default: return "reqType: enum value expected";
                                    case 0:
                                            case 1:
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.KycStatusReq)) return e;
                                var t = new c.com.market.KycStatusReq;
                                switch (e.reqType) {
                                    case "V1":
                                    case 0:
                                        t.reqType = 0;
                                        break;
                                    case "V2":
                                    case 1:
                                        t.reqType = 1
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.reqType = t.enums === String ? "V1" : 0), null != e.reqType && e.hasOwnProperty("reqType") && (r.reqType = t.enums === String ? c.com.market.KycStatusReqType[e.reqType] : e.reqType), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.KycStatusReqType = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "V1"] = 0, t[e[1] = "V2"] = 1, t
                        }(), e.CapitalConfigReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.CapitalConfigReq; e.pos < r;) {
                                    var s = e.uint32();
                                    e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null
                            }, e.fromObject = function(e) {
                                return (0, n._)(e, c.com.market.CapitalConfigReq) ? e : new c.com.market.CapitalConfigReq
                            }, e.toObject = function() {
                                return {}
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetSelectorReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.preTest = "", e.prototype.includeFiat = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.preTest && Object.hasOwnProperty.call(e, "preTest") && t.uint32(10).string(e.preTest), null != e.includeFiat && Object.hasOwnProperty.call(e, "includeFiat") && t.uint32(16).bool(e.includeFiat), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetSelectorReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.preTest = e.string();
                                            break;
                                        case 2:
                                            i.includeFiat = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.preTest && e.hasOwnProperty("preTest") && !a.isString(e.preTest) ? "preTest: string expected" : null != e.includeFiat && e.hasOwnProperty("includeFiat") && "boolean" !== typeof e.includeFiat ? "includeFiat: boolean expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetSelectorReq)) return e;
                                var t = new c.com.market.GetSelectorReq;
                                return null != e.preTest && (t.preTest = String(e.preTest)), null != e.includeFiat && (t.includeFiat = Boolean(e.includeFiat)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.preTest = "", r.includeFiat = !1), null != e.preTest && e.hasOwnProperty("preTest") && (r.preTest = e.preTest), null != e.includeFiat && e.hasOwnProperty("includeFiat") && (r.includeFiat = e.includeFiat), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetSubSelectorReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.preTest = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.preTest && Object.hasOwnProperty.call(e, "preTest") && t.uint32(18).string(e.preTest), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetSubSelectorReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.preTest = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.assetCode) ? null != e.preTest && e.hasOwnProperty("preTest") && !a.isString(e.preTest) ? "preTest: string expected" : null : "assetCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetSubSelectorReq)) return e;
                                var t = new c.com.market.GetSubSelectorReq;
                                return null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.preTest && (t.preTest = String(e.preTest)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetCode = "", r.preTest = ""), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.preTest && e.hasOwnProperty("preTest") && (r.preTest = e.preTest), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.IsolatedMarginAccountReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.requireCoupon = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.requireCoupon && Object.hasOwnProperty.call(e, "requireCoupon") && t.uint32(8).bool(e.requireCoupon), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.IsolatedMarginAccountReq; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.requireCoupon = e.bool();
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.requireCoupon && e.hasOwnProperty("requireCoupon") && "boolean" !== typeof e.requireCoupon ? "requireCoupon: boolean expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.IsolatedMarginAccountReq)) return e;
                                var t = new c.com.market.IsolatedMarginAccountReq;
                                return null != e.requireCoupon && (t.requireCoupon = Boolean(e.requireCoupon)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.requireCoupon = !1), null != e.requireCoupon && e.hasOwnProperty("requireCoupon") && (r.requireCoupon = e.requireCoupon), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetAccountUserConfigReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.configType = "", e.prototype.exclude = "", e.prototype.needLocalRecommend = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.configType && Object.hasOwnProperty.call(e, "configType") && t.uint32(10).string(e.configType), null != e.exclude && Object.hasOwnProperty.call(e, "exclude") && t.uint32(18).string(e.exclude), null != e.needLocalRecommend && Object.hasOwnProperty.call(e, "needLocalRecommend") && t.uint32(24).bool(e.needLocalRecommend), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetAccountUserConfigReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.configType = e.string();
                                            break;
                                        case 2:
                                            i.exclude = e.string();
                                            break;
                                        case 3:
                                            i.needLocalRecommend = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.configType && e.hasOwnProperty("configType") && !a.isString(e.configType) ? "configType: string expected" : null != e.exclude && e.hasOwnProperty("exclude") && !a.isString(e.exclude) ? "exclude: string expected" : null != e.needLocalRecommend && e.hasOwnProperty("needLocalRecommend") && "boolean" !== typeof e.needLocalRecommend ? "needLocalRecommend: boolean expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetAccountUserConfigReq)) return e;
                                var t = new c.com.market.GetAccountUserConfigReq;
                                return null != e.configType && (t.configType = String(e.configType)), null != e.exclude && (t.exclude = String(e.exclude)), null != e.needLocalRecommend && (t.needLocalRecommend = Boolean(e.needLocalRecommend)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.configType = "", r.exclude = "", r.needLocalRecommend = !1), null != e.configType && e.hasOwnProperty("configType") && (r.configType = e.configType), null != e.exclude && e.hasOwnProperty("exclude") && (r.exclude = e.exclude), null != e.needLocalRecommend && e.hasOwnProperty("needLocalRecommend") && (r.needLocalRecommend = e.needLocalRecommend), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetAssetPortfolioReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetAssetPortfolioReq; e.pos < r;) {
                                    var s = e.uint32();
                                    e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null
                            }, e.fromObject = function(e) {
                                return (0, n._)(e, c.com.market.GetAssetPortfolioReq) ? e : new c.com.market.GetAssetPortfolioReq
                            }, e.toObject = function() {
                                return {}
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.WalletBalanceReq = function() {
                            var e = function(e) {
                                if (this.accountType = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.needBalanceDetail = !1, e.prototype.accountType = a.emptyArray, e.prototype.quoteAsset = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.needBalanceDetail && Object.hasOwnProperty.call(e, "needBalanceDetail") && t.uint32(8).bool(e.needBalanceDetail), null != e.accountType && e.accountType.length)
                                    for (var r = 0; r < e.accountType.length; ++r) t.uint32(16).int32(e.accountType[r]);
                                return null != e.quoteAsset && Object.hasOwnProperty.call(e, "quoteAsset") && t.uint32(26).string(e.quoteAsset), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.WalletBalanceReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.needBalanceDetail = e.bool();
                                            break;
                                        case 2:
                                            if (i.accountType && i.accountType.length || (i.accountType = []), 2 === (7 & s))
                                                for (var a = e.uint32() + e.pos; e.pos < a;) i.accountType.push(e.int32());
                                            else i.accountType.push(e.int32());
                                            break;
                                        case 3:
                                            i.quoteAsset = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.needBalanceDetail && e.hasOwnProperty("needBalanceDetail") && "boolean" !== typeof e.needBalanceDetail) return "needBalanceDetail: boolean expected";
                                if (null != e.accountType && e.hasOwnProperty("accountType")) {
                                    if (!Array.isArray(e.accountType)) return "accountType: array expected";
                                    for (var t = 0; t < e.accountType.length; ++t) switch (e.accountType[t]) {
                                        default: return "accountType: enum value[] expected";
                                        case 0:
                                                case 1:
                                                case 2:
                                                case 3:
                                                case 4:
                                                case 5:
                                                case 6:
                                                case 7:
                                                case 8:
                                                case 9:
                                                case 10:
                                                case 11:
                                                case 12:
                                                case 13:
                                                case 14:
                                    }
                                }
                                return null != e.quoteAsset && e.hasOwnProperty("quoteAsset") && !a.isString(e.quoteAsset) ? "quoteAsset: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.WalletBalanceReq)) return e;
                                var t = new c.com.market.WalletBalanceReq;
                                if (null != e.needBalanceDetail && (t.needBalanceDetail = Boolean(e.needBalanceDetail)), e.accountType) {
                                    if (!Array.isArray(e.accountType)) throw TypeError(".com.market.WalletBalanceReq.accountType: array expected");
                                    t.accountType = [];
                                    for (var r = 0; r < e.accountType.length; ++r) switch (e.accountType[r]) {
                                        default:
                                            case "MAIN":
                                            case 0:
                                            t.accountType[r] = 0;
                                        break;
                                        case "MARGIN":
                                                case 1:
                                                t.accountType[r] = 1;
                                            break;
                                        case "FIAT":
                                                case 2:
                                                t.accountType[r] = 2;
                                            break;
                                        case "ISOLATED_MARGIN":
                                                case 3:
                                                t.accountType[r] = 3;
                                            break;
                                        case "MINING":
                                                case 4:
                                                t.accountType[r] = 4;
                                            break;
                                        case "FUTURE":
                                                case 5:
                                                t.accountType[r] = 5;
                                            break;
                                        case "DELIVERY":
                                                case 6:
                                                t.accountType[r] = 6;
                                            break;
                                        case "SAVING":
                                                case 7:
                                                t.accountType[r] = 7;
                                            break;
                                        case "CARD":
                                                case 8:
                                                t.accountType[r] = 8;
                                            break;
                                        case "SWAP":
                                                case 9:
                                                t.accountType[r] = 9;
                                            break;
                                        case "TOPTION":
                                                case 10:
                                                t.accountType[r] = 10;
                                            break;
                                        case "STOCK":
                                                case 11:
                                                t.accountType[r] = 11;
                                            break;
                                        case "STRATEGY":
                                                case 12:
                                                t.accountType[r] = 12;
                                            break;
                                        case "COPY_TRADE":
                                                case 13:
                                                t.accountType[r] = 13;
                                            break;
                                        case "LOAN":
                                                case 14:
                                                t.accountType[r] = 14
                                    }
                                }
                                return null != e.quoteAsset && (t.quoteAsset = String(e.quoteAsset)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.accountType = []), t.defaults && (r.needBalanceDetail = !1, r.quoteAsset = ""), null != e.needBalanceDetail && e.hasOwnProperty("needBalanceDetail") && (r.needBalanceDetail = e.needBalanceDetail), e.accountType && e.accountType.length) {
                                    r.accountType = [];
                                    for (var n = 0; n < e.accountType.length; ++n) r.accountType[n] = t.enums === String ? c.com.market.AccountType[e.accountType[n]] : e.accountType[n]
                                }
                                return null != e.quoteAsset && e.hasOwnProperty("quoteAsset") && (r.quoteAsset = e.quoteAsset), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.AccountType = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "MAIN"] = 0, t[e[1] = "MARGIN"] = 1, t[e[2] = "FIAT"] = 2, t[e[3] = "ISOLATED_MARGIN"] = 3, t[e[4] = "MINING"] = 4, t[e[5] = "FUTURE"] = 5, t[e[6] = "DELIVERY"] = 6, t[e[7] = "SAVING"] = 7, t[e[8] = "CARD"] = 8, t[e[9] = "SWAP"] = 9, t[e[10] = "TOPTION"] = 10, t[e[11] = "STOCK"] = 11, t[e[12] = "STRATEGY"] = 12, t[e[13] = "COPY_TRADE"] = 13, t[e[14] = "LOAN"] = 14, t
                        }(), e.GetBuyAndSellSelectorReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.lang = "", e.prototype.isPreTest = !1, e.prototype.isApp = !1, e.prototype.payType = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.lang), null != e.isPreTest && Object.hasOwnProperty.call(e, "isPreTest") && t.uint32(16).bool(e.isPreTest), t.uint32(24).bool(e.isApp), t.uint32(34).string(e.payType), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetBuyAndSellSelectorReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.lang = e.string();
                                            break;
                                        case 2:
                                            i.isPreTest = e.bool();
                                            break;
                                        case 3:
                                            i.isApp = e.bool();
                                            break;
                                        case 4:
                                            i.payType = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("lang")) throw a.ProtocolError("missing required 'lang'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("isApp")) throw a.ProtocolError("missing required 'isApp'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("payType")) throw a.ProtocolError("missing required 'payType'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.lang) ? null != e.isPreTest && e.hasOwnProperty("isPreTest") && "boolean" !== typeof e.isPreTest ? "isPreTest: boolean expected" : "boolean" !== typeof e.isApp ? "isApp: boolean expected" : a.isString(e.payType) ? null : "payType: string expected" : "lang: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetBuyAndSellSelectorReq)) return e;
                                var t = new c.com.market.GetBuyAndSellSelectorReq;
                                return null != e.lang && (t.lang = String(e.lang)), null != e.isPreTest && (t.isPreTest = Boolean(e.isPreTest)), null != e.isApp && (t.isApp = Boolean(e.isApp)), null != e.payType && (t.payType = String(e.payType)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.lang = "", r.isPreTest = !1, r.isApp = !1, r.payType = ""), null != e.lang && e.hasOwnProperty("lang") && (r.lang = e.lang), null != e.isPreTest && e.hasOwnProperty("isPreTest") && (r.isPreTest = e.isPreTest), null != e.isApp && e.hasOwnProperty("isApp") && (r.isApp = e.isApp), null != e.payType && e.hasOwnProperty("payType") && (r.payType = e.payType), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetBuyAndSellSubSelectorReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.payType = "", e.prototype.isPreTest = !1, e.prototype.lang = "", e.prototype.isApp = !1, e.prototype.ip = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.assetCode), t.uint32(18).string(e.payType), null != e.isPreTest && Object.hasOwnProperty.call(e, "isPreTest") && t.uint32(24).bool(e.isPreTest), t.uint32(34).string(e.lang), t.uint32(40).bool(e.isApp), null != e.ip && Object.hasOwnProperty.call(e, "ip") && t.uint32(50).string(e.ip), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetBuyAndSellSubSelectorReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.payType = e.string();
                                            break;
                                        case 3:
                                            i.isPreTest = e.bool();
                                            break;
                                        case 4:
                                            i.lang = e.string();
                                            break;
                                        case 5:
                                            i.isApp = e.bool();
                                            break;
                                        case 6:
                                            i.ip = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("payType")) throw a.ProtocolError("missing required 'payType'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("lang")) throw a.ProtocolError("missing required 'lang'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("isApp")) throw a.ProtocolError("missing required 'isApp'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.assetCode) ? a.isString(e.payType) ? null != e.isPreTest && e.hasOwnProperty("isPreTest") && "boolean" !== typeof e.isPreTest ? "isPreTest: boolean expected" : a.isString(e.lang) ? "boolean" !== typeof e.isApp ? "isApp: boolean expected" : null != e.ip && e.hasOwnProperty("ip") && !a.isString(e.ip) ? "ip: string expected" : null : "lang: string expected" : "payType: string expected" : "assetCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetBuyAndSellSubSelectorReq)) return e;
                                var t = new c.com.market.GetBuyAndSellSubSelectorReq;
                                return null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.payType && (t.payType = String(e.payType)), null != e.isPreTest && (t.isPreTest = Boolean(e.isPreTest)), null != e.lang && (t.lang = String(e.lang)), null != e.isApp && (t.isApp = Boolean(e.isApp)), null != e.ip && (t.ip = String(e.ip)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetCode = "", r.payType = "", r.isPreTest = !1, r.lang = "", r.isApp = !1, r.ip = ""), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.payType && e.hasOwnProperty("payType") && (r.payType = e.payType), null != e.isPreTest && e.hasOwnProperty("isPreTest") && (r.isPreTest = e.isPreTest), null != e.lang && e.hasOwnProperty("lang") && (r.lang = e.lang), null != e.isApp && e.hasOwnProperty("isApp") && (r.isApp = e.isApp), null != e.ip && e.hasOwnProperty("ip") && (r.ip = e.ip), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.FaceSdkVerifyReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.transId = "", e.prototype.delta = "", e.prototype.imageBest = "", e.prototype.imageEnv = "", e.prototype.imageAction1 = "", e.prototype.imageAction2 = "", e.prototype.imageAction3 = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.transId && Object.hasOwnProperty.call(e, "transId") && t.uint32(10).string(e.transId), null != e.delta && Object.hasOwnProperty.call(e, "delta") && t.uint32(18).string(e.delta), null != e.imageBest && Object.hasOwnProperty.call(e, "imageBest") && t.uint32(26).string(e.imageBest), null != e.imageEnv && Object.hasOwnProperty.call(e, "imageEnv") && t.uint32(34).string(e.imageEnv), null != e.imageAction1 && Object.hasOwnProperty.call(e, "imageAction1") && t.uint32(42).string(e.imageAction1), null != e.imageAction2 && Object.hasOwnProperty.call(e, "imageAction2") && t.uint32(50).string(e.imageAction2), null != e.imageAction3 && Object.hasOwnProperty.call(e, "imageAction3") && t.uint32(58).string(e.imageAction3), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.FaceSdkVerifyReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.transId = e.string();
                                            break;
                                        case 2:
                                            i.delta = e.string();
                                            break;
                                        case 3:
                                            i.imageBest = e.string();
                                            break;
                                        case 4:
                                            i.imageEnv = e.string();
                                            break;
                                        case 5:
                                            i.imageAction1 = e.string();
                                            break;
                                        case 6:
                                            i.imageAction2 = e.string();
                                            break;
                                        case 7:
                                            i.imageAction3 = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.transId && e.hasOwnProperty("transId") && !a.isString(e.transId) ? "transId: string expected" : null != e.delta && e.hasOwnProperty("delta") && !a.isString(e.delta) ? "delta: string expected" : null != e.imageBest && e.hasOwnProperty("imageBest") && !a.isString(e.imageBest) ? "imageBest: string expected" : null != e.imageEnv && e.hasOwnProperty("imageEnv") && !a.isString(e.imageEnv) ? "imageEnv: string expected" : null != e.imageAction1 && e.hasOwnProperty("imageAction1") && !a.isString(e.imageAction1) ? "imageAction1: string expected" : null != e.imageAction2 && e.hasOwnProperty("imageAction2") && !a.isString(e.imageAction2) ? "imageAction2: string expected" : null != e.imageAction3 && e.hasOwnProperty("imageAction3") && !a.isString(e.imageAction3) ? "imageAction3: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.FaceSdkVerifyReq)) return e;
                                var t = new c.com.market.FaceSdkVerifyReq;
                                return null != e.transId && (t.transId = String(e.transId)), null != e.delta && (t.delta = String(e.delta)), null != e.imageBest && (t.imageBest = String(e.imageBest)), null != e.imageEnv && (t.imageEnv = String(e.imageEnv)), null != e.imageAction1 && (t.imageAction1 = String(e.imageAction1)), null != e.imageAction2 && (t.imageAction2 = String(e.imageAction2)), null != e.imageAction3 && (t.imageAction3 = String(e.imageAction3)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.transId = "", r.delta = "", r.imageBest = "", r.imageEnv = "", r.imageAction1 = "", r.imageAction2 = "", r.imageAction3 = ""), null != e.transId && e.hasOwnProperty("transId") && (r.transId = e.transId), null != e.delta && e.hasOwnProperty("delta") && (r.delta = e.delta), null != e.imageBest && e.hasOwnProperty("imageBest") && (r.imageBest = e.imageBest), null != e.imageEnv && e.hasOwnProperty("imageEnv") && (r.imageEnv = e.imageEnv), null != e.imageAction1 && e.hasOwnProperty("imageAction1") && (r.imageAction1 = e.imageAction1), null != e.imageAction2 && e.hasOwnProperty("imageAction2") && (r.imageAction2 = e.imageAction2), null != e.imageAction3 && e.hasOwnProperty("imageAction3") && (r.imageAction3 = e.imageAction3), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignQueryCryptoListReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.requireStableToken = !1, e.prototype.version = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.requireStableToken && Object.hasOwnProperty.call(e, "requireStableToken") && t.uint32(8).bool(e.requireStableToken), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(18).string(e.version), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignQueryCryptoListReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.requireStableToken = e.bool();
                                            break;
                                        case 2:
                                            i.version = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.requireStableToken && e.hasOwnProperty("requireStableToken") && "boolean" !== typeof e.requireStableToken ? "requireStableToken: boolean expected" : null != e.version && e.hasOwnProperty("version") && !a.isString(e.version) ? "version: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignQueryCryptoListReq)) return e;
                                var t = new c.com.market.BuyRedesignQueryCryptoListReq;
                                return null != e.requireStableToken && (t.requireStableToken = Boolean(e.requireStableToken)), null != e.version && (t.version = String(e.version)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.requireStableToken = !1, r.version = ""), null != e.requireStableToken && e.hasOwnProperty("requireStableToken") && (r.requireStableToken = e.requireStableToken), null != e.version && e.hasOwnProperty("version") && (r.version = e.version), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignQueryFiatListReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.cryptoCurrency = "", e.prototype.fiatCurrency = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.cryptoCurrency), t.uint32(18).string(e.fiatCurrency), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignQueryFiatListReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.cryptoCurrency = e.string();
                                            break;
                                        case 2:
                                            i.fiatCurrency = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("cryptoCurrency")) throw a.ProtocolError("missing required 'cryptoCurrency'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("fiatCurrency")) throw a.ProtocolError("missing required 'fiatCurrency'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.cryptoCurrency) ? a.isString(e.fiatCurrency) ? null : "fiatCurrency: string expected" : "cryptoCurrency: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignQueryFiatListReq)) return e;
                                var t = new c.com.market.BuyRedesignQueryFiatListReq;
                                return null != e.cryptoCurrency && (t.cryptoCurrency = String(e.cryptoCurrency)), null != e.fiatCurrency && (t.fiatCurrency = String(e.fiatCurrency)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.cryptoCurrency = "", r.fiatCurrency = ""), null != e.cryptoCurrency && e.hasOwnProperty("cryptoCurrency") && (r.cryptoCurrency = e.cryptoCurrency), null != e.fiatCurrency && e.hasOwnProperty("fiatCurrency") && (r.fiatCurrency = e.fiatCurrency), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.OtcGetQuoteReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.fromCoin = "", e.prototype.toCoin = "", e.prototype.requestCoin = "", e.prototype.requestAmount = "", e.prototype.versionType = "", e.prototype.walletType = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.fromCoin), t.uint32(18).string(e.toCoin), t.uint32(26).string(e.requestCoin), t.uint32(34).string(e.requestAmount), null != e.versionType && Object.hasOwnProperty.call(e, "versionType") && t.uint32(42).string(e.versionType), null != e.walletType && Object.hasOwnProperty.call(e, "walletType") && t.uint32(50).string(e.walletType), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.OtcGetQuoteReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.fromCoin = e.string();
                                            break;
                                        case 2:
                                            i.toCoin = e.string();
                                            break;
                                        case 3:
                                            i.requestCoin = e.string();
                                            break;
                                        case 4:
                                            i.requestAmount = e.string();
                                            break;
                                        case 5:
                                            i.versionType = e.string();
                                            break;
                                        case 6:
                                            i.walletType = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("fromCoin")) throw a.ProtocolError("missing required 'fromCoin'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("toCoin")) throw a.ProtocolError("missing required 'toCoin'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("requestCoin")) throw a.ProtocolError("missing required 'requestCoin'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("requestAmount")) throw a.ProtocolError("missing required 'requestAmount'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.fromCoin) ? a.isString(e.toCoin) ? a.isString(e.requestCoin) ? a.isString(e.requestAmount) ? null != e.versionType && e.hasOwnProperty("versionType") && !a.isString(e.versionType) ? "versionType: string expected" : null != e.walletType && e.hasOwnProperty("walletType") && !a.isString(e.walletType) ? "walletType: string expected" : null : "requestAmount: string expected" : "requestCoin: string expected" : "toCoin: string expected" : "fromCoin: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.OtcGetQuoteReq)) return e;
                                var t = new c.com.market.OtcGetQuoteReq;
                                return null != e.fromCoin && (t.fromCoin = String(e.fromCoin)), null != e.toCoin && (t.toCoin = String(e.toCoin)), null != e.requestCoin && (t.requestCoin = String(e.requestCoin)), null != e.requestAmount && (t.requestAmount = String(e.requestAmount)), null != e.versionType && (t.versionType = String(e.versionType)), null != e.walletType && (t.walletType = String(e.walletType)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.fromCoin = "", r.toCoin = "", r.requestCoin = "", r.requestAmount = "", r.versionType = "", r.walletType = ""), null != e.fromCoin && e.hasOwnProperty("fromCoin") && (r.fromCoin = e.fromCoin), null != e.toCoin && e.hasOwnProperty("toCoin") && (r.toCoin = e.toCoin), null != e.requestCoin && e.hasOwnProperty("requestCoin") && (r.requestCoin = e.requestCoin), null != e.requestAmount && e.hasOwnProperty("requestAmount") && (r.requestAmount = e.requestAmount), null != e.versionType && e.hasOwnProperty("versionType") && (r.versionType = e.versionType), null != e.walletType && e.hasOwnProperty("walletType") && (r.walletType = e.walletType), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.FaceRecognitionReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.faceRecognitionId = "", e.prototype.faceRecognitionIndex = 0, e.prototype.transId = "", e.prototype.bizNo = "", e.prototype.videoBase64 = "", e.prototype.userId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.fvideoId = "", e.prototype.collectTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.platform = 0, e.prototype.extraInfo = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.faceRecognitionId), t.uint32(16).int32(e.faceRecognitionIndex), t.uint32(26).string(e.transId), null != e.bizNo && Object.hasOwnProperty.call(e, "bizNo") && t.uint32(34).string(e.bizNo), t.uint32(42).string(e.videoBase64), t.uint32(48).int64(e.userId), t.uint32(58).string(e.fvideoId), t.uint32(64).int64(e.collectTime), t.uint32(72).int32(e.platform), null != e.extraInfo && Object.hasOwnProperty.call(e, "extraInfo") && t.uint32(82).string(e.extraInfo), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.FaceRecognitionReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.faceRecognitionId = e.string();
                                            break;
                                        case 2:
                                            i.faceRecognitionIndex = e.int32();
                                            break;
                                        case 3:
                                            i.transId = e.string();
                                            break;
                                        case 4:
                                            i.bizNo = e.string();
                                            break;
                                        case 5:
                                            i.videoBase64 = e.string();
                                            break;
                                        case 6:
                                            i.userId = e.int64();
                                            break;
                                        case 7:
                                            i.fvideoId = e.string();
                                            break;
                                        case 8:
                                            i.collectTime = e.int64();
                                            break;
                                        case 9:
                                            i.platform = e.int32();
                                            break;
                                        case 10:
                                            i.extraInfo = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("faceRecognitionId")) throw a.ProtocolError("missing required 'faceRecognitionId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("faceRecognitionIndex")) throw a.ProtocolError("missing required 'faceRecognitionIndex'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("transId")) throw a.ProtocolError("missing required 'transId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("videoBase64")) throw a.ProtocolError("missing required 'videoBase64'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("userId")) throw a.ProtocolError("missing required 'userId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("fvideoId")) throw a.ProtocolError("missing required 'fvideoId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("collectTime")) throw a.ProtocolError("missing required 'collectTime'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("platform")) throw a.ProtocolError("missing required 'platform'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.faceRecognitionId) ? a.isInteger(e.faceRecognitionIndex) ? a.isString(e.transId) ? null != e.bizNo && e.hasOwnProperty("bizNo") && !a.isString(e.bizNo) ? "bizNo: string expected" : a.isString(e.videoBase64) ? a.isInteger(e.userId) || e.userId && a.isInteger(e.userId.low) && a.isInteger(e.userId.high) ? a.isString(e.fvideoId) ? a.isInteger(e.collectTime) || e.collectTime && a.isInteger(e.collectTime.low) && a.isInteger(e.collectTime.high) ? a.isInteger(e.platform) ? null != e.extraInfo && e.hasOwnProperty("extraInfo") && !a.isString(e.extraInfo) ? "extraInfo: string expected" : null : "platform: integer expected" : "collectTime: integer|Long expected" : "fvideoId: string expected" : "userId: integer|Long expected" : "videoBase64: string expected" : "transId: string expected" : "faceRecognitionIndex: integer expected" : "faceRecognitionId: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.FaceRecognitionReq)) return e;
                                var t = new c.com.market.FaceRecognitionReq;
                                return null != e.faceRecognitionId && (t.faceRecognitionId = String(e.faceRecognitionId)), null != e.faceRecognitionIndex && (t.faceRecognitionIndex = 0 | e.faceRecognitionIndex), null != e.transId && (t.transId = String(e.transId)), null != e.bizNo && (t.bizNo = String(e.bizNo)), null != e.videoBase64 && (t.videoBase64 = String(e.videoBase64)), null != e.userId && (a.Long ? (t.userId = a.Long.fromValue(e.userId)).unsigned = !1 : "string" === typeof e.userId ? t.userId = parseInt(e.userId, 10) : "number" === typeof e.userId ? t.userId = e.userId : "object" === typeof e.userId && (t.userId = new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber())), null != e.fvideoId && (t.fvideoId = String(e.fvideoId)), null != e.collectTime && (a.Long ? (t.collectTime = a.Long.fromValue(e.collectTime)).unsigned = !1 : "string" === typeof e.collectTime ? t.collectTime = parseInt(e.collectTime, 10) : "number" === typeof e.collectTime ? t.collectTime = e.collectTime : "object" === typeof e.collectTime && (t.collectTime = new a.LongBits(e.collectTime.low >>> 0, e.collectTime.high >>> 0).toNumber())), null != e.platform && (t.platform = 0 | e.platform), null != e.extraInfo && (t.extraInfo = String(e.extraInfo)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.faceRecognitionId = "", r.faceRecognitionIndex = 0, r.transId = "", r.bizNo = "", r.videoBase64 = "", a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.userId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.userId = t.longs === String ? "0" : 0;
                                    if (r.fvideoId = "", a.Long) {
                                        var i = new a.Long(0, 0, !1);
                                        r.collectTime = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                    } else r.collectTime = t.longs === String ? "0" : 0;
                                    r.platform = 0, r.extraInfo = ""
                                }
                                return null != e.faceRecognitionId && e.hasOwnProperty("faceRecognitionId") && (r.faceRecognitionId = e.faceRecognitionId), null != e.faceRecognitionIndex && e.hasOwnProperty("faceRecognitionIndex") && (r.faceRecognitionIndex = e.faceRecognitionIndex), null != e.transId && e.hasOwnProperty("transId") && (r.transId = e.transId), null != e.bizNo && e.hasOwnProperty("bizNo") && (r.bizNo = e.bizNo), null != e.videoBase64 && e.hasOwnProperty("videoBase64") && (r.videoBase64 = e.videoBase64), null != e.userId && e.hasOwnProperty("userId") && ("number" === typeof e.userId ? r.userId = t.longs === String ? String(e.userId) : e.userId : r.userId = t.longs === String ? a.Long.prototype.toString.call(e.userId) : t.longs === Number ? new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber() : e.userId), null != e.fvideoId && e.hasOwnProperty("fvideoId") && (r.fvideoId = e.fvideoId), null != e.collectTime && e.hasOwnProperty("collectTime") && ("number" === typeof e.collectTime ? r.collectTime = t.longs === String ? String(e.collectTime) : e.collectTime : r.collectTime = t.longs === String ? a.Long.prototype.toString.call(e.collectTime) : t.longs === Number ? new a.LongBits(e.collectTime.low >>> 0, e.collectTime.high >>> 0).toNumber() : e.collectTime), null != e.platform && e.hasOwnProperty("platform") && (r.platform = e.platform), null != e.extraInfo && e.hasOwnProperty("extraInfo") && (r.extraInfo = e.extraInfo), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.TrivialResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.hello = "", e.prototype.category = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.hello && Object.hasOwnProperty.call(e, "hello") && t.uint32(10).string(e.hello), null != e.category && Object.hasOwnProperty.call(e, "category") && t.uint32(16).int32(e.category), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.TrivialResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.hello = e.string();
                                            break;
                                        case 2:
                                            i.category = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.hello && e.hasOwnProperty("hello") && !a.isString(e.hello)) return "hello: string expected";
                                if (null != e.category && e.hasOwnProperty("category")) switch (e.category) {
                                    default: return "category: enum value expected";
                                    case 0:
                                            case 1:
                                            case 2:
                                            case 3:
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.TrivialResp)) return e;
                                var t = new c.com.market.TrivialResp;
                                switch (null != e.hello && (t.hello = String(e.hello)), e.category) {
                                    case "Children":
                                    case 0:
                                        t.category = 0;
                                        break;
                                    case "Adult":
                                    case 1:
                                        t.category = 1;
                                        break;
                                    case "OLD":
                                    case 2:
                                        t.category = 2;
                                        break;
                                    case "UNKNOWN":
                                    case 3:
                                        t.category = 3
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.hello = "", r.category = t.enums === String ? "Children" : 0), null != e.hello && e.hasOwnProperty("hello") && (r.hello = e.hello), null != e.category && e.hasOwnProperty("category") && (r.category = t.enums === String ? c.com.market.AgeCategory[e.category] : e.category), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.AgeCategory = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "Children"] = 0, t[e[1] = "Adult"] = 1, t[e[2] = "OLD"] = 2, t[e[3] = "UNKNOWN"] = 3, t
                        }(), e.BalanceValuationResp = function() {
                            var e = function(e) {
                                if (this.balanceValuation = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.balanceValuation = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.balanceValuation && e.balanceValuation.length)
                                    for (var r = 0; r < e.balanceValuation.length; ++r) c.com.market.BalanceValuationResp.BalanceValuation.encode(e.balanceValuation[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BalanceValuationResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.balanceValuation && i.balanceValuation.length || (i.balanceValuation = []), i.balanceValuation.push(c.com.market.BalanceValuationResp.BalanceValuation.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.balanceValuation && e.hasOwnProperty("balanceValuation")) {
                                    if (!Array.isArray(e.balanceValuation)) return "balanceValuation: array expected";
                                    for (var t = 0; t < e.balanceValuation.length; ++t) {
                                        var r = c.com.market.BalanceValuationResp.BalanceValuation.verify(e.balanceValuation[t]);
                                        if (r) return "balanceValuation." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BalanceValuationResp)) return e;
                                var t = new c.com.market.BalanceValuationResp;
                                if (e.balanceValuation) {
                                    if (!Array.isArray(e.balanceValuation)) throw TypeError(".com.market.BalanceValuationResp.balanceValuation: array expected");
                                    t.balanceValuation = [];
                                    for (var r = 0; r < e.balanceValuation.length; ++r) {
                                        if ("object" !== typeof e.balanceValuation[r]) throw TypeError(".com.market.BalanceValuationResp.balanceValuation: object expected");
                                        t.balanceValuation[r] = c.com.market.BalanceValuationResp.BalanceValuation.fromObject(e.balanceValuation[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.balanceValuation = []), e.balanceValuation && e.balanceValuation.length) {
                                    r.balanceValuation = [];
                                    for (var n = 0; n < e.balanceValuation.length; ++n) r.balanceValuation[n] = c.com.market.BalanceValuationResp.BalanceValuation.toObject(e.balanceValuation[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.BalanceValuation = function() {
                                var e = function(e) {
                                    if (e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.asset = "", e.prototype.assetName = "", e.prototype.free = "", e.prototype.locked = "", e.prototype.freeze = "", e.prototype.withdrawing = "", e.prototype.test = 0, e.prototype.plateType = "", e.prototype.btcValuation = "", e.prototype.ipoable = "", e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    return t || (t = s.create()), t.uint32(10).string(e.asset), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), t.uint32(26).string(e.free), t.uint32(34).string(e.locked), t.uint32(42).string(e.freeze), t.uint32(50).string(e.withdrawing), t.uint32(56).int32(e.test), t.uint32(66).string(e.plateType), null != e.btcValuation && Object.hasOwnProperty.call(e, "btcValuation") && t.uint32(74).string(e.btcValuation), null != e.ipoable && Object.hasOwnProperty.call(e, "ipoable") && t.uint32(82).string(e.ipoable), t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BalanceValuationResp.BalanceValuation; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.asset = e.string();
                                                break;
                                            case 2:
                                                i.assetName = e.string();
                                                break;
                                            case 3:
                                                i.free = e.string();
                                                break;
                                            case 4:
                                                i.locked = e.string();
                                                break;
                                            case 5:
                                                i.freeze = e.string();
                                                break;
                                            case 6:
                                                i.withdrawing = e.string();
                                                break;
                                            case 7:
                                                i.test = e.int32();
                                                break;
                                            case 8:
                                                i.plateType = e.string();
                                                break;
                                            case 9:
                                                i.btcValuation = e.string();
                                                break;
                                            case 10:
                                                i.ipoable = e.string();
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("asset")) throw a.ProtocolError("missing required 'asset'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("free")) throw a.ProtocolError("missing required 'free'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("locked")) throw a.ProtocolError("missing required 'locked'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("freeze")) throw a.ProtocolError("missing required 'freeze'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("withdrawing")) throw a.ProtocolError("missing required 'withdrawing'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("test")) throw a.ProtocolError("missing required 'test'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("plateType")) throw a.ProtocolError("missing required 'plateType'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    return "object" !== typeof e || null === e ? "object expected" : a.isString(e.asset) ? null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : a.isString(e.free) ? a.isString(e.locked) ? a.isString(e.freeze) ? a.isString(e.withdrawing) ? a.isInteger(e.test) ? a.isString(e.plateType) ? null != e.btcValuation && e.hasOwnProperty("btcValuation") && !a.isString(e.btcValuation) ? "btcValuation: string expected" : null != e.ipoable && e.hasOwnProperty("ipoable") && !a.isString(e.ipoable) ? "ipoable: string expected" : null : "plateType: string expected" : "test: integer expected" : "withdrawing: string expected" : "freeze: string expected" : "locked: string expected" : "free: string expected" : "asset: string expected"
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.market.BalanceValuationResp.BalanceValuation)) return e;
                                    var t = new c.com.market.BalanceValuationResp.BalanceValuation;
                                    return null != e.asset && (t.asset = String(e.asset)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.free && (t.free = String(e.free)), null != e.locked && (t.locked = String(e.locked)), null != e.freeze && (t.freeze = String(e.freeze)), null != e.withdrawing && (t.withdrawing = String(e.withdrawing)), null != e.test && (t.test = 0 | e.test), null != e.plateType && (t.plateType = String(e.plateType)), null != e.btcValuation && (t.btcValuation = String(e.btcValuation)), null != e.ipoable && (t.ipoable = String(e.ipoable)), t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    return t.defaults && (r.asset = "", r.assetName = "", r.free = "", r.locked = "", r.freeze = "", r.withdrawing = "", r.test = 0, r.plateType = "", r.btcValuation = "", r.ipoable = ""), null != e.asset && e.hasOwnProperty("asset") && (r.asset = e.asset), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.free && e.hasOwnProperty("free") && (r.free = e.free), null != e.locked && e.hasOwnProperty("locked") && (r.locked = e.locked), null != e.freeze && e.hasOwnProperty("freeze") && (r.freeze = e.freeze), null != e.withdrawing && e.hasOwnProperty("withdrawing") && (r.withdrawing = e.withdrawing), null != e.test && e.hasOwnProperty("test") && (r.test = e.test), null != e.plateType && e.hasOwnProperty("plateType") && (r.plateType = e.plateType), null != e.btcValuation && e.hasOwnProperty("btcValuation") && (r.btcValuation = e.btcValuation), null != e.ipoable && e.hasOwnProperty("ipoable") && (r.ipoable = e.ipoable), r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e
                            }(), e
                        }(), e.KycStatusResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.kycStatus = 0, e.prototype.kycMessage = "", e.prototype.type = "", e.prototype.transId = "", e.prototype.qrCode = "", e.prototype.kycSubStatus = 0, e.prototype.fillInfo = null, e.prototype.forbidCountryPassed = !1, e.prototype.kycLevel = 0, e.prototype.addressStatus = 0, e.prototype.certificateSubStatus = "", e.prototype.addressTips = "", e.prototype.baseFillStatus = "", e.prototype.baseSubStatus = "", e.prototype.baseFillTips = "", e.prototype.jumioStatus = "", e.prototype.jumioTips = "", e.prototype.faceStatus = "", e.prototype.faceTips = "", e.prototype.faceOcrStatus = "", e.prototype.faceOcrTips = "", e.prototype.googleFormStatus = "", e.prototype.googleFormTips = "", e.prototype.needAddress = !1, e.prototype.flowDefine = "", e.prototype.faceTransId = "", e.prototype.directorStatus = "", e.prototype.uboStatus = "", e.prototype.dealerStatus = "", e.prototype.fiatStatus = "", e.prototype.fiatTips = "", e.prototype.identityExpectCompleteTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.poaExpectCompleteTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.kycFlowExten = "", e.prototype.eddStatus = "", e.prototype.eddTips = "", e.prototype.wckStatus = "", e.prototype.wckTips = "", e.prototype.riskRateScore = "", e.prototype.riskRateLevel = "", e.prototype.needEdd = !1, e.prototype.passKycLevel = "", e.prototype.currentKycLevel = "", e.prototype.currentKycLevelStatus = "", e.prototype.kycLevelTemplateModel = null, e.prototype.baseExpectCompleteTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.eddExpectCompleteTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.submitExpectCompleteTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.basicLocalVerifyPass = !1, e.prototype.wckExpectCompleteTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.eddDetailStatus = "", e.prototype.eddDetailTips = "", e.prototype.sowStatus = "", e.prototype.sowTips = "", e.prototype.eddSubmitReason = "", e.prototype.questionStatus = "", e.prototype.frontDisplayLevelStatus = "", e.prototype.frontDisplayLevelMsg = "", e.prototype.identityVendor = "", e.prototype.uploadThirdPart = !1, e.prototype.eddSubmitType = "", e.prototype.eddType = "", e.prototype.assistKyc = !1, e.prototype.companyLastOperTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.companyLastOperType = "", e.prototype.businessAddressStatus = "", e.prototype.uboAddressStatus = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(8).int32(e.kycStatus), null != e.kycMessage && Object.hasOwnProperty.call(e, "kycMessage") && t.uint32(18).string(e.kycMessage), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(26).string(e.type), null != e.transId && Object.hasOwnProperty.call(e, "transId") && t.uint32(34).string(e.transId), null != e.qrCode && Object.hasOwnProperty.call(e, "qrCode") && t.uint32(42).string(e.qrCode), null != e.kycSubStatus && Object.hasOwnProperty.call(e, "kycSubStatus") && t.uint32(48).int32(e.kycSubStatus), null != e.fillInfo && Object.hasOwnProperty.call(e, "fillInfo") && c.com.market.FillInfo.encode(e.fillInfo, t.uint32(58).fork()).ldelim(), null != e.forbidCountryPassed && Object.hasOwnProperty.call(e, "forbidCountryPassed") && t.uint32(64).bool(e.forbidCountryPassed), null != e.kycLevel && Object.hasOwnProperty.call(e, "kycLevel") && t.uint32(72).int32(e.kycLevel), null != e.addressStatus && Object.hasOwnProperty.call(e, "addressStatus") && t.uint32(80).int32(e.addressStatus), null != e.certificateSubStatus && Object.hasOwnProperty.call(e, "certificateSubStatus") && t.uint32(90).string(e.certificateSubStatus), null != e.addressTips && Object.hasOwnProperty.call(e, "addressTips") && t.uint32(98).string(e.addressTips), null != e.baseFillStatus && Object.hasOwnProperty.call(e, "baseFillStatus") && t.uint32(106).string(e.baseFillStatus), null != e.baseSubStatus && Object.hasOwnProperty.call(e, "baseSubStatus") && t.uint32(114).string(e.baseSubStatus), null != e.baseFillTips && Object.hasOwnProperty.call(e, "baseFillTips") && t.uint32(122).string(e.baseFillTips), null != e.jumioStatus && Object.hasOwnProperty.call(e, "jumioStatus") && t.uint32(130).string(e.jumioStatus), null != e.jumioTips && Object.hasOwnProperty.call(e, "jumioTips") && t.uint32(138).string(e.jumioTips), null != e.faceStatus && Object.hasOwnProperty.call(e, "faceStatus") && t.uint32(146).string(e.faceStatus), null != e.faceTips && Object.hasOwnProperty.call(e, "faceTips") && t.uint32(154).string(e.faceTips), null != e.faceOcrStatus && Object.hasOwnProperty.call(e, "faceOcrStatus") && t.uint32(162).string(e.faceOcrStatus), null != e.faceOcrTips && Object.hasOwnProperty.call(e, "faceOcrTips") && t.uint32(170).string(e.faceOcrTips), null != e.googleFormStatus && Object.hasOwnProperty.call(e, "googleFormStatus") && t.uint32(178).string(e.googleFormStatus), null != e.googleFormTips && Object.hasOwnProperty.call(e, "googleFormTips") && t.uint32(186).string(e.googleFormTips), null != e.needAddress && Object.hasOwnProperty.call(e, "needAddress") && t.uint32(192).bool(e.needAddress), null != e.flowDefine && Object.hasOwnProperty.call(e, "flowDefine") && t.uint32(202).string(e.flowDefine), null != e.faceTransId && Object.hasOwnProperty.call(e, "faceTransId") && t.uint32(210).string(e.faceTransId), null != e.directorStatus && Object.hasOwnProperty.call(e, "directorStatus") && t.uint32(218).string(e.directorStatus), null != e.uboStatus && Object.hasOwnProperty.call(e, "uboStatus") && t.uint32(226).string(e.uboStatus), null != e.dealerStatus && Object.hasOwnProperty.call(e, "dealerStatus") && t.uint32(234).string(e.dealerStatus), null != e.fiatStatus && Object.hasOwnProperty.call(e, "fiatStatus") && t.uint32(242).string(e.fiatStatus), null != e.fiatTips && Object.hasOwnProperty.call(e, "fiatTips") && t.uint32(250).string(e.fiatTips), null != e.identityExpectCompleteTime && Object.hasOwnProperty.call(e, "identityExpectCompleteTime") && t.uint32(256).int64(e.identityExpectCompleteTime), null != e.poaExpectCompleteTime && Object.hasOwnProperty.call(e, "poaExpectCompleteTime") && t.uint32(264).int64(e.poaExpectCompleteTime), null != e.kycFlowExten && Object.hasOwnProperty.call(e, "kycFlowExten") && t.uint32(274).string(e.kycFlowExten), null != e.eddStatus && Object.hasOwnProperty.call(e, "eddStatus") && t.uint32(282).string(e.eddStatus), null != e.eddTips && Object.hasOwnProperty.call(e, "eddTips") && t.uint32(290).string(e.eddTips), null != e.wckStatus && Object.hasOwnProperty.call(e, "wckStatus") && t.uint32(298).string(e.wckStatus), null != e.wckTips && Object.hasOwnProperty.call(e, "wckTips") && t.uint32(306).string(e.wckTips), null != e.riskRateScore && Object.hasOwnProperty.call(e, "riskRateScore") && t.uint32(314).string(e.riskRateScore), null != e.riskRateLevel && Object.hasOwnProperty.call(e, "riskRateLevel") && t.uint32(322).string(e.riskRateLevel), null != e.needEdd && Object.hasOwnProperty.call(e, "needEdd") && t.uint32(328).bool(e.needEdd), null != e.passKycLevel && Object.hasOwnProperty.call(e, "passKycLevel") && t.uint32(338).string(e.passKycLevel), null != e.currentKycLevel && Object.hasOwnProperty.call(e, "currentKycLevel") && t.uint32(346).string(e.currentKycLevel), null != e.currentKycLevelStatus && Object.hasOwnProperty.call(e, "currentKycLevelStatus") && t.uint32(354).string(e.currentKycLevelStatus), null != e.kycLevelTemplateModel && Object.hasOwnProperty.call(e, "kycLevelTemplateModel") && c.com.market.KycLevelTemplateModel.encode(e.kycLevelTemplateModel, t.uint32(362).fork()).ldelim(), null != e.baseExpectCompleteTime && Object.hasOwnProperty.call(e, "baseExpectCompleteTime") && t.uint32(368).int64(e.baseExpectCompleteTime), null != e.eddExpectCompleteTime && Object.hasOwnProperty.call(e, "eddExpectCompleteTime") && t.uint32(376).int64(e.eddExpectCompleteTime), null != e.submitExpectCompleteTime && Object.hasOwnProperty.call(e, "submitExpectCompleteTime") && t.uint32(384).int64(e.submitExpectCompleteTime), null != e.basicLocalVerifyPass && Object.hasOwnProperty.call(e, "basicLocalVerifyPass") && t.uint32(392).bool(e.basicLocalVerifyPass), null != e.wckExpectCompleteTime && Object.hasOwnProperty.call(e, "wckExpectCompleteTime") && t.uint32(400).int64(e.wckExpectCompleteTime), null != e.eddDetailStatus && Object.hasOwnProperty.call(e, "eddDetailStatus") && t.uint32(410).string(e.eddDetailStatus), null != e.eddDetailTips && Object.hasOwnProperty.call(e, "eddDetailTips") && t.uint32(418).string(e.eddDetailTips), null != e.sowStatus && Object.hasOwnProperty.call(e, "sowStatus") && t.uint32(426).string(e.sowStatus), null != e.sowTips && Object.hasOwnProperty.call(e, "sowTips") && t.uint32(434).string(e.sowTips), null != e.eddSubmitReason && Object.hasOwnProperty.call(e, "eddSubmitReason") && t.uint32(442).string(e.eddSubmitReason), null != e.questionStatus && Object.hasOwnProperty.call(e, "questionStatus") && t.uint32(450).string(e.questionStatus), null != e.frontDisplayLevelStatus && Object.hasOwnProperty.call(e, "frontDisplayLevelStatus") && t.uint32(458).string(e.frontDisplayLevelStatus), null != e.frontDisplayLevelMsg && Object.hasOwnProperty.call(e, "frontDisplayLevelMsg") && t.uint32(466).string(e.frontDisplayLevelMsg), null != e.identityVendor && Object.hasOwnProperty.call(e, "identityVendor") && t.uint32(474).string(e.identityVendor), null != e.uploadThirdPart && Object.hasOwnProperty.call(e, "uploadThirdPart") && t.uint32(480).bool(e.uploadThirdPart), null != e.eddSubmitType && Object.hasOwnProperty.call(e, "eddSubmitType") && t.uint32(490).string(e.eddSubmitType), null != e.eddType && Object.hasOwnProperty.call(e, "eddType") && t.uint32(498).string(e.eddType), null != e.assistKyc && Object.hasOwnProperty.call(e, "assistKyc") && t.uint32(504).bool(e.assistKyc), null != e.companyLastOperTime && Object.hasOwnProperty.call(e, "companyLastOperTime") && t.uint32(512).int64(e.companyLastOperTime), null != e.companyLastOperType && Object.hasOwnProperty.call(e, "companyLastOperType") && t.uint32(522).string(e.companyLastOperType), null != e.businessAddressStatus && Object.hasOwnProperty.call(e, "businessAddressStatus") && t.uint32(530).string(e.businessAddressStatus), null != e.uboAddressStatus && Object.hasOwnProperty.call(e, "uboAddressStatus") && t.uint32(538).string(e.uboAddressStatus), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.KycStatusResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.kycStatus = e.int32();
                                            break;
                                        case 2:
                                            i.kycMessage = e.string();
                                            break;
                                        case 3:
                                            i.type = e.string();
                                            break;
                                        case 4:
                                            i.transId = e.string();
                                            break;
                                        case 5:
                                            i.qrCode = e.string();
                                            break;
                                        case 6:
                                            i.kycSubStatus = e.int32();
                                            break;
                                        case 7:
                                            i.fillInfo = c.com.market.FillInfo.decode(e, e.uint32());
                                            break;
                                        case 8:
                                            i.forbidCountryPassed = e.bool();
                                            break;
                                        case 9:
                                            i.kycLevel = e.int32();
                                            break;
                                        case 10:
                                            i.addressStatus = e.int32();
                                            break;
                                        case 11:
                                            i.certificateSubStatus = e.string();
                                            break;
                                        case 12:
                                            i.addressTips = e.string();
                                            break;
                                        case 13:
                                            i.baseFillStatus = e.string();
                                            break;
                                        case 14:
                                            i.baseSubStatus = e.string();
                                            break;
                                        case 15:
                                            i.baseFillTips = e.string();
                                            break;
                                        case 16:
                                            i.jumioStatus = e.string();
                                            break;
                                        case 17:
                                            i.jumioTips = e.string();
                                            break;
                                        case 18:
                                            i.faceStatus = e.string();
                                            break;
                                        case 19:
                                            i.faceTips = e.string();
                                            break;
                                        case 20:
                                            i.faceOcrStatus = e.string();
                                            break;
                                        case 21:
                                            i.faceOcrTips = e.string();
                                            break;
                                        case 22:
                                            i.googleFormStatus = e.string();
                                            break;
                                        case 23:
                                            i.googleFormTips = e.string();
                                            break;
                                        case 24:
                                            i.needAddress = e.bool();
                                            break;
                                        case 25:
                                            i.flowDefine = e.string();
                                            break;
                                        case 26:
                                            i.faceTransId = e.string();
                                            break;
                                        case 27:
                                            i.directorStatus = e.string();
                                            break;
                                        case 28:
                                            i.uboStatus = e.string();
                                            break;
                                        case 29:
                                            i.dealerStatus = e.string();
                                            break;
                                        case 30:
                                            i.fiatStatus = e.string();
                                            break;
                                        case 31:
                                            i.fiatTips = e.string();
                                            break;
                                        case 32:
                                            i.identityExpectCompleteTime = e.int64();
                                            break;
                                        case 33:
                                            i.poaExpectCompleteTime = e.int64();
                                            break;
                                        case 34:
                                            i.kycFlowExten = e.string();
                                            break;
                                        case 35:
                                            i.eddStatus = e.string();
                                            break;
                                        case 36:
                                            i.eddTips = e.string();
                                            break;
                                        case 37:
                                            i.wckStatus = e.string();
                                            break;
                                        case 38:
                                            i.wckTips = e.string();
                                            break;
                                        case 39:
                                            i.riskRateScore = e.string();
                                            break;
                                        case 40:
                                            i.riskRateLevel = e.string();
                                            break;
                                        case 41:
                                            i.needEdd = e.bool();
                                            break;
                                        case 42:
                                            i.passKycLevel = e.string();
                                            break;
                                        case 43:
                                            i.currentKycLevel = e.string();
                                            break;
                                        case 44:
                                            i.currentKycLevelStatus = e.string();
                                            break;
                                        case 45:
                                            i.kycLevelTemplateModel = c.com.market.KycLevelTemplateModel.decode(e, e.uint32());
                                            break;
                                        case 46:
                                            i.baseExpectCompleteTime = e.int64();
                                            break;
                                        case 47:
                                            i.eddExpectCompleteTime = e.int64();
                                            break;
                                        case 48:
                                            i.submitExpectCompleteTime = e.int64();
                                            break;
                                        case 49:
                                            i.basicLocalVerifyPass = e.bool();
                                            break;
                                        case 50:
                                            i.wckExpectCompleteTime = e.int64();
                                            break;
                                        case 51:
                                            i.eddDetailStatus = e.string();
                                            break;
                                        case 52:
                                            i.eddDetailTips = e.string();
                                            break;
                                        case 53:
                                            i.sowStatus = e.string();
                                            break;
                                        case 54:
                                            i.sowTips = e.string();
                                            break;
                                        case 55:
                                            i.eddSubmitReason = e.string();
                                            break;
                                        case 56:
                                            i.questionStatus = e.string();
                                            break;
                                        case 57:
                                            i.frontDisplayLevelStatus = e.string();
                                            break;
                                        case 58:
                                            i.frontDisplayLevelMsg = e.string();
                                            break;
                                        case 59:
                                            i.identityVendor = e.string();
                                            break;
                                        case 60:
                                            i.uploadThirdPart = e.bool();
                                            break;
                                        case 61:
                                            i.eddSubmitType = e.string();
                                            break;
                                        case 62:
                                            i.eddType = e.string();
                                            break;
                                        case 63:
                                            i.assistKyc = e.bool();
                                            break;
                                        case 64:
                                            i.companyLastOperTime = e.int64();
                                            break;
                                        case 65:
                                            i.companyLastOperType = e.string();
                                            break;
                                        case 66:
                                            i.businessAddressStatus = e.string();
                                            break;
                                        case 67:
                                            i.uboAddressStatus = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("kycStatus")) throw a.ProtocolError("missing required 'kycStatus'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isInteger(e.kycStatus)) return "kycStatus: integer expected";
                                if (null != e.kycMessage && e.hasOwnProperty("kycMessage") && !a.isString(e.kycMessage)) return "kycMessage: string expected";
                                if (null != e.type && e.hasOwnProperty("type") && !a.isString(e.type)) return "type: string expected";
                                if (null != e.transId && e.hasOwnProperty("transId") && !a.isString(e.transId)) return "transId: string expected";
                                if (null != e.qrCode && e.hasOwnProperty("qrCode") && !a.isString(e.qrCode)) return "qrCode: string expected";
                                if (null != e.kycSubStatus && e.hasOwnProperty("kycSubStatus")) switch (e.kycSubStatus) {
                                    default: return "kycSubStatus: enum value expected";
                                    case 0:
                                            case 1:
                                            case 2:
                                            case 3:
                                            case 4:
                                            case 5:
                                            case 6:
                                }
                                if (null != e.fillInfo && e.hasOwnProperty("fillInfo")) {
                                    var t = c.com.market.FillInfo.verify(e.fillInfo);
                                    if (t) return "fillInfo." + t
                                }
                                if (null != e.forbidCountryPassed && e.hasOwnProperty("forbidCountryPassed") && "boolean" !== typeof e.forbidCountryPassed) return "forbidCountryPassed: boolean expected";
                                if (null != e.kycLevel && e.hasOwnProperty("kycLevel") && !a.isInteger(e.kycLevel)) return "kycLevel: integer expected";
                                if (null != e.addressStatus && e.hasOwnProperty("addressStatus")) switch (e.addressStatus) {
                                    default: return "addressStatus: enum value expected";
                                    case 0:
                                            case 1:
                                            case 2:
                                            case 3:
                                            case 4:
                                            case 5:
                                }
                                if (null != e.certificateSubStatus && e.hasOwnProperty("certificateSubStatus") && !a.isString(e.certificateSubStatus)) return "certificateSubStatus: string expected";
                                if (null != e.addressTips && e.hasOwnProperty("addressTips") && !a.isString(e.addressTips)) return "addressTips: string expected";
                                if (null != e.baseFillStatus && e.hasOwnProperty("baseFillStatus") && !a.isString(e.baseFillStatus)) return "baseFillStatus: string expected";
                                if (null != e.baseSubStatus && e.hasOwnProperty("baseSubStatus") && !a.isString(e.baseSubStatus)) return "baseSubStatus: string expected";
                                if (null != e.baseFillTips && e.hasOwnProperty("baseFillTips") && !a.isString(e.baseFillTips)) return "baseFillTips: string expected";
                                if (null != e.jumioStatus && e.hasOwnProperty("jumioStatus") && !a.isString(e.jumioStatus)) return "jumioStatus: string expected";
                                if (null != e.jumioTips && e.hasOwnProperty("jumioTips") && !a.isString(e.jumioTips)) return "jumioTips: string expected";
                                if (null != e.faceStatus && e.hasOwnProperty("faceStatus") && !a.isString(e.faceStatus)) return "faceStatus: string expected";
                                if (null != e.faceTips && e.hasOwnProperty("faceTips") && !a.isString(e.faceTips)) return "faceTips: string expected";
                                if (null != e.faceOcrStatus && e.hasOwnProperty("faceOcrStatus") && !a.isString(e.faceOcrStatus)) return "faceOcrStatus: string expected";
                                if (null != e.faceOcrTips && e.hasOwnProperty("faceOcrTips") && !a.isString(e.faceOcrTips)) return "faceOcrTips: string expected";
                                if (null != e.googleFormStatus && e.hasOwnProperty("googleFormStatus") && !a.isString(e.googleFormStatus)) return "googleFormStatus: string expected";
                                if (null != e.googleFormTips && e.hasOwnProperty("googleFormTips") && !a.isString(e.googleFormTips)) return "googleFormTips: string expected";
                                if (null != e.needAddress && e.hasOwnProperty("needAddress") && "boolean" !== typeof e.needAddress) return "needAddress: boolean expected";
                                if (null != e.flowDefine && e.hasOwnProperty("flowDefine") && !a.isString(e.flowDefine)) return "flowDefine: string expected";
                                if (null != e.faceTransId && e.hasOwnProperty("faceTransId") && !a.isString(e.faceTransId)) return "faceTransId: string expected";
                                if (null != e.directorStatus && e.hasOwnProperty("directorStatus") && !a.isString(e.directorStatus)) return "directorStatus: string expected";
                                if (null != e.uboStatus && e.hasOwnProperty("uboStatus") && !a.isString(e.uboStatus)) return "uboStatus: string expected";
                                if (null != e.dealerStatus && e.hasOwnProperty("dealerStatus") && !a.isString(e.dealerStatus)) return "dealerStatus: string expected";
                                if (null != e.fiatStatus && e.hasOwnProperty("fiatStatus") && !a.isString(e.fiatStatus)) return "fiatStatus: string expected";
                                if (null != e.fiatTips && e.hasOwnProperty("fiatTips") && !a.isString(e.fiatTips)) return "fiatTips: string expected";
                                if (null != e.identityExpectCompleteTime && e.hasOwnProperty("identityExpectCompleteTime") && !a.isInteger(e.identityExpectCompleteTime) && !(e.identityExpectCompleteTime && a.isInteger(e.identityExpectCompleteTime.low) && a.isInteger(e.identityExpectCompleteTime.high))) return "identityExpectCompleteTime: integer|Long expected";
                                if (null != e.poaExpectCompleteTime && e.hasOwnProperty("poaExpectCompleteTime") && !a.isInteger(e.poaExpectCompleteTime) && !(e.poaExpectCompleteTime && a.isInteger(e.poaExpectCompleteTime.low) && a.isInteger(e.poaExpectCompleteTime.high))) return "poaExpectCompleteTime: integer|Long expected";
                                if (null != e.kycFlowExten && e.hasOwnProperty("kycFlowExten") && !a.isString(e.kycFlowExten)) return "kycFlowExten: string expected";
                                if (null != e.eddStatus && e.hasOwnProperty("eddStatus") && !a.isString(e.eddStatus)) return "eddStatus: string expected";
                                if (null != e.eddTips && e.hasOwnProperty("eddTips") && !a.isString(e.eddTips)) return "eddTips: string expected";
                                if (null != e.wckStatus && e.hasOwnProperty("wckStatus") && !a.isString(e.wckStatus)) return "wckStatus: string expected";
                                if (null != e.wckTips && e.hasOwnProperty("wckTips") && !a.isString(e.wckTips)) return "wckTips: string expected";
                                if (null != e.riskRateScore && e.hasOwnProperty("riskRateScore") && !a.isString(e.riskRateScore)) return "riskRateScore: string expected";
                                if (null != e.riskRateLevel && e.hasOwnProperty("riskRateLevel") && !a.isString(e.riskRateLevel)) return "riskRateLevel: string expected";
                                if (null != e.needEdd && e.hasOwnProperty("needEdd") && "boolean" !== typeof e.needEdd) return "needEdd: boolean expected";
                                if (null != e.passKycLevel && e.hasOwnProperty("passKycLevel") && !a.isString(e.passKycLevel)) return "passKycLevel: string expected";
                                if (null != e.currentKycLevel && e.hasOwnProperty("currentKycLevel") && !a.isString(e.currentKycLevel)) return "currentKycLevel: string expected";
                                if (null != e.currentKycLevelStatus && e.hasOwnProperty("currentKycLevelStatus") && !a.isString(e.currentKycLevelStatus)) return "currentKycLevelStatus: string expected";
                                if (null != e.kycLevelTemplateModel && e.hasOwnProperty("kycLevelTemplateModel")) {
                                    var r = c.com.market.KycLevelTemplateModel.verify(e.kycLevelTemplateModel);
                                    if (r) return "kycLevelTemplateModel." + r
                                }
                                return null == e.baseExpectCompleteTime || !e.hasOwnProperty("baseExpectCompleteTime") || a.isInteger(e.baseExpectCompleteTime) || e.baseExpectCompleteTime && a.isInteger(e.baseExpectCompleteTime.low) && a.isInteger(e.baseExpectCompleteTime.high) ? null == e.eddExpectCompleteTime || !e.hasOwnProperty("eddExpectCompleteTime") || a.isInteger(e.eddExpectCompleteTime) || e.eddExpectCompleteTime && a.isInteger(e.eddExpectCompleteTime.low) && a.isInteger(e.eddExpectCompleteTime.high) ? null == e.submitExpectCompleteTime || !e.hasOwnProperty("submitExpectCompleteTime") || a.isInteger(e.submitExpectCompleteTime) || e.submitExpectCompleteTime && a.isInteger(e.submitExpectCompleteTime.low) && a.isInteger(e.submitExpectCompleteTime.high) ? null != e.basicLocalVerifyPass && e.hasOwnProperty("basicLocalVerifyPass") && "boolean" !== typeof e.basicLocalVerifyPass ? "basicLocalVerifyPass: boolean expected" : null == e.wckExpectCompleteTime || !e.hasOwnProperty("wckExpectCompleteTime") || a.isInteger(e.wckExpectCompleteTime) || e.wckExpectCompleteTime && a.isInteger(e.wckExpectCompleteTime.low) && a.isInteger(e.wckExpectCompleteTime.high) ? null != e.eddDetailStatus && e.hasOwnProperty("eddDetailStatus") && !a.isString(e.eddDetailStatus) ? "eddDetailStatus: string expected" : null != e.eddDetailTips && e.hasOwnProperty("eddDetailTips") && !a.isString(e.eddDetailTips) ? "eddDetailTips: string expected" : null != e.sowStatus && e.hasOwnProperty("sowStatus") && !a.isString(e.sowStatus) ? "sowStatus: string expected" : null != e.sowTips && e.hasOwnProperty("sowTips") && !a.isString(e.sowTips) ? "sowTips: string expected" : null != e.eddSubmitReason && e.hasOwnProperty("eddSubmitReason") && !a.isString(e.eddSubmitReason) ? "eddSubmitReason: string expected" : null != e.questionStatus && e.hasOwnProperty("questionStatus") && !a.isString(e.questionStatus) ? "questionStatus: string expected" : null != e.frontDisplayLevelStatus && e.hasOwnProperty("frontDisplayLevelStatus") && !a.isString(e.frontDisplayLevelStatus) ? "frontDisplayLevelStatus: string expected" : null != e.frontDisplayLevelMsg && e.hasOwnProperty("frontDisplayLevelMsg") && !a.isString(e.frontDisplayLevelMsg) ? "frontDisplayLevelMsg: string expected" : null != e.identityVendor && e.hasOwnProperty("identityVendor") && !a.isString(e.identityVendor) ? "identityVendor: string expected" : null != e.uploadThirdPart && e.hasOwnProperty("uploadThirdPart") && "boolean" !== typeof e.uploadThirdPart ? "uploadThirdPart: boolean expected" : null != e.eddSubmitType && e.hasOwnProperty("eddSubmitType") && !a.isString(e.eddSubmitType) ? "eddSubmitType: string expected" : null != e.eddType && e.hasOwnProperty("eddType") && !a.isString(e.eddType) ? "eddType: string expected" : null != e.assistKyc && e.hasOwnProperty("assistKyc") && "boolean" !== typeof e.assistKyc ? "assistKyc: boolean expected" : null == e.companyLastOperTime || !e.hasOwnProperty("companyLastOperTime") || a.isInteger(e.companyLastOperTime) || e.companyLastOperTime && a.isInteger(e.companyLastOperTime.low) && a.isInteger(e.companyLastOperTime.high) ? null != e.companyLastOperType && e.hasOwnProperty("companyLastOperType") && !a.isString(e.companyLastOperType) ? "companyLastOperType: string expected" : null != e.businessAddressStatus && e.hasOwnProperty("businessAddressStatus") && !a.isString(e.businessAddressStatus) ? "businessAddressStatus: string expected" : null != e.uboAddressStatus && e.hasOwnProperty("uboAddressStatus") && !a.isString(e.uboAddressStatus) ? "uboAddressStatus: string expected" : null : "companyLastOperTime: integer|Long expected" : "wckExpectCompleteTime: integer|Long expected" : "submitExpectCompleteTime: integer|Long expected" : "eddExpectCompleteTime: integer|Long expected" : "baseExpectCompleteTime: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.KycStatusResp)) return e;
                                var t = new c.com.market.KycStatusResp;
                                switch (null != e.kycStatus && (t.kycStatus = 0 | e.kycStatus), null != e.kycMessage && (t.kycMessage = String(e.kycMessage)), null != e.type && (t.type = String(e.type)), null != e.transId && (t.transId = String(e.transId)), null != e.qrCode && (t.qrCode = String(e.qrCode)), e.kycSubStatus) {
                                    case "JUMIO":
                                    case 0:
                                        t.kycSubStatus = 0;
                                        break;
                                    case "FACE_PENDING":
                                    case 1:
                                        t.kycSubStatus = 1;
                                        break;
                                    case "AUDITING":
                                    case 2:
                                        t.kycSubStatus = 2;
                                        break;
                                    case "FACE_OCR":
                                    case 3:
                                        t.kycSubStatus = 3;
                                        break;
                                    case "BASIC":
                                    case 4:
                                        t.kycSubStatus = 4;
                                        break;
                                    case "IDENTITY_VENDOR_INIT":
                                    case 5:
                                        t.kycSubStatus = 5;
                                        break;
                                    case "SELFIE_UPLOAD":
                                    case 6:
                                        t.kycSubStatus = 6
                                }
                                if (null != e.fillInfo) {
                                    if ("object" !== typeof e.fillInfo) throw TypeError(".com.market.KycStatusResp.fillInfo: object expected");
                                    t.fillInfo = c.com.market.FillInfo.fromObject(e.fillInfo)
                                }
                                switch (null != e.forbidCountryPassed && (t.forbidCountryPassed = Boolean(e.forbidCountryPassed)), null != e.kycLevel && (t.kycLevel = 0 | e.kycLevel), e.addressStatus) {
                                    case "PROCESS":
                                    case 0:
                                        t.addressStatus = 0;
                                        break;
                                    case "PASS":
                                    case 1:
                                        t.addressStatus = 1;
                                        break;
                                    case "REFUSED":
                                    case 2:
                                        t.addressStatus = 2;
                                        break;
                                    case "REVIEW":
                                    case 3:
                                        t.addressStatus = 3;
                                        break;
                                    case "SKIP":
                                    case 4:
                                        t.addressStatus = 4;
                                        break;
                                    case "FORBID_PASS":
                                    case 5:
                                        t.addressStatus = 5
                                }
                                if (null != e.certificateSubStatus && (t.certificateSubStatus = String(e.certificateSubStatus)), null != e.addressTips && (t.addressTips = String(e.addressTips)), null != e.baseFillStatus && (t.baseFillStatus = String(e.baseFillStatus)), null != e.baseSubStatus && (t.baseSubStatus = String(e.baseSubStatus)), null != e.baseFillTips && (t.baseFillTips = String(e.baseFillTips)), null != e.jumioStatus && (t.jumioStatus = String(e.jumioStatus)), null != e.jumioTips && (t.jumioTips = String(e.jumioTips)), null != e.faceStatus && (t.faceStatus = String(e.faceStatus)), null != e.faceTips && (t.faceTips = String(e.faceTips)), null != e.faceOcrStatus && (t.faceOcrStatus = String(e.faceOcrStatus)), null != e.faceOcrTips && (t.faceOcrTips = String(e.faceOcrTips)), null != e.googleFormStatus && (t.googleFormStatus = String(e.googleFormStatus)), null != e.googleFormTips && (t.googleFormTips = String(e.googleFormTips)), null != e.needAddress && (t.needAddress = Boolean(e.needAddress)), null != e.flowDefine && (t.flowDefine = String(e.flowDefine)), null != e.faceTransId && (t.faceTransId = String(e.faceTransId)), null != e.directorStatus && (t.directorStatus = String(e.directorStatus)), null != e.uboStatus && (t.uboStatus = String(e.uboStatus)), null != e.dealerStatus && (t.dealerStatus = String(e.dealerStatus)), null != e.fiatStatus && (t.fiatStatus = String(e.fiatStatus)), null != e.fiatTips && (t.fiatTips = String(e.fiatTips)), null != e.identityExpectCompleteTime && (a.Long ? (t.identityExpectCompleteTime = a.Long.fromValue(e.identityExpectCompleteTime)).unsigned = !1 : "string" === typeof e.identityExpectCompleteTime ? t.identityExpectCompleteTime = parseInt(e.identityExpectCompleteTime, 10) : "number" === typeof e.identityExpectCompleteTime ? t.identityExpectCompleteTime = e.identityExpectCompleteTime : "object" === typeof e.identityExpectCompleteTime && (t.identityExpectCompleteTime = new a.LongBits(e.identityExpectCompleteTime.low >>> 0, e.identityExpectCompleteTime.high >>> 0).toNumber())), null != e.poaExpectCompleteTime && (a.Long ? (t.poaExpectCompleteTime = a.Long.fromValue(e.poaExpectCompleteTime)).unsigned = !1 : "string" === typeof e.poaExpectCompleteTime ? t.poaExpectCompleteTime = parseInt(e.poaExpectCompleteTime, 10) : "number" === typeof e.poaExpectCompleteTime ? t.poaExpectCompleteTime = e.poaExpectCompleteTime : "object" === typeof e.poaExpectCompleteTime && (t.poaExpectCompleteTime = new a.LongBits(e.poaExpectCompleteTime.low >>> 0, e.poaExpectCompleteTime.high >>> 0).toNumber())), null != e.kycFlowExten && (t.kycFlowExten = String(e.kycFlowExten)), null != e.eddStatus && (t.eddStatus = String(e.eddStatus)), null != e.eddTips && (t.eddTips = String(e.eddTips)), null != e.wckStatus && (t.wckStatus = String(e.wckStatus)), null != e.wckTips && (t.wckTips = String(e.wckTips)), null != e.riskRateScore && (t.riskRateScore = String(e.riskRateScore)), null != e.riskRateLevel && (t.riskRateLevel = String(e.riskRateLevel)), null != e.needEdd && (t.needEdd = Boolean(e.needEdd)), null != e.passKycLevel && (t.passKycLevel = String(e.passKycLevel)), null != e.currentKycLevel && (t.currentKycLevel = String(e.currentKycLevel)), null != e.currentKycLevelStatus && (t.currentKycLevelStatus = String(e.currentKycLevelStatus)), null != e.kycLevelTemplateModel) {
                                    if ("object" !== typeof e.kycLevelTemplateModel) throw TypeError(".com.market.KycStatusResp.kycLevelTemplateModel: object expected");
                                    t.kycLevelTemplateModel = c.com.market.KycLevelTemplateModel.fromObject(e.kycLevelTemplateModel)
                                }
                                return null != e.baseExpectCompleteTime && (a.Long ? (t.baseExpectCompleteTime = a.Long.fromValue(e.baseExpectCompleteTime)).unsigned = !1 : "string" === typeof e.baseExpectCompleteTime ? t.baseExpectCompleteTime = parseInt(e.baseExpectCompleteTime, 10) : "number" === typeof e.baseExpectCompleteTime ? t.baseExpectCompleteTime = e.baseExpectCompleteTime : "object" === typeof e.baseExpectCompleteTime && (t.baseExpectCompleteTime = new a.LongBits(e.baseExpectCompleteTime.low >>> 0, e.baseExpectCompleteTime.high >>> 0).toNumber())), null != e.eddExpectCompleteTime && (a.Long ? (t.eddExpectCompleteTime = a.Long.fromValue(e.eddExpectCompleteTime)).unsigned = !1 : "string" === typeof e.eddExpectCompleteTime ? t.eddExpectCompleteTime = parseInt(e.eddExpectCompleteTime, 10) : "number" === typeof e.eddExpectCompleteTime ? t.eddExpectCompleteTime = e.eddExpectCompleteTime : "object" === typeof e.eddExpectCompleteTime && (t.eddExpectCompleteTime = new a.LongBits(e.eddExpectCompleteTime.low >>> 0, e.eddExpectCompleteTime.high >>> 0).toNumber())), null != e.submitExpectCompleteTime && (a.Long ? (t.submitExpectCompleteTime = a.Long.fromValue(e.submitExpectCompleteTime)).unsigned = !1 : "string" === typeof e.submitExpectCompleteTime ? t.submitExpectCompleteTime = parseInt(e.submitExpectCompleteTime, 10) : "number" === typeof e.submitExpectCompleteTime ? t.submitExpectCompleteTime = e.submitExpectCompleteTime : "object" === typeof e.submitExpectCompleteTime && (t.submitExpectCompleteTime = new a.LongBits(e.submitExpectCompleteTime.low >>> 0, e.submitExpectCompleteTime.high >>> 0).toNumber())), null != e.basicLocalVerifyPass && (t.basicLocalVerifyPass = Boolean(e.basicLocalVerifyPass)), null != e.wckExpectCompleteTime && (a.Long ? (t.wckExpectCompleteTime = a.Long.fromValue(e.wckExpectCompleteTime)).unsigned = !1 : "string" === typeof e.wckExpectCompleteTime ? t.wckExpectCompleteTime = parseInt(e.wckExpectCompleteTime, 10) : "number" === typeof e.wckExpectCompleteTime ? t.wckExpectCompleteTime = e.wckExpectCompleteTime : "object" === typeof e.wckExpectCompleteTime && (t.wckExpectCompleteTime = new a.LongBits(e.wckExpectCompleteTime.low >>> 0, e.wckExpectCompleteTime.high >>> 0).toNumber())), null != e.eddDetailStatus && (t.eddDetailStatus = String(e.eddDetailStatus)), null != e.eddDetailTips && (t.eddDetailTips = String(e.eddDetailTips)), null != e.sowStatus && (t.sowStatus = String(e.sowStatus)), null != e.sowTips && (t.sowTips = String(e.sowTips)), null != e.eddSubmitReason && (t.eddSubmitReason = String(e.eddSubmitReason)), null != e.questionStatus && (t.questionStatus = String(e.questionStatus)), null != e.frontDisplayLevelStatus && (t.frontDisplayLevelStatus = String(e.frontDisplayLevelStatus)), null != e.frontDisplayLevelMsg && (t.frontDisplayLevelMsg = String(e.frontDisplayLevelMsg)), null != e.identityVendor && (t.identityVendor = String(e.identityVendor)), null != e.uploadThirdPart && (t.uploadThirdPart = Boolean(e.uploadThirdPart)), null != e.eddSubmitType && (t.eddSubmitType = String(e.eddSubmitType)), null != e.eddType && (t.eddType = String(e.eddType)), null != e.assistKyc && (t.assistKyc = Boolean(e.assistKyc)), null != e.companyLastOperTime && (a.Long ? (t.companyLastOperTime = a.Long.fromValue(e.companyLastOperTime)).unsigned = !1 : "string" === typeof e.companyLastOperTime ? t.companyLastOperTime = parseInt(e.companyLastOperTime, 10) : "number" === typeof e.companyLastOperTime ? t.companyLastOperTime = e.companyLastOperTime : "object" === typeof e.companyLastOperTime && (t.companyLastOperTime = new a.LongBits(e.companyLastOperTime.low >>> 0, e.companyLastOperTime.high >>> 0).toNumber())), null != e.companyLastOperType && (t.companyLastOperType = String(e.companyLastOperType)), null != e.businessAddressStatus && (t.businessAddressStatus = String(e.businessAddressStatus)), null != e.uboAddressStatus && (t.uboAddressStatus = String(e.uboAddressStatus)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.kycStatus = 0, r.kycMessage = "", r.type = "", r.transId = "", r.qrCode = "", r.kycSubStatus = t.enums === String ? "JUMIO" : 0, r.fillInfo = null, r.forbidCountryPassed = !1, r.kycLevel = 0, r.addressStatus = t.enums === String ? "PROCESS" : 0, r.certificateSubStatus = "", r.addressTips = "", r.baseFillStatus = "", r.baseSubStatus = "", r.baseFillTips = "", r.jumioStatus = "", r.jumioTips = "", r.faceStatus = "", r.faceTips = "", r.faceOcrStatus = "", r.faceOcrTips = "", r.googleFormStatus = "", r.googleFormTips = "", r.needAddress = !1, r.flowDefine = "", r.faceTransId = "", r.directorStatus = "", r.uboStatus = "", r.dealerStatus = "", r.fiatStatus = "", r.fiatTips = "", a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.identityExpectCompleteTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.identityExpectCompleteTime = t.longs === String ? "0" : 0;
                                    if (a.Long) {
                                        var i = new a.Long(0, 0, !1);
                                        r.poaExpectCompleteTime = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                    } else r.poaExpectCompleteTime = t.longs === String ? "0" : 0;
                                    if (r.kycFlowExten = "", r.eddStatus = "", r.eddTips = "", r.wckStatus = "", r.wckTips = "", r.riskRateScore = "", r.riskRateLevel = "", r.needEdd = !1, r.passKycLevel = "", r.currentKycLevel = "", r.currentKycLevelStatus = "", r.kycLevelTemplateModel = null, a.Long) {
                                        var o = new a.Long(0, 0, !1);
                                        r.baseExpectCompleteTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                    } else r.baseExpectCompleteTime = t.longs === String ? "0" : 0;
                                    if (a.Long) {
                                        var s = new a.Long(0, 0, !1);
                                        r.eddExpectCompleteTime = t.longs === String ? s.toString() : t.longs === Number ? s.toNumber() : s
                                    } else r.eddExpectCompleteTime = t.longs === String ? "0" : 0;
                                    if (a.Long) {
                                        var l = new a.Long(0, 0, !1);
                                        r.submitExpectCompleteTime = t.longs === String ? l.toString() : t.longs === Number ? l.toNumber() : l
                                    } else r.submitExpectCompleteTime = t.longs === String ? "0" : 0;
                                    if (r.basicLocalVerifyPass = !1, a.Long) {
                                        var u = new a.Long(0, 0, !1);
                                        r.wckExpectCompleteTime = t.longs === String ? u.toString() : t.longs === Number ? u.toNumber() : u
                                    } else r.wckExpectCompleteTime = t.longs === String ? "0" : 0;
                                    if (r.eddDetailStatus = "", r.eddDetailTips = "", r.sowStatus = "", r.sowTips = "", r.eddSubmitReason = "", r.questionStatus = "", r.frontDisplayLevelStatus = "", r.frontDisplayLevelMsg = "", r.identityVendor = "", r.uploadThirdPart = !1, r.eddSubmitType = "", r.eddType = "", r.assistKyc = !1, a.Long) {
                                        var p = new a.Long(0, 0, !1);
                                        r.companyLastOperTime = t.longs === String ? p.toString() : t.longs === Number ? p.toNumber() : p
                                    } else r.companyLastOperTime = t.longs === String ? "0" : 0;
                                    r.companyLastOperType = "", r.businessAddressStatus = "", r.uboAddressStatus = ""
                                }
                                return null != e.kycStatus && e.hasOwnProperty("kycStatus") && (r.kycStatus = e.kycStatus), null != e.kycMessage && e.hasOwnProperty("kycMessage") && (r.kycMessage = e.kycMessage), null != e.type && e.hasOwnProperty("type") && (r.type = e.type), null != e.transId && e.hasOwnProperty("transId") && (r.transId = e.transId), null != e.qrCode && e.hasOwnProperty("qrCode") && (r.qrCode = e.qrCode), null != e.kycSubStatus && e.hasOwnProperty("kycSubStatus") && (r.kycSubStatus = t.enums === String ? c.com.market.KycSubStatus[e.kycSubStatus] : e.kycSubStatus), null != e.fillInfo && e.hasOwnProperty("fillInfo") && (r.fillInfo = c.com.market.FillInfo.toObject(e.fillInfo, t)), null != e.forbidCountryPassed && e.hasOwnProperty("forbidCountryPassed") && (r.forbidCountryPassed = e.forbidCountryPassed), null != e.kycLevel && e.hasOwnProperty("kycLevel") && (r.kycLevel = e.kycLevel), null != e.addressStatus && e.hasOwnProperty("addressStatus") && (r.addressStatus = t.enums === String ? c.com.market.KycCertificateStatus[e.addressStatus] : e.addressStatus), null != e.certificateSubStatus && e.hasOwnProperty("certificateSubStatus") && (r.certificateSubStatus = e.certificateSubStatus), null != e.addressTips && e.hasOwnProperty("addressTips") && (r.addressTips = e.addressTips), null != e.baseFillStatus && e.hasOwnProperty("baseFillStatus") && (r.baseFillStatus = e.baseFillStatus), null != e.baseSubStatus && e.hasOwnProperty("baseSubStatus") && (r.baseSubStatus = e.baseSubStatus), null != e.baseFillTips && e.hasOwnProperty("baseFillTips") && (r.baseFillTips = e.baseFillTips), null != e.jumioStatus && e.hasOwnProperty("jumioStatus") && (r.jumioStatus = e.jumioStatus), null != e.jumioTips && e.hasOwnProperty("jumioTips") && (r.jumioTips = e.jumioTips), null != e.faceStatus && e.hasOwnProperty("faceStatus") && (r.faceStatus = e.faceStatus), null != e.faceTips && e.hasOwnProperty("faceTips") && (r.faceTips = e.faceTips), null != e.faceOcrStatus && e.hasOwnProperty("faceOcrStatus") && (r.faceOcrStatus = e.faceOcrStatus), null != e.faceOcrTips && e.hasOwnProperty("faceOcrTips") && (r.faceOcrTips = e.faceOcrTips), null != e.googleFormStatus && e.hasOwnProperty("googleFormStatus") && (r.googleFormStatus = e.googleFormStatus), null != e.googleFormTips && e.hasOwnProperty("googleFormTips") && (r.googleFormTips = e.googleFormTips), null != e.needAddress && e.hasOwnProperty("needAddress") && (r.needAddress = e.needAddress), null != e.flowDefine && e.hasOwnProperty("flowDefine") && (r.flowDefine = e.flowDefine), null != e.faceTransId && e.hasOwnProperty("faceTransId") && (r.faceTransId = e.faceTransId), null != e.directorStatus && e.hasOwnProperty("directorStatus") && (r.directorStatus = e.directorStatus), null != e.uboStatus && e.hasOwnProperty("uboStatus") && (r.uboStatus = e.uboStatus), null != e.dealerStatus && e.hasOwnProperty("dealerStatus") && (r.dealerStatus = e.dealerStatus), null != e.fiatStatus && e.hasOwnProperty("fiatStatus") && (r.fiatStatus = e.fiatStatus), null != e.fiatTips && e.hasOwnProperty("fiatTips") && (r.fiatTips = e.fiatTips), null != e.identityExpectCompleteTime && e.hasOwnProperty("identityExpectCompleteTime") && ("number" === typeof e.identityExpectCompleteTime ? r.identityExpectCompleteTime = t.longs === String ? String(e.identityExpectCompleteTime) : e.identityExpectCompleteTime : r.identityExpectCompleteTime = t.longs === String ? a.Long.prototype.toString.call(e.identityExpectCompleteTime) : t.longs === Number ? new a.LongBits(e.identityExpectCompleteTime.low >>> 0, e.identityExpectCompleteTime.high >>> 0).toNumber() : e.identityExpectCompleteTime), null != e.poaExpectCompleteTime && e.hasOwnProperty("poaExpectCompleteTime") && ("number" === typeof e.poaExpectCompleteTime ? r.poaExpectCompleteTime = t.longs === String ? String(e.poaExpectCompleteTime) : e.poaExpectCompleteTime : r.poaExpectCompleteTime = t.longs === String ? a.Long.prototype.toString.call(e.poaExpectCompleteTime) : t.longs === Number ? new a.LongBits(e.poaExpectCompleteTime.low >>> 0, e.poaExpectCompleteTime.high >>> 0).toNumber() : e.poaExpectCompleteTime), null != e.kycFlowExten && e.hasOwnProperty("kycFlowExten") && (r.kycFlowExten = e.kycFlowExten), null != e.eddStatus && e.hasOwnProperty("eddStatus") && (r.eddStatus = e.eddStatus), null != e.eddTips && e.hasOwnProperty("eddTips") && (r.eddTips = e.eddTips), null != e.wckStatus && e.hasOwnProperty("wckStatus") && (r.wckStatus = e.wckStatus), null != e.wckTips && e.hasOwnProperty("wckTips") && (r.wckTips = e.wckTips), null != e.riskRateScore && e.hasOwnProperty("riskRateScore") && (r.riskRateScore = e.riskRateScore), null != e.riskRateLevel && e.hasOwnProperty("riskRateLevel") && (r.riskRateLevel = e.riskRateLevel), null != e.needEdd && e.hasOwnProperty("needEdd") && (r.needEdd = e.needEdd), null != e.passKycLevel && e.hasOwnProperty("passKycLevel") && (r.passKycLevel = e.passKycLevel), null != e.currentKycLevel && e.hasOwnProperty("currentKycLevel") && (r.currentKycLevel = e.currentKycLevel), null != e.currentKycLevelStatus && e.hasOwnProperty("currentKycLevelStatus") && (r.currentKycLevelStatus = e.currentKycLevelStatus), null != e.kycLevelTemplateModel && e.hasOwnProperty("kycLevelTemplateModel") && (r.kycLevelTemplateModel = c.com.market.KycLevelTemplateModel.toObject(e.kycLevelTemplateModel, t)), null != e.baseExpectCompleteTime && e.hasOwnProperty("baseExpectCompleteTime") && ("number" === typeof e.baseExpectCompleteTime ? r.baseExpectCompleteTime = t.longs === String ? String(e.baseExpectCompleteTime) : e.baseExpectCompleteTime : r.baseExpectCompleteTime = t.longs === String ? a.Long.prototype.toString.call(e.baseExpectCompleteTime) : t.longs === Number ? new a.LongBits(e.baseExpectCompleteTime.low >>> 0, e.baseExpectCompleteTime.high >>> 0).toNumber() : e.baseExpectCompleteTime), null != e.eddExpectCompleteTime && e.hasOwnProperty("eddExpectCompleteTime") && ("number" === typeof e.eddExpectCompleteTime ? r.eddExpectCompleteTime = t.longs === String ? String(e.eddExpectCompleteTime) : e.eddExpectCompleteTime : r.eddExpectCompleteTime = t.longs === String ? a.Long.prototype.toString.call(e.eddExpectCompleteTime) : t.longs === Number ? new a.LongBits(e.eddExpectCompleteTime.low >>> 0, e.eddExpectCompleteTime.high >>> 0).toNumber() : e.eddExpectCompleteTime), null != e.submitExpectCompleteTime && e.hasOwnProperty("submitExpectCompleteTime") && ("number" === typeof e.submitExpectCompleteTime ? r.submitExpectCompleteTime = t.longs === String ? String(e.submitExpectCompleteTime) : e.submitExpectCompleteTime : r.submitExpectCompleteTime = t.longs === String ? a.Long.prototype.toString.call(e.submitExpectCompleteTime) : t.longs === Number ? new a.LongBits(e.submitExpectCompleteTime.low >>> 0, e.submitExpectCompleteTime.high >>> 0).toNumber() : e.submitExpectCompleteTime), null != e.basicLocalVerifyPass && e.hasOwnProperty("basicLocalVerifyPass") && (r.basicLocalVerifyPass = e.basicLocalVerifyPass), null != e.wckExpectCompleteTime && e.hasOwnProperty("wckExpectCompleteTime") && ("number" === typeof e.wckExpectCompleteTime ? r.wckExpectCompleteTime = t.longs === String ? String(e.wckExpectCompleteTime) : e.wckExpectCompleteTime : r.wckExpectCompleteTime = t.longs === String ? a.Long.prototype.toString.call(e.wckExpectCompleteTime) : t.longs === Number ? new a.LongBits(e.wckExpectCompleteTime.low >>> 0, e.wckExpectCompleteTime.high >>> 0).toNumber() : e.wckExpectCompleteTime), null != e.eddDetailStatus && e.hasOwnProperty("eddDetailStatus") && (r.eddDetailStatus = e.eddDetailStatus), null != e.eddDetailTips && e.hasOwnProperty("eddDetailTips") && (r.eddDetailTips = e.eddDetailTips), null != e.sowStatus && e.hasOwnProperty("sowStatus") && (r.sowStatus = e.sowStatus), null != e.sowTips && e.hasOwnProperty("sowTips") && (r.sowTips = e.sowTips), null != e.eddSubmitReason && e.hasOwnProperty("eddSubmitReason") && (r.eddSubmitReason = e.eddSubmitReason), null != e.questionStatus && e.hasOwnProperty("questionStatus") && (r.questionStatus = e.questionStatus), null != e.frontDisplayLevelStatus && e.hasOwnProperty("frontDisplayLevelStatus") && (r.frontDisplayLevelStatus = e.frontDisplayLevelStatus), null != e.frontDisplayLevelMsg && e.hasOwnProperty("frontDisplayLevelMsg") && (r.frontDisplayLevelMsg = e.frontDisplayLevelMsg), null != e.identityVendor && e.hasOwnProperty("identityVendor") && (r.identityVendor = e.identityVendor), null != e.uploadThirdPart && e.hasOwnProperty("uploadThirdPart") && (r.uploadThirdPart = e.uploadThirdPart), null != e.eddSubmitType && e.hasOwnProperty("eddSubmitType") && (r.eddSubmitType = e.eddSubmitType), null != e.eddType && e.hasOwnProperty("eddType") && (r.eddType = e.eddType), null != e.assistKyc && e.hasOwnProperty("assistKyc") && (r.assistKyc = e.assistKyc), null != e.companyLastOperTime && e.hasOwnProperty("companyLastOperTime") && ("number" === typeof e.companyLastOperTime ? r.companyLastOperTime = t.longs === String ? String(e.companyLastOperTime) : e.companyLastOperTime : r.companyLastOperTime = t.longs === String ? a.Long.prototype.toString.call(e.companyLastOperTime) : t.longs === Number ? new a.LongBits(e.companyLastOperTime.low >>> 0, e.companyLastOperTime.high >>> 0).toNumber() : e.companyLastOperTime), null != e.companyLastOperType && e.hasOwnProperty("companyLastOperType") && (r.companyLastOperType = e.companyLastOperType), null != e.businessAddressStatus && e.hasOwnProperty("businessAddressStatus") && (r.businessAddressStatus = e.businessAddressStatus), null != e.uboAddressStatus && e.hasOwnProperty("uboAddressStatus") && (r.uboAddressStatus = e.uboAddressStatus), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.KycSubStatus = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "JUMIO"] = 0, t[e[1] = "FACE_PENDING"] = 1, t[e[2] = "AUDITING"] = 2, t[e[3] = "FACE_OCR"] = 3, t[e[4] = "BASIC"] = 4, t[e[5] = "IDENTITY_VENDOR_INIT"] = 5, t[e[6] = "SELFIE_UPLOAD"] = 6, t
                        }(), e.FillInfo = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.firstName = "", e.prototype.middleName = "", e.prototype.lastName = "", e.prototype.companyName = "", e.prototype.country = "", e.prototype.city = "", e.prototype.address = "", e.prototype.dob = "", e.prototype.postalCode = "", e.prototype.idcardNumber = "", e.prototype.residenceCountry = "", e.prototype.residenceRegion = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.firstName && Object.hasOwnProperty.call(e, "firstName") && t.uint32(10).string(e.firstName), null != e.middleName && Object.hasOwnProperty.call(e, "middleName") && t.uint32(18).string(e.middleName), null != e.lastName && Object.hasOwnProperty.call(e, "lastName") && t.uint32(26).string(e.lastName), null != e.companyName && Object.hasOwnProperty.call(e, "companyName") && t.uint32(34).string(e.companyName), null != e.country && Object.hasOwnProperty.call(e, "country") && t.uint32(42).string(e.country), null != e.city && Object.hasOwnProperty.call(e, "city") && t.uint32(50).string(e.city), null != e.address && Object.hasOwnProperty.call(e, "address") && t.uint32(58).string(e.address), null != e.dob && Object.hasOwnProperty.call(e, "dob") && t.uint32(66).string(e.dob), null != e.postalCode && Object.hasOwnProperty.call(e, "postalCode") && t.uint32(74).string(e.postalCode), null != e.idcardNumber && Object.hasOwnProperty.call(e, "idcardNumber") && t.uint32(82).string(e.idcardNumber), null != e.residenceCountry && Object.hasOwnProperty.call(e, "residenceCountry") && t.uint32(90).string(e.residenceCountry), null != e.residenceRegion && Object.hasOwnProperty.call(e, "residenceRegion") && t.uint32(98).string(e.residenceRegion), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.FillInfo; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.firstName = e.string();
                                            break;
                                        case 2:
                                            i.middleName = e.string();
                                            break;
                                        case 3:
                                            i.lastName = e.string();
                                            break;
                                        case 4:
                                            i.companyName = e.string();
                                            break;
                                        case 5:
                                            i.country = e.string();
                                            break;
                                        case 6:
                                            i.city = e.string();
                                            break;
                                        case 7:
                                            i.address = e.string();
                                            break;
                                        case 8:
                                            i.dob = e.string();
                                            break;
                                        case 9:
                                            i.postalCode = e.string();
                                            break;
                                        case 10:
                                            i.idcardNumber = e.string();
                                            break;
                                        case 11:
                                            i.residenceCountry = e.string();
                                            break;
                                        case 12:
                                            i.residenceRegion = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.firstName && e.hasOwnProperty("firstName") && !a.isString(e.firstName) ? "firstName: string expected" : null != e.middleName && e.hasOwnProperty("middleName") && !a.isString(e.middleName) ? "middleName: string expected" : null != e.lastName && e.hasOwnProperty("lastName") && !a.isString(e.lastName) ? "lastName: string expected" : null != e.companyName && e.hasOwnProperty("companyName") && !a.isString(e.companyName) ? "companyName: string expected" : null != e.country && e.hasOwnProperty("country") && !a.isString(e.country) ? "country: string expected" : null != e.city && e.hasOwnProperty("city") && !a.isString(e.city) ? "city: string expected" : null != e.address && e.hasOwnProperty("address") && !a.isString(e.address) ? "address: string expected" : null != e.dob && e.hasOwnProperty("dob") && !a.isString(e.dob) ? "dob: string expected" : null != e.postalCode && e.hasOwnProperty("postalCode") && !a.isString(e.postalCode) ? "postalCode: string expected" : null != e.idcardNumber && e.hasOwnProperty("idcardNumber") && !a.isString(e.idcardNumber) ? "idcardNumber: string expected" : null != e.residenceCountry && e.hasOwnProperty("residenceCountry") && !a.isString(e.residenceCountry) ? "residenceCountry: string expected" : null != e.residenceRegion && e.hasOwnProperty("residenceRegion") && !a.isString(e.residenceRegion) ? "residenceRegion: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.FillInfo)) return e;
                                var t = new c.com.market.FillInfo;
                                return null != e.firstName && (t.firstName = String(e.firstName)), null != e.middleName && (t.middleName = String(e.middleName)), null != e.lastName && (t.lastName = String(e.lastName)), null != e.companyName && (t.companyName = String(e.companyName)), null != e.country && (t.country = String(e.country)), null != e.city && (t.city = String(e.city)), null != e.address && (t.address = String(e.address)), null != e.dob && (t.dob = String(e.dob)), null != e.postalCode && (t.postalCode = String(e.postalCode)), null != e.idcardNumber && (t.idcardNumber = String(e.idcardNumber)), null != e.residenceCountry && (t.residenceCountry = String(e.residenceCountry)), null != e.residenceRegion && (t.residenceRegion = String(e.residenceRegion)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.firstName = "", r.middleName = "", r.lastName = "", r.companyName = "", r.country = "", r.city = "", r.address = "", r.dob = "", r.postalCode = "", r.idcardNumber = "", r.residenceCountry = "", r.residenceRegion = ""), null != e.firstName && e.hasOwnProperty("firstName") && (r.firstName = e.firstName), null != e.middleName && e.hasOwnProperty("middleName") && (r.middleName = e.middleName), null != e.lastName && e.hasOwnProperty("lastName") && (r.lastName = e.lastName), null != e.companyName && e.hasOwnProperty("companyName") && (r.companyName = e.companyName), null != e.country && e.hasOwnProperty("country") && (r.country = e.country), null != e.city && e.hasOwnProperty("city") && (r.city = e.city), null != e.address && e.hasOwnProperty("address") && (r.address = e.address), null != e.dob && e.hasOwnProperty("dob") && (r.dob = e.dob), null != e.postalCode && e.hasOwnProperty("postalCode") && (r.postalCode = e.postalCode), null != e.idcardNumber && e.hasOwnProperty("idcardNumber") && (r.idcardNumber = e.idcardNumber), null != e.residenceCountry && e.hasOwnProperty("residenceCountry") && (r.residenceCountry = e.residenceCountry), null != e.residenceRegion && e.hasOwnProperty("residenceRegion") && (r.residenceRegion = e.residenceRegion), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.KycCertificateStatus = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "PROCESS"] = 0, t[e[1] = "PASS"] = 1, t[e[2] = "REFUSED"] = 2, t[e[3] = "REVIEW"] = 3, t[e[4] = "SKIP"] = 4, t[e[5] = "FORBID_PASS"] = 5, t
                        }(), e.KycLevelTemplateModel = function() {
                            var e = function(e) {
                                if (this.levelDetail = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.templateName = "", e.prototype.levelDetail = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.templateName && Object.hasOwnProperty.call(e, "templateName") && t.uint32(10).string(e.templateName), null != e.levelDetail && e.levelDetail.length)
                                    for (var r = 0; r < e.levelDetail.length; ++r) c.com.market.KycLevelTemplateDetail.encode(e.levelDetail[r], t.uint32(18).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.KycLevelTemplateModel; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.templateName = e.string();
                                            break;
                                        case 2:
                                            i.levelDetail && i.levelDetail.length || (i.levelDetail = []), i.levelDetail.push(c.com.market.KycLevelTemplateDetail.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.templateName && e.hasOwnProperty("templateName") && !a.isString(e.templateName)) return "templateName: string expected";
                                if (null != e.levelDetail && e.hasOwnProperty("levelDetail")) {
                                    if (!Array.isArray(e.levelDetail)) return "levelDetail: array expected";
                                    for (var t = 0; t < e.levelDetail.length; ++t) {
                                        var r = c.com.market.KycLevelTemplateDetail.verify(e.levelDetail[t]);
                                        if (r) return "levelDetail." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.KycLevelTemplateModel)) return e;
                                var t = new c.com.market.KycLevelTemplateModel;
                                if (null != e.templateName && (t.templateName = String(e.templateName)), e.levelDetail) {
                                    if (!Array.isArray(e.levelDetail)) throw TypeError(".com.market.KycLevelTemplateModel.levelDetail: array expected");
                                    t.levelDetail = [];
                                    for (var r = 0; r < e.levelDetail.length; ++r) {
                                        if ("object" !== typeof e.levelDetail[r]) throw TypeError(".com.market.KycLevelTemplateModel.levelDetail: object expected");
                                        t.levelDetail[r] = c.com.market.KycLevelTemplateDetail.fromObject(e.levelDetail[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.levelDetail = []), t.defaults && (r.templateName = ""), null != e.templateName && e.hasOwnProperty("templateName") && (r.templateName = e.templateName), e.levelDetail && e.levelDetail.length) {
                                    r.levelDetail = [];
                                    for (var n = 0; n < e.levelDetail.length; ++n) r.levelDetail[n] = c.com.market.KycLevelTemplateDetail.toObject(e.levelDetail[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.KycLevelTemplateDetail = function() {
                            var e = function(e) {
                                if (this.condition = [], this.fiatCondition = [], this.conditionDesc = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.levelName = "", e.prototype.condition = a.emptyArray, e.prototype.fiatCondition = a.emptyArray, e.prototype.conditionDesc = a.emptyArray, e.prototype.limit = null, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.levelName && Object.hasOwnProperty.call(e, "levelName") && t.uint32(10).string(e.levelName), null != e.condition && e.condition.length)
                                    for (var r = 0; r < e.condition.length; ++r) t.uint32(16).int32(e.condition[r]);
                                if (null != e.fiatCondition && e.fiatCondition.length)
                                    for (var n = 0; n < e.fiatCondition.length; ++n) t.uint32(24).int32(e.fiatCondition[n]);
                                if (null != e.conditionDesc && e.conditionDesc.length)
                                    for (var i = 0; i < e.conditionDesc.length; ++i) t.uint32(34).string(e.conditionDesc[i]);
                                return null != e.limit && Object.hasOwnProperty.call(e, "limit") && c.com.market.KycLevelLimitDetail.encode(e.limit, t.uint32(42).fork()).ldelim(), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.KycLevelTemplateDetail; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.levelName = e.string();
                                            break;
                                        case 2:
                                            if (i.condition && i.condition.length || (i.condition = []), 2 === (7 & s))
                                                for (var a = e.uint32() + e.pos; e.pos < a;) i.condition.push(e.int32());
                                            else i.condition.push(e.int32());
                                            break;
                                        case 3:
                                            if (i.fiatCondition && i.fiatCondition.length || (i.fiatCondition = []), 2 === (7 & s))
                                                for (var l = e.uint32() + e.pos; e.pos < l;) i.fiatCondition.push(e.int32());
                                            else i.fiatCondition.push(e.int32());
                                            break;
                                        case 4:
                                            i.conditionDesc && i.conditionDesc.length || (i.conditionDesc = []), i.conditionDesc.push(e.string());
                                            break;
                                        case 5:
                                            i.limit = c.com.market.KycLevelLimitDetail.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.levelName && e.hasOwnProperty("levelName") && !a.isString(e.levelName)) return "levelName: string expected";
                                if (null != e.condition && e.hasOwnProperty("condition")) {
                                    if (!Array.isArray(e.condition)) return "condition: array expected";
                                    for (var t = 0; t < e.condition.length; ++t) switch (e.condition[t]) {
                                        default: return "condition: enum value[] expected";
                                        case 0:
                                                case 1:
                                                case 2:
                                                case 3:
                                                case 4:
                                                case 5:
                                                case 6:
                                                case 7:
                                                case 8:
                                                case 9:
                                                case 10:
                                    }
                                }
                                if (null != e.fiatCondition && e.hasOwnProperty("fiatCondition")) {
                                    if (!Array.isArray(e.fiatCondition)) return "fiatCondition: array expected";
                                    for (var r = 0; r < e.fiatCondition.length; ++r) switch (e.fiatCondition[r]) {
                                        default: return "fiatCondition: enum value[] expected";
                                        case 0:
                                                case 1:
                                                case 2:
                                                case 3:
                                                case 4:
                                                case 5:
                                                case 6:
                                                case 7:
                                                case 8:
                                                case 9:
                                                case 10:
                                    }
                                }
                                if (null != e.conditionDesc && e.hasOwnProperty("conditionDesc")) {
                                    if (!Array.isArray(e.conditionDesc)) return "conditionDesc: array expected";
                                    for (var n = 0; n < e.conditionDesc.length; ++n)
                                        if (!a.isString(e.conditionDesc[n])) return "conditionDesc: string[] expected"
                                }
                                if (null != e.limit && e.hasOwnProperty("limit")) {
                                    var i = c.com.market.KycLevelLimitDetail.verify(e.limit);
                                    if (i) return "limit." + i
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.KycLevelTemplateDetail)) return e;
                                var t = new c.com.market.KycLevelTemplateDetail;
                                if (null != e.levelName && (t.levelName = String(e.levelName)), e.condition) {
                                    if (!Array.isArray(e.condition)) throw TypeError(".com.market.KycLevelTemplateDetail.condition: array expected");
                                    t.condition = [];
                                    for (var r = 0; r < e.condition.length; ++r) switch (e.condition[r]) {
                                        default:
                                            case "baseStatus":
                                            case 0:
                                            t.condition[r] = 0;
                                        break;
                                        case "identityStatus":
                                                case 1:
                                                t.condition[r] = 1;
                                            break;
                                        case "faceStatus":
                                                case 2:
                                                t.condition[r] = 2;
                                            break;
                                        case "wckStatus":
                                                case 3:
                                                t.condition[r] = 3;
                                            break;
                                        case "tmStatus":
                                                case 4:
                                                t.condition[r] = 4;
                                            break;
                                        case "addressStatus":
                                                case 5:
                                                t.condition[r] = 5;
                                            break;
                                        case "eddStatus":
                                                case 6:
                                                t.condition[r] = 6;
                                            break;
                                        case "localStatus":
                                                case 7:
                                                t.condition[r] = 7;
                                            break;
                                        case "questionStatus":
                                                case 8:
                                                t.condition[r] = 8;
                                            break;
                                        case "eddPowStatus":
                                                case 9:
                                                t.condition[r] = 9;
                                            break;
                                        case "eddSowStatus":
                                                case 10:
                                                t.condition[r] = 10
                                    }
                                }
                                if (e.fiatCondition) {
                                    if (!Array.isArray(e.fiatCondition)) throw TypeError(".com.market.KycLevelTemplateDetail.fiatCondition: array expected");
                                    t.fiatCondition = [];
                                    for (var i = 0; i < e.fiatCondition.length; ++i) switch (e.fiatCondition[i]) {
                                        default:
                                            case "baseStatus":
                                            case 0:
                                            t.fiatCondition[i] = 0;
                                        break;
                                        case "identityStatus":
                                                case 1:
                                                t.fiatCondition[i] = 1;
                                            break;
                                        case "faceStatus":
                                                case 2:
                                                t.fiatCondition[i] = 2;
                                            break;
                                        case "wckStatus":
                                                case 3:
                                                t.fiatCondition[i] = 3;
                                            break;
                                        case "tmStatus":
                                                case 4:
                                                t.fiatCondition[i] = 4;
                                            break;
                                        case "addressStatus":
                                                case 5:
                                                t.fiatCondition[i] = 5;
                                            break;
                                        case "eddStatus":
                                                case 6:
                                                t.fiatCondition[i] = 6;
                                            break;
                                        case "localStatus":
                                                case 7:
                                                t.fiatCondition[i] = 7;
                                            break;
                                        case "questionStatus":
                                                case 8:
                                                t.fiatCondition[i] = 8;
                                            break;
                                        case "eddPowStatus":
                                                case 9:
                                                t.fiatCondition[i] = 9;
                                            break;
                                        case "eddSowStatus":
                                                case 10:
                                                t.fiatCondition[i] = 10
                                    }
                                }
                                if (e.conditionDesc) {
                                    if (!Array.isArray(e.conditionDesc)) throw TypeError(".com.market.KycLevelTemplateDetail.conditionDesc: array expected");
                                    t.conditionDesc = [];
                                    for (var o = 0; o < e.conditionDesc.length; ++o) t.conditionDesc[o] = String(e.conditionDesc[o])
                                }
                                if (null != e.limit) {
                                    if ("object" !== typeof e.limit) throw TypeError(".com.market.KycLevelTemplateDetail.limit: object expected");
                                    t.limit = c.com.market.KycLevelLimitDetail.fromObject(e.limit)
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.condition = [], r.fiatCondition = [], r.conditionDesc = []), t.defaults && (r.levelName = "", r.limit = null), null != e.levelName && e.hasOwnProperty("levelName") && (r.levelName = e.levelName), e.condition && e.condition.length) {
                                    r.condition = [];
                                    for (var n = 0; n < e.condition.length; ++n) r.condition[n] = t.enums === String ? c.com.market.KycLevelCondition[e.condition[n]] : e.condition[n]
                                }
                                if (e.fiatCondition && e.fiatCondition.length) {
                                    r.fiatCondition = [];
                                    for (var i = 0; i < e.fiatCondition.length; ++i) r.fiatCondition[i] = t.enums === String ? c.com.market.KycLevelCondition[e.fiatCondition[i]] : e.fiatCondition[i]
                                }
                                if (e.conditionDesc && e.conditionDesc.length) {
                                    r.conditionDesc = [];
                                    for (var o = 0; o < e.conditionDesc.length; ++o) r.conditionDesc[o] = e.conditionDesc[o]
                                }
                                return null != e.limit && e.hasOwnProperty("limit") && (r.limit = c.com.market.KycLevelLimitDetail.toObject(e.limit, t)), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.KycLevelCondition = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "baseStatus"] = 0, t[e[1] = "identityStatus"] = 1, t[e[2] = "faceStatus"] = 2, t[e[3] = "wckStatus"] = 3, t[e[4] = "tmStatus"] = 4, t[e[5] = "addressStatus"] = 5, t[e[6] = "eddStatus"] = 6, t[e[7] = "localStatus"] = 7, t[e[8] = "questionStatus"] = 8, t[e[9] = "eddPowStatus"] = 9, t[e[10] = "eddSowStatus"] = 10, t
                        }(), e.KycLevelLimitDetail = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.fiatCurrency = "", e.prototype.depositFiatDailyLimit = "", e.prototype.depositFiatMonthlyLimit = "", e.prototype.depositFiatYearlyLimit = "", e.prototype.depositFiatLifeTimeLimit = "", e.prototype.withdrawFiatDailyLimit = "", e.prototype.withdrawFiatMonthlyLimit = "", e.prototype.withdrawFiatYearlyLimit = "", e.prototype.withdrawFiatLifeTimeLimit = "", e.prototype.cryptoCurrency = "", e.prototype.depositCryptoDailyLimit = "", e.prototype.withdrawCryptoDailyLimit = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.fiatCurrency && Object.hasOwnProperty.call(e, "fiatCurrency") && t.uint32(10).string(e.fiatCurrency), null != e.depositFiatDailyLimit && Object.hasOwnProperty.call(e, "depositFiatDailyLimit") && t.uint32(18).string(e.depositFiatDailyLimit), null != e.depositFiatMonthlyLimit && Object.hasOwnProperty.call(e, "depositFiatMonthlyLimit") && t.uint32(26).string(e.depositFiatMonthlyLimit), null != e.depositFiatYearlyLimit && Object.hasOwnProperty.call(e, "depositFiatYearlyLimit") && t.uint32(34).string(e.depositFiatYearlyLimit), null != e.depositFiatLifeTimeLimit && Object.hasOwnProperty.call(e, "depositFiatLifeTimeLimit") && t.uint32(42).string(e.depositFiatLifeTimeLimit), null != e.withdrawFiatDailyLimit && Object.hasOwnProperty.call(e, "withdrawFiatDailyLimit") && t.uint32(50).string(e.withdrawFiatDailyLimit), null != e.withdrawFiatMonthlyLimit && Object.hasOwnProperty.call(e, "withdrawFiatMonthlyLimit") && t.uint32(58).string(e.withdrawFiatMonthlyLimit), null != e.withdrawFiatYearlyLimit && Object.hasOwnProperty.call(e, "withdrawFiatYearlyLimit") && t.uint32(66).string(e.withdrawFiatYearlyLimit), null != e.withdrawFiatLifeTimeLimit && Object.hasOwnProperty.call(e, "withdrawFiatLifeTimeLimit") && t.uint32(74).string(e.withdrawFiatLifeTimeLimit), null != e.cryptoCurrency && Object.hasOwnProperty.call(e, "cryptoCurrency") && t.uint32(82).string(e.cryptoCurrency), null != e.depositCryptoDailyLimit && Object.hasOwnProperty.call(e, "depositCryptoDailyLimit") && t.uint32(90).string(e.depositCryptoDailyLimit), null != e.withdrawCryptoDailyLimit && Object.hasOwnProperty.call(e, "withdrawCryptoDailyLimit") && t.uint32(98).string(e.withdrawCryptoDailyLimit), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.KycLevelLimitDetail; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.fiatCurrency = e.string();
                                            break;
                                        case 2:
                                            i.depositFiatDailyLimit = e.string();
                                            break;
                                        case 3:
                                            i.depositFiatMonthlyLimit = e.string();
                                            break;
                                        case 4:
                                            i.depositFiatYearlyLimit = e.string();
                                            break;
                                        case 5:
                                            i.depositFiatLifeTimeLimit = e.string();
                                            break;
                                        case 6:
                                            i.withdrawFiatDailyLimit = e.string();
                                            break;
                                        case 7:
                                            i.withdrawFiatMonthlyLimit = e.string();
                                            break;
                                        case 8:
                                            i.withdrawFiatYearlyLimit = e.string();
                                            break;
                                        case 9:
                                            i.withdrawFiatLifeTimeLimit = e.string();
                                            break;
                                        case 10:
                                            i.cryptoCurrency = e.string();
                                            break;
                                        case 11:
                                            i.depositCryptoDailyLimit = e.string();
                                            break;
                                        case 12:
                                            i.withdrawCryptoDailyLimit = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.fiatCurrency && e.hasOwnProperty("fiatCurrency") && !a.isString(e.fiatCurrency) ? "fiatCurrency: string expected" : null != e.depositFiatDailyLimit && e.hasOwnProperty("depositFiatDailyLimit") && !a.isString(e.depositFiatDailyLimit) ? "depositFiatDailyLimit: string expected" : null != e.depositFiatMonthlyLimit && e.hasOwnProperty("depositFiatMonthlyLimit") && !a.isString(e.depositFiatMonthlyLimit) ? "depositFiatMonthlyLimit: string expected" : null != e.depositFiatYearlyLimit && e.hasOwnProperty("depositFiatYearlyLimit") && !a.isString(e.depositFiatYearlyLimit) ? "depositFiatYearlyLimit: string expected" : null != e.depositFiatLifeTimeLimit && e.hasOwnProperty("depositFiatLifeTimeLimit") && !a.isString(e.depositFiatLifeTimeLimit) ? "depositFiatLifeTimeLimit: string expected" : null != e.withdrawFiatDailyLimit && e.hasOwnProperty("withdrawFiatDailyLimit") && !a.isString(e.withdrawFiatDailyLimit) ? "withdrawFiatDailyLimit: string expected" : null != e.withdrawFiatMonthlyLimit && e.hasOwnProperty("withdrawFiatMonthlyLimit") && !a.isString(e.withdrawFiatMonthlyLimit) ? "withdrawFiatMonthlyLimit: string expected" : null != e.withdrawFiatYearlyLimit && e.hasOwnProperty("withdrawFiatYearlyLimit") && !a.isString(e.withdrawFiatYearlyLimit) ? "withdrawFiatYearlyLimit: string expected" : null != e.withdrawFiatLifeTimeLimit && e.hasOwnProperty("withdrawFiatLifeTimeLimit") && !a.isString(e.withdrawFiatLifeTimeLimit) ? "withdrawFiatLifeTimeLimit: string expected" : null != e.cryptoCurrency && e.hasOwnProperty("cryptoCurrency") && !a.isString(e.cryptoCurrency) ? "cryptoCurrency: string expected" : null != e.depositCryptoDailyLimit && e.hasOwnProperty("depositCryptoDailyLimit") && !a.isString(e.depositCryptoDailyLimit) ? "depositCryptoDailyLimit: string expected" : null != e.withdrawCryptoDailyLimit && e.hasOwnProperty("withdrawCryptoDailyLimit") && !a.isString(e.withdrawCryptoDailyLimit) ? "withdrawCryptoDailyLimit: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.KycLevelLimitDetail)) return e;
                                var t = new c.com.market.KycLevelLimitDetail;
                                return null != e.fiatCurrency && (t.fiatCurrency = String(e.fiatCurrency)), null != e.depositFiatDailyLimit && (t.depositFiatDailyLimit = String(e.depositFiatDailyLimit)), null != e.depositFiatMonthlyLimit && (t.depositFiatMonthlyLimit = String(e.depositFiatMonthlyLimit)), null != e.depositFiatYearlyLimit && (t.depositFiatYearlyLimit = String(e.depositFiatYearlyLimit)), null != e.depositFiatLifeTimeLimit && (t.depositFiatLifeTimeLimit = String(e.depositFiatLifeTimeLimit)), null != e.withdrawFiatDailyLimit && (t.withdrawFiatDailyLimit = String(e.withdrawFiatDailyLimit)), null != e.withdrawFiatMonthlyLimit && (t.withdrawFiatMonthlyLimit = String(e.withdrawFiatMonthlyLimit)), null != e.withdrawFiatYearlyLimit && (t.withdrawFiatYearlyLimit = String(e.withdrawFiatYearlyLimit)), null != e.withdrawFiatLifeTimeLimit && (t.withdrawFiatLifeTimeLimit = String(e.withdrawFiatLifeTimeLimit)), null != e.cryptoCurrency && (t.cryptoCurrency = String(e.cryptoCurrency)), null != e.depositCryptoDailyLimit && (t.depositCryptoDailyLimit = String(e.depositCryptoDailyLimit)), null != e.withdrawCryptoDailyLimit && (t.withdrawCryptoDailyLimit = String(e.withdrawCryptoDailyLimit)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.fiatCurrency = "", r.depositFiatDailyLimit = "", r.depositFiatMonthlyLimit = "", r.depositFiatYearlyLimit = "", r.depositFiatLifeTimeLimit = "", r.withdrawFiatDailyLimit = "", r.withdrawFiatMonthlyLimit = "", r.withdrawFiatYearlyLimit = "", r.withdrawFiatLifeTimeLimit = "", r.cryptoCurrency = "", r.depositCryptoDailyLimit = "", r.withdrawCryptoDailyLimit = ""), null != e.fiatCurrency && e.hasOwnProperty("fiatCurrency") && (r.fiatCurrency = e.fiatCurrency), null != e.depositFiatDailyLimit && e.hasOwnProperty("depositFiatDailyLimit") && (r.depositFiatDailyLimit = e.depositFiatDailyLimit), null != e.depositFiatMonthlyLimit && e.hasOwnProperty("depositFiatMonthlyLimit") && (r.depositFiatMonthlyLimit = e.depositFiatMonthlyLimit), null != e.depositFiatYearlyLimit && e.hasOwnProperty("depositFiatYearlyLimit") && (r.depositFiatYearlyLimit = e.depositFiatYearlyLimit), null != e.depositFiatLifeTimeLimit && e.hasOwnProperty("depositFiatLifeTimeLimit") && (r.depositFiatLifeTimeLimit = e.depositFiatLifeTimeLimit), null != e.withdrawFiatDailyLimit && e.hasOwnProperty("withdrawFiatDailyLimit") && (r.withdrawFiatDailyLimit = e.withdrawFiatDailyLimit), null != e.withdrawFiatMonthlyLimit && e.hasOwnProperty("withdrawFiatMonthlyLimit") && (r.withdrawFiatMonthlyLimit = e.withdrawFiatMonthlyLimit), null != e.withdrawFiatYearlyLimit && e.hasOwnProperty("withdrawFiatYearlyLimit") && (r.withdrawFiatYearlyLimit = e.withdrawFiatYearlyLimit), null != e.withdrawFiatLifeTimeLimit && e.hasOwnProperty("withdrawFiatLifeTimeLimit") && (r.withdrawFiatLifeTimeLimit = e.withdrawFiatLifeTimeLimit), null != e.cryptoCurrency && e.hasOwnProperty("cryptoCurrency") && (r.cryptoCurrency = e.cryptoCurrency), null != e.depositCryptoDailyLimit && e.hasOwnProperty("depositCryptoDailyLimit") && (r.depositCryptoDailyLimit = e.depositCryptoDailyLimit), null != e.withdrawCryptoDailyLimit && e.hasOwnProperty("withdrawCryptoDailyLimit") && (r.withdrawCryptoDailyLimit = e.withdrawCryptoDailyLimit), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.CapitalConfigResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.CapitalConfigResp; e.pos < r;) {
                                    var s = e.uint32();
                                    e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null
                            }, e.fromObject = function(e) {
                                return (0, n._)(e, c.com.market.CapitalConfigResp) ? e : new c.com.market.CapitalConfigResp
                            }, e.toObject = function() {
                                return {}
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetSelectorResp = function() {
                            var e = function(e) {
                                if (this.selector = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.priorChoiceFromCode = "", e.prototype.priorChoiceToCode = "", e.prototype.selector = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), t.uint32(10).string(e.priorChoiceFromCode), t.uint32(18).string(e.priorChoiceToCode), null != e.selector && e.selector.length)
                                    for (var r = 0; r < e.selector.length; ++r) c.com.market.Selector.encode(e.selector[r], t.uint32(26).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetSelectorResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.priorChoiceFromCode = e.string();
                                            break;
                                        case 2:
                                            i.priorChoiceToCode = e.string();
                                            break;
                                        case 3:
                                            i.selector && i.selector.length || (i.selector = []), i.selector.push(c.com.market.Selector.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("priorChoiceFromCode")) throw a.ProtocolError("missing required 'priorChoiceFromCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("priorChoiceToCode")) throw a.ProtocolError("missing required 'priorChoiceToCode'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isString(e.priorChoiceFromCode)) return "priorChoiceFromCode: string expected";
                                if (!a.isString(e.priorChoiceToCode)) return "priorChoiceToCode: string expected";
                                if (null != e.selector && e.hasOwnProperty("selector")) {
                                    if (!Array.isArray(e.selector)) return "selector: array expected";
                                    for (var t = 0; t < e.selector.length; ++t) {
                                        var r = c.com.market.Selector.verify(e.selector[t]);
                                        if (r) return "selector." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetSelectorResp)) return e;
                                var t = new c.com.market.GetSelectorResp;
                                if (null != e.priorChoiceFromCode && (t.priorChoiceFromCode = String(e.priorChoiceFromCode)), null != e.priorChoiceToCode && (t.priorChoiceToCode = String(e.priorChoiceToCode)), e.selector) {
                                    if (!Array.isArray(e.selector)) throw TypeError(".com.market.GetSelectorResp.selector: array expected");
                                    t.selector = [];
                                    for (var r = 0; r < e.selector.length; ++r) {
                                        if ("object" !== typeof e.selector[r]) throw TypeError(".com.market.GetSelectorResp.selector: object expected");
                                        t.selector[r] = c.com.market.Selector.fromObject(e.selector[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.selector = []), t.defaults && (r.priorChoiceFromCode = "", r.priorChoiceToCode = ""), null != e.priorChoiceFromCode && e.hasOwnProperty("priorChoiceFromCode") && (r.priorChoiceFromCode = e.priorChoiceFromCode), null != e.priorChoiceToCode && e.hasOwnProperty("priorChoiceToCode") && (r.priorChoiceToCode = e.priorChoiceToCode), e.selector && e.selector.length) {
                                    r.selector = [];
                                    for (var n = 0; n < e.selector.length; ++n) r.selector[n] = c.com.market.Selector.toObject(e.selector[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.Selector = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.order = 0, e.prototype.freeAsset = "", e.prototype.fiatTag = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), t.uint32(40).int32(e.order), t.uint32(50).string(e.freeAsset), t.uint32(56).bool(e.fiatTag), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.Selector; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.order = e.int32();
                                            break;
                                        case 6:
                                            i.freeAsset = e.string();
                                            break;
                                        case 7:
                                            i.fiatTag = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("order")) throw a.ProtocolError("missing required 'order'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("freeAsset")) throw a.ProtocolError("missing required 'freeAsset'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("fiatTag")) throw a.ProtocolError("missing required 'fiatTag'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.assetCode) ? null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl) ? "logoUrl: string expected" : null != e.size && e.hasOwnProperty("size") && !a.isString(e.size) ? "size: string expected" : a.isInteger(e.order) ? a.isString(e.freeAsset) ? "boolean" !== typeof e.fiatTag ? "fiatTag: boolean expected" : null : "freeAsset: string expected" : "order: integer expected" : "assetCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.Selector)) return e;
                                var t = new c.com.market.Selector;
                                return null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.order && (t.order = 0 | e.order), null != e.freeAsset && (t.freeAsset = String(e.freeAsset)), null != e.fiatTag && (t.fiatTag = Boolean(e.fiatTag)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.order = 0, r.freeAsset = "", r.fiatTag = !1), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.order && e.hasOwnProperty("order") && (r.order = e.order), null != e.freeAsset && e.hasOwnProperty("freeAsset") && (r.freeAsset = e.freeAsset), null != e.fiatTag && e.hasOwnProperty("fiatTag") && (r.fiatTag = e.fiatTag), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetSubSelectorResp = function() {
                            var e = function(e) {
                                if (this.subSelector = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.order = 0, e.prototype.freeAsset = "", e.prototype.fiatTag = !1, e.prototype.priorChoiceFromCode = "", e.prototype.priorChoiceToCode = "", e.prototype.subSelector = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), t.uint32(40).int32(e.order), t.uint32(50).string(e.freeAsset), t.uint32(56).bool(e.fiatTag), t.uint32(66).string(e.priorChoiceFromCode), t.uint32(74).string(e.priorChoiceToCode), null != e.subSelector && e.subSelector.length)
                                    for (var r = 0; r < e.subSelector.length; ++r) c.com.market.SubSelector.encode(e.subSelector[r], t.uint32(82).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetSubSelectorResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.order = e.int32();
                                            break;
                                        case 6:
                                            i.freeAsset = e.string();
                                            break;
                                        case 7:
                                            i.fiatTag = e.bool();
                                            break;
                                        case 8:
                                            i.priorChoiceFromCode = e.string();
                                            break;
                                        case 9:
                                            i.priorChoiceToCode = e.string();
                                            break;
                                        case 10:
                                            i.subSelector && i.subSelector.length || (i.subSelector = []), i.subSelector.push(c.com.market.SubSelector.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("order")) throw a.ProtocolError("missing required 'order'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("freeAsset")) throw a.ProtocolError("missing required 'freeAsset'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("fiatTag")) throw a.ProtocolError("missing required 'fiatTag'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("priorChoiceFromCode")) throw a.ProtocolError("missing required 'priorChoiceFromCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("priorChoiceToCode")) throw a.ProtocolError("missing required 'priorChoiceToCode'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isString(e.assetCode)) return "assetCode: string expected";
                                if (null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName)) return "assetName: string expected";
                                if (null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl)) return "logoUrl: string expected";
                                if (null != e.size && e.hasOwnProperty("size") && !a.isString(e.size)) return "size: string expected";
                                if (!a.isInteger(e.order)) return "order: integer expected";
                                if (!a.isString(e.freeAsset)) return "freeAsset: string expected";
                                if ("boolean" !== typeof e.fiatTag) return "fiatTag: boolean expected";
                                if (!a.isString(e.priorChoiceFromCode)) return "priorChoiceFromCode: string expected";
                                if (!a.isString(e.priorChoiceToCode)) return "priorChoiceToCode: string expected";
                                if (null != e.subSelector && e.hasOwnProperty("subSelector")) {
                                    if (!Array.isArray(e.subSelector)) return "subSelector: array expected";
                                    for (var t = 0; t < e.subSelector.length; ++t) {
                                        var r = c.com.market.SubSelector.verify(e.subSelector[t]);
                                        if (r) return "subSelector." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetSubSelectorResp)) return e;
                                var t = new c.com.market.GetSubSelectorResp;
                                if (null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.order && (t.order = 0 | e.order), null != e.freeAsset && (t.freeAsset = String(e.freeAsset)), null != e.fiatTag && (t.fiatTag = Boolean(e.fiatTag)), null != e.priorChoiceFromCode && (t.priorChoiceFromCode = String(e.priorChoiceFromCode)), null != e.priorChoiceToCode && (t.priorChoiceToCode = String(e.priorChoiceToCode)), e.subSelector) {
                                    if (!Array.isArray(e.subSelector)) throw TypeError(".com.market.GetSubSelectorResp.subSelector: array expected");
                                    t.subSelector = [];
                                    for (var r = 0; r < e.subSelector.length; ++r) {
                                        if ("object" !== typeof e.subSelector[r]) throw TypeError(".com.market.GetSubSelectorResp.subSelector: object expected");
                                        t.subSelector[r] = c.com.market.SubSelector.fromObject(e.subSelector[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.subSelector = []), t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.order = 0, r.freeAsset = "", r.fiatTag = !1, r.priorChoiceFromCode = "", r.priorChoiceToCode = ""), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.order && e.hasOwnProperty("order") && (r.order = e.order), null != e.freeAsset && e.hasOwnProperty("freeAsset") && (r.freeAsset = e.freeAsset), null != e.fiatTag && e.hasOwnProperty("fiatTag") && (r.fiatTag = e.fiatTag), null != e.priorChoiceFromCode && e.hasOwnProperty("priorChoiceFromCode") && (r.priorChoiceFromCode = e.priorChoiceFromCode), null != e.priorChoiceToCode && e.hasOwnProperty("priorChoiceToCode") && (r.priorChoiceToCode = e.priorChoiceToCode), e.subSelector && e.subSelector.length) {
                                    r.subSelector = [];
                                    for (var n = 0; n < e.subSelector.length; ++n) r.subSelector[n] = c.com.market.SubSelector.toObject(e.subSelector[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.SubSelector = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.order = 0, e.prototype.perTimeMinLimit = "", e.prototype.perTimeMaxLimit = "", e.prototype.dailyMaxLimit = "", e.prototype.hadDailyLimit = "", e.prototype.needMarket = !1, e.prototype.feeType = 0, e.prototype.feeRate = "", e.prototype.fixFee = "", e.prototype.forexRate = "", e.prototype.expireTime = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), t.uint32(40).int32(e.order), t.uint32(50).string(e.perTimeMinLimit), t.uint32(58).string(e.perTimeMaxLimit), null != e.dailyMaxLimit && Object.hasOwnProperty.call(e, "dailyMaxLimit") && t.uint32(66).string(e.dailyMaxLimit), null != e.hadDailyLimit && Object.hasOwnProperty.call(e, "hadDailyLimit") && t.uint32(74).string(e.hadDailyLimit), null != e.needMarket && Object.hasOwnProperty.call(e, "needMarket") && t.uint32(80).bool(e.needMarket), null != e.feeType && Object.hasOwnProperty.call(e, "feeType") && t.uint32(88).int32(e.feeType), null != e.feeRate && Object.hasOwnProperty.call(e, "feeRate") && t.uint32(98).string(e.feeRate), null != e.fixFee && Object.hasOwnProperty.call(e, "fixFee") && t.uint32(106).string(e.fixFee), null != e.forexRate && Object.hasOwnProperty.call(e, "forexRate") && t.uint32(114).string(e.forexRate), t.uint32(120).int32(e.expireTime), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.SubSelector; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.order = e.int32();
                                            break;
                                        case 6:
                                            i.perTimeMinLimit = e.string();
                                            break;
                                        case 7:
                                            i.perTimeMaxLimit = e.string();
                                            break;
                                        case 8:
                                            i.dailyMaxLimit = e.string();
                                            break;
                                        case 9:
                                            i.hadDailyLimit = e.string();
                                            break;
                                        case 10:
                                            i.needMarket = e.bool();
                                            break;
                                        case 11:
                                            i.feeType = e.int32();
                                            break;
                                        case 12:
                                            i.feeRate = e.string();
                                            break;
                                        case 13:
                                            i.fixFee = e.string();
                                            break;
                                        case 14:
                                            i.forexRate = e.string();
                                            break;
                                        case 15:
                                            i.expireTime = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("order")) throw a.ProtocolError("missing required 'order'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("perTimeMinLimit")) throw a.ProtocolError("missing required 'perTimeMinLimit'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("perTimeMaxLimit")) throw a.ProtocolError("missing required 'perTimeMaxLimit'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("expireTime")) throw a.ProtocolError("missing required 'expireTime'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.assetCode) ? null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl) ? "logoUrl: string expected" : null != e.size && e.hasOwnProperty("size") && !a.isString(e.size) ? "size: string expected" : a.isInteger(e.order) ? a.isString(e.perTimeMinLimit) ? a.isString(e.perTimeMaxLimit) ? null != e.dailyMaxLimit && e.hasOwnProperty("dailyMaxLimit") && !a.isString(e.dailyMaxLimit) ? "dailyMaxLimit: string expected" : null != e.hadDailyLimit && e.hasOwnProperty("hadDailyLimit") && !a.isString(e.hadDailyLimit) ? "hadDailyLimit: string expected" : null != e.needMarket && e.hasOwnProperty("needMarket") && "boolean" !== typeof e.needMarket ? "needMarket: boolean expected" : null != e.feeType && e.hasOwnProperty("feeType") && !a.isInteger(e.feeType) ? "feeType: integer expected" : null != e.feeRate && e.hasOwnProperty("feeRate") && !a.isString(e.feeRate) ? "feeRate: string expected" : null != e.fixFee && e.hasOwnProperty("fixFee") && !a.isString(e.fixFee) ? "fixFee: string expected" : null != e.forexRate && e.hasOwnProperty("forexRate") && !a.isString(e.forexRate) ? "forexRate: string expected" : a.isInteger(e.expireTime) ? null : "expireTime: integer expected" : "perTimeMaxLimit: string expected" : "perTimeMinLimit: string expected" : "order: integer expected" : "assetCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.SubSelector)) return e;
                                var t = new c.com.market.SubSelector;
                                return null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.order && (t.order = 0 | e.order), null != e.perTimeMinLimit && (t.perTimeMinLimit = String(e.perTimeMinLimit)), null != e.perTimeMaxLimit && (t.perTimeMaxLimit = String(e.perTimeMaxLimit)), null != e.dailyMaxLimit && (t.dailyMaxLimit = String(e.dailyMaxLimit)), null != e.hadDailyLimit && (t.hadDailyLimit = String(e.hadDailyLimit)), null != e.needMarket && (t.needMarket = Boolean(e.needMarket)), null != e.feeType && (t.feeType = 0 | e.feeType), null != e.feeRate && (t.feeRate = String(e.feeRate)), null != e.fixFee && (t.fixFee = String(e.fixFee)), null != e.forexRate && (t.forexRate = String(e.forexRate)), null != e.expireTime && (t.expireTime = 0 | e.expireTime), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.order = 0, r.perTimeMinLimit = "", r.perTimeMaxLimit = "", r.dailyMaxLimit = "", r.hadDailyLimit = "", r.needMarket = !1, r.feeType = 0, r.feeRate = "", r.fixFee = "", r.forexRate = "", r.expireTime = 0), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.order && e.hasOwnProperty("order") && (r.order = e.order), null != e.perTimeMinLimit && e.hasOwnProperty("perTimeMinLimit") && (r.perTimeMinLimit = e.perTimeMinLimit), null != e.perTimeMaxLimit && e.hasOwnProperty("perTimeMaxLimit") && (r.perTimeMaxLimit = e.perTimeMaxLimit), null != e.dailyMaxLimit && e.hasOwnProperty("dailyMaxLimit") && (r.dailyMaxLimit = e.dailyMaxLimit), null != e.hadDailyLimit && e.hasOwnProperty("hadDailyLimit") && (r.hadDailyLimit = e.hadDailyLimit), null != e.needMarket && e.hasOwnProperty("needMarket") && (r.needMarket = e.needMarket), null != e.feeType && e.hasOwnProperty("feeType") && (r.feeType = e.feeType), null != e.feeRate && e.hasOwnProperty("feeRate") && (r.feeRate = e.feeRate), null != e.fixFee && e.hasOwnProperty("fixFee") && (r.fixFee = e.fixFee), null != e.forexRate && e.hasOwnProperty("forexRate") && (r.forexRate = e.forexRate), null != e.expireTime && e.hasOwnProperty("expireTime") && (r.expireTime = e.expireTime), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.IsolatedMarginAccountResp = function() {
                            var e = function(e) {
                                if (this.isolatedMarginAccountDetail = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.isolatedMarginAccountDetail = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.isolatedMarginAccountDetail && e.isolatedMarginAccountDetail.length)
                                    for (var r = 0; r < e.isolatedMarginAccountDetail.length; ++r) c.com.market.IsolatedMarginAccountDetail.encode(e.isolatedMarginAccountDetail[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.IsolatedMarginAccountResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.isolatedMarginAccountDetail && i.isolatedMarginAccountDetail.length || (i.isolatedMarginAccountDetail = []), i.isolatedMarginAccountDetail.push(c.com.market.IsolatedMarginAccountDetail.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.isolatedMarginAccountDetail && e.hasOwnProperty("isolatedMarginAccountDetail")) {
                                    if (!Array.isArray(e.isolatedMarginAccountDetail)) return "isolatedMarginAccountDetail: array expected";
                                    for (var t = 0; t < e.isolatedMarginAccountDetail.length; ++t) {
                                        var r = c.com.market.IsolatedMarginAccountDetail.verify(e.isolatedMarginAccountDetail[t]);
                                        if (r) return "isolatedMarginAccountDetail." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.IsolatedMarginAccountResp)) return e;
                                var t = new c.com.market.IsolatedMarginAccountResp;
                                if (e.isolatedMarginAccountDetail) {
                                    if (!Array.isArray(e.isolatedMarginAccountDetail)) throw TypeError(".com.market.IsolatedMarginAccountResp.isolatedMarginAccountDetail: array expected");
                                    t.isolatedMarginAccountDetail = [];
                                    for (var r = 0; r < e.isolatedMarginAccountDetail.length; ++r) {
                                        if ("object" !== typeof e.isolatedMarginAccountDetail[r]) throw TypeError(".com.market.IsolatedMarginAccountResp.isolatedMarginAccountDetail: object expected");
                                        t.isolatedMarginAccountDetail[r] = c.com.market.IsolatedMarginAccountDetail.fromObject(e.isolatedMarginAccountDetail[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.isolatedMarginAccountDetail = []), e.isolatedMarginAccountDetail && e.isolatedMarginAccountDetail.length) {
                                    r.isolatedMarginAccountDetail = [];
                                    for (var n = 0; n < e.isolatedMarginAccountDetail.length; ++n) r.isolatedMarginAccountDetail[n] = c.com.market.IsolatedMarginAccountDetail.toObject(e.isolatedMarginAccountDetail[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.IsolatedMarginAccountDetail = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.created = !1, e.prototype.marginRatio = "", e.prototype.marginLevel = "", e.prototype.marginLevelStatus = "", e.prototype.tradeEnabled = !1, e.prototype.coeff = null, e.prototype.ladder = 0, e.prototype.ladderLocked = !1, e.prototype.status = "", e.prototype.delistTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.base = null, e.prototype.quote = null, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.created && Object.hasOwnProperty.call(e, "created") && t.uint32(8).bool(e.created), null != e.marginRatio && Object.hasOwnProperty.call(e, "marginRatio") && t.uint32(18).string(e.marginRatio), null != e.marginLevel && Object.hasOwnProperty.call(e, "marginLevel") && t.uint32(26).string(e.marginLevel), null != e.marginLevelStatus && Object.hasOwnProperty.call(e, "marginLevelStatus") && t.uint32(34).string(e.marginLevelStatus), null != e.tradeEnabled && Object.hasOwnProperty.call(e, "tradeEnabled") && t.uint32(40).bool(e.tradeEnabled), null != e.coeff && Object.hasOwnProperty.call(e, "coeff") && c.com.market.IsolatedMarginCoeff.encode(e.coeff, t.uint32(50).fork()).ldelim(), null != e.ladder && Object.hasOwnProperty.call(e, "ladder") && t.uint32(56).int32(e.ladder), null != e.ladderLocked && Object.hasOwnProperty.call(e, "ladderLocked") && t.uint32(64).bool(e.ladderLocked), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(74).string(e.status), null != e.delistTime && Object.hasOwnProperty.call(e, "delistTime") && t.uint32(80).int64(e.delistTime), null != e.base && Object.hasOwnProperty.call(e, "base") && c.com.market.AssetDetail.encode(e.base, t.uint32(90).fork()).ldelim(), null != e.quote && Object.hasOwnProperty.call(e, "quote") && c.com.market.AssetDetail.encode(e.quote, t.uint32(98).fork()).ldelim(), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.IsolatedMarginAccountDetail; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.created = e.bool();
                                            break;
                                        case 2:
                                            i.marginRatio = e.string();
                                            break;
                                        case 3:
                                            i.marginLevel = e.string();
                                            break;
                                        case 4:
                                            i.marginLevelStatus = e.string();
                                            break;
                                        case 5:
                                            i.tradeEnabled = e.bool();
                                            break;
                                        case 6:
                                            i.coeff = c.com.market.IsolatedMarginCoeff.decode(e, e.uint32());
                                            break;
                                        case 7:
                                            i.ladder = e.int32();
                                            break;
                                        case 8:
                                            i.ladderLocked = e.bool();
                                            break;
                                        case 9:
                                            i.status = e.string();
                                            break;
                                        case 10:
                                            i.delistTime = e.int64();
                                            break;
                                        case 11:
                                            i.base = c.com.market.AssetDetail.decode(e, e.uint32());
                                            break;
                                        case 12:
                                            i.quote = c.com.market.AssetDetail.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.created && e.hasOwnProperty("created") && "boolean" !== typeof e.created) return "created: boolean expected";
                                if (null != e.marginRatio && e.hasOwnProperty("marginRatio") && !a.isString(e.marginRatio)) return "marginRatio: string expected";
                                if (null != e.marginLevel && e.hasOwnProperty("marginLevel") && !a.isString(e.marginLevel)) return "marginLevel: string expected";
                                if (null != e.marginLevelStatus && e.hasOwnProperty("marginLevelStatus") && !a.isString(e.marginLevelStatus)) return "marginLevelStatus: string expected";
                                if (null != e.tradeEnabled && e.hasOwnProperty("tradeEnabled") && "boolean" !== typeof e.tradeEnabled) return "tradeEnabled: boolean expected";
                                if (null != e.coeff && e.hasOwnProperty("coeff")) {
                                    var t = c.com.market.IsolatedMarginCoeff.verify(e.coeff);
                                    if (t) return "coeff." + t
                                }
                                if (null != e.ladder && e.hasOwnProperty("ladder") && !a.isInteger(e.ladder)) return "ladder: integer expected";
                                if (null != e.ladderLocked && e.hasOwnProperty("ladderLocked") && "boolean" !== typeof e.ladderLocked) return "ladderLocked: boolean expected";
                                if (null != e.status && e.hasOwnProperty("status") && !a.isString(e.status)) return "status: string expected";
                                if (null != e.delistTime && e.hasOwnProperty("delistTime") && !a.isInteger(e.delistTime) && !(e.delistTime && a.isInteger(e.delistTime.low) && a.isInteger(e.delistTime.high))) return "delistTime: integer|Long expected";
                                if (null != e.base && e.hasOwnProperty("base")) {
                                    var r = c.com.market.AssetDetail.verify(e.base);
                                    if (r) return "base." + r
                                }
                                if (null != e.quote && e.hasOwnProperty("quote")) {
                                    var n = c.com.market.AssetDetail.verify(e.quote);
                                    if (n) return "quote." + n
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.IsolatedMarginAccountDetail)) return e;
                                var t = new c.com.market.IsolatedMarginAccountDetail;
                                if (null != e.created && (t.created = Boolean(e.created)), null != e.marginRatio && (t.marginRatio = String(e.marginRatio)), null != e.marginLevel && (t.marginLevel = String(e.marginLevel)), null != e.marginLevelStatus && (t.marginLevelStatus = String(e.marginLevelStatus)), null != e.tradeEnabled && (t.tradeEnabled = Boolean(e.tradeEnabled)), null != e.coeff) {
                                    if ("object" !== typeof e.coeff) throw TypeError(".com.market.IsolatedMarginAccountDetail.coeff: object expected");
                                    t.coeff = c.com.market.IsolatedMarginCoeff.fromObject(e.coeff)
                                }
                                if (null != e.ladder && (t.ladder = 0 | e.ladder), null != e.ladderLocked && (t.ladderLocked = Boolean(e.ladderLocked)), null != e.status && (t.status = String(e.status)), null != e.delistTime && (a.Long ? (t.delistTime = a.Long.fromValue(e.delistTime)).unsigned = !1 : "string" === typeof e.delistTime ? t.delistTime = parseInt(e.delistTime, 10) : "number" === typeof e.delistTime ? t.delistTime = e.delistTime : "object" === typeof e.delistTime && (t.delistTime = new a.LongBits(e.delistTime.low >>> 0, e.delistTime.high >>> 0).toNumber())), null != e.base) {
                                    if ("object" !== typeof e.base) throw TypeError(".com.market.IsolatedMarginAccountDetail.base: object expected");
                                    t.base = c.com.market.AssetDetail.fromObject(e.base)
                                }
                                if (null != e.quote) {
                                    if ("object" !== typeof e.quote) throw TypeError(".com.market.IsolatedMarginAccountDetail.quote: object expected");
                                    t.quote = c.com.market.AssetDetail.fromObject(e.quote)
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.created = !1, r.marginRatio = "", r.marginLevel = "", r.marginLevelStatus = "", r.tradeEnabled = !1, r.coeff = null, r.ladder = 0, r.ladderLocked = !1, r.status = "", a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.delistTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.delistTime = t.longs === String ? "0" : 0;
                                    r.base = null, r.quote = null
                                }
                                return null != e.created && e.hasOwnProperty("created") && (r.created = e.created), null != e.marginRatio && e.hasOwnProperty("marginRatio") && (r.marginRatio = e.marginRatio), null != e.marginLevel && e.hasOwnProperty("marginLevel") && (r.marginLevel = e.marginLevel), null != e.marginLevelStatus && e.hasOwnProperty("marginLevelStatus") && (r.marginLevelStatus = e.marginLevelStatus), null != e.tradeEnabled && e.hasOwnProperty("tradeEnabled") && (r.tradeEnabled = e.tradeEnabled), null != e.coeff && e.hasOwnProperty("coeff") && (r.coeff = c.com.market.IsolatedMarginCoeff.toObject(e.coeff, t)), null != e.ladder && e.hasOwnProperty("ladder") && (r.ladder = e.ladder), null != e.ladderLocked && e.hasOwnProperty("ladderLocked") && (r.ladderLocked = e.ladderLocked), null != e.status && e.hasOwnProperty("status") && (r.status = e.status), null != e.delistTime && e.hasOwnProperty("delistTime") && ("number" === typeof e.delistTime ? r.delistTime = t.longs === String ? String(e.delistTime) : e.delistTime : r.delistTime = t.longs === String ? a.Long.prototype.toString.call(e.delistTime) : t.longs === Number ? new a.LongBits(e.delistTime.low >>> 0, e.delistTime.high >>> 0).toNumber() : e.delistTime), null != e.base && e.hasOwnProperty("base") && (r.base = c.com.market.AssetDetail.toObject(e.base, t)), null != e.quote && e.hasOwnProperty("quote") && (r.quote = c.com.market.AssetDetail.toObject(e.quote, t)), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.IsolatedMarginCoeff = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.normalBar = "", e.prototype.callBar = "", e.prototype.preLiquidationBar = "", e.prototype.forceLiquidationBar = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.normalBar && Object.hasOwnProperty.call(e, "normalBar") && t.uint32(10).string(e.normalBar), null != e.callBar && Object.hasOwnProperty.call(e, "callBar") && t.uint32(18).string(e.callBar), null != e.preLiquidationBar && Object.hasOwnProperty.call(e, "preLiquidationBar") && t.uint32(26).string(e.preLiquidationBar), null != e.forceLiquidationBar && Object.hasOwnProperty.call(e, "forceLiquidationBar") && t.uint32(34).string(e.forceLiquidationBar), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.IsolatedMarginCoeff; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.normalBar = e.string();
                                            break;
                                        case 2:
                                            i.callBar = e.string();
                                            break;
                                        case 3:
                                            i.preLiquidationBar = e.string();
                                            break;
                                        case 4:
                                            i.forceLiquidationBar = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.normalBar && e.hasOwnProperty("normalBar") && !a.isString(e.normalBar) ? "normalBar: string expected" : null != e.callBar && e.hasOwnProperty("callBar") && !a.isString(e.callBar) ? "callBar: string expected" : null != e.preLiquidationBar && e.hasOwnProperty("preLiquidationBar") && !a.isString(e.preLiquidationBar) ? "preLiquidationBar: string expected" : null != e.forceLiquidationBar && e.hasOwnProperty("forceLiquidationBar") && !a.isString(e.forceLiquidationBar) ? "forceLiquidationBar: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.IsolatedMarginCoeff)) return e;
                                var t = new c.com.market.IsolatedMarginCoeff;
                                return null != e.normalBar && (t.normalBar = String(e.normalBar)), null != e.callBar && (t.callBar = String(e.callBar)), null != e.preLiquidationBar && (t.preLiquidationBar = String(e.preLiquidationBar)), null != e.forceLiquidationBar && (t.forceLiquidationBar = String(e.forceLiquidationBar)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.normalBar = "", r.callBar = "", r.preLiquidationBar = "", r.forceLiquidationBar = ""), null != e.normalBar && e.hasOwnProperty("normalBar") && (r.normalBar = e.normalBar), null != e.callBar && e.hasOwnProperty("callBar") && (r.callBar = e.callBar), null != e.preLiquidationBar && e.hasOwnProperty("preLiquidationBar") && (r.preLiquidationBar = e.preLiquidationBar), null != e.forceLiquidationBar && e.hasOwnProperty("forceLiquidationBar") && (r.forceLiquidationBar = e.forceLiquidationBar), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.AssetDetail = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetName = "", e.prototype.free = "", e.prototype.locked = "", e.prototype.borrowed = "", e.prototype.interest = "", e.prototype.netAsset = "", e.prototype.netAssetOfBtc = "", e.prototype.total = "", e.prototype.userMinBorrow = "", e.prototype.userMinRepay = "", e.prototype.transferInEnabled = !1, e.prototype.transferOutEnabled = !1, e.prototype.borrowEnabled = !1, e.prototype.repayEnabled = !1, e.prototype.couponAmount = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(10).string(e.assetName), null != e.free && Object.hasOwnProperty.call(e, "free") && t.uint32(18).string(e.free), null != e.locked && Object.hasOwnProperty.call(e, "locked") && t.uint32(26).string(e.locked), null != e.borrowed && Object.hasOwnProperty.call(e, "borrowed") && t.uint32(34).string(e.borrowed), null != e.interest && Object.hasOwnProperty.call(e, "interest") && t.uint32(42).string(e.interest), null != e.netAsset && Object.hasOwnProperty.call(e, "netAsset") && t.uint32(50).string(e.netAsset), null != e.netAssetOfBtc && Object.hasOwnProperty.call(e, "netAssetOfBtc") && t.uint32(58).string(e.netAssetOfBtc), null != e.total && Object.hasOwnProperty.call(e, "total") && t.uint32(66).string(e.total), null != e.userMinBorrow && Object.hasOwnProperty.call(e, "userMinBorrow") && t.uint32(74).string(e.userMinBorrow), null != e.userMinRepay && Object.hasOwnProperty.call(e, "userMinRepay") && t.uint32(82).string(e.userMinRepay), null != e.transferInEnabled && Object.hasOwnProperty.call(e, "transferInEnabled") && t.uint32(88).bool(e.transferInEnabled), null != e.transferOutEnabled && Object.hasOwnProperty.call(e, "transferOutEnabled") && t.uint32(96).bool(e.transferOutEnabled), null != e.borrowEnabled && Object.hasOwnProperty.call(e, "borrowEnabled") && t.uint32(104).bool(e.borrowEnabled), null != e.repayEnabled && Object.hasOwnProperty.call(e, "repayEnabled") && t.uint32(112).bool(e.repayEnabled), null != e.couponAmount && Object.hasOwnProperty.call(e, "couponAmount") && t.uint32(122).string(e.couponAmount), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.AssetDetail; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetName = e.string();
                                            break;
                                        case 2:
                                            i.free = e.string();
                                            break;
                                        case 3:
                                            i.locked = e.string();
                                            break;
                                        case 4:
                                            i.borrowed = e.string();
                                            break;
                                        case 5:
                                            i.interest = e.string();
                                            break;
                                        case 6:
                                            i.netAsset = e.string();
                                            break;
                                        case 7:
                                            i.netAssetOfBtc = e.string();
                                            break;
                                        case 8:
                                            i.total = e.string();
                                            break;
                                        case 9:
                                            i.userMinBorrow = e.string();
                                            break;
                                        case 10:
                                            i.userMinRepay = e.string();
                                            break;
                                        case 11:
                                            i.transferInEnabled = e.bool();
                                            break;
                                        case 12:
                                            i.transferOutEnabled = e.bool();
                                            break;
                                        case 13:
                                            i.borrowEnabled = e.bool();
                                            break;
                                        case 14:
                                            i.repayEnabled = e.bool();
                                            break;
                                        case 15:
                                            i.couponAmount = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : null != e.free && e.hasOwnProperty("free") && !a.isString(e.free) ? "free: string expected" : null != e.locked && e.hasOwnProperty("locked") && !a.isString(e.locked) ? "locked: string expected" : null != e.borrowed && e.hasOwnProperty("borrowed") && !a.isString(e.borrowed) ? "borrowed: string expected" : null != e.interest && e.hasOwnProperty("interest") && !a.isString(e.interest) ? "interest: string expected" : null != e.netAsset && e.hasOwnProperty("netAsset") && !a.isString(e.netAsset) ? "netAsset: string expected" : null != e.netAssetOfBtc && e.hasOwnProperty("netAssetOfBtc") && !a.isString(e.netAssetOfBtc) ? "netAssetOfBtc: string expected" : null != e.total && e.hasOwnProperty("total") && !a.isString(e.total) ? "total: string expected" : null != e.userMinBorrow && e.hasOwnProperty("userMinBorrow") && !a.isString(e.userMinBorrow) ? "userMinBorrow: string expected" : null != e.userMinRepay && e.hasOwnProperty("userMinRepay") && !a.isString(e.userMinRepay) ? "userMinRepay: string expected" : null != e.transferInEnabled && e.hasOwnProperty("transferInEnabled") && "boolean" !== typeof e.transferInEnabled ? "transferInEnabled: boolean expected" : null != e.transferOutEnabled && e.hasOwnProperty("transferOutEnabled") && "boolean" !== typeof e.transferOutEnabled ? "transferOutEnabled: boolean expected" : null != e.borrowEnabled && e.hasOwnProperty("borrowEnabled") && "boolean" !== typeof e.borrowEnabled ? "borrowEnabled: boolean expected" : null != e.repayEnabled && e.hasOwnProperty("repayEnabled") && "boolean" !== typeof e.repayEnabled ? "repayEnabled: boolean expected" : null != e.couponAmount && e.hasOwnProperty("couponAmount") && !a.isString(e.couponAmount) ? "couponAmount: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.AssetDetail)) return e;
                                var t = new c.com.market.AssetDetail;
                                return null != e.assetName && (t.assetName = String(e.assetName)), null != e.free && (t.free = String(e.free)), null != e.locked && (t.locked = String(e.locked)), null != e.borrowed && (t.borrowed = String(e.borrowed)), null != e.interest && (t.interest = String(e.interest)), null != e.netAsset && (t.netAsset = String(e.netAsset)), null != e.netAssetOfBtc && (t.netAssetOfBtc = String(e.netAssetOfBtc)), null != e.total && (t.total = String(e.total)), null != e.userMinBorrow && (t.userMinBorrow = String(e.userMinBorrow)), null != e.userMinRepay && (t.userMinRepay = String(e.userMinRepay)), null != e.transferInEnabled && (t.transferInEnabled = Boolean(e.transferInEnabled)), null != e.transferOutEnabled && (t.transferOutEnabled = Boolean(e.transferOutEnabled)), null != e.borrowEnabled && (t.borrowEnabled = Boolean(e.borrowEnabled)), null != e.repayEnabled && (t.repayEnabled = Boolean(e.repayEnabled)), null != e.couponAmount && (t.couponAmount = String(e.couponAmount)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetName = "", r.free = "", r.locked = "", r.borrowed = "", r.interest = "", r.netAsset = "", r.netAssetOfBtc = "", r.total = "", r.userMinBorrow = "", r.userMinRepay = "", r.transferInEnabled = !1, r.transferOutEnabled = !1, r.borrowEnabled = !1, r.repayEnabled = !1, r.couponAmount = ""), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.free && e.hasOwnProperty("free") && (r.free = e.free), null != e.locked && e.hasOwnProperty("locked") && (r.locked = e.locked), null != e.borrowed && e.hasOwnProperty("borrowed") && (r.borrowed = e.borrowed), null != e.interest && e.hasOwnProperty("interest") && (r.interest = e.interest), null != e.netAsset && e.hasOwnProperty("netAsset") && (r.netAsset = e.netAsset), null != e.netAssetOfBtc && e.hasOwnProperty("netAssetOfBtc") && (r.netAssetOfBtc = e.netAssetOfBtc), null != e.total && e.hasOwnProperty("total") && (r.total = e.total), null != e.userMinBorrow && e.hasOwnProperty("userMinBorrow") && (r.userMinBorrow = e.userMinBorrow), null != e.userMinRepay && e.hasOwnProperty("userMinRepay") && (r.userMinRepay = e.userMinRepay), null != e.transferInEnabled && e.hasOwnProperty("transferInEnabled") && (r.transferInEnabled = e.transferInEnabled), null != e.transferOutEnabled && e.hasOwnProperty("transferOutEnabled") && (r.transferOutEnabled = e.transferOutEnabled), null != e.borrowEnabled && e.hasOwnProperty("borrowEnabled") && (r.borrowEnabled = e.borrowEnabled), null != e.repayEnabled && e.hasOwnProperty("repayEnabled") && (r.repayEnabled = e.repayEnabled), null != e.couponAmount && e.hasOwnProperty("couponAmount") && (r.couponAmount = e.couponAmount), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetAccountUserConfigResp = function() {
                            var e = function(e) {
                                if (this.accountUserConfigRet = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.accountUserConfigRet = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.accountUserConfigRet && e.accountUserConfigRet.length)
                                    for (var r = 0; r < e.accountUserConfigRet.length; ++r) c.com.market.GetAccountUserConfigRet.encode(e.accountUserConfigRet[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetAccountUserConfigResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.accountUserConfigRet && i.accountUserConfigRet.length || (i.accountUserConfigRet = []), i.accountUserConfigRet.push(c.com.market.GetAccountUserConfigRet.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.accountUserConfigRet && e.hasOwnProperty("accountUserConfigRet")) {
                                    if (!Array.isArray(e.accountUserConfigRet)) return "accountUserConfigRet: array expected";
                                    for (var t = 0; t < e.accountUserConfigRet.length; ++t) {
                                        var r = c.com.market.GetAccountUserConfigRet.verify(e.accountUserConfigRet[t]);
                                        if (r) return "accountUserConfigRet." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetAccountUserConfigResp)) return e;
                                var t = new c.com.market.GetAccountUserConfigResp;
                                if (e.accountUserConfigRet) {
                                    if (!Array.isArray(e.accountUserConfigRet)) throw TypeError(".com.market.GetAccountUserConfigResp.accountUserConfigRet: array expected");
                                    t.accountUserConfigRet = [];
                                    for (var r = 0; r < e.accountUserConfigRet.length; ++r) {
                                        if ("object" !== typeof e.accountUserConfigRet[r]) throw TypeError(".com.market.GetAccountUserConfigResp.accountUserConfigRet: object expected");
                                        t.accountUserConfigRet[r] = c.com.market.GetAccountUserConfigRet.fromObject(e.accountUserConfigRet[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.accountUserConfigRet = []), e.accountUserConfigRet && e.accountUserConfigRet.length) {
                                    r.accountUserConfigRet = [];
                                    for (var n = 0; n < e.accountUserConfigRet.length; ++n) r.accountUserConfigRet[n] = c.com.market.GetAccountUserConfigRet.toObject(e.accountUserConfigRet[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetAccountUserConfigRet = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.configType = "", e.prototype.configName = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.configType && Object.hasOwnProperty.call(e, "configType") && t.uint32(10).string(e.configType), null != e.configName && Object.hasOwnProperty.call(e, "configName") && t.uint32(18).string(e.configName), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetAccountUserConfigRet; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.configType = e.string();
                                            break;
                                        case 2:
                                            i.configName = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.configType && e.hasOwnProperty("configType") && !a.isString(e.configType) ? "configType: string expected" : null != e.configName && e.hasOwnProperty("configName") && !a.isString(e.configName) ? "configName: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetAccountUserConfigRet)) return e;
                                var t = new c.com.market.GetAccountUserConfigRet;
                                return null != e.configType && (t.configType = String(e.configType)), null != e.configName && (t.configName = String(e.configName)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.configType = "", r.configName = ""), null != e.configType && e.hasOwnProperty("configType") && (r.configType = e.configType), null != e.configName && e.hasOwnProperty("configName") && (r.configName = e.configName), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetAssetPortfolioResp = function() {
                            var e = function(e) {
                                if (this.asset = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.asset = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.asset && e.asset.length)
                                    for (var r = 0; r < e.asset.length; ++r) t.uint32(10).string(e.asset[r]);
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetAssetPortfolioResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.asset && i.asset.length || (i.asset = []), i.asset.push(e.string());
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.asset && e.hasOwnProperty("asset")) {
                                    if (!Array.isArray(e.asset)) return "asset: array expected";
                                    for (var t = 0; t < e.asset.length; ++t)
                                        if (!a.isString(e.asset[t])) return "asset: string[] expected"
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetAssetPortfolioResp)) return e;
                                var t = new c.com.market.GetAssetPortfolioResp;
                                if (e.asset) {
                                    if (!Array.isArray(e.asset)) throw TypeError(".com.market.GetAssetPortfolioResp.asset: array expected");
                                    t.asset = [];
                                    for (var r = 0; r < e.asset.length; ++r) t.asset[r] = String(e.asset[r])
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.asset = []), e.asset && e.asset.length) {
                                    r.asset = [];
                                    for (var n = 0; n < e.asset.length; ++n) r.asset[n] = e.asset[n]
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.WalletBalanceResp = function() {
                            var e = function(e) {
                                if (this.walletBalance = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.walletBalance = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.walletBalance && e.walletBalance.length)
                                    for (var r = 0; r < e.walletBalance.length; ++r) c.com.market.WalletBalance.encode(e.walletBalance[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.WalletBalanceResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.walletBalance && i.walletBalance.length || (i.walletBalance = []), i.walletBalance.push(c.com.market.WalletBalance.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.walletBalance && e.hasOwnProperty("walletBalance")) {
                                    if (!Array.isArray(e.walletBalance)) return "walletBalance: array expected";
                                    for (var t = 0; t < e.walletBalance.length; ++t) {
                                        var r = c.com.market.WalletBalance.verify(e.walletBalance[t]);
                                        if (r) return "walletBalance." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.WalletBalanceResp)) return e;
                                var t = new c.com.market.WalletBalanceResp;
                                if (e.walletBalance) {
                                    if (!Array.isArray(e.walletBalance)) throw TypeError(".com.market.WalletBalanceResp.walletBalance: array expected");
                                    t.walletBalance = [];
                                    for (var r = 0; r < e.walletBalance.length; ++r) {
                                        if ("object" !== typeof e.walletBalance[r]) throw TypeError(".com.market.WalletBalanceResp.walletBalance: object expected");
                                        t.walletBalance[r] = c.com.market.WalletBalance.fromObject(e.walletBalance[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.walletBalance = []), e.walletBalance && e.walletBalance.length) {
                                    r.walletBalance = [];
                                    for (var n = 0; n < e.walletBalance.length; ++n) r.walletBalance[n] = c.com.market.WalletBalance.toObject(e.walletBalance[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.WalletBalance = function() {
                            var e = function(e) {
                                if (this.assetBalances = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.accountType = 0, e.prototype.activate = !1, e.prototype.balance = "", e.prototype.assetBalances = a.emptyArray, e.prototype.time = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.walletName = "", e.prototype.walletIcon = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.accountType && Object.hasOwnProperty.call(e, "accountType") && t.uint32(8).int32(e.accountType), null != e.activate && Object.hasOwnProperty.call(e, "activate") && t.uint32(16).bool(e.activate), null != e.balance && Object.hasOwnProperty.call(e, "balance") && t.uint32(26).string(e.balance), null != e.assetBalances && e.assetBalances.length)
                                    for (var r = 0; r < e.assetBalances.length; ++r) c.com.market.AssetBalance.encode(e.assetBalances[r], t.uint32(34).fork()).ldelim();
                                return null != e.time && Object.hasOwnProperty.call(e, "time") && t.uint32(40).int64(e.time), null != e.walletName && Object.hasOwnProperty.call(e, "walletName") && t.uint32(50).string(e.walletName), null != e.walletIcon && Object.hasOwnProperty.call(e, "walletIcon") && t.uint32(58).string(e.walletIcon), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.WalletBalance; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.accountType = e.int32();
                                            break;
                                        case 2:
                                            i.activate = e.bool();
                                            break;
                                        case 3:
                                            i.balance = e.string();
                                            break;
                                        case 4:
                                            i.assetBalances && i.assetBalances.length || (i.assetBalances = []), i.assetBalances.push(c.com.market.AssetBalance.decode(e, e.uint32()));
                                            break;
                                        case 5:
                                            i.time = e.int64();
                                            break;
                                        case 6:
                                            i.walletName = e.string();
                                            break;
                                        case 7:
                                            i.walletIcon = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.accountType && e.hasOwnProperty("accountType")) switch (e.accountType) {
                                    default: return "accountType: enum value expected";
                                    case 0:
                                            case 1:
                                            case 2:
                                            case 3:
                                            case 4:
                                            case 5:
                                            case 6:
                                            case 7:
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 11:
                                            case 12:
                                            case 13:
                                            case 14:
                                }
                                if (null != e.activate && e.hasOwnProperty("activate") && "boolean" !== typeof e.activate) return "activate: boolean expected";
                                if (null != e.balance && e.hasOwnProperty("balance") && !a.isString(e.balance)) return "balance: string expected";
                                if (null != e.assetBalances && e.hasOwnProperty("assetBalances")) {
                                    if (!Array.isArray(e.assetBalances)) return "assetBalances: array expected";
                                    for (var t = 0; t < e.assetBalances.length; ++t) {
                                        var r = c.com.market.AssetBalance.verify(e.assetBalances[t]);
                                        if (r) return "assetBalances." + r
                                    }
                                }
                                return null == e.time || !e.hasOwnProperty("time") || a.isInteger(e.time) || e.time && a.isInteger(e.time.low) && a.isInteger(e.time.high) ? null != e.walletName && e.hasOwnProperty("walletName") && !a.isString(e.walletName) ? "walletName: string expected" : null != e.walletIcon && e.hasOwnProperty("walletIcon") && !a.isString(e.walletIcon) ? "walletIcon: string expected" : null : "time: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.WalletBalance)) return e;
                                var t = new c.com.market.WalletBalance;
                                switch (e.accountType) {
                                    case "MAIN":
                                    case 0:
                                        t.accountType = 0;
                                        break;
                                    case "MARGIN":
                                    case 1:
                                        t.accountType = 1;
                                        break;
                                    case "FIAT":
                                    case 2:
                                        t.accountType = 2;
                                        break;
                                    case "ISOLATED_MARGIN":
                                    case 3:
                                        t.accountType = 3;
                                        break;
                                    case "MINING":
                                    case 4:
                                        t.accountType = 4;
                                        break;
                                    case "FUTURE":
                                    case 5:
                                        t.accountType = 5;
                                        break;
                                    case "DELIVERY":
                                    case 6:
                                        t.accountType = 6;
                                        break;
                                    case "SAVING":
                                    case 7:
                                        t.accountType = 7;
                                        break;
                                    case "CARD":
                                    case 8:
                                        t.accountType = 8;
                                        break;
                                    case "SWAP":
                                    case 9:
                                        t.accountType = 9;
                                        break;
                                    case "TOPTION":
                                    case 10:
                                        t.accountType = 10;
                                        break;
                                    case "STOCK":
                                    case 11:
                                        t.accountType = 11;
                                        break;
                                    case "STRATEGY":
                                    case 12:
                                        t.accountType = 12;
                                        break;
                                    case "COPY_TRADE":
                                    case 13:
                                        t.accountType = 13;
                                        break;
                                    case "LOAN":
                                    case 14:
                                        t.accountType = 14
                                }
                                if (null != e.activate && (t.activate = Boolean(e.activate)), null != e.balance && (t.balance = String(e.balance)), e.assetBalances) {
                                    if (!Array.isArray(e.assetBalances)) throw TypeError(".com.market.WalletBalance.assetBalances: array expected");
                                    t.assetBalances = [];
                                    for (var r = 0; r < e.assetBalances.length; ++r) {
                                        if ("object" !== typeof e.assetBalances[r]) throw TypeError(".com.market.WalletBalance.assetBalances: object expected");
                                        t.assetBalances[r] = c.com.market.AssetBalance.fromObject(e.assetBalances[r])
                                    }
                                }
                                return null != e.time && (a.Long ? (t.time = a.Long.fromValue(e.time)).unsigned = !1 : "string" === typeof e.time ? t.time = parseInt(e.time, 10) : "number" === typeof e.time ? t.time = e.time : "object" === typeof e.time && (t.time = new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), null != e.walletName && (t.walletName = String(e.walletName)), null != e.walletIcon && (t.walletIcon = String(e.walletIcon)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.assetBalances = []), t.defaults) {
                                    if (r.accountType = t.enums === String ? "MAIN" : 0, r.activate = !1, r.balance = "", a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.time = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.time = t.longs === String ? "0" : 0;
                                    r.walletName = "", r.walletIcon = ""
                                }
                                if (null != e.accountType && e.hasOwnProperty("accountType") && (r.accountType = t.enums === String ? c.com.market.AccountType[e.accountType] : e.accountType), null != e.activate && e.hasOwnProperty("activate") && (r.activate = e.activate), null != e.balance && e.hasOwnProperty("balance") && (r.balance = e.balance), e.assetBalances && e.assetBalances.length) {
                                    r.assetBalances = [];
                                    for (var i = 0; i < e.assetBalances.length; ++i) r.assetBalances[i] = c.com.market.AssetBalance.toObject(e.assetBalances[i], t)
                                }
                                return null != e.time && e.hasOwnProperty("time") && ("number" === typeof e.time ? r.time = t.longs === String ? String(e.time) : e.time : r.time = t.longs === String ? a.Long.prototype.toString.call(e.time) : t.longs === Number ? new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), null != e.walletName && e.hasOwnProperty("walletName") && (r.walletName = e.walletName), null != e.walletIcon && e.hasOwnProperty("walletIcon") && (r.walletIcon = e.walletIcon), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.AssetBalance = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.asset = "", e.prototype.assetName = "", e.prototype.free = "0", e.prototype.locked = "0", e.prototype.freeze = "0", e.prototype.withdrawing = "0", e.prototype.logoUrl = "", e.prototype.transferBtc = "0", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.asset && Object.hasOwnProperty.call(e, "asset") && t.uint32(10).string(e.asset), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.free && Object.hasOwnProperty.call(e, "free") && t.uint32(26).string(e.free), null != e.locked && Object.hasOwnProperty.call(e, "locked") && t.uint32(34).string(e.locked), null != e.freeze && Object.hasOwnProperty.call(e, "freeze") && t.uint32(42).string(e.freeze), null != e.withdrawing && Object.hasOwnProperty.call(e, "withdrawing") && t.uint32(50).string(e.withdrawing), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(58).string(e.logoUrl), null != e.transferBtc && Object.hasOwnProperty.call(e, "transferBtc") && t.uint32(66).string(e.transferBtc), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.AssetBalance; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.asset = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.free = e.string();
                                            break;
                                        case 4:
                                            i.locked = e.string();
                                            break;
                                        case 5:
                                            i.freeze = e.string();
                                            break;
                                        case 6:
                                            i.withdrawing = e.string();
                                            break;
                                        case 7:
                                            i.logoUrl = e.string();
                                            break;
                                        case 8:
                                            i.transferBtc = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.asset && e.hasOwnProperty("asset") && !a.isString(e.asset) ? "asset: string expected" : null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : null != e.free && e.hasOwnProperty("free") && !a.isString(e.free) ? "free: string expected" : null != e.locked && e.hasOwnProperty("locked") && !a.isString(e.locked) ? "locked: string expected" : null != e.freeze && e.hasOwnProperty("freeze") && !a.isString(e.freeze) ? "freeze: string expected" : null != e.withdrawing && e.hasOwnProperty("withdrawing") && !a.isString(e.withdrawing) ? "withdrawing: string expected" : null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl) ? "logoUrl: string expected" : null != e.transferBtc && e.hasOwnProperty("transferBtc") && !a.isString(e.transferBtc) ? "transferBtc: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.AssetBalance)) return e;
                                var t = new c.com.market.AssetBalance;
                                return null != e.asset && (t.asset = String(e.asset)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.free && (t.free = String(e.free)), null != e.locked && (t.locked = String(e.locked)), null != e.freeze && (t.freeze = String(e.freeze)), null != e.withdrawing && (t.withdrawing = String(e.withdrawing)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.transferBtc && (t.transferBtc = String(e.transferBtc)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.asset = "", r.assetName = "", r.free = "0", r.locked = "0", r.freeze = "0", r.withdrawing = "0", r.logoUrl = "", r.transferBtc = "0"), null != e.asset && e.hasOwnProperty("asset") && (r.asset = e.asset), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.free && e.hasOwnProperty("free") && (r.free = e.free), null != e.locked && e.hasOwnProperty("locked") && (r.locked = e.locked), null != e.freeze && e.hasOwnProperty("freeze") && (r.freeze = e.freeze), null != e.withdrawing && e.hasOwnProperty("withdrawing") && (r.withdrawing = e.withdrawing), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.transferBtc && e.hasOwnProperty("transferBtc") && (r.transferBtc = e.transferBtc), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetBuyAndSellSelectorResp = function() {
                            var e = function(e) {
                                if (this.buySelectors = [], this.sellSelectors = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.buySelectors = a.emptyArray, e.prototype.sellSelectors = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.buySelectors && e.buySelectors.length)
                                    for (var r = 0; r < e.buySelectors.length; ++r) c.com.market.SortSelector.encode(e.buySelectors[r], t.uint32(10).fork()).ldelim();
                                if (null != e.sellSelectors && e.sellSelectors.length)
                                    for (var n = 0; n < e.sellSelectors.length; ++n) c.com.market.SortSelector.encode(e.sellSelectors[n], t.uint32(18).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetBuyAndSellSelectorResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.buySelectors && i.buySelectors.length || (i.buySelectors = []), i.buySelectors.push(c.com.market.SortSelector.decode(e, e.uint32()));
                                            break;
                                        case 2:
                                            i.sellSelectors && i.sellSelectors.length || (i.sellSelectors = []), i.sellSelectors.push(c.com.market.SortSelector.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.buySelectors && e.hasOwnProperty("buySelectors")) {
                                    if (!Array.isArray(e.buySelectors)) return "buySelectors: array expected";
                                    for (var t = 0; t < e.buySelectors.length; ++t) {
                                        var r = c.com.market.SortSelector.verify(e.buySelectors[t]);
                                        if (r) return "buySelectors." + r
                                    }
                                }
                                if (null != e.sellSelectors && e.hasOwnProperty("sellSelectors")) {
                                    if (!Array.isArray(e.sellSelectors)) return "sellSelectors: array expected";
                                    for (var n = 0; n < e.sellSelectors.length; ++n) {
                                        var i = c.com.market.SortSelector.verify(e.sellSelectors[n]);
                                        if (i) return "sellSelectors." + i
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetBuyAndSellSelectorResp)) return e;
                                var t = new c.com.market.GetBuyAndSellSelectorResp;
                                if (e.buySelectors) {
                                    if (!Array.isArray(e.buySelectors)) throw TypeError(".com.market.GetBuyAndSellSelectorResp.buySelectors: array expected");
                                    t.buySelectors = [];
                                    for (var r = 0; r < e.buySelectors.length; ++r) {
                                        if ("object" !== typeof e.buySelectors[r]) throw TypeError(".com.market.GetBuyAndSellSelectorResp.buySelectors: object expected");
                                        t.buySelectors[r] = c.com.market.SortSelector.fromObject(e.buySelectors[r])
                                    }
                                }
                                if (e.sellSelectors) {
                                    if (!Array.isArray(e.sellSelectors)) throw TypeError(".com.market.GetBuyAndSellSelectorResp.sellSelectors: array expected");
                                    t.sellSelectors = [];
                                    for (var i = 0; i < e.sellSelectors.length; ++i) {
                                        if ("object" !== typeof e.sellSelectors[i]) throw TypeError(".com.market.GetBuyAndSellSelectorResp.sellSelectors: object expected");
                                        t.sellSelectors[i] = c.com.market.SortSelector.fromObject(e.sellSelectors[i])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.buySelectors = [], r.sellSelectors = []), e.buySelectors && e.buySelectors.length) {
                                    r.buySelectors = [];
                                    for (var n = 0; n < e.buySelectors.length; ++n) r.buySelectors[n] = c.com.market.SortSelector.toObject(e.buySelectors[n], t)
                                }
                                if (e.sellSelectors && e.sellSelectors.length) {
                                    r.sellSelectors = [];
                                    for (var i = 0; i < e.sellSelectors.length; ++i) r.sellSelectors[i] = c.com.market.SortSelector.toObject(e.sellSelectors[i], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.SortSelector = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.checkoutCountrySupport = !1, e.prototype.expireTime = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), null != e.checkoutCountrySupport && Object.hasOwnProperty.call(e, "checkoutCountrySupport") && t.uint32(40).bool(e.checkoutCountrySupport), t.uint32(48).int32(e.expireTime), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.SortSelector; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.checkoutCountrySupport = e.bool();
                                            break;
                                        case 6:
                                            i.expireTime = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("expireTime")) throw a.ProtocolError("missing required 'expireTime'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.assetCode) ? null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl) ? "logoUrl: string expected" : null != e.size && e.hasOwnProperty("size") && !a.isString(e.size) ? "size: string expected" : null != e.checkoutCountrySupport && e.hasOwnProperty("checkoutCountrySupport") && "boolean" !== typeof e.checkoutCountrySupport ? "checkoutCountrySupport: boolean expected" : a.isInteger(e.expireTime) ? null : "expireTime: integer expected" : "assetCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.SortSelector)) return e;
                                var t = new c.com.market.SortSelector;
                                return null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.checkoutCountrySupport && (t.checkoutCountrySupport = Boolean(e.checkoutCountrySupport)), null != e.expireTime && (t.expireTime = 0 | e.expireTime), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.checkoutCountrySupport = !1, r.expireTime = 0), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.checkoutCountrySupport && e.hasOwnProperty("checkoutCountrySupport") && (r.checkoutCountrySupport = e.checkoutCountrySupport), null != e.expireTime && e.hasOwnProperty("expireTime") && (r.expireTime = e.expireTime), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetBuyAndSellSubSelectorResp = function() {
                            var e = function(e) {
                                if (this.subSelectors = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.subSelectors = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.subSelectors && e.subSelectors.length)
                                    for (var r = 0; r < e.subSelectors.length; ++r) c.com.market.SortSubSelector.encode(e.subSelectors[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.GetBuyAndSellSubSelectorResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.subSelectors && i.subSelectors.length || (i.subSelectors = []), i.subSelectors.push(c.com.market.SortSubSelector.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.subSelectors && e.hasOwnProperty("subSelectors")) {
                                    if (!Array.isArray(e.subSelectors)) return "subSelectors: array expected";
                                    for (var t = 0; t < e.subSelectors.length; ++t) {
                                        var r = c.com.market.SortSubSelector.verify(e.subSelectors[t]);
                                        if (r) return "subSelectors." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.GetBuyAndSellSubSelectorResp)) return e;
                                var t = new c.com.market.GetBuyAndSellSubSelectorResp;
                                if (e.subSelectors) {
                                    if (!Array.isArray(e.subSelectors)) throw TypeError(".com.market.GetBuyAndSellSubSelectorResp.subSelectors: array expected");
                                    t.subSelectors = [];
                                    for (var r = 0; r < e.subSelectors.length; ++r) {
                                        if ("object" !== typeof e.subSelectors[r]) throw TypeError(".com.market.GetBuyAndSellSubSelectorResp.subSelectors: object expected");
                                        t.subSelectors[r] = c.com.market.SortSubSelector.fromObject(e.subSelectors[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.subSelectors = []), e.subSelectors && e.subSelectors.length) {
                                    r.subSelectors = [];
                                    for (var n = 0; n < e.subSelectors.length; ++n) r.subSelectors[n] = c.com.market.SortSubSelector.toObject(e.subSelectors[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.SortSubSelector = function() {
                            var e = function(e) {
                                if (this.supportPayments = [], this.otherChannels = [], this.otherChannelDetails = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.checkoutCountrySupport = !1, e.prototype.expireTime = 0, e.prototype.supportPayments = a.emptyArray, e.prototype.otherChannels = a.emptyArray, e.prototype.otherChannelDetails = a.emptyArray, e.prototype.cryptoCurrencyPerTimeMinLimit = "", e.prototype.cryptoCurrencyPerTimeMaxLimit = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), null != e.checkoutCountrySupport && Object.hasOwnProperty.call(e, "checkoutCountrySupport") && t.uint32(40).bool(e.checkoutCountrySupport), t.uint32(48).int32(e.expireTime), null != e.supportPayments && e.supportPayments.length)
                                    for (var r = 0; r < e.supportPayments.length; ++r) c.com.market.SupportPayment.encode(e.supportPayments[r], t.uint32(58).fork()).ldelim();
                                if (null != e.otherChannels && e.otherChannels.length)
                                    for (var n = 0; n < e.otherChannels.length; ++n) t.uint32(66).string(e.otherChannels[n]);
                                if (null != e.otherChannelDetails && e.otherChannelDetails.length)
                                    for (var i = 0; i < e.otherChannelDetails.length; ++i) c.com.market.ChannelDetails.encode(e.otherChannelDetails[i], t.uint32(74).fork()).ldelim();
                                return null != e.cryptoCurrencyPerTimeMinLimit && Object.hasOwnProperty.call(e, "cryptoCurrencyPerTimeMinLimit") && t.uint32(82).string(e.cryptoCurrencyPerTimeMinLimit), null != e.cryptoCurrencyPerTimeMaxLimit && Object.hasOwnProperty.call(e, "cryptoCurrencyPerTimeMaxLimit") && t.uint32(90).string(e.cryptoCurrencyPerTimeMaxLimit), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.SortSubSelector; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.checkoutCountrySupport = e.bool();
                                            break;
                                        case 6:
                                            i.expireTime = e.int32();
                                            break;
                                        case 7:
                                            i.supportPayments && i.supportPayments.length || (i.supportPayments = []), i.supportPayments.push(c.com.market.SupportPayment.decode(e, e.uint32()));
                                            break;
                                        case 8:
                                            i.otherChannels && i.otherChannels.length || (i.otherChannels = []), i.otherChannels.push(e.string());
                                            break;
                                        case 9:
                                            i.otherChannelDetails && i.otherChannelDetails.length || (i.otherChannelDetails = []), i.otherChannelDetails.push(c.com.market.ChannelDetails.decode(e, e.uint32()));
                                            break;
                                        case 10:
                                            i.cryptoCurrencyPerTimeMinLimit = e.string();
                                            break;
                                        case 11:
                                            i.cryptoCurrencyPerTimeMaxLimit = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("expireTime")) throw a.ProtocolError("missing required 'expireTime'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isString(e.assetCode)) return "assetCode: string expected";
                                if (null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName)) return "assetName: string expected";
                                if (null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl)) return "logoUrl: string expected";
                                if (null != e.size && e.hasOwnProperty("size") && !a.isString(e.size)) return "size: string expected";
                                if (null != e.checkoutCountrySupport && e.hasOwnProperty("checkoutCountrySupport") && "boolean" !== typeof e.checkoutCountrySupport) return "checkoutCountrySupport: boolean expected";
                                if (!a.isInteger(e.expireTime)) return "expireTime: integer expected";
                                if (null != e.supportPayments && e.hasOwnProperty("supportPayments")) {
                                    if (!Array.isArray(e.supportPayments)) return "supportPayments: array expected";
                                    for (var t = 0; t < e.supportPayments.length; ++t) {
                                        var r = c.com.market.SupportPayment.verify(e.supportPayments[t]);
                                        if (r) return "supportPayments." + r
                                    }
                                }
                                if (null != e.otherChannels && e.hasOwnProperty("otherChannels")) {
                                    if (!Array.isArray(e.otherChannels)) return "otherChannels: array expected";
                                    for (var n = 0; n < e.otherChannels.length; ++n)
                                        if (!a.isString(e.otherChannels[n])) return "otherChannels: string[] expected"
                                }
                                if (null != e.otherChannelDetails && e.hasOwnProperty("otherChannelDetails")) {
                                    if (!Array.isArray(e.otherChannelDetails)) return "otherChannelDetails: array expected";
                                    for (var i = 0; i < e.otherChannelDetails.length; ++i) {
                                        var o = c.com.market.ChannelDetails.verify(e.otherChannelDetails[i]);
                                        if (o) return "otherChannelDetails." + o
                                    }
                                }
                                return null != e.cryptoCurrencyPerTimeMinLimit && e.hasOwnProperty("cryptoCurrencyPerTimeMinLimit") && !a.isString(e.cryptoCurrencyPerTimeMinLimit) ? "cryptoCurrencyPerTimeMinLimit: string expected" : null != e.cryptoCurrencyPerTimeMaxLimit && e.hasOwnProperty("cryptoCurrencyPerTimeMaxLimit") && !a.isString(e.cryptoCurrencyPerTimeMaxLimit) ? "cryptoCurrencyPerTimeMaxLimit: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.SortSubSelector)) return e;
                                var t = new c.com.market.SortSubSelector;
                                if (null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.checkoutCountrySupport && (t.checkoutCountrySupport = Boolean(e.checkoutCountrySupport)), null != e.expireTime && (t.expireTime = 0 | e.expireTime), e.supportPayments) {
                                    if (!Array.isArray(e.supportPayments)) throw TypeError(".com.market.SortSubSelector.supportPayments: array expected");
                                    t.supportPayments = [];
                                    for (var r = 0; r < e.supportPayments.length; ++r) {
                                        if ("object" !== typeof e.supportPayments[r]) throw TypeError(".com.market.SortSubSelector.supportPayments: object expected");
                                        t.supportPayments[r] = c.com.market.SupportPayment.fromObject(e.supportPayments[r])
                                    }
                                }
                                if (e.otherChannels) {
                                    if (!Array.isArray(e.otherChannels)) throw TypeError(".com.market.SortSubSelector.otherChannels: array expected");
                                    t.otherChannels = [];
                                    for (var i = 0; i < e.otherChannels.length; ++i) t.otherChannels[i] = String(e.otherChannels[i])
                                }
                                if (e.otherChannelDetails) {
                                    if (!Array.isArray(e.otherChannelDetails)) throw TypeError(".com.market.SortSubSelector.otherChannelDetails: array expected");
                                    t.otherChannelDetails = [];
                                    for (var o = 0; o < e.otherChannelDetails.length; ++o) {
                                        if ("object" !== typeof e.otherChannelDetails[o]) throw TypeError(".com.market.SortSubSelector.otherChannelDetails: object expected");
                                        t.otherChannelDetails[o] = c.com.market.ChannelDetails.fromObject(e.otherChannelDetails[o])
                                    }
                                }
                                return null != e.cryptoCurrencyPerTimeMinLimit && (t.cryptoCurrencyPerTimeMinLimit = String(e.cryptoCurrencyPerTimeMinLimit)), null != e.cryptoCurrencyPerTimeMaxLimit && (t.cryptoCurrencyPerTimeMaxLimit = String(e.cryptoCurrencyPerTimeMaxLimit)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.supportPayments = [], r.otherChannels = [], r.otherChannelDetails = []), t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.checkoutCountrySupport = !1, r.expireTime = 0, r.cryptoCurrencyPerTimeMinLimit = "", r.cryptoCurrencyPerTimeMaxLimit = ""), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.checkoutCountrySupport && e.hasOwnProperty("checkoutCountrySupport") && (r.checkoutCountrySupport = e.checkoutCountrySupport), null != e.expireTime && e.hasOwnProperty("expireTime") && (r.expireTime = e.expireTime), e.supportPayments && e.supportPayments.length) {
                                    r.supportPayments = [];
                                    for (var n = 0; n < e.supportPayments.length; ++n) r.supportPayments[n] = c.com.market.SupportPayment.toObject(e.supportPayments[n], t)
                                }
                                if (e.otherChannels && e.otherChannels.length) {
                                    r.otherChannels = [];
                                    for (var i = 0; i < e.otherChannels.length; ++i) r.otherChannels[i] = e.otherChannels[i]
                                }
                                if (e.otherChannelDetails && e.otherChannelDetails.length) {
                                    r.otherChannelDetails = [];
                                    for (var o = 0; o < e.otherChannelDetails.length; ++o) r.otherChannelDetails[o] = c.com.market.ChannelDetails.toObject(e.otherChannelDetails[o], t)
                                }
                                return null != e.cryptoCurrencyPerTimeMinLimit && e.hasOwnProperty("cryptoCurrencyPerTimeMinLimit") && (r.cryptoCurrencyPerTimeMinLimit = e.cryptoCurrencyPerTimeMinLimit), null != e.cryptoCurrencyPerTimeMaxLimit && e.hasOwnProperty("cryptoCurrencyPerTimeMaxLimit") && (r.cryptoCurrencyPerTimeMaxLimit = e.cryptoCurrencyPerTimeMaxLimit), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.SupportPayment = function() {
                            var e = function(e) {
                                if (this.subSupportPayments = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.channelCode = "", e.prototype.channelName = "", e.prototype.perTimeMinLimit = "", e.prototype.perTimeMaxLimit = "", e.prototype.dailyMaxLimit = "", e.prototype.exchangeRate = "", e.prototype.canUseForSymbol = !1, e.prototype.order = 0, e.prototype.subSupportPayments = a.emptyArray, e.prototype.isTest = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), t.uint32(10).string(e.channelCode), null != e.channelName && Object.hasOwnProperty.call(e, "channelName") && t.uint32(18).string(e.channelName), null != e.perTimeMinLimit && Object.hasOwnProperty.call(e, "perTimeMinLimit") && t.uint32(26).string(e.perTimeMinLimit), null != e.perTimeMaxLimit && Object.hasOwnProperty.call(e, "perTimeMaxLimit") && t.uint32(34).string(e.perTimeMaxLimit), null != e.dailyMaxLimit && Object.hasOwnProperty.call(e, "dailyMaxLimit") && t.uint32(42).string(e.dailyMaxLimit), null != e.exchangeRate && Object.hasOwnProperty.call(e, "exchangeRate") && t.uint32(50).string(e.exchangeRate), null != e.canUseForSymbol && Object.hasOwnProperty.call(e, "canUseForSymbol") && t.uint32(56).bool(e.canUseForSymbol), null != e.order && Object.hasOwnProperty.call(e, "order") && t.uint32(64).int32(e.order), null != e.subSupportPayments && e.subSupportPayments.length)
                                    for (var r = 0; r < e.subSupportPayments.length; ++r) c.com.market.SupportPayment.encode(e.subSupportPayments[r], t.uint32(74).fork()).ldelim();
                                return null != e.isTest && Object.hasOwnProperty.call(e, "isTest") && t.uint32(80).bool(e.isTest), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.SupportPayment; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.channelCode = e.string();
                                            break;
                                        case 2:
                                            i.channelName = e.string();
                                            break;
                                        case 3:
                                            i.perTimeMinLimit = e.string();
                                            break;
                                        case 4:
                                            i.perTimeMaxLimit = e.string();
                                            break;
                                        case 5:
                                            i.dailyMaxLimit = e.string();
                                            break;
                                        case 6:
                                            i.exchangeRate = e.string();
                                            break;
                                        case 7:
                                            i.canUseForSymbol = e.bool();
                                            break;
                                        case 8:
                                            i.order = e.int32();
                                            break;
                                        case 9:
                                            i.subSupportPayments && i.subSupportPayments.length || (i.subSupportPayments = []), i.subSupportPayments.push(c.com.market.SupportPayment.decode(e, e.uint32()));
                                            break;
                                        case 10:
                                            i.isTest = e.bool();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("channelCode")) throw a.ProtocolError("missing required 'channelCode'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isString(e.channelCode)) return "channelCode: string expected";
                                if (null != e.channelName && e.hasOwnProperty("channelName") && !a.isString(e.channelName)) return "channelName: string expected";
                                if (null != e.perTimeMinLimit && e.hasOwnProperty("perTimeMinLimit") && !a.isString(e.perTimeMinLimit)) return "perTimeMinLimit: string expected";
                                if (null != e.perTimeMaxLimit && e.hasOwnProperty("perTimeMaxLimit") && !a.isString(e.perTimeMaxLimit)) return "perTimeMaxLimit: string expected";
                                if (null != e.dailyMaxLimit && e.hasOwnProperty("dailyMaxLimit") && !a.isString(e.dailyMaxLimit)) return "dailyMaxLimit: string expected";
                                if (null != e.exchangeRate && e.hasOwnProperty("exchangeRate") && !a.isString(e.exchangeRate)) return "exchangeRate: string expected";
                                if (null != e.canUseForSymbol && e.hasOwnProperty("canUseForSymbol") && "boolean" !== typeof e.canUseForSymbol) return "canUseForSymbol: boolean expected";
                                if (null != e.order && e.hasOwnProperty("order") && !a.isInteger(e.order)) return "order: integer expected";
                                if (null != e.subSupportPayments && e.hasOwnProperty("subSupportPayments")) {
                                    if (!Array.isArray(e.subSupportPayments)) return "subSupportPayments: array expected";
                                    for (var t = 0; t < e.subSupportPayments.length; ++t) {
                                        var r = c.com.market.SupportPayment.verify(e.subSupportPayments[t]);
                                        if (r) return "subSupportPayments." + r
                                    }
                                }
                                return null != e.isTest && e.hasOwnProperty("isTest") && "boolean" !== typeof e.isTest ? "isTest: boolean expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.SupportPayment)) return e;
                                var t = new c.com.market.SupportPayment;
                                if (null != e.channelCode && (t.channelCode = String(e.channelCode)), null != e.channelName && (t.channelName = String(e.channelName)), null != e.perTimeMinLimit && (t.perTimeMinLimit = String(e.perTimeMinLimit)), null != e.perTimeMaxLimit && (t.perTimeMaxLimit = String(e.perTimeMaxLimit)), null != e.dailyMaxLimit && (t.dailyMaxLimit = String(e.dailyMaxLimit)), null != e.exchangeRate && (t.exchangeRate = String(e.exchangeRate)), null != e.canUseForSymbol && (t.canUseForSymbol = Boolean(e.canUseForSymbol)), null != e.order && (t.order = 0 | e.order), e.subSupportPayments) {
                                    if (!Array.isArray(e.subSupportPayments)) throw TypeError(".com.market.SupportPayment.subSupportPayments: array expected");
                                    t.subSupportPayments = [];
                                    for (var r = 0; r < e.subSupportPayments.length; ++r) {
                                        if ("object" !== typeof e.subSupportPayments[r]) throw TypeError(".com.market.SupportPayment.subSupportPayments: object expected");
                                        t.subSupportPayments[r] = c.com.market.SupportPayment.fromObject(e.subSupportPayments[r])
                                    }
                                }
                                return null != e.isTest && (t.isTest = Boolean(e.isTest)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.subSupportPayments = []), t.defaults && (r.channelCode = "", r.channelName = "", r.perTimeMinLimit = "", r.perTimeMaxLimit = "", r.dailyMaxLimit = "", r.exchangeRate = "", r.canUseForSymbol = !1, r.order = 0, r.isTest = !1), null != e.channelCode && e.hasOwnProperty("channelCode") && (r.channelCode = e.channelCode), null != e.channelName && e.hasOwnProperty("channelName") && (r.channelName = e.channelName), null != e.perTimeMinLimit && e.hasOwnProperty("perTimeMinLimit") && (r.perTimeMinLimit = e.perTimeMinLimit), null != e.perTimeMaxLimit && e.hasOwnProperty("perTimeMaxLimit") && (r.perTimeMaxLimit = e.perTimeMaxLimit), null != e.dailyMaxLimit && e.hasOwnProperty("dailyMaxLimit") && (r.dailyMaxLimit = e.dailyMaxLimit), null != e.exchangeRate && e.hasOwnProperty("exchangeRate") && (r.exchangeRate = e.exchangeRate), null != e.canUseForSymbol && e.hasOwnProperty("canUseForSymbol") && (r.canUseForSymbol = e.canUseForSymbol), null != e.order && e.hasOwnProperty("order") && (r.order = e.order), e.subSupportPayments && e.subSupportPayments.length) {
                                    r.subSupportPayments = [];
                                    for (var n = 0; n < e.subSupportPayments.length; ++n) r.subSupportPayments[n] = c.com.market.SupportPayment.toObject(e.subSupportPayments[n], t)
                                }
                                return null != e.isTest && e.hasOwnProperty("isTest") && (r.isTest = e.isTest), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.ChannelDetails = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.name = "", e.prototype.icon = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.name), null != e.icon && Object.hasOwnProperty.call(e, "icon") && t.uint32(18).string(e.icon), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.ChannelDetails; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.name = e.string();
                                            break;
                                        case 2:
                                            i.icon = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("name")) throw a.ProtocolError("missing required 'name'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.name) ? null != e.icon && e.hasOwnProperty("icon") && !a.isString(e.icon) ? "icon: string expected" : null : "name: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.ChannelDetails)) return e;
                                var t = new c.com.market.ChannelDetails;
                                return null != e.name && (t.name = String(e.name)), null != e.icon && (t.icon = String(e.icon)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.name = "", r.icon = ""), null != e.name && e.hasOwnProperty("name") && (r.name = e.name), null != e.icon && e.hasOwnProperty("icon") && (r.icon = e.icon), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.FaceSdkVerifyResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.title = "", e.prototype.content = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(10).string(e.title), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(18).string(e.content), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.FaceSdkVerifyResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.title = e.string();
                                            break;
                                        case 2:
                                            i.content = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.title && e.hasOwnProperty("title") && !a.isString(e.title) ? "title: string expected" : null != e.content && e.hasOwnProperty("content") && !a.isString(e.content) ? "content: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.FaceSdkVerifyResp)) return e;
                                var t = new c.com.market.FaceSdkVerifyResp;
                                return null != e.title && (t.title = String(e.title)), null != e.content && (t.content = String(e.content)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.title = "", r.content = ""), null != e.title && e.hasOwnProperty("title") && (r.title = e.title), null != e.content && e.hasOwnProperty("content") && (r.content = e.content), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignQueryCryptoListResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.checkoutCountrySupport = !1, e.prototype.expireTime = 0, e.prototype.convertedAssetCode = "", e.prototype.targetTransaction = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), null != e.checkoutCountrySupport && Object.hasOwnProperty.call(e, "checkoutCountrySupport") && t.uint32(40).bool(e.checkoutCountrySupport), t.uint32(48).int32(e.expireTime), null != e.convertedAssetCode && Object.hasOwnProperty.call(e, "convertedAssetCode") && t.uint32(58).string(e.convertedAssetCode), null != e.targetTransaction && Object.hasOwnProperty.call(e, "targetTransaction") && t.uint32(66).string(e.targetTransaction), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignQueryCryptoListResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.checkoutCountrySupport = e.bool();
                                            break;
                                        case 6:
                                            i.expireTime = e.int32();
                                            break;
                                        case 7:
                                            i.convertedAssetCode = e.string();
                                            break;
                                        case 8:
                                            i.targetTransaction = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("expireTime")) throw a.ProtocolError("missing required 'expireTime'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.assetCode) ? null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl) ? "logoUrl: string expected" : null != e.size && e.hasOwnProperty("size") && !a.isString(e.size) ? "size: string expected" : null != e.checkoutCountrySupport && e.hasOwnProperty("checkoutCountrySupport") && "boolean" !== typeof e.checkoutCountrySupport ? "checkoutCountrySupport: boolean expected" : a.isInteger(e.expireTime) ? null != e.convertedAssetCode && e.hasOwnProperty("convertedAssetCode") && !a.isString(e.convertedAssetCode) ? "convertedAssetCode: string expected" : null != e.targetTransaction && e.hasOwnProperty("targetTransaction") && !a.isString(e.targetTransaction) ? "targetTransaction: string expected" : null : "expireTime: integer expected" : "assetCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignQueryCryptoListResp)) return e;
                                var t = new c.com.market.BuyRedesignQueryCryptoListResp;
                                return null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.checkoutCountrySupport && (t.checkoutCountrySupport = Boolean(e.checkoutCountrySupport)), null != e.expireTime && (t.expireTime = 0 | e.expireTime), null != e.convertedAssetCode && (t.convertedAssetCode = String(e.convertedAssetCode)), null != e.targetTransaction && (t.targetTransaction = String(e.targetTransaction)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.checkoutCountrySupport = !1, r.expireTime = 0, r.convertedAssetCode = "", r.targetTransaction = ""), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.checkoutCountrySupport && e.hasOwnProperty("checkoutCountrySupport") && (r.checkoutCountrySupport = e.checkoutCountrySupport), null != e.expireTime && e.hasOwnProperty("expireTime") && (r.expireTime = e.expireTime), null != e.convertedAssetCode && e.hasOwnProperty("convertedAssetCode") && (r.convertedAssetCode = e.convertedAssetCode), null != e.targetTransaction && e.hasOwnProperty("targetTransaction") && (r.targetTransaction = e.targetTransaction), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignQueryFiatListResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.subSelectors = null, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), c.com.market.BuyRedesignSortSubSelector.encode(e.subSelectors, t.uint32(10).fork()).ldelim(), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignQueryFiatListResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.subSelectors = c.com.market.BuyRedesignSortSubSelector.decode(e, e.uint32());
                                    else e.skipType(7 & s)
                                }
                                if (!i.hasOwnProperty("subSelectors")) throw a.ProtocolError("missing required 'subSelectors'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                var t = c.com.market.BuyRedesignSortSubSelector.verify(e.subSelectors);
                                return t ? "subSelectors." + t : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignQueryFiatListResp)) return e;
                                var t = new c.com.market.BuyRedesignQueryFiatListResp;
                                if (null != e.subSelectors) {
                                    if ("object" !== typeof e.subSelectors) throw TypeError(".com.market.BuyRedesignQueryFiatListResp.subSelectors: object expected");
                                    t.subSelectors = c.com.market.BuyRedesignSortSubSelector.fromObject(e.subSelectors)
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.subSelectors = null), null != e.subSelectors && e.hasOwnProperty("subSelectors") && (r.subSelectors = c.com.market.BuyRedesignSortSubSelector.toObject(e.subSelectors, t)), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignSortSubSelector = function() {
                            var e = function(e) {
                                if (this.fiatList = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.crypto = null, e.prototype.fiatList = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), c.com.market.BuyRedesignCrypto.encode(e.crypto, t.uint32(10).fork()).ldelim(), null != e.fiatList && e.fiatList.length)
                                    for (var r = 0; r < e.fiatList.length; ++r) c.com.market.BuyRedesignAppFiatResp.encode(e.fiatList[r], t.uint32(18).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignSortSubSelector; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.crypto = c.com.market.BuyRedesignCrypto.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            i.fiatList && i.fiatList.length || (i.fiatList = []), i.fiatList.push(c.com.market.BuyRedesignAppFiatResp.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("crypto")) throw a.ProtocolError("missing required 'crypto'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                var t = c.com.market.BuyRedesignCrypto.verify(e.crypto);
                                if (t) return "crypto." + t;
                                if (null != e.fiatList && e.hasOwnProperty("fiatList")) {
                                    if (!Array.isArray(e.fiatList)) return "fiatList: array expected";
                                    for (var r = 0; r < e.fiatList.length; ++r) {
                                        var n = c.com.market.BuyRedesignAppFiatResp.verify(e.fiatList[r]);
                                        if (n) return "fiatList." + n
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignSortSubSelector)) return e;
                                var t = new c.com.market.BuyRedesignSortSubSelector;
                                if (null != e.crypto) {
                                    if ("object" !== typeof e.crypto) throw TypeError(".com.market.BuyRedesignSortSubSelector.crypto: object expected");
                                    t.crypto = c.com.market.BuyRedesignCrypto.fromObject(e.crypto)
                                }
                                if (e.fiatList) {
                                    if (!Array.isArray(e.fiatList)) throw TypeError(".com.market.BuyRedesignSortSubSelector.fiatList: array expected");
                                    t.fiatList = [];
                                    for (var r = 0; r < e.fiatList.length; ++r) {
                                        if ("object" !== typeof e.fiatList[r]) throw TypeError(".com.market.BuyRedesignSortSubSelector.fiatList: object expected");
                                        t.fiatList[r] = c.com.market.BuyRedesignAppFiatResp.fromObject(e.fiatList[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.fiatList = []), t.defaults && (r.crypto = null), null != e.crypto && e.hasOwnProperty("crypto") && (r.crypto = c.com.market.BuyRedesignCrypto.toObject(e.crypto, t)), e.fiatList && e.fiatList.length) {
                                    r.fiatList = [];
                                    for (var n = 0; n < e.fiatList.length; ++n) r.fiatList[n] = c.com.market.BuyRedesignAppFiatResp.toObject(e.fiatList[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignCrypto = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.expireTime = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), t.uint32(40).int32(e.expireTime), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignCrypto; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.expireTime = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("expireTime")) throw a.ProtocolError("missing required 'expireTime'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.assetCode) ? null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName) ? "assetName: string expected" : null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl) ? "logoUrl: string expected" : null != e.size && e.hasOwnProperty("size") && !a.isString(e.size) ? "size: string expected" : a.isInteger(e.expireTime) ? null : "expireTime: integer expected" : "assetCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignCrypto)) return e;
                                var t = new c.com.market.BuyRedesignCrypto;
                                return null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.expireTime && (t.expireTime = 0 | e.expireTime), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.expireTime = 0), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.expireTime && e.hasOwnProperty("expireTime") && (r.expireTime = e.expireTime), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignAppFiatResp = function() {
                            var e = function(e) {
                                if (this.supportPaymentRespList = [], this.recurringChannels = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.assetCode = "", e.prototype.assetName = "", e.prototype.logoUrl = "", e.prototype.size = "", e.prototype.expireTime = 0, e.prototype.cryptoCurrencyPerTimeMinLimit = "", e.prototype.cryptoCurrencyPerTimeMaxLimit = "", e.prototype.supportPaymentRespList = a.emptyArray, e.prototype.fiatOneTimePerTimeMinLimit = "", e.prototype.fiatOneTimePerTimeMaxLimit = "", e.prototype.fiatRecurringPerTimeMinLimit = "", e.prototype.fiatRecurringPerTimeMaxLimit = "", e.prototype.recurringChannels = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), t.uint32(10).string(e.assetCode), null != e.assetName && Object.hasOwnProperty.call(e, "assetName") && t.uint32(18).string(e.assetName), null != e.logoUrl && Object.hasOwnProperty.call(e, "logoUrl") && t.uint32(26).string(e.logoUrl), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(34).string(e.size), t.uint32(40).int32(e.expireTime), t.uint32(50).string(e.cryptoCurrencyPerTimeMinLimit), t.uint32(58).string(e.cryptoCurrencyPerTimeMaxLimit), null != e.supportPaymentRespList && e.supportPaymentRespList.length)
                                    for (var r = 0; r < e.supportPaymentRespList.length; ++r) c.com.market.BuyRedesignSupportPayment.encode(e.supportPaymentRespList[r], t.uint32(66).fork()).ldelim();
                                if (null != e.fiatOneTimePerTimeMinLimit && Object.hasOwnProperty.call(e, "fiatOneTimePerTimeMinLimit") && t.uint32(74).string(e.fiatOneTimePerTimeMinLimit), null != e.fiatOneTimePerTimeMaxLimit && Object.hasOwnProperty.call(e, "fiatOneTimePerTimeMaxLimit") && t.uint32(82).string(e.fiatOneTimePerTimeMaxLimit), null != e.fiatRecurringPerTimeMinLimit && Object.hasOwnProperty.call(e, "fiatRecurringPerTimeMinLimit") && t.uint32(90).string(e.fiatRecurringPerTimeMinLimit), null != e.fiatRecurringPerTimeMaxLimit && Object.hasOwnProperty.call(e, "fiatRecurringPerTimeMaxLimit") && t.uint32(98).string(e.fiatRecurringPerTimeMaxLimit), null != e.recurringChannels && e.recurringChannels.length)
                                    for (var n = 0; n < e.recurringChannels.length; ++n) t.uint32(106).string(e.recurringChannels[n]);
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignAppFiatResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.assetCode = e.string();
                                            break;
                                        case 2:
                                            i.assetName = e.string();
                                            break;
                                        case 3:
                                            i.logoUrl = e.string();
                                            break;
                                        case 4:
                                            i.size = e.string();
                                            break;
                                        case 5:
                                            i.expireTime = e.int32();
                                            break;
                                        case 6:
                                            i.cryptoCurrencyPerTimeMinLimit = e.string();
                                            break;
                                        case 7:
                                            i.cryptoCurrencyPerTimeMaxLimit = e.string();
                                            break;
                                        case 8:
                                            i.supportPaymentRespList && i.supportPaymentRespList.length || (i.supportPaymentRespList = []), i.supportPaymentRespList.push(c.com.market.BuyRedesignSupportPayment.decode(e, e.uint32()));
                                            break;
                                        case 9:
                                            i.fiatOneTimePerTimeMinLimit = e.string();
                                            break;
                                        case 10:
                                            i.fiatOneTimePerTimeMaxLimit = e.string();
                                            break;
                                        case 11:
                                            i.fiatRecurringPerTimeMinLimit = e.string();
                                            break;
                                        case 12:
                                            i.fiatRecurringPerTimeMaxLimit = e.string();
                                            break;
                                        case 13:
                                            i.recurringChannels && i.recurringChannels.length || (i.recurringChannels = []), i.recurringChannels.push(e.string());
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("assetCode")) throw a.ProtocolError("missing required 'assetCode'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("expireTime")) throw a.ProtocolError("missing required 'expireTime'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("cryptoCurrencyPerTimeMinLimit")) throw a.ProtocolError("missing required 'cryptoCurrencyPerTimeMinLimit'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("cryptoCurrencyPerTimeMaxLimit")) throw a.ProtocolError("missing required 'cryptoCurrencyPerTimeMaxLimit'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isString(e.assetCode)) return "assetCode: string expected";
                                if (null != e.assetName && e.hasOwnProperty("assetName") && !a.isString(e.assetName)) return "assetName: string expected";
                                if (null != e.logoUrl && e.hasOwnProperty("logoUrl") && !a.isString(e.logoUrl)) return "logoUrl: string expected";
                                if (null != e.size && e.hasOwnProperty("size") && !a.isString(e.size)) return "size: string expected";
                                if (!a.isInteger(e.expireTime)) return "expireTime: integer expected";
                                if (!a.isString(e.cryptoCurrencyPerTimeMinLimit)) return "cryptoCurrencyPerTimeMinLimit: string expected";
                                if (!a.isString(e.cryptoCurrencyPerTimeMaxLimit)) return "cryptoCurrencyPerTimeMaxLimit: string expected";
                                if (null != e.supportPaymentRespList && e.hasOwnProperty("supportPaymentRespList")) {
                                    if (!Array.isArray(e.supportPaymentRespList)) return "supportPaymentRespList: array expected";
                                    for (var t = 0; t < e.supportPaymentRespList.length; ++t) {
                                        var r = c.com.market.BuyRedesignSupportPayment.verify(e.supportPaymentRespList[t]);
                                        if (r) return "supportPaymentRespList." + r
                                    }
                                }
                                if (null != e.fiatOneTimePerTimeMinLimit && e.hasOwnProperty("fiatOneTimePerTimeMinLimit") && !a.isString(e.fiatOneTimePerTimeMinLimit)) return "fiatOneTimePerTimeMinLimit: string expected";
                                if (null != e.fiatOneTimePerTimeMaxLimit && e.hasOwnProperty("fiatOneTimePerTimeMaxLimit") && !a.isString(e.fiatOneTimePerTimeMaxLimit)) return "fiatOneTimePerTimeMaxLimit: string expected";
                                if (null != e.fiatRecurringPerTimeMinLimit && e.hasOwnProperty("fiatRecurringPerTimeMinLimit") && !a.isString(e.fiatRecurringPerTimeMinLimit)) return "fiatRecurringPerTimeMinLimit: string expected";
                                if (null != e.fiatRecurringPerTimeMaxLimit && e.hasOwnProperty("fiatRecurringPerTimeMaxLimit") && !a.isString(e.fiatRecurringPerTimeMaxLimit)) return "fiatRecurringPerTimeMaxLimit: string expected";
                                if (null != e.recurringChannels && e.hasOwnProperty("recurringChannels")) {
                                    if (!Array.isArray(e.recurringChannels)) return "recurringChannels: array expected";
                                    for (var n = 0; n < e.recurringChannels.length; ++n)
                                        if (!a.isString(e.recurringChannels[n])) return "recurringChannels: string[] expected"
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignAppFiatResp)) return e;
                                var t = new c.com.market.BuyRedesignAppFiatResp;
                                if (null != e.assetCode && (t.assetCode = String(e.assetCode)), null != e.assetName && (t.assetName = String(e.assetName)), null != e.logoUrl && (t.logoUrl = String(e.logoUrl)), null != e.size && (t.size = String(e.size)), null != e.expireTime && (t.expireTime = 0 | e.expireTime), null != e.cryptoCurrencyPerTimeMinLimit && (t.cryptoCurrencyPerTimeMinLimit = String(e.cryptoCurrencyPerTimeMinLimit)), null != e.cryptoCurrencyPerTimeMaxLimit && (t.cryptoCurrencyPerTimeMaxLimit = String(e.cryptoCurrencyPerTimeMaxLimit)), e.supportPaymentRespList) {
                                    if (!Array.isArray(e.supportPaymentRespList)) throw TypeError(".com.market.BuyRedesignAppFiatResp.supportPaymentRespList: array expected");
                                    t.supportPaymentRespList = [];
                                    for (var r = 0; r < e.supportPaymentRespList.length; ++r) {
                                        if ("object" !== typeof e.supportPaymentRespList[r]) throw TypeError(".com.market.BuyRedesignAppFiatResp.supportPaymentRespList: object expected");
                                        t.supportPaymentRespList[r] = c.com.market.BuyRedesignSupportPayment.fromObject(e.supportPaymentRespList[r])
                                    }
                                }
                                if (null != e.fiatOneTimePerTimeMinLimit && (t.fiatOneTimePerTimeMinLimit = String(e.fiatOneTimePerTimeMinLimit)), null != e.fiatOneTimePerTimeMaxLimit && (t.fiatOneTimePerTimeMaxLimit = String(e.fiatOneTimePerTimeMaxLimit)), null != e.fiatRecurringPerTimeMinLimit && (t.fiatRecurringPerTimeMinLimit = String(e.fiatRecurringPerTimeMinLimit)), null != e.fiatRecurringPerTimeMaxLimit && (t.fiatRecurringPerTimeMaxLimit = String(e.fiatRecurringPerTimeMaxLimit)), e.recurringChannels) {
                                    if (!Array.isArray(e.recurringChannels)) throw TypeError(".com.market.BuyRedesignAppFiatResp.recurringChannels: array expected");
                                    t.recurringChannels = [];
                                    for (var i = 0; i < e.recurringChannels.length; ++i) t.recurringChannels[i] = String(e.recurringChannels[i])
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.supportPaymentRespList = [], r.recurringChannels = []), t.defaults && (r.assetCode = "", r.assetName = "", r.logoUrl = "", r.size = "", r.expireTime = 0, r.cryptoCurrencyPerTimeMinLimit = "", r.cryptoCurrencyPerTimeMaxLimit = "", r.fiatOneTimePerTimeMinLimit = "", r.fiatOneTimePerTimeMaxLimit = "", r.fiatRecurringPerTimeMinLimit = "", r.fiatRecurringPerTimeMaxLimit = ""), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), null != e.assetName && e.hasOwnProperty("assetName") && (r.assetName = e.assetName), null != e.logoUrl && e.hasOwnProperty("logoUrl") && (r.logoUrl = e.logoUrl), null != e.size && e.hasOwnProperty("size") && (r.size = e.size), null != e.expireTime && e.hasOwnProperty("expireTime") && (r.expireTime = e.expireTime), null != e.cryptoCurrencyPerTimeMinLimit && e.hasOwnProperty("cryptoCurrencyPerTimeMinLimit") && (r.cryptoCurrencyPerTimeMinLimit = e.cryptoCurrencyPerTimeMinLimit), null != e.cryptoCurrencyPerTimeMaxLimit && e.hasOwnProperty("cryptoCurrencyPerTimeMaxLimit") && (r.cryptoCurrencyPerTimeMaxLimit = e.cryptoCurrencyPerTimeMaxLimit), e.supportPaymentRespList && e.supportPaymentRespList.length) {
                                    r.supportPaymentRespList = [];
                                    for (var n = 0; n < e.supportPaymentRespList.length; ++n) r.supportPaymentRespList[n] = c.com.market.BuyRedesignSupportPayment.toObject(e.supportPaymentRespList[n], t)
                                }
                                if (null != e.fiatOneTimePerTimeMinLimit && e.hasOwnProperty("fiatOneTimePerTimeMinLimit") && (r.fiatOneTimePerTimeMinLimit = e.fiatOneTimePerTimeMinLimit), null != e.fiatOneTimePerTimeMaxLimit && e.hasOwnProperty("fiatOneTimePerTimeMaxLimit") && (r.fiatOneTimePerTimeMaxLimit = e.fiatOneTimePerTimeMaxLimit), null != e.fiatRecurringPerTimeMinLimit && e.hasOwnProperty("fiatRecurringPerTimeMinLimit") && (r.fiatRecurringPerTimeMinLimit = e.fiatRecurringPerTimeMinLimit), null != e.fiatRecurringPerTimeMaxLimit && e.hasOwnProperty("fiatRecurringPerTimeMaxLimit") && (r.fiatRecurringPerTimeMaxLimit = e.fiatRecurringPerTimeMaxLimit), e.recurringChannels && e.recurringChannels.length) {
                                    r.recurringChannels = [];
                                    for (var i = 0; i < e.recurringChannels.length; ++i) r.recurringChannels[i] = e.recurringChannels[i]
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignSupportPayment = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.channelCode = "", e.prototype.channelName = "", e.prototype.perTimeMinLimit = "", e.prototype.perTimeMaxLimit = "", e.prototype.dailyMaxLimit = "", e.prototype.fiatRecurringPerTimeMinLimit = "", e.prototype.fiatRecurringPerTimeMaxLimit = "", e.prototype.fiatRecurringDailyMaxLimit = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.channelCode), null != e.channelName && Object.hasOwnProperty.call(e, "channelName") && t.uint32(18).string(e.channelName), null != e.perTimeMinLimit && Object.hasOwnProperty.call(e, "perTimeMinLimit") && t.uint32(26).string(e.perTimeMinLimit), null != e.perTimeMaxLimit && Object.hasOwnProperty.call(e, "perTimeMaxLimit") && t.uint32(34).string(e.perTimeMaxLimit), null != e.dailyMaxLimit && Object.hasOwnProperty.call(e, "dailyMaxLimit") && t.uint32(42).string(e.dailyMaxLimit), null != e.fiatRecurringPerTimeMinLimit && Object.hasOwnProperty.call(e, "fiatRecurringPerTimeMinLimit") && t.uint32(50).string(e.fiatRecurringPerTimeMinLimit), null != e.fiatRecurringPerTimeMaxLimit && Object.hasOwnProperty.call(e, "fiatRecurringPerTimeMaxLimit") && t.uint32(58).string(e.fiatRecurringPerTimeMaxLimit), null != e.fiatRecurringDailyMaxLimit && Object.hasOwnProperty.call(e, "fiatRecurringDailyMaxLimit") && t.uint32(66).string(e.fiatRecurringDailyMaxLimit), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignSupportPayment; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.channelCode = e.string();
                                            break;
                                        case 2:
                                            i.channelName = e.string();
                                            break;
                                        case 3:
                                            i.perTimeMinLimit = e.string();
                                            break;
                                        case 4:
                                            i.perTimeMaxLimit = e.string();
                                            break;
                                        case 5:
                                            i.dailyMaxLimit = e.string();
                                            break;
                                        case 6:
                                            i.fiatRecurringPerTimeMinLimit = e.string();
                                            break;
                                        case 7:
                                            i.fiatRecurringPerTimeMaxLimit = e.string();
                                            break;
                                        case 8:
                                            i.fiatRecurringDailyMaxLimit = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("channelCode")) throw a.ProtocolError("missing required 'channelCode'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.channelCode) ? null != e.channelName && e.hasOwnProperty("channelName") && !a.isString(e.channelName) ? "channelName: string expected" : null != e.perTimeMinLimit && e.hasOwnProperty("perTimeMinLimit") && !a.isString(e.perTimeMinLimit) ? "perTimeMinLimit: string expected" : null != e.perTimeMaxLimit && e.hasOwnProperty("perTimeMaxLimit") && !a.isString(e.perTimeMaxLimit) ? "perTimeMaxLimit: string expected" : null != e.dailyMaxLimit && e.hasOwnProperty("dailyMaxLimit") && !a.isString(e.dailyMaxLimit) ? "dailyMaxLimit: string expected" : null != e.fiatRecurringPerTimeMinLimit && e.hasOwnProperty("fiatRecurringPerTimeMinLimit") && !a.isString(e.fiatRecurringPerTimeMinLimit) ? "fiatRecurringPerTimeMinLimit: string expected" : null != e.fiatRecurringPerTimeMaxLimit && e.hasOwnProperty("fiatRecurringPerTimeMaxLimit") && !a.isString(e.fiatRecurringPerTimeMaxLimit) ? "fiatRecurringPerTimeMaxLimit: string expected" : null != e.fiatRecurringDailyMaxLimit && e.hasOwnProperty("fiatRecurringDailyMaxLimit") && !a.isString(e.fiatRecurringDailyMaxLimit) ? "fiatRecurringDailyMaxLimit: string expected" : null : "channelCode: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignSupportPayment)) return e;
                                var t = new c.com.market.BuyRedesignSupportPayment;
                                return null != e.channelCode && (t.channelCode = String(e.channelCode)), null != e.channelName && (t.channelName = String(e.channelName)), null != e.perTimeMinLimit && (t.perTimeMinLimit = String(e.perTimeMinLimit)), null != e.perTimeMaxLimit && (t.perTimeMaxLimit = String(e.perTimeMaxLimit)), null != e.dailyMaxLimit && (t.dailyMaxLimit = String(e.dailyMaxLimit)), null != e.fiatRecurringPerTimeMinLimit && (t.fiatRecurringPerTimeMinLimit = String(e.fiatRecurringPerTimeMinLimit)), null != e.fiatRecurringPerTimeMaxLimit && (t.fiatRecurringPerTimeMaxLimit = String(e.fiatRecurringPerTimeMaxLimit)), null != e.fiatRecurringDailyMaxLimit && (t.fiatRecurringDailyMaxLimit = String(e.fiatRecurringDailyMaxLimit)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.channelCode = "", r.channelName = "", r.perTimeMinLimit = "", r.perTimeMaxLimit = "", r.dailyMaxLimit = "", r.fiatRecurringPerTimeMinLimit = "", r.fiatRecurringPerTimeMaxLimit = "", r.fiatRecurringDailyMaxLimit = ""), null != e.channelCode && e.hasOwnProperty("channelCode") && (r.channelCode = e.channelCode), null != e.channelName && e.hasOwnProperty("channelName") && (r.channelName = e.channelName), null != e.perTimeMinLimit && e.hasOwnProperty("perTimeMinLimit") && (r.perTimeMinLimit = e.perTimeMinLimit), null != e.perTimeMaxLimit && e.hasOwnProperty("perTimeMaxLimit") && (r.perTimeMaxLimit = e.perTimeMaxLimit), null != e.dailyMaxLimit && e.hasOwnProperty("dailyMaxLimit") && (r.dailyMaxLimit = e.dailyMaxLimit), null != e.fiatRecurringPerTimeMinLimit && e.hasOwnProperty("fiatRecurringPerTimeMinLimit") && (r.fiatRecurringPerTimeMinLimit = e.fiatRecurringPerTimeMinLimit), null != e.fiatRecurringPerTimeMaxLimit && e.hasOwnProperty("fiatRecurringPerTimeMaxLimit") && (r.fiatRecurringPerTimeMaxLimit = e.fiatRecurringPerTimeMaxLimit), null != e.fiatRecurringDailyMaxLimit && e.hasOwnProperty("fiatRecurringDailyMaxLimit") && (r.fiatRecurringDailyMaxLimit = e.fiatRecurringDailyMaxLimit), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.BuyRedesignQueryCryptoResp = function() {
                            var e = function(e) {
                                if (this.buyRedesignQueryCryptoListResp = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.buyRedesignQueryCryptoListResp = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.buyRedesignQueryCryptoListResp && e.buyRedesignQueryCryptoListResp.length)
                                    for (var r = 0; r < e.buyRedesignQueryCryptoListResp.length; ++r) c.com.market.BuyRedesignQueryCryptoListResp.encode(e.buyRedesignQueryCryptoListResp[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.BuyRedesignQueryCryptoResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.buyRedesignQueryCryptoListResp && i.buyRedesignQueryCryptoListResp.length || (i.buyRedesignQueryCryptoListResp = []), i.buyRedesignQueryCryptoListResp.push(c.com.market.BuyRedesignQueryCryptoListResp.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.buyRedesignQueryCryptoListResp && e.hasOwnProperty("buyRedesignQueryCryptoListResp")) {
                                    if (!Array.isArray(e.buyRedesignQueryCryptoListResp)) return "buyRedesignQueryCryptoListResp: array expected";
                                    for (var t = 0; t < e.buyRedesignQueryCryptoListResp.length; ++t) {
                                        var r = c.com.market.BuyRedesignQueryCryptoListResp.verify(e.buyRedesignQueryCryptoListResp[t]);
                                        if (r) return "buyRedesignQueryCryptoListResp." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.BuyRedesignQueryCryptoResp)) return e;
                                var t = new c.com.market.BuyRedesignQueryCryptoResp;
                                if (e.buyRedesignQueryCryptoListResp) {
                                    if (!Array.isArray(e.buyRedesignQueryCryptoListResp)) throw TypeError(".com.market.BuyRedesignQueryCryptoResp.buyRedesignQueryCryptoListResp: array expected");
                                    t.buyRedesignQueryCryptoListResp = [];
                                    for (var r = 0; r < e.buyRedesignQueryCryptoListResp.length; ++r) {
                                        if ("object" !== typeof e.buyRedesignQueryCryptoListResp[r]) throw TypeError(".com.market.BuyRedesignQueryCryptoResp.buyRedesignQueryCryptoListResp: object expected");
                                        t.buyRedesignQueryCryptoListResp[r] = c.com.market.BuyRedesignQueryCryptoListResp.fromObject(e.buyRedesignQueryCryptoListResp[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.buyRedesignQueryCryptoListResp = []), e.buyRedesignQueryCryptoListResp && e.buyRedesignQueryCryptoListResp.length) {
                                    r.buyRedesignQueryCryptoListResp = [];
                                    for (var n = 0; n < e.buyRedesignQueryCryptoListResp.length; ++n) r.buyRedesignQueryCryptoListResp[n] = c.com.market.BuyRedesignQueryCryptoListResp.toObject(e.buyRedesignQueryCryptoListResp[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.OtcGetQuoteResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.quoteId = "", e.prototype.quotePrice = "", e.prototype.inversePrice = "", e.prototype.expireTime = 0, e.prototype.expireTimestamp = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.fromCoin = "", e.prototype.fromCoinAmount = "", e.prototype.toCoin = "", e.prototype.toCoinAmount = "", e.prototype.fromCoinAsset = "", e.prototype.message = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.quoteId && Object.hasOwnProperty.call(e, "quoteId") && t.uint32(10).string(e.quoteId), null != e.quotePrice && Object.hasOwnProperty.call(e, "quotePrice") && t.uint32(18).string(e.quotePrice), null != e.inversePrice && Object.hasOwnProperty.call(e, "inversePrice") && t.uint32(26).string(e.inversePrice), null != e.expireTime && Object.hasOwnProperty.call(e, "expireTime") && t.uint32(32).int32(e.expireTime), null != e.expireTimestamp && Object.hasOwnProperty.call(e, "expireTimestamp") && t.uint32(40).int64(e.expireTimestamp), null != e.fromCoin && Object.hasOwnProperty.call(e, "fromCoin") && t.uint32(50).string(e.fromCoin), null != e.fromCoinAmount && Object.hasOwnProperty.call(e, "fromCoinAmount") && t.uint32(58).string(e.fromCoinAmount), null != e.toCoin && Object.hasOwnProperty.call(e, "toCoin") && t.uint32(66).string(e.toCoin), null != e.toCoinAmount && Object.hasOwnProperty.call(e, "toCoinAmount") && t.uint32(74).string(e.toCoinAmount), null != e.fromCoinAsset && Object.hasOwnProperty.call(e, "fromCoinAsset") && t.uint32(82).string(e.fromCoinAsset), null != e.message && Object.hasOwnProperty.call(e, "message") && t.uint32(90).string(e.message), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.OtcGetQuoteResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.quoteId = e.string();
                                            break;
                                        case 2:
                                            i.quotePrice = e.string();
                                            break;
                                        case 3:
                                            i.inversePrice = e.string();
                                            break;
                                        case 4:
                                            i.expireTime = e.int32();
                                            break;
                                        case 5:
                                            i.expireTimestamp = e.int64();
                                            break;
                                        case 6:
                                            i.fromCoin = e.string();
                                            break;
                                        case 7:
                                            i.fromCoinAmount = e.string();
                                            break;
                                        case 8:
                                            i.toCoin = e.string();
                                            break;
                                        case 9:
                                            i.toCoinAmount = e.string();
                                            break;
                                        case 10:
                                            i.fromCoinAsset = e.string();
                                            break;
                                        case 11:
                                            i.message = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.quoteId && e.hasOwnProperty("quoteId") && !a.isString(e.quoteId) ? "quoteId: string expected" : null != e.quotePrice && e.hasOwnProperty("quotePrice") && !a.isString(e.quotePrice) ? "quotePrice: string expected" : null != e.inversePrice && e.hasOwnProperty("inversePrice") && !a.isString(e.inversePrice) ? "inversePrice: string expected" : null != e.expireTime && e.hasOwnProperty("expireTime") && !a.isInteger(e.expireTime) ? "expireTime: integer expected" : null == e.expireTimestamp || !e.hasOwnProperty("expireTimestamp") || a.isInteger(e.expireTimestamp) || e.expireTimestamp && a.isInteger(e.expireTimestamp.low) && a.isInteger(e.expireTimestamp.high) ? null != e.fromCoin && e.hasOwnProperty("fromCoin") && !a.isString(e.fromCoin) ? "fromCoin: string expected" : null != e.fromCoinAmount && e.hasOwnProperty("fromCoinAmount") && !a.isString(e.fromCoinAmount) ? "fromCoinAmount: string expected" : null != e.toCoin && e.hasOwnProperty("toCoin") && !a.isString(e.toCoin) ? "toCoin: string expected" : null != e.toCoinAmount && e.hasOwnProperty("toCoinAmount") && !a.isString(e.toCoinAmount) ? "toCoinAmount: string expected" : null != e.fromCoinAsset && e.hasOwnProperty("fromCoinAsset") && !a.isString(e.fromCoinAsset) ? "fromCoinAsset: string expected" : null != e.message && e.hasOwnProperty("message") && !a.isString(e.message) ? "message: string expected" : null : "expireTimestamp: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.OtcGetQuoteResp)) return e;
                                var t = new c.com.market.OtcGetQuoteResp;
                                return null != e.quoteId && (t.quoteId = String(e.quoteId)), null != e.quotePrice && (t.quotePrice = String(e.quotePrice)), null != e.inversePrice && (t.inversePrice = String(e.inversePrice)), null != e.expireTime && (t.expireTime = 0 | e.expireTime), null != e.expireTimestamp && (a.Long ? (t.expireTimestamp = a.Long.fromValue(e.expireTimestamp)).unsigned = !1 : "string" === typeof e.expireTimestamp ? t.expireTimestamp = parseInt(e.expireTimestamp, 10) : "number" === typeof e.expireTimestamp ? t.expireTimestamp = e.expireTimestamp : "object" === typeof e.expireTimestamp && (t.expireTimestamp = new a.LongBits(e.expireTimestamp.low >>> 0, e.expireTimestamp.high >>> 0).toNumber())), null != e.fromCoin && (t.fromCoin = String(e.fromCoin)), null != e.fromCoinAmount && (t.fromCoinAmount = String(e.fromCoinAmount)), null != e.toCoin && (t.toCoin = String(e.toCoin)), null != e.toCoinAmount && (t.toCoinAmount = String(e.toCoinAmount)), null != e.fromCoinAsset && (t.fromCoinAsset = String(e.fromCoinAsset)), null != e.message && (t.message = String(e.message)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.quoteId = "", r.quotePrice = "", r.inversePrice = "", r.expireTime = 0, a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.expireTimestamp = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.expireTimestamp = t.longs === String ? "0" : 0;
                                    r.fromCoin = "", r.fromCoinAmount = "", r.toCoin = "", r.toCoinAmount = "", r.fromCoinAsset = "", r.message = ""
                                }
                                return null != e.quoteId && e.hasOwnProperty("quoteId") && (r.quoteId = e.quoteId), null != e.quotePrice && e.hasOwnProperty("quotePrice") && (r.quotePrice = e.quotePrice), null != e.inversePrice && e.hasOwnProperty("inversePrice") && (r.inversePrice = e.inversePrice), null != e.expireTime && e.hasOwnProperty("expireTime") && (r.expireTime = e.expireTime), null != e.expireTimestamp && e.hasOwnProperty("expireTimestamp") && ("number" === typeof e.expireTimestamp ? r.expireTimestamp = t.longs === String ? String(e.expireTimestamp) : e.expireTimestamp : r.expireTimestamp = t.longs === String ? a.Long.prototype.toString.call(e.expireTimestamp) : t.longs === Number ? new a.LongBits(e.expireTimestamp.low >>> 0, e.expireTimestamp.high >>> 0).toNumber() : e.expireTimestamp), null != e.fromCoin && e.hasOwnProperty("fromCoin") && (r.fromCoin = e.fromCoin), null != e.fromCoinAmount && e.hasOwnProperty("fromCoinAmount") && (r.fromCoinAmount = e.fromCoinAmount), null != e.toCoin && e.hasOwnProperty("toCoin") && (r.toCoin = e.toCoin), null != e.toCoinAmount && e.hasOwnProperty("toCoinAmount") && (r.toCoinAmount = e.toCoinAmount), null != e.fromCoinAsset && e.hasOwnProperty("fromCoinAsset") && (r.fromCoinAsset = e.fromCoinAsset), null != e.message && e.hasOwnProperty("message") && (r.message = e.message), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.FaceRecognitionResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.msgResult = 1, e.prototype.faceRecognitionId = "", e.prototype.faceRecognitionIndex = 0, e.prototype.userId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.fvideoId = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(8).int32(e.msgResult), t.uint32(18).string(e.faceRecognitionId), t.uint32(24).int32(e.faceRecognitionIndex), t.uint32(32).int64(e.userId), t.uint32(42).string(e.fvideoId), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.FaceRecognitionResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.msgResult = e.int32();
                                            break;
                                        case 2:
                                            i.faceRecognitionId = e.string();
                                            break;
                                        case 3:
                                            i.faceRecognitionIndex = e.int32();
                                            break;
                                        case 4:
                                            i.userId = e.int64();
                                            break;
                                        case 5:
                                            i.fvideoId = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("msgResult")) throw a.ProtocolError("missing required 'msgResult'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("faceRecognitionId")) throw a.ProtocolError("missing required 'faceRecognitionId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("faceRecognitionIndex")) throw a.ProtocolError("missing required 'faceRecognitionIndex'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("userId")) throw a.ProtocolError("missing required 'userId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("fvideoId")) throw a.ProtocolError("missing required 'fvideoId'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                switch (e.msgResult) {
                                    default: return "msgResult: enum value expected";
                                    case 1:
                                            case 2:
                                }
                                return a.isString(e.faceRecognitionId) ? a.isInteger(e.faceRecognitionIndex) ? a.isInteger(e.userId) || e.userId && a.isInteger(e.userId.low) && a.isInteger(e.userId.high) ? a.isString(e.fvideoId) ? null : "fvideoId: string expected" : "userId: integer|Long expected" : "faceRecognitionIndex: integer expected" : "faceRecognitionId: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.FaceRecognitionResp)) return e;
                                var t = new c.com.market.FaceRecognitionResp;
                                switch (e.msgResult) {
                                    case "SUCCESS":
                                    case 1:
                                        t.msgResult = 1;
                                        break;
                                    case "FAILURE":
                                    case 2:
                                        t.msgResult = 2
                                }
                                return null != e.faceRecognitionId && (t.faceRecognitionId = String(e.faceRecognitionId)), null != e.faceRecognitionIndex && (t.faceRecognitionIndex = 0 | e.faceRecognitionIndex), null != e.userId && (a.Long ? (t.userId = a.Long.fromValue(e.userId)).unsigned = !1 : "string" === typeof e.userId ? t.userId = parseInt(e.userId, 10) : "number" === typeof e.userId ? t.userId = e.userId : "object" === typeof e.userId && (t.userId = new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber())), null != e.fvideoId && (t.fvideoId = String(e.fvideoId)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.msgResult = t.enums === String ? "SUCCESS" : 1, r.faceRecognitionId = "", r.faceRecognitionIndex = 0, a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.userId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.userId = t.longs === String ? "0" : 0;
                                    r.fvideoId = ""
                                }
                                return null != e.msgResult && e.hasOwnProperty("msgResult") && (r.msgResult = t.enums === String ? c.com.market.MsgResult[e.msgResult] : e.msgResult), null != e.faceRecognitionId && e.hasOwnProperty("faceRecognitionId") && (r.faceRecognitionId = e.faceRecognitionId), null != e.faceRecognitionIndex && e.hasOwnProperty("faceRecognitionIndex") && (r.faceRecognitionIndex = e.faceRecognitionIndex), null != e.userId && e.hasOwnProperty("userId") && ("number" === typeof e.userId ? r.userId = t.longs === String ? String(e.userId) : e.userId : r.userId = t.longs === String ? a.Long.prototype.toString.call(e.userId) : t.longs === Number ? new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber() : e.userId), null != e.fvideoId && e.hasOwnProperty("fvideoId") && (r.fvideoId = e.fvideoId), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.MsgResult = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[1] = "SUCCESS"] = 1, t[e[2] = "FAILURE"] = 2, t
                        }(), e.AnnouncementBroadcastMsg = function() {
                            var e = function(e) {
                                if (this.announcementDevices = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.announcement = null, e.prototype.announcementDevices = a.emptyArray, e.prototype.announcementLanguage = null, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), c.com.market.Announcement.encode(e.announcement, t.uint32(10).fork()).ldelim(), null != e.announcementDevices && e.announcementDevices.length)
                                    for (var r = 0; r < e.announcementDevices.length; ++r) c.com.market.AnnouncementDevice.encode(e.announcementDevices[r], t.uint32(18).fork()).ldelim();
                                return c.com.market.AnnouncementLanguage.encode(e.announcementLanguage, t.uint32(26).fork()).ldelim(), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.AnnouncementBroadcastMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.announcement = c.com.market.Announcement.decode(e, e.uint32());
                                            break;
                                        case 2:
                                            i.announcementDevices && i.announcementDevices.length || (i.announcementDevices = []), i.announcementDevices.push(c.com.market.AnnouncementDevice.decode(e, e.uint32()));
                                            break;
                                        case 3:
                                            i.announcementLanguage = c.com.market.AnnouncementLanguage.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("announcement")) throw a.ProtocolError("missing required 'announcement'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("announcementLanguage")) throw a.ProtocolError("missing required 'announcementLanguage'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                var t = c.com.market.Announcement.verify(e.announcement);
                                if (t) return "announcement." + t;
                                if (null != e.announcementDevices && e.hasOwnProperty("announcementDevices")) {
                                    if (!Array.isArray(e.announcementDevices)) return "announcementDevices: array expected";
                                    for (var r = 0; r < e.announcementDevices.length; ++r) {
                                        var n = c.com.market.AnnouncementDevice.verify(e.announcementDevices[r]);
                                        if (n) return "announcementDevices." + n
                                    }
                                }
                                var i = c.com.market.AnnouncementLanguage.verify(e.announcementLanguage);
                                return i ? "announcementLanguage." + i : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.AnnouncementBroadcastMsg)) return e;
                                var t = new c.com.market.AnnouncementBroadcastMsg;
                                if (null != e.announcement) {
                                    if ("object" !== typeof e.announcement) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcement: object expected");
                                    t.announcement = c.com.market.Announcement.fromObject(e.announcement)
                                }
                                if (e.announcementDevices) {
                                    if (!Array.isArray(e.announcementDevices)) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcementDevices: array expected");
                                    t.announcementDevices = [];
                                    for (var r = 0; r < e.announcementDevices.length; ++r) {
                                        if ("object" !== typeof e.announcementDevices[r]) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcementDevices: object expected");
                                        t.announcementDevices[r] = c.com.market.AnnouncementDevice.fromObject(e.announcementDevices[r])
                                    }
                                }
                                if (null != e.announcementLanguage) {
                                    if ("object" !== typeof e.announcementLanguage) throw TypeError(".com.market.AnnouncementBroadcastMsg.announcementLanguage: object expected");
                                    t.announcementLanguage = c.com.market.AnnouncementLanguage.fromObject(e.announcementLanguage)
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.announcementDevices = []), t.defaults && (r.announcement = null, r.announcementLanguage = null), null != e.announcement && e.hasOwnProperty("announcement") && (r.announcement = c.com.market.Announcement.toObject(e.announcement, t)), e.announcementDevices && e.announcementDevices.length) {
                                    r.announcementDevices = [];
                                    for (var n = 0; n < e.announcementDevices.length; ++n) r.announcementDevices[n] = c.com.market.AnnouncementDevice.toObject(e.announcementDevices[n], t)
                                }
                                return null != e.announcementLanguage && e.hasOwnProperty("announcementLanguage") && (r.announcementLanguage = c.com.market.AnnouncementLanguage.toObject(e.announcementLanguage, t)), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.AnnouncementDevice = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.announcementId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.device = "", e.prototype.business = "", e.prototype.scope = "", e.prototype.url = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(8).int64(e.announcementId), t.uint32(18).string(e.device), t.uint32(26).string(e.business), t.uint32(34).string(e.scope), t.uint32(42).string(e.url), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.AnnouncementDevice; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.announcementId = e.int64();
                                            break;
                                        case 2:
                                            i.device = e.string();
                                            break;
                                        case 3:
                                            i.business = e.string();
                                            break;
                                        case 4:
                                            i.scope = e.string();
                                            break;
                                        case 5:
                                            i.url = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("announcementId")) throw a.ProtocolError("missing required 'announcementId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("device")) throw a.ProtocolError("missing required 'device'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("business")) throw a.ProtocolError("missing required 'business'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("scope")) throw a.ProtocolError("missing required 'scope'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("url")) throw a.ProtocolError("missing required 'url'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isInteger(e.announcementId) || e.announcementId && a.isInteger(e.announcementId.low) && a.isInteger(e.announcementId.high) ? a.isString(e.device) ? a.isString(e.business) ? a.isString(e.scope) ? a.isString(e.url) ? null : "url: string expected" : "scope: string expected" : "business: string expected" : "device: string expected" : "announcementId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.AnnouncementDevice)) return e;
                                var t = new c.com.market.AnnouncementDevice;
                                return null != e.announcementId && (a.Long ? (t.announcementId = a.Long.fromValue(e.announcementId)).unsigned = !1 : "string" === typeof e.announcementId ? t.announcementId = parseInt(e.announcementId, 10) : "number" === typeof e.announcementId ? t.announcementId = e.announcementId : "object" === typeof e.announcementId && (t.announcementId = new a.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber())), null != e.device && (t.device = String(e.device)), null != e.business && (t.business = String(e.business)), null != e.scope && (t.scope = String(e.scope)), null != e.url && (t.url = String(e.url)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.announcementId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.announcementId = t.longs === String ? "0" : 0;
                                    r.device = "", r.business = "", r.scope = "", r.url = ""
                                }
                                return null != e.announcementId && e.hasOwnProperty("announcementId") && ("number" === typeof e.announcementId ? r.announcementId = t.longs === String ? String(e.announcementId) : e.announcementId : r.announcementId = t.longs === String ? a.Long.prototype.toString.call(e.announcementId) : t.longs === Number ? new a.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber() : e.announcementId), null != e.device && e.hasOwnProperty("device") && (r.device = e.device), null != e.business && e.hasOwnProperty("business") && (r.business = e.business), null != e.scope && e.hasOwnProperty("scope") && (r.scope = e.scope), null != e.url && e.hasOwnProperty("url") && (r.url = e.url), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.AnnouncementLanguage = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.announcementId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.language = "", e.prototype.title = "", e.prototype.contents = "", e.prototype.actionButton = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(8).int64(e.announcementId), t.uint32(18).string(e.language), t.uint32(26).string(e.title), t.uint32(34).string(e.contents), t.uint32(42).string(e.actionButton), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.AnnouncementLanguage; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.announcementId = e.int64();
                                            break;
                                        case 2:
                                            i.language = e.string();
                                            break;
                                        case 3:
                                            i.title = e.string();
                                            break;
                                        case 4:
                                            i.contents = e.string();
                                            break;
                                        case 5:
                                            i.actionButton = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("announcementId")) throw a.ProtocolError("missing required 'announcementId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("language")) throw a.ProtocolError("missing required 'language'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("title")) throw a.ProtocolError("missing required 'title'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("contents")) throw a.ProtocolError("missing required 'contents'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("actionButton")) throw a.ProtocolError("missing required 'actionButton'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isInteger(e.announcementId) || e.announcementId && a.isInteger(e.announcementId.low) && a.isInteger(e.announcementId.high) ? a.isString(e.language) ? a.isString(e.title) ? a.isString(e.contents) ? a.isString(e.actionButton) ? null : "actionButton: string expected" : "contents: string expected" : "title: string expected" : "language: string expected" : "announcementId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.AnnouncementLanguage)) return e;
                                var t = new c.com.market.AnnouncementLanguage;
                                return null != e.announcementId && (a.Long ? (t.announcementId = a.Long.fromValue(e.announcementId)).unsigned = !1 : "string" === typeof e.announcementId ? t.announcementId = parseInt(e.announcementId, 10) : "number" === typeof e.announcementId ? t.announcementId = e.announcementId : "object" === typeof e.announcementId && (t.announcementId = new a.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber())), null != e.language && (t.language = String(e.language)), null != e.title && (t.title = String(e.title)), null != e.contents && (t.contents = String(e.contents)), null != e.actionButton && (t.actionButton = String(e.actionButton)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.announcementId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.announcementId = t.longs === String ? "0" : 0;
                                    r.language = "", r.title = "", r.contents = "", r.actionButton = ""
                                }
                                return null != e.announcementId && e.hasOwnProperty("announcementId") && ("number" === typeof e.announcementId ? r.announcementId = t.longs === String ? String(e.announcementId) : e.announcementId : r.announcementId = t.longs === String ? a.Long.prototype.toString.call(e.announcementId) : t.longs === Number ? new a.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber() : e.announcementId), null != e.language && e.hasOwnProperty("language") && (r.language = e.language), null != e.title && e.hasOwnProperty("title") && (r.title = e.title), null != e.contents && e.hasOwnProperty("contents") && (r.contents = e.contents), null != e.actionButton && e.hasOwnProperty("actionButton") && (r.actionButton = e.actionButton), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.Announcement = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.announcementId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.description = "", e.prototype.type = "", e.prototype.status = "", e.prototype.createTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.releaseTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.hiddenTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.expiryTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.rank = 0, e.prototype.userType = "", e.prototype.userGroupId = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(8).int64(e.announcementId), t.uint32(18).string(e.description), t.uint32(26).string(e.type), t.uint32(34).string(e.status), t.uint32(40).int64(e.createTime), t.uint32(48).int64(e.releaseTime), t.uint32(56).int64(e.hiddenTime), t.uint32(64).int64(e.expiryTime), null != e.rank && Object.hasOwnProperty.call(e, "rank") && t.uint32(72).int32(e.rank), null != e.userType && Object.hasOwnProperty.call(e, "userType") && t.uint32(82).string(e.userType), null != e.userGroupId && Object.hasOwnProperty.call(e, "userGroupId") && t.uint32(90).string(e.userGroupId), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.Announcement; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.announcementId = e.int64();
                                            break;
                                        case 2:
                                            i.description = e.string();
                                            break;
                                        case 3:
                                            i.type = e.string();
                                            break;
                                        case 4:
                                            i.status = e.string();
                                            break;
                                        case 5:
                                            i.createTime = e.int64();
                                            break;
                                        case 6:
                                            i.releaseTime = e.int64();
                                            break;
                                        case 7:
                                            i.hiddenTime = e.int64();
                                            break;
                                        case 8:
                                            i.expiryTime = e.int64();
                                            break;
                                        case 9:
                                            i.rank = e.int32();
                                            break;
                                        case 10:
                                            i.userType = e.string();
                                            break;
                                        case 11:
                                            i.userGroupId = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("announcementId")) throw a.ProtocolError("missing required 'announcementId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("description")) throw a.ProtocolError("missing required 'description'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("type")) throw a.ProtocolError("missing required 'type'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("status")) throw a.ProtocolError("missing required 'status'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("createTime")) throw a.ProtocolError("missing required 'createTime'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("releaseTime")) throw a.ProtocolError("missing required 'releaseTime'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("hiddenTime")) throw a.ProtocolError("missing required 'hiddenTime'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("expiryTime")) throw a.ProtocolError("missing required 'expiryTime'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isInteger(e.announcementId) || e.announcementId && a.isInteger(e.announcementId.low) && a.isInteger(e.announcementId.high) ? a.isString(e.description) ? a.isString(e.type) ? a.isString(e.status) ? a.isInteger(e.createTime) || e.createTime && a.isInteger(e.createTime.low) && a.isInteger(e.createTime.high) ? a.isInteger(e.releaseTime) || e.releaseTime && a.isInteger(e.releaseTime.low) && a.isInteger(e.releaseTime.high) ? a.isInteger(e.hiddenTime) || e.hiddenTime && a.isInteger(e.hiddenTime.low) && a.isInteger(e.hiddenTime.high) ? a.isInteger(e.expiryTime) || e.expiryTime && a.isInteger(e.expiryTime.low) && a.isInteger(e.expiryTime.high) ? null != e.rank && e.hasOwnProperty("rank") && !a.isInteger(e.rank) ? "rank: integer expected" : null != e.userType && e.hasOwnProperty("userType") && !a.isString(e.userType) ? "userType: string expected" : null != e.userGroupId && e.hasOwnProperty("userGroupId") && !a.isString(e.userGroupId) ? "userGroupId: string expected" : null : "expiryTime: integer|Long expected" : "hiddenTime: integer|Long expected" : "releaseTime: integer|Long expected" : "createTime: integer|Long expected" : "status: string expected" : "type: string expected" : "description: string expected" : "announcementId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.Announcement)) return e;
                                var t = new c.com.market.Announcement;
                                return null != e.announcementId && (a.Long ? (t.announcementId = a.Long.fromValue(e.announcementId)).unsigned = !1 : "string" === typeof e.announcementId ? t.announcementId = parseInt(e.announcementId, 10) : "number" === typeof e.announcementId ? t.announcementId = e.announcementId : "object" === typeof e.announcementId && (t.announcementId = new a.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber())), null != e.description && (t.description = String(e.description)), null != e.type && (t.type = String(e.type)), null != e.status && (t.status = String(e.status)), null != e.createTime && (a.Long ? (t.createTime = a.Long.fromValue(e.createTime)).unsigned = !1 : "string" === typeof e.createTime ? t.createTime = parseInt(e.createTime, 10) : "number" === typeof e.createTime ? t.createTime = e.createTime : "object" === typeof e.createTime && (t.createTime = new a.LongBits(e.createTime.low >>> 0, e.createTime.high >>> 0).toNumber())), null != e.releaseTime && (a.Long ? (t.releaseTime = a.Long.fromValue(e.releaseTime)).unsigned = !1 : "string" === typeof e.releaseTime ? t.releaseTime = parseInt(e.releaseTime, 10) : "number" === typeof e.releaseTime ? t.releaseTime = e.releaseTime : "object" === typeof e.releaseTime && (t.releaseTime = new a.LongBits(e.releaseTime.low >>> 0, e.releaseTime.high >>> 0).toNumber())), null != e.hiddenTime && (a.Long ? (t.hiddenTime = a.Long.fromValue(e.hiddenTime)).unsigned = !1 : "string" === typeof e.hiddenTime ? t.hiddenTime = parseInt(e.hiddenTime, 10) : "number" === typeof e.hiddenTime ? t.hiddenTime = e.hiddenTime : "object" === typeof e.hiddenTime && (t.hiddenTime = new a.LongBits(e.hiddenTime.low >>> 0, e.hiddenTime.high >>> 0).toNumber())), null != e.expiryTime && (a.Long ? (t.expiryTime = a.Long.fromValue(e.expiryTime)).unsigned = !1 : "string" === typeof e.expiryTime ? t.expiryTime = parseInt(e.expiryTime, 10) : "number" === typeof e.expiryTime ? t.expiryTime = e.expiryTime : "object" === typeof e.expiryTime && (t.expiryTime = new a.LongBits(e.expiryTime.low >>> 0, e.expiryTime.high >>> 0).toNumber())), null != e.rank && (t.rank = 0 | e.rank), null != e.userType && (t.userType = String(e.userType)), null != e.userGroupId && (t.userGroupId = String(e.userGroupId)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.announcementId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.announcementId = t.longs === String ? "0" : 0;
                                    if (r.description = "", r.type = "", r.status = "", a.Long) {
                                        var i = new a.Long(0, 0, !1);
                                        r.createTime = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                    } else r.createTime = t.longs === String ? "0" : 0;
                                    if (a.Long) {
                                        var o = new a.Long(0, 0, !1);
                                        r.releaseTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                    } else r.releaseTime = t.longs === String ? "0" : 0;
                                    if (a.Long) {
                                        var s = new a.Long(0, 0, !1);
                                        r.hiddenTime = t.longs === String ? s.toString() : t.longs === Number ? s.toNumber() : s
                                    } else r.hiddenTime = t.longs === String ? "0" : 0;
                                    if (a.Long) {
                                        var c = new a.Long(0, 0, !1);
                                        r.expiryTime = t.longs === String ? c.toString() : t.longs === Number ? c.toNumber() : c
                                    } else r.expiryTime = t.longs === String ? "0" : 0;
                                    r.rank = 0, r.userType = "", r.userGroupId = ""
                                }
                                return null != e.announcementId && e.hasOwnProperty("announcementId") && ("number" === typeof e.announcementId ? r.announcementId = t.longs === String ? String(e.announcementId) : e.announcementId : r.announcementId = t.longs === String ? a.Long.prototype.toString.call(e.announcementId) : t.longs === Number ? new a.LongBits(e.announcementId.low >>> 0, e.announcementId.high >>> 0).toNumber() : e.announcementId), null != e.description && e.hasOwnProperty("description") && (r.description = e.description), null != e.type && e.hasOwnProperty("type") && (r.type = e.type), null != e.status && e.hasOwnProperty("status") && (r.status = e.status), null != e.createTime && e.hasOwnProperty("createTime") && ("number" === typeof e.createTime ? r.createTime = t.longs === String ? String(e.createTime) : e.createTime : r.createTime = t.longs === String ? a.Long.prototype.toString.call(e.createTime) : t.longs === Number ? new a.LongBits(e.createTime.low >>> 0, e.createTime.high >>> 0).toNumber() : e.createTime), null != e.releaseTime && e.hasOwnProperty("releaseTime") && ("number" === typeof e.releaseTime ? r.releaseTime = t.longs === String ? String(e.releaseTime) : e.releaseTime : r.releaseTime = t.longs === String ? a.Long.prototype.toString.call(e.releaseTime) : t.longs === Number ? new a.LongBits(e.releaseTime.low >>> 0, e.releaseTime.high >>> 0).toNumber() : e.releaseTime), null != e.hiddenTime && e.hasOwnProperty("hiddenTime") && ("number" === typeof e.hiddenTime ? r.hiddenTime = t.longs === String ? String(e.hiddenTime) : e.hiddenTime : r.hiddenTime = t.longs === String ? a.Long.prototype.toString.call(e.hiddenTime) : t.longs === Number ? new a.LongBits(e.hiddenTime.low >>> 0, e.hiddenTime.high >>> 0).toNumber() : e.hiddenTime), null != e.expiryTime && e.hasOwnProperty("expiryTime") && ("number" === typeof e.expiryTime ? r.expiryTime = t.longs === String ? String(e.expiryTime) : e.expiryTime : r.expiryTime = t.longs === String ? a.Long.prototype.toString.call(e.expiryTime) : t.longs === Number ? new a.LongBits(e.expiryTime.low >>> 0, e.expiryTime.high >>> 0).toNumber() : e.expiryTime), null != e.rank && e.hasOwnProperty("rank") && (r.rank = e.rank), null != e.userType && e.hasOwnProperty("userType") && (r.userType = e.userType), null != e.userGroupId && e.hasOwnProperty("userGroupId") && (r.userGroupId = e.userGroupId), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.C2cAllQuotePriceMsg = function() {
                            var e = function(e) {
                                if (this.c2cQuotePrices = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.c2cQuotePrices = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.c2cQuotePrices && e.c2cQuotePrices.length)
                                    for (var r = 0; r < e.c2cQuotePrices.length; ++r) c.com.market.C2cQuotePriceMsg.encode(e.c2cQuotePrices[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.C2cAllQuotePriceMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.c2cQuotePrices && i.c2cQuotePrices.length || (i.c2cQuotePrices = []), i.c2cQuotePrices.push(c.com.market.C2cQuotePriceMsg.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.c2cQuotePrices && e.hasOwnProperty("c2cQuotePrices")) {
                                    if (!Array.isArray(e.c2cQuotePrices)) return "c2cQuotePrices: array expected";
                                    for (var t = 0; t < e.c2cQuotePrices.length; ++t) {
                                        var r = c.com.market.C2cQuotePriceMsg.verify(e.c2cQuotePrices[t]);
                                        if (r) return "c2cQuotePrices." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.C2cAllQuotePriceMsg)) return e;
                                var t = new c.com.market.C2cAllQuotePriceMsg;
                                if (e.c2cQuotePrices) {
                                    if (!Array.isArray(e.c2cQuotePrices)) throw TypeError(".com.market.C2cAllQuotePriceMsg.c2cQuotePrices: array expected");
                                    t.c2cQuotePrices = [];
                                    for (var r = 0; r < e.c2cQuotePrices.length; ++r) {
                                        if ("object" !== typeof e.c2cQuotePrices[r]) throw TypeError(".com.market.C2cAllQuotePriceMsg.c2cQuotePrices: object expected");
                                        t.c2cQuotePrices[r] = c.com.market.C2cQuotePriceMsg.fromObject(e.c2cQuotePrices[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.c2cQuotePrices = []), e.c2cQuotePrices && e.c2cQuotePrices.length) {
                                    r.c2cQuotePrices = [];
                                    for (var n = 0; n < e.c2cQuotePrices.length; ++n) r.c2cQuotePrices[n] = c.com.market.C2cQuotePriceMsg.toObject(e.c2cQuotePrices[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.C2cQuotePriceMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.tradeType = "", e.prototype.asset = "", e.prototype.fiat = "", e.prototype.symbol = "", e.prototype.price = 0, e.prototype.updateTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.delta = 0, e.prototype.extend = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.tradeType && Object.hasOwnProperty.call(e, "tradeType") && t.uint32(10).string(e.tradeType), null != e.asset && Object.hasOwnProperty.call(e, "asset") && t.uint32(18).string(e.asset), null != e.fiat && Object.hasOwnProperty.call(e, "fiat") && t.uint32(26).string(e.fiat), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(34).string(e.symbol), null != e.price && Object.hasOwnProperty.call(e, "price") && t.uint32(41).double(e.price), null != e.updateTime && Object.hasOwnProperty.call(e, "updateTime") && t.uint32(48).int64(e.updateTime), null != e.delta && Object.hasOwnProperty.call(e, "delta") && t.uint32(57).double(e.delta), null != e.extend && Object.hasOwnProperty.call(e, "extend") && t.uint32(66).string(e.extend), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.C2cQuotePriceMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.tradeType = e.string();
                                            break;
                                        case 2:
                                            i.asset = e.string();
                                            break;
                                        case 3:
                                            i.fiat = e.string();
                                            break;
                                        case 4:
                                            i.symbol = e.string();
                                            break;
                                        case 5:
                                            i.price = e.double();
                                            break;
                                        case 6:
                                            i.updateTime = e.int64();
                                            break;
                                        case 7:
                                            i.delta = e.double();
                                            break;
                                        case 8:
                                            i.extend = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.tradeType && e.hasOwnProperty("tradeType") && !a.isString(e.tradeType) ? "tradeType: string expected" : null != e.asset && e.hasOwnProperty("asset") && !a.isString(e.asset) ? "asset: string expected" : null != e.fiat && e.hasOwnProperty("fiat") && !a.isString(e.fiat) ? "fiat: string expected" : null != e.symbol && e.hasOwnProperty("symbol") && !a.isString(e.symbol) ? "symbol: string expected" : null != e.price && e.hasOwnProperty("price") && "number" !== typeof e.price ? "price: number expected" : null == e.updateTime || !e.hasOwnProperty("updateTime") || a.isInteger(e.updateTime) || e.updateTime && a.isInteger(e.updateTime.low) && a.isInteger(e.updateTime.high) ? null != e.delta && e.hasOwnProperty("delta") && "number" !== typeof e.delta ? "delta: number expected" : null != e.extend && e.hasOwnProperty("extend") && !a.isString(e.extend) ? "extend: string expected" : null : "updateTime: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.C2cQuotePriceMsg)) return e;
                                var t = new c.com.market.C2cQuotePriceMsg;
                                return null != e.tradeType && (t.tradeType = String(e.tradeType)), null != e.asset && (t.asset = String(e.asset)), null != e.fiat && (t.fiat = String(e.fiat)), null != e.symbol && (t.symbol = String(e.symbol)), null != e.price && (t.price = Number(e.price)), null != e.updateTime && (a.Long ? (t.updateTime = a.Long.fromValue(e.updateTime)).unsigned = !1 : "string" === typeof e.updateTime ? t.updateTime = parseInt(e.updateTime, 10) : "number" === typeof e.updateTime ? t.updateTime = e.updateTime : "object" === typeof e.updateTime && (t.updateTime = new a.LongBits(e.updateTime.low >>> 0, e.updateTime.high >>> 0).toNumber())), null != e.delta && (t.delta = Number(e.delta)), null != e.extend && (t.extend = String(e.extend)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.tradeType = "", r.asset = "", r.fiat = "", r.symbol = "", r.price = 0, a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.updateTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.updateTime = t.longs === String ? "0" : 0;
                                    r.delta = 0, r.extend = ""
                                }
                                return null != e.tradeType && e.hasOwnProperty("tradeType") && (r.tradeType = e.tradeType), null != e.asset && e.hasOwnProperty("asset") && (r.asset = e.asset), null != e.fiat && e.hasOwnProperty("fiat") && (r.fiat = e.fiat), null != e.symbol && e.hasOwnProperty("symbol") && (r.symbol = e.symbol), null != e.price && e.hasOwnProperty("price") && (r.price = t.json && !isFinite(e.price) ? String(e.price) : e.price), null != e.updateTime && e.hasOwnProperty("updateTime") && ("number" === typeof e.updateTime ? r.updateTime = t.longs === String ? String(e.updateTime) : e.updateTime : r.updateTime = t.longs === String ? a.Long.prototype.toString.call(e.updateTime) : t.longs === Number ? new a.LongBits(e.updateTime.low >>> 0, e.updateTime.high >>> 0).toNumber() : e.updateTime), null != e.delta && e.hasOwnProperty("delta") && (r.delta = t.json && !isFinite(e.delta) ? String(e.delta) : e.delta), null != e.extend && e.hasOwnProperty("extend") && (r.extend = e.extend), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.C2cKlineMsg = function() {
                            var e = function(e) {
                                if (this.coinKlineMessages = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.coinKlineMessages = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.coinKlineMessages && e.coinKlineMessages.length)
                                    for (var r = 0; r < e.coinKlineMessages.length; ++r) c.com.market.C2cKlineMsg.C2cKlineMessage.encode(e.coinKlineMessages[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.C2cKlineMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.coinKlineMessages && i.coinKlineMessages.length || (i.coinKlineMessages = []), i.coinKlineMessages.push(c.com.market.C2cKlineMsg.C2cKlineMessage.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.coinKlineMessages && e.hasOwnProperty("coinKlineMessages")) {
                                    if (!Array.isArray(e.coinKlineMessages)) return "coinKlineMessages: array expected";
                                    for (var t = 0; t < e.coinKlineMessages.length; ++t) {
                                        var r = c.com.market.C2cKlineMsg.C2cKlineMessage.verify(e.coinKlineMessages[t]);
                                        if (r) return "coinKlineMessages." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.C2cKlineMsg)) return e;
                                var t = new c.com.market.C2cKlineMsg;
                                if (e.coinKlineMessages) {
                                    if (!Array.isArray(e.coinKlineMessages)) throw TypeError(".com.market.C2cKlineMsg.coinKlineMessages: array expected");
                                    t.coinKlineMessages = [];
                                    for (var r = 0; r < e.coinKlineMessages.length; ++r) {
                                        if ("object" !== typeof e.coinKlineMessages[r]) throw TypeError(".com.market.C2cKlineMsg.coinKlineMessages: object expected");
                                        t.coinKlineMessages[r] = c.com.market.C2cKlineMsg.C2cKlineMessage.fromObject(e.coinKlineMessages[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.coinKlineMessages = []), e.coinKlineMessages && e.coinKlineMessages.length) {
                                    r.coinKlineMessages = [];
                                    for (var n = 0; n < e.coinKlineMessages.length; ++n) r.coinKlineMessages[n] = c.com.market.C2cKlineMsg.C2cKlineMessage.toObject(e.coinKlineMessages[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.C2cKlineMessage = function() {
                                var e = function(e) {
                                    if (e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.symbol = "", e.prototype.open = "", e.prototype.close = "", e.prototype.high = "", e.prototype.low = "", e.prototype.openTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.closeTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    return t || (t = s.create()), t.uint32(10).string(e.symbol), null != e.open && Object.hasOwnProperty.call(e, "open") && t.uint32(18).string(e.open), null != e.close && Object.hasOwnProperty.call(e, "close") && t.uint32(26).string(e.close), null != e.high && Object.hasOwnProperty.call(e, "high") && t.uint32(34).string(e.high), null != e.low && Object.hasOwnProperty.call(e, "low") && t.uint32(42).string(e.low), null != e.openTime && Object.hasOwnProperty.call(e, "openTime") && t.uint32(48).int64(e.openTime), null != e.closeTime && Object.hasOwnProperty.call(e, "closeTime") && t.uint32(56).int64(e.closeTime), t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.C2cKlineMsg.C2cKlineMessage; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.symbol = e.string();
                                                break;
                                            case 2:
                                                i.open = e.string();
                                                break;
                                            case 3:
                                                i.close = e.string();
                                                break;
                                            case 4:
                                                i.high = e.string();
                                                break;
                                            case 5:
                                                i.low = e.string();
                                                break;
                                            case 6:
                                                i.openTime = e.int64();
                                                break;
                                            case 7:
                                                i.closeTime = e.int64();
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("symbol")) throw a.ProtocolError("missing required 'symbol'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    return "object" !== typeof e || null === e ? "object expected" : a.isString(e.symbol) ? null != e.open && e.hasOwnProperty("open") && !a.isString(e.open) ? "open: string expected" : null != e.close && e.hasOwnProperty("close") && !a.isString(e.close) ? "close: string expected" : null != e.high && e.hasOwnProperty("high") && !a.isString(e.high) ? "high: string expected" : null != e.low && e.hasOwnProperty("low") && !a.isString(e.low) ? "low: string expected" : null == e.openTime || !e.hasOwnProperty("openTime") || a.isInteger(e.openTime) || e.openTime && a.isInteger(e.openTime.low) && a.isInteger(e.openTime.high) ? null == e.closeTime || !e.hasOwnProperty("closeTime") || a.isInteger(e.closeTime) || e.closeTime && a.isInteger(e.closeTime.low) && a.isInteger(e.closeTime.high) ? null : "closeTime: integer|Long expected" : "openTime: integer|Long expected" : "symbol: string expected"
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.market.C2cKlineMsg.C2cKlineMessage)) return e;
                                    var t = new c.com.market.C2cKlineMsg.C2cKlineMessage;
                                    return null != e.symbol && (t.symbol = String(e.symbol)), null != e.open && (t.open = String(e.open)), null != e.close && (t.close = String(e.close)), null != e.high && (t.high = String(e.high)), null != e.low && (t.low = String(e.low)), null != e.openTime && (a.Long ? (t.openTime = a.Long.fromValue(e.openTime)).unsigned = !1 : "string" === typeof e.openTime ? t.openTime = parseInt(e.openTime, 10) : "number" === typeof e.openTime ? t.openTime = e.openTime : "object" === typeof e.openTime && (t.openTime = new a.LongBits(e.openTime.low >>> 0, e.openTime.high >>> 0).toNumber())), null != e.closeTime && (a.Long ? (t.closeTime = a.Long.fromValue(e.closeTime)).unsigned = !1 : "string" === typeof e.closeTime ? t.closeTime = parseInt(e.closeTime, 10) : "number" === typeof e.closeTime ? t.closeTime = e.closeTime : "object" === typeof e.closeTime && (t.closeTime = new a.LongBits(e.closeTime.low >>> 0, e.closeTime.high >>> 0).toNumber())), t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    if (t.defaults) {
                                        if (r.symbol = "", r.open = "", r.close = "", r.high = "", r.low = "", a.Long) {
                                            var n = new a.Long(0, 0, !1);
                                            r.openTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                        } else r.openTime = t.longs === String ? "0" : 0;
                                        if (a.Long) {
                                            var i = new a.Long(0, 0, !1);
                                            r.closeTime = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                        } else r.closeTime = t.longs === String ? "0" : 0
                                    }
                                    return null != e.symbol && e.hasOwnProperty("symbol") && (r.symbol = e.symbol), null != e.open && e.hasOwnProperty("open") && (r.open = e.open), null != e.close && e.hasOwnProperty("close") && (r.close = e.close), null != e.high && e.hasOwnProperty("high") && (r.high = e.high), null != e.low && e.hasOwnProperty("low") && (r.low = e.low), null != e.openTime && e.hasOwnProperty("openTime") && ("number" === typeof e.openTime ? r.openTime = t.longs === String ? String(e.openTime) : e.openTime : r.openTime = t.longs === String ? a.Long.prototype.toString.call(e.openTime) : t.longs === Number ? new a.LongBits(e.openTime.low >>> 0, e.openTime.high >>> 0).toNumber() : e.openTime), null != e.closeTime && e.hasOwnProperty("closeTime") && ("number" === typeof e.closeTime ? r.closeTime = t.longs === String ? String(e.closeTime) : e.closeTime : r.closeTime = t.longs === String ? a.Long.prototype.toString.call(e.closeTime) : t.longs === Number ? new a.LongBits(e.closeTime.low >>> 0, e.closeTime.high >>> 0).toNumber() : e.closeTime), r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e
                            }(), e
                        }(), e.CoinPriceMsg = function() {
                            var e = function(e) {
                                if (this.coinPriceMessages = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.coinPriceMessages = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.coinPriceMessages && e.coinPriceMessages.length)
                                    for (var r = 0; r < e.coinPriceMessages.length; ++r) c.com.market.CoinPriceMsg.CoinPriceMessage.encode(e.coinPriceMessages[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.CoinPriceMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.coinPriceMessages && i.coinPriceMessages.length || (i.coinPriceMessages = []), i.coinPriceMessages.push(c.com.market.CoinPriceMsg.CoinPriceMessage.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.coinPriceMessages && e.hasOwnProperty("coinPriceMessages")) {
                                    if (!Array.isArray(e.coinPriceMessages)) return "coinPriceMessages: array expected";
                                    for (var t = 0; t < e.coinPriceMessages.length; ++t) {
                                        var r = c.com.market.CoinPriceMsg.CoinPriceMessage.verify(e.coinPriceMessages[t]);
                                        if (r) return "coinPriceMessages." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.CoinPriceMsg)) return e;
                                var t = new c.com.market.CoinPriceMsg;
                                if (e.coinPriceMessages) {
                                    if (!Array.isArray(e.coinPriceMessages)) throw TypeError(".com.market.CoinPriceMsg.coinPriceMessages: array expected");
                                    t.coinPriceMessages = [];
                                    for (var r = 0; r < e.coinPriceMessages.length; ++r) {
                                        if ("object" !== typeof e.coinPriceMessages[r]) throw TypeError(".com.market.CoinPriceMsg.coinPriceMessages: object expected");
                                        t.coinPriceMessages[r] = c.com.market.CoinPriceMsg.CoinPriceMessage.fromObject(e.coinPriceMessages[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.coinPriceMessages = []), e.coinPriceMessages && e.coinPriceMessages.length) {
                                    r.coinPriceMessages = [];
                                    for (var n = 0; n < e.coinPriceMessages.length; ++n) r.coinPriceMessages[n] = c.com.market.CoinPriceMsg.CoinPriceMessage.toObject(e.coinPriceMessages[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.CoinPriceMessage = function() {
                                var e = function(e) {
                                    if (this.coinPrices = [], e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.fiatCurrency = "", e.prototype.coinPrices = a.emptyArray, e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    if (t || (t = s.create()), t.uint32(10).string(e.fiatCurrency), null != e.coinPrices && e.coinPrices.length)
                                        for (var r = 0; r < e.coinPrices.length; ++r) c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice.encode(e.coinPrices[r], t.uint32(18).fork()).ldelim();
                                    return t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.CoinPriceMsg.CoinPriceMessage; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.fiatCurrency = e.string();
                                                break;
                                            case 2:
                                                i.coinPrices && i.coinPrices.length || (i.coinPrices = []), i.coinPrices.push(c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice.decode(e, e.uint32()));
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("fiatCurrency")) throw a.ProtocolError("missing required 'fiatCurrency'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    if ("object" !== typeof e || null === e) return "object expected";
                                    if (!a.isString(e.fiatCurrency)) return "fiatCurrency: string expected";
                                    if (null != e.coinPrices && e.hasOwnProperty("coinPrices")) {
                                        if (!Array.isArray(e.coinPrices)) return "coinPrices: array expected";
                                        for (var t = 0; t < e.coinPrices.length; ++t) {
                                            var r = c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice.verify(e.coinPrices[t]);
                                            if (r) return "coinPrices." + r
                                        }
                                    }
                                    return null
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.market.CoinPriceMsg.CoinPriceMessage)) return e;
                                    var t = new c.com.market.CoinPriceMsg.CoinPriceMessage;
                                    if (null != e.fiatCurrency && (t.fiatCurrency = String(e.fiatCurrency)), e.coinPrices) {
                                        if (!Array.isArray(e.coinPrices)) throw TypeError(".com.market.CoinPriceMsg.CoinPriceMessage.coinPrices: array expected");
                                        t.coinPrices = [];
                                        for (var r = 0; r < e.coinPrices.length; ++r) {
                                            if ("object" !== typeof e.coinPrices[r]) throw TypeError(".com.market.CoinPriceMsg.CoinPriceMessage.coinPrices: object expected");
                                            t.coinPrices[r] = c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice.fromObject(e.coinPrices[r])
                                        }
                                    }
                                    return t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    if ((t.arrays || t.defaults) && (r.coinPrices = []), t.defaults && (r.fiatCurrency = ""), null != e.fiatCurrency && e.hasOwnProperty("fiatCurrency") && (r.fiatCurrency = e.fiatCurrency), e.coinPrices && e.coinPrices.length) {
                                        r.coinPrices = [];
                                        for (var n = 0; n < e.coinPrices.length; ++n) r.coinPrices[n] = c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice.toObject(e.coinPrices[n], t)
                                    }
                                    return r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e.CoinPrice = function() {
                                    var e = function(e) {
                                        if (e)
                                            for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                    };
                                    return e.prototype.coin = "", e.prototype.quotePrice = "", e.create = function(t) {
                                        return new e(t)
                                    }, e.encode = function(e, t) {
                                        return t || (t = s.create()), t.uint32(10).string(e.coin), t.uint32(18).string(e.quotePrice), t
                                    }, e.encodeDelimited = function(e, t) {
                                        return this.encode(e, t).ldelim()
                                    }, e.decode = function(e, t) {
                                        (0, n._)(e, o) || (e = o.create(e));
                                        for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice; e.pos < r;) {
                                            var s = e.uint32();
                                            switch (s >>> 3) {
                                                case 1:
                                                    i.coin = e.string();
                                                    break;
                                                case 2:
                                                    i.quotePrice = e.string();
                                                    break;
                                                default:
                                                    e.skipType(7 & s)
                                            }
                                        }
                                        if (!i.hasOwnProperty("coin")) throw a.ProtocolError("missing required 'coin'", {
                                            instance: i
                                        });
                                        if (!i.hasOwnProperty("quotePrice")) throw a.ProtocolError("missing required 'quotePrice'", {
                                            instance: i
                                        });
                                        return i
                                    }, e.decodeDelimited = function(e) {
                                        return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                    }, e.verify = function(e) {
                                        return "object" !== typeof e || null === e ? "object expected" : a.isString(e.coin) ? a.isString(e.quotePrice) ? null : "quotePrice: string expected" : "coin: string expected"
                                    }, e.fromObject = function(e) {
                                        if ((0, n._)(e, c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice)) return e;
                                        var t = new c.com.market.CoinPriceMsg.CoinPriceMessage.CoinPrice;
                                        return null != e.coin && (t.coin = String(e.coin)), null != e.quotePrice && (t.quotePrice = String(e.quotePrice)), t
                                    }, e.toObject = function(e, t) {
                                        t || (t = {});
                                        var r = {};
                                        return t.defaults && (r.coin = "", r.quotePrice = ""), null != e.coin && e.hasOwnProperty("coin") && (r.coin = e.coin), null != e.quotePrice && e.hasOwnProperty("quotePrice") && (r.quotePrice = e.quotePrice), r
                                    }, e.prototype.toJSON = function() {
                                        return this.constructor.toObject(this, i.util.toJSONOptions)
                                    }, e
                                }(), e
                            }(), e
                        }(), e.EmergencyBroadcastMsg = function() {
                            var e = function(e) {
                                if (this.emergencyMessage = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.emergencyMessage = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.emergencyMessage && e.emergencyMessage.length)
                                    for (var r = 0; r < e.emergencyMessage.length; ++r) c.com.market.EmergencyMessage.encode(e.emergencyMessage[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.EmergencyBroadcastMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.emergencyMessage && i.emergencyMessage.length || (i.emergencyMessage = []), i.emergencyMessage.push(c.com.market.EmergencyMessage.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.emergencyMessage && e.hasOwnProperty("emergencyMessage")) {
                                    if (!Array.isArray(e.emergencyMessage)) return "emergencyMessage: array expected";
                                    for (var t = 0; t < e.emergencyMessage.length; ++t) {
                                        var r = c.com.market.EmergencyMessage.verify(e.emergencyMessage[t]);
                                        if (r) return "emergencyMessage." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.EmergencyBroadcastMsg)) return e;
                                var t = new c.com.market.EmergencyBroadcastMsg;
                                if (e.emergencyMessage) {
                                    if (!Array.isArray(e.emergencyMessage)) throw TypeError(".com.market.EmergencyBroadcastMsg.emergencyMessage: array expected");
                                    t.emergencyMessage = [];
                                    for (var r = 0; r < e.emergencyMessage.length; ++r) {
                                        if ("object" !== typeof e.emergencyMessage[r]) throw TypeError(".com.market.EmergencyBroadcastMsg.emergencyMessage: object expected");
                                        t.emergencyMessage[r] = c.com.market.EmergencyMessage.fromObject(e.emergencyMessage[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.emergencyMessage = []), e.emergencyMessage && e.emergencyMessage.length) {
                                    r.emergencyMessage = [];
                                    for (var n = 0; n < e.emergencyMessage.length; ++n) r.emergencyMessage[n] = c.com.market.EmergencyMessage.toObject(e.emergencyMessage[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.TradingPairsMsg = function() {
                            var e = function(e) {
                                if (this.tradingPair = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.tradingPair = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.tradingPair && e.tradingPair.length)
                                    for (var r = 0; r < e.tradingPair.length; ++r) t.uint32(10).string(e.tradingPair[r]);
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.TradingPairsMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.tradingPair && i.tradingPair.length || (i.tradingPair = []), i.tradingPair.push(e.string());
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.tradingPair && e.hasOwnProperty("tradingPair")) {
                                    if (!Array.isArray(e.tradingPair)) return "tradingPair: array expected";
                                    for (var t = 0; t < e.tradingPair.length; ++t)
                                        if (!a.isString(e.tradingPair[t])) return "tradingPair: string[] expected"
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.TradingPairsMsg)) return e;
                                var t = new c.com.market.TradingPairsMsg;
                                if (e.tradingPair) {
                                    if (!Array.isArray(e.tradingPair)) throw TypeError(".com.market.TradingPairsMsg.tradingPair: array expected");
                                    t.tradingPair = [];
                                    for (var r = 0; r < e.tradingPair.length; ++r) t.tradingPair[r] = String(e.tradingPair[r])
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.tradingPair = []), e.tradingPair && e.tradingPair.length) {
                                    r.tradingPair = [];
                                    for (var n = 0; n < e.tradingPair.length; ++n) r.tradingPair[n] = e.tradingPair[n]
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.EmergencyMessage = function() {
                            var e = function(e) {
                                if (this.scope = [], this.tradingPairs = {}, e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.id = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.title = "", e.prototype.url = "", e.prototype.time = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.lang = "", e.prototype.isTop = !1, e.prototype.isEmergency = !1, e.prototype.detail = "", e.prototype.type = "", e.prototype.picUrl = "", e.prototype.pair = "", e.prototype.endTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.code = "", e.prototype.actionType = "", e.prototype.scope = a.emptyArray, e.prototype.tradingPairs = a.emptyObject, e.prototype.startTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.forcedEndTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.path = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), t.uint32(8).int64(e.id), t.uint32(18).string(e.title), null != e.url && Object.hasOwnProperty.call(e, "url") && t.uint32(26).string(e.url), t.uint32(32).int64(e.time), null != e.lang && Object.hasOwnProperty.call(e, "lang") && t.uint32(42).string(e.lang), null != e.isTop && Object.hasOwnProperty.call(e, "isTop") && t.uint32(48).bool(e.isTop), t.uint32(56).bool(e.isEmergency), null != e.detail && Object.hasOwnProperty.call(e, "detail") && t.uint32(66).string(e.detail), null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(74).string(e.type), null != e.picUrl && Object.hasOwnProperty.call(e, "picUrl") && t.uint32(82).string(e.picUrl), null != e.pair && Object.hasOwnProperty.call(e, "pair") && t.uint32(90).string(e.pair), null != e.endTime && Object.hasOwnProperty.call(e, "endTime") && t.uint32(96).int64(e.endTime), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(106).string(e.code), null != e.actionType && Object.hasOwnProperty.call(e, "actionType") && t.uint32(114).string(e.actionType), null != e.scope && e.scope.length)
                                    for (var r = 0; r < e.scope.length; ++r) t.uint32(122).string(e.scope[r]);
                                if (null != e.tradingPairs && Object.hasOwnProperty.call(e, "tradingPairs"))
                                    for (var n = Object.keys(e.tradingPairs), i = 0; i < n.length; ++i) t.uint32(130).fork().uint32(10).string(n[i]), c.com.market.TradingPairsMsg.encode(e.tradingPairs[n[i]], t.uint32(18).fork()).ldelim().ldelim();
                                return null != e.startTime && Object.hasOwnProperty.call(e, "startTime") && t.uint32(136).int64(e.startTime), null != e.forcedEndTime && Object.hasOwnProperty.call(e, "forcedEndTime") && t.uint32(144).int64(e.forcedEndTime), null != e.path && Object.hasOwnProperty.call(e, "path") && t.uint32(154).string(e.path), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r, i, s = void 0 === t ? e.len : e.pos + t, l = new c.com.market.EmergencyMessage; e.pos < s;) {
                                    var u = e.uint32();
                                    switch (u >>> 3) {
                                        case 1:
                                            l.id = e.int64();
                                            break;
                                        case 2:
                                            l.title = e.string();
                                            break;
                                        case 3:
                                            l.url = e.string();
                                            break;
                                        case 4:
                                            l.time = e.int64();
                                            break;
                                        case 5:
                                            l.lang = e.string();
                                            break;
                                        case 6:
                                            l.isTop = e.bool();
                                            break;
                                        case 7:
                                            l.isEmergency = e.bool();
                                            break;
                                        case 8:
                                            l.detail = e.string();
                                            break;
                                        case 9:
                                            l.type = e.string();
                                            break;
                                        case 10:
                                            l.picUrl = e.string();
                                            break;
                                        case 11:
                                            l.pair = e.string();
                                            break;
                                        case 12:
                                            l.endTime = e.int64();
                                            break;
                                        case 13:
                                            l.code = e.string();
                                            break;
                                        case 14:
                                            l.actionType = e.string();
                                            break;
                                        case 15:
                                            l.scope && l.scope.length || (l.scope = []), l.scope.push(e.string());
                                            break;
                                        case 16:
                                            l.tradingPairs === a.emptyObject && (l.tradingPairs = {});
                                            var p = e.uint32() + e.pos;
                                            for (r = "", i = null; e.pos < p;) {
                                                var d = e.uint32();
                                                switch (d >>> 3) {
                                                    case 1:
                                                        r = e.string();
                                                        break;
                                                    case 2:
                                                        i = c.com.market.TradingPairsMsg.decode(e, e.uint32());
                                                        break;
                                                    default:
                                                        e.skipType(7 & d)
                                                }
                                            }
                                            l.tradingPairs[r] = i;
                                            break;
                                        case 17:
                                            l.startTime = e.int64();
                                            break;
                                        case 18:
                                            l.forcedEndTime = e.int64();
                                            break;
                                        case 19:
                                            l.path = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & u)
                                    }
                                }
                                if (!l.hasOwnProperty("id")) throw a.ProtocolError("missing required 'id'", {
                                    instance: l
                                });
                                if (!l.hasOwnProperty("title")) throw a.ProtocolError("missing required 'title'", {
                                    instance: l
                                });
                                if (!l.hasOwnProperty("time")) throw a.ProtocolError("missing required 'time'", {
                                    instance: l
                                });
                                if (!l.hasOwnProperty("isEmergency")) throw a.ProtocolError("missing required 'isEmergency'", {
                                    instance: l
                                });
                                return l
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isInteger(e.id) && !(e.id && a.isInteger(e.id.low) && a.isInteger(e.id.high))) return "id: integer|Long expected";
                                if (!a.isString(e.title)) return "title: string expected";
                                if (null != e.url && e.hasOwnProperty("url") && !a.isString(e.url)) return "url: string expected";
                                if (!a.isInteger(e.time) && !(e.time && a.isInteger(e.time.low) && a.isInteger(e.time.high))) return "time: integer|Long expected";
                                if (null != e.lang && e.hasOwnProperty("lang") && !a.isString(e.lang)) return "lang: string expected";
                                if (null != e.isTop && e.hasOwnProperty("isTop") && "boolean" !== typeof e.isTop) return "isTop: boolean expected";
                                if ("boolean" !== typeof e.isEmergency) return "isEmergency: boolean expected";
                                if (null != e.detail && e.hasOwnProperty("detail") && !a.isString(e.detail)) return "detail: string expected";
                                if (null != e.type && e.hasOwnProperty("type") && !a.isString(e.type)) return "type: string expected";
                                if (null != e.picUrl && e.hasOwnProperty("picUrl") && !a.isString(e.picUrl)) return "picUrl: string expected";
                                if (null != e.pair && e.hasOwnProperty("pair") && !a.isString(e.pair)) return "pair: string expected";
                                if (null != e.endTime && e.hasOwnProperty("endTime") && !a.isInteger(e.endTime) && !(e.endTime && a.isInteger(e.endTime.low) && a.isInteger(e.endTime.high))) return "endTime: integer|Long expected";
                                if (null != e.code && e.hasOwnProperty("code") && !a.isString(e.code)) return "code: string expected";
                                if (null != e.actionType && e.hasOwnProperty("actionType") && !a.isString(e.actionType)) return "actionType: string expected";
                                if (null != e.scope && e.hasOwnProperty("scope")) {
                                    if (!Array.isArray(e.scope)) return "scope: array expected";
                                    for (var t = 0; t < e.scope.length; ++t)
                                        if (!a.isString(e.scope[t])) return "scope: string[] expected"
                                }
                                if (null != e.tradingPairs && e.hasOwnProperty("tradingPairs")) {
                                    if (!a.isObject(e.tradingPairs)) return "tradingPairs: object expected";
                                    for (var r = Object.keys(e.tradingPairs), n = 0; n < r.length; ++n) {
                                        var i = c.com.market.TradingPairsMsg.verify(e.tradingPairs[r[n]]);
                                        if (i) return "tradingPairs." + i
                                    }
                                }
                                return null == e.startTime || !e.hasOwnProperty("startTime") || a.isInteger(e.startTime) || e.startTime && a.isInteger(e.startTime.low) && a.isInteger(e.startTime.high) ? null == e.forcedEndTime || !e.hasOwnProperty("forcedEndTime") || a.isInteger(e.forcedEndTime) || e.forcedEndTime && a.isInteger(e.forcedEndTime.low) && a.isInteger(e.forcedEndTime.high) ? null != e.path && e.hasOwnProperty("path") && !a.isString(e.path) ? "path: string expected" : null : "forcedEndTime: integer|Long expected" : "startTime: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.EmergencyMessage)) return e;
                                var t = new c.com.market.EmergencyMessage;
                                if (null != e.id && (a.Long ? (t.id = a.Long.fromValue(e.id)).unsigned = !1 : "string" === typeof e.id ? t.id = parseInt(e.id, 10) : "number" === typeof e.id ? t.id = e.id : "object" === typeof e.id && (t.id = new a.LongBits(e.id.low >>> 0, e.id.high >>> 0).toNumber())), null != e.title && (t.title = String(e.title)), null != e.url && (t.url = String(e.url)), null != e.time && (a.Long ? (t.time = a.Long.fromValue(e.time)).unsigned = !1 : "string" === typeof e.time ? t.time = parseInt(e.time, 10) : "number" === typeof e.time ? t.time = e.time : "object" === typeof e.time && (t.time = new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), null != e.lang && (t.lang = String(e.lang)), null != e.isTop && (t.isTop = Boolean(e.isTop)), null != e.isEmergency && (t.isEmergency = Boolean(e.isEmergency)), null != e.detail && (t.detail = String(e.detail)), null != e.type && (t.type = String(e.type)), null != e.picUrl && (t.picUrl = String(e.picUrl)), null != e.pair && (t.pair = String(e.pair)), null != e.endTime && (a.Long ? (t.endTime = a.Long.fromValue(e.endTime)).unsigned = !1 : "string" === typeof e.endTime ? t.endTime = parseInt(e.endTime, 10) : "number" === typeof e.endTime ? t.endTime = e.endTime : "object" === typeof e.endTime && (t.endTime = new a.LongBits(e.endTime.low >>> 0, e.endTime.high >>> 0).toNumber())), null != e.code && (t.code = String(e.code)), null != e.actionType && (t.actionType = String(e.actionType)), e.scope) {
                                    if (!Array.isArray(e.scope)) throw TypeError(".com.market.EmergencyMessage.scope: array expected");
                                    t.scope = [];
                                    for (var r = 0; r < e.scope.length; ++r) t.scope[r] = String(e.scope[r])
                                }
                                if (e.tradingPairs) {
                                    if ("object" !== typeof e.tradingPairs) throw TypeError(".com.market.EmergencyMessage.tradingPairs: object expected");
                                    t.tradingPairs = {};
                                    for (var i = Object.keys(e.tradingPairs), o = 0; o < i.length; ++o) {
                                        if ("object" !== typeof e.tradingPairs[i[o]]) throw TypeError(".com.market.EmergencyMessage.tradingPairs: object expected");
                                        t.tradingPairs[i[o]] = c.com.market.TradingPairsMsg.fromObject(e.tradingPairs[i[o]])
                                    }
                                }
                                return null != e.startTime && (a.Long ? (t.startTime = a.Long.fromValue(e.startTime)).unsigned = !1 : "string" === typeof e.startTime ? t.startTime = parseInt(e.startTime, 10) : "number" === typeof e.startTime ? t.startTime = e.startTime : "object" === typeof e.startTime && (t.startTime = new a.LongBits(e.startTime.low >>> 0, e.startTime.high >>> 0).toNumber())), null != e.forcedEndTime && (a.Long ? (t.forcedEndTime = a.Long.fromValue(e.forcedEndTime)).unsigned = !1 : "string" === typeof e.forcedEndTime ? t.forcedEndTime = parseInt(e.forcedEndTime, 10) : "number" === typeof e.forcedEndTime ? t.forcedEndTime = e.forcedEndTime : "object" === typeof e.forcedEndTime && (t.forcedEndTime = new a.LongBits(e.forcedEndTime.low >>> 0, e.forcedEndTime.high >>> 0).toNumber())), null != e.path && (t.path = String(e.path)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r, n = {};
                                if ((t.arrays || t.defaults) && (n.scope = []), (t.objects || t.defaults) && (n.tradingPairs = {}), t.defaults) {
                                    if (a.Long) {
                                        var i = new a.Long(0, 0, !1);
                                        n.id = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                    } else n.id = t.longs === String ? "0" : 0;
                                    if (n.title = "", n.url = "", a.Long) {
                                        var o = new a.Long(0, 0, !1);
                                        n.time = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                    } else n.time = t.longs === String ? "0" : 0;
                                    if (n.lang = "", n.isTop = !1, n.isEmergency = !1, n.detail = "", n.type = "", n.picUrl = "", n.pair = "", a.Long) {
                                        var s = new a.Long(0, 0, !1);
                                        n.endTime = t.longs === String ? s.toString() : t.longs === Number ? s.toNumber() : s
                                    } else n.endTime = t.longs === String ? "0" : 0;
                                    if (n.code = "", n.actionType = "", a.Long) {
                                        var l = new a.Long(0, 0, !1);
                                        n.startTime = t.longs === String ? l.toString() : t.longs === Number ? l.toNumber() : l
                                    } else n.startTime = t.longs === String ? "0" : 0;
                                    if (a.Long) {
                                        var u = new a.Long(0, 0, !1);
                                        n.forcedEndTime = t.longs === String ? u.toString() : t.longs === Number ? u.toNumber() : u
                                    } else n.forcedEndTime = t.longs === String ? "0" : 0;
                                    n.path = ""
                                }
                                if (null != e.id && e.hasOwnProperty("id") && ("number" === typeof e.id ? n.id = t.longs === String ? String(e.id) : e.id : n.id = t.longs === String ? a.Long.prototype.toString.call(e.id) : t.longs === Number ? new a.LongBits(e.id.low >>> 0, e.id.high >>> 0).toNumber() : e.id), null != e.title && e.hasOwnProperty("title") && (n.title = e.title), null != e.url && e.hasOwnProperty("url") && (n.url = e.url), null != e.time && e.hasOwnProperty("time") && ("number" === typeof e.time ? n.time = t.longs === String ? String(e.time) : e.time : n.time = t.longs === String ? a.Long.prototype.toString.call(e.time) : t.longs === Number ? new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), null != e.lang && e.hasOwnProperty("lang") && (n.lang = e.lang), null != e.isTop && e.hasOwnProperty("isTop") && (n.isTop = e.isTop), null != e.isEmergency && e.hasOwnProperty("isEmergency") && (n.isEmergency = e.isEmergency), null != e.detail && e.hasOwnProperty("detail") && (n.detail = e.detail), null != e.type && e.hasOwnProperty("type") && (n.type = e.type), null != e.picUrl && e.hasOwnProperty("picUrl") && (n.picUrl = e.picUrl), null != e.pair && e.hasOwnProperty("pair") && (n.pair = e.pair), null != e.endTime && e.hasOwnProperty("endTime") && ("number" === typeof e.endTime ? n.endTime = t.longs === String ? String(e.endTime) : e.endTime : n.endTime = t.longs === String ? a.Long.prototype.toString.call(e.endTime) : t.longs === Number ? new a.LongBits(e.endTime.low >>> 0, e.endTime.high >>> 0).toNumber() : e.endTime), null != e.code && e.hasOwnProperty("code") && (n.code = e.code), null != e.actionType && e.hasOwnProperty("actionType") && (n.actionType = e.actionType), e.scope && e.scope.length) {
                                    n.scope = [];
                                    for (var p = 0; p < e.scope.length; ++p) n.scope[p] = e.scope[p]
                                }
                                if (e.tradingPairs && (r = Object.keys(e.tradingPairs)).length) {
                                    n.tradingPairs = {};
                                    for (var d = 0; d < r.length; ++d) n.tradingPairs[r[d]] = c.com.market.TradingPairsMsg.toObject(e.tradingPairs[r[d]], t)
                                }
                                return null != e.startTime && e.hasOwnProperty("startTime") && ("number" === typeof e.startTime ? n.startTime = t.longs === String ? String(e.startTime) : e.startTime : n.startTime = t.longs === String ? a.Long.prototype.toString.call(e.startTime) : t.longs === Number ? new a.LongBits(e.startTime.low >>> 0, e.startTime.high >>> 0).toNumber() : e.startTime), null != e.forcedEndTime && e.hasOwnProperty("forcedEndTime") && ("number" === typeof e.forcedEndTime ? n.forcedEndTime = t.longs === String ? String(e.forcedEndTime) : e.forcedEndTime : n.forcedEndTime = t.longs === String ? a.Long.prototype.toString.call(e.forcedEndTime) : t.longs === Number ? new a.LongBits(e.forcedEndTime.low >>> 0, e.forcedEndTime.high >>> 0).toNumber() : e.forcedEndTime), null != e.path && e.hasOwnProperty("path") && (n.path = e.path), n
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.ExchangeRateMsg = function() {
                            var e = function(e) {
                                if (this.exchangeRate = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.exchangeRate = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.exchangeRate && e.exchangeRate.length)
                                    for (var r = 0; r < e.exchangeRate.length; ++r) c.com.market.ExchangeRateMsg.ExchangeRateMessage.encode(e.exchangeRate[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.ExchangeRateMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.exchangeRate && i.exchangeRate.length || (i.exchangeRate = []), i.exchangeRate.push(c.com.market.ExchangeRateMsg.ExchangeRateMessage.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.exchangeRate && e.hasOwnProperty("exchangeRate")) {
                                    if (!Array.isArray(e.exchangeRate)) return "exchangeRate: array expected";
                                    for (var t = 0; t < e.exchangeRate.length; ++t) {
                                        var r = c.com.market.ExchangeRateMsg.ExchangeRateMessage.verify(e.exchangeRate[t]);
                                        if (r) return "exchangeRate." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.ExchangeRateMsg)) return e;
                                var t = new c.com.market.ExchangeRateMsg;
                                if (e.exchangeRate) {
                                    if (!Array.isArray(e.exchangeRate)) throw TypeError(".com.market.ExchangeRateMsg.exchangeRate: array expected");
                                    t.exchangeRate = [];
                                    for (var r = 0; r < e.exchangeRate.length; ++r) {
                                        if ("object" !== typeof e.exchangeRate[r]) throw TypeError(".com.market.ExchangeRateMsg.exchangeRate: object expected");
                                        t.exchangeRate[r] = c.com.market.ExchangeRateMsg.ExchangeRateMessage.fromObject(e.exchangeRate[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.exchangeRate = []), e.exchangeRate && e.exchangeRate.length) {
                                    r.exchangeRate = [];
                                    for (var n = 0; n < e.exchangeRate.length; ++n) r.exchangeRate[n] = c.com.market.ExchangeRateMsg.ExchangeRateMessage.toObject(e.exchangeRate[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.ExchangeRateMessage = function() {
                                var e = function(e) {
                                    if (e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.baseAsset = "", e.prototype.quoteAsset = "", e.prototype.time = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.exchangeRate = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.exchangeRateV2 = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.rateV2Scale = 0, e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    return t || (t = s.create()), t.uint32(10).string(e.baseAsset), t.uint32(18).string(e.quoteAsset), t.uint32(24).int64(e.time), t.uint32(32).int64(e.exchangeRate), null != e.exchangeRateV2 && Object.hasOwnProperty.call(e, "exchangeRateV2") && t.uint32(40).int64(e.exchangeRateV2), null != e.rateV2Scale && Object.hasOwnProperty.call(e, "rateV2Scale") && t.uint32(48).int32(e.rateV2Scale), t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.ExchangeRateMsg.ExchangeRateMessage; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.baseAsset = e.string();
                                                break;
                                            case 2:
                                                i.quoteAsset = e.string();
                                                break;
                                            case 3:
                                                i.time = e.int64();
                                                break;
                                            case 4:
                                                i.exchangeRate = e.int64();
                                                break;
                                            case 5:
                                                i.exchangeRateV2 = e.int64();
                                                break;
                                            case 6:
                                                i.rateV2Scale = e.int32();
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("baseAsset")) throw a.ProtocolError("missing required 'baseAsset'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("quoteAsset")) throw a.ProtocolError("missing required 'quoteAsset'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("time")) throw a.ProtocolError("missing required 'time'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("exchangeRate")) throw a.ProtocolError("missing required 'exchangeRate'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    return "object" !== typeof e || null === e ? "object expected" : a.isString(e.baseAsset) ? a.isString(e.quoteAsset) ? a.isInteger(e.time) || e.time && a.isInteger(e.time.low) && a.isInteger(e.time.high) ? a.isInteger(e.exchangeRate) || e.exchangeRate && a.isInteger(e.exchangeRate.low) && a.isInteger(e.exchangeRate.high) ? null == e.exchangeRateV2 || !e.hasOwnProperty("exchangeRateV2") || a.isInteger(e.exchangeRateV2) || e.exchangeRateV2 && a.isInteger(e.exchangeRateV2.low) && a.isInteger(e.exchangeRateV2.high) ? null != e.rateV2Scale && e.hasOwnProperty("rateV2Scale") && !a.isInteger(e.rateV2Scale) ? "rateV2Scale: integer expected" : null : "exchangeRateV2: integer|Long expected" : "exchangeRate: integer|Long expected" : "time: integer|Long expected" : "quoteAsset: string expected" : "baseAsset: string expected"
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.market.ExchangeRateMsg.ExchangeRateMessage)) return e;
                                    var t = new c.com.market.ExchangeRateMsg.ExchangeRateMessage;
                                    return null != e.baseAsset && (t.baseAsset = String(e.baseAsset)), null != e.quoteAsset && (t.quoteAsset = String(e.quoteAsset)), null != e.time && (a.Long ? (t.time = a.Long.fromValue(e.time)).unsigned = !1 : "string" === typeof e.time ? t.time = parseInt(e.time, 10) : "number" === typeof e.time ? t.time = e.time : "object" === typeof e.time && (t.time = new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), null != e.exchangeRate && (a.Long ? (t.exchangeRate = a.Long.fromValue(e.exchangeRate)).unsigned = !1 : "string" === typeof e.exchangeRate ? t.exchangeRate = parseInt(e.exchangeRate, 10) : "number" === typeof e.exchangeRate ? t.exchangeRate = e.exchangeRate : "object" === typeof e.exchangeRate && (t.exchangeRate = new a.LongBits(e.exchangeRate.low >>> 0, e.exchangeRate.high >>> 0).toNumber())), null != e.exchangeRateV2 && (a.Long ? (t.exchangeRateV2 = a.Long.fromValue(e.exchangeRateV2)).unsigned = !1 : "string" === typeof e.exchangeRateV2 ? t.exchangeRateV2 = parseInt(e.exchangeRateV2, 10) : "number" === typeof e.exchangeRateV2 ? t.exchangeRateV2 = e.exchangeRateV2 : "object" === typeof e.exchangeRateV2 && (t.exchangeRateV2 = new a.LongBits(e.exchangeRateV2.low >>> 0, e.exchangeRateV2.high >>> 0).toNumber())), null != e.rateV2Scale && (t.rateV2Scale = 0 | e.rateV2Scale), t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    if (t.defaults) {
                                        if (r.baseAsset = "", r.quoteAsset = "", a.Long) {
                                            var n = new a.Long(0, 0, !1);
                                            r.time = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                        } else r.time = t.longs === String ? "0" : 0;
                                        if (a.Long) {
                                            var i = new a.Long(0, 0, !1);
                                            r.exchangeRate = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                        } else r.exchangeRate = t.longs === String ? "0" : 0;
                                        if (a.Long) {
                                            var o = new a.Long(0, 0, !1);
                                            r.exchangeRateV2 = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                        } else r.exchangeRateV2 = t.longs === String ? "0" : 0;
                                        r.rateV2Scale = 0
                                    }
                                    return null != e.baseAsset && e.hasOwnProperty("baseAsset") && (r.baseAsset = e.baseAsset), null != e.quoteAsset && e.hasOwnProperty("quoteAsset") && (r.quoteAsset = e.quoteAsset), null != e.time && e.hasOwnProperty("time") && ("number" === typeof e.time ? r.time = t.longs === String ? String(e.time) : e.time : r.time = t.longs === String ? a.Long.prototype.toString.call(e.time) : t.longs === Number ? new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), null != e.exchangeRate && e.hasOwnProperty("exchangeRate") && ("number" === typeof e.exchangeRate ? r.exchangeRate = t.longs === String ? String(e.exchangeRate) : e.exchangeRate : r.exchangeRate = t.longs === String ? a.Long.prototype.toString.call(e.exchangeRate) : t.longs === Number ? new a.LongBits(e.exchangeRate.low >>> 0, e.exchangeRate.high >>> 0).toNumber() : e.exchangeRate), null != e.exchangeRateV2 && e.hasOwnProperty("exchangeRateV2") && ("number" === typeof e.exchangeRateV2 ? r.exchangeRateV2 = t.longs === String ? String(e.exchangeRateV2) : e.exchangeRateV2 : r.exchangeRateV2 = t.longs === String ? a.Long.prototype.toString.call(e.exchangeRateV2) : t.longs === Number ? new a.LongBits(e.exchangeRateV2.low >>> 0, e.exchangeRateV2.high >>> 0).toNumber() : e.exchangeRateV2), null != e.rateV2Scale && e.hasOwnProperty("rateV2Scale") && (r.rateV2Scale = e.rateV2Scale), r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e
                            }(), e
                        }(), e.TrivialMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.time = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.weather = 0, e.prototype.temperature = 0, e.prototype.windSpeed = 0, e.prototype.humidity = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.time && Object.hasOwnProperty.call(e, "time") && t.uint32(8).int64(e.time), null != e.weather && Object.hasOwnProperty.call(e, "weather") && t.uint32(16).int32(e.weather), null != e.temperature && Object.hasOwnProperty.call(e, "temperature") && t.uint32(24).int32(e.temperature), null != e.windSpeed && Object.hasOwnProperty.call(e, "windSpeed") && t.uint32(32).int32(e.windSpeed), null != e.humidity && Object.hasOwnProperty.call(e, "humidity") && t.uint32(40).int32(e.humidity), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.market.TrivialMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.time = e.int64();
                                            break;
                                        case 2:
                                            i.weather = e.int32();
                                            break;
                                        case 3:
                                            i.temperature = e.int32();
                                            break;
                                        case 4:
                                            i.windSpeed = e.int32();
                                            break;
                                        case 5:
                                            i.humidity = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.time && e.hasOwnProperty("time") && !a.isInteger(e.time) && !(e.time && a.isInteger(e.time.low) && a.isInteger(e.time.high))) return "time: integer|Long expected";
                                if (null != e.weather && e.hasOwnProperty("weather")) switch (e.weather) {
                                    default: return "weather: enum value expected";
                                    case 0:
                                            case 1:
                                            case 2:
                                }
                                return null != e.temperature && e.hasOwnProperty("temperature") && !a.isInteger(e.temperature) ? "temperature: integer expected" : null != e.windSpeed && e.hasOwnProperty("windSpeed") && !a.isInteger(e.windSpeed) ? "windSpeed: integer expected" : null != e.humidity && e.hasOwnProperty("humidity") && !a.isInteger(e.humidity) ? "humidity: integer expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.market.TrivialMsg)) return e;
                                var t = new c.com.market.TrivialMsg;
                                switch (null != e.time && (a.Long ? (t.time = a.Long.fromValue(e.time)).unsigned = !1 : "string" === typeof e.time ? t.time = parseInt(e.time, 10) : "number" === typeof e.time ? t.time = e.time : "object" === typeof e.time && (t.time = new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), e.weather) {
                                    case "RAINY":
                                    case 0:
                                        t.weather = 0;
                                        break;
                                    case "CLOUDY":
                                    case 1:
                                        t.weather = 1;
                                        break;
                                    case "SUNNY":
                                    case 2:
                                        t.weather = 2
                                }
                                return null != e.temperature && (t.temperature = 0 | e.temperature), null != e.windSpeed && (t.windSpeed = 0 | e.windSpeed), null != e.humidity && (t.humidity = 0 | e.humidity), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.time = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.time = t.longs === String ? "0" : 0;
                                    r.weather = t.enums === String ? "RAINY" : 0, r.temperature = 0, r.windSpeed = 0, r.humidity = 0
                                }
                                return null != e.time && e.hasOwnProperty("time") && ("number" === typeof e.time ? r.time = t.longs === String ? String(e.time) : e.time : r.time = t.longs === String ? a.Long.prototype.toString.call(e.time) : t.longs === Number ? new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), null != e.weather && e.hasOwnProperty("weather") && (r.weather = t.enums === String ? c.com.market.Weather[e.weather] : e.weather), null != e.temperature && e.hasOwnProperty("temperature") && (r.temperature = e.temperature), null != e.windSpeed && e.hasOwnProperty("windSpeed") && (r.windSpeed = e.windSpeed), null != e.humidity && e.hasOwnProperty("humidity") && (r.humidity = e.humidity), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.Weather = function() {
                            var e = {},
                                t = Object.create(e);
                            return t[e[0] = "RAINY"] = 0, t[e[1] = "CLOUDY"] = 1, t[e[2] = "SUNNY"] = 2, t
                        }(), e
                    }(), e.futures = function() {
                        var e = {};
                        return e.GetOpenGridsReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.symbol = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(10).string(e.symbol), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.futures.GetOpenGridsReq; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.symbol = e.string();
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.symbol && e.hasOwnProperty("symbol") && !a.isString(e.symbol) ? "symbol: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.futures.GetOpenGridsReq)) return e;
                                var t = new c.com.futures.GetOpenGridsReq;
                                return null != e.symbol && (t.symbol = String(e.symbol)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.symbol = ""), null != e.symbol && e.hasOwnProperty("symbol") && (r.symbol = e.symbol), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetOrderConfirmationReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.futures.GetOrderConfirmationReq; e.pos < r;) {
                                    var s = e.uint32();
                                    e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null
                            }, e.fromObject = function(e) {
                                return (0, n._)(e, c.com.futures.GetOrderConfirmationReq) ? e : new c.com.futures.GetOrderConfirmationReq
                            }, e.toObject = function() {
                                return {}
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetUserCommissionReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.symbol = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(10).string(e.symbol), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.futures.GetUserCommissionReq; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.symbol = e.string();
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.symbol && e.hasOwnProperty("symbol") && !a.isString(e.symbol) ? "symbol: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.futures.GetUserCommissionReq)) return e;
                                var t = new c.com.futures.GetUserCommissionReq;
                                return null != e.symbol && (t.symbol = String(e.symbol)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.symbol = ""), null != e.symbol && e.hasOwnProperty("symbol") && (r.symbol = e.symbol), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetOpenGridsResp = function() {
                            var e = function(e) {
                                if (this.gridItems = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.gridItems = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.gridItems && e.gridItems.length)
                                    for (var r = 0; r < e.gridItems.length; ++r) c.com.futures.GetOpenGridsResp.GridItem.encode(e.gridItems[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.futures.GetOpenGridsResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.gridItems && i.gridItems.length || (i.gridItems = []), i.gridItems.push(c.com.futures.GetOpenGridsResp.GridItem.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.gridItems && e.hasOwnProperty("gridItems")) {
                                    if (!Array.isArray(e.gridItems)) return "gridItems: array expected";
                                    for (var t = 0; t < e.gridItems.length; ++t) {
                                        var r = c.com.futures.GetOpenGridsResp.GridItem.verify(e.gridItems[t]);
                                        if (r) return "gridItems." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.futures.GetOpenGridsResp)) return e;
                                var t = new c.com.futures.GetOpenGridsResp;
                                if (e.gridItems) {
                                    if (!Array.isArray(e.gridItems)) throw TypeError(".com.futures.GetOpenGridsResp.gridItems: array expected");
                                    t.gridItems = [];
                                    for (var r = 0; r < e.gridItems.length; ++r) {
                                        if ("object" !== typeof e.gridItems[r]) throw TypeError(".com.futures.GetOpenGridsResp.gridItems: object expected");
                                        t.gridItems[r] = c.com.futures.GetOpenGridsResp.GridItem.fromObject(e.gridItems[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.gridItems = []), e.gridItems && e.gridItems.length) {
                                    r.gridItems = [];
                                    for (var n = 0; n < e.gridItems.length; ++n) r.gridItems[n] = c.com.futures.GetOpenGridsResp.GridItem.toObject(e.gridItems[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.GridItem = function() {
                                var e = function(e) {
                                    if (e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.strategyId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.symbol = "", e.prototype.strategyStatus = "", e.prototype.bookTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.endTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.gridInitialValue = "", e.prototype.initialLeverage = 0, e.prototype.gridProfit = "", e.prototype.opCode = 0, e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    return t || (t = s.create()), t.uint32(8).int64(e.strategyId), t.uint32(18).string(e.symbol), t.uint32(26).string(e.strategyStatus), t.uint32(32).int64(e.bookTime), t.uint32(40).int64(e.endTime), t.uint32(50).string(e.gridInitialValue), t.uint32(56).int32(e.initialLeverage), t.uint32(66).string(e.gridProfit), t.uint32(72).int32(e.opCode), t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.futures.GetOpenGridsResp.GridItem; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.strategyId = e.int64();
                                                break;
                                            case 2:
                                                i.symbol = e.string();
                                                break;
                                            case 3:
                                                i.strategyStatus = e.string();
                                                break;
                                            case 4:
                                                i.bookTime = e.int64();
                                                break;
                                            case 5:
                                                i.endTime = e.int64();
                                                break;
                                            case 6:
                                                i.gridInitialValue = e.string();
                                                break;
                                            case 7:
                                                i.initialLeverage = e.int32();
                                                break;
                                            case 8:
                                                i.gridProfit = e.string();
                                                break;
                                            case 9:
                                                i.opCode = e.int32();
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("strategyId")) throw a.ProtocolError("missing required 'strategyId'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("symbol")) throw a.ProtocolError("missing required 'symbol'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("strategyStatus")) throw a.ProtocolError("missing required 'strategyStatus'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("bookTime")) throw a.ProtocolError("missing required 'bookTime'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("endTime")) throw a.ProtocolError("missing required 'endTime'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("gridInitialValue")) throw a.ProtocolError("missing required 'gridInitialValue'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("initialLeverage")) throw a.ProtocolError("missing required 'initialLeverage'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("gridProfit")) throw a.ProtocolError("missing required 'gridProfit'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("opCode")) throw a.ProtocolError("missing required 'opCode'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    return "object" !== typeof e || null === e ? "object expected" : a.isInteger(e.strategyId) || e.strategyId && a.isInteger(e.strategyId.low) && a.isInteger(e.strategyId.high) ? a.isString(e.symbol) ? a.isString(e.strategyStatus) ? a.isInteger(e.bookTime) || e.bookTime && a.isInteger(e.bookTime.low) && a.isInteger(e.bookTime.high) ? a.isInteger(e.endTime) || e.endTime && a.isInteger(e.endTime.low) && a.isInteger(e.endTime.high) ? a.isString(e.gridInitialValue) ? a.isInteger(e.initialLeverage) ? a.isString(e.gridProfit) ? a.isInteger(e.opCode) ? null : "opCode: integer expected" : "gridProfit: string expected" : "initialLeverage: integer expected" : "gridInitialValue: string expected" : "endTime: integer|Long expected" : "bookTime: integer|Long expected" : "strategyStatus: string expected" : "symbol: string expected" : "strategyId: integer|Long expected"
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.futures.GetOpenGridsResp.GridItem)) return e;
                                    var t = new c.com.futures.GetOpenGridsResp.GridItem;
                                    return null != e.strategyId && (a.Long ? (t.strategyId = a.Long.fromValue(e.strategyId)).unsigned = !1 : "string" === typeof e.strategyId ? t.strategyId = parseInt(e.strategyId, 10) : "number" === typeof e.strategyId ? t.strategyId = e.strategyId : "object" === typeof e.strategyId && (t.strategyId = new a.LongBits(e.strategyId.low >>> 0, e.strategyId.high >>> 0).toNumber())), null != e.symbol && (t.symbol = String(e.symbol)), null != e.strategyStatus && (t.strategyStatus = String(e.strategyStatus)), null != e.bookTime && (a.Long ? (t.bookTime = a.Long.fromValue(e.bookTime)).unsigned = !1 : "string" === typeof e.bookTime ? t.bookTime = parseInt(e.bookTime, 10) : "number" === typeof e.bookTime ? t.bookTime = e.bookTime : "object" === typeof e.bookTime && (t.bookTime = new a.LongBits(e.bookTime.low >>> 0, e.bookTime.high >>> 0).toNumber())), null != e.endTime && (a.Long ? (t.endTime = a.Long.fromValue(e.endTime)).unsigned = !1 : "string" === typeof e.endTime ? t.endTime = parseInt(e.endTime, 10) : "number" === typeof e.endTime ? t.endTime = e.endTime : "object" === typeof e.endTime && (t.endTime = new a.LongBits(e.endTime.low >>> 0, e.endTime.high >>> 0).toNumber())), null != e.gridInitialValue && (t.gridInitialValue = String(e.gridInitialValue)), null != e.initialLeverage && (t.initialLeverage = 0 | e.initialLeverage), null != e.gridProfit && (t.gridProfit = String(e.gridProfit)), null != e.opCode && (t.opCode = 0 | e.opCode), t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    if (t.defaults) {
                                        if (a.Long) {
                                            var n = new a.Long(0, 0, !1);
                                            r.strategyId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                        } else r.strategyId = t.longs === String ? "0" : 0;
                                        if (r.symbol = "", r.strategyStatus = "", a.Long) {
                                            var i = new a.Long(0, 0, !1);
                                            r.bookTime = t.longs === String ? i.toString() : t.longs === Number ? i.toNumber() : i
                                        } else r.bookTime = t.longs === String ? "0" : 0;
                                        if (a.Long) {
                                            var o = new a.Long(0, 0, !1);
                                            r.endTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : o
                                        } else r.endTime = t.longs === String ? "0" : 0;
                                        r.gridInitialValue = "", r.initialLeverage = 0, r.gridProfit = "", r.opCode = 0
                                    }
                                    return null != e.strategyId && e.hasOwnProperty("strategyId") && ("number" === typeof e.strategyId ? r.strategyId = t.longs === String ? String(e.strategyId) : e.strategyId : r.strategyId = t.longs === String ? a.Long.prototype.toString.call(e.strategyId) : t.longs === Number ? new a.LongBits(e.strategyId.low >>> 0, e.strategyId.high >>> 0).toNumber() : e.strategyId), null != e.symbol && e.hasOwnProperty("symbol") && (r.symbol = e.symbol), null != e.strategyStatus && e.hasOwnProperty("strategyStatus") && (r.strategyStatus = e.strategyStatus), null != e.bookTime && e.hasOwnProperty("bookTime") && ("number" === typeof e.bookTime ? r.bookTime = t.longs === String ? String(e.bookTime) : e.bookTime : r.bookTime = t.longs === String ? a.Long.prototype.toString.call(e.bookTime) : t.longs === Number ? new a.LongBits(e.bookTime.low >>> 0, e.bookTime.high >>> 0).toNumber() : e.bookTime), null != e.endTime && e.hasOwnProperty("endTime") && ("number" === typeof e.endTime ? r.endTime = t.longs === String ? String(e.endTime) : e.endTime : r.endTime = t.longs === String ? a.Long.prototype.toString.call(e.endTime) : t.longs === Number ? new a.LongBits(e.endTime.low >>> 0, e.endTime.high >>> 0).toNumber() : e.endTime), null != e.gridInitialValue && e.hasOwnProperty("gridInitialValue") && (r.gridInitialValue = e.gridInitialValue), null != e.initialLeverage && e.hasOwnProperty("initialLeverage") && (r.initialLeverage = e.initialLeverage), null != e.gridProfit && e.hasOwnProperty("gridProfit") && (r.gridProfit = e.gridProfit), null != e.opCode && e.hasOwnProperty("opCode") && (r.opCode = e.opCode), r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e
                            }(), e
                        }(), e.GetOrderConfirmationResp = function() {
                            var e = function(e) {
                                if (this.values = {}, e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.values = a.emptyObject, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.values && Object.hasOwnProperty.call(e, "values"))
                                    for (var r = Object.keys(e.values), n = 0; n < r.length; ++n) t.uint32(10).fork().uint32(10).string(r[n]).uint32(16).bool(e.values[r[n]]).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r, i, s = void 0 === t ? e.len : e.pos + t, l = new c.com.futures.GetOrderConfirmationResp; e.pos < s;) {
                                    var u = e.uint32();
                                    if (u >>> 3 === 1) {
                                        l.values === a.emptyObject && (l.values = {});
                                        var p = e.uint32() + e.pos;
                                        for (r = "", i = !1; e.pos < p;) {
                                            var d = e.uint32();
                                            switch (d >>> 3) {
                                                case 1:
                                                    r = e.string();
                                                    break;
                                                case 2:
                                                    i = e.bool();
                                                    break;
                                                default:
                                                    e.skipType(7 & d)
                                            }
                                        }
                                        l.values[r] = i
                                    } else e.skipType(7 & u)
                                }
                                return l
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.values && e.hasOwnProperty("values")) {
                                    if (!a.isObject(e.values)) return "values: object expected";
                                    for (var t = Object.keys(e.values), r = 0; r < t.length; ++r)
                                        if ("boolean" !== typeof e.values[t[r]]) return "values: boolean{k:string} expected"
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.futures.GetOrderConfirmationResp)) return e;
                                var t = new c.com.futures.GetOrderConfirmationResp;
                                if (e.values) {
                                    if ("object" !== typeof e.values) throw TypeError(".com.futures.GetOrderConfirmationResp.values: object expected");
                                    t.values = {};
                                    for (var r = Object.keys(e.values), i = 0; i < r.length; ++i) t.values[r[i]] = Boolean(e.values[r[i]])
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r, n = {};
                                if ((t.objects || t.defaults) && (n.values = {}), e.values && (r = Object.keys(e.values)).length) {
                                    n.values = {};
                                    for (var i = 0; i < r.length; ++i) n.values[r[i]] = e.values[r[i]]
                                }
                                return n
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.GetUserCommissionResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.feeTier = 0, e.prototype.makerCommission = 0, e.prototype.takerCommission = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(8).int32(e.feeTier), t.uint32(16).int32(e.makerCommission), t.uint32(24).int32(e.takerCommission), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.futures.GetUserCommissionResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.feeTier = e.int32();
                                            break;
                                        case 2:
                                            i.makerCommission = e.int32();
                                            break;
                                        case 3:
                                            i.takerCommission = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("feeTier")) throw a.ProtocolError("missing required 'feeTier'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("makerCommission")) throw a.ProtocolError("missing required 'makerCommission'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("takerCommission")) throw a.ProtocolError("missing required 'takerCommission'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isInteger(e.feeTier) ? a.isInteger(e.makerCommission) ? a.isInteger(e.takerCommission) ? null : "takerCommission: integer expected" : "makerCommission: integer expected" : "feeTier: integer expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.futures.GetUserCommissionResp)) return e;
                                var t = new c.com.futures.GetUserCommissionResp;
                                return null != e.feeTier && (t.feeTier = 0 | e.feeTier), null != e.makerCommission && (t.makerCommission = 0 | e.makerCommission), null != e.takerCommission && (t.takerCommission = 0 | e.takerCommission), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.feeTier = 0, r.makerCommission = 0, r.takerCommission = 0), null != e.feeTier && e.hasOwnProperty("feeTier") && (r.feeTier = e.feeTier), null != e.makerCommission && e.hasOwnProperty("makerCommission") && (r.makerCommission = e.makerCommission), null != e.takerCommission && e.hasOwnProperty("takerCommission") && (r.takerCommission = e.takerCommission), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e
                    }(), e.inbox = function() {
                        var e = {};
                        return e.InboxMsgReadReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.id = "", e.prototype.moduleId = 0, e.prototype.status = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.moduleId && Object.hasOwnProperty.call(e, "moduleId") && t.uint32(16).int32(e.moduleId), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(24).int32(e.status), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxMsgReadReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.id = e.string();
                                            break;
                                        case 2:
                                            i.moduleId = e.int32();
                                            break;
                                        case 3:
                                            i.status = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !a.isString(e.id) ? "id: string expected" : null != e.moduleId && e.hasOwnProperty("moduleId") && !a.isInteger(e.moduleId) ? "moduleId: integer expected" : null != e.status && e.hasOwnProperty("status") && !a.isInteger(e.status) ? "status: integer expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxMsgReadReq)) return e;
                                var t = new c.com.inbox.InboxMsgReadReq;
                                return null != e.id && (t.id = String(e.id)), null != e.moduleId && (t.moduleId = 0 | e.moduleId), null != e.status && (t.status = 0 | e.status), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.id = "", r.moduleId = 0, r.status = 0), null != e.id && e.hasOwnProperty("id") && (r.id = e.id), null != e.moduleId && e.hasOwnProperty("moduleId") && (r.moduleId = e.moduleId), null != e.status && e.hasOwnProperty("status") && (r.status = e.status), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.InboxMsgReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.id = "", e.prototype.moduleId = 0, e.prototype.status = 0, e.prototype.page = 0, e.prototype.rows = 0, e.prototype.popup = 0, e.prototype.client = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.moduleId && Object.hasOwnProperty.call(e, "moduleId") && t.uint32(16).int32(e.moduleId), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(24).int32(e.status), null != e.page && Object.hasOwnProperty.call(e, "page") && t.uint32(32).int32(e.page), null != e.rows && Object.hasOwnProperty.call(e, "rows") && t.uint32(40).int32(e.rows), null != e.popup && Object.hasOwnProperty.call(e, "popup") && t.uint32(48).int32(e.popup), null != e.client && Object.hasOwnProperty.call(e, "client") && t.uint32(58).string(e.client), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxMsgReq; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.id = e.string();
                                            break;
                                        case 2:
                                            i.moduleId = e.int32();
                                            break;
                                        case 3:
                                            i.status = e.int32();
                                            break;
                                        case 4:
                                            i.page = e.int32();
                                            break;
                                        case 5:
                                            i.rows = e.int32();
                                            break;
                                        case 6:
                                            i.popup = e.int32();
                                            break;
                                        case 7:
                                            i.client = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !a.isString(e.id) ? "id: string expected" : null != e.moduleId && e.hasOwnProperty("moduleId") && !a.isInteger(e.moduleId) ? "moduleId: integer expected" : null != e.status && e.hasOwnProperty("status") && !a.isInteger(e.status) ? "status: integer expected" : null != e.page && e.hasOwnProperty("page") && !a.isInteger(e.page) ? "page: integer expected" : null != e.rows && e.hasOwnProperty("rows") && !a.isInteger(e.rows) ? "rows: integer expected" : null != e.popup && e.hasOwnProperty("popup") && !a.isInteger(e.popup) ? "popup: integer expected" : null != e.client && e.hasOwnProperty("client") && !a.isString(e.client) ? "client: string expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxMsgReq)) return e;
                                var t = new c.com.inbox.InboxMsgReq;
                                return null != e.id && (t.id = String(e.id)), null != e.moduleId && (t.moduleId = 0 | e.moduleId), null != e.status && (t.status = 0 | e.status), null != e.page && (t.page = 0 | e.page), null != e.rows && (t.rows = 0 | e.rows), null != e.popup && (t.popup = 0 | e.popup), null != e.client && (t.client = String(e.client)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.id = "", r.moduleId = 0, r.status = 0, r.page = 0, r.rows = 0, r.popup = 0, r.client = ""), null != e.id && e.hasOwnProperty("id") && (r.id = e.id), null != e.moduleId && e.hasOwnProperty("moduleId") && (r.moduleId = e.moduleId), null != e.status && e.hasOwnProperty("status") && (r.status = e.status), null != e.page && e.hasOwnProperty("page") && (r.page = e.page), null != e.rows && e.hasOwnProperty("rows") && (r.rows = e.rows), null != e.popup && e.hasOwnProperty("popup") && (r.popup = e.popup), null != e.client && e.hasOwnProperty("client") && (r.client = e.client), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.InboxUnReadReq = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.moduleId = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.moduleId && Object.hasOwnProperty.call(e, "moduleId") && t.uint32(8).int32(e.moduleId), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxUnReadReq; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.moduleId = e.int32();
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.moduleId && e.hasOwnProperty("moduleId") && !a.isInteger(e.moduleId) ? "moduleId: integer expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxUnReadReq)) return e;
                                var t = new c.com.inbox.InboxUnReadReq;
                                return null != e.moduleId && (t.moduleId = 0 | e.moduleId), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.moduleId = 0), null != e.moduleId && e.hasOwnProperty("moduleId") && (r.moduleId = e.moduleId), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.InboxMsgReadResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.status = !1, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(8).bool(e.status), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxMsgReadResp; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.status = e.bool();
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.status && e.hasOwnProperty("status") && "boolean" !== typeof e.status ? "status: boolean expected" : null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxMsgReadResp)) return e;
                                var t = new c.com.inbox.InboxMsgReadResp;
                                return null != e.status && (t.status = Boolean(e.status)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.status = !1), null != e.status && e.hasOwnProperty("status") && (r.status = e.status), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.InboxMsgResp = function() {
                            var e = function(e) {
                                if (this.messages = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.total = 0, e.prototype.messages = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.total && Object.hasOwnProperty.call(e, "total") && t.uint32(8).int32(e.total), null != e.messages && e.messages.length)
                                    for (var r = 0; r < e.messages.length; ++r) c.com.inbox.InboxMsg.encode(e.messages[r], t.uint32(18).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxMsgResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.total = e.int32();
                                            break;
                                        case 2:
                                            i.messages && i.messages.length || (i.messages = []), i.messages.push(c.com.inbox.InboxMsg.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.total && e.hasOwnProperty("total") && !a.isInteger(e.total)) return "total: integer expected";
                                if (null != e.messages && e.hasOwnProperty("messages")) {
                                    if (!Array.isArray(e.messages)) return "messages: array expected";
                                    for (var t = 0; t < e.messages.length; ++t) {
                                        var r = c.com.inbox.InboxMsg.verify(e.messages[t]);
                                        if (r) return "messages." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxMsgResp)) return e;
                                var t = new c.com.inbox.InboxMsgResp;
                                if (null != e.total && (t.total = 0 | e.total), e.messages) {
                                    if (!Array.isArray(e.messages)) throw TypeError(".com.inbox.InboxMsgResp.messages: array expected");
                                    t.messages = [];
                                    for (var r = 0; r < e.messages.length; ++r) {
                                        if ("object" !== typeof e.messages[r]) throw TypeError(".com.inbox.InboxMsgResp.messages: object expected");
                                        t.messages[r] = c.com.inbox.InboxMsg.fromObject(e.messages[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.messages = []), t.defaults && (r.total = 0), null != e.total && e.hasOwnProperty("total") && (r.total = e.total), e.messages && e.messages.length) {
                                    r.messages = [];
                                    for (var n = 0; n < e.messages.length; ++n) r.messages[n] = c.com.inbox.InboxMsg.toObject(e.messages[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.InboxMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.id = "", e.prototype.moduleId = 0, e.prototype.title = "", e.prototype.content = "", e.prototype.insertTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.activity = "", e.prototype.iosLink = "", e.prototype.androidLink = "", e.prototype.icon = "", e.prototype.status = 0, e.prototype.tagId = 0, e.prototype.linkText = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(10).string(e.id), null != e.moduleId && Object.hasOwnProperty.call(e, "moduleId") && t.uint32(16).int32(e.moduleId), null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(26).string(e.title), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(34).string(e.content), null != e.insertTime && Object.hasOwnProperty.call(e, "insertTime") && t.uint32(40).int64(e.insertTime), null != e.activity && Object.hasOwnProperty.call(e, "activity") && t.uint32(50).string(e.activity), null != e.iosLink && Object.hasOwnProperty.call(e, "iosLink") && t.uint32(58).string(e.iosLink), null != e.androidLink && Object.hasOwnProperty.call(e, "androidLink") && t.uint32(66).string(e.androidLink), null != e.icon && Object.hasOwnProperty.call(e, "icon") && t.uint32(74).string(e.icon), null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(80).int32(e.status), null != e.tagId && Object.hasOwnProperty.call(e, "tagId") && t.uint32(88).int32(e.tagId), null != e.linkText && Object.hasOwnProperty.call(e, "linkText") && t.uint32(98).string(e.linkText), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.id = e.string();
                                            break;
                                        case 2:
                                            i.moduleId = e.int32();
                                            break;
                                        case 3:
                                            i.title = e.string();
                                            break;
                                        case 4:
                                            i.content = e.string();
                                            break;
                                        case 5:
                                            i.insertTime = e.int64();
                                            break;
                                        case 6:
                                            i.activity = e.string();
                                            break;
                                        case 7:
                                            i.iosLink = e.string();
                                            break;
                                        case 8:
                                            i.androidLink = e.string();
                                            break;
                                        case 9:
                                            i.icon = e.string();
                                            break;
                                        case 10:
                                            i.status = e.int32();
                                            break;
                                        case 11:
                                            i.tagId = e.int32();
                                            break;
                                        case 12:
                                            i.linkText = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !a.isString(e.id) ? "id: string expected" : null != e.moduleId && e.hasOwnProperty("moduleId") && !a.isInteger(e.moduleId) ? "moduleId: integer expected" : null != e.title && e.hasOwnProperty("title") && !a.isString(e.title) ? "title: string expected" : null != e.content && e.hasOwnProperty("content") && !a.isString(e.content) ? "content: string expected" : null == e.insertTime || !e.hasOwnProperty("insertTime") || a.isInteger(e.insertTime) || e.insertTime && a.isInteger(e.insertTime.low) && a.isInteger(e.insertTime.high) ? null != e.activity && e.hasOwnProperty("activity") && !a.isString(e.activity) ? "activity: string expected" : null != e.iosLink && e.hasOwnProperty("iosLink") && !a.isString(e.iosLink) ? "iosLink: string expected" : null != e.androidLink && e.hasOwnProperty("androidLink") && !a.isString(e.androidLink) ? "androidLink: string expected" : null != e.icon && e.hasOwnProperty("icon") && !a.isString(e.icon) ? "icon: string expected" : null != e.status && e.hasOwnProperty("status") && !a.isInteger(e.status) ? "status: integer expected" : null != e.tagId && e.hasOwnProperty("tagId") && !a.isInteger(e.tagId) ? "tagId: integer expected" : null != e.linkText && e.hasOwnProperty("linkText") && !a.isString(e.linkText) ? "linkText: string expected" : null : "insertTime: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxMsg)) return e;
                                var t = new c.com.inbox.InboxMsg;
                                return null != e.id && (t.id = String(e.id)), null != e.moduleId && (t.moduleId = 0 | e.moduleId), null != e.title && (t.title = String(e.title)), null != e.content && (t.content = String(e.content)), null != e.insertTime && (a.Long ? (t.insertTime = a.Long.fromValue(e.insertTime)).unsigned = !1 : "string" === typeof e.insertTime ? t.insertTime = parseInt(e.insertTime, 10) : "number" === typeof e.insertTime ? t.insertTime = e.insertTime : "object" === typeof e.insertTime && (t.insertTime = new a.LongBits(e.insertTime.low >>> 0, e.insertTime.high >>> 0).toNumber())), null != e.activity && (t.activity = String(e.activity)), null != e.iosLink && (t.iosLink = String(e.iosLink)), null != e.androidLink && (t.androidLink = String(e.androidLink)), null != e.icon && (t.icon = String(e.icon)), null != e.status && (t.status = 0 | e.status), null != e.tagId && (t.tagId = 0 | e.tagId), null != e.linkText && (t.linkText = String(e.linkText)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.id = "", r.moduleId = 0, r.title = "", r.content = "", a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.insertTime = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.insertTime = t.longs === String ? "0" : 0;
                                    r.activity = "", r.iosLink = "", r.androidLink = "", r.icon = "", r.status = 0, r.tagId = 0, r.linkText = ""
                                }
                                return null != e.id && e.hasOwnProperty("id") && (r.id = e.id), null != e.moduleId && e.hasOwnProperty("moduleId") && (r.moduleId = e.moduleId), null != e.title && e.hasOwnProperty("title") && (r.title = e.title), null != e.content && e.hasOwnProperty("content") && (r.content = e.content), null != e.insertTime && e.hasOwnProperty("insertTime") && ("number" === typeof e.insertTime ? r.insertTime = t.longs === String ? String(e.insertTime) : e.insertTime : r.insertTime = t.longs === String ? a.Long.prototype.toString.call(e.insertTime) : t.longs === Number ? new a.LongBits(e.insertTime.low >>> 0, e.insertTime.high >>> 0).toNumber() : e.insertTime), null != e.activity && e.hasOwnProperty("activity") && (r.activity = e.activity), null != e.iosLink && e.hasOwnProperty("iosLink") && (r.iosLink = e.iosLink), null != e.androidLink && e.hasOwnProperty("androidLink") && (r.androidLink = e.androidLink), null != e.icon && e.hasOwnProperty("icon") && (r.icon = e.icon), null != e.status && e.hasOwnProperty("status") && (r.status = e.status), null != e.tagId && e.hasOwnProperty("tagId") && (r.tagId = e.tagId), null != e.linkText && e.hasOwnProperty("linkText") && (r.linkText = e.linkText), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.InboxUnReadResp = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.moduleId = 0, e.prototype.userId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.moduleNum = 0, e.prototype.userNum = 0, e.prototype.activeDeviceCount = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.moduleId && Object.hasOwnProperty.call(e, "moduleId") && t.uint32(8).int32(e.moduleId), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(16).int64(e.userId), null != e.moduleNum && Object.hasOwnProperty.call(e, "moduleNum") && t.uint32(24).int32(e.moduleNum), null != e.userNum && Object.hasOwnProperty.call(e, "userNum") && t.uint32(32).int32(e.userNum), null != e.activeDeviceCount && Object.hasOwnProperty.call(e, "activeDeviceCount") && t.uint32(40).int32(e.activeDeviceCount), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxUnReadResp; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.moduleId = e.int32();
                                            break;
                                        case 2:
                                            i.userId = e.int64();
                                            break;
                                        case 3:
                                            i.moduleNum = e.int32();
                                            break;
                                        case 4:
                                            i.userNum = e.int32();
                                            break;
                                        case 5:
                                            i.activeDeviceCount = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.moduleId && e.hasOwnProperty("moduleId") && !a.isInteger(e.moduleId) ? "moduleId: integer expected" : null == e.userId || !e.hasOwnProperty("userId") || a.isInteger(e.userId) || e.userId && a.isInteger(e.userId.low) && a.isInteger(e.userId.high) ? null != e.moduleNum && e.hasOwnProperty("moduleNum") && !a.isInteger(e.moduleNum) ? "moduleNum: integer expected" : null != e.userNum && e.hasOwnProperty("userNum") && !a.isInteger(e.userNum) ? "userNum: integer expected" : null != e.activeDeviceCount && e.hasOwnProperty("activeDeviceCount") && !a.isInteger(e.activeDeviceCount) ? "activeDeviceCount: integer expected" : null : "userId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxUnReadResp)) return e;
                                var t = new c.com.inbox.InboxUnReadResp;
                                return null != e.moduleId && (t.moduleId = 0 | e.moduleId), null != e.userId && (a.Long ? (t.userId = a.Long.fromValue(e.userId)).unsigned = !1 : "string" === typeof e.userId ? t.userId = parseInt(e.userId, 10) : "number" === typeof e.userId ? t.userId = e.userId : "object" === typeof e.userId && (t.userId = new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber())), null != e.moduleNum && (t.moduleNum = 0 | e.moduleNum), null != e.userNum && (t.userNum = 0 | e.userNum), null != e.activeDeviceCount && (t.activeDeviceCount = 0 | e.activeDeviceCount), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.moduleId = 0, a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.userId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.userId = t.longs === String ? "0" : 0;
                                    r.moduleNum = 0, r.userNum = 0, r.activeDeviceCount = 0
                                }
                                return null != e.moduleId && e.hasOwnProperty("moduleId") && (r.moduleId = e.moduleId), null != e.userId && e.hasOwnProperty("userId") && ("number" === typeof e.userId ? r.userId = t.longs === String ? String(e.userId) : e.userId : r.userId = t.longs === String ? a.Long.prototype.toString.call(e.userId) : t.longs === Number ? new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber() : e.userId), null != e.moduleNum && e.hasOwnProperty("moduleNum") && (r.moduleNum = e.moduleNum), null != e.userNum && e.hasOwnProperty("userNum") && (r.userNum = e.userNum), null != e.activeDeviceCount && e.hasOwnProperty("activeDeviceCount") && (r.activeDeviceCount = e.activeDeviceCount), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.InboxNotificationMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.moduleId = 0, e.prototype.userId = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.moduleNum = 0, e.prototype.userNum = 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), null != e.moduleId && Object.hasOwnProperty.call(e, "moduleId") && t.uint32(8).int32(e.moduleId), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(16).int64(e.userId), null != e.moduleNum && Object.hasOwnProperty.call(e, "moduleNum") && t.uint32(24).int32(e.moduleNum), null != e.userNum && Object.hasOwnProperty.call(e, "userNum") && t.uint32(32).int32(e.userNum), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.inbox.InboxNotificationMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.moduleId = e.int32();
                                            break;
                                        case 2:
                                            i.userId = e.int64();
                                            break;
                                        case 3:
                                            i.moduleNum = e.int32();
                                            break;
                                        case 4:
                                            i.userNum = e.int32();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : null != e.moduleId && e.hasOwnProperty("moduleId") && !a.isInteger(e.moduleId) ? "moduleId: integer expected" : null == e.userId || !e.hasOwnProperty("userId") || a.isInteger(e.userId) || e.userId && a.isInteger(e.userId.low) && a.isInteger(e.userId.high) ? null != e.moduleNum && e.hasOwnProperty("moduleNum") && !a.isInteger(e.moduleNum) ? "moduleNum: integer expected" : null != e.userNum && e.hasOwnProperty("userNum") && !a.isInteger(e.userNum) ? "userNum: integer expected" : null : "userId: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.inbox.InboxNotificationMsg)) return e;
                                var t = new c.com.inbox.InboxNotificationMsg;
                                return null != e.moduleId && (t.moduleId = 0 | e.moduleId), null != e.userId && (a.Long ? (t.userId = a.Long.fromValue(e.userId)).unsigned = !1 : "string" === typeof e.userId ? t.userId = parseInt(e.userId, 10) : "number" === typeof e.userId ? t.userId = e.userId : "object" === typeof e.userId && (t.userId = new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber())), null != e.moduleNum && (t.moduleNum = 0 | e.moduleNum), null != e.userNum && (t.userNum = 0 | e.userNum), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.moduleId = 0, a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.userId = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.userId = t.longs === String ? "0" : 0;
                                    r.moduleNum = 0, r.userNum = 0
                                }
                                return null != e.moduleId && e.hasOwnProperty("moduleId") && (r.moduleId = e.moduleId), null != e.userId && e.hasOwnProperty("userId") && ("number" === typeof e.userId ? r.userId = t.longs === String ? String(e.userId) : e.userId : r.userId = t.longs === String ? a.Long.prototype.toString.call(e.userId) : t.longs === Number ? new a.LongBits(e.userId.low >>> 0, e.userId.high >>> 0).toNumber() : e.userId), null != e.moduleNum && e.hasOwnProperty("moduleNum") && (r.moduleNum = e.moduleNum), null != e.userNum && e.hasOwnProperty("userNum") && (r.userNum = e.userNum), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e
                    }(), e.asset = function() {
                        var e = {};
                        return e.AssetPushMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.type = "", e.prototype.symbol = "", e.prototype.base = "", e.prototype.quote = "", e.prototype.time = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.assetCode = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.type), null != e.symbol && Object.hasOwnProperty.call(e, "symbol") && t.uint32(18).string(e.symbol), null != e.base && Object.hasOwnProperty.call(e, "base") && t.uint32(26).string(e.base), null != e.quote && Object.hasOwnProperty.call(e, "quote") && t.uint32(34).string(e.quote), t.uint32(40).int64(e.time), null != e.assetCode && Object.hasOwnProperty.call(e, "assetCode") && t.uint32(50).string(e.assetCode), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.asset.AssetPushMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.type = e.string();
                                            break;
                                        case 2:
                                            i.symbol = e.string();
                                            break;
                                        case 3:
                                            i.base = e.string();
                                            break;
                                        case 4:
                                            i.quote = e.string();
                                            break;
                                        case 5:
                                            i.time = e.int64();
                                            break;
                                        case 6:
                                            i.assetCode = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("type")) throw a.ProtocolError("missing required 'type'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("time")) throw a.ProtocolError("missing required 'time'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.type) ? null != e.symbol && e.hasOwnProperty("symbol") && !a.isString(e.symbol) ? "symbol: string expected" : null != e.base && e.hasOwnProperty("base") && !a.isString(e.base) ? "base: string expected" : null != e.quote && e.hasOwnProperty("quote") && !a.isString(e.quote) ? "quote: string expected" : a.isInteger(e.time) || e.time && a.isInteger(e.time.low) && a.isInteger(e.time.high) ? null != e.assetCode && e.hasOwnProperty("assetCode") && !a.isString(e.assetCode) ? "assetCode: string expected" : null : "time: integer|Long expected" : "type: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.asset.AssetPushMsg)) return e;
                                var t = new c.com.asset.AssetPushMsg;
                                return null != e.type && (t.type = String(e.type)), null != e.symbol && (t.symbol = String(e.symbol)), null != e.base && (t.base = String(e.base)), null != e.quote && (t.quote = String(e.quote)), null != e.time && (a.Long ? (t.time = a.Long.fromValue(e.time)).unsigned = !1 : "string" === typeof e.time ? t.time = parseInt(e.time, 10) : "number" === typeof e.time ? t.time = e.time : "object" === typeof e.time && (t.time = new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), null != e.assetCode && (t.assetCode = String(e.assetCode)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (r.type = "", r.symbol = "", r.base = "", r.quote = "", a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.time = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.time = t.longs === String ? "0" : 0;
                                    r.assetCode = ""
                                }
                                return null != e.type && e.hasOwnProperty("type") && (r.type = e.type), null != e.symbol && e.hasOwnProperty("symbol") && (r.symbol = e.symbol), null != e.base && e.hasOwnProperty("base") && (r.base = e.base), null != e.quote && e.hasOwnProperty("quote") && (r.quote = e.quote), null != e.time && e.hasOwnProperty("time") && ("number" === typeof e.time ? r.time = t.longs === String ? String(e.time) : e.time : r.time = t.longs === String ? a.Long.prototype.toString.call(e.time) : t.longs === Number ? new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), null != e.assetCode && e.hasOwnProperty("assetCode") && (r.assetCode = e.assetCode), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e.AssetRateMsg = function() {
                            var e = function(e) {
                                if (this.rates = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.time = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.quote = "", e.prototype.scale = 0, e.prototype.rates = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), t.uint32(8).int64(e.time), t.uint32(18).string(e.quote), t.uint32(24).int32(e.scale), null != e.rates && e.rates.length)
                                    for (var r = 0; r < e.rates.length; ++r) c.com.asset.AssetRateMsg.AssetRateMessage.encode(e.rates[r], t.uint32(34).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.asset.AssetRateMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.time = e.int64();
                                            break;
                                        case 2:
                                            i.quote = e.string();
                                            break;
                                        case 3:
                                            i.scale = e.int32();
                                            break;
                                        case 4:
                                            i.rates && i.rates.length || (i.rates = []), i.rates.push(c.com.asset.AssetRateMsg.AssetRateMessage.decode(e, e.uint32()));
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("time")) throw a.ProtocolError("missing required 'time'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("quote")) throw a.ProtocolError("missing required 'quote'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("scale")) throw a.ProtocolError("missing required 'scale'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isInteger(e.time) && !(e.time && a.isInteger(e.time.low) && a.isInteger(e.time.high))) return "time: integer|Long expected";
                                if (!a.isString(e.quote)) return "quote: string expected";
                                if (!a.isInteger(e.scale)) return "scale: integer expected";
                                if (null != e.rates && e.hasOwnProperty("rates")) {
                                    if (!Array.isArray(e.rates)) return "rates: array expected";
                                    for (var t = 0; t < e.rates.length; ++t) {
                                        var r = c.com.asset.AssetRateMsg.AssetRateMessage.verify(e.rates[t]);
                                        if (r) return "rates." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.asset.AssetRateMsg)) return e;
                                var t = new c.com.asset.AssetRateMsg;
                                if (null != e.time && (a.Long ? (t.time = a.Long.fromValue(e.time)).unsigned = !1 : "string" === typeof e.time ? t.time = parseInt(e.time, 10) : "number" === typeof e.time ? t.time = e.time : "object" === typeof e.time && (t.time = new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), null != e.quote && (t.quote = String(e.quote)), null != e.scale && (t.scale = 0 | e.scale), e.rates) {
                                    if (!Array.isArray(e.rates)) throw TypeError(".com.asset.AssetRateMsg.rates: array expected");
                                    t.rates = [];
                                    for (var r = 0; r < e.rates.length; ++r) {
                                        if ("object" !== typeof e.rates[r]) throw TypeError(".com.asset.AssetRateMsg.rates: object expected");
                                        t.rates[r] = c.com.asset.AssetRateMsg.AssetRateMessage.fromObject(e.rates[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.rates = []), t.defaults) {
                                    if (a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.time = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.time = t.longs === String ? "0" : 0;
                                    r.quote = "", r.scale = 0
                                }
                                if (null != e.time && e.hasOwnProperty("time") && ("number" === typeof e.time ? r.time = t.longs === String ? String(e.time) : e.time : r.time = t.longs === String ? a.Long.prototype.toString.call(e.time) : t.longs === Number ? new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), null != e.quote && e.hasOwnProperty("quote") && (r.quote = e.quote), null != e.scale && e.hasOwnProperty("scale") && (r.scale = e.scale), e.rates && e.rates.length) {
                                    r.rates = [];
                                    for (var i = 0; i < e.rates.length; ++i) r.rates[i] = c.com.asset.AssetRateMsg.AssetRateMessage.toObject(e.rates[i], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.AssetRateMessage = function() {
                                var e = function(e) {
                                    if (e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.base = "", e.prototype.rate = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    return t || (t = s.create()), t.uint32(10).string(e.base), t.uint32(16).int64(e.rate), t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.asset.AssetRateMsg.AssetRateMessage; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.base = e.string();
                                                break;
                                            case 2:
                                                i.rate = e.int64();
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("base")) throw a.ProtocolError("missing required 'base'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("rate")) throw a.ProtocolError("missing required 'rate'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    return "object" !== typeof e || null === e ? "object expected" : a.isString(e.base) ? a.isInteger(e.rate) || e.rate && a.isInteger(e.rate.low) && a.isInteger(e.rate.high) ? null : "rate: integer|Long expected" : "base: string expected"
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.asset.AssetRateMsg.AssetRateMessage)) return e;
                                    var t = new c.com.asset.AssetRateMsg.AssetRateMessage;
                                    return null != e.base && (t.base = String(e.base)), null != e.rate && (a.Long ? (t.rate = a.Long.fromValue(e.rate)).unsigned = !1 : "string" === typeof e.rate ? t.rate = parseInt(e.rate, 10) : "number" === typeof e.rate ? t.rate = e.rate : "object" === typeof e.rate && (t.rate = new a.LongBits(e.rate.low >>> 0, e.rate.high >>> 0).toNumber())), t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    if (t.defaults)
                                        if (r.base = "", a.Long) {
                                            var n = new a.Long(0, 0, !1);
                                            r.rate = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                        } else r.rate = t.longs === String ? "0" : 0;
                                    return null != e.base && e.hasOwnProperty("base") && (r.base = e.base), null != e.rate && e.hasOwnProperty("rate") && ("number" === typeof e.rate ? r.rate = t.longs === String ? String(e.rate) : e.rate : r.rate = t.longs === String ? a.Long.prototype.toString.call(e.rate) : t.longs === Number ? new a.LongBits(e.rate.low >>> 0, e.rate.high >>> 0).toNumber() : e.rate), r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e
                            }(), e
                        }(), e.FundingBalanceMsg = function() {
                            var e = function(e) {
                                if (this.b = [], e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.b = a.emptyArray, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                if (t || (t = s.create()), null != e.b && e.b.length)
                                    for (var r = 0; r < e.b.length; ++r) c.com.asset.FundingBalanceMsg.B.encode(e.b[r], t.uint32(10).fork()).ldelim();
                                return t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.asset.FundingBalanceMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    if (s >>> 3 === 1) i.b && i.b.length || (i.b = []), i.b.push(c.com.asset.FundingBalanceMsg.B.decode(e, e.uint32()));
                                    else e.skipType(7 & s)
                                }
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (null != e.b && e.hasOwnProperty("b")) {
                                    if (!Array.isArray(e.b)) return "b: array expected";
                                    for (var t = 0; t < e.b.length; ++t) {
                                        var r = c.com.asset.FundingBalanceMsg.B.verify(e.b[t]);
                                        if (r) return "b." + r
                                    }
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.asset.FundingBalanceMsg)) return e;
                                var t = new c.com.asset.FundingBalanceMsg;
                                if (e.b) {
                                    if (!Array.isArray(e.b)) throw TypeError(".com.asset.FundingBalanceMsg.b: array expected");
                                    t.b = [];
                                    for (var r = 0; r < e.b.length; ++r) {
                                        if ("object" !== typeof e.b[r]) throw TypeError(".com.asset.FundingBalanceMsg.b: object expected");
                                        t.b[r] = c.com.asset.FundingBalanceMsg.B.fromObject(e.b[r])
                                    }
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if ((t.arrays || t.defaults) && (r.b = []), e.b && e.b.length) {
                                    r.b = [];
                                    for (var n = 0; n < e.b.length; ++n) r.b[n] = c.com.asset.FundingBalanceMsg.B.toObject(e.b[n], t)
                                }
                                return r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.B = function() {
                                var e = function(e) {
                                    if (e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.a = "", e.prototype.f = "", e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    return t || (t = s.create()), t.uint32(10).string(e.a), t.uint32(18).string(e.f), t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.asset.FundingBalanceMsg.B; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.a = e.string();
                                                break;
                                            case 2:
                                                i.f = e.string();
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("a")) throw a.ProtocolError("missing required 'a'", {
                                        instance: i
                                    });
                                    if (!i.hasOwnProperty("f")) throw a.ProtocolError("missing required 'f'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    return "object" !== typeof e || null === e ? "object expected" : a.isString(e.a) ? a.isString(e.f) ? null : "f: string expected" : "a: string expected"
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.asset.FundingBalanceMsg.B)) return e;
                                    var t = new c.com.asset.FundingBalanceMsg.B;
                                    return null != e.a && (t.a = String(e.a)), null != e.f && (t.f = String(e.f)), t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    return t.defaults && (r.a = "", r.f = ""), null != e.a && e.hasOwnProperty("a") && (r.a = e.a), null != e.f && e.hasOwnProperty("f") && (r.f = e.f), r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e
                            }(), e
                        }(), e
                    }(), e.earn = function() {
                        var e = {};
                        return e.EarnIndexMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.time = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.index = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(8).int64(e.time), t.uint32(18).string(e.index), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.earn.EarnIndexMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.time = e.int64();
                                            break;
                                        case 2:
                                            i.index = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("time")) throw a.ProtocolError("missing required 'time'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("index")) throw a.ProtocolError("missing required 'index'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isInteger(e.time) || e.time && a.isInteger(e.time.low) && a.isInteger(e.time.high) ? a.isString(e.index) ? null : "index: string expected" : "time: integer|Long expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.earn.EarnIndexMsg)) return e;
                                var t = new c.com.earn.EarnIndexMsg;
                                return null != e.time && (a.Long ? (t.time = a.Long.fromValue(e.time)).unsigned = !1 : "string" === typeof e.time ? t.time = parseInt(e.time, 10) : "number" === typeof e.time ? t.time = e.time : "object" === typeof e.time && (t.time = new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber())), null != e.index && (t.index = String(e.index)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults) {
                                    if (a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.time = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.time = t.longs === String ? "0" : 0;
                                    r.index = ""
                                }
                                return null != e.time && e.hasOwnProperty("time") && ("number" === typeof e.time ? r.time = t.longs === String ? String(e.time) : e.time : r.time = t.longs === String ? a.Long.prototype.toString.call(e.time) : t.longs === Number ? new a.LongBits(e.time.low >>> 0, e.time.high >>> 0).toNumber() : e.time), null != e.index && e.hasOwnProperty("index") && (r.index = e.index), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e
                    }(), e.nft = function() {
                        var e = {};
                        return e.NftInboxMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.id = "", e.prototype.moduleId = 0, e.prototype.title = "", e.prototype.bizType = "", e.prototype.content = "", e.prototype.ts = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.id), null != e.moduleId && Object.hasOwnProperty.call(e, "moduleId") && t.uint32(16).int32(e.moduleId), null != e.title && Object.hasOwnProperty.call(e, "title") && t.uint32(26).string(e.title), null != e.bizType && Object.hasOwnProperty.call(e, "bizType") && t.uint32(34).string(e.bizType), null != e.content && Object.hasOwnProperty.call(e, "content") && t.uint32(42).string(e.content), t.uint32(48).int64(e.ts), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.nft.NftInboxMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.id = e.string();
                                            break;
                                        case 2:
                                            i.moduleId = e.int32();
                                            break;
                                        case 3:
                                            i.title = e.string();
                                            break;
                                        case 4:
                                            i.bizType = e.string();
                                            break;
                                        case 5:
                                            i.content = e.string();
                                            break;
                                        case 6:
                                            i.ts = e.int64();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("id")) throw a.ProtocolError("missing required 'id'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("ts")) throw a.ProtocolError("missing required 'ts'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.id) ? null != e.moduleId && e.hasOwnProperty("moduleId") && !a.isInteger(e.moduleId) ? "moduleId: integer expected" : null != e.title && e.hasOwnProperty("title") && !a.isString(e.title) ? "title: string expected" : null != e.bizType && e.hasOwnProperty("bizType") && !a.isString(e.bizType) ? "bizType: string expected" : null != e.content && e.hasOwnProperty("content") && !a.isString(e.content) ? "content: string expected" : a.isInteger(e.ts) || e.ts && a.isInteger(e.ts.low) && a.isInteger(e.ts.high) ? null : "ts: integer|Long expected" : "id: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.nft.NftInboxMsg)) return e;
                                var t = new c.com.nft.NftInboxMsg;
                                return null != e.id && (t.id = String(e.id)), null != e.moduleId && (t.moduleId = 0 | e.moduleId), null != e.title && (t.title = String(e.title)), null != e.bizType && (t.bizType = String(e.bizType)), null != e.content && (t.content = String(e.content)), null != e.ts && (a.Long ? (t.ts = a.Long.fromValue(e.ts)).unsigned = !1 : "string" === typeof e.ts ? t.ts = parseInt(e.ts, 10) : "number" === typeof e.ts ? t.ts = e.ts : "object" === typeof e.ts && (t.ts = new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber())), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                if (t.defaults)
                                    if (r.id = "", r.moduleId = 0, r.title = "", r.bizType = "", r.content = "", a.Long) {
                                        var n = new a.Long(0, 0, !1);
                                        r.ts = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n
                                    } else r.ts = t.longs === String ? "0" : 0;
                                return null != e.id && e.hasOwnProperty("id") && (r.id = e.id), null != e.moduleId && e.hasOwnProperty("moduleId") && (r.moduleId = e.moduleId), null != e.title && e.hasOwnProperty("title") && (r.title = e.title), null != e.bizType && e.hasOwnProperty("bizType") && (r.bizType = e.bizType), null != e.content && e.hasOwnProperty("content") && (r.content = e.content), null != e.ts && e.hasOwnProperty("ts") && ("number" === typeof e.ts ? r.ts = t.longs === String ? String(e.ts) : e.ts : r.ts = t.longs === String ? a.Long.prototype.toString.call(e.ts) : t.longs === Number ? new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber() : e.ts), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e
                    }(), e.push = function() {
                        var e = {};
                        return e.PushMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.body = "", e.prototype.title = "", e.prototype.tag = "", e.prototype.action = "", e.prototype.internalPage = "", e.prototype.icon = "", e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.body), t.uint32(18).string(e.title), t.uint32(26).string(e.tag), null != e.action && Object.hasOwnProperty.call(e, "action") && t.uint32(34).string(e.action), null != e.internalPage && Object.hasOwnProperty.call(e, "internalPage") && t.uint32(42).string(e.internalPage), null != e.icon && Object.hasOwnProperty.call(e, "icon") && t.uint32(50).string(e.icon), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.push.PushMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.body = e.string();
                                            break;
                                        case 2:
                                            i.title = e.string();
                                            break;
                                        case 3:
                                            i.tag = e.string();
                                            break;
                                        case 4:
                                            i.action = e.string();
                                            break;
                                        case 5:
                                            i.internalPage = e.string();
                                            break;
                                        case 6:
                                            i.icon = e.string();
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("body")) throw a.ProtocolError("missing required 'body'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("title")) throw a.ProtocolError("missing required 'title'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("tag")) throw a.ProtocolError("missing required 'tag'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                return "object" !== typeof e || null === e ? "object expected" : a.isString(e.body) ? a.isString(e.title) ? a.isString(e.tag) ? null != e.action && e.hasOwnProperty("action") && !a.isString(e.action) ? "action: string expected" : null != e.internalPage && e.hasOwnProperty("internalPage") && !a.isString(e.internalPage) ? "internalPage: string expected" : null != e.icon && e.hasOwnProperty("icon") && !a.isString(e.icon) ? "icon: string expected" : null : "tag: string expected" : "title: string expected" : "body: string expected"
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.push.PushMsg)) return e;
                                var t = new c.com.push.PushMsg;
                                return null != e.body && (t.body = String(e.body)), null != e.title && (t.title = String(e.title)), null != e.tag && (t.tag = String(e.tag)), null != e.action && (t.action = String(e.action)), null != e.internalPage && (t.internalPage = String(e.internalPage)), null != e.icon && (t.icon = String(e.icon)), t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.body = "", r.title = "", r.tag = "", r.action = "", r.internalPage = "", r.icon = ""), null != e.body && e.hasOwnProperty("body") && (r.body = e.body), null != e.title && e.hasOwnProperty("title") && (r.title = e.title), null != e.tag && e.hasOwnProperty("tag") && (r.tag = e.tag), null != e.action && e.hasOwnProperty("action") && (r.action = e.action), null != e.internalPage && e.hasOwnProperty("internalPage") && (r.internalPage = e.internalPage), null != e.icon && e.hasOwnProperty("icon") && (r.icon = e.icon), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e
                        }(), e
                    }(), e.web3 = function() {
                        var e = {};
                        return e.TxStatusEventMsg = function() {
                            var e = function(e) {
                                if (e)
                                    for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                            };
                            return e.prototype.type = "", e.prototype.binanceChainId = "", e.prototype.address = "", e.prototype.orderId = "", e.prototype.txHash = "", e.prototype.status = "", e.prototype.txType = "", e.prototype.subType = "", e.prototype.send = null, e.prototype.receive = null, e.prototype.register = null, e.prototype.approve = null, e.create = function(t) {
                                return new e(t)
                            }, e.encode = function(e, t) {
                                return t || (t = s.create()), t.uint32(10).string(e.type), t.uint32(18).string(e.binanceChainId), t.uint32(26).string(e.address), null != e.orderId && Object.hasOwnProperty.call(e, "orderId") && t.uint32(34).string(e.orderId), t.uint32(42).string(e.txHash), t.uint32(50).string(e.status), t.uint32(58).string(e.txType), t.uint32(66).string(e.subType), null != e.send && Object.hasOwnProperty.call(e, "send") && c.com.web3.TxStatusEventMsg.Detail.encode(e.send, t.uint32(74).fork()).ldelim(), null != e.receive && Object.hasOwnProperty.call(e, "receive") && c.com.web3.TxStatusEventMsg.Detail.encode(e.receive, t.uint32(82).fork()).ldelim(), null != e.register && Object.hasOwnProperty.call(e, "register") && c.com.web3.TxStatusEventMsg.Detail.encode(e.register, t.uint32(90).fork()).ldelim(), null != e.approve && Object.hasOwnProperty.call(e, "approve") && c.com.web3.TxStatusEventMsg.Detail.encode(e.approve, t.uint32(98).fork()).ldelim(), t
                            }, e.encodeDelimited = function(e, t) {
                                return this.encode(e, t).ldelim()
                            }, e.decode = function(e, t) {
                                (0, n._)(e, o) || (e = o.create(e));
                                for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.web3.TxStatusEventMsg; e.pos < r;) {
                                    var s = e.uint32();
                                    switch (s >>> 3) {
                                        case 1:
                                            i.type = e.string();
                                            break;
                                        case 2:
                                            i.binanceChainId = e.string();
                                            break;
                                        case 3:
                                            i.address = e.string();
                                            break;
                                        case 4:
                                            i.orderId = e.string();
                                            break;
                                        case 5:
                                            i.txHash = e.string();
                                            break;
                                        case 6:
                                            i.status = e.string();
                                            break;
                                        case 7:
                                            i.txType = e.string();
                                            break;
                                        case 8:
                                            i.subType = e.string();
                                            break;
                                        case 9:
                                            i.send = c.com.web3.TxStatusEventMsg.Detail.decode(e, e.uint32());
                                            break;
                                        case 10:
                                            i.receive = c.com.web3.TxStatusEventMsg.Detail.decode(e, e.uint32());
                                            break;
                                        case 11:
                                            i.register = c.com.web3.TxStatusEventMsg.Detail.decode(e, e.uint32());
                                            break;
                                        case 12:
                                            i.approve = c.com.web3.TxStatusEventMsg.Detail.decode(e, e.uint32());
                                            break;
                                        default:
                                            e.skipType(7 & s)
                                    }
                                }
                                if (!i.hasOwnProperty("type")) throw a.ProtocolError("missing required 'type'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("binanceChainId")) throw a.ProtocolError("missing required 'binanceChainId'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("address")) throw a.ProtocolError("missing required 'address'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("txHash")) throw a.ProtocolError("missing required 'txHash'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("status")) throw a.ProtocolError("missing required 'status'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("txType")) throw a.ProtocolError("missing required 'txType'", {
                                    instance: i
                                });
                                if (!i.hasOwnProperty("subType")) throw a.ProtocolError("missing required 'subType'", {
                                    instance: i
                                });
                                return i
                            }, e.decodeDelimited = function(e) {
                                return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                            }, e.verify = function(e) {
                                if ("object" !== typeof e || null === e) return "object expected";
                                if (!a.isString(e.type)) return "type: string expected";
                                if (!a.isString(e.binanceChainId)) return "binanceChainId: string expected";
                                if (!a.isString(e.address)) return "address: string expected";
                                if (null != e.orderId && e.hasOwnProperty("orderId") && !a.isString(e.orderId)) return "orderId: string expected";
                                if (!a.isString(e.txHash)) return "txHash: string expected";
                                if (!a.isString(e.status)) return "status: string expected";
                                if (!a.isString(e.txType)) return "txType: string expected";
                                if (!a.isString(e.subType)) return "subType: string expected";
                                if (null != e.send && e.hasOwnProperty("send")) {
                                    var t = c.com.web3.TxStatusEventMsg.Detail.verify(e.send);
                                    if (t) return "send." + t
                                }
                                if (null != e.receive && e.hasOwnProperty("receive")) {
                                    var r = c.com.web3.TxStatusEventMsg.Detail.verify(e.receive);
                                    if (r) return "receive." + r
                                }
                                if (null != e.register && e.hasOwnProperty("register")) {
                                    var n = c.com.web3.TxStatusEventMsg.Detail.verify(e.register);
                                    if (n) return "register." + n
                                }
                                if (null != e.approve && e.hasOwnProperty("approve")) {
                                    var i = c.com.web3.TxStatusEventMsg.Detail.verify(e.approve);
                                    if (i) return "approve." + i
                                }
                                return null
                            }, e.fromObject = function(e) {
                                if ((0, n._)(e, c.com.web3.TxStatusEventMsg)) return e;
                                var t = new c.com.web3.TxStatusEventMsg;
                                if (null != e.type && (t.type = String(e.type)), null != e.binanceChainId && (t.binanceChainId = String(e.binanceChainId)), null != e.address && (t.address = String(e.address)), null != e.orderId && (t.orderId = String(e.orderId)), null != e.txHash && (t.txHash = String(e.txHash)), null != e.status && (t.status = String(e.status)), null != e.txType && (t.txType = String(e.txType)), null != e.subType && (t.subType = String(e.subType)), null != e.send) {
                                    if ("object" !== typeof e.send) throw TypeError(".com.web3.TxStatusEventMsg.send: object expected");
                                    t.send = c.com.web3.TxStatusEventMsg.Detail.fromObject(e.send)
                                }
                                if (null != e.receive) {
                                    if ("object" !== typeof e.receive) throw TypeError(".com.web3.TxStatusEventMsg.receive: object expected");
                                    t.receive = c.com.web3.TxStatusEventMsg.Detail.fromObject(e.receive)
                                }
                                if (null != e.register) {
                                    if ("object" !== typeof e.register) throw TypeError(".com.web3.TxStatusEventMsg.register: object expected");
                                    t.register = c.com.web3.TxStatusEventMsg.Detail.fromObject(e.register)
                                }
                                if (null != e.approve) {
                                    if ("object" !== typeof e.approve) throw TypeError(".com.web3.TxStatusEventMsg.approve: object expected");
                                    t.approve = c.com.web3.TxStatusEventMsg.Detail.fromObject(e.approve)
                                }
                                return t
                            }, e.toObject = function(e, t) {
                                t || (t = {});
                                var r = {};
                                return t.defaults && (r.type = "", r.binanceChainId = "", r.address = "", r.orderId = "", r.txHash = "", r.status = "", r.txType = "", r.subType = "", r.send = null, r.receive = null, r.register = null, r.approve = null), null != e.type && e.hasOwnProperty("type") && (r.type = e.type), null != e.binanceChainId && e.hasOwnProperty("binanceChainId") && (r.binanceChainId = e.binanceChainId), null != e.address && e.hasOwnProperty("address") && (r.address = e.address), null != e.orderId && e.hasOwnProperty("orderId") && (r.orderId = e.orderId), null != e.txHash && e.hasOwnProperty("txHash") && (r.txHash = e.txHash), null != e.status && e.hasOwnProperty("status") && (r.status = e.status), null != e.txType && e.hasOwnProperty("txType") && (r.txType = e.txType), null != e.subType && e.hasOwnProperty("subType") && (r.subType = e.subType), null != e.send && e.hasOwnProperty("send") && (r.send = c.com.web3.TxStatusEventMsg.Detail.toObject(e.send, t)), null != e.receive && e.hasOwnProperty("receive") && (r.receive = c.com.web3.TxStatusEventMsg.Detail.toObject(e.receive, t)), null != e.register && e.hasOwnProperty("register") && (r.register = c.com.web3.TxStatusEventMsg.Detail.toObject(e.register, t)), null != e.approve && e.hasOwnProperty("approve") && (r.approve = c.com.web3.TxStatusEventMsg.Detail.toObject(e.approve, t)), r
                            }, e.prototype.toJSON = function() {
                                return this.constructor.toObject(this, i.util.toJSONOptions)
                            }, e.Detail = function() {
                                var e = function(e) {
                                    if (e)
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && (this[t[r]] = e[t[r]])
                                };
                                return e.prototype.tokenSymbol = "", e.prototype.amount = "", e.prototype.decimals = 0, e.create = function(t) {
                                    return new e(t)
                                }, e.encode = function(e, t) {
                                    return t || (t = s.create()), t.uint32(10).string(e.tokenSymbol), null != e.amount && Object.hasOwnProperty.call(e, "amount") && t.uint32(18).string(e.amount), null != e.decimals && Object.hasOwnProperty.call(e, "decimals") && t.uint32(24).int32(e.decimals), t
                                }, e.encodeDelimited = function(e, t) {
                                    return this.encode(e, t).ldelim()
                                }, e.decode = function(e, t) {
                                    (0, n._)(e, o) || (e = o.create(e));
                                    for (var r = void 0 === t ? e.len : e.pos + t, i = new c.com.web3.TxStatusEventMsg.Detail; e.pos < r;) {
                                        var s = e.uint32();
                                        switch (s >>> 3) {
                                            case 1:
                                                i.tokenSymbol = e.string();
                                                break;
                                            case 2:
                                                i.amount = e.string();
                                                break;
                                            case 3:
                                                i.decimals = e.int32();
                                                break;
                                            default:
                                                e.skipType(7 & s)
                                        }
                                    }
                                    if (!i.hasOwnProperty("tokenSymbol")) throw a.ProtocolError("missing required 'tokenSymbol'", {
                                        instance: i
                                    });
                                    return i
                                }, e.decodeDelimited = function(e) {
                                    return (0, n._)(e, o) || (e = new o(e)), this.decode(e, e.uint32())
                                }, e.verify = function(e) {
                                    return "object" !== typeof e || null === e ? "object expected" : a.isString(e.tokenSymbol) ? null != e.amount && e.hasOwnProperty("amount") && !a.isString(e.amount) ? "amount: string expected" : null != e.decimals && e.hasOwnProperty("decimals") && !a.isInteger(e.decimals) ? "decimals: integer expected" : null : "tokenSymbol: string expected"
                                }, e.fromObject = function(e) {
                                    if ((0, n._)(e, c.com.web3.TxStatusEventMsg.Detail)) return e;
                                    var t = new c.com.web3.TxStatusEventMsg.Detail;
                                    return null != e.tokenSymbol && (t.tokenSymbol = String(e.tokenSymbol)), null != e.amount && (t.amount = String(e.amount)), null != e.decimals && (t.decimals = 0 | e.decimals), t
                                }, e.toObject = function(e, t) {
                                    t || (t = {});
                                    var r = {};
                                    return t.defaults && (r.tokenSymbol = "", r.amount = "", r.decimals = 0), null != e.tokenSymbol && e.hasOwnProperty("tokenSymbol") && (r.tokenSymbol = e.tokenSymbol), null != e.amount && e.hasOwnProperty("amount") && (r.amount = e.amount), null != e.decimals && e.hasOwnProperty("decimals") && (r.decimals = e.decimals), r
                                }, e.prototype.toJSON = function() {
                                    return this.constructor.toObject(this, i.util.toJSONOptions)
                                }, e
                            }(), e
                        }(), e
                    }(), e
                }()
        }
    }
]);