import tempFakeData from "../constants/temp.fakeData.js";

export const tempFakeFetchPosts = (limit) => {
    const data = [];
    let lastIndex = 0;
    for(let i=0; i<limit; i++) {
        data.push(tempFakeData.posts[i]);
        lastIndex = i;
    };
    return {
        dataResult: data,
        index: lastIndex
    };
};

export const tempFakeLoadMorePosts = (limit, prevIndex) => {
    const moreData = [];
    let lastIndex = 0;
    let counter = 0;
    for(let i=prevIndex+1; i<tempFakeData.posts.length; i++) {
        if(counter>=limit) {
            break;
        } else {
            counter++
        };
        moreData.push(tempFakeData.posts[i]);
        lastIndex = i;
    };
    return {
        dataResult: moreData,
        index: lastIndex
    };
};
