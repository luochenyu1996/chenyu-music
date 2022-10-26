import React from "react";
import {memo} from "react";
import classnames from "classnames";
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from "@/services/local-data";
import {
    AppHeaderWrapper,
    HeaderLeft,
    HeaderRight
} from "./style";
import {NavLink} from "react-router-dom";
import {Input} from "antd";

export  default  memo(
    function HYHeader(){

        const  showItem=(item,index)=>{
            if(index<3){
                return(
                    <NavLink to={item.link}>
                        {item.title}

                        {/*   i 标签告诉浏览器将包含其中的文本以斜体字（italic）或者倾斜（oblique）字体显示

                         标题中三角下标 */}
                        <i className="sprite_01 icon"></i>
                    </NavLink>

                )

            }else {
                return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            }
        }


        return (
            <AppHeaderWrapper>
                <div  className="wrap-v1 content" >
                    <HeaderLeft>
                        <a className="logo  sprite_01" href="#/" > 网易云音乐</a>
                        <div className="select-list">
                            {
                                headerLinks.map((item,index)=>{
                                    return (
                                        // 这里做了一个选中后 做的工作
                                        <div  className={ classnames ("select-item")}   key={item.title}>
                                            {showItem(item,index)}
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </HeaderLeft>


                    <HeaderRight>
                        <Input className="search" placeholder="音乐/视频/电台/用户"   prefix={<SearchOutlined />} />
                        <div className="center" > 创作者中心</div>
                        <div className="">登录</div>
                    </HeaderRight>
                </div>

                <div className="divider"></div>
            </AppHeaderWrapper>


        )
    }

)
