/*
 * File: userGroupRequest.ts
 * Description: 用户组相关请求封装
 * Created: 2020-8-22 15:21:36
 * Author: yuzhanglong
 * Email: yuzl1123@163.com
 */

import request from "./interceptor";
import {UserGroupInfo} from "../models/UserGroup";

// 获取所有用户组信息
export const getUserGroups = () => {
  return request.get(
    "/user_group/get_user_groups"
  )
};

// 删除用户组
export const deleteUserGroup = (groupId: number) => {
  return request.delete(
    "/user_group/delete_user_group/" + groupId
  )
};

// 删除用户组
export const createUserGroup = (userGroupInfo: UserGroupInfo) => {
  return request.post(
    "/user_group/create_user_group",
    {
      name: userGroupInfo.name,
      description: userGroupInfo.description
    }
  )
};

// 编辑用户组
export const editUserGroup = (userGroupId: number, userGroupInfo: UserGroupInfo) => {
  return request.put(
    "/user_group/edit_user_group/" + userGroupId,
    {
      name: userGroupInfo.name,
      description: userGroupInfo.description
    }
  )
};

// 向用户组添加用户
export const addUserToUserGroup = (userIds: number[], userGroupId: number) => {
  return request.put(
    "/user_group/user_group_users",
    {
      userIds: userIds,
      userGroupId: userGroupId
    }
  )
}