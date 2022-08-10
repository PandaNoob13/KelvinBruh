import React from "react";

export const loginService = ({doPost}) => {
    const createPost = async (newPost) => {
        try {
            return await doPost({
                url: '/login', data: newPost
            })
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    return {createPost};
}