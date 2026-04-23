const protochol = "http"; // http | https
const domain = "localhost:5001"; // doman name, domain extension, port

const endpoints = {
    auth: {
        login: `${protochol}://${domain}/api/Authentication/Login`,
        register: `${protochol}://${domain}/api/Authentication/Register`,
        // logout: ``,
        // recovery: ``
    },
    crud: {
        activities: {
            add: `${protochol}://${domain}/api/Activities/CreateNewActivity`,
            findAll: `${protochol}://${domain}/api/Activities/GetAllActivities`,
            findAllInPages: `${protochol}://${domain}/api/Activities/GetAllActivitiesPaginated/`,
            findById: `${protochol}://${domain}/api/Activities/GetActivityById/`,
            updateById: `${protochol}://${domain}/api/Activities/UpdateActivity/`,
            removeById: `${protochol}://${domain}/api/Activities/RemoveActivity/`
        },
        chats: {
            add: `${protochol}://${domain}/api/Chats/CreateNewChat`,
            findAll: `${protochol}://${domain}/api/Chats/GetAllChats`,
            findAllInPages: `${protochol}://${domain}/api/Chats/GetAllChatsPaginated/`,
            findById: `${protochol}://${domain}/api/Chats/GetChatById/`,
            updateById: `${protochol}://${domain}/api/Chats/UpdateChat/`,
            removeById: `${protochol}://${domain}/api/Chats/RemoveChat/`
        },
        cities: {
            add: `${protochol}://${domain}/api/Cities/CreateNewCity`,
            findAll: `${protochol}://${domain}/api/Cities/GetAllCities`,
            findAllInPages: `${protochol}://${domain}/api/Cities/GetAllCitiesPaginated/`,
            findById: `${protochol}://${domain}/api/Cities/GetCityById/`,
            updateById: `${protochol}://${domain}/api/Cities/UpdateCity/`,
            removeById: `${protochol}://${domain}/api/Cities/RemoveCity/`
        },
        comments: {
            add: `${protochol}://${domain}/api/Comments/CreateNewComment`,
            findAll: `${protochol}://${domain}/api/Comments/GetAllComments`,
            findAllInPages: `${protochol}://${domain}/api/Comments/GetAllCommentsPaginated/`,
            findById: `${protochol}://${domain}/api/Comments/GetCommentById/`,
            updateById: `${protochol}://${domain}/api/Comments/UpdateComment/`,
            removeById: `${protochol}://${domain}/api/Comments/RemoveComment/`
        },
        countries: {
            add: `${protochol}://${domain}/api/Countries/CreateNewCountry`,
            findAll: `${protochol}://${domain}/api/Countries/GetAllCountries`,
            findAllInPages: `${protochol}://${domain}/api/Countries/GetAllCountriesPaginated/`,
            findById: `${protochol}://${domain}/api/Countries/GetCountryById/`,
            updateById: `${protochol}://${domain}/api/Countries/UpdateCountry/`,
            removeById: `${protochol}://${domain}/api/Countries/RemoveCountry/`
        },
        hashtags: {
            add: `${protochol}://${domain}/api/Hashtags/CreateNewHashtag`,
            findAll: `${protochol}://${domain}/api/Hashtags/GetAllHashtags`,
            findAllInPages: `${protochol}://${domain}/api/Hashtags/GetAllHashtagsPaginated/`,
            findById: `${protochol}://${domain}/api/Hashtags/GetHashtagById/`,
            updateById: `${protochol}://${domain}/api/Hashtags/UpdateHashtag/`,
            removeById: `${protochol}://${domain}/api/Hashtags/RemoveHashtag/`
        },
        medias: {
            upload: `${protochol}://${domain}/api/Medias/Upload/upload`,
            downloadById: `${protochol}://${domain}/api/Medias/Download/`,
            removeById: `${protochol}://${domain}/api/Medias/Remove/`
        },
        messages: {
            add: `${protochol}://${domain}/api/Messages/CreateNewMessage`,
            findAll: `${protochol}://${domain}/api/Messages/GetAllMessages`,
            findAllInPages: `${protochol}://${domain}/api/Messages/GetAllMessagesPaginated/`,
            findById: `${protochol}://${domain}/api/Messages/GetMessageById/`,
            updateById: `${protochol}://${domain}/api/Messages/UpdateMessage/`,
            removeById: `${protochol}://${domain}/api/Messages/RemoveMessage/`
        },
        notifications: {
            add: `${protochol}://${domain}/api/Notifications/CreateNewNotification`,
            findAll: `${protochol}://${domain}/api/Notifications/GetAllNotifications`,
            findAllInPages: `${protochol}://${domain}/api/Notifications/GetAllNotificationsPaginated/`,
            findById: `${protochol}://${domain}/api/Notifications/GetNotificationById/`,
            updateById: `${protochol}://${domain}/api/Notifications/UpdateNotification/`,
            removeById: `${protochol}://${domain}/api/Notifications/RemoveNotification/`
        },
        posts: {
            add: `${protochol}://${domain}/api/Posts/CreateNewPost`,
            findAll: `${protochol}://${domain}/api/Posts/GetAllPosts`,
            findAllInPages: `${protochol}://${domain}/api/Posts/GetAllPostsPaginated/`,
            findById: `${protochol}://${domain}/api/Posts/GetPostById/`,
            updateById: `${protochol}://${domain}/api/Posts/UpdatePost/`,
            removeById: `${protochol}://${domain}/api/Posts/RemovePost/`
        },
        reactions: {
            add: `${protochol}://${domain}/api/Reactions/CreateNewReaction`,
            findAll: `${protochol}://${domain}/api/Reactions/GetAllReactions`,
            findAllInPages: `${protochol}://${domain}/api/Reactions/GetAllReactionsPaginated/`,
            findById: `${protochol}://${domain}/api/Reactions/GetReactionById/`,
            updateById: `${protochol}://${domain}/api/Reactions/UpdateReaction/`,
            removeById: `${protochol}://${domain}/api/Reactions/RemoveReaction/`
        }
    }
};

export default endpoints;
