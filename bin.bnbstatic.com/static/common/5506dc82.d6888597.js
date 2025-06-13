! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "339ca598-2634-5589-b4fd-e9dc4049b442")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [1478], {
        vkN1: (c, t, e) => {
            "use strict";
            e.d(t, {
                A: () => v
            });
            var a = "/bapi/c2c",
                r = "/bapi/composite",
                i = "/bapi/kyc",
                n = "/bapi/asset",
                o = "/bapi/apex";
            const v = {
                MEDIA_UPLOAD: "".concat(a, "/v1/private/c2c/file-upload/s3-transcoding-presigned-url"),
                DOC_UPLOAD: "".concat(a, "/v1/private/c2c/file-upload/s3-antivirus-presigned-url"),
                SENSOR: "".concat(r, "/v1/public/common/config/url-and-project"),
                GET_DYNAMIC_WSS: "".concat(r, "/v1/public/common/config/client/dynamic-domain"),
                USER_INFO: "".concat(r, "/v1/private/account/user/base-detail"),
                GET_DEFAULT_FIAT_CURRENCY: "".concat(o, "/v1/friendly/apex/market/getDefaultFiatCurrency"),
                GET_IS_NEW_USER_ON_BOARDING: "".concat(a, "/v1/private/c2c/user/is-new-user-onboarding"),
                POST_USER_TOTAL_BTC: "".concat(n, "/v1/private/asset-service/asset/total-btc-valuation"),
                GET_USER_MIGRATE_QUERY_STATUS: "".concat(n, "/v1/private/asset-service/user-migrate/query-status"),
                GET_ALL_ASSET: "".concat(n, "/v2/public/asset/asset/get-all-asset"),
                GET_PRODUCT_DYNAMIC: "".concat(n, "/v2/public/asset-service/product/get-product-dynamic"),
                GET_IS_DISCLAIMER: "".concat(a, "/v1/friendly/c2c/user/is-agreement-disclaimer-required"),
                POST_DISCLAIMER_ACCEPT: "".concat(a, "/v1/private/c2c/user/disclaimer-accept"),
                GET_WEBSOCEKT_KEY: "".concat(a, "/v1/private/c2c/chat/ping-by-type?pingType=C2C"),
                GET_PING_TYPE: "".concat(a, "/v1/private/c2c/chat/ping-by-type"),
                POST_FRIENDLY_FIAT_LIST: "".concat(a, "/v1/friendly/c2c/trade-rule/fiat-list"),
                POST_ASSET_LIST: "".concat(a, "/v1/public/c2c/trade-rule/asset-list"),
                POST_C2C_USERINFO: "".concat(a, "/v1/private/c2c/user/base-detail"),
                POST_C2C_MAKEORDER: "".concat(a, "/v3/private/c2c/order-match/makeOrder"),
                POST_C2C_PLACE_ORDER: "".concat(a, "/v3/private/c2c/order-match/placeOrder"),
                POST_PAGE_TRADE_CONFIG: "".concat(a, "/v2/friendly/c2c/portal/config"),
                GET_NEW_TRADE_METHOD_LIST: "".concat(a, "/v2/public/c2c/trade-method/list-by-page"),
                GET_ONLINE_METHOD_LIST: "".concat(a, "/v2/public/c2c/trade-method/list-online-identifiers"),
                POST_ADV_SHARE_NO: "".concat(a, "/v1/public/c2c/share/shared-adv"),
                POST_PAYMENT_PROOF_CHECK_V2: "".concat(a, "/v2/private/c2c/order-match/payment-proof-check"),
                GET_IS_NEW_USER: "".concat(a, "/v1/private/c2c/user/is-new-user"),
                USER_ASSET: "".concat(a, "/v1/private/c2c/asset/balance?stamp=").concat((new Date).getTime()),
                POST_SECURITY_FACE_STATUS: "".concat(a, "/v1/private/c2c/user/get-security-face-status"),
                POST_ADV_LIST: "".concat(a, "/v2/friendly/c2c/adv/search"),
                GET_MERCHANT_PROFILE_AND_ADV_LIST: "".concat(a, "/v2/private/c2c/user/share-ads-and-profile"),
                POST_PROTO_CONFIRM: "".concat(a, "/v1/private/c2c/user/fiat-protocol-confirm"),
                GET_PAYMENT_INFO: "".concat(a, "/v2/private/c2c/trade-method/detail"),
                POST_USER_PAYMENT: "".concat(a, "/v2/private/c2c/pay-method/user-paymethods"),
                SHAREABLE_PAYMENT_LIST: "".concat(a, "/v2/private/c2c/pay-method/share"),
                SELLER_PAYABLE_PAYMENT_METHODS: "".concat(a, "/v2/private/c2c/pay-method/seller-payable-paymethod"),
                GET_ADV_DETAIL_ONE: "".concat(a, "/v2/public/c2c/adv/selected-adv"),
                POST_C2C_RECOMMENDED: "".concat(a, "/v2/public/c2c/adv/filter-conditions"),
                GET_PRIVILEGE_ADV: "".concat(a, "/v2/friendly/c2c/adv/privilege-adv"),
                POST_OPTIMAL_ORDER_PRICE_V2: "".concat(a, "/v2/private/c2c/order-match/get-optimal-order-prices"),
                POST_OPTIMAL_PRICE_LIMIT: "".concat(a, "/v1/public/c2c/portal/fiat-trans-limit"),
                GET_ORDER_LIST_V2: "".concat(a, "/v2/private/c2c/order-match/order-list"),
                GET_ORDER_LIST_ARCHIVED: "".concat(a, "/v1/private/c2c/order-match/order-list-archived-involved"),
                GET_CANCEL_ORDER_REASONS: "".concat(a, "/v1/private/c2c/order-match/order-cancel-reasons"),
                CANCEL_ORDER: "".concat(a, "/v2/private/c2c/order-match/cancelOrder"),
                deprecated_CONFIRM_ORDER_PAID: "".concat(a, "/v1/private/c2c/order-match/confirmOrderPayed"),
                CONFIRM_ORDER_PAID: "".concat(a, "/v1/private/c2c/order-match/confirm-order-payed"),
                ADDITIONAL_KYC_VERIFY: "".concat(a, "/v1/private/c2c/order-match/additional-kyc/verify"),
                GET_ORDER_DETAIL_V2: "".concat(a, "/v2/private/c2c/order-match/order-detail"),
                NOTIFY_ORDER_PAYED: "".concat(a, "/v1/private/c2c/order-match/notifyOrderPayed"),
                CHECK_ORDER_T1_TIPS: "".concat(a, "/v2/private/c2c/order-match/tips"),
                POST_ORDER_UNDO_LISTS: "".concat(a, "/v1/private/c2c/order-match/getUserUndoOrderNumbers"),
                GET_ORDER_DOWNLOAD: "".concat(a, "/v1/private/c2c/order-match/downloadOrders"),
                POST_ORDER_CANCEL_CHECK: "".concat(a, "/v1/private/c2c/order-match/cancel-check"),
                POST_ORDER_CANCEL_CHECK_V2: "".concat(a, "/v2/private/c2c/order-match/check-cancel-order"),
                POST_ORDER_CONFIRM_CHECK: "".concat(a, "/v1/private/c2c/order-match/confirm-check"),
                POST_DECIDE_SELLER_CANCEL: "".concat(a, "/v2/private/c2c/order-match/decide-seller-cancel"),
                APPEAL_RISK_CHECK: "".concat(a, "/v1/private/c2c/complaint/risk-check"),
                MERCHANT_ORDER_LIST: "".concat(a, "/v1/private/c2c/order-match/getOrderMatchListByMerchant"),
                CHECK_MAKE_ORDER: "".concat(a, "/v2/private/c2c/order-match/checkMakeOrder"),
                GET_UNREAD_MESSAGE: "".concat(a, "/v1/private/c2c/order-match/check-unread-messages"),
                GET_ORDER_LIST_WITH_UNREAD_MESSAGE: "".concat(a, "/v1/private/c2c/order-match/order-list-with-unread-message"),
                GET_ORDER_LIST_WITH_UNREAD_MESSAGE_PAGE: "".concat(a, "/v1/private/c2c/order-match/paginated-orders-with-unread-messages-list"),
                GET_SELLER_REASON_CANCEL: "".concat(a, "/v2/private/c2c/order-match/can-seller-reason-cancel"),
                GET_SELLER_CANCEL_REASON_TTL: "".concat(a, "/v1/public/c2c/sys-config/seller-cancel-reason-ttl"),
                GET_TRADE_ORDER_HISTORY: "".concat(a, "/v1/private/c2c/order-match/order-list-user-trade"),
                GET_TRADE_TIMES: "".concat(a, "/v1/private/c2c/order-match/get-trade-times"),
                REMIND_COUNTER_PARTY_CHECK: "".concat(a, "/v2/private/c2c/order-match/check-can-remind-counter-party"),
                REMIND_COUNTER_PARTY: "".concat(a, "/v2/private/c2c/order-match/remind-counter-party"),
                CHECK_QUICK_RELEASE_CANCEL: "".concat(a, "/v2/private/c2c/order-match/check-force-complete"),
                FORCE_QUICK_RELEASE: "".concat(a, "/v2/private/c2c/order-match/force-release"),
                FORCE_QUICK_CANCEL: "".concat(a, "/v2/private/c2c/order-match/force-cancel"),
                GET_CHAT_BY_PAGE: "".concat(a, "/v1/private/c2c/chat/query-chat-by-page"),
                GET_WEBSOCEKT_TOKEN: "".concat(a, "/v1/private/c2c/chat/ping-chat-stream"),
                GET_UPLOAD_URL: "".concat(a, "/v1/private/c2c/chat/img/pre-upload"),
                POST_GET_RISK_WARNING_HINTS: "".concat(a, "/v1/private/c2c/chat/get-risk-warning-hints"),
                POST_MYPOSTS_LIST: "".concat(a, "/v2/private/c2c/adv/list-by-page"),
                POST_MYPOSTS_UPDATE: "".concat(a, "/v2/private/c2c/adv/update-status"),
                UPDATE_ADV_LIST_STATUS: "".concat(a, "/v1/private/c2c/adv-order/updateAdvListStatus"),
                POST_HOD_ADV_DETAIL: "".concat(a, "/v2/private/c2c/adv/detail"),
                GET_ADV_DETAIL: "".concat(a, "/v2/public/c2c/adv/detail"),
                GET_ADV_DETAIL_WITH_ADVERTISER: "".concat(a, "/v2/public/c2c/adv/detail-with-advertiser"),
                POST_QUOTED_PRICE: "".concat(a, "/v2/public/c2c/adv/quoted-price"),
                GET_ADV_GLOBAL_CONFIG: "".concat(a, "/v1/private/c2c/sys-config/adv-global-config"),
                POST_ADV_TRANS_AMOUNT_LIMIT: "".concat(a, "/v1/private/c2c/sys-config/adv-trans-amount-limit"),
                GET_EXCHANGE_RATE_LIST: "".concat(a, "/v1/private/c2c/merchant/get-exchange-rate-list"),
                POST_EDIT_ADV: "".concat(a, "/v3/private/c2c/adv/update"),
                CANCEL_APPEAL: "".concat(a, "/v1/private/c2c/complaint/cancel"),
                GET_APPEAL_UPLOAD_URL: "".concat(a, "/v1/private/c2c/file-upload/s3-transcoding-presigned-url"),
                GET_APPEAL_INFO: "".concat(a, "/v1/private/c2c/complaint/flow-infos"),
                CREATE_APPEAL: "".concat(a, "/v1/private/c2c/complaint/initiate"),
                CHECK_APPEAL: "".concat(a, "/v1/private/c2c/complaint/initiate/can"),
                GET_APPEAL_HISTORY: "".concat(a, "/v1/private/c2c/complaint/list"),
                GET_APPEAL_REASON_LIST: "".concat(a, "/v1/private/c2c/complaint/listAllComplaintReasons"),
                UPDATE_PROVIDE: "".concat(a, "/v1/private/c2c/complaint/provide-info"),
                UPDATE_NEGOTIATE: "".concat(a, "/v1/private/c2c/complaint/negotiate"),
                CAN_PROVIDE: "".concat(a, "/v1/private/c2c/complaint/can-provide-more-info"),
                POST_ESCALATE: "".concat(a, "/v1/private/c2c/complaint/escalate"),
                POST_AD_CHECK: "".concat(a, "/v2/private/c2c/adv/publish-check"),
                ADV_RULES: "".concat(a, "/v2/private/c2c/trade-rule/adv-rules"),
                PUBLISH_ADV: "".concat(a, "/v3/private/c2c/adv/publish"),
                ADV_COUNT: "".concat(a, "/v1/private/c2c/adv/count"),
                GET_ADV_TIME_LIMIT: "".concat(a, "/v1/private/c2c/adv/getAdvPayTimeConfig"),
                POST_ELIGIBILITY_CHECK: "".concat(a, "/v1/private/c2c/adv/publish-eligibility-check"),
                POST_ADV_BASE_CONFIG: "".concat(a, "/v2/private/c2c/adv/adv-base-config"),
                PUBLISH_AD_RISK_CHECK: "".concat(a, "/v1/private/c2c/adv/risk-check"),
                ADV_OPTION_CONFIG: "".concat(a, "/v1/private/c2c/adv/option-config"),
                GET_COMMISSION_RATE: "".concat(a, "/v1/private/c2c/adv/commission-rate"),
                POST_FACE_QR_VALID: "".concat(i, "/v1/public/kyc/user-face/face-qr-valid"),
                GET_CERTIFICATE_COUNTRIES: "".concat(i, "/v1/public/certificate/countries"),
                GET_KYC_STATUS: "".concat(i, "/v2/private/certificate/user-kyc/current-kyc-status"),
                CHECK_REQUIREMENTS: "".concat(a, "/v1/private/c2c/application/requirement"),
                CHECK_APPLY: "".concat(a, "/v1/private/c2c/application/apply-check"),
                SUBMIT_APPLICATION: "".concat(a, "/v1/private/c2c/application/submit"),
                QUERY_APPLICATION: "".concat(a, "/v1/private/c2c/application/query"),
                QUERY_APPLICATION_TEMPLATE: "".concat(a, "/v1/private/c2c/application/query-template"),
                GET_KYC_URL: "".concat(i, "/v1/private/certificate/kyc/get-kyc-url"),
                GENERATE_VIRTUAL_NUMBER: "".concat(a, "/v1/private/c2c/order-match/virtual-number"),
                GET_HISTORY: "".concat(a, "/v1/private/c2c/fetch/history"),
                EXPORT_ORDER_LIST: "".concat(a, "/v1/private/c2c/fetch/order-match"),
                EXPORT_PNL_LIST: "".concat(a, "/v1/private/c2c/fetch/profit-loss"),
                CANCEL_EXPORT: "".concat(a, "/v1/private/c2c/fetch/cancel"),
                DOWNLOAD_RECEIPT_LIMIT: "".concat(a, "/v1/private/c2c/fetch/order/receipt/limit"),
                DOWNLOAD_RECEIPT_PRECHECK: "".concat(a, "/v1/private/c2c/fetch/order/receipt/request"),
                DOWNLOAD_RECEIPT: "".concat(a, "/v1/private/c2c/fetch/order/receipt/detail"),
                GET_USER_PROFILE: "".concat(a, "/v1/private/c2c/user/profile"),
                POST_TRADE_RULE_INFO: "".concat(a, "/v1/friendly/c2c/trade-rule/info"),
                GET_REVIEW_CONFIG: "".concat(a, "/v1/private/c2c/review/review-auth-config"),
                SUBMIT_REVIEW: "".concat(a, "/v1/private/c2c/review/review"),
                GET_ORDER_REVIEW: "".concat(a, "/v1/private/c2c/review/order-review"),
                GET_REVIEW_LIST: "".concat(a, "/v1/friendly/c2c/review/list-by-page"),
                GET_USER_REVIEW_STATS: "".concat(a, "/v1/friendly/c2c/review/user-review-statistics"),
                DELETE_REVIEW: "".concat(a, "/v1/private/c2c/review/remove"),
                GET_QUICK_TAG: "".concat(a, "/v1/public/c2c/sys-config/quick-comment-tags"),
                GET_TAG_STATS: "".concat(a, "/v1/private/c2c/review/review-comment-tag-stat"),
                POST_REPLY: "".concat(a, "/v1/private/c2c/review/reply-comment"),
                GET_ALERT_STATS: "".concat(a, "/v1/public/c2c/sys-config/get-tips-config"),
                QUERY_CONFIG_TRANSLATION: "".concat(a, "/v1/private/c2c/sys-config/multi-lang/text/query"),
                GET_REPORT_REASONS: "".concat(a, "/v1/private/c2c/dispute/report/reason"),
                CREATE_SCAM_REPORT: "".concat(a, "/v1/private/c2c/dispute/report"),
                VALIDATE_REPORT_ORDER: "".concat(a, "/v1/private/c2c/dispute/validate"),
                GET_PNL_DATA: "".concat(a, "/v1/private/c2c/profit-loss/query"),
                THEMIS_ADDRESS: "/bapi/themis/api",
                GET_BLOGS: "".concat(o, "/v1/public/cms/blog/list"),
                CREATE_ONLINE_PAYMENT: "".concat(a, "/v1/private/c2c/payment/online/entry"),
                QUERY_ONLINE_PAYMENT: "".concat(a, "/v1/private/c2c/payment/online/query"),
                QUERY_EXTERNAL_PAYMENT: "".concat(a, "/v1/private/c2c/payment/online/query-external"),
                GET_BLACKLIST: "".concat(a, "/v2/private/c2c/blacklist/query"),
                ADD_BLACKLIST: "".concat(a, "/v2/private/c2c/blacklist/add"),
                REMOVE_BLACKLIST: "".concat(a, "/v2/private/c2c/blacklist/remove"),
                GET_BLACKLIST_REASON: "".concat(a, "/v2/private/c2c/blacklist/getReasons"),
                POST_USER_RESTRICTION: "".concat(a, "/v1/private/c2c/user/user-restriction/query"),
                GET_MERCHANT_INFO: "".concat(a, "/v1/private/c2c/merchant/info"),
                MERCHANT_METRIC: "".concat(a, "/v1/private/c2c/merchant/metric"),
                GET_EXTERNAL_ORDER_DETAIL: "".concat(a, "/v1/private/bilink/order/detail"),
                GET_EXTERNAL_ORDER_LIST: "".concat(a, "/v1/private/bilink/order/list-by-pagination"),
                MAKE_PRE_ORDER: "".concat(a, "/v1/friendly/bilink/order/pre-order"),
                BROKER_PORTAL_CONFIG: "".concat(a, "/v1/friendly/bilink/portal/config"),
                CHECK_WHITELIST_ENABLED: "".concat(a, "/v1/private/bilink/withdraw/whitelist/enableCheck"),
                CHECK_WHITELIST_ADDRESS: "".concat(a, "/v1/private/bilink/withdraw/whitelist/addressCheck"),
                APPLY_WITHDRAWAL: "".concat(a, "/v1/private/bilink/withdraw/apply"),
                ADD_ADDRESS_AND_WITHDRAW: "".concat(a, "/v1/private/bilink/withdraw/whitelistAndWithdraw"),
                GET_FIAT_CHANNEL: "".concat(a, "/v1/public/c2c/express/get-fiat-channel"),
                GET_ADV_FILTER_CONDITIONS: "".concat(a, "/v2/public/c2c/adv/filter-conditions"),
                GET_EXPRESS_REFRESH_TIME: "".concat(a, "/v1/friendly/c2c/adv/fetch-tags-refresh-time-for-express"),
                QUERY_CONTACT_REQUEST_LIST: "".concat(a, "/v2/private/c2c/chat/contact/request-list"),
                GET_MERCHANT_STORE: "".concat(a, "/v1/friendly/c2c/store/query-merchant-store-list"),
                GET_STORE: "".concat(a, "/v1/private/c2c/store/query-store"),
                GET_ORDER_QR_CODE: "".concat(a, "/v1/private/c2c/order-match/qrCode"),
                LIST_STORE: "".concat(a, "/v1/private/c2c/store/list-by-page"),
                ADD_FOLLOW: "".concat(a, "/v1/private/c2c/user-follower/add"),
                REMOVE_FOLLOW: "".concat(a, "/v1/private/c2c/user-follower/remove"),
                GET_FOLLOWERS: "".concat(a, "/v1/private/c2c/user-follower/follower-list"),
                GET_FOLLOWINGS: "".concat(a, "/v1/private/c2c/user-follower/following-list"),
                FOLLOW_COUNTS: "".concat(a, "/v1/private/c2c/user-follower/count"),
                GET_USER_QUIZ_REQUEST: "".concat(a, "/v1/private/c2c/user/quiz/request"),
                SUBMIT_QUIZ: "".concat(a, "/v1/private/c2c/user/quiz/submit"),
                QUERY_RESTRICTION: "".concat(a, "/v1/private/c2c/user/user-suspension/query"),
                EXPRESS_TIP: "".concat(a, "/v2/private/c2c/order-match/order-tips"),
                BANNER_LIST: "".concat(a, "/v1/friendly/c2c/banner/list"),
                GET_TAKER_COMMISSION_RATE: "".concat(a, "/v1/friendly/c2c/commission-rate/taker"),
                GET_ENTRANCE_COMPLIANCE: "".concat(r, "/v1/friendly/market/compliance/business-compliance-check"),
                GET_SWAP_HISTORY: "".concat(a, "/v1/private/c2c/swap/history"),
                GET_ORDER_DISPUTE_LIST: "".concat(a, "/v1/private/c2c/order-dispute/query"),
                SCAM_NOTIFICATION_CHECK: "".concat(a, "/v1/private/c2c/scam-notification/check"),
                DISPLAY_BUTTON: "".concat(a, "/v2/private/c2c/chat/show/display-button"),
                QUICK_CHAT_RESTRICTION: "".concat(a, "/v1/private/c2c/chat/common/quick-reply"),
                QUICK_CHAT_POPUP_CHECK: "".concat(a, "/v1/friendly/c2c/user/is-agreement-disclaimer-required"),
                QUICK_CHAT_POPUP_CONFIRM: "".concat(a, "/v1/private/c2c/user/disclaimer-accept"),
                GET_ELIGIBLE_TASK: "".concat(a, "/v1/private/c2c/task-center/get-eligible-task"),
                HAS_COMPLETED_TASK: "".concat(a, "/v1/private/c2c/task-center/has-completed-task"),
                TRADE_TAG_LIST: "".concat(a, "/v1/private/c2c/adv/tags-config-fetch"),
                TRADE_TAG_INFO_BY_AD_NO: "".concat(a, "/v1/private/c2c/adv/fetch-tags-info"),
                TRADE_TAG_EXPRESS_REFRESH_TIME: "".concat(a, "/v1/friendly/c2c/adv/fetch-tags-refresh-time-for-express"),
                GET_ADDITIONAL_KYC_EXEMPTED_CONFIG: "".concat(a, "/v1/private/c2c/adv/additional-kyc/query-exempted-config"),
                GET_ADDITIONAL_KYC_INFO: "".concat(a, "/v1/private/c2c/additional-kyc-verify/get-order-additional-kyc-verify-info"),
                CHECK_LIVENESS: "".concat(a, "/v1/private/c2c/additional-kyc-verify/check-liveness-and-process"),
                GET_ORDER_AND_KYC_STATUS: "".concat(a, "/v1/private/c2c/order-match/get-order-status-and-add-kyc"),
                GET_UPDATE_TRADE_METHOD_ELIGIBILITY_CHECK: "".concat(a, "/v2/private/c2c/adv/update-trade-methods-eligibility-check"),
                QUERY_BIDDING_MARKET_CONFIG: "".concat(a, "/v1/private/c2c/ad-bidding/query-bidding-market-config"),
                QUERY_USER_BIDDING_ELIGIBILITY: "".concat(a, "/v1/private/c2c/ad-bidding/query-user-bidding-eligibility"),
                QUERY_BIDDING_HISTORY_LIST: "".concat(a, "/v1/private/c2c/ad-bidding/query-bidding-order-list"),
                CANCEL_BIDDING: "".concat(a, "/v1/private/c2c/ad-bidding/cancel-bidding"),
                QUERY_BIDDING_ADV: "".concat(a, "/v1/private/c2c/ad-bidding/query-bidding-adv"),
                QUERY_USER_BIDDING_LIMIT: "".concat(a, "/v1/private/c2c/ad-bidding/query-user-bidding-limit"),
                PLACE_BIDDING: "".concat(a, "/v1/private/c2c/ad-bidding/place-bidding"),
                QUERY_AREA_MAPPING: "".concat(a, "/v1/private/c2c/ad-bidding/query-area-classify-mapping"),
                QUERY_BIDDING_PRICE_DETECTION_STATS: "".concat(a, "/v1/private/c2c/ad-bidding/query-bidding-price-detection-stats"),
                CHECK_SENSITIVE_WORD: "".concat(a, "/v1/private/c2c/sensitive-word/ad/text/check"),
                CHECK_SENSITIVE_WORD_ELIGIBILITY: "".concat(a, "/v2/private/c2c/sensitive-word/ad/text/check-needed"),
                GET_ADDITIONAL_KYC_CONFIG: "".concat(a, "/v1/private/c2c/additional-kyc-verify/get-additional-kyc-verify-config"),
                GET_ADV_SHARE_INFO: "".concat(a, "/v1/private/c2c/share/adv-share"),
                QUERY_GROUPS: "".concat(a, "/v2/private/c2c/chat/groups"),
                SEARCH_GROUPS: "".concat(a, "/v2/private/c2c/chat/groups/search"),
                QUERY_CONTACT_SWITCH: "".concat(a, "/v2/private/c2c/chat/contact/switch"),
                QUERY_CONTACT_STATISTIC: "".concat(a, "/v2/private/c2c/chat/contact/get-statistics"),
                QUERY_COUNTER_PARTY_STATISTIC: "".concat(a, "/v2/private/c2c/chat/get-chat-statics"),
                QUERY_USER_CHAT_PROFILE: "".concat(a, "/v2/private/c2c/chat/user/profile"),
                UPDATE_USER_CHAT_PROFILE: "".concat(a, "/v2/private/c2c/chat/user/profile/update"),
                QUERY_ADVERTISER_SHARE: "".concat(a, "/v1/private/c2c/share/advertiser-share"),
                SEARCH_FRIEND: "".concat(a, "/v2/private/c2c/chat/contact/search-friend"),
                ADD_CONTACT: "".concat(a, "/v2/private/c2c/chat/contact/add"),
                HANDLE_REQUEST: "".concat(a, "/v2/private/c2c/chat/contact/handle-request"),
                GET_MERCHANT_DEPOSIT_CONFIG: "".concat(a, "/v1/private/c2c/merchant/deposit-check"),
                CREATE_MERCHANT_DEPOSIT: "".concat(a, "/v1/private/c2c/merchant/deposit"),
                QUERY_USER_NOTIFICATION: "".concat(a, "/v1/private/c2c/notification-configuration/user/get"),
                UPDATE_USER_NOTIFICATION: "".concat(a, "/v1/private/c2c/notification-configuration/user/update"),
                GET_CONVERT_QUOTE: "".concat(a, "/v1/friendly/c2c/convert/get-quote"),
                EXECUTE_CONVERT_ORDER: "".concat(a, "/v1/private/c2c/convert/execute"),
                GET_DEFAULT_COUNTRY_ENABLE: "".concat(a, "/v1/public/c2c/adv/launch-country/country-match-enabled"),
                GET_COUNTRY_CODE_BY_IP: "".concat(a, "/v1/public/c2c/country/get-country-code-by-ip"),
                GET_EXPRESS_ZONE_COUNTRY_LIST: "".concat(a, "/v1/public/c2c/adv/express/match-condition")
            }
        },
        q6JD: (c, t, e) => {
            "use strict";
            e.d(t, {
                l: () => n
            });
            var a = e("sViW"),
                r = e("3yYM"),
                i = e.n(r);

            function n() {
                return Boolean(null === window || void 0 === window ? void 0 : window.__RUN_BY_ELECTRON_BROWSER__)
            }! function() {
                var c = (0, a.A)(i().mark((function c(t) {
                    var e, a;
                    return i().wrap((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return c.next = 3, null === window || void 0 === window || null === (e = window.__ElectronBrowserBridge) || void 0 === e || null === (a = e.postAction) || void 0 === a ? void 0 : a.call(e, t);
                            case 3:
                            case "end":
                                return c.stop()
                        }
                    }), c)
                })))
            }()
        },
        "rX+A": (c, t, e) => {
            "use strict";
            e.d(t, {
                A: () => _,
                h: () => v
            });
            var a = e("BK7R"),
                r = e("wvGK"),
                i = e("95yF"),
                n = e("q6JD"),
                o = e("faht"),
                v = function(c, t) {
                    try {
                        if ("object" === typeof t) {
                            var e = JSON.stringify(t);
                            return void r.Ay.send({
                                t: c,
                                res: e
                            })
                        }
                        if ("string" === typeof t) return void r.Ay.send({
                            t: c,
                            res: t
                        });
                        r.Ay.send({
                            t: c
                        })
                    } catch (a) {
                        r.Ay.send({
                            t: c
                        })
                    }
                };
            const _ = {
                logCounter: function(c, t) {
                    var e, r = (0, n.l)();
                    i.A.logCounter(c, (0, a.A)({
                        client: r ? "Web_Electron" : "c2c_web" === (null === (e = (0, o.KT)()) || void 0 === e ? void 0 : e.c2cType) ? "Web_UP" : "Web_MP"
                    }, t || {}), "", !1, !0)
                }
            }
        },
        g2tk: (c, t, e) => {
            "use strict";
            e.d(t, {
                A: () => o
            });
            var a = e("M5j3"),
                r = e("DTvD"),
                i = e.n(r),
                n = e("w/Qz");
            const o = function(c) {
                return i().createElement(n.A, (0, a.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, c), i().createElement("path", {
                    d: "M13.4 12l6.6 6.6-1.4 1.4-6.6-6.6L5.4 20 4 18.6l6.6-6.6L4 5.4 5.4 4l6.6 6.6L18.6 4 20 5.4 13.4 12z",
                    fill: "currentColor"
                }))
            }
        },
        RNvQ: (c, t, e) => {
            var a = e("tQYX"),
                r = e("ENE1"),
                i = e("nvU9"),
                n = Math.max,
                o = Math.min;
            c.exports = function(c, t, e) {
                var v, _, E, T, p, d, s = 0,
                    l = !1,
                    R = !1,
                    A = !0;
                if ("function" != typeof c) throw new TypeError("Expected a function");

                function I(t) {
                    var e = v,
                        a = _;
                    return v = _ = void 0, s = t, T = c.apply(a, e)
                }

                function u(c) {
                    return s = c, p = setTimeout(S, t), l ? I(c) : T
                }

                function O(c) {
                    var e = c - d;
                    return void 0 === d || e >= t || e < 0 || R && c - s >= E
                }

                function S() {
                    var c = r();
                    if (O(c)) return C(c);
                    p = setTimeout(S, function(c) {
                        var e = t - (c - d);
                        return R ? o(e, E - (c - s)) : e
                    }(c))
                }

                function C(c) {
                    return p = void 0, A && v ? I(c) : (v = _ = void 0, T)
                }

                function D() {
                    var c = r(),
                        e = O(c);
                    if (v = arguments, _ = this, d = c, e) {
                        if (void 0 === p) return u(d);
                        if (R) return clearTimeout(p), p = setTimeout(S, t), I(d)
                    }
                    return void 0 === p && (p = setTimeout(S, t)), T
                }
                return t = i(t) || 0, a(e) && (l = !!e.leading, E = (R = "maxWait" in e) ? n(i(e.maxWait) || 0, t) : E, A = "trailing" in e ? !!e.trailing : A), D.cancel = function() {
                    void 0 !== p && clearTimeout(p), s = 0, v = d = _ = p = void 0
                }, D.flush = function() {
                    return void 0 === p ? T : C(r())
                }, D
            }
        },
        ENE1: (c, t, e) => {
            var a = e("IBsm");
            c.exports = function() {
                return a.Date.now()
            }
        },
        vMSZ: (c, t, e) => {
            "use strict";
            e.d(t, {
                A: () => i
            });
            var a = e("wIZF"),
                r = e("DTvD");

            function i(c, t, e) {
                void 0 === t && (t = []), void 0 === e && (e = {
                    loading: !1
                });
                var i = (0, r.useRef)(0),
                    n = function() {
                        var c = (0, r.useRef)(!1),
                            t = (0, r.useCallback)((function() {
                                return c.current
                            }), []);
                        return (0, r.useEffect)((function() {
                            return c.current = !0,
                                function() {
                                    c.current = !1
                                }
                        }), []), t
                    }(),
                    o = (0, r.useState)(e),
                    v = o[0],
                    _ = o[1],
                    E = (0, r.useCallback)((function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var r = ++i.current;
                        return v.loading || _((function(c) {
                            return (0, a.__assign)((0, a.__assign)({}, c), {
                                loading: !0
                            })
                        })), c.apply(void 0, t).then((function(c) {
                            return n() && r === i.current && _({
                                value: c,
                                loading: !1
                            }), c
                        }), (function(c) {
                            return n() && r === i.current && _({
                                error: c,
                                loading: !1
                            }), c
                        }))
                    }), t);
                return [v, E]
            }
        }
    }
]);
//# debugId=339ca598-2634-5589-b4fd-e9dc4049b442