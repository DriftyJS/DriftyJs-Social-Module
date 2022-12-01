const {Controllers,  Middleware} = require('../../../Core');

module.exports = [
    {
        method: 'POST',
        path: '/friends/request',
        handler: Controllers.Friends.newRequest,
        config: {
            pre: [{method: Middleware.apiAuth}],
            description: 'Send New Friend Request',
        },
    },
    {
        method: 'POST',
        path: '/friends/accept',
        handler: Controllers.Friends.acceptRequest,
        config: {
            pre: [{method: Middleware.apiAuth}],
            description: 'Send New Friend Request',
        },
    },
    {
        method: 'POST',
        path: '/friends/remove',
        handler: Controllers.Friends.removeFriend,
        config: {
            pre: [{method: Middleware.apiAuth}],
            description: 'Send New Friend Request',
        },
    },
    {
        method: 'GET',
        path: '/friends',
        handler: Controllers.Friends.getFriends,
        config: {
            pre: [{method: Middleware.apiAuth}],
            description: 'Get Friends',
        },
    },
];