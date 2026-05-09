const url = "http://localhost:5001";

const endpoints = {
    auth: {
        login: url+"/api/Authentication/Login",
        register: url+"/api/Authentication/Register",
        recover: url+""
    },
    crud: {
        Activities: {
            add: url+"/api/Activities/CreateNewActivity",
            findAll: url+"/api/Activities/GetAllActivities",
            findAllByPage: url+"/api/Activities/GetAllActivitiesPaginated/{page}",
            findById: url+"/api/Activities/GetActivityById/{id}",
            updateById: url+"/api/Activities/UpdateActivity/{id}",
            removeById: url+"/api/Activities/RemoveActivity/{id}"
        },
        Chats: {
            add: url+"/api/Chats/CreateNewChat",
            findAll: url+"/api/Chats/GetAllChats",
            findAllByPage: url+"/api/Chats/GetAllChatsPaginated/{page}",
            findById: url+"/api/Chats/GetChatById/{id}",
            updateById: url+"/api/Chats/UpdateChat/{id}",
            removeById: url+"/api/Chats/RemoveChat/{id}"
        },
        Cities: {
            add: url+"/api/Cities/CreateNewCity",
            findAll: url+"/api/Cities/GetAllCities",
            findAllByPage: url+"/api/Cities/GetAllCitiesPaginated/{page}",
            findById: url+"/api/Cities/GetCityById/{id}",
            updateById: url+"/api/Cities/UpdateCity/{id}",
            removeById: url+"/api/Cities/RemoveCity/{id}"
        },
        Comments: {
            add: url+"/api/Comments/CreateNewComment",
            findAll: url+"/api/Comments/GetAllComments",
            findAllByPage: url+"/api/Comments/GetAllCommentsPaginated/{page}",
            findById: url+"/api/Comments/GetCommentById/{id}",
            updateById: url+"/api/Comments/UpdateComment/{id}",
            removeById: url+"/api/Comments/RemoveComment/{id}"
        },
        Countries: {
            add: url+"/api/Countries/CreateNewCountry",
            findAll: url+"/api/Countries/GetAllCountries",
            findAllByPage: url+"/api/Countries/GetAllCountriesPaginated/{page}",
            findById: url+"/api/Countries/GetCountryById/{id}",
            updateById: url+"/api/Countries/UpdateCountry/{id}",
            removeById: url+"/api/Countries/RemoveCountry/{id}"
        },
        Hashtags: {
            add: url+"/api/Hashtags/CreateNewHashtag",
            findAll: url+"/api/Hashtags/GetAllHashtags",
            findAllByPage: url+"/api/Hashtags/GetAllHashtagsPaginated/{page}",
            findById: url+"/api/Hashtags/GetHashtagById/{id}",
            updateById: url+"/api/Hashtags/UpdateHashtag/{id}",
            removeById: url+"/api/Hashtags/RemoveHashtag/{id}"
        },
        Medias: {
            upload: url+"/api/Medias/Upload/upload",
            downloadById: url+"/api/Medias/Download/{fileId}",
            removeById: url+"/api/Medias/Remove/{fileId}"
        },
        Messages: {
            add: url+"/api/Messages/CreateNewMessage",
            findAll: url+"/api/Messages/GetAllMessages",
            findAllByPage: url+"/api/Messages/GetAllMessagesPaginated/{page}",
            findById: url+"/api/Messages/GetMessageById/{id}",
            updateById: url+"/api/Messages/UpdateMessage/{id}",
            removeById: url+"/api/Messages/RemoveMessage/{id}"
        },
        Notifications: {
            add: url+"/api/Notifications/CreateNewNotification",
            findAll: url+"/api/Notifications/GetAllNotifications",
            findAllByPage: url+"/api/Notifications/GetAllNotificationsPaginated/{page}",
            findById: url+"/api/Notifications/GetNotificationById/{id}",
            updateById: url+"/api/Notifications/UpdateNotification/{id}",
            removeById: url+"/api/Notifications/RemoveNotification/{id}"
        },
        Posts: {
            add: url+"/api/Posts/CreateNewPost",
            findAll: url+"/api/Posts/GetAllPosts",
            findAllByPage: url+"/api/Posts/GetAllPostsPaginated/{page}",
            findById: url+"/api/Posts/GetPostById/{id}",
            updateById: url+"/api/Posts/UpdatePost/{id}",
            removeById: url+"/api/Posts/RemovePost/{id}"
        },
        Reactions: {
            add: url+"/api/Reactions/CreateNewReaction",
            findAll: url+"/api/Reactions/GetAllReactions",
            findAllByPage: url+"/api/Reactions/GetAllReactionsPaginated/{page}",
            findById: url+"/api/Reactions/GetReactionById/{id}",
            updateById: url+"/api/Reactions/UpdateReaction/{id}",
            removeById: url+"/api/Reactions/RemoveReaction/{id}"
        }
    }
};

export default endpoints;
